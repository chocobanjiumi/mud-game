import { describe, expect, it } from 'vitest';
import { COMBAT_ACTION_ICON_RECTS, STATUS_EFFECT_DEFS, getStatusEffectDef, getStatusIconRect } from '@game/shared';
import { EffectEngine } from '../game/effects.js';

describe('status effect definitions', () => {
  it('defines every status effect with category, polarity, rules, and implementation status', () => {
    for (const [type, def] of Object.entries(STATUS_EFFECT_DEFS)) {
      expect(def.type).toBe(type);
      expect(def.name.length).toBeGreaterThan(0);
      expect(def.category).toBeTruthy();
      expect(def.polarity).toMatch(/positive|negative|neutral/);
      expect(def.stackRule).toBeTruthy();
      expect(def.implementationStatus).toMatch(/implemented|partial|visual_only|disabled/);
    }
  });

  it('connects the first atlas status icons to fixed coordinates', () => {
    expect(getStatusIconRect('poison')).toMatchObject({ x: 400, y: 100, width: 200, height: 200 });
    expect(getStatusIconRect('atk_down')).toMatchObject({ x: 600, y: 500, width: 200, height: 200 });
    expect(getStatusIconRect('mana_regen')).toMatchObject({ x: 1000, y: 700, width: 200, height: 200 });
  });

  it('connects combat action atlas icons to fixed coordinates', () => {
    expect(COMBAT_ACTION_ICON_RECTS.attack).toMatchObject({ x: 440, y: 380, width: 240, height: 240 });
    expect(COMBAT_ACTION_ICON_RECTS.defend).toMatchObject({ x: 680, y: 380, width: 240, height: 240 });
    expect(COMBAT_ACTION_ICON_RECTS.flee).toMatchObject({ x: 920, y: 380, width: 240, height: 240 });
  });

  it('uses central polarity rules for cleanse and dispel', () => {
    const engine = new EffectEngine();
    const effects = [
      { type: 'poison' as const, value: 5, duration: 3, remainingDuration: 3 },
      { type: 'shield' as const, value: 20, duration: 2, remainingDuration: 2 },
      { type: 'mark' as const, value: 10, duration: 2, remainingDuration: 2 },
      { type: 'invincible' as const, value: 1, duration: 1, remainingDuration: 1 },
    ];

    const cleansed = engine.removeAllDebuffs(effects);
    expect(cleansed.map(effect => effect.type).sort()).toEqual(['mark', 'poison']);
    expect(effects.map(effect => effect.type).sort()).toEqual(['invincible', 'shield']);

    const dispelled = engine.removeAllBuffs(effects);
    expect(dispelled.map(effect => effect.type)).toEqual(['shield']);
    expect(effects.map(effect => effect.type)).toEqual(['invincible']);
    expect(getStatusEffectDef('invincible').dispellable).toBe(false);
  });
});
