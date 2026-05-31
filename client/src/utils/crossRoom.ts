import type { CardinalDirection } from '@game/shared';
import type { RoomInfo } from '../stores/gameTypes';

/**
 * 由怪物 id 找出牠所在鄰房的方向（出口方向）。
 * - 已偵察鄰房裡的怪物 → 該鄰房的方向
 * - 接近中的怪物 → 其來源方向
 * - 本房怪物或查無 → null
 */
export function findNearbyMonsterDirection(
  room: RoomInfo | null | undefined,
  monsterId: string | null | undefined,
): CardinalDirection | null {
  if (!room || !monsterId) return null;
  const nearby = room.nearbyCombat;
  if (!nearby) return null;
  for (const neighbor of nearby.neighbors) {
    if (neighbor.monsters?.some((monster) => monster.id === monsterId)) return neighbor.direction;
  }
  const approaching = nearby.approaching.find((monster) => monster.instanceId === monsterId);
  return approaching ? approaching.sourceDirection : null;
}
