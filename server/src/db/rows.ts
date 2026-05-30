import type { AffixDef, ClassId, FaithId, GenderId, ItemQuality, RaceId, ResourceType } from '@game/shared';

export interface CharacterRow {
  id: string;
  user_id: string;
  name: string;
  level: number;
  exp: number;
  class_id: ClassId;
  race_id: RaceId | null;
  gender_id: GenderId | string | null;
  faith_id: FaithId | null;
  faith_favor: number | null;
  faith_cooldown_until: number | null;
  hp: number;
  mp: number;
  max_hp: number;
  max_mp: number;
  resource: number | null;
  max_resource: number | null;
  resource_type: ResourceType | 'energy' | string | null;
  str: number;
  int_: number;
  dex: number;
  vit: number;
  luk: number;
  free_points: number;
  gold: number;
  room_id: string;
  is_ai: number;
  agent_id: string | null;
  marked_location: string | null;
  active_mount_id: string | null;
  mounted: number | null;
  mount_fatigue: number | null;
  mount_cooldown_until: number | null;
  created_at: number;
  last_login: number;
}

export interface InventoryStackRow {
  id: number;
  quantity: number;
}

export interface InventoryItemRow {
  item_id: string;
  item_instance_id: string | null;
  quantity: number;
  equipped?: number;
  quality: ItemQuality | null;
  item_level: number | null;
  dropped_by: string | null;
  dropped_in_zone: string | null;
  source_tags_json: string | null;
  affixes_json: string | null;
  locked_affixes_json: string | null;
  fixed_effects_json: string | null;
}

export interface StoredItemInstanceRow {
  id: string;
  base_item_id: string;
  quality: ItemQuality;
  item_level: number | null;
  dropped_by: string | null;
  dropped_in_zone: string | null;
  source_tags_json: string | null;
  affixes_json: string | null;
  locked_affixes_json: string | null;
  fixed_effects_json: string | null;
}

export interface CharacterAliasRow {
  alias: string;
  command: string;
}

export interface LearnedSkillRow {
  skill_id: string;
  level: number;
}

export interface ZoneUnlockRow {
  zone_id: string;
}

export interface PortalUnlockRow {
  portal_id: string;
  zone_id: string;
}

export interface QuestProgressRow {
  quest_id: string;
}

export interface CountRow {
  count: number;
}

export interface GroundItemPickupRow {
  respawn_at_ms: number;
}

export interface TransactionRow {
  transaction_id: string;
  user_id: string;
  amount: number;
  type: string;
  description: string;
  timestamp: number;
}

export interface KingdomRow {
  id: string;
  name: string;
  description: string;
  king_id: string;
  created_at: number;
  treasury_gold: number;
  tax_rate: number;
  motto: string;
}

export interface KingdomMemberRow {
  kingdom_id: string;
  character_id: string;
  rank: string;
  joined_at: number;
}

export interface KingdomRoomRow {
  kingdom_id: string;
  room_id: string;
  room_type: string;
  built_by: string;
  built_at: number;
}

export interface TreasuryRecordRow {
  id: number;
  kingdom_id: string;
  amount: number;
  type: string;
  description: string;
  character_id: string;
  created_at: number;
}

export interface KingdomBountyRow {
  id: string;
  kingdom_id: string;
  target_id: string;
  reward: number;
  reason: string;
  placed_by: string;
  status: string;
  claimed_by: string | null;
  claimed_at: number | null;
  created_at: number;
}

export interface KingdomWarRow {
  id: string;
  attacker_id: string;
  defender_id: string;
  status: string;
  started_at: number;
  ended_at: number | null;
  gate_hp: number;
  wall_hp: number;
  palace_hp: number;
  winner_id: string | null;
}

export interface KingdomDiplomacyRow {
  kingdom_a_id: string;
  kingdom_b_id: string;
  relation_type: string;
  established_at: number;
}

export function parseJsonArray<T = unknown>(value: string | null): T[] | undefined {
  if (!value) return undefined;
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed as T[] : undefined;
  } catch {
    return undefined;
  }
}
