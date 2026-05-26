import { describe, expect, it } from 'vitest';
import {
  applyLowLevelExpPenalty,
  getHighLevelCombatPenalty,
  getLowLevelExpMultiplier,
} from '../game/level-scaling.js';

describe('level scaling', () => {
  it('only reduces exp when the player outlevels the monster', () => {
    expect(getLowLevelExpMultiplier(10, 8)).toBe(1);
    expect(getLowLevelExpMultiplier(10, 7)).toBe(0.7);
    expect(getLowLevelExpMultiplier(10, 6)).toBe(0.4);
    expect(getLowLevelExpMultiplier(10, 5)).toBe(0.2);
    expect(getLowLevelExpMultiplier(10, 4)).toBe(0.05);
    expect(getLowLevelExpMultiplier(5, 13)).toBe(1);
  });

  it('keeps at least one exp for positive low-level rewards', () => {
    expect(applyLowLevelExpPenalty(10, 20, 1)).toBe(1);
    expect(applyLowLevelExpPenalty(0, 20, 1)).toBe(0);
  });

  it('applies combat penalties only against higher-level monsters', () => {
    expect(getHighLevelCombatPenalty(10, 12)).toMatchObject({ hitRatePenalty: 0, damageMultiplier: 1 });
    expect(getHighLevelCombatPenalty(10, 13)).toMatchObject({ hitRatePenalty: 10, damageMultiplier: 0.9 });
    expect(getHighLevelCombatPenalty(10, 15)).toMatchObject({ hitRatePenalty: 20, damageMultiplier: 0.75 });
    expect(getHighLevelCombatPenalty(10, 18)).toMatchObject({ hitRatePenalty: 30, damageMultiplier: 0.6 });
  });
});
