import { useGameStore } from '../stores/gameStore';

interface ZoneInfo {
  id: string;
  name: string;
  levelRange: string;
  totalRooms: number;
  // grid position for rendering (col, row)
  col: number;
  row: number;
}

const ZONES: ZoneInfo[] = [
  { id: 'ice_plains', name: '冰封雪原', levelRange: '25-30', totalRooms: 12, col: 3, row: 0 },
  { id: 'starter_village', name: '新手村', levelRange: '1-5', totalRooms: 8, col: 0, row: 1 },
  { id: 'green_plains', name: '翠綠平原', levelRange: '5-10', totalRooms: 15, col: 1, row: 1 },
  { id: 'dark_forest', name: '暗影森林', levelRange: '10-15', totalRooms: 14, col: 3, row: 1 },
  { id: 'crystal_cave', name: '水晶洞窟', levelRange: '15-20', totalRooms: 10, col: 5, row: 1 },
  { id: 'lakeside_town', name: '湖畔城鎮', levelRange: '5-8', totalRooms: 10, col: 0, row: 2 },
  { id: 'east_coast', name: '東方海岸', levelRange: '8-12', totalRooms: 11, col: 1, row: 2 },
  { id: 'volcano', name: '火山地帶', levelRange: '20-25', totalRooms: 9, col: 5, row: 2 },
  { id: 'demon_territory', name: '魔族領地', levelRange: '30-35', totalRooms: 13, col: 5, row: 3 },
  { id: 'dragon_valley', name: '龍谷', levelRange: '35-40', totalRooms: 8, col: 5, row: 4 },
  { id: 'abyss_rift', name: '深淵裂隙', levelRange: '40-45', totalRooms: 7, col: 5, row: 5 },
  { id: 'celestial_ruins', name: '天界遺跡', levelRange: '45-50', totalRooms: 10, col: 5, row: 6 },
];

// Connections between zones: [fromId, toId]
const CONNECTIONS: [string, string][] = [
  ['ice_plains', 'dark_forest'],
  ['starter_village', 'green_plains'],
  ['green_plains', 'dark_forest'],
  ['dark_forest', 'crystal_cave'],
  ['starter_village', 'lakeside_town'],
  ['green_plains', 'east_coast'],
  ['crystal_cave', 'volcano'],
  ['volcano', 'demon_territory'],
  ['demon_territory', 'dragon_valley'],
  ['dragon_valley', 'abyss_rift'],
  ['abyss_rift', 'celestial_ruins'],
];

const COL_WIDTH = 130;
const ROW_HEIGHT = 80;
const BOX_W = 110;
const BOX_H = 56;
const PAD_X = 60;
const PAD_Y = 40;

function getCenter(zone: ZoneInfo): { cx: number; cy: number } {
  return {
    cx: PAD_X + zone.col * COL_WIDTH + BOX_W / 2,
    cy: PAD_Y + zone.row * ROW_HEIGHT + BOX_H / 2,
  };
}

export default function WorldMap() {
  const worldMapOpen = useGameStore((s) => s.worldMapOpen);
  const setWorldMapOpen = useGameStore((s) => s.setWorldMapOpen);
  const exploredRooms = useGameStore((s) => s.exploredRooms);
  const room = useGameStore((s) => s.room);

  if (!worldMapOpen) return null;

  // Determine current zone from room id (simple heuristic)
  const currentRoomId = room?.id ?? '';

  // Calculate explored rooms per zone
  const getExploredCount = (zoneId: string) => {
    let count = 0;
    exploredRooms.forEach((rid) => {
      if (rid.startsWith(zoneId)) count++;
    });
    return count;
  };

  const isCurrentZone = (zoneId: string) => currentRoomId.startsWith(zoneId);

  const svgWidth = PAD_X * 2 + 6 * COL_WIDTH;
  const svgHeight = PAD_Y * 2 + 7 * ROW_HEIGHT;

  return (
    <>
      <div className="worldmap-overlay" onClick={() => setWorldMapOpen(false)} />
      <div className="worldmap-modal">
        {/* Header */}
        <div className="worldmap-header">
          <span className="text-text-terminal font-bold text-sm">世界地圖</span>
          <button
            className="text-text-dim hover:text-text-bright text-sm cursor-pointer"
            onClick={() => setWorldMapOpen(false)}
          >
            [X]
          </button>
        </div>

        {/* Map body */}
        <div className="worldmap-body">
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="worldmap-svg"
          >
            {/* Connections */}
            {CONNECTIONS.map(([fromId, toId]) => {
              const fromZone = ZONES.find((z) => z.id === fromId);
              const toZone = ZONES.find((z) => z.id === toId);
              if (!fromZone || !toZone) return null;
              const from = getCenter(fromZone);
              const to = getCenter(toZone);
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#1a3a5c"
                  strokeWidth={2}
                  strokeDasharray="4 3"
                />
              );
            })}

            {/* Zone boxes */}
            {ZONES.map((zone) => {
              const x = PAD_X + zone.col * COL_WIDTH;
              const y = PAD_Y + zone.row * ROW_HEIGHT;
              const explored = getExploredCount(zone.id);
              const isCurrent = isCurrentZone(zone.id);
              const isExplored = explored > 0;

              const fillColor = isCurrent
                ? 'rgba(255, 184, 0, 0.15)'
                : isExplored
                  ? 'rgba(0, 255, 136, 0.08)'
                  : 'rgba(90, 106, 138, 0.08)';
              const strokeColor = isCurrent
                ? '#ffb800'
                : isExplored
                  ? '#00ff88'
                  : '#1a3a5c';
              const textColor = isCurrent
                ? '#ffb800'
                : isExplored
                  ? '#00ff88'
                  : '#5a6a8a';

              return (
                <g key={zone.id}>
                  <rect
                    x={x}
                    y={y}
                    width={BOX_W}
                    height={BOX_H}
                    rx={4}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isCurrent ? 2 : 1}
                  />
                  <text
                    x={x + BOX_W / 2}
                    y={y + 18}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize={11}
                    fontWeight="bold"
                    fontFamily="var(--font-mono)"
                  >
                    {zone.name}
                  </text>
                  <text
                    x={x + BOX_W / 2}
                    y={y + 32}
                    textAnchor="middle"
                    fill="#5a6a8a"
                    fontSize={9}
                    fontFamily="var(--font-mono)"
                  >
                    Lv.{zone.levelRange}
                  </text>
                  <text
                    x={x + BOX_W / 2}
                    y={y + 46}
                    textAnchor="middle"
                    fill="#5a6a8a"
                    fontSize={9}
                    fontFamily="var(--font-mono)"
                  >
                    {explored}/{zone.totalRooms}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
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
