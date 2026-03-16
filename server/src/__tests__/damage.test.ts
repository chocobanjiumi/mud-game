// Damage formula tests
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  calculateDerived,
  getElementModifier,
  calcHitRate,
  calcDodgeRate,
  calcCritRate,
  rollChance,
  calculateDamage,
  baseStatsToCombat,
  derivedWithDexLuk,
} from '../game/damage.js';
import type { CombatStats, DamageCalcInput } from '../game/damage.js';
import type { DerivedStats } from '@game/shared';

// ============================================================
//  Helpers
// ============================================================

function makeStats(overrides: Partial<CombatStats> = {}): CombatStats {
  return {
    str: 10,
    int: 10,
    dex: 10,
    vit: 10,
    luk: 5,
    level: 1,
    weaponAtk: 0,
    weaponMatk: 0,
    armorDef: 0,
    armorMdef: 0,
    bonusCritRate: 0,
    bonusCritDamage: 0,
    bonusDodgeRate: 0,
    bonusHitRate: 0,
    ...overrides,
  };
}

function makeDerived(stats: CombatStats): DerivedStats {
  return calculateDerived(stats);
}

function makeDamageInput(overrides: Partial<DamageCalcInput> = {}): DamageCalcInput {
  const attackerStats = makeStats();
  const targetStats = makeStats();
  const attackerDerived = makeDerived(attackerStats);
  const targetDerived = makeDerived(targetStats);

  return {
    attackerId: 'attacker-1',
    targetId: 'target-1',
    damageType: 'physical',
    element: 'none',
    targetElement: 'none',
    multiplier: 1.0,
    attacker: derivedWithDexLuk(attackerDerived, attackerStats.dex, attackerStats.luk),
    target: derivedWithDexLuk(targetDerived, targetStats.dex, targetStats.luk),
    ...overrides,
  };
}

// ============================================================
//  Tests
// ============================================================

describe('calculateDerived', () => {
  it('should calculate ATK from STR and weaponAtk', () => {
    const stats = makeStats({ str: 15, weaponAtk: 10 });
    const derived = calculateDerived(stats);
    expect(derived.atk).toBe(15 * 2 + 10); // 40
  });

  it('should calculate MATK from INT and weaponMatk', () => {
    const stats = makeStats({ int: 20, weaponMatk: 5 });
    const derived = calculateDerived(stats);
    expect(derived.matk).toBe(20 * 2 + 5); // 45
  });

  it('should calculate DEF from VIT and armorDef', () => {
    const stats = makeStats({ vit: 10, armorDef: 5 });
    const derived = calculateDerived(stats);
    expect(derived.def).toBe(Math.floor(10 * 1.5) + 5); // 20
  });

  it('should calculate MDEF from INT, VIT and armorMdef', () => {
    const stats = makeStats({ int: 10, vit: 10, armorMdef: 3 });
    const derived = calculateDerived(stats);
    expect(derived.mdef).toBe(Math.floor(10 * 0.5 + 10 * 0.5) + 3); // 13
  });

  it('should calculate critRate from DEX and LUK', () => {
    const stats = makeStats({ dex: 20, luk: 10, bonusCritRate: 5 });
    const derived = calculateDerived(stats);
    expect(derived.critRate).toBe(20 * 0.3 + 10 * 0.2 + 5); // 13
  });

  it('should have base critDamage of 150', () => {
    const stats = makeStats({ bonusCritDamage: 0 });
    const derived = calculateDerived(stats);
    expect(derived.critDamage).toBe(150);
  });

  it('should calculate dodgeRate from DEX and LUK', () => {
    const stats = makeStats({ dex: 15, luk: 10, bonusDodgeRate: 0 });
    const derived = calculateDerived(stats);
    expect(derived.dodgeRate).toBe(15 * 0.4 + 10 * 0.1 + 0); // 7
  });

  it('should have base hitRate of 95 + bonus', () => {
    const stats = makeStats({ bonusHitRate: 5 });
    const derived = calculateDerived(stats);
    expect(derived.hitRate).toBe(100);
  });
});

describe('getElementModifier', () => {
  it('fire vs ice should return 1.3 (+30%)', () => {
    expect(getElementModifier('fire', 'ice')).toBe(1.3);
  });

  it('ice vs lightning should return 1.3 (+30%)', () => {
    expect(getElementModifier('ice', 'lightning')).toBe(1.3);
  });

  it('lightning vs fire should return 1.3 (+30%)', () => {
    expect(getElementModifier('lightning', 'fire')).toBe(1.3);
  });

  it('light vs dark should return 1.25 (+25%)', () => {
    expect(getElementModifier('light', 'dark')).toBe(1.25);
  });

  it('dark vs light should return 1.25 (+25%)', () => {
    expect(getElementModifier('dark', 'light')).toBe(1.25);
  });

  it('ice vs fire (reverse) should return 0.7 (-30%)', () => {
    expect(getElementModifier('ice', 'fire')).toBe(0.7);
  });

  it('fire vs fire (same) should return 1.0', () => {
    expect(getElementModifier('fire', 'fire')).toBe(1.0);
  });

  it('none vs fire should return 1.0 (neutral)', () => {
    expect(getElementModifier('none', 'fire')).toBe(1.0);
  });

  it('fire vs none should return 1.0 (neutral)', () => {
    expect(getElementModifier('fire', 'none')).toBe(1.0);
  });

  it('nature vs any should return 1.0', () => {
    expect(getElementModifier('nature', 'fire')).toBe(1.0);
    expect(getElementModifier('fire', 'nature')).toBe(1.0);
  });
});

describe('calcHitRate', () => {
  it('should return 95 when DEX are equal and no bonus', () => {
    expect(calcHitRate(10, 10)).toBe(95);
  });

  it('should increase with attacker DEX advantage', () => {
    expect(calcHitRate(20, 10)).toBe(95 + 10 * 0.5); // 100
  });

  it('should decrease with defender DEX advantage', () => {
    expect(calcHitRate(10, 20)).toBe(95 - 10 * 0.5); // 90
  });

  it('should clamp to minimum 5%', () => {
    expect(calcHitRate(1, 200)).toBe(5);
  });

  it('should clamp to maximum 100%', () => {
    expect(calcHitRate(200, 1)).toBe(100);
  });
});

describe('calcDodgeRate', () => {
  it('should calculate from DEX and LUK', () => {
    expect(calcDodgeRate(10, 5)).toBe(10 * 0.4 + 5 * 0.1); // 4.5
  });

  it('should cap at 80%', () => {
    expect(calcDodgeRate(200, 200)).toBe(80);
  });

  it('should not go below 0', () => {
    expect(calcDodgeRate(0, 0)).toBe(0);
  });
});

describe('calcCritRate', () => {
  it('should calculate from DEX and LUK', () => {
    expect(calcCritRate(10, 5)).toBe(10 * 0.3 + 5 * 0.2); // 4
  });

  it('should cap at 80%', () => {
    expect(calcCritRate(200, 200)).toBe(80);
  });

  it('should not go below 0', () => {
    expect(calcCritRate(0, 0)).toBe(0);
  });
});

describe('calculateDamage - physical', () => {
  beforeEach(() => {
    // Force deterministic: always hit, never dodge, never crit, variance = 1.0
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  it('should calculate basic physical damage (ATK * multiplier - DEF * 0.5)', () => {
    // With random = 0.5:
    // rollChance(hitRate ~95) -> 0.5*100=50 < 95 => hit
    // rollChance(dodgeRate ~4.5) -> 50 < 4.5 => false => no dodge
    // rollChance(critRate ~4) -> 50 < 4 => false => no crit
    // variance = 0.95 + 0.5*0.1 = 1.0
    const attackerStats = makeStats({ str: 20, weaponAtk: 10 });
    const targetStats = makeStats({ vit: 10, armorDef: 5 });
    const ad = calculateDerived(attackerStats);
    const td = calculateDerived(targetStats);

    const result = calculateDamage({
      attackerId: 'a',
      targetId: 't',
      damageType: 'physical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1.0,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    });

    // ATK = 20*2 + 10 = 50
    // DEF = floor(10*1.5) + 5 = 20
    // baseDmg = 50 * 1.0 - 20 * 0.5 = 40
    // no crit, element 1.0, variance 1.0
    // final = floor(40) = 40
    expect(result.damage).toBe(40);
    expect(result.isCrit).toBe(false);
    expect(result.isMiss).toBe(false);
    expect(result.isDodged).toBe(false);
  });

  it('should enforce minimum damage of 1', () => {
    const attackerStats = makeStats({ str: 1, weaponAtk: 0 });
    const targetStats = makeStats({ vit: 50, armorDef: 100 });
    const ad = calculateDerived(attackerStats);
    const td = calculateDerived(targetStats);

    const result = calculateDamage({
      attackerId: 'a',
      targetId: 't',
      damageType: 'physical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1.0,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    });

    expect(result.damage).toBeGreaterThanOrEqual(1);
  });

  it('should apply zero armor correctly', () => {
    const attackerStats = makeStats({ str: 10, weaponAtk: 5 });
    const targetStats = makeStats({ vit: 0, armorDef: 0 });
    const ad = calculateDerived(attackerStats);
    const td = calculateDerived(targetStats);

    const result = calculateDamage({
      attackerId: 'a',
      targetId: 't',
      damageType: 'physical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1.0,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    });

    // ATK = 10*2 + 5 = 25, DEF = floor(0*1.5)+0 = 0
    // baseDmg = 25 * 1.0 - 0 * 0.5 = 25
    expect(result.damage).toBe(25);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});

describe('calculateDamage - magical', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  it('should calculate magical damage (MATK * multiplier - MDEF * 0.3)', () => {
    const attackerStats = makeStats({ int: 20, weaponMatk: 10 });
    const targetStats = makeStats({ int: 10, vit: 10, armorMdef: 5 });
    const ad = calculateDerived(attackerStats);
    const td = calculateDerived(targetStats);

    const result = calculateDamage({
      attackerId: 'a',
      targetId: 't',
      damageType: 'magical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1.5,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    });

    // MATK = 20*2 + 10 = 50
    // MDEF = floor(10*0.5 + 10*0.5) + 5 = 15
    // baseDmg = 50 * 1.5 - 15 * 0.3 = 75 - 4.5 = 70.5
    // floor(70.5) = 70
    expect(result.damage).toBe(70);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});

describe('calculateDamage - critical hit', () => {
  it('should apply critDamage multiplier when crit occurs', () => {
    // Make random return values that force: hit, no dodge, crit
    let callCount = 0;
    vi.spyOn(Math, 'random').mockImplementation(() => {
      callCount++;
      // call 1: hitRate check -> need < hitRate/100 => return 0
      // call 2: dodgeRate check -> need >= dodgeRate/100 => return 0.99
      // call 3: critRate check -> need < critRate/100 => return 0
      // call 4: variance -> return 0.5 (for 1.0)
      if (callCount === 1) return 0; // hit success
      if (callCount === 2) return 0.99; // dodge fail
      if (callCount === 3) return 0; // crit success
      return 0.5; // variance = 1.0
    });

    const attackerStats = makeStats({ str: 20, dex: 50, luk: 50 });
    const targetStats = makeStats({ vit: 5 });
    const ad = calculateDerived(attackerStats);
    const td = calculateDerived(targetStats);

    const result = calculateDamage({
      attackerId: 'a',
      targetId: 't',
      damageType: 'physical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1.0,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    });

    expect(result.isCrit).toBe(true);
    // Base ATK = 20*2 = 40, DEF = floor(5*1.5) = 7
    // baseDmg = 40 - 7*0.5 = 36.5
    // critDamage = 150 => baseDmg * (150/100) = 36.5 * 1.5 = 54.75
    // floor(54.75) = 54
    expect(result.damage).toBe(54);

    vi.restoreAllMocks();
  });
});

describe('calculateDamage - dodge/miss', () => {
  it('should return isMiss=true when hit roll fails', () => {
    // Force miss: random returns > hitRate/100
    vi.spyOn(Math, 'random').mockReturnValue(0.99);

    const result = calculateDamage(makeDamageInput());

    expect(result.isMiss).toBe(true);
    expect(result.damage).toBe(0);

    vi.restoreAllMocks();
  });

  it('should return isDodged=true when dodge roll succeeds', () => {
    let callCount = 0;
    vi.spyOn(Math, 'random').mockImplementation(() => {
      callCount++;
      if (callCount === 1) return 0; // hit success
      if (callCount === 2) return 0; // dodge success (need < dodgeRate/100)
      return 0.5;
    });

    // High DEX target to ensure dodgeRate is meaningful
    const targetStats = makeStats({ dex: 100, luk: 50 });
    const td = calculateDerived(targetStats);

    const result = calculateDamage(makeDamageInput({
      target: derivedWithDexLuk(td, targetStats.dex, targetStats.luk),
    }));

    expect(result.isDodged).toBe(true);
    expect(result.damage).toBe(0);

    vi.restoreAllMocks();
  });
});

describe('calculateDamage - element advantage', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  it('fire vs ice should deal +30% damage', () => {
    const result = calculateDamage(makeDamageInput({
      element: 'fire',
      targetElement: 'ice',
    }));

    expect(result.elementBonus).toBeCloseTo(0.3, 1);
    expect(result.damage).toBeGreaterThan(0);
  });

  it('light vs dark should deal +25% damage', () => {
    const result = calculateDamage(makeDamageInput({
      element: 'light',
      targetElement: 'dark',
    }));

    expect(result.elementBonus).toBeCloseTo(0.25, 2);
  });

  it('element disadvantage should reduce damage', () => {
    const result = calculateDamage(makeDamageInput({
      element: 'ice',
      targetElement: 'fire',
    }));

    expect(result.elementBonus).toBeCloseTo(-0.3, 1);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});

describe('calculateDamage - healing', () => {
  it('should calculate healing amount when isHealing is true', () => {
    const attackerStats = makeStats({ int: 20, weaponMatk: 10 });
    const ad = calculateDerived(attackerStats);

    const result = calculateDamage(makeDamageInput({
      isHealing: true,
      multiplier: 2.0,
      attacker: derivedWithDexLuk(ad, attackerStats.dex, attackerStats.luk),
    }));

    // MATK = 20*2 + 10 = 50
    // healing = floor(50 * 2.0) = 100
    expect(result.healing).toBe(100);
    expect(result.damage).toBe(0);
    expect(result.isMiss).toBe(false);
  });
});

describe('baseStatsToCombat', () => {
  it('should create CombatStats with correct defaults', () => {
    const base = { str: 10, int: 8, dex: 12, vit: 6, luk: 4 };
    const cs = baseStatsToCombat(base, 5, 15, 10, 8, 3);

    expect(cs.str).toBe(10);
    expect(cs.level).toBe(5);
    expect(cs.weaponAtk).toBe(15);
    expect(cs.weaponMatk).toBe(10);
    expect(cs.armorDef).toBe(8);
    expect(cs.armorMdef).toBe(3);
    expect(cs.bonusCritRate).toBe(0);
    expect(cs.bonusCritDamage).toBe(0);
  });
});
