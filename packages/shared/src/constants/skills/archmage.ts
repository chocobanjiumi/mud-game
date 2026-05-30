import type { RawSkillDef } from './types.js';

export const ARCHMAGE_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  元素鑄師 (Lv 20+) - 法師系二轉・鑄造框
  // ════════════════════════════════════════════

  forging_frame: {
    id: 'forging_frame', name: '鑄造框', englishName: 'Forging Frame',
    classId: 'archmage', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '元素鑄師的核心系統。每 tick 可將兩個元素技能放入鑄造框，組合產生元素反應。不同元素的組合會觸發不同的反應效果，威力遠超單獨施放。',
    shortDescription: '每 tick 放入 2 個元素技能組合反應。🔥+🧊=蒸氣爆發、🧊+⚡=凍電鏈、⚡+🔥=熔岩地帶等。',
    fullDescription: '被動。每 tick 可放入 2 個元素技能組合反應：🔥+🧊=蒸氣爆發（AoE+致盲）、🧊+⚡=凍電鏈（全體+暈眩）、⚡+🔥=熔岩地帶（DoT）、🔥+🔥=烈焰強化（單體高傷）、🧊+🧊=冰晶護甲（護盾）、⚡+⚡=雷光反擊（反擊buff）。單放1個為弱版。',
    tags: ['passive', 'buff'],
    special: { forgingFrame: true, dualCast: true, reactionTable: { 'fire+ice': 'steam_burst', 'ice+lightning': 'frozen_chain', 'lightning+fire': 'magma_field', 'fire+fire': 'flame_enhance', 'ice+ice': 'ice_armor', 'lightning+lightning': 'thunder_counter' } },
  },

forge_fire: {
    id: 'forge_fire', name: '火元素', englishName: 'Fire Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'fire', multiplier: 0.8,
    description: '凝聚火焰元素。單獨施放為基礎火傷；放入鑄造框與其他元素組合時，作為火屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 火傷。與🧊組合=蒸氣爆發、與⚡組合=熔岩地帶、🔥+🔥=烈焰強化。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 火屬性魔法傷害。放入鑄造框時作為火元素原料。',
    tags: ['damage', 'single_target', 'magical', 'fire'],
    special: { forgeElement: 'fire' },
  },

forge_ice: {
    id: 'forge_ice', name: '冰元素', englishName: 'Ice Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'ice', multiplier: 0.8,
    description: '凝聚冰霜元素。單獨施放為基礎冰傷加微減速；放入鑄造框與其他元素組合時，作為冰屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 冰傷+微減速。與🔥組合=蒸氣爆發、與⚡組合=凍電鏈、🧊+🧊=冰晶護甲。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 冰屬性魔法傷害 + 減速。放入鑄造框時作為冰元素原料。',
    effects: [{ type: 'slow', value: 15, duration: 1 }],
    tags: ['damage', 'single_target', 'defense', 'magical', 'ice'],
    special: { forgeElement: 'ice' },
  },

forge_lightning: {
    id: 'forge_lightning', name: '雷元素', englishName: 'Lightning Element',
    classId: 'archmage', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 0,
    damageType: 'magical', element: 'lightning', multiplier: 0.8,
    description: '凝聚雷電元素。單獨施放為基礎雷傷；放入鑄造框與其他元素組合時，作為雷屬性原料產生元素反應。',
    shortDescription: '鑄造原料。單放=80% 雷傷。與🧊組合=凍電鏈、與🔥組合=熔岩地帶、⚡+⚡=雷光反擊。',
    fullDescription: '消耗 8 MP，無冷卻。鑄造框原料。單放=80% 雷屬性魔法傷害。放入鑄造框時作為雷元素原料。',
    tags: ['damage', 'single_target', 'magical', 'lightning'],
    special: { forgeElement: 'lightning' },
  },

elemental_mastery_passive: {
    id: 'elemental_mastery_passive', name: '元素精通', englishName: 'Elemental Mastery',
    classId: 'archmage', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對元素鑄造的深入理解讓反應效果更加強烈，同時降低鑄造的魔力消耗。',
    shortDescription: '鑄造反應傷害 +20%，鑄造 MP 消耗 -15%。',
    fullDescription: '被動。鑄造框產生的元素反應傷害 +20%，鑄造時 MP 消耗 -15%。',
    tags: ['passive', 'buff', 'magical'],
    special: { forgeReactionBonus: 20, forgeMpReduction: 15 },
  },

elemental_overload: {
    id: 'elemental_overload', name: '元素超載', englishName: 'Elemental Overload',
    classId: 'archmage', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將魔力灌注到鑄造框中超載運轉，下一次鑄造反應的效果將翻倍——傷害、持續時間、影響範圍全部加倍。',
    shortDescription: '下次鑄造反應效果 ×2（傷害/持續/範圍翻倍）。',
    fullDescription: '消耗 15 MP，冷卻 6。下一次鑄造框反應效果 ×2（傷害翻倍、持續翻倍、範圍翻倍）。',
    tags: ['buff', 'burst'],
    special: { nextForgeDoubled: true },
  },

triple_forge: {
    id: 'triple_forge', name: '三重鑄造', englishName: 'Triple Forge',
    classId: 'archmage', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 3.0,
    description: '突破鑄造框的限制，本 tick 放入三個元素。火+冰+雷三元素同時共鳴，引發毀滅性的元素風暴。',
    shortDescription: '本 tick 放入 3 個元素。🔥+🧊+⚡ = 元素風暴（全體 300% 三屬傷害）。',
    fullDescription: '消耗 30 MP，冷卻 8。本 tick 鑄造框可放入 3 個元素。🔥+🧊+⚡ = 元素風暴，對全體造成 300% 三屬性魔法傷害。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { castTime: 1, tripleForge: true },
  },

elemental_return: {
    id: 'elemental_return', name: '元素回流', englishName: 'Elemental Return',
    classId: 'archmage', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在鑄造反應中編入回流術式，讓元素反應命中時回收部分消耗的魔力。',
    shortDescription: '3 tick 鑄造反應命中時回復反應 MP 消耗的 30%。',
    fullDescription: '消耗 10 MP，冷卻 5。3 tick 內鑄造框反應命中時回復該反應 MP 消耗的 30%。',
    tags: ['support', 'resource'],
    special: { forgeMpReturn: 30, duration: 3 },
  },

spell_forge: {
    id: 'spell_forge', name: '破法鑄造', englishName: 'Spell Forge',
    classId: 'archmage', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'magical', element: 'none', multiplier: 1.5,
    description: '鑄造框可放入「破法」作為特殊元素。破法與任意元素組合 = 打斷敵人施法、驅散護盾，並附帶該元素的傷害。',
    shortDescription: '鑄造框放入破法+元素 = 打斷+驅散+該元素傷害 150%。',
    fullDescription: '消耗 20 MP，冷卻 5。鑄造框可放入「破法」作為元素。破法+任意元素 = 打斷施法、驅散護盾、150% 該元素魔法傷害。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'magical'],
    special: { forgeElement: 'dispel', interrupt: true, dispelShield: true },
  },

apocalypse_forge: {
    id: 'apocalypse_forge', name: '天啟鑄造', englishName: 'Apocalypse Forge',
    classId: 'archmage', learnLevel: 50, type: 'active',
    targetType: 'all_enemies', resourceCost: 60, cooldown: 12,
    damageType: 'magical', element: 'none', multiplier: 4.0,
    description: '消耗大量魔力，鑄造框放入三個相同元素。🔥🔥🔥=隕石降臨、🧊🧊🧊=絕對零度、⚡⚡⚡=雷神降臨。每種終極反應都有獨特的毀滅效果。',
    shortDescription: '60 MP。放入 3 個同元素：🔥🔥🔥=隕石（AoE 燃燒）/ 🧊🧊🧊=絕對零度（全體凍結）/ ⚡⚡⚡=雷神（全體麻痺+連鎖）。',
    fullDescription: '消耗 60 MP，冷卻 12。鑄造框放入 3 個同元素觸發終極反應：🔥🔥🔥=隕石降臨（400% 火傷+燃燒3tick）、🧊🧊🧊=絕對零度（400% 冰傷+凍結2tick）、⚡⚡⚡=雷神降臨（400% 雷傷+麻痺+全體連鎖）。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { castTime: 2, apocalypseForge: true, tripleForge: true },
  },
};
