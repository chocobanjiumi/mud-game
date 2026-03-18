import { useEffect, useRef, useState, useCallback } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { TerminalEntity, TerminalLine as TLine } from '../stores/gameStore';

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

/** 根據實體類型取得動作選單 */
function getActionsForEntity(entity: TerminalEntity): { label: string; command: string }[] {
  if (entity.entityType === 'npc') {
    const actions: { label: string; command: string }[] = [
      { label: '查看', command: `look ${entity.cmdName}` },
      { label: '對話', command: `talk ${entity.cmdName}` },
    ];
    if (entity.npcType === 'merchant') {
      actions.push({ label: '交易', command: `shop ${entity.cmdName}` });
    }
    return actions;
  }
  if (entity.entityType === 'monster') {
    return [
      { label: '查看', command: `look ${entity.cmdName}` },
      { label: '攻擊', command: `attack ${entity.cmdName}` },
    ];
  }
  if (entity.entityType === 'player') {
    return [
      { label: '查看', command: `look ${entity.cmdName}` },
      { label: '組隊', command: `party invite ${entity.cmdName}` },
      { label: '決鬥', command: `duel ${entity.cmdName}` },
      { label: '交易', command: `trade ${entity.cmdName}` },
    ];
  }
  return [];
}

function sendTerminalCommand(command: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: command }));
}

interface PopupState {
  entity: TerminalEntity;
  x: number;
  y: number;
}

/** 可點擊的實體名稱 */
function ClickableEntity({ entity, colorClass, onOpenMenu }: {
  entity: TerminalEntity;
  colorClass: string;
  onOpenMenu: (entity: TerminalEntity, x: number, y: number) => void;
}) {
  return (
    <span
      className={`${colorClass} underline decoration-dotted cursor-pointer hover:brightness-125`}
      onClick={(e) => {
        e.stopPropagation();
        onOpenMenu(entity, e.clientX, e.clientY);
      }}
    >
      {entity.name}
    </span>
  );
}

/** 將含有實體的行拆分成可點擊片段 */
function InteractiveLine({ line, colorClass, onOpenMenu }: {
  line: TLine;
  colorClass: string;
  onOpenMenu: (entity: TerminalEntity, x: number, y: number) => void;
}) {
  if (!line.entities || line.entities.length === 0) {
    return <>{line.text || '\u00A0'}</>;
  }

  // 找出前綴 (e.g. "NPC: ", "怪物: ", "玩家: ")
  const text = line.text;
  const colonIdx = text.indexOf(': ');
  const prefix = colonIdx >= 0 ? text.slice(0, colonIdx + 2) : '';

  return (
    <>
      {prefix}
      {line.entities.map((entity, i) => (
        <span key={i}>
          {i > 0 && ', '}
          <ClickableEntity entity={entity} colorClass={colorClass} onOpenMenu={onOpenMenu} />
        </span>
      ))}
    </>
  );
}

export default function Terminal() {
  const terminalLines = useGameStore((s) => s.terminalLines);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);
  const [popup, setPopup] = useState<PopupState | null>(null);

  const handleOpenMenu = useCallback((entity: TerminalEntity, x: number, y: number) => {
    setPopup({ entity, x, y });
  }, []);

  // 點擊其他地方關閉選單
  useEffect(() => {
    if (!popup) return;
    const close = () => setPopup(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [popup]);

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
      className="flex-1 overflow-y-auto p-3 font-mono text-sm leading-relaxed select-text relative"
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
            <InteractiveLine line={line} colorClass={colorClass} onOpenMenu={handleOpenMenu} />
          </div>
        );
      })}

      {/* 動作選單彈窗 */}
      {popup && (
        <div
          className="fixed z-50 bg-bg-secondary border border-border-dim rounded shadow-lg py-1 min-w-[100px]"
          style={{ left: popup.x, bottom: window.innerHeight - popup.y }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3 py-1 text-xs text-text-dim border-b border-border-dim">
            {popup.entity.cmdName}
          </div>
          {getActionsForEntity(popup.entity).map((action) => (
            <button
              key={action.command}
              className="w-full text-left px-3 py-1.5 text-sm text-text-bright hover:bg-bg-tertiary cursor-pointer"
              onClick={() => {
                sendTerminalCommand(action.command);
                setPopup(null);
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
