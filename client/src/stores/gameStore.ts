import { create } from 'zustand';
import type {
  Character,
  EquipmentSlots,
  InventoryItem,
  CombatantState,
  LearnedSkill,
  ActiveStatusEffect,
  RoomExit,
  ShopItem,
  ShopCategory,
  TransactionRecord,
  AgentInfo,
  AgentMessage,
  RoomEntity,
  AffixDef,
  ItemQuality,
  ItemRarity,
  ItemStats,
  LeaderboardEntry,
  ZoneType,
  PvpMode,
  DeathPenalty,
  DeathNoticePayload,
  LocalMapPayload,
  WorldMapPayload,
  NpcDialoguePayload,
  NearbyCombatPayload,
  CharacterListItemPayload,
  CardinalDirection,
  SkillPointSummary,
} from '@game/shared';

import { loadAudioSettings } from '../audio/AudioManager';
import type { SoundCategory } from '../audio/AudioManager';

const initialAudioSettings = loadAudioSettings();

// --- Terminal line ---

export type EntityType = 'npc' | 'monster' | 'player' | 'action';

export interface TerminalEntity {
  name: string;       // 顯示名稱（含 alias）
  entityType: EntityType;
  alias?: string;     // 英文簡稱
  npcType?: string;   // NPC 子類型 (merchant, etc.)
  cmdName: string;    // 用於指令的名稱（中文名）
  commandTarget?: string; // 唯一指令目標（例如 instanceId）
  actionCommand?: string; // 點擊後直接執行的指令
}

export interface TerminalLine {
  id: number;
  text: string;
  color?: string;
  timestamp: number;
  entities?: TerminalEntity[];
}

// --- Party member ---

export interface PartyMember {
  id: string;
  name: string;
  classId: string;
  level: number;
  hp: number;
  maxHp: number;
  activeMountId?: string | null;
  mounted?: boolean;
}

// --- Chat message ---

export type ChatChannel = 'room' | 'party' | 'global' | 'kingdom';

export interface ChatMessage {
  id: number;
  senderId: string;
  senderName: string;
  message: string;
  channel: ChatChannel;
  timestamp: number;
}

// --- Quest ---

export type QuestCategory = 'main' | 'side' | 'daily' | 'weekly' | 'exploration' | 'boss' | 'crafting';
export type QuestStatus = 'active' | 'completed' | 'failed';

export interface QuestStep {
  description: string;
  current: number;
  target: number;
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  category: QuestCategory;
  status: QuestStatus;
  steps: QuestStep[];
  currentStep: number;
  nextNpcId?: string;
  nextNpcName?: string;
  nextRoomId?: string;
  nextRoomName?: string;
  nextHint?: string;
  recommendedLevel?: number;
  rewardPreview?: {
    exp: number;
    gold: number;
    items?: { itemId: string; name: string; quantity: number }[];
    equipment?: string[];
  };
}

// --- Leaderboard ---

export type LeaderboardTab = 'level' | 'pvp' | 'dungeon_speed';

export type LeaderboardData = Record<LeaderboardTab, LeaderboardEntry[]>;

// --- Tooltip item ---

export interface TooltipItemData {
  id: string;
  name: string;
  description: string;
  rarity: ItemRarity;
  quality?: ItemQuality;
  itemLevel?: number;
  droppedBy?: string;
  droppedInZone?: string;
  affixes?: AffixDef[];
  fixedEffects?: string[];
  levelReq: number;
  stats?: ItemStats;
  setName?: string;
  equipSlot?: string;
  type?: string;
  sourceTags?: string[];
  bound?: boolean;
}

export interface SkillLearnedNotice {
  skillId: string;
  name: string;
  description: string;
  learnLevel: number;
  skillType: 'active' | 'passive';
  usageContext: 'combat' | 'field' | 'both';
  targetType: string;
  resourceCost: number;
  cooldown: number;
  iconPath?: string;
}

export type DeathNotice = DeathNoticePayload;

// --- Room info ---

export interface RoomInfo {
  id: string;
  zone: string;
  name: string;
  description: string;
  image?: string;
  localMap?: LocalMapPayload;
  exits: RoomExit[];
  players: { id: string; name: string; classId: string; level: number }[];
  npcs: { id: string; name: string; alias: string; title: string; type: string }[];
  items: { id: string; name: string }[];
  monsters: { id: string; name: string; alias: string; label?: string; level: number; hp: number; maxHp: number; monsterDetails?: RoomEntity['monsterDetails'] }[];
  corpses?: { id: string; monsterName: string; label?: string; empty: boolean; protected: boolean; protectedUntil?: number }[];
  gatheringNodes?: { id: string; name: string; skill: string; levelMin: number }[];
  travelNodes?: { id: string; name: string; kind: string; unlocked: boolean }[];
  instanceEntries?: {
    id: string;
    instanceTemplateId: string;
    type: 'object_interact' | 'npc_dialogue' | 'item_use';
    objectId?: string;
    name: string;
    description: string;
    minLevel?: number;
    maxPartySize?: number;
    cooldownSeconds?: number;
    difficultyOptions?: string[];
  }[];
  inspectHints?: { label: string; command: string }[];
  entities?: RoomEntity[];
  nearbyCombat?: NearbyCombatPayload;
}

// --- Combat state ---

export interface CombatInfo {
  combatId: string;
  round: number;
  playerTeam: CombatantState[];
  enemyTeam: CombatantState[];
  turnTimer: number;
  log: string[];
  result?: 'victory' | 'defeat' | 'fled';
}

// --- Derived stats ---

export interface DerivedStats {
  atk: number;
  matk: number;
  def: number;
  mdef: number;
  hitRate: number;
  dodgeRate: number;
  critRate: number;
  critDamage: number;
}

// --- Map data ---

export interface MapData {
  ascii: string;
  currentRoom: string;
  zone: string;
  zoneName?: string;
  zoneType?: ZoneType;
  dangerLevel?: number;
  pvpMode?: PvpMode;
  deathPenalty?: DeathPenalty;
  localMap?: LocalMapPayload;
  exploration?: {
    visitedRooms: number;
    totalRooms: number;
    percent: number;
  };
  travelNodes?: { id: string; name: string; roomId: string; kind: string; unlocked: boolean }[];
  world?: WorldMapPayload;
}

// --- Connection state ---

export type ConnectionState = 'disconnected' | 'connecting' | 'connected';

// --- Screen state ---

export type Screen = 'login' | 'characters' | 'create' | 'game';

// --- Main store ---

let _lineIdCounter = 0;
let _chatIdCounter = 0;

const MAX_TERMINAL_LINES = 500;

export interface GameState {
  // Connection
  connection: ConnectionState;
  setConnection: (state: ConnectionState) => void;

  // Screen
  screen: Screen;
  setScreen: (screen: Screen) => void;

  // Character
  character: Character | null;
  setCharacter: (character: Character | null) => void;
  characterList: CharacterListItemPayload[];
  setCharacterList: (characters: CharacterListItemPayload[]) => void;
  clearGameSessionForCharacterSelect: () => void;
  derivedStats: DerivedStats | null;
  setDerivedStats: (stats: DerivedStats | null) => void;
  expToNext: number;
  setExpToNext: (exp: number) => void;
  activeEffects: ActiveStatusEffect[];
  setActiveEffects: (effects: ActiveStatusEffect[]) => void;

  // Room
  room: RoomInfo | null;
  setRoom: (room: RoomInfo | null) => void;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  npcDialogue: NpcDialoguePayload | null;
  setNpcDialogue: (dialogue: NpcDialoguePayload | null) => void;

  // Combat
  combat: CombatInfo | null;
  setCombat: (combat: CombatInfo | null) => void;
  inCombat: boolean;
  setInCombat: (inCombat: boolean) => void;
  selectedCombatTargetId: string | null;
  setSelectedCombatTargetId: (id: string | null) => void;
  selectedCrossRoomDirection: CardinalDirection | null;
  setSelectedCrossRoomDirection: (direction: CardinalDirection | null) => void;

  // Inventory
  inventory: InventoryItem[];
  setInventory: (items: InventoryItem[]) => void;
  equipment: EquipmentSlots | null;
  setEquipment: (equipment: EquipmentSlots | null) => void;
  inventoryCapacity: number;
  setInventoryCapacity: (capacity: number) => void;
  gold: number;
  setGold: (gold: number) => void;

  // Skills
  skills: LearnedSkill[];
  setSkills: (skills: LearnedSkill[]) => void;
  skillPoints: SkillPointSummary | null;
  setSkillPoints: (skillPoints: SkillPointSummary | null) => void;
  skillLearnedNotices: SkillLearnedNotice[];
  addSkillLearnedNotice: (notice: SkillLearnedNotice) => void;
  dismissSkillLearnedNotice: () => void;
  deathNotice: DeathNotice | null;
  setDeathNotice: (notice: DeathNotice | null) => void;
  aliases: Record<string, string>;
  setAliases: (aliases: Record<string, string>) => void;

  // Party
  party: PartyMember[];
  setParty: (members: PartyMember[]) => void;
  partyLeaderId: string | null;
  setPartyLeaderId: (id: string | null) => void;

  // Chat
  chatMessages: ChatMessage[];
  addChatMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;

  // Terminal
  terminalLines: TerminalLine[];
  addTerminalLine: (text: string, color?: string, entities?: TerminalEntity[]) => void;
  clearTerminal: () => void;

  // Map
  mapData: MapData | null;
  setMapData: (data: MapData | null) => void;

  // UI toggles
  showInventory: boolean;
  toggleInventory: () => void;
  showParty: boolean;
  toggleParty: () => void;

  // Arinova
  arinovaUser: { id: string; name: string } | null;
  setArinovaUser: (user: { id: string; name: string } | null) => void;
  arinovaTokenBalance: number | null;
  setArinovaTokenBalance: (balance: number | null) => void;

  // Agent
  selectedAgent: AgentInfo | null;
  setSelectedAgent: (agent: AgentInfo | null) => void;
  agentMessagesByAgent: Record<string, AgentMessage[]>;
  agentMessages: AgentMessage[];
  addAgentMessage: (msg: Omit<AgentMessage, 'timestamp'>) => void;
  removeLastAgentMessage: () => void;
  agentPanelOpen: boolean;
  setAgentPanelOpen: (open: boolean) => void;
  toggleAgentPanel: () => void;
  agentUnreadCount: number;
  setAgentUnreadCount: (count: number) => void;
  incrementAgentUnread: () => void;
  showAgentSelect: boolean;
  setShowAgentSelect: (show: boolean) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clearAgentState: () => void;

  // Quest Log
  questLogOpen: boolean;
  setQuestLogOpen: (open: boolean) => void;
  toggleQuestLog: () => void;
  activeQuests: Quest[];
  setActiveQuests: (quests: Quest[]) => void;

  // Character Sheet
  characterSheetOpen: boolean;
  setCharacterSheetOpen: (open: boolean) => void;
  toggleCharacterSheet: () => void;

  // Item Tooltip
  tooltipItem: TooltipItemData | null;
  setTooltipItem: (item: TooltipItemData | null) => void;
  tooltipPosition: { x: number; y: number };
  setTooltipPosition: (pos: { x: number; y: number }) => void;

  // Chat Panel
  chatChannel: ChatChannel;
  setChatChannel: (channel: ChatChannel) => void;
  chatMessagesByChannel: Record<ChatChannel, ChatMessage[]>;
  addChatMessageToChannel: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  chatUnreadCounts: Record<ChatChannel, number>;
  resetChatUnread: (channel: ChatChannel) => void;
  chatPanelOpen: boolean;
  setChatPanelOpen: (open: boolean) => void;
  toggleChatPanel: () => void;

  // Leaderboard
  leaderboardOpen: boolean;
  setLeaderboardOpen: (open: boolean) => void;
  toggleLeaderboard: () => void;
  leaderboardData: LeaderboardData;
  setLeaderboardData: (category: LeaderboardTab, entries: LeaderboardEntry[]) => void;
  leaderboardTab: LeaderboardTab;
  setLeaderboardTab: (tab: LeaderboardTab) => void;

  // World Map
  worldMapOpen: boolean;
  setWorldMapOpen: (open: boolean) => void;
  toggleWorldMap: () => void;
  exploredRooms: Set<string>;
  addExploredRoom: (roomId: string) => void;

  // Audio
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  audioVolumes: Record<SoundCategory, number>;
  setAudioVolumes: (volumes: Record<SoundCategory, number>) => void;
  audioSettingsOpen: boolean;
  setAudioSettingsOpen: (open: boolean) => void;

  // Shop
  shopOpen: boolean;
  setShopOpen: (open: boolean) => void;
  shopItems: ShopItem[];
  setShopItems: (items: ShopItem[]) => void;
  selectedItem: ShopItem | null;
  setSelectedItem: (item: ShopItem | null) => void;
  shopCategory: ShopCategory;
  setShopCategory: (category: ShopCategory) => void;
  transactionHistory: TransactionRecord[];
  setTransactionHistory: (history: TransactionRecord[]) => void;
  purchaseLoading: boolean;
  setPurchaseLoading: (loading: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  // Connection
  connection: 'disconnected',
  setConnection: (connection) => set({ connection }),

  // Screen
  screen: 'login',
  setScreen: (screen) => set({ screen }),

  // Character
  character: null,
  setCharacter: (character) => set({ character }),
  characterList: [],
  setCharacterList: (characterList) => set({ characterList }),
  clearGameSessionForCharacterSelect: () =>
    set({
      screen: 'characters',
      character: null,
      derivedStats: null,
      expToNext: 0,
      activeEffects: [],
      room: null,
      selectedEntity: null,
      npcDialogue: null,
      combat: null,
      inCombat: false,
      selectedCombatTargetId: null,
      selectedCrossRoomDirection: null,
      inventory: [],
      equipment: null,
      skills: [],
      skillPoints: null,
      aliases: {},
      party: [],
      partyLeaderId: null,
      mapData: null,
      showInventory: false,
      showParty: false,
      questLogOpen: false,
      characterSheetOpen: false,
      chatPanelOpen: false,
      leaderboardOpen: false,
      worldMapOpen: false,
      shopOpen: false,
      selectedItem: null,
      purchaseLoading: false,
      deathNotice: null,
    }),
  derivedStats: null,
  setDerivedStats: (derivedStats) => set({ derivedStats }),
  expToNext: 0,
  setExpToNext: (expToNext) => set({ expToNext }),
  activeEffects: [],
  setActiveEffects: (activeEffects) => set({ activeEffects }),

  // Room
  room: null,
  selectedEntity: null,
  npcDialogue: null,
  setRoom: (room) => set((state) => {
    const selectedEntity = room?.entities?.find((entity) => (
      state.selectedEntity
      && entity.id === state.selectedEntity.id
      && entity.type === state.selectedEntity.type
    ))
      ?? null;
    return { room, selectedEntity };
  }),
  setSelectedEntity: (selectedEntity) => set({ selectedEntity }),
  setNpcDialogue: (npcDialogue) => set({ npcDialogue }),

  // Combat
  combat: null,
  selectedCombatTargetId: null,
  selectedCrossRoomDirection: null,
  setCombat: (combat) => set((state) => {
    const selectedCombatTargetId = combat?.enemyTeam.some(enemy => (
      !enemy.isDead && enemy.id === state.selectedCombatTargetId
    ))
      ? state.selectedCombatTargetId
      : combat?.enemyTeam.find(enemy => !enemy.isDead)?.id ?? null;
    return { combat, selectedCombatTargetId };
  }),
  inCombat: false,
  setInCombat: (inCombat) => set((state) => ({
    inCombat,
    selectedEntity: inCombat ? null : state.selectedEntity,
    selectedCombatTargetId: inCombat ? state.selectedCombatTargetId : null,
  })),
  setSelectedCombatTargetId: (selectedCombatTargetId) => set({ selectedCombatTargetId }),
  setSelectedCrossRoomDirection: (selectedCrossRoomDirection) => set({ selectedCrossRoomDirection }),

  // Inventory
  inventory: [],
  setInventory: (inventory) => set({ inventory }),
  equipment: null,
  setEquipment: (equipment) => set({ equipment }),
  inventoryCapacity: 20,
  setInventoryCapacity: (inventoryCapacity) => set({ inventoryCapacity }),
  gold: 0,
  setGold: (gold) => set({ gold }),

  // Skills
  skills: [],
  setSkills: (skills) => set({ skills }),
  skillPoints: null,
  setSkillPoints: (skillPoints) => set({ skillPoints }),
  skillLearnedNotices: [],
  addSkillLearnedNotice: (notice) =>
    set((state) => ({ skillLearnedNotices: [...state.skillLearnedNotices, notice] })),
  dismissSkillLearnedNotice: () =>
    set((state) => ({ skillLearnedNotices: state.skillLearnedNotices.slice(1) })),
  deathNotice: null,
  setDeathNotice: (deathNotice) => set({ deathNotice }),
  aliases: {},
  setAliases: (aliases) => set({ aliases }),

  // Party
  party: [],
  setParty: (party) => set({ party }),
  partyLeaderId: null,
  setPartyLeaderId: (partyLeaderId) => set({ partyLeaderId }),

  // Chat
  chatMessages: [],
  addChatMessage: (msg) =>
    set((state) => ({
      chatMessages: [
        ...state.chatMessages.slice(-99),
        { ...msg, id: ++_chatIdCounter, timestamp: Date.now() },
      ],
    })),

  // Terminal
  terminalLines: [],
  addTerminalLine: (text, color, entities) =>
    set((state) => {
      const newLine: TerminalLine = {
        id: ++_lineIdCounter,
        text,
        color,
        timestamp: Date.now(),
        entities,
      };
      const lines = [...state.terminalLines, newLine];
      return { terminalLines: lines.slice(-MAX_TERMINAL_LINES) };
    }),
  clearTerminal: () => set({ terminalLines: [] }),

  // Map
  mapData: null,
  setMapData: (mapData) => set({ mapData }),

  // UI toggles
  showInventory: false,
  toggleInventory: () => set((state) => ({ showInventory: !state.showInventory })),
  showParty: false,
  toggleParty: () => set((state) => ({ showParty: !state.showParty })),

  // Arinova
  arinovaUser: null,
  setArinovaUser: (arinovaUser) => set({ arinovaUser }),
  arinovaTokenBalance: null,
  setArinovaTokenBalance: (arinovaTokenBalance) => set({ arinovaTokenBalance }),

  // Agent
  selectedAgent: null,
  setSelectedAgent: (selectedAgent) =>
    set((state) => ({
      selectedAgent,
      agentMessages: selectedAgent
        ? (state.agentMessagesByAgent[selectedAgent.id] ?? [])
        : [],
    })),
  agentMessagesByAgent: {},
  agentMessages: [],
  addAgentMessage: (msg) =>
    set((state) => {
      const agentId = state.selectedAgent?.id;
      if (!agentId) return {};
      const newMsg: AgentMessage = { ...msg, timestamp: Date.now() };
      const current = state.agentMessagesByAgent[agentId] ?? [];
      const updated = [...current, newMsg];
      return {
        agentMessagesByAgent: { ...state.agentMessagesByAgent, [agentId]: updated },
        agentMessages: updated,
      };
    }),
  removeLastAgentMessage: () =>
    set((state) => {
      const agentId = state.selectedAgent?.id;
      if (!agentId) return {};
      const current = state.agentMessagesByAgent[agentId] ?? [];
      if (current.length === 0) return {};
      const updated = current.slice(0, -1);
      return {
        agentMessagesByAgent: { ...state.agentMessagesByAgent, [agentId]: updated },
        agentMessages: updated,
      };
    }),
  agentPanelOpen: false,
  setAgentPanelOpen: (agentPanelOpen) => set({ agentPanelOpen }),
  toggleAgentPanel: () => set((state) => ({ agentPanelOpen: !state.agentPanelOpen })),
  agentUnreadCount: 0,
  setAgentUnreadCount: (agentUnreadCount) => set({ agentUnreadCount }),
  incrementAgentUnread: () => set((state) => ({ agentUnreadCount: state.agentUnreadCount + 1 })),
  showAgentSelect: false,
  setShowAgentSelect: (showAgentSelect) => set({ showAgentSelect }),
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  clearAgentState: () =>
    set({
      accessToken: null,
      selectedAgent: null,
      agentMessages: [],
      agentMessagesByAgent: {},
      agentPanelOpen: false,
      agentUnreadCount: 0,
      showAgentSelect: false,
    }),

  // Quest Log
  questLogOpen: false,
  setQuestLogOpen: (questLogOpen) => set({ questLogOpen }),
  toggleQuestLog: () => set((state) => ({ questLogOpen: !state.questLogOpen })),
  activeQuests: [],
  setActiveQuests: (activeQuests) => set({ activeQuests }),

  // Character Sheet
  characterSheetOpen: false,
  setCharacterSheetOpen: (characterSheetOpen) => set({ characterSheetOpen }),
  toggleCharacterSheet: () => set((state) => ({ characterSheetOpen: !state.characterSheetOpen })),

  // Item Tooltip
  tooltipItem: null,
  setTooltipItem: (tooltipItem) => set({ tooltipItem }),
  tooltipPosition: { x: 0, y: 0 },
  setTooltipPosition: (tooltipPosition) => set({ tooltipPosition }),

  // Chat Panel
  chatChannel: 'room',
  setChatChannel: (chatChannel) => set({ chatChannel }),
  chatMessagesByChannel: { room: [], party: [], global: [], kingdom: [] },
  addChatMessageToChannel: (msg) =>
    set((state) => {
      const ch = msg.channel;
      const newMsg: ChatMessage = { ...msg, id: ++_chatIdCounter, timestamp: Date.now() };
      const channelMsgs = [...(state.chatMessagesByChannel[ch] ?? []).slice(-199), newMsg];
      const isCurrentChannel = state.chatChannel === ch;
      return {
        chatMessagesByChannel: { ...state.chatMessagesByChannel, [ch]: channelMsgs },
        chatUnreadCounts: isCurrentChannel
          ? state.chatUnreadCounts
          : { ...state.chatUnreadCounts, [ch]: (state.chatUnreadCounts[ch] ?? 0) + 1 },
      };
    }),
  chatUnreadCounts: { room: 0, party: 0, global: 0, kingdom: 0 },
  resetChatUnread: (channel) =>
    set((state) => ({
      chatUnreadCounts: { ...state.chatUnreadCounts, [channel]: 0 },
    })),
  chatPanelOpen: false,
  setChatPanelOpen: (chatPanelOpen) => set({ chatPanelOpen }),
  toggleChatPanel: () => set((state) => ({ chatPanelOpen: !state.chatPanelOpen })),

  // Leaderboard
  leaderboardOpen: false,
  setLeaderboardOpen: (leaderboardOpen) => set({ leaderboardOpen }),
  toggleLeaderboard: () => set((state) => ({ leaderboardOpen: !state.leaderboardOpen })),
  leaderboardData: { level: [], pvp: [], dungeon_speed: [] },
  setLeaderboardData: (category, entries) =>
    set((state) => ({
      leaderboardData: { ...state.leaderboardData, [category]: entries },
    })),
  leaderboardTab: 'level',
  setLeaderboardTab: (leaderboardTab) => set({ leaderboardTab }),

  // World Map
  worldMapOpen: false,
  setWorldMapOpen: (worldMapOpen) => set({ worldMapOpen }),
  toggleWorldMap: () => set((state) => ({ worldMapOpen: !state.worldMapOpen })),
  exploredRooms: new Set<string>(),
  addExploredRoom: (roomId) =>
    set((state) => {
      const newSet = new Set(state.exploredRooms);
      newSet.add(roomId);
      return { exploredRooms: newSet };
    }),

  // Audio
  audioEnabled: initialAudioSettings.enabled,
  setAudioEnabled: (audioEnabled) => set({ audioEnabled }),
  audioVolumes: initialAudioSettings.volumes,
  setAudioVolumes: (audioVolumes) => set({ audioVolumes }),
  audioSettingsOpen: false,
  setAudioSettingsOpen: (audioSettingsOpen) => set({ audioSettingsOpen }),

  // Shop
  shopOpen: false,
  setShopOpen: (shopOpen) => set({ shopOpen }),
  shopItems: [],
  setShopItems: (shopItems) => set({ shopItems }),
  selectedItem: null,
  setSelectedItem: (selectedItem) => set({ selectedItem }),
  shopCategory: 'weapon',
  setShopCategory: (shopCategory) => set({ shopCategory }),
  transactionHistory: [],
  setTransactionHistory: (transactionHistory) => set({ transactionHistory }),
  purchaseLoading: false,
  setPurchaseLoading: (purchaseLoading) => set({ purchaseLoading }),
}));
