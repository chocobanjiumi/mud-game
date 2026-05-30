import type { RawSkillDef } from './types.js';

export const WARLOCK_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  魔偶師 (Lv 20+) - 法師系二轉・魔偶系統
  // ════════════════════════════════════════════

  golem_craft: {
    id: 'golem_craft', name: '魔偶製造', englishName: 'Golem Craft',
    classId: 'warlock', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '魔偶師的核心系統。可製造並指揮一個魔偶作為獨立戰鬥實體。魔偶有自己的 HP（施法者 50%），每 tick 獨立行動，可被賦予火/冰/雷元素。',
    shortDescription: '可指揮一個魔偶。魔偶 HP=施法者50%，每 tick 獨立行動，可賦予元素、切換模式、跨房派遣。',
    fullDescription: '被動。定義魔偶系統：魔偶為獨立戰鬥實體，HP = 施法者 50%，每 tick 獨立行動。可被賦予元素（火/冰/雷）改變攻擊屬性，可切換攻擊/防禦/充能模式，可派遣到相鄰房間。被擊毀需重新召喚。',
    tags: ['passive', 'summon'],
    special: { golemSystem: true, golemHpRatio: 0.5 },
  },

summon_golem: {
    id: 'summon_golem', name: '召喚魔偶', englishName: 'Summon Golem',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以魔力塑造一個元素魔偶。可指定火（高傷）、冰（減速）或雷（連鎖）屬性。魔偶在本房自動攻擊敵人。',
    shortDescription: '召喚魔偶，指定火/冰/雷屬性。魔偶自動攻擊本房敵人。',
    fullDescription: '消耗 20 MP，冷卻 5。召喚魔偶到本房。可指定元素（火=高傷、冰=減速、雷=連鎖）改變攻擊屬性。魔偶以攻擊模式開始行動。',
    tags: ['summon', 'support'],
    special: { summonGolem: true, elementChoice: ['fire', 'ice', 'lightning'] },
  },

golem_command: {
    id: 'golem_command', name: '魔偶指令', englishName: 'Golem Command',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '切換魔偶的行為模式。攻擊模式主動出擊造成傷害；防禦模式替施法者擋傷；充能模式停止行動但為施法者回復 MP。',
    shortDescription: '切換魔偶模式：攻擊（80%魔傷/tick）/ 防禦（替你擋30%傷害）/ 充能（回復8 MP/tick）。',
    fullDescription: '消耗 0 MP，冷卻 2。切換魔偶行為模式：攻擊（每tick 對敵人造成 80% 魔法傷害）/ 防禦（替施法者承受 30% 傷害）/ 充能（不行動，施法者回復 8 MP/tick）。',
    tags: ['support', 'defense'],
    special: { golemMode: true, modes: { attack: { damage: 0.8 }, defense: { redirect: 0.3 }, charge: { mpRegen: 8 } } },
  },

golem_dispatch: {
    id: 'golem_dispatch', name: '魔偶派遣', englishName: 'Golem Dispatch',
    classId: 'warlock', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將魔偶派遣到指定相鄰房間。魔偶在那邊自動戰鬥，可隨時召回。跨房的魔偶充當你的眼睛和拳頭。',
    shortDescription: '把魔偶派到相鄰房間自動戰鬥。可隨時召回。',
    fullDescription: '消耗 10 MP，冷卻 3。將魔偶派遣到指定相鄰房間，魔偶在該房間自動戰鬥。可再次使用召回魔偶。',
    tags: ['summon', 'support'],
    special: { golemDispatch: true, crossRoom: true },
  },

element_infuse: {
    id: 'element_infuse', name: '元素賦予', englishName: 'Element Infuse',
    classId: 'warlock', learnLevel: 25, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'magical', element: 'none', multiplier: 1.0,
    description: '戰鬥中更換魔偶的元素屬性。切換瞬間魔偶釋放舊元素的 AoE 爆發，隨即被新元素包覆。',
    shortDescription: '更換魔偶元素。切換時產生舊元素 AoE 爆發（100% 魔傷）。',
    fullDescription: '消耗 12 MP，冷卻 4。更換魔偶元素（火/冰/雷），不用重新召喚。切換瞬間產生舊元素的 AoE 爆發，對魔偶所在房間敵人造成 100% 魔法傷害。',
    tags: ['damage', 'aoe', 'magical'],
    special: { golemElementSwitch: true },
  },

golem_enhance: {
    id: 'golem_enhance', name: '魔偶強化', englishName: 'Golem Enhancement',
    classId: 'warlock', learnLevel: 29, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '魔偶製造工藝的精進讓魔偶更加堅固強大。魔偶的 HP 上限大幅提升，攻擊模式的傷害也隨之增強。',
    shortDescription: '魔偶 HP 上限提升至施法者 80%，攻擊模式傷害 +30%。',
    fullDescription: '被動。魔偶 HP 上限從施法者 50% 提升至 80%，攻擊模式傷害 +30%。',
    tags: ['passive', 'buff', 'summon'],
    special: { golemHpRatio: 0.8, golemAttackBonus: 30 },
  },

double_command: {
    id: 'double_command', name: '雙重指令', englishName: 'Double Command',
    classId: 'warlock', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以強化的魔力連結驅動魔偶超頻運轉，讓魔偶在同一 tick 內執行兩次行動。',
    shortDescription: '本 tick 魔偶行動兩次（攻擊×2 / 防禦+反擊 / 充能翻倍）。',
    fullDescription: '消耗 18 MP，冷卻 5。本 tick 魔偶執行兩次行動：攻擊模式攻擊兩次、防禦模式防禦+反擊、充能模式 MP 回復翻倍。',
    tags: ['buff', 'burst'],
    special: { golemDoubleAction: true },
  },

golem_link: {
    id: 'golem_link', name: '魔偶連結', englishName: 'Golem Link',
    classId: 'warlock', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與魔偶建立深層魔力連結，共享視野。若魔偶在相鄰房間，你的技能可以透過魔偶施放到魔偶所在的房間。',
    shortDescription: '3 tick 共享視野。魔偶在相鄰房時，你的技能可透過魔偶跨房施放。',
    fullDescription: '消耗 20 MP，冷卻 6。3 tick 魔偶和你共享視野。魔偶在相鄰房間時，你的所有技能可透過魔偶施放到魔偶所在的房間。',
    tags: ['support', 'buff'],
    special: { golemLink: true, crossRoomCast: true, duration: 3 },
  },

golem_detonate: {
    id: 'golem_detonate', name: '魔偶自爆', englishName: 'Golem Detonate',
    classId: 'warlock', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 15, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 2.5,
    description: '引爆魔偶核心，產生毀滅性的元素爆炸。魔偶剩餘 HP 越高，爆炸傷害越大。魔偶在爆炸後銷毀。',
    shortDescription: '引爆魔偶，AoE 250% 魔傷 + 打斷（魔偶HP越高傷害越大）。魔偶銷毀。',
    fullDescription: '消耗 15 MP，冷卻 8。引爆魔偶核心造成 AoE 250% 魔法傷害 + 打斷施法。魔偶剩餘 HP 百分比越高，傷害越大（滿血=×1.5）。魔偶銷毀。',
    tags: ['damage', 'aoe', 'burst', 'interrupt', 'magical'],
    special: { castTime: 1, golemDetonate: true, hpScaling: true, interrupt: true },
  },

ultimate_golem: {
    id: 'ultimate_golem', name: '終極魔偶', englishName: 'Ultimate Golem',
    classId: 'warlock', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '傾注全部魔力製造一個終極魔偶。終極魔偶擁有施法者 100% 的 HP、攻擊力提升 50%、可免費切換三種元素。但這份強大無法長久維持，6 tick 後自動銷毀。',
    shortDescription: '召喚終極魔偶（HP=100%、攻擊+50%、免費切元素）。6 tick 後自動銷毀。',
    fullDescription: '消耗 40 MP，冷卻 12。召喚終極魔偶取代當前魔偶：HP=施法者 100%，攻擊 +50%，三元素切換免費（不消耗 MP、無冷卻）。6 tick 後自動銷毀。',
    tags: ['summon', 'burst', 'buff'],
    special: { ultimateGolem: true, golemHpRatio: 1.0, golemAttackBonus: 50, duration: 6 },
  },
};
