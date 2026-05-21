// Item instance reroll/reforge helpers

import {
  ITEM_DEFS,
  reforgeEquipmentInstanceQuality,
  rerollAffix,
  toBaseEquipmentDef,
} from '@game/shared';
import { getCharacterById, getInventory, getStoredItemInstance, upsertItemInstance } from '../db/queries.js';

export interface RerollAffixResult {
  success: boolean;
  message: string;
}

export interface LockAffixResult {
  success: boolean;
  message: string;
}

export interface ReforgeQualityResult {
  success: boolean;
  message: string;
}

export function rerollItemAffix(characterId: string, itemInstanceId: string, affixNumber: number): RerollAffixResult {
  const char = getCharacterById(characterId);
  if (!char) return { success: false, message: '角色不存在。' };

  const inventoryItem = getInventory(characterId).find(item => item.itemInstanceId === itemInstanceId);
  if (!inventoryItem) return { success: false, message: '背包中找不到此 item instance。' };

  const instance = getStoredItemInstance(itemInstanceId);
  if (!instance) return { success: false, message: '找不到此裝備實例資料。' };

  const baseItem = toBaseEquipmentDef(ITEM_DEFS[instance.baseItemId]);
  if (!baseItem) return { success: false, message: '此 item instance 不是可重骰詞綴的裝備。' };

  const affixes = instance.affixes ?? [];
  if (affixes.length === 0) return { success: false, message: '此裝備沒有可重骰的詞綴。' };

  const affixIndex = affixNumber - 1;
  if (!Number.isInteger(affixNumber) || affixIndex < 0 || affixIndex >= affixes.length) {
    return { success: false, message: `請指定 1-${affixes.length} 之間的詞綴序號。` };
  }
  if ((instance.lockedAffixIndexes ?? []).includes(affixIndex)) {
    return { success: false, message: `第 ${affixNumber} 條詞綴已鎖定，無法重骰。` };
  }

  const before = affixes[affixIndex];
  const rerolled = rerollAffix(baseItem, instance.quality, affixes, affixIndex, char.classId);
  const after = rerolled[affixIndex];
  if (!after || after.id === before.id) {
    return { success: false, message: '目前沒有可替換的新詞綴。' };
  }

  upsertItemInstance({
    ...instance,
    affixes: rerolled,
  });

  const itemName = ITEM_DEFS[instance.baseItemId]?.name ?? instance.baseItemId;
  return {
    success: true,
    message: `已重骰「${itemName}」第 ${affixNumber} 條詞綴：${before.name} → ${after.name}。`,
  };
}

export function lockItemAffix(characterId: string, itemInstanceId: string, affixNumber: number): LockAffixResult {
  const inventoryItem = getInventory(characterId).find(item => item.itemInstanceId === itemInstanceId);
  if (!inventoryItem) return { success: false, message: '背包中找不到此 item instance。' };

  const instance = getStoredItemInstance(itemInstanceId);
  if (!instance) return { success: false, message: '找不到此裝備實例資料。' };

  const baseItem = toBaseEquipmentDef(ITEM_DEFS[instance.baseItemId]);
  if (!baseItem) return { success: false, message: '此 item instance 不是可鎖定詞綴的裝備。' };

  const affixes = instance.affixes ?? [];
  if (affixes.length === 0) return { success: false, message: '此裝備沒有可鎖定的詞綴。' };

  const affixIndex = affixNumber - 1;
  if (!Number.isInteger(affixNumber) || affixIndex < 0 || affixIndex >= affixes.length) {
    return { success: false, message: `請指定 1-${affixes.length} 之間的詞綴序號。` };
  }

  const lockedAffixIndexes = new Set(instance.lockedAffixIndexes ?? []);
  if (lockedAffixIndexes.has(affixIndex)) {
    return { success: true, message: `第 ${affixNumber} 條詞綴已經鎖定。` };
  }
  lockedAffixIndexes.add(affixIndex);

  upsertItemInstance({
    ...instance,
    lockedAffixIndexes: [...lockedAffixIndexes],
  });

  const itemName = ITEM_DEFS[instance.baseItemId]?.name ?? instance.baseItemId;
  return {
    success: true,
    message: `已鎖定「${itemName}」第 ${affixNumber} 條詞綴：${affixes[affixIndex].name}。`,
  };
}

export function reforgeItemQuality(characterId: string, itemInstanceId: string): ReforgeQualityResult {
  const char = getCharacterById(characterId);
  if (!char) return { success: false, message: '角色不存在。' };

  const inventoryItem = getInventory(characterId).find(item => item.itemInstanceId === itemInstanceId);
  if (!inventoryItem) return { success: false, message: '背包中找不到此 item instance。' };

  const instance = getStoredItemInstance(itemInstanceId);
  if (!instance) return { success: false, message: '找不到此裝備實例資料。' };

  const baseItem = toBaseEquipmentDef(ITEM_DEFS[instance.baseItemId]);
  if (!baseItem) return { success: false, message: '此 item instance 不是可重鑄品質的裝備。' };

  const reforged = reforgeEquipmentInstanceQuality(baseItem, {
    itemInstanceId,
    classId: char.classId,
    luk: char.stats.luk,
    sourceTags: baseItem.sourceTags,
  });

  upsertItemInstance({
    itemInstanceId,
    baseItemId: instance.baseItemId,
    quality: reforged.quality,
    affixes: reforged.affixes,
    fixedEffects: reforged.fixedEffects,
    lockedAffixIndexes: [],
  });

  const itemName = ITEM_DEFS[instance.baseItemId]?.name ?? instance.baseItemId;
  return {
    success: true,
    message: `已重鑄「${itemName}」品質：${instance.quality} → ${reforged.quality}。`,
  };
}
