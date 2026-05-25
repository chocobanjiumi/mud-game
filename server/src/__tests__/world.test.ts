import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WorldManager } from '../game/world.js';
import { ROOMS } from '../data/rooms.js';

const VERTICAL_REVERSE: Record<string, string> = { up: 'down', down: 'up' };

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

  it('resolves duplicated monster labels to the requested ordinal target', () => {
    const slimes = world.getAliveMonsters('training_ground').filter(monster => monster.monsterId === 'slime');
    expect(slimes.length).toBeGreaterThanOrEqual(2);

    expect(world.findMonsterInRoom('training_ground', '史萊姆#2')?.instanceId).toBe(slimes[1].instanceId);
    expect(world.findMonsterInRoom('training_ground', '史萊姆 2')?.instanceId).toBe(slimes[1].instanceId);
  });

  it('notifies room state changes when monsters die and respawn', () => {
    const changedRooms: string[] = [];
    world.setRoomStateChangeFunction(roomId => changedRooms.push(roomId));
    world.placePlayer('p1', 'training_ground');
    const slime = world.findMonsterInRoom('training_ground', 'slime');
    expect(slime).toBeDefined();

    world.killMonster('training_ground', slime!.instanceId);

    expect(changedRooms).toContain('training_ground');
    changedRooms.length = 0;

    vi.advanceTimersByTime(25_000);

    expect(changedRooms).toContain('training_ground');
    expect(world.getAliveMonsters('training_ground').some(monster => monster.instanceId === slime!.instanceId)).toBe(true);
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

  it('prioritizes exact reverse movement back to the previous room', () => {
    world.placePlayer('p1', 'weapon_shop');

    expect(world.handleMove('p1', 'north')?.room.id).toBe('starter_village_crafting_shed');
    expect(world.handleMove('p1', 'south')?.room.id).toBe('weapon_shop');
  });

  it('can unwind a multi-step movement path with inverse directions', () => {
    world.placePlayer('p1', 'training_ground');

    expect(world.handleMove('p1', 'up')?.room.id).toBe('starter_village_rooftop_walk');
    expect(world.handleMove('p1', 'north')?.room.id).toBe('starter_village_stable_yard');
    expect(world.handleMove('p1', 'south')?.room.id).toBe('starter_village_rooftop_walk');
    expect(world.handleMove('p1', 'down')?.room.id).toBe('training_ground');
  });

  it('moves cross-room targets into approaching state and arrives after ticks', () => {
    const slime = world.findMonsterInRoom('village_gate', 'slime');
    expect(slime).toBeDefined();

    const approaching = world.moveMonsterToApproaching(
      'village_gate',
      'village_square',
      'south',
      slime!.instanceId,
      2,
      'p1',
    );

    expect(approaching).toMatchObject({
      instanceId: slime!.instanceId,
      sourceDirection: 'south',
      arrivalTicks: 2,
      targetPlayerId: 'p1',
    });
    expect(world.getAliveMonsters('village_gate').some(monster => monster.instanceId === slime!.instanceId)).toBe(false);
    expect(world.getApproachingMonsters('village_square')[0].arrivalTicks).toBe(2);

    expect(world.tickApproaching('village_square')).toEqual([]);
    expect(world.getApproachingMonsters('village_square')[0].arrivalTicks).toBe(1);
    const arrived = world.tickApproaching('village_square');

    expect(arrived[0].instanceId).toBe(slime!.instanceId);
    expect(world.getApproachingMonsters('village_square')).toEqual([]);
    expect(world.getAliveMonsters('village_square').some(monster => monster.instanceId === slime!.instanceId)).toBe(true);
  });

  it('respawns pulled monsters in their original spawn room', () => {
    const slime = world.findMonsterInRoom('village_gate', 'slime');
    expect(slime).toBeDefined();

    const approaching = world.moveMonsterToApproaching(
      'village_gate',
      'village_square',
      'south',
      slime!.instanceId,
      0,
      'p1',
    );
    expect(approaching).toBeDefined();
    expect(world.getAliveMonsters('village_square').some(monster => monster.instanceId === slime!.instanceId)).toBe(true);

    world.killMonster('village_square', slime!.instanceId);

    expect(world.getMonsterInstance('village_square', slime!.instanceId)).toBeUndefined();
    expect(world.getMonsterInstance('village_gate', slime!.instanceId)?.isDead).toBe(true);

    vi.advanceTimersByTime(30_000);

    expect(world.getAliveMonsters('village_gate').some(monster => monster.instanceId === slime!.instanceId)).toBe(true);
    expect(world.getAliveMonsters('village_square').some(monster => monster.instanceId === slime!.instanceId)).toBe(false);
  });
});

describe('room exit topology', () => {
  it('does not define duplicate directions in a room', () => {
    const duplicates = Object.values(ROOMS).flatMap(room => {
      const seen = new Set<string>();
      return room.exits
        .filter(exit => {
          if (seen.has(exit.direction)) return true;
          seen.add(exit.direction);
          return false;
        })
        .map(exit => `${room.id}:${exit.direction}->${exit.targetRoomId}`);
    });

    expect(duplicates).toEqual([]);
  });

  it('keeps vertical exits reversible with up and down', () => {
    const issues = Object.values(ROOMS).flatMap(room =>
      room.exits
        .filter(exit => exit.direction === 'up' || exit.direction === 'down')
        .filter(exit => {
          const target = ROOMS[exit.targetRoomId];
          return !target?.exits.some(back =>
            back.targetRoomId === room.id && back.direction === VERTICAL_REVERSE[exit.direction],
          );
        })
        .map(exit => `${room.id}:${exit.direction}->${exit.targetRoomId}`),
    );

    expect(issues).toEqual([]);
  });

  it('keeps known multi-level routes feeling reversible', () => {
    expect(ROOMS.training_ground.exits.find(exit => exit.direction === 'up')?.targetRoomId)
      .toBe('starter_village_rooftop_walk');
    expect(ROOMS.starter_village_rooftop_walk.exits.find(exit => exit.direction === 'down')?.targetRoomId)
      .toBe('training_ground');
    expect(ROOMS.starter_village_stable_yard.exits.find(exit => exit.direction === 'south')?.targetRoomId)
      .toBe('starter_village_rooftop_walk');
    expect(ROOMS.starter_village_rooftop_walk.exits.find(exit => exit.direction === 'north')?.targetRoomId)
      .toBe('starter_village_stable_yard');
    expect(ROOMS.time_distortion.exits.find(exit => exit.direction === 'down')?.targetRoomId)
      .toBe('chaos_observatory');
    expect(ROOMS.chaos_observatory.exits.find(exit => exit.direction === 'up')?.targetRoomId)
      .toBe('time_distortion');
  });
});
