import { useCallback, useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { ChatChannel } from '../stores/gameStore';
import Terminal from './Terminal';
import CommandInput from './CommandInput';
import StatusBar from './StatusBar';
import MiniMap from './MiniMap';
import Inventory from './Inventory';
import PartyPanel from './PartyPanel';
import SkillBar from './SkillBar';
import ShopModal from './ShopModal';
import AgentPanel from './AgentPanel';
import AgentMiniBadge from './AgentMiniBadge';
import AgentSelectModal from './AgentSelectModal';
import QuestLog from './QuestLog';
import CharacterSheet from './CharacterSheet';
import ItemTooltip from './ItemTooltip';
import ChatPanel from './ChatPanel';
import LeaderboardPanel from './LeaderboardPanel';
import WorldMap from './WorldMap';
import AudioSettings from './AudioSettings';

interface GameScreenProps {
  onCommand: (command: string) => void;
  onOpenShop: () => void;
  onPurchase: (itemId: string) => void;
  onGetTransactions: () => void;
  onSendChat: (channel: ChatChannel, message: string) => void;
}

export default function GameScreen({ onCommand, onOpenShop, onPurchase, onGetTransactions, onSendChat }: GameScreenProps) {
  const connection = useGameStore((s) => s.connection);
  const showInventory = useGameStore((s) => s.showInventory);
  const showParty = useGameStore((s) => s.showParty);
  const toggleInventory = useGameStore((s) => s.toggleInventory);
  const toggleParty = useGameStore((s) => s.toggleParty);
  const inCombat = useGameStore((s) => s.inCombat);
  const shopOpen = useGameStore((s) => s.shopOpen);
  const selectedAgent = useGameStore((s) => s.selectedAgent);
  const agentPanelOpen = useGameStore((s) => s.agentPanelOpen);
  const toggleAgentPanel = useGameStore((s) => s.toggleAgentPanel);
  const setShowAgentSelect = useGameStore((s) => s.setShowAgentSelect);
  const accessToken = useGameStore((s) => s.accessToken);
  const toggleQuestLog = useGameStore((s) => s.toggleQuestLog);
  const questLogOpen = useGameStore((s) => s.questLogOpen);
  const toggleCharacterSheet = useGameStore((s) => s.toggleCharacterSheet);
  const characterSheetOpen = useGameStore((s) => s.characterSheetOpen);
  const toggleChatPanel = useGameStore((s) => s.toggleChatPanel);
  const chatPanelOpen = useGameStore((s) => s.chatPanelOpen);
  const toggleLeaderboard = useGameStore((s) => s.toggleLeaderboard);
  const leaderboardOpen = useGameStore((s) => s.leaderboardOpen);
  const toggleWorldMap = useGameStore((s) => s.toggleWorldMap);
  const worldMapOpen = useGameStore((s) => s.worldMapOpen);

  // Keyboard shortcut: 'B' to open shop + custom event from StatusBar badge
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      // WASD movement
      if (e.key === 'w' || e.key === 'W') { onCommand('go north'); return; }
      if (e.key === 'a' || e.key === 'A') { onCommand('go west'); return; }
      if (e.key === 's' || e.key === 'S') { onCommand('go south'); return; }
      if (e.key === 'd' || e.key === 'D') { onCommand('go east'); return; }
      // UI panels
      if (e.key === 'b' || e.key === 'B') {
        if (!shopOpen) {
          onOpenShop();
        }
      }
      if (e.key === 'q' || e.key === 'Q') {
        toggleQuestLog();
      }
      if (e.key === 'c' || e.key === 'C') {
        toggleCharacterSheet();
      }
      if (e.key === 'l' || e.key === 'L') {
        toggleLeaderboard();
      }
      if (e.key === 'm' || e.key === 'M') {
        toggleWorldMap();
      }
      if (e.key === 'j' || e.key === 'J') {
        if (selectedAgent) {
          toggleAgentPanel();
        } else if (accessToken) {
          setShowAgentSelect(true);
        }
      }
    };
    const handleOpenShopEvent = () => {
      if (!shopOpen) onOpenShop();
    };
    const handleTerminalCommand = (e: Event) => {
      const cmd = (e as CustomEvent).detail as string;
      if (cmd) onCommand(cmd);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-shop', handleOpenShopEvent);
    window.addEventListener('terminal-command', handleTerminalCommand);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-shop', handleOpenShopEvent);
      window.removeEventListener('terminal-command', handleTerminalCommand);
    };
  }, [shopOpen, onOpenShop, onCommand, selectedAgent, toggleAgentPanel, accessToken, setShowAgentSelect, toggleQuestLog, toggleCharacterSheet, toggleLeaderboard, toggleWorldMap]);

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
            <QuickButton label="任務" shortcut="Q" active={questLogOpen} onClick={toggleQuestLog} />
            <QuickButton label="角色" shortcut="C" active={characterSheetOpen} onClick={toggleCharacterSheet} />
            <QuickButton label="聊天" active={chatPanelOpen} onClick={toggleChatPanel} />
            <QuickButton label="排行榜" shortcut="L" active={leaderboardOpen} onClick={toggleLeaderboard} />
            <QuickButton label="世界地圖" shortcut="M" active={worldMapOpen} onClick={toggleWorldMap} />
            <QuickButton label="商店" shortcut="B" onClick={onOpenShop} />
            {selectedAgent ? (
              <QuickButton label="AI夥伴" shortcut="J" active={agentPanelOpen} onClick={toggleAgentPanel} />
            ) : accessToken ? (
              <QuickButton label="AI夥伴" shortcut="J" onClick={() => setShowAgentSelect(true)} />
            ) : null}
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
        <div className="flex-1 flex flex-col min-w-0 relative">
          <Terminal />
          <SkillBar onUseSkill={handleUseSkill} />
          <CommandInput onSubmit={onCommand} />
          <AgentMiniBadge />
        </div>

        {/* Right sidebar: Inventory / Party / Chat / Agent panels */}
        {!agentPanelOpen && <Inventory />}
        {!agentPanelOpen && <PartyPanel />}
        {!agentPanelOpen && <ChatPanel onSendChat={onSendChat} />}
        <AgentPanel />
      </div>

      {/* Modals / Overlays */}
      <ShopModal onPurchase={onPurchase} onGetTransactions={onGetTransactions} />
      <AgentSelectModal />
      <QuestLog />
      <CharacterSheet />
      <LeaderboardPanel />
      <WorldMap />
      <AudioSettings />
      <ItemTooltip />
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
