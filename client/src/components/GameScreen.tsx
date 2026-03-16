import { useCallback } from 'react';
import { useGameStore } from '../stores/gameStore';
import Terminal from './Terminal';
import CommandInput from './CommandInput';
import StatusBar from './StatusBar';
import MiniMap from './MiniMap';
import Inventory from './Inventory';
import PartyPanel from './PartyPanel';
import SkillBar from './SkillBar';

interface GameScreenProps {
  onCommand: (command: string) => void;
}

export default function GameScreen({ onCommand }: GameScreenProps) {
  const connection = useGameStore((s) => s.connection);
  const showInventory = useGameStore((s) => s.showInventory);
  const showParty = useGameStore((s) => s.showParty);
  const toggleInventory = useGameStore((s) => s.toggleInventory);
  const toggleParty = useGameStore((s) => s.toggleParty);
  const inCombat = useGameStore((s) => s.inCombat);

  const handleUseSkill = useCallback(
    (skillId: string) => {
      onCommand(`skill ${skillId}`);
    },
    [onCommand],
  );

  return (
    <div className="h-full flex flex-col bg-bg-primary scanline">
      {/* Top: Status bar */}
      <StatusBar />

      {/* Middle: main area */}
      <div className="flex-1 flex min-h-0">
        {/* Left sidebar: minimap */}
        <div className="w-44 shrink-0 flex flex-col gap-2 p-2 border-r border-border-dim overflow-y-auto">
          <MiniMap />

          {/* Quick action buttons */}
          <div className="space-y-1">
            <div className="text-[10px] text-text-dim uppercase tracking-wider px-1">
              快捷操作
            </div>

            <QuickButton label="背包" shortcut="I" active={showInventory} onClick={toggleInventory} />
            <QuickButton label="隊伍" shortcut="P" active={showParty} onClick={toggleParty} />
            <QuickButton label="查看" onClick={() => onCommand('look')} />
            <QuickButton label="狀態" onClick={() => onCommand('status')} />
            <QuickButton label="地圖" onClick={() => onCommand('map')} />
            <QuickButton label="技能" onClick={() => onCommand('skills')} />
            {inCombat && (
              <>
                <div className="border-t border-border-dim my-1" />
                <QuickButton label="攻擊" onClick={() => onCommand('attack')} highlight />
                <QuickButton label="防禦" onClick={() => onCommand('defend')} />
                <QuickButton label="逃跑" onClick={() => onCommand('flee')} />
              </>
            )}
          </div>

          {/* Connection indicator */}
          <div className="mt-auto px-1 flex items-center gap-1 text-[10px]">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                connection === 'connected'
                  ? 'bg-text-terminal'
                  : connection === 'connecting'
                    ? 'bg-text-amber animate-pulse'
                    : 'bg-combat-damage'
              }`}
            />
            <span className="text-text-dim">
              {connection === 'connected' ? '已連線' : connection === 'connecting' ? '連線中' : '斷線'}
            </span>
          </div>
        </div>

        {/* Center: Terminal */}
        <div className="flex-1 flex flex-col min-w-0">
          <Terminal />
          <SkillBar onUseSkill={handleUseSkill} />
          <CommandInput onSubmit={onCommand} />
        </div>

        {/* Right sidebar: Inventory / Party panels */}
        <Inventory />
        <PartyPanel />
      </div>
    </div>
  );
}

/* Reusable quick button */
function QuickButton({
  label,
  shortcut,
  active,
  highlight,
  onClick,
}: {
  label: string;
  shortcut?: string;
  active?: boolean;
  highlight?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-2 py-1 text-xs rounded border cursor-pointer
        transition-colors flex items-center justify-between
        ${
          active
            ? 'border-border-glow/40 bg-border-glow/10 text-text-terminal'
            : highlight
              ? 'border-combat-damage/40 bg-combat-damage/10 text-combat-damage hover:bg-combat-damage/20'
              : 'border-border-dim/50 bg-bg-primary/30 text-text-dim hover:bg-bg-tertiary hover:text-text-bright'
        }
      `}
    >
      <span>{label}</span>
      {shortcut && <span className="text-[10px] text-text-dim">{shortcut}</span>}
    </button>
  );
}
