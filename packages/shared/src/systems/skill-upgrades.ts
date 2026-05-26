import { SKILL_DEFS } from '../constants/skills.js';
import type { ClassId } from '../types/player.js';
import type { LearnedSkill, SkillDef, StatusEffect } from '../types/skill.js';

export interface SkillUpgradeLevelData {
  level: number;
  multiplier?: number;
  cooldown?: number;
  resourceCost?: number;
  effectValues?: Record<string, number>;
  effectDurations?: Record<string, number>;
  specialValues?: Record<string, number>;
}

export interface SkillUpgradeRule {
  skillId: string;
  maxLevel: number;
  costs: number[];
  requiredLevels: number[];
  perLevel: SkillUpgradeLevelData[];
}

export interface SkillUpgradeDelta {
  label: string;
  before: string;
  after: string;
}

export interface SkillPointSummary {
  total: number;
  spent: number;
  available: number;
}

const STARTER_CLASSES = new Set<ClassId>(['swordsman', 'mage', 'ranger', 'priest']);
const MAX_SKILL_LEVEL = 5;
const COSTS_BY_LEVEL = [0, 1, 1, 2, 2];

export const SKILL_UPGRADE_RULES: Record<string, SkillUpgradeRule> = Object.fromEntries(
  Object.values(SKILL_DEFS)
    .filter(skill => STARTER_CLASSES.has(skill.classId) && skill.type === 'active' && skill.learnLevel < 20)
    .map(skill => [skill.id, buildDefaultUpgradeRule(skill)]),
);

export function getSkillUpgradeRule(skillId: string): SkillUpgradeRule | undefined {
  return SKILL_UPGRADE_RULES[skillId];
}

export function getSkillMaxLevel(skillId: string): number {
  return getSkillUpgradeRule(skillId)?.maxLevel ?? 1;
}

export function getSkillUpgradeCost(skillId: string, currentLevel: number): number | undefined {
  const rule = getSkillUpgradeRule(skillId);
  if (!rule || currentLevel >= rule.maxLevel) return undefined;
  return rule.costs[currentLevel] ?? 1;
}

export function getSkillUpgradeRequiredLevel(skillId: string, nextLevel: number): number | undefined {
  const rule = getSkillUpgradeRule(skillId);
  if (!rule || nextLevel < 1 || nextLevel > rule.maxLevel) return undefined;
  return rule.requiredLevels[nextLevel - 1];
}

export function getSkillPointSummary(characterLevel: number, learnedSkills: Pick<LearnedSkill, 'skillId' | 'level'>[]): SkillPointSummary {
  const total = Math.max(0, characterLevel - 1);
  const spent = learnedSkills.reduce((sum, skill) => sum + getSkillSpentPoints(skill.skillId, skill.level), 0);
  return {
    total,
    spent,
    available: Math.max(0, total - spent),
  };
}

export function getSkillSpentPoints(skillId: string, level: number): number {
  const rule = getSkillUpgradeRule(skillId);
  if (!rule) return 0;
  const cappedLevel = Math.min(Math.max(1, level), rule.maxLevel);
  let spent = 0;
  for (let targetLevel = 2; targetLevel <= cappedLevel; targetLevel++) {
    spent += rule.costs[targetLevel - 1] ?? 1;
  }
  return spent;
}

export function applySkillUpgradeRule(skillDef: SkillDef, level: number): SkillDef {
  const rule = getSkillUpgradeRule(skillDef.id);
  if (!rule) return skillDef;
  const levelData = getRuleLevelData(rule, level);
  return applyLevelData(skillDef, levelData);
}

export function getSkillUpgradeDeltas(skillDef: SkillDef, currentLevel: number): SkillUpgradeDelta[] {
  const rule = getSkillUpgradeRule(skillDef.id);
  if (!rule || currentLevel >= rule.maxLevel) return [];
  const current = applyLevelData(skillDef, getRuleLevelData(rule, currentLevel));
  const next = applyLevelData(skillDef, getRuleLevelData(rule, currentLevel + 1));
  const deltas: SkillUpgradeDelta[] = [];

  pushNumericDelta(deltas, '傷害倍率', current.multiplier, next.multiplier, value => `${Math.round(value * 100)}%`);
  pushNumericDelta(deltas, 'CD', current.cooldown, next.cooldown, value => `${value}T`);
  pushNumericDelta(deltas, '資源', current.resourceCost, next.resourceCost, value => `${value}`);

  const effectTypes = new Set([...(current.effects ?? []).map(effect => effect.type), ...(next.effects ?? []).map(effect => effect.type)]);
  for (const type of effectTypes) {
    const currentEffect = current.effects?.find(effect => effect.type === type);
    const nextEffect = next.effects?.find(effect => effect.type === type);
    pushNumericDelta(deltas, `${effectLabel(type)}數值`, currentEffect?.value ?? 0, nextEffect?.value ?? 0, value => `${value}`);
    pushNumericDelta(deltas, `${effectLabel(type)}持續`, currentEffect?.duration ?? 0, nextEffect?.duration ?? 0, value => `${value}T`);
  }

  const specialKeys = new Set([
    ...Object.keys(current.special ?? {}).filter(key => typeof current.special?.[key] === 'number'),
    ...Object.keys(next.special ?? {}).filter(key => typeof next.special?.[key] === 'number'),
  ]);
  for (const key of specialKeys) {
    const currentValue = current.special?.[key];
    const nextValue = next.special?.[key];
    if (typeof currentValue !== 'number' || typeof nextValue !== 'number') continue;
    pushNumericDelta(deltas, specialLabel(key), currentValue, nextValue, value => formatSpecialValue(key, value));
  }

  return deltas;
}

export function describeSkillLevel(skillDef: SkillDef, level: number): string[] {
  const upgraded = applySkillUpgradeRule(skillDef, level);
  const lines: string[] = [];
  if (upgraded.multiplier > 0) lines.push(`傷害倍率 ${Math.round(upgraded.multiplier * 100)}%`);
  if (upgraded.resourceCost > 0) lines.push(`資源 -${upgraded.resourceCost}`);
  else lines.push('資源 0');
  lines.push(`CD ${upgraded.cooldown}T`);
  for (const effect of upgraded.effects ?? []) {
    lines.push(`${effectLabel(effect.type)} ${effect.value}${effect.duration > 0 ? ` / ${effect.duration}T` : ''}`);
  }
  for (const [key, value] of Object.entries(upgraded.special ?? {})) {
    if (typeof value === 'number' && shouldShowSpecialValue(key)) {
      lines.push(`${specialLabel(key)} ${formatSpecialValue(key, value)}`);
    }
  }
  return lines;
}

function buildDefaultUpgradeRule(skill: SkillDef): SkillUpgradeRule {
  return {
    skillId: skill.id,
    maxLevel: MAX_SKILL_LEVEL,
    costs: COSTS_BY_LEVEL,
    requiredLevels: Array.from({ length: MAX_SKILL_LEVEL }, (_, index) => skill.learnLevel + index * 2),
    perLevel: Array.from({ length: MAX_SKILL_LEVEL }, (_, index) => buildLevelData(skill, index + 1)),
  };
}

function buildLevelData(skill: SkillDef, level: number): SkillUpgradeLevelData {
  const rank = level - 1;
  return {
    level,
    multiplier: skill.multiplier > 0 ? round2(skill.multiplier * (1 + rank * 0.1)) : skill.multiplier,
    cooldown: Math.max(0, skill.cooldown - (skill.cooldown >= 4 && level >= 4 ? 1 : 0) - (skill.cooldown >= 7 && level >= 5 ? 1 : 0)),
    resourceCost: skill.resourceCost > 0 ? Math.max(1, skill.resourceCost - Math.floor(rank / 2) * 3) : skill.resourceCost,
    effectValues: Object.fromEntries((skill.effects ?? []).map(effect => [effect.type, Math.round(effect.value * (1 + rank * 0.12))])),
    effectDurations: Object.fromEntries((skill.effects ?? []).map(effect => [effect.type, effect.duration + (level >= 5 && effect.duration > 0 ? 1 : 0)])),
    specialValues: buildSpecialValues(skill, rank),
  };
}

function buildSpecialValues(skill: SkillDef, rank: number): Record<string, number> {
  const values: Record<string, number> = {};
  for (const [key, value] of Object.entries(skill.special ?? {})) {
    if (typeof value !== 'number' || !shouldScaleSpecialValue(key)) continue;
    if (key.toLowerCase().includes('chance')) values[key] = Math.min(95, value + rank * 5);
    else if (key.toLowerCase().includes('duration')) values[key] = value + (rank >= 4 ? 1 : 0);
    else if (key.toLowerCase().includes('cost')) values[key] = Math.max(1, value - Math.floor(rank / 2) * 2);
    else values[key] = Math.round(value * (1 + rank * 0.1));
  }
  return values;
}

function applyLevelData(skillDef: SkillDef, levelData: SkillUpgradeLevelData): SkillDef {
  return {
    ...skillDef,
    multiplier: levelData.multiplier ?? skillDef.multiplier,
    cooldown: levelData.cooldown ?? skillDef.cooldown,
    resourceCost: levelData.resourceCost ?? skillDef.resourceCost,
    effects: skillDef.effects?.map(effect => ({
      ...effect,
      value: levelData.effectValues?.[effect.type] ?? effect.value,
      duration: levelData.effectDurations?.[effect.type] ?? effect.duration,
    })),
    special: {
      ...skillDef.special,
      ...levelData.specialValues,
    },
  };
}

function getRuleLevelData(rule: SkillUpgradeRule, level: number): SkillUpgradeLevelData {
  const cappedLevel = Math.min(Math.max(1, level), rule.maxLevel);
  return rule.perLevel.find(data => data.level === cappedLevel) ?? rule.perLevel[0];
}

function pushNumericDelta(
  deltas: SkillUpgradeDelta[],
  label: string,
  before: number,
  after: number,
  format: (value: number) => string,
): void {
  if (before === after) return;
  deltas.push({ label, before: format(before), after: format(after) });
}

function shouldScaleSpecialValue(key: string): boolean {
  return [
    'healPercent',
    'stunChance',
    'stunDuration',
    'resourceGain',
    'resourceGainOnHit',
    'resourceGainPerHit',
    'focusGainOnHit',
    'focusGainOnMarkedHit',
    'mpGainOnSpellHit',
    'mpGainOnApproachingHit',
    'healPercent',
    'allyDamageReduction',
    'undeadMultiplier',
    'darkMultiplier',
    'exitAccuracyDown',
    'arrivalTicksDelta',
    'duration',
  ].includes(key);
}

function shouldShowSpecialValue(key: string): boolean {
  return shouldScaleSpecialValue(key) || key === 'maxTargets' || key === 'arrivalTicks';
}

function specialLabel(key: string): string {
  const labels: Record<string, string> = {
    healPercent: '治療',
    stunChance: '暈眩機率',
    stunDuration: '暈眩持續',
    resourceGain: '資源回復',
    resourceGainOnHit: '命中回復',
    resourceGainPerHit: '每命中回復',
    focusGainOnHit: '命中專注',
    focusGainOnMarkedHit: '標記回復',
    mpGainOnSpellHit: '法術回魔',
    mpGainOnApproachingHit: '迎擊回魔',
    allyDamageReduction: '隊友減傷',
    undeadMultiplier: '亡靈倍率',
    darkMultiplier: '黑暗倍率',
    exitAccuracyDown: '出口命中下降',
    arrivalTicksDelta: '接近延遲',
    duration: '持續',
    maxTargets: '目標數',
    arrivalTicks: '抵達',
  };
  return labels[key] ?? key;
}

function formatSpecialValue(key: string, value: number): string {
  if (key.toLowerCase().includes('chance') || key.toLowerCase().includes('percent') || key.toLowerCase().includes('reduction')) return `${value}%`;
  if (key.toLowerCase().includes('duration') || key === 'arrivalTicks' || key === 'arrivalTicksDelta') return `${value}T`;
  if (key.toLowerCase().includes('multiplier')) return `${Math.round(value * 100)}%`;
  return `${value}`;
}

function effectLabel(type: StatusEffect['type']): string {
  const labels: Record<StatusEffect['type'], string> = {
    poison: '中毒',
    burn: '燃燒',
    slow: '減速',
    stun: '暈眩',
    fear: '恐懼',
    bleed: '流血',
    silence: '沉默',
    freeze: '冰凍',
    atk_up: '攻擊提升',
    def_up: '防禦提升',
    matk_up: '魔攻提升',
    mdef_up: '魔防提升',
    atk_down: '攻擊下降',
    def_down: '破甲',
    matk_down: '魔攻下降',
    mdef_down: '魔防下降',
    dodge_up: '迴避提升',
    crit_up: '暴擊提升',
    speed_up: '加速',
    regen: '回血',
    mana_regen: '回魔',
    shield: '護盾',
    taunt: '挑釁',
    counter: '反擊',
    stealth: '隱身',
    mana_shield: '魔力護盾',
    thorns: '反傷',
    mark: '標記',
    next_shot_damage: '下次射擊',
    damage_reduction: '減傷',
    heal_reduction: '治療壓制',
    invincible: '無敵',
    unyielding: '不屈',
  };
  return labels[type] ?? type;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
