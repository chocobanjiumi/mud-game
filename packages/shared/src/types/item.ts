// 物品型別定義

import type { ClassId } from './player.js';
import type { ElementType } from './skill.js';
import type { AffixDef, ItemQuality } from '../systems/item-instance.js';

export type ItemType = 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material' | 'quest';
export type ArmorSlot = 'head' | 'body' | 'hands' | 'feet' | 'offhand';
export type EquipSlot =
  | 'meleeMainHand' | 'meleeOffHand' | 'rangedMainHand' | 'rangedOffHand'
  | 'weapon' | 'offhand'
  | 'head' | 'body' | 'hands' | 'feet' | 'ring' | 'earring' | 'belt' | 'necklace' | 'accessory' | 'saddle';

export type WeaponCategory = 'sword' | 'blade' | 'dagger' | 'katana' | 'giant_sword' | 'spear' | 'bow' | 'crossbow' | 'axe' | 'greataxe' | 'hammer' | 'warhammer' | 'wand' | 'scepter' | 'focus' | 'grimoire' | 'holy_tome' | 'staff' | 'whip' | 'shield';
export type WeaponType = WeaponCategory;
export type WeaponHandedness = 'one_hand' | 'two_hand' | 'offhand';
export type WeaponAttackSource = 'melee' | 'ranged_physical' | 'ranged_magical';

export interface WeaponTypeDef {
  id: WeaponType;
  name: string;
  category: WeaponCategory;
  rangeProfile: 'melee' | 'ranged' | 'spell' | 'support';
  handedness: WeaponHandedness;
  attackSource: WeaponAttackSource;
  classFamilies: ClassId[];
}

export const WEAPON_TYPE_DEFS: Record<WeaponType, WeaponTypeDef> = {
  sword: { id: 'sword', name: '單手劍', category: 'sword', rangeProfile: 'melee', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['swordsman'] },
  blade: { id: 'blade', name: '單手刃', category: 'blade', rangeProfile: 'melee', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['ranger', 'swordsman'] },
  dagger: { id: 'dagger', name: '單手匕首', category: 'dagger', rangeProfile: 'melee', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['ranger'] },
  katana: { id: 'katana', name: '雙手太刀', category: 'katana', rangeProfile: 'melee', handedness: 'two_hand', attackSource: 'melee', classFamilies: ['swordsman'] },
  giant_sword: { id: 'giant_sword', name: '雙手巨劍', category: 'giant_sword', rangeProfile: 'melee', handedness: 'two_hand', attackSource: 'melee', classFamilies: ['swordsman'] },
  spear: { id: 'spear', name: '雙手槍', category: 'spear', rangeProfile: 'ranged', handedness: 'two_hand', attackSource: 'ranged_physical', classFamilies: ['swordsman'] },
  bow: { id: 'bow', name: '雙手弓', category: 'bow', rangeProfile: 'ranged', handedness: 'two_hand', attackSource: 'ranged_physical', classFamilies: ['ranger'] },
  crossbow: { id: 'crossbow', name: '雙手弩', category: 'crossbow', rangeProfile: 'ranged', handedness: 'two_hand', attackSource: 'ranged_physical', classFamilies: ['ranger'] },
  axe: { id: 'axe', name: '單手斧', category: 'axe', rangeProfile: 'melee', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['swordsman'] },
  greataxe: { id: 'greataxe', name: '雙手巨斧', category: 'greataxe', rangeProfile: 'melee', handedness: 'two_hand', attackSource: 'melee', classFamilies: ['swordsman'] },
  hammer: { id: 'hammer', name: '單手錘', category: 'hammer', rangeProfile: 'melee', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['swordsman', 'priest'] },
  warhammer: { id: 'warhammer', name: '雙手戰錘', category: 'warhammer', rangeProfile: 'melee', handedness: 'two_hand', attackSource: 'melee', classFamilies: ['swordsman', 'priest'] },
  wand: { id: 'wand', name: '單手魔杖', category: 'wand', rangeProfile: 'spell', handedness: 'one_hand', attackSource: 'ranged_magical', classFamilies: ['mage'] },
  scepter: { id: 'scepter', name: '單手權杖', category: 'scepter', rangeProfile: 'support', handedness: 'one_hand', attackSource: 'ranged_magical', classFamilies: ['priest'] },
  focus: { id: 'focus', name: '副手法器', category: 'focus', rangeProfile: 'spell', handedness: 'offhand', attackSource: 'ranged_magical', classFamilies: ['mage', 'priest'] },
  grimoire: { id: 'grimoire', name: '副手魔導書', category: 'grimoire', rangeProfile: 'spell', handedness: 'offhand', attackSource: 'ranged_magical', classFamilies: ['mage'] },
  holy_tome: { id: 'holy_tome', name: '副手聖典', category: 'holy_tome', rangeProfile: 'support', handedness: 'offhand', attackSource: 'ranged_magical', classFamilies: ['priest'] },
  staff: { id: 'staff', name: '雙手法杖', category: 'staff', rangeProfile: 'spell', handedness: 'two_hand', attackSource: 'ranged_magical', classFamilies: ['mage', 'priest'] },
  whip: { id: 'whip', name: '鞭（封存）', category: 'whip', rangeProfile: 'support', handedness: 'one_hand', attackSource: 'melee', classFamilies: ['ranger', 'priest'] },
  shield: { id: 'shield', name: '副手盾牌', category: 'shield', rangeProfile: 'support', handedness: 'offhand', attackSource: 'melee', classFamilies: ['swordsman', 'priest'] },
};

export function resolveEquipSlotForItem(def: Pick<ItemDef, 'equipSlot' | 'weaponType' | 'type'> | undefined): EquipSlot | null {
  if (!def?.equipSlot) return null;
  if (def.type !== 'weapon' || !def.weaponType) {
    if (def.equipSlot === 'weapon') return 'meleeMainHand';
    if (def.equipSlot === 'offhand') return 'meleeOffHand';
    return def.equipSlot;
  }

  const weapon = WEAPON_TYPE_DEFS[def.weaponType];
  if (!weapon) return def.equipSlot;
  if (weapon.handedness === 'offhand') {
    return weapon.attackSource === 'ranged_magical' || weapon.attackSource === 'ranged_physical'
      ? 'rangedOffHand'
      : 'meleeOffHand';
  }
  return weapon.attackSource === 'melee' ? 'meleeMainHand' : 'rangedMainHand';
}

export function isTwoHandWeapon(def: Pick<ItemDef, 'weaponType' | 'type'> | undefined): boolean {
  return !!def?.weaponType && WEAPON_TYPE_DEFS[def.weaponType]?.handedness === 'two_hand';
}

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
  mountChargePower?: number;
  mountStability?: number;
  mountGuardPower?: number;
  mountFatigueMax?: number;
  mountFatigueRecovery?: number;
  mountedInterceptBonus?: number;
  mountedRetreatBonus?: number;
  mountedThreatBonus?: number;
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
