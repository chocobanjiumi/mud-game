import { beforeEach, describe, expect, it } from 'vitest';
import {
  PVP_RECENT_DAMAGE_TRAVEL_LOCK_MS,
  clearPvpTravelLocks,
  getPvpTravelLockRemainingSeconds,
  recordRecentPvpDamage,
  recordRecentPvpDamageForCombat,
} from '../game/pvp-travel-lock.js';

describe('PvP travel lock', () => {
  beforeEach(() => {
    clearPvpTravelLocks();
  });

  it('locks travel for 45 seconds after recent PvP damage', () => {
    const now = 10_000;
    recordRecentPvpDamage('player-a', now);

    expect(PVP_RECENT_DAMAGE_TRAVEL_LOCK_MS).toBe(45_000);
    expect(getPvpTravelLockRemainingSeconds('player-a', now)).toBe(45);
    expect(getPvpTravelLockRemainingSeconds('player-a', now + 30_000)).toBe(15);
  });

  it('records PvP travel locks for both combat participants', () => {
    const now = 20_000;
    recordRecentPvpDamageForCombat(['player-a', 'player-b'], now);

    expect(getPvpTravelLockRemainingSeconds('player-a', now)).toBe(45);
    expect(getPvpTravelLockRemainingSeconds('player-b', now)).toBe(45);
  });

  it('clears expired PvP travel locks', () => {
    const now = 30_000;
    recordRecentPvpDamage('player-a', now);

    expect(getPvpTravelLockRemainingSeconds('player-a', now + 45_000)).toBe(0);
    expect(getPvpTravelLockRemainingSeconds('player-a', now + 45_001)).toBe(0);
  });
});
