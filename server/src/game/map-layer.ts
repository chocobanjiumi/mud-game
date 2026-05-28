import type { RoomDef } from '@game/shared';

export interface RoomMapLayer {
  mapLayer: number;
  mapLayerName?: string;
}

export interface MapLayerInferenceIssue {
  roomId: string;
  targetRoomId?: string;
  kind: 'fallback_layer';
  message: string;
}

export interface MapLayerInferenceReport {
  issues: MapLayerInferenceIssue[];
  fallbackRoomIds: string[];
}

export function buildRoomMapLayerLookup(rooms: RoomDef[]): Map<string, RoomMapLayer> {
  const layers = new Map<string, RoomMapLayer>();

  for (const room of rooms) {
    layers.set(room.id, {
      mapLayer: typeof room.mapLayer === 'number' ? room.mapLayer : inferMapLayerFromCoordinates(room),
      mapLayerName: room.mapLayerName,
    });
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
