// 房間定義 - 所有區域與房間資料

import type { Direction, RoomDef, ZoneDef } from '@game/shared';

const RESOURCE_NODE_ROOM_COUNT = 6;
const RESOURCE_NODE_ROOM_SUFFIXES = [
  'entry_claim',
  'vein_path',
  'herb_shelf',
  'water_pocket',
  'beast_scrape',
  'relic_pit',
];

function resourceNodeRoomIds(zoneId: string): string[] {
  return RESOURCE_NODE_ROOM_SUFFIXES.map(suffix => `${zoneId}_${suffix}`);
}

// ============================================================
//  區域定義
// ============================================================

export const ZONES: Record<string, ZoneDef> = {
  starter_village: {
    id: 'starter_village',
    name: '新手村',
    description: '一座寧靜的小村莊，是所有冒險者踏上旅途的起點。村子雖小，卻五臟俱全。',
    levelRange: [1, 5],
    type: 'town',
    region: 'central',
    tags: ['safe', 'newbie', 'quest_hub', 'trade_hub', 'portal_hub', 'class_hub'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none'],
    portal: { id: 'portal_starter_village', name: '新手村傳送陣', cost: 0, network: 'public', unlockByDefault: true },
    rooms: [
      'village_square', 'adventurer_guild', 'weapon_shop',
      'potion_shop', 'village_gate', 'training_ground',
      'starter_village_inn', 'starter_village_storehouse', 'starter_village_chapel',
      'starter_village_portal_shrine', 'starter_village_market_lane', 'starter_village_crafting_shed',
      'starter_village_notice_corner', 'starter_village_well_path', 'starter_village_old_library',
      'starter_village_river_stairs', 'starter_village_guard_post', 'starter_village_stable_yard',
      'starter_village_hidden_cellar', 'starter_village_rooftop_walk',
    ],
  },
  plains: {
    id: 'plains',
    name: '翠綠平原',
    description: '村莊外延伸的廣袤草原，微風拂過時能看見金色的麥浪。偶有野獸出沒。',
    levelRange: [5, 10],
    type: 'wilds',
    region: 'central',
    tags: ['newbie', 'high_density_spawns', 'gathering'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 1,
    recommendedPartySize: [1, 2],
    primaryElements: ['none', 'nature'],
    rooms: [
      'plains_entrance', 'grass_path', 'windmill_farm',
      'crossroads', 'old_well',
      'sunflower_field', 'hunter_lodge', 'abandoned_minecart',
      'riverside_fishing', 'windmill_interior',
      'plains_hare_burrows', 'plains_wolf_tracks', 'plains_bandit_hideout',
      'plains_moonlit_copse', 'plains_herb_slope', 'plains_shepherd_camp',
      'plains_broken_bridge', 'plains_stone_circle', 'plains_watch_mound',
      'plains_alpha_den',
    ],
  },
  dark_forest: {
    id: 'dark_forest',
    name: '暗影森林',
    description: '古老的森林，陽光幾乎無法穿透茂密的樹冠。傳說深處藏著精靈的遺跡。',
    levelRange: [10, 20],
    type: 'wilds',
    region: 'central',
    tags: ['high_density_spawns', 'elite_patrols', 'gathering'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 3,
    recommendedPartySize: [1, 3],
    primaryElements: ['dark', 'nature'],
    rooms: [
      'forest_entrance', 'dense_trail', 'mushroom_swamp',
      'ancient_treehouse', 'deep_forest', 'elf_ruins',
      'firefly_trail', 'deep_poison_swamp', 'elf_altar',
      'withered_forest', 'dark_treehollow',
      'dark_forest_spider_web', 'dark_forest_raven_perch', 'dark_forest_root_bridge',
      'dark_forest_witch_hut', 'dark_forest_moonwell', 'dark_forest_hunter_blind',
      'dark_forest_bramble_maze', 'dark_forest_shadow_clearing', 'dark_forest_elder_grove',
    ],
  },
  crystal_cave: {
    id: 'crystal_cave',
    name: '水晶洞窟',
    description: '地底深處的洞窟，四壁鑲嵌著發光的水晶。空氣中充滿神秘的魔力。',
    levelRange: [20, 30],
    type: 'resource',
    region: 'underground',
    tags: ['mining', 'party', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 4,
    recommendedPartySize: [2, 4],
    primaryElements: ['ice', 'dark'],
    rooms: [
      'cave_entrance', 'luminous_tunnel', 'crystal_hall',
      'underground_river', 'mine_depths',
      'amethyst_corridor', 'jade_pool', 'diamond_chamber',
      'underground_waterfall', 'ancient_altar',
      'crystal_cave_echo_chasm', 'crystal_cave_miner_camp', 'crystal_cave_singing_crystals',
      'crystal_cave_glass_bridge', 'crystal_cave_lizard_nest', 'crystal_cave_mirror_maze',
      'crystal_cave_golem_forge', 'crystal_cave_submerged_vault', 'crystal_cave_prism_gate',
      'crystal_cave_dragon_roost',
    ],
  },
  lakeside_town: {
    id: 'lakeside_town',
    name: '湖畔城鎮',
    description: '建於碧藍湖畔的繁榮城鎮，是冒險者進階轉職與挑戰高階內容的據點。',
    levelRange: [10, 50],
    type: 'town',
    region: 'east',
    tags: ['safe', 'quest_hub', 'trade_hub', 'portal_hub', 'class_hub', 'dungeon_hub'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none', 'light'],
    portal: { id: 'portal_lakeside_town', name: '湖畔城鎮傳送陣', cost: 25, network: 'public' },
    rooms: [
      'town_gate', 'market_street', 'town_plaza',
      'class_change_hall', 'arena_entrance',
      'tavern', 'auction_house', 'guild_hall', 'town_library', 'prison',
      'lakeside_inn', 'lakeside_bank', 'lakeside_temple', 'lakeside_portal_square',
      'lakeside_blacksmith', 'lakeside_tailor', 'lakeside_warehouse',
      'lakeside_fish_market', 'lakeside_courthouse', 'lakeside_hidden_canal',
    ],
  },
  starter_village_ext: {
    id: 'starter_village_ext',
    name: '新手村外圍',
    description: '新手村周邊的鄉野地帶，有後山、農田和小溪。雖然怪物不強，但對初出茅廬的冒險者來說仍需小心。',
    levelRange: [1, 8],
    type: 'wilds',
    region: 'central',
    tags: ['newbie', 'gathering', 'fishing', 'high_density_spawns'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 1,
    recommendedPartySize: [1, 2],
    primaryElements: ['none', 'nature', 'dark'],
    rooms: [
      'village_backhill', 'village_creek', 'village_farmland', 'village_orchard',
      'graveyard_entrance', 'graveyard_depths', 'abandoned_cottage', 'village_outskirts', 'watchtower',
      'starter_ext_old_mill_path', 'starter_ext_beehive_grove', 'starter_ext_herb_garden',
      'starter_ext_frog_pond', 'starter_ext_training_clearing', 'starter_ext_bandit_footpath',
      'starter_ext_willow_shrine', 'starter_ext_root_cellar', 'starter_ext_charcoal_kiln',
      'starter_ext_ruined_bridge', 'starter_ext_hollow_stump',
    ],
  },
  eastern_coast: {
    id: 'eastern_coast',
    name: '東方海岸',
    description: '位於大陸東側的綿長海岸線，海風鹹溼，浪花拍打礁石。漁村、燈塔和海盜營地散落其間。',
    levelRange: [8, 15],
    type: 'wilds',
    region: 'east',
    tags: ['fishing', 'gathering', 'high_density_spawns'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 2,
    recommendedPartySize: [1, 3],
    primaryElements: ['nature', 'lightning', 'none'],
    rooms: [
      'coastal_boardwalk', 'sandy_beach', 'tidal_zone', 'sea_cave',
      'fishing_dock', 'lighthouse', 'coral_shallows', 'shipwreck',
      'cliff_path', 'pirate_camp', 'dark_reef', 'underwater_cave',
      'eastern_coast_tidepool_grotto', 'eastern_coast_seaweed_flats',
      'eastern_coast_smugglers_cove', 'eastern_coast_broken_pier',
      'eastern_coast_stormwatch_ledge', 'eastern_coast_pearl_bed',
      'eastern_coast_pirate_cache', 'eastern_coast_serpent_nest',
    ],
  },
  volcano_zone: {
    id: 'volcano_zone',
    name: '火山地帶',
    description: '大陸西南方的活火山區域，空氣中充滿硫磺的刺鼻氣味。岩漿河流淌其間，矮人族在此建立了鍛造重鎮。',
    levelRange: [15, 22],
    type: 'resource',
    region: 'south',
    tags: ['mining', 'crafting_hub', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 4,
    recommendedPartySize: [2, 4],
    primaryElements: ['fire', 'none'],
    rooms: [
      'volcano_base', 'lava_trail', 'sulfur_valley', 'volcano_crater',
      'magma_river', 'obsidian_cave', 'fire_temple_entrance',
      'dwarf_mine', 'forge_hall', 'volcano_summit',
      'volcano_ash_field', 'volcano_lava_bridge', 'volcano_steam_lift',
      'volcano_sulfur_springs', 'volcano_ember_barracks', 'volcano_crystal_vent',
      'volcano_obsidian_quarry', 'volcano_basalt_steps', 'volcano_forge_storage',
      'volcano_colossus_arena',
    ],
  },
  frozen_wastes: {
    id: 'frozen_wastes',
    name: '冰封雪原',
    description: '大陸北方的極寒之地，終年風雪不止。傳說在雪原的盡頭，有一座被冰封的古老城堡，冰龍在其中沉睡。',
    levelRange: [22, 30],
    type: 'wilds',
    region: 'north',
    tags: ['elite_patrols', 'world_boss', 'party'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 5,
    recommendedPartySize: [2, 4],
    primaryElements: ['ice', 'none'],
    rooms: [
      'snowfield_entrance', 'blizzard_path', 'glacier', 'frozen_lake',
      'mountain_camp', 'crystal_ice_cave', 'aurora_field',
      'wolf_den', 'ice_castle_gate', 'ice_throne',
      'frozen_wastes_snowdrift_pass', 'frozen_wastes_ice_fishing_hole',
      'frozen_wastes_frostpine_grove', 'frozen_wastes_abandoned_sledge',
      'frozen_wastes_glacier_crevasse', 'frozen_wastes_runestone_circle',
      'frozen_wastes_yeti_cairn', 'frozen_wastes_frozen_watchpost',
      'frozen_wastes_crystal_spire', 'frozen_wastes_dragon_breath_rift',
    ],
  },
  demon_territory: {
    id: 'demon_territory',
    name: '魔族領地',
    description: '位於冰封雪原彼端的荒蕪之地，空氣中瀰漫著硫磺與鮮血的氣息。魔族在此建立了黑暗要塞，統治著這片被詛咒的土地。',
    levelRange: [30, 40],
    type: 'pvp',
    region: 'north',
    tags: ['pvp', 'elite_patrols', 'world_boss', 'party'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'fire'],
    rooms: [
      'demon_border', 'scorched_plains', 'demon_village', 'blood_river',
      'dark_fortress_gate', 'torture_chamber', 'demon_barracks',
      'summoning_circle', 'demon_throne', 'demon_treasury',
      'demon_ash_watch', 'demon_bone_pits', 'demon_shadow_market',
      'demon_lava_sewer', 'demon_sigil_tower', 'demon_chain_yard',
      'demon_war_forge', 'demon_hellhound_kennel', 'demon_cursed_shrine',
      'demon_lord_antechamber',
    ],
  },
  dragon_valley: {
    id: 'dragon_valley',
    name: '龍谷',
    description: '傳說中龍族棲息的神秘山谷，雲霧繚繞的峰巒之間迴盪著遠古巨獸的咆哮。只有最強大的冒險者才敢踏入這片禁地。',
    levelRange: [40, 50],
    type: 'endgame',
    region: 'west',
    tags: ['party', 'elite_patrols', 'world_boss', 'endgame'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 8,
    recommendedPartySize: [3, 4],
    primaryElements: ['fire', 'lightning', 'ice'],
    rooms: [
      'dragon_valley_entrance', 'dragon_nest_path', 'wyvern_cliff',
      'dragon_bone_field', 'ancient_dragon_lair', 'dragon_hoard',
      'sky_bridge', 'storm_peak', 'elder_dragon_sanctum', 'dragon_egg_chamber',
      'dragon_wind_roost', 'dragon_scale_spring', 'dragon_claw_pass',
      'dragon_fireglass_terrace', 'dragon_thunder_nest', 'dragon_oracle_perch',
      'dragon_molten_aerie', 'dragon_scale_forge', 'dragon_skywarden_camp',
      'dragon_starfall_crater',
    ],
  },
  abyss_rift: {
    id: 'abyss_rift',
    name: '深淵裂隙',
    description: '大地上的一道深不見底的裂縫，通往異次元的虛空。時間和空間在此扭曲，混沌的力量不斷從裂隙中湧出。',
    levelRange: [50, 55],
    type: 'endgame',
    region: 'abyss',
    tags: ['party', 'elite_patrols', 'world_boss', 'endgame'],
    pvpMode: 'faction',
    deathPenalty: 'gold',
    dangerLevel: 9,
    recommendedPartySize: [3, 4],
    primaryElements: ['dark', 'lightning'],
    rooms: [
      'abyss_entrance', 'void_corridor', 'shadow_realm',
      'chaos_bridge', 'nightmare_garden', 'abyss_core',
      'time_distortion', 'abyss_lord_chamber',
      'abyss_anchor_steps', 'void_mirror_lake', 'shadow_archive',
      'chaos_observatory', 'nightmare_orchard', 'time_splinter_vault',
      'gravity_well', 'memory_maze', 'rift_forge', 'echo_court',
      'abyssal_beacon', 'sealbreak_spire',
    ],
  },
  celestial_ruins: {
    id: 'celestial_ruins',
    name: '天界遺跡',
    description: '遠古諸神殞落後遺留在凡間的天界殘骸，星光與神聖之力交織其中。傳說戰神沉睡於最深處，等待著最強勇者的挑戰。',
    levelRange: [55, 60],
    type: 'endgame',
    region: 'celestial',
    tags: ['party', 'elite_patrols', 'world_boss', 'endgame'],
    pvpMode: 'faction',
    deathPenalty: 'durability',
    dangerLevel: 10,
    recommendedPartySize: [3, 4],
    primaryElements: ['light', 'dark'],
    rooms: [
      'celestial_gate', 'starlight_path', 'angel_garden',
      'divine_library', 'judgment_hall', 'celestial_throne_room',
      'eternal_sanctuary', 'god_chamber',
      'celestial_starfall_plaza', 'celestial_broken_colonnade',
      'celestial_scriptorium', 'celestial_lumen_archive',
      'celestial_fountain_of_oaths', 'celestial_seraph_roost',
      'celestial_penitent_steps', 'celestial_reliquary',
      'celestial_sundial_court', 'celestial_armory_of_dawn',
      'celestial_astral_observatory', 'celestial_final_seal',
    ],
  },
  old_farmland: {
    id: 'old_farmland',
    name: '老舊農場',
    description: '荒廢多年的農場仍有魔化作物生長，田壟間能聽見細碎的啃咬聲。',
    levelRange: [3, 8],
    type: 'wilds',
    region: 'central',
    tags: ['newbie', 'gathering', 'high_density_spawns'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 1,
    recommendedPartySize: [1, 2],
    primaryElements: ['nature', 'none'],
    rooms: [
      'old_farmland_crossroads', 'old_farmland_overgrown_field',
      'old_farmland_rat_ditch', 'old_farmland_scarecrow_watch',
      'old_farmland_collapsed_barn', 'old_farmland_well',
      'old_farmland_pumpkin_patch', 'old_farmland_mildew_orchard',
      'old_farmland_granary', 'old_farmland_irrigation_channel',
      'old_farmland_abandoned_farmhouse', 'old_farmland_beehive_rows',
      'old_farmland_toolshed', 'old_farmland_moonlit_pasture',
      'old_farmland_root_cellar', 'old_farmland_chicken_coop',
      'old_farmland_windbreak_trees', 'old_farmland_stone_marker',
      'old_farmland_harvest_circle', 'old_farmland_cart_shortcut',
    ],
  },
  whispering_valley: {
    id: 'whispering_valley',
    name: '低語溪谷',
    description: '溪水穿過狹長山谷，風聲像是在岩壁間低語，草藥與水生魔物都很常見。',
    levelRange: [5, 12],
    type: 'wilds',
    region: 'central',
    tags: ['fishing', 'gathering', 'newbie'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 2,
    recommendedPartySize: [1, 2],
    primaryElements: ['nature', 'ice'],
    rooms: [
      'whispering_valley_entrance', 'whispering_valley_reed_bank',
      'whispering_valley_clear_stream', 'whispering_valley_mossy_footbridge',
      'whispering_valley_herb_slope', 'whispering_valley_fishing_bend',
      'whispering_valley_echo_rocks', 'whispering_valley_willow_camp',
      'whispering_valley_cold_spring', 'whispering_valley_spider_grotto',
      'whispering_valley_fallen_log', 'whispering_valley_mist_pool',
      'whispering_valley_old_shrine', 'whispering_valley_ice_fern_patch',
      'whispering_valley_wolf_den', 'whispering_valley_waterfall_base',
      'whispering_valley_hidden_cascade', 'whispering_valley_ranger_post',
      'whispering_valley_stone_weir', 'whispering_valley_whispering_rift',
    ],
  },
  abandoned_mines: {
    id: 'abandoned_mines',
    name: '廢棄礦坑',
    description: '坍塌的礦道深處仍有礦車聲回響，亡魂與土元素守著未採盡的礦脈。',
    levelRange: [10, 18],
    type: 'resource',
    region: 'underground',
    tags: ['mining', 'high_density_spawns', 'party'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 3,
    recommendedPartySize: [1, 3],
    primaryElements: ['none', 'dark'],
    rooms: [
      'abandoned_mines_entry_claim', 'abandoned_mines_vein_path',
      'abandoned_mines_herb_shelf', 'abandoned_mines_water_pocket',
      'abandoned_mines_beast_scrape', 'abandoned_mines_relic_pit',
      'abandoned_mines_lift_station', 'abandoned_mines_cart_yard',
      'abandoned_mines_timber_gallery', 'abandoned_mines_echo_shaft',
      'abandoned_mines_crystal_pocket', 'abandoned_mines_bat_roost',
      'abandoned_mines_flooded_crosscut', 'abandoned_mines_foreman_office',
      'abandoned_mines_powder_room', 'abandoned_mines_sunken_rail',
      'abandoned_mines_old_smelter', 'abandoned_mines_gargoyle_niche',
      'abandoned_mines_deep_core', 'abandoned_mines_escape_adit',
    ],
  },
  wildgrass_hills: {
    id: 'wildgrass_hills',
    name: '荒草丘陵',
    description: '風勢強勁的丘陵長滿枯黃高草，半獸人斥候與風蛇在此巡弋。',
    levelRange: [12, 20],
    type: 'wilds',
    region: 'west',
    tags: ['high_density_spawns', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 3,
    recommendedPartySize: [1, 3],
    primaryElements: ['lightning', 'none'],
    rooms: [
      'wildgrass_hills_windbreak_gate', 'wildgrass_hills_lower_slope',
      'wildgrass_hills_tallgrass_lane', 'wildgrass_hills_boar_wallow',
      'wildgrass_hills_scout_ledge', 'wildgrass_hills_bent_oak',
      'wildgrass_hills_stream_cut', 'wildgrass_hills_hawk_perch',
      'wildgrass_hills_stone_ring', 'wildgrass_hills_orchard_ruin',
      'wildgrass_hills_goblin_blind', 'wildgrass_hills_thunder_mound',
      'wildgrass_hills_seed_gully', 'wildgrass_hills_watchfire_camp',
      'wildgrass_hills_windmill_shell', 'wildgrass_hills_hidden_spring',
      'wildgrass_hills_broken_totem', 'wildgrass_hills_chief_ridge',
      'wildgrass_hills_stormgrass_crown', 'wildgrass_hills_old_road_cut',
    ],
  },
  mist_harbor: {
    id: 'mist_harbor',
    name: '霧港',
    description: '常年被海霧籠罩的港鎮，船運、走私、海上副本與異地貿易在此交會。',
    levelRange: [20, 28],
    type: 'town',
    region: 'east',
    tags: ['safe', 'trade_hub', 'portal_hub', 'dungeon_hub', 'fishing'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none', 'ice'],
    portal: { id: 'portal_mist_harbor', name: '霧港傳送陣', cost: 45, network: 'public' },
    rooms: [
      'mist_harbor_fog_gate', 'mist_harbor_tide_plaza',
      'mist_harbor_portal_lantern', 'mist_harbor_customs_house',
      'mist_harbor_fish_market', 'mist_harbor_sailmakers_row',
      'mist_harbor_shipwright_yard', 'mist_harbor_anchor_inn',
      'mist_harbor_clinic_of_salt', 'mist_harbor_guild_quay',
      'mist_harbor_smugglers_alley', 'mist_harbor_captains_office',
      'mist_harbor_lighthouse_stairs', 'mist_harbor_fogwatch_lantern',
      'mist_harbor_ferry_pier', 'mist_harbor_warehouse_nine',
      'mist_harbor_tidepool_shrine', 'mist_harbor_chart_archive',
      'mist_harbor_sea_gate', 'mist_harbor_breakwater_end',
    ],
  },
  ancient_ruins: {
    id: 'ancient_ruins',
    name: '古代遺跡',
    description: '半埋於荒野中的古文明遺跡，機關、石像與失落銘文等待探索者解讀。',
    levelRange: [22, 30],
    type: 'dungeon_entrance',
    region: 'south',
    tags: ['party', 'elite_patrols', 'gathering'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 5,
    recommendedPartySize: [2, 4],
    primaryElements: ['none', 'light'],
    rooms: [
      'ancient_ruins_sunken_entrance', 'ancient_ruins_broken_causeway',
      'ancient_ruins_inscription_court', 'ancient_ruins_mosaic_hall',
      'ancient_ruins_statue_gallery', 'ancient_ruins_trap_corridor',
      'ancient_ruins_dust_archive', 'ancient_ruins_relic_cache',
      'ancient_ruins_cracked_obelisk', 'ancient_ruins_guardian_plinth',
      'ancient_ruins_reflection_pool', 'ancient_ruins_vine_choked_cloister',
      'ancient_ruins_survey_camp', 'ancient_ruins_sealed_stair',
      'ancient_ruins_sun_dial_patio', 'ancient_ruins_moon_gate',
      'ancient_ruins_echoing_crypt', 'ancient_ruins_construct_bay',
      'ancient_ruins_oracle_chamber', 'ancient_ruins_inner_sanctum',
    ],
  },
  marsh_of_mirrors: {
    id: 'marsh_of_mirrors',
    name: '鏡沼',
    description: '水面倒映出不存在的天空，毒霧、幻象與沼澤生物讓旅人迷失方向。',
    levelRange: [16, 24],
    type: 'wilds',
    region: 'south',
    tags: ['gathering', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 4,
    recommendedPartySize: [1, 3],
    primaryElements: ['nature', 'dark'],
    rooms: [
      'marsh_of_mirrors_reed_gate', 'marsh_of_mirrors_blackwater_path',
      'marsh_of_mirrors_silver_pool', 'marsh_of_mirrors_frog_mire',
      'marsh_of_mirrors_crooked_boardwalk', 'marsh_of_mirrors_mist_blind',
      'marsh_of_mirrors_mirror_pond', 'marsh_of_mirrors_sunken_willow',
      'marsh_of_mirrors_poison_bloom_bed', 'marsh_of_mirrors_spider_reeds',
      'marsh_of_mirrors_lost_cairn', 'marsh_of_mirrors_shattered_reflection',
      'marsh_of_mirrors_peat_islet', 'marsh_of_mirrors_dark_treant_grove',
      'marsh_of_mirrors_serpent_channel', 'marsh_of_mirrors_echo_fen',
      'marsh_of_mirrors_moonlit_causeway', 'marsh_of_mirrors_sinking_shrine',
      'marsh_of_mirrors_hag_lantern', 'marsh_of_mirrors_glasswater_core',
    ],
  },
  redrock_badlands: {
    id: 'redrock_badlands',
    name: '赤岩荒地',
    description: '紅色岩脊切開乾裂大地，盜匪營地與流放者據點散落在沙塵之中。',
    levelRange: [18, 28],
    type: 'pvp',
    region: 'west',
    tags: ['pvp', 'high_density_spawns', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 5,
    recommendedPartySize: [1, 4],
    primaryElements: ['fire', 'none'],
    rooms: [
      'redrock_badlands_dust_gate', 'redrock_badlands_rustwash_pass',
      'redrock_badlands_splinter_ridge', 'redrock_badlands_bandit_watch',
      'redrock_badlands_dry_gulch', 'redrock_badlands_cinder_spring',
      'redrock_badlands_outlaw_camp', 'redrock_badlands_bone_marker',
      'redrock_badlands_viper_flats', 'redrock_badlands_red_ore_cut',
      'redrock_badlands_burnt_wagon', 'redrock_badlands_echo_arch',
      'redrock_badlands_duel_stones', 'redrock_badlands_exile_den',
      'redrock_badlands_rock_giant_perch', 'redrock_badlands_flame_spirit_basin',
      'redrock_badlands_lava_worm_sink', 'redrock_badlands_ambush_canyon',
      'redrock_badlands_blackflag_lookout', 'redrock_badlands_scarlet_crater',
    ],
  },
  sunken_catacombs: {
    id: 'sunken_catacombs',
    name: '沉沒墓窟',
    description: '地下墓窟被黑水淹沒，石棺漂浮於潮汐間，不死者在水聲中甦醒。',
    levelRange: [24, 32],
    type: 'dungeon_entrance',
    region: 'underground',
    tags: ['party', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 5,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'ice'],
    rooms: [
      'sunken_catacombs_tide_stair', 'sunken_catacombs_flooded_narthex',
      'sunken_catacombs_ossuary_walk', 'sunken_catacombs_blackwater_channel',
      'sunken_catacombs_floating_coffins', 'sunken_catacombs_mourner_crypt',
      'sunken_catacombs_sluice_control', 'sunken_catacombs_bone_silt_basin',
      'sunken_catacombs_lantern_niche', 'sunken_catacombs_serpent_drain',
      'sunken_catacombs_drowned_altar', 'sunken_catacombs_gargoyle_lock',
      'sunken_catacombs_chapel_of_sighs', 'sunken_catacombs_chain_bridge',
      'sunken_catacombs_knight_vault', 'sunken_catacombs_deep_tidewell',
      'sunken_catacombs_sarcophagus_fleet', 'sunken_catacombs_echo_mortuary',
      'sunken_catacombs_crown_crypt', 'sunken_catacombs_abyssal_cistern',
    ],
  },
  thundersteppe: {
    id: 'thundersteppe',
    name: '雷鳴草原',
    description: '永不止息的雷雲壓在草原上方，游牧部族與雷獸共享這片危險牧地。',
    levelRange: [25, 35],
    type: 'wilds',
    region: 'west',
    tags: ['high_density_spawns', 'world_boss'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['lightning', 'none'],
    rooms: [
      'thundersteppe_rolling_gate', 'thundersteppe_stormgrass_track',
      'thundersteppe_herd_plain', 'thundersteppe_thunder_pool',
      'thundersteppe_eagle_roost', 'thundersteppe_nomad_camp',
      'thundersteppe_split_totem', 'thundersteppe_charged_bonefield',
      'thundersteppe_boar_run', 'thundersteppe_skyfire_mesa',
      'thundersteppe_wind_shrine', 'thundersteppe_lightning_rod_field',
      'thundersteppe_wolf_scarp', 'thundersteppe_rain_shadow_gully',
      'thundersteppe_drum_circle', 'thundersteppe_stormglass_outcrop',
      'thundersteppe_eagle_nest_peak', 'thundersteppe_thunderhoof_crossing',
      'thundersteppe_dragonstorm_eye', 'thundersteppe_worldboss_crater',
    ],
  },
  glass_dunes: {
    id: 'glass_dunes',
    name: '琉璃沙丘',
    description: '被古代魔法熔成玻璃的沙海反射烈日，沙下埋著失落王朝的殘骸。',
    levelRange: [28, 38],
    type: 'resource',
    region: 'south',
    tags: ['mining', 'gathering', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['fire', 'light'],
    rooms: [
      'glass_dunes_sun_gate', 'glass_dunes_mirror_slope',
      'glass_dunes_shard_claim', 'glass_dunes_singing_ridge',
      'glass_dunes_buried_caravan', 'glass_dunes_vein_gallery',
      'glass_dunes_herb_shelf', 'glass_dunes_water_pocket',
      'glass_dunes_beast_scrape', 'glass_dunes_relic_pit',
      'glass_dunes_mirage_bazaar', 'glass_dunes_prism_arch',
      'glass_dunes_obsidian_well', 'glass_dunes_glassstorm_basin',
      'glass_dunes_saltwind_cut', 'glass_dunes_crystal_golem_yard',
      'glass_dunes_solar_forge', 'glass_dunes_buried_palace_door',
      'glass_dunes_lost_dynasty_altar', 'glass_dunes_sunfire_crater',
    ],
  },
  underground_city: {
    id: 'underground_city',
    name: '地下城邦',
    description: '地底族群建立的階梯城邦，熔爐、暗河與黑市在巨大洞頂下運作。',
    levelRange: [30, 42],
    type: 'town',
    region: 'underground',
    tags: ['safe', 'trade_hub', 'crafting_hub', 'quest_hub'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none', 'fire'],
    rooms: [
      'underground_city_gate_lift', 'underground_city_arrival_plaza',
      'underground_city_portal_hall', 'underground_city_council_chamber',
      'underground_city_market_terrace', 'underground_city_black_market',
      'underground_city_scribe_archive', 'underground_city_craft_lane',
      'underground_city_guild_office', 'underground_city_forge_square',
      'underground_city_mender_shop', 'underground_city_inn_cavern',
      'underground_city_crucible_workshop', 'underground_city_steam_baths',
      'underground_city_gem_exchange', 'underground_city_guard_barracks',
      'underground_city_lamp_garden', 'underground_city_darkriver_quay',
      'underground_city_smuggler_dock', 'underground_city_lower_stairs',
      'underground_city_old_foundation', 'underground_city_lantern_bridge',
    ],
  },
  cursed_graveyard: {
    id: 'cursed_graveyard',
    name: '詛咒墓園',
    description: '古老墓園的鐘聲在無人敲響時迴盪，亡者與詛咒在黑霧中徘徊。',
    levelRange: [30, 40],
    type: 'wilds',
    region: 'north',
    tags: ['elite_patrols', 'party'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'light'],
    rooms: [
      'cursed_graveyard_iron_gate', 'cursed_graveyard_crow_path',
      'cursed_graveyard_bell_tower', 'cursed_graveyard_watch_lantern',
      'cursed_graveyard_sunken_graves', 'cursed_graveyard_mourner_steps',
      'cursed_graveyard_withered_yew', 'cursed_graveyard_ossuary_wall',
      'cursed_graveyard_gravedigger_shack', 'cursed_graveyard_moon_crypt',
      'cursed_graveyard_saint_statue', 'cursed_graveyard_coffin_lane',
      'cursed_graveyard_black_mist_pool', 'cursed_graveyard_candle_maze',
      'cursed_graveyard_cursed_fountain', 'cursed_graveyard_plague_pit',
      'cursed_graveyard_chapel_ruin', 'cursed_graveyard_gravekeeper_vault',
      'cursed_graveyard_litany_altar', 'cursed_graveyard_bone_bridge',
      'cursed_graveyard_lich_mausoleum',
    ],
  },
  storm_highlands: {
    id: 'storm_highlands',
    name: '風暴高原',
    description: '高原峭壁被暴風切割，古老風神祭壇與獅鷲巢穴隱於雲層之上。',
    levelRange: [32, 42],
    type: 'wilds',
    region: 'north',
    tags: ['elite_patrols', 'world_boss', 'party', 'portal_hub'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['lightning', 'none'],
    portal: { id: 'portal_storm_highlands', name: '風暴高原傳送陣', cost: 75, network: 'public' },
    rooms: [
      'storm_highlands_windrest_portal', 'storm_highlands_windrest_lane', 'storm_highlands_windrest_lodge',
      'storm_highlands_cliff_gate', 'storm_highlands_windcut_path',
      'storm_highlands_rain_shelf', 'storm_highlands_cloud_bridge',
      'storm_highlands_goat_ledge', 'storm_highlands_griffin_watch',
      'storm_highlands_thunder_pool', 'storm_highlands_basalt_spine',
      'storm_highlands_eagle_scarp', 'storm_highlands_old_windmill',
      'storm_highlands_screaming_gully', 'storm_highlands_nest_pillars',
      'storm_highlands_storm_altar', 'storm_highlands_lightning_tree',
      'storm_highlands_sky_cairns', 'storm_highlands_broken_beacon',
      'storm_highlands_eye_of_gale', 'storm_highlands_griffin_aerie',
      'storm_highlands_stormglass_mine', 'storm_highlands_worldboss_peak',
    ],
  },
  blackwood: {
    id: 'blackwood',
    name: '黑木林',
    description: '樹皮如炭的森林吸收火光，獵人說夜裡每棵樹都會換位置。',
    levelRange: [34, 44],
    type: 'wilds',
    region: 'west',
    tags: ['gathering', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'nature'],
    rooms: [
      'blackwood_charcoal_gate', 'blackwood_ash_path',
      'blackwood_hunter_marker', 'blackwood_raven_roost',
      'blackwood_moving_copse', 'blackwood_black_moss_bed',
      'blackwood_webbed_crossing', 'blackwood_root_maze',
      'blackwood_witch_hollow', 'blackwood_dark_elf_blind',
      'blackwood_sap_pool', 'blackwood_bone_chimes',
      'blackwood_moonless_glade', 'blackwood_poison_fern',
      'blackwood_burnt_totem', 'blackwood_wolf_den',
      'blackwood_hollow_log_bridge', 'blackwood_elder_ring',
      'blackwood_fallen_shrine', 'blackwood_heartwood_core',
    ],
  },
  lost_capital: {
    id: 'lost_capital',
    name: '失落王都',
    description: '被時間遺忘的王都仍維持著崩壞前一刻的姿態，王座上空無一人。',
    levelRange: [38, 48],
    type: 'dungeon_entrance',
    region: 'central',
    tags: ['party', 'elite_patrols', 'world_boss'],
    pvpMode: 'faction',
    deathPenalty: 'gold',
    dangerLevel: 8,
    recommendedPartySize: [3, 4],
    primaryElements: ['light', 'dark'],
    rooms: [
      'lost_capital_outer_gate', 'lost_capital_silent_avenue',
      'lost_capital_watch_tower', 'lost_capital_clock_square',
      'lost_capital_frozen_market', 'lost_capital_broken_fountain',
      'lost_capital_civic_archive', 'lost_capital_royal_canal',
      'lost_capital_statue_garden', 'lost_capital_judgment_hall',
      'lost_capital_mirror_court', 'lost_capital_ashen_barracks',
      'lost_capital_senate_ruin', 'lost_capital_coronation_stairs',
      'lost_capital_armory_vault', 'lost_capital_sun_chapel',
      'lost_capital_throne_anteroom', 'lost_capital_crown_crypt',
      'lost_capital_timefracture_gallery', 'lost_capital_empty_throne',
    ],
  },
  sky_isles: {
    id: 'sky_isles',
    name: '浮空群島',
    description: '漂浮於雲海上的破碎島嶼靠古代符文維持高度，墜落的石橋連接著未知神殿。',
    levelRange: [40, 50],
    type: 'endgame',
    region: 'celestial',
    tags: ['party', 'elite_patrols', 'world_boss'],
    pvpMode: 'faction',
    deathPenalty: 'durability',
    dangerLevel: 8,
    recommendedPartySize: [3, 4],
    primaryElements: ['lightning', 'light'],
    rooms: [
      'sky_isles_lift_dock', 'sky_isles_chain_bridge',
      'sky_isles_cloudwatch_post', 'sky_isles_gale_meadow',
      'sky_isles_rune_anchor', 'sky_isles_fallen_span',
      'sky_isles_sunlit_shrine', 'sky_isles_prism_causeway',
      'sky_isles_thunder_nest', 'sky_isles_oracle_steps',
      'sky_isles_sky_market_ruin', 'sky_isles_stormwell',
      'sky_isles_cloud_temple_gate', 'sky_isles_mirror_pool',
      'sky_isles_broken_obelisk', 'sky_isles_halo_courtyard',
      'sky_isles_starfall_ledge', 'sky_isles_ascendant_bridge',
      'sky_isles_worldboss_island', 'sky_isles_skycore_sanctum',
    ],
  },
  deepsea_temple: {
    id: 'deepsea_temple',
    name: '深海神殿',
    description: '沉入海底的神殿仍有藍色聖火燃燒，潮汐與古神低語守護著禁忌祭壇。',
    levelRange: [42, 52],
    type: 'endgame',
    region: 'east',
    tags: ['party', 'world_boss', 'fishing'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 8,
    recommendedPartySize: [3, 4],
    primaryElements: ['ice', 'dark'],
    rooms: [
      'deepsea_temple_tide_gate', 'deepsea_temple_bluefire_hall',
      'deepsea_temple_coral_watch', 'deepsea_temple_choir_reef',
      'deepsea_temple_shell_court', 'deepsea_temple_silt_stairs',
      'deepsea_temple_moonpool_nave', 'deepsea_temple_drowned_library',
      'deepsea_temple_darkcurrent_canal', 'deepsea_temple_pearl_oratory',
      'deepsea_temple_tideclock_room', 'deepsea_temple_bone_anchor',
      'deepsea_temple_statue_trench', 'deepsea_temple_abyssal_garden',
      'deepsea_temple_whalebone_bridge', 'deepsea_temple_forbidden_altar',
      'deepsea_temple_sleeping_oracle', 'deepsea_temple_tentacle_gate',
      'deepsea_temple_godwhisper_chamber', 'deepsea_temple_tidal_throne',
    ],
  },
  obsidian_depths: {
    id: 'obsidian_depths',
    name: '黑曜深層',
    description: '火山下方的黑曜岩脈像鏡子般反射岩漿，火元素與古代熔爐守衛在此沉睡。',
    levelRange: [45, 55],
    type: 'resource',
    region: 'underground',
    tags: ['mining', 'party', 'endgame'],
    pvpMode: 'open',
    deathPenalty: 'loot',
    dangerLevel: 9,
    recommendedPartySize: [3, 4],
    primaryElements: ['fire', 'dark'],
    rooms: [
      'obsidian_depths_mine_lift', 'obsidian_depths_glass_vein',
      'obsidian_depths_shard_claim', 'obsidian_depths_cooling_shelf',
      'obsidian_depths_lava_drip', 'obsidian_depths_mirror_chamber',
      'obsidian_depths_sulfur_pocket', 'obsidian_depths_old_furnace',
      'obsidian_depths_chain_gallery', 'obsidian_depths_magma_rill',
      'obsidian_depths_forge_guard_post', 'obsidian_depths_black_glass_bridge',
      'obsidian_depths_ember_basin', 'obsidian_depths_obsidian_market',
      'obsidian_depths_depths_shrine', 'obsidian_depths_lavafall_overlook',
      'obsidian_depths_core_drill', 'obsidian_depths_molten_lock',
      'obsidian_depths_heart_mirror', 'obsidian_depths_worldforge_core',
    ],
  },
  starfall_crater: {
    id: 'starfall_crater',
    name: '星隕坑',
    description: '隕星撞擊形成的巨大坑洞中散落星鐵，異界生物被星光吸引而來。',
    levelRange: [48, 58],
    type: 'resource',
    region: 'west',
    tags: ['mining', 'world_boss', 'endgame'],
    pvpMode: 'open',
    deathPenalty: 'loot',
    dangerLevel: 9,
    recommendedPartySize: [3, 4],
    primaryElements: ['light', 'lightning'],
    rooms: [
      'starfall_crater_rim_gate', 'starfall_crater_glass_slope',
      'starfall_crater_survey_camp', 'starfall_crater_magnetized_spire',
      'starfall_crater_stariron_field', 'starfall_crater_burning_scree',
      'starfall_crater_radiant_pool', 'starfall_crater_impact_trench',
      'starfall_crater_fallen_observatory', 'starfall_crater_silvergrass_ring',
      'starfall_crater_alien_eggs', 'starfall_crater_comet_shard_mine',
      'starfall_crater_gravity_well', 'starfall_crater_voidglass_arch',
      'starfall_crater_meteoric_forge', 'starfall_crater_star_map_ruin',
      'starfall_crater_worldscar_rift', 'starfall_crater_impact_core',
      'starfall_crater_worldboss_core', 'starfall_crater_outer_void',
    ],
  },
  time_ruins: {
    id: 'time_ruins',
    name: '時間廢墟',
    description: '破碎鐘塔與倒流河水共存於同一片廢墟，過去與未來的怪物同時出沒。',
    levelRange: [50, 60],
    type: 'endgame',
    region: 'abyss',
    tags: ['party', 'world_boss', 'endgame'],
    pvpMode: 'faction',
    deathPenalty: 'gold',
    dangerLevel: 10,
    recommendedPartySize: [3, 4],
    primaryElements: ['lightning', 'dark', 'light'],
    rooms: [
      'time_ruins_epoch_gate', 'time_ruins_broken_clockway',
      'time_ruins_reverse_riverbank', 'time_ruins_memory_reef',
      'time_ruins_hourglass_square', 'time_ruins_future_ash',
      'time_ruins_past_market', 'time_ruins_stalled_bell_tower',
      'time_ruins_ruined_observatory', 'time_ruins_sundial_court',
      'time_ruins_paradox_cloister', 'time_ruins_lightning_record',
      'time_ruins_split_statue', 'time_ruins_looping_bridge',
      'time_ruins_agefall_steps', 'time_ruins_timeline_archive',
      'time_ruins_clockheart_gate', 'time_ruins_causality_well',
      'time_ruins_worldboss_minute_zero', 'time_ruins_afterimage_void',
    ],
  },
  astral_wastes: {
    id: 'astral_wastes',
    name: '星界荒原',
    description: '漂浮在現實邊界的荒原沒有固定地平線，星砂與虛空裂縫吞吐著異界魔力。',
    levelRange: [52, 60],
    type: 'endgame',
    region: 'abyss',
    tags: ['party', 'elite_patrols', 'endgame'],
    pvpMode: 'faction',
    deathPenalty: 'gold',
    dangerLevel: 10,
    recommendedPartySize: [3, 4],
    primaryElements: ['dark', 'light'],
    rooms: [
      'astral_wastes_reality_gate', 'astral_wastes_starsand_track',
      'astral_wastes_anchor_stone', 'astral_wastes_comet_bones',
      'astral_wastes_bent_horizon', 'astral_wastes_lightless_dune',
      'astral_wastes_mirror_void', 'astral_wastes_floating_obelisk',
      'astral_wastes_echo_crater', 'astral_wastes_pale_shrine',
      'astral_wastes_gravity_sink', 'astral_wastes_shattered_moonroad',
      'astral_wastes_astral_lake', 'astral_wastes_void_rift',
      'astral_wastes_star_silt_basin', 'astral_wastes_lost_constellation',
      'astral_wastes_black_star_gate', 'astral_wastes_levitating_ruins',
      'astral_wastes_worldcore_waste', 'astral_wastes_outer_dark',
    ],
  },
  final_battleground: {
    id: 'final_battleground',
    name: '終焉戰場',
    description: '諸王與魔神最後交戰的荒原，殘破旗幟仍在沒有風的空氣中飄動。',
    levelRange: [55, 60],
    type: 'endgame',
    region: 'abyss',
    tags: ['pvp', 'kingdom_war', 'world_boss', 'endgame'],
    pvpMode: 'kingdom_war',
    deathPenalty: 'loot',
    dangerLevel: 10,
    recommendedPartySize: [3, 4],
    primaryElements: ['dark', 'fire', 'light'],
    rooms: [
      'final_battleground_war_gate', 'final_battleground_broken_banner_field',
      'final_battleground_king_cairn', 'final_battleground_oath_circle',
      'final_battleground_siege_trench', 'final_battleground_ember_mud',
      'final_battleground_sunless_chapel', 'final_battleground_blood_rain_basin',
      'final_battleground_war_machine_wreck', 'final_battleground_angel_fall',
      'final_battleground_throne_wreck', 'final_battleground_demon_scar',
      'final_battleground_light_sundered_bridge', 'final_battleground_black_flame_front',
      'final_battleground_last_command_post', 'final_battleground_worldsplit_crack',
      'final_battleground_crownless_field', 'final_battleground_godscar_core',
      'final_battleground_final_standard', 'final_battleground_silence_after_war',
    ],
  },
  moonlit_fen: {
    id: 'moonlit_fen',
    name: '月光濕地',
    description: '銀色月光常年照耀的濕地，水面生長著夜花，妖精與毒蟲共享棲地。',
    levelRange: [8, 16],
    type: 'wilds',
    region: 'east',
    tags: ['gathering', 'fishing', 'high_density_spawns'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 3,
    recommendedPartySize: [1, 3],
    primaryElements: ['nature', 'light'],
    rooms: [
      'moonlit_fen_reed_gate', 'moonlit_fen_moonflower_bank',
      'moonlit_fen_firefly_pool', 'moonlit_fen_willow_hush',
      'moonlit_fen_silver_mire', 'moonlit_fen_fishing_cut',
      'moonlit_fen_glimmer_ford', 'moonlit_fen_frog_choir',
      'moonlit_fen_mosquito_haze', 'moonlit_fen_night_bloom_grove',
      'moonlit_fen_lantern_moss', 'moonlit_fen_blackwater_run',
      'moonlit_fen_fae_ring', 'moonlit_fen_halfmoon_pond',
      'moonlit_fen_sunken_log_bridge', 'moonlit_fen_moonwell',
      'moonlit_fen_white_reed_maze', 'moonlit_fen_old_canoe_camp',
      'moonlit_fen_lunar_altar', 'moonlit_fen_dreamwater_core',
    ],
  },
  pilgrim_road: {
    id: 'pilgrim_road',
    name: '朝聖古道',
    description: '通往古老聖地的石板路斷續延伸，巡禮者、商隊與伏擊者都曾在此留下痕跡。',
    levelRange: [12, 22],
    type: 'wilds',
    region: 'central',
    tags: ['quest_hub', 'high_density_spawns'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 3,
    recommendedPartySize: [1, 3],
    primaryElements: ['light', 'none'],
    rooms: [
      'pilgrim_road_waygate', 'pilgrim_road_worn_flags',
      'pilgrim_road_milestone_cairn', 'pilgrim_road_bell_shrine',
      'pilgrim_road_caravan_rut', 'pilgrim_road_dry_well',
      'pilgrim_road_prayer_steps', 'pilgrim_road_abandoned_inn',
      'pilgrim_road_thorn_cut', 'pilgrim_road_saint_bridge',
      'pilgrim_road_ambush_bend', 'pilgrim_road_smuggler_cache',
      'pilgrim_road_white_marker', 'pilgrim_road_broken_causeway',
      'pilgrim_road_bandit_watch', 'pilgrim_road_old_cemetery_turn',
      'pilgrim_road_sunset_camp', 'pilgrim_road_sanctuary_gate',
      'pilgrim_road_final_marker', 'pilgrim_road_quiet_overlook',
    ],
  },
  ironwood_fort: {
    id: 'ironwood_fort',
    name: '鐵木要塞',
    description: '以鐵木築成的邊境要塞守著交通要道，傭兵與王國斥候在此集結。',
    levelRange: [18, 30],
    type: 'kingdom',
    region: 'central',
    tags: ['quest_hub', 'kingdom_war', 'portal_hub'],
    pvpMode: 'kingdom_war',
    deathPenalty: 'gold',
    dangerLevel: 4,
    recommendedPartySize: [1, 4],
    primaryElements: ['none', 'fire'],
    portal: { id: 'portal_ironwood_fort', name: '鐵木要塞傳送陣', cost: 50, network: 'kingdom' },
    rooms: [
      'ironwood_fort_portal_yard', 'ironwood_fort_outer_gate', 'ironwood_fort_muster_square', 'ironwood_fort_quartermaster_row', 'ironwood_fort_west_bastion', 'ironwood_fort_east_bastion', 'ironwood_fort_barracks_hall', 'ironwood_fort_forge_works', 'ironwood_fort_signal_tower', 'ironwood_fort_war_room', 'ironwood_fort_scout_roost', 'ironwood_fort_prison_block', 'ironwood_fort_supply_tunnel', 'ironwood_fort_old_cistern', 'ironwood_fort_ironwood_grove', 'ironwood_fort_hidden_sally', 'ironwood_fort_command_walk', 'ironwood_fort_oath_chapel', 'ironwood_fort_keep_gate', 'ironwood_fort_high_keep'
    ],
  },
  amber_forest: {
    id: 'amber_forest',
    name: '琥珀森林',
    description: '金色樹脂凝固在古木之間，許多昆蟲與小型魔物被封存成發光琥珀。',
    levelRange: [20, 32],
    type: 'resource',
    region: 'west',
    tags: ['gathering', 'elite_patrols', 'portal_hub'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 5,
    recommendedPartySize: [2, 4],
    primaryElements: ['nature', 'fire'],
    portal: { id: 'portal_amber_forest', name: '琥珀森林傳送陣', cost: 60, network: 'public' },
    rooms: [
      'amber_forest_north_portal', 'amber_forest_resin_supply', 'amber_forest_north_bridge',
      'amber_forest_entry_claim', 'amber_forest_vein_path', 'amber_forest_herb_shelf', 'amber_forest_water_pocket', 'amber_forest_beast_scrape', 'amber_forest_relic_pit', 'amber_forest_resin_gate', 'amber_forest_golden_canopy', 'amber_forest_wasp_nests', 'amber_forest_sapfall_gully', 'amber_forest_glassroot_bridge', 'amber_forest_suntrap_clearing', 'amber_forest_smoke_mycology', 'amber_forest_charcoal_stand', 'amber_forest_glowing_hollow', 'amber_forest_ember_beetle_mound', 'amber_forest_hunter_blind', 'amber_forest_petrified_bloom', 'amber_forest_elder_resin_tree', 'amber_forest_deep_amber_core'
    ],
  },
  silverpine_range: {
    id: 'silverpine_range',
    name: '銀松山脈',
    description: '銀葉松覆蓋的山脈在夜晚反射星光，山道危險但盛產稀有礦石與藥草。',
    levelRange: [24, 36],
    type: 'resource',
    region: 'north',
    tags: ['mining', 'gathering', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['ice', 'nature'],
    rooms: [
      'silverpine_range_entry_claim', 'silverpine_range_vein_path', 'silverpine_range_herb_shelf', 'silverpine_range_water_pocket', 'silverpine_range_beast_scrape', 'silverpine_range_relic_pit', 'silverpine_range_snowline_gate', 'silverpine_range_moonneedle_pines', 'silverpine_range_mica_switchback', 'silverpine_range_frost_herb_ledge', 'silverpine_range_goat_track', 'silverpine_range_crystal_scree', 'silverpine_range_windcut_bridge', 'silverpine_range_old_miner_camp', 'silverpine_range_iceglass_cavern', 'silverpine_range_eagle_spire', 'silverpine_range_silver_sap_grove', 'silverpine_range_avalanche_bowl', 'silverpine_range_starwatch_ridge', 'silverpine_range_high_mine_core'
    ],
  },
  saltwind_flats: {
    id: 'saltwind_flats',
    name: '鹽風灘',
    description: '退潮後露出的白色鹽灘閃閃發亮，鹽晶獸與海盜哨兵在薄霧中出沒。',
    levelRange: [14, 24],
    type: 'wilds',
    region: 'east',
    tags: ['fishing', 'high_density_spawns'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 4,
    recommendedPartySize: [1, 3],
    primaryElements: ['ice', 'none'],
    rooms: [
      'saltwind_flats_tide_gate', 'saltwind_flats_white_ripple', 'saltwind_flats_brine_pool', 'saltwind_flats_saltgrass_strip', 'saltwind_flats_driftwood_post', 'saltwind_flats_crab_march', 'saltwind_flats_mist_marker', 'saltwind_flats_bone_pier', 'saltwind_flats_pirate_blind', 'saltwind_flats_glass_salt_field', 'saltwind_flats_shallow_cut', 'saltwind_flats_fisher_cache', 'saltwind_flats_sea_serpent_track', 'saltwind_flats_blue_mud_shelf', 'saltwind_flats_wrecked_skiff', 'saltwind_flats_salt_crystal_nest', 'saltwind_flats_lowtide_causeway', 'saltwind_flats_fog_bell', 'saltwind_flats_tidewatch_ruin', 'saltwind_flats_deep_brine_eye'
    ],
  },
  thornmaze: {
    id: 'thornmaze',
    name: '荊棘迷宮',
    description: '會緩慢生長與閉合的荊棘牆形成天然迷宮，中央據說藏有古代德魯伊祭壇。',
    levelRange: [26, 38],
    type: 'wilds',
    region: 'south',
    tags: ['gathering', 'party', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['nature', 'dark'],
    rooms: [
      'thornmaze_gate_arch', 'thornmaze_outer_briar_lane', 'thornmaze_threefold_fork', 'thornmaze_redthorn_wall', 'thornmaze_moss_keyhole', 'thornmaze_whispering_hedge', 'thornmaze_poison_bloom_bed', 'thornmaze_blackroot_tunnel', 'thornmaze_wildrose_snare', 'thornmaze_druid_marker', 'thornmaze_turning_courtyard', 'thornmaze_spiderthorn_den', 'thornmaze_moonvine_bridge', 'thornmaze_bloodsap_pool', 'thornmaze_lost_hunter_camp', 'thornmaze_living_wall', 'thornmaze_silent_stag_glade', 'thornmaze_crooked_totem', 'thornmaze_inner_altar_ring', 'thornmaze_ancient_druid_altar'
    ],
  },
  ember_march: {
    id: 'ember_march',
    name: '餘燼邊境',
    description: '火山灰覆蓋的邊境地帶仍有餘燼在地縫裡燃燒，是火山與荒地之間的危險過渡區。',
    levelRange: [22, 34],
    type: 'wilds',
    region: 'south',
    tags: ['high_density_spawns', 'elite_patrols', 'portal_hub'],
    portal: { id: 'portal_ember_march', name: '餘燼邊境傳送陣', cost: 80, network: 'public' },
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['fire', 'none'],
    rooms: [
      'ember_march_south_portal', 'ember_march_south_supply', 'ember_march_south_shelter',
      'ember_march_ash_gate', 'ember_march_cinder_road', 'ember_march_smoke_trench', 'ember_march_charred_milestone', 'ember_march_burnt_watchpost', 'ember_march_lava_crack', 'ember_march_glass_ash_field', 'ember_march_war_camp_ruin', 'ember_march_slag_bridge', 'ember_march_firegrass_flat', 'ember_march_worm_burrow', 'ember_march_black_sand_basin', 'ember_march_ember_forge', 'ember_march_fallen_banner', 'ember_march_scorched_oasis', 'ember_march_bonekiln_pass', 'ember_march_molten_toll', 'ember_march_dragonprint_ridge', 'ember_march_border_keep_shell', 'ember_march_heartfire_breach'
    ],
  },
  reef_of_bones: {
    id: 'reef_of_bones',
    name: '白骨礁',
    description: '船骸與巨獸骨架形成的礁區在退潮時露出海面，不死海盜守著沉船財寶。',
    levelRange: [28, 40],
    type: 'dungeon_entrance',
    region: 'east',
    tags: ['fishing', 'party', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'ice'],
    rooms: [
      'reef_of_bones_tide_gate', 'reef_of_bones_rib_shoal', 'reef_of_bones_wreck_bow', 'reef_of_bones_skull_marker', 'reef_of_bones_splinter_deck', 'reef_of_bones_cold_tide_pool', 'reef_of_bones_bone_bridge', 'reef_of_bones_ghost_anchor', 'reef_of_bones_sunken_cabin', 'reef_of_bones_icekelp_tangle', 'reef_of_bones_drowned_hold', 'reef_of_bones_whalebone_arch', 'reef_of_bones_black_coral_cut', 'reef_of_bones_reefbell_post', 'reef_of_bones_captain_grave', 'reef_of_bones_frostwake_cave', 'reef_of_bones_shattered_mast', 'reef_of_bones_treasure_keel', 'reef_of_bones_lichlight_reef', 'reef_of_bones_drowned_vault'
    ],
  },
  sapphire_lake: {
    id: 'sapphire_lake',
    name: '藍寶湖',
    description: '清澈湖水深處映出藍色光芒，湖底礦脈與水精靈傳說吸引許多採集者。',
    levelRange: [15, 25],
    type: 'resource',
    region: 'east',
    tags: ['fishing', 'gathering', 'safe'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 2,
    recommendedPartySize: [1, 2],
    primaryElements: ['ice', 'nature'],
    rooms: [
      'sapphire_lake_entry_claim', 'sapphire_lake_vein_path', 'sapphire_lake_herb_shelf', 'sapphire_lake_water_pocket', 'sapphire_lake_beast_scrape', 'sapphire_lake_relic_pit', 'sapphire_lake_lantern_dock', 'sapphire_lake_mirror_shallows', 'sapphire_lake_blue_reed_bed', 'sapphire_lake_pebble_weir', 'sapphire_lake_glassfish_cove', 'sapphire_lake_sunken_step', 'sapphire_lake_mineral_spring', 'sapphire_lake_crystal_sandbar', 'sapphire_lake_lily_cache', 'sapphire_lake_calmwater_grotto', 'sapphire_lake_spirit_mirror', 'sapphire_lake_deep_vein_window', 'sapphire_lake_sapphire_lode', 'sapphire_lake_blueheart_sanctum'
    ],
  },
  kingsroad_market: {
    id: 'kingsroad_market',
    name: '王道市集',
    description: '王國大道交會處形成的大型露天市集，旅商、冒險者和傭兵在此交易情報與貨物。',
    levelRange: [1, 60],
    type: 'town',
    region: 'central',
    tags: ['safe', 'trade_hub', 'portal_hub', 'quest_hub'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none'],
    portal: { id: 'portal_kingsroad_market', name: '王道市集傳送陣', cost: 20, network: 'public' },
    rooms: [
      'kingsroad_market_portal_plaza', 'kingsroad_market_crossroad_stalls', 'kingsroad_market_grain_arcade', 'kingsroad_market_spice_awning', 'kingsroad_market_blacksmith_row', 'kingsroad_market_cloth_lane', 'kingsroad_market_adventurer_board', 'kingsroad_market_caravan_yard', 'kingsroad_market_coin_exchange', 'kingsroad_market_herbal_square', 'kingsroad_market_fishmonger_steps', 'kingsroad_market_scribe_corner', 'kingsroad_market_guard_post', 'kingsroad_market_well_court', 'kingsroad_market_auction_tent', 'kingsroad_market_tavern_front', 'kingsroad_market_pack_animal_ring', 'kingsroad_market_shrine_of_routes', 'kingsroad_market_back_alley_ledgers', 'kingsroad_market_high_balcony'
    ],
  },
  arena_quarter: {
    id: 'arena_quarter',
    name: '競技城區',
    description: '圍繞大型競技場建立的城區，酒館、下注所與訓練場日夜喧鬧。',
    levelRange: [10, 60],
    type: 'pvp',
    region: 'central',
    tags: ['pvp', 'safe', 'trade_hub'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 4],
    primaryElements: ['none'],
    rooms: [
      'arena_quarter_grand_gate', 'arena_quarter_ticket_colonnade', 'arena_quarter_betting_house', 'arena_quarter_weapon_check', 'arena_quarter_warmup_sand', 'arena_quarter_duel_ring_east', 'arena_quarter_duel_ring_west', 'arena_quarter_training_yard', 'arena_quarter_healer_bench', 'arena_quarter_armor_rack_lane', 'arena_quarter_champion_wall', 'arena_quarter_lower_stands', 'arena_quarter_upper_stands', 'arena_quarter_roar_tavern', 'arena_quarter_strategy_tables', 'arena_quarter_referee_box', 'arena_quarter_prize_counter', 'arena_quarter_private_boxes', 'arena_quarter_victory_arch', 'arena_quarter_center_arena'
    ],
  },
  royal_hunting_grounds: {
    id: 'royal_hunting_grounds',
    name: '王家獵場',
    description: '被王室圈定的廣大獵場棲息著珍稀野獸，狩獵許可與貴族委託讓此地爭端不斷。',
    levelRange: [18, 32],
    type: 'wilds',
    region: 'central',
    tags: ['high_density_spawns', 'gathering', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 5,
    recommendedPartySize: [1, 4],
    primaryElements: ['nature', 'none'],
    rooms: [
      'royal_hunting_grounds_horn_gate', 'royal_hunting_grounds_permit_lodge', 'royal_hunting_grounds_deer_run', 'royal_hunting_grounds_boar_wallows', 'royal_hunting_grounds_falcon_perch', 'royal_hunting_grounds_noble_blind', 'royal_hunting_grounds_silver_trail', 'royal_hunting_grounds_hounds_yard', 'royal_hunting_grounds_herb_copse', 'royal_hunting_grounds_stag_mirror', 'royal_hunting_grounds_old_oak_stand', 'royal_hunting_grounds_gamekeeper_camp', 'royal_hunting_grounds_arrow_range', 'royal_hunting_grounds_wolf_cut', 'royal_hunting_grounds_royal_marker', 'royal_hunting_grounds_hidden_poacher_path', 'royal_hunting_grounds_moonlit_clearing', 'royal_hunting_grounds_griffon_ledge', 'royal_hunting_grounds_trophy_pavilion', 'royal_hunting_grounds_white_stag_grove'
    ],
  },
  ashfall_monastery: {
    id: 'ashfall_monastery',
    name: '灰落修道院',
    description: '被火山灰覆蓋的修道院仍有鐘聲響起，墮落修士與聖光殘響同時盤踞其中。',
    levelRange: [34, 46],
    type: 'dungeon_entrance',
    region: 'south',
    tags: ['party', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['light', 'dark', 'fire'],
    rooms: [
      'ashfall_monastery_ash_gate', 'ashfall_monastery_bell_court', 'ashfall_monastery_scorched_cloister', 'ashfall_monastery_cinder_garden', 'ashfall_monastery_broken_font', 'ashfall_monastery_penitent_cells', 'ashfall_monastery_blackened_library', 'ashfall_monastery_ember_chapel', 'ashfall_monastery_fallen_refectory', 'ashfall_monastery_ash_scriptorium', 'ashfall_monastery_smoke_ambulatory', 'ashfall_monastery_crypt_stairs', 'ashfall_monastery_bone_ossuary', 'ashfall_monastery_censer_hall', 'ashfall_monastery_saint_mosaic', 'ashfall_monastery_firelit_apocrypha', 'ashfall_monastery_shadow_belfry', 'ashfall_monastery_reliquary_vault', 'ashfall_monastery_dual_altar', 'ashfall_monastery_ashen_sanctum'
    ],
  },
  frostbite_pass: {
    id: 'frostbite_pass',
    name: '霜咬隘口',
    description: '通往極北的山隘長年結冰，商隊常在暴風雪與雪怪襲擊中失蹤。',
    levelRange: [28, 38],
    type: 'wilds',
    region: 'north',
    tags: ['high_density_spawns', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['ice', 'none'],
    rooms: [
      'frostbite_pass_snow_gate', 'frostbite_pass_caravan_marker', 'frostbite_pass_icewind_cut', 'frostbite_pass_frozen_switchback', 'frostbite_pass_buried_wagon', 'frostbite_pass_blue_ice_bridge', 'frostbite_pass_yeti_scrape', 'frostbite_pass_whiteout_basin', 'frostbite_pass_coldfire_camp', 'frostbite_pass_glacier_mouth', 'frostbite_pass_sleet_watch', 'frostbite_pass_bone_sled_path', 'frostbite_pass_crystal_fir_grove', 'frostbite_pass_wind_howl_arch', 'frostbite_pass_lost_merchant_cache', 'frostbite_pass_frost_giant_steps', 'frostbite_pass_ice_cairn_field', 'frostbite_pass_northbound_ridge', 'frostbite_pass_dragon_breath_shelf', 'frostbite_pass_polar_seal_gate'
    ],
  },
  necropolis_gate: {
    id: 'necropolis_gate',
    name: '死都外門',
    description: '通往死者之城的巨大黑門半開著，門縫後傳來整齊的軍靴聲。',
    levelRange: [40, 52],
    type: 'endgame',
    region: 'abyss',
    tags: ['party', 'elite_patrols', 'world_boss'],
    pvpMode: 'faction',
    deathPenalty: 'gold',
    dangerLevel: 8,
    recommendedPartySize: [3, 4],
    primaryElements: ['dark'],
    rooms: [
      'necropolis_gate_black_approach', 'necropolis_gate_half_open_gate', 'necropolis_gate_bone_causeway', 'necropolis_gate_silent_muster', 'necropolis_gate_grave_banner_line', 'necropolis_gate_iron_ossuary', 'necropolis_gate_soul_well', 'necropolis_gate_mourner_steps', 'necropolis_gate_watchless_tower', 'necropolis_gate_crypt_market', 'necropolis_gate_war_drum_yard', 'necropolis_gate_charnel_bridge', 'necropolis_gate_wight_barracks', 'necropolis_gate_plague_censer', 'necropolis_gate_eclipsed_statue', 'necropolis_gate_death_roll_archive', 'necropolis_gate_void_crack', 'necropolis_gate_inner_portcullis', 'necropolis_gate_bone_throne_antechamber', 'necropolis_gate_dead_city_threshold'
    ],
  },
  sunspire: {
    id: 'sunspire',
    name: '日耀尖塔',
    description: '直入雲層的白石尖塔吸收日光，塔內守衛考驗著追求神聖力量的冒險者。',
    levelRange: [45, 58],
    type: 'endgame',
    region: 'celestial',
    tags: ['party', 'world_boss', 'endgame'],
    pvpMode: 'faction',
    deathPenalty: 'durability',
    dangerLevel: 9,
    recommendedPartySize: [3, 4],
    primaryElements: ['light', 'fire'],
    rooms: [
      'sunspire_white_stone_gate', 'sunspire_sunlit_stair', 'sunspire_mirror_plinth', 'sunspire_flameglass_walk', 'sunspire_radiant_lift', 'sunspire_solar_armory', 'sunspire_hymn_gallery', 'sunspire_burning_archive', 'sunspire_celestial_guard_hall', 'sunspire_trial_of_embers', 'sunspire_trial_of_dawn', 'sunspire_winged_balcony', 'sunspire_lens_chamber', 'sunspire_sunfire_choir', 'sunspire_ashen_shadow_edge', 'sunspire_gold_flare_bridge', 'sunspire_seraph_watch', 'sunspire_apex_antechamber', 'sunspire_war_god_sigil', 'sunspire_crown_of_day'
    ],
  },
  moonshadow_court: {
    id: 'moonshadow_court',
    name: '月影庭',
    description: '半位於現實、半位於夢境的妖精宮廷只在月影最深時現形。',
    levelRange: [38, 50],
    type: 'endgame',
    region: 'west',
    tags: ['party', 'gathering', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 8,
    recommendedPartySize: [2, 4],
    primaryElements: ['light', 'dark', 'nature'],
    rooms: [
      'moonshadow_court_moonlit_gate', 'moonshadow_court_dreamglass_foyer', 'moonshadow_court_silver_bramble_path', 'moonshadow_court_twilight_fountain', 'moonshadow_court_masked_ball_hall', 'moonshadow_court_moth_lantern_gallery', 'moonshadow_court_whispering_hedge', 'moonshadow_court_lunar_arboretum', 'moonshadow_court_oath_mirror_room', 'moonshadow_court_velvet_duel_court', 'moonshadow_court_fae_archive', 'moonshadow_court_nightbloom_garden', 'moonshadow_court_crescent_bridge', 'moonshadow_court_shadow_throne_steps', 'moonshadow_court_queen_silence_chapel', 'moonshadow_court_moonwell_balcony', 'moonshadow_court_dream_harvest_grove', 'moonshadow_court_glass_deer_paddock', 'moonshadow_court_eclipse_curtain', 'moonshadow_court_hidden_court_core'
    ],
  },
  machine_graveyard: {
    id: 'machine_graveyard',
    name: '機械墳場',
    description: '古代機械殘骸堆積如山，仍在運轉的核心偶爾喚醒失控守衛。',
    levelRange: [35, 48],
    type: 'resource',
    region: 'underground',
    tags: ['mining', 'party', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 8,
    recommendedPartySize: [2, 4],
    primaryElements: ['lightning', 'none'],
    rooms: [
      'machine_graveyard_entrance_crane', 'machine_graveyard_rusted_turnstile', 'machine_graveyard_scrap_canyon', 'machine_graveyard_sparking_rail', 'machine_graveyard_broken_foundry', 'machine_graveyard_gearbone_pit', 'machine_graveyard_copper_vein_shelf', 'machine_graveyard_oil_black_cistern', 'machine_graveyard_clockwork_nest', 'machine_graveyard_magnet_tower_base', 'machine_graveyard_core_wake_hall', 'machine_graveyard_wireweed_garden', 'machine_graveyard_battery_catacomb', 'machine_graveyard_servo_bone_yard', 'machine_graveyard_piston_shrine', 'machine_graveyard_signal_dish', 'machine_graveyard_deep_bore_lift', 'machine_graveyard_ancient_cpu_vault', 'machine_graveyard_runaway_guard_line', 'machine_graveyard_prime_reactor_shell'
    ],
  },
  bloodsalt_coast: {
    id: 'bloodsalt_coast',
    name: '血鹽海岸',
    description: '紅色海潮把鹽晶染成血色，海盜、魚人與血祭儀式讓此地惡名昭彰。',
    levelRange: [32, 44],
    type: 'pvp',
    region: 'east',
    tags: ['pvp', 'fishing', 'resource_war'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['dark', 'ice'],
    rooms: [
      'bloodsalt_coast_entrance_tidegate', 'bloodsalt_coast_red_salt_flats', 'bloodsalt_coast_wreckers_marker', 'bloodsalt_coast_bone_net_shoal', 'bloodsalt_coast_pirate_beacon', 'bloodsalt_coast_crimson_tide_pool', 'bloodsalt_coast_brine_cut_path', 'bloodsalt_coast_saltglass_cave', 'bloodsalt_coast_reef_fishing_post', 'bloodsalt_coast_blood_altar_ledge', 'bloodsalt_coast_smuggler_cove', 'bloodsalt_coast_drowned_watchtower', 'bloodsalt_coast_razor_clam_beds', 'bloodsalt_coast_sharktooth_pass', 'bloodsalt_coast_ice_dark_surge', 'bloodsalt_coast_warflag_dune', 'bloodsalt_coast_ghost_keel_grave', 'bloodsalt_coast_red_coral_labyrinth', 'bloodsalt_coast_tithe_of_blood_pier', 'bloodsalt_coast_ritual_reef_core'
    ],
  },
  emerald_canopy: {
    id: 'emerald_canopy',
    name: '翡翠樹冠',
    description: '高聳古木的樹冠層形成另一座森林，藤橋與鳥巢村落懸在半空。',
    levelRange: [25, 37],
    type: 'wilds',
    region: 'west',
    tags: ['gathering', 'elite_patrols', 'party'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['nature', 'lightning'],
    rooms: [
      'emerald_canopy_entrance_root_lift', 'emerald_canopy_vine_bridge_low', 'emerald_canopy_moss_rope_walk', 'emerald_canopy_raincatch_basin', 'emerald_canopy_birdfolk_roost', 'emerald_canopy_storm_bough', 'emerald_canopy_firefly_bower', 'emerald_canopy_orchid_cache', 'emerald_canopy_sapfall_gully', 'emerald_canopy_hawk_watch', 'emerald_canopy_greenheart_span', 'emerald_canopy_thorn_silk_nest', 'emerald_canopy_sunleaf_garden', 'emerald_canopy_elite_patrol_perch', 'emerald_canopy_lightning_bark_shrine', 'emerald_canopy_hollow_trunk_market', 'emerald_canopy_ancient_bee_hive', 'emerald_canopy_cloudroot_bridge', 'emerald_canopy_stag_crown_clearing', 'emerald_canopy_high_green_court'
    ],
  },
  hollow_mountain: {
    id: 'hollow_mountain',
    name: '空心山',
    description: '整座山內部被挖空成螺旋洞城，風從山腹穿過時發出低沉鳴響。',
    levelRange: [36, 50],
    type: 'resource',
    region: 'north',
    tags: ['mining', 'party', 'dungeon_hub'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 8,
    recommendedPartySize: [2, 4],
    primaryElements: ['none', 'ice', 'lightning'],
    rooms: [
      'hollow_mountain_entrance_wind_gate', 'hollow_mountain_spiral_mine_ramp', 'hollow_mountain_echo_market', 'hollow_mountain_frost_vein_wall', 'hollow_mountain_thunder_ore_bridge', 'hollow_mountain_hollow_bell_chamber', 'hollow_mountain_quarry_lift', 'hollow_mountain_black_granite_cut', 'hollow_mountain_windpipe_tunnel', 'hollow_mountain_crystal_scree', 'hollow_mountain_dungeon_hub_cavern', 'hollow_mountain_deep_mushroom_shelf', 'hollow_mountain_ice_chain_gallery', 'hollow_mountain_miner_oath_post', 'hollow_mountain_storm_capacitor', 'hollow_mountain_old_drill_nest', 'hollow_mountain_silver_breath_well', 'hollow_mountain_ancient_cart_maze', 'hollow_mountain_high_vault_stairs', 'hollow_mountain_mountain_heart_core'
    ],
  },
  serpent_delta: {
    id: 'serpent_delta',
    name: '蛇河三角洲',
    description: '蜿蜒河道分裂成無數支流，水道間的村落與蛇神祭壇互相依存。',
    levelRange: [18, 30],
    type: 'wilds',
    region: 'south',
    tags: ['fishing', 'gathering', 'high_density_spawns'],
    pvpMode: 'duel_only',
    deathPenalty: 'none',
    dangerLevel: 5,
    recommendedPartySize: [1, 3],
    primaryElements: ['nature', 'ice'],
    rooms: [
      'serpent_delta_entrance_ferry', 'serpent_delta_split_reed_bank', 'serpent_delta_mudfish_pool', 'serpent_delta_stilt_hamlet', 'serpent_delta_cold_bend', 'serpent_delta_scale_net_yard', 'serpent_delta_heron_marker', 'serpent_delta_green_herb_islet', 'serpent_delta_sunken_pirogue', 'serpent_delta_serpent_shrine_steps', 'serpent_delta_flooded_granary', 'serpent_delta_mangrove_maze', 'serpent_delta_ice_mist_channel', 'serpent_delta_egg_mound', 'serpent_delta_moonlit_fishing_post', 'serpent_delta_old_levy_causeway', 'serpent_delta_priest_mask_hut', 'serpent_delta_blue_lotus_marsh', 'serpent_delta_manymouth_confluence', 'serpent_delta_serpent_god_backwater'
    ],
  },
  kingdom_frontier: {
    id: 'kingdom_frontier',
    name: '王國邊境',
    description: '各王國勢力交錯的邊境地帶，哨塔、資源點與臨時營寨隨戰線變動。',
    levelRange: [25, 60],
    type: 'kingdom',
    region: 'central',
    tags: ['kingdom_war', 'resource_war', 'pvp', 'portal_hub'],
    pvpMode: 'kingdom_war',
    deathPenalty: 'gold',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['none', 'fire', 'dark'],
    portal: { id: 'portal_kingdom_frontier', name: '王國邊境傳送陣', cost: 90, network: 'kingdom' },
    rooms: [
      'kingdom_frontier_portal_muster', 'kingdom_frontier_border_road', 'kingdom_frontier_watchtower_west', 'kingdom_frontier_supply_camp', 'kingdom_frontier_battlefield_crossing', 'kingdom_frontier_watchtower_east', 'kingdom_frontier_lumber_claim', 'kingdom_frontier_iron_claim', 'kingdom_frontier_siege_yard', 'kingdom_frontier_banner_hill', 'kingdom_frontier_truce_tent', 'kingdom_frontier_burnt_farmstead', 'kingdom_frontier_darkwood_cut', 'kingdom_frontier_firebreak_ridge', 'kingdom_frontier_spyglass_ruin', 'kingdom_frontier_treasury_wagon', 'kingdom_frontier_prisoner_stockade', 'kingdom_frontier_redoubt_gate', 'kingdom_frontier_war_table_bunker', 'kingdom_frontier_command_front'
    ],
  },
};

const ZONE_DESCRIPTION_QUALITY_OVERRIDES: Record<string, string> = {
  starter_village: '新手村是世界中央的低等級安全聚落，廣場、旅店、商店、訓練場與傳送陣集中在短距離內，適合一到五級玩家熟悉移動、交易、技能與職業導引。村內沒有主動怪物，外側接往新手村外圍與翠綠平原，採集與任務線會把玩家帶向東側河階、南側村門與周邊農地。',
  plains: '翠綠平原位在新手村外圍與湖畔城鎮之間，是五到十級玩家的第一片公共野外地圖。草徑、風車農場、獵人小屋與狼跡丘連成開闊路網，常見野兔、野狼、盜賊與平原獸群，也有藥草、釣魚、低階礦物與訓練任務；北側回村，東南方向逐步接向湖畔與巡禮道路。',
  dark_forest: '暗影森林是十到二十級的陰影與自然混合區，密林、毒沼、蛛網密室、月井與精靈遺跡提供較高密度遭遇。主要敵人包含暗影狼、蜘蛛、樹精與森林異變體，材料以蛛絲、暗苔、樹脂與自然水晶為主；西側可回平原與村鎮路線，深處入口則適合改成副本或精英探索。',
  crystal_cave: '水晶洞窟是二十到三十級的地下資源與副本入口區，發光晶壁、地下河、礦工營、鏡面迷宮與棱鏡門讓隊伍在狹窄路線中推進。水晶蜥蜴、魔像、洞穴守衛與暗色晶核生物守著礦脈，主要產出水晶、迴音晶粉與折光材料；世界入口銜接湖畔與礦道，深層房間適合作為獨立 instance。',
  lakeside_town: '湖畔城鎮是十級以後的進階安全據點，城門、市集、職業大廳、競技入口、港埠與圖書館圍繞藍色湖岸展開。此區本身以服務、轉職、銀行、拍賣、修理與副本整隊為主，沒有常駐野外怪物；道路往西回平原，水路與東側道路接往海岸、霧港與高階城鎮任務線。',
  starter_village_ext: '新手村外圍是一到六級的鄉野緩衝帶，後山、舊農田、小溪、井道與村牆陰影把安全村落逐步過渡到野外。玩家會遇到史萊姆、野鼠、魔化作物與初階野獸，可採集低階藥草、木材、魚獲與農場材料；北側通回村內服務，南與東側接往翠綠平原與舊農場。',
  eastern_coast: '東部海岸是二十到三十五級的海風地帶，礁石、漁村、燈塔、潮洞、海盜營與白浪小路沿著大陸東側展開。魚人、海盜、海獸與潮汐元素常在退潮路線伏擊，產出魚鰭、貝殼、鹽晶、海草與航海任務物；西側連湖畔城鎮，南北沿岸可銜接霧港、鹽風灘與白骨礁。',
  volcano_zone: '火山地帶是三十五到五十級的火焰與鍛造高危區，硫磺谷、黑曜石採場、火晶噴氣口、矮人鍛爐與熔岩河形成高熱路線。火蜥蜴、火元素、熔岩蟲與古代爐衛守著礦脈，資源包含熔岩碎片、硫磺晶簇、黑曜玻板與火晶種；北側接荒地，地下深處連黑曜深層副本入口。',
  frozen_wastes: '冰封雪原是三十到四十五級的極寒野外區，雪原、冰河裂縫、哨塔、霜松林與古城外牆提供長距離探索。雪狼、冰元素、凍結守衛與冰龍眷族造成冰屬壓力，材料以冰晶、雪狼毛、霜松樹脂與極光符石為主；南側接銀松山脈與霜咬隘口，北面推向冰封城堡與高階副本。',
  demon_territory: '魔族領地是四十五到六十級的暗火前線，荒蕪熔土、黑暗要塞、血色祭壇與硫磺戰壕讓玩家面對高壓怪群。惡魔、魔化士兵、火暗元素與詛咒施法者是主要威脅，掉落魔血、惡魔角、封印碎片與暗屬裝備材料；南側與火山、深淵裂隙相互牽連，北側通往終局戰場。',
  dragon_valley: '龍谷是四十五到六十級的高階山谷與龍族棲地，雲霧峰道、龍骨平台、龍巢岩棚與古老祭台構成垂直探索線。幼龍、龍裔守衛、龍息元素與古龍殘影具有高生命與元素壓制，主要產出龍鱗、龍牙、龍筋與傳說武器核心；外圍接雪原與火山，核心巢穴適合作為隊伍副本。',
  abyss_rift: '深淵裂隙是五十到六十級的異界入口區，斷裂地表、漂浮石橋、扭曲空間與虛空祭壇讓路線不再像自然地形。異怪、惡魔、暗影元素與時間錯位生物會造成暗屬與混沌壓力，產出裂隙碎片、虛空核心與禁忌素材；世界入口應連到魔族領地與終局荒原，深處房間改為 instance 更合理。',
  celestial_ruins: '天界遺跡是五十到六十級的神聖與星光高階區，破碎雲橋、白石神殿、月井庭院與戰神殘座漂浮在現實邊界。天界守衛、構裝體、光環生物與星紋精英偏向光屬、護盾與審判技能，資源包含星砂、聖光碎片、月井材料與誓約裝備；入口連接天空、聖地與終局副本線。',
  old_farmland: '老舊農場是一到八級的低階污染農地，枯疫麥田、月牧草地、收成圓陣、農舍與糧倉把新手村外圍延伸成第一條支線。魔化作物、鼠群、稻草人與腐化牲畜威脅不高但密度高，產出枯疫麥稈、霉斑蘋果、月牧鈴與農舍鑰匙；西側回村外，東側接平原與溪谷。',
  whispering_valley: '低語溪谷是五到十二級的水道與草藥山谷，冷泉、石堰、冰蕨叢、回音岩群與舊神龕沿狹長溪線排列。水生魔物、風聲異常、低階精靈與巡林失蹤線索構成主要玩法，材料有低語蘆葦、冷泉露、冰蕨葉與回音石片；入口連新手外圍，出口可轉向廢礦與荒草丘陵。',
  abandoned_mines: '廢棄礦坑是八到十六級的早期地下區，坍塌支架、沉軌段、蝙蝠棲洞、工頭室與深部礦核讓玩家學會狹窄路線戰鬥。亡魂、土元素、蝙蝠與活動支木守著礦脈，資源包含失光礦塊、礦坑支木片、蝠糞硝鹽與安全燈零件；入口接低語溪谷與平原礦車道，深處可導向水晶洞窟。',
  wildgrass_hills: '荒草丘陵是十到十八級的風草高地，乾草坡、雷擊丘、野豬泥地、看火營與斷圖騰讓視野開闊但伏擊頻繁。半獸人斥候、風蛇、巨豬與哥布林旗號隊沿山脊巡弋，產出風暴草籽、切風羽、雷痕石與硬獠牙板；西側回平原，東側可接王道市集與雷鳴草原。',
  mist_harbor: '霧港是一到二十級的港鎮與航運服務區，燈塔、海關廳、魚市、渡船棧橋、九號倉與走私巷都被濃霧包住。此地以商人、渡船、走私任務、海圖與低階港務戰鬥為主，敵人多是碼頭盜賊與海霧怪影，材料有霧燈燈芯、潮玻璃與封印章；水路連東部海岸、鹽風灘與白骨礁。',
  ancient_ruins: '古代遺跡是十二到二十八級的考古與機關區，日晷露台、倒影水池、構裝迴廊、封印階梯與神諭室要求玩家辨識符文路線。石像、構裝體、遺跡守衛與光暗殘響保護銘文，產出日晷校準釘、月門陶板、構裝齒輪與光封塵；入口與荒野道路相接，深處可開啟神諭副本。',
  marsh_of_mirrors: '鏡沼是十八到三十二級的幻象濕地，倒影水面、毒霧蘆叢、半沉木橋與沼心祭壇讓方向感容易混亂。沼澤野獸、毒蟲、幻影水靈與迷失旅人殘影是主要遭遇，資源包含銀泥、水草、毒囊與反光飾材；北側接暗影森林與月光濕地，南側通往紅岩荒地和湖區。',
  redrock_badlands: '紅岩荒地是二十到三十五級的乾旱岩脊區，紅色峽谷、流放者營地、盜匪哨塔、砂塵路與破井構成開放戰場。盜匪、流放者、岩蜥、火沙元素與巡邏隊掉落紅岩礦、皮革、火砂與營地軍需；西側銜接鏡沼與平原道路，南側過渡到火山邊境與琉璃沙丘。',
  sunken_catacombs: '沉沒墓窟是二十二到三十六級的水淹亡靈副本區，黑水通道、漂浮石棺、王冠墓室與深淵蓄水池呈現封閉探索。骷髏、水鬼、怨靈與墓室騎士帶暗屬與潮濕環境壓力，掉落骨片、幽魂精華、黑銀碎片與亡靈徽記；入口應留在世界水岸，內部大多作為 instance。',
  thundersteppe: '雷鳴草原是二十四到四十級的風暴牧地，蓄雷草海、雷鷹巢峰、游牧營地、風祭小祠與世界王火坑連成高壓路線。雷獸、雷鷹、游牧叛兵與風暴元素偏向雷屬與高速突襲，產出蓄雷草、雷鷹電羽、雷熔玻片與避雷符；西側接荒草丘陵，東側通往風暴高原。',
  glass_dunes: '琉璃沙丘是二十八到四十二級的沙海與古王朝遺跡區，透明沙脊、黑曜井、稜鏡拱、失朝祭壇與埋宮門反射烈日。沙蜥、玻砂獸、晶魔像與海市幻影帶來火光與折射壓力，資源包含熔融玻砂、鏡砂甲片、黑曜井鹽與稜鏡透核；北側接紅岩荒地，西側接火山過渡地。',
  underground_city: '地下城邦是三十到四十五級的地底服務與黑市區，市場露臺、升降門、暗河碼頭、熔爐廣場與黑市暗巷在巨大洞頂下運作。此區有商人、工匠、暗河渡口與少量治安戰鬥，敵人以走私者、地底獸與失控機械為主，產出菌燈油、交易牌與熔爐券；礦坑、水晶洞與黑曜深層都可接入。',
  cursed_graveyard: '詛咒墓園是三十二到四十八級的亡靈野外區，無人鐘樓、沉墓地、黑霧池、破聖像與巫妖陵寢在黑霧裡串連。骸兵、怨靈、墓園守衛與巫妖僕從帶暗屬、恐懼與復甦壓力，掉落墓鐘舌片、骨片、黑霧殘渣與悼詞頁；道路連沉沒墓窟、死都門與聖光區域。',
  storm_highlands: '風暴高原是三十六到五十二級的高空山脊，斷烽臺、山羊岩階、風神祭壇、風暴玻礦脈與獅鷲王峰被暴風切割。高原北緣新增避風小村作為補給與傳送節點，讓玩家不必從遠方城鎮反覆穿越整片山路。獅鷲、風暴鳥、山羊巨獸與雷風元素會推拉玩家節奏，資源包含高原風暴羽、暴風山羊角、風暴玻礦與風壇殘鈴；西側接雷鳴草原，北側可通天空群島。',
  blackwood: '黑木林是三十八到五十四級的暗色森林，炭樹、織網岔口、毒蕨林、獵人刻痕與黑心木核讓火光都被樹皮吸走。黑木獵人、幽影蜘蛛、夜蕨毒物與樹影怪帶暗屬和毒性控制，產出黑木炭皮、幽影蛛絲、夜蕨毒液與獵人符；外圍接暗影森林，深處通往妖精與夢境相關區。',
  lost_capital: '失落王都是四十到五十八級的時間停滯城區，停鐘廣場、市政檔案館、雕像庭園、加冕階與空王座保留崩壞前一刻。石像鬼、王都守衛、時間殘影與議政怨靈使用光暗與時間壓力，產出時砂玻、白石像鬼眼、議政蠟版與加冕封印；道路接王國邊境與時間廢墟入口。',
  sky_isles: '浮空群島是四十二到六十級的天空探索區，符文錨臺、斷方尖碑、雲上草甸、雷鷹巢島與雲神殿由破碎雲橋相連。雷鷹、浮空守衛、天界構裝與高空元素擅長雷光和位移壓迫，資源包含浮空符文片、雲銀長羽、光環稜核與天空聖物；下方連風暴高原，上層接天界遺跡。',
  deepsea_temple: '深海神殿是四十二到五十二級的水下副本區，藍火珊瑚廊、深海神諭室、潮鐘機關、鯨骨聖壇與禁忌祭壇都被黑潮包圍。魚人祭司、潮汐守衛、古神低語與深海異怪造成冰暗與沉默壓力，掉落藍火珊瑚、深淵珍珠、潮鐘齒輪與禁壇封印；入口應由海岸或白骨礁進入 instance。',
  obsidian_depths: '黑曜深層是四十八到五十五級的火山地下副本區，黑玻鏈道、古代熔爐、核心鑽井、熔鎖門與黑曜心鏡反射岩漿光。熔爐守衛、火元素、黑曜構裝與惡魔殘火造成高熱與火暗混合威脅，資源包含黑玻鏈環、古爐餘燼、核心鑽頭與熔鎖印記；入口連火山地帶與地下城邦。',
  starfall_crater: '星隕坑是四十八到五十八級的隕星荒地，星鐵散地、磁化尖塔、彗片礦井、重力井與世界傷痕圍繞巨大撞擊坑。異界生物、磁化構裝、星光元素與世界王星核殘影帶雷光和重力壓力，產出星鐵核粒、輻光玻砂、磁化隕鐵、彗星碎片與重力透鏡；外緣接王國邊境與星界荒原。',
  time_ruins: '時間廢墟是五十到六十級的時序錯位副本區，沙漏廣場、停擺鐘塔、倒流河岸、悖論迴廊與因果井互相重疊。時間殘影、破鐘構裝、未來亡靈與悖論異怪會改變行動節奏，資源包含倒流沙漏砂、碎鐘齒輪、記憶礁珠與因果絲線；入口可由失落王都觸發，深層作為高階 instance。',
  astral_wastes: '星界荒原是五十二到六十級的現實邊界區，錨石丘、鏡面虛空、蒼白小祠、黑星門與荒原核心漂浮在沒有固定地平線的空間。異怪、虛空影、星砂元素與外層黑域生物造成暗屬與定位失衡，產出星界星砂、錨石碎片、虛玻鏡片、蒼白星遺物與黑星印記；外緣接星隕坑與終局戰場。',
  final_battleground: '終焉戰場是五十五到六十級的終局荒原，破旗原、王骨石堆、黑焰前線、墜天坑與神傷核心保留諸王與魔神最後交戰痕跡。惡魔軍、亡靈軍、墜天殘影與終局首領擁有火暗光混合壓力，材料包含破旗殘布、王骨誓片、黑焰餘燼與神傷血晶；入口連魔族領地、星界荒原與最終副本。',
  moonlit_fen: '月光濕地是十六到三十級的夜花沼地，銀色水面、妖精浮橋、夜花池、毒蟲巢與半夢祭盤都在月光下保持潮濕。妖精、毒蟲、水靈與沼澤獸以毒、幻象和自然控制干擾玩家，資源包含夜花、月露、毒囊與濕地草藥；道路連暗影森林、鏡沼與湖畔周邊。',
  pilgrim_road: '巡禮古道是十四到二十二級的聖地道路，白石路標、聖徒橋、斷石階、路邊小祠與終點聖碑串起商隊和信徒足跡。伏擊者、流浪信徒、光影殘響與道路野獸是主要敵人，資源包含白石灰粉、日路乾糧、聖地門印與旅人補給；西側接平原，東側通向日耀尖塔與聖地入口。',
  ironwood_fort: '鐵木要塞是十八到三十級的邊境軍事區，鐵木城牆、軍需行列、信號塔、補給隧道與高堡核心控制交通要道。王國斥候、傭兵、叛兵與失控構裝在城牆間衝突，資源包含鐵木板材、補給牌、斥候信管與鍛坊燼油；道路連王國邊境、市集與荒草丘陵。',
  amber_forest: '琥珀森林是二十到三十二級的金色樹脂林，北緣新闢傳送樹庭與樹脂補給棚，作為深入西側森林前的安全集結點。琥珀脈徑、玻璃根橋、封蠟蜂巢、煙菌坡與深琥珀核心充滿昆蟲聲。封蠟蟲、樹脂獸、自然守衛與煙菌怪以毒霧和纏繞牽制玩家，產出金脂塊、琥珀脈晶、封蠟蟲甲與煙脂孢子；外圍連黑木林、平原與銀松山麓。',
  silverpine_range: '銀松山脈是二十四到三十六級的寒冷礦山區，銀葉松林、霜草岩棚、冰玻洞、觀星脊與高山礦核沿山路升高。雪地野獸、冰元素、礦脈守衛與山賊會阻擋採集，資源包含銀松雲母、霜草束、冰玻礦、觀星銀礦與高山鎬頭；南側接平原與湖區，北側通霜咬隘口。',
  saltwind_flats: '鹽風灘是十四到二十四級的潮間帶，白色鹽灘、潮溝、鹽晶巢、薄霧哨站與半埋船架會隨潮汐改變可走路線。鹽晶獸、海盜哨兵、魚人與潮霧生物提供水與物理混合壓力，資源包含鹽晶、潮玻璃、海草與船骸材料；西側接霧港，東側連東部海岸與白骨礁。',
  thornmaze: '荊棘迷宮是二十八到四十二級的活體植物區，會閉合的刺牆、藤門、毒花圃、德魯伊祭壇與迷路空地使路線不穩。藤蔓怪、毒花、德魯伊殘影與林中野獸擅長纏繞、流血和自然毒霧，掉落藤刺、花粉、活木與祭壇符片；入口連琥珀森林與黑木林。',
  ember_march: '餘燼邊境是三十到四十四級的火山與荒地過渡帶，南側新闢傳送石臺與補給棚，作為深入焦土與火山前緣前的集結點。火山灰原、焦黑壕溝、餘燼地縫、巡邏營與冷卻熔石橋連接紅岩與火山。火蜥蜴、灰燼盜匪、熔石元素與火山斥候在此徘徊，產出灰燼礦、耐熱藥材與熔火線索；北側接紅岩荒地，西南通火山核心。',
  reef_of_bones: '白骨礁是二十六到四十級的船骸礁區，巨獸肋骨、沉船甲板、退潮沙道、海盜墓標與骨礁燈塔在潮水間露出。亡靈海盜、魚人、礁蟹與海獸殘魂守著沉船財寶，資源包含骨片、珍珠、船材、血鹽與海盜信物；水路連霧港、東部海岸與深海神殿入口。',
  sapphire_lake: '藍寶石湖是二十二到三十四級的湖岸採集區，清澈深湖、藍光礦脈、湖底洞口、木棧橋與水精靈傳說吸引採集者。水靈、湖獸、盜採者與魚人斥候在岸邊活動，資源包含湖晶、藍寶石砂、淡水魚、藥草與水系飾材；西側靠湖畔城鎮，北側接銀松山脈。',
  kingsroad_market: '王道市集是十到三十級的交通與交易節點，王國大道、露天棚架、傭兵公告牆、旅商倉車與馬廄把多條野外路線接在一起。此區以商人、修理、補給、委託與少量盜賊事件為主，資源多來自交易貨物與情報；西接平原，東往鐵木要塞，北通獵場與湖畔城鎮。',
  arena_quarter: '競技場區是二十到五十級的城區戰鬥服務地，圓形競技場、酒館、下注所、訓練場、醫療棚與鬥士宿舍日夜運作。常見敵人不是野外怪，而是試煉鬥士、挑戰者與事件型精英，主要提供 PVP、挑戰、技能測試、聲望與裝備獎勵；道路連湖畔城鎮、王道市集與職業大廳。',
  royal_hunting_grounds: '王室獵場是二十八到四十六級的受管制森林與草坡，獵棚、獸欄、貴族看台、密林巡徑與陷阱區都需要狩獵許可。珍稀野獸、王室獵犬、偷獵者與獵場守衛提供高品質皮毛與牙爪材料，玩法偏單體追獵與委託；南側接王道市集，北側接銀松山麓與翠綠平原外緣。',
  ashfall_monastery: '灰落修道院是三十四到五十級的聖光與火山灰混合副本區，灰白鐘樓、封閉迴廊、懺悔庭、聖火井與墮落禮拜堂都覆著厚灰。墮落修士、聖光殘響、灰燼亡者與審判構裝同時出現，掉落聖灰、鐘舌、修道院文書與信仰裝備；入口連餘燼邊境與巡禮古道。',
  frostbite_pass: '霜咬隘口是三十到四十四級的極北山路，冰封石階、失蹤商隊營、雪崩斜坡、風雪哨站與窄橋把銀松山脈推向雪原。雪怪、冰狼、凍死商隊亡魂與冰風元素帶來寒冷和視野壓力，資源包含霜草、冰晶、商隊補給與抗寒材料；南側接銀松山脈，北側通冰封雪原。',
  necropolis_gate: '死都外門是四十二到五十八級的亡靈軍事入口，巨大黑門、骨牆、軍靴廣場、守墓火盆與點名碑讓玩家面對整齊不死軍陣。骸骨士兵、亡靈騎士、死靈軍官與暗影旗手掉落骨甲、軍徽、悼詞與暗屬材料；西側接詛咒墓園，門後深處應作為死者之城副本。',
  sunspire: '日耀尖塔是四十到五十六級的神聖垂直區，白石塔階、日光透鏡、審判平台、聖焰井與雲端禮拜間考驗追求光系力量的玩家。塔衛、天界使者、光元素與審判者偏向光屬、護盾和淨化，資源包含日紋石、聖火粉、光環碎片與信仰裝備；道路連巡禮古道與天界遺跡。',
  moonshadow_court: '月影宮廷是四十到五十八級的夢境與妖精副本區，半透明舞廳、月影花園、銀鏡門、夢境宴席與女王庭座只在夜色深處現形。妖精貴族、夢魘、月影刺客與幻術師會混淆目標和路線，掉落月紗、夢塵、妖精契印與幻象飾材；入口連黑木林、月光濕地與星界邊界。',
  machine_graveyard: '機械墳場是三十八到五十四級的古代構裝廢墟，齒輪山、破裂核心、輸送帶殘架、熄滅熔爐與控制塔仍偶爾運轉。失控守衛、古代機械、磁化零件群與自動炮台造成高防禦和雷屬壓力，資源包含齒輪、核心片、導線與改造零件；道路接失落王都、地下城邦與星隕坑。',
  bloodsalt_coast: '血鹽海岸是三十二到四十八級的紅潮海岸，血色鹽灘、祭船殘骸、魚人火堆、海盜刑場與潮汐祭壇讓此地充滿水暗壓力。魚人祭司、海盜、血鹽獸與祭儀亡魂掉落血鹽、骨鏈、海獸鱗與祭品材料；西側接東部海岸，南側連白骨礁與深海神殿入口。',
  emerald_canopy: '翡翠樹冠是三十六到五十二級的高空森林，藤橋、樹屋巢村、古木平台、鳥巢哨站與懸空瀑布把森林搬到樹頂。巨鳥、樹冠獵手、藤蔓守衛與自然元素擅長位移、落差與纏繞，資源包含翡翠葉、藤纖維、鳥羽與高階木材；下層連琥珀森林與黑木林，上層可接天空群島。',
  hollow_mountain: '空心山是三十到五十級的山腹城與礦道混合區，入口風門、螺旋礦坡、迴音市集、霜脈壁與雷礦橋圍繞中空山體上升。礦工亡魂、山腹獸、雷礦元素與機械升降守衛共同威脅玩家，產出風石、霜脈礦、雷礦、山腹交易品與坐騎材料；外側接銀松山脈與王國邊境。',
  serpent_delta: '蛇河三角洲是二十四到四十級的水道聚落區，分岔河道、蘆葦村、蛇神祭壇、濕木棧橋與淤泥漁場讓移動依賴橋與小舟。巨蛇、河盜、毒蛙、蛇神祭司與水生怪物帶毒與水屬壓力，資源包含蛇鱗、蘆葦、魚獲、毒腺與祭壇符物；上游連藍寶石湖，下游接海岸與鏡沼。',
  kingdom_frontier: '王國邊境是二十五到六十級的戰爭與資源爭奪區，傳送集結點、邊境道路、雙哨塔、補給營、攻城器械場與戰桌地堡隨戰線變化。王國士兵、俘虜、斥候、攻城守衛與暗木伏兵會牽動 PVP 與資源戰，產出補給箱、鐵料車契、戰旗匣與指揮印；道路連王道市集、鐵木要塞、失落王都與終局前線。',
};

for (const [zoneId, description] of Object.entries(ZONE_DESCRIPTION_QUALITY_OVERRIDES)) {
  if (ZONES[zoneId]) {
    ZONES[zoneId].description = description;
  }
}

// ============================================================
//  房間定義
// ============================================================

function createResourceNodeRooms(): Record<string, RoomDef> {
  const rooms: Record<string, RoomDef> = {};
  for (const zone of Object.values(ZONES).filter(candidate => candidate.type === 'resource')) {
    if (zone.rooms.length !== RESOURCE_NODE_ROOM_COUNT || !zone.rooms.every(roomId => roomId.startsWith(`${zone.id}_`))) {
      continue;
    }

    zone.rooms.forEach((roomId, index) => {
      const previous = zone.rooms[index - 1];
      const next = zone.rooms[index + 1];
      const exits = [
        previous ? { direction: 'west' as const, targetRoomId: previous, description: '沿著標記繩回到上一處採集點' } : undefined,
        next ? { direction: 'east' as const, targetRoomId: next, description: '順著資源痕跡前往下一處採集點' } : undefined,
      ].filter((exit): exit is NonNullable<typeof exit> => !!exit);

      rooms[roomId] = {
        id: roomId,
        name: `${zone.name}資源點 ${index + 1}`,
        zone: zone.id,
        description:
          `${zone.name}的資源帶在這裡展開，地面、岩壁或水邊留下清楚的採集痕跡。` +
          `潮濕空氣裡混著礦粉、草木、獸皮或古物土腥味，遠處仍能聽見怪物巡行與工具敲擊聲。` +
          `道路以繩標和碎石堆標出方向，玩家可在此使用 gather 搜尋可用節點，也要留意高階區域的危險。`,
        exits,
        mapSymbol: '[R]',
        mapX: index % 3,
        mapY: Math.floor(index / 3),
        guardianHints: {
          creature: '採集痕跡旁有新鮮足印，附近可能有被資源氣味吸引的魔物。',
          treasure: '碎石與草根之間偶爾閃過微光，像是尚未採完的材料層。',
          spirit: '這片資源帶殘留著長年採集者的路標與低語，提醒旅人不要貪採過深。',
        },
      };
    });
  }
  return rooms;
}

export const ROOMS: Record<string, RoomDef> = {

  ...createResourceNodeRooms(),

  // ─── 新手村 (starter_village) ───────────────────────────

  village_square: {
    id: 'village_square',
    name: '村莊廣場',
    zone: 'starter_village',
    image: 'village_square.png',
    imagePrompt: '村莊廣場 in starter_village, town core plaza with fountain, quest board, service crossroads, warm lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '新手村的中心廣場鋪著被歲月磨亮的灰色石板，雨後的水痕沿著縫隙流向中央噴泉，泉水在銅色燈籠下泛著柔和微光。北側公會門口掛滿委託單，東邊傳來鐵匠鋪的敲擊聲，西邊飄著草藥與乾花氣味，南側可看見村門火把和通往平原的泥路。噴泉旁的舊告示板標出新手訓練、傳送陣與村內服務位置，也暗示有些委託需要仔細查看廣場角落。' +
      '廣場四周的排水溝能聽見細小水聲，旅人腳印在不同方向交錯，讓新人能從聲音、氣味和路標判斷下一步該去商店、公會、村口或傳送祠堂。噴泉底座有幾道新刮痕，提醒玩家可用 look 或 inspect 找到隱藏線索。',
    exits: [
      { direction: 'north', targetRoomId: 'adventurer_guild', description: '冒險者公會的大門敞開著' },
      { direction: 'east', targetRoomId: 'weapon_shop', description: '傳來鐵匠打鐵的聲響' },
      { direction: 'west', targetRoomId: 'potion_shop', description: '空氣中飄著草藥的香氣' },
      { direction: 'south', targetRoomId: 'village_gate', description: '通往村口的道路' },
    ],
    npcs: ['village_chief'],
    mapSymbol: '[ ]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '噴泉底部似乎有什麼東西在蠕動……可能是藏在水中的小型生物。',
      treasure: '噴泉底部閃爍著幾枚古老的硬幣，或許有人曾在此許願。',
      spirit: '廣場上殘留著無數冒險者的意志，噴泉的水似乎在低語著古老的祝福。',
    },
  },

  adventurer_guild: {
    id: 'adventurer_guild',
    name: '冒險者公會',
    zone: 'starter_village',
    image: 'adventurer_guild.png',
    imagePrompt: '冒險者公會 in starter_village, town service guild hall with quest board, mentor desk, candlelit rafters, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '公會大廳由粗木梁撐起，長桌上堆著地圖、空酒杯與磨損的訓練手冊，牆面掛著歷代冒險者的肖像與被怪物爪痕劃破的盾牌。北牆任務看板密密麻麻釘著委託單，燭光照出不同顏色的緊急標記；南門回到廣場，旁邊的小門通往安靜的舊書庫。導師站在櫃檯前提醒新人先學會 look、go、attack 與 loot corpse，再接取更遠的區域任務。' +
      '木地板在櫃檯前被踩出淺色痕跡，表示這裡是接任務與回報成果的主要動線。角落的沙盤標出村口、訓練場和傳送祠堂，旁邊還放著幾具怪物骨片作為教具，提示玩家任務目標常會要求擊敗、搜刮或回收證物。',
    exits: [
      { direction: 'south', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'east', targetRoomId: 'starter_village_old_library', description: '側門後是保存教本的舊書庫' },
    ],
    npcs: ['adventure_mentor'],
    mapSymbol: '[G]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '任務看板後方的陰影裡，似乎有蜘蛛在結網。',
      treasure: '歷代冒險者的肖像畫後面，牆壁似乎有一處暗格。',
      spirit: '大廳裡瀰漫著歷代冒險者的豪情壯志，彷彿能聽見他們的故事。',
    },
  },

  weapon_shop: {
    id: 'weapon_shop',
    name: '武器店',
    zone: 'starter_village',
    image: 'weapon_shop.png',
    imagePrompt: '武器店 in starter_village, town service weapon shop with forge, weapon racks, orange firelight and smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '武器店的石牆被爐火烤得微微發紅，長劍、短弓、權杖與練習盾按等級掛在不同架位上，金屬油與煤煙的味道混在一起。鐵砧旁的地面刻著安全線，提醒新人不要靠近噴濺的火星；西門可回廣場，東側半開的木門連到修補裝備的小工棚。架上每件武器都掛著用途牌，暗示旅人可以比較欄位、等級與職業需求再裝備' +
      '爐邊水槽不斷冒出白霧，敲打聲會隨鐵匠動作在屋樑間回響。櫃檯下方擺著待鑑定的舊短劍和木箱，牆上的箭頭牌標示修補工棚方向，提醒玩家戰鬥前檢查武器、耐久和背包空位。',
    exits: [
      { direction: 'west', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'east', targetRoomId: 'starter_village_crafting_shed', description: '小工棚裡傳出磨刀與修補聲' },
    ],
    npcs: ['blacksmith'],
    mapSymbol: '[W]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '爐火旁有細小的爪印，可能有火蜥蜴藏在爐底取暖。',
      treasure: '架子上其中一把劍的光澤與眾不同，可能是件隱藏的名器。',
      spirit: '鐵匠的鍛造技術似乎傳承自某個已經消逝的矮人王國。',
    },
  },

  potion_shop: {
    id: 'potion_shop',
    name: '藥水店',
    zone: 'starter_village',
    image: 'potion_shop.png',
    imagePrompt: '藥水店 in starter_village, town service apothecary with herb shelves, glowing bottles, green window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain town, clear lantern light',
    description:
      '藥水店裡的木架從地面堆到天花板，紅藍藥水在玻璃瓶中閃著柔光，乾燥薰衣草、薄荷與苦艾草垂掛在窗邊。櫃檯後方的藥典翻到治療創傷的頁面，旁邊標著低等冒險者常用補給；東門通回廣場，西側後門通往儲藏屋。地上細碎藥粉形成一條淡綠痕跡，提示仔細調查或補給後再前往戰鬥區。藥水店周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。' +
      '屋內能聽見研磨棒碰撞石臼的細響，藥師把不同尺寸的瓶子依照用途排列，讓人一眼看出恢復生命、魔力和解除異常的差別。後方門縫吹來倉庫冷氣，暗示補給箱、隱藏地窖和簡單搜尋任務都與這間店相連。',
    exits: [
      { direction: 'east', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'west', targetRoomId: 'starter_village_storehouse', description: '藥草箱堆滿後方儲藏屋' },
    ],
    npcs: ['herbalist'],
    mapSymbol: '[P]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '瓶罐之間似乎有小蟲在爬動，可能被草藥的氣味吸引。',
      treasure: '藥典翻開的那一頁記載著一種失傳的配方，或許值得仔細研讀。',
      spirit: '空氣中的草藥香氣蘊含著古老的治癒之力，藥師似乎知道更多秘密。',
    },
  },

  village_gate: {
    id: 'village_gate',
    name: '村口',
    zone: 'starter_village',
    image: 'village_gate.png',
    imagePrompt: '村口 in starter_village, town gate and safe exit with wooden palisade, torchlight, road to plains, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '村口的木柵欄沿著低矮土坡展開，尖木樁上繫著避獸鈴，微風吹過時發出細碎聲響。南方通往傳送祠堂，遠處可見翠綠平原的方向；北面回到廣場，東側訓練場傳來木劍撞擊聲，西側小路繞往外圍。守衛火把照亮路標與警告牌，提醒初學者先檢查裝備、藥水與任務，再離開安全區進入可能遭遇史萊姆的道路。' +
      '柵門下方有舊黏液和被拖曳的草束，說明怪物偶爾會靠近安全區邊緣，但守衛已把常駐威脅擋在柵外。木梯通往上方哨所，可俯看撤退路線；路標同時標出平原入口與村外小徑，讓玩家能清楚判斷南、北、東、西與上方出口。',
    exits: [
      { direction: 'north', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'east', targetRoomId: 'training_ground', description: '訓練場在東邊' },
      {
        direction: 'south',
        targetRoomId: 'plains_entrance',
        description: '南側要踏出木柵門，沿安全哨線外的泥路走過草坡後才抵達翠綠平原入口',
      },
      {
        direction: 'west',
        targetRoomId: 'village_outskirts',
        description: '西側小路先繞過木柵牆與守衛火把，再沿野花坡下降到村外小路入口',
      },
    ],
    mapSymbol: '[=]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '柵欄旁的草叢在無風的情況下微微搖動，裡面可能藏著史萊姆。',
      treasure: '守衛打盹的位置旁邊，地面有一塊鬆動的石板。',
      spirit: '村口的火把似乎被某種魔力維持著，永遠不會熄滅。',
    },
  },

  training_ground: {
    id: 'training_ground',
    name: '訓練場',
    zone: 'starter_village',
    image: 'training_ground.png',
    imagePrompt: '訓練場 in starter_village, town training yard with straw dummies, weapon rack, sunset dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '一片被夯實的空地上擺放著稻草人和木製練習靶，幾位新手冒險者正揮汗如雨地練習著基本的劈砍動作。訓練場周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '場邊的武器架上放著各種練習用的鈍器，木劍碰撞聲和教官的喝斥聲此起彼落。' +
      '地面上散落著被劈爛的稻草和斷裂的練習箭矢，空氣中瀰漫著汗水和泥土的氣味。' +
      '夕陽的餘暉將練習場映成金色，新手們的影子在地上拉得長長的。教官把受控怪物、史萊姆和夜間捕來的小蝙蝠關在繩欄內，讓新人只在可撤退的訓練範圍內練習 attack 與 loot corpse。',
    exits: [
      { direction: 'west', targetRoomId: 'village_gate', description: '回到村口' },
      { direction: 'north', targetRoomId: 'starter_village_rooftop_walk', description: '北側木梯沿訓練場牆邊上行，繞過稻草靶與繩索護欄抵達屋頂棧道' },
    ],
    monsters: [
      { monsterId: 'slime', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'small_bat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[T]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '稻草人的背後有抓痕，小蝙蝠經常在夜晚聚集在此。',
      treasure: '武器架底下的泥土裡埋著什麼東西，隱約露出一角。',
      spirit: '這片訓練場承載了無數新手的汗水，地面似乎殘留著鬥志的能量。',
    },
  },

  starter_village_inn: {
    id: 'starter_village_inn',
    name: '旅人小屋',
    zone: 'starter_village',
    image: 'starter_village_inn.png',
    imagePrompt: '旅人小屋 in starter_village, town service inn with hearth, bunks, rain-dark timber, warm firelight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '旅人小屋裡燃著穩定的壁爐，濕斗篷掛在門邊滴水，粗木長凳被來往新手磨得發亮。北窗能看見公會屋簷，南側窄門通向藥水店附近的小巷，東邊則是人聲嘈雜的冒險者公會。櫃檯旁放著簡易床位牌與醒酒茶，提示受傷或補給不足時可以先回到安全服務區整理狀態。旅人小屋周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'adventurer_guild', description: '公會大廳就在隔壁' },
      { direction: 'south', targetRoomId: 'potion_shop', description: '草藥香從南側門縫飄來' },
    ],
    mapSymbol: '[I]',
    mapX: 1,
    mapY: 1,
  },

  starter_village_storehouse: {
    id: 'starter_village_storehouse',
    name: '補給倉庫',
    zone: 'starter_village',
    image: 'starter_village_storehouse.png',
    imagePrompt: '補給倉庫 in starter_village, town service storehouse with crates, herb bundles, shaft of dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain town, clear lantern light',
    description:
      '補給倉庫堆滿標著公會印記的木箱，乾草、繃帶、空瓶與低階採集工具分門別類放在架上，屋頂破洞灑下一束帶塵光線。東門通往藥水店櫃檯，地板下方傳出空洞回聲，暗示某個可調查的地窖入口。牆上的清單提醒新人出門前確認負重與消耗品，避免在野外無法拾取戰利品。補給倉庫周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'potion_shop', description: '回到藥水店' },
      { direction: 'north', targetRoomId: 'starter_village_hidden_cellar', description: '倉庫北側暗門通往隱蔽地窖' },
    ],
    mapSymbol: '[S]',
    mapX: 0,
    mapY: 2,
  },

  starter_village_chapel: {
    id: 'starter_village_chapel',
    name: '晨光禮拜堂',
    zone: 'starter_village',
    image: 'starter_village_chapel.png',
    imagePrompt: '晨光禮拜堂 in starter_village, town service chapel with simple altar, colored window light, quiet stone floor, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain town, clear lantern light',
    description:
      '晨光禮拜堂由白石和舊木梁搭成，彩色玻璃把清晨光線切成淡金與淺藍的碎片，灑在簡樸祭壇前。南門連到市場小巷，西側通向舊書庫，祭壇旁的祈願簿記著許多失敗又重新出發的冒險者姓名。這裡沒有怪物，卻提示旅人死亡後安全點、治療服務與祭司職業相關任務的方向。長椅間能聞到蠟油和雨濕木頭的味道，祭壇背後掛著村內安全路線圖，標明廣場、傳送祠堂和村口哨所的位置。幾張祈禱紙提到復活、護送與治療委託，暗示旅人可從 NPC 對話或任務看板取得支援型目標，也能辨認安靜側廊的出口',
    exits: [
      { direction: 'south', targetRoomId: 'starter_village_market_lane', description: '南側禮拜堂石階穿過雨棚與祈願紙，繞到攤販燈火旁的市場小巷入口' },
      { direction: 'west', targetRoomId: 'starter_village_old_library', description: '側廊通往舊書庫' },
    ],
    mapSymbol: '[C]',
    mapX: 4,
    mapY: 1,
  },

  starter_village_portal_shrine: {
    id: 'starter_village_portal_shrine',
    name: '新手村傳送祠堂',
    zone: 'starter_village',
    image: 'starter_village_portal_shrine.png',
    imagePrompt: '新手村傳送祠堂 in starter_village, town service portal room with runestone circle, blue lantern light, safe travel node, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '傳送祠堂藏在廣場噴泉後方的半地下石室，圓形地面刻滿被腳步磨亮的古代符文，藍白光線從符文縫隙緩緩升起。北側石階回到村口，東側窄廊能通向守衛哨所下方，牆面掛著交通網路、解鎖條件與傳送費用的木牌。祠堂中央的傳送陣被公會封印穩定住，適合新手學習 activate portal，也提醒背包過重或攜帶特殊資源時可能無法使用一般傳送。石壁上的裂紋會隨魔力脈衝發亮，低沉嗡鳴提示傳送節點已解鎖；地面箭頭刻痕清楚指回廣場與哨所，避免旅人在地下空間迷路或錯過啟用提示。石柱旁還有記錄啟用者姓名的小銅牌',
    exits: [
      { direction: 'west', targetRoomId: 'starter_village_fill_1_3', description: '低地小徑通往溪畔石階' },
      { direction: 'east', targetRoomId: 'starter_village_guard_post', description: '窄廊通向守衛哨所下方' },
    ],
    mapSymbol: '[O]',
    mapX: 2,
    mapY: 4,
  },

  starter_village_market_lane: {
    id: 'starter_village_market_lane',
    name: '市場小巷',
    zone: 'starter_village',
    image: 'starter_village_market_lane.png',
    imagePrompt: '市場小巷 in starter_village, town social market lane with stalls, canvas awnings, lantern glow after rain, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '市場小巷夾在武器店、禮拜堂與馬廄之間，濕潤石路上反射著攤棚燈火，水果籃、皮革包和破舊地圖擺得略顯凌亂。西邊能回到武器店，北側是安靜禮拜堂，南方傳來馬匹噴鼻聲。攤販低聲談論平原怪物與缺貨材料，提示旅人可從交易、對話和支線委託取得下一個探索方向。市場小巷周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'west', targetRoomId: 'weapon_shop', description: '西側市場石路穿過攤棚與木箱堆，繞過鐵匠煤煙後抵達武器店前門' },
      { direction: 'north', targetRoomId: 'starter_village_chapel', description: '北側市場雨棚沿祈願紙與石階上行，避開攤販燈火回到晨光禮拜堂' },
      { direction: 'south', targetRoomId: 'starter_village_crafting_shed', description: '南側修補工棚通往馬廄院' },
    ],
    mapSymbol: '[M]',
    mapX: 4,
    mapY: 2,
  },

  starter_village_crafting_shed: {
    id: 'starter_village_crafting_shed',
    name: '修補工棚',
    zone: 'starter_village',
    image: 'starter_village_crafting_shed.png',
    imagePrompt: '修補工棚 in starter_village, town service crafting shed with workbench, whetstone, coals and side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '修補工棚半倚在武器店後牆，木桌上擺著磨刀石、皮革碎片、釘槌和幾把等待修復的短劍。南面通往訓練場，西側回到武器店，東側有小門通向馬廄院。牆上掛著裝備耐久與基礎製作步驟的圖板，暗示旅人能從掉落材料、採集資源和工匠服務逐步改善初期裝備。修補工棚周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'west', targetRoomId: 'weapon_shop', description: '回到武器店前廳' },
      { direction: 'north', targetRoomId: 'starter_village_market_lane', description: '北側攤棚燈火回到市場小巷' },
      { direction: 'south', targetRoomId: 'starter_village_stable_yard', description: '南側小門外是馬廄院' },
    ],
    mapSymbol: '[F]',
    mapX: 4,
    mapY: 3,
  },

  starter_village_notice_corner: {
    id: 'starter_village_notice_corner',
    name: '告示角落',
    zone: 'starter_village',
    image: 'starter_village_notice_corner.png',
    imagePrompt: '告示角落 in starter_village, town quest notice corner with wooden boards, pinned maps, side alley lamplight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '告示角落位在廣場南西側的轉角，數塊木板被雨水泡得發黑，仍釘著尋物、採集、巡邏和協助新人的短委託。北邊是藥水店，東方可到村口，西側狹路延伸到古井。紙張邊緣有被撕下的痕跡，提示旅人查看 quest、追蹤任務目標，並留意有些委託需要 搜索 或 觀察 才能找到線索。木板下方散落舊蠟封與泥腳印，表示有人匆忙撕走其中一張任務單；旁邊的箭頭牌標示藥水店、古井與村口方向，使旅人能根據任務文字快速規劃路線，還能發現被雨水暈開的暗號。角落油燈下壓著一張缺角地圖，標出村內可調查處與回報路線',
    exits: [
      { direction: 'north', targetRoomId: 'potion_shop', description: '北側告示板後巷穿過雨棚與藥草木箱，沿淡綠藥粉痕跡繞回藥水店門口' },
      { direction: 'east', targetRoomId: 'village_gate', description: '東側告示角落沿濕石路穿過任務牌與守衛火把，繞到村口柵門內側' },
      { direction: 'west', targetRoomId: 'starter_village_well_path', description: '狹路通往村內古井' },
    ],
    mapSymbol: '[N]',
    mapX: 1,
    mapY: 3,
  },

  starter_village_well_path: {
    id: 'starter_village_well_path',
    name: '古井小路',
    zone: 'starter_village',
    image: 'starter_village_well_path.png',
    imagePrompt: '古井小路 in starter_village, town exploration path with old well, mossy stones, pale moonlit water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '古井小路被青苔石牆夾住，井口掛著生鏽滑輪，井水在微光下泛出不自然的銀色漣漪。東邊回到告示角落，南側階梯下到河岸，北面能看見補給倉庫背牆。井沿刻著被磨損的符號，旁邊散落幾枚濕硬幣，提示這裡適合調查、聽聲音或尋找被村民遺忘的小型寶物。古井小路周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'starter_village_notice_corner', description: '告示板在東側轉角' },
      { direction: 'south', targetRoomId: 'starter_village_river_stairs', description: '石階下方有水聲' },
    ],
    mapSymbol: '[~]',
    mapX: 0,
    mapY: 3,
  },

  starter_village_old_library: {
    id: 'starter_village_old_library',
    name: '舊書庫',
    zone: 'starter_village',
    image: 'starter_village_old_library.png',
    imagePrompt: '舊書庫 in starter_village, town quest library with dusty shelves, tutorial manuals, narrow amber window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '舊書庫藏在公會與禮拜堂之間，低矮書架塞滿泛黃手冊、怪物素描和初級地圖，灰塵在狹窗透進的琥珀色光束中漂浮。西門回到公會，東側通向禮拜堂，南側可繞回武器店附近。書桌上攤著一本標註 look、go、attack、equip 的教本，提示旅人能從文字線索學會基本指令與區域知識。舊書庫周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'west', targetRoomId: 'adventurer_guild', description: '回到公會大廳' },
      { direction: 'east', targetRoomId: 'starter_village_chapel', description: '側廊通往禮拜堂' },
      { direction: 'south', targetRoomId: 'weapon_shop', description: '書庫南門接近武器店' },
    ],
    mapSymbol: '[L]',
    mapX: 3,
    mapY: 1,
  },

  starter_village_river_stairs: {
    id: 'starter_village_river_stairs',
    name: '溪畔石階',
    zone: 'starter_village',
    image: 'starter_village_river_stairs.png',
    imagePrompt: '溪畔石階 in starter_village, town exploration river stairs with reeds, wet stones, reflected lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '溪畔石階沿著村內小溪下降，濕石上長著細苔，蘆葦在水邊沙沙作響，遠處橋下偶爾閃過銀色魚影。北邊回到古井小路，東方可通往傳送祠堂附近的低地。水聲遮住村內喧鬧，地上有小型足跡和被沖來的破布，提示旅人這裡可能藏著採集、釣魚或追蹤任務的早期線索。石階末端有半沉的小木箱與斷裂魚線，暗示死路也可能有可調查物；溪流方向清楚指向東側低地，讓旅人能用水聲辨認通往祠堂的繞路，並注意濕滑石面上的新鮮痕跡。水面倒影也能看見上方古井的輪廓，階梯旁還刻著提醒慢行的舊字',
    exits: [
      { direction: 'north', targetRoomId: 'starter_village_well_path', description: '石階上方是古井小路' },
      { direction: 'east', targetRoomId: 'starter_village_fill_1_3', description: '沿低地小徑可繞到傳送祠堂' },
    ],
    mapSymbol: '[R]',
    mapX: 0,
    mapY: 4,
  },

  starter_village_guard_post: {
    id: 'starter_village_guard_post',
    name: '守衛哨所',
    zone: 'starter_village',
    image: 'starter_village_guard_post.png',
    imagePrompt: '守衛哨所 in starter_village, town service guard post above gate, watch lantern, road signs and palisade, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '守衛哨所架在村門上方，窄木板因長年雨水而發黑，瞭望燈籠把南方平原道路照成一條淡黃線。北側可回傳送祠堂，西側窄廊亦可繞往祠堂方向，東面屋頂棧道能俯看訓練場。桌上放著巡邏表、怪物出沒圖與撤退信號旗，提示旅人離村後遇到危險可尋找安全點或回程路線。哨窗旁的風鈴會根據南方草原風勢改變聲音，守衛用粉筆標出最近一次史萊姆靠近的位置，讓新人理解安全區與野外遭遇區的界線，也看懂撤退方向。旗架上還綁著回城信號的顏色說明，牆角備有給新人辨識路線的木牌與哨音',
    exits: [
      { direction: 'west', targetRoomId: 'starter_village_portal_shrine', description: '窄廊通往傳送祠堂' },
      { direction: 'east', targetRoomId: 'starter_village_rooftop_walk', description: '東側哨所窄廊沿木柵上緣延伸，越過火把平台後接上屋頂棧道入口' },
    ],
    mapSymbol: '[B]',
    mapX: 2,
    mapY: 5,
  },

  starter_village_stable_yard: {
    id: 'starter_village_stable_yard',
    name: '馬廄院',
    zone: 'starter_village',
    image: 'starter_village_stable_yard.png',
    imagePrompt: '馬廄院 in starter_village, town service stable yard with hay, wagon wheels, muddy lantern-lit ground, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '馬廄院裡堆著乾草、木桶與尚未修好的車輪，泥地被馬蹄踩出深淺不一的水坑，油燈掛在橫梁下緩慢晃動。北方連到市場小巷，西側是修補工棚，南邊屋頂棧道投下細長陰影。牆上釘著運送路線與村外風險標記，暗示交通、背包負重和區域解鎖會影響旅人能否安全移動。馬廄院周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_village_crafting_shed', description: '北側修補工棚接回市場小巷' },
      { direction: 'west', targetRoomId: 'starter_village_crafting_shed', description: '修補工棚在西邊' },
      { direction: 'south', targetRoomId: 'starter_village_rooftop_walk', description: '南側馬廄木階穿過乾草棚與車輪架，沿屋簷陰影接上屋頂棧道入口' },
    ],
    mapSymbol: '[H]',
    mapX: 4,
    mapY: 4,
  },

  starter_village_hidden_cellar: {
    id: 'starter_village_hidden_cellar',
    name: '隱蔽地窖',
    zone: 'starter_village',
    image: 'starter_village_hidden_cellar.png',
    imagePrompt: '隱蔽地窖 in starter_village, hidden exploration cellar with old crates, spiderwebs, single lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '隱蔽地窖比倉庫地板更潮濕，石牆滲出細小水珠，蛛網覆住破木箱與幾只封泥罐。上方活板門通回補給倉庫，東側狹縫能鑽到旅人小屋地基下，唯一油燈把箱角陰影拉得很長。這裡不像正式服務房，卻有明顯可調查痕跡與一次性寶箱位置，提示新人學會檢查死路與隱藏空間。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'south', targetRoomId: 'starter_village_storehouse', description: '狹窄暗道回到補給倉庫' },
      { direction: 'east', targetRoomId: 'starter_village_inn', description: '狹縫通往旅人小屋地基旁' },
    ],
    items: ['small_hp_potion'],
    mapSymbol: '[?]',
    mapX: 0,
    mapY: 1,
  },

  starter_village_rooftop_walk: {
    id: 'starter_village_rooftop_walk',
    name: '屋頂棧道',
    zone: 'starter_village',
    image: 'starter_village_rooftop_walk.png',
    imagePrompt: '屋頂棧道 in starter_village, town exploration rooftop walkway over training yard, ropes, dusk sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '屋頂棧道由繩索和窄木板固定在訓練場與馬廄之間，腳下能看見新手揮舞木劍，遠方村門火把像小星點般閃爍。下方梯子回到訓練場，西面連向守衛哨所，東邊可沿木階下到馬廄院。棧道扶手綁著風向布條與觀戰標記，提示旅人從高處判讀道路方向，也能避開地面擁擠路線快速回到服務區。屋頂棧道周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'south', targetRoomId: 'training_ground', description: '南側棧道木梯沿繩索護欄折降，繞過稻草靶後回到訓練場北側空地' },
      { direction: 'west', targetRoomId: 'starter_village_guard_post', description: '西側屋頂棧道沿木柵上緣回走，越過火把平台與窄廊抵達守衛哨所' },
      { direction: 'north', targetRoomId: 'starter_village_stable_yard', description: '北側屋簷木階穿過車輪架與乾草棚陰影，折下到馬廄院泥地旁的燈柱' },
    ],
    mapSymbol: '[^]',
    mapX: 3,
    mapY: 4,
  },

  // ─── 翠綠平原 (plains) ─────────────────────────────────

  plains_entrance: {
    id: 'plains_entrance',
    name: '平原入口',
    zone: 'plains',
    image: 'plains_entrance.png',
    imagePrompt: '平原入口 in plains, entrance room from village gate into green grassland, dirt road, warm sun and long grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain plains, clear lantern light',
    description:
      '踏出新手村木門後視野忽然展開，翠綠平原在溫暖陽光下起伏，齊膝草浪一路延伸到遠方風車。泥土路從北方村口接入草地，南側小徑被旅人踩出清楚痕跡，東方可見麥田與風車，西邊向日葵田在光中閃動。空氣有青草、濕土和獸毛味，草叢裡偶爾傳來野兔奔跑聲，提醒新人這裡已是會遭遇怪物的野外入口。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'village_gate',
        description: '北側回村口要沿草坡泥路穿過安全哨線，最後才抵達木柵門與守衛火把',
      },
      { direction: 'south', targetRoomId: 'grass_path', description: '沿著草原小徑前進' },
      { direction: 'east', targetRoomId: 'windmill_farm', description: '通往風車農場的叉路' },
      { direction: 'west', targetRoomId: 'sunflower_field', description: '西邊的花田在陽光下閃耀' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '草叢深處有細微的沙沙聲，可能潛伏著不止一隻野兔。',
      treasure: '路邊的石堆下似乎藏著旅人遺落的物品。',
      spirit: '風中帶著遠古精靈旅行者的氣息，這條路比看起來的更加古老。',
    },
  },

  grass_path: {
    id: 'grass_path',
    name: '草原小徑',
    zone: 'plains',
    image: 'grass_path.png',
    imagePrompt: '草原小徑 in plains, main route room through tall grass and wildflowers, visible wolf tracks, angled afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '蜿蜒小徑穿過齊膝草叢，兩側野花吸引蝴蝶盤旋，花粉與乾草味在風裡混成微甜氣息。北面能看見村口方向的路標，南方道路下沉通向十字路口，草葉間還有幾枚普通狼爪印與被咬斷的兔毛。這裡是新手最常練習戰鬥的主路，旅人若聽見連續沙沙聲，就該準備 attack 或觀察是否有狼群靠近；真正的狼王巢穴在支線深處，不會堵住主路',
    exits: [
      { direction: 'north', targetRoomId: 'plains_entrance', description: '回到平原入口' },
      { direction: 'south', targetRoomId: 'crossroads', description: '通往十字路口' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 5,
    guardianHints: {
      creature: '草叢中有狼的腳印，數量不止一組，但最大那組腳印朝南方支線延伸，主路只會遇到普通狼群。',
      treasure: '小徑旁的野花叢中，有一株罕見的藥草在微微發光。',
      spirit: '這條小徑曾是商隊的必經之路，殘留著他們歡笑的回音。',
    },
  },

  windmill_farm: {
    id: 'windmill_farm',
    name: '風車農場',
    zone: 'plains',
    image: 'windmill_farm.png',
    imagePrompt: '風車農場 in plains, resource farm room with windmill, wheat field, fences, golden light and bandit shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '高大風車立在金黃麥田中央，木葉片推動齒輪發出低沉咔嗒聲，麥穗在夕光裡像潮水一樣搖晃。西路回到平原入口，南門通向風車內部，東邊生鏽礦車道消失在草丘後。柵欄旁有被撬開的穀倉鎖、凌亂腳印與敵人巡邏痕跡，農夫低聲抱怨盜賊夜裡出沒，提示這裡兼具補給、資源與小規模戰鬥事件。',
    exits: [
      { direction: 'west', targetRoomId: 'plains_entrance', description: '回到平原入口' },
      { direction: 'north', targetRoomId: 'hunter_lodge', description: '北側獵人小屋通往風車內部' },
      { direction: 'east', targetRoomId: 'abandoned_minecart', description: '農場東邊有廢棄的礦車道' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[F]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '麥田深處有踩踏的痕跡，盜賊可能藏在風車的陰影中。',
      treasure: '風車的機關室裡，農夫似乎藏了一些值錢的東西。',
      spirit: '這座風車的建造者使用了古老的工藝，齒輪間刻著祈禱的符文。',
    },
  },

  crossroads: {
    id: 'crossroads',
    name: '十字路口',
    zone: 'plains',
    image: 'crossroads.png',
    imagePrompt: '十字路口 in plains, main route crossroads with old signpost, well, roads to forest and town, overcast directional light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '兩條舊道路在此交會，中央路標被風雨磨白，仍能辨認北往新手村、南入暗影森林、東至湖畔城鎮，西側古井半掩在荒草中。車轍、狼爪與蛇行痕跡互相交錯，讓這裡既是交通節點也是遭遇點。路標底座有可疑縫隙，旁邊倒著破盾與乾枯血跡，提示旅人選路前應查看任務方向並注意毒蛇或野狼伏擊。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'north', targetRoomId: 'grass_path', description: '沿小徑返回' },
      {
        direction: 'south',
        targetRoomId: 'forest_entrance',
        description: '南側十字路口沿破路標下行，穿過草坡警戒線與陰影樹門後抵達暗影森林入口',
      },
      {
        direction: 'east',
        targetRoomId: 'town_gate',
        description: '東側道路要沿車轍穿過湖畔外牆前的緩坡與衛兵哨，才會抵達湖畔城門',
      },
      { direction: 'west', targetRoomId: 'old_well', description: '走向古井' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'poison_snake', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[+]',
    mapX: 2,
    mapY: 6,
    guardianHints: {
      creature: '路標附近的地面有蛇蛻下的皮，毒蛇可能就在腳邊。',
      treasure: '古井旁的路標底座似乎可以旋轉，裡面可能有暗格。',
      spirit: '路標上模糊的字跡似乎是用古代語言寫的，記載著某個方向的秘密。',
    },
  },

  old_well: {
    id: 'old_well',
    name: '古井旁',
    zone: 'plains',
    image: 'old_well.png',
    imagePrompt: '古井旁 in plains, hidden exploration room with mossy old well, carved stones, cold blue glow from depth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain plains, clear lantern light',
    description:
      '苔蘚覆蓋的古井孤立在荒草深處，井壁石塊刻著幾乎磨平的符文，潮冷氣息從黑暗井底往上湧。東邊路口仍能看見路標，井內垂下的舊繩索通往洞窟入口，周圍草叢裡有毒蛇蛻皮與碎骨。井底微光像是在引誘旅人靠近，提示旅人可下探、調查符文或準備面對地底怪物。古井旁周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'crossroads', description: '回到十字路口' },
      {
        direction: 'west',
        targetRoomId: 'cave_entrance',
        description: '古井西側裂縫沿濕滑井壁下探，穿過垂降繩索與藍晶岩縫才抵達洞窟入口',
      },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[O]',
    mapX: 1,
    mapY: 6,
    guardianHints: {
      creature: '井壁上有爪痕，某種大型生物可能棲息在井底深處。',
      treasure: '井壁符文中有一處特別明亮，觸摸它或許能得到什麼。',
      spirit: '古井深處傳來微弱的嘆息聲，似乎有一個被遺忘的靈魂在等待。',
    },
  },

  // ─── 暗影森林 (dark_forest) ─────────────────────────────

  forest_entrance: {
    id: 'forest_entrance',
    name: '森林入口',
    zone: 'dark_forest',
    image: 'forest_entrance.png',
    imagePrompt: '森林入口 in dark_forest, entrance room with giant oak archway, wet roots, dim green light and warning shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fantasy terrain, clear lantern light',
    description:
      '兩株巨大橡樹像門衛般立在暗影森林入口，交錯枝椏形成天然拱門，濕冷樹根從泥土裡隆起。北方道路穿過草坡警戒線後退回平原十字路口，南側密林小道吞沒大部分光線，東邊藤蔓階梯攀向古老樹屋，西側結霜冷徑通往雪原入口。樹冠四面傳來鳥鳴卻看不到鳥影，地面散著狼毛、新鮮爪痕與被拖過的葉痕，使入口不像安全邊界，而像森林刻意留下的第一道警告。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'crossroads',
        description: '北側森林入口沿陰影樹門退出，穿過草坡警戒線與破路標後回到平原十字路口',
      },
      { direction: 'south', targetRoomId: 'dense_trail', description: '深入密林小道' },
      { direction: 'east', targetRoomId: 'ancient_treehouse', description: '一條岔路通往高處' },
      {
        direction: 'west',
        targetRoomId: 'snowfield_entrance',
        description: '西側森林冷徑穿過結霜樹根與覆雪矮坡，沿寒風石碑抵達冰封雪原入口',
      },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 7,
    guardianHints: {
      creature: '樹冠上有暗影狼殘留的毛髮，牠們可能從高處突襲。',
      treasure: '橡樹根部的縫隙中，似乎卡著一個古舊的小箱子。',
      spirit: '森林入口的拱門並非天然形成——精靈族曾在這裡設下了結界。',
    },
  },

  dense_trail: {
    id: 'dense_trail',
    name: '密林小道',
    zone: 'dark_forest',
    image: 'dense_trail.png',
    imagePrompt: '密林小道 in dark_forest, main route room choked by vines, spider silk, leaf carpet and dim filtered light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '密林小道越往深處越窄，高樹、藤蔓與荊棘把道路擠成潮濕縫隙，厚落葉吸走大部分腳步聲。北面樹門仍能退回森林入口，西邊飄來蘑菇沼澤的腐甜氣味，南方森林深處暗得像合上的門，東側螢火蟲小徑的藍綠微光在枝葉後閃動。頭頂垂下冰冷蛛絲，落葉下壓著舊箭矢和被拖斷的布條，遠處枝條摩擦聲一陣陣靠近，使這條主路帶著被伏擊前的緊繃。',
    exits: [
      { direction: 'north', targetRoomId: 'forest_entrance', description: '退回森林入口' },
      { direction: 'west', targetRoomId: 'mushroom_swamp', description: '空氣中飄來沼澤的氣味' },
      { direction: 'south', targetRoomId: 'deep_forest', description: '更深的黑暗在前方等待' },
      { direction: 'east', targetRoomId: 'firefly_trail', description: '林間閃爍著微弱的螢光' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '頭頂的蛛網比想像中更密集，巨型蜘蛛可能就在正上方。',
      treasure: '落葉下的泥土中有金屬的反光，可能是前人埋藏的物品。',
      spirit: '荊棘上纏繞著微弱的魔力絲線，這裡曾是精靈的防線。',
    },
  },

  mushroom_swamp: {
    id: 'mushroom_swamp',
    name: '蘑菇沼澤',
    zone: 'dark_forest',
    image: 'mushroom_swamp.png',
    imagePrompt: '蘑菇沼澤 in dark_forest, resource combat swamp room with giant glowing mushrooms, bubbling mud, sickly green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain swamp, clear lantern light',
    description:
      '蘑菇沼澤的泥地在腳下緩慢下陷，紫黑水泡從水面鼓起又破裂，巨大螢光蘑菇把霧氣照成病態綠色，有些菌傘高過人頭。東面較乾的根徑回到密林小道，西方毒霧更濃，通往毒霧沼澤深處，泥水裡偶爾映出蛛腿般的細長倒影。腐敗甜味與潮濕木屑味混在一起，最大菌根旁露出微亮礦屑和被翻動過的黑泥，周圍水紋卻不像自然擴散，彷彿有東西正貼著泥底緩慢靠近。',
    exits: [
      { direction: 'east', targetRoomId: 'dense_trail', description: '回到密林小道' },
      { direction: 'west', targetRoomId: 'deep_poison_swamp', description: '沼澤向西延伸，毒霧越來越濃' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[~]',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '氣泡冒出的位置下方，沼澤深處潛伏著尚未現身的生物。',
      treasure: '最大的螢光蘑菇底下，泥濘中埋著發光的東西。',
      spirit: '沼澤的腐敗氣息中混雜著遠古樹精的嘆息，牠們曾是森林的守護者。',
    },
  },

  ancient_treehouse: {
    id: 'ancient_treehouse',
    name: '古老樹屋',
    zone: 'dark_forest',
    image: 'ancient_treehouse.png',
    imagePrompt: '古老樹屋 in dark_forest, exploration room with elven treehouse, spiral stairs, ancient books, shafts of green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '千年巨木枝幹間架著被遺忘的精靈樹屋，螺旋木階沿樹身盤旋，腐朽欄杆仍殘留葉脈般的銀色刻紋。西面樹根間的舊梯可回到森林入口，東側樹冠繩橋越過層層暗枝，遠遠接向獵人小屋所在的林緣獵徑。屋內散落古書、碎水晶與失去光澤的觀星工具，牆面壁畫描繪精靈守衛把最後一批幼樹封入森林深處。木板下傳來低沉樹鳴，書架縫隙與地面刻痕被綠光照亮，像一段尚未腐爛的記憶仍在巨木心部緩慢呼吸。',
    exits: [
      { direction: 'west', targetRoomId: 'forest_entrance', description: '回到森林入口' },
      {
        direction: 'east',
        targetRoomId: 'hunter_lodge',
        description: '東側樹屋階梯沿樹冠繩橋下降，穿過林緣獵徑與獸皮標記抵達獵人小屋',
      },
    ],
    monsters: [
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[^]',
    mapX: 3,
    mapY: 7,
    guardianHints: {
      creature: '巨木的樹洞裡有窸窣的聲響，樹精可能把這裡當作巢穴。',
      treasure: '樹屋的書架上有一本封面鑲著寶石的古書，似乎記載著精靈的秘術。',
      spirit: '樹屋中殘留著精靈族最後的守衛的記憶，牆上的壁畫述說著一段悲傷的歷史。',
    },
  },

  deep_forest: {
    id: 'deep_forest',
    name: '森林深處',
    zone: 'dark_forest',
    image: 'deep_forest.png',
    imagePrompt: '森林深處 in dark_forest, boss route room with huge roots, green watching eyes, oppressive darkness and wolf territory, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '森林深處幾乎吞掉所有光線，古老樹根盤踞在地面上，像沉睡巨蛇繞過腐葉、黑水坑與破碎獸骨。北方窄徑可退回密林小道，南方精靈遺跡透出微弱藍光，西側枯萎之林飄來灰燼與乾木味。幽暗裡一雙雙綠眼保持距離跟隨，地上有巨大狼爪、舊箭矢、破披風和被拖走獵物留下的深痕。風穿過樹洞時像低聲警告，讓這片區域顯得不像普通深林，而是暗影狼與樹靈共同巡行的領地邊界。',
    exits: [
      { direction: 'north', targetRoomId: 'dense_trail', description: '退回密林小道' },
      { direction: 'south', targetRoomId: 'elf_ruins', description: '一道微弱的光從南方透出' },
      { direction: 'west', targetRoomId: 'withered_forest', description: '西方的樹木似乎都失去了生機' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[!]',
    mapX: 2,
    mapY: 9,
    guardianHints: {
      creature: '空氣中瀰漫著暗影之力的氣息——狼王就在附近，比你想像的更近。',
      treasure: '被暗影狼群守護的巢穴中，似乎藏著牠們收集的戰利品。',
      spirit: '那雙泛綠光的眼睛不全是狼的……有些是被暗影吞噬的靈魂。',
    },
  },

  elf_ruins: {
    id: 'elf_ruins',
    name: '精靈遺跡',
    zone: 'dark_forest',
    image: 'elf_ruins.png',
    imagePrompt: '精靈遺跡 in dark_forest, landmark room with broken elven pillars, faded magic circle, blue crystal altar light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain crystal, clear lantern light',
    description:
      '精靈遺跡像被森林吞下的白石廣場，斷裂石柱刻滿細長文字，地面魔法陣雖已黯淡，仍有藍光沿刻痕緩慢流動。北面樹幕回到森林深處，西側盤根暗路通往黑暗樹洞，東邊根橋接向盤根橋，南方白石階越過焦黑樹根後通往火山山腳。中央水晶映出破碎守衛記憶，石柱旁有暗影侵蝕的箭孔、精靈殘甲與燒裂羽飾。這裡保留著古老防線崩潰後的寂靜，也把暗林、樹洞與遠方熱風連成同一條傷痕。',
    exits: [
      { direction: 'north', targetRoomId: 'deep_forest', description: '返回森林深處' },
      { direction: 'west', targetRoomId: 'dark_treehollow', description: '西側樹根路通往黑暗樹洞' },
      { direction: 'east', targetRoomId: 'dark_forest_root_bridge', description: '東側盤根橋接往荊棘迷宮' },
      {
        direction: 'south',
        targetRoomId: 'volcano_base',
        description: '遺跡南側的白石階先穿過焦黑樹根與熱風荒地，繞過兩道裂谷後才抵達火山山腳',
      },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[*]',
    mapX: 2,
    mapY: 10,
    guardianHints: {
      creature: '石柱的陰影中有生物在潛伏，牠們被魔法陣的殘餘能量吸引。',
      treasure: '祭壇上的水晶並非裝飾品——它是一把封印之鑰，可以開啟某處的寶庫。',
      spirit: '魔法陣上殘留著精靈祭司最後的祈禱，他們試圖封印某個可怕的存在。',
    },
  },

  // ─── 水晶洞窟 (crystal_cave) ───────────────────────────

  cave_entrance: {
    id: 'cave_entrance',
    name: '洞窟入口',
    zone: 'crystal_cave',
    image: 'cave_entrance.png',
    imagePrompt: '洞窟入口 in crystal_cave, entrance room below old well with blue crystals, damp stone, cave bats and mineral wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '洞窟入口藏在古井井壁後方，狹窄通道盡頭忽然展開成潮濕石室，零星幽藍水晶嵌在岩面裡，冷風帶著礦物與蝙蝠糞味。東側濕滑繩索可攀回古井旁，南面螢光隧道像星河般延伸，北方鏽軌斜井通向廢棄礦車道。洞頂倒掛蝙蝠，地面散著水晶原石、舊鑿痕和斷裂礦燈，讓此處同時像入口、回程錨點與水晶洞窟的第一道警戒線。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'old_well',
        description: '洞窟東側藍晶岩縫沿濕滑繩索上攀，穿過古井暗壁後回到平原古井旁',
      },
      { direction: 'south', targetRoomId: 'luminous_tunnel', description: '沿著發光的隧道前進' },
      {
        direction: 'north',
        targetRoomId: 'abandoned_minecart',
        description: '北側洞窟礦車斜井沿鏽軌上升，繞過塌方木架與濕石彎道後抵達廢棄礦車道',
      },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
    ],
    mapSymbol: '[v]',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '洞頂倒掛著數十隻蝙蝠，數量比看到的多得多。',
      treasure: '入口旁的岩縫中卡著一顆品質不錯的水晶原石。',
      spirit: '這條通道是人工開鑿的，牆壁上的刻痕來自一個已滅亡的地底文明。',
    },
  },

  luminous_tunnel: {
    id: 'luminous_tunnel',
    name: '螢光隧道',
    zone: 'crystal_cave',
    image: 'luminous_tunnel.png',
    imagePrompt: '螢光隧道 in crystal_cave, main route tunnel lined with multicolor crystals, polished wet floor and refracted light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain tunnel, clear lantern light',
    description:
      '螢光隧道兩壁嵌滿大小不一的水晶，彩光在黑暗中層層折射，濕滑地面像鏡面般映出倒置星河。北面退回洞窟入口，南方水晶大廳透出耀眼白光，東邊地下河水聲清晰，西側紫水晶走廊帶來淡淡眩暈感。牆面有礦工刻下的方向箭頭與危險記號，晶光中偶爾閃過蜥蜴偽裝的影子，頂端礦水滴落聲也會暴露蝙蝠群的移動位置。',
    exits: [
      { direction: 'north', targetRoomId: 'cave_entrance', description: '回到洞窟入口' },
      { direction: 'south', targetRoomId: 'crystal_hall', description: '隧道盡頭透出耀眼的光芒' },
      { direction: 'east', targetRoomId: 'underground_river', description: '水聲從東方傳來' },
      { direction: 'west', targetRoomId: 'amethyst_corridor', description: '西側的隧道泛著紫色光芒' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: ' = ',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '水晶的折射光中有異常的閃動，蜥蜴正利用光線偽裝。',
      treasure: '其中一根水晶柱的色澤與眾不同，可能蘊含著特殊的能量。',
      spirit: '水晶中封存著遠古的記憶碎片，輕觸它們或許能看到過去的影像。',
    },
  },

  crystal_hall: {
    id: 'crystal_hall',
    name: '水晶大廳',
    zone: 'crystal_cave',
    image: 'crystal_hall.png',
    imagePrompt: '水晶大廳 in crystal_cave, landmark room with giant crystal pillars, rune platform, cathedral cavern ceiling and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '水晶大廳在螢光隧道南端展開，穹頂高得像地底教堂，巨型晶柱從地面直插天頂，把光折成萬千色彩。北側回螢光隧道，南方礦脈深處傳來沉重震動，中央符文石台被環形階梯包圍。石像鬼雕塑排列在柱間，其中幾尊姿態僵硬得過分；石台四周刻著地底王國巡禮圖，標出古代祭壇、棱鏡門與水晶龍棲台的相對方位。',
    exits: [
      { direction: 'north', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
      { direction: 'south', targetRoomId: 'mine_depths', description: '通往更深處的礦脈' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'crystal_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[H]',
    mapX: 1,
    mapY: 9,
    guardianHints: {
      creature: '那些看似靜止的石像可能隨時甦醒——石像鬼善於偽裝成普通雕塑。',
      treasure: '石台上的符文是一道密碼，破解它就能開啟通往寶庫的機關。',
      spirit: '這座大廳曾是地底種族的聖殿，他們的王至今仍徘徊於此。',
    },
  },

  underground_river: {
    id: 'underground_river',
    name: '地下河',
    zone: 'crystal_cave',
    image: 'underground_river.png',
    imagePrompt: '地下河 in crystal_cave, resource river room with clear underground water, glowing crystal fragments, mossy banks and green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain river, clear lantern light',
    description:
      '地下河在洞窟暗處蜿蜒流動，清澈河水能看見河床上的發光水晶碎片，岸邊螢光苔蘚散出柔綠光。西面回螢光隧道，東方地底瀑布的轟鳴越來越近，水面偶爾泛起不自然漣漪。河泥上留著水晶蜥蜴爪印、被沖來的礦石袋和磨圓的晶核碎片，岸壁潮痕則指出水位曾突然上漲，讓這條河既是採集水線，也是伏擊容易發生的低光通道。',
    exits: [
      { direction: 'west', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
      { direction: 'east', targetRoomId: 'underground_waterfall', description: '河水向東方流去，傳來瀑布的轟鳴' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[~]',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '水面下的漣漪並非魚群——有大型水棲生物潛伏在河底。',
      treasure: '河床上的水晶碎片中混雜著打磨過的寶石，是河水沖刷而來的。',
      spirit: '螢光苔蘚的生長形態像是文字，記錄著地下河的源頭之秘。',
    },
  },

  mine_depths: {
    id: 'mine_depths',
    name: '礦脈深處',
    zone: 'crystal_cave',
    image: 'mine_depths.png',
    imagePrompt: '礦脈深處 in crystal_cave, resource combat room with exposed ore veins, hot crystals, heavy pressure and mining scars, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '礦脈深處的岩壁裸露出金屬光澤，巨型水晶像熔爐般散出熱能，使空氣沉重而壓抑。北面回水晶大廳，東側階梯通往古代祭壇，西邊廢礦工營地傳來殘破滑輪的空響。地面有新舊鑿痕、晶粉和守衛石像碎片，礦車軌痕在熱風裡若隱若現；沿軌可找到營地事故記錄，直接走向祭壇則會更早接觸高階守衛與封印能量。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_hall', description: '返回水晶大廳' },
      { direction: 'east', targetRoomId: 'ancient_altar', description: '礦脈深處有通往古代祭壇的階梯' },
      { direction: 'west', targetRoomId: 'crystal_cave_miner_camp', description: '廢棄滑輪聲從西側傳來' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[D]',
    mapX: 1,
    mapY: 10,
    guardianHints: {
      creature: '礦脈深處的熱氣不自然地波動，某種強大的存在正在甦醒。',
      treasure: '最大的水晶內部包裹著一件遠古的武器，需要特殊的方法才能取出。',
      spirit: '礦脈散發的能量來自大地之心，地底種族曾以此為信仰的核心。',
    },
  },

  // ─── 湖畔城鎮 (lakeside_town) ──────────────────────────

  town_gate: {
    id: 'town_gate',
    name: '城門口',
    zone: 'lakeside_town',
    image: 'town_gate.png',
    imagePrompt: '城門口 in lakeside_town, entrance town service room with stone gate, lake wind, shield crest, guards and warm torch light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '城門口立在湖畔城鎮西緣，厚木門與石塔夾住通往十字路口的舊道，東面商業街的招牌與燈火從門洞裡延伸出來，南側海邊棧道傳來潮聲。門柱上掛著入城稅牌、失物告示與被雨水洗淡的巡邏名單。地面從外路黃土轉成平整青石，車轍在門檻處變淺，顯出城內外秩序的分界。守門火盆長年不滅，讓返城、出城與港邊動線都在此收束。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'crossroads',
        description: '西側出城後要沿湖畔外牆緩坡與車轍走完整段城外道路，才會回到十字路口',
      },
      { direction: 'east', targetRoomId: 'market_street', description: '進入商業街' },
      {
        direction: 'south',
        targetRoomId: 'coastal_boardwalk',
        description: '城門南側需穿過湖畔外道與鹽風木階，才會接上海岸棧道入口，沿途能聽見海鷗聲',
      },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 6,
    guardianHints: {
      creature: '城牆的裂縫中有蟲蟻出沒，似乎有什麼在侵蝕地基。',
      treasure: '衛兵換班時，城門邊的暗格會短暫露出——裡面可能有走私品。',
      spirit: '城門上的徽記蘊含著古老的守護魔法，至今仍在保護著城鎮。',
    },
  },

  market_street: {
    id: 'market_street',
    name: '商業街',
    zone: 'lakeside_town',
    image: 'market_street.png',
    imagePrompt: '商業街 in lakeside_town, town service market street with weapon stalls, spice smoke, hanging lanterns and lake reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '商業街從城門口向東伸入城鎮，兩側木樓掛滿價牌、布篷與油燈，東面城鎮廣場的人聲在街尾變得開闊，北側酒館的暖光從招牌下漏出。石路上有菜籃、陶罐、鞋印與馬車壓出的淺痕，攤位後方則藏著短短貨巷。街道氣味混著烤麵包、濕木和銅幣味，讓這段路不像單純通道，更像湖畔城日常交易的主脈。',
    exits: [
      { direction: 'west', targetRoomId: 'town_gate', description: '回到城門口' },
      { direction: 'east', targetRoomId: 'town_plaza', description: '前往城鎮廣場' },
      { direction: 'north', targetRoomId: 'tavern', description: '北邊傳來酒香和歡笑聲' },
    ],
    mapSymbol: '[$]',
    mapX: 4,
    mapY: 6,
    guardianHints: {
      creature: '屋頂上有快速移動的身影——可能是城鎮裡的竊賊或流浪貓。',
      treasure: '某個攤位上不起眼的角落裡，混雜著一件價值連城的古物。',
      spirit: '商業街的喧囂中夾雜著來自異國的低語，有個商人似乎不是普通人。',
    },
  },

  town_plaza: {
    id: 'town_plaza',
    name: '城鎮廣場',
    zone: 'lakeside_town',
    image: 'town_plaza.png',
    imagePrompt: '城鎮廣場 in lakeside_town, town core plaza with hero fountain, lake sunlight, job hall banners and arena arch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '城鎮廣場位於湖畔城的中心，噴泉、公告柱與四向石路把人流自然分開。西側商業街帶來商販叫賣，北面轉職大廳的高柱投下長影，南側競技場入口傳來歡呼，東面拍賣場掛著醒目的紅布棚。廣場石板被長年腳步磨得發亮，水渠邊放著花籃和舊節慶旗座。城鎮節奏在此最為穩定，所有遠行、訓練、交易與休息都能在聲音中找到方向。',
    exits: [
      { direction: 'west', targetRoomId: 'market_street', description: '回到商業街' },
      { direction: 'north', targetRoomId: 'class_change_hall', description: '轉職大廳的宏偉大門' },
      { direction: 'south', targetRoomId: 'arena_entrance', description: '競技場的入口' },
      { direction: 'east', targetRoomId: 'auction_house', description: '東邊是氣派的拍賣場' },
    ],
    mapSymbol: '[ ]',
    mapX: 5,
    mapY: 6,
    guardianHints: {
      creature: '噴泉中的英雄雕像眼中偶爾閃過光芒——可能是魔法守衛在巡邏。',
      treasure: '英雄雕像的底座上有可以按下的機關，但需要特定的順序。',
      spirit: '雕像紀念的英雄並未真正死去——他的靈魂仍守護著這座城鎮。',
    },
  },

  class_change_hall: {
    id: 'class_change_hall',
    name: '轉職大廳',
    zone: 'lakeside_town',
    image: 'class_change_hall.png',
    imagePrompt: '轉職大廳 in lakeside_town, town service class hall with four profession pillars, ritual circle, mentor alcoves and soft magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '轉職大廳位於城鎮廣場北側，四根高柱支起穹頂，柱面刻著劍、杖、弓與聖徽，南面廣場水聲從開門處傳入，東側走廊連向公會大廳。大廳中央有圓形石紋，燈火沿符線緩慢流動，四周擺放導師座椅、訓練木牌與舊誓詞。地面被許多靴印磨成暗亮環形，像不同道路在此短暫交會後重新分開。整個空間安靜而莊重，帶著選擇前的重量。',
    exits: [
      { direction: 'south', targetRoomId: 'town_plaza', description: '回到城鎮廣場' },
      { direction: 'east', targetRoomId: 'guild_hall', description: '東邊走廊通往公會大廳' },
    ],
    npcs: [
      'sword_instructor',
      'magic_instructor',
      'ranger_instructor',
      'temple_priest',
    ],
    mapSymbol: '[C]',
    mapX: 5,
    mapY: 5,
    guardianHints: {
      creature: '魔法陣的能量有時會吸引元素生物，要小心突然出現的火焰精靈。',
      treasure: '四根巨柱的底座各藏著一個密室，裡面存放著各職業的秘傳武器。',
      spirit: '四位導師的力量在這裡交匯，大廳蘊含著轉職者的祝福與詛咒。',
    },
  },

  arena_entrance: {
    id: 'arena_entrance',
    name: '競技場入口',
    zone: 'lakeside_town',
    image: 'arena_entrance.png',
    imagePrompt: '競技場入口 in lakeside_town, town service combat training room with circular arena gate, challenge board, torchlight and cheering crowd, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '競技場入口聳立在城鎮廣場南側，圓形銅門鑲著磨亮的勝場徽記，門後傳出觀眾席歡呼、木劍碰撞和沙地鼓聲。北面廣場噴泉可回望，門前告示板貼著賽程、報名名冊與安全條例，旁邊有傷藥架和洗砂水桶。火把照亮排隊欄杆與被踩硬的石階，地上散著斷木劍碎屑。此處仍屬城鎮安全邊緣，卻已能感到正式競技區的熱度。',
    exits: [
      { direction: 'north', targetRoomId: 'town_plaza', description: '回到城鎮廣場' },
    ],
    mapSymbol: '[A]',
    mapX: 5,
    mapY: 7,
    guardianHints: {
      creature: '競技場的地下通道裡，有被淘汰的魔獸在暗處遊蕩。',
      treasure: '告示板背面刻著一串密碼，輸入後似乎能兌換隱藏獎勵。',
      spirit: '競技場的觀眾席上有無數戰魂在觀戰，他們的歡呼能激發鬥志。',
    },
  },

  // ─── 新手村外圍 (starter_village_ext) ──────────────────

  village_backhill: {
    id: 'village_backhill',
    name: '村莊後山',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'village_backhill.png',
    imagePrompt: '村莊後山 in starter_village_ext, entrance combat hillside room with mossy boulders, wild grass, village view and morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain village, clear lantern light',
    description:
      '村莊背後的小山丘，長滿了野草和灌木。山坡上散落著幾塊長滿苔蘚的巨石，。村莊後山周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '偶爾能看到綠色的半透明生物在草叢間蠕動。' +
      '從山頂可以俯瞰整個新手村，視野開闊。下坡能回村莊廣場，東側小路通往溪邊，西側則有破舊木屋；玩家可在巨石下 search 找到先祖符印或驚動史萊姆。山風會把村口鐘聲和溪水聲一起送上坡頂，讓新手能判斷安全退路與下一個練級方向。草叢裡的腳印分成田鼠與史萊姆拖痕，提示玩家先清理小怪再調查石縫寶物。坡頂木牌還標出村莊、溪流、磨坊與墓地方向，是外圍區域的第一個導航點與任務提示點。',
    exits: [
      { direction: 'south', targetRoomId: 'village_creek', description: '山坡小路繞向溪邊' },
      { direction: 'east', targetRoomId: 'village_outskirts', description: '山坡路接回村外小路' },
      { direction: 'west', targetRoomId: 'abandoned_cottage', description: '山坡上有一間破舊的小屋' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[M]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '巨石下方的陰暗處是史萊姆最愛的藏身地，搬開石頭會驚動牠們。',
      treasure: '山頂最大的巨石下似乎埋著什麼，泥土的顏色與周圍不同。',
      spirit: '這座小山是村莊的龍脈所在，據說建村的先祖將護村符印埋在了山頂。',
    },
  },

  village_creek: {
    id: 'village_creek',
    name: '小溪邊',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'village_creek.png',
    imagePrompt: '小溪邊 in starter_village_ext, resource combat creek room with clear water, smooth stones, reeds, slime bubbles and golden sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain water, clear lantern light',
    description:
      '一條清澈的小溪從後山蜿蜒流下，溪水潺潺作響，陽光在水面碎成萬千金色的碎片。小溪邊周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '溪邊的鵝卵石被水流打磨得光滑圓潤，水草在溪底輕輕搖擺，魚苗在石縫間穿梭。' +
      '幾隻綠史萊姆怪物在溪邊吸收水氣，半透明的身軀在陽光下閃爍著果凍般的光澤。' +
      '微風送來泥土和青草的清新氣息，偶爾傳來村婦在上游洗衣的捶打聲。',
    exits: [
      { direction: 'north', targetRoomId: 'village_backhill', description: '沿小路回到後山' },
      { direction: 'south', targetRoomId: 'village_farmland', description: '溪水流向農田方向' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'creek_mossling_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[~]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '溪底有異常大的水泡冒出，可能有史萊姆潛伏在水中。',
      treasure: '溪水沖刷的鵝卵石中，混著一顆不尋常的半透明石頭。',
      spirit: '小溪的水源來自山中的靈泉，飲用後據說能暫時恢復少量體力。',
    },
  },

  village_farmland: {
    id: 'village_farmland',
    name: '農田',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'village_farmland.png',
    imagePrompt: '農田 in starter_village_ext, resource combat farmland room with wheat rows, vegetable beds, rat holes and warm wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '整齊的田壟間種滿了小麥和蔬菜，金黃的穗子在微風中搖曳。農田周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '農夫們抱怨田鼠猖獗，辛苦種下的作物經常被啃食殆盡。' +
      '田埂上偶爾能看到灰色的小影子飛速竄過。北面溪水灌入水渠，東側果園飄來甜香，南方小路通往墓地前的村外；玩家可堵住田鼠洞、採集作物或調查工具棚。',
    exits: [
      { direction: 'north', targetRoomId: 'village_creek', description: '往溪邊走去' },
      { direction: 'east', targetRoomId: 'village_orchard', description: '旁邊就是果園' },
      {
        direction: 'south',
        targetRoomId: 'village_outskirts',
        description: '南側田埂要沿水渠外緣繞過幾排作物與田鼠洞，才接到村外小路入口',
      },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
    ],
    npcs: ['farmer'],
    mapSymbol: '[田]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '田壟間的小洞是田鼠的巢穴入口，堵住出口就能甕中捉鱉。',
      treasure: '農夫的工具棚裡有一把品質異常好的鋤頭，看起來不像普通農具。',
      spirit: '這片農田受到豐收女神的微弱祝福，每年第一批收成都會特別甜美。',
    },
  },

  village_orchard: {
    id: 'village_orchard',
    name: '果園',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'village_orchard.png',
    imagePrompt: '果園 in starter_village_ext, combat resource orchard with apple trees, fallen fruit, crow nests and dappled afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '果樹成排排列，枝頭掛滿了紅彤彤的蘋果和金黃的梨子，空氣中瀰漫著成熟水果的甜香。果園周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '烏鴉群經常光顧這裡偷食果實，牠們刺耳的嘎嘎叫聲迴盪在樹梢間，令果農不勝其煩。' +
      '地面上散落著被啄食過的果核和半腐爛的落果，田鼠在果樹根部的落葉堆中窸窣竄動。' +
      '陽光透過茂密的枝葉灑下斑駁的光影，這片果園雖然豐饒，卻也是小型害獸的樂園。',
    exits: [
      { direction: 'west', targetRoomId: 'village_farmland', description: '回到農田' },
    ],
    monsters: [
      { monsterId: 'orchard_sharpbeak_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[果]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '果樹頂端的烏鴉巢裡有好幾隻幼鳥，母鴉會拼命保護牠們。',
      treasure: '最老的那棵果樹的樹洞裡，塞著一個布袋，裡面似乎有東西。',
      spirit: '果園的第一棵樹是精靈旅人種下的，它的果實有輕微的魔力回復效果。',
    },
  },

  graveyard_entrance: {
    id: 'graveyard_entrance',
    name: '墓地入口',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'graveyard_entrance.png',
    imagePrompt: '墓地入口 in starter_village_ext, elite combat graveyard gate with rusted iron, crooked tombstones, dead flowers and cold moonlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain gate, clear lantern light',
    description:
      '一道鏽蝕的鐵門半開著，門後是一片荒涼的墓地。歪斜的墓碑在月光下投射出長長的陰影，。墓地入口周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '地面上散落著枯萎的花束。空氣中瀰漫著陰冷的氣息，' +
      '隱約可以聽到骨頭碰撞的聲響。北面可退回村外小路，東側瞭望台仍有微光，南方鎖住的鐵門提示需要鑰匙。' +
      '此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。' +
      '牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'village_outskirts', description: '沿著小路回到村外' },
      { direction: 'east', targetRoomId: 'watchtower', description: '遠處有一座瞭望台' },
      {
        direction: 'south',
        targetRoomId: 'graveyard_depths',
        description: '南側鏽蝕鐵門後要穿過彎曲墓道與低矮石階，才會抵達更深處的墓地',
        locked: true,
        keyItemId: 'bronze_key',
      },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[†]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '某些墓碑前的泥土有被翻動的痕跡，骷髏兵隨時可能從地下爬出。一股不尋常的威壓從墓地深處傳來。',
      treasure: '墓地管理人的小屋裡鎖著一本名冊，記載著埋葬者生前的寶物清單。',
      spirit: '墓地中飄蕩著不安的靈魂，他們渴望有人完成他們未竟的遺願。',
    },
  },

  graveyard_depths: {
    id: 'graveyard_depths',
    name: '墓地深處',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'graveyard_depths.png',
    imagePrompt: '墓地深處 in starter_village_ext, boss event graveyard room with ancient sarcophagus, broken bones, glowing seals and oppressive blue moonlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '穿過鏽蝕的鐵門，你來到了墓地最深處。這裡的墓碑更加古老，刻著早已被遺忘的文字。墓地深處周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '地面上散落著碎裂的骨骸和褪色的花環，空氣中彌漫著死亡的氣息。' +
      '一座巨大的石棺矗立在中央，封印的符文依然微微發光。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'graveyard_entrance',
        description: '北側回程要沿彎曲墓道穿過低矮石階與鏽門陰影，才回到墓地入口',
      },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 35 },
      { monsterId: 'skeleton_general', maxCount: 2, respawnSeconds: 600 },
    ],
    mapSymbol: '[墓]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '石棺中的封印正在逐漸衰弱，某些夜晚能聽到棺內傳來的敲擊聲。',
      treasure: '古老墓碑的底座有一個暗格，裡面可能藏著往生者的遺物。',
      spirit: '這裡埋葬著遠古時期一位強大的死靈法師，他的力量至今仍在影響著這片土地。',
    },
  },

  abandoned_cottage: {
    id: 'abandoned_cottage',
    name: '廢棄小屋',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'abandoned_cottage.png',
    imagePrompt: '廢棄小屋 in starter_village_ext, hidden exploration cottage with collapsed roof, vines, broken window and dusty lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '一間被藤蔓纏繞的破舊木屋，屋頂塌了一半，窗戶早已破碎。廢棄小屋周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '屋內堆滿了落葉和碎木，角落裡有動物築巢的痕跡。' +
      '據村民說，這裡曾住著一位古怪的老巫師。東面回後山，南側地板裂縫下似乎藏著地窖入口；玩家可 search 壁爐暗格取得藥水，也要小心屋樑上的烏鴉群。',
    exits: [
      { direction: 'east', targetRoomId: 'village_backhill', description: '回到後山' },
      { direction: 'south', targetRoomId: 'starter_ext_root_cellar', description: '地板裂縫下有根窖入口' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    groundItems: [
      { itemId: 'small_hp_potion', description: '地上散落著一瓶藥水' },
    ],
    mapSymbol: '[屋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '屋樑上棲息著一群烏鴉，走進去會驚動牠們。',
      treasure: '壁爐的暗格裡還殘留著老巫師的東西——一本半焦的筆記和幾瓶藥水。',
      spirit: '老巫師的魔力殘留仍在保護著這間小屋，牆壁上的符文在夜晚會微微發光。',
    },
  },

  village_outskirts: {
    id: 'village_outskirts',
    name: '村外小路',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'village_outskirts.png',
    imagePrompt: '村外小路 in starter_village_ext, main route combat room with dirt road, wildflowers, animal tracks and soft cloudy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain road, clear lantern light',
    description:
      '一條蜿蜒的泥土小路連接著村莊和外圍區域，路旁的野花隨風搖曳。村外小路周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '路面上有大小不一的腳印，看得出來常有野生動物經過。' +
      '這裡是前往墓地和瞭望台的必經之路。北面回農田，南方鐵門通向墓地，東邊可回村口；玩家可 inspect 大樹下的石堆，追蹤田鼠怪物、烏鴉伏擊與可疑腳印。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'village_farmland',
        description: '北側要沿村外泥路爬上田埂，繞過野花坡與幾排作物後才進入農田',
      },
      { direction: 'south', targetRoomId: 'graveyard_entrance', description: '遠處隱約可見鐵門' },
      {
        direction: 'east',
        targetRoomId: 'village_gate',
        description: '東側回村口要沿野花坡上行，繞過木柵牆與守衛火把後才到木門前方',
      },
      { direction: 'west', targetRoomId: 'village_backhill', description: '山坡路通往村莊後山' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '路邊的草叢在無風的情況下搖動，裡面藏著覓食的田鼠。',
      treasure: '小路拐彎處的大樹下，有人用石頭堆了一個小標記，下面埋著東西。',
      spirit: '這條小路是古代商道的一部分，行走其上偶爾能感受到旅人的足跡殘影。',
    },
  },

  watchtower: {
    id: 'watchtower',
    name: '瞭望台',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'watchtower.png',
    imagePrompt: '瞭望台 in starter_village_ext, elite exploration watchtower with broken stone stairs, torn banner, crow perches and pale dawn horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain stone, clear lantern light',
    description:
      '一座半廢棄的石造瞭望台聳立在小丘上，登頂可以遠眺四方。瞭望台周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '塔頂的旗幟早已破爛不堪，但殘存的守衛設施顯示這裡曾是重要的防禦據點。' +
      '烏鴉和骷髏兵出沒其間，讓這裡充滿危險。西側下坡回墓地入口，玩家可 inspect 破旗和警鐘，判斷亡者從哪條路靠近村莊。',
    exits: [
      { direction: 'west', targetRoomId: 'graveyard_entrance', description: '下坡回到墓地入口' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 45 },
    ],
    npcs: ['starter_ext_watch_patrol'],
    mapSymbol: '[塔]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '塔頂是烏鴉的棲息地，而骷髏兵在塔內的樓梯間巡邏。',
      treasure: '瞭望台頂層的箱子裡還留著昔日守衛的裝備和物資。',
      spirit: '瞭望台最後一任守衛的靈魂仍在值守，他會在危險逼近時發出警告的光芒。',
    },
  },

  starter_ext_old_mill_path: {
    id: 'starter_ext_old_mill_path',
    name: '舊磨坊小徑',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_old_mill_path.png',
    imagePrompt: '舊磨坊小徑 in starter_village_ext, main route room with abandoned mill wheel, muddy track, grain sacks and slanting morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '一條泥濘小徑沿著農田灌渠延伸到舊磨坊，半塌的水車仍被溪水推得吱呀作響，空氣裡有潮木和舊麥粉味。西側回農田，東面可到蛙鳴池，南邊灰煙指向炭窯。路旁散落破麻袋與田鼠怪物腳印，旅人可 搜索 水車底部尋找丟失麥袋，也可能驚動躲在糧袋裡的鼠群。舊磨坊小徑周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'village_farmland',
        description: '西側田壟要沿舊水車溝渠繞回農田，途中會穿過半塌磨坊木架下方',
      },
      { direction: 'south', targetRoomId: 'starter_ext_frog_pond', description: '溪聲通往蛙鳴池' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
    ],
    mapSymbol: '[m]',
    mapX: 2,
    mapY: 1,
  },

  starter_ext_beehive_grove: {
    id: 'starter_ext_beehive_grove',
    name: '蜂巢樹叢',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_beehive_grove.png',
    imagePrompt: '蜂巢樹叢 in starter_village_ext, resource exploration grove with hanging beehives, wildflowers, buzzing insects and warm amber light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '果園東側的低矮樹叢掛著數個野蜂巢，金色蜂蠟在枝葉間發亮，花香與蜂鳴讓空氣微微震動。西邊回果園，南側有一片整理過的藥草圃。落果和蜂蜜吸引田鼠與烏鴉徘徊，旅人可採集蜂蠟、觀察 樹幹抓痕判斷害獸路線，也要避開搖晃蜂巢造成的額外危險。蜂巢樹叢周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'village_orchard',
        description: '西側要穿過掛滿蜂巢的低矮樹叢，繞過落果堆後才回到村外果園內側',
      },
      { direction: 'south', targetRoomId: 'starter_ext_herb_garden', description: '藥草香從南側飄來' },
    ],
    monsters: [
      { monsterId: 'orchard_sharpbeak_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[蜂]',
    mapX: 5,
    mapY: 1,
  },

  starter_ext_herb_garden: {
    id: 'starter_ext_herb_garden',
    name: '藥草圃',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_herb_garden.png',
    imagePrompt: '藥草圃 in starter_village_ext, resource room with raised herb beds, dew, clay markers and soft green morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '村醫照看的藥草圃被矮籬圍住，薄荷、止血草與紫葉草分成整齊小畦，露水在葉尖閃著柔綠光。北面是蜂巢樹叢，西南可繞回村外小路。泥土裡有被啃咬的根莖和小腳印，旅人可 採集 藥草、搜索 破陶牌找配方線索，也能追查田鼠是否把草根拖向墓地。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_beehive_grove', description: '回到蜂巢樹叢' },
      { direction: 'west', targetRoomId: 'starter_ext_training_clearing', description: '西側木樁小徑接往練習空地' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    npcs: ['starter_ext_field_medic'],
    mapSymbol: '[草]',
    mapX: 5,
    mapY: 2,
  },

  starter_ext_frog_pond: {
    id: 'starter_ext_frog_pond',
    name: '蛙鳴池',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_frog_pond.png',
    imagePrompt: '蛙鳴池 in starter_village_ext, resource combat pond with reeds, lily pads, slime bubbles and cool blue reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '磨坊旁的小池被蘆葦和睡蓮包圍，蛙鳴在水面迴盪，藍綠水光照出史萊姆怪物留下的黏液泡。西側回舊磨坊小徑，南面是斷裂木橋，北方溪線可接回小溪邊。旅人可釣魚、採集濕地材料，或 觀察 泥岸腳印尋找被拖走的農具；靠近深水時容易驚動吸水的綠史萊姆。蛙鳴池周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'village_outskirts', description: '東側木樁小徑回到村外小路' },
      { direction: 'north', targetRoomId: 'starter_ext_old_mill_path', description: '北側泥徑回到舊磨坊小徑' },
      { direction: 'south', targetRoomId: 'starter_ext_charcoal_kiln', description: '南側灰煙來自炭窯' },
      { direction: 'west', targetRoomId: 'starter_ext_ruined_bridge', description: '西側水面下可見斷橋木樁' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'creek_mossling_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: 2,
  },

  starter_ext_training_clearing: {
    id: 'starter_ext_training_clearing',
    name: '練習空地',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_training_clearing.png',
    imagePrompt: '練習空地 in starter_village_ext, combat training clearing with straw dummies, trampled grass, weapon rack and clear daylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain fantasy terrain, clear lantern light',
    description:
      '村外林線前有一塊被踩平的練習空地，草地中央立著稻草靶與舊木盾，旁邊武器架上掛著鈍劍和練習弓。北面可回村口，西側小路接村外小路，東邊有可疑腳印通往盜匪踩出的支線。旅人可在此安全練習攻擊節奏、觀察 靶心箭痕，也能追蹤偷走補給的田鼠。練習空地周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'village_outskirts',
        description: '西側草路先繞過武器架與低矮灌木，再接到村外小路的野花坡下方',
      },
      { direction: 'east', targetRoomId: 'starter_ext_bandit_footpath', description: '可疑腳印往東延伸' },
    ],
    monsters: [
      { monsterId: 'training_dummy', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[訓]',
    mapX: 4,
    mapY: 2,
  },

  starter_ext_bandit_footpath: {
    id: 'starter_ext_bandit_footpath',
    name: '盜匪足跡',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_bandit_footpath.png',
    imagePrompt: '盜匪足跡 in starter_village_ext, hidden combat footpath with snapped twigs, boot prints, thorn shadows and muted dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '一條被硬靴踩出的窄路藏在荊棘後，斷枝、布條和偷來的麻繩沿路散落，夕光被樹影切得很碎。西面回練習空地，南側通往空心樹樁，東面隱約能看見柳樹神龕。這裡提示村外已不只有小怪，旅人可 搜索 足跡找盜匪藏物，也要準備面對落單盜賊或被驚動的烏鴉。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'west', targetRoomId: 'starter_ext_training_clearing', description: '回到練習空地' },
      { direction: 'south', targetRoomId: 'starter_ext_hollow_stump', description: '足跡繞向空心樹樁' },
      { direction: 'east', targetRoomId: 'starter_ext_willow_shrine', description: '柳枝後有一座小神龕' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[跡]',
    mapX: 5,
    mapY: 3,
  },

  starter_ext_willow_shrine: {
    id: 'starter_ext_willow_shrine',
    name: '柳樹神龕',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_willow_shrine.png',
    imagePrompt: '柳樹神龕 in starter_village_ext, landmark exploration shrine under willow tree, hanging charms, small stone altar and silver dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain shrine, clear lantern light',
    description:
      '古老柳樹垂下長長枝條，枝間掛著村民祈願木牌，石製小神龕被銀色暮光照亮，空氣裡有濕葉與香灰味。西側藏著盜匪足跡，南邊坡道通往墓地入口，東面有繞回瞭望台的窄路。神龕前的供盤被移動過，旅人可 觀察 木牌找出失蹤孩童的願望，也能 搜索 祭壇底座取得一次性祝福或任務線索。柳枝上有烏鴉羽毛與被扯斷的紅線，暗示盜匪曾在這裡觀察村民動向。若旅人先清理周圍小怪，再調查供盤灰痕，就能把墓地、瞭望台與村外支線串在一起。神龕背面刻著舊巡邏記號，提示安全返回村口的路線標示',
    exits: [
      { direction: 'west', targetRoomId: 'starter_ext_bandit_footpath', description: '荊棘路回到盜匪足跡' },
      {
        direction: 'south',
        targetRoomId: 'graveyard_entrance',
        description: '南側坡道被柳枝和墓地冷霧遮住，必須沿石階下行才到墓地入口鐵門',
      },
      {
        direction: 'east',
        targetRoomId: 'watchtower',
        description: '東側窄路繞過柳根與碎石坡，沿瞭望台背面的草階上行才抵達塔下',
      },
    ],
    monsters: [
      { monsterId: 'orchard_sharpbeak_crow', maxCount: 2, respawnSeconds: 40 },
    ],
    groundItems: [
      { itemId: 'small_mp_potion', description: '神龕供盤旁放著一瓶微光藥水' },
      { itemId: 'willow_prayer_tag', description: '柳根旁落著一片寫有名字的祈願木牌' },
    ],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: 4,
  },

  starter_ext_root_cellar: {
    id: 'starter_ext_root_cellar',
    name: '根窖',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_root_cellar.png',
    imagePrompt: '根窖 in starter_village_ext, hidden resource cellar with root shelves, clay jars, dangling herbs and single lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain root, clear lantern light',
    description:
      '廢棄小屋地板下藏著低矮根窖，粗樹根穿過土牆，陶罐、乾草藥與破布袋散發潮土氣味，唯一的提燈把木架影子拉長。北側梯子回小屋，深處根鬚指向更遠的空心樹樁，但需要從盜匪足跡繞路接近。旅人可 搜索 陶罐取得補給或配方碎片，也可能撞見偷藏糧食的田鼠，是早期資源與隱藏探索節點。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_cottage', description: '木梯回到廢棄小屋' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'hollow_stump_hoarder', maxCount: 1, respawnSeconds: 600 },
    ],
    groundItems: [
      { itemId: 'small_hp_potion', description: '陶罐旁藏著一瓶未開封的紅色藥水' },
    ],
    mapSymbol: '[窖]',
    mapX: 1,
    mapY: 1,
  },

  starter_ext_charcoal_kiln: {
    id: 'starter_ext_charcoal_kiln',
    name: '炭窯',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_charcoal_kiln.png',
    imagePrompt: '炭窯 in starter_village_ext, resource combat kiln room with smoking charcoal mound, chopped logs, ash footprints and orange ember light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain ash, clear lantern light',
    description:
      '舊炭窯靠在林邊土坡下，黑色木炭堆仍冒著微煙，斧痕木柴和灰色腳印散在泥地上，空氣充滿焦木味。北面回舊磨坊小徑，東側灰路連到斷橋，南邊可繞向墓地入口。旅人可採集木炭材料、觀察 灰腳印追蹤盜匪，也要留意被煙味吸引來的烏鴉和田鼠。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_frog_pond', description: '北側灰路回到蛙鳴池' },
      { direction: 'east', targetRoomId: 'starter_ext_ruined_bridge', description: '灰路通向斷橋' },
      {
        direction: 'south',
        targetRoomId: 'graveyard_entrance',
        description: '南側林邊小路要穿過炭灰腳印、低矮枯木與一段黑土斜坡，最後繞到墓地鐵門前方',
      },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[炭]',
    mapX: 2,
    mapY: 3,
  },

  starter_ext_ruined_bridge: {
    id: 'starter_ext_ruined_bridge',
    name: '斷橋',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_ruined_bridge.png',
    imagePrompt: '斷橋 in starter_village_ext, event route room with broken wooden bridge, shallow ravine, mossy posts and cloudy side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain bridge, clear lantern light',
    description:
      '一座老木橋斷在淺溝上方，腐朽木板垂進水裡，橋樁長滿苔蘚，陰雲讓溝底水面顯得發冷。北面通蛙鳴池，西側灰路回炭窯，東邊可接村外小路。這裡是路線事件點，旅人可 觀察 斷木判斷是否被人破壞，搜索 橋下取回掉落貨物，也可能被史萊姆從水溝邊偷襲。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'east', targetRoomId: 'starter_ext_frog_pond', description: '東側水聲通回蛙鳴池' },
      { direction: 'west', targetRoomId: 'starter_ext_charcoal_kiln', description: '灰路回到炭窯' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 2,
  },

  starter_ext_hollow_stump: {
    id: 'starter_ext_hollow_stump',
    name: '空心樹樁',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_hollow_stump.png',
    imagePrompt: '空心樹樁 in starter_village_ext, hidden elite event room with giant hollow stump, root tunnels, stolen trinkets and green shaft light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain root, clear lantern light',
    description:
      '一截巨大的空心樹樁倒在灌木深處，內部被挖出根道，偷來的鈕扣、麥粒和小銅幣塞在樹洞裡，綠色光束從裂縫照入。北側是盜匪足跡，西邊根痕指向遠處根窖但無法直接通行，南面小坡可回墓地深處外牆。旅人可 搜索 樹洞取得一次性藏物，觀察 根道確認小怪巢穴，也要準備面對較密集的田鼠群與烏鴉騷擾。樹洞底部有新鮮爪痕和被咬破的任務布袋，提示這裡是低等區域的小型精英事件點；若先調查根窖線索，再從盜匪足跡繞進來，可以避開部分迷路風險並保留撤退路。樹皮刻痕還指向墓地外牆，暗示盜匪與亡者活動可能相互牽連，需要追查來源處',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_bandit_footpath', description: '回到盜匪足跡' },
      {
        direction: 'south',
        targetRoomId: 'graveyard_depths',
        description: '南側小坡沿根道靠近墓地深處外牆，穿過倒木與碎碑後才抵達外門',
      },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 4, respawnSeconds: 25 },
      { monsterId: 'orchard_sharpbeak_crow', maxCount: 1, respawnSeconds: 35 },
      { monsterId: 'hollow_stump_hoarder', maxCount: 1, respawnSeconds: 600 },
    ],
    groundItems: [
      { itemId: 'rare_fossil', description: '樹洞深處塞著一塊像骨片的奇特化石' },
    ],
    mapSymbol: '[樁]',
    mapX: 4,
    mapY: 4,
  },

  // ─── 東方海岸 (eastern_coast) ──────────────────────────

  coastal_boardwalk: {
    id: 'coastal_boardwalk',
    name: '海邊棧道',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'coastal_boardwalk.png',
    imagePrompt: '海邊棧道 in eastern_coast, entrance route room with salt-worn wooden boardwalk, fishing nets, gulls and bright sea wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain sea, clear lantern light',
    description:
      '海邊棧道沿著海岸線延伸，鹽蝕木板在腳下吱嘎作響，欄杆上掛著漁網、曬乾海星與被風磨白的繩結。北側道路回到城門口，南面木階落向沙灘，東側碼頭燈影引到漁村碼頭。鹹濕海風夾著海藻與魚腥味撲面而來，遠處海面波光破碎，海鷗低掠浪尖。入口告示牌早被風雨沖淡，只剩潮痕與抓痕，讓這條通往東海岸的木道帶著不穩定的海潮警告。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'town_gate',
        description: '沿棧道北返時要穿過鹽風木階與湖畔外道，最後回到城門口，城牆鐘聲會逐漸清楚',
      },
      { direction: 'south', targetRoomId: 'sandy_beach', description: '沙灘在前方延伸' },
      { direction: 'east', targetRoomId: 'fishing_dock', description: '遠處可以看到漁村碼頭' },
    ],
    npcs: ['ship_captain', 'shipwright'],
    mapSymbol: '[棧]',
    mapX: 4,
    mapY: 5,
    guardianHints: {
      creature: '棧道下方的海水中偶爾能看到陰影掠過，海中生物在此巡遊。',
      treasure: '棧道的木板之間卡著幾枚被海水侵蝕的古老硬幣。',
      spirit: '這條棧道是古代海上貿易的起點，殘留著水手們啟航時的期盼。',
    },
  },

  sandy_beach: {
    id: 'sandy_beach',
    name: '沙灘',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'sandy_beach.png',
    imagePrompt: '沙灘 in eastern_coast, combat beach room with white sand, crab holes, shells, surf foam and hard noon sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain sand, clear lantern light',
    description:
      '沙灘鋪著細軟白沙，陽光落下時像碎銀般閃動，海浪一波波推上岸，留下泡沫、彩貝與被沖散的海藻。北面木階接回海邊棧道，南側濕滑岩帶進入潮間帶，東邊白色燈塔立在礁石上。幾隻巨大海蟹橫行沙面，螯鉗在光裡泛著硬殼反光，遠處魚群偶爾躍出水面。沙地上有漁民舊腳印與被拖走的魚簍痕，使這片明亮海岸也藏著潮水退去後的危險。',
    exits: [
      { direction: 'north', targetRoomId: 'coastal_boardwalk', description: '回到棧道' },
      { direction: 'south', targetRoomId: 'tidal_zone', description: '沿海岸往潮間帶走' },
      { direction: 'east', targetRoomId: 'lighthouse', description: '東側白石路通往燈塔塔基' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'reefback_crab_guard', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: ' . ',
    mapX: 4,
    mapY: 6,
    guardianHints: {
      creature: '沙灘上的小洞是海蟹的巢穴，踩到洞口會驚動裡面的大蟹。',
      treasure: '退潮後的沙灘上偶爾會露出被海水沖上來的寶物。',
      spirit: '沙灘上的貝殼裡封存著海之歌，靠近耳邊能聽到遠古的旋律。',
    },
  },

  tidal_zone: {
    id: 'tidal_zone',
    name: '潮間帶',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'tidal_zone.png',
    imagePrompt: '潮間帶 in eastern_coast, resource combat tidepool room with wet rocks, kelp, barnacles, jellyfish pools and silver tide light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '潮間帶佈滿濕滑岩石、海藻、藤壺與大小水窪，退潮後的淺池裡漂著半透明水母和細小銀魚。北面可回沙灘，南側黑暗洞口通向海蝕洞，東面水道接到珊瑚淺灘。岩面被潮水磨得發亮，腳邊可見被浪推來的貝殼、半寶石與斷裂魚鉤。潮位在石縫間緩慢回升，水窪彼此連成細線，使這片地帶像海與陸之間短暫露出的呼吸縫。',
    exits: [
      { direction: 'north', targetRoomId: 'sandy_beach', description: '回到沙灘' },
      { direction: 'south', targetRoomId: 'sea_cave', description: '岩壁上有一個黑暗的洞口' },
      {
        direction: 'east',
        targetRoomId: 'coral_shallows',
        description: '東側淺水區沿潮池與海藻帶延伸，繞過濕滑礁石後才到珊瑚淺灘，退潮時較安全',
      },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[潮]',
    mapX: 4,
    mapY: 7,
    guardianHints: {
      creature: '漲潮時水母會大量湧入，退潮時則是海蟹的天下。',
      treasure: '潮間帶的岩縫中卡著一些被海水打磨的半寶石。',
      spirit: '潮汐的規律蘊含著月神的意志，在滿月之夜此處的魔力最為強大。',
    },
  },

  sea_cave: {
    id: 'sea_cave',
    name: '海蝕洞',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'sea_cave.png',
    imagePrompt: '海蝕洞 in eastern_coast, combat cave room with glowing seaweed, echoing surf, tide pool entrance and blue-green cavern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain cave, clear lantern light',
    description:
      '海蝕洞由長年浪擊掏空而成，洞壁附著發光海藻，藍綠光在濕石上流動，潮聲在深處轟然迴盪。北側洞口回到潮間帶，東面水池下方的暗道連向海底洞穴。洞頂垂下鹽霜和細小貝殼，地面潮痕層層重疊，顯示漲潮時海水會封住低處入口。深池裡偶爾滑過蛇形黑影，發光海藻根部則纏著碎骨與古幣，使洞穴同時像避風處與通往海底的門。',
    exits: [
      { direction: 'north', targetRoomId: 'tidal_zone', description: '回到潮間帶' },
      {
        direction: 'east',
        targetRoomId: 'underwater_cave',
        description: '東側潮池暗道需潛過海蝕裂縫與水下氣泡帶，才通往海底洞穴，需注意呼吸空間',
      },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'tidepool_murk_eel', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[洞]',
    mapX: 4,
    mapY: 8,
    guardianHints: {
      creature: '洞壁上的刮痕是海蛇留下的——牠們在洞頂盤繞等待獵物。',
      treasure: '發光海藻的根部附近，岩壁中嵌著一顆海藍色的寶石。',
      spirit: '這個洞穴在上古時代是海之精靈的居所，牆壁上隱約可見精靈文字。',
    },
  },

  fishing_dock: {
    id: 'fishing_dock',
    name: '漁村碼頭',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'fishing_dock.png',
    imagePrompt: '漁村碼頭 in eastern_coast, town service fishing dock with moored boats, drying nets, tar barrels and gull-filled sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '漁村碼頭由簡樸木樁伸入蔚藍海面，幾艘漁船停在岸邊隨波搖晃，桅杆風向標嘎嘎轉動。西側棧道回到海邊棧道，南面沿岸石路通往燈塔。曬網木架散著陽光、海鹽和焦油味，漁民修補繩結的動作在海風裡顯得沉穩。碼頭邊堆著魚簍、浮標與被海蟹咬破的舊網，雲影掠過水面時，木板縫下會傳來細碎刮擦聲，像潮水裡還藏著別的動靜。',
    exits: [
      { direction: 'west', targetRoomId: 'coastal_boardwalk', description: '回到海邊棧道' },
      {
        direction: 'south',
        targetRoomId: 'lighthouse',
        description: '沿碼頭南側海岸繞過繩樁與潮濕岩面，才會走到燈塔塔基，途中風浪會拍上木板',
      },
    ],
    npcs: ['fisherman', 'seafood_merchant'],
    mapSymbol: '[碼]',
    mapX: 5,
    mapY: 5,
    guardianHints: {
      creature: '碼頭下方的木樁上附著大量海蟹，牠們在夜間會爬上甲板。',
      treasure: '老漁夫說他年輕時曾在附近海域撈起過一把古劍，但被他藏了起來。',
      spirit: '碼頭的第一根木樁是用聖木製成的，保護著漁村免受海難。',
    },
  },

  lighthouse: {
    id: 'lighthouse',
    name: '燈塔',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'lighthouse.png',
    imagePrompt: '燈塔 in eastern_coast, landmark combat lighthouse with white tower, rusted spiral stair, crow nests and sweeping beacon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain tower, clear lantern light',
    description:
      '燈塔矗立在海角礁石上，白色塔身被多年海風侵蝕出灰斑，仍以塔頂燈火切開海霧。北側沿岸可回漁村碼頭，西面沙路落向沙灘，東側海風石徑接到海崖步道，南方礁階通往珊瑚淺灘。生鏽螺旋樓梯貼著塔壁盤旋，烏鴉在殘破圍欄築巢，塔基周圍則有海蟹鑽過濕石縫。潮聲和燈火一明一暗，使這裡像海岸上仍在堅守的舊眼睛。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'fishing_dock',
        description: '北返漁村碼頭時需沿燈塔塔基與潮濕海岸繞行，海風會遮住腳步聲',
      },
      { direction: 'west', targetRoomId: 'sandy_beach', description: '西側白石路回到沙灘' },
      { direction: 'east', targetRoomId: 'cliff_path', description: '東側海風石徑通往海崖步道' },
      { direction: 'south', targetRoomId: 'coral_shallows', description: '沿海岸走向珊瑚淺灘' },
    ],
    monsters: [
      { monsterId: 'storm_gull', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'sea_crab', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[燈]',
    mapX: 5,
    mapY: 6,
    guardianHints: {
      creature: '燈塔頂部的烏鴉巢裡藏著閃亮的物品，牠們會攻擊靠近的人。',
      treasure: '燈塔守衛者的日誌中記載著海底寶藏的位置——如果能找到那本日誌的話。',
      spirit: '燈塔的光芒不僅僅是火焰，其中蘊含著守護精靈的力量。',
    },
  },

  coral_shallows: {
    id: 'coral_shallows',
    name: '珊瑚淺灘',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'coral_shallows.png',
    imagePrompt: '珊瑚淺灘 in eastern_coast, resource combat shallows with colorful coral, clear water, drifting jellyfish and rippled sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain water, clear lantern light',
    description:
      '珊瑚淺灘水色清澈，陽光在水底投成搖晃光網，紅、紫、金色珊瑚在淺流間層層展開。北方礁階回到燈塔，東側沙床連向珍珠床，西面水道退回潮間帶，南方暗流通往沉船殘骸。水母拖著透明觸鬚漂過珊瑚叢，較深處偶爾浮現蛇形陰影，帶起不自然水流。珊瑚枝端散出微弱螢光，讓這片海底花園在美麗之外保有清楚的危險層次。',
    exits: [
      { direction: 'north', targetRoomId: 'lighthouse', description: '回到燈塔' },
      { direction: 'east', targetRoomId: 'eastern_coast_pearl_bed', description: '東側淺水沙床接往珍珠床' },
      {
        direction: 'west',
        targetRoomId: 'tidal_zone',
        description: '西側需沿退潮水線穿過海藻與礁石縫，才能回到潮間帶，濕滑珊瑚會拖慢腳步',
      },
      { direction: 'south', targetRoomId: 'shipwreck', description: '遠處海面上露出船的殘骸' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: '[珊]',
    mapX: 5,
    mapY: 7,
    guardianHints: {
      creature: '珊瑚叢中有海蛇偽裝成海帶——注意辨別「海帶」的粗細和動靜。',
      treasure: '最大的珊瑚礁中心有一顆巨大的珍珠，但被海蛇守護著。',
      spirit: '珊瑚群落是海之精靈的花園，每一株珊瑚都承載著精靈的祝福。',
    },
  },

  shipwreck: {
    id: 'shipwreck',
    name: '沉船殘骸',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'shipwreck.png',
    imagePrompt: '沉船殘骸 in eastern_coast, elite combat shipwreck room with tilted hull, broken mast, barnacles, pirate shadows and stormy sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain sea, clear lantern light',
    description:
      '沉船殘骸斜卡在暗礁邊，船身佈滿藤壺和海藻，斷裂桅杆指向陰沉海面。北側水道回到珊瑚淺灘，南面暗礁浪聲更急，東邊海盜營火在破船板後閃動。甲板散落腐爛繩索、碎木箱與鏽蝕鉤具，船艙裂口裡傳出魚人濕重腳步和海盜低語。船長室的鏽鎖仍掛在門上，殘存航海圖碎片貼在積水裡，使整艘船像一段被海岸反覆啃咬的失敗航程。',
    exits: [
      { direction: 'north', targetRoomId: 'coral_shallows', description: '游回珊瑚淺灘' },
      {
        direction: 'south',
        targetRoomId: 'dark_reef',
        description: '沉船後方需繞過破船板與急流礁縫，才會進入暗礁區，破桅杆會遮住視線',
      },
      {
        direction: 'east',
        targetRoomId: 'pirate_camp',
        description: '東側擱淺船板接往海盜營地',
      },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 60 },
    ],
    groundItems: [
      { itemId: 'ancient_coin', description: '殘骸中閃爍著金色光芒' },
    ],
    mapSymbol: '[船]',
    mapX: 5,
    mapY: 8,
    guardianHints: {
      creature: '沉船的船艙裡躲著海盜和魚人，牠們在黑暗中有地利之便。',
      treasure: '船長室的保險箱雖然生鏽，但仍然鎖著——裡面可能有航海圖和寶藏。',
      spirit: '沉船上殘留著遇難水手的怨念，他們的靈魂在暴風雨之夜會重現最後的航行。',
    },
  },

  cliff_path: {
    id: 'cliff_path',
    name: '海崖步道',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'cliff_path.png',
    imagePrompt: '海崖步道 in eastern_coast, dangerous route cliff path with mossy rock wall, crab holes, strong wind and crashing waves below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain wall, clear lantern light',
    description:
      '海崖步道沿陡峭海壁蜿蜒而上，窄石路一側貼著佈滿苔蘚的岩壁，另一側直接落向浪花爆裂的深崖。西側海風石徑回到燈塔，北面斷木棧道通往斷裂棧橋，南側潮溝石階下到珍珠床。強風穿過岩縫發出尖銳嘯聲，崖壁洞穴裡有海蟹伸出螯鉗，白色水霧不時被浪頭拋上半空。石面舊繩樁與濕滑苔痕清楚標出步道邊界，讓每一步都帶著貼崖前行的緊張感。',
    exits: [
      { direction: 'west', targetRoomId: 'lighthouse', description: '西側海風石徑回到燈塔' },
      { direction: 'north', targetRoomId: 'eastern_coast_broken_pier', description: '北側斷木棧道通往斷裂棧橋' },
      { direction: 'south', targetRoomId: 'eastern_coast_pearl_bed', description: '南側潮溝石階下到珍珠床' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'reefback_crab_guard', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[崖]',
    mapX: 6,
    mapY: 6,
    guardianHints: {
      creature: '崖壁的洞穴裡塞滿了海蟹，牠們會用螯鉗攻擊經過洞口的人。',
      treasure: '崖壁的一處岩縫中卡著一把被風化的古劍，品質似乎還不錯。',
      spirit: '海崖曾是古代燈塔的所在地，守望者的精神仍在指引迷途的旅人。',
    },
  },

  pirate_camp: {
    id: 'pirate_camp',
    name: '海盜營地',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'pirate_camp.png',
    imagePrompt: '海盜營地 in eastern_coast, boss combat pirate camp with tents, campfire, stolen crates, black flag and red dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain camp, clear lantern light',
    description:
      '海盜營地隱在岩石環抱的海灣中，破帆帳篷、篝火和空酒桶散在濕石之間，黑旗被海風拉得獵獵作響。西側擱淺船板回到沉船殘骸，北面潮溝石階接向珍珠床，東側岩縫藏著海盜藏貨處。搶來的貨箱堆在大帳篷旁，酒桶上刻著補給暗號，武裝海盜在火光外緣巡走。營地地面有新鮮靴印、魚骨和火藥灰，像一處隨時能拔營又隨時能設伏的海岸據點。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'shipwreck',
        description: '西側擱淺船板回到沉船殘骸',
      },
      { direction: 'north', targetRoomId: 'eastern_coast_pearl_bed', description: '北側潮溝石階回到珍珠床' },
      { direction: 'east', targetRoomId: 'eastern_coast_pirate_cache', description: '東側岩縫通往海盜藏貨處' },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'pirate_captain', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[盜]',
    mapX: 6,
    mapY: 8,
    guardianHints: {
      creature: '營地的海盜比其他地方的更訓練有素，他們的船長就在大帳篷中坐鎮。',
      treasure: '營地中央的大帳篷裡藏著海盜團的寶箱，但有重重機關。',
      spirit: '海盜團的創始人是一位被冤枉的海軍將領，他的復仇之心驅使著整個團夥。',
    },
  },

  dark_reef: {
    id: 'dark_reef',
    name: '暗礁',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'dark_reef.png',
    imagePrompt: '暗礁 in eastern_coast, elite combat reef room with black blade rocks, whirlpools, green fishman eyes and violent foam light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '暗礁區的黑色岩石像刀刃般在海面下若隱若現，浪花拍上去立刻碎成白沫，急流在礁縫間反覆拉扯。北側危險水道回到沉船殘骸，南面水下通道通往海底洞穴。漩渦在岩石間形成又消散，破船鐵片和碎槳卡在礁牙上，深海魚人與海蛇的影子在綠光下游移。水下偶爾閃出魚眼反光，使這片水域像一張由礁石、暗流和伏擊共同張開的網。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'shipwreck',
        description: '北側需穿過急流礁縫與破船板陰影，才會回到沉船殘骸，暗流會把人推向礁石',
      },
      {
        direction: 'south',
        targetRoomId: 'underwater_cave',
        description: '南側水下通道穿過暗礁急流與氣泡裂縫後，才會進入海底洞穴，深處光線明顯變藍',
      },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[礁]',
    mapX: 5,
    mapY: 9,
    guardianHints: {
      creature: '暗礁的水下洞穴是魚人的集結地——牠們會從四面八方湧出。',
      treasure: '無數觸礁沉船的遺物散落在暗礁之間，有些至今仍在發光。',
      spirit: '暗礁是海神設下的試煉，只有通過考驗的人才能進入海底的秘境。',
    },
  },

  underwater_cave: {
    id: 'underwater_cave',
    name: '海底洞穴',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'underwater_cave.png',
    imagePrompt: '海底洞穴 in eastern_coast, boss event underwater cave with magic air bubble, blue coral, fishman bone altars and deep ocean glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain cave, clear lantern light',
    description:
      '海底洞穴被一層閃爍魔法氣泡包住，內部保留稀薄空氣，洞壁深海珊瑚散出幽藍光芒，把濕石照得像異界殿堂。西側潮池暗道可回海蝕洞，北面急流水道連向暗礁。四周散落魚人以骨頭、貝殼和珊瑚枝堆出的祭壇，腥鹹氣味在氣泡內久久不散。洞穴深處傳來低沉吟唱，氣泡邊緣偶爾震動，像海底壓力正在測試這處短暫安全空間的極限。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'sea_cave',
        description: '西側潮池暗道需逆著氣泡與海蝕裂縫游回，最後才到海蝕洞，水壓會讓路程變慢',
      },
      {
        direction: 'north',
        targetRoomId: 'dark_reef',
        description: '北側水道要逆流穿過氣泡邊界與黑礁縫隙，才游回暗礁區，途中會遇到急流牽引',
      },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 3, respawnSeconds: 50 },
    ],
    mapSymbol: '[深]',
    mapX: 4,
    mapY: 9,
    guardianHints: {
      creature: '洞穴深處有一隻異常巨大的魚人首領，牠的三叉戟散發著藍色的光芒。',
      treasure: '魚人的祭壇上擺放著從沉船中收集的珍貴寶物和深海寶珠。',
      spirit: '這個洞穴是古代海之神殿的入口，魚人在此守護著神殿的最後秘密。',
    },
  },

  eastern_coast_tidepool_grotto: {
    id: 'eastern_coast_tidepool_grotto',
    name: '潮池岩穴',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_tidepool_grotto.png',
    imagePrompt: '潮池岩穴 in eastern_coast, hidden exploration tidepool grotto with mirror pools, shell marks, blue cave light and crab shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain cave, clear lantern light',
    description:
      '潮池岩穴藏在潮間帶西側礁石後，鏡面潮池映出洞頂貝殼紋，藍色反光讓濕石像玻璃一樣發亮。東側濕滑石路繞回潮間帶，南面低矮裂縫下切到海蝕洞，西側被礁牆與回潮水窪封住。池底可見半寶石、古幣和海蟹掀起的細沙，貝殼排列出潮水曾經抵達的高度。當回潮聲從裂縫深處傳來，整座小岩穴會像一只正在蓄水的貝殼。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'tidal_zone',
        description: '東側濕滑石路繞過鏡面潮池與貝殼標記後，才回到潮間帶，低潮時會露出路標',
      },
      {
        direction: 'south',
        targetRoomId: 'sea_cave',
        description: '南側裂縫沿潮池底部下切，繞過藍光洞壁後才通向海蝕洞，狹窄處只能側身前進',
      },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[池]',
    mapX: 3,
    mapY: 7,
  },

  eastern_coast_seaweed_flats: {
    id: 'eastern_coast_seaweed_flats',
    name: '海藻灘',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_seaweed_flats.png',
    imagePrompt: '海藻灘 in eastern_coast, resource combat flats with thick kelp mats, driftwood, jellyfish pools and pale green tide light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '海藻灘在退潮後露出大片平灘，厚海藻覆住濕沙、漂木與破網，空氣裡滿是鹽味和腐藻氣息。北面乾沙帶回沙灘，東側水線穿過淺池通往珊瑚淺灘，南邊礁石背面可找到潮池岩穴，西側水路在海藻帶外緣被潮汐切斷。濕滑葉片下藏著漁鉤、碎貝和水母影子，漂木被海流推成歪斜路障，使整片平灘像低潮短暫交出的綠色迷網。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'sandy_beach',
        description: '北側沙地需穿過大片濕海藻與漂木帶，退回到較乾的沙灘，蟹洞會干擾直線行走',
      },
      {
        direction: 'east',
        targetRoomId: 'coral_shallows',
        description: '東側水線穿過厚海藻、漂木與水母淺池後，才通往珊瑚淺灘，水色會逐步轉亮',
      },
      {
        direction: 'south',
        targetRoomId: 'eastern_coast_tidepool_grotto',
        description: '南側需繞過礁石背面與破網堆，才會找到潮池岩穴入口，入口被潮聲掩住',
      },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'sea_crab', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[藻]',
    mapX: 3,
    mapY: 6,
  },

  eastern_coast_smugglers_cove: {
    id: 'eastern_coast_smugglers_cove',
    name: '走私者海灣',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_smugglers_cove.png',
    imagePrompt: '走私者海灣 in eastern_coast, hidden combat cove with narrow inlet, covered crates, lantern signals and purple dusk surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '走私者海灣藏在海崖背風處，狹窄水口被礁石遮住，黑布貨箱堆在暗處，提燈以固定節奏閃爍。西側崖壁繞回海崖步道，南面暗流水線通往海蛇巢，東邊小徑攀向觀潮斷崖。浪聲掩蓋低聲交談，箱縫裡露出鹽封蠟、短刀和異地酒瓶，礫石坡上則有來回拖貨留下的平行痕跡。這處海灣像整條海岸暗流交易的喉嚨，隱密卻不平靜。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'cliff_path',
        description: '西側沿背風崖壁繞過貨箱暗號與礫石坡，才回到海崖步道，提燈節奏可當路標',
      },
      { direction: 'south', targetRoomId: 'eastern_coast_serpent_nest', description: '南側暗流水線通往海蛇巢' },
      { direction: 'east', targetRoomId: 'eastern_coast_stormwatch_ledge', description: '小徑攀向瞭望崖' },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[灣]',
    mapX: 7,
    mapY: 6,
  },

  eastern_coast_broken_pier: {
    id: 'eastern_coast_broken_pier',
    name: '斷裂棧橋',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_broken_pier.png',
    imagePrompt: '斷裂棧橋 in eastern_coast, event route room with shattered pier posts, loose planks, crab nests and cloudy harbor light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain harbor, clear lantern light',
    description:
      '斷裂棧橋位在漁村碼頭南側，木樁被風浪撞得歪斜，鬆動木板下傳來海蟹刮擦聲，焦油水面映著陰雲。北側需沿斷裂木樁繞回漁村碼頭，南面斷木棧道接上海崖步道，西側濕岩路通往燈塔塔基。棧橋邊掛著破漁網、斷繩與被潮水咬爛的浮標，部分木板留下新鮮斧痕，像有人曾刻意破壞通路。海風吹過樁洞時發出空響，使這段碼頭充滿不可靠的搖晃感。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'fishing_dock',
        description: '北側需沿斷裂木樁與焦油水面繞回，最後才接到漁村碼頭，鬆板會發出警告聲',
      },
      { direction: 'south', targetRoomId: 'cliff_path', description: '南側斷木棧道接上海崖步道' },
      {
        direction: 'west',
        targetRoomId: 'lighthouse',
        description: '西側沿岸穿過鬆動木板與潮濕岩面後，才會抵達燈塔塔基，海蟹常躲在木樁下',
      },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[桟]',
    mapX: 6,
    mapY: 5,
  },

  eastern_coast_stormwatch_ledge: {
    id: 'eastern_coast_stormwatch_ledge',
    name: '觀潮斷崖',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_stormwatch_ledge.png',
    imagePrompt: '觀潮斷崖 in eastern_coast, elite exploration cliff ledge with storm clouds, warning cairns, gull bones and lightning sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain sea, clear lantern light',
    description:
      '觀潮斷崖突出在海崖盡頭，正對外海，暴風雲在遠處堆疊，警示石堆與海鳥骨散在濕冷岩面上。西側小徑回走私者海灣，南面陡坡俯衝到海盜營地外圍。崖邊石堆以不同高度記錄風暴潮線，碎岩上還能看見海盜巡邏留下的靴印。強風把烏鴉羽毛和鹽霧一同捲起，岩台下方浪聲巨大，使這裡像觀測風暴與營地動靜的危險哨位。',
    exits: [
      { direction: 'west', targetRoomId: 'eastern_coast_smugglers_cove', description: '小徑回走私者海灣' },
      {
        direction: 'south',
        targetRoomId: 'pirate_camp',
        description: '南側陡坡要沿警示石堆與碎岩下切，才能俯衝到海盜營地外圍，強風會影響站位',
      },
    ],
    monsters: [
      { monsterId: 'storm_gull', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[崖]',
    mapX: 8,
    mapY: 6,
  },

  eastern_coast_pearl_bed: {
    id: 'eastern_coast_pearl_bed',
    name: '珍珠床',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_pearl_bed.png',
    imagePrompt: '珍珠床 in eastern_coast, resource underwater shallows with oyster beds, pale pearls, filtered sunlight and jellyfish drift, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '珍珠床鋪在燈塔外側的淺水沙地上，蚌殼密密散布，細沙間偶爾閃出乳白珍珠光，陽光穿過水面形成搖晃光網。北側潮溝石階回到海崖步道，西面沙床接向珊瑚淺灘，南方潮溝通往海盜營地，東側暗流拉向海蛇巢。半開蚌殼、撬痕與水母漂影交錯在淺水中，盜採留下的碎殼帶著尖銳邊緣，使這片漂亮沙床顯得格外脆弱。',
    exits: [
      { direction: 'north', targetRoomId: 'cliff_path', description: '北側潮溝石階回到海崖步道' },
      { direction: 'west', targetRoomId: 'coral_shallows', description: '西側淺水沙床回到珊瑚淺灘' },
      { direction: 'south', targetRoomId: 'pirate_camp', description: '南側潮溝石階通往海盜營地' },
      { direction: 'east', targetRoomId: 'eastern_coast_serpent_nest', description: '暗流通向海蛇巢' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'sea_serpent', maxCount: 1, respawnSeconds: 45 },
      { monsterId: 'tidepool_murk_eel', maxCount: 1, respawnSeconds: 55 },
    ],
    groundItems: [
      { itemId: 'tidewatch_pearl', description: '半開蚌殼裡有一顆刻著潮紋的珍珠' },
    ],
    mapSymbol: '[珠]',
    mapX: 6,
    mapY: 7,
  },

  eastern_coast_pirate_cache: {
    id: 'eastern_coast_pirate_cache',
    name: '海盜藏貨處',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_pirate_cache.png',
    imagePrompt: '海盜藏貨處 in eastern_coast, hidden elite cache with buried crates, torn black flag, rum barrels and red campfire glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '海盜藏貨處藏在營地後方岩縫裡，半埋貨箱被破黑旗遮住，火藥桶、酒桶與濕繩堆在紅色營火旁。北側暗流水線連向海蛇巢，西面岩縫可回海盜營地。貨箱上刻著船長補給暗號，酒桶邊散著硬幣、濕火藥和被撬開的鎖片。岩壁滴水把營火照得像血色，藏貨處雖狹窄，卻能看出海盜把補給、戰利品與撤離路線都壓在這道背風裂縫裡。',
    exits: [
      { direction: 'north', targetRoomId: 'eastern_coast_serpent_nest', description: '北側暗流水線回到海蛇巢' },
      { direction: 'west', targetRoomId: 'pirate_camp', description: '西側岩縫回到海盜營地' },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'pirate_captain', maxCount: 1, respawnSeconds: 1800 },
    ],
    groundItems: [
      { itemId: 'ancient_coin', description: '半開貨箱裡露出幾枚被海水侵蝕的古幣' },
    ],
    mapSymbol: '[箱]',
    mapX: 7,
    mapY: 8,
  },

  eastern_coast_serpent_nest: {
    id: 'eastern_coast_serpent_nest',
    name: '海蛇巢',
    zone: 'eastern_coast' as RoomDef['zone'],
    image: 'eastern_coast_serpent_nest.png',
    imagePrompt: '海蛇巢 in eastern_coast, boss event sea serpent nest with coiled bones, green water light, egg clutches and jagged reef walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain sea, clear lantern light',
    description:
      '海蛇巢位於暗礁外緣裂谷中，魚骨、破船板與黏滑卵囊堆在鋸齒礁壁間，綠色水光一閃一閃。西側暗流接回珍珠床，北面水線通向走私者海灣，南方暗流繞到海盜藏貨處，東側礁縫下潛可進入暗礁。巢壁滿是蛇鱗刮痕和拖行黏液，低沉嘶聲會沿水下裂縫震動。卵囊在水流中輕輕收縮，讓這片礁谷像一個正等待孵化的危險肺腔。',
    exits: [
      { direction: 'west', targetRoomId: 'eastern_coast_pearl_bed', description: '暗流回珍珠床' },
      { direction: 'north', targetRoomId: 'eastern_coast_smugglers_cove', description: '北側暗流水線回到走私者海灣' },
      { direction: 'south', targetRoomId: 'eastern_coast_pirate_cache', description: '南側暗流水線通往海盜藏貨處' },
      {
        direction: 'east',
        targetRoomId: 'dark_reef',
        description: '東側裂谷沿鋸齒礁壁深入急流，最後才會接到暗礁區，海蛇鱗痕會標示路線',
      },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 55 },
      { monsterId: 'tidepool_murk_eel', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[蛇]',
    mapX: 7,
    mapY: 7,
  },

  // ─── 火山地帶 (volcano_zone) ──────────────────────────

  volcano_base: {
    id: 'volcano_base',
    name: '火山山腳',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_base.png',
    imagePrompt: '火山山腳 in volcano_zone, entrance combat volcanic foothill with black ash, sulfur smoke, cracked ground and red crater glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '火山的山腳下，地面覆蓋著一層黑色的火山灰。空氣中瀰漫著硫磺的刺鼻氣味，。火山山腳周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '遠處的火山口冒著縷縷白煙。地面的溫度比平常高出許多，' +
      '偶爾能感受到腳下輕微的震動。北面可退回精靈遺跡，南側熔岩小徑通往高處，東邊礦坑入口有矮人守衛；玩家可 inspect 火山灰爪印判斷火蜥蜴巡邏方向。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'elf_ruins',
        description: '沿北側冷卻熔岩坡穿過熱風荒地與焦黑樹根，繞回暗影森林裡的精靈遺跡',
      },
      { direction: 'south', targetRoomId: 'lava_trail', description: '一條小徑通往火山上方' },
      { direction: 'east', targetRoomId: 'dwarf_mine', description: '山腳旁有一個礦坑入口' },
      { direction: 'west', targetRoomId: 'volcano_ash_field', description: '灰燼荒地在西側延展' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[▲]',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '火山灰覆蓋的地面上有蜥蜴的爪印，火蜥蜴在附近活動。',
      treasure: '火山灰下偶爾會露出被噴發帶出的礦石，有些相當值錢。',
      spirit: '火山的低沉轟鳴中蘊含著大地之靈的嘆息，牠在守護著地底的秘密。',
    },
  },

  lava_trail: {
    id: 'lava_trail',
    name: '熔岩小徑',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'lava_trail.png',
    imagePrompt: '熔岩小徑 in volcano_zone, main route combat path over cooled lava, red cracks, heat shimmer and salamander shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain lava, clear lantern light',
    description:
      '一條蜿蜒在凝固熔岩上的狹窄小路，兩側的岩石仍散發著灼熱的紅光。熔岩小徑周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '空氣因高溫而扭曲，每一步都要小心避開仍在流動的岩漿細流。' +
      '火蜥蜴與餘燼魔物在溫暖的岩石上巡邏。北面下山回火山山腳，南方硫磺谷蒸汽翻湧，東面傳來岩漿河的低沉聲；玩家可 search 冷卻裂縫採集火成玻璃。',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_base', description: '下山回到山腳' },
      { direction: 'south', targetRoomId: 'sulfur_valley', description: '小徑延伸向硫磺谷' },
      { direction: 'east', targetRoomId: 'magma_river', description: '遠處傳來岩漿流動的聲響' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'ash_cinder_imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: ' . ',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '凝固熔岩的裂縫中有火蜥蜴在取暖，靠近時牠們會噴火攻擊。',
      treasure: '熔岩冷卻時包裹住的氣泡中，偶爾會形成罕見的火成玻璃。',
      spirit: '這條小徑是古代矮人的巡邏路線，他們在岩壁上刻下了方向標記。',
    },
  },

  sulfur_valley: {
    id: 'sulfur_valley',
    name: '硫磺谷',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'sulfur_valley.png',
    imagePrompt: '硫磺谷 in volcano_zone, resource combat sulfur valley with yellow crystals, boiling vents, toxic steam and harsh green-yellow light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain valley, clear lantern light',
    description:
      '濃烈的硫磺氣味充斥著整個山谷，地面上冒著滾燙的蒸汽。硫磺谷周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '黃色的硫磺結晶覆蓋在岩石表面，熱泉在低窪處沸騰冒泡。' +
      '火蜥蜴和熔岩蟲在這種極端環境中如魚得水。北面回熔岩小徑，南方坡道直指火山口，西側熱霧後有硫磺泉；玩家可 gather 硫磺結晶，也要避開突然噴出的蒸汽柱。',
    exits: [
      { direction: 'north', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'volcano_crater', description: '繼續向火山口攀登' },
      { direction: 'west', targetRoomId: 'volcano_sulfur_springs', description: '熱霧後是硫磺泉' },
    ],
    monsters: [
      { monsterId: 'sulfur_steam_crawler', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[硫]',
    mapX: 1,
    mapY: 9,
    guardianHints: {
      creature: '地面突然冒出的蒸汽柱可能是熔岩蟲即將鑽出的徵兆。',
      treasure: '硫磺結晶中偶爾混著珍貴的火成寶石，但需要小心取下。',
      spirit: '硫磺谷是火山的排氣口，地底深處的火焰之靈在此吐息。',
    },
  },

  volcano_crater: {
    id: 'volcano_crater',
    name: '火山口',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_crater.png',
    imagePrompt: '火山口 in volcano_zone, landmark combat crater with churning lava lake, flame spirits, black rim stones and blinding orange heat, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain lava, clear lantern light',
    description:
      '攀登至火山口的邊緣，腳下是翻騰的岩漿湖。灼熱的氣浪撲面而來，。火山口周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '火焰精靈敵群在岩漿上方翩翩起舞，牠們的身影在熱浪中若隱若現。' +
      '這裡的溫度高得驚人，普通人無法久留。北面退回硫磺谷，東側岩壁石門通往火焰神殿，西邊有橫跨岩漿的危險橋；玩家可 inspect 岩漿小島尋找炎之心線索。' +
      '此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。' +
      '牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'sulfur_valley', description: '退回硫磺谷' },
      {
        direction: 'east',
        targetRoomId: 'fire_temple_entrance',
        description: '東側石門需沿火山口內壁繞過兩段灼熱棧道，才會抵達火焰神殿入口',
      },
      {
        direction: 'west',
        targetRoomId: 'volcano_lava_bridge',
        description: '西側熔岩橋要先沿火山口外緣下降，再跨過碎裂玄武岩橋面才能抵達',
      },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'ash_cinder_imp', maxCount: 2, respawnSeconds: 40 },
    ],
    groundItems: [
      { itemId: 'lava_fragment', description: '火山口邊有一塊冷卻的熔岩' },
    ],
    mapSymbol: '[火]',
    mapX: 1,
    mapY: 10,
    guardianHints: {
      creature: '火焰精靈在岩漿上方最活躍——用冰屬性攻擊可以讓牠們暫時凝固。',
      treasure: '岩漿湖中央有一座小島，上面似乎放著發光的東西。',
      spirit: '火山口是通往地心的窗口，這裡的火焰蘊含著世界誕生時的原初之力。',
    },
  },

  magma_river: {
    id: 'magma_river',
    name: '岩漿河',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'magma_river.png',
    imagePrompt: '岩漿河 in volcano_zone, resource combat magma river with orange flow, red-hot banks, lava worms and warped heat light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain river, clear lantern light',
    description:
      '一條滾燙的岩漿河從火山側面流出，橘紅色的岩漿緩慢而致命地流淌。岩漿河周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '河岸的岩石被高溫炙烤得通紅，空氣中的熱浪扭曲了視線。' +
      '熔岩蟲在岩漿河中自在穿行，火蜥蜴則在河岸捕食。西面回熔岩小徑，南側黑色洞口通往黑曜石洞，東面有閃亮晶簇噴氣口；玩家可採集冷卻岩漿外殼。',
    exits: [
      { direction: 'west', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'obsidian_cave', description: '南側岩漿河沿冷卻黑石河岸下切，穿過熱浪裂階與漆黑洞口抵達黑曜石洞' },
      { direction: 'east', targetRoomId: 'volcano_steam_lift', description: '東側蒸汽管線通往升降梯' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[漿]',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '岩漿河面上的氣泡破裂前，熔岩蟲會從河中突然竄出。',
      treasure: '河岸的冷卻岩漿中凝結著稀有的火成礦石，需要工具才能敲下。',
      spirit: '岩漿河是火山的血脈，牠的流向隱含著地底能量場的走勢。',
    },
  },

  obsidian_cave: {
    id: 'obsidian_cave',
    name: '黑曜石洞',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'obsidian_cave.png',
    imagePrompt: '黑曜石洞 in volcano_zone, resource combat obsidian cave with mirror black walls, distorted reflections, red mineral seams and dim heat glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain cave, clear lantern light',
    description:
      '洞壁由純黑的黑曜石構成，表面如鏡子般光滑，映照出扭曲的倒影。黑曜石洞周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '洞內的溫度意外地比外面低一些，但空氣中仍帶著焦灼的味道。' +
      '岩石巨人和熔岩蟲在這裡守護著地底的礦脈。北面回岩漿河，南方火光指向神殿入口，東側採場可取得高品質黑曜石。',
    exits: [
      { direction: 'north', targetRoomId: 'magma_river', description: '北側黑曜石洞沿漆黑洞口回穿，越過熱浪裂階與冷卻黑石河岸回到岩漿河' },
      { direction: 'south', targetRoomId: 'fire_temple_entrance', description: '深處有微弱的火光' },
      { direction: 'east', targetRoomId: 'volcano_obsidian_quarry', description: '採石聲來自東側黑曜石採場' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[黑]',
    mapX: 2,
    mapY: 9,
    guardianHints: {
      creature: '黑曜石的倒影中有時會出現不屬於你的身影——岩石巨人正從背後接近。',
      treasure: '洞壁深處的黑曜石品質極高，是鍛造暗屬性武器的頂級材料。',
      spirit: '黑曜石洞是古代矮人的聖地，他們相信黑曜石能封印邪惡的力量。',
    },
  },

  fire_temple_entrance: {
    id: 'fire_temple_entrance',
    name: '火焰神殿入口',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'fire_temple_entrance.png',
    imagePrompt: '火焰神殿入口 in volcano_zone, landmark combat temple gate with eternal braziers, dwarf runes, carved stone door and roaring red light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain temple, clear lantern light',
    description:
      '巨大的石門上雕刻著火焰的紋飾，門框兩側的火盆燃燒著永不熄滅的火焰。火焰神殿入口周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '門上的古代文字似乎是矮人語，記載著神殿的歷史和警告。' +
      '門內傳來低沉的轟鳴聲和熱氣，玄武岩守衛與火焰魔物守在門縫兩側。西面回火山口，北面黑曜石洞反射著火光，南側內部通道通往火山頂；玩家可 inspect 矮人符文找寶庫密碼。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'volcano_crater',
        description: '西側神殿石階沿內壁折返，穿過火盆與熱風棧道後才回到火山口邊緣',
      },
      { direction: 'north', targetRoomId: 'obsidian_cave', description: '回到黑曜石洞' },
      { direction: 'south', targetRoomId: 'volcano_summit', description: '通往火山頂的內部通道' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'basalt_ward_sentinel', maxCount: 1, respawnSeconds: 1200 },
    ],
    npcs: ['flame_priest'],
    mapSymbol: '[殿]',
    mapX: 2,
    mapY: 10,
    guardianHints: {
      creature: '火盆的火焰偶爾會凝聚成精靈的形態——牠們是神殿的守護者。',
      treasure: '石門上的文字中隱含著打開內部寶庫的密碼。',
      spirit: '火焰神殿是矮人王國的精神中心，他們在此祭祀火焰之神並鍛造神兵。',
    },
  },

  dwarf_mine: {
    id: 'dwarf_mine',
    name: '矮人礦坑',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'dwarf_mine.png',
    imagePrompt: '矮人礦坑 in volcano_zone, resource combat dwarf mine with minecart rails, timber braces, ore veins and torch-lit mineral dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '寬闊的礦坑中迴盪著鐵錘敲擊岩石的沉悶聲響，火把的光芒在粗糙的岩壁上跳動。矮人礦坑周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '礦車軌道沿著支撐木架延伸向黑暗的深處，空氣中混雜著鐵鏽、汗水和地底礦物的氣味。' +
      '身材矮壯的矮人守衛全副武裝地巡邏著，鏽鐵色的鬍鬚上沾著礦粉，銳利的眼神審視著每一個闖入者。' +
      '礦壁上閃爍著銀、銅和秘銀的光澤，這些珍貴的礦脈是矮人一族賴以生存的根基。' +
      '此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。東側可聽見蒸汽升降梯齒輪聲，但實際需從下層採場或熔岩橋維修階繞行。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_base', description: '回到火山山腳' },
      { direction: 'east', targetRoomId: 'forge_hall', description: '東側礦車軌道接往鍛造大廳' },
    ],
    monsters: [
      { monsterId: 'dwarf_guard', maxCount: 3, respawnSeconds: 55 },
    ],
    npcs: ['mine_foreman'],
    mapSymbol: '[礦]',
    mapX: 2,
    mapY: 7,
    guardianHints: {
      creature: '矮人守衛的換班時間有規律——觀察巡邏模式可以找到空檔。',
      treasure: '礦壁上某處的礦石異常耀眼，那是稀有的秘銀礦脈。',
      spirit: '礦坑的每一塊石頭都記錄著矮人族數百年的勞動，他們的執著令人敬佩。',
    },
  },

  forge_hall: {
    id: 'forge_hall',
    name: '鍛造大廳',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'forge_hall.png',
    imagePrompt: '鍛造大廳 in volcano_zone, town service crafting forge hall with giant furnace, anvils, dwarf tools, sparks and orange molten light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '宏偉的鍛造大廳中央矗立著一座巨大的熔爐，赤紅的火焰熊熊燃燒，將整個大廳映照成橘紅色。鍛造大廳周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '四周的工作台上擺滿了鐵錘、鉗子和各種鍛造工具，金屬碰撞的鏗鏘聲不絕於耳。' +
      '空氣中充斥著灼熱的金屬氣味和淬火時蒸騰的白色蒸汽，令人彷彿置身於火焰的心臟。' +
      '一位肌肉虯結的矮人鐵匠正揮舞著比他手臂還粗的戰錘鍛打一塊通紅的鋼胚，他的技藝堪稱傳奇。北面回矮人礦坑，東側庫房堆滿礦錠；玩家可 craft、修理或接鍛造委託，inspect 熔爐風口可發現火元素異常。牆上的訂單板列出武器、護甲和飾品需求，提示玩家把採礦、分解與重鑄材料帶回此處處理。',
    exits: [
      { direction: 'west', targetRoomId: 'dwarf_mine', description: '西側礦車軌道回到矮人礦坑' },
      { direction: 'east', targetRoomId: 'volcano_ember_barracks', description: '東側黑鐵巡邏走廊通往餘燼兵房' },
      { direction: 'south', targetRoomId: 'volcano_forge_storage', description: '南側鍛造大廳沿服務長廊轉入，穿過冷卻架、礦錠推車與黑鐵庫門抵達鍛造庫房' },
    ],
    npcs: ['dwarf_blacksmith'],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 60 },
    ],
    groundItems: [
      { itemId: 'iron_ore', description: '地上堆著幾塊鐵礦' },
    ],
    mapSymbol: '[鍛]',
    mapX: 3,
    mapY: 7,
    guardianHints: {
      creature: '熔爐下方的通氣口偶爾會鑽出小型的火元素生物。',
      treasure: '大廳牆上的展示架上放著矮人鐵匠最得意的作品——傳說級的武器。',
      spirit: '鍛造大廳中瀰漫著千年的鍛造之魂，每一件在此打造的武器都帶著矮人的祝福。',
    },
  },

  volcano_summit: {
    id: 'volcano_summit',
    name: '火山頂',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_summit.png',
    imagePrompt: '火山頂 in volcano_zone, boss landmark summit with open crater wind, lava cracks, rock giants, flame spirits and vast horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain lava, clear lantern light',
    description:
      '火山的最高點，腳下是翻騰的岩漿和蒸騰而起的灼熱氣浪，空氣中瀰漫著濃烈的硫磺味。火山頂周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '強風在裸露的山巔呼嘯而過，卻無法冷卻這裡灼人的溫度。登頂後視野無比開闘——' +
      '從冰封雪原到暗影森林，整個大陸的輪廓盡收眼底。' +
      '岩石巨人如同山峰的延伸般矗立不動，火焰精靈與熔岩首領則在岩漿裂縫間翩翩起舞，守護著火山深處的原始之力。',
    exits: [
      { direction: 'north', targetRoomId: 'fire_temple_entrance', description: '回到火焰神殿入口' },
      { direction: 'west', targetRoomId: 'volcano_zone_fill_32_25', description: '西側火山石路回到玄武岩階方向' },
      { direction: 'east', targetRoomId: 'volcano_colossus_arena', description: '東側封印鏈石台通往熔岩巨像競技台' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[頂]',
    mapX: 2,
    mapY: 11,
    guardianHints: {
      creature: '火山頂的守護者比其他地方的更加強大，牠們被火山核心的能量強化了。',
      treasure: '火山核心深處蘊藏著傳說中的炎之心——據說能打造最強的火屬性武器。',
      spirit: '站在火山頂，能感受到大地心臟的跳動。這裡是世界能量的匯聚點之一。',
    },
  },

  volcano_ash_field: {
    id: 'volcano_ash_field',
    name: '火山灰原',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_ash_field.png',
    imagePrompt: '火山灰原 in volcano_zone, entrance combat ash field with black dunes, ember sparks, buried ore and smoky red horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '火山山腳西側是一片厚重灰原，黑色灰丘被熱風吹成波紋，偶爾有暗紅火星從裂縫中飄起。東面回火山山腳，南方灰原延伸向更深的火山地帶，灰層下露出被噴發帶出的礦石。旅人可 搜索 灰丘找火成礦與舊行囊，也要留意火蜥蜴在灰下留下的爪痕。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'east', targetRoomId: 'volcano_base', description: '灰路回到火山山腳' },
      { direction: 'south', targetRoomId: 'volcano_zone_fill_31_22', description: '南側灰燼邊道通往火山邊道' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'ash_cinder_imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[灰]',
    mapX: 0,
    mapY: 7,
  },

  volcano_lava_bridge: {
    id: 'volcano_lava_bridge',
    name: '熔岩橋',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_lava_bridge.png',
    imagePrompt: '熔岩橋 in volcano_zone, dangerous route room with narrow basalt bridge over lava lake, heat shimmer and falling sparks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '一條窄窄玄武岩橋跨過岩漿湖外緣，橋面裂縫透出橘紅光，火星像雨點般落在粗糙石面。北面連硫磺熱泉，東側接火山口，南端能看見蒸汽升降梯管線但維修階已坍塌，需從採場下層繞行。這是高風險捷徑，旅人可 觀察 裂縫判斷橋面穩定度，也要避免被火焰精靈逼到橋中央。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_sulfur_springs', description: '北側熱泉石路回到硫磺熱泉' },
      {
        direction: 'west',
        targetRoomId: 'ember_march_fill_30_24',
        description: '西側熔岩橋頭越過焦黑灰道與灼熱岩脊，銜接餘燼邊境東南口',
      },
      {
        direction: 'east',
        targetRoomId: 'volcano_crater',
        description: '橋尾先貼著岩漿湖外圈緩慢上升，越過碎裂橋墩後才接回火山口邊緣安全處',
      },
      { direction: 'south', targetRoomId: 'volcano_basalt_steps', description: '南側熔岩橋尾接到玄武岩階' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'ash_cinder_imp', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[橋]',
    mapX: 0,
    mapY: 10,
  },

  volcano_steam_lift: {
    id: 'volcano_steam_lift',
    name: '蒸汽升降梯',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_steam_lift.png',
    imagePrompt: '蒸汽升降梯 in volcano_zone, traffic resource room with dwarf lift platform, brass gears, steam pipes and red mine light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '矮人建造的升降梯卡在礦坑與火山外壁之間，黃銅齒輪、鐵鏈和蒸汽管道不停震動，白霧帶著金屬味噴向岩壁。西側管線通往熔岩橋但維修階已坍塌，東側能聽見礦坑敲擊聲但門軌卡死，南方通向黑曜石採場。旅人可 觀察 控制桿啟用捷徑，搜索 工具箱找維修材料，也要提防從管道裡鑽出的熔岩蟲。蒸汽升降梯周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      { direction: 'west', targetRoomId: 'magma_river', description: '西側蒸汽管線回到岩漿河' },
      { direction: 'east', targetRoomId: 'volcano_crystal_vent', description: '東側紅色晶簇接往火晶噴氣口' },
      {
        direction: 'south',
        targetRoomId: 'volcano_obsidian_quarry',
        description: '南側下層軌道先繞過蒸汽管與斷裂升降架，下降兩層後才抵達黑曜石採場',
      },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'dwarf_guard', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[升]',
    mapX: 3,
    mapY: 8,
  },

  volcano_sulfur_springs: {
    id: 'volcano_sulfur_springs',
    name: '硫磺熱泉',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_sulfur_springs.png',
    imagePrompt: '硫磺熱泉 in volcano_zone, resource combat hot springs with yellow pools, boiling vents, sulfur crystals and poisonous steam light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '硫磺谷西側的熱泉池不斷冒泡，黃色結晶沿池緣生長，毒霧把遠處岩壁染成暗綠。東面回硫磺谷，南側可攀上玄武岩階。旅人可 採集 硫磺與熱泉礦泥，觀察 蒸汽節奏避開噴發，也要注意熔岩蟲會從沸騰池底突然鑽出。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰。硫磺熱泉周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'east', targetRoomId: 'sulfur_valley', description: '熱霧散處回硫磺谷' },
      { direction: 'north', targetRoomId: 'volcano_zone_fill_31_22', description: '北側硫磺熱霧回到火山邊道' },
      { direction: 'south', targetRoomId: 'volcano_lava_bridge', description: '南側黑色石路通往熔岩橋' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'sulfur_steam_crawler', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: '[泉]',
    mapX: 0,
    mapY: 9,
  },

  volcano_ember_barracks: {
    id: 'volcano_ember_barracks',
    name: '餘燼兵房',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_ember_barracks.png',
    imagePrompt: '餘燼兵房 in volcano_zone, elite combat dwarf barracks with iron bunks, ember braziers, weapon racks and smoky red light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '礦坑東側的兵房由黑鐵和玄武岩砌成，鐵床旁堆著盾牌、戰斧與尚未冷卻的煤盆，煙味混著汗水和礦粉。西面回矮人礦坑，南方走廊接鍛造庫房，東側晶光來自噴氣口但隔著封死的玄武岩牆。旅人可 觀察 值勤表觀察守衛換班，搜索 武器架找任務證物，但會引來矮人守衛盤查。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'west', targetRoomId: 'forge_hall', description: '西側黑鐵巡邏走廊回到鍛造大廳' },
      {
        direction: 'south',
        targetRoomId: 'volcano_crystal_vent',
        description: '南側晶光裂道下到火晶噴氣口',
      },
    ],
    monsters: [
      { monsterId: 'dwarf_guard', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 7,
  },

  volcano_crystal_vent: {
    id: 'volcano_crystal_vent',
    name: '火晶噴氣口',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_crystal_vent.png',
    imagePrompt: '火晶噴氣口 in volcano_zone, resource combat vent with red crystals, steam jets, magma river glow and fractured basalt, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain river, clear lantern light',
    description:
      '岩漿河東側的裂縫長滿紅色火晶，蒸汽從晶簇間噴出，讓整片玄武岩像在呼吸。西面回岩漿河，北側能聽見餘燼兵房的鐵門聲但岩壁封死，南邊黑石路只留下通往採場的舊標記，實際需從黑曜石洞或升降梯繞行。旅人可 採集 火晶碎片、觀察 噴氣節奏避開灼傷，也會遇到被晶光吸引的火蜥蜴與火焰精靈。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_steam_lift', description: '西側蒸汽管線回到蒸汽升降梯' },
      { direction: 'north', targetRoomId: 'volcano_ember_barracks', description: '北側晶光裂道回到餘燼兵房' },
      { direction: 'south', targetRoomId: 'volcano_forge_storage', description: '南側冷卻貨道接往鍛造庫房' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'ash_cinder_imp', maxCount: 1, respawnSeconds: 40 },
    ],
    groundItems: [
      { itemId: 'lava_fragment', description: '火晶根部卡著一塊冷卻熔岩碎片' },
      { itemId: 'forge_calibration_tongs', description: '噴氣口旁壓著一把刻有工頭記號的黑鐵火鉗' },
    ],
    mapSymbol: '[晶]',
    mapX: 4,
    mapY: 8,
  },

  volcano_obsidian_quarry: {
    id: 'volcano_obsidian_quarry',
    name: '黑曜石採場',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_obsidian_quarry.png',
    imagePrompt: '黑曜石採場 in volcano_zone, resource combat quarry with black glass terraces, mine carts, red seams and golem silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '黑曜石洞東側被開鑿成階梯採場，黑玻璃般的石面反射紅色礦脈，礦車軌道在平台間彎曲。西面回黑曜石洞，北側接蒸汽升降梯，東北方火晶噴氣口仍在轟鳴但採場邊坡已崩落。旅人可 採集 黑曜石、搜索 廢礦車找稀有礦樣，也要防備岩石巨人從倒影中逼近。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_cave', description: '採場入口回黑曜石洞' },
      {
        direction: 'north',
        targetRoomId: 'volcano_steam_lift',
        description: '北側礦車軌道沿採場邊坡爬升，繞過崩落黑玻璃台階後才抵達蒸汽升降梯',
      },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'basalt_ward_sentinel', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[採]',
    mapX: 3,
    mapY: 9,
  },

  volcano_basalt_steps: {
    id: 'volcano_basalt_steps',
    name: '玄武岩階',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_basalt_steps.png',
    imagePrompt: '玄武岩階 in volcano_zone, main route combat basalt stairs with carved dwarf markers, lava glow below and falling ash, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain lava, clear lantern light',
    description:
      '一段黑色玄武岩階沿火山內壁向上折返，矮人方向刻痕被落灰半掩，階下岩漿光把每個邊角照成暗紅。北面回熔岩橋，東面岩壁通道延伸向深處，南方高台通往熔岩巨像競技台。旅人可 觀察 刻痕判斷安全路線，也要小心岩石巨人把旅人逼下窄階。此處的足跡、聲響或資源痕跡會提示旅人放慢腳步，先觀察危險再採集或開戰',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_lava_bridge', description: '北側黑色石階下到熔岩橋' },
      { direction: 'east', targetRoomId: 'volcano_zone_fill_32_25', description: '東側玄武岩台階接往火山石路' },
    ],
    monsters: [
      { monsterId: 'basalt_ward_sentinel', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: 11,
  },

  volcano_forge_storage: {
    id: 'volcano_forge_storage',
    name: '鍛造庫房',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_forge_storage.png',
    imagePrompt: '鍛造庫房 in volcano_zone, resource service storage with ore ingots, locked crates, cooling racks and furnace side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '鍛造大廳東側的庫房堆滿鐵錠、黑曜石板與標記清楚的工具箱，冷卻架上還冒著白煙，牆角傳來低沉爐鳴。西面回鍛造大廳，北側貨道接餘燼兵房。旅人可 搜索 鎖箱取得材料樣本，觀察 出庫牌追蹤鍛造任務需求，也要處理從通風口竄出的火元素。這裡是火山資源線的城鎮服務延伸點，貨架按武器、護甲、飾品和消耗品分區，方便旅人確認缺少哪種礦材。牆上封蠟記錄還標示哪些箱子屬於公會訂單，錯拿會觸發守衛盤查。地上的紅色箭頭指向熔爐、礦坑與兵房三個出口，讓滿載材料的旅人能快速選擇加工、補給或撤退方向',
    exits: [
      { direction: 'west', targetRoomId: 'forge_hall', description: '西側鍛造庫房穿過黑鐵庫門折返，沿礦錠推車與冷卻架服務長廊回到鍛造大廳' },
      {
        direction: 'north',
        targetRoomId: 'volcano_crystal_vent',
        description: '北側冷卻貨道回到火晶噴氣口',
      },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'ash_cinder_imp', maxCount: 2, respawnSeconds: 40 },
    ],
    groundItems: [
      { itemId: 'iron_ore', description: '貨架下滾落了幾塊鐵礦' },
    ],
    mapSymbol: '[庫]',
    mapX: 4,
    mapY: 9,
  },

  volcano_colossus_arena: {
    id: 'volcano_colossus_arena',
    name: '熔岩巨像競技台',
    zone: 'volcano_zone' as RoomDef['zone'],
    image: 'volcano_colossus_arena.png',
    imagePrompt: '熔岩巨像競技台 in volcano_zone, boss event arena with circular basalt platform, lava colossus silhouette, chains and erupting firelight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain lava, clear lantern light',
    description:
      '火山頂東側的圓形競技台懸在岩漿湖上方，玄武岩地面刻著矮人封印鏈，中央巨大的熔岩巨像首領輪廓在火光裡慢慢抬頭。西面可退回火山頂，北側玄武岩階提供繞行撤退路。這裡是 Boss 事件鉤子，旅人可 觀察 封印鏈確認巨像階段，搜索 斷裂鎖扣找召喚材料，也要準備火焰精靈與岩石巨人的支援。熔岩巨像競技台周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_summit', description: '西側封印鏈石台回到火山頂' },
    ],
    monsters: [
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[像]',
    mapX: 3,
    mapY: 11,
  },

  // ─── 冰封雪原 (frozen_wastes) ─────────────────────────

  snowfield_entrance: {
    id: 'snowfield_entrance',
    name: '雪原入口',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'snowfield_entrance.png',
    imagePrompt: '雪原入口 in frozen_wastes, entrance combat snowfield room with frost-covered stone marker, white plain, knife wind and pale blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '雪原入口是北方寒地的第一道白色坡口，溫度在此驟降，皚皚雪面一直鋪到天際。東面暗影森林逐漸退入樹影，北方暴風雪路被白霧遮住，南邊雪山營地有橘色火光，西側積雪隘口被岩壁夾住。入口石碑覆滿冰霜，只露出幾道舊刻痕，周圍有雪狼遠足印、斷旗和被風磨平的車轍。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'forest_entrance',
        description: '東側雪原入口沿寒風石碑折返，穿過覆雪矮坡與結霜樹根回到暗影森林入口',
      },
      { direction: 'north', targetRoomId: 'blizzard_path', description: '踏入暴風雪中' },
      { direction: 'south', targetRoomId: 'mountain_camp', description: '南方有營火的光芒' },
      { direction: 'west', targetRoomId: 'frozen_wastes_snowdrift_pass', description: '雪堆間有一條西行通道' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 40 },
    ],
    npcs: ['snow_guide'],
    mapSymbol: '[雪]',
    mapX: 2,
    mapY: 12,
    guardianHints: {
      creature: '雪地上有新鮮的狼蹄印，雪狼群可能就在附近潛伏。',
      treasure: '石碑上的冰霜如果能融化，或許能讀到重要的指引。',
      spirit: '石碑記載著冰封雪原的歷史——這裡曾是一個繁榮文明的家園。',
    },
  },

  blizzard_path: {
    id: 'blizzard_path',
    name: '暴風雪路',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'blizzard_path.png',
    imagePrompt: '暴風雪路 in frozen_wastes, main route combat room with whiteout blizzard, buried stakes, wolf tracks and cold gray light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '暴風雪路夾在雪原入口與冰河之間，風雪像白牆般橫掃山路，近處旗桿只剩黑色短影。南面雪原入口的石碑很快被雪幕吞沒，北方冰河裂縫在風中忽隱忽現。道路兩側積著被吹歪的木樁、破布旗和凍硬補給箱，雪粒貼著地面疾走，將狼爪與靴印切成斷續線段；風聲一陣高過一陣，讓每個方向都顯得搖晃。',
    exits: [
      { direction: 'south', targetRoomId: 'snowfield_entrance', description: '退回雪原入口' },
      { direction: 'north', targetRoomId: 'glacier', description: '風暴的另一端是冰河' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'frostpine_stalker', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[暴]',
    mapX: 2,
    mapY: 13,
    guardianHints: {
      creature: '暴風雪是雪狼最愛的狩獵時機——在風聲中辨別狼嚎就能提前防範。',
      treasure: '暴風雪偶爾會露出被冰雪掩埋的古代遺物。',
      spirit: '暴風雪並非自然現象——它是冰之精靈憤怒的表現。',
    },
  },

  glacier: {
    id: 'glacier',
    name: '冰河',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'glacier.png',
    imagePrompt: '冰河 in frozen_wastes, resource combat glacier room with blue ice crevasses, frozen fossils, wolf tracks and sharp arctic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain ice, clear lantern light',
    description:
      '冰河像一條緩慢凝固的藍色巨流，表面裂開深不見底的冰縫，冰層中封著古代植物和獸骨。南面暴風雪路被白幕切開，北方冰面延伸到凍湖，東側冰壁洞口通向冰晶洞穴，西面裂縫落向冰河裂縫。冰面上有雪狼爪痕、冰元素滑過的光帶和被霜封住的舊標桿；遠處冰層擠壓聲低沉，像整條河仍在地下前進。',
    exits: [
      { direction: 'south', targetRoomId: 'blizzard_path', description: '回到暴風雪路' },
      { direction: 'north', targetRoomId: 'frozen_lake', description: '冰河延伸至凍湖' },
      { direction: 'east', targetRoomId: 'crystal_ice_cave', description: '冰壁上有一個洞口' },
      { direction: 'west', targetRoomId: 'frozen_wastes_glacier_crevasse', description: '西側裂縫能深入冰河底層' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[河]',
    mapX: 2,
    mapY: 14,
    guardianHints: {
      creature: '冰縫深處有冰元素在凝聚——牠們會從裂縫中突然浮出。',
      treasure: '冰層中封凍的物品中，有些是古代文明的遺寶。',
      spirit: '冰河承載著千萬年的歷史，每一層冰都記錄著不同時代的故事。',
    },
  },

  frozen_lake: {
    id: 'frozen_lake',
    name: '凍湖',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_lake.png',
    imagePrompt: '凍湖 in frozen_wastes, resource combat frozen lake room with mirror ice, fish shadows, drifting frost mist and moon-blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '凍湖是一片廣闊鏡面，厚冰下隱約有魚群與暗影游動，湖面漂著低低冰霧。南側冰河推來深藍裂紋，北岸極光之地把彩光灑在冰上，西面冰釣洞的木架在霧裡露出輪廓。冰面有細裂、被霜封住的舊漁線和冰元素留下的圓形滑痕，遠處偶爾傳來冰層收縮的悶響；整座湖看似平整，卻處處藏著深水與薄冰。',
    exits: [
      { direction: 'south', targetRoomId: 'glacier', description: '回到冰河' },
      { direction: 'north', targetRoomId: 'aurora_field', description: '湖的北岸有奇異的光芒' },
      { direction: 'west', targetRoomId: 'frozen_wastes_ice_fishing_hole', description: '冰孔在湖西側發出水聲' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'glacier_bone_wraith', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[湖]',
    mapX: 2,
    mapY: 15,
    guardianHints: {
      creature: '冰面某些地方特別薄——冰元素會利用這一點從下方發動突擊。',
      treasure: '湖底沉睡著一座古代城市的遺跡，凍湖就是天然的保護層。',
      spirit: '凍湖的冰面在月光下會反射出古代城市的幻象——那是被時間凍結的記憶。',
    },
  },

  mountain_camp: {
    id: 'mountain_camp',
    name: '雪山營地',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'mountain_camp.png',
    imagePrompt: '雪山營地 in frozen_wastes, safe service camp with hide tents, orange fire, supply crates, rock shelter and blowing snow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain camp, clear lantern light',
    description:
      '雪山營地躲在巨大岩壁背風處，獸皮帳與木樁圍著橘色篝火，火光把雪地照成溫暖小圈。北面雪原入口冷風直灌，東側雪狼巢穴有低沉獸吼，西面廢棄雪橇的斷繩在風裡搖晃。木箱裡放著乾肉、藥草與毛皮毯，岩壁刻著前人留下的路線與警告；營火外幾步便是徹骨寒意，讓這裡成為雪原中少見的庇護點。',
    exits: [
      { direction: 'north', targetRoomId: 'snowfield_entrance', description: '回到雪原入口' },
      { direction: 'east', targetRoomId: 'wolf_den', description: '營地東方傳來狼嚎' },
      { direction: 'west', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '西側雪地有廢棄雪橇' },
    ],
    monsters: [
      { monsterId: 'frostpine_stalker', maxCount: 1, respawnSeconds: 60 },
    ],
    npcs: ['fur_merchant'],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 12,
    guardianHints: {
      creature: '營地周圍的雪地上有各種動物的腳印，但目前看來是安全的。',
      treasure: '前一位旅人在營地留下了一本日記，記載著雪原深處的秘密。',
      spirit: '篝火中蘊含著前人的祝福之力，在此休息可以恢復體力和精神。',
    },
  },

  crystal_ice_cave: {
    id: 'crystal_ice_cave',
    name: '冰晶洞穴',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'crystal_ice_cave.png',
    imagePrompt: '冰晶洞穴 in frozen_wastes, resource combat ice cave with rainbow ice crystals, frozen breath, giant shadows and cold prism light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain ice, clear lantern light',
    description:
      '冰晶洞穴的洞壁由透明晶柱組成，微光在稜面間折射成彩虹碎片，連呼出的白霧都會被染上淡色。西面冰河的冷風灌入洞口，北方洞穴深處通向冰封城堡大門，東側晶柱裂縫延往冰晶尖塔。地上有冰元素滑過的光痕、霜巨人踩碎的晶片和沉在冰層中的古老植物，洞內每次回聲都像從多面晶壁同時傳回。',
    exits: [
      { direction: 'west', targetRoomId: 'glacier', description: '回到冰河' },
      { direction: 'north', targetRoomId: 'ice_castle_gate', description: '洞穴深處通向一座冰封城堡' },
      { direction: 'east', targetRoomId: 'frozen_wastes_crystal_spire', description: '晶柱裂縫通向冰晶尖塔' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[晶]',
    mapX: 3,
    mapY: 14,
    guardianHints: {
      creature: '洞壁的冰晶中有時會映出巨人的倒影——那不是幻象，牠就在你身後。',
      treasure: '洞穴最深處的冰晶純度極高，是製造冰屬性裝備的頂級素材。',
      spirit: '冰晶洞穴是大地之力與冰之力交匯的聖地，蘊含著純粹的元素能量。',
    },
  },

  aurora_field: {
    id: 'aurora_field',
    name: '極光之地',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'aurora_field.png',
    imagePrompt: '極光之地 in frozen_wastes, landmark combat aurora field with green purple lights, glittering snow, magic waves and yeti silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain field, clear lantern light',
    description:
      '極光之地鋪展在凍湖北岸，雪面被綠、紫、藍三色光幕反覆照亮，像結了一層會流動的薄晶。南面凍湖的冰霧沿低坡漫來，東方彩光雪脊斜向冰封城堡大門，西側符石環在光幕下逐一發亮。雪地裡散著極光石、雪人深足印與冰河骨亡靈拖出的細痕，空氣有微弱靜電聲；每次光幕垂落，遠處輪廓都會短暫變成幻象。',
    exits: [
      { direction: 'south', targetRoomId: 'frozen_lake', description: '回到凍湖' },
      { direction: 'east', targetRoomId: 'ice_castle_gate', description: '東側極光之地沿彩光雪脊斜行，穿過冰晶風口與城堡外坡抵達冰封城堡大門' },
      { direction: 'west', targetRoomId: 'frozen_wastes_runestone_circle', description: '符石環在極光下發亮' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'glacier_bone_wraith', maxCount: 1, respawnSeconds: 80 },
    ],
    groundItems: [
      { itemId: 'ice_crystal', description: '極光下有一顆閃爍的冰晶' },
    ],
    mapSymbol: '[光]',
    mapX: 2,
    mapY: 16,
    guardianHints: {
      creature: '雪人在極光下會進入狂暴狀態——月隱之時牠們相對平靜。',
      treasure: '極光的能量偶爾會在地面凝聚成「極光石」，是極為稀有的魔法材料。',
      spirit: '極光是冰封大陸上古守護神的顯現，凝視極光太久會看到過去和未來的幻象。',
    },
  },

  wolf_den: {
    id: 'wolf_den',
    name: '雪狼巢穴',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'wolf_den.png',
    imagePrompt: '雪狼巢穴 in frozen_wastes, elite combat wolf den with bone piles, green eyes, frosted cave mouth and cold blue darkness, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain bone, clear lantern light',
    description:
      '雪狼巢穴是一個被狼群占據的岩洞，洞口散落獵物殘骸、啃碎骨頭和帶血皮毛，腥味被冷風壓在低處。西面雪山營地的火光被岩壁遮住，北側窄洞通向雪人石堆的回聲但已被冰塊堵住，東面只剩被拖入深處的獵物痕跡。洞頂冰柱會放大腳步聲，牆邊抓痕和焦黑火把痕顯出狼群曾被火光逼退。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'west', targetRoomId: 'mountain_camp', description: '逃回雪山營地' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 4, respawnSeconds: 35 },
      { monsterId: 'frostpine_stalker', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[狼]',
    mapX: 3,
    mapY: 13,
    guardianHints: {
      creature: '狼群有嚴格的階級——擊倒最大的那隻，其餘的就會暫時退卻。',
      treasure: '狼群的巢穴深處堆積著從旅人身上搶來的裝備和物品。',
      spirit: '雪狼群的首領擁有與冰之精靈溝通的能力，牠守護著通往精靈領域的入口。',
    },
  },

  ice_castle_gate: {
    id: 'ice_castle_gate',
    name: '冰封城堡大門',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'ice_castle_gate.png',
    imagePrompt: '冰封城堡大門 in frozen_wastes, landmark combat ice castle gate with dragon carvings, frost giant statues, blue door light and blowing snow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ice, clear lantern light',
    description:
      '冰封城堡大門聳立在風雪中，巨大冰門刻著龍紋，門縫透出冷冽藍光與低沉龍息。南面冰晶洞穴的晶光退入雪霧，西側彩光雪脊折回極光之地，北面冰門後是王座大廳，東面城牆旁連著結冰哨塔。門前石階被冰雪覆蓋，兩尊霜巨人雕像守在左右，階縫裡有巡邏重靴痕、凍住鑰匙孔和亮度變化的冰燈。',
    exits: [
      { direction: 'south', targetRoomId: 'crystal_ice_cave', description: '退回冰晶洞穴' },
      { direction: 'west', targetRoomId: 'aurora_field', description: '西側冰封城堡大門沿城堡外坡折返，穿過冰晶風口與彩光雪脊回到極光之地' },
      { direction: 'north', targetRoomId: 'ice_throne', description: '推開冰門，進入城堡', locked: true, keyItemId: 'gold_key' },
      { direction: 'east', targetRoomId: 'frozen_wastes_frozen_watchpost', description: '城牆旁有結冰哨塔' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 65 },
      { monsterId: 'royal_frost_guard', maxCount: 1, respawnSeconds: 1200 },
    ],
    npcs: ['ice_castle_guard'],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 15,
    guardianHints: {
      creature: '門口的「雕像」可能隨時活過來——不要背對著牠們。',
      treasure: '冰門上的龍紋在特定的魔法咒語下會開啟隱藏的寶庫。',
      spirit: '這座城堡是冰之王朝最後的堡壘，千年前的戰爭痕跡仍清晰可見。',
    },
  },

  ice_throne: {
    id: 'ice_throne',
    name: '冰封王座',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'ice_throne.png',
    imagePrompt: '冰封王座 in frozen_wastes, boss room with towering ice throne, sleeping ice dragon whelp, crystal walls and royal blue frost light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain ice, clear lantern light',
    description:
      '冰封王座位於城堡最深處，穹頂高聳，四壁冰晶映出巨大龍影，中央王座覆著層層霜紋。南面冰封城堡大門仍有藍光回照，北側王座背後裂縫通向魔族邊境，東方冰霧裡能感到龍息裂谷震動。王座上沉睡的幼年冰龍呼吸成霜，地面霜紋沿階梯緩慢蔓延；牆上碎晶會提前折出下一道吐息方向。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_castle_gate', description: '退回城堡大門' },
      {
        direction: 'north',
        targetRoomId: 'demon_border',
        description: '北側王座裂縫穿過冰晶斷階與黑煙深谷，越過冷熱交界後抵達魔族邊境石橋',
      },
      { direction: 'east', targetRoomId: 'frozen_wastes_dragon_breath_rift', description: '冰霧裂谷傳來龍息' },
    ],
    monsters: [
      { monsterId: 'ice_dragon_whelp', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'frost_giant_king', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'royal_frost_guard', maxCount: 1, respawnSeconds: 1200 },
    ],
    mapSymbol: '[龍]',
    mapX: 3,
    mapY: 16,
    guardianHints: {
      creature: '冰龍在睡夢中也會本能地攻擊靠近的生物——不要試圖偷襲。',
      treasure: '王座背後的密室裡藏著冰之王朝的王冠和權杖——傳說級的裝備。',
      spirit: '冰龍幼崽的母親長眠在雪原深處——牠在等待母親甦醒的那一天。',
    },
  },

  frozen_wastes_snowdrift_pass: {
    id: 'frozen_wastes_snowdrift_pass',
    name: '積雪隘口',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_snowdrift_pass.png',
    imagePrompt: '積雪隘口 in frozen_wastes, main route combat pass with high snowdrifts, buried trail stakes, wolf tracks and cold overcast light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain trail, clear lantern light',
    description:
      '積雪隘口位於雪原入口西側，高高積雪把岩壁擠成狹長通道，半埋路標只露出冰冷鐵環。東面回到雪原入口，北側可接暴風雪路外緣，南面雪坡通往廢棄雪橇。雪粒打在岩壁上發出沙沙聲，雪堆裡露出被埋補給箱、斷木杖和雪狼追擊留下的爪痕；窄道越往內越暗，像被風雪慢慢壓低。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'east', targetRoomId: 'snowfield_entrance', description: '回到雪原入口' },
      { direction: 'north', targetRoomId: 'blizzard_path', description: '北側積雪隘口沿半埋路標上行，穿過雪牆缺口與狼蹄痕抵達暴風雪路外緣' },
      { direction: 'south', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '雪橇殘骸在南側' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'frostpine_stalker', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[隘]',
    mapX: 1,
    mapY: 12,
  },

  frozen_wastes_ice_fishing_hole: {
    id: 'frozen_wastes_ice_fishing_hole',
    name: '冰釣洞',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_ice_fishing_hole.png',
    imagePrompt: '冰釣洞 in frozen_wastes, resource room with cut ice hole, fishing line, frost buckets, fish shadows and blue lake light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain ice, clear lantern light',
    description:
      '冰釣洞鑿在凍湖西側，圓形冰口邊架著木架、骨針和幾條凍硬釣線，幽藍水光從洞中透出。東面凍湖冰面開闊，南方暴風雪路的風聲隔著雪牆傳來，西側冰面裂縫映著冰河深處藍光。魚簍、破木牌和凍住手套散在洞旁，水下魚影緩慢游動，偶爾有冰元素的輪廓在深處凝聚。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'east', targetRoomId: 'frozen_lake', description: '回到凍湖冰面' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'glacier_bone_wraith', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[釣]',
    mapX: 1,
    mapY: 15,
  },

  frozen_wastes_frostpine_grove: {
    id: 'frozen_wastes_frostpine_grove',
    name: '霜松林',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_frostpine_grove.png',
    imagePrompt: '霜松林 in frozen_wastes, resource combat grove with snow-bent pines, blue needles, wolf tracks and green aurora light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain snow, clear lantern light',
    description:
      '霜松林位於雪山營地東北方，霜壓彎的松枝掛著藍綠針葉，極光照過時樹冠會泛出微亮冷色。南面雪山營地有橘色營火，東側雪狼巢穴的腥味從林影裡傳來，北面符石環的光柱在樹隙間閃動。樹根旁滿是狼爪、拖痕、乾枝與霜松樹脂，幾個獵人風鈴被凍在枝上，鈴聲忽遠忽近。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'south', targetRoomId: 'mountain_camp', description: '南側霜松林雪坡繞過倒木與狼爪痕，沿獵人風鈴與營火煙線折回雪山營地' },
      { direction: 'east', targetRoomId: 'wolf_den', description: '東側霜松根道穿過密林陰影與獵物拖痕，沿狼嚎方向抵達雪狼巢穴' },
      { direction: 'north', targetRoomId: 'frozen_wastes_runestone_circle', description: '北側霜松斷枝標記穿過極光雪坡與冰霜林隙，抵達古老符石環外圈' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'frostpine_stalker', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[松]',
    mapX: 4,
    mapY: 13,
  },

  frozen_wastes_abandoned_sledge: {
    id: 'frozen_wastes_abandoned_sledge',
    name: '廢棄雪橇',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_abandoned_sledge.png',
    imagePrompt: '廢棄雪橇 in frozen_wastes, hidden exploration wrecked sledge with broken runners, scattered crates, frozen blood and low campfire light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '廢棄雪橇半埋在雪坡下，斷裂滑木從雪裡翹出，翻倒箱子旁凝著黑色凍血。北面積雪隘口被高雪牆夾住，東側雪山營地的岩壁較為避風，南邊坡道連向雪人石堆。雪橇繩索被寒風拉得細響，箱內露出凍硬乾肉、破毛毯和被啃過的皮帶；血痕在雪面上斷斷續續，像襲擊者把貨物拖向更深風雪。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'north', targetRoomId: 'frozen_wastes_snowdrift_pass', description: '雪坡回到積雪隘口' },
      { direction: 'east', targetRoomId: 'mountain_camp', description: '營火光在東側閃動' },
      { direction: 'south', targetRoomId: 'frozen_wastes_yeti_cairn', description: '巨大腳印通往雪人石堆' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'yeti', maxCount: 1, respawnSeconds: 75 },
    ],
    groundItems: [
      { itemId: 'small_hp_potion', description: '破箱底部凍著一瓶紅色藥水' },
    ],
    mapSymbol: '[橇]',
    mapX: 1,
    mapY: 13,
  },

  frozen_wastes_glacier_crevasse: {
    id: 'frozen_wastes_glacier_crevasse',
    name: '冰河裂縫',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_glacier_crevasse.png',
    imagePrompt: '冰河裂縫 in frozen_wastes, hidden combat crevasse with blue ice walls, rope ladder, frozen fossils and deep shadow light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain ice, clear lantern light',
    description:
      '冰河裂縫從冰河西側撕開，深藍冰壁垂直落下，繩梯被厚霜封在裂縫邊。東面可攀回冰河，北側裂壁暗道通向半埋雪坡與廢棄雪橇。冰壁中封著古代獸骨、破碎器具和暗色植物，裂縫底部傳來空洞回聲；雪粉沿繩梯落入深處，很久都聽不見落地。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'east', targetRoomId: 'glacier', description: '攀回冰河表面' },
      { direction: 'north', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '北側結霜繩梯沿藍冰窄縫上行，先抵達半埋雪坡下的廢棄雪橇' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'glacier_bone_wraith', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[裂]',
    mapX: 1,
    mapY: 14,
  },

  frozen_wastes_runestone_circle: {
    id: 'frozen_wastes_runestone_circle',
    name: '符石環',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_runestone_circle.png',
    imagePrompt: '符石環 in frozen_wastes, landmark exploration room with ancient rune stones, aurora beams, snow altar and blue violet magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain snow, clear lantern light',
    description:
      '符石環立在極光之地西側，古老石柱圍住中央冰雪祭壇，綠紫光柱在符文間緩慢移動。東面極光雪原開闊，南側霜松林的樹影貼著坡下，北面結冰哨塔露出冰封塔身。每塊符石都刻著不同方向記號，底座有凍裂刻痕、霜封祭灰和微弱靜電聲；極光最亮時，石影會短暫映出王朝覆滅前的行列。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'east', targetRoomId: 'aurora_field', description: '極光路回到極光之地' },
      { direction: 'south', targetRoomId: 'frozen_wastes_frostpine_grove', description: '南側符石環雪坡沿極光刻痕下降，穿過冰霜林隙與斷枝路標回到霜松林深處' },
      { direction: 'north', targetRoomId: 'frozen_wastes_frozen_watchpost', description: '北側符石環雪坡穿過王朝巡邏標記與斷冰橋陰影，沿冰牆缺口通向結冰哨塔' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'ice_elemental', maxCount: 1, respawnSeconds: 50 },
      { monsterId: 'royal_frost_guard', maxCount: 1, respawnSeconds: 1200 },
    ],
    groundItems: [
      { itemId: 'ice_crystal', description: '祭壇邊有一顆被極光照亮的冰晶' },
      { itemId: 'aurora_runestone_chip', description: '符石底座裂下一枚紫綠色石片' },
    ],
    mapSymbol: '[符]',
    mapX: 1,
    mapY: 16,
  },

  frozen_wastes_yeti_cairn: {
    id: 'frozen_wastes_yeti_cairn',
    name: '雪人石堆',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_yeti_cairn.png',
    imagePrompt: '雪人石堆 in frozen_wastes, elite combat room with giant cairns, broken bones, huge footprints and aurora snow haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain snow, clear lantern light',
    description:
      '雪人石堆立在雪坡上，幾座巨石被霜雪黏成粗糙祭堆，石縫裡插著破矛、獸骨和凍住鈴鐺。北面廢棄雪橇的坡道回到車轍，西面霜松林有狼爪與松影，東側窄洞傳來雪狼巢穴的回聲但已被冰塊堵住。巨大足印圍著石堆繞行，陰影裡散著霜骨碎片和破布條，低沉咆哮在風中反覆滾動。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'north', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '巨大腳印回到廢棄雪橇' },
      { direction: 'west', targetRoomId: 'frozen_wastes_frostpine_grove', description: '雪坡繞回霜松林' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[堆]',
    mapX: 4,
    mapY: 14,
  },

  frozen_wastes_frozen_watchpost: {
    id: 'frozen_wastes_frozen_watchpost',
    name: '結冰哨塔',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_frozen_watchpost.png',
    imagePrompt: '結冰哨塔 in frozen_wastes, elite route watchpost with frozen battlements, cracked horn, frost giant tracks and cold castle light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '結冰哨塔立在冰封城堡東側，塔身被厚冰包住，城垛上的破裂號角覆滿霜刺。西面城堡大門的藍光沿牆根滲來，南面符石環雪坡上有王朝巡邏標記，遠處冰晶尖塔反射冷光。塔門前留著霜巨人腳印，內部兵器架和結冰地圖半埋在雪下；塔頂視野能同時看見冰堡、極光與龍息裂谷。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
    exits: [
      { direction: 'west', targetRoomId: 'ice_castle_gate', description: '城牆路回冰封城堡大門' },
      { direction: 'south', targetRoomId: 'frozen_wastes_runestone_circle', description: '南側結冰哨塔雪坡沿斷冰橋陰影折返，穿過王朝巡邏標記回到符石環' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'royal_frost_guard', maxCount: 1, respawnSeconds: 1200 },
    ],
    groundItems: [
      { itemId: 'frozen_watch_badge', description: '結冰兵器架下壓著一枚舊王朝徽章' },
    ],
    mapSymbol: '[哨]',
    mapX: 4,
    mapY: 15,
  },

  frozen_wastes_crystal_spire: {
    id: 'frozen_wastes_crystal_spire',
    name: '冰晶尖塔',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_crystal_spire.png',
    imagePrompt: '冰晶尖塔 in frozen_wastes, resource elite spire with towering blue crystals, prism stairs, frost mist and bright cold light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '冰晶尖塔從冰晶洞穴東側升起，藍色晶柱像螺旋階梯般環繞上升，尖端把寒霧切成刺眼白光。西面晶洞入口反射彩虹光，北側遠遠能望見結冰哨塔的殘影，東方裂谷方向傳來低沉龍息。塔身晶面封著氣泡、冰草和細小獸骨，底部散落高純冰晶碎片；當極光掃過時，整座尖塔會把雪原照成短暫的藍色鐘樓。',
    exits: [
      { direction: 'west', targetRoomId: 'crystal_ice_cave', description: '晶柱階梯回冰晶洞穴' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'glacier_bone_wraith', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[尖]',
    mapX: 4,
    mapY: 16,
  },

  frozen_wastes_dragon_breath_rift: {
    id: 'frozen_wastes_dragon_breath_rift',
    name: '龍息裂谷',
    zone: 'frozen_wastes' as RoomDef['zone'],
    image: 'frozen_wastes_dragon_breath_rift.png',
    imagePrompt: '龍息裂谷 in frozen_wastes, boss event rift with frozen breath clouds, blue fissure, dragon claw marks and royal ice light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain ice, clear lantern light',
    description:
      '龍息裂谷劈開冰封王座東側的荒原，兩側冰壁高聳，藍白寒流在裂縫底部翻滾。西面王座方向有黑藍冰霧滲出，北面寒霧裂口通向魔族邊境，南側只能遠望冰晶尖塔折射出的光。裂谷壁布滿巨大爪痕、斷裂鎖鏈與被凍住的鱗片，寒流週期性噴上岩棚，把新雪瞬間凍成硬殼；遠處黑煙預示著下一片土地的惡意。',
    exits: [
      { direction: 'west', targetRoomId: 'ice_throne', description: '裂谷回到冰封王座' },
      {
        direction: 'north',
        targetRoomId: 'demon_border',
        description: '北側龍息裂谷沿寒霧裂口前進，穿過冰龍爪痕與黑煙深谷抵達魔族邊境石橋',
      },
    ],
    monsters: [
      { monsterId: 'ice_dragon_whelp', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'frost_giant_king', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'royal_frost_guard', maxCount: 1, respawnSeconds: 1200 },
    ],
    mapSymbol: '[息]',
    mapX: 4,
    mapY: 17,
  },
};

// 合併擴充房間
import { EXPANSION_ROOMS } from './rooms-expansion.js';
Object.assign(ROOMS, EXPANSION_ROOMS);

const CHEST_BY_ZONE_TYPE: Record<ZoneDef['type'], string> = {
  town: 'bronze_chest',
  wilds: 'bronze_chest',
  resource: 'silver_chest',
  pvp: 'silver_chest',
  kingdom: 'silver_chest',
  dungeon_entrance: 'gold_chest',
  endgame: 'gold_chest',
};

function roomHasHiddenMarker(room: RoomDef): boolean {
  return /room function hidden|hidden|secret|隱|秘/i.test(`${room.id} ${room.name} ${room.description} ${room.imagePrompt ?? ''}`);
}

function markRoomAsHidden(room: RoomDef): void {
  if (roomHasHiddenMarker(room)) return;
  if (room.imagePrompt) {
    setRoomFunction(room, 'hidden');
  }
}

function setRoomFunction(room: RoomDef, role: 'entrance' | 'main route' | 'combat' | 'resource' | 'hidden' | 'elite' | 'boss' | 'town service'): void {
  if (!room.imagePrompt) return;
  room.imagePrompt = room.imagePrompt.replace(/room function (entrance|main route|combat|resource|hidden|elite|boss|town service)/i, `room function ${role}`);
}

function ensureNonTownRoomRoleTemplates(): void {
  const baseRoles = [
    'entrance',
    'main route', 'main route', 'main route', 'main route', 'main route',
    'combat', 'combat', 'combat', 'combat', 'combat', 'combat',
    'hidden', 'hidden', 'hidden',
    'resource', 'resource', 'resource',
    'elite',
    'boss',
    'boss',
  ] as const;

  for (const zone of Object.values(ZONES)) {
    if (zone.type === 'town') continue;
    const zoneRooms = zone.rooms.map((roomId) => ROOMS[roomId]).filter((room): room is RoomDef => !!room);
    zoneRooms.forEach((room, index) => setRoomFunction(room, baseRoles[index] ?? 'combat'));
  }
}

function ensureZoneExplorationAnchors(): void {
  for (const zone of Object.values(ZONES)) {
    const zoneRooms = zone.rooms.map((roomId) => ROOMS[roomId]).filter((room): room is RoomDef => !!room);
    if (zoneRooms.length === 0) continue;

    const hiddenRoom = zoneRooms.find(roomHasHiddenMarker) ?? zoneRooms[Math.min(2, zoneRooms.length - 1)];
    markRoomAsHidden(hiddenRoom);

    const hasOneTimeChest = zoneRooms.some((room) =>
      room.groundItems?.some((item) => item.oneTime && item.itemId.includes('chest')),
    );
    if (!hasOneTimeChest) {
      hiddenRoom.groundItems = [
        ...(hiddenRoom.groundItems ?? []),
        {
          itemId: CHEST_BY_ZONE_TYPE[zone.type],
          description: `${zone.name}隱蔽角落裡的一次性寶箱，箱面刻著區域紋章，只會供第一位發現者取走。`,
          oneTime: true,
        },
      ];
    }
  }
}

function enrichRoomImagePrompts(): void {
  for (const room of Object.values(ROOMS)) {
    if (!room.imagePrompt || room.imagePrompt.includes('safe crop margins for mobile and desktop UI')) continue;
    const zone = ZONES[room.zone];
    const routeCue = describePromptRoutes(room);
    const encounterCue = describePromptEncounters(room);
    const serviceCue = describePromptServices(room, zone);
    const terrainCue = extractPromptMarker(room.imagePrompt, /terrain ([^,]+)/i) ?? 'local terrain';
    const roleCue = extractPromptMarker(room.imagePrompt, /room function ([^,]+)/i) ?? 'exploration';
    const detailCue = getPromptDetailCue(room);

    room.imagePrompt = `${room.imagePrompt}, cinematic environment concept art with a slightly elevated three quarter camera at adventurer eye level, clear foreground walking space, readable midground landmark, deep background silhouette, ${routeCue}, room role ${roleCue}, terrain focus ${terrainCue}, ${encounterCue}, ${serviceCue}, ${detailCue}, layered key light, rim light, soft bounce light, atmospheric haze, worn floor edges, weathered stone, timber, cloth, metal, soil, water, crystal, smoke, dust, vertical composition, safe crop margins for mobile and desktop UI, leave empty side space for interface panels, no readable letters, no signage, no subtitles, no watermark, no inventory icons, no character portrait`;
  }
}

function enrichRoomExitDescriptions(): void {
  for (const room of Object.values(ROOMS)) {
    for (const exit of room.exits) {
      const targetRoom = ROOMS[exit.targetRoomId];
      const isCrossZone = !!targetRoom && targetRoom.zone !== room.zone;
      const isSpecial = !!exit.edgeKind && exit.edgeKind !== 'normal';
      const minimum = isSpecial ? 28 : isCrossZone ? 20 : 12;
      if (countCjkChars(exit.description ?? '') >= minimum) continue;

      exit.description = buildExitDescription(room, exit, targetRoom, isCrossZone, isSpecial);
    }
  }
}

function buildExitDescription(
  room: RoomDef,
  exit: RoomDef['exits'][number],
  targetRoom: RoomDef | undefined,
  isCrossZone: boolean,
  isSpecial: boolean,
): string {
  const direction = EXIT_DIRECTION_LABELS[exit.direction];
  const targetName = targetRoom?.name ?? '前方房間';
  const sourceZone = ZONES[room.zone];
  const targetZone = targetRoom ? ZONES[targetRoom.zone] : undefined;

  if (isSpecial) {
    const targetZoneName = targetZone?.name ?? '遠處區域';
    return `${direction}側長路先離開「${room.name}」，繞過${targetZoneName}外圍地標後抵達「${targetName}」，路程明顯長於相鄰房間。`;
  }

  if (isCrossZone) {
    const sourceZoneName = sourceZone?.name ?? '本區';
    const targetZoneName = targetZone?.name ?? '鄰近區域';
    return `${direction}側道路離開${sourceZoneName}，接上${targetZoneName}的「${targetName}」入口。`;
  }

  return `「${targetName}」就在${direction}側石路盡頭方向`;
}

function describePromptRoutes(room: RoomDef): string {
  const directions = room.exits.map(exit => PROMPT_DIRECTION_LABELS[exit.direction]).filter(Boolean);
  if (directions.length === 0) return 'contained chamber with a single focused central landmark';
  if (directions.length === 1) return `one visible route leading ${directions[0]} with strong floor perspective`;
  return `visible route cues leading ${directions.slice(0, 4).join(', ')} with distinct path silhouettes`;
}

function describePromptEncounters(room: RoomDef): string {
  const monsterCount = room.monsters?.length ?? 0;
  if (monsterCount >= 3) return 'active monster territory shown through tracks, broken cover, claw marks, scattered bones, and guarded sightlines';
  if (monsterCount > 0) return 'light encounter pressure shown through footprints, disturbed props, warning shadows, and a cautious approach path';
  return 'quiet exploration mood with environmental storytelling, usable negative space, and no foreground combatants';
}

function describePromptServices(room: RoomDef, zone: ZoneDef | undefined): string {
  const npcCount = room.npcs?.length ?? 0;
  const gatheringCount = room.items?.length ?? 0;
  const groundItemCount = room.groundItems?.length ?? 0;
  const zoneType = (zone?.type ?? 'wilds').replace(/_/g, ' ');
  const cues: string[] = [`zone category ${zoneType}`];
  if (npcCount > 0) cues.push('small staffed area with clear standing space for non player characters');
  if (gatheringCount > 0 || groundItemCount > 0) cues.push('collectible resource props integrated into the floor and wall materials');
  if (room.exits.some(exit => exit.edgeKind && exit.edgeKind !== 'normal')) cues.push('special travel edge shown as a longer path, bridge, portal, or distant landmark');
  return cues.join(', ');
}

function getPromptDetailCue(room: RoomDef): string {
  const seed = Math.abs(hashPromptSeed(room.id));
  const cues = [
    'include tiny practical props, broken tools, ropes, sacks, lantern hooks, and believable scale references',
    'include surface variation, puddles, chipped corners, moss, soot, scratches, footprints, and layered debris',
    'include strong silhouette separation between entrance, landmark, hazard, and safe walking lane',
    'include weather influence, drifting particles, damp surfaces, fabric movement, and distant environmental depth',
    'include foreground texture, midground interactable shapes, background navigation hint, and grounded material contrast',
  ];
  return cues[seed % cues.length];
}

function extractPromptMarker(prompt: string, pattern: RegExp): string | undefined {
  return prompt.match(pattern)?.[1]?.trim();
}

function hashPromptSeed(text: string): number {
  let hash = 0;
  for (const char of text) {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }
  return hash;
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

const PROMPT_DIRECTION_LABELS: Record<RoomDef['exits'][number]['direction'], string> = {
  north: 'north',
  south: 'south',
  east: 'east',
  west: 'west',
};

const EXIT_DIRECTION_LABELS: Record<RoomDef['exits'][number]['direction'], string> = {
  north: '北',
  south: '南',
  east: '東',
  west: '西',
};

ensureNonTownRoomRoleTemplates();
ensureZoneExplorationAnchors();
enrichRoomImagePrompts();
enrichRoomExitDescriptions();

/** 取得房間定義 */
export function getRoom(roomId: string): RoomDef | undefined {
  return ROOMS[roomId];
}

/** 取得區域定義 */
export function getZone(zoneId: string): ZoneDef | undefined {
  return ZONES[zoneId];
}

/** 取得區域內所有房間 */
export function getRoomsByZone(zoneId: string): RoomDef[] {
  return Object.values(ROOMS).filter(r => r.zone === zoneId);
}

/** 取得所有房間 ID */
export function getAllRoomIds(): string[] {
  return Object.keys(ROOMS);
}

// ============================================================
//  靜態世界地圖座標與通道房間
// ============================================================

import {
  STATIC_WORLD_BRIDGE_ROOMS,
  STATIC_WORLD_FILLER_ROOMS,
  STATIC_WORLD_ROOM_COORDINATES,
  STATIC_WORLD_ZONE_ROOM_IDS,
} from './world-map-static.js';

function applyStaticWorldMap(): void {
  Object.assign(ROOMS, STATIC_WORLD_FILLER_ROOMS, STATIC_WORLD_BRIDGE_ROOMS);

  for (const [zoneId, roomIds] of Object.entries(STATIC_WORLD_ZONE_ROOM_IDS)) {
    const zone = ZONES[zoneId];
    if (!zone) continue;
    for (const roomId of roomIds) {
      if (!zone.rooms.includes(roomId)) zone.rooms.push(roomId);
    }
  }

  for (const [roomId, coord] of Object.entries(STATIC_WORLD_ROOM_COORDINATES)) {
    const room = ROOMS[roomId];
    if (!room) continue;
    room.worldX = coord.worldX;
    room.worldY = coord.worldY;
  }
}

applyStaticWorldMap();

// ============================================================
//  跨區顯式出口 — 經敘事審查的跨區域步行連接
// ============================================================

const OPPOSITE_DIR: Record<string, Direction> = {
  north: 'south', south: 'north', east: 'west', west: 'east',
};

const CROSS_ZONE_CONNECTIONS: [string, Direction, string][] = [
  // starter_village ↔ starter_village_ext
  ['adventurer_guild', 'north', 'starter_village_ext_fill_2_n1'],
  ['starter_village_inn', 'north', 'starter_village_ext_fill_1_n1'],
  ['starter_village_old_library', 'north', 'starter_village_ext_fill_3_n1'],
  ['starter_village_chapel', 'north', 'starter_village_ext_fill_4_n1'],
  // starter_village ↔ old_farmland
  ['starter_village_storehouse', 'west', 'old_farmland_fill_n1_1'],
  ['starter_village_well_path', 'west', 'old_farmland_fill_n1_2'],
  ['starter_village_river_stairs', 'west', 'old_farmland_fill_n1_3'],
  // kingsroad_market ↔ lakeside_town
  ['kingsroad_market_portal_plaza', 'west', 'kingsroad_market_fill_22_0'],
  ['kingsroad_market_guard_post', 'west', 'kingsroad_market_fill_22_1'],
  // arena_quarter ↔ sapphire_lake
  ['arena_quarter_grand_gate', 'west', 'sapphire_lake_fill_22_7'],
  ['arena_quarter_champion_wall', 'west', 'sapphire_lake_fill_22_8'],
  ['arena_quarter_victory_arch', 'west', 'sapphire_lake_fill_22_9'],
  // arena_quarter ↔ kingsroad_market
  ['arena_quarter_prize_counter', 'north', 'kingsroad_market_fill_25_5'],
  // pilgrim_road ↔ plains
  ['pilgrim_road_smuggler_cache', 'north', 'plains_fill_11_5'],
  ['pilgrim_road_bandit_watch', 'north', 'plains_fill_12_5'],
  // pilgrim_road ↔ sapphire_lake
  ['pilgrim_road_old_cemetery_turn', 'east', 'sapphire_lake_entry_claim'],
  ['pilgrim_road_sunset_camp', 'south', 'sapphire_lake_entry_claim'],
  ['pilgrim_road_sanctuary_gate', 'south', 'sapphire_lake_vein_path'],
  ['pilgrim_road_final_marker', 'east', 'sapphire_lake_pebble_weir'],
  // pilgrim_road ↔ lakeside_town
  ['pilgrim_road_sanctuary_gate', 'north', 'lakeside_town_fill_15_6'],
  ['pilgrim_road_quiet_overlook', 'east', 'lakeside_tailor'],
  ['pilgrim_road_quiet_overlook', 'west', 'lakeside_town_fill_15_6'],
  // ironwood_fort ↔ dark_forest
  ['ironwood_fort_portal_yard', 'west', 'dark_forest_fill_n1_13'],
  ['ironwood_fort_quartermaster_row', 'west', 'dark_forest_fill_n1_14'],
  ['ironwood_fort_forge_works', 'west', 'dark_forest_fill_n1_15'],
  ['ironwood_fort_ironwood_grove', 'west', 'dark_forest_fill_n1_16'],
  // dark_forest ↔ whispering_valley
  ['firefly_trail', 'north', 'whispering_valley_fill_n7_11'],
  // plains ↔ starter_village
  ['plains_moonlit_copse', 'west', 'starter_village_fill_6_3'],
  // royal_hunting_grounds ↔ kingdom_frontier
  ['royal_hunting_grounds_horn_gate', 'west', 'kingdom_frontier_fill_n10_n7'],
  ['royal_hunting_grounds_deer_run', 'west', 'kingdom_frontier_fill_n10_n6'],
  ['royal_hunting_grounds_silver_trail', 'west', 'kingdom_frontier_fill_n10_n5'],
  ['royal_hunting_grounds_old_oak_stand', 'west', 'kingdom_frontier_fill_n10_n4'],
  // eastern_coast ↔ mist_harbor
  ['eastern_coast_fill_39_2', 'east', 'mist_harbor_fog_gate'],
  // moonlit_fen ↔ sapphire_lake
  ['moonlit_fen_sunken_log_bridge', 'north', 'moonlit_fen_fill_18_13'],
  ['moonlit_fen_old_canoe_camp', 'north', 'moonlit_fen_fill_19_13'],
  ['moonlit_fen_fill_20_14', 'north', 'moonlit_fen_fill_20_13'],
  // moonlit_fen ↔ marsh_of_mirrors
  ['moonlit_fen_dreamwater_core', 'east', 'marsh_of_mirrors_fill_24_15'],
  // sapphire_lake ↔ pilgrim_road
  ['sapphire_lake_lantern_dock', 'west', 'pilgrim_road_fill_13_9'],
  // lakeside_town ↔ sapphire_lake
  ['lakeside_tailor', 'south', 'sapphire_lake_pebble_weir'],
  // saltwind_flats ↔ eastern_coast
  ['saltwind_flats_blue_mud_shelf', 'north', 'eastern_coast_fill_34_6'],
  // deepsea_temple ↔ bloodsalt_coast
  ['deepsea_temple_tide_gate', 'west', 'bloodsalt_coast_fill_47_9'],
  // volcano_zone ↔ serpent_delta
  ['dwarf_mine', 'north', 'serpent_delta_fill_33_20'],
  ['volcano_ash_field', 'north', 'volcano_zone_fill_31_20'],
  // volcano_zone ↔ ember_march
  ['volcano_ash_field', 'west', 'ember_march_fill_30_21'],
  ['volcano_sulfur_springs', 'west', 'ember_march_fill_30_23'],
  ['volcano_lava_bridge', 'west', 'ember_march_fill_30_24'],
  // marsh_of_mirrors ↔ moonlit_fen
  ['marsh_of_mirrors_reed_gate', 'west', 'moonlit_fen_fill_23_16'],
  ['marsh_of_mirrors_peat_islet', 'west', 'moonlit_fen_fill_23_17'],
  // serpent_delta ↔ saltwind_flats
  ['serpent_delta_entrance_ferry', 'north', 'serpent_delta_fill_31_13'],
  ['serpent_delta_split_reed_bank', 'north', 'serpent_delta_fill_32_13'],
  ['serpent_delta_mudfish_pool', 'north', 'serpent_delta_fill_33_13'],
  // serpent_delta ↔ marsh_of_mirrors
  ['serpent_delta_entrance_ferry', 'west', 'marsh_of_mirrors_fill_30_14'],
  ['serpent_delta_heron_marker', 'west', 'marsh_of_mirrors_fill_30_16'],
  // ember_march ↔ thundersteppe
  ['ember_march_ash_gate', 'west', 'thundersteppe_fill_20_22'],
  ['ember_march_burnt_watchpost', 'west', 'thundersteppe_fill_20_23'],
  ['ember_march_glass_ash_field', 'west', 'thundersteppe_fill_20_24'],
  // glass_dunes ↔ redrock_badlands
  ['glass_dunes_sun_gate', 'west', 'glass_dunes_fill_0_21'],
  ['glass_dunes_buried_caravan', 'west', 'glass_dunes_fill_0_20'],
  // wildgrass_hills ↔ silverpine_range
  ['wildgrass_hills_old_road_cut', 'west', 'silverpine_range_fill_0_n12'],
  // amber_forest ↔ emerald_canopy
  ['amber_forest_resin_gate', 'west', 'emerald_canopy_fill_n18_7'],
  // thundersteppe ↔ glass_dunes
  ['thundersteppe_rolling_gate', 'west', 'thundersteppe_fill_10_23'],
  ['thundersteppe_thunder_pool', 'west', 'thundersteppe_fill_10_24'],
  ['thundersteppe_wind_shrine', 'west', 'thundersteppe_fill_10_25'],
  // blackwood ↔ amber_forest
  ['blackwood_wolf_den', 'north', 'amber_forest_fill_n13_11'],
  // storm_highlands ↔ frostbite_pass
  ['storm_highlands_cliff_gate', 'west', 'frostbite_pass_fill_n19_n14'],
  ['storm_highlands_rain_shelf', 'west', 'frostbite_pass_fill_n19_n13'],
  // sunken_catacombs ↔ bloodsalt_coast
  ['sunken_catacombs_tide_stair', 'west', 'bloodsalt_coast_saltglass_cave'],
];

for (const [roomAId, dir, roomBId] of CROSS_ZONE_CONNECTIONS) {
  const roomA = ROOMS[roomAId];
  const roomB = ROOMS[roomBId];
  if (!roomA || !roomB) continue;
  if (!roomA.exits.some(e => e.direction === dir)) {
    roomA.exits.push({ direction: dir, targetRoomId: roomBId });
  }
  const opp = OPPOSITE_DIR[dir];
  if (opp && !roomB.exits.some(e => e.direction === opp)) {
    roomB.exits.push({ direction: opp, targetRoomId: roomAId });
  }
}

// ============================================================
//  跨區邊界描述補丁 — 為跨區步行過渡提供敘事銜接
// ============================================================

const DESCRIPTION_OVERRIDES: Record<string, string> = {
  kingdom_frontier_fill_n10_n7: '號角獵門口穿過王室獵場西側界碑，西面邊境巡邏路仍有軍靴印，東側獵角門掛著舊銅環與裂紋號角徽。門下石板刻著王室獵令，刻痕裡積著泥沙和細草根。兩側木樁分別綁著軍用繩標與獵場綠布，顏色在風中互相摩擦。門外能聞到遠方營火煙味，門內則傳來潮濕林葉氣息，兩種氣味在門檻處混成明確的跨境痕跡。',
  kingdom_frontier_fill_n10_n6: '邊境巡邏路在獵場鹿徑西側延伸，西面是低牆與軍方哨旗，東側草叢裡可見王室與軍方並列的界標。路面狹窄而堅硬，軍靴印與鹿蹄印在泥裡交錯，只有一段較暗的石板穿過旗繩缺口。界碑旁立著舊警告牌，牌面被雨水洗到只剩輪廓。巡邏繩標沿草坡斷續前進，讓這條路看起來像被反覆放行又反覆收緊的邊境縫隙。',
  eastern_coast_fill_39_2: '霧港西門路牌潮徑位在東海岸最東端，半沉路牌亭立在濕石潮徑旁，西面仍有潮前帶礁水聲。東面濃霧中露出霧港城門拱影與銅鐘輪廓，亭腳浸在潮水裡，燈火被海霧暈成柔光。濕石間保留東向前進的清楚步線，兩側潮池和灰霧收住多餘分岔。這處潮徑像東海岸交給霧港的最後一枚路標，沒有文字，只有霧門、鐘影與被潮水洗亮的石面。',
  bloodsalt_coast_fill_47_9: '深海神殿西沉門路牌亭位在血鹽海岸最東端，西面斷棧只剩鹽蝕木樁，東側半沉石門刻滿古文，門後透出藍色火光與深海冷霧。亭柱下有紅鹽殼、腐木牌和被潮水磨平的舊箭頭，地面從濕木棧板逐漸變成海神殿的黑石階。此地正是血鹽海岸與深海神殿的交界端，西側紅霧標出回岸路，東側藍火則把視線引向潮汐石門；冷暖光色與材質轉換足以說明跨區方向。',
  serpent_delta_fill_33_20: '矮礦北口泥岸位在蛇河三角洲南緣，北面接舊堤南窄泥道，南面火山岩壁開著矮人礦坑入口，鐵鏽味與濕泥味混在一起。這裡是跨區 邊界 採集 點，泥岸上可採含鐵水苔，但主要功能是標示前往矮人礦坑的邊界。serpent_delta_fill_33_20周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  silverpine_range_fill_0_n12: '舊路銀松折口位於銀松山脈東緣，東側野草丘陵的舊路在這裡抬升成碎石階，南面洞口風聲從岩縫傳來。坡邊有可採的銀松針與冷露苔，這裡是 邊界 採集 路線，連接丘陵與山徑。silverpine_range_fill_0_n12周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  thundersteppe_fill_10_23: '雷草西緣位於琉璃沙丘與雷鳴草原交界，西側玻璃砂逐漸被濕草根壓住，東面滾雷門的銅鈴在風裡晃動。草葉間有雷露草採集痕，這裡是西側 採集 路線，讓玩家從沙地踏入草原。thundersteppe_fill_10_23周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  frostbite_pass_fill_n19_n14: '高原崖門西凍路牌站在霜咬隘口東北界，冰霜覆住木石牌身，牌面沒有字，只剩被風磨亮的邊角。北面惡魔邊境的冷影壓在山脊上，南側雨棚西界凍石路往下滑，東邊崖門吹來濕暖風。碎冰砂石路向東收束，西北冷影與東側濕霧形成明顯對比，路牌像釘在兩種氣候交界上的冷硬標記。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
  frostbite_pass_fill_n19_n13: '雨棚西界凍石路牌立在霜咬隘口東側，牌面被冰痕覆住，只有木石輪廓能辨出邊界地標。北面崖門西界繼續抬升，南側薄冰坡被冷雨封住，東邊風暴高原雨棚透出較濕暖的灰綠氣流。地面保留東向濕石路線，冰水、雪泥和風削碎石分層清楚，冷暖氣流在路牌旁交會成濕白霧。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
  pilgrim_road_fill_13_9: '藍寶湖西燈標古道位在巡禮古道與藍寶湖交界，北面舊墓園轉角仍有白石灰粉，東方碼頭燈籠映在湖霧裡。路標下散著旅人物資箱、乾糧包、破水囊與白石灰粉袋，可採少量補給；往東會從乾石路轉入湖岸棧道。pilgrim_road_fill_13_9周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  // 新手村東緣 → 平原過渡
  starter_village_fill_6_3: '東柵月林青石界位在新手村東界，西側守衛哨所與民宅木柵仍有燈火，東面翠綠平原的月光小林貼著草坡展開。這裡是 邊界 路線，青石路轉為野草，提醒新手離開安全區。starter_village_fill_6_3周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  starter_village_fill_6_4: '最後幾戶民宅擠在柵欄內側，牆縫裡長滿青苔。透過歪斜的籬笆，東邊可見幾塊蒼老巨石佇立在霧氣之中。',
  starter_village_fill_6_5: '加固的木柵上釘著褪色的警告牌，鐵絲纏繞的欄杆外是無人看管的荒野。遠處偶爾傳來低沉的狼嚎。',
  // 舊農田東緣 → 村莊過渡
  old_farmland_fill_n1_0: '雜草掩沒的農路盡頭抵著村莊的石砌地基牆，牆根處可見一塊鏽蝕的鐵柵地窖蓋，被枯藤與泥土半封。',
  old_farmland_fill_n1_1: '倉庫後穀車道貼著舊農田東界，東側是新手村倉庫斑駁後門，西面田埂上還留著壓碎的穀車轍。這裡是 邊界 service 路線，標示農田補給與村莊倉儲的銜接，只供後勤往來，不放怪物遭遇。old_farmland_fill_n1_1周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  old_farmland_fill_n1_2: '水井旁廢農道位於舊農田東側，北面可回望倉庫後穀車道，南面雜草沒入河階方向，東側村莊水井旁有石圈與木桶。這裡是 邊界 service 路線，作為農田取水與補給服務邊界，只連接村內取水點。old_farmland_fill_n1_2周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  // 新手村外圍（地窖附近）
  starter_village_ext_fill_0_n1: '鄉間草徑經過幾處坍塌的舊屋地基，雜草間隱約可見一扇被泥土與蔓藤覆蓋的活板門。',
  // 翡翠林冠東緣 → 黑木地面過渡
  emerald_canopy_fill_n18_12: '林冠棧道在此向下傾斜，平台漸漸被繩梯與朽木階梯取代，腳下透過板隙能看見遠處幽暗的林地。',
  emerald_canopy_fill_n18_13: '一座繞著古樹主幹盤旋而下的螺旋木梯，從明亮的翠色樹冠漸入鄰近暗林的陰翳灌木層。',
  // 蛇河三角洲南緣 → 火山過渡
  volcano_zone_fill_31_20: '北灰坡路線端位在火山地帶北緣，北面蛇河三角洲的濕泥被熱灰烤成硬殼，南側火山灰原冒出白色蒸氣。這裡是 路線 端點，提醒玩家從濕地邊界正式踏入高熱火山路線。volcano_zone_fill_31_20周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
  serpent_delta_fill_34_20: '架在水道上的三角洲棧道延伸至南方熔爐區，空氣中瀰漫著鐵鏽與硫磺的氣味，熱浪撲面而來。',
  serpent_delta_fill_35_20: '河防哨站設在三角洲邊界，河衛兵在此盤查往來熾燼營地的人員，南方隱約可見軍旗。',
  // 其他跨區邊界
  ironwood_fort_fill_7_12: '要塞東側的狹窄突門，厚重鐵皮門扇半開，門外是通往朝聖古道的碎石坡。',
  redrock_badlands_fill_n8_19: '紅色岩層在此逐漸被鏽蝕的鐵圍欄取代，西邊飄來不自然的寒氣，空氣中帶著腐土與枯骨的味道。',
  redrock_badlands_fill_0_19: '荒地地形抵達要塞南牆腳下，抬頭可見高處的崗樓與巡邏兵的火把光。',
  arena_quarter_fill_23_12: '競技場區西側的臨湖長廊，觀眾倚著木欄杆眺望碧藍湖面，歡呼聲與水波聲交織。',
};

const DESCRIPTION_APPENDS: Record<string, string> = {
  adventurer_guild: '北門後方有一條小徑通往村莊外圍的鄉間草地。',
  starter_village_old_library: '北側有一扇被書架半遮的小門，通往村莊外圍的小路。',
  starter_village_chapel: '北側後門通往溪邊的戶外便道。',
  starter_village_storehouse: '西牆有一道被板條封住的破舊後門，似乎通往村莊外的舊農場方向。',
  lakeside_tailor: '南面窗外可見湖岸的卵石水堰，水氣偶爾飄入坊內讓布料帶上淡淡湖味。',
  amber_forest_resin_gate: '西側樹冠逐漸升高，金色樹脂被翠綠苔蘚取代，隱約可見翡翠林冠的巨木輪廓。',
  sunken_catacombs_tide_stair: '西側石壁裂縫透出鹹風與鹽晶反光，似乎通向海岸方向的另一處洞穴。',
  bloodsalt_coast_saltglass_cave: '洞穴深處的東側裂縫流出黑水，帶著陳年腐朽氣味，像是通往某處更古老的地下空間。',
};

for (const [roomId, desc] of Object.entries(DESCRIPTION_OVERRIDES)) {
  const room = ROOMS[roomId];
  if (room) room.description = desc;
}
for (const [roomId, append] of Object.entries(DESCRIPTION_APPENDS)) {
  const room = ROOMS[roomId];
  if (room) room.description += append;
}

const EXIT_DESCRIPTION_OVERRIDES: Record<string, string> = {
  'kingsroad_market_portal_plaza:west': '西側平整石板離開傳送廣場，接往王道西市石路與西口貨車動線',
  'kingsroad_market_guard_post:west': '西側檢查桌旁窄石巷離開守衛哨，接往王道西哨巷',
  'adventurer_guild:north': '北側公會後門離開村內木屋區，接往村外墓園西側炭草界',
  'starter_village_inn:north': '北側旅店後門穿過木柵與田埂，接往新手村外旅店北田埂',
  'starter_village_storehouse:west': '西側倉庫破門離開村內石牆，接往舊農田殘破穀道',
  'starter_village_chapel:north': '北側禮拜堂後門越過柳樹祠邊，接往村外溪邊便道',
  'starter_village_well_path:west': '西側井邊泥路離開村內水井，接往舊農田廢棄農道',
  'starter_village_old_library:north': '北側書庫後門穿過草牆缺口，接往村外公會北後勤路',
  'starter_village_river_stairs:west': '西側溪畔石階沿水聲出村，接往舊農田荒田小路',
  'moonlit_fen_old_canoe_camp:north': '北側沿舊舟拖痕踏上沉木北橋，接往濕地北緣採集邊界',
  'ember_march_ash_gate:west': '西側穿過灰燼門柱與焦黑火草坡，接往雷鳴草原南緣焦草界',
  'ember_march_burnt_watchpost:west': '西側越過燒毀哨塔木樁與風化灰坡，接往雷鳴草原南界雷草路',
  'ember_march_glass_ash_field:west': '西側沿玻灰原碎晶與焦草分界前行，接往雷鳴草原南緣雷痕地',
  'arena_quarter_grand_gate:west': '西側穿過競技場正門石階與臨湖拱道，接往藍寶湖東岸觀賽長廊',
  'arena_quarter_champion_wall:west': '西側沿冠軍牆浮雕與湖風石廊前行，接往藍寶湖東岸碑牆邊道',
  'arena_quarter_prize_counter:north': '北側越過獎品櫃台後方貨門與市集石路，接往王道市集南緣領獎巷',
  'arena_quarter_victory_arch:west': '西側穿過勝利拱門陰影與湖岸石階，接往藍寶湖東岸觀景步道',
  'royal_hunting_grounds_horn_gate:west': '西側穿過獵角門木柵與王室界樁，接往王國邊境關卡通道',
  'royal_hunting_grounds_deer_run:west': '西側沿鹿徑草坡與巡邏繩標下行，接往王國邊境巡邏路',
  'royal_hunting_grounds_silver_trail:west': '西側踏過銀草獵徑與邊牆陰影，接往王國邊境前線小路',
  'royal_hunting_grounds_old_oak_stand:west': '西側繞過老橡樹根與獵場木牌，接往王國邊境邊牆走道',
  'serpent_delta_entrance_ferry:north': '北側沿渡船索樁踏上鹽霧泥灘，接往北河鹽霧渡口',
  'serpent_delta_entrance_ferry:west': '西側穿過入口渡口舊木樁與黑水蘆影，接往鏡沼東側泥水邊界',
  'serpent_delta_split_reed_bank:north': '北側沿分流蘆根泥徑上行，接往北分流草蘆岸',
  'serpent_delta_mudfish_pool:north': '北側踩過泥魚翻出的淺灘泥脊，接往北泥魚淺灘',
  'serpent_delta_heron_marker:west': '西側越過鷺鳥木牌與冷色蘆門水痕，接往鏡沼東南泥炭水道',
  'thundersteppe_rolling_gate:west': '西側穿過滾雷門銅鈴與帶電草根，接往雷草西緣',
  'thundersteppe_thunder_pool:west': '西側沿雷池水洼外的濕亮草徑，接往雷雨草徑',
  'thundersteppe_wind_shrine:west': '西側順著祭旗風聲下到晶砂草坡，接往風祭草坡',
  'storm_highlands_cliff_gate:west': '西側穿過峭壁門碎石階與冰風缺口，接往霜咬隘口南側雪岩路',
  'storm_highlands_rain_shelf:west': '西側沿雨棚岩臺與濕滑雲階下行，接往霜咬隘口北側冰雨坡',
  'pilgrim_road_smuggler_cache:north': '北側穿過走私者藏貨石縫與草坡車轍，接往平原南緣舊車道',
  'pilgrim_road_bandit_watch:north': '北側越過盜匪哨位破旗與乾草丘，接往平原南側警戒草線',
  'pilgrim_road_old_cemetery_turn:east': '東側沿舊墓園白石路轉入湖霧，接往藍寶湖入口宣示石',
  'pilgrim_road_final_marker:east': '東側穿過終點聖碑旁碎石路與濕草坡，接往藍寶湖鵝卵石堰',
  'saltwind_flats_blue_mud_shelf:north': '北側沿藍泥潮棚與鹽草淺溝上行，接往東方海岸南側濕沙邊界',
  'dwarf_mine:north': '北側穿過礦坑排水口與火山岩壁裂縫，接往蛇河三角洲矮礦北口泥岸',
  'volcano_ash_field:north': '北側沿白色蒸氣與硬殼熱灰坡上行，接往北灰坡路線端',
  'volcano_ash_field:west': '西側穿過黑灰丘與熱風灰線，接往餘燼邊境火山灰田西界',
  'volcano_sulfur_springs:west': '西側越過硫磺白霧與發熱礫石，接往餘燼邊境硫泉西界燼路',
  'lakeside_tailor:south': '南側從裁縫坊湖窗旁石階下行，穿過卵石水氣接往藍寶湖鵝卵石堰',
  'ironwood_fort_portal_yard:west': '西側穿過鐵木要塞傳送庭外牆與陰林斷枝，接往暗影森林東界軍路',
  'ironwood_fort_quartermaster_row:west': '西側沿軍需棚後門與鐵木柵欄外行，接往暗影森林東界補給林徑',
  'ironwood_fort_forge_works:west': '西側越過鍛爐排煙口與焦黑鐵木根，接往暗影森林東界炭火林道',
  'ironwood_fort_ironwood_grove:west': '西側穿過鐵木林護欄與陰影樹根，接往暗影森林東界古木路',
  'wildgrass_hills_old_road_cut:west': '西側沿舊路碎石階與銀松針坡上行，接往銀松山脈東緣舊路折口',
  'marsh_of_mirrors_reed_gate:west': '西側穿過鏡沼蘆門與冷水倒影，接往月光濕地東側鏡沼蘆門汊',
  'marsh_of_mirrors_peat_islet:west': '西側踏過泥炭小洲與暗色反光水痕，接往月光濕地泥鏡交界水道',
  'amber_forest_resin_gate:west': '西側穿過金色樹脂門與翠綠苔蘚高根，接往翡翠林冠東緣巨木坡',
  'sapphire_lake_entry_claim:west': '西側沿入口宣示石與湖霧白石路回行，接往巡禮古道舊墓園轉角',
  'sapphire_lake_lantern_dock:west': '西側穿過碼頭燈籠與潮濕湖岸棧道，接往巡禮古道藍寶湖西燈標',
  'sapphire_lake_pebble_weir:west': '西側沿鵝卵石水堰與濕草坡回行，接往巡禮古道終點聖碑',
  'firefly_trail:north': '北側沿螢光林徑與潮濕藤根上行，接往低語溪谷南緣溪霧小路',
  'mist_harbor_fog_gate:west': '西側穿過霧港城門拱影與潮濕路牌亭，接往東方海岸最東端礁水潮徑',
  'glass_dunes_sun_gate:west': '西側沿日門玻砂脊下行，接往西側玻沙採集界坡',
  'glass_dunes_buried_caravan:west': '西側繞過半埋車隊殘輪與玻砂堆，接往西側沙脊殘道',
  'plains_moonlit_copse:west': '西側穿過月光小林草坡與新手村東柵木門，接回村內青石安全路',
  'blackwood_wolf_den:north': '北側沿影狼爪痕與樹脂根脈上行，接往琥珀森林南緣金葉林界',
  'deepsea_temple_tide_gate:west': '西側穿過半沉潮門與鹽蝕斷棧，接回血鹽海岸東端路牌亭',
};
for (const [key, description] of Object.entries(EXIT_DESCRIPTION_OVERRIDES)) {
  const [roomId, direction] = key.split(':') as [string, Direction];
  const exit = ROOMS[roomId]?.exits.find(exit => exit.direction === direction);
  if (exit) exit.description = description;
}
const _inn = ROOMS['starter_village_inn'];
if (_inn) {
  _inn.description = _inn.description.replace(
    '北窗能看見公會屋簷',
    '北窗能看見公會屋簷，窗旁暗門通往村外的田野通道',
  );
}

// ============================================================
//  座標移動阻擋 — 阻止地形差異過大的相鄰房間通行
// ============================================================

const BLOCKED_PASSAGES: [string, Direction][] = [
  // 隱蔽地窖（地下）不應直通戶外
  ['starter_village_hidden_cellar', 'north'],
  ['starter_village_hidden_cellar', 'west'],
  // 暗影森林南緣 → 赤岩荒地（森林→熔岩）
  ['dark_forest_fill_n4_18', 'south'],
  ['dark_forest_fill_n1_18', 'south'],
  // 赤岩荒地北緣 → 暗影森林（熔岩→森林，雙向阻擋）
  ['redrock_badlands_lava_worm_sink', 'north'],
  ['redrock_badlands_scarlet_crater', 'north'],
  // 鐵木要塞南緣 → 琉璃沙丘/赤岩荒地（要塞→沙漠/荒地）
  ['ironwood_fort_fill_0_18', 'south'],
  ['ironwood_fort_fill_7_18', 'south'],
  // 琉璃沙丘北緣 → 鐵木要塞（沙漠→要塞，雙向阻擋）
  ['glass_dunes_saltwind_cut', 'north'],
  ['glass_dunes_glassstorm_basin', 'north'],
  // 王道市集東緣 → 東方海岸（市集→海灘）
  ['kingsroad_market_fill_30_3', 'east'],
  ['kingsroad_market_fill_30_5', 'east'],
  // 東方海岸西緣 → 王道市集（海灘→市集，雙向阻擋）
  ['eastern_coast_seaweed_flats', 'west'],
  ['eastern_coast_tidepool_grotto', 'west'],
  // 競技城區東緣 → 鹽風灘/東方海岸
  ['arena_quarter_fill_30_6', 'east'],
  ['arena_quarter_fill_30_7', 'east'],
  ['arena_quarter_fill_30_8', 'east'],
  ['arena_quarter_fill_30_9', 'east'],
  ['arena_quarter_fill_30_10', 'east'],
  ['arena_quarter_fill_30_11', 'east'],
  ['arena_quarter_fill_30_12', 'east'],
  // 鹽風灘西緣 → 競技城區（雙向阻擋）
  ['saltwind_flats_tide_gate', 'west'],
  ['saltwind_flats_mist_marker', 'west'],
  // 競技城區南緣 → 鏡沼
  ['arena_quarter_fill_24_12', 'south'],
  ['arena_quarter_fill_25_12', 'south'],
  ['arena_quarter_fill_26_12', 'south'],
  ['arena_quarter_fill_27_12', 'south'],
  ['arena_quarter_fill_28_12', 'south'],
  ['arena_quarter_fill_29_12', 'south'],
  ['arena_quarter_fill_30_12', 'south'],
  // 鏡沼北緣 → 競技城區（雙向阻擋）
  ['marsh_of_mirrors_serpent_channel', 'north'],
  ['marsh_of_mirrors_sinking_shrine', 'north'],
  // 鏡沼南緣 → 月影庭（等級跨度）
  ['marsh_of_mirrors_hag_lantern', 'south'],
  // 餘燼邊境北緣 → 月光濕地（等級跨度）
  ['ember_march_firegrass_flat', 'north'],
  // 霧望燈室（燈塔頂）↔ 紅鹽灘（地面）
  ['mist_harbor_fogwatch_lantern', 'south'],
  ['bloodsalt_coast_red_salt_flats', 'north'],
];

for (const [roomId, dir] of BLOCKED_PASSAGES) {
  const room = ROOMS[roomId];
  if (!room) continue;
  if (!room.exits.some(e => e.direction === dir)) {
    room.exits.push({ direction: dir, targetRoomId: '', locked: true });
  }
}

const BLOCKED_EXIT_DESCRIPTION_OVERRIDES: Record<string, string> = {
  'starter_village_hidden_cellar:north': '北側地窖頂板被村屋地基壓住，不能直接鑽回戶外',
  'starter_village_hidden_cellar:west': '西側土牆潮濕坍陷，不能從地窖硬挖通往村外',
  'ember_march_firegrass_flat:north': '北側火草平地被熱風與濕地黑水斷層隔開，不能直接越級北上月光濕地',
  'saltwind_flats_tide_gate:west': '西側潮門背後是競技城區石牆與鹽水落差，不能從灘地硬穿回城',
  'saltwind_flats_mist_marker:west': '西側霧標後方被競技城區外牆與濃霧封住，不能離開鹽風灘',
  'eastern_coast_tidepool_grotto:west': '西側潮池岩穴被王道市集外牆與濕滑礁縫隔開，不能從洞內硬穿回市集',
  'eastern_coast_seaweed_flats:west': '西側海藻灘盡頭是王道市集石牆與深潮落差，不能從灘面直接穿回城內',
  'mist_harbor_fogwatch_lantern:south': '南側燈室外只有垂直燈塔牆與海霧落差，不能從塔頂直接回到紅鹽灘地面',
};
for (const [key, description] of Object.entries(BLOCKED_EXIT_DESCRIPTION_OVERRIDES)) {
  const [roomId, direction] = key.split(':') as [string, Direction];
  const exit = ROOMS[roomId]?.exits.find(exit => exit.direction === direction);
  if (exit) exit.description = description;
}

// ============================================================
//  世界座標索引 — 路線 B 座標化移動基礎
// ============================================================

const _worldGrid = new Map<string, string>();

for (const room of Object.values(ROOMS)) {
  if (typeof room.worldX !== 'number' || typeof room.worldY !== 'number') continue;

  const key = `${room.worldX},${room.worldY}`;
  const existingRoomId = _worldGrid.get(key);
  if (existingRoomId && existingRoomId !== room.id) {
    throw new Error(`World coordinate collision at ${key}: ${existingRoomId} and ${room.id}`);
  }
  _worldGrid.set(key, room.id);
}

/** 用世界座標查詢房間 */
export function getRoomByWorldCoord(wx: number, wy: number): RoomDef | undefined {
  const roomId = _worldGrid.get(`${wx},${wy}`);
  return roomId ? ROOMS[roomId] : undefined;
}

/** 取得房間的世界座標（已在啟動時烘焙到 RoomDef） */
export function getRoomWorldCoord(roomId: string): { worldX: number; worldY: number } | undefined {
  const room = ROOMS[roomId];
  if (!room || typeof room.worldX !== 'number' || typeof room.worldY !== 'number') return undefined;
  return { worldX: room.worldX, worldY: room.worldY };
}
