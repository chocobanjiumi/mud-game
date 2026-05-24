import { describe, expect, it } from 'vitest';
import { expandAliasCommand, resolveAliasExpansion } from '../game/alias.js';

describe('alias expansion', () => {
  it('expands system aliases and appends extra arguments', () => {
    expect(expandAliasCommand('atk 史萊姆#2')).toEqual({
      ok: true,
      command: 'attack 史萊姆#2',
      depth: 1,
    });
    expect(expandAliasCommand('lc', { lc: 'loot corpse' })).toEqual({
      ok: true,
      command: 'loot corpse',
      depth: 1,
    });
  });

  it('lets player aliases override system aliases but not native commands', () => {
    expect(resolveAliasExpansion('atk', { atk: 'attack 狼王' })).toBe('attack 狼王');
    expect(resolveAliasExpansion('attack', { attack: 'look' })).toBeNull();
  });

  it('expands chained aliases and stops recursive loops', () => {
    expect(expandAliasCommand('a 史萊姆#1', { a: 'b', b: 'attack' })).toEqual({
      ok: true,
      command: 'attack 史萊姆#1',
      depth: 2,
    });
    expect(expandAliasCommand('a', { a: 'b', b: 'a' })).toEqual({
      ok: false,
      reason: 'recursive',
    });
  });
});
