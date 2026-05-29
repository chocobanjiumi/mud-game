import { describe, expect, it } from 'vitest';
import type { RoomDef, ZoneDef } from '@game/shared';
import { ROOMS, ZONES } from '../data/rooms.js';
import { buildRoomExitAuditReport, findTwoStepDirectionCycleCandidates } from '../game/room-exit-audit.js';

describe('room exit direction audit', () => {
  it('builds a complete topology report for Phase 1 hand review', () => {
    const report = buildRoomExitAuditReport(ROOMS, ZONES, '2026-05-26T00:00:00.000Z');

    expect(report).toMatchObject({
      scannedAt: '2026-05-26T00:00:00.000Z',
      zoneCount: 60,
      roomCount: 1515,
      directEastSelfLoops: 0,
      directSouthSelfLoops: 0,
      directSelfLoops: [],
      duplicateDirections: [],
    });
    expect(report.twoStepDirectionCycleCandidates).toHaveLength(0);
  });

  it('lists non-reverse A-B-A direction cycles for a synthetic case', () => {
    const rooms: Record<string, RoomDef> = {
      room_a: {
        id: 'room_a',
        name: '測試房 A',
        zone: 'starter_village',
        description: '測試房 A',
        exits: [{ direction: 'east', targetRoomId: 'room_b', description: '往東' }],
        mapSymbol: '[A]',
        mapX: 0,
        mapY: 0,
      },
      room_b: {
        id: 'room_b',
        name: '測試房 B',
        zone: 'starter_village',
        description: '測試房 B',
        exits: [{ direction: 'south', targetRoomId: 'room_a', description: '往南' }],
        mapSymbol: '[B]',
        mapX: 1,
        mapY: 0,
      },
    };
    const zones = {
      starter_village: {
        id: 'starter_village',
        name: '測試區域',
      } as ZoneDef,
    };

    const candidates = findTwoStepDirectionCycleCandidates(rooms, zones);

    expect(candidates).toContainEqual(
      expect.objectContaining({
        zoneId: 'starter_village',
        zoneName: '測試區域',
        roomAId: 'room_a',
        dir1: 'east',
        roomBId: 'room_b',
        dir2: 'south',
        isLegalReverse: false,
      }),
    );
  });
});
