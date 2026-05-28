import { useEffect, useMemo, useState } from 'react';

type PlanningRoom = {
  id: string;
  name: string;
  mapX: number;
  mapY: number;
  worldX?: number;
  worldY?: number;
  worldCoordinateSource?: 'explicit' | 'derived';
  mapScope: 'world' | 'instance';
  instanceTemplateId?: string;
  mapSymbol: string;
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
  totalRooms: number;
  rooms: PlanningRoom[];
};

type PlanningMapPayload = {
  generatedAt: number;
  zones: PlanningZone[];
  connections: { fromZoneId: string; toZoneId: string; count: number }[];
  diagnostics: {
    missingTargets: string[];
    duplicateDirections: string[];
    selfLoops: string[];
    specialEdges: string[];
    crossZoneWorldAdjacencyIssues: string[];
    borderRoomGaps: string[];
  };
};

type PlacedZone = PlanningZone & {
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  minMapX: number;
  minMapY: number;
  templateRooms?: PlanningRoom[];
};

const CELL = 14;
const ZONE_GAP_X = 28;
const ZONE_GAP_Y = 34;
const ZONE_PAD_X = 18;
const ZONE_PAD_TOP = 34;
const ZONE_PAD_BOTTOM = 16;
const ZONES_PER_ROW = 8;

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

export default function MapPlanningPage() {
  const [payload, setPayload] = useState<PlanningMapPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null);
  const [mode, setMode] = useState<'local' | 'planning'>('local');
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/mud/world-map')
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<PlanningMapPayload>;
      })
      .then((data) => {
        if (cancelled) return;
        setPayload(data);
        setSelectedRoomId(data.zones[0]?.rooms[0]?.id ?? null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const atlas = useMemo(() => payload ? buildAtlas(payload.zones, mode) : null, [payload, mode]);
  const roomLookup = useMemo(() => {
    const map = new Map<string, { room: PlanningRoom; zone: PlacedZone; x: number; y: number }>();
    if (!atlas) return map;
    for (const zone of atlas.zones) {
      for (const room of zone.rooms) {
        map.set(room.id, {
          room,
          zone,
          x: zone.offsetX + ZONE_PAD_X + (getRoomOffsetX(room, zone, mode) * CELL),
          y: zone.offsetY + ZONE_PAD_TOP + (getRoomOffsetY(room, zone, mode) * CELL),
        });
      }
    }
    return map;
  }, [atlas, mode]);

  const selected = selectedRoomId ? roomLookup.get(selectedRoomId) ?? null : null;
  const hovered = hoveredRoomId ? roomLookup.get(hoveredRoomId) ?? null : null;
  const active = hovered ?? selected;

  return (
    <main className="map-planning-page">
      <header className="map-planning-header">
        <div>
          <h1>世界房間規劃圖</h1>
          <p>根據目前正式 room 資料繪製；一個小方形代表一個 room，作為後續全世界平面重連底稿。</p>
        </div>
        <div className="map-planning-controls">
          <div className="map-planning-mode-tabs" aria-label="地圖模式">
            <button
              type="button"
              className={mode === 'local' ? 'map-planning-mode-active' : ''}
              onClick={() => setMode('local')}
            >
              現況 local map
            </button>
            <button
              type="button"
              className={mode === 'planning' ? 'map-planning-mode-active' : ''}
              onClick={() => setMode('planning')}
            >
              規劃 global map
            </button>
          </div>
          <button type="button" onClick={() => setZoom(value => Math.max(0.45, Number((value - 0.1).toFixed(2))))}>-</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom(value => Math.min(1.8, Number((value + 0.1).toFixed(2))))}>+</button>
        </div>
      </header>

      {error ? (
        <div className="map-planning-error">讀取地圖資料失敗：{error}</div>
      ) : !payload || !atlas ? (
        <div className="map-planning-loading">載入房間資料中...</div>
      ) : (
        <div className="map-planning-layout">
          <section className="map-planning-canvas-wrap" aria-label="世界房間方格圖">
            <svg
              className="map-planning-canvas"
              width={atlas.width * zoom}
              height={atlas.height * zoom}
              viewBox={`0 0 ${atlas.width} ${atlas.height}`}
              role="img"
            >
              <rect x="0" y="0" width={atlas.width} height={atlas.height} className="map-planning-bg" />
              {atlas.zones.map(zone => (
                <g key={zone.id}>
                  <rect
                    x={zone.offsetX}
                    y={zone.offsetY}
                    width={zone.width}
                    height={zone.height}
                    rx="2"
                    className="map-planning-zone-frame"
                  />
                  <text x={zone.offsetX + 8} y={zone.offsetY + 16} className="map-planning-zone-title">
                    {zone.name}
                  </text>
                  <text x={zone.offsetX + 8} y={zone.offsetY + 28} className="map-planning-zone-meta">
                    {formatDecision(zone.mapPlan.decision)} · Lv.{zone.levelRange[0]}-{zone.levelRange[1]} · {zone.rooms.length}
                  </text>
                  {zone.rooms.map(room => {
                    const placement = roomLookup.get(room.id);
                    if (!placement) return null;
                    const selectedRoom = room.id === selectedRoomId;
                    const hoveredRoom = room.id === hoveredRoomId;
                    return (
                      <g key={room.id}>
                        <rect
                          x={placement.x}
                          y={placement.y}
                          width={CELL - 2}
                          height={CELL - 2}
                          rx="1"
                          tabIndex={0}
                          role="button"
                          aria-label={`${zone.name} ${room.name}`}
                          className={[
                            'map-planning-room',
                            room.mapScope === 'instance' ? 'map-planning-room-instance' : '',
                            mode === 'planning' && !hasPlanningCoordinate(room) ? 'map-planning-room-missing-coordinate' : '',
                            selectedRoom ? 'map-planning-room-selected' : '',
                            hoveredRoom ? 'map-planning-room-hovered' : '',
                          ].filter(Boolean).join(' ')}
                          onMouseEnter={() => setHoveredRoomId(room.id)}
                          onMouseLeave={() => setHoveredRoomId(null)}
                          onFocus={() => setHoveredRoomId(room.id)}
                          onBlur={() => setHoveredRoomId(null)}
                          onClick={() => setSelectedRoomId(room.id)}
                        />
                        <title>{zone.name} / {room.name}</title>
                      </g>
                    );
                  })}
                </g>
              ))}
            </svg>
          </section>

          <aside className="map-planning-sidebar">
            <section className="map-planning-card">
              <h2>總覽</h2>
              <div className="map-planning-stat-grid">
                <span>區域</span><b>{payload.zones.length}</b>
                <span>房間</span><b>{payload.zones.reduce((sum, zone) => sum + zone.rooms.length, 0)}</b>
                <span>世界區域</span><b>{payload.zones.filter(zone => zone.mapPlan.decision === 'world').length}</b>
                <span>副本候選</span><b>{payload.zones.filter(zone => zone.mapPlan.decision === 'instance').length}</b>
                <span>待決策</span><b>{payload.zones.filter(zone => zone.mapPlan.decision === 'decision').length}</b>
                <span>跨區連線</span><b>{payload.connections.length}</b>
              </div>
              {mode === 'planning' ? (
                <div className="map-planning-muted map-planning-note">
                  規劃模式會優先使用 `worldX/worldY`；尚未指派座標的 room 仍以 local map 暫放並以虛線顯示。
                </div>
              ) : null}
            </section>

            <section className="map-planning-card">
              <h2>診斷</h2>
              <div className="map-planning-stat-grid">
                <span>缺目標</span><b>{payload.diagnostics.missingTargets.length}</b>
                <span>重複方向</span><b>{payload.diagnostics.duplicateDirections.length}</b>
                <span>自迴圈</span><b>{payload.diagnostics.selfLoops.length}</b>
                <span>特殊邊</span><b>{payload.diagnostics.specialEdges.length}</b>
                <span>跨區問題</span><b>{payload.diagnostics.crossZoneWorldAdjacencyIssues.length}</b>
                <span>邊界缺口</span><b>{payload.diagnostics.borderRoomGaps.length}</b>
              </div>
              <DiagnosticList title="邊界缺口" items={payload.diagnostics.borderRoomGaps} />
              <DiagnosticList title="跨區方向問題" items={payload.diagnostics.crossZoneWorldAdjacencyIssues} />
              <DiagnosticList title="特殊邊" items={payload.diagnostics.specialEdges} />
              <DiagnosticList
                title="Broken exits"
                items={[
                  ...payload.diagnostics.missingTargets,
                  ...payload.diagnostics.duplicateDirections,
                  ...payload.diagnostics.selfLoops,
                ]}
              />
            </section>

            <section className="map-planning-card">
              <h2>{active ? active.room.name : '選取房間'}</h2>
              {active ? (
                <>
                  <div className="map-planning-room-detail">
                    <span>{active.zone.name}</span>
                    <b>
                      {REGION_LABELS[active.zone.region] ?? active.zone.region} · {TYPE_LABELS[active.zone.type] ?? active.zone.type} · {formatDecision(active.zone.mapPlan.decision)}
                    </b>
                    <small>ID: {active.room.id}</small>
                    <small>local map: ({active.room.mapX}, {active.room.mapY})</small>
                    <small>
                      global map: {hasPlanningCoordinate(active.room) ? `(${active.room.worldX}, ${active.room.worldY})${active.room.worldCoordinateSource ? ` · ${active.room.worldCoordinateSource}` : ''}` : '未指派'}
                    </small>
                    {active.zone.mapPlan.globalBounds ? (
                      <small>
                        zone bbox: ({active.zone.mapPlan.globalBounds.minX}, {active.zone.mapPlan.globalBounds.minY}) - ({active.zone.mapPlan.globalBounds.maxX}, {active.zone.mapPlan.globalBounds.maxY})
                      </small>
                    ) : null}
                    <small>scope: {active.room.mapScope}</small>
                  </div>
                  {mode === 'planning' && active.zone.mapPlan.decision === 'instance' && active.zone.templateRooms ? (
                    <div className="map-planning-template-list">
                      <b>副本房間清單</b>
                      <div>
                        {active.zone.templateRooms.map(room => (
                          <span key={room.id}>{room.name}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}
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

            <section className="map-planning-card map-planning-zone-list-card">
              <h2>區域索引</h2>
              <div className="map-planning-zone-list">
                {atlas.zones.map(zone => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedRoomId(zone.rooms[0]?.id ?? null)}
                    className={selected?.zone.id === zone.id ? 'map-planning-zone-index-active' : ''}
                  >
                    <span>{zone.name}</span>
                    <small>{formatDecision(zone.mapPlan.decision)} · {zone.templateRooms?.length ?? zone.rooms.length}</small>
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      )}
    </main>
  );
}

function buildAtlas(zones: PlanningZone[], mode: 'local' | 'planning'): { zones: PlacedZone[]; width: number; height: number } {
  if (mode === 'planning') {
    return buildGlobalAtlas(zones);
  }

  const sorted = [...zones].sort((a, b) =>
    a.levelRange[0] - b.levelRange[0] ||
    a.region.localeCompare(b.region) ||
    a.name.localeCompare(b.name),
  );
  const measured = sorted.map(zone => {
    const bounds = getZoneBounds(zone, mode);
    return {
      zone,
      bounds,
      width: Math.max(120, ((bounds.maxX - bounds.minX + 1) * CELL) + (ZONE_PAD_X * 2)),
      height: Math.max(96, ((bounds.maxY - bounds.minY + 1) * CELL) + ZONE_PAD_TOP + ZONE_PAD_BOTTOM),
    };
  });

  const rowHeights: number[] = [];
  measured.forEach((entry, index) => {
    const row = Math.floor(index / ZONES_PER_ROW);
    rowHeights[row] = Math.max(rowHeights[row] ?? 0, entry.height);
  });

  const rowOffsets = rowHeights.reduce<number[]>((offsets, height, index) => {
    offsets[index] = index === 0 ? ZONE_GAP_Y : offsets[index - 1] + rowHeights[index - 1] + ZONE_GAP_Y;
    return offsets;
  }, []);

  const placed: PlacedZone[] = measured.map((entry, index) => {
    const row = Math.floor(index / ZONES_PER_ROW);
    const col = index % ZONES_PER_ROW;
    const priorInRow = measured.slice(row * ZONES_PER_ROW, row * ZONES_PER_ROW + col);
    const offsetX = ZONE_GAP_X + priorInRow.reduce((sum, prior) => sum + prior.width + ZONE_GAP_X, 0);
    return {
      ...entry.zone,
      offsetX,
      offsetY: rowOffsets[row] ?? ZONE_GAP_Y,
      width: entry.width,
      height: entry.height,
        minMapX: entry.bounds.minX,
        minMapY: entry.bounds.minY,
    };
  });

  return {
    zones: placed,
    width: Math.max(...placed.map(zone => zone.offsetX + zone.width + ZONE_GAP_X), 600),
    height: Math.max(...placed.map(zone => zone.offsetY + zone.height + ZONE_GAP_Y), 400),
  };
}

function buildGlobalAtlas(zones: PlanningZone[]): { zones: PlacedZone[]; width: number; height: number } {
  const planningZones = zones.map(toPlanningDisplayZone);
  const plannedZones = planningZones.filter(zone => zone.mapPlan.globalBounds);
  const fallbackZones = planningZones.filter(zone => !zone.mapPlan.globalBounds);
  const minGlobalX = Math.min(...plannedZones.map(zone => zone.mapPlan.globalBounds!.minX), 0);
  const minGlobalY = Math.min(...plannedZones.map(zone => zone.mapPlan.globalBounds!.minY), 0);
  const maxGlobalX = Math.max(...plannedZones.map(zone => zone.mapPlan.globalBounds!.maxX), 0);
  const maxGlobalY = Math.max(...plannedZones.map(zone => zone.mapPlan.globalBounds!.maxY), 0);
  const margin = 40;

  const placedPlanned: PlacedZone[] = plannedZones.map(zone => {
    const globalBounds = zone.mapPlan.globalBounds!;
    const localBounds = getZoneBounds(zone, 'local');
    return {
      ...zone,
      offsetX: margin + ((globalBounds.minX - minGlobalX) * CELL),
      offsetY: margin + ((globalBounds.minY - minGlobalY) * CELL),
      width: Math.max(
        ((globalBounds.maxX - globalBounds.minX + 1) * CELL),
        ((localBounds.maxX - localBounds.minX + 1) * CELL),
      ) + (ZONE_PAD_X * 2),
      height: Math.max(
        ((globalBounds.maxY - globalBounds.minY + 1) * CELL),
        ((localBounds.maxY - localBounds.minY + 1) * CELL),
      ) + ZONE_PAD_TOP + ZONE_PAD_BOTTOM,
      minMapX: localBounds.minX,
      minMapY: localBounds.minY,
    };
  });

  const fallbackStartY = margin + ((maxGlobalY - minGlobalY + 2) * CELL) + ZONE_GAP_Y;
  const fallbackMeasured = fallbackZones
    .sort((a, b) => a.levelRange[0] - b.levelRange[0] || a.name.localeCompare(b.name))
    .map(zone => {
      const bounds = getZoneBounds(zone, 'local');
      return {
        zone,
        bounds,
        width: Math.max(120, ((bounds.maxX - bounds.minX + 1) * CELL) + (ZONE_PAD_X * 2)),
        height: Math.max(96, ((bounds.maxY - bounds.minY + 1) * CELL) + ZONE_PAD_TOP + ZONE_PAD_BOTTOM),
      };
    });
  const fallbackRowHeight = Math.max(...fallbackMeasured.map(item => item.height), 96);
  const fallbackPlaced = fallbackMeasured.map((entry, index): PlacedZone => {
    const col = index % ZONES_PER_ROW;
    const row = Math.floor(index / ZONES_PER_ROW);
    const priorInRow = fallbackMeasured.slice(row * ZONES_PER_ROW, row * ZONES_PER_ROW + col);
    return {
      ...entry.zone,
      offsetX: margin + priorInRow.reduce((sum, prior) => sum + prior.width + ZONE_GAP_X, 0),
      offsetY: fallbackStartY + (row * (fallbackRowHeight + ZONE_GAP_Y)),
      width: entry.width,
      height: entry.height,
      minMapX: entry.bounds.minX,
      minMapY: entry.bounds.minY,
    };
  });

  const placed = [...placedPlanned, ...fallbackPlaced];
  return {
    zones: placed,
    width: Math.max(...placed.map(zone => zone.offsetX + zone.width + ZONE_GAP_X), ((maxGlobalX - minGlobalX + 1) * CELL) + (margin * 2), 600),
    height: Math.max(...placed.map(zone => zone.offsetY + zone.height + ZONE_GAP_Y), 400),
  };
}

function toPlanningDisplayZone(zone: PlanningZone): PlanningZone & { templateRooms?: PlanningRoom[] } {
  if (zone.mapPlan.decision !== 'instance') return zone;
  const entranceRoom = zone.rooms.find(room => room.id === zone.mapPlan.entranceRoomId) ?? zone.rooms[0];
  return {
    ...zone,
    rooms: entranceRoom ? [entranceRoom] : [],
    templateRooms: zone.rooms,
  };
}

function getRoomOffsetX(room: PlanningRoom, zone: PlacedZone, mode: 'local' | 'planning'): number {
  if (mode === 'planning' && zone.mapPlan.globalBounds && hasPlanningCoordinate(room)) {
    return room.worldX! - zone.mapPlan.globalBounds.minX;
  }
  return getRoomDisplayX(room, mode) - zone.minMapX;
}

function getRoomOffsetY(room: PlanningRoom, zone: PlacedZone, mode: 'local' | 'planning'): number {
  if (mode === 'planning' && zone.mapPlan.globalBounds && hasPlanningCoordinate(room)) {
    return room.worldY! - zone.mapPlan.globalBounds.minY;
  }
  return getRoomDisplayY(room, mode) - zone.minMapY;
}

function getZoneBounds(zone: PlanningZone, mode: 'local' | 'planning'): { minX: number; maxX: number; minY: number; maxY: number } {
  if (zone.rooms.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  return zone.rooms.reduce((bounds, room) => ({
    minX: Math.min(bounds.minX, getRoomDisplayX(room, mode)),
    maxX: Math.max(bounds.maxX, getRoomDisplayX(room, mode)),
    minY: Math.min(bounds.minY, getRoomDisplayY(room, mode)),
    maxY: Math.max(bounds.maxY, getRoomDisplayY(room, mode)),
  }), {
    minX: getRoomDisplayX(zone.rooms[0], mode),
    maxX: getRoomDisplayX(zone.rooms[0], mode),
    minY: getRoomDisplayY(zone.rooms[0], mode),
    maxY: getRoomDisplayY(zone.rooms[0], mode),
  });
}

function getRoomDisplayX(room: PlanningRoom, mode: 'local' | 'planning'): number {
  return mode === 'planning' && typeof room.worldX === 'number' ? room.worldX : room.mapX;
}

function getRoomDisplayY(room: PlanningRoom, mode: 'local' | 'planning'): number {
  return mode === 'planning' && typeof room.worldY === 'number' ? room.worldY : room.mapY;
}

function hasPlanningCoordinate(room: PlanningRoom): boolean {
  return typeof room.worldX === 'number' && typeof room.worldY === 'number';
}

function DiagnosticList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="map-planning-diagnostic-list">
      <b>{title}</b>
      {items.slice(0, 5).map(item => (
        <small key={item}>{item}</small>
      ))}
      {items.length > 5 ? <small>另有 {items.length - 5} 筆</small> : null}
    </div>
  );
}

function formatExitMeta(exit: PlanningRoom['exits'][number], currentZoneId: string): string {
  if (exit.broken) return '缺 target';
  if (exit.edgeKind && exit.edgeKind !== 'normal') return exit.edgeKind;
  if (exit.targetZoneId && exit.targetZoneId !== currentZoneId) return `跨區：${exit.targetZoneId}`;
  return '同區';
}

function formatDecision(decision: PlanningZone['mapPlan']['decision']): string {
  switch (decision) {
    case 'world': return '世界';
    case 'instance': return '副本';
    case 'hybrid': return '混合';
    case 'decision': return '待決';
  }
}
