// 房間定義 - 所有區域與房間資料

import type { RoomDef, ZoneDef } from '@game/shared';

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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: resourceNodeRoomIds('glass_dunes'),
  },
  underground_city: {
    id: 'underground_city',
    name: '地下城邦',
    description: '地底族群建立的階梯城邦，熔爐、暗河與黑市在巨大洞頂下運作。',
    levelRange: [30, 42],
    type: 'town',
    region: 'underground',
    tags: ['safe', 'trade_hub', 'crafting_hub', 'portal_hub', 'quest_hub'],
    pvpMode: 'safe',
    deathPenalty: 'none',
    dangerLevel: 0,
    recommendedPartySize: [1, 1],
    primaryElements: ['none', 'fire'],
    portal: { id: 'portal_underground_city', name: '地下城邦傳送陣', cost: 70, network: 'public' },
    rooms: [],
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
    rooms: [],
  },
  storm_highlands: {
    id: 'storm_highlands',
    name: '風暴高原',
    description: '高原峭壁被暴風切割，古老風神祭壇與獅鷲巢穴隱於雲層之上。',
    levelRange: [32, 42],
    type: 'wilds',
    region: 'north',
    tags: ['elite_patrols', 'world_boss', 'party'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 7,
    recommendedPartySize: [2, 4],
    primaryElements: ['lightning', 'none'],
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: resourceNodeRoomIds('obsidian_depths'),
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
    rooms: resourceNodeRoomIds('starfall_crater'),
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    portal: { id: 'portal_ironwood_fort', name: '鐵木要塞傳送陣', cost: 50, network: 'public' },
    rooms: [],
  },
  amber_forest: {
    id: 'amber_forest',
    name: '琥珀森林',
    description: '金色樹脂凝固在古木之間，許多昆蟲與小型魔物被封存成發光琥珀。',
    levelRange: [20, 32],
    type: 'resource',
    region: 'west',
    tags: ['gathering', 'elite_patrols'],
    pvpMode: 'duel_only',
    deathPenalty: 'durability',
    dangerLevel: 5,
    recommendedPartySize: [2, 4],
    primaryElements: ['nature', 'fire'],
    rooms: resourceNodeRoomIds('amber_forest'),
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
    rooms: resourceNodeRoomIds('silverpine_range'),
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
    rooms: [],
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
    rooms: [],
  },
  ember_march: {
    id: 'ember_march',
    name: '餘燼邊境',
    description: '火山灰覆蓋的邊境地帶仍有餘燼在地縫裡燃燒，是火山與荒地之間的危險過渡區。',
    levelRange: [22, 34],
    type: 'wilds',
    region: 'south',
    tags: ['high_density_spawns', 'elite_patrols'],
    pvpMode: 'open',
    deathPenalty: 'gold',
    dangerLevel: 6,
    recommendedPartySize: [2, 4],
    primaryElements: ['fire', 'none'],
    rooms: [],
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
    rooms: [],
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
    rooms: resourceNodeRoomIds('sapphire_lake'),
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: [],
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
    rooms: resourceNodeRoomIds('machine_graveyard'),
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
    rooms: [],
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
    rooms: [],
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
    rooms: resourceNodeRoomIds('hollow_mountain'),
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
    rooms: [],
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
    rooms: [],
  },
};

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
    imagePrompt: '村莊廣場 in starter_village, town core plaza with fountain, quest board, service crossroads, warm lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '新手村的中心廣場鋪著被歲月磨亮的灰色石板，雨後的水痕沿著縫隙流向中央噴泉，泉水在銅色燈籠下泛著柔和微光。北側公會門口掛滿委託單，東邊傳來鐵匠鋪的敲擊聲，西邊飄著草藥與乾花氣味，南側可看見村門火把和通往平原的泥路。噴泉旁的舊告示板標出新手訓練、傳送陣與村內服務位置，也暗示有些委託需要仔細查看廣場角落。' +
      '廣場四周的排水溝能聽見細小水聲，旅人腳印在不同方向交錯，讓新人能從聲音、氣味和路標判斷下一步該去商店、公會、村口或傳送祠堂。噴泉底座有幾道新刮痕，提醒玩家可用 look 或 inspect 找到隱藏線索。',
    exits: [
      { direction: 'north', targetRoomId: 'adventurer_guild', description: '冒險者公會的大門敞開著' },
      { direction: 'east', targetRoomId: 'weapon_shop', description: '傳來鐵匠打鐵的聲響' },
      { direction: 'west', targetRoomId: 'potion_shop', description: '空氣中飄著草藥的香氣' },
      { direction: 'south', targetRoomId: 'village_gate', description: '通往村口的道路' },
      { direction: 'up', targetRoomId: 'village_backhill', description: '一條小路蜿蜒通往村莊後山' },
      { direction: 'down', targetRoomId: 'starter_village_portal_shrine', description: '噴泉後方的石階通往傳送祠堂' },
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
    imagePrompt: '冒險者公會 in starter_village, town service guild hall with quest board, mentor desk, candlelit rafters, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '武器店 in starter_village, town service weapon shop with forge, weapon racks, orange firelight and smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '武器店的石牆被爐火烤得微微發紅，長劍、短弓、權杖與練習盾按等級掛在不同架位上，金屬油與煤煙的味道混在一起。鐵砧旁的地面刻著安全線，提醒新人不要靠近噴濺的火星；西門可回廣場，北側半開的木門連到修補裝備的小工棚。架上每件武器都掛著用途牌，暗示玩家可以比較欄位、等級與職業需求再裝備。' +
      '爐邊水槽不斷冒出白霧，敲打聲會隨鐵匠動作在屋樑間回響。櫃檯下方擺著待鑑定的舊短劍和木箱，牆上的箭頭牌標示修補工棚方向，提醒玩家戰鬥前檢查武器、耐久和背包空位。',
    exits: [
      { direction: 'west', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'north', targetRoomId: 'starter_village_crafting_shed', description: '小工棚裡傳出磨刀與修補聲' },
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
    imagePrompt: '藥水店 in starter_village, town service apothecary with herb shelves, glowing bottles, green window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '藥水店裡的木架從地面堆到天花板，紅藍藥水在玻璃瓶中閃著柔光，乾燥薰衣草、薄荷與苦艾草垂掛在窗邊。櫃檯後方的藥典翻到治療創傷的頁面，旁邊標著低等冒險者常用補給；東門通回廣場，後門通往儲藏屋。地上細碎藥粉形成一條淡綠痕跡，提示仔細調查或補給後再前往戰鬥區。' +
      '屋內能聽見研磨棒碰撞石臼的細響，藥師把不同尺寸的瓶子依照用途排列，讓人一眼看出恢復生命、魔力和解除異常的差別。後方門縫吹來倉庫冷氣，暗示補給箱、隱藏地窖和簡單搜尋任務都與這間店相連。',
    exits: [
      { direction: 'east', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'north', targetRoomId: 'starter_village_storehouse', description: '藥草箱堆滿後方儲藏屋' },
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
    imagePrompt: '村口 in starter_village, town gate and safe exit with wooden palisade, torchlight, road to plains, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村口的木柵欄沿著低矮土坡展開，尖木樁上繫著避獸鈴，微風吹過時發出細碎聲響。南方泥路通往翠綠平原，遠處能看見草浪和野獸踩出的暗色小徑；北面回到廣場，東側訓練場傳來木劍撞擊聲，西側小路繞往外圍。守衛火把照亮路標與警告牌，提醒初學者先檢查裝備、藥水與任務，再離開安全區進入可能遭遇史萊姆的道路。' +
      '柵門下方有新鮮黏液和被拖曳的草束，說明怪物偶爾會靠近安全區邊緣。木梯通往上方哨所，可俯看撤退路線；路標同時標出平原入口與村外小徑，讓玩家能清楚判斷南、北、東、西與上方出口。',
    exits: [
      { direction: 'north', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'east', targetRoomId: 'training_ground', description: '訓練場在東邊' },
      { direction: 'south', targetRoomId: 'plains_entrance', description: '踏出村口，前往翠綠平原' },
      { direction: 'west', targetRoomId: 'village_outskirts', description: '一條小路通往村莊外圍' },
      { direction: 'up', targetRoomId: 'starter_village_guard_post', description: '木梯通往守衛哨所' },
    ],
    monsters: [
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
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
    imagePrompt: '訓練場 in starter_village, town training yard with straw dummies, weapon rack, sunset dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一片被夯實的空地上擺放著稻草人和木製練習靶，幾位新手冒險者正揮汗如雨地練習著基本的劈砍動作。' +
      '場邊的武器架上放著各種練習用的鈍器，木劍碰撞聲和教官的喝斥聲此起彼落。' +
      '地面上散落著被劈爛的稻草和斷裂的練習箭矢，空氣中瀰漫著汗水和泥土的氣味。' +
      '夕陽的餘暉將練習場映成金色，新手們的影子在地上拉得長長的。',
    exits: [
      { direction: 'west', targetRoomId: 'village_gate', description: '回到村口' },
      { direction: 'north', targetRoomId: 'starter_village_rooftop_walk', description: '木梯連到觀戰用的屋頂棧道' },
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
    imagePrompt: '旅人小屋 in starter_village, town service inn with hearth, bunks, rain-dark timber, warm firelight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '旅人小屋裡燃著穩定的壁爐，濕斗篷掛在門邊滴水，粗木長凳被來往新手磨得發亮。北窗能看見公會屋簷，南側窄門通向藥水店附近的小巷，東邊則是人聲嘈雜的冒險者公會。櫃檯旁放著簡易床位牌與醒酒茶，提示受傷或補給不足時可以先回到安全服務區整理狀態。',
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
    imagePrompt: '補給倉庫 in starter_village, town service storehouse with crates, herb bundles, shaft of dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '補給倉庫堆滿標著公會印記的木箱，乾草、繃帶、空瓶與低階採集工具分門別類放在架上，屋頂破洞灑下一束帶塵光線。東門通往藥水店櫃檯，地板下方傳出空洞回聲，暗示某個可調查的地窖入口。牆上的清單提醒新人出門前確認負重與消耗品，避免在野外無法拾取戰利品。',
    exits: [
      { direction: 'east', targetRoomId: 'potion_shop', description: '回到藥水店' },
      { direction: 'down', targetRoomId: 'starter_village_hidden_cellar', description: '一塊鬆動地板通往隱蔽地窖' },
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
    imagePrompt: '晨光禮拜堂 in starter_village, town service chapel with simple altar, colored window light, quiet stone floor, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '晨光禮拜堂由白石和舊木梁搭成，彩色玻璃把清晨光線切成淡金與淺藍的碎片，灑在簡樸祭壇前。南門連到市場小巷，西側通向舊書庫，祭壇旁的祈願簿記著許多失敗又重新出發的冒險者姓名。這裡沒有怪物，卻提示玩家死亡後安全點、治療服務與祭司職業相關任務的方向。長椅間能聞到蠟油和雨濕木頭的味道，祭壇背後掛著村內安全路線圖，標明廣場、傳送祠堂和村口哨所的位置。幾張祈禱紙提到復活、護送與治療委託，暗示玩家可從 NPC 對話或任務看板取得支援型目標，也能辨認安靜側廊的出口。',
    exits: [
      { direction: 'south', targetRoomId: 'starter_village_market_lane', description: '禮拜堂外是市場小巷' },
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
    imagePrompt: '新手村傳送祠堂 in starter_village, town service portal room with runestone circle, blue lantern light, safe travel node, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '傳送祠堂藏在廣場噴泉後方的半地下石室，圓形地面刻滿被腳步磨亮的古代符文，藍白光線從符文縫隙緩緩升起。北側石階回到村莊廣場，東側窄廊能通向守衛哨所下方，牆面掛著交通網路、解鎖條件與傳送費用的木牌。祠堂中央的傳送陣被公會封印穩定住，適合新手學習 activate portal，也提醒背包過重或攜帶特殊資源時可能無法使用一般傳送。石壁上的裂紋會隨魔力脈衝發亮，低沉嗡鳴提示傳送節點已解鎖；地面箭頭刻痕清楚指回廣場與哨所，避免玩家在地下空間迷路或錯過啟用提示。石柱旁還有記錄啟用者姓名的小銅牌。',
    exits: [
      { direction: 'up', targetRoomId: 'village_square', description: '石階回到村莊廣場' },
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
    imagePrompt: '市場小巷 in starter_village, town social market lane with stalls, canvas awnings, lantern glow after rain, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '市場小巷夾在武器店、禮拜堂與馬廄之間，濕潤石路上反射著攤棚燈火，水果籃、皮革包和破舊地圖擺得略顯凌亂。西邊能回到武器店，北側是安靜禮拜堂，南方傳來馬匹噴鼻聲。攤販低聲談論平原怪物與缺貨材料，提示玩家可從交易、對話和支線委託取得下一個探索方向。',
    exits: [
      { direction: 'west', targetRoomId: 'weapon_shop', description: '鐵匠鋪就在西側' },
      { direction: 'north', targetRoomId: 'starter_village_chapel', description: '禮拜堂鐘聲從北方傳來' },
      { direction: 'south', targetRoomId: 'starter_village_stable_yard', description: '馬廄院在南邊' },
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
    imagePrompt: '修補工棚 in starter_village, town service crafting shed with workbench, whetstone, coals and side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '修補工棚半倚在武器店後牆，木桌上擺著磨刀石、皮革碎片、釘槌和幾把等待修復的短劍。南面通往訓練場，西側回到武器店，東側有小門通向馬廄院。牆上掛著裝備耐久與基礎製作步驟的圖板，暗示玩家能從掉落材料、採集資源和工匠服務逐步改善初期裝備。',
    exits: [
      { direction: 'west', targetRoomId: 'weapon_shop', description: '回到武器店前廳' },
      { direction: 'south', targetRoomId: 'training_ground', description: '訓練場的喊聲從南方傳來' },
      { direction: 'east', targetRoomId: 'starter_village_stable_yard', description: '小門外是馬廄院' },
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
    imagePrompt: '告示角落 in starter_village, town quest notice corner with wooden boards, pinned maps, side alley lamplight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '告示角落位在廣場南西側的轉角，數塊木板被雨水泡得發黑，仍釘著尋物、採集、巡邏和協助新人的短委託。北邊是藥水店，東方可到村口，西側狹路延伸到古井。紙張邊緣有被撕下的痕跡，提示玩家查看 quest、追蹤任務目標，並留意有些委託需要 search 或 inspect 才能找到線索。木板下方散落舊蠟封與泥腳印，表示有人匆忙撕走其中一張任務單；旁邊的箭頭牌標示藥水店、古井與村口方向，使玩家能根據任務文字快速規劃路線，還能發現被雨水暈開的暗號。角落油燈下壓著一張缺角地圖，標出村內可調查處與回報路線。',
    exits: [
      { direction: 'north', targetRoomId: 'potion_shop', description: '藥水店的草藥香從北方飄來' },
      { direction: 'east', targetRoomId: 'village_gate', description: '村口火把在東方晃動' },
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
    imagePrompt: '古井小路 in starter_village, town exploration path with old well, mossy stones, pale moonlit water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古井小路被青苔石牆夾住，井口掛著生鏽滑輪，井水在微光下泛出不自然的銀色漣漪。東邊回到告示角落，南側階梯下到河岸，北面能看見補給倉庫背牆。井沿刻著被磨損的符號，旁邊散落幾枚濕硬幣，提示這裡適合調查、聽聲音或尋找被村民遺忘的小型寶物。',
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
    imagePrompt: '舊書庫 in starter_village, town quest library with dusty shelves, tutorial manuals, narrow amber window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊書庫藏在公會與禮拜堂之間，低矮書架塞滿泛黃手冊、怪物素描和初級地圖，灰塵在狹窗透進的琥珀色光束中漂浮。西門回到公會，東側通向禮拜堂，南側可繞回武器店附近。書桌上攤著一本標註 look、go、attack、equip 的教本，提示玩家能從文字線索學會基本指令與區域知識。',
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
    imagePrompt: '溪畔石階 in starter_village, town exploration river stairs with reeds, wet stones, reflected lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪畔石階沿著村內小溪下降，濕石上長著細苔，蘆葦在水邊沙沙作響，遠處橋下偶爾閃過銀色魚影。北邊回到古井小路，東方可通往傳送祠堂附近的低地。水聲遮住村內喧鬧，地上有小型足跡和被沖來的破布，提示玩家這裡可能藏著採集、釣魚或追蹤任務的早期線索。石階末端有半沉的小木箱與斷裂魚線，暗示死路也可能有可調查物；溪流方向清楚指向東側低地，讓玩家能用水聲辨認通往祠堂的繞路，並注意濕滑石面上的新鮮痕跡。水面倒影也能看見上方古井的輪廓，階梯旁還刻著提醒慢行的舊字。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_village_well_path', description: '石階上方是古井小路' },
      { direction: 'east', targetRoomId: 'starter_village_portal_shrine', description: '沿低地小徑可繞到傳送祠堂' },
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
    imagePrompt: '守衛哨所 in starter_village, town service guard post above gate, watch lantern, road signs and palisade, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守衛哨所架在村門上方，窄木板因長年雨水而發黑，瞭望燈籠把南方平原道路照成一條淡黃線。下方可回村口，西側窄廊連到傳送祠堂，東面屋頂棧道能俯看訓練場。桌上放著巡邏表、怪物出沒圖與撤退信號旗，提示玩家離村後遇到危險可尋找安全點或回程路線。哨窗旁的風鈴會根據南方草原風勢改變聲音，守衛用粉筆標出最近一次史萊姆靠近的位置，讓新人理解安全區與野外遭遇區的界線，也看懂撤退方向。旗架上還綁著回城信號的顏色說明，牆角備有給新人辨識路線的木牌與哨音。',
    exits: [
      { direction: 'down', targetRoomId: 'village_gate', description: '木梯下到村口' },
      { direction: 'west', targetRoomId: 'starter_village_portal_shrine', description: '窄廊通往傳送祠堂' },
      { direction: 'east', targetRoomId: 'starter_village_rooftop_walk', description: '屋頂棧道向東延伸' },
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
    imagePrompt: '馬廄院 in starter_village, town service stable yard with hay, wagon wheels, muddy lantern-lit ground, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '馬廄院裡堆著乾草、木桶與尚未修好的車輪，泥地被馬蹄踩出深淺不一的水坑，油燈掛在橫梁下緩慢晃動。北方連到市場小巷，西側是修補工棚，南邊屋頂棧道投下細長陰影。牆上釘著運送路線與村外風險標記，暗示交通、背包負重和區域解鎖會影響玩家能否安全移動。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_village_market_lane', description: '市場小巷在北側' },
      { direction: 'west', targetRoomId: 'starter_village_crafting_shed', description: '修補工棚在西邊' },
      { direction: 'south', targetRoomId: 'starter_village_rooftop_walk', description: '木階可上屋頂棧道' },
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
    imagePrompt: '隱蔽地窖 in starter_village, hidden exploration cellar with old crates, spiderwebs, single lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱蔽地窖比倉庫地板更潮濕，石牆滲出細小水珠，蛛網覆住破木箱與幾只封泥罐。上方活板門通回補給倉庫，東側狹縫能鑽到旅人小屋地基下，唯一油燈把箱角陰影拉得很長。這裡不像正式服務房，卻有明顯可調查痕跡與一次性寶箱位置，提示新人學會檢查死路與隱藏空間。',
    exits: [
      { direction: 'up', targetRoomId: 'starter_village_storehouse', description: '活板門回到補給倉庫' },
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
    imagePrompt: '屋頂棧道 in starter_village, town exploration rooftop walkway over training yard, ropes, dusk sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '屋頂棧道由繩索和窄木板固定在訓練場與馬廄之間，腳下能看見新手揮舞木劍，遠方村門火把像小星點般閃爍。南側梯子下到訓練場，西面連向守衛哨所，東邊可下馬廄院。棧道扶手綁著風向布條與觀戰標記，提示玩家從高處判讀道路方向，也能避開地面擁擠路線快速回到服務區。',
    exits: [
      { direction: 'south', targetRoomId: 'training_ground', description: '梯子下到訓練場' },
      { direction: 'west', targetRoomId: 'starter_village_guard_post', description: '棧道西端連到守衛哨所' },
      { direction: 'east', targetRoomId: 'starter_village_stable_yard', description: '東側木階下到馬廄院' },
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
    imagePrompt: '平原入口 in plains, entrance room from village gate into green grassland, dirt road, warm sun and long grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '踏出新手村木門後視野忽然展開，翠綠平原在溫暖陽光下起伏，齊膝草浪一路延伸到遠方風車。泥土路從北方村口接入草地，南側小徑被旅人踩出清楚痕跡，東方可見麥田與風車，西邊向日葵田在光中閃動。空氣有青草、濕土和獸毛味，草叢裡偶爾傳來野兔奔跑聲，提醒新人這裡已是會遭遇怪物的野外入口。',
    exits: [
      { direction: 'north', targetRoomId: 'village_gate', description: '回到新手村村口' },
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
    imagePrompt: '草原小徑 in plains, main route room through tall grass and wildflowers, visible wolf tracks, angled afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蜿蜒小徑穿過齊膝草叢，兩側野花吸引蝴蝶盤旋，花粉與乾草味在風裡混成微甜氣息。北面能看見村口方向的路標，南方道路下沉通向十字路口，草葉間還有幾枚狼爪印與被咬斷的兔毛。這裡是新手最常練習戰鬥的主路，玩家若聽見連續沙沙聲，就該準備 attack 或觀察是否有狼群靠近。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_entrance', description: '回到平原入口' },
      { direction: 'south', targetRoomId: 'crossroads', description: '通往十字路口' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'wolf_king', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 5,
    guardianHints: {
      creature: '草叢中有狼的腳印，數量不止一組……其中一組異常巨大，狼王就在附近。',
      treasure: '小徑旁的野花叢中，有一株罕見的藥草在微微發光。',
      spirit: '這條小徑曾是商隊的必經之路，殘留著他們歡笑的回音。',
    },
  },

  windmill_farm: {
    id: 'windmill_farm',
    name: '風車農場',
    zone: 'plains',
    image: 'windmill_farm.png',
    imagePrompt: '風車農場 in plains, resource farm room with windmill, wheat field, fences, golden light and bandit shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高大風車立在金黃麥田中央，木葉片推動齒輪發出低沉咔嗒聲，麥穗在夕光裡像潮水一樣搖晃。西路回到平原入口，南門通向風車內部，東邊生鏽礦車道消失在草丘後。柵欄旁有被撬開的穀倉鎖與凌亂腳印，農夫低聲抱怨盜賊夜裡出沒，提示這裡兼具補給、資源與小規模戰鬥事件。',
    exits: [
      { direction: 'west', targetRoomId: 'plains_entrance', description: '回到平原入口' },
      { direction: 'south', targetRoomId: 'windmill_interior', description: '走進風車內部' },
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
    imagePrompt: '十字路口 in plains, main route crossroads with old signpost, well, roads to forest and town, overcast directional light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '兩條舊道路在此交會，中央路標被風雨磨白，仍能辨認北往新手村、南入暗影森林、東至湖畔城鎮，西側古井半掩在荒草中。車轍、狼爪與蛇行痕跡互相交錯，讓這裡既是交通節點也是遭遇點。路標底座有可疑縫隙，旁邊倒著破盾與乾枯血跡，提示玩家選路前應查看任務方向並注意毒蛇或野狼伏擊。',
    exits: [
      { direction: 'north', targetRoomId: 'grass_path', description: '沿小徑返回' },
      { direction: 'south', targetRoomId: 'forest_entrance', description: '通往暗影森林' },
      { direction: 'east', targetRoomId: 'town_gate', description: '前往湖畔城鎮' },
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
    imagePrompt: '古井旁 in plains, hidden exploration room with mossy old well, carved stones, cold blue glow from depth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '苔蘚覆蓋的古井孤立在荒草深處，井壁石塊刻著幾乎磨平的符文，潮冷氣息從黑暗井底往上湧。東邊路口仍能看見路標，井內垂下的舊繩索通往洞窟入口，周圍草叢裡有毒蛇蛻皮與碎骨。井底微光像是在引誘旅人靠近，提示玩家可下探、調查符文或準備面對地底怪物。',
    exits: [
      { direction: 'east', targetRoomId: 'crossroads', description: '回到十字路口' },
      { direction: 'down', targetRoomId: 'cave_entrance', description: '攀著井壁向下探索' },
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
    imagePrompt: '森林入口 in dark_forest, entrance room with giant oak archway, wet roots, dim green light and warning shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '兩株巨大橡樹像門衛般立在暗影森林入口，交錯枝椏形成天然拱門，濕冷樹根從泥土裡隆起。北方道路退回平原十字路口，南側密林小道吞沒光線，東邊樹屋階梯纏滿藤蔓，西側霜雪小路通往更冷的區域。鳥鳴從樹冠四面傳來卻看不到鳥影，地面狼毛與新鮮爪痕提示玩家進入後會遭遇暗影狼伏擊。',
    exits: [
      { direction: 'north', targetRoomId: 'crossroads', description: '回到十字路口' },
      { direction: 'south', targetRoomId: 'dense_trail', description: '深入密林小道' },
      { direction: 'east', targetRoomId: 'ancient_treehouse', description: '一條岔路通往高處' },
      { direction: 'west', targetRoomId: 'snowfield_entrance', description: '一條被霜雪覆蓋的小路通往北方雪原' },
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
    imagePrompt: '密林小道 in dark_forest, main route room choked by vines, spider silk, leaf carpet and dim filtered light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '越往深處走，樹木越高，藤蔓和荊棘幾乎把道路擠成窄縫，厚落葉吸走腳步聲，只剩遠處不自然的枝條摩擦聲。北面可退回森林入口，西邊飄來沼澤腐甜氣味，南方深林更暗，東側螢光若隱若現。臉上偶爾黏到冰冷蛛絲，提示巨型蜘蛛可能在頭頂結網，玩家應留意方向與伏擊。',
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
    imagePrompt: '蘑菇沼澤 in dark_forest, resource combat swamp room with giant glowing mushrooms, bubbling mud, sickly green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '泥地在腳下慢慢下陷，紫黑水泡從沼澤表面鼓起又破裂，巨大螢光蘑菇照出病態綠光，有些菌傘高過人頭。東面回到密林小道，西方毒霧更濃，泥水裡可見蛛腿般的細長倒影。腐敗甜味和潮濕木屑味混在一起，最大的蘑菇根部埋著發光材料，提示玩家可採集但也可能驚動蜘蛛與樹精。',
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
    imagePrompt: '古老樹屋 in dark_forest, exploration room with elven treehouse, spiral stairs, ancient books, shafts of green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '千年巨木枝幹間架著被遺忘的精靈樹屋，螺旋木階沿樹身盤旋，欄杆雖腐朽仍能看出優雅紋路。西面能回森林入口，東側隱蔽小路通往獵人小屋，樹冠上有幾條通向更高處的斷橋。屋內殘留古書、碎水晶和魔法工具，木板下傳來樹精低鳴，提示玩家可調查精靈歷史或遭遇守護樹靈。',
    exits: [
      { direction: 'west', targetRoomId: 'forest_entrance', description: '回到森林入口' },
      { direction: 'east', targetRoomId: 'hunter_lodge', description: '林間小路通往一間獵人小屋' },
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
    imagePrompt: '森林深處 in dark_forest, boss route room with huge roots, green watching eyes, oppressive darkness and wolf territory, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '森林深處幾乎吞掉所有光線，古老樹根盤踞在地面上，像沉睡巨蛇繞過腐葉和黑水坑。北方可退回密林小道，南方精靈遺跡透出微弱藍光，西側枯萎之林散出灰燼味。幽暗裡一雙雙綠眼保持距離跟隨，地上有巨大狼爪與被拖走獵物的痕跡；這裡是暗影狼王與暗影樹靈的活動邊界，玩家進入前應確認藥水、裝備和任務目標。' +
      '粗根間散落舊箭矢、破披風和被咬碎的骨片，風穿過樹洞時像低聲警告。若沿著狼爪向南追蹤，會接近遺跡與更深事件；若往西撤退，則進入枯萎之林的詛咒路線，路線選擇會影響後續遭遇。',
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
    imagePrompt: '精靈遺跡 in dark_forest, landmark room with broken elven pillars, faded magic circle, blue crystal altar light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穿過重重樹幕後，開闊遺跡像被森林吞下的廣場般出現，斷裂白石柱刻滿精靈文字，地面魔法陣雖黯淡仍有藍光沿刻痕流動。北面回到森林深處，南方空氣逐漸灼熱通往火山地帶，東側老樹叢深處傳來低沉脈動。祭壇中央的水晶映出破碎記憶與任務線索，是地標、劇情與 Boss 事件的核心節點，玩家可 inspect 符文確認暗影來源。' +
      '石柱旁有被暗影侵蝕的箭孔和精靈守衛殘甲，說明這裡曾經爆發過長期防衛戰。水晶光芒會指向暗影空地與古樹心庭，玩家若完成森林線索，可在此回收證物、觸發下一段區域推進或判斷通往火山的安全路線。',
    exits: [
      { direction: 'north', targetRoomId: 'deep_forest', description: '返回森林深處' },
      { direction: 'south', targetRoomId: 'volcano_base', description: '遺跡南方的空氣越來越灼熱，通往火山地帶' },
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
    imagePrompt: '洞窟入口 in crystal_cave, entrance room below old well with blue crystals, damp stone, cave bats and mineral wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古井井壁後藏著狹窄通道，盡頭是一處天然洞窟入口，岩壁鑲著零星幽藍水晶，涼風帶出潮濕礦物味。上方繩索可攀回古井，南方螢光隧道像星河般延伸，北側廢棄礦車道通向地面。洞頂倒掛蝙蝠，入口岩縫裡有水晶原石，提示玩家這裡是進入洞窟前的安全錨點與第一個戰鬥遭遇。',
    exits: [
      { direction: 'up', targetRoomId: 'old_well', description: '攀回古井' },
      { direction: 'south', targetRoomId: 'luminous_tunnel', description: '沿著發光的隧道前進' },
      { direction: 'north', targetRoomId: 'abandoned_minecart', description: '一條廢棄的礦車道通往地面' },
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
    imagePrompt: '螢光隧道 in crystal_cave, main route tunnel lined with multicolor crystals, polished wet floor and refracted light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隧道兩壁嵌滿大小不一的水晶，彩光在黑暗中層層折射，讓濕滑地面像鏡子般映出星河。北面回洞窟入口，南方水晶大廳透出耀眼光芒，東邊地下河水聲清晰，西側紫色通道帶來眩暈感。水晶閃爍裡有蜥蜴偽裝的影子，提示玩家需觀察異常反光，並小心在光滑地面戰鬥時被逼退。' +
      '隧道頂端偶爾滴下冰冷礦水，落點會在地面形成細小回音，能幫助判斷蝙蝠群的位置。牆面有礦工刻下的方向箭頭和危險標記，指出大廳、地下河與紫水晶走廊各自的風險，也標明哪條路較適合撤退或採集與休整。',
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
    imagePrompt: '水晶大廳 in crystal_cave, landmark room with giant crystal pillars, rune platform, cathedral cavern ceiling and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '宏偉天然大廳在隧道盡頭展開，穹頂高得像地底教堂，巨型水晶柱從地面直插天頂，把光折成萬千色彩。北側回螢光隧道，南方礦脈深處傳來沉重震動，中央符文石台被環形階梯包圍。石像鬼雕塑排列在柱間，其中幾尊姿態過於僵硬，提示這裡是地標、Boss 前哨與解謎核心；玩家可 inspect 石台符文開啟後續路線。' +
      '石台四周刻著地底王國的巡禮圖，標出古代祭壇、棱鏡門與水晶龍棲台的相對方位。大廳聲音會被穹頂放大，任何戰鬥都可能驚醒更多守衛，因此路線選擇與補給檢查都很重要，最好先確認北側退路。',
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
    imagePrompt: '地下河 in crystal_cave, resource river room with clear underground water, glowing crystal fragments, mossy banks and green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寬闊地下河在洞窟暗處蜿蜒流動，清澈河水能看見河床上的發光水晶碎片，岸邊螢光苔蘚散出柔綠光。西面回螢光隧道，東方瀑布轟鳴越來越響，水面偶爾泛起不自然漣漪。河泥上有蜥蜴爪印與被沖來的礦石袋，提示玩家可採集、追蹤水流或準備水邊伏擊戰。',
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
    imagePrompt: '礦脈深處 in crystal_cave, resource combat room with exposed ore veins, hot crystals, heavy pressure and mining scars, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '裸露礦脈在岩壁上閃著金屬光澤，巨型水晶像熔爐般散出熱能，讓空氣沉重而壓抑。北面回水晶大廳，東側階梯通往古代祭壇，西邊能聽見礦工營地殘破滑輪聲。地面有新舊鑿痕、晶粉和守衛石像的碎片，提示玩家可採礦、尋找古代機關，也會遭遇石像鬼與水晶蜥蜴巡守。' +
      '深處礦脈偶爾爆出細小火花，照亮牆上被劃掉的警告文字。若沿著礦車軌痕前進，能找到廢礦工營地與失蹤記錄；若直接走向祭壇，則會更快接觸高階守衛，並可能觸發古代封印事件與警戒。熱風方向也能判斷哪條礦道仍然通暢。',
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
    imagePrompt: '城門口 in lakeside_town, entrance town service room with stone gate, lake wind, shield crest, guards and warm torch light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高大的湖石城牆圍繞著城鎮，城門上方刻著盾牌與交叉長劍徽記，濕潤湖風吹過吊橋與銅釘木門。身著鎧甲的衛兵守在門口，商隊與冒險者沿西側道路排隊入城，東面可看見商業街的燈火。告示牌提示入城補給、登記任務與啟用傳送陣，門洞旁的暗格也可被 inspect 搜出走私線索。' +
      '這裡是安全錨點與外部路線交會處，玩家可從西側返回十字路口，向東進入市場，或往南接上海岸棧道。城門上方的鐘聲會標示宵禁與警報，衛兵隊長也會提醒新來者先確認復活點、倉庫與傳送廣場位置，避免帶著任務貨物走錯危險路線。',
    exits: [
      { direction: 'west', targetRoomId: 'crossroads', description: '離開城鎮，回到十字路口' },
      { direction: 'east', targetRoomId: 'market_street', description: '進入商業街' },
      { direction: 'south', targetRoomId: 'coastal_boardwalk', description: '城門外的棧道通往東方海岸' },
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
    imagePrompt: '商業街 in lakeside_town, town service market street with weapon stalls, spice smoke, hanging lanterns and lake reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熙熙攘攘的石板商業街沿湖岸展開，武器鋪、防具店、藥材行與雜貨舖掛著不同顏色的燈籠。烤肉煙、香料味與湖水潮氣混在一起，攤販叫賣聲壓過馬車輪聲。西側通回城門，東面通往廣場，北邊酒館門縫飄出酒香；玩家可在此補給、比價、接商人委託，也能 search 貨箱找到異常標記。街角公告牌列出每日採購清單與缺貨材料，南側鍛坊傳來敲鐵聲，提醒玩家可以把剛取得的裝備立刻修理、分解或換成旅途消耗品，也可比較拍賣場與商店價格再決定出售。路邊巡邏會提示可疑商販位置與安全出口，攤位後方還留有通往倉庫的小路。',
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
    imagePrompt: '城鎮廣場 in lakeside_town, town core plaza with hero fountain, lake sunlight, job hall banners and arena arch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寬闊的湖畔廣場是城鎮中心，英雄雕像矗立在噴泉中央，水霧映著碧藍湖面與白石地磚。四周環繞轉職大廳、競技場、拍賣場與通往神殿的拱廊，公告欄貼滿進階任務與地下城招募。西側回商業街，北面通向導師所在的大廳，南側傳來競技場歡呼，東邊是拍賣場正門。' +
      '雕像底座有可調查的符文順序，噴泉旁也標示傳送陣方向，是玩家整理任務、查看城市服務與選擇下一條路線的核心節點。廣場巡邏路線清楚避開人潮，玩家可藉此判斷哪條街通往安全服務，哪條路會帶到訓練、交易或交通功能。',
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
    imagePrompt: '轉職大廳 in lakeside_town, town service class hall with four profession pillars, ritual circle, mentor alcoves and soft magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '宏偉大廳由四根刻紋巨柱支撐，柱面分別雕著劍盾、魔法書、弓箭與聖杖。柔和魔法光從中央轉職法陣升起，照亮四位導師的席位與牆上的試煉徽章。南面回廣場，東側走廊通往公會大廳；玩家可在此詢問轉職、檢查技能路線，或 inspect 柱腳找到各職業試煉提示。牆邊展示一轉與二轉武具樣本，地面箭紋標出各導師區域，讓玩家能依職業資源、爆發節奏與防禦需求選擇下一步。導師旁的任務卷軸會列出推薦等級、需求技能與試煉地點，避免玩家未準備好就前往高危區域，也方便回頭確認未完成職業任務。',
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
    imagePrompt: '競技場入口 in lakeside_town, town service combat training room with circular arena gate, challenge board, torchlight and cheering crowd, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '巨大的圓形競技場聳立在廣場南側，銅門後傳出觀眾席的歡呼與木劍碰撞聲。入口告示板寫著今日挑戰、訓練獎勵與安全規則，火把照亮排隊報名的冒險者。北面回城鎮廣場，門內訓練用魔像會重置成不同姿態；玩家可在此測試技能、完成戰鬥教學，並從告示板背面找出隱藏兌換密碼。旁邊的傷藥架和觀戰席出口提示這裡仍屬安全訓練區，失敗時可退回廣場重新整理裝備。賽程牌還會標示怪物預兆、打斷時機與戰利品規則，適合在進入真正地下城前練習，並熟悉屍體搜刮流程與裝備耐久消耗。',
    exits: [
      { direction: 'north', targetRoomId: 'town_plaza', description: '回到城鎮廣場' },
    ],
    monsters: [
      { monsterId: 'training_dummy', maxCount: 3, respawnSeconds: 25 },
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
    imagePrompt: '村莊後山 in starter_village_ext, entrance combat hillside room with mossy boulders, wild grass, village view and morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村莊背後的小山丘，長滿了野草和灌木。山坡上散落著幾塊長滿苔蘚的巨石，' +
      '偶爾能看到綠色的半透明生物在草叢間蠕動。' +
      '從山頂可以俯瞰整個新手村，視野開闊。下坡能回村莊廣場，東側小路通往溪邊，西側則有破舊木屋；玩家可在巨石下 search 找到先祖符印或驚動史萊姆。山風會把村口鐘聲和溪水聲一起送上坡頂，讓新手能判斷安全退路與下一個練級方向。草叢裡的腳印分成田鼠與史萊姆拖痕，提示玩家先清理小怪再調查石縫寶物。坡頂木牌還標出村莊、溪流、磨坊與墓地方向，是外圍區域的第一個導航點與任務提示點。',
    exits: [
      { direction: 'down', targetRoomId: 'village_square', description: '下山回到村莊廣場' },
      { direction: 'east', targetRoomId: 'village_creek', description: '一條小路通往溪邊' },
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
    imagePrompt: '小溪邊 in starter_village_ext, resource combat creek room with clear water, smooth stones, reeds, slime bubbles and golden sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條清澈的小溪從後山蜿蜒流下，溪水潺潺作響，陽光在水面碎成萬千金色的碎片。' +
      '溪邊的鵝卵石被水流打磨得光滑圓潤，水草在溪底輕輕搖擺，魚苗在石縫間穿梭。' +
      '幾隻綠史萊姆在溪邊吸收水氣，半透明的身軀在陽光下閃爍著果凍般的光澤。' +
      '微風送來泥土和青草的清新氣息，偶爾傳來村婦在上游洗衣的捶打聲。',
    exits: [
      { direction: 'west', targetRoomId: 'village_backhill', description: '沿小路回到後山' },
      { direction: 'south', targetRoomId: 'village_farmland', description: '溪水流向農田方向' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
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
    imagePrompt: '農田 in starter_village_ext, resource combat farmland room with wheat rows, vegetable beds, rat holes and warm wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '整齊的田壟間種滿了小麥和蔬菜，金黃的穗子在微風中搖曳。' +
      '農夫們抱怨田鼠猖獗，辛苦種下的作物經常被啃食殆盡。' +
      '田埂上偶爾能看到灰色的小影子飛速竄過。北面溪水灌入水渠，東側果園飄來甜香，南方小路通往墓地前的村外；玩家可堵住田鼠洞、採集作物或調查工具棚。',
    exits: [
      { direction: 'north', targetRoomId: 'village_creek', description: '往溪邊走去' },
      { direction: 'east', targetRoomId: 'village_orchard', description: '旁邊就是果園' },
      { direction: 'south', targetRoomId: 'village_outskirts', description: '通往村外小路' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
    ],
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
    imagePrompt: '果園 in starter_village_ext, combat resource orchard with apple trees, fallen fruit, crow nests and dappled afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '果樹成排排列，枝頭掛滿了紅彤彤的蘋果和金黃的梨子，空氣中瀰漫著成熟水果的甜香。' +
      '烏鴉群經常光顧這裡偷食果實，牠們刺耳的嘎嘎叫聲迴盪在樹梢間，令果農不勝其煩。' +
      '地面上散落著被啄食過的果核和半腐爛的落果，田鼠在果樹根部的落葉堆中窸窣竄動。' +
      '陽光透過茂密的枝葉灑下斑駁的光影，這片果園雖然豐饒，卻也是小型害獸的樂園。',
    exits: [
      { direction: 'west', targetRoomId: 'village_farmland', description: '回到農田' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
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
    imagePrompt: '墓地入口 in starter_village_ext, elite combat graveyard gate with rusted iron, crooked tombstones, dead flowers and cold moonlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一道鏽蝕的鐵門半開著，門後是一片荒涼的墓地。歪斜的墓碑在月光下投射出長長的陰影，' +
      '地面上散落著枯萎的花束。空氣中瀰漫著陰冷的氣息，' +
      '隱約可以聽到骨頭碰撞的聲響。北面可退回村外小路，東側瞭望台仍有微光，南方鎖住的鐵門提示需要鑰匙。',
    exits: [
      { direction: 'north', targetRoomId: 'village_outskirts', description: '沿著小路回到村外' },
      { direction: 'east', targetRoomId: 'watchtower', description: '遠處有一座瞭望台' },
      { direction: 'south', targetRoomId: 'graveyard_depths', description: '鏽蝕的鐵門後方是更深處的墓地', locked: true, keyItemId: 'bronze_key' },
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
    imagePrompt: '墓地深處 in starter_village_ext, boss event graveyard room with ancient sarcophagus, broken bones, glowing seals and oppressive blue moonlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穿過鏽蝕的鐵門，你來到了墓地最深處。這裡的墓碑更加古老，刻著早已被遺忘的文字。' +
      '地面上散落著碎裂的骨骸和褪色的花環，空氣中彌漫著死亡的氣息。' +
      '一座巨大的石棺矗立在中央，封印的符文依然微微發光。',
    exits: [
      { direction: 'north', targetRoomId: 'graveyard_entrance', description: '回到墓地入口' },
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
    imagePrompt: '廢棄小屋 in starter_village_ext, hidden exploration cottage with collapsed roof, vines, broken window and dusty lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一間被藤蔓纏繞的破舊木屋，屋頂塌了一半，窗戶早已破碎。' +
      '屋內堆滿了落葉和碎木，角落裡有動物築巢的痕跡。' +
      '據村民說，這裡曾住著一位古怪的老巫師。東面回後山，地板裂縫下似乎藏著地窖入口；玩家可 search 壁爐暗格取得藥水，也要小心屋樑上的烏鴉群。',
    exits: [
      { direction: 'east', targetRoomId: 'village_backhill', description: '回到後山' },
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
    imagePrompt: '村外小路 in starter_village_ext, main route combat room with dirt road, wildflowers, animal tracks and soft cloudy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條蜿蜒的泥土小路連接著村莊和外圍區域，路旁的野花隨風搖曳。' +
      '路面上有大小不一的腳印，看得出來常有野生動物經過。' +
      '這裡是前往墓地和瞭望台的必經之路。北面回農田，南方鐵門通向墓地，東邊可回村口；玩家可 inspect 大樹下的石堆，追蹤田鼠、烏鴉與可疑腳印。',
    exits: [
      { direction: 'north', targetRoomId: 'village_farmland', description: '通往農田' },
      { direction: 'south', targetRoomId: 'graveyard_entrance', description: '遠處隱約可見鐵門' },
      { direction: 'east', targetRoomId: 'village_gate', description: '回到村口' },
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
    imagePrompt: '瞭望台 in starter_village_ext, elite exploration watchtower with broken stone stairs, torn banner, crow perches and pale dawn horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座半廢棄的石造瞭望台聳立在小丘上，登頂可以遠眺四方。' +
      '塔頂的旗幟早已破爛不堪，但殘存的守衛設施顯示這裡曾是重要的防禦據點。' +
      '烏鴉和骷髏兵出沒其間，讓這裡充滿危險。西側下坡回墓地入口，玩家可 inspect 破旗和警鐘，判斷亡者從哪條路靠近村莊。',
    exits: [
      { direction: 'west', targetRoomId: 'graveyard_entrance', description: '下坡回到墓地入口' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 45 },
    ],
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
    imagePrompt: '舊磨坊小徑 in starter_village_ext, main route room with abandoned mill wheel, muddy track, grain sacks and slanting morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條泥濘小徑沿著農田灌渠延伸到舊磨坊，半塌的水車仍被溪水推得吱呀作響，空氣裡有潮木和舊麥粉味。西側回農田，東面可到蛙鳴池，南邊灰煙指向炭窯。路旁散落破麻袋與田鼠腳印，玩家可 search 水車底部尋找丟失麥袋，也可能驚動躲在糧袋裡的田鼠。',
    exits: [
      { direction: 'west', targetRoomId: 'village_farmland', description: '田壟通回農田' },
      { direction: 'east', targetRoomId: 'starter_ext_frog_pond', description: '溪聲通往蛙鳴池' },
      { direction: 'south', targetRoomId: 'starter_ext_charcoal_kiln', description: '灰煙來自南邊炭窯' },
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
    imagePrompt: '蜂巢樹叢 in starter_village_ext, resource exploration grove with hanging beehives, wildflowers, buzzing insects and warm amber light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '果園東側的低矮樹叢掛著數個野蜂巢，金色蜂蠟在枝葉間發亮，花香與蜂鳴讓空氣微微震動。西邊回果園，南側有一片整理過的藥草圃。落果和蜂蜜吸引田鼠與烏鴉徘徊，玩家可採集蜂蠟、inspect 樹幹抓痕判斷害獸路線，也要避開搖晃蜂巢造成的額外危險。',
    exits: [
      { direction: 'west', targetRoomId: 'village_orchard', description: '樹影通回果園' },
      { direction: 'south', targetRoomId: 'starter_ext_herb_garden', description: '藥草香從南側飄來' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
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
    imagePrompt: '藥草圃 in starter_village_ext, resource room with raised herb beds, dew, clay markers and soft green morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村醫照看的藥草圃被矮籬圍住，薄荷、止血草與紫葉草分成整齊小畦，露水在葉尖閃著柔綠光。北面是蜂巢樹叢，西南可繞回村外小路。泥土裡有被啃咬的根莖和小腳印，玩家可 gather 藥草、search 破陶牌找配方線索，也能追查田鼠是否把草根拖向墓地。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_beehive_grove', description: '回到蜂巢樹叢' },
      { direction: 'south', targetRoomId: 'village_outskirts', description: '小籬門通往村外小路' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[草]',
    mapX: 5,
    mapY: 2,
  },

  starter_ext_frog_pond: {
    id: 'starter_ext_frog_pond',
    name: '蛙鳴池',
    zone: 'starter_village_ext' as RoomDef['zone'],
    image: 'starter_ext_frog_pond.png',
    imagePrompt: '蛙鳴池 in starter_village_ext, resource combat pond with reeds, lily pads, slime bubbles and cool blue reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '磨坊旁的小池被蘆葦和睡蓮包圍，蛙鳴在水面迴盪，藍綠水光照出史萊姆留下的黏液泡。西側回舊磨坊小徑，南面是斷裂木橋，北方溪線可接回小溪邊。玩家可釣魚、採集濕地材料，或 inspect 泥岸腳印尋找被拖走的農具；靠近深水時容易驚動吸水的綠史萊姆。',
    exits: [
      { direction: 'west', targetRoomId: 'starter_ext_old_mill_path', description: '泥徑回到舊磨坊' },
      { direction: 'north', targetRoomId: 'village_creek', description: '沿溪線回到小溪邊' },
      { direction: 'south', targetRoomId: 'starter_ext_ruined_bridge', description: '水面下可見斷橋木樁' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
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
    imagePrompt: '練習空地 in starter_village_ext, combat training clearing with straw dummies, trampled grass, weapon rack and clear daylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村外林線前有一塊被踩平的練習空地，草地中央立著稻草靶與舊木盾，旁邊武器架上掛著鈍劍和練習弓。北面可回村口，西側小路接村外小路，東邊有可疑腳印通往盜匪踩出的支線。玩家可在此安全練習攻擊節奏、inspect 靶心箭痕，也能追蹤偷走補給的田鼠。',
    exits: [
      { direction: 'north', targetRoomId: 'village_gate', description: '回到村口' },
      { direction: 'west', targetRoomId: 'village_outskirts', description: '草路通往村外小路' },
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
    imagePrompt: '盜匪足跡 in starter_village_ext, hidden combat footpath with snapped twigs, boot prints, thorn shadows and muted dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條被硬靴踩出的窄路藏在荊棘後，斷枝、布條和偷來的麻繩沿路散落，夕光被樹影切得很碎。西面回練習空地，南側通往空心樹樁，東面隱約能看見柳樹神龕。這裡提示村外已不只有小怪，玩家可 search 足跡找盜匪藏物，也要準備面對落單盜賊或被驚動的烏鴉。',
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
    imagePrompt: '柳樹神龕 in starter_village_ext, landmark exploration shrine under willow tree, hanging charms, small stone altar and silver dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古老柳樹垂下長長枝條，枝間掛著村民祈願木牌，石製小神龕被銀色暮光照亮，空氣裡有濕葉與香灰味。西側藏著盜匪足跡，南邊坡道通往墓地入口，東面有繞回瞭望台的窄路。神龕前的供盤被移動過，玩家可 inspect 木牌找出失蹤孩童的願望，也能 search 祭壇底座取得一次性祝福或任務線索。柳枝上有烏鴉羽毛與被扯斷的紅線，暗示盜匪曾在這裡觀察村民動向。若玩家先清理周圍小怪，再調查供盤灰痕，就能把墓地、瞭望台與村外支線串在一起。神龕背面刻著舊巡邏記號，提示安全返回村口的路線標示。',
    exits: [
      { direction: 'west', targetRoomId: 'starter_ext_bandit_footpath', description: '荊棘路回到盜匪足跡' },
      { direction: 'south', targetRoomId: 'graveyard_entrance', description: '坡道通往墓地入口' },
      { direction: 'east', targetRoomId: 'watchtower', description: '窄路繞向瞭望台' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 40 },
    ],
    groundItems: [
      { itemId: 'small_mp_potion', description: '神龕供盤旁放著一瓶微光藥水' },
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
    imagePrompt: '根窖 in starter_village_ext, hidden resource cellar with root shelves, clay jars, dangling herbs and single lantern beam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '廢棄小屋地板下藏著低矮根窖，粗樹根穿過土牆，陶罐、乾草藥與破布袋散發潮土氣味，唯一的提燈把木架影子拉長。東側梯子回小屋，南面狹洞通向空心樹樁。玩家可 search 陶罐取得補給或配方碎片，也可能撞見偷藏糧食的田鼠，是早期資源與隱藏探索節點。',
    exits: [
      { direction: 'east', targetRoomId: 'abandoned_cottage', description: '木梯回到廢棄小屋' },
      { direction: 'south', targetRoomId: 'starter_ext_hollow_stump', description: '狹洞通向空心樹樁' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 30 },
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
    imagePrompt: '炭窯 in starter_village_ext, resource combat kiln room with smoking charcoal mound, chopped logs, ash footprints and orange ember light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊炭窯靠在林邊土坡下，黑色木炭堆仍冒著微煙，斧痕木柴和灰色腳印散在泥地上，空氣充滿焦木味。北面回舊磨坊小徑，東側灰路連到斷橋，南邊可繞向墓地入口。玩家可採集木炭材料、inspect 灰腳印追蹤盜匪，也要留意被煙味吸引來的烏鴉和田鼠。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_old_mill_path', description: '回到舊磨坊小徑' },
      { direction: 'east', targetRoomId: 'starter_ext_ruined_bridge', description: '灰路通向斷橋' },
      { direction: 'south', targetRoomId: 'graveyard_entrance', description: '林邊小路繞向墓地' },
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
    imagePrompt: '斷橋 in starter_village_ext, event route room with broken wooden bridge, shallow ravine, mossy posts and cloudy side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座老木橋斷在淺溝上方，腐朽木板垂進水裡，橋樁長滿苔蘚，陰雲讓溝底水面顯得發冷。北面通蛙鳴池，西側灰路回炭窯，東邊可接村外小路。這裡是路線事件點，玩家可 inspect 斷木判斷是否被人破壞，search 橋下取回掉落貨物，也可能被史萊姆從水溝邊偷襲。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_frog_pond', description: '水聲通回蛙鳴池' },
      { direction: 'west', targetRoomId: 'starter_ext_charcoal_kiln', description: '灰路回到炭窯' },
      { direction: 'east', targetRoomId: 'village_outskirts', description: '繞過斷橋回村外小路' },
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
    imagePrompt: '空心樹樁 in starter_village_ext, hidden elite event room with giant hollow stump, root tunnels, stolen trinkets and green shaft light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一截巨大的空心樹樁倒在灌木深處，內部被挖出根道，偷來的鈕扣、麥粒和小銅幣塞在樹洞裡，綠色光束從裂縫照入。北側是盜匪足跡，西邊狹洞連根窖，南面小坡可回墓地深處外牆。玩家可 search 樹洞取得一次性藏物，inspect 根道確認小怪巢穴，也要準備面對較密集的田鼠群與烏鴉騷擾。樹洞底部有新鮮爪痕和被咬破的任務布袋，提示這裡是低等區域的小型精英事件點；若從根窖繞進來，可以避開北側埋伏並保留撤退路。樹皮刻痕還指向墓地外牆，暗示盜匪與亡者活動可能相互牽連，需要追查來源處。',
    exits: [
      { direction: 'north', targetRoomId: 'starter_ext_bandit_footpath', description: '回到盜匪足跡' },
      { direction: 'west', targetRoomId: 'starter_ext_root_cellar', description: '根道連到小屋地窖' },
      { direction: 'south', targetRoomId: 'graveyard_depths', description: '小坡接近墓地深處外牆' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 4, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
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
    imagePrompt: '海邊棧道 in eastern_coast, entrance route room with salt-worn wooden boardwalk, fishing nets, gulls and bright sea wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '木製棧道沿著海岸線延伸，腳下被鹽分侵蝕的木板在每一步踩踏下吱嘎作響。' +
      '鹹濕的海風撲面而來夾帶著海藻和魚腥的氣味，遠處的海面波光粼粼，海鷗在浪尖上低掠而過。' +
      '棧道入口立著一塊被風雨侵蝕的告示牌，上面的紅字警告冒險者注意潮汐變化和近海的海盜活動。' +
      '棧道欄杆上掛著漁網和曬乾的海星，為這條通往未知海域的道路增添了幾分冒險的氣息。',
    exits: [
      { direction: 'north', targetRoomId: 'town_gate', description: '沿棧道回到城門口' },
      { direction: 'south', targetRoomId: 'sandy_beach', description: '沙灘在前方延伸' },
      { direction: 'east', targetRoomId: 'fishing_dock', description: '遠處可以看到漁村碼頭' },
    ],
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
    imagePrompt: '沙灘 in eastern_coast, combat beach room with white sand, crab holes, shells, surf foam and hard noon sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '細軟的白沙在陽光下閃耀如碎銀，溫熱的沙粒在赤腳下輕柔地流動。' +
      '海浪一波又一波地拍打著海岸，留下白色的泡沫和五彩斑斕的貝殼。' +
      '幾隻巨大的海蟹揮舞著螯鉗在沙灘上橫行，牠們警覺地注視著四周的動靜。' +
      '遠處的水面偶爾有魚群躍出水面，在陽光下閃過銀色的弧線。',
    exits: [
      { direction: 'north', targetRoomId: 'coastal_boardwalk', description: '回到棧道' },
      { direction: 'south', targetRoomId: 'tidal_zone', description: '沿海岸往潮間帶走' },
      { direction: 'east', targetRoomId: 'cliff_path', description: '一條小路通往海崖' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 30 },
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
    imagePrompt: '潮間帶 in eastern_coast, resource combat tidepool room with wet rocks, kelp, barnacles, jellyfish pools and silver tide light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '漲退潮之間的岩石地帶，佈滿了海藻和藤壺。水窪中棲息著各種海洋生物，' +
      '半透明的水母在淺水中漂浮。腳下的岩石濕滑無比，行走需要格外小心。北面回沙灘，南側黑洞通往海蝕洞，東面水道連到珊瑚淺灘；玩家可採集貝殼和半寶石，也要看潮位避開水母群。',
    exits: [
      { direction: 'north', targetRoomId: 'sandy_beach', description: '回到沙灘' },
      { direction: 'south', targetRoomId: 'sea_cave', description: '岩壁上有一個黑暗的洞口' },
      { direction: 'east', targetRoomId: 'coral_shallows', description: '淺水區延伸向珊瑚淺灘' },
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
    imagePrompt: '海蝕洞 in eastern_coast, combat cave room with glowing seaweed, echoing surf, tide pool entrance and blue-green cavern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海浪長年侵蝕形成的巨大洞穴，洞壁上附著發光的海藻。' +
      '海水在洞內迴蕩，發出空洞的轟鳴聲。深處的水池中有蛇形的影子在游動。' +
      '漲潮時洞口會被海水淹沒，需要把握時機。北面退回潮間帶，水池下方可潛入海底洞穴；玩家可 inspect 潮痕判斷安全時間，也能 search 發光海藻根部。',
    exits: [
      { direction: 'north', targetRoomId: 'tidal_zone', description: '回到潮間帶' },
      { direction: 'down', targetRoomId: 'underwater_cave', description: '水池下方似乎有通道' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
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
    imagePrompt: '漁村碼頭 in eastern_coast, town service fishing dock with moored boats, drying nets, tar barrels and gull-filled sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '簡樸的木製碼頭延伸入蔚藍的海面，幾艘漁船停泊在岸邊隨波搖晃，桅杆上的風向標嘎嘎轉動。' +
      '漁網曬在木架上散發著陽光和海鹽的氣味，空氣中瀰漫著濃郁的魚腥味和焦油的刺鼻氣息。' +
      '幾位飽經風霜的漁民蹲在碼頭邊修補漁網，粗糙的手指在繩結間靈活穿梭。' +
      '海鷗在碼頭上空盤旋鳴叫，偶爾俯衝搶奪漁簍中的小魚。',
    exits: [
      { direction: 'west', targetRoomId: 'coastal_boardwalk', description: '回到海邊棧道' },
      { direction: 'south', targetRoomId: 'lighthouse', description: '沿海岸走向燈塔' },
    ],
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
    imagePrompt: '燈塔 in eastern_coast, landmark combat lighthouse with white tower, rusted spiral stair, crow nests and sweeping beacon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '矗立在海角的白色燈塔高聳入雲，塔身被數十年的海風侵蝕得斑駁蒼老，卻依然屹立不搖。' +
      '塔頂的燈火在夜晚劃破海上的黑暗，為遠方的航行者指引歸途。' +
      '生鏽的螺旋樓梯沿著塔壁盤旋而上，每一階都發出令人不安的吱嘎聲。' +
      '烏鴉群在塔頂的殘破圍欄上築巢棲息，海蟹則佔據了塔基周圍被潮水沖刷的礁石。',
    exits: [
      { direction: 'north', targetRoomId: 'fishing_dock', description: '回到漁村碼頭' },
      { direction: 'south', targetRoomId: 'coral_shallows', description: '沿海岸走向珊瑚淺灘' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
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
    imagePrompt: '珊瑚淺灘 in eastern_coast, resource combat shallows with colorful coral, clear water, drifting jellyfish and rippled sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '淺海區域生長著五彩繽紛的珊瑚，海水清澈見底，陽光在水底投射出流動的光網。' +
      '各種色彩斑斕的海洋生物在珊瑚叢中穿梭嬉戲，半透明的水母拖著長長的觸手優雅地漂浮。' +
      '更深的水域中能看到蛇形的影子游動，偶爾掀起一陣令人不安的水流。' +
      '珊瑚散發出微弱的螢光，為這片海底花園披上了一層夢幻的色彩。',
    exits: [
      { direction: 'north', targetRoomId: 'lighthouse', description: '回到燈塔' },
      { direction: 'west', targetRoomId: 'tidal_zone', description: '回到潮間帶' },
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
    imagePrompt: '沉船殘骸 in eastern_coast, elite combat shipwreck room with tilted hull, broken mast, barnacles, pirate shadows and stormy sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一艘巨大的帆船擱淺在暗礁上，船身傾斜，桅杆斷裂。' +
      '船體佈滿了藤壺和海藻，甲板上散落著腐爛的繩索和碎木板。' +
      '海盜和深海魚人將這裡當作據點，在殘骸間出沒。北面可游回珊瑚淺灘，南側是暗礁，東面有海盜營火；玩家可 search 船艙保險箱和甲板貨箱。',
    exits: [
      { direction: 'north', targetRoomId: 'coral_shallows', description: '游回珊瑚淺灘' },
      { direction: 'south', targetRoomId: 'dark_reef', description: '沉船後方是暗礁區' },
      { direction: 'east', targetRoomId: 'pirate_camp', description: '海盜在岸邊設了營地' },
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
    imagePrompt: '海崖步道 in eastern_coast, dangerous route cliff path with mossy rock wall, crab holes, strong wind and crashing waves below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條狹窄的石頭步道沿著海崖蜿蜒而上，一側是佈滿苔蘚的陡峭崖壁，另一側是令人眩暈的萬丈深淵。' +
      '海風在這裡格外強勁，呼嘯著穿過岩石的縫隙發出尖銳的嘯聲，站不穩就有被吹落懸崖的危險。' +
      '崖壁上密佈著大大小小的洞穴，巨蟹在洞口揮舞著螯鉗威嚇經過的行人。' +
      '往下望去，白色的浪花在礁石上炸開，濺起的水霧瀰漫在半空中。',
    exits: [
      { direction: 'west', targetRoomId: 'sandy_beach', description: '下崖回到沙灘' },
      { direction: 'south', targetRoomId: 'pirate_camp', description: '步道盡頭通往海盜營地' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 35 },
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
    imagePrompt: '海盜營地 in eastern_coast, boss combat pirate camp with tents, campfire, stolen crates, black flag and red dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱蔽在海灣中的海盜營地，帳篷和篝火散落在岩石之間。' +
      '到處堆放著搶來的貨物和空酒桶，海盜旗在風中獵獵作響。' +
      '武裝的海盜在營地中巡邏，對入侵者毫不留情。西面回沉船殘骸，北側步道通海崖；玩家可 inspect 大帳篷和酒桶，找到海盜船長的藏寶線索。',
    exits: [
      { direction: 'west', targetRoomId: 'shipwreck', description: '回到沉船殘骸' },
      { direction: 'north', targetRoomId: 'cliff_path', description: '沿步道離開' },
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
    imagePrompt: '暗礁 in eastern_coast, elite combat reef room with black blade rocks, whirlpools, green fishman eyes and violent foam light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '危險的暗礁區域，尖銳如刀刃的黑色岩石在海面下若隱若現，浪花拍打其上碎成白色的泡沫。' +
      '海流在這裡變得湍急而詭譎，漩渦在岩石之間不斷形成又消散，無數船隻在此粉身碎骨。' +
      '深海魚人和海蛇將這片死亡水域作為狩獵場，牠們在暗礁的陰影中耐心等待著獵物。' +
      '水下不時閃過詭異的綠色光芒——那是魚人眼睛反射的光。',
    exits: [
      { direction: 'north', targetRoomId: 'shipwreck', description: '回到沉船殘骸' },
      { direction: 'south', targetRoomId: 'underwater_cave', description: '水下有一條通道' },
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
    imagePrompt: '海底洞穴 in eastern_coast, boss event underwater cave with magic air bubble, blue coral, fishman bone altars and deep ocean glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深入海底的神秘洞穴，一層閃爍的魔法氣泡包裹著整個空間，維持著勉強可以呼吸的空氣。' +
      '洞壁上鑲嵌著發出幽藍光芒的深海珊瑚，將這片海底領域映照得如同異世界的殿堂。' +
      '四處散落著魚人用骨頭和貝殼堆砌的祭壇和圖騰，散發著令人不安的腥臭氣味。' +
      '洞穴深處傳來低沉的吟唱聲——那是魚人首領在召喚深海的力量。上方通回海蝕洞，北面水道接暗礁區；玩家可 inspect 祭壇符號判斷召喚階段，search 貝殼圖騰取得深海寶珠線索，也要確認撤退路。氣泡邊緣偶爾震動，提醒玩家戰鬥拖太久可能失去安全呼吸空間。',
    exits: [
      { direction: 'up', targetRoomId: 'sea_cave', description: '游向上方的海蝕洞' },
      { direction: 'north', targetRoomId: 'dark_reef', description: '游回暗礁區' },
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
    imagePrompt: '潮池岩穴 in eastern_coast, hidden exploration tidepool grotto with mirror pools, shell marks, blue cave light and crab shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮間帶西側有一處被礁石遮住的小岩穴，鏡面般的潮池映出洞頂貝殼紋，藍色反光讓石壁像濕玻璃。東面回潮間帶，南側裂縫連到海蝕洞。玩家可 search 潮池底部找半寶石和古幣，也能 inspect 貝殼排列判斷下一次退潮時間；海蟹會躲在淺池邊伏擊。',
    exits: [
      { direction: 'east', targetRoomId: 'tidal_zone', description: '濕滑石路回到潮間帶' },
      { direction: 'south', targetRoomId: 'sea_cave', description: '裂縫通向海蝕洞' },
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
    imagePrompt: '海藻灘 in eastern_coast, resource combat flats with thick kelp mats, driftwood, jellyfish pools and pale green tide light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '大片海藻覆蓋退潮後的平灘，濕滑葉片纏住漂木與破網，空氣裡滿是鹽味和腐藻氣息。北面回沙灘，東側水線通到珊瑚淺灘，南邊可繞向潮池岩穴。玩家可 gather 海藻材料、search 破網找漁民遺失的鉤具，也要避開藏在淺水中的水母。',
    exits: [
      { direction: 'north', targetRoomId: 'sandy_beach', description: '沙地回到沙灘' },
      { direction: 'east', targetRoomId: 'coral_shallows', description: '水線通往珊瑚淺灘' },
      { direction: 'south', targetRoomId: 'eastern_coast_tidepool_grotto', description: '礁石後有潮池岩穴' },
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
    imagePrompt: '走私者海灣 in eastern_coast, hidden combat cove with narrow inlet, covered crates, lantern signals and purple dusk surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海崖背風處藏著狹窄海灣，黑布蓋住的貨箱堆在礁石後，暗色提燈按固定節奏閃爍，浪聲掩蓋了低聲交談。西面回海崖步道，南側可繞到海盜藏貨處，東邊小徑通往風暴瞭望崖。玩家可 inspect 提燈節奏找走私暗號，search 貨箱取得任務證物，但會引來海盜巡邏。',
    exits: [
      { direction: 'west', targetRoomId: 'cliff_path', description: '沿崖壁回到海崖步道' },
      { direction: 'south', targetRoomId: 'eastern_coast_pirate_cache', description: '貨箱痕跡通往藏貨處' },
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
    imagePrompt: '斷裂棧橋 in eastern_coast, event route room with shattered pier posts, loose planks, crab nests and cloudy harbor light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '漁村碼頭南側有一段斷裂棧橋，木樁被風浪撞歪，鬆動木板下傳來海蟹刮擦聲，雲光在焦油水面上晃動。北面回漁村碼頭，南面可接燈塔，東側潮溝通往珍珠床。玩家可 inspect 斷樁判斷是否被海盜破壞，search 漁網找修橋材料，也要處理爬上木板的海蟹。',
    exits: [
      { direction: 'north', targetRoomId: 'fishing_dock', description: '回到漁村碼頭' },
      { direction: 'south', targetRoomId: 'lighthouse', description: '沿岸前往燈塔' },
      { direction: 'east', targetRoomId: 'eastern_coast_pearl_bed', description: '潮溝通往珍珠床' },
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
    imagePrompt: '觀潮斷崖 in eastern_coast, elite exploration cliff ledge with storm clouds, warning cairns, gull bones and lightning sea light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海崖盡頭的突出岩台正對外海，暴風雲在遠處堆疊，警示石堆和海鳥骨散在濕冷地面上。西側回走私者海灣，南面能俯瞰海盜營地，東側碎石坡通向海蛇巢。玩家可 inspect 石堆記錄風暴週期，觀察海盜巡邏路線，也要防備烏鴉群和強風造成的撤退壓力。',
    exits: [
      { direction: 'west', targetRoomId: 'eastern_coast_smugglers_cove', description: '小徑回走私者海灣' },
      { direction: 'south', targetRoomId: 'pirate_camp', description: '陡坡下方是海盜營地' },
      { direction: 'east', targetRoomId: 'eastern_coast_serpent_nest', description: '碎石坡通向海蛇巢' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
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
    imagePrompt: '珍珠床 in eastern_coast, resource underwater shallows with oyster beds, pale pearls, filtered sunlight and jellyfish drift, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '燈塔外側的淺水沙床布滿蚌殼，細沙間偶爾閃出乳白珍珠光，陽光穿過水面形成搖晃光網。西面接斷裂棧橋，南面通珊瑚淺灘，東側水流暗暗指向海蛇巢。玩家可 gather 珍珠與貝殼材料，search 被撬開的蚌殼找盜採線索，也要小心水母漂入採集路線。',
    exits: [
      { direction: 'west', targetRoomId: 'eastern_coast_broken_pier', description: '潮溝回斷裂棧橋' },
      { direction: 'south', targetRoomId: 'coral_shallows', description: '水色變深通往珊瑚淺灘' },
      { direction: 'east', targetRoomId: 'eastern_coast_serpent_nest', description: '暗流通向海蛇巢' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'sea_serpent', maxCount: 1, respawnSeconds: 45 },
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
    imagePrompt: '海盜藏貨處 in eastern_coast, hidden elite cache with buried crates, torn black flag, rum barrels and red campfire glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海盜營地後方的岩縫裡藏著半埋貨箱，破黑旗蓋住火藥桶與酒桶，紅色營火把濕石照得像血。北面通走私者海灣，西側可回海盜營地，南面有窄路接沉船殘骸。這裡是精英藏寶點，玩家可 search 貨箱取得一次性寶物或任務證物，inspect 酒桶標記確認海盜船長補給線，但會引來強化巡邏。',
    exits: [
      { direction: 'north', targetRoomId: 'eastern_coast_smugglers_cove', description: '貨痕回到走私者海灣' },
      { direction: 'west', targetRoomId: 'pirate_camp', description: '岩縫回到海盜營地' },
      { direction: 'south', targetRoomId: 'shipwreck', description: '窄路通往沉船殘骸' },
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
    imagePrompt: '海蛇巢 in eastern_coast, boss event sea serpent nest with coiled bones, green water light, egg clutches and jagged reef walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗礁外緣的裂谷裡堆滿魚骨、破船板與黏滑卵囊，綠色水光從鋸齒狀礁壁間閃爍，低沉嘶聲在水下震動。西面暗流接珍珠床，北側碎石坡回觀潮斷崖，南面可潛入暗礁深處。這裡是大型事件鉤子，玩家可 inspect 卵囊判斷海蛇活動週期，search 骨堆找到沉船線索，也要準備面對成群海蛇和魚人支援。',
    exits: [
      { direction: 'west', targetRoomId: 'eastern_coast_pearl_bed', description: '暗流回珍珠床' },
      { direction: 'north', targetRoomId: 'eastern_coast_stormwatch_ledge', description: '碎石坡回觀潮斷崖' },
      { direction: 'south', targetRoomId: 'dark_reef', description: '裂谷深入暗礁區' },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 55 },
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
    imagePrompt: '火山山腳 in volcano_zone, entrance combat volcanic foothill with black ash, sulfur smoke, cracked ground and red crater glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '火山的山腳下，地面覆蓋著一層黑色的火山灰。空氣中瀰漫著硫磺的刺鼻氣味，' +
      '遠處的火山口冒著縷縷白煙。地面的溫度比平常高出許多，' +
      '偶爾能感受到腳下輕微的震動。北面可退回精靈遺跡，南側熔岩小徑通往高處，東邊礦坑入口有矮人守衛；玩家可 inspect 火山灰爪印判斷火蜥蜴巡邏方向。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_ruins', description: '穿過灼熱的荒野回到精靈遺跡' },
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
    imagePrompt: '熔岩小徑 in volcano_zone, main route combat path over cooled lava, red cracks, heat shimmer and salamander shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條蜿蜒在凝固熔岩上的狹窄小路，兩側的岩石仍散發著灼熱的紅光。' +
      '空氣因高溫而扭曲，每一步都要小心避開仍在流動的岩漿細流。' +
      '火蜥蜴在溫暖的岩石上悠然自得。北面下山回火山山腳，南方硫磺谷蒸汽翻湧，東面傳來岩漿河的低沉聲；玩家可 search 冷卻裂縫採集火成玻璃。',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_base', description: '下山回到山腳' },
      { direction: 'south', targetRoomId: 'sulfur_valley', description: '小徑延伸向硫磺谷' },
      { direction: 'east', targetRoomId: 'magma_river', description: '遠處傳來岩漿流動的聲響' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 35 },
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
    imagePrompt: '硫磺谷 in volcano_zone, resource combat sulfur valley with yellow crystals, boiling vents, toxic steam and harsh green-yellow light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '濃烈的硫磺氣味充斥著整個山谷，地面上冒著滾燙的蒸汽。' +
      '黃色的硫磺結晶覆蓋在岩石表面，熱泉在低窪處沸騰冒泡。' +
      '火蜥蜴和熔岩蟲在這種極端環境中如魚得水。北面回熔岩小徑，南方坡道直指火山口，西側熱霧後有硫磺泉；玩家可 gather 硫磺結晶，也要避開突然噴出的蒸汽柱。',
    exits: [
      { direction: 'north', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'volcano_crater', description: '繼續向火山口攀登' },
      { direction: 'west', targetRoomId: 'volcano_sulfur_springs', description: '熱霧後是硫磺泉' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 35 },
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
    imagePrompt: '火山口 in volcano_zone, landmark combat crater with churning lava lake, flame spirits, black rim stones and blinding orange heat, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '攀登至火山口的邊緣，腳下是翻騰的岩漿湖。灼熱的氣浪撲面而來，' +
      '火焰精靈在岩漿上方翩翩起舞，牠們的身影在熱浪中若隱若現。' +
      '這裡的溫度高得驚人，普通人無法久留。北面退回硫磺谷，東側岩壁石門通往火焰神殿，西邊有橫跨岩漿的危險橋；玩家可 inspect 岩漿小島尋找炎之心線索。',
    exits: [
      { direction: 'north', targetRoomId: 'sulfur_valley', description: '退回硫磺谷' },
      { direction: 'east', targetRoomId: 'fire_temple_entrance', description: '岩壁上有一道石門' },
      { direction: 'west', targetRoomId: 'volcano_lava_bridge', description: '一道熔岩橋橫跨火山口' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 3, respawnSeconds: 45 },
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
    imagePrompt: '岩漿河 in volcano_zone, resource combat magma river with orange flow, red-hot banks, lava worms and warped heat light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條滾燙的岩漿河從火山側面流出，橘紅色的岩漿緩慢而致命地流淌。' +
      '河岸的岩石被高溫炙烤得通紅，空氣中的熱浪扭曲了視線。' +
      '熔岩蟲在岩漿河中自在穿行，火蜥蜴則在河岸捕食。西面回熔岩小徑，南側黑色洞口通往黑曜石洞，東面有閃亮晶簇噴氣口；玩家可採集冷卻岩漿外殼。',
    exits: [
      { direction: 'west', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'obsidian_cave', description: '河岸邊有一個漆黑的洞口' },
      { direction: 'east', targetRoomId: 'volcano_crystal_vent', description: '晶簇噴氣口在東側發亮' },
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
    imagePrompt: '黑曜石洞 in volcano_zone, resource combat obsidian cave with mirror black walls, distorted reflections, red mineral seams and dim heat glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '洞壁由純黑的黑曜石構成，表面如鏡子般光滑，映照出扭曲的倒影。' +
      '洞內的溫度意外地比外面低一些，但空氣中仍帶著焦灼的味道。' +
      '岩石巨人和熔岩蟲在這裡守護著地底的礦脈。北面回岩漿河，南方火光指向神殿入口，東側採場可取得高品質黑曜石。',
    exits: [
      { direction: 'north', targetRoomId: 'magma_river', description: '回到岩漿河' },
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
    imagePrompt: '火焰神殿入口 in volcano_zone, landmark combat temple gate with eternal braziers, dwarf runes, carved stone door and roaring red light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '巨大的石門上雕刻著火焰的紋飾，門框兩側的火盆燃燒著永不熄滅的火焰。' +
      '門上的古代文字似乎是矮人語，記載著神殿的歷史和警告。' +
      '門內傳來低沉的轟鳴聲和熱氣。西面回火山口，北面黑曜石洞反射著火光，南側內部通道通往火山頂；玩家可 inspect 矮人符文找寶庫密碼。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_crater', description: '回到火山口' },
      { direction: 'north', targetRoomId: 'obsidian_cave', description: '回到黑曜石洞' },
      { direction: 'south', targetRoomId: 'volcano_summit', description: '通往火山頂的內部通道' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
    ],
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
    imagePrompt: '矮人礦坑 in volcano_zone, resource combat dwarf mine with minecart rails, timber braces, ore veins and torch-lit mineral dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寬闊的礦坑中迴盪著鐵錘敲擊岩石的沉悶聲響，火把的光芒在粗糙的岩壁上跳動。' +
      '礦車軌道沿著支撐木架延伸向黑暗的深處，空氣中混雜著鐵鏽、汗水和地底礦物的氣味。' +
      '身材矮壯的矮人守衛全副武裝地巡邏著，鏽鐵色的鬍鬚上沾著礦粉，銳利的眼神審視著每一個闖入者。' +
      '礦壁上閃爍著銀、銅和秘銀的光澤，這些珍貴的礦脈是矮人一族賴以生存的根基。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_base', description: '回到火山山腳' },
      { direction: 'south', targetRoomId: 'forge_hall', description: '礦道深處通往鍛造大廳' },
      { direction: 'east', targetRoomId: 'volcano_steam_lift', description: '蒸汽升降梯在礦坑東側' },
    ],
    monsters: [
      { monsterId: 'dwarf_guard', maxCount: 3, respawnSeconds: 55 },
    ],
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
    imagePrompt: '鍛造大廳 in volcano_zone, town service crafting forge hall with giant furnace, anvils, dwarf tools, sparks and orange molten light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '宏偉的鍛造大廳中央矗立著一座巨大的熔爐，赤紅的火焰熊熊燃燒，將整個大廳映照成橘紅色。' +
      '四周的工作台上擺滿了鐵錘、鉗子和各種鍛造工具，金屬碰撞的鏗鏘聲不絕於耳。' +
      '空氣中充斥著灼熱的金屬氣味和淬火時蒸騰的白色蒸汽，令人彷彿置身於火焰的心臟。' +
      '一位肌肉虯結的矮人鐵匠正揮舞著比他手臂還粗的戰錘鍛打一塊通紅的鋼胚，他的技藝堪稱傳奇。北面回矮人礦坑，東側庫房堆滿礦錠；玩家可 craft、修理或接鍛造委託，inspect 熔爐風口可發現火元素異常。牆上的訂單板列出武器、護甲和飾品需求，提示玩家把採礦、分解與重鑄材料帶回此處處理。',
    exits: [
      { direction: 'north', targetRoomId: 'dwarf_mine', description: '回到礦坑' },
      { direction: 'east', targetRoomId: 'volcano_forge_storage', description: '庫房門後堆著礦錠' },
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
    imagePrompt: '火山頂 in volcano_zone, boss landmark summit with open crater wind, lava cracks, rock giants, flame spirits and vast horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '火山的最高點，腳下是翻騰的岩漿和蒸騰而起的灼熱氣浪，空氣中瀰漫著濃烈的硫磺味。' +
      '強風在裸露的山巔呼嘯而過，卻無法冷卻這裡灼人的溫度。登頂後視野無比開闘——' +
      '從冰封雪原到暗影森林，整個大陸的輪廓盡收眼底。' +
      '岩石巨人如同山峰的延伸般矗立不動，火焰精靈則在岩漿裂縫間翩翩起舞，守護著火山深處的原始之力。',
    exits: [
      { direction: 'north', targetRoomId: 'fire_temple_entrance', description: '回到火焰神殿入口' },
      { direction: 'east', targetRoomId: 'volcano_colossus_arena', description: '熔岩競技台在東側震動' },
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
    imagePrompt: '火山灰原 in volcano_zone, entrance combat ash field with black dunes, ember sparks, buried ore and smoky red horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '火山山腳西側是一片厚重灰原，黑色灰丘被熱風吹成波紋，偶爾有暗紅火星從裂縫中飄起。東面回火山山腳，南方可接熔岩橋外側，灰層下露出被噴發帶出的礦石。玩家可 search 灰丘找火成礦與舊行囊，也要留意火蜥蜴在灰下留下的爪痕。',
    exits: [
      { direction: 'east', targetRoomId: 'volcano_base', description: '灰路回到火山山腳' },
      { direction: 'south', targetRoomId: 'volcano_lava_bridge', description: '灼熱風指向熔岩橋' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 35 },
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
    imagePrompt: '熔岩橋 in volcano_zone, dangerous route room with narrow basalt bridge over lava lake, heat shimmer and falling sparks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條窄窄玄武岩橋跨過岩漿湖外緣，橋面裂縫透出橘紅光，火星像雨點般落在粗糙石面。北面連火山灰原，東側接火山口，南端有通往蒸汽升降梯的維修階。這是高風險捷徑，玩家可 inspect 裂縫判斷橋面穩定度，也要避免被火焰精靈逼到橋中央。',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_ash_field', description: '回到火山灰原' },
      { direction: 'east', targetRoomId: 'volcano_crater', description: '橋尾接火山口邊緣' },
      { direction: 'south', targetRoomId: 'volcano_steam_lift', description: '維修階通往蒸汽升降梯' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'fire_salamander', maxCount: 1, respawnSeconds: 35 },
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
    imagePrompt: '蒸汽升降梯 in volcano_zone, traffic resource room with dwarf lift platform, brass gears, steam pipes and red mine light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '矮人建造的升降梯卡在礦坑與火山外壁之間，黃銅齒輪、鐵鏈和蒸汽管道不停震動，白霧帶著金屬味噴向岩壁。西面維修階連熔岩橋，東側可回矮人礦坑，南方通向黑曜石採場。玩家可 inspect 控制桿啟用捷徑，search 工具箱找維修材料，也要提防從管道裡鑽出的熔岩蟲。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_lava_bridge', description: '維修階回熔岩橋' },
      { direction: 'east', targetRoomId: 'dwarf_mine', description: '升降梯門通回矮人礦坑' },
      { direction: 'south', targetRoomId: 'volcano_obsidian_quarry', description: '下層軌道通往黑曜石採場' },
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
    imagePrompt: '硫磺熱泉 in volcano_zone, resource combat hot springs with yellow pools, boiling vents, sulfur crystals and poisonous steam light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '硫磺谷西側的熱泉池不斷冒泡，黃色結晶沿池緣生長，毒霧把遠處岩壁染成暗綠。東面回硫磺谷，南側可攀上玄武岩階。玩家可 gather 硫磺與熱泉礦泥，inspect 蒸汽節奏避開噴發，也要注意熔岩蟲會從沸騰池底突然鑽出。',
    exits: [
      { direction: 'east', targetRoomId: 'sulfur_valley', description: '熱霧散處回硫磺谷' },
      { direction: 'south', targetRoomId: 'volcano_basalt_steps', description: '黑色石階通往高處' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 3, respawnSeconds: 50 },
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
    imagePrompt: '餘燼兵房 in volcano_zone, elite combat dwarf barracks with iron bunks, ember braziers, weapon racks and smoky red light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦坑東側的兵房由黑鐵和玄武岩砌成，鐵床旁堆著盾牌、戰斧與尚未冷卻的煤盆，煙味混著汗水和礦粉。西面回矮人礦坑，南方走廊接鍛造庫房，東側晶光來自噴氣口。玩家可 inspect 值勤表觀察守衛換班，search 武器架找任務證物，但會引來矮人守衛盤查。',
    exits: [
      { direction: 'west', targetRoomId: 'dwarf_mine', description: '走廊回到矮人礦坑' },
      { direction: 'south', targetRoomId: 'volcano_forge_storage', description: '貨道通往鍛造庫房' },
      { direction: 'east', targetRoomId: 'volcano_crystal_vent', description: '晶光從東側噴氣口透出' },
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
    imagePrompt: '火晶噴氣口 in volcano_zone, resource combat vent with red crystals, steam jets, magma river glow and fractured basalt, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '岩漿河東側的裂縫長滿紅色火晶，蒸汽從晶簇間噴出，讓整片玄武岩像在呼吸。西面回岩漿河，北側通餘燼兵房，南邊有通往採場的黑石路。玩家可 gather 火晶碎片、inspect 噴氣節奏避開灼傷，也會遇到被晶光吸引的火蜥蜴與火焰精靈。',
    exits: [
      { direction: 'west', targetRoomId: 'magma_river', description: '裂縫回到岩漿河' },
      { direction: 'north', targetRoomId: 'volcano_ember_barracks', description: '黑鐵門通往餘燼兵房' },
      { direction: 'south', targetRoomId: 'volcano_obsidian_quarry', description: '黑石路通往採場' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 50 },
    ],
    groundItems: [
      { itemId: 'lava_fragment', description: '火晶根部卡著一塊冷卻熔岩碎片' },
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
    imagePrompt: '黑曜石採場 in volcano_zone, resource combat quarry with black glass terraces, mine carts, red seams and golem silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑曜石洞東側被開鑿成階梯採場，黑玻璃般的石面反射紅色礦脈，礦車軌道在平台間彎曲。西面回黑曜石洞，北側接蒸汽升降梯，東北方火晶噴氣口仍在轟鳴。玩家可 gather 黑曜石、search 廢礦車找稀有礦樣，也要防備岩石巨人從倒影中逼近。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_cave', description: '採場入口回黑曜石洞' },
      { direction: 'north', targetRoomId: 'volcano_steam_lift', description: '軌道通往蒸汽升降梯' },
      { direction: 'east', targetRoomId: 'volcano_crystal_vent', description: '晶光路標指向噴氣口' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 70 },
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
    imagePrompt: '玄武岩階 in volcano_zone, main route combat basalt stairs with carved dwarf markers, lava glow below and falling ash, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一段黑色玄武岩階沿火山內壁向上折返，矮人方向刻痕被落灰半掩，階下岩漿光把每個邊角照成暗紅。北面回硫磺熱泉，東面接火焰神殿入口，南方高台通往熔岩巨像競技台。玩家可 inspect 刻痕判斷安全路線，也要小心岩石巨人把玩家逼下窄階。',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_sulfur_springs', description: '石階下方是硫磺熱泉' },
      { direction: 'east', targetRoomId: 'fire_temple_entrance', description: '石階接回火焰神殿入口' },
      { direction: 'south', targetRoomId: 'volcano_colossus_arena', description: '高台通往巨像競技台' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 70 },
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
    imagePrompt: '鍛造庫房 in volcano_zone, resource service storage with ore ingots, locked crates, cooling racks and furnace side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鍛造大廳東側的庫房堆滿鐵錠、黑曜石板與標記清楚的工具箱，冷卻架上還冒著白煙，牆角傳來低沉爐鳴。西面回鍛造大廳，北側貨道接餘燼兵房。玩家可 search 鎖箱取得材料樣本，inspect 出庫牌追蹤鍛造任務需求，也要處理從通風口竄出的火元素。這裡是火山資源線的城鎮服務延伸點，貨架按武器、護甲、飾品和消耗品分區，方便玩家確認缺少哪種礦材。牆上封蠟記錄還標示哪些箱子屬於公會訂單，錯拿會觸發守衛盤查。地上的紅色箭頭指向熔爐、礦坑與兵房三個出口，讓滿載材料的玩家能快速選擇加工、補給或撤退方向。',
    exits: [
      { direction: 'west', targetRoomId: 'forge_hall', description: '庫房門回鍛造大廳' },
      { direction: 'north', targetRoomId: 'volcano_ember_barracks', description: '貨道通往餘燼兵房' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 60 },
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
    imagePrompt: '熔岩巨像競技台 in volcano_zone, boss event arena with circular basalt platform, lava colossus silhouette, chains and erupting firelight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '火山頂東側的圓形競技台懸在岩漿湖上方，玄武岩地面刻著矮人封印鏈，中央巨大的熔岩巨像輪廓在火光裡慢慢抬頭。西面可退回火山頂，北側玄武岩階提供繞行撤退路。這裡是 Boss 事件鉤子，玩家可 inspect 封印鏈確認巨像階段，search 斷裂鎖扣找召喚材料，也要準備火焰精靈與岩石巨人的支援。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_summit', description: '退回火山頂' },
      { direction: 'north', targetRoomId: 'volcano_basalt_steps', description: '封印台邊緣接玄武岩階' },
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
    imagePrompt: '雪原入口 in frozen_wastes, entrance combat snowfield room with frost-covered stone marker, white plain, knife wind and pale blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '踏入北方的那一刻，溫度驟然下降。皚皚白雪覆蓋著一切，寒風如刀割般刺骨。' +
      '前方是一片一望無際的雪原，天地間只剩下白茫茫的一片。' +
      '入口處立著一塊石碑，上面的文字被冰霜覆蓋。東面可回暗影森林，北方風雪路徑更深，南邊營火指向雪山營地；玩家可 inspect 石碑霜字確認安全路線。',
    exits: [
      { direction: 'east', targetRoomId: 'forest_entrance', description: '穿過冰雪小路回到暗影森林入口' },
      { direction: 'north', targetRoomId: 'blizzard_path', description: '踏入暴風雪中' },
      { direction: 'south', targetRoomId: 'mountain_camp', description: '南方有營火的光芒' },
      { direction: 'west', targetRoomId: 'frozen_wastes_snowdrift_pass', description: '雪堆間有一條西行通道' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 40 },
    ],
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
    imagePrompt: '暴風雪路 in frozen_wastes, main route combat room with whiteout blizzard, buried stakes, wolf tracks and cold gray light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '呼嘯的暴風雪讓視線降到幾乎為零，每走一步都像是在與風暴搏鬥。' +
      '冰雪打在臉上如同針刺，體溫在急速流失。' +
      '隱約能聽到狼群的嚎叫聲在風中迴盪。南面可退回雪原入口，北方冰河裂縫若隱若現，西側雪牆後藏著冰釣洞；玩家可 search 旗桿找補給標記。',
    exits: [
      { direction: 'south', targetRoomId: 'snowfield_entrance', description: '退回雪原入口' },
      { direction: 'north', targetRoomId: 'glacier', description: '風暴的另一端是冰河' },
      { direction: 'west', targetRoomId: 'frozen_wastes_ice_fishing_hole', description: '雪牆後有結冰釣洞' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
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
    imagePrompt: '冰河 in frozen_wastes, resource combat glacier room with blue ice crevasses, frozen fossils, wolf tracks and sharp arctic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '巨大的冰河緩慢地向低處移動，冰面上裂開了深不見底的冰縫。' +
      '冰層中封凍著古代的植物和動物殘骸，宛如天然的博物館。' +
      '雪狼和冰元素在冰河上遊蕩，對入侵者虎視眈眈。南面回暴風雪路，北方冰面延伸到凍湖，東側冰壁洞口通向冰晶洞穴；玩家可 inspect 冰縫避開薄冰。',
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
    imagePrompt: '凍湖 in frozen_wastes, resource combat frozen lake room with mirror ice, fish shadows, drifting frost mist and moon-blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一片廣闊的湖泊被厚厚的冰層封凍，冰面如鏡子般平滑。' +
      '冰下隱約可見魚群游動的影子，湖面上飄蕩著冰霧。' +
      '冰元素在湖面上緩緩遊蕩，守護著這片凍結的領域。南面接冰河，北岸有極光之地，西側冰孔可供採集與釣魚；玩家可 search 冰面裂紋找湖底遺跡線索。',
    exits: [
      { direction: 'south', targetRoomId: 'glacier', description: '回到冰河' },
      { direction: 'north', targetRoomId: 'aurora_field', description: '湖的北岸有奇異的光芒' },
      { direction: 'west', targetRoomId: 'frozen_wastes_ice_fishing_hole', description: '冰孔在湖西側發出水聲' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 3, respawnSeconds: 45 },
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
    imagePrompt: '雪山營地 in frozen_wastes, safe service camp with hide tents, orange fire, supply crates, rock shelter and blowing snow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一個被巨大岩壁遮擋的避風處，前人在此搭建了由獸皮和木樁構成的簡易營地。' +
      '篝火仍在燃燒，噼啪作響的火焰散發出溫暖的橘光，驅散了四周徹骨的寒意。' +
      '營地裡的木箱中存放著乾肉、藥草和取暖用的毛皮毯子，是雪原中難得的庇護所。' +
      '岩壁上刻著前人留下的警告和路線標記，記錄著通往雪原深處的危險與機遇。',
    exits: [
      { direction: 'north', targetRoomId: 'snowfield_entrance', description: '回到雪原入口' },
      { direction: 'east', targetRoomId: 'wolf_den', description: '營地東方傳來狼嚎' },
      { direction: 'west', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '西側雪地有廢棄雪橇' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 1, respawnSeconds: 60 },
    ],
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
    imagePrompt: '冰晶洞穴 in frozen_wastes, resource combat ice cave with rainbow ice crystals, frozen breath, giant shadows and cold prism light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '洞壁由純淨的冰晶構成，在微光下折射出璀璨的彩虹。' +
      '洞穴深處的溫度極低，呼出的氣息瞬間凝結成冰霜。' +
      '冰元素和霜巨人守護著這處天然的冰晶寶庫。西面回冰河，北方洞穴深處通向冰封城堡大門，東側晶柱裂縫可通往高聳冰晶尖塔。',
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
    imagePrompt: '極光之地 in frozen_wastes, landmark combat aurora field with green purple lights, glittering snow, magic waves and yeti silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天空中飄蕩著壯麗的極光，綠色、紫色和藍色的光幕在夜空中舞動。' +
      '雪地被極光映照得如夢似幻，空氣中充滿了微弱的魔力波動。' +
      '巨大的雪人在極光下遊蕩，似乎被這裡的魔力吸引。南面回凍湖，東方極光指向冰封城堡，西側有古老符石環；玩家可 gather 極光石或 inspect 光幕幻象。',
    exits: [
      { direction: 'south', targetRoomId: 'frozen_lake', description: '回到凍湖' },
      { direction: 'east', targetRoomId: 'ice_castle_gate', description: '極光指引的方向有一座城堡' },
      { direction: 'west', targetRoomId: 'frozen_wastes_runestone_circle', description: '符石環在極光下發亮' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 60 },
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
    imagePrompt: '雪狼巢穴 in frozen_wastes, elite combat wolf den with bone piles, green eyes, frosted cave mouth and cold blue darkness, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一個被雪狼群佔據的巨大岩洞，洞口散落著獵物的殘骸和啃碎的骨頭。' +
      '空氣中瀰漫著野獸的腥臭味，多隻雪狼在洞內警覺地注視著入侵者。' +
      '洞穴深處隱約可以看到更多綠色的眼睛在黑暗中閃爍。西面可逃回雪山營地，北側窄洞通往雪人石堆，東面有被拖入深處的獵物痕跡。這裡是低溫區域的精英戰鬥房，玩家可 inspect 骨堆判斷狼群首領位置，search 旅人背包取得一次性補給，但若沒有先清理入口雪狼，撤退路會被堵住。洞頂冰柱會把腳步聲放大，讓狼群更快包圍入侵者；牆邊抓痕也提示可以用火光逼退部分雪狼，爭取重整隊伍的時間。',
    exits: [
      { direction: 'west', targetRoomId: 'mountain_camp', description: '逃回雪山營地' },
      { direction: 'north', targetRoomId: 'frozen_wastes_yeti_cairn', description: '窄洞通向雪人石堆' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 4, respawnSeconds: 35 },
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
    imagePrompt: '冰封城堡大門 in frozen_wastes, landmark combat ice castle gate with dragon carvings, frost giant statues, blue door light and blowing snow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座宏偉的冰封城堡聳立在風雪之中，巨大的冰門上雕刻著龍的紋飾。' +
      '城門前的石階被冰雪覆蓋，兩尊霜巨人雕像守在門口。' +
      '門縫中透出冷冽的藍光，伴隨著低沉的龍息聲。南面退回冰晶洞穴，西側極光之地提供繞行視野，北面鎖住的大門通往冰封王座。玩家可 inspect 龍紋確認開門條件，search 石階找到霜巨人巡邏痕跡，也要小心雕像突然甦醒。這裡是通往 Boss 區的地標門檻，描述清楚提示鑰匙、隊伍與寒冷準備。城牆上的冰燈會依守衛警戒改變亮度，哨塔方向也提供撤退或繞行路線，避免隊伍直接卡在封門前。',
    exits: [
      { direction: 'south', targetRoomId: 'crystal_ice_cave', description: '退回冰晶洞穴' },
      { direction: 'west', targetRoomId: 'aurora_field', description: '回到極光之地' },
      { direction: 'north', targetRoomId: 'ice_throne', description: '推開冰門，進入城堡', locked: true, keyItemId: 'gold_key' },
      { direction: 'east', targetRoomId: 'frozen_wastes_frozen_watchpost', description: '城牆旁有結冰哨塔' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'yeti', maxCount: 1, respawnSeconds: 60 },
    ],
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
    imagePrompt: '冰封王座 in frozen_wastes, boss room with towering ice throne, sleeping ice dragon whelp, crystal walls and royal blue frost light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '城堡的最深處是一座宏偉的王座大廳，穹頂高聳入雲。' +
      '冰之王座上沉睡著一隻幼年冰龍，牠的呼吸在空氣中凝結成冰霜。' +
      '大廳四壁鑲嵌著無數冰晶，映照出冰龍威嚴的身影。' +
      '這裡是冰封雪原的終極挑戰。南面退回城堡大門，北側王座背後的裂縫通向燃燒荒地，東側冰霧中可感到龍息裂谷震動。玩家可 inspect 王座符文確認冰龍階段，search 霜巨人王的戰旗尋找王冠密室線索，也要準備面對 Boss 與守衛的連續戰鬥。大廳地面有會逐步蔓延的霜紋，提示戰鬥拖延會壓縮站位；牆上冰晶反射出的龍影則能預告下一次吐息方向。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_castle_gate', description: '退回城堡大門' },
      { direction: 'north', targetRoomId: 'demon_border', description: '王座背後的裂縫通往一片燃燒的荒地' },
      { direction: 'east', targetRoomId: 'frozen_wastes_dragon_breath_rift', description: '冰霧裂谷傳來龍息' },
    ],
    monsters: [
      { monsterId: 'ice_dragon_whelp', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'frost_giant_king', maxCount: 1, respawnSeconds: 1800 },
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
    imagePrompt: '積雪隘口 in frozen_wastes, main route combat pass with high snowdrifts, buried trail stakes, wolf tracks and cold overcast light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雪原入口西側的隘口被高高積雪擠成狹長通道，半埋路標只露出鐵環，風把雪粒打在岩壁上發出沙沙聲。東面回雪原入口，北側可接暴風雪路外緣，南面通往廢棄雪橇。玩家可 inspect 路標判斷安全路線，search 雪堆找被埋補給，也要防備雪狼沿著隘口追擊。',
    exits: [
      { direction: 'east', targetRoomId: 'snowfield_entrance', description: '回到雪原入口' },
      { direction: 'north', targetRoomId: 'blizzard_path', description: '風雪聲通往暴風雪路' },
      { direction: 'south', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '雪橇殘骸在南側' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
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
    imagePrompt: '冰釣洞 in frozen_wastes, resource room with cut ice hole, fishing line, frost buckets, fish shadows and blue lake light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '凍湖西側被人鑿出圓形冰洞，釣線和骨針掛在木架上，冰下魚影在幽藍水光裡緩慢游動。東面回凍湖，南方可接暴風雪路，西側冰面裂縫通往冰河深處。玩家可 gather 魚材或 search 魚簍找失蹤漁人的牌子，也要注意冰元素從水下凝聚。',
    exits: [
      { direction: 'east', targetRoomId: 'frozen_lake', description: '回到凍湖冰面' },
      { direction: 'south', targetRoomId: 'blizzard_path', description: '風雪路在南側' },
      { direction: 'west', targetRoomId: 'frozen_wastes_glacier_crevasse', description: '冰裂延伸向冰河裂縫' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
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
    imagePrompt: '霜松林 in frozen_wastes, resource combat grove with snow-bent pines, blue needles, wolf tracks and green aurora light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雪山營地東北方有一片被霜壓彎的松林，藍綠針葉在極光下微亮，樹根間滿是狼爪和被拖行的痕跡。南面回雪山營地，東側接雪狼巢穴，北面能通向符石環。玩家可 gather 霜松木與樹脂，inspect 樹皮抓痕判斷狼群方向，也要小心雪狼從樹影裡包抄。林中幾棵老松掛著獵人留下的風鈴，鈴聲忽遠忽近時代表狼群正在繞路。雪下還埋著可作篝火材料的乾枝，能支援營地補給與寒冷抗性任務。若玩家沿著斷枝標記前進，可找到通往符石環的安全路，也能避開巢穴入口的伏擊與雪坡陷坑，保存補給與火種來源。',
    exits: [
      { direction: 'south', targetRoomId: 'mountain_camp', description: '下坡回到雪山營地' },
      { direction: 'east', targetRoomId: 'wolf_den', description: '狼嚎來自東側洞穴' },
      { direction: 'north', targetRoomId: 'frozen_wastes_runestone_circle', description: '符石微光在北側林間' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
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
    imagePrompt: '廢棄雪橇 in frozen_wastes, hidden exploration wrecked sledge with broken runners, scattered crates, frozen blood and low campfire light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一輛破裂雪橇半埋在雪坡下，斷裂滑木、翻倒箱子和凍成黑色的血痕指向風雪深處，寒風穿過繩索發出細響。北面回積雪隘口，東側可回雪山營地，南邊坡道接雪人石堆。玩家可 search 箱子找一次性補給，inspect 血跡追蹤襲擊者，也要防備被氣味吸引來的雪狼。',
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
    imagePrompt: '冰河裂縫 in frozen_wastes, hidden combat crevasse with blue ice walls, rope ladder, frozen fossils and deep shadow light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冰河西側裂開一道深藍裂縫，繩梯結滿冰霜，冰壁中封著古代獸骨和破碎器具，深處傳來空洞回聲。東面攀回冰河，北側冰釣洞水聲微弱，南面能通往積雪隘口暗道。玩家可 inspect 冰壁化石找考古線索，search 凍住的包裹取得材料，也要注意冰元素從裂縫裡浮出。',
    exits: [
      { direction: 'east', targetRoomId: 'glacier', description: '攀回冰河表面' },
      { direction: 'north', targetRoomId: 'frozen_wastes_ice_fishing_hole', description: '冰洞水聲在北側' },
      { direction: 'south', targetRoomId: 'frozen_wastes_snowdrift_pass', description: '暗道回積雪隘口' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 3, respawnSeconds: 50 },
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
    imagePrompt: '符石環 in frozen_wastes, landmark exploration room with ancient rune stones, aurora beams, snow altar and blue violet magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '極光之地西側立著一圈古老符石，冰雪祭壇位於中央，綠紫光柱在符文間緩慢移動，空氣中有細小靜電聲。東面回極光之地，南側霜松林可作撤退路，北面雪坡通向結冰哨塔。玩家可 inspect 符文順序解讀冰之王朝歷史，search 祭壇底座取得任務線索，也會吸引雪人和冰元素靠近。每塊符石都刻著不同方向記號，能把凍湖、城堡與哨塔路線串起來；若玩家在極光最亮時調查，還能看到王朝滅亡前的幻象片段。祭壇旁的凍裂刻痕提示需要冰晶材料啟動，適合作為探索任務與傳送解鎖線索和支線入口處之一。',
    exits: [
      { direction: 'east', targetRoomId: 'aurora_field', description: '極光路回到極光之地' },
      { direction: 'south', targetRoomId: 'frozen_wastes_frostpine_grove', description: '霜松林在南側' },
      { direction: 'north', targetRoomId: 'frozen_wastes_frozen_watchpost', description: '雪坡通向結冰哨塔' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'ice_elemental', maxCount: 1, respawnSeconds: 50 },
    ],
    groundItems: [
      { itemId: 'ice_crystal', description: '祭壇邊有一顆被極光照亮的冰晶' },
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
    imagePrompt: '雪人石堆 in frozen_wastes, elite combat room with giant cairns, broken bones, huge footprints and aurora snow haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '幾座巨石堆立在雪坡上，石縫中插著破矛和獸骨，周圍巨大腳印深深陷入冰雪，低沉咆哮在風中迴盪。北面通廢棄雪橇，東側窄洞接雪狼巢穴，西面可繞回霜松林。這裡是精英事件房，玩家可 inspect 石堆判斷雪人祭祀路線，search 骨堆找失蹤旅人證物，也要準備面對雪人與狼群同時出現。石堆頂端掛著被凍住的鈴鐺，搖動後會引來更強巡邏；但若先破壞狼群嗅跡，隊伍可安全撤回松林。雪坡上的巨大足印還指向城堡外牆，提示雪人可能受冰堡力量驅使。石堆陰影裡另有可採集的霜骨碎片與任務布條痕跡。',
    exits: [
      { direction: 'north', targetRoomId: 'frozen_wastes_abandoned_sledge', description: '巨大腳印回到廢棄雪橇' },
      { direction: 'east', targetRoomId: 'wolf_den', description: '窄洞通往雪狼巢穴' },
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
    imagePrompt: '結冰哨塔 in frozen_wastes, elite route watchpost with frozen battlements, cracked horn, frost giant tracks and cold castle light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冰封城堡東側的哨塔被厚冰包住，破裂號角掛在城垛上，霜巨人腳印從塔門一路延伸到雪坡。西面回城堡大門，南方可通符石環，東側冰晶尖塔在藍光裡閃爍。玩家可 inspect 號角判斷守衛警戒狀態，search 兵器架找舊王朝徽章，也要提防霜巨人從塔內甦醒。塔頂視野能看到冰堡、極光和龍息裂谷三條路線，適合作為隊伍進攻前的觀察點；但號角聲會提升整片城牆的警戒。哨塔內的結冰地圖標出巡邏間隔，能協助玩家選擇先走大門還是尖塔側路，並記錄安全撤退信號。牆角火盆已熄滅，可調查燃料缺口與守衛失蹤原因。',
    exits: [
      { direction: 'west', targetRoomId: 'ice_castle_gate', description: '城牆路回冰封城堡大門' },
      { direction: 'south', targetRoomId: 'frozen_wastes_runestone_circle', description: '雪坡通往符石環' },
      { direction: 'east', targetRoomId: 'frozen_wastes_crystal_spire', description: '冰晶尖塔在東側發光' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 2, respawnSeconds: 70 },
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
    imagePrompt: '冰晶尖塔 in frozen_wastes, resource elite spire with towering blue crystals, prism stairs, frost mist and bright cold light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冰晶洞穴東側升起一座天然尖塔，藍色晶柱像階梯般環繞上升，寒霧在尖端折射出刺眼白光。西面回冰晶洞穴，北側結冰哨塔可作外部路線，東面裂谷中傳來冰龍呼吸。玩家可 gather 高純冰晶、inspect 晶面倒影尋找隱藏門，也要面對霜巨人和冰元素守護。',
    exits: [
      { direction: 'west', targetRoomId: 'crystal_ice_cave', description: '晶柱階梯回冰晶洞穴' },
      { direction: 'north', targetRoomId: 'frozen_wastes_frozen_watchpost', description: '外部冰橋通向結冰哨塔' },
      { direction: 'east', targetRoomId: 'frozen_wastes_dragon_breath_rift', description: '寒霧裂谷傳來龍息' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
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
    imagePrompt: '龍息裂谷 in frozen_wastes, boss event rift with frozen breath clouds, blue fissure, dragon claw marks and royal ice light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冰封王座東側裂開一道深谷，藍白龍息在裂縫中翻滾，岩壁布滿巨大爪痕和被凍住的鎖鏈碎片。西面回冰封王座，南側晶光通往冰晶尖塔，北面寒霧可通向魔族邊境裂口。這裡是大型 Boss 事件鉤子，玩家可 inspect 爪痕判斷冰龍活動階段，search 鎖鏈碎片找封印材料，也要準備面對冰龍幼崽的突然甦醒。裂谷底部每隔一段時間會噴出寒流，提示隊伍注意站位與撤退方向；遠處黑煙也預告下一區魔族領地的銜接。若帶著城堡鑰匙調查裂縫邊緣，能看到通往王座密室的冰階輪廓與寶箱線索標記，以及裂谷出口。',
    exits: [
      { direction: 'west', targetRoomId: 'ice_throne', description: '裂谷回到冰封王座' },
      { direction: 'south', targetRoomId: 'frozen_wastes_crystal_spire', description: '晶光路通向冰晶尖塔' },
      { direction: 'north', targetRoomId: 'demon_border', description: '寒霧裂口通往魔族邊境' },
    ],
    monsters: [
      { monsterId: 'ice_dragon_whelp', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'frost_giant_king', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[息]',
    mapX: 4,
    mapY: 17,
  },
};

// 合併擴充房間
import { EXPANSION_ROOMS } from './rooms-expansion.js';
Object.assign(ROOMS, EXPANSION_ROOMS);

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
