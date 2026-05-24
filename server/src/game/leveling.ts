import type { Character } from '@game/shared';
import { applyExperienceOriginBonus } from './origin-effects.js';

export function expRequiredForLevel(level: number): number {
  return level * 100 + (level - 1) * 50;
}

export function applyLevelUp(char: Character): void {
  char.level++;
  char.freePoints += 5;

  const hpGrowth = 10 + char.stats.vit * 2;
  char.maxHp += hpGrowth;
  char.hp = char.maxHp;

  const mpGrowth = Math.floor(5 + char.stats.int * 1.5);
  char.maxMp += mpGrowth;
  char.mp = char.maxMp;
}

export function addExperienceToCharacter(
  char: Character,
  amount: number,
): { expGained: number; levelsGained: number } {
  const expGained = applyExperienceOriginBonus(char, amount);
  char.exp += expGained;

  let levelsGained = 0;
  while (char.exp >= expRequiredForLevel(char.level + 1)) {
    applyLevelUp(char);
    levelsGained++;
  }

  return { expGained, levelsGained };
}
