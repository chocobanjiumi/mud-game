import type { RawSkillDef } from './types.js';

export const SWORD_SAINT_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  劍聖 (Lv 20+) - 戰士系二轉・姿態流轉
  // ════════════════════════════════════════════

  // ── Lv 20 核心（1 被動 + 3 主動，姿態流轉系統）──
  sword_flow: {
    id: 'sword_flow', name: '劍流姿態', englishName: 'Sword Flow',
    classId: 'sword_saint', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '劍聖的戰鬥如流水般自然切換攻守，每一個動作都是下一個動作的起手。三種姿態各有被動加成，技能使用後自動切入對應姿態。按照正確順序流轉（攻→技→守→攻）觸發「劍流」combo，獲得額外怒氣與冷卻減少。',
    shortDescription: '三姿態流轉。攻勢+15%傷、技勢+15%暴、守勢+15%減傷。正確 combo 產怒+回血。',
    fullDescription: '被動。三姿態：攻勢（傷害+15%）、技勢（暴擊率+15%）、守勢（減傷+15%）。技能使用後自動切入對應姿態。正確流轉（攻→技→守→攻）觸發「劍流」combo：+10 怒氣，下個技能 CD -1 tick，恢復 3% 最大 HP。完成一整圈（攻→技→守）獲得「明鏡」buff 2 tick（傷害+10%、減傷+10%）。',
    tags: ['passive', 'buff'],
    special: { stanceSystem: true, stances: { attack: { damageBonus: 15 }, technique: { critBonus: 15 }, defense: { reductionBonus: 15 } }, comboFlow: ['attack', 'technique', 'defense'], comboBonus: { rageGain: 10, cdReduction: 1, healPercent: 3 }, fullRotationBuff: { name: '明鏡', damageBonus: 10, damageReduction: 10, duration: 2 } },
  },

flash_strike: {
    id: 'flash_strike', name: '一閃', englishName: 'Flash Strike',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '以雷霆般的速度拔刀斬出，刀光一閃而逝，敵人甚至來不及感受到疼痛。衝鋒的氣勢轉化為高昂的戰意。',
    shortDescription: '→攻勢。130% 物理，產 12 怒氣。劍流 combo（守→攻）：傷害+30%、怒氣×2。',
    fullDescription: '消耗 0 怒氣，冷卻 3。→攻勢。對單體造成 130% 物理傷害，命中生成 12 怒氣。劍流 combo（從守勢→攻勢）：傷害額外 +30%，怒氣生成加倍（24）。',
    tags: ['damage', 'single_target', 'physical'],
    special: { stanceTransition: 'attack', rageGain: 12, comboFrom: 'defense', comboBonus: { damageBonus: 30, rageGainMultiplier: 2 } },
  },

flowing_shift: {
    id: 'flowing_shift', name: '流轉', englishName: 'Flowing Shift',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '劍尖在空中劃出優雅的弧線，身形如流水般變換。精準的殺意凝聚於刀鋒，下一擊將帶著不可迴避的暴擊。',
    shortDescription: '→技勢。2 tick 下次攻擊必暴，產 8 怒氣。劍流 combo（攻→技）：額外下次攻擊+20%。',
    fullDescription: '消耗 0 怒氣，冷卻 3。→技勢。自身獲得 2 tick 增益：下一次攻擊必定暴擊。生成 8 怒氣。劍流 combo（從攻勢→技勢）：額外獲得「下次攻擊傷害 +20%」。',
    effects: [{ type: 'crit_up', value: 100, duration: 2 }],
    tags: ['support', 'buff'],
    special: { stanceTransition: 'technique', rageGain: 8, guaranteedNextCrit: true, comboFrom: 'attack', comboBonus: { nextAttackDamageBonus: 20 } },
  },

still_water: {
    id: 'still_water', name: '止水', englishName: 'Still Water',
    classId: 'sword_saint', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '收劍歸鞘，氣息沉穩如止水。看似毫無破綻的靜態中蘊含著隨時反擊的殺意。受到攻擊時，劍聖會以迅雷不及掩耳的速度拔刀反擊。',
    shortDescription: '→守勢。2 tick 減傷 25%，受擊自動反擊（50%物理）。劍流 combo（技→守）：減傷35%、反擊80%。',
    fullDescription: '消耗 0 怒氣，冷卻 4。→守勢。2 tick 減傷 25%，期間受攻擊自動反擊一次（50% 物理傷害）。劍流 combo（從技勢→守勢）：減傷提升至 35%，反擊傷害提升至 80%。',
    effects: [{ type: 'damage_reduction', value: 25, duration: 2 }, { type: 'counter', value: 50, duration: 2 }],
    tags: ['defense', 'buff'],
    special: { stanceTransition: 'defense', counterAttack: 0.5, comboFrom: 'technique', comboBonus: { damageReduction: 35, counterAttack: 0.8 } },
  },

// ── Lv 25-50 進階技能（消耗怒氣，各有姿態歸屬）──
  iaijutsu: {
    id: 'iaijutsu', name: '拔刀術', englishName: 'Iaijutsu',
    classId: 'sword_saint', learnLevel: 25, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '一手按住刀柄，身體微微前傾，在電光石火之間完成拔刀、斬擊、收刀的一連串動作。這道快到肉眼無法捕捉的一刀，是劍聖先手制敵的極意。',
    shortDescription: '→攻勢。180% 物理，先制攻擊。劍流 combo（守→攻）：滿血目標傷害×1.5。',
    fullDescription: '消耗 15 怒氣，冷卻 4。→攻勢。對單體造成 180% 物理傷害，先制攻擊（本 tick 最先發動）。劍流 combo（從守勢→攻勢）：若目標滿血則傷害 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { stanceTransition: 'attack', priority: true, comboFrom: 'defense', comboBonus: { fullHpDamageMultiplier: 1.5 } },
  },

peerless_combo: {
    id: 'peerless_combo', name: '無雙連斬', englishName: 'Peerless Combo',
    classId: 'sword_saint', learnLevel: 29, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.5,
    description: '劍光如暴雨傾瀉，五道斬擊在眨眼間同時落下，每一擊都比上一擊更加精準致命。連斬的節奏讓暴擊率不斷攀升。',
    shortDescription: '→技勢。5 連擊各 50% 物理、暴擊率逐擊+10%。劍流 combo（攻→技）：追加第 6 擊（100% 必暴）。',
    fullDescription: '消耗 20 怒氣，冷卻 5。→技勢。對單體連擊 5 次，每擊 50% 物理傷害，暴擊率逐擊 +10%。劍流 combo（從攻勢→技勢）：追加第 6 擊（100% 物理傷害，必定暴擊）。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { stanceTransition: 'technique', hitCount: 5, critRatePerHit: 10, comboFrom: 'attack', comboBonus: { bonusHit: { multiplier: 1.0, guaranteedCrit: true } } },
  },

empty_step: {
    id: 'empty_step', name: '空步', englishName: 'Empty Step',
    classId: 'sword_saint', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在攻擊落下的瞬間，身形化虛，彷彿從現實中抽離。虛實之間的身影讓敵人的攻擊盡數落空，而劍聖的傷口在虛化中自然癒合。',
    shortDescription: '→守勢。2 tick 減傷 30%，受擊恢復 5% HP。劍流 combo（技→守）：額外 1 tick 無敵。',
    fullDescription: '消耗 15 怒氣，冷卻 5。→守勢。2 tick 減傷 30%，期間受攻擊時恢復 5% 最大 HP。劍流 combo（從技勢→守勢）：額外獲得 1 tick 無敵（完全迴避下一次攻擊）。',
    effects: [{ type: 'damage_reduction', value: 30, duration: 2 }],
    tags: ['defense', 'buff'],
    special: { stanceTransition: 'defense', healOnHit: 5, comboFrom: 'technique', comboBonus: { invincibleTicks: 1 } },
  },

heaven_splitter: {
    id: 'heaven_splitter', name: '天斷', englishName: 'Heaven Splitter',
    classId: 'sword_saint', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 2.6,
    description: '將全部劍勢凝於一線，從天而降的一斬足以撕裂一切防線。在技勢中發動時劍氣可穿透敵人的防禦，在正確流轉中發動則傷害與穿透同時達到極致。',
    shortDescription: '→攻勢。260% 物理。技勢中使用：無視 30% 防禦。劍流 combo（守→攻）：傷害+40%、無視 50% 防禦。',
    fullDescription: '消耗 30 怒氣，冷卻 6。→攻勢。對單體造成 260% 物理傷害。若在技勢中使用：無視 30% 防禦。劍流 combo（從守勢→攻勢）：傷害額外 +40%，無視 50% 防禦。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { castTime: 1, stanceTransition: 'attack', techniqueStanceBonus: { armorPenetration: 30 }, comboFrom: 'defense', comboBonus: { damageBonus: 40, armorPenetration: 50 } },
  },

mind_cut: {
    id: 'mind_cut', name: '心斬', englishName: 'Mind Cut',
    classId: 'sword_saint', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '斬向敵人的意圖本身，斷絕一切蓄力與防護。在正確的流轉中發動時，心斬的衝擊如此強烈，以至於可以立刻再次揮出。',
    shortDescription: '→技勢。150% 物理，打斷+驅散護盾+暈眩 1 tick。劍流 combo（攻→技）：暈眩 2 tick、CD 歸零。',
    fullDescription: '消耗 25 怒氣，冷卻 5。→技勢。對單體造成 150% 物理傷害，打斷施法、驅散護盾、暈眩 1 tick。劍流 combo（從攻勢→技勢）：暈眩延長至 2 tick，CD 歸零（可立刻再次使用）。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'physical'],
    special: { stanceTransition: 'technique', interrupt: true, dispelShield: true, comboFrom: 'attack', comboBonus: { extendedStun: 2, resetCooldown: true } },
  },

mushin: {
    id: 'mushin', name: '無念無想', englishName: 'Mushin',
    classId: 'sword_saint', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '進入超越意識的境界，劍與意合一。在這極短的瞬間，劍聖的每一個動作都是完美的——所有姿態切換皆視為正確流轉，技能冷卻減半，怒氣消耗大幅降低。然而超越極限的代價是結束後短暫的虛脫。',
    shortDescription: '4 tick 所有切換 = 正確劍流 combo，技能 CD 減半，怒氣消耗 -30%。結束後 2 tick 無法用姿態技能。',
    fullDescription: '消耗 40 怒氣，冷卻 12。4 tick：所有技能視為正確流轉（所有切換觸發劍流 combo），技能冷卻減半，怒氣消耗 -30%。結束後進入「虛脫」2 tick，無法使用姿態技能。',
    effects: [{ type: 'speed_up', value: 50, duration: 4 }],
    tags: ['buff', 'burst'],
    special: { duration: 4, allCombo: true, cdReductionPercent: 50, rageCostReduction: 30, exhaustionDuration: 2 },
  },
};
