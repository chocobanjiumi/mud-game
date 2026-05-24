import type { AffixDef, CombatantState, ResourceType, SkillDef } from '@game/shared';
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
export type AffixTriggerContext = 'on_hit' | 'on_block' | 'on_dodge' | 'on_kill' | 'on_cast' | 'on_heal';

export interface SkillAffixContext {
  trigger?: AffixTriggerContext;
  targetHpPercent?: number;
  isFirstHit?: boolean;
  isApproachingTarget?: boolean;
}

export interface TriggeredAffixContext extends SkillAffixContext {
  round?: number;
}

export interface AffixTriggerCooldownState {
  isOnCooldown: (affixId: string) => boolean;
  startCooldown: (affixId: string, rounds: number) => void;
}

export interface TriggeredAffixResult {
  affix: AffixDef;
  resourceDelta: number;
  messages: string[];
}

export interface ModifiedSkillRuntime {
  resourceCost: number;
  cooldown: number;
  range: number;
  arrivalTicks?: number;
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

export function getResourceAffixBonus(characterId: string, key: ResourceAffixModifierKey): number {
  return getEquippedAffixes(characterId)
    .reduce((sum, affix) => sum + (affix.resourceModifiers?.[key] ?? 0), 0);
}

export function getSkillAffixModifiers(characterId: string, skillDef: SkillDef, context: SkillAffixContext = {}): SkillAffixModifiers {
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
    if (!affixMatchesContext(affix, context)) continue;

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

export function getModifiedSkillRuntime(
  characterId: string,
  skillDef: SkillDef,
  context: SkillAffixContext = {},
): ModifiedSkillRuntime {
  const modifiers = getSkillAffixModifiers(characterId, skillDef, context);
  const resourceCost = skillDef.resourceCost <= 0
    ? 0
    : Math.max(1, Math.floor(skillDef.resourceCost * (1 - modifiers.resourceCostReductionPct / 100)));
  const baseRange = skillDef.special?.crossRoom || skillDef.special?.crossRoomRequiresScout || skillDef.special?.areaScope === 'adjacent_cardinal'
    ? 1
    : 0;
  const rawArrivalTicks = typeof skillDef.special?.arrivalTicks === 'number'
    ? skillDef.special.arrivalTicks
    : undefined;

  return {
    resourceCost,
    cooldown: Math.max(0, skillDef.cooldown + modifiers.cooldownDelta),
    range: Math.max(0, baseRange + modifiers.rangeDelta),
    arrivalTicks: rawArrivalTicks === undefined
      ? undefined
      : Math.max(0, rawArrivalTicks + modifiers.arrivalTicksDelta),
  };
}

export function applyTriggeredAffixEvents(
  characterId: string,
  owner: Pick<CombatantState, 'name' | 'resource' | 'maxResource' | 'resourceType' | 'mp' | 'maxMp'>,
  trigger: AffixTriggerContext,
  context: TriggeredAffixContext = {},
  cooldownState?: AffixTriggerCooldownState,
): TriggeredAffixResult[] {
  const results: TriggeredAffixResult[] = [];

  for (const affix of getEquippedAffixes(characterId)) {
    if (affix.trigger !== trigger) continue;
    if (!affixMatchesContext(affix, { ...context, trigger })) continue;
    if (cooldownState?.isOnCooldown(affix.id)) continue;

    const resourceDelta = applyResourceModifiers(owner, affix.resourceModifiers);
    const messages = [`  ${owner.name}的裝備詞綴「${affix.name}」觸發。`];
    if (resourceDelta > 0) {
      messages.push(`  ${owner.name}恢復了 ${resourceDelta} 點${getResourceLabel(owner.resourceType)}。`);
    } else if (resourceDelta < 0) {
      messages.push(`  ${owner.name}消耗了 ${Math.abs(resourceDelta)} 點${getResourceLabel(owner.resourceType)}。`);
    }

    if (affix.internalCooldownRounds && affix.internalCooldownRounds > 0) {
      cooldownState?.startCooldown(affix.id, affix.internalCooldownRounds);
    }

    results.push({ affix, resourceDelta, messages });
  }

  return results;
}

function affixMatchesSkill(affix: AffixDef, skillDef: SkillDef): boolean {
  if (affix.skillIds?.includes(skillDef.id)) return true;
  const affixTags = affix.skillTags ?? [];
  if (affixTags.length === 0) return false;
  return affixTags.some(tag => skillDef.tags.includes(tag));
}

function affixMatchesContext(affix: AffixDef, context: SkillAffixContext): boolean {
  if (affix.trigger && context.trigger && affix.trigger !== context.trigger) return false;

  switch (affix.condition) {
    case 'low_hp':
      return context.targetHpPercent !== undefined && context.targetHpPercent <= 35;
    case 'first_hit':
      return context.isFirstHit === true;
    case 'approaching_target':
      return context.isApproachingTarget === true;
    default:
      return true;
  }
}

function applyResourceModifiers(
  owner: Pick<CombatantState, 'resource' | 'maxResource' | 'resourceType' | 'mp' | 'maxMp'>,
  modifiers: AffixDef['resourceModifiers'],
): number {
  if (!modifiers) return 0;

  const before = owner.resource;
  const delta = getResourceModifierDelta(owner.resourceType, modifiers);
  if (delta === 0) return 0;

  owner.resource = clamp(owner.resource + delta, 0, owner.maxResource);
  if (owner.resourceType === 'mp') {
    owner.mp = clamp((owner.mp ?? before) + delta, 0, owner.maxMp ?? owner.maxResource);
    owner.resource = owner.mp;
  }

  return owner.resource - before;
}

function getResourceModifierDelta(resourceType: ResourceType, modifiers: AffixDef['resourceModifiers']): number {
  if (!modifiers) return 0;
  switch (resourceType) {
    case 'rage':
      return modifiers.rageGain ?? 0;
    case 'focus':
      return modifiers.focusRegen ?? 0;
    case 'mp':
      return modifiers.mpRegen ?? 0;
    case 'faith':
      return modifiers.faithDelta ?? 0;
  }
}

function getResourceLabel(resourceType: ResourceType): string {
  const labels: Record<ResourceType, string> = {
    mp: 'MP',
    rage: '怒氣',
    focus: '專注',
    faith: '信仰',
  };
  return labels[resourceType];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
