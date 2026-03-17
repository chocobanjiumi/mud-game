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

export type ResourceType = 'mp' | 'rage' | 'energy' | 'faith';

export interface ClassDef {
  id: ClassId;
  name: string; // 中文名
  tier: ClassTier;
  description: string;
  baseStatBonus: BaseStats;
  parentClass?: ClassId;
  advancedClasses?: ClassId[];
  resourceType: ResourceType;
  initialResource: number;
  maxResource: number;
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
  resource: number;
  maxResource: number;
  resourceType: ResourceType;
  stats: BaseStats;
  freePoints: number;
  gold: number;
  roomId: string;
  isAi: boolean;
  agentId?: string;
  equipment: EquipmentSlots;
  createdAt: number;
  lastLogin: number;
  // 守護靈系統
  guardianId?: string;
  guardianRoute?: GuardianRoute;
  guardianAffinity?: number; // 0-100
}

export interface PlayerSession {
  id: string;
  character: Character;
  isOnline: boolean;
  lastActivity: number;
}

// ─── 守護靈系統 ───

/** 守護靈感知路線 */
export type GuardianRoute = 'creature' | 'treasure' | 'spirit';

/** 守護靈提示類型（與路線對應） */
export type GuardianHintType = 'creature' | 'treasure' | 'spirit';

/** 守護靈定義 */
export interface GuardianDef {
  id: string;
  name: string;         // 中文名稱
  route: GuardianRoute;
  description: string;  // 守護靈的性格與背景描述
  personality: string;  // 說話風格
}

/** 守護靈提示結構（附加在 Room / Monster / NPC 上） */
export interface GuardianHints {
  creature?: string;
  treasure?: string;
  spirit?: string;
}

/** 玩家的守護靈狀態 */
export interface PlayerGuardianState {
  guardianId: string;
  guardianRoute: GuardianRoute;
  guardianAffinity: number; // 0-100
}
