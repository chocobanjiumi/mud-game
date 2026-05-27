import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { CombatEngine } from '../game/combat.js';
import { closeDb, initDb } from '../db/schema.js';
import type { Character, MonsterDef } from '@game/shared';
import { createEmptyEquipmentSlots } from '@game/shared';
import type { MonsterInstance } from '../game/world.js';

function knight(overrides: Partial<Character> = {}): Character {
  return {
    id: 'mounted-knight',
    userId: 'user-1',
    name: '騎士',
    level: 30,
    exp: 0,
    classId: 'knight',
    hp: 300,
    mp: 40,
    maxHp: 300,
    maxMp: 40,
    resource: 80,
    maxResource: 100,
    resourceType: 'rage',
    stats: { str: 20, int: 5, dex: 14, vit: 16, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'training_ground',
    isAi: false,
    equipment: createEmptyEquipmentSlots(),
    activeMountId: 'knight_warhorse',
    mounted: true,
    mountFatigue: 0,
    createdAt: Date.now(),
    lastLogin: Date.now(),
    ...overrides,
  };
}

function monster(overrides: Partial<MonsterDef> = {}): MonsterInstance {
  const def: MonsterDef = {
    id: 'training_dummy',
    name: '訓練假人',
    alias: 'dummy',
    level: 25,
    hp: 1000,
    mp: 0,
    str: 1,
    int: 1,
    dex: 1,
    vit: 10,
    luk: 1,
    element: 'none',
    family: 'construct',
    skills: ['basic_attack'],
    expReward: 0,
    goldReward: [0, 0],
    drops: [],
    aiType: 'passive',
    description: '測試用目標。',
    isBoss: false,
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

describe('mounted combat actions', () => {
  beforeAll(() => {
    initDb();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    closeDb();
  });

  it('rejects charge when the actor is not mounted', () => {
    const engine = new CombatEngine();
    const player = knight({ mounted: false });
    const combatId = engine.startCombat([player], [monster()]);

    engine.submitActionAndResolveRound(combatId, {
      actorId: player.id,
      type: 'mount_charge',
      targetId: 'training_dummy_1',
    });

    const state = engine.getCombatState(combatId)!;
    expect(state.actionLog.join('\n')).toContain('不在騎乘狀態，無法衝鋒');
    expect(state.playerTeam[0].mountFatigue).toBe(0);
    engine.forceEndCombat(combatId);
  });

  it('adds saddle charge bonus to mounted charge damage', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const noSaddleEngine = new CombatEngine();
    const saddleEngine = new CombatEngine();
    const noSaddleKnight = knight({ id: 'no-saddle', equipment: createEmptyEquipmentSlots() });
    const saddleKnight = knight({
      id: 'with-saddle',
      equipment: { ...createEmptyEquipmentSlots(), saddle: 'charger_saddle' },
    });

    const noSaddleCombat = noSaddleEngine.startCombat([noSaddleKnight], [monster({ id: 'dummy_a' })]);
    const saddleCombat = saddleEngine.startCombat([saddleKnight], [monster({ id: 'dummy_b' })]);
    noSaddleEngine.submitActionAndResolveRound(noSaddleCombat, {
      actorId: noSaddleKnight.id,
      type: 'mount_charge',
      targetId: 'dummy_a_1',
    });
    saddleEngine.submitActionAndResolveRound(saddleCombat, {
      actorId: saddleKnight.id,
      type: 'mount_charge',
      targetId: 'dummy_b_1',
    });

    const noSaddleDamage = 1000 - noSaddleEngine.getCombatState(noSaddleCombat)!.enemyTeam[0].hp;
    const saddleDamage = 1000 - saddleEngine.getCombatState(saddleCombat)!.enemyTeam[0].hp;
    expect(saddleDamage).toBeGreaterThan(noSaddleDamage);
    noSaddleEngine.forceEndCombat(noSaddleCombat);
    saddleEngine.forceEndCombat(saddleCombat);
  });

  it('applies mounted guard reduction and fatigue cost', () => {
    const engine = new CombatEngine();
    const player = knight({ mountFatigue: 0 });
    const ally = knight({ id: 'ally', name: '隊友', mounted: false, activeMountId: null });
    const combatId = engine.startCombat([player, ally], [monster()]);

    engine.submitActionAndResolveRound(combatId, {
      actorId: player.id,
      type: 'mounted_guard',
      targetId: ally.id,
    });

    const state = engine.getCombatState(combatId)!;
    expect(state.actionLog.join('\n')).toContain('策馬護住隊友');
    expect(state.playerTeam.find(member => member.id === player.id)?.mountFatigue).toBe(7);
    engine.forceEndCombat(combatId);
  });

  it('recovers mounted fatigue after combat tick and forced dismounts at fatigue cap', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const engine = new CombatEngine();
    const player = knight({ mountFatigue: 35 });
    const combatId = engine.startCombat([player], [monster()]);

    engine.submitActionAndResolveRound(combatId, {
      actorId: player.id,
      type: 'mount_charge',
      targetId: 'training_dummy_1',
    });

    const actor = engine.getCombatState(combatId)!.playerTeam[0];
    expect(actor.mounted).toBe(false);
    expect(actor.mountFatigue).toBe(46);
    engine.forceEndCombat(combatId);
  });
});
