// 技能型別定義

import type { ClassId } from './player.js';

export type SkillTargetType = 'single_enemy' | 'all_enemies' | 'self' | 'single_ally' | 'all_allies';
export type SkillType = 'active' | 'passive';
export type SkillUsageContext = 'combat' | 'field' | 'both';
export type DamageType = 'physical' | 'magical' | 'pure';
export type ElementType = 'fire' | 'ice' | 'lightning' | 'light' | 'dark' | 'nature' | 'none';
export type SkillTag =
  | 'damage' | 'aoe' | 'single_target' | 'heal' | 'support' | 'defense'
  | 'control' | 'interrupt' | 'dispel' | 'buff' | 'debuff' | 'mobility'
  | 'summon' | 'burst' | 'resource' | 'passive'
  | DamageType
  | ElementType;
export type SkillScalingStat = 'atk' | 'matk' | 'def' | 'mdef' | 'hp' | 'resource' | 'none';

export type StatusEffectType =
  | 'poison' | 'burn' | 'slow' | 'stun' | 'fear'
  | 'bleed' | 'silence' | 'freeze'
  | 'atk_up' | 'def_up' | 'matk_up' | 'mdef_up'
  | 'atk_down' | 'def_down' | 'matk_down' | 'mdef_down'
  | 'dodge_up' | 'crit_up' | 'speed_up'
  | 'regen' | 'mana_regen'
  | 'shield' | 'taunt' | 'counter' | 'stealth'
  | 'mana_shield' | 'thorns' | 'mark'
  | 'damage_reduction' | 'heal_reduction'
  | 'invincible' | 'unyielding';

export interface StatusEffect {
  type: StatusEffectType;
  value: number;
  duration: number;
  source?: string;
}

export interface SkillDef {
  id: string;
  name: string; // 中文名
  englishName: string;
  classId: ClassId;
  learnLevel: number;
  type: SkillType;
  usageContext: SkillUsageContext;
  targetType: SkillTargetType;
  resourceCost: number;
  cooldown: number;
  damageType: DamageType;
  element: ElementType;
  multiplier: number; // 技能倍率
  tags: SkillTag[];
  scaling: SkillScaling;
  questUnlock?: SkillQuestUnlock;
  description: string; // 中文描述
  shortDescription: string; // UI 摘要描述
  fullDescription: string; // 詳細機制描述
  iconPath?: string;
  effects?: StatusEffect[];
  special?: SkillSpecial;
}

export interface SkillScaling {
  stat: SkillScalingStat;
  coefficient: number;
}

export interface SkillQuestUnlock {
  questId: string;
  requiredStatus: 'active' | 'completed';
}

export interface SkillSpecial {
  [key: string]: unknown;
  interrupt?: boolean;
  dispelShield?: boolean;
  isHeal?: boolean;
  removeDebuffs?: boolean;
  areaScope?: 'room' | 'combat' | 'adjacent_cardinal';
}

export interface LearnedSkill {
  skillId: string;
  level: number;
  currentCooldown: number;
}
