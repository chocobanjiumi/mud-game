import { addInventoryItem } from '../db/queries.js';
import type { Character } from '@game/shared';
import { ITEM_DEFS, generateEquipmentInstance, toBaseEquipmentDef } from '@game/shared';

export interface InventoryRewardEntry {
  itemId: string;
  itemInstanceId?: string;
  quantity: number;
  name: string;
  quality?: string;
  affixNames?: string[];
}

export function addRewardItemToInventory(
  character: Pick<Character, 'id' | 'stats' | 'classId'>,
  itemId: string,
  quantity: number,
  sourceTags: string[] = [],
): InventoryRewardEntry[] {
  const def = ITEM_DEFS[itemId];
  const baseEquipment = toBaseEquipmentDef(def);
  if (!baseEquipment) {
    addInventoryItem(character.id, itemId, quantity);
    return [{
      itemId,
      quantity,
      name: def?.name ?? itemId,
    }];
  }

  const entries: InventoryRewardEntry[] = [];
  const mergedSourceTags = Array.from(new Set([
    ...sourceTags,
    ...(baseEquipment.sourceTags ?? []),
  ]));

  for (let i = 0; i < quantity; i++) {
    const instance = generateEquipmentInstance(baseEquipment, {
      luk: character.stats.luk,
      classId: character.classId,
      sourceTags: mergedSourceTags,
    });
    addInventoryItem(character.id, itemId, 1, false, instance);
    entries.push({
      itemId,
      itemInstanceId: instance.itemInstanceId,
      quantity: 1,
      name: def?.name ?? itemId,
      quality: instance.quality,
      affixNames: instance.affixes.map(affix => affix.name),
    });
  }

  return entries;
}

export function formatRewardEntry(entry: InventoryRewardEntry): string {
  const qualityText = entry.quality && entry.quality !== 'normal' ? `（${entry.quality}）` : '';
  const affixText = entry.affixNames?.length ? `［${entry.affixNames.join('、')}］` : '';
  const quantityText = entry.quantity > 1 ? ` x${entry.quantity}` : '';
  return `${entry.name}${qualityText}${affixText}${quantityText}`;
}
