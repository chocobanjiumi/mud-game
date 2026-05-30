// Combat skill helper command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, getSessionByCharacterId, getAllSessions } from '../../ws/handler.js';
import { getCharacterById, getLearnedSkills, getInventory, saveCharacter, upgradeSkill } from '../../db/queries.js';
import { ITEM_DEFS, SKILL_DEFS, applySkillUpgradeRule, getSkillMaxLevel, getSkillPointSummary, getSkillUpgradeCost, getSkillUpgradeDeltas, getSkillUpgradeRequiredLevel } from '@game/shared';
import type { Character } from '@game/shared';
import { world, combat, partyMgr, questMgr, classQuestMgr, achievementMgr, tutorialMgr, autoBattleMgr, classQuest2Mgr, skillTreeMgr, guildMgr, isInCombat, getPlayerCombatId } from '../state.js';
import { getRoom } from '../../data/rooms.js';
import { unlockAppearance } from '../appearance.js';
import { applyFieldSkillEffect } from '../field-skill-effects.js';
import { getModifiedSkillRuntime, getResourceAffixBonus, getSkillAffixModifiers } from '../equipment-affixes.js';
import { applySkillResourceChange, checkSkillResource } from '../skill-resource.js';
import { applyHpRecovery } from '../recovery.js';
import { applyLowLevelExpPenalty, formatExpPenaltyMessage, getHighLevelCombatPenalty } from '../level-scaling.js';
import type { MonsterInstance } from '../world.js';
import { cmdInspect } from './cmd-inspect.js';
import {
  type CardinalDirection, activeExitTraps, CARDINAL_DIRECTIONS, fieldApproachingTimers, fieldSkillCooldowns,
  FIELD_SKILL_COOLDOWN_TICK_MS, getChar, directionChinese, broadcastRoomState,
  sendCharacterStatus, sendCharacterStatusById, fieldSkillCooldownKey, getFieldSkillCooldownRemaining,
  startFieldSkillCooldown, consumeExitTrap, exitTrapKey, isCardinalDirection, grantTrapFocus, getNumericSpecial,
  getSkillUsageContext, spendSkillResource, applyPendingHunterMarkToCombat, hasLocalScout,
  recordLocalScout, resolveCombatTargetId, setPendingHunterMark, normalizeCommandTarget,
} from './cmd-helpers.js';
import {
  cmdAttack, processCombatApproachingRound, resetSurvivingCombatMonsters,
  startApproachingCombat, isApproachingToRoom,
} from './cmd-combat.js';
import { handlePveDefeatForPlayers } from './cmd-combat-defeat.js';

export function cmdSkillUpgrade(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (args.length === 0) {
    sendError(session.sessionId, '請指定要升級的技能。用法：skill upgrade <技能名>');
    return;
  }

  const skillName = args.join(' ');
  const learned = getLearnedSkills(char.id);
  const matchedSkill = learned.find((ls) => {
    const def = SKILL_DEFS[ls.skillId];
    if (!def) return false;
    return def.name === skillName || def.englishName.toLowerCase() === skillName.toLowerCase() || ls.skillId === skillName;
  });

  if (!matchedSkill) {
    sendError(session.sessionId, `你沒有學過技能「${skillName}」。`);
    return;
  }

  const skillDef = SKILL_DEFS[matchedSkill.skillId];
  if (!skillDef) {
    sendError(session.sessionId, `技能「${skillName}」資料不存在。`);
    return;
  }
  const ruleMaxLevel = getSkillMaxLevel(matchedSkill.skillId);
  const upgradeCost = getSkillUpgradeCost(matchedSkill.skillId, matchedSkill.level);
  const nextLevel = matchedSkill.level + 1;
  const requiredLevel = getSkillUpgradeRequiredLevel(matchedSkill.skillId, nextLevel) ?? skillDef.learnLevel;
  const skillPoints = getSkillPointSummary(char.level, learned);

  if (matchedSkill.skillId.startsWith('race_') || matchedSkill.skillId.startsWith('faith_')) {
    sendError(session.sessionId, `「${skillDef.name}」是天賦技能，不能升級。`);
    return;
  }
  if (!upgradeCost) {
    sendError(session.sessionId, `「${skillDef.name}」目前沒有可用的升級規則。`);
    return;
  }
  if (matchedSkill.level >= ruleMaxLevel) {
    sendError(session.sessionId, `「${skillDef.name}」已達最高等級 Lv.${ruleMaxLevel}。`);
    return;
  }
  if (char.level < requiredLevel) {
    sendError(session.sessionId, `角色等級不足。「${skillDef.name}」升到 Lv.${nextLevel} 需要角色 Lv.${requiredLevel}。`);
    return;
  }
  if (skillPoints.available < upgradeCost) {
    sendError(session.sessionId, `技能點不足。「${skillDef.name}」升到 Lv.${nextLevel} 需要 ${upgradeCost} 點，你目前剩餘 ${skillPoints.available} 點。`);
    return;
  }

  const upgraded = upgradeSkill(char.id, matchedSkill.skillId);
  if (!upgraded) {
    sendError(session.sessionId, `升級「${skillDef.name}」失敗。`);
    return;
  }

  const deltas = getSkillUpgradeDeltas(skillDef, matchedSkill.level);
  const deltaText = deltas.length > 0
    ? `；${deltas.map(delta => `${delta.label} ${delta.before} -> ${delta.after}`).join('，')}`
    : '；下一級目前無數值變化';
  sendSystem(session.sessionId, `技能「${skillDef.name}」升級：Lv.${matchedSkill.level} -> Lv.${nextLevel}（消耗 ${upgradeCost} 技能點）${deltaText}`);
  sendCharacterStatus(session.sessionId, char);
}

// ─── Instant combat skill handlers ───

export function handleInstantSelfCombatSkill(
  session: WsSession,
  char: Character,
  combatId: string,
  skillDef: typeof SKILL_DEFS[string],
): boolean {
  if (!skillDef.special?.instant || skillDef.targetType !== 'self') return false;

  const healPercent = getNumericSpecial(skillDef, 'healPercent');
  const faithInvert = Boolean(skillDef.special?.faithInvert);
  if (healPercent === undefined && !faithInvert) return false;

  const state = combat.getCombatState(combatId);
  const actor = state?.playerTeam.find(player => player.id === char.id && !player.isDead);
  if (!state || !actor) {
    sendError(session.sessionId, '找不到目前戰鬥狀態。');
    return true;
  }

  if (healPercent !== undefined && actor.hp >= actor.maxHp) {
    sendSystem(session.sessionId, `${char.name} 的 HP 已經是滿的。`);
    return true;
  }

  const runtime = getModifiedSkillRuntime(char.id, skillDef, { trigger: healPercent !== undefined ? 'on_heal' : 'on_cast' });
  const cooldownRemaining = combat.getSkillCooldownRemaining(combatId, char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} tick。`);
    return true;
  }

  const resourceCheck = checkSkillResource(actor, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  applySkillResourceChange(actor, skillDef, resourceCheck.effectiveCost, actor.resourceType === 'faith' ? getResourceAffixBonus(char.id, 'faithDelta') : 0);
  combat.startSkillCooldown(combatId, char.id, skillDef.id, runtime.cooldown);

  let message: string;
  if (faithInvert) {
    const before = actor.resource;
    actor.resource = Math.min(actor.maxResource, Math.max(0, actor.maxResource - actor.resource));
    char.resource = actor.resource;
    message = `你使用了「${skillDef.name}」，信仰由 ${before} 轉為 ${actor.resource}。`;
  } else {
    const healAmount = Math.max(1, Math.floor(actor.maxHp * healPercent! / 100));
    const healed = applyHpRecovery(char, healAmount, actor);
    message = `你使用了「${skillDef.name}」，回復了 ${healed} HP。`;
  }
  char.resource = actor.resource;
  char.mp = actor.mp;
  saveCharacter(char);
  sendCharacterStatus(session.sessionId, char);

  sendSystem(session.sessionId, message);
  combat.broadcastCombatState(combatId, [message]);
  return true;
}

export function handleInstantEnemyCombatSkill(
  session: WsSession,
  char: Character,
  combatId: string,
  skillDef: typeof SKILL_DEFS[string],
  target: string,
): boolean {
  if (!skillDef.special?.instant || !['single_enemy', 'all_enemies'].includes(skillDef.targetType)) return false;

  const state = combat.getCombatState(combatId);
  const actor = state?.playerTeam.find(player => player.id === char.id && !player.isDead);
  if (!state || !actor) {
    sendError(session.sessionId, '找不到目前戰鬥狀態。');
    return true;
  }

  const targetId = skillDef.targetType === 'single_enemy'
    ? resolveCombatTargetId(combatId, target) ?? state.enemyTeam.find(enemy => !enemy.isDead && !enemy.isApproaching)?.id
    : null;
  const enemies = skillDef.targetType === 'single_enemy'
    ? state.enemyTeam.filter(candidate => candidate.id === targetId && !candidate.isDead && !candidate.isApproaching)
    : state.enemyTeam
      .filter(enemy => !enemy.isDead && !enemy.isApproaching)
      .slice(0, getNumericSpecial(skillDef, 'maxTargets') ?? state.enemyTeam.length);
  if (enemies.length === 0) {
    sendError(session.sessionId, '找不到可攻擊的本房目標。');
    return true;
  }

  const runtime = getModifiedSkillRuntime(char.id, skillDef, {
    trigger: 'on_cast',
    targetHpPercent: enemies[0].maxHp > 0 ? (enemies[0].hp / enemies[0].maxHp) * 100 : 100,
  });
  const cooldownRemaining = combat.getSkillCooldownRemaining(combatId, char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} tick。`);
    return true;
  }

  const resourceCheck = checkSkillResource(actor, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  applySkillResourceChange(actor, skillDef, resourceCheck.effectiveCost, actor.resourceType === 'faith' ? getResourceAffixBonus(char.id, 'faithDelta') : 0);
  combat.startSkillCooldown(combatId, char.id, skillDef.id, runtime.cooldown);
  const results = enemies.map(enemy => combat.executeInstantSkillDamage(combatId, char.id, enemy.id, skillDef));
  char.resource = actor.resource;
  char.mp = actor.mp;
  saveCharacter(char);
  sendCharacterStatus(session.sessionId, char);
  if (results.every(result => !result.handled)) {
    sendError(session.sessionId, `目前不能施放「${skillDef.name}」，戰鬥狀態或目標已改變。`);
  }
  return true;
}

// ─── Hunter mark helpers ───

export function resolveHunterMarkTarget(
  session: WsSession,
  char: Character,
  target: string,
): { monster: MonsterInstance; roomId: string; roomName: string; direction?: CardinalDirection } | undefined {
  const parsed = parseCrossRoomTarget(target);
  const room = getRoom(char.roomId);
  let targetRoomId = char.roomId;

  if (parsed.direction) {
    const exit = room?.exits.find(candidate => candidate.direction === parsed.direction && !candidate.locked);
    if (!exit?.targetRoomId) {
      sendError(session.sessionId, `方向 ${parsed.direction} 無法通行。`);
      return undefined;
    }
    if (!hasLocalScout(char.id, char.roomId, exit.targetRoomId)) {
      sendError(session.sessionId, `你尚未偵查 ${parsed.direction} 的房間。`);
      return undefined;
    }
    targetRoomId = exit.targetRoomId;
  }

  const candidates = world.getAliveMonsters(targetRoomId)
    .filter(monster => !parsed.direction || !isApproachingToRoom(char.roomId, monster.instanceId));
  const targetName = parsed.target;
  const monster = targetName
    ? candidates.find(candidate => candidate.instanceId === targetName || candidate.def.name === targetName || candidate.def.alias === targetName)
    : candidates[0];

  if (!monster) {
    sendError(session.sessionId, `「獵人標記」沒有找到可標記的目標。`);
    return undefined;
  }

  return {
    monster,
    roomId: targetRoomId,
    roomName: getRoom(targetRoomId)?.name ?? targetRoomId,
    direction: parsed.direction,
  };
}

export function handleHunterMarkFieldSkill(
  session: WsSession,
  char: Character,
  skillDef: typeof SKILL_DEFS[string],
  target: string,
): boolean {
  const resolved = resolveHunterMarkTarget(session, char, target);
  if (!resolved) return true;

  const runtime = getModifiedSkillRuntime(char.id, skillDef, { trigger: 'on_cast' });
  const cooldownRemaining = getFieldSkillCooldownRemaining(char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} 秒。`);
    return true;
  }
  const resourceCheck = checkSkillResource(char, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
  startFieldSkillCooldown(char.id, skillDef.id, runtime.cooldown);
  setPendingHunterMark(char.id, resolved.monster, resolved.roomId);
  saveCharacter(char);
  sendCharacterStatus(session.sessionId, char);
  const location = resolved.direction ? `${directionChinese(resolved.direction)}方「${resolved.roomName}」` : '本房';
  sendSystem(session.sessionId, `你標記了${location}的${resolved.monster.def.name}。30 秒內與該目標進入戰鬥時，獵人標記會生效 4 tick。`);
  broadcastRoomState(char.roomId);
  if (resolved.roomId !== char.roomId) broadcastRoomState(resolved.roomId);
  return true;
}

export function handleHunterMarkCrossRoomCombatSkill(
  session: WsSession,
  char: Character,
  combatId: string,
  skillDef: typeof SKILL_DEFS[string],
  target: string,
): boolean {
  const parsed = parseCrossRoomTarget(target);
  if (!parsed.direction) return false;

  const state = combat.getCombatState(combatId);
  const actor = state?.playerTeam.find(player => player.id === char.id && !player.isDead);
  if (!state || !actor) {
    sendError(session.sessionId, '找不到目前戰鬥狀態。');
    return true;
  }

  const resolved = resolveHunterMarkTarget(session, char, target);
  if (!resolved) return true;

  const runtime = getModifiedSkillRuntime(char.id, skillDef, { trigger: 'on_cast' });
  const cooldownRemaining = combat.getSkillCooldownRemaining(combatId, char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} tick。`);
    return true;
  }
  const resourceCheck = checkSkillResource(actor, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  applySkillResourceChange(actor, skillDef, resourceCheck.effectiveCost, actor.resourceType === 'faith' ? getResourceAffixBonus(char.id, 'faithDelta') : 0);
  combat.startSkillCooldown(combatId, char.id, skillDef.id, runtime.cooldown);
  setPendingHunterMark(char.id, resolved.monster, resolved.roomId);
  char.resource = actor.resource;
  char.mp = actor.mp;
  saveCharacter(char);
  sendSystem(session.sessionId, `你標記了${directionChinese(resolved.direction ?? parsed.direction)}方「${resolved.roomName}」的${resolved.monster.def.name}。標記不會驚動目標，30 秒內與該目標進入戰鬥時生效 4 tick。`);
  broadcastRoomState(char.roomId);
  if (resolved.roomId !== char.roomId) broadcastRoomState(resolved.roomId);
  return true;
}

// ─── Cross-room skill handlers ───

export function handleCrossRoomCombatSkill(
  session: WsSession,
  char: Character,
  combatId: string,
  skillDef: typeof SKILL_DEFS[string],
  target: string,
): boolean {
  const areaScope = skillDef.special?.areaScope;
  const canCrossRoom = Boolean(skillDef.special?.crossRoom || skillDef.special?.crossRoomRequiresScout || areaScope === 'adjacent_cardinal');
  if (!canCrossRoom) return false;

  const parsed = parseCrossRoomTarget(target);
  const directions = areaScope === 'adjacent_cardinal'
    ? CARDINAL_DIRECTIONS
    : parsed.direction
      ? [parsed.direction]
      : [];
  if (directions.length === 0) return false;
  if (skillDef.id === 'poison_arrow') {
    return handleHunterMarkCrossRoomCombatSkill(session, char, combatId, skillDef, target);
  }

  const state = combat.getCombatState(combatId);
  const actor = state?.playerTeam.find(player => player.id === char.id && !player.isDead);
  if (!state || !actor) {
    sendError(session.sessionId, '找不到目前戰鬥狀態。');
    return true;
  }

  const runtime = getModifiedSkillRuntime(char.id, skillDef, { trigger: skillDef.special?.isHeal ? 'on_heal' : 'on_cast' });
  const cooldownRemaining = combat.getSkillCooldownRemaining(combatId, char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} tick。`);
    return true;
  }
  const resourceCheck = checkSkillResource(actor, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  const hits: string[] = [];
  const pulledMonsters: { monster: MonsterInstance; arrivalTicks: number }[] = [];
  for (const direction of directions) {
    const room = getRoom(char.roomId);
    const exit = room?.exits.find(candidate => candidate.direction === direction && !candidate.locked);
    const targetRoomId = exit?.targetRoomId;
    if (!targetRoomId) {
      if (directions.length === 1) sendError(session.sessionId, `方向 ${direction} 無法通行。`);
      continue;
    }
    const isScouted = hasLocalScout(char.id, char.roomId, targetRoomId);
    const canBlindRandomTarget = Boolean(skillDef.special?.blindCrossRoomRandomTarget);
    if (skillDef.special?.crossRoomRequiresScout && !isScouted && !canBlindRandomTarget) {
      if (directions.length === 1) sendError(session.sessionId, `你尚未偵查 ${direction} 的房間。`);
      continue;
    }

    const candidates = world.getAliveMonsters(targetRoomId)
      .filter(monster => !isApproachingToRoom(char.roomId, monster.instanceId));
    const selected = skillDef.targetType === 'single_enemy'
      ? [selectSingleCrossRoomTarget(candidates, parsed.target, canBlindRandomTarget && !isScouted)].filter((monster): monster is NonNullable<typeof monster> => !!monster)
      : candidates.slice(0, getNumericSpecial(skillDef, 'maxTargets') ?? candidates.length);
    const hitRuntime = getModifiedSkillRuntime(char.id, skillDef, {
      trigger: 'on_hit',
      isApproachingTarget: true,
    });
    const arrivalTicks = Math.max(0, hitRuntime.arrivalTicks ?? runtime.arrivalTicks ?? getNumericSpecial(skillDef, 'arrivalTicks') ?? 1);

    for (const monster of selected) {
      const damage = applyCrossRoomSkillDamage(char, skillDef, monster);
      if (monster.hp <= 0 || monster.isDead) {
        world.killMonster(targetRoomId, monster.instanceId);
        hits.push(`${monster.def.name}受到 ${damage} 傷害並倒下`);
        continue;
      }
      const approaching = world.moveMonsterToApproaching(targetRoomId, char.roomId, direction, monster.instanceId, arrivalTicks, char.id);
      if (approaching) {
        hits.push(`${monster.def.name}受到 ${damage} 傷害，arrivalTicks=${approaching.arrivalTicks}`);
        pulledMonsters.push({ monster, arrivalTicks: approaching.arrivalTicks });
        combat.addMonsterToCombat(combatId, monster, char.id, {
          isApproaching: approaching.arrivalTicks > 0,
          arrivalTicksRemaining: approaching.arrivalTicks,
        });
      }
    }
  }

  if (hits.length === 0) {
    if (skillDef.special?.includeCurrentRoom) {
      return false;
    }
    sendError(session.sessionId, `「${skillDef.name}」沒有找到可命中的目標。`);
    return true;
  }

  applySkillResourceChange(actor, skillDef, resourceCheck.effectiveCost, actor.resourceType === 'faith' ? getResourceAffixBonus(char.id, 'faithDelta') : 0);
  combat.startSkillCooldown(combatId, char.id, skillDef.id, runtime.cooldown);
  char.resource = actor.resource;
  char.mp = actor.mp;
  saveCharacter(char);
  sendSystem(session.sessionId, `你使用了「${skillDef.name}」：${hits.join('；')}。`);
  if (pulledMonsters.some(entry => entry.arrivalTicks > 0)) {
    sendSystem(session.sessionId, '敵人已被拉入戰鬥，正在接近中。');
  }
  broadcastRoomState(char.roomId);
  return true;
}

export function handleCrossRoomFieldSkill(
  session: WsSession,
  char: Character,
  skillDef: typeof SKILL_DEFS[string],
  target: string,
): boolean {
  const areaScope = skillDef.special?.areaScope;
  const canCrossRoom = Boolean(skillDef.special?.crossRoom || skillDef.special?.crossRoomRequiresScout || areaScope === 'adjacent_cardinal');
  if (!canCrossRoom) return false;
  if (skillDef.id === 'poison_arrow') {
    return handleHunterMarkFieldSkill(session, char, skillDef, target);
  }

  const parsed = parseCrossRoomTarget(target);
  const directions = areaScope === 'adjacent_cardinal'
    ? CARDINAL_DIRECTIONS
    : parsed.direction
      ? [parsed.direction]
      : [];
  if (directions.length === 0) {
    if (parsed.target && world.findMonsterInRoom(char.roomId, parsed.target)) {
      return false;
    }
    sendError(session.sessionId, `「${skillDef.name}」需要指定方向：north/east/south/west。`);
    return true;
  }

  const runtime = getModifiedSkillRuntime(char.id, skillDef, { trigger: skillDef.special?.isHeal ? 'on_heal' : 'on_cast' });
  const cooldownRemaining = getFieldSkillCooldownRemaining(char.id, skillDef.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} 秒。`);
    return true;
  }
  const resourceCheck = checkSkillResource(char, skillDef, runtime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足，${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return true;
  }

  const hits: string[] = [];
  const affectedRooms = new Set<string>([char.roomId]);
  const pulledMonsters: { monster: MonsterInstance; arrivalTicks: number }[] = [];
  const targetRooms: { roomId: string; direction: CardinalDirection | null; isCurrentRoom: boolean; isScouted: boolean }[] = [];
  if (areaScope === 'adjacent_cardinal' && skillDef.special?.includeCurrentRoom) {
    targetRooms.push({ roomId: char.roomId, direction: null, isCurrentRoom: true, isScouted: true });
  }
  for (const direction of directions) {
    const room = getRoom(char.roomId);
    const exit = room?.exits.find(candidate => candidate.direction === direction && !candidate.locked);
    const targetRoomId = exit?.targetRoomId;
    if (!targetRoomId) {
      if (directions.length === 1) sendError(session.sessionId, `方向 ${direction} 無法通行。`);
      continue;
    }
    affectedRooms.add(targetRoomId);
    const isScouted = hasLocalScout(char.id, char.roomId, targetRoomId);
    const canBlindRandomTarget = Boolean(skillDef.special?.blindCrossRoomRandomTarget);
    if (skillDef.special?.crossRoomRequiresScout && !isScouted && !canBlindRandomTarget) {
      if (directions.length === 1) sendError(session.sessionId, `你尚未偵查 ${direction} 的房間。`);
      continue;
    }
    targetRooms.push({ roomId: targetRoomId, direction, isCurrentRoom: false, isScouted });
  }

  for (const targetRoom of targetRooms) {
    const canBlindRandomTarget = Boolean(skillDef.special?.blindCrossRoomRandomTarget);
    const candidates = world.getAliveMonsters(targetRoom.roomId)
      .filter(monster => !isApproachingToRoom(char.roomId, monster.instanceId));
    const selected = skillDef.targetType === 'single_enemy'
      ? [selectSingleCrossRoomTarget(candidates, parsed.target, canBlindRandomTarget && !targetRoom.isCurrentRoom && !targetRoom.isScouted)].filter((monster): monster is NonNullable<typeof monster> => !!monster)
      : candidates.slice(0, getNumericSpecial(skillDef, 'maxTargets') ?? candidates.length);
    const hitRuntime = getModifiedSkillRuntime(char.id, skillDef, {
      trigger: 'on_hit',
      isApproachingTarget: true,
    });
    const arrivalTicks = Math.max(0, hitRuntime.arrivalTicks ?? runtime.arrivalTicks ?? getNumericSpecial(skillDef, 'arrivalTicks') ?? 1);

    for (const monster of selected) {
      const damage = applyCrossRoomSkillDamage(char, skillDef, monster);
      if (monster.hp <= 0 || monster.isDead) {
        world.killMonster(targetRoom.roomId, monster.instanceId);
        hits.push(`${monster.def.name}受到 ${damage} 傷害並倒下`);
        continue;
      }
      if (targetRoom.isCurrentRoom) {
        hits.push(`${monster.def.name}受到 ${damage} 傷害`);
        pulledMonsters.push({ monster, arrivalTicks: 0 });
        continue;
      }
      const approaching = targetRoom.direction
        ? world.moveMonsterToApproaching(targetRoom.roomId, char.roomId, targetRoom.direction, monster.instanceId, arrivalTicks, char.id)
        : null;
      if (approaching) {
        hits.push(`${monster.def.name}受到 ${damage} 傷害，arrivalTicks=${approaching.arrivalTicks}`);
        pulledMonsters.push({ monster, arrivalTicks: approaching.arrivalTicks });
      }
    }
  }

  if (hits.length === 0) {
    sendError(session.sessionId, skillDef.special?.includeCurrentRoom
      ? `「${skillDef.name}」在本地與四方相鄰房間沒有找到可命中的目標。`
      : `「${skillDef.name}」沒有找到可命中的跨房目標。`);
    return true;
  }

  spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
  startFieldSkillCooldown(char.id, skillDef.id, runtime.cooldown);
  saveCharacter(char);
  sendCharacterStatus(session.sessionId, char);
  sendSystem(session.sessionId, `你使用了「${skillDef.name}」：${hits.join('；')}。`);
  startApproachingCombat(session, char, pulledMonsters);
  for (const roomId of affectedRooms) broadcastRoomState(roomId);
  scheduleFieldApproachingTick(char.roomId);
  return true;
}

export function selectSingleCrossRoomTarget(
  candidates: MonsterInstance[],
  target: string | undefined,
  blindRandom: boolean,
): MonsterInstance | undefined {
  if (candidates.length === 0) return undefined;
  if (blindRandom) return candidates[Math.floor(Math.random() * candidates.length)];
  if (!target) return candidates[0];
  return candidates.find(monster =>
    monster.instanceId === target ||
    monster.def.name === target ||
    monster.def.alias === target,
  );
}

// ─── Field approaching tick ───

export function scheduleFieldApproachingTick(roomId: string): void {
  if (fieldApproachingTimers.has(roomId)) return;
  if (world.getApproachingMonsters(roomId).length === 0) return;

  const timer = setTimeout(() => {
    fieldApproachingTimers.delete(roomId);
    processFieldApproachingTick(roomId);
  }, FIELD_SKILL_COOLDOWN_TICK_MS);
  fieldApproachingTimers.set(roomId, timer);
}

export function processFieldApproachingTick(roomId: string): void {
  const roomSessions = getAllSessions().filter((onlineSession) => {
    if (!onlineSession.characterId) return false;
    const onlineChar = getCharacterById(onlineSession.characterId);
    return Boolean(onlineChar && onlineChar.roomId === roomId);
  });
  const activeSession = roomSessions.find((onlineSession) => onlineSession.characterId && !isInCombat(onlineSession.characterId)) ?? roomSessions[0];

  if (activeSession?.characterId && isInCombat(activeSession.characterId)) {
    scheduleFieldApproachingTick(roomId);
    return;
  }

  const arrived = world.tickApproaching(roomId);
  if (arrived.length === 0) {
    broadcastRoomState(roomId);
    scheduleFieldApproachingTick(roomId);
    return;
  }

  for (const approaching of arrived) {
    const monster = world.getAliveMonsters(roomId).find(candidate => candidate.instanceId === approaching.instanceId);
    if (!monster) continue;

    const trap = consumeExitTrap(roomId, approaching.sourceDirection);
    if (trap) {
      const delayed = world.moveMonsterToApproaching(
        roomId,
        roomId,
        approaching.sourceDirection,
        monster.instanceId,
        Math.max(1, trap.arrivalTicksDelta),
        approaching.targetPlayerId,
        approaching.targetPartyId,
      );
      grantTrapFocus(trap, activeSession?.sessionId ?? '');
      if (activeSession) {
        sendSystem(activeSession.sessionId, `${approaching.name}觸發了${directionChinese(approaching.sourceDirection)}側陷阱，延後 ${delayed?.arrivalTicks ?? trap.arrivalTicksDelta} tick 抵達！`);
      }
      continue;
    }

    const targetSession = approaching.targetPlayerId
      ? roomSessions.find(candidate => candidate.characterId === approaching.targetPlayerId)
      : activeSession;
    const combatSession = targetSession ?? activeSession;
    if (!combatSession) continue;

    sendSystem(combatSession.sessionId, `${approaching.name}從${directionChinese(approaching.sourceDirection)}方抵達並加入戰鬥！`);
    cmdAttack(combatSession, monster.instanceId);
    const combatId = getPlayerCombatId(combatSession.characterId ?? '');
    if (combatSession.characterId && combatId && applyPendingHunterMarkToCombat(combatSession.characterId, combatId, monster)) {
      sendSystem(combatSession.sessionId, `${approaching.name}身上的獵人標記被觸發。`);
    }
  }

  broadcastRoomState(roomId);
  scheduleFieldApproachingTick(roomId);
}

// ─── Cross-room target parsing ───

export function parseCrossRoomTarget(target: string): { direction?: CardinalDirection; target?: string } {
  const tokens = target.split(/\s+/).filter(Boolean);
  let direction: CardinalDirection | undefined;
  const rest: string[] = [];
  for (const token of tokens) {
    const normalized = token.startsWith('direction:') ? token.slice('direction:'.length) : token;
    if (isCardinalDirection(normalized)) direction = normalized;
    else rest.push(token);
  }
  return { direction, target: rest.join(' ') };
}

export function applyCrossRoomSkillDamage(char: Character, skillDef: typeof SKILL_DEFS[string], monster: ReturnType<typeof world.getAliveMonsters>[number]): number {
  const stat = skillDef.damageType === 'physical'
    ? char.stats.str * 2 + char.stats.dex
    : char.stats.int * 2;
  const defense = skillDef.damageType === 'physical' ? monster.def.vit : Math.floor((monster.def.int + monster.def.vit) / 2);
  const outputModifiers = getSkillAffixModifiers(char.id, skillDef, {
    trigger: 'on_hit',
    targetHpPercent: monster.maxHp > 0 ? (monster.hp / monster.maxHp) * 100 : 100,
    isApproachingTarget: true,
  });
  const penalty = getHighLevelCombatPenalty(char.level, monster.def.level);
  const multiplier = skillDef.multiplier * (1 + outputModifiers.damageBonusPct / 100) * penalty.damageMultiplier;
  const damage = Math.max(1, Math.floor(stat * multiplier - defense * 0.5));
  monster.hp = Math.max(0, monster.hp - damage);
  if (monster.hp <= 0) monster.isDead = true;
  return damage;
}
