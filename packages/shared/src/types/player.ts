// 角色與玩家型別

export interface BaseStats {
  str: number;
  int: number;
  dex: number;
  vit: number;
  luk: number;
}

export interface DerivedStats {
  atk: number;
  matk: number;
  def: number;
  mdef: number;
  hitRate: number;
  dodgeRate: number;
  critRate: number;
  critDamage: number;
}

export type ClassId =
  | 'adventurer'
  // 一轉
  | 'swordsman' | 'mage' | 'ranger' | 'priest'
  // 二轉 - 劍士系
  | 'knight' | 'berserker' | 'sword_saint'
  // 二轉 - 法師系
  | 'archmage' | 'warlock' | 'chronomancer'
  // 二轉 - 遊俠系
  | 'marksman' | 'assassin' | 'beast_master'
  // 二轉 - 祭司系
  | 'high_priest' | 'druid' | 'inquisitor';

export type ClassTier = 0 | 1 | 2;

export interface ClassDef {
  id: ClassId;
  name: string; // 中文名
  tier: ClassTier;
  description: string;
  baseStatBonus: BaseStats;
  parentClass?: ClassId;
  advancedClasses?: ClassId[];
}

export interface EquipmentSlots {
  weapon: string | null;
  head: string | null;
  body: string | null;
  hands: string | null;
  feet: string | null;
  accessory: string | null;
}

export interface Character {
  id: string;
  userId: string;
  name: string;
  level: number;
  exp: number;
  classId: ClassId;
  hp: number;
  mp: number;
  maxHp: number;
  maxMp: number;
  stats: BaseStats;
  freePoints: number;
  gold: number;
  roomId: string;
  isAi: boolean;
  agentId?: string;
  equipment: EquipmentSlots;
  createdAt: number;
  lastLogin: number;
}

export interface PlayerSession {
  id: string;
  character: Character;
  isOnline: boolean;
  lastActivity: number;
}
