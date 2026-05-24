import type { ResourceType, SkillDef } from '@game/shared';

export interface ResourceCarrier {
  resource: number;
  maxResource: number;
  resourceType: ResourceType;
  mp?: number;
}

export interface SkillResourceCheck {
  ok: boolean;
  effectiveCost: number;
  message?: string;
}

export function checkSkillResource(
  actor: ResourceCarrier,
  skillDef: SkillDef,
  baseCost = skillDef.resourceCost,
): SkillResourceCheck {
  if (actor.resourceType === 'faith') {
    const faithDelta = getNumericSpecial(skillDef, 'faithDelta');
    if (faithDelta !== undefined) {
      const faithMin = getNumericSpecial(skillDef, 'faithMin') ?? Math.abs(Math.min(0, faithDelta));
      const faithMax = getNumericSpecial(skillDef, 'faithMax') ?? actor.maxResource - Math.max(0, faithDelta);
      if (faithDelta < 0 && actor.resource < faithMin) {
        return {
          ok: false,
          effectiveCost: 0,
          message: `信仰不足，${skillDef.name}需要信仰至少 ${faithMin}。`,
        };
      }
      if (faithDelta > 0 && actor.resource > faithMax) {
        return {
          ok: false,
          effectiveCost: 0,
          message: `信仰過高，${skillDef.name}需要信仰不高於 ${faithMax}。`,
        };
      }
      return { ok: true, effectiveCost: 0 };
    }
  }

  const effectiveCost = Math.max(0, baseCost);
  if (actor.resource < effectiveCost) {
    return {
      ok: false,
      effectiveCost,
      message: `資源不足，${skillDef.name}需要 ${effectiveCost} 點。`,
    };
  }
  return { ok: true, effectiveCost };
}

export function applySkillResourceChange(
  actor: ResourceCarrier,
  skillDef: SkillDef,
  effectiveCost = skillDef.resourceCost,
  faithDeltaBonus = 0,
): number {
  const before = actor.resource;
  const faithDelta = actor.resourceType === 'faith' ? getNumericSpecial(skillDef, 'faithDelta') : undefined;
  if (faithDelta !== undefined) {
    const bonus = faithDeltaBonus > 0 ? Math.sign(faithDelta) * faithDeltaBonus : 0;
    actor.resource = clampResource(actor.resource + faithDelta + bonus, actor.maxResource);
    return actor.resource - before;
  }

  const cost = Math.max(0, effectiveCost);
  actor.resource = clampResource(actor.resource - cost, actor.maxResource);
  if (actor.resourceType === 'mp' && actor.mp !== undefined) {
    actor.mp = Math.max(0, actor.mp - cost);
  }
  return actor.resource - before;
}

function clampResource(value: number, maxResource: number): number {
  return Math.min(maxResource, Math.max(0, value));
}

function getNumericSpecial(skillDef: SkillDef, key: string): number | undefined {
  const value = skillDef.special?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}
