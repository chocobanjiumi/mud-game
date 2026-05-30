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

// ─── Late-binding dependency for cmdInspect ───
// cmdInspect lives in commands.ts; to avoid circular imports,
// the main module registers it at startup via setCmdInspect().
let _cmdInspect: ((session: WsSession, target: string) => void) | null = null;

export function setCmdInspect(fn: (session: WsSession, target: string) => void): void {
  _cmdInspect = fn;
}

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

// ─── PvE defeat handling ───

function handlePveDefeat(player: Character, deathRoomId: string): void {
  const beforeExp = player.exp;
  const beforeGold = player.gold;
  const beforeLevel = player.level;
  const expPenalty = Math.floor(player.exp * 0.05);
  const minExpForLevel = expRequiredForLevel(player.level);
  player.exp = Math.max(minExpForLevel, player.exp - expPenalty);
  const expLost = beforeExp - player.exp;

  const goldLost = Math.floor(player.gold * 0.1);
  player.gold = Math.max(0, player.gold - goldLost);
  const actualGoldLost = beforeGold - player.gold;
  if (actualGoldLost > 0) recordGoldSpent(actualGoldLost);

  player.hp = Math.floor(player.maxHp * 0.5);
  player.mp = Math.floor(player.maxMp * 0.5);
  const respawnRoomId = getPveRespawnRoomId(deathRoomId);
  player.roomId = respawnRoomId;
  world.placePlayer(player.id, respawnRoomId);
  saveCharacter(player);

  const playerSession = getSessionByCharacterId(player.id);
  if (!playerSession) return;

  const respawnRoom = getRoom(respawnRoomId);
  const respawnName = respawnRoom?.name ?? respawnRoomId;
  sendNarrative(playerSession.sessionId, `你被擊敗了！失去了 ${expLost} 經驗值和 ${actualGoldLost} 金幣。`, 'error');
  sendNarrative(playerSession.sessionId, `你慢慢甦醒過來...發現已回到${respawnName}。`);
  sendToSession(playerSession.sessionId, 'death_notice' as any, {
    title: '你死亡了',
    message: `你在戰鬥中倒下，靈魂被送回${respawnName}。`,
    losses: {
      exp: expLost,
      gold: actualGoldLost,
      items: [],
      levelDown: player.level < beforeLevel,
    },
    recovery: {
      hp: player.hp,
      maxHp: player.maxHp,
      mp: player.mp,
      maxMp: player.maxMp,
    },
    respawn: {
      roomId: respawnRoomId,
      roomName: respawnName,
    },
  });
  const roomPayload = buildRoomPayload(player);
  if (roomPayload) {
    sendToSession(playerSession.sessionId, 'room', roomPayload as unknown as Record<string, unknown>);
  }
  sendCharacterStatus(playerSession.sessionId, player);
}

function handlePveDefeatForPlayers(players: Character[], deathRoomId: string): void {
  for (const player of players) {
    handlePveDefeat(player, deathRoomId);
  }
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

function processCombatApproachingRound(combatId: string, char: Character, session: WsSession): void {
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

function isApproachingToRoom(destinationRoomId: string, instanceId: string): boolean {
  return world.getApproachingMonsters(destinationRoomId).some(monster => monster.instanceId === instanceId);
}

function resetSurvivingCombatMonsters(combatId: string, result: 'victory' | 'defeat' | 'fled' | 'ongoing'): void {
  if (result === 'victory') return;
  for (const monster of combat.getCombatMonsterInstances(combatId)) {
    if (!monster.isDead && monster.hp > 0) {
      world.resetSurvivingMonsterToOrigin(monster.instanceId);
    }
  }
}

function startApproachingCombat(
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
    if (_cmdInspect) {
      _cmdInspect(session, target);
    }
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

function handleInstantSelfCombatSkill(
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

function handleInstantEnemyCombatSkill(
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

function resolveHunterMarkTarget(
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

function handleHunterMarkFieldSkill(
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

function handleHunterMarkCrossRoomCombatSkill(
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

function handleCrossRoomCombatSkill(
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

function handleCrossRoomFieldSkill(
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

function selectSingleCrossRoomTarget(
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

function scheduleFieldApproachingTick(roomId: string): void {
  if (fieldApproachingTimers.has(roomId)) return;
  if (world.getApproachingMonsters(roomId).length === 0) return;

  const timer = setTimeout(() => {
    fieldApproachingTimers.delete(roomId);
    processFieldApproachingTick(roomId);
  }, FIELD_SKILL_COOLDOWN_TICK_MS);
  fieldApproachingTimers.set(roomId, timer);
}

function processFieldApproachingTick(roomId: string): void {
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

function parseCrossRoomTarget(target: string): { direction?: CardinalDirection; target?: string } {
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

function applyCrossRoomSkillDamage(char: Character, skillDef: typeof SKILL_DEFS[string], monster: ReturnType<typeof world.getAliveMonsters>[number]): number {
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

// ─── Defend / Escape ───

export function cmdDefend(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitAction(combatId, { actorId: char.id, type: 'defend' });
    return;
  }
  sendSystem(session.sessionId, '你擺出了防禦姿態。');
}

export function cmdEscape(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitActionAndResolveRound(combatId, { actorId: char.id, type: 'flee' });
    return;
  }
  sendSystem(session.sessionId, '你不在戰鬥中。');
}

// ─── Mount commands ───

export function cmdMount(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = (args[0] ?? 'status').toLowerCase();
  if (sub === 'status' || sub === 'info') {
    const mount = getMountDef(char.activeMountId);
    const mountStats = deriveMountStats(mount, char.equipment.saddle ? ITEM_DEFS[char.equipment.saddle] : undefined);
    sendSystem(session.sessionId, '── 坐騎狀態 ──');
    sendSystem(session.sessionId, `坐騎：${mount ? `${mount.name} (${mount.id})` : '無'}`);
    sendSystem(session.sessionId, `狀態：${char.mounted ? '騎乘中' : '未騎乘'}，疲勞 ${Math.max(0, char.mountFatigue ?? 0)}/${mountStats?.fatigueMax ?? 0}`);
    sendSystem(session.sessionId, '指令：mount ride / mount dismount / mount dismiss');
    return;
  }

  if (sub === 'ride') {
    if (!char.activeMountId) {
      sendError(session.sessionId, '你目前沒有可呼喚的坐騎。');
      return;
    }
    if (!canClassUseMount(char.classId, char.activeMountId)) {
      sendError(session.sessionId, '你的職業無法使用這匹坐騎。');
      return;
    }
    if (char.mounted) {
      sendError(session.sessionId, '你已經在騎乘狀態。');
      return;
    }

    const combatId = getPlayerCombatId(char.id);
    if (combatId) {
      const ok = combat.submitAction(combatId, { actorId: char.id, type: 'mount_ride' });
      if (!ok) {
        sendError(session.sessionId, '目前無法排入上馬行動。');
        return;
      }
      sendSystem(session.sessionId, '你準備呼喚坐騎，上馬會在本 tick 結算。');
      return;
    }

    char.mounted = true;
    char.mountFatigue = Math.max(0, char.mountFatigue ?? 0);
    saveCharacter(char);
    sendSystem(session.sessionId, `你呼喚${getMountDef(char.activeMountId)?.name ?? '坐騎'}並進入騎乘狀態。`);
    sendCharacterStatus(session.sessionId, char);
    return;
  }

  if (sub === 'dismount' || sub === 'dismiss') {
    const combatId = getPlayerCombatId(char.id);
    const state = combatId ? combat.getCombatState(combatId) : undefined;
    const actor = state?.playerTeam.find(player => player.id === char.id);
    if (!char.mounted && !actor?.mounted) {
      sendError(session.sessionId, '你目前不在騎乘狀態。');
      return;
    }
    if (actor) actor.mounted = false;

    char.mounted = false;
    if (sub === 'dismiss') {
      sendSystem(session.sessionId, '你讓坐騎退到戰線外。');
    } else {
      sendSystem(session.sessionId, '你解除騎乘姿態。');
    }
    saveCharacter(char);
    sendCharacterStatus(session.sessionId, char);
    return;
  }

  sendError(session.sessionId, '用法：mount / mount ride / mount dismount / mount dismiss');
}

export function cmdMountedCharge(session: WsSession, targetId: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!char.mounted) {
    sendError(session.sessionId, '你必須先進入騎乘狀態才能衝鋒。');
    return;
  }
  const combatId = getPlayerCombatId(char.id);
  if (!combatId) {
    sendError(session.sessionId, '衝鋒只能在戰鬥中使用。');
    return;
  }
  const normalizedTarget = targetId.trim() || undefined;
  const ok = combat.submitAction(combatId, {
    actorId: char.id,
    type: 'mount_charge',
    targetId: normalizedTarget,
  });
  if (!ok) {
    sendError(session.sessionId, '目前無法排入騎乘衝鋒。');
    return;
  }
  sendSystem(session.sessionId, '你準備發動騎乘衝鋒。');
}

export function cmdMounted(session: WsSession, args: string[]): void {
  const sub = (args[0] ?? '').toLowerCase();
  if (sub !== 'guard') {
    sendError(session.sessionId, '用法：mounted guard <隊友ID>');
    return;
  }
  const char = getChar(session);
  if (!char) return;
  if (!char.mounted) {
    sendError(session.sessionId, '你必須先進入騎乘狀態才能騎乘守護。');
    return;
  }
  const combatId = getPlayerCombatId(char.id);
  if (!combatId) {
    sendError(session.sessionId, '騎乘守護只能在戰鬥中使用。');
    return;
  }
  const targetId = args.slice(1).join(' ').trim() || char.id;
  const ok = combat.submitAction(combatId, {
    actorId: char.id,
    type: 'mounted_guard',
    targetId,
  });
  if (!ok) {
    sendError(session.sessionId, '目前無法排入騎乘守護。');
    return;
  }
  sendSystem(session.sessionId, '你準備執行騎乘守護。');
}

export function cmdMountedIntercept(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  if (!char.mounted) {
    sendError(session.sessionId, '你必須先進入騎乘狀態才能攔截。');
    return;
  }
  const mount = getMountDef(char.activeMountId);
  const mountStats = deriveMountStats(mount, char.equipment.saddle ? ITEM_DEFS[char.equipment.saddle] : undefined);
  if (!mountStats) {
    sendError(session.sessionId, '你目前沒有可用坐騎。');
    return;
  }

  const arg = args.join(' ').trim();
  const approaching = world.getApproachingMonsters(char.roomId);
  const target = selectMountedInterceptTarget(approaching, arg);
  if (!target) {
    sendError(session.sessionId, '沒有找到可攔截的 approaching 目標。');
    return;
  }

  const monsterDef = MONSTERS[target.monsterId];
  const { delay } = resolveMountedIntercept(mountStats, char.stats, monsterDef);
  if (delay > 0) {
    const next = approaching.map(monster =>
      monster.instanceId === target.instanceId
        ? { ...monster, arrivalTicks: monster.arrivalTicks + delay }
        : monster,
    );
    world.setApproachingMonsters(char.roomId, next);
  }
  char.mountFatigue = Math.max(0, (char.mountFatigue ?? 0) + 10);
  const resultText = delay > 0
    ? `延後 ${delay} tick`
    : `未能延後抵達`;
  if (char.mountFatigue >= mountStats.fatigueMax) {
    char.mounted = false;
    sendSystem(session.sessionId, `你策馬攔截「${target.name}」，${resultText}，但坐騎疲勞達到上限，被迫下馬。`);
  } else {
    sendSystem(session.sessionId, `你策馬攔截「${target.name}」，${resultText}。`);
  }
  saveCharacter(char);
  sendCharacterStatus(session.sessionId, char);
}
