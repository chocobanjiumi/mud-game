import type { Character, CombatantState } from '@game/shared';
import { deriveMountStats, getMountDef, ITEM_DEFS } from '@game/shared';

export function getNaturalResourceDelta(char: Pick<Character, 'resource' | 'maxResource' | 'resourceType'>): number {
  if (char.resourceType === 'rage') return char.resource > 0 ? -Math.min(5, char.resource) : 0;

  if (char.resourceType === 'faith') {
    const neutral = Math.min(50, char.maxResource);
    if (char.resource < neutral) return Math.min(2, neutral - char.resource);
    if (char.resource > neutral) return -Math.min(2, char.resource - neutral);
    return 0;
  }

  if (char.resource >= char.maxResource) return 0;
  if (char.resourceType === 'focus') return Math.min(15, char.maxResource - char.resource);
  return Math.min(
    Math.max(1, Math.floor(char.maxResource * 0.02)),
    char.maxResource - char.resource,
  );
}

export function getNaturalMountFatigueDelta(
  char: Pick<Character, 'activeMountId' | 'mountFatigue' | 'equipment' | 'mounted'>,
): number {
  const current = Math.max(0, char.mountFatigue ?? 0);
  if (!char.activeMountId || current <= 0) return 0;
  if (char.mounted) return 0;

  const mount = getMountDef(char.activeMountId);
  const saddleId = char.equipment.saddle ?? null;
  const mountStats = deriveMountStats(mount, saddleId ? ITEM_DEFS[saddleId] : undefined);
  if (!mountStats || mountStats.fatigueRecovery <= 0) return 0;

  return -Math.min(current, mountStats.fatigueRecovery);
}

export function applyHpRecovery(char: Character, amount: number, combatant?: CombatantState): number {
  if (combatant) {
    const combatHealed = Math.min(amount, Math.max(0, combatant.maxHp - combatant.hp));
    combatant.hp = Math.min(combatant.maxHp, combatant.hp + amount);
    char.hp = Math.min(char.maxHp, combatant.hp);
    return combatHealed;
  }
  const healed = Math.min(amount, Math.max(0, char.maxHp - char.hp));
  char.hp = Math.min(char.maxHp, char.hp + amount);
  return healed;
}

export function applyResourceRecovery(char: Character, amount: number, combatant?: CombatantState): number {
  if (char.resourceType === 'rage' || char.resourceType === 'faith' || char.resourceType === 'focus') return 0;

  const currentResource = combatant?.resource ?? char.resource;
  const maxResource = combatant?.maxResource ?? char.maxResource;
  const recovered = Math.min(amount, Math.max(0, maxResource - currentResource));
  const nextResource = Math.min(maxResource, currentResource + amount);

  if (combatant) {
    combatant.resource = nextResource;
    if (combatant.resourceType === 'mp') {
      combatant.mp = Math.min(combatant.maxMp, nextResource);
    }
  }

  char.resource = Math.min(char.maxResource, nextResource);
  if (char.resourceType === 'mp') {
    char.mp = Math.min(char.maxMp, nextResource);
  }

  return recovered;
}
