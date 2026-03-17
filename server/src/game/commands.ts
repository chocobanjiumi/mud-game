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
  dungeonMgr, questMgr, pvpMgr, leaderboardMgr, guardianMgr,
  kingdomMgr, buildingMgr, warMgr, treasuryMgr, diplomacyMgr,
  isInCombat, getPlayerCombatId, findCharacterByName,
} from './state.js';
import { GUARDIAN_DEFS } from './guardian.js';
import { RANK_NAMES } from './kingdom.js';
import { BUILDING_TYPE_NAMES, NPC_TYPE_NAMES } from './kingdom-building.js';
import type { KingdomRank, BuildingType, KingdomNpcType, Direction } from '@game/shared';

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
    // 守護靈系統
    case 'ask': cmdAsk(session, argStr); break;
    case 'guardian': cmdGuardian(session, args); break;
    // 王國系統
    case 'kingdom': case 'k': cmdKingdom(session, args); break;
    case 'appoint': cmdAppoint(session, args); break;
    case 'demote': cmdDemote(session, args); break;
    case 'kick': cmdKick(session, args); break;
    case 'build': cmdBuild(session, args); break;
    case 'mob': cmdMob(session, args); break;
    case 'npc': cmdNpc(session, args); break;
    case 'war': cmdWar(session, args); break;
    case 'army': cmdArmy(session, args); break;
    case 'bounty': cmdBounty(session, args); break;
    case 'treasury': cmdTreasury(session, args); break;
    case 'diplomacy': cmdDiplomacy(session, args); break;
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

  // 守護靈感知：進入新房間時自動觸發
  guardianMgr.processGuardianSense(session.sessionId, char);
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
    const typeStr = def.type === 'passive' ? '[被動]' : `[主動 消耗:${def.resourceCost}]`;
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
  if (skillDef && skillDef.resourceCost > char.resource) {
    sendError(session.sessionId, `資源不足！${skillDef.name}需要 ${skillDef.resourceCost} 點。`);
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
    // heal_mp 現在恢復 resource（而非舊的 mp）
    if (char.resourceType === 'rage') {
      message += ` 但怒氣無法透過藥水恢復。`;
    } else {
      const healed = Math.min(effect.value, char.maxResource - char.resource);
      char.resource = Math.min(char.maxResource, char.resource + effect.value);
      const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'energy' ? '體力' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
      message += ` 回復了 ${healed} ${resourceLabel}。`;
    }
  } else if (effect.type === 'heal_both') {
    char.hp = Math.min(char.maxHp, char.hp + effect.value);
    if (char.resourceType !== 'rage') {
      char.resource = Math.min(char.maxResource, char.resource + (effect.value2 ?? 0));
    }
    message += ` 回復了 HP 和資源。`;
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

  // 恢復 30% HP + 資源
  const hpRecover = Math.floor(char.maxHp * 0.3);
  char.hp = Math.min(char.maxHp, char.hp + hpRecover);

  // 資源恢復：怒氣不靠休息恢復，其他回復 30%
  let resourceMsg = '';
  if (char.resourceType !== 'rage') {
    const resRecover = Math.floor(char.maxResource * 0.3);
    char.resource = Math.min(char.maxResource, char.resource + resRecover);
    const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'energy' ? '體力' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
    resourceMsg = ` 和 ${resRecover} ${resourceLabel}`;
  }

  saveCharacter(char);
  sendNarrative(session.sessionId, `你稍作休息，恢復了 ${hpRecover} HP${resourceMsg}。`);
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

// ─── 守護靈系統 ───

function cmdAsk(session: WsSession, argStr: string): void {
  const char = getChar(session);
  if (!char) return;

  // "ask" 或 "ask guardian" — 請求守護靈給予建議
  const target = argStr.toLowerCase().trim();
  if (!target || target === 'guardian') {
    const advice = guardianMgr.getGuardianAdvice(char);
    saveCharacter(char);
    sendNarrative(session.sessionId, advice);
    return;
  }

  sendError(session.sessionId, `用法：ask 或 ask guardian — 向守護靈詢問建議`);
}

function cmdGuardian(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'sense': {
      // 主動感知
      const result = guardianMgr.activeGuardianSense(session.sessionId, char);
      saveCharacter(char);
      if (result) {
        sendNarrative(session.sessionId, result);
      }
      break;
    }
    case 'advice': {
      // 策略建議
      const advice = guardianMgr.getGuardianAdvice(char);
      saveCharacter(char);
      sendNarrative(session.sessionId, advice);
      break;
    }
    case 'select': case 'choose': {
      // 選擇守護靈
      const guardianId = args[1];
      if (!guardianId) {
        sendSystem(session.sessionId, '用法：guardian select <守護靈ID>');
        sendSystem(session.sessionId, '可用的守護靈：');
        sendSystem(session.sessionId, '  hunters_eye    — 獵人之眼（生物感知路線）');
        sendSystem(session.sessionId, '  treasure_instinct — 尋寶直覺（寶藏感知路線）');
        sendSystem(session.sessionId, '  soul_resonance — 靈魂共鳴（靈魂感知路線）');
        return;
      }
      const result = guardianMgr.selectGuardian(char, guardianId);
      saveCharacter(char);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'info': case 'status': {
      // 查看守護靈狀態
      if (!char.guardianId) {
        sendSystem(session.sessionId, '你還沒有守護靈。使用 guardian select <ID> 來選擇。');
        return;
      }
      const def = GUARDIAN_DEFS[char.guardianId];
      if (!def) {
        sendSystem(session.sessionId, '守護靈資料異常。');
        return;
      }
      sendSystem(session.sessionId, `── 守護靈資訊 ──`);
      sendSystem(session.sessionId, `  名稱：${def.name}`);
      sendSystem(session.sessionId, `  路線：${routeNameChinese(def.route)}`);
      sendSystem(session.sessionId, `  親密度：${char.guardianAffinity ?? 0} / 100`);
      sendSystem(session.sessionId, `  ${def.description}`);
      break;
    }
    default:
      sendSystem(session.sessionId, '守護靈指令：guardian select <ID>/sense/advice/info');
  }
}

function routeNameChinese(route: string): string {
  const map: Record<string, string> = {
    creature: '獵人之眼（生物感知）',
    treasure: '尋寶直覺（寶藏感知）',
    spirit: '靈魂共鳴（靈魂感知）',
  };
  return map[route] ?? route;
}

// ─── 王國系統 ───

function cmdKingdom(session: WsSession, args: string[]): void {
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

function formatKingdomInfo(info: { id: string; name: string; description: string; kingId: string; treasuryGold: number; taxRate: number; motto: string }): string {
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

function cmdAppoint(session: WsSession, args: string[]): void {
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

function cmdDemote(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const targetName = args.join(' ');
  if (!targetName) { sendError(session.sessionId, '用法：demote <玩家名稱>'); return; }
  const target = findCharacterByName(targetName);
  if (!target) { sendError(session.sessionId, `找不到玩家「${targetName}」。`); return; }

  const result = kingdomMgr.removeRank(char.id, target.id);
  sendSystem(session.sessionId, result.message);
}

function cmdKick(session: WsSession, args: string[]): void {
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

function cmdBuild(session: WsSession, args: string[]): void {
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
      const validDirs = ['north', 'south', 'east', 'west', 'up', 'down'];
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

function cmdMob(session: WsSession, args: string[]): void {
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

function cmdNpc(session: WsSession, args: string[]): void {
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

function cmdWar(session: WsSession, args: string[]): void {
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
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'defend': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const wars = warMgr.getActiveWars(member.kingdomId);
      const siegeWar = wars.find(w => w.status === 'siege' && w.defenderId === member.kingdomId);
      if (!siegeWar) { sendError(session.sessionId, '目前沒有需要防守的攻城戰。'); return; }
      const result = warMgr.defendSiege(siegeWar.id as string, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'rally': {
      if (!member) { sendError(session.sessionId, '你不屬於任何王國。'); return; }
      const result = warMgr.rallyTroops(member.kingdomId, char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId, '戰爭指令：war declare/peace/status/siege/defend/rally');
  }
}

function cmdArmy(session: WsSession, args: string[]): void {
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
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'deploy': {
      const roomId = args[1];
      const count = parseInt(args[2] || '0', 10);
      if (!roomId || count <= 0) { sendError(session.sessionId, '用法：army deploy <房間ID> <數量>'); return; }
      const result = warMgr.deploySoldiers(member.kingdomId, roomId, count, char.id);
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

function cmdBounty(session: WsSession, args: string[]): void {
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

function cmdTreasury(session: WsSession, args: string[]): void {
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

function cmdDiplomacy(session: WsSession, args: string[]): void {
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

// ─── 幫助 ───

function cmdHelp(session: WsSession): void {
  sendSystem(session.sessionId, '═══ 指令說明 ═══');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 移動與探索 ──');
  sendSystem(session.sessionId, '  look (l)            查看周圍環境');
  sendSystem(session.sessionId, '  go <方向> (n/s/e/w)  移動');
  sendSystem(session.sessionId, '  map                 顯示地圖');
  sendSystem(session.sessionId, '  rest                原地休息，恢復 HP 與資源');
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
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 守護靈 ──');
  sendSystem(session.sessionId, '  ask                  向守護靈詢問建議');
  sendSystem(session.sessionId, '  guardian sense       主動感知環境');
  sendSystem(session.sessionId, '  guardian advice      請求策略建議');
  sendSystem(session.sessionId, '  guardian select <ID> 選擇守護靈');
  sendSystem(session.sessionId, '  guardian info        查看守護靈狀態');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 王國系統 ──');
  sendSystem(session.sessionId, '  kingdom create <名>  建立王國（需 10000 金幣）');
  sendSystem(session.sessionId, '  kingdom dissolve     解散王國');
  sendSystem(session.sessionId, '  kingdom info [名]    查看王國資訊');
  sendSystem(session.sessionId, '  kingdom members      成員列表');
  sendSystem(session.sessionId, '  kingdom join <名>    加入王國');
  sendSystem(session.sessionId, '  kingdom leave        離開王國');
  sendSystem(session.sessionId, '  kingdom chat <訊息>  王國頻道聊天');
  sendSystem(session.sessionId, '  kingdom map          王國領地地圖');
  sendSystem(session.sessionId, '  kingdom rank         查看排名');
  sendSystem(session.sessionId, '  kingdom list         列出所有王國');
  sendSystem(session.sessionId, '  kingdom motto <文字> 設定王國格言');
  sendSystem(session.sessionId, '  appoint <玩家> <職>  任命官職');
  sendSystem(session.sessionId, '  demote <玩家>        降為國民');
  sendSystem(session.sessionId, '  kick <玩家>          驅逐成員');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 建設系統 ──');
  sendSystem(session.sessionId, '  build room <方向> <名> 建造房間');
  sendSystem(session.sessionId, '  build destroy        拆除當前房間');
  sendSystem(session.sessionId, '  build desc <描述>    設定房間描述');
  sendSystem(session.sessionId, '  build type <類型>    設定房間類型');
  sendSystem(session.sessionId, '  build lock/unlock <方向> 鎖定/解鎖出口');
  sendSystem(session.sessionId, '  mob spawn/remove <ID> 管理怪物生成點');
  sendSystem(session.sessionId, '  npc place/remove/config 管理 NPC');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 軍事系統 ──');
  sendSystem(session.sessionId, '  war declare <王國>   宣戰');
  sendSystem(session.sessionId, '  war peace <王國>     提議和平');
  sendSystem(session.sessionId, '  war status           戰爭狀態');
  sendSystem(session.sessionId, '  war siege <王國>     發動攻城');
  sendSystem(session.sessionId, '  war defend           加入防守');
  sendSystem(session.sessionId, '  war rally            集結號令');
  sendSystem(session.sessionId, '  army recruit/deploy/dismiss/list 軍隊管理');
  sendSystem(session.sessionId, '  bounty set/remove/list 懸賞系統');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 國庫系統 ──');
  sendSystem(session.sessionId, '  treasury balance     查看國庫');
  sendSystem(session.sessionId, '  treasury deposit <額> 存入');
  sendSystem(session.sessionId, '  treasury withdraw <額> 提取');
  sendSystem(session.sessionId, '  treasury log         交易紀錄');
  sendSystem(session.sessionId, '  treasury tax <率>    設定稅率');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '── 外交系統 ──');
  sendSystem(session.sessionId, '  diplomacy ally <王國>   提議結盟');
  sendSystem(session.sessionId, '  diplomacy unally <王國> 解除聯盟');
  sendSystem(session.sessionId, '  diplomacy status     外交狀態');
  sendSystem(session.sessionId, '  diplomacy message <王國> <訊息> 外交訊息');
  sendSystem(session.sessionId, '  diplomacy trade <王國> <條款>   貿易提議');
  sendSystem(session.sessionId, '  diplomacy embargo/lift <王國>   禁運管理');
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
