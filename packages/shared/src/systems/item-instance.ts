import { ITEM_DEFS } from '../constants/items.js';
import type { BaseEquipmentDef, EquipSlot, ItemDef, ItemStats, WeaponCategory } from '../types/item.js';
import { toBaseEquipmentDef } from '../types/item.js';
import type { SkillTag } from '../types/skill.js';

export type ItemQuality = 'normal' | 'fine' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type AffixTier = 'T1' | 'T2' | 'T3' | 'T4' | 'T5';
export type AffixPool = 'numeric' | 'combat' | 'behavior' | 'class';

export interface AffixDef {
  id: string;
  name: string;
  kind?: 'prefix' | 'suffix' | 'fixed' | 'behavior';
  pool: AffixPool;
  tier: AffixTier;
  appliesTo: EquipSlot[];
  itemLevelMin?: number;
  itemLevelMax?: number;
  classTags?: string[];
  skillTags?: SkillTag[];
  skillIds?: string[];
  sourceTags?: string[];
  zoneTags?: string[];
  weaponTypes?: string[];
  stats?: Partial<ItemStats>;
  behavior?: string;
  trigger?: 'on_hit' | 'on_block' | 'on_dodge' | 'on_kill' | 'on_cast' | 'on_heal';
  condition?: 'low_hp' | 'first_hit' | 'approaching_target';
  internalCooldownRounds?: number;
  resourceModifiers?: Partial<Record<'rageGain' | 'focusRegen' | 'mpRegen' | 'faithDelta', number>>;
  skillModifiers?: {
    resourceCostPct?: number;
    damagePct?: number;
    healingPct?: number;
    cooldownDelta?: number;
    rangeDelta?: number;
    arrivalTicksDelta?: number;
  };
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
  qualityBonus?: number;
  preferredAffixTags?: SkillTag[];
  preferredAffixWeight?: number;
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

export interface AffixTierBalance {
  statBudget: [number, number];
  skillModifierPct: [number, number];
  resourceModifier: [number, number];
  internalCooldownRounds: [number, number];
}

export interface AffixBuildDirection {
  id: string;
  classId: string;
  name: string;
  weaponCategories: WeaponCategory[];
  skillTags: SkillTag[];
  affixIds: string[];
  notes: string;
}

export const AFFIX_TIER_BALANCE: Record<AffixTier, AffixTierBalance> = {
  T1: { statBudget: [1, 3], skillModifierPct: [3, 6], resourceModifier: [1, 3], internalCooldownRounds: [0, 1] },
  T2: { statBudget: [2, 5], skillModifierPct: [6, 9], resourceModifier: [2, 4], internalCooldownRounds: [0, 2] },
  T3: { statBudget: [3, 8], skillModifierPct: [8, 12], resourceModifier: [3, 6], internalCooldownRounds: [1, 3] },
  T4: { statBudget: [4, 12], skillModifierPct: [10, 16], resourceModifier: [4, 8], internalCooldownRounds: [2, 4] },
  T5: { statBudget: [5, 18], skillModifierPct: [12, 22], resourceModifier: [5, 10], internalCooldownRounds: [3, 5] },
};

export const AFFIX_BUILD_DIRECTIONS: AffixBuildDirection[] = [
  { id: 'warrior_guard', classId: 'swordsman', name: '戰士：格擋回怒與反擊', weaponCategories: ['sword', 'hammer'], skillTags: ['defense', 'control', 'resource'], affixIds: ['behavior_guard_t1', 'behavior_counter_t4'], notes: '強化擋下第一波、被打回怒、挑釁減耗與反擊傷害，但主要坦度仍來自戰士/盾衛技能。' },
  { id: 'warrior_berserk', classId: 'swordsman', name: '戰士：低血爆發與破甲', weaponCategories: ['axe'], skillTags: ['burst', 'aoe', 'damage'], affixIds: ['behavior_burst_t1', 'behavior_execute_t5', 'behavior_harvest_t3'], notes: '支援狂斧低血增傷、擊殺返怒與範圍命中返怒，不提供法系或遠距核心能力。' },
  { id: 'warrior_lancer', classId: 'swordsman', name: '戰士：approaching 攔截', weaponCategories: ['polearm'], skillTags: ['control', 'cross_room', 'interrupt'], affixIds: ['behavior_snare_t4'], notes: '支援槍騎直線穿刺、出口槍陣與抵達攔截，仍需戰士系技能把怪物拉進戰線。' },
  { id: 'mage_elementalist', classId: 'mage', name: '法師：元素輪轉與四方 AoE', weaponCategories: ['staff'], skillTags: ['damage', 'aoe', 'cross_room'], affixIds: ['class_mage_t3', 'behavior_cross_room_t3'], notes: '強化 MP 回復、元素傷害與跨房法術命中，風險來自相鄰房怪物 approaching。' },
  { id: 'mage_arcane', classId: 'mage', name: '法師：護盾與吸能', weaponCategories: ['staff', 'grimoire', 'focus'], skillTags: ['defense', 'resource'], affixIds: ['behavior_focus_t2', 'class_mage_t3'], notes: '支援奧術師護盾效率、MP 轉換與詠唱抗打斷，但不替代祭司治療。' },
  { id: 'mage_time', classId: 'mage', name: '法師：slow 與 arrivalTicks', weaponCategories: ['staff', 'grimoire'], skillTags: ['control', 'interrupt', 'cross_room'], affixIds: ['behavior_snare_t4'], notes: '支援時術師 slow、CD、arrivalTicks 與預兆打斷的控制定位。' },
  { id: 'ranger_marksman', classId: 'ranger', name: '遊俠：隔房狙擊與弱點', weaponCategories: ['bow', 'crossbow'], skillTags: ['burst', 'cross_room', 'resource'], affixIds: ['behavior_cross_room_t3', 'class_ranger_t4'], notes: '強化專注回復、遠距命中、標記增傷與暴擊，不提供坦克式硬控。' },
  { id: 'ranger_assassin', classId: 'ranger', name: '遊俠：背刺毒與煙幕', weaponCategories: ['dagger', 'shortsword'], skillTags: ['damage', 'mobility', 'control'], affixIds: ['behavior_swift_t3', 'behavior_execute_t5'], notes: '支援影刃剛抵達目標增傷、閃避後節奏與處決窗口。' },
  { id: 'ranger_trapper', classId: 'ranger', name: '遊俠：陷阱與偵查', weaponCategories: ['bow', 'crossbow', 'focus'], skillTags: ['control', 'interrupt', 'cross_room'], affixIds: ['behavior_snare_t4', 'class_ranger_t4'], notes: '支援獵陷師陷阱持續、陷阱觸發返專注、arrivalTicks 控制與偵查資訊。' },
  { id: 'priest_bishop', classId: 'priest', name: '祭司：群補與護盾', weaponCategories: ['holy_tome', 'staff'], skillTags: ['heal', 'defense', 'resource'], affixIds: ['behavior_mercy_t2', 'class_priest_t5'], notes: '強化治療量、護盾量、復活 CD 與慈悲端控制，但不把祭司變成高爆發輸出。' },
  { id: 'priest_inquisitor', classId: 'priest', name: '祭司：光傷與審判', weaponCategories: ['holy_tome', 'hammer'], skillTags: ['damage', 'burst', 'interrupt'], affixIds: ['behavior_execute_t5', 'class_priest_t5'], notes: '支援審判者光傷、undead、沉默與處決，資源仍受信仰方向限制。' },
  { id: 'priest_druid', classId: 'priest', name: '祭司：HoT 與自然控制', weaponCategories: ['totem', 'staff'], skillTags: ['heal', 'control', 'nature'], affixIds: ['behavior_mercy_t2', 'behavior_snare_t4'], notes: '支援德魯伊 HoT、荊棘、藤蔓與出口圖騰，控制強於爆發。' },
];

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
    { id: 'numeric_str_t1', name: '力量', kind: 'prefix', pool: 'numeric', tier: 'T1', appliesTo: ['weapon', 'hands', 'ring', 'necklace'], itemLevelMin: 1, itemLevelMax: 20, stats: { str: 1 } },
    { id: 'numeric_int_t2', name: '智識', kind: 'prefix', pool: 'numeric', tier: 'T2', appliesTo: ['weapon', 'head', 'earring', 'necklace'], itemLevelMin: 8, itemLevelMax: 30, stats: { int: 2 } },
    { id: 'numeric_vit_t3', name: '堅韌', kind: 'prefix', pool: 'numeric', tier: 'T3', appliesTo: ['head', 'body', 'belt', 'feet'], itemLevelMin: 18, itemLevelMax: 45, stats: { vit: 3 } },
    { id: 'numeric_dex_t4', name: '精準', kind: 'prefix', pool: 'numeric', tier: 'T4', appliesTo: ['weapon', 'hands', 'feet', 'ring'], itemLevelMin: 32, itemLevelMax: 60, stats: { dex: 4 } },
    { id: 'numeric_luk_t5', name: '天運', kind: 'prefix', pool: 'numeric', tier: 'T5', appliesTo: ['ring', 'earring', 'necklace'], itemLevelMin: 45, stats: { luk: 5 } },
  ],
  combat: [
    { id: 'combat_atk_t1', name: '銳利', kind: 'suffix', pool: 'combat', tier: 'T1', appliesTo: ['weapon', 'hands'], itemLevelMin: 1, itemLevelMax: 24, stats: { atk: 3 } },
    { id: 'combat_def_t2', name: '守勢', kind: 'suffix', pool: 'combat', tier: 'T2', appliesTo: ['head', 'body', 'hands', 'feet', 'belt'], itemLevelMin: 8, itemLevelMax: 35, stats: { def: 4 } },
    { id: 'combat_crit_t3', name: '會心', kind: 'suffix', pool: 'combat', tier: 'T3', appliesTo: ['weapon', 'ring', 'earring'], itemLevelMin: 18, itemLevelMax: 50, stats: { critRate: 2, critDamage: 4 } },
    { id: 'combat_mdef_t4', name: '魔障', kind: 'suffix', pool: 'combat', tier: 'T4', appliesTo: ['head', 'body', 'necklace'], itemLevelMin: 32, stats: { mdef: 8 } },
    { id: 'combat_overpower_t5', name: '破滅', kind: 'suffix', pool: 'combat', tier: 'T5', appliesTo: ['weapon', 'ring'], itemLevelMin: 45, stats: { atk: 12, hitRate: 3 } },
  ],
  behavior: [
    { id: 'behavior_guard_t1', name: '護持', kind: 'behavior', pool: 'behavior', tier: 'T1', appliesTo: ['body', 'belt'], itemLevelMin: 1, itemLevelMax: 24, skillTags: ['defense'], behavior: 'reduce_first_hit', trigger: 'on_block', condition: 'first_hit', skillModifiers: { damagePct: -6 } },
    { id: 'behavior_burst_t1', name: '蓄勢', kind: 'behavior', pool: 'behavior', tier: 'T1', appliesTo: ['weapon', 'ring'], itemLevelMin: 1, itemLevelMax: 24, skillTags: ['burst'], behavior: 'burst_damage', trigger: 'on_cast', skillModifiers: { damagePct: 3 } },
    { id: 'behavior_focus_t2', name: '專注', kind: 'behavior', pool: 'behavior', tier: 'T2', appliesTo: ['head', 'earring'], itemLevelMin: 8, itemLevelMax: 35, skillTags: ['resource'], behavior: 'reduce_resource_cost', trigger: 'on_cast', skillModifiers: { resourceCostPct: -8 } },
    { id: 'behavior_mercy_t2', name: '慈心', kind: 'behavior', pool: 'behavior', tier: 'T2', appliesTo: ['weapon', 'necklace'], itemLevelMin: 8, itemLevelMax: 35, skillTags: ['heal'], sourceTags: ['temple', 'faith', 'support'], behavior: 'heal_amplify', trigger: 'on_heal', skillModifiers: { healingPct: 6 }, resourceModifiers: { faithDelta: 1 } },
    { id: 'behavior_swift_t3', name: '疾行', kind: 'behavior', pool: 'behavior', tier: 'T3', appliesTo: ['feet'], itemLevelMin: 18, itemLevelMax: 50, skillTags: ['mobility'], behavior: 'bonus_after_dodge', trigger: 'on_dodge', stats: { dodgeRate: 3 } },
    { id: 'behavior_harvest_t3', name: '收割', kind: 'behavior', pool: 'behavior', tier: 'T3', appliesTo: ['weapon', 'ring'], itemLevelMin: 18, itemLevelMax: 50, skillTags: ['damage'], sourceTags: ['boss', 'undead', 'dungeon'], behavior: 'resource_on_kill', trigger: 'on_kill', internalCooldownRounds: 1, resourceModifiers: { rageGain: 6, focusRegen: 6, mpRegen: 4 } },
    { id: 'behavior_counter_t4', name: '反擊', kind: 'behavior', pool: 'behavior', tier: 'T4', appliesTo: ['weapon', 'hands'], itemLevelMin: 32, skillTags: ['control'], behavior: 'counter_on_block', trigger: 'on_block', resourceModifiers: { rageGain: 3 } },
    { id: 'behavior_cross_room_t3', name: '鷹眼', kind: 'suffix', pool: 'behavior', tier: 'T3', appliesTo: ['weapon', 'head', 'ring'], itemLevelMin: 18, itemLevelMax: 50, skillTags: ['cross_room'], sourceTags: ['plains', 'scout', 'ranged'], behavior: 'cross_room_accuracy', trigger: 'on_hit', skillModifiers: { rangeDelta: 1 } },
    { id: 'behavior_snare_t4', name: '絆足', kind: 'suffix', pool: 'behavior', tier: 'T4', appliesTo: ['weapon', 'feet'], itemLevelMin: 32, skillTags: ['control'], sourceTags: ['forest', 'trap', 'gathering'], behavior: 'delay_approach', trigger: 'on_hit', condition: 'approaching_target', skillModifiers: { arrivalTicksDelta: 1 } },
    { id: 'behavior_execute_t5', name: '處決', kind: 'behavior', pool: 'behavior', tier: 'T5', appliesTo: ['weapon'], itemLevelMin: 45, skillTags: ['burst'], sourceTags: ['boss', 'undead', 'dungeon'], behavior: 'execute_low_hp', trigger: 'on_hit', condition: 'low_hp', internalCooldownRounds: 3, skillModifiers: { damagePct: 10 } },
  ],
  class: [
    { id: 'class_swordsman_t2', name: '戰士節奏', kind: 'prefix', pool: 'class', tier: 'T2', appliesTo: ['weapon', 'ring'], itemLevelMin: 8, classTags: ['swordsman', 'knight', 'berserker', 'sword_saint'], stats: { atk: 5 }, resourceModifiers: { rageGain: 2 } },
    { id: 'class_mage_t3', name: '法師迴路', kind: 'prefix', pool: 'class', tier: 'T3', appliesTo: ['weapon', 'earring'], itemLevelMin: 18, classTags: ['mage', 'archmage', 'warlock', 'chronomancer'], stats: { matk: 6 }, resourceModifiers: { mpRegen: 2 } },
    { id: 'class_ranger_t4', name: '遊俠步伐', kind: 'prefix', pool: 'class', tier: 'T4', appliesTo: ['weapon', 'feet'], itemLevelMin: 32, classTags: ['ranger', 'marksman', 'assassin', 'beast_master'], stats: { dex: 5 }, resourceModifiers: { focusRegen: 2 } },
    { id: 'class_priest_t5', name: '祭司信念', kind: 'prefix', pool: 'class', tier: 'T5', appliesTo: ['weapon', 'necklace'], itemLevelMin: 45, classTags: ['priest', 'high_priest', 'druid', 'inquisitor'], stats: { mdef: 10 }, resourceModifiers: { faithDelta: 1 } },
  ],
};

export function generateEquipmentInstance(
  baseItem: BaseEquipmentDef,
  options: GenerateEquipmentInstanceOptions = {},
): EquipmentItemInstance {
  const random = options.random ?? Math.random;
  const quality = rollItemQuality(options.luk ?? 0, options.sourceTags ?? baseItem.sourceTags, random, options.qualityBonus ?? 0);
  const affixes = rollAffixes(baseItem, quality, options.classId, random, options.preferredAffixTags, options.preferredAffixWeight, options.sourceTags ?? baseItem.sourceTags, baseItem.zoneTags);
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
  const quality = rollItemQuality(options.luk ?? 0, options.sourceTags ?? baseItem.sourceTags, random, options.qualityBonus ?? 0);
  const affixes = rollAffixes(baseItem, quality, options.classId, random, options.preferredAffixTags, options.preferredAffixWeight, options.sourceTags ?? baseItem.sourceTags, baseItem.zoneTags);
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
  qualityBonus = 0,
): ItemQuality {
  const lukBonus = Math.min(0.05, Math.max(0, luk) * 0.0005);
  const materialBonus = Math.min(0.25, Math.max(0, qualityBonus));
  const canRollMythic = sourceTags.some(tag => tag === 'world_boss' || tag === 'season' || tag === 'endgame');
  const roll = random();
  const thresholds: [ItemQuality, number][] = [
    ['mythic', canRollMythic ? 0.002 + lukBonus * 0.1 + materialBonus * 0.02 : 0],
    ['legendary', 0.01 + lukBonus * 0.2 + materialBonus * 0.05],
    ['epic', 0.04 + lukBonus * 0.4 + materialBonus * 0.15],
    ['rare', 0.12 + lukBonus + materialBonus * 0.35],
    ['fine', 0.35 + lukBonus + materialBonus * 0.45],
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
    .filter(affix => affix.itemLevelMin === undefined || baseItem.level >= affix.itemLevelMin)
    .filter(affix => affix.itemLevelMax === undefined || baseItem.level <= affix.itemLevelMax)
    .filter(affix => !affix.weaponTypes || !baseItem.weaponType || affix.weaponTypes.includes(baseItem.weaponType))
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
  preferredAffixTags: SkillTag[] = [],
  preferredAffixWeight = 4,
  sourceTags: string[] = [],
  zoneTags: string[] = [],
): AffixDef[] {
  const rule = QUALITY_RULES[quality];
  const [min, max] = rule.affixCount;
  const count = min === max ? min : min + Math.floor(random() * (max - min + 1));
  if (count === 0) return [];

  const pool = [...getEligibleAffixes(baseItem, quality, classId)];
  if (pool.length < count) {
    const existingIds = new Set(pool.map(affix => affix.id));
    const rule = QUALITY_RULES[quality];
    pool.push(...Object.values(AFFIX_POOLS)
      .flat()
      .filter(affix => !existingIds.has(affix.id))
      .filter(affix => affix.appliesTo.includes(baseItem.equipSlot))
      .filter(affix => affix.itemLevelMin === undefined || baseItem.level >= affix.itemLevelMin)
      .filter(affix => affix.itemLevelMax === undefined || baseItem.level <= affix.itemLevelMax)
      .filter(affix => !affix.weaponTypes || !baseItem.weaponType || affix.weaponTypes.includes(baseItem.weaponType))
      .filter(affix => affix.pool !== 'class' || (!!rule.allowsClassAffixes && !!classId && affix.classTags?.includes(classId))));
  }
  const selected: AffixDef[] = [];
  while (selected.length < count && pool.length > 0) {
    const index = pickWeightedAffixIndex(pool, preferredAffixTags, preferredAffixWeight, sourceTags, zoneTags, random);
    const [candidate] = pool.splice(index, 1);
    selected.push(candidate);
  }

  if (rule.requiresHighTier && !selected.some(affix => TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier))) {
    const highTier = pool.find(affix => TIER_ORDER.indexOf(affix.tier) >= TIER_ORDER.indexOf(rule.minTier));
    if (highTier) selected[0] = highTier;
  }

  return selected;
}

function pickWeightedAffixIndex(
  pool: AffixDef[],
  preferredAffixTags: SkillTag[],
  preferredAffixWeight: number,
  sourceTags: string[],
  zoneTags: string[],
  random: () => number,
): number {
  const preferred = new Set(preferredAffixTags);
  const source = new Set(sourceTags);
  const zone = new Set(zoneTags);
  const weights = pool.map((affix) => {
    const preferredWeight = (affix.skillTags ?? []).some(tag => preferred.has(tag)) ? Math.max(1, preferredAffixWeight) : 1;
    const sourceWeight = (affix.sourceTags ?? []).some(tag => source.has(tag)) ? 4 : 0;
    const zoneWeight = (affix.zoneTags ?? []).some(tag => zone.has(tag)) ? 3 : 0;
    return preferredWeight + sourceWeight + zoneWeight;
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = random() * total;
  for (let i = 0; i < weights.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return i;
  }
  return pool.length - 1;
}

function tagsMatch(candidateTags: string[], requiredTags?: string[]): boolean {
  if (!requiredTags || requiredTags.length === 0) return true;
  return requiredTags.some(tag => candidateTags.includes(tag));
}
