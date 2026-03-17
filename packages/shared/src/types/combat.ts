// 戰鬥型別定義

import type { ElementType, StatusEffect } from './skill.js';
import type { GuardianHints, ResourceType } from './player.js';

export type CombatPhase = 'encounter' | 'action_select' | 'resolve' | 'end';
export type CombatActionType = 'attack' | 'skill' | 'defend' | 'flee' | 'item';
export type CombatResult = 'victory' | 'defeat' | 'fled' | 'ongoing';

export interface CombatAction {
  actorId: string;
  type: CombatActionType;
  skillId?: string;
  targetId?: string;
  itemId?: string;
}

export interface DamageResult {
  attackerId: string;
  targetId: string;
  damage: number;
  isCrit: boolean;
  isMiss: boolean;
  isDodged: boolean;
  element: ElementType;
  elementBonus: number;
  overkill: number;
  effects: StatusEffect[];
  healing?: number;
}

export interface CombatantState {
  id: string;
  name: string;
  isPlayer: boolean;
  isAi: boolean;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  resource: number;
  maxResource: number;
  resourceType: ResourceType;
  level: number;
  classId: string;
  activeEffects: ActiveStatusEffect[];
  isDead: boolean;
}

export interface ActiveStatusEffect extends StatusEffect {
  remainingDuration: number;
  tickDamage?: number;
  tickHealing?: number;
}

export interface CombatState {
  id: string;
  phase: CombatPhase;
  round: number;
  turnTimer: number;
  playerTeam: CombatantState[];
  enemyTeam: CombatantState[];
  pendingActions: Map<string, CombatAction>;
  actionLog: string[];
  result: CombatResult;
  loot?: CombatLoot;
}

export interface CombatLoot {
  exp: number;
  gold: number;
  items: { itemId: string; quantity: number }[];
}

export interface MonsterDef {
  id: string;
  name: string; // 中文名
  level: number;
  hp: number;
  mp: number;
  str: number;
  int: number;
  dex: number;
  vit: number;
  luk: number;
  element: ElementType;
  skills: string[];
  expReward: number;
  goldReward: [number, number]; // [min, max]
  drops: DropEntry[];
  aiType: MonsterAiType;
  description: string;
  isBoss: boolean;
  guardianHints?: GuardianHints;
}

export type MonsterAiType = 'aggressive' | 'defensive' | 'healer' | 'boss' | 'passive';

export interface DropEntry {
  itemId: string;
  chance: number; // 0-1
  minQty: number;
  maxQty: number;
}
