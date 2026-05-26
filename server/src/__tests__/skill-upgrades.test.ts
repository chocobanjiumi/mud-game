import { describe, expect, it } from 'vitest';
import {
  applySkillUpgradeRule,
  getSkillPointSummary,
  getSkillUpgradeDeltas,
  getSkillUpgradeRule,
  SKILL_DEFS,
} from '@game/shared';

const STARTER_CLASSES = new Set(['swordsman', 'mage', 'ranger', 'priest']);

describe('skill upgrade rules', () => {
  it('covers every active starter-class skill below level 20', () => {
    const starterSkills = Object.values(SKILL_DEFS)
      .filter(skill => STARTER_CLASSES.has(skill.classId) && skill.type === 'active' && skill.learnLevel < 20);

    expect(starterSkills.length).toBeGreaterThan(0);
    for (const skill of starterSkills) {
      const rule = getSkillUpgradeRule(skill.id);
      expect(rule, skill.id).toBeDefined();
      expect(rule?.maxLevel).toBe(5);
      expect(rule?.perLevel).toHaveLength(5);
    }
  });

  it('uses the shared rule to modify real runtime skill numbers', () => {
    const base = SKILL_DEFS.quick_step;
    const upgraded = applySkillUpgradeRule(base, 5);
    const deltas = getSkillUpgradeDeltas(base, 1);

    expect(upgraded.multiplier).toBeGreaterThan(base.multiplier);
    expect(upgraded.resourceCost).toBeLessThan(base.resourceCost);
    expect(deltas.some(delta => delta.label === '傷害倍率')).toBe(true);
  });

  it('derives available upgrade points from character level and learned skill levels', () => {
    expect(getSkillPointSummary(8, [{ skillId: 'quick_step', level: 2, currentCooldown: 0 }])).toEqual({
      total: 7,
      spent: 1,
      available: 6,
    });
  });
});
