// Kingdom, construction, and military command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendSystem, sendError, sendToSession, getSessionByCharacterId } from '../../ws/handler.js';
import { getCharacterById } from '../../db/queries.js';
import type { BuildingType, Direction, KingdomNpcType, KingdomRank } from '@game/shared';
import { kingdomMgr, buildingMgr, warMgr, treasuryMgr, diplomacyMgr, questMgr, findCharacterByName } from '../state.js';
import { RANK_NAMES } from '../kingdom.js';
import { BUILDING_TYPE_NAMES, NPC_TYPE_NAMES } from '../kingdom-building.js';
import { getChar } from './cmd-helpers.js';

// ─── 王國系統 ───

export function cmdKingdom(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'create': {
      const name = args.slice(1).join(' ');
      if (!name) { sendError(session.sessionId, '用法：kingdom create <王國名稱>'); return; }
      const result = kingdomMgr.createKingdom(char.id, name, '');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'dissolve': {
      const member = kingdomMgr.getMemberKingdom(char.id);
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const result = kingdomMgr.dissolveKingdom(member.kingdomId, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'info': {
      const targetName = args.slice(1).join(' ');
      if (targetName) {
        // 查看指定王國
        const kingdoms = kingdomMgr.listKingdoms();
        const found = kingdoms.find(k => k.name === targetName);
        if (!found) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
        sendSystem(session.sessionId, formatKingdomInfo(found));
      } else {
        // 查看自己的王國
        const member = kingdomMgr.getMemberKingdom(char.id);
        if (!member) { sendError(session.sessionId, '你不屬於任何王國。使用 kingdom info <名稱> 查看其他王國。'); return; }
        const info = kingdomMgr.getKingdomInfo(member.kingdomId);
        if (!info) { sendError(session.sessionId, '王國資料異常。'); return; }
        sendSystem(session.sessionId, formatKingdomInfo(info));
      }
      break;
    }
    case 'members': {
      const member = kingdomMgr.getMemberKingdom(char.id);
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const members = kingdomMgr.getKingdomMembers(member.kingdomId);
      sendSystem(session.sessionId, '── 王國成員列表 ──');
      for (const m of members) {
        const memberChar = getCharacterById(m.characterId);
        const rankName = RANK_NAMES[m.rank] ?? m.rank;
        sendSystem(session.sessionId, `  ${memberChar?.name ?? m.characterId} - ${rankName}`);
      }
      break;
    }
    case 'join': {
      const kingdomName = args.slice(1).join(' ');
      if (!kingdomName) { sendError(session.sessionId, '用法：kingdom join <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const found = kingdoms.find(k => k.name === kingdomName);
      if (!found) { sendError(session.sessionId, `找不到王國「${kingdomName}」。`); return; }
      const result = kingdomMgr.joinKingdom(char.id, found.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'leave': {
      const result = kingdomMgr.leaveKingdom(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'chat': {
      const message = args.slice(1).join(' ');
      if (!message) { sendError(session.sessionId, '用法：kingdom chat <訊息>'); return; }
      const member = kingdomMgr.getMemberKingdom(char.id);
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      if (!kingdomMgr.hasPermission(char.id, 'chat')) { sendError(session.sessionId, '你沒有王國聊天的權限。'); return; }
      const members = kingdomMgr.getKingdomMembers(member.kingdomId);
      for (const m of members) {
        const targetSession = getSessionByCharacterId(m.characterId);
        if (targetSession) {
          sendToSession(targetSession.sessionId, 'chat', {
            senderId: char.id, senderName: char.name, message, channel: 'kingdom',
          });
        }
      }
      break;
    }
    case 'map': {
      const member = kingdomMgr.getMemberKingdom(char.id);
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const rooms = buildingMgr.getKingdomRoomList(member.kingdomId);
      sendSystem(session.sessionId, '── 王國領地地圖 ──');
      if (rooms.length === 0) {
        sendSystem(session.sessionId, '  尚未建造任何房間。');
      } else {
        for (const r of rooms) {
          const typeName = BUILDING_TYPE_NAMES[r.roomType] ?? r.roomType;
          sendSystem(session.sessionId, `  ${r.roomId} [${typeName}]`);
        }
      }
      break;
    }
    case 'rank': {
      const kingdoms = kingdomMgr.listKingdoms();
      sendSystem(session.sessionId, '── 王國排名 ──');
      const sorted = [...kingdoms].sort((a, b) => b.treasuryGold - a.treasuryGold);
      sorted.forEach((k, i) => {
        sendSystem(session.sessionId, `  #${i + 1} ${k.name} - 國庫: ${k.treasuryGold} 金幣`);
      });
      break;
    }
    case 'list': {
      const kingdoms = kingdomMgr.listKingdoms();
      sendSystem(session.sessionId, '── 所有王國 ──');
      if (kingdoms.length === 0) {
        sendSystem(session.sessionId, '  目前沒有任何王國。');
      } else {
        for (const k of kingdoms) {
          const kingChar = getCharacterById(k.kingId);
          sendSystem(session.sessionId, `  ${k.name} - 國王: ${kingChar?.name ?? '未知'}${k.motto ? ` - 「${k.motto}」` : ''}`);
        }
      }
      break;
    }
    case 'petition': {
      const message = args.slice(1).join(' ');
      if (!message) { sendError(session.sessionId, '用法：kingdom petition <請願內容>'); return; }
      const member = kingdomMgr.getMemberKingdom(char.id);
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const info = kingdomMgr.getKingdomInfo(member.kingdomId);
      if (!info) { sendError(session.sessionId, '王國資料異常。'); return; }
      const kingSession = getSessionByCharacterId(info.kingId);
      if (kingSession) {
        sendSystem(kingSession.sessionId, `📜 請願 — ${char.name}：${message}`);
      }
      sendSystem(session.sessionId, '請願已送出。');
      break;
    }
    case 'vote': {
      sendSystem(session.sessionId, '投票功能開發中');
      break;
    }
    case 'motto': {
      const motto = args.slice(1).join(' ');
      if (!motto) { sendError(session.sessionId, '用法：kingdom motto <格言>'); return; }
      const result = kingdomMgr.setMotto(char.id, motto);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '王國指令：kingdom create/dissolve/info/members/join/leave/chat/map/rank/list/petition/motto');
  }
}

export function formatKingdomInfo(info: { id: string; name: string; description: string; kingId: string; treasuryGold: number; taxRate: number; motto: string }): string {
  const kingChar = getCharacterById(info.kingId);
  let text = `── 王國資訊：${info.name} ──\n`;
  text += `  國王：${kingChar?.name ?? '未知'}\n`;
  text += `  國庫：${info.treasuryGold} 金幣\n`;
  text += `  稅率：${info.taxRate}%\n`;
  if (info.motto) text += `  格言：「${info.motto}」\n`;
  if (info.description) text += `  描述：${info.description}\n`;
  return text;
}

// ─── 任命 / 免職 / 驅逐 ───

export function cmdAppoint(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (args.length < 2) {
    sendError(session.sessionId, '用法：appoint <玩家名稱> <官職>');
    return;
  }

  const rank = args[args.length - 1].toLowerCase() as KingdomRank;
  const targetName = args.slice(0, -1).join(' ');
  const target = findCharacterByName(targetName);
  if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }

  const result = kingdomMgr.appointRank(char.id, target.id, rank);
  sendSystem(session.sessionId, result.message);
}

export function cmdDemote(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const targetName = args.join(' ');
  if (!targetName) { sendError(session.sessionId, '用法：demote <玩家名稱>'); return; }
  const target = findCharacterByName(targetName);
  if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }

  const result = kingdomMgr.removeRank(char.id, target.id);
  sendSystem(session.sessionId, result.message);
}

export function cmdKick(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const targetName = args.join(' ');
  if (!targetName) { sendError(session.sessionId, '用法：kick <玩家名稱>'); return; }
  const target = findCharacterByName(targetName);
  if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }

  const result = kingdomMgr.kickMember(char.id, target.id);
  sendSystem(session.sessionId, result.message);
}

// ─── 建設系統 ───

export function cmdBuild(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  // 檢查玩家是否屬於王國
  const membership = kingdomMgr.getMemberKingdom(char.id);
  if (!membership) { sendError(session.sessionId, '你不屬於任何王國'); return; }

  // 檢查建造權限（大臣以上）
  if (!kingdomMgr.hasPermission(char.id, 'build')) {
    sendError(session.sessionId, '你的官職不足以執行此操作');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'room': {
      const direction = args[1]?.toLowerCase() as Direction;
      const roomName = args.slice(2).join(' ');
      if (!direction || !roomName) {
        sendError(session.sessionId, '用法：build room <方向> <房間名稱>');
        return;
      }
      const validDirs = ['north', 'south', 'east', 'west'];
      if (!validDirs.includes(direction)) {
        sendError(session.sessionId, `無效的方向。可用方向：${validDirs.join(', ')}`);
        return;
      }
      // buildRoom 自己會檢查 source room 是否屬於王國領土
      const result = buildingMgr.buildRoom(char.id, char.roomId, direction, roomName);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'destroy': {
      // 拆除需要國王/宰相權限
      const rank = membership.rank as KingdomRank;
      if (rank !== 'king' && rank !== 'chancellor') {
        sendError(session.sessionId, '只有國王或宰相可以拆除房間。');
        return;
      }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.destroyRoom(char.id, char.roomId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'desc': {
      const desc = args.slice(1).join(' ');
      if (!desc) { sendError(session.sessionId, '用法：build desc <描述>'); return; }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.setRoomDescription(char.id, char.roomId, desc);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'type': {
      const roomType = args[1]?.toLowerCase() as BuildingType;
      if (!roomType) {
        const validTypes = Object.entries(BUILDING_TYPE_NAMES)
          .map(([k, v]) => `${k}(${v})`)
          .join(', ');
        sendError(session.sessionId, `用法：build type <類型>\n可用類型：${validTypes}`);
        return;
      }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.setRoomType(char.id, char.roomId, roomType);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'exit': {
      const direction = args[1]?.toLowerCase() as Direction;
      const targetRoomId = args[2];
      if (!direction || !targetRoomId) {
        sendError(session.sessionId, '用法：build exit <方向> <目標房間ID>');
        return;
      }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.addExit(char.id, char.roomId, direction, targetRoomId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'lock': {
      const direction = args[1]?.toLowerCase() as Direction;
      if (!direction) { sendError(session.sessionId, '用法：build lock <方向>'); return; }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.lockExit(char.id, char.roomId, direction);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'unlock': {
      const direction = args[1]?.toLowerCase() as Direction;
      if (!direction) { sendError(session.sessionId, '用法：build unlock <方向>'); return; }
      // 領土檢查
      if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
        sendError(session.sessionId, '此房間不屬於你的王國領土');
        return;
      }
      const result = buildingMgr.unlockExit(char.id, char.roomId, direction);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '建設指令：build room/destroy/desc/type/exit/lock/unlock');
  }
}

// ─── 怪物 / NPC 管理 ───

export function cmdMob(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  // 檢查玩家是否屬於王國
  const membership = kingdomMgr.getMemberKingdom(char.id);
  if (!membership) { sendError(session.sessionId, '你不屬於任何王國'); return; }

  // 檢查權限（大臣以上）
  if (!kingdomMgr.hasPermission(char.id, 'manage_rooms') && !kingdomMgr.hasPermission(char.id, 'build')) {
    sendError(session.sessionId, '你的官職不足以執行此操作');
    return;
  }

  // 檢查領土
  if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
    sendError(session.sessionId, '此房間不屬於你的王國領土');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'spawn': {
      const monsterId = args[1];
      if (!monsterId) { sendError(session.sessionId, '用法：mob spawn <怪物ID>'); return; }
      const result = buildingMgr.spawnMob(char.id, char.roomId, monsterId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'remove': {
      const monsterId = args[1];
      if (!monsterId) { sendError(session.sessionId, '用法：mob remove <怪物ID>'); return; }
      const result = buildingMgr.removeMob(char.id, char.roomId, monsterId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '怪物管理指令：mob spawn <怪物ID> / mob remove <怪物ID>');
  }
}

export function cmdNpc(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  // 檢查玩家是否屬於王國
  const membership = kingdomMgr.getMemberKingdom(char.id);
  if (!membership) { sendError(session.sessionId, '你不屬於任何王國'); return; }

  // 檢查權限（大臣以上）
  if (!kingdomMgr.hasPermission(char.id, 'manage_npcs') && !kingdomMgr.hasPermission(char.id, 'build')) {
    sendError(session.sessionId, '你的官職不足以執行此操作');
    return;
  }

  // 檢查領土
  if (!buildingMgr.isKingdomRoom(membership.kingdomId, char.roomId)) {
    sendError(session.sessionId, '此房間不屬於你的王國領土');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'place': {
      const npcType = args[1]?.toLowerCase() as KingdomNpcType;
      if (!npcType) {
        const validTypes = Object.entries(NPC_TYPE_NAMES)
          .map(([k, v]) => `${k}(${v})`)
          .join(', ');
        sendError(session.sessionId, `用法：npc place <類型>\n可用類型：${validTypes}`);
        return;
      }
      const result = buildingMgr.placeNpc(char.id, char.roomId, npcType);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'remove': {
      const npcId = args[1];
      if (!npcId) { sendError(session.sessionId, '用法：npc remove <NPC ID>'); return; }
      const result = buildingMgr.removeNpc(char.id, char.roomId, npcId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'config': {
      const npcId = args[1];
      const key = args[2];
      const value = args.slice(3).join(' ');
      if (!npcId || !key || !value) {
        sendError(session.sessionId, '用法：npc config <NPC ID> <設定鍵> <設定值>');
        return;
      }
      const result = buildingMgr.configNpc(char.id, char.roomId, npcId, key, value);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, 'NPC 管理指令：npc place <類型> / npc remove <ID> / npc config <ID> <鍵> <值>');
  }
}

// ─── 軍事系統 ───

export function cmdWar(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  const member = kingdomMgr.getMemberKingdom(char.id);

  switch (sub) {
    case 'declare': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：war declare <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = warMgr.declareWar(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'peace': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：war peace <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = warMgr.proposePeace(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'status': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const wars = warMgr.getActiveWars(member.kingdomId);
      if (wars.length === 0) {
        sendSystem(session.sessionId, '目前沒有進行中的戰爭。');
      } else {
        sendSystem(session.sessionId, '── 戰爭狀態 ──');
        for (const w of wars) {
          const attackerKingdoms = kingdomMgr.listKingdoms();
          const attacker = attackerKingdoms.find(k => k.id === w.attackerId);
          const defender = attackerKingdoms.find(k => k.id === w.defenderId);
          const statusMap: Record<string, string> = { active: '進行中', siege: '攻城中', peace: '和談中', ended: '已結束' };
          sendSystem(session.sessionId, `  ${attacker?.name ?? '?'} vs ${defender?.name ?? '?'} — ${statusMap[w.status] ?? w.status}`);
          if (w.status === 'siege') {
            sendSystem(session.sessionId, `    城門: ${w.gateHp} | 城牆: ${w.wallHp} | 王宮: ${w.palaceHp}`);
          }
        }
      }
      break;
    }
    case 'siege': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：war siege <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const wars = warMgr.getActiveWars(member.kingdomId);
      const war = wars.find(w => (w.attackerId === member.kingdomId && w.defenderId === target.id));
      if (!war) { sendError(session.sessionId, '找不到與該王國的進行中戰爭，或你不是攻方。'); return; }
      const result = warMgr.startSiege(war.id as string, char.id);
      if (result.success) questMgr.updateProgress(char.id, 'participate_kingdom_war', 'siege');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'defend': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const wars = warMgr.getActiveWars(member.kingdomId);
      const siegeWar = wars.find(w => w.status === 'siege' && w.defenderId === member.kingdomId);
      if (!siegeWar) { sendError(session.sessionId, '目前沒有需要防守的攻城戰。'); return; }
      const result = warMgr.defendSiege(siegeWar.id as string, char.id);
      if (result.success) questMgr.updateProgress(char.id, 'participate_kingdom_war', 'defend');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'rally': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const result = warMgr.rallyTroops(member.kingdomId, char.id);
      if (result.success) questMgr.updateProgress(char.id, 'participate_kingdom_war', 'rally');
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '戰爭指令：war declare/peace/status/siege/defend/rally');
  }
}

export function cmdArmy(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  const member = kingdomMgr.getMemberKingdom(char.id);
  if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }

  switch (sub) {
    case 'recruit': {
      const count = parseInt(args[1] || '0', 10);
      if (count <= 0) { sendError(session.sessionId, '用法：army recruit <數量>'); return; }
      const result = warMgr.recruitSoldiers(member.kingdomId, count, char.id);
      if (result.success) questMgr.updateProgress(char.id, 'participate_kingdom_war', 'recruit');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'deploy': {
      const roomId = args[1];
      const count = parseInt(args[2] || '0', 10);
      if (!roomId || count <= 0) { sendError(session.sessionId, '用法：army deploy <房間ID> <數量>'); return; }
      const result = warMgr.deploySoldiers(member.kingdomId, roomId, count, char.id);
      if (result.success) questMgr.updateProgress(char.id, 'participate_kingdom_war', 'deploy');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'dismiss': {
      const count = parseInt(args[1] || '0', 10);
      if (count <= 0) { sendError(session.sessionId, '用法：army dismiss <數量>'); return; }
      const result = warMgr.dismissSoldiers(member.kingdomId, count, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'list': {
      const army = warMgr.getArmyList(member.kingdomId);
      sendSystem(session.sessionId, '── 軍隊列表 ──');
      sendSystem(session.sessionId, `  總兵力：${army.totalSoldiers}`);
      sendSystem(session.sessionId, `  已部署：${army.deployedTotal}`);
      sendSystem(session.sessionId, `  可用：${army.available}`);
      sendSystem(session.sessionId, `  每日維護費：${army.dailyMaintenance} 金幣`);
      if (army.deployments.length > 0) {
        sendSystem(session.sessionId, '  部署詳情：');
        for (const d of army.deployments) {
          sendSystem(session.sessionId, `    ${d.roomId}: ${d.count} 名`);
        }
      }
      break;
    }
    default:
      sendSystem(session.sessionId, '軍隊指令：army recruit/deploy/dismiss/list');
  }
}

export function cmdBounty(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  const member = kingdomMgr.getMemberKingdom(char.id);
  if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }

  switch (sub) {
    case 'set': {
      // bounty set <player> <amount> <reason>
      if (args.length < 4) { sendError(session.sessionId, '用法：bounty set <玩家名稱> <金額> <原因>'); return; }
      const targetName = args[1];
      const amount = parseInt(args[2], 10);
      const reason = args.slice(3).join(' ');
      if (isNaN(amount) || amount <= 0) { sendError(session.sessionId, '金額必須大於 0。'); return; }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      const result = warMgr.setBounty(member.kingdomId, target.id, amount, reason, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'remove': {
      const bountyId = args[1];
      if (!bountyId) { sendError(session.sessionId, '用法：bounty remove <懸賞ID>'); return; }
      const result = warMgr.removeBounty(member.kingdomId, bountyId, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'list': {
      const bounties = warMgr.listBounties(member.kingdomId);
      sendSystem(session.sessionId, '── 懸賞列表 ──');
      if (bounties.length === 0) {
        sendSystem(session.sessionId, '  目前沒有有效懸賞。');
      } else {
        for (const b of bounties) {
          const targetChar = getCharacterById(b.targetId);
          sendSystem(session.sessionId, `  ${targetChar?.name ?? '未知'} - ${b.reward} 金幣 — ${b.reason} (ID: ${String(b.id).slice(0, 8)})`);
        }
      }
      break;
    }
    case 'claim': {
      const bountyId = args[1];
      if (!bountyId) { sendError(session.sessionId, '用法：bounty claim <懸賞ID>'); return; }
      const result = warMgr.claimBounty(bountyId, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '懸賞指令：bounty set <玩家> <金額> <原因> / bounty remove <ID> / bounty list / bounty claim <ID>');
  }
}

// ─── 國庫系統 ───

export function cmdTreasury(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  const member = kingdomMgr.getMemberKingdom(char.id);
  if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }

  switch (sub) {
    case 'balance': {
      const text = treasuryMgr.formatTreasuryInfo(member.kingdomId);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'deposit': {
      const amount = parseInt(args[1] || '0', 10);
      if (amount <= 0) { sendError(session.sessionId, '用法：treasury deposit <金額>'); return; }
      const result = treasuryMgr.deposit(member.kingdomId, char.id, amount);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'withdraw': {
      const amount = parseInt(args[1] || '0', 10);
      if (amount <= 0) { sendError(session.sessionId, '用法：treasury withdraw <金額>'); return; }
      const result = treasuryMgr.withdraw(member.kingdomId, char.id, amount);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'log': {
      const records = treasuryMgr.getTransactionLog(member.kingdomId);
      sendSystem(session.sessionId, '── 國庫交易紀錄 ──');
      if (records.length === 0) {
        sendSystem(session.sessionId, '  暫無紀錄。');
      } else {
        for (const r of records) {
          const sign = r.amount >= 0 ? '+' : '';
          sendSystem(session.sessionId, `  [${r.type}] ${sign}${r.amount} — ${r.description}`);
        }
      }
      break;
    }
    case 'tax': {
      const rate = parseInt(args[1] || '-1', 10);
      if (rate < 0) { sendError(session.sessionId, '用法：treasury tax <稅率(0-20)>'); return; }
      const result = treasuryMgr.setTaxRate(member.kingdomId, char.id, rate);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '國庫指令：treasury balance/deposit/withdraw/log/tax');
  }
}

// ─── 外交系統 ───

export function cmdDiplomacy(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  const member = kingdomMgr.getMemberKingdom(char.id);
  if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }

  switch (sub) {
    case 'ally': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：diplomacy ally <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.proposeAlliance(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'unally': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：diplomacy unally <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.breakAlliance(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'status': {
      const text = diplomacyMgr.formatDiplomacyInfo(member.kingdomId);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'message': {
      const targetName = args[1];
      const message = args.slice(2).join(' ');
      if (!targetName || !message) { sendError(session.sessionId, '用法：diplomacy message <王國名稱> <訊息>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.sendDiplomaticMessage(member.kingdomId, target.id, message, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'trade': {
      const targetName = args[1];
      const terms = args.slice(2).join(' ');
      if (!targetName || !terms) { sendError(session.sessionId, '用法：diplomacy trade <王國名稱> <條款>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.proposeTrade(member.kingdomId, target.id, terms, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'embargo': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：diplomacy embargo <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.setEmbargo(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'lift': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：diplomacy lift <王國名稱>'); return; }
      const kingdoms = kingdomMgr.listKingdoms();
      const target = kingdoms.find(k => k.name === targetName);
      if (!target) { sendError(session.sessionId, `找不到王國「${targetName}」。`); return; }
      const result = diplomacyMgr.liftEmbargo(member.kingdomId, target.id, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '外交指令：diplomacy ally/unally/status/message/trade/embargo/lift');
  }
}

