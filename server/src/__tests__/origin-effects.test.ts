import { describe, expect, it } from 'vitest';
import {
  applyExperienceOriginBonus,
  applyHealingReceivedOriginModifier,
  applyIncomingDamageOriginReduction,
  applyOutgoingDamageOriginBonus,
  applyShopBuyOriginDiscount,
  applyTravelGoldOriginDiscount,
  getFleeOriginBonus,
} from '../game/origin-effects.js';

describe('origin effects', () => {
  it('applies human experience bonus', () => {
    expect(applyExperienceOriginBonus({ raceId: 'human' }, 100)).toBe(103);
    expect(applyExperienceOriginBonus({ raceId: 'elf' }, 100)).toBe(100);
  });

  it('applies Mirak shop and travel discounts', () => {
    expect(applyShopBuyOriginDiscount({ faithId: 'mirak' }, 100)).toBe(98);
    expect(applyTravelGoldOriginDiscount({ faithId: 'mirak' }, 100)).toBe(95);
    expect(applyTravelGoldOriginDiscount({ faithId: 'aelora' }, 100)).toBe(100);
  });

  it('applies flee bonuses and penalties', () => {
    expect(getFleeOriginBonus({ raceId: 'halfling' })).toBe(5);
    expect(getFleeOriginBonus({ faithId: 'karvos' })).toBe(-5);
    expect(getFleeOriginBonus({ raceId: 'halfling', faithId: 'shalan' })).toBe(8);
  });

  it('applies outgoing damage bonuses', () => {
    expect(applyOutgoingDamageOriginBonus({ raceId: 'orc', hp: 34, maxHp: 100 }, 100, null, 2)).toBe(105);
    expect(applyOutgoingDamageOriginBonus({ faithId: 'karvos' }, 100, null, 1)).toBe(103);
    expect(applyOutgoingDamageOriginBonus({ raceId: 'shadowkin', faithId: 'nesha' }, 100, { id: 'dark_bolt', element: 'dark' } as any, 2)).toBe(106);
  });

  it('applies incoming damage and healing modifiers', () => {
    expect(applyIncomingDamageOriginReduction({ raceId: 'dwarf' }, 100, 'physical', 'none')).toBe(98);
    expect(applyIncomingDamageOriginReduction({ faithId: 'brokk' }, 100, 'magical', 'fire')).toBe(97);
    expect(applyIncomingDamageOriginReduction({ raceId: 'shadowkin' }, 100, 'magical', 'light')).toBe(103);
    expect(applyHealingReceivedOriginModifier({ faithId: 'aelora' }, 100)).toBe(103);
    expect(applyHealingReceivedOriginModifier({ faithId: 'nesha' }, 100)).toBe(98);
  });
});
