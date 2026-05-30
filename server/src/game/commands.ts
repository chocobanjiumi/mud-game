// 指令解析器與路由

import type { WsSession } from '../ws/handler.js';
import {
  sendNarrative, sendSystem, sendError, sendToSession,
  getSessionByCharacterId, getAllSessions, broadcast, broadcastToRoom,
} from '../ws/handler.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getInventory, getLearnedSkills, learnSkill, forgetSkill, upgradeSkill,
  addInventoryItem, removeInventoryItem, setEquipped,
  getEquippedItems,
  getUnlockedPortals, isPortalUnlocked, isQuestCompleted,
  isZoneUnlocked, unlockPortal, unlockZone,
  getDiscoveryCount, getDiscoveryTotalCount, hasDiscovery, recordDiscovery,
  getMemberKingdom, getKingdomById, updateKingdom,
  getCharacterAliases, setCharacterAlias, deleteCharacterAlias, clearCharacterAliases,
  clearGroundItemPickup, getGroundItemRespawnAt, PERMANENT_GROUND_ITEM_PICKUP, setGroundItemRespawnAt,
} from '../db/queries.js';
import {
  ITEM_DEFS, SKILL_DEFS, CLASS_DEFS, WEAPON_TYPE_DEFS,
  calculateMaxHp, calculateMaxMp,
  calculateAtk, calculateMatk, calculateDef, calculateMdef,
  calculateCritRate, calculateDodgeRate, calculateHitRate,
  calculateCritDamage,
  FAITH_DEFS, GENDER_DEFS, RACE_DEFS,
  DEFAULT_FAITH_ID, DEFAULT_GENDER_ID, DEFAULT_RACE_ID,
  isFaithId,
  applySkillUpgradeRule,
  getSkillMaxLevel,
  getSkillPointSummary,
  getSkillUpgradeCost,
  getSkillUpgradeDeltas,
  getSkillUpgradeRequiredLevel,
  isTwoHandWeapon,
  resolveEquipSlotForItem,
  canClassUseMount,
  deriveMountStats,
  getMountDef,
  COMMAND_METADATA,
  COMMAND_CATEGORY_TITLES,
} from '@game/shared';
import type { Character, ClassId, CombatLoot, DialogueNode, DialogueOption, FaithId, MonsterDef, NpcDef, RoomDef, RoomExit, RoomPayload, SkillTag, StatusEffect, StatusEffectType, TravelNodeDef, ZoneDef } from '@game/shared';
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
import { getRoom, getRoomsByZone, getZone, ROOMS, ZONES, getRoomByWorldCoord, getRoomWorldCoord } from '../data/rooms.js';
import { buildInstanceEntryDefs, type InstanceEntryDef, type InstanceEntryQuestState } from '../data/world-map2-plan.js';
import { canFollowFaithAtRoom, getFaithAltar, getFaithAltarByRoomId } from '../data/faith-altars.js';
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

type CombatAttackMode = 'melee' | 'ranged';
import { BUILDING_TYPE_NAMES, NPC_TYPE_NAMES } from './kingdom-building.js';
import { getPveRespawnRoomId } from './death-respawn.js';
import { upgradeItem, getUpgradeInfo } from './upgrade.js';
import { disassembleEquipment, lockItemAffix, reforgeItemQuality, rerollItemAffix } from './item-reforge.js';
import { CRAFTING_CATEGORIES, type CraftingCategory, type CraftingOptions } from './crafting.js';
import { recordGoldProduced, recordGoldSpent } from './economy-stats.js';
import { INVENTORY_SLOT_CAPACITY, getCarriedKingdomResourceItemIds, getInventorySlotLoad } from './inventory-capacity.js';
import { beginPvpDangerEvacCast } from './pvp-evac-cast.js';
import { getPvpTravelLockRemainingSeconds } from './pvp-travel-lock.js';
import { buildOrdinalLabels, buildRoomEntities, type RoomEntityPlayer } from './room-entities.js';
import { buildNearbyCombatPayload } from './nearby-combat.js';
import { applyShopBuyOriginDiscount, applyTravelGoldOriginDiscount } from './origin-effects.js';
import { MAIN_QUEST_FLOW } from './main-quest-flow.js';
import { QUEST_DEFS } from './quest.js';
import { EXPANDED_QUEST_DEFS } from './quest-system.js';
import { addExperienceToCharacter, expRequiredForLevel, getLevelExpProgress } from './leveling.js';
import { grantAndNotifyLearnableSkills, removeLegacyAdventurerSkills } from './skill-learning.js';
import { applyFieldSkillEffect } from './field-skill-effects.js';
import { getModifiedSkillRuntime, getResourceAffixBonus, getSkillAffixModifiers } from './equipment-affixes.js';
import { addRewardItemToInventory, formatRewardEntry } from './item-instance-rewards.js';
import { applySkillResourceChange, checkSkillResource } from './skill-resource.js';
import { applyHpRecovery, applyResourceRecovery } from './recovery.js';
import { resolveMountedIntercept, selectMountedInterceptTarget } from './mounted-intercept.js';
import { applyLowLevelExpPenalty, formatExpPenaltyMessage, getHighLevelCombatPenalty } from './level-scaling.js';
import { buildRoomMapLayerLookup, formatMapLayerName, inferMapLayerFromCoordinates } from './map-layer.js';
import { applyInventoryHandlingBonus } from './passive-skill-effects.js';
import { CorpseManager, LootCalculator, getLootAnnouncementScope } from './loot.js';
import { BUILTIN_COMMANDS, MAX_ALIAS_EXPANSION_DEPTH, SYSTEM_ALIASES, resolveAliasExpansion } from './alias.js';
import { formatDialogueOptionLabel } from './dialogue-option-labels.js';
const lootCalc = new LootCalculator();
const corpseMgr = new CorpseManager();
import type { LootDistributionMode } from './party.js';
import type { MonsterInstance } from './world.js';
import type { KingdomRank, BuildingType, KingdomNpcType, Direction, EquipSlot, GroundItem } from '@game/shared';
import {
  cmdAttack, cmdSkill, cmdSkillUpgrade, cmdDefend, cmdEscape,
  cmdMount, cmdMountedCharge, cmdMounted, cmdMountedIntercept,
} from './commands/cmd-combat.js';
import { cmdInspect } from './commands/cmd-inspect.js';
import {
  cmdAchievement, cmdAppearance, cmdCodex, cmdLeaderboard,
  cmdPet, cmdTame, cmdTitle,
} from './commands/cmd-player-systems.js';
import {
  cmdAuto, cmdClassQuest2, cmdEmote, cmdEvent, cmdFriend, cmdGuild,
  cmdMail, cmdMarket, cmdSignin, cmdSkillTree, cmdTutorial, cmdWeather,
} from './commands/cmd-social-systems.js';
import {
  cmdAppoint, cmdArmy, cmdBounty, cmdBuild, cmdDemote, cmdDiplomacy,
  cmdKick, cmdKingdom, cmdMob, cmdNpc, cmdTreasury, cmdWar,
} from './commands/cmd-kingdom-systems.js';
import {
  cmdAuction, cmdCraft, cmdDisassemble, cmdFish, cmdLock,
  cmdReforge, cmdReroll, cmdUpgrade,
} from './commands/cmd-item-systems.js';
import {
  checkInstanceEntryRequirements,
  cmdArena, cmdDuel, cmdDungeon, cmdEnterInstanceEntry, cmdParty,
  cmdQuest, cmdTrade, getInstanceEntryCooldownRemainingSeconds,
  parseInstanceEntryTarget, startNpcDialogueInstanceEntry, tryUseInstanceEntryItem,
} from './commands/cmd-group-systems.js';
import {
  cmdAsk, cmdClassChange, cmdClassQuest, cmdGuardian,
} from './commands/cmd-class-systems.js';
import {
  cmdGo, cmdLook, cmdSearch, cmdStatus,
} from './commands/cmd-world-systems.js';
import {
  cmdActivate, cmdMap, cmdPortals, cmdRecall, cmdRest, cmdTravel,
} from './commands/cmd-travel-systems.js';
import {
  cmdDrop, cmdEquip, cmdInventory, cmdLoot, cmdSkills, cmdTake, cmdUnequip, cmdUse, sendInventoryPayload,
} from './commands/cmd-inventory-systems.js';
import {
  activeDialogues,
  broadcastRoomState,
  buildRoomInspectHints,
  buildLocalMapPayload,
  buildRoomPayload,
  canAccessTravelNode,
  canAccessZone,
  canTravelFromCurrentRoom,
  canUseInventoryRestrictedTravel,
  canUseKingdomCargoRestrictedTravel,
  canUsePvpDamageRestrictedTravel,
  clearLocalScouts,
  directionChinese,
  findExit,
  findGroundItem,
  findPortalZone,
  findTravelNode,
  formatTravelCost,
  getAvailableGroundItems,
  getChar,
  getTravelCooldownRemaining,
  getTravelNodesByActivationRoom,
  hasLocalScout,
  isCorpseEmptyForCharacter,
  isRemovedVerticalDirection,
  markGroundItemPicked,
  normalizeCommandTarget,
  payTravelCost,
  recordLocalScout,
  scheduleCorpseExpiry,
  sendCharacterStatus,
  sendQuestUpdate,
  sendSearchSummary,
  setPendingHunterMark,
  setTravelCooldown,
  shouldShowCorpseToCharacter,
  getInstanceEntryAvailability,
  updateExplorationAchievements,
} from './commands/cmd-helpers.js';
import { createCommandRegistry, listCommandCategories, type CommandDefinition } from './commands/registry.js';

// ─── 指令路由 ───

/** 主要指令處理入口 */
export function handleCommand(session: WsSession, input: string, aliasDepth = 0): void {
  const trimmed = input.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  const argStr = args.join(' ');

  const aliasExpanded = expandAlias(session, cmd, aliasDepth);
  if (aliasExpanded) {
    if (aliasDepth >= MAX_ALIAS_EXPANSION_DEPTH) {
      sendError(session.sessionId, 'Alias 展開層數過深，請檢查是否有循環 alias。');
      return;
    }
    const rest = argStr ? ` ${argStr}` : '';
    return handleCommand(session, `${aliasExpanded}${rest}`, aliasDepth + 1);
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
          if (numChoice >= 1 && numChoice <= active.options.length) {
            const chosen = active.options[numChoice - 1];
            const lock = getDialogueOptionLockReason(npc, chosen, char);
            if (lock) {
              sendError(session.sessionId, `「${chosen.text}」目前無法選擇：${lock}`);
              return;
            }
            showDialogueNode(session, npc, chosen.nextId);
            questMgr.updateProgress(char.id, 'talk', npc.id);
            return;
          }
        }
      }
    }
  }

  const command = COMMAND_REGISTRY.byName.get(cmd);
  if (!command) {
    sendError(session.sessionId, `未知指令：${cmd}。輸入 help 查看可用指令。`);
    return;
  }

  command.handler(session, { cmd, args, argStr, input: trimmed });
}

// ─── 基本指令 ───

function expandAlias(session: WsSession, cmd: string, aliasDepth: number): string | null {
  const char = getChar(session);
  return resolveAliasExpansion(cmd, char ? getCharacterAliases(char.id) : {});
}

function cmdAlias(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) {
    sendError(session.sessionId, '需要先登入角色才能設定 alias。');
    return;
  }

  if (args.length === 0) {
    const playerAliases = getCharacterAliases(char.id);
    sendSystem(session.sessionId, '═══ 指令別名 ═══');
    const merged = { ...SYSTEM_ALIASES, ...playerAliases };
    for (const [alias, command] of Object.entries(merged).sort(([a], [b]) => a.localeCompare(b))) {
      const source = playerAliases[alias] ? '自訂' : '預設';
      sendSystem(session.sessionId, `  ${alias.padEnd(12)} => ${command} (${source})`);
    }
    return;
  }

  if (args[0].toLowerCase() === 'reset') {
    clearCharacterAliases(char.id);
    sendSystem(session.sessionId, '已清除所有自訂 alias，恢復預設別名。');
    cmdStatus(session);
    return;
  }

  if (args.length < 2) {
    sendError(session.sessionId, '用法：alias <名稱> <指令>，或 alias reset');
    return;
  }

  const alias = args[0].trim().toLowerCase();
  const command = args.slice(1).join(' ').trim();
  if (!alias || /\s/.test(alias)) {
    sendError(session.sessionId, 'Alias 名稱不能包含空白。');
    return;
  }
  if (BUILTIN_COMMANDS.has(alias)) {
    sendError(session.sessionId, `「${alias}」是系統指令，不能設為 alias。`);
    return;
  }
  if (!command) {
    sendError(session.sessionId, 'Alias 展開指令不能是空白。');
    return;
  }

  setCharacterAlias(char.id, alias, command);
  sendSystem(session.sessionId, `已設定 alias：${alias} => ${command}`);
  cmdStatus(session);
}

function cmdUnalias(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) {
    sendError(session.sessionId, '需要先登入角色才能刪除 alias。');
    return;
  }
  const alias = args[0]?.trim().toLowerCase();
  if (!alias) {
    sendError(session.sessionId, '用法：unalias <名稱>');
    return;
  }

  if (deleteCharacterAlias(char.id, alias)) {
    sendSystem(session.sessionId, `已刪除 alias：${alias}`);
    cmdStatus(session);
  } else if (SYSTEM_ALIASES[alias]) {
    sendSystem(session.sessionId, `「${alias}」是預設 alias，無需刪除。`);
  } else {
    sendError(session.sessionId, `找不到自訂 alias「${alias}」。`);
  }
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

function cmdDebug(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();

  if (sub === 'tp') {
    const targetRoomId = args[1];
    if (!targetRoomId) {
      sendError(session.sessionId, 'debug tp <roomId>');
      return;
    }
    const destination = getRoom(targetRoomId);
    if (!destination) {
      sendError(session.sessionId, `找不到房間：${targetRoomId}`);
      return;
    }
    const prev = char.roomId;
    char.roomId = destination.id;
    world.placePlayer(char.id, destination.id);
    saveCharacter(char);
    sendSystem(session.sessionId, `傳送：${prev} → ${destination.id}（${destination.name}）`);
    cmdLook(session);
    return;
  }

  if (sub !== 'levelup') {
    sendError(session.sessionId, 'Debug 指令：debug levelup | debug tp <roomId>');
    return;
  }

  const neededExp = Math.max(1, expRequiredForLevel(char.level + 1) - char.exp);
  const beforeLevel = char.level;
  const { expGained, levelsGained } = addExperienceToCharacter(char, neededExp);
  for (let i = 0; i < levelsGained; i++) skillTreeMgr.grantPoint(char.id, char);
  if (levelsGained > 0) grantAndNotifyLearnableSkills(char);
  saveCharacter(char);

  if (char.level > beforeLevel) {
    sendToSession(session.sessionId, 'level_up', { level: char.level });
    sendSystem(session.sessionId, `Debug 升級：Lv.${beforeLevel} → Lv.${char.level}（經驗 +${expGained}）`);
  } else {
    sendSystem(session.sessionId, `Debug 經驗：+${expGained}`);
  }
  sendCharacterStatus(session.sessionId, char);
}

function cmdFaith(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const sub = args[0]?.toLowerCase();
  if (!sub || sub === 'info' || sub === 'status') {
    sendFaithInfo(session, char);
    return;
  }

  if (sub === 'list') {
    sendSystem(session.sessionId, '── 可信仰神祗 ──');
    for (const faith of Object.values(FAITH_DEFS)) {
      const altar = getFaithAltar(faith.id);
      const discovered = hasDiscovery(char.id, 'visit_room', altar.roomId) || char.roomId === altar.roomId;
      const location = discovered ? `${altar.zoneHint}「${altar.locationHint}」` : `${altar.zoneHint}一帶`;
      sendSystem(session.sessionId, `  ${faith.id.padEnd(8)} ${faith.name}・${faith.title} - ${faith.passiveName}；祭壇：${location}`);
    }
    sendSystem(session.sessionId, '使用 faith follow <神祗ID或名稱> 可在對應祭壇改信。改信會清空恩寵並進入祈禱冷卻。');
    return;
  }

  if (sub === 'pray') {
    const target = args.slice(1).join(' ');
    const targetFaithId = target ? resolveFaithId(target) : (char.faithId ?? DEFAULT_FAITH_ID);
    if (!targetFaithId) {
      sendError(session.sessionId, '找不到該神祗。使用 faith list 查看可選信仰。');
      return;
    }
    if (targetFaithId !== (char.faithId ?? DEFAULT_FAITH_ID)) {
      sendError(session.sessionId, '目前只能向自己的信仰祈禱。改信可使用 faith follow <神祗>。');
      return;
    }
    prayToFaith(session, char);
    return;
  }

  if (sub === 'offering') {
    cmdOffering(session, args.slice(1));
    return;
  }

  if (sub === 'renounce') {
    renounceFaith(session, char);
    return;
  }

  if (sub === 'follow' || sub === 'choose') {
    const target = args.slice(1).join(' ');
    const faithId = resolveFaithId(target);
    if (!faithId) {
      sendError(session.sessionId, '找不到該神祗。使用 faith list 查看可選信仰。');
      return;
    }
    changeFaith(session, char, faithId);
    return;
  }

  sendSystem(session.sessionId, '信仰指令：faith / faith list / faith pray / faith offering <金幣> / faith follow <神祗> / faith renounce');
}

function sendFaithInfo(session: WsSession, char: Character): void {
  const race = RACE_DEFS[char.raceId ?? DEFAULT_RACE_ID];
  const gender = GENDER_DEFS[char.genderId ?? DEFAULT_GENDER_ID];
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const cooldown = getFaithCooldownRemaining(char);

  sendSystem(session.sessionId, `── ${char.name} 的出身與信仰 ──`);
  sendSystem(session.sessionId, `種族：${race.name} - ${race.passiveName}：${race.passiveDescription}`);
  sendSystem(session.sessionId, `性別：${gender.name}`);
  sendSystem(session.sessionId, `信仰：${faith.name}・${faith.title}`);
  sendSystem(session.sessionId, `被動：${faith.passiveName}：${faith.passiveDescription}`);
  sendSystem(session.sessionId, `祈禱：${faith.prayerName}：${faith.prayerDescription}`);
  sendSystem(session.sessionId, `恩寵：${char.faithFavor ?? 0}/100${cooldown > 0 ? `；祈禱冷卻 ${formatDuration(cooldown)}` : ''}`);
  const altar = getFaithAltar(faith.id);
  sendSystem(session.sessionId, `改信：需前往對應祭壇；目前信仰祭壇位置為 ${faith.name}・${faith.title}：${altar.zoneHint}「${altar.locationHint}」。`);
}

function prayToFaith(session: WsSession, char: Character): void {
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const cooldown = getFaithCooldownRemaining(char);
  if (cooldown > 0) {
    sendError(session.sessionId, `祈禱尚在冷卻中，剩餘 ${formatDuration(cooldown)}。`);
    return;
  }
  const favorCost = 10;
  if ((char.faithFavor ?? 0) < favorCost) {
    sendError(session.sessionId, `恩寵不足。祈禱需要 ${favorCost} 恩寵，可用 offering <金幣> 獻祭提高恩寵。`);
    return;
  }

  const hpRestore = Math.max(1, Math.floor(char.maxHp * (faith.id === 'aelora' ? 0.25 : 0.12)));
  const mpRestore = Math.max(1, Math.floor(char.maxMp * (faith.id === 'ithern' || faith.id === 'nesha' ? 0.2 : 0.08)));
  const resourceRestore = Math.max(1, Math.floor(char.maxResource * (faith.id === 'karvos' ? 0.2 : 0.08)));
  char.hp = Math.min(char.maxHp, char.hp + hpRestore);
  char.mp = Math.min(char.maxMp, char.mp + mpRestore);
  char.resource = Math.min(char.maxResource, char.resource + resourceRestore);
  char.faithFavor = Math.max(0, (char.faithFavor ?? 0) - favorCost);
  char.faithCooldownUntil = Date.now() + 10 * 60 * 1000;
  saveCharacter(char);

  sendSystem(session.sessionId, `你向${faith.name}祈禱，消耗 ${favorCost} 恩寵並獲得「${faith.prayerName}」。HP +${hpRestore}，MP +${mpRestore}，資源 +${resourceRestore}。`);
  cmdStatus(session);
}

function changeFaith(session: WsSession, char: Character, faithId: FaithId): void {
  const current = char.faithId ?? DEFAULT_FAITH_ID;
  if (current === faithId) {
    sendFaithInfo(session, char);
    return;
  }

  const next = FAITH_DEFS[faithId];
  if (!canFollowFaithAtRoom(char.roomId, faithId)) {
    const currentFaith = FAITH_DEFS[current];
    const altar = getFaithAltar(faithId);
    sendError(
      session.sessionId,
      `改信必須在對應祭壇完成。你目前信仰是${currentFaith.name}・${currentFaith.title}，若要改信${next.name}・${next.title}，請前往${altar.zoneHint}「${altar.locationHint}」。${altar.dangerNote}`,
    );
    return;
  }

  forgetSkill(char.id, FAITH_DEFS[current].passiveSkillId);
  learnSkill(char.id, next.passiveSkillId);
  char.faithId = faithId;
  char.faithFavor = 0;
  char.faithCooldownUntil = Date.now() + 60 * 60 * 1000;
  saveCharacter(char);

  const altar = getFaithAltar(faithId);
  sendSystem(session.sessionId, `你在${altar.locationHint}改信${next.name}・${next.title}。既有恩寵歸零，祈禱進入 1 小時冷卻。`);
  sendSystem(session.sessionId, `新的被動：${next.passiveName}：${next.passiveDescription}`);
  cmdStatus(session);
}

function cmdOffering(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  const amount = parseInt(args[0] ?? '', 10);
  if (!Number.isFinite(amount) || amount <= 0) {
    sendError(session.sessionId, '用法：offering <金幣數量>');
    return;
  }
  if (char.gold < amount) {
    sendError(session.sessionId, '金幣不足，無法獻祭。');
    return;
  }

  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  const favorGain = Math.max(1, Math.min(20, Math.floor(amount / 50)));
  char.gold -= amount;
  char.faithFavor = Math.min(100, (char.faithFavor ?? 0) + favorGain);
  saveCharacter(char);

  sendSystem(session.sessionId, `你向${faith.name}獻上 ${amount} 金幣。恩寵 +${favorGain}，目前 ${char.faithFavor}/100。`);
  cmdStatus(session);
}

function cmdRenounce(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;

  if ((args[0] ?? '').toLowerCase() !== 'faith') {
    sendError(session.sessionId, '用法：renounce faith');
    return;
  }

  renounceFaith(session, char);
}

function renounceFaith(session: WsSession, char: Character): void {
  const faith = FAITH_DEFS[char.faithId ?? DEFAULT_FAITH_ID];
  forgetSkill(char.id, faith.passiveSkillId);
  learnSkill(char.id, FAITH_DEFS[DEFAULT_FAITH_ID].passiveSkillId);
  char.faithId = DEFAULT_FAITH_ID;
  char.faithFavor = 0;
  char.faithCooldownUntil = Date.now() + 60 * 60 * 1000;
  saveCharacter(char);

  sendSystem(session.sessionId, `你放棄了${faith.name}的信仰。恩寵歸零，祈禱進入 1 小時冷卻。`);
  if (faith.id !== DEFAULT_FAITH_ID) {
    sendSystem(session.sessionId, `你暫時回到${FAITH_DEFS[DEFAULT_FAITH_ID].name}的庇護之下，可用 faith follow <神祗> 改信。`);
  }
  cmdStatus(session);
}

function resolveFaithId(input: string): FaithId | null {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return null;
  if (isFaithId(normalized)) return normalized;
  return Object.values(FAITH_DEFS).find((faith) => (
    faith.name.toLowerCase() === normalized
    || faith.title.toLowerCase() === normalized
    || `${faith.name}${faith.title}`.toLowerCase() === normalized
  ))?.id ?? null;
}

function getFaithCooldownRemaining(char: Character): number {
  return Math.max(0, (char.faithCooldownUntil ?? 0) - Date.now());
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes <= 0) return `${seconds} 秒`;
  return `${minutes} 分 ${seconds.toString().padStart(2, '0')} 秒`;
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

export function mainQuestVirtualNodeId(kind: 'start' | 'active' | 'complete', questId: string): string {
  return `__mainquest_${kind}:${questId}`;
}

export function resolveDialogueNode(npc: NpcDef, nodeId: string): DialogueNode | undefined {
  const virtual = /^__mainquest_(start|active|complete):(.+)$/.exec(nodeId);
  if (!virtual) return npc.dialogue.find(d => d.id === nodeId);

  const [, kind, questId] = virtual;
  const entry = MAIN_QUEST_FLOW.find(flow => flow.questId === questId);
  if (!entry) return undefined;
  if (kind === 'start' && entry.acceptNpcId === npc.id) {
    return {
      id: nodeId,
      text: entry.offerText,
      action: { type: 'quest_start', data: { questId } },
    };
  }
  if (kind === 'complete' && entry.turnInNpcId === npc.id) {
    return {
      id: nodeId,
      text: entry.completeText,
      action: { type: 'quest_complete', data: { questId } },
    };
  }
  if (kind === 'active' && (entry.acceptNpcId === npc.id || entry.turnInNpcId === npc.id)) {
    return {
      id: nodeId,
      text: entry.activeText,
    };
  }
  return undefined;
}

export function buildDialogueOptions(npc: NpcDef, node: DialogueNode, char: Character | null): DialogueOption[] {
  const baseOptions = (node.options ?? []).filter(option => isDialogueOptionVisible(option, char));
  if (!char || npc.dialogue[0]?.id !== node.id) return baseOptions;

  const questOptions: DialogueOption[] = [];
  for (const entry of MAIN_QUEST_FLOW) {
    const status = questMgr.getQuestStatus(char, entry.questId);
    if (status === 'ready' && entry.turnInNpcId === npc.id) {
      questOptions.push({
        text: entry.turnInOptionText,
        nextId: mainQuestVirtualNodeId('complete', entry.questId),
      });
    } else if (status === 'active' && (entry.acceptNpcId === npc.id || entry.turnInNpcId === npc.id)) {
      questOptions.push({
        text: '詢問目前任務進度',
        nextId: mainQuestVirtualNodeId('active', entry.questId),
      });
    } else if (status === 'available' && entry.acceptNpcId === npc.id) {
      questOptions.push({
        text: entry.startOptionText,
        nextId: mainQuestVirtualNodeId('start', entry.questId),
      });
    }
  }

  return [...questOptions, ...baseOptions];
}

function isDialogueOptionVisible(option: DialogueOption, char: Character | null): boolean {
  const condition = option.condition;
  if (!condition) return true;
  if (!char) return false;
  switch (condition.type as string) {
    case 'level':
      return char.level >= Number(condition.value);
    case 'class':
      return char.classId === String(condition.value);
    case 'gold':
      return char.gold >= Number(condition.value);
    case 'quest':
    case 'questCompleted':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'completed';
    case 'questAvailable':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'available';
    case 'questActive':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'active';
    case 'questReadyToComplete':
      return questMgr.getQuestStatus(char, String(condition.value)) === 'ready';
    case 'item':
      return getInventory(char.id).some(item => item.itemId === String(condition.value) && item.quantity > 0);
    default:
      return true;
  }
}

function showDialogueNode(session: WsSession, npc: NpcDef, nodeId: string): void {
  const char = getChar(session);
  const node = resolveDialogueNode(npc, nodeId);
  if (!node) {
    sendSystem(session.sessionId, `${npc.name}沉默了。`);
    activeDialogues.delete(session.sessionId);
    return;
  }

  // 執行 action
  if (node.action) {
    if (char) {
      switch (node.action.type) {
        case 'shop':
          sendNpcShopListing(session, char, npc);
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
            if (result.success) {
              tutorialMgr.advanceStep(char.id, 'quest');
            }
            sendQuestUpdate(session, result.success ? 'accepted' : 'sync');
          }
          break;
        }
        case 'quest_complete': {
          const questId = node.action.data?.questId as string;
          if (questId) {
            const result = questMgr.completeQuest(char.id, questId, char);
            sendSystem(session.sessionId, result.message);
            if (result.rewards) {
              saveCharacter(char);
            }
            sendQuestUpdate(session, result.success ? 'completed' : 'sync');
          }
          break;
        }
        case 'instance_entry': {
          const entryId = node.action.data?.entryId as string;
          if (entryId && startNpcDialogueInstanceEntry(session, char, npc, entryId)) {
            return;
          }
          break;
        }
      }
    }
  }

  const options = buildDialogueOptions(npc, node, char);
  const optionPayloads = options.map((option, index) => {
    const lock = getDialogueOptionLockReason(npc, option, char);
    const nextNode = resolveDialogueNode(npc, option.nextId);
    const label = formatDialogueOptionLabel(npc, node, option, index, nextNode);
    return {
      index: index + 1,
      text: label,
      command: `talk ${npc.id} ${index + 1}`,
      disabled: Boolean(lock),
      disabledReason: lock,
    };
  });
  let dialogueText = `【${npc.name}】：${node.text}`;
  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      const lock = optionPayloads[i]?.disabledReason;
      dialogueText += `\n  ${i + 1}. ${optionPayloads[i]?.text ?? options[i].text}${lock ? `（鎖定：${lock}）` : ''}`;
    }
    // 記錄對話狀態
    activeDialogues.set(session.sessionId, { npcId: npc.id, nodeId, options });
  } else {
    // 沒有選項，對話結束
    activeDialogues.delete(session.sessionId);
  }
  if (node.action?.type === 'shop' && char) {
    sendInventoryPayload(session, char);
  }
  sendToSession(session.sessionId, 'npc_dialogue' as any, {
    npcId: npc.id,
    npcName: npc.name,
    npcTitle: npc.title,
    npcType: npc.type,
    nodeId: node.id,
    text: node.text,
    options: optionPayloads,
    shopItems: node.action?.type === 'shop' && char ? buildNpcShopItems(char, npc) : undefined,
  });
  sendNarrative(session.sessionId, dialogueText, 'npc');
}

function getDialogueOptionLockReason(npc: NpcDef, option: DialogueOption, char: Character | null): string | undefined {
  if (!char) return undefined;
  const nextNode = resolveDialogueNode(npc, option.nextId);
  if (nextNode?.action?.type !== 'instance_entry') return undefined;
  const entryId = nextNode.action.data?.entryId as string | undefined;
  if (!entryId) return '此對話選項缺少副本入口資料。下一步：補上 dialogue action 的 entryId。';
  const entry = buildInstanceEntryDefs(ZONES).find(candidate => candidate.id === entryId);
  if (!entry) return `副本入口「${entryId}」不存在。下一步：補上 InstanceEntryDef 後再對話。`;
  if (entry.npcId && entry.npcId !== npc.id) return `此入口綁定 NPC「${entry.npcId}」，不是目前 NPC。下一步：尋找正確 NPC。`;
  if (entry.roomId !== char.roomId) {
    const requiredRoomName = getRoom(entry.roomId)?.name ?? entry.roomId;
    return `需要在「${requiredRoomName}」啟動。下一步：前往指定入口房間後再對話。`;
  }
  const availability = getInstanceEntryAvailability(char, entry);
  return availability.ok ? undefined : availability.message;
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
    sendNpcShopListing(session, char, npc);
  }
}

function sendNpcShopListing(
  session: WsSession,
  char: Character,
  npc: NpcDef,
): void {
  const items = buildNpcShopItems(char, npc).map(item => ({
    ...item,
    statsText: item.stats
      ? Object.entries(item.stats)
        .filter(([, value]) => typeof value === 'number' && value !== 0)
        .map(([key, value]) => `${key}+${value}`)
        .join(' ')
      : '',
  }));

  sendSystem(session.sessionId, `${npc.name}展示可購買商品，價格會依角色出身折扣結算；請確認金幣與背包空間後再輸入 buy 指令。`);
  if (items.length === 0) {
    sendSystem(session.sessionId, '  目前沒有可販售商品，請稍後再回到這名商人或尋找其他補給商。');
    return;
  }

  for (const item of items) {
    const detail = [
      `${item.price} 金幣`,
      `Lv.${item.levelReq}`,
      item.type,
      item.statsText,
    ].filter(Boolean).join(' / ');
    sendSystem(session.sessionId, `  ${item.name} — ${detail}`);
  }
  sendSystem(session.sessionId, '輸入 buy <物品名稱> 購買指定商品；輸入 sell <物品名稱> [數量] 出售背包中未裝備且有回收價格的物品。');
}

function buildNpcShopItems(char: Character, npc: NpcDef): {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  levelReq: number;
  stats?: Record<string, number>;
  command: string;
}[] {
  return npc.shopItems
    ?.map((itemId) => {
      const def = ITEM_DEFS[itemId];
      if (!def) return null;
      const stats = def.stats
        ? Object.fromEntries(
          Object.entries(def.stats)
            .filter(([, value]) => typeof value === 'number' && value !== 0),
        ) as Record<string, number>
        : undefined;
      return {
        id: itemId,
        name: def.name,
        description: def.description,
        price: applyShopBuyOriginDiscount(char, def.buyPrice),
        type: String(def.type),
        rarity: def.rarity ?? 'common',
        levelReq: def.levelReq,
        stats: stats && Object.keys(stats).length > 0 ? stats : undefined,
        command: `buy ${def.name}`,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null) ?? [];
}

/** buy <物品名稱> — 從當前房間的商人 NPC 購買物品 */
function cmdBuy(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '你正在購買商人商品，但沒有輸入物品名稱；下一步請使用 buy <物品名稱>。'); return; }

  // 找到房間中的商人 NPC
  const npcsInRoom = getNpcsByRoom(char.roomId);
  const merchant = npcsInRoom.find(n => n.type === 'merchant' && n.shopItems?.length);
  if (!merchant) {
    sendError(session.sessionId, '你正在購買商品，但目前房間沒有可交易商人；下一步請移動到有商人的房間再嘗試。');
    return;
  }

  // 搜尋物品（支援名稱和 ID）
  const query = itemName.toLowerCase();
  const matchId = merchant.shopItems!.find(id => {
    const def = ITEM_DEFS[id];
    return id === itemName || def?.name === itemName || def?.name.includes(itemName) || id.includes(query);
  });
  if (!matchId) {
    sendError(session.sessionId, `你想向${merchant.name}購買「${itemName}」，但這名商人的商品清單沒有該物品；下一步請查看購買頁現有商品。`);
    return;
  }

  const def = ITEM_DEFS[matchId];
  if (!def) { sendError(session.sessionId, `你正在購買「${matchId}」，但物品資料無法讀取；下一步請改買其他商品或回報資料異常。`); return; }

  const price = applyShopBuyOriginDiscount(char, def.buyPrice);
  if (char.gold < price) {
    sendError(session.sessionId, `你想向${merchant.name}購買「${def.name}」x1，但需要 ${price} 金幣，目前只有 ${char.gold} 金幣；下一步請先出售物品或取得更多金幣。`);
    return;
  }

  char.gold -= price;
  saveCharacter(char);
  addRewardItemToInventory(char, matchId, 1, ['shop']);
  sendSystem(session.sessionId, `你向${merchant.name}買入「${def.name}」x1，支付 ${price} 金幣；物品已放入背包，目前剩餘 ${char.gold} 金幣。`);
  cmdInventory(session);
}

/** sell <物品名稱|instanceId> [數量] — 向當前房間商人出售背包物品 */
function cmdSell(session: WsSession, input: string): void {
  const char = getChar(session);
  if (!char) return;
  const { itemName, quantity } = parseItemNameAndQuantity(input);
  if (!itemName) { sendError(session.sessionId, '你正在出售背包物品，但沒有輸入物品名稱或實例 id；下一步請使用 sell <物品名稱|instanceId> [數量]。'); return; }

  const merchant = getNpcsByRoom(char.roomId).find(n => n.type === 'merchant');
  if (!merchant) {
    sendError(session.sessionId, '你正在出售背包物品，但目前房間沒有商人收購；下一步請移動到商人所在房間再開啟出售頁。');
    return;
  }

  const query = itemName.toLowerCase();
  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    if (item.equipped) return false;
    const def = ITEM_DEFS[item.itemId];
    return Boolean(def)
      && (
        item.itemInstanceId === itemName
        || item.itemId === itemName
        || item.itemId.toLowerCase().includes(query)
        || def?.name === itemName
        || def?.name.includes(itemName)
      );
  });
  if (!match) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${itemName}」，但背包中沒有未裝備且可出售的對應物品，金幣不會結算；下一步請檢查出售頁清單。`);
    return;
  }

  const def = ITEM_DEFS[match.itemId];
  if (!def || def.sellPrice <= 0) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def?.name ?? itemName}」，但該物品沒有金幣回收價格；下一步請保留、使用或改選其他可出售物品。`);
    return;
  }
  if (match.itemInstanceId && quantity !== 1) {
    sendError(session.sessionId, `你想出售裝備實例「${def.name}」x${quantity}，但裝備實例一次只能出售 1 件；下一步請改用 sell ${match.itemInstanceId}。`);
    return;
  }
  if (quantity <= 0 || quantity > match.quantity) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def.name}」x${quantity}，但背包目前只有 ${match.quantity} 個；下一步請降低數量或改選其他物品。`);
    return;
  }

  const removed = removeInventoryItem(char.id, match.itemId, quantity, match.itemInstanceId);
  if (!removed) {
    sendError(session.sessionId, `你想向${merchant.name}出售「${def.name}」x${quantity}，但背包內容在結算前已改變；下一步請重新開啟出售頁確認數量。`);
    return;
  }

  const earned = def.sellPrice * quantity;
  char.gold += earned;
  saveCharacter(char);
  recordGoldProduced(earned);
  sendSystem(session.sessionId, `你向${merchant.name}出售了「${def.name}」x${quantity}，獲得 ${earned} 金幣。（目前：${char.gold}）`);
  cmdInventory(session);
}

function parseItemNameAndQuantity(input: string): { itemName: string; quantity: number } {
  const trimmed = input.trim();
  if (!trimmed) return { itemName: '', quantity: 1 };
  const parts = trimmed.split(/\s+/);
  const last = parts[parts.length - 1];
  const quantity = Number.parseInt(last, 10);
  if (parts.length > 1 && Number.isInteger(quantity) && quantity > 0 && String(quantity) === last) {
    return { itemName: parts.slice(0, -1).join(' '), quantity };
  }
  return { itemName: trimmed, quantity: 1 };
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
        if (choiceNum >= 1 && choiceNum <= active.options.length) {
          const chosen = active.options[choiceNum - 1];
          const lock = getDialogueOptionLockReason(npc, chosen, char);
          if (lock) {
            const activeNode = resolveDialogueNode(npc, active.nodeId);
            const label = activeNode
              ? formatDialogueOptionLabel(npc, activeNode, chosen, choiceNum - 1, resolveDialogueNode(npc, chosen.nextId))
              : chosen.text;
            sendError(session.sessionId, `「${label}」目前無法選擇：${lock}`);
            return;
          }
          showDialogueNode(session, npc, chosen.nextId);
          questMgr.updateProgress(char.id, 'talk', npc.id);
          return;
        } else {
          sendError(session.sessionId, `請輸入 1-${active.options.length} 的選項。`);
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
  cmdStatus(session);
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
      cmdInventory(session);
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

// ─── 指令 registry / 幫助 ───

const COMMAND_HANDLERS: Record<string, CommandDefinition['handler']> = {
  look: (session, { argStr }) => cmdLook(session, argStr),
  search: (session, { argStr }) => cmdSearch(session, argStr),
  inspect: (session, { argStr }) => cmdInspect(session, argStr),
  open: (session, { argStr }) => cmdOpen(session, argStr),
  go: (session, { argStr }) => cmdGo(session, argStr),
  map: session => cmdMap(session),
  activate: (session, { args }) => cmdActivate(session, args),
  portals: session => cmdPortals(session),
  travel: (session, { argStr }) => cmdTravel(session, argStr),
  recall: session => cmdRecall(session),
  rest: session => cmdRest(session),
  status: session => cmdStatus(session),
  faith: (session, { args }) => cmdFaith(session, args),
  pray: (session, { args }) => cmdFaith(session, ['pray', ...args]),
  offering: (session, { args }) => cmdOffering(session, args),
  renounce: (session, { args }) => cmdRenounce(session, args),
  inventory: session => cmdInventory(session),
  skills: session => cmdSkills(session),
  allocate: (session, { args }) => cmdAllocate(session, args),
  equip: (session, { argStr }) => cmdEquip(session, argStr),
  unequip: (session, { argStr }) => cmdUnequip(session, argStr),
  use: (session, { argStr }) => cmdUse(session, argStr),
  take: (session, { argStr }) => cmdTake(session, argStr),
  loot: (session, { argStr }) => cmdLoot(session, argStr),
  drop: (session, { argStr }) => cmdDrop(session, argStr),
  sell: (session, { argStr }) => cmdSell(session, argStr),
  upgrade: (session, { argStr }) => cmdUpgrade(session, argStr),
  reroll: (session, { args }) => cmdReroll(session, args),
  lock: (session, { args }) => cmdLock(session, args),
  reforge: (session, { args }) => cmdReforge(session, args),
  disassemble: (session, { args }) => cmdDisassemble(session, args),
  attack: (session, { argStr }) => cmdAttack(session, argStr, "melee"),
  melee: (session, { argStr }) => cmdAttack(session, argStr, "melee"),
  ranged: (session, { argStr }) => cmdAttack(session, argStr, "ranged"),
  skill: (session, { args }) => cmdSkill(session, args),
  defend: session => cmdDefend(session),
  escape: session => cmdEscape(session),
  charge: (session, { argStr }) => cmdMountedCharge(session, argStr),
  intercept: (session, { args }) => cmdMountedIntercept(session, args),
  mounted: (session, { args }) => cmdMounted(session, args),
  mount: (session, { args }) => cmdMount(session, args),
  say: (session, { argStr }) => cmdSay(session, argStr),
  talk: (session, { argStr }) => cmdTalk(session, argStr),
  party: (session, { args }) => cmdParty(session, args),
  trade: (session, { args }) => cmdTrade(session, args),
  emote: (session, { argStr }) => cmdEmote(session, argStr),
  friend: (session, { args }) => cmdFriend(session, args),
  mail: (session, { args }) => cmdMail(session, args),
  weather: session => cmdWeather(session),
  quest: (session, { args }) => cmdQuest(session, args),
  classchange: (session, { argStr }) => cmdClassChange(session, argStr),
  classquest: (session, { args }) => cmdClassQuest(session, args),
  classquest2: (session, { args }) => cmdClassQuest2(session, args),
  skilltree: (session, { args }) => cmdSkillTree(session, args),
  enter: (session, { argStr }) => cmdEnterInstanceEntry(session, argStr),
  dungeon: (session, { args }) => cmdDungeon(session, args),
  duel: (session, { args }) => cmdDuel(session, args),
  arena: (session, { args }) => cmdArena(session, args),
  leaderboard: (session, { args }) => cmdLeaderboard(session, args),
  craft: (session, { args }) => cmdCraft(session, args),
  gather: (session, { args }) => cmdGather(session, args),
  ask: (session, { argStr }) => cmdAsk(session, argStr),
  guardian: (session, { args }) => cmdGuardian(session, args),
  kingdom: (session, { args }) => cmdKingdom(session, args),
  appoint: (session, { args }) => cmdAppoint(session, args),
  demote: (session, { args }) => cmdDemote(session, args),
  kick: (session, { args }) => cmdKick(session, args),
  guild: (session, { args }) => cmdGuild(session, args),
  build: (session, { args }) => cmdBuild(session, args),
  mob: (session, { args }) => cmdMob(session, args),
  npc: (session, { args }) => cmdNpc(session, args),
  war: (session, { args }) => cmdWar(session, args),
  army: (session, { args }) => cmdArmy(session, args),
  bounty: (session, { args }) => cmdBounty(session, args),
  treasury: (session, { args }) => cmdTreasury(session, args),
  diplomacy: (session, { args }) => cmdDiplomacy(session, args),
  shop: (session, { argStr }) => cmdShop(session, argStr),
  buy: (session, { argStr }) => cmdBuy(session, argStr),
  auction: (session, { args }) => cmdAuction(session, args),
  market: (session, { args }) => cmdMarket(session, args),
  fish: (session, { args }) => cmdFish(session, args),
  achievement: (session, { args }) => cmdAchievement(session, args),
  title: session => cmdTitle(session),
  codex: (session, { args }) => cmdCodex(session, args),
  appearance: (session, { args }) => cmdAppearance(session, args),
  pet: (session, { args }) => cmdPet(session, args),
  tame: session => cmdTame(session),
  event: (session, { args }) => cmdEvent(session, args),
  auto: (session, { args }) => cmdAuto(session, args),
  tutorial: (session, { args }) => cmdTutorial(session, args),
  signin: session => cmdSignin(session),
  debug: (session, { args }) => cmdDebug(session, args),
  help: (session, { argStr }) => cmdHelp(session, argStr),
  alias: (session, { args }) => cmdAlias(session, args),
  unalias: (session, { args }) => cmdUnalias(session, args),
};

const COMMAND_DEFINITIONS: CommandDefinition[] = COMMAND_METADATA.map((metadata) => {
  const handler = COMMAND_HANDLERS[metadata.id];
  if (!handler) throw new Error(`Missing command handler for ${metadata.id}`);
  return { ...metadata, handler };
});

const COMMAND_REGISTRY = createCommandRegistry(COMMAND_DEFINITIONS);
const HELP_CATEGORIES = listCommandCategories(COMMAND_REGISTRY.definitions, COMMAND_CATEGORY_TITLES);

function cmdHelp(session: WsSession, topic?: string): void {
  const categories = HELP_CATEGORIES;

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

// ─── 工具函式 ───
