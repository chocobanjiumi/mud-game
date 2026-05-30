import type { RawSkillDef } from './types.js';

export const ADVENTURER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  冒險者 (Lv 1-9)
  // ════════════════════════════════════════════
  slash: {
    id: 'slash', name: '揮砍', englishName: 'Slash',
    classId: 'adventurer', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '握緊手中的武器，以最基本的戰鬥技巧朝敵人劈去。刀刃劃過空氣發出清脆的破風聲，雖然招式樸實無華，卻是每位冒險者踏上征途的第一課。在無數次揮砍中磨練出的肌肉記憶，往往比花俏的技巧更加可靠。',
  },

guard: {
    id: 'guard', name: '防禦', englishName: 'Guard',
    classId: 'adventurer', learnLevel: 2, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '將武器橫於胸前，雙腳紮穩馬步，全神貫注地迎接即將到來的攻擊。厚重的護甲與堅定的意志形成一道無形的壁壘，能將下一次攻擊的衝擊力削減大半。在危急時刻，一次恰到好處的防禦往往比閃避更能保住性命。',
    effects: [{ type: 'damage_reduction', value: 50, duration: 1 }],
  },

first_aid: {
    id: 'first_aid', name: '急救', englishName: 'First Aid',
    classId: 'adventurer', learnLevel: 4, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 0,
    description: '撕下衣物的布條迅速包紮傷口，用冒險途中學會的草藥知識止住流血。雖然比不上祭司的神聖治癒，但在荒野中無人援助時，這份急救技能就是活下去的關鍵。傷口處傳來微微的刺痛，提醒著你戰鬥尚未結束。',
    special: { healPercent: 15 },
  },

inspect: {
    id: 'inspect', name: '觀察', englishName: 'Inspect',
    classId: 'adventurer', learnLevel: 6, type: 'active',
    targetType: 'single_enemy', resourceCost: 5, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '屏住呼吸，以銳利的目光審視敵人的一舉一動，尋找護甲的裂縫與動作的破綻。經驗豐富的冒險者能在瞬息之間看穿對手的弱點，將隱藏的情報化為致勝的籌碼。知己知彼，方能百戰不殆。',
  },

survival: {
    id: 'survival', name: '求生本能', englishName: 'Survival',
    classId: 'adventurer', learnLevel: 8, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '當生命垂危之際，身體深處沉睡的本能被喚醒，感官變得異常敏銳。瀕死的恐懼反而化為求生的動力，讓你能以匪夷所思的反應速度閃過致命的攻擊。這是刻在冒險者骨子裡的生存法則——只要還有一口氣在，就絕不倒下。',
    special: { hpThreshold: 20, dodgeBonus: 15 },
  },

pack_sense: {
    id: 'pack_sense', name: '行囊感知', englishName: 'Pack Sense',
    classId: 'adventurer', learnLevel: 3, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '長途跋涉讓冒險者懂得如何整理裝備與分配補給。即使在混亂戰鬥中，也能迅速找到合適的道具與備用武器，讓每次整備都更有效率。',
    special: { inventoryHandlingBonus: 10 },
  },

field_awareness: {
    id: 'field_awareness', name: '戰場感知', englishName: 'Field Awareness',
    classId: 'adventurer', learnLevel: 5, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '經歷過野外突襲與地城伏擊後，冒險者學會在危險真正出現前觀察腳步聲、風向與敵意。這份感知能提早發現破綻，也能減少被偷襲的機會。',
    special: { ambushResist: 10 },
  },

steady_hands: {
    id: 'steady_hands', name: '穩定手法', englishName: 'Steady Hands',
    classId: 'adventurer', learnLevel: 7, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '無論是包紮、採集還是臨陣換裝，穩定的手法都能避免慌亂造成的失誤。這是所有冒險者在旅途中慢慢磨出的基本功。',
    special: { utilityActionBonus: 10 },
  },

dirty_trick: {
    id: 'dirty_trick', name: '干擾手段', englishName: 'Dirty Trick',
    classId: 'adventurer', learnLevel: 9, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '抓起沙土、碎石或隨手可得的小物擲向敵人視線，打亂對方正在蓄勢的動作。這種手段稱不上光彩，卻常常能在怪物準備危險攻擊時爭取到活命的空隙。',
    effects: [{ type: 'slow', value: 30, duration: 1 }],
    special: { interrupt: true },
  },

desperate_strike: {
    id: 'desperate_strike', name: '孤注一擊', englishName: 'Desperate Strike',
    classId: 'adventurer', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 2.0,
    description: '在退無可退的瞬間將全部力量壓進一次攻擊，放棄後續餘裕換取短暫而猛烈的爆發。這不是成熟職業的奧義，而是冒險者在生死邊緣逼出的決心。',
    tags: ['damage', 'single_target', 'burst', 'resource', 'physical'],
  },
};
