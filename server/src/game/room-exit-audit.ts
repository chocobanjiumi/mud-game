import type { Direction, RoomDef, ZoneDef } from '@game/shared';

const AUDITED_DIRECTIONS: Direction[] = ['north', 'south', 'east', 'west', 'up', 'down'];

const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  north: 'south',
  south: 'north',
  east: 'west',
  west: 'east',
  up: 'down',
  down: 'up',
};

const AUDITED_DIRECTION_SET = new Set<Direction>(AUDITED_DIRECTIONS);

export interface TwoStepDirectionCycleCandidate {
  zoneId: string;
  zoneName: string;
  roomAId: string;
  roomAName: string;
  dir1: Direction;
  roomBId: string;
  roomBName: string;
  dir2: Direction;
  roomADescription: string;
  roomBDescription: string;
  isLegalReverse: boolean;
}

export interface RoomExitAuditReport {
  scannedAt: string;
  zoneCount: number;
  roomCount: number;
  directEastSelfLoops: number;
  directSouthSelfLoops: number;
  directSelfLoops: string[];
  missingTargetRooms: string[];
  duplicateDirections: string[];
  twoStepDirectionCycleCandidates: TwoStepDirectionCycleCandidate[];
}

function shortDescription(description: string): string {
  return description.replace(/\s+/g, '').slice(0, 80);
}

export function findTwoStepDirectionCycleCandidates(
  rooms: Record<string, RoomDef>,
  zones: Record<string, ZoneDef>,
): TwoStepDirectionCycleCandidate[] {
  const candidates: TwoStepDirectionCycleCandidate[] = [];

  for (const room of Object.values(rooms)) {
    for (const exit of room.exits) {
      if (!AUDITED_DIRECTION_SET.has(exit.direction)) continue;

      const targetRoom = rooms[exit.targetRoomId];
      if (!targetRoom) continue;

      for (const backExit of targetRoom.exits) {
        if (!AUDITED_DIRECTION_SET.has(backExit.direction)) continue;
        if (backExit.targetRoomId !== room.id) continue;

        const isLegalReverse = backExit.direction === OPPOSITE_DIRECTION[exit.direction];
        if (isLegalReverse) continue;

        const zone = zones[room.zone];
        candidates.push({
          zoneId: room.zone,
          zoneName: zone?.name ?? room.zone,
          roomAId: room.id,
          roomAName: room.name,
          dir1: exit.direction,
          roomBId: targetRoom.id,
          roomBName: targetRoom.name,
          dir2: backExit.direction,
          roomADescription: shortDescription(room.description),
          roomBDescription: shortDescription(targetRoom.description),
          isLegalReverse,
        });
      }
    }
  }

  return candidates.sort((a, b) =>
    a.zoneId.localeCompare(b.zoneId)
    || a.roomAId.localeCompare(b.roomAId)
    || a.dir1.localeCompare(b.dir1)
    || a.roomBId.localeCompare(b.roomBId)
    || a.dir2.localeCompare(b.dir2),
  );
}

export function buildRoomExitAuditReport(
  rooms: Record<string, RoomDef>,
  zones: Record<string, ZoneDef>,
  scannedAt = new Date().toISOString(),
): RoomExitAuditReport {
  const directSelfLoops: string[] = [];
  const missingTargetRooms: string[] = [];
  const duplicateDirections: string[] = [];

  for (const room of Object.values(rooms)) {
    const seenDirections = new Set<Direction>();
    for (const exit of room.exits) {
      if (seenDirections.has(exit.direction)) {
        duplicateDirections.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      }
      seenDirections.add(exit.direction);

      if (exit.targetRoomId === room.id) {
        directSelfLoops.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      }

      if (!rooms[exit.targetRoomId]) {
        missingTargetRooms.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      }
    }
  }

  return {
    scannedAt,
    zoneCount: Object.keys(zones).length,
    roomCount: Object.keys(rooms).length,
    directEastSelfLoops: directSelfLoops.filter(loop => loop.includes(':east->')).length,
    directSouthSelfLoops: directSelfLoops.filter(loop => loop.includes(':south->')).length,
    directSelfLoops: directSelfLoops.sort(),
    missingTargetRooms: missingTargetRooms.sort(),
    duplicateDirections: duplicateDirections.sort(),
    twoStepDirectionCycleCandidates: findTwoStepDirectionCycleCandidates(rooms, zones),
  };
}

export function formatRoomExitAuditReport(report: RoomExitAuditReport): string {
  const lines = [
    `scannedAt: ${report.scannedAt}`,
    `zones: ${report.zoneCount}`,
    `rooms: ${report.roomCount}`,
    `east -> self: ${report.directEastSelfLoops}`,
    `south -> self: ${report.directSouthSelfLoops}`,
    `any direct self-loop: ${report.directSelfLoops.length}`,
    `missing target room: ${report.missingTargetRooms.length}`,
    `duplicate direction: ${report.duplicateDirections.length}`,
    `two-step non-reverse candidates: ${report.twoStepDirectionCycleCandidates.length}`,
    '',
  ];

  if (report.twoStepDirectionCycleCandidates.length > 0) {
    lines.push('zoneId,roomA,dir1,roomB,dir2,zoneName,roomAName,roomBName');
    for (const candidate of report.twoStepDirectionCycleCandidates) {
      lines.push([
        candidate.zoneId,
        candidate.roomAId,
        candidate.dir1,
        candidate.roomBId,
        candidate.dir2,
        candidate.zoneName,
        candidate.roomAName,
        candidate.roomBName,
      ].join(','));
    }
  }

  return `${lines.join('\n')}\n`;
}
