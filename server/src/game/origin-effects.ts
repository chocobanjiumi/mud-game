import type { ElementType, FaithId, RaceId, SkillDef } from '@game/shared';

type OriginSource = {
  raceId?: RaceId;
  faithId?: FaithId;
};

function raceOf(source: OriginSource): RaceId | undefined {
  return source.raceId;
}

function faithOf(source: OriginSource): FaithId | undefined {
  return source.faithId;
}

export function applyExperienceOriginBonus(char: OriginSource, amount: number): number {
  if (amount <= 0) return amount;
  return raceOf(char) === 'human' ? Math.max(1, Math.floor(amount * 1.03)) : amount;
}

export function applyShopBuyOriginDiscount(char: OriginSource, price: number): number {
  if (price <= 0) return price;
  return faithOf(char) === 'mirak' ? Math.max(1, Math.floor(price * 0.98)) : price;
}

export function applyTravelGoldOriginDiscount(char: OriginSource, amount: number): number {
  if (amount <= 0) return amount;
  return faithOf(char) === 'mirak' ? Math.max(1, Math.floor(amount * 0.95)) : amount;
}

export function getFleeOriginBonus(char: OriginSource): number {
  let bonus = 0;
  if (raceOf(char) === 'halfling') bonus += 5;
  if (faithOf(char) === 'karvos') bonus -= 5;
  if (faithOf(char) === 'shalan') bonus += 3;
  return bonus;
}

export function applyOutgoingDamageOriginBonus(
  actor: OriginSource & { hp?: number; maxHp?: number },
  damage: number,
  skillDef: SkillDef | null | undefined,
  round: number,
): number {
  if (damage <= 0) return damage;
  let multiplier = 1;
  const raceId = raceOf(actor);
  const faithId = faithOf(actor);
  const element = skillDef?.element;

  if (raceId === 'orc' && actor.maxHp && actor.hp !== undefined && actor.hp / actor.maxHp < 0.35) {
    multiplier *= 1.05;
  }
  if (raceId === 'shadowkin' && element === 'dark') {
    multiplier *= 1.03;
  }
  if (faithId === 'karvos' && round === 1) {
    multiplier *= 1.03;
  }
  if (faithId === 'nesha' && element === 'dark') {
    multiplier *= 1.03;
  }

  return Math.max(1, Math.floor(damage * multiplier));
}

export function applyIncomingDamageOriginReduction(
  target: OriginSource,
  damage: number,
  damageType: 'physical' | 'magical' | 'pure',
  element: ElementType,
): number {
  if (damage <= 0) return damage;
  let multiplier = 1;
  const raceId = raceOf(target);
  const faithId = faithOf(target);

  if (raceId === 'dwarf' && damageType === 'physical') multiplier *= 0.98;
  if (raceId === 'shadowkin' && element === 'light') multiplier *= 1.03;
  if (raceId === 'dragonborn' && element !== 'none') multiplier *= 0.98;
  if (faithId === 'talorn' && element === 'lightning') multiplier *= 0.97;
  if (faithId === 'brokk' && element === 'fire') multiplier *= 0.97;
  if (faithId === 'aelora' && element === 'dark') multiplier *= 0.97;
  if (faithId === 'oser' && element === 'dark') multiplier *= 0.97;
  if (faithId === 'oser' && element === 'light') multiplier *= 1.02;

  return Math.max(1, Math.floor(damage * multiplier));
}

export function applyHealingReceivedOriginModifier(target: OriginSource, amount: number): number {
  if (amount <= 0) return amount;
  let multiplier = 1;
  if (faithOf(target) === 'aelora') multiplier *= 1.03;
  if (faithOf(target) === 'nesha') multiplier *= 0.98;
  return Math.max(1, Math.floor(amount * multiplier));
}
