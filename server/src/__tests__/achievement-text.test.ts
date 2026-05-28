import { describe, expect, it } from 'vitest';
import {
  ACHIEVEMENT_DEFS,
  formatAchievementDescription,
  formatAchievementTitleDescription,
} from '../game/achievement.js';

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

describe('achievement and title text quality', () => {
  it('generates concrete achievement and title descriptions for every achievement', () => {
    const achievements = Object.values(ACHIEVEMENT_DEFS);
    expect(achievements.length).toBeGreaterThan(0);

    for (const achievement of achievements) {
      const description = formatAchievementDescription(achievement);
      const titleDescription = formatAchievementTitleDescription(achievement);

      expect(countCjkChars(description)).toBeGreaterThanOrEqual(35);
      expect(description).toMatch(/完成條件|條件|進度/u);
      expect(description).toMatch(/代表|里程碑|掌握|玩法目標/u);
      expect(description).toMatch(/稱號|外觀|功能|數值|不額外/u);

      expect(countCjkChars(titleDescription)).toBeGreaterThanOrEqual(35);
      expect(titleDescription).toMatch(/稱號|解鎖|取得條件/u);
      expect(titleDescription).toMatch(/代表|里程碑|身份/u);
      expect(titleDescription).toMatch(/外觀|功能|數值|不提供/u);
    }
  });
});
