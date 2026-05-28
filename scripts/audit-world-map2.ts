import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { DUNGEON_DEFS } from '../server/src/data/dungeons.js';
import { NPCS } from '../server/src/data/npcs.js';
import {
  buildInstanceEntryDefs,
  buildPlannedWorldCoordinateMap,
  buildZoneMapPlans,
  plannedMapScopeForRoom,
} from '../server/src/data/world-map2-plan.js';

type Bounds = { minX: number; maxX: number; minY: number; maxY: number };
type CrossZoneExitRecord = {
  fromZoneId: string;
  fromRoomId: string;
  direction: Direction;
  toZoneId: string;
  toRoomId: string;
  edgeKind: RoomDef['exits'][number]['edgeKind'];
  description: string;
  edgeNote?: string;
};

const CARDINAL_DELTAS: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 },
};

const write = process.argv.includes('--write');
const strict = process.argv.includes('--strict');
const outPath = resolve(process.cwd(), 'reports/world-map2-current.json');

const zonePlans = buildZoneMapPlans(ZONES);
const plannedWorldCoordinates = buildPlannedWorldCoordinateMap(ZONES, getRoom, zonePlans);
const rooms = Object.values(ROOMS);

const missingTargets: string[] = [];
const duplicateDirections: string[] = [];
const selfLoops: string[] = [];
const crossZoneExits: string[] = [];
const crossZoneExitRecords: CrossZoneExitRecord[] = [];
const specialEdges: string[] = [];
const worldRoomsMissingCoords: string[] = [];
const derivedWorldCoordinates: string[] = [];
const instanceEntranceCoordinates: string[] = [];
const instanceRoomsWithWorldCoords: string[] = [];
const coordinateOwners = new Map<string, string[]>();
const cardinalCoordinateMismatches: string[] = [];
const cardinalMismatchesWithinZone: string[] = [];
const cardinalMismatchesAcrossZones: string[] = [];
const cardinalMismatchCountsByZone = new Map<string, number>();
const instanceEntranceIssues: string[] = [];
const instanceEntryIssues: string[] = [];
const objectInteractEntryIssues: string[] = [];
const endgameEntryIssues: string[] = [];
const worldOrDecisionZonesMissingGlobalBounds: string[] = [];
const overlappingZoneGlobalBounds: string[] = [];
const crossZoneWorldAdjacencyIssues: string[] = [];
const borderRoomGaps: string[] = [];
const acceptedCrossZoneLongPaths: string[] = [];
const crossZoneLongPathIssues: string[] = [];
const twoDimensionalDesignIssues: string[] = [];
const mapPlanningUiIssues: string[] = [];
const zoneClassificationIssues: string[] = [];
const hybridPlanningIssues: string[] = [];
const instanceEntries = buildInstanceEntryDefs(ZONES);
const mapPlanningPageSource = readOptionalText(resolve(process.cwd(), '../client/src/components/MapPlanningPage.tsx'));

const REQUIRED_WORLD_ZONE_IDS = new Set([
  'starter_village',
  'starter_village_ext',
  'plains',
  'old_farmland',
  'whispering_valley',
  'wildgrass_hills',
  'lakeside_town',
  'kingsroad_market',
  'arena_quarter',
  'eastern_coast',
  'mist_harbor',
  'saltwind_flats',
  'bloodsalt_coast',
  'sapphire_lake',
  'moonlit_fen',
  'serpent_delta',
  'dark_forest',
  'blackwood',
  'amber_forest',
  'emerald_canopy',
  'silverpine_range',
  'storm_highlands',
  'frostbite_pass',
  'redrock_badlands',
  'glass_dunes',
  'thundersteppe',
  'ember_march',
  'volcano_zone',
  'ironwood_fort',
  'royal_hunting_grounds',
  'kingdom_frontier',
]);

const REQUIRED_INSTANCE_ZONE_IDS = new Set([
  'crystal_cave',
  'abandoned_mines',
  'sunken_catacombs',
  'underground_city',
  'cursed_graveyard',
  'ancient_ruins',
  'deepsea_temple',
  'obsidian_depths',
  'hollow_mountain',
  'machine_graveyard',
  'ashfall_monastery',
  'thornmaze',
  'reef_of_bones',
  'necropolis_gate',
  'lost_capital',
  'sunspire',
  'moonshadow_court',
  'dragon_valley',
  'sky_isles',
  'starfall_crater',
  'time_ruins',
  'abyss_rift',
  'astral_wastes',
  'celestial_ruins',
  'demon_territory',
  'final_battleground',
]);

const ALLOWED_DECISION_ZONE_IDS = new Set([
  'pilgrim_road',
  'marsh_of_mirrors',
  'frozen_wastes',
]);

for (const room of rooms) {
  const seenDirections = new Set<string>();
  const plan = zonePlans.get(room.zone);
  const scope = plannedMapScopeForRoom(room, plan);
  const worldCoordinate = plannedWorldCoordinates.get(room.id);
  const roomRecord = room as RoomDef & Record<string, unknown>;

  for (const forbiddenField of ['worldZ', 'worldLayer', 'worldLayerName']) {
    if (forbiddenField in roomRecord) {
      twoDimensionalDesignIssues.push(`${room.id}: forbidden global coordinate field ${forbiddenField}`);
    }
  }

  if (scope === 'world' && !worldCoordinate) {
    worldRoomsMissingCoords.push(`${room.zone}/${room.id}`);
  }
  if (scope === 'world' && worldCoordinate?.source === 'derived') {
    derivedWorldCoordinates.push(`${room.zone}/${room.id}: ${worldCoordinate.worldX},${worldCoordinate.worldY}`);
  }
  if (scope === 'world' && worldCoordinate?.source === 'instance-entry') {
    instanceEntranceCoordinates.push(`${room.zone}/${room.id}: ${worldCoordinate.worldX},${worldCoordinate.worldY}`);
  }
  if (scope === 'instance' && (typeof room.worldX === 'number' || typeof room.worldY === 'number')) {
    instanceRoomsWithWorldCoords.push(`${room.zone}/${room.id}`);
  }
  if (scope === 'world' && worldCoordinate) {
    const key = `${worldCoordinate.worldX},${worldCoordinate.worldY}`;
    coordinateOwners.set(key, [...(coordinateOwners.get(key) ?? []), room.id]);
  }

  for (const exit of room.exits) {
    if (seenDirections.has(exit.direction)) {
      duplicateDirections.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
    }
    seenDirections.add(exit.direction);

    const target = getRoom(exit.targetRoomId);
    if (!target) {
      missingTargets.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      continue;
    }
    if (target.id === room.id) {
      selfLoops.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
    }
    if (target.zone !== room.zone) {
      crossZoneExits.push(`${room.zone}/${room.id}:${exit.direction}->${target.zone}/${target.id}`);
      crossZoneExitRecords.push({
        fromZoneId: room.zone,
        fromRoomId: room.id,
        direction: exit.direction,
        toZoneId: target.zone,
        toRoomId: target.id,
        edgeKind: exit.edgeKind,
        description: exit.description,
        edgeNote: exit.edgeNote,
      });
    }
    if (exit.edgeKind && exit.edgeKind !== 'normal') {
      specialEdges.push(`${room.id}:${exit.direction}->${target.id} (${exit.edgeKind}) ${exit.edgeNote ?? ''}`.trim());
    }

    const targetPlan = zonePlans.get(target.zone);
    const targetScope = plannedMapScopeForRoom(target, targetPlan);
    const targetWorldCoordinate = plannedWorldCoordinates.get(target.id);
    const canCheckCoordinates =
      scope === 'world' &&
      targetScope === 'world' &&
      Boolean(worldCoordinate) &&
      Boolean(targetWorldCoordinate) &&
      (!exit.edgeKind || exit.edgeKind === 'normal');
    if (canCheckCoordinates) {
      const delta = CARDINAL_DELTAS[exit.direction];
      if (
        !targetWorldCoordinate ||
        !worldCoordinate ||
        targetWorldCoordinate.worldX !== worldCoordinate.worldX + delta.dx ||
        targetWorldCoordinate.worldY !== worldCoordinate.worldY + delta.dy
      ) {
        const mismatch = `${room.id}(${worldCoordinate?.worldX},${worldCoordinate?.worldY}) ${exit.direction}-> ${target.id}(${targetWorldCoordinate?.worldX},${targetWorldCoordinate?.worldY})`;
        cardinalCoordinateMismatches.push(mismatch);
        if (room.zone === target.zone) {
          cardinalMismatchesWithinZone.push(mismatch);
          cardinalMismatchCountsByZone.set(room.zone, (cardinalMismatchCountsByZone.get(room.zone) ?? 0) + 1);
        } else {
          const zonePair = `${room.zone}->${target.zone}`;
          cardinalMismatchesAcrossZones.push(`${zonePair}: ${mismatch}`);
          cardinalMismatchCountsByZone.set(zonePair, (cardinalMismatchCountsByZone.get(zonePair) ?? 0) + 1);
        }
      }
    }
  }
}

for (const [zoneId, plan] of zonePlans.entries()) {
  if (REQUIRED_WORLD_ZONE_IDS.has(zoneId) && plan.decision !== 'world') {
    zoneClassificationIssues.push(`${zoneId}: expected world decision for public long-lived terrain, got ${plan.decision}`);
  }
  if (REQUIRED_INSTANCE_ZONE_IDS.has(zoneId) && plan.decision !== 'instance') {
    zoneClassificationIssues.push(`${zoneId}: expected instance decision for dungeon/otherworld/challenge content, got ${plan.decision}`);
  }
  if (plan.decision === 'decision' && !ALLOWED_DECISION_ZONE_IDS.has(zoneId)) {
    zoneClassificationIssues.push(`${zoneId}: unexpected unresolved decision zone`);
  }
  if (plan.decision !== 'decision' && ALLOWED_DECISION_ZONE_IDS.has(zoneId)) {
    zoneClassificationIssues.push(`${zoneId}: expected product decision state until hybrid/world/instance is explicitly chosen`);
  }

  if (plan.decision !== 'instance' && plan.decision !== 'hybrid') continue;
  if (!plan.entranceRoomId) {
    instanceEntranceIssues.push(`${zoneId}: missing entranceRoomId`);
    continue;
  }
  if (!getRoom(plan.entranceRoomId)) {
    instanceEntranceIssues.push(`${zoneId}: entrance room ${plan.entranceRoomId} missing`);
  }
}

for (const [zoneId, plan] of zonePlans.entries()) {
  if (plan.decision !== 'hybrid') continue;
  const zone = ZONES[zoneId];
  if (!plan.entranceRoomId) {
    hybridPlanningIssues.push(`${zoneId}: hybrid zone missing entranceRoomId`);
  }
  const worldRooms = zone.rooms.filter(roomId => {
    const room = getRoom(roomId);
    return room ? plannedMapScopeForRoom(room, plan) === 'world' : false;
  });
  const instanceRooms = zone.rooms.filter(roomId => {
    const room = getRoom(roomId);
    return room ? plannedMapScopeForRoom(room, plan) === 'instance' : false;
  });
  if (worldRooms.length === 0) {
    hybridPlanningIssues.push(`${zoneId}: hybrid zone has no world rooms listed`);
  }
  if (instanceRooms.length === 0) {
    hybridPlanningIssues.push(`${zoneId}: hybrid zone has no instance rooms listed`);
  }
}

const finalBattlegroundEndgameEntries = instanceEntries.filter(entry =>
  entry.instanceTemplateId === 'final_battleground' &&
  entry.requiredItemId === 'final_standard_seal' &&
  (entry.cooldownSeconds ?? 0) > 0 &&
  (entry.difficultyOptions?.length ?? 0) >= 3,
);
if (finalBattlegroundEndgameEntries.length === 0) {
  endgameEntryIssues.push('final_battleground: missing requiredItemId + cooldown + multi-difficulty endgame entry');
}

for (const [zoneId, plan] of zonePlans.entries()) {
  if (plan.decision !== 'instance') continue;
  const zone = ZONES[zoneId];
  const worldScopedRooms = zone.rooms.filter(roomId => {
    const room = getRoom(roomId);
    return room ? plannedMapScopeForRoom(room, plan) === 'world' : false;
  });
  if (worldScopedRooms.length !== 1 || worldScopedRooms[0] !== plan.entranceRoomId) {
    zoneClassificationIssues.push(`${zoneId}: instance zone should expose only entrance room on world map, got ${worldScopedRooms.join(', ') || 'none'}`);
  }

  const zoneEntries = instanceEntries.filter(entry => entry.instanceTemplateId === zoneId);
  const objectEntries = zoneEntries.filter(entry => entry.type === 'object_interact');
  if (zoneEntries.length === 0) {
    instanceEntryIssues.push(`${zoneId}: missing InstanceEntryDef`);
    continue;
  }
  if (objectEntries.length === 0) {
    objectInteractEntryIssues.push(`${zoneId}: missing object_interact entry for general exploration dungeon entry`);
  }
  for (const entry of objectEntries) {
    const room = getRoom(entry.roomId);
    if (!room) {
      objectInteractEntryIssues.push(`${entry.id}: object_interact room ${entry.roomId} missing`);
      continue;
    }
    const roomPlan = zonePlans.get(room.zone);
    if (plannedMapScopeForRoom(room, roomPlan) !== 'world') {
      objectInteractEntryIssues.push(`${entry.id}: object_interact entry room ${entry.roomId} is not world scope`);
    }
    if (!entry.objectId) {
      objectInteractEntryIssues.push(`${entry.id}: object_interact entry missing objectId`);
    }
    if (!entry.dungeonId || !DUNGEON_DEFS[entry.dungeonId]) {
      objectInteractEntryIssues.push(`${entry.id}: object_interact entry missing mapped runtime dungeon`);
    }
  }
  for (const entry of zoneEntries) {
    const room = getRoom(entry.roomId);
    if (!room) {
      instanceEntryIssues.push(`${entry.id}: room ${entry.roomId} missing`);
      continue;
    }
    const roomPlan = zonePlans.get(room.zone);
    if (plannedMapScopeForRoom(room, roomPlan) !== 'world') {
      instanceEntryIssues.push(`${entry.id}: entry room ${entry.roomId} is not planned as world scope`);
    }
    if (!entry.name || entry.name === '入口') {
      instanceEntryIssues.push(`${entry.id}: entry name is not specific`);
    }
    if (countCjkChars(entry.description) < 45) {
      instanceEntryIssues.push(`${entry.id}: description too short (${countCjkChars(entry.description)}/45)`);
    }
    if (entry.type === 'object_interact' && !entry.objectId) {
      instanceEntryIssues.push(`${entry.id}: object_interact entry missing objectId`);
    }
    if (entry.type === 'item_use') {
      if (!entry.requiredItemId) {
        instanceEntryIssues.push(`${entry.id}: item_use entry missing requiredItemId`);
      } else if (!ITEM_DEFS[entry.requiredItemId]) {
        instanceEntryIssues.push(`${entry.id}: requiredItemId ${entry.requiredItemId} missing in ITEM_DEFS`);
      }
    }
    if (entry.type === 'npc_dialogue') {
      if (!entry.npcId) {
        instanceEntryIssues.push(`${entry.id}: npc_dialogue entry missing npcId`);
      } else if (!NPCS[entry.npcId]) {
        instanceEntryIssues.push(`${entry.id}: npcId ${entry.npcId} missing in NPCS`);
      } else if (NPCS[entry.npcId].roomId !== entry.roomId) {
        instanceEntryIssues.push(`${entry.id}: npc ${entry.npcId} is in ${NPCS[entry.npcId].roomId}, expected ${entry.roomId}`);
      }
    }
    if (entry.dungeonId && !DUNGEON_DEFS[entry.dungeonId]) {
      instanceEntryIssues.push(`${entry.id}: dungeonId ${entry.dungeonId} missing in DUNGEON_DEFS`);
    }
  }
}

const zoneGlobalBounds = [...zonePlans.values()].filter(plan => plan.decision === 'world' || plan.decision === 'decision');
for (const plan of zoneGlobalBounds) {
  if (!plan.globalBounds) {
    worldOrDecisionZonesMissingGlobalBounds.push(`${plan.zoneId}:${plan.decision}`);
  } else {
    for (const key of Object.keys(plan.globalBounds)) {
      if (!['minX', 'maxX', 'minY', 'maxY', 'anchor', 'terrainRole'].includes(key)) {
        twoDimensionalDesignIssues.push(`${plan.zoneId}: global bounds contains non-2D field ${key}`);
      }
    }
  }
}
for (let i = 0; i < zoneGlobalBounds.length; i++) {
  const left = zoneGlobalBounds[i];
  if (!left.globalBounds) continue;
  for (let j = i + 1; j < zoneGlobalBounds.length; j++) {
    const right = zoneGlobalBounds[j];
    if (!right.globalBounds) continue;
    if (boundsOverlap(left.globalBounds, right.globalBounds)) {
      overlappingZoneGlobalBounds.push(`${left.zoneId} overlaps ${right.zoneId}`);
    }
  }
}

for (const exitRecord of crossZoneExitRecords) {
  const fromPlan = zonePlans.get(exitRecord.fromZoneId);
  const toPlan = zonePlans.get(exitRecord.toZoneId);
  if (!fromPlan?.globalBounds || !toPlan?.globalBounds) continue;
  if (fromPlan.decision === 'instance' || toPlan.decision === 'instance') continue;
  const label = `${exitRecord.fromZoneId}/${exitRecord.fromRoomId}:${exitRecord.direction}->${exitRecord.toZoneId}/${exitRecord.toRoomId}`;
  if (exitRecord.edgeKind && exitRecord.edgeKind !== 'normal') {
    const longPathIssue = getCrossZoneLongPathIssue(exitRecord);
    if (longPathIssue) {
      crossZoneLongPathIssues.push(`${label}: ${longPathIssue}`);
    } else if (exitRecord.edgeKind === 'long_path') {
      acceptedCrossZoneLongPaths.push(label);
    }
    continue;
  }

  const issue = getDirectionalBoundsIssue(exitRecord.direction, fromPlan.globalBounds, toPlan.globalBounds);
  if (!issue) continue;
  crossZoneWorldAdjacencyIssues.push(`${label}: ${issue}`);
  if (issue.includes('gap')) {
    borderRoomGaps.push(`${label}: ${issue}`);
  }
}

if (!mapPlanningPageSource) {
  mapPlanningUiIssues.push('/mud/map planning UI source missing: client/src/components/MapPlanningPage.tsx');
} else {
  if (!mapPlanningPageSource.includes("useState<'local' | 'planning'>('local')")) {
    mapPlanningUiIssues.push('/mud/map missing explicit local/planning mode state');
  }
  if (!mapPlanningPageSource.includes('現況 local map') || !mapPlanningPageSource.includes('規劃 global map')) {
    mapPlanningUiIssues.push('/mud/map missing visible local/global mode controls');
  }
  if (!mapPlanningPageSource.includes('function buildGlobalAtlas')) {
    mapPlanningUiIssues.push('/mud/map missing global atlas layout function');
  }
  if (!mapPlanningPageSource.includes('zone.mapPlan.globalBounds')) {
    mapPlanningUiIssues.push('/mud/map planning mode does not use zone global bounds as overlay placement');
  }
  if (!mapPlanningPageSource.includes('className="map-planning-zone-frame"')) {
    mapPlanningUiIssues.push('/mud/map missing zone overlay frame rendering');
  }
  if (!mapPlanningPageSource.includes("'map-planning-room'") || !mapPlanningPageSource.includes('width={CELL - 2}') || !mapPlanningPageSource.includes('height={CELL - 2}')) {
    mapPlanningUiIssues.push('/mud/map missing square room cell rendering');
  }
  if (!mapPlanningPageSource.includes('function toPlanningDisplayZone') || !mapPlanningPageSource.includes('templateRooms')) {
    mapPlanningUiIssues.push('/mud/map missing instance entrance marker collapse with template room list');
  }
}

const coordinateCollisions = [...coordinateOwners.entries()]
  .filter(([, owners]) => owners.length > 1)
  .map(([coord, owners]) => `${coord}: ${owners.join(', ')}`);

const cardinalMismatchHotspots = [...cardinalMismatchCountsByZone.entries()]
  .sort((left, right) => right[1] - left[1])
  .map(([zoneOrPair, count]) => `${zoneOrPair}: ${count}`);

const topologyAcceptanceIssues = [
  ...missingTargets.map(issue => `missing target: ${issue}`),
  ...duplicateDirections.map(issue => `duplicate direction: ${issue}`),
  ...selfLoops.map(issue => `self loop: ${issue}`),
  ...cardinalCoordinateMismatches.map(issue => `cardinal mismatch: ${issue}`),
];

const zones = Object.values(ZONES).map(zone => {
  const zoneRooms = zone.rooms.map(roomId => getRoom(roomId)).filter((room): room is RoomDef => Boolean(room));
  const bounds = getBounds(zoneRooms);
  const plan = zonePlans.get(zone.id);
  return {
    id: zone.id,
    name: zone.name,
    decision: plan?.decision ?? 'decision',
    reason: plan?.reason ?? '',
    entranceRoomId: plan?.entranceRoomId,
    globalBounds: plan?.globalBounds,
    roomCount: zoneRooms.length,
    bounds,
  };
});

const report = {
  generatedAt: new Date().toISOString(),
  counts: {
    zones: Object.keys(ZONES).length,
    rooms: rooms.length,
    crossZoneConnections: new Set(crossZoneExits.map(exit => {
      const [from, to] = exit.split('->');
      const fromZone = from.split('/')[0];
      const toZone = to.split('/')[0];
      return [fromZone, toZone].sort().join(':');
    })).size,
    crossZoneExits: crossZoneExits.length,
    worldZones: zones.filter(zone => zone.decision === 'world').length,
    instanceZones: zones.filter(zone => zone.decision === 'instance').length,
    hybridZones: zones.filter(zone => zone.decision === 'hybrid').length,
    decisionZones: zones.filter(zone => zone.decision === 'decision').length,
  },
  zones,
  topology: {
    missingTargets,
    duplicateDirections,
    selfLoops,
  },
  crossZoneExits,
  acceptance: {
    topologyIssues: topologyAcceptanceIssues,
  },
  worldCoordinate: {
    worldRoomsMissingCoords,
    derivedWorldCoordinates,
    instanceEntranceCoordinates,
    coordinateCollisions,
    cardinalCoordinateMismatches,
    cardinalMismatchesWithinZone,
    cardinalMismatchesAcrossZones,
    cardinalMismatchHotspots,
  },
  design: {
    twoDimensionalDesignIssues,
    mapPlanningUiIssues,
    zoneClassificationIssues,
    hybridPlanningIssues,
  },
  zoneLayout: {
    plannedZoneGlobalBounds: zoneGlobalBounds
      .filter(plan => plan.globalBounds)
      .map(plan => ({
        zoneId: plan.zoneId,
        decision: plan.decision,
        ...plan.globalBounds,
      })),
    worldOrDecisionZonesMissingGlobalBounds,
    overlappingZoneGlobalBounds,
    crossZoneWorldAdjacencyIssues,
    borderRoomGaps,
    acceptedCrossZoneLongPaths,
    crossZoneLongPathIssues,
  },
  instance: {
    instanceRoomsWithWorldCoords,
    instanceEntranceIssues,
    instanceEntries,
    mappedRuntimeDungeonEntries: instanceEntries.filter(entry => entry.dungeonId).length,
    objectInteractEntries: instanceEntries.filter(entry => entry.type === 'object_interact').length,
    objectInteractEntryIssues,
    instanceEntryIssues,
    endgameEntryIssues,
  },
  specialEdges,
};

if (write) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

console.log(formatReport(report, write ? outPath : undefined));

if (strict) {
  const failures = [
    ...missingTargets,
    ...duplicateDirections,
    ...selfLoops,
    ...topologyAcceptanceIssues,
    ...worldRoomsMissingCoords,
    ...coordinateCollisions,
    ...cardinalCoordinateMismatches,
    ...twoDimensionalDesignIssues,
    ...mapPlanningUiIssues,
    ...zoneClassificationIssues,
    ...hybridPlanningIssues,
    ...worldOrDecisionZonesMissingGlobalBounds,
    ...overlappingZoneGlobalBounds,
    ...crossZoneWorldAdjacencyIssues,
    ...crossZoneLongPathIssues,
    ...instanceRoomsWithWorldCoords,
    ...instanceEntranceIssues,
    ...objectInteractEntryIssues,
    ...instanceEntryIssues,
    ...endgameEntryIssues,
  ];
  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

function getDirectionalBoundsIssue(
  direction: Direction,
  from: { minX: number; maxX: number; minY: number; maxY: number },
  to: { minX: number; maxX: number; minY: number; maxY: number },
): string | null {
  switch (direction) {
    case 'north':
      if (to.maxY >= from.minY) return 'target bbox is not north of source bbox';
      if (from.minY - to.maxY > 1) return `north gap ${from.minY - to.maxY - 1} row(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minX, from.maxX, to.minX, to.maxX)) return 'north exit has no horizontal bbox overlap';
      return null;
    case 'south':
      if (to.minY <= from.maxY) return 'target bbox is not south of source bbox';
      if (to.minY - from.maxY > 1) return `south gap ${to.minY - from.maxY - 1} row(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minX, from.maxX, to.minX, to.maxX)) return 'south exit has no horizontal bbox overlap';
      return null;
    case 'east':
      if (to.minX <= from.maxX) return 'target bbox is not east of source bbox';
      if (to.minX - from.maxX > 1) return `east gap ${to.minX - from.maxX - 1} column(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minY, from.maxY, to.minY, to.maxY)) return 'east exit has no vertical bbox overlap';
      return null;
    case 'west':
      if (to.maxX >= from.minX) return 'target bbox is not west of source bbox';
      if (from.minX - to.maxX > 1) return `west gap ${from.minX - to.maxX - 1} column(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minY, from.maxY, to.minY, to.maxY)) return 'west exit has no vertical bbox overlap';
      return null;
  }
}

function getCrossZoneLongPathIssue(exit: CrossZoneExitRecord): string | null {
  if (exit.edgeKind !== 'long_path') {
    return `${exit.edgeKind ?? 'normal'} cross-zone special edge is not accepted as long_path`;
  }
  const descriptionChars = countCjkChars(exit.description);
  if (descriptionChars < 28) {
    return `long_path description too short (${descriptionChars}/28)`;
  }
  if (!exit.edgeNote) {
    return 'long_path missing edgeNote';
  }
  const edgeNoteChars = countCjkChars(exit.edgeNote);
  if (edgeNoteChars < 28) {
    return `long_path edgeNote too short (${edgeNoteChars}/28)`;
  }
  if (!exit.edgeNote.includes('實際路程長於相鄰一格')) {
    return 'long_path edgeNote must explain that the route is longer than one adjacent cell';
  }
  return null;
}

function rangesTouchOrOverlap(leftMin: number, leftMax: number, rightMin: number, rightMax: number): boolean {
  return leftMin <= rightMax + 1 && leftMax + 1 >= rightMin;
}

function readOptionalText(path: string): string | null {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return null;
  }
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function boundsOverlap(
  left: { minX: number; maxX: number; minY: number; maxY: number },
  right: { minX: number; maxX: number; minY: number; maxY: number },
): boolean {
  return left.minX <= right.maxX &&
    left.maxX >= right.minX &&
    left.minY <= right.maxY &&
    left.maxY >= right.minY;
}

function getBounds(zoneRooms: RoomDef[]): Bounds | null {
  if (zoneRooms.length === 0) return null;
  return zoneRooms.reduce((bounds, room) => ({
    minX: Math.min(bounds.minX, room.mapX),
    maxX: Math.max(bounds.maxX, room.mapX),
    minY: Math.min(bounds.minY, room.mapY),
    maxY: Math.max(bounds.maxY, room.mapY),
  }), {
    minX: zoneRooms[0].mapX,
    maxX: zoneRooms[0].mapX,
    minY: zoneRooms[0].mapY,
    maxY: zoneRooms[0].mapY,
  });
}

function formatReport(reportData: typeof report, writtenPath?: string): string {
  const lines = [
    '# World Map2 Audit',
    `Generated: ${reportData.generatedAt}`,
    `Zones: ${reportData.counts.zones}`,
    `Rooms: ${reportData.counts.rooms}`,
    `World zones: ${reportData.counts.worldZones}`,
    `Instance zones: ${reportData.counts.instanceZones}`,
    `Hybrid zones: ${reportData.counts.hybridZones}`,
    `Decision zones: ${reportData.counts.decisionZones}`,
    `Cross-zone connection pairs: ${reportData.counts.crossZoneConnections}`,
    `Cross-zone exits: ${reportData.counts.crossZoneExits}`,
    `Missing targets: ${reportData.topology.missingTargets.length}`,
    `Duplicate directions: ${reportData.topology.duplicateDirections.length}`,
    `Self loops: ${reportData.topology.selfLoops.length}`,
    `Topology acceptance issues: ${reportData.acceptance.topologyIssues.length}`,
    `World rooms missing planned world coordinates: ${reportData.worldCoordinate.worldRoomsMissingCoords.length}`,
    `Derived world coordinates: ${reportData.worldCoordinate.derivedWorldCoordinates.length}`,
    `Instance entrance coordinates: ${reportData.worldCoordinate.instanceEntranceCoordinates.length}`,
    `Coordinate collisions: ${reportData.worldCoordinate.coordinateCollisions.length}`,
    `Cardinal coordinate mismatches: ${reportData.worldCoordinate.cardinalCoordinateMismatches.length}`,
    `Cardinal mismatches within zone: ${reportData.worldCoordinate.cardinalMismatchesWithinZone.length}`,
    `Cardinal mismatches across zones: ${reportData.worldCoordinate.cardinalMismatchesAcrossZones.length}`,
    `2D design issues: ${reportData.design.twoDimensionalDesignIssues.length}`,
    `/mud/map planning UI issues: ${reportData.design.mapPlanningUiIssues.length}`,
    `Zone classification issues: ${reportData.design.zoneClassificationIssues.length}`,
    `Hybrid planning issues: ${reportData.design.hybridPlanningIssues.length}`,
    `Planned zone global bounds: ${reportData.zoneLayout.plannedZoneGlobalBounds.length}`,
    `World/decision zones missing global bounds: ${reportData.zoneLayout.worldOrDecisionZonesMissingGlobalBounds.length}`,
    `Overlapping zone global bounds: ${reportData.zoneLayout.overlappingZoneGlobalBounds.length}`,
    `Cross-zone world adjacency issues: ${reportData.zoneLayout.crossZoneWorldAdjacencyIssues.length}`,
    `Border room gaps: ${reportData.zoneLayout.borderRoomGaps.length}`,
    `Accepted cross-zone long paths: ${reportData.zoneLayout.acceptedCrossZoneLongPaths.length}`,
    `Cross-zone long path issues: ${reportData.zoneLayout.crossZoneLongPathIssues.length}`,
    `Instance rooms with world coordinates: ${reportData.instance.instanceRoomsWithWorldCoords.length}`,
    `Instance entrance issues: ${reportData.instance.instanceEntranceIssues.length}`,
    `Instance entries: ${reportData.instance.instanceEntries.length}`,
    `Mapped runtime dungeon entries: ${reportData.instance.mappedRuntimeDungeonEntries}`,
    `Object interact entries: ${reportData.instance.objectInteractEntries}`,
    `Object interact entry issues: ${reportData.instance.objectInteractEntryIssues.length}`,
    `Instance entry issues: ${reportData.instance.instanceEntryIssues.length}`,
    `Endgame entry issues: ${reportData.instance.endgameEntryIssues.length}`,
    `Special edges: ${reportData.specialEdges.length}`,
  ];
  if (writtenPath) {
    lines.push(`Snapshot written: ${writtenPath}`);
  }
  return lines.join('\n');
}
