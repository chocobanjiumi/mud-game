export const PVP_DANGER_EVAC_CAST_MS = 8_000;

interface PendingPvpEvacCast {
  characterId: string;
  startedAt: number;
  completesAt: number;
  timer: ReturnType<typeof setTimeout>;
  onComplete: () => void;
}

const pendingCasts = new Map<string, PendingPvpEvacCast>();

export function beginPvpDangerEvacCast(
  characterId: string,
  onComplete: () => void,
  now = Date.now(),
): { ok: true; seconds: number } | { ok: false; remainingSeconds: number } {
  const existing = pendingCasts.get(characterId);
  if (existing) {
    return {
      ok: false,
      remainingSeconds: Math.max(1, Math.ceil((existing.completesAt - now) / 1000)),
    };
  }

  const timer = setTimeout(() => {
    const pending = pendingCasts.get(characterId);
    if (!pending) return;
    pendingCasts.delete(characterId);
    pending.onComplete();
  }, PVP_DANGER_EVAC_CAST_MS);

  pendingCasts.set(characterId, {
    characterId,
    startedAt: now,
    completesAt: now + PVP_DANGER_EVAC_CAST_MS,
    timer,
    onComplete,
  });

  return { ok: true, seconds: Math.ceil(PVP_DANGER_EVAC_CAST_MS / 1000) };
}

export function cancelPvpDangerEvacCast(characterId: string): boolean {
  const pending = pendingCasts.get(characterId);
  if (!pending) return false;

  clearTimeout(pending.timer);
  pendingCasts.delete(characterId);
  return true;
}

export function cancelPvpDangerEvacCasts(characterIds: string[]): string[] {
  return characterIds.filter(characterId => cancelPvpDangerEvacCast(characterId));
}

export function getPendingPvpDangerEvacRemainingSeconds(characterId: string, now = Date.now()): number {
  const pending = pendingCasts.get(characterId);
  if (!pending) return 0;
  return Math.max(0, Math.ceil((pending.completesAt - now) / 1000));
}

export function clearPvpDangerEvacCasts(): void {
  for (const pending of pendingCasts.values()) {
    clearTimeout(pending.timer);
  }
  pendingCasts.clear();
}
