// 遊戲核心常數 - 戰鬥、屬性相剋、傷害公式

import type { ElementType } from '../types/skill.js';

// 屬性相剋
const ELEMENT_ADVANTAGE: Record<string, string> = {
  fire: 'ice',
  ice: 'lightning',
  lightning: 'fire',
};

export function getElementMultiplier(attackElement: ElementType, defenseElement: ElementType): number {
  if (attackElement === 'none' || defenseElement === 'none') return 1.0;
  if (attackElement === 'nature' || defenseElement === 'nature') return 1.0;

  // 火冰雷三角相剋
  if (ELEMENT_ADVANTAGE[attackElement] === defenseElement) return 1.3;
  if (ELEMENT_ADVANTAGE[defenseElement] === attackElement) return 0.7;

  // 光暗互剋
  if ((attackElement === 'light' && defenseElement === 'dark') ||
      (attackElement === 'dark' && defenseElement === 'light')) {
    return 1.25;
  }

  return 1.0;
}

// 物理傷害公式
export function calculatePhysicalDamage(
  atk: number, def: number, multiplier: number,
  isCrit: boolean, critDamage: number, elementMultiplier: number
): number {
  const baseDamage = Math.max(1, atk * multiplier - def * 0.5);
  const critMult = isCrit ? critDamage / 100 : 1;
  return Math.max(1, Math.floor(baseDamage * critMult * elementMultiplier));
}

// 魔法傷害公式
export function calculateMagicalDamage(
  matk: number, mdef: number, multiplier: number,
  isCrit: boolean, critDamage: number, elementMultiplier: number
): number {
  const baseDamage = Math.max(1, matk * multiplier - mdef * 0.3);
  const critMult = isCrit ? critDamage / 100 : 1;
  return Math.max(1, Math.floor(baseDamage * critMult * elementMultiplier));
}

// 基礎屬性初始值
export const INITIAL_STATS = {
  str: 5, int: 5, dex: 5, vit: 5, luk: 5,
};

// 戰鬥常數
export const COMBAT_TURN_TIMER = 5000; // 5秒
export const BASE_INVENTORY_CAPACITY = 20;
export const MAX_PARTY_SIZE = 4;
export const DEATH_GOLD_LOSS_PERCENT = 10;
export const RESPAWN_ROOM = 'town_square';
export const CLASS_CHANGE_COST = 500;
export const SECOND_CLASS_CHANGE_COST = 5000;
export const MAX_LEVEL = 60;

// ─── 衍生屬性計算函式 ───

/** 計算最大 HP：基礎 50 + VIT * 8 + level * 10 */
export function calculateMaxHp(level: number, vit: number): number {
  return 50 + vit * 8 + level * 10;
}

/** 計算最大 MP：基礎 20 + INT * 5 + level * 4 */
export function calculateMaxMp(level: number, int: number): number {
  return 20 + int * 5 + level * 4;
}

/** 計算物理攻擊力：STR * 2 + weaponAtk */
export function calculateAtk(str: number, weaponAtk: number): number {
  return str * 2 + weaponAtk;
}

/** 計算魔法攻擊力：INT * 2 + weaponMatk */
export function calculateMatk(int: number, weaponMatk: number): number {
  return int * 2 + weaponMatk;
}

/** 計算物理防禦：VIT * 1.5 + armorDef */
export function calculateDef(vit: number, armorDef: number): number {
  return Math.floor(vit * 1.5) + armorDef;
}

/** 計算魔法防禦：INT * 0.5 + VIT * 0.5 + armorMdef */
export function calculateMdef(int: number, vit: number, armorMdef: number): number {
  return Math.floor(int * 0.5 + vit * 0.5) + armorMdef;
}

/** 計算暴擊率 (%)：DEX * 0.3 + LUK * 0.2 */
export function calculateCritRate(dex: number, luk: number): number {
  return dex * 0.3 + luk * 0.2;
}

/** 計算閃避率 (%)：DEX * 0.4 + LUK * 0.1 */
export function calculateDodgeRate(dex: number, luk: number): number {
  return dex * 0.4 + luk * 0.1;
}

/** 計算命中率 (%)：基礎 95 + bonus */
export function calculateHitRate(dex: number, bonus: number): number {
  return 95 + bonus;
}

/** 計算暴擊傷害 (%)：基礎 150% */
export function calculateCritDamage(): number {
  return 150;
}

/** 取得升級所需經驗值 */
export function getExpForLevel(level: number): number {
  if (level <= 1) return 0;
  // 基礎公式：level^2 * 50
  return Math.floor(level * level * 50);
}
