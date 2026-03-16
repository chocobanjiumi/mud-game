// 傷害計算模組 - 物理/魔法傷害公式、暴擊、閃避、命中、屬性相剋

import type {
  BaseStats, DerivedStats, DamageType, ElementType, DamageResult, StatusEffect,
} from '@game/shared';

// ============================================================
//  屬性計算
// ============================================================

export interface CombatStats extends BaseStats {
  level: number;
  weaponAtk: number;
  weaponMatk: number;
  armorDef: number;
  armorMdef: number;
  /** 裝備/技能加成 */
  bonusCritRate: number;
  bonusCritDamage: number;
  bonusDodgeRate: number;
  bonusHitRate: number;
}

/** 計算衍生戰鬥屬性 */
export function calculateDerived(s: CombatStats): DerivedStats {
  return {
    atk: s.str * 2 + s.weaponAtk,
    matk: s.int * 2 + s.weaponMatk,
    def: Math.floor(s.vit * 1.5) + s.armorDef,
    mdef: Math.floor(s.int * 0.5 + s.vit * 0.5) + s.armorMdef,
    critRate: s.dex * 0.3 + s.luk * 0.2 + s.bonusCritRate,
    critDamage: 150 + s.bonusCritDamage, // 基礎 150%
    dodgeRate: s.dex * 0.4 + s.luk * 0.1 + s.bonusDodgeRate,
    hitRate: 95 + s.bonusHitRate,
  };
}

// ============================================================
//  屬性相剋
// ============================================================

/**
 * 取得元素相剋倍率
 *
 * 火 → 冰 → 雷 → 火 (+30%)
 * 光 ←→ 暗 (+25%)
 * 自然 / 無屬性：中性 (1.0)
 */
export function getElementModifier(attackElement: ElementType, defenseElement: ElementType): number {
  // 無屬性或自然：中性
  if (attackElement === 'none' || defenseElement === 'none') return 1.0;
  if (attackElement === 'nature' || defenseElement === 'nature') return 1.0;
  if (attackElement === defenseElement) return 1.0;

  // 火 → 冰 → 雷 → 火
  const triangle: Record<string, string> = {
    fire: 'ice',
    ice: 'lightning',
    lightning: 'fire',
  };

  if (triangle[attackElement] === defenseElement) return 1.3;
  // 反向（被剋）
  if (triangle[defenseElement] === attackElement) return 0.7;

  // 光 ←→ 暗
  if (
    (attackElement === 'light' && defenseElement === 'dark') ||
    (attackElement === 'dark' && defenseElement === 'light')
  ) {
    return 1.25;
  }

  return 1.0;
}

// ============================================================
//  命中 / 閃避 / 暴擊判定
// ============================================================

/** 計算命中率 (%) */
export function calcHitRate(attackerDex: number, targetDex: number, bonusHit = 0): number {
  const base = 95 + (attackerDex - targetDex) * 0.5 + bonusHit;
  return Math.max(5, Math.min(100, base)); // 最低 5%，最高 100%
}

/** 計算閃避率 (%) */
export function calcDodgeRate(targetDex: number, targetLuk: number, bonus = 0): number {
  const base = targetDex * 0.4 + targetLuk * 0.1 + bonus;
  return Math.max(0, Math.min(80, base)); // 最高 80% 閃避
}

/** 計算暴擊率 (%) */
export function calcCritRate(attackerDex: number, attackerLuk: number, bonus = 0): number {
  const base = attackerDex * 0.3 + attackerLuk * 0.2 + bonus;
  return Math.max(0, Math.min(80, base)); // 最高 80% 暴擊
}

/** 擲骰判定（傳入百分比機率） */
export function rollChance(percent: number): boolean {
  return Math.random() * 100 < percent;
}

// ============================================================
//  傷害計算
// ============================================================

export interface DamageCalcInput {
  attackerId: string;
  targetId: string;
  damageType: DamageType;
  element: ElementType;
  targetElement: ElementType;
  /** 技能倍率（1.0 = 100%） */
  multiplier: number;
  /** 攻方衍生屬性 */
  attacker: DerivedStats & { dex: number; luk: number };
  /** 守方衍生屬性 */
  target: DerivedStats & { dex: number; luk: number };
  /** 技能附帶的狀態效果 */
  effects?: StatusEffect[];
  /** 是否為治療技能（正值為治療量） */
  isHealing?: boolean;
}

/**
 * 完整的傷害計算，包含命中/閃避/暴擊判定
 */
export function calculateDamage(input: DamageCalcInput): DamageResult {
  const {
    attackerId, targetId, damageType, element, targetElement,
    multiplier, attacker, target, effects = [], isHealing,
  } = input;

  const result: DamageResult = {
    attackerId,
    targetId,
    damage: 0,
    isCrit: false,
    isMiss: false,
    isDodged: false,
    element,
    elementBonus: 0,
    overkill: 0,
    effects: [],
    healing: 0,
  };

  // ── 治療技能特殊處理 ─────────────────────────────────
  if (isHealing) {
    const baseHeal = attacker.matk * multiplier;
    result.healing = Math.max(1, Math.floor(baseHeal));
    result.effects = [...effects];
    return result;
  }

  // ── 命中判定 ──────────────────────────────────────────
  const hitRate = calcHitRate(attacker.dex, target.dex);
  if (!rollChance(hitRate)) {
    result.isMiss = true;
    return result;
  }

  // ── 閃避判定 ──────────────────────────────────────────
  const dodgeRate = calcDodgeRate(target.dex, target.luk);
  if (rollChance(dodgeRate)) {
    result.isDodged = true;
    return result;
  }

  // ── 基礎傷害 ─────────────────────────────────────────
  let baseDmg: number;
  if (damageType === 'physical') {
    // 物理：(ATK * multiplier - DEF * 0.5)
    baseDmg = attacker.atk * multiplier - target.def * 0.5;
  } else if (damageType === 'magical') {
    // 魔法：(MATK * multiplier - MDEF * 0.3)
    baseDmg = attacker.matk * multiplier - target.mdef * 0.3;
  } else {
    // 純粹傷害（無視防禦）— 取 ATK 和 MATK 中較高者
    baseDmg = Math.max(attacker.atk, attacker.matk) * multiplier;
  }

  baseDmg = Math.max(1, baseDmg); // 最少 1 點傷害

  // ── 暴擊判定 ──────────────────────────────────────────
  const critRate = calcCritRate(attacker.dex, attacker.luk);
  if (rollChance(critRate)) {
    result.isCrit = true;
    baseDmg = baseDmg * (attacker.critDamage / 100);
  }

  // ── 屬性相剋 ─────────────────────────────────────────
  const elemMod = getElementModifier(element, targetElement);
  result.elementBonus = elemMod - 1.0; // 記錄額外倍率
  baseDmg *= elemMod;

  // ── 隨機浮動 (±5%) ───────────────────────────────────
  const variance = 0.95 + Math.random() * 0.1;
  baseDmg *= variance;

  // ── 最終傷害 ──────────────────────────────────────────
  result.damage = Math.max(1, Math.floor(baseDmg));
  result.effects = [...effects];

  return result;
}

// ============================================================
//  快捷函式：從 BaseStats 建立 CombatStats
// ============================================================

export function baseStatsToCombat(
  stats: BaseStats,
  level: number,
  weaponAtk = 0,
  weaponMatk = 0,
  armorDef = 0,
  armorMdef = 0,
): CombatStats {
  return {
    ...stats,
    level,
    weaponAtk,
    weaponMatk,
    armorDef,
    armorMdef,
    bonusCritRate: 0,
    bonusCritDamage: 0,
    bonusDodgeRate: 0,
    bonusHitRate: 0,
  };
}

/**
 * 從 CombatStats 建立傷害計算需要的格式
 */
export function derivedWithDexLuk(derived: DerivedStats, dex: number, luk: number) {
  return { ...derived, dex, luk };
}
