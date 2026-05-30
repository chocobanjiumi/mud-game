import type { StateCreator } from 'zustand';
import { loadAudioSettings } from '../../audio/AudioManager';
import type {
  AgentMessage,
  ChatMessage,
  GameState,
  TerminalLine,
} from '../gameTypes';

type GameSlice = StateCreator<GameState, [], [], Partial<GameState>>;

let lineIdCounter = 0;
let chatIdCounter = 0;

const MAX_TERMINAL_LINES = 500;
const initialAudioSettings = loadAudioSettings();

export const createSessionSlice: GameSlice = (set) => ({
  connection: 'disconnected',
  setConnection: (connection) => set({ connection }),

  screen: 'login',
  setScreen: (screen) => set({ screen }),

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
      pendingPartyInvite: null,
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

  inventory: [],
  setInventory: (inventory) => set({ inventory }),
  equipment: null,
  setEquipment: (equipment) => set({ equipment }),
  inventoryCapacity: 20,
  setInventoryCapacity: (inventoryCapacity) => set({ inventoryCapacity }),
  gold: 0,
  setGold: (gold) => set({ gold }),

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

  party: [],
  setParty: (party) => set({ party }),
  partyLeaderId: null,
  setPartyLeaderId: (partyLeaderId) => set({ partyLeaderId }),
  pendingPartyInvite: null,
  setPendingPartyInvite: (pendingPartyInvite) => set({ pendingPartyInvite }),
});

export const createWorldSlice: GameSlice = (set) => ({
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

  mapData: null,
  setMapData: (mapData) => set({ mapData }),

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
});

export const createTerminalChatSlice: GameSlice = (set) => ({
  chatMessages: [],
  addChatMessage: (msg) =>
    set((state) => ({
      chatMessages: [
        ...state.chatMessages.slice(-99),
        { ...msg, id: ++chatIdCounter, timestamp: Date.now() },
      ],
    })),

  terminalLines: [],
  addTerminalLine: (text, color, entities) =>
    set((state) => {
      const newLine: TerminalLine = {
        id: ++lineIdCounter,
        text,
        color,
        timestamp: Date.now(),
        entities,
      };
      const lines = [...state.terminalLines, newLine];
      return { terminalLines: lines.slice(-MAX_TERMINAL_LINES) };
    }),
  clearTerminal: () => set({ terminalLines: [] }),

  chatChannel: 'room',
  setChatChannel: (chatChannel) => set({ chatChannel }),
  chatMessagesByChannel: { room: [], party: [], global: [], kingdom: [] },
  addChatMessageToChannel: (msg) =>
    set((state) => {
      const channel = msg.channel;
      const newMsg: ChatMessage = { ...msg, id: ++chatIdCounter, timestamp: Date.now() };
      const channelMsgs = [...(state.chatMessagesByChannel[channel] ?? []).slice(-199), newMsg];
      const isCurrentChannel = state.chatChannel === channel;
      return {
        chatMessagesByChannel: { ...state.chatMessagesByChannel, [channel]: channelMsgs },
        chatUnreadCounts: isCurrentChannel
          ? state.chatUnreadCounts
          : { ...state.chatUnreadCounts, [channel]: (state.chatUnreadCounts[channel] ?? 0) + 1 },
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
});

export const createUiSlice: GameSlice = (set, get) => ({
  showInventory: false,
  toggleInventory: () => set((state) => ({ showInventory: !state.showInventory })),
  showParty: false,
  toggleParty: () => set((state) => ({ showParty: !state.showParty })),

  commandHandler: null,
  setCommandHandler: (commandHandler) => set({ commandHandler }),
  runCommand: (command, friendlyEcho) => {
    get().commandHandler?.(command, friendlyEcho);
  },
  openShopHandler: null,
  setOpenShopHandler: (openShopHandler) => set({ openShopHandler }),
  requestOpenShop: () => {
    get().openShopHandler?.();
  },
  leaderboardHandler: null,
  setLeaderboardHandler: (leaderboardHandler) => set({ leaderboardHandler }),
  requestLeaderboard: (category) => {
    get().leaderboardHandler?.(category);
  },

  arinovaUser: null,
  setArinovaUser: (arinovaUser) => set({ arinovaUser }),
  arinovaTokenBalance: null,
  setArinovaTokenBalance: (arinovaTokenBalance) => set({ arinovaTokenBalance }),

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

  questLogOpen: false,
  setQuestLogOpen: (questLogOpen) => set({ questLogOpen }),
  toggleQuestLog: () => set((state) => ({ questLogOpen: !state.questLogOpen })),
  activeQuests: [],
  setActiveQuests: (activeQuests) => set({ activeQuests }),

  characterSheetOpen: false,
  setCharacterSheetOpen: (characterSheetOpen) => set({ characterSheetOpen }),
  toggleCharacterSheet: () => set((state) => ({ characterSheetOpen: !state.characterSheetOpen })),

  tooltipItem: null,
  setTooltipItem: (tooltipItem) => set({ tooltipItem }),
  tooltipPosition: { x: 0, y: 0 },
  setTooltipPosition: (tooltipPosition) => set({ tooltipPosition }),

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

  audioEnabled: initialAudioSettings.enabled,
  setAudioEnabled: (audioEnabled) => set({ audioEnabled }),
  audioVolumes: initialAudioSettings.volumes,
  setAudioVolumes: (audioVolumes) => set({ audioVolumes }),
  audioSettingsOpen: false,
  setAudioSettingsOpen: (audioSettingsOpen) => set({ audioSettingsOpen }),

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
});
