import type { ItemDef, ItemStats } from '../types/item.js';
import type { ClassId } from '../types/player.js';

export interface MountDef {
  id: string;
  name: string;
  description: string;
  allowedClassIds: ClassId[];
  chargePower: number;
  stability: number;
  guardPower: number;
  fatigueLimit: number;
  skills: string[];
}

export const MOUNT_DEFS: Record<string, MountDef> = {
  knight_warhorse: {
    id: 'knight_warhorse',
    name: '戰馬',
    description: '騎士受封後可呼喚的基礎戰馬，提供衝鋒、騎乘守護與攔截的核心能力。',
    allowedClassIds: ['knight'],
    chargePower: 10,
    stability: 10,
    guardPower: 8,
    fatigueLimit: 40,
    skills: ['charge', 'mounted_guard', 'intercept'],
  },
};

export function getMountDef(mountId: string | null | undefined): MountDef | null {
  return mountId ? MOUNT_DEFS[mountId] ?? null : null;
}

export function canClassUseMount(classId: ClassId, mountId: string | null | undefined): boolean {
  const mount = getMountDef(mountId);
  return !!mount && mount.allowedClassIds.includes(classId);
}

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
export interface DerivedMountStats {
  chargePower: number;
  stability: number;
  guardPower: number;
  fatigueMax: number;
  fatigueRecovery: number;
  interceptBonus: number;
  retreatBonus: number;
  threatBonus: number;
}

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

export function deriveMountStats(
  mount: MountDef | null | undefined,
  saddle: Pick<ItemDef, 'equipSlot' | 'stats'> | undefined,
): DerivedMountStats | null {
  if (!mount) return null;
  const saddleStats = deriveSaddleMountStats(saddle);
  return {
    chargePower: mount.chargePower + saddleStats.mountChargePower,
    stability: mount.stability + saddleStats.mountStability,
    guardPower: mount.guardPower + saddleStats.mountGuardPower,
    fatigueMax: mount.fatigueLimit + saddleStats.mountFatigueMax,
    fatigueRecovery: Math.max(0, saddleStats.mountFatigueRecovery || 1),
    interceptBonus: saddleStats.mountedInterceptBonus,
    retreatBonus: saddleStats.mountedRetreatBonus,
    threatBonus: saddleStats.mountedThreatBonus,
  };
}
