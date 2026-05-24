import type { AffixDef, SkillDef } from '@game/shared';
import { getEquippedItems } from '../db/queries.js';

export interface SkillAffixModifiers {
  resourceCostReductionPct: number;
  damageBonusPct: number;
  healingBonusPct: number;
  cooldownDelta: number;
  rangeDelta: number;
  arrivalTicksDelta: number;
}

export type ResourceAffixModifierKey = 'rageGain' | 'focusRegen' | 'mpRegen' | 'faithDelta';

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

export function getResourceAffixBonus(characterId: string, key: ResourceAffixModifierKey): number {
  return getEquippedAffixes(characterId)
    .reduce((sum, affix) => sum + (affix.resourceModifiers?.[key] ?? 0), 0);
}

export function getSkillAffixModifiers(characterId: string, skillDef: SkillDef): SkillAffixModifiers {
  const modifiers: SkillAffixModifiers = {
    resourceCostReductionPct: 0,
    damageBonusPct: 0,
    healingBonusPct: 0,
    cooldownDelta: 0,
    rangeDelta: 0,
    arrivalTicksDelta: 0,
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
    if (affix.skillModifiers?.resourceCostPct) {
      modifiers.resourceCostReductionPct += Math.abs(Math.min(0, affix.skillModifiers.resourceCostPct));
    }
    if (affix.skillModifiers?.damagePct && affix.skillModifiers.damagePct > 0) {
      modifiers.damageBonusPct += affix.skillModifiers.damagePct;
    }
    if (affix.skillModifiers?.healingPct && affix.skillModifiers.healingPct > 0) {
      modifiers.healingBonusPct += affix.skillModifiers.healingPct;
    }
    modifiers.cooldownDelta += affix.skillModifiers?.cooldownDelta ?? 0;
    modifiers.rangeDelta += affix.skillModifiers?.rangeDelta ?? 0;
    modifiers.arrivalTicksDelta += affix.skillModifiers?.arrivalTicksDelta ?? 0;
  }

  return {
    resourceCostReductionPct: Math.min(40, modifiers.resourceCostReductionPct),
    damageBonusPct: Math.min(30, modifiers.damageBonusPct),
    healingBonusPct: Math.min(30, modifiers.healingBonusPct),
    cooldownDelta: modifiers.cooldownDelta,
    rangeDelta: modifiers.rangeDelta,
    arrivalTicksDelta: modifiers.arrivalTicksDelta,
  };
}

export function getModifiedSkillResourceCost(characterId: string, skillDef: SkillDef, baseCost = skillDef.resourceCost): number {
  if (baseCost <= 0) return 0;
  const modifiers = getSkillAffixModifiers(characterId, skillDef);
  return Math.max(1, Math.floor(baseCost * (1 - modifiers.resourceCostReductionPct / 100)));
}

function affixMatchesSkill(affix: AffixDef, skillDef: SkillDef): boolean {
  if (affix.skillIds?.includes(skillDef.id)) return true;
  const affixTags = affix.skillTags ?? [];
  if (affixTags.length === 0) return false;
  return affixTags.some(tag => skillDef.tags.includes(tag));
}
