// World inspection, searching, movement, and status command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession, getSessionByCharacterId } from '../../ws/handler.js';
import { getCharacterById, getCharacterAliases, getInventory, getLearnedSkills, removeInventoryItem, saveCharacter, unlockZone, recordDiscovery } from '../../db/queries.js';
import { ITEM_DEFS, calculateAtk, calculateCritDamage, calculateCritRate, calculateDef, calculateDodgeRate, calculateHitRate, calculateMatk, calculateMdef, getSkillPointSummary } from '@game/shared';
import type { Character } from '@game/shared';
import { combat, world, partyMgr, questMgr, guardianMgr, classQuestMgr, classQuest2Mgr, tutorialMgr, isInCombat, getPlayerCombatId } from '../state.js';
import { findNpcByName } from '../../data/npcs.js';
import { getRoom, getRoomByWorldCoord, getRoomWorldCoord } from '../../data/rooms.js';
import { getLevelExpProgress } from '../leveling.js';
import { removeLegacyAdventurerSkills } from '../skill-learning.js';
import { buildOrdinalLabels } from '../room-entities.js';
import {
  broadcastRoomState, buildRoomPayload, canAccessZone, clearLocalScouts, corpseMgr,
  directionChinese, findExit, findGroundItem, getAvailableGroundItems, getChar,
  isCorpseEmptyForCharacter, isRemovedVerticalDirection, normalizeCommandTarget,
  sendCharacterStatus, sendQuestUpdate, sendSearchSummary, shouldShowCorpseToCharacter,
  updateExplorationAchievements,
} from './cmd-helpers.js';

export function cmdLook(session: WsSession, target?: string): void {
  const char = getChar(session);
  if (!char) return;

  // look <target> — 查看 NPC、怪物或玩家
  if (target) {
    // 先找 NPC
    const npc = findNpcByName(target, char.roomId);
    if (npc) {
      sendNarrative(session.sessionId, `═══ ${npc.name}/${npc.alias}（${npc.title}）═══`, 'npc');
      if (npc.description) {
        sendNarrative(session.sessionId, npc.description);
      }
      const typeLabel = npc.type === 'merchant' ? '商人' : npc.type === 'class_trainer' ? '職業導師' : npc.type === 'quest' ? '任務' : npc.type === 'innkeeper' ? '旅店老闆' : 'NPC';
      sendSystem(session.sessionId, `類型：${typeLabel}`);
      if (npc.dialogue?.length > 0) {
        sendSystem(session.sessionId, `輸入 talk ${npc.name} 與其對話`);
      }
      if (npc.shopItems?.length) {
        sendSystem(session.sessionId, `此 NPC 可交易，輸入 shop ${npc.name} 開啟商店`);
      }
      return;
    }
    // 找怪物（支援中文名、英文 alias 和同名序號）
    const monster = world.findMonsterInRoom(char.roomId, target);
    if (monster) {
      sendSystem(session.sessionId, `═══ ${monster.def.name} (Lv.${monster.def.level}) ═══`);
      if (monster.def.description) {
        sendNarrative(session.sessionId, monster.def.description);
      }
      sendSystem(session.sessionId, `HP：${monster.hp}/${monster.maxHp}  屬性：${monster.def.element || '無'}`);
      if (monster.def.isBoss) sendSystem(session.sessionId, '⚠ BOSS 怪物');
      if (monster.def.isElite) sendSystem(session.sessionId, '★ 菁英怪物');
      sendSystem(session.sessionId, `輸入 attack ${monster.def.alias || monster.def.name} 攻擊`);
      return;
    }
    // 找玩家
    const playersInRoom = world.getPlayersInRoom(char.roomId).filter(id => id !== char.id);
    for (const pid of playersInRoom) {
      const p = getCharacterById(pid);
      if (p && p.name.includes(target)) {
        sendSystem(session.sessionId, `═══ ${p.name} ═══`);
        sendSystem(session.sessionId, `等級 ${p.level} ${p.classId}`);
        return;
      }
    }
    sendSystem(session.sessionId, `找不到「${target}」。`);
    return;
  }

  const roomInfo = world.getRoomInfo(char.roomId);
  if (!roomInfo) {
    sendNarrative(session.sessionId, '你身處一個未知的地方。');
    return;
  }
  recordDiscovery(char.id, roomInfo.room.zone, roomInfo.room.id, 'visit_room', roomInfo.room.id);
  updateExplorationAchievements(char.id, roomInfo.room.zone, roomInfo.room.id);

  const payload = buildRoomPayload(char);
  if (!payload) return;
  sendToSession(session.sessionId, 'room', payload as unknown as Record<string, unknown>);

  // 顯示地上物品
  const groundItems = getAvailableGroundItems(char.roomId);
  for (const gi of groundItems) {
    const def = ITEM_DEFS[gi.itemId];
    if (def) {
      sendNarrative(session.sessionId, `${gi.description}（${def.name}）`, 'item');
    }
  }

  const corpses = corpseMgr.getCorpses(char.roomId).filter(corpse => shouldShowCorpseToCharacter(corpse, char.id));
  const corpseLabels = buildOrdinalLabels(corpses, corpse => corpse.monsterName);
  for (const [index, corpse] of corpses.entries()) {
    const empty = isCorpseEmptyForCharacter(corpse, char.id);
    sendNarrative(
      session.sessionId,
      `${corpseLabels[index]}的屍體倒在這裡。${empty ? '已被搜刮一空。' : '搜刮'}`,
      'item',
      empty ? undefined : [{
        name: '搜刮',
        entityType: 'action',
        cmdName: '搜刮',
        actionCommand: `loot ${corpse.id}`,
      }],
    );
  }

  // 觸發任務進度（拜訪地點）
  questMgr.updateProgress(char.id, 'visit', char.roomId);
  sendQuestUpdate(session, 'sync');
}

export function cmdSearch(session: WsSession, target?: string): void {
  const char = getChar(session);
  if (!char) return;

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '你找不到任何可搜尋的環境線索。');
    return;
  }

  const normalizedTarget = target?.trim();
  const discoveryTarget = normalizedTarget ? `${room.id}:${normalizeCommandTarget(normalizedTarget)}` : room.id;
  recordDiscovery(char.id, room.zone, room.id, 'search', discoveryTarget);

  if (normalizedTarget) {
    const lower = normalizeCommandTarget(normalizedTarget);
    if (lower === 'corpse' || lower === '屍體' || lower.includes('corpse')) {
      const result = corpseMgr.searchCorpse(room.id, normalizedTarget, Date.now(), char.id);
      sendSystem(session.sessionId, result.message);
      if (result.ok) questMgr.updateProgress(char.id, 'inspect_object', 'corpse');
      return;
    }

    if (lower === 'room' || lower === 'area' || room.name.includes(normalizedTarget) || room.id === lower) {
      sendNarrative(session.sessionId, room.description);
      sendSearchSummary(session, room);
      return;
    }

    const ground = findGroundItem(room.id, normalizedTarget);
    if (ground) {
      const def = ITEM_DEFS[ground.itemId];
      sendNarrative(session.sessionId, `你仔細搜尋「${def?.name ?? ground.itemId}」附近。${ground.description}`);
      sendSystem(session.sessionId, `可用 take ${def?.name ?? ground.itemId} 撿取。`);
      return;
    }

    if (findExit(room, normalizedTarget)) {
      const exit = findExit(room, normalizedTarget)!;
      sendSystem(session.sessionId, `你檢查${directionChinese(exit.direction)}側通路。${exit.description ?? '通路可通行，但仍需留意另一側的危險。'}`);
      return;
    }

    const monster = world.findMonsterInRoom(room.id, normalizedTarget);
    if (monster) {
      sendSystem(session.sessionId, `你觀察到 ${monster.def.name} 正在附近活動。HP ${monster.hp}/${monster.maxHp}，等級 ${monster.def.level}。`);
      return;
    }

    const npc = findNpcByName(normalizedTarget, room.id);
    if (npc) {
      sendNarrative(session.sessionId, `你在附近找到 ${npc.name}。${npc.description}`);
      return;
    }

    sendSystem(session.sessionId, `你搜尋「${normalizedTarget}」，沒有發現明確線索。`);
    return;
  }

  sendSearchSummary(session, room);
}

export function cmdGo(session: WsSession, direction: string): void {
  const char = getChar(session);
  if (!char) return;

  if (!direction) {
    sendError(session.sessionId, '請指定方向：north, south, east, west');
    return;
  }

  if (isRemovedVerticalDirection(direction)) {
    sendError(session.sessionId, '上下移動已取消，請使用 north, south, east, west。');
    return;
  }

  if (isInCombat(char.id)) {
    if (!prepareMoveThroughExit(session, char, direction, false)) return;
    const combatId = getPlayerCombatId(char.id);
    if (!combatId) {
      sendError(session.sessionId, '戰鬥狀態異常，暫時無法移動。');
      return;
    }
    sendSystem(session.sessionId, `你嘗試往${directionChinese(direction)}方脫離戰鬥。`);
    const result = combat.submitActionAndResolveRound(combatId, { actorId: char.id, type: 'flee' });
    if (result === 'fled') {
      if (!prepareMoveThroughExit(session, char, direction, true)) return;
      moveCharacterToDirection(session, char, direction);
      return;
    }
    if (result === 'defeat') {
      sendError(session.sessionId, '你逃跑失敗，並在追擊中倒下。');
      return;
    }
    sendError(session.sessionId, '你逃跑失敗，敵人趁勢攻擊了你！');
    return;
  }

  if (!prepareMoveThroughExit(session, char, direction, true)) return;
  moveCharacterToDirection(session, char, direction);
}

export function prepareMoveThroughExit(session: WsSession, char: Character, direction: string, consumeKey: boolean): boolean {
  const currentRoom = getRoom(char.roomId);
  if (!currentRoom) return true;

  const exit = currentRoom.exits.find(e => e.direction === direction);

  if (exit?.locked) {
    if (!exit.keyItemId) {
      sendError(session.sessionId, '這個出口上鎖，暫時無法通過。');
      return false;
    }
    const inv = getInventory(char.id);
    const hasKey = inv.some(item => item.itemId === exit.keyItemId);
    if (!hasKey) {
      const keyDef = ITEM_DEFS[exit.keyItemId];
      const keyName = keyDef?.name ?? exit.keyItemId;
      sendError(session.sessionId, `這扇門被鎖住了。你需要${keyName}才能通過。`);
      return false;
    }
    if (consumeKey) {
      removeInventoryItem(char.id, exit.keyItemId, 1);
      exit.locked = false;
      const keyDef = ITEM_DEFS[exit.keyItemId];
      const keyName = keyDef?.name ?? exit.keyItemId;
      sendNarrative(session.sessionId, `你使用了${keyName}打開了門鎖。`);
    }
  }

  let targetRoom: ReturnType<typeof getRoom>;
  if (exit) {
    targetRoom = getRoom(exit.targetRoomId);
  } else {
    const coord = getRoomWorldCoord(char.roomId);
    const delta = { north: { dx: 0, dy: -1 }, south: { dx: 0, dy: 1 }, east: { dx: 1, dy: 0 }, west: { dx: -1, dy: 0 } }[direction];
    if (coord && delta) {
      targetRoom = getRoomByWorldCoord(coord.worldX + delta.dx, coord.worldY + delta.dy);
    }
  }

  if (targetRoom && targetRoom.zone !== currentRoom.zone) {
    const access = canAccessZone(char, targetRoom.zone);
    if (!access.ok) {
      sendError(session.sessionId, access.message);
      return false;
    }
  }

  return true;
}

export function moveCharacterToDirection(session: WsSession, char: Character, direction: string): void {
  const followerIds = partyMgr.getFollowersOf(char.id)
    .filter(followerId => followerId !== char.id && !isInCombat(followerId))
    .filter(followerId => getCharacterById(followerId)?.roomId === char.roomId);
  const result = world.handleMove(char.id, direction as any);
  if (!result) {
    sendError(session.sessionId, `無法往 ${directionChinese(direction)} 移動。`);
    return;
  }

  clearLocalScouts(char.id);
  char.roomId = result.room.id;
  unlockZone(char.id, result.room.zone, 'enter');
  saveCharacter(char);
  sendNarrative(session.sessionId, `你往 ${directionChinese(direction)} 移動了。`);
  cmdLook(session);
  broadcastRoomState(result.fromRoomId);
  broadcastRoomState(result.room.id);

  // 守護靈感知：進入新房間時自動觸發
  guardianMgr.processGuardianSense(session.sessionId, char);

  // 轉職任務：房間進入鉤子
  classQuestMgr.onRoomEnter(char.id, char.roomId);

  // 二轉任務：房間進入鉤子（造訪所有區域/森林）
  classQuest2Mgr.onRoomEnter(char.id, char.roomId, false, false);

  // 教學系統：移動鉤子
  tutorialMgr.advanceStep(char.id, 'move');

  for (const followerId of followerIds) {
    moveFollowingCharacter(followerId, direction, result.fromRoomId, result.room.id);
  }
}

export function moveFollowingCharacter(followerId: string, direction: string, fromRoomId: string, targetRoomId: string): void {
  const follower = getCharacterById(followerId);
  const followerSession = getSessionByCharacterId(followerId);
  if (!follower || !followerSession || follower.roomId !== fromRoomId) return;
  if (!prepareMoveThroughExit(followerSession, follower, direction, false)) return;

  const result = world.handleMove(follower.id, direction as any);
  if (!result || result.room.id !== targetRoomId) return;

  clearLocalScouts(follower.id);
  follower.roomId = result.room.id;
  unlockZone(follower.id, result.room.zone, 'enter');
  saveCharacter(follower);
  sendNarrative(followerSession.sessionId, `你跟隨隊友往 ${directionChinese(direction)} 移動。`);
  cmdLook(followerSession);
  cmdStatus(followerSession);
  broadcastRoomState(result.fromRoomId);
  broadcastRoomState(result.room.id);
  guardianMgr.processGuardianSense(followerSession.sessionId, follower);
  classQuestMgr.onRoomEnter(follower.id, follower.roomId);
  classQuest2Mgr.onRoomEnter(follower.id, follower.roomId, false, false);
  tutorialMgr.advanceStep(follower.id, 'move');
}

export function cmdStatus(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  sendCharacterStatus(session.sessionId, char);
}

