import { ITEM_DEFS } from '../constants/items.js';
import type { BaseEquipmentDef, EquipSlot, ItemStats, WeaponCategory, WeaponType } from '../types/item.js';
import { toBaseEquipmentDef, WEAPON_TYPE_DEFS } from '../types/item.js';

export interface EquipmentBaseType {
  baseItemId: string;
  slot: EquipSlot;
  weaponType?: WeaponType;
  weaponCategory?: WeaponCategory;
  itemLevel: number;
  requiredLevel: number;
  tags: string[];
  implicitStats?: Partial<ItemStats>;
  dropWeight: number;
}

export function getEquipmentBaseTypes(itemDefs = ITEM_DEFS): EquipmentBaseType[] {
  return Object.values(itemDefs)
    .map(def => toBaseEquipmentDef(def))
    .filter((def): def is BaseEquipmentDef => !!def)
    .map(def => ({
      baseItemId: def.id,
      slot: def.equipSlot,
      weaponType: def.weaponType,
      weaponCategory: def.weaponType ? WEAPON_TYPE_DEFS[def.weaponType]?.category : undefined,
      itemLevel: def.level,
      requiredLevel: def.levelReq,
      tags: Array.from(new Set([...def.sourceTags, ...def.zoneTags, def.rarity ?? 'common'])),
      implicitStats: def.stats,
      dropWeight: getBaseDropWeight(def),
    }));
}

export function findEquipmentBaseTypes(input: {
  slot?: EquipSlot;
  weaponType?: WeaponType;
  levelMin?: number;
  levelMax?: number;
  tags?: string[];
} = {}): EquipmentBaseType[] {
  const requiredTags = new Set(input.tags ?? []);
  return getEquipmentBaseTypes()
    .filter(base => !input.slot || base.slot === input.slot)
    .filter(base => !input.weaponType || base.weaponType === input.weaponType)
    .filter(base => input.levelMin === undefined || base.itemLevel >= input.levelMin)
    .filter(base => input.levelMax === undefined || base.itemLevel <= input.levelMax)
    .filter(base => requiredTags.size === 0 || base.tags.some(tag => requiredTags.has(tag)));
}

export function getEquipmentBaseType(baseItemId: string): EquipmentBaseType | undefined {
  return getEquipmentBaseTypes().find(base => base.baseItemId === baseItemId);
}

function getBaseDropWeight(def: BaseEquipmentDef): number {
  const rarityWeight: Record<string, number> = {
    common: 100,
    uncommon: 70,
    rare: 35,
    epic: 12,
    legendary: 3,
    mythic: 1,
  };
  return rarityWeight[def.rarity ?? 'common'] ?? 50;
}
