import { describe, expect, it } from 'vitest';
import type { Character, CombatantState } from '@game/shared';
import {
  applyHpRecovery,
  applyResourceRecovery,
  getNaturalMountFatigueDelta,
  getNaturalResourceDelta,
} from '../game/recovery.js';

function makeCharacter(overrides: Partial<Character> = {}): Character {
  return {
    id: 'player-1',
    userId: 'user-1',
    name: 'Tester',
    level: 1,
    exp: 0,
    classId: 'novice',
    hp: 100,
    mp: 40,
    maxHp: 100,
    maxMp: 40,
    resource: 40,
    maxResource: 40,
    resourceType: 'mp',
    stats: { str: 5, int: 5, dex: 5, vit: 5, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'village_square',
    isAi: false,
    equipment: {},
    createdAt: 0,
    lastLogin: 0,
    ...overrides,
  };
}

function makeCombatant(overrides: Partial<CombatantState> = {}): CombatantState {
  return {
    id: 'player-1',
    name: 'Tester',
    isPlayer: true,
    isAi: false,
    hp: 30,
    maxHp: 100,
    mp: 10,
    maxMp: 40,
    resource: 10,
    maxResource: 40,
    resourceType: 'mp',
    level: 1,
    classId: 'novice',
    activeEffects: [],
    isDead: false,
    ...overrides,
  };
}

describe('recovery helpers', () => {
  it('applies HP recovery to the active combatant instead of stale character HP', () => {
    const char = makeCharacter({ hp: 100 });
    const combatant = makeCombatant({ hp: 30 });

    const healed = applyHpRecovery(char, 50, combatant);

    expect(healed).toBe(50);
    expect(combatant.hp).toBe(80);
    expect(char.hp).toBe(80);
  });

  it('caps combat HP recovery at max HP', () => {
    const char = makeCharacter({ hp: 10 });
    const combatant = makeCombatant({ hp: 90 });

    const healed = applyHpRecovery(char, 50, combatant);

    expect(healed).toBe(10);
    expect(combatant.hp).toBe(100);
    expect(char.hp).toBe(100);
  });

  it('syncs MP-style resource recovery to combatant and character fields', () => {
    const char = makeCharacter({ resource: 40, mp: 40 });
    const combatant = makeCombatant({ resource: 10, mp: 10 });

    const recovered = applyResourceRecovery(char, 20, combatant);

    expect(recovered).toBe(20);
    expect(combatant.resource).toBe(30);
    expect(combatant.mp).toBe(30);
    expect(char.resource).toBe(30);
    expect(char.mp).toBe(30);
  });

  it('does not recover rage with resource potions', () => {
    const char = makeCharacter({ resourceType: 'rage', resource: 15, maxResource: 100 });
    const combatant = makeCombatant({ resourceType: 'rage', resource: 15, maxResource: 100 });

    const recovered = applyResourceRecovery(char, 20, combatant);

    expect(recovered).toBe(0);
    expect(combatant.resource).toBe(15);
    expect(char.resource).toBe(15);
  });

  it('decays rage naturally outside combat without going below zero', () => {
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'rage', resource: 15, maxResource: 100 }))).toBe(-5);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'rage', resource: 3, maxResource: 100 }))).toBe(-3);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'rage', resource: 0, maxResource: 100 }))).toBe(0);
  });

  it('moves faith naturally toward 50 without overshooting', () => {
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'faith', resource: 40, maxResource: 100 }))).toBe(2);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'faith', resource: 49, maxResource: 100 }))).toBe(1);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'faith', resource: 50, maxResource: 100 }))).toBe(0);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'faith', resource: 51, maxResource: 100 }))).toBe(-1);
    expect(getNaturalResourceDelta(makeCharacter({ resourceType: 'faith', resource: 80, maxResource: 100 }))).toBe(-2);
  });

  it('recovers mount fatigue outside combat using derived mount recovery', () => {
    expect(getNaturalMountFatigueDelta(makeCharacter({
      activeMountId: 'knight_warhorse',
      mountFatigue: 6,
      equipment: { saddle: null },
    }))).toBe(-1);

    expect(getNaturalMountFatigueDelta(makeCharacter({
      activeMountId: 'knight_warhorse',
      mountFatigue: 6,
      equipment: { saddle: 'silver_rein_saddle' },
    }))).toBe(-2);

    expect(getNaturalMountFatigueDelta(makeCharacter({
      activeMountId: 'knight_warhorse',
      mountFatigue: 1,
      equipment: { saddle: 'silver_rein_saddle' },
    }))).toBe(-1);
  });

  it('does not recover mount fatigue without an active mount', () => {
    expect(getNaturalMountFatigueDelta(makeCharacter({
      activeMountId: null,
      mountFatigue: 6,
      equipment: { saddle: 'silver_rein_saddle' },
    }))).toBe(0);
  });
});
