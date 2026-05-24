import { describe, expect, it } from 'vitest';
import type { Character, MonsterDef, RoomDef } from '@game/shared';
import { buildOrdinalLabels, buildRoomEntities } from '../game/room-entities.js';
import { buildNearbyCombatPayload } from '../game/nearby-combat.js';
import { getRoom } from '../data/rooms.js';
import type { MonsterInstance } from '../game/world.js';

const character = { id: 'player-1' } as Character;

const room = {
  id: 'test_room',
  name: '測試房間',
  description: '',
  exits: [
    { direction: 'north', targetRoomId: 'north_room' },
    { direction: 'east', targetRoomId: 'east_room', locked: true },
  ],
} as RoomDef;

describe('room entity builder', () => {
  it('adds ordinal labels only for duplicated names', () => {
    const labels = buildOrdinalLabels([
      { name: '史萊姆' },
      { name: '史萊姆' },
      { name: '哥布林' },
    ], item => item.name);

    expect(labels).toEqual(['史萊姆#1', '史萊姆#2', '哥布林']);
  });

  it('builds player-readable labels with hidden command ids', () => {
    const entities = buildRoomEntities({
      char: character,
      room,
      npcs: [
        { id: 'npc_village_elder_1', name: '村長', alias: 'elder', title: '村長', type: 'quest' },
        { id: 'npc_village_elder_2', name: '村長', alias: 'elder', title: '副村長', type: 'merchant' },
      ],
      players: [],
      monsters: [
        { id: 'monster_green_slime_a', name: '史萊姆', alias: 'slime', label: '史萊姆#1', level: 1, hp: 12, maxHp: 30 },
        { id: 'monster_green_slime_b', name: '史萊姆', alias: 'slime', label: '史萊姆#2', level: 1, hp: 30, maxHp: 30 },
      ],
      corpses: [
        { id: 'green_slime_corpse_3', monsterName: '史萊姆', label: '史萊姆#2', empty: false, protected: false },
      ],
      gatheringNodes: [],
      travelNodes: [],
      groundItems: [
        { itemId: 'rusty_sword', description: '一把生鏽短劍' },
      ],
    });

    const npcLabels = entities.filter(entity => entity.type === 'npc').map(entity => entity.label);
    expect(npcLabels).toEqual(['村長#1', '村長#2']);

    const monster = entities.find(entity => entity.id === 'monster_green_slime_b');
    expect(monster?.label).toBe('史萊姆#2');
    expect(monster?.actions.find(action => action.label === '攻擊')?.command).toBe('attack monster_green_slime_b');
    expect(monster?.label).not.toContain('monster_green_slime_b');

    const corpse = entities.find(entity => entity.id === 'green_slime_corpse_3');
    expect(corpse?.label).toBe('史萊姆#2 屍體');
    expect(corpse?.actions[0]).toMatchObject({
      label: '搜刮',
      command: 'loot green_slime_corpse_3',
      disabled: false,
    });
    expect(corpse?.label).not.toContain('green_slime_corpse_3');

    const lockedExit = entities.find(entity => entity.id === 'exit:east');
    expect(lockedExit?.actions[0]).toMatchObject({
      label: '前往',
      disabled: true,
      reason: '出口上鎖',
    });

    for (const entity of entities) {
      expect(entity.label, entity.id).not.toContain('monster_green_slime');
      expect(entity.label, entity.id).not.toContain('npc_village_elder');
      expect(entity.label, entity.id).not.toContain('green_slime_corpse');
      for (const action of entity.actions) {
        expect(action.label, `${entity.id}:${action.command}`).not.toContain(entity.id);
      }
    }
  });

  it('shows corpse protection countdown in the entity subtitle', () => {
    const protectedUntil = Date.now() + 30_000;
    const entities = buildRoomEntities({
      char: character,
      room,
      npcs: [],
      players: [],
      monsters: [],
      corpses: [
        { id: 'protected_corpse', monsterName: '史萊姆', empty: false, protected: true, protectedUntil },
      ],
      gatheringNodes: [],
      travelNodes: [],
      groundItems: [],
    });

    const corpse = entities.find(entity => entity.id === 'protected_corpse');
    expect(corpse?.subtitle).toMatch(/^保護中 \d+s$/);
    expect(corpse?.actions[0].disabled).toBe(true);
  });

  it('builds nearby combat payload with hidden and scouted neighbor monsters', () => {
    const currentRoom = getRoom('village_square')!;
    const slime = makeMonster('green_slime_1', 'green_slime', '史萊姆');
    const wolf = makeMonster('wolf_1', 'wolf', '野狼', { isElite: true, aiType: 'aggressive' });
    const payload = buildNearbyCombatPayload({
      characterId: 'player-1',
      currentRoom,
      getAliveMonsters: roomId => {
        if (roomId === 'village_square') return [slime];
        if (roomId === 'village_gate') return [wolf];
        return [];
      },
      getApproachingMonsters: roomId => roomId === 'village_square'
        ? [{
          instanceId: 'wolf_approaching_1',
          monsterId: 'wolf',
          name: '野狼',
          alias: 'wolf',
          sourceDirection: 'south',
          sourceRoomId: 'village_gate',
          destinationRoomId: 'village_square',
          arrivalTicks: 2,
          hp: 40,
          maxHp: 40,
        }]
        : [],
      isScouted: (_characterId, roomId) => roomId === 'village_gate',
    });

    expect(payload.current.monsters[0]).toMatchObject({ id: 'green_slime_1', label: '史萊姆' });
    const south = payload.neighbors.find(neighbor => neighbor.direction === 'south')!;
    expect(south.passable).toBe(true);
    expect(south.scouted).toBe(true);
    expect(south.monsterCount).toBe(1);
    expect(south.monsters?.[0]).toMatchObject({ id: 'wolf_1', threatTags: expect.arrayContaining(['elite', 'aggressive']) });
    const north = payload.neighbors.find(neighbor => neighbor.direction === 'north')!;
    expect(north.scouted).toBe(false);
    expect(north.monsters).toBeUndefined();
    expect(payload.approaching[0]).toMatchObject({ sourceDirection: 'south', arrivalTicks: 2 });
  });
});

function makeMonster(
  instanceId: string,
  monsterId: string,
  name: string,
  overrides: Partial<MonsterDef> = {},
): MonsterInstance {
  const def: MonsterDef = {
    id: monsterId,
    name,
    alias: monsterId,
    level: 1,
    hp: 40,
    mp: 0,
    str: 5,
    int: 1,
    dex: 5,
    vit: 5,
    luk: 1,
    element: 'none',
    skills: ['basic_attack'],
    expReward: 5,
    goldReward: [1, 2],
    drops: [],
    aiType: 'passive',
    description: '',
    isBoss: false,
    ...overrides,
  };
  return {
    instanceId,
    monsterId,
    def,
    hp: def.hp,
    maxHp: def.hp,
    mp: def.mp,
    maxMp: def.mp,
    isDead: false,
    respawnAt: null,
  };
}
