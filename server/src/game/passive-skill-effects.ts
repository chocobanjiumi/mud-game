import { SKILL_DEFS } from '@game/shared';
import { getLearnedSkills } from '../db/queries.js';

export function getLearnedPassiveSpecialNumber(characterId: string, skillId: string, key: string): number {
  if (!hasLearnedSkill(characterId, skillId)) return 0;
  const skill = SKILL_DEFS[skillId];
  const value = skill?.special?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

export function applyInventoryHandlingBonus(characterId: string, amount: number): number {
  const bonus = getLearnedPassiveSpecialNumber(characterId, 'pack_sense', 'inventoryHandlingBonus');
  if (bonus <= 0 || amount <= 0) return amount;
  return Math.max(1, Math.floor(amount * (1 + bonus / 100)));
}

export function applyUtilitySuccessRateBonus(characterId: string, rate: number): number {
  const bonus = getLearnedPassiveSpecialNumber(characterId, 'steady_hands', 'utilityActionBonus');
  if (bonus <= 0) return clampPercent(rate);
  return clampPercent(rate + bonus);
}

export function rollUtilityExtraQuantity(
  characterId: string,
  quantity: number,
  random: () => number = Math.random,
): { quantity: number; extra: number } {
  const bonus = getLearnedPassiveSpecialNumber(characterId, 'steady_hands', 'utilityActionBonus');
  if (bonus <= 0 || quantity <= 0) return { quantity, extra: 0 };
  const extra = random() * 100 < bonus ? 1 : 0;
  return { quantity: quantity + extra, extra };
}

export function getSurvivalDodgeBonus(characterId: string, hp: number, maxHp: number): number {
  const threshold = getLearnedPassiveSpecialNumber(characterId, 'survival', 'hpThreshold');
  const bonus = getLearnedPassiveSpecialNumber(characterId, 'survival', 'dodgeBonus');
  if (threshold <= 0 || bonus <= 0 || maxHp <= 0) return 0;
  return hp <= maxHp * (threshold / 100) ? bonus : 0;
}

function hasLearnedSkill(characterId: string, skillId: string): boolean {
  return getLearnedSkills(characterId).some(skill => skill.skillId === skillId);
}

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, value));
}
