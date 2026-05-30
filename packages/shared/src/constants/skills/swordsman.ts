import type { RawSkillDef } from './types.js';

export const SWORDSMAN_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  戰士 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  warrior_slash: {
    id: 'warrior_slash', name: '斬擊', englishName: 'Slash',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '消耗 0 怒氣；本房單體攻擊，命中後獲得 8 怒氣。戰士用它穩定建立怒氣，讓後續血性復甦、橫掃與防禦技能能接上節奏。',
    shortDescription: '本房單體攻擊，命中後獲得 8 怒氣。',
    fullDescription: '消耗 0 怒氣，冷卻 0。攻擊本房目前戰鬥目標，造成 100% 物理傷害；命中後獲得 8 怒氣。適合在怒氣不足時填補 tick。',
    tags: ['damage', 'single_target', 'resource', 'physical'],
    special: { resourceGainOnHit: 8 },
  },

power_strike: {
    id: 'power_strike', name: '破甲重擊', englishName: 'Armor Breaker',
    classId: 'swordsman', learnLevel: 12, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '消耗 35 怒氣；本房單體中高傷害，附加 3 tick 破甲 -12%。對已被控制鎖定的目標破甲效果更穩，適合在隊伍集火前先降低目標防禦。',
    shortDescription: '本房單體重擊，附加 3 tick 破甲 -12%。',
    fullDescription: '消耗 35 怒氣，冷卻 3。攻擊本房單體，造成 150% 物理傷害並附加 3 tick 破甲 -12%；對已被 taunt 狀態鎖定的目標命中時額外獲得 5 怒氣。',
    effects: [{ type: 'def_down', value: 12, duration: 3 }],
    tags: ['damage', 'single_target', 'burst', 'debuff', 'resource', 'physical'],
    special: { resourceGainOnHit: 5, bonusAgainstTaunted: true },
  },

blade_aura: {
    id: 'blade_aura', name: '橫掃', englishName: 'Sweep',
    classId: 'swordsman', learnLevel: 5, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '消耗 25 怒氣；瞬發攻擊本房戰鬥中的最多 3 隻怪物，不消耗 tick。這是戰士處理多怪壓力的第一個範圍工具。',
    shortDescription: '瞬發攻擊本房最多 3 隻戰鬥怪物。',
    fullDescription: '消耗 25 怒氣，冷卻 0。瞬發對本房戰鬥中最多 3 隻敵人造成 80% 物理傷害；不消耗 tick，不影響相鄰房。',
    special: { maxTargets: 3, instant: true },
  },

iron_wall: {
    id: 'iron_wall', name: '防禦架勢', englishName: 'Guard Stance',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '消耗 0 怒氣；自己進入 1 tick 防禦，受到傷害 -35%，被命中時獲得 12 怒氣。用來把敵人的攻勢轉為戰士資源。',
    shortDescription: '1 tick 內受到傷害 -35%，被命中時獲得 12 怒氣。',
    fullDescription: '消耗 0 怒氣，冷卻 2。自己獲得 1 tick 防禦架勢，受到傷害 -35%；架勢期間每次被命中獲得 12 怒氣。',
    effects: [{ type: 'damage_reduction', value: 35, duration: 1 }],
    special: { resourceGainOnDamaged: 12 },
  },

taunt: {
    id: 'taunt', name: '血性復甦', englishName: 'Blood Resolve',
    classId: 'swordsman', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 20 怒氣；瞬發回復最大 HP 10%，戰鬥中與平時皆可使用，不消耗 tick。',
    shortDescription: '瞬發消耗 20 怒氣，回復最大 HP 10%。',
    fullDescription: '消耗 20 怒氣，冷卻 3。瞬發回復最大 HP 10%；戰鬥中不消耗 tick，平時也可使用。HP 已滿時不消耗怒氣。',
    tags: ['heal', 'defense', 'resource'],
    usageContext: 'both',
    special: { healPercent: 10, instant: true },
  },

war_cry: {
    id: 'war_cry', name: '極限怒吼', englishName: 'Limit Roar',
    classId: 'swordsman', learnLevel: 8, type: 'active',
    targetType: 'all_enemies', resourceCost: 70, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 70 怒氣；東西南北相鄰房可移動怪物立刻進入本房並加入戰鬥，arrivalTicks = 0。這會瞬間製造高壓怪潮，但自己 2 tick 受到傷害 -25%。',
    shortDescription: '四方相鄰房拉怪進本房，arrivalTicks = 0，自己 2 tick 減傷。',
    fullDescription: '消耗 70 怒氣，冷卻 8。影響東西南北相鄰房；可移動怪物 arrivalTicks = 0 並立刻進入本房加入戰鬥。施放後自己獲得 2 tick 傷害 -25%。',
    effects: [{ type: 'damage_reduction', value: 25, duration: 2 }],
    tags: ['control', 'aoe', 'defense', 'resource'],
    special: { crossRoom: true, areaScope: 'adjacent_cardinal', arrivalTicks: 0 },
  },

counter_stance: {
    id: 'counter_stance', name: '堅守陣線', englishName: 'Hold the Line',
    classId: 'swordsman', learnLevel: 16, type: 'active',
    targetType: 'all_allies', resourceCost: 45, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '消耗 45 怒氣；3 tick 內你受到傷害 -20%，隊友受到本房戰鬥怪物傷害 -10%。若 approaching 怪物抵達，你在首 tick 獲得額外格擋。',
    shortDescription: '3 tick 團隊減壓，你減傷 -20%，隊友受本房怪物傷害 -10%。',
    fullDescription: '消耗 45 怒氣，冷卻 6。自己 3 tick 受到傷害 -20%，隊友 3 tick 受到本房戰鬥怪物傷害 -10%；若有 approaching 怪物抵達，首 tick 額外提高你的格擋判定。',
    effects: [{ type: 'damage_reduction', value: 20, duration: 3 }],
    tags: ['support', 'defense', 'resource'],
    special: { allyDamageReduction: 10, approachingBlockBonus: true },
  },
};
