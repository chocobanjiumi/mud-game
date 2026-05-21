import { ITEM_DEFS } from '../constants/items.js';
import type { BaseEquipmentDef, EquipSlot, ItemDef, ItemStats } from '../types/item.js';
import { toBaseEquipmentDef } from '../types/item.js';
import type { SkillTag } from '../types/skill.js';

export type ItemQuality = 'normal' | 'fine' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type AffixTier = 'T1' | 'T2' | 'T3' | 'T4' | 'T5';
export type AffixPool = 'numeric' | 'combat' | 'behavior' | 'class';

export interface AffixDef {
  id: string;
  name: string;
  pool: AffixPool;
  tier: AffixTier;
  appliesTo: EquipSlot[];
  classTags?: string[];
  skillTags?: SkillTag[];
  stats?: Partial<ItemStats>;
  behavior?: string;
}

export interface ItemQualityRule {
  quality: ItemQuality;
  affixCount: [number, number];
  minTier: AffixTier;
  requiresHighTier?: boolean;
  allowsClassAffixes?: boolean;
}

export interface EquipmentItemInstance {
  itemInstanceId: string;
  baseItemId: string;
  quality: ItemQuality;
  affixes: AffixDef[];
  fixedEffects: string[];
}

export interface GenerateEquipmentInstanceOptions {
  luk?: number;
  classId?: string;
  sourceTags?: string[];
  random?: () => number;
}

export interface ReforgeQualityOptions extends GenerateEquipmentInstanceOptions {
  itemInstanceId?: string;
}

export interface EquipmentDropRule {
  source: string;
  levelMin: number;
  levelMax: number;
  slots?: EquipSlot[];
  sourceTags?: string[];
  zoneTags?: string[];
}

const TIER_ORDER: AffixTier[] = ['T1', 'T2', 'T3', 'T4', 'T5'];

export const QUALITY_RULES: Record<ItemQuality, ItemQualityRule> = {
  normal: { quality: 'normal', affixCount: [0, 0], minTier: 'T1' },
  fine: { quality: 'fine', affixCount: [1, 1], minTier: 'T1' },
  rare: { quality: 'rare', affixCount: [2, 2], minTier: 'T2', allowsClassAffixes: true },
  epic: { quality: 'epic', affixCount: [3, 3], minTier: 'T3', requiresHighTier: true, allowsClassAffixes: true },
  legendary: { quality: 'legendary', affixCount: [3, 4], minTier: 'T4', requiresHighTier: true, allowsClassAffixes: true },
  mythic: { quality: 'mythic', affixCount: [4, 4], minTier: 'T5', requiresHighTier: true, allowsClassAffixes: true },
};

export const AFFIX_POOLS: Record<AffixPool, AffixDef[]> = {
  numeric: [
    { id: 'numeric_str_t1', name: '力量', pool: 'numeric', tier: 'T1', appliesTo: ['weapon', 'hands', 'ring', 'necklace'], stats: { str: 1 } },
    { id: 'numeric_int_t2', name: '智識', pool: 'numeric', tier: 'T2', appliesTo: ['weapon', 'head', 'earring', 'necklace'], stats: { int: 2 } },
    { id: 'numeric_vit_t3', name: '堅韌', pool: 'numeric', tier: 'T3', appliesTo: ['head', 'body', 'belt', 'feet'], stats: { vit: 3 } },
    { id: 'numeric_dex_t4', name: '精準', pool: 'numeric', tier: 'T4', appliesTo: ['weapon', 'hands', 'feet', 'ring'], stats: { dex: 4 } },
    { id: 'numeric_luk_t5', name: '天運', pool: 'numeric', tier: 'T5', appliesTo: ['ring', 'earring', 'necklace'], stats: { luk: 5 } },
  ],
  combat: [
    { id: 'combat_atk_t1', name: '銳利', pool: 'combat', tier: 'T1', appliesTo: ['weapon', 'hands'], stats: { atk: 3 } },
    { id: 'combat_def_t2', name: '守勢', pool: 'combat', tier: 'T2', appliesTo: ['head', 'body', 'hands', 'feet', 'belt'], stats: { def: 4 } },
    { id: 'combat_crit_t3', name: '會心', pool: 'combat', tier: 'T3', appliesTo: ['weapon', 'ring', 'earring'], stats: { critRate: 2 } },
    { id: 'combat_mdef_t4', name: '魔障', pool: 'combat', tier: 'T4', appliesTo: ['head', 'body', 'necklace'], stats: { mdef: 8 } },
    { id: 'combat_overpower_t5', name: '破滅', pool: 'combat', tier: 'T5', appliesTo: ['weapon', 'ring'], stats: { atk: 12 } },
  ],
  behavior: [
    { id: 'behavior_guard_t1', name: '護持', pool: 'behavior', tier: 'T1', appliesTo: ['body', 'belt'], skillTags: ['defense'], behavior: 'reduce_first_hit' },
    { id: 'behavior_focus_t2', name: '專注', pool: 'behavior', tier: 'T2', appliesTo: ['head', 'earring'], skillTags: ['resource'], behavior: 'reduce_resource_cost' },
    { id: 'behavior_swift_t3', name: '疾行', pool: 'behavior', tier: 'T3', appliesTo: ['feet'], skillTags: ['mobility'], behavior: 'bonus_after_dodge' },
    { id: 'behavior_counter_t4', name: '反擊', pool: 'behavior', tier: 'T4', appliesTo: ['weapon', 'hands'], skillTags: ['control'], behavior: 'counter_on_block' },
    { id: 'behavior_execute_t5', name: '處決', pool: 'behavior', tier: 'T5', appliesTo: ['weapon'], skillTags: ['burst'], behavior: 'execute_low_hp' },
  ],
  class: [
    { id: 'class_swordsman_t2', name: '劍士節奏', pool: 'class', tier: 'T2', appliesTo: ['weapon', 'ring'], classTags: ['swordsman', 'knight', 'berserker', 'sword_saint'], stats: { atk: 5 } },
    { id: 'class_mage_t3', name: '法師迴路', pool: 'class', tier: 'T3', appliesTo: ['weapon', 'earring'], classTags: ['mage', 'archmage', 'warlock', 'chronomancer'], stats: { matk: 6 } },
    { id: 'class_ranger_t4', name: '遊俠步伐', pool: 'class', tier: 'T4', appliesTo: ['weapon', 'feet'], classTags: ['ranger', 'marksman', 'assassin', 'beast_master'], stats: { dex: 5 } },
    { id: 'class_priest_t5', name: '祭司信念', pool: 'class', tier: 'T5', appliesTo: ['weapon', 'necklace'], classTags: ['priest', 'high_priest', 'druid', 'inquisitor'], stats: { mdef: 10 } },
  ],
};

export function generateEquipmentInstance(
  baseItem: BaseEquipmentDef,
  options: GenerateEquipmentInstanceOptions = {},
): EquipmentItemInstance {
  const random = options.random ?? Math.random;
  const quality = rollItemQuality(options.luk ?? 0, options.sourceTags ?? baseItem.sourceTags, random);
  const affixes = rollAffixes(baseItem, quality, options.classId, random);
  const fixedEffects = quality === 'legendary' || quality === 'mythic'
    ? [`${quality}_core_${baseItem.equipSlot}`]
    : [];

  return {
    itemInstanceId: `${baseItem.id}_${quality}_${Math.floor(random() * 1_000_000).toString(36)}`,
    baseItemId: baseItem.id,
    quality,
    affixes,
    fixedEffects,
  };
}

export function reforgeEquipmentInstanceQuality(
  baseItem: BaseEquipmentDef,
  options: ReforgeQualityOptions = {},
): EquipmentItemInstance {
  const random = options.random ?? Math.random;
  const quality = rollItemQuality(options.luk ?? 0, options.sourceTags ?? baseItem.sourceTags, random);
  const affixes = rollAffixes(baseItem, quality, options.classId, random);
  const fixedEffects = quality === 'legendary' || quality === 'mythic'
    ? [`${quality}_core_${baseItem.equipSlot}`]
    : [];

  return {
    itemInstanceId: options.itemInstanceId ?? `${baseItem.id}_${quality}_${Math.floor(random() * 1_000_000).toString(36)}`,
    baseItemId: baseItem.id,
    quality,
    affixes,
    fixedEffects,
  };
}

export function selectEquipmentDropCandidates(
  rule: EquipmentDropRule,
  itemDefs: Record<string, ItemDef> = ITEM_DEFS,
): BaseEquipmentDef[] {
  return Object.values(itemDefs)
    .map(def => toBaseEquipmentDef(def))
    .filter((def): def is BaseEquipmentDef => !!def)
    .filter(def => def.level >= rule.levelMin && def.level <= rule.levelMax)
    .filter(def => !rule.slots || rule.slots.includes(def.equipSlot))
    .filter(def => tagsMatch(def.sourceTags, rule.sourceTags))
    .filter(def => tagsMatch(def.zoneTags, rule.zoneTags));
}

export function rollEquipmentDrop(rule: EquipmentDropRule, random: () => number = Math.random): BaseEquipmentDef | null {
  const candidates = selectEquipmentDropCandidates(rule);
  if (candidates.length === 0) return null;
  return candidates[Math.floor(random() * candidates.length)];
}

export function rollItemQuality(
  luk = 0,
  sourceTags: string[] = [],
  random: () => number = Math.random,
): ItemQuality {
  const lukBonus = Math.min(0.05, Math.max(0, luk) * 0.0005);
  const canRollMythic = sourceTags.some(tag => tag === 'world_boss' || tag === 'season' || tag === 'endgame');
  const roll = random();
  const thresholds: [ItemQuality, number][] = [
    ['mythic', canRollMythic ? 0.002 + lukBonus * 0.1 : 0],
    ['legendary', 0.01 + lukBonus * 0.2],
    ['epic', 0.04 + lukBonus * 0.4],
    ['rare', 0.12 + lukBonus],
    ['fine', 0.35 + lukBonus],
  ];

  let cumulative = 0;
  for (const [quality, chance] of thresholds) {
    cumulative += chance;
    if (roll < cumulative) return quality;
  }
  return 'normal';
}

export function getEligibleAffixes(baseItem: BaseEquipmentDef, quality: ItemQuality, classId?: string): AffixDef[] {
  const rule = QUALITY_RULES[quality];
  const minTierIndex = Math.max(0, TIER_ORDER.indexOf(rule.minTier) - 1);
  return Object.values(AFFIX_POOLS)
    .flat()
    .filter(affix => TIER_ORDER.indexOf(affix.tier) >= minTierIndex)
    .filter(affix => affix.appliesTo.includes(baseItem.equipSlot))
    .filter(affix => affix.pool !== 'class' || (!!rule.allowsClassAffixes && !!classId && affix.classTags?.includes(classId)));
}

export function rerollAffix(
  baseItem: BaseEquipmentDef,
  quality: ItemQuality,
  currentAffixes: AffixDef[],
  affixIndex: number,
  classId?: string,
  random: () => number = Math.random,
): AffixDef[] {
  if (affixIndex < 0 || affixIndex >= currentAffixes.length) return currentAffixes;

  const rule = QUALITY_RULES[quality];
  const retained = currentAffixes.filter((_, index) => index !== affixIndex);
  const retainedIds = new Set(retained.map(affix => affix.id));
  const needsHighTier = !!rule.requiresHighTier
    && !retained.some(affix => TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier));

  const candidates = getEligibleAffixes(baseItem, quality, classId)
    .filter(affix => !retainedIds.has(affix.id))
    .filter(affix => affix.id !== currentAffixes[affixIndex]?.id)
    .filter(affix => !needsHighTier || TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier));

  if (candidates.length === 0) return currentAffixes;
  const next = [...currentAffixes];
  next[affixIndex] = candidates[Math.floor(random() * candidates.length)];
  return next;
}

function rollAffixes(
  baseItem: BaseEquipmentDef,
  quality: ItemQuality,
  classId: string | undefined,
  random: () => number,
): AffixDef[] {
  const rule = QUALITY_RULES[quality];
  const [min, max] = rule.affixCount;
  const count = min === max ? min : min + Math.floor(random() * (max - min + 1));
  if (count === 0) return [];

  const pool = [...getEligibleAffixes(baseItem, quality, classId)];
  const selected: AffixDef[] = [];
  while (selected.length < count && pool.length > 0) {
    const index = Math.floor(random() * pool.length);
    const [candidate] = pool.splice(index, 1);
    selected.push(candidate);
  }

  if (rule.requiresHighTier && !selected.some(affix => TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier))) {
    const highTier = pool.find(affix => TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier));
    if (highTier) selected[0] = highTier;
  }

  return selected;
}

function tagsMatch(candidateTags: string[], requiredTags?: string[]): boolean {
  if (!requiredTags || requiredTags.length === 0) return true;
  return requiredTags.some(tag => candidateTags.includes(tag));
}
