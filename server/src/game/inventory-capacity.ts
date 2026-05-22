import type { InventoryItem } from '@game/shared';

export const INVENTORY_SLOT_CAPACITY = 20;
export const KINGDOM_RESOURCE_ITEM_IDS = new Set([
  'kingdom_supply_crate',
  'kingdom_iron_shipment',
  'kingdom_banner_cache',
]);

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

export function getCarriedKingdomResourceItemIds(items: InventoryItem[]): string[] {
  return items
    .filter(item => !item.equipped && item.quantity > 0 && KINGDOM_RESOURCE_ITEM_IDS.has(item.itemId))
    .map(item => item.itemId);
}
