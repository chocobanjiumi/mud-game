import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import type { Character, MonsterDef } from '@game/shared';
import { CombatEngine } from '../game/combat.js';
import { closeDb, initDb } from '../db/schema.js';
import type { MonsterInstance } from '../game/world.js';

function makeCharacter(overrides: Partial<Character> = {}): Character {
  return {
    id: 'flee-player',
    userId: 'flee-user',
    name: 'Flee Tester',
    level: 10,
    exp: 0,
    classId: 'swordsman',
    hp: 200,
    mp: 50,
    maxHp: 200,
    maxMp: 50,
    resource: 0,
    maxResource: 100,
    resourceType: 'rage',
    stats: { str: 10, int: 5, dex: 10, vit: 10, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'village_square',
    isAi: false,
    equipment: { weapon: null, offhand: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
    ...overrides,
  };
}

function makeMonster(overrides: Partial<MonsterDef> = {}): MonsterInstance {
  const def: MonsterDef = {
    id: 'flee_wolf',
    name: 'Flee Wolf',
    level: 10,
    hp: 200,
    mp: 0,
    str: 25,
    int: 1,
    dex: 25,
    vit: 10,
    luk: 1,
    element: 'none',
    skills: ['basic_attack'],
    expReward: 1,
    goldReward: [0, 0],
    drops: [],
    aiType: 'aggressive',
    description: 'Fast enough to punish failed escape.',
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

describe('instant flee resolution', () => {
  beforeAll(() => {
    initDb();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    closeDb();
  });

  it('ends combat immediately when flee succeeds', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const engine = new CombatEngine();
    const player = makeCharacter();
    const combatId = engine.startCombat([player], [makeMonster()]);

    const result = engine.submitActionAndResolveRound(combatId, { actorId: player.id, type: 'flee' });

    expect(result).toBe('fled');
    expect(engine.isInCombat(player.id)).toBe(false);
  });

  it('resolves one enemy tick immediately when flee fails', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.99);
    const engine = new CombatEngine();
    const player = makeCharacter();
    const combatId = engine.startCombat([player], [makeMonster()]);

    const result = engine.submitActionAndResolveRound(combatId, { actorId: player.id, type: 'flee' });
    const state = engine.getCombatState(combatId);

    expect(result).toBe('ongoing');
    expect(state?.playerTeam[0].hp).toBeLessThan(player.maxHp);
    expect(state?.round).toBe(2);

    engine.forceEndCombat(combatId);
  });
});
