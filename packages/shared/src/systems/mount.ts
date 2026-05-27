import type { ItemDef, ItemStats } from '../types/item.js';

export const MOUNT_STAT_KEYS = [
  'mountChargePower',
  'mountStability',
  'mountGuardPower',
  'mountFatigueMax',
  'mountFatigueRecovery',
  'mountedInterceptBonus',
  'mountedRetreatBonus',
  'mountedThreatBonus',
] as const satisfies readonly (keyof ItemStats)[];

export type MountStatKey = typeof MOUNT_STAT_KEYS[number];
export type SaddleMountStats = Readonly<Record<MountStatKey, number>>;

export function createEmptySaddleMountStats(): SaddleMountStats {
  return {
    mountChargePower: 0,
    mountStability: 0,
    mountGuardPower: 0,
    mountFatigueMax: 0,
    mountFatigueRecovery: 0,
    mountedInterceptBonus: 0,
    mountedRetreatBonus: 0,
    mountedThreatBonus: 0,
  };
}

export function deriveSaddleMountStats(saddle: Pick<ItemDef, 'equipSlot' | 'stats'> | undefined): SaddleMountStats {
  const result = { ...createEmptySaddleMountStats() };
  if (saddle?.equipSlot !== 'saddle') return result;

  for (const key of MOUNT_STAT_KEYS) {
    result[key] = saddle.stats?.[key] ?? 0;
  }
  return result;
}
