import { WORLD_MAP2_INSTANCE_ENTRY_ITEMS } from '@game/shared';
import type { RoomDef, ZoneDef } from '@game/shared';

export type ZoneMapScopeDecision = 'world' | 'instance' | 'hybrid' | 'decision';
export type InstanceEntryType = 'object_interact' | 'npc_dialogue' | 'item_use';
export type InstanceEntryQuestState = 'available' | 'active' | 'ready' | 'completed';

export interface InstanceEntryDef {
  id: string;
  instanceTemplateId: string;
  dungeonId?: string;
  type: InstanceEntryType;
  roomId: string;
  name: string;
  description: string;
  objectId?: string;
  npcId?: string;
  requiredItemId?: string;
  consumeItem?: boolean;
  requiredQuestId?: string;
  requiredQuestState?: InstanceEntryQuestState;
  minLevel?: number;
  maxPartySize?: number;
  cooldownSeconds?: number;
  difficultyOptions?: string[];
}

export interface ZoneMapPlan {
  zoneId: string;
  decision: ZoneMapScopeDecision;
  reason: string;
  entranceRoomId?: string;
  globalBounds?: ZoneGlobalBounds;
}

export interface ZoneGlobalBounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  anchor: string;
  terrainRole: string;
}

export interface ZoneLocalBounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface PlannedWorldCoordinate {
  worldX: number;
  worldY: number;
  source: 'explicit' | 'derived' | 'instance-entry';
}

interface RelativeCoordinate {
  x: number;
  y: number;
}

interface NpcDialogueInstanceEntryConfig {
  zoneId: string;
  npcId: string;
  name: string;
  description: string;
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

export const WORLD_MAP2_ZONE_GLOBAL_BOUNDS: Record<string, ZoneGlobalBounds> = {
  starter_village: {
    minX: 0, maxX: 6, minY: 0, maxY: 5,
    anchor: '中央新手核心',
    terrainRole: '低等安全聚落，作為新手村外圍、平原與舊農場的交通中心。',
  },
  starter_village_ext: {
    minX: 0, maxX: 6, minY: -6, maxY: -1,
    anchor: '新手核心北側緩衝',
    terrainRole: '村外巡邏線與初階採集帶，銜接荒草丘陵與銀松山脈前緣。',
  },
  plains: {
    minX: 7, maxX: 14, minY: 0, maxY: 5,
    anchor: '中央東側低等野外',
    terrainRole: '開闊草地與主路，銜接湖畔城鎮、朝聖古道與新手核心。',
  },
  old_farmland: {
    minX: -8, maxX: -1, minY: -1, maxY: 4,
    anchor: '中央西側農地',
    terrainRole: '廢田、穀倉與低等野獸區，作為西側森林與村莊的緩衝。',
  },
  whispering_valley: {
    minX: -7, maxX: -1, minY: 5, maxY: 11,
    anchor: '中央南西谷地',
    terrainRole: '溪谷與低地通道，銜接暗影森林、鐵木要塞與新手核心南線。',
  },
  wildgrass_hills: {
    minX: 1, maxX: 8, minY: -12, maxY: -7,
    anchor: '北側丘陵',
    terrainRole: '草丘與風口，作為新手外圍往山區、高地的等級過渡。',
  },
  lakeside_town: {
    minX: 15, maxX: 22, minY: 0, maxY: 6,
    anchor: '東側湖畔交通節點',
    terrainRole: '中繼城鎮與服務中心，連接市場、湖泊與東方海岸。',
  },
  kingsroad_market: {
    minX: 23, maxX: 30, minY: -1, maxY: 5,
    anchor: '王道商貿節點',
    terrainRole: '市場、驛路與補給線，放在湖畔城鎮與東岸之間。',
  },
  arena_quarter: {
    minX: 23, maxX: 30, minY: 6, maxY: 12,
    anchor: '湖畔城鎮南東競技區',
    terrainRole: '城市外圍的戰鬥活動區，緊鄰市場但避開低等主線路。',
  },
  eastern_coast: {
    minX: 31, maxX: 39, minY: 0, maxY: 6,
    anchor: '東方海岸主線',
    terrainRole: '海崖、潮道與港口前緣，承接王道市集與霧港。',
  },
  mist_harbor: {
    minX: 40, maxX: 47, minY: -1, maxY: 5,
    anchor: '東岸港口',
    terrainRole: '船塢、霧燈與海運節點，作為海岸交通終端與副本入口集散地。',
  },
  saltwind_flats: {
    minX: 31, maxX: 39, minY: 7, maxY: 13,
    anchor: '東南鹽灘',
    terrainRole: '鹽灘與濕熱平地，銜接血鹽海岸、蛇河三角洲與東岸。',
  },
  bloodsalt_coast: {
    minX: 40, maxX: 47, minY: 6, maxY: 12,
    anchor: '危險東南海岸',
    terrainRole: '高危海岸與紅潮地形，作為鹽風灘往高等海域的延伸。',
  },
  sapphire_lake: {
    minX: 14, maxX: 22, minY: 7, maxY: 13,
    anchor: '中央東南湖泊',
    terrainRole: '湖面、棧橋與水路，銜接湖畔城鎮、月光濕地與朝聖古道。',
  },
  moonlit_fen: {
    minX: 15, maxX: 23, minY: 14, maxY: 20,
    anchor: '南方濕地',
    terrainRole: '濕地、月光水道與毒霧，作為湖泊往蛇河三角洲的自然過渡。',
  },
  serpent_delta: {
    minX: 31, maxX: 39, minY: 14, maxY: 20,
    anchor: '東南河口',
    terrainRole: '河汊與三角洲，連接鹽灘、血鹽海岸與南方濕地。',
  },
  dark_forest: {
    minX: -8, maxX: -1, minY: 12, maxY: 18,
    anchor: '西南暗林入口',
    terrainRole: '中低等森林危險區，承接低語溪谷並通往黑木林。',
  },
  blackwood: {
    minX: -17, maxX: -10, minY: 12, maxY: 18,
    anchor: '西南深林',
    terrainRole: '更高危的陰暗林帶，作為暗影森林與翡翠樹冠的中段。',
  },
  amber_forest: {
    minX: -17, maxX: -10, minY: 5, maxY: 11,
    anchor: '西側溫暖森林',
    terrainRole: '琥珀林與樹脂採集帶，銜接舊農場、西側山路與黑木林。',
  },
  emerald_canopy: {
    minX: -26, maxX: -18, minY: 7, maxY: 13,
    anchor: '遠西高樹冠',
    terrainRole: '高等森林與樹冠道路，放在世界西側深處而非新手主路旁。',
  },
  silverpine_range: {
    minX: -8, maxX: 0, minY: -14, maxY: -8,
    anchor: '西北山脈前緣',
    terrainRole: '松林山坡與冷風通道，承接新手外圍、王家獵場與風暴高原。',
  },
  storm_highlands: {
    minX: -18, maxX: -10, minY: -15, maxY: -9,
    anchor: '西北高原',
    terrainRole: '風暴高地與危險山路，銜接銀松山脈與霜咬隘口。',
  },
  frostbite_pass: {
    minX: -27, maxX: -19, minY: -15, maxY: -9,
    anchor: '遠西北雪線',
    terrainRole: '雪線隘口與冰封雪原前置緩衝，避免沙漠、火山直接貼雪原。',
  },
  redrock_badlands: {
    minX: -8, maxX: 0, minY: 19, maxY: 25,
    anchor: '南西荒地',
    terrainRole: '赤岩乾谷，從森林南緣過渡到琉璃沙丘。',
  },
  glass_dunes: {
    minX: 1, maxX: 10, minY: 19, maxY: 25,
    anchor: '南方沙丘',
    terrainRole: '沙漠與玻璃化地形，放在荒地與雷鳴草原之間。',
  },
  thundersteppe: {
    minX: 11, maxX: 20, minY: 21, maxY: 27,
    anchor: '南方草原高危帶',
    terrainRole: '雷暴草原，作為沙漠、餘燼邊境與濕地南緣的過渡。',
  },
  ember_march: {
    minX: 21, maxX: 30, minY: 21, maxY: 27,
    anchor: '東南餘燼邊境',
    terrainRole: '焦土與火山前緣，將雷鳴草原自然過渡到火山地帶。',
  },
  volcano_zone: {
    minX: 31, maxX: 39, minY: 21, maxY: 27,
    anchor: '東南火山終端',
    terrainRole: '火山與熔岩地形，作為主世界東南高等邊界。',
  },
  ironwood_fort: {
    minX: 0, maxX: 7, minY: 12, maxY: 18,
    anchor: '中央南方要塞',
    terrainRole: '要塞與軍道，控制低語溪谷、暗影森林與南方荒地的交界。',
  },
  royal_hunting_grounds: {
    minX: -9, maxX: -2, minY: -7, maxY: -2,
    anchor: '西北近郊獵場',
    terrainRole: '王家林地與獵徑，銜接舊農場、銀松山脈與王國邊境。',
  },
  kingdom_frontier: {
    minX: -18, maxX: -10, minY: -7, maxY: -1,
    anchor: '西北王國邊境',
    terrainRole: '邊境軍路與關卡，銜接王家獵場、風暴高原與後續王國戰線。',
  },
  pilgrim_road: {
    minX: 8, maxX: 13, minY: 6, maxY: 12,
    anchor: '中央東南朝聖通道',
    terrainRole: '待決策區。若留主世界，作為平原、藍寶湖與湖畔城鎮間的信仰路線。',
  },
  marsh_of_mirrors: {
    minX: 24, maxX: 30, minY: 13, maxY: 19,
    anchor: '東南鏡沼',
    terrainRole: '待決策區。若留主世界，作為月光濕地與蛇河三角洲之間的異常濕地。',
  },
  frozen_wastes: {
    minX: -28, maxX: -20, minY: -23, maxY: -17,
    anchor: '遠西北冰封荒原',
    terrainRole: '待決策區。若留主世界，必須經霜咬隘口或副本入口進入。',
  },
};

export const WORLD_MAP2_INSTANCE_ZONE_DUNGEON_IDS: Record<string, string> = {
  crystal_cave: 'crystal_temple',
  abandoned_mines: 'abandoned_mines_template',
  sunken_catacombs: 'sunken_catacombs_template',
  underground_city: 'underground_city_template',
  cursed_graveyard: 'cursed_graveyard_template',
  ancient_ruins: 'ancient_ruins_template',
  deepsea_temple: 'deepsea_temple_template',
  obsidian_depths: 'obsidian_depths_template',
  hollow_mountain: 'hollow_mountain_template',
  machine_graveyard: 'machine_graveyard_template',
  ashfall_monastery: 'ashfall_monastery_template',
  thornmaze: 'thornmaze_template',
  reef_of_bones: 'reef_of_bones_template',
  necropolis_gate: 'necropolis_gate_template',
  lost_capital: 'lost_capital_template',
  sunspire: 'sunspire_template',
  moonshadow_court: 'moonshadow_court_template',
  demon_territory: 'demon_fortress',
  dragon_valley: 'dragon_nest',
  sky_isles: 'sky_isles_template',
  starfall_crater: 'starfall_crater_template',
  time_ruins: 'time_ruins_template',
  abyss_rift: 'abyss_gate',
  astral_wastes: 'astral_wastes_template',
  celestial_ruins: 'celestial_trial',
  final_battleground: 'final_battleground_template',
};

export const WORLD_MAP2_INSTANCE_ENTRANCE_COORDINATES: Record<string, { worldX: number; worldY: number }> = {
  crystal_cave: { worldX: 9, worldY: -6 },
  abandoned_mines: { worldX: -9, worldY: -8 },
  sunken_catacombs: { worldX: 42, worldY: 8 },
  underground_city: { worldX: -19, worldY: 0 },
  cursed_graveyard: { worldX: -9, worldY: 19 },
  ancient_ruins: { worldX: 12, worldY: 14 },
  deepsea_temple: { worldX: 48, worldY: 9 },
  obsidian_depths: { worldX: 40, worldY: 24 },
  hollow_mountain: { worldX: -28, worldY: -10 },
  machine_graveyard: { worldX: 31, worldY: -6 },
  ashfall_monastery: { worldX: 28, worldY: 28 },
  thornmaze: { worldX: -27, worldY: 14 },
  reef_of_bones: { worldX: 48, worldY: 13 },
  necropolis_gate: { worldX: -18, worldY: 20 },
  lost_capital: { worldX: -22, worldY: 2 },
  sunspire: { worldX: 48, worldY: -3 },
  moonshadow_court: { worldX: 24, worldY: 20 },
  dragon_valley: { worldX: 40, worldY: -7 },
  sky_isles: { worldX: 23, worldY: -7 },
  starfall_crater: { worldX: 42, worldY: 21 },
  time_ruins: { worldX: -29, worldY: -17 },
  abyss_rift: { worldX: 49, worldY: 24 },
  astral_wastes: { worldX: 50, worldY: -8 },
  celestial_ruins: { worldX: 50, worldY: -2 },
  demon_territory: { worldX: 49, worldY: 18 },
  final_battleground: { worldX: 51, worldY: 21 },
};

const WORLD_MAP2_ENDGAME_DIFFICULTY_OPTIONS = ['normal', 'hard', 'nightmare'];

const WORLD_MAP2_NPC_DIALOGUE_INSTANCE_ENTRIES: NpcDialogueInstanceEntryConfig[] = [
  {
    zoneId: 'crystal_cave',
    npcId: 'crystal_cave_entry_guide',
    name: '水晶洞窟勘探委託',
    description: '水晶洞窟入口的勘探嚮導會先確認隊伍是否理解礦道坍塌、水晶折光與地底魔力風險，再用公會標記帶玩家進入獨立副本路線。',
  },
  {
    zoneId: 'sunken_catacombs',
    npcId: 'sunken_catacombs_tide_surveyor',
    name: '沉沒墓窟水位委託',
    description: '墓窟水位測繪員掌握黑水潮汐與退路標記，玩家可透過他的對話確認建議等級、隊伍人數與水閘風險後進入沉沒墓窟副本。',
  },
  {
    zoneId: 'final_battleground',
    npcId: 'final_battleground_war_scribe',
    name: '終焉戰場軍令確認',
    description: '終戰入口軍史官保存最後軍令與戰場名冊，只有在玩家透過對話確認終末軍旗、隊伍規模與冷卻限制後，才會引導隊伍進入終焉戰場副本。',
  },
];

const CARDINAL_DELTAS: Record<string, RelativeCoordinate> = {
  north: { x: 0, y: -1 },
  south: { x: 0, y: 1 },
  east: { x: 1, y: 0 },
  west: { x: -1, y: 0 },
};

export function buildZoneMapPlans(zones: Record<string, ZoneDef>): Map<string, ZoneMapPlan> {
  const plans = new Map<string, ZoneMapPlan>();
  for (const zone of Object.values(zones)) {
    if (WORLD_MAP2_WORLD_ZONE_IDS.has(zone.id)) {
      plans.set(zone.id, {
        zoneId: zone.id,
        decision: 'world',
        reason: '公共、連續、可長期存在的主世界地塊。',
        globalBounds: WORLD_MAP2_ZONE_GLOBAL_BOUNDS[zone.id],
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
        globalBounds: WORLD_MAP2_ZONE_GLOBAL_BOUNDS[zone.id],
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

export function buildInstanceEntryDefs(zones: Record<string, ZoneDef>): InstanceEntryDef[] {
  const zonePlans = buildZoneMapPlans(zones);
  const entries: InstanceEntryDef[] = [];
  for (const zone of Object.values(zones)) {
    const plan = zonePlans.get(zone.id);
    if (plan?.decision !== 'instance' || !plan.entranceRoomId) continue;
    entries.push({
      id: `${zone.id}_entry`,
      instanceTemplateId: zone.id,
      dungeonId: WORLD_MAP2_INSTANCE_ZONE_DUNGEON_IDS[zone.id],
      type: 'object_interact',
      roomId: plan.entranceRoomId,
      objectId: `${zone.id}_entrance_object`,
      name: `${zone.name}入口`,
      description: `${zone.name}入口以固定場景物件標示在世界地圖上，玩家能從此處建立獨立副本；入口周圍的刻痕、封印與警示牌說明這不是普通裝飾，而是通往該區深處的進入點。`,
      minLevel: zone.levelRange[0],
      maxPartySize: zone.recommendedPartySize[1],
      requiredItemId: zone.id === 'final_battleground' ? 'final_standard_seal' : undefined,
      consumeItem: zone.id === 'final_battleground' ? false : undefined,
      cooldownSeconds: zone.id === 'final_battleground' ? 600 : 0,
      difficultyOptions: zone.id === 'final_battleground' ? WORLD_MAP2_ENDGAME_DIFFICULTY_OPTIONS : ['normal'],
    });

    for (const itemEntry of WORLD_MAP2_INSTANCE_ENTRY_ITEMS.filter(entry => entry.zoneId === zone.id)) {
      entries.push({
        id: `${zone.id}_${itemEntry.itemId}_item_entry`,
        instanceTemplateId: zone.id,
        dungeonId: WORLD_MAP2_INSTANCE_ZONE_DUNGEON_IDS[zone.id],
        type: 'item_use',
        roomId: plan.entranceRoomId,
        requiredItemId: itemEntry.itemId,
        consumeItem: itemEntry.consumeItem,
        name: itemEntry.entryName,
        description: itemEntry.entryDescription,
        minLevel: zone.levelRange[0],
        maxPartySize: zone.recommendedPartySize[1],
        cooldownSeconds: 'cooldownSeconds' in itemEntry ? itemEntry.cooldownSeconds ?? 0 : 0,
        difficultyOptions: zone.id === 'final_battleground' ? WORLD_MAP2_ENDGAME_DIFFICULTY_OPTIONS : ['normal'],
      });
    }

    for (const npcEntry of WORLD_MAP2_NPC_DIALOGUE_INSTANCE_ENTRIES.filter(entry => entry.zoneId === zone.id)) {
      entries.push({
        id: `${zone.id}_${npcEntry.npcId}_npc_entry`,
        instanceTemplateId: zone.id,
        dungeonId: WORLD_MAP2_INSTANCE_ZONE_DUNGEON_IDS[zone.id],
        type: 'npc_dialogue',
        roomId: plan.entranceRoomId,
        npcId: npcEntry.npcId,
        name: npcEntry.name,
        description: npcEntry.description,
        minLevel: zone.levelRange[0],
        maxPartySize: zone.recommendedPartySize[1],
        cooldownSeconds: zone.id === 'final_battleground' ? 600 : 0,
        difficultyOptions: ['normal'],
      });
    }
  }
  return entries;
}

export function plannedMapScopeForRoom(room: RoomDef, zonePlan: ZoneMapPlan | undefined): 'world' | 'instance' {
  if (room.mapScope) return room.mapScope;
  if (zonePlan?.decision === 'instance') {
    return room.id === zonePlan.entranceRoomId ? 'world' : 'instance';
  }
  return 'world';
}

export function buildZoneLocalBounds(
  zones: Record<string, ZoneDef>,
  getRoomById: (roomId: string) => RoomDef | undefined,
  zonePlans = buildZoneMapPlans(zones),
): Map<string, ZoneLocalBounds> {
  const boundsByZone = new Map<string, ZoneLocalBounds>();

  for (const zone of Object.values(zones)) {
    const plan = zonePlans.get(zone.id);
    const worldRooms = zone.rooms
      .map(roomId => getRoomById(roomId))
      .filter((room): room is RoomDef => Boolean(room))
      .filter(room => plannedMapScopeForRoom(room, plan) === 'world');

    if (worldRooms.length === 0) continue;

    boundsByZone.set(zone.id, worldRooms.reduce((bounds, room) => ({
      minX: Math.min(bounds.minX, room.mapX),
      maxX: Math.max(bounds.maxX, room.mapX),
      minY: Math.min(bounds.minY, room.mapY),
      maxY: Math.max(bounds.maxY, room.mapY),
    }), {
      minX: worldRooms[0].mapX,
      maxX: worldRooms[0].mapX,
      minY: worldRooms[0].mapY,
      maxY: worldRooms[0].mapY,
    }));
  }

  return boundsByZone;
}

export function plannedWorldCoordinateForRoom(
  room: RoomDef,
  zonePlan: ZoneMapPlan | undefined,
  zoneLocalBounds: Map<string, ZoneLocalBounds>,
): PlannedWorldCoordinate | undefined {
  if (plannedMapScopeForRoom(room, zonePlan) !== 'world') return undefined;
  if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
    return { worldX: room.worldX, worldY: room.worldY, source: 'explicit' };
  }

  const globalBounds = zonePlan?.globalBounds;
  const localBounds = zoneLocalBounds.get(room.zone);
  if (!globalBounds || !localBounds) return undefined;

  return {
    worldX: globalBounds.minX + (room.mapX - localBounds.minX),
    worldY: globalBounds.minY + (room.mapY - localBounds.minY),
    source: 'derived',
  };
}

export function buildPlannedWorldCoordinateMap(
  zones: Record<string, ZoneDef>,
  getRoomById: (roomId: string) => RoomDef | undefined,
  zonePlans = buildZoneMapPlans(zones),
): Map<string, PlannedWorldCoordinate> {
  const coordinates = new Map<string, PlannedWorldCoordinate>();
  const occupied = new Set<string>();

  for (const zone of Object.values(zones)) {
    const plan = zonePlans.get(zone.id);
    const worldRooms = zone.rooms
      .map(roomId => getRoomById(roomId))
      .filter((room): room is RoomDef => Boolean(room))
      .filter(room => plannedMapScopeForRoom(room, plan) === 'world');

    for (const room of worldRooms) {
      if (typeof room.worldX === 'number' && typeof room.worldY === 'number') {
        const coordinate = { worldX: room.worldX, worldY: room.worldY, source: 'explicit' as const };
        coordinates.set(room.id, coordinate);
        occupied.add(coordinateKey({ x: coordinate.worldX, y: coordinate.worldY }));
      }
    }

    if (plan?.decision === 'instance' && plan.entranceRoomId) {
      const entranceCoordinate = WORLD_MAP2_INSTANCE_ENTRANCE_COORDINATES[zone.id];
      const entranceRoom = worldRooms.find(room => room.id === plan.entranceRoomId);
      if (entranceCoordinate && entranceRoom && !coordinates.has(entranceRoom.id)) {
        const coordinate = {
          worldX: entranceCoordinate.worldX,
          worldY: entranceCoordinate.worldY,
          source: 'instance-entry' as const,
        };
        coordinates.set(entranceRoom.id, coordinate);
        occupied.add(coordinateKey({ x: coordinate.worldX, y: coordinate.worldY }));
      }
      continue;
    }

    if (!plan?.globalBounds) continue;

    const derivedRooms = worldRooms.filter(room => !coordinates.has(room.id));
    if (derivedRooms.length === 0) continue;

    const roomById = new Map(derivedRooms.map(room => [room.id, room]));
    const relativeByRoom = buildExitGraphRelativeCoordinates(derivedRooms, roomById);
    const minX = Math.min(...[...relativeByRoom.values()].map(coord => coord.x));
    const minY = Math.min(...[...relativeByRoom.values()].map(coord => coord.y));

    const plannedCoordinates = derivedRooms
      .map(room => {
        const relative = relativeByRoom.get(room.id);
        if (!relative) return null;
        return {
          room,
          coordinate: {
            x: plan.globalBounds!.minX + relative.x - minX,
            y: plan.globalBounds!.minY + relative.y - minY,
          },
        };
      })
      .filter((entry): entry is { room: RoomDef; coordinate: RelativeCoordinate } => Boolean(entry));
    const offset = findAvailableGroupOffset(
      plannedCoordinates.map(entry => entry.coordinate),
      occupied,
      zones[zone.id].rooms.length + 48,
    );

    for (const entry of plannedCoordinates) {
      const coordinate = {
        x: entry.coordinate.x + offset.x,
        y: entry.coordinate.y + offset.y,
      };
      occupied.add(coordinateKey(coordinate));
      coordinates.set(entry.room.id, {
        worldX: coordinate.x,
        worldY: coordinate.y,
        source: 'derived',
      });
    }
  }

  return coordinates;
}

function buildExitGraphRelativeCoordinates(
  rooms: RoomDef[],
  roomById: Map<string, RoomDef>,
): Map<string, RelativeCoordinate> {
  const coordinates = new Map<string, RelativeCoordinate>();
  const occupied = new Set<string>();
  let nextComponentX = 0;

  for (const startRoom of rooms) {
    if (coordinates.has(startRoom.id)) continue;

    coordinates.set(startRoom.id, { x: nextComponentX, y: 0 });
    occupied.add(coordinateKey({ x: nextComponentX, y: 0 }));
    const queue = [startRoom];

    for (let index = 0; index < queue.length; index++) {
      const room = queue[index];
      const base = coordinates.get(room.id);
      if (!base) continue;

      for (const exit of room.exits) {
        if (exit.edgeKind && exit.edgeKind !== 'normal') continue;
        const delta = CARDINAL_DELTAS[exit.direction];
        if (!delta) continue;
        const target = roomById.get(exit.targetRoomId);
        if (!target || coordinates.has(target.id)) continue;

        const nextCoordinate = findAvailableRelativeCoordinate({
          x: base.x + delta.x,
          y: base.y + delta.y,
        }, occupied, rooms.length + 8);
        coordinates.set(target.id, nextCoordinate);
        occupied.add(coordinateKey(nextCoordinate));
        queue.push(target);
      }
    }

    const componentCoords = [...coordinates.values()];
    nextComponentX = Math.max(...componentCoords.map(coord => coord.x)) + 3;
  }

  return coordinates;
}

function findAvailableRelativeCoordinate(
  preferred: RelativeCoordinate,
  occupied: Set<string>,
  maxRadius: number,
): RelativeCoordinate {
  if (!occupied.has(coordinateKey(preferred))) return preferred;

  for (let radius = 1; radius <= maxRadius; radius++) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        if (Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
        const candidate = { x: preferred.x + dx, y: preferred.y + dy };
        if (!occupied.has(coordinateKey(candidate))) return candidate;
      }
    }
  }

  return { x: preferred.x + maxRadius + 1, y: preferred.y };
}

function findAvailableGroupOffset(
  coordinates: RelativeCoordinate[],
  occupied: Set<string>,
  maxRadius: number,
): RelativeCoordinate {
  if (!groupHasCollision(coordinates, occupied, { x: 0, y: 0 })) return { x: 0, y: 0 };

  for (let radius = 1; radius <= maxRadius; radius++) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        if (Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
        const offset = { x: dx, y: dy };
        if (!groupHasCollision(coordinates, occupied, offset)) return offset;
      }
    }
  }

  return { x: maxRadius + 1, y: 0 };
}

function groupHasCollision(
  coordinates: RelativeCoordinate[],
  occupied: Set<string>,
  offset: RelativeCoordinate,
): boolean {
  const seen = new Set<string>();
  for (const coordinate of coordinates) {
    const key = coordinateKey({
      x: coordinate.x + offset.x,
      y: coordinate.y + offset.y,
    });
    if (seen.has(key) || occupied.has(key)) return true;
    seen.add(key);
  }
  return false;
}

function coordinateKey(coordinate: RelativeCoordinate): string {
  return `${coordinate.x},${coordinate.y}`;
}
