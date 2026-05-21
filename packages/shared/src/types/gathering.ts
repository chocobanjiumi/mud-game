// 採集型別定義

export type GatheringSkill =
  | 'mining'
  | 'herbalism'
  | 'logging'
  | 'skinning'
  | 'fishing'
  | 'archaeology';

export type GatheringMaterialQuality = 'rough' | 'normal' | 'fine' | 'rare' | 'perfect';

export interface GatheringYieldDef {
  itemId: string;
  quality: GatheringMaterialQuality;
  minQty: number;
  maxQty: number;
  weight: number;
}

export interface GatheringNodeDef {
  id: string;
  name: string;
  skill: GatheringSkill;
  levelMin: number;
  levelMax: number;
  roomTags: string[];
  zoneTags: string[];
  yields: GatheringYieldDef[];
}
