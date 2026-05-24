import type { Character, CombatantState } from '@game/shared';

export function applyHpRecovery(char: Character, amount: number, combatant?: CombatantState): number {
  const currentHp = combatant?.hp ?? char.hp;
  const maxHp = combatant?.maxHp ?? char.maxHp;
  const healed = Math.min(amount, Math.max(0, maxHp - currentHp));
  const nextHp = Math.min(maxHp, currentHp + amount);

  if (combatant) {
    combatant.hp = nextHp;
  }
  char.hp = Math.min(char.maxHp, nextHp);

  return healed;
}

export function applyResourceRecovery(char: Character, amount: number, combatant?: CombatantState): number {
  if (char.resourceType === 'rage') return 0;

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
