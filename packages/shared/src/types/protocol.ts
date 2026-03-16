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
  | { type: 'ping' };

// Server → Client
export type ServerMessageType =
  | 'narrative' | 'combat' | 'system' | 'chat' | 'status'
  | 'room' | 'inventory' | 'party' | 'error' | 'pong'
  | 'login_success' | 'character_list' | 'combat_start'
  | 'combat_action' | 'combat_end' | 'level_up'
  | 'skill_learned' | 'class_change' | 'trade'
  | 'quest' | 'leaderboard' | 'map';

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
  channel: 'room' | 'party' | 'global';
}

export interface MapPayload {
  ascii: string;
  currentRoom: string;
  zone: string;
}
