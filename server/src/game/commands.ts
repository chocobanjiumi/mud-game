// 指令解析器與路由

import type { WsSession } from '../ws/handler.js';
import {
  sendNarrative, sendSystem, sendError, sendToSession,
  getSessionByCharacterId, getAllSessions, broadcast, broadcastToRoom,
} from '../ws/handler.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getInventory, getLearnedSkills,
  addInventoryItem, removeInventoryItem, setEquipped,
  getEquippedItems,
  getUnlockedPortals, isPortalUnlocked, isQuestCompleted,
  isZoneUnlocked, unlockPortal, unlockZone,
  getDiscoveryCount, getDiscoveryTotalCount, hasDiscovery, recordDiscovery,
  getMemberKingdom, getKingdomById, updateKingdom,
} from '../db/queries.js';
import {
  ITEM_DEFS, SKILL_DEFS, CLASS_DEFS,
  calculateMaxHp, calculateMaxMp,
  calculateAtk, calculateMatk, calculateDef, calculateMdef,
  calculateCritRate, calculateDodgeRate, calculateHitRate,
  calculateCritDamage,
  getExpForLevel,
} from '@game/shared';
import type { Character, ClassId, MonsterDef, RoomDef, RoomExit, SkillTag, StatusEffectType, TravelNodeDef, ZoneDef } from '@game/shared';
import {
  world, combat, classChange, partyMgr, tradeMgr,
  dungeonMgr, dungeonMatchMgr, questMgr, classQuestMgr, pvpMgr, leaderboardMgr, guardianMgr,
  kingdomMgr, buildingMgr, warMgr, treasuryMgr, diplomacyMgr, craftingMgr,
  gatheringMgr, auctionMgr, fishingMgr,
  achievementMgr, petMgr, worldEventMgr,
  weatherMgr, mailMgr, friendMgr,
  tutorialMgr, autoBattleMgr,
  classQuest2Mgr, skillTreeMgr, marketMgr, guildMgr, dailyRewardMgr,
  isInCombat, getPlayerCombatId, findCharacterByName,
} from './state.js';
import { ACHIEVEMENT_DEFS } from './achievement.js';
import { PET_DEFS } from './pet.js';
import { WORLD_BOSS_DEFS } from './world-event.js';
import { GUARDIAN_DEFS } from './guardian.js';
import { findNpcByName, getNpcsByRoom } from '../data/npcs.js';
import { getRoom, getRoomsByZone, getZone, ZONES } from '../data/rooms.js';
import { MONSTERS } from '../data/monsters.js';
import { getTravelNodes } from '../data/travel.js';
import { RANK_NAMES } from './kingdom.js';
import { FISH_TABLE } from './fishing.js';
import {
  getBossKillCount,
  getFishCodex,
  getMonsterCodex,
  recordMonsterCodexKill,
} from './collection-log.js';
import {
  equipAppearance,
  getAppearanceCollection,
  unlockAppearance,
} from './appearance.js';
import { BUILDING_TYPE_NAMES, NPC_TYPE_NAMES } from './kingdom-building.js';
import { upgradeItem, getUpgradeInfo } from './upgrade.js';
import { disassembleEquipment, lockItemAffix, reforgeItemQuality, rerollItemAffix } from './item-reforge.js';
import { CRAFTING_CATEGORIES, type CraftingCategory, type CraftingOptions } from './crafting.js';
import { recordGoldProduced, recordGoldSpent } from './economy-stats.js';
import { CorpseManager, LootCalculator, getLootAnnouncementScope } from './loot.js';
const lootCalc = new LootCalculator();
const corpseMgr = new CorpseManager();
import type { LootDistributionMode } from './party.js';
import type { KingdomRank, BuildingType, KingdomNpcType, Direction, EquipSlot, GroundItem } from '@game/shared';

// ─── 地上物品撿取追蹤 ───

/** 記錄已被撿走的地上物品，key = `${roomId}:${itemId}`, value = 重生時間 */
const pickedUpItems = new Map<string, number>();
const GROUND_ITEM_RESPAWN_MS = 10 * 60 * 1000; // 10 分鐘
const travelCooldowns = new Map<string, number>();

/** 取得房間中可撿取的地上物品（排除已被撿走且尚未重生的） */
function getAvailableGroundItems(roomId: string): GroundItem[] {
  const room = getRoom(roomId);
  if (!room?.groundItems) return [];

  const now = Date.now();
  return room.groundItems.filter(gi => {
    const key = `${roomId}:${gi.itemId}`;
    const respawnAt = pickedUpItems.get(key);
    if (respawnAt && now < respawnAt) return false;
    if (respawnAt && now >= respawnAt) pickedUpItems.delete(key);
    return true;
  });
}

/** 標記地上物品已被撿走 */
function markGroundItemPicked(roomId: string, itemId: string): void {
  const key = `${roomId}:${itemId}`;
  pickedUpItems.set(key, Date.now() + GROUND_ITEM_RESPAWN_MS);
}

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
    '?': 'help',
    lb: 'leaderboard',
    cq: 'classquest',
    cq2: 'classquest2',
    st: 'skilltree',
  };

  if (aliasMap[cmd]) {
    const expanded = aliasMap[cmd];
    const rest = argStr ? ` ${argStr}` : '';
    return handleCommand(session, `${expanded}${rest}`);
  }

  // 數字輸入 → 對話選項回覆
  const numChoice = parseInt(cmd, 10);
  if (!isNaN(numChoice) && args.length === 0) {
    const active = activeDialogues.get(session.sessionId);
    if (active) {
      const char = getChar(session);
      if (char) {
        const npc = getNpcsByRoom(char.roomId).find(n => n.id === active.npcId);
        if (npc) {
          const currentNode = npc.dialogue.find(d => d.id === active.nodeId);
          if (currentNode?.options && numChoice >= 1 && numChoice <= currentNode.options.length) {
            const chosen = currentNode.options[numChoice - 1];
            showDialogueNode(session, npc, chosen.nextId);
            questMgr.updateProgress(char.id, 'talk', npc.id);
            return;
          }
        }
      }
    }
  }

  switch (cmd) {
    case 'look': cmdLook(session, argStr); break;
    case 'search': cmdSearch(session, argStr); break;
    case 'inspect': cmdInspect(session, argStr); break;
    case 'open': cmdOpen(session, argStr); break;
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
    case 'take': case 'pick': case 'pickup': case 'get': cmdTake(session, argStr); break;
    case 'loot': cmdLoot(session, argStr); break;
    case 'drop': cmdDrop(session, argStr); break;
    case 'say': cmdSay(session, argStr); break;
    case 'talk': cmdTalk(session, argStr); break;
    case 'shop': cmdShop(session, argStr); break;
    case 'buy': cmdBuy(session, argStr); break;
    case 'allocate': case 'alloc': cmdAllocate(session, args); break;
    case 'map': cmdMap(session); break;
    case 'rest': cmdRest(session); break;
    case 'activate': cmdActivate(session, args); break;
    case 'portals': cmdPortals(session); break;
    case 'travel': cmdTravel(session, argStr); break;
    case 'recall': cmdRecall(session); break;
    // 新系統指令
    case 'party': cmdParty(session, args); break;
    case 'trade': cmdTrade(session, args); break;
    case 'quest': cmdQuest(session, args); break;
    case 'duel': cmdDuel(session, args); break;
    case 'arena': cmdArena(session, args); break;
    case 'dungeon': cmdDungeon(session, args); break;
    case 'leaderboard': case 'rank': cmdLeaderboard(session, args); break;
    case 'classchange': case 'job': cmdClassChange(session, argStr); break;
    case 'classquest': case 'cq': cmdClassQuest(session, args); break;
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
    // 強化系統
    case 'upgrade': case 'enhance': cmdUpgrade(session, argStr); break;
    case 'reroll': cmdReroll(session, args); break;
    case 'lock': cmdLock(session, args); break;
    case 'reforge': cmdReforge(session, args); break;
    case 'disassemble': cmdDisassemble(session, args); break;
    // 製作系統
    case 'craft': cmdCraft(session, args); break;
    case 'gather': cmdGather(session, args); break;
    // 拍賣系統
    case 'auction': case 'ah': cmdAuction(session, args); break;
    // 釣魚系統
    case 'fish': cmdFish(session, args); break;
    // 成就/稱號系統
    case 'achievement': case 'ach': cmdAchievement(session, args); break;
    case 'title': cmdTitle(session); break;
    case 'codex': cmdCodex(session, args); break;
    case 'appearance': case 'cosmetic': cmdAppearance(session, args); break;
    // 寵物系統
    case 'pet': cmdPet(session, args); break;
    case 'tame': cmdTame(session); break;
    // 世界事件系統
    case 'event': cmdEvent(session, args); break;
    // 天氣系統
    case 'weather': cmdWeather(session); break;
    // 郵件系統
    case 'mail': cmdMail(session, args); break;
    // 表情系統
    case 'emote': cmdEmote(session, argStr); break;
    // 好友系統
    case 'friend': case 'friends': cmdFriend(session, args); break;
    // 教學系統
    case 'tutorial': cmdTutorial(session, args); break;
    // 自動戰鬥系統
    case 'auto': cmdAuto(session, args); break;
    // 二轉任務系統
    case 'classquest2': case 'cq2': cmdClassQuest2(session, args); break;
    // 技能樹系統
    case 'skilltree': case 'st': cmdSkillTree(session, args); break;
    // 交易所系統
    case 'market': cmdMarket(session, args); break;
    // 公會系統
    case 'guild': case 'g': cmdGuild(session, args); break;
    // 每日簽到
    case 'signin': case 'checkin': cmdSignin(session); break;
    case 'help': cmdHelp(session, argStr); break;
    default:
      sendError(session.sessionId, `未知指令：${cmd}。輸入 help 查看可用指令。`);
  }
}

// ─── 基本指令 ───

function cmdLook(session: WsSession, target?: string): void {
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
    // 找怪物（支援中文名和英文 alias）
    const monsters = world.getAliveMonsters(char.roomId);
    const monster = monsters.find(m => m.def.name.includes(target) || (m.def.alias && m.def.alias.toLowerCase().includes(target.toLowerCase())));
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
    alias: m.def.alias,
    level: m.def.level,
    hp: m.hp,
    maxHp: m.maxHp,
  }));
  const zone = getZone(roomInfo.room.zone);
  const roomCorpses = corpseMgr.getCorpses(char.roomId).map(corpse => ({
    id: corpse.id,
    monsterName: corpse.monsterName,
    empty: corpse.gold <= 0 && corpse.items.length === 0,
    protected: Date.now() < corpse.protectedUntil,
  }));
  const gatheringNodes = gatheringMgr.getAvailableNodes(roomInfo.room, zone, char.level).map(node => ({
    id: node.id,
    name: node.name,
    skill: node.skill,
    levelMin: node.levelMin,
  }));
  const roomTravelNodes = getTravelNodes()
    .filter(node => node.roomId === char.roomId || node.activateRoomId === char.roomId)
    .map(node => ({
      id: node.id,
      name: node.name,
      kind: node.kind,
      unlocked: node.unlockByDefault || isPortalUnlocked(char.id, node.id),
    }));
  const inspectHints = buildRoomInspectHints(roomInfo.room, roomCorpses.length > 0, gatheringNodes.length > 0, roomTravelNodes.length > 0);

  sendToSession(session.sessionId, 'room', {
    id: char.roomId,
    zone: roomInfo.room.zone,
    name: roomInfo.room.name,
    description: roomInfo.room.description,
    image: roomInfo.room.image,
    exits: roomInfo.room.exits,
    players: playersInRoom,
    npcs: roomInfo.npcs || [],
    items: [],
    monsters,
    corpses: roomCorpses,
    gatheringNodes,
    travelNodes: roomTravelNodes,
    inspectHints,
  });

  // 顯示地上物品
  const groundItems = getAvailableGroundItems(char.roomId);
  for (const gi of groundItems) {
    const def = ITEM_DEFS[gi.itemId];
    if (def) {
      sendNarrative(session.sessionId, `${gi.description}（${def.name}）`, 'item');
    }
  }

  const corpses = corpseMgr.getCorpses(char.roomId);
  for (const corpse of corpses) {
    const empty = corpse.gold <= 0 && corpse.items.length === 0;
    sendNarrative(
      session.sessionId,
      `${corpse.monsterName}的屍體倒在這裡${empty ? '，已被搜刮一空' : '。可用 loot corpse 搜刮' }。`,
      'item',
    );
  }

  // 觸發任務進度（拜訪地點）
  questMgr.updateProgress(char.id, 'visit', char.roomId);
}

function cmdSearch(session: WsSession, target?: string): void {
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

function buildRoomInspectHints(
  room: RoomDef,
  hasCorpses: boolean,
  hasGatheringNodes: boolean,
  hasTravelNodes: boolean,
): { label: string; command: string }[] {
  const hints: { label: string; command: string }[] = [
    { label: '搜尋房間', command: 'search room' },
    { label: '檢查地點', command: `inspect ${room.name}` },
  ];
  if (room.exits.length > 0) {
    hints.push({ label: '檢查出口', command: `inspect ${room.exits[0].direction}` });
  }
  if (hasCorpses) hints.push({ label: '搜尋屍體', command: 'search corpse' });
  if (hasGatheringNodes) hints.push({ label: '採集資源', command: 'gather' });
  if (hasTravelNodes) hints.push({ label: '啟用交通點', command: 'activate portal' });
  return hints;
}

function updateExplorationAchievements(characterId: string, zoneId: string, roomId: string): void {
  try {
    const totalVisited = getDiscoveryTotalCount(characterId, 'visit_room');
    achievementMgr.onRoomVisit(characterId, roomId, totalVisited);

    const zoneVisited = getDiscoveryCount(characterId, zoneId, 'visit_room');
    const zoneRoomCount = getRoomsByZone(zoneId).length;
    if (zoneRoomCount > 0 && zoneVisited >= zoneRoomCount) {
      achievementMgr.onZoneFullyExplored(characterId);
      unlockAppearance(characterId, 'title_frame_cartographer');
    }
  } catch {
    // 探索成就失敗不影響房間顯示
  }
}

function cmdInspect(session: WsSession, target: string): void {
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

  cmdLook(session, target);
}

function cmdOpen(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!target) {
    sendError(session.sessionId, '用法：open <目標>');
    return;
  }

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '你身處未知地點，無法開啟目標。');
    return;
  }

  recordDiscovery(char.id, room.zone, room.id, 'open', `${room.id}:${normalizeCommandTarget(target)}`);

  const exit = findExit(room, target);
  if (exit) {
    if (exit.locked) {
      sendError(session.sessionId, exit.keyItemId ? `這個出口上鎖，需要特定鑰匙才能開啟。` : '這個出口上鎖，暫時無法開啟。');
      return;
    }
    sendSystem(session.sessionId, `${directionChinese(exit.direction)}側出口已經打開。可用 go ${exit.direction} 通過。`);
    return;
  }

  const inventoryItem = getInventory(char.id).find(item => {
    const def = ITEM_DEFS[item.itemId];
    return item.itemId === normalizeCommandTarget(target) || def?.name === target || !!def?.name.toLowerCase().includes(normalizeCommandTarget(target));
  });
  if (inventoryItem) {
    const def = ITEM_DEFS[inventoryItem.itemId];
    if (def?.useEffect?.type.startsWith('open_chest_')) {
      cmdUse(session, def.name);
      return;
    }
    sendError(session.sessionId, `「${def?.name ?? target}」不是可開啟的物品。`);
    return;
  }

  const ground = findGroundItem(room.id, target);
  if (ground) {
    const def = ITEM_DEFS[ground.itemId];
    if (def?.useEffect?.type.startsWith('open_chest_')) {
      sendSystem(session.sessionId, `你需要先 take ${def.name}，再 open ${def.name}。`);
      return;
    }
    sendError(session.sessionId, `「${def?.name ?? target}」無法直接開啟。`);
    return;
  }

  sendError(session.sessionId, `找不到可開啟的「${target}」。`);
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

  // 檢查鎖門
  const currentRoom = getRoom(char.roomId);
  if (currentRoom) {
    const exit = currentRoom.exits.find(e => e.direction === direction);
    if (exit && exit.locked && exit.keyItemId) {
      const inv = getInventory(char.id);
      const hasKey = inv.some(item => item.itemId === exit.keyItemId);
      if (!hasKey) {
        const keyDef = ITEM_DEFS[exit.keyItemId];
        const keyName = keyDef?.name ?? exit.keyItemId;
        sendError(session.sessionId, `這扇門被鎖住了。你需要${keyName}才能通過。`);
        return;
      }
      // 消耗鑰匙並解鎖
      removeInventoryItem(char.id, exit.keyItemId, 1);
      exit.locked = false;
      const keyDef = ITEM_DEFS[exit.keyItemId];
      const keyName = keyDef?.name ?? exit.keyItemId;
      sendNarrative(session.sessionId, `你使用了${keyName}打開了門鎖。`);
    }

    if (exit) {
      const targetRoom = getRoom(exit.targetRoomId);
      if (targetRoom && targetRoom.zone !== currentRoom.zone) {
        const access = canAccessZone(char, targetRoom.zone);
        if (!access.ok) {
          sendError(session.sessionId, access.message);
          return;
        }
      }
    }
  }

  const result = world.handleMove(char.id, direction as any);
  if (!result) {
    sendError(session.sessionId, `無法往 ${directionChinese(direction)} 移動。`);
    return;
  }

  char.roomId = result.room.id;
  unlockZone(char.id, result.room.zone, 'enter');
  saveCharacter(char);
  sendNarrative(session.sessionId, `你往 ${directionChinese(direction)} 移動了。`);
  cmdLook(session);

  // 守護靈感知：進入新房間時自動觸發
  guardianMgr.processGuardianSense(session.sessionId, char);

  // 轉職任務：房間進入鉤子
  classQuestMgr.onRoomEnter(char.id, char.roomId);

  // 二轉任務：房間進入鉤子（造訪所有區域/森林）
  classQuest2Mgr.onRoomEnter(char.id, char.roomId, false, false);

  // 教學系統：移動鉤子
  tutorialMgr.advanceStep(char.id, 'move');
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
    skills: getLearnedSkills(char.id),
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

function getActiveQuestDropIds(characterId: string, monster: MonsterDef): Set<string> {
  const monsterQuestDrops = new Set(
    monster.drops
      .filter(drop => ITEM_DEFS[drop.itemId]?.type === 'quest')
      .map(drop => drop.itemId),
  );
  if (monsterQuestDrops.size === 0) return new Set();

  const activeDropIds = new Set<string>();
  for (const { def, progress } of questMgr.getActiveQuests(characterId)) {
    const questTargetsThisMonster = def.objectives.some(obj =>
      (obj.type === 'kill' || obj.type === 'kill_monster' || obj.type === 'loot_corpse' || obj.type === 'defeat_boss')
      && (obj.targetId === monster.id || obj.targetId === '*'),
    );

    for (const obj of def.objectives) {
      if (obj.type !== 'collect' && obj.type !== 'collect_item') continue;
      if (!monsterQuestDrops.has(obj.targetId)) continue;

      const progressKey = `collect_${obj.targetId}`;
      if ((progress[progressKey] ?? 0) >= obj.required) continue;
      if (questTargetsThisMonster || monster.drops.some(drop => drop.itemId === obj.targetId)) {
        activeDropIds.add(obj.targetId);
      }
    }
  }

  return activeDropIds;
}

function cmdAttack(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;

  // 如果已在戰鬥中，提交普攻行動
  const existingCombatId = getPlayerCombatId(char.id);
  if (existingCombatId) {
    combat.submitAction(existingCombatId, {
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
  const combatId = combat.startCombat(players, [monster], (result) => {
    // 戰鬥結束後的處理
    if (result === 'victory') {
      // 觸發任務進度
      questMgr.updateProgress(char.id, 'kill', monster.monsterId);
      recordMonsterCodexKill(char.id, monster.monsterId, Boolean(monster.def.isBoss || monster.def.aiType === 'boss'));
      achievementMgr.onMonsterKill(
        char.id,
        monster.monsterId,
        Boolean(monster.def.isBoss || monster.def.aiType === 'boss'),
        Boolean(monster.def.isElite),
        monster.def.element,
      );

      // BOSS 擊殺額外觸發（用於每日/每週 BOSS 任務）
      if (monster.def.isBoss) {
        questMgr.updateProgress(char.id, 'kill', 'boss');
        questMgr.updateProgress(char.id, 'defeat_boss', monster.monsterId);
        unlockAppearance(char.id, 'aura_boss_slayer');
      }

      // 菁英怪擊殺：公會經驗 +30
      if (monster.def.isElite || monster.def.isBoss) {
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

      classQuestMgr.onMonsterKill(char.id, monster.monsterId, {
        usedSkillType,
        round: lastRound,
      });

      // 二轉任務：怪物擊殺鉤子
      classQuest2Mgr.onMonsterKill(char.id, monster.monsterId, {
        isCrit: false,
        isFirstRound: lastRound <= 1,
        isElite: !!monster.def.isElite,
        isBoss: !!monster.def.isBoss,
        isSolo: players.length === 1,
        usedMagicOnly: usedSkillType === 'magical',
        isDark: monster.def.element === 'dark',
        isUndead: monster.def.element === 'dark',
      });

      world.killMonster(char.roomId, monster.instanceId);

      // 經驗立即結算；金幣與物品留在屍體中等待搜刮。
      const drops = lootCalc.calculateDrops(monster.def, char.stats.luk, {
        activeQuestItemIds: [],
        partySize: players.length,
      });
      const personalItems: Record<string, { itemId: string; quantity: number }[]> = {};
      for (const p of players) {
        const freshChar = getCharacterById(p.id);
        if (!freshChar) continue;

        const activeQuestItemIds = getActiveQuestDropIds(freshChar.id, monster.def);
        personalItems[freshChar.id] = lootCalc.calculatePersonalQuestDrops(
          monster.def,
          freshChar.stats.luk,
          activeQuestItemIds,
        );

        // 經驗值（隊伍分配）
        if (drops.exp > 0) {
          const expShare = Math.max(1, Math.floor(drops.exp / players.length));
          freshChar.exp += expShare;
          sendSystem(getSessionByCharacterId(freshChar.id)?.sessionId ?? '', `獲得經驗值 +${expShare}`);

          // 升級檢查
          let leveled = false;
          while (freshChar.exp >= getExpForLevel(freshChar.level + 1)) {
            freshChar.level++;
            freshChar.freePoints += 5;
            freshChar.maxHp += 10 + freshChar.stats.vit * 2;
            freshChar.hp = freshChar.maxHp;
            freshChar.maxMp += 5 + freshChar.stats.int;
            freshChar.mp = freshChar.maxMp;
            leveled = true;
          }
          if (leveled) {
            skillTreeMgr.grantPoint(freshChar.id, freshChar);
            sendSystem(getSessionByCharacterId(freshChar.id)?.sessionId ?? '', `升級了！目前等級 Lv.${freshChar.level}`);
          }
        }

        saveCharacter(freshChar);
      }

      const corpse = corpseMgr.createCorpse({
        roomId: char.roomId,
        monster,
        killerId: char.id,
        participantIds: players.map(player => player.id),
        loot: drops,
        personalItems,
      });
      for (const p of players) {
        sendSystem(
          getSessionByCharacterId(p.id)?.sessionId ?? '',
          `${monster.def.name}留下了屍體（${corpse.gold} 金幣、${corpse.items.length} 種物品）。輸入 loot corpse 搜刮。`,
        );
      }

      // 教學系統：擊殺鉤子
      tutorialMgr.advanceStep(char.id, 'kill');

      // 自動戰鬥：戰鬥結束後排程下一次攻擊
      autoBattleMgr.processAutoAction(char.id);
    }

    // PvE 死亡懲罰
    if (result === 'defeat') {
      const expLost = Math.floor(char.exp * 0.05);
      const minExpForLevel = getExpForLevel(char.level);
      char.exp = Math.max(minExpForLevel, char.exp - expLost);

      const goldLost = Math.floor(char.gold * 0.1);
      char.gold = Math.max(0, char.gold - goldLost);

      char.hp = Math.floor(char.maxHp * 0.5);
      char.mp = Math.floor(char.maxMp * 0.5);
      char.roomId = 'village_square';
      world.placePlayer(char.id, 'village_square');
      saveCharacter(char);

      const playerSession = getSessionByCharacterId(char.id);
      if (playerSession) {
        sendNarrative(playerSession.sessionId, `你被擊敗了！失去了 ${expLost} 經驗值和 ${goldLost} 金幣。`, 'error');
      }
    }

    // 轉職任務：戰鬥結束鉤子
    if (result === 'victory' || result === 'defeat' || result === 'fled') {
      const hpPercent = char.maxHp > 0 ? Math.floor((char.hp / char.maxHp) * 100) : 0;
      classQuestMgr.onCombatEnd(char.id, char.roomId, result, hpPercent);
    }
  });

  // 追蹤玩家行動（用於轉職任務鉤子）
  let lastRound = 1;
  const lastPlayerActions = new Map<string, { type: string; skillId?: string }>();

  combat.setRoundEndCallback(combatId, (roundInfo) => {
    lastRound = roundInfo.round;

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
    // 教學系統：技能使用鉤子
    tutorialMgr.advanceStep(char.id, 'skill');
    return;
  }

  const skillDef = SKILL_DEFS[matchedSkill.skillId];
  if (skillDef && skillDef.resourceCost > char.resource) {
    sendError(session.sessionId, `資源不足！${skillDef.name}需要 ${skillDef.resourceCost} 點。`);
    return;
  }

  sendSystem(session.sessionId, `你使用了「${skillDef?.name ?? skillName}」！${target ? `目標：${target}` : ''}`);

  // 轉職任務：技能使用鉤子（非戰鬥中使用技能）
  classQuestMgr.onSkillUse(char.id, matchedSkill.skillId, char.roomId, false);
  if (skillDef && isQuestSupportSkill(skillDef)) {
    questMgr.updateProgress(char.id, 'use_support_skill', matchedSkill.skillId);
  }

  // 教學系統：技能使用鉤子
  tutorialMgr.advanceStep(char.id, 'skill');

  // 轉職任務：治療鉤子（非戰鬥中治療其他玩家）
  if (skillDef && (skillDef.id === 'heal' || skillDef.id === 'mass_heal' || skillDef.special?.isHeal)) {
    if (target) {
      const targetChar = findCharacterByName(target);
      if (targetChar) {
        classQuestMgr.onHealPerformed(char.id, targetChar.id);
      }
    }
  }
}

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
  if (def.levelReq > char.level) { sendError(session.sessionId, `等級不足，需要 Lv${def.levelReq}`); return; }
  // 職業限制檢查
  if (def.classReq && def.classReq.length > 0 && !def.classReq.includes(char.classId)) {
    sendError(session.sessionId, '你的職業無法裝備此物品');
    return;
  }

  // Unequip existing item in the same slot before equipping the new one
  const targetSlot: EquipSlot = def.equipSlot;
  const equipped = getEquippedItems(char.id);
  for (const eq of equipped) {
    const eqDef = ITEM_DEFS[eq.itemId];
    if (eqDef?.equipSlot === targetSlot && eq.itemId !== match.itemId) {
      setEquipped(char.id, eq.itemId, false);
      sendSystem(session.sessionId, `你卸下了「${eqDef.name}」。`);
    }
  }

  setEquipped(char.id, match.itemId, true);
  sendSystem(session.sessionId, `你裝備了「${def.name}」。`);

  // 教學系統：裝備鉤子
  tutorialMgr.advanceStep(char.id, 'equip');
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

  const effect = def.useEffect;
  const inCombat = isInCombat(char.id);
  const combatId = getPlayerCombatId(char.id);

  // ─── 基礎回復藥水（保留原有邏輯） ───
  if (effect.type === 'heal_hp') {
    removeInventoryItem(char.id, match.itemId, 1);
    const healed = Math.min(effect.value, char.maxHp - char.hp);
    char.hp = Math.min(char.maxHp, char.hp + effect.value);
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} HP。`);
    return;
  }

  if (effect.type === 'heal_mp') {
    removeInventoryItem(char.id, match.itemId, 1);
    if (char.resourceType === 'rage') {
      sendSystem(session.sessionId, `你使用了「${def.name}」，但怒氣無法透過藥水恢復。`);
    } else {
      const healed = Math.min(effect.value, char.maxResource - char.resource);
      char.resource = Math.min(char.maxResource, char.resource + effect.value);
      const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'energy' ? '體力' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
      saveCharacter(char);
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} ${resourceLabel}。`);
    }
    return;
  }

  if (effect.type === 'heal_both') {
    removeInventoryItem(char.id, match.itemId, 1);
    char.hp = Math.min(char.maxHp, char.hp + effect.value);
    if (char.resourceType !== 'rage') {
      char.resource = Math.min(char.maxResource, char.resource + (effect.value2 ?? 0));
    }
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 HP 和資源。`);
    return;
  }

  // ─── 增益藥水 ───
  if (effect.type === 'buff_atk' || effect.type === 'buff_matk' || effect.type === 'buff_dodge'
    || effect.type === 'buff_def' || effect.type === 'buff_crit' || effect.type === 'buff_all') {
    if (!inCombat || !combatId) {
      sendError(session.sessionId, '增益藥水只能在戰鬥中使用！');
      return;
    }
    const combatState = combat.getCombatState(combatId);
    if (!combatState) { sendError(session.sessionId, '戰鬥狀態異常。'); return; }
    const playerCombatant = combatState.playerTeam.find(p => p.id === char.id);
    if (!playerCombatant) { sendError(session.sessionId, '找不到你的戰鬥資料。'); return; }

    removeInventoryItem(char.id, match.itemId, 1);
    const duration = effect.duration ?? 5;
    const value = effect.value;

    const buffMapping: Record<string, { effectType: StatusEffectType; desc: string }> = {
      buff_atk:   { effectType: 'atk_up',   desc: `攻擊力提升${value}%` },
      buff_matk:  { effectType: 'matk_up',   desc: `魔法攻擊力提升${value}%` },
      buff_dodge: { effectType: 'dodge_up',  desc: `閃避率提升${value}%` },
      buff_def:   { effectType: 'def_up',    desc: `防禦力提升${value}%` },
      buff_crit:  { effectType: 'crit_up',   desc: `暴擊率提升${value}%` },
      buff_all:   { effectType: 'atk_up',    desc: `全能力提升${value}%` },
    };

    const info = buffMapping[effect.type];

    // Determine which buff effect types will be applied
    const buffTypesToApply: StatusEffectType[] = effect.type === 'buff_all'
      ? ['atk_up', 'matk_up', 'def_up', 'mdef_up', 'dodge_up', 'crit_up']
      : [info.effectType];

    // Check for existing buffs of the same type and remove them (no stacking)
    let replaced = false;
    for (const bt of buffTypesToApply) {
      const existingIdx = playerCombatant.activeEffects.findIndex(e => e.type === bt && e.source === 'potion');
      if (existingIdx !== -1) {
        playerCombatant.activeEffects.splice(existingIdx, 1);
        replaced = true;
      }
    }

    // Apply new buffs
    for (const bt of buffTypesToApply) {
      playerCombatant.activeEffects.push({
        type: bt, value, duration, source: 'potion',
        remainingDuration: duration,
      });
    }

    if (replaced) {
      sendSystem(session.sessionId, `你使用了「${def.name}」，新的${info.desc}效果覆蓋了舊的效果，持續${duration}回合！`);
    } else {
      sendSystem(session.sessionId, `你使用了「${def.name}」，${info.desc}，持續${duration}回合！`);
    }
    return;
  }

  // ─── 傳送道具 ───
  if (effect.type === 'teleport_home') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    removeInventoryItem(char.id, match.itemId, 1);
    const prevRoom = char.roomId;
    char.roomId = 'village_square';
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，一陣光芒閃過，你被傳送回了村莊廣場！`);
    return;
  }

  if (effect.type === 'teleport_mark') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    if (!char.markedLocation) {
      sendError(session.sessionId, '你還沒有標記任何位置！請先使用記憶水晶標記一個位置。');
      return;
    }
    removeInventoryItem(char.id, match.itemId, 1);
    const targetRoom = world.getRoomInfo(char.markedLocation);
    const roomName = targetRoom?.room.name ?? char.markedLocation;
    char.roomId = char.markedLocation;
    saveCharacter(char);
    sendSystem(session.sessionId, `你使用了「${def.name}」，一陣光芒閃過，你被傳送到了「${roomName}」！`);
    return;
  }

  if (effect.type === 'mark_location') {
    if (inCombat) { sendError(session.sessionId, '戰鬥中無法使用傳送道具！'); return; }
    removeInventoryItem(char.id, match.itemId, 1);
    char.markedLocation = char.roomId;
    saveCharacter(char);
    const currentRoom = world.getRoomInfo(char.roomId);
    const roomName = currentRoom?.room.name ?? char.roomId;
    sendSystem(session.sessionId, `你使用了「${def.name}」，將當前位置「${roomName}」記錄了下來。可以使用傳送石傳送至此。`);
    return;
  }

  // ─── 食物/料理 ───
  if (effect.type === 'food_hp' || effect.type === 'food_hp_resource' || effect.type === 'food_atk'
    || effect.type === 'food_matk' || effect.type === 'food_restore' || effect.type === 'food_feast') {

    // 食物buff需要戰鬥中使用（除了 food_restore 立即回復可在非戰鬥使用）
    if (effect.type === 'food_restore') {
      removeInventoryItem(char.id, match.itemId, 1);
      const hpRestore = Math.floor(char.maxHp * 0.3);
      const resRestore = Math.floor(char.maxResource * 0.3);
      char.hp = Math.min(char.maxHp, char.hp + hpRestore);
      if (char.resourceType !== 'rage') {
        char.resource = Math.min(char.maxResource, char.resource + resRestore);
      }
      saveCharacter(char);
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpRestore} HP 和 ${resRestore} 資源！`);
      return;
    }

    // 其他食物buff需要戰鬥中使用
    if (!inCombat || !combatId) {
      // 非戰鬥中也允許使用食物，但效果存到角色狀態（下次戰鬥時生效）
      // 簡化處理：非戰鬥中直接給予即時效果
      if (effect.type === 'food_hp') {
        removeInventoryItem(char.id, match.itemId, 1);
        const totalHeal = Math.floor(char.maxHp * (effect.value / 100) * (effect.duration ?? 3));
        char.hp = Math.min(char.maxHp, char.hp + totalHeal);
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${totalHeal} HP！`);
        return;
      }
      if (effect.type === 'food_hp_resource') {
        removeInventoryItem(char.id, match.itemId, 1);
        const totalHpHeal = Math.floor(char.maxHp * (effect.value / 100) * (effect.duration ?? 3));
        const totalResHeal = Math.floor(char.maxResource * (effect.value / 100) * (effect.duration ?? 3));
        char.hp = Math.min(char.maxHp, char.hp + totalHpHeal);
        if (char.resourceType !== 'rage') {
          char.resource = Math.min(char.maxResource, char.resource + totalResHeal);
        }
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${totalHpHeal} HP 和 ${totalResHeal} 資源！`);
        return;
      }
      // food_atk, food_matk, food_feast 非戰鬥中只給回復效果
      removeInventoryItem(char.id, match.itemId, 1);
      if (effect.type === 'food_atk') {
        const hpHeal = Math.floor(char.maxHp * 0.2);
        char.hp = Math.min(char.maxHp, char.hp + hpHeal);
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpHeal} HP！（攻擊力提升效果需在戰鬥中生效）`);
      } else if (effect.type === 'food_matk') {
        const resHeal = Math.floor(char.maxResource * 0.2);
        if (char.resourceType !== 'rage') {
          char.resource = Math.min(char.maxResource, char.resource + resHeal);
        }
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${resHeal} 資源！（魔攻提升效果需在戰鬥中生效）`);
      } else {
        saveCharacter(char);
        sendSystem(session.sessionId, `你使用了「${def.name}」，感覺精神奕奕！（全能力提升效果需在戰鬥中生效）`);
      }
      return;
    }

    // 戰鬥中使用食物
    const combatState = combat.getCombatState(combatId);
    if (!combatState) { sendError(session.sessionId, '戰鬥狀態異常。'); return; }
    const playerCombatant = combatState.playerTeam.find(p => p.id === char.id);
    if (!playerCombatant) { sendError(session.sessionId, '找不到你的戰鬥資料。'); return; }

    // 檢查食物buff疊加：同一時間只能有一個食物效果
    const foodSource = 'food';
    const hasFoodBuff = playerCombatant.activeEffects.some(e => e.source === foodSource);
    if (hasFoodBuff) {
      sendError(session.sessionId, '你已經有食物效果了，同一時間只能使用一種食物！');
      return;
    }

    removeInventoryItem(char.id, match.itemId, 1);
    const duration = effect.duration ?? 3;

    if (effect.type === 'food_hp') {
      // HoT: 每回合回復 15% HP
      const tickHeal = Math.floor(char.maxHp * (effect.value / 100));
      playerCombatant.activeEffects.push({
        type: 'regen', value: tickHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickHeal,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，每回合回復 ${tickHeal} HP，持續${duration}回合！`);
    } else if (effect.type === 'food_hp_resource') {
      const tickHpHeal = Math.floor(char.maxHp * (effect.value / 100));
      const tickResHeal = Math.floor(char.maxResource * (effect.value / 100));
      playerCombatant.activeEffects.push({
        type: 'regen', value: tickHpHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickHpHeal,
      });
      playerCombatant.activeEffects.push({
        type: 'mana_regen', value: tickResHeal, duration, source: foodSource,
        remainingDuration: duration, tickHealing: tickResHeal,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，每回合回復 ${tickHpHeal} HP 和 ${tickResHeal} 資源，持續${duration}回合！`);
    } else if (effect.type === 'food_atk') {
      // 回復 20% HP + ATK +3%
      const hpHeal = Math.floor(char.maxHp * 0.2);
      playerCombatant.hp = Math.min(playerCombatant.maxHp, playerCombatant.hp + hpHeal);
      playerCombatant.activeEffects.push({
        type: 'atk_up', value: effect.value, duration, source: foodSource,
        remainingDuration: duration,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${hpHeal} HP，攻擊力提升${effect.value}%，持續${duration}回合！`);
    } else if (effect.type === 'food_matk') {
      // 回復 20% resource + MATK +3%
      const resHeal = Math.floor(char.maxResource * 0.2);
      if (playerCombatant.resourceType !== 'rage') {
        playerCombatant.resource = Math.min(playerCombatant.maxResource, playerCombatant.resource + resHeal);
      }
      playerCombatant.activeEffects.push({
        type: 'matk_up', value: effect.value, duration, source: foodSource,
        remainingDuration: duration,
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${resHeal} 資源，魔攻提升${effect.value}%，持續${duration}回合！`);
    } else if (effect.type === 'food_feast') {
      // 全屬性 +3%
      const allBuffTypes: StatusEffectType[] = ['atk_up', 'matk_up', 'def_up', 'mdef_up', 'dodge_up', 'crit_up'];
      for (const bt of allBuffTypes) {
        playerCombatant.activeEffects.push({
          type: bt, value: effect.value, duration, source: foodSource,
          remainingDuration: duration,
        });
      }
      sendSystem(session.sessionId, `你使用了「${def.name}」，全能力提升${effect.value}%，持續${duration}回合！`);
    }
    return;
  }

  // ─── 戰鬥道具 ───
  if (effect.type === 'combat_escape' || effect.type === 'combat_blind'
    || effect.type === 'combat_stun' || effect.type === 'combat_damage') {
    if (!inCombat || !combatId) {
      sendError(session.sessionId, '戰鬥道具只能在戰鬥中使用！');
      return;
    }

    if (effect.type === 'combat_escape') {
      removeInventoryItem(char.id, match.itemId, 1);
      combat.setGuaranteedFlee(combatId);
      sendSystem(session.sessionId, `你使用了「${def.name}」，煙霧瀰漫中成功逃離了戰鬥！`);
      return;
    }

    const enemy = combat.getFirstAliveEnemy(combatId);
    if (!enemy) { sendError(session.sessionId, '沒有可攻擊的敵人。'); return; }

    removeInventoryItem(char.id, match.itemId, 1);

    if (effect.type === 'combat_blind') {
      combat.applyEffectToEnemy(combatId, enemy.id, {
        type: 'slow', // slow reduces accuracy conceptually
        value: effect.value,
        duration: effect.duration ?? 1,
        source: 'item_blind',
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，${enemy.name}被閃光致盲，命中率降低${effect.value}%！`);
    } else if (effect.type === 'combat_stun') {
      combat.applyEffectToEnemy(combatId, enemy.id, {
        type: 'stun',
        value: 1,
        duration: effect.duration ?? 1,
        source: 'item_stun',
      });
      sendSystem(session.sessionId, `你使用了「${def.name}」，${enemy.name}被困住了，下回合無法行動！`);
    } else if (effect.type === 'combat_damage') {
      const result = combat.dealDamageToEnemy(combatId, enemy.id, effect.value);
      if (result) {
        let msg = `你使用了「${def.name}」，對${enemy.name}造成了 ${result.dealt} 點傷害！`;
        if (result.killed) msg += ` ${enemy.name}被擊敗了！`;
        sendSystem(session.sessionId, msg);
      }
    }
    return;
  }

  // ─── 寶箱開啟 ───
  if (effect.type === 'open_chest_bronze' || effect.type === 'open_chest_silver' || effect.type === 'open_chest_gold') {
    const chestTier = effect.type === 'open_chest_bronze' ? 'bronze'
      : effect.type === 'open_chest_silver' ? 'silver' : 'gold';
    const keyId = `${chestTier}_key`;
    const keyDef = ITEM_DEFS[keyId];
    const keyName = keyDef?.name ?? `${chestTier}鑰匙`;

    // 檢查是否有對應鑰匙
    const hasKey = inv.some(i => i.itemId === keyId && i.quantity >= 1);
    if (!hasKey) {
      sendError(session.sessionId, `你需要「${keyName}」才能打開這個寶箱！`);
      return;
    }

    // 消耗寶箱和鑰匙
    removeInventoryItem(char.id, match.itemId, 1);
    removeInventoryItem(char.id, keyId, 1);

    // 隨機掉落
    const lootTable = getChestLootTable(chestTier);
    const numItems = chestTier === 'bronze' ? 1 + Math.floor(Math.random() * 2)
      : chestTier === 'silver' ? 2 + Math.floor(Math.random() * 2)
      : 2 + Math.floor(Math.random() * 3);

    const obtainedItems: string[] = [];
    let goldReward = 0;

    for (let i = 0; i < numItems; i++) {
      const roll = Math.random();
      // 有一定機率掉金幣
      if (roll < 0.3) {
        const goldAmount = chestTier === 'bronze' ? 20 + Math.floor(Math.random() * 80)
          : chestTier === 'silver' ? 100 + Math.floor(Math.random() * 300)
          : 500 + Math.floor(Math.random() * 1000);
        goldReward += goldAmount;
      } else {
        const lootItem = lootTable[Math.floor(Math.random() * lootTable.length)];
        addInventoryItem(char.id, lootItem, 1);
        const lootDef = ITEM_DEFS[lootItem];
        obtainedItems.push(lootDef?.name ?? lootItem);
      }
    }

    if (goldReward > 0) {
      char.gold += goldReward;
      saveCharacter(char);
    }

    let msg = `你使用「${keyName}」打開了「${def.name}」！\n獲得了：`;
    if (obtainedItems.length > 0) msg += `\n  ${obtainedItems.join('、')}`;
    if (goldReward > 0) msg += `\n  ${goldReward} 金幣`;
    if (obtainedItems.length === 0 && goldReward === 0) msg += '\n  （空的寶箱…）';

    sendSystem(session.sessionId, msg);
    return;
  }

  // ─── 舊的 buff/teleport 相容（fallback） ───
  if (effect.type === 'buff') {
    removeInventoryItem(char.id, match.itemId, 1);
    sendSystem(session.sessionId, `你使用了「${def.name}」。`);
    return;
  }

  if (effect.type === 'teleport') {
    removeInventoryItem(char.id, match.itemId, 1);
    sendSystem(session.sessionId, `你使用了「${def.name}」。`);
    return;
  }

  // 未知效果
  sendError(session.sessionId, `「${def.name}」的效果類型不明。`);
}

/** 寶箱掉落表 */
function getChestLootTable(tier: 'bronze' | 'silver' | 'gold'): string[] {
  if (tier === 'bronze') {
    return [
      'small_hp_potion', 'small_mp_potion', 'antidote',
      'iron_ore', 'beast_hide', 'slime_jelly',
      'grilled_meat', 'spider_silk_cloth',
    ];
  }
  if (tier === 'silver') {
    return [
      'medium_hp_potion', 'medium_mp_potion',
      'strength_potion', 'wisdom_potion', 'agility_potion', 'fortitude_potion', 'luck_potion',
      'mithril_ore', 'elf_wood', 'magic_crystal',
      'stew', 'adventure_bento', 'magic_dessert',
    ];
  }
  // gold — epic/legendary items only
  return [
    // Unique weapons (with attackDescriptions)
    'faded_grimoire', 'lava_warhammer', 'crystal_elestaff', 'frost_greataxe',
    'sandstorm_crossbow', 'frozen_hourglass_staff', 'crimson_grimoire',
    'guardian_warhammer', 'spirit_whip',
    'dwarven_masterwork_spear', 'twilight_katana',
    'eternal_holy_tome', 'world_tree_staff',
    // Set equipment pieces
    'sword_saint_armor', 'sword_saint_ring',
    'archmage_set_robe', 'archmage_set_ring',
    'shadow_hunter_armor', 'shadow_hunter_ring',
    'holy_guardian_armor', 'holy_guardian_ring',
    // High-value materials
    'dragon_scale', 'magic_crystal', 'ancient_fragment',
    // Advanced enhancement items
    'advanced_enhance_stone', 'blessing_scroll',
  ];
}

function cmdTake(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;

  if (!itemName) {
    sendError(session.sessionId, '用法：take <物品名稱>');
    return;
  }

  // 嘗試撿取地上物品
  const groundItems = getAvailableGroundItems(char.roomId);
  const target = itemName.toLowerCase();
  const match = groundItems.find(gi => {
    const def = ITEM_DEFS[gi.itemId];
    return def && (def.name === itemName || gi.itemId === target || def.name.toLowerCase().includes(target));
  });

  if (match) {
    const def = ITEM_DEFS[match.itemId];
    addInventoryItem(char.id, match.itemId, 1);
    markGroundItemPicked(char.roomId, match.itemId);
    questMgr.updateProgress(char.id, 'collect_item', match.itemId);
    sendNarrative(session.sessionId, `你撿起了${def?.name ?? match.itemId}。`);
    return;
  }

  sendSystem(session.sessionId, `這裡沒有可以撿取的「${itemName}」。`);
}

function cmdLoot(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;

  const query = target?.trim() || 'corpse';
  const result = corpseMgr.lootCorpse(char.roomId, char.id, query);
  if (!result.ok) {
    sendError(session.sessionId, result.message);
    return;
  }

  const loot = result.loot;
  if (!loot || (loot.gold <= 0 && loot.items.length === 0)) {
    sendSystem(session.sessionId, result.message);
    return;
  }

  const personalQuestItems = loot.items.filter(item => ITEM_DEFS[item.itemId]?.type === 'quest');
  const sharedLoot = {
    gold: loot.gold,
    items: loot.items.filter(item => ITEM_DEFS[item.itemId]?.type !== 'quest'),
  };
  const distribution = partyMgr.distributeLoot(
    char.id,
    result.corpse?.participantIds ?? [char.id],
    sharedLoot,
  );

  for (const [recipientId, assignedLoot] of distribution.assignments) {
    const recipient = getCharacterById(recipientId);
    if (!recipient) continue;

    if (assignedLoot.gold > 0) {
      recipient.gold += assignedLoot.gold;
      recordGoldProduced(assignedLoot.gold);
      sendSystem(getSessionByCharacterId(recipient.id)?.sessionId ?? session.sessionId, `獲得金幣 +${assignedLoot.gold}`);
    }

    for (const item of assignedLoot.items) {
      addInventoryItem(recipient.id, item.itemId, item.quantity);
      questMgr.updateProgress(recipient.id, 'collect_item', item.itemId);
      const def = ITEM_DEFS[item.itemId];
      sendSystem(getSessionByCharacterId(recipient.id)?.sessionId ?? session.sessionId, `獲得 ${def?.name ?? item.itemId} x${item.quantity}`);
      announceLootItem(recipient, item.itemId, result.corpse?.roomId ?? char.roomId);
    }

    questMgr.updateProgress(recipient.id, 'loot_corpse', result.corpse?.monsterId ?? 'corpse');
    questMgr.updateProgress(recipient.id, 'loot_corpse', 'corpse');
    saveCharacter(recipient);
  }

  for (const item of personalQuestItems) {
    addInventoryItem(char.id, item.itemId, item.quantity);
    questMgr.updateProgress(char.id, 'collect_item', item.itemId);
    const def = ITEM_DEFS[item.itemId];
    sendSystem(session.sessionId, `獲得 ${def?.name ?? item.itemId} x${item.quantity}`);
    announceLootItem(char, item.itemId, result.corpse?.roomId ?? char.roomId);
  }

  if (personalQuestItems.length > 0 && !distribution.assignments.has(char.id)) {
    questMgr.updateProgress(char.id, 'loot_corpse', result.corpse?.monsterId ?? 'corpse');
    questMgr.updateProgress(char.id, 'loot_corpse', 'corpse');
  }
  saveCharacter(char);
  if (distribution.assignments.size > 0) sendSystem(session.sessionId, distribution.message);
  sendSystem(session.sessionId, result.message);
}

function announceLootItem(recipient: Character, itemId: string, roomId: string): void {
  const scope = getLootAnnouncementScope(itemId);
  if (!scope) return;

  const itemName = ITEM_DEFS[itemId]?.name ?? itemId;
  const text = `【戰利品】${recipient.name} 獲得了 ${itemName}。`;

  if (scope === 'room') {
    broadcastToRoom(roomId, 'system', { text }, characterId => getCharacterById(characterId)?.roomId ?? null);
    return;
  }

  if (scope === 'world') {
    broadcast('system', { text });
    return;
  }

  const sourceZoneId = getRoom(roomId)?.zone;
  if (!sourceZoneId) return;
  for (const onlineSession of getAllSessions()) {
    if (!onlineSession.characterId) continue;
    const onlineChar = getCharacterById(onlineSession.characterId);
    const onlineZoneId = onlineChar ? getRoom(onlineChar.roomId)?.zone : undefined;
    if (onlineZoneId === sourceZoneId) {
      sendToSession(onlineSession.sessionId, 'system', { text });
    }
  }
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

// 追蹤玩家目前的 NPC 對話狀態
const activeDialogues = new Map<string, { npcId: string; nodeId: string }>();

function showDialogueNode(session: WsSession, npc: { id: string; name: string; dialogue: { id: string; text: string; options?: { text: string; nextId: string }[]; action?: { type: string; data?: Record<string, unknown> } }[] }, nodeId: string): void {
  const node = npc.dialogue.find(d => d.id === nodeId);
  if (!node) {
    sendSystem(session.sessionId, `${npc.name}沉默了。`);
    activeDialogues.delete(session.sessionId);
    return;
  }

  // 執行 action
  if (node.action) {
    const char = getChar(session);
    if (char) {
      switch (node.action.type) {
        case 'shop':
          sendSystem(session.sessionId, `${npc.name}展示了商品。輸入 buy <物品> 購買。`);
          break;
        case 'heal':
          char.hp = char.maxHp;
          char.mp = char.maxMp;
          saveCharacter(char);
          sendSystem(session.sessionId, `${npc.name}為你治療了傷勢。HP 和 MP 已完全恢復！`);
          break;
        case 'quest_start': {
          const questId = node.action.data?.questId as string;
          if (questId) {
            const result = questMgr.startQuest(char.id, questId, char);
            sendSystem(session.sessionId, result.message);
          }
          break;
        }
      }
    }
  }

  let dialogueText = `【${npc.name}】：${node.text}`;
  if (node.options && node.options.length > 0) {
    dialogueText += '\n';
    for (let i = 0; i < node.options.length; i++) {
      dialogueText += `\n  ${i + 1}. ${node.options[i].text}`;
    }
    // 記錄對話狀態
    activeDialogues.set(session.sessionId, { npcId: npc.id, nodeId });
  } else {
    // 沒有選項，對話結束
    activeDialogues.delete(session.sessionId);
  }
  sendNarrative(session.sessionId, dialogueText);
}

/** shop <NPC> — 直接開啟商人 NPC 的商店（跳到 shop 對話節點） */
function cmdShop(session: WsSession, npcName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!npcName) { sendError(session.sessionId, '用法：shop <NPC名稱>'); return; }

  const npc = findNpcByName(npcName.split(/\s+/)[0], char.roomId);
  if (!npc) {
    sendError(session.sessionId, `這裡沒有名為「${npcName}」的 NPC。`);
    return;
  }
  if (npc.type !== 'merchant' || !npc.shopItems?.length) {
    sendError(session.sessionId, `${npc.name}不是商人。`);
    return;
  }

  // 找到 shop 對話節點並直接顯示
  const shopNode = npc.dialogue.find(d => d.action?.type === 'shop');
  if (shopNode) {
    showDialogueNode(session, npc, shopNode.id);
  } else {
    // 沒有 shop 節點，顯示商品列表
    const itemNames = npc.shopItems
      .map(id => ITEM_DEFS[id]?.name ?? id)
      .join(', ');
    sendSystem(session.sessionId, `【${npc.name}的商品】：${itemNames}`);
    sendSystem(session.sessionId, `輸入 buy <物品> 購買。`);
  }
}

/** buy <物品名稱> — 從當前房間的商人 NPC 購買物品 */
function cmdBuy(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：buy <物品名稱>'); return; }

  // 找到房間中的商人 NPC
  const npcsInRoom = getNpcsByRoom(char.roomId);
  const merchant = npcsInRoom.find(n => n.type === 'merchant' && n.shopItems?.length);
  if (!merchant) {
    sendError(session.sessionId, '附近沒有商人可以交易。');
    return;
  }

  // 搜尋物品（支援名稱和 ID）
  const query = itemName.toLowerCase();
  const matchId = merchant.shopItems!.find(id => {
    const def = ITEM_DEFS[id];
    return id === itemName || def?.name === itemName || def?.name.includes(itemName) || id.includes(query);
  });
  if (!matchId) {
    sendError(session.sessionId, `${merchant.name}沒有販售「${itemName}」。`);
    return;
  }

  const def = ITEM_DEFS[matchId];
  if (!def) { sendError(session.sessionId, '物品資料異常。'); return; }

  if (char.gold < def.buyPrice) {
    sendError(session.sessionId, `金幣不足！「${def.name}」需要 ${def.buyPrice} 金幣，你只有 ${char.gold} 金幣。`);
    return;
  }

  char.gold -= def.buyPrice;
  saveCharacter(char);
  addInventoryItem(char.id, matchId, 1);
  sendSystem(session.sessionId, `購買了「${def.name}」，花費 ${def.buyPrice} 金幣。（剩餘：${char.gold}）`);
}

function cmdTalk(session: WsSession, npcName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!npcName) { sendError(session.sessionId, '用法：talk <NPC名稱> 或 talk <NPC> <選項編號>'); return; }

  // 解析 "talk elder 1" 格式
  const parts = npcName.split(/\s+/);
  const name = parts[0];
  const choiceNum = parts.length > 1 ? parseInt(parts[parts.length - 1], 10) : NaN;

  // 如果有數字且有進行中的對話，嘗試選擇選項
  if (!isNaN(choiceNum)) {
    const active = activeDialogues.get(session.sessionId);
    if (active) {
      const npc = findNpcByName(name, char.roomId);
      if (npc && npc.id === active.npcId) {
        const currentNode = npc.dialogue.find(d => d.id === active.nodeId);
        if (currentNode?.options && choiceNum >= 1 && choiceNum <= currentNode.options.length) {
          const chosen = currentNode.options[choiceNum - 1];
          showDialogueNode(session, npc, chosen.nextId);
          questMgr.updateProgress(char.id, 'talk', npc.id);
          return;
        } else {
          sendError(session.sessionId, `請輸入 1-${currentNode?.options?.length ?? 0} 的選項。`);
          return;
        }
      }
    }
  }

  // 在當前房間中搜尋 NPC
  const npc = findNpcByName(name, char.roomId);
  if (!npc) {
    sendSystem(session.sessionId, `這裡沒有名為「${name}」的 NPC。`);
    return;
  }

  // 顯示 NPC 的第一段對話
  const greeting = npc.dialogue?.[0];
  if (greeting) {
    showDialogueNode(session, npc, greeting.id);
  } else {
    sendSystem(session.sessionId, `${npc.name}向你點了點頭，但沒有說話。`);
  }

  // 觸發任務進度（交談）
  questMgr.updateProgress(char.id, 'talk', npc.id);

  // 教學系統：對話鉤子
  tutorialMgr.advanceStep(char.id, 'talk');
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
  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  const miniMap = world.generateMiniMap(char.roomId);
  const visitedRooms = room ? getDiscoveryCount(char.id, room.zone, 'visit_room') : 0;
  const totalRooms = room ? getRoomsByZone(room.zone).length : 0;
  const percent = totalRooms > 0 ? Math.floor((visitedRooms / totalRooms) * 100) : 0;
  sendToSession(session.sessionId, 'map', {
    ascii: miniMap,
    currentRoom: char.roomId,
    zone: room?.zone ?? 'world',
    zoneName: zone?.name,
    zoneType: zone?.type,
    dangerLevel: zone?.dangerLevel,
    pvpMode: zone?.pvpMode,
    deathPenalty: zone?.deathPenalty,
    exploration: room ? {
      visitedRooms,
      totalRooms,
      percent,
    } : undefined,
    travelNodes: room ? getTravelNodes()
      .filter(node => node.zoneId === room.zone)
      .map(node => ({
        id: node.id,
        name: node.name,
        roomId: node.roomId,
        kind: node.kind,
        unlocked: node.unlockByDefault || isPortalUnlocked(char.id, node.id),
      })) : undefined,
  });
  if (room && zone) {
    sendSystem(session.sessionId, `探索度：${zone.name} ${visitedRooms}/${totalRooms} (${percent}%)；類型 ${zone.type}，危險度 ${zone.dangerLevel}，PvP ${zone.pvpMode}，死亡懲罰 ${zone.deathPenalty}`);
  }
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

function cmdActivate(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  const target = args.join(' ').toLowerCase();
  if (target && target !== 'portal' && target !== '傳送陣') {
    sendError(session.sessionId, '用法：activate portal');
    return;
  }

  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  if (!room || !zone) {
    sendError(session.sessionId, '這裡沒有可啟用的傳送陣。');
    return;
  }

  const localNode = getTravelNodesByActivationRoom(room.id)[0];
  if (localNode) {
    const access = canAccessTravelNode(char, localNode, true);
    if (!access.ok) {
      sendError(session.sessionId, access.message);
      return;
    }
    unlockZone(char.id, localNode.zoneId, 'travel_node');
    unlockPortal(char.id, localNode.id, localNode.zoneId);
    questMgr.updateProgress(char.id, 'inspect_object', localNode.id);
    sendSystem(session.sessionId, `已啟用 ${localNode.name}。之後可用 travel ${localNode.id} 傳送。`);
    return;
  }

  if (!zone.portal) {
    sendError(session.sessionId, '這裡沒有可啟用的傳送陣。');
    return;
  }

  const access = canAccessZone(char, zone.id);
  if (!access.ok) {
    sendError(session.sessionId, access.message);
    return;
  }

  unlockZone(char.id, zone.id, 'portal');
  unlockPortal(char.id, zone.portal.id, zone.id);
  questMgr.updateProgress(char.id, 'inspect_object', zone.portal.id);
  sendSystem(session.sessionId, `已啟用 ${zone.portal.name}。之後可用 travel ${zone.id} 或 travel ${zone.portal.id} 傳送。`);
}

function cmdPortals(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const unlocked = new Map(getUnlockedPortals(char.id).map(portal => [portal.portalId, portal.zoneId]));
  const lines: string[] = [];

  for (const node of getTravelNodes()) {
    const zone = getZone(node.zoneId);
    if (!zone) continue;
    const isUnlocked = node.unlockByDefault || unlocked.has(node.id) || isPortalUnlocked(char.id, node.id);
    const access = canAccessTravelNode(char, node, false);
    const state = isUnlocked ? '已解鎖' : access.ok ? '可啟用' : '未解鎖';
    const cost = formatTravelCost(char, node);
    lines.push(`${state} ${zone.name} (${node.id}) - ${node.name}，費用 ${cost}，冷卻 ${node.cooldownSeconds} 秒，網路 ${node.network}`);
  }

  if (lines.length === 0) {
    sendSystem(session.sessionId, '目前世界資料沒有定義傳送點。');
    return;
  }

  sendSystem(session.sessionId, '── 傳送點 ──');
  for (const line of lines) sendSystem(session.sessionId, line);
}

function cmdTravel(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用傳送。');
    return;
  }
  if (!target) {
    sendError(session.sessionId, '用法：travel <zone_id|portal_id>');
    return;
  }

  const node = findTravelNode(target);
  if (!node) {
    sendError(session.sessionId, `找不到傳送點「${target}」。可用 portals 查看列表。`);
    return;
  }

  const access = canAccessTravelNode(char, node);
  if (!access.ok) {
    sendError(session.sessionId, access.message);
    return;
  }

  const unlocked = node.unlockByDefault || isPortalUnlocked(char.id, node.id);
  if (!unlocked) {
    sendError(session.sessionId, `${node.name} 尚未啟用。請先到當地使用 activate portal。`);
    return;
  }

  const cooldown = getTravelCooldownRemaining(char.id);
  if (cooldown > 0) {
    sendError(session.sessionId, `傳送冷卻中，還需 ${cooldown} 秒。`);
    return;
  }

  const originCheck = canTravelFromCurrentRoom(char, node);
  if (!originCheck.ok) {
    sendError(session.sessionId, originCheck.message);
    return;
  }

  const costResult = payTravelCost(char, node);
  if (!costResult.ok) {
    sendError(session.sessionId, costResult.message);
    return;
  }

  const destination = getRoom(node.roomId);
  if (!destination) {
    sendError(session.sessionId, `${node.name} 尚未設定可傳送的目的房間。`);
    return;
  }

  const previousRoom = char.roomId;
  char.roomId = destination.id;
  unlockZone(char.id, node.zoneId, 'travel');
  world.placePlayer(char.id, destination.id);
  setTravelCooldown(char.id, node.cooldownSeconds);
  saveCharacter(char);
  sendNarrative(session.sessionId, `你啟動 ${node.name}，從 ${previousRoom} 傳送到 ${destination.name}。${costResult.message}`);
  cmdLook(session);
}

function cmdRecall(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法回城。');
    return;
  }

  const starter = getZone('starter_village');
  if (!starter?.portal) {
    sendError(session.sessionId, '目前沒有可用的主城回程點。');
    return;
  }

  const destination = getRoom('village_square') ?? starter.rooms.map(roomId => getRoom(roomId)).find(Boolean);
  if (!destination) {
    sendError(session.sessionId, '主城回程點缺少房間資料。');
    return;
  }

  char.roomId = destination.id;
  world.placePlayer(char.id, destination.id);
  unlockZone(char.id, starter.id, 'recall');
  unlockPortal(char.id, starter.portal.id, starter.id);
  saveCharacter(char);
  sendNarrative(session.sessionId, `你集中精神啟動回程印記，返回 ${destination.name}。`);
  cmdLook(session);
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
      sendSystem(session.sessionId, '組隊指令：party create/invite <名>/accept/decline/leave/kick <名>/loot <模式>/info');
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
      // 教學系統：任務接取鉤子
      if (result.success) {
        tutorialMgr.advanceStep(char.id, 'quest');
      }
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
    case 'abandon': case 'drop': {
      const questId = args[1];
      if (!questId) { sendError(session.sessionId, '用法：quest abandon <任務ID>'); return; }
      const result = questMgr.abandonQuest(char.id, questId);
      sendSystem(session.sessionId, result.message);
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
        `狀態：${instance.cleared ? '已通關' : '進行中'}`,
      );
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
        '  dungeon leave          — 離開副本（放棄）',
      );
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

  // Also send structured data for the UI panel
  leaderboardMgr.sendLeaderboard(char.id, category);
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

// ─── 轉職任務系統 ───

function cmdClassQuest(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'start': {
      if (!args[1]) {
        // 顯示可用轉職任務
        const text = classQuestMgr.formatAvailableQuests(char);
        sendSystem(session.sessionId, text);
        return;
      }
      const questId = args[1];
      const result = classQuestMgr.startQuest(char.id, questId, char);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'status': {
      const text = classQuestMgr.formatQuestStatus(char.id);
      sendSystem(session.sessionId, text);
      break;
    }
    case 'abandon': {
      const result = classQuestMgr.abandonQuest(char.id);
      sendSystem(session.sessionId, result.message);
      break;
    }
    case 'complete': {
      const result = classQuestMgr.completeQuest(char.id, char);
      sendSystem(session.sessionId, result.message);
      if (result.success) {
        saveCharacter(char);
      }
      break;
    }
    case 'answer': {
      const answer = args.slice(1).join(' ');
      if (!answer) {
        sendError(session.sessionId, '用法：classquest answer <答案>');
        return;
      }
      const result = classQuestMgr.answerRiddle(char.id, answer);
      sendSystem(session.sessionId, result.message);
      break;
    }
    default:
      sendSystem(session.sessionId,
        '轉職任務指令：\n' +
        '  classquest start [任務ID] — 查看/開始轉職任務\n' +
        '  classquest status — 查看進度\n' +
        '  classquest abandon — 放棄任務\n' +
        '  classquest complete — 完成轉職（需在轉職大廳）\n' +
        '  classquest answer <答案> — 回答謎語（法師任務）\n' +
        '  別名：cq',
      );
  }
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

// ─── 強化系統 ───

function cmdUpgrade(session: WsSession, argStr: string): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法強化裝備！');
    return;
  }

  // 解析目標欄位
  const slotArg = argStr.trim().toLowerCase();
  let slot: EquipSlot = 'weapon';
  if (slotArg === 'armor' || slotArg === 'body' || slotArg === '身體' || slotArg === '鎧甲') {
    slot = 'body';
  } else if (slotArg === 'head' || slotArg === '頭部') {
    slot = 'head';
  } else if (slotArg === 'hands' || slotArg === '手部') {
    slot = 'hands';
  } else if (slotArg === 'feet' || slotArg === '腳部') {
    slot = 'feet';
  } else if (slotArg === 'accessory' || slotArg === '飾品') {
    slot = 'accessory';
  } else if (slotArg === 'info' || slotArg === '資訊') {
    // 顯示強化資訊
    const info = getUpgradeInfo(char.id, 'weapon');
    sendSystem(session.sessionId, info);
    return;
  }

  const result = upgradeItem(char.id, slot);
  if (result.success) {
    sendSystem(session.sessionId, result.message);
    // 二轉任務：武器強化鉤子
    if (slot === 'weapon' && result.newLevel) {
      classQuest2Mgr.onWeaponEnhanced(char.id, result.newLevel);
    }
  } else {
    sendError(session.sessionId, result.message);
  }
}

function cmdReroll(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法重骰詞綴！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'affix') {
    sendError(session.sessionId, '用法：reroll affix <item_instance_id> <詞綴序號>');
    return;
  }

  const itemInstanceId = args[1];
  const affixNumber = parseInt(args[2] ?? '1', 10);
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：reroll affix <item_instance_id> <詞綴序號>');
    return;
  }

  const result = rerollItemAffix(char.id, itemInstanceId, affixNumber);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

function cmdLock(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法鎖定詞綴！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'affix') {
    sendError(session.sessionId, '用法：lock affix <item_instance_id> <詞綴序號>');
    return;
  }

  const itemInstanceId = args[1];
  const affixNumber = parseInt(args[2] ?? '1', 10);
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：lock affix <item_instance_id> <詞綴序號>');
    return;
  }

  const result = lockItemAffix(char.id, itemInstanceId, affixNumber);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

function cmdReforge(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法重鑄裝備！');
    return;
  }

  const sub = args[0]?.toLowerCase();
  if (sub !== 'quality') {
    sendError(session.sessionId, '用法：reforge quality <item_instance_id>');
    return;
  }

  const itemInstanceId = args[1];
  if (!itemInstanceId) {
    sendError(session.sessionId, '用法：reforge quality <item_instance_id>');
    return;
  }

  const result = reforgeItemQuality(char.id, itemInstanceId);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

function cmdDisassemble(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法分解裝備！');
    return;
  }

  const itemKey = args[0];
  if (!itemKey) {
    sendError(session.sessionId, '用法：disassemble <item_id|item_instance_id>');
    return;
  }

  const result = disassembleEquipment(char.id, itemKey);
  if (result.success) sendSystem(session.sessionId, result.message);
  else sendError(session.sessionId, result.message);
}

// ─── 製作系統 ───

function cmdCraft(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法製作！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': {
      const category = resolveCraftingCategory(args[1]);
      if (category) {
        sendSystem(session.sessionId, craftingMgr.formatRecipeList(category, char.id));
      } else {
        sendSystem(session.sessionId,
          '製作類別：\n' +
          '  craft list forge    — 鍛造配方\n' +
          '  craft list tailoring — 裁縫配方\n' +
          '  craft list leather   — 皮革配方\n' +
          '  craft list jewel     — 珠寶配方\n' +
          '  craft list alchemy  — 煉金配方\n' +
          '  craft list enchant  — 附魔配方\n' +
          '  craft list cooking  — 烹飪配方',
        );
      }
      break;
    }
    case 'forge': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft forge <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'forge');
      }
      break;
    }
    case 'alchemy': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft alchemy <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'alchemy');
        classQuest2Mgr.onLifeSkillLevel(char.id, 'alchemy', craftingMgr.getCraftingLevel(char.id, 'alchemy').level);
      }
      break;
    }
    case 'cook': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft cook <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, 'cooking');
        classQuest2Mgr.onLifeSkillLevel(char.id, 'cooking', craftingMgr.getCraftingLevel(char.id, 'cooking').level);
      }
      break;
    }
    case 'tailoring': case 'tailor': case '裁縫':
    case 'leatherworking': case 'leather': case '皮革':
    case 'jewelcrafting': case 'jewel': case 'jewelry': case '珠寶':
    case 'enchanting': case 'enchant': case '附魔': {
      const category = resolveCraftingCategory(sub);
      const recipeId = args[1];
      if (!category || !recipeId) { sendError(session.sessionId, '用法：craft <類別> <配方ID>'); return; }
      const craftOptions = parseCraftOptions(args.slice(2));
      const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
      sendSystem(session.sessionId, result.message);
      if (result.crafted) {
        questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
        classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, category);
      }
      break;
    }
    case 'info': {
      const recipeId = args[1];
      if (!recipeId) { sendError(session.sessionId, '用法：craft info <配方ID>'); return; }
      sendSystem(session.sessionId, craftingMgr.formatRecipeInfo(recipeId, char.id));
      break;
    }
    case 'level': case 'levels': {
      sendSystem(session.sessionId, craftingMgr.formatCraftingLevels(char.id));
      break;
    }
    default: {
      if (sub) {
        const recipeId = args[0];
        const craftOptions = parseCraftOptions(args.slice(1));
        const result = craftingMgr.craft(char.id, recipeId, craftOptions.slot, craftOptions);
        if (result.success) {
          sendSystem(session.sessionId, result.message);
          if (result.crafted) {
            const recipe = craftingMgr.getRecipeInfo(recipeId);
            questMgr.updateProgress(char.id, 'craft_item', result.resultItemId ?? recipeId);
            classQuest2Mgr.onCraft(char.id, result.resultItemId ?? recipeId, recipe?.category ?? 'forge');
            if (recipe?.category === 'alchemy') {
              classQuest2Mgr.onLifeSkillLevel(char.id, 'alchemy', craftingMgr.getCraftingLevel(char.id, 'alchemy').level);
            } else if (recipe?.category === 'cooking') {
              classQuest2Mgr.onLifeSkillLevel(char.id, 'cooking', craftingMgr.getCraftingLevel(char.id, 'cooking').level);
            }
          }
          break;
        }
      }
      sendSystem(session.sessionId,
        '製作系統指令：\n' +
        '  craft list [forge|tailoring|leather|jewel|alchemy|enchant|cooking] — 查看配方\n' +
        '  craft <配方ID> [slot:<slot>] [affix:<tag>] — 直接製作配方\n' +
        '  craft forge <配方ID>    — 鍛造裝備\n' +
        '  craft tailoring <配方ID> — 裁縫裝備\n' +
        '  craft leather <配方ID>  — 皮革裝備\n' +
        '  craft jewel <配方ID>    — 珠寶飾品\n' +
        '  craft alchemy <配方ID>  — 煉金製藥\n' +
        '  craft enchant <配方ID>  — 附魔媒材\n' +
        '  craft cook <配方ID>     — 烹飪料理\n' +
        '  craft info <配方ID>     — 查看配方詳情\n' +
        '  craft level             — 查看製作等級',
      );
    }
  }
}

function parseCraftOptions(args: string[]): CraftingOptions & { slot?: EquipSlot } {
  const token = args.find(arg => arg.toLowerCase().startsWith('slot:'));
  const affixToken = args.find(arg => arg.toLowerCase().startsWith('affix:'));
  return {
    slot: token?.slice('slot:'.length) as EquipSlot | undefined,
    preferredAffixTag: affixToken?.slice('affix:'.length) as SkillTag | undefined,
  };
}

function resolveCraftingCategory(input?: string): CraftingCategory | undefined {
  const normalized = input?.toLowerCase();
  if (!normalized) return undefined;
  const aliases: Record<string, CraftingCategory> = {
    forge: 'forge',
    '鍛造': 'forge',
    tailoring: 'tailoring',
    tailor: 'tailoring',
    '裁縫': 'tailoring',
    leatherworking: 'leatherworking',
    leather: 'leatherworking',
    '皮革': 'leatherworking',
    jewelcrafting: 'jewelcrafting',
    jewel: 'jewelcrafting',
    jewelry: 'jewelcrafting',
    '珠寶': 'jewelcrafting',
    alchemy: 'alchemy',
    '煉金': 'alchemy',
    enchanting: 'enchanting',
    enchant: 'enchanting',
    '附魔': 'enchanting',
    cooking: 'cooking',
    cook: 'cooking',
    '烹飪': 'cooking',
  };
  return aliases[normalized] ?? CRAFTING_CATEGORIES.find(category => category === normalized);
}

// ─── 採集系統 ───

function cmdGather(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法採集！');
    return;
  }

  const room = getRoom(char.roomId);
  if (!room) {
    sendError(session.sessionId, '目前位置不存在。');
    return;
  }

  const zone = getZone(room.zone);
  const nodeId = args[0];
  const result = gatheringMgr.gather(char.id, room, zone, nodeId, char.level);
  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    if (result.gathered) {
      questMgr.updateProgress(char.id, 'gather_resource', result.gathered.itemId);
    }
  } else {
    const available = gatheringMgr.getAvailableNodes(room, zone, char.level);
    if (available.length > 0) {
      sendError(session.sessionId, `${result.message}\n可用：${available.map(node => node.id).join(', ')}`);
    } else {
      sendError(session.sessionId, result.message);
    }
  }
}

// ─── 拍賣系統 ───

function cmdAuction(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用拍賣系統！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'sell': {
      // auction sell <itemName> <minPrice> [buyoutPrice] [hours]
      const itemName = args[1];
      if (!itemName) { sendError(session.sessionId, '用法：auction sell <物品ID> <最低價> [直購價] [時長]'); return; }

      // Find item by ID or name
      let itemId = itemName;
      let itemInstanceId: string | undefined;
      if (!ITEM_DEFS[itemId]) {
        const found = Object.values(ITEM_DEFS).find(d => d.name === itemName);
        if (found) itemId = found.id;
        else {
          const instance = getInventory(char.id).find(i => i.itemInstanceId === itemName && !i.equipped);
          if (!instance) { sendError(session.sessionId, `找不到物品：${itemName}`); return; }
          itemId = instance.itemId;
          itemInstanceId = instance.itemInstanceId;
        }
      }

      const minPrice = parseInt(args[2]);
      if (!minPrice || minPrice < 1) { sendError(session.sessionId, '請輸入有效的最低出價。'); return; }

      const buyoutPrice = args[3] ? parseInt(args[3]) : undefined;
      const hours = args[4] ? parseInt(args[4]) : 24;

      const result = auctionMgr.listItem(char.id, itemId, 1, minPrice, buyoutPrice, hours, itemInstanceId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'search': {
      const keyword = args.slice(1).join(' ') || undefined;
      sendSystem(session.sessionId, auctionMgr.searchAuctions(keyword));
      break;
    }
    case 'bid': {
      const auctionId = args[1];
      const amount = parseInt(args[2]);
      if (!auctionId || !amount) { sendError(session.sessionId, '用法：auction bid <拍賣ID> <金額>'); return; }
      const result = auctionMgr.placeBid(auctionId, char.id, amount);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'buyout': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction buyout <拍賣ID>'); return; }
      const result = auctionMgr.buyout(auctionId, char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'my': {
      sendSystem(session.sessionId, auctionMgr.getMyAuctions(char.id));
      break;
    }
    case 'cancel': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction cancel <拍賣ID>'); return; }
      const result = auctionMgr.cancelAuction(auctionId, char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'info': {
      const auctionId = args[1];
      if (!auctionId) { sendError(session.sessionId, '用法：auction info <拍賣ID>'); return; }
      sendSystem(session.sessionId, auctionMgr.getAuctionInfo(auctionId));
      break;
    }
    default:
      sendSystem(session.sessionId,
        '拍賣系統指令：\n' +
        '  auction sell <物品ID> <最低價> [直購價] [時長]  — 上架物品\n' +
        '  auction search [關鍵字]                         — 搜尋拍賣品\n' +
        '  auction bid <拍賣ID> <金額>                     — 出價競標\n' +
        '  auction buyout <拍賣ID>                         — 直接購買\n' +
        '  auction my                                       — 我的拍賣/出價\n' +
        '  auction cancel <拍賣ID>                         — 取消拍賣\n' +
        '  auction info <拍賣ID>                           — 查看詳情',
      );
  }
}

// ─── 釣魚系統 ───

function cmdFish(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法釣魚！');
    return;
  }

  const sub = args[0]?.toLowerCase();

  if (sub === 'level' || sub === 'info' || sub === 'stats') {
    sendSystem(session.sessionId, fishingMgr.formatFishingLevel(char.id));
    return;
  }

  // Default: fish
  const result = fishingMgr.fish(char.id, char.roomId);
  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    // 二轉任務：釣魚等級鉤子
    classQuest2Mgr.onLifeSkillLevel(char.id, 'fishing', fishingMgr.getFishingLevel(char.id).level);
  } else {
    sendError(session.sessionId, result.message);
  }
}

// ─── 幫助 ───

function cmdHelp(session: WsSession, topic?: string): void {
  const categories: Record<string, { title: string; lines: string[] }> = {
    explore: {
      title: '移動與探索',
      lines: [
        'look (l)            查看周圍環境',
        'search [目標]        搜尋房間線索',
        'inspect <目標>       檢查物件、出口或生物',
        'open <目標>          開啟出口或寶箱',
        'go <方向> (n/s/e/w)  移動',
        'map                 顯示地圖',
        'activate portal     啟用目前區域傳送陣',
        'portals             查看傳送點解鎖狀態',
        'travel <傳送點>      傳送到已啟用區域',
        'recall              回到新手村廣場',
        'rest                原地休息，恢復 HP 與資源',
      ],
    },
    character: {
      title: '角色資訊',
      lines: [
        'status (stat)       查看角色狀態',
        'inventory (i)       查看背包',
        'skills (sk)         查看技能列表',
        'allocate <屬性> <點> 分配屬性點',
      ],
    },
    item: {
      title: '物品操作',
      lines: [
        'equip/unequip <物品> 裝備/卸下',
        'use <物品>           使用物品',
        'drop <物品>          丟棄物品',
        'upgrade / enhance    強化當前武器',
        'upgrade armor        強化身體裝備',
        'reroll affix <instance> <序號> 重骰裝備詞綴',
        'lock affix <instance> <序號> 鎖定裝備詞綴',
        'reforge quality <instance> 重鑄裝備品質',
        'disassemble <物品|instance> 分解裝備取得重鑄材料',
      ],
    },
    combat: {
      title: '戰鬥指令',
      lines: [
        'attack <目標>        攻擊',
        'skill <技能> [目標]   使用技能',
        'defend / flee        防禦 / 逃跑',
      ],
    },
    social: {
      title: '社交',
      lines: [
        'say <訊息>           說話',
        'party                組隊系統（help party）',
        'trade                交易系統',
        'emote <動作>         表情動作（bow/wave/laugh/cry/dance等）',
        'friend add/remove/list/online 好友系統',
        'mail list/read/send/delete   郵件系統',
        'weather              查看天氣與時段',
      ],
    },
    quest: {
      title: '任務系統',
      lines: [
        'quest list           所有可接任務',
        'quest active         進行中的任務',
        'quest accept <ID>    接受任務',
        'quest complete <ID>  完成任務',
        'quest abandon <ID>   放棄任務',
        'quest info <ID>      任務詳情',
        'classquest (cq)      職業任務',
        'classquest2 (cq2)    進階職業任務',
      ],
    },
    dungeon: {
      title: '副本與競技',
      lines: [
        'dungeon list         副本列表',
        'dungeon enter <ID>   進入副本',
        'dungeon queue <ID>   排隊副本',
        'dungeon status       副本狀態',
        'dungeon leave        離開副本',
        'duel <玩家>          PvP 決鬥',
        'arena                競技場',
        'leaderboard (lb)     排行榜',
      ],
    },
    craft: {
      title: '製作系統',
      lines: [
        'craft list [forge|tailoring|leather|jewel|alchemy|enchant|cooking] 查看配方',
        'craft <配方ID> slot:<slot> affix:<tag> 指定裝備欄與詞綴傾向',
        'craft forge <配方ID>   鍛造裝備',
        'craft tailoring <配方ID> 裁縫裝備',
        'craft leather <配方ID>  皮革裝備',
        'craft jewel <配方ID>    珠寶飾品',
        'craft alchemy <配方ID> 煉金製藥',
        'craft enchant <配方ID> 附魔媒材',
        'craft cook <配方ID>    烹飪料理',
        'craft info <配方ID>    查看配方詳情',
        'craft level            查看製作等級',
      ],
    },
    guardian: {
      title: '守護靈',
      lines: [
        'ask                  向守護靈詢問建議',
        'guardian sense       主動感知環境',
        'guardian advice      請求策略建議',
        'guardian select <ID> 選擇守護靈',
        'guardian info        查看守護靈狀態',
      ],
    },
    kingdom: {
      title: '王國系統',
      lines: [
        'kingdom create <名>  建立王國（需 10000 金幣）',
        'kingdom dissolve     解散王國',
        'kingdom info [名]    查看王國資訊',
        'kingdom members      成員列表',
        'kingdom join <名>    加入王國',
        'kingdom leave        離開王國',
        'kingdom chat <訊息>  王國頻道聊天',
        'kingdom map          王國領地地圖',
        'kingdom rank/list    排名/列表',
        'kingdom motto <文字> 設定王國格言',
        'appoint/demote/kick  管理成員',
      ],
    },
    build: {
      title: '建設系統',
      lines: [
        'build room <方向> <名> 建造房間',
        'build destroy        拆除當前房間',
        'build desc <描述>    設定房間描述',
        'build type <類型>    設定房間類型',
        'build lock/unlock <方向> 鎖定/解鎖出口',
        'mob spawn/remove <ID> 管理怪物生成點',
        'npc place/remove/config 管理 NPC',
      ],
    },
    war: {
      title: '軍事系統',
      lines: [
        'war declare <王國>   宣戰',
        'war peace <王國>     提議和平',
        'war status           戰爭狀態',
        'war siege <王國>     發動攻城',
        'war defend/rally     防守/集結',
        'army recruit/deploy/dismiss/list 軍隊管理',
        'bounty set/remove/list 懸賞系統',
      ],
    },
    treasury: {
      title: '國庫系統',
      lines: [
        'treasury balance     查看國庫',
        'treasury deposit <額> 存入',
        'treasury withdraw <額> 提取',
        'treasury log         交易紀錄',
        'treasury tax <率>    設定稅率',
      ],
    },
    auction: {
      title: '拍賣系統',
      lines: [
        'auction sell <物品> <最低價> [直購價] [時長] 上架',
        'auction search [關鍵字]     搜尋',
        'auction bid <ID> <金額>     出價',
        'auction buyout <ID>         直購',
        'auction my                  我的拍賣',
        'auction cancel <ID>         取消',
        'auction info <ID>           詳情',
      ],
    },
    fish: {
      title: '釣魚系統',
      lines: [
        'fish                        在水邊釣魚',
        'fish level                  查看釣魚等級/統計',
      ],
    },
    diplomacy: {
      title: '外交系統',
      lines: [
        'diplomacy ally/unally <王國>  結盟/解盟',
        'diplomacy status     外交狀態',
        'diplomacy message <王國> <訊息> 外交訊息',
        'diplomacy trade <王國> <條款>   貿易提議',
        'diplomacy embargo/lift <王國>   禁運管理',
      ],
    },
    achievement: {
      title: '成就/稱號/圖鑑',
      lines: [
        'achievement (ach)    查看所有成就',
        'achievement equip <ID> 裝備稱號',
        'title                查看當前稱號',
        'codex monster        查看怪物圖鑑',
        'codex fish           查看釣魚圖鑑',
        'codex boss           查看 Boss 擊殺次數',
        'appearance list      查看外觀收藏',
        'appearance equip <ID> 裝備外觀',
      ],
    },
    pet: {
      title: '寵物系統',
      lines: [
        'pet list             查看所有寵物',
        'pet info <petId>     寵物詳情',
        'pet summon <petId>   召喚寵物',
        'pet dismiss          解散寵物',
        'pet feed <petId> <itemId> 餵食',
        'pet rename <petId> <name> 重命名',
        'tame                 馴服野生寵物（馴獸師專用）',
      ],
    },
    event: {
      title: '世界事件',
      lines: [
        'event info           查看當前/下次世界事件',
        'event join           加入當前世界事件',
        'event ranking        當前事件傷害排名',
      ],
    },
    auto: {
      title: '自動戰鬥',
      lines: [
        'auto / auto on       啟用自動戰鬥',
        'auto off             停用自動戰鬥',
        'auto status          查看自動戰鬥設定',
        'auto config flee <百分比>   逃跑 HP 閾值',
        'auto config potion <on/off> 自動使用藥水',
        'auto config loot <on/off>   自動拾取',
      ],
    },
    other: {
      title: '其他',
      lines: [
        'classchange (job)    轉職',
        'tutorial             教學系統',
        'tutorial skip        跳過教學',
        'signin / checkin     每日簽到',
      ],
    },
  };

  const t = topic?.toLowerCase();

  // help <topic> — show specific category
  if (t) {
    const cat = categories[t];
    if (cat) {
      sendSystem(session.sessionId, `═══ ${cat.title} ═══`);
      for (const line of cat.lines) {
        sendSystem(session.sessionId, `  ${line}`);
      }
      return;
    }
    // fuzzy match: search all categories for matching commands
    const matches: string[] = [];
    for (const [key, cat2] of Object.entries(categories)) {
      if (cat2.title.includes(t) || key.includes(t)) {
        matches.push(key);
      }
    }
    if (matches.length > 0) {
      for (const key of matches) {
        const c = categories[key];
        sendSystem(session.sessionId, `═══ ${c.title} ═══`);
        for (const line of c.lines) {
          sendSystem(session.sessionId, `  ${line}`);
        }
        sendSystem(session.sessionId, '');
      }
      return;
    }
    sendSystem(session.sessionId, `找不到「${t}」相關的說明。輸入 help 查看所有分類。`);
    return;
  }

  // help — show category index
  sendSystem(session.sessionId, '═══ 指令說明 ═══');
  sendSystem(session.sessionId, '輸入 help <分類> 查看詳細指令');
  sendSystem(session.sessionId, '');
  for (const [key, cat] of Object.entries(categories)) {
    sendSystem(session.sessionId, `  help ${key.padEnd(14)} ${cat.title}`);
  }
}

// ─── 成就/稱號指令 ───

function cmdAchievement(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'equip') {
    const achId = args[1];
    if (!achId) {
      sendError(session.sessionId, '用法：achievement equip <成就ID>');
      return;
    }
    const result = achievementMgr.equipTitle(char.id, achId);
    if (result.ok) {
      sendSystem(session.sessionId, result.message);
    } else {
      sendError(session.sessionId, result.message);
    }
    return;
  }

  // 預設：列出所有成就
  const achievements = achievementMgr.getAchievements(char.id);
  const completed = achievements.filter(a => a.completedAt !== null);

  sendSystem(session.sessionId, `═══ 成就列表 （${completed.length}/${achievements.length} 完成）═══`);

  const categories: Record<string, string> = {
    combat: '戰鬥', exploration: '探索', social: '社交',
    collection: '收集', crafting: '製作',
  };

  for (const [catId, catName] of Object.entries(categories)) {
    const catAchs = achievements.filter(a => a.category === catId);
    const catDone = catAchs.filter(a => a.completedAt !== null).length;
    sendSystem(session.sessionId, '');
    sendSystem(session.sessionId, `── ${catName} (${catDone}/${catAchs.length}) ──`);
    for (const a of catAchs) {
      const status = a.completedAt ? '✓' : `${a.progress}/${a.requiredProgress}`;
      const titleText = a.completedAt ? ` → 「${a.title}」` : '';
      sendSystem(session.sessionId, `  [${status}] ${a.name}（${a.description}）${titleText}`);
    }
  }
}

function cmdTitle(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const title = achievementMgr.getEquippedTitle(char.id);
  if (title) {
    sendSystem(session.sessionId, `你當前的稱號：「${title}」`);
  } else {
    sendSystem(session.sessionId, '你尚未裝備任何稱號。使用 achievement equip <成就ID> 來裝備。');
  }
}

function cmdCodex(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() ?? 'monster';
  if (sub === 'fish' || sub === 'fishing') {
    const entries = getFishCodex(char.id);
    sendSystem(session.sessionId, `═══ 釣魚圖鑑 (${entries.length}/${FISH_TABLE.length}) ═══`);
    if (entries.length === 0) {
      sendSystem(session.sessionId, '尚未捕獲任何魚類。');
      return;
    }
    for (const entry of entries.slice(0, 20)) {
      const def = FISH_TABLE.find(fish => fish.id === entry.fishId);
      sendSystem(session.sessionId, `  ${def?.name ?? entry.fishId} x${entry.catchCount}`);
    }
    return;
  }

  if (sub === 'boss') {
    sendSystem(session.sessionId, `Boss 擊殺次數：${getBossKillCount(char.id)}`);
    return;
  }

  const entries = getMonsterCodex(char.id);
  sendSystem(session.sessionId, `═══ 怪物圖鑑 (${entries.length}) ═══`);
  if (entries.length === 0) {
    sendSystem(session.sessionId, '尚未擊殺任何怪物。');
    return;
  }
  for (const entry of entries.slice(0, 20)) {
    const def = MONSTERS[entry.monsterId];
    const bossTag = entry.isBoss ? ' BOSS' : '';
    sendSystem(session.sessionId, `  ${def?.name ?? entry.monsterId}${bossTag} x${entry.killCount}`);
  }
}

function cmdAppearance(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase() ?? 'list';
  if (sub === 'equip') {
    const appearanceId = args[1];
    if (!appearanceId) {
      sendError(session.sessionId, '用法：appearance equip <外觀ID>');
      return;
    }
    const result = equipAppearance(char.id, appearanceId);
    if (result.ok) sendSystem(session.sessionId, result.message);
    else sendError(session.sessionId, result.message);
    return;
  }

  const entries = getAppearanceCollection(char.id);
  const unlockedCount = entries.filter(entry => entry.unlocked).length;
  sendSystem(session.sessionId, `═══ 外觀收藏 (${unlockedCount}/${entries.length}) ═══`);
  for (const entry of entries) {
    const status = entry.unlocked ? (entry.equipped ? '已裝備' : '已解鎖') : `未解鎖：${entry.source}`;
    sendSystem(session.sessionId, `  [${status}] ${entry.id} — ${entry.name}（${entry.slot}）`);
  }
}

// ─── 寵物指令 ───

function cmdPet(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  switch (sub) {
    case 'list': {
      const pets = petMgr.getPlayerPets(char.id);
      if (pets.length === 0) {
        sendSystem(session.sessionId, '你還沒有任何寵物。馴獸師可使用 tame 馴服，其他職業可使用寵物蛋。');
        return;
      }
      sendSystem(session.sessionId, `═══ 我的寵物 (${pets.length}) ═══`);
      for (const p of pets) {
        const summonMark = p.isSummoned ? ' [已召喚]' : '';
        const def = PET_DEFS[p.petType];
        sendSystem(session.sessionId,
          `  ${p.name}（${def?.name ?? p.petType}）Lv${p.level} HP:${p.hp}/${p.maxHp} ATK:${p.atk} DEF:${p.def} 幸福:${p.happiness}/100${summonMark}`
        );
        sendSystem(session.sessionId, `    ID: ${p.id}`);
      }
      break;
    }
    case 'info': {
      const petId = args[1];
      if (!petId) { sendError(session.sessionId, '用法：pet info <petId>'); return; }
      const pet = petMgr.getPetInfo(char.id, petId);
      if (!pet) { sendError(session.sessionId, '找不到這隻寵物。'); return; }
      const def = PET_DEFS[pet.petType];
      sendSystem(session.sessionId, `═══ ${pet.name} ═══`);
      sendSystem(session.sessionId, `  類型：${def?.name ?? pet.petType}（${def?.description ?? ''}）`);
      sendSystem(session.sessionId, `  等級：Lv${pet.level}  EXP：${pet.exp}/${pet.level * 50 + pet.level * pet.level * 10}`);
      sendSystem(session.sessionId, `  HP：${pet.hp}/${pet.maxHp}  ATK：${pet.atk}  DEF：${pet.def}`);
      sendSystem(session.sessionId, `  幸福度：${pet.happiness}/100`);
      sendSystem(session.sessionId, `  狀態：${pet.isSummoned ? '已召喚' : '休息中'}`);
      break;
    }
    case 'summon': {
      const petId = args[1];
      if (!petId) { sendError(session.sessionId, '用法：pet summon <petId>'); return; }
      const result = petMgr.summonPet(char.id, petId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'dismiss': {
      const result = petMgr.dismissPet(char.id);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    case 'feed': {
      const petId = args[1];
      const itemId = args[2];
      if (!petId || !itemId) { sendError(session.sessionId, '用法：pet feed <petId> <itemId>'); return; }
      // 檢查是否持有該物品
      const inv = getInventory(char.id);
      const hasItem = inv.find(i => i.itemId === itemId && i.quantity > 0);
      if (!hasItem) { sendError(session.sessionId, `你沒有物品 ${itemId}。`); return; }
      // 消耗物品
      removeInventoryItem(char.id, itemId, 1);
      const result = petMgr.feedPet(char.id, petId, itemId);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else {
        // 退還物品
        addInventoryItem(char.id, itemId, 1);
        sendError(session.sessionId, result.message);
      }
      break;
    }
    case 'rename': {
      const petId = args[1];
      const newName = args.slice(2).join(' ');
      if (!petId || !newName) { sendError(session.sessionId, '用法：pet rename <petId> <name>'); return; }
      const result = petMgr.renamePet(char.id, petId, newName);
      if (result.ok) sendSystem(session.sessionId, result.message);
      else sendError(session.sessionId, result.message);
      break;
    }
    default:
      // 無子命令，顯示簡略列表
      cmdPet(session, ['list']);
      break;
  }
}

function cmdTame(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法馴服寵物！');
    return;
  }

  // 找到當前房間可馴服的寵物類型
  const availablePets = Object.values(PET_DEFS).filter(d => d.tameZones.includes(char.roomId));
  if (availablePets.length === 0) {
    sendError(session.sessionId, '這個區域沒有可馴服的野生寵物。');
    return;
  }

  // 隨機選一個可馴服的寵物
  const targetPet = availablePets[Math.floor(Math.random() * availablePets.length)];
  const result = petMgr.tamePet(char.id, targetPet.id, char.roomId, char.level, char.classId);

  if (result.ok) {
    sendSystem(session.sessionId, result.message);
    unlockAppearance(char.id, 'portrait_pet_keeper');
    // 二轉任務：馴服寵物鉤子
    classQuest2Mgr.onPetTamed(char.id);
  } else {
    sendError(session.sessionId, result.message);
  }
}

// ─── 世界事件指令 ───

function cmdEvent(session: WsSession, args: string[]): void {
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

function cmdWeather(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  sendSystem(session.sessionId, weatherMgr.getStatusReport());
}

// ─── 郵件指令 ───

function cmdMail(session: WsSession, args: string[]): void {
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

function cmdEmote(session: WsSession, emoteStr: string): void {
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

function cmdFriend(session: WsSession, args: string[]): void {
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

function cmdTutorial(session: WsSession, args: string[]): void {
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

function cmdAuto(session: WsSession, args: string[]): void {
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

function cmdClassQuest2(session: WsSession, args: string[]): void {
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

function cmdSkillTree(session: WsSession, args: string[]): void {
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

function cmdMarket(session: WsSession, args: string[]): void {
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

function cmdGuild(session: WsSession, args: string[]): void {
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

function cmdSignin(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const result = dailyRewardMgr.signin(char.id, char);
  sendSystem(session.sessionId, result.message);
}

// ─── 工具函式 ───

function canAccessZone(char: Character, zoneId: string, grantWhenRequirementsMet = true): { ok: true } | { ok: false; message: string } {
  const zone = getZone(zoneId);
  if (!zone) return { ok: false, message: `未知區域：${zoneId}` };
  if (!zone.unlock) return { ok: true };
  if (isZoneUnlocked(char.id, zoneId)) return { ok: true };

  const unlock = zone.unlock;
  if (unlock.requiredLevel && char.level < unlock.requiredLevel) {
    return { ok: false, message: `${zone.name} 需要等級 ${unlock.requiredLevel} 才能進入。` };
  }
  if (unlock.requiredQuestId && !isQuestCompleted(char.id, unlock.requiredQuestId)) {
    return { ok: false, message: `${zone.name} 需要先完成任務 ${unlock.requiredQuestId}。` };
  }
  if (unlock.requiredItemId && !getInventory(char.id).some(item => item.itemId === unlock.requiredItemId && item.quantity > 0)) {
    const itemName = ITEM_DEFS[unlock.requiredItemId]?.name ?? unlock.requiredItemId;
    return { ok: false, message: `${zone.name} 需要持有 ${itemName}。` };
  }
  if (unlock.requiredZoneId && !isZoneUnlocked(char.id, unlock.requiredZoneId)) {
    const requiredZone = getZone(unlock.requiredZoneId);
    return { ok: false, message: `${zone.name} 需要先探索 ${requiredZone?.name ?? unlock.requiredZoneId}。` };
  }

  if (grantWhenRequirementsMet) {
    unlockZone(char.id, zoneId, 'requirements');
  }
  return { ok: true };
}

function findPortalZone(query: string): ZoneDef | undefined {
  const normalized = query.trim().toLowerCase();
  return Object.values(ZONES).find(zone => {
    if (!zone.portal) return false;
    return zone.id.toLowerCase() === normalized
      || zone.name.toLowerCase() === normalized
      || zone.portal.id.toLowerCase() === normalized
      || zone.portal.name.toLowerCase() === normalized;
  });
}

function getPortalCost(char: Character, zone: ZoneDef): number {
  if (!zone.portal) return 10 + zone.levelRange[0] * 3;
  if (zone.portal.cost === 0) return 0;
  if (char.level <= 10 && zone.levelRange[0] <= 10) return Math.min(zone.portal.cost, 5);
  return 10 + zone.levelRange[0] * 3;
}

function findTravelNode(query: string): TravelNodeDef | undefined {
  const normalized = normalizeCommandTarget(query);
  return getTravelNodes().find(node => {
    const zone = getZone(node.zoneId);
    return node.id.toLowerCase() === normalized
      || node.name.toLowerCase() === normalized
      || zone?.id.toLowerCase() === normalized
      || zone?.name.toLowerCase() === normalized;
  });
}

function getTravelNodesByActivationRoom(roomId: string): TravelNodeDef[] {
  return getTravelNodes().filter(node => node.requiresActivation && node.activateRoomId === roomId);
}

function canAccessTravelNode(
  char: Character,
  node: TravelNodeDef,
  grantWhenRequirementsMet = true,
): { ok: true } | { ok: false; message: string } {
  const zoneAccess = canAccessZone(char, node.zoneId, grantWhenRequirementsMet);
  if (!zoneAccess.ok) return zoneAccess;

  if (node.unlock?.requiredLevel && char.level < node.unlock.requiredLevel) {
    return { ok: false, message: `${node.name} 需要等級 ${node.unlock.requiredLevel} 才能使用。` };
  }
  if (node.unlock?.requiredQuestId && !isQuestCompleted(char.id, node.unlock.requiredQuestId)) {
    return { ok: false, message: `${node.name} 需要先完成任務 ${node.unlock.requiredQuestId}。` };
  }
  if (node.unlock?.requiredItemId && !getInventory(char.id).some(item => item.itemId === node.unlock?.requiredItemId && item.quantity > 0)) {
    const itemName = ITEM_DEFS[node.unlock.requiredItemId]?.name ?? node.unlock.requiredItemId;
    return { ok: false, message: `${node.name} 需要持有 ${itemName}。` };
  }

  return { ok: true };
}

function getTravelCostAmount(char: Character, node: TravelNodeDef): number {
  const zone = getZone(node.zoneId);
  if (!zone) return 0;
  const base = getPortalCost(char, zone);
  if (node.cost.type === 'gold') {
    if (node.cost.amount !== undefined) {
      if (char.level <= 10 && zone.levelRange[0] <= 10) return Math.min(node.cost.amount, 5);
      return node.kind === 'zone_entrance' ? 10 + zone.levelRange[0] * 3 : node.cost.amount;
    }
    return Math.ceil(base * (node.cost.multiplier ?? 1));
  }
  if (node.cost.type === 'kingdom_treasury') return node.cost.amount;
  if (node.cost.type === 'item') return node.cost.quantity;
  return base;
}

function formatTravelCost(char: Character, node: TravelNodeDef): string {
  const amount = getTravelCostAmount(char, node);
  if (node.cost.type === 'kingdom_treasury') return `${amount} 王國國庫金幣`;
  if (node.cost.type === 'item') {
    const itemName = ITEM_DEFS[node.cost.itemId]?.name ?? node.cost.itemId;
    return `${amount} 個 ${itemName}`;
  }
  return `${amount} 金幣`;
}

function payTravelCost(char: Character, node: TravelNodeDef): { ok: true; message: string } | { ok: false; message: string } {
  const amount = getTravelCostAmount(char, node);
  if (amount <= 0) return { ok: true, message: '未花費金幣。' };

  if (node.cost.type === 'kingdom_treasury') {
    const member = getMemberKingdom(char.id);
    if (!member) return { ok: false, message: '你不是王國成員，無法使用王國交通。' };
    const kingdom = getKingdomById(member.kingdom_id);
    if (!kingdom || kingdom.treasury_gold < amount) {
      return { ok: false, message: `王國國庫不足。需要 ${amount} 金幣。` };
    }
    updateKingdom(member.kingdom_id, { treasury_gold: kingdom.treasury_gold - amount });
    return { ok: true, message: `消耗王國國庫 ${amount} 金幣。` };
  }

  if (node.cost.type === 'item') {
    const itemCost = node.cost;
    const hasItem = getInventory(char.id).some(item => item.itemId === itemCost.itemId && item.quantity >= amount);
    if (!hasItem) {
      const itemName = ITEM_DEFS[itemCost.itemId]?.name ?? itemCost.itemId;
      return { ok: false, message: `缺少 ${amount} 個 ${itemName}。` };
    }
    removeInventoryItem(char.id, itemCost.itemId, amount);
    const itemName = ITEM_DEFS[itemCost.itemId]?.name ?? itemCost.itemId;
    return { ok: true, message: `消耗 ${amount} 個 ${itemName}。` };
  }

  if (char.gold < amount) {
    return { ok: false, message: `金幣不足。需要 ${amount} 金幣。` };
  }
  char.gold -= amount;
  recordGoldSpent(amount);
  return { ok: true, message: `花費 ${amount} 金幣。` };
}

function canTravelFromCurrentRoom(char: Character, node: TravelNodeDef): { ok: true } | { ok: false; message: string } {
  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  if (!room || !zone) return { ok: true };

  const isPvpDangerZone = zone.pvpMode === 'open' || zone.pvpMode === 'faction' || zone.pvpMode === 'kingdom_war';
  if (!isPvpDangerZone) return { ok: true };

  const safeEntryRoom = zone.rooms[0];
  const safeExit = room.id === safeEntryRoom || node.kind === 'danger_evac';
  if (safeExit) return { ok: true };

  const contestedRoom = zone.tags.includes('resource_war')
    || zone.tags.includes('world_boss')
    || !!room.monsters?.length
    || !!room.groundItems?.length;
  if (contestedRoom) {
    return { ok: false, message: 'PvP 爭奪、資源或 Boss 區域不能直接傳送離開。請撤回安全入口或使用危險撤離點。' };
  }

  return { ok: true };
}

function getTravelCooldownRemaining(characterId: string): number {
  const readyAt = travelCooldowns.get(characterId);
  if (!readyAt) return 0;
  const remainingMs = readyAt - Date.now();
  if (remainingMs <= 0) {
    travelCooldowns.delete(characterId);
    return 0;
  }
  return Math.ceil(remainingMs / 1000);
}

function setTravelCooldown(characterId: string, cooldownSeconds: number): void {
  if (cooldownSeconds <= 0) return;
  travelCooldowns.set(characterId, Date.now() + cooldownSeconds * 1000);
}

function normalizeCommandTarget(target: string): string {
  return target.trim().toLowerCase();
}

function findGroundItem(roomId: string, target: string): GroundItem | undefined {
  const lower = normalizeCommandTarget(target);
  return getAvailableGroundItems(roomId).find(groundItem => {
    const def = ITEM_DEFS[groundItem.itemId];
    return groundItem.itemId.toLowerCase() === lower
      || def?.name === target
      || !!def?.name.toLowerCase().includes(lower);
  });
}

function findExit(room: RoomDef, target: string): RoomExit | undefined {
  const lower = normalizeCommandTarget(target);
  const directionByChinese: Record<string, string> = {
    北: 'north', 南: 'south', 東: 'east', 西: 'west', 上: 'up', 下: 'down',
    north: 'north', south: 'south', east: 'east', west: 'west', up: 'up', down: 'down',
  };
  const direction = directionByChinese[target] ?? directionByChinese[lower];
  return room.exits.find(exit => {
    if (direction && exit.direction === direction) return true;
    return exit.targetRoomId.toLowerCase() === lower
      || !!exit.description?.toLowerCase().includes(lower);
  });
}

function sendSearchSummary(session: WsSession, room: RoomDef): void {
  const lines: string[] = [];
  const exits = room.exits.map(exit => `${directionChinese(exit.direction)}${exit.locked ? '(鎖)' : ''}`);
  if (exits.length > 0) lines.push(`出口：${exits.join('、')}`);

  const groundItems = getAvailableGroundItems(room.id);
  if (groundItems.length > 0) {
    const itemNames = groundItems.map(groundItem => ITEM_DEFS[groundItem.itemId]?.name ?? groundItem.itemId);
    lines.push(`可撿取物：${itemNames.join('、')}`);
  }

  const npcs = getNpcsByRoom(room.id);
  if (npcs.length > 0) lines.push(`NPC：${npcs.map(npc => npc.name).join('、')}`);

  const monsters = world.getAliveMonsters(room.id);
  if (monsters.length > 0) lines.push(`怪物：${monsters.map(monster => monster.def.name).join('、')}`);

  const corpses = corpseMgr.getCorpses(room.id);
  if (corpses.length > 0) {
    lines.push(`屍體：${corpses.map(corpse => `${corpse.monsterName}${corpse.gold <= 0 && corpse.items.length === 0 ? '(空)' : ''}`).join('、')}`);
  }

  if (lines.length === 0) {
    sendSystem(session.sessionId, '你仔細搜尋四周，暫時沒有找到可互動的物件。');
    return;
  }

  sendSystem(session.sessionId, '── 搜尋結果 ──');
  for (const line of lines) sendSystem(session.sessionId, line);
  sendSystem(session.sessionId, '可用 inspect <目標> 查看細節，或 open <目標> 嘗試開啟。');
}

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
