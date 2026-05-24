import { afterEach, describe, expect, it } from 'vitest';
import { NPCS, findNpcByName } from '../data/npcs.js';

describe('NPC targeting', () => {
  afterEach(() => {
    delete NPCS.test_elder_a;
    delete NPCS.test_elder_b;
  });

  it('resolves duplicated NPC labels to the requested ordinal target', () => {
    NPCS.test_elder_a = {
      id: 'test_elder_a',
      name: '村長',
      alias: 'elder',
      title: '測試村長',
      description: '',
      roomId: 'test_room',
      type: 'quest',
      dialogue: [],
    };
    NPCS.test_elder_b = {
      id: 'test_elder_b',
      name: '村長',
      alias: 'elder',
      title: '測試副村長',
      description: '',
      roomId: 'test_room',
      type: 'merchant',
      dialogue: [],
    };

    expect(findNpcByName('村長#2', 'test_room')?.id).toBe('test_elder_b');
  });
});
