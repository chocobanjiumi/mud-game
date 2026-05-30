// Party, trade, quest, PvP, and dungeon command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendSystem, sendError, getSessionByCharacterId } from '../../ws/handler.js';
import { getCharacterById, getInventory, removeInventoryItem, saveCharacter } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character, NpcDef } from '@game/shared';
import { partyMgr, tradeMgr, questMgr, tutorialMgr, pvpMgr, dungeonMgr, dungeonMatchMgr, isInCombat, findCharacterByName } from '../state.js';
import { getRoom, ZONES } from '../../data/rooms.js';
import { buildInstanceEntryDefs, type InstanceEntryDef, type InstanceEntryQuestState } from '../../data/world-map2-plan.js';
import { QUEST_DEFS } from '../quest.js';
import { EXPANDED_QUEST_DEFS } from '../quest-system.js';
import type { LootDistributionMode } from '../party.js';
import { getChar, instanceEntryCooldowns, normalizeCommandTarget, sendQuestUpdate } from './cmd-helpers.js';

// ─── 組隊系統 ───

export function cmdParty(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'create': {
      const result = partyMgr.createParty(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'invite': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：party invite <玩家名稱>'); return; }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      const result = partyMgr.invitePlayer(char.id, target.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'accept': {
      const result = partyMgr.acceptInvite(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'decline': {
      const result = partyMgr.declineInvite(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'leave': {
      const result = partyMgr.leaveParty(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'follow': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：party follow <隊友名稱>'); return; }
      const party = partyMgr.getParty(char.id);
      if (!party) { sendError(session.sessionId, '你不在任何隊伍中。'); return; }
      const target = targetName.toLowerCase() === 'leader'
        ? getCharacterById(party.leaderId)
        : findCharacterByName(targetName) ?? getCharacterById(targetName);
      if (!target) { sendError(session.sessionId, `找不到隊友「${targetName}」。`); return; }
      const result = partyMgr.followMember(char.id, target.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'unfollow': case 'nofollow': {
      const result = partyMgr.unfollowMember(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'kick': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：party kick <玩家名稱>'); return; }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      const result = partyMgr.kickMember(char.id, target.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'loot': {
      const mode = args[1] as LootDistributionMode | undefined;
      if (!mode || !['free', 'round_robin', 'need_greed', 'leader'].includes(mode)) {
        sendError(session.sessionId, '用法：party loot <free|round_robin|need_greed|leader>');
        return;
      }
      const result = partyMgr.setLootMode(char.id, mode);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'info': case 'status': {
      const party = partyMgr.getParty(char.id);
      if (!party) { sendSystem(session.sessionId, '你不在任何隊伍中。'); return; }
      sendSystem(session.sessionId, `── 隊伍資訊 ──`);
      sendSystem(session.sessionId, `戰利品分配：${party.lootMode}`);
      for (const memberId of party.memberIds) {
        const member = getCharacterById(memberId);
        if (!member) continue;
        const leader = party.leaderId === memberId ? ' [隊長]' : '';
        sendSystem(session.sessionId, `  ${member.name} Lv.${member.level} HP:${member.hp}/${member.maxHp}${leader}`);
      }
      break;
    }
    default:
      sendSystem(session.sessionId, '組隊指令：party create/invite <名>/accept/decline/leave/follow <名>/unfollow/kick <名>/loot <模式>/info');
  }
}

// ─── 交易系統 ───

export function cmdTrade(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'accept': {
      const result = tradeMgr.acceptTrade(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'decline': {
      const result = tradeMgr.declineTrade(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'add': {
      const itemId = args[1];
      const qty = parseInt(args[2] || '1', 10);
      if (!itemId) { sendError(session.sessionId, '用法：trade add <物品ID> [數量]'); return; }
      const result = tradeMgr.addItem(char.id, itemId, qty);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'remove': {
      const itemId = args[1];
      const qty = parseInt(args[2] || '1', 10);
      if (!itemId) { sendError(session.sessionId, '用法：trade remove <物品ID> [數量]'); return; }
      const result = tradeMgr.removeItem(char.id, itemId, qty);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'gold': {
      const amount = parseInt(args[1] || '0', 10);
      const result = tradeMgr.setGold(char.id, amount);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'confirm': {
      const result = tradeMgr.confirm(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'cancel': {
      const result = tradeMgr.cancel(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default: {
      // trade <玩家名稱> — 發起交易
      const targetName = args.join(' ');
      if (!targetName) {
        sendSystem(session.sessionId, '交易指令：trade <玩家名>/accept/decline/add/remove/gold/confirm/cancel');
        return;
      }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      const result = tradeMgr.initiateTrade(char.id, target.id);
      sendSystem(session.sessionId, result.message);
    }
  }
}

// ─── 任務系統 ───

export function cmdQuest(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': case 'available': {
      const text = questMgr.formatAvailableQuests(char);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'active': case 'status': {
      const text = questMgr.formatActiveQuests(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'accept': case 'start': {
      const questId = args[1];
      if (!questId) { sendError(session.sessionId, '用法：quest accept <任務ID>'); return; }
      const result = questMgr.startQuest(char.id, questId, char);
      sendSystem(session.sessionId, result.message);
      // 教學系統：任務接取鉤子
      if (result.success) {
        tutorialMgr.advanceStep(char.id, 'quest');
      }
      sendQuestUpdate(session, result.success ? 'accepted' : 'sync');
      break;
    }
    case 'complete': case 'turn-in': {
      const questId = args[1];
      if (!questId) { sendError(session.sessionId, '用法：quest complete <任務ID>'); return; }
      const result = questMgr.completeQuest(char.id, questId, char);
      sendSystem(session.sessionId, result.message);
      if (result.rewards) {
        saveCharacter(char);
      }
      sendQuestUpdate(session, result.rewards ? 'completed' : 'sync');
      break;
    }
    case 'abandon': case 'drop': {
      const questId = args[1];
      if (!questId) { sendError(session.sessionId, '用法：quest abandon <任務ID>'); return; }
      const result = questMgr.abandonQuest(char.id, questId);
      sendSystem(session.sessionId, result.message);
      sendQuestUpdate(session, result.success ? 'abandoned' : 'sync');
      break;
    }
    case 'info': case 'detail': {
      const questId = args[1];
      if (!questId) { sendError(session.sessionId, '用法：quest info <任務ID>'); return; }
      const text = questMgr.getQuestInfo(char.id, questId);
      sendSystem(session.sessionId, text);
      break;
    }
    default:
      sendSystem(session.sessionId,
        '任務指令：\n' +
        '  quest list — 可接取的任務\n' +
        '  quest active — 進行中的任務\n' +
        '  quest accept <ID> — 接取任務\n' +
        '  quest complete <ID> — 完成任務\n' +
        '  quest abandon <ID> — 放棄任務\n' +
        '  quest info <ID> — 任務詳情',
      );
  }
}

// ─── PvP 決鬥 ───

export function cmdDuel(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'accept': {
      const challengerId = pvpMgr.getDuelChallengerId(char.id);
      if (!challengerId) { sendSystem(session.sessionId, '你沒有待處理的決鬥請求。'); return; }
      const challengerChar = getCharacterById(challengerId);
      if (!challengerChar) { sendSystem(session.sessionId, '挑戰者角色不存在。'); return; }
      const message = pvpMgr.acceptDuel(char.id, char, challengerChar);
      sendSystem(session.sessionId, message);
      break;
    }
    case 'decline': {
      const message = pvpMgr.declineDuel(char.id);
      sendSystem(session.sessionId, message);
      break;
    }
    case 'info': case 'stats': {
      const text = pvpMgr.formatPvPInfo(char.id, char.name);
      sendSystem(session.sessionId, text);
      break;
    }
    default: {
      // duel <玩家名稱>
      const targetName = args.join(' ');
      if (!targetName) {
        sendSystem(session.sessionId, 'PvP 指令：duel <玩家名>/accept/decline/info');
        return;
      }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      // M-14: 決鬥驗證 — 在線、同房、存活、非戰鬥中
      if (!getSessionByCharacterId(target.id)) { sendError(session.sessionId, `${target.name}目前不在線。`); return; }
      if (target.roomId !== char.roomId) { sendError(session.sessionId, `${target.name}不在同一個房間。`); return; }
      if (target.hp <= 0) { sendError(session.sessionId, `${target.name}已經倒下，無法決鬥。`); return; }
      if (isInCombat(target.id)) { sendError(session.sessionId, `${target.name}正在戰鬥中，無法決鬥。`); return; }
      if (isInCombat(char.id)) { sendError(session.sessionId, '你正在戰鬥中，無法發起決鬥。'); return; }
      const message = pvpMgr.duel(char.id, char.name, target.id, target.name);
      sendSystem(session.sessionId, message);
    }
  }
}

// ─── 競技場 ───

export function cmdArena(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'join': {
      const message = pvpMgr.joinArena(char.id, char);
      sendSystem(session.sessionId, message);
      break;
    }
    case 'leave': {
      const message = pvpMgr.leaveArena(char.id);
      sendSystem(session.sessionId, message);
      break;
    }
    default:
      sendSystem(session.sessionId, '競技場指令：arena join/leave');
  }
}

// ─── 副本 ───

export function cmdDungeon(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': {
      const text = dungeonMgr.formatDungeonList();
      sendSystem(session.sessionId, text);
      break;
    }
    case 'enter': {
      const dungeonId = args[1];
      if (!dungeonId) { sendError(session.sessionId, '用法：dungeon enter <副本ID>'); return; }
      const partyId = partyMgr.getPartyId(char.id) ?? char.id;
      const players: Character[] = [char];
      if (partyMgr.isInParty(char.id)) {
        const memberIds = partyMgr.getPartyMembers(char.id);
        for (const memberId of memberIds) {
          if (memberId === char.id) continue;
          const member = getCharacterById(memberId);
          if (member) players.push(member);
        }
      }
      const result = dungeonMgr.createInstance(partyId, dungeonId, players);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'status': {
      const instance = dungeonMgr.getPlayerInstance(char.id);
      if (!instance) {
        sendSystem(session.sessionId, '你目前不在任何副本中。');
        return;
      }
      const def = dungeonMgr.getDungeonDef(instance.dungeonId);
      if (!def) {
        sendSystem(session.sessionId, '副本資料錯誤。');
        return;
      }
      const remaining = dungeonMgr.getRemainingTime(instance.id);
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      const currentRoom = def.rooms[instance.currentRoomIndex];
      sendSystem(session.sessionId,
        `── 副本進度 ──\n` +
        `副本：${def.name}\n` +
        `目前房間：${currentRoom?.name ?? '未知'}（${instance.currentRoomIndex + 1}/${def.rooms.length}）\n` +
        `剩餘時間：${minutes} 分 ${seconds} 秒\n` +
        `狀態：${instance.cleared ? '已通關' : instance.defeated ? '等待死亡選項' : '進行中'}`,
      );
      break;
    }
    case 'entrance': {
      const msg = dungeonMgr.chooseDeathOption(char.id, 'entrance');
      sendSystem(session.sessionId, msg);
      break;
    }
    case 'revive': {
      const msg = dungeonMgr.chooseDeathOption(char.id, 'revive');
      sendSystem(session.sessionId, msg);
      break;
    }
    case 'exit': {
      const msg = dungeonMgr.chooseDeathOption(char.id, 'exit');
      sendSystem(session.sessionId, msg);
      break;
    }
    case 'leave': {
      const leaveMsg = dungeonMgr.leaveDungeon(char.id);
      sendSystem(session.sessionId, leaveMsg);
      break;
    }
    case 'queue': {
      const queueSub = args[1]?.toLowerCase();
      if (queueSub === 'cancel') {
        const msg = dungeonMatchMgr.leaveQueue(char.id);
        sendSystem(session.sessionId, msg);
      } else if (queueSub === 'status') {
        const msg = dungeonMatchMgr.getQueueStatus(char.id);
        sendSystem(session.sessionId, msg);
      } else if (queueSub) {
        // dungeon queue <dungeonId>
        const msg = dungeonMatchMgr.joinQueue(char.id, queueSub);
        sendSystem(session.sessionId, msg);
      } else {
        sendSystem(session.sessionId,
          '副本排隊指令：\n' +
          '  dungeon queue <副本ID>  — 加入匹配排隊\n' +
          '  dungeon queue cancel   — 取消排隊\n' +
          '  dungeon queue status   — 查看排隊狀態',
        );
      }
      break;
    }
    default:
      sendSystem(session.sessionId,
        '副本指令：\n' +
        '  dungeon list           — 查看可用副本\n' +
        '  dungeon enter <副本ID> — 進入副本（手動組隊）\n' +
        '  dungeon queue <副本ID> — 自動匹配排隊\n' +
        '  dungeon queue cancel   — 取消排隊\n' +
        '  dungeon queue status   — 查看排隊狀態\n' +
        '  dungeon status         — 查看副本進度\n' +
        '  dungeon entrance       — 死亡後回副本入口\n' +
        '  dungeon revive         — 死亡後由隊友復活重試\n' +
        '  dungeon exit           — 死亡後退出副本\n' +
        '  dungeon leave          — 離開副本（放棄）',
      );
  }
}

export function cmdEnterInstanceEntry(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  const parsedTarget = parseInstanceEntryTarget(target);
  const normalizedTarget = normalizeCommandTarget(parsedTarget.target);
  if (!normalizedTarget) {
    sendError(session.sessionId, '用法：enter <入口物件> [normal|hard|nightmare]。請在房間面板點擊副本入口，或輸入入口名稱。');
    return;
  }

  const entries = buildInstanceEntryDefs(ZONES).filter(entry => entry.roomId === char.roomId);
  const entry = entries.find(candidate => {
    const names = [
      candidate.id,
      candidate.objectId ?? '',
      candidate.name,
      candidate.instanceTemplateId,
    ];
    return names.some(name => normalizeCommandTarget(name).includes(normalizedTarget) || normalizedTarget.includes(normalizeCommandTarget(name)));
  });

  if (!entry) {
    sendError(session.sessionId, '此房間沒有符合目標的副本入口。下一步：先查看房間面板的「副本入口」按鈕，或輸入 search room 重新確認可互動物。');
    return;
  }

  startInstanceEntry(session, char, entry, parsedTarget.difficulty);
}

export function tryUseInstanceEntryItem(session: WsSession, char: Character, itemId: string, itemName: string, difficulty = 'normal'): boolean {
  const itemEntries = buildInstanceEntryDefs(ZONES).filter(entry => entry.type === 'item_use' && entry.requiredItemId === itemId);
  if (itemEntries.length === 0) return false;

  const entry = itemEntries.find(candidate => candidate.roomId === char.roomId);
  if (!entry) {
    const currentRoomName = getRoom(char.roomId)?.name ?? char.roomId;
    const allowedRooms = itemEntries
      .map(candidate => getRoom(candidate.roomId)?.name ?? candidate.roomId)
      .filter((name, index, all) => all.indexOf(name) === index);
    sendError(
      session.sessionId,
      `你使用了「${itemName}」，但目前所在房間「${currentRoomName}」不是可開啟副本的入口。需求房間：${allowedRooms.join('、')}。下一步：前往指定入口房間後再次使用此道具。`,
    );
    return true;
  }

  startInstanceEntry(session, char, entry, difficulty);
  return true;
}

export function startNpcDialogueInstanceEntry(session: WsSession, char: Character, npc: NpcDef, entryId: string): boolean {
  const entry = buildInstanceEntryDefs(ZONES).find(candidate => candidate.id === entryId);
  if (!entry) {
    sendError(session.sessionId, `NPC「${npc.name}」嘗試啟動副本入口「${entryId}」，但入口資料不存在。下一步：回報入口設定，補上 InstanceEntryDef 後再對話。`);
    return true;
  }
  if (entry.type !== 'npc_dialogue') {
    sendError(session.sessionId, `NPC「${npc.name}」嘗試啟動「${entry.name}」，但此入口不是 NPC 對話入口。下一步：改用正確入口物件或修正 dialogue action。`);
    return true;
  }
  if (entry.npcId !== npc.id) {
    sendError(session.sessionId, `NPC「${npc.name}」不能啟動「${entry.name}」。目前入口綁定 NPC：${entry.npcId ?? '未設定'}。下一步：尋找正確 NPC 或修正入口資料。`);
    return true;
  }
  if (entry.roomId !== char.roomId) {
    const currentRoomName = getRoom(char.roomId)?.name ?? char.roomId;
    const requiredRoomName = getRoom(entry.roomId)?.name ?? entry.roomId;
    sendError(session.sessionId, `你正在「${currentRoomName}」與「${npc.name}」對話，但「${entry.name}」只能在「${requiredRoomName}」啟動。下一步：前往指定入口房間後再對話。`);
    return true;
  }

  startInstanceEntry(session, char, entry);
  return true;
}

export function startInstanceEntry(session: WsSession, char: Character, entry: InstanceEntryDef, difficulty = 'normal'): void {
  const selectedDifficulty = normalizeInstanceEntryDifficulty(difficulty);
  const difficultyOptions = entry.difficultyOptions?.length ? entry.difficultyOptions : ['normal'];
  if (!difficultyOptions.includes(selectedDifficulty)) {
    sendError(session.sessionId, `難度不符，無法進入「${entry.name}」。你選擇了 ${formatInstanceEntryDifficulty(selectedDifficulty)}，此入口支援：${difficultyOptions.map(formatInstanceEntryDifficulty).join('、')}。下一步：改用入口支援的難度重新進入。`);
    return;
  }

  if (entry.minLevel && char.level < entry.minLevel) {
    sendError(session.sessionId, `你正在嘗試進入「${entry.name}」，但等級不足；目前等級 ${char.level}，需求等級 ${entry.minLevel}。下一步：先完成同等級區域任務或提升等級後再返回入口。`);
    return;
  }

  const partyMembers = partyMgr.isInParty(char.id) ? partyMgr.getPartyMembers(char.id) : [char.id];
  if (partyMgr.isInParty(char.id) && !partyMgr.isLeader(char.id)) {
    sendError(session.sessionId, `你正在隊伍中，只有隊長可以開啟「${entry.name}」。下一步：請隊長在同一個入口使用 enter 或 use，或先離開隊伍後單人進入。`);
    return;
  }
  if (entry.maxPartySize && partyMembers.length > entry.maxPartySize) {
    sendError(session.sessionId, `你正在嘗試進入「${entry.name}」，但隊伍人數不符；目前人數 ${partyMembers.length}，最多允許 ${entry.maxPartySize} 人。下一步：調整隊伍人數後由隊長再次進入。`);
    return;
  }

  const cooldownOwnerId = partyMgr.getPartyId(char.id) ?? char.id;
  const cooldownRemaining = getInstanceEntryCooldownRemainingSeconds(cooldownOwnerId, entry.id);
  if (cooldownRemaining > 0) {
    sendError(session.sessionId, `入口冷卻中，無法進入「${entry.name}」。剩餘 ${cooldownRemaining} 秒。下一步：等待冷卻結束後再次使用入口。`);
    return;
  }

  const gate = checkInstanceEntryRequirements(char, entry);
  if (!gate.ok) {
    sendError(session.sessionId, gate.message);
    return;
  }

  if (entry.dungeonId) {
    const partyId = cooldownOwnerId;
    const players: Character[] = [char];
    if (partyMgr.isInParty(char.id)) {
      for (const memberId of partyMembers) {
        if (memberId === char.id) continue;
        const member = getCharacterById(memberId);
        if (member) players.push(member);
      }
    }
    const result = dungeonMgr.createInstance(partyId, entry.dungeonId, players, selectedDifficulty);
    sendSystem(session.sessionId, result.message);
    if (result.success) {
      consumeInstanceEntryCost(char, entry);
      setInstanceEntryCooldown(cooldownOwnerId, entry);
    }
    return;
  }

  sendSystem(
    session.sessionId,
    `你觸碰「${entry.name}」，入口封印已回應。建議等級 ${entry.minLevel ?? '-'}，隊伍人數 1-${entry.maxPartySize ?? 1}。此入口尚未綁定正式副本模板；下一步需要補上 dungeonId 或 instance template 後才能建立 instance run。`,
  );
}

export function parseInstanceEntryTarget(rawTarget: string): { target: string; difficulty: string } {
  const trimmed = rawTarget.trim();
  if (!trimmed) return { target: '', difficulty: 'normal' };
  const parts = trimmed.split(/\s+/);
  const maybeDifficulty = normalizeInstanceEntryDifficulty(parts[parts.length - 1]);
  if (maybeDifficulty !== 'normal' || ['normal', '普通'].includes(parts[parts.length - 1]?.toLowerCase() ?? '')) {
    return { target: parts.slice(0, -1).join(' '), difficulty: maybeDifficulty };
  }
  return { target: trimmed, difficulty: 'normal' };
}

export function normalizeInstanceEntryDifficulty(value: string | undefined): string {
  const normalized = normalizeCommandTarget(value ?? '');
  if (normalized === 'hard' || normalized === '困難') return 'hard';
  if (normalized === 'nightmare' || normalized === '夢魘' || normalized === '噩夢') return 'nightmare';
  return 'normal';
}

export function formatInstanceEntryDifficulty(value: string): string {
  switch (value) {
    case 'hard': return '困難';
    case 'nightmare': return '夢魘';
    case 'normal':
    default:
      return '普通';
  }
}

export function checkInstanceEntryRequirements(char: Character, entry: InstanceEntryDef): { ok: true } | { ok: false; message: string } {
  if (entry.requiredItemId) {
    const item = ITEM_DEFS[entry.requiredItemId];
    const currentQuantity = getInventory(char.id)
      .filter(inv => inv.itemId === entry.requiredItemId)
      .reduce((sum, inv) => sum + inv.quantity, 0);
    const hasItem = currentQuantity > 0;
    if (!hasItem) {
      return {
        ok: false,
        message: `你正在嘗試進入「${entry.name}」，但入口道具不足；缺少道具「${item?.name ?? entry.requiredItemId}」，目前持有 ${currentQuantity} 個，需求 1 個。下一步：取得所需道具後回到此入口。`,
      };
    }
  }

  if (entry.requiredQuestId) {
    const requiredState = entry.requiredQuestState ?? 'completed';
    const currentState = questMgr.getQuestStatus(char, entry.requiredQuestId);
    if (!doesQuestStateSatisfyEntry(currentState, requiredState)) {
      const questName = formatQuestNameForEntry(entry.requiredQuestId);
      return {
        ok: false,
        message: `你正在嘗試進入「${entry.name}」，但任務條件不足；需要「${questName}」達到「${formatInstanceEntryQuestState(requiredState)}」，目前狀態是「${formatInstanceEntryQuestState(currentState)}」。下一步：先推進對應任務階段再返回入口。`,
      };
    }
  }

  return { ok: true };
}

export function formatQuestNameForEntry(questId: string): string {
  return QUEST_DEFS[questId]?.name ?? EXPANDED_QUEST_DEFS[questId]?.name ?? questId;
}

export function doesQuestStateSatisfyEntry(currentState: ReturnType<typeof questMgr.getQuestStatus>, requiredState: InstanceEntryQuestState): boolean {
  if (requiredState === 'completed') return currentState === 'completed';
  if (requiredState === 'ready') return currentState === 'ready' || currentState === 'completed';
  if (requiredState === 'active') return currentState === 'active' || currentState === 'ready' || currentState === 'completed';
  if (requiredState === 'available') return currentState !== 'locked';
  return false;
}

export function formatInstanceEntryQuestState(state: InstanceEntryQuestState | ReturnType<typeof questMgr.getQuestStatus>): string {
  const labels: Record<string, string> = {
    available: '可接取',
    active: '進行中',
    ready: '可完成',
    completed: '已完成',
    locked: '未解鎖',
  };
  return labels[state] ?? state;
}

export function consumeInstanceEntryCost(char: Character, entry: InstanceEntryDef): void {
  if (!entry.requiredItemId || !entry.consumeItem) return;
  removeInventoryItem(char.id, entry.requiredItemId, 1);
}

export function getInstanceEntryCooldownRemainingSeconds(ownerId: string, entryId: string): number {
  const key = `${ownerId}:${entryId}`;
  const expireAt = instanceEntryCooldowns.get(key) ?? 0;
  const remaining = expireAt - Date.now();
  if (remaining <= 0) {
    instanceEntryCooldowns.delete(key);
    return 0;
  }
  return Math.ceil(remaining / 1000);
}

export function setInstanceEntryCooldown(ownerId: string, entry: InstanceEntryDef): void {
  if (!entry.cooldownSeconds || entry.cooldownSeconds <= 0) return;
  instanceEntryCooldowns.set(`${ownerId}:${entry.id}`, Date.now() + entry.cooldownSeconds * 1000);
}

