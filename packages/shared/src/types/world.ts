// 世界型別定義

import type { GuardianHints } from './player.js';
import type { ElementType } from './skill.js';

export type Direction = 'north' | 'south' | 'east' | 'west' | 'up' | 'down';

export interface RoomExit {
  direction: Direction;
  targetRoomId: string;
  description?: string;
  locked?: boolean;
  keyItemId?: string;
}

export type ZoneId = string;

export type ZoneType =
  | 'town'
  | 'wilds'
  | 'dungeon_entrance'
  | 'resource'
  | 'pvp'
  | 'kingdom'
  | 'endgame';

export type WorldRegion =
  | 'central'
  | 'east'
  | 'west'
  | 'north'
  | 'south'
  | 'underground'
  | 'abyss'
  | 'celestial';

export type ZoneTag =
  | 'safe'
  | 'newbie'
  | 'high_density_spawns'
  | 'elite_patrols'
  | 'world_boss'
  | 'gathering'
  | 'fishing'
  | 'mining'
  | 'quest_hub'
  | 'trade_hub'
  | 'portal_hub'
  | 'crafting_hub'
  | 'class_hub'
  | 'dungeon_hub'
  | 'pvp'
  | 'kingdom_war'
  | 'resource_war'
  | 'solo'
  | 'party'
  | 'endgame';

export type PvpMode = 'safe' | 'duel_only' | 'open' | 'faction' | 'kingdom_war';
export type DeathPenalty = 'none' | 'durability' | 'gold' | 'loot';

export interface ZoneUnlock {
  requiredLevel?: number;
  requiredQuestId?: string;
  requiredItemId?: string;
  requiredZoneId?: ZoneId;
}

export interface ZonePortal {
  id: string;
  name: string;
  cost: number;
  network: 'public' | 'kingdom' | 'dungeon';
  unlockByDefault?: boolean;
}

export interface GroundItem {
  itemId: string;
  description: string;
}

export interface RoomDef {
  id: string;
  name: string; // 中文名
  zone: ZoneId;
  description: string; // 中文描述
  image?: string;
  imagePrompt?: string;
  exits: RoomExit[];
  monsters?: SpawnPoint[];
  npcs?: string[];
  items?: string[];
  groundItems?: GroundItem[];
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
  type: ZoneType;
  region: WorldRegion;
  tags: ZoneTag[];
  pvpMode: PvpMode;
  deathPenalty: DeathPenalty;
  dangerLevel: number;
  recommendedPartySize: [number, number];
  primaryElements: ElementType[];
  unlock?: ZoneUnlock;
  portal?: ZonePortal;
}

export interface NpcDef {
  id: string;
  name: string;
  alias: string; // 英文短名 e.g. 'elder', 'smith'
  title: string;
  description: string; // 外觀描述（用於 look 指令）
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
