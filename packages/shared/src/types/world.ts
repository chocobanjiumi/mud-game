// 世界型別定義

import type { GuardianHints } from './player.js';

export type Direction = 'north' | 'south' | 'east' | 'west' | 'up' | 'down';

export interface RoomExit {
  direction: Direction;
  targetRoomId: string;
  description?: string;
  locked?: boolean;
  keyItemId?: string;
}

export type ZoneId = 'starter_village' | 'plains' | 'dark_forest' | 'crystal_cave' | 'lakeside_town';

export interface RoomDef {
  id: string;
  name: string; // 中文名
  zone: ZoneId;
  description: string; // 中文描述
  exits: RoomExit[];
  monsters?: SpawnPoint[];
  npcs?: string[];
  items?: string[];
  mapSymbol: string;
  mapX: number;
  mapY: number;
  guardianHints?: GuardianHints;
}

export interface SpawnPoint {
  monsterId: string;
  maxCount: number;
  respawnSeconds: number;
}

export interface ZoneDef {
  id: ZoneId;
  name: string;
  description: string;
  levelRange: [number, number];
  rooms: string[];
}

export interface NpcDef {
  id: string;
  name: string;
  title: string;
  roomId: string;
  type: NpcType;
  dialogue: DialogueNode[];
  shopItems?: string[];
  classToTeach?: string;
  guardianHints?: GuardianHints;
}

export type NpcType = 'merchant' | 'class_trainer' | 'quest' | 'innkeeper' | 'general';

export interface DialogueNode {
  id: string;
  text: string;
  options?: DialogueOption[];
  action?: DialogueAction;
}

export interface DialogueOption {
  text: string;
  nextId: string;
  condition?: DialogueCondition;
}

export interface DialogueCondition {
  type: 'level' | 'class' | 'item' | 'gold' | 'quest';
  value: string | number;
}

export interface DialogueAction {
  type: 'shop' | 'class_change' | 'heal' | 'quest_start' | 'quest_complete' | 'teleport';
  data?: Record<string, unknown>;
}
