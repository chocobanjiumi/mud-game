// WebSocket 訊息協議

import type { Character, EquipmentSlots } from './player.js';
import type { CombatantState, CombatLoot, DamageResult } from './combat.js';
import type { InventoryItem } from './item.js';
import type { RoomExit } from './world.js';
import type { ActiveStatusEffect } from './combat.js';

// Client → Server
export type ClientMessage =
  | { type: 'command'; payload: string }
  | { type: 'login'; payload: { userId: string; characterId?: string; accessToken?: string } }
  | { type: 'create_character'; payload: { name: string; userId: string } }
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
  | 'skill_learned' | 'class_change' | 'trade'
  | 'quest' | 'quest_update' | 'leaderboard' | 'map' | 'token_balance'
  | 'shop_items' | 'purchase_result' | 'transaction_history' | 'balance_update';

export interface ServerMessage {
  type: ServerMessageType;
  payload: Record<string, unknown>;
  timestamp: number;
}

// Specific server message payloads
export interface NarrativePayload {
  text: string;
  color?: string;
}

export interface RoomPayload {
  id: string;
  name: string;
  description: string;
  exits: RoomExit[];
  players: { id: string; name: string; classId: string; level: number }[];
  npcs: { id: string; name: string; title: string }[];
  items: { id: string; name: string }[];
  monsters: { id: string; name: string; level: number; hp: number; maxHp: number }[];
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
  playerTeam: CombatantState[];
  enemyTeam: CombatantState[];
}

export interface CombatEndPayload {
  result: 'victory' | 'defeat' | 'fled';
  loot?: CombatLoot;
  log: string[];
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
}

// Shop-related payloads

export type ShopItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
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
