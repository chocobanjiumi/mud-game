// 物品型別定義

import type { ClassId } from './player.js';
import type { ElementType } from './skill.js';

export type ItemType = 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material' | 'quest';
export type ArmorSlot = 'head' | 'body' | 'hands' | 'feet';
export type EquipSlot = 'weapon' | 'head' | 'body' | 'hands' | 'feet' | 'accessory';

export type WeaponType = 'spear' | 'greataxe' | 'katana' | 'elemental_staff' | 'grimoire' | 'hourglass_staff' | 'crossbow' | 'dagger' | 'whip' | 'holy_tome' | 'nature_staff' | 'warhammer';

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
  weaponType?: WeaponType;
  attackDescriptions?: {
    normal: string;   // normal attack text
    critical: string; // critical hit text
    miss: string;     // miss text
    kill: string;     // killing blow text
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
  dodgeRate?: number;
}

export interface ItemUseEffect {
  type: 'heal_hp' | 'heal_mp' | 'heal_both' | 'buff' | 'teleport';
  value: number;
  value2?: number;
  duration?: number;
}

export interface InventoryItem {
  itemId: string;
  quantity: number;
  equipped: boolean;
}
