import type { RawSkillDef } from './types.js';

export const KNIGHT_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  騎士 (Lv 20+) - 戰士系二轉・坐騎戰鬥
  // ════════════════════════════════════════════

  // ── Lv 20 核心三件套（0 怒氣，純疲勞消耗，產怒氣）──
  summon_warhorse: {
    id: 'summon_warhorse', name: '召喚戰馬', englishName: 'Summon Warhorse',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    usageContext: 'both',
    description: '以騎士徽記呼喚忠誠的戰馬現身，馬蹄踏地的瞬間大地輕震。戰馬在場時可使用 mount / unmount 指令上下馬。戰馬被召喚時疲勞從 0 開始恢復；若因疲勞耗盡被迫解散，需等疲勞恢復至 50% 才能重新召喚。',
    shortDescription: '召喚/解散戰馬，在場時可上下馬。',
    fullDescription: '消耗 0 怒氣，冷卻 3。召喚或解散戰馬。戰馬在場時可使用 mount/unmount 上下馬。召喚時疲勞從 0 恢復，疲勞耗盡強制解散後需恢復至 50% 才可重新召喚。',
    tags: ['support', 'summon'],
    special: { summonMount: true },
  },

knight_charge: {
    id: 'knight_charge', name: '衝鋒', englishName: 'Charge',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 0, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.4,
    description: '驅策戰馬猛然加速，鐵蹄轟鳴中一人一馬化為不可阻擋的衝擊波。撞擊瞬間敵人被巨大的衝量掀飛，而戰馬的氣勢則化為騎士胸中熊熊燃燒的戰意。',
    shortDescription: '騎乘限定。衝撞單體，30% 撞倒；approaching 目標傷害 ×1.3、撞倒率 50%。命中產 15 怒氣。',
    fullDescription: '消耗 0 怒氣 + 12 疲勞，冷卻 4。騎乘限定。對單體造成 140% 物理傷害 + chargePower × 2，30% 機率撞倒（暈眩 1 tick）。若目標正在 approaching：傷害 ×1.3，撞倒機率提升至 50%。命中後生成 15 怒氣。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { mountRequired: true, fatigueCost: 12, mountStatScaling: { chargePower: 2 }, knockdownChance: 0.3, approachingDamageMultiplier: 1.3, approachingKnockdownChance: 0.5, rageGain: 15 },
  },

mounted_guard_skill: {
    id: 'mounted_guard_skill', name: '騎乘守護', englishName: 'Mounted Guard',
    classId: 'knight', learnLevel: 20, type: 'active',
    targetType: 'single_ally', resourceCost: 0, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '驅馬擋在戰友身前，戰馬以寬闊的身軀築成一道活的壁壘。每一次替戰友承受的衝擊都會轉化為騎士內心深處的守護之志，讓戰意愈加高昂。',
    shortDescription: '騎乘限定。代友方承受 50% 傷害 2 tick，guardPower 減免代受傷害。產 10 怒氣。',
    fullDescription: '消耗 0 怒氣 + 8 疲勞，冷卻 5。騎乘限定。選定一名友方，2 tick 內代其承受 50% 傷害，代受傷害按 guardPower × 2% 額外減免。使用後生成 10 怒氣。',
    tags: ['defense', 'support'],
    special: { mountRequired: true, fatigueCost: 8, redirectDamage: true, redirectRatio: 0.5, duration: 2, mountStatScaling: { guardPower: 2 }, rageGain: 10 },
  },

// ── Lv 25-50 進階技能（消耗怒氣 ± 疲勞）──
  warhorse_cry: {
    id: 'warhorse_cry', name: '戰馬嘶鳴', englishName: 'Warhorse Cry',
    classId: 'knight', learnLevel: 25, type: 'active',
    targetType: 'all_enemies', resourceCost: 15, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '戰馬仰天長嘶，鳴聲如雷貫耳，震懾之力令敵人在恐懼中不由自主地將注意力投向騎士。正在接近的怪物更是在嘶鳴的威壓下步伐遲疑，到達的時間被延遲。',
    shortDescription: '騎乘限定。嘲諷全體 2 tick；approaching 怪物 arrivalTicks +1。',
    fullDescription: '消耗 15 怒氣 + 5 疲勞，冷卻 5。騎乘限定。嘲諷本房所有敵人 2 tick（強制攻擊騎士）。approaching 的怪物 arrivalTicks +1。',
    effects: [{ type: 'taunt', value: 1, duration: 2 }],
    tags: ['control', 'support', 'defense'],
    special: { mountRequired: true, fatigueCost: 5, arrivalTicksDelta: 1 },
  },

sacred_shield: {
    id: 'sacred_shield', name: '聖盾術', englishName: 'Sacred Shield',
    classId: 'knight', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 25, cooldown: 5,
    damageType: 'pure', element: 'light', multiplier: 0,
    description: '向天舉盾高聲禱告，凝聚聖光編織成金色護盾浮現於身前。馬背上穩固的姿態讓聖盾的力量得到完整發揮，護盾值額外提升；若失去坐騎支撐，聖盾則因不穩而減弱。',
    shortDescription: '護盾 200 + guardPower × 8，4 tick。騎乘 +30%；下馬僅 60%。',
    fullDescription: '消耗 25 怒氣，冷卻 5。自身獲得護盾，基礎值 200 + guardPower × 8，持續 4 tick。騎乘中護盾值額外 +30%；下馬時護盾值僅有基礎值的 60%。',
    effects: [{ type: 'shield', value: 200, duration: 4 }],
    tags: ['defense', 'support', 'light'],
    special: { mountEnhanced: true, mountedShieldBonus: 0.3, dismountedShieldPenalty: 0.4, mountStatScaling: { guardPower: 8 } },
  },

iron_trampling: {
    id: 'iron_trampling', name: '鐵蹄踐踏', englishName: 'Iron Trampling',
    classId: 'knight', learnLevel: 33, type: 'active',
    targetType: 'all_enemies', resourceCost: 18, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '驅馬原地猛踏，鐵蹄砸碎地面掀起衝擊波，震顫傳遍整片戰場。所有敵人在劇烈的震盪中步伐踉蹌，正在接近的怪物更是被震退一步。',
    shortDescription: '騎乘限定。全體 120% 物理 + stability × 2，減速 1 tick；approaching arrivalTicks +1。',
    fullDescription: '消耗 18 怒氣 + 10 疲勞，冷卻 4。騎乘限定。對本房所有敵人造成 120% 物理傷害 + stability × 2，全體減速 1 tick。approaching 的怪物 arrivalTicks +1。',
    effects: [{ type: 'slow', value: 30, duration: 1 }],
    tags: ['damage', 'aoe', 'control', 'physical'],
    special: { mountRequired: true, fatigueCost: 10, mountStatScaling: { stability: 2 }, arrivalTicksDelta: 1 },
  },

judgment: {
    id: 'judgment', name: '制裁之錘', englishName: 'Judgment',
    classId: 'knight', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 22, cooldown: 3,
    damageType: 'physical', element: 'light', multiplier: 2.0,
    description: '在馬背上高舉武器，以神聖之力加持後狠狠砸下。沉重的審判令大地震顫，金色的衝擊波從落點向四周擴散。被制裁之錘擊中的敵人陷入暈眩，若目標已處於暈眩或減速狀態，審判的力量會更加深入，將暈眩延長。',
    shortDescription: '騎乘限定。200% 物理+光 + chargePower × 2，暈眩 1 tick，打斷+驅散護盾。已暈/減速目標暈眩延至 2 tick。',
    fullDescription: '消耗 22 怒氣 + 6 疲勞，冷卻 3。騎乘限定。對單體造成 200% 物理+光傷害 + chargePower × 2，暈眩 1 tick，打斷施法，驅散護盾。若目標已處於暈眩或減速：暈眩延長至 2 tick。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'burst', 'interrupt', 'light', 'physical'],
    special: { mountRequired: true, fatigueCost: 6, interrupt: true, dispelShield: true, mountStatScaling: { chargePower: 2 }, extendedStunOnCC: 2 },
  },

loyal_bond: {
    id: 'loyal_bond', name: '忠誠之絆', englishName: 'Loyal Bond',
    classId: 'knight', learnLevel: 41, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '騎士與戰馬之間超越言語的羈絆——在生死關頭，忠誠的戰馬會以己身替主人擋下致命一擊。騎乘中受到致命傷害時，戰馬替騎士承受這一擊，騎士存活但自動下馬，疲勞歸零。下馬時則無此效果，沒有坐騎便沒有羈絆的守護。',
    shortDescription: '騎乘中受致命傷：戰馬擋死，HP=1，自動下馬。下馬中無效。冷卻 10 tick。',
    fullDescription: '被動。騎乘中受到致命傷害時：戰馬替騎士擋下致命攻擊，騎士存活（HP = 1），自動下馬，疲勞歸零。冷卻 10 tick。下馬中受到致命傷害時無效果。',
    tags: ['defense', 'passive'],
    special: { mountRequired: true, deathSave: true, deathSaveCooldown: 10, autoDismount: true },
  },

last_bastion: {
    id: 'last_bastion', name: '最後堡壘', englishName: 'Last Bastion',
    classId: 'knight', learnLevel: 45, type: 'active',
    targetType: 'self', resourceCost: 30, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將盾牌深插入地面，戰馬橫擋在前方，人馬化為不可逾越的鐵壁。在這道防線面前，一切攻勢都被削弱，身後的隊友在堅不可摧的守護中安然無恙。期間戰馬免疫疲勞累積，嘲諷效果的持續時間也隨之延長。',
    shortDescription: '騎乘限定。3 tick 自身受傷 -40%、隊友受傷 -25%。戰馬免疫疲勞，嘲諷持續 +1 tick。',
    fullDescription: '消耗 30 怒氣 + 15 疲勞，冷卻 8。騎乘限定。3 tick 內騎士受傷 -40%，身後隊友受傷 -25%。期間戰馬免疫疲勞累積，所有嘲諷效果持續時間 +1 tick。',
    effects: [{ type: 'damage_reduction', value: 40, duration: 3 }],
    tags: ['defense', 'support'],
    special: { mountRequired: true, fatigueCost: 15, allyDamageReduction: 25, mountFatigueImmune: true, tauntDurationBonus: 1 },
  },

divine_verdict: {
    id: 'divine_verdict', name: '聖裁天降', englishName: 'Divine Verdict',
    classId: 'knight', learnLevel: 50, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 8,
    damageType: 'physical', element: 'light', multiplier: 3.0,
    description: '在馬背上躍向高空，全身聖光凝聚於騎槍之上，以天罰之姿俯衝而下——一擊定罪。落地的衝擊波炸開金色的裂痕，目標在聖裁之下被完全壓制。然而躍下的代價是與戰馬分離，使用後自動下馬。若目標生命垂危，聖裁之力將進一步加倍，執行最終處刑。',
    shortDescription: '騎乘限定，使用後自動下馬。300% 物理+光 + chargePower × 5，暈眩 2 tick，驅散全 buff。目標 HP < 30% 傷害 ×1.5。',
    fullDescription: '消耗 35 怒氣，冷卻 8。騎乘限定，使用後自動下馬。對單體造成 300% 物理+光傷害 + chargePower × 5，暈眩 2 tick，驅散所有 buff。若目標 HP < 30%：傷害額外 ×1.5（處刑加成）。',
    effects: [{ type: 'stun', value: 1, duration: 2 }],
    tags: ['damage', 'single_target', 'burst', 'interrupt', 'dispel', 'light', 'physical'],
    special: { castTime: 1, mountRequired: true, autoDismount: true, mountStatScaling: { chargePower: 5 }, dispelAllBuffs: true, executeThreshold: 0.3, executeDamageMultiplier: 1.5 },
  },
};
