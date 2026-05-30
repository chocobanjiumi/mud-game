import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_025: Record<string, RoomDef> = {
emerald_canopy_lightning_bark_shrine: {
    id: 'emerald_canopy_lightning_bark_shrine',
    name: '雷皮小祠',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_lightning_bark_shrine.png',
    imagePrompt: '雷皮小祠 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '雷皮小祠靠在一塊被雷劈開的樹皮前，焦黑皮層呈現自然裂紋，裂縫中滲出藍白微光。北面綠心跨枝連著主幹脈光，南側雲根橋浮在薄霧上，西方精英巡梢棲木的羽標可見。小祠以濕木、石片和雷擊後的白灰堆成，周圍掛著空果殼與焦葉串；每滴雨落到裂皮上都會濺出細小火花，空氣充滿潮濕樹香與雷味。',
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
      '空樹市集藏在一段中空巨幹內，內壁被磨得光滑，天然樹洞分成多個小凹室，擺著藤籃、蜂蠟塊和乾葉束。北側日葉園灑下金光，東面古蜂巢傳來密集嗡鳴。樹洞頂部開著透光裂縫，細藤吊著木牌形葉片與果殼燈，地上有被搬運留下的木粉和樹脂腳印；市場雖安靜，仍保留著高空聚落曾經頻繁交換物資的痕跡。',
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
      '古蜂巢懸在粗枝與中空樹壁之間，層層蜂蠟板像古老鐘乳垂落，表面泛著琥珀色光。北側精英巡梢棲木的羽標在葉縫間晃動，西面空樹市集傳來乾葉和藤籃氣味，東方雲根橋伸入白霧。巢下滴著黏稠蜜痕，周圍散落花粉、破裂蜂房和被樹脂包住的小骨片；低沉嗡鳴從蜂巢深處傳出，讓整段枝幹都像在震動。',
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
      '雲根橋由數條白色氣根交織而成，橋身半懸在雲霧裡，根皮吸滿水氣後泛出淡淡銀光。北側雷皮小祠的藍白火花透過葉影閃動，西面古蜂巢傳來厚重嗡鳴，東方鹿冠空地露出開闊綠光。橋下霧層翻湧，氣根間掛著水珠、羽毛和細小藤花，踩磨處呈現深色弧線；整座橋像從雲中長出，柔軟卻牢牢牽住兩側高枝。',
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
      '鹿冠空地開在樹冠較平的一片枝臺上，彎曲枝條向外分叉，形狀像巨鹿的角冠托住陽光。西側雲根橋伸入霧中，東方高綠庭被更深的翠色包圍。空地中央長著玻璃般透明的幼葉與細白小花，地面有蹄印狀凹痕、落角碎片和被雨水洗亮的青苔；風穿過分叉枝條時聲音寬闊而清澈，使這裡像樹冠深處少數開放的明亮庭前。',
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
      '高綠庭位於翡翠樹冠最深處，數株古木的頂枝在此交疊成寬闊天然庭院，葉冠高到幾乎遮住天空。西側鹿冠空地仍能看見分叉枝影，其餘方向被厚葉、垂藤和深綠霧光包圍。庭中有巨大葉脈形成的圓紋、古老樹瘤和沉積多年的花粉層，偶爾有玻翼鹿影穿過遠處光斑；整片空間安靜、開闊，帶著樹冠核心才有的古老壓力。',
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
      '風門入口鑿在空心山外殼的裂縫裡，兩扇黑鐵風閘半開，穿山氣流從門縫灌入，捲起地上的礦粉與舊羽旗。東側螺旋礦坡的軌燈沿岩壁一圈圈升高，深處傳來礦車輪軸的空響。門柱上刻著早期礦城的風壓刻度，部分數字被霜白鹽痕蓋住。入口地面鋪著粗糙防滑石板，邊緣散落斷索、銅鈴與被風磨亮的路牌，讓整座山腹的巨大空洞在第一陣回聲裡顯出尺度。',
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
      '螺旋礦坡沿中空山壁盤旋上升，舊鐵軌與石階互相交錯，向西可回望風門入口的白色風線，向東則接入回音市集的燈火，南側霜脈壁透出冰藍光。坡外欄杆多處斷裂，欄外是看不見底的山腹穹井，偶爾有碎石落下很久才傳回聲音。岩壁上留著礦工鑿痕與風壓記號，軌枕間卡著雷礦碎屑，整條坡道像被採掘歲月磨成一圈沉默年輪。',
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
      '回音市集坐落在螺旋礦坡東側的一片外挑石臺上，破棚架、空攤位與吊燈沿岩壁排開，任何腳步聲都會在穹頂間折返成幾重低語。西面坡道帶來風門入口的冷風，南側雷礦橋閃著紫白脈光。攤臺上還壓著石秤、裂杯與礦票木牌，部分銅鈴被回聲震得微微晃動。市集深處的牆洞像許多黑口，會把遠處礦車聲、鐘聲與風管呼嘯混在一起，留下舊礦城仍未散去的繁忙幻覺。',
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
      '霜脈壁是一整面被冰藍礦線貫穿的山腹岩層，北側螺旋礦坡的軌影在霜光裡變得彎曲，南面黑花崗切場傳來沉重切石聲，東側雷礦橋則以紫光回應。岩壁表面結著薄霜，霜下可見銀白脈絡像樹根般伸展。幾支舊鑿頭凍在裂縫裡，旁邊的皮手套已硬成石片。冷氣沿地面流動，使礦粉凝成細粒，只有被頻繁踩過的暗色石帶仍保持乾燥。',
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
      '雷礦橋橫跨一條黑暗垂井，橋身由花崗石梁與雷礦脈共同支撐，紫白電光沿橋底斷續游走。北端回音市集的吊燈在震動中搖晃，南側風管隧道噴出低沉氣流，西面霜脈壁泛著冰光，東端空鐘室則吞下所有雷聲。橋面刻著避雷槽與礦車舊軌，幾處金屬釘已被脈衝熔出圓痕。當山腹深處傳來轟鳴，橋下黑井會短暫照亮，露出更低層的廢棧道與斷裂升降鏈。',
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
      '空鐘室吊著一口沒有鐘舌的巨鐘，鐘身嵌入山腹穹頂的石肋間，表面滿是礦工誓文與雷擊裂痕。西側雷礦橋的紫光照到鐘腹便被吞暗，南面晶石碎坡散出細碎反光。室內沒有真正的鐘聲，只有風穿過鐘口時形成的深長回鳴，像整座空心山在呼吸。地面排列著半圓形聽音石座，座縫裡積滿銀灰礦粉，偶爾會隨遠處礦車震動顫出細小波紋。',
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
      '採石升降臺懸在黑花崗切場西側的直井旁，粗鏈從上方黑暗垂下，穿過木臺與鐵輪，末端消失在更低的採石層。東面切場的黑石牆被鋸痕分成整齊方塊，升降臺邊緣堆著斷裂滑輪、油燈與壓扁的礦籃。風從井底升起時帶著潮冷石粉味，讓鏈節彼此碰撞出沉悶節拍。木臺中央有被重物磨出的圓形凹痕，旁邊刻著深淺不一的載重符號，仍可看出昔日礦城運石的規模。',
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
      '黑花崗切場是一座巨大的地下採石面，黑色岩牆被切成階梯狀，截面光滑得能映出冷藍霜光。北側霜脈壁的寒氣沿地面滲來，南面深菇棚散出潮濕菌香，西側採石升降臺垂著重鏈，東面風管隧道傳來管壁呼嘯。地上鋪滿石粉與破楔，幾條老軌穿過切槽後突然中斷。岩牆深處有銀色細線，像礦脈被黑石鎖住，切痕越新之處回聲越短，顯示山體仍在緩慢受壓。',
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
      '風管隧道像一條被鑿穿的巨型骨管，圓拱石壁上嵌著銅箍與導風槽，氣流從北側雷礦橋方向灌入，又沿南面冰鏈廊吹出冰冷尾音。西側黑花崗切場的石粉被吸進管口，東面晶石碎坡則被風吹得晶屑沙沙作響。管壁有許多細孔，會把腳步聲拆成錯亂回音。幾段舊風門卡在槽內，齒輪已被礦鹽咬死，但風壓仍足以讓垂掛的警鈴間歇顫動。',
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
      '晶石碎坡由崩落晶簇與碎礦堆成，斜坡上滿是透明尖角，光線一落便散成細碎星點。北方空鐘室的低鳴沿坡面滾下，南側礦誓柱露出黯淡石影，西面風管隧道送來急風，東側洞城樞紐的遠燈被晶面切成多重影子。碎坡下方埋著老軌與破籃，某些晶片內含雷礦紫紋。只要山腹稍微震動，坡面便會滑落一層清脆碎響，露出更深的灰色礦骨。',
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
      '洞城樞紐是一座被多條礦道鑿穿的寬大洞廳，牆面排列廢棄門洞、吊橋基座與褪色路牌，像地下城的舊脊椎。南側風暴蓄能室的氣壓使燈火忽明忽暗，西面晶石碎坡不斷送來細碎滑音。洞廳中央有圓形轉轍臺，鐵軌朝不同黑洞延伸，部分已被落石截斷。頂部垂著長長鐘乳與鏽鏈，回聲在此聚合後又被分散，讓每個入口都像通往更深一層山腹。',
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
      '深菇棚生在黑花崗切場南側的潮濕岩棚上，厚大的灰紫菌蓋沿石壁層層伸出，菌光映亮水珠與腐朽木架。北面切場的石粉落到棚邊便被濕氣壓住，東側冰鏈廊送來寒霧，使部分菇傘結出白霜。棚下可見舊陶盆、斷柄小刀與被菌絲纏住的礦籃。水滴從高處落下，敲在空心菌蓋上發出悶響，聲音在山腹裡像遠方鼓點，也遮住更深處的細小爬動聲。',
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
      '冰鏈廊是一條被粗大寒鐵鏈貫穿的長廊，鏈條從頂壁垂下又埋入地面霜槽，表面結著藍白冰花。北側風管隧道吹來尖銳冷風，南端舊鑽巢傳出金屬磨擦，西面深菇棚的潮氣在此凝成薄霧，東側礦誓柱的石影被鏈節切碎。廊壁刻有吊運符號，幾處滑輪仍封在冰裡。地面覆著透明霜層，霜下能看見被拖曳過的重物痕跡，像整座山曾靠這些鏈條牽引深處機械。',
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
      '礦誓柱立在多條礦路交會的小廣場中央，黑石柱身刻滿姓名、工號與短句誓文，字縫裡積著銀灰礦粉。北面晶石碎坡散落亮片，南側銀息井吐出冷霧，西面冰鏈廊傳來鏈條輕響，東側風暴蓄能室壓著悶雷。柱底圍著斷燈、磨平的安全牌與一圈被靴底踩亮的石環。某些刻名被後來的裂縫截斷，仍能看見礦工把撤離路線、風壓日與失蹤同伴都刻進同一根石柱。',
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
      '風暴蓄能室被厚重銅環與導雷石柱圍成圓形，空氣裡充滿乾燥金屬味，細小火花沿地面槽線游走。北面洞城樞紐的門洞被氣壓吹出低鳴，南側古礦車迷宮傳來輪軸回聲，西面礦誓柱的刻字在閃光裡忽明忽暗。室頂懸著多枚裂開的蓄能球，球內風雲狀光影仍在緩慢旋轉。牆邊散落焦黑手套與斷測針，顯示這裡曾用來收束穿山風暴，也可能隨時把積蓄的雷壓釋回礦道。',
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
      '舊鑽巢堆滿退役鑽機與巨大齒輪，金屬殼體像昆蟲空殼般伏在岩穴裡，齒尖仍嵌著黑石與霜脈碎片。北側冰鏈廊的寒氣沿地面爬入，東面銀息井的冷霧讓鐵鏽帶出銀白斑痕。巢穴中央有一座半拆的主鑽頭，周圍散著油罐、斷皮帶與被壓扁的礦車板。偶爾有鬆脫彈簧自行回彈，敲出短促金屬聲，像這批機械仍在等待某個早已消失的開工鐘。',
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
      '銀息井開在山腹較低處，井口由銀灰礦石砌成，冷白霧氣從深井裡一陣陣吐出，貼著地面流向礦誓柱與古礦車迷宮。北面誓柱的刻文被霧氣潤濕，西側舊鑽巢傳來金屬冷縮聲，東側軌道則沒入礦車迷宮的暗影。井壁刻著通風符與水位痕，繩槽被長年磨成光滑弧面。霧中帶有淡淡金屬甜味，偶爾捲出碎紙、銀砂與細小冰晶，透露井下還連著山心更深的氣道。',
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
      '古礦車迷宮由多層交錯軌道、轉轍盤與翻倒礦車組成，鐵軌在昏黃燈下反覆分岔，又在石壁陰影裡重新匯合。北側風暴蓄能室的雷壓使軌釘微微發亮，西面銀息井的冷霧貼著輪痕流動，東側高穹階露出向上的石階光線。牆上掛著殘破路牌與舊班次牌，許多箭頭被煤煙燻黑。每當遠處礦車空響傳來，轉轍盤會輕輕震動，讓迷宮像仍記得昔日運礦路線。',
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
      '高穹階從古礦車迷宮東側拔起，寬闊石階沿著中空山壁上升，拱頂高得吞沒燈光，只留下層層支柱與吊橋殘影。西側迷宮的軌道回聲在階底盤旋，東端山心核心透出深沉紅光。階面鑲著防滑銅條與磨平的礦印，欄杆上掛滿斷裂風鈴，會隨上方氣流發出清冷聲響。越往高處，岩壁越能看見古礦城的雕飾與裂縫，像整座山曾被鑿成一座向心收束的地下殿堂。',
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
      '山心核心位於高穹階盡頭的巨大圓室，中央岩核裸露出深紅脈動，外圈套著破裂銅環、雷礦導線與霜脈冷卻槽。西側高穹階的石柱在紅光中投下長影，室頂則開向看不見頂的黑暗穹井。岩核每一次震動都會讓地面符槽閃亮，隨後傳出像山體心跳的低鳴。周圍散落斷裂儀表、燒黑鎖鏈與被壓扁的礦車輪，顯示礦城最深處曾試圖馴服整座山的風、霜與雷。',
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
