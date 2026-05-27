// 戰鬥型別定義

import type { ElementType, SkillTag, StatusEffect } from './skill.js';
import type { GuardianHints, ResourceType } from './player.js';
import type { FaithId, RaceId } from './origin.js';

export type CombatPhase = 'encounter' | 'action_select' | 'resolve' | 'end';
export type CombatActionType = 'attack' | 'skill' | 'defend' | 'flee' | 'item' | 'mount_ride' | 'mount_charge' | 'mounted_guard';
export type CombatAttackMode = 'melee' | 'ranged';
export type CombatResult = 'victory' | 'defeat' | 'fled' | 'ongoing';

export interface CombatAction {
  actorId: string;
  type: CombatActionType;
  attackMode?: CombatAttackMode;
  skillId?: string;
  skillLevel?: number;
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
  raceId?: RaceId;
  faithId?: FaithId;
  activeEffects: ActiveStatusEffect[];
  activeMountId?: string | null;
  mounted?: boolean;
  mountFatigue?: number;
  mountCooldownUntil?: number;
  isDead: boolean;
  monsterBehavior?: MonsterBehaviorType;
  monsterPhases?: MonsterPhaseRule[];
  currentMonsterPhase?: number;
  pendingTelegraph?: PendingTelegraphAction;
  isApproaching?: boolean;
  arrivalTicksRemaining?: number;
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
  items: {
    itemId: string;
    quantity: number;
    itemInstanceId?: string;
    quality?: import('../systems/item-instance.js').ItemQuality;
    itemLevel?: number;
    droppedBy?: string;
    droppedInZone?: string;
    sourceTags?: string[];
    affixes?: import('../systems/item-instance.js').AffixDef[];
    fixedEffects?: string[];
  }[];
}

export interface MonsterDef {
  id: string;
  name: string; // 中文名
  alias: string; // 英文短名 e.g. 'slime', 'wolf'
  level: number;
  hp: number;
  mp: number;
  str: number;
  int: number;
  dex: number;
  vit: number;
  luk: number;
  element: ElementType;
  family: MonsterFamily;
  skills: string[];
  expReward: number;
  goldReward: [number, number]; // [min, max]
  drops: DropEntry[];
  aiType: MonsterAiType;
  behaviorType?: MonsterBehaviorType;
  phaseRules?: MonsterPhaseRule[];
  telegraphActions?: MonsterTelegraphAction[];
  mechanicSkillTags?: SkillTag[];
  description: string;
  isBoss: boolean;
  isElite?: boolean;
  respawnTime?: number; // seconds
  guardianHints?: GuardianHints;
}

export type MonsterFamily =
  | 'ooze'
  | 'beast'
  | 'humanoid'
  | 'undead'
  | 'demon'
  | 'dragon'
  | 'construct'
  | 'elemental'
  | 'plant'
  | 'insect'
  | 'aquatic'
  | 'celestial'
  | 'aberration';

export type MonsterAiType = 'aggressive' | 'defensive' | 'healer' | 'boss' | 'passive';
export type MonsterBehaviorType =
  | 'basic'
  | 'ambusher'
  | 'guardian'
  | 'caster'
  | 'summoner'
  | 'phase_boss';

export interface MonsterPhaseRule {
  phase: number;
  hpThresholdPercent: number;
  message: string;
  damageMultiplier?: number;
  preferSkillId?: string;
  applyEffect?: StatusEffect;
}

export interface MonsterTelegraphAction {
  id: string;
  skillId: string;
  message: string;
  executeMessage?: string;
  hpBelowPercent?: number;
  minRound?: number;
  cooldownRounds?: number;
}

export interface PendingTelegraphAction {
  id: string;
  skillId: string;
  message: string;
  executeMessage?: string;
  preparedRound: number;
}

export interface DropEntry {
  itemId: string;
  chance: number; // 0-1
  minQty: number;
  maxQty: number;
}
