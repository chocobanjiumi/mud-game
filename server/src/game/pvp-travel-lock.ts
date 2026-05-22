export const PVP_RECENT_DAMAGE_TRAVEL_LOCK_MS = 45_000;

const pvpTravelLockedUntil = new Map<string, number>();

export function recordRecentPvpDamage(characterId: string, now = Date.now()): void {
  pvpTravelLockedUntil.set(characterId, now + PVP_RECENT_DAMAGE_TRAVEL_LOCK_MS);
}

export function recordRecentPvpDamageForCombat(characterIds: string[], now = Date.now()): void {
  for (const characterId of characterIds) {
    recordRecentPvpDamage(characterId, now);
  }
}

export function getPvpTravelLockRemainingSeconds(characterId: string, now = Date.now()): number {
  const lockedUntil = pvpTravelLockedUntil.get(characterId);
  if (!lockedUntil) return 0;

  const remainingMs = lockedUntil - now;
  if (remainingMs <= 0) {
    pvpTravelLockedUntil.delete(characterId);
    return 0;
  }

  return Math.ceil(remainingMs / 1000);
}

export function clearPvpTravelLocks(): void {
  pvpTravelLockedUntil.clear();
}
