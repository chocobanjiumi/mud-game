import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { DUNGEON_DEFS } from '../server/src/data/dungeons.js';
import { buildInstanceEntryDefs, buildZoneMapPlans, plannedMapScopeForRoom } from '../server/src/data/world-map2-plan.js';

type Bounds = { minX: number; maxX: number; minY: number; maxY: number };

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
const rooms = Object.values(ROOMS);

const missingTargets: string[] = [];
const duplicateDirections: string[] = [];
const selfLoops: string[] = [];
const crossZoneExits: string[] = [];
const specialEdges: string[] = [];
const worldRoomsMissingCoords: string[] = [];
const instanceRoomsWithWorldCoords: string[] = [];
const coordinateOwners = new Map<string, string[]>();
const cardinalCoordinateMismatches: string[] = [];
const instanceEntranceIssues: string[] = [];
const instanceEntryIssues: string[] = [];
const worldOrDecisionZonesMissingGlobalBounds: string[] = [];
const overlappingZoneGlobalBounds: string[] = [];
const crossZoneWorldAdjacencyIssues: string[] = [];
const borderRoomGaps: string[] = [];
const instanceEntries = buildInstanceEntryDefs(ZONES);

for (const room of rooms) {
  const seenDirections = new Set<string>();
  const plan = zonePlans.get(room.zone);
  const scope = plannedMapScopeForRoom(room, plan);

  if (scope === 'world' && (typeof room.worldX !== 'number' || typeof room.worldY !== 'number')) {
    worldRoomsMissingCoords.push(`${room.zone}/${room.id}`);
  }
  if (scope === 'instance' && (typeof room.worldX === 'number' || typeof room.worldY === 'number')) {
    instanceRoomsWithWorldCoords.push(`${room.zone}/${room.id}`);
  }
  if (scope === 'world' && typeof room.worldX === 'number' && typeof room.worldY === 'number') {
    const key = `${room.worldX},${room.worldY}`;
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
    }
    if (exit.edgeKind && exit.edgeKind !== 'normal') {
      specialEdges.push(`${room.id}:${exit.direction}->${target.id} (${exit.edgeKind}) ${exit.edgeNote ?? ''}`.trim());
    }

    const targetPlan = zonePlans.get(target.zone);
    const targetScope = plannedMapScopeForRoom(target, targetPlan);
    const canCheckCoordinates =
      scope === 'world' &&
      targetScope === 'world' &&
      typeof room.worldX === 'number' &&
      typeof room.worldY === 'number' &&
      typeof target.worldX === 'number' &&
      typeof target.worldY === 'number' &&
      (!exit.edgeKind || exit.edgeKind === 'normal');
    if (canCheckCoordinates) {
      const delta = CARDINAL_DELTAS[exit.direction];
      if (target.worldX !== room.worldX + delta.dx || target.worldY !== room.worldY + delta.dy) {
        cardinalCoordinateMismatches.push(
          `${room.id}(${room.worldX},${room.worldY}) ${exit.direction}-> ${target.id}(${target.worldX},${target.worldY})`,
        );
      }
    }
  }
}

for (const [zoneId, plan] of zonePlans.entries()) {
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
  if (plan.decision !== 'instance') continue;
  const zoneEntries = instanceEntries.filter(entry => entry.instanceTemplateId === zoneId);
  if (zoneEntries.length === 0) {
    instanceEntryIssues.push(`${zoneId}: missing InstanceEntryDef`);
    continue;
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
    if (entry.dungeonId && !DUNGEON_DEFS[entry.dungeonId]) {
      instanceEntryIssues.push(`${entry.id}: dungeonId ${entry.dungeonId} missing in DUNGEON_DEFS`);
    }
  }
}

const zoneGlobalBounds = [...zonePlans.values()].filter(plan => plan.decision === 'world' || plan.decision === 'decision');
for (const plan of zoneGlobalBounds) {
  if (!plan.globalBounds) {
    worldOrDecisionZonesMissingGlobalBounds.push(`${plan.zoneId}:${plan.decision}`);
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

for (const exitText of crossZoneExits) {
  const parsed = parseCrossZoneExit(exitText);
  if (!parsed) continue;
  const fromPlan = zonePlans.get(parsed.fromZoneId);
  const toPlan = zonePlans.get(parsed.toZoneId);
  if (!fromPlan?.globalBounds || !toPlan?.globalBounds) continue;
  if (fromPlan.decision === 'instance' || toPlan.decision === 'instance') continue;
  const issue = getDirectionalBoundsIssue(parsed.direction, fromPlan.globalBounds, toPlan.globalBounds);
  if (!issue) continue;
  const label = `${parsed.fromZoneId}/${parsed.fromRoomId}:${parsed.direction}->${parsed.toZoneId}/${parsed.toRoomId}`;
  crossZoneWorldAdjacencyIssues.push(`${label}: ${issue}`);
  if (issue.includes('gap')) {
    borderRoomGaps.push(`${label}: ${issue}`);
  }
}

const coordinateCollisions = [...coordinateOwners.entries()]
  .filter(([, owners]) => owners.length > 1)
  .map(([coord, owners]) => `${coord}: ${owners.join(', ')}`);

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
    decisionZones: zones.filter(zone => zone.decision === 'decision').length,
  },
  zones,
  topology: {
    missingTargets,
    duplicateDirections,
    selfLoops,
  },
  crossZoneExits,
  worldCoordinate: {
    worldRoomsMissingCoords,
    coordinateCollisions,
    cardinalCoordinateMismatches,
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
  },
  instance: {
    instanceRoomsWithWorldCoords,
    instanceEntranceIssues,
    instanceEntries,
    mappedRuntimeDungeonEntries: instanceEntries.filter(entry => entry.dungeonId).length,
    instanceEntryIssues,
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
    ...worldRoomsMissingCoords,
    ...coordinateCollisions,
    ...cardinalCoordinateMismatches,
    ...worldOrDecisionZonesMissingGlobalBounds,
    ...overlappingZoneGlobalBounds,
    ...crossZoneWorldAdjacencyIssues,
    ...instanceRoomsWithWorldCoords,
    ...instanceEntranceIssues,
    ...instanceEntryIssues,
  ];
  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

function parseCrossZoneExit(exitText: string): {
  fromZoneId: string;
  fromRoomId: string;
  direction: Direction;
  toZoneId: string;
  toRoomId: string;
} | null {
  const match = exitText.match(/^([^/]+)\/([^:]+):(north|south|east|west)->([^/]+)\/(.+)$/);
  if (!match) return null;
  return {
    fromZoneId: match[1],
    fromRoomId: match[2],
    direction: match[3] as Direction,
    toZoneId: match[4],
    toRoomId: match[5],
  };
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

function rangesTouchOrOverlap(leftMin: number, leftMax: number, rightMin: number, rightMax: number): boolean {
  return leftMin <= rightMax + 1 && leftMax + 1 >= rightMin;
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
    `Decision zones: ${reportData.counts.decisionZones}`,
    `Cross-zone connection pairs: ${reportData.counts.crossZoneConnections}`,
    `Cross-zone exits: ${reportData.counts.crossZoneExits}`,
    `Missing targets: ${reportData.topology.missingTargets.length}`,
    `Duplicate directions: ${reportData.topology.duplicateDirections.length}`,
    `Self loops: ${reportData.topology.selfLoops.length}`,
    `World rooms missing worldX/worldY: ${reportData.worldCoordinate.worldRoomsMissingCoords.length}`,
    `Coordinate collisions: ${reportData.worldCoordinate.coordinateCollisions.length}`,
    `Cardinal coordinate mismatches: ${reportData.worldCoordinate.cardinalCoordinateMismatches.length}`,
    `Planned zone global bounds: ${reportData.zoneLayout.plannedZoneGlobalBounds.length}`,
    `World/decision zones missing global bounds: ${reportData.zoneLayout.worldOrDecisionZonesMissingGlobalBounds.length}`,
    `Overlapping zone global bounds: ${reportData.zoneLayout.overlappingZoneGlobalBounds.length}`,
    `Cross-zone world adjacency issues: ${reportData.zoneLayout.crossZoneWorldAdjacencyIssues.length}`,
    `Border room gaps: ${reportData.zoneLayout.borderRoomGaps.length}`,
    `Instance rooms with world coordinates: ${reportData.instance.instanceRoomsWithWorldCoords.length}`,
    `Instance entrance issues: ${reportData.instance.instanceEntranceIssues.length}`,
    `Instance entries: ${reportData.instance.instanceEntries.length}`,
    `Mapped runtime dungeon entries: ${reportData.instance.mappedRuntimeDungeonEntries}`,
    `Instance entry issues: ${reportData.instance.instanceEntryIssues.length}`,
    `Special edges: ${reportData.specialEdges.length}`,
  ];
  if (writtenPath) {
    lines.push(`Snapshot written: ${writtenPath}`);
  }
  return lines.join('\n');
}
