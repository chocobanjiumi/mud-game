import { create } from 'zustand';
import type {
  Character,
  EquipmentSlots,
  InventoryItem,
  CombatantState,
  LearnedSkill,
  ActiveStatusEffect,
  RoomExit,
} from '@game/shared';

// --- Terminal line ---

export interface TerminalLine {
  id: number;
  text: string;
  color?: string;
  timestamp: number;
}

// --- Party member ---

export interface PartyMember {
  id: string;
  name: string;
  classId: string;
  level: number;
  hp: number;
  maxHp: number;
}

// --- Chat message ---

export interface ChatMessage {
  id: number;
  senderId: string;
  senderName: string;
  message: string;
  channel: 'room' | 'party' | 'global';
  timestamp: number;
}

// --- Room info ---

export interface RoomInfo {
  id: string;
  name: string;
  description: string;
  exits: RoomExit[];
  players: { id: string; name: string; classId: string; level: number }[];
  npcs: { id: string; name: string; title: string }[];
  items: { id: string; name: string }[];
  monsters: { id: string; name: string; level: number; hp: number; maxHp: number }[];
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
}

// --- Connection state ---

export type ConnectionState = 'disconnected' | 'connecting' | 'connected';

// --- Screen state ---

export type Screen = 'login' | 'game';

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
  derivedStats: DerivedStats | null;
  setDerivedStats: (stats: DerivedStats | null) => void;
  expToNext: number;
  setExpToNext: (exp: number) => void;
  activeEffects: ActiveStatusEffect[];
  setActiveEffects: (effects: ActiveStatusEffect[]) => void;

  // Room
  room: RoomInfo | null;
  setRoom: (room: RoomInfo | null) => void;

  // Combat
  combat: CombatInfo | null;
  setCombat: (combat: CombatInfo | null) => void;
  inCombat: boolean;
  setInCombat: (inCombat: boolean) => void;

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
  addTerminalLine: (text: string, color?: string) => void;
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
  derivedStats: null,
  setDerivedStats: (derivedStats) => set({ derivedStats }),
  expToNext: 0,
  setExpToNext: (expToNext) => set({ expToNext }),
  activeEffects: [],
  setActiveEffects: (activeEffects) => set({ activeEffects }),

  // Room
  room: null,
  setRoom: (room) => set({ room }),

  // Combat
  combat: null,
  setCombat: (combat) => set({ combat }),
  inCombat: false,
  setInCombat: (inCombat) => set({ inCombat }),

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
  addTerminalLine: (text, color) =>
    set((state) => {
      const newLine: TerminalLine = {
        id: ++_lineIdCounter,
        text,
        color,
        timestamp: Date.now(),
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
}));
