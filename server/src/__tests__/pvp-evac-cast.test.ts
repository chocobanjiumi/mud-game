import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  PVP_DANGER_EVAC_CAST_MS,
  beginPvpDangerEvacCast,
  cancelPvpDangerEvacCast,
  cancelPvpDangerEvacCasts,
  clearPvpDangerEvacCasts,
  getPendingPvpDangerEvacRemainingSeconds,
} from '../game/pvp-evac-cast.js';

describe('PvP danger evac cast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    clearPvpDangerEvacCasts();
  });

  afterEach(() => {
    clearPvpDangerEvacCasts();
    vi.useRealTimers();
  });

  it('starts an evac cast and completes after the cast time', () => {
    const onComplete = vi.fn();

    const result = beginPvpDangerEvacCast('player-a', onComplete, 10_000);

    expect(result).toEqual({ ok: true, seconds: 8 });
    expect(PVP_DANGER_EVAC_CAST_MS).toBe(8_000);
    expect(getPendingPvpDangerEvacRemainingSeconds('player-a', 10_000)).toBe(8);

    vi.advanceTimersByTime(7_999);
    expect(onComplete).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(getPendingPvpDangerEvacRemainingSeconds('player-a', 18_000)).toBe(0);
  });

  it('does not start duplicate evac casts for the same character', () => {
    const onComplete = vi.fn();

    beginPvpDangerEvacCast('player-a', onComplete, 10_000);
    const duplicate = beginPvpDangerEvacCast('player-a', onComplete, 12_000);

    expect(duplicate).toEqual({ ok: false, remainingSeconds: 6 });
  });

  it('cancels pending evac casts when PvP damage interrupts them', () => {
    const onComplete = vi.fn();

    beginPvpDangerEvacCast('player-a', onComplete, 10_000);
    beginPvpDangerEvacCast('player-b', onComplete, 10_000);

    expect(cancelPvpDangerEvacCast('player-a')).toBe(true);
    expect(cancelPvpDangerEvacCasts(['player-a', 'player-b'])).toEqual(['player-b']);

    vi.advanceTimersByTime(PVP_DANGER_EVAC_CAST_MS);
    expect(onComplete).not.toHaveBeenCalled();
  });
});
