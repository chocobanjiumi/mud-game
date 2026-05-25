import { describe, expect, it } from 'vitest';
import { ROOMS, ZONES } from '../data/rooms.js';
import { buildRoomExitAuditReport, findTwoStepDirectionCycleCandidates } from '../game/room-exit-audit.js';

describe('room exit direction audit', () => {
  it('builds a complete topology report for Phase 1 hand review', () => {
    const report = buildRoomExitAuditReport(ROOMS, ZONES, '2026-05-26T00:00:00.000Z');

    expect(report).toMatchObject({
      scannedAt: '2026-05-26T00:00:00.000Z',
      zoneCount: 60,
      roomCount: 1203,
      directEastSelfLoops: 0,
      directSouthSelfLoops: 0,
      directSelfLoops: [],
      missingTargetRooms: [],
      duplicateDirections: [],
    });
    expect(report.twoStepDirectionCycleCandidates.length).toBeGreaterThan(0);
    expect(report.twoStepDirectionCycleCandidates[0]).toEqual(
      expect.objectContaining({
        zoneId: expect.any(String),
        zoneName: expect.any(String),
        roomAId: expect.any(String),
        roomAName: expect.any(String),
        dir1: expect.any(String),
        roomBId: expect.any(String),
        roomBName: expect.any(String),
        dir2: expect.any(String),
        roomADescription: expect.any(String),
        roomBDescription: expect.any(String),
        isLegalReverse: false,
      }),
    );
  });

  it('lists non-reverse A-B-A direction cycles for the known volcano case', () => {
    const candidates = findTwoStepDirectionCycleCandidates(ROOMS, ZONES);

    expect(candidates).toContainEqual(
      expect.objectContaining({
        zoneId: 'volcano_zone',
        roomAId: 'volcano_obsidian_quarry',
        dir1: 'east',
        roomBId: 'volcano_crystal_vent',
        dir2: 'south',
        isLegalReverse: false,
      }),
    );
  });
});
