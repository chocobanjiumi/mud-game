import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ROOMS, getRoom, getRoomByWorldCoord } from '../server/src/data/rooms.js';
import { STATIC_WORLD_LONG_PATH_EXITS } from '../server/src/data/world-map-long-paths.js';
import {
  STATIC_WORLD_BRIDGE_ROOMS,
  STATIC_WORLD_FILLER_ROOMS,
} from '../server/src/data/world-map-static.js';

type Coord = { worldX: number; worldY: number };
type LongPathSource = 'static-world-long-paths' | 'room-edge-kind';
type IntermediateScan =
  | {
      mode: 'same-axis';
      distance: number;
      intermediateRooms: IntermediateRoomRecord[];
      missingCoordinates: Coord[];
      hasCompleteIntermediateRoute: boolean;
    }
  | {
      mode: 'not-same-axis';
      distance: number;
      intermediateRooms: [];
      missingCoordinates: [];
      hasCompleteIntermediateRoute: false;
    }
  | {
      mode: 'missing-coordinate';
      distance: null;
      intermediateRooms: [];
      missingCoordinates: [];
      hasCompleteIntermediateRoute: false;
    };

type IntermediateRoomRecord = {
  worldX: number;
  worldY: number;
  roomId: string;
  zone: string;
  isStaticFillerOrBridge: boolean;
};

type LongPathAuditRecord = {
  key: string;
  sources: LongPathSource[];
  source: {
    roomId: string;
    zone: string | null;
    worldX: number | null;
    worldY: number | null;
  };
  direction: Direction;
  target: {
    roomId: string;
    zone: string | null;
    worldX: number | null;
    worldY: number | null;
  };
  expectedAdjacentCoordinate: Coord | null;
  actualDelta: { dx: number | null; dy: number | null; manhattan: number | null };
  sameZone: boolean | null;
  crossZone: boolean | null;
  hasExistingIntermediateFillerOrStaticRoomToConnect: boolean;
  intermediateScan: IntermediateScan;
  description: string | null;
  edgeNote: string | null;
  missingSourceRoom: boolean;
  missingTargetRoom: boolean;
};

const CARDINAL_DELTAS: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 },
};

const write = process.argv.includes('--write');
const outPath = resolve(process.cwd(), 'reports/long-path-audit.json');

const staticRoomIds = new Set([
  ...Object.keys(STATIC_WORLD_FILLER_ROOMS),
  ...Object.keys(STATIC_WORLD_BRIDGE_ROOMS),
]);

const recordsByKey = new Map<string, LongPathAuditRecord>();

for (const [roomId, direction, targetRoomId] of STATIC_WORLD_LONG_PATH_EXITS) {
  upsertRecord(roomId, direction, targetRoomId, 'static-world-long-paths');
}

for (const room of Object.values(ROOMS)) {
  for (const exit of room.exits) {
    if (exit.edgeKind !== 'long_path') continue;
    upsertRecord(room.id, exit.direction, exit.targetRoomId, 'room-edge-kind');
  }
}

const records = [...recordsByKey.values()].sort((a, b) => a.key.localeCompare(b.key));
const staticOnly = records.filter(record =>
  record.sources.includes('static-world-long-paths') && !record.sources.includes('room-edge-kind'),
);
const edgeOnly = records.filter(record =>
  record.sources.includes('room-edge-kind') && !record.sources.includes('static-world-long-paths'),
);

const report = {
  generatedAt: new Date().toISOString(),
  counts: {
    totalLongPathRecords: records.length,
    staticWorldLongPathEntries: STATIC_WORLD_LONG_PATH_EXITS.length,
    runtimeLongPathExits: records.filter(record => record.sources.includes('room-edge-kind')).length,
    staticOnlyEntries: staticOnly.length,
    roomEdgeOnlyEntries: edgeOnly.length,
    missingSourceRooms: records.filter(record => record.missingSourceRoom).length,
    missingTargetRooms: records.filter(record => record.missingTargetRoom).length,
    sameZone: records.filter(record => record.sameZone).length,
    crossZone: records.filter(record => record.crossZone).length,
    hasExistingIntermediateFillerOrStaticRoomToConnect: records.filter(record =>
      record.hasExistingIntermediateFillerOrStaticRoomToConnect,
    ).length,
  },
  records,
};

if (write) {
  mkdirSync(resolve(process.cwd(), 'reports'), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
}

console.log('# Long Path Audit');
console.log(`Generated: ${report.generatedAt}`);
console.log(`Total long_path records: ${report.counts.totalLongPathRecords}`);
console.log(`Static entries: ${report.counts.staticWorldLongPathEntries}`);
console.log(`Runtime edgeKind entries: ${report.counts.runtimeLongPathExits}`);
console.log(`Static-only entries: ${report.counts.staticOnlyEntries}`);
console.log(`Room-edge-only entries: ${report.counts.roomEdgeOnlyEntries}`);
console.log(`Missing source rooms: ${report.counts.missingSourceRooms}`);
console.log(`Missing target rooms: ${report.counts.missingTargetRooms}`);
console.log(`Same-zone: ${report.counts.sameZone}`);
console.log(`Cross-zone: ${report.counts.crossZone}`);
console.log(`Existing intermediate static/filler route candidates: ${report.counts.hasExistingIntermediateFillerOrStaticRoomToConnect}`);
if (write) console.log(`Snapshot written: ${outPath}`);

function upsertRecord(
  roomId: string,
  direction: Direction,
  targetRoomId: string,
  source: LongPathSource,
): void {
  const key = `${roomId}:${direction}->${targetRoomId}`;
  const existing = recordsByKey.get(key);
  if (existing) {
    if (!existing.sources.includes(source)) existing.sources.push(source);
    return;
  }

  const room = getRoom(roomId);
  const target = getRoom(targetRoomId);
  const exit = room?.exits.find(candidate =>
    candidate.direction === direction && candidate.targetRoomId === targetRoomId,
  );
  const sourceCoord = coordOf(room);
  const targetCoord = coordOf(target);
  const expectedAdjacentCoordinate = sourceCoord
    ? {
        worldX: sourceCoord.worldX + CARDINAL_DELTAS[direction].dx,
        worldY: sourceCoord.worldY + CARDINAL_DELTAS[direction].dy,
      }
    : null;
  const actualDelta = sourceCoord && targetCoord
    ? {
        dx: targetCoord.worldX - sourceCoord.worldX,
        dy: targetCoord.worldY - sourceCoord.worldY,
        manhattan: Math.abs(targetCoord.worldX - sourceCoord.worldX) + Math.abs(targetCoord.worldY - sourceCoord.worldY),
      }
    : { dx: null, dy: null, manhattan: null };
  const intermediateScan = scanIntermediateRooms(sourceCoord, targetCoord);

  recordsByKey.set(key, {
    key,
    sources: [source],
    source: {
      roomId,
      zone: room?.zone ?? null,
      worldX: sourceCoord?.worldX ?? null,
      worldY: sourceCoord?.worldY ?? null,
    },
    direction,
    target: {
      roomId: targetRoomId,
      zone: target?.zone ?? null,
      worldX: targetCoord?.worldX ?? null,
      worldY: targetCoord?.worldY ?? null,
    },
    expectedAdjacentCoordinate,
    actualDelta,
    sameZone: room && target ? room.zone === target.zone : null,
    crossZone: room && target ? room.zone !== target.zone : null,
    hasExistingIntermediateFillerOrStaticRoomToConnect: intermediateScan.hasCompleteIntermediateRoute,
    intermediateScan,
    description: exit?.description ?? null,
    edgeNote: exit?.edgeNote ?? null,
    missingSourceRoom: !room,
    missingTargetRoom: !target,
  });
}

function coordOf(room: RoomDef | undefined): Coord | null {
  if (!room || typeof room.worldX !== 'number' || typeof room.worldY !== 'number') return null;
  return { worldX: room.worldX, worldY: room.worldY };
}

function scanIntermediateRooms(sourceCoord: Coord | null, targetCoord: Coord | null): IntermediateScan {
  if (!sourceCoord || !targetCoord) {
    return {
      mode: 'missing-coordinate',
      distance: null,
      intermediateRooms: [],
      missingCoordinates: [],
      hasCompleteIntermediateRoute: false,
    };
  }

  const dx = targetCoord.worldX - sourceCoord.worldX;
  const dy = targetCoord.worldY - sourceCoord.worldY;
  const distance = Math.abs(dx) + Math.abs(dy);
  if (dx !== 0 && dy !== 0) {
    return {
      mode: 'not-same-axis',
      distance,
      intermediateRooms: [],
      missingCoordinates: [],
      hasCompleteIntermediateRoute: false,
    };
  }

  const stepX = Math.sign(dx);
  const stepY = Math.sign(dy);
  const intermediateRooms: IntermediateRoomRecord[] = [];
  const missingCoordinates: Coord[] = [];

  for (let index = 1; index < distance; index += 1) {
    const worldX = sourceCoord.worldX + stepX * index;
    const worldY = sourceCoord.worldY + stepY * index;
    const intermediateRoom = getRoomByWorldCoord(worldX, worldY);
    if (intermediateRoom) {
      intermediateRooms.push({
        worldX,
        worldY,
        roomId: intermediateRoom.id,
        zone: intermediateRoom.zone,
        isStaticFillerOrBridge: staticRoomIds.has(intermediateRoom.id),
      });
    } else {
      missingCoordinates.push({ worldX, worldY });
    }
  }

  return {
    mode: 'same-axis',
    distance,
    intermediateRooms,
    missingCoordinates,
    hasCompleteIntermediateRoute: distance > 1 &&
      missingCoordinates.length === 0 &&
      intermediateRooms.every(room => room.isStaticFillerOrBridge),
  };
}
