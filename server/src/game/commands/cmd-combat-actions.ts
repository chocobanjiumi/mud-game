// Defend, escape, mount, and mounted combat command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendSystem, sendError } from '../../ws/handler.js';
import { getInventory, saveCharacter } from '../../db/queries.js';
import { ITEM_DEFS, canClassUseMount, deriveMountStats, getMountDef } from '@game/shared';
import { combat, world, questMgr, classQuest2Mgr, isInCombat, getPlayerCombatId } from '../state.js';
import { MONSTERS } from '../../data/monsters.js';
import { recordGoldSpent } from '../economy-stats.js';
import { resolveMountedIntercept, selectMountedInterceptTarget } from '../mounted-intercept.js';
import { getChar, sendCharacterStatus } from './cmd-helpers.js';

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
