import type { RoomDef } from '@game/shared';

export interface RoomMapLayer {
  mapLayer: number;
  mapLayerName?: string;
}

export interface MapLayerInferenceIssue {
  roomId: string;
  targetRoomId?: string;
  kind: 'up_down_conflict' | 'fallback_layer';
  message: string;
}

export interface MapLayerInferenceReport {
  issues: MapLayerInferenceIssue[];
  fallbackRoomIds: string[];
}

export function buildRoomMapLayerLookup(rooms: RoomDef[]): Map<string, RoomMapLayer> {
  const roomIds = new Set(rooms.map(room => room.id));
  const explicitLayerRooms = new Set(rooms.filter(room => typeof room.mapLayer === 'number').map(room => room.id));
  const layers = new Map<string, RoomMapLayer>();

  for (const room of rooms) {
    layers.set(room.id, {
      mapLayer: typeof room.mapLayer === 'number' ? room.mapLayer : inferMapLayerFromCoordinates(room),
      mapLayerName: room.mapLayerName,
    });
  }

  for (let pass = 0; pass < rooms.length; pass++) {
    let changed = false;
    for (const room of rooms) {
      const sourceLayer = layers.get(room.id);
      if (!sourceLayer) continue;
      for (const exit of room.exits) {
        if (exit.direction !== 'up' && exit.direction !== 'down') continue;
        if (!roomIds.has(exit.targetRoomId) || explicitLayerRooms.has(exit.targetRoomId)) continue;
        const targetLayer = layers.get(exit.targetRoomId);
        if (!targetLayer) continue;
        const nextLayer = sourceLayer.mapLayer + (exit.direction === 'up' ? 1 : -1);
        if (targetLayer.mapLayer === nextLayer) continue;
        layers.set(exit.targetRoomId, { ...targetLayer, mapLayer: nextLayer });
        changed = true;
      }
    }
    if (!changed) break;
  }

  for (const [roomId, layer] of layers) {
    layers.set(roomId, {
      ...layer,
      mapLayerName: layer.mapLayerName ?? formatMapLayerName(layer.mapLayer),
    });
  }

  return layers;
}

export function buildMapLayerInferenceReport(rooms: RoomDef[]): MapLayerInferenceReport {
  const roomById = new Map(rooms.map(room => [room.id, room]));
  const layers = buildRoomMapLayerLookup(rooms);
  const issues: MapLayerInferenceIssue[] = [];
  const fallbackRoomIds: string[] = [];

  for (const room of rooms) {
    if (typeof room.mapLayer !== 'number' && !Number.isFinite(room.mapY)) {
      fallbackRoomIds.push(room.id);
      issues.push({
        roomId: room.id,
        kind: 'fallback_layer',
        message: `${room.id} missing finite mapY; fallback mapLayer=0`,
      });
    }

    for (const exit of room.exits) {
      if (exit.direction !== 'up' && exit.direction !== 'down') continue;
      const target = roomById.get(exit.targetRoomId);
      if (!target) continue;

      const sourceLayer = layers.get(room.id)?.mapLayer ?? 0;
      const targetLayer = layers.get(target.id)?.mapLayer ?? 0;
      const expectedTargetLayer = sourceLayer + (exit.direction === 'up' ? 1 : -1);
      if (targetLayer === expectedTargetLayer) continue;
      if (typeof target.mapLayer === 'number') continue;

      issues.push({
        roomId: room.id,
        targetRoomId: target.id,
        kind: 'up_down_conflict',
        message: `${room.id}:${exit.direction}->${target.id} expected mapLayer ${expectedTargetLayer}, got ${targetLayer}`,
      });
    }
  }

  return { issues, fallbackRoomIds: fallbackRoomIds.sort() };
}

export function inferMapLayerFromCoordinates(room: RoomDef): number {
  if (!Number.isFinite(room.mapY)) return 0;
  if (room.mapY <= -2) return 1;
  if (room.mapY >= 2) return -1;
  return 0;
}

export function formatMapLayerName(layer: number): string {
  if (layer === 0) return '地面層';
  if (layer > 0) return `上層 ${layer}`;
  return `地下 ${Math.abs(layer)}`;
}
