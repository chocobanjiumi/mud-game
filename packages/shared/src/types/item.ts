// 物品型別定義

import type { ClassId } from './player.js';
import type { ElementType } from './skill.js';
import type { AffixDef, ItemQuality } from '../systems/item-instance.js';

export type ItemType = 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material' | 'quest';
export type ArmorSlot = 'head' | 'body' | 'hands' | 'feet';
export type EquipSlot = 'weapon' | 'head' | 'body' | 'hands' | 'feet' | 'ring' | 'earring' | 'belt' | 'necklace' | 'accessory';

export type WeaponCategory = 'sword' | 'axe' | 'hammer' | 'polearm' | 'bow' | 'crossbow' | 'dagger' | 'shortsword' | 'staff' | 'grimoire' | 'focus' | 'holy_tome' | 'totem';
export type WeaponType =
  | WeaponCategory
  | 'spear'
  | 'greataxe'
  | 'katana'
  | 'elemental_staff'
  | 'hourglass_staff'
  | 'nature_staff'
  | 'warhammer'
  | 'whip';

export interface WeaponTypeDef {
  id: WeaponType;
  name: string;
  category: WeaponCategory;
  rangeProfile: 'melee' | 'ranged' | 'spell' | 'support';
  classFamilies: ClassId[];
}

export const WEAPON_TYPE_DEFS: Record<WeaponType, WeaponTypeDef> = {
  sword: { id: 'sword', name: '劍', category: 'sword', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  axe: { id: 'axe', name: '斧', category: 'axe', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  hammer: { id: 'hammer', name: '錘', category: 'hammer', rangeProfile: 'melee', classFamilies: ['swordsman', 'priest'] },
  polearm: { id: 'polearm', name: '槍/長柄', category: 'polearm', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  bow: { id: 'bow', name: '弓', category: 'bow', rangeProfile: 'ranged', classFamilies: ['ranger'] },
  crossbow: { id: 'crossbow', name: '弩', category: 'crossbow', rangeProfile: 'ranged', classFamilies: ['ranger'] },
  dagger: { id: 'dagger', name: '匕首', category: 'dagger', rangeProfile: 'melee', classFamilies: ['ranger'] },
  shortsword: { id: 'shortsword', name: '短劍', category: 'shortsword', rangeProfile: 'melee', classFamilies: ['ranger', 'swordsman'] },
  staff: { id: 'staff', name: '法杖', category: 'staff', rangeProfile: 'spell', classFamilies: ['mage', 'priest'] },
  grimoire: { id: 'grimoire', name: '魔導書', category: 'grimoire', rangeProfile: 'spell', classFamilies: ['mage'] },
  focus: { id: 'focus', name: '法器', category: 'focus', rangeProfile: 'spell', classFamilies: ['mage', 'priest'] },
  holy_tome: { id: 'holy_tome', name: '聖典', category: 'holy_tome', rangeProfile: 'support', classFamilies: ['priest'] },
  totem: { id: 'totem', name: '圖騰', category: 'totem', rangeProfile: 'support', classFamilies: ['priest'] },
  spear: { id: 'spear', name: '槍', category: 'polearm', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  greataxe: { id: 'greataxe', name: '巨斧', category: 'axe', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  katana: { id: 'katana', name: '太刀', category: 'sword', rangeProfile: 'melee', classFamilies: ['swordsman'] },
  elemental_staff: { id: 'elemental_staff', name: '元素法杖', category: 'staff', rangeProfile: 'spell', classFamilies: ['mage'] },
  hourglass_staff: { id: 'hourglass_staff', name: '沙漏法杖', category: 'staff', rangeProfile: 'spell', classFamilies: ['mage'] },
  nature_staff: { id: 'nature_staff', name: '自然法杖', category: 'staff', rangeProfile: 'support', classFamilies: ['priest'] },
  warhammer: { id: 'warhammer', name: '戰錘', category: 'hammer', rangeProfile: 'melee', classFamilies: ['swordsman', 'priest'] },
  whip: { id: 'whip', name: '鞭', category: 'focus', rangeProfile: 'support', classFamilies: ['ranger', 'priest'] },
};

export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

export interface ItemDef {
  id: string;
  name: string; // 中文名
  type: ItemType;
  description: string;
  buyPrice: number;
  sellPrice: number;
  stackable: boolean;
  maxStack: number;
  levelReq: number;
  classReq?: ClassId[];
  equipSlot?: EquipSlot;
  stats?: ItemStats;
  useEffect?: ItemUseEffect;
  element?: ElementType;
  // Enhancement system fields
  requiredLevel?: number;
  requiredClass?: string[];  // class IDs that can equip
  rarity?: ItemRarity;
  setId?: string;  // equipment set identifier
  level?: number;
  sourceTags?: string[];
  zoneTags?: string[];
  weaponType?: WeaponType;
  attackDescriptions?: {
    normal: string;   // normal attack text
    critical: string; // critical hit text
    miss: string;     // miss text
    kill: string;     // killing blow text
  };
}

export type EquipmentItemType = 'weapon' | 'armor' | 'accessory';

export interface BaseEquipmentDef extends ItemDef {
  type: EquipmentItemType;
  equipSlot: EquipSlot;
  level: number;
  sourceTags: string[];
  zoneTags: string[];
}

export function isEquipmentItemDef(def: ItemDef | undefined): def is ItemDef & { type: EquipmentItemType; equipSlot: EquipSlot } {
  return !!def && (def.type === 'weapon' || def.type === 'armor' || def.type === 'accessory') && !!def.equipSlot;
}

export function toBaseEquipmentDef(def: ItemDef | undefined): BaseEquipmentDef | null {
  if (!isEquipmentItemDef(def)) return null;
  return {
    ...def,
    level: def.level ?? def.levelReq,
    sourceTags: def.sourceTags ?? [],
    zoneTags: def.zoneTags ?? [],
  };
}

export interface ItemStats {
  atk?: number;
  matk?: number;
  def?: number;
  mdef?: number;
  hp?: number;
  mp?: number;
  str?: number;
  int?: number;
  dex?: number;
  vit?: number;
  luk?: number;
  critRate?: number;
  critDamage?: number;
  hitRate?: number;
  dodgeRate?: number;
}

export interface ItemUseEffect {
  type: 'heal_hp' | 'heal_mp' | 'heal_both' | 'buff' | 'teleport'
    | 'buff_atk' | 'buff_matk' | 'buff_dodge' | 'buff_def' | 'buff_crit' | 'buff_all'
    | 'teleport_home' | 'teleport_mark' | 'mark_location'
    | 'food_hp' | 'food_hp_resource' | 'food_atk' | 'food_matk' | 'food_restore' | 'food_feast'
    | 'combat_escape' | 'combat_blind' | 'combat_stun' | 'combat_damage'
    | 'open_chest_bronze' | 'open_chest_silver' | 'open_chest_gold';
  value: number;
  value2?: number;
  duration?: number;
}

export interface InventoryItem {
  itemId: string;
  quantity: number;
  equipped: boolean;
  itemInstanceId?: string;
  quality?: ItemQuality;
  itemLevel?: number;
  droppedBy?: string;
  droppedInZone?: string;
  sourceTags?: string[];
  affixes?: AffixDef[];
  lockedAffixIndexes?: number[];
  fixedEffects?: string[];
}
