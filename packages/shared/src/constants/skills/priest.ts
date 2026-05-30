import type { RawSkillDef } from './types.js';

export const PRIEST_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  祭司 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  heal: {
    id: 'heal', name: '治癒', englishName: 'Heal',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '信仰 +15，條件信仰 <= 85；治療自己或隊友。低血量目標獲得額外治療，會把信仰推向慈悲端。',
    shortDescription: '信仰 +15，治療自己或隊友，低血量目標效果提高。',
    fullDescription: '信仰 +15，冷卻 1，條件信仰 <= 85。治療自己或單一隊友，基礎治療倍率 200%；目標 HP 低於 40% 時治療量提高。',
    tags: ['heal', 'support', 'resource', 'light'],
    usageContext: 'both',
    special: { isHeal: true, faithDelta: 15, faithMax: 85, lowHpHealBonus: true },
  },

purify: {
    id: 'purify', name: '淨化', englishName: 'Purify',
    classId: 'priest', learnLevel: 5, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 2,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '友方信仰 +8，條件信仰 <= 92；移除毒、燃燒、減速等負面效果。對 undead 目標可改為信仰 -8 並造成少量光傷。',
    shortDescription: '移除友方負面效果；對 undead 可改為光傷。',
    fullDescription: '友方施放時信仰 +8、冷卻 2、條件信仰 <= 92，移除目標毒、燃燒、減速等負面效果。對 undead 目標施放時信仰 -8、條件信仰 >= 8，造成少量光傷。',
    tags: ['support', 'dispel', 'resource', 'light'],
    usageContext: 'both',
    special: { removeDebuffs: true, faithDelta: 8, faithMax: 92, undeadFaithDelta: -8, undeadDamage: true },
  },

holy_light: {
    id: 'holy_light', name: '聖光', englishName: 'Holy Light',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '信仰 -12，條件信仰 >= 12；本房單體光屬性傷害，對暗屬性與 undead 目標效果提高。用來把信仰從慈悲端拉回中線。',
    shortDescription: '信仰 -12，本房單體光傷，對暗/undead 更強。',
    fullDescription: '信仰 -12，冷卻 1，條件信仰 >= 12。攻擊本房單體，造成 150% 光屬性魔法傷害；對暗屬性與 undead 目標傷害提高。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'magical', 'light'],
    special: { faithDelta: -12, faithMin: 12, undeadMultiplier: 1.5, darkMultiplier: 1.25 },
  },

blessing: {
    id: 'blessing', name: '懺悔', englishName: 'Contrition',
    classId: 'priest', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 10,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '瞬發不佔 tick，冷卻 10 tick；將目前信仰翻轉到另一端。例如 0 變 100，90 變 10。',
    shortDescription: '瞬發翻轉信仰軸，0 變 100、90 變 10。',
    fullDescription: '冷卻 10 tick。瞬發不佔 tick，將目前信仰改為 maxFaith - currentFaith；可在戰鬥中與平時使用。',
    tags: ['support', 'resource', 'light'],
    usageContext: 'both',
    special: { faithInvert: true, instant: true },
  },

priest_holy_bell: {
    id: 'priest_holy_bell', name: '聖鐘震盪', englishName: 'Holy Bell Resonance',
    classId: 'priest', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 8,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '信仰 -25，條件信仰 >= 25；本地與東西南北相鄰房暗屬性與 undead 怪物受光傷。普通怪也會被驚動，undead 目標 arrivalTicks = 2。',
    shortDescription: '本地與四方反邪惡光傷，undead 目標 arrivalTicks = 2。',
    fullDescription: '信仰 -25，冷卻 8，條件信仰 >= 25。影響本地與東西南北相鄰房；暗屬性與 undead 怪物受到 100% 光屬性魔法傷害，undead 目標 arrivalTicks = 2；普通怪可能被驚動。',
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'light'],
    usageContext: 'both',
    special: { faithDelta: -25, faithMin: 25, crossRoom: true, areaScope: 'adjacent_cardinal', includeCurrentRoom: true, arrivalTicks: 2, undeadOnlyBonus: true },
  },

mass_heal: {
    id: 'mass_heal', name: '群體治癒', englishName: 'Mass Heal',
    classId: 'priest', learnLevel: 12, type: 'active',
    targetType: 'all_allies', resourceCost: 0, cooldown: 4,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '信仰 +25，條件信仰 <= 75；治療全隊少量 HP。目標低於 40% HP 時治療量提高，用於怪潮抵達後穩住隊伍。',
    shortDescription: '信仰 +25，治療全隊，低血量目標效果提高。',
    fullDescription: '信仰 +25，冷卻 4，條件信仰 <= 75。治療全隊，基礎治療倍率 100%；目標 HP 低於 40% 時治療量提高。',
    tags: ['heal', 'support', 'resource', 'light'],
    special: { isHeal: true, faithDelta: 25, faithMax: 75, lowHpHealBonus: true },
  },

divine_grace: {
    id: 'divine_grace', name: '驅邪結界', englishName: 'Exorcism Ward',
    classId: 'priest', learnLevel: 16, type: 'active',
    targetType: 'all_enemies', resourceCost: 0, cooldown: 6,
    damageType: 'magical', element: 'light', multiplier: 0.8,
    description: '信仰 -18，條件信仰 >= 18；指定出口設置 4 tick 結界。暗屬性與 undead 怪物抵達時受光傷並 arrivalTicks +1，普通怪抵達時命中 -8%。',
    shortDescription: '指定出口結界，邪惡怪物抵達時受光傷且 arrivalTicks +1。',
    fullDescription: '信仰 -18，冷卻 6，條件信仰 >= 18。指定出口設置 4 tick 結界；暗屬性與 undead 怪物抵達時受到 80% 光屬性魔法傷害並 arrivalTicks +1，普通怪抵達時命中 -8%。',
    effects: [{ type: 'atk_down', value: 8, duration: 1 }],
    tags: ['damage', 'control', 'defense', 'resource', 'magical', 'light'],
    usageContext: 'both',
    special: { faithDelta: -18, faithMin: 18, trapExit: true, arrivalTicksDelta: 1, duration: 4 },
  },
};
