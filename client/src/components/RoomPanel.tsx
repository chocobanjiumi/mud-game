import { useGameStore } from '../stores/gameStore';

function sendCommand(command: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: command }));
}

export default function RoomPanel() {
  const room = useGameStore((s) => s.room);
  if (!room) return null;

  const hints = room.inspectHints ?? [];
  const corpses = room.corpses ?? [];
  const nodes = room.gatheringNodes ?? [];
  const travelNodes = room.travelNodes ?? [];

  return (
    <div className="room-panel border-b border-border-dim bg-bg-secondary px-3 py-2 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-text-terminal">房間線索</span>
        <button className="text-[10px] text-text-dim hover:text-text-bright" onClick={() => sendCommand('search room')}>
          search
        </button>
      </div>

      {hints.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {hints.map((hint) => (
            <button key={hint.command} className="room-chip" onClick={() => sendCommand(hint.command)}>
              {hint.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-1 text-xs">
        {corpses.map((corpse) => (
          <button key={corpse.id} className="room-row" onClick={() => sendCommand('loot corpse')}>
            <span className="text-combat-damage">{corpse.monsterName}</span>
            <span className="text-text-dim">{corpse.empty ? '已空' : corpse.protected ? '保護中' : '可搜刮'}</span>
          </button>
        ))}

        {nodes.map((node) => (
          <button key={node.id} className="room-row" onClick={() => sendCommand(`gather ${node.id}`)}>
            <span className="text-text-amber">{node.name}</span>
            <span className="text-text-dim">{node.skill} Lv.{node.levelMin}</span>
          </button>
        ))}

        {travelNodes.map((node) => (
          <button key={node.id} className="room-row" onClick={() => sendCommand(node.unlocked ? `travel ${node.id}` : 'activate portal')}>
            <span className="text-chat-party">{node.name}</span>
            <span className="text-text-dim">{node.unlocked ? '可旅行' : '可啟用'}</span>
          </button>
        ))}
      </div>

      {corpses.length === 0 && nodes.length === 0 && travelNodes.length === 0 && hints.length === 0 && (
        <div className="text-xs text-text-dim">目前沒有明確互動物。</div>
      )}
    </div>
  );
}
