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

function addLootItemToInventory(char: Character, itemOrId: string | CombatLoot['items'][number], quantity?: number): string[] {
  const item = typeof itemOrId === 'string' ? { itemId: itemOrId, quantity: quantity ?? 1 } : itemOrId;
  if (item.itemInstanceId && item.quality) {
    addInventoryItem(char.id, item.itemId, 1, false, {
      itemInstanceId: item.itemInstanceId,
      baseItemId: item.itemId,
      quality: item.quality,
      itemLevel: item.itemLevel,
      droppedBy: item.droppedBy,
      droppedInZone: item.droppedInZone,
      sourceTags: item.sourceTags,
      affixes: item.affixes,
      fixedEffects: item.fixedEffects,
    });
    const def = ITEM_DEFS[item.itemId];
    const qualityText = item.quality !== 'normal' ? `（${item.quality}）` : '';
    const levelText = item.itemLevel ? ` Lv.${item.itemLevel}` : '';
    const affixText = item.affixes?.length ? `［${item.affixes.map(affix => affix.name).join('、')}］` : '';
    return [`${def?.name ?? item.itemId}${qualityText}${levelText}${affixText}`];
  }
  return addRewardItemToInventory(char, item.itemId, item.quantity, ['monster_drop']).map(formatRewardEntry);
}

function cmdInventory(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  sendInventoryPayload(session, char);
}

function sendInventoryPayload(session: WsSession, char: Character): void {
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
    capacity: INVENTORY_SLOT_CAPACITY,
    gold: char.gold,
  });
}

function cmdSkills(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const learned = getLearnedSkills(char.id);
  sendSystem(session.sessionId, '── 技能列表 ──');
  const originPassives = learned.filter(ls => ls.skillId.startsWith('race_') || ls.skillId.startsWith('faith_'));
  const classSkills = learned.filter(ls => !ls.skillId.startsWith('race_') && !ls.skillId.startsWith('faith_'));
  if (originPassives.length > 0) {
    sendSystem(session.sessionId, '天賦 / 種族 / 信仰');
    for (const ls of originPassives) {
      const def = SKILL_DEFS[ls.skillId];
      if (!def) continue;
      sendSystem(session.sessionId, `  ${def.name}（${def.englishName}）[被動] - ${def.description}`);
    }
  }
  if (classSkills.length > 0) {
    sendSystem(session.sessionId, '職業 / 戰鬥');
  }
  for (const ls of classSkills) {
    const def = SKILL_DEFS[ls.skillId];
    if (!def) continue;
    const runtime = def.type === 'active' ? getModifiedSkillRuntime(char.id, def) : null;
    const typeStr = def.type === 'passive' ? '[被動]' : `[主動 消耗:${runtime?.resourceCost ?? def.resourceCost} CD:${runtime?.cooldown ?? def.cooldown}]`;
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

function getItemResolvedEquipSlot(itemId: string): ReturnType<typeof resolveEquipSlotForItem> {
  return resolveEquipSlotForItem(ITEM_DEFS[itemId]);
}

function getOffhandSlotForMainHand(slot: string): 'meleeOffHand' | 'rangedOffHand' | null {
  if (slot === 'meleeMainHand') return 'meleeOffHand';
  if (slot === 'rangedMainHand') return 'rangedOffHand';
  return null;
}

function getMainHandSlotForOffhand(slot: string): 'meleeMainHand' | 'rangedMainHand' | null {
  if (slot === 'meleeOffHand') return 'meleeMainHand';
  if (slot === 'rangedOffHand') return 'rangedMainHand';
  return null;
}

function cmdEquip(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：equip <物品名稱>'); return; }

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName);
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (!def?.equipSlot) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法裝備。`); return; }
  if (def.levelReq > char.level) { sendError(session.sessionId, `你正在裝備「${def.name}」，但角色等級不足；目前等級 ${char.level}，需求等級 Lv.${def.levelReq}。下一步請先提升等級或改穿低等級裝備。`); return; }
  // 職業限制檢查
  if (def.classReq && def.classReq.length > 0 && !def.classReq.includes(char.classId)) {
    sendError(session.sessionId, '你的職業無法裝備此物品');
    return;
  }

  const targetSlot = getItemResolvedEquipSlot(match.itemId) ?? def.equipSlot;
  const equipped = getEquippedItems(char.id);
  for (const eq of equipped) {
    const eqDef = ITEM_DEFS[eq.itemId];
    if (!eqDef?.equipSlot || eq.itemInstanceId === match.itemInstanceId) continue;
    const equippedSlot = getItemResolvedEquipSlot(eq.itemId) ?? eqDef.equipSlot;
    const targetOffhandSlot = getOffhandSlotForMainHand(targetSlot);
    const targetMainSlot = getMainHandSlotForOffhand(targetSlot);
    const equippedOffhandSlot = getOffhandSlotForMainHand(equippedSlot);
    const shouldUnequip = equippedSlot === targetSlot
      || (targetOffhandSlot !== null && isTwoHandWeapon(def) && equippedSlot === targetOffhandSlot)
      || (targetMainSlot !== null && equippedSlot === targetMainSlot && isTwoHandWeapon(eqDef))
      || (equippedOffhandSlot !== null && equippedOffhandSlot === targetSlot && isTwoHandWeapon(eqDef));
    if (shouldUnequip) {
      setEquipped(char.id, eq.itemId, false, eq.itemInstanceId);
      sendSystem(session.sessionId, `你卸下了「${eqDef.name}」。`);
    }
  }

  setEquipped(char.id, match.itemId, true, match.itemInstanceId);
  sendSystem(session.sessionId, `你裝備了「${def.name}」。`);
  cmdInventory(session);

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
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName);
  });
  if (!match) { sendError(session.sessionId, `你沒有裝備「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  setEquipped(char.id, match.itemId, false, match.itemInstanceId);
  sendSystem(session.sessionId, `你卸下了「${def?.name ?? itemName}」。`);
  cmdInventory(session);
}

function cmdUse(session: WsSession, itemName: string): void {
  const char = getChar(session);
  if (!char) return;
  if (!itemName) { sendError(session.sessionId, '用法：use <物品名稱>'); return; }
  const parsedItem = parseInstanceEntryTarget(itemName);

  const inv = getInventory(char.id);
  const match = inv.find((item) => {
    const def = ITEM_DEFS[item.itemId];
    return def && (
      def.name === itemName
      || item.itemId === itemName
      || def.name === parsedItem.target
      || item.itemId === parsedItem.target
    );
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  if (tryUseInstanceEntryItem(session, char, match.itemId, def?.name ?? itemName, parsedItem.difficulty)) {
    return;
  }
  if (!def?.useEffect) { sendError(session.sessionId, `「${def?.name ?? itemName}」無法使用。`); return; }

  const effect = def.useEffect;
  const inCombat = isInCombat(char.id);
  const combatId = getPlayerCombatId(char.id);
  const getPlayerCombatant = () => {
    if (!combatId) return undefined;
    return combat.getCombatState(combatId)?.playerTeam.find(p => p.id === char.id);
  };
  const finishConsumableUse = () => {
    saveCharacter(char);
    cmdStatus(session);
    cmdInventory(session);
  };

  // ─── 基礎回復藥水 ───
  if (effect.type === 'heal_hp') {
    removeInventoryItem(char.id, match.itemId, 1);
    const healed = applyHpRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), getPlayerCombatant());
    finishConsumableUse();
    sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} HP。`);
    return;
  }

  if (effect.type === 'heal_mp') {
    removeInventoryItem(char.id, match.itemId, 1);
    if (char.resourceType === 'rage') {
      sendSystem(session.sessionId, `你使用了「${def.name}」，但怒氣無法透過藥水恢復。`);
    } else {
      const healed = applyResourceRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), getPlayerCombatant());
      const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'focus' ? '專注' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healed} ${resourceLabel}。`);
    }
    finishConsumableUse();
    return;
  }

  if (effect.type === 'heal_both') {
    removeInventoryItem(char.id, match.itemId, 1);
    const combatant = getPlayerCombatant();
    const healedHp = applyHpRecovery(char, applyInventoryHandlingBonus(char.id, effect.value), combatant);
    const healedResource = applyResourceRecovery(char, applyInventoryHandlingBonus(char.id, effect.value2 ?? 0), combatant);
    finishConsumableUse();
    if (char.resourceType === 'rage') {
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healedHp} HP；怒氣無法透過藥水恢復。`);
    } else {
      sendSystem(session.sessionId, `你使用了「${def.name}」，回復了 ${healedHp} HP 和 ${healedResource} 資源。`);
    }
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
        const grantedNames = addLootItemToInventory(char, lootItem, 1);
        const lootDef = ITEM_DEFS[lootItem];
        obtainedItems.push(...(grantedNames.length > 0 ? grantedNames : [lootDef?.name ?? lootItem]));
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
    'faded_grimoire', 'lava_warhammer', 'crystal_cluster_staff', 'frost_giant_greataxe',
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
    addRewardItemToInventory(char, match.itemId, 1, ['ground_item']);
    markGroundItemPicked(char.roomId, match.itemId, match.oneTime);
    questMgr.updateProgress(char.id, 'collect_item', match.itemId);
    sendNarrative(session.sessionId, `你撿起了${def?.name ?? match.itemId}。`);
    cmdInventory(session);
    broadcastRoomState(char.roomId);
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
    if (result.corpse && corpseMgr.removeCorpseIfEmpty(result.corpse)) {
      broadcastRoomState(char.roomId);
    }
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
      const grantedNames = addLootItemToInventory(recipient, item);
      questMgr.updateProgress(recipient.id, 'collect_item', item.itemId);
      const def = ITEM_DEFS[item.itemId];
      const itemText = grantedNames.length > 1 ? grantedNames.join('、') : `${def?.name ?? item.itemId} x${item.quantity}`;
      sendSystem(getSessionByCharacterId(recipient.id)?.sessionId ?? session.sessionId, `獲得 ${itemText}`);
      announceLootItem(recipient, item.itemId, result.corpse?.roomId ?? char.roomId);
    }

    questMgr.updateProgress(recipient.id, 'loot_corpse', result.corpse?.monsterId ?? 'corpse');
    questMgr.updateProgress(recipient.id, 'loot_corpse', 'corpse');
    saveCharacter(recipient);
    const recipientSession = getSessionByCharacterId(recipient.id);
    if (recipientSession) cmdInventory(recipientSession);
  }

  for (const item of personalQuestItems) {
    addLootItemToInventory(char, item);
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
  cmdInventory(session);
  if (result.corpse) {
    corpseMgr.removeCorpseIfEmpty(result.corpse);
  }
  broadcastRoomState(char.roomId);
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
    return def && (def.name === itemName || item.itemId === itemName || item.itemInstanceId === itemName) && !item.equipped;
  });
  if (!match) { sendError(session.sessionId, `背包中沒有「${itemName}」。`); return; }

  const def = ITEM_DEFS[match.itemId];
  removeInventoryItem(char.id, match.itemId, 1, match.itemInstanceId);
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
    localMap: room ? buildLocalMapPayload(char, room) : undefined,
    travelNodes: room ? getTravelNodes()
      .filter(node => node.zoneId === room.zone)
      .map(node => ({
        id: node.id,
        name: node.name,
        roomId: node.roomId,
        kind: node.kind,
        unlocked: node.unlockByDefault || isPortalUnlocked(char.id, node.id),
      })) : undefined,
    world: buildWorldMapPayload(char),
  });
  if (room && zone) {
    sendSystem(session.sessionId, `探索度：${zone.name} ${visitedRooms}/${totalRooms} (${percent}%)；類型 ${zone.type}，危險度 ${zone.dangerLevel}，PvP ${zone.pvpMode}，死亡懲罰 ${zone.deathPenalty}`);
  }
}

function buildWorldMapPayload(char: Character): {
  zones: {
    id: string;
    name: string;
    region: string;
    type: ZoneDef['type'];
    levelRange: [number, number];
    dangerLevel: number;
    pvpMode: ZoneDef['pvpMode'];
    deathPenalty: ZoneDef['deathPenalty'];
    totalRooms: number;
    visitedRooms: number;
    rooms: {
      id: string;
      name: string;
      mapSymbol: string;
      mapX: number;
      mapY: number;
      mapLayer: number;
      mapLayerName?: string;
      explored: boolean;
      exits: {
        direction: string;
        targetRoomId: string;
        targetRoomName?: string;
        targetZoneId?: string;
        targetMapLayer?: number;
        targetMapLayerName?: string;
        locked?: boolean;
      }[];
      faithAltar?: {
        faithId: string;
        faithName: string;
        faithTitle: string;
      };
    }[];
  }[];
  connections: { fromZoneId: string; toZoneId: string }[];
} {
  const roomLayers = buildRoomMapLayerLookup(Object.values(ROOMS));
  const zones = Object.values(ZONES).map((zone) => {
    const rooms = zone.rooms
      .map(roomId => getRoom(roomId))
      .filter((candidate): candidate is RoomDef => Boolean(candidate))
      .map(room => {
        const layer = roomLayers.get(room.id) ?? { mapLayer: inferMapLayerFromCoordinates(room) };
        const faithAltar = getFaithAltarByRoomId(room.id);
        return {
          id: room.id,
          name: room.name,
          mapSymbol: room.mapSymbol,
          mapX: room.mapX,
          mapY: room.mapY,
          mapLayer: layer.mapLayer,
          mapLayerName: layer.mapLayerName,
          explored: hasDiscovery(char.id, 'visit_room', room.id) || room.id === char.roomId,
          exits: room.exits.map(exit => {
            const targetRoom = getRoom(exit.targetRoomId);
            const targetLayer = targetRoom ? roomLayers.get(targetRoom.id) : undefined;
            return {
              direction: exit.direction,
              targetRoomId: exit.targetRoomId,
              targetRoomName: targetRoom?.name,
              targetZoneId: targetRoom?.zone,
              targetMapLayer: targetLayer?.mapLayer,
              targetMapLayerName: targetLayer?.mapLayerName,
              locked: exit.locked,
            };
          }),
          faithAltar: faithAltar ? {
            faithId: faithAltar.faithId,
            faithName: FAITH_DEFS[faithAltar.faithId].name,
            faithTitle: FAITH_DEFS[faithAltar.faithId].title,
          } : undefined,
        };
      });

    return {
      id: zone.id,
      name: zone.name,
      region: zone.region,
      type: zone.type,
      levelRange: zone.levelRange,
      dangerLevel: zone.dangerLevel,
      pvpMode: zone.pvpMode,
      deathPenalty: zone.deathPenalty,
      totalRooms: rooms.length,
      visitedRooms: getDiscoveryCount(char.id, zone.id, 'visit_room'),
      rooms,
    };
  });

  const connectionKeys = new Set<string>();
  for (const sourceRoom of Object.values(ROOMS)) {
    for (const exit of sourceRoom.exits) {
      const targetRoom = getRoom(exit.targetRoomId);
      if (!targetRoom || targetRoom.zone === sourceRoom.zone) continue;
      const [fromZoneId, toZoneId] = [sourceRoom.zone, targetRoom.zone].sort();
      connectionKeys.add(`${fromZoneId}:${toZoneId}`);
    }
  }

  return {
    zones,
    connections: Array.from(connectionKeys).map((key) => {
      const [fromZoneId, toZoneId] = key.split(':');
      return { fromZoneId, toZoneId };
    }),
  };
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
    const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'focus' ? '專注' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
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

  const loadCheck = canUseInventoryRestrictedTravel(char, node);
  if (!loadCheck.ok) {
    sendError(session.sessionId, loadCheck.message);
    return;
  }

  const kingdomCargoCheck = canUseKingdomCargoRestrictedTravel(char, node);
  if (!kingdomCargoCheck.ok) {
    sendError(session.sessionId, kingdomCargoCheck.message);
    return;
  }

  const pvpDamageCheck = canUsePvpDamageRestrictedTravel(char);
  if (!pvpDamageCheck.ok) {
    sendError(session.sessionId, pvpDamageCheck.message);
    return;
  }

  if (node.kind === 'danger_evac') {
    const originRoomId = char.roomId;
    const cast = beginPvpDangerEvacCast(char.id, () => {
      const currentChar = getChar(session);
      if (!currentChar) return;
      if (currentChar.roomId !== originRoomId) {
        sendError(session.sessionId, '危險撤離讀條因位置改變而中止。');
        return;
      }
      completeTravel(session, node);
    });
    if (!cast.ok) {
      sendError(session.sessionId, `危險撤離讀條進行中，還需 ${cast.remainingSeconds} 秒。`);
      return;
    }
    sendSystem(session.sessionId, `開始啟動 ${node.name}，需要 ${cast.seconds} 秒讀條。受到 PvP 攻擊會中斷撤離。`);
    return;
  }

  completeTravel(session, node);
}

function completeTravel(session: WsSession, node: TravelNodeDef): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用傳送。');
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

  const loadCheck = canUseInventoryRestrictedTravel(char);
  if (!loadCheck.ok) {
    sendError(session.sessionId, loadCheck.message);
    return;
  }

  const kingdomCargoCheck = canUseKingdomCargoRestrictedTravel(char);
  if (!kingdomCargoCheck.ok) {
    sendError(session.sessionId, kingdomCargoCheck.message);
    return;
  }

  const pvpDamageCheck = canUsePvpDamageRestrictedTravel(char);
  if (!pvpDamageCheck.ok) {
    sendError(session.sessionId, pvpDamageCheck.message);
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
