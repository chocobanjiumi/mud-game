import { useEffect, useRef } from 'react';
import { useGameStore } from '../stores/gameStore';

/** Color class mapping for terminal line categories */
const colorClassMap: Record<string, string> = {
  // Command echo
  'command': 'text-text-dim',

  // Room
  'room-title': 'text-text-amber font-bold',
  'room-desc': 'text-text-bright',
  'exits': 'text-text-terminal',
  'npc': 'text-chat-system',
  'monster': 'text-combat-damage',
  'player': 'text-chat-party',
  'item': 'text-exp-bar',

  // Combat
  'combat': 'text-combat-damage font-bold',
  'damage': 'text-combat-damage',
  'heal': 'text-combat-heal',
  'miss': 'text-combat-miss',
  'crit': 'text-combat-crit',
  'exp': 'text-exp-bar',
  'gold': 'text-text-amber',

  // System
  'system': 'text-chat-system',
  'error': 'text-combat-damage',
  'level-up': 'text-exp-bar font-bold text-glow',
  'skill': 'text-combat-buff',
  'class-change': 'text-text-amber font-bold text-glow',

  // Chat
  'chat-room': 'text-chat-room',
  'chat-party': 'text-chat-party',
  'chat-global': 'text-chat-global',
  'chat-kingdom': 'text-chat-kingdom',

  // Agent
  'agent': 'text-agent-cyan',
};

export default function Terminal() {
  const terminalLines = useGameStore((s) => s.terminalLines);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  // Track whether user has scrolled away from the bottom
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const threshold = 40;
    shouldAutoScrollRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
  };

  // Auto-scroll to bottom when new lines arrive
  useEffect(() => {
    if (shouldAutoScrollRef.current && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto p-3 font-mono text-sm leading-relaxed select-text"
    >
      {terminalLines.length === 0 && (
        <div className="text-text-dim italic">
          正在連線至伺服器...
        </div>
      )}
      {terminalLines.map((line) => {
        const colorClass = line.color ? colorClassMap[line.color] ?? 'text-text-terminal' : 'text-text-terminal';
        return (
          <div key={line.id} className={`whitespace-pre-wrap break-words ${colorClass}`}>
            {line.text || '\u00A0'}
          </div>
        );
      })}
    </div>
  );
}
