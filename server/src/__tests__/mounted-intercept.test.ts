import { describe, expect, it } from 'vitest';
import type { DerivedMountStats, MonsterDef } from '@game/shared';
import { resolveMountedIntercept, selectMountedInterceptTarget, type MountedInterceptTarget } from '../game/mounted-intercept.js';

function target(overrides: Partial<MountedInterceptTarget> = {}): MountedInterceptTarget {
  return {
    instanceId: 'approach-1',
    monsterId: 'wolf',
    name: '野狼',
    sourceDirection: 'north',
    arrivalTicks: 2,
    ...overrides,
  };
}

function mountStats(overrides: Partial<DerivedMountStats> = {}): DerivedMountStats {
  return {
    chargePower: 10,
    stability: 10,
    guardPower: 8,
    fatigueMax: 40,
    fatigueRecovery: 1,
    interceptBonus: 0,
    retreatBonus: 0,
    threatBonus: 0,
    ...overrides,
  };
}

function monster(overrides: Partial<MonsterDef> = {}): MonsterDef {
  return {
    id: 'wolf',
    name: '野狼',
    alias: 'wolf',
    level: 5,
    hp: 50,
    mp: 0,
    str: 8,
    int: 1,
    dex: 8,
    vit: 6,
    luk: 1,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack'],
    expReward: 10,
    goldReward: [1, 2],
    drops: [],
    aiType: 'aggressive',
    description: '測試怪。',
    isBoss: false,
    ...overrides,
  };
}

describe('mounted intercept helpers', () => {
  it('selects exact approaching instance id before direction fallback', () => {
    const targets = [
      target({ instanceId: 'north-1', sourceDirection: 'north' }),
      target({ instanceId: 'east-1', sourceDirection: 'east' }),
    ];

    expect(selectMountedInterceptTarget(targets, 'east-1')?.instanceId).toBe('east-1');
    expect(selectMountedInterceptTarget(targets, 'direction:north')?.instanceId).toBe('north-1');
    expect(selectMountedInterceptTarget(targets, 'north')?.instanceId).toBe('north-1');
  });

  it('falls back to the first approaching target when no argument matches', () => {
    const targets = [
      target({ instanceId: 'first', sourceDirection: 'north' }),
      target({ instanceId: 'second', sourceDirection: 'east' }),
    ];

    expect(selectMountedInterceptTarget(targets, 'west')?.instanceId).toBe('first');
  });

  it('resolves failure, success, strong success, and elite/boss resistance', () => {
    const normal = monster({ level: 5 });

    expect(resolveMountedIntercept(mountStats({ stability: 5 }), { str: 1, dex: 1 }, normal).delay).toBe(0);
    expect(resolveMountedIntercept(mountStats({ stability: 18 }), { str: 6, dex: 6 }, normal).delay).toBe(1);
    expect(resolveMountedIntercept(mountStats({ stability: 25, interceptBonus: 10 }), { str: 10, dex: 10 }, normal).delay).toBe(2);

    const eliteDifficulty = resolveMountedIntercept(mountStats({ stability: 18 }), { str: 6, dex: 6 }, monster({ level: 5, isElite: true }));
    const bossDifficulty = resolveMountedIntercept(mountStats({ stability: 18 }), { str: 6, dex: 6 }, monster({ level: 5, isBoss: true }));
    expect(eliteDifficulty.difficulty).toBe(40);
    expect(bossDifficulty.difficulty).toBe(50);
  });
});
