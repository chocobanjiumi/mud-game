// 指令解析器與路由

import type { WsSession } from '../ws/handler.js';
import {
  sendNarrative, sendSystem, sendError, sendToSession,
  getSessionByCharacterId,
} from '../ws/handler.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getInventory, getLearnedSkills,
  addInventoryItem, removeInventoryItem, setEquipped,
} from '../db/queries.js';
import {
  ITEM_DEFS, SKILL_DEFS, CLASS_DEFS,
  calculateMaxHp, calculateMaxMp,
  calculateAtk, calculateMatk, calculateDef, calculateMdef,
  calculateCritRate, calculateDodgeRate, calculateHitRate,
  calculateCritDamage,
  getExpForLevel,
} from '@game/shared';
import type { Character, ClassId } from '@game/shared';
import {
  world, combat, classChange, partyMgr, tradeMgr,
  dungeonMgr, questMgr, pvpMgr, leaderboardMgr,
  isInCombat, getPlayerCombatId, findCharacterByName,
} from './state.js';

// ─── 指令路由 ───

/** 主要指令處理入口 */
export function handleCommand(session: WsSession, input: string): void {
  const trimmed = input.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  const argStr = args.join(' ');

  // 指令別名
  const aliasMap: Record<string, string> = {
    n: 'go north', s: 'go south', e: 'go east', w: 'go west',
    u: 'go up', d: 'go down',
    l: 'look', i: 'inventory', inv: 'inventory',
    stat: 'status', stats: 'status',
    atk: 'attack', kill: 'attack',
    flee: 'escape', run: 'escape',
    eq: 'equip', uneq: 'unequip',
    sk: 'skills',
    help: 'help', '?': 'help',
    lb: 'leaderboard',
  };

  if (aliasMap[trimmed.toLowerCase()]) {
    return handleCommand(session, aliasMap[trimmed.toLowerCase()]);
  }

  switch (cmd) {
    case 'look': cmdLook(session); break;
    case 'go': case 'move': cmdGo(session, argStr); break;
    case 'status': cmdStatus(session); break;
    case 'inventory': cmdInventory(session); break;
    case 'skills': cmdSkills(session); break;
    case 'attack': cmdAttack(session, argStr); break;
    case 'skill': cmdSkill(session, args); break;
    case 'defend': cmdDefend(session); break;
    case 'escape': cmdEscape(session); break;
    case 'equip': cmdEquip(session, argStr); break;
    case 'unequip': cmdUnequip(session, argStr); break;
    case 'use': cmdUse(session, argStr); break;
    case 'take': case 'pick': cmdTake(session, argStr); break;
    case 'drop': cmdDrop(session, argStr); break;
    case 'say': cmdSay(session, argStr); break;
    case 'talk': cmdTalk(session, argStr); break;
    case 'allocate': case 'alloc': cmdAllocate(session, args); break;
    case 'map': cmdMap(session); break;
    case 'rest': cmdRest(session); break;
    // 新系統指令
    case 'party': cmdParty(session, args); break;
    case 'trade': cmdTrade(session, args); break;
    case 'quest': cmdQuest(session, args); break;
    case 'duel': cmdDuel(session, args); break;
    case 'arena': cmdArena(session, args); break;
    case 'dungeon': cmdDungeon(session, args); break;
    case 'leaderboard': case 'rank': cmdLeaderboard(session, args); break;
    case 'classchange': case 'job': cmdClassChange(session, argStr); break;
    case 'help': cmdHelp(session); break;
    default:
      sendError(session.sessionId, `未知指令：${cmd}。輸入 help 查看可用指令。`);
  }
}

// ─── 基本指令 ───

function cmdLook(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const roomInfo = world.getRoomInfo(char.roomId);
  if (!roomInfo) {
    sendNarrative(session.sessionId, '你身處一個未知的地方。');
    return;
  }

  // 取得同房間的其他玩家
  const playersInRoom = world.getPlayersInRoom(char.roomId)
    .filter(id => id !== char.id)
    .map(id => {
      const c = getCharacterById(id);
      return c ? { id: c.id, name: c.name, classId: c.classId, level: c.level } : null;
    })
    .filter(Boolean);

  // 取得存活怪物
  const monsters = world.getAliveMonsters(char.roomId).map(m => ({
    id: m.instanceId,
    name: m.def.name,
    level: m.def.level,
    hp: m.hp,
    maxHp: m.maxHp,
  }));

  sendToSession(session.sessionId, 'room', {
    id: char.roomId,
    name: roomInfo.room.name,
    description: roomInfo.room.description,
    exits: roomInfo.room.exits,
    players: playersInRoom,
    npcs: roomInfo.npcs || [],
    items: [],
    monsters,
  });

  // 觸發任務進度（拜訪地點）
  questMgr.updateProgress(char.id, 'visit', char.roomId);
}

function cmdGo(session: WsSession, direction: string): void {
  const char = getChar(session);
  if (!char) return;

  if (!direction) {
    sendError(session.sessionId, '請指定方向：north, south, east, west, up, down');
    return;
  }

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法移動！');
    return;
  }

  const result = world.handleMove(char.id, direction as any);
  if (!result) {
    sendError(session.sessionId, `無法往 ${directionChinese(direction)} 移動。`);
    return;
  }

  char.roomId = result.room.id;
  saveCharacter(char);
  sendNarrative(session.sessionId, `你往 ${directionChinese(direction)} 移動了。`);
  cmdLook(session);
}

function cmdStatus(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const classDef = CLASS_DEFS[char.classId];
  const nextExp = getExpForLevel(char.level + 1);

  sendToSession(session.sessionId, 'status', {
    character: char,
    derived: {
      atk: calculateAtk(char.stats.str, 0),
      matk: calculateMatk(char.stats.int, 0),
      def: calculateDef(char.stats.vit, 0),
      mdef: calculateMdef(char.stats.int, char.stats.vit, 0),
      hitRate: calculateHitRate(char.stats.dex, 5),
      dodgeRate: calculateDodgeRate(char.stats.dex, char.stats.luk),
      critRate: calculateCritRate(char.stats.dex, char.stats.luk),
      critDamage: calculateCritDamage(),
    },
    expToNext: Math.max(0, nextExp - char.exp),
    effects: [],
  });
}

function cmdInventory(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const items = getInventory(char.id);
  const itemDetails = items.map((inv) => {
    const def = ITEM_DEFS[inv.itemId];
    return {
      ...inv,
      name: def?.name ?? inv.itemId,
      type: def?.type ?? 'unknown',
    };
  });

  sendToSession(session.sessionId, 'inventory', {
    items: itemDetails,
    equipment: char.equipment,
    capacity: 20,
    gold: char.gold,
  });
}

function cmdSkills(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const learned = getLearnedSkills(char.id);
  sendSystem(session.sessionId, '── 技能列表 ──');
  for (const ls of learned) {
    const def = SKILL_DEFS[ls.skillId];
    if (!def) continue;
    const typeStr = def.type === 'passive' ? '[被動]' : `[主動 MP:${def.mpCost}]`;
    sendSystem(session.sessionId, `  ${def.name}（${def.englishName}）${typeStr} - ${def.description}`);
  }
}

function cmdAttack(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;

  // 如果已在戰鬥中，提交普攻行動
  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitAction(combatId, {
      actorId: char.id,
      type: 'attack',
    });
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

  // 開始戰鬥
  combat.startCombat(players, [monster], (result, loot) => {
    // 戰鬥結束後的處理
    if (result === 'victory') {
      // 觸發任務進度
      questMgr.updateProgress(char.id, 'kill', monster.monsterId);
      world.killMonster(char.roomId, monster.instanceId);
    }
  });
}

function cmdSkill(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (args.length === 0) {
    sendError(session.sessionId, '請指定技能名稱。用法：skill <技能名> [目標]');
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

  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitAction(combatId, {
      actorId: char.id,
      type: 'skill',
      skillId: matchedSkill.skillId,
    });
    return;
  }

  const skillDef = SKILL_DEFS[matchedSkill.skillId];
  if (skillDef && skillDef.mpCost > char.mp) {
    sendError(session.sessionId, `MP 不足！${skillDef.name}需要 ${skillDef.mpCost} MP。`);
    return;
  }

  sendSystem(session.sessionId, `你使用了「${skillDef?.name ?? skillName}」！${target ? `目標：${target}` : ''}`);
}

function cmdDefend(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitAction(combatId, { actorId: char.id, type: 'defend' });
    return;
  }
  sendSystem(session.sessionId, '你擺出了防禦姿態。');
}

function cmdEscape(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const combatId = getPlayerCombatId(char.id);
  if (combatId) {
    combat.submitAction(combatId, { actorId: char.id, type: 'flee' });
    return;
  }
  sendSystem(session.sessionId, '你不在戰鬥中。');
}

function cmdEquip(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：equip <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName);
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (!def?.equipSlot) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法裝備。`); return; }
  if (def.levelReq > char.level) { sendError(session.sessionId, `等級不足！需要 Lv ${def.levelReq}。`); return; }

  setEquipped(char.id, match.itemId, true);
  sendSystem(session.sessionId, `你裝備了「${def.name}」。`);
}

function cmdUnequip(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：unequip <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    if (!item.equipped) return false;
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName);
  });
  if (!match) { sendError(session.sessionId, `你沒有裝備「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  setEquipped(char.id, match.itemId, false);
  sendSystem(session.sessionId, `你卸下了「${def?.name ?? itemName}」。`);
}

function cmdUse(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：use <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName);
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (!def?.useEffect) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法使用。`); return; }

  removeInventoryItem(char.id, match.itemId, 1);
  const effect = def.useEffect;
  let message = `你使用了「${def.name}」。`;

  if (effect.type === 'heal_hp') {
    const healed = Math.min(effect.value, char.maxHp - char.hp);
    char.hp = Math.min(char.maxHp, char.hp + effect.value);
    message += ` 回復了 ${healed} HP。`;
  } else if (effect.type === 'heal_mp') {
    const healed = Math.min(effect.value, char.maxMp - char.mp);
    char.mp = Math.min(char.maxMp, char.mp + effect.value);
    message += ` 回復了 ${healed} MP。`;
  } else if (effect.type === 'heal_both') {
    char.hp = Math.min(char.maxHp, char.hp + effect.value);
    char.mp = Math.min(char.maxMp, char.mp + (effect.value2 ?? 0));
    message += ` 回復了 HP 和 MP。`;
  }

  saveCharacter(char);
  sendSystem(session.sessionId, message);
}

function cmdTake(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  sendSystem(session.sessionId, `這裡沒有可以撿取的「${itemName || '物品'}」。`);
}

function cmdDrop(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：drop <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName) && !item.equipped;
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  removeInventoryItem(char.id, match.itemId, 1);
  sendSystem(session.sessionId, `你丟棄了「${def?.name ?? itemName}」。`);
}

function cmdSay(session: WsSession, message: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!message) { sendError(session.sessionId, '用法：say <訊息>'); return; }

  sendToSession(session.sessionId, 'chat', {
    senderId: char.id, senderName: char.name, message, channel: 'room',
  });
}

function cmdTalk(session: WsSession, npcName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!npcName) { sendError(session.sessionId, '用法：talk <NPC名稱>'); return; }
  sendSystem(session.sessionId, `這裡沒有名為「${npcName}」的 NPC。`);
}

function cmdAllocate(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  if (args.length < 2) {
    sendError(session.sessionId, '用法：allocate <屬性> <點數>  (屬性: str, int, dex, vit, luk)');
    return;
  }

  const stat = args[0].toLowerCase();
  const points = parseInt(args[1], 10);
  if (isNaN(points) || points < 1) { sendError(session.sessionId, '請輸入有效的點數。'); return; }
  if (char.freePoints < points) {
    sendError(session.sessionId, `自由屬性點不足！你還有 ${char.freePoints} 點。`);
    return;
  }

  const validStats = ['str', 'int', 'dex', 'vit', 'luk'];
  if (!validStats.includes(stat)) {
    sendError(session.sessionId, `無效的屬性。可用屬性：${validStats.join(', ')}`);
    return;
  }

  const statKey = stat as keyof typeof char.stats;
  char.stats[statKey] += points;
  char.freePoints -= points;
  char.maxHp = calculateMaxHp(char.level, char.stats.vit);
  char.maxMp = calculateMaxMp(char.level, char.stats.int);
  saveCharacter(char);

  const statNames: Record<string, string> = {
    str: '力量(STR)', int: '智力(INT)', dex: '敏捷(DEX)', vit: '體質(VIT)', luk: '幸運(LUK)',
  };
  sendSystem(session.sessionId, `${statNames[stat]} +${points}！目前: ${char.stats[statKey]}。剩餘: ${char.freePoints}`);
}

function cmdMap(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const miniMap = world.generateMiniMap(char.roomId);
  sendToSession(session.sessionId, 'map', {
    ascii: miniMap,
    currentRoom: char.roomId,
    zone: 'world',
  });
}

function cmdRest(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) { sendError(session.sessionId, '戰鬥中無法休息！'); return; }

  // 恢復 30% HP/MP
  const hpRecover = Math.floor(char.maxHp * 0.3);
  const mpRecover = Math.floor(char.maxMp * 0.3);
  char.hp = Math.min(char.maxHp, char.hp + hpRecover);
  char.mp = Math.min(char.maxMp, char.mp + mpRecover);
  saveCharacter(char);
  sendNarrative(session.sessionId, `你稍作休息，恢復了 ${hpRecover} HP 和 ${mpRecover} MP。`);
}

// ─── 組隊系統 ───

function cmdParty(session: WsSession, args: string[]): void {
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
    case 'kick': {
      const targetName = args.slice(1).join(' ');
      if (!targetName) { sendError(session.sessionId, '用法：party kick <玩家名稱>'); return; }
      const target = findCharacterByName(targetName);
      if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }
      const result = partyMgr.kickMember(char.id, target.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'info': case 'status': {
      const party = partyMgr.getParty(char.id);
      if (!party) { sendSystem(session.sessionId, '你不在任何隊伍中。'); return; }
      sendSystem(session.sessionId, `── 隊伍資訊 ──`);
      for (const memberId of party.memberIds) {
        const member = getCharacterById(memberId);
        if (!member) continue;
        const leader = party.leaderId === memberId ? ' [隊長]' : '';
        sendSystem(session.sessionId, `  ${member.name} Lv.${member.level} HP:${member.hp}/${member.maxHp}${leader}`);
      }
      break;
    }
    default:
      sendSystem(session.sessionId, '組隊指令：party create/invite <名>/accept/decline/leave/kick <名>/info');
  }
}

// ─── 交易系統 ───

function cmdTrade(session: WsSession, args: string[]): void {
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

function cmdQuest(session: WsSession, args: string[]): void {
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
      break;
    }
    default:
      sendSystem(session.sessionId, '任務指令：quest list/active/accept <ID>/complete <ID>');
  }
}

// ─── PvP 決鬥 ───

function cmdDuel(session: WsSession, args: string[]): void {
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
      const message = pvpMgr.duel(char.id, char.name, target.id, target.name);
      sendSystem(session.sessionId, message);
    }
  }
}

// ─── 競技場 ───

function cmdArena(session: WsSession, args: string[]): void {
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

function cmdDungeon(session: WsSession, args: string[]): void {
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
    default:
      sendSystem(session.sessionId, '副本指令：dungeon list/enter <副本ID>');
  }
}

// ─── 排行榜 ───

function cmdLeaderboard(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() || 'level';
  const validCategories: Record<string, 'level' | 'pvp' | 'dungeon_speed'> = {
    level: 'level', lv: 'level',
    pvp: 'pvp',
    dungeon: 'dungeon_speed', speed: 'dungeon_speed',
    my: 'level', // 顯示個人排名
  };

  if (sub === 'my' || sub === 'me') {
    const text = leaderboardMgr.formatPlayerRanking(char.id, char.name);
    sendSystem(session.sessionId, text);
    return;
  }

  const category = validCategories[sub];
  if (!category) {
    sendSystem(session.sessionId, '排行榜指令：leaderboard level/pvp/dungeon/my');
    return;
  }

  const text = leaderboardMgr.formatLeaderboard(category);
  sendSystem(session.sessionId, text);
}

// ─── 轉職 ───

function cmdClassChange(session: WsSession, targetClass: string): void {
  const char = getChar(session);
  if (!char) return;

  if (!targetClass) {
    // 顯示可轉職業
    const available = classChange.getAvailableClassChanges(char);
    if (available.length === 0) {
      sendSystem(session.sessionId, '目前沒有可轉職的選項。');
      return;
    }
    sendSystem(session.sessionId, '── 可轉職業 ──');
    for (const cls of available) {
      sendSystem(session.sessionId, `  ${cls.name}（${cls.id}）- ${cls.description}`);
    }
    sendSystem(session.sessionId, '\n用法：classchange <職業ID>');
    return;
  }

  const result = classChange.performClassChange(char, targetClass as ClassId);
  if (result.success) {
    saveCharacter(char);
    sendToSession(session.sessionId, 'class_change', {
      newClassId: targetClass,
      className: CLASS_DEFS[targetClass as ClassId]?.name ?? targetClass,
    });
  }
  sendSystem(session.sessionId, result.message);
}

// ─── 幫助 ───

function cmdHelp(session: WsSession): void {
  sendSystem(session.sessionId, '═══ 指令說明 ═══');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 移動與探索 ──');
  sendSystem(session.sessionId, '  look (l)            查看周圍環境');
  sendSystem(session.sessionId, '  go <方向> (n/s/e/w)  移動');
  sendSystem(session.sessionId, '  map                 顯示地圖');
  sendSystem(session.sessionId, '  rest                原地休息，恢復 HP/MP');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 角色資訊 ──');
  sendSystem(session.sessionId, '  status (stat)       查看角色狀態');
  sendSystem(session.sessionId, '  inventory (i)       查看背包');
  sendSystem(session.sessionId, '  skills (sk)         查看技能列表');
  sendSystem(session.sessionId, '  allocate <屬性> <點> 分配屬性點');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 物品操作 ──');
  sendSystem(session.sessionId, '  equip/unequip <物品> 裝備/卸下');
  sendSystem(session.sessionId, '  use <物品>           使用物品');
  sendSystem(session.sessionId, '  drop <物品>          丟棄物品');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 戰鬥指令 ──');
  sendSystem(session.sessionId, '  attack <目標>        攻擊');
  sendSystem(session.sessionId, '  skill <技能> [目標]   使用技能');
  sendSystem(session.sessionId, '  defend / flee        防禦 / 逃跑');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 社交 ──');
  sendSystem(session.sessionId, '  say <訊息>           說話');
  sendSystem(session.sessionId, '  party                組隊系統');
  sendSystem(session.sessionId, '  trade                交易系統');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 進階系統 ──');
  sendSystem(session.sessionId, '  quest                任務系統');
  sendSystem(session.sessionId, '  duel <玩家>          PvP 決鬥');
  sendSystem(session.sessionId, '  arena                競技場');
  sendSystem(session.sessionId, '  dungeon              副本系統');
  sendSystem(session.sessionId, '  leaderboard (lb)     排行榜');
  sendSystem(session.sessionId, '  classchange (job)    轉職');
}

// ─── 工具函式 ───

function getChar(session: WsSession): Character | null {
  if (!session.characterId) {
    sendError(session.sessionId, '請先登入並選擇角色。');
    return null;
  }
  const char = getCharacterById(session.characterId);
  if (!char) {
    sendError(session.sessionId, '找不到你的角色資料。');
    return null;
  }
  return char;
}

function directionChinese(dir: string): string {
  const map: Record<string, string> = {
    north: '北', south: '南', east: '東', west: '西', up: '上', down: '下',
  };
  return map[dir] ?? dir;
}
