import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Direction, RoomDef } from '@game/shared';
import { ROOMS, getRoom, getRoomByWorldCoord } from '../server/src/data/rooms.js';
import {
  STATIC_WORLD_BRIDGE_ROOMS,
  STATIC_WORLD_FILLER_ROOMS,
} from '../server/src/data/world-map-static.js';

type Coord = { worldX: number; worldY: number };
type SpecialRouteSource = 'room-edge-kind';
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
  sources: SpecialRouteSource[];
  edgeKind: NonNullable<RoomDef['exits'][number]['edgeKind']>;
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
  classification: LongPathClassification;
  missingSourceRoom: boolean;
  missingTargetRoom: boolean;
};

type LongPathClassification = {
  code: 'A_coordinate_error_candidate' | 'B_missing_static_corridor' | 'C_special_route';
  label: string;
  rationale: string;
  recommendedAction: string;
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

for (const room of Object.values(ROOMS)) {
  for (const exit of room.exits) {
    if (!exit.edgeKind || exit.edgeKind === 'normal') continue;
    upsertRecord(room.id, exit.direction, exit.targetRoomId, exit.edgeKind, 'room-edge-kind');
  }
}

const records = [...recordsByKey.values()].sort((a, b) => a.key.localeCompare(b.key));
const classificationCounts = countClassifications(records);
const edgeKindCounts = countEdgeKinds(records);

const report = {
  generatedAt: new Date().toISOString(),
  counts: {
    totalSpecialRouteRecords: records.length,
    longPathEdgeKindEntries: records.filter(record => record.edgeKind === 'long_path').length,
    runtimeSpecialEdgeExits: records.filter(record => record.sources.includes('room-edge-kind')).length,
    staticOnlyEntries: 0,
    roomEdgeOnlyEntries: records.length,
    missingSourceRooms: records.filter(record => record.missingSourceRoom).length,
    missingTargetRooms: records.filter(record => record.missingTargetRoom).length,
    sameZone: records.filter(record => record.sameZone).length,
    crossZone: records.filter(record => record.crossZone).length,
    hasExistingIntermediateFillerOrStaticRoomToConnect: records.filter(record =>
      record.hasExistingIntermediateFillerOrStaticRoomToConnect,
    ).length,
    classifications: classificationCounts,
    edgeKinds: edgeKindCounts,
  },
  records,
};

if (write) {
  mkdirSync(resolve(process.cwd(), 'reports'), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
}

console.log('# Special Route Audit');
console.log(`Generated: ${report.generatedAt}`);
console.log(`Total special route records: ${report.counts.totalSpecialRouteRecords}`);
console.log(`long_path edgeKind entries: ${report.counts.longPathEdgeKindEntries}`);
console.log(`Runtime special edgeKind entries: ${report.counts.runtimeSpecialEdgeExits}`);
console.log(`Static-only entries: ${report.counts.staticOnlyEntries}`);
console.log(`Room-edge-only entries: ${report.counts.roomEdgeOnlyEntries}`);
console.log(`Missing source rooms: ${report.counts.missingSourceRooms}`);
console.log(`Missing target rooms: ${report.counts.missingTargetRooms}`);
console.log(`Same-zone: ${report.counts.sameZone}`);
console.log(`Cross-zone: ${report.counts.crossZone}`);
console.log(`Existing intermediate static/filler route candidates: ${report.counts.hasExistingIntermediateFillerOrStaticRoomToConnect}`);
console.log(`A coordinate-error candidates: ${report.counts.classifications.A_coordinate_error_candidate}`);
console.log(`B missing-static-corridor candidates: ${report.counts.classifications.B_missing_static_corridor}`);
console.log(`C special-route candidates: ${report.counts.classifications.C_special_route}`);
if (write) console.log(`Snapshot written: ${outPath}`);

function upsertRecord(
  roomId: string,
  direction: Direction,
  targetRoomId: string,
  edgeKind: NonNullable<RoomDef['exits'][number]['edgeKind']>,
  source: SpecialRouteSource,
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

  const description = exit?.description ?? null;
  const edgeNote = exit?.edgeNote ?? null;

  recordsByKey.set(key, {
    key,
    sources: [source],
    edgeKind,
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
    description,
    edgeNote,
    classification: classifyLongPath({
      direction,
      room,
      target,
      actualDelta,
      intermediateScan,
      description,
      edgeNote,
    }),
    missingSourceRoom: !room,
    missingTargetRoom: !target,
  });
}

function classifyLongPath(input: {
  direction: Direction;
  room: RoomDef | undefined;
  target: RoomDef | undefined;
  actualDelta: LongPathAuditRecord['actualDelta'];
  intermediateScan: IntermediateScan;
  description: string | null;
  edgeNote: string | null;
}): LongPathClassification {
  const text = `${input.description ?? ''} ${input.edgeNote ?? ''}`;
  const explicitlyLongRoute = /長於相鄰一格|實際路程|長路徑|高低差|曲折|攀|下切|繞|折返|穿過|越過|沿|渡|船|橋|階|坡|洞|門|入口|傳送/u.test(text);
  const crossZone = Boolean(input.room && input.target && input.room.zone !== input.target.zone);

  if (
    input.intermediateScan.mode === 'same-axis' &&
    input.intermediateScan.distance > 1 &&
    !crossZone &&
    !explicitlyLongRoute
  ) {
    return {
      code: 'A_coordinate_error_candidate',
      label: 'A 類：座標錯誤候選',
      rationale: '同 zone、同軸且沒有足夠長路徑敘事，可能只是普通出口座標未排成相鄰格。',
      recommendedAction: '人工確認語意；若只是普通相鄰出口，直接改房間座標並移除 special edge。',
    };
  }

  if (
    input.intermediateScan.mode === 'same-axis' &&
    input.intermediateScan.distance > 1 &&
    !crossZone
  ) {
    return {
      code: 'B_missing_static_corridor',
      label: 'B 類：缺少中間通道候選',
      rationale: 'source 與 target 在同一世界座標軸上，中間可用固定座標通道格拆成逐格路徑。',
      recommendedAction: '補或串接靜態通道房間，讓普通出口恢復一格一格相鄰；完成後移除 special edge。',
    };
  }

  return {
    code: 'C_special_route',
    label: 'C 類：真正特殊路徑候選',
    rationale: crossZone
      ? '跨 zone 或需要區域邊界敘事，不能單靠同 zone 直線補格處理。'
      : '路徑不是同軸直線，或描述/edgeNote 已明確表示需要繞行、折返、渡口、入口或其他長路徑語意。',
    recommendedAction: '人工審查是否改成更明確的 special edge kind；保留時必須有 description 與 edgeNote 說明。',
  };
}

function countClassifications(records: LongPathAuditRecord[]): Record<LongPathClassification['code'], number> {
  return records.reduce<Record<LongPathClassification['code'], number>>((counts, record) => {
    counts[record.classification.code] += 1;
    return counts;
  }, {
    A_coordinate_error_candidate: 0,
    B_missing_static_corridor: 0,
    C_special_route: 0,
  });
}

function countEdgeKinds(records: LongPathAuditRecord[]): Record<string, number> {
  return records.reduce<Record<string, number>>((counts, record) => {
    counts[record.edgeKind] = (counts[record.edgeKind] ?? 0) + 1;
    return counts;
  }, {});
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
