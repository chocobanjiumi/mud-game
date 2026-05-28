import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ROOMS, ZONES, getRoom } from '../server/src/data/rooms.js';
import { buildZoneMapPlans, plannedMapScopeForRoom } from '../server/src/data/world-map2-plan.js';

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
  instance: {
    instanceRoomsWithWorldCoords,
    instanceEntranceIssues,
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
    ...instanceRoomsWithWorldCoords,
    ...instanceEntranceIssues,
  ];
  if (failures.length > 0) {
    process.exitCode = 1;
  }
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
    `Instance rooms with world coordinates: ${reportData.instance.instanceRoomsWithWorldCoords.length}`,
    `Instance entrance issues: ${reportData.instance.instanceEntranceIssues.length}`,
    `Special edges: ${reportData.specialEdges.length}`,
  ];
  if (writtenPath) {
    lines.push(`Snapshot written: ${writtenPath}`);
  }
  return lines.join('\n');
}
