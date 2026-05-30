// cmd-helpers.ts — shared helper functions and module-level state
// extracted from commands.ts for use across all command files

import type { WsSession } from '../../ws/handler.js';
import {
  sendNarrative, sendSystem, sendError, sendToSession,
  getSessionByCharacterId, getAllSessions, broadcast, broadcastToRoom,
} from '../../ws/handler.js';
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
} from '../../db/queries.js';
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
} from '../state.js';
import { ACHIEVEMENT_DEFS } from '../achievement.js';
import { PET_DEFS } from '../pet.js';
import { WORLD_BOSS_DEFS } from '../world-event.js';
import { GUARDIAN_DEFS } from '../guardian.js';
import { findNpcByName, getNpcsByRoom } from '../../data/npcs.js';
import { getRoom, getRoomsByZone, getZone, ROOMS, ZONES, getRoomByWorldCoord, getRoomWorldCoord } from '../../data/rooms.js';
import { buildInstanceEntryDefs, type InstanceEntryDef, type InstanceEntryQuestState } from '../../data/world-map2-plan.js';
import { canFollowFaithAtRoom, getFaithAltar, getFaithAltarByRoomId } from '../../data/faith-altars.js';
import { MONSTERS } from '../../data/monsters.js';
import { getTravelNodes } from '../../data/travel.js';
import { RANK_NAMES } from '../kingdom.js';
import { FISH_TABLE } from '../fishing.js';
import {
  getBossKillCount,
  getFishCodex,
  getMonsterCodex,
  recordMonsterCodexKill,
} from '../collection-log.js';
import {
  equipAppearance,
  getAppearanceCollection,
  unlockAppearance,
} from '../appearance.js';
import { BUILDING_TYPE_NAMES, NPC_TYPE_NAMES } from '../kingdom-building.js';
import { getPveRespawnRoomId } from '../death-respawn.js';
import { upgradeItem, getUpgradeInfo } from '../upgrade.js';
import { disassembleEquipment, lockItemAffix, reforgeItemQuality, rerollItemAffix } from '../item-reforge.js';
import { CRAFTING_CATEGORIES, type CraftingCategory, type CraftingOptions } from '../crafting.js';
import { recordGoldProduced, recordGoldSpent } from '../economy-stats.js';
import { INVENTORY_SLOT_CAPACITY, getCarriedKingdomResourceItemIds, getInventorySlotLoad } from '../inventory-capacity.js';
import { beginPvpDangerEvacCast } from '../pvp-evac-cast.js';
import { getPvpTravelLockRemainingSeconds } from '../pvp-travel-lock.js';
import { buildOrdinalLabels, buildRoomEntities, type RoomEntityPlayer } from '../room-entities.js';
import { buildNearbyCombatPayload } from '../nearby-combat.js';
import { applyShopBuyOriginDiscount, applyTravelGoldOriginDiscount } from '../origin-effects.js';
import { MAIN_QUEST_FLOW } from '../main-quest-flow.js';
import { QUEST_DEFS } from '../quest.js';
import { EXPANDED_QUEST_DEFS } from '../quest-system.js';
import { addExperienceToCharacter, expRequiredForLevel, getLevelExpProgress } from '../leveling.js';
import { grantAndNotifyLearnableSkills, removeLegacyAdventurerSkills } from '../skill-learning.js';
import { applyFieldSkillEffect } from '../field-skill-effects.js';
import { getModifiedSkillRuntime, getResourceAffixBonus, getSkillAffixModifiers } from '../equipment-affixes.js';
import { addRewardItemToInventory, formatRewardEntry } from '../item-instance-rewards.js';
import { applySkillResourceChange, checkSkillResource } from '../skill-resource.js';
import { applyHpRecovery, applyResourceRecovery } from '../recovery.js';
import { resolveMountedIntercept, selectMountedInterceptTarget } from '../mounted-intercept.js';
import { applyLowLevelExpPenalty, formatExpPenaltyMessage, getHighLevelCombatPenalty } from '../level-scaling.js';
import { buildRoomMapLayerLookup, formatMapLayerName, inferMapLayerFromCoordinates } from '../map-layer.js';
import { applyInventoryHandlingBonus } from '../passive-skill-effects.js';
import { CorpseManager, LootCalculator, getLootAnnouncementScope } from '../loot.js';
import { BUILTIN_COMMANDS, MAX_ALIAS_EXPANSION_DEPTH, SYSTEM_ALIASES, resolveAliasExpansion } from '../alias.js';
import { formatDialogueOptionLabel } from '../dialogue-option-labels.js';
import type { LootDistributionMode } from '../party.js';
import type { MonsterInstance } from '../world.js';
import type { KingdomRank, BuildingType, KingdomNpcType, Direction, EquipSlot, GroundItem } from '@game/shared';

// ─── Module-level singletons ───

export type CombatAttackMode = 'melee' | 'ranged';

export const lootCalc = new LootCalculator();
export const corpseMgr = new CorpseManager();

// ─── Module-level types ───

export type LocalMapPayload = {
  size: 5;
  currentRoom: string;
  rooms: {
    id: string;
    name: string;
    zone: string;
    zoneName?: string;
    x: number;
    y: number;
    explored: boolean;
    exits: RoomExit[];
  }[];
};

export type CardinalDirection = 'north' | 'east' | 'south' | 'west';
export const CARDINAL_DIRECTIONS: CardinalDirection[] = ['north', 'east', 'south', 'west'];

export interface ActiveExitTrap {
  ownerId: string;
  skillId: string;
  resourceGainOnTrigger: number;
  arrivalTicksDelta: number;
  placedAt: number;
}

export interface PendingHunterMark {
  characterId: string;
  monsterInstanceId: string;
  roomId: string;
  expiresAt: number;
}

export type RoomStatePayload = RoomPayload & {
  zoneName?: string;
  silent?: boolean;
  localMap?: LocalMapPayload;
  faithAltar?: {
    faithId: string;
    faithName: string;
    faithTitle: string;
    locationHint: string;
    actionCommand: string;
  };
};

// ─── Module-level Maps / Sets / constants ───

export const activeExitTraps = new Map<string, ActiveExitTrap>();
export const fieldApproachingTimers = new Map<string, ReturnType<typeof setTimeout>>();
export const activeScoutRooms = new Set<string>();
export const pendingHunterMarks = new Map<string, PendingHunterMark>();
export const travelCooldowns = new Map<string, number>();
export const instanceEntryCooldowns = new Map<string, number>();
export const FIELD_SKILL_COOLDOWN_TICK_MS = 5_000;
export const HUNTER_MARK_WINDOW_MS = 30_000;
export const fieldSkillCooldowns = new Map<string, number>();
export const PLANAR_DIRECTIONS = new Set<Direction>(['north', 'south', 'east', 'west']);
export const activeDialogues = new Map<string, { npcId: string; nodeId: string; options: DialogueOption[] }>();

// ─── Ground item tracking ───

export const GROUND_ITEM_RESPAWN_MS = 10 * 60 * 1000; // 10 minutes

/** Get available ground items in room (excluding picked items not yet respawned) */
export function getAvailableGroundItems(roomId: string): GroundItem[] {
  const room = getRoom(roomId);
  if (!room?.groundItems) return [];

  const now = Date.now();
  return room.groundItems.filter(gi => {
    const respawnAt = getGroundItemRespawnAt(roomId, gi.itemId);
    if (respawnAt === PERMANENT_GROUND_ITEM_PICKUP) return false;
    if (respawnAt && now < respawnAt) return false;
    if (respawnAt && now >= respawnAt) clearGroundItemPickup(roomId, gi.itemId);
    return true;
  });
}

/** Mark a ground item as picked */
export function markGroundItemPicked(roomId: string, itemId: string, oneTime = false): void {
  setGroundItemRespawnAt(
    roomId,
    itemId,
    oneTime ? PERMANENT_GROUND_ITEM_PICKUP : Date.now() + GROUND_ITEM_RESPAWN_MS,
  );
}

// ─── Scout helpers ───

export function scoutKey(characterId: string, originRoomId: string, targetRoomId: string): string {
  return `${characterId}:${originRoomId}:${targetRoomId}`;
}

export function recordLocalScout(characterId: string, originRoomId: string, targetRoomId: string): void {
  activeScoutRooms.add(scoutKey(characterId, originRoomId, targetRoomId));
}

export function hasLocalScout(characterId: string, originRoomId: string, targetRoomId: string): boolean {
  return activeScoutRooms.has(scoutKey(characterId, originRoomId, targetRoomId));
}

export function clearLocalScouts(characterId: string): void {
  const prefix = `${characterId}:`;
  for (const key of activeScoutRooms) {
    if (key.startsWith(prefix)) activeScoutRooms.delete(key);
  }
}

// ─── Hunter mark helpers ───

export function hunterMarkKey(characterId: string, monsterInstanceId: string): string {
  return `${characterId}:${monsterInstanceId}`;
}

export function cleanupExpiredHunterMarks(now = Date.now()): void {
  for (const [key, mark] of pendingHunterMarks) {
    if (mark.expiresAt <= now) pendingHunterMarks.delete(key);
  }
}

export function setPendingHunterMark(characterId: string, monster: MonsterInstance, roomId: string): void {
  cleanupExpiredHunterMarks();
  pendingHunterMarks.set(hunterMarkKey(characterId, monster.instanceId), {
    characterId,
    monsterInstanceId: monster.instanceId,
    roomId,
    expiresAt: Date.now() + HUNTER_MARK_WINDOW_MS,
  });
}

export function consumePendingHunterMark(characterId: string, monsterInstanceId: string): boolean {
  const key = hunterMarkKey(characterId, monsterInstanceId);
  const mark = pendingHunterMarks.get(key);
  if (!mark) return false;
  if (mark.expiresAt <= Date.now()) {
    pendingHunterMarks.delete(key);
    return false;
  }
  pendingHunterMarks.delete(key);
  return true;
}

export function applyPendingHunterMarkToCombat(characterId: string, combatId: string, monster: MonsterInstance): boolean {
  if (!consumePendingHunterMark(characterId, monster.instanceId)) return false;
  const skillDef = SKILL_DEFS.poison_arrow;
  const markEffect = skillDef.effects?.find(effect => effect.type === 'mark') as StatusEffect | undefined;
  if (!markEffect) return false;
  combat.applyEffectToEnemy(combatId, monster.instanceId, {
    ...markEffect,
    source: characterId,
  });
  return true;
}

// ─── Corpse helpers ───

export function scheduleCorpseExpiry(roomId: string, corpseId: string, expiresAt: number): void {
  const delay = Math.max(0, expiresAt - Date.now());
  setTimeout(() => {
    if (corpseMgr.removeCorpse(roomId, corpseId)) {
      broadcastRoomState(roomId);
    }
  }, delay);
}

export function isCorpseEmptyForCharacter(corpse: { gold: number; items: unknown[]; personalItems: Record<string, unknown[]> }, characterId: string): boolean {
  return corpse.gold <= 0
    && corpse.items.length === 0
    && (corpse.personalItems[characterId]?.length ?? 0) === 0;
}

export function shouldShowCorpseToCharacter(corpse: { gold: number; items: unknown[]; personalItems: Record<string, unknown[]> }, characterId: string): boolean {
  return !isCorpseEmptyForCharacter(corpse, characterId);
}

// ─── Room payload / broadcast ───

export function buildRoomPayload(char: Character, silent = false): RoomStatePayload | null {
  const roomInfo = world.getRoomInfo(char.roomId);
  if (!roomInfo) return null;

  const playersInRoom = world.getPlayersInRoom(char.roomId)
    .filter(id => id !== char.id)
    .map(id => {
      const c = getCharacterById(id);
      return c ? buildRoomPlayerDetails(c) : null;
    })
    .filter((player): player is RoomEntityPlayer => Boolean(player));

  const aliveMonsterInstances = world.getAliveMonsters(char.roomId);
  const monsterLabels = buildOrdinalLabels(aliveMonsterInstances, monster => monster.def.name);
  const monsters = aliveMonsterInstances.map((m, index) => ({
    id: m.instanceId,
    name: m.def.name,
    alias: m.def.alias,
    label: monsterLabels[index],
    level: m.def.level,
    hp: m.hp,
    maxHp: m.maxHp,
    monsterDetails: {
      monsterId: m.monsterId,
      name: m.def.name,
      alias: m.def.alias,
      level: m.def.level,
      hp: m.hp,
      maxHp: m.maxHp,
      mp: m.def.mp,
      maxMp: m.def.mp,
      element: m.def.element,
      family: m.def.family,
      aiType: m.def.aiType,
      behaviorType: m.def.behaviorType,
      isBoss: m.def.isBoss,
      isElite: m.def.isElite,
      expReward: m.def.expReward,
      goldReward: m.def.goldReward,
      stats: {
        str: m.def.str,
        int: m.def.int,
        dex: m.def.dex,
        vit: m.def.vit,
        luk: m.def.luk,
      },
      skills: m.def.skills,
      drops: m.def.drops.map(drop => ({
        itemId: drop.itemId,
        chance: drop.chance,
        minQty: drop.minQty,
        maxQty: drop.maxQty,
      })),
      description: m.def.description,
    },
  }));
  const zone = getZone(roomInfo.room.zone);
  const now = Date.now();
  const corpseContainers = corpseMgr.getCorpses(char.roomId).filter(corpse => shouldShowCorpseToCharacter(corpse, char.id));
  const roomCorpseLabels = buildOrdinalLabels(corpseContainers, corpse => corpse.monsterName);
  const roomCorpses = corpseContainers.map((corpse, index) => ({
    id: corpse.id,
    monsterName: corpse.monsterName,
    label: roomCorpseLabels[index],
    empty: isCorpseEmptyForCharacter(corpse, char.id),
    protected: now < corpse.protectedUntil && !corpse.participantIds.includes(char.id),
    protectedUntil: corpse.protectedUntil,
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
  const instanceEntries = buildInstanceEntryDefs(ZONES)
    .filter(entry => entry.roomId === char.roomId)
    .map(entry => buildInstanceEntryPayload(char, entry));
  const faithAltar = getFaithAltarByRoomId(roomInfo.room.id);
  const groundItems = getAvailableGroundItems(char.roomId);
  const roomItems = groundItems.map(groundItem => ({
    id: groundItem.itemId,
    name: ITEM_DEFS[groundItem.itemId]?.name ?? groundItem.itemId,
  }));
  const mapLayerNameByRoom = new Map(
    [...buildRoomMapLayerLookup(Object.values(ROOMS)).entries()]
      .map(([roomId, layer]) => [roomId, layer.mapLayerName ?? formatMapLayerName(layer.mapLayer)]),
  );
  const entities = buildRoomEntities({
    char,
    room: roomInfo.room,
    getRoom,
    mapLayerNameByRoom,
    npcs: roomInfo.npcs || [],
    players: playersInRoom,
    monsters,
    corpses: roomCorpses,
    gatheringNodes,
    travelNodes: roomTravelNodes,
    groundItems,
  });
  const inspectHints = buildRoomInspectHints(roomInfo.room, roomCorpses.length > 0, gatheringNodes.length > 0, roomTravelNodes.length > 0 || instanceEntries.length > 0);

  return {
    id: char.roomId,
    zone: roomInfo.room.zone,
    zoneName: zone?.name,
    name: roomInfo.room.name,
    description: roomInfo.room.description,
    silent,
    localMap: buildLocalMapPayload(char, roomInfo.room),
    image: roomInfo.room.image,
    exits: enrichRoomExits(roomInfo.room),
    players: playersInRoom,
    npcs: roomInfo.npcs || [],
    items: roomItems,
    monsters,
    corpses: roomCorpses,
    gatheringNodes,
    travelNodes: roomTravelNodes,
    instanceEntries,
    faithAltar: faithAltar ? {
      faithId: faithAltar.faithId,
      faithName: FAITH_DEFS[faithAltar.faithId].name,
      faithTitle: FAITH_DEFS[faithAltar.faithId].title,
      locationHint: faithAltar.locationHint,
      actionCommand: `faith follow ${faithAltar.faithId}`,
    } : undefined,
    inspectHints,
    entities,
    nearbyCombat: buildNearbyCombatPayload({
      characterId: char.id,
      currentRoom: roomInfo.room,
      getAliveMonsters: roomId => world.getAliveMonsters(roomId),
      getApproachingMonsters: roomId => world.getApproachingMonsters(roomId),
      isScouted: (characterId, roomId) => hasLocalScout(characterId, roomInfo.room.id, roomId),
    }),
  };
}

export function buildRoomPlayerDetails(char: Character): RoomEntityPlayer {
  return {
    id: char.id,
    name: char.name,
    level: char.level,
    classId: char.classId,
    raceId: char.raceId,
    genderId: char.genderId,
    faithId: char.faithId,
    hp: char.hp,
    maxHp: char.maxHp,
    mp: char.mp,
    maxMp: char.maxMp,
    resource: char.resource,
    maxResource: char.maxResource,
    resourceType: char.resourceType,
    stats: char.stats,
    equipment: char.equipment,
  };
}

export function buildLocalMapPayload(char: Character, currentRoom: RoomDef): LocalMapPayload {
  const currentCoord = getRoomWorldCoord(currentRoom.id);

  if (currentCoord) {
    const nearbyRooms: LocalMapPayload['rooms'] = [];
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const room = getRoomByWorldCoord(currentCoord.worldX + dx, currentCoord.worldY + dy);
        if (!room) continue;
        const explored = room.id === currentRoom.id || hasDiscovery(char.id, 'visit_room', room.id);
        const adjacent = isWorldAdjacent(currentCoord.worldX, currentCoord.worldY, currentCoord.worldX + dx, currentCoord.worldY + dy)
          || currentRoom.exits.some(exit => exit.targetRoomId === room.id);
        if (!explored && !adjacent) continue;
        const zoneName = getZone(room.zone)?.name;
        nearbyRooms.push({
          id: room.id,
          name: room.name,
          zone: room.zone,
          ...(zoneName ? { zoneName } : {}),
          x: currentCoord.worldX + dx,
          y: currentCoord.worldY + dy,
          explored,
          exits: enrichRoomExits(room),
        });
      }
    }
    return { size: 5, currentRoom: currentRoom.id, rooms: nearbyRooms };
  }

  const zoneRooms = getRoomsByZone(currentRoom.zone);
  const planarRoomIds = getPlanarRoomIds(currentRoom, zoneRooms);
  const rooms = zoneRooms
    .filter(room => planarRoomIds.has(room.id))
    .filter(room => Math.abs(room.mapX - currentRoom.mapX) <= 2 && Math.abs(room.mapY - currentRoom.mapY) <= 2)
    .map(room => {
      const explored = room.id === currentRoom.id || hasDiscovery(char.id, 'visit_room', room.id);
      const adjacent = currentRoom.exits.some(exit => exit.targetRoomId === room.id);
      const zoneName = getZone(room.zone)?.name;
      if (!explored && !adjacent) return null;
      return {
        id: room.id,
        name: room.name,
        zone: room.zone,
        ...(zoneName ? { zoneName } : {}),
        x: room.mapX,
        y: room.mapY,
        explored,
        exits: enrichRoomExits(room),
      };
    })
    .filter((room): room is LocalMapPayload['rooms'][number] => Boolean(room));

  return { size: 5, currentRoom: currentRoom.id, rooms };
}

export function isWorldAdjacent(x1: number, y1: number, x2: number, y2: number): boolean {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) === 1;
}

export function getPlanarRoomIds(currentRoom: RoomDef, zoneRooms: RoomDef[]): Set<string> {
  const zoneRoomIds = new Set(zoneRooms.map(room => room.id));
  const planarNeighbors = new Map<string, Set<string>>();

  for (const room of zoneRooms) {
    const neighbors = planarNeighbors.get(room.id) ?? new Set<string>();
    planarNeighbors.set(room.id, neighbors);

    for (const exit of room.exits) {
      if (!PLANAR_DIRECTIONS.has(exit.direction) || !zoneRoomIds.has(exit.targetRoomId)) continue;
      neighbors.add(exit.targetRoomId);

      const reverseNeighbors = planarNeighbors.get(exit.targetRoomId) ?? new Set<string>();
      reverseNeighbors.add(room.id);
      planarNeighbors.set(exit.targetRoomId, reverseNeighbors);
    }
  }

  const visited = new Set<string>([currentRoom.id]);
  const queue = [currentRoom.id];
  for (let index = 0; index < queue.length; index++) {
    const roomId = queue[index];
    for (const neighborId of planarNeighbors.get(roomId) ?? []) {
      if (visited.has(neighborId)) continue;
      visited.add(neighborId);
      queue.push(neighborId);
    }
  }

  return visited;
}

export function enrichRoomExits(room: RoomDef): RoomExit[] {
  const COORD_DELTAS: { dir: Direction; dx: number; dy: number }[] = [
    { dir: 'north', dx: 0, dy: -1 },
    { dir: 'south', dx: 0, dy: 1 },
    { dir: 'east', dx: 1, dy: 0 },
    { dir: 'west', dx: -1, dy: 0 },
  ];

  const coord = getRoomWorldCoord(room.id);
  if (coord) {
    const lockedDirs = new Set(room.exits.filter(e => e.locked).map(e => e.direction));
    const enriched: RoomExit[] = [];
    for (const { dir, dx, dy } of COORD_DELTAS) {
      if (lockedDirs.has(dir)) continue;
      const neighbor = getRoomByWorldCoord(coord.worldX + dx, coord.worldY + dy);
      if (!neighbor) continue;
      const neighborZone = getZone(neighbor.zone);
      const explicit = room.exits.find(e => e.direction === dir);
      enriched.push({
        direction: dir,
        targetRoomId: neighbor.id,
        targetZoneId: neighbor.zone,
        targetZoneName: neighborZone?.name,
        description: explicit?.description,
      });
    }
    return enriched;
  }

  return room.exits.map(exit => {
    const targetRoom = getRoom(exit.targetRoomId);
    const targetZone = targetRoom ? getZone(targetRoom.zone) : undefined;
    return {
      ...exit,
      targetZoneId: targetRoom?.zone,
      targetZoneName: targetZone?.name,
    };
  });
}

export function buildInstanceEntryPayload(char: Character, entry: InstanceEntryDef) {
  const availability = getInstanceEntryAvailability(char, entry);
  return {
    id: entry.id,
    instanceTemplateId: entry.instanceTemplateId,
    type: entry.type,
    objectId: entry.objectId,
    npcId: entry.npcId,
    name: entry.name,
    description: entry.description,
    minLevel: entry.minLevel,
    maxPartySize: entry.maxPartySize,
    cooldownSeconds: entry.cooldownSeconds,
    disabled: !availability.ok,
    disabledReason: availability.ok ? undefined : availability.message,
    actionCommand: getInstanceEntryActionCommand(entry),
    requiredItemId: entry.requiredItemId,
    consumeItem: entry.consumeItem,
    requiredQuestId: entry.requiredQuestId,
    requiredQuestState: entry.requiredQuestState,
    difficultyOptions: entry.difficultyOptions,
  };
}

export function getInstanceEntryActionCommand(entry: InstanceEntryDef): string {
  if (entry.type === 'npc_dialogue' && entry.npcId) return `talk ${entry.npcId}`;
  if (entry.type === 'item_use' && entry.requiredItemId) return `use ${entry.requiredItemId}`;
  return `enter ${entry.objectId ?? entry.id}`;
}

export function getInstanceEntryAvailability(char: Character, entry: InstanceEntryDef): { ok: true } | { ok: false; message: string } {
  if (entry.minLevel && char.level < entry.minLevel) {
    return { ok: false, message: `你正在查看副本入口「${entry.name}」，但等級不足；目前等級 ${char.level}，需求等級 ${entry.minLevel}。下一步請先完成同等級任務或提升等級後再返回入口。` };
  }

  const partyMembers = partyMgr.isInParty(char.id) ? partyMgr.getPartyMembers(char.id) : [char.id];
  if (partyMgr.isInParty(char.id) && !partyMgr.isLeader(char.id)) {
    return { ok: false, message: `你正在查看副本入口「${entry.name}」，但目前隊伍狀態不是隊長；只有隊長可以開啟此入口。下一步請隊長操作，或先離隊後單人進入。` };
  }
  if (entry.maxPartySize && partyMembers.length > entry.maxPartySize) {
    return { ok: false, message: `你正在查看副本入口「${entry.name}」，但隊伍人數不符；目前 ${partyMembers.length} 人，最多 ${entry.maxPartySize} 人。下一步請調整隊伍人數後由隊長再次進入。` };
  }

  const cooldownOwnerId = partyMgr.getPartyId(char.id) ?? char.id;
  const cooldownRemaining = getInstanceEntryCooldownRemainingSeconds(cooldownOwnerId, entry.id);
  if (cooldownRemaining > 0) {
    return { ok: false, message: `你正在查看副本入口「${entry.name}」，但入口仍在冷卻中；目前剩餘 ${cooldownRemaining} 秒，需求剩餘 0 秒後才能再次開啟。下一步請等待冷卻結束後再使用入口。` };
  }

  const gate = checkInstanceEntryRequirements(char, entry);
  if (!gate.ok) return gate;
  return { ok: true };
}

export function broadcastRoomState(roomId: string): void {
  for (const onlineSession of getAllSessions()) {
    if (!onlineSession.characterId) continue;
    const char = getCharacterById(onlineSession.characterId);
    if (!char || char.roomId !== roomId) continue;
    const payload = buildRoomPayload(char, true);
    if (payload) sendToSession(onlineSession.sessionId, 'room', payload as unknown as Record<string, unknown>);
  }
}

// ─── Quest / status helpers ───

export function sendQuestUpdate(session: WsSession, action = 'sync'): void {
  const char = getChar(session);
  if (!char) return;
  sendToSession(session.sessionId, 'quest_update', {
    action,
    quests: questMgr.getActiveQuestSummaries(char.id),
  });
}

export function buildRoomInspectHints(
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
  const altar = getFaithAltarByRoomId(room.id);
  if (altar) hints.push({ label: '改信祭壇', command: `faith follow ${altar.faithId}` });
  return hints;
}

export function updateExplorationAchievements(characterId: string, zoneId: string, roomId: string): void {
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
    // exploration achievement failure should not affect room display
  }
}

// ─── Character status ───

export function sendCharacterStatus(sessionId: string, char: Character): void {
  removeLegacyAdventurerSkills(char);

  const expProgress = getLevelExpProgress(char);
  const combatId = getPlayerCombatId(char.id);
  const combatantEffects = combatId
    ? combat.getCombatState(combatId)?.playerTeam.find(player => player.id === char.id)?.activeEffects ?? []
    : [];

  sendToSession(sessionId, 'status', {
    character: { ...char, exp: expProgress.current },
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
    expToNext: expProgress.required,
    effects: combatantEffects,
    skills: getLearnedSkills(char.id),
    skillPoints: getSkillPointSummary(char.level, getLearnedSkills(char.id)),
    aliases: getCharacterAliases(char.id),
  });
}

export function sendCharacterStatusById(characterId: string): void {
  const playerSession = getSessionByCharacterId(characterId);
  if (!playerSession) return;

  const char = getCharacterById(characterId);
  if (!char) return;

  sendCharacterStatus(playerSession.sessionId, char);
}

// ─── Quest drop helpers ───

export function getActiveQuestDropIds(characterId: string, monster: MonsterDef): Set<string> {
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

// ─── Field skill cooldown helpers ───

export function fieldSkillCooldownKey(characterId: string, skillId: string): string {
  return `${characterId}:${skillId}`;
}

export function getFieldSkillCooldownRemaining(characterId: string, skillId: string): number {
  const until = fieldSkillCooldowns.get(fieldSkillCooldownKey(characterId, skillId)) ?? 0;
  const remainingMs = until - Date.now();
  if (remainingMs <= 0) {
    fieldSkillCooldowns.delete(fieldSkillCooldownKey(characterId, skillId));
    return 0;
  }
  return Math.ceil(remainingMs / 1000);
}

export function startFieldSkillCooldown(characterId: string, skillId: string, cooldownTicks: number): void {
  if (cooldownTicks <= 0) return;
  fieldSkillCooldowns.set(fieldSkillCooldownKey(characterId, skillId), Date.now() + cooldownTicks * FIELD_SKILL_COOLDOWN_TICK_MS);
}

// ─── Exit trap helpers ───

export function exitTrapKey(roomId: string, direction: CardinalDirection): string {
  return `${roomId}:${direction}`;
}

export function isCardinalDirection(value: string): value is CardinalDirection {
  return CARDINAL_DIRECTIONS.includes(value as CardinalDirection);
}

export function consumeExitTrap(roomId: string, direction: CardinalDirection): ActiveExitTrap | undefined {
  const key = exitTrapKey(roomId, direction);
  const trap = activeExitTraps.get(key);
  if (trap) activeExitTraps.delete(key);
  return trap;
}

export function grantTrapFocus(trap: ActiveExitTrap, fallbackSessionId: string): void {
  if (trap.resourceGainOnTrigger <= 0) return;
  const owner = getCharacterById(trap.ownerId);
  if (!owner || owner.resourceType !== 'focus') return;
  const before = owner.resource;
  owner.resource = Math.min(owner.maxResource, owner.resource + trap.resourceGainOnTrigger);
  saveCharacter(owner);
  const actual = owner.resource - before;
  if (actual <= 0) return;
  const ownerSession = getSessionByCharacterId(owner.id);
  sendSystem(ownerSession?.sessionId ?? fallbackSessionId, `你的陷阱觸發，恢復了 ${actual} 點專注。`);
}

// ─── Cross-room skill helpers ───

export function getNumericSpecial(skillDef: typeof SKILL_DEFS[string], key: string): number | undefined {
  const value = skillDef.special?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

export function getSkillUsageContext(skillDef: typeof SKILL_DEFS[string]): 'combat' | 'field' | 'both' {
  return (skillDef as typeof skillDef & { usageContext?: 'combat' | 'field' | 'both' }).usageContext ?? 'combat';
}

export function spendSkillResource(char: Character, skillDef: typeof SKILL_DEFS[string], resourceCost: number): void {
  const faithBonus = char.resourceType === 'faith' ? getResourceAffixBonus(char.id, 'faithDelta') : 0;
  applySkillResourceChange(char, skillDef, resourceCost, faithBonus);
}

// ─── Instance entry helpers ───

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

// ─── Zone / portal / travel utilities ───

export {
  canAccessTravelNode,
  canAccessZone,
  canTravelFromCurrentRoom,
  canUseInventoryRestrictedTravel,
  canUseKingdomCargoRestrictedTravel,
  canUsePvpDamageRestrictedTravel,
  findPortalZone,
  findTravelNode,
  formatTravelCost,
  getTravelCooldownRemaining,
  getTravelCostAmount,
  getTravelNodesByActivationRoom,
  payTravelCost,
  setTravelCooldown,
} from './cmd-travel-helpers.js';

// ─── General utility functions ───

export function normalizeCommandTarget(target: string): string {
  return target.trim().toLowerCase();
}

export function parseOrdinalTarget(target: string): { name: string; ordinal?: number } {
  const trimmed = target.trim();
  const hashMatch = trimmed.match(/^(.+?)#(\d+)$/);
  const spaceMatch = trimmed.match(/^(.+?)\s+(\d+)$/);
  const match = hashMatch ?? spaceMatch;
  if (!match) return { name: trimmed };

  const ordinal = parseInt(match[2], 10);
  if (!Number.isFinite(ordinal) || ordinal < 1) return { name: trimmed };
  return { name: match[1].trim(), ordinal };
}

export function resolveCombatTargetId(combatId: string, target: string): string | undefined {
  if (!target.trim()) return undefined;

  const state = combat.getCombatState(combatId);
  if (!state) return undefined;

  const parsed = parseOrdinalTarget(target);
  const query = parsed.name.toLowerCase();
  const combatants = [...state.enemyTeam, ...state.playerTeam].filter(combatant => !combatant.isDead);
  const matches = combatants.filter(combatant =>
    combatant.id === parsed.name
    || combatant.name === parsed.name
    || combatant.name.includes(parsed.name)
    || combatant.name.toLowerCase() === query
    || combatant.name.toLowerCase().includes(query),
  );

  return parsed.ordinal ? matches[parsed.ordinal - 1]?.id : matches[0]?.id;
}

export function findGroundItem(roomId: string, target: string): GroundItem | undefined {
  const lower = normalizeCommandTarget(target);
  return getAvailableGroundItems(roomId).find(groundItem => {
    const def = ITEM_DEFS[groundItem.itemId];
    return groundItem.itemId.toLowerCase() === lower
      || def?.name === target
      || !!def?.name.toLowerCase().includes(lower);
  });
}

export function findExit(room: RoomDef, target: string): RoomExit | undefined {
  const lower = normalizeCommandTarget(target);
  const directionByChinese: Record<string, string> = {
    北: 'north', 南: 'south', 東: 'east', 西: 'west',
    north: 'north', south: 'south', east: 'east', west: 'west',
  };
  const direction = directionByChinese[target] ?? directionByChinese[lower];
  return room.exits.find(exit => {
    if (direction && exit.direction === direction) return true;
    return exit.targetRoomId.toLowerCase() === lower
      || !!exit.description?.toLowerCase().includes(lower);
  });
}

export function sendSearchSummary(session: WsSession, room: RoomDef): void {
  const lines: string[] = [];
  const exits = room.exits.map(exit => `${directionChinese(exit.direction)}${exit.locked ? '(鎖)' : ''}`);
  if (exits.length > 0) lines.push(`出口：${exits.join('、')}`);

  const groundItems = getAvailableGroundItems(room.id);
  if (groundItems.length > 0) {
    const itemNames = groundItems.map(groundItem => ITEM_DEFS[groundItem.itemId]?.name ?? groundItem.itemId);
    lines.push(`可撿取物：${itemNames.join('、')}`);
  }

  const npcs = getNpcsByRoom(room.id);
  if (npcs.length > 0) lines.push(`NPC：${buildOrdinalLabels(npcs, npc => npc.name).join('、')}`);

  const monsters = world.getAliveMonsters(room.id);
  if (monsters.length > 0) lines.push(`怪物：${buildOrdinalLabels(monsters, monster => monster.def.name).join('、')}`);

  const corpses = corpseMgr.getCorpses(room.id);
  if (corpses.length > 0) {
    const corpseLabels = buildOrdinalLabels(corpses, corpse => corpse.monsterName);
    lines.push(`屍體：${corpses.map((corpse, index) => `${corpseLabels[index]}${corpse.gold <= 0 && corpse.items.length === 0 ? '(空)' : ''}`).join('、')}`);
  }

  if (lines.length === 0) {
    sendSystem(session.sessionId, '你仔細搜尋四周，暫時沒有找到可互動的物件。');
    return;
  }

  sendSystem(session.sessionId, '── 搜尋結果 ──');
  for (const line of lines) sendSystem(session.sessionId, line);
  sendSystem(session.sessionId, '可用 inspect <目標> 查看細節，或 open <目標> 嘗試開啟。');
}

export function getChar(session: WsSession): Character | null {
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

export function directionChinese(dir: string): string {
  const map: Record<string, string> = {
    north: '北', south: '南', east: '東', west: '西',
  };
  return map[dir] ?? dir;
}

export function isRemovedVerticalDirection(direction: string): boolean {
  const normalized = direction.trim().toLowerCase();
  return normalized === 'up' || normalized === 'down' || direction === '上' || direction === '下';
}

// ─── Room state change callback ───
// This registers broadcastRoomState with world so room state changes trigger broadcasts.
// It must run once at module load time.
world.setRoomStateChangeFunction((roomId) => {
  broadcastRoomState(roomId);
});
