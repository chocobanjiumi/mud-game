// WebSocket 訊息協議

import type { Character, ClassId, EquipmentSlots } from './player.js';
import type { LearnedSkill } from './skill.js';
import type { CombatantState, CombatLoot, DamageResult } from './combat.js';
import type { SkillPointSummary } from '../systems/skill-upgrades.js';
import type { InventoryItem } from './item.js';
import type { DeathPenalty, PvpMode, RoomExit, ZoneType } from './world.js';
import type { Direction } from './world.js';
import type { ActiveStatusEffect } from './combat.js';
import type { CharacterOriginSelection } from './origin.js';

export interface CreateCharacterPayload extends CharacterOriginSelection {
  name: string;
  classId: Extract<ClassId, 'swordsman' | 'mage' | 'ranger' | 'priest'>;
}

// Client → Server
export type ClientMessage =
  | { type: 'command'; payload: string }
  | { type: 'login'; payload: { userId: string; characterId?: string; accessToken?: string } }
  | { type: 'list_characters' }
  | { type: 'create_character'; payload: CreateCharacterPayload }
  | { type: 'delete_character'; payload: { characterId: string; confirmName: string } }
  | { type: 'ping' }
  | { type: 'open_shop' }
  | { type: 'purchase'; payload: { itemId: string } }
  | { type: 'get_transactions' };

// Server → Client
export type ServerMessageType =
  | 'narrative' | 'combat' | 'system' | 'chat' | 'status'
  | 'room' | 'inventory' | 'party' | 'error' | 'pong'
  | 'login_success' | 'character_list' | 'combat_start'
  | 'combat_action' | 'combat_end' | 'level_up'
  | 'death_notice'
  | 'skill_learned' | 'class_change' | 'trade'
  | 'quest' | 'quest_update' | 'leaderboard' | 'leaderboard_data' | 'map' | 'token_balance'
  | 'npc_dialogue'
  | 'shop_items' | 'purchase_result' | 'transaction_history' | 'balance_update';

export interface ServerMessage {
  type: ServerMessageType;
  payload: Record<string, unknown>;
  timestamp: number;
}

export type CharacterListItemPayload = Pick<Character, 'id' | 'name' | 'level' | 'classId' | 'raceId' | 'genderId' | 'faithId' | 'hp' | 'maxHp' | 'roomId' | 'gold' | 'lastLogin'>;

export interface CharacterListPayload {
  characters: CharacterListItemPayload[];
  message: string;
}

// Specific server message payloads
export interface NarrativePayload {
  text: string;
  color?: string;
  entities?: {
    name: string;
    entityType: 'npc' | 'monster' | 'player' | 'action';
    alias?: string;
    npcType?: string;
    cmdName: string;
    commandTarget?: string;
    actionCommand?: string;
  }[];
}

export type InlineEntityPayload = NonNullable<NarrativePayload['entities']>[number];

export interface NpcDialogueOptionPayload {
  index: number;
  text: string;
  command: string;
}

export interface NpcDialogueShopItemPayload {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  rarity: string;
  levelReq: number;
  stats?: Record<string, number>;
  command: string;
}

export interface NpcDialoguePayload {
  npcId: string;
  npcName: string;
  npcTitle: string;
  npcType: string;
  nodeId: string;
  text: string;
  options: NpcDialogueOptionPayload[];
  shopItems?: NpcDialogueShopItemPayload[];
}

export type RoomEntityType = 'exit' | 'npc' | 'monster' | 'corpse' | 'gathering' | 'travel' | 'item' | 'player';

export interface RoomEntityAction {
  label: string;
  command: string;
  tone?: 'default' | 'danger' | 'primary';
  disabled?: boolean;
  reason?: string;
}

export interface RoomEntityMonsterDetails {
  monsterId: string;
  name: string;
  alias: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  element: string;
  aiType: string;
  behaviorType?: string;
  isBoss: boolean;
  isElite?: boolean;
  expReward: number;
  goldReward: [number, number];
  stats: {
    str: number;
    int: number;
    dex: number;
    vit: number;
    luk: number;
  };
  skills: string[];
  drops: { itemId: string; chance: number; minQty: number; maxQty: number }[];
  description: string;
}

export interface RoomEntity {
  id: string;
  type: RoomEntityType;
  label: string;
  subtitle?: string;
  hp?: number;
  maxHp?: number;
  monsterDetails?: RoomEntityMonsterDetails;
  actions: RoomEntityAction[];
}

export type CardinalDirection = Extract<Direction, 'north' | 'south' | 'east' | 'west'>;

export interface NearbyCombatMonsterPayload {
  id: string;
  monsterId: string;
  name: string;
  alias: string;
  label?: string;
  level: number;
  hp: number;
  maxHp: number;
  image?: string;
  threatTags: string[];
}

export interface NearbyCombatCurrentRoomPayload {
  roomId: string;
  roomName: string;
  monsters: NearbyCombatMonsterPayload[];
}

export interface NearbyCombatNeighborPayload {
  direction: CardinalDirection;
  passable: boolean;
  roomId?: string;
  roomName?: string;
  scouted: boolean;
  monsterCount: number;
  monsters?: NearbyCombatMonsterPayload[];
}

export interface ApproachingMonsterPayload {
  instanceId: string;
  monsterId: string;
  name: string;
  alias: string;
  sourceDirection: CardinalDirection;
  sourceRoomId: string;
  destinationRoomId: string;
  arrivalTicks: number;
  targetPlayerId?: string;
  targetPartyId?: string;
  hp: number;
  maxHp: number;
  image?: string;
}

export interface NearbyCombatPayload {
  current: NearbyCombatCurrentRoomPayload;
  neighbors: NearbyCombatNeighborPayload[];
  approaching: ApproachingMonsterPayload[];
}

export interface RoomPayload {
  id: string;
  zone: string;
  name: string;
  description: string;
  silent?: boolean;
  localMap?: LocalMapPayload;
  image?: string;
  exits: RoomExit[];
  players: { id: string; name: string; classId: string; level: number }[];
  npcs: { id: string; name: string; alias: string; title: string; type: string }[];
  items: { id: string; name: string }[];
  monsters: { id: string; name: string; alias: string; label?: string; level: number; hp: number; maxHp: number; monsterDetails?: RoomEntityMonsterDetails }[];
  corpses?: { id: string; monsterName: string; label?: string; empty: boolean; protected: boolean; protectedUntil?: number }[];
  gatheringNodes?: { id: string; name: string; skill: string; levelMin: number }[];
  travelNodes?: { id: string; name: string; kind: string; unlocked: boolean }[];
  inspectHints?: { label: string; command: string }[];
  entities?: RoomEntity[];
  nearbyCombat?: NearbyCombatPayload;
}

export interface LocalMapRoom {
  id: string;
  name: string;
  x: number;
  y: number;
  explored: boolean;
  exits: RoomExit[];
}

export interface LocalMapPayload {
  size: 5;
  currentRoom: string;
  rooms: LocalMapRoom[];
}

export interface StatusPayload {
  character: Character;
  derived: {
    atk: number;
    matk: number;
    def: number;
    mdef: number;
    hitRate: number;
    dodgeRate: number;
    critRate: number;
    critDamage: number;
  };
  expToNext: number;
  effects: ActiveStatusEffect[];
  skills?: LearnedSkill[];
  skillPoints?: SkillPointSummary;
  aliases?: Record<string, string>;
}

export interface CombatStartPayload {
  combatId: string;
  playerTeam: CombatantState[];
  enemyTeam: CombatantState[];
  round: number;
  turnTimer: number;
}

export interface CombatActionPayload {
  round: number;
  actions: DamageResult[];
  log: string[];
  logEntities?: InlineEntityPayload[][];
  playerTeam: CombatantState[];
  enemyTeam: CombatantState[];
}

export interface CombatEndPayload {
  result: 'victory' | 'defeat' | 'fled';
  loot?: CombatLoot;
  log: string[];
}

export interface DeathNoticePayload {
  title: string;
  message: string;
  losses: {
    exp: number;
    gold: number;
    items: string[];
    levelDown: boolean;
  };
  recovery: {
    hp: number;
    maxHp: number;
    mp: number;
    maxMp: number;
  };
  respawn: {
    roomId: string;
    roomName: string;
  };
}

export interface InventoryPayload {
  items: InventoryItem[];
  equipment: EquipmentSlots;
  capacity: number;
  gold: number;
}

export interface PartyPayload {
  id: string;
  leaderId: string;
  members: { id: string; name: string; classId: string; level: number; hp: number; maxHp: number }[];
}

export interface ChatPayload {
  senderId: string;
  senderName: string;
  message: string;
  channel: 'room' | 'party' | 'global' | 'kingdom';
}

export interface MapPayload {
  ascii: string;
  currentRoom: string;
  zone: string;
  zoneName?: string;
  zoneType?: ZoneType;
  dangerLevel?: number;
  pvpMode?: PvpMode;
  deathPenalty?: DeathPenalty;
  exploration?: {
    visitedRooms: number;
    totalRooms: number;
    percent: number;
  };
  localMap?: LocalMapPayload;
  travelNodes?: { id: string; name: string; roomId: string; kind: string; unlocked: boolean }[];
  world?: WorldMapPayload;
}

export interface WorldMapPayload {
  zones: WorldMapZonePayload[];
  connections: { fromZoneId: string; toZoneId: string }[];
}

export interface WorldMapZonePayload {
  id: string;
  name: string;
  region: string;
  type: ZoneType;
  levelRange: [number, number];
  dangerLevel: number;
  pvpMode: PvpMode;
  deathPenalty: DeathPenalty;
  totalRooms: number;
  visitedRooms: number;
  rooms: WorldMapRoomPayload[];
}

export interface WorldMapRoomPayload {
  id: string;
  name: string;
  mapSymbol: string;
  mapX: number;
  mapY: number;
  mapLayer: number;
  mapLayerName?: string;
  explored: boolean;
  exits: {
    direction: string;
    targetRoomId: string;
    targetRoomName?: string;
    targetZoneId?: string;
    targetMapLayer?: number;
    targetMapLayerName?: string;
    locked?: boolean;
  }[];
}

// Shop-related payloads

export type ShopItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type ShopCategory = 'weapon' | 'armor' | 'consumable';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ShopCategory;
  rarity: ShopItemRarity;
  levelReq: number;
  stats?: Record<string, number>;
}

export interface ShopItemsPayload {
  items: ShopItem[];
  balance: number;
}

export interface PurchaseResultPayload {
  success: boolean;
  message: string;
  itemId?: string;
  itemName?: string;
  newBalance?: number;
}

export interface TransactionRecord {
  id: string;
  itemName: string;
  amount: number;
  type: 'purchase' | 'reward';
  timestamp: number;
}

export interface TransactionHistoryPayload {
  transactions: TransactionRecord[];
}

export interface BalanceUpdatePayload {
  balance: number;
}

// Leaderboard-related types

export interface LeaderboardEntry {
  characterId: string;
  name: string;
  classId: string;
  score: number;
}

export interface LeaderboardDataPayload {
  category: 'level' | 'pvp' | 'dungeon_speed';
  entries: LeaderboardEntry[];
}

// Agent-related types

export interface AgentInfo {
  id: string;
  name: string;
  avatar?: string;
  description?: string;
}

export interface AgentMessage {
  role: 'user' | 'agent';
  content: string;
  timestamp: number;
}
