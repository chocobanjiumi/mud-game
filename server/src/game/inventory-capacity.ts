import type { InventoryItem } from '@game/shared';

export const INVENTORY_SLOT_CAPACITY = 20;

export interface InventorySlotLoad {
  slots: number;
  capacity: number;
  overloaded: boolean;
}

export function getInventorySlotLoad(
  items: InventoryItem[],
  capacity = INVENTORY_SLOT_CAPACITY,
): InventorySlotLoad {
  const slots = items.filter(item => !item.equipped && item.quantity > 0).length;
  return {
    slots,
    capacity,
    overloaded: slots > capacity,
  };
}
