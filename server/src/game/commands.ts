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
  cmdAttack, cmdSkill,
} from './commands/cmd-combat.js';
import { cmdSkillUpgrade } from './commands/cmd-combat-skills.js';
import {
  cmdDefend, cmdEscape, cmdMount, cmdMounted, cmdMountedCharge, cmdMountedIntercept,
} from './commands/cmd-combat-actions.js';
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
  buildDialogueOptions, cmdBuy, cmdSay, cmdSell, cmdShop, cmdTalk, getDialogueOptionLockReason, resolveDialogueNode, showDialogueNode,
} from './commands/cmd-npc-systems.js';
import {
  cmdAllocate, cmdDebug, cmdFaith, cmdGather, cmdOffering, cmdOpen, cmdRenounce,
} from './commands/cmd-misc-systems.js';
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

export {
  buildDialogueOptions,
  mainQuestVirtualNodeId,
  resolveDialogueNode,
} from './commands/cmd-npc-systems.js';

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
