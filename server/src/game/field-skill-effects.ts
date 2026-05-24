import type { Character, SkillDef } from '@game/shared';
import { calculateMatk } from '@game/shared';
import { applyHpRecovery } from './recovery.js';

export interface FieldSkillEffectResult {
  handled: boolean;
  message?: string;
  target?: Character;
  consumeResource?: boolean;
}

export function applyFieldSkillEffect(
  character: Character,
  skillDef: SkillDef,
  target: Character = character,
): FieldSkillEffectResult {
  const healPercent = getNumericSpecial(skillDef, 'healPercent');
  if (healPercent !== undefined) {
    if (character.hp >= character.maxHp) {
      return { handled: true, message: `${character.name} 的 HP 已經是滿的。`, consumeResource: false };
    }
    const healAmount = Math.max(1, Math.floor(character.maxHp * healPercent / 100));
    const healed = applyHpRecovery(character, healAmount);
    return { handled: true, message: `回復了 ${healed} HP。`, target: character, consumeResource: true };
  }

  if (skillDef.special?.isHeal && skillDef.targetType === 'single_ally') {
    if (target.hp >= target.maxHp) {
      return { handled: true, message: `${target.name} 的 HP 已經是滿的。`, target, consumeResource: false };
    }
    const healingPower = calculateMatk(character.stats.int, 0);
    const healAmount = Math.max(1, Math.floor(healingPower * skillDef.multiplier));
    const healed = applyHpRecovery(target, healAmount);
    return {
      handled: true,
      message: target.id === character.id ? `回復了 ${healed} HP。` : `為 ${target.name} 回復了 ${healed} HP。`,
      target,
      consumeResource: true,
    };
  }

  if (skillDef.special?.removeDebuffs) {
    return {
      handled: true,
      message: `${target.name} 身上的負面狀態被淨化。`,
      target,
      consumeResource: true,
    };
  }

  const resourceGain = getNumericSpecial(skillDef, 'resourceGain');
  if (resourceGain !== undefined && resourceGain > 0) {
    const before = character.resource;
    character.resource = Math.min(character.maxResource, character.resource + resourceGain);
    if (character.resourceType === 'mp') {
      character.mp = Math.min(character.maxMp, character.mp + (character.resource - before));
    }
    return {
      handled: true,
      message: `恢復了 ${character.resource - before} 點${getResourceLabel(character.resourceType)}。`,
      target: character,
      consumeResource: true,
    };
  }

  return { handled: false };
}

function getNumericSpecial(skillDef: SkillDef, key: string): number | undefined {
  const value = skillDef.special?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function getResourceLabel(resourceType: Character['resourceType']): string {
  const labels: Record<Character['resourceType'], string> = {
    mp: 'MP',
    rage: '怒氣',
    focus: '專注',
    faith: '信仰',
  };
  return labels[resourceType];
}
