import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_011: Record<string, RoomDef> = {
storm_highlands_basalt_spine: {
    id: 'storm_highlands_basalt_spine',
    name: '玄武岩脊',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_basalt_spine.png',
    imagePrompt: '玄武岩脊 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '玄武岩脊位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'north', targetRoomId: 'storm_highlands_goat_ledge', description: '黑岩脊回到山羊岩階', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'storm_highlands_screaming_gully', description: '裂隙通往嘯風谷' },
    ],
    monsters: [
      { monsterId: 'stormhorn_goat', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'basalt_storm_colossus', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[脊]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '玄武岩脊的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '玄武岩脊的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '玄武岩脊保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_eagle_scarp: {
    id: 'storm_highlands_eagle_scarp',
    name: '雷鷹崖',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_eagle_scarp.png',
    imagePrompt: '雷鷹崖 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '雷鷹崖位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_griffin_watch', description: '羽痕回到獅鷲哨臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_nest_pillars', description: '巢柱通往高處' },
      { direction: 'south', targetRoomId: 'storm_highlands_old_windmill', description: '南側外露崖路繞過雷鷹巢痕與碎羽陡坡，沿風車斷翼陰影落向舊風車臺', edgeKind: 'distant_route', edgeNote: '雷鷹崖南側需沿外露崖路繞行到舊風車臺，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'stormwatch_griffin', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'windcut_kestrel', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[鷹]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '雷鷹崖的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷鷹崖的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷鷹崖保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_old_windmill: {
    id: 'storm_highlands_old_windmill',
    name: '舊風車臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_old_windmill.png',
    imagePrompt: '舊風車臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '舊風車臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_thunder_pool', description: '水渠回到雷雨池' },
      { direction: 'north', targetRoomId: 'storm_highlands_eagle_scarp', description: '北側崖路逆著亂風繞過斷翼石階，再貼著外露峭壁攀回雷鷹崖外緣', edgeKind: 'distant_route', edgeNote: '舊風車臺北側回雷鷹崖要繞過斷翼石階與外崖，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'storm_highlands_storm_altar', description: '折翼階通往風神祭壇' },
    ],
    monsters: [
      { monsterId: 'windcut_kestrel', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'altar_gale_singer', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[車]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '舊風車臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '舊風車臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '舊風車臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_screaming_gully: {
    id: 'storm_highlands_screaming_gully',
    name: '嘯風谷',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_screaming_gully.png',
    imagePrompt: '嘯風谷 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '嘯風谷位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_basalt_spine', description: '裂隙回到玄武岩脊' },
      { direction: 'east', targetRoomId: 'storm_highlands_lightning_tree', description: '風聲通往雷擊枯樹' },
      { direction: 'north', targetRoomId: 'storm_highlands_old_windmill', description: '北側嘯風斜坡沿谷壁折返並穿過亂流，越過碎石風口後回到舊風車臺', edgeKind: 'distant_route', edgeNote: '嘯風谷北側斜坡被橫風切斷，需要沿谷壁折返舊風車臺，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'cloudbridge_raider', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'stormhorn_goat', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[谷]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '嘯風谷的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '嘯風谷的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '嘯風谷保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_nest_pillars: {
    id: 'storm_highlands_nest_pillars',
    name: '高巢石柱',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_nest_pillars.png',
    imagePrompt: '高巢石柱 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '高巢石柱位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_eagle_scarp', description: '巢柱回到雷鷹崖' },
      { direction: 'east', targetRoomId: 'storm_highlands_sky_cairns', description: '石堆路通往天葬石堆' },
    ],
    monsters: [
      { monsterId: 'stormwatch_griffin', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'gale_eye_wyvern', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '高巢石柱的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '高巢石柱的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '高巢石柱保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_storm_altar: {
    id: 'storm_highlands_storm_altar',
    name: '風神祭壇',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_storm_altar.png',
    imagePrompt: '風神祭壇 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '風神祭壇位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_old_windmill', description: '折翼階回到舊風車臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_sky_cairns', description: '祭階升向天葬石堆', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'storm_highlands_eye_of_gale', description: '祭紋通往暴風眼' },
    ],
    monsters: [
      { monsterId: 'altar_gale_singer', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'cloudbridge_raider', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '風神祭壇的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風神祭壇的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風神祭壇保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_lightning_tree: {
    id: 'storm_highlands_lightning_tree',
    name: '雷擊枯樹',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_lightning_tree.png',
    imagePrompt: '雷擊枯樹 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '雷擊枯樹位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_screaming_gully', description: '風聲回到嘯風谷' },
      { direction: 'east', targetRoomId: 'storm_highlands_broken_beacon', description: '焦木路通往斷烽臺' },
    ],
    monsters: [
      { monsterId: 'cloudbridge_raider', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'basalt_storm_colossus', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[樹]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '雷擊枯樹的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷擊枯樹的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷擊枯樹保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_sky_cairns: {
    id: 'storm_highlands_sky_cairns',
    name: '天葬石堆',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_sky_cairns.png',
    imagePrompt: '天葬石堆 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '天葬石堆位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_nest_pillars', description: '石堆路回到高巢石柱' },
      { direction: 'south', targetRoomId: 'storm_highlands_storm_altar', description: '祭階回到風神祭壇', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'storm_highlands_griffin_aerie', description: '羽骨路通往獅鷲巢臺' },
    ],
    monsters: [
      { monsterId: 'stormwatch_griffin', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'gale_eye_wyvern', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[葬]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '天葬石堆的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '天葬石堆的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '天葬石堆保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_broken_beacon: {
    id: 'storm_highlands_broken_beacon',
    name: '斷烽臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_broken_beacon.png',
    imagePrompt: '斷烽臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '斷烽臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_lightning_tree', description: '焦木路回到雷擊枯樹' },
      { direction: 'east', targetRoomId: 'storm_highlands_stormglass_mine', description: '碎光路通往風暴玻礦' },
      { direction: 'north', targetRoomId: 'storm_highlands_eye_of_gale', description: '北側烽臺階繞過倒塌烽火座並穿過旋風裂口，沿雷光石階升向暴風眼', edgeKind: 'distant_route', edgeNote: '斷烽臺北側階梯會繞過倒塌烽火座與旋風裂口，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'basalt_storm_colossus', maxCount: 1, respawnSeconds: 210 },
      { monsterId: 'windcut_kestrel', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[烽]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '斷烽臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '斷烽臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '斷烽臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_eye_of_gale: {
    id: 'storm_highlands_eye_of_gale',
    name: '暴風眼',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_eye_of_gale.png',
    imagePrompt: '暴風眼 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '暴風眼位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_storm_altar', description: '祭紋回到風神祭壇' },
      { direction: 'south', targetRoomId: 'storm_highlands_broken_beacon', description: '南側旋風階道穿過倒塌烽火座陰影，沿雷光石階與碎旗樁折降回斷烽臺', edgeKind: 'distant_route', edgeNote: '暴風眼南側回斷烽臺需穿過旋風階道與倒塌烽火座，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'storm_highlands_worldboss_peak', description: '風牆裂口通往風暴王峰' },
    ],
    monsters: [
      { monsterId: 'gale_eye_wyvern', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'altar_gale_singer', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[眼]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '暴風眼的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '暴風眼的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '暴風眼保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_griffin_aerie: {
    id: 'storm_highlands_griffin_aerie',
    name: '獅鷲巢臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_griffin_aerie.png',
    imagePrompt: '獅鷲巢臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '獅鷲巢臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_sky_cairns', description: '羽骨路回到天葬石堆' },
      { direction: 'south', targetRoomId: 'storm_highlands_worldboss_peak', description: '南側巢臺風道越過羽骨棧脊與高低落差，穿過獅鷲盤旋區後通往風暴王峰', edgeKind: 'distant_route', edgeNote: '獅鷲巢臺南側風道跨過羽骨棧脊與高低落差，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'stormwatch_griffin', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'gale_eye_wyvern', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[獅]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '獅鷲巢臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '獅鷲巢臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '獅鷲巢臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_stormglass_mine: {
    id: 'storm_highlands_stormglass_mine',
    name: '風暴玻礦',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_stormglass_mine.png',
    imagePrompt: '風暴玻礦 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '風暴玻礦位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_broken_beacon', description: '碎光路回到斷烽臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_worldboss_peak', description: '北側玻化礦脈斜坡穿過閃電岩縫，沿帶電礦脊與碎玻石階一路攀上風暴王峰', edgeKind: 'distant_route', edgeNote: '風暴玻礦北側需沿玻化礦脈斜坡攀上王峰，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'stormglass_minebeast', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'basalt_storm_colossus', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[礦]',
    mapX: 6,
    mapY: -1,
    guardianHints: {
      creature: '風暴玻礦的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴玻礦的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風暴玻礦保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

storm_highlands_worldboss_peak: {
    id: 'storm_highlands_worldboss_peak',
    name: '風暴王峰',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_worldboss_peak.png',
    imagePrompt: '風暴王峰 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '風暴王峰位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_eye_of_gale', description: '風牆裂口回到暴風眼' },
      { direction: 'north', targetRoomId: 'storm_highlands_griffin_aerie', description: '北側羽骨風道逆風越過棧脊與高低落差，穿過盤旋氣流回到獅鷲巢臺', edgeKind: 'distant_route', edgeNote: '風暴王峰北側回巢臺要逆風穿過羽骨棧脊與高低落差，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'storm_highlands_stormglass_mine', description: '南側玻化礦脈斜坡沿閃電岩縫折降，繞過帶電礦脊與碎玻石階回到風暴玻礦', edgeKind: 'distant_route', edgeNote: '風暴王峰南側下到玻礦需沿玻化礦脈折降，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'gale_king_griffin', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'gale_eye_wyvern', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'stormwatch_griffin', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '風暴王峰的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴王峰的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風暴王峰保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

blackwood_charcoal_gate: {
    id: 'blackwood_charcoal_gate',
    name: '炭樹入口',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_charcoal_gate.png',
    imagePrompt: '炭樹入口 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain forest, clear lantern light',
    description:
      '炭樹入口位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'east', targetRoomId: 'blackwood_ash_path', description: '灰徑通往林內' },
      { direction: 'north', targetRoomId: 'blackwood_hunter_marker', description: '獵人刻痕指向北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'charcoal_bark_wolf', maxCount: 2, respawnSeconds: 130 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '炭樹入口的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '炭樹入口的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '炭樹入口保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_ash_path: {
    id: 'blackwood_ash_path',
    name: '灰燼小徑',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_ash_path.png',
    imagePrompt: '灰燼小徑 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '灰燼小徑位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_charcoal_gate', description: '灰徑回到炭樹入口' },
      { direction: 'east', targetRoomId: 'blackwood_moving_copse', description: '樹影通往移動樹叢' },
      { direction: 'south', targetRoomId: 'blackwood_black_moss_bed', description: '苔痕落向黑苔床', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'charcoal_bark_wolf', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'blackwood_webspinner', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '灰燼小徑的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '灰燼小徑的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '灰燼小徑保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_hunter_marker: {
    id: 'blackwood_hunter_marker',
    name: '獵人刻痕',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_hunter_marker.png',
    imagePrompt: '獵人刻痕 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '獵人刻痕位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'south', targetRoomId: 'blackwood_charcoal_gate', description: '刻痕回到炭樹入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'blackwood_raven_roost', description: '羽毛路通往渡鴉棲枝' },
    ],
    monsters: [
      { monsterId: 'charcoal_bark_wolf', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'ravenmark_hexer', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[獵]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '獵人刻痕的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '獵人刻痕的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '獵人刻痕保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_raven_roost: {
    id: 'blackwood_raven_roost',
    name: '渡鴉棲枝',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_raven_roost.png',
    imagePrompt: '渡鴉棲枝 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '渡鴉棲枝位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_hunter_marker', description: '羽毛路回到獵人刻痕' },
      { direction: 'east', targetRoomId: 'blackwood_webbed_crossing', description: '蛛絲路通往織網岔口' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_moving_copse',
        description: '南側低枝路要穿過渡鴉羽毛、交錯黑枝與會移位的樹影，才回到移動樹叢',
        edgeKind: 'distant_route',
        edgeNote: '渡鴉棲枝到移動樹叢需要穿過低枝、羽毛與移位樹影，屬於黑木林內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'ravenmark_hexer', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'blackwood_webspinner', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[鴉]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '渡鴉棲枝的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '渡鴉棲枝的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '渡鴉棲枝保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_moving_copse: {
    id: 'blackwood_moving_copse',
    name: '移動樹叢',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_moving_copse.png',
    imagePrompt: '移動樹叢 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '移動樹叢位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_ash_path', description: '樹影回到灰燼小徑' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_raven_roost',
        description: '北側低枝路要沿會移位的樹影上繞，穿過渡鴉羽毛雨後才抵達棲枝',
        edgeKind: 'distant_route',
        edgeNote: '移動樹叢到渡鴉棲枝需要沿低枝、黑枝與渡鴉羽毛繞行，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_root_maze', description: '盤根路通往根迷宮' },
    ],
    monsters: [
      { monsterId: 'gloomroot_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'charcoal_bark_wolf', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[移]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '移動樹叢的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '移動樹叢的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '移動樹叢保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_black_moss_bed: {
    id: 'blackwood_black_moss_bed',
    name: '黑苔床',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_black_moss_bed.png',
    imagePrompt: '黑苔床 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '黑苔床位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_ash_path', description: '苔痕回到灰燼小徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'blackwood_witch_hollow', description: '藥草味通往女巫樹洞' },
    ],
    monsters: [
      { monsterId: 'blackwood_webspinner', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'charcoal_bark_wolf', maxCount: 1, respawnSeconds: 130 },
    ],
    mapSymbol: '[苔]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '黑苔床的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑苔床的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑苔床保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_webbed_crossing: {
    id: 'blackwood_webbed_crossing',
    name: '織網岔口',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_webbed_crossing.png',
    imagePrompt: '織網岔口 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '織網岔口位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_raven_roost', description: '蛛絲路回到渡鴉棲枝' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_root_maze',
        description: '南側網線要穿過數層黏蛛絲與塌陷樹根，沿低暗根縫落入盤根迷宮',
        edgeKind: 'distant_route',
        edgeNote: '織網岔口到盤根迷宮需要穿過黏蛛絲與塌陷根縫，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_dark_elf_blind', description: '暗箭路通往暗精靈伏臺' },
    ],
    monsters: [
      { monsterId: 'blackwood_webspinner', maxCount: 4, respawnSeconds: 140 },
      { monsterId: 'ashblind_archer', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[網]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '織網岔口的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '織網岔口的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '織網岔口保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_root_maze: {
    id: 'blackwood_root_maze',
    name: '盤根迷宮',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_root_maze.png',
    imagePrompt: '盤根迷宮 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '盤根迷宮位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_moving_copse', description: '盤根路回到移動樹叢' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_webbed_crossing',
        description: '北側回織網岔口要攀過糾結樹根與黏絲斜坡，才能重新看見蛛網路標',
        edgeKind: 'distant_route',
        edgeNote: '盤根迷宮回織網岔口需要攀過糾結樹根與黏絲斜坡，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_sap_pool', description: '黏液痕通往黑樹脂池' },
    ],
    monsters: [
      { monsterId: 'gloomroot_treant', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'blackwood_webspinner', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[根]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '盤根迷宮的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '盤根迷宮的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '盤根迷宮保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_witch_hollow: {
    id: 'blackwood_witch_hollow',
    name: '女巫樹洞',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_witch_hollow.png',
    imagePrompt: '女巫樹洞 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '女巫樹洞位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_black_moss_bed', description: '藥草味回到黑苔床' },
      { direction: 'east', targetRoomId: 'blackwood_bone_chimes', description: '骨鈴路通往骨鈴林' },
      { direction: 'south', targetRoomId: 'blackwood_moonless_glade', description: '無月空地向南展開', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'nightfern_witch', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'gloomroot_treant', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[巫]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '女巫樹洞的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '女巫樹洞的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '女巫樹洞保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_dark_elf_blind: {
    id: 'blackwood_dark_elf_blind',
    name: '暗精靈伏臺',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_dark_elf_blind.png',
    imagePrompt: '暗精靈伏臺 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '暗精靈伏臺位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_webbed_crossing', description: '暗箭路回到織網岔口' },
      { direction: 'east', targetRoomId: 'blackwood_poison_fern', description: '毒蕨坡通往毒蕨林' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_sap_pool',
        description: '南側斜梯藏在伏臺陰影下，要避開暗箭孔並踩過樹脂滑階才落到黑樹脂池',
        edgeKind: 'distant_route',
        edgeNote: '暗精靈伏臺到黑樹脂池需要沿陰影斜梯與樹脂滑階下行，屬於黑木林內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'ashblind_archer', maxCount: 3, respawnSeconds: 210 },
      { monsterId: 'bonechime_stalker', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[伏]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '暗精靈伏臺的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '暗精靈伏臺的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '暗精靈伏臺保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_sap_pool: {
    id: 'blackwood_sap_pool',
    name: '黑樹脂池',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_sap_pool.png',
    imagePrompt: '黑樹脂池 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '黑樹脂池位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_root_maze', description: '黏液痕回到盤根迷宮' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_dark_elf_blind',
        description: '北側回伏臺要沿黏滑樹脂階上爬，穿過暗箭孔下方陰影才抵達平台',
        edgeKind: 'distant_route',
        edgeNote: '黑樹脂池回暗精靈伏臺需要沿樹脂滑階與暗箭陰影上行，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_burnt_totem', description: '焦木路通往燒焦圖騰' },
    ],
    monsters: [
      { monsterId: 'gloomroot_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'blackwood_webspinner', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[脂]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '黑樹脂池的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑樹脂池的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑樹脂池保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_bone_chimes: {
    id: 'blackwood_bone_chimes',
    name: '骨鈴林',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_bone_chimes.png',
    imagePrompt: '骨鈴林 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '骨鈴林位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_witch_hollow', description: '骨鈴路回到女巫樹洞' },
      {
        direction: 'east',
        targetRoomId: 'blackwood_burnt_totem',
        description: '東側吊骨路要穿過一串風動骨鈴與焦黑藤索，繞過炭根才到燒焦圖騰前方',
        edgeKind: 'distant_route',
        edgeNote: '骨鈴林到燒焦圖騰需要穿過吊骨路、風動骨鈴與焦黑藤索，屬於黑木林內長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'blackwood_moonless_glade',
        description: '南側鈴聲會把人引下暗坡，穿過無光樹冠與骨牌線後才抵達無月空地',
        edgeKind: 'distant_route',
        edgeNote: '骨鈴林到無月空地需要沿暗坡、無光樹冠與骨牌線下行，屬於黑木林內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'bonechime_stalker', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'nightfern_witch', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[鈴]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '骨鈴林的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '骨鈴林的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '骨鈴林保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_moonless_glade: {
    id: 'blackwood_moonless_glade',
    name: '無月空地',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_moonless_glade.png',
    imagePrompt: '無月空地 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '無月空地位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_witch_hollow', description: '無月路回到女巫樹洞', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'blackwood_wolf_den', description: '爪痕通往影狼窩' },
    ],
    monsters: [
      { monsterId: 'moonless_wolf_matriarch', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'charcoal_bark_wolf', maxCount: 3, respawnSeconds: 130 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '無月空地的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '無月空地的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '無月空地保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_poison_fern: {
    id: 'blackwood_poison_fern',
    name: '毒蕨林',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_poison_fern.png',
    imagePrompt: '毒蕨林 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '毒蕨林位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_dark_elf_blind', description: '毒蕨坡回到伏臺' },
      { direction: 'east', targetRoomId: 'blackwood_hollow_log_bridge', description: '倒木橋通往空心木橋' },
    ],
    monsters: [
      { monsterId: 'blackwood_webspinner', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'ashblind_archer', maxCount: 2, respawnSeconds: 210 },
    ],
    mapSymbol: '[蕨]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '毒蕨林的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '毒蕨林的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '毒蕨林保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_burnt_totem: {
    id: 'blackwood_burnt_totem',
    name: '燒焦圖騰',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_burnt_totem.png',
    imagePrompt: '燒焦圖騰 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '燒焦圖騰位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_sap_pool', description: '焦木路回到黑樹脂池' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_poison_fern',
        description: '北側煙痕路要繞過燒焦圖騰背面，穿過毒蕨煙霧與低刺根才到毒蕨林',
        edgeKind: 'distant_route',
        edgeNote: '燒焦圖騰到毒蕨林需要穿過煙痕路、毒蕨煙霧與低刺根，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_elder_ring', description: '炭圈通往長老樹環' },
    ],
    monsters: [
      { monsterId: 'gloomroot_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'bonechime_stalker', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[圖]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '燒焦圖騰的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '燒焦圖騰的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '燒焦圖騰保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_wolf_den: {
    id: 'blackwood_wolf_den',
    name: '影狼窩',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_wolf_den.png',
    imagePrompt: '影狼窩 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '影狼窩位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_moonless_glade', description: '爪痕回到無月空地' },
      { direction: 'east', targetRoomId: 'blackwood_fallen_shrine', description: '獸道通往倒塌小祠' },
    ],
    monsters: [
      { monsterId: 'moonless_wolf_matriarch', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'charcoal_bark_wolf', maxCount: 4, respawnSeconds: 130 },
    ],
    mapSymbol: '[狼]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '影狼窩的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '影狼窩的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '影狼窩保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_hollow_log_bridge: {
    id: 'blackwood_hollow_log_bridge',
    name: '空心木橋',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_hollow_log_bridge.png',
    imagePrompt: '空心木橋 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '空心木橋位於黑木林深處，西側倒木橋回到毒蕨林，南側黑根階梯落往長老樹環，東面枯枝封徑標出不可穿越的邊界。炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_poison_fern', description: '倒木橋回到毒蕨林' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_elder_ring',
        description: '南側樹洞階要穿過空心倒木內部，沿年輪裂縫與黑根階梯落向長老樹環',
        edgeKind: 'distant_route',
        edgeNote: '空心木橋到長老樹環需要穿過倒木內部、年輪裂縫與黑根階梯，屬於黑木林內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'blackwood_webspinner', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'elder_charwood_guardian', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '空心木橋的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '空心木橋的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '空心木橋保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_elder_ring: {
    id: 'blackwood_elder_ring',
    name: '長老樹環',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_elder_ring.png',
    imagePrompt: '長老樹環 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '長老樹環位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_burnt_totem', description: '炭圈回到燒焦圖騰' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_hollow_log_bridge',
        description: '北側回空心木橋要沿黑根階梯上爬，穿過年輪裂縫與倒木中空腹部',
        edgeKind: 'distant_route',
        edgeNote: '長老樹環回空心木橋需要沿黑根階梯、年輪裂縫與倒木內部上行，屬於黑木林內長路徑。',
      },
      { direction: 'east', targetRoomId: 'blackwood_heartwood_core', description: '年輪路通往黑心木核' },
    ],
    monsters: [
      { monsterId: 'elder_charwood_guardian', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'gloomroot_treant', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[環]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '長老樹環的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '長老樹環的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '長老樹環保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_fallen_shrine: {
    id: 'blackwood_fallen_shrine',
    name: '倒塌小祠',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_fallen_shrine.png',
    imagePrompt: '倒塌小祠 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '倒塌小祠位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_wolf_den', description: '獸道回到影狼窩' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_elder_ring',
        description: '北側斷柱路要穿過倒塌小祠碎石與纏根拱門，才接上長老樹環外圈',
        edgeKind: 'distant_route',
        edgeNote: '倒塌小祠到長老樹環需要穿過斷柱、碎石與纏根拱門，屬於黑木林內長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'blackwood_heartwood_core',
        description: '東側祠後根道被黑樹脂封住邊緣，必須沿發亮根脈繞到黑心木核外壁',
        edgeKind: 'distant_route',
        edgeNote: '倒塌小祠到黑心木核需要沿祠後根道、黑樹脂邊緣與發亮根脈繞行，屬於黑木林內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'nightfern_witch', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'moonless_wolf_matriarch', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '倒塌小祠的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '倒塌小祠的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '倒塌小祠保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

blackwood_heartwood_core: {
    id: 'blackwood_heartwood_core',
    name: '黑心木核',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_heartwood_core.png',
    imagePrompt: '黑心木核 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '黑心木核位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。南側祠後根道可見倒塌小祠殘影，但黑心木核周圍樹影反鎖回程，必須由倒塌小祠祠後根道進入。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_elder_ring', description: '年輪路回到長老樹環' },
    ],
    monsters: [
      { monsterId: 'blackheart_treant', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'elder_charwood_guardian', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'bonechime_stalker', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '黑心木核的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑心木核的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑心木核保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

lost_capital_outer_gate: {
    id: 'lost_capital_outer_gate',
    name: '王都外門',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_outer_gate.png',
    imagePrompt: '王都外門 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '王都外門位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'east', targetRoomId: 'lost_capital_silent_avenue', description: '碎石大道通往城內' },
      { direction: 'north', targetRoomId: 'lost_capital_watch_tower', description: '斷梯通往守望塔' },
    ],
    monsters: [
      { monsterId: 'silent_avenue_guard', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '王都外門的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王都外門的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王都外門保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_silent_avenue: {
    id: 'lost_capital_silent_avenue',
    name: '寂靜王道',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_silent_avenue.png',
    imagePrompt: '寂靜王道 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '寂靜王道位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_outer_gate', description: '大道回到王都外門' },
      { direction: 'east', targetRoomId: 'lost_capital_frozen_market', description: '石攤路通往凝固市集' },
      { direction: 'south', targetRoomId: 'lost_capital_broken_fountain', description: '乾渠通往破噴泉' },
    ],
    monsters: [
      { monsterId: 'silent_avenue_guard', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'frozen_market_duelist', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '寂靜王道的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '寂靜王道的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '寂靜王道保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_watch_tower: {
    id: 'lost_capital_watch_tower',
    name: '守望塔',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_watch_tower.png',
    imagePrompt: '守望塔 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '守望塔位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'south', targetRoomId: 'lost_capital_outer_gate', description: '斷梯回到王都外門' },
      { direction: 'east', targetRoomId: 'lost_capital_clock_square', description: '塔橋通往停鐘廣場' },
    ],
    monsters: [
      { monsterId: 'clockwork_gargoyle', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'frozen_market_duelist', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[塔]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '守望塔的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '守望塔的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '守望塔保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_clock_square: {
    id: 'lost_capital_clock_square',
    name: '停鐘廣場',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_clock_square.png',
    imagePrompt: '停鐘廣場 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '停鐘廣場位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_watch_tower', description: '塔橋回到守望塔' },
      { direction: 'east', targetRoomId: 'lost_capital_civic_archive', description: '石階通往市政檔案館' },
      { direction: 'south', targetRoomId: 'lost_capital_frozen_market', description: '鐘影落向凝固市集' },
    ],
    monsters: [
      { monsterId: 'silent_avenue_guard', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'clockwork_gargoyle', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '停鐘廣場的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '停鐘廣場的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '停鐘廣場保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_frozen_market: {
    id: 'lost_capital_frozen_market',
    name: '凝固市集',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_frozen_market.png',
    imagePrompt: '凝固市集 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '凝固市集位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_silent_avenue', description: '石攤路回到寂靜王道' },
      { direction: 'north', targetRoomId: 'lost_capital_clock_square', description: '鐘影回到停鐘廣場' },
      { direction: 'east', targetRoomId: 'lost_capital_royal_canal', description: '破橋通往王家水道' },
    ],
    monsters: [
      { monsterId: 'frozen_market_duelist', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'silent_avenue_guard', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '凝固市集的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '凝固市集的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '凝固市集保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_broken_fountain: {
    id: 'lost_capital_broken_fountain',
    name: '破噴泉',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_broken_fountain.png',
    imagePrompt: '破噴泉 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '破噴泉位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'north', targetRoomId: 'lost_capital_silent_avenue', description: '乾渠回到寂靜王道' },
      { direction: 'east', targetRoomId: 'lost_capital_statue_garden', description: '裂石路通往雕像庭園' },
    ],
    monsters: [
      { monsterId: 'royal_canal_sentinel', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'silent_avenue_guard', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '破噴泉的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '破噴泉的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '破噴泉保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_civic_archive: {
    id: 'lost_capital_civic_archive',
    name: '市政檔案館',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_civic_archive.png',
    imagePrompt: '市政檔案館 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '市政檔案館位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_clock_square', description: '石階回到停鐘廣場' },
      { direction: 'east', targetRoomId: 'lost_capital_judgment_hall', description: '卷宗廊通往審判廳' },
      { direction: 'south', targetRoomId: 'lost_capital_royal_canal', description: '排水梯通往王家水道' },
    ],
    monsters: [
      { monsterId: 'archive_lich_scribe', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'silent_avenue_guard', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[檔]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '市政檔案館的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '市政檔案館的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '市政檔案館保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_royal_canal: {
    id: 'lost_capital_royal_canal',
    name: '王家水道',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_royal_canal.png',
    imagePrompt: '王家水道 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '王家水道位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_frozen_market', description: '破橋回到凝固市集' },
      { direction: 'north', targetRoomId: 'lost_capital_civic_archive', description: '排水梯回到檔案館' },
      { direction: 'east', targetRoomId: 'lost_capital_mirror_court', description: '水鏡路通往鏡庭' },
    ],
    monsters: [
      { monsterId: 'royal_canal_sentinel', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'frozen_market_duelist', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[渠]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '王家水道的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王家水道的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王家水道保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_statue_garden: {
    id: 'lost_capital_statue_garden',
    name: '雕像庭園',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_statue_garden.png',
    imagePrompt: '雕像庭園 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '雕像庭園位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_broken_fountain', description: '裂石路回到破噴泉' },
      { direction: 'east', targetRoomId: 'lost_capital_mirror_court', description: '雕像列通往鏡庭' },
      { direction: 'south', targetRoomId: 'lost_capital_ashen_barracks', description: '軍靴印通往灰兵營' },
    ],
    monsters: [
      { monsterId: 'clockwork_gargoyle', maxCount: 3, respawnSeconds: 190 },
      { monsterId: 'royal_canal_sentinel', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[像]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '雕像庭園的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '雕像庭園的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '雕像庭園保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },
};
