import type { Character, SkillDef } from '@game/shared';
import { applyHpRecovery } from './recovery.js';

export interface FieldSkillEffectResult {
  handled: boolean;
  message?: string;
}

export function applyFieldSkillEffect(character: Character, skillDef: SkillDef): FieldSkillEffectResult {
  const healPercent = getNumericSpecial(skillDef, 'healPercent');
  if (healPercent !== undefined) {
    if (character.hp >= character.maxHp) {
      return { handled: true, message: `${character.name} 的 HP 已經是滿的。` };
    }
    const healAmount = Math.max(1, Math.floor(character.maxHp * healPercent / 100));
    const healed = applyHpRecovery(character, healAmount);
    return { handled: true, message: `回復了 ${healed} HP。` };
  }

  return { handled: false };
}

function getNumericSpecial(skillDef: SkillDef, key: string): number | undefined {
  const value = skillDef.special?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}
