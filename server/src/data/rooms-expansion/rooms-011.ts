import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_011: Record<string, RoomDef> = {
storm_highlands_basalt_spine: {
    id: 'storm_highlands_basalt_spine',
    name: '玄武岩脊',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_basalt_spine.png',
    imagePrompt: '玄武岩脊 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '玄武岩脊位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'north', targetRoomId: 'storm_highlands_goat_ledge', description: '黑岩脊回到山羊岩階' },
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
      '雷鷹崖位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_griffin_watch', description: '羽痕回到獅鷲哨臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_nest_pillars', description: '巢柱通往高處' },
      { direction: 'south', targetRoomId: 'storm_highlands_old_windmill', description: '南側外露崖路繞過雷鷹巢痕與碎羽陡坡，沿風車斷翼陰影落向舊風車臺' },
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
      '舊風車臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_thunder_pool', description: '水渠回到雷雨池' },
      { direction: 'north', targetRoomId: 'storm_highlands_eagle_scarp', description: '北側崖路逆著亂風繞過斷翼石階，再貼著外露峭壁攀回雷鷹崖外緣' },
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
      '嘯風谷位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_basalt_spine', description: '裂隙回到玄武岩脊' },
      { direction: 'east', targetRoomId: 'storm_highlands_lightning_tree', description: '風聲通往雷擊枯樹' },
      { direction: 'north', targetRoomId: 'storm_highlands_old_windmill', description: '北側嘯風斜坡沿谷壁折返並穿過亂流，越過碎石風口後回到舊風車臺' },
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
      '高巢石柱位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
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
      '風神祭壇位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_old_windmill', description: '折翼階回到舊風車臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_sky_cairns', description: '祭階升向天葬石堆' },
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
      '雷擊枯樹位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
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
      '天葬石堆位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_nest_pillars', description: '石堆路回到高巢石柱' },
      { direction: 'south', targetRoomId: 'storm_highlands_storm_altar', description: '祭階回到風神祭壇' },
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
      '斷烽臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_lightning_tree', description: '焦木路回到雷擊枯樹' },
      { direction: 'east', targetRoomId: 'storm_highlands_stormglass_mine', description: '碎光路通往風暴玻礦' },
      { direction: 'north', targetRoomId: 'storm_highlands_eye_of_gale', description: '北側烽臺階繞過倒塌烽火座並穿過旋風裂口，沿雷光石階升向暴風眼' },
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
      '暴風眼位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_storm_altar', description: '祭紋回到風神祭壇' },
      { direction: 'south', targetRoomId: 'storm_highlands_broken_beacon', description: '南側旋風階道穿過倒塌烽火座陰影，沿雷光石階與碎旗樁折降回斷烽臺' },
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
      '獅鷲巢臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_sky_cairns', description: '羽骨路回到天葬石堆' },
      { direction: 'south', targetRoomId: 'storm_highlands_worldboss_peak', description: '南側巢臺風道越過羽骨棧脊與高低落差，穿過獅鷲盤旋區後通往風暴王峰' },
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
      '風暴玻礦位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_broken_beacon', description: '碎光路回到斷烽臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_worldboss_peak', description: '北側玻化礦脈斜坡穿過閃電岩縫，沿帶電礦脊與碎玻石階一路攀上風暴王峰' },
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
      '風暴王峰位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。旅人可以 觀察 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 搜索 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_eye_of_gale', description: '風牆裂口回到暴風眼' },
      { direction: 'north', targetRoomId: 'storm_highlands_griffin_aerie', description: '北側羽骨風道逆風越過棧脊與高低落差，穿過盤旋氣流回到獅鷲巢臺' },
      { direction: 'south', targetRoomId: 'storm_highlands_stormglass_mine', description: '南側玻化礦脈斜坡沿閃電岩縫折降，繞過帶電礦脊與碎玻石階回到風暴玻礦' },
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
      '炭樹入口是黑木林最外層的焦黑門廊，兩根被雷火劈裂的巨木像門柱夾住東行灰徑，北側獵人刻痕在樹皮上留下一串舊刀痕。灰白燈光被炭黑樹皮吞掉，只剩根縫裡的冷綠苔光勾出路面。東邊通往灰燼小徑，北邊可循刻痕繞向獵人刻痕；門柱下的狼毛、折斷箭桿與黏在樹根上的黑樹脂，都暗示林內陰影會移動，也會把回程標記悄悄錯開。',
    exits: [
      { direction: 'east', targetRoomId: 'blackwood_ash_path', description: '灰徑通往林內' },
      { direction: 'north', targetRoomId: 'blackwood_hunter_marker', description: '獵人刻痕指向北側' },
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
      '灰燼小徑鋪滿細碎白灰，腳印很快被樹冠落下的炭粉蓋住，只有兩側焦枝上殘留的火灼紋能分辨方向。西面灰徑回到炭樹入口，東面黑枝逐漸合攏成移動樹叢，南側苔痕沿低窪根溝落往黑苔床。路旁可見被蛛絲纏住的採集袋、帶毒綠光的夜蕨，以及指向錯亂的舊木牌；整條小徑安靜得過分，像在等人把真正的出口和假路標分清。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_charcoal_gate', description: '灰徑回到炭樹入口' },
      { direction: 'east', targetRoomId: 'blackwood_moving_copse', description: '樹影通往移動樹叢' },
      { direction: 'south', targetRoomId: 'blackwood_black_moss_bed', description: '苔痕落向黑苔床' },
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
      '獵人刻痕刻在一排向北傾斜的炭木上，深淺不同的刀口被黑樹脂填滿，遠看像一串凝固的眼睛。南側刻痕折回炭樹入口，東側羽毛路通向渡鴉棲枝，地面則散著舊箭羽、獸骨扣和被踩碎的狼牙。這裡的樹幹仍保留追獵路線，卻有幾道新生枝條故意覆住舊記號；若順著刀口的年代差異判讀，可以看出黑木林何時開始扭曲獵人的回程。',
    exits: [
      { direction: 'south', targetRoomId: 'blackwood_charcoal_gate', description: '刻痕回到炭樹入口' },
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
      '渡鴉棲枝抬在一片低垂黑枝上方，無數黑羽黏著樹脂垂落，風一吹便像細小的告警旗。西邊羽毛路回到獵人刻痕，東側蛛絲路接往織網岔口，南側低枝則繞下移動樹叢。高處鳥巢裡混著亮石、骨針和被啄碎的符牌，樹下還有暗精靈箭孔留下的細小缺口；所有棲枝都朝不同方向彎曲，讓這裡同時像瞭望點、陷阱和迷路者最後留下的標記。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_hunter_marker', description: '羽毛路回到獵人刻痕' },
      { direction: 'east', targetRoomId: 'blackwood_webbed_crossing', description: '蛛絲路通往織網岔口' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_moving_copse',
        description: '南側低枝路要穿過渡鴉羽毛、交錯黑枝與會移位的樹影，才回到移動樹叢',
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
      '移動樹叢的樹幹排列每隔一陣便會微微錯位，剛才還敞開的灰徑會被新生枝椏蓋住，只在樹皮焦痕上留下淡淡擦痕。西面可回灰燼小徑，北側低枝路繞向渡鴉棲枝，東邊盤根路深入盤根迷宮。地面有被拖拽的藤蔓溝、斷裂路標和仍在滲脂的活根，林間黑影像慢慢轉身的守衛；這裡的重點不是道路消失，而是每條路都在試圖偽裝成另一條路。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_ash_path', description: '樹影回到灰燼小徑' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_raven_roost',
        description: '北側低枝路要沿會移位的樹影上繞，穿過渡鴉羽毛雨後才抵達棲枝',
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
      '黑苔床是一片濕冷低地，厚苔覆在炭根與碎石上，踩下去會滲出墨綠水光，連火光都被吸成暗色。北側苔痕可回灰燼小徑，東邊藥草味延伸到女巫樹洞。苔層裡混著夜蕨嫩芽、蛛卵殼和舊瓶塞，幾處被採過的凹痕又被新苔悄悄補平；周圍樹根像沉在泥中的手指，既提供落腳點，也把不小心偏離路面的腳步拖向更深的陰濕處。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_ash_path', description: '苔痕回到灰燼小徑' },
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
      '織網岔口被數層灰白蛛絲分成三條半透明通道，絲線上掛著焦葉、黑羽和細小骨片，稍有震動便傳到林冠深處。西側蛛絲路回渡鴉棲枝，南面黏絲斜坡落入盤根迷宮，東邊暗箭路通往暗精靈伏臺。地面仍能看見被拖過的靴痕與折斷短矛，幾根絲線反射出不自然的冷光；這裡的路標不是木牌，而是哪些蛛網已經積灰，哪些仍新得像剛張開。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_raven_roost', description: '蛛絲路回到渡鴉棲枝' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_root_maze',
        description: '南側網線要穿過數層黏蛛絲與塌陷樹根，沿低暗根縫落入盤根迷宮',
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
      '盤根迷宮由巨大的黑根交錯堆成，根脊高低不一，形成窄橋、凹井與半封閉拱洞，樹皮裂縫裡流著黏亮樹脂。西面盤根路回到移動樹叢，北側黏絲坡可攀回織網岔口，東面樹脂痕引向黑樹脂池。迷宮裡的根節刻著舊祭符和獵人切口，卻有不少符號被新根吞掉；只要看清哪條根還在滲出新液，就能分辨活路與正在合攏的死路。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_moving_copse', description: '盤根路回到移動樹叢' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_webbed_crossing',
        description: '北側回織網岔口要攀過糾結樹根與黏絲斜坡，才能重新看見蛛網路標',
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
      '女巫樹洞嵌在一株中空炭木腹內，洞口掛著綠火燈、乾草束和用黑線縫起的獸皮袋，苦藥味從樹腹深處慢慢吐出。西面藥草味回到黑苔床，東側骨鈴路通向骨鈴林，南邊無月路落往無月空地。樹洞外的石臼仍留著碾碎夜蕨的濕痕，根縫裡塞著小骨牌與焦黑符紙；這裡不像住處，更像一座把森林病症磨成詛咒的臨時工坊。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_black_moss_bed', description: '藥草味回到黑苔床' },
      { direction: 'east', targetRoomId: 'blackwood_bone_chimes', description: '骨鈴路通往骨鈴林' },
      { direction: 'south', targetRoomId: 'blackwood_moonless_glade', description: '無月空地向南展開' },
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
      '暗精靈伏臺架在黑枝與樹根交會的陰影裡，矮木牆上開著細長箭孔，孔緣被反覆摩擦得發亮。西側暗箭路回織網岔口，東面毒蕨坡通往毒蕨林，南側黏滑階落向黑樹脂池。伏臺下方散著灰色箭羽、靜音皮扣和被苔覆住的觀測刻線，幾面樹皮屏風刻意遮住月光；從這裡望出去，渡鴉、蛛網與樹脂池都像被拉進同一張獵圖。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_webbed_crossing', description: '暗箭路回到織網岔口' },
      { direction: 'east', targetRoomId: 'blackwood_poison_fern', description: '毒蕨坡通往毒蕨林' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_sap_pool',
        description: '南側斜梯藏在伏臺陰影下，要避開暗箭孔並踩過樹脂滑階才落到黑樹脂池',
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
      '黑樹脂池是一口緩慢冒泡的深色凹潭，黏稠樹脂沿根脈滴落，映出扭曲的枝影與偶爾浮起的骨片。西邊黏液痕回盤根迷宮，北側滑階可上暗精靈伏臺，東面焦木路接往燒焦圖騰。池邊有被樹脂封住的藥瓶、斷箭和半枚骨鈴，黏液表面還浮著細小綠火；這裡像黑木林的傷口，所有支路留下的毒、灰與血都在此沉積。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_root_maze', description: '黏液痕回到盤根迷宮' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_dark_elf_blind',
        description: '北側回伏臺要沿黏滑樹脂階上爬，穿過暗箭孔下方陰影才抵達平台',
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
      '骨鈴林掛滿由小骨、空果殼與黑線串成的風鈴，聲音被樹冠壓得很低，卻會沿根脈傳到很遠。西側骨鈴路回女巫樹洞，東面吊骨路繞向燒焦圖騰，南側暗坡可落到無月空地。樹幹上有女巫縫線、狼爪刮痕和被煙熏黑的祈願牌，地面則鋪著能發出乾裂聲的骨片；每一串鈴都像在標記曾經有人走錯方向，也像在替仍未靠近的危險先行發聲。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_witch_hollow', description: '骨鈴路回到女巫樹洞' },
      {
        direction: 'east',
        targetRoomId: 'blackwood_burnt_totem',
        description: '東側吊骨路要穿過一串風動骨鈴與焦黑藤索，繞過炭根才到燒焦圖騰前方',
      },
      {
        direction: 'south',
        targetRoomId: 'blackwood_moonless_glade',
        description: '南側鈴聲會把人引下暗坡，穿過無光樹冠與骨牌線後才抵達無月空地',
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
      '無月空地被黑樹冠圍成一圈，天空明明敞開，卻沒有一點月光落下，只有草尖上的冷露映著微弱綠火。北側無月路可回女巫樹洞，東邊爪痕獸道通向影狼窩。空地中央有被踩平的草環、碎裂骨牌和幾束反向生長的夜蕨，四周樹影像一圈沉默看客。這裡的安靜帶著獸息，越靠近東側，地面爪印越深，狼群留下的黑毛也越新。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_witch_hollow', description: '無月路回到女巫樹洞' },
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
      '毒蕨林長滿帶鋸齒的夜蕨，葉背滲著冷綠毒液，低霧貼著地面流動，讓每一步都像踩進潮濕的藥罐。西側毒蕨坡回到暗精靈伏臺，東面倒木橋通往空心木橋，北側煙痕路與燒焦圖騰相連。蕨叢下藏著破陶罐、細骨針和被腐蝕的箭頭，幾株葉片被整齊割過，顯示這裡長期被採集也長期被看守；毒香越濃的地方，越可能掩住真正的腳步聲。',
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
      '燒焦圖騰立在黑樹脂乾裂的土坡上，由三段焦木和骨繩綁成，表面刻痕被火燒到只剩凹陷的暗紅線。西側焦木路回黑樹脂池，北面煙痕路可繞往毒蕨林，東邊炭圈接向長老樹環。圖騰底下堆著碎骨鈴、焦羽和被樹脂黏住的祭葉，偶爾有煙從裂縫裡向下沉去；它不像祈福物，更像用來警告林中舊力量不要越界的燒痕。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_sap_pool', description: '焦木路回到黑樹脂池' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_poison_fern',
        description: '北側煙痕路要繞過燒焦圖騰背面，穿過毒蕨煙霧與低刺根才到毒蕨林',
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
      '雪狼巢穴是一個被狼群占據的岩洞，洞口散落獵物殘骸、啃碎骨頭和帶血皮毛，腥味被冷風壓在低處。西面雪山營地的火光被岩壁遮住，北側窄洞通向雪人石堆的回聲但已被冰塊堵住，東面只剩被拖入深處的獵物痕跡。洞頂冰柱會放大腳步聲，牆邊抓痕和焦黑火把痕顯出狼群曾被火光逼退。近旁霜粉、斷枝與被風磨亮的冰痕持續標出回程方向，也讓周圍危險在白茫茫雪光中保留清楚輪廓。',
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
      '空心木橋是一株倒下的巨木，樹腹被蛀空後架成窄橋，內壁年輪像一圈圈黑色眼紋，走近便能聽見低沉回音。西側倒木橋回毒蕨林，南側黑根階梯落往長老樹環，東面枯枝棚架把錯路封在灰霧裡。橋面有蛛絲補過的裂縫、被毒蕨染綠的水痕與老守衛磨出的爪槽；穿過這裡時，林冠與地面短暫分層，足以看清黑木林深處的核心輪廓。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_poison_fern', description: '倒木橋回到毒蕨林' },
      {
        direction: 'south',
        targetRoomId: 'blackwood_elder_ring',
        description: '南側樹洞階要穿過空心倒木內部，沿年輪裂縫與黑根階梯落向長老樹環',
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
      '長老樹環由數株古老炭木圍成，粗根彼此搭接成圓形階座，中央裸土上刻滿被樹脂填黑的年輪符號。西面炭圈回燒焦圖騰，北側黑根階梯可上空心木橋，東邊年輪路通往黑心木核。環內沒有風，骨鈴聲與狼嚎都在外圈變得模糊，只有根下沉悶脈動持續傳來；這裡像森林的審議場，所有枝影都朝中心傾斜，等待某個更深的意志回應。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_burnt_totem', description: '炭圈回到燒焦圖騰' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_hollow_log_bridge',
        description: '北側回空心木橋要沿黑根階梯上爬，穿過年輪裂縫與倒木中空腹部',
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
      '倒塌小祠半埋在狼徑盡頭，斷柱被黑苔吞住，碎石上的舊神像只剩一張被樹根穿過的臉。西側獸道回影狼窩，北面斷柱路繞向長老樹環，東側祠後根道接近黑心木核。祠前散落供碗、焦黑符紙和被雨水泡爛的祈願帶，幾道新根從祭台底下伸出，像把整座小祠拖向森林心臟；殘留的神聖感已經很薄，只剩崩壞前最後的保護形狀。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_wolf_den', description: '獸道回到影狼窩' },
      {
        direction: 'north',
        targetRoomId: 'blackwood_elder_ring',
        description: '北側斷柱路要穿過倒塌小祠碎石與纏根拱門，才接上長老樹環外圈',
      },
      {
        direction: 'east',
        targetRoomId: 'blackwood_heartwood_core',
        description: '東側祠後根道被黑樹脂封住邊緣，必須沿發亮根脈繞到黑心木核外壁',
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
      '黑心木核盤踞在長老樹環東側，是一團由巨根、黑樹脂與暗紅木心交纏成的龐大核心，表面像會緩慢呼吸。西邊年輪路仍能退回長老樹環，南側祠後根道的殘影被樹影反鎖，只剩發亮根脈提示倒塌小祠曾經連到此處。核心周圍插著斷矛、骨鈴和被樹脂封住的舊祭牌，黑暗樹人守在根脊之間；所有錯位的路標、移動的樹叢與失常的狼群，最後都指向這個正在污染整片黑木林的木心。',
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
      '王都外門的拱壁被黑雨與歲月啃成鋸齒，半落的王旗仍釘在門樓高處，金線徽記在灰光裡像最後一點餘燼。向東的碎石大道伸入寂靜王道，石板上留著整齊卻無主的軍靴痕；北側斷梯繞上守望塔，塔身裂縫間透出冷白燈火。門洞下堆著碎盾、封蠟令牌與凝住的馬蹄水窪，整座入口不像被攻破，更像在某個命令尚未傳達前突然停止呼吸。',
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
      '寂靜王道筆直穿過外城，兩側商宅門窗半開，屋內桌椅、酒杯和落下的斗篷都停在同一個無聲瞬間。西面遠處可見王都外門的破拱，東面石攤路連向凝固市集，南側乾渠則把積灰引往破噴泉。大道中央鋪著裂白大理石，王家徽記被踩得模糊，街燈仍亮著青灰火芯，卻照不出任何影子，只把鐘樓斷裂的陰影拉得又長又薄。',
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
      '守望塔貼著王都外門北側升起，旋梯斷成數段，鐵欄上掛滿風乾的號角繩與碎裂透鏡。往南能沿斷梯回到外門，往東的塔橋越過空街，直接接向停鐘廣場的鐘影邊緣。塔頂瞭望窗被黑色藤蔓勒住，遠處王座區的尖頂在霧中像一排失去火光的燭芯；地面散落巡邏表、破箭與凝固血珠，顯示守軍曾在鐘聲停下前守著某個從未抵達的訊號。',
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
      '停鐘廣場中央立著裂開的天文鐘，銅針卡在同一刻，齒輪裸露處結著銀白霜屑，每隔片刻便發出沒有回聲的輕響。西側塔橋回望守望塔，東側石階通往市政檔案館，南面的鐘影斜落進凝固市集。廣場地磚鑲著日輪與王冠紋，許多影子被釘在原地，姿態像正在奔逃、請願或跪拜；鐘座底部刻滿小字與斷裂日期，暗示整座王都的時間並非自然停下。',
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
      '凝固市集仍保持午市的擁擠形狀，翻倒果籃、稱重銅盤、香料袋與銀幣全懸在薄霜般的時間殼裡。西面的石攤路退回寂靜王道，北側鐘影可上停鐘廣場，東邊破橋跨向王家水道。攤棚布條沒有風卻微微鼓起，魚販木桶裡的水像透明石頭，兩名決鬥者的劍影停在半空；若細看貨架暗格，能讀出市民在崩壞前試圖藏起徽章與家書的慌亂。',
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
      '破噴泉坐落在寂靜王道南側的下沉小庭，白石女神像只剩半張臉，斷手仍捧著乾涸水盤。北面的乾渠回到王道，東側裂石路穿過低矮樹籬前往雕像庭園。泉池底部沉著金幣、碎花瓣與灰黑水痕，水脈卻像被透明力量凍住，在噴口內形成扭曲的玻璃脈絡。周圍長椅排得整齊，幾件斗篷搭在椅背上，留下宴會忽然中止、賓客再也沒有返回的沉默。',
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
      '市政檔案館外牆刻滿戶籍、稅印與王令編號，石門半掩，門縫裡吹出乾紙和冷灰的味道。西側石階連回停鐘廣場，東面的卷宗廊通往審判廳，南方排水梯下降到王家水道。館內書架倒成斜坡，封蠟印章散落一地，許多卷宗仍被藍色火線束住，標籤記著失蹤街區、撤離名單和王冠繼承爭議；窗外鐘針的陰影落在桌上，像一枚永遠不會蓋下的判印。',
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
      '王家水道在城腹下方展開，拱頂鑲著褪色金箔，冷水卻靜得像磨亮的黑鏡。西側破橋接回凝固市集，北面排水梯升往市政檔案館，東邊水鏡路延向鏡庭。渠壁浮雕描著歷代加冕船隊，如今船形燈盞全沉在水面下，只有幽藍光點沿著石縫漂移。鐵閘後傳來緩慢甲片聲，倒影裡偶爾閃過不存在於岸上的人影，使這條供水脈絡更像王都尚未熄滅的記憶血管。',
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
      '雕像庭園被低牆與乾枯月桂圍住，數十尊歷代官員、將軍與無名侍從排成嚴格隊列，臉部多被細裂紋割開。西側裂石路回到破噴泉，東側雕像列引向鏡庭，南方軍靴印穿入灰兵營。庭中沒有落葉腐味，只有石粉與舊香料的乾澀氣息；幾座雕像腳邊放著新舊不一的王家徽章，像有人在時間停滯後仍悄悄替被抹名者補上位置。',
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
