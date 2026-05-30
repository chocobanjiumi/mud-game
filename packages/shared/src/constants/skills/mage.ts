import type { RawSkillDef } from './types.js';

export const MAGE_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  法師 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  magic_missile: {
    id: 'magic_missile', name: '魔法飛彈', englishName: 'Magic Missile',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'none', multiplier: 1.0,
    description: '消耗 8 MP；本房單體穩定魔法傷害，命中可靠。這是法師在高消耗法術之間填補 tick 的基本攻擊。',
    shortDescription: '消耗 8 MP 的本房單體穩定魔法攻擊。',
    fullDescription: '消耗 8 MP，冷卻 0。攻擊本房單體，造成 100% 魔法傷害；命中穩定，適合填補施法空窗。',
    tags: ['damage', 'single_target', 'resource', 'magical'],
  },

fireball: {
    id: 'fireball', name: '火球術', englishName: 'Fireball',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 1,
    damageType: 'magical', element: 'fire', multiplier: 1.6,
    description: '消耗 15 MP；本房或指定相鄰方向單體火傷。未偵查相鄰房時可盲放，隨機命中 1 隻未知目標；隔房命中後目標 arrivalTicks = 2。',
    shortDescription: '單體火傷；未偵查隔房可盲放隨機單體。',
    fullDescription: '消耗 15 MP，冷卻 1。攻擊本房或指定相鄰方向單體，造成 160% 火屬性魔法傷害；未偵查相鄰房時無法指定目標，會隨機命中該房 1 隻怪物。隔房命中後目標進入 approaching，arrivalTicks = 2。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'magical', 'fire'],
    special: { crossRoom: true, arrivalTicks: 2, blindCrossRoomRandomTarget: true },
  },

frost_nova: {
    id: 'frost_nova', name: '寒冰新星', englishName: 'Frost Nova',
    classId: 'mage', learnLevel: 5, type: 'active',
    targetType: 'all_enemies', resourceCost: 22, cooldown: 3,
    damageType: 'magical', element: 'ice', multiplier: 1.0,
    description: '消耗 22 MP；本房所有戰鬥怪物受冰傷並 slow 1 tick。若目標正在 approaching，arrivalTicks +1。',
    shortDescription: '本房 AoE 冰傷與 slow；approaching 目標 arrivalTicks +1。',
    fullDescription: '消耗 22 MP，冷卻 3。對本房所有戰鬥怪物造成 100% 冰屬性魔法傷害並 slow 1 tick；若命中 approaching 目標，arrivalTicks +1。',
    effects: [{ type: 'slow', value: 30, duration: 2 }],
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'ice'],
    special: { arrivalTicksDelta: 1 },
  },

mana_shield: {
    id: 'mana_shield', name: '魔力護盾', englishName: 'Mana Shield',
    classId: 'mage', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 12 MP；2 tick 內受到傷害的 40% 轉為 MP 消耗，並降低詠唱被小傷害打斷的風險。',
    shortDescription: '2 tick 內將 40% 傷害轉為 MP 消耗，保護施法。',
    fullDescription: '消耗 12 MP，冷卻 4。自己獲得 2 tick 魔力護盾，受到傷害的 40% 轉為 MP 消耗，並降低詠唱被小傷害打斷的機率。',
    effects: [{ type: 'mana_shield', value: 40, duration: 2 }],
    tags: ['defense', 'resource', 'magical'],
  },

lightning: {
    id: 'lightning', name: '閃電束', englishName: 'Lightning Beam',
    classId: 'mage', learnLevel: 12, type: 'active',
    targetType: 'all_enemies', resourceCost: 28, cooldown: 3,
    damageType: 'magical', element: 'lightning', multiplier: 1.15,
    description: '消耗 28 MP；指定方向直線電傷，最多命中 3 隻。若命中相鄰房目標，目標進入 approaching，arrivalTicks = 2。',
    shortDescription: '指定方向直線電傷，最多 3 隻；隔房命中 arrivalTicks = 2。',
    fullDescription: '消耗 28 MP，冷卻 3。指定方向直線攻擊最多 3 隻，造成 115% 雷屬性魔法傷害；若命中相鄰房目標，目標進入 approaching，arrivalTicks = 2。',
    tags: ['damage', 'aoe', 'resource', 'magical', 'lightning'],
    special: { crossRoom: true, maxTargets: 3, arrivalTicks: 2 },
  },

meditation: {
    id: 'meditation', name: '魔力回流', englishName: 'Mana Return',
    classId: 'mage', learnLevel: 16, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 18 MP；4 tick 內每次法術命中回復 6 MP，命中 approaching 目標額外回復 4 MP。用來支撐高消耗爆發窗口。',
    shortDescription: '4 tick 內法術命中回復 MP，命中 approaching 目標額外回復。',
    fullDescription: '消耗 18 MP，冷卻 6。自己獲得 4 tick 魔力回流；每次法術命中回復 6 MP，若命中 approaching 目標額外回復 4 MP。',
    tags: ['support', 'resource', 'buff', 'magical'],
    effects: [{ type: 'mana_regen', value: 6, duration: 4 }],
    special: { mpGainOnSpellHit: 6, mpGainOnApproachingHit: 4, duration: 4 },
  },

elemental_mastery: {
    id: 'elemental_mastery', name: '暴風雪', englishName: 'Blizzard',
    classId: 'mage', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 40, cooldown: 8,
    damageType: 'magical', element: 'ice', multiplier: 1.2,
    description: '消耗 40 MP；東西南北相鄰房怪物受冰傷，所有存活怪物進入 approaching，arrivalTicks = 3。這是高風險四方 AoE。',
    shortDescription: '四方相鄰房冰傷，存活怪物 arrivalTicks = 3 後接近。',
    fullDescription: '消耗 40 MP，冷卻 8。影響東西南北相鄰房，對怪物造成 120% 冰屬性魔法傷害；所有存活怪物進入 approaching，arrivalTicks = 3。',
    effects: [{ type: 'slow', value: 20, duration: 2 }],
    tags: ['damage', 'aoe', 'control', 'resource', 'magical', 'ice'],
    special: { crossRoom: true, areaScope: 'adjacent_cardinal', arrivalTicks: 3 },
  },
};
