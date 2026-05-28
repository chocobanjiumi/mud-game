import { useGameStore } from '../stores/gameStore';
import type { Direction, LocalMapPayload, RoomExit } from '@game/shared';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export default function MiniMap() {
  const mapData = useGameStore((s) => s.mapData);
  const room = useGameStore((s) => s.room);
  const zoneLabel = mapData?.zoneName ?? mapData?.zone;
  const localMap = room?.localMap ?? mapData?.localMap;

  return (
    <div className="bg-bg-secondary border border-border-dim rounded p-2">
      <div className="text-xs text-text-dim mb-1 flex items-center justify-between">
        <span>地圖</span>
        {zoneLabel && <span className="text-text-amber">{zoneLabel}</span>}
      </div>

      {mapData?.zoneType && (
        <div className="mb-2 grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-text-dim">
          <span>類型 <b className="text-text-bright font-normal">{mapData.zoneType}</b></span>
          <span>危險 <b className="text-text-amber font-normal">{mapData.dangerLevel ?? 0}</b></span>
          <span>PvP <b className="text-text-bright font-normal">{mapData.pvpMode}</b></span>
          <span>死亡 <b className="text-text-bright font-normal">{mapData.deathPenalty}</b></span>
          {mapData.exploration && (
            <span className="col-span-2">
              探索 <b className="text-text-terminal font-normal">{mapData.exploration.visitedRooms}/{mapData.exploration.totalRooms} ({mapData.exploration.percent}%)</b>
            </span>
          )}
        </div>
      )}

      {localMap ? (
        <LocalGridMap map={localMap} exits={room?.exits ?? []} roomName={room?.name} />
      ) : mapData?.ascii ? (
        <>
          <pre className="text-[10px] leading-tight text-text-terminal font-mono whitespace-pre select-none">
            {mapData.ascii}
          </pre>
          {mapData.travelNodes && mapData.travelNodes.length > 0 && (
            <div className="mt-2 border-t border-border-dim pt-2 space-y-1">
              <div className="text-[10px] text-text-dim">交通點</div>
              {mapData.travelNodes.slice(0, 4).map((node) => (
                <div key={node.id} className="flex justify-between gap-2 text-[10px]">
                  <span className={node.unlocked ? 'text-chat-party truncate' : 'text-text-dim truncate'}>{node.name}</span>
                  <span className="text-text-dim shrink-0">{node.unlocked ? '已啟用' : node.kind}</span>
                </div>
              ))}
            </div>
          )}
        </>
      ) : room ? (
        <div className="text-center py-2 space-y-1">
          <FallbackGridMap exits={room.exits} roomName={room.name} />
          <div className="text-[10px] text-text-dim mt-1">{room.name}</div>
        </div>
      ) : (
        <div className="text-xs text-text-dim text-center py-4">
          尚無地圖資訊
        </div>
      )}
    </div>
  );
}

function LocalGridMap({ map, exits, roomName }: { map: LocalMapPayload; exits: RoomExit[]; roomName?: string }) {
  const current = map.rooms.find((candidate) => candidate.id === map.currentRoom);
  if (!current) return <FallbackGridMap exits={exits} roomName={roomName} />;

  const roomsByCoord = new Map(map.rooms.map((candidate) => [`${candidate.x}:${candidate.y}`, candidate]));
  const roomsById = new Map(map.rooms.map((candidate) => [candidate.id, candidate]));
  const exitByTarget = new Map(exits.map((exit) => [exit.targetRoomId, exit]));
  const grid = Array.from({ length: map.size }, (_, row) =>
    Array.from({ length: map.size }, (_, col) => {
      const x = current.x + col - 2;
      const y = current.y + row - 2;
      return roomsByCoord.get(`${x}:${y}`) ?? null;
    }),
  );
  for (const exit of exits) {
    const offset = directionOffset(exit.direction);
    if (!offset) continue;
    const row = 2 + offset.dy;
    const col = 2 + offset.dx;
    grid[row][col] = roomsById.get(exit.targetRoomId) ?? {
      id: exit.targetRoomId,
      name: exit.description ?? `${directionLabel(exit.direction)}側房間`,
      x: current.x + offset.dx,
      y: current.y + offset.dy,
      explored: false,
      exits: [],
    };
  }

  return (
    <div className="space-y-2">
      <div className="minimap-grid" aria-label="5x5 小地圖">
        {grid.flatMap((row, rowIndex) => row.map((cell, colIndex) => {
          const isCurrent = cell?.id === map.currentRoom;
          const exit = cell ? exitByTarget.get(cell.id) : undefined;
          const className = [
            'minimap-cell',
            cell ? 'minimap-room' : 'minimap-wall',
            cell && !cell.explored ? 'minimap-room-unexplored' : '',
            isCurrent ? 'minimap-current' : '',
            exit && !isCurrent ? 'minimap-clickable' : '',
          ].filter(Boolean).join(' ');
          const label = cell ? `${cell.name}${isCurrent ? '，目前位置' : cell.explored ? '' : '，未探索'}` : '牆';

          if (exit && !isCurrent) {
            return (
              <button
                key={`${rowIndex}-${colIndex}-${cell.id}`}
                type="button"
                className={className}
                title={`${directionLabel(exit.direction)}：${cell.name}`}
                aria-label={`前往${directionLabel(exit.direction)}，${cell.name}`}
                onClick={() => sendCommand(`go ${exit.direction}`, `前往${directionLabel(exit.direction)}`)}
              >
                {isCurrent ? <span /> : null}
              </button>
            );
          }

          return <div key={`${rowIndex}-${colIndex}-${cell?.id ?? 'wall'}`} className={className} title={label} aria-label={label}>{isCurrent ? <span /> : null}</div>;
        }))}
      </div>
      <MapDetails exits={exits} roomName={roomName} />
    </div>
  );
}

function FallbackGridMap({ exits, roomName }: { exits: RoomExit[]; roomName?: string }) {
  const exitByDirection = new Map(exits.map((exit) => [exit.direction, exit]));
  const cells = Array.from({ length: 25 }, (_, index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    const dir = directionFromOffset(col - 2, row - 2);
    const exit = dir ? exitByDirection.get(dir) : undefined;
    const isCurrent = row === 2 && col === 2;

    return { index, exit, isCurrent };
  });

  return (
    <div className="space-y-2">
      <div className="minimap-grid" aria-label="5x5 小地圖">
        {cells.map(({ index, exit, isCurrent }) => {
          const className = [
            'minimap-cell',
            exit || isCurrent ? 'minimap-room' : 'minimap-wall',
            isCurrent ? 'minimap-current' : '',
            exit ? 'minimap-room-unexplored minimap-clickable' : '',
          ].filter(Boolean).join(' ');

          if (exit) {
            return (
              <button
                key={index}
                type="button"
                className={className}
                title={`${directionLabel(exit.direction)}出口`}
                aria-label={`前往${directionLabel(exit.direction)}`}
                onClick={() => sendCommand(`go ${exit.direction}`, `前往${directionLabel(exit.direction)}`)}
              />
            );
          }

          return <div key={index} className={className} title={isCurrent ? '目前位置' : '牆'}>{isCurrent ? <span /> : null}</div>;
        })}
      </div>
      <MapDetails exits={exits} roomName={roomName} />
    </div>
  );
}

function MapDetails({ exits, roomName }: { exits: RoomExit[]; roomName?: string }) {
  return (
    <div className="space-y-1">
      {roomName && <div className="text-[10px] text-text-dim truncate">{roomName}</div>}
      <div className="minimap-legend">
        <span><b className="minimap-legend-wall" />牆</span>
        <span><b className="minimap-legend-room" />房</span>
        <span><b className="minimap-legend-current" />你</span>
      </div>
      {exits.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {exits.map((exit) => (
            <button
              key={exit.direction}
              type="button"
              className="minimap-exit"
              onClick={() => sendCommand(`go ${exit.direction}`, `前往${directionLabel(exit.direction)}`)}
            >
              {directionLabel(exit.direction)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function directionFromOffset(dx: number, dy: number): Direction | null {
  if (dx === 0 && dy === -1) return 'north';
  if (dx === 0 && dy === 1) return 'south';
  if (dx === 1 && dy === 0) return 'east';
  if (dx === -1 && dy === 0) return 'west';
  return null;
}

function directionOffset(direction: Direction): { dx: number; dy: number } | null {
  if (direction === 'north') return { dx: 0, dy: -1 };
  if (direction === 'south') return { dx: 0, dy: 1 };
  if (direction === 'east') return { dx: 1, dy: 0 };
  if (direction === 'west') return { dx: -1, dy: 0 };
  return null;
}

function directionLabel(direction: Direction): string {
  const labels: Record<Direction, string> = {
    north: '北',
    south: '南',
    east: '東',
    west: '西',
  };
  return labels[direction];
}
