import { describe, expect, it } from 'vitest';
import type { InventoryItem } from '@game/shared';
import {
  INVENTORY_SLOT_CAPACITY,
  getCarriedKingdomResourceItemIds,
  getInventorySlotLoad,
} from '../game/inventory-capacity.js';

function item(index: number, equipped = false): InventoryItem {
  return {
    itemId: `test_item_${index}`,
    quantity: 1,
    equipped,
  };
}

describe('inventory capacity', () => {
  it('counts unequipped inventory slots against travel capacity', () => {
    const items = Array.from({ length: INVENTORY_SLOT_CAPACITY }, (_, index) => item(index));

    expect(getInventorySlotLoad(items)).toEqual({
      slots: INVENTORY_SLOT_CAPACITY,
      capacity: INVENTORY_SLOT_CAPACITY,
      overloaded: false,
    });
  });

  it('marks the backpack overloaded only when unequipped slots exceed capacity', () => {
    const items = [
      ...Array.from({ length: INVENTORY_SLOT_CAPACITY + 1 }, (_, index) => item(index)),
      item(999, true),
    ];

    expect(getInventorySlotLoad(items)).toEqual({
      slots: INVENTORY_SLOT_CAPACITY + 1,
      capacity: INVENTORY_SLOT_CAPACITY,
      overloaded: true,
    });
  });

  it('ignores equipped and empty inventory rows', () => {
    const items = [
      ...Array.from({ length: INVENTORY_SLOT_CAPACITY }, (_, index) => item(index)),
      item(100, true),
      { itemId: 'empty_stack', quantity: 0, equipped: false },
    ];

    expect(getInventorySlotLoad(items)).toEqual({
      slots: INVENTORY_SLOT_CAPACITY,
      capacity: INVENTORY_SLOT_CAPACITY,
      overloaded: false,
    });
  });

  it('detects carried kingdom resources for travel restrictions', () => {
    const items = [
      { itemId: 'kingdom_supply_crate', quantity: 1, equipped: false },
      { itemId: 'kingdom_iron_shipment', quantity: 2, equipped: false },
      { itemId: 'iron_ore', quantity: 5, equipped: false },
      { itemId: 'kingdom_banner_cache', quantity: 1, equipped: true },
    ];

    expect(getCarriedKingdomResourceItemIds(items)).toEqual([
      'kingdom_supply_crate',
      'kingdom_iron_shipment',
    ]);
  });
});
