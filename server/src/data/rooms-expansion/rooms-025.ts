import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_025: Record<string, RoomDef> = {
emerald_canopy_lightning_bark_shrine: {
    id: 'emerald_canopy_lightning_bark_shrine',
    name: '雷皮小祠',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_lightning_bark_shrine.png',
    imagePrompt: '雷皮小祠 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '雷皮小祠位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_greenheart_span', description: '綠心跨枝在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_cloudroot_bridge', description: '雲根橋在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_elite_patrol_perch', description: '精英巡梢棲木在西側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[祠]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '雷皮小祠的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '雷皮小祠的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '雷皮小祠殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_hollow_trunk_market: {
    id: 'emerald_canopy_hollow_trunk_market',
    name: '空樹市集',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_hollow_trunk_market.png',
    imagePrompt: '空樹市集 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '空樹市集位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_sunleaf_garden', description: '日葉園在北側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_ancient_bee_hive', description: '古蜂巢在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'emerald_canopy_ancient_bee_swarm', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '空樹市集的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '空樹市集的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '空樹市集殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_ancient_bee_hive: {
    id: 'emerald_canopy_ancient_bee_hive',
    name: '古蜂巢',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_ancient_bee_hive.png',
    imagePrompt: '古蜂巢 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '古蜂巢位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_elite_patrol_perch', description: '精英巡梢棲木在北側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_hollow_trunk_market', description: '空樹市集在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_cloudroot_bridge', description: '雲根橋在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_ancient_bee_swarm', maxCount: 3, respawnSeconds: 260 },
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[蜂]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '古蜂巢的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '古蜂巢的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '古蜂巢殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_cloudroot_bridge: {
    id: 'emerald_canopy_cloudroot_bridge',
    name: '雲根橋',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_cloudroot_bridge.png',
    imagePrompt: '雲根橋 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '雲根橋位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_lightning_bark_shrine', description: '雷皮小祠在北側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_ancient_bee_hive', description: '古蜂巢在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_stag_crown_clearing', description: '鹿冠空地在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_glasswing_stag', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[雲]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '雲根橋的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '雲根橋的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '雲根橋殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_stag_crown_clearing: {
    id: 'emerald_canopy_stag_crown_clearing',
    name: '鹿冠空地',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_stag_crown_clearing.png',
    imagePrompt: '鹿冠空地 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '鹿冠空地位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'west', targetRoomId: 'emerald_canopy_cloudroot_bridge', description: '雲根橋在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_high_green_court', description: '高綠庭在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_glasswing_stag', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[鹿]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '鹿冠空地的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '鹿冠空地的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '鹿冠空地殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_high_green_court: {
    id: 'emerald_canopy_high_green_court',
    name: '高綠庭',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_high_green_court.png',
    imagePrompt: '高綠庭 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '高綠庭位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 搜索 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'west', targetRoomId: 'emerald_canopy_stag_crown_clearing', description: '鹿冠空地在西側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_high_green_warden', maxCount: 1, respawnSeconds: 1100 },
      { monsterId: 'emerald_canopy_glasswing_stag', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[庭]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '高綠庭的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '高綠庭的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '高綠庭殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

// ─── 空心山擴充 (Lv 36-50) ───────────────────────────

  hollow_mountain_entrance_wind_gate: {
    id: 'hollow_mountain_entrance_wind_gate',
    name: '風門入口',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_entrance_wind_gate.png',
    imagePrompt: '風門入口 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '風門入口位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'east', targetRoomId: 'hollow_mountain_spiral_mine_ramp', description: '螺旋礦坡在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_wind_gate_sentinel', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_windpipe_bat_swarm', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '風門入口的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '風門入口的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '風門入口殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_spiral_mine_ramp: {
    id: 'hollow_mountain_spiral_mine_ramp',
    name: '螺旋礦坡',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_spiral_mine_ramp.png',
    imagePrompt: '螺旋礦坡 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '螺旋礦坡位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'south', targetRoomId: 'hollow_mountain_frost_vein_wall', description: '霜脈壁在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_entrance_wind_gate', description: '風門入口在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_echo_market', description: '回音市集在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_wind_gate_sentinel', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_echo_miner_wraith', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '螺旋礦坡的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '螺旋礦坡的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '螺旋礦坡殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_echo_market: {
    id: 'hollow_mountain_echo_market',
    name: '回音市集',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_echo_market.png',
    imagePrompt: '回音市集 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '回音市集位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'south', targetRoomId: 'hollow_mountain_thunder_ore_bridge', description: '雷礦橋在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_spiral_mine_ramp', description: '螺旋礦坡在西側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_echo_miner_wraith', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_wind_gate_sentinel', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '回音市集的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '回音市集的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '回音市集殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_frost_vein_wall: {
    id: 'hollow_mountain_frost_vein_wall',
    name: '霜脈壁',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_frost_vein_wall.png',
    imagePrompt: '霜脈壁 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '霜脈壁位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_spiral_mine_ramp', description: '螺旋礦坡在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_black_granite_cut', description: '黑花崗切場在南側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_thunder_ore_bridge', description: '雷礦橋在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_frost_vein_golem', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_echo_miner_wraith', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[霜]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '霜脈壁的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '霜脈壁的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '霜脈壁殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_thunder_ore_bridge: {
    id: 'hollow_mountain_thunder_ore_bridge',
    name: '雷礦橋',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_thunder_ore_bridge.png',
    imagePrompt: '雷礦橋 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '雷礦橋位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_echo_market', description: '回音市集在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_windpipe_tunnel', description: '風管隧道在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_frost_vein_wall', description: '霜脈壁在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_hollow_bell_chamber', description: '空鐘室在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_thunder_ore_lizard', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_wind_gate_sentinel', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[雷]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '雷礦橋的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '雷礦橋的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '雷礦橋殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_hollow_bell_chamber: {
    id: 'hollow_mountain_hollow_bell_chamber',
    name: '空鐘室',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_hollow_bell_chamber.png',
    imagePrompt: '空鐘室 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '空鐘室位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'south', targetRoomId: 'hollow_mountain_crystal_scree', description: '晶石碎坡在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_thunder_ore_bridge', description: '雷礦橋在西側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_echo_miner_wraith', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_thunder_ore_lizard', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[鐘]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '空鐘室的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '空鐘室的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '空鐘室殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_quarry_lift: {
    id: 'hollow_mountain_quarry_lift',
    name: '採石升降臺',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_quarry_lift.png',
    imagePrompt: '採石升降臺 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '採石升降臺位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'east', targetRoomId: 'hollow_mountain_black_granite_cut', description: '黑花崗切場在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_quarry_chain_brute', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_wind_gate_sentinel', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[升]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '採石升降臺的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '採石升降臺的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '採石升降臺殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_black_granite_cut: {
    id: 'hollow_mountain_black_granite_cut',
    name: '黑花崗切場',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_black_granite_cut.png',
    imagePrompt: '黑花崗切場 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '黑花崗切場位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_frost_vein_wall', description: '霜脈壁在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_deep_mushroom_shelf', description: '深菇棚在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_quarry_lift', description: '採石升降臺在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_windpipe_tunnel', description: '風管隧道在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_quarry_chain_brute', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_frost_vein_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[岩]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '黑花崗切場的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '黑花崗切場的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '黑花崗切場殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_windpipe_tunnel: {
    id: 'hollow_mountain_windpipe_tunnel',
    name: '風管隧道',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_windpipe_tunnel.png',
    imagePrompt: '風管隧道 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '風管隧道位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_thunder_ore_bridge', description: '雷礦橋在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_ice_chain_gallery', description: '冰鏈廊在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_black_granite_cut', description: '黑花崗切場在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_crystal_scree', description: '晶石碎坡在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_windpipe_bat_swarm', maxCount: 3, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_thunder_ore_lizard', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[風]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '風管隧道的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '風管隧道的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '風管隧道殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_crystal_scree: {
    id: 'hollow_mountain_crystal_scree',
    name: '晶石碎坡',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_crystal_scree.png',
    imagePrompt: '晶石碎坡 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '晶石碎坡位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_hollow_bell_chamber', description: '空鐘室在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_miner_oath_post', description: '礦誓柱在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_windpipe_tunnel', description: '風管隧道在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_dungeon_hub_cavern', description: '洞城樞紐在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_frost_vein_golem', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_thunder_ore_lizard', maxCount: 2, respawnSeconds: 360 },
    ],
    mapSymbol: '[晶]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '晶石碎坡的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '晶石碎坡的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '晶石碎坡殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_dungeon_hub_cavern: {
    id: 'hollow_mountain_dungeon_hub_cavern',
    name: '洞城樞紐',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_dungeon_hub_cavern.png',
    imagePrompt: '洞城樞紐 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '洞城樞紐位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'south', targetRoomId: 'hollow_mountain_storm_capacitor', description: '風暴蓄能室在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_crystal_scree', description: '晶石碎坡在西側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_echo_miner_wraith', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_storm_capacitor_jailer', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[樞]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '洞城樞紐的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '洞城樞紐的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '洞城樞紐殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_deep_mushroom_shelf: {
    id: 'hollow_mountain_deep_mushroom_shelf',
    name: '深菇棚',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_deep_mushroom_shelf.png',
    imagePrompt: '深菇棚 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '深菇棚位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_black_granite_cut', description: '黑花崗切場在北側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_ice_chain_gallery', description: '冰鏈廊在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_deepcap_colossus', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_windpipe_bat_swarm', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[菇]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '深菇棚的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '深菇棚的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '深菇棚殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_ice_chain_gallery: {
    id: 'hollow_mountain_ice_chain_gallery',
    name: '冰鏈廊',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_ice_chain_gallery.png',
    imagePrompt: '冰鏈廊 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '冰鏈廊位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_windpipe_tunnel', description: '風管隧道在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_old_drill_nest', description: '舊鑽巢在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_deep_mushroom_shelf', description: '深菇棚在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_miner_oath_post', description: '礦誓柱在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_frost_vein_golem', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_silver_breath_warden', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[鏈]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '冰鏈廊的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '冰鏈廊的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '冰鏈廊殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_miner_oath_post: {
    id: 'hollow_mountain_miner_oath_post',
    name: '礦誓柱',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_miner_oath_post.png',
    imagePrompt: '礦誓柱 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '礦誓柱位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_crystal_scree', description: '晶石碎坡在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_silver_breath_well', description: '銀息井在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_ice_chain_gallery', description: '冰鏈廊在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_storm_capacitor', description: '風暴蓄能室在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_quarry_chain_brute', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'hollow_mountain_silver_breath_warden', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[誓]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '礦誓柱的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '礦誓柱的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '礦誓柱殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_storm_capacitor: {
    id: 'hollow_mountain_storm_capacitor',
    name: '風暴蓄能室',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_storm_capacitor.png',
    imagePrompt: '風暴蓄能室 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '風暴蓄能室位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_dungeon_hub_cavern', description: '洞城樞紐在北側' },
      { direction: 'south', targetRoomId: 'hollow_mountain_ancient_cart_maze', description: '古礦車迷宮在南側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_miner_oath_post', description: '礦誓柱在西側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_storm_capacitor_jailer', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_thunder_ore_lizard', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[蓄]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '風暴蓄能室的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '風暴蓄能室的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '風暴蓄能室殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_old_drill_nest: {
    id: 'hollow_mountain_old_drill_nest',
    name: '舊鑽巢',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_old_drill_nest.png',
    imagePrompt: '舊鑽巢 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '舊鑽巢位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_ice_chain_gallery', description: '冰鏈廊在北側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_silver_breath_well', description: '銀息井在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_cart_maze_automaton', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_quarry_chain_brute', maxCount: 2, respawnSeconds: 420 },
    ],
    mapSymbol: '[鑽]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '舊鑽巢的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '舊鑽巢的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '舊鑽巢殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_silver_breath_well: {
    id: 'hollow_mountain_silver_breath_well',
    name: '銀息井',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_silver_breath_well.png',
    imagePrompt: '銀息井 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '銀息井位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_miner_oath_post', description: '礦誓柱在北側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_old_drill_nest', description: '舊鑽巢在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_ancient_cart_maze', description: '古礦車迷宮在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_silver_breath_warden', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_deepcap_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '銀息井的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '銀息井的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '銀息井殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_ancient_cart_maze: {
    id: 'hollow_mountain_ancient_cart_maze',
    name: '古礦車迷宮',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_ancient_cart_maze.png',
    imagePrompt: '古礦車迷宮 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '古礦車迷宮位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'north', targetRoomId: 'hollow_mountain_storm_capacitor', description: '風暴蓄能室在北側' },
      { direction: 'west', targetRoomId: 'hollow_mountain_silver_breath_well', description: '銀息井在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_high_vault_stairs', description: '高穹階在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_cart_maze_automaton', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_storm_capacitor_jailer', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[車]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '古礦車迷宮的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '古礦車迷宮的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '古礦車迷宮殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_high_vault_stairs: {
    id: 'hollow_mountain_high_vault_stairs',
    name: '高穹階',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_high_vault_stairs.png',
    imagePrompt: '高穹階 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '高穹階位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'west', targetRoomId: 'hollow_mountain_ancient_cart_maze', description: '古礦車迷宮在西側' },
      { direction: 'east', targetRoomId: 'hollow_mountain_mountain_heart_core', description: '山心核心在東側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_cart_maze_automaton', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_silver_breath_warden', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_storm_capacitor_jailer', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[階]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '高穹階的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '高穹階的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '高穹階殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

hollow_mountain_mountain_heart_core: {
    id: 'hollow_mountain_mountain_heart_core',
    name: '山心核心',
    zone: 'hollow_mountain' as RoomDef['zone'],
    image: 'hollow_mountain_mountain_heart_core.png',
    imagePrompt: '山心核心 in hollow_mountain, vast hollow mountain interior with spiral mine ramps, echo caverns, frost veins, thunder ore bridge, quarry lifts and wind tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mountain, clear lantern light',
    description:
      '山心核心位於整座山腹被挖空的空心山內，螺旋礦坡、回音市集、霜脈壁、雷礦橋與洞城樞紐沿著巨大中空穹頂層層下沉。這裡是高階採礦、隊伍推進與地下城中轉區，旅人可以 觀察 風向刻痕、礦車軌距、冰鏈張力和雷礦脈衝來判斷可採層位，也能 搜索 黑花崗切場、深菇棚、古礦車迷宮與山心核心尋找稀有礦、舊鑽頭和洞城路牌。若隊伍忽略穿山風暴、升降臺斷索與風管隧道的回聲假象，惡魔礦兵、龍騎士、古龍與虛空行者會把退路封進山壁；若穩定沿風門入口、高穹階與銀息井推進，則能帶回完整採礦圖、山腹風壓讀數、雷礦樣本與安全返程標記',
    exits: [
      { direction: 'west', targetRoomId: 'hollow_mountain_high_vault_stairs', description: '高穹階在西側' },
    ],
    monsters: [
      { monsterId: 'hollow_mountain_heart_titan', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'hollow_mountain_cart_maze_automaton', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'hollow_mountain_storm_capacitor_jailer', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[心]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '山心核心的回音若突然延遲，附近礦洞守衛、古龍或深層魔物可能正在換道。',
      treasure: '山心核心的霜脈裂縫、雷礦節點、礦車底盤或銀息井旁可能藏著空心山材料。',
      spirit: '山心核心殘留礦工撤離、山腹風暴與洞城樞紐封門時的低沉記憶。',
    },
  },

// ─── 蛇河三角洲擴充 (Lv 18-30) ───────────────────────────

  serpent_delta_entrance_ferry: {
    id: 'serpent_delta_entrance_ferry',
    name: '渡口入口',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_entrance_ferry.png',
    imagePrompt: '渡口入口 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '渡口入口位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'east', targetRoomId: 'serpent_delta_split_reed_bank', description: '分流水蘆岸在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_mudfish_ambusher', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[渡]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '渡口入口的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '渡口入口的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '渡口入口殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_split_reed_bank: {
    id: 'serpent_delta_split_reed_bank',
    name: '分流水蘆岸',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_split_reed_bank.png',
    imagePrompt: '分流水蘆岸 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '分流水蘆岸位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'south', targetRoomId: 'serpent_delta_stilt_hamlet', description: '吊腳村在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_entrance_ferry', description: '渡口入口在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_mudfish_pool', description: '泥魚潭在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_mudfish_ambusher', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[蘆]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '分流水蘆岸的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '分流水蘆岸的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '分流水蘆岸殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_mudfish_pool: {
    id: 'serpent_delta_mudfish_pool',
    name: '泥魚潭',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_mudfish_pool.png',
    imagePrompt: '泥魚潭 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '泥魚潭位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'south', targetRoomId: 'serpent_delta_cold_bend', description: '冷水彎在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_split_reed_bank', description: '分流水蘆岸在西側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_mudfish_ambusher', maxCount: 3, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[魚]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '泥魚潭的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '泥魚潭的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '泥魚潭殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_stilt_hamlet: {
    id: 'serpent_delta_stilt_hamlet',
    name: '吊腳村',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_stilt_hamlet.png',
    imagePrompt: '吊腳村 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '吊腳村位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_split_reed_bank', description: '分流水蘆岸在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_green_herb_islet', description: '青藥小洲在南側' },
      { direction: 'east', targetRoomId: 'serpent_delta_cold_bend', description: '冷水彎在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_stilt_scaleguard', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[村]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '吊腳村的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '吊腳村的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '吊腳村殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_cold_bend: {
    id: 'serpent_delta_cold_bend',
    name: '冷水彎',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_cold_bend.png',
    imagePrompt: '冷水彎 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '冷水彎位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_mudfish_pool', description: '泥魚潭在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_sunken_pirogue', description: '沉獨木舟在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_stilt_hamlet', description: '吊腳村在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_scale_net_yard', description: '鱗網場在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_coldmist_eel', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_mudfish_ambusher', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[彎]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '冷水彎的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '冷水彎的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '冷水彎殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_scale_net_yard: {
    id: 'serpent_delta_scale_net_yard',
    name: '鱗網場',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_scale_net_yard.png',
    imagePrompt: '鱗網場 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '鱗網場位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'south', targetRoomId: 'serpent_delta_serpent_shrine_steps', description: '蛇祠階在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_cold_bend', description: '冷水彎在西側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_stilt_scaleguard', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_moon_net_slinger', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[網]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '鱗網場的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '鱗網場的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '鱗網場殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_heron_marker: {
    id: 'serpent_delta_heron_marker',
    name: '鷺標洲',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_heron_marker.png',
    imagePrompt: '鷺標洲 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '鷺標洲位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'east', targetRoomId: 'serpent_delta_green_herb_islet', description: '青藥小洲在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_mangrove_rootbinder', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[鷺]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '鷺標洲的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '鷺標洲的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '鷺標洲殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_green_herb_islet: {
    id: 'serpent_delta_green_herb_islet',
    name: '青藥小洲',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_green_herb_islet.png',
    imagePrompt: '青藥小洲 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '青藥小洲位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_stilt_hamlet', description: '吊腳村在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_mangrove_maze', description: '紅樹迷道在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_heron_marker', description: '鷺標洲在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_sunken_pirogue', description: '沉獨木舟在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_mangrove_rootbinder', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_shrine_mask_acolyte', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[藥]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '青藥小洲的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '青藥小洲的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '青藥小洲殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_sunken_pirogue: {
    id: 'serpent_delta_sunken_pirogue',
    name: '沉獨木舟',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_sunken_pirogue.png',
    imagePrompt: '沉獨木舟 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '沉獨木舟位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_cold_bend', description: '冷水彎在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_ice_mist_channel', description: '冰霧水道在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_green_herb_islet', description: '青藥小洲在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_serpent_shrine_steps', description: '蛇祠階在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_coldmist_eel', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_moon_net_slinger', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[舟]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '沉獨木舟的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '沉獨木舟的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '沉獨木舟殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_serpent_shrine_steps: {
    id: 'serpent_delta_serpent_shrine_steps',
    name: '蛇祠階',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_serpent_shrine_steps.png',
    imagePrompt: '蛇祠階 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '蛇祠階位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_scale_net_yard', description: '鱗網場在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_egg_mound', description: '蛇卵丘在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_sunken_pirogue', description: '沉獨木舟在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_flooded_granary', description: '淹穀倉在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_shrine_mask_acolyte', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_stilt_scaleguard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '蛇祠階的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '蛇祠階的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '蛇祠階殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_flooded_granary: {
    id: 'serpent_delta_flooded_granary',
    name: '淹穀倉',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_flooded_granary.png',
    imagePrompt: '淹穀倉 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '淹穀倉位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'south', targetRoomId: 'serpent_delta_moonlit_fishing_post', description: '月釣哨在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_serpent_shrine_steps', description: '蛇祠階在西側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_mudfish_ambusher', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_moon_net_slinger', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[倉]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '淹穀倉的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '淹穀倉的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '淹穀倉殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_mangrove_maze: {
    id: 'serpent_delta_mangrove_maze',
    name: '紅樹迷道',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_mangrove_maze.png',
    imagePrompt: '紅樹迷道 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '紅樹迷道位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_green_herb_islet', description: '青藥小洲在北側' },
      { direction: 'east', targetRoomId: 'serpent_delta_ice_mist_channel', description: '冰霧水道在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_mangrove_rootbinder', maxCount: 3, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_reed_constrictor', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[樹]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '紅樹迷道的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '紅樹迷道的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '紅樹迷道殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_ice_mist_channel: {
    id: 'serpent_delta_ice_mist_channel',
    name: '冰霧水道',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_ice_mist_channel.png',
    imagePrompt: '冰霧水道 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '冰霧水道位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_sunken_pirogue', description: '沉獨木舟在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_old_levy_causeway', description: '舊堤道在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_mangrove_maze', description: '紅樹迷道在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_egg_mound', description: '蛇卵丘在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_coldmist_eel', maxCount: 3, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_blue_lotus_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '冰霧水道的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '冰霧水道的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '冰霧水道殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_egg_mound: {
    id: 'serpent_delta_egg_mound',
    name: '蛇卵丘',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_egg_mound.png',
    imagePrompt: '蛇卵丘 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '蛇卵丘位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_serpent_shrine_steps', description: '蛇祠階在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_priest_mask_hut', description: '祭司面具屋在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_ice_mist_channel', description: '冰霧水道在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_moonlit_fishing_post', description: '月釣哨在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_egg_mound_broodmother', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'serpent_delta_shrine_mask_acolyte', maxCount: 2, respawnSeconds: 360 },
    ],
    mapSymbol: '[卵]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '蛇卵丘的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '蛇卵丘的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '蛇卵丘殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_moonlit_fishing_post: {
    id: 'serpent_delta_moonlit_fishing_post',
    name: '月釣哨',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_moonlit_fishing_post.png',
    imagePrompt: '月釣哨 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '月釣哨位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_flooded_granary', description: '淹穀倉在北側' },
      { direction: 'south', targetRoomId: 'serpent_delta_blue_lotus_marsh', description: '藍蓮沼在南側' },
      { direction: 'west', targetRoomId: 'serpent_delta_egg_mound', description: '蛇卵丘在西側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_moon_net_slinger', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_coldmist_eel', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[釣]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '月釣哨的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '月釣哨的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '月釣哨殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_old_levy_causeway: {
    id: 'serpent_delta_old_levy_causeway',
    name: '舊堤道',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_old_levy_causeway.png',
    imagePrompt: '舊堤道 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '舊堤道位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_ice_mist_channel', description: '冰霧水道在北側' },
      { direction: 'east', targetRoomId: 'serpent_delta_priest_mask_hut', description: '祭司面具屋在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_stilt_scaleguard', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'serpent_delta_egg_mound_broodmother', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[堤]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '舊堤道的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '舊堤道的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '舊堤道殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_priest_mask_hut: {
    id: 'serpent_delta_priest_mask_hut',
    name: '祭司面具屋',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_priest_mask_hut.png',
    imagePrompt: '祭司面具屋 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '祭司面具屋位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_egg_mound', description: '蛇卵丘在北側' },
      { direction: 'west', targetRoomId: 'serpent_delta_old_levy_causeway', description: '舊堤道在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_blue_lotus_marsh', description: '藍蓮沼在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_shrine_mask_acolyte', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'serpent_delta_blue_lotus_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[面]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '祭司面具屋的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '祭司面具屋的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '祭司面具屋殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_blue_lotus_marsh: {
    id: 'serpent_delta_blue_lotus_marsh',
    name: '藍蓮沼',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_blue_lotus_marsh.png',
    imagePrompt: '藍蓮沼 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '藍蓮沼位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
    exits: [
      { direction: 'north', targetRoomId: 'serpent_delta_moonlit_fishing_post', description: '月釣哨在北側' },
      { direction: 'west', targetRoomId: 'serpent_delta_priest_mask_hut', description: '祭司面具屋在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_manymouth_confluence', description: '百口合流在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_blue_lotus_oracle', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'serpent_delta_coldmist_eel', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[蓮]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '藍蓮沼的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '藍蓮沼的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '藍蓮沼殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },
};
