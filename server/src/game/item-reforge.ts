// Item instance reroll/reforge helpers

import {
  ITEM_DEFS,
  reforgeEquipmentInstanceQuality,
  rerollAffix,
  toBaseEquipmentDef,
} from '@game/shared';
import {
  addInventoryItem,
  getCharacterById,
  getInventory,
  getStoredItemInstance,
  removeInventoryItem,
  saveCharacter,
  upsertItemInstance,
} from '../db/queries.js';
import { recordGoldSpent, recordReforgeMaterialConsumed } from './economy-stats.js';

const AFFIX_REROLL_COST_ITEM = 'affix_essence';
const QUALITY_REFORGE_COST_ITEM = 'reforge_crystal';
const REFORGE_GOLD_COST_BY_QUALITY: Record<string, number> = {
  normal: 20,
  fine: 40,
  rare: 80,
  epic: 160,
  legendary: 300,
  mythic: 500,
};
const HIGH_TIER_REFORGE_MATERIALS: Record<string, { itemId: string; count: number }[]> = {
  normal: [],
  fine: [],
  rare: [],
  epic: [{ itemId: AFFIX_REROLL_COST_ITEM, count: 2 }],
  legendary: [
    { itemId: AFFIX_REROLL_COST_ITEM, count: 3 },
    { itemId: 'ancient_fragment', count: 1 },
  ],
  mythic: [
    { itemId: AFFIX_REROLL_COST_ITEM, count: 5 },
    { itemId: 'ancient_fragment', count: 2 },
  ],
};
const QUALITY_DISASSEMBLE_REWARDS: Record<string, { reforgeCrystals: number; affixEssences: number }> = {
  normal: { reforgeCrystals: 0, affixEssences: 0 },
  fine: { reforgeCrystals: 1, affixEssences: 1 },
  rare: { reforgeCrystals: 2, affixEssences: 2 },
  epic: { reforgeCrystals: 3, affixEssences: 4 },
  legendary: { reforgeCrystals: 5, affixEssences: 6 },
  mythic: { reforgeCrystals: 8, affixEssences: 10 },
};

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

export interface DisassembleItemResult {
  success: boolean;
  message: string;
}

export function getReforgeGoldCost(quality: string): number {
  return REFORGE_GOLD_COST_BY_QUALITY[quality] ?? REFORGE_GOLD_COST_BY_QUALITY.normal;
}

export function getHighTierReforgeMaterials(quality: string): { itemId: string; count: number }[] {
  return HIGH_TIER_REFORGE_MATERIALS[quality] ?? [];
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
  if (!consumeMaterial(characterId, AFFIX_REROLL_COST_ITEM, 1)) {
    return { success: false, message: '需要「詞綴精華」x1 才能重骰詞綴。' };
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
  const goldCost = getReforgeGoldCost(instance.quality);
  if (char.gold < goldCost) {
    return { success: false, message: `金幣不足！重鑄需要 ${goldCost} 金幣，你只有 ${char.gold} 金幣。` };
  }
  const requiredMaterials = [
    { itemId: QUALITY_REFORGE_COST_ITEM, count: 1 },
    ...getHighTierReforgeMaterials(instance.quality),
  ];
  for (const material of requiredMaterials) {
    if (!hasMaterial(characterId, material.itemId, material.count)) {
      const name = ITEM_DEFS[material.itemId]?.name ?? material.itemId;
      return { success: false, message: `需要「${name}」x${material.count} 才能重鑄品質。` };
    }
  }
  char.gold -= goldCost;
  saveCharacter(char);
  recordGoldSpent(goldCost);
  for (const material of requiredMaterials) {
    consumeMaterial(characterId, material.itemId, material.count);
    recordReforgeMaterialConsumed(material.count);
  }

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
    message: `已重鑄「${itemName}」品質：${instance.quality} → ${reforged.quality}，花費 ${goldCost} 金幣。`,
  };
}

export function disassembleEquipment(characterId: string, itemKey: string): DisassembleItemResult {
  const inventoryItem = getInventory(characterId).find(item =>
    !item.equipped && (item.itemInstanceId === itemKey || item.itemId === itemKey),
  );
  if (!inventoryItem) return { success: false, message: '背包中找不到可分解的未裝備物品。' };

  const instance = inventoryItem.itemInstanceId ? getStoredItemInstance(inventoryItem.itemInstanceId) : undefined;
  const baseItemId = instance?.baseItemId ?? inventoryItem.itemId;
  const baseItem = toBaseEquipmentDef(ITEM_DEFS[baseItemId]);
  if (!baseItem) return { success: false, message: '此物品不是可分解的裝備。' };

  const removed = removeInventoryItem(characterId, inventoryItem.itemId, 1, inventoryItem.itemInstanceId);
  if (!removed) return { success: false, message: '分解失敗，物品可能已裝備或不存在。' };

  const quality = instance?.quality ?? 'normal';
  const affixCount = instance?.affixes?.length ?? 0;
  const reward = QUALITY_DISASSEMBLE_REWARDS[quality] ?? QUALITY_DISASSEMBLE_REWARDS.normal;
  const reforgeCrystals = Math.max(reward.reforgeCrystals, quality === 'normal' ? 1 : reward.reforgeCrystals);
  const affixEssences = Math.max(reward.affixEssences, affixCount);

  if (reforgeCrystals > 0) addInventoryItem(characterId, QUALITY_REFORGE_COST_ITEM, reforgeCrystals);
  if (affixEssences > 0) addInventoryItem(characterId, AFFIX_REROLL_COST_ITEM, affixEssences);

  const itemName = ITEM_DEFS[baseItemId]?.name ?? baseItemId;
  const rewards = [
    reforgeCrystals > 0 ? `重鑄水晶 x${reforgeCrystals}` : '',
    affixEssences > 0 ? `詞綴精華 x${affixEssences}` : '',
  ].filter(Boolean).join('、');

  return {
    success: true,
    message: `已分解「${itemName}」，獲得 ${rewards || '少量殘渣'}。`,
  };
}

function consumeMaterial(characterId: string, itemId: string, count: number): boolean {
  if (!hasMaterial(characterId, itemId, count)) return false;
  return removeInventoryItem(characterId, itemId, count);
}

function hasMaterial(characterId: string, itemId: string, count: number): boolean {
  const material = getInventory(characterId).find(item => item.itemId === itemId && !item.equipped && !item.itemInstanceId);
  return !!material && material.quantity >= count;
}
