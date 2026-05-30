import type {
  Character,
  EquipmentSlots,
  InventoryItem,
  CombatantState,
  CombatAttackMode,
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
  PartyInvitePayload,
} from '@game/shared';

import type { SoundCategory } from '../audio/AudioManager';


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

export type PartyInvite = Extract<PartyInvitePayload, { status: 'pending' }>;

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
  zoneName?: string;
  name: string;
  description: string;
  image?: string;
  localMap?: LocalMapPayload;
  exits: RoomExit[];
  players: NonNullable<RoomEntity['playerDetails']>[];
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
    npcId?: string;
    name: string;
    description: string;
    minLevel?: number;
    maxPartySize?: number;
    cooldownSeconds?: number;
    disabled?: boolean;
    disabledReason?: string;
    actionCommand?: string;
    requiredItemId?: string;
    consumeItem?: boolean;
    requiredQuestId?: string;
    requiredQuestState?: 'available' | 'active' | 'ready' | 'completed';
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
  preferredAttackModes?: Record<string, CombatAttackMode>;
}

// --- Derived stats ---

export interface DerivedStats {
  atk: number;
  meleeAtk: number;
  rangedAtk: number;
  matk: number;
  spellPower: number;
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

export type CommandHandler = (command: string, friendlyEcho?: string) => void;
export type OpenShopHandler = () => void;
export type LeaderboardHandler = (category: LeaderboardTab) => void;

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
  pendingPartyInvite: PartyInvite | null;
  setPendingPartyInvite: (invite: PartyInvite | null) => void;

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

  // UI action bridge
  commandHandler: CommandHandler | null;
  setCommandHandler: (handler: CommandHandler | null) => void;
  runCommand: (command: string, friendlyEcho?: string) => void;
  openShopHandler: OpenShopHandler | null;
  setOpenShopHandler: (handler: OpenShopHandler | null) => void;
  requestOpenShop: () => void;
  leaderboardHandler: LeaderboardHandler | null;
  setLeaderboardHandler: (handler: LeaderboardHandler | null) => void;
  requestLeaderboard: (category: LeaderboardTab) => void;

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

