// Social, automation, economy, and utility command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, getSessionByCharacterId } from '../../ws/handler.js';
import { getCharacterById, getCharacterByName, getInventory, saveCharacter } from '../../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import {
  world, mailMgr, friendMgr, tutorialMgr, autoBattleMgr, marketMgr, guildMgr,
  dailyRewardMgr, questMgr, worldEventMgr, weatherMgr, classQuest2Mgr,
  skillTreeMgr, isInCombat,
} from '../state.js';
import { WORLD_BOSS_DEFS } from '../world-event.js';
import { unlockAppearance } from '../appearance.js';
import { getChar } from './cmd-helpers.js';

// ─── 世界事件指令 ───

export function cmdEvent(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'info': {
      const current = worldEventMgr.getCurrentEvent();
      if (current && current.bossId) {
        const boss = WORLD_BOSS_DEFS[current.bossId];
        const info = worldEventMgr.getEventInfo(current.id);
        sendSystem(session.sessionId, `═══ 世界事件：${boss?.name ?? '未知'} ═══`);
        sendSystem(session.sessionId, `  等級：Lv${boss?.level ?? '?'}`);
        sendSystem(session.sessionId, `  HP：${boss?.hp ?? '?'}`);
        sendSystem(session.sessionId, `  出現地點：${boss?.spawnRoom ?? '?'}`);
        sendSystem(session.sessionId, `  狀態：${current.status}`);
        sendSystem(session.sessionId, `  參與人數：${info?.rankings.length ?? current.participants.length}`);
        sendSystem(session.sessionId, `  說明：${boss?.description ?? ''}`);
      } else {
        sendSystem(session.sessionId, '目前沒有進行中的世界事件。');
        sendSystem(session.sessionId, '世界BOSS每 4 小時刷新一次，輪流出現：');
        for (const [id, def] of Object.entries(WORLD_BOSS_DEFS)) {
          sendSystem(session.sessionId, `  Lv${def.level} ${def.name} — ${def.spawnRoom}`);
        }
      }
      break;
    }
    case 'join': {
      const current = worldEventMgr.getCurrentEvent();
      if (!current) {
        sendError(session.sessionId, '目前沒有進行中的世界事件。');
        return;
      }
      const boss = current.bossId ? WORLD_BOSS_DEFS[current.bossId] : null;
      if (boss && char.roomId !== boss.spawnRoom) {
        sendError(session.sessionId, `你必須在 ${boss.spawnRoom} 才能參加此事件。`);
        return;
      }
      const result = worldEventMgr.joinEvent(char.id, current.id);
      if (result.ok) {
        questMgr.updateProgress(char.id, 'participate_world_boss', current.bossId ?? current.id);
        unlockAppearance(char.id, 'aura_world_boss');
        sendSystem(session.sessionId, result.message);
      } else {
        sendError(session.sessionId, result.message);
      }
      break;
    }
    case 'ranking': {
      const current = worldEventMgr.getCurrentEvent();
      if (!current) {
        sendError(session.sessionId, '目前沒有進行中的世界事件。');
        return;
      }
      const rankings = worldEventMgr.getEventDamageRanking(current.id);
      if (rankings.length === 0) {
        sendSystem(session.sessionId, '尚無傷害紀錄。');
        return;
      }
      sendSystem(session.sessionId, '═══ 世界事件傷害排名 ═══');
      for (let i = 0; i < Math.min(rankings.length, 20); i++) {
        const r = rankings[i];
        const ch = getCharacterById(r.characterId);
        sendSystem(session.sessionId, `  #${i + 1} ${ch?.name ?? r.characterId} — ${r.damage} 傷害`);
      }
      break;
    }
    default:
      cmdEvent(session, ['info']);
      break;
  }
}

// ─── 天氣指令 ───

export function cmdWeather(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  sendSystem(session.sessionId, weatherMgr.getStatusReport());
}

// ─── 郵件指令 ───

export function cmdMail(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': case undefined: {
      const inbox = mailMgr.getInbox(char.id);
      if (inbox.length === 0) {
        sendSystem(session.sessionId, '你的信箱是空的。');
        return;
      }
      sendSystem(session.sessionId, '═══ 收件箱 ═══');
      for (const m of inbox) {
        const readMark = m.isRead ? '  ' : '★ ';
        const attach = (m.attachedItemId || m.attachedGold > 0) ? ' [附件]' : '';
        const date = new Date(m.createdAt * 1000).toLocaleDateString('zh-TW');
        sendSystem(session.sessionId, `${readMark}[${m.id.slice(0, 8)}] ${m.senderName} - ${m.subject || '(無主題)'}${attach} (${date})`);
      }
      sendSystem(session.sessionId, `共 ${inbox.length} 封郵件。使用 mail read <id> 閱讀。`);
      break;
    }

    case 'read': {
      const mailId = args[1];
      if (!mailId) {
        sendError(session.sessionId, '請指定郵件 ID。用法：mail read <id>');
        return;
      }
      // 支援短 ID 匹配
      const inbox = mailMgr.getInbox(char.id);
      const matched = inbox.find(m => m.id.startsWith(mailId));
      if (!matched) {
        sendError(session.sessionId, '找不到該郵件。');
        return;
      }
      const result = mailMgr.readMail(char.id, matched.id);
      if (!result.ok) {
        sendError(session.sessionId, result.error);
        return;
      }
      const m = result.mail;
      sendSystem(session.sessionId, '═══ 郵件內容 ═══');
      sendSystem(session.sessionId, `寄件人：${m.senderName}`);
      sendSystem(session.sessionId, `主題：${m.subject || '(無主題)'}`);
      sendSystem(session.sessionId, `日期：${new Date(m.createdAt * 1000).toLocaleString('zh-TW')}`);
      sendSystem(session.sessionId, '');
      sendSystem(session.sessionId, m.body || '(無內容)');
      if (result.claimed.length > 0) {
        sendSystem(session.sessionId, '');
        sendSystem(session.sessionId, '── 領取附件 ──');
        for (const c of result.claimed) {
          sendSystem(session.sessionId, `  ${c}`);
        }
      }
      break;
    }

    case 'send': {
      // mail send <player> <subject> <body> [-item <itemName>] [-gold <amount>]
      if (args.length < 4) {
        sendError(session.sessionId, '用法：mail send <玩家名> <主題> <內容> [-item <物品ID> [-count <數量>]] [-gold <金額>]');
        return;
      }

      const recipientName = args[1];
      // Parse flags
      let subject = '';
      let body = '';
      let attachItemId: string | undefined;
      let attachCount = 1;
      let attachGold = 0;

      // Find flag positions
      const flagArgs = args.slice(2);
      const itemFlagIdx = flagArgs.indexOf('-item');
      const goldFlagIdx = flagArgs.indexOf('-gold');
      const countFlagIdx = flagArgs.indexOf('-count');

      // Determine end of body text
      let bodyEndIdx = flagArgs.length;
      if (itemFlagIdx >= 0 && itemFlagIdx < bodyEndIdx) bodyEndIdx = itemFlagIdx;
      if (goldFlagIdx >= 0 && goldFlagIdx < bodyEndIdx) bodyEndIdx = goldFlagIdx;

      // First word after player name is subject, rest is body
      if (bodyEndIdx > 0) {
        subject = flagArgs[0];
        body = flagArgs.slice(1, bodyEndIdx).join(' ');
      }

      // Parse flags
      if (itemFlagIdx >= 0 && itemFlagIdx + 1 < flagArgs.length) {
        attachItemId = flagArgs[itemFlagIdx + 1];
      }
      if (countFlagIdx >= 0 && countFlagIdx + 1 < flagArgs.length) {
        attachCount = parseInt(flagArgs[countFlagIdx + 1], 10) || 1;
      }
      if (goldFlagIdx >= 0 && goldFlagIdx + 1 < flagArgs.length) {
        attachGold = parseInt(flagArgs[goldFlagIdx + 1], 10) || 0;
      }

      const sendResult = mailMgr.sendMail(char.id, recipientName, subject, body, attachItemId, attachCount, attachGold);
      if (!sendResult.ok) {
        sendError(session.sessionId, sendResult.error);
        return;
      }
      sendSystem(session.sessionId, `郵件已成功寄送給「${recipientName}」！`);

      // 通知收件人（如果在線）
      const recipient = getCharacterByName(recipientName);
      if (recipient) {
        const recipientSession = getSessionByCharacterId(recipient.id);
        if (recipientSession) {
          sendSystem(recipientSession.sessionId, `你收到了來自「${char.name}」的新郵件！`);
        }
      }
      break;
    }

    case 'delete': {
      const mailId = args[1];
      if (!mailId) {
        sendError(session.sessionId, '請指定郵件 ID。用法：mail delete <id>');
        return;
      }
      const inbox = mailMgr.getInbox(char.id);
      const matched = inbox.find(m => m.id.startsWith(mailId));
      if (!matched) {
        sendError(session.sessionId, '找不到該郵件。');
        return;
      }
      const delResult = mailMgr.deleteMail(char.id, matched.id);
      if (!delResult.ok) {
        sendError(session.sessionId, delResult.error!);
        return;
      }
      sendSystem(session.sessionId, '郵件已刪除。');
      break;
    }

    default:
      sendError(session.sessionId, '用法：mail list | mail read <id> | mail send <玩家> <主題> <內容> | mail delete <id>');
  }
}

// ─── 表情指令 ───

const EMOTE_MAP: Record<string, string> = {
  bow:       '恭敬地鞠了一躬。',
  wave:      '揮手打招呼。',
  laugh:     '開懷大笑。',
  cry:       '傷心地哭泣。',
  dance:     '翩翩起舞。',
  shrug:     '聳了聳肩。',
  nod:       '點了點頭。',
  clap:      '鼓掌叫好。',
  flex:      '秀出結實的肌肉。',
  think:     '陷入沉思。',
  salute:    '敬了一個禮。',
  facepalm:  '無奈地捂臉。',
  cheer:     '歡呼雀躍！',
  meditate:  '盤腿冥想。',
  yawn:      '打了個大哈欠。',
};

export function cmdEmote(session: WsSession, emoteStr: string): void {
  const char = getChar(session);
  if (!char) return;

  const emoteName = emoteStr.trim().toLowerCase();

  if (!emoteName) {
    sendSystem(session.sessionId, '可用表情：' + Object.keys(EMOTE_MAP).join('、'));
    return;
  }

  const emoteText = EMOTE_MAP[emoteName];
  if (!emoteText) {
    sendError(session.sessionId, `未知的表情：${emoteName}。可用表情：${Object.keys(EMOTE_MAP).join('、')}`);
    return;
  }

  const message = `${char.name} ${emoteText}`;

  // 顯示給自己
  sendNarrative(session.sessionId, message);

  // 廣播給同房間的其他玩家
  const playersInRoom = world.getPlayersInRoom(char.roomId).filter(id => id !== char.id);
  for (const pid of playersInRoom) {
    const targetSession = getSessionByCharacterId(pid);
    if (targetSession) {
      sendNarrative(targetSession.sessionId, message);
    }
  }
}

// ─── 好友指令 ───

export function cmdFriend(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'add': {
      const name = args[1];
      if (!name) {
        sendError(session.sessionId, '用法：friend add <玩家名>');
        return;
      }
      const result = friendMgr.addFriend(char.id, name);
      if (!result.ok) {
        sendError(session.sessionId, result.error!);
        return;
      }
      const f = result.friendInfo!;
      const status = f.isOnline ? '在線' : '離線';
      sendSystem(session.sessionId, `已將「${f.name}」(Lv.${f.level}) 加為好友！[${status}]`);

      // 通知對方
      const friendSession = getSessionByCharacterId(f.id);
      if (friendSession) {
        sendSystem(friendSession.sessionId, `「${char.name}」將你加為好友了！`);
      }
      break;
    }

    case 'remove': {
      const name = args[1];
      if (!name) {
        sendError(session.sessionId, '用法：friend remove <玩家名>');
        return;
      }
      const result = friendMgr.removeFriend(char.id, name);
      if (!result.ok) {
        sendError(session.sessionId, result.error!);
        return;
      }
      sendSystem(session.sessionId, `已將「${name}」從好友列表移除。`);
      break;
    }

    case 'online': {
      const friends = friendMgr.getOnlineFriends(char.id);
      if (friends.length === 0) {
        sendSystem(session.sessionId, '目前沒有在線的好友。');
        return;
      }
      sendSystem(session.sessionId, '═══ 在線好友 ═══');
      for (const f of friends) {
        sendSystem(session.sessionId, `  ${f.name} (Lv.${f.level} ${f.classId})`);
      }
      sendSystem(session.sessionId, `共 ${friends.length} 位在線。`);
      break;
    }

    case 'list': default: {
      const friends = friendMgr.getFriendList(char.id);
      if (friends.length === 0) {
        sendSystem(session.sessionId, '你還沒有好友。使用 friend add <玩家名> 來新增好友。');
        return;
      }
      sendSystem(session.sessionId, '═══ 好友列表 ═══');
      for (const f of friends) {
        const status = f.isOnline ? '●在線' : '○離線';
        sendSystem(session.sessionId, `  ${status} ${f.name} (Lv.${f.level} ${f.classId})`);
      }
      sendSystem(session.sessionId, `共 ${friends.length} 位好友。`);
      break;
    }
  }
}

// ─── 教學系統指令 ───

export function cmdTutorial(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'skip') {
    if (!tutorialMgr.isInTutorial(char.id)) {
      sendSystem(session.sessionId, '你不在教學中，或已完成教學。');
      return;
    }
    tutorialMgr.skipTutorial(char.id);
    return;
  }

  // 預設：顯示當前教學狀態
  const text = tutorialMgr.formatTutorialStatus(char.id);
  sendSystem(session.sessionId, text);
}

// ─── 自動戰鬥指令 ───

export function cmdAuto(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'off': case 'stop': case 'disable': {
      const msg = autoBattleMgr.disable(char.id);
      sendSystem(session.sessionId, msg);
      break;
    }
    case 'config': case 'set': {
      const key = args[1]?.toLowerCase();
      const value = args[2]?.toLowerCase();

      if (!key || !value) {
        sendSystem(session.sessionId,
          '自動戰鬥設定：\n' +
          '  auto config flee <百分比>  — 逃跑 HP 閾值\n' +
          '  auto config potion <on/off> — 自動使用藥水\n' +
          '  auto config loot <on/off>   — 自動拾取\n' +
          '  auto config attack <on/off> — 自動攻擊',
        );
        return;
      }

      if (key === 'flee') {
        const percent = parseInt(value, 10);
        if (isNaN(percent)) { sendError(session.sessionId, '請輸入有效的百分比數字。'); return; }
        const result = autoBattleMgr.setConfig(char.id, 'fleeHpPercent', percent);
        sendSystem(session.sessionId, result.message);
      } else if (key === 'potion') {
        const result = autoBattleMgr.setConfig(char.id, 'autoUsePotion', value === 'on' || value === 'true');
        sendSystem(session.sessionId, result.message);
      } else if (key === 'loot') {
        const result = autoBattleMgr.setConfig(char.id, 'autoLoot', value === 'on' || value === 'true');
        sendSystem(session.sessionId, result.message);
      } else if (key === 'attack') {
        const result = autoBattleMgr.setConfig(char.id, 'autoAttack', value === 'on' || value === 'true');
        sendSystem(session.sessionId, result.message);
      } else {
        sendError(session.sessionId, `未知設定項：${key}`);
      }
      break;
    }
    case 'status': case 'info': {
      const text = autoBattleMgr.formatStatus(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'on': case 'start': case 'enable':
    default: {
      // "auto" or "auto on" enables
      const msg = autoBattleMgr.enable(char.id);
      sendSystem(session.sessionId, msg);
      // 立刻觸發第一次自動攻擊（如果不在戰鬥中）
      if (!isInCombat(char.id)) {
        autoBattleMgr.processAutoAction(char.id);
      }
      break;
    }
  }
}

// ─── 二轉任務系統 ───

export function cmdClassQuest2(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'start': {
      if (!args[1]) {
        const text = classQuest2Mgr.formatAvailableQuests(char);
        sendSystem(session.sessionId, text);
        return;
      }
      const questId = args[1];
      const result = classQuest2Mgr.startQuest2(char.id, questId, char);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'status': {
      const text = classQuest2Mgr.formatQuest2Status(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'abandon': {
      const result = classQuest2Mgr.abandonQuest2(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'complete': {
      const result = classQuest2Mgr.completeQuest2(char.id, char);
      sendSystem(session.sessionId, result.message);
      if (result.success) {
        saveCharacter(char);
      }
      break;
    }
    default:
      sendSystem(session.sessionId,
        '二轉任務指令：\n' +
        '  classquest2 start [任務ID] — 查看/開始二轉任務\n' +
        '  classquest2 status — 查看進度\n' +
        '  classquest2 abandon — 放棄任務\n' +
        '  classquest2 complete — 完成二轉（需在轉職大廳）\n' +
        '  別名：cq2',
      );
  }
}

// ─── 技能樹系統 ───

export function cmdSkillTree(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'add': {
      const branch = args[1]?.toLowerCase();
      if (branch !== 'attack' && branch !== 'defense' && branch !== 'support') {
        sendError(session.sessionId, '用法：skilltree add <attack|defense|support>');
        return;
      }
      const result = skillTreeMgr.addPoint(char.id, branch, char);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'reset': {
      const result = skillTreeMgr.resetTree(char.id, char);
      sendSystem(session.sessionId, result.message);
      if (result.success) {
        saveCharacter(char);
      }
      break;
    }
    case 'info':
    default: {
      const text = skillTreeMgr.formatSkillTree(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
  }
}

// ─── 交易所系統 ───

export function cmdMarket(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'sell': {
      let itemId = args[1];
      let itemInstanceId: string | undefined;
      const count = parseInt(args[2]) || 1;
      const price = parseInt(args[3]) || 0;
      if (!itemId || price <= 0) {
        sendError(session.sessionId, '用法：market sell <物品ID> <數量> <單價>');
        return;
      }
      if (!ITEM_DEFS[itemId]) {
        const instance = getInventory(char.id).find(i => i.itemInstanceId === itemId && !i.equipped);
        if (instance) {
          itemInstanceId = instance.itemInstanceId;
          itemId = instance.itemId;
        }
      }
      const result = marketMgr.placeSellOrder(char.id, itemId, count, price, itemInstanceId);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'buy': {
      // 如果第一個參數看起來是訂單 ID（短 ID），則成交該訂單
      if (args[1] && !ITEM_DEFS[args[1]]) {
        const result = marketMgr.fillOrder(args[1], char.id);
        sendSystem(session.sessionId, result.message);
        return;
      }
      const itemId = args[1];
      const count = parseInt(args[2]) || 1;
      const price = parseInt(args[3]) || 0;
      if (!itemId || price <= 0) {
        sendError(session.sessionId, '用法：market buy <物品ID> <數量> <單價>  或  market buy <訂單ID>');
        return;
      }
      const result = marketMgr.placeBuyOrder(char.id, itemId, count, price);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'list': {
      const keyword = args[1];
      const orders = marketMgr.searchOrders(keyword);
      const text = marketMgr.formatOrderList(orders);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'my': {
      const orders = marketMgr.getMyOrders(char.id);
      if (orders.length === 0) {
        sendSystem(session.sessionId, '你沒有任何掛單。');
      } else {
        const text = marketMgr.formatOrderList(orders);
        sendSystem(session.sessionId, text);
      }
      break;
    }
    case 'cancel': {
      if (!args[1]) {
        sendError(session.sessionId, '用法：market cancel <訂單ID>');
        return;
      }
      const result = marketMgr.cancelOrder(args[1], char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'history': case 'price': {
      if (!args[1]) {
        sendError(session.sessionId, '用法：market history <物品ID>');
        return;
      }
      const text = marketMgr.formatPriceHistory(args[1]);
      sendSystem(session.sessionId, text);
      break;
    }
    default:
      sendSystem(session.sessionId,
        '交易所指令：\n' +
        '  market sell <物品ID> <數量> <單價> — 掛賣物品\n' +
        '  market buy <物品ID> <數量> <單價> — 掛單求購\n' +
        '  market buy <訂單ID> — 購買賣單\n' +
        '  market list [關鍵字] — 瀏覽掛單\n' +
        '  market my — 我的掛單\n' +
        '  market cancel <訂單ID> — 取消掛單\n' +
        '  market history <物品ID> — 價格歷史',
      );
  }
}

// ─── 公會系統 ───

export function cmdGuild(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'create': {
      const name = args[1];
      if (!name) {
        sendError(session.sessionId, '用法：guild create <公會名稱>');
        return;
      }
      const desc = args.slice(2).join(' ');
      const result = guildMgr.createGuild(char, name, desc);
      if (result.success) questMgr.updateProgress(char.id, 'contribute_guild', 'create');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'join': {
      const name = args[1];
      if (!name) {
        sendError(session.sessionId, '用法：guild join <公會名稱>');
        return;
      }
      const result = guildMgr.joinGuild(char.id, name);
      if (result.success) questMgr.updateProgress(char.id, 'contribute_guild', 'join');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'leave': {
      const result = guildMgr.leaveGuild(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'dissolve': {
      const result = guildMgr.dissolveGuild(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'info': {
      const text = guildMgr.formatGuildInfo(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'members': {
      const text = guildMgr.formatGuildMembers(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'chat': {
      const message = args.slice(1).join(' ');
      if (!message) {
        sendError(session.sessionId, '用法：guild chat <訊息>');
        return;
      }
      const result = guildMgr.guildChat(char.id, message);
      if (!result.success) {
        sendError(session.sessionId, result.message);
      }
      break;
    }
    case 'storage': {
      if (args[1]?.toLowerCase() === 'expand') {
        const result = guildMgr.expandStorage(char.id);
        if (result.success) questMgr.updateProgress(char.id, 'contribute_guild', 'storage_expand');
        sendSystem(session.sessionId, result.message);
        break;
      }
      const text = guildMgr.formatGuildStorage(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'deposit': {
      const itemId = args[1];
      const count = parseInt(args[2]) || 1;
      if (!itemId) {
        sendError(session.sessionId, '用法：guild deposit <物品ID> [數量]');
        return;
      }
      const result = guildMgr.depositItem(char.id, itemId, count);
      if (result.success) questMgr.updateProgress(char.id, 'contribute_guild', 'deposit');
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'withdraw': {
      const itemId = args[1];
      const count = parseInt(args[2]) || 1;
      if (!itemId) {
        sendError(session.sessionId, '用法：guild withdraw <物品ID> [數量]');
        return;
      }
      const result = guildMgr.withdrawItem(char.id, itemId, count);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'promote': {
      const targetName = args[1];
      if (!targetName) {
        sendError(session.sessionId, '用法：guild promote <玩家名稱>');
        return;
      }
      const result = guildMgr.promoteMembers(char.id, targetName);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'kick': {
      const targetName = args[1];
      if (!targetName) {
        sendError(session.sessionId, '用法：guild kick <玩家名稱>');
        return;
      }
      const result = guildMgr.kickMember(char.id, targetName);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId,
        '公會指令：\n' +
        '  guild create <名稱> — 建立公會（5000G）\n' +
        '  guild join <名稱> — 加入公會\n' +
        '  guild leave — 離開公會\n' +
        '  guild dissolve — 解散公會（會長）\n' +
        '  guild info — 公會資訊\n' +
        '  guild members — 成員列表\n' +
        '  guild chat <訊息> — 公會聊天\n' +
        '  guild storage — 公會倉庫\n' +
        '  guild storage expand — 擴充公會倉庫\n' +
        '  guild deposit <物品> [數量] — 存入倉庫\n' +
        '  guild withdraw <物品> [數量] — 取出倉庫\n' +
        '  guild promote <玩家> — 晉升成員\n' +
        '  guild kick <玩家> — 踢出成員\n' +
        '  別名：g',
      );
  }
}

// ─── 每日簽到 ───

export function cmdSignin(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const result = dailyRewardMgr.signin(char.id, char);
  sendSystem(session.sessionId, result.message);
}
