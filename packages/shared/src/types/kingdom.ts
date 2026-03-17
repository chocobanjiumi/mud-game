// 王國系統型別定義

// ============================================================
//  官職 (Ranks)
// ============================================================

export type KingdomRank =
  | 'king'        // 國王
  | 'chancellor'  // 宰相
  | 'general'     // 將軍
  | 'minister'    // 大臣
  | 'treasurer'   // 財務官
  | 'diplomat'    // 外交官
  | 'citizen';    // 國民

// ============================================================
//  權限 (Permissions)
// ============================================================

export type KingdomPermission =
  | 'all'
  | 'appoint'
  | 'kick'
  | 'build'
  | 'treasury'
  | 'treasury_view'
  | 'treasury_deposit'
  | 'treasury_withdraw'
  | 'tax'
  | 'diplomacy'
  | 'military'
  | 'manage_rooms'
  | 'manage_npcs'
  | 'info'
  | 'chat'
  | 'map'
  | 'petition'
  | 'vote'
  | 'dissolve'
  | 'transfer';

// ============================================================
//  建築類型 (Building Types)
// ============================================================

export type BuildingType =
  | 'hall'       // 大廳
  | 'barracks'   // 兵營
  | 'market'     // 市場
  | 'treasury'   // 金庫
  | 'temple'     // 神殿
  | 'smithy'     // 鍛造坊
  | 'library'    // 圖書館
  | 'dungeon'    // 地牢
  | 'empty';     // 空房

// ============================================================
//  王國 NPC 類型
// ============================================================

export type KingdomNpcType =
  | 'merchant'    // 商人
  | 'trainer'     // 訓練師
  | 'healer'      // 醫師
  | 'guard'       // 衛兵
  | 'banker'      // 銀行家
  | 'blacksmith'; // 鐵匠

// ============================================================
//  外交關係
// ============================================================

export type DiplomacyRelation = 'ally' | 'enemy' | 'neutral' | 'embargo';

// ============================================================
//  戰爭狀態
// ============================================================

export type WarStatus = 'active' | 'peace' | 'siege' | 'ended';

// ============================================================
//  國庫交易類型
// ============================================================

export type TreasuryTransactionType =
  | 'deposit' | 'withdraw' | 'tax' | 'maintenance'
  | 'war_cost' | 'bounty_set' | 'bounty_refund' | 'recruit_soldiers' | 'repair' | 'trade';

// ============================================================
//  懸賞狀態
// ============================================================

export type BountyStatus = 'active' | 'completed' | 'cancelled';

// ============================================================
//  主要資料結構
// ============================================================

export interface KingdomInfo {
  id: string;
  name: string;
  description: string;
  kingId: string;
  createdAt: number;
  treasuryGold: number;
  taxRate: number;
  motto: string;
}

export interface KingdomMember {
  kingdomId: string;
  characterId: string;
  rank: KingdomRank;
  joinedAt: number;
}

export interface KingdomRoom {
  kingdomId: string;
  roomId: string;
  roomType: BuildingType;
  builtBy: string;
  builtAt: number;
}

export interface KingdomTreasuryRecord {
  id: number;
  kingdomId: string;
  amount: number;
  type: TreasuryTransactionType;
  description: string;
  characterId: string;
  createdAt: number;
}

export interface KingdomBounty {
  id: number | string;
  kingdomId: string;
  targetId: string;
  reward: number;
  reason: string;
  placedBy: string;
  status: BountyStatus;
  createdAt: number;
}

export interface KingdomWar {
  id: number | string;
  attackerId: string;
  defenderId: string;
  status: WarStatus;
  startedAt: number;
  endedAt: number | null;
  gateHp: number;
  wallHp: number;
  palaceHp: number;
}

export interface KingdomDiplomacy {
  id: number;
  kingdomAId: string;
  kingdomBId: string;
  relationType: DiplomacyRelation;
  establishedAt: number;
}
