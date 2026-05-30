import { create } from 'zustand';
import {
  createSessionSlice,
  createTerminalChatSlice,
  createUiSlice,
  createWorldSlice,
} from './slices/gameSlices';
import type { GameState } from './gameTypes';

export type {
  ChatChannel,
  ChatMessage,
  CombatInfo,
  ConnectionState,
  DeathNotice,
  DerivedStats,
  EntityType,
  GameState,
  LeaderboardData,
  LeaderboardTab,
  MapData,
  PartyInvite,
  PartyMember,
  Quest,
  QuestCategory,
  QuestStatus,
  QuestStep,
  RoomInfo,
  Screen,
  SkillLearnedNotice,
  TerminalEntity,
  TerminalLine,
  TooltipItemData,
} from './gameTypes';

export const useGameStore = create<GameState>((...args) => ({
  ...createSessionSlice(...args),
  ...createWorldSlice(...args),
  ...createTerminalChatSlice(...args),
  ...createUiSlice(...args),
} as GameState));
