import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_022: Record<string, RoomDef> = {
frostbite_pass_caravan_marker: {
    id: 'frostbite_pass_caravan_marker',
    name: '商隊路標',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_caravan_marker.png',
    imagePrompt: '商隊路標 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '商隊路標斜插在雪門東側的硬雪坡上，木牌被冰殼包住，只剩繩結與刻槽顯出方向。西面雪門在風裡忽隱忽現，東側冰風切道被橫向雪流刮白，北面埋雪貨車露出半截車輪。路標周圍堆著貨箱碎片、冷硬馬蹄印和凍住的布條，雪面上許多腳印在此交疊又被吹斷，像商隊曾在風暴中反覆確認方向。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_snow_gate', description: '回到雪門' },
      { direction: 'east', targetRoomId: 'frostbite_pass_icewind_cut', description: '冰風切道在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_buried_wagon', description: '埋雪貨車在北側' },
    ],
    monsters: [
      { monsterId: 'frostbite_buried_caravan_wight', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[標]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '商隊路標的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '商隊路標的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '商隊路標殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_icewind_cut: {
    id: 'frostbite_pass_icewind_cut',
    name: '冰風切道',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_icewind_cut.png',
    imagePrompt: '冰風切道 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '冰風切道是一段被側風削開的窄路，岩壁和雪坡之間只剩一條發亮冰線。西側商隊路標的繩結在風中顫動，東方藍冰橋透出深藍裂光。路面布滿細碎冰砂、斷裂繩標和被風磨圓的石角，雪粒貼著地面疾走，打在靴面般發出沙沙聲；兩側冰壁留下平行刮痕，顯出常年暴風把道路切薄的力道。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_caravan_marker', description: '回到商隊路標' },
      { direction: 'east', targetRoomId: 'frostbite_pass_blue_ice_bridge', description: '藍冰橋在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_sleet_harrier', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[風]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '冰風切道的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '冰風切道的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '冰風切道殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_frozen_switchback: {
    id: 'frostbite_pass_frozen_switchback',
    name: '凍結折路',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_frozen_switchback.png',
    imagePrompt: '凍結折路 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '凍結折路沿山壁急轉數次，石階全被透明冰殼封住，只能從冰下辨出舊路邊線。南側雪門沉在低處風雪裡，東面埋雪貨車卡在轉角外，北面冷火營有微弱藍焰映過雪幕。折路護欄多處斷裂，冰面夾著鐵釘、凍草和商隊行囊扣，風從每個轉角反彈回來，讓這段路像一條被冰固定住的蛇形傷口。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'south', targetRoomId: 'frostbite_pass_snow_gate', description: '回到雪門' },
      { direction: 'east', targetRoomId: 'frostbite_pass_buried_wagon', description: '埋雪貨車在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_coldfire_camp', description: '冷火營在北側' },
    ],
    monsters: [
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'frostbite_buried_caravan_wight', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[折]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '凍結折路的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '凍結折路的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '凍結折路殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_buried_wagon: {
    id: 'frostbite_pass_buried_wagon',
    name: '埋雪貨車',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_buried_wagon.png',
    imagePrompt: '埋雪貨車 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '埋雪貨車側翻在凍結折路與雪怪抓痕之間，車篷被積雪壓塌，只露出一圈冰硬輪輻。西側折路貼著山壁回轉，南面商隊路標在雪坡下方，東方爪痕地帶的雪牆被撕出深槽。車廂內有凍裂木箱、硬成板狀的毛毯和被冰封住的銅鈴，貨物散在雪下形成不自然隆起；整輛車像暴風雪忽然合上的陷阱。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_frozen_switchback', description: '回到凍結折路' },
      { direction: 'south', targetRoomId: 'frostbite_pass_caravan_marker', description: '回到商隊路標' },
      { direction: 'east', targetRoomId: 'frostbite_pass_yeti_scrape', description: '雪怪抓痕在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_buried_caravan_wight', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'frostbite_scarred_yeti', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[車]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '埋雪貨車的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '埋雪貨車的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '埋雪貨車殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_blue_ice_bridge: {
    id: 'frostbite_pass_blue_ice_bridge',
    name: '藍冰橋',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_blue_ice_bridge.png',
    imagePrompt: '藍冰橋 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '藍冰橋橫跨深裂谷，橋身厚而透明，內部凍著氣泡和古老雪層，裂紋在腳下呈深藍色發亮。西側冰風切道收束成窄口，東面冰河口張開白色冰壁，北側雪怪抓痕沿裂紋冰脊上行。橋邊斷繩和結冰防風石堆半埋在霜粉裡，谷底只有冷藍反光；每陣風都讓橋下霧氣翻起，像冰層正在輕微呼吸。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_icewind_cut', description: '回到冰風切道' },
      { direction: 'east', targetRoomId: 'frostbite_pass_glacier_mouth', description: '冰河口在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_yeti_scrape', description: '北側藍冰橋沿裂紋冰脊上行，繞過斷裂繩標與雪怪爪溝抵達抓痕地帶' },
    ],
    monsters: [
      { monsterId: 'frostbite_blue_ice_lizard', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'frostbite_sleet_harrier', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[橋]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '藍冰橋的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '藍冰橋的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '藍冰橋殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_yeti_scrape: {
    id: 'frostbite_pass_yeti_scrape',
    name: '雪怪抓痕',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_yeti_scrape.png',
    imagePrompt: '雪怪抓痕 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '雪怪抓痕刻在冰壁與雪坡交界處，三道深槽從高處斜落，槽底露出被爪尖磨亮的藍冰。西面埋雪貨車的破輪仍在雪中，南側裂紋冰脊下接藍冰橋，北方白霧盆地的霧牆緩慢回流。抓痕旁散著白毛、凍血和被折斷的木槍，雪面被巨大足跡壓出深坑；風穿過爪槽時帶出低沉嘯聲，使這裡像某種巨獸留下的警告。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_buried_wagon', description: '回到埋雪貨車' },
      { direction: 'south', targetRoomId: 'frostbite_pass_blue_ice_bridge', description: '南側雪怪爪溝沿斷裂繩標折降，穿過裂紋冰脊與結冰防風石堆回到藍冰橋中央' },
      { direction: 'north', targetRoomId: 'frostbite_pass_whiteout_basin', description: '北側雪怪足跡穿過白霧回流與埋雪路標，繞過冰旗殘桿進入白霧盆地外圈' },
    ],
    monsters: [
      { monsterId: 'frostbite_scarred_yeti', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[爪]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '雪怪抓痕的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '雪怪抓痕的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '雪怪抓痕殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_whiteout_basin: {
    id: 'frostbite_pass_whiteout_basin',
    name: '白霧盆地',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_whiteout_basin.png',
    imagePrompt: '白霧盆地 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '白霧盆地陷在三面雪坡之間，霧氣像白水般在盆底翻滾，所有遠景都被吞成模糊輪廓。南側雪怪足跡從霧牆外延入，西面冷火營透出藍色火點，東方雨雪哨的號旗桿在斜風裡時隱時現。盆地裡有埋雪路標、冰旗殘桿和被霧霜包住的狼骨，雪面忽高忽低，聲音進入霧中便變得遲鈍。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'south', targetRoomId: 'frostbite_pass_yeti_scrape', description: '南側白霧盆地沿埋雪路標折返，穿過回流霧牆與冰旗殘桿回到雪怪抓痕' },
      { direction: 'west', targetRoomId: 'frostbite_pass_coldfire_camp', description: '冷火營在西側' },
      { direction: 'east', targetRoomId: 'frostbite_pass_sleet_watch', description: '東側冰河口沿冰壁窄棚橫移，穿過雨雪斜風、號旗桿與冰裂警戒線抵達雨雪哨' },
    ],
    monsters: [
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'frostbite_sleet_harrier', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '白霧盆地的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '白霧盆地的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '白霧盆地殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_coldfire_camp: {
    id: 'frostbite_pass_coldfire_camp',
    name: '冷火營',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_coldfire_camp.png',
    imagePrompt: '冷火營 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '冷火營靠在背風雪壁下，幾座塌帳圍著藍白色冷火，火焰不吐熱氣，反而在周圍結出細霜。南側凍結折路落回低處，東面白霧盆地被霧浪蓋住，北方晶松林透著冰晶反光。營地裡散著鐵鍋、凍肉、破皮囊和被冰封的火石，帳繩硬得像鐵線；冷火照亮的每個物件都像商隊離開前一刻被凍住。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'south', targetRoomId: 'frostbite_pass_frozen_switchback', description: '回到凍結折路' },
      { direction: 'east', targetRoomId: 'frostbite_pass_whiteout_basin', description: '白霧盆地在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_crystal_fir_grove', description: '晶松林在北側' },
    ],
    monsters: [
      { monsterId: 'frostbite_buried_caravan_wight', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'frostbite_crystal_fir_lurker', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[營]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '冷火營的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '冷火營的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '冷火營殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_glacier_mouth: {
    id: 'frostbite_pass_glacier_mouth',
    name: '冰河口',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_glacier_mouth.png',
    imagePrompt: '冰河口 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '冰河口是一面高聳冰壁裂出的拱形缺口，裂口內有緩慢推移的藍白冰舌。西側藍冰橋接到裂谷邊，東面雨雪哨要沿冰壁窄棚與號旗桿橫移。冰壁表面有層層壓縮雪紋、凍住氣泡和深色岩屑，缺口下散著冰塊與舊繩樁；冰河內部偶爾傳來沉悶擠壓聲，像山體仍在慢慢推動整條隘口。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_blue_ice_bridge', description: '回到藍冰橋' },
      { direction: 'east', targetRoomId: 'frostbite_pass_sleet_watch', description: '雨雪哨在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_glacier_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'frostbite_blue_ice_lizard', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[河]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '冰河口的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '冰河口的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '冰河口殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_sleet_watch: {
    id: 'frostbite_pass_sleet_watch',
    name: '雨雪哨',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_sleet_watch.png',
    imagePrompt: '雨雪哨 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '雨雪哨架在冰壁外側的狹窄棚臺上，號旗桿被凍雨拉得筆直，旗布只剩冰硬碎片。西側冰河口隱在藍白裂壁後，北面霜巨人足跡沿斜坡抬升，南側白霧盆地被暴風雪回流切開。棚臺上有風向骨牌、碎鈴和結冰哨杯，欄杆外便是斜落雪幕；冷雨打在石面上形成細亮線，使整座哨臺像被釘在風口。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_glacier_mouth', description: '西側雨雪哨沿號旗桿與冰壁窄棚回穿，避開斜風與冰裂警戒線後抵達冰河口' },
      { direction: 'north', targetRoomId: 'frostbite_pass_frost_giant_steps', description: '霜巨人足跡在北側' },
    ],
    monsters: [
      { monsterId: 'frostbite_sleet_harrier', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'frostbite_glacier_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[哨]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '雨雪哨的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '雨雪哨的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '雨雪哨殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_bone_sled_path: {
    id: 'frostbite_pass_bone_sled_path',
    name: '骨橇路',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_bone_sled_path.png',
    imagePrompt: '骨橇路 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '骨橇路由巨大肋骨和滑木殘件排成，路面被長年拖行磨出兩條凍亮槽線。東側晶松林反射淡藍光，北面失商藏點被半埋貨旗指向，周圍雪坡留著舊橇繩的黑色磨痕。路邊散著骨鉤、破革帶和凍住的狼牙，雪下偶爾露出被冰封的貨物角；整段路帶著商隊最後一次拖運補給的沉重痕跡。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'east', targetRoomId: 'frostbite_pass_crystal_fir_grove', description: '晶松林在東側' },
      { direction: 'north', targetRoomId: 'frostbite_pass_lost_merchant_cache', description: '失商藏點在北側' },
    ],
    monsters: [
      { monsterId: 'frostbite_scarred_yeti', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'frostbite_whiteout_wolf_pack', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[橇]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '骨橇路的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '骨橇路的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '骨橇路殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_crystal_fir_grove: {
    id: 'frostbite_pass_crystal_fir_grove',
    name: '晶松林',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_crystal_fir_grove.png',
    imagePrompt: '晶松林 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '晶松林生在高寒雪坡上，松枝被透明冰晶包成銳利輪廓，陽光穿過時散出冷藍碎光。西側骨橇路的槽痕被雪半掩，南面冷火營有幽藍火點，東方風嚎拱在樹影後露出拱形岩口。林地裡積著霜草、松針冰簇和被凍住的小獸足印，樹幹敲起來像玻璃；每陣風都讓冰枝互相撞響。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_bone_sled_path', description: '骨橇路在西側' },
      { direction: 'south', targetRoomId: 'frostbite_pass_coldfire_camp', description: '回到冷火營' },
      { direction: 'east', targetRoomId: 'frostbite_pass_wind_howl_arch', description: '風嚎拱在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_crystal_fir_lurker', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'frostbite_blue_ice_lizard', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[松]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '晶松林的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '晶松林的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '晶松林殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_wind_howl_arch: {
    id: 'frostbite_pass_wind_howl_arch',
    name: '風嚎拱',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_wind_howl_arch.png',
    imagePrompt: '風嚎拱 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '風嚎拱是兩塊被冰風穿孔的岩壁，拱洞內持續吹出尖銳長音，雪粉被拉成白色細線。西側晶松林的冰枝在聲浪中顫動，東面雪盲路標引向失商藏點。拱下堆著被風削尖的石片、斷裂雪杖和凍硬布包，地面沒有厚雪，只剩被風磨亮的冰皮；聲音在洞中反覆回撞，像整座山脊都在呼吸。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_crystal_fir_grove', description: '回到晶松林' },
      { direction: 'east', targetRoomId: 'frostbite_pass_lost_merchant_cache', description: '東側雪盲路標通往失商藏點' },
    ],
    monsters: [
      { monsterId: 'frostbite_sleet_harrier', maxCount: 1, respawnSeconds: 190 },
      { monsterId: 'frostbite_giant_pathbreaker', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[拱]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '風嚎拱的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '風嚎拱的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '風嚎拱殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_lost_merchant_cache: {
    id: 'frostbite_pass_lost_merchant_cache',
    name: '失商藏點',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_lost_merchant_cache.png',
    imagePrompt: '失商藏點 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain mountain, clear lantern light',
    description:
      '失商藏點藏在風嚎拱東側的雪窩裡，半埋貨旗和翻倒木箱在白霧中露出暗色邊角。西側雪盲路標回到風嚎拱，南面骨橇路的槽線被雪切斷，東方冰石堆原排著低矮冰 cairn。藏點裡有凍硬藥包、碎銀扣、濕皮帳和被冰封的記帳板，貨物散得很有秩序，反而顯出主人離開時極其倉促。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_wind_howl_arch', description: '西側雪盲路標回到風嚎拱' },
      { direction: 'south', targetRoomId: 'frostbite_pass_bone_sled_path', description: '回到骨橇路' },
      { direction: 'east', targetRoomId: 'frostbite_pass_ice_cairn_field', description: '東側半埋貨旗接往冰石堆原' },
    ],
    monsters: [
      { monsterId: 'frostbite_buried_caravan_wight', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'frostbite_giant_pathbreaker', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[藏]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '失商藏點的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '失商藏點的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '失商藏點殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_frost_giant_steps: {
    id: 'frostbite_pass_frost_giant_steps',
    name: '霜巨人足跡',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_frost_giant_steps.png',
    imagePrompt: '霜巨人足跡 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '霜巨人足跡是一串深陷雪坡的巨大腳印，每一個坑底都露出壓碎藍冰和岩屑。西側冰裂坡折回失商藏點，南面雨雪哨的號旗在斜風中搖晃，北方風切稜線爬向北行山脊。足跡邊緣有斷樹般的冰柱、白毛和被踩扁的貨箱板，坑中積著暗色雪水；這些痕跡讓整條山路顯得突然變小。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_lost_merchant_cache', description: '西側霜巨人足跡沿冰裂坡折返，穿過巨大腳印溝與翻倒貨箱回到失商藏點' },
      { direction: 'south', targetRoomId: 'frostbite_pass_sleet_watch', description: '回到雨雪哨' },
      { direction: 'north', targetRoomId: 'frostbite_pass_northbound_ridge', description: '北側霜巨人足跡沿巨大腳印溝爬升，穿過冰裂坡與風切稜線抵達北行山脊' },
    ],
    monsters: [
      { monsterId: 'frostbite_giant_pathbreaker', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'frostbite_scarred_yeti', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[足]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '霜巨人足跡的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '霜巨人足跡的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '霜巨人足跡殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_ice_cairn_field: {
    id: 'frostbite_pass_ice_cairn_field',
    name: '冰石堆原',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_ice_cairn_field.png',
    imagePrompt: '冰石堆原 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '冰石堆原鋪滿低矮石堆與冰塊，每座石堆都被雪霜黏成半透明小塔，像迷失者留下的沉默標記。西側半埋貨旗指回失商藏點，東方北行山脊在風削雪坡上抬起。石堆間散著裂開羅盤、凍硬皮繩和被霜包住的骨片，風一吹便有細雪在塔縫裡旋轉；這片原地沒有樹影，只剩冰石指向更北的高處。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_lost_merchant_cache', description: '西側半埋貨旗回到失商藏點' },
      { direction: 'east', targetRoomId: 'frostbite_pass_northbound_ridge', description: '北行山脊在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_glacier_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'frostbite_crystal_fir_lurker', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[石]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '冰石堆原的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '冰石堆原的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '冰石堆原殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_northbound_ridge: {
    id: 'frostbite_pass_northbound_ridge',
    name: '北行山脊',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_northbound_ridge.png',
    imagePrompt: '北行山脊 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '北行山脊是一條被風切成刀背的雪脊，兩側落差被白霧遮住，只剩中央硬雪線可辨。西側冰石堆原低伏在後方，南面腳印溝折回霜巨人足跡，東方龍息冰棚隔著長段風切稜線泛出焦黑霜痕。山脊上有破冰爪印、斷旗短桿和被風吹平的血色雪斑，行進方向被冷光拉得筆直。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_ice_cairn_field', description: '回到冰石堆原' },
      { direction: 'south', targetRoomId: 'frostbite_pass_frost_giant_steps', description: '南側北行山脊沿風切稜線折降，穿過冰裂坡與巨大腳印溝回到霜巨人足跡' },
      { direction: 'east', targetRoomId: 'frostbite_pass_dragon_breath_shelf', description: '龍息冰棚在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_giant_pathbreaker', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'frostbite_dragonbreath_whelp', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[脊]',
    mapX: 5,
    mapY: 3,
    guardianHints: {
      creature: '北行山脊的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '北行山脊的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '北行山脊殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_dragon_breath_shelf: {
    id: 'frostbite_pass_dragon_breath_shelf',
    name: '龍息冰棚',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_dragon_breath_shelf.png',
    imagePrompt: '龍息冰棚 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '龍息冰棚伸出北行山脊東側，冰面被灼熱吐息燒出焦黑霜痕，黑痕周圍又迅速結成玻璃般薄冰。西側北行山脊在風雪中收窄，東面極北封門的藍霜門柱顯出輪廓。冰棚邊緣散著燒裂鱗片、融凍石粉和被熱風拋開的雪浪，冷熱痕跡彼此交疊，像龍息剛剛掃過仍未消散。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_northbound_ridge', description: '回到北行山脊' },
      { direction: 'east', targetRoomId: 'frostbite_pass_polar_seal_gate', description: '極北封門在東側' },
    ],
    monsters: [
      { monsterId: 'frostbite_dragonbreath_whelp', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'frostbite_glacier_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[龍]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '龍息冰棚的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '龍息冰棚的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '龍息冰棚殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

frostbite_pass_polar_seal_gate: {
    id: 'frostbite_pass_polar_seal_gate',
    name: '極北封門',
    zone: 'frostbite_pass' as RoomDef['zone'],
    image: 'frostbite_pass_polar_seal_gate.png',
    imagePrompt: '極北封門 in frostbite_pass, frozen mountain pass with blizzard, blue ice bridge, buried caravan wagons, snow gate, glacier cliffs and polar wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain mountain, clear lantern light',
    description:
      '極北封門由兩根巨大冰霜門柱夾住窄路，柱身覆滿藍霜與古老刻槽，門後只有更深的白光。西側龍息冰棚的焦黑霜痕延到門前，門下雪地被壓成光滑硬殼。周圍立著倒冰柱、冷石碎片和被霜封住的骨牌，空氣安靜得能聽見冰晶收縮聲；這座門不像建築，更像極北寒意本身凝出的封印。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。',
    exits: [
      { direction: 'west', targetRoomId: 'frostbite_pass_dragon_breath_shelf', description: '回到龍息冰棚' },
    ],
    monsters: [
      { monsterId: 'frostbite_polar_gate_colossus', maxCount: 1, respawnSeconds: 1000 },
      { monsterId: 'frostbite_dragonbreath_whelp', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'frostbite_giant_pathbreaker', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[門]',
    mapX: 6,
    mapY: 2,
    guardianHints: {
      creature: '極北封門的雪面若被新痕切開，附近雪怪、霜巨人或冰元素可能正在靠近。',
      treasure: '極北封門的斷繩、貨箱或冰縫旁可能藏著霜咬隘口商隊線索。',
      spirit: '極北封門殘留商隊迷失、暴風雪封路與北境守望者留下的記憶。',
    },
  },

// ─── 死都外門擴充 (Lv 40-52) ───────────────────────────

  necropolis_gate_black_approach: {
    id: 'necropolis_gate_black_approach',
    name: '黑門引道',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_black_approach.png',
    imagePrompt: '黑門引道 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '黑門引道位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'east', targetRoomId: 'necropolis_gate_half_open_gate', description: '半開黑門在東側' },
      { direction: 'north', targetRoomId: 'necropolis_gate_mourner_steps', description: '哀悼階在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_black_gate_wight', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'necropolis_bone_causeway_lancer', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '黑門引道的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '黑門引道的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '黑門引道殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_half_open_gate: {
    id: 'necropolis_gate_half_open_gate',
    name: '半開黑門',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_half_open_gate.png',
    imagePrompt: '半開黑門 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '半開黑門位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_black_approach', description: '回到黑門引道' },
      { direction: 'east', targetRoomId: 'necropolis_gate_bone_causeway', description: '白骨堤道在東側' },
      { direction: 'north', targetRoomId: 'necropolis_gate_silent_muster', description: '靜默列陣在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_black_gate_wight', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[門]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '半開黑門的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '半開黑門的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '半開黑門殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_bone_causeway: {
    id: 'necropolis_gate_bone_causeway',
    name: '白骨堤道',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_bone_causeway.png',
    imagePrompt: '白骨堤道 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '白骨堤道位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_half_open_gate', description: '回到半開黑門' },
      { direction: 'east', targetRoomId: 'necropolis_gate_iron_ossuary', description: '鐵骨藏室在東側' },
      { direction: 'north', targetRoomId: 'necropolis_gate_grave_banner_line', description: '墓旗線在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_bone_causeway_lancer', maxCount: 3, respawnSeconds: 320 },
    ],
    mapSymbol: '[堤]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '白骨堤道的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '白骨堤道的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '白骨堤道殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_silent_muster: {
    id: 'necropolis_gate_silent_muster',
    name: '靜默列陣',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_silent_muster.png',
    imagePrompt: '靜默列陣 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '靜默列陣位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'south', targetRoomId: 'necropolis_gate_half_open_gate', description: '回到半開黑門' },
      { direction: 'east', targetRoomId: 'necropolis_gate_grave_banner_line', description: '墓旗線在東側' },
      { direction: 'north', targetRoomId: 'necropolis_gate_watchless_tower', description: '無守望塔在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'necropolis_black_gate_wight', maxCount: 2, respawnSeconds: 300 },
    ],
    mapSymbol: '[陣]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '靜默列陣的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '靜默列陣的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '靜默列陣殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_grave_banner_line: {
    id: 'necropolis_gate_grave_banner_line',
    name: '墓旗線',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_grave_banner_line.png',
    imagePrompt: '墓旗線 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '墓旗線位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_silent_muster', description: '回到靜默列陣' },
      { direction: 'south', targetRoomId: 'necropolis_gate_bone_causeway', description: '回到白骨堤道' },
      { direction: 'east', targetRoomId: 'necropolis_gate_soul_well', description: '魂井在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'necropolis_bone_causeway_lancer', maxCount: 2, respawnSeconds: 320 },
    ],
    mapSymbol: '[旗]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '墓旗線的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '墓旗線的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '墓旗線殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_iron_ossuary: {
    id: 'necropolis_gate_iron_ossuary',
    name: '鐵骨藏室',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_iron_ossuary.png',
    imagePrompt: '鐵骨藏室 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain gate, clear lantern light',
    description:
      '鐵骨藏室位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_bone_causeway', description: '回到白骨堤道' },
      { direction: 'north', targetRoomId: 'necropolis_gate_soul_well', description: '魂井在北側' },
      { direction: 'east', targetRoomId: 'necropolis_gate_charnel_bridge', description: '屍橋在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_ossuary_collector', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'necropolis_black_gate_wight', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[骨]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '鐵骨藏室的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '鐵骨藏室的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '鐵骨藏室殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_soul_well: {
    id: 'necropolis_gate_soul_well',
    name: '魂井',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_soul_well.png',
    imagePrompt: '魂井 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '魂井位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_grave_banner_line', description: '回到墓旗線' },
      { direction: 'south', targetRoomId: 'necropolis_gate_iron_ossuary', description: '回到鐵骨藏室' },
      { direction: 'north', targetRoomId: 'necropolis_gate_war_drum_yard', description: '戰鼓庭在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'necropolis_ossuary_collector', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '魂井的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '魂井的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '魂井殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_mourner_steps: {
    id: 'necropolis_gate_mourner_steps',
    name: '哀悼階',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_mourner_steps.png',
    imagePrompt: '哀悼階 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '哀悼階位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'south', targetRoomId: 'necropolis_gate_black_approach', description: '回到黑門引道' },
      { direction: 'north', targetRoomId: 'necropolis_gate_watchless_tower', description: '無守望塔在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_black_gate_wight', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '哀悼階的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '哀悼階的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '哀悼階殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_watchless_tower: {
    id: 'necropolis_gate_watchless_tower',
    name: '無守望塔',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_watchless_tower.png',
    imagePrompt: '無守望塔 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '無守望塔位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'south', targetRoomId: 'necropolis_gate_mourner_steps', description: '回到哀悼階' },
      { direction: 'east', targetRoomId: 'necropolis_gate_crypt_market', description: '墓市廊在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'necropolis_void_crack_revenant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[塔]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '無守望塔的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '無守望塔的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '無守望塔殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_crypt_market: {
    id: 'necropolis_gate_crypt_market',
    name: '墓市廊',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_crypt_market.png',
    imagePrompt: '墓市廊 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '墓市廊位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_watchless_tower', description: '回到無守望塔' },
      { direction: 'east', targetRoomId: 'necropolis_gate_war_drum_yard', description: '戰鼓庭在東側' },
      { direction: 'north', targetRoomId: 'necropolis_gate_death_roll_archive', description: '死亡名冊庫在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_crypt_market_broker', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'necropolis_black_gate_wight', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '墓市廊的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '墓市廊的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '墓市廊殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_war_drum_yard: {
    id: 'necropolis_gate_war_drum_yard',
    name: '戰鼓庭',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_war_drum_yard.png',
    imagePrompt: '戰鼓庭 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '戰鼓庭位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_crypt_market', description: '回到墓市廊' },
      { direction: 'south', targetRoomId: 'necropolis_gate_soul_well', description: '回到魂井' },
      { direction: 'east', targetRoomId: 'necropolis_gate_wight_barracks', description: '怨衛兵營在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'necropolis_bone_causeway_lancer', maxCount: 2, respawnSeconds: 320 },
    ],
    mapSymbol: '[鼓]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '戰鼓庭的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '戰鼓庭的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '戰鼓庭殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_charnel_bridge: {
    id: 'necropolis_gate_charnel_bridge',
    name: '屍橋',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_charnel_bridge.png',
    imagePrompt: '屍橋 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '屍橋位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_iron_ossuary', description: '回到鐵骨藏室' },
      { direction: 'east', targetRoomId: 'necropolis_gate_plague_censer', description: '疫香爐在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_plague_censer_bearer', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'necropolis_bone_causeway_lancer', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '屍橋的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '屍橋的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '屍橋殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_wight_barracks: {
    id: 'necropolis_gate_wight_barracks',
    name: '怨衛兵營',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_wight_barracks.png',
    imagePrompt: '怨衛兵營 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '怨衛兵營位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_war_drum_yard', description: '回到戰鼓庭' },
      { direction: 'east', targetRoomId: 'necropolis_gate_void_crack', description: '虛空裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_black_gate_wight', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'necropolis_crypt_market_broker', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '怨衛兵營的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '怨衛兵營的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '怨衛兵營殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_plague_censer: {
    id: 'necropolis_gate_plague_censer',
    name: '疫香爐',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_plague_censer.png',
    imagePrompt: '疫香爐 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '疫香爐位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_charnel_bridge', description: '回到屍橋' },
      { direction: 'north', targetRoomId: 'necropolis_gate_void_crack', description: '虛空裂縫在北側' },
    ],
    monsters: [
      { monsterId: 'necropolis_plague_censer_bearer', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[疫]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '疫香爐的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '疫香爐的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '疫香爐殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_eclipsed_statue: {
    id: 'necropolis_gate_eclipsed_statue',
    name: '蝕日雕像',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_eclipsed_statue.png',
    imagePrompt: '蝕日雕像 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '蝕日雕像位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'east', targetRoomId: 'necropolis_gate_death_roll_archive', description: '死亡名冊庫在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'necropolis_plague_censer_bearer', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[像]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '蝕日雕像的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '蝕日雕像的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '蝕日雕像殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_death_roll_archive: {
    id: 'necropolis_gate_death_roll_archive',
    name: '死亡名冊庫',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_death_roll_archive.png',
    imagePrompt: '死亡名冊庫 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '死亡名冊庫位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_eclipsed_statue', description: '回到蝕日雕像' },
      { direction: 'south', targetRoomId: 'necropolis_gate_crypt_market', description: '回到墓市廊' },
      { direction: 'east', targetRoomId: 'necropolis_gate_void_crack', description: '虛空裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'necropolis_crypt_market_broker', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[冊]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '死亡名冊庫的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '死亡名冊庫的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '死亡名冊庫殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_void_crack: {
    id: 'necropolis_gate_void_crack',
    name: '虛空裂縫',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_void_crack.png',
    imagePrompt: '虛空裂縫 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '虛空裂縫位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_death_roll_archive', description: '回到死亡名冊庫' },
      { direction: 'south', targetRoomId: 'necropolis_gate_plague_censer', description: '回到疫香爐' },
      { direction: 'east', targetRoomId: 'necropolis_gate_inner_portcullis', description: '內城閘在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_void_crack_revenant', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'necropolis_soul_well_oracle', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[裂]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '虛空裂縫的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '虛空裂縫的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '虛空裂縫殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_inner_portcullis: {
    id: 'necropolis_gate_inner_portcullis',
    name: '內城閘',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_inner_portcullis.png',
    imagePrompt: '內城閘 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '內城閘位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_void_crack', description: '回到虛空裂縫' },
      { direction: 'east', targetRoomId: 'necropolis_gate_bone_throne_antechamber', description: '骨王座前廳在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_inner_portcullis_marshal', maxCount: 1, respawnSeconds: 620 },
      { monsterId: 'necropolis_grave_banner_captain', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[閘]',
    mapX: 6,
    mapY: 2,
    guardianHints: {
      creature: '內城閘的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '內城閘的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '內城閘殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_bone_throne_antechamber: {
    id: 'necropolis_gate_bone_throne_antechamber',
    name: '骨王座前廳',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_bone_throne_antechamber.png',
    imagePrompt: '骨王座前廳 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '骨王座前廳位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_inner_portcullis', description: '回到內城閘' },
      { direction: 'east', targetRoomId: 'necropolis_gate_dead_city_threshold', description: '死都門檻在東側' },
    ],
    monsters: [
      { monsterId: 'necropolis_inner_portcullis_marshal', maxCount: 1, respawnSeconds: 620 },
      { monsterId: 'necropolis_ossuary_collector', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[座]',
    mapX: 7,
    mapY: 2,
    guardianHints: {
      creature: '骨王座前廳的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '骨王座前廳的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '骨王座前廳殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

necropolis_gate_dead_city_threshold: {
    id: 'necropolis_gate_dead_city_threshold',
    name: '死都門檻',
    zone: 'necropolis_gate' as RoomDef['zone'],
    image: 'necropolis_gate_dead_city_threshold.png',
    imagePrompt: '死都門檻 in necropolis_gate, necropolis gate endgame dark fortress with half open black gate, bone causeway, undead army formation, soul well, void crack, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '死都門檻位於通往死者之城的巨大黑門前，半開門縫、白骨堤道、墓旗線、魂井、屍橋與無人守望塔共同標出終局戰場的入口。這裡是陣營衝突、精英巡邏與世界王前哨區，旅人可以 觀察 軍靴刻痕、墓旗符號、魂井回聲和內城閘鎖來判斷亡軍動向，也能 搜索 鐵骨藏室、墓市廊、死亡名冊庫與骨王座前廳尋找死都線索。若隊伍忽略戰鼓節奏、虛空裂縫與怨衛列隊，巫妖、魔族將軍、虛空行者與深淵領主會封鎖撤退；若穩定沿黑門、屍橋與內城閘推進，則能抵達死都門檻並帶回亡軍集結記錄、黑門符印與陣營戰報與撤退暗號',
    exits: [
      { direction: 'west', targetRoomId: 'necropolis_gate_bone_throne_antechamber', description: '回到骨王座前廳' },
    ],
    monsters: [
      { monsterId: 'necropolis_dead_city_gatekeeper', maxCount: 1, respawnSeconds: 1400 },
      { monsterId: 'necropolis_inner_portcullis_marshal', maxCount: 1, respawnSeconds: 620 },
    ],
    mapSymbol: '[都]',
    mapX: 8,
    mapY: 2,
    guardianHints: {
      creature: '死都門檻的軍靴聲若突然整齊停下，附近亡軍或深淵巡邏可能正在換陣。',
      treasure: '死都門檻的墓旗、名冊或骨縫旁可能藏著死都外門線索。',
      spirit: '死都門檻殘留亡軍集結、黑門開啟與陣營戰火逼近的記憶。',
    },
  },

// ─── 日耀尖塔擴充 (Lv 45-58) ───────────────────────────

  sunspire_white_stone_gate: {
    id: 'sunspire_white_stone_gate',
    name: '白石塔門',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_white_stone_gate.png',
    imagePrompt: '白石塔門 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '白石塔門位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'east', targetRoomId: 'sunspire_sunlit_stair', description: '日光階在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'sunspire_flameglass_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '白石塔門的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '白石塔門的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '白石塔門殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_sunlit_stair: {
    id: 'sunspire_sunlit_stair',
    name: '日光階',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_sunlit_stair.png',
    imagePrompt: '日光階 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '日光階位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_white_stone_gate', description: '回到白石塔門' },
      { direction: 'east', targetRoomId: 'sunspire_mirror_plinth', description: '鏡石臺在東側' },
      { direction: 'north', targetRoomId: 'sunspire_flameglass_walk', description: '焰玻步道在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[階]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '日光階的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '日光階的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '日光階殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_mirror_plinth: {
    id: 'sunspire_mirror_plinth',
    name: '鏡石臺',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_mirror_plinth.png',
    imagePrompt: '鏡石臺 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '鏡石臺位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_sunlit_stair', description: '回到日光階' },
      { direction: 'east', targetRoomId: 'sunspire_solar_armory', description: '太陽武庫在東側' },
      { direction: 'north', targetRoomId: 'sunspire_radiant_lift', description: '日耀升降井在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '鏡石臺的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '鏡石臺的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '鏡石臺殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_flameglass_walk: {
    id: 'sunspire_flameglass_walk',
    name: '焰玻步道',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_flameglass_walk.png',
    imagePrompt: '焰玻步道 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '焰玻步道位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'south', targetRoomId: 'sunspire_sunlit_stair', description: '回到日光階' },
      { direction: 'east', targetRoomId: 'sunspire_radiant_lift', description: '日耀升降井在東側' },
      { direction: 'north', targetRoomId: 'sunspire_burning_archive', description: '燃書庫在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_flameglass_knight', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[焰]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '焰玻步道的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '焰玻步道的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '焰玻步道殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_radiant_lift: {
    id: 'sunspire_radiant_lift',
    name: '日耀升降井',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_radiant_lift.png',
    imagePrompt: '日耀升降井 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '日耀升降井位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_flameglass_walk', description: '回到焰玻步道' },
      { direction: 'south', targetRoomId: 'sunspire_mirror_plinth', description: '回到鏡石臺' },
      { direction: 'east', targetRoomId: 'sunspire_celestial_guard_hall', description: '天界守衛廳在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'sunspire_solar_armory_construct', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[井]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '日耀升降井的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '日耀升降井的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '日耀升降井殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_solar_armory: {
    id: 'sunspire_solar_armory',
    name: '太陽武庫',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_solar_armory.png',
    imagePrompt: '太陽武庫 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '太陽武庫位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_mirror_plinth', description: '回到鏡石臺' },
      { direction: 'north', targetRoomId: 'sunspire_hymn_gallery', description: '聖歌廊在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_solar_armory_construct', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'sunspire_flameglass_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[武]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '太陽武庫的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '太陽武庫的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '太陽武庫殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },
};
