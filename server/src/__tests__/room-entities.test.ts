import { describe, expect, it } from 'vitest';
import type { Character, RoomDef } from '@game/shared';
import { buildOrdinalLabels, buildRoomEntities } from '../game/room-entities.js';

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
  });
});
