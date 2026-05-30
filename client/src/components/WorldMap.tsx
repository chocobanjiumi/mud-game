import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { WorldMapPayload, WorldMapRoomPayload, WorldMapZonePayload } from '@game/shared';
import { runCommand } from '../utils/gameActions';

type MapMode = 'world' | 'dungeon';

type PlanningRoom = {
  id: string;
  name: string;
  mapX: number;
  mapY: number;
  worldX?: number;
  worldY?: number;
  worldCoordinateSource?: 'explicit' | 'derived' | 'instance-entry';
  mapScope: 'world' | 'instance';
  instanceTemplateId?: string;
  mapSymbol: string;
  explored?: boolean;
  exits: {
    direction: string;
    targetRoomId: string;
    targetRoomName?: string;
    targetZoneId?: string;
    locked?: boolean;
    edgeKind?: string;
    edgeNote?: string;
    broken: boolean;
  }[];
};

type PlanningZone = {
  id: string;
  name: string;
  region: string;
  type: string;
  mapPlan: {
    decision: 'world' | 'instance' | 'hybrid' | 'decision';
    reason: string;
    entranceRoomId?: string;
    globalBounds?: {
      minX: number;
      maxX: number;
      minY: number;
      maxY: number;
      anchor: string;
      terrainRole: string;
    };
  };
  levelRange: [number, number];
  dangerLevel: number;
  pvpMode?: string;
  totalRooms: number;
  visitedRooms: number;
  rooms: PlanningRoom[];
};

type PlanningMapPayload = {
  generatedAt: number;
  zones: Omit<PlanningZone, 'visitedRooms'>[];
  instanceEntries?: { roomId: string }[];
  connections: { fromZoneId: string; toZoneId: string; count: number }[];
};

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

const TYPE_LABELS: Record<string, string> = {
  town: '城鎮',
  wilds: '野外',
  dungeon_entrance: '副本入口',
  resource: '資源',
  pvp: 'PvP',
  kingdom: '王國',
  endgame: '終局',
};

const DIRECTION_LABELS: Record<string, string> = {
  north: '北',
  south: '南',
  east: '東',
  west: '西',
  up: '上',
  down: '下',
};

const REGION_COLORS: Record<string, string[]> = {
  central: ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#34d399'],
  east: ['#60a5fa', '#3b82f6', '#2563eb', '#38bdf8', '#818cf8'],
  west: ['#a78bfa', '#8b5cf6', '#7c3aed', '#c084fc', '#a855f7'],
  north: ['#67e8f9', '#22d3ee', '#06b6d4', '#94a3b8', '#7dd3fc'],
  south: ['#fb923c', '#f97316', '#ea580c', '#f59e0b', '#fbbf24'],
  underground: ['#e879f9', '#d946ef', '#c026d3', '#f0abfc', '#a855f7'],
  abyss: ['#f87171', '#ef4444', '#dc2626', '#fb7185', '#f43f5e'],
  celestial: ['#fde68a', '#fcd34d', '#fbbf24', '#f9a8d4', '#e9d5ff'],
};

function getZoneColor(region: string, indexInRegion: number): string {
  const palette = REGION_COLORS[region] ?? REGION_COLORS.central;
  return palette[indexInRegion % palette.length];
}

type UnifiedRoomEntry = {
  room: PlanningRoom;
  zone: PlanningZone;
  x: number;
  y: number;
  color: string;
  isInstanceEntry: boolean;
};

type UnifiedZoneLabel = {
  id: string;
  name: string;
  cx: number;
  cy: number;
  color: string;
};

type UnifiedAtlas = {
  rooms: Map<string, UnifiedRoomEntry>;
  connectorPath: string;
  zoneLabels: UnifiedZoneLabel[];
  width: number;
  height: number;
};

const DUNGEON_CELL = 28;
const DUNGEON_PAD = 40;

type DungeonRoomEntry = {
  room: PlanningRoom;
  x: number;
  y: number;
  role: 'entrance' | 'boss' | 'normal';
};

type DungeonAtlas = {
  zone: PlanningZone;
  rooms: Map<string, DungeonRoomEntry>;
  connectorPath: string;
  width: number;
  height: number;
};

function sendCommand(command: string, echo?: string) {
  runCommand(command, echo);
}

export default function WorldMap() {
  const worldMapOpen = useGameStore((s) => s.worldMapOpen);
  const setWorldMapOpen = useGameStore((s) => s.setWorldMapOpen);
  const room = useGameStore((s) => s.room);
  const mapData = useGameStore((s) => s.mapData);
  const [planningPayload, setPlanningPayload] = useState<PlanningMapPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null);
  const [teleportPopup, setTeleportPopup] = useState<{ roomId: string; roomName: string; x: number; y: number } | null>(null);
  const [mode, setMode] = useState<MapMode>('world');
  const [selectedDungeonId, setSelectedDungeonId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1.5);

  const canvasWrapRef = useRef<HTMLElement>(null);
  const dragRef = useRef<{ active: boolean; startX: number; startY: number; scrollX: number; scrollY: number }>({
    active: false, startX: 0, startY: 0, scrollX: 0, scrollY: 0,
  });

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const wrap = canvasWrapRef.current;
    if (!wrap) return;
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, scrollX: wrap.scrollLeft, scrollY: wrap.scrollTop };
    wrap.setPointerCapture(e.pointerId);
    wrap.style.cursor = 'grabbing';
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const wrap = canvasWrapRef.current;
    if (!wrap) return;
    wrap.scrollLeft = drag.scrollX - (e.clientX - drag.startX);
    wrap.scrollTop = drag.scrollY - (e.clientY - drag.startY);
  }, []);

  const handleRoomClick = useCallback((e: { clientX: number; clientY: number }, roomId: string, roomName: string) => {
    setSelectedRoomId(roomId);
    if (roomId === (mapData?.currentRoom ?? room?.id ?? '')) {
      setTeleportPopup(null);
      return;
    }
    setTeleportPopup({
      roomId,
      roomName,
      x: e.clientX,
      y: e.clientY,
    });
  }, [mapData, room]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    const drag = dragRef.current;
    const wasDrag = Math.abs(e.clientX - drag.startX) > 3 || Math.abs(e.clientY - drag.startY) > 3;
    drag.active = false;
    const wrap = canvasWrapRef.current;
    if (wrap) {
      wrap.releasePointerCapture(e.pointerId);
      wrap.style.cursor = 'grab';
    }
    if (!wasDrag) {
      requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el instanceof SVGRectElement) {
          const roomId = el.getAttribute('data-room-id');
          const roomName = el.getAttribute('data-room-name');
          if (roomId && roomName) {
            handleRoomClick({ clientX: e.clientX, clientY: e.clientY }, roomId, roomName);
          }
        }
      });
    }
  }, [handleRoomClick]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(prev => {
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      return Math.min(2.5, Math.max(0.3, Number((prev + delta).toFixed(2))));
    });
  }, []);

  const currentRoomId = mapData?.currentRoom ?? room?.id ?? '';
  const liveWorld = mapData?.world;

  useEffect(() => {
    if (!worldMapOpen) return;

    let cancelled = false;
    setError(null);
    fetch('/api/mud/world-map')
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<PlanningMapPayload>;
      })
      .then((data) => {
        if (cancelled) return;
        setPlanningPayload(data);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
      });

    return () => {
      cancelled = true;
    };
  }, [worldMapOpen]);

  useEffect(() => {
    if (!worldMapOpen) return;
    setSelectedRoomId(currentRoomId || liveWorld?.zones[0]?.rooms[0]?.id || null);
  }, [currentRoomId, liveWorld, worldMapOpen]);

  const zones = useMemo(() => {
    const baseZones = planningPayload?.zones ?? (liveWorld ? convertLiveWorldToPlanningZones(liveWorld) : []);
    return mergeExploration(baseZones, liveWorld, currentRoomId);
  }, [currentRoomId, liveWorld, planningPayload]);

  const unifiedAtlas = useMemo(() => zones.length > 0 && mode === 'world' ? buildUnifiedAtlas(zones) : null, [mode, zones]);

  const hasCenteredRef = useRef(false);
  useEffect(() => {
    if (!worldMapOpen) {
      hasCenteredRef.current = false;
      return;
    }
    if (hasCenteredRef.current) return;
    if (mode !== 'world' || !unifiedAtlas || !currentRoomId) return;
    const entry = unifiedAtlas.rooms.get(currentRoomId);
    if (!entry) return;
    const wrap = canvasWrapRef.current;
    if (!wrap) return;
    hasCenteredRef.current = true;
    requestAnimationFrame(() => {
      const cx = entry.x * zoom - wrap.clientWidth / 2 + (UNIFIED_CELL * zoom) / 2;
      const cy = entry.y * zoom - wrap.clientHeight / 2 + (UNIFIED_CELL * zoom) / 2;
      wrap.scrollLeft = cx;
      wrap.scrollTop = cy;
    });
  }, [worldMapOpen, mode, unifiedAtlas, currentRoomId, zoom]);

  const instanceZones = useMemo(() =>
    zones.filter(z => z.mapPlan.decision === 'instance').sort((a, b) => a.levelRange[0] - b.levelRange[0] || a.name.localeCompare(b.name)),
    [zones],
  );

  const dungeonAtlas = useMemo(() => {
    if (mode !== 'dungeon' || !selectedDungeonId) return null;
    const zone = instanceZones.find(z => z.id === selectedDungeonId);
    if (!zone) return null;
    return buildDungeonAtlas(zone);
  }, [mode, selectedDungeonId, instanceZones]);

  const roomLookup = useMemo(() => {
    if (mode === 'world' && unifiedAtlas) {
      const map = new Map<string, { room: PlanningRoom; zone: PlanningZone; x: number; y: number }>();
      for (const [id, entry] of unifiedAtlas.rooms) {
        map.set(id, { room: entry.room, zone: entry.zone, x: entry.x, y: entry.y });
      }
      return map;
    }
    if (mode === 'dungeon' && dungeonAtlas) {
      const map = new Map<string, { room: PlanningRoom; zone: PlanningZone; x: number; y: number }>();
      for (const [id, entry] of dungeonAtlas.rooms) {
        map.set(id, { room: entry.room, zone: dungeonAtlas.zone, x: entry.x, y: entry.y });
      }
      return map;
    }
    return new Map<string, { room: PlanningRoom; zone: PlanningZone; x: number; y: number }>();
  }, [unifiedAtlas, dungeonAtlas, mode]);

  const selected = selectedRoomId ? roomLookup.get(selectedRoomId) ?? null : null;
  const hovered = hoveredRoomId ? roomLookup.get(hoveredRoomId) ?? null : null;
  const active = hovered ?? selected;

  const zoneListSource = mode === 'world' && unifiedAtlas
    ? [...new Map(
        [...unifiedAtlas.rooms.values()].map(e => [e.zone.id, e.zone]),
      ).values()]
    : [];

  function handleModeSwitch(newMode: MapMode) {
    setMode(newMode);
    if (newMode === 'dungeon' && !selectedDungeonId && instanceZones.length > 0) {
      setSelectedDungeonId(instanceZones[0].id);
    }
    setSelectedRoomId(null);
    setHoveredRoomId(null);
    setTeleportPopup(null);
  }

  function handleDungeonSelect(zoneId: string) {
    setSelectedDungeonId(zoneId);
    setSelectedRoomId(null);
    setHoveredRoomId(null);
  }

  function renderDungeonList() {
    return (
      <aside className="dungeon-list-sidebar">
        <section className="map-planning-card map-planning-zone-list-card">
          <h2>副本列表</h2>
          <div className="map-planning-zone-list">
            {instanceZones.map(zone => (
              <button
                key={zone.id}
                type="button"
                onClick={() => handleDungeonSelect(zone.id)}
                className={selectedDungeonId === zone.id ? 'map-planning-zone-index-active' : ''}
              >
                <span>{zone.name}</span>
                <small>Lv.{zone.levelRange[0]}-{zone.levelRange[1]} · {zone.visitedRooms}/{zone.totalRooms}</small>
              </button>
            ))}
          </div>
        </section>
      </aside>
    );
  }

  function renderInfoSidebar() {
    return (
      <aside className="worldmap-planning-sidebar">
        <section className="map-planning-card">
          <h2>總覽</h2>
          <div className="map-planning-stat-grid">
            {mode === 'world' ? (
              <>
                <span>區域</span><b>{zones.filter(z => z.mapPlan.decision === 'world' || z.mapPlan.decision === 'decision').length}</b>
                <span>房間</span><b>{unifiedAtlas ? unifiedAtlas.rooms.size : 0}</b>
                <span>已探索</span><b>{zones.reduce((sum, zone) => sum + zone.visitedRooms, 0)}</b>
              </>
            ) : dungeonAtlas ? (
              <>
                <span>副本</span><b>{dungeonAtlas.zone.name}</b>
                <span>房間</span><b>{dungeonAtlas.zone.totalRooms}</b>
                <span>已探索</span><b>{dungeonAtlas.zone.visitedRooms}</b>
              </>
            ) : (
              <span>請選擇副本</span>
            )}
          </div>
          {error ? <div className="map-planning-muted map-planning-note">規劃 API 暫不可用，已使用目前同步資料顯示。</div> : null}
        </section>

        <section className="map-planning-card">
          <h2>{active ? active.room.name : '選取房間'}</h2>
          {active ? (
            <>
              <div className="map-planning-room-detail">
                <span>{active.zone.name}</span>
                <b>
                  {REGION_LABELS[active.zone.region] ?? active.zone.region} · {TYPE_LABELS[active.zone.type] ?? active.zone.type}
                </b>
                <small>ID: {active.room.id}</small>
                {hasPlanningCoordinate(active.room) && (
                  <small>
                    world: ({active.room.worldX}, {active.room.worldY})
                  </small>
                )}
                <small>{active.room.explored ? '已探索' : '未探索'}{active.room.id === currentRoomId ? ' · 目前位置' : ''}</small>
              </div>
              <div className="map-planning-exits">
                {active.room.exits.length > 0 ? active.room.exits.map(exit => (
                  <button
                    key={`${active.room.id}-${exit.direction}-${exit.targetRoomId}`}
                    type="button"
                    className="map-planning-exit"
                    onClick={() => setSelectedRoomId(exit.targetRoomId)}
                  >
                    <span>{DIRECTION_LABELS[exit.direction] ?? exit.direction}</span>
                    <b>{exit.targetRoomName ?? exit.targetRoomId}</b>
                    <small>{formatExitMeta(exit, active.zone.id)}</small>
                    {exit.edgeNote ? <small>{exit.edgeNote}</small> : null}
                  </button>
                )) : (
                  <div className="map-planning-muted">無出口</div>
                )}
              </div>
            </>
          ) : (
            <div className="map-planning-muted">點擊任一小方形查看房間與出口。</div>
          )}
        </section>

        {mode === 'world' && (
          <section className="map-planning-card map-planning-zone-list-card">
            <h2>區域索引</h2>
            <div className="map-planning-zone-list">
              {zoneListSource.map(zone => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedRoomId(zone.rooms[0]?.id ?? null)}
                  className={selected?.zone.id === zone.id ? 'map-planning-zone-index-active' : ''}
                >
                  <span style={unifiedAtlas ? {
                    borderLeft: `3px solid ${unifiedAtlas.rooms.get(zone.rooms[0]?.id ?? '')?.color ?? '#4ade80'}`,
                    paddingLeft: '6px',
                  } : undefined}>
                    {zone.name}
                  </span>
                  <small>Lv.{zone.levelRange[0]}-{zone.levelRange[1]} · {zone.visitedRooms}/{zone.totalRooms}</small>
                </button>
              ))}
            </div>
          </section>
        )}
      </aside>
    );
  }

  if (!worldMapOpen) return null;

  return (
    <>
      <div className="worldmap-overlay" onClick={() => setWorldMapOpen(false)} />
      <div className="worldmap-modal worldmap-planning-modal">
        <div className="worldmap-header">
          <span className="text-text-terminal font-bold text-sm">世界地圖</span>
          <div className="worldmap-header-actions">
            <div className="map-planning-mode-tabs" aria-label="地圖模式">
              <button
                type="button"
                className={mode === 'world' ? 'map-planning-mode-active' : ''}
                onClick={() => handleModeSwitch('world')}
              >
                世界全圖
              </button>
              <button
                type="button"
                className={mode === 'dungeon' ? 'map-planning-mode-active' : ''}
                onClick={() => handleModeSwitch('dungeon')}
              >
                副本地圖
              </button>
            </div>
            <button type="button" onClick={() => setZoom(value => Math.max(0.3, Number((value - 0.1).toFixed(2))))}>-</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom(value => Math.min(2.5, Number((value + 0.1).toFixed(2))))}>+</button>
            <button
              className="text-text-dim hover:text-text-bright text-sm cursor-pointer"
              onClick={() => setWorldMapOpen(false)}
            >
              [X]
            </button>
          </div>
        </div>

        <div className="worldmap-body worldmap-planning-body">
          {error && !planningPayload && !liveWorld ? (
            <div className="worldmap-empty">讀取地圖資料失敗：{error}</div>
          ) : mode === 'world' && unifiedAtlas ? (
            <div className="worldmap-planning-layout">
              <section
                className="worldmap-planning-canvas-wrap unified-map-canvas-wrap"
                aria-label="世界全圖"
                ref={canvasWrapRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onWheelCapture={onWheel}
              >
                <svg
                  className="map-planning-canvas"
                  width={unifiedAtlas.width * zoom}
                  height={unifiedAtlas.height * zoom}
                  viewBox={`0 0 ${unifiedAtlas.width} ${unifiedAtlas.height}`}
                  role="img"
                >
                  <rect x="0" y="0" width={unifiedAtlas.width} height={unifiedAtlas.height} fill="#0c1424" />
                  {unifiedAtlas.connectorPath && (
                    <path d={unifiedAtlas.connectorPath} className="unified-map-connector" />
                  )}
                  {unifiedAtlas.zoneLabels.map(label => (
                    <text
                      key={label.id}
                      x={label.cx}
                      y={label.cy}
                      textAnchor="middle"
                      className="unified-map-zone-label"
                      fill={label.color}
                    >
                      {label.name}
                    </text>
                  ))}
                  {[...unifiedAtlas.rooms.values()].map(entry => {
                    const isSelected = entry.room.id === selectedRoomId;
                    const isHovered = entry.room.id === hoveredRoomId;
                    const isCurrent = entry.room.id === currentRoomId;
                    return (
                      <g key={entry.room.id}>
                        <rect
                          x={entry.x}
                          y={entry.y}
                          width={UNIFIED_CELL - 2}
                          height={UNIFIED_CELL - 2}
                          rx="2"
                          tabIndex={0}
                          role="button"
                          aria-label={`${entry.zone.name} ${entry.room.name}`}
                          data-room-id={entry.room.id}
                          data-room-name={entry.room.name}
                          fill={entry.isInstanceEntry ? '#ef4444' : isSelected || isHovered ? undefined : entry.color}
                          fillOpacity={entry.isInstanceEntry ? 0.9 : entry.room.explored ? 0.9 : 0.55}
                          stroke={entry.isInstanceEntry ? '#ef4444' : isSelected || isHovered ? undefined : entry.color}
                          strokeOpacity={0.8}
                          className={[
                            'unified-map-room',
                            entry.isInstanceEntry ? 'worldmap-instance-entry' : '',
                            !entry.isInstanceEntry && entry.room.explored ? 'worldmap-planning-room-explored' : '',
                            !entry.isInstanceEntry && isCurrent ? 'worldmap-planning-room-current' : '',
                            !entry.isInstanceEntry && isSelected ? 'map-planning-room-selected' : '',
                            !entry.isInstanceEntry && isHovered ? 'map-planning-room-hovered' : '',
                          ].filter(Boolean).join(' ')}
                          onMouseEnter={() => setHoveredRoomId(entry.room.id)}
                          onMouseLeave={() => setHoveredRoomId(null)}
                          onFocus={() => setHoveredRoomId(entry.room.id)}
                          onBlur={() => setHoveredRoomId(null)}
                          onClick={(e) => handleRoomClick(e, entry.room.id, entry.room.name)}
                        />
                        <title>{entry.zone.name} / {entry.room.name}</title>
                      </g>
                    );
                  })}
                </svg>
              </section>

              {renderInfoSidebar()}
            </div>
          ) : mode === 'dungeon' ? (
            <div className="dungeon-map-layout">
              {renderDungeonList()}

              {dungeonAtlas ? (
                <section
                  className="worldmap-planning-canvas-wrap unified-map-canvas-wrap"
                  aria-label="副本地圖"
                  ref={canvasWrapRef}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  onWheelCapture={onWheel}
                >
                  <svg
                    className="map-planning-canvas"
                    width={dungeonAtlas.width * zoom}
                    height={dungeonAtlas.height * zoom}
                    viewBox={`0 0 ${dungeonAtlas.width} ${dungeonAtlas.height}`}
                    role="img"
                  >
                    <rect x="0" y="0" width={dungeonAtlas.width} height={dungeonAtlas.height} fill="#0c1424" />
                    {dungeonAtlas.connectorPath && (
                      <path d={dungeonAtlas.connectorPath} className="dungeon-map-connector" />
                    )}
                    <text x={dungeonAtlas.width / 2} y={24} textAnchor="middle" className="unified-map-zone-label" fill="#67e8f9">
                      {dungeonAtlas.zone.name}
                    </text>
                    {[...dungeonAtlas.rooms.values()].map(entry => {
                      const isSelected = entry.room.id === selectedRoomId;
                      const isHovered = entry.room.id === hoveredRoomId;
                      const isCurrent = entry.room.id === currentRoomId;
                      return (
                        <g key={entry.room.id}>
                          <rect
                            x={entry.x}
                            y={entry.y}
                            width={DUNGEON_CELL - 4}
                            height={DUNGEON_CELL - 4}
                            rx="3"
                            tabIndex={0}
                            role="button"
                            aria-label={entry.room.name}
                            data-room-id={entry.room.id}
                            data-room-name={entry.room.name}
                            className={[
                              'dungeon-map-room',
                              `dungeon-map-room-${entry.role}`,
                              entry.room.explored ? 'worldmap-planning-room-explored' : '',
                              isCurrent ? 'worldmap-planning-room-current' : '',
                              isSelected ? 'map-planning-room-selected' : '',
                              isHovered ? 'map-planning-room-hovered' : '',
                            ].filter(Boolean).join(' ')}
                            onMouseEnter={() => setHoveredRoomId(entry.room.id)}
                            onMouseLeave={() => setHoveredRoomId(null)}
                            onFocus={() => setHoveredRoomId(entry.room.id)}
                            onBlur={() => setHoveredRoomId(null)}
                            onClick={(e) => handleRoomClick(e, entry.room.id, entry.room.name)}
                          />
                          <title>{entry.room.name}</title>
                        </g>
                      );
                    })}
                  </svg>
                </section>
              ) : (
                <div className="worldmap-empty" style={{ flex: 1 }}>請從左側選擇副本</div>
              )}

              {renderInfoSidebar()}
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
          {mode === 'world' && (
            <div className="worldmap-legend-item">
              <span className="worldmap-legend-box" style={{ background: '#ef4444' }} />
              <span>副本入口</span>
            </div>
          )}
          {mode === 'dungeon' && (
            <>
              <div className="worldmap-legend-item">
                <span className="worldmap-legend-box worldmap-legend-entrance" />
                <span>入口</span>
              </div>
              <div className="worldmap-legend-item">
                <span className="worldmap-legend-box worldmap-legend-boss" />
                <span>Boss</span>
              </div>
            </>
          )}
          <span className="text-text-dim text-[10px] ml-auto">按 M 關閉</span>
        </div>
      </div>
      {teleportPopup && (
        <div
          className="worldmap-teleport-popup"
          style={{ left: teleportPopup.x, top: teleportPopup.y }}
        >
          <span>{teleportPopup.roomName}</span>
          <button
            type="button"
            className="worldmap-teleport-btn"
            onClick={() => {
              sendCommand(`debug tp ${teleportPopup.roomId}`, `傳送至 ${teleportPopup.roomName}`);
              setTeleportPopup(null);
              setWorldMapOpen(false);
            }}
          >
            傳送至此
          </button>
          <button
            type="button"
            className="worldmap-teleport-popup-close"
            onClick={() => setTeleportPopup(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

function mergeExploration(
  zones: Omit<PlanningZone, 'visitedRooms'>[],
  liveWorld: WorldMapPayload | undefined,
  currentRoomId: string,
): PlanningZone[] {
  const liveRooms = new Map<string, WorldMapRoomPayload>();
  const liveZones = new Map<string, WorldMapZonePayload>();
  for (const zone of liveWorld?.zones ?? []) {
    liveZones.set(zone.id, zone);
    for (const room of zone.rooms) liveRooms.set(room.id, room);
  }

  return zones.map(zone => {
    const liveZone = liveZones.get(zone.id);
    const rooms = zone.rooms.map(room => {
      const live = liveRooms.get(room.id);
      return {
        ...room,
        explored: live?.explored ?? room.id === currentRoomId,
      };
    });
    return {
      ...zone,
      visitedRooms: liveZone?.visitedRooms ?? rooms.filter(room => room.explored).length,
      rooms,
    };
  });
}

function convertLiveWorldToPlanningZones(world: WorldMapPayload): Omit<PlanningZone, 'visitedRooms'>[] {
  return world.zones.map(zone => ({
    id: zone.id,
    name: zone.name,
    region: zone.region,
    type: zone.type,
    mapPlan: {
      decision: 'decision',
      reason: '目前同步資料未包含規劃座標。',
    },
    levelRange: zone.levelRange,
    dangerLevel: zone.dangerLevel,
    pvpMode: zone.pvpMode,
    totalRooms: zone.totalRooms,
    rooms: zone.rooms.map(room => ({
      id: room.id,
      name: room.name,
      mapX: room.mapX,
      mapY: room.mapY,
      mapScope: 'world' as const,
      mapSymbol: room.mapSymbol,
      explored: room.explored,
      exits: room.exits.map(exit => ({
        direction: exit.direction,
        targetRoomId: exit.targetRoomId,
        targetRoomName: exit.targetRoomName,
        targetZoneId: exit.targetZoneId,
        locked: exit.locked,
        broken: false,
      })),
    })),
  }));
}

function hasPlanningCoordinate(room: PlanningRoom): boolean {
  return typeof room.worldX === 'number' && typeof room.worldY === 'number';
}

const UNIFIED_CELL = 16;

function buildUnifiedAtlas(zones: PlanningZone[]): UnifiedAtlas {
  const MARGIN = 60;
  const regionCounter: Record<string, number> = {};
  const zoneColorMap = new Map<string, string>();

  for (const zone of zones) {
    const idx = regionCounter[zone.region] ?? 0;
    regionCounter[zone.region] = idx + 1;
    zoneColorMap.set(zone.id, getZoneColor(zone.region, idx));
  }

  const worldZones = zones.filter(
    z => z.mapPlan.decision === 'world' || z.mapPlan.decision === 'decision',
  );

  const instanceEntryIds = new Set<string>();
  const allRoomEntries: { room: PlanningRoom; zone: PlanningZone; wx: number; wy: number }[] = [];
  for (const zone of worldZones) {
    for (const room of zone.rooms) {
      if (!hasPlanningCoordinate(room)) continue;
      allRoomEntries.push({ room, zone, wx: room.worldX!, wy: room.worldY! });
    }
  }
  for (const zone of zones) {
    if (zone.mapPlan.decision !== 'instance') continue;
    const eid = zone.mapPlan.entranceRoomId;
    if (!eid) continue;
    const room = zone.rooms.find(r => r.id === eid);
    if (!room || !hasPlanningCoordinate(room)) continue;
    instanceEntryIds.add(room.id);
    allRoomEntries.push({ room, zone, wx: room.worldX!, wy: room.worldY! });
  }

  if (allRoomEntries.length === 0) {
    return { rooms: new Map(), connectorPath: '', zoneLabels: [], width: 600, height: 400 };
  }

  const minWX = Math.min(...allRoomEntries.map(e => e.wx));
  const minWY = Math.min(...allRoomEntries.map(e => e.wy));
  const maxWX = Math.max(...allRoomEntries.map(e => e.wx));
  const maxWY = Math.max(...allRoomEntries.map(e => e.wy));

  const rooms = new Map<string, UnifiedRoomEntry>();
  for (const entry of allRoomEntries) {
    rooms.set(entry.room.id, {
      room: entry.room,
      zone: entry.zone,
      x: MARGIN + (entry.wx - minWX) * UNIFIED_CELL,
      y: MARGIN + (entry.wy - minWY) * UNIFIED_CELL,
      color: zoneColorMap.get(entry.zone.id) ?? '#4ade80',
      isInstanceEntry: instanceEntryIds.has(entry.room.id),
    });
  }

  const halfCell = (UNIFIED_CELL - 2) / 2;
  const worldRoomByCoord = new Map(allRoomEntries.map(e => [`${e.wx},${e.wy}`, e]));

  function shouldConnect(a: typeof allRoomEntries[0], b: typeof allRoomEntries[0], dirAB: string, dirBA: string): boolean {
    if (a.zone.id === b.zone.id) return true;
    const exitAB = a.room.exits.find(e => e.direction === dirAB && e.targetRoomId === b.room.id);
    const exitBA = b.room.exits.find(e => e.direction === dirBA && e.targetRoomId === a.room.id);
    return !!(exitAB && !exitAB.locked) || !!(exitBA && !exitBA.locked);
  }

  const segments: string[] = [];
  for (const entry of allRoomEntries) {
    const sx = MARGIN + (entry.wx - minWX) * UNIFIED_CELL;
    const sy = MARGIN + (entry.wy - minWY) * UNIFIED_CELL;
    const eastNeighbor = worldRoomByCoord.get(`${entry.wx + 1},${entry.wy}`);
    if (eastNeighbor && shouldConnect(entry, eastNeighbor, 'east', 'west')) {
      segments.push(`M${sx + UNIFIED_CELL - 2} ${sy + halfCell}h2`);
    }
    const southNeighbor = worldRoomByCoord.get(`${entry.wx},${entry.wy + 1}`);
    if (southNeighbor && shouldConnect(entry, southNeighbor, 'south', 'north')) {
      segments.push(`M${sx + halfCell} ${sy + UNIFIED_CELL - 2}v2`);
    }
  }
  const connectorPath = segments.join('');

  const zoneCentroids = new Map<string, { sx: number; sy: number; count: number }>();
  for (const entry of rooms.values()) {
    const c = zoneCentroids.get(entry.zone.id) ?? { sx: 0, sy: 0, count: 0 };
    c.sx += entry.x;
    c.sy += entry.y;
    c.count += 1;
    zoneCentroids.set(entry.zone.id, c);
  }

  const zoneLabels: UnifiedZoneLabel[] = [];
  for (const [zoneId, c] of zoneCentroids) {
    const zone = worldZones.find(z => z.id === zoneId);
    if (!zone) continue;
    zoneLabels.push({
      id: zoneId,
      name: zone.name,
      cx: c.sx / c.count + (UNIFIED_CELL - 2) / 2,
      cy: c.sy / c.count - 8,
      color: zoneColorMap.get(zoneId) ?? '#4ade80',
    });
  }

  return {
    rooms,
    connectorPath,
    zoneLabels,
    width: MARGIN * 2 + (maxWX - minWX) * UNIFIED_CELL + UNIFIED_CELL,
    height: MARGIN * 2 + (maxWY - minWY) * UNIFIED_CELL + UNIFIED_CELL,
  };
}

function buildDungeonAtlas(zone: PlanningZone): DungeonAtlas {
  if (zone.rooms.length === 0) {
    return { zone, rooms: new Map(), connectorPath: '', width: 200, height: 200 };
  }

  const minX = Math.min(...zone.rooms.map(r => r.mapX));
  const minY = Math.min(...zone.rooms.map(r => r.mapY));
  const maxX = Math.max(...zone.rooms.map(r => r.mapX));
  const maxY = Math.max(...zone.rooms.map(r => r.mapY));

  const entranceId = zone.mapPlan.entranceRoomId ?? zone.rooms[0]?.id;
  const nonFillerRooms = zone.rooms.filter(r => !r.id.includes('_fill_'));
  const bossIds = new Set(nonFillerRooms.slice(-2).map(r => r.id));

  const rooms = new Map<string, DungeonRoomEntry>();
  for (const room of zone.rooms) {
    const role = room.id === entranceId ? 'entrance' as const
      : bossIds.has(room.id) ? 'boss' as const
      : 'normal' as const;
    rooms.set(room.id, {
      room,
      x: DUNGEON_PAD + (room.mapX - minX) * DUNGEON_CELL,
      y: DUNGEON_PAD + (room.mapY - minY) * DUNGEON_CELL,
      role,
    });
  }

  const roomByCoord = new Map(zone.rooms.map(r => [`${r.mapX},${r.mapY}`, r]));
  const halfCell = (DUNGEON_CELL - 4) / 2;
  const segments: string[] = [];

  for (const room of zone.rooms) {
    const sx = DUNGEON_PAD + (room.mapX - minX) * DUNGEON_CELL;
    const sy = DUNGEON_PAD + (room.mapY - minY) * DUNGEON_CELL;

    for (const exit of room.exits) {
      if (exit.locked) continue;
      const target = roomByCoord.get(
        exit.direction === 'east' ? `${room.mapX + 1},${room.mapY}` :
        exit.direction === 'west' ? `${room.mapX - 1},${room.mapY}` :
        exit.direction === 'south' ? `${room.mapX},${room.mapY + 1}` :
        exit.direction === 'north' ? `${room.mapX},${room.mapY - 1}` : '',
      );
      if (!target || target.id !== exit.targetRoomId) continue;

      if (exit.direction === 'east') {
        segments.push(`M${sx + DUNGEON_CELL - 4} ${sy + halfCell}h4`);
      } else if (exit.direction === 'south') {
        segments.push(`M${sx + halfCell} ${sy + DUNGEON_CELL - 4}v4`);
      }
    }
  }

  return {
    zone,
    rooms,
    connectorPath: segments.join(''),
    width: DUNGEON_PAD * 2 + (maxX - minX + 1) * DUNGEON_CELL,
    height: DUNGEON_PAD * 2 + (maxY - minY + 1) * DUNGEON_CELL,
  };
}

function formatExitMeta(exit: PlanningRoom['exits'][number], currentZoneId: string): string {
  if (exit.broken) return '缺 target';
  if (exit.edgeKind && exit.edgeKind !== 'normal') return exit.edgeKind;
  if (exit.targetZoneId && exit.targetZoneId !== currentZoneId) return `跨區：${exit.targetZoneId}`;
  return '同區';
}
