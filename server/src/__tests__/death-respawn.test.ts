import { describe, expect, it } from 'vitest';
import { DEFAULT_RESPAWN_ROOM_ID, getPveRespawnRoomId } from '../game/death-respawn.js';

describe('PvE death respawn rooms', () => {
  it('returns the current safe zone entrance for safe PvE zones', () => {
    expect(getPveRespawnRoomId('grass_path')).toBe('plains_entrance');
  });

  it('returns the nearest regional safe town for dangerous PvE zones', () => {
    expect(getPveRespawnRoomId('cave_entrance')).toBe('underground_city_gate_lift');
  });

  it('falls back to the main city when the current room is unknown', () => {
    expect(getPveRespawnRoomId('missing_room')).toBe(DEFAULT_RESPAWN_ROOM_ID);
  });
});
