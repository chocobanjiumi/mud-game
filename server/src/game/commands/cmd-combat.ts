// cmd-combat.ts — combat-related command handlers
// extracted from commands.ts

import type { WsSession } from '../../ws/handler.js';
import {
  sendNarrative, sendSystem, sendError, sendToSession,
  getSessionByCharacterId, getAllSessions,
} from '../../ws/handler.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getLearnedSkills, upgradeSkill,
  getInventory,
} from '../../db/queries.js';
import {
  ITEM_DEFS, SKILL_DEFS,
  applySkillUpgradeRule,
  getSkillMaxLevel,
  getSkillPointSummary,
  getSkillUpgradeCost,
  getSkillUpgradeDeltas,
  getSkillUpgradeRequiredLevel,
  canClassUseMount,
  deriveMountStats,
  getMountDef,
} from '@game/shared';
import type { Character, CombatLoot } from '@game/shared';
import {
  world, combat, partyMgr, questMgr, classQuestMgr, achievementMgr,
  tutorialMgr, autoBattleMgr,
  classQuest2Mgr, skillTreeMgr, guildMgr,
  isInCombat, getPlayerCombatId,
} from '../state.js';
import { MONSTERS } from '../../data/monsters.js';
import { getRoom } from '../../data/rooms.js';
import { recordMonsterCodexKill } from '../collection-log.js';
import { unlockAppearance } from '../appearance.js';
import { getPveRespawnRoomId } from '../death-respawn.js';
import { recordGoldSpent } from '../economy-stats.js';
import { addExperienceToCharacter, expRequiredForLevel } from '../leveling.js';
import { grantAndNotifyLearnableSkills, removeLegacyAdventurerSkills } from '../skill-learning.js';
import { applyFieldSkillEffect } from '../field-skill-effects.js';
import { getModifiedSkillRuntime, getResourceAffixBonus, getSkillAffixModifiers } from '../equipment-affixes.js';
import { applySkillResourceChange, checkSkillResource } from '../skill-resource.js';
import { applyHpRecovery } from '../recovery.js';
import { resolveMountedIntercept, selectMountedInterceptTarget } from '../mounted-intercept.js';
import { applyLowLevelExpPenalty, formatExpPenaltyMessage, getHighLevelCombatPenalty } from '../level-scaling.js';
import type { MonsterInstance } from '../world.js';

import {
  type CombatAttackMode,
  type CardinalDirection,
  lootCalc,
  corpseMgr,
  CARDINAL_DIRECTIONS,
  activeExitTraps,
  fieldApproachingTimers,
  FIELD_SKILL_COOLDOWN_TICK_MS,
  fieldSkillCooldowns,
  getChar,
  directionChinese,
  broadcastRoomState,
  buildRoomPayload,
  sendCharacterStatus,
  sendCharacterStatusById,
  getActiveQuestDropIds,
  scheduleCorpseExpiry,
  resolveCombatTargetId,
  spendSkillResource,
  getNumericSpecial,
  getSkillUsageContext,
  isCardinalDirection,
  exitTrapKey,
  consumeExitTrap,
  grantTrapFocus,
  fieldSkillCooldownKey,
  getFieldSkillCooldownRemaining,
  startFieldSkillCooldown,
  applyPendingHunterMarkToCombat,
  hasLocalScout,
  recordLocalScout,
  setPendingHunterMark,
  normalizeCommandTarget,
} from './cmd-helpers.js';
import { cmdInspect } from './cmd-inspect.js';
import { handlePveDefeatForPlayers } from './cmd-combat-defeat.js';
import {
  handleCrossRoomCombatSkill, handleCrossRoomFieldSkill, handleHunterMarkCrossRoomCombatSkill,
  handleHunterMarkFieldSkill, handleInstantEnemyCombatSkill, handleInstantSelfCombatSkill,
  resolveHunterMarkTarget, cmdSkillUpgrade,
} from './cmd-combat-skills.js';

// ─── Quest support skill helper (local, not in cmd-helpers) ───

function isQuestSupportSkill(skillDef: typeof SKILL_DEFS[string]): boolean {
  return Boolean(
    skillDef.special?.isHeal
    || skillDef.special?.removeDebuffs
    || skillDef.tags.includes('heal')
    || skillDef.tags.includes('support')
    || skillDef.targetType === 'single_ally'
    || skillDef.targetType === 'all_allies',
  );
}

// ─── Combat room helpers ───

function getCombatPlayersInRoom(char: Character): Character[] {
  const partyMembers = partyMgr.getPartyMembersInRoom(char.id, char.roomId);
  const players: Character[] = [];
  for (const memberId of partyMembers) {
    const memberChar = getCharacterById(memberId);
    if (memberChar && memberChar.hp > 0) players.push(memberChar);
  }
  if (players.length === 0) players.push(char);
  return players;
}

export function processCombatApproachingRound(combatId: string, char: Character, session: WsSession): void {
  const combatState = combat.getCombatState(combatId);
  for (const approaching of world.getApproachingMonsters(char.roomId)) {
    const combatEnemy = combatState?.enemyTeam.find(enemy => enemy.id === approaching.instanceId);
    if (combatEnemy?.isDead) {
      world.killMonsterByInstance(approaching.instanceId);
      world.removeApproachingMonster(char.roomId, approaching.instanceId);
    }
  }

  const arrived = world.tickApproaching(char.roomId);
  const remaining = world.getApproachingMonsters(char.roomId);
  for (const approaching of remaining) {
    combat.setApproachingArrivalTicks(combatId, approaching.instanceId, approaching.arrivalTicks);
  }

  for (const approaching of arrived) {
    const monster = world.getAliveMonsters(char.roomId).find(candidate => candidate.instanceId === approaching.instanceId);
    if (!monster) continue;

    const trap = consumeExitTrap(char.roomId, approaching.sourceDirection);
    if (trap) {
      const delayed = world.moveMonsterToApproaching(
        char.roomId,
        char.roomId,
        approaching.sourceDirection,
        monster.instanceId,
        Math.max(1, trap.arrivalTicksDelta),
        approaching.targetPlayerId ?? char.id,
        approaching.targetPartyId,
      );
      if (delayed) combat.setApproachingArrivalTicks(combatId, delayed.instanceId, delayed.arrivalTicks);
      grantTrapFocus(trap, session.sessionId);
      sendSystem(session.sessionId, `${approaching.name}觸發了${directionChinese(approaching.sourceDirection)}側陷阱，延後 ${delayed?.arrivalTicks ?? trap.arrivalTicksDelta} tick 抵達！`);
      continue;
    }

    combat.addMonsterToCombat(combatId, monster, approaching.targetPlayerId ?? char.id);
    if (applyPendingHunterMarkToCombat(char.id, combatId, monster)) {
      sendSystem(session.sessionId, `${approaching.name}身上的獵人標記被觸發。`);
    }
    combat.markMonsterArrived(combatId, approaching.instanceId);
    sendSystem(session.sessionId, `${approaching.name}從${directionChinese(approaching.sourceDirection)}方抵達並加入戰鬥！`);
  }
}

export function isApproachingToRoom(destinationRoomId: string, instanceId: string): boolean {
  return world.getApproachingMonsters(destinationRoomId).some(monster => monster.instanceId === instanceId);
}

export function resetSurvivingCombatMonsters(combatId: string, result: 'victory' | 'defeat' | 'fled' | 'ongoing'): void {
  if (result === 'victory') return;
  for (const monster of combat.getCombatMonsterInstances(combatId)) {
    if (!monster.isDead && monster.hp > 0) {
      world.resetSurvivingMonsterToOrigin(monster.instanceId);
    }
  }
}

export function startApproachingCombat(
  session: WsSession,
  char: Character,
  monsters: { monster: MonsterInstance; arrivalTicks: number }[],
): string | undefined {
  if (monsters.length === 0) return getPlayerCombatId(char.id);

  const existingCombatId = getPlayerCombatId(char.id);
  if (existingCombatId) {
    for (const entry of monsters) {
      combat.addMonsterToCombat(existingCombatId, entry.monster, char.id, {
        isApproaching: entry.arrivalTicks > 0,
        arrivalTicksRemaining: entry.arrivalTicks,
      });
      applyPendingHunterMarkToCombat(char.id, existingCombatId, entry.monster);
    }
    return existingCombatId;
  }

  const players = getCombatPlayersInRoom(char);
  const combatId = combat.startCombat(players, monsters.map(entry => entry.monster), (result) => {
    resetSurvivingCombatMonsters(combatId, result);

    if (result === 'victory') {
      const defeatedMonsters = combat.getCombatMonsterInstances(combatId)
        .filter(defeated => defeated.isDead || defeated.hp <= 0);

      for (const defeatedMonster of defeatedMonsters) {
        questMgr.updateProgress(char.id, 'kill', defeatedMonster.monsterId);
        recordMonsterCodexKill(char.id, defeatedMonster.monsterId, Boolean(defeatedMonster.def.isBoss || defeatedMonster.def.aiType === 'boss'));
        world.killMonsterByInstance(defeatedMonster.instanceId);

        const drops = lootCalc.calculateDrops(defeatedMonster.def, char.stats.luk, {
          activeQuestItemIds: [],
          partySize: players.length,
          zoneId: getRoom(char.roomId)?.zone,
          character: char,
        });
        const personalItems: Record<string, CombatLoot['items']> = {};
        for (const p of players) {
          personalItems[p.id] = lootCalc.calculatePersonalQuestDrops(
            defeatedMonster.def,
            p.stats.luk,
            getActiveQuestDropIds(p.id, defeatedMonster.def),
          );
          if (drops.exp > 0) {
            const baseExpShare = Math.max(1, Math.floor(drops.exp / players.length));
            const scaledExpShare = applyLowLevelExpPenalty(baseExpShare, p.level, defeatedMonster.def.level);
            const { expGained, levelsGained } = addExperienceToCharacter(p, scaledExpShare);
            sendSystem(getSessionByCharacterId(p.id)?.sessionId ?? '', formatExpPenaltyMessage(expGained, baseExpShare));
            if (levelsGained > 0) {
              for (let i = 0; i < levelsGained; i++) skillTreeMgr.grantPoint(p.id, p);
              grantAndNotifyLearnableSkills(p);
              sendSystem(getSessionByCharacterId(p.id)?.sessionId ?? '', `升級了！目前等級 Lv.${p.level}`);
            }
          }
          saveCharacter(p);
          sendCharacterStatusById(p.id);
        }

        const corpse = corpseMgr.createCorpse({
          roomId: char.roomId,
          monster: defeatedMonster,
          killerId: char.id,
          participantIds: players.map(player => player.id),
          loot: drops,
          personalItems,
        });
        scheduleCorpseExpiry(char.roomId, corpse.id, corpse.expiresAt);
      }
      broadcastRoomState(char.roomId);
      autoBattleMgr.processAutoAction(char.id);
    }

    if (result === 'defeat') {
      handlePveDefeatForPlayers(players, char.roomId);
      broadcastRoomState(char.roomId);
    }
  });

  for (const entry of monsters) {
    combat.addMonsterToCombat(combatId, entry.monster, char.id, {
      isApproaching: entry.arrivalTicks > 0,
      arrivalTicksRemaining: entry.arrivalTicks,
    });
    applyPendingHunterMarkToCombat(char.id, combatId, entry.monster);
  }
  combat.setRoundEndCallback(combatId, () => processCombatApproachingRound(combatId, char, session));
  sendSystem(session.sessionId, monsters.some(entry => entry.arrivalTicks > 0)
    ? '遠處的敵人已被驚動，你進入戰鬥準備迎擊。'
    : '附近的敵人已被驚動，你進入戰鬥。');
  return combatId;
}

// ─── Main combat commands ───

export function cmdAttack(session: WsSession, target: string, attackMode: CombatAttackMode = 'melee'): void {
  const char = getChar(session);
  if (!char) return;
  const attackModeLabel = attackMode === 'ranged' ? '遠程' : '近戰';

  // 如果已在戰鬥中，attack <目標> 只切換目前目標；若目標是房間怪，先拉入戰鬥群體。
  const existingCombatId = getPlayerCombatId(char.id);
  if (existingCombatId) {
    combat.setPreferredAttackMode(existingCombatId, char.id, attackMode);
    const targetId = resolveCombatTargetId(existingCombatId, target);
    if (targetId) {
      combat.setPreferredTarget(existingCombatId, char.id, targetId);
      sendSystem(session.sessionId, `已切換為${attackModeLabel}普攻，目標「${target}」。`);
      combat.broadcastCombatState(existingCombatId);
      return;
    }

    if (target) {
      const roomMonster = world.findMonsterInRoom(char.roomId, target);
      if (!roomMonster) {
        sendError(session.sessionId, `找不到戰鬥目標「${target}」。`);
        return;
      }

      combat.addMonsterToCombat(existingCombatId, roomMonster, char.id);
      if (applyPendingHunterMarkToCombat(char.id, existingCombatId, roomMonster)) {
        sendSystem(session.sessionId, `${roomMonster.def.name}身上的獵人標記被觸發。`);
      }
      sendSystem(session.sessionId, `你將${roomMonster.def.name}拉入戰鬥，並切換為${attackModeLabel}普攻目標。`);
      combat.broadcastCombatState(existingCombatId);
      return;
    }

    sendSystem(session.sessionId, `已切換為${attackModeLabel}普攻；之後未選其他行動時，每個 tick 都會維持此模式。`);
    combat.broadcastCombatState(existingCombatId);
    return;
  }

  if (!target) {
    sendError(session.sessionId, '請指定攻擊目標。用法：attack <目標名稱>');
    return;
  }

  // 在房間中尋找怪物
  const monster = world.findMonsterInRoom(char.roomId, target);
  if (!monster) {
    sendError(session.sessionId, `找不到「${target}」。`);
    return;
  }

  // 取得同房間隊友
  const partyMembers = partyMgr.getPartyMembersInRoom(char.id, char.roomId);
  const players: Character[] = [];
  for (const memberId of partyMembers) {
    const memberChar = getCharacterById(memberId);
    if (memberChar && memberChar.hp > 0) players.push(memberChar);
  }
  if (players.length === 0) players.push(char);

  // 追蹤玩家行動（用於轉職任務鉤子）
  let lastRound = 1;
  const lastPlayerActions = new Map<string, { type: string; skillId?: string }>();

  // 開始戰鬥
  const combatId = combat.startCombat(players, [monster], (result) => {
    resetSurvivingCombatMonsters(combatId, result);

    // 戰鬥結束後的處理
    if (result === 'victory') {
      const defeatedMonsters = combat.getCombatMonsterInstances(combatId)
        .filter(defeated => defeated.isDead || defeated.hp <= 0);

      for (const defeatedMonster of defeatedMonsters) {
        // 觸發任務進度
        questMgr.updateProgress(char.id, 'kill', defeatedMonster.monsterId);
        recordMonsterCodexKill(char.id, defeatedMonster.monsterId, Boolean(defeatedMonster.def.isBoss || defeatedMonster.def.aiType === 'boss'));
        achievementMgr.onMonsterKill(
          char.id,
          defeatedMonster.monsterId,
          Boolean(defeatedMonster.def.isBoss || defeatedMonster.def.aiType === 'boss'),
          Boolean(defeatedMonster.def.isElite),
          defeatedMonster.def.element,
        );

        // BOSS 擊殺額外觸發（用於每日/每週 BOSS 任務）
        if (defeatedMonster.def.isBoss) {
          questMgr.updateProgress(char.id, 'kill', 'boss');
          questMgr.updateProgress(char.id, 'defeat_boss', defeatedMonster.monsterId);
          unlockAppearance(char.id, 'aura_boss_slayer');
        }

        // 菁英怪擊殺：公會經驗 +30
        if (defeatedMonster.def.isElite || defeatedMonster.def.isBoss) {
          const guildId = guildMgr.getCharacterGuildId(char.id);
          if (guildId) {
            guildMgr.addGuildExp(guildId, 30);
          }
        }

        // 轉職任務：怪物擊殺鉤子 — 取得最後一次使用的技能類型
        const lastAction = lastPlayerActions.get(char.id);
        const usedSkillType: 'physical' | 'magical' | undefined =
          lastAction?.type === 'skill'
            ? (SKILL_DEFS[lastAction.skillId ?? '']?.damageType === 'magical' ? 'magical' : 'physical')
            : lastAction?.type === 'attack' ? 'physical' : undefined;

        classQuestMgr.onMonsterKill(char.id, defeatedMonster.monsterId, {
          usedSkillType,
          round: lastRound,
        });

        // 二轉任務：怪物擊殺鉤子
        classQuest2Mgr.onMonsterKill(char.id, defeatedMonster.monsterId, {
          isCrit: false,
          isFirstRound: lastRound <= 1,
          isElite: !!defeatedMonster.def.isElite,
          isBoss: !!defeatedMonster.def.isBoss,
          isSolo: players.length === 1,
          usedMagicOnly: usedSkillType === 'magical',
          isDark: defeatedMonster.def.element === 'dark',
          isUndead: defeatedMonster.def.element === 'dark',
        });

        world.killMonster(char.roomId, defeatedMonster.instanceId);

        // 經驗立即結算；金幣與物品留在屍體中等待搜刮。
        const drops = lootCalc.calculateDrops(defeatedMonster.def, char.stats.luk, {
          activeQuestItemIds: [],
          partySize: players.length,
          zoneId: getRoom(char.roomId)?.zone,
          character: char,
        });
        const personalItems: Record<string, CombatLoot['items']> = {};
        for (const p of players) {
          const freshChar = p;

          const activeQuestItemIds = getActiveQuestDropIds(freshChar.id, defeatedMonster.def);
          personalItems[freshChar.id] = lootCalc.calculatePersonalQuestDrops(
            defeatedMonster.def,
            freshChar.stats.luk,
            activeQuestItemIds,
          );

          // 經驗值（隊伍分配）
          if (drops.exp > 0) {
            const baseExpShare = Math.max(1, Math.floor(drops.exp / players.length));
            const scaledExpShare = applyLowLevelExpPenalty(baseExpShare, freshChar.level, defeatedMonster.def.level);
            const { expGained, levelsGained } = addExperienceToCharacter(freshChar, scaledExpShare);
            sendSystem(getSessionByCharacterId(freshChar.id)?.sessionId ?? '', formatExpPenaltyMessage(expGained, baseExpShare));

            if (levelsGained > 0) {
              for (let i = 0; i < levelsGained; i++) skillTreeMgr.grantPoint(freshChar.id, freshChar);
              grantAndNotifyLearnableSkills(freshChar);
              sendSystem(getSessionByCharacterId(freshChar.id)?.sessionId ?? '', `升級了！目前等級 Lv.${freshChar.level}`);
            }
          }

          saveCharacter(freshChar);
          sendCharacterStatusById(freshChar.id);
        }

        const corpse = corpseMgr.createCorpse({
          roomId: char.roomId,
          monster: defeatedMonster,
          killerId: char.id,
          participantIds: players.map(player => player.id),
          loot: drops,
          personalItems,
        });
        scheduleCorpseExpiry(char.roomId, corpse.id, corpse.expiresAt);
        for (const p of players) {
          sendSystem(
            getSessionByCharacterId(p.id)?.sessionId ?? '',
            `${defeatedMonster.def.name}留下了屍體（${corpse.gold} 金幣、${corpse.items.length} 種物品）。輸入 loot corpse 搜刮。`,
          );
        }
      }
      if (defeatedMonsters.length > 0) {
        broadcastRoomState(char.roomId);
      }

      // 教學系統：擊殺鉤子
      tutorialMgr.advanceStep(char.id, 'kill');

      // 自動戰鬥：戰鬥結束後排程下一次攻擊
      autoBattleMgr.processAutoAction(char.id);
    }

    // PvE 死亡懲罰
    if (result === 'defeat') {
      handlePveDefeatForPlayers(players, char.roomId);
      broadcastRoomState(char.roomId);
    }

    // 轉職任務：戰鬥結束鉤子
    if (result === 'victory' || result === 'defeat' || result === 'fled') {
      const hpPercent = char.maxHp > 0 ? Math.floor((char.hp / char.maxHp) * 100) : 0;
      classQuestMgr.onCombatEnd(char.id, char.roomId, result, hpPercent);

      for (const participant of players) {
        const freshChar = getCharacterById(participant.id);
        const playerSession = getSessionByCharacterId(participant.id);
        if (!freshChar || !playerSession) continue;
        saveCharacter(freshChar);
        sendCharacterStatus(playerSession.sessionId, freshChar);
      }
    }
  });

  combat.setPreferredTarget(combatId, char.id, monster.instanceId);
  combat.setPreferredAttackMode(combatId, char.id, attackMode);
  combat.broadcastCombatState(combatId);
  if (applyPendingHunterMarkToCombat(char.id, combatId, monster)) {
    sendSystem(session.sessionId, `${monster.def.name}身上的獵人標記被觸發。`);
  }

  combat.setRoundEndCallback(combatId, (roundInfo) => {
    lastRound = roundInfo.round;
    processCombatApproachingRound(combatId, char, session);

    for (const [playerId, action] of roundInfo.playerActions) {
      // 只追蹤玩家行動
      const playerChar = getCharacterById(playerId);
      if (!playerChar) continue;

      lastPlayerActions.set(playerId, { type: action.type, skillId: action.skillId });

      // 轉職任務：戰鬥回合鉤子
      // 只有 attack/kill 才算「攻擊」，heal/defend/support 技能不算
      let didAttack = action.type === 'attack';
      if (action.type === 'skill' && action.skillId) {
        const skillDef = SKILL_DEFS[action.skillId];
        // 治療、淨化、buff 等非攻擊技能不算攻擊
        const isHealOrSupport = skillDef && (
          skillDef.special?.isHeal ||
          skillDef.special?.removeDebuffs ||
          skillDef.targetType === 'self' ||
          skillDef.targetType === 'single_ally' ||
          skillDef.targetType === 'all_allies'
        );
        if (!isHealOrSupport) {
          didAttack = true;
        }
      }
      const hpPct = playerChar.maxHp > 0 ? Math.floor((playerChar.hp / playerChar.maxHp) * 100) : 0;
      classQuestMgr.onCombatRound(playerId, roundInfo.round, hpPct, didAttack);

      // 二轉任務：戰鬥回合鉤子（存活/不攻擊）
      classQuest2Mgr.onCombatRound(playerId, hpPct, didAttack);

      // 轉職任務：戰鬥中治療鉤子
      if (action.type === 'skill' && action.skillId) {
        const sDef = SKILL_DEFS[action.skillId];
        if (sDef && (sDef.special?.isHeal || action.skillId === 'heal' || action.skillId === 'mass_heal')) {
          if (action.targetId) {
            classQuestMgr.onHealPerformed(playerId, action.targetId);
          }
          // 二轉任務：治療鉤子
          classQuest2Mgr.onHealPerformed(playerId);
        }
        if (sDef && isQuestSupportSkill(sDef)) {
          questMgr.updateProgress(playerId, 'use_support_skill', action.skillId);
        }
        // 轉職任務：戰鬥中技能使用鉤子
        classQuestMgr.onSkillUse(playerId, action.skillId, playerChar.roomId, true);
      }

      // 自動戰鬥：戰鬥回合中檢查自動藥水/逃跑
      autoBattleMgr.checkCombatAutoActions(playerId, hpPct);
    }
  });
}

export function cmdSkill(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  removeLegacyAdventurerSkills(char);

  if (args.length === 0) {
    sendError(session.sessionId, '請指定技能名稱。用法：skill <技能名> [目標]');
    return;
  }

  if (['upgrade', 'up', 'levelup'].includes(args[0].toLowerCase())) {
    cmdSkillUpgrade(session, args.slice(1));
    return;
  }

  const skillName = args[0];
  const target = args.slice(1).join(' ');

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

  const baseSkillDef = SKILL_DEFS[matchedSkill.skillId];
  if (!baseSkillDef) {
    sendError(session.sessionId, `技能「${skillName}」資料不存在。`);
    return;
  }
  const skillDef = applySkillUpgradeRule(baseSkillDef, matchedSkill.level);
  if (skillDef.type === 'passive') {
    sendError(session.sessionId, `「${skillDef.name}」是被動技能，不需要手動使用。`);
    return;
  }
  const usageContext = getSkillUsageContext(skillDef);

  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    if (usageContext === 'field') {
      sendError(session.sessionId, `「${skillDef.name}」只能在平時使用。`);
      return;
    }
    if (handleInstantSelfCombatSkill(session, char, combatId, skillDef)) {
      tutorialMgr.advanceStep(char.id, 'skill');
      return;
    }
    if (handleInstantEnemyCombatSkill(session, char, combatId, skillDef, target)) {
      tutorialMgr.advanceStep(char.id, 'skill');
      return;
    }
    if (handleCrossRoomCombatSkill(session, char, combatId, skillDef, target)) {
      tutorialMgr.advanceStep(char.id, 'skill');
      return;
    }
    if (skillDef?.targetType === 'all_enemies' && skillDef.special?.areaScope !== 'combat') {
      for (const roomMonster of world.getAliveMonsters(char.roomId)) {
        combat.addMonsterToCombat(combatId, roomMonster);
      }
    }

    const targetId = resolveCombatTargetId(combatId, target);
    if (target && !targetId) {
      sendError(session.sessionId, `找不到戰鬥目標「${target}」。`);
      return;
    }
    const cooldownRemaining = combat.getSkillCooldownRemaining(combatId, char.id, matchedSkill.skillId);
    if (cooldownRemaining > 0) {
      sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${cooldownRemaining} tick。`);
      return;
    }

    const accepted = combat.submitAction(combatId, {
      actorId: char.id,
      type: 'skill',
      skillId: matchedSkill.skillId,
      skillLevel: matchedSkill.level,
      targetId,
    });
    if (!accepted) {
      const remaining = combat.getSkillCooldownRemaining(combatId, char.id, matchedSkill.skillId);
      sendError(session.sessionId, remaining > 0
        ? `「${skillDef.name}」冷卻中，還需 ${remaining} tick。`
        : `目前不能施放「${skillDef.name}」，戰鬥狀態或目標已改變。`);
      return;
    }
    // 教學系統：技能使用鉤子
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  if ((usageContext === 'combat' || usageContext === 'both') && handleCrossRoomFieldSkill(session, char, skillDef, target)) {
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  if (
    usageContext === 'combat'
    && skillDef.targetType === 'single_enemy'
    && target
    && world.findMonsterInRoom(char.roomId, target)
  ) {
    cmdAttack(session, target);
    if (getPlayerCombatId(char.id)) {
      cmdSkill(session, args);
    }
    return;
  }

  if (usageContext === 'combat') {
    sendError(session.sessionId, `「${skillDef.name}」只能在戰鬥中使用。`);
    return;
  }

  const skillRuntime = getModifiedSkillRuntime(char.id, skillDef, { trigger: skillDef.special?.isHeal ? 'on_heal' : 'on_cast' });
  const fieldCooldownRemaining = getFieldSkillCooldownRemaining(char.id, skillDef.id);
  if (fieldCooldownRemaining > 0) {
    sendError(session.sessionId, `「${skillDef.name}」冷卻中，還需 ${fieldCooldownRemaining} 秒。`);
    return;
  }
  const resourceCheck = checkSkillResource(char, skillDef, skillRuntime.resourceCost);
  if (!resourceCheck.ok) {
    sendError(session.sessionId, resourceCheck.message ?? `資源不足！${skillDef.name}需要 ${resourceCheck.effectiveCost} 點。`);
    return;
  }

  if (skillDef.id === 'inspect') {
    if (!target) {
      sendError(session.sessionId, '觀察需要指定目標。');
      return;
    }
    spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
    startFieldSkillCooldown(char.id, skillDef.id, skillRuntime.cooldown);
    saveCharacter(char);
    sendCharacterStatus(session.sessionId, char);
    sendSystem(session.sessionId, `你使用了「${skillDef.name}」。`);
    cmdInspect(session, target);
    classQuestMgr.onSkillUse(char.id, matchedSkill.skillId, char.roomId, false);
    if (isQuestSupportSkill(skillDef)) {
      questMgr.updateProgress(char.id, 'use_support_skill', matchedSkill.skillId);
    }
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  if (skillDef.special?.scoutDirection) {
    if (!isCardinalDirection(target)) {
      sendError(session.sessionId, `「${skillDef.name}」需要指定方向：north/east/south/west。`);
      return;
    }
    const room = getRoom(char.roomId);
    const exit = room?.exits.find(candidate => candidate.direction === target && !candidate.locked);
    const targetRoom = exit ? getRoom(exit.targetRoomId) : null;
    if (!room || !targetRoom) {
      sendError(session.sessionId, `${directionChinese(target)}方沒有可偵查的房間。`);
      return;
    }
    spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
    startFieldSkillCooldown(char.id, skillDef.id, skillRuntime.cooldown);
    recordLocalScout(char.id, room.id, targetRoom.id);
    const fieldEffect = applyFieldSkillEffect(char, skillDef, char);
    saveCharacter(char);
    sendCharacterStatus(session.sessionId, char);
    sendSystem(session.sessionId, `你偵查了${directionChinese(target)}方「${targetRoom.name}」，${fieldEffect.message ?? '掌握了周邊威脅。'}`);
    broadcastRoomState(char.roomId);
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  if (skillDef.special?.trapExit) {
    if (!isCardinalDirection(target)) {
      sendError(session.sessionId, `「${skillDef.name}」需要指定出口方向：north/east/south/west。`);
      return;
    }
    const room = getRoom(char.roomId);
    const exit = room?.exits.find(candidate => candidate.direction === target && !candidate.locked);
    if (!room || !exit) {
      sendError(session.sessionId, `${directionChinese(target)}方沒有可設置陷阱的出口。`);
      return;
    }
    spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
    startFieldSkillCooldown(char.id, skillDef.id, skillRuntime.cooldown);
    activeExitTraps.set(exitTrapKey(char.roomId, target), {
      ownerId: char.id,
      skillId: skillDef.id,
      resourceGainOnTrigger: getNumericSpecial(skillDef, 'resourceGainOnTrigger') ?? 0,
      arrivalTicksDelta: getNumericSpecial(skillDef, 'arrivalTicksDelta') ?? 1,
      placedAt: Date.now(),
    });
    saveCharacter(char);
    sendCharacterStatus(session.sessionId, char);
    sendSystem(session.sessionId, `你在${directionChinese(target)}方出口設置了「${skillDef.name}」。`);
    broadcastRoomState(char.roomId);
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  const fieldTarget = target && skillDef.targetType === 'single_ally' ? resolveFieldAllyTarget(target) : null;
  if (target && skillDef.targetType === 'single_ally' && !fieldTarget) {
    sendError(session.sessionId, `找不到技能目標「${target}」。`);
    return;
  }

  const fieldEffect = applyFieldSkillEffect(char, skillDef, fieldTarget ?? char);
  if (fieldEffect.handled) {
    if (fieldEffect.consumeResource === false) {
      sendSystem(session.sessionId, fieldEffect.message ?? '技能沒有可作用的目標。');
      return;
    }
    spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
    startFieldSkillCooldown(char.id, skillDef.id, skillRuntime.cooldown);
    if (fieldEffect.target && fieldEffect.target !== char && fieldEffect.target.id === char.id) {
      char.hp = fieldEffect.target.hp;
      char.mp = fieldEffect.target.mp;
    }
    saveCharacter(char);
    if (fieldEffect.target && fieldEffect.target.id !== char.id) {
      saveCharacter(fieldEffect.target);
    }
    sendCharacterStatus(session.sessionId, char);
    sendSystem(session.sessionId, `你使用了「${skillDef.name}」，${fieldEffect.message ?? '生效了。'}`);
  } else {
    spendSkillResource(char, skillDef, resourceCheck.effectiveCost);
    startFieldSkillCooldown(char.id, skillDef.id, skillRuntime.cooldown);
    saveCharacter(char);
    sendCharacterStatus(session.sessionId, char);
    sendSystem(session.sessionId, `你使用了「${skillDef?.name ?? skillName}」！${target ? `目標：${target}` : ''}`);
  }

  // 轉職任務：技能使用鉤子（非戰鬥中使用技能）
  classQuestMgr.onSkillUse(char.id, matchedSkill.skillId, char.roomId, false);
  if (skillDef && isQuestSupportSkill(skillDef)) {
    questMgr.updateProgress(char.id, 'use_support_skill', matchedSkill.skillId);
  }

  // 教學系統：技能使用鉤子
  tutorialMgr.advanceStep(char.id, 'skill');

  // 轉職任務：治療鉤子（非戰鬥中治療其他玩家）
  if (skillDef && (skillDef.id === 'heal' || skillDef.id === 'mass_heal' || skillDef.special?.isHeal)) {
    if (fieldEffect.target && fieldEffect.target.id !== char.id) {
      classQuestMgr.onHealPerformed(char.id, fieldEffect.target.id);
    }
  }
}

function resolveFieldAllyTarget(target: string): Character | null {
  const normalized = target.trim();
  if (!normalized) return null;
  return getCharacterById(normalized) ?? getCharacterByName(normalized);
}
