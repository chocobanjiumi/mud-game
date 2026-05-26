import { describe, expect, it } from 'vitest';
import type { RoomDef } from '@game/shared';
import { buildMapLayerInferenceReport, buildRoomMapLayerLookup } from '../game/map-layer.js';

function room(overrides: Partial<RoomDef> & Pick<RoomDef, 'id'>): RoomDef {
  return {
    id: overrides.id,
    name: overrides.name ?? overrides.id,
    zone: overrides.zone ?? 'test_zone',
    description: overrides.description ?? overrides.id,
    exits: overrides.exits ?? [],
    mapSymbol: overrides.mapSymbol ?? '[ ]',
    mapX: overrides.mapX ?? 0,
    mapY: overrides.mapY ?? 0,
    ...overrides,
  };
}

describe('map layer inference', () => {
  it('uses explicit mapLayer before mapY and still reports up/down conflicts for inferred targets', () => {
    const rooms = [
      room({
        id: 'ground',
        mapLayer: 0,
        mapY: 0,
        exits: [{ direction: 'up', targetRoomId: 'high', description: '往上' }],
      }),
      room({ id: 'high', mapY: 0 }),
    ];

    const layers = buildRoomMapLayerLookup(rooms);
    const report = buildMapLayerInferenceReport(rooms);

    expect(layers.get('ground')?.mapLayer).toBe(0);
    expect(layers.get('high')?.mapLayer).toBe(1);
    expect(report.issues).toEqual([]);
  });

  it('falls back to mapLayer 0 and reports rooms with invalid coordinates', () => {
    const invalid = room({ id: 'invalid_y', mapY: Number.NaN });

    const layers = buildRoomMapLayerLookup([invalid]);
    const report = buildMapLayerInferenceReport([invalid]);

    expect(layers.get('invalid_y')?.mapLayer).toBe(0);
    expect(report.fallbackRoomIds).toEqual(['invalid_y']);
    expect(report.issues).toContainEqual(expect.objectContaining({
      roomId: 'invalid_y',
      kind: 'fallback_layer',
    }));
  });
});
