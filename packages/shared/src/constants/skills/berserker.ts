import type { RawSkillDef } from './types.js';

export const BERSERKER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  狂戰士 (Lv 20+) - 戰士系二轉・血怒刻度
  // ════════════════════════════════════════════

  // ── Lv 20 核心（1 被動 + 3 主動，HP 消耗型）──
  blood_fury: {
    id: 'blood_fury', name: '血怒刻度', englishName: 'Blood Fury',
    classId: 'berserker', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '狂戰士的血液中流淌著遠古的戰鬥本能，傷痕越多，體內的狂暴之力就越是沸騰。血量低於不同門檻時進入對應的狂暴狀態，傷害大幅提升。回血超過門檻時自動降階。',
    shortDescription: 'HP ≤90% 傷害+10%（血怒）；≤60% +25%（狂血）；≤30% +50%（修羅）。替換式，不疊加。',
    fullDescription: '被動。HP ≤ 90%：進入「血怒」傷害 +10%；HP ≤ 60%：進入「狂血」傷害 +25%（替換血怒）；HP ≤ 30%：進入「修羅」傷害 +50%（替換狂血）。回血超過門檻時自動降階。',
    tags: ['passive', 'buff', 'damage'],
    special: { bloodFuryThresholds: { 90: 10, 60: 25, 30: 50 }, replacementBuff: true },
  },

blood_sacrifice: {
    id: 'blood_sacrifice', name: '鮮血獻祭', englishName: 'Blood Sacrifice',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以利刃割開手臂，讓鮮血噴灑在武器上。劇痛轉化為純粹的殺意，怒氣瞬間暴漲。其他戰士靠攻擊產生怒氣，狂戰士靠放自己的血。',
    shortDescription: '消耗 10% 最大 HP，立刻獲得 30 怒氣。',
    fullDescription: '消耗 10% 最大 HP，0 怒氣，冷卻 4。立刻獲得 30 怒氣。',
    tags: ['support', 'resource'],
    special: { hpCostPercent: 10, rageGain: 30 },
  },

frenzy: {
    id: 'frenzy', name: '狂暴', englishName: 'Frenzy',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 6,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '放棄一切理智，讓殺意完全接管身體。雙眼染上猩紅血色，武器在空中劃出殘影般的連續斬擊。五次瘋狂的攻擊傾瀉而出，每一擊都獨立計算命中與暴擊。',
    shortDescription: '消耗 20% 最大 HP，連續普攻 5 次。每次獨立判定命中/暴擊/產怒。',
    fullDescription: '消耗 20% 最大 HP，0 怒氣，冷卻 6。對單體連續普攻 5 次，每次獨立計算命中、暴擊與怒氣生成。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { hpCostPercent: 20, multiHit: 5 },
  },

bloodthirst: {
    id: 'bloodthirst', name: '嗜血', englishName: 'Bloodthirst',
    classId: 'berserker', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '在生命垂危之際，最原始的求生渴望覺醒。每一刀砍下時，鮮血如絲線般被吸入體內，讓狂戰士在修羅的邊緣勉強維持一線生機。',
    shortDescription: '刻度條件：HP ≤ 30%。接下來 3 次普攻附帶 5% 傷害吸血。',
    fullDescription: '消耗 0 怒氣，冷卻 8。刻度條件：HP ≤ 30%（修羅刻度）。接下來 3 次普攻附帶 5% 傷害吸血。',
    tags: ['support', 'defense'],
    special: { hpThresholdRequired: 30, lifeStealHits: 3, lifeStealPercent: 5 },
  },

// ── Lv 25-50 進階技能（消耗怒氣 ± HP%，或有刻度條件）──
  whirlwind: {
    id: 'whirlwind', name: '旋風斬', englishName: 'Whirlwind',
    classId: 'berserker', learnLevel: 25, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '以自身為軸心旋轉巨武，劃出一圈絕命的刃風弧，刀風所及之處血肉橫飛。在狂血刻度以下時，狂暴之力灌注刀鋒，傷害進一步暴漲。',
    shortDescription: '消耗 25 怒氣 + 10% HP。全體 120% 物理。狂血刻度（≤60%）額外 +25% 傷害。',
    fullDescription: '消耗 25 怒氣 + 10% 最大 HP，冷卻 4。對本房所有敵人造成 120% 物理傷害。狂血刻度（HP ≤ 60%）以下額外 +25% 傷害。',
    tags: ['damage', 'aoe', 'physical'],
    special: { hpCostPercent: 10, hpThresholdEnhanced: { 60: { damageBonus: 25 } } },
  },

flesh_armor: {
    id: 'flesh_armor', name: '血肉化盾', englishName: 'Flesh Armor',
    classId: 'berserker', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以怒氣強化肌肉纖維，將全身繃緊到鋼鐵般堅硬。血量越低，求生意志越強，防禦越高。滿血時幾乎毫無效果，修羅刻度時則堅不可摧。',
    shortDescription: '3 tick 減傷 = 缺失 HP% × 0.5（上限 35%）。血越低減傷越高。',
    fullDescription: '消耗 20 怒氣，冷卻 6。3 tick 獲得減傷，減傷值 = 缺失 HP% × 0.5（上限 35%）。100% HP → 0% 減傷；30% HP → 35% 減傷。',
    effects: [{ type: 'damage_reduction', value: 35, duration: 3 }],
    tags: ['defense', 'buff'],
    special: { missingHpScaling: 0.5, maxDamageReduction: 35 },
  },

ruin_cleave: {
    id: 'ruin_cleave', name: '毀滅劈斬', englishName: 'Ruin Cleave',
    classId: 'berserker', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 2.5,
    description: '壓榨全身每一絲力量，舉起巨武斬出足以劈裂大地的一擊。在狂血刻度下必定暴擊，進入修羅刻度後傷害更是暴漲至一般人無法想像的境界。',
    shortDescription: '消耗 30 怒氣 + 15% HP。單體 250% 物理。狂血（≤60%）必暴；修羅（≤30%）傷害 ×1.5。',
    fullDescription: '消耗 30 怒氣 + 15% 最大 HP，冷卻 5。對單體造成 250% 物理傷害。狂血刻度（HP ≤ 60%）必定暴擊；修羅刻度（HP ≤ 30%）傷害額外 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { castTime: 1, hpCostPercent: 15, hpThresholdEnhanced: { 60: { guaranteedCrit: true }, 30: { damageMultiplier: 1.5 } } },
  },

pain_anchor: {
    id: 'pain_anchor', name: '痛覺錨定', englishName: 'Pain Anchor',
    classId: 'berserker', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 10,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以極致的痛楚錨定意識，在死亡邊緣咬牙撐住。只要意志不斷，就不會倒下。當效果結束時若血量已近枯竭，求生本能會自動激發嗜血的渴望。',
    shortDescription: '3 tick 內 HP 不會降到 1 以下。結束時若 HP ≤ 10%，自動觸發嗜血效果。',
    fullDescription: '消耗 25 怒氣，冷卻 10。3 tick 內 HP 不會降到 1 以下（無法被殺死）。結束時若 HP ≤ 10%：自動觸發嗜血效果（3 次普攻吸血 5%）。',
    effects: [{ type: 'unyielding', value: 1, duration: 3 }],
    tags: ['defense', 'buff'],
    special: { preventDeath: true, duration: 3, autoBloodthirstThreshold: 10 },
  },

savage_interrupt: {
    id: 'savage_interrupt', name: '野蠻截斷', englishName: 'Savage Interrupt',
    classId: 'berserker', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '用毫無章法的暴力一擊打斷敵人的一切動作，蠻力面前任何防護都形同虛設。修羅刻度下的狂戰士連暈眩的力道都更加猛烈。',
    shortDescription: '消耗 20 怒氣 + 10% HP。150% 物理，打斷+驅散護盾+暈眩 1 tick。修羅（≤30%）暈眩延至 2 tick。',
    fullDescription: '消耗 20 怒氣 + 10% 最大 HP，冷卻 5。對單體造成 150% 物理傷害，打斷施法，驅散護盾，暈眩 1 tick。修羅刻度（HP ≤ 30%）暈眩延長至 2 tick。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'physical'],
    special: { hpCostPercent: 10, interrupt: true, dispelShield: true, hpThresholdEnhanced: { 30: { extendedStun: 2 } } },
  },

asura_form: {
    id: 'asura_form', name: '修羅化身', englishName: 'Asura Form',
    classId: 'berserker', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 40, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '撕開身上的護甲，讓沸騰的血怒之力徹底吞噬理智。在這短暫的時間裡，狂戰士化為只知殺戮的人形災厄。攻擊暴漲、普攻雙擊，但無法接受任何治療。當修羅之力消退時，透支的代價一次清算——血量歸一。',
    shortDescription: '刻度條件：HP ≤ 60%。消耗 30% HP + 40 怒氣。4 tick 攻擊+60%、技能傷害+30%、普攻雙擊。無法被治療，結束後 HP=1。',
    fullDescription: '消耗 30% 最大 HP + 40 怒氣，冷卻 12。刻度條件：HP ≤ 60%（狂血刻度）。4 tick：攻擊 +60%，所有技能傷害 +30%，普攻變為雙擊。期間無法被治療（含吸血、隊友治療、藥水）。結束時 HP 強制設為 1。',
    effects: [{ type: 'atk_up', value: 60, duration: 4 }],
    tags: ['damage', 'burst', 'buff', 'physical'],
    special: { hpCostPercent: 30, hpThresholdRequired: 60, duration: 4, skillDamageBonus: 30, doubleStrike: true, healingBlocked: true, hpSetOnEnd: 1 },
  },
};
