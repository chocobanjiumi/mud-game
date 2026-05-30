// cmd-inspect.ts — inspect command handler

import type { WsSession } from '../../ws/handler.js';
import { sendError, sendNarrative, sendSystem } from '../../ws/handler.js';
import { getCharacterById, getInventory, recordDiscovery } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { findNpcByName } from '../../data/npcs.js';
import { getRoom } from '../../data/rooms.js';
import { questMgr, world } from '../state.js';
import {
  directionChinese,
  findExit,
  findGroundItem,
  getChar,
  normalizeCommandTarget,
} from './cmd-helpers.js';

export function cmdInspect(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!target) {
    sendError(session.sessionId, '用法：inspect <目標>');
    return;
  }

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '你身處未知地點，無法檢查目標。');
    return;
  }

  recordDiscovery(char.id, room.zone, room.id, 'inspect', `${room.id}:${normalizeCommandTarget(target)}`);
  questMgr.updateProgress(char.id, 'inspect_object', normalizeCommandTarget(target));

  const ground = findGroundItem(room.id, target);
  if (ground) {
    const def = ITEM_DEFS[ground.itemId];
    sendSystem(session.sessionId, `── ${def?.name ?? ground.itemId} ──`);
    sendNarrative(session.sessionId, def?.description ?? ground.description, 'item');
    sendSystem(session.sessionId, `位置線索：${ground.description}`);
    if (def?.useEffect?.type.startsWith('open_chest_')) {
      sendSystem(session.sessionId, `這是可開啟的寶箱。先 take ${def.name}，再 open ${def.name}。`);
    }
    return;
  }

  const exit = findExit(room, target);
  if (exit) {
    sendSystem(session.sessionId, `── ${directionChinese(exit.direction)}側出口 ──`);
    sendNarrative(session.sessionId, exit.description ?? '這條通路連往另一處房間，地面留下近期通行的痕跡。');
    sendSystem(session.sessionId, `狀態：${exit.locked ? '上鎖' : '可通行'}；目標房間：${exit.targetRoomId}`);
    return;
  }

  const lower = normalizeCommandTarget(target);
  const inventoryItem = getInventory(char.id).find(item => {
    const def = ITEM_DEFS[item.itemId];
    return item.itemId === lower || def?.name === target || !!def?.name.toLowerCase().includes(lower);
  });
  if (inventoryItem) {
    const def = ITEM_DEFS[inventoryItem.itemId];
    sendSystem(session.sessionId, `── ${def?.name ?? inventoryItem.itemId} ──`);
    sendNarrative(session.sessionId, def?.description ?? '背包中的物品。', 'item');
    sendSystem(session.sessionId, `數量：${inventoryItem.quantity}；類型：${def?.type ?? 'unknown'}`);
    return;
  }

  inspectVisibleTarget(session, char.id, room.id, target);
}

function inspectVisibleTarget(session: WsSession, characterId: string, roomId: string, target: string): void {
  const npc = findNpcByName(target, roomId);
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

  const monster = world.findMonsterInRoom(roomId, target);
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

  const playersInRoom = world.getPlayersInRoom(roomId).filter(id => id !== characterId);
  for (const playerId of playersInRoom) {
    const player = getCharacterById(playerId);
    if (player && player.name.includes(target)) {
      sendSystem(session.sessionId, `═══ ${player.name} ═══`);
      sendSystem(session.sessionId, `等級 ${player.level} ${player.classId}`);
      return;
    }
  }

  sendSystem(session.sessionId, `找不到「${target}」。`);
}
