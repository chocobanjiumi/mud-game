// 技能定義 - 所有職業的技能資料

import type { ClassId } from '../types/player.js';
import type { SkillDef } from '../types/skill.js';
import { CLASS_DEFS } from './classes.js';

/** 所有技能定義 */
export const SKILL_DEFS: Record<string, SkillDef> = {
  // ════════════════════════════════════════════
  //  冒險者 (Lv 1-9)
  // ════════════════════════════════════════════
  slash: {
    id: 'slash', name: '揮砍', englishName: 'Slash',
    classId: 'adventurer', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', mpCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '基礎物理攻擊，揮動武器劈向敵人。',
  },
  guard: {
    id: 'guard', name: '防禦', englishName: 'Guard',
    classId: 'adventurer', learnLevel: 2, type: 'active',
    targetType: 'self', mpCost: 0, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '擺出防禦姿態，減少下一次受到的傷害50%。',
    effects: [{ type: 'damage_reduction', value: 50, duration: 1 }],
  },
  first_aid: {
    id: 'first_aid', name: '急救', englishName: 'First Aid',
    classId: 'adventurer', learnLevel: 4, type: 'active',
    targetType: 'self', mpCost: 10, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 0,
    description: '緊急處理傷口，回復少量HP。',
    special: { healPercent: 15 },
  },
  inspect: {
    id: 'inspect', name: '觀察', englishName: 'Inspect',
    classId: 'adventurer', learnLevel: 6, type: 'active',
    targetType: 'single_enemy', mpCost: 5, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '仔細觀察目標，揭露其弱點與資訊。',
  },
  survival: {
    id: 'survival', name: '求生本能', englishName: 'Survival',
    classId: 'adventurer', learnLevel: 8, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: 'HP低於20%時，閃避率+15%。',
    special: { hpThreshold: 20, dodgeBonus: 15 },
  },

  // ════════════════════════════════════════════
  //  劍士 (Lv 10-29)
  // ════════════════════════════════════════════
  power_strike: {
    id: 'power_strike', name: '重擊', englishName: 'Power Strike',
    classId: 'swordsman', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', mpCost: 8, cooldown: 1,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '蓄力揮出強力一擊，造成150%物理傷害。',
  },
  blade_aura: {
    id: 'blade_aura', name: '劍氣', englishName: 'Blade Aura',
    classId: 'swordsman', learnLevel: 13, type: 'active',
    targetType: 'all_enemies', mpCost: 15, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '釋放劍氣波動，對前方所有敵人造成範圍傷害。',
  },
  iron_wall: {
    id: 'iron_wall', name: '鐵壁', englishName: 'Iron Wall',
    classId: 'swordsman', learnLevel: 16, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '裝備盾牌時防禦力+20%。',
    special: { defBonus: 20, requireShield: true },
  },
  taunt: {
    id: 'taunt', name: '挑釁', englishName: 'Taunt',
    classId: 'swordsman', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', mpCost: 10, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '嘲諷敵人，強制目標攻擊自己2回合。',
    effects: [{ type: 'taunt', value: 1, duration: 2 }],
  },
  war_cry: {
    id: 'war_cry', name: '戰吼', englishName: 'War Cry',
    classId: 'swordsman', learnLevel: 23, type: 'active',
    targetType: 'all_allies', mpCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '振奮士氣的戰吼，全隊攻擊力+10%，持續5回合。',
    effects: [{ type: 'atk_up', value: 10, duration: 5 }],
  },
  counter_stance: {
    id: 'counter_stance', name: '反擊架勢', englishName: 'Counter Stance',
    classId: 'swordsman', learnLevel: 27, type: 'active',
    targetType: 'self', mpCost: 12, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0,
    description: '擺出反擊姿態，下一回合受擊時自動反擊。',
    effects: [{ type: 'counter', value: 100, duration: 1 }],
  },

  // ════════════════════════════════════════════
  //  法師 (Lv 10-29)
  // ════════════════════════════════════════════
  fireball: {
    id: 'fireball', name: '火球術', englishName: 'Fireball',
    classId: 'mage', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', mpCost: 12, cooldown: 1,
    damageType: 'magical', element: 'fire', multiplier: 1.6,
    description: '凝聚火焰射出熾熱火球，造成火屬性單體魔法傷害。',
  },
  frost_nova: {
    id: 'frost_nova', name: '冰霜新星', englishName: 'Frost Nova',
    classId: 'mage', learnLevel: 13, type: 'active',
    targetType: 'all_enemies', mpCost: 18, cooldown: 3,
    damageType: 'magical', element: 'ice', multiplier: 1.0,
    description: '釋放冰霜衝擊波，對所有敵人造成冰屬性傷害，30%機率減速。',
    effects: [{ type: 'slow', value: 30, duration: 2 }],
  },
  mana_shield: {
    id: 'mana_shield', name: '魔力盾', englishName: 'Mana Shield',
    classId: 'mage', learnLevel: 16, type: 'active',
    targetType: 'self', mpCost: 5, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '以魔力形成護盾，以MP代替HP承受傷害。',
    effects: [{ type: 'mana_shield', value: 100, duration: 3 }],
  },
  lightning: {
    id: 'lightning', name: '雷擊', englishName: 'Lightning',
    classId: 'mage', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 2,
    damageType: 'magical', element: 'lightning', multiplier: 2.0,
    description: '召喚雷電劈下，造成雷屬性高傷害，無視20%魔防。',
    special: { mdefPiercing: 20 },
  },
  meditation: {
    id: 'meditation', name: '冥想', englishName: 'Meditation',
    classId: 'mage', learnLevel: 23, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '每回合自動回復3%MP。',
    special: { mpRegenPercent: 3 },
  },
  elemental_mastery: {
    id: 'elemental_mastery', name: '元素精通', englishName: 'Elemental Mastery',
    classId: 'mage', learnLevel: 27, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '元素魔法傷害+15%。',
    special: { elementalDamageBonus: 15 },
  },

  // ════════════════════════════════════════════
  //  遊俠 (Lv 10-29)
  // ════════════════════════════════════════════
  precise_shot: {
    id: 'precise_shot', name: '精準射擊', englishName: 'Precise Shot',
    classId: 'ranger', learnLevel: 10, type: 'active',
    targetType: 'single_enemy', mpCost: 8, cooldown: 1,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '瞄準要害射出一箭，必中，造成120%傷害。',
    special: { guaranteedHit: true },
  },
  quick_step: {
    id: 'quick_step', name: '快速移動', englishName: 'Quick Step',
    classId: 'ranger', learnLevel: 13, type: 'active',
    targetType: 'self', mpCost: 10, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '敏捷閃躲，閃避率+30%持續2回合。',
    effects: [{ type: 'dodge_up', value: 30, duration: 2 }],
  },
  poison_arrow: {
    id: 'poison_arrow', name: '毒箭', englishName: 'Poison Arrow',
    classId: 'ranger', learnLevel: 16, type: 'active',
    targetType: 'single_enemy', mpCost: 12, cooldown: 2,
    damageType: 'physical', element: 'nature', multiplier: 1.0,
    description: '射出淬毒之箭，造成傷害並附加3回合中毒。',
    effects: [{ type: 'poison', value: 5, duration: 3 }],
  },
  trap: {
    id: 'trap', name: '陷阱', englishName: 'Trap',
    classId: 'ranger', learnLevel: 19, type: 'active',
    targetType: 'single_enemy', mpCost: 15, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '放置陷阱，觸發時造成傷害並定身1回合。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },
  critical_edge: {
    id: 'critical_edge', name: '致命一擊', englishName: 'Critical Edge',
    classId: 'ranger', learnLevel: 23, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '暴擊率+12%。',
    special: { critBonus: 12 },
  },
  barrage: {
    id: 'barrage', name: '連射', englishName: 'Barrage',
    classId: 'ranger', learnLevel: 27, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0.6,
    description: '連續射出三箭，每次造成60%傷害。',
    special: { hitCount: 3 },
  },

  // ════════════════════════════════════════════
  //  祭司 (Lv 10-29)
  // ════════════════════════════════════════════
  heal: {
    id: 'heal', name: '治癒', englishName: 'Heal',
    classId: 'priest', learnLevel: 10, type: 'active',
    targetType: 'single_ally', mpCost: 15, cooldown: 1,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '以神聖之光治癒傷口，回復單體大量HP。',
    special: { isHeal: true },
  },
  purify: {
    id: 'purify', name: '淨化', englishName: 'Purify',
    classId: 'priest', learnLevel: 13, type: 'active',
    targetType: 'single_ally', mpCost: 12, cooldown: 2,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '淨化目標身上所有負面狀態。',
    special: { removeDebuffs: true },
  },
  holy_light: {
    id: 'holy_light', name: '神聖之光', englishName: 'Holy Light',
    classId: 'priest', learnLevel: 16, type: 'active',
    targetType: 'single_enemy', mpCost: 18, cooldown: 2,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '召喚神聖之光打擊敵人，對不死系怪物傷害翻倍。',
    special: { undeadMultiplier: 2 },
  },
  blessing: {
    id: 'blessing', name: '祝福', englishName: 'Blessing',
    classId: 'priest', learnLevel: 19, type: 'active',
    targetType: 'single_ally', mpCost: 20, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '賜予目標祝福，全屬性+5%持續10回合。',
    effects: [
      { type: 'atk_up', value: 5, duration: 10 },
      { type: 'def_up', value: 5, duration: 10 },
      { type: 'matk_up', value: 5, duration: 10 },
      { type: 'mdef_up', value: 5, duration: 10 },
    ],
  },
  mass_heal: {
    id: 'mass_heal', name: '群體治癒', englishName: 'Mass Heal',
    classId: 'priest', learnLevel: 23, type: 'active',
    targetType: 'all_allies', mpCost: 30, cooldown: 4,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '以聖光沐浴全隊，回復全體少量HP。',
    special: { isHeal: true },
  },
  divine_grace: {
    id: 'divine_grace', name: '神佑', englishName: 'Divine Grace',
    classId: 'priest', learnLevel: 27, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '治癒技能效果+20%。',
    special: { healBonus: 20 },
  },

  // ════════════════════════════════════════════
  //  騎士 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  sacred_shield: {
    id: 'sacred_shield', name: '聖盾術', englishName: 'Sacred Shield',
    classId: 'knight', learnLevel: 30, type: 'active',
    targetType: 'self', mpCost: 25, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '召喚聖光護盾，吸收一定量傷害。',
    effects: [{ type: 'shield', value: 200, duration: 4 }],
  },
  guardian_oath: {
    id: 'guardian_oath', name: '守護之誓', englishName: 'Guardian Oath',
    classId: 'knight', learnLevel: 33, type: 'active',
    targetType: 'single_ally', mpCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '誓言守護隊友，替其承受傷害3回合。',
    special: { redirectDamage: true, duration: 3 },
  },
  judgment: {
    id: 'judgment', name: '制裁之錘', englishName: 'Judgment',
    classId: 'knight', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 22, cooldown: 3,
    damageType: 'physical', element: 'light', multiplier: 1.8,
    description: '神聖制裁之錘，造成傷害並暈眩目標。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
  },
  unyielding: {
    id: 'unyielding', name: '不屈意志', englishName: 'Unyielding',
    classId: 'knight', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '致死傷害時保留1HP，冷卻10回合。',
    effects: [{ type: 'unyielding', value: 1, duration: 10 }],
  },

  // ════════════════════════════════════════════
  //  狂戰士 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  frenzy: {
    id: 'frenzy', name: '狂暴', englishName: 'Frenzy',
    classId: 'berserker', learnLevel: 30, type: 'active',
    targetType: 'self', mpCost: 15, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '進入狂暴狀態，攻擊+40%但防禦-30%，持續5回合。',
    effects: [
      { type: 'atk_up', value: 40, duration: 5 },
      { type: 'def_down', value: 30, duration: 5 },
    ],
  },
  bloodthirst: {
    id: 'bloodthirst', name: '嗜血斬', englishName: 'Bloodthirst',
    classId: 'berserker', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', mpCost: 18, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.6,
    description: '嗜血的一擊，造成傷害的30%轉為自身HP。',
    special: { lifeSteal: 30 },
  },
  whirlwind: {
    id: 'whirlwind', name: '旋風斬', englishName: 'Whirlwind',
    classId: 'berserker', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', mpCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '旋轉斬擊，攻擊所有周圍敵人。',
  },
  death_gaze: {
    id: 'death_gaze', name: '死亡凝視', englishName: 'Death Gaze',
    classId: 'berserker', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: 'HP越低攻擊力越高，最高+50%。',
    special: { maxAtkBonus: 50 },
  },

  // ════════════════════════════════════════════
  //  劍聖 (Lv 30+) - 劍士系二轉
  // ════════════════════════════════════════════
  iaijutsu: {
    id: 'iaijutsu', name: '拔刀術', englishName: 'Iaijutsu',
    classId: 'sword_saint', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '先制攻擊，必定先手，造成180%傷害。',
    special: { priority: true },
  },
  afterimage: {
    id: 'afterimage', name: '殘影', englishName: 'Afterimage',
    classId: 'sword_saint', learnLevel: 33, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '閃避成功後下一次攻擊必定暴擊。',
    special: { guaranteedCritAfterDodge: true },
  },
  peerless_combo: {
    id: 'peerless_combo', name: '無雙連斬', englishName: 'Peerless Combo',
    classId: 'sword_saint', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.5,
    description: '連續5次斬擊，每次50%傷害，暴擊率遞增。',
    special: { hitCount: 5, critRatePerHit: 10 },
  },
  clear_mind: {
    id: 'clear_mind', name: '明鏡止水', englishName: 'Clear Mind',
    classId: 'sword_saint', learnLevel: 40, type: 'active',
    targetType: 'self', mpCost: 25, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '進入澄明狀態，3回合內閃避率+50%，每次閃避回復5%HP。',
    effects: [{ type: 'dodge_up', value: 50, duration: 3 }],
    special: { healOnDodge: 5 },
  },

  // ════════════════════════════════════════════
  //  大法師 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  meteor: {
    id: 'meteor', name: '隕石術', englishName: 'Meteor',
    classId: 'archmage', learnLevel: 30, type: 'active',
    targetType: 'all_enemies', mpCost: 40, cooldown: 6,
    damageType: 'magical', element: 'fire', multiplier: 3.0,
    description: '從天空召喚隕石，造成超高範圍火焰傷害（需2回合詠唱）。',
    special: { castTime: 2 },
  },
  blizzard: {
    id: 'blizzard', name: '暴風雪', englishName: 'Blizzard',
    classId: 'archmage', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', mpCost: 30, cooldown: 4,
    damageType: 'magical', element: 'ice', multiplier: 1.5,
    description: '召喚暴風雪覆蓋戰場，造成範圍冰傷害並減速。',
    effects: [{ type: 'slow', value: 40, duration: 2 }],
  },
  arcane_burst: {
    id: 'arcane_burst', name: '魔力爆發', englishName: 'Arcane Burst',
    classId: 'archmage', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', mpCost: 0, cooldown: 8,
    damageType: 'magical', element: 'none', multiplier: 2.5,
    description: '消耗50%當前MP造成等量傷害。',
    special: { consumeMpPercent: 50 },
  },
  elemental_heart: {
    id: 'elemental_heart', name: '元素之心', englishName: 'Elemental Heart',
    classId: 'archmage', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '冥想效果翻倍，MP上限+20%。',
    special: { mpMaxBonus: 20, meditationDouble: true },
  },

  // ════════════════════════════════════════════
  //  暗黑術士 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  drain_life: {
    id: 'drain_life', name: '生命汲取', englishName: 'Drain Life',
    classId: 'warlock', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 0.8,
    description: '持續吸取目標HP，持續3回合。',
    special: { isDoT: true, lifeSteal: 100, duration: 3, tickMultiplier: 0.8 },
  },
  fear: {
    id: 'fear', name: '恐懼', englishName: 'Fear',
    classId: 'warlock', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', mpCost: 22, cooldown: 5,
    damageType: 'pure', element: 'dark', multiplier: 0,
    description: '讓目標陷入恐懼，無法行動2回合。',
    effects: [{ type: 'fear', value: 1, duration: 2 }],
  },
  shadow_blast: {
    id: 'shadow_blast', name: '暗影爆破', englishName: 'Shadow Blast',
    classId: 'warlock', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 28, cooldown: 3,
    damageType: 'magical', element: 'dark', multiplier: 2.0,
    description: '暗屬性爆發傷害，對已中DoT的目標+50%傷害。',
    special: { dotBonusDamage: 50 },
  },
  soul_pact: {
    id: 'soul_pact', name: '靈魂契約', englishName: 'Soul Pact',
    classId: 'warlock', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '擊殺敵人時回復10%HP和MP。',
    special: { killHealPercent: 10 },
  },

  // ════════════════════════════════════════════
  //  時空術士 (Lv 30+) - 法師系二轉
  // ════════════════════════════════════════════
  time_slow: {
    id: 'time_slow', name: '時間減速', englishName: 'Time Slow',
    classId: 'chronomancer', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '扭曲目標周圍的時間流，行動延後2回合。',
    effects: [{ type: 'slow', value: 100, duration: 2 }],
  },
  haste: {
    id: 'haste', name: '加速術', englishName: 'Haste',
    classId: 'chronomancer', learnLevel: 33, type: 'active',
    targetType: 'single_ally', mpCost: 25, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '加速隊友的時間流，本回合可行動兩次。',
    effects: [{ type: 'speed_up', value: 100, duration: 1 }],
  },
  rewind: {
    id: 'rewind', name: '時光倒流', englishName: 'Rewind',
    classId: 'chronomancer', learnLevel: 36, type: 'active',
    targetType: 'single_ally', mpCost: 35, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將目標狀態回溯到3回合前的HP/MP。',
    special: { rewindRounds: 3 },
  },
  time_stop: {
    id: 'time_stop', name: '時間停止', englishName: 'Time Stop',
    classId: 'chronomancer', learnLevel: 40, type: 'active',
    targetType: 'all_enemies', mpCost: 50, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '停止時間之流，全場敵人凍結1回合。',
    effects: [{ type: 'freeze', value: 1, duration: 1 }],
  },

  // ════════════════════════════════════════════
  //  神射手 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  piercing_arrow: {
    id: 'piercing_arrow', name: '穿甲箭', englishName: 'Piercing Arrow',
    classId: 'marksman', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 18, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '射出強力穿甲箭，無視目標50%防禦。',
    special: { defPiercing: 50 },
  },
  eagle_eye: {
    id: 'eagle_eye', name: '鷹眼', englishName: 'Eagle Eye',
    classId: 'marksman', learnLevel: 33, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '暴擊傷害+50%。',
    special: { critDamageBonus: 50 },
  },
  arrow_rain: {
    id: 'arrow_rain', name: '箭雨', englishName: 'Arrow Rain',
    classId: 'marksman', learnLevel: 36, type: 'active',
    targetType: 'all_enemies', mpCost: 30, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 0.6,
    description: '降下密集箭雨，大範圍持續傷害3回合。',
    special: { isDoT: true, duration: 3, tickMultiplier: 0.6 },
  },
  headshot: {
    id: 'headshot', name: '一擊必殺', englishName: 'Headshot',
    classId: 'marksman', learnLevel: 40, type: 'active',
    targetType: 'single_enemy', mpCost: 35, cooldown: 8,
    damageType: 'physical', element: 'none', multiplier: 3.0,
    description: '瞄準要害射擊，5%機率即死，否則300%傷害。',
    special: { instantKillChance: 5 },
  },

  // ════════════════════════════════════════════
  //  刺客 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  stealth: {
    id: 'stealth', name: '潛行', englishName: 'Stealth',
    classId: 'assassin', learnLevel: 30, type: 'active',
    targetType: 'self', mpCost: 15, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '進入隱身狀態，下一次攻擊必定暴擊。',
    effects: [{ type: 'stealth', value: 1, duration: 3 }],
  },
  backstab: {
    id: 'backstab', name: '背刺', englishName: 'Backstab',
    classId: 'assassin', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 2.5,
    description: '從隱身中發動攻擊，造成250%傷害。',
    special: { requiresStealth: true },
  },
  deadly_poison: {
    id: 'deadly_poison', name: '致命毒藥', englishName: 'Deadly Poison',
    classId: 'assassin', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 22, cooldown: 5,
    damageType: 'physical', element: 'nature', multiplier: 0.5,
    description: '塗抹致命毒藥，每回合造成8%最大HP的傷害。',
    special: { isDoT: true, maxHpPercent: 8, duration: 4 },
  },
  shadow_step: {
    id: 'shadow_step', name: '暗影步', englishName: 'Shadow Step',
    classId: 'assassin', learnLevel: 40, type: 'active',
    targetType: 'single_enemy', mpCost: 25, cooldown: 6,
    damageType: 'physical', element: 'dark', multiplier: 1.5,
    description: '瞬移到目標身後攻擊並獲得隱身。',
    effects: [{ type: 'stealth', value: 1, duration: 2 }],
  },

  // ════════════════════════════════════════════
  //  馴獸師 (Lv 30+) - 遊俠系二轉
  // ════════════════════════════════════════════
  tame: {
    id: 'tame', name: '馴服', englishName: 'Tame',
    classId: 'beast_master', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 30, cooldown: 10,
    damageType: 'pure', element: 'nature', multiplier: 0,
    description: '嘗試馴服野外怪物為夥伴（限1隻出戰）。',
    special: { tameChance: 30 },
  },
  feral_roar: {
    id: 'feral_roar', name: '野性咆哮', englishName: 'Feral Roar',
    classId: 'beast_master', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', mpCost: 18, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '夥伴發出咆哮，攻擊力+30%並威嚇敵人。',
    effects: [
      { type: 'atk_up', value: 30, duration: 3 },
      { type: 'fear', value: 1, duration: 1 },
    ],
  },
  pack_hunt: {
    id: 'pack_hunt', name: '協同攻擊', englishName: 'Pack Hunt',
    classId: 'beast_master', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 22, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '與夥伴同時攻擊同一目標，各造成120%傷害。',
    special: { hitCount: 2 },
  },
  beast_soul: {
    id: 'beast_soul', name: '野獸之魂', englishName: 'Beast Soul',
    classId: 'beast_master', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '繼承夥伴20%屬性，夥伴倒下時自動復活（每場1次）。',
    special: { petStatInherit: 20, petAutoRevive: true },
  },

  // ════════════════════════════════════════════
  //  神官 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  resurrection: {
    id: 'resurrection', name: '復活', englishName: 'Resurrection',
    classId: 'high_priest', learnLevel: 30, type: 'active',
    targetType: 'single_ally', mpCost: 40, cooldown: 10,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '復活已死亡的隊友，回復50%HP。',
    special: { revive: true, reviveHpPercent: 50 },
  },
  sanctuary: {
    id: 'sanctuary', name: '聖域', englishName: 'Sanctuary',
    classId: 'high_priest', learnLevel: 33, type: 'active',
    targetType: 'all_allies', mpCost: 35, cooldown: 6,
    damageType: 'magical', element: 'light', multiplier: 0,
    description: '展開聖域，全隊持續回血5回合。',
    effects: [{ type: 'regen', value: 8, duration: 5 }],
  },
  divine_shield: {
    id: 'divine_shield', name: '神聖護盾', englishName: 'Divine Shield',
    classId: 'high_priest', learnLevel: 36, type: 'active',
    targetType: 'single_ally', mpCost: 30, cooldown: 8,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '賜予目標神聖護盾，免疫所有傷害1回合。',
    effects: [{ type: 'invincible', value: 1, duration: 1 }],
  },
  angel_wings: {
    id: 'angel_wings', name: '天使之翼', englishName: 'Angel Wings',
    classId: 'high_priest', learnLevel: 40, type: 'passive',
    targetType: 'self', mpCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '治癒溢出量轉為護盾。',
    special: { overhealToShield: true },
  },

  // ════════════════════════════════════════════
  //  德魯伊 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  thorns: {
    id: 'thorns', name: '荊棘術', englishName: 'Thorns',
    classId: 'druid', learnLevel: 30, type: 'active',
    targetType: 'single_ally', mpCost: 18, cooldown: 4,
    damageType: 'magical', element: 'nature', multiplier: 0,
    description: '為目標覆蓋荊棘，受到近戰攻擊時反傷20%。',
    effects: [{ type: 'thorns', value: 20, duration: 4 }],
  },
  wrath_of_nature: {
    id: 'wrath_of_nature', name: '自然之怒', englishName: 'Wrath of Nature',
    classId: 'druid', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', mpCost: 25, cooldown: 3,
    damageType: 'magical', element: 'nature', multiplier: 1.5,
    description: '召喚自然之力，對所有敵人造成自然屬性範圍傷害。',
  },
  regeneration: {
    id: 'regeneration', name: '再生', englishName: 'Regeneration',
    classId: 'druid', learnLevel: 36, type: 'active',
    targetType: 'single_ally', mpCost: 22, cooldown: 4,
    damageType: 'magical', element: 'nature', multiplier: 0,
    description: '目標獲得再生效果，每回合回復8%HP持續5回合。',
    effects: [{ type: 'regen', value: 8, duration: 5 }],
  },
  shapeshift: {
    id: 'shapeshift', name: '變身', englishName: 'Shapeshift',
    classId: 'druid', learnLevel: 40, type: 'active',
    targetType: 'self', mpCost: 30, cooldown: 10,
    damageType: 'pure', element: 'nature', multiplier: 0,
    description: '變身為熊（HP/防禦大增）或鷹（攻擊/速度大增）。',
    special: { forms: ['bear', 'eagle'] },
  },

  // ════════════════════════════════════════════
  //  審判者 (Lv 30+) - 祭司系二轉
  // ════════════════════════════════════════════
  sacred_flame: {
    id: 'sacred_flame', name: '聖火', englishName: 'Sacred Flame',
    classId: 'inquisitor', learnLevel: 30, type: 'active',
    targetType: 'single_enemy', mpCost: 18, cooldown: 2,
    damageType: 'magical', element: 'light', multiplier: 1.0,
    description: '聖火灼燒目標，持續傷害並降低治癒效果。',
    effects: [
      { type: 'burn', value: 5, duration: 3 },
      { type: 'heal_reduction', value: 50, duration: 3 },
    ],
  },
  divine_punishment: {
    id: 'divine_punishment', name: '天譴', englishName: 'Divine Punishment',
    classId: 'inquisitor', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', mpCost: 22, cooldown: 3,
    damageType: 'magical', element: 'light', multiplier: 1.5,
    description: '降下天譴，對目標造成其已損失HP 30%的額外傷害。',
    special: { lostHpDamagePercent: 30 },
  },
  heresy_trial: {
    id: 'heresy_trial', name: '異端審判', englishName: 'Heresy Trial',
    classId: 'inquisitor', learnLevel: 36, type: 'active',
    targetType: 'single_enemy', mpCost: 20, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '標記目標為異端，受到的所有傷害+25%持續4回合。',
    effects: [{ type: 'mark', value: 25, duration: 4 }],
  },
  wrath_of_god: {
    id: 'wrath_of_god', name: '神怒', englishName: 'Wrath of God',
    classId: 'inquisitor', learnLevel: 40, type: 'active',
    targetType: 'all_enemies', mpCost: 45, cooldown: 8,
    damageType: 'magical', element: 'light', multiplier: 2.0,
    description: '全場神聖傷害，對已標記目標傷害翻倍。',
    special: { markedMultiplier: 2 },
  },
};

// ─── 工具函式 ───

/** 按職業取得可學技能 */
export function getSkillsForClass(classId: ClassId): SkillDef[] {
  return Object.values(SKILL_DEFS).filter((s) => s.classId === classId);
}

/** 取得角色可用的所有技能（含前置職業的技能） */
export function getAllAvailableSkills(classId: ClassId): SkillDef[] {
  const classDef = CLASS_DEFS[classId];
  const skills = getSkillsForClass(classId);

  if (classDef?.parentClass) {
    skills.push(...getAllAvailableSkills(classDef.parentClass));
  }

  return skills;
}

/** 取得角色在指定等級可學的技能 */
export function getLearnableSkills(classId: ClassId, level: number): SkillDef[] {
  return getAllAvailableSkills(classId).filter((s) => s.learnLevel <= level);
}

/** 根據 ID 取得技能定義 */
export function getSkillDef(skillId: string): SkillDef | undefined {
  return SKILL_DEFS[skillId];
}
