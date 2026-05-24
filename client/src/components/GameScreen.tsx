import { useCallback, useEffect, useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { ChatChannel } from '../stores/gameStore';
import { SKILL_DEFS } from '@game/shared';
import Terminal from './Terminal';
import CommandInput from './CommandInput';
import StatusBar from './StatusBar';
import MiniMap from './MiniMap';
import RoomImage from './RoomImage';
import RoomPanel from './RoomPanel';
import SelectedTargetPanel from './SelectedTargetPanel';
import CombatPanel from './CombatPanel';
import Inventory from './Inventory';
import PartyPanel from './PartyPanel';
import SkillBar from './SkillBar';
import ShopModal from './ShopModal';
import QuestLog from './QuestLog';
import CharacterSheet from './CharacterSheet';
import ItemTooltip from './ItemTooltip';
import ChatPanel from './ChatPanel';
import LeaderboardPanel from './LeaderboardPanel';
import WorldMap from './WorldMap';
import AudioSettings from './AudioSettings';
import NpcDialogueModal from './NpcDialogueModal';
import SkillLearnedModal from './SkillLearnedModal';
import DeathNoticeModal from './DeathNoticeModal';

interface GameScreenProps {
  onCommand: (command: string, friendlyEcho?: string) => void;
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
  const selectedCombatTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const selectedCrossRoomDirection = useGameStore((s) => s.selectedCrossRoomDirection);
  const selectedEntity = useGameStore((s) => s.selectedEntity);
  const character = useGameStore((s) => s.character);
  const addTerminalLine = useGameStore((s) => s.addTerminalLine);
  const [pendingTargetSkillId, setPendingTargetSkillId] = useState<string | null>(null);

  const openWorldMap = useCallback(() => {
    if (!worldMapOpen) {
      onCommand('map');
    }
    toggleWorldMap();
  }, [onCommand, toggleWorldMap, worldMapOpen]);

  const toggleInventoryPanel = useCallback(() => {
    if (!showInventory) {
      onCommand('inventory');
    }
    toggleInventory();
  }, [onCommand, showInventory, toggleInventory]);

  // Keyboard shortcut: 'B' to open shop + custom event from StatusBar badge
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.target instanceof HTMLElement && e.target.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      // WASD movement
      if (e.key === 'w' || e.key === 'W') { onCommand('go north', '前往北方'); return; }
      if (e.key === 'a' || e.key === 'A') { onCommand('go west', '前往西方'); return; }
      if (e.key === 's' || e.key === 'S') { onCommand('go south', '前往南方'); return; }
      if (e.key === 'd' || e.key === 'D') { onCommand('go east', '前往東方'); return; }
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
        openWorldMap();
      }
    };
    const handleOpenShopEvent = () => {
      if (!shopOpen) onOpenShop();
    };
    const handleTerminalCommand = (e: Event) => {
      const detail = (e as CustomEvent).detail as string | { command: string; echo?: string };
      if (typeof detail === 'string') {
        if (detail) onCommand(detail);
        return;
      }
      if (detail?.command) onCommand(detail.command, detail.echo);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-shop', handleOpenShopEvent);
    window.addEventListener('terminal-command', handleTerminalCommand);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-shop', handleOpenShopEvent);
      window.removeEventListener('terminal-command', handleTerminalCommand);
    };
  }, [shopOpen, onOpenShop, onCommand, toggleQuestLog, toggleCharacterSheet, toggleLeaderboard, openWorldMap]);

  const handleUseSkill = useCallback(
    (skillId: string) => {
      const def = SKILL_DEFS[skillId];
      if (!def) {
        onCommand(`skill ${skillId}`, `使用技能 ${skillId}`);
        return;
      }
      const isFourWay = def?.special?.areaScope === 'adjacent_cardinal';
      const needsDirection = Boolean(def?.special?.crossRoom || def?.special?.crossRoomRequiresScout);
      const selectedRoomMonsterId = selectedEntity?.type === 'monster' ? selectedEntity.id : null;
      let suffix = '';

      if (isFourWay) {
        suffix = '';
      } else if (needsDirection) {
        if (!selectedCrossRoomDirection) {
          setPendingTargetSkillId(skillId);
          addTerminalLine(`請先在周邊戰鬥選擇「${def.name}」的方向。`, 'system');
          return;
        }
        suffix = ` direction:${selectedCrossRoomDirection}`;
      } else if (def.targetType === 'single_enemy') {
        const targetId = inCombat ? selectedCombatTargetId : selectedRoomMonsterId;
        if (!targetId) {
          setPendingTargetSkillId(skillId);
          addTerminalLine(`請先選擇「${def.name}」的怪物目標。`, 'system');
          return;
        }
        suffix = ` ${targetId}`;
      } else if (def.targetType === 'single_ally') {
        suffix = character?.id ? ` ${character.id}` : '';
      }

      setPendingTargetSkillId(null);
      onCommand(`skill ${skillId}${suffix}`, `使用技能 ${def.name}`);
    },
    [addTerminalLine, character?.id, inCombat, onCommand, selectedCombatTargetId, selectedCrossRoomDirection, selectedEntity],
  );

  return (
    <div className="h-full flex flex-col bg-bg-primary scanline">
      {/* Top: Status bar */}
      <StatusBar />

      {/* Middle: A/B/C/D workspace */}
      <div className="game-main flex-1 min-h-0">
        {/* A: quick actions */}
        <div className="game-left flex flex-col gap-2 p-2 border-r border-border-dim overflow-y-auto">
          <MiniMap />

          <div className="space-y-1">
            <div className="text-[10px] text-text-dim uppercase tracking-wider px-1">
              快捷操作
            </div>

            <QuickButton label="背包" shortcut="I" active={showInventory} onClick={toggleInventoryPanel} />
            <QuickButton label="隊伍" shortcut="P" active={showParty} onClick={toggleParty} />
            <QuickButton label="任務" shortcut="Q" active={questLogOpen} onClick={toggleQuestLog} />
            <QuickButton label="角色" shortcut="C" active={characterSheetOpen} onClick={toggleCharacterSheet} />
            <QuickButton label="聊天" active={chatPanelOpen} onClick={toggleChatPanel} />
            <QuickButton label="排行榜" shortcut="L" active={leaderboardOpen} onClick={toggleLeaderboard} />
            <QuickButton label="世界地圖" shortcut="M" active={worldMapOpen} onClick={openWorldMap} />
            <QuickButton label="商店" shortcut="B" onClick={onOpenShop} />
            <QuickButton label="查看" onClick={() => onCommand('look', '查看四周')} />
            <QuickButton label="狀態" onClick={() => onCommand('status', '查看狀態')} />
            <QuickButton label="地圖" onClick={() => onCommand('map', '查看地圖')} />
            <QuickButton label="技能" onClick={() => onCommand('skills', '查看技能')} />
            {inCombat && (
              <>
                <div className="border-t border-border-dim my-1" />
                <QuickButton label="攻擊" onClick={() => onCommand('attack', '攻擊目前目標')} highlight />
                <QuickButton label="防禦" onClick={() => onCommand('defend', '防禦')} />
                <QuickButton label="逃跑" onClick={() => onCommand('flee', '逃跑')} />
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

        {/* B: scene image */}
        <div className="game-image min-w-0 bg-bg-secondary border-r border-border-dim overflow-y-auto">
          <RoomImage />
        </div>

        {/* C: operation area */}
        <div className="game-actions flex flex-col bg-bg-secondary border-r border-border-dim min-h-0">
          <div className="game-actions-scroll flex-1 min-h-0 overflow-y-auto">
            <CombatPanel />
            <SkillBar onUseSkill={handleUseSkill} pendingTargetSkillId={pendingTargetSkillId} />
            <RoomPanel />
            <SelectedTargetPanel />
            <ChatPanel onSendChat={onSendChat} />
          </div>
        </div>

        {/* D: text area */}
        <div className="game-center flex flex-col min-w-0 relative">
          <Terminal />
          <CommandInput onSubmit={onCommand} />
        </div>
      </div>

      {/* Modals / Overlays */}
      <Inventory />
      <PartyPanel />
      <ShopModal onPurchase={onPurchase} onGetTransactions={onGetTransactions} />
      <QuestLog />
      <CharacterSheet />
      <LeaderboardPanel />
      <WorldMap />
      <AudioSettings />
      <NpcDialogueModal />
      <SkillLearnedModal />
      <DeathNoticeModal />
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
