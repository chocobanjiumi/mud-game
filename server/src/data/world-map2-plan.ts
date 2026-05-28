import type { RoomDef, ZoneDef } from '@game/shared';

export type ZoneMapScopeDecision = 'world' | 'instance' | 'hybrid' | 'decision';

export interface ZoneMapPlan {
  zoneId: string;
  decision: ZoneMapScopeDecision;
  reason: string;
  entranceRoomId?: string;
}

const WORLD_ZONE_IDS = [
  'starter_village',
  'starter_village_ext',
  'plains',
  'old_farmland',
  'whispering_valley',
  'wildgrass_hills',
  'lakeside_town',
  'kingsroad_market',
  'arena_quarter',
  'eastern_coast',
  'mist_harbor',
  'saltwind_flats',
  'bloodsalt_coast',
  'sapphire_lake',
  'moonlit_fen',
  'serpent_delta',
  'dark_forest',
  'blackwood',
  'amber_forest',
  'emerald_canopy',
  'silverpine_range',
  'storm_highlands',
  'frostbite_pass',
  'redrock_badlands',
  'glass_dunes',
  'thundersteppe',
  'ember_march',
  'volcano_zone',
  'ironwood_fort',
  'royal_hunting_grounds',
  'kingdom_frontier',
] as const;

const INSTANCE_ZONE_IDS = [
  'crystal_cave',
  'abandoned_mines',
  'sunken_catacombs',
  'underground_city',
  'cursed_graveyard',
  'ancient_ruins',
  'deepsea_temple',
  'obsidian_depths',
  'hollow_mountain',
  'machine_graveyard',
  'ashfall_monastery',
  'thornmaze',
  'reef_of_bones',
  'necropolis_gate',
  'lost_capital',
  'sunspire',
  'moonshadow_court',
  'dragon_valley',
  'sky_isles',
  'starfall_crater',
  'time_ruins',
  'abyss_rift',
  'astral_wastes',
  'celestial_ruins',
  'demon_territory',
  'final_battleground',
] as const;

const DECISION_ZONE_IDS = [
  'pilgrim_road',
  'marsh_of_mirrors',
  'frozen_wastes',
] as const;

export const WORLD_MAP2_WORLD_ZONE_IDS = new Set<string>(WORLD_ZONE_IDS);
export const WORLD_MAP2_INSTANCE_ZONE_IDS = new Set<string>(INSTANCE_ZONE_IDS);
export const WORLD_MAP2_DECISION_ZONE_IDS = new Set<string>(DECISION_ZONE_IDS);

export function buildZoneMapPlans(zones: Record<string, ZoneDef>): Map<string, ZoneMapPlan> {
  const plans = new Map<string, ZoneMapPlan>();
  for (const zone of Object.values(zones)) {
    if (WORLD_MAP2_WORLD_ZONE_IDS.has(zone.id)) {
      plans.set(zone.id, {
        zoneId: zone.id,
        decision: 'world',
        reason: '公共、連續、可長期存在的主世界地塊。',
      });
      continue;
    }
    if (WORLD_MAP2_INSTANCE_ZONE_IDS.has(zone.id)) {
      plans.set(zone.id, {
        zoneId: zone.id,
        decision: 'instance',
        entranceRoomId: zone.rooms[0],
        reason: '封閉、異界、地下城、神殿或高階挑戰內容，V1 規劃為副本生成區域。',
      });
      continue;
    }
    if (WORLD_MAP2_DECISION_ZONE_IDS.has(zone.id)) {
      plans.set(zone.id, {
        zoneId: zone.id,
        decision: 'decision',
        entranceRoomId: zone.rooms[0],
        reason: '需要產品決策：可留主世界，也可拆成 hybrid / instance。',
      });
      continue;
    }
    plans.set(zone.id, {
      zoneId: zone.id,
      decision: 'decision',
      entranceRoomId: zone.rooms[0],
      reason: 'mud_map2.md 尚未分類的新區域，需要先補產品決策。',
    });
  }
  return plans;
}

export function plannedMapScopeForRoom(room: RoomDef, zonePlan: ZoneMapPlan | undefined): 'world' | 'instance' {
  if (room.mapScope) return room.mapScope;
  if (zonePlan?.decision === 'instance') return 'instance';
  return 'world';
}
