import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import type { Character, MonsterDef } from '@game/shared';
import { CombatEngine } from '../game/combat.js';
import { closeDb, initDb } from '../db/schema.js';
import type { MonsterInstance } from '../game/world.js';

function character(): Character {
  return {
    id: 'guard-player',
    userId: 'guard-user',
    name: '守備者',
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
    stats: { str: 10, int: 5, dex: 1, vit: 10, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'training_ground',
    isAi: false,
    equipment: { weapon: null, offhand: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
  };
}

function monster(): MonsterInstance {
  const def: MonsterDef = {
    id: 'shadow_wolf',
    name: '暗影狼',
    level: 12,
    hp: 300,
    mp: 0,
    str: 20,
    int: 1,
    dex: 50,
    vit: 10,
    luk: 1,
    element: 'dark',
    skills: ['basic_attack'],
    expReward: 1,
    goldReward: [0, 0],
    drops: [],
    aiType: 'aggressive',
    description: '高速攻擊測試怪。',
    isBoss: false,
  };
  return {
    instanceId: 'shadow_wolf_1',
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

describe('combat action order', () => {
  beforeAll(() => {
    initDb();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    closeDb();
  });

  it('applies defensive support skills before faster monster attacks in the same tick', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const engine = new CombatEngine();
    const player = character();
    const combatId = engine.startCombat([player], [monster()]);

    engine.submitActionAndResolveRound(combatId, {
      actorId: player.id,
      type: 'skill',
      skillId: 'iron_wall',
      targetId: player.id,
    });

    const log = engine.getCombatState(combatId)?.actionLog.join('\n') ?? '';
    const guardIndex = log.indexOf('守備者使用了防禦架勢');
    const attackIndex = log.indexOf('暗影狼');

    expect(guardIndex).toBeGreaterThanOrEqual(0);
    expect(attackIndex).toBeGreaterThanOrEqual(0);
    expect(guardIndex).toBeLessThan(attackIndex);

    engine.forceEndCombat(combatId);
  });
});
