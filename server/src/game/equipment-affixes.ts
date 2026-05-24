import type { AffixDef, SkillDef } from '@game/shared';
import { getEquippedItems } from '../db/queries.js';

export interface SkillAffixModifiers {
  resourceCostReductionPct: number;
  damageBonusPct: number;
  healingBonusPct: number;
}

const TIER_VALUE: Record<string, number> = {
  T1: 1,
  T2: 2,
  T3: 3,
  T4: 4,
  T5: 5,
};

export function getEquippedAffixes(characterId: string): AffixDef[] {
  return getEquippedItems(characterId).flatMap(item => item.affixes ?? []);
}

export function getSkillAffixModifiers(characterId: string, skillDef: SkillDef): SkillAffixModifiers {
  const modifiers: SkillAffixModifiers = {
    resourceCostReductionPct: 0,
    damageBonusPct: 0,
    healingBonusPct: 0,
  };

  for (const affix of getEquippedAffixes(characterId)) {
    const tier = TIER_VALUE[affix.tier] ?? 1;
    const matchesSkill = affixMatchesSkill(affix, skillDef);
    if (!matchesSkill) continue;

    if (affix.behavior === 'reduce_resource_cost') {
      modifiers.resourceCostReductionPct += 4 + tier * 2;
    }
    if (affix.behavior === 'execute_low_hp' && skillDef.tags.includes('burst')) {
      modifiers.damageBonusPct += 5 + tier;
    }
    if (skillDef.tags.includes('resource')) {
      modifiers.resourceCostReductionPct += tier;
    }
    if (skillDef.tags.includes('damage')) {
      modifiers.damageBonusPct += tier * 2;
    }
    if (skillDef.tags.includes('heal')) {
      modifiers.healingBonusPct += tier * 2;
    }
  }

  return {
    resourceCostReductionPct: Math.min(40, modifiers.resourceCostReductionPct),
    damageBonusPct: Math.min(30, modifiers.damageBonusPct),
    healingBonusPct: Math.min(30, modifiers.healingBonusPct),
  };
}

export function getModifiedSkillResourceCost(characterId: string, skillDef: SkillDef, baseCost = skillDef.resourceCost): number {
  if (baseCost <= 0) return 0;
  const modifiers = getSkillAffixModifiers(characterId, skillDef);
  return Math.max(1, Math.floor(baseCost * (1 - modifiers.resourceCostReductionPct / 100)));
}

function affixMatchesSkill(affix: AffixDef, skillDef: SkillDef): boolean {
  const affixTags = affix.skillTags ?? [];
  if (affixTags.length === 0) return false;
  return affixTags.some(tag => skillDef.tags.includes(tag));
}
