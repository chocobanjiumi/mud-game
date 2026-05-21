import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WorldManager } from '../game/world.js';

describe('WorldManager respawn policy', () => {
  let world: WorldManager;
  const now = new Date('2026-05-22T00:00:00.000Z');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(now);
    world = new WorldManager();
    world.init();
  });

  afterEach(() => {
    world.shutdown();
    vi.useRealTimers();
  });

  it('keeps normal monster respawns inside the 25-90 second band', () => {
    const slime = world.findMonsterInRoom('training_ground', 'slime');
    expect(slime).toBeDefined();

    world.killMonster('training_ground', slime!.instanceId);

    expect(slime!.respawnAt! - now.getTime()).toBe(25_000);
  });

  it('does not allow boss spawns below 30 minutes', () => {
    const boss = world.findMonsterInRoom('deep_forest', 'shadow_wolf_alpha');
    expect(boss).toBeDefined();

    world.killMonster('deep_forest', boss!.instanceId);

    expect(boss!.respawnAt! - now.getTime()).toBe(1_800_000);
  });

  it('accelerates normal respawns under multiplayer room pressure without exceeding caps', () => {
    for (const playerId of ['p1', 'p2', 'p3', 'p4']) {
      world.placePlayer(playerId, 'windmill_farm');
    }
    const bandit = world.findMonsterInRoom('windmill_farm', 'bandit');
    expect(bandit).toBeDefined();

    world.killMonster('windmill_farm', bandit!.instanceId);

    expect(bandit!.respawnAt! - now.getTime()).toBe(39_000);
  });
});
