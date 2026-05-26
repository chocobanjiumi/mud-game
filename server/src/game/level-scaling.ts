import type { Character, CombatantState, MonsterDef } from '@game/shared';

export interface HighLevelCombatPenalty {
  gap: number;
  hitRatePenalty: number;
  damageMultiplier: number;
}

export function getLowLevelExpMultiplier(playerLevel: number, monsterLevel: number): number {
  const diff = playerLevel - monsterLevel;
  if (diff <= 2) return 1;
  if (diff === 3) return 0.7;
  if (diff === 4) return 0.4;
  if (diff === 5) return 0.2;
  return 0.05;
}

export function applyLowLevelExpPenalty(baseExp: number, playerLevel: number, monsterLevel: number): number {
  if (baseExp <= 0) return 0;
  return Math.max(1, Math.floor(baseExp * getLowLevelExpMultiplier(playerLevel, monsterLevel)));
}

export function getHighLevelCombatPenalty(playerLevel: number, monsterLevel: number): HighLevelCombatPenalty {
  const gap = monsterLevel - playerLevel;
  if (gap <= 2) return { gap, hitRatePenalty: 0, damageMultiplier: 1 };
  if (gap === 3) return { gap, hitRatePenalty: 10, damageMultiplier: 0.9 };
  if (gap === 4) return { gap, hitRatePenalty: 15, damageMultiplier: 0.85 };
  if (gap === 5) return { gap, hitRatePenalty: 20, damageMultiplier: 0.75 };
  return { gap, hitRatePenalty: 30, damageMultiplier: 0.6 };
}

export function getPveHighLevelCombatPenalty(
  actor: Pick<CombatantState, 'isPlayer' | 'level'>,
  target: Pick<CombatantState, 'isPlayer' | 'level'>,
): HighLevelCombatPenalty {
  if (!actor.isPlayer || target.isPlayer) return { gap: target.level - actor.level, hitRatePenalty: 0, damageMultiplier: 1 };
  return getHighLevelCombatPenalty(actor.level, target.level);
}

export function formatExpPenaltyMessage(exp: number, baseExp: number): string {
  return exp < baseExp ? `獲得經驗值 +${exp}（等級差距過大，原 ${baseExp}）` : `獲得經驗值 +${exp}`;
}

export function scaledMonsterExpForCharacter(char: Pick<Character, 'level'>, monster: Pick<MonsterDef, 'level' | 'expReward'>): number {
  return applyLowLevelExpPenalty(monster.expReward, char.level, monster.level);
}
