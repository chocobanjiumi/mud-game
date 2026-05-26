import { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { WorldMapRoomPayload, WorldMapZonePayload } from '@game/shared';

const REGION_LABELS: Record<string, string> = {
  central: '中央',
  east: '東部',
  west: '西部',
  north: '北部',
  south: '南部',
  underground: '地下',
  abyss: '深淵',
  celestial: '天界',
};

const DIRECTION_LABELS: Record<string, string> = {
  north: '北',
  south: '南',
  east: '東',
  west: '西',
  up: '上',
  down: '下',
};

export default function WorldMap() {
  const worldMapOpen = useGameStore((s) => s.worldMapOpen);
  const setWorldMapOpen = useGameStore((s) => s.setWorldMapOpen);
  const room = useGameStore((s) => s.room);
  const mapData = useGameStore((s) => s.mapData);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);

  const zones = mapData?.world?.zones ?? [];
  const currentZoneId = mapData?.zone ?? room?.zone ?? '';
  const selectedZone = zones.find(zone => zone.id === (selectedZoneId ?? currentZoneId)) ?? zones[0] ?? null;
  const regionGroups = useMemo(() => groupZonesByRegion(zones), [zones]);

  if (!worldMapOpen) return null;

  return (
    <>
      <div className="worldmap-overlay" onClick={() => setWorldMapOpen(false)} />
      <div className="worldmap-modal">
        <div className="worldmap-header">
          <span className="text-text-terminal font-bold text-sm">世界地圖</span>
          <button
            className="text-text-dim hover:text-text-bright text-sm cursor-pointer"
            onClick={() => setWorldMapOpen(false)}
          >
            [X]
          </button>
        </div>

        <div className="worldmap-body">
          {zones.length > 0 ? (
            <div className="worldmap-layout">
              <div className="worldmap-zone-list">
                {regionGroups.map(([region, regionZones]) => (
                  <section key={region} className="worldmap-region">
                    <div className="worldmap-region-title">{REGION_LABELS[region] ?? region}</div>
                    <div className="worldmap-zone-grid">
                      {regionZones.map((zone) => (
                        <ZoneButton
                          key={zone.id}
                          zone={zone}
                          active={zone.id === selectedZone?.id}
                          current={zone.id === currentZoneId}
                          onClick={() => setSelectedZoneId(zone.id)}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="worldmap-zone-detail">
                {selectedZone ? (
                  <ZoneRoomGraph zone={selectedZone} currentRoomId={mapData?.currentRoom ?? room?.id ?? ''} />
                ) : (
                  <div className="worldmap-empty">尚無區域資料。</div>
                )}
              </div>
            </div>
          ) : (
            <div className="worldmap-empty">尚無世界地圖資料，請先使用 map 重新同步。</div>
          )}
        </div>

        <div className="worldmap-legend">
          <div className="worldmap-legend-item">
            <span className="worldmap-legend-box worldmap-legend-current" />
            <span>目前位置</span>
          </div>
          <div className="worldmap-legend-item">
            <span className="worldmap-legend-box worldmap-legend-explored" />
            <span>已探索</span>
          </div>
          <div className="worldmap-legend-item">
            <span className="worldmap-legend-box worldmap-legend-unexplored" />
            <span>未探索</span>
          </div>
          <span className="text-text-dim text-[10px] ml-auto">按 M 關閉</span>
        </div>
      </div>
    </>
  );
}

function ZoneButton({
  zone,
  active,
  current,
  onClick,
}: {
  zone: WorldMapZonePayload;
  active: boolean;
  current: boolean;
  onClick: () => void;
}) {
  const percent = zone.totalRooms > 0 ? Math.floor((zone.visitedRooms / zone.totalRooms) * 100) : 0;
  return (
    <button
      type="button"
      className={[
        'worldmap-zone-button',
        active ? 'worldmap-zone-button-active' : '',
        current ? 'worldmap-zone-button-current' : '',
        zone.visitedRooms > 0 ? 'worldmap-zone-button-explored' : '',
      ].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <span>{zone.name}</span>
      <b>Lv.{zone.levelRange[0]}-{zone.levelRange[1]} · {zone.totalRooms} 房</b>
      <small>{zone.visitedRooms}/{zone.totalRooms} · {percent}%</small>
    </button>
  );
}

function ZoneRoomGraph({ zone, currentRoomId }: { zone: WorldMapZonePayload; currentRoomId: string }) {
  const layers = useMemo(() => getZoneLayers(zone.rooms), [zone.rooms]);
  const currentRoom = zone.rooms.find(room => room.id === currentRoomId);
  const defaultLayer = currentRoom?.mapLayer ?? layers.find(layer => layer.mapLayer === 0)?.mapLayer ?? layers[0]?.mapLayer ?? 0;
  const [selectedLayer, setSelectedLayer] = useState(defaultLayer);

  useEffect(() => {
    setSelectedLayer(defaultLayer);
  }, [zone.id, defaultLayer]);

  const visibleRooms = zone.rooms.filter(room => room.mapLayer === selectedLayer);
  const bounds = getRoomBounds(visibleRooms);
  const width = Math.max(420, (bounds.maxX - bounds.minX + 1) * 96 + 80);
  const height = Math.max(280, (bounds.maxY - bounds.minY + 1) * 64 + 80);
  const positions = new Map(visibleRooms.map(room => [room.id, roomPosition(room, bounds)]));
  const selectedLayerName = layers.find(layer => layer.mapLayer === selectedLayer)?.name ?? formatMapLayerName(selectedLayer);

  return (
    <div className="worldmap-zone-panel">
      <div className="worldmap-zone-panel-head">
        <div>
          <div className="worldmap-zone-panel-title">{zone.name}</div>
          <div className="worldmap-zone-panel-subtitle">
            {REGION_LABELS[zone.region] ?? zone.region} · {zone.type} · {selectedLayerName} · 危險 {zone.dangerLevel} · PvP {zone.pvpMode}
          </div>
        </div>
        <div className="worldmap-zone-panel-actions">
          <div className="worldmap-zone-panel-count">{visibleRooms.length}/{zone.totalRooms}</div>
          <div className="worldmap-layer-tabs" aria-label="地圖樓層">
            {layers.map((layer) => (
              <button
                key={layer.mapLayer}
                type="button"
                className={layer.mapLayer === selectedLayer ? 'worldmap-layer-tab worldmap-layer-tab-active' : 'worldmap-layer-tab'}
                onClick={() => setSelectedLayer(layer.mapLayer)}
              >
                {layer.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="worldmap-room-scroll">
        {visibleRooms.length > 0 ? (
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="worldmap-room-svg">
          {visibleRooms.flatMap(room => room.exits
            .filter(exit => isPlanarDirection(exit.direction) && exit.targetZoneId === zone.id && positions.has(exit.targetRoomId))
            .map(exit => {
              const from = positions.get(room.id)!;
              const to = positions.get(exit.targetRoomId)!;
              return (
                <line
                  key={`${room.id}-${exit.direction}-${exit.targetRoomId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={exit.locked ? 'worldmap-room-link worldmap-room-link-locked' : 'worldmap-room-link'}
                />
              );
            }))}
          {visibleRooms.map((room) => {
            const position = positions.get(room.id)!;
            const current = room.id === currentRoomId;
            const crossLayerExits = room.exits.filter(exit => isCrossLayerExit(exit, selectedLayer)).slice(0, 2);
            return (
              <g key={room.id} transform={`translate(${position.x - 42} ${position.y - 20})`}>
                <rect
                  width="84"
                  height="40"
                  rx="4"
                  className={[
                    'worldmap-room-node',
                    room.explored ? 'worldmap-room-node-explored' : '',
                    current ? 'worldmap-room-node-current' : '',
                  ].filter(Boolean).join(' ')}
                />
                <text x="42" y="16" textAnchor="middle" className="worldmap-room-symbol">{room.mapSymbol}</text>
                <title>{room.name}</title>
                <text x="42" y="30" textAnchor="middle" className="worldmap-room-name">{room.name}</text>
                {crossLayerExits.map((exit, index) => (
                  <g
                    key={`${room.id}-${exit.direction}-${exit.targetRoomId}`}
                    transform={`translate(${64 + (index * 16)} 4)`}
                    className={typeof exit.targetMapLayer === 'number' ? 'worldmap-layer-marker-group' : ''}
                    onClick={() => {
                      if (typeof exit.targetMapLayer === 'number') setSelectedLayer(exit.targetMapLayer);
                    }}
                  >
                    <circle r="6" className="worldmap-layer-marker" />
                    <text y="3" textAnchor="middle" className="worldmap-layer-marker-text">
                      {DIRECTION_LABELS[exit.direction] ?? exit.direction}
                    </text>
                  </g>
                ))}
              </g>
            );
          })}
          </svg>
        ) : (
          <div className="worldmap-empty">此樓層尚無房間資料。</div>
        )}
      </div>

      <div className="worldmap-room-list">
        {visibleRooms.map((room) => (
          <RoomRow key={room.id} room={room} current={room.id === currentRoomId} />
        ))}
      </div>
    </div>
  );
}

function RoomRow({ room, current }: { room: WorldMapRoomPayload; current: boolean }) {
  const exitText = room.exits
    .map(exit => {
      const direction = DIRECTION_LABELS[exit.direction] ?? exit.direction;
      const target = exit.targetRoomName ?? exit.targetRoomId;
      const layerHint = typeof exit.targetMapLayer === 'number' && exit.targetMapLayer !== room.mapLayer
        ? `(${exit.targetMapLayerName ?? formatMapLayerName(exit.targetMapLayer)})`
        : '';
      return `${direction}:${target}${layerHint}${exit.locked ? '(鎖)' : ''}`;
    })
    .slice(0, 5)
    .join(' / ');
  return (
    <div className={['worldmap-room-row', current ? 'worldmap-room-row-current' : ''].filter(Boolean).join(' ')}>
      <span>{room.name}</span>
      <b>{room.explored ? '已探索' : '未探索'} · {room.mapLayerName ?? formatMapLayerName(room.mapLayer)}</b>
      <small>{exitText || '無出口'}</small>
    </div>
  );
}

function getZoneLayers(rooms: WorldMapRoomPayload[]): { mapLayer: number; name: string }[] {
  const layers = new Map<number, string>();
  for (const room of rooms) {
    layers.set(room.mapLayer, room.mapLayerName ?? formatMapLayerName(room.mapLayer));
  }
  return [...layers.entries()]
    .sort(([a], [b]) => b - a)
    .map(([mapLayer, name]) => ({ mapLayer, name }));
}

function isPlanarDirection(direction: string): boolean {
  return direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west';
}

function isCrossLayerExit(
  exit: WorldMapRoomPayload['exits'][number],
  selectedLayer: number,
): boolean {
  if (exit.direction === 'up' || exit.direction === 'down') return true;
  return typeof exit.targetMapLayer === 'number' && exit.targetMapLayer !== selectedLayer;
}

function formatMapLayerName(layer: number): string {
  if (layer === 0) return '地面層';
  if (layer > 0) return `上層 ${layer}`;
  return `地下 ${Math.abs(layer)}`;
}

function groupZonesByRegion(zones: WorldMapZonePayload[]): [string, WorldMapZonePayload[]][] {
  const groups = new Map<string, WorldMapZonePayload[]>();
  for (const zone of zones) {
    const list = groups.get(zone.region) ?? [];
    list.push(zone);
    groups.set(zone.region, list);
  }
  return [...groups.entries()].map(([region, regionZones]) => [
    region,
    regionZones.sort((a, b) => a.levelRange[0] - b.levelRange[0] || a.name.localeCompare(b.name)),
  ]);
}

function getRoomBounds(rooms: WorldMapRoomPayload[]): { minX: number; maxX: number; minY: number; maxY: number } {
  if (rooms.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  return rooms.reduce((bounds, room) => ({
    minX: Math.min(bounds.minX, room.mapX),
    maxX: Math.max(bounds.maxX, room.mapX),
    minY: Math.min(bounds.minY, room.mapY),
    maxY: Math.max(bounds.maxY, room.mapY),
  }), { minX: rooms[0].mapX, maxX: rooms[0].mapX, minY: rooms[0].mapY, maxY: rooms[0].mapY });
}

function roomPosition(room: WorldMapRoomPayload, bounds: ReturnType<typeof getRoomBounds>): { x: number; y: number } {
  return {
    x: (room.mapX - bounds.minX) * 96 + 56,
    y: (room.mapY - bounds.minY) * 64 + 48,
  };
}
