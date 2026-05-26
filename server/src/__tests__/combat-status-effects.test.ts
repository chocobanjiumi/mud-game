import { describe, expect, it } from 'vitest';
import type { ActiveStatusEffect, Character, DerivedStats, MonsterDef } from '@game/shared';
import { applyActiveEffectStatModifiers, CombatEngine } from '../game/combat.js';
import { EffectEngine } from '../game/effects.js';
import type { MonsterInstance } from '../game/world.js';

function stats(): DerivedStats {
  return { atk: 100, matk: 80, def: 50, mdef: 40, critRate: 10, critDamage: 150, dodgeRate: 20, hitRate: 95 };
}

function effect(type: ActiveStatusEffect['type'], value: number, remainingDuration = 2): ActiveStatusEffect {
  return { type, value, duration: remainingDuration, remainingDuration };
}

function character(): Character {
  return {
    id: 'status-player',
    userId: 'status-user',
    name: 'Status Tester',
    level: 20,
    exp: 0,
    classId: 'swordsman',
    hp: 300,
    mp: 60,
    maxHp: 300,
    maxMp: 60,
    stats: { str: 20, int: 5, dex: 10, vit: 10, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'arena',
    isAi: false,
    equipment: { weapon: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
  };
}

function monster(overrides: Partial<MonsterDef> = {}): MonsterInstance {
  const def: MonsterDef = {
    id: 'status_boss',
    name: 'Status Boss',
    level: 20,
    hp: 1000,
    mp: 100,
    str: 10,
    int: 10,
    dex: 5,
    vit: 10,
    luk: 5,
    element: 'none',
    skills: ['basic_attack'],
    expReward: 1,
    goldReward: [0, 0],
    drops: [],
    aiType: 'boss',
    description: 'Boss control test target.',
    isBoss: true,
    ...overrides,
  };
  return {
    instanceId: `${def.id}_1`,
    monsterId: def.id,
    def,
    hp: def.hp,
    maxHp: def.hp,
    mp: def.mp,
    maxMp: def.mp,
    isDead: false,
    respawnAt: null,
  };
}

describe('combat status effects', () => {
  it('applies buff and debuff stat modifiers to the same derived stat object', () => {
    const derived = stats();
    applyActiveEffectStatModifiers(derived, [
      effect('atk_down', 20),
      effect('def_down', 40),
      effect('matk_up', 25),
      effect('mdef_up', 50),
      effect('dodge_up', 10),
      effect('crit_up', 5),
    ]);

    expect(derived.atk).toBe(80);
    expect(derived.def).toBe(30);
    expect(derived.matk).toBe(100);
    expect(derived.mdef).toBe(60);
    expect(derived.dodgeRate).toBe(30);
    expect(derived.critRate).toBe(15);
  });

  it('caps slow and damage reduction guardrails', () => {
    const derived = stats();
    applyActiveEffectStatModifiers(derived, [effect('slow', 200)]);
    expect(derived.dodgeRate).toBeCloseTo(2);

    const engine = new EffectEngine();
    expect(engine.getDamageReduction([effect('damage_reduction', 120)])).toBe(80);
  });

  it('refreshes same-source DoT and does not expire an instant-applied one tick control immediately', () => {
    const engine = new EffectEngine();
    const effects: ActiveStatusEffect[] = [];
    engine.applyEffect(effects, { type: 'poison', value: 5, duration: 2, source: 'skill_a' });
    engine.applyEffect(effects, { type: 'poison', value: 7, duration: 3, source: 'skill_a' });
    expect(effects).toHaveLength(1);
    expect(effects[0]).toMatchObject({ value: 7, remainingDuration: 3 });

    engine.applyEffect(effects, { type: 'stun', value: 1, duration: 1, source: 'skill_b' });
    expect(engine.isControlled(effects)).toBe(true);
    expect(effects.find(active => active.type === 'stun')?.remainingDuration).toBe(1);
  });

  it('caps boss control duration and blocks repeated control in the same immunity window', () => {
    const engine = new CombatEngine();
    const boss = monster();
    const combatId = engine.startCombat([character()], [boss]);

    const first = engine.applyEffectToEnemy(combatId, boss.instanceId, { type: 'stun', value: 1, duration: 3, source: 'test' });
    const second = engine.applyEffectToEnemy(combatId, boss.instanceId, { type: 'freeze', value: 1, duration: 2, source: 'test' });
    const state = engine.getCombatState(combatId);
    const target = state?.enemyTeam[0];

    expect(first).toContain('短暫抗性');
    expect(second).toContain('抵抗');
    expect(target?.activeEffects).toHaveLength(1);
    expect(target?.activeEffects[0]).toMatchObject({ type: 'stun', duration: 1, remainingDuration: 1 });

    engine.forceEndCombat(combatId);
  });
});
