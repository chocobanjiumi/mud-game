// Static world-map coordinates and connector rooms.
// Generated once from the accepted world-map layout; edit this file when the world map changes.

import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS: Record<string, RoomDef> = {
  "amber_forest_north_portal": {
    "id": "amber_forest_north_portal",
    "name": "琥珀傳送樹庭",
    "zone": "amber_forest",
    "description": "琥珀傳送樹庭開在森林北緣的高根平台上，透明樹脂包住古老符文石，金色光線沿樹根流向中央傳送陣。東側可走到樹脂補給棚，南側木橋接回琥珀森林內部，玩家可在此啟用琥珀森林傳送陣並確認回程路線。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "amber_forest_resin_supply",
        "description": "東側樹根步道繞過金色符文石，通往樹脂補給棚"
      },
      {
        "direction": "south",
        "targetRoomId": "amber_forest_north_bridge",
        "description": "南側低木橋穿過樹脂滴落區，接向琥珀森林北緣"
      }
    ],
    "mapSymbol": "[傳]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -17,
    "worldY": 4
  },
  "amber_forest_resin_supply": {
    "id": "amber_forest_resin_supply",
    "name": "樹脂補給棚",
    "zone": "amber_forest",
    "description": "樹脂補給棚用琥珀色帆布與彎曲樹枝搭成，棚下掛著防蜂面罩、採集刀與封蠟藥瓶。西側回傳送樹庭，棚外路牌提醒旅人先啟用傳送陣，再深入封蠟蜂巢與煙菌坡。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "amber_forest_north_portal",
        "description": "西側金光沿樹根回流，能回到琥珀傳送樹庭"
      }
    ],
    "mapSymbol": "[棚]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -16,
    "worldY": 4
  },
  "amber_forest_north_bridge": {
    "id": "amber_forest_north_bridge",
    "name": "北緣樹脂橋",
    "zone": "amber_forest",
    "description": "北緣樹脂橋跨過黏稠的金色樹液溝，橋板被透明樹脂固定在古根之間，南面可看見琥珀樹道與煙菌坡的霧光。北側回傳送樹庭，這裡作為小村傳送點進入森林主路的過渡段。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "amber_forest_north_portal",
        "description": "北側橋板抬升回到傳送樹庭，符文金光在樹根間閃動"
      },
      {
        "direction": "south",
        "targetRoomId": "amber_forest_entry_claim",
        "description": "南側樹脂橋落到琥珀樹道，能接回森林內部主路"
      }
    ],
    "mapSymbol": "[橋]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -17,
    "worldY": 5
  },
  "amber_forest_fill_n11_6": {
    "id": "amber_forest_fill_n11_6",
    "name": "金葉通道",
    "zone": "amber_forest",
    "description": "琥珀森林中的小路，金色的樹葉在陽光下閃耀。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": -11,
    "worldY": 6
  },
  "amber_forest_fill_n11_8": {
    "id": "amber_forest_fill_n11_8",
    "name": "琥珀樹道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -11,
    "worldY": 8
  },
  "amber_forest_fill_n12_5": {
    "id": "amber_forest_fill_n12_5",
    "name": "琥珀樹道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": -12,
    "worldY": 5
  },
  "amber_forest_fill_n13_10": {
    "id": "amber_forest_fill_n13_10",
    "name": "琥珀樹道",
    "zone": "amber_forest",
    "description": "穿過金黃樹林的小徑，腳下踩著鬆軟的落葉。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -13,
    "worldY": 10
  },
  "amber_forest_fill_n13_11": {
    "id": "amber_forest_fill_n13_11",
    "name": "琥珀林小路",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "blackwood_wolf_den"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 6,
    "worldX": -13,
    "worldY": 11
  },
  "amber_forest_fill_n13_8": {
    "id": "amber_forest_fill_n13_8",
    "name": "金葉通道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": -13,
    "worldY": 8
  },
  "amber_forest_fill_n13_9": {
    "id": "amber_forest_fill_n13_9",
    "name": "樹脂小徑",
    "zone": "amber_forest",
    "description": "琥珀森林中的小路，金色的樹葉在陽光下閃耀。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -13,
    "worldY": 9
  },
  "amber_forest_fill_n15_8": {
    "id": "amber_forest_fill_n15_8",
    "name": "金葉通道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 3,
    "worldX": -15,
    "worldY": 8
  },
  "amber_forest_fill_n16_5": {
    "id": "amber_forest_fill_n16_5",
    "name": "琥珀樹道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -16,
    "worldY": 5
  },
  "amber_forest_fill_n17_8": {
    "id": "amber_forest_fill_n17_8",
    "name": "琥珀樹道",
    "zone": "amber_forest",
    "description": "被琥珀色樹脂覆蓋的通道，空氣中瀰漫著甜蜜的松香。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -17,
    "worldY": 8
  },
  "arena_quarter_fill_24_10": {
    "id": "arena_quarter_fill_24_10",
    "name": "訓練場邊道",
    "zone": "arena_quarter",
    "description": "訓練場旁的邊道，能聽見兵器碰撞的清脆聲響。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 24,
    "worldY": 10
  },
  "arena_quarter_fill_24_6": {
    "id": "arena_quarter_fill_24_6",
    "name": "訓練場邊道",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 24,
    "worldY": 6
  },
  "arena_quarter_fill_25_11": {
    "id": "arena_quarter_fill_25_11",
    "name": "訓練場邊道",
    "zone": "arena_quarter",
    "description": "通往各看台的通道，牆上掛著歷屆冠軍的畫像。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 25,
    "worldY": 11
  },
  "arena_quarter_fill_25_12": {
    "id": "arena_quarter_fill_25_12",
    "name": "競技場巷弄",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 25,
    "worldY": 12
  },
  "arena_quarter_fill_26_12": {
    "id": "arena_quarter_fill_26_12",
    "name": "訓練場邊道",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 6,
    "worldX": 26,
    "worldY": 12
  },
  "arena_quarter_fill_26_6": {
    "id": "arena_quarter_fill_26_6",
    "name": "競技區走道",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 26,
    "worldY": 6
  },
  "arena_quarter_fill_27_10": {
    "id": "arena_quarter_fill_27_10",
    "name": "競技場巷弄",
    "zone": "arena_quarter",
    "description": "訓練場旁的邊道，能聽見兵器碰撞的清脆聲響。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 27,
    "worldY": 10
  },
  "arena_quarter_fill_27_12": {
    "id": "arena_quarter_fill_27_12",
    "name": "看台通道",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 6,
    "worldX": 27,
    "worldY": 12
  },
  "arena_quarter_fill_28_12": {
    "id": "arena_quarter_fill_28_12",
    "name": "競技區走道",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 6,
    "worldX": 28,
    "worldY": 12
  },
  "arena_quarter_fill_28_8": {
    "id": "arena_quarter_fill_28_8",
    "name": "競技區走道",
    "zone": "arena_quarter",
    "description": "通往各看台的通道，牆上掛著歷屆冠軍的畫像。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": 28,
    "worldY": 8
  },
  "arena_quarter_fill_29_8": {
    "id": "arena_quarter_fill_29_8",
    "name": "競技場巷弄",
    "zone": "arena_quarter",
    "description": "通往各看台的通道，牆上掛著歷屆冠軍的畫像。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 29,
    "worldY": 8
  },
  "arena_quarter_fill_30_10": {
    "id": "arena_quarter_fill_30_10",
    "name": "競技區走道",
    "zone": "arena_quarter",
    "description": "訓練場旁的邊道，能聽見兵器碰撞的清脆聲響。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": 30,
    "worldY": 10
  },
  "arena_quarter_fill_30_11": {
    "id": "arena_quarter_fill_30_11",
    "name": "看台通道",
    "zone": "arena_quarter",
    "description": "通往各看台的通道，牆上掛著歷屆冠軍的畫像。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 5,
    "worldX": 30,
    "worldY": 11
  },
  "arena_quarter_fill_30_7": {
    "id": "arena_quarter_fill_30_7",
    "name": "看台通道",
    "zone": "arena_quarter",
    "description": "訓練場旁的邊道，能聽見兵器碰撞的清脆聲響。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": 30,
    "worldY": 7
  },
  "arena_quarter_fill_30_8": {
    "id": "arena_quarter_fill_30_8",
    "name": "訓練場邊道",
    "zone": "arena_quarter",
    "description": "通往各看台的通道，牆上掛著歷屆冠軍的畫像。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": 30,
    "worldY": 8
  },
  "arena_quarter_fill_30_9": {
    "id": "arena_quarter_fill_30_9",
    "name": "競技場巷弄",
    "zone": "arena_quarter",
    "description": "競技場區的寬闊走道，遠處傳來觀眾的歡呼聲。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": 30,
    "worldY": 9
  },
  "blackwood_fill_n11_15": {
    "id": "blackwood_fill_n11_15",
    "name": "枯枝通道",
    "zone": "blackwood",
    "description": "黑木林深處的幽暗小路，枯枝在頭頂形成密不透光的棚架。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -11,
    "worldY": 15
  },
  "blackwood_fill_n12_13": {
    "id": "blackwood_fill_n12_13",
    "name": "暗林深處",
    "zone": "blackwood",
    "description": "穿過黑木林的石板路，陰冷的空氣讓人不自覺地打了個寒顫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 1,
    "worldX": -12,
    "worldY": 13
  },
  "blackwood_fill_n13_13": {
    "id": "blackwood_fill_n13_13",
    "name": "枯枝通道",
    "zone": "blackwood",
    "description": "穿過黑木林的石板路，陰冷的空氣讓人不自覺地打了個寒顫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -13,
    "worldY": 13
  },
  "blackwood_fill_n15_12": {
    "id": "blackwood_fill_n15_12",
    "name": "黑木樹道",
    "zone": "blackwood",
    "description": "黑木林深處的幽暗小路，枯枝在頭頂形成密不透光的棚架。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": -15,
    "worldY": 12
  },
  "blackwood_fill_n17_13": {
    "id": "blackwood_fill_n17_13",
    "name": "枯枝通道",
    "zone": "blackwood",
    "description": "穿過黑木林的石板路，陰冷的空氣讓人不自覺地打了個寒顫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -17,
    "worldY": 13
  },
  "bloodsalt_coast_fill_40_7": {
    "id": "bloodsalt_coast_fill_40_7",
    "name": "赤色海崖",
    "zone": "bloodsalt_coast",
    "description": "鏽蝕的木製棧道在危險的紅潮海岸上搖搖欲墜。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "bloodsalt_coast_entrance_tidegate",
        "description": "赤色海崖北返潮門入口"
      },
      {
        "direction": "south",
        "targetRoomId": "bloodsalt_coast_brine_cut_path",
        "description": "赤色海崖南下鹵蝕小徑"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 40,
    "worldY": 7
  },
  "bloodsalt_coast_fill_40_9": {
    "id": "bloodsalt_coast_fill_40_9",
    "name": "紅潮岸路",
    "zone": "bloodsalt_coast",
    "description": "被紅色鹽晶覆蓋的礁石通道，空氣中有金屬的腥味。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 40,
    "worldY": 9
  },
  "bloodsalt_coast_fill_41_10": {
    "id": "bloodsalt_coast_fill_41_10",
    "name": "紅潮岸路",
    "zone": "bloodsalt_coast",
    "description": "鏽蝕的木製棧道在危險的紅潮海岸上搖搖欲墜。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 41,
    "worldY": 10
  },
  "bloodsalt_coast_fill_43_6": {
    "id": "bloodsalt_coast_fill_43_6",
    "name": "赤色海崖",
    "zone": "bloodsalt_coast",
    "description": "被紅色鹽晶覆蓋的礁石通道，空氣中有金屬的腥味。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 43,
    "worldY": 6
  },
  "bloodsalt_coast_fill_44_7": {
    "id": "bloodsalt_coast_fill_44_7",
    "name": "赤色海崖",
    "zone": "bloodsalt_coast",
    "description": "鏽蝕的木製棧道在危險的紅潮海岸上搖搖欲墜。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": 44,
    "worldY": 7
  },
  "bloodsalt_coast_fill_45_9": {
    "id": "bloodsalt_coast_fill_45_9",
    "name": "血鹽礁道",
    "zone": "bloodsalt_coast",
    "description": "被紅色鹽晶覆蓋的礁石通道，空氣中有金屬的腥味。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 45,
    "worldY": 9
  },
  "bloodsalt_coast_fill_47_9": {
    "id": "bloodsalt_coast_fill_47_9",
    "name": "鏽蝕棧道",
    "zone": "bloodsalt_coast",
    "description": "棧道盡頭的木板在海水中斷裂，一道刻滿古文的石門半沉在紅潮海面下，隱約可見藍色火光。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "deepsea_temple_tide_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": 47,
    "worldY": 9
  },
  "dark_forest_fill_n1_13": {
    "id": "dark_forest_fill_n1_13",
    "name": "苔蘚石路",
    "zone": "dark_forest",
    "description": "穿過森林的狹窄小徑，四周傳來不明的窸窣聲。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_portal_yard"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": -1,
    "worldY": 13
  },
  "dark_forest_fill_n1_14": {
    "id": "dark_forest_fill_n1_14",
    "name": "幽暗樹徑",
    "zone": "dark_forest",
    "description": "古老大樹之間的陰暗通道，樹根盤結在地面上。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_quartermaster_row"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -1,
    "worldY": 14
  },
  "dark_forest_fill_n1_15": {
    "id": "dark_forest_fill_n1_15",
    "name": "林間小路",
    "zone": "dark_forest",
    "description": "暗影森林中幾乎不見天日的小路，苔蘚覆蓋了每一寸石頭。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_forge_works"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": -1,
    "worldY": 15
  },
  "dark_forest_fill_n1_16": {
    "id": "dark_forest_fill_n1_16",
    "name": "暗林通道",
    "zone": "dark_forest",
    "description": "穿過森林的狹窄小徑，四周傳來不明的窸窣聲。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_ironwood_grove"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": -1,
    "worldY": 16
  },
  "dark_forest_fill_n2_14": {
    "id": "dark_forest_fill_n2_14",
    "name": "林間小路",
    "zone": "dark_forest",
    "description": "古老大樹之間的陰暗通道，樹根盤結在地面上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": 14
  },
  "dark_forest_fill_n3_14": {
    "id": "dark_forest_fill_n3_14",
    "name": "暗林通道",
    "zone": "dark_forest",
    "description": "古老大樹之間的陰暗通道，樹根盤結在地面上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": -3,
    "worldY": 14
  },
  "dark_forest_fill_n4_12": {
    "id": "dark_forest_fill_n4_12",
    "name": "林間小路",
    "zone": "dark_forest",
    "description": "暗影森林中幾乎不見天日的小路，苔蘚覆蓋了每一寸石頭。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -4,
    "worldY": 12
  },
  "dark_forest_fill_n4_14": {
    "id": "dark_forest_fill_n4_14",
    "name": "苔蘚石路",
    "zone": "dark_forest",
    "description": "古老大樹之間的陰暗通道，樹根盤結在地面上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -4,
    "worldY": 14
  },
  "dark_forest_fill_n4_16": {
    "id": "dark_forest_fill_n4_16",
    "name": "林間小路",
    "zone": "dark_forest",
    "description": "穿過森林的狹窄小徑，四周傳來不明的窸窣聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -4,
    "worldY": 16
  },
  "dark_forest_fill_n4_17": {
    "id": "dark_forest_fill_n4_17",
    "name": "暗林通道",
    "zone": "dark_forest",
    "description": "古老大樹之間的陰暗通道，樹根盤結在地面上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -4,
    "worldY": 17
  },
  "dark_forest_fill_n4_18": {
    "id": "dark_forest_fill_n4_18",
    "name": "苔蘚石路",
    "zone": "dark_forest",
    "description": "暗影森林中幾乎不見天日的小路，苔蘚覆蓋了每一寸石頭。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 6,
    "worldX": -4,
    "worldY": 18
  },
  "dark_forest_fill_n7_16": {
    "id": "dark_forest_fill_n7_16",
    "name": "幽暗樹徑",
    "zone": "dark_forest",
    "description": "穿過森林的狹窄小徑，四周傳來不明的窸窣聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -7,
    "worldY": 16
  },
  "eastern_coast_fill_31_0": {
    "id": "eastern_coast_fill_31_0",
    "name": "礁石通道",
    "zone": "eastern_coast",
    "description": "海岸邊的崎嶇小路，鹹溼的海風撲面而來。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 31,
    "worldY": 0
  },
  "eastern_coast_fill_31_3": {
    "id": "eastern_coast_fill_31_3",
    "name": "海岸小路",
    "zone": "eastern_coast",
    "description": "海岸邊的崎嶇小路，鹹溼的海風撲面而來。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 31,
    "worldY": 3
  },
  "eastern_coast_fill_34_4": {
    "id": "eastern_coast_fill_34_4",
    "name": "沙灘邊緣",
    "zone": "eastern_coast",
    "description": "沙灘與礁岩交界的邊緣地帶，海浪聲不絕於耳。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 34,
    "worldY": 4
  },
  "eastern_coast_fill_34_5": {
    "id": "eastern_coast_fill_34_5",
    "name": "潮間帶",
    "zone": "eastern_coast",
    "description": "礁石間的濕滑通道，潮水退去後留下一灘灘水窪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 34,
    "worldY": 5
  },
  "eastern_coast_fill_34_6": {
    "id": "eastern_coast_fill_34_6",
    "name": "海岸小路",
    "zone": "eastern_coast",
    "description": "海岸邊的崎嶇小路，鹹溼的海風撲面而來。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "saltwind_flats_blue_mud_shelf"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 6,
    "worldX": 34,
    "worldY": 6
  },
  "eastern_coast_fill_35_0": {
    "id": "eastern_coast_fill_35_0",
    "name": "礁石通道",
    "zone": "eastern_coast",
    "description": "海岸邊的崎嶇小路，鹹溼的海風撲面而來。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 35,
    "worldY": 0
  },
  "eastern_coast_fill_36_2": {
    "id": "eastern_coast_fill_36_2",
    "name": "沙灘邊緣",
    "zone": "eastern_coast",
    "description": "礁石間的濕滑通道，潮水退去後留下一灘灘水窪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": 36,
    "worldY": 2
  },
  "eastern_coast_fill_37_2": {
    "id": "eastern_coast_fill_37_2",
    "name": "礁石通道",
    "zone": "eastern_coast",
    "description": "礁石間的濕滑通道，潮水退去後留下一灘灘水窪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 37,
    "worldY": 2
  },
  "eastern_coast_fill_38_2": {
    "id": "eastern_coast_fill_38_2",
    "name": "海岸小路",
    "zone": "eastern_coast",
    "description": "礁石間的濕滑通道，潮水退去後留下一灘灘水窪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": 38,
    "worldY": 2
  },
  "eastern_coast_fill_39_2": {
    "id": "eastern_coast_fill_39_2",
    "name": "潮間帶",
    "zone": "eastern_coast",
    "description": "海岸盡頭的濕滑通道，東面濃霧中隱約可見霧港城門的拱影與銅鐘輪廓。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "mist_harbor_fog_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 2,
    "worldX": 39,
    "worldY": 2
  },
  "ember_march_fill_22_21": {
    "id": "ember_march_fill_22_21",
    "name": "火痕石道",
    "zone": "ember_march",
    "description": "餘燼邊境的焦土小路，腳下的灰燼還帶著餘溫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 22,
    "worldY": 21
  },
  "ember_march_fill_22_24": {
    "id": "ember_march_fill_22_24",
    "name": "灰燼邊道",
    "zone": "ember_march",
    "description": "餘燼邊境的焦土小路，腳下的灰燼還帶著餘溫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 3,
    "worldX": 22,
    "worldY": 24
  },
  "ember_march_south_portal": {
    "id": "ember_march_south_portal",
    "name": "南燼傳送石臺",
    "zone": "ember_march",
    "description": "黑色玄武岩砌成的傳送石臺立在焦灰南坡，符文被餘燼照得忽明忽暗。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "ember_march_fill_22_24"
      },
      {
        "direction": "east",
        "targetRoomId": "ember_march_south_supply"
      },
      {
        "direction": "south",
        "targetRoomId": "ember_march_south_shelter"
      }
    ],
    "mapSymbol": "[T]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 22,
    "worldY": 25
  },
  "ember_march_south_supply": {
    "id": "ember_march_south_supply",
    "name": "焦土補給棚",
    "zone": "ember_march",
    "description": "半埋在灰堆裡的補給棚用耐火布遮住熱風，水桶和冷卻藥劑沿牆排開。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "ember_march_south_portal"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": 23,
    "worldY": 25
  },
  "ember_march_south_shelter": {
    "id": "ember_march_south_shelter",
    "name": "熔灰避風亭",
    "zone": "ember_march",
    "description": "低矮石亭擋住南面吹來的熔灰風，亭外能看見火山前緣的紅光。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "ember_march_south_portal"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": 22,
    "worldY": 26
  },
  "ember_march_fill_26_21": {
    "id": "ember_march_fill_26_21",
    "name": "火痕石道",
    "zone": "ember_march",
    "description": "餘燼邊境的焦土小路，腳下的灰燼還帶著餘溫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": 26,
    "worldY": 21
  },
  "ember_march_fill_28_22": {
    "id": "ember_march_fill_28_22",
    "name": "灰燼邊道",
    "zone": "ember_march",
    "description": "灰燼覆蓋的邊道，遠處火山的紅光映照著天際。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": 28,
    "worldY": 22
  },
  "ember_march_fill_30_21": {
    "id": "ember_march_fill_30_21",
    "name": "火痕石道",
    "zone": "ember_march",
    "description": "餘燼邊境的焦土小路，腳下的灰燼還帶著餘溫。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_ash_field"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 0,
    "worldX": 30,
    "worldY": 21
  },
  "ember_march_fill_30_23": {
    "id": "ember_march_fill_30_23",
    "name": "餘燼通道",
    "zone": "ember_march",
    "description": "穿過餘燼地帶的通道，空氣中瀰漫著硫磺的刺鼻氣味。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_sulfur_springs"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 2,
    "worldX": 30,
    "worldY": 23
  },
  "ember_march_fill_30_24": {
    "id": "ember_march_fill_30_24",
    "name": "灰燼邊道",
    "zone": "ember_march",
    "description": "餘燼邊境的焦土小路，腳下的灰燼還帶著餘溫。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_lava_bridge"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 3,
    "worldX": 30,
    "worldY": 24
  },
  "emerald_canopy_fill_n18_7": {
    "id": "emerald_canopy_fill_n18_7",
    "name": "翠綠樹道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "amber_forest_resin_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 0,
    "worldX": -18,
    "worldY": 7
  },
  "emerald_canopy_fill_n19_7": {
    "id": "emerald_canopy_fill_n19_7",
    "name": "高枝走道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": -19,
    "worldY": 7
  },
  "emerald_canopy_fill_n20_7": {
    "id": "emerald_canopy_fill_n20_7",
    "name": "翡翠林小路",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": -20,
    "worldY": 7
  },
  "emerald_canopy_fill_n21_10": {
    "id": "emerald_canopy_fill_n21_10",
    "name": "翡翠林小路",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": -21,
    "worldY": 10
  },
  "emerald_canopy_fill_n21_7": {
    "id": "emerald_canopy_fill_n21_7",
    "name": "樹冠通道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": -21,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_7": {
    "id": "emerald_canopy_fill_n22_7",
    "name": "翠綠樹道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -22,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_8": {
    "id": "emerald_canopy_fill_n22_8",
    "name": "高枝走道",
    "zone": "emerald_canopy",
    "description": "翠綠光線穿透樹冠灑在林間小路上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -22,
    "worldY": 8
  },
  "emerald_canopy_fill_n23_7": {
    "id": "emerald_canopy_fill_n23_7",
    "name": "高枝走道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -23,
    "worldY": 7
  },
  "emerald_canopy_fill_n25_11": {
    "id": "emerald_canopy_fill_n25_11",
    "name": "樹冠通道",
    "zone": "emerald_canopy",
    "description": "翠綠光線穿透樹冠灑在林間小路上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -25,
    "worldY": 11
  },
  "emerald_canopy_fill_n26_10": {
    "id": "emerald_canopy_fill_n26_10",
    "name": "樹冠通道",
    "zone": "emerald_canopy",
    "description": "在巨木枝幹間搭建的走道，遠處傳來鳥鳴和風聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -26,
    "worldY": 10
  },
  "emerald_canopy_fill_n26_8": {
    "id": "emerald_canopy_fill_n26_8",
    "name": "高枝走道",
    "zone": "emerald_canopy",
    "description": "翠綠光線穿透樹冠灑在林間小路上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -26,
    "worldY": 8
  },
  "frostbite_pass_fill_n19_n12": {
    "id": "frostbite_pass_fill_n19_n12",
    "name": "隘口通道",
    "zone": "frostbite_pass",
    "description": "霜咬隘口中的冰封山道，每一步都需要小心腳下的冰層。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 3,
    "worldX": -19,
    "worldY": -12
  },
  "frostbite_pass_fill_n19_n13": {
    "id": "frostbite_pass_fill_n19_n13",
    "name": "凍石小路",
    "zone": "frostbite_pass",
    "description": "凍石小路南段在風暴高原雨幕與霜咬冷風的交界處變得濕滑，碎冰從兩側岩壁剝落，雨水在地面結成薄冰。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "storm_highlands_rain_shelf"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 2,
    "worldX": -19,
    "worldY": -13
  },
  "frostbite_pass_fill_n19_n14": {
    "id": "frostbite_pass_fill_n19_n14",
    "name": "霜咬窄道",
    "zone": "frostbite_pass",
    "description": "隘口東端的凍石小路被風暴高原吹來的暖風切出裂縫，碎冰與砂石混雜，標誌著霜咬隘口與風暴高原的交界。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "storm_highlands_cliff_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 1,
    "worldX": -19,
    "worldY": -14
  },
  "frostbite_pass_fill_n20_n12": {
    "id": "frostbite_pass_fill_n20_n12",
    "name": "冰封山道",
    "zone": "frostbite_pass",
    "description": "霜咬隘口中的冰封山道，每一步都需要小心腳下的冰層。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": -20,
    "worldY": -12
  },
  "frostbite_pass_fill_n21_n12": {
    "id": "frostbite_pass_fill_n21_n12",
    "name": "霜咬窄道",
    "zone": "frostbite_pass",
    "description": "霜咬隘口中的冰封山道，每一步都需要小心腳下的冰層。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -21,
    "worldY": -12
  },
  "frostbite_pass_fill_n22_n14": {
    "id": "frostbite_pass_fill_n22_n14",
    "name": "冰封山道",
    "zone": "frostbite_pass",
    "description": "隘口間的狹窄通道，刺骨的寒風從裂縫中灌入。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 1,
    "worldX": -22,
    "worldY": -14
  },
  "frostbite_pass_fill_n27_n14": {
    "id": "frostbite_pass_fill_n27_n14",
    "name": "霜咬窄道",
    "zone": "frostbite_pass",
    "description": "隘口間的狹窄通道，刺骨的寒風從裂縫中灌入。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -27,
    "worldY": -14
  },
  "frozen_wastes_fill_n25_n23": {
    "id": "frozen_wastes_fill_n25_n23",
    "name": "雪原邊道",
    "zone": "frozen_wastes",
    "description": "凍土上的小路，腳下的冰面發出令人不安的嘎吱聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -25,
    "worldY": -23
  },
  "frozen_wastes_fill_n26_n18": {
    "id": "frozen_wastes_fill_n26_n18",
    "name": "冰原通道",
    "zone": "frozen_wastes",
    "description": "冰封荒原上的凍結通道，刺骨的寒風能凍裂鎧甲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": -26,
    "worldY": -18
  },
  "frozen_wastes_fill_n24_n17": {
    "id": "frozen_wastes_fill_n24_n17",
    "name": "北境雪脊",
    "zone": "frozen_wastes",
    "description": "雪脊被冰風削成狹長通道，北面是更深的白霧，南側能看見龍息裂谷外緣的藍色霜光。這裡先作為冰封雪原東側補路節點，之後再補完整地貌與危險提示。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 6,
    "worldX": -24,
    "worldY": -17
  },
  "frozen_wastes_fill_n24_n18": {
    "id": "frozen_wastes_fill_n24_n18",
    "name": "裂谷雪徑",
    "zone": "frozen_wastes",
    "description": "裂谷旁的雪徑被凍霧覆住，西側能回望龍息裂谷，北側接上更高的雪脊。這裡暫時補成可通行路段，讓冰封雪原東側區域不會被座標空格切斷。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -24,
    "worldY": -18
  },
  "glass_dunes_fill_1_19": {
    "id": "glass_dunes_fill_1_19",
    "name": "沙海邊緣",
    "zone": "glass_dunes",
    "description": "被玻璃砂覆蓋的小徑，遠處的沙丘像是凝固的海浪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 1,
    "worldY": 19
  },
  "glass_dunes_fill_1_22": {
    "id": "glass_dunes_fill_1_22",
    "name": "玻璃砂路",
    "zone": "glass_dunes",
    "description": "被玻璃砂覆蓋的小徑，遠處的沙丘像是凝固的海浪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 1,
    "worldY": 22
  },
  "thundersteppe_fill_10_23": {
    "id": "thundersteppe_fill_10_23",
    "name": "雷草西緣",
    "zone": "thundersteppe",
    "description": "雷鳴草原西緣的草葉從玻璃砂縫裡冒出，腳下泥土帶著微弱電光，西側仍能看見琉璃沙丘，東側銅鈴聲引向雷原入口。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_rolling_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 4,
    "worldX": 10,
    "worldY": 23
  },
  "thundersteppe_fill_10_24": {
    "id": "thundersteppe_fill_10_24",
    "name": "雷雨草徑",
    "zone": "thundersteppe",
    "description": "低草徑被雷雨打得濕亮，殘留玻璃砂在草根間閃光，西側乾熱沙風逐漸退去，東側水洼上方聚著雷鳴草原的烏雲。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_thunder_pool"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 5,
    "worldX": 10,
    "worldY": 24
  },
  "thundersteppe_fill_10_25": {
    "id": "thundersteppe_fill_10_25",
    "name": "風祭草坡",
    "zone": "thundersteppe",
    "description": "草坡邊還殘留幾片晶化砂殼，越往東風聲越像祭旗震動，西面回到琉璃沙丘邊界，東面則接近風祭小祠外的雷草帶。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_wind_shrine"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 6,
    "worldX": 10,
    "worldY": 25
  },
  "glass_dunes_fill_2_23": {
    "id": "glass_dunes_fill_2_23",
    "name": "玻璃砂路",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 2,
    "worldY": 23
  },
  "glass_dunes_fill_3_19": {
    "id": "glass_dunes_fill_3_19",
    "name": "碎玻窄脊",
    "zone": "glass_dunes",
    "description": "碎玻窄脊位在鹽風切谷與玻暴盆地之間，白色鹽霧從西側刮來，東側盆地外緣則翻起細小玻砂。玩家可沿繩標辨認安全落腳點，也要留意風暴把舊腳印刮散。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "glass_dunes_saltwind_cut",
        "description": "西側白色鹽霧回到鹽風切谷"
      },
      {
        "direction": "east",
        "targetRoomId": "glass_dunes_glassstorm_basin",
        "description": "東側盆地外緣接往玻暴盆地"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": 3,
    "worldY": 19
  },
  "glass_dunes_fill_3_23": {
    "id": "glass_dunes_fill_3_23",
    "name": "沙丘通道",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": 3,
    "worldY": 23
  },
  "glass_dunes_fill_4_23": {
    "id": "glass_dunes_fill_4_23",
    "name": "晶砂小徑",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 4,
    "worldY": 23
  },
  "glass_dunes_fill_4_24": {
    "id": "glass_dunes_fill_4_24",
    "name": "沙丘通道",
    "zone": "glass_dunes",
    "description": "琉璃沙丘間的通道，腳下的玻璃化砂粒在陽光下折射出七彩光芒。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 4,
    "worldY": 24
  },
  "glass_dunes_fill_5_19": {
    "id": "glass_dunes_fill_5_19",
    "name": "沙海邊緣",
    "zone": "glass_dunes",
    "description": "被玻璃砂覆蓋的小徑，遠處的沙丘像是凝固的海浪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 5,
    "worldY": 19
  },
  "glass_dunes_fill_5_23": {
    "id": "glass_dunes_fill_5_23",
    "name": "沙海邊緣",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 5,
    "worldY": 23
  },
  "glass_dunes_fill_6_23": {
    "id": "glass_dunes_fill_6_23",
    "name": "玻璃砂路",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 4,
    "worldX": 6,
    "worldY": 23
  },
  "glass_dunes_fill_7_20": {
    "id": "glass_dunes_fill_7_20",
    "name": "玻璃砂路",
    "zone": "glass_dunes",
    "description": "沙海邊緣的小路，沙丘的形狀隨風不斷變化。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 7,
    "worldY": 20
  },
  "glass_dunes_fill_7_22": {
    "id": "glass_dunes_fill_7_22",
    "name": "晶砂小徑",
    "zone": "glass_dunes",
    "description": "被玻璃砂覆蓋的小徑，遠處的沙丘像是凝固的海浪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": 7,
    "worldY": 22
  },
  "ironwood_fort_fill_0_12": {
    "id": "ironwood_fort_fill_0_12",
    "name": "城牆走道",
    "zone": "ironwood_fort",
    "description": "鐵木要塞的城牆走道，守衛的腳步聲在石板上迴盪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 0,
    "worldY": 12
  },
  "ironwood_fort_fill_0_17": {
    "id": "ironwood_fort_fill_0_17",
    "name": "要塞通道",
    "zone": "ironwood_fort",
    "description": "要塞內部的通道，兩旁是高聳的石牆和瞭望塔。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 0,
    "worldY": 17
  },
  "ironwood_fort_fill_0_18": {
    "id": "ironwood_fort_fill_0_18",
    "name": "兵營通路",
    "zone": "ironwood_fort",
    "description": "鐵木要塞的城牆走道，守衛的腳步聲在石板上迴盪。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 0,
    "worldY": 18
  },
  "glass_dunes_fill_1_18": {
    "id": "glass_dunes_fill_1_18",
    "name": "北緣晶砂",
    "zone": "glass_dunes",
    "description": "琉璃沙丘北緣的晶砂貼著要塞南方展開，碎玻砂在風裡發亮，南面可接入更深沙丘，北側仍能看見鐵木要塞的牆影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 1,
    "worldY": 18
  },
  "glass_dunes_fill_2_18": {
    "id": "glass_dunes_fill_2_18",
    "name": "玻砂北徑",
    "zone": "glass_dunes",
    "description": "玻砂北徑沿著乾熱風線延伸，腳下砂粒像碎鏡一樣磨響，南側沙丘開始升高，北面要塞石牆只剩低沉輪廓。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": 2,
    "worldY": 18
  },
  "glass_dunes_fill_3_18": {
    "id": "glass_dunes_fill_3_18",
    "name": "熱風砂脊",
    "zone": "glass_dunes",
    "description": "熱風砂脊把北方硬土切成透明砂線，東西兩側都有晶砂起伏，往南能看見琉璃沙丘內部的白亮反光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 3,
    "worldY": 18
  },
  "ironwood_fort_fill_4_15": {
    "id": "ironwood_fort_fill_4_15",
    "name": "軍道",
    "zone": "ironwood_fort",
    "description": "鐵木要塞的城牆走道，守衛的腳步聲在石板上迴盪。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": 4,
    "worldY": 15
  },
  "glass_dunes_fill_4_18": {
    "id": "glass_dunes_fill_4_18",
    "name": "折光砂道",
    "zone": "glass_dunes",
    "description": "折光砂道在北緣形成一排低矮玻丘，陽光被砂面切成細碎白線，南側沙海更亮，北方要塞聲音被熱浪吞沒。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 4,
    "worldY": 18
  },
  "glass_dunes_fill_5_18": {
    "id": "glass_dunes_fill_5_18",
    "name": "鏡砂邊坡",
    "zone": "glass_dunes",
    "description": "鏡砂邊坡貼著沙丘北側展開，玻化砂殼在靴下碎裂，往南能接入高熱沙脊，東西兩側都有稀薄的折射光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": 5,
    "worldY": 18
  },
  "glass_dunes_fill_6_18": {
    "id": "glass_dunes_fill_6_18",
    "name": "北砂亮線",
    "zone": "glass_dunes",
    "description": "北砂亮線在琉璃沙丘邊界拉出一道白色反光，南面沙丘像凝固浪脊，西側仍有要塞邊地的灰塵殘留。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 6,
    "worldY": 18
  },
  "kingdom_frontier_fill_n10_n3": {
    "id": "kingdom_frontier_fill_n10_n3",
    "name": "關卡通道",
    "zone": "kingdom_frontier",
    "description": "王國邊境的巡邏道路，沿途可見磨損的界碑和崗哨遺跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 4,
    "worldX": -10,
    "worldY": -3
  },
  "kingdom_frontier_fill_n10_n4": {
    "id": "kingdom_frontier_fill_n10_n4",
    "name": "邊牆走道",
    "zone": "kingdom_frontier",
    "description": "邊境城牆下的走道，遠處能看見敵國領地的輪廓。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_old_oak_stand"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 3,
    "worldX": -10,
    "worldY": -4
  },
  "kingdom_frontier_fill_n10_n5": {
    "id": "kingdom_frontier_fill_n10_n5",
    "name": "前線小路",
    "zone": "kingdom_frontier",
    "description": "穿過關卡的通道，戒備森嚴的氣氛讓人不敢大聲說話。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_silver_trail"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 2,
    "worldX": -10,
    "worldY": -5
  },
  "kingdom_frontier_fill_n10_n6": {
    "id": "kingdom_frontier_fill_n10_n6",
    "name": "邊境巡邏路",
    "zone": "kingdom_frontier",
    "description": "邊境巡邏路在獵場鹿徑西側延伸，草叢裡可見王室與軍方的雙重界標。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_deer_run"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 1,
    "worldX": -10,
    "worldY": -6
  },
  "kingdom_frontier_fill_n10_n7": {
    "id": "kingdom_frontier_fill_n10_n7",
    "name": "關卡通道",
    "zone": "kingdom_frontier",
    "description": "邊境巡邏路穿過王室獵場西側界碑，磨損的石墩標出獵場與軍管區的分界。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_horn_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 0,
    "worldX": -10,
    "worldY": -7
  },
  "kingdom_frontier_fill_n11_n3": {
    "id": "kingdom_frontier_fill_n11_n3",
    "name": "邊境巡邏路",
    "zone": "kingdom_frontier",
    "description": "王國邊境的巡邏道路，沿途可見磨損的界碑和崗哨遺跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": -11,
    "worldY": -3
  },
  "kingdom_frontier_fill_n13_n4": {
    "id": "kingdom_frontier_fill_n13_n4",
    "name": "前線小路",
    "zone": "kingdom_frontier",
    "description": "邊境城牆下的走道，遠處能看見敵國領地的輪廓。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": -13,
    "worldY": -4
  },
  "kingdom_frontier_fill_n14_n6": {
    "id": "kingdom_frontier_fill_n14_n6",
    "name": "邊境巡邏路",
    "zone": "kingdom_frontier",
    "description": "王國邊境的巡邏道路，沿途可見磨損的界碑和崗哨遺跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -14,
    "worldY": -6
  },
  "kingdom_frontier_fill_n15_n7": {
    "id": "kingdom_frontier_fill_n15_n7",
    "name": "邊境巡邏路",
    "zone": "kingdom_frontier",
    "description": "邊境城牆下的走道，遠處能看見敵國領地的輪廓。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -15,
    "worldY": -7
  },
  "kingdom_frontier_fill_n17_n3": {
    "id": "kingdom_frontier_fill_n17_n3",
    "name": "邊牆走道",
    "zone": "kingdom_frontier",
    "description": "王國邊境的巡邏道路，沿途可見磨損的界碑和崗哨遺跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -17,
    "worldY": -3
  },
  "kingdom_frontier_fill_n18_n4": {
    "id": "kingdom_frontier_fill_n18_n4",
    "name": "邊牆走道",
    "zone": "kingdom_frontier",
    "description": "邊境城牆下的走道，遠處能看見敵國領地的輪廓。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -18,
    "worldY": -4
  },
  "kingdom_frontier_fill_n18_n6": {
    "id": "kingdom_frontier_fill_n18_n6",
    "name": "邊境巡邏路",
    "zone": "kingdom_frontier",
    "description": "王國邊境的巡邏道路，沿途可見磨損的界碑和崗哨遺跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -18,
    "worldY": -6
  },
  "kingsroad_market_fill_23_2": {
    "id": "kingsroad_market_fill_23_2",
    "name": "市集大路",
    "zone": "kingsroad_market",
    "description": "連接各處攤位的通道，空氣中飄著香料和皮革的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 23,
    "worldY": 2
  },
  "kingsroad_market_fill_23_n1": {
    "id": "kingsroad_market_fill_23_n1",
    "name": "商路",
    "zone": "kingsroad_market",
    "description": "連接各處攤位的通道，空氣中飄著香料和皮革的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 23,
    "worldY": -1
  },
  "kingsroad_market_fill_25_5": {
    "id": "kingsroad_market_fill_25_5",
    "name": "商路",
    "zone": "kingsroad_market",
    "description": "連接各處攤位的通道，空氣中飄著香料和皮革的味道。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "arena_quarter_prize_counter"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 25,
    "worldY": 5
  },
  "kingsroad_market_fill_26_3": {
    "id": "kingsroad_market_fill_26_3",
    "name": "驛道",
    "zone": "kingsroad_market",
    "description": "王道市集的主要商路，馬車和行商絡繹不絕。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 26,
    "worldY": 3
  },
  "kingsroad_market_fill_26_n1": {
    "id": "kingsroad_market_fill_26_n1",
    "name": "驛道",
    "zone": "kingsroad_market",
    "description": "連接各處攤位的通道，空氣中飄著香料和皮革的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 26,
    "worldY": -1
  },
  "kingsroad_market_fill_28_3": {
    "id": "kingsroad_market_fill_28_3",
    "name": "市集大路",
    "zone": "kingsroad_market",
    "description": "王道市集的主要商路，馬車和行商絡繹不絕。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 4,
    "worldX": 28,
    "worldY": 3
  },
  "kingsroad_market_fill_29_3": {
    "id": "kingsroad_market_fill_29_3",
    "name": "攤位通道",
    "zone": "kingsroad_market",
    "description": "王道市集的主要商路，馬車和行商絡繹不絕。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 4,
    "worldX": 29,
    "worldY": 3
  },
  "kingsroad_market_fill_30_3": {
    "id": "kingsroad_market_fill_30_3",
    "name": "驛道",
    "zone": "kingsroad_market",
    "description": "王道市集的主要商路，馬車和行商絡繹不絕。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": 30,
    "worldY": 3
  },
  "lakeside_town_fill_15_3": {
    "id": "lakeside_town_fill_15_3",
    "name": "城鎮街道",
    "zone": "lakeside_town",
    "description": "湖畔城鎮的繁忙街道，商人和冒險者來來往往。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 15,
    "worldY": 3
  },
  "lakeside_town_fill_15_5": {
    "id": "lakeside_town_fill_15_5",
    "name": "石板大路",
    "zone": "lakeside_town",
    "description": "通往湖濱的石板路，遠處湖面波光粼粼。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 15,
    "worldY": 5
  },
  "lakeside_town_fill_15_6": {
    "id": "lakeside_town_fill_15_6",
    "name": "商店旁巷",
    "zone": "lakeside_town",
    "description": "湖畔城鎮的繁忙街道，商人和冒險者來來往往。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_sanctuary_gate"
      },
      {
        "direction": "east",
        "targetRoomId": "pilgrim_road_quiet_overlook"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 15,
    "worldY": 6
  },
  "lakeside_town_fill_16_1": {
    "id": "lakeside_town_fill_16_1",
    "name": "湖濱通道",
    "zone": "lakeside_town",
    "description": "城鎮裡的寬闊通道，兩旁商鋪林立。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 1,
    "worldX": 16,
    "worldY": 1
  },
  "lakeside_town_fill_18_0": {
    "id": "lakeside_town_fill_18_0",
    "name": "石板大路",
    "zone": "lakeside_town",
    "description": "湖畔城鎮的繁忙街道，商人和冒險者來來往往。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 18,
    "worldY": 0
  },
  "lakeside_town_fill_18_5": {
    "id": "lakeside_town_fill_18_5",
    "name": "商店旁巷",
    "zone": "lakeside_town",
    "description": "通往湖濱的石板路，遠處湖面波光粼粼。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 18,
    "worldY": 5
  },
  "lakeside_town_fill_18_6": {
    "id": "lakeside_town_fill_18_6",
    "name": "湖畔青石街",
    "zone": "lakeside_town",
    "description": "湖畔青石街夾在月紋裁縫坊與湖鮮魚市之間，潮濕石板上有布料推車、水桶與魚販腳印。西側可回裁縫坊，東側通往魚市攤棚，玩家能從路標判斷市場與湖岸服務區的分流。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "lakeside_tailor",
        "description": "西側青石短街回到月紋裁縫坊"
      },
      {
        "direction": "east",
        "targetRoomId": "lakeside_fish_market",
        "description": "東側濕石街面通往湖鮮魚市"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 6,
    "worldX": 18,
    "worldY": 6
  },
  "lakeside_town_fill_19_3": {
    "id": "lakeside_town_fill_19_3",
    "name": "城鎮街道",
    "zone": "lakeside_town",
    "description": "湖畔城鎮的繁忙街道，商人和冒險者來來往往。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": 19,
    "worldY": 3
  },
  "kingsroad_market_fill_22_0": {
    "id": "kingsroad_market_fill_22_0",
    "name": "王道西市石路",
    "zone": "kingsroad_market",
    "description": "王道市集西側的石板路，貨車從湖畔城鎮方向轉入市集。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "kingsroad_market_portal_plaza"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": 22,
    "worldY": 0
  },
  "kingsroad_market_fill_22_1": {
    "id": "kingsroad_market_fill_22_1",
    "name": "王道西哨巷",
    "zone": "kingsroad_market",
    "description": "靠近市集守衛哨的西側巷道，石牆上掛著往湖畔城鎮的路牌。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "kingsroad_market_guard_post"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": 22,
    "worldY": 1
  },
  "marsh_of_mirrors_fill_24_15": {
    "id": "marsh_of_mirrors_fill_24_15",
    "name": "鏡面棧道",
    "zone": "marsh_of_mirrors",
    "description": "鏡沼中的危險通道，水面如鏡般倒映著扭曲的景象。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "moonlit_fen_dreamwater_core"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 24,
    "worldY": 15
  },
  "marsh_of_mirrors_fill_24_18": {
    "id": "marsh_of_mirrors_fill_24_18",
    "name": "水鏡邊路",
    "zone": "marsh_of_mirrors",
    "description": "鏡沼中的危險通道，水面如鏡般倒映著扭曲的景象。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 24,
    "worldY": 18
  },
  "marsh_of_mirrors_fill_25_13": {
    "id": "marsh_of_mirrors_fill_25_13",
    "name": "鏡沼通道",
    "zone": "marsh_of_mirrors",
    "description": "沿著鏡沼邊緣搭建的棧道，水面反射出不屬於這個世界的光影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 25,
    "worldY": 13
  },
  "marsh_of_mirrors_fill_25_19": {
    "id": "marsh_of_mirrors_fill_25_19",
    "name": "水鏡邊路",
    "zone": "marsh_of_mirrors",
    "description": "沿著鏡沼邊緣搭建的棧道，水面反射出不屬於這個世界的光影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 6,
    "worldX": 25,
    "worldY": 19
  },
  "marsh_of_mirrors_fill_26_18": {
    "id": "marsh_of_mirrors_fill_26_18",
    "name": "鏡沼通道",
    "zone": "marsh_of_mirrors",
    "description": "鏡沼中的危險通道，水面如鏡般倒映著扭曲的景象。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 26,
    "worldY": 18
  },
  "marsh_of_mirrors_fill_27_14": {
    "id": "marsh_of_mirrors_fill_27_14",
    "name": "鏡面棧道",
    "zone": "marsh_of_mirrors",
    "description": "迷霧籠罩的小路，每一步都可能踏入深不見底的沼澤。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": 27,
    "worldY": 14
  },
  "marsh_of_mirrors_fill_27_17": {
    "id": "marsh_of_mirrors_fill_27_17",
    "name": "水鏡邊路",
    "zone": "marsh_of_mirrors",
    "description": "迷霧籠罩的小路，每一步都可能踏入深不見底的沼澤。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 27,
    "worldY": 17
  },
  "marsh_of_mirrors_fill_27_19": {
    "id": "marsh_of_mirrors_fill_27_19",
    "name": "鏡沼通道",
    "zone": "marsh_of_mirrors",
    "description": "沿著鏡沼邊緣搭建的棧道，水面反射出不屬於這個世界的光影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 6,
    "worldX": 27,
    "worldY": 19
  },
  "marsh_of_mirrors_fill_28_15": {
    "id": "marsh_of_mirrors_fill_28_15",
    "name": "鏡面棧道",
    "zone": "marsh_of_mirrors",
    "description": "鏡沼中的危險通道，水面如鏡般倒映著扭曲的景象。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": 28,
    "worldY": 15
  },
  "marsh_of_mirrors_fill_29_16": {
    "id": "marsh_of_mirrors_fill_29_16",
    "name": "鏡面棧道",
    "zone": "marsh_of_mirrors",
    "description": "沿著鏡沼邊緣搭建的棧道，水面反射出不屬於這個世界的光影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 29,
    "worldY": 16
  },
  "marsh_of_mirrors_fill_30_14": {
    "id": "marsh_of_mirrors_fill_30_14",
    "name": "鏡沼通道",
    "zone": "marsh_of_mirrors",
    "description": "迷霧籠罩的小路，每一步都可能踏入深不見底的沼澤。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "serpent_delta_entrance_ferry"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 30,
    "worldY": 14
  },
  "marsh_of_mirrors_fill_30_16": {
    "id": "marsh_of_mirrors_fill_30_16",
    "name": "水鏡邊路",
    "zone": "marsh_of_mirrors",
    "description": "沿著鏡沼邊緣搭建的棧道，水面反射出不屬於這個世界的光影。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "serpent_delta_heron_marker"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": 30,
    "worldY": 16
  },
  "mist_harbor_fill_40_1": {
    "id": "mist_harbor_fill_40_1",
    "name": "港口通道",
    "zone": "mist_harbor",
    "description": "穿過倉庫區的狹窄通道，堆疊的貨箱擋住了視線。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 40,
    "worldY": 1
  },
  "mist_harbor_fill_40_3": {
    "id": "mist_harbor_fill_40_3",
    "name": "倉庫旁道",
    "zone": "mist_harbor",
    "description": "霧港的木製棧道，霧氣中船隻的輪廓若隱若現。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 40,
    "worldY": 3
  },
  "mist_harbor_fill_40_5": {
    "id": "mist_harbor_fill_40_5",
    "name": "港口通道",
    "zone": "mist_harbor",
    "description": "港口裡的石板通道，空氣裡滿是魚腥和焦油的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 40,
    "worldY": 5
  },
  "mist_harbor_fill_41_n1": {
    "id": "mist_harbor_fill_41_n1",
    "name": "霧中棧道",
    "zone": "mist_harbor",
    "description": "港口裡的石板通道，空氣裡滿是魚腥和焦油的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 41,
    "worldY": -1
  },
  "mist_harbor_fill_42_5": {
    "id": "mist_harbor_fill_42_5",
    "name": "倉庫旁道",
    "zone": "mist_harbor",
    "description": "港口裡的石板通道，空氣裡滿是魚腥和焦油的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 42,
    "worldY": 5
  },
  "mist_harbor_fill_43_0": {
    "id": "mist_harbor_fill_43_0",
    "name": "港口通道",
    "zone": "mist_harbor",
    "description": "霧港的木製棧道，霧氣中船隻的輪廓若隱若現。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": 43,
    "worldY": 0
  },
  "mist_harbor_fill_43_4": {
    "id": "mist_harbor_fill_43_4",
    "name": "港口通道",
    "zone": "mist_harbor",
    "description": "穿過倉庫區的狹窄通道，堆疊的貨箱擋住了視線。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 43,
    "worldY": 4
  },
  "mist_harbor_fill_44_3": {
    "id": "mist_harbor_fill_44_3",
    "name": "倉庫旁道",
    "zone": "mist_harbor",
    "description": "霧港的木製棧道，霧氣中船隻的輪廓若隱若現。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 44,
    "worldY": 3
  },
  "mist_harbor_fill_45_2": {
    "id": "mist_harbor_fill_45_2",
    "name": "港口通道",
    "zone": "mist_harbor",
    "description": "港口裡的石板通道，空氣裡滿是魚腥和焦油的味道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 45,
    "worldY": 2
  },
  "moonlit_fen_fill_14_14": {
    "id": "moonlit_fen_fill_14_14",
    "name": "濕地小路",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 14,
    "worldY": 14
  },
  "moonlit_fen_fill_14_17": {
    "id": "moonlit_fen_fill_14_17",
    "name": "蘆葦濕徑",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 14,
    "worldY": 17
  },
  "moonlit_fen_fill_14_18": {
    "id": "moonlit_fen_fill_14_18",
    "name": "濕地小路",
    "zone": "moonlit_fen",
    "description": "月光濕地中的泥濘小路，腳下不時發出咕嘰聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 14,
    "worldY": 18
  },
  "moonlit_fen_fill_14_19": {
    "id": "moonlit_fen_fill_14_19",
    "name": "沼澤通道",
    "zone": "moonlit_fen",
    "description": "蘆葦叢中的濕滑小徑，月光在水面上留下銀色的痕跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 14,
    "worldY": 19
  },
  "moonlit_fen_fill_14_20": {
    "id": "moonlit_fen_fill_14_20",
    "name": "月光水道",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 14,
    "worldY": 20
  },
  "moonlit_fen_fill_20_14": {
    "id": "moonlit_fen_fill_20_14",
    "name": "月光水道",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 20,
    "worldY": 14
  },
  "moonlit_fen_fill_20_16": {
    "id": "moonlit_fen_fill_20_16",
    "name": "濕地小路",
    "zone": "moonlit_fen",
    "description": "蘆葦叢中的濕滑小徑，月光在水面上留下銀色的痕跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 20,
    "worldY": 16
  },
  "moonlit_fen_fill_21_14": {
    "id": "moonlit_fen_fill_21_14",
    "name": "沼澤通道",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": 21,
    "worldY": 14
  },
  "moonlit_fen_fill_21_16": {
    "id": "moonlit_fen_fill_21_16",
    "name": "蘆葦濕徑",
    "zone": "moonlit_fen",
    "description": "蘆葦叢中的濕滑小徑，月光在水面上留下銀色的痕跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": 21,
    "worldY": 16
  },
  "moonlit_fen_fill_23_15": {
    "id": "moonlit_fen_fill_23_15",
    "name": "濕地小路",
    "zone": "moonlit_fen",
    "description": "月光濕地中的泥濘小路，腳下不時發出咕嘰聲。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 1,
    "worldX": 23,
    "worldY": 15
  },
  "moonlit_fen_fill_23_16": {
    "id": "moonlit_fen_fill_23_16",
    "name": "沼澤通道",
    "zone": "moonlit_fen",
    "description": "蘆葦叢中的濕滑小徑，月光在水面上留下銀色的痕跡。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "marsh_of_mirrors_reed_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 2,
    "worldX": 23,
    "worldY": 16
  },
  "moonlit_fen_fill_23_17": {
    "id": "moonlit_fen_fill_23_17",
    "name": "月光水道",
    "zone": "moonlit_fen",
    "description": "穿過沼澤的危險通道，毒霧在低處繚繞。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "marsh_of_mirrors_peat_islet"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 3,
    "worldX": 23,
    "worldY": 17
  },
  "old_farmland_fill_n1_1": {
    "id": "old_farmland_fill_n1_1",
    "name": "殘破穀道",
    "zone": "old_farmland",
    "description": "曾經運送穀物的舊道在此轉入村莊後方，前方是倉庫斑駁的後門，門板上殘留著霉爛的穀穗印記。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_storehouse"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -1,
    "worldY": 1
  },
  "old_farmland_fill_n1_2": {
    "id": "old_farmland_fill_n1_2",
    "name": "廢棄農道",
    "zone": "old_farmland",
    "description": "踩踏得光滑的土路從廢棄田埂延伸至村莊水井方向，車轍裡積著鏽色的雨水。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_well_path"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": -1,
    "worldY": 2
  },
  "old_farmland_fill_n1_3": {
    "id": "old_farmland_fill_n1_3",
    "name": "荒田小路",
    "zone": "old_farmland",
    "description": "雜草叢生的荒田間小路，殘破的柵欄歪斜地立著。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_river_stairs"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": -1,
    "worldY": 3
  },
  "old_farmland_fill_n2_1": {
    "id": "old_farmland_fill_n2_1",
    "name": "田埂",
    "zone": "old_farmland",
    "description": "被遺棄的農道，泥土裡偶爾翻出生鏽的農具碎片。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": 1
  },
  "old_farmland_fill_n3_1": {
    "id": "old_farmland_fill_n3_1",
    "name": "荒田小路",
    "zone": "old_farmland",
    "description": "被遺棄的農道，泥土裡偶爾翻出生鏽的農具碎片。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": -3,
    "worldY": 1
  },
  "old_farmland_fill_n4_1": {
    "id": "old_farmland_fill_n4_1",
    "name": "廢棄農道",
    "zone": "old_farmland",
    "description": "走在乾裂的田埂上，遠處廢棄穀倉的輪廓若隱若現。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -4,
    "worldY": 1
  },
  "old_farmland_fill_n4_4": {
    "id": "old_farmland_fill_n4_4",
    "name": "荒田小路",
    "zone": "old_farmland",
    "description": "被遺棄的農道，泥土裡偶爾翻出生鏽的農具碎片。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -4,
    "worldY": 4
  },
  "old_farmland_fill_n6_3": {
    "id": "old_farmland_fill_n6_3",
    "name": "廢棄農道",
    "zone": "old_farmland",
    "description": "雜草叢生的荒田間小路，殘破的柵欄歪斜地立著。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": -6,
    "worldY": 3
  },
  "old_farmland_fill_n6_4": {
    "id": "old_farmland_fill_n6_4",
    "name": "殘破穀道",
    "zone": "old_farmland",
    "description": "被遺棄的農道，泥土裡偶爾翻出生鏽的農具碎片。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": -6,
    "worldY": 4
  },
  "old_farmland_fill_n8_3": {
    "id": "old_farmland_fill_n8_3",
    "name": "田埂",
    "zone": "old_farmland",
    "description": "雜草叢生的荒田間小路，殘破的柵欄歪斜地立著。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": -8,
    "worldY": 3
  },
  "pilgrim_road_fill_13_6": {
    "id": "pilgrim_road_fill_13_6",
    "name": "石板朝聖路",
    "zone": "pilgrim_road",
    "description": "朝聖古道上磨光的石板路，無數信徒在此留下了足跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": 13,
    "worldY": 6
  },
  "pilgrim_road_fill_13_9": {
    "id": "pilgrim_road_fill_13_9",
    "name": "古道",
    "zone": "pilgrim_road",
    "description": "古道在此處能看見東方藍寶湖的碼頭燈籠，白石路標指向兩個方向。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "sapphire_lake_lantern_dock"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 13,
    "worldY": 9
  },
  "pilgrim_road_fill_8_6": {
    "id": "pilgrim_road_fill_8_6",
    "name": "信仰通道",
    "zone": "pilgrim_road",
    "description": "朝聖古道上磨光的石板路，無數信徒在此留下了足跡。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 8,
    "worldY": 6
  },
  "plains_fill_10_5": {
    "id": "plains_fill_10_5",
    "name": "麥田邊道",
    "zone": "plains",
    "description": "平原上的泥土小路，遠處能看見風車的剪影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 10,
    "worldY": 5
  },
  "plains_fill_11_0": {
    "id": "plains_fill_11_0",
    "name": "平原小路",
    "zone": "plains",
    "description": "翠綠的草地一望無際，微風拂過時金色麥浪翻滾。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 11,
    "worldY": 0
  },
  "plains_fill_11_4": {
    "id": "plains_fill_11_4",
    "name": "平原小路",
    "zone": "plains",
    "description": "穿過草原的小徑，野花在路旁搖曳。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 11,
    "worldY": 4
  },
  "plains_fill_11_5": {
    "id": "plains_fill_11_5",
    "name": "風吹草徑",
    "zone": "plains",
    "description": "平原上的泥土小路，遠處能看見風車的剪影。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_smuggler_cache"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": 11,
    "worldY": 5
  },
  "plains_fill_12_5": {
    "id": "plains_fill_12_5",
    "name": "平原小路",
    "zone": "plains",
    "description": "平原上的泥土小路，遠處能看見風車的剪影。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_bandit_watch"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 5,
    "worldX": 12,
    "worldY": 5
  },
  "plains_fill_7_2": {
    "id": "plains_fill_7_2",
    "name": "麥田邊道",
    "zone": "plains",
    "description": "平原上的泥土小路，遠處能看見風車的剪影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 7,
    "worldY": 2
  },
  "plains_fill_8_1": {
    "id": "plains_fill_8_1",
    "name": "平原小路",
    "zone": "plains",
    "description": "穿過草原的小徑，野花在路旁搖曳。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 1,
    "worldX": 8,
    "worldY": 1
  },
  "plains_fill_9_5": {
    "id": "plains_fill_9_5",
    "name": "草地",
    "zone": "plains",
    "description": "平原上的泥土小路，遠處能看見風車的剪影。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 9,
    "worldY": 5
  },
  "glass_dunes_fill_0_20": {
    "id": "glass_dunes_fill_0_20",
    "name": "西緣砂路",
    "zone": "glass_dunes",
    "description": "西緣砂路夾在紅岩乾谷與琉璃沙丘之間，赤色石粉逐漸被透明砂粒取代，東側半埋商隊的旗桿在熱浪中晃動。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "glass_dunes_buried_caravan"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 0,
    "worldY": 20
  },
  "glass_dunes_fill_0_21": {
    "id": "glass_dunes_fill_0_21",
    "name": "日照西門",
    "zone": "glass_dunes",
    "description": "日照西門是一段被玻砂覆住的邊界路，西側仍有紅岩荒地的乾熱氣味，東側日照玻門反射出刺眼白光。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "glass_dunes_sun_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 0,
    "worldY": 21
  },
  "redrock_badlands_fill_n3_20": {
    "id": "redrock_badlands_fill_n3_20",
    "name": "紅岩邊道",
    "zone": "redrock_badlands",
    "description": "穿過乾谷的石道，烈日炙烤著每一塊岩石。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "redrock_badlands_scarlet_crater",
        "description": "熱裂邊道北上猩紅火口"
      },
      {
        "direction": "south",
        "targetRoomId": "redrock_badlands_exile_den",
        "description": "熱裂邊道南返流放者洞穴"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 1,
    "worldX": -3,
    "worldY": 20
  },
  "redrock_badlands_fill_n4_19": {
    "id": "redrock_badlands_fill_n4_19",
    "name": "紅岩邊道",
    "zone": "redrock_badlands",
    "description": "荒地邊緣的碎石通道，地面裂開的縫隙冒出熱氣。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n5_19",
        "description": "赤色裂光路西返熔岩蟲陷坑"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_scarlet_crater",
        "description": "赤色裂光路東接猩紅火口"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -4,
    "worldY": 19
  },
  "redrock_badlands_fill_n4_23": {
    "id": "redrock_badlands_fill_n4_23",
    "name": "紅岩邊道",
    "zone": "redrock_badlands",
    "description": "穿過乾谷的石道，烈日炙烤著每一塊岩石。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n5_23",
        "description": "刻痕路西行通往回聲拱岩"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_duel_stones",
        "description": "刻痕路東返決鬥石圈"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -4,
    "worldY": 23
  },
  "redrock_badlands_fill_n5_19": {
    "id": "redrock_badlands_fill_n5_19",
    "name": "赤岩小路",
    "zone": "redrock_badlands",
    "description": "荒地邊緣的碎石通道，地面裂開的縫隙冒出熱氣。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_lava_worm_sink",
        "description": "地下熱道西返熔岩蟲陷坑"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n4_19",
        "description": "地下熱道東接猩紅火口外緣"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -5,
    "worldY": 19
  },
  "redrock_badlands_fill_n6_21": {
    "id": "redrock_badlands_fill_n6_21",
    "name": "紅岩邊道",
    "zone": "redrock_badlands",
    "description": "赤岩荒地中的乾燥小路，紅色的砂塵隨風飛揚。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 2,
    "worldX": -6,
    "worldY": 21
  },
  "redrock_badlands_fill_n5_23": {
    "id": "redrock_badlands_fill_n5_23",
    "name": "決鬥刻痕路",
    "zone": "redrock_badlands",
    "description": "決鬥石圈西側的紅岩刻痕路，風沙在石面上留下細長白線。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n6_23",
        "description": "刻痕路西行靠近回聲拱岩"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n4_23",
        "description": "刻痕路東返決鬥石圈"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": -5,
    "worldY": 23
  },
  "redrock_badlands_fill_n6_23": {
    "id": "redrock_badlands_fill_n6_23",
    "name": "荒地通道",
    "zone": "redrock_badlands",
    "description": "穿過乾谷的石道，烈日炙烤著每一塊岩石。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_echo_arch",
        "description": "刻痕路西抵回聲拱岩"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n5_23",
        "description": "刻痕路東返決鬥石圈"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": -6,
    "worldY": 23
  },
  "redrock_badlands_fill_n7_19": {
    "id": "redrock_badlands_fill_n7_19",
    "name": "乾谷石道",
    "zone": "redrock_badlands",
    "description": "荒地邊緣的碎石通道，地面裂開的縫隙冒出熱氣。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -7,
    "worldY": 19
  },
  "redrock_badlands_fill_n7_24": {
    "id": "redrock_badlands_fill_n7_24",
    "name": "紅岩邊道",
    "zone": "redrock_badlands",
    "description": "赤岩荒地中的乾燥小路，紅色的砂塵隨風飛揚。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -7,
    "worldY": 24
  },
  "redrock_badlands_fill_n8_21": {
    "id": "redrock_badlands_fill_n8_21",
    "name": "荒地通道",
    "zone": "redrock_badlands",
    "description": "赤岩荒地中的乾燥小路，紅色的砂塵隨風飛揚。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": -8,
    "worldY": 21
  },
  "royal_hunting_grounds_fill_n5_n5": {
    "id": "royal_hunting_grounds_fill_n5_n5",
    "name": "獵場小路",
    "zone": "royal_hunting_grounds",
    "description": "林間的獵道，兩旁的灌木叢偶爾傳來動物奔跑的聲音。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -5,
    "worldY": -5
  },
  "royal_hunting_grounds_fill_n6_n4": {
    "id": "royal_hunting_grounds_fill_n6_n4",
    "name": "鹿徑",
    "zone": "royal_hunting_grounds",
    "description": "穿過王家林地的鹿徑，空氣中帶著松木和野花的香氣。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "royal_hunting_grounds_moonlit_clearing",
        "description": "月光草線西返月光空地"
      },
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_white_stag_grove",
        "description": "月光草線東接白鹿林"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 3,
    "worldX": -6,
    "worldY": -4
  },
  "saltwind_flats_fill_31_10": {
    "id": "saltwind_flats_fill_31_10",
    "name": "濕熱沙道",
    "zone": "saltwind_flats",
    "description": "鹽結晶覆蓋的灘地邊緣，遠處海面泛著不自然的白光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 31,
    "worldY": 10
  },
  "serpent_delta_fill_31_13": {
    "id": "serpent_delta_fill_31_13",
    "name": "北河渡口",
    "zone": "serpent_delta",
    "description": "蛇河三角洲北緣的渡口，鹹風與濕泥味在河面上交纏。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_entrance_ferry"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 31,
    "worldY": 13
  },
  "serpent_delta_fill_32_13": {
    "id": "serpent_delta_fill_32_13",
    "name": "分流蘆岸",
    "zone": "serpent_delta",
    "description": "低矮蘆葦沿著分流河道搖晃，泥濘小徑往南深入三角洲。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_split_reed_bank"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 6,
    "worldX": 32,
    "worldY": 13
  },
  "saltwind_flats_fill_32_7": {
    "id": "saltwind_flats_fill_32_7",
    "name": "濕熱沙道",
    "zone": "saltwind_flats",
    "description": "鹽結晶覆蓋的灘地邊緣，遠處海面泛著不自然的白光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 32,
    "worldY": 7
  },
  "saltwind_flats_fill_33_10": {
    "id": "saltwind_flats_fill_33_10",
    "name": "灘地通道",
    "zone": "saltwind_flats",
    "description": "鹽結晶覆蓋的灘地邊緣，遠處海面泛著不自然的白光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 3,
    "worldX": 33,
    "worldY": 10
  },
  "serpent_delta_fill_33_13": {
    "id": "serpent_delta_fill_33_13",
    "name": "泥魚淺灘",
    "zone": "serpent_delta",
    "description": "淺水灘裡有泥魚翻動的痕跡，河口水氣取代了北面的鹽霧。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_mudfish_pool"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 33,
    "worldY": 13
  },
  "saltwind_flats_fill_36_10": {
    "id": "saltwind_flats_fill_36_10",
    "name": "鹽結晶路",
    "zone": "saltwind_flats",
    "description": "鹽結晶覆蓋的灘地邊緣，遠處海面泛著不自然的白光。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 36,
    "worldY": 10
  },
  "saltwind_flats_fill_37_8": {
    "id": "saltwind_flats_fill_37_8",
    "name": "濕熱沙道",
    "zone": "saltwind_flats",
    "description": "穿過鹽風灘的通道，熱氣從地面蒸騰而上。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 37,
    "worldY": 8
  },
  "sapphire_lake_fill_14_10": {
    "id": "sapphire_lake_fill_14_10",
    "name": "湖畔小路",
    "zone": "sapphire_lake",
    "description": "湖邊的草地小路，微風帶來清涼的水氣。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 14,
    "worldY": 10
  },
  "sapphire_lake_fill_17_9": {
    "id": "sapphire_lake_fill_17_9",
    "name": "湖畔小路",
    "zone": "sapphire_lake",
    "description": "藍寶石湖畔的小路，清澈的湖水倒映著天空和遠山。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "sapphire_lake_blue_reed_bed",
        "description": "湖畔小路西返藍蘆葦帶"
      },
      {
        "direction": "east",
        "targetRoomId": "sapphire_lake_glassfish_cove",
        "description": "湖畔小路東接玻魚灣"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 2,
    "worldX": 17,
    "worldY": 9
  },
  "moonlit_fen_fill_18_13": {
    "id": "moonlit_fen_fill_18_13",
    "name": "月沼北汊",
    "zone": "moonlit_fen",
    "description": "月光濕地北緣的黑水汊道貼著湖岸，草叢間滲出淡淡霧氣。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_sunken_log_bridge"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 6,
    "worldX": 18,
    "worldY": 13
  },
  "sapphire_lake_fill_19_10": {
    "id": "sapphire_lake_fill_19_10",
    "name": "湖邊草地",
    "zone": "sapphire_lake",
    "description": "湖邊的草地小路，微風帶來清涼的水氣。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 19,
    "worldY": 10
  },
  "moonlit_fen_fill_19_13": {
    "id": "moonlit_fen_fill_19_13",
    "name": "沉木北橋",
    "zone": "moonlit_fen",
    "description": "沉木架成的濕滑小橋橫過淺水，南面能聽見濕地蟲鳴。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_old_canoe_camp"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 6,
    "worldX": 19,
    "worldY": 13
  },
  "moonlit_fen_fill_20_13": {
    "id": "moonlit_fen_fill_20_13",
    "name": "舊舟北營",
    "zone": "moonlit_fen",
    "description": "破舊獨木舟拖在泥岸旁，這裡已經是月光濕地的北界。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_fill_20_14"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 6,
    "worldX": 20,
    "worldY": 13
  },
  "sapphire_lake_fill_20_7": {
    "id": "sapphire_lake_fill_20_7",
    "name": "湖邊草地",
    "zone": "sapphire_lake",
    "description": "湖邊的草地小路，微風帶來清涼的水氣。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 20,
    "worldY": 7
  },
  "sapphire_lake_fill_21_8": {
    "id": "sapphire_lake_fill_21_8",
    "name": "湖邊草地",
    "zone": "sapphire_lake",
    "description": "沿著湖岸延伸的通道，水面波光粼粼。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "sapphire_lake_sapphire_lode",
        "description": "湖邊草地西返藍寶礦脈"
      },
      {
        "direction": "north",
        "targetRoomId": "sapphire_lake_lily_cache",
        "description": "湖邊草地北接睡蓮藏點"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": 21,
    "worldY": 8
  },
  "sapphire_lake_fill_22_7": {
    "id": "sapphire_lake_fill_22_7",
    "name": "水岸通道",
    "zone": "sapphire_lake",
    "description": "湖邊的草地小路，微風帶來清涼的水氣。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_grand_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 0,
    "worldX": 22,
    "worldY": 7
  },
  "sapphire_lake_fill_22_8": {
    "id": "sapphire_lake_fill_22_8",
    "name": "棧橋",
    "zone": "sapphire_lake",
    "description": "沿著湖岸延伸的通道，水面波光粼粼。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_champion_wall"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 1,
    "worldX": 22,
    "worldY": 8
  },
  "sapphire_lake_fill_22_9": {
    "id": "sapphire_lake_fill_22_9",
    "name": "湖邊草地",
    "zone": "sapphire_lake",
    "description": "藍寶石湖畔的小路，清澈的湖水倒映著天空和遠山。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_victory_arch"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 2,
    "worldX": 22,
    "worldY": 9
  },
  "serpent_delta_fill_31_15": {
    "id": "serpent_delta_fill_31_15",
    "name": "河汊通道",
    "zone": "serpent_delta",
    "description": "蛇河三角洲的泥濘通道，河水在腳邊分岔又匯合。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 31,
    "worldY": 15
  },
  "serpent_delta_fill_31_17": {
    "id": "serpent_delta_fill_31_17",
    "name": "泥灘棧道",
    "zone": "serpent_delta",
    "description": "三角洲上的搖晃棧道，下方是混濁的河水。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 31,
    "worldY": 17
  },
  "volcano_zone_fill_31_20": {
    "id": "volcano_zone_fill_31_20",
    "name": "火山北灰坡",
    "zone": "volcano_zone",
    "description": "火山地帶北緣的灰坡接住三角洲流下的濕泥，熱地面不斷冒出白色蒸氣。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "volcano_ash_field"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 31,
    "worldY": 20
  },
  "serpent_delta_fill_32_18": {
    "id": "serpent_delta_fill_32_18",
    "name": "泥灘棧道",
    "zone": "serpent_delta",
    "description": "蛇河三角洲的泥濘通道，河水在腳邊分岔又匯合。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 32,
    "worldY": 18
  },
  "serpent_delta_fill_33_19": {
    "id": "serpent_delta_fill_33_19",
    "name": "泥灘棧道",
    "zone": "serpent_delta",
    "description": "河汊之間的狹窄通道，空氣悶熱潮溼。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 33,
    "worldY": 19
  },
  "serpent_delta_fill_33_20": {
    "id": "serpent_delta_fill_33_20",
    "name": "蛇河邊道",
    "zone": "serpent_delta",
    "description": "蛇河三角洲的泥濘通道，南面岩壁上有矮人開鑿的坑口，鐵鏽味從其中飄出。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "dwarf_mine"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 33,
    "worldY": 20
  },
  "serpent_delta_fill_34_14": {
    "id": "serpent_delta_fill_34_14",
    "name": "河汊通道",
    "zone": "serpent_delta",
    "description": "三角洲上的搖晃棧道，下方是混濁的河水。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 34,
    "worldY": 14
  },
  "serpent_delta_fill_35_15": {
    "id": "serpent_delta_fill_35_15",
    "name": "河汊通道",
    "zone": "serpent_delta",
    "description": "蛇河三角洲的泥濘通道，河水在腳邊分岔又匯合。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": 35,
    "worldY": 15
  },
  "serpent_delta_fill_36_17": {
    "id": "serpent_delta_fill_36_17",
    "name": "三角洲小路",
    "zone": "serpent_delta",
    "description": "三角洲上的搖晃棧道，下方是混濁的河水。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 36,
    "worldY": 17
  },
  "silverpine_range_fill_0_n12": {
    "id": "silverpine_range_fill_0_n12",
    "name": "山徑",
    "zone": "silverpine_range",
    "description": "舊路盡頭攀上銀松坡道，松針鋪滿破碎石階，空氣比丘陵冷了幾度。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_old_road_cut"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 2,
    "worldX": 0,
    "worldY": -12
  },
  "silverpine_range_fill_n1_n12": {
    "id": "silverpine_range_fill_n1_n12",
    "name": "銀松坡道",
    "zone": "silverpine_range",
    "description": "銀松山脈中的碎石山徑，松針鋪滿了路面。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -1,
    "worldY": -12
  },
  "silverpine_range_fill_n2_n12": {
    "id": "silverpine_range_fill_n2_n12",
    "name": "碎石山道",
    "zone": "silverpine_range",
    "description": "銀松山脈中的碎石山徑，松針鋪滿了路面。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": -12
  },
  "silverpine_range_fill_n4_n10": {
    "id": "silverpine_range_fill_n4_n10",
    "name": "碎石山道",
    "zone": "silverpine_range",
    "description": "山腰上的崎嶇通道，放眼望去是連綿的山巒。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_fill_n5_n10",
        "description": "銀脂雪道西返松圃"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_starwatch_ridge",
        "description": "銀脂雪道東接觀星脊"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -4,
    "worldY": -10
  },
  "silverpine_range_fill_n4_n14": {
    "id": "silverpine_range_fill_n4_n14",
    "name": "碎石山道",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -4,
    "worldY": -14
  },
  "silverpine_range_fill_n5_n10": {
    "id": "silverpine_range_fill_n5_n10",
    "name": "銀脂雪道",
    "zone": "silverpine_range",
    "description": "銀脂松圃東側的雪道，松脂在冷光裡泛著淡銀色。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_fill_n6_n10",
        "description": "銀脂雪道西返松圃"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_fill_n4_n10",
        "description": "銀脂雪道東往觀星脊"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": -5,
    "worldY": -10
  },
  "silverpine_range_fill_n6_n10": {
    "id": "silverpine_range_fill_n6_n10",
    "name": "銀脂雪道",
    "zone": "silverpine_range",
    "description": "風切木橋南側的銀松雪道，樹根間滲出冰冷而發亮的松脂。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_silver_sap_grove",
        "description": "銀脂雪道西接銀脂松圃"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_fill_n5_n10",
        "description": "銀脂雪道東往觀星脊"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": -6,
    "worldY": -10
  },
  "silverpine_range_fill_n6_n11": {
    "id": "silverpine_range_fill_n6_n11",
    "name": "松林小路",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_windcut_bridge",
        "description": "風削石階西返風切木橋"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_iceglass_cavern",
        "description": "風削石階東接冰玻洞"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 3,
    "worldX": -6,
    "worldY": -11
  },
  "silverpine_range_fill_n6_n14": {
    "id": "silverpine_range_fill_n6_n14",
    "name": "山徑",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": -6,
    "worldY": -14
  },
  "silverpine_range_fill_n7_n9": {
    "id": "silverpine_range_fill_n7_n9",
    "name": "碎石山道",
    "zone": "silverpine_range",
    "description": "銀松山脈中的碎石山徑，松針鋪滿了路面。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -7,
    "worldY": -9
  },
  "silverpine_range_fill_n8_n11": {
    "id": "silverpine_range_fill_n8_n11",
    "name": "銀松坡道",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -8,
    "worldY": -11
  },
  "silverpine_range_fill_n8_n14": {
    "id": "silverpine_range_fill_n8_n14",
    "name": "碎石山道",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -8,
    "worldY": -14
  },
  "silverpine_range_fill_n8_n8": {
    "id": "silverpine_range_fill_n8_n8",
    "name": "山徑",
    "zone": "silverpine_range",
    "description": "穿過銀色松林的小路，冷風從山間呼嘯而過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": -8,
    "worldY": -8
  },
  "silverpine_range_fill_n8_n9": {
    "id": "silverpine_range_fill_n8_n9",
    "name": "松林小路",
    "zone": "silverpine_range",
    "description": "銀松山脈中的碎石山徑，松針鋪滿了路面。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": -8,
    "worldY": -9
  },
  "starter_village_ext_fill_0_n3": {
    "id": "starter_village_ext_fill_0_n3",
    "name": "溪邊便道",
    "zone": "starter_village_ext",
    "description": "村莊外圍的泥土小路，兩旁長滿野草。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 0,
    "worldY": -3
  },
  "starter_village_ext_fill_1_n1": {
    "id": "starter_village_ext_fill_1_n1",
    "name": "田野通道",
    "zone": "starter_village_ext",
    "description": "通往後山和溪流的小路，偶有野兔竄過。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_inn"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": 1,
    "worldY": -1
  },
  "starter_village_ext_fill_1_n2": {
    "id": "starter_village_ext_fill_1_n2",
    "name": "溪邊便道",
    "zone": "starter_village_ext",
    "description": "穿過農田和果園的鄉間便道，空氣中帶著泥土的氣息。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 1,
    "worldY": -2
  },
  "starter_village_ext_fill_2_n1": {
    "id": "starter_village_ext_fill_2_n1",
    "name": "鄉間草徑",
    "zone": "starter_village_ext",
    "description": "通往後山和溪流的小路，偶有野兔竄過。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "adventurer_guild"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 2,
    "worldY": -1
  },
  "starter_village_ext_fill_3_n1": {
    "id": "starter_village_ext_fill_3_n1",
    "name": "村外小路",
    "zone": "starter_village_ext",
    "description": "通往後山和溪流的小路，偶有野兔竄過。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_old_library"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 3,
    "worldY": -1
  },
  "starter_village_ext_fill_3_n6": {
    "id": "starter_village_ext_fill_3_n6",
    "name": "鄉間草徑",
    "zone": "starter_village_ext",
    "description": "村莊外圍的泥土小路，兩旁長滿野草。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 3,
    "worldY": -6
  },
  "starter_village_ext_fill_4_n1": {
    "id": "starter_village_ext_fill_4_n1",
    "name": "溪邊便道",
    "zone": "starter_village_ext",
    "description": "穿過農田和果園的鄉間便道，空氣中帶著泥土的氣息。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_chapel"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": 4,
    "worldY": -1
  },
  "starter_village_fill_1_3": {
    "id": "starter_village_fill_1_3",
    "name": "民宅通道",
    "zone": "starter_village",
    "description": "鋪著青石板的安靜小路，兩旁是低矮的木柵欄。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "starter_village_river_stairs",
        "description": "低地小徑西返溪畔石階"
      },
      {
        "direction": "east",
        "targetRoomId": "starter_village_portal_shrine",
        "description": "低地小徑東接傳送祠堂"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 3,
    "worldX": 1,
    "worldY": 3
  },
  "starter_village_fill_3_4": {
    "id": "starter_village_fill_3_4",
    "name": "青石巷弄",
    "zone": "starter_village",
    "description": "通往村莊各處的平坦道路，偶有村民走過。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 3,
    "worldY": 4
  },
  "starter_village_fill_5_3": {
    "id": "starter_village_fill_5_3",
    "name": "民宅通道",
    "zone": "starter_village",
    "description": "鋪著青石板的安靜小路，兩旁是低矮的木柵欄。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 5,
    "worldY": 3
  },
  "starter_village_fill_6_3": {
    "id": "starter_village_fill_6_3",
    "name": "青石巷弄",
    "zone": "starter_village",
    "description": "青石路面在此盡頭化為野草，一道低矮的木柵欄標記著村莊東界，柵外是月光下銀白的荒野草地。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "plains_moonlit_copse"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": 6,
    "worldY": 3
  },
  "storm_highlands_fill_n10_n14": {
    "id": "storm_highlands_fill_n10_n14",
    "name": "高原風道",
    "zone": "storm_highlands",
    "description": "高原上的暴風通道，天空中電光不時閃爍。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 1,
    "worldX": -10,
    "worldY": -14
  },
  "storm_highlands_fill_n11_n13": {
    "id": "storm_highlands_fill_n11_n13",
    "name": "斷崖通道",
    "zone": "storm_highlands",
    "description": "斷崖邊的碎石路，遠處雷聲隆隆不斷。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -11,
    "worldY": -13
  },
  "storm_highlands_fill_n11_n15": {
    "id": "storm_highlands_fill_n11_n15",
    "name": "高原風道",
    "zone": "storm_highlands",
    "description": "風暴高原上的危險小路，狂風幾乎能把人吹下懸崖。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": -11,
    "worldY": -15
  },
  "storm_highlands_fill_n17_n15": {
    "id": "storm_highlands_fill_n17_n15",
    "name": "斷崖通道",
    "zone": "storm_highlands",
    "description": "風暴高原上的危險小路，狂風幾乎能把人吹下懸崖。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -17,
    "worldY": -15
  },
  "thundersteppe_fill_11_22": {
    "id": "thundersteppe_fill_11_22",
    "name": "雷暴通道",
    "zone": "thundersteppe",
    "description": "雷暴草原的開闊通道，烏雲在頭頂翻滾。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 11,
    "worldY": 22
  },
  "thundersteppe_fill_12_21": {
    "id": "thundersteppe_fill_12_21",
    "name": "焦痕草徑",
    "zone": "thundersteppe",
    "description": "雷鳴草原上的焦黑草地，閃電留下的痕跡遍布四周。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 12,
    "worldY": 21
  },
  "thundersteppe_fill_12_25": {
    "id": "thundersteppe_fill_12_25",
    "name": "焦痕草徑",
    "zone": "thundersteppe",
    "description": "雷暴草原的開闊通道，烏雲在頭頂翻滾。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 12,
    "worldY": 25
  },
  "thundersteppe_fill_14_21": {
    "id": "thundersteppe_fill_14_21",
    "name": "雷暴通道",
    "zone": "thundersteppe",
    "description": "雷鳴草原上的焦黑草地，閃電留下的痕跡遍布四周。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 14,
    "worldY": 21
  },
  "thundersteppe_fill_14_25": {
    "id": "thundersteppe_fill_14_25",
    "name": "雷暴通道",
    "zone": "thundersteppe",
    "description": "雷暴草原的開闊通道，烏雲在頭頂翻滾。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 14,
    "worldY": 25
  },
  "thundersteppe_fill_15_24": {
    "id": "thundersteppe_fill_15_24",
    "name": "焦痕草徑",
    "zone": "thundersteppe",
    "description": "雷鳴草原上的焦黑草地，閃電留下的痕跡遍布四周。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": 15,
    "worldY": 24
  },
  "thundersteppe_fill_17_22": {
    "id": "thundersteppe_fill_17_22",
    "name": "焦痕草徑",
    "zone": "thundersteppe",
    "description": "雷暴草原的開闊通道，烏雲在頭頂翻滾。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 17,
    "worldY": 22
  },
  "thundersteppe_fill_20_22": {
    "id": "thundersteppe_fill_20_22",
    "name": "雷鳴草坡",
    "zone": "thundersteppe",
    "description": "雷暴草原的開闊通道，烏雲在頭頂翻滾。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_ash_gate"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 1,
    "worldX": 20,
    "worldY": 22
  },
  "thundersteppe_fill_20_23": {
    "id": "thundersteppe_fill_20_23",
    "name": "雷暴通道",
    "zone": "thundersteppe",
    "description": "草原上被雷擊焦黑的小徑，空氣中帶著臭氧的味道。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_burnt_watchpost"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 2,
    "worldX": 20,
    "worldY": 23
  },
  "thundersteppe_fill_20_24": {
    "id": "thundersteppe_fill_20_24",
    "name": "雷原草地",
    "zone": "thundersteppe",
    "description": "雷鳴草原上的焦黑草地，閃電留下的痕跡遍布四周。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_glass_ash_field"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 3,
    "worldX": 20,
    "worldY": 24
  },
  "volcano_zone_fill_31_22": {
    "id": "volcano_zone_fill_31_22",
    "name": "火山邊道",
    "zone": "volcano_zone",
    "description": "火山灰原南側的灰燼邊道夾在黑色灰丘與硫磺熱霧之間，腳下可見被熱風燒裂的玄武岩。北面回火山灰原，南側熱氣逐漸變黃並接往硫磺熱泉，路旁噴氣孔會提醒玩家放慢腳步觀察噴發節奏。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "volcano_ash_field",
        "description": "北側灰燼邊道回到火山灰原"
      },
      {
        "direction": "south",
        "targetRoomId": "volcano_sulfur_springs",
        "description": "南側硫磺熱霧接往硫磺熱泉"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 31,
    "worldY": 22
  },
  "volcano_zone_fill_32_25": {
    "id": "volcano_zone_fill_32_25",
    "name": "火山石路",
    "zone": "volcano_zone",
    "description": "玄武岩階東側的火山石路沿著山巔封印鏈外圈延伸，黑石地面被熔岩光照成暗紅。西面回玄武岩階，東側能看到火山頂的開闊岩脊，路旁裂縫會噴出短促熱風，適合玩家先判斷落腳點再推進。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "volcano_basalt_steps",
        "description": "西側玄武岩台階回到玄武岩階"
      },
      {
        "direction": "east",
        "targetRoomId": "volcano_summit",
        "description": "東側封印鏈石路通往火山頂"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 32,
    "worldY": 25
  },
  "volcano_zone_fill_34_24": {
    "id": "volcano_zone_fill_34_24",
    "name": "噴氣口道",
    "zone": "volcano_zone",
    "description": "火山地帶的石路，腳下的岩石散發著灼熱的高溫。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 3,
    "worldX": 34,
    "worldY": 24
  },
  "whispering_valley_fill_n3_8": {
    "id": "whispering_valley_fill_n3_8",
    "name": "低語小徑",
    "zone": "whispering_valley",
    "description": "谷底蘆葦叢中的狹窄通道，霧氣在腳邊繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": -3,
    "worldY": 8
  },
  "whispering_valley_fill_n4_6": {
    "id": "whispering_valley_fill_n4_6",
    "name": "蘆葦路",
    "zone": "whispering_valley",
    "description": "溪谷中濕滑的石板路，流水聲迴盪在谷壁間。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": -4,
    "worldY": 6
  },
  "whispering_valley_fill_n4_7": {
    "id": "whispering_valley_fill_n4_7",
    "name": "低語小徑",
    "zone": "whispering_valley",
    "description": "穿過低語溪谷的小徑，風聲像是在耳邊私語。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 2,
    "worldX": -4,
    "worldY": 7
  },
  "whispering_valley_fill_n4_9": {
    "id": "whispering_valley_fill_n4_9",
    "name": "谷底通道",
    "zone": "whispering_valley",
    "description": "溪谷中濕滑的石板路，流水聲迴盪在谷壁間。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": -4,
    "worldY": 9
  },
  "whispering_valley_fill_n5_11": {
    "id": "whispering_valley_fill_n5_11",
    "name": "溪谷小路",
    "zone": "whispering_valley",
    "description": "谷底蘆葦叢中的狹窄通道，霧氣在腳邊繚繞。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": -5,
    "worldY": 11
  },
  "whispering_valley_fill_n6_10": {
    "id": "whispering_valley_fill_n6_10",
    "name": "溪谷小路",
    "zone": "whispering_valley",
    "description": "穿過低語溪谷的小徑，風聲像是在耳邊私語。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -6,
    "worldY": 10
  },
  "whispering_valley_fill_n7_11": {
    "id": "whispering_valley_fill_n7_11",
    "name": "蘆葦路",
    "zone": "whispering_valley",
    "description": "谷底蘆葦叢中的狹窄通道，霧氣在腳邊繚繞。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "firefly_trail"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": -7,
    "worldY": 11
  },
  "whispering_valley_fill_n7_6": {
    "id": "whispering_valley_fill_n7_6",
    "name": "谷底通道",
    "zone": "whispering_valley",
    "description": "谷底通道位在巡林哨站南側，濕滑石板沿溪谷低處延伸，牆上還留著巡林人用炭筆補上的箭頭。北面回哨站，南面接蘆葦路，玩家可依水聲和舊路標判斷石堰方向。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "whispering_valley_ranger_post",
        "description": "北側濕石板路回到巡林哨站"
      },
      {
        "direction": "south",
        "targetRoomId": "whispering_valley_fill_n7_7",
        "description": "南側低谷小徑接往蘆葦路"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -7,
    "worldY": 6
  },
  "whispering_valley_fill_n7_7": {
    "id": "whispering_valley_fill_n7_7",
    "name": "蘆葦路",
    "zone": "whispering_valley",
    "description": "蘆葦路夾在谷底通道與石堰之間，兩側水草被溪風吹得貼向石板，像有人在耳邊低語。北面回谷底通道，南側可抵石堰，玩家可從蘆葦倒伏方向辨認水流與狼群足跡。",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "whispering_valley_fill_n7_6",
        "description": "北側低谷小徑回到谷底通道"
      },
      {
        "direction": "south",
        "targetRoomId": "whispering_valley_stone_weir",
        "description": "南側蘆葦石路通往石堰"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": -7,
    "worldY": 7
  },
  "wildgrass_hills_fill_1_n10": {
    "id": "wildgrass_hills_fill_1_n10",
    "name": "野草坡地",
    "zone": "wildgrass_hills",
    "description": "風口處的通道，枯草被風壓成一邊倒的弧形。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 1,
    "worldY": -10
  },
  "wildgrass_hills_fill_1_n8": {
    "id": "wildgrass_hills_fill_1_n8",
    "name": "丘陵小路",
    "zone": "wildgrass_hills",
    "description": "丘陵間的碎石小路，視野開闊但無處遮蔽。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 1,
    "worldY": -8
  },
  "wildgrass_hills_fill_2_n12": {
    "id": "wildgrass_hills_fill_2_n12",
    "name": "風口通道",
    "zone": "wildgrass_hills",
    "description": "荒草覆蓋的丘陵斜坡，強風吹得人站不穩腳。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_old_road_cut",
        "description": "風口通道西返舊路切口"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_stream_cut",
        "description": "風口通道東接溪切溝"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 2,
    "worldY": -12
  },
  "wildgrass_hills_fill_2_n7": {
    "id": "wildgrass_hills_fill_2_n7",
    "name": "丘陵小路",
    "zone": "wildgrass_hills",
    "description": "風口處的通道，枯草被風壓成一邊倒的弧形。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": 2,
    "worldY": -7
  },
  "wildgrass_hills_fill_3_n8": {
    "id": "wildgrass_hills_fill_3_n8",
    "name": "野草坡地",
    "zone": "wildgrass_hills",
    "description": "丘陵間的碎石小路，視野開闊但無處遮蔽。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_broken_totem",
        "description": "野草坡地西返斷圖騰"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_fill_4_n8",
        "description": "野草坡地東往風暴草冠"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": 3,
    "worldY": -8
  },
  "wildgrass_hills_fill_4_n12": {
    "id": "wildgrass_hills_fill_4_n12",
    "name": "草丘斜坡",
    "zone": "wildgrass_hills",
    "description": "荒草覆蓋的丘陵斜坡，強風吹得人站不穩腳。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 4,
    "worldY": -12
  },
  "wildgrass_hills_fill_4_n8": {
    "id": "wildgrass_hills_fill_4_n8",
    "name": "斷旗坡道",
    "zone": "wildgrass_hills",
    "description": "斷旗坡道夾在圖騰丘與風暴草冠之間，乾草被高處強風吹成一層層波紋。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_fill_3_n8",
        "description": "斷旗坡道西返斷圖騰"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_fill_5_n8",
        "description": "斷旗坡道東往風暴草冠"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 4,
    "worldY": -8
  },
  "wildgrass_hills_fill_5_n8": {
    "id": "wildgrass_hills_fill_5_n8",
    "name": "丘陵小路",
    "zone": "wildgrass_hills",
    "description": "丘陵間的碎石小路，視野開闊但無處遮蔽。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_fill_4_n8",
        "description": "丘陵小路西返斷圖騰"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_stormgrass_crown",
        "description": "丘陵小路東抵風暴草冠"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 5,
    "worldY": -8
  },
  "wildgrass_hills_fill_6_n9": {
    "id": "wildgrass_hills_fill_6_n9",
    "name": "野草坡地",
    "zone": "wildgrass_hills",
    "description": "荒草覆蓋的丘陵斜坡，強風吹得人站不穩腳。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 6,
    "worldY": -9
  }
};

export const STATIC_WORLD_BRIDGE_ROOMS: Record<string, RoomDef> = {
  "silverpine_storm_pass": {
    "id": "silverpine_storm_pass",
    "name": "風嘯山口",
    "zone": "silverpine_range",
    "description": "山道在此急劇攀升，碎石路面被狂風磨得光滑。東側可見銀松山脈的針葉林線，西側則是風暴高原灰濛濛的天際。兩側山壁形成天然隘口，風聲在石壁間迴盪不止。",
    "exits": [],
    "mapSymbol": "[隘]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -9,
    "worldY": -14
  },
  "darkwood_border_trail": {
    "id": "darkwood_border_trail",
    "name": "暗林邊徑",
    "zone": "dark_forest",
    "description": "一條幾乎被落葉掩埋的小徑，連接著黑暗森林的深處與黑木林的幽暗腹地。空氣中瀰漫著腐葉與苔蘚的氣味，頭頂的樹冠交織成密不透光的穹頂。",
    "exits": [],
    "mapSymbol": "[徑]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -9,
    "worldY": 14
  },
  "frostbite_frozen_divide": {
    "id": "frostbite_frozen_divide",
    "name": "霜裂分界",
    "zone": "frostbite_pass",
    "description": "隘口在此陡然下沉，腳下的藍冰裂出深不見底的紋路，冷風從裂縫中嗚咽而出。北方是隘口的冰橋，南方則是冰封雪原一望無際的凍土荒野。",
    "exits": [],
    "mapSymbol": "[裂]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -24,
    "worldY": -16
  },
  "storm_highlands_windrest_portal": {
    "id": "storm_highlands_windrest_portal",
    "name": "避風村傳送石庭",
    "zone": "storm_highlands",
    "description": "避風村傳送石庭建在風暴高原北緣的背風凹地，粗石柱圍住藍白傳送陣，繩索與避雷銅鈴固定在石縫間。東側草徑通向村內補給棚，南面可沿碎石坡下到高原風道，玩家可在此啟用風暴高原傳送陣並確認回程路線。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "storm_highlands_windrest_lane",
        "description": "東側避風草徑繞過石柱與銅鈴，通往村內補給棚"
      }
    ],
    "mapSymbol": "[傳]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -18,
    "worldY": -16
  },
  "storm_highlands_windrest_lane": {
    "id": "storm_highlands_windrest_lane",
    "name": "避風村補給棚",
    "zone": "storm_highlands",
    "description": "補給棚用厚帆布與高原松木搭成，棚下堆著防雷油布、乾糧箱與修補繩索，村民把風向牌釘在低矮石牆上。西側回傳送石庭，北面木門接到避風屋，南側碎石路能下到高原危險路線。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "storm_highlands_windrest_portal",
        "description": "西側石庭的傳送藍光穿過棚布縫隙，沿石牆可回到傳送陣"
      },
      {
        "direction": "north",
        "targetRoomId": "storm_highlands_windrest_lodge",
        "description": "北側木門通向避風屋，門框上掛著防雷銅牌"
      },
      {
        "direction": "south",
        "targetRoomId": "storm_highlands_fill_n17_n15",
        "description": "南側碎石坡離開村界，下行後接回風暴高原斷崖通道"
      }
    ],
    "mapSymbol": "[棚]",
    "mapX": 1,
    "mapY": 1,
    "worldX": -17,
    "worldY": -16
  },
  "storm_highlands_windrest_lodge": {
    "id": "storm_highlands_windrest_lodge",
    "name": "避風屋",
    "zone": "storm_highlands",
    "description": "避風屋嵌在岩壁凹槽裡，厚木窗板擋住橫向雷雨，火盆旁掛著濕披風與簡易高原地圖。南側門口回到補給棚，屋內木牌提醒旅人先啟用傳送石庭，再進入獅鷲、雷風元素與斷崖巡邏出沒的高原主路。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "storm_highlands_windrest_lane",
        "description": "南側木門回到補給棚，門外能聽見傳送石庭的銅鈴聲"
      }
    ],
    "mapSymbol": "[屋]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -17,
    "worldY": -17
  }
};

export const STATIC_WORLD_ZONE_ROOM_IDS: Record<string, string[]> = {
  "amber_forest": [
    "amber_forest_north_portal",
    "amber_forest_resin_supply",
    "amber_forest_north_bridge",
    "amber_forest_fill_n10_10",
    "amber_forest_fill_n10_11",
    "amber_forest_fill_n10_5",
    "amber_forest_fill_n10_6",
    "amber_forest_fill_n10_7",
    "amber_forest_fill_n10_8",
    "amber_forest_fill_n10_9",
    "amber_forest_fill_n11_10",
    "amber_forest_fill_n11_11",
    "amber_forest_fill_n11_5",
    "amber_forest_fill_n11_6",
    "amber_forest_fill_n11_8",
    "amber_forest_fill_n11_9",
    "amber_forest_fill_n12_10",
    "amber_forest_fill_n12_11",
    "amber_forest_fill_n12_5",
    "amber_forest_fill_n12_9",
    "amber_forest_fill_n13_10",
    "amber_forest_fill_n13_11",
    "amber_forest_fill_n13_8",
    "amber_forest_fill_n13_9",
    "amber_forest_fill_n14_10",
    "amber_forest_fill_n14_11",
    "amber_forest_fill_n14_8",
    "amber_forest_fill_n14_9",
    "amber_forest_fill_n15_10",
    "amber_forest_fill_n15_11",
    "amber_forest_fill_n15_8",
    "amber_forest_fill_n15_9",
    "amber_forest_fill_n16_11",
    "amber_forest_fill_n16_5",
    "amber_forest_fill_n17_10",
    "amber_forest_fill_n17_11",
    "amber_forest_fill_n17_5",
    "amber_forest_fill_n17_8",
    "amber_forest_fill_n17_9"
  ],
  "arena_quarter": [
    "arena_quarter_fill_23_10",
    "arena_quarter_fill_23_11",
    "arena_quarter_fill_23_12",
    "arena_quarter_fill_23_6",
    "arena_quarter_fill_24_10",
    "arena_quarter_fill_24_11",
    "arena_quarter_fill_24_12",
    "arena_quarter_fill_24_6",
    "arena_quarter_fill_25_11",
    "arena_quarter_fill_25_12",
    "arena_quarter_fill_26_12",
    "arena_quarter_fill_26_6",
    "arena_quarter_fill_27_10",
    "arena_quarter_fill_27_11",
    "arena_quarter_fill_27_12",
    "arena_quarter_fill_27_6",
    "arena_quarter_fill_28_10",
    "arena_quarter_fill_28_11",
    "arena_quarter_fill_28_12",
    "arena_quarter_fill_28_6",
    "arena_quarter_fill_28_8",
    "arena_quarter_fill_28_9",
    "arena_quarter_fill_29_10",
    "arena_quarter_fill_29_11",
    "arena_quarter_fill_29_12",
    "arena_quarter_fill_29_6",
    "arena_quarter_fill_29_7",
    "arena_quarter_fill_29_8",
    "arena_quarter_fill_29_9",
    "arena_quarter_fill_30_10",
    "arena_quarter_fill_30_11",
    "arena_quarter_fill_30_12",
    "arena_quarter_fill_30_6",
    "arena_quarter_fill_30_7",
    "arena_quarter_fill_30_8",
    "arena_quarter_fill_30_9"
  ],
  "blackwood": [
    "blackwood_fill_n10_12",
    "blackwood_fill_n10_13",
    "blackwood_fill_n10_15",
    "blackwood_fill_n10_16",
    "blackwood_fill_n10_17",
    "blackwood_fill_n10_18",
    "blackwood_fill_n11_12",
    "blackwood_fill_n11_13",
    "blackwood_fill_n11_15",
    "blackwood_fill_n11_17",
    "blackwood_fill_n11_18",
    "blackwood_fill_n12_13",
    "blackwood_fill_n12_16",
    "blackwood_fill_n12_17",
    "blackwood_fill_n12_18",
    "blackwood_fill_n13_13",
    "blackwood_fill_n13_16",
    "blackwood_fill_n13_17",
    "blackwood_fill_n13_18",
    "blackwood_fill_n14_16",
    "blackwood_fill_n14_17",
    "blackwood_fill_n14_18",
    "blackwood_fill_n15_12",
    "blackwood_fill_n15_16",
    "blackwood_fill_n15_17",
    "blackwood_fill_n15_18",
    "blackwood_fill_n16_12",
    "blackwood_fill_n16_16",
    "blackwood_fill_n16_17",
    "blackwood_fill_n16_18",
    "blackwood_fill_n17_12",
    "blackwood_fill_n17_13",
    "blackwood_fill_n17_16",
    "blackwood_fill_n17_17",
    "blackwood_fill_n17_18"
  ],
  "bloodsalt_coast": [
    "bloodsalt_coast_fill_40_10",
    "bloodsalt_coast_fill_40_11",
    "bloodsalt_coast_fill_40_12",
    "bloodsalt_coast_fill_40_7",
    "bloodsalt_coast_fill_40_9",
    "bloodsalt_coast_fill_41_10",
    "bloodsalt_coast_fill_41_11",
    "bloodsalt_coast_fill_41_12",
    "bloodsalt_coast_fill_42_11",
    "bloodsalt_coast_fill_42_12",
    "bloodsalt_coast_fill_43_11",
    "bloodsalt_coast_fill_43_12",
    "bloodsalt_coast_fill_43_6",
    "bloodsalt_coast_fill_44_11",
    "bloodsalt_coast_fill_44_12",
    "bloodsalt_coast_fill_44_6",
    "bloodsalt_coast_fill_44_7",
    "bloodsalt_coast_fill_45_11",
    "bloodsalt_coast_fill_45_12",
    "bloodsalt_coast_fill_45_6",
    "bloodsalt_coast_fill_45_7",
    "bloodsalt_coast_fill_45_8",
    "bloodsalt_coast_fill_45_9",
    "bloodsalt_coast_fill_46_11",
    "bloodsalt_coast_fill_46_12",
    "bloodsalt_coast_fill_46_6",
    "bloodsalt_coast_fill_46_7",
    "bloodsalt_coast_fill_46_8",
    "bloodsalt_coast_fill_46_9",
    "bloodsalt_coast_fill_47_10",
    "bloodsalt_coast_fill_47_11",
    "bloodsalt_coast_fill_47_12",
    "bloodsalt_coast_fill_47_6",
    "bloodsalt_coast_fill_47_7",
    "bloodsalt_coast_fill_47_8",
    "bloodsalt_coast_fill_47_9"
  ],
  "dark_forest": [
    "dark_forest_fill_n1_12",
    "dark_forest_fill_n1_13",
    "dark_forest_fill_n1_14",
    "dark_forest_fill_n1_15",
    "dark_forest_fill_n1_16",
    "dark_forest_fill_n1_17",
    "dark_forest_fill_n1_18",
    "dark_forest_fill_n2_12",
    "dark_forest_fill_n2_13",
    "dark_forest_fill_n2_14",
    "dark_forest_fill_n2_15",
    "dark_forest_fill_n2_16",
    "dark_forest_fill_n2_17",
    "dark_forest_fill_n2_18",
    "dark_forest_fill_n3_12",
    "dark_forest_fill_n3_13",
    "dark_forest_fill_n3_14",
    "dark_forest_fill_n3_15",
    "dark_forest_fill_n3_16",
    "dark_forest_fill_n3_17",
    "dark_forest_fill_n3_18",
    "dark_forest_fill_n4_12",
    "dark_forest_fill_n4_14",
    "dark_forest_fill_n4_16",
    "dark_forest_fill_n4_17",
    "dark_forest_fill_n4_18",
    "dark_forest_fill_n5_17",
    "dark_forest_fill_n5_18",
    "dark_forest_fill_n6_17",
    "dark_forest_fill_n6_18",
    "dark_forest_fill_n7_16",
    "dark_forest_fill_n7_17",
    "dark_forest_fill_n7_18",
    "dark_forest_fill_n8_16",
    "dark_forest_fill_n8_17",
    "dark_forest_fill_n8_18",
    "darkwood_border_trail"
  ],
  "eastern_coast": [
    "eastern_coast_fill_31_0",
    "eastern_coast_fill_31_3",
    "eastern_coast_fill_31_4",
    "eastern_coast_fill_31_5",
    "eastern_coast_fill_31_6",
    "eastern_coast_fill_32_5",
    "eastern_coast_fill_32_6",
    "eastern_coast_fill_33_5",
    "eastern_coast_fill_33_6",
    "eastern_coast_fill_34_4",
    "eastern_coast_fill_34_5",
    "eastern_coast_fill_34_6",
    "eastern_coast_fill_35_0",
    "eastern_coast_fill_35_4",
    "eastern_coast_fill_35_5",
    "eastern_coast_fill_35_6",
    "eastern_coast_fill_36_0",
    "eastern_coast_fill_36_2",
    "eastern_coast_fill_36_3",
    "eastern_coast_fill_36_4",
    "eastern_coast_fill_36_5",
    "eastern_coast_fill_36_6",
    "eastern_coast_fill_37_0",
    "eastern_coast_fill_37_1",
    "eastern_coast_fill_37_2",
    "eastern_coast_fill_37_3",
    "eastern_coast_fill_37_4",
    "eastern_coast_fill_37_5",
    "eastern_coast_fill_37_6",
    "eastern_coast_fill_38_0",
    "eastern_coast_fill_38_1",
    "eastern_coast_fill_38_2",
    "eastern_coast_fill_38_3",
    "eastern_coast_fill_38_4",
    "eastern_coast_fill_38_5",
    "eastern_coast_fill_38_6",
    "eastern_coast_fill_39_0",
    "eastern_coast_fill_39_1",
    "eastern_coast_fill_39_2",
    "eastern_coast_fill_39_3",
    "eastern_coast_fill_39_4",
    "eastern_coast_fill_39_5",
    "eastern_coast_fill_39_6"
  ],
  "ember_march": [
    "ember_march_fill_21_25",
    "ember_march_fill_21_26",
    "ember_march_fill_21_27",
    "ember_march_fill_22_21",
    "ember_march_fill_22_24",
    "ember_march_south_portal",
    "ember_march_south_shelter",
    "ember_march_fill_22_27",
    "ember_march_fill_23_24",
    "ember_march_south_supply",
    "ember_march_fill_23_26",
    "ember_march_fill_23_27",
    "ember_march_fill_24_24",
    "ember_march_fill_24_25",
    "ember_march_fill_24_26",
    "ember_march_fill_24_27",
    "ember_march_fill_25_24",
    "ember_march_fill_25_25",
    "ember_march_fill_25_26",
    "ember_march_fill_25_27",
    "ember_march_fill_26_21",
    "ember_march_fill_26_24",
    "ember_march_fill_26_25",
    "ember_march_fill_26_26",
    "ember_march_fill_26_27",
    "ember_march_fill_27_21",
    "ember_march_fill_27_24",
    "ember_march_fill_27_25",
    "ember_march_fill_27_26",
    "ember_march_fill_27_27",
    "ember_march_fill_28_21",
    "ember_march_fill_28_22",
    "ember_march_fill_28_24",
    "ember_march_fill_28_25",
    "ember_march_fill_28_26",
    "ember_march_fill_28_27",
    "ember_march_fill_29_21",
    "ember_march_fill_29_22",
    "ember_march_fill_29_24",
    "ember_march_fill_29_25",
    "ember_march_fill_29_26",
    "ember_march_fill_29_27",
    "ember_march_fill_30_21",
    "ember_march_fill_30_22",
    "ember_march_fill_30_23",
    "ember_march_fill_30_24",
    "ember_march_fill_30_25",
    "ember_march_fill_30_26",
    "ember_march_fill_30_27"
  ],
  "emerald_canopy": [
    "emerald_canopy_fill_n18_10",
    "emerald_canopy_fill_n18_11",
    "emerald_canopy_fill_n18_12",
    "emerald_canopy_fill_n18_13",
    "emerald_canopy_fill_n18_7",
    "emerald_canopy_fill_n18_8",
    "emerald_canopy_fill_n18_9",
    "emerald_canopy_fill_n19_10",
    "emerald_canopy_fill_n19_11",
    "emerald_canopy_fill_n19_12",
    "emerald_canopy_fill_n19_13",
    "emerald_canopy_fill_n19_7",
    "emerald_canopy_fill_n19_8",
    "emerald_canopy_fill_n19_9",
    "emerald_canopy_fill_n20_10",
    "emerald_canopy_fill_n20_12",
    "emerald_canopy_fill_n20_13",
    "emerald_canopy_fill_n20_7",
    "emerald_canopy_fill_n20_8",
    "emerald_canopy_fill_n20_9",
    "emerald_canopy_fill_n21_10",
    "emerald_canopy_fill_n21_12",
    "emerald_canopy_fill_n21_13",
    "emerald_canopy_fill_n21_7",
    "emerald_canopy_fill_n21_8",
    "emerald_canopy_fill_n21_9",
    "emerald_canopy_fill_n22_12",
    "emerald_canopy_fill_n22_13",
    "emerald_canopy_fill_n22_7",
    "emerald_canopy_fill_n22_8",
    "emerald_canopy_fill_n23_12",
    "emerald_canopy_fill_n23_13",
    "emerald_canopy_fill_n23_7",
    "emerald_canopy_fill_n24_12",
    "emerald_canopy_fill_n24_13",
    "emerald_canopy_fill_n25_11",
    "emerald_canopy_fill_n25_12",
    "emerald_canopy_fill_n25_13",
    "emerald_canopy_fill_n26_10",
    "emerald_canopy_fill_n26_12",
    "emerald_canopy_fill_n26_13",
    "emerald_canopy_fill_n26_8"
  ],
  "frostbite_pass": [
    "frostbite_frozen_divide",
    "frostbite_pass_fill_n19_n10",
    "frostbite_pass_fill_n19_n11",
    "frostbite_pass_fill_n19_n12",
    "frostbite_pass_fill_n19_n13",
    "frostbite_pass_fill_n19_n14",
    "frostbite_pass_fill_n19_n9",
    "frostbite_pass_fill_n20_n10",
    "frostbite_pass_fill_n20_n11",
    "frostbite_pass_fill_n20_n12",
    "frostbite_pass_fill_n20_n13",
    "frostbite_pass_fill_n20_n14",
    "frostbite_pass_fill_n20_n15",
    "frostbite_pass_fill_n20_n9",
    "frostbite_pass_fill_n21_n10",
    "frostbite_pass_fill_n21_n11",
    "frostbite_pass_fill_n21_n12",
    "frostbite_pass_fill_n21_n14",
    "frostbite_pass_fill_n21_n15",
    "frostbite_pass_fill_n21_n9",
    "frostbite_pass_fill_n22_n10",
    "frostbite_pass_fill_n22_n11",
    "frostbite_pass_fill_n22_n14",
    "frostbite_pass_fill_n22_n15",
    "frostbite_pass_fill_n22_n9",
    "frostbite_pass_fill_n23_n10",
    "frostbite_pass_fill_n23_n11",
    "frostbite_pass_fill_n23_n9",
    "frostbite_pass_fill_n24_n10",
    "frostbite_pass_fill_n24_n11",
    "frostbite_pass_fill_n24_n9",
    "frostbite_pass_fill_n25_n10",
    "frostbite_pass_fill_n25_n11",
    "frostbite_pass_fill_n25_n9",
    "frostbite_pass_fill_n26_n10",
    "frostbite_pass_fill_n26_n11",
    "frostbite_pass_fill_n26_n9",
    "frostbite_pass_fill_n27_n10",
    "frostbite_pass_fill_n27_n11",
    "frostbite_pass_fill_n27_n12",
    "frostbite_pass_fill_n27_n13",
    "frostbite_pass_fill_n27_n14",
    "frostbite_pass_fill_n27_n9"
  ],
  "frozen_wastes": [
    "frozen_wastes_fill_n20_n17",
    "frozen_wastes_fill_n20_n18",
    "frozen_wastes_fill_n20_n19",
    "frozen_wastes_fill_n20_n20",
    "frozen_wastes_fill_n20_n21",
    "frozen_wastes_fill_n20_n22",
    "frozen_wastes_fill_n20_n23",
    "frozen_wastes_fill_n21_n17",
    "frozen_wastes_fill_n21_n18",
    "frozen_wastes_fill_n21_n19",
    "frozen_wastes_fill_n21_n20",
    "frozen_wastes_fill_n21_n21",
    "frozen_wastes_fill_n21_n22",
    "frozen_wastes_fill_n21_n23",
    "frozen_wastes_fill_n22_n17",
    "frozen_wastes_fill_n22_n18",
    "frozen_wastes_fill_n22_n19",
    "frozen_wastes_fill_n22_n20",
    "frozen_wastes_fill_n22_n21",
    "frozen_wastes_fill_n22_n22",
    "frozen_wastes_fill_n22_n23",
    "frozen_wastes_fill_n23_n17",
    "frozen_wastes_fill_n23_n18",
    "frozen_wastes_fill_n23_n19",
    "frozen_wastes_fill_n23_n20",
    "frozen_wastes_fill_n23_n21",
    "frozen_wastes_fill_n23_n22",
    "frozen_wastes_fill_n23_n23",
    "frozen_wastes_fill_n24_n17",
    "frozen_wastes_fill_n24_n18",
    "frozen_wastes_fill_n24_n19",
    "frozen_wastes_fill_n24_n20",
    "frozen_wastes_fill_n24_n21",
    "frozen_wastes_fill_n24_n22",
    "frozen_wastes_fill_n24_n23",
    "frozen_wastes_fill_n25_n17",
    "frozen_wastes_fill_n25_n23",
    "frozen_wastes_fill_n26_n17",
    "frozen_wastes_fill_n26_n18",
    "frozen_wastes_fill_n27_n17",
    "frozen_wastes_fill_n27_n18",
    "frozen_wastes_fill_n28_n17",
    "frozen_wastes_fill_n28_n18"
  ],
  "glass_dunes": [
    "glass_dunes_fill_0_20",
    "glass_dunes_fill_0_21",
    "glass_dunes_fill_10_19",
    "glass_dunes_fill_10_20",
    "glass_dunes_fill_10_21",
    "glass_dunes_fill_10_22",
    "glass_dunes_fill_1_18",
    "glass_dunes_fill_1_19",
    "glass_dunes_fill_1_22",
    "glass_dunes_fill_1_23",
    "glass_dunes_fill_1_24",
    "glass_dunes_fill_1_25",
    "glass_dunes_fill_2_18",
    "glass_dunes_fill_2_23",
    "glass_dunes_fill_2_24",
    "glass_dunes_fill_2_25",
    "glass_dunes_fill_3_18",
    "glass_dunes_fill_3_19",
    "glass_dunes_fill_3_23",
    "glass_dunes_fill_3_24",
    "glass_dunes_fill_3_25",
    "glass_dunes_fill_4_18",
    "glass_dunes_fill_4_23",
    "glass_dunes_fill_4_24",
    "glass_dunes_fill_4_25",
    "glass_dunes_fill_5_18",
    "glass_dunes_fill_5_19",
    "glass_dunes_fill_5_23",
    "glass_dunes_fill_5_24",
    "glass_dunes_fill_5_25",
    "glass_dunes_fill_6_18",
    "glass_dunes_fill_6_19",
    "glass_dunes_fill_6_23",
    "glass_dunes_fill_6_24",
    "glass_dunes_fill_6_25",
    "glass_dunes_fill_7_19",
    "glass_dunes_fill_7_20",
    "glass_dunes_fill_7_22",
    "glass_dunes_fill_7_23",
    "glass_dunes_fill_7_24",
    "glass_dunes_fill_7_25",
    "glass_dunes_fill_8_19",
    "glass_dunes_fill_8_20",
    "glass_dunes_fill_8_21",
    "glass_dunes_fill_8_22",
    "glass_dunes_fill_8_23",
    "glass_dunes_fill_8_24",
    "glass_dunes_fill_8_25",
    "glass_dunes_fill_9_19",
    "glass_dunes_fill_9_20",
    "glass_dunes_fill_9_21",
    "glass_dunes_fill_9_22",
    "glass_dunes_fill_9_23",
    "glass_dunes_fill_9_24",
    "glass_dunes_fill_9_25"
  ],
  "ironwood_fort": [
    "ironwood_fort_fill_0_12",
    "ironwood_fort_fill_0_17",
    "ironwood_fort_fill_0_18",
    "ironwood_fort_fill_1_17",
    "ironwood_fort_fill_2_17",
    "ironwood_fort_fill_3_17",
    "ironwood_fort_fill_4_12",
    "ironwood_fort_fill_4_13",
    "ironwood_fort_fill_4_14",
    "ironwood_fort_fill_4_15",
    "ironwood_fort_fill_4_17",
    "ironwood_fort_fill_5_12",
    "ironwood_fort_fill_5_13",
    "ironwood_fort_fill_5_14",
    "ironwood_fort_fill_5_15",
    "ironwood_fort_fill_5_16",
    "ironwood_fort_fill_5_17",
    "ironwood_fort_fill_6_12",
    "ironwood_fort_fill_6_13",
    "ironwood_fort_fill_6_14",
    "ironwood_fort_fill_6_15",
    "ironwood_fort_fill_6_16",
    "ironwood_fort_fill_6_17",
    "ironwood_fort_fill_7_12",
    "ironwood_fort_fill_7_13",
    "ironwood_fort_fill_7_14",
    "ironwood_fort_fill_7_15",
    "ironwood_fort_fill_7_16",
    "ironwood_fort_fill_7_17",
    "ironwood_fort_fill_7_18"
  ],
  "kingdom_frontier": [
    "kingdom_frontier_fill_n10_n1",
    "kingdom_frontier_fill_n10_n2",
    "kingdom_frontier_fill_n10_n3",
    "kingdom_frontier_fill_n10_n4",
    "kingdom_frontier_fill_n10_n5",
    "kingdom_frontier_fill_n10_n6",
    "kingdom_frontier_fill_n10_n7",
    "kingdom_frontier_fill_n11_n1",
    "kingdom_frontier_fill_n11_n2",
    "kingdom_frontier_fill_n11_n3",
    "kingdom_frontier_fill_n11_n4",
    "kingdom_frontier_fill_n11_n5",
    "kingdom_frontier_fill_n11_n6",
    "kingdom_frontier_fill_n11_n7",
    "kingdom_frontier_fill_n12_n1",
    "kingdom_frontier_fill_n12_n2",
    "kingdom_frontier_fill_n12_n4",
    "kingdom_frontier_fill_n12_n5",
    "kingdom_frontier_fill_n12_n6",
    "kingdom_frontier_fill_n12_n7",
    "kingdom_frontier_fill_n13_n1",
    "kingdom_frontier_fill_n13_n2",
    "kingdom_frontier_fill_n13_n4",
    "kingdom_frontier_fill_n13_n5",
    "kingdom_frontier_fill_n13_n6",
    "kingdom_frontier_fill_n13_n7",
    "kingdom_frontier_fill_n14_n1",
    "kingdom_frontier_fill_n14_n2",
    "kingdom_frontier_fill_n14_n6",
    "kingdom_frontier_fill_n14_n7",
    "kingdom_frontier_fill_n15_n1",
    "kingdom_frontier_fill_n15_n2",
    "kingdom_frontier_fill_n15_n7",
    "kingdom_frontier_fill_n16_n1",
    "kingdom_frontier_fill_n16_n2",
    "kingdom_frontier_fill_n17_n1",
    "kingdom_frontier_fill_n17_n2",
    "kingdom_frontier_fill_n17_n3",
    "kingdom_frontier_fill_n18_n1",
    "kingdom_frontier_fill_n18_n2",
    "kingdom_frontier_fill_n18_n3",
    "kingdom_frontier_fill_n18_n4",
    "kingdom_frontier_fill_n18_n6"
  ],
  "kingsroad_market": [
    "kingsroad_market_fill_22_0",
    "kingsroad_market_fill_22_1",
    "kingsroad_market_fill_23_2",
    "kingsroad_market_fill_23_3",
    "kingsroad_market_fill_23_4",
    "kingsroad_market_fill_23_5",
    "kingsroad_market_fill_23_n1",
    "kingsroad_market_fill_24_3",
    "kingsroad_market_fill_24_4",
    "kingsroad_market_fill_24_5",
    "kingsroad_market_fill_25_3",
    "kingsroad_market_fill_25_4",
    "kingsroad_market_fill_25_5",
    "kingsroad_market_fill_26_3",
    "kingsroad_market_fill_26_4",
    "kingsroad_market_fill_26_5",
    "kingsroad_market_fill_26_n1",
    "kingsroad_market_fill_27_4",
    "kingsroad_market_fill_27_5",
    "kingsroad_market_fill_27_n1",
    "kingsroad_market_fill_28_3",
    "kingsroad_market_fill_28_4",
    "kingsroad_market_fill_28_5",
    "kingsroad_market_fill_28_n1",
    "kingsroad_market_fill_29_0",
    "kingsroad_market_fill_29_1",
    "kingsroad_market_fill_29_2",
    "kingsroad_market_fill_29_3",
    "kingsroad_market_fill_29_4",
    "kingsroad_market_fill_29_5",
    "kingsroad_market_fill_29_n1",
    "kingsroad_market_fill_30_0",
    "kingsroad_market_fill_30_1",
    "kingsroad_market_fill_30_2",
    "kingsroad_market_fill_30_3",
    "kingsroad_market_fill_30_4",
    "kingsroad_market_fill_30_5",
    "kingsroad_market_fill_30_n1"
  ],
  "lakeside_town": [
    "lakeside_town_fill_15_0",
    "lakeside_town_fill_15_1",
    "lakeside_town_fill_15_2",
    "lakeside_town_fill_15_3",
    "lakeside_town_fill_15_5",
    "lakeside_town_fill_15_6",
    "lakeside_town_fill_16_0",
    "lakeside_town_fill_16_1",
    "lakeside_town_fill_18_0",
    "lakeside_town_fill_18_5",
    "lakeside_town_fill_18_6",
    "lakeside_town_fill_19_0",
    "lakeside_town_fill_19_1",
    "lakeside_town_fill_19_2",
    "lakeside_town_fill_19_3",
    "lakeside_town_fill_20_0",
    "lakeside_town_fill_20_1",
    "lakeside_town_fill_20_2",
    "lakeside_town_fill_20_3",
    "lakeside_town_fill_20_4",
    "lakeside_town_fill_20_5",
    "lakeside_town_fill_20_6",
    "lakeside_town_fill_21_0",
    "lakeside_town_fill_21_1",
    "lakeside_town_fill_21_2",
    "lakeside_town_fill_21_3",
    "lakeside_town_fill_21_4",
    "lakeside_town_fill_21_5",
    "lakeside_town_fill_21_6",
    "lakeside_town_fill_22_2",
    "lakeside_town_fill_22_3",
    "lakeside_town_fill_22_4",
    "lakeside_town_fill_22_5",
    "lakeside_town_fill_22_6"
  ],
  "marsh_of_mirrors": [
    "marsh_of_mirrors_fill_24_13",
    "marsh_of_mirrors_fill_24_14",
    "marsh_of_mirrors_fill_24_15",
    "marsh_of_mirrors_fill_24_18",
    "marsh_of_mirrors_fill_24_19",
    "marsh_of_mirrors_fill_25_13",
    "marsh_of_mirrors_fill_25_19",
    "marsh_of_mirrors_fill_26_18",
    "marsh_of_mirrors_fill_27_14",
    "marsh_of_mirrors_fill_27_17",
    "marsh_of_mirrors_fill_27_18",
    "marsh_of_mirrors_fill_27_19",
    "marsh_of_mirrors_fill_28_13",
    "marsh_of_mirrors_fill_28_14",
    "marsh_of_mirrors_fill_28_15",
    "marsh_of_mirrors_fill_29_13",
    "marsh_of_mirrors_fill_29_14",
    "marsh_of_mirrors_fill_29_15",
    "marsh_of_mirrors_fill_29_16",
    "marsh_of_mirrors_fill_29_17",
    "marsh_of_mirrors_fill_29_18",
    "marsh_of_mirrors_fill_29_19",
    "marsh_of_mirrors_fill_30_13",
    "marsh_of_mirrors_fill_30_14",
    "marsh_of_mirrors_fill_30_15",
    "marsh_of_mirrors_fill_30_16",
    "marsh_of_mirrors_fill_30_17",
    "marsh_of_mirrors_fill_30_18",
    "marsh_of_mirrors_fill_30_19"
  ],
  "mist_harbor": [
    "mist_harbor_fill_40_0",
    "mist_harbor_fill_40_1",
    "mist_harbor_fill_40_3",
    "mist_harbor_fill_40_4",
    "mist_harbor_fill_40_5",
    "mist_harbor_fill_40_n1",
    "mist_harbor_fill_41_n1",
    "mist_harbor_fill_42_5",
    "mist_harbor_fill_43_0",
    "mist_harbor_fill_43_4",
    "mist_harbor_fill_43_5",
    "mist_harbor_fill_44_0",
    "mist_harbor_fill_44_3",
    "mist_harbor_fill_44_4",
    "mist_harbor_fill_44_5",
    "mist_harbor_fill_44_n1",
    "mist_harbor_fill_45_0",
    "mist_harbor_fill_45_2",
    "mist_harbor_fill_45_3",
    "mist_harbor_fill_45_4",
    "mist_harbor_fill_45_5",
    "mist_harbor_fill_45_n1",
    "mist_harbor_fill_46_0",
    "mist_harbor_fill_46_3",
    "mist_harbor_fill_46_4",
    "mist_harbor_fill_46_5",
    "mist_harbor_fill_46_n1",
    "mist_harbor_fill_47_0",
    "mist_harbor_fill_47_1",
    "mist_harbor_fill_47_2",
    "mist_harbor_fill_47_3",
    "mist_harbor_fill_47_4",
    "mist_harbor_fill_47_5",
    "mist_harbor_fill_47_n1"
  ],
  "moonlit_fen": [
    "moonlit_fen_fill_18_13",
    "moonlit_fen_fill_19_13",
    "moonlit_fen_fill_20_13",
    "moonlit_fen_fill_14_14",
    "moonlit_fen_fill_14_17",
    "moonlit_fen_fill_14_18",
    "moonlit_fen_fill_14_19",
    "moonlit_fen_fill_14_20",
    "moonlit_fen_fill_15_17",
    "moonlit_fen_fill_15_18",
    "moonlit_fen_fill_15_19",
    "moonlit_fen_fill_15_20",
    "moonlit_fen_fill_16_17",
    "moonlit_fen_fill_16_18",
    "moonlit_fen_fill_16_19",
    "moonlit_fen_fill_16_20",
    "moonlit_fen_fill_17_17",
    "moonlit_fen_fill_17_18",
    "moonlit_fen_fill_17_19",
    "moonlit_fen_fill_17_20",
    "moonlit_fen_fill_18_17",
    "moonlit_fen_fill_18_18",
    "moonlit_fen_fill_18_19",
    "moonlit_fen_fill_18_20",
    "moonlit_fen_fill_19_17",
    "moonlit_fen_fill_19_18",
    "moonlit_fen_fill_19_19",
    "moonlit_fen_fill_19_20",
    "moonlit_fen_fill_20_14",
    "moonlit_fen_fill_20_16",
    "moonlit_fen_fill_20_17",
    "moonlit_fen_fill_20_18",
    "moonlit_fen_fill_20_19",
    "moonlit_fen_fill_20_20",
    "moonlit_fen_fill_21_14",
    "moonlit_fen_fill_21_16",
    "moonlit_fen_fill_21_17",
    "moonlit_fen_fill_21_18",
    "moonlit_fen_fill_21_19",
    "moonlit_fen_fill_21_20",
    "moonlit_fen_fill_22_14",
    "moonlit_fen_fill_22_16",
    "moonlit_fen_fill_22_17",
    "moonlit_fen_fill_22_18",
    "moonlit_fen_fill_22_19",
    "moonlit_fen_fill_22_20",
    "moonlit_fen_fill_23_14",
    "moonlit_fen_fill_23_15",
    "moonlit_fen_fill_23_16",
    "moonlit_fen_fill_23_17",
    "moonlit_fen_fill_23_18",
    "moonlit_fen_fill_23_19",
    "moonlit_fen_fill_23_20"
  ],
  "old_farmland": [
    "old_farmland_fill_n1_0",
    "old_farmland_fill_n1_1",
    "old_farmland_fill_n1_2",
    "old_farmland_fill_n1_3",
    "old_farmland_fill_n1_4",
    "old_farmland_fill_n1_n1",
    "old_farmland_fill_n2_0",
    "old_farmland_fill_n2_1",
    "old_farmland_fill_n2_2",
    "old_farmland_fill_n2_3",
    "old_farmland_fill_n2_4",
    "old_farmland_fill_n2_n1",
    "old_farmland_fill_n3_0",
    "old_farmland_fill_n3_1",
    "old_farmland_fill_n3_2",
    "old_farmland_fill_n3_3",
    "old_farmland_fill_n3_4",
    "old_farmland_fill_n3_n1",
    "old_farmland_fill_n4_1",
    "old_farmland_fill_n4_4",
    "old_farmland_fill_n4_n1",
    "old_farmland_fill_n5_n1",
    "old_farmland_fill_n6_3",
    "old_farmland_fill_n6_4",
    "old_farmland_fill_n6_n1",
    "old_farmland_fill_n7_n1",
    "old_farmland_fill_n8_3",
    "old_farmland_fill_n8_4"
  ],
  "pilgrim_road": [
    "pilgrim_road_fill_10_10",
    "pilgrim_road_fill_10_11",
    "pilgrim_road_fill_10_12",
    "pilgrim_road_fill_10_9",
    "pilgrim_road_fill_11_10",
    "pilgrim_road_fill_11_11",
    "pilgrim_road_fill_11_12",
    "pilgrim_road_fill_11_9",
    "pilgrim_road_fill_12_10",
    "pilgrim_road_fill_12_11",
    "pilgrim_road_fill_12_12",
    "pilgrim_road_fill_12_9",
    "pilgrim_road_fill_13_11",
    "pilgrim_road_fill_13_12",
    "pilgrim_road_fill_13_6",
    "pilgrim_road_fill_13_9",
    "pilgrim_road_fill_8_10",
    "pilgrim_road_fill_8_11",
    "pilgrim_road_fill_8_12",
    "pilgrim_road_fill_8_6",
    "pilgrim_road_fill_8_9",
    "pilgrim_road_fill_9_10",
    "pilgrim_road_fill_9_11",
    "pilgrim_road_fill_9_12",
    "pilgrim_road_fill_9_9"
  ],
  "plains": [
    "plains_fill_10_5",
    "plains_fill_11_0",
    "plains_fill_11_4",
    "plains_fill_11_5",
    "plains_fill_12_0",
    "plains_fill_12_1",
    "plains_fill_12_2",
    "plains_fill_12_3",
    "plains_fill_12_4",
    "plains_fill_12_5",
    "plains_fill_13_0",
    "plains_fill_13_1",
    "plains_fill_13_2",
    "plains_fill_13_3",
    "plains_fill_13_4",
    "plains_fill_13_5",
    "plains_fill_14_0",
    "plains_fill_14_1",
    "plains_fill_14_2",
    "plains_fill_14_3",
    "plains_fill_14_4",
    "plains_fill_14_5",
    "plains_fill_7_0",
    "plains_fill_7_1",
    "plains_fill_7_2",
    "plains_fill_8_0",
    "plains_fill_8_1",
    "plains_fill_9_5"
  ],
  "redrock_badlands": [
    "redrock_badlands_fill_0_19",
    "redrock_badlands_fill_0_23",
    "redrock_badlands_fill_0_24",
    "redrock_badlands_fill_0_25",
    "redrock_badlands_fill_n1_19",
    "redrock_badlands_fill_n1_20",
    "redrock_badlands_fill_n1_21",
    "redrock_badlands_fill_n1_22",
    "redrock_badlands_fill_n1_23",
    "redrock_badlands_fill_n1_24",
    "redrock_badlands_fill_n1_25",
    "redrock_badlands_fill_n2_19",
    "redrock_badlands_fill_n2_20",
    "redrock_badlands_fill_n2_21",
    "redrock_badlands_fill_n2_22",
    "redrock_badlands_fill_n2_23",
    "redrock_badlands_fill_n2_24",
    "redrock_badlands_fill_n2_25",
    "redrock_badlands_fill_n3_20",
    "redrock_badlands_fill_n3_24",
    "redrock_badlands_fill_n3_25",
    "redrock_badlands_fill_n4_19",
    "redrock_badlands_fill_n4_23",
    "redrock_badlands_fill_n4_24",
    "redrock_badlands_fill_n4_25",
    "redrock_badlands_fill_n5_19",
    "redrock_badlands_fill_n5_23",
    "redrock_badlands_fill_n5_24",
    "redrock_badlands_fill_n5_25",
    "redrock_badlands_fill_n6_21",
    "redrock_badlands_fill_n6_23",
    "redrock_badlands_fill_n6_25",
    "redrock_badlands_fill_n7_19",
    "redrock_badlands_fill_n7_24",
    "redrock_badlands_fill_n7_25",
    "redrock_badlands_fill_n8_20",
    "redrock_badlands_fill_n8_21",
    "redrock_badlands_fill_n8_24",
    "redrock_badlands_fill_n8_25"
  ],
  "royal_hunting_grounds": [
    "royal_hunting_grounds_fill_n2_n2",
    "royal_hunting_grounds_fill_n2_n3",
    "royal_hunting_grounds_fill_n2_n4",
    "royal_hunting_grounds_fill_n2_n5",
    "royal_hunting_grounds_fill_n2_n6",
    "royal_hunting_grounds_fill_n2_n7",
    "royal_hunting_grounds_fill_n3_n2",
    "royal_hunting_grounds_fill_n3_n3",
    "royal_hunting_grounds_fill_n3_n4",
    "royal_hunting_grounds_fill_n3_n5",
    "royal_hunting_grounds_fill_n3_n6",
    "royal_hunting_grounds_fill_n3_n7",
    "royal_hunting_grounds_fill_n4_n2",
    "royal_hunting_grounds_fill_n4_n3",
    "royal_hunting_grounds_fill_n4_n4",
    "royal_hunting_grounds_fill_n4_n5",
    "royal_hunting_grounds_fill_n5_n2",
    "royal_hunting_grounds_fill_n5_n3",
    "royal_hunting_grounds_fill_n5_n5",
    "royal_hunting_grounds_fill_n6_n2",
    "royal_hunting_grounds_fill_n6_n3",
    "royal_hunting_grounds_fill_n6_n4",
    "royal_hunting_grounds_fill_n7_n2",
    "royal_hunting_grounds_fill_n7_n3",
    "royal_hunting_grounds_fill_n8_n2",
    "royal_hunting_grounds_fill_n8_n3",
    "royal_hunting_grounds_fill_n9_n2",
    "royal_hunting_grounds_fill_n9_n3"
  ],
  "saltwind_flats": [
    "saltwind_flats_fill_31_10",
    "saltwind_flats_fill_31_11",
    "saltwind_flats_fill_31_12",
    "saltwind_flats_fill_31_7",
    "saltwind_flats_fill_32_12",
    "saltwind_flats_fill_32_7",
    "saltwind_flats_fill_33_10",
    "saltwind_flats_fill_33_11",
    "saltwind_flats_fill_33_12",
    "saltwind_flats_fill_34_10",
    "saltwind_flats_fill_34_11",
    "saltwind_flats_fill_34_12",
    "saltwind_flats_fill_34_13",
    "saltwind_flats_fill_35_10",
    "saltwind_flats_fill_35_11",
    "saltwind_flats_fill_35_12",
    "saltwind_flats_fill_35_13",
    "saltwind_flats_fill_36_10",
    "saltwind_flats_fill_36_11",
    "saltwind_flats_fill_36_12",
    "saltwind_flats_fill_36_13",
    "saltwind_flats_fill_37_11",
    "saltwind_flats_fill_37_12",
    "saltwind_flats_fill_37_13",
    "saltwind_flats_fill_37_7",
    "saltwind_flats_fill_37_8",
    "saltwind_flats_fill_38_11",
    "saltwind_flats_fill_38_12",
    "saltwind_flats_fill_38_13",
    "saltwind_flats_fill_38_7",
    "saltwind_flats_fill_38_8",
    "saltwind_flats_fill_38_9",
    "saltwind_flats_fill_39_10",
    "saltwind_flats_fill_39_11",
    "saltwind_flats_fill_39_12",
    "saltwind_flats_fill_39_13",
    "saltwind_flats_fill_39_7",
    "saltwind_flats_fill_39_8",
    "saltwind_flats_fill_39_9"
  ],
  "sapphire_lake": [
    "sapphire_lake_fill_14_10",
    "sapphire_lake_fill_14_11",
    "sapphire_lake_fill_14_12",
    "sapphire_lake_fill_14_13",
    "sapphire_lake_fill_15_11",
    "sapphire_lake_fill_15_12",
    "sapphire_lake_fill_15_13",
    "sapphire_lake_fill_16_11",
    "sapphire_lake_fill_16_12",
    "sapphire_lake_fill_16_13",
    "sapphire_lake_fill_17_11",
    "sapphire_lake_fill_17_12",
    "sapphire_lake_fill_17_13",
    "sapphire_lake_fill_17_9",
    "sapphire_lake_fill_18_11",
    "sapphire_lake_fill_18_12",
    "sapphire_lake_fill_19_10",
    "sapphire_lake_fill_19_11",
    "sapphire_lake_fill_19_12",
    "sapphire_lake_fill_20_10",
    "sapphire_lake_fill_20_11",
    "sapphire_lake_fill_20_12",
    "sapphire_lake_fill_20_7",
    "sapphire_lake_fill_21_10",
    "sapphire_lake_fill_21_11",
    "sapphire_lake_fill_21_12",
    "sapphire_lake_fill_21_13",
    "sapphire_lake_fill_21_7",
    "sapphire_lake_fill_21_8",
    "sapphire_lake_fill_21_9",
    "sapphire_lake_fill_22_10",
    "sapphire_lake_fill_22_11",
    "sapphire_lake_fill_22_12",
    "sapphire_lake_fill_22_13",
    "sapphire_lake_fill_22_7",
    "sapphire_lake_fill_22_8",
    "sapphire_lake_fill_22_9"
  ],
  "serpent_delta": [
    "serpent_delta_fill_31_13",
    "serpent_delta_fill_31_15",
    "serpent_delta_fill_31_17",
    "serpent_delta_fill_31_18",
    "serpent_delta_fill_31_19",
    "serpent_delta_fill_32_13",
    "serpent_delta_fill_32_18",
    "serpent_delta_fill_32_19",
    "serpent_delta_fill_32_20",
    "serpent_delta_fill_33_13",
    "serpent_delta_fill_33_19",
    "serpent_delta_fill_33_20",
    "serpent_delta_fill_34_14",
    "serpent_delta_fill_34_19",
    "serpent_delta_fill_34_20",
    "serpent_delta_fill_35_14",
    "serpent_delta_fill_35_15",
    "serpent_delta_fill_35_19",
    "serpent_delta_fill_35_20",
    "serpent_delta_fill_36_14",
    "serpent_delta_fill_36_15",
    "serpent_delta_fill_36_16",
    "serpent_delta_fill_36_17",
    "serpent_delta_fill_36_19",
    "serpent_delta_fill_36_20",
    "serpent_delta_fill_37_14",
    "serpent_delta_fill_37_15",
    "serpent_delta_fill_37_16",
    "serpent_delta_fill_37_17",
    "serpent_delta_fill_37_19",
    "serpent_delta_fill_37_20",
    "serpent_delta_fill_38_14",
    "serpent_delta_fill_38_15",
    "serpent_delta_fill_38_16",
    "serpent_delta_fill_38_17",
    "serpent_delta_fill_38_19",
    "serpent_delta_fill_38_20",
    "serpent_delta_fill_39_14",
    "serpent_delta_fill_39_15",
    "serpent_delta_fill_39_16",
    "serpent_delta_fill_39_17",
    "serpent_delta_fill_39_18",
    "serpent_delta_fill_39_19",
    "serpent_delta_fill_39_20"
  ],
  "silverpine_range": [
    "silverpine_range_fill_0_n10",
    "silverpine_range_fill_0_n12",
    "silverpine_range_fill_0_n13",
    "silverpine_range_fill_0_n14",
    "silverpine_range_fill_0_n8",
    "silverpine_range_fill_0_n9",
    "silverpine_range_fill_n1_n10",
    "silverpine_range_fill_n1_n11",
    "silverpine_range_fill_n1_n12",
    "silverpine_range_fill_n1_n13",
    "silverpine_range_fill_n1_n14",
    "silverpine_range_fill_n1_n8",
    "silverpine_range_fill_n1_n9",
    "silverpine_range_fill_n2_n10",
    "silverpine_range_fill_n2_n11",
    "silverpine_range_fill_n2_n12",
    "silverpine_range_fill_n2_n13",
    "silverpine_range_fill_n2_n14",
    "silverpine_range_fill_n2_n8",
    "silverpine_range_fill_n2_n9",
    "silverpine_range_fill_n3_n14",
    "silverpine_range_fill_n3_n8",
    "silverpine_range_fill_n4_n10",
    "silverpine_range_fill_n4_n14",
    "silverpine_range_fill_n4_n8",
    "silverpine_range_fill_n4_n9",
    "silverpine_range_fill_n5_n10",
    "silverpine_range_fill_n5_n8",
    "silverpine_range_fill_n5_n9",
    "silverpine_range_fill_n6_n10",
    "silverpine_range_fill_n6_n11",
    "silverpine_range_fill_n6_n14",
    "silverpine_range_fill_n6_n8",
    "silverpine_range_fill_n6_n9",
    "silverpine_range_fill_n7_n14",
    "silverpine_range_fill_n7_n8",
    "silverpine_range_fill_n7_n9",
    "silverpine_range_fill_n8_n10",
    "silverpine_range_fill_n8_n11",
    "silverpine_range_fill_n8_n14",
    "silverpine_range_fill_n8_n8",
    "silverpine_range_fill_n8_n9",
    "silverpine_storm_pass"
  ],
  "starter_village": [
    "starter_village_fill_0_4",
    "starter_village_fill_0_5",
    "starter_village_fill_1_3",
    "starter_village_fill_1_4",
    "starter_village_fill_1_5",
    "starter_village_fill_2_5",
    "starter_village_fill_3_4",
    "starter_village_fill_3_5",
    "starter_village_fill_4_4",
    "starter_village_fill_4_5",
    "starter_village_fill_5_0",
    "starter_village_fill_5_1",
    "starter_village_fill_5_2",
    "starter_village_fill_5_3",
    "starter_village_fill_5_4",
    "starter_village_fill_5_5",
    "starter_village_fill_6_0",
    "starter_village_fill_6_1",
    "starter_village_fill_6_2",
    "starter_village_fill_6_3",
    "starter_village_fill_6_4",
    "starter_village_fill_6_5"
  ],
  "starter_village_ext": [
    "starter_village_ext_fill_0_n1",
    "starter_village_ext_fill_0_n2",
    "starter_village_ext_fill_0_n3",
    "starter_village_ext_fill_1_n1",
    "starter_village_ext_fill_1_n2",
    "starter_village_ext_fill_2_n1",
    "starter_village_ext_fill_3_n1",
    "starter_village_ext_fill_3_n6",
    "starter_village_ext_fill_4_n1",
    "starter_village_ext_fill_4_n6",
    "starter_village_ext_fill_5_n1",
    "starter_village_ext_fill_5_n2",
    "starter_village_ext_fill_5_n3",
    "starter_village_ext_fill_5_n4",
    "starter_village_ext_fill_5_n5",
    "starter_village_ext_fill_5_n6",
    "starter_village_ext_fill_6_n1",
    "starter_village_ext_fill_6_n2",
    "starter_village_ext_fill_6_n3",
    "starter_village_ext_fill_6_n4",
    "starter_village_ext_fill_6_n5",
    "starter_village_ext_fill_6_n6"
  ],
  "storm_highlands": [
    "storm_highlands_windrest_portal",
    "storm_highlands_windrest_lane",
    "storm_highlands_windrest_lodge",
    "storm_highlands_fill_n10_n10",
    "storm_highlands_fill_n10_n11",
    "storm_highlands_fill_n10_n12",
    "storm_highlands_fill_n10_n13",
    "storm_highlands_fill_n10_n14",
    "storm_highlands_fill_n10_n15",
    "storm_highlands_fill_n10_n9",
    "storm_highlands_fill_n11_n10",
    "storm_highlands_fill_n11_n11",
    "storm_highlands_fill_n11_n12",
    "storm_highlands_fill_n11_n13",
    "storm_highlands_fill_n11_n15",
    "storm_highlands_fill_n11_n9",
    "storm_highlands_fill_n12_n10",
    "storm_highlands_fill_n12_n11",
    "storm_highlands_fill_n12_n12",
    "storm_highlands_fill_n12_n9",
    "storm_highlands_fill_n13_n10",
    "storm_highlands_fill_n13_n11",
    "storm_highlands_fill_n13_n12",
    "storm_highlands_fill_n13_n9",
    "storm_highlands_fill_n14_n10",
    "storm_highlands_fill_n14_n11",
    "storm_highlands_fill_n14_n12",
    "storm_highlands_fill_n14_n9",
    "storm_highlands_fill_n15_n10",
    "storm_highlands_fill_n15_n11",
    "storm_highlands_fill_n15_n12",
    "storm_highlands_fill_n15_n9",
    "storm_highlands_fill_n16_n10",
    "storm_highlands_fill_n16_n11",
    "storm_highlands_fill_n16_n12",
    "storm_highlands_fill_n16_n9",
    "storm_highlands_fill_n17_n10",
    "storm_highlands_fill_n17_n11",
    "storm_highlands_fill_n17_n12",
    "storm_highlands_fill_n17_n15",
    "storm_highlands_fill_n17_n9",
    "storm_highlands_fill_n18_n10",
    "storm_highlands_fill_n18_n11",
    "storm_highlands_fill_n18_n12",
    "storm_highlands_fill_n18_n15",
    "storm_highlands_fill_n18_n9"
  ],
  "thundersteppe": [
    "thundersteppe_fill_10_23",
    "thundersteppe_fill_10_24",
    "thundersteppe_fill_10_25",
    "thundersteppe_fill_11_21",
    "thundersteppe_fill_11_22",
    "thundersteppe_fill_11_26",
    "thundersteppe_fill_11_27",
    "thundersteppe_fill_12_21",
    "thundersteppe_fill_12_25",
    "thundersteppe_fill_12_26",
    "thundersteppe_fill_12_27",
    "thundersteppe_fill_13_25",
    "thundersteppe_fill_13_26",
    "thundersteppe_fill_13_27",
    "thundersteppe_fill_14_21",
    "thundersteppe_fill_14_25",
    "thundersteppe_fill_14_26",
    "thundersteppe_fill_14_27",
    "thundersteppe_fill_15_21",
    "thundersteppe_fill_15_24",
    "thundersteppe_fill_15_26",
    "thundersteppe_fill_15_27",
    "thundersteppe_fill_16_21",
    "thundersteppe_fill_16_24",
    "thundersteppe_fill_16_25",
    "thundersteppe_fill_16_26",
    "thundersteppe_fill_16_27",
    "thundersteppe_fill_17_21",
    "thundersteppe_fill_17_22",
    "thundersteppe_fill_17_24",
    "thundersteppe_fill_17_25",
    "thundersteppe_fill_17_26",
    "thundersteppe_fill_17_27",
    "thundersteppe_fill_18_21",
    "thundersteppe_fill_18_22",
    "thundersteppe_fill_18_24",
    "thundersteppe_fill_18_25",
    "thundersteppe_fill_18_26",
    "thundersteppe_fill_18_27",
    "thundersteppe_fill_19_21",
    "thundersteppe_fill_19_22",
    "thundersteppe_fill_19_23",
    "thundersteppe_fill_19_24",
    "thundersteppe_fill_19_25",
    "thundersteppe_fill_19_26",
    "thundersteppe_fill_19_27",
    "thundersteppe_fill_20_21",
    "thundersteppe_fill_20_22",
    "thundersteppe_fill_20_23",
    "thundersteppe_fill_20_24",
    "thundersteppe_fill_20_25",
    "thundersteppe_fill_20_26",
    "thundersteppe_fill_20_27"
  ],
  "volcano_zone": [
    "volcano_zone_fill_31_20",
    "volcano_zone_fill_31_22",
    "volcano_zone_fill_31_27",
    "volcano_zone_fill_32_25",
    "volcano_zone_fill_32_26",
    "volcano_zone_fill_32_27",
    "volcano_zone_fill_33_27",
    "volcano_zone_fill_34_24",
    "volcano_zone_fill_34_26",
    "volcano_zone_fill_34_27",
    "volcano_zone_fill_35_24",
    "volcano_zone_fill_35_25",
    "volcano_zone_fill_35_26",
    "volcano_zone_fill_35_27",
    "volcano_zone_fill_36_21",
    "volcano_zone_fill_36_22",
    "volcano_zone_fill_36_24",
    "volcano_zone_fill_36_25",
    "volcano_zone_fill_36_26",
    "volcano_zone_fill_36_27",
    "volcano_zone_fill_37_21",
    "volcano_zone_fill_37_22",
    "volcano_zone_fill_37_23",
    "volcano_zone_fill_37_24",
    "volcano_zone_fill_37_25",
    "volcano_zone_fill_37_26",
    "volcano_zone_fill_37_27",
    "volcano_zone_fill_38_21",
    "volcano_zone_fill_38_22",
    "volcano_zone_fill_38_23",
    "volcano_zone_fill_38_24",
    "volcano_zone_fill_38_25",
    "volcano_zone_fill_38_26",
    "volcano_zone_fill_38_27",
    "volcano_zone_fill_39_21",
    "volcano_zone_fill_39_22",
    "volcano_zone_fill_39_23",
    "volcano_zone_fill_39_24",
    "volcano_zone_fill_39_25",
    "volcano_zone_fill_39_26",
    "volcano_zone_fill_39_27"
  ],
  "whispering_valley": [
    "whispering_valley_fill_n1_10",
    "whispering_valley_fill_n1_11",
    "whispering_valley_fill_n1_5",
    "whispering_valley_fill_n1_6",
    "whispering_valley_fill_n1_7",
    "whispering_valley_fill_n1_8",
    "whispering_valley_fill_n1_9",
    "whispering_valley_fill_n2_10",
    "whispering_valley_fill_n2_11",
    "whispering_valley_fill_n2_5",
    "whispering_valley_fill_n2_6",
    "whispering_valley_fill_n2_7",
    "whispering_valley_fill_n2_8",
    "whispering_valley_fill_n2_9",
    "whispering_valley_fill_n3_10",
    "whispering_valley_fill_n3_11",
    "whispering_valley_fill_n3_8",
    "whispering_valley_fill_n3_9",
    "whispering_valley_fill_n4_10",
    "whispering_valley_fill_n4_11",
    "whispering_valley_fill_n4_6",
    "whispering_valley_fill_n4_7",
    "whispering_valley_fill_n4_9",
    "whispering_valley_fill_n5_11",
    "whispering_valley_fill_n6_10",
    "whispering_valley_fill_n7_10",
    "whispering_valley_fill_n7_11",
    "whispering_valley_fill_n7_6",
    "whispering_valley_fill_n7_7"
  ],
  "wildgrass_hills": [
    "wildgrass_hills_fill_1_n10",
    "wildgrass_hills_fill_1_n7",
    "wildgrass_hills_fill_1_n8",
    "wildgrass_hills_fill_2_n12",
    "wildgrass_hills_fill_2_n7",
    "wildgrass_hills_fill_3_n7",
    "wildgrass_hills_fill_3_n8",
    "wildgrass_hills_fill_4_n12",
    "wildgrass_hills_fill_4_n7",
    "wildgrass_hills_fill_4_n8",
    "wildgrass_hills_fill_5_n12",
    "wildgrass_hills_fill_5_n7",
    "wildgrass_hills_fill_5_n8",
    "wildgrass_hills_fill_6_n12",
    "wildgrass_hills_fill_6_n7",
    "wildgrass_hills_fill_6_n9",
    "wildgrass_hills_fill_7_n10",
    "wildgrass_hills_fill_7_n11",
    "wildgrass_hills_fill_7_n12",
    "wildgrass_hills_fill_7_n7",
    "wildgrass_hills_fill_7_n9",
    "wildgrass_hills_fill_8_n10",
    "wildgrass_hills_fill_8_n11",
    "wildgrass_hills_fill_8_n12",
    "wildgrass_hills_fill_8_n7",
    "wildgrass_hills_fill_8_n8",
    "wildgrass_hills_fill_8_n9"
  ]
};

export const STATIC_WORLD_ROOM_COORDINATES: Record<string, { worldX: number; worldY: number }> = {
  "abandoned_cottage": {
    "worldX": 0,
    "worldY": -6
  },
  "abandoned_minecart": {
    "worldX": 11,
    "worldY": 2
  },
  "abandoned_mines_entry_claim": {
    "worldX": -10,
    "worldY": -8
  },
  "abyss_entrance": {
    "worldX": 0,
    "worldY": 22
  },
  "adventurer_guild": {
    "worldX": 2,
    "worldY": 0
  },
  "amber_forest_beast_scrape": {
    "worldX": -13,
    "worldY": 6
  },
  "amber_forest_north_portal": {
    "worldX": -17,
    "worldY": 4
  },
  "amber_forest_resin_supply": {
    "worldX": -16,
    "worldY": 4
  },
  "amber_forest_north_bridge": {
    "worldX": -17,
    "worldY": 5
  },
  "amber_forest_charcoal_stand": {
    "worldX": -13,
    "worldY": 5
  },
  "amber_forest_deep_amber_core": {
    "worldX": -12,
    "worldY": 8
  },
  "amber_forest_elder_resin_tree": {
    "worldX": -16,
    "worldY": 10
  },
  "amber_forest_ember_beetle_mound": {
    "worldX": -13,
    "worldY": 7
  },
  "amber_forest_entry_claim": {
    "worldX": -17,
    "worldY": 6
  },
  "amber_forest_fill_n11_6": {
    "worldX": -11,
    "worldY": 6
  },
  "amber_forest_fill_n11_8": {
    "worldX": -11,
    "worldY": 8
  },
  "amber_forest_fill_n12_5": {
    "worldX": -12,
    "worldY": 5
  },
  "amber_forest_fill_n13_10": {
    "worldX": -13,
    "worldY": 10
  },
  "amber_forest_fill_n13_11": {
    "worldX": -13,
    "worldY": 11
  },
  "amber_forest_fill_n13_8": {
    "worldX": -13,
    "worldY": 8
  },
  "amber_forest_fill_n13_9": {
    "worldX": -13,
    "worldY": 9
  },
  "amber_forest_fill_n15_8": {
    "worldX": -15,
    "worldY": 8
  },
  "amber_forest_fill_n16_5": {
    "worldX": -16,
    "worldY": 5
  },
  "amber_forest_fill_n17_8": {
    "worldX": -17,
    "worldY": 8
  },
  "amber_forest_glassroot_bridge": {
    "worldX": -16,
    "worldY": 8
  },
  "amber_forest_glowing_hollow": {
    "worldX": -16,
    "worldY": 9
  },
  "amber_forest_golden_canopy": {
    "worldX": -16,
    "worldY": 7
  },
  "amber_forest_herb_shelf": {
    "worldX": -15,
    "worldY": 6
  },
  "amber_forest_hunter_blind": {
    "worldX": -12,
    "worldY": 7
  },
  "amber_forest_petrified_bloom": {
    "worldX": -11,
    "worldY": 7
  },
  "amber_forest_relic_pit": {
    "worldX": -12,
    "worldY": 6
  },
  "amber_forest_resin_gate": {
    "worldX": -17,
    "worldY": 7
  },
  "amber_forest_sapfall_gully": {
    "worldX": -14,
    "worldY": 5
  },
  "amber_forest_smoke_mycology": {
    "worldX": -15,
    "worldY": 5
  },
  "amber_forest_suntrap_clearing": {
    "worldX": -14,
    "worldY": 7
  },
  "amber_forest_vein_path": {
    "worldX": -16,
    "worldY": 6
  },
  "amber_forest_wasp_nests": {
    "worldX": -15,
    "worldY": 7
  },
  "amber_forest_water_pocket": {
    "worldX": -14,
    "worldY": 6
  },
  "ancient_ruins_sunken_entrance": {
    "worldX": 13,
    "worldY": 10
  },
  "ancient_treehouse": {
    "worldX": -5,
    "worldY": 12
  },
  "arena_entrance": {
    "worldX": 17,
    "worldY": 5
  },
  "arena_quarter_armor_rack_lane": {
    "worldX": 24,
    "worldY": 9
  },
  "arena_quarter_betting_house": {
    "worldX": 25,
    "worldY": 7
  },
  "arena_quarter_center_arena": {
    "worldX": 26,
    "worldY": 11
  },
  "arena_quarter_champion_wall": {
    "worldX": 23,
    "worldY": 8
  },
  "arena_quarter_duel_ring_east": {
    "worldX": 26,
    "worldY": 8
  },
  "arena_quarter_duel_ring_west": {
    "worldX": 25,
    "worldY": 8
  },
  "arena_quarter_fill_24_10": {
    "worldX": 24,
    "worldY": 10
  },
  "arena_quarter_fill_24_6": {
    "worldX": 24,
    "worldY": 6
  },
  "arena_quarter_fill_25_11": {
    "worldX": 25,
    "worldY": 11
  },
  "arena_quarter_fill_25_12": {
    "worldX": 25,
    "worldY": 12
  },
  "arena_quarter_fill_26_12": {
    "worldX": 26,
    "worldY": 12
  },
  "arena_quarter_fill_26_6": {
    "worldX": 26,
    "worldY": 6
  },
  "arena_quarter_fill_27_10": {
    "worldX": 27,
    "worldY": 10
  },
  "arena_quarter_fill_27_12": {
    "worldX": 27,
    "worldY": 12
  },
  "arena_quarter_fill_28_12": {
    "worldX": 28,
    "worldY": 12
  },
  "arena_quarter_fill_28_8": {
    "worldX": 28,
    "worldY": 8
  },
  "arena_quarter_fill_29_8": {
    "worldX": 29,
    "worldY": 8
  },
  "arena_quarter_fill_30_10": {
    "worldX": 30,
    "worldY": 10
  },
  "arena_quarter_fill_30_11": {
    "worldX": 30,
    "worldY": 11
  },
  "arena_quarter_fill_30_7": {
    "worldX": 30,
    "worldY": 7
  },
  "arena_quarter_fill_30_8": {
    "worldX": 30,
    "worldY": 8
  },
  "arena_quarter_fill_30_9": {
    "worldX": 30,
    "worldY": 9
  },
  "arena_quarter_grand_gate": {
    "worldX": 23,
    "worldY": 7
  },
  "arena_quarter_healer_bench": {
    "worldX": 27,
    "worldY": 7
  },
  "arena_quarter_lower_stands": {
    "worldX": 27,
    "worldY": 8
  },
  "arena_quarter_private_boxes": {
    "worldX": 26,
    "worldY": 10
  },
  "arena_quarter_prize_counter": {
    "worldX": 25,
    "worldY": 6
  },
  "arena_quarter_referee_box": {
    "worldX": 26,
    "worldY": 9
  },
  "arena_quarter_roar_tavern": {
    "worldX": 28,
    "worldY": 7
  },
  "arena_quarter_strategy_tables": {
    "worldX": 25,
    "worldY": 10
  },
  "arena_quarter_ticket_colonnade": {
    "worldX": 24,
    "worldY": 7
  },
  "arena_quarter_training_yard": {
    "worldX": 25,
    "worldY": 9
  },
  "arena_quarter_upper_stands": {
    "worldX": 27,
    "worldY": 9
  },
  "arena_quarter_victory_arch": {
    "worldX": 23,
    "worldY": 9
  },
  "arena_quarter_warmup_sand": {
    "worldX": 26,
    "worldY": 7
  },
  "arena_quarter_weapon_check": {
    "worldX": 24,
    "worldY": 8
  },
  "ashfall_monastery_ash_gate": {
    "worldX": 33,
    "worldY": 26
  },
  "astral_wastes_reality_gate": {
    "worldX": -25,
    "worldY": -24
  },
  "auction_house": {
    "worldX": 18,
    "worldY": 4
  },
  "aurora_field": {
    "worldX": -27,
    "worldY": -19
  },
  "blackwood_ash_path": {
    "worldX": -16,
    "worldY": 14
  },
  "blackwood_black_moss_bed": {
    "worldX": -16,
    "worldY": 13
  },
  "blackwood_bone_chimes": {
    "worldX": -14,
    "worldY": 13
  },
  "blackwood_burnt_totem": {
    "worldX": -12,
    "worldY": 14
  },
  "blackwood_charcoal_gate": {
    "worldX": -17,
    "worldY": 14
  },
  "blackwood_dark_elf_blind": {
    "worldX": -14,
    "worldY": 15
  },
  "blackwood_elder_ring": {
    "worldX": -11,
    "worldY": 14
  },
  "blackwood_fallen_shrine": {
    "worldX": -12,
    "worldY": 12
  },
  "blackwood_fill_n11_15": {
    "worldX": -11,
    "worldY": 15
  },
  "blackwood_fill_n12_13": {
    "worldX": -12,
    "worldY": 13
  },
  "blackwood_fill_n13_13": {
    "worldX": -13,
    "worldY": 13
  },
  "blackwood_fill_n15_12": {
    "worldX": -15,
    "worldY": 12
  },
  "blackwood_fill_n17_13": {
    "worldX": -17,
    "worldY": 13
  },
  "blackwood_heartwood_core": {
    "worldX": -10,
    "worldY": 14
  },
  "blackwood_hollow_log_bridge": {
    "worldX": -12,
    "worldY": 15
  },
  "blackwood_hunter_marker": {
    "worldX": -17,
    "worldY": 15
  },
  "blackwood_moonless_glade": {
    "worldX": -14,
    "worldY": 12
  },
  "blackwood_moving_copse": {
    "worldX": -15,
    "worldY": 14
  },
  "blackwood_poison_fern": {
    "worldX": -13,
    "worldY": 15
  },
  "blackwood_raven_roost": {
    "worldX": -16,
    "worldY": 15
  },
  "blackwood_root_maze": {
    "worldX": -14,
    "worldY": 14
  },
  "blackwood_sap_pool": {
    "worldX": -13,
    "worldY": 14
  },
  "blackwood_webbed_crossing": {
    "worldX": -15,
    "worldY": 15
  },
  "blackwood_witch_hollow": {
    "worldX": -15,
    "worldY": 13
  },
  "blackwood_wolf_den": {
    "worldX": -13,
    "worldY": 12
  },
  "blizzard_path": {
    "worldX": -27,
    "worldY": -22
  },
  "bloodsalt_coast_blood_altar_ledge": {
    "worldX": 43,
    "worldY": 8
  },
  "bloodsalt_coast_bone_net_shoal": {
    "worldX": 41,
    "worldY": 7
  },
  "bloodsalt_coast_brine_cut_path": {
    "worldX": 40,
    "worldY": 8
  },
  "bloodsalt_coast_crimson_tide_pool": {
    "worldX": 43,
    "worldY": 7
  },
  "bloodsalt_coast_drowned_watchtower": {
    "worldX": 41,
    "worldY": 9
  },
  "bloodsalt_coast_entrance_tidegate": {
    "worldX": 40,
    "worldY": 6
  },
  "bloodsalt_coast_fill_40_7": {
    "worldX": 40,
    "worldY": 7
  },
  "bloodsalt_coast_fill_40_9": {
    "worldX": 40,
    "worldY": 9
  },
  "bloodsalt_coast_fill_41_10": {
    "worldX": 41,
    "worldY": 10
  },
  "bloodsalt_coast_fill_43_6": {
    "worldX": 43,
    "worldY": 6
  },
  "bloodsalt_coast_fill_44_7": {
    "worldX": 44,
    "worldY": 7
  },
  "bloodsalt_coast_fill_45_9": {
    "worldX": 45,
    "worldY": 9
  },
  "bloodsalt_coast_fill_47_9": {
    "worldX": 47,
    "worldY": 9
  },
  "bloodsalt_coast_ghost_keel_grave": {
    "worldX": 43,
    "worldY": 10
  },
  "bloodsalt_coast_ice_dark_surge": {
    "worldX": 44,
    "worldY": 9
  },
  "bloodsalt_coast_pirate_beacon": {
    "worldX": 42,
    "worldY": 7
  },
  "bloodsalt_coast_razor_clam_beds": {
    "worldX": 42,
    "worldY": 9
  },
  "bloodsalt_coast_red_coral_labyrinth": {
    "worldX": 44,
    "worldY": 10
  },
  "bloodsalt_coast_red_salt_flats": {
    "worldX": 41,
    "worldY": 6
  },
  "bloodsalt_coast_reef_fishing_post": {
    "worldX": 42,
    "worldY": 8
  },
  "bloodsalt_coast_ritual_reef_core": {
    "worldX": 46,
    "worldY": 10
  },
  "bloodsalt_coast_saltglass_cave": {
    "worldX": 41,
    "worldY": 8
  },
  "bloodsalt_coast_sharktooth_pass": {
    "worldX": 43,
    "worldY": 9
  },
  "bloodsalt_coast_smuggler_cove": {
    "worldX": 44,
    "worldY": 8
  },
  "bloodsalt_coast_tithe_of_blood_pier": {
    "worldX": 45,
    "worldY": 10
  },
  "bloodsalt_coast_warflag_dune": {
    "worldX": 42,
    "worldY": 10
  },
  "bloodsalt_coast_wreckers_marker": {
    "worldX": 42,
    "worldY": 6
  },
  "cave_entrance": {
    "worldX": 0,
    "worldY": -11
  },
  "celestial_gate": {
    "worldX": 46,
    "worldY": 1
  },
  "class_change_hall": {
    "worldX": 17,
    "worldY": 3
  },
  "cliff_path": {
    "worldX": 34,
    "worldY": 1
  },
  "coastal_boardwalk": {
    "worldX": 32,
    "worldY": 0
  },
  "coral_shallows": {
    "worldX": 33,
    "worldY": 2
  },
  "crossroads": {
    "worldX": 9,
    "worldY": 4
  },
  "crystal_ice_cave": {
    "worldX": -26,
    "worldY": -21
  },
  "cursed_graveyard_iron_gate": {
    "worldX": -8,
    "worldY": 19
  },
  "dark_forest_bramble_maze": {
    "worldX": -4,
    "worldY": 15
  },
  "dark_forest_elder_grove": {
    "worldX": -6,
    "worldY": 16
  },
  "dark_forest_fill_n1_13": {
    "worldX": -1,
    "worldY": 13
  },
  "dark_forest_fill_n1_14": {
    "worldX": -1,
    "worldY": 14
  },
  "dark_forest_fill_n1_15": {
    "worldX": -1,
    "worldY": 15
  },
  "dark_forest_fill_n1_16": {
    "worldX": -1,
    "worldY": 16
  },
  "dark_forest_fill_n2_14": {
    "worldX": -2,
    "worldY": 14
  },
  "dark_forest_fill_n3_14": {
    "worldX": -3,
    "worldY": 14
  },
  "dark_forest_fill_n4_12": {
    "worldX": -4,
    "worldY": 12
  },
  "dark_forest_fill_n4_14": {
    "worldX": -4,
    "worldY": 14
  },
  "dark_forest_fill_n4_16": {
    "worldX": -4,
    "worldY": 16
  },
  "dark_forest_fill_n4_17": {
    "worldX": -4,
    "worldY": 17
  },
  "dark_forest_fill_n4_18": {
    "worldX": -4,
    "worldY": 18
  },
  "dark_forest_fill_n7_16": {
    "worldX": -7,
    "worldY": 16
  },
  "dark_forest_hunter_blind": {
    "worldX": -4,
    "worldY": 13
  },
  "dark_forest_moonwell": {
    "worldX": -8,
    "worldY": 15
  },
  "dark_forest_raven_perch": {
    "worldX": -8,
    "worldY": 12
  },
  "dark_forest_root_bridge": {
    "worldX": -5,
    "worldY": 15
  },
  "dark_forest_shadow_clearing": {
    "worldX": -5,
    "worldY": 16
  },
  "dark_forest_spider_web": {
    "worldX": -5,
    "worldY": 14
  },
  "dark_forest_witch_hut": {
    "worldX": -8,
    "worldY": 14
  },
  "dark_reef": {
    "worldX": 33,
    "worldY": 4
  },
  "dark_treehollow": {
    "worldX": -7,
    "worldY": 15
  },
  "darkwood_border_trail": {
    "worldX": -9,
    "worldY": 14
  },
  "deep_forest": {
    "worldX": -6,
    "worldY": 14
  },
  "deep_poison_swamp": {
    "worldX": -8,
    "worldY": 13
  },
  "deepsea_temple_tide_gate": {
    "worldX": 48,
    "worldY": 9
  },
  "demon_border": {
    "worldX": -19,
    "worldY": -15
  },
  "dense_trail": {
    "worldX": -6,
    "worldY": 13
  },
  "dragon_valley_entrance": {
    "worldX": -26,
    "worldY": 11
  },
  "dwarf_mine": {
    "worldX": 33,
    "worldY": 21
  },
  "eastern_coast_broken_pier": {
    "worldX": 34,
    "worldY": 0
  },
  "eastern_coast_fill_31_0": {
    "worldX": 31,
    "worldY": 0
  },
  "eastern_coast_fill_31_3": {
    "worldX": 31,
    "worldY": 3
  },
  "eastern_coast_fill_34_4": {
    "worldX": 34,
    "worldY": 4
  },
  "eastern_coast_fill_34_5": {
    "worldX": 34,
    "worldY": 5
  },
  "eastern_coast_fill_34_6": {
    "worldX": 34,
    "worldY": 6
  },
  "eastern_coast_fill_35_0": {
    "worldX": 35,
    "worldY": 0
  },
  "eastern_coast_fill_36_2": {
    "worldX": 36,
    "worldY": 2
  },
  "eastern_coast_fill_37_2": {
    "worldX": 37,
    "worldY": 2
  },
  "eastern_coast_fill_38_2": {
    "worldX": 38,
    "worldY": 2
  },
  "eastern_coast_fill_39_2": {
    "worldX": 39,
    "worldY": 2
  },
  "eastern_coast_pearl_bed": {
    "worldX": 34,
    "worldY": 2
  },
  "eastern_coast_pirate_cache": {
    "worldX": 35,
    "worldY": 3
  },
  "eastern_coast_seaweed_flats": {
    "worldX": 31,
    "worldY": 1
  },
  "eastern_coast_serpent_nest": {
    "worldX": 35,
    "worldY": 2
  },
  "eastern_coast_smugglers_cove": {
    "worldX": 35,
    "worldY": 1
  },
  "eastern_coast_stormwatch_ledge": {
    "worldX": 36,
    "worldY": 1
  },
  "eastern_coast_tidepool_grotto": {
    "worldX": 31,
    "worldY": 2
  },
  "elf_altar": {
    "worldX": -5,
    "worldY": 13
  },
  "elf_ruins": {
    "worldX": -6,
    "worldY": 15
  },
  "ember_march_ash_gate": {
    "worldX": 21,
    "worldY": 22
  },
  "ember_march_black_sand_basin": {
    "worldX": 25,
    "worldY": 22
  },
  "ember_march_bonekiln_pass": {
    "worldX": 26,
    "worldY": 22
  },
  "ember_march_border_keep_shell": {
    "worldX": 28,
    "worldY": 23
  },
  "ember_march_burnt_watchpost": {
    "worldX": 21,
    "worldY": 23
  },
  "ember_march_charred_milestone": {
    "worldX": 22,
    "worldY": 23
  },
  "ember_march_cinder_road": {
    "worldX": 22,
    "worldY": 22
  },
  "ember_march_dragonprint_ridge": {
    "worldX": 27,
    "worldY": 22
  },
  "ember_march_ember_forge": {
    "worldX": 25,
    "worldY": 23
  },
  "ember_march_fallen_banner": {
    "worldX": 26,
    "worldY": 23
  },
  "ember_march_fill_22_21": {
    "worldX": 22,
    "worldY": 21
  },
  "ember_march_fill_22_24": {
    "worldX": 22,
    "worldY": 24
  },
  "ember_march_south_portal": {
    "worldX": 22,
    "worldY": 25
  },
  "ember_march_south_shelter": {
    "worldX": 22,
    "worldY": 26
  },
  "ember_march_south_supply": {
    "worldX": 23,
    "worldY": 25
  },
  "ember_march_fill_26_21": {
    "worldX": 26,
    "worldY": 21
  },
  "ember_march_fill_28_22": {
    "worldX": 28,
    "worldY": 22
  },
  "ember_march_fill_30_21": {
    "worldX": 30,
    "worldY": 21
  },
  "ember_march_fill_30_23": {
    "worldX": 30,
    "worldY": 23
  },
  "ember_march_fill_30_24": {
    "worldX": 30,
    "worldY": 24
  },
  "ember_march_firegrass_flat": {
    "worldX": 23,
    "worldY": 21
  },
  "ember_march_glass_ash_field": {
    "worldX": 21,
    "worldY": 24
  },
  "ember_march_heartfire_breach": {
    "worldX": 29,
    "worldY": 23
  },
  "ember_march_lava_crack": {
    "worldX": 24,
    "worldY": 22
  },
  "ember_march_molten_toll": {
    "worldX": 27,
    "worldY": 23
  },
  "ember_march_scorched_oasis": {
    "worldX": 25,
    "worldY": 21
  },
  "ember_march_slag_bridge": {
    "worldX": 24,
    "worldY": 23
  },
  "ember_march_smoke_trench": {
    "worldX": 23,
    "worldY": 22
  },
  "ember_march_war_camp_ruin": {
    "worldX": 23,
    "worldY": 23
  },
  "ember_march_worm_burrow": {
    "worldX": 24,
    "worldY": 21
  },
  "emerald_canopy_ancient_bee_hive": {
    "worldX": -23,
    "worldY": 11
  },
  "emerald_canopy_birdfolk_roost": {
    "worldX": -24,
    "worldY": 8
  },
  "emerald_canopy_cloudroot_bridge": {
    "worldX": -22,
    "worldY": 11
  },
  "emerald_canopy_elite_patrol_perch": {
    "worldX": -23,
    "worldY": 10
  },
  "emerald_canopy_entrance_root_lift": {
    "worldX": -26,
    "worldY": 7
  },
  "emerald_canopy_fill_n18_7": {
    "worldX": -18,
    "worldY": 7
  },
  "emerald_canopy_fill_n19_7": {
    "worldX": -19,
    "worldY": 7
  },
  "emerald_canopy_fill_n20_7": {
    "worldX": -20,
    "worldY": 7
  },
  "emerald_canopy_fill_n21_10": {
    "worldX": -21,
    "worldY": 10
  },
  "emerald_canopy_fill_n21_7": {
    "worldX": -21,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_7": {
    "worldX": -22,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_8": {
    "worldX": -22,
    "worldY": 8
  },
  "emerald_canopy_fill_n23_7": {
    "worldX": -23,
    "worldY": 7
  },
  "emerald_canopy_fill_n25_11": {
    "worldX": -25,
    "worldY": 11
  },
  "emerald_canopy_fill_n26_10": {
    "worldX": -26,
    "worldY": 10
  },
  "emerald_canopy_fill_n26_8": {
    "worldX": -26,
    "worldY": 8
  },
  "emerald_canopy_firefly_bower": {
    "worldX": -26,
    "worldY": 9
  },
  "emerald_canopy_greenheart_span": {
    "worldX": -22,
    "worldY": 9
  },
  "emerald_canopy_hawk_watch": {
    "worldX": -23,
    "worldY": 9
  },
  "emerald_canopy_high_green_court": {
    "worldX": -20,
    "worldY": 11
  },
  "emerald_canopy_hollow_trunk_market": {
    "worldX": -24,
    "worldY": 11
  },
  "emerald_canopy_lightning_bark_shrine": {
    "worldX": -22,
    "worldY": 10
  },
  "emerald_canopy_moss_rope_walk": {
    "worldX": -24,
    "worldY": 7
  },
  "emerald_canopy_orchid_cache": {
    "worldX": -25,
    "worldY": 9
  },
  "emerald_canopy_raincatch_basin": {
    "worldX": -25,
    "worldY": 8
  },
  "emerald_canopy_sapfall_gully": {
    "worldX": -24,
    "worldY": 9
  },
  "emerald_canopy_stag_crown_clearing": {
    "worldX": -21,
    "worldY": 11
  },
  "emerald_canopy_storm_bough": {
    "worldX": -23,
    "worldY": 8
  },
  "emerald_canopy_sunleaf_garden": {
    "worldX": -24,
    "worldY": 10
  },
  "emerald_canopy_thorn_silk_nest": {
    "worldX": -25,
    "worldY": 10
  },
  "emerald_canopy_vine_bridge_low": {
    "worldX": -25,
    "worldY": 7
  },
  "final_battleground_war_gate": {
    "worldX": 31,
    "worldY": 26
  },
  "fire_temple_entrance": {
    "worldX": 33,
    "worldY": 24
  },
  "firefly_trail": {
    "worldX": -7,
    "worldY": 12
  },
  "fishing_dock": {
    "worldX": 33,
    "worldY": 0
  },
  "forest_entrance": {
    "worldX": -6,
    "worldY": 12
  },
  "forge_hall": {
    "worldX": 34,
    "worldY": 21
  },
  "frostbite_frozen_divide": {
    "worldX": -24,
    "worldY": -16
  },
  "frostbite_pass_blue_ice_bridge": {
    "worldX": -24,
    "worldY": -15
  },
  "frostbite_pass_bone_sled_path": {
    "worldX": -24,
    "worldY": -13
  },
  "frostbite_pass_buried_wagon": {
    "worldX": -25,
    "worldY": -14
  },
  "frostbite_pass_caravan_marker": {
    "worldX": -26,
    "worldY": -15
  },
  "frostbite_pass_coldfire_camp": {
    "worldX": -26,
    "worldY": -13
  },
  "frostbite_pass_crystal_fir_grove": {
    "worldX": -26,
    "worldY": -12
  },
  "frostbite_pass_dragon_breath_shelf": {
    "worldX": -22,
    "worldY": -13
  },
  "frostbite_pass_fill_n19_n12": {
    "worldX": -19,
    "worldY": -12
  },
  "frostbite_pass_fill_n19_n13": {
    "worldX": -19,
    "worldY": -13
  },
  "frostbite_pass_fill_n19_n14": {
    "worldX": -19,
    "worldY": -14
  },
  "frostbite_pass_fill_n20_n12": {
    "worldX": -20,
    "worldY": -12
  },
  "frostbite_pass_fill_n21_n12": {
    "worldX": -21,
    "worldY": -12
  },
  "frostbite_pass_fill_n22_n14": {
    "worldX": -22,
    "worldY": -14
  },
  "frostbite_pass_fill_n27_n14": {
    "worldX": -27,
    "worldY": -14
  },
  "frostbite_pass_frost_giant_steps": {
    "worldX": -23,
    "worldY": -13
  },
  "frostbite_pass_frozen_switchback": {
    "worldX": -26,
    "worldY": -14
  },
  "frostbite_pass_glacier_mouth": {
    "worldX": -23,
    "worldY": -15
  },
  "frostbite_pass_ice_cairn_field": {
    "worldX": -23,
    "worldY": -12
  },
  "frostbite_pass_icewind_cut": {
    "worldX": -25,
    "worldY": -15
  },
  "frostbite_pass_lost_merchant_cache": {
    "worldX": -24,
    "worldY": -12
  },
  "frostbite_pass_northbound_ridge": {
    "worldX": -22,
    "worldY": -12
  },
  "frostbite_pass_polar_seal_gate": {
    "worldX": -21,
    "worldY": -13
  },
  "frostbite_pass_sleet_watch": {
    "worldX": -23,
    "worldY": -14
  },
  "frostbite_pass_snow_gate": {
    "worldX": -27,
    "worldY": -15
  },
  "frostbite_pass_whiteout_basin": {
    "worldX": -25,
    "worldY": -13
  },
  "frostbite_pass_wind_howl_arch": {
    "worldX": -25,
    "worldY": -12
  },
  "frostbite_pass_yeti_scrape": {
    "worldX": -24,
    "worldY": -14
  },
  "frozen_lake": {
    "worldX": -27,
    "worldY": -20
  },
  "frozen_wastes_abandoned_sledge": {
    "worldX": -28,
    "worldY": -22
  },
  "frozen_wastes_crystal_spire": {
    "worldX": -25,
    "worldY": -19
  },
  "frozen_wastes_dragon_breath_rift": {
    "worldX": -25,
    "worldY": -18
  },
  "frozen_wastes_fill_n25_n23": {
    "worldX": -25,
    "worldY": -23
  },
  "frozen_wastes_fill_n26_n18": {
    "worldX": -26,
    "worldY": -18
  },
  "frozen_wastes_fill_n24_n17": {
    "worldX": -24,
    "worldY": -17
  },
  "frozen_wastes_fill_n24_n18": {
    "worldX": -24,
    "worldY": -18
  },
  "frozen_wastes_frostpine_grove": {
    "worldX": -25,
    "worldY": -22
  },
  "frozen_wastes_frozen_watchpost": {
    "worldX": -25,
    "worldY": -20
  },
  "frozen_wastes_glacier_crevasse": {
    "worldX": -28,
    "worldY": -21
  },
  "frozen_wastes_ice_fishing_hole": {
    "worldX": -28,
    "worldY": -20
  },
  "frozen_wastes_runestone_circle": {
    "worldX": -28,
    "worldY": -19
  },
  "frozen_wastes_snowdrift_pass": {
    "worldX": -28,
    "worldY": -23
  },
  "frozen_wastes_yeti_cairn": {
    "worldX": -25,
    "worldY": -21
  },
  "glacier": {
    "worldX": -27,
    "worldY": -21
  },
  "glass_dunes_beast_scrape": {
    "worldX": 3,
    "worldY": 20
  },
  "glass_dunes_buried_caravan": {
    "worldX": 1,
    "worldY": 20
  },
  "glass_dunes_buried_palace_door": {
    "worldX": 6,
    "worldY": 21
  },
  "glass_dunes_crystal_golem_yard": {
    "worldX": 5,
    "worldY": 22
  },
  "glass_dunes_fill_1_19": {
    "worldX": 1,
    "worldY": 19
  },
  "glass_dunes_fill_1_22": {
    "worldX": 1,
    "worldY": 22
  },
  "thundersteppe_fill_10_23": {
    "worldX": 10,
    "worldY": 23
  },
  "thundersteppe_fill_10_24": {
    "worldX": 10,
    "worldY": 24
  },
  "thundersteppe_fill_10_25": {
    "worldX": 10,
    "worldY": 25
  },
  "glass_dunes_fill_2_23": {
    "worldX": 2,
    "worldY": 23
  },
  "glass_dunes_fill_3_19": {
    "worldX": 3,
    "worldY": 19
  },
  "glass_dunes_fill_3_23": {
    "worldX": 3,
    "worldY": 23
  },
  "glass_dunes_fill_4_23": {
    "worldX": 4,
    "worldY": 23
  },
  "glass_dunes_fill_4_24": {
    "worldX": 4,
    "worldY": 24
  },
  "glass_dunes_fill_5_19": {
    "worldX": 5,
    "worldY": 19
  },
  "glass_dunes_fill_5_23": {
    "worldX": 5,
    "worldY": 23
  },
  "glass_dunes_fill_6_23": {
    "worldX": 6,
    "worldY": 23
  },
  "glass_dunes_fill_7_20": {
    "worldX": 7,
    "worldY": 20
  },
  "glass_dunes_fill_7_22": {
    "worldX": 7,
    "worldY": 22
  },
  "glass_dunes_glassstorm_basin": {
    "worldX": 4,
    "worldY": 19
  },
  "glass_dunes_herb_shelf": {
    "worldX": 3,
    "worldY": 22
  },
  "glass_dunes_lost_dynasty_altar": {
    "worldX": 6,
    "worldY": 20
  },
  "glass_dunes_mirage_bazaar": {
    "worldX": 5,
    "worldY": 20
  },
  "glass_dunes_mirror_slope": {
    "worldX": 2,
    "worldY": 21
  },
  "glass_dunes_obsidian_well": {
    "worldX": 5,
    "worldY": 21
  },
  "glass_dunes_prism_arch": {
    "worldX": 4,
    "worldY": 22
  },
  "glass_dunes_relic_pit": {
    "worldX": 4,
    "worldY": 20
  },
  "glass_dunes_saltwind_cut": {
    "worldX": 2,
    "worldY": 19
  },
  "glass_dunes_shard_claim": {
    "worldX": 3,
    "worldY": 21
  },
  "glass_dunes_singing_ridge": {
    "worldX": 2,
    "worldY": 22
  },
  "glass_dunes_solar_forge": {
    "worldX": 6,
    "worldY": 22
  },
  "glass_dunes_sun_gate": {
    "worldX": 1,
    "worldY": 21
  },
  "glass_dunes_sunfire_crater": {
    "worldX": 7,
    "worldY": 21
  },
  "glass_dunes_vein_gallery": {
    "worldX": 4,
    "worldY": 21
  },
  "glass_dunes_water_pocket": {
    "worldX": 2,
    "worldY": 20
  },
  "grass_path": {
    "worldX": 9,
    "worldY": 3
  },
  "graveyard_depths": {
    "worldX": 2,
    "worldY": -2
  },
  "graveyard_entrance": {
    "worldX": 2,
    "worldY": -3
  },
  "guild_hall": {
    "worldX": 17,
    "worldY": 2
  },
  "hollow_mountain_entrance_wind_gate": {
    "worldX": -28,
    "worldY": -14
  },
  "hunter_lodge": {
    "worldX": 10,
    "worldY": 1
  },
  "ice_castle_gate": {
    "worldX": -26,
    "worldY": -20
  },
  "ice_throne": {
    "worldX": -26,
    "worldY": -19
  },
  "ironwood_fort_barracks_hall": {
    "worldX": 2,
    "worldY": 14
  },
  "ironwood_fort_command_walk": {
    "worldX": 3,
    "worldY": 15
  },
  "ironwood_fort_east_bastion": {
    "worldX": 3,
    "worldY": 13
  },
  "ironwood_fort_fill_0_12": {
    "worldX": 0,
    "worldY": 12
  },
  "ironwood_fort_fill_0_17": {
    "worldX": 0,
    "worldY": 17
  },
  "ironwood_fort_fill_0_18": {
    "worldX": 0,
    "worldY": 18
  },
  "glass_dunes_fill_1_18": {
    "worldX": 1,
    "worldY": 18
  },
  "glass_dunes_fill_2_18": {
    "worldX": 2,
    "worldY": 18
  },
  "glass_dunes_fill_3_18": {
    "worldX": 3,
    "worldY": 18
  },
  "ironwood_fort_fill_4_15": {
    "worldX": 4,
    "worldY": 15
  },
  "glass_dunes_fill_4_18": {
    "worldX": 4,
    "worldY": 18
  },
  "glass_dunes_fill_5_18": {
    "worldX": 5,
    "worldY": 18
  },
  "glass_dunes_fill_6_18": {
    "worldX": 6,
    "worldY": 18
  },
  "ironwood_fort_forge_works": {
    "worldX": 0,
    "worldY": 15
  },
  "ironwood_fort_hidden_sally": {
    "worldX": 3,
    "worldY": 12
  },
  "ironwood_fort_high_keep": {
    "worldX": 4,
    "worldY": 16
  },
  "ironwood_fort_ironwood_grove": {
    "worldX": 0,
    "worldY": 16
  },
  "ironwood_fort_keep_gate": {
    "worldX": 3,
    "worldY": 16
  },
  "ironwood_fort_muster_square": {
    "worldX": 2,
    "worldY": 13
  },
  "ironwood_fort_oath_chapel": {
    "worldX": 2,
    "worldY": 16
  },
  "ironwood_fort_old_cistern": {
    "worldX": 1,
    "worldY": 12
  },
  "ironwood_fort_outer_gate": {
    "worldX": 1,
    "worldY": 13
  },
  "ironwood_fort_portal_yard": {
    "worldX": 0,
    "worldY": 13
  },
  "ironwood_fort_prison_block": {
    "worldX": 1,
    "worldY": 16
  },
  "ironwood_fort_quartermaster_row": {
    "worldX": 0,
    "worldY": 14
  },
  "ironwood_fort_scout_roost": {
    "worldX": 1,
    "worldY": 15
  },
  "ironwood_fort_signal_tower": {
    "worldX": 3,
    "worldY": 14
  },
  "ironwood_fort_supply_tunnel": {
    "worldX": 2,
    "worldY": 12
  },
  "ironwood_fort_war_room": {
    "worldX": 2,
    "worldY": 15
  },
  "ironwood_fort_west_bastion": {
    "worldX": 1,
    "worldY": 14
  },
  "kingdom_frontier_banner_hill": {
    "worldX": -15,
    "worldY": -5
  },
  "kingdom_frontier_battlefield_crossing": {
    "worldX": -16,
    "worldY": -6
  },
  "kingdom_frontier_border_road": {
    "worldX": -17,
    "worldY": -7
  },
  "kingdom_frontier_burnt_farmstead": {
    "worldX": -17,
    "worldY": -4
  },
  "kingdom_frontier_command_front": {
    "worldX": -12,
    "worldY": -3
  },
  "kingdom_frontier_darkwood_cut": {
    "worldX": -16,
    "worldY": -4
  },
  "kingdom_frontier_fill_n10_n3": {
    "worldX": -10,
    "worldY": -3
  },
  "kingdom_frontier_fill_n10_n4": {
    "worldX": -10,
    "worldY": -4
  },
  "kingdom_frontier_fill_n10_n5": {
    "worldX": -10,
    "worldY": -5
  },
  "kingdom_frontier_fill_n10_n6": {
    "worldX": -10,
    "worldY": -6
  },
  "kingdom_frontier_fill_n10_n7": {
    "worldX": -10,
    "worldY": -7
  },
  "kingdom_frontier_fill_n11_n3": {
    "worldX": -11,
    "worldY": -3
  },
  "kingdom_frontier_fill_n13_n4": {
    "worldX": -13,
    "worldY": -4
  },
  "kingdom_frontier_fill_n14_n6": {
    "worldX": -14,
    "worldY": -6
  },
  "kingdom_frontier_fill_n15_n7": {
    "worldX": -15,
    "worldY": -7
  },
  "kingdom_frontier_fill_n17_n3": {
    "worldX": -17,
    "worldY": -3
  },
  "kingdom_frontier_fill_n18_n4": {
    "worldX": -18,
    "worldY": -4
  },
  "kingdom_frontier_fill_n18_n6": {
    "worldX": -18,
    "worldY": -6
  },
  "kingdom_frontier_firebreak_ridge": {
    "worldX": -15,
    "worldY": -4
  },
  "kingdom_frontier_iron_claim": {
    "worldX": -17,
    "worldY": -5
  },
  "kingdom_frontier_lumber_claim": {
    "worldX": -18,
    "worldY": -5
  },
  "kingdom_frontier_portal_muster": {
    "worldX": -18,
    "worldY": -7
  },
  "kingdom_frontier_prisoner_stockade": {
    "worldX": -15,
    "worldY": -3
  },
  "kingdom_frontier_redoubt_gate": {
    "worldX": -14,
    "worldY": -3
  },
  "kingdom_frontier_siege_yard": {
    "worldX": -16,
    "worldY": -5
  },
  "kingdom_frontier_spyglass_ruin": {
    "worldX": -14,
    "worldY": -4
  },
  "kingdom_frontier_supply_camp": {
    "worldX": -17,
    "worldY": -6
  },
  "kingdom_frontier_treasury_wagon": {
    "worldX": -16,
    "worldY": -3
  },
  "kingdom_frontier_truce_tent": {
    "worldX": -14,
    "worldY": -5
  },
  "kingdom_frontier_war_table_bunker": {
    "worldX": -13,
    "worldY": -3
  },
  "kingdom_frontier_watchtower_east": {
    "worldX": -15,
    "worldY": -6
  },
  "kingdom_frontier_watchtower_west": {
    "worldX": -16,
    "worldY": -7
  },
  "kingsroad_market_adventurer_board": {
    "worldX": 26,
    "worldY": 1
  },
  "kingsroad_market_auction_tent": {
    "worldX": 26,
    "worldY": 2
  },
  "kingsroad_market_back_alley_ledgers": {
    "worldX": 28,
    "worldY": 2
  },
  "kingsroad_market_blacksmith_row": {
    "worldX": 26,
    "worldY": 0
  },
  "kingsroad_market_caravan_yard": {
    "worldX": 27,
    "worldY": 0
  },
  "kingsroad_market_cloth_lane": {
    "worldX": 25,
    "worldY": 1
  },
  "kingsroad_market_coin_exchange": {
    "worldX": 27,
    "worldY": 1
  },
  "kingsroad_market_crossroad_stalls": {
    "worldX": 24,
    "worldY": 0
  },
  "kingsroad_market_fill_23_2": {
    "worldX": 23,
    "worldY": 2
  },
  "kingsroad_market_fill_23_n1": {
    "worldX": 23,
    "worldY": -1
  },
  "kingsroad_market_fill_25_5": {
    "worldX": 25,
    "worldY": 5
  },
  "kingsroad_market_fill_26_3": {
    "worldX": 26,
    "worldY": 3
  },
  "kingsroad_market_fill_26_n1": {
    "worldX": 26,
    "worldY": -1
  },
  "kingsroad_market_fill_28_3": {
    "worldX": 28,
    "worldY": 3
  },
  "kingsroad_market_fill_29_3": {
    "worldX": 29,
    "worldY": 3
  },
  "kingsroad_market_fill_30_3": {
    "worldX": 30,
    "worldY": 3
  },
  "kingsroad_market_fishmonger_steps": {
    "worldX": 25,
    "worldY": 2
  },
  "kingsroad_market_grain_arcade": {
    "worldX": 25,
    "worldY": 0
  },
  "kingsroad_market_guard_post": {
    "worldX": 23,
    "worldY": 1
  },
  "kingsroad_market_herbal_square": {
    "worldX": 24,
    "worldY": 2
  },
  "kingsroad_market_high_balcony": {
    "worldX": 27,
    "worldY": 3
  },
  "kingsroad_market_pack_animal_ring": {
    "worldX": 28,
    "worldY": 0
  },
  "kingsroad_market_portal_plaza": {
    "worldX": 23,
    "worldY": 0
  },
  "kingsroad_market_scribe_corner": {
    "worldX": 27,
    "worldY": 2
  },
  "kingsroad_market_shrine_of_routes": {
    "worldX": 28,
    "worldY": 1
  },
  "kingsroad_market_spice_awning": {
    "worldX": 24,
    "worldY": 1
  },
  "kingsroad_market_tavern_front": {
    "worldX": 25,
    "worldY": -1
  },
  "kingsroad_market_well_court": {
    "worldX": 24,
    "worldY": -1
  },
  "lakeside_bank": {
    "worldX": 19,
    "worldY": 4
  },
  "lakeside_blacksmith": {
    "worldX": 16,
    "worldY": 5
  },
  "lakeside_courthouse": {
    "worldX": 17,
    "worldY": 0
  },
  "lakeside_fish_market": {
    "worldX": 19,
    "worldY": 6
  },
  "lakeside_hidden_canal": {
    "worldX": 19,
    "worldY": 7
  },
  "lakeside_inn": {
    "worldX": 16,
    "worldY": 2
  },
  "lakeside_portal_square": {
    "worldX": 18,
    "worldY": 1
  },
  "lakeside_tailor": {
    "worldX": 17,
    "worldY": 6
  },
  "lakeside_temple": {
    "worldX": 17,
    "worldY": 1
  },
  "lakeside_town_fill_15_3": {
    "worldX": 15,
    "worldY": 3
  },
  "lakeside_town_fill_15_5": {
    "worldX": 15,
    "worldY": 5
  },
  "lakeside_town_fill_15_6": {
    "worldX": 15,
    "worldY": 6
  },
  "lakeside_town_fill_16_1": {
    "worldX": 16,
    "worldY": 1
  },
  "lakeside_town_fill_18_0": {
    "worldX": 18,
    "worldY": 0
  },
  "lakeside_town_fill_18_5": {
    "worldX": 18,
    "worldY": 5
  },
  "lakeside_town_fill_18_6": {
    "worldX": 18,
    "worldY": 6
  },
  "lakeside_town_fill_19_3": {
    "worldX": 19,
    "worldY": 3
  },
  "kingsroad_market_fill_22_0": {
    "worldX": 22,
    "worldY": 0
  },
  "kingsroad_market_fill_22_1": {
    "worldX": 22,
    "worldY": 1
  },
  "lakeside_warehouse": {
    "worldX": 19,
    "worldY": 5
  },
  "lava_trail": {
    "worldX": 32,
    "worldY": 22
  },
  "lighthouse": {
    "worldX": 33,
    "worldY": 1
  },
  "lost_capital_outer_gate": {
    "worldX": -27,
    "worldY": 8
  },
  "machine_graveyard_entrance_crane": {
    "worldX": 31,
    "worldY": -1
  },
  "magma_river": {
    "worldX": 33,
    "worldY": 22
  },
  "market_street": {
    "worldX": 16,
    "worldY": 4
  },
  "marsh_of_mirrors_blackwater_path": {
    "worldX": 25,
    "worldY": 16
  },
  "marsh_of_mirrors_crooked_boardwalk": {
    "worldX": 25,
    "worldY": 17
  },
  "marsh_of_mirrors_dark_treant_grove": {
    "worldX": 28,
    "worldY": 17
  },
  "marsh_of_mirrors_echo_fen": {
    "worldX": 25,
    "worldY": 18
  },
  "marsh_of_mirrors_fill_24_15": {
    "worldX": 24,
    "worldY": 15
  },
  "marsh_of_mirrors_fill_24_18": {
    "worldX": 24,
    "worldY": 18
  },
  "marsh_of_mirrors_fill_25_13": {
    "worldX": 25,
    "worldY": 13
  },
  "marsh_of_mirrors_fill_25_19": {
    "worldX": 25,
    "worldY": 19
  },
  "marsh_of_mirrors_fill_26_18": {
    "worldX": 26,
    "worldY": 18
  },
  "marsh_of_mirrors_fill_27_14": {
    "worldX": 27,
    "worldY": 14
  },
  "marsh_of_mirrors_fill_27_17": {
    "worldX": 27,
    "worldY": 17
  },
  "marsh_of_mirrors_fill_27_19": {
    "worldX": 27,
    "worldY": 19
  },
  "marsh_of_mirrors_fill_28_15": {
    "worldX": 28,
    "worldY": 15
  },
  "marsh_of_mirrors_fill_29_16": {
    "worldX": 29,
    "worldY": 16
  },
  "marsh_of_mirrors_fill_30_14": {
    "worldX": 30,
    "worldY": 14
  },
  "marsh_of_mirrors_fill_30_16": {
    "worldX": 30,
    "worldY": 16
  },
  "marsh_of_mirrors_frog_mire": {
    "worldX": 25,
    "worldY": 15
  },
  "marsh_of_mirrors_glasswater_core": {
    "worldX": 28,
    "worldY": 18
  },
  "marsh_of_mirrors_hag_lantern": {
    "worldX": 28,
    "worldY": 19
  },
  "marsh_of_mirrors_lost_cairn": {
    "worldX": 26,
    "worldY": 14
  },
  "marsh_of_mirrors_mirror_pond": {
    "worldX": 27,
    "worldY": 16
  },
  "marsh_of_mirrors_mist_blind": {
    "worldX": 26,
    "worldY": 17
  },
  "marsh_of_mirrors_moonlit_causeway": {
    "worldX": 26,
    "worldY": 19
  },
  "marsh_of_mirrors_peat_islet": {
    "worldX": 24,
    "worldY": 17
  },
  "marsh_of_mirrors_poison_bloom_bed": {
    "worldX": 26,
    "worldY": 15
  },
  "marsh_of_mirrors_reed_gate": {
    "worldX": 24,
    "worldY": 16
  },
  "marsh_of_mirrors_serpent_channel": {
    "worldX": 26,
    "worldY": 13
  },
  "marsh_of_mirrors_shattered_reflection": {
    "worldX": 27,
    "worldY": 15
  },
  "marsh_of_mirrors_silver_pool": {
    "worldX": 26,
    "worldY": 16
  },
  "marsh_of_mirrors_sinking_shrine": {
    "worldX": 27,
    "worldY": 13
  },
  "marsh_of_mirrors_spider_reeds": {
    "worldX": 25,
    "worldY": 14
  },
  "marsh_of_mirrors_sunken_willow": {
    "worldX": 28,
    "worldY": 16
  },
  "mist_harbor_anchor_inn": {
    "worldX": 42,
    "worldY": 3
  },
  "mist_harbor_breakwater_end": {
    "worldX": 45,
    "worldY": 1
  },
  "mist_harbor_captains_office": {
    "worldX": 41,
    "worldY": 0
  },
  "mist_harbor_chart_archive": {
    "worldX": 42,
    "worldY": 4
  },
  "mist_harbor_clinic_of_salt": {
    "worldX": 43,
    "worldY": 3
  },
  "mist_harbor_customs_house": {
    "worldX": 41,
    "worldY": 1
  },
  "mist_harbor_ferry_pier": {
    "worldX": 44,
    "worldY": 1
  },
  "mist_harbor_fill_40_1": {
    "worldX": 40,
    "worldY": 1
  },
  "mist_harbor_fill_40_3": {
    "worldX": 40,
    "worldY": 3
  },
  "mist_harbor_fill_40_5": {
    "worldX": 40,
    "worldY": 5
  },
  "mist_harbor_fill_41_n1": {
    "worldX": 41,
    "worldY": -1
  },
  "mist_harbor_fill_42_5": {
    "worldX": 42,
    "worldY": 5
  },
  "mist_harbor_fill_43_0": {
    "worldX": 43,
    "worldY": 0
  },
  "mist_harbor_fill_43_4": {
    "worldX": 43,
    "worldY": 4
  },
  "mist_harbor_fill_44_3": {
    "worldX": 44,
    "worldY": 3
  },
  "mist_harbor_fill_45_2": {
    "worldX": 45,
    "worldY": 2
  },
  "mist_harbor_fish_market": {
    "worldX": 42,
    "worldY": 2
  },
  "mist_harbor_fog_gate": {
    "worldX": 40,
    "worldY": 2
  },
  "mist_harbor_fogwatch_lantern": {
    "worldX": 41,
    "worldY": 5
  },
  "mist_harbor_guild_quay": {
    "worldX": 43,
    "worldY": 1
  },
  "mist_harbor_lighthouse_stairs": {
    "worldX": 41,
    "worldY": 4
  },
  "mist_harbor_portal_lantern": {
    "worldX": 41,
    "worldY": 3
  },
  "mist_harbor_sailmakers_row": {
    "worldX": 43,
    "worldY": 2
  },
  "mist_harbor_sea_gate": {
    "worldX": 42,
    "worldY": -1
  },
  "mist_harbor_shipwright_yard": {
    "worldX": 44,
    "worldY": 2
  },
  "mist_harbor_smugglers_alley": {
    "worldX": 42,
    "worldY": 0
  },
  "mist_harbor_tide_plaza": {
    "worldX": 41,
    "worldY": 2
  },
  "mist_harbor_tidepool_shrine": {
    "worldX": 43,
    "worldY": -1
  },
  "mist_harbor_warehouse_nine": {
    "worldX": 42,
    "worldY": 1
  },
  "moonlit_fen_blackwater_run": {
    "worldX": 17,
    "worldY": 14
  },
  "moonlit_fen_dreamwater_core": {
    "worldX": 22,
    "worldY": 15
  },
  "moonlit_fen_fae_ring": {
    "worldX": 18,
    "worldY": 16
  },
  "moonlit_fen_fill_14_14": {
    "worldX": 14,
    "worldY": 14
  },
  "moonlit_fen_fill_14_17": {
    "worldX": 14,
    "worldY": 17
  },
  "moonlit_fen_fill_14_18": {
    "worldX": 14,
    "worldY": 18
  },
  "moonlit_fen_fill_14_19": {
    "worldX": 14,
    "worldY": 19
  },
  "moonlit_fen_fill_14_20": {
    "worldX": 14,
    "worldY": 20
  },
  "moonlit_fen_fill_20_14": {
    "worldX": 20,
    "worldY": 14
  },
  "moonlit_fen_fill_20_16": {
    "worldX": 20,
    "worldY": 16
  },
  "moonlit_fen_fill_21_14": {
    "worldX": 21,
    "worldY": 14
  },
  "moonlit_fen_fill_21_16": {
    "worldX": 21,
    "worldY": 16
  },
  "moonlit_fen_fill_23_15": {
    "worldX": 23,
    "worldY": 15
  },
  "moonlit_fen_fill_23_16": {
    "worldX": 23,
    "worldY": 16
  },
  "moonlit_fen_fill_23_17": {
    "worldX": 23,
    "worldY": 17
  },
  "moonlit_fen_firefly_pool": {
    "worldX": 14,
    "worldY": 16
  },
  "moonlit_fen_fishing_cut": {
    "worldX": 15,
    "worldY": 14
  },
  "moonlit_fen_frog_choir": {
    "worldX": 17,
    "worldY": 15
  },
  "moonlit_fen_glimmer_ford": {
    "worldX": 16,
    "worldY": 16
  },
  "moonlit_fen_halfmoon_pond": {
    "worldX": 19,
    "worldY": 15
  },
  "moonlit_fen_lantern_moss": {
    "worldX": 18,
    "worldY": 15
  },
  "moonlit_fen_lunar_altar": {
    "worldX": 21,
    "worldY": 15
  },
  "moonlit_fen_moonflower_bank": {
    "worldX": 15,
    "worldY": 15
  },
  "moonlit_fen_moonwell": {
    "worldX": 19,
    "worldY": 16
  },
  "moonlit_fen_mosquito_haze": {
    "worldX": 16,
    "worldY": 14
  },
  "moonlit_fen_night_bloom_grove": {
    "worldX": 17,
    "worldY": 16
  },
  "moonlit_fen_old_canoe_camp": {
    "worldX": 19,
    "worldY": 14
  },
  "moonlit_fen_reed_gate": {
    "worldX": 14,
    "worldY": 15
  },
  "moonlit_fen_silver_mire": {
    "worldX": 16,
    "worldY": 15
  },
  "moonlit_fen_sunken_log_bridge": {
    "worldX": 18,
    "worldY": 14
  },
  "moonlit_fen_white_reed_maze": {
    "worldX": 20,
    "worldY": 15
  },
  "moonlit_fen_willow_hush": {
    "worldX": 15,
    "worldY": 16
  },
  "moonshadow_court_moonlit_gate": {
    "worldX": 24,
    "worldY": 20
  },
  "mountain_camp": {
    "worldX": -26,
    "worldY": -23
  },
  "mushroom_swamp": {
    "worldX": -7,
    "worldY": 13
  },
  "necropolis_gate_black_approach": {
    "worldX": -11,
    "worldY": 16
  },
  "obsidian_cave": {
    "worldX": 33,
    "worldY": 23
  },
  "obsidian_depths_mine_lift": {
    "worldX": 36,
    "worldY": 23
  },
  "old_farmland_abandoned_farmhouse": {
    "worldX": -5,
    "worldY": 1
  },
  "old_farmland_beehive_rows": {
    "worldX": -5,
    "worldY": 2
  },
  "old_farmland_cart_shortcut": {
    "worldX": -8,
    "worldY": -1
  },
  "old_farmland_chicken_coop": {
    "worldX": -4,
    "worldY": 2
  },
  "old_farmland_collapsed_barn": {
    "worldX": -7,
    "worldY": 1
  },
  "old_farmland_crossroads": {
    "worldX": -8,
    "worldY": 0
  },
  "old_farmland_fill_n1_1": {
    "worldX": -1,
    "worldY": 1
  },
  "old_farmland_fill_n1_2": {
    "worldX": -1,
    "worldY": 2
  },
  "old_farmland_fill_n1_3": {
    "worldX": -1,
    "worldY": 3
  },
  "old_farmland_fill_n2_1": {
    "worldX": -2,
    "worldY": 1
  },
  "old_farmland_fill_n3_1": {
    "worldX": -3,
    "worldY": 1
  },
  "old_farmland_fill_n4_1": {
    "worldX": -4,
    "worldY": 1
  },
  "old_farmland_fill_n4_4": {
    "worldX": -4,
    "worldY": 4
  },
  "old_farmland_fill_n6_3": {
    "worldX": -6,
    "worldY": 3
  },
  "old_farmland_fill_n6_4": {
    "worldX": -6,
    "worldY": 4
  },
  "old_farmland_fill_n8_3": {
    "worldX": -8,
    "worldY": 3
  },
  "old_farmland_granary": {
    "worldX": -5,
    "worldY": 0
  },
  "old_farmland_harvest_circle": {
    "worldX": -7,
    "worldY": 4
  },
  "old_farmland_irrigation_channel": {
    "worldX": -6,
    "worldY": 0
  },
  "old_farmland_mildew_orchard": {
    "worldX": -6,
    "worldY": 2
  },
  "old_farmland_moonlit_pasture": {
    "worldX": -4,
    "worldY": 3
  },
  "old_farmland_overgrown_field": {
    "worldX": -8,
    "worldY": 1
  },
  "old_farmland_pumpkin_patch": {
    "worldX": -7,
    "worldY": 2
  },
  "old_farmland_rat_ditch": {
    "worldX": -7,
    "worldY": 0
  },
  "old_farmland_root_cellar": {
    "worldX": -7,
    "worldY": 3
  },
  "old_farmland_scarecrow_watch": {
    "worldX": -8,
    "worldY": 2
  },
  "old_farmland_stone_marker": {
    "worldX": -5,
    "worldY": 4
  },
  "old_farmland_toolshed": {
    "worldX": -4,
    "worldY": 0
  },
  "old_farmland_well": {
    "worldX": -6,
    "worldY": 1
  },
  "old_farmland_windbreak_trees": {
    "worldX": -5,
    "worldY": 3
  },
  "old_well": {
    "worldX": 8,
    "worldY": 4
  },
  "pilgrim_road_abandoned_inn": {
    "worldX": 11,
    "worldY": 7
  },
  "pilgrim_road_ambush_bend": {
    "worldX": 12,
    "worldY": 7
  },
  "pilgrim_road_bandit_watch": {
    "worldX": 12,
    "worldY": 6
  },
  "pilgrim_road_bell_shrine": {
    "worldX": 9,
    "worldY": 8
  },
  "pilgrim_road_broken_causeway": {
    "worldX": 13,
    "worldY": 7
  },
  "pilgrim_road_caravan_rut": {
    "worldX": 10,
    "worldY": 7
  },
  "pilgrim_road_dry_well": {
    "worldX": 9,
    "worldY": 6
  },
  "pilgrim_road_fill_13_6": {
    "worldX": 13,
    "worldY": 6
  },
  "pilgrim_road_fill_13_9": {
    "worldX": 13,
    "worldY": 9
  },
  "pilgrim_road_fill_8_6": {
    "worldX": 8,
    "worldY": 6
  },
  "pilgrim_road_final_marker": {
    "worldX": 16,
    "worldY": 7
  },
  "pilgrim_road_milestone_cairn": {
    "worldX": 8,
    "worldY": 8
  },
  "pilgrim_road_old_cemetery_turn": {
    "worldX": 13,
    "worldY": 8
  },
  "pilgrim_road_prayer_steps": {
    "worldX": 10,
    "worldY": 8
  },
  "pilgrim_road_quiet_overlook": {
    "worldX": 16,
    "worldY": 6
  },
  "pilgrim_road_saint_bridge": {
    "worldX": 11,
    "worldY": 8
  },
  "pilgrim_road_sanctuary_gate": {
    "worldX": 15,
    "worldY": 7
  },
  "pilgrim_road_smuggler_cache": {
    "worldX": 11,
    "worldY": 6
  },
  "pilgrim_road_sunset_camp": {
    "worldX": 14,
    "worldY": 7
  },
  "pilgrim_road_thorn_cut": {
    "worldX": 10,
    "worldY": 6
  },
  "pilgrim_road_waygate": {
    "worldX": 8,
    "worldY": 7
  },
  "pilgrim_road_white_marker": {
    "worldX": 12,
    "worldY": 8
  },
  "pilgrim_road_worn_flags": {
    "worldX": 9,
    "worldY": 7
  },
  "pirate_camp": {
    "worldX": 34,
    "worldY": 3
  },
  "plains_alpha_den": {
    "worldX": 7,
    "worldY": 5
  },
  "plains_bandit_hideout": {
    "worldX": 11,
    "worldY": 3
  },
  "plains_broken_bridge": {
    "worldX": 10,
    "worldY": 4
  },
  "plains_entrance": {
    "worldX": 9,
    "worldY": 2
  },
  "plains_fill_10_5": {
    "worldX": 10,
    "worldY": 5
  },
  "plains_fill_11_0": {
    "worldX": 11,
    "worldY": 0
  },
  "plains_fill_11_4": {
    "worldX": 11,
    "worldY": 4
  },
  "plains_fill_11_5": {
    "worldX": 11,
    "worldY": 5
  },
  "plains_fill_12_5": {
    "worldX": 12,
    "worldY": 5
  },
  "plains_fill_7_2": {
    "worldX": 7,
    "worldY": 2
  },
  "plains_fill_8_1": {
    "worldX": 8,
    "worldY": 1
  },
  "plains_fill_9_5": {
    "worldX": 9,
    "worldY": 5
  },
  "plains_hare_burrows": {
    "worldX": 8,
    "worldY": 2
  },
  "plains_herb_slope": {
    "worldX": 10,
    "worldY": 3
  },
  "plains_moonlit_copse": {
    "worldX": 7,
    "worldY": 3
  },
  "plains_shepherd_camp": {
    "worldX": 11,
    "worldY": 1
  },
  "plains_stone_circle": {
    "worldX": 7,
    "worldY": 4
  },
  "plains_watch_mound": {
    "worldX": 8,
    "worldY": 5
  },
  "plains_wolf_tracks": {
    "worldX": 8,
    "worldY": 3
  },
  "potion_shop": {
    "worldX": 1,
    "worldY": 1
  },
  "prison": {
    "worldX": 18,
    "worldY": 3
  },
  "redrock_badlands_ambush_canyon": {
    "worldX": -4,
    "worldY": 20
  },
  "redrock_badlands_bandit_watch": {
    "worldX": -5,
    "worldY": 22
  },
  "redrock_badlands_blackflag_lookout": {
    "worldX": -6,
    "worldY": 24
  },
  "redrock_badlands_bone_marker": {
    "worldX": -3,
    "worldY": 22
  },
  "redrock_badlands_burnt_wagon": {
    "worldX": -8,
    "worldY": 23
  },
  "redrock_badlands_cinder_spring": {
    "worldX": -7,
    "worldY": 20
  },
  "redrock_badlands_dry_gulch": {
    "worldX": -7,
    "worldY": 21
  },
  "redrock_badlands_duel_stones": {
    "worldX": -3,
    "worldY": 23
  },
  "redrock_badlands_dust_gate": {
    "worldX": -8,
    "worldY": 22
  },
  "redrock_badlands_echo_arch": {
    "worldX": -7,
    "worldY": 23
  },
  "redrock_badlands_exile_den": {
    "worldX": -3,
    "worldY": 21
  },
  "glass_dunes_fill_0_20": {
    "worldX": 0,
    "worldY": 20
  },
  "glass_dunes_fill_0_21": {
    "worldX": 0,
    "worldY": 21
  },
  "redrock_badlands_fill_n3_20": {
    "worldX": -3,
    "worldY": 20
  },
  "redrock_badlands_fill_n4_19": {
    "worldX": -4,
    "worldY": 19
  },
  "redrock_badlands_fill_n4_23": {
    "worldX": -4,
    "worldY": 23
  },
  "redrock_badlands_fill_n5_19": {
    "worldX": -5,
    "worldY": 19
  },
  "redrock_badlands_fill_n6_21": {
    "worldX": -6,
    "worldY": 21
  },
  "redrock_badlands_fill_n6_23": {
    "worldX": -6,
    "worldY": 23
  },
  "redrock_badlands_fill_n7_19": {
    "worldX": -7,
    "worldY": 19
  },
  "redrock_badlands_fill_n7_24": {
    "worldX": -7,
    "worldY": 24
  },
  "redrock_badlands_fill_n8_21": {
    "worldX": -8,
    "worldY": 21
  },
  "redrock_badlands_flame_spirit_basin": {
    "worldX": -5,
    "worldY": 20
  },
  "redrock_badlands_lava_worm_sink": {
    "worldX": -6,
    "worldY": 19
  },
  "redrock_badlands_outlaw_camp": {
    "worldX": -4,
    "worldY": 22
  },
  "redrock_badlands_red_ore_cut": {
    "worldX": -5,
    "worldY": 21
  },
  "redrock_badlands_rock_giant_perch": {
    "worldX": -4,
    "worldY": 21
  },
  "redrock_badlands_rustwash_pass": {
    "worldX": -7,
    "worldY": 22
  },
  "redrock_badlands_scarlet_crater": {
    "worldX": -3,
    "worldY": 19
  },
  "redrock_badlands_splinter_ridge": {
    "worldX": -6,
    "worldY": 22
  },
  "redrock_badlands_viper_flats": {
    "worldX": -6,
    "worldY": 20
  },
  "reef_of_bones_tide_gate": {
    "worldX": 38,
    "worldY": 18
  },
  "riverside_fishing": {
    "worldX": 9,
    "worldY": 0
  },
  "royal_hunting_grounds_arrow_range": {
    "worldX": -6,
    "worldY": -7
  },
  "royal_hunting_grounds_boar_wallows": {
    "worldX": -8,
    "worldY": -6
  },
  "royal_hunting_grounds_deer_run": {
    "worldX": -9,
    "worldY": -6
  },
  "royal_hunting_grounds_falcon_perch": {
    "worldX": -7,
    "worldY": -6
  },
  "royal_hunting_grounds_fill_n5_n5": {
    "worldX": -5,
    "worldY": -5
  },
  "royal_hunting_grounds_fill_n6_n4": {
    "worldX": -6,
    "worldY": -4
  },
  "royal_hunting_grounds_gamekeeper_camp": {
    "worldX": -5,
    "worldY": -6
  },
  "royal_hunting_grounds_griffon_ledge": {
    "worldX": -4,
    "worldY": -7
  },
  "royal_hunting_grounds_herb_copse": {
    "worldX": -6,
    "worldY": -6
  },
  "royal_hunting_grounds_hidden_poacher_path": {
    "worldX": -8,
    "worldY": -4
  },
  "royal_hunting_grounds_horn_gate": {
    "worldX": -9,
    "worldY": -7
  },
  "royal_hunting_grounds_hounds_yard": {
    "worldX": -7,
    "worldY": -7
  },
  "royal_hunting_grounds_moonlit_clearing": {
    "worldX": -7,
    "worldY": -4
  },
  "royal_hunting_grounds_noble_blind": {
    "worldX": -8,
    "worldY": -5
  },
  "royal_hunting_grounds_old_oak_stand": {
    "worldX": -9,
    "worldY": -4
  },
  "royal_hunting_grounds_permit_lodge": {
    "worldX": -8,
    "worldY": -7
  },
  "royal_hunting_grounds_royal_marker": {
    "worldX": -6,
    "worldY": -5
  },
  "royal_hunting_grounds_silver_trail": {
    "worldX": -9,
    "worldY": -5
  },
  "royal_hunting_grounds_stag_mirror": {
    "worldX": -7,
    "worldY": -5
  },
  "royal_hunting_grounds_trophy_pavilion": {
    "worldX": -4,
    "worldY": -6
  },
  "royal_hunting_grounds_white_stag_grove": {
    "worldX": -5,
    "worldY": -4
  },
  "royal_hunting_grounds_wolf_cut": {
    "worldX": -5,
    "worldY": -7
  },
  "saltwind_flats_blue_mud_shelf": {
    "worldX": 34,
    "worldY": 7
  },
  "saltwind_flats_bone_pier": {
    "worldX": 34,
    "worldY": 9
  },
  "saltwind_flats_brine_pool": {
    "worldX": 33,
    "worldY": 8
  },
  "saltwind_flats_crab_march": {
    "worldX": 33,
    "worldY": 7
  },
  "saltwind_flats_deep_brine_eye": {
    "worldX": 37,
    "worldY": 10
  },
  "saltwind_flats_driftwood_post": {
    "worldX": 34,
    "worldY": 8
  },
  "saltwind_flats_fill_31_10": {
    "worldX": 31,
    "worldY": 10
  },
  "serpent_delta_fill_31_13": {
    "worldX": 31,
    "worldY": 13
  },
  "serpent_delta_fill_32_13": {
    "worldX": 32,
    "worldY": 13
  },
  "saltwind_flats_fill_32_7": {
    "worldX": 32,
    "worldY": 7
  },
  "saltwind_flats_fill_33_10": {
    "worldX": 33,
    "worldY": 10
  },
  "serpent_delta_fill_33_13": {
    "worldX": 33,
    "worldY": 13
  },
  "saltwind_flats_fill_36_10": {
    "worldX": 36,
    "worldY": 10
  },
  "saltwind_flats_fill_37_8": {
    "worldX": 37,
    "worldY": 8
  },
  "saltwind_flats_fisher_cache": {
    "worldX": 35,
    "worldY": 9
  },
  "saltwind_flats_fog_bell": {
    "worldX": 36,
    "worldY": 7
  },
  "saltwind_flats_glass_salt_field": {
    "worldX": 32,
    "worldY": 10
  },
  "saltwind_flats_lowtide_causeway": {
    "worldX": 36,
    "worldY": 9
  },
  "saltwind_flats_mist_marker": {
    "worldX": 31,
    "worldY": 9
  },
  "saltwind_flats_pirate_blind": {
    "worldX": 33,
    "worldY": 9
  },
  "saltwind_flats_salt_crystal_nest": {
    "worldX": 32,
    "worldY": 11
  },
  "saltwind_flats_saltgrass_strip": {
    "worldX": 32,
    "worldY": 9
  },
  "saltwind_flats_sea_serpent_track": {
    "worldX": 36,
    "worldY": 8
  },
  "saltwind_flats_shallow_cut": {
    "worldX": 35,
    "worldY": 8
  },
  "saltwind_flats_tide_gate": {
    "worldX": 31,
    "worldY": 8
  },
  "saltwind_flats_tidewatch_ruin": {
    "worldX": 37,
    "worldY": 9
  },
  "saltwind_flats_white_ripple": {
    "worldX": 32,
    "worldY": 8
  },
  "saltwind_flats_wrecked_skiff": {
    "worldX": 35,
    "worldY": 7
  },
  "sandy_beach": {
    "worldX": 32,
    "worldY": 1
  },
  "sapphire_lake_beast_scrape": {
    "worldX": 18,
    "worldY": 8
  },
  "sapphire_lake_blue_reed_bed": {
    "worldX": 16,
    "worldY": 9
  },
  "sapphire_lake_blueheart_sanctum": {
    "worldX": 20,
    "worldY": 9
  },
  "sapphire_lake_calmwater_grotto": {
    "worldX": 16,
    "worldY": 10
  },
  "sapphire_lake_crystal_sandbar": {
    "worldX": 18,
    "worldY": 7
  },
  "sapphire_lake_deep_vein_window": {
    "worldX": 18,
    "worldY": 10
  },
  "sapphire_lake_entry_claim": {
    "worldX": 14,
    "worldY": 8
  },
  "sapphire_lake_fill_14_10": {
    "worldX": 14,
    "worldY": 10
  },
  "sapphire_lake_fill_17_9": {
    "worldX": 17,
    "worldY": 9
  },
  "moonlit_fen_fill_18_13": {
    "worldX": 18,
    "worldY": 13
  },
  "sapphire_lake_fill_19_10": {
    "worldX": 19,
    "worldY": 10
  },
  "moonlit_fen_fill_19_13": {
    "worldX": 19,
    "worldY": 13
  },
  "moonlit_fen_fill_20_13": {
    "worldX": 20,
    "worldY": 13
  },
  "sapphire_lake_fill_20_7": {
    "worldX": 20,
    "worldY": 7
  },
  "sapphire_lake_fill_21_8": {
    "worldX": 21,
    "worldY": 8
  },
  "sapphire_lake_fill_22_7": {
    "worldX": 22,
    "worldY": 7
  },
  "sapphire_lake_fill_22_8": {
    "worldX": 22,
    "worldY": 8
  },
  "sapphire_lake_fill_22_9": {
    "worldX": 22,
    "worldY": 9
  },
  "sapphire_lake_glassfish_cove": {
    "worldX": 18,
    "worldY": 9
  },
  "sapphire_lake_herb_shelf": {
    "worldX": 16,
    "worldY": 8
  },
  "sapphire_lake_lantern_dock": {
    "worldX": 14,
    "worldY": 9
  },
  "sapphire_lake_lily_cache": {
    "worldX": 21,
    "worldY": 7
  },
  "sapphire_lake_mineral_spring": {
    "worldX": 15,
    "worldY": 10
  },
  "sapphire_lake_mirror_shallows": {
    "worldX": 15,
    "worldY": 9
  },
  "sapphire_lake_pebble_weir": {
    "worldX": 17,
    "worldY": 7
  },
  "sapphire_lake_relic_pit": {
    "worldX": 19,
    "worldY": 8
  },
  "sapphire_lake_sapphire_lode": {
    "worldX": 20,
    "worldY": 8
  },
  "sapphire_lake_spirit_mirror": {
    "worldX": 17,
    "worldY": 10
  },
  "sapphire_lake_sunken_step": {
    "worldX": 19,
    "worldY": 9
  },
  "sapphire_lake_vein_path": {
    "worldX": 15,
    "worldY": 8
  },
  "sapphire_lake_water_pocket": {
    "worldX": 17,
    "worldY": 8
  },
  "sea_cave": {
    "worldX": 32,
    "worldY": 3
  },
  "serpent_delta_blue_lotus_marsh": {
    "worldX": 35,
    "worldY": 18
  },
  "serpent_delta_cold_bend": {
    "worldX": 33,
    "worldY": 15
  },
  "serpent_delta_egg_mound": {
    "worldX": 34,
    "worldY": 17
  },
  "serpent_delta_entrance_ferry": {
    "worldX": 31,
    "worldY": 14
  },
  "serpent_delta_fill_31_15": {
    "worldX": 31,
    "worldY": 15
  },
  "serpent_delta_fill_31_17": {
    "worldX": 31,
    "worldY": 17
  },
  "volcano_zone_fill_31_20": {
    "worldX": 31,
    "worldY": 20
  },
  "serpent_delta_fill_32_18": {
    "worldX": 32,
    "worldY": 18
  },
  "serpent_delta_fill_33_19": {
    "worldX": 33,
    "worldY": 19
  },
  "serpent_delta_fill_33_20": {
    "worldX": 33,
    "worldY": 20
  },
  "serpent_delta_fill_34_14": {
    "worldX": 34,
    "worldY": 14
  },
  "serpent_delta_fill_35_15": {
    "worldX": 35,
    "worldY": 15
  },
  "serpent_delta_fill_36_17": {
    "worldX": 36,
    "worldY": 17
  },
  "serpent_delta_flooded_granary": {
    "worldX": 35,
    "worldY": 16
  },
  "serpent_delta_green_herb_islet": {
    "worldX": 32,
    "worldY": 16
  },
  "serpent_delta_heron_marker": {
    "worldX": 31,
    "worldY": 16
  },
  "serpent_delta_ice_mist_channel": {
    "worldX": 33,
    "worldY": 17
  },
  "serpent_delta_mangrove_maze": {
    "worldX": 32,
    "worldY": 17
  },
  "serpent_delta_manymouth_confluence": {
    "worldX": 36,
    "worldY": 18
  },
  "serpent_delta_moonlit_fishing_post": {
    "worldX": 35,
    "worldY": 17
  },
  "serpent_delta_mudfish_pool": {
    "worldX": 33,
    "worldY": 14
  },
  "serpent_delta_old_levy_causeway": {
    "worldX": 33,
    "worldY": 18
  },
  "serpent_delta_priest_mask_hut": {
    "worldX": 34,
    "worldY": 18
  },
  "serpent_delta_scale_net_yard": {
    "worldX": 34,
    "worldY": 15
  },
  "serpent_delta_serpent_god_backwater": {
    "worldX": 37,
    "worldY": 18
  },
  "serpent_delta_serpent_shrine_steps": {
    "worldX": 34,
    "worldY": 16
  },
  "serpent_delta_split_reed_bank": {
    "worldX": 32,
    "worldY": 14
  },
  "serpent_delta_stilt_hamlet": {
    "worldX": 32,
    "worldY": 15
  },
  "serpent_delta_sunken_pirogue": {
    "worldX": 33,
    "worldY": 16
  },
  "shipwreck": {
    "worldX": 33,
    "worldY": 3
  },
  "silverpine_range_avalanche_bowl": {
    "worldX": -4,
    "worldY": -11
  },
  "silverpine_range_beast_scrape": {
    "worldX": -4,
    "worldY": -13
  },
  "silverpine_range_crystal_scree": {
    "worldX": -3,
    "worldY": -12
  },
  "silverpine_range_eagle_spire": {
    "worldX": -3,
    "worldY": -11
  },
  "silverpine_range_entry_claim": {
    "worldX": -8,
    "worldY": -13
  },
  "silverpine_range_fill_0_n12": {
    "worldX": 0,
    "worldY": -12
  },
  "silverpine_range_fill_n1_n12": {
    "worldX": -1,
    "worldY": -12
  },
  "silverpine_range_fill_n2_n12": {
    "worldX": -2,
    "worldY": -12
  },
  "silverpine_range_fill_n4_n10": {
    "worldX": -4,
    "worldY": -10
  },
  "silverpine_range_fill_n4_n14": {
    "worldX": -4,
    "worldY": -14
  },
  "silverpine_range_fill_n6_n11": {
    "worldX": -6,
    "worldY": -11
  },
  "silverpine_range_fill_n6_n14": {
    "worldX": -6,
    "worldY": -14
  },
  "silverpine_range_fill_n7_n9": {
    "worldX": -7,
    "worldY": -9
  },
  "silverpine_range_fill_n8_n11": {
    "worldX": -8,
    "worldY": -11
  },
  "silverpine_range_fill_n8_n14": {
    "worldX": -8,
    "worldY": -14
  },
  "silverpine_range_fill_n8_n8": {
    "worldX": -8,
    "worldY": -8
  },
  "silverpine_range_fill_n8_n9": {
    "worldX": -8,
    "worldY": -9
  },
  "silverpine_range_frost_herb_ledge": {
    "worldX": -5,
    "worldY": -14
  },
  "silverpine_range_goat_track": {
    "worldX": -4,
    "worldY": -12
  },
  "silverpine_range_herb_shelf": {
    "worldX": -6,
    "worldY": -13
  },
  "silverpine_range_high_mine_core": {
    "worldX": -3,
    "worldY": -9
  },
  "silverpine_range_iceglass_cavern": {
    "worldX": -5,
    "worldY": -11
  },
  "silverpine_range_mica_switchback": {
    "worldX": -6,
    "worldY": -12
  },
  "silverpine_range_moonneedle_pines": {
    "worldX": -7,
    "worldY": -12
  },
  "silverpine_range_old_miner_camp": {
    "worldX": -5,
    "worldY": -12
  },
  "silverpine_range_relic_pit": {
    "worldX": -3,
    "worldY": -13
  },
  "silverpine_range_silver_sap_grove": {
    "worldX": -7,
    "worldY": -10
  },
  "silverpine_range_snowline_gate": {
    "worldX": -8,
    "worldY": -12
  },
  "silverpine_range_starwatch_ridge": {
    "worldX": -3,
    "worldY": -10
  },
  "silverpine_range_vein_path": {
    "worldX": -7,
    "worldY": -13
  },
  "silverpine_range_water_pocket": {
    "worldX": -5,
    "worldY": -13
  },
  "silverpine_range_windcut_bridge": {
    "worldX": -7,
    "worldY": -11
  },
  "silverpine_storm_pass": {
    "worldX": -9,
    "worldY": -14
  },
  "sky_isles_lift_dock": {
    "worldX": 7,
    "worldY": -8
  },
  "snowfield_entrance": {
    "worldX": -27,
    "worldY": -23
  },
  "starfall_crater_rim_gate": {
    "worldX": 21,
    "worldY": 21
  },
  "starter_ext_bandit_footpath": {
    "worldX": 4,
    "worldY": -3
  },
  "starter_ext_beehive_grove": {
    "worldX": 4,
    "worldY": -5
  },
  "starter_ext_charcoal_kiln": {
    "worldX": 1,
    "worldY": -3
  },
  "starter_ext_frog_pond": {
    "worldX": 1,
    "worldY": -4
  },
  "starter_ext_herb_garden": {
    "worldX": 4,
    "worldY": -4
  },
  "starter_ext_hollow_stump": {
    "worldX": 3,
    "worldY": -2
  },
  "starter_ext_old_mill_path": {
    "worldX": 1,
    "worldY": -5
  },
  "starter_ext_root_cellar": {
    "worldX": 0,
    "worldY": -5
  },
  "starter_ext_ruined_bridge": {
    "worldX": 0,
    "worldY": -4
  },
  "starter_ext_training_clearing": {
    "worldX": 3,
    "worldY": -4
  },
  "starter_ext_willow_shrine": {
    "worldX": 4,
    "worldY": -2
  },
  "starter_village_chapel": {
    "worldX": 4,
    "worldY": 0
  },
  "starter_village_crafting_shed": {
    "worldX": 4,
    "worldY": 2
  },
  "starter_village_ext_fill_0_n3": {
    "worldX": 0,
    "worldY": -3
  },
  "starter_village_ext_fill_1_n1": {
    "worldX": 1,
    "worldY": -1
  },
  "starter_village_ext_fill_1_n2": {
    "worldX": 1,
    "worldY": -2
  },
  "starter_village_ext_fill_2_n1": {
    "worldX": 2,
    "worldY": -1
  },
  "starter_village_ext_fill_3_n1": {
    "worldX": 3,
    "worldY": -1
  },
  "starter_village_ext_fill_3_n6": {
    "worldX": 3,
    "worldY": -6
  },
  "starter_village_ext_fill_4_n1": {
    "worldX": 4,
    "worldY": -1
  },
  "starter_village_fill_1_3": {
    "worldX": 1,
    "worldY": 3
  },
  "starter_village_fill_3_4": {
    "worldX": 3,
    "worldY": 4
  },
  "starter_village_fill_5_3": {
    "worldX": 5,
    "worldY": 3
  },
  "starter_village_fill_6_3": {
    "worldX": 6,
    "worldY": 3
  },
  "starter_village_guard_post": {
    "worldX": 2,
    "worldY": 4
  },
  "starter_village_hidden_cellar": {
    "worldX": 0,
    "worldY": 0
  },
  "starter_village_inn": {
    "worldX": 1,
    "worldY": 0
  },
  "starter_village_market_lane": {
    "worldX": 4,
    "worldY": 1
  },
  "starter_village_notice_corner": {
    "worldX": 1,
    "worldY": 2
  },
  "starter_village_old_library": {
    "worldX": 3,
    "worldY": 0
  },
  "starter_village_portal_shrine": {
    "worldX": 2,
    "worldY": 3
  },
  "starter_village_river_stairs": {
    "worldX": 0,
    "worldY": 3
  },
  "starter_village_rooftop_walk": {
    "worldX": 3,
    "worldY": 3
  },
  "starter_village_stable_yard": {
    "worldX": 4,
    "worldY": 3
  },
  "starter_village_storehouse": {
    "worldX": 0,
    "worldY": 1
  },
  "starter_village_well_path": {
    "worldX": 0,
    "worldY": 2
  },
  "storm_highlands_basalt_spine": {
    "worldX": -16,
    "worldY": -15
  },
  "storm_highlands_broken_beacon": {
    "worldX": -13,
    "worldY": -15
  },
  "storm_highlands_cliff_gate": {
    "worldX": -18,
    "worldY": -14
  },
  "storm_highlands_cloud_bridge": {
    "worldX": -17,
    "worldY": -13
  },
  "storm_highlands_eagle_scarp": {
    "worldX": -15,
    "worldY": -13
  },
  "storm_highlands_eye_of_gale": {
    "worldX": -12,
    "worldY": -14
  },
  "storm_highlands_fill_n10_n14": {
    "worldX": -10,
    "worldY": -14
  },
  "storm_highlands_fill_n11_n13": {
    "worldX": -11,
    "worldY": -13
  },
  "storm_highlands_fill_n11_n15": {
    "worldX": -11,
    "worldY": -15
  },
  "storm_highlands_fill_n17_n15": {
    "worldX": -17,
    "worldY": -15
  },
  "storm_highlands_windrest_portal": {
    "worldX": -18,
    "worldY": -16
  },
  "storm_highlands_windrest_lane": {
    "worldX": -17,
    "worldY": -16
  },
  "storm_highlands_windrest_lodge": {
    "worldX": -17,
    "worldY": -17
  },
  "storm_highlands_goat_ledge": {
    "worldX": -16,
    "worldY": -14
  },
  "storm_highlands_griffin_aerie": {
    "worldX": -12,
    "worldY": -13
  },
  "storm_highlands_griffin_watch": {
    "worldX": -16,
    "worldY": -13
  },
  "storm_highlands_lightning_tree": {
    "worldX": -14,
    "worldY": -15
  },
  "storm_highlands_nest_pillars": {
    "worldX": -14,
    "worldY": -13
  },
  "storm_highlands_old_windmill": {
    "worldX": -14,
    "worldY": -14
  },
  "storm_highlands_rain_shelf": {
    "worldX": -18,
    "worldY": -13
  },
  "storm_highlands_screaming_gully": {
    "worldX": -15,
    "worldY": -15
  },
  "storm_highlands_sky_cairns": {
    "worldX": -13,
    "worldY": -13
  },
  "storm_highlands_storm_altar": {
    "worldX": -13,
    "worldY": -14
  },
  "storm_highlands_stormglass_mine": {
    "worldX": -12,
    "worldY": -15
  },
  "storm_highlands_thunder_pool": {
    "worldX": -15,
    "worldY": -14
  },
  "storm_highlands_windcut_path": {
    "worldX": -17,
    "worldY": -14
  },
  "storm_highlands_worldboss_peak": {
    "worldX": -11,
    "worldY": -14
  },
  "sulfur_valley": {
    "worldX": 32,
    "worldY": 23
  },
  "sunflower_field": {
    "worldX": 9,
    "worldY": 1
  },
  "sunken_catacombs_tide_stair": {
    "worldX": 38,
    "worldY": 10
  },
  "sunspire_white_stone_gate": {
    "worldX": 46,
    "worldY": 2
  },
  "tavern": {
    "worldX": 16,
    "worldY": 3
  },
  "thornmaze_gate_arch": {
    "worldX": -27,
    "worldY": 10
  },
  "thundersteppe_boar_run": {
    "worldX": 12,
    "worldY": 22
  },
  "thundersteppe_charged_bonefield": {
    "worldX": 13,
    "worldY": 22
  },
  "thundersteppe_dragonstorm_eye": {
    "worldX": 17,
    "worldY": 23
  },
  "thundersteppe_drum_circle": {
    "worldX": 15,
    "worldY": 22
  },
  "thundersteppe_eagle_nest_peak": {
    "worldX": 15,
    "worldY": 25
  },
  "thundersteppe_eagle_roost": {
    "worldX": 12,
    "worldY": 24
  },
  "thundersteppe_fill_11_22": {
    "worldX": 11,
    "worldY": 22
  },
  "thundersteppe_fill_12_21": {
    "worldX": 12,
    "worldY": 21
  },
  "thundersteppe_fill_12_25": {
    "worldX": 12,
    "worldY": 25
  },
  "thundersteppe_fill_14_21": {
    "worldX": 14,
    "worldY": 21
  },
  "thundersteppe_fill_14_25": {
    "worldX": 14,
    "worldY": 25
  },
  "thundersteppe_fill_15_24": {
    "worldX": 15,
    "worldY": 24
  },
  "thundersteppe_fill_17_22": {
    "worldX": 17,
    "worldY": 22
  },
  "thundersteppe_fill_20_22": {
    "worldX": 20,
    "worldY": 22
  },
  "thundersteppe_fill_20_23": {
    "worldX": 20,
    "worldY": 23
  },
  "thundersteppe_fill_20_24": {
    "worldX": 20,
    "worldY": 24
  },
  "thundersteppe_herd_plain": {
    "worldX": 13,
    "worldY": 23
  },
  "thundersteppe_lightning_rod_field": {
    "worldX": 14,
    "worldY": 24
  },
  "thundersteppe_nomad_camp": {
    "worldX": 14,
    "worldY": 23
  },
  "thundersteppe_rain_shadow_gully": {
    "worldX": 13,
    "worldY": 21
  },
  "thundersteppe_rolling_gate": {
    "worldX": 11,
    "worldY": 23
  },
  "thundersteppe_skyfire_mesa": {
    "worldX": 15,
    "worldY": 23
  },
  "thundersteppe_split_totem": {
    "worldX": 13,
    "worldY": 24
  },
  "thundersteppe_stormglass_outcrop": {
    "worldX": 16,
    "worldY": 23
  },
  "thundersteppe_stormgrass_track": {
    "worldX": 12,
    "worldY": 23
  },
  "thundersteppe_thunder_pool": {
    "worldX": 11,
    "worldY": 24
  },
  "thundersteppe_thunderhoof_crossing": {
    "worldX": 16,
    "worldY": 22
  },
  "thundersteppe_wind_shrine": {
    "worldX": 11,
    "worldY": 25
  },
  "thundersteppe_wolf_scarp": {
    "worldX": 14,
    "worldY": 22
  },
  "thundersteppe_worldboss_crater": {
    "worldX": 18,
    "worldY": 23
  },
  "tidal_zone": {
    "worldX": 32,
    "worldY": 2
  },
  "time_ruins_epoch_gate": {
    "worldX": -27,
    "worldY": -16
  },
  "town_gate": {
    "worldX": 15,
    "worldY": 4
  },
  "town_library": {
    "worldX": 18,
    "worldY": 2
  },
  "town_plaza": {
    "worldX": 17,
    "worldY": 4
  },
  "training_ground": {
    "worldX": 3,
    "worldY": 2
  },
  "underground_city_gate_lift": {
    "worldX": -19,
    "worldY": -5
  },
  "underwater_cave": {
    "worldX": 32,
    "worldY": 4
  },
  "village_backhill": {
    "worldX": 1,
    "worldY": -6
  },
  "village_creek": {
    "worldX": 2,
    "worldY": -6
  },
  "village_farmland": {
    "worldX": 2,
    "worldY": -5
  },
  "village_gate": {
    "worldX": 2,
    "worldY": 2
  },
  "village_orchard": {
    "worldX": 3,
    "worldY": -5
  },
  "village_outskirts": {
    "worldX": 2,
    "worldY": -4
  },
  "village_square": {
    "worldX": 2,
    "worldY": 1
  },
  "volcano_ash_field": {
    "worldX": 31,
    "worldY": 21
  },
  "volcano_basalt_steps": {
    "worldX": 31,
    "worldY": 25
  },
  "volcano_base": {
    "worldX": 32,
    "worldY": 21
  },
  "volcano_colossus_arena": {
    "worldX": 34,
    "worldY": 25
  },
  "volcano_crater": {
    "worldX": 32,
    "worldY": 24
  },
  "volcano_crystal_vent": {
    "worldX": 35,
    "worldY": 22
  },
  "volcano_ember_barracks": {
    "worldX": 35,
    "worldY": 21
  },
  "volcano_forge_storage": {
    "worldX": 35,
    "worldY": 23
  },
  "volcano_lava_bridge": {
    "worldX": 31,
    "worldY": 24
  },
  "volcano_obsidian_quarry": {
    "worldX": 34,
    "worldY": 23
  },
  "volcano_steam_lift": {
    "worldX": 34,
    "worldY": 22
  },
  "volcano_sulfur_springs": {
    "worldX": 31,
    "worldY": 23
  },
  "volcano_summit": {
    "worldX": 33,
    "worldY": 25
  },
  "volcano_zone_fill_31_22": {
    "worldX": 31,
    "worldY": 22
  },
  "volcano_zone_fill_32_25": {
    "worldX": 32,
    "worldY": 25
  },
  "volcano_zone_fill_34_24": {
    "worldX": 34,
    "worldY": 24
  },
  "watchtower": {
    "worldX": 3,
    "worldY": -3
  },
  "weapon_shop": {
    "worldX": 3,
    "worldY": 1
  },
  "whispering_valley_clear_stream": {
    "worldX": -6,
    "worldY": 7
  },
  "whispering_valley_cold_spring": {
    "worldX": -4,
    "worldY": 5
  },
  "whispering_valley_echo_rocks": {
    "worldX": -6,
    "worldY": 8
  },
  "whispering_valley_entrance": {
    "worldX": -6,
    "worldY": 5
  },
  "whispering_valley_fallen_log": {
    "worldX": -5,
    "worldY": 8
  },
  "whispering_valley_fill_n3_8": {
    "worldX": -3,
    "worldY": 8
  },
  "whispering_valley_fill_n4_6": {
    "worldX": -4,
    "worldY": 6
  },
  "whispering_valley_fill_n4_7": {
    "worldX": -4,
    "worldY": 7
  },
  "whispering_valley_fill_n4_9": {
    "worldX": -4,
    "worldY": 9
  },
  "whispering_valley_fill_n5_11": {
    "worldX": -5,
    "worldY": 11
  },
  "whispering_valley_fill_n6_10": {
    "worldX": -6,
    "worldY": 10
  },
  "whispering_valley_fill_n7_11": {
    "worldX": -7,
    "worldY": 11
  },
  "whispering_valley_fill_n7_6": {
    "worldX": -7,
    "worldY": 6
  },
  "whispering_valley_fill_n7_7": {
    "worldX": -7,
    "worldY": 7
  },
  "whispering_valley_fishing_bend": {
    "worldX": -5,
    "worldY": 6
  },
  "whispering_valley_herb_slope": {
    "worldX": -5,
    "worldY": 7
  },
  "whispering_valley_hidden_cascade": {
    "worldX": -5,
    "worldY": 10
  },
  "whispering_valley_ice_fern_patch": {
    "worldX": -5,
    "worldY": 9
  },
  "whispering_valley_mist_pool": {
    "worldX": -4,
    "worldY": 8
  },
  "whispering_valley_mossy_footbridge": {
    "worldX": -5,
    "worldY": 5
  },
  "whispering_valley_old_shrine": {
    "worldX": -3,
    "worldY": 7
  },
  "whispering_valley_ranger_post": {
    "worldX": -7,
    "worldY": 5
  },
  "whispering_valley_reed_bank": {
    "worldX": -6,
    "worldY": 6
  },
  "whispering_valley_spider_grotto": {
    "worldX": -3,
    "worldY": 5
  },
  "whispering_valley_stone_weir": {
    "worldX": -7,
    "worldY": 8
  },
  "whispering_valley_waterfall_base": {
    "worldX": -6,
    "worldY": 9
  },
  "whispering_valley_whispering_rift": {
    "worldX": -6,
    "worldY": 11
  },
  "whispering_valley_willow_camp": {
    "worldX": -3,
    "worldY": 6
  },
  "whispering_valley_wolf_den": {
    "worldX": -7,
    "worldY": 9
  },
  "wildgrass_hills_bent_oak": {
    "worldX": 2,
    "worldY": -10
  },
  "wildgrass_hills_boar_wallow": {
    "worldX": 4,
    "worldY": -11
  },
  "wildgrass_hills_broken_totem": {
    "worldX": 2,
    "worldY": -8
  },
  "wildgrass_hills_chief_ridge": {
    "worldX": 5,
    "worldY": -9
  },
  "wildgrass_hills_fill_1_n10": {
    "worldX": 1,
    "worldY": -10
  },
  "wildgrass_hills_fill_1_n8": {
    "worldX": 1,
    "worldY": -8
  },
  "wildgrass_hills_fill_2_n12": {
    "worldX": 2,
    "worldY": -12
  },
  "wildgrass_hills_fill_2_n7": {
    "worldX": 2,
    "worldY": -7
  },
  "wildgrass_hills_fill_3_n8": {
    "worldX": 3,
    "worldY": -8
  },
  "wildgrass_hills_fill_4_n12": {
    "worldX": 4,
    "worldY": -12
  },
  "wildgrass_hills_fill_5_n8": {
    "worldX": 5,
    "worldY": -8
  },
  "wildgrass_hills_fill_6_n9": {
    "worldX": 6,
    "worldY": -9
  },
  "wildgrass_hills_goblin_blind": {
    "worldX": 6,
    "worldY": -11
  },
  "wildgrass_hills_hawk_perch": {
    "worldX": 4,
    "worldY": -10
  },
  "wildgrass_hills_hidden_spring": {
    "worldX": 1,
    "worldY": -9
  },
  "wildgrass_hills_lower_slope": {
    "worldX": 2,
    "worldY": -11
  },
  "wildgrass_hills_old_road_cut": {
    "worldX": 1,
    "worldY": -12
  },
  "wildgrass_hills_orchard_ruin": {
    "worldX": 5,
    "worldY": -11
  },
  "wildgrass_hills_scout_ledge": {
    "worldX": 3,
    "worldY": -10
  },
  "wildgrass_hills_seed_gully": {
    "worldX": 2,
    "worldY": -9
  },
  "wildgrass_hills_stone_ring": {
    "worldX": 3,
    "worldY": -9
  },
  "wildgrass_hills_stormgrass_crown": {
    "worldX": 6,
    "worldY": -8
  },
  "wildgrass_hills_stream_cut": {
    "worldX": 3,
    "worldY": -12
  },
  "wildgrass_hills_tallgrass_lane": {
    "worldX": 3,
    "worldY": -11
  },
  "wildgrass_hills_thunder_mound": {
    "worldX": 4,
    "worldY": -9
  },
  "wildgrass_hills_watchfire_camp": {
    "worldX": 5,
    "worldY": -10
  },
  "wildgrass_hills_windbreak_gate": {
    "worldX": 1,
    "worldY": -11
  },
  "wildgrass_hills_windmill_shell": {
    "worldX": 6,
    "worldY": -10
  },
  "windmill_farm": {
    "worldX": 10,
    "worldY": 2
  },
  "windmill_interior": {
    "worldX": 10,
    "worldY": 0
  },
  "withered_forest": {
    "worldX": -7,
    "worldY": 14
  },
  "wolf_den": {
    "worldX": -26,
    "worldY": -22
  }
};
