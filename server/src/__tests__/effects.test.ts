// Status effect tests
import { describe, it, expect, beforeEach } from 'vitest';
import { EffectEngine } from '../game/effects.js';
import type { ActiveStatusEffect, StatusEffect } from '@game/shared';

// ============================================================
//  Helpers
// ============================================================

function makeEffect(overrides: Partial<StatusEffect> = {}): StatusEffect {
  return {
    type: 'atk_up',
    value: 10,
    duration: 3,
    source: 'source-1',
    ...overrides,
  };
}

function makeActiveEffect(overrides: Partial<ActiveStatusEffect> = {}): ActiveStatusEffect {
  return {
    type: 'atk_up',
    value: 10,
    duration: 3,
    source: 'source-1',
    remainingDuration: 3,
    ...overrides,
  };
}

// ============================================================
//  Tests
// ============================================================

describe('EffectEngine', () => {
  let engine: EffectEngine;

  beforeEach(() => {
    engine = new EffectEngine();
  });

  // ── Apply buff ──

  describe('applyEffect - buff', () => {
    it('should apply a buff with correct value and duration', () => {
      const effects: ActiveStatusEffect[] = [];
      engine.applyEffect(effects, makeEffect({ type: 'atk_up', value: 15, duration: 5 }));

      expect(effects).toHaveLength(1);
      expect(effects[0].type).toBe('atk_up');
      expect(effects[0].value).toBe(15);
      expect(effects[0].remainingDuration).toBe(5);
    });

    it('should apply a debuff with correct value and duration', () => {
      const effects: ActiveStatusEffect[] = [];
      engine.applyEffect(effects, makeEffect({ type: 'atk_down', value: 20, duration: 4 }));

      expect(effects).toHaveLength(1);
      expect(effects[0].type).toBe('atk_down');
      expect(effects[0].value).toBe(20);
      expect(effects[0].remainingDuration).toBe(4);
    });
  });

  // ── Tick duration ──

  describe('tickEffects - duration countdown', () => {
    it('should decrement remaining duration each tick', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up', remainingDuration: 3 }),
      ];

      engine.tickEffects(effects, 'Player');
      expect(effects[0].remainingDuration).toBe(2);

      engine.tickEffects(effects, 'Player');
      expect(effects[0].remainingDuration).toBe(1);
    });

    it('should remove effect when duration reaches 0', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up', remainingDuration: 1 }),
      ];

      const result = engine.tickEffects(effects, 'Player');

      expect(effects).toHaveLength(0);
      expect(result.expiredEffects).toHaveLength(1);
      expect(result.expiredEffects[0].type).toBe('atk_up');
    });
  });

  // ── DoT damage ──

  describe('tickEffects - DoT (Damage over Time)', () => {
    it('should deal poison tick damage', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({
          type: 'poison',
          value: 10,
          remainingDuration: 3,
          tickDamage: 10,
        }),
      ];

      const result = engine.tickEffects(effects, 'Player');

      expect(result.damage).toBe(10);
      expect(result.messages.length).toBeGreaterThan(0);
    });

    it('should deal burn tick damage', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({
          type: 'burn',
          value: 5,
          remainingDuration: 2,
          tickDamage: 5,
        }),
      ];

      const result = engine.tickEffects(effects, 'Player');
      expect(result.damage).toBe(5);
    });
  });

  // ── HoT healing ──

  describe('tickEffects - HoT (Heal over Time)', () => {
    it('should provide regen healing', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({
          type: 'regen',
          value: 8,
          remainingDuration: 3,
          tickHealing: 8,
        }),
      ];

      const result = engine.tickEffects(effects, 'Player');

      expect(result.healing).toBe(8);
      expect(result.messages.length).toBeGreaterThan(0);
    });

    it('should restore MP for mana_regen', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({
          type: 'mana_regen',
          value: 5,
          remainingDuration: 3,
          tickHealing: 5,
        }),
      ];

      const result = engine.tickEffects(effects, 'Player');

      expect(result.mpRestored).toBe(5);
    });
  });

  // ── Stacking rules ──

  describe('applyEffect - stacking rules', () => {
    it('same source poison should refresh duration (not stack)', () => {
      const effects: ActiveStatusEffect[] = [];

      engine.applyEffect(effects, makeEffect({
        type: 'poison', value: 5, duration: 3, source: 'goblin',
      }));
      expect(effects).toHaveLength(1);

      engine.applyEffect(effects, makeEffect({
        type: 'poison', value: 5, duration: 5, source: 'goblin',
      }));
      // Same source -> refresh, not add
      expect(effects).toHaveLength(1);
      expect(effects[0].remainingDuration).toBe(5);
    });

    it('different source poison should stack', () => {
      const effects: ActiveStatusEffect[] = [];

      engine.applyEffect(effects, makeEffect({
        type: 'poison', value: 5, duration: 3, source: 'goblin',
      }));
      engine.applyEffect(effects, makeEffect({
        type: 'poison', value: 8, duration: 3, source: 'spider',
      }));

      expect(effects).toHaveLength(2);
    });

    it('non-stackable buff should overwrite if stronger', () => {
      const effects: ActiveStatusEffect[] = [];

      engine.applyEffect(effects, makeEffect({
        type: 'atk_up', value: 5, duration: 3, source: 'buff-1',
      }));
      engine.applyEffect(effects, makeEffect({
        type: 'atk_up', value: 10, duration: 3, source: 'buff-2',
      }));

      // Non-stackable, should overwrite (newer is stronger)
      expect(effects).toHaveLength(1);
      expect(effects[0].value).toBe(10);
    });

    it('atk_up should remove atk_down (exclusive groups)', () => {
      const effects: ActiveStatusEffect[] = [];

      engine.applyEffect(effects, makeEffect({
        type: 'atk_down', value: 10, duration: 3, source: 'debuff',
      }));
      expect(effects).toHaveLength(1);
      expect(effects[0].type).toBe('atk_down');

      engine.applyEffect(effects, makeEffect({
        type: 'atk_up', value: 15, duration: 3, source: 'buff',
      }));

      // atk_down should be removed, only atk_up remains
      const types = effects.map(e => e.type);
      expect(types).not.toContain('atk_down');
      expect(types).toContain('atk_up');
    });
  });

  // ── Remove debuffs (purify) ──

  describe('removeAllDebuffs - purify', () => {
    it('should remove all debuffs but keep buffs', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up', value: 10, remainingDuration: 3 }),
        makeActiveEffect({ type: 'poison', value: 5, remainingDuration: 2, tickDamage: 5 }),
        makeActiveEffect({ type: 'stun', value: 1, remainingDuration: 1 }),
        makeActiveEffect({ type: 'regen', value: 8, remainingDuration: 4, tickHealing: 8 }),
      ];

      const removed = engine.removeAllDebuffs(effects);

      expect(removed).toHaveLength(2); // poison, stun
      expect(effects).toHaveLength(2); // atk_up, regen remain
      expect(effects.map(e => e.type)).toContain('atk_up');
      expect(effects.map(e => e.type)).toContain('regen');
    });

    it('should return empty array if no debuffs', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up', value: 10, remainingDuration: 3 }),
      ];

      const removed = engine.removeAllDebuffs(effects);
      expect(removed).toHaveLength(0);
      expect(effects).toHaveLength(1);
    });
  });

  // ── Shield absorption ──

  describe('absorbWithShield', () => {
    it('should absorb damage with shield', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'shield', value: 50, remainingDuration: 3 }),
      ];

      const result = engine.absorbWithShield(effects, 30);

      expect(result.absorbedDamage).toBe(30);
      expect(result.remainingDamage).toBe(0);
      expect(effects).toHaveLength(1); // shield still exists
      expect(effects[0].value).toBe(20); // 50 - 30
    });

    it('should break shield when damage exceeds shield value', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'shield', value: 30, remainingDuration: 3 }),
      ];

      const result = engine.absorbWithShield(effects, 50);

      expect(result.absorbedDamage).toBe(30);
      expect(result.remainingDamage).toBe(20);
      expect(effects).toHaveLength(0); // shield removed
    });

    it('should return full damage when no shield exists', () => {
      const effects: ActiveStatusEffect[] = [];

      const result = engine.absorbWithShield(effects, 100);

      expect(result.absorbedDamage).toBe(0);
      expect(result.remainingDamage).toBe(100);
    });

    it('should remove shield when value reaches exactly 0', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'shield', value: 50, remainingDuration: 3 }),
      ];

      const result = engine.absorbWithShield(effects, 50);

      expect(result.absorbedDamage).toBe(50);
      expect(result.remainingDamage).toBe(0);
      expect(effects).toHaveLength(0);
    });
  });

  // ── Effect queries ──

  describe('hasEffect', () => {
    it('should return true if effect exists', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'stun' }),
      ];
      expect(engine.hasEffect(effects, 'stun')).toBe(true);
    });

    it('should return false if effect does not exist', () => {
      expect(engine.hasEffect([], 'stun')).toBe(false);
    });
  });

  describe('getEffectValue', () => {
    it('should sum values of stacked effects', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'poison', value: 5, source: 'a' }),
        makeActiveEffect({ type: 'poison', value: 8, source: 'b' }),
      ];

      expect(engine.getEffectValue(effects, 'poison')).toBe(13);
    });
  });

  describe('isControlled', () => {
    it('should return true if stunned', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'stun' }),
      ];
      expect(engine.isControlled(effects)).toBe(true);
    });

    it('should return true if frozen', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'freeze' }),
      ];
      expect(engine.isControlled(effects)).toBe(true);
    });

    it('should return false with no CC', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up' }),
      ];
      expect(engine.isControlled(effects)).toBe(false);
    });
  });

  describe('effectName', () => {
    it('should return Chinese name for known effects', () => {
      expect(engine.effectName('poison')).toBe('中毒');
      expect(engine.effectName('shield')).toBe('護盾');
      expect(engine.effectName('atk_up')).toBe('攻擊上升');
    });
  });

  // ── Effect expiry ──

  describe('effect expiry', () => {
    it('should properly expire multiple effects with different durations', () => {
      const effects: ActiveStatusEffect[] = [
        makeActiveEffect({ type: 'atk_up', remainingDuration: 1 }),
        makeActiveEffect({ type: 'def_up', remainingDuration: 3 }),
        makeActiveEffect({ type: 'regen', value: 5, remainingDuration: 2, tickHealing: 5 }),
      ];

      // Tick 1: atk_up expires
      const result1 = engine.tickEffects(effects, 'Player');
      expect(result1.expiredEffects).toHaveLength(1);
      expect(result1.expiredEffects[0].type).toBe('atk_up');
      expect(effects).toHaveLength(2);

      // Tick 2: regen expires
      const result2 = engine.tickEffects(effects, 'Player');
      expect(result2.expiredEffects).toHaveLength(1);
      expect(result2.expiredEffects[0].type).toBe('regen');
      expect(effects).toHaveLength(1);

      // Tick 3: def_up expires
      const result3 = engine.tickEffects(effects, 'Player');
      expect(result3.expiredEffects).toHaveLength(1);
      expect(result3.expiredEffects[0].type).toBe('def_up');
      expect(effects).toHaveLength(0);
    });
  });
});
