import { useGameStore } from '../stores/gameStore';

export default function MiniMap() {
  const mapData = useGameStore((s) => s.mapData);
  const room = useGameStore((s) => s.room);

  return (
    <div className="bg-bg-secondary border border-border-dim rounded p-2">
      <div className="text-xs text-text-dim mb-1 flex items-center justify-between">
        <span>地圖</span>
        {mapData?.zone && <span className="text-text-amber">{mapData.zone}</span>}
      </div>

      {mapData?.ascii ? (
        <pre className="text-[10px] leading-tight text-text-terminal font-mono whitespace-pre select-none">
          {mapData.ascii}
        </pre>
      ) : room ? (
        <div className="text-center py-2 space-y-1">
          {/* Simple ASCII representation based on exits */}
          <pre className="text-xs leading-tight text-text-terminal font-mono whitespace-pre select-none">
            {renderSimpleMap(room.exits.map((e) => e.direction))}
          </pre>
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

function renderSimpleMap(exits: string[]): string {
  const has = (dir: string) => exits.includes(dir);
  const lines: string[] = [];

  //      N
  //   W [@] E
  //      S

  lines.push(`     ${has('north') ? '|' : ' '}`);
  lines.push(`     ${has('north') ? 'N' : ' '}`);
  lines.push(`${has('west') ? 'W--' : '   '}[@]${has('east') ? '--E' : '   '}`);
  lines.push(`     ${has('south') ? 'S' : ' '}`);
  lines.push(`     ${has('south') ? '|' : ' '}`);

  if (has('up') || has('down')) {
    const upDown = `${has('up') ? ' [上]' : ''}${has('down') ? ' [下]' : ''}`;
    lines.push(upDown);
  }

  return lines.join('\n');
}
