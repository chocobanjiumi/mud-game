import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Character } from '@game/shared';
import { DungeonManager } from '../game/dungeon.js';

function character(id: string): Character {
  return {
    id,
    userId: `user-${id}`,
    name: id,
    level: 20,
    exp: 0,
    classId: 'swordsman',
    hp: 100,
    mp: 50,
    maxHp: 100,
    maxMp: 50,
    resource: 0,
    maxResource: 100,
    resourceType: 'rage',
    stats: { str: 10, int: 5, dex: 5, vit: 5, luk: 5 },
    freePoints: 0,
    gold: 1_000,
    roomId: 'deep_forest',
    isAi: false,
    equipment: { weapon: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
  };
}

describe('Dungeon death options', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('keeps defeated dungeon instances open for entrance or exit choices', () => {
    const mgr = new DungeonManager();
    const teleports: Array<{ playerId: string; roomId: string }> = [];
    const players = [character('player-a'), character('player-b')];

    mgr.setTeleportFunction((playerId, roomId) => {
      teleports.push({ playerId, roomId });
    });
    mgr.setStartCombatFunction((_players, _monsters, onEnd) => onEnd('defeat'));

    const result = mgr.createInstance('party-a', 'shadow_dungeon', players);
    expect(result.success).toBe(true);

    const instance = mgr.getPlayerInstance('player-a');
    expect(instance?.defeated).toBe(true);
    expect(players.map(player => player.hp)).toEqual([0, 0]);
    expect(teleports).toEqual([]);

    const message = mgr.chooseDeathOption('player-a', 'entrance');
    expect(message).toContain('入口');
    expect(teleports).toEqual([
      { playerId: 'player-a', roomId: 'deep_forest' },
      { playerId: 'player-b', roomId: 'deep_forest' },
    ]);
    expect(mgr.isInDungeon('player-a')).toBe(false);
    expect(mgr.isInDungeon('player-b')).toBe(false);
  });

  it('lets a party revive and retry the current dungeon room', () => {
    vi.useFakeTimers();
    const mgr = new DungeonManager();
    const players = [character('player-a'), character('player-b')];
    let combatStarts = 0;

    mgr.setStartCombatFunction((_players, _monsters, onEnd) => {
      combatStarts++;
      if (combatStarts === 1) onEnd('defeat');
    });

    const result = mgr.createInstance('party-a', 'shadow_dungeon', players);
    expect(result.success).toBe(true);

    const message = mgr.chooseDeathOption('player-a', 'revive');
    expect(message).toContain('復活');
    expect(players.map(player => player.hp)).toEqual([50, 50]);
    expect(players.map(player => player.mp)).toEqual([25, 25]);
    expect(mgr.getPlayerInstance('player-a')?.defeated).toBe(false);

    vi.advanceTimersByTime(500);
    expect(combatStarts).toBe(2);
  });
});
