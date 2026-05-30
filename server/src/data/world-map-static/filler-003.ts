import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS_PART_003: Record<string, RoomDef> = {
"kingsroad_market_fill_29_3": {
    "id": "kingsroad_market_fill_29_3",
    "name": "東市攤幕封口",
    "zone": "kingsroad_market",
    "description": "東市攤幕封口位於高陽台東側，西面仍看得到石階欄杆，東面接近市集外牆與封閉驛道。成排布幕、貨箱和攤位標價木牌擋住直行路線，這格是服務區 blocker；玩家只能辨認攤位後場與取貨窗口，不可穿越或交易。",
    "image": "kingsroad_market_fill_29_3.png",
    "imagePrompt": "東市攤幕封口 kingsroad_market_fill_29_3 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 東市攤幕封口位於高陽台東側，西面仍看得到石階欄杆，東面接近市集外牆與封閉驛道。成排布幕、貨箱和攤位標價木牌擋住直行路線，這格是服務區 blocker；玩家只能辨認攤位後場與取貨窗口，不可穿越或交易。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 4,
    "worldX": 29,
    "worldY": 3
  },

"kingsroad_market_fill_30_3": {
    "id": "kingsroad_market_fill_30_3",
    "name": "東門海風封驛",
    "zone": "kingsroad_market",
    "description": "東門海風封驛貼著王道市集東牆，西側攤幕後場堆滿車軸與麻袋，東面能聞到海岸潮氣卻被關閉城門擋住。門柱上掛著往東海岸的舊驛牌與守衛告示，玩家可確認東門服務位置，但門閂封鎖，這裡只作 border blocker，暫不開放跨區通行。",
    "image": "kingsroad_market_fill_30_3.png",
    "imagePrompt": "東門海風封驛 kingsroad_market_fill_30_3 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: east toward locked boundary, source room details: 東門海風封驛貼著王道市集東牆，西側攤幕後場堆滿車軸與麻袋，東面能聞到海岸潮氣卻被關閉城門擋住。門柱上掛著往東海岸的舊驛牌與守衛告示，玩家可確認東門服務位置，但門閂封鎖，這裡只作 border blocker，暫不開放跨區通行。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側城門暫時落閂，海風從門縫吹入但不能前往海岸"
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
    "name": "城門北側酒館貨欄",
    "zone": "lakeside_town",
    "description": "城門北側酒館貨欄位在城鎮大門北面，南側門洞有守衛腳步聲，東邊酒館後牆飄出麥酒香。木桶與補給箱封住石板角落，這裡是 service blocker，只標示城門與酒館後勤邊界。",
    "image": "lakeside_town_fill_15_3.png",
    "imagePrompt": "城門北側酒館貨欄 lakeside_town_fill_15_3 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 城門北側酒館貨欄位在城鎮大門北面，南側門洞有守衛腳步聲，東邊酒館後牆飄出麥酒香。木桶與補給箱封住石板角落，這裡是 service blocker，只標示城門與酒館後勤邊界。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 15,
    "worldY": 3
  },

"lakeside_town_fill_15_5": {
    "id": "lakeside_town_fill_15_5",
    "name": "鐵匠鋪西補給石路",
    "zone": "lakeside_town",
    "description": "鐵匠鋪西補給石路位在城門南側，北面仍可回望鎮門旗桿，東邊鐵匠鋪傳來敲砧聲，南側朝聖古道邊界開始變窄。這裡是 service blocker，補給推車停滿石板路，不開額外街巷。",
    "image": "lakeside_town_fill_15_5.png",
    "imagePrompt": "鐵匠鋪西補給石路 lakeside_town_fill_15_5 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 鐵匠鋪西補給石路位在城門南側，北面仍可回望鎮門旗桿，東邊鐵匠鋪傳來敲砧聲，南側朝聖古道邊界開始變窄。這裡是 service blocker，補給推車停滿石板路，不開額外街巷。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 15,
    "worldY": 5
  },

"lakeside_town_fill_15_6": {
    "id": "lakeside_town_fill_15_6",
    "name": "聖門北側商巷界",
    "zone": "lakeside_town",
    "description": "聖門北側商巷界位在湖畔城鎮南緣，北面鐵匠鋪西補給石路堆著貨車，南方朝聖古道聖門露出白石，東側能望見安靜眺臺的高處欄杆。這裡是跨區 border service route，專門銜接城鎮與朝聖古道。",
    "image": "lakeside_town_fill_15_6.png",
    "imagePrompt": "聖門北側商巷界 lakeside_town_fill_15_6 in lakeside_town 湖畔城鎮, room function border road, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: south toward 聖地門, east toward 靜望臺, source room details: 聖門北側商巷界位在湖畔城鎮南緣，北面鐵匠鋪西補給石路堆著貨車，南方朝聖古道聖門露出白石，東側能望見安靜眺臺的高處欄杆。這裡是跨區 border service route，專門銜接城鎮與朝聖古道。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_sanctuary_gate",
        "description": "沿南緣商巷與白石路標前行，穿過長距離邊界路線抵達朝聖古道聖門。",
        "edgeKind": "distant_route",
        "edgeNote": "此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。"
      },
      {
        "direction": "east",
        "targetRoomId": "pilgrim_road_quiet_overlook",
        "description": "沿湖鎮南緣貨道向東繞行，穿過長距離邊界路線抵達朝聖古道安靜眺臺。",
        "edgeKind": "distant_route",
        "edgeNote": "此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。"
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
    "name": "旅店北側神殿巷欄",
    "zone": "lakeside_town",
    "description": "旅店北側神殿巷欄位在湖濱旅店北面，南側客房窗燈映在青石上，東邊小神殿鐘聲穿過窄巷。低欄與供水桶封住巷口，桶旁放著藥草包、水罐與旅店物資籃，這裡是 service blocker，保留補給區邊界。",
    "image": "lakeside_town_fill_16_1.png",
    "imagePrompt": "旅店北側神殿巷欄 lakeside_town_fill_16_1 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 旅店北側神殿巷欄位在湖濱旅店北面，南側客房窗燈映在青石上，東邊小神殿鐘聲穿過窄巷。低欄與供水桶封住巷口，桶旁放著藥草包、水罐與旅店物資籃，這裡是 service blocker，保留補給區邊界。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 1,
    "worldX": 16,
    "worldY": 1
  },

"lakeside_town_fill_18_0": {
    "id": "lakeside_town_fill_18_0",
    "name": "法院東傳送補給坪",
    "zone": "lakeside_town",
    "description": "法院東傳送補給坪位在湖畔法院東側，西面石階通向審判廳，南方傳送廣場的符光在地面閃爍。補給欄旁堆著卷宗箱、印泥罐與備用傳送符紙，護欄限制人流，不作一般通行街道。",
    "image": "lakeside_town_fill_18_0.png",
    "imagePrompt": "法院東傳送補給坪 lakeside_town_fill_18_0 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 法院東傳送補給坪位在湖畔法院東側，西面石階通向審判廳，南方傳送廣場的符光在地面閃爍。補給欄旁堆著卷宗箱、印泥罐與備用傳送符紙，護欄限制人流，不作一般通行街道。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 18,
    "worldY": 0
  },

"lakeside_town_fill_18_5": {
    "id": "lakeside_town_fill_18_5",
    "name": "拍賣行南倉庫貨巷",
    "zone": "lakeside_town",
    "description": "拍賣行南倉庫貨巷夾在拍賣行與湖濱倉庫之間，北面拍賣鐘聲沉悶，東側倉庫門堆滿封箱、布料卷與貨單木牌，西邊競技入口旗影晃動。這裡是 service blocker，貨巷只供後勤堆放，不開新路。",
    "image": "lakeside_town_fill_18_5.png",
    "imagePrompt": "拍賣行南倉庫貨巷 lakeside_town_fill_18_5 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 拍賣行南倉庫貨巷夾在拍賣行與湖濱倉庫之間，北面拍賣鐘聲沉悶，東側倉庫門堆滿封箱、布料卷與貨單木牌，西邊競技入口旗影晃動。這裡是 service blocker，貨巷只供後勤堆放，不開新路。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "lakeside_town_fill_18_6.png",
    "imagePrompt": "湖畔青石街 lakeside_town_fill_18_6 in lakeside_town 湖畔城鎮, room function resource path, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: west toward 月紋裁縫坊, east toward 湖鮮魚市, source room details: 湖畔青石街夾在月紋裁縫坊與湖鮮魚市之間，潮濕石板上有布料推車、水桶與魚販腳印。西側可回裁縫坊，東側通往魚市攤棚，玩家能從路標判斷市場與湖岸服務區的分流。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "name": "銀行北側監獄牆巷",
    "zone": "lakeside_town",
    "description": "銀行北側監獄牆巷位在湖畔銀行北面，南側銅門反射湖光，西邊監獄高牆投下陰影。石欄與巡邏繩封住牆根，是 service blocker，用來標示金融區與監獄區邊界。",
    "image": "lakeside_town_fill_19_3.png",
    "imagePrompt": "銀行北側監獄牆巷 lakeside_town_fill_19_3 in lakeside_town 湖畔城鎮, room function danger pocket, terrain wet bluestone town street, lakeside service walls, barrels, shop awnings, warm window light and lake reflections, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 銀行北側監獄牆巷位在湖畔銀行北面，南側銅門反射湖光，西邊監獄高牆投下陰影。石欄與巡邏繩封住牆根，是 service blocker，用來標示金融區與監獄區邊界。, quiet lakeside town service boundary, clean civic mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "王道西市石路是市集西口的短石階，東側傳送廣場立著藍色路標，南面守衛哨巷被木欄隔開。貨車只能沿東側石路入市，旁邊的封欄、車轍和行李牌標示這裡是單向 route 與西側動線節點；玩家可辨認回廣場路線，不能下切哨巷。",
    "image": "kingsroad_market_fill_22_0.png",
    "imagePrompt": "王道西市石路 kingsroad_market_fill_22_0 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: east toward 傳送陣廣場, south toward locked boundary, source room details: 王道西市石路是市集西口的短石階，東側傳送廣場立著藍色路標，南面守衛哨巷被木欄隔開。貨車只能沿東側石路入市，旁邊的封欄、車轍和行李牌標示這裡是單向 route 與西側動線節點；玩家可辨認回廣場路線，不能下切哨巷。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "kingsroad_market_portal_plaza",
        "description": "東側沿平整石板進入傳送廣場與市集主街"
      },
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南面哨巷有木欄分流，不能從貨車石路直接下切"
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
    "description": "王道西哨巷靠近市集守衛哨，東側可見檢查桌、銅鈴和通行牌，北面貨車石路被分流木欄隔住。牆上掛著湖畔方向路牌，此處只作守衛問訊與巡邏邊界；玩家能確認哨所服務位置，但不能從旁路穿越。",
    "image": "kingsroad_market_fill_22_1.png",
    "imagePrompt": "王道西哨巷 kingsroad_market_fill_22_1 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: east toward 衛兵亭, north toward locked boundary, source room details: 王道西哨巷靠近市集守衛哨，東側可見檢查桌、銅鈴和通行牌，北面貨車石路被分流木欄隔住。牆上掛著湖畔方向路牌，此處只作守衛問訊與巡邏邊界；玩家能確認哨所服務位置，但不能從旁路穿越。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "kingsroad_market_guard_post",
        "description": "東側穿過檢查桌旁的窄石巷，抵達市集守衛哨"
      },
      {
        "direction": "north",
        "targetRoomId": "",
        "locked": true,
        "description": "北面貨車石路被分流木欄隔開，守衛不讓行人翻越"
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
    "name": "夢水鏡面棧道",
    "zone": "marsh_of_mirrors",
    "description": "夢水鏡面棧道位於月光濕地與鏡沼交界，西側水霧仍帶著銀色蘆光，東面倒影忽然變冷。半沉木樁、繩標與鏡水踏板只保留往西穿回夢水核心的特殊水路，東側鏡面深潭被繩標封住，是明確 border route 與封路提示。",
    "image": "marsh_of_mirrors_fill_24_15.png",
    "imagePrompt": "夢水鏡面棧道 marsh_of_mirrors_fill_24_15 in marsh_of_mirrors 鏡沼, room function border road, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: west toward 夢水核心, east toward locked boundary, source room details: 夢水鏡面棧道位於月光濕地與鏡沼交界，西側水霧仍帶著銀色蘆光，東面倒影忽然變冷。半沉木樁、繩標與鏡水踏板只保留往西穿回夢水核心的特殊水路，東側鏡面深潭被繩標封住，是明確 border route 與封路提示。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "moonlit_fen_dreamwater_core",
        "description": "這條固定路線會穿過邊界地形與中間道路後抵達目標，並非世界全圖上的相鄰一格出口。",
        "edgeKind": "distant_route",
        "edgeNote": "此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。"
      },
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側鏡面深潭沒有木樁，冷水倒影封住通往沼心的直路"
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
    "name": "西界水草鏡岸",
    "zone": "marsh_of_mirrors",
    "description": "西界水草鏡岸靠近泥炭小洲南側，北面仍能看見蘆根浮在黑水上，東側回聲沼的水面反光更深。岸邊留有採集水草與銀泥的割痕，幾根半沉木樁標出舊棧道方向，但木板在黑水邊緣全部中斷。泥面下不斷冒出細泡，像倒影正在拉扯靴底，這裡只作濕地封閉邊界與採集警示，提醒玩家折回有樁影的安全路線。",
    "image": "marsh_of_mirrors_fill_24_18.png",
    "imagePrompt": "西界水草鏡岸 marsh_of_mirrors_fill_24_18 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西界水草鏡岸靠近泥炭小洲南側，北面仍能看見蘆根浮在黑水上，東側回聲沼的水面反光更深。岸邊留有採集水草與銀泥的割痕，但木板在此中斷，是封閉 blocker 與濕地邊界。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 24,
    "worldY": 18
  },

"marsh_of_mirrors_fill_25_13": {
    "id": "marsh_of_mirrors_fill_25_13",
    "name": "北界毒蘆封口",
    "zone": "marsh_of_mirrors",
    "description": "北界毒蘆封口貼著競技場南緣與鏡沼北岸，南側蜘蛛蘆叢的黑絲掛在木樁上，東面蛇形水道仍有濕滑泥線。毒蘆高過肩頭，葉面滲出淡綠汁液，靠近北側時黑泥會把木樁根部整圈吞住。這裡是邊界封鎖，不安排通行或怪物遭遇，只用毒蘆、深泥與斷樁提示玩家不要從鏡沼外緣硬切回競技場方向。",
    "image": "marsh_of_mirrors_fill_25_13.png",
    "imagePrompt": "北界毒蘆封口 marsh_of_mirrors_fill_25_13 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 北界毒蘆封口貼著競技場南緣與鏡沼北岸，南側蜘蛛蘆叢的黑絲掛在木樁上，東面蛇形水道仍有濕滑泥線。這裡是 border blocker，毒蘆和深泥封住北面，不安排通行或怪物遭遇。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 25,
    "worldY": 13
  },

"marsh_of_mirrors_fill_25_19": {
    "id": "marsh_of_mirrors_fill_25_19",
    "name": "南鏡水草灘",
    "zone": "marsh_of_mirrors",
    "description": "南鏡水草灘位於回聲沼南面，北側水聲被濃霧折回，東側月光堤道的木樁只露出尖端。灘邊有水草、毒囊與銀泥被割走的痕跡，還能看見採集者用細繩圈出的安全泥線。南面軟泥會吞沒靴底，倒影又把岸線拉得比實際更遠，這格只作採集邊界與封閉警示，不提供繼續南下的棧道，霧中浮標也指回北側。",
    "image": "marsh_of_mirrors_fill_25_19.png",
    "imagePrompt": "南鏡水草灘 marsh_of_mirrors_fill_25_19 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 南鏡水草灘位於回聲沼南面，北側水聲被濃霧折回，東側月光堤道的木樁只露出尖端。灘邊有水草與毒囊採集痕跡，但南面軟泥會吞沒靴底，這格只作採集邊界與封閉 blocker。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 6,
    "worldX": 25,
    "worldY": 19
  },

"marsh_of_mirrors_fill_26_18": {
    "id": "marsh_of_mirrors_fill_26_18",
    "name": "中沼倒影封汊",
    "zone": "marsh_of_mirrors",
    "description": "中沼倒影封汊夾在北側霧盲灘與南側月光堤道之間，西面回聲沼的水泡不斷冒起。水面把三個方向都映成像可行棧道，實際上木樁已沉入黑水，只剩繩孔和腐木尖偶爾露出。若沿倒影前進，腳下會立刻踩空並被蘆根絆住。這裡標示不可通行的封閉汊口，提醒玩家回到穩固棧道再繞行，先看木樁真影。",
    "image": "marsh_of_mirrors_fill_26_18.png",
    "imagePrompt": "中沼倒影封汊 marsh_of_mirrors_fill_26_18 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 中沼倒影封汊夾在北側霧盲灘與南側月光堤道之間，西面回聲沼的水泡不斷冒起。三邊看似有路，其實木樁都沉入黑水，這裡標示不可通行 blocker，提醒玩家改走穩固棧道。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 26,
    "worldY": 18
  },

"marsh_of_mirrors_fill_27_14": {
    "id": "marsh_of_mirrors_fill_27_14",
    "name": "沉祠西南封棧",
    "zone": "marsh_of_mirrors",
    "description": "沉祠西南封棧靠近北側下沉神龕，南面破碎倒影灘的裂水閃著白光，西側失落石堆被黑泥半埋。棧板在三處都已塌陷，只留下被潮氣泡爛的警示木牌，牌腳綁著褪色祈繩與幾片碎鏡。此處沒有採集點或任務入口，只有神龕方向的冷香氣與水下裂光提醒玩家，這是一段封閉邊界，不能從祠堂背面切入沼心。",
    "image": "marsh_of_mirrors_fill_27_14.png",
    "imagePrompt": "沉祠西南封棧 marsh_of_mirrors_fill_27_14 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 沉祠西南封棧靠近北側下沉神龕，南面破碎倒影灘的裂水閃著白光，西側失落石堆被黑泥半埋。棧板在三處都已塌陷，只留下警示木牌，是封閉 blocker，沒有採集點或任務入口。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": 27,
    "worldY": 14
  },

"marsh_of_mirrors_fill_27_17": {
    "id": "marsh_of_mirrors_fill_27_17",
    "name": "霧盲採草水坎",
    "zone": "marsh_of_mirrors",
    "description": "霧盲採草水坎在鏡池南側形成濕滑邊坡，西面霧盲灘還有殘破布旗，東側暗樹人林的根影壓到水面。坡下長著可採的沼草與銀泥斑，採集繩結固定在少數乾硬草根旁，離開繩結一步就會踩進黑水深處。霧裡的倒影會把岸線推遠，這裡只能作採集邊界與封閉水坎，不能當作通往暗樹林的捷徑，水聲會誤導方向。",
    "image": "marsh_of_mirrors_fill_27_17.png",
    "imagePrompt": "霧盲採草水坎 marsh_of_mirrors_fill_27_17 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 霧盲採草水坎在鏡池南側形成濕滑邊坡，西面霧盲灘還有殘破布旗，東側暗樹人林的根影壓到水面。坡下長著可採的沼草與銀泥斑，但深水封住通行，是採集邊界與 blocker。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 27,
    "worldY": 17
  },

"marsh_of_mirrors_fill_27_19": {
    "id": "marsh_of_mirrors_fill_27_19",
    "name": "巫燈月堤接道",
    "zone": "marsh_of_mirrors",
    "description": "巫燈月堤接道是一段架在南側黑水上的窄木棧，西面月光堤道的銀色樁影逐漸變暗，東側巫婆燈籠在霧裡晃動。棧面雖窄，仍有完整橫木和防滑刻痕，兩側插著低矮銀釘讓玩家辨認真路，不必相信水面倒影。這裡是正式通路，讓隊伍沿鏡沼南緣連續通行，不放怪物或採集互動，只提供清楚的東西向路線銜接。",
    "image": "marsh_of_mirrors_fill_27_19.png",
    "imagePrompt": "巫燈月堤接道 marsh_of_mirrors_fill_27_19 in marsh_of_mirrors 鏡沼, room function connector, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: west toward 月光堤道, east toward 巫燈處, source room details: 巫燈月堤接道是一段架在南側黑水上的窄木棧，西面月光堤道的銀色樁影逐漸變暗，東側巫婆燈籠在霧裡晃動。這裡是正式 route，讓玩家沿鏡沼南緣連續通行，不放怪物或採集互動。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "marsh_of_mirrors_moonlit_causeway",
        "description": "西側沿銀色木樁踏回月光堤道的穩固棧面"
      },
      {
        "direction": "east",
        "targetRoomId": "marsh_of_mirrors_hag_lantern",
        "description": "東側順著晃動燈影走向巫婆燈籠旁的霧岸"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 6,
    "worldX": 27,
    "worldY": 19
  },

"marsh_of_mirrors_fill_28_15": {
    "id": "marsh_of_mirrors_fill_28_15",
    "name": "碎影柳根封口",
    "zone": "marsh_of_mirrors",
    "description": "碎影柳根封口位於破碎倒影灘東側，西面裂水仍映出斷裂月光，南側沉柳根鬚垂入黑水。柳根下沒有可站立的泥台，棧道被倒木壓斷後只剩斜插在水裡的木楔，水面還會映出一條不存在的回程路。若玩家靠近，根鬚會在黑泥中收緊，這格只作封閉邊界與沼心危險提示，提醒隊伍不要從柳根下穿行。",
    "image": "marsh_of_mirrors_fill_28_15.png",
    "imagePrompt": "碎影柳根封口 marsh_of_mirrors_fill_28_15 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 碎影柳根封口位於破碎倒影灘東側，西面裂水仍映出斷裂月光，南側沉柳根鬚垂入黑水。柳根下沒有可站立的泥台，棧道被倒木壓斷，這格只作封閉 blocker 與沼心危險提示。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": 28,
    "worldY": 15
  },

"marsh_of_mirrors_fill_29_16": {
    "id": "marsh_of_mirrors_fill_29_16",
    "name": "東沼邊界黑水",
    "zone": "marsh_of_mirrors",
    "description": "東沼邊界黑水貼近沉柳東側，西面柳根像爪子伸進泥面，東側能望見通往蛇河三角洲的水鏡邊路。這裡沒有鋪設棧板，只用幾枚半沉浮標標出不可通行的邊界，浮標下方的黑水深到看不見蘆根。水面倒影會把三角洲入口拉近，但實際沒有落腳點，這格用來避免玩家誤闖深水，並提示必須改走正式渡口。",
    "image": "marsh_of_mirrors_fill_29_16.png",
    "imagePrompt": "東沼邊界黑水 marsh_of_mirrors_fill_29_16 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 東沼邊界黑水貼近沉柳東側，西面柳根像爪子伸進泥面，東側能望見通往蛇河三角洲的水鏡邊路。這裡沒有鋪設棧板，只用浮標標出不可通行的 border blocker，避免玩家誤闖深水。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 29,
    "worldY": 16
  },

"marsh_of_mirrors_fill_30_14": {
    "id": "marsh_of_mirrors_fill_30_14",
    "name": "蛇渡鏡沼碼頭",
    "zone": "marsh_of_mirrors",
    "description": "蛇渡鏡沼碼頭位於鏡沼東緣，東側窄渡口把冷黑水接到蛇河三角洲的入口渡船，西面則被無底泥潭截斷。碼頭木板被潮水泡得發黑，但登船側仍有繩樁、蛇形刻痕與可辨認的踏板順序。西側舊棧板已沉入泥潭，只用木柵封住回切沼心的方向。這裡是跨區邊界通路，只保留向東登船進入三角洲的安全路線。",
    "image": "marsh_of_mirrors_fill_30_14.png",
    "imagePrompt": "蛇渡鏡沼碼頭 marsh_of_mirrors_fill_30_14 in marsh_of_mirrors 鏡沼, room function danger pocket, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: east toward 渡口入口, west toward locked boundary, source room details: 蛇渡鏡沼碼頭位於鏡沼東緣，東側窄渡口把冷黑水接到蛇河三角洲的入口渡船，西面則被無底泥潭截斷。這裡是跨區 border route，只保留向東登船的通路，碼頭內側以木柵封閉。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "serpent_delta_entrance_ferry",
        "description": "東側踏上窄渡板，從鏡沼黑水轉入蛇河三角洲入口渡船"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西面無底泥潭吞掉舊棧板，不能從碼頭內側回切沼心"
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
    "name": "鷺標水草渡坎",
    "zone": "marsh_of_mirrors",
    "description": "鷺標水草渡坎貼著鏡沼東南水線，西側黑水邊界浮著採集過的水草束，東面白鷺標竿引向蛇河三角洲。渡坎只有一條被水草壓出的淺泥脊，旁邊插著羽形標記，提醒玩家順著東側水痕跨區。南北兩側都是深泥與假倒影，只有標竿旁能短暫站穩；這裡兼作邊界採集點與短渡口，不允許沿岸亂切，霧燈指向東面。",
    "image": "marsh_of_mirrors_fill_30_16.png",
    "imagePrompt": "鷺標水草渡坎 marsh_of_mirrors_fill_30_16 in marsh_of_mirrors 鏡沼, room function resource path, terrain mirror marsh boardwalk, black water reflections, half-sunk posts, reeds, cold silver light and deceptive water surface, visible path cues: east toward 鷺標洲, source room details: 鷺標水草渡坎貼著鏡沼東南水線，西側黑水邊界浮著採集過的水草束，東面白鷺標竿引向蛇河三角洲。這裡是 border 採集點與短渡口，玩家只能順著東側水痕跨區，南北都是深泥。, uneasy reflective swamp danger, routes distorted by water mirror light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "serpent_delta_heron_marker",
        "description": "東側沿白鷺標竿與淺水泥脊，銜接蛇河三角洲濕灘"
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
    "name": "霧門北貨箱封道",
    "zone": "mist_harbor",
    "description": "霧門北貨箱封道位在霧港西門北側，南面霧門銅鐘聲被倉牆擋住，東側海關屋的窗燈透過箱縫。堆疊貨箱與濕帆布封住內巷，是港內 blocker，不提供可通行路線。",
    "image": "mist_harbor_fill_40_1.png",
    "imagePrompt": "霧門北貨箱封道 mist_harbor_fill_40_1 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 霧門北貨箱封道位在霧港西門北側，南面霧門銅鐘聲被倉牆擋住，東側海關屋的窗燈透過箱縫。堆疊貨箱與濕帆布封住內巷，是港內 blocker，不提供可通行路線。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 40,
    "worldY": 1
  },

"mist_harbor_fill_40_3": {
    "id": "mist_harbor_fill_40_3",
    "name": "傳送燈西側霧棧封",
    "zone": "mist_harbor",
    "description": "傳送燈西側霧棧封位在霧門南側與傳送燈籠西面，北邊霧門拱影還在視線裡，東側燈籠光被霧壓成圓暈。木棧板外緣被港霧吞沒，這裡是純 blocker，提醒玩家不要從燈籠後方繞路。",
    "image": "mist_harbor_fill_40_3.png",
    "imagePrompt": "傳送燈西側霧棧封 mist_harbor_fill_40_3 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 傳送燈西側霧棧封位在霧門南側與傳送燈籠西面，北邊霧門拱影還在視線裡，東側燈籠光被霧壓成圓暈。木棧板外緣被港霧吞沒，這裡是純 blocker，提醒玩家不要從燈籠後方繞路。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 40,
    "worldY": 3
  },

"mist_harbor_fill_40_5": {
    "id": "mist_harbor_fill_40_5",
    "name": "血鹽北界焦油封路",
    "zone": "mist_harbor",
    "description": "血鹽北界焦油封路壓在霧港南緣，南面血鹽海岸潮門傳來紅潮聲，東側霧望燈籠仍亮著冷光。石板被焦油與鹽殼黏住，是跨區 border blocker，只標示港口與血鹽海岸的危險分界。",
    "image": "mist_harbor_fill_40_5.png",
    "imagePrompt": "血鹽北界焦油封路 mist_harbor_fill_40_5 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 血鹽北界焦油封路壓在霧港南緣，南面血鹽海岸潮門傳來紅潮聲，東側霧望燈籠仍亮著冷光。石板被焦油與鹽殼黏住，是跨區 border blocker，只標示港口與血鹽海岸的危險分界。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": 40,
    "worldY": 5
  },

"mist_harbor_fill_41_n1": {
    "id": "mist_harbor_fill_41_n1",
    "name": "船長室北霧石封",
    "zone": "mist_harbor",
    "description": "船長室北霧石封位在船長辦公室北面，南側可聽見紙圖被潮風翻動，東邊海門鎖鏈在霧裡敲響。濕石階被倒塌繩柱截斷，這裡是港內 blocker，用來封住北側棧道外緣。",
    "image": "mist_harbor_fill_41_n1.png",
    "imagePrompt": "船長室北霧石封 mist_harbor_fill_41_n1 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 船長室北霧石封位在船長辦公室北面，南側可聽見紙圖被潮風翻動，東邊海門鎖鏈在霧裡敲響。濕石階被倒塌繩柱截斷，這裡是港內 blocker，用來封住北側棧道外緣。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 41,
    "worldY": -1
  },

"mist_harbor_fill_42_5": {
    "id": "mist_harbor_fill_42_5",
    "name": "破船標北界石板",
    "zone": "mist_harbor",
    "description": "破船標北界石板位在霧港南側，北面圖表檔案館的石牆保持乾燥，西側霧望燈籠照著濕板路，南面血鹽海岸破船標露出鹽紅色影子。這裡是 border blocker，焦油石板標示危險邊界。",
    "image": "mist_harbor_fill_42_5.png",
    "imagePrompt": "破船標北界石板 mist_harbor_fill_42_5 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 破船標北界石板位在霧港南側，北面圖表檔案館的石牆保持乾燥，西側霧望燈籠照著濕板路，南面血鹽海岸破船標露出鹽紅色影子。這裡是 border blocker，焦油石板標示危險邊界。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": 42,
    "worldY": 5
  },

"mist_harbor_fill_43_0": {
    "id": "mist_harbor_fill_43_0",
    "name": "走私巷東霧樁",
    "zone": "mist_harbor",
    "description": "走私巷東霧樁夾在潮池小祠與公會碼頭之間，西面走私巷的暗門被魚網遮住，南北兩側各有港燈晃動。木樁被鐵鍊交叉封住，是純 blocker，不讓玩家從小祠背面切入碼頭。",
    "image": "mist_harbor_fill_43_0.png",
    "imagePrompt": "走私巷東霧樁 mist_harbor_fill_43_0 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 走私巷東霧樁夾在潮池小祠與公會碼頭之間，西面走私巷的暗門被魚網遮住，南北兩側各有港燈晃動。木樁被鐵鍊交叉封住，是純 blocker，不讓玩家從小祠背面切入碼頭。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": 43,
    "worldY": 0
  },

"mist_harbor_fill_43_4": {
    "id": "mist_harbor_fill_43_4",
    "name": "鹽診所南貨棚封",
    "zone": "mist_harbor",
    "description": "鹽診所南貨棚封位在鹽診所南側，北面藥窗透出白光，西邊圖表檔案館的牆角堆著濕航圖箱。貨棚被破木梁壓住，這裡是港內 blocker，只保留診所後勤視覺，不作通路。",
    "image": "mist_harbor_fill_43_4.png",
    "imagePrompt": "鹽診所南貨棚封 mist_harbor_fill_43_4 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 鹽診所南貨棚封位在鹽診所南側，北面藥窗透出白光，西邊圖表檔案館的牆角堆著濕航圖箱。貨棚被破木梁壓住，這裡是港內 blocker，只保留診所後勤視覺，不作通路。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 43,
    "worldY": 4
  },

"mist_harbor_fill_44_3": {
    "id": "mist_harbor_fill_44_3",
    "name": "船匠院南霧棧",
    "zone": "mist_harbor",
    "description": "船匠院南霧棧位在船匠院南側，北面傳來刨木與鐵釘聲，西側鹽診所的白燈被霧氣拉長。棧道盡頭被未完工龍骨架擋住，是純 blocker，避免船匠院後方形成未規劃支路。",
    "image": "mist_harbor_fill_44_3.png",
    "imagePrompt": "船匠院南霧棧 mist_harbor_fill_44_3 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 船匠院南霧棧位在船匠院南側，北面傳來刨木與鐵釘聲，西側鹽診所的白燈被霧氣拉長。棧道盡頭被未完工龍骨架擋住，是純 blocker，避免船匠院後方形成未規劃支路。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 44,
    "worldY": 3
  },

"mist_harbor_fill_45_2": {
    "id": "mist_harbor_fill_45_2",
    "name": "白石門西霧堤",
    "zone": "mist_harbor",
    "description": "白石門西霧堤位在霧港東側，北面防波堤盡頭拍著白浪，西面船匠院的木架仍可辨認，東側日尖城白石門在霧裡發亮。這裡是 border blocker，只標示港口接近白石門的界線，不開跨區路。",
    "image": "mist_harbor_fill_45_2.png",
    "imagePrompt": "白石門西霧堤 mist_harbor_fill_45_2 in mist_harbor 霧港, room function danger pocket, terrain foggy harbor lane, damp planks, warehouse walls, rope posts, salt lanterns and muted sea light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 白石門西霧堤位在霧港東側，北面防波堤盡頭拍著白浪，西面船匠院的木架仍可辨認，東側日尖城白石門在霧裡發亮。這裡是 border blocker，只標示港口接近白石門的界線，不開跨區路。, salt fog harbor work route, damp warehouse danger at the edge, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 45,
    "worldY": 2
  },

"moonlit_fen_fill_14_14": {
    "id": "moonlit_fen_fill_14_14",
    "name": "西北黑水封汊",
    "zone": "moonlit_fen",
    "description": "西北黑水封汊位於月光濕地外緣，一段斷裂木橋插在泥岸邊，南側蘆葦低伏，東面水面被銀霧遮成黑鏡。木橋下方沒有穩固踏點，只能在蘆根旁採水草，這裡作為封閉 blocker 保留濕地邊界。",
    "image": "moonlit_fen_fill_14_14.png",
    "imagePrompt": "西北黑水封汊 moonlit_fen_fill_14_14 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西北黑水封汊位於月光濕地外緣，一段斷裂木橋插在泥岸邊，南側蘆葦低伏，東面水面被銀霧遮成黑鏡。木橋下方沒有穩固踏點，只能在蘆根旁採水草，這裡作為封閉 blocker 保留濕地邊界。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 14,
    "worldY": 14
  },

"moonlit_fen_fill_14_17": {
    "id": "moonlit_fen_fill_14_17",
    "name": "西蘆霧欄",
    "zone": "moonlit_fen",
    "description": "西蘆霧欄是一段倒塌竹欄與白蘆編成的濕地邊牆，北側水聲貼著岸邊回響，東面才是較安全的棧道。蘆根下全是深泥，竹欄旁只留下水草與蘆葉採集痕跡，不安排怪物或任務目標。",
    "image": "moonlit_fen_fill_14_17.png",
    "imagePrompt": "西蘆霧欄 moonlit_fen_fill_14_17 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西蘆霧欄是一段倒塌竹欄與白蘆編成的濕地邊牆，北側水聲貼著岸邊回響，東面才是較安全的棧道。蘆根下全是深泥，竹欄旁只留下水草與蘆葉採集痕跡，不安排怪物或任務目標。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 14,
    "worldY": 17
  },

"moonlit_fen_fill_14_18": {
    "id": "moonlit_fen_fill_14_18",
    "name": "西側泥泡岸",
    "zone": "moonlit_fen",
    "description": "西側泥泡岸靠近月光濕地邊緣，半截木棧道陷在泥泡間，北面白蘆遮住舊水線，東側遠處有螢火落在較乾草墩上。棧道下泥泡不停翻開，玩家只能在岸邊採濕地草藥後回到內側蘆葦路。",
    "image": "moonlit_fen_fill_14_18.png",
    "imagePrompt": "西側泥泡岸 moonlit_fen_fill_14_18 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西側泥泡岸靠近月光濕地邊緣，半截木棧道陷在泥泡間，北面白蘆遮住舊水線，東側遠處有螢火落在較乾草墩上。棧道下泥泡不停翻開，玩家只能在岸邊採濕地草藥後回到內側蘆葦路。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 14,
    "worldY": 18
  },

"moonlit_fen_fill_14_19": {
    "id": "moonlit_fen_fill_14_19",
    "name": "西南銀霧溝",
    "zone": "moonlit_fen",
    "description": "西南銀霧溝陷在兩片蘆葦之間，北側泥泡岸逐漸沒入黑水，東面月光水道才有可辨認的草墩。這裡沒有連續踏點，只作為濕地封閉邊界與危險水深提示。",
    "image": "moonlit_fen_fill_14_19.png",
    "imagePrompt": "西南銀霧溝 moonlit_fen_fill_14_19 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西南銀霧溝陷在兩片蘆葦之間，北側泥泡岸逐漸沒入黑水，東面月光水道才有可辨認的草墩。這裡沒有連續踏點，只作為濕地封閉邊界與危險水深提示。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 14,
    "worldY": 19
  },

"moonlit_fen_fill_14_20": {
    "id": "moonlit_fen_fill_14_20",
    "name": "西南月影深水",
    "zone": "moonlit_fen",
    "description": "西南月影深水貼著月光濕地南緣，岸邊只剩一段歪斜棧道與濕滑繩結，北側銀霧溝仍能聽見水泡聲，東面水面忽然變暗。深水下可見水草和月露浮葉，但沒有安全棧道可踩，也不接入南側新路。",
    "image": "moonlit_fen_fill_14_20.png",
    "imagePrompt": "西南月影深水 moonlit_fen_fill_14_20 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西南月影深水貼著月光濕地南緣，岸邊只剩一段歪斜棧道與濕滑繩結，北側銀霧溝仍能聽見水泡聲，東面水面忽然變暗。深水下可見水草和月露浮葉，但沒有安全棧道可踩，也不接入南側新路。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "月光水道夾在舊舟北營與白蘆濕地之間，北側破舟拖痕能指回乾泥岸，南面黑水被月光照成細長亮線。水道邊長著銀蘆纖維、水草與濕地草藥，可沿木樁旁採集後循北側安全岸回返。",
    "image": "moonlit_fen_fill_20_14.png",
    "imagePrompt": "月光水道 moonlit_fen_fill_20_14 in moonlit_fen 月光濕地, room function resource path, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north toward 舊舟北營, source room details: 月光水道夾在舊舟北營與白蘆濕地之間，北側破舟拖痕能指回乾泥岸，南面黑水被月光照成細長亮線。水道邊長著銀蘆纖維、水草與濕地草藥，可沿木樁旁採集後循北側安全岸回返。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "moonlit_fen_fill_20_13",
        "description": "北側沿破舟拖痕踏上乾泥岸，回到舊舟北營"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 20,
    "worldY": 14
  },

"moonlit_fen_fill_20_16": {
    "id": "moonlit_fen_fill_20_16",
    "name": "中央鏡水封潭",
    "zone": "moonlit_fen",
    "description": "中央鏡水封潭位於濕地腹地，潭邊有一圈半沉石橋和折斷棧道，北側白蘆倒影連成一片，東面水面看似平靜卻沒有露出的草墩。石橋縫只適合採水草與月露浮葉，這格作為封閉 blocker 避免玩家誤入深水。",
    "image": "moonlit_fen_fill_20_16.png",
    "imagePrompt": "中央鏡水封潭 moonlit_fen_fill_20_16 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 中央鏡水封潭位於濕地腹地，潭邊有一圈半沉石橋和折斷棧道，北側白蘆倒影連成一片，東面水面看似平靜卻沒有露出的草墩。石橋縫只適合採水草與月露浮葉，這格作為封閉 blocker 避免玩家誤入深水。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 20,
    "worldY": 16
  },

"moonlit_fen_fill_21_14": {
    "id": "moonlit_fen_fill_21_14",
    "name": "北月蘆根封口",
    "zone": "moonlit_fen",
    "description": "北月蘆根封口被粗蘆根和倒木卡住，西側可望見月光水道，南面通往較暗的沼澤內圈。這裡是封閉 blocker，水邊有濕地藥草痕跡，但沒有可供玩家穿越的棧板。",
    "image": "moonlit_fen_fill_21_14.png",
    "imagePrompt": "北月蘆根封口 moonlit_fen_fill_21_14 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 北月蘆根封口被粗蘆根和倒木卡住，西側可望見月光水道，南面通往較暗的沼澤內圈。這裡是封閉 blocker，水邊有濕地藥草痕跡，但沒有可供玩家穿越的棧板。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": 21,
    "worldY": 14
  },

"moonlit_fen_fill_21_16": {
    "id": "moonlit_fen_fill_21_16",
    "name": "東蘆暗水欄",
    "zone": "moonlit_fen",
    "description": "東蘆暗水欄貼近鏡沼方向，北側蘆根封口擋住乾路，東面黑水下可見細小螢光。這格是封閉濕地邊界，只留下蘆葦與水草採集線索，不接玩家主路。",
    "image": "moonlit_fen_fill_21_16.png",
    "imagePrompt": "東蘆暗水欄 moonlit_fen_fill_21_16 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 東蘆暗水欄貼近鏡沼方向，北側蘆根封口擋住乾路，東面黑水下可見細小螢光。這格是封閉濕地邊界，只留下蘆葦與水草採集線索，不接玩家主路。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": 21,
    "worldY": 16
  },

"moonlit_fen_fill_23_15": {
    "id": "moonlit_fen_fill_23_15",
    "name": "東界夢水灘",
    "zone": "moonlit_fen",
    "description": "東界夢水灘位於月光濕地與鏡沼交界，灘面插著一排歪斜界樁和破蘆牌，西側夢水核心的微光映在泥面上，東面鏡沼水氣開始變冷。這格是封閉 border blocker，標示兩區濕地邊界銜接但不提供直接出口，玩家只能在界樁旁觀察水位與蘆根。",
    "image": "moonlit_fen_fill_23_15.png",
    "imagePrompt": "東界夢水灘 moonlit_fen_fill_23_15 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 東界夢水灘位於月光濕地與鏡沼交界，灘面插著一排歪斜界樁和破蘆牌，西側夢水核心的微光映在泥面上，東面鏡沼水氣開始變冷。這格是封閉 border blocker，標示兩區濕地邊界銜接但不提供直接出口，玩家只能在界樁旁觀察水位與蘆根。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 9,
    "mapY": 1,
    "worldX": 23,
    "worldY": 15
  },

"moonlit_fen_fill_23_16": {
    "id": "moonlit_fen_fill_23_16",
    "name": "鏡沼蘆門汊",
    "zone": "moonlit_fen",
    "description": "鏡沼蘆門汊在月光濕地東側收束成窄水口，西面仍是銀色蘆影，東面已能看見鏡沼的冷水倒光。這裡是跨區過渡節點，路線只沿東側蘆門進入鏡沼邊緣，西側深泥不可回穿。",
    "image": "moonlit_fen_fill_23_16.png",
    "imagePrompt": "鏡沼蘆門汊 moonlit_fen_fill_23_16 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: east toward 蘆葦入口, west toward locked boundary, source room details: 鏡沼蘆門汊在月光濕地東側收束成窄水口，西面仍是銀色蘆影，東面已能看見鏡沼的冷水倒光。這裡是跨區過渡節點，路線只沿東側蘆門進入鏡沼邊緣，西側深泥不可回穿。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "marsh_of_mirrors_reed_gate",
        "description": "東側蘆門穿過冷水倒影與白蘆窄口，接向鏡沼的蘆葦門"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側深泥吞沒舊蘆徑，無法回穿濕地內圈"
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
    "name": "泥鏡交界水道",
    "zone": "moonlit_fen",
    "description": "泥鏡交界水道貼著月光濕地東南緣，西側白蘆仍有螢火，東面泥水已變成鏡沼的暗色反光。水道石縫長著銀蘆纖維與夢水露浮葉，玩家可沿東側水痕採集並進入鏡沼泥洲，不能向南離開。",
    "image": "moonlit_fen_fill_23_17.png",
    "imagePrompt": "泥鏡交界水道 moonlit_fen_fill_23_17 in moonlit_fen 月光濕地, room function resource path, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: east toward 泥炭小洲, source room details: 泥鏡交界水道貼著月光濕地東南緣，西側白蘆仍有螢火，東面泥水已變成鏡沼的暗色反光。水道石縫長著銀蘆纖維與夢水露浮葉，玩家可沿東側水痕採集並進入鏡沼泥洲，不能向南離開。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "marsh_of_mirrors_peat_islet",
        "description": "東側踏過泥水反光與蘆根淺灘，抵達鏡沼邊緣的泥炭小洲"
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
    "name": "倉庫後穀車道",
    "zone": "old_farmland",
    "description": "倉庫後穀車道貼著舊農田東界，東側是新手村倉庫斑駁後門，西面田埂上還留著壓碎的穀車轍。這裡是 border service route，標示農田補給與村莊倉儲的銜接，只供後勤往來，不放怪物遭遇。",
    "image": "old_farmland_fill_n1_1.png",
    "imagePrompt": "倉庫後穀車道 old_farmland_fill_n1_1 in old_farmland 老舊農場, room function town service, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: east toward 補給倉庫, source room details: 倉庫後穀車道貼著舊農田東界，東側是新手村倉庫斑駁後門，西面田埂上還留著壓碎的穀車轍。這裡是 border service route，標示農田補給與村莊倉儲的銜接，只供後勤往來，不放怪物遭遇。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_storehouse",
        "description": "東側沿穀車轍穿過斑駁後門，進入新手村倉庫補給區"
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
    "name": "水井旁廢農道",
    "zone": "old_farmland",
    "description": "水井旁廢農道位於舊農田東側，北面可回望倉庫後穀車道，南面雜草沒入河階方向，東側村莊水井旁有石圈與木桶。這裡是 border service route，作為農田取水與補給服務邊界，只連接村內取水點。",
    "image": "old_farmland_fill_n1_2.png",
    "imagePrompt": "水井旁廢農道 old_farmland_fill_n1_2 in old_farmland 老舊農場, room function resource path, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: east toward 古井小路, source room details: 水井旁廢農道位於舊農田東側，北面可回望倉庫後穀車道，南面雜草沒入河階方向，東側村莊水井旁有石圈與木桶。這裡是 border service route，作為農田取水與補給服務邊界，只連接村內取水點。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_well_path",
        "description": "東側踏過濕土車轍與木桶旁泥階，接到新手村水井石徑"
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
    "name": "河階荒田邊門",
    "zone": "old_farmland",
    "description": "河階荒田邊門在舊農田東南角收束成窄土路，北面水井廢農道仍有濕車轍，東側石階通向新手村河邊。門旁雜草間有野蔥、潮濕穀粒與破麻袋可作少量補給；這裡是跨區 border route，西側荒田柵欄已倒塌但被繩索封住，守住村莊與農田的低地邊界。",
    "image": "old_farmland_fill_n1_3.png",
    "imagePrompt": "河階荒田邊門 old_farmland_fill_n1_3 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: east toward 溪畔石階, west toward locked boundary, source room details: 河階荒田邊門在舊農田東南角收束成窄土路，北面水井廢農道仍有濕車轍，東側石階通向新手村河邊。門旁雜草間有野蔥、潮濕穀粒與破麻袋可作少量補給；這裡是跨區 border route，西側荒田柵欄已倒塌但被繩索封住，守住村莊與農田的低地邊界。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "starter_village_river_stairs",
        "description": "東側沿碎石河階穿過籬門，接到新手村河邊石階"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側荒田深溝被舊繩索封住，不能回切農田內圈"
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
    "name": "東田碎犁封埂",
    "zone": "old_farmland",
    "description": "東田碎犁封埂夾在倉庫後穀車道西側與更深荒田之間，東面能看見村牆，西面只剩斷裂犁片插在泥裡。乾裂田埂沒有連續踏點，這格是封閉 blocker，不提供路線或採集互動。",
    "image": "old_farmland_fill_n2_1.png",
    "imagePrompt": "東田碎犁封埂 old_farmland_fill_n2_1 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 東田碎犁封埂夾在倉庫後穀車道西側與更深荒田之間，東面能看見村牆，西面只剩斷裂犁片插在泥裡。乾裂田埂沒有連續踏點，這格是封閉 blocker，不提供路線或採集互動。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": 1
  },

"old_farmland_fill_n3_1": {
    "id": "old_farmland_fill_n3_1",
    "name": "破車轍西封田",
    "zone": "old_farmland",
    "description": "破車轍西封田位於工具棚南側路線東邊，西面可接近雞舍支路的舊農道，東側碎犁封埂已被雜草蓋住。車轍中積著黑水與鏽釘，這裡是 blocker，提示玩家改走正式農道。",
    "image": "old_farmland_fill_n3_1.png",
    "imagePrompt": "破車轍西封田 old_farmland_fill_n3_1 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 破車轍西封田位於工具棚南側路線東邊，西面可接近雞舍支路的舊農道，東側碎犁封埂已被雜草蓋住。車轍中積著黑水與鏽釘，這裡是 blocker，提示玩家改走正式農道。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": -3,
    "worldY": 1
  },

"old_farmland_fill_n4_1": {
    "id": "old_farmland_fill_n4_1",
    "name": "工具棚雞舍農道",
    "zone": "old_farmland",
    "description": "工具棚雞舍農道是一段南北向乾裂田埂，北側工具棚的鐵鉤還掛在門框上，南面破雞舍傳來空木板聲。這裡是正式 route，補齊工具棚到雞舍的路線，不安排怪物或額外採集。",
    "image": "old_farmland_fill_n4_1.png",
    "imagePrompt": "工具棚雞舍農道 old_farmland_fill_n4_1 in old_farmland 老舊農場, room function resource path, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north toward 破工具棚, south toward 破雞舍, source room details: 工具棚雞舍農道是一段南北向乾裂田埂，北側工具棚的鐵鉤還掛在門框上，南面破雞舍傳來空木板聲。這裡是正式 route，補齊工具棚到雞舍的路線，不安排怪物或額外採集。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "old_farmland_toolshed",
        "description": "北側沿乾裂田埂回到破工具棚門前"
      },
      {
        "direction": "south",
        "targetRoomId": "old_farmland_chicken_coop",
        "description": "南側順著木籬殘影走向破雞舍旁土路"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -4,
    "worldY": 1
  },

"old_farmland_fill_n4_4": {
    "id": "old_farmland_fill_n4_4",
    "name": "月牧冷泉封界",
    "zone": "old_farmland",
    "description": "月牧冷泉封界位於舊農田南緣，北側月光牧地的草色轉暗，西面石標仍露出半截，南面能聽見低谷冷泉水聲。田埂在邊界處塌成泥坡，這裡是 border blocker，只標示溪谷方向，不開放通往溪谷。",
    "image": "old_farmland_fill_n4_4.png",
    "imagePrompt": "月牧冷泉封界 old_farmland_fill_n4_4 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 月牧冷泉封界位於舊農田南緣，北側月光牧地的草色轉暗，西面石標仍露出半截，南面能聽見低谷冷泉水聲。田埂在邊界處塌成泥坡，這裡是 border blocker，只標示溪谷方向，不開放通往溪谷。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -4,
    "worldY": 4
  },

"old_farmland_fill_n6_3": {
    "id": "old_farmland_fill_n6_3",
    "name": "霉果園南封埂",
    "zone": "old_farmland",
    "description": "霉果園南封埂夾在北側霉斑果園與南側邊界穀道之間，東面防風樹列擋住視線，西面根窖土門半埋。殘破柵欄橫倒在田埂上，這格是 blocker，阻止玩家誤走荒田內部。",
    "image": "old_farmland_fill_n6_3.png",
    "imagePrompt": "霉果園南封埂 old_farmland_fill_n6_3 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 霉果園南封埂夾在北側霉斑果園與南側邊界穀道之間，東面防風樹列擋住視線，西面根窖土門半埋。殘破柵欄橫倒在田埂上，這格是 blocker，阻止玩家誤走荒田內部。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": -6,
    "worldY": 3
  },

"old_farmland_fill_n6_4": {
    "id": "old_farmland_fill_n6_4",
    "name": "低谷入口封穀道",
    "zone": "old_farmland",
    "description": "低谷入口封穀道在舊農田西南邊界轉入濕冷坡面，北側霉果園封埂仍有爛果味，東面石標指向農田內圈，南側可見低谷入口霧氣。這裡是 border blocker，穀道坍塌不提供跨區通行。",
    "image": "old_farmland_fill_n6_4.png",
    "imagePrompt": "低谷入口封穀道 old_farmland_fill_n6_4 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 低谷入口封穀道在舊農田西南邊界轉入濕冷坡面，北側霉果園封埂仍有爛果味，東面石標指向農田內圈，南側可見低谷入口霧氣。這裡是 border blocker，穀道坍塌不提供跨區通行。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": -6,
    "worldY": 4
  },

"old_farmland_fill_n8_3": {
    "id": "old_farmland_fill_n8_3",
    "name": "稻草人西封埂",
    "zone": "old_farmland",
    "description": "稻草人西封埂位於舊農田最西側，北面稻草人看守的旗布在風裡抽動，東側根窖土門半掩在雜草後。田埂向西碎成乾泥溝，這裡是封閉 blocker，沒有路線、怪物或採集配置。",
    "image": "old_farmland_fill_n8_3.png",
    "imagePrompt": "稻草人西封埂 old_farmland_fill_n8_3 in old_farmland 老舊農場, room function danger pocket, terrain abandoned farmland road, broken grain path, field ridges, dry weeds, leaning fence posts and dusty dusk light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 稻草人西封埂位於舊農田最西側，北面稻草人看守的旗布在風裡抽動，東側根窖土門半掩在雜草後。田埂向西碎成乾泥溝，這裡是封閉 blocker，沒有路線、怪物或採集配置。, neglected rural route, abandoned harvest traces and low-level wilderness danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": -8,
    "worldY": 3
  },

"pilgrim_road_fill_13_6": {
    "id": "pilgrim_road_fill_13_6",
    "name": "斷石道北白石封",
    "zone": "pilgrim_road",
    "description": "斷石道北白石封位在巡禮古道東段北側，南面斷石道殘橋露出白石橋基，西邊盜匪望臺仍有乾草腳印。磨光石板被倒塌路碑壓住，這裡是 blocker，只提醒玩家回到主路。",
    "image": "pilgrim_road_fill_13_6.png",
    "imagePrompt": "斷石道北白石封 pilgrim_road_fill_13_6 in pilgrim_road 朝聖古道, room function danger pocket, terrain old pilgrimage stone road, worn slabs, prayer flags, shrine markers, hill wind and pale sacred light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 斷石道北白石封位在巡禮古道東段北側，南面斷石道殘橋露出白石橋基，西邊盜匪望臺仍有乾草腳印。磨光石板被倒塌路碑壓住，這裡是 blocker，只提醒玩家回到主路。, solemn old road crossing, worn faith markers and safe but lonely travel, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": 13,
    "worldY": 6
  },

"pilgrim_road_fill_13_9": {
    "id": "pilgrim_road_fill_13_9",
    "name": "藍寶湖西燈標古道",
    "zone": "pilgrim_road",
    "description": "藍寶湖西燈標古道位在巡禮古道與藍寶湖交界，北面舊墓園轉角仍有白石灰粉，東方碼頭燈籠映在湖霧裡。路標下散著旅人物資箱、乾糧包、破水囊與白石灰粉袋，可採少量補給；往東會從乾石路轉入湖岸棧道。",
    "image": "pilgrim_road_fill_13_9.png",
    "imagePrompt": "藍寶湖西燈標古道 pilgrim_road_fill_13_9 in pilgrim_road 朝聖古道, room function resource path, terrain old pilgrimage stone road, worn slabs, prayer flags, shrine markers, hill wind and pale sacred light, visible path cues: east toward 燈籠碼頭, source room details: 藍寶湖西燈標古道位在巡禮古道與藍寶湖交界，北面舊墓園轉角仍有白石灰粉，東方碼頭燈籠映在湖霧裡。路標下散著旅人物資箱、乾糧包、破水囊與白石灰粉袋，可採少量補給；往東會從乾石路轉入湖岸棧道。, solemn old road crossing, worn faith markers and safe but lonely travel, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "sapphire_lake_lantern_dock",
        "description": "東側白石路逐漸變成潮濕湖岸棧道，沿碼頭燈籠可接入藍寶湖"
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
    "name": "古道起點西信標封",
    "zone": "pilgrim_road",
    "description": "古道起點西信標封守在巡禮古道西端，東側古道起點的舊拱門能看見褪色旗布，南面乾井旁草徑已被荒草吞沒。白石信標倒在碎石坡上，是 border blocker，避免從平原外緣誤切古道。",
    "image": "pilgrim_road_fill_8_6.png",
    "imagePrompt": "古道起點西信標封 pilgrim_road_fill_8_6 in pilgrim_road 朝聖古道, room function danger pocket, terrain old pilgrimage stone road, worn slabs, prayer flags, shrine markers, hill wind and pale sacred light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 古道起點西信標封守在巡禮古道西端，東側古道起點的舊拱門能看見褪色旗布，南面乾井旁草徑已被荒草吞沒。白石信標倒在碎石坡上，是 border blocker，避免從平原外緣誤切古道。, solemn old road crossing, worn faith markers and safe but lonely travel, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 8,
    "worldY": 6
  },

"plains_fill_10_5": {
    "id": "plains_fill_10_5",
    "name": "斷橋南麥田邊界",
    "zone": "plains",
    "description": "斷橋南麥田邊界位在平原南緣，北面斷橋的木樁露出草叢，南側朝聖古道荊棘切口逼近泥土路，東西兩側仍是麥田邊道。這裡是 border blocker，只標示平原與古道交界，不開南北捷徑。",
    "image": "plains_fill_10_5.png",
    "imagePrompt": "斷橋南麥田邊界 plains_fill_10_5 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 斷橋南麥田邊界位在平原南緣，北面斷橋的木樁露出草叢，南側朝聖古道荊棘切口逼近泥土路，東西兩側仍是麥田邊道。這裡是 border blocker，只標示平原與古道交界，不開南北捷徑。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 10,
    "worldY": 5
  },

"plains_fill_11_0": {
    "id": "plains_fill_11_0",
    "name": "風車東牧草封地",
    "zone": "plains",
    "description": "風車東牧草封地貼著風車內部東側，西面風車影子掃過草坡，南方牧羊營帳冒著淡煙。牧草被木樁與繩欄圈住，是純 blocker，避免玩家從風車背面直接切進牧營。",
    "image": "plains_fill_11_0.png",
    "imagePrompt": "風車東牧草封地 plains_fill_11_0 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 風車東牧草封地貼著風車內部東側，西面風車影子掃過草坡，南方牧羊營帳冒著淡煙。牧草被木樁與繩欄圈住，是純 blocker，避免玩家從風車背面直接切進牧營。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 11,
    "worldY": 0
  },

"plains_fill_11_4": {
    "id": "plains_fill_11_4",
    "name": "盜匪藏處南草封",
    "zone": "plains",
    "description": "盜匪藏處南草封位在盜匪藏處南側，北面破布棚與腳印藏在高草後，西側斷橋小路仍可見舊木樁，南面銜接朝聖古道邊界。這裡是 blocker，用高草與倒木封住藏處背路。",
    "image": "plains_fill_11_4.png",
    "imagePrompt": "盜匪藏處南草封 plains_fill_11_4 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 盜匪藏處南草封位在盜匪藏處南側，北面破布棚與腳印藏在高草後，西側斷橋小路仍可見舊木樁，南面銜接朝聖古道邊界。這裡是 blocker，用高草與倒木封住藏處背路。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 11,
    "worldY": 4
  },

"plains_fill_11_5": {
    "id": "plains_fill_11_5",
    "name": "走私藏點北風草界",
    "zone": "plains",
    "description": "走私藏點北風草界位在平原與朝聖古道交接處，北面盜匪藏處南草封壓著高草，西側斷橋南麥田邊界延伸，東邊古道邊界接向盜匪哨。這裡是 border gathering route，風草可採，主要銜接南方走私藏點。",
    "image": "plains_fill_11_5.png",
    "imagePrompt": "走私藏點北風草界 plains_fill_11_5 in plains 翠綠平原, room function resource path, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: south toward 走私藏點, source room details: 走私藏點北風草界位在平原與朝聖古道交接處，北面盜匪藏處南草封壓著高草，西側斷橋南麥田邊界延伸，東邊古道邊界接向盜匪哨。這裡是 border gathering route，風草可採，主要銜接南方走私藏點。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_smuggler_cache",
        "description": "沿風草與舊車轍穿過南界草坡，抵達朝聖古道走私藏點。"
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
    "name": "盜匪哨北路牌亭界",
    "zone": "plains",
    "description": "盜匪哨北路牌亭界位在平原東南角，西面走私藏點北風草界仍有車轍，南方朝聖古道盜匪哨的木牌半歪在路旁。路牌亭標示這裡是跨區邊界路線端點，專門銜接平原與古道警戒線，不放怪物或採集。",
    "image": "plains_fill_12_5.png",
    "imagePrompt": "盜匪哨北路牌亭界 plains_fill_12_5 in plains 翠綠平原, room function town service, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: south toward 盜匪望臺, source room details: 盜匪哨北路牌亭界位在平原東南角，西面走私藏點北風草界仍有車轍，南方朝聖古道盜匪哨的木牌半歪在路旁。路牌亭標示這裡是跨區邊界路線端點，專門銜接平原與古道警戒線，不放怪物或採集。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "pilgrim_road_bandit_watch",
        "description": "沿歪斜路牌與乾草車轍南行，抵達朝聖古道盜匪哨。"
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
    "name": "月林北麥田封坡",
    "zone": "plains",
    "description": "月林北麥田封坡靠在月光小林北側，南面樹影落進草地，東邊野兔洞穴周圍有翻土痕。麥田坡被舊籬笆切斷，是 border blocker，用來封住小林與兔洞之間的外側空地。",
    "image": "plains_fill_7_2.png",
    "imagePrompt": "月林北麥田封坡 plains_fill_7_2 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 月林北麥田封坡靠在月光小林北側，南面樹影落進草地，東邊野兔洞穴周圍有翻土痕。麥田坡被舊籬笆切斷，是 border blocker，用來封住小林與兔洞之間的外側空地。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 7,
    "worldY": 2
  },

"plains_fill_8_1": {
    "id": "plains_fill_8_1",
    "name": "兔洞北向日草封",
    "zone": "plains",
    "description": "兔洞北向日草封位在野兔洞穴北側，南面小洞口散著碎草，東邊向日葵田的黃花沿風搖動。草坡被兔穴塌陷與花田籬笆截住，是純 blocker，不提供通行路線。",
    "image": "plains_fill_8_1.png",
    "imagePrompt": "兔洞北向日草封 plains_fill_8_1 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 兔洞北向日草封位在野兔洞穴北側，南面小洞口散著碎草，東邊向日葵田的黃花沿風搖動。草坡被兔穴塌陷與花田籬笆截住，是純 blocker，不提供通行路線。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 1,
    "worldX": 8,
    "worldY": 1
  },

"plains_fill_9_5": {
    "id": "plains_fill_9_5",
    "name": "十字路南草井界",
    "zone": "plains",
    "description": "十字路南草井界位在十字路口南面，北側路牌仍指向村道，南方朝聖古道乾井露出灰石圈，西邊守望土丘看得見低旗。這裡是 border gathering blocker，草井邊可採乾草籽，但不開南向捷徑。",
    "image": "plains_fill_9_5.png",
    "imagePrompt": "十字路南草井界 plains_fill_9_5 in plains 翠綠平原, room function danger pocket, terrain open grassy plain path, wheat edges, wind-bent grass, low fences, clear sky breaks and warm field light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 十字路南草井界位在十字路口南面，北側路牌仍指向村道，南方朝聖古道乾井露出灰石圈，西邊守望土丘看得見低旗。這裡是 border gathering blocker，草井邊可採乾草籽，但不開南向捷徑。, low wilds connector, open grass and readable travel direction, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西緣砂路夾在紅岩乾谷與琉璃沙丘之間，赤色石粉逐漸被透明砂粒取代，東側半埋商隊的旗桿在熱浪中晃動。這裡是西側短路線端點，需沿東側旗桿進入主沙道。",
    "image": "glass_dunes_fill_0_20.png",
    "imagePrompt": "西緣砂路 glass_dunes_fill_0_20 in glass_dunes 琉璃沙丘, room function border road, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，西緣砂路夾在紅岩乾谷與琉璃沙丘之間，赤色石粉逐漸被透明砂粒取代，東側半埋商隊的旗桿在熱浪中晃動。這裡是西側短路線端點，需沿東側旗桿進入主沙道。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。clear route endpoint with one visible safe direction and the locked unsafe side blocked by drift sand；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "glass_dunes_buried_caravan",
        "description": "東側沿半埋旗桿與玻砂車轍，接向埋沒商隊"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側紅岩乾谷被流砂切斷，不能直接回穿"
      }
    ],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 0,
    "worldY": 20
  },
};
