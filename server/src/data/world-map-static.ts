// Static world-map coordinates and connector rooms.
// Generated once from the accepted world-map layout; edit this file when the world map changes.

import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS: Record<string, RoomDef> = {
  "amber_forest_north_portal": {
    "id": "amber_forest_north_portal",
    "name": "琥珀傳送樹庭",
    "zone": "amber_forest",
    "description": "琥珀傳送樹庭開在森林北緣的高根平台上，透明樹脂包住古老符文石，金色光線沿樹根流向中央傳送陣。東側可走到樹脂補給棚，南側木橋接回琥珀森林內部，玩家可在此啟用琥珀森林傳送陣並確認回程路線。",
    "image": "amber_forest_north_portal.png",
    "imagePrompt": "琥珀傳送樹庭 amber_forest_north_portal in amber_forest, room function portal, high root platform and central portal stone wrapped in transparent amber resin, east root path toward supply shed, south resin bridge into forest, golden resin light, damp bark, honey colored mist and safe travel landmark，高根平臺中央的透明傳送石像蜂蜜般發亮，右側補給棚與下方木橋分出兩條明確路線，濕樹皮反射暖光，整體像安全回程地標, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "amber_forest_resin_supply.png",
    "imagePrompt": "樹脂補給棚 amber_forest_resin_supply in amber_forest, room function town service, amber canvas supply shed under bent branches with gathering knives, wax bottles and bee masks, west root trail returns to portal courtyard, forest deepens beyond the south edge, warm lantern and golden resin light, sticky bark, moss and quiet safe shelter，彎枝棚架下堆著封蠟藥瓶、防蜂面罩與採集刀，西邊根道回到傳送庭，棚外陰影暗示更深林線，氣氛安穩但邊緣有危險, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "amber_forest_north_bridge.png",
    "imagePrompt": "北緣樹脂橋 amber_forest_north_bridge in amber_forest, room function connector, narrow resin bridge over a golden sap channel between ancient roots, north path climbs to the portal tree court, south path descends to amber forest main road, translucent amber boards, wet moss, honey fog and guarded travel approach，透明橋板橫跨金色樹液溝，北端抬升回傳送平臺，南端落入主林道，濕苔和古根包住橋腳，畫面要能讀出上下坡差, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "name": "石花東側金葉草封",
    "zone": "amber_forest",
    "description": "石花東側金葉草封貼著石化花圃北側，南面能看見結晶花瓣，西側遺物坑的碎碑半埋在落葉下。金葉草與硬化樹脂把坡面封住，這裡是採集 blocker，可採少量琥珀草籽與樹脂片。",
    "image": "amber_forest_fill_n11_6.png",
    "imagePrompt": "石花東側金葉草封 amber_forest_fill_n11_6 in amber_forest, room function resource path, sealed golden leaf grass slope beside petrified flower beds, south crystal petals visible, west ruined relic stones under leaves, hardened resin blocks further travel, amber grass seeds and resin flakes in warm filtered forest light，封閉草坡貼著石化花圃，南側結晶花瓣露出冷光，西側碎碑埋在落葉下，硬化樹脂形成不可通行邊界，只留下採集前景, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": -11,
    "worldY": 6
  },
  "amber_forest_fill_n11_8": {
    "id": "amber_forest_fill_n11_8",
    "name": "深核東側樹脂封",
    "zone": "amber_forest",
    "description": "深核東側樹脂封位在深琥珀核心東面，北側石化花圃透出金光，西邊核心樹根被厚樹脂包住。地面凝成透明硬殼與蜂巢狀裂紋，只保留採集樹脂滴與金苔粉的窄面，外側被硬化根牆堵住，是不能繼續穿越的 blocker。",
    "image": "amber_forest_fill_n11_8.png",
    "imagePrompt": "深核東側樹脂封 amber_forest_fill_n11_8 in amber_forest, room function resource path, transparent resin crust and honeycomb cracks east of deep amber core, north petrified flower glow, west thick core roots trapped in amber, outer root wall blocks passage, gold moss dust, resin drops and dim amber forest light，透明硬殼地面裂成蜂巢紋，西側核心樹根被厚樹脂封住，北側石花透光，外圍根牆像琥珀牢籠，畫面需呈現無路可穿, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -11,
    "worldY": 8
  },
  "amber_forest_fill_n12_5": {
    "id": "amber_forest_fill_n12_5",
    "name": "炭林東側琥珀苔坡",
    "zone": "amber_forest",
    "description": "炭林東側琥珀苔坡靠在木炭林立木東面，南側遺物坑露出灰黑石圈，樹根間覆著黏稠金苔。這裡是採集 blocker，玩家能在苔坡邊採琥珀苔與焦木樹脂，但不能越過倒木。",
    "image": "amber_forest_fill_n12_5.png",
    "imagePrompt": "炭林東側琥珀苔坡 amber_forest_fill_n12_5 in amber_forest, room function resource path, amber moss slope east of charcoal black trees, south ruined pit shows gray stone ring, fallen timber blocks the route, sticky gold moss between roots, charred resin, smoky bark and slanted morning light，焦黑立木在西側排成暗牆，南面灰石圈從遺物坑露出，倒木壓住苔坡出口，黏稠金苔和焦木樹脂集中在可採集區, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": -12,
    "worldY": 5
  },
  "amber_forest_fill_n13_10": {
    "id": "amber_forest_fill_n13_10",
    "name": "黑木北緣金葉草道",
    "zone": "amber_forest",
    "description": "黑木北緣金葉草道位在琥珀林南側縱線，北面樹脂小徑仍有金葉光，南面黑木邊界開始傳來陰冷氣味。這裡是採集 blocker 與邊界預告，落葉下可採金葉草根，但樹根牆阻止直接穿行。",
    "image": "amber_forest_fill_n13_10.png",
    "imagePrompt": "黑木北緣金葉草道 amber_forest_fill_n13_10 in amber_forest, room function border road, golden leaf grass road on the southern amber forest line, north resin trail still warm, south blackwood boundary turns cold and dark, root wall blocks direct passage, fallen leaves, resin shine and warning shadow light，北面仍有溫暖金葉路光，南面黑木邊界逐步變冷，根牆與落葉把道路壓窄，畫面要像通往危險地帶前的警戒斷點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -13,
    "worldY": 10
  },
  "amber_forest_fill_n13_11": {
    "id": "amber_forest_fill_n13_11",
    "name": "黑木狼巢北界林路",
    "zone": "amber_forest",
    "description": "黑木狼巢北界林路位在琥珀森林南緣，北面金葉草道仍有溫暖樹脂光，南面黑木狼巢的陰影與爪痕壓進林地。這裡是跨區 border gathering route，路旁可採硬化樹脂，但主要功能是銜接琥珀林與黑木地帶。",
    "image": "amber_forest_fill_n13_11.png",
    "imagePrompt": "黑木狼巢北界林路 amber_forest_fill_n13_11 in amber_forest, room function border road, southern forest edge path with warm golden leaves to the north and claw marked blackwood shadows to the south, hardened resin along the roadside, narrow cross zone trail, cold mist and amber backlight，窄林路一側保留金葉餘光，另一側出現黑木爪痕與狼巢陰影，硬化樹脂貼著路邊，南向出口被冷霧包住，顯示跨區邊界, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "blackwood_wolf_den",
        "description": "沿爪痕與暗色樹根穿過南緣林路，進入黑木狼巢北側。"
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
    "name": "甲蟲丘南金葉草坡",
    "zone": "amber_forest",
    "description": "甲蟲丘南金葉草坡位在餘燼甲蟲丘南面，北側土丘散著焦熱樹脂，東面深琥珀核心反射黏稠金光，南側接向樹脂小徑。草坡可採焦香琥珀草、金葉草根與碎樹脂片，但外緣佈滿甲蟲洞、硬根與塌陷土孔，只作採集 blocker。",
    "image": "amber_forest_fill_n13_8.png",
    "imagePrompt": "甲蟲丘南金葉草坡 amber_forest_fill_n13_8 in amber_forest, room function resource path, golden grass slope south of ember beetle mound, north scorched resin burrows, east deep amber core reflection, south narrow resin path, collapsed beetle holes and hard roots block the edge, smoky honey light，北側焦熱甲蟲洞冒出微煙，東面深琥珀核心反射黏光，南側狹路被塌孔和硬根截斷，草坡前景散著金葉根與碎樹脂, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": -13,
    "worldY": 8
  },
  "amber_forest_fill_n13_9": {
    "id": "amber_forest_fill_n13_9",
    "name": "中央樹脂草徑",
    "zone": "amber_forest",
    "description": "中央樹脂草徑夾在甲蟲丘南坡與黑木北緣金葉草道之間，北面可聞到焦熱樹脂味，南側落葉顏色逐漸轉暗。這裡是採集 blocker，草徑旁有琥珀草與樹脂珠，但根網封住兩側。",
    "image": "amber_forest_fill_n13_9.png",
    "imagePrompt": "中央樹脂草徑 amber_forest_fill_n13_9 in amber_forest, room function resource path, central resin grass trail between beetle slope north and blackwood edge south, amber grass and resin beads beside a sealed root net, leaves darken toward the southern path, warm gold light fading into cold forest shadow，中央草徑被根網封住兩側，北端有焦熱氣味殘留，南端葉色轉暗，琥珀草和樹脂珠沿路散落，形成短暫採集但不能穿越的節點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -13,
    "worldY": 9
  },
  "amber_forest_fill_n15_8": {
    "id": "amber_forest_fill_n15_8",
    "name": "蜂巢南金葉樹封",
    "zone": "amber_forest",
    "description": "蜂巢南金葉樹封位在黃蜂巢南側，北面嗡鳴聲沿樹洞傳來，西邊玻璃根橋的透明根脈在光下發亮。金葉樹根形成半圓屏障，這裡是採集 blocker，可採蜂蠟樹脂與金葉碎片。",
    "image": "amber_forest_fill_n15_8.png",
    "imagePrompt": "蜂巢南金葉樹封 amber_forest_fill_n15_8 in amber_forest, room function resource path, golden leaf root barrier south of a wasp hive, north hollow tree buzzing, west glass root bridge glowing through resin, half circle roots seal the path, beeswax resin, leaf shards and dappled amber light，北面空心蜂巢樹傳來嗡鳴，西側玻璃根橋在枝縫中發亮，半圓金葉根牆擋住去路，蜂蠟樹脂和碎葉集中在低處, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 3,
    "worldX": -15,
    "worldY": 8
  },
  "amber_forest_fill_n16_5": {
    "id": "amber_forest_fill_n16_5",
    "name": "補給南側樹脂草坪",
    "zone": "amber_forest",
    "description": "補給南側樹脂草坪位於樹脂補給點南面，北側麻袋與採集刀架仍可辨認，南面樹脂脈道發出淡金光，東西兩側分別接煙菌地與北橋方向。這裡是採集 blocker，草坪能採樹脂苔，但路線被補給繩欄收束。",
    "image": "amber_forest_fill_n16_5.png",
    "imagePrompt": "補給南側樹脂草坪 amber_forest_fill_n16_5 in amber_forest, room function resource path, resin grass clearing south of the supply point, north sacks and gathering knife rack visible, south glowing resin vein, east smoky fungi ground and west bridge direction suggested by rope rails, soft gold light and damp moss，北面可見麻袋與採集刀架，南面樹脂脈道發淡金光，繩欄把草坪收束成補給點外的小採集面，東西兩側只留方向暗示, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -16,
    "worldY": 5
  },
  "amber_forest_fill_n17_8": {
    "id": "amber_forest_fill_n17_8",
    "name": "樹脂門南林封",
    "zone": "amber_forest",
    "description": "樹脂門南林封貼著樹脂門南側，北面門柱被琥珀包成厚殼，東側玻璃根橋映出斑駁金光。林地被硬化樹根與樹脂瀑布截斷，是採集 blocker，只留下樹脂滴與金葉草可採。",
    "image": "amber_forest_fill_n17_8.png",
    "imagePrompt": "樹脂門南林封 amber_forest_fill_n17_8 in amber_forest, room function resource path, sealed forest pocket south of resin gate, north gate pillars wrapped in thick amber shell, east glass root bridge catches broken gold light, hardened roots and resin waterfall cut off travel, resin drops, gold leaf grass and heavy honey shadow，北側樹脂門柱被厚殼包覆，東側玻璃根橋映出斑駁金光，前方樹脂瀑布和硬根切斷林地，只讓樹脂滴與金葉草留在近景, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile resin moss root leaf materials, coherent dark atmosphere, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -17,
    "worldY": 8
  },
  "arena_quarter_fill_24_10": {
    "id": "arena_quarter_fill_24_10",
    "name": "西南器械欄",
    "zone": "arena_quarter",
    "description": "西南器械欄貼著訓練沙地外側，北面能看見木槍架與沙袋，東側被裁判繩圈隔開。這裡只是競技場平面上的封閉邊角，用來標出訓練場邊界，玩家不能從此穿入看台或後勤區。",
    "image": "arena_quarter_fill_24_10.png",
    "imagePrompt": "西南器械欄 arena_quarter_fill_24_10 in arena_quarter, room function danger pocket, training yard boundary with wooden spear racks and sandbags to the north, referee rope circle to the east, closed equipment fence and trampled sand as main terrain, southwest arena corner blocked by rails, dusty torchlight, worn timber, iron rings and tense tournament noise，低角度微俯視訓練場邊界，前景是沙地腳印與木槍架，中景繩圈明確阻斷東側路線，北面沙袋形成地標，不能通往後勤區, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 24,
    "worldY": 10
  },
  "arena_quarter_fill_24_6": {
    "id": "arena_quarter_fill_24_6",
    "name": "北側檢查欄",
    "zone": "arena_quarter",
    "description": "北側檢查欄位於武器寄放線外，南面連著競技區主路的喧鬧聲，東西兩側堆著封存木箱與鎖鏈。守衛把這段欄位作為不可通行邊界，提醒玩家改走正式入口與票券柱廊。",
    "image": "arena_quarter_fill_24_6.png",
    "imagePrompt": "北側檢查欄 arena_quarter_fill_24_6 in arena_quarter, room function border road, weapon check barrier north of the combat lanes, south route filled with crowd noise, east and west sealed crates and chains, iron checkpoint rail as main architecture, dusty stone floor, torchlit guard line, dark tournament atmosphere，畫面前景保留石地與鎖鏈木箱，中景是不可跨越的檢查欄，南面燈火和人聲暗示正式入口，東西兩側堆物封住錯路, slightly elevated adventurer eye view, readable midground landmark, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 24,
    "worldY": 6
  },
  "arena_quarter_fill_25_11": {
    "id": "arena_quarter_fill_25_11",
    "name": "南看台封階",
    "zone": "arena_quarter",
    "description": "南看台封階停在一排鐵柵前，北側可望見下注牌與沙地邊線，南面階梯被維修木板完全擋住。這格保留為看台高度差的地圖 blocker，不提供路線或隱藏互動。",
    "image": "arena_quarter_fill_25_11.png",
    "imagePrompt": "南看台封階 arena_quarter_fill_25_11 in arena_quarter, room function connector, sealed spectator stairs with iron bars, betting board silhouette and sand boundary to the north, maintenance planks blocking the south steps, tiered stone seating terrain, muted brazier light, dusty banners and height difference marker，前景是被木板封死的階梯，中景鐵柵與座席落差清楚，北面沙地邊線和下注牌只作遠景地標，南側不開路, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 25,
    "worldY": 11
  },
  "arena_quarter_fill_25_12": {
    "id": "arena_quarter_fill_25_12",
    "name": "南牆旗影巷",
    "zone": "arena_quarter",
    "description": "南牆旗影巷靠近競技場外牆，北側旗桿影子落在石地上，南面是封死的維修門與堆疊護欄。這裡只標示看台背後的封閉邊界，旅人必須折回北側正式通道，不會通往新區域。",
    "image": "arena_quarter_fill_25_12.png",
    "imagePrompt": "南牆旗影巷 arena_quarter_fill_25_12 in arena_quarter, room function border road, narrow wall alley behind spectator tiers, flagpole shadows falling from the north, sealed maintenance door and stacked barricades to the south, stone wall terrain, torn banners, cold side light and arena dust，畫面以狹長石巷為主體，北側旗影指回正式通道，南面維修門被護欄封死，牆根陰影讓玩家讀出這是封閉外輪廓, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側維修門被鐵鏈與護欄封住，不能離開競技城區"
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
    "name": "南練兵封欄",
    "zone": "arena_quarter",
    "description": "南練兵封欄貼著訓練場沙坑最外圈，北面傳來木劍敲擊聲，南側維修道路落差被粗繩和拒馬隔斷。這格是訓練區封閉邊界 blocker，提醒玩家不要把它當成可通行主路，也不安排怪物或補給。",
    "image": "arena_quarter_fill_26_12.png",
    "imagePrompt": "南練兵封欄 arena_quarter_fill_26_12 in arena_quarter, room function danger pocket, outer training pit barrier with practice sand to the north, rope and wooden chevaux de frise blocking the southern service drop, scuffed sand terrain, battered practice shields, torch haze and controlled arena danger，前景粗繩與拒馬切斷維修落差，中景沙坑和木劍聲暗示北側練兵路線，南面黑暗低坡不可通行, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側拒馬擋住沙坑落差，必須回北側訓練場路線"
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
    "name": "北側沙欄角",
    "zone": "arena_quarter",
    "description": "北側沙欄角位在決鬥場外緣，南面能看到裁判旗架，西側是武器檢查走廊人流。粗繩把觀眾與選手道路分開，這裡作為不可通行的安全緩衝格，不放怪物或服務。",
    "image": "arena_quarter_fill_26_6.png",
    "imagePrompt": "北側沙欄角 arena_quarter_fill_26_6 in arena_quarter, room function border road, sandy corner outside duel field, judge flag rack visible to the south, weapon inspection corridor crowd to the west, thick ropes separating spectator and fighter paths, sand rail terrain, brass hooks and torch smoke，畫面中央是粗繩沙欄與裁判旗架，西側人流只作遠景輪廓，南面沙地亮起，路線被欄角清楚切斷, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 26,
    "worldY": 6
  },
  "arena_quarter_fill_27_10": {
    "id": "arena_quarter_fill_27_10",
    "name": "西看台陰廊",
    "zone": "arena_quarter",
    "description": "西看台陰廊夾在下層座席與訓練沙地之間，北面可聽見看台呼喊，東側有沙地護欄。廊口被臨時布幕封住，只保留為地圖上的看台邊界與視覺過渡。",
    "image": "arena_quarter_fill_27_10.png",
    "imagePrompt": "西看台陰廊 arena_quarter_fill_27_10 in arena_quarter, room function connector, shadowed corridor between lower seats and training sand, spectator shouts from the north, sand guardrail to the east, temporary cloth curtain sealing the passage, stone corridor terrain, hanging banners and dim oil lamps，前景陰廊石板潮暗，中景布幕封口阻斷通行，東側護欄露出沙地光，北面看台人聲用遠景階梯暗示, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 27,
    "worldY": 10
  },
  "arena_quarter_fill_27_12": {
    "id": "arena_quarter_fill_27_12",
    "name": "南看台鎖門",
    "zone": "arena_quarter",
    "description": "南看台鎖門位於座席背面，北側可回望階梯與下注牌，南側厚門掛著暫停通行的銅牌。這裡是看台外圈的封閉 blocker，讓地圖保留建築輪廓但不開放玩家穿越，也沒有服務用途。",
    "image": "arena_quarter_fill_27_12.png",
    "imagePrompt": "南看台鎖門 arena_quarter_fill_27_12 in arena_quarter, room function border road, locked heavy door behind spectator seats, stairs and betting board shape to the north, sealed bronze lock on the south gate, outer stand architecture, stone steps, iron hinges, dim torchlight and closed service boundary，前景厚門與銅鎖是主體，北側階梯回望看台輪廓，南面沒有出口，牆面和鐵鉸鏈強化封閉感, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側厚門被銅鎖封住，觀眾只能折回北側看台通道"
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
    "name": "南環拒馬道",
    "zone": "arena_quarter",
    "description": "南環拒馬道沿著競技場外圈延伸，北面有選手休息棚的燈火，南側一整排拒馬封住維修坡。這格不是主路，而是用來阻斷南側空白區的安全邊界。",
    "image": "arena_quarter_fill_28_12.png",
    "imagePrompt": "南環拒馬道 arena_quarter_fill_28_12 in arena_quarter, room function border road, outer ring path with fighter rest shed lights to the north, long row of wooden barricades blocking the southern maintenance slope, compact dirt and stone terrain, spiked frames, rope knots and smoky arena glow，畫面以前景一整排拒馬阻住南坡，中景北側休息棚燈火作方向線索，外圈道路狹窄但不通向主路, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側維修坡被拒馬封死，必須回北側競技區走道"
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
    "name": "中層看台欄",
    "zone": "arena_quarter",
    "description": "中層看台欄位於座席轉角，西側通向觀眾席走廊輪廓，南面能俯看決鬥沙地。欄杆後方只剩狹窄階梯落差與維修架，這裡標示封閉看台，不提供通行路線。",
    "image": "arena_quarter_fill_28_8.png",
    "imagePrompt": "中層看台欄 arena_quarter_fill_28_8 in arena_quarter, room function connector, middle spectator railing at a seating corner, west corridor outline, duel sand visible below to the south, narrow stair drop and maintenance scaffold behind the rail, tiered stone seating terrain, brass rail and angled torchlight，畫面以中層欄杆和座席轉角為主，南側能俯看沙地，西邊走廊只留輪廓，後方維修架封住路線, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": 28,
    "worldY": 8
  },
  "arena_quarter_fill_29_8": {
    "id": "arena_quarter_fill_29_8",
    "name": "東看台轉角",
    "zone": "arena_quarter",
    "description": "東看台轉角被冠軍畫像與繩欄包圍，西側是觀眾席的回聲，北面能聽見票券柱廊的人潮。後方維修梯已收起，因此這格只作為看台外輪廓與不可通行邊界。",
    "image": "arena_quarter_fill_29_8.png",
    "imagePrompt": "東看台轉角 arena_quarter_fill_29_8 in arena_quarter, room function border road, eastern spectator corner wrapped by champion portrait frames and rope rails, west echoes of seating rows, ticket colonnade crowd to the north, removed maintenance ladder behind the wall, stone corner terrain, faded banners and torch dust，前景繩欄包住轉角，北側柱廊人潮只是遠景光點，西側座席回聲用階梯剪影呈現，後方沒有可走樓梯, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 29,
    "worldY": 8
  },
  "arena_quarter_fill_30_10": {
    "id": "arena_quarter_fill_30_10",
    "name": "東門封鎖線",
    "zone": "arena_quarter",
    "description": "東門封鎖線位於競技城區外緣，西側能回望沙地與裁判席，東面大門被修繕木架擋住。這裡是東側地圖封閉 blocker，讓玩家明確知道要回主場內側尋路，避免誤入城外空格。",
    "image": "arena_quarter_fill_30_10.png",
    "imagePrompt": "東門封鎖線 arena_quarter_fill_30_10 in arena_quarter, room function border road, east gate blockade on the arena edge, west view back toward sand field and judge platform, eastern gate covered by repair scaffolding, heavy wooden frame terrain, chains, dust beams and forbidden exit mood，前景修繕木架封住東門，中景西側露出沙地與裁判席方向，地面石粉和鎖鏈標示這不是出城路線, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側大門正在修繕，木架封住外出路線"
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
    "name": "東側石階封口",
    "zone": "arena_quarter",
    "description": "東側石階封口貼著看台背牆，西面可見座席階梯，東側石階被崩落碎塊堵住。它保留建築高度差與邊界感，不放服務或怪物，玩家需要折回西側通道。",
    "image": "arena_quarter_fill_30_11.png",
    "imagePrompt": "東側石階封口 arena_quarter_fill_30_11 in arena_quarter, room function connector, blocked eastern stone stairs behind spectator wall, seating steps visible to the west, collapsed rubble sealing the east side, broken stair terrain, cracked masonry, iron rail fragments and cold torch shadow，前景碎石堵住石階出口，西面座席階梯提供返回方向，背牆高度差明顯，畫面重點是不能繼續往東走, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側石階被碎塊堵住，只能折回西側看台"
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
    "name": "北東旗欄",
    "zone": "arena_quarter",
    "description": "北東旗欄插滿決鬥旗幟，西側接近武器檢查線，南面能看見觀眾入口的石階。東側外牆沒有開門，這格作為北東角封閉 blocker，避免地圖誤導玩家走出場區。",
    "image": "arena_quarter_fill_30_7.png",
    "imagePrompt": "北東旗欄 arena_quarter_fill_30_7 in arena_quarter, room function border road, northeast flag barrier filled with duel banners, weapon inspection line to the west, spectator entrance stairs to the south, blank east wall with no gate, flagpole and rope terrain, fluttering cloth, torchlit dust and closed corner mood，前景決鬥旗幟和繩欄形成北東角邊界，西側檢查線與南面入口石階只作方向提示，東牆完全無門, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側外牆沒有開門，旗欄後方禁止通行"
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
    "name": "東看台欄門",
    "zone": "arena_quarter",
    "description": "東看台欄門面向上層座席，西側通往觀眾席輪廓，東面欄門被鎖鏈固定。這裡是看台外圈的封閉 blocker 節點，只提供地圖輪廓與路線警示，不是服務房，也不放任務目標。",
    "image": "arena_quarter_fill_30_8.png",
    "imagePrompt": "東看台欄門 arena_quarter_fill_30_8 in arena_quarter, room function border road, eastern stand rail gate facing upper seats, west outline of spectator corridor, chained gate fixed on the east side, iron rail architecture, stone landing, worn red banners and dim lamp glow，畫面主體是被鎖鏈固定的欄門，西側觀眾席通道只留下輪廓，東側欄外沒有路，地面石臺狹窄封閉, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側欄門被鎖鏈固定，觀眾須回西側階梯"
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
    "name": "東外牆窄巷",
    "zone": "arena_quarter",
    "description": "東外牆窄巷沿競技場石牆排列，西側能聽見場內歡呼，東側牆根堆滿封存拒馬與破旗架。這裡作為不可通行的封閉邊界，玩家只能回到西側正式競技區路線，不會接出新通道。",
    "image": "arena_quarter_fill_30_9.png",
    "imagePrompt": "東外牆窄巷 arena_quarter_fill_30_9 in arena_quarter, room function border road, narrow alley along the eastern arena stone wall, west muffled cheers from inside, east wall base crowded with stored barricades and broken flag racks, tight stone passage terrain, dust, iron spikes and claustrophobic torchlight，前景狹巷被拒馬和破旗架擠滿，西側牆內歡呼只以光縫暗示，東側高牆沒有門，玩家必須折回正式路線, slightly elevated adventurer eye view, terrain stone corridor, readable arena architecture, blocked-route composition, clear north south east west path cues, layered torch key light, dusty rim light, worn stone, rope, iron, timber, cloth banner and sand textures, practical dark fantasy arena boundary mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "",
        "locked": true,
        "description": "東側石牆與拒馬堵住窄巷，不能穿出競技城區"
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
    "name": "空心木橋東枯枝封",
    "zone": "blackwood",
    "description": "空心木橋東枯枝封貼著黑木林深處邊界，西側倒木橋腹仍傳來空洞回音，北面長老樹環的黑根垂下階梯。枯枝棚架封住東南側錯路，樹皮可刮取少量黑木炭皮，但這裡主要是 border blocker。",
    "image": "blackwood_fill_n11_15.png",
    "imagePrompt": "空心木橋東枯枝封 blackwood_fill_n11_15 in blackwood 黑木林, room function border road, dead branch barricade east of a hollow log bridge, west fallen bridge belly echo, north elder tree ring roots descending like stairs, southeast wrong path sealed by dry branch lattice, terrain black forest roots, charcoal bark, wet moss, dim gray light and hollow boundary mood，前景是枯枝棚架與黑木炭皮，中景西側空心木橋只露出陰影，北面長老樹環黑根垂落成地標，東南側明確無路，整體構圖保留前景可走空間，中景地標清楚，背景以黑樹、灰霧、濕根與腐葉堆疊深度，危險感壓迫但不出現角色或介面，光線從樹縫斜切，地面採集物與封路根牆分層可辨，讓玩家一眼看出這是邊界採集點而不是主通道, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -11,
    "worldY": 15
  },
  "blackwood_fill_n12_13": {
    "id": "blackwood_fill_n12_13",
    "name": "倒祠北苔根採封",
    "zone": "blackwood",
    "description": "倒祠北苔根採封位在倒塌小祠北側，南面的斷柱被黑苔吞住，東邊枯枝棚縫透出灰光，西側還能聽見骨鈴晃動。石板下盤根錯結，可採黑苔與夜蕨，但根牆阻斷深入路線。",
    "image": "blackwood_fill_n12_13.png",
    "imagePrompt": "倒祠北苔根採封 blackwood_fill_n12_13 in blackwood 黑木林, room function resource path, mossy root gathering pocket north of a collapsed shrine, broken pillars swallowed by black moss to the south, gray light through east branch gaps, bone chimes hinted west, terrain cracked shrine slabs, tangled roots, night fern and cold damp shadow，前景石板下盤根錯結可採黑苔，南側倒祠斷柱是主要地標，東側枯枝縫透光，根牆阻斷深入路線，整體構圖保留前景可走空間，中景地標清楚，背景以黑樹、灰霧、濕根與腐葉堆疊深度，危險感壓迫但不出現角色或介面，光線從樹縫斜切，地面採集物與封路根牆分層可辨，讓玩家一眼看出這是邊界採集點而不是主通道, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 1,
    "worldX": -12,
    "worldY": 13
  },
  "blackwood_fill_n13_13": {
    "id": "blackwood_fill_n13_13",
    "name": "骨鈴東枯根採封",
    "zone": "blackwood",
    "description": "骨鈴東枯根採封夾在骨鈴林與倒祠北苔根之間，西面的骨片風鈴敲出空聲，南側黑樹脂池滲出暗亮黏液，北邊影狼窩留下爪痕。枯根可採夜蕨毒液，卻也是封住狼徑外緣的 blocker。",
    "image": "blackwood_fill_n13_13.png",
    "imagePrompt": "骨鈴東枯根採封 blackwood_fill_n13_13 in blackwood 黑木林, room function resource path, dry root gathering blocker between bone chime grove and fallen shrine roots, west bone wind chimes, south black resin pool with dark liquid, north shadow wolf claw marks, terrain dead roots, poisonous night fern, bone shards and cold green-black light，前景枯根與夜蕨毒液可採，中景骨片風鈴和黑樹脂池分別標出西南方向，北側爪痕暗示狼徑被封住，整體構圖保留前景可走空間，中景地標清楚，背景以黑樹、灰霧、濕根與腐葉堆疊深度，危險感壓迫但不出現角色或介面，光線從樹縫斜切，地面採集物與封路根牆分層可辨，讓玩家一眼看出這是邊界採集點而不是主通道, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -13,
    "worldY": 13
  },
  "blackwood_fill_n15_12": {
    "id": "blackwood_fill_n15_12",
    "name": "女巫樹洞北炭根封",
    "zone": "blackwood",
    "description": "女巫樹洞北炭根封在黑木林西側高根上，南面女巫樹洞掛著綠火，東側無月空地吞掉所有月光。炭黑樹根裸露成硬脊，可刮黑木炭皮補給，但北西兩面被根牆封死，只作 blocker。",
    "image": "blackwood_fill_n15_12.png",
    "imagePrompt": "女巫樹洞北炭根封 blackwood_fill_n15_12 in blackwood 黑木林, room function resource path, charcoal root ridge north of a witch tree hollow, green fire hanging to the south, moonless clearing swallowing light to the east, north and west root walls sealed, terrain black roots, charred bark, witch lantern glow and oppressive forest shadow，前景炭黑硬根像脊骨裸露可刮炭皮，南面女巫樹洞綠火是地標，東側無月空地變成吞光陰影，北西無路，整體構圖保留前景可走空間，中景地標清楚，背景以黑樹、灰霧、濕根與腐葉堆疊深度，危險感壓迫但不出現角色或介面，光線從樹縫斜切，地面採集物與封路根牆分層可辨，讓玩家一眼看出這是邊界採集點而不是主通道, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": -15,
    "worldY": 12
  },
  "blackwood_fill_n17_13": {
    "id": "blackwood_fill_n17_13",
    "name": "炭門北黑苔封徑",
    "zone": "blackwood",
    "description": "炭門北黑苔封徑守在炭樹入口北面，南側焦黑門柱仍有獵人刻痕，東邊黑苔床散出濕冷毒味。地面積著可採的夜蕨與黑苔，但西側樹影反覆閉合，是提醒玩家回到主路的 blocker。",
    "image": "blackwood_fill_n17_13.png",
    "imagePrompt": "炭門北黑苔封徑 blackwood_fill_n17_13 in blackwood 黑木林, room function resource path, black moss sealed trail north of the charred tree gate, south scorched gate posts with hunter cuts, east black moss bed giving cold poison scent, west shadows closing repeatedly, terrain wet moss, night fern, burnt roots and dim toxic green light，前景夜蕨與黑苔鋪滿潮濕地面，南側焦黑門柱和獵人刻痕清楚可見，西側樹影像牆合攏提醒折回主路，整體構圖保留前景可走空間，中景地標清楚，背景以黑樹、灰霧、濕根與腐葉堆疊深度，危險感壓迫但不出現角色或介面，光線從樹縫斜切，地面採集物與封路根牆分層可辨，讓玩家一眼看出這是邊界採集點而不是主通道, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -17,
    "worldY": 13
  },
  "bloodsalt_coast_fill_40_7": {
    "id": "bloodsalt_coast_fill_40_7",
    "name": "潮門南赤崖棧道",
    "zone": "bloodsalt_coast",
    "description": "潮門南赤崖棧道是血鹽海岸北段的正式路線 route，北面潮門入口仍有霧港鹽霧，南側鹵蝕小徑切進紅色海崖，東邊骨網淺灘掛著破魚骨。鏽木板雖晃動，但仍標出南北通行線。",
    "image": "bloodsalt_coast_fill_40_7.png",
    "imagePrompt": "潮門南赤崖棧道 bloodsalt_coast_fill_40_7 in bloodsalt_coast 血鹽海岸, room function border road, red salt cliff boardwalk south of the tide gate, north mist rope markers leading back to the entrance, south brine-cut path along the crimson cliff, east bone-net shallows with broken fish bones, terrain rusted planks, red salt crystals, wet rock and blood tide spray，棧道近處鋪滿濕滑紅鹽與破繩，北向霧門和南向赤崖同時入鏡，東邊魚骨網以低角度壓在潮線上，鹽風、血潮、鏽木與濕岩層次清楚，讓玩家看出這是危險但可走的南北路線，鏡頭下緣保留可踏上的濕木板，中段讓赤崖斜切畫面，上方用鹽霧壓低天空，整體顏色是暗紅、鐵鏽與冷灰，沒有任何人物或文字標示, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "bloodsalt_coast_entrance_tidegate",
        "description": "沿鏽木板與鹽霧繩標北返潮門入口。"
      },
      {
        "direction": "south",
        "targetRoomId": "bloodsalt_coast_brine_cut_path",
        "description": "順紅鹽崖邊的棧板南下鹵蝕小徑。"
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
    "name": "鹵蝕南側紅鹽封礁",
    "zone": "bloodsalt_coast",
    "description": "鹵蝕南側紅鹽封礁位在鹵蝕小徑南面，北側切痕仍積著血紅鹽水，東邊淹沒瞭望塔露出斷梁。紅鹽晶把礁石黏成尖刺，是純 blocker，阻止玩家從小徑背面切向瞭望塔。",
    "image": "bloodsalt_coast_fill_40_9.png",
    "imagePrompt": "鹵蝕南側紅鹽封礁 bloodsalt_coast_fill_40_9 in bloodsalt_coast 血鹽海岸, room function danger pocket, red salt reef sealed south of the brine-cut path, north cut marks filled with blood-red brine, east drowned watchtower beams visible, terrain spiked reef, crimson salt crystals, rust foam and sharp wet stone，封礁近處像一排紅色尖牙插出水面，北側鹵蝕切痕殘留血水，東方斷梁只露出輪廓，冷霧和鹽晶反光分層，整體要像小徑背面突然被尖礁封死，鏡頭壓低到礁石高度，尖鹽晶彼此交錯形成天然拒馬，遠處瞭望塔斷梁只作方向參照，血水反光沿裂縫延伸但不形成可通行路面, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 40,
    "worldY": 9
  },
  "bloodsalt_coast_fill_41_10": {
    "id": "bloodsalt_coast_fill_41_10",
    "name": "淹塔南鏽棧封",
    "zone": "bloodsalt_coast",
    "description": "淹塔南鏽棧封貼在淹沒瞭望塔南側，北面塔腳浸在紅潮裡，東側戰旗沙丘的破布在鹽風中甩動。棧道被腐蝕鐵釘與斷板封住，是 blocker 邊界，不開通往沙丘背面的捷徑。",
    "image": "bloodsalt_coast_fill_41_10.png",
    "imagePrompt": "淹塔南鏽棧封 bloodsalt_coast_fill_41_10 in bloodsalt_coast 血鹽海岸, room function border road, rusted boardwalk sealed south of a drowned watchtower, north tower foot standing in red tide water, east war-banner dune cloth whipping in salt wind, terrain broken planks, corroded iron nails, wet timber and crimson foam，鏽棧近處由腐釘與斷板交錯封口，北面紅潮泡住瞭望塔腳，東側破戰旗被鹽風吹成斜線，木板濕痕、鐵鏽、血沫和沙丘灰光共同標出不可走邊界，視角沿斷棧向北回望淹塔，近處鐵釘和斷板像齒列封住通道，遠處戰旗沙丘被鹽霧削淡，所有材質都濕冷、鏽蝕且帶有紅潮痕，近景需留出被封死的斷面，不可畫成完整橋面, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 41,
    "worldY": 10
  },
  "bloodsalt_coast_fill_43_6": {
    "id": "bloodsalt_coast_fill_43_6",
    "name": "破船標東赤鹽崖",
    "zone": "bloodsalt_coast",
    "description": "破船標東赤鹽崖位在破船標東面，西側殘骸木牌被紅鹽包住，南方猩紅潮池不斷冒泡。礁崖覆滿鋒利鹽晶，是純 blocker，用來封住破船標與潮池之間的危險斜面。",
    "image": "bloodsalt_coast_fill_43_6.png",
    "imagePrompt": "破船標東赤鹽崖 bloodsalt_coast_fill_43_6 in bloodsalt_coast 血鹽海岸, room function danger pocket, red salt cliff east of a wreck marker, west wrecked wooden sign wrapped in crimson salt, south scarlet tide pool bubbling below, terrain jagged salt-crystal cliff, broken ship wood, blood brine mist and slippery rock，赤鹽崖近處布滿刀刃狀鹽晶，西側破船木標被紅鹽吞住，南方潮池冒泡成暗紅亮點，礁壁濕滑、碎木與血霧交錯，畫面要封住斜坡而不暗示可攀爬，視角從危險斜面上方向下看，鹽晶邊緣像碎刃反光，破船木牌提供西側定位，潮池泡沫提供南側定位，整張圖不能像可攀爬路線, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 43,
    "worldY": 6
  },
  "bloodsalt_coast_fill_44_7": {
    "id": "bloodsalt_coast_fill_44_7",
    "name": "猩紅潮池東鏽崖",
    "zone": "bloodsalt_coast",
    "description": "猩紅潮池東鏽崖壓在潮池東側，西面血色池水拍打礁壁，南方走私者海灣藏在低霧裡。崖邊棧道鏽斷成數截，裂縫裡凝著暗紅鹽晶與潮池血苔，是 blocker 地形，阻止玩家從潮池直接滑入海灣背路。",
    "image": "bloodsalt_coast_fill_44_7.png",
    "imagePrompt": "猩紅潮池東鏽崖 bloodsalt_coast_fill_44_7 in bloodsalt_coast 血鹽海岸, room function danger pocket, rust cliff east of a scarlet tide pool, west blood-colored water striking reef wall, south smuggler bay hidden in low fog, terrain broken cliff boardwalk, dark red salt crystals, tide-pool blood moss and slick cracks，鏽崖近處是斷成數截的棧板與裂縫，西側猩紅潮池拍出血色浪花，南方走私者海灣只藏在低霧後，暗紅鹽晶和潮池血苔讓邊界濕滑危險，視角貼著崖邊斷棧，近處裂縫裡有血苔與潮水泡沫，遠處低霧遮住海灣背路，紅鹽、鏽鐵、濕木和礁壁都要有清楚質感，近景需留出不可通行的斷裂邊，避免誤讀為捷徑, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": 44,
    "worldY": 7
  },
  "bloodsalt_coast_fill_45_9": {
    "id": "bloodsalt_coast_fill_45_9",
    "name": "血稅碼頭北礁封",
    "zone": "bloodsalt_coast",
    "description": "血稅碼頭北礁封位在血稅碼頭北面，南側木樁掛著暗紅繩結，西邊冰暗湧潮把黑水推上礁面。紅鹽晶與碎骨網封住通道，是純 blocker，標示碼頭北側不可繞行。",
    "image": "bloodsalt_coast_fill_45_9.png",
    "imagePrompt": "血稅碼頭北礁封 bloodsalt_coast_fill_45_9 in bloodsalt_coast 血鹽海岸, room function border road, sealed reef north of the blood-tax pier, south dock posts with dark red knots, west cold black surge pushing water over reef stone, terrain red salt crystals, broken bone net, wet pier timber and black tide foam，北礁近處被碎骨網和紅鹽晶纏死，南側血稅碼頭木樁掛著暗紅繩結，西方黑潮湧上礁面，濕木、骨片、黑水與鹽霧要清楚說明這裡不能繞行，視角讓骨網橫在畫面前段，碼頭木樁在南側形成可辨地標，黑潮從西側推入但被礁面打散，整體呈現碼頭北緣被完全封住的狀態, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 45,
    "worldY": 9
  },
  "bloodsalt_coast_fill_47_9": {
    "id": "bloodsalt_coast_fill_47_9",
    "name": "深海神殿西沉門路牌亭",
    "zone": "bloodsalt_coast",
    "description": "深海神殿西沉門路牌亭位在血鹽海岸最東端，西面斷棧只剩鹽蝕木樁，東側半沉石門刻滿古文，門後透出藍色火光。路牌亭標示這裡是跨區邊界路線端點，專門銜接血鹽海岸與深海神殿潮門，不放一般遭遇。",
    "image": "bloodsalt_coast_fill_47_9.png",
    "imagePrompt": "深海神殿西沉門路牌亭 bloodsalt_coast_fill_47_9 in bloodsalt_coast 血鹽海岸, room function border road, half-sunken sign shelter at the eastern coast edge, west broken boardwalk with salt-eaten posts, east ancient half-submerged stone gate with blue fire beyond, terrain wet stone, rotten timber, red salt crust and deep sea mist，路牌亭近處立在半沉石板上，西面斷棧只剩鹽蝕木樁，東側古老石門浸在藍火與海霧中，紅鹽殼、腐木、濕石和深海冷光共同標示跨區端點，視角把路牌亭放在近景偏側，東方石門與藍火作為最亮地標，西側鹽蝕木樁逐漸消失在紅霧裡，畫面強調這是通往深海神殿的邊界端點, slightly elevated adventurer eye view, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "deepsea_temple_tide_gate",
        "description": "沿半沉石門與藍火刻痕東行，進入深海神殿潮門。"
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
    "name": "鐵木影門苔徑",
    "zone": "dark_forest",
    "description": "鐵木影門苔徑貼著暗影森林東緣，西側樹根覆住黑苔石，東面能看見鐵木要塞傳送院的冷光。這裡是跨區 border 路線與採集邊界，苔蘚裡有濕木藥草痕跡，腳下石縫很窄。",
    "image": "dark_forest_fill_n1_13.png",
    "imagePrompt": "鐵木影門苔徑 dark_forest_fill_n1_13 in dark_forest 暗影森林, room function cross zone border road, mossy stone threshold on the eastern edge of the dark forest, west black roots covering wet stones, east cold blue portal-yard light from Ironwood Fort glimpsed through branch slits, terrain slick moss slabs, damp herb traces, ironwood bark and narrow stone cracks，入口端是可踏但狹窄的黑苔石縫，中段根牆形成影門，東側冷光像要塞傳送院入口從樹縫透出，西側暗林壓回濕黑樹根，讓玩家一眼讀出這是暗林到鐵木要塞的東向邊界路線而不是普通空地。石面要有被靴底磨亮的濕痕，苔縫散著藥草斷莖，根牆上垂著冷霧水珠，遠端冷光被枝條切成細線，石縫邊還有細小藍白菌光，整體材質需有濕苔、硬根、冷霧、石縫藥草與遠處冷光層次, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_portal_yard",
        "description": "東側穿過苔石影門與冷光樹縫，接向鐵木要塞傳送院"
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
    "name": "軍需陰根道",
    "zone": "dark_forest",
    "description": "軍需陰根道被粗樹根壓成窄徑，西側黑葉遮住回頭路，東面要塞軍需排屋的木牆從枝縫露出。這裡是暗林與鐵木要塞的 border 路線，樹根旁留有採集痕跡與舊巡邏刻痕。",
    "image": "dark_forest_fill_n1_14.png",
    "imagePrompt": "軍需陰根道 dark_forest_fill_n1_14 in dark_forest 暗影森林, room function cross zone border road, thick root corridor squeezed between dark leaves and the Ironwood Fort quartermaster row, west black foliage hides the return trail, east rough wooden military storehouse wall visible beyond branches, terrain tangled roots, patrol knife marks, wet leaves and gathered herb scraps，粗根把小路壓成一條陰暗通道，東側枝縫露出要塞軍需排屋木牆與冷燈，西側黑葉像幕布壓住暗林回頭路，地面刻痕與採集痕跡要清楚。近處落葉被巡邏靴踩成泥痕，根節上有短刀刮出的舊標記，軍需棚方向只露出木板縫與微弱燈點，林內則以墨綠陰影封住退路，構圖需讓東向跨區出口可辨但不畫成開闊村道, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_quartermaster_row",
        "description": "東側沿盤根陰影穿出森林，抵達鐵木要塞軍需排屋"
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
    "name": "熔爐煙苔路",
    "zone": "dark_forest",
    "description": "熔爐煙苔路藏在黑樹與濕苔之間，西側暗林仍有冷霧，東面鐵木要塞鍛造區的煙味穿過枝葉。這裡是跨區 border 通道，苔石上可見被熱灰壓暗的草藥痕與焦黑足印，路面狹窄。",
    "image": "dark_forest_fill_n1_15.png",
    "imagePrompt": "熔爐煙苔路 dark_forest_fill_n1_15 in dark_forest 暗影森林, room function cross zone border road, narrow moss path between black trees and forge smoke, west cold forest mist, east orange-gray smoke from Ironwood Fort forge works filtering through leaves, terrain wet moss stones, hot ash stains, charred footprints and low root rails，近處苔石被灰燼壓暗並留下焦黑腳印，中段黑樹夾出狹路，東側暖灰熔爐煙穿過枝葉標示鍛造區方向，西側仍是冷霧暗林。石縫裡的草藥被熱灰燙成褐邊，低矮根欄把步線收得很窄，煙光與霧光在半空交疊，畫面要呈現冷暗森林與要塞熔爐氣味交會的邊界，不可像完整道路廣場, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_forge_works",
        "description": "東側循煙味穿過苔石路，接向鐵木要塞鍛造工坊"
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
    "name": "鐵木根牆徑",
    "zone": "dark_forest",
    "description": "鐵木根牆徑沿著暗林東側延伸，西面黑樹根纏成牆，東側鐵木要塞林苑透出樹脂火光。這裡是 border 路線與採集邊界，玩家需沿東側根牆出口進入要塞林苑，不可往南硬穿。",
    "image": "dark_forest_fill_n1_16.png",
    "imagePrompt": "鐵木根牆徑 dark_forest_fill_n1_16 in dark_forest 暗影森林, room function cross zone border road, ironwood root wall path on the eastern forest edge, west black root wall braided shut, east resin firelight from Ironwood Fort grove, south path blocked by tangled roots, terrain hard roots, resin sparks, damp moss and shadowed bark，畫面下緣狹窄根牆徑沿東側伸展，東方樹脂火光穿過鐵木缺口，西側黑根牆完全封住，南端要以坍根與暗霧表明不可硬穿。硬根表面有樹脂焦點與濕苔反光，草藥割口停在根牆邊緣，南側黑霧吞掉任何踏點，樹脂火星貼著根節浮動，畫面重點是東向進入要塞林苑的邊界節點與採集邊界, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ironwood_fort_ironwood_grove",
        "description": "東側穿過鐵木根牆缺口，接向要塞內的鐵木林苑"
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
    "name": "北苔根封口",
    "zone": "dark_forest",
    "description": "北苔根封口被古樹根盤成低牆，東側能聽見軍需陰根道的枝葉摩擦，南面暗林更深。苔根旁有採集痕跡，但根牆完全封住路線，這格是封閉 blocker。",
    "image": "dark_forest_fill_n2_14.png",
    "imagePrompt": "北苔根封口 dark_forest_fill_n2_14 in dark_forest 暗影森林, room function sealed blocker, ancient low root wall covered in black moss west of the quartermaster border trail, east branches rub toward the military root road, south dark forest deepens behind fog, terrain moss roots, herb gathering scratches, damp soil and closed root lattice，低位視線裡黑苔古根盤成低牆並完全封住路線，東側只用枝葉摩擦與微光提示軍需陰根道方向，南面霧氣變深但沒有可行出口。根牆腳下有被採過的草梗、濕土指痕與碎菌傘，枝條交叉得像天然柵欄，冷綠光只停在牆面上，潮氣沿根縫凝成細珠，構圖需明確是封閉 blocker 而非隱藏小徑, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": 14
  },
  "dark_forest_fill_n3_14": {
    "id": "dark_forest_fill_n3_14",
    "name": "中段腐根欄",
    "zone": "dark_forest",
    "description": "中段腐根欄位於暗影森林腹地，東側北苔根封口仍可望見，西面枯枝把地面壓得鬆軟。腐根縫裡有黑苔和小菌株，這裡是採集邊界，不提供穿越路線。",
    "image": "dark_forest_fill_n3_14.png",
    "imagePrompt": "中段腐根欄 dark_forest_fill_n3_14 in dark_forest 暗影森林, room function resource blocker, rotted root fence in the inner dark forest, east moss-root seal visible through trunks, west dead branches pressing the soft ground, terrain decayed roots, black moss, tiny fungi clusters, wet leaf mold and sunless green-gray gloom，腐根像欄杆般倒在中段，東側可望見北苔根封口的低牆輪廓，西面枯枝壓出鬆軟腐土，黑苔和小菌株集中在根縫作採集點。腳邊葉泥有潮水般的黑亮反光，菌傘旁散著斷根纖維，遠層樹幹彼此重疊沒有開口，腐木表皮要呈現被水泡爛的層次，畫面要封住穿越感，只保留短距離採集邊界與陰濕腹地氣氛, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": -3,
    "worldY": 14
  },
  "dark_forest_fill_n4_12": {
    "id": "dark_forest_fill_n4_12",
    "name": "北影苔石坪",
    "zone": "dark_forest",
    "description": "北影苔石坪位在暗林北側高處，南面可聽見盤根橋附近的濕木聲，東側苔石被黑葉覆住。這裡只有苔蘚與草藥採集痕跡，是封閉 blocker，不接出北側新路。",
    "image": "dark_forest_fill_n4_12.png",
    "imagePrompt": "北影苔石坪 dark_forest_fill_n4_12 in dark_forest 暗影森林, room function northern sealed blocker, raised moss stone flat on the northern dark forest edge, south distant wet wood creak from root bridge area, east stones buried under black leaves, north no outlet beyond low shadow bank, terrain slick moss slabs, medicinal grass traces and cold overhead shade，下緣是高處濕滑苔石坪，南側遠處用盤根橋濕木聲和根影暗示正式路線，東側黑葉蓋住石面，北面低暗坡沒有出口。石坪邊緣要有水珠、刮痕與少量可採藥草，冷白光從樹冠縫隙斜落卻照不出新路，外圈陰影像牆面收束，苔面高低差要清楚，石縫間露出灰白礦脈，整體需表現北側封閉 blocker 不接新路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -4,
    "worldY": 12
  },
  "dark_forest_fill_n4_14": {
    "id": "dark_forest_fill_n4_14",
    "name": "內林苔階封口",
    "zone": "dark_forest",
    "description": "內林苔階封口由幾塊濕滑石階堆成，北側腐根欄壓住舊路，南面暗林霧氣更重。石階縫裡能採到黑苔，但前方根牆坍住，這格只作封閉 blocker 邊界。",
    "image": "dark_forest_fill_n4_14.png",
    "imagePrompt": "內林苔階封口 dark_forest_fill_n4_14 in dark_forest 暗影森林, room function sealed blocker, slick mossy stone steps collapsed inside the forest, north rotted root fence pressing an old path, south heavier dark mist, terrain wet stone stair fragments, black moss harvest seams, fallen root wall and leaf-shadow pools，幾塊濕滑苔階在鏡頭下方歪斜堆疊，中段坍根牆堵死前路，北側腐根欄壓住舊徑，南面霧更重但不可畫出通道。階面要有黑苔採集縫、葉影水窪與碎石粉，坍根下方不能留出縫隙，微弱綠光只描出石階邊緣，碎石粉貼著水窪沉積，斷階旁殘留細小根鬚，畫面需明確是內林封口而不是樓梯入口, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -4,
    "worldY": 14
  },
  "dark_forest_fill_n4_16": {
    "id": "dark_forest_fill_n4_16",
    "name": "南影根幕",
    "zone": "dark_forest",
    "description": "南影根幕垂滿黑色細根，北面內林苔階封口仍有微弱反光，東側鐵木根牆徑被枝影遮住。根幕下有採集痕跡，但無法通行，是暗林內圈 blocker 邊界。",
    "image": "dark_forest_fill_n4_16.png",
    "imagePrompt": "南影根幕 dark_forest_fill_n4_16 in dark_forest 暗影森林, room function inner ring blocker, curtain of black hanging roots in the southern shadow, north faint reflection from mossy stone step seal, east ironwood root wall path obscured by branch shadows, terrain dangling root threads, wet moss, gathered herb cuts and opaque forest dark，黑色細根像厚簾垂滿畫面中段，地表可見草藥割痕與潮濕苔土，北側只留下苔階封口的微弱反光，東側鐵木根牆徑被枝影遮成方向暗示。根絲要密到看不見後方踏點，水珠沿根鬚排列成冷亮細線，地表藥草被壓在陰影邊，根幕底部泛著墨綠濕光，樹皮紋理要粗糙清楚，需呈現暗林內圈 blocker 邊界, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": -4,
    "worldY": 16
  },
  "dark_forest_fill_n4_17": {
    "id": "dark_forest_fill_n4_17",
    "name": "南腐葉封溝",
    "zone": "dark_forest",
    "description": "南腐葉封溝是一條積滿黑水與腐葉的林下溝道，北側南影根幕擋住視線，東面能聞到濕木與要塞煙味。溝邊斷木橋只剩兩根濕滑木梁，梁下有藥草採集痕跡，但沒有穩固踏點，這格是封閉 blocker。",
    "image": "dark_forest_fill_n4_17.png",
    "imagePrompt": "南腐葉封溝 dark_forest_fill_n4_17 in dark_forest 暗影森林, room function sealed blocker, forest ditch filled with black water and rotting leaves, north hanging root curtain blocks sight, east faint wet wood and fortress smoke scent, terrain broken two-beam footbridge, slick logs, herb traces below the beam and stagnant dark water，溝口黑水腐葉阻斷腳步，斷木橋只剩兩根濕滑木梁斜跨但不可踏，北側根幕像黑簾遮住來路，東方只用煙味與淡灰光提示要塞方向。水面漂著腐葉泡沫與藥草碎根，木梁端頭已腐爛下沉，溝岸泥痕顯示無法站穩，梁下草梗刮痕清楚但沒有穩固踏點，整張圖必須像封死的林下溝道, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -4,
    "worldY": 17
  },
  "dark_forest_fill_n4_18": {
    "id": "dark_forest_fill_n4_18",
    "name": "南界苔石斷階",
    "zone": "dark_forest",
    "description": "南界苔石斷階位於暗影森林南緣，北側腐葉封溝逐漸收窄，南面石階被坍根和黑苔覆住。這裡是 border blocker，保留採集痕跡但禁止往南硬穿，斷階下沒有落腳點或路標，只能折回北側。",
    "image": "dark_forest_fill_n4_18.png",
    "imagePrompt": "南界苔石斷階 dark_forest_fill_n4_18 in dark_forest 暗影森林, room function southern border blocker, broken moss stone steps on the south edge of the forest, north rotting leaf ditch narrowing behind, south collapsed roots and black moss cover the stair drop, terrain fractured stone slabs, no foothold below, gathered moss marks and heavy border shadow，石階起點是斷裂苔石階的缺口，南側坍根與黑苔覆住下落處且沒有落腳點或路標，北側腐葉封溝收窄回暗林，苔面刮取印只能停在斷階上方。斷面要有濕石剝落、根鬚抓住石縫與深色落差陰影，南方不出現任何亮點或道路標記，坍根下方只見黑霧，構圖需清楚告訴玩家南界封死只能折回北側, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側苔石斷階被坍根封死，無法離開暗影森林"
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
    "name": "西側黑藤欄",
    "zone": "dark_forest",
    "description": "西側黑藤欄靠近暗林與黑木林邊界，東面能回望腐葉封溝的霧氣，西側藤牆下有濕亮草葉。這裡是採集邊界與封閉 blocker，藤牆後方沒有安全路標。",
    "image": "dark_forest_fill_n7_16.png",
    "imagePrompt": "西側黑藤欄 dark_forest_fill_n7_16 in dark_forest 暗影森林, room function western border blocker, black vine fence near the dark forest and blackwood boundary, east fog from rotting leaf ditch visible between trunks, west vine wall with wet glossy grass below, terrain thorny black vines, damp leaves, herbal gathering patch and no safe trail marker，藤牆下方濕亮草葉和割取印貼在黑藤牆下，中段藤蔓交錯成不可穿越的欄，東側樹幹間回望腐葉封溝霧氣，西側完全沒有安全路標，只保留黑木林方向的壓迫陰影。藤刺上掛著水珠與碎葉，草葉被踩彎但很快被藤根截斷，冷綠側光勾出封閉邊線，畫面要是邊界採集 blocker 而非通往黑木林的路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -7,
    "worldY": 16
  },
  "eastern_coast_fill_31_0": {
    "id": "eastern_coast_fill_31_0",
    "name": "北吊機礁封路",
    "zone": "eastern_coast",
    "description": "北吊機礁封路貼著東海岸北端，北面能望見機械墳場入口吊機的黑影，南側海藻灘在潮聲中展開，東邊木棧道只剩遠處欄杆。這裡是 border blocker，亂礁與廢纜封住機械區方向，不提供正式通行。",
    "image": "eastern_coast_fill_31_0.png",
    "imagePrompt": "北吊機礁封路 eastern_coast_fill_31_0 in eastern_coast Eastern Coast, room function border road, rocky passage sealed below the machinery graveyard crane, north distant black crane silhouette and scrap cables, south pale kelp flats opening with tide noise, east broken boardwalk rail far away, terrain jagged reefs, rusted cable, wet stone and white surf，低位礁石通道被亂礁與廢纜完全封住，北方吊機黑影壓在天際，南側海藻灘用淡綠潮光拉開距離，東邊只露出遠處木欄杆作方向提示。礁縫裡要有海水泡沫、鏽鐵纜線、碎螺殼與濕石反光，構圖明確表示機械墳場方向不可通行，這只是東海岸北端邊界 blocker 而非入口近端浪花要打在鏽纜上形成白色鹽霜，礁石高度差和吊機剪影都需清楚，讓北界封鎖感更強。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 31,
    "worldY": 0
  },
  "eastern_coast_fill_31_3": {
    "id": "eastern_coast_fill_31_3",
    "name": "王道東側潮封",
    "zone": "eastern_coast",
    "description": "王道東側潮封位在王道市集東界外，西面可回望市集石路的旗桿，北側潮池洞窟滲出鹹水，東邊海蝕洞口被浪花遮住。濕滑礁面上立著潮門木牌、破繩欄與白色浪痕，明確標示市集與東海岸分界；這裡是 border blocker，不作跨區捷徑。",
    "image": "eastern_coast_fill_31_3.png",
    "imagePrompt": "王道東側潮封 eastern_coast_fill_31_3 in eastern_coast Eastern Coast, room function market edge border blocker, wet reef outside the royal market east boundary, west stone road flagpoles seen behind spray, north tidepool grotto leaks saltwater, east sea-cave mouth hidden by breaking waves, terrain slick reef, broken rope rail, tide gate marker and white foam scars，礁面濕滑且被破繩欄截斷，西側市集旗桿只作回望地標，北方潮池岩穴滲出藍色鹹水，東邊海蝕洞口被浪花整片遮住。木牌只畫成無字潮門標記，白色浪痕沿石面形成封線，讓玩家理解這裡標示王道市集與東方海岸分界，但不能作跨區捷徑或隱藏通道濕石邊緣要有市集石路帶來的泥沙、斷繩陰影與回潮泡沫，整體像被潮水故意切斷的邊界。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 31,
    "worldY": 3
  },
  "eastern_coast_fill_34_4": {
    "id": "eastern_coast_fill_34_4",
    "name": "海盜營南沙封",
    "zone": "eastern_coast",
    "description": "海盜營南沙封位在海盜營地南側，北面破帆與煙灰仍可辨認，西側暗礁貼著退潮線，南面潮間帶積著碎貝。這裡是 blocker 邊界，鬆沙下埋著木樁與斷索，只用來阻止玩家繞過營地路線。",
    "image": "eastern_coast_fill_34_4.png",
    "imagePrompt": "海盜營南沙封 eastern_coast_fill_34_4 in eastern_coast Eastern Coast, room function sandy blocker south of pirate camp, north torn sail and ash smoke remains, west dark reef along low tide line, south tide zone with broken shells, terrain loose sand, buried stakes, snapped ropes, damp shell grit and gray surf，鬆沙下露出半埋木樁與斷索，北面破帆和煙灰暗示海盜營地，西側退潮線貼著黑色暗礁，南方潮間帶堆著碎貝和淺水反光。沙面需要有陷落腳印但不可形成可走小徑，斷索與木樁像低矮拒馬攔住繞營路線，光線是陰雲下的冷灰海光破帆影子落在沙面上，煙灰被海風拉成灰線，碎貝與木樁排列成明顯封路節奏。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 34,
    "worldY": 4
  },
  "eastern_coast_fill_34_5": {
    "id": "eastern_coast_fill_34_5",
    "name": "藍泥北側潮溝",
    "zone": "eastern_coast",
    "description": "藍泥北側潮溝夾在海盜營南沙封與鹽風灘藍泥棚之間，北面乾沙逐漸變成礁石，南側藍黑色濕泥開始滲出鹽霧。潮溝水深不穩，是純 blocker 與過渡地形提示，不安排採集或戰鬥。",
    "image": "eastern_coast_fill_34_5.png",
    "imagePrompt": "藍泥北側潮溝 eastern_coast_fill_34_5 in eastern_coast Eastern Coast, room function transition blocker, unstable tidal trench between dry pirate-camp sand and blue-black Saltwind Flats mud shelf, north sand hardens into reef chips, south wet blue mud exhales salt fog, terrain shallow trench, dark water pockets, mud sheen, shell fragments and fog wisps，潮溝橫切畫面中央，北邊乾沙逐漸混入碎礁，南邊藍黑濕泥泛著冷亮鹽霧。水深不穩且泥面反光破碎，不能畫成可涉水通道；溝岸要有塌陷砂層、碎貝和浮鹽結晶，整體像東海岸沙礁過渡到鹽風灘前的封閉地形提示，不放任何戰鬥或採集焦點藍泥邊緣要有黏稠拖痕、浮鹽斑與淺溝暗流，顯示地面會吞腳而不是安全淺灘。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 34,
    "worldY": 5
  },
  "eastern_coast_fill_34_6": {
    "id": "eastern_coast_fill_34_6",
    "name": "鹽風藍泥北界",
    "zone": "eastern_coast",
    "description": "鹽風藍泥北界位在東海岸南緣，北面潮溝仍有海浪回聲，南側鹽風灘藍泥棚泛著藍黑濕光。這裡是跨區 border route 端點，標示海岸沙礁轉入鹽風灘濕泥，不放怪物或採集玩法。",
    "image": "eastern_coast_fill_34_6.png",
    "imagePrompt": "鹽風藍泥北界 eastern_coast_fill_34_6 in eastern_coast Eastern Coast, room function south cross-zone border route, coast sand reef turning into Saltwind Flats blue mud shelf, north tidal trench echo behind, south blue-black wet mud glowing under salt mist, terrain salt fog marker stakes, damp sand, mud sheen, broken shells and low coastal wind，畫面下方沙礁逐步被藍黑濕泥吞沒，南側鹽風灘藍泥棚泛著冷光，北側潮溝只以浪聲和濕痕回望。無字木標與鹽霧桿標示跨區端點，地面要從碎貝沙、潮濕礁屑過渡到黏滑藍泥，構圖需呈現可以沿南向濕泥進入鹽風灘，但不放怪物或採集道具南向泥路需要保留清楚入口寬度，兩側鹽霧收束成自然門檻，顏色從灰沙過渡到藍黑濕泥。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "saltwind_flats_blue_mud_shelf",
        "description": "沿藍黑濕泥與鹽霧木標南下，進入鹽風灘藍泥棚。"
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
    "name": "斷碼頭東礁封",
    "zone": "eastern_coast",
    "description": "斷碼頭東礁封位在破碼頭東側，西面木樁被浪打得歪斜，南方走私者海灣藏在礁影後。礁石裂縫被海水灌滿，這裡是 border blocker，阻止碼頭線直接切入海灣背面。",
    "image": "eastern_coast_fill_35_0.png",
    "imagePrompt": "斷碼頭東礁封 eastern_coast_fill_35_0 in eastern_coast Eastern Coast, room function pier-side border blocker, reef seal east of the broken pier, west crooked wet pier posts battered by waves, south smugglers cove hidden behind reef shadows, terrain flooded reef cracks, slick black stone, splintered timber and gray harbor light，斷碼頭東側的礁石裂縫灌滿海水，西邊歪斜木樁被浪打濕，南方走私者海灣只藏在礁影後不形成捷徑。近端裂縫要深且反光，碎木與泡沫塞住落腳點，遠處港光陰冷，構圖明確阻止碼頭線直接切入海灣背面，是封閉 border blocker 而不是可攀越礁道木樁影子要歪斜落在裂縫水面上，南側礁影只提供海灣存在感，不留下可鑽過的暗口。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 35,
    "worldY": 0
  },
  "eastern_coast_fill_36_2": {
    "id": "eastern_coast_fill_36_2",
    "name": "蛇巢東側浪封",
    "zone": "eastern_coast",
    "description": "蛇巢東側浪封貼著海蛇巢穴東面，西側礁洞裡有蛇鱗刮痕，北方風暴瞭望崖被浪霧遮住，東邊低礁延伸成一串斷點。這裡是 blocker 邊界，濕滑浪溝阻止巢穴路線向東亂接。",
    "image": "eastern_coast_fill_36_2.png",
    "imagePrompt": "蛇巢東側浪封 eastern_coast_fill_36_2 in eastern_coast Eastern Coast, room function serpent nest eastern blocker, wave-cut trench beside the sea serpent nest, west reef cave with serpent scale scratches, north stormwatch ledge veiled by spray mist, east low reefs broken into disconnected points, terrain slick wave gutter, greenish seawater, scale marks and jagged rock，濕滑浪溝貼著海蛇巢東側切開地面，西面礁洞內有蛇鱗刮痕與暗綠水光，北方風暴瞭望崖被浪霧遮住，東側低礁斷成一串無法連接的濕石點。浪溝要有急流泡沫與鋸齒礁壁，構圖清楚阻止蛇巢路線往東亂接，危險但不是戰鬥房蛇鱗刮痕需沿礁壁斜向延伸，浪溝水色偏暗綠，斷點礁石之間要有深水隔開。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 2,
    "worldX": 36,
    "worldY": 2
  },
  "eastern_coast_fill_37_2": {
    "id": "eastern_coast_fill_37_2",
    "name": "中段碎礁阻帶",
    "zone": "eastern_coast",
    "description": "中段碎礁阻帶位在蛇巢東側浪封與霧港西潮帶之間，西面浪溝仍可聽見蛇巢回聲，東側礁脊逐漸被海霧吞沒。這裡是純 blocker，碎礁只提供地形連續感，不是可通行路線。",
    "image": "eastern_coast_fill_37_2.png",
    "imagePrompt": "中段碎礁阻帶 eastern_coast_fill_37_2 in eastern_coast Eastern Coast, room function mid-coast pure blocker, broken reef belt between serpent wave seal and Mist Harbor western tidefront, west wave gutter echoes from serpent nest, east reef ridge disappears into sea fog, terrain shattered reef teeth, puddled saltwater, barnacles, pale foam and low gray mist，碎礁像一排斷齒橫過中段海岸，西側仍可用浪溝回聲暗示海蛇巢方向，東側礁脊逐漸被海霧吞沒。水窪、藤壺、泡沫和斷裂石脊要形成連續地形感，但每個落腳點都被水隔開，畫面不能讀成可通行路線，只是東海岸中段純 blocker藤壺與鹽霜要貼滿礁齒側面，海霧逐層吞掉東端輪廓，讓阻帶像自然斷裂的海岸線。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": 37,
    "worldY": 2
  },
  "eastern_coast_fill_38_2": {
    "id": "eastern_coast_fill_38_2",
    "name": "霧港西潮前帶",
    "zone": "eastern_coast",
    "description": "霧港西潮前帶承接中段碎礁阻帶，西面是低矮礁脊，東面濃霧裡已能聽見霧港銅鐘。潮水在腳下留下連續水窪，這裡是純 blocker 與邊界預告，不安排額外玩法。",
    "image": "eastern_coast_fill_38_2.png",
    "imagePrompt": "霧港西潮前帶 eastern_coast_fill_38_2 in eastern_coast Eastern Coast, room function Mist Harbor boundary preview blocker, wet tidefront after the broken reef belt, west low reef ridge, east dense fog with faint bronze bell silhouette and sound, terrain continuous tide puddles, slick sand, mist beads and flattened seaweed，潮水在腳下留下連續水窪，西面低矮礁脊逐漸收低，東面濃霧裡只露出霧港銅鐘的模糊輪廓與冷光。地面要有濕沙、扁海藻、霧珠和淺水反射，水窪彼此相連但沒有清楚步道，構圖作為霧港邊界預告與純 blocker，不安排額外玩法或採集物銅鐘輪廓只在霧中微微顯形，水窪反射被風吹碎，扁海藻貼住沙面形成滑倒警示。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": 38,
    "worldY": 2
  },
  "eastern_coast_fill_39_2": {
    "id": "eastern_coast_fill_39_2",
    "name": "霧港西門路牌潮徑",
    "zone": "eastern_coast",
    "description": "霧港西門路牌潮徑位在東海岸最東端，西面霧港西潮前帶仍有礁水聲，東面濃霧中露出霧港城門拱影與銅鐘輪廓。路牌亭標示這裡是跨區 border route 端點，專門銜接東海岸與霧港入口，不放怪物或採集玩法。",
    "image": "eastern_coast_fill_39_2.png",
    "imagePrompt": "霧港西門路牌潮徑 eastern_coast_fill_39_2 in eastern_coast Eastern Coast, room function east cross-zone border route, tide path at the far eastern coast edge, west reef-water sound from the harbor tidefront, east Mist Harbor fog gate arch and bronze bell silhouette in thick fog, terrain half-sunken sign shelter, wet stones, lantern glow, tide pools and gray mist，半沉路牌亭立在濕石潮徑旁，西側仍有礁水聲與潮前帶水窪，東面濃霧中露出霧港城門拱影與銅鐘輪廓。路牌亭不可有可讀文字，只用燈火和木架形狀標示跨區端點；地面要能讀出可沿東向霧中前進到霧港霧門，但沒有怪物、採集物或多餘分岔燈火要被海霧暈成柔光，亭腳半沉在潮水裡，東向霧門拱影清楚但不出現可讀文字。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly coastal environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "mist_harbor_fog_gate",
        "description": "沿銅鐘聲與路牌亭燈火穿過濃霧東行，抵達霧港霧門。"
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
    "name": "星坑東燼封道",
    "zone": "ember_march",
    "description": "星坑東燼封道位於餘燼邊境西北角，西面星落 crater 邊緣的暗光被灰風吞沒，南側焦炭道路還有車轍，東面火草平地冒出紅芽。焦黑道路被熔渣封住，是 border blocker，不開跨區捷徑，只作邊界提示。",
    "image": "ember_march_fill_22_21.png",
    "imagePrompt": "星坑東燼封道 ember_march_fill_22_21 in ember_march Ember March, room function northwest border blocker, charred basalt road sealed by slag beside a fallen star crater edge, west dim crater glow swallowed by ash wind, south wagon ruts on cinder road, east red firegrass sprouts on burnt flats, terrain black slag, ember cracks, ash drifts and heat haze，焦黑石道在畫面下端被熔渣厚牆截斷，西面星落坑邊只剩暗紅餘光被灰風吞沒，南側焦炭車轍斜斜消失，東面火草平地冒出紅芽作方向線索。熔渣表面要有冷卻裂紋、橘紅暗光、灰沙堆積與玄武岩碎片，整體明確表示這是餘燼邊境西北角 border blocker，不開星坑捷徑，只保留危險邊界提示, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 22,
    "worldY": 21
  },
  "ember_march_fill_22_24": {
    "id": "ember_march_fill_22_24",
    "name": "南燼臺北封灰道",
    "zone": "ember_march",
    "description": "南燼臺北封灰道貼著南燼傳送石臺北側，北面焦黑里程碑半埋在玄武岩道路旁，南面傳送符文忽明忽暗，西側玻灰原吹來細碎燼沙。這裡是 border blocker，標示傳送點外圍但不開放直穿。",
    "image": "ember_march_fill_22_24.png",
    "imagePrompt": "南燼臺北封灰道 ember_march_fill_22_24 in ember_march Ember March, room function portal outer border blocker, ash road north of the south ember portal platform, north charred milestone half buried beside basalt road, south portal runes flicker beyond heat shimmer, west glass ash field blows cinder sand, terrain gray ash seal, basalt shards, ember dust and rune glow，灰道貼著南側符文臺北緣被低矮灰封線阻斷，北面焦黑里程碑半埋在玄武岩路旁，南面傳送符紋隔著熱浪忽明忽暗，西側玻灰原吹來細碎燼沙。地面要有灰燼波紋、玄武岩破片、暗紅火縫與被風吹出的弧形砂線，灰封線上還覆著細小火星和焦黑碎旗纖維，構圖要像傳送點外圍安全邊界，不是能直接穿越的道路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南燼傳送石臺以黑色玄武岩砌在焦灰南坡，北側封灰道隔開熱風，東面補給棚掛著耐火布，南面避風亭擋住熔灰。這裡是 portal service route，提供餘燼邊境南部傳送與補給動線。",
    "image": "ember_march_south_portal.png",
    "imagePrompt": "南燼傳送石臺 ember_march_south_portal in ember_march Ember March, room function portal service route, black basalt portal platform on a scorched southern ash slope, north sealed ash road, east supply shed with fireproof cloth, south low shelter wall against molten ash wind, terrain carved basalt steps, ember runes, ash bowls, red backlight and safe travel landmark，黑色玄武岩石臺置於焦灰南坡中央，圓形傳送符文發出穩定暗紅光，北側封灰道隔開熱風，東面補給棚的耐火布在熱浪裡抖動，南面避風亭低牆擋住熔灰。石階要清楚分出北東南三個動線，近端保留可站立的乾灰平臺，符文不可有可讀文字，只用幾何火痕表現傳送服務地標與安全回程點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly volcanic service outpost illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "ember_march_fill_22_24",
        "description": "北側沿冷卻灰階回到南燼臺北封灰道"
      },
      {
        "direction": "east",
        "targetRoomId": "ember_march_south_supply",
        "description": "東側穿過耐火布棚口前往焦土補給棚"
      },
      {
        "direction": "south",
        "targetRoomId": "ember_march_south_shelter",
        "description": "南側走下玄武岩臺階抵達熔灰避風亭"
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
    "description": "焦土補給棚半埋在灰堆裡，西側可回到南燼傳送石臺，棚內耐火布擋住熱風，水桶、冷卻藥劑與備用繃帶沿牆排開。這裡是 service room，只提供南部據點補給提示，不放敵人。",
    "image": "ember_march_south_supply.png",
    "imagePrompt": "焦土補給棚 ember_march_south_supply in ember_march Ember March, room function service supply room, half-buried ash supply shed east of the south ember portal, west basalt portal glow through a fireproof cloth curtain, inside water buckets, cooling vials and spare bandages lined against soot walls, terrain ash piles, charred timber, fireproof canvas and warm lantern light，補給棚半埋在灰堆裡，耐火布簾把西側符文臺紅光切成柔亮邊線，棚內水桶、冷卻藥劑與備用繃帶沿焦黑牆面排開。地面要有踩實灰土、木箱、陶瓶水痕與布料燒邊，外側熱風只吹動棚角不造成戰鬥感，整體呈現南部據點的補給提示與短暫安全感，不出現敵人或商店 UI, slightly elevated adventurer eye view, clear foreground service space, readable midground landmark, dark fantasy painterly volcanic service outpost illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "ember_march_south_portal",
        "description": "西側掀開耐火布簾，回到南燼傳送石臺"
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
    "description": "熔灰避風亭以低矮石牆圍住南側熱風，北面玄武岩臺階通回傳送石臺，亭外能看見火山前緣紅光。亭內有水缸、灰斗與臨時坐凳，是 service room，讓玩家辨認南部安全歇腳點。",
    "image": "ember_march_south_shelter.png",
    "imagePrompt": "熔灰避風亭 ember_march_south_shelter in ember_march Ember March, room function safe shelter service room, low stone wind shelter south of the portal platform, north basalt steps returning to the portal, outside volcanic front red glow, inside water jar, ash scoop and temporary bench, terrain low basalt wall, ash drift, ember wind and dim protected lantern，低矮玄武岩石牆圍住避風亭，北面臺階回到南燼符文臺，亭外火山前緣泛出深紅亮光，亭內水缸、灰斗與臨時坐凳排在受保護的陰影裡。畫面要讓熱風和熔灰在牆外翻卷，牆內保持較穩定的暖燈與乾灰地面，材質包括焦石、陶缸、水痕、灰斗金屬邊和被火星打黑的長凳，這是安全歇腳點而非戰鬥房, slightly elevated adventurer eye view, clear foreground shelter space, readable midground landmark, dark fantasy painterly volcanic service outpost illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "ember_march_south_portal",
        "description": "北側沿玄武岩臺階回到南燼傳送石臺"
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
    "name": "骨窯北封火痕",
    "zone": "ember_march",
    "description": "骨窯北封火痕位於骨窯隘道北側，南面窯口傳來乾骨裂響，西側焦灼綠洲的黑水氣味被熱風推來。玄武岩道路上的火痕斷成數截，熔灰覆住踏點，是 border blocker，不提供穿越。",
    "image": "ember_march_fill_26_21.png",
    "imagePrompt": "骨窯北封火痕 ember_march_fill_26_21 in ember_march Ember March, room function northern bonekiln border blocker, basalt road north of bonekiln pass where fire scars break into segments, south kiln mouth with dry bone cracking sound, west scorched oasis black-water smell carried by hot wind, terrain broken flame marks, molten ash, bone dust, black basalt and wavering heat，玄武岩道路上的火痕斷成數截，熔灰覆住所有踏點，南面骨窯口只露出暗紅裂光和骨粉煙，西側焦灼綠洲以黑水氣味與低霧提示方向。地面要有白灰骨粉、黑石裂縫、斷裂火線與熱浪扭曲，不能畫成通往窯口的路；這是骨窯北側 border blocker，危險壓迫但不提供穿越, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": 26,
    "worldY": 21
  },
  "ember_march_fill_28_22": {
    "id": "ember_march_fill_28_22",
    "name": "龍印東封灰脊",
    "zone": "ember_march",
    "description": "龍印東封灰脊位於龍印山脊東面，西側巨大爪痕仍壓在焦土裡，南面邊境要塞殼露出黑石牆角。灰脊盡頭被熱風削成斷坡，這裡是 border blocker，只標示火山前緣方向。",
    "image": "ember_march_fill_28_22.png",
    "imagePrompt": "龍印東封灰脊 ember_march_fill_28_22 in ember_march Ember March, room function eastern ash ridge blocker, ash ridge east of dragonprint ridge, west huge claw marks pressed into scorched ground, south border keep shell with black stone wall corner, ridge end cut into a broken slope by hot wind, terrain gray cinder spine, dragon claw grooves, basalt corner and red volcanic haze，灰脊從畫面下方抬升後突然被熱風削成斷坡，西側巨大龍爪痕壓在焦土裡，南面邊境要塞殼只露出黑石牆角，遠處火山前緣被紅霧染亮。斷坡邊要有鬆動灰砂、裸露玄武岩、焦黑骨刺狀石片與細火星，構圖只標示火山前緣方向，不讓玩家讀成可爬下去的路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 1,
    "worldX": 28,
    "worldY": 22
  },
  "ember_march_fill_30_21": {
    "id": "ember_march_fill_30_21",
    "name": "火山灰田西界",
    "zone": "ember_march",
    "description": "火山灰田西界位於餘燼邊境東北角，東面火山灰田的黑灰被熱風捲起，西側燼地石道已被熔渣封住。這裡是跨區 border route，只允許向東進入火山地帶，內側灰坡不可回切。",
    "image": "ember_march_fill_30_21.png",
    "imagePrompt": "火山灰田西界 ember_march_fill_30_21 in ember_march Ember March, room function northeast cross-zone border route, edge where Ember March meets volcano ash field, east black volcanic ash lifted by hot wind, west old cinder stone road sealed by slag, terrain ash slope, black sand, molten slag lock, orange fissures and violent heat haze，東側黑色火山灰田被熱風捲成低旋，西側舊燼地石道被熔渣鎖死，灰坡只允許向東跨入火山地帶。畫面需要清楚分出可前進的東向黑砂口與不可回切的西側熔渣封線，灰田裡有橘紅裂縫、飛灰、玄武岩碎片和熱浪扭曲，東面黑砂被風吹成斜紋，路口邊緣插著燒裂石柱與焦灰堆，構圖是跨區 border route 而不是普通灰原房, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_ash_field",
        "description": "東側穿過熱灰風與黑色火山砂，銜接火山地帶灰燼原"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側熔渣封住舊石道，不能回切餘燼內圈"
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
    "name": "硫泉西界燼路",
    "zone": "ember_march",
    "description": "硫泉西界燼路貼著心火裂口東側，西面餘燼仍有紅光，南側灰燼邊道沉入熱泥，東面火山硫磺泉噴出刺鼻白霧。路邊硫磺晶簇和灰燼礦露在熱泥旁，可沿石縫採集；這裡只導向火山溫泉前緣，不開旁支道路。",
    "image": "ember_march_fill_30_23.png",
    "imagePrompt": "硫泉西界燼路 ember_march_fill_30_23 in ember_march Ember March, room function sulfur spring border route with resource edge, cinder road east of heartfire breach, west red ember glow blocked by heat fissure, south ash path sinking into hot mud, east volcano sulfur springs venting white steam, terrain sulfur crystal clusters, ash ore seams, hot mud, yellow-white vapor and red stone cracks，燼路貼著心火裂口東側，西面紅光被熱浪與裂縫擋住，南側灰燼邊道沉入熱泥，東方硫磺泉噴出刺鼻白霧。路邊硫磺晶簇與灰燼礦露在熱泥旁，石縫採集點要清楚但不能變成旁支道路；白霧、黃晶、紅裂石與熱泥反光共同指向東側火山硫泉前緣，構圖呈現單一路線端點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_sulfur_springs",
        "description": "東側穿過硫磺白霧與發熱礫石，抵達火山地帶硫磺泉"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側心火裂縫噴出熱浪，不能從邊界路回切"
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
    "name": "熔橋西界灰道",
    "zone": "ember_march",
    "description": "熔橋西界灰道位於餘燼邊境東南口，北側硫泉西界仍有白霧，東面火山熔岩橋發出紅光。灰道路基被熱浪切開，這裡是跨區 border route，只讓玩家向東接上熔岩橋，不開南側灰坡。",
    "image": "ember_march_fill_30_24.png",
    "imagePrompt": "熔橋西界灰道 ember_march_fill_30_24 in ember_march Ember March, room function southeast cross-zone border route, gray ash road at the southeast exit, north lingering sulfur white fog, east volcano lava bridge glowing red, west old road collapsed and locked by heat, south ash slope cut off, terrain cracked ash roadbed, basalt ribs, lava glow, hot wind and falling cinders，灰道路基被熱浪切開，只留下向東接上火山熔岩橋的灼熱岩脊，北側硫泉西界白霧仍在漂，西側舊路塌陷封死，南側灰坡沒有落腳點。畫面要讓東面熔岩橋紅光成為唯一明確出口，近端灰路有裂縫、玄武岩肋、落燼和熱風扭曲，構圖是東南跨區 border route，不開南側灰坡或回切路線, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly volcanic border illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "volcano_lava_bridge",
        "description": "東側踏過焦黑灰道與灼熱岩脊，接上火山地帶熔岩橋"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側灰道路基塌陷，不能回切餘燼邊境內部"
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
    "name": "琥珀接枝平台",
    "zone": "emerald_canopy",
    "description": "琥珀接枝平台架在翡翠樹冠東緣，西側是高枝走道的綠蔭，東面樹脂光線銜接琥珀森林樹門。這裡是跨區過渡路線，枝幹上有可採集的嫩葉與樹脂痕，提醒玩家已離開單純樹冠區。",
    "image": "emerald_canopy_fill_n18_7.png",
    "imagePrompt": "琥珀接枝平台 emerald_canopy_fill_n18_7 in emerald_canopy Emerald Canopy, room function east cross-zone route, high grafted branch platform on the eastern canopy edge, west green high-branch walkway, east amber resin light leading to Amber Forest resin gate, terrain living branch planks, fresh emerald leaves, resin seams, dew and high mist，接枝平台架在高空粗枝上，西側是翡翠樹冠綠蔭高枝道，東側樹脂金光沿枝橋流向琥珀森林樹門。畫面要清楚保留東向可走的樹脂枝橋，枝面有嫩葉採集痕、透明樹脂線、露水與遠處葉海雲霧，讓玩家看出已離開單純樹冠區並進入琥珀交界，不要出現人物、文字或 UI平臺邊緣要有金色樹脂滴落成半透明垂線，綠葉背光與琥珀亮點分成兩個色溫，遠方樹門只用輪廓和光霧表示。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "amber_forest_resin_gate",
        "description": "東側樹脂枝橋穿過金色黏光，接向琥珀森林凝脂樹門"
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
    "name": "北冠斷枝欄",
    "zone": "emerald_canopy",
    "description": "北冠斷枝欄位於高空枝道邊緣，東側能看見琥珀接枝平台，南面厚葉遮住下層樹影。幾根斷枝被藤索綁成封閉 blocker，枝縫間有露珠草葉可採，但不能離開正式樹冠路線。",
    "image": "emerald_canopy_fill_n19_7.png",
    "imagePrompt": "北冠斷枝欄 emerald_canopy_fill_n19_7 in emerald_canopy Emerald Canopy, room function northern branch blocker, high-air branch road edge with broken boughs tied by vine ropes, east amber graft platform visible, south thick leaves hide lower tree shadows, terrain snapped branches, wet vine lashings, dew herbs and pale green canopy light，幾根斷枝被濕藤索綁成天然欄杆，東側能看見琥珀接枝平台的金綠交界光，南面厚葉遮住下層樹影。枝縫間只留露珠草葉與花粉採集點，外側是高空空隙與霧白葉海，構圖要明確是封閉 blocker，不能像能翻過去的樹橋或跳台斷枝端面需要露出新鮮木芯與苔蘚水痕，藤索交叉處有露珠串連，遠處金色接枝光被葉片切碎。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": -19,
    "worldY": 7
  },
  "emerald_canopy_fill_n20_7": {
    "id": "emerald_canopy_fill_n20_7",
    "name": "霧葉封索道",
    "zone": "emerald_canopy",
    "description": "霧葉封索道被濕藤與寬葉覆住，東側連著北冠斷枝欄，西面樹冠逐漸抬高。藤索上掛著採集標記，表示這裡只作為資源邊界與封閉 blocker，玩家需要折回主枝道。",
    "image": "emerald_canopy_fill_n20_7.png",
    "imagePrompt": "霧葉封索道 emerald_canopy_fill_n20_7 in emerald_canopy Emerald Canopy, room function mist leaf rope blocker, sealed rope path buried under wet vines and broad leaves, east broken-branch rail, west canopy rises into higher green layers, terrain dripping vine cords, wide leaves, pollen smears, damp bark and fog，濕藤與寬葉把索道整段蓋住，東側北冠斷枝欄只留輪廓，西面樹冠逐層抬高卻沒有可攀路線。藤索上有無字採集結、花粉痕和露水，但繩面被濕葉壓塌，畫面需讓玩家知道這是資源邊界與封閉 blocker，要折回主枝道而不是嘗試穿越霧葉寬葉表面要有雨珠滑痕和深淺不同的綠色反光，塌陷藤索下方只見濃霧，沒有任何木板或腳印。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": -20,
    "worldY": 7
  },
  "emerald_canopy_fill_n21_10": {
    "id": "emerald_canopy_fill_n21_10",
    "name": "南露藤欄",
    "zone": "emerald_canopy",
    "description": "南露藤欄懸在樹冠南側，北面有雨水順著粗枝滴落，西側可望見更高的綠心枝影。欄外只剩潮濕空隙與垂藤，這格標示不可通行邊界，同時保留少量露葉採集線索。",
    "image": "emerald_canopy_fill_n21_10.png",
    "imagePrompt": "南露藤欄 emerald_canopy_fill_n21_10 in emerald_canopy Emerald Canopy, room function southern dew vine blocker, suspended south canopy edge, north rainwater dripping along a thick branch, west higher greenheart bough silhouette, outside only wet air gaps and hanging vines, terrain dew leaves, slick bark, vine rail, high fog and vertical drop，南側藤欄懸在高空邊緣，北面雨水順著粗枝滴落，西側可望見更高的綠心枝影。欄外只有潮濕空隙、垂藤和霧中的下層葉海，少量露葉採集線索停在欄內，不能畫成可攀爬垂藤；濕亮樹皮、雨滴、葉脈和高度落差要清楚呈現不可通行邊界藤欄節點要濕亮粗糙，垂藤末端消失在霧裡，北側雨滴沿粗枝形成連續亮線，空氣帶有冷綠潮氣。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": -21,
    "worldY": 10
  },
  "emerald_canopy_fill_n21_7": {
    "id": "emerald_canopy_fill_n21_7",
    "name": "北風枝籬",
    "zone": "emerald_canopy",
    "description": "北風枝籬沿著樹冠北緣延伸，東側是霧葉封索道，南面可聽見鳥民棲枝的回聲。交錯樹枝形成封閉 blocker，枝葉間仍有藥草與花粉痕，但沒有可走的下層路。",
    "image": "emerald_canopy_fill_n21_7.png",
    "imagePrompt": "北風枝籬 emerald_canopy_fill_n21_7 in emerald_canopy Emerald Canopy, room function northern branch fence blocker, interlaced bough fence along canopy north edge, east mist leaf rope seal, south birdfolk roost echoes through leaves, terrain crossed branches, herb tufts, pollen dust, wind-torn leaves and high blue-green light，交錯樹枝在北緣編成枝籬，東側霧葉封索道被濕霧遮住，南面只以鳥民棲枝回聲和遠處枝影提示主路。枝葉間有藥草、花粉和風刮葉片，但下層完全沒有踏點，枝籬外側是空落霧光；構圖要封住北側邊界，不讓畫面讀成可鑽過的樹洞枝籬要像交錯肋骨般緊密，風從葉縫吹出白霧，花粉在藍綠光裡成細點，南側主路只留模糊聲源。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 0,
    "worldX": -21,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_7": {
    "id": "emerald_canopy_fill_n22_7",
    "name": "翡翠苔枝口",
    "zone": "emerald_canopy",
    "description": "翡翠苔枝口鋪滿厚苔與亮葉，東側可回北風枝籬，西面枝幹被鳥巢與藤蔓封住。這裡是資源採集邊界，不放正式出口，玩家只能沿主樹冠路線尋找安全通行點。",
    "image": "emerald_canopy_fill_n22_7.png",
    "imagePrompt": "翡翠苔枝口 emerald_canopy_fill_n22_7 in emerald_canopy Emerald Canopy, room function moss branch resource blocker, thick emerald moss and bright leaves covering a branch mouth, east return toward north wind branch fence, west trunks blocked by bird nests and vines, terrain soft moss, leaf shine, nest twigs, pollen dust and damp bark，枝口鋪滿厚翡翠苔與亮葉，東側可回北風枝籬，西面枝幹被鳥巢、護藤和細枝完全封住。採集焦點是苔面、嫩葉和花粉痕，不能出現正式出口或下層踏點；鳥巢只作地形封口，畫面需要呈現柔軟濕苔、亮葉反光、樹皮紋理與高空綠霧，提醒玩家回主路尋找安全通行點鳥巢邊緣要有細羽、碎枝和濕藤陰影，苔面厚到吞住樹皮裂縫，採集葉痕停在安全枝面內側。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -22,
    "worldY": 7
  },
  "emerald_canopy_fill_n22_8": {
    "id": "emerald_canopy_fill_n22_8",
    "name": "中層葉棚封口",
    "zone": "emerald_canopy",
    "description": "中層葉棚封口位於北冠下方，北側枝影透出翠綠光線，東面有細藤垂到不可攀的深谷。這格是高低差 blocker，葉棚上可看見採集痕跡，但不提供通往下層的路。",
    "image": "emerald_canopy_fill_n22_8.png",
    "imagePrompt": "中層葉棚封口 emerald_canopy_fill_n22_8 in emerald_canopy Emerald Canopy, room function height-gap blocker, mid-level leaf canopy seal below the northern crown, north branch shadows glow emerald, east thin vines hang into an unclimbable deep gap, terrain layered leaf shelf, slick stems, harvest marks, misty drop and filtered green light，中層葉棚像一片濕亮平臺停在北冠下方，北側枝影透出翠綠光線，東面細藤垂入不可攀的深谷。葉棚表面有採集割痕、濕葉脈和滑莖，但邊緣立刻斷成霧白落差，沒有通往下層的繩梯或枝橋；構圖要強調高低差 blocker 和危險空隙葉棚邊線要薄而濕亮，霧白深谷吞掉垂藤下端，翠綠光從北側枝影灑下，強調高度差和禁止下行。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -22,
    "worldY": 8
  },
  "emerald_canopy_fill_n23_7": {
    "id": "emerald_canopy_fill_n23_7",
    "name": "西冠鳥巢欄",
    "zone": "emerald_canopy",
    "description": "西冠鳥巢欄靠近樹冠西緣，東側接著翡翠苔枝口，南面傳來高枝鳥鳴。鳥巢與護藤把外側完全封住，這裡只作為採集與邊界提示，不能穿出翡翠樹冠。",
    "image": "emerald_canopy_fill_n23_7.png",
    "imagePrompt": "西冠鳥巢欄 emerald_canopy_fill_n23_7 in emerald_canopy Emerald Canopy, room function western nest border blocker, bird nests and guarding vines near canopy west edge, east emerald moss branch mouth, south high-branch birdsong, terrain woven nests, protective vines, feather down, pollen leaves and high open air，西冠邊緣被鳥巢與護藤完全封住，東側翡翠苔枝口仍可回望，南面高枝鳥鳴只以葉影和羽毛提示。巢材、羽絨、花粉葉和濕藤形成採集與邊界提示，外側是開闊高空和深綠雲霧，不能畫出可穿出翡翠樹冠的洞口或木橋；整體要像自然保護欄護藤要包住鳥巢外圈，羽毛和花粉堆在枝面低處，西側開闊空氣用淡霧與遠葉剪影表現。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -23,
    "worldY": 7
  },
  "emerald_canopy_fill_n25_11": {
    "id": "emerald_canopy_fill_n25_11",
    "name": "西南空枝臺",
    "zone": "emerald_canopy",
    "description": "西南空枝臺伸向樹冠邊界，北側高枝逐漸稀疏，東面可望見雨水落入下層葉海。外側沒有棧板，藤索也被收起，這格是封閉 border blocker，只保留採集葉痕與高度警示，不安排路線出口。",
    "image": "emerald_canopy_fill_n25_11.png",
    "imagePrompt": "西南空枝臺 emerald_canopy_fill_n25_11 in emerald_canopy Emerald Canopy, room function southwest border blocker, empty branch platform extending toward canopy boundary, north sparse high branches, east rain falling into lower leaf sea, outside no planks and vine ropes withdrawn, terrain bare wet branch, leaf harvest marks, warning height gap and drifting mist，西南空枝臺伸向樹冠邊界，北側高枝逐漸稀疏，東面雨水落入下層葉海。外側沒有棧板，藤索被收起只剩幾個空綁點，枝面濕滑且帶有採集葉痕與高度警示。畫面要留出明顯的高空落差、霧氣和遠層葉浪，不安排路線出口，也不能像可跳到下一段平臺空綁點要清楚顯示藤索已被拆走，濕枝末端懸在霧中，雨線落向下層葉海形成明顯深度。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -25,
    "worldY": 11
  },
  "emerald_canopy_fill_n26_10": {
    "id": "emerald_canopy_fill_n26_10",
    "name": "西界風孔枝",
    "zone": "emerald_canopy",
    "description": "西界風孔枝貼著翡翠樹冠最外圈，南側風洞把葉片吹得翻白，東面能看見安全主枝道。這裡是西側封閉邊界，枝面濕滑且只留下採集標記，不應作為通行路線，也沒有下層踏點。",
    "image": "emerald_canopy_fill_n26_10.png",
    "imagePrompt": "西界風孔枝 emerald_canopy_fill_n26_10 in emerald_canopy Emerald Canopy, room function far-west wind-hole blocker, outer canopy branch beside a roaring wind gap, south wind tunnel flips leaves pale, east safe main branch route visible, terrain slick branch skin, wind-torn leaves, gathering knots, mist spiral and no lower foothold，西界風孔枝貼著翡翠樹冠最外圈，南側風洞把葉片吹得翻白，東面能看見安全主枝道。枝面濕滑，只留下無字採集結和被風拉長的葉痕，外側風孔是旋轉霧洞與空落深谷，完全沒有下層踏點。構圖要讓風壓、翻白葉片和缺失踏點清楚說明這不是通行路線風孔中的霧旋要有方向感，翻白葉背像一圈警示帶，東側安全枝路只在遠端露出短短綠光。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -26,
    "worldY": 10
  },
  "emerald_canopy_fill_n26_8": {
    "id": "emerald_canopy_fill_n26_8",
    "name": "西北葉幕欄",
    "zone": "emerald_canopy",
    "description": "西北葉幕欄被大片亮葉遮成綠色牆面，南側可望見西界風孔枝，東面高處傳來鳥民哨音。葉幕後方是空落枝縫，這格作為封閉 border blocker，提醒玩家回到內側路線，避免誤入斷枝。",
    "image": "emerald_canopy_fill_n26_8.png",
    "imagePrompt": "西北葉幕欄 emerald_canopy_fill_n26_8 in emerald_canopy Emerald Canopy, room function northwest leaf curtain blocker, broad bright leaves forming a green wall, south far-west wind-hole branch visible, east birdfolk whistle from higher perch, behind curtain only empty branch gaps, terrain glossy leaves, woven twig rail, dew beads, feather marks and high mist，大片亮葉遮成綠色牆面，南側可望見西界風孔枝的翻白葉影，東面高處傳來鳥民哨音。葉幕後方只有空落枝縫和霧光，枝條欄上有露珠、羽毛痕與藤結，提醒玩家回到內側路線。畫面要把葉幕畫成封閉 border blocker，而不是可穿過的密林入口或可攀牆面葉幕要由大葉層層疊成牆，露珠沿葉脈排列，後方枝縫只露出空白霧洞和鳥羽痕跡。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly treetop environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -26,
    "worldY": 8
  },
  "frostbite_pass_fill_n19_n12": {
    "id": "frostbite_pass_fill_n19_n12",
    "name": "雨棚西南冰封坡",
    "zone": "frostbite_pass",
    "description": "雨棚西南冰封坡位在風暴高原雨棚西南側，北面東界凍石小路滴著冰水，西側冰封橫道被硬雪堵住。坡面結成薄冰，是純 blocker，避免高原邊界向南外擴。",
    "image": "frostbite_pass_fill_n19_n12.png",
    "imagePrompt": "雨棚西南冰封坡 frostbite_pass_fill_n19_n12 in frostbite_pass Frostbite Pass, room function southeast ice slope blocker, frozen slope southwest of Storm Highlands rain shelf, north frozen stone path dripping icewater, west crossroad blocked by hard snow, terrain thin ice skin, packed snow wall, wet stone, blue shadow and freezing rain，薄冰坡面從畫面下緣斜切上去，北側凍石小路滴著冰水，西側冰封橫道被硬雪堵住，坡面沒有穩固踏點。冰皮要半透明且露出濕石暗紋，硬雪牆有風削層次，冷雨在石面形成細亮線；構圖要清楚表示這是純 blocker，避免高原邊界向南外擴，不可畫成可滑下的路。冷藍天光貼著坡面反射，濕石邊緣有霜粉堆積，遠處雨棚只留模糊岩影作地標，整體氣氛潮冷壓迫。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 3,
    "worldX": -19,
    "worldY": -12
  },
  "frostbite_pass_fill_n19_n13": {
    "id": "frostbite_pass_fill_n19_n13",
    "name": "雨棚西界凍石路牌",
    "zone": "frostbite_pass",
    "description": "雨棚西界凍石路牌位在霜咬隘口東側，北面崖門西界繼續抬升，南側薄冰坡被冷雨封住，東邊風暴高原雨棚有濕暖氣流。路牌標示這裡是跨區邊界路線端點，專門銜接隘口與高原雨棚。",
    "image": "frostbite_pass_fill_n19_n13.png",
    "imagePrompt": "雨棚西界凍石路牌 frostbite_pass_fill_n19_n13 in frostbite_pass Frostbite Pass, room function east cross-zone route marker, frozen stone signpost at the pass edge, north cliff gate boundary rising, south thin ice slope sealed by cold rain, east warm wet air from Storm Highlands rain shelf, terrain ice-streaked stone, blank marker post, wet snow, gray cliff and blue-white drizzle，凍石路牌立在霜咬隘口東側，牌面不可有可讀文字，只用冰痕與木石形狀作邊界地標。北面崖門西界繼續抬升，南側薄冰坡被冷雨封住，東邊風暴高原雨棚透出較濕暖的灰綠氣流；地面要保留東向可走的濕石路線，冰水、雪泥和風削碎石分層清楚，呈現跨區端點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "storm_highlands_rain_shelf",
        "description": "沿結冰雨痕與濕石路牌東行，穿過邊界進入風暴高原雨棚。"
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
    "name": "高原崖門西凍路牌",
    "zone": "frostbite_pass",
    "description": "高原崖門西凍路牌位在霜咬隘口東北界，北面惡魔邊境冷影壓在山脊上，南側雨棚西界凍石路繼續下滑，東邊風暴高原崖門透出濕暖風。這裡是跨區邊界路線端點，只銜接隘口與高原崖門。",
    "image": "frostbite_pass_fill_n19_n14.png",
    "imagePrompt": "高原崖門西凍路牌 frostbite_pass_fill_n19_n14 in frostbite_pass Frostbite Pass, room function northeast cross-zone route marker, frozen marker west of Storm Highlands cliff gate, north demon frontier cold shadow over ridge, south rain shelf boundary road descending, east moist warm wind from cliff gate, terrain shattered ice gravel, blank signpost, wind-cut stone and sleet haze，凍路牌站在霜咬隘口東北界，牌面無字，只以冰霜覆蓋的木石結構標示端點。北面惡魔邊境冷影壓在山脊上，南側雨棚西界凍石路下滑，東邊崖門吹來濕暖風；畫面要保留向東進入高原崖門的碎冰砂石路，西北冷影與東側濕霧形成對比，不能畫成多方向叉路, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "storm_highlands_cliff_gate",
        "description": "踩過碎冰砂石與風削路牌向東，進入風暴高原崖門。"
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
    "name": "東段冰封橫道",
    "zone": "frostbite_pass",
    "description": "東段冰封橫道夾在雨棚西南冰封坡與極封門南側之間，東面薄冰坡反光刺眼，西面霜咬窄道被硬雪壓低。冰面裂縫密集，是純 blocker，不作正式通行路線。",
    "image": "frostbite_pass_fill_n20_n12.png",
    "imagePrompt": "東段冰封橫道 frostbite_pass_fill_n20_n12 in frostbite_pass Frostbite Pass, room function cracked ice crossroad blocker, frozen transverse path between rain-shelf ice slope and polar seal gate south side, east glare from thin ice slope, west narrow pass pressed low by hard snow, terrain dense ice cracks, blue-black fissures, wind-packed snow and cold reflected light，冰封橫道被密集裂縫切碎，東面薄冰坡反光刺眼，西面霜咬窄道被硬雪壓低。冰面要有藍黑裂縫、白霜邊、被風壓實的雪層與刺眼冷光，每個看似踏點的冰片都被裂痕隔開；構圖要明確是純 blocker，不是正式通行路線或可越過的冰橋, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 3,
    "worldX": -20,
    "worldY": -12
  },
  "frostbite_pass_fill_n21_n12": {
    "id": "frostbite_pass_fill_n21_n12",
    "name": "極封門南霜脊",
    "zone": "frostbite_pass",
    "description": "極封門南霜脊位在極封門南面，北側門柱覆滿藍霜，西邊北行山脊露出風削石階，東側冰封橫道反著白光。這裡是 blocker，用霜脊與倒冰柱封住極封門背面的外側空地。",
    "image": "frostbite_pass_fill_n21_n12.png",
    "imagePrompt": "極封門南霜脊 frostbite_pass_fill_n21_n12 in frostbite_pass Frostbite Pass, room function polar gate back blocker, frost ridge south of the polar seal gate, north blue-frosted gate pillars, west wind-cut stone steps on northbound ridge, east white glare from frozen crossroad, terrain hoarfrost spine, fallen ice pillars, blue frost crust and carved cold stone，霜脊橫在極封門南面，北側門柱覆滿藍霜，西邊北行山脊露出風削石階，東側冰封橫道反著白光。倒冰柱和霜脊要像天然拒馬封住外側空地，地面有藍霜殼、冰柱碎片、冷石刻痕和雪塵；畫面不能暗示可繞到極封門背面，只是明確 blocker。門柱背後散出幽藍冷光，冰柱斷面要粗糙透明，霜霧貼地流動，極封門輪廓成為可辨識地標。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": -21,
    "worldY": -12
  },
  "frostbite_pass_fill_n22_n14": {
    "id": "frostbite_pass_fill_n22_n14",
    "name": "龍息台東冰裂牆",
    "zone": "frostbite_pass",
    "description": "龍息台東冰裂牆位在龍息岩棚北側偏東，南面岩棚有焦黑霜痕，西邊雨雪哨的旗索在風裡繃緊。冰牆裂縫灌出刺骨冷風，是純 blocker，封住岩棚外側不穩定斜面。",
    "image": "frostbite_pass_fill_n22_n14.png",
    "imagePrompt": "龍息台東冰裂牆 frostbite_pass_fill_n22_n14 in frostbite_pass Frostbite Pass, room function dragon shelf ice-wall blocker, cracked ice wall east of dragon breath shelf, south scorched frost marks on rock shelf, west sleet watch flag ropes pulled tight by wind, terrain blue ice wall, blackened frost stains, knife-cold fissure wind and unstable snow slope，冰裂牆立在龍息岩棚北側偏東，南面岩棚保留焦黑霜痕，西邊雨雪哨旗索在風裡繃緊。牆縫灌出刺骨冷風，藍冰裂紋要深且發暗，牆腳雪坡破碎不穩，不能留下可鑽的縫；畫面用黑霜痕、旗索剪影、冰粉和冷霧封住岩棚外側斜面，呈現純 blocker。牆面有暗藍內光與黑焦霜形成對比，碎冰材質銳利厚重，風聲感強，旗索作為西側地標。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 1,
    "worldX": -22,
    "worldY": -14
  },
  "frostbite_pass_fill_n27_n14": {
    "id": "frostbite_pass_fill_n27_n14",
    "name": "空山風門東霜牆",
    "zone": "frostbite_pass",
    "description": "空山風門東霜牆位在霜咬隘口西北界，西面空山入口風門發出低鳴，北側雪門路牌被冰霜覆住，東邊凍折返道消失在白霧裡。這裡是 border blocker，霜牆標示空山與隘口分界，不開跨區路。",
    "image": "frostbite_pass_fill_n27_n14.png",
    "imagePrompt": "空山風門東霜牆 frostbite_pass_fill_n27_n14 in frostbite_pass Frostbite Pass, room function northwest border blocker, frost wall east of hollow mountain wind gate, west low humming wind gate entrance, north snow gate marker buried in frost, east frozen switchback fading into white fog, terrain rime wall, wind-carved ice, buried blank marker, snow dust and gray mountain shadow，霜牆立在霜咬隘口西北界，西面空山入口風門只傳出低鳴，北側雪門路牌被冰霜覆住且不可有可讀文字，東邊凍折返道消失在白霧裡。霜牆要有風削冰紋、灰山陰影、雪塵和硬霜層，清楚標示空山與隘口分界，不開跨區路也沒有可攀裂縫, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -27,
    "worldY": -14
  },
  "frozen_wastes_fill_n25_n23": {
    "id": "frozen_wastes_fill_n25_n23",
    "name": "北境王座南雪封",
    "zone": "frozen_wastes",
    "description": "北境王座南雪封位在冰封雪原最北側，南面廢棄雪橇的車轍被風雪掩住，西側冰封王座的藍光隔著白霧閃動。凍土小路在冰面裂聲中斷開，雪面插著碎冰旗與裂縫警樁，是 border blocker，不讓玩家硬穿城堡外冰原。",
    "image": "frozen_wastes_fill_n25_n23.png",
    "imagePrompt": "北境王座南雪封 frozen_wastes_fill_n25_n23 in frozen_wastes Frozen Wastes, room function border road, snow seal south of the Frozen Throne, south abandoned sledge tracks buried by blizzard, west blue throne glow flickering through white fog, terrain broken tundra path, cracked ice, shattered ice flags, warning stakes, wind-carved snow and pale blue frost light，北境王座南雪封位在冰封雪原最北側，南面廢棄雪橇車轍被風雪掩住，西側冰封王座藍光隔著白霧閃動。凍土小路在冰面裂聲中斷開，雪面插著碎冰旗與裂縫警樁，前景用深裂冰縫、硬雪壘與風削雪脊封住道路；構圖必須讀成 border blocker，不讓玩家硬穿城堡外冰原，無人物、無 UI、無文字。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -25,
    "worldY": -23
  },
  "frozen_wastes_fill_n26_n18": {
    "id": "frozen_wastes_fill_n26_n18",
    "name": "龍息裂谷西冰封",
    "zone": "frozen_wastes",
    "description": "龍息裂谷西冰封位在龍息裂谷西側，東面藍色霜光從裂縫裡吐出，北邊冰晶尖塔折射出淡光。凍結通道被橫向冰牆切斷，寒風會凍裂鎧甲，是阻止玩家繞進裂谷背面的 blocker。",
    "image": "frozen_wastes_fill_n26_n18.png",
    "imagePrompt": "龍息裂谷西冰封 frozen_wastes_fill_n26_n18 in frozen_wastes Frozen Wastes, room function danger pocket, frozen cutoff west of Dragon Breath Rift, east blue frost glow venting from deep fissures, north crystal spire refracting pale light, terrain transverse ice wall, frozen passage, jagged frost plates, armor-cracking wind and dense ice fog，龍息裂谷西冰封位在龍息裂谷西側，東面裂縫吐出藍色霜光，北邊冰晶尖塔折射淡光。凍結通道被橫向冰牆切斷，冰牆要厚重透明並帶黑藍裂紋，風雪沿牆根捲動；前景不可留下繞行縫隙，必須清楚阻止玩家繞進裂谷背面，是封閉 blocker，無人物、無 UI、無文字。冰晶尖塔在北側形成清楚地標，透明冰牆折射冷藍光，碎裂冰板與霜霧強化封閉氣氛。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": -26,
    "worldY": -18
  },
  "frozen_wastes_fill_n24_n17": {
    "id": "frozen_wastes_fill_n24_n17",
    "name": "龍息裂谷東雪脊封",
    "zone": "frozen_wastes",
    "description": "龍息裂谷東雪脊封被冰風削成狹長雪脊，西側龍息裂谷外緣泛著藍色霜光，北面更深白霧遮住冰封城堡方向，南側裂谷雪徑貼著斷冰下降。這裡是 border blocker，標示東側雪原不可通行。",
    "image": "frozen_wastes_fill_n24_n17.png",
    "imagePrompt": "龍息裂谷東雪脊封 frozen_wastes_fill_n24_n17 in frozen_wastes Frozen Wastes, room function border road, narrow wind-carved snow ridge east of Dragon Breath Rift, west rift edge glowing blue frost, north deep white fog toward the frozen castle, south rift snow path descends along broken ice, terrain knife-edge snow spine, broken ice slabs, powder drift and abyss shadow，龍息裂谷東雪脊封被冰風削成狹長雪脊，西側龍息裂谷外緣泛著藍色霜光，北面深白霧遮住冰封城堡方向，南側裂谷雪徑貼著斷冰下降。雪脊要像刀背一樣狹窄，兩側有斷冰與深暗裂谷，前景用風削雪脊和碎冰阻斷東側雪原；構圖標示 border blocker，不可畫成可通行山道。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "frozen_wastes_fill_n24_n18.png",
    "imagePrompt": "裂谷雪徑 frozen_wastes_fill_n24_n18 in frozen_wastes Frozen Wastes, room function connector, frozen mist-covered path beside Dragon Breath Rift, west view back to the rift blue glow, north route climbs toward a higher snow ridge, terrain compacted snow trail, broken ice edge, drifting frost fog, pale sky light and dark crevasse shadow，裂谷旁的雪徑被凍霧覆住，西側能回望龍息裂谷的藍色霜光，北側接上更高雪脊。畫面中央必須保留可通行的緊實雪徑，路邊有斷冰、雪粉、霜霧與深色裂谷陰影，讓玩家看出這是一段連接冰封雪原東側區域的正式通路；不可畫成死路或完全封閉 blocker，無人物、無 UI、無文字。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 5,
    "worldX": -24,
    "worldY": -18
  },
  "glass_dunes_fill_1_19": {
    "id": "glass_dunes_fill_1_19",
    "name": "西北凝砂封坡",
    "zone": "glass_dunes",
    "description": "西北凝砂封坡貼著琉璃沙丘邊界，北側熱風把碎玻砂吹成白線，東面才有較穩的沙脊。坡面像凝固海浪但會割傷靴底，這格是封閉 blocker，不安排通行出口。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 1,
    "worldY": 19
  },
  "glass_dunes_fill_1_22": {
    "id": "glass_dunes_fill_1_22",
    "name": "西南玻浪牆",
    "zone": "glass_dunes",
    "description": "西南玻浪牆被大片透明砂殼堆成高牆，北側仍能望見日照西門的白光，東面沙丘裂口才是安全方向。這裡是 border blocker，標示沙海邊界但不提供穿越路線，牆下全是流砂與碎玻。",
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
    "description": "雷草西緣位於琉璃沙丘與雷鳴草原交界，西側玻璃砂逐漸被濕草根壓住，東面滾雷門的銅鈴在風裡晃動。草葉間有雷露草採集痕，這裡是西側 gathering route，讓玩家從沙地踏入草原。",
    "image": "thundersteppe_fill_10_23.png",
    "imagePrompt": "雷草西緣 thundersteppe_fill_10_23 in thundersteppe Thunder Steppe, room function resource path, border between Glass Dunes and Thunder Steppe, west glass sand shards slowly pressed under wet grass roots, east rolling thunder gate with copper bells swinging in wind, terrain wet mud track, charged grass, glassy sand fragments, storm clouds and blue-white lightning，畫面左側保留琉璃沙丘的玻璃砂與透明尖片，右側轉成濕亮雷草與泥徑，東面銅鈴門架是中景地標且不可有可讀文字。草葉間有雷露草採集痕與細小電光，冷白閃電照亮草根，雨後泥面反光，氣氛要像玩家從乾燥沙地踏入帶電草原的正式西側採集路線。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_rolling_gate",
        "description": "東側沿帶電草根前往滾雷門入口"
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
    "description": "雷雨草徑被短暴雨打得濕亮，北面雷草西緣還殘留玻璃砂，南面風祭草坡有祭旗聲，東側雷池水洼冒著藍白火花。草根旁可採雷露草與帶電泥粒，這裡是正式採集邊界。",
    "image": "thundersteppe_fill_10_24.png",
    "imagePrompt": "雷雨草徑 thundersteppe_fill_10_24 in thundersteppe Thunder Steppe, room function resource path, short storm rain soaking the grass path, north edge still shows glass sand from Thundergrass West Edge, south wind-shrine slope with festival flags sounding in gusts, east thunder pool puddles crackling blue-white sparks, terrain wet mud, charged grass roots, shallow water, storm flags, glass fragments and lightning reflections，雷雨草徑被短暴雨打得濕亮，畫面中央保留可行泥徑，北側有琉璃砂殘片，南側遠處祭旗被風扯動，東面雷池水洼冒出藍白火花。草根旁要有雷露草與帶電泥粒採集痕，閃電冷光照在雨水與泥面上，氣氛潮濕緊繃，讓玩家看出這是正式採集邊界而非封路。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_thunder_pool",
        "description": "東側踩過濕亮草徑，抵達雷池水洼"
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
    "description": "風祭草坡位於雷鳴草原西南側，北面雷雨草徑積著淺水，東面風祭小祠的旗繩拍打木柱。坡腳仍有晶化砂殼與雷草種子採集點，這裡是 border gathering route，標示沙丘與草原的南端交界。",
    "image": "thundersteppe_fill_10_25.png",
    "imagePrompt": "風祭草坡 thundersteppe_fill_10_25 in thundersteppe Thunder Steppe, room function border road, wind-shrine grass slope at the south end of the dunes-to-steppe transition, north rain grass path with shallow water, east small wind shrine poles with flag ropes striking wood, terrain crystallized sand crust at the slope foot, thundergrass seed gathering marks, wet grass and storm-lit mud，風祭草坡位於雷鳴草原西南側，北面雷雨草徑積著淺水，東面小祠木柱與旗繩在強風裡拍打。坡腳要有晶化砂殼、濕泥、雷草種子採集痕與被雷光照亮的草尖，左下仍帶沙丘乾裂質地，右上轉成帶電草坡；整體要標示沙丘與草原南端交界，是可走的 border gathering route。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "thundersteppe_wind_shrine",
        "description": "東側順著祭旗風聲走向風祭小祠"
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
    "name": "西南砂殼封口",
    "zone": "glass_dunes",
    "description": "西南砂殼封口在玻璃砂路外側凝成硬殼，西面熱風捲起碎砂，東側遠處可見沙丘主路的繩標。這格是封閉 blocker，避免玩家把不穩定砂殼當成可行小路。",
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
    "name": "南風沙脊欄",
    "zone": "glass_dunes",
    "description": "南風沙脊欄被風切成細長玻砂脊，北側沙丘主路仍有腳印，東面熱浪遮住更深的沙海。砂脊會在日照下滑動，這裡只作為封閉邊界與路線警示。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 4,
    "worldX": 3,
    "worldY": 23
  },
  "glass_dunes_fill_4_23": {
    "id": "glass_dunes_fill_4_23",
    "name": "南晶砂採痕",
    "zone": "glass_dunes",
    "description": "南晶砂採痕散在低矮沙丘之間，北側能回望碎玻窄脊，東面晶砂閃得像水面。地上只有採集留下的小坑與繩標殘段，這格是封閉 blocker，不是正式通道。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 4,
    "worldY": 23
  },
  "glass_dunes_fill_4_24": {
    "id": "glass_dunes_fill_4_24",
    "name": "南側七彩砂壁",
    "zone": "glass_dunes",
    "description": "南側七彩砂壁在陽光下折出大片虹光，北面可見晶砂小徑的採集坑，南側砂壁過陡無法落腳。這裡是封閉 blocker，標示沙丘高度差，不接玩家主路。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 5,
    "worldX": 4,
    "worldY": 24
  },
  "glass_dunes_fill_5_19": {
    "id": "glass_dunes_fill_5_19",
    "name": "北中玻砂封坡",
    "zone": "glass_dunes",
    "description": "北中玻砂封坡覆著大片透明砂粒，西側折光砂道仍有白線反光，南面則落入鬆散沙谷。這格是封閉 blocker，遠處沙丘像凝固海浪，但沒有安全踏點。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": 5,
    "worldY": 19
  },
  "glass_dunes_fill_5_23": {
    "id": "glass_dunes_fill_5_23",
    "name": "南緣碎浪坡",
    "zone": "glass_dunes",
    "description": "南緣碎浪坡貼著沙海邊界，北側主路繩標被風埋住一半，東面砂面持續崩落。這裡是封閉 blocker，提醒玩家回到穩定沙脊，不要沿邊坡前進或下切。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 4,
    "worldX": 5,
    "worldY": 23
  },
  "glass_dunes_fill_6_23": {
    "id": "glass_dunes_fill_6_23",
    "name": "東南玻砂欄",
    "zone": "glass_dunes",
    "description": "東南玻砂欄在沙丘外圈形成低矮弧線，西側能看見南緣碎浪坡，東面熱浪後方沒有固定路標。這格是封閉 border blocker，只保留晶砂採集痕跡與風蝕警示。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 4,
    "worldX": 6,
    "worldY": 23
  },
  "glass_dunes_fill_7_20": {
    "id": "glass_dunes_fill_7_20",
    "name": "東側日焰封線",
    "zone": "glass_dunes",
    "description": "東側日焰封線靠近琉璃沙丘外緣，西南面主路仍有淡淡腳印，東側熱光把砂面照成白焰。這裡是封閉 border blocker，不提供通往更東側的出口，也沒有繩標。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 7,
    "worldY": 20
  },
  "glass_dunes_fill_7_22": {
    "id": "glass_dunes_fill_7_22",
    "name": "東南晶裂採坑",
    "zone": "glass_dunes",
    "description": "東南晶裂採坑散著細碎透明晶砂，北側日焰封線反光刺眼，西面則能看見較低的砂谷。坑邊只有採集痕跡與斷裂繩標，這格是封閉 blocker，不是可走小徑。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 3,
    "worldX": 7,
    "worldY": 22
  },
  "ironwood_fort_fill_0_12": {
    "id": "ironwood_fort_fill_0_12",
    "name": "傳送庭北牆根封",
    "zone": "ironwood_fort",
    "description": "傳送庭北牆根封位在鐵木要塞西北牆腳，南側可望見傳送陣庭的藍光，東邊舊蓄水池傳來濕冷水聲。牆根堆著可回收的鐵木碎板與補給牌，但北面垛口封死，是城牆 blocker。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 0,
    "worldY": 12
  },
  "ironwood_fort_fill_0_17": {
    "id": "ironwood_fort_fill_0_17",
    "name": "鐵木林南補給封道",
    "zone": "ironwood_fort",
    "description": "鐵木林南補給封道貼著要塞西牆延伸，北側鐵木林根系鑽入石縫，南面兵營通路被拒馬截斷，東邊監牢外牆只露出鐵窗。這裡可搜集零散補給牌，但主要作為 blocker。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": 0,
    "worldY": 17
  },
  "ironwood_fort_fill_0_18": {
    "id": "ironwood_fort_fill_0_18",
    "name": "南牆兵營玻砂界",
    "zone": "ironwood_fort",
    "description": "南牆兵營玻砂界位在鐵木要塞最南牆腳，北面補給封道仍有軍靴刮痕，東側琉璃沙丘北緣的晶砂已堆到牆根。這裡是 border blocker，可撿到破損軍牌，但南方牆外被坍塌拒馬鎖住。",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "",
        "locked": true,
        "description": "南側坍塌拒馬與玻砂堆封住牆外通路，不能從兵營牆腳硬穿出去"
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
    "description": "琉璃沙丘北緣的晶砂貼著要塞南方展開，碎玻砂在風裡發亮，南面可接入更深沙丘，北側仍能看見鐵木要塞的牆影。這裡是 border 採集邊界，不直接開往要塞，也沒有北門路標。",
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
    "description": "玻砂北徑沿著乾熱風線延伸，腳下砂粒像碎鏡一樣磨響，南側沙丘開始升高，北面要塞石牆只剩低沉輪廓。這裡是封閉 blocker，避免玩家誤往北側硬穿。",
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
    "description": "熱風砂脊把北方硬土切成透明砂線，東西兩側都有晶砂起伏，往南能看見琉璃沙丘內部的白亮反光。這格是封閉 blocker，只標示北緣地貌和熱風斷線。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 3,
    "worldY": 18
  },
  "ironwood_fort_fill_4_15": {
    "id": "ironwood_fort_fill_4_15",
    "name": "高堡西軍械封道",
    "zone": "ironwood_fort",
    "description": "高堡西軍械封道位在高堡西側牆道，西面指揮步道仍有紅旗號令，南側高堡門影壓在石階上，北邊信號塔火盆忽明忽暗。鐵木拒馬堆成臨時軍械欄，可搜補給碎片，但封住東側岔路。",
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
    "description": "折光砂道在北緣形成一排低矮玻丘，陽光被砂面切成細碎白線，南側沙海更亮，北方要塞聲音被熱浪吞沒。此處封住北側邊界，不提供出口。",
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
    "description": "鏡砂邊坡貼著沙丘北側展開，玻化砂殼在靴下碎裂，往南能接入高熱沙脊，東西兩側都有稀薄的折射光。這裡是封閉 border blocker，不直接開路，坡下沒有木樁。",
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
    "description": "北砂亮線在琉璃沙丘邊界拉出一道白色反光，南面沙丘像凝固浪脊，西側仍有要塞邊地的灰塵殘留。這格是封閉邊界，提醒玩家回內側主路。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 6,
    "worldY": 18
  },
  "kingdom_frontier_fill_n10_n3": {
    "id": "kingdom_frontier_fill_n10_n3",
    "name": "南哨界碑封口",
    "zone": "kingdom_frontier",
    "description": "南哨界碑封口位於王國邊境西南角，北側巡邏路被草叢遮住，東面遠處可見獵場木柵與舊橡樹影。磨損界碑旁堆著拒馬、斷旗桿與警戒繩，這格是封閉 border blocker，不開放穿越，只能折回內側巡邏線。泥地上的馬蹄印也被故意抹平。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 4,
    "worldX": -10,
    "worldY": -3
  },
  "kingdom_frontier_fill_n10_n4": {
    "id": "kingdom_frontier_fill_n10_n4",
    "name": "舊橡獵牆門",
    "zone": "kingdom_frontier",
    "description": "舊橡獵牆門貼著王國邊境的東側矮牆，西面軍方界碑排成直線，東面能看見王家獵場老橡樹的樹冠。這裡是跨區 border 路線，只沿東側獵牆缺口通往獵場；牆下有巡邏告示、王室獵印與軍方放行木牌。牆洞旁還掛著破舊通行繩。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_old_oak_stand",
        "description": "東側穿過獵牆缺口與落葉界碑，接向王家獵場老橡樹地"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側軍方拒馬封住邊牆走道，不能離開巡邏線"
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
    "name": "銀徑軍界口",
    "zone": "kingdom_frontier",
    "description": "銀徑軍界口夾在邊境哨旗與王家獵場銀色小徑之間，西側關卡木牌寫著軍管警示，東側獵場銀葉在風裡閃動。這是跨區 border route，不是普通前線支路；兩側都有界樁、巡邏繩、放行刻痕與折返告示。腳下碎石被軍靴壓出凹痕。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_silver_trail",
        "description": "東側沿銀葉路標離開軍界，接入王家獵場銀色小徑"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側關卡柵門落下，軍管前線禁止通行"
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
    "description": "邊境巡邏路在獵場鹿徑西側延伸，西面是軍方哨旗與低牆，東側草叢裡可見王室與軍方的雙重界標。這是通往王家獵場鹿徑的 border route，路面仍受巡邏管制；界碑旁有警告牌、蹄印與巡邏繩標。玩家可辨認唯一放行缺口。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_deer_run",
        "description": "東側穿過雙重界標與矮草巡邏線，接向王家獵場鹿徑"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側軍方低牆封住巡邏路，不能進入邊境腹地"
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
    "name": "號角獵門口",
    "zone": "kingdom_frontier",
    "description": "號角獵門口穿過王室獵場西側界碑，西面邊境巡邏路仍有軍靴印，東側獵場號角門掛著舊銅環。磨損石墩標出獵場與軍管區分界，是明確跨區通路；兩側都有巡邏繩標、放行牌與獵角警示。門下石板刻著王室獵令。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_horn_gate",
        "description": "東側越過王室界碑與銅環門柱，抵達王家獵場號角門"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側巡邏拒馬封住回穿路線，需改走正式邊境道路"
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
    "name": "南側殘哨臺",
    "zone": "kingdom_frontier",
    "description": "南側殘哨臺立在低矮土坡上，西側有崩落崗哨木樁，東面能望見舊橡獵牆門與獵場矮牆。磨損界碑把巡邏線截斷，這格是封閉 blocker，只作邊境輪廓提示、風向標記與軍旗殘影，不接玩家主路。哨臺石階已被雜草吞沒。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 4,
    "worldX": -11,
    "worldY": -3
  },
  "kingdom_frontier_fill_n13_n4": {
    "id": "kingdom_frontier_fill_n13_n4",
    "name": "中段旗繩封路",
    "zone": "kingdom_frontier",
    "description": "中段旗繩封路在邊牆下方拉起斑駁軍旗，北側舊橡獵牆門的樹影仍可見，東面前線草地被巡邏繩封住。這是封閉 border blocker，不接玩家主路或獵場小徑；旗繩旁的泥印與斷槍只提示戰線曾經後撤。低牆缺口被木樁補死。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": -13,
    "worldY": -4
  },
  "kingdom_frontier_fill_n14_n6": {
    "id": "kingdom_frontier_fill_n14_n6",
    "name": "鹿徑西拒馬",
    "zone": "kingdom_frontier",
    "description": "鹿徑西拒馬靠近王家獵場西側，北面可望見銀徑軍界口，東側鹿徑被木拒馬隔在外。界碑旁只有巡邏腳印、折斷箭桿與草叢警戒繩，這格是封閉 blocker，提示玩家不要硬穿草叢或繞入獵場。拒馬尖端塗著紅色警漆。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": -14,
    "worldY": -6
  },
  "kingdom_frontier_fill_n15_n7": {
    "id": "kingdom_frontier_fill_n15_n7",
    "name": "北角軍旗欄",
    "zone": "kingdom_frontier",
    "description": "北角軍旗欄位於邊境高處，南側鹿徑西拒馬的木刺仍可看見，東面獵場樹影被旗欄隔開。此處是封閉 border blocker，沒有安全出口或服務點，只作警戒邊界；風裡的旗聲提醒玩家回到正式巡邏路。旗欄下埋著舊營釘。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": -15,
    "worldY": -7
  },
  "kingdom_frontier_fill_n17_n3": {
    "id": "kingdom_frontier_fill_n17_n3",
    "name": "西段舊牆哨",
    "zone": "kingdom_frontier",
    "description": "西段舊牆哨貼著殘破邊牆，東側遠處可見南側殘哨臺，北面風把軍旗聲吹得斷續。牆基塌陷封住巡邏線，這格是封閉 blocker，只保留邊境地貌、哨臺殘影與碎石拒馬，不提供安全通路。牆縫裡插著褪色巡邏牌。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": -17,
    "worldY": -3
  },
  "kingdom_frontier_fill_n18_n4": {
    "id": "kingdom_frontier_fill_n18_n4",
    "name": "西北敵影牆",
    "zone": "kingdom_frontier",
    "description": "西北敵影牆在邊境最外側形成死角，東側舊牆哨的石影被荒草遮住，北面遠處可見敵國輪廓。這裡是封閉 border blocker，牆下沒有可通行門洞或巡邏缺口；碎旗與警戒木牌只留下威脅提示。牆外霧線完全不可踏入。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -18,
    "worldY": -4
  },
  "kingdom_frontier_fill_n18_n6": {
    "id": "kingdom_frontier_fill_n18_n6",
    "name": "西北荒草哨",
    "zone": "kingdom_frontier",
    "description": "西北荒草哨被高草包圍，南側西北敵影牆仍露出石角，東面巡邏路標被泥土埋住。磨損界碑旁只有舊哨火灰、斷箭與塌旗座，這格是封閉 blocker，不接出新道路，只提示邊境外側危險。草中藏著失效警鈴與半截警戒木牌。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": -18,
    "worldY": -6
  },
  "kingsroad_market_fill_23_2": {
    "id": "kingsroad_market_fill_23_2",
    "name": "草藥棚北封街",
    "zone": "kingsroad_market",
    "description": "草藥棚北封街夾在北側守衛哨與東側草藥廣場之間，石板路面被臨時木架、藥草箱和帆布雨棚堵住。這裡是市集內部 blocker，標示攤棚後勤區不開放通行；玩家只能看見藥草分類牌與搬貨路線，不能在此交易、接任務或穿越攤棚。",
    "image": "kingsroad_market_fill_23_2.png",
    "imagePrompt": "草藥棚北封街 kingsroad_market_fill_23_2 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 草藥棚北封街夾在北側守衛哨與東側草藥廣場之間，石板路面被臨時木架、藥草箱和帆布雨棚堵住。這裡是市集內部 blocker，標示攤棚後勤區不開放通行；玩家只能看見藥草分類牌與搬貨路線，不能在此交易、接任務或穿越攤棚。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 23,
    "worldY": 2
  },
  "kingsroad_market_fill_23_n1": {
    "id": "kingsroad_market_fill_23_n1",
    "name": "西北貨棚封巷",
    "zone": "kingsroad_market",
    "description": "西北貨棚封巷位在傳送廣場北面，南側可聽見旅人經過石階，東側井庭旁堆著水桶、布包和卸貨木架。貨棚帳繩橫過路口，這格是服務區邊緣 blocker，只作市集邊界與動線提示；玩家可辨認補給棚位置，但不能進入貨棚後場。",
    "image": "kingsroad_market_fill_23_n1.png",
    "imagePrompt": "西北貨棚封巷 kingsroad_market_fill_23_n1 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 西北貨棚封巷位在傳送廣場北面，南側可聽見旅人經過石階，東側井庭旁堆著水桶、布包和卸貨木架。貨棚帳繩橫過路口，這格是服務區邊緣 blocker，只作市集邊界與動線提示；玩家可辨認補給棚位置，但不能進入貨棚後場。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": 23,
    "worldY": -1
  },
  "kingsroad_market_fill_25_5": {
    "id": "kingsroad_market_fill_25_5",
    "name": "南市競技門廊",
    "zone": "kingsroad_market",
    "description": "南市競技門廊位於王道市集南緣，北面攤棚聲逐漸被石牆擋住，南側階梯直接接向競技城區的獎品櫃台。這裡是跨區 border route，守衛只放行往南的觀賽人流；門廊旁票亭可確認入場方向，但側門、貨車門和回切小巷全部封閉。",
    "image": "kingsroad_market_fill_25_5.png",
    "imagePrompt": "南市競技門廊 kingsroad_market_fill_25_5 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: south toward 獎品櫃, north toward locked boundary, source room details: 南市競技門廊位於王道市集南緣，北面攤棚聲逐漸被石牆擋住，南側階梯直接接向競技城區的獎品櫃台。這裡是跨區 border route，守衛只放行往南的觀賽人流；門廊旁票亭可確認入場方向，但側門、貨車門和回切小巷全部封閉。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "arena_quarter_prize_counter",
        "description": "南側穿過石拱門與票亭欄杆，進入競技城區獎品櫃台"
      },
      {
        "direction": "north",
        "targetRoomId": "",
        "locked": true,
        "description": "北側貨車門被守衛封住，不能從門廊回切市集內街"
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
    "name": "拍賣棚下封道",
    "zone": "kingsroad_market",
    "description": "拍賣棚下封道位於拍賣帳篷南側，北面帆布遮住木槌聲，東側高陽台的石階被繩欄隔開。地上有車轍、搬運板痕與貨單木牌，但這裡是市集後勤 blocker；玩家可看出拍賣貨物流向，不能穿越、競標或使用商店服務。",
    "image": "kingsroad_market_fill_26_3.png",
    "imagePrompt": "拍賣棚下封道 kingsroad_market_fill_26_3 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 拍賣棚下封道位於拍賣帳篷南側，北面帆布遮住木槌聲，東側高陽台的石階被繩欄隔開。地上有車轍、搬運板痕與貨單木牌，但這裡是市集後勤 blocker；玩家可看出拍賣貨物流向，不能穿越、競標或使用商店服務。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 26,
    "worldY": 3
  },
  "kingsroad_market_fill_26_n1": {
    "id": "kingsroad_market_fill_26_n1",
    "name": "鐵匠北貨欄",
    "zone": "kingsroad_market",
    "description": "鐵匠北貨欄貼著鐵匠鋪列北面，南側爐火熱氣從石縫竄出，西面酒館前的招牌在棚影裡晃動。整排鐵料箱、冷卻水桶和未領貨牌鎖住通道，這格是封閉 blocker，只提示鍛造服務區邊界，不是可互動店面，也不接市集後街。",
    "image": "kingsroad_market_fill_26_n1.png",
    "imagePrompt": "鐵匠北貨欄 kingsroad_market_fill_26_n1 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 鐵匠北貨欄貼著鐵匠鋪列北面，南側爐火熱氣從石縫竄出，西面酒館前的招牌在棚影裡晃動。整排鐵料箱、冷卻水桶和未領貨牌鎖住通道，這格是封閉 blocker，只提示鍛造服務區邊界，不是可互動店面，也不接市集後街。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 26,
    "worldY": -1
  },
  "kingsroad_market_fill_28_3": {
    "id": "kingsroad_market_fill_28_3",
    "name": "高陽台西封街",
    "zone": "kingsroad_market",
    "description": "高陽台西封街在市集東半部收窄，西側高陽台的石欄與拱柱投下陰影，北面帳冊後巷傳來紙頁聲，東側攤棚通道被布幕遮住。這格是市集 blocker，只保留石街、陽台建築邊界與服務動線提示；玩家不能從後巷繞入櫃台。",
    "image": "kingsroad_market_fill_28_3.png",
    "imagePrompt": "高陽台西封街 kingsroad_market_fill_28_3 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 高陽台西封街在市集東半部收窄，西側高陽台的石欄與拱柱投下陰影，北面帳冊後巷傳來紙頁聲，東側攤棚通道被布幕遮住。這格是市集 blocker，只保留石街、陽台建築邊界與服務動線提示；玩家不能從後巷繞入櫃台。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 4,
    "worldX": 28,
    "worldY": 3
  },
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
    "description": "西界水草鏡岸靠近泥炭小洲南側，北面仍能看見蘆根浮在黑水上，東側回聲沼的水面反光更深。岸邊留有採集水草與銀泥的割痕，但木板在此中斷，是封閉 blocker 與濕地邊界。",
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
    "description": "北界毒蘆封口貼著競技場南緣與鏡沼北岸，南側蜘蛛蘆叢的黑絲掛在木樁上，東面蛇形水道仍有濕滑泥線。這裡是 border blocker，毒蘆和深泥封住北面，不安排通行或怪物遭遇。",
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
    "description": "南鏡水草灘位於回聲沼南面，北側水聲被濃霧折回，東側月光堤道的木樁只露出尖端。灘邊有水草與毒囊採集痕跡，但南面軟泥會吞沒靴底，這格只作採集邊界與封閉 blocker。",
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
    "description": "中沼倒影封汊夾在北側霧盲灘與南側月光堤道之間，西面回聲沼的水泡不斷冒起。三邊看似有路，其實木樁都沉入黑水，這裡標示不可通行 blocker，提醒玩家改走穩固棧道。",
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
    "description": "沉祠西南封棧靠近北側下沉神龕，南面破碎倒影灘的裂水閃著白光，西側失落石堆被黑泥半埋。棧板在三處都已塌陷，只留下警示木牌，是封閉 blocker，沒有採集點或任務入口。",
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
    "description": "霧盲採草水坎在鏡池南側形成濕滑邊坡，西面霧盲灘還有殘破布旗，東側暗樹人林的根影壓到水面。坡下長著可採的沼草與銀泥斑，但深水封住通行，是採集邊界與 blocker。",
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
    "description": "巫燈月堤接道是一段架在南側黑水上的窄木棧，西面月光堤道的銀色樁影逐漸變暗，東側巫婆燈籠在霧裡晃動。這裡是正式 route，讓玩家沿鏡沼南緣連續通行，不放怪物或採集互動。",
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
    "description": "碎影柳根封口位於破碎倒影灘東側，西面裂水仍映出斷裂月光，南側沉柳根鬚垂入黑水。柳根下沒有可站立的泥台，棧道被倒木壓斷，這格只作封閉 blocker 與沼心危險提示。",
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
    "description": "東沼邊界黑水貼近沉柳東側，西面柳根像爪子伸進泥面，東側能望見通往蛇河三角洲的水鏡邊路。這裡沒有鋪設棧板，只用浮標標出不可通行的 border blocker，避免玩家誤闖深水。",
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
    "description": "蛇渡鏡沼碼頭位於鏡沼東緣，東側窄渡口把冷黑水接到蛇河三角洲的入口渡船，西面則被無底泥潭截斷。這裡是跨區 border route，只保留向東登船的通路，碼頭內側以木柵封閉。",
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
    "description": "鷺標水草渡坎貼著鏡沼東南水線，西側黑水邊界浮著採集過的水草束，東面白鷺標竿引向蛇河三角洲。這裡是 border 採集點與短渡口，玩家只能順著東側水痕跨區，南北都是深泥。",
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
  "glass_dunes_fill_0_21": {
    "id": "glass_dunes_fill_0_21",
    "name": "日照西門",
    "zone": "glass_dunes",
    "description": "日照西門是一段被玻砂覆住的邊界路，西側仍有紅岩荒地的乾熱氣味，東側日照玻門反射出刺眼白光。這裡是 border 路線端點，需沿東側門影進入沙丘，西側舊路已被流砂吞沒。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "glass_dunes_sun_gate",
        "description": "東側沿日照玻門的白光，進入琉璃沙丘日門"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側乾熱流砂覆住舊路，不能直接穿回紅岩荒地"
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
    "name": "火口流亡熱裂道",
    "zone": "redrock_badlands",
    "description": "火口流亡熱裂道位於猩紅火口南側，北面赤紅 crater 邊緣冒著熱霧，南面流亡者洞穴的陰影貼著乾谷。這裡是正式 border route，用來串接火口與流亡洞，不放怪物或採集互動。",
    "image": "redrock_badlands_fill_n3_20.png",
    "imagePrompt": "火口流亡熱裂道 redrock_badlands_fill_n3_20 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: north toward 猩紅火口, south toward 流放者洞穴, source room details: 火口流亡熱裂道位於猩紅火口南側，北面赤紅 crater 邊緣冒著熱霧，南面流亡者洞穴的陰影貼著乾谷。這裡是正式 border route，用來串接火口與流亡洞，不放怪物或採集互動。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "redrock_badlands_scarlet_crater",
        "description": "北側沿發熱裂縫爬上猩紅火口外圈"
      },
      {
        "direction": "south",
        "targetRoomId": "redrock_badlands_exile_den",
        "description": "南側順著乾谷陰影回到流亡者洞穴"
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
    "name": "猩紅裂光西路",
    "zone": "redrock_badlands",
    "description": "猩紅裂光西路位於紅岩荒地北緣，北面暗林邊界的陰影被熱浪推開，南側伏擊峽谷有砂塵盤旋，東面猩紅火口照亮裂石。這裡是 border route，串接熔岩蟲陷坑與火口外緣，不提供北側跨林捷徑。",
    "image": "redrock_badlands_fill_n4_19.png",
    "imagePrompt": "猩紅裂光西路 redrock_badlands_fill_n4_19 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: west toward 熔蟲東熱裂道, east toward 猩紅火口, source room details: 猩紅裂光西路位於紅岩荒地北緣，北面暗林邊界的陰影被熱浪推開，南側伏擊峽谷有砂塵盤旋，東面猩紅火口照亮裂石。這裡是 border route，串接熔岩蟲陷坑與火口外緣，不提供北側跨林捷徑。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n5_19",
        "description": "西側沿赤色裂光石道返回熔岩蟲陷坑"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_scarlet_crater",
        "description": "東側踩過冒熱氣的裂石接上猩紅火口"
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
    "name": "決鬥東刻痕路",
    "zone": "redrock_badlands",
    "description": "決鬥東刻痕路貼著決鬥石圈西側，北面盜匪營地旗布在熱風裡拍打，西面刻痕路繼續通往回聲拱岩。這裡是正式 border route，用紅岩刻線引導玩家在兩處地標間移動。",
    "image": "redrock_badlands_fill_n4_23.png",
    "imagePrompt": "決鬥東刻痕路 redrock_badlands_fill_n4_23 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: west toward 決鬥刻痕路, east toward 決鬥石圈, source room details: 決鬥東刻痕路貼著決鬥石圈西側，北面盜匪營地旗布在熱風裡拍打，西面刻痕路繼續通往回聲拱岩。這裡是正式 border route，用紅岩刻線引導玩家在兩處地標間移動。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n5_23",
        "description": "西側沿白色刻痕路走向回聲拱岩方向"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_duel_stones",
        "description": "東側踏過紅岩碎石返回決鬥石圈"
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
    "name": "熔蟲東熱裂道",
    "zone": "redrock_badlands",
    "description": "熔蟲東熱裂道位於熔岩蟲陷坑東側，西面坑壁有焦黑鑽痕，南側火靈盆地吹來硫味，東面裂光路接向猩紅火口。這裡是 border route，路面穩定但不安排額外採集或敵人。",
    "image": "redrock_badlands_fill_n5_19.png",
    "imagePrompt": "熔蟲東熱裂道 redrock_badlands_fill_n5_19 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: west toward 熔岩蟲陷坑, east toward 猩紅裂光西路, source room details: 熔蟲東熱裂道位於熔岩蟲陷坑東側，西面坑壁有焦黑鑽痕，南側火靈盆地吹來硫味，東面裂光路接向猩紅火口。這裡是 border route，路面穩定但不安排額外採集或敵人。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_lava_worm_sink",
        "description": "西側沿地下熱氣回到熔岩蟲陷坑"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n4_19",
        "description": "東側穿過赤岩裂縫接往猩紅火口外緣"
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
    "name": "乾谷中央封裂",
    "zone": "redrock_badlands",
    "description": "乾谷中央封裂位於紅岩荒地腹地，北側毒蛇平地的草皮被熱風吹焦，南面碎脊岩線斷成尖刺，東側紅礦切口泛著鐵鏽光。裂縫深處沒有踏點，這裡是 border blocker，不提供通行。",
    "image": "redrock_badlands_fill_n6_21.png",
    "imagePrompt": "乾谷中央封裂 redrock_badlands_fill_n6_21 in redrock_badlands 赤岩荒地, room function danger pocket, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 乾谷中央封裂位於紅岩荒地腹地，北側毒蛇平地的草皮被熱風吹焦，南面碎脊岩線斷成尖刺，東側紅礦切口泛著鐵鏽光。裂縫深處沒有踏點，這裡是 border blocker，不提供通行。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "決鬥刻痕路位於盜匪瞭望點南側，東面紅岩刻線指回決鬥石圈，西面乾谷石路逐漸靠近回聲拱岩。這是正式 route，路面只有風沙和刻痕，不放採集或額外遭遇。",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_fill_n6_23",
        "description": "西側沿被風磨白的刻痕靠近回聲拱岩"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n4_23",
        "description": "東側循紅岩刻線返回決鬥石圈方向"
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
    "name": "回聲拱東乾谷",
    "zone": "redrock_badlands",
    "description": "回聲拱東乾谷位於回聲拱岩東側，北面碎脊坡有落石聲，南面黑旗瞭望台的旗影在熱風裡扭曲。這裡是正式 route，把回聲拱岩與決鬥刻痕路連成逐格通道。",
    "image": "redrock_badlands_fill_n6_23.png",
    "imagePrompt": "回聲拱東乾谷 redrock_badlands_fill_n6_23 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: west toward 回聲拱岩, east toward 決鬥刻痕路, source room details: 回聲拱東乾谷位於回聲拱岩東側，北面碎脊坡有落石聲，南面黑旗瞭望台的旗影在熱風裡扭曲。這裡是正式 route，把回聲拱岩與決鬥刻痕路連成逐格通道。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "redrock_badlands_echo_arch",
        "description": "西側沿乾谷回音走到回聲拱岩下"
      },
      {
        "direction": "east",
        "targetRoomId": "redrock_badlands_fill_n5_23",
        "description": "東側穿過紅砂窄道返回決鬥刻痕路"
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
    "name": "墓門東側斷谷",
    "zone": "redrock_badlands",
    "description": "墓門東側斷谷位於紅岩荒地西北邊界，西面詛咒墓園鐵門透出腐土冷氣，東側熔岩蟲陷坑的熱風把碎石吹紅，南面餘燼泉泛著暗光。斷谷落差過深，是 border blocker，只標示墓園方向。",
    "image": "redrock_badlands_fill_n7_19.png",
    "imagePrompt": "墓門東側斷谷 redrock_badlands_fill_n7_19 in redrock_badlands 赤岩荒地, room function danger pocket, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 墓門東側斷谷位於紅岩荒地西北邊界，西面詛咒墓園鐵門透出腐土冷氣，東側熔岩蟲陷坑的熱風把碎石吹紅，南面餘燼泉泛著暗光。斷谷落差過深，是 border blocker，只標示墓園方向。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -7,
    "worldY": 19
  },
  "redrock_badlands_fill_n7_24": {
    "id": "redrock_badlands_fill_n7_24",
    "name": "回聲南封紅壁",
    "zone": "redrock_badlands",
    "description": "回聲南封紅壁位於回聲拱岩南側，北面仍能聽見拱洞回音，東側黑旗瞭望台的木架露出尖角。紅壁下方全是鬆散砂石與斷層，這裡是 border blocker，不提供南側繞路。",
    "image": "redrock_badlands_fill_n7_24.png",
    "imagePrompt": "回聲南封紅壁 redrock_badlands_fill_n7_24 in redrock_badlands 赤岩荒地, room function danger pocket, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 回聲南封紅壁位於回聲拱岩南側，北面仍能聽見拱洞回音，東側黑旗瞭望台的木架露出尖角。紅壁下方全是鬆散砂石與斷層，這裡是 border blocker，不提供南側繞路。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -7,
    "worldY": 24
  },
  "redrock_badlands_fill_n8_21": {
    "id": "redrock_badlands_fill_n8_21",
    "name": "沙門北封溝",
    "zone": "redrock_badlands",
    "description": "沙門北封溝貼著紅岩荒地西側，南面塵沙門的木框半埋在紅砂裡，東側乾谷風帶著鐵鏽味吹來。溝底被落石堵死，這裡是封閉 blocker，提醒玩家改走正式乾谷路線。",
    "image": "redrock_badlands_fill_n8_21.png",
    "imagePrompt": "沙門北封溝 redrock_badlands_fill_n8_21 in redrock_badlands 赤岩荒地, room function danger pocket, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 沙門北封溝貼著紅岩荒地西側，南面塵沙門的木框半埋在紅砂裡，東側乾谷風帶著鐵鏽味吹來。溝底被落石堵死，這裡是封閉 blocker，提醒玩家改走正式乾谷路線。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": -8,
    "worldY": 21
  },
  "royal_hunting_grounds_fill_n5_n5": {
    "id": "royal_hunting_grounds_fill_n5_n5",
    "name": "白鹿林南灌木採封",
    "zone": "royal_hunting_grounds",
    "description": "白鹿林南灌木採封位在王室獵場南側林線，北面白鹿林傳來枝葉摩擦聲，西側月光空地的銀色草線若隱若現。灌木叢下露出獵場藥草、白羽與鹿蹄刮痕，玩家只能沿繩標旁採集，不能穿過封住的灌木牆，是 gathering blocker。",
    "image": "royal_hunting_grounds_fill_n5_n5.png",
    "imagePrompt": "白鹿林南灌木採封 royal_hunting_grounds_fill_n5_n5 in royal_hunting_grounds 王家獵場, room function danger pocket, terrain royal hunting forest path, deer trail, old markers, green shadows, leaf litter and controlled wilderness mood, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 白鹿林南灌木採封位在王室獵場南側林線，北面白鹿林傳來枝葉摩擦聲，西側月光空地的銀色草線若隱若現。灌木叢下露出獵場藥草、白羽與鹿蹄刮痕，玩家只能沿繩標旁採集，不能穿過封住的灌木牆，是 gathering blocker。, restrained noble forest route, watchful hunting preserve silence, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 2,
    "worldX": -5,
    "worldY": -5
  },
  "royal_hunting_grounds_fill_n6_n4": {
    "id": "royal_hunting_grounds_fill_n6_n4",
    "name": "月光白鹿草線",
    "zone": "royal_hunting_grounds",
    "description": "月光白鹿草線穿過王家林地的低草坡，西側月光空地照出銀白足跡，東面白鹿林的樹幹掛著王室繩標。草坡中央有被鹿蹄踩出的窄小鹿徑與觀察木牌，玩家沿鹿徑在兩個正式獵場地標間移動，不會誤入南側灌木封線。",
    "image": "royal_hunting_grounds_fill_n6_n4.png",
    "imagePrompt": "月光白鹿草線 royal_hunting_grounds_fill_n6_n4 in royal_hunting_grounds 王家獵場, room function resource path, terrain royal hunting forest path, deer trail, old markers, green shadows, leaf litter and controlled wilderness mood, visible path cues: west toward 月光空地, east toward 白鹿林, source room details: 月光白鹿草線穿過王家林地的低草坡，西側月光空地照出銀白足跡，東面白鹿林的樹幹掛著王室繩標。草坡中央有被鹿蹄踩出的窄小鹿徑與觀察木牌，玩家沿鹿徑在兩個正式獵場地標間移動，不會誤入南側灌木封線。, restrained noble forest route, watchful hunting preserve silence, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "royal_hunting_grounds_moonlit_clearing",
        "description": "沿月光照亮的低草線向西，可回到開闊的月光空地"
      },
      {
        "direction": "east",
        "targetRoomId": "royal_hunting_grounds_white_stag_grove",
        "description": "沿王室繩標與鹿蹄印向東，可接到白鹿林深處"
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
    "name": "競技長廊東鹽封灘",
    "zone": "saltwind_flats",
    "description": "競技長廊東鹽封灘位在鹽風灘西緣，西面競技長廊的石影被鹽霧遮住，北側霧標木桿掛著破布，東邊玻鹽田反著白光。這裡是 border blocker，厚鹽殼封住跨區繞路，不提供通行。",
    "image": "saltwind_flats_fill_31_10.png",
    "imagePrompt": "競技長廊東鹽封灘 saltwind_flats_fill_31_10 in saltwind_flats 鹽風灘, room function danger pocket, terrain salt flats beach road, wet hot sand, salt crystals, shallow tide pools, white glare and humid sea wind, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 競技長廊東鹽封灘位在鹽風灘西緣，西面競技長廊的石影被鹽霧遮住，北側霧標木桿掛著破布，東邊玻鹽田反著白光。這裡是 border blocker，厚鹽殼封住跨區繞路，不提供通行。, coastal flats connector, salt glare, humid wind and shallow water hazard, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 31,
    "worldY": 10
  },
  "serpent_delta_fill_31_13": {
    "id": "serpent_delta_fill_31_13",
    "name": "北河鹽霧渡口",
    "zone": "serpent_delta",
    "description": "北河鹽霧渡口位在蛇河三角洲北緣，北面鹽風仍貼著河面吹來，南側渡船索樁通往入口渡口，東邊可見分流蘆岸的低草。這裡是邊界採集點，泥灘上散著可採集的鹽蘆芽與濕泥貝殼。",
    "image": "serpent_delta_fill_31_13.png",
    "imagePrompt": "北河鹽霧渡口 serpent_delta_fill_31_13 in serpent_delta 蛇河三角洲, room function resource path, north river ferry mudbank with salt mist over the water, south rope mooring posts leading to the entrance ferry, east low reed bank visible across a split channel, terrain muddy river shore, wet shells, salt reeds, damp wooden stakes, grey-green river light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_entrance_ferry",
        "description": "沿渡船索樁南行，回到三角洲入口渡口。"
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
    "name": "北分流草蘆岸",
    "zone": "serpent_delta",
    "description": "北分流草蘆岸貼著三角洲北側分流水道，西面接北河鹽霧渡口，東面望見泥魚淺灘，南側泥濘小徑深入分流蘆岸。這裡是路線端點兼採集點，低蘆根旁有可採集的淡水蘆芯。",
    "image": "serpent_delta_fill_32_13.png",
    "imagePrompt": "北分流草蘆岸 serpent_delta_fill_32_13 in serpent_delta 蛇河三角洲, room function resource path, northern split-channel reed bank, west ferry mudbank cue, east shallow mudfish flats, south muddy footpath entering thicker reeds, terrain low freshwater reeds, exposed roots, soft mud ridges, braided river water, humid overcast light, distinct place-focused environment composition, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_split_reed_bank",
        "description": "沿低蘆泥徑南下，進入分流蘆岸。"
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
    "name": "白紋灘北蟹痕封",
    "zone": "saltwind_flats",
    "description": "白紋灘北蟹痕封位在白紋潮痕北面，南側鹽水留下淡白波紋，東邊蟹群行軍的腳痕切過濕沙。硬鹽殼下有空洞水泡，這裡是 blocker 邊界，只標示灘地外緣。",
    "image": "saltwind_flats_fill_32_7.png",
    "imagePrompt": "白紋灘北蟹痕封 saltwind_flats_fill_32_7 in saltwind_flats 鹽風灘, room function danger pocket, terrain salt flats beach road, wet hot sand, salt crystals, shallow tide pools, white glare and humid sea wind, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 白紋灘北蟹痕封位在白紋潮痕北面，南側鹽水留下淡白波紋，東邊蟹群行軍的腳痕切過濕沙。硬鹽殼下有空洞水泡，這裡是 blocker 邊界，只標示灘地外緣。, coastal flats connector, salt glare, humid wind and shallow water hazard, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 32,
    "worldY": 7
  },
  "saltwind_flats_fill_33_10": {
    "id": "saltwind_flats_fill_33_10",
    "name": "海盜盲點西玻鹽封",
    "zone": "saltwind_flats",
    "description": "海盜盲點西玻鹽封位在海盜盲點南西側，北面遮棚破帆在熱霧裡晃動，西面玻鹽田刺眼反光。鹽晶鋒利到無法踏穩，是 border blocker，用來封住盲點外側。",
    "image": "saltwind_flats_fill_33_10.png",
    "imagePrompt": "海盜盲點西玻鹽封 saltwind_flats_fill_33_10 in saltwind_flats 鹽風灘, room function danger pocket, terrain salt flats beach road, wet hot sand, salt crystals, shallow tide pools, white glare and humid sea wind, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 海盜盲點西玻鹽封位在海盜盲點南西側，北面遮棚破帆在熱霧裡晃動，西面玻鹽田刺眼反光。鹽晶鋒利到無法踏穩，是 border blocker，用來封住盲點外側。, coastal flats connector, salt glare, humid wind and shallow water hazard, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 3,
    "worldX": 33,
    "worldY": 10
  },
  "serpent_delta_fill_33_13": {
    "id": "serpent_delta_fill_33_13",
    "name": "北泥魚淺灘",
    "zone": "serpent_delta",
    "description": "北泥魚淺灘承接北分流蘆岸東端，西側蘆影貼著水面，南面泥魚池不時冒出氣泡，北方鹽霧在這裡被河口水氣沖淡。這裡是採集淺灘，可採集濕滑泥藻與泥魚翻出的細貝。",
    "image": "serpent_delta_fill_33_13.png",
    "imagePrompt": "北泥魚淺灘 serpent_delta_fill_33_13 in serpent_delta 蛇河三角洲, room function resource path, shallow mudfish flat at the north delta edge, west reed shadows lying on water, south bubbling mudfish pool, north salt mist fading into river vapor, terrain slick mud algae, tiny shells, shallow brown water, low wet horizon, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "serpent_delta_mudfish_pool",
        "description": "踩著淺灘泥脊南行，抵達泥魚池。"
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
    "name": "鹵眼西鹽晶採封",
    "zone": "saltwind_flats",
    "description": "鹵眼西鹽晶採封位在低潮堤道南面，北側鹽堤石橋露出白鹽，東邊深鹵眼像廢井般冒著藍黑氣泡。鹽晶路旁可採集硬鹽片與鹵砂，但晶殼斷裂成坑，是 gathering blocker。",
    "image": "saltwind_flats_fill_36_10.png",
    "imagePrompt": "鹵眼西鹽晶採封 saltwind_flats_fill_36_10 in saltwind_flats 鹽風灘, room function danger pocket, terrain salt flats beach road, wet hot sand, salt crystals, shallow tide pools, white glare and humid sea wind, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 鹵眼西鹽晶採封位在低潮堤道南面，北側鹽堤石橋露出白鹽，東邊深鹵眼像廢井般冒著藍黑氣泡。鹽晶路旁可採集硬鹽片與鹵砂，但晶殼斷裂成坑，是 gathering blocker。, coastal flats connector, salt glare, humid wind and shallow water hazard, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 36,
    "worldY": 10
  },
  "saltwind_flats_fill_37_8": {
    "id": "saltwind_flats_fill_37_8",
    "name": "潮望遺跡北熱沙封",
    "zone": "saltwind_flats",
    "description": "潮望遺跡北熱沙封位在潮望遺跡北側，南面斷牆被鹽霧磨白，西邊海蛇軌跡壓出長長凹線。熱沙裡露出鹽晶碎片、潮玻璃與破陶片，但濕沙下持續蒸騰熱氣，這裡是純 blocker，阻止玩家從遺跡背面繞行。",
    "image": "saltwind_flats_fill_37_8.png",
    "imagePrompt": "潮望遺跡北熱沙封 saltwind_flats_fill_37_8 in saltwind_flats 鹽風灘, room function danger pocket, terrain salt flats beach road, wet hot sand, salt crystals, shallow tide pools, white glare and humid sea wind, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 潮望遺跡北熱沙封位在潮望遺跡北側，南面斷牆被鹽霧磨白，西邊海蛇軌跡壓出長長凹線。熱沙裡露出鹽晶碎片、潮玻璃與破陶片，但濕沙下持續蒸騰熱氣，這裡是純 blocker，阻止玩家從遺跡背面繞行。, coastal flats connector, salt glare, humid wind and shallow water hazard, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 37,
    "worldY": 8
  },
  "sapphire_lake_fill_14_10": {
    "id": "sapphire_lake_fill_14_10",
    "name": "沉遺入口東湖草封",
    "zone": "sapphire_lake",
    "description": "沉遺入口東湖草封位在藍寶石湖北西側，西面古遺跡沉入口的黑石在水下發亮，北側燈籠碼頭映著暖光，東邊礦泉水聲清亮。這裡是 border gathering blocker，湖草可採，但水下石階封住遺跡側路。",
    "image": "sapphire_lake_fill_14_10.png",
    "imagePrompt": "沉遺入口東湖草封 sapphire_lake_fill_14_10 in sapphire_lake 藍寶湖, room function danger pocket, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 沉遺入口東湖草封位在藍寶石湖北西側，西面古遺跡沉入口的黑石在水下發亮，北側燈籠碼頭映著暖光，東邊礦泉水聲清亮。這裡是 border gathering blocker，湖草可採，但水下石階封住遺跡側路。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 14,
    "worldY": 10
  },
  "sapphire_lake_fill_17_9": {
    "id": "sapphire_lake_fill_17_9",
    "name": "藍蘆玻魚湖岸路",
    "zone": "sapphire_lake",
    "description": "藍蘆玻魚湖岸路是藍蘆葦帶與玻魚灣之間的採集 route，北面水囊窪地有氣泡上浮，南側靈鏡水面倒映遠山。湖岸碎石穩定，路旁可採藍蘆芯與細水晶砂。",
    "image": "sapphire_lake_fill_17_9.png",
    "imagePrompt": "藍蘆玻魚湖岸路 sapphire_lake_fill_17_9 in sapphire_lake 藍寶湖, room function resource path, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: west toward 藍蘆葦帶, east toward 玻魚灣, source room details: 藍蘆玻魚湖岸路是藍蘆葦帶與玻魚灣之間的採集 route，北面水囊窪地有氣泡上浮，南側靈鏡水面倒映遠山。湖岸碎石穩定，路旁可採藍蘆芯與細水晶砂。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "sapphire_lake_blue_reed_bed",
        "description": "沿藍蘆水痕繞過濕石，西返藍蘆葦帶。"
      },
      {
        "direction": "east",
        "targetRoomId": "sapphire_lake_glassfish_cove",
        "description": "順透明魚影東行，接入玻魚灣。"
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
    "description": "月沼北汊貼著月光濕地北緣，北側湖岸被黑水切斷，南面沉木橋露出一排濕滑木脊。草叢間有霧氣與水草採集痕跡，這裡是北側短路線端點，必須沿南側木脊回到主路。",
    "image": "moonlit_fen_fill_18_13.png",
    "imagePrompt": "月沼北汊 moonlit_fen_fill_18_13 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: south toward 沉木橋, north toward locked boundary, source room details: 月沼北汊貼著月光濕地北緣，北側湖岸被黑水切斷，南面沉木橋露出一排濕滑木脊。草叢間有霧氣與水草採集痕跡，這裡是北側短路線端點，必須沿南側木脊回到主路。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_sunken_log_bridge",
        "description": "南側沿濕滑沉木木脊下行，回到沉木橋主路"
      },
      {
        "direction": "north",
        "targetRoomId": "",
        "locked": true,
        "description": "北側黑水切斷湖岸，沒有能站穩的踏點"
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
    "name": "深脈東側水草封",
    "zone": "sapphire_lake",
    "description": "深脈東側水草封貼著深脈窗口東面，西側藍光從水下礦脈透出，北面沉沒石階沒入淺水。湖草與礦砂堆成濕滑斜坡，是採集 blocker，可採藍砂苔與碎晶，不作通路。",
    "image": "sapphire_lake_fill_19_10.png",
    "imagePrompt": "深脈東側水草封 sapphire_lake_fill_19_10 in sapphire_lake 藍寶湖, room function danger pocket, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 深脈東側水草封貼著深脈窗口東面，西側藍光從水下礦脈透出，北面沉沒石階沒入淺水。湖草與礦砂堆成濕滑斜坡，是採集 blocker，可採藍砂苔與碎晶，不作通路。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "沉木北橋用三根半沉木橫過淺水，北側黑水汊道被霧氣封住，南面舊舟營傳來蟲鳴與槳影。木縫間長著濕地草藥，這裡是北側路線與採集邊界，不是寬闊安全橋面。",
    "image": "moonlit_fen_fill_19_13.png",
    "imagePrompt": "沉木北橋 moonlit_fen_fill_19_13 in moonlit_fen 月光濕地, room function connector, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: south toward 舊舟營, source room details: 沉木北橋用三根半沉木橫過淺水，北側黑水汊道被霧氣封住，南面舊舟營傳來蟲鳴與槳影。木縫間長著濕地草藥，這裡是北側路線與採集邊界，不是寬闊安全橋面。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_old_canoe_camp",
        "description": "南側踏過半沉木橋，接向舊舟營的乾泥岸"
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
    "description": "舊舟北營把破獨木舟拖在泥岸旁，北側黑水和蘆葦圍住退路，南面月光水道仍有可辨認的草墩。這裡是北界路線端點，玩家可沿南側水道返回，不應把北岸當成新通路。",
    "image": "moonlit_fen_fill_20_13.png",
    "imagePrompt": "舊舟北營 moonlit_fen_fill_20_13 in moonlit_fen 月光濕地, room function danger pocket, terrain moonlit wetland path, reeds, black water channels, drowned logs, silver water light and soft marsh haze, visible path cues: south toward 月光水道, north toward locked boundary, source room details: 舊舟北營把破獨木舟拖在泥岸旁，北側黑水和蘆葦圍住退路，南面月光水道仍有可辨認的草墩。這裡是北界路線端點，玩家可沿南側水道返回，不應把北岸當成新通路。, soft moonlit fen danger, wet ground and hidden water channels, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "moonlit_fen_fill_20_14",
        "description": "南側循破舟拖痕下到月光水道的安全草墩"
      },
      {
        "direction": "north",
        "targetRoomId": "",
        "locked": true,
        "description": "北側黑水與蘆葦封住泥岸，獨木舟已不能下水"
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
    "name": "隱渠東側礦草界",
    "zone": "sapphire_lake",
    "description": "隱渠東側礦草界位在湖濱鎮隱渠東面，西側暗渠水聲被石蓋壓低，南方藍寶礦脈閃出冷光，東邊睡蓮藏點浮著大片葉影。這裡是邊界採集 blocker，礦草可採，但不開回鎮內暗渠路線。",
    "image": "sapphire_lake_fill_20_7.png",
    "imagePrompt": "隱渠東側礦草界 sapphire_lake_fill_20_7 in sapphire_lake 藍寶湖, room function danger pocket, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 隱渠東側礦草界位在湖濱鎮隱渠東面，西側暗渠水聲被石蓋壓低，南方藍寶礦脈閃出冷光，東邊睡蓮藏點浮著大片葉影。這裡是邊界採集 blocker，礦草可採，但不開回鎮內暗渠路線。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 0,
    "worldX": 20,
    "worldY": 7
  },
  "sapphire_lake_fill_21_8": {
    "id": "sapphire_lake_fill_21_8",
    "name": "礦脈睡蓮湖岸路",
    "zone": "sapphire_lake",
    "description": "礦脈睡蓮湖岸路位在湖東側內灣，西面藍寶礦脈露出濕石，北方睡蓮藏點浮著白花，東邊可望見競技城牆水影。這裡是採集 route，連接礦脈與睡蓮藏點，湖岸邊可採晶砂與蓮莖。",
    "image": "sapphire_lake_fill_21_8.png",
    "imagePrompt": "礦脈睡蓮湖岸路 sapphire_lake_fill_21_8 in sapphire_lake 藍寶湖, room function resource path, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: west toward 藍寶礦脈, north toward 睡蓮藏點, source room details: 礦脈睡蓮湖岸路位在湖東側內灣，西面藍寶礦脈露出濕石，北方睡蓮藏點浮著白花，東邊可望見競技城牆水影。這裡是採集 route，連接礦脈與睡蓮藏點，湖岸邊可採晶砂與蓮莖。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "sapphire_lake_sapphire_lode",
        "description": "沿藍光濕石繞過湖草，西返藍寶礦脈。"
      },
      {
        "direction": "north",
        "targetRoomId": "sapphire_lake_lily_cache",
        "description": "踩過浮葉邊緣北接睡蓮藏點。"
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
    "name": "競技大門西湖草界",
    "zone": "sapphire_lake",
    "description": "競技大門西湖草界位在藍寶石湖東北緣，西面睡蓮藏點仍有白花香，南側湖岸轉向競技城牆，東邊可見競技區大門石階。這裡是跨區邊界採集路線，湖草可採，主要銜接湖岸與競技場入口。",
    "image": "sapphire_lake_fill_22_7.png",
    "imagePrompt": "競技大門西湖草界 sapphire_lake_fill_22_7 in sapphire_lake 藍寶湖, room function resource path, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: east toward 競技城門, source room details: 競技大門西湖草界位在藍寶石湖東北緣，西面睡蓮藏點仍有白花香，南側湖岸轉向競技城牆，東邊可見競技區大門石階。這裡是跨區邊界採集路線，湖草可採，主要銜接湖岸與競技場入口。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_grand_gate",
        "description": "沿湖草與石階東行，穿過水岸旗標後抵達競技區大門。"
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
    "name": "冠軍牆西湖棧橋",
    "zone": "sapphire_lake",
    "description": "冠軍牆西湖棧橋架在藍寶石湖東岸，北面競技大門水草界可作地標，南面勝利拱湖草灘延伸，東側冠軍牆倒映在水面。這裡是跨區邊界採集路線，棧橋邊有晶化水藻可採，專門銜接湖岸與牆下步道。",
    "image": "sapphire_lake_fill_22_8.png",
    "imagePrompt": "冠軍牆西湖棧橋 sapphire_lake_fill_22_8 in sapphire_lake 藍寶湖, room function resource path, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: east toward 冠軍牆, source room details: 冠軍牆西湖棧橋架在藍寶石湖東岸，北面競技大門水草界可作地標，南面勝利拱湖草灘延伸，東側冠軍牆倒映在水面。這裡是跨區邊界採集路線，棧橋邊有晶化水藻可採，專門銜接湖岸與牆下步道。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_champion_wall",
        "description": "踏過湖棧橋向東，沿冠軍旗影抵達競技區冠軍牆。"
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
    "name": "勝利拱西湖草灘",
    "zone": "sapphire_lake",
    "description": "勝利拱西湖草灘位在競技區西側水岸，北面冠軍牆湖棧橋仍有水光，東邊勝利拱門的石影壓在草灘上。這裡是跨區邊界採集路線，湖草與晶砂可採，專門銜接湖岸與競技拱門。",
    "image": "sapphire_lake_fill_22_9.png",
    "imagePrompt": "勝利拱西湖草灘 sapphire_lake_fill_22_9 in sapphire_lake 藍寶湖, room function resource path, terrain sapphire lake shore, grass bank, clear blue water, reeds, small jetty planks and reflected lake light, visible path cues: east toward 勝利拱, source room details: 勝利拱西湖草灘位在競技區西側水岸，北面冠軍牆湖棧橋仍有水光，東邊勝利拱門的石影壓在草灘上。這裡是跨區邊界採集路線，湖草與晶砂可採，專門銜接湖岸與競技拱門。, clear lakeshore connector, calm water edge with resource path readability, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "arena_quarter_victory_arch",
        "description": "沿勝利拱倒影與湖岸白石東行，進入競技區勝利拱門。"
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
    "name": "渡口南側封汊",
    "zone": "serpent_delta",
    "description": "渡口南側封汊位在入口渡口與白鷺標記之間，北面可聽見渡船木板聲，南側泥線轉向白鷺標記，東邊是高腳聚落外圍。分岔水流把道路切碎，這裡只作 border gathering blocker，濕泥上可採少量蛇紋蘆根。",
    "image": "serpent_delta_fill_31_15.png",
    "imagePrompt": "渡口南側封汊 serpent_delta_fill_31_15 in serpent_delta 蛇河三角洲, room function resource path, cut-off fork channel between entrance ferry and white egret marker, north ferry planks implied by rope posts, south mud line bending toward a bird marker, east stilt settlement outskirts, terrain broken water channels, snake-pattern reed roots, wet mud, dim river light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 31,
    "worldY": 15
  },
  "serpent_delta_fill_31_17": {
    "id": "serpent_delta_fill_31_17",
    "name": "白鷺南封棧",
    "zone": "serpent_delta",
    "description": "白鷺南封棧靠在白鷺標記南側，北面仍能看見羽形木牌，東側紅樹迷宮的根鬚壓進泥灘。棧板向外斷成半截，下方混水太深，這裡是純 blocker 與邊界標記，不提供可通行路線。",
    "image": "serpent_delta_fill_31_17.png",
    "imagePrompt": "白鷺南封棧 serpent_delta_fill_31_17 in serpent_delta 蛇河三角洲, room function border road, broken plank boardwalk south of a white egret marker, north feather-shaped wooden sign visible, east mangrove maze roots pressing into mudflat, terrain half-collapsed wet boards over deep cloudy water, blocked southern edge, humid green-brown light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北灰坡路線端位在火山地帶北緣，北面蛇河三角洲的濕泥被熱灰烤成硬殼，南側火山灰原冒出白色蒸氣。這裡是 route 端點，提醒玩家從濕地邊界正式踏入高熱火山路線。",
    "image": "volcano_zone_fill_31_20.png",
    "imagePrompt": "火山北灰坡 volcano_zone_fill_31_20 in volcano_zone 火山地帶, room function border road, terrain northern volcanic ash slope at wetland boundary, north serpent delta mud baked into cracked crust with toxic steam, south black ash field venting white vapor, basalt gravel and heat haze, clear north south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "volcano_ash_field",
        "description": "南側灰坡升溫並轉成黑色火山灰路，接往火山灰原"
      },
      {
        "direction": "north",
        "targetRoomId": "",
        "locked": true,
        "description": "北側濕泥被熱灰烤成脆殼並冒出毒汽，不能從火山北緣回切三角洲"
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
    "name": "紅樹南緣泥封",
    "zone": "serpent_delta",
    "description": "紅樹南緣泥封貼著紅樹迷宮南側，北面根牆密集，東邊舊堤道的石基從水草間露出。泥灘被潮水沖成軟陷坑，標示三角洲內路的 blocker 邊界，沒有安全棧道可繼續穿越。",
    "image": "serpent_delta_fill_32_18.png",
    "imagePrompt": "紅樹南緣泥封 serpent_delta_fill_32_18 in serpent_delta 蛇河三角洲, room function border road, southern edge of mangrove maze, north dense root wall, east old levee stone base showing through water grass, terrain soft sinkhole mudflat with no safe boardwalk, tide-cut pools, tangled red roots, muted swamp light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 32,
    "worldY": 18
  },
  "serpent_delta_fill_33_19": {
    "id": "serpent_delta_fill_33_19",
    "name": "舊堤南窄泥道",
    "zone": "serpent_delta",
    "description": "舊堤南窄泥道位在舊堤道南面，北側石基仍可作定位，南方蛇河邊道逐漸靠近火山岩壁。這裡是邊界 blocker，河汊把泥道擠得只剩巡視用腳點，不安排怪物或採集玩法。",
    "image": "serpent_delta_fill_33_19.png",
    "imagePrompt": "舊堤南窄泥道 serpent_delta_fill_33_19 in serpent_delta 蛇河三角洲, room function border road, narrow mud path south of the old levee, north low stone foundation landmark, south riverbank path approaching dark volcanic rock wall, terrain squeezed patrol footholds between forked channels, wet stones, brown water, heavy humid sky, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 5,
    "worldX": 33,
    "worldY": 19
  },
  "serpent_delta_fill_33_20": {
    "id": "serpent_delta_fill_33_20",
    "name": "矮礦北口泥岸",
    "zone": "serpent_delta",
    "description": "矮礦北口泥岸位在蛇河三角洲南緣，北面接舊堤南窄泥道，南面火山岩壁開著矮人礦坑入口，鐵鏽味與濕泥味混在一起。這裡是跨區 border gathering 點，泥岸上可採含鐵水苔，但主要功能是標示前往矮人礦坑的邊界。",
    "image": "serpent_delta_fill_33_20.png",
    "imagePrompt": "矮礦北口泥岸 serpent_delta_fill_33_20 in serpent_delta 蛇河三角洲, room function border road, muddy north bank at dwarf mine entrance, north narrow old levee mud path, south volcanic rock wall with a low mine mouth, terrain iron-stained water moss, rust-red wet stone, river mud, cross-zone wetland to mine transition, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "dwarf_mine",
        "description": "沿含鐵水苔覆蓋的泥岸南行，進入矮人礦坑北口。"
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
    "name": "鱗網北側汊口",
    "zone": "serpent_delta",
    "description": "鱗網北側汊口位在泥魚池與鱗網場之間，南面能看見曬網木架，西邊淺水灘有泥魚翻動痕。潮水在此分成幾條短汊，這裡只作採集 blocker，水邊可採破網纏住的河藻與魚鱗碎片。",
    "image": "serpent_delta_fill_34_14.png",
    "imagePrompt": "鱗網北側汊口 serpent_delta_fill_34_14 in serpent_delta 蛇河三角洲, room function resource path, forked channel north of scale-net yard, south drying net racks visible, west shallow mudfish churn marks, terrain short tidal forks, broken fishing net tangled with river algae, fish-scale fragments, wet mud and reed shadows, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 34,
    "worldY": 14
  },
  "serpent_delta_fill_35_15": {
    "id": "serpent_delta_fill_35_15",
    "name": "穀倉北濕泥界",
    "zone": "serpent_delta",
    "description": "穀倉北濕泥界壓在淹水穀倉北側，南面腐木牆與穀袋殘片半沉在水裡，西側鱗網場仍有細繩晃動。這裡是 border gathering blocker，濕泥裡能採到發芽穀粒與水苔，但道路被倒塌木梁截斷。",
    "image": "serpent_delta_fill_35_15.png",
    "imagePrompt": "穀倉北濕泥界 serpent_delta_fill_35_15 in serpent_delta 蛇河三角洲, room function resource path, wet mud boundary north of flooded granary, south rotten wooden wall and half-submerged grain sacks, west thin ropes of scale-net yard, terrain sprouting grain in mud, water moss, collapsed beams cutting off the path, damp ochre light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 1,
    "worldX": 35,
    "worldY": 15
  },
  "serpent_delta_fill_36_17": {
    "id": "serpent_delta_fill_36_17",
    "name": "月釣東側斷棧",
    "zone": "serpent_delta",
    "description": "月釣東側斷棧橋位在月光釣棚東邊，西面魚燈仍映在水面，南側多口匯流處傳來水流碰撞聲。木棧橋在這裡被洪水扯斷，只作純 blocker 與地形邊界，提醒玩家不要把釣棚路線誤認為可向東延伸。",
    "image": "serpent_delta_fill_36_17.png",
    "imagePrompt": "月釣東側斷棧 serpent_delta_fill_36_17 in serpent_delta 蛇河三角洲, room function border road, broken boardwalk east of moonlit fishing shed, west fish lantern reflection on water, south multi-channel confluence with churning current, terrain flood-torn wooden planks, open gap, wet rope ends, moonlit river mist, distinct place-focused environment composition, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 36,
    "worldY": 17
  },
  "silverpine_range_fill_0_n12": {
    "id": "silverpine_range_fill_0_n12",
    "name": "舊路銀松折口",
    "zone": "silverpine_range",
    "description": "舊路銀松折口位於銀松山脈東緣，東側野草丘陵的舊路在這裡抬升成碎石階，南面洞口風聲從岩縫傳來。坡邊有可採的銀松針與冷露苔，這裡是 border gathering route，連接丘陵與山徑。",
    "image": "silverpine_range_fill_0_n12.png",
    "imagePrompt": "舊路銀松折口 silverpine_range_fill_0_n12 in silverpine_range 銀松山脈, room function border road, eastern mountain bend where wildgrass old road rises into broken stone steps, east grassy hill road below, south wind humming from a rock cleft, terrain silver pine needles, cold dew moss, frost-dusted stones, border transition from hills to mountain path, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_old_road_cut",
        "description": "東側沿碎石階下坡，從銀松冷霧回到野草丘陵舊路切口"
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
    "name": "東坡冷露封道",
    "zone": "silverpine_range",
    "description": "東坡冷露封道夾在東側舊路折口與西側碎石山道之間，銀松針覆住斷裂階面，冷露苔沿石縫發亮。這裡有採集痕跡但沒有安全踏點，是封閉 blocker，提醒玩家回到正式山徑。",
    "image": "silverpine_range_fill_n1_n12.png",
    "imagePrompt": "東坡冷露封道 silverpine_range_fill_n1_n12 in silverpine_range 銀松山脈, room function resource path, sealed cold-dew east slope between old road bend and broken stone mountain trail, east route marker barely visible, west cracked stair face, terrain silver pine needles covering broken steps, glowing cold dew moss in stone seams, unsafe footing, pale mountain light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -1,
    "worldY": -12
  },
  "silverpine_range_fill_n2_n12": {
    "id": "silverpine_range_fill_n2_n12",
    "name": "晶礫東封坡",
    "zone": "silverpine_range",
    "description": "晶礫東封坡位於水晶碎坡東面，西側可見尖亮晶礫嵌在雪土裡，東側冷露封道已被松針蓋住。坡面可採少量銀礦碎屑，但碎石會滑落，這格是採集邊界與 blocker。",
    "image": "silverpine_range_fill_n2_n12.png",
    "imagePrompt": "晶礫東封坡 silverpine_range_fill_n2_n12 in silverpine_range 銀松山脈, room function resource path, east sealed slope beside crystal scree, west sharp bright crystal gravel embedded in snowy soil, east pine needles hiding the cold-dew sealed way, terrain loose sliding stones, silver ore flecks, frosted dirt, steep blocked slope, cold blue-white light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 2,
    "worldX": -2,
    "worldY": -12
  },
  "silverpine_range_fill_n4_n10": {
    "id": "silverpine_range_fill_n4_n10",
    "name": "觀星脊西雪道",
    "zone": "silverpine_range",
    "description": "觀星脊西雪道位於雪線上方的山腰，北側雪崩盆地有碎冰堆，西面銀脂雪道繼續穿過松根，東側觀星脊露出高處石台。這裡是 gathering route，雪縫旁能看見少量冷苔採集痕。",
    "image": "silverpine_range_fill_n4_n10.png",
    "imagePrompt": "觀星脊西雪道 silverpine_range_fill_n4_n10 in silverpine_range 銀松山脈, room function resource path, snowy trail west of Starwatch Ridge above the snowline, north avalanche basin with broken ice piles, west silver-sap snow road through pine roots, east high stone platform of the ridge, terrain snow cracks, cold moss, glittering scree, crisp alpine light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_fill_n5_n10",
        "description": "西側沿松根雪痕返回銀脂雪道中段"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_starwatch_ridge",
        "description": "東側踏過亮晶碎石，登上觀星脊石台"
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
    "name": "霜草崖東封坡",
    "zone": "silverpine_range",
    "description": "霜草崖東封坡靠近霜草岩架，西側草葉結成白霜，南面獸痕刮過淺雪。坡頂有可採的霜草與銀松枝，但東側碎石崖鬆動，這裡是採集 blocker，不接出新路。",
    "image": "silverpine_range_fill_n4_n14.png",
    "imagePrompt": "霜草崖東封坡 silverpine_range_fill_n4_n14 in silverpine_range 銀松山脈, room function resource path, east sealed slope near frostgrass ledge, west white-frost grass blades, south beast scratches across shallow snow, terrain loose scree cliff, harvestable frost grass and silver pine branches, broken east edge, sharp mountain wind, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 0,
    "worldX": -4,
    "worldY": -14
  },
  "silverpine_range_fill_n5_n10": {
    "id": "silverpine_range_fill_n5_n10",
    "name": "銀脂中段雪道",
    "zone": "silverpine_range",
    "description": "銀脂中段雪道夾在西側銀脂林與東側觀星脊西雪道之間，北面冰玻洞冷光透過松枝照到雪面。樹根旁滲出銀脂與冰苔，這裡是正式採集 route，讓玩家沿雪道逐格前進。",
    "image": "silverpine_range_fill_n5_n10.png",
    "imagePrompt": "銀脂中段雪道 silverpine_range_fill_n5_n10 in silverpine_range 銀松山脈, room function resource path, formal gathering route between the west silver-sap pine grove and east stargazer ridge snow road, north iceglass cavern cold glow filtering through pine branches, terrain compacted snow trail, silver resin roots, ice moss, mica flecks and blue-white mountain light，銀脂中段雪道夾在西側銀脂林與東側觀星脊西雪道之間，北面冰玻洞冷光透過松枝灑在雪面。畫面中央保留可行雪道，樹根旁滲出銀脂與冰苔採集點，雪面有壓實腳痕與松針，遠處松林和洞光作地標；整體是正式採集 route，不是封閉 blocker。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_fill_n6_n10",
        "description": "西側順著銀脂松根走回雪道西段"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_fill_n4_n10",
        "description": "東側越過冷光雪面前往觀星脊西雪道"
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
    "name": "銀脂西段松根",
    "zone": "silverpine_range",
    "description": "銀脂西段松根位於風切木橋南側，西面銀脂松圃樹皮泛白，北側短坡可望見通往冰玻洞的石階，東面雪道延向觀星脊。這裡是 border 採集 route，樹根間有銀脂與雪松針採集點。",
    "image": "silverpine_range_fill_n6_n10.png",
    "imagePrompt": "銀脂西段松根 silverpine_range_fill_n6_n10 in silverpine_range 銀松山脈, room function resource path, western silver-sap pine root gathering route south of the wind-cut wooden bridge, west white-barked silver sap grove, north short slope showing stone steps toward iceglass cavern, east snow road toward stargazer ridge, terrain exposed pine roots, silver resin, snow pine needles, packed snow and cold forest mist，銀脂西段松根位於風切木橋南側，西面銀脂松圃樹皮泛白，北側短坡可望見通往冰玻洞的石階，東面雪道延向觀星脊。前景要有發亮松根、銀脂、雪松針與採集痕，雪道保持可走，冷藍洞光與松林陰影分層，清楚呈現 border 採集 route。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_silver_sap_grove",
        "description": "西側沿發亮松根進入銀脂松圃"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_fill_n5_n10",
        "description": "東側踏過壓實雪痕前往銀脂中段雪道"
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
    "name": "風削冰洞石階",
    "zone": "silverpine_range",
    "description": "風削冰洞石階橫在風切木橋與冰玻洞之間，北側雲母折坡灑下碎光，南面銀脂雪道有松根露出。石階邊能採到冰苔與銀屑，這裡是 gathering route，承接橋面到洞口的正式通道。",
    "image": "silverpine_range_fill_n6_n11.png",
    "imagePrompt": "風削冰洞石階 silverpine_range_fill_n6_n11 in silverpine_range 銀松山脈, room function resource path, wind-carved stone steps between windcut bridge and iceglass cavern, north mica folded slope scattering light, south silver-sap snow road with exposed pine roots, terrain icy steps, ice moss, silver flakes, blue cave glow ahead, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "silverpine_range_windcut_bridge",
        "description": "西側沿風削石階返回風切木橋"
      },
      {
        "direction": "east",
        "targetRoomId": "silverpine_range_iceglass_cavern",
        "description": "東側順著冰光岩壁進入冰玻洞口"
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
    "name": "草架西封雪坡",
    "zone": "silverpine_range",
    "description": "草架西封雪坡在草藥岩架西側形成斷面，南面可見藥草棚的木釘，東面霜草岩架覆著白霜。坡上有可採的霜葉與松針，但雪層下方空洞，這裡是採集 blocker。",
    "image": "silverpine_range_fill_n6_n14.png",
    "imagePrompt": "草架西封雪坡 silverpine_range_fill_n6_n14 in silverpine_range 銀松山脈, room function resource path, west sealed snow slope beside herb rock ledge, south wooden pegs of a herb rack, east frostgrass ledge under white rime, terrain hollow snow crust, frost leaves, pine needles, broken slope lip, cold overcast mountain light, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 0,
    "worldX": -6,
    "worldY": -14
  },
  "silverpine_range_fill_n7_n9": {
    "id": "silverpine_range_fill_n7_n9",
    "name": "松圃南補給封坡",
    "zone": "silverpine_range",
    "description": "松圃南補給封坡位於銀脂松圃南面，北側能聞到樹脂香，西面松林小路旁有舊補給繩樁。坡下散落可採松脂與冷露苔，但碎石不穩，這格是 service gathering blocker。",
    "image": "silverpine_range_fill_n7_n9.png",
    "imagePrompt": "松圃南補給封坡 silverpine_range_fill_n7_n9 in silverpine_range 銀松山脈, room function resource path, south supply sealed slope below the silver-sap pine grove, north resin-scented trees, west old supply rope posts beside a pine forest path, terrain loose stones, scattered pine resin, cold dew moss, snow-dusted service cache remains, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -7,
    "worldY": -9
  },
  "silverpine_range_fill_n8_n11": {
    "id": "silverpine_range_fill_n8_n11",
    "name": "雪線門東封坡",
    "zone": "silverpine_range",
    "description": "雪線門東封坡貼著銀松山脈西側，北面雪線門的木牌被冰霜覆住，東側風切木橋在霧中搖晃。坡上有少量冰苔可採，但石面被霜裂切斷，是封閉 gathering blocker。",
    "image": "silverpine_range_fill_n8_n11.png",
    "imagePrompt": "雪線門東封坡 silverpine_range_fill_n8_n11 in silverpine_range 銀松山脈, room function resource path, east sealed slope near the snowline gate on the west mountain side, north frost-covered wooden gate sign, east windcut bridge swaying in mist, terrain frost-cracked rock face, ice moss patches, blocked stone surface, pale fog and pine silhouettes, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": -8,
    "worldY": -11
  },
  "silverpine_range_fill_n8_n14": {
    "id": "silverpine_range_fill_n8_n14",
    "name": "入山礦權封坡",
    "zone": "silverpine_range",
    "description": "入山礦權封坡位於銀松西北角，南側入山礦權木樁半埋在雪裡，西面風嘯山口傳來高原風。坡面有銀礦碎屑可採，但礦道被落石封死，這裡是採集 blocker。",
    "image": "silverpine_range_fill_n8_n14.png",
    "imagePrompt": "入山礦權封坡 silverpine_range_fill_n8_n14 in silverpine_range 銀松山脈, room function resource path, northwest mining claim sealed slope, south half-buried wooden claim stakes in snow, west wind from Storm Pass, terrain fallen rocks sealing a mine track, silver ore chips on frosted slope, high alpine gusts and dim sky, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 0,
    "worldX": -8,
    "worldY": -14
  },
  "silverpine_range_fill_n8_n8": {
    "id": "silverpine_range_fill_n8_n8",
    "name": "獵場北界雪柵",
    "zone": "silverpine_range",
    "description": "獵場北界雪柵位於銀松山脈西南緣，北側松林小路被雪霧包住，南面可望見王家獵場許可木屋的屋頂。雪柵後的石縫長著冷露苔與銀松針，木牌掛著禁止越界的紅繩，這裡是 border gathering blocker，只標示獵場邊界，不提供跨區通行。",
    "image": "silverpine_range_fill_n8_n8.png",
    "imagePrompt": "獵場北界雪柵 silverpine_range_fill_n8_n8 in silverpine_range 銀松山脈, room function border road, snowy fence at the northern boundary of the royal hunting grounds, north pine path swallowed by snow mist, south roof of a permit lodge visible below, terrain red boundary rope, wooden no-crossing sign without readable text, cold dew moss and silver pine needles in rock seams, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 6,
    "worldX": -8,
    "worldY": -8
  },
  "silverpine_range_fill_n8_n9": {
    "id": "silverpine_range_fill_n8_n9",
    "name": "西南松徑補給欄",
    "zone": "silverpine_range",
    "description": "西南松徑補給欄位於獵場北界雪柵上方，南側雪柵標示邊界，東面松圃南封坡旁有舊補給繩樁。欄內放著採集用麻袋、銀松針束與冷露苔小瓶，但道路被雪樁擋住，是 service gathering blocker。",
    "image": "silverpine_range_fill_n8_n9.png",
    "imagePrompt": "西南松徑補給欄 silverpine_range_fill_n8_n9 in silverpine_range 銀松山脈, room function resource path, southwest pine trail supply pen above the hunting-ground snow fence, south boundary fence, east old supply rope posts near pine-grove sealed slope, terrain burlap gathering sacks, bundles of silver pine needles, small cold-dew moss bottles, snow stakes blocking the road, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 5,
    "worldX": -8,
    "worldY": -9
  },
  "starter_village_ext_fill_0_n3": {
    "id": "starter_village_ext_fill_0_n3",
    "name": "斷橋南溪草封",
    "zone": "starter_village_ext",
    "description": "斷橋南溪草封位在村外斷橋南側，北面破橋木樁倒在溪水裡，東邊炭窯煙灰落在草叢上。泥土小路被溪草與碎木堵住，是 service gathering blocker，只保留採集乾草與檢查橋況的空地。",
    "image": "starter_village_ext_fill_0_n3.png",
    "imagePrompt": "斷橋南溪草封 starter_village_ext_fill_0_n3 in starter_village_ext 新手村外圍, room function resource path, muddy creek grass clearing south of broken bridge, north collapsed bridge posts in water, east charcoal kiln ash on grass, splintered wood blocks the dirt path, clear north east terrain cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 3,
    "worldX": 0,
    "worldY": -3
  },
  "starter_village_ext_fill_1_n1": {
    "id": "starter_village_ext_fill_1_n1",
    "name": "旅店北田埂路牌",
    "zone": "starter_village_ext",
    "description": "旅店北田埂路牌位在新手村旅店北面，北側村外草徑延向炭窯與墓園邊界，東邊鄉間草路接向冒險者公會後方。路牌標示這裡是回村 border service route，只連接旅店後門與村外田埂。",
    "image": "starter_village_ext_fill_1_n1.png",
    "imagePrompt": "旅店北田埂路牌 starter_village_ext_fill_1_n1 in starter_village_ext 新手村外圍, room function border road, field ridge sign north of village inn, south inn rear door, north grass track toward charcoal kiln and graveyard, east countryside path to guild back area, clear south north east path cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_inn",
        "description": "沿田埂路牌與旅店後牆南行，回到新手村旅店後門。"
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
    "name": "墓園西側炭草界",
    "zone": "starter_village_ext",
    "description": "墓園西側炭草界位在炭窯南面與墓園深處西側，北面炭窯煙灰落在泥土上，南側旅店北田埂路牌仍可看見木牌。這裡是 border gathering blocker，可採焦草與乾柴，但不開往墓園捷徑。",
    "image": "starter_village_ext_fill_1_n2.png",
    "imagePrompt": "墓園西側炭草界 starter_village_ext_fill_1_n2 in starter_village_ext 新手村外圍, room function resource path, charred grass boundary west of graveyard and south of charcoal kiln, north kiln ash on dirt, south field-ridge sign visible, east graveyard gloom blocked by burnt grass, clear north south east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 1,
    "worldY": -2
  },
  "starter_village_ext_fill_2_n1": {
    "id": "starter_village_ext_fill_2_n1",
    "name": "公會北鄉間路標",
    "zone": "starter_village_ext",
    "description": "公會北鄉間路標位在冒險者公會北面，北側墓園深處陰氣壓著草坡，西面旅店北田埂路牌可作回村指引，東側通往舊圖書館後方。這裡是 border gathering route，草徑可採野草籽，主要銜接公會後門。",
    "image": "starter_village_ext_fill_2_n1.png",
    "imagePrompt": "公會北鄉間路標 starter_village_ext_fill_2_n1 in starter_village_ext 新手村外圍, room function border road, countryside signpost north of adventurer guild, south guild rear yard, north graveyard mist slope, west inn field sign, east grass path toward old library, wild grass seed gathering edge, clear north south east west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "adventurer_guild",
        "description": "沿公會木牌與踩實草徑穿過後院，南行回到冒險者公會。"
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
    "name": "舊圖書館北後勤路",
    "zone": "starter_village_ext",
    "description": "舊圖書館北後勤路位在舊圖書館北側，北面空心樹樁旁有落葉堆，西側公會北路標連著村外草徑，東邊柳祠北路逐漸變濕。這裡是 border service route，標示圖書館後門補給線與村外邊界。",
    "image": "starter_village_ext_fill_3_n1.png",
    "imagePrompt": "舊圖書館北後勤路 starter_village_ext_fill_3_n1 in starter_village_ext 新手村外圍, room function border road, service route north of old village library, south library rear supply door and book crates, north hollow stump with leaf piles, west guild marker, east damp willow shrine path, clear direction cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_old_library",
        "description": "沿後勤木牌與舊書箱車轍南行，回到新手村舊圖書館。"
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
    "name": "果園北溪草補給坡",
    "zone": "starter_village_ext",
    "description": "果園北溪草補給坡位在村溪東側與果園北邊，南面果樹枝葉越過籬笆，西側溪水帶來濕泥氣味。坡上堆著採果籃與草繩，是 service gathering blocker，可採野草與補給繩，不作道路。",
    "image": "starter_village_ext_fill_3_n6.png",
    "imagePrompt": "果園北溪草補給坡 starter_village_ext_fill_3_n6 in starter_village_ext 新手村外圍, room function resource path, supply slope north of orchard and east of village creek, south fruit trees over fence, west creek mud, baskets and grass ropes on blocked grassy slope, clear south west terrain cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 3,
    "worldY": -6
  },
  "starter_village_ext_fill_4_n1": {
    "id": "starter_village_ext_fill_4_n1",
    "name": "禮拜堂北柳祠路界",
    "zone": "starter_village_ext",
    "description": "禮拜堂北柳祠路界位在新手村禮拜堂北面，北側柳樹小祠垂著濕枝，西面舊圖書館後勤路仍有木牌。這裡是 border gathering route，溪邊草與柳葉可採，主要銜接禮拜堂後門與村外濕草邊界。",
    "image": "starter_village_ext_fill_4_n1.png",
    "imagePrompt": "禮拜堂北柳祠路界 starter_village_ext_fill_4_n1 in starter_village_ext 新手村外圍, room function border road, willow shrine boundary north of village chapel, south chapel rear stones, north small willow shrine with wet branches, west old library service marker, damp creek grass and willow leaves, clear north south west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "starter_village_chapel",
        "description": "沿柳枝與石板小徑穿過後院南行，回到新手村禮拜堂。"
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
    "name": "溪階傳送低地小徑",
    "zone": "starter_village",
    "description": "溪階傳送低地小徑鋪著潮濕青石板，西面溪畔石階能聽見水聲，東側傳送祠堂透出藍光，兩旁低木柵隔開民宅菜圃。這裡是安全 route，專門銜接新手村低地服務點。",
    "image": "starter_village_fill_1_3.png",
    "imagePrompt": "溪階傳送低地小徑 starter_village_fill_1_3 in starter_village 新手村, room function connector, wet bluestone path between west creek stone steps and east blue-glowing portal shrine, low cottage fences, vegetable plots, creek mist and village lantern light, clear east west route cue, safe lowland service connector, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "starter_village_river_stairs",
        "description": "沿低地青石小徑向西，可回到靠溪水聲的溪畔石階"
      },
      {
        "direction": "east",
        "targetRoomId": "starter_village_portal_shrine",
        "description": "沿低地青石小徑向東，可接到藍光明顯的新手村傳送祠堂"
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
    "name": "市場北後勤青石巷",
    "zone": "starter_village",
    "description": "市場北後勤青石巷位在村莊服務區後方，北面公告角落與水井小路人聲清楚，南側市場小巷飄來麵包與藥草味。平坦石路只留給村民搬貨，是安全 service blocker，不開新路。",
    "image": "starter_village_fill_3_4.png",
    "imagePrompt": "市場北後勤青石巷 starter_village_fill_3_4 in starter_village 新手村, room function town service, contained bluestone market back alley north of notice corner and well path, south market lane smell of bread and herbs, crates, low service rail and closed village lane blocker, warm lantern light, clear north south path cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 3,
    "worldY": 4
  },
  "starter_village_fill_5_3": {
    "id": "starter_village_fill_5_3",
    "name": "守衛哨西民宅木柵",
    "zone": "starter_village",
    "description": "守衛哨西民宅木柵位在新手村東側民宅旁，西面馬廄院的木門半掩，北邊守衛哨所可見火把。青石板到此被低矮木柵截斷，只作村內 blocker，避免玩家穿進住戶院落。",
    "image": "starter_village_fill_5_3.png",
    "imagePrompt": "守衛哨西民宅木柵 starter_village_fill_5_3 in starter_village 新手村, room function town service, residential bluestone lane cut off by low wooden fence, west stable yard gate half open, north guard post torch visible, cottages and private garden boundary, clear west north landmark cue, safe village blocker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 3,
    "worldX": 5,
    "worldY": 3
  },
  "starter_village_fill_6_3": {
    "id": "starter_village_fill_6_3",
    "name": "東柵月林青石界",
    "zone": "starter_village",
    "description": "東柵月林青石界位在新手村東界，西側守衛哨所與民宅木柵仍有燈火，東面翠綠平原的月光小林貼著草坡展開。這裡是 border route，青石路轉為野草，提醒新手離開安全區。",
    "image": "starter_village_fill_6_3.png",
    "imagePrompt": "東柵月林青石界 starter_village_fill_6_3 in starter_village 新手村, room function border road, east village fence where bluestone road turns into grassy slope toward plains moonlit copse, west guard post lamps and cottage fence still visible, clear east west transition cue, low saturation night lantern and moonlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "plains_moonlit_copse",
        "description": "東側青石路越過木柵後變成野草坡，接往翠綠平原的月光小林"
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
    "name": "獅鷲王峰東雷崖封",
    "zone": "storm_highlands",
    "description": "獅鷲王峰東雷崖封位在風暴高原東緣，西側可望見獅鷲王峰的黑影與狂風眼，南面雷雲沿斷崖翻滾，東方只剩碎裂岩柱。雷擊岩臺上有焦黑石徑與風暴羽殘片，但外側岩柱全被劈斷，這裡是 border blocker，明確封住外側路線不提供通行。",
    "image": "storm_highlands_fill_n10_n14.png",
    "imagePrompt": "獅鷲王峰東雷崖封 storm_highlands_fill_n10_n14 in storm_highlands 風暴高原, room function border road, eastern thunder cliff blocker, west Griffin King Peak shadow and storm eye, south thundercloud cliff, east shattered rock pillars, charred stone path and storm feathers, clear west south east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 8,
    "mapY": 1,
    "worldX": -10,
    "worldY": -14
  },
  "storm_highlands_fill_n11_n13": {
    "id": "storm_highlands_fill_n11_n13",
    "name": "天石堆東斷崖封",
    "zone": "storm_highlands",
    "description": "天石堆東斷崖封貼著高原北側碎崖，西面天石堆的石 cairn 被雨水磨亮，南側獅鷲王峰傳來長鳴。碎石道路在東邊斷成空谷，岩臺邊插著折斷風旗、警戒石柱與濕滑鐵環，雷風會把人推離崖面，不可久站，是封路 blocker。",
    "image": "storm_highlands_fill_n11_n13.png",
    "imagePrompt": "天石堆東斷崖封 storm_highlands_fill_n11_n13 in storm_highlands 風暴高原, room function border road, broken northern highland cliff beside sky-stone cairns, west rain-polished cairn field, south distant griffin peak, east gravel road falls into empty valley, warning stones and broken wind flag, clear west south east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 2,
    "worldX": -11,
    "worldY": -13
  },
  "storm_highlands_fill_n11_n15": {
    "id": "storm_highlands_fill_n11_n15",
    "name": "風暴玻礦東封脊",
    "zone": "storm_highlands",
    "description": "風暴玻礦東封脊位在高原南北風線交會處，西面風暴玻礦脈閃著藍白裂光，南側獅鷲王峰被雲牆遮住。岩脊石徑上露出可採碎玻礦屑與裂晶粉，採集只能在礦脈內側完成；東北風把外側削成危險斷口，是 blocker。",
    "image": "storm_highlands_fill_n11_n15.png",
    "imagePrompt": "風暴玻礦東封脊 storm_highlands_fill_n11_n15 in storm_highlands 風暴高原, room function resource path, terrain stone ridge and storm-glass mine vein where highland wind lines collide, west blue-white mineral vein, south cloud wall over griffin peak, northeast gust-carved broken 岩 ridge, glass ore chips on stone path, clear west south northeast cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 7,
    "mapY": 0,
    "worldX": -11,
    "worldY": -15
  },
  "storm_highlands_fill_n17_n15": {
    "id": "storm_highlands_fill_n17_n15",
    "name": "避風村南斷崖徑",
    "zone": "storm_highlands",
    "description": "避風村南斷崖徑從北側補給棚下到高原主路，南面風切小徑與峭壁入口的雲霧相連，東邊玄武岩脊擋住橫風。這裡只作村界下坡與 blocker，提醒玩家離開安全補給區。",
    "image": "storm_highlands_fill_n17_n15.png",
    "imagePrompt": "避風村南斷崖徑 storm_highlands_fill_n17_n15 in storm_highlands 風暴高原, room function border road, southern cliff path descending from Windrest village supply shed, north canvas shelter above, south windcut gravel path and misty cliff entrance, east basalt ridge blocks crosswind, clear north south east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": -17,
    "worldY": -15
  },
  "thundersteppe_fill_11_22": {
    "id": "thundersteppe_fill_11_22",
    "name": "滾雷門北封草",
    "zone": "thundersteppe",
    "description": "滾雷門北封草在草原西北側隆起，南面滾雷門的木樁仍有焦黑痕，東面野豬奔道被長草遮住。雷雲壓低後草尖放電，這裡是封閉 blocker，不提供通行或採集互動。",
    "image": "thundersteppe_fill_11_22.png",
    "imagePrompt": "滾雷門北封草 thundersteppe_fill_11_22 in thundersteppe Thunder Steppe, room function danger pocket, sealed grass mound north of Rolling Thunder Gate, south charred wooden gate stakes still visible, east boar run hidden by high grass, terrain dense charged grass, broken dark stakes, wet soil, low thunderclouds, blue sparks on grass tips and wind-flattened reeds，滾雷門北封草在草原西北側隆起，南面木樁焦痕作為滾雷門地標，東面野豬奔道被高草完全遮住。草尖在低壓雷雲下放出細小藍電，濕土與斷樁材質要清楚，前景用倒伏長草和碎木封住路線；畫面必須讀成封閉 blocker，不提供通行，也不要放採集物或可鑽縫隙。烏雲裂光從草脊後方壓下，濕草表面有冷白反光，空氣帶雷雨前的沉悶灰霧，讓地標與封路意圖更明確。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 1,
    "worldX": 11,
    "worldY": 22
  },
  "thundersteppe_fill_12_21": {
    "id": "thundersteppe_fill_12_21",
    "name": "雨影西北焦痕",
    "zone": "thundersteppe",
    "description": "雨影西北焦痕貼著野豬奔道北側，南面草叢道路被踩成泥線，東側雨影溝的乾風切過草面。焦土裡有雷擊草灰採集點，但裂縫太密，這裡是 gathering blocker，不能繼續穿越。",
    "image": "thundersteppe_fill_12_21.png",
    "imagePrompt": "雨影西北焦痕 thundersteppe_fill_12_21 in thundersteppe Thunder Steppe, room function resource path, scorched mark north of the boar run, south trampled grass road becomes a muddy line, east dry wind from Rainshadow Gully cuts across the grass, terrain cracked charred soil, thunder-struck ash, sparse charged grass, dust gusts and blue-white storm flicker，雨影西北焦痕貼著野豬奔道北側，南面草叢道路只剩被踩出的泥線，東側雨影溝吹來乾風。焦土裡可見雷擊草灰採集點，但裂縫太密，前景要用黑裂縫、草灰、斷根與帶電塵埃阻斷道路；冷白雷光照出焦土材質，氣氛乾燥緊繃，清楚表示這是 gathering blocker，不能繼續穿越。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。遠處野豬奔道只留模糊草影，雨影溝的乾風捲起灰塵，地標、材質與封路氣氛都要分層清楚。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 0,
    "worldX": 12,
    "worldY": 21
  },
  "thundersteppe_fill_12_25": {
    "id": "thundersteppe_fill_12_25",
    "name": "風祠北崖焦草",
    "zone": "thundersteppe",
    "description": "風祠北崖焦草在風祭小祠西北方抬高，北側鷹巢棲木露出崖影，西面小祠旗繩仍能聽見。焦草根部有可採雷種與羽片，但崖面斷裂，這裡是採集 blocker。",
    "image": "thundersteppe_fill_12_25.png",
    "imagePrompt": "風祠北崖焦草 thundersteppe_fill_12_25 in thundersteppe Thunder Steppe, room function resource path, raised scorched grass northwest of the wind shrine, north eagle perch cliff shadow, west shrine flag ropes audible in gusts, terrain burnt grass roots, broken cliff face, thunder seeds, loose feathers, wet stone and storm wind，風祠北崖焦草在風祭小祠西北方抬高，北側鷹巢棲木露出崖影，西面以被風扯動的旗繩作遠處地標。焦草根部散著可採雷種與羽片，但崖面已斷裂，前景要有崩落石、焦草根、雷光和濕亮泥面，讓採集點停在安全邊緣；構圖不能出現可攀崖路，必須讀成採集 blocker。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。遠處小祠旗繩在灰藍天光中擺動，崖邊石層有濕裂紋，風聲與高度落差要讓封閉感更明確。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 4,
    "worldX": 12,
    "worldY": 25
  },
  "thundersteppe_fill_14_21": {
    "id": "thundersteppe_fill_14_21",
    "name": "月沼南雷封界",
    "zone": "thundersteppe",
    "description": "月沼南雷封界位於雷鳴草原北緣，北面月光濕地的深水霧氣被雷風推回，南側狼崖草線變得焦黑，西面雨影溝聲音低沉。這裡是 border blocker，雷溝斷開濕地與草原，不開新路。",
    "image": "thundersteppe_fill_14_21.png",
    "imagePrompt": "月沼南雷封界 thundersteppe_fill_14_21 in thundersteppe Thunder Steppe, room function border road, thunder boundary south of Moonlight Wetland, north deep-water marsh mist pushed back by storm wind, south wolf-cliff grass line charred black, west Rainshadow Gully low sound, terrain lightning trench, wet grass, blackened ridge, moonlit fog and blue electric arcs，月沼南雷封界位於雷鳴草原北緣，北面月光濕地的深水霧氣被雷風推回，南側狼崖草線變焦黑，西面雨影溝只留低沉聲響。畫面中央雷溝要明確斷開濕地與草原，溝內有藍白電弧、濕草反光與月霧冷光；不要畫橋或踏石，這是 border blocker，不開新路。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。北側月霧帶銀白冷光，南側焦草帶黑色斷線，雷溝邊緣濕滑破碎，邊界地標要一眼可辨。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 14,
    "worldY": 21
  },
  "thundersteppe_fill_14_25": {
    "id": "thundersteppe_fill_14_25",
    "name": "雷針南封草場",
    "zone": "thundersteppe",
    "description": "雷針南封草場在避雷針田南側展開，北面鐵針尖端仍有藍火跳動，東面鷹巢峰的岩影壓到草坡。草場中央被雷擊成黑圈，這格是封閉 blocker，不安排採集或戰鬥。",
    "image": "thundersteppe_fill_14_25.png",
    "imagePrompt": "雷針南封草場 thundersteppe_fill_14_25 in thundersteppe Thunder Steppe, room function danger pocket, south of the lightning rod field, north iron rod tips flicker with blue fire, east Eagle Nest Peak shadow presses over the slope, terrain black lightning circle, wet grass, iron silhouettes, scorched soil, storm clouds and ozone haze，雷針南封草場在避雷針田南側展開，北面鐵針尖端跳著藍火，東面鷹巢峰岩影壓住草坡。草場中央被雷擊成黑圈，黑圈外有濕草、焦土、細小電火與臭氧霧，前景要以焦黑環痕封住行進方向；不要出現採集物、怪物或可走小徑，這格是封閉 blocker。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。避雷針田在北側形成暗色剪影，藍火照出鐵鏽與濕草水珠，低雲和臭氧霧壓低整體氣氛。",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": 14,
    "worldY": 25
  },
  "thundersteppe_fill_15_24": {
    "id": "thundersteppe_fill_15_24",
    "name": "天火台西南焦坡",
    "zone": "thundersteppe",
    "description": "天火台西南焦坡位於天火台南側，北面石台仍冒著熱氣，西側避雷針田的鐵影排列成線，南面鷹巢峰草坡更陡。焦土邊有雷擊草灰採集點，這裡是 gathering blocker。",
    "image": "thundersteppe_fill_15_24.png",
    "imagePrompt": "天火台西南焦坡 thundersteppe_fill_15_24 in thundersteppe Thunder Steppe, room function resource path, scorched slope south of Skyfire Platform, north hot stone platform steaming, west lightning rod field iron shadows in a line, south Eagle Nest Peak grass slope grows steep, terrain charred soil edge, thunder ash gathering marks, hot vapor, wet grass and distant blue lightning，天火台西南焦坡位於天火台南側，北面石台仍冒熱氣，西側避雷針田鐵影排列成線，南面鷹巢峰草坡突然變陡。焦土邊有雷擊草灰採集點，採集痕停在安全泥線內；前景用碎焦土、熱蒸氣、濕草和坡面斷差阻止前進，光線要混合石台熱紅與雷暴冷白，明確是 gathering blocker。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": 15,
    "worldY": 24
  },
  "thundersteppe_fill_17_22": {
    "id": "thundersteppe_fill_17_22",
    "name": "龍 storm 眼西封痕",
    "zone": "thundersteppe",
    "description": "龍 storm 眼西封痕貼近雷龍風眼北側，南面草面被旋風壓成圓環，西側雷蹄渡口的泥線斷在焦土前。黑草根能採到少量雷灰，但風壓阻斷道路，這裡是採集 blocker。",
    "image": "thundersteppe_fill_17_22.png",
    "imagePrompt": "龍 storm 眼西封痕 thundersteppe_fill_17_22 in thundersteppe Thunder Steppe, room function resource path, sealed scorch mark west of the thunder dragon storm eye, south grass pressed into a circular ring by violent wind, west Thunderhoof Ford mud line ends before charred soil, terrain black grass roots, thunder ash, circular wind pressure, storm haze and blue lightning dust，龍 storm 眼西封痕貼近雷龍風眼北側，南面草面被旋風壓成圓環，西側雷蹄渡口泥線斷在焦土前。黑草根可採少量雷灰，但風壓把道路完全阻斷；畫面要有環形倒伏草、焦黑根鬚、旋風霧牆與藍白雷塵，讓採集點停在風壓外緣，不可畫成能穿過風眼的路。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 6,
    "mapY": 1,
    "worldX": 17,
    "worldY": 22
  },
  "thundersteppe_fill_20_22": {
    "id": "thundersteppe_fill_20_22",
    "name": "灰門西雷草坡",
    "zone": "thundersteppe",
    "description": "灰門西雷草坡位於雷鳴草原東北界，南側東界雷路通往燒焦哨站，東面餘燼邊境灰門冒出熱風。草坡上有雷草與灰燼種子採集點，這裡是 border gathering route，銜接草原與焦土邊界。",
    "image": "thundersteppe_fill_20_22.png",
    "imagePrompt": "灰門西雷草坡 thundersteppe_fill_20_22 in thundersteppe Thunder Steppe, room function border road, thunder grass slope west of the Ash Gate, south eastern thunder road toward a burnt watchpost, east Ember March ash gate breathing hot wind, terrain charged grass, ash seeds, black soil, red heat haze, blue lightning and gray cinders，灰門西雷草坡位於雷鳴草原東北界，南側東界雷路通往燒焦哨站，東面餘燼邊境灰門冒出熱風。草坡上要同時有雷草採集痕與灰燼種子，冷藍電光從草根跳起，東側熱灰風帶紅色霧光，地面由濕草轉成焦土；構圖保留東向可走邊界路，清楚銜接草原與焦土。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。灰門輪廓在東側熱霧中半隱半現，雷草、灰種與黑土材質需要分明，邊界路線保持開放但危險。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_ash_gate",
        "description": "東側穿過帶電草坡與熱灰風，抵達餘燼邊境灰門"
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
    "name": "東界燒哨雷路",
    "zone": "thundersteppe",
    "description": "東界燒哨雷路是雷鳴草原通往餘燼邊境的主邊界，北側灰門草坡仍有雷草，南面玻灰草地泛著紅光，東側燒焦哨站旗杆冒煙。這裡是 border route，西側雷溝封住回切草原內圈。",
    "image": "thundersteppe_fill_20_23.png",
    "imagePrompt": "東界燒哨雷路 thundersteppe_fill_20_23 in thundersteppe Thunder Steppe, room function border road, main boundary road from Thunder Steppe to Ember March, north ash-gate grass slope still grows thundergrass, south glass-ash grassland glows red, east burnt watchpost flagpole smokes, west lightning trench blocks return into the inner steppe, terrain charged mud road, cinders, red ash haze and blue lightning，東界燒哨雷路是雷鳴草原通往餘燼邊境的主邊界，北側灰門草坡仍有雷草，南面玻灰草地泛紅，東側燒焦哨站旗杆冒煙。畫面要保留向東可走的臭氧與熱灰交界路，西側雷溝連續放電封住回切草原內圈；冷藍閃電與紅灰熱光交疊，地標清楚，沒有文字或 UI。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_burnt_watchpost",
        "description": "東側穿過臭氧與熱灰交界，抵達餘燼邊境燒焦哨站"
      },
      {
        "direction": "west",
        "targetRoomId": "",
        "locked": true,
        "description": "西側雷溝連續放電，不能從邊界路回切草原內圈"
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
    "name": "玻灰東界草地",
    "zone": "thundersteppe",
    "description": "玻灰東界草地位於雷鳴草原東南界，北面燒哨雷路有焦旗煙，東側餘燼邊境的玻灰原反射紅光。草坡裡有雷草與玻灰碎片採集點，這裡是 border gathering route，標示兩區地貌交界與採集邊界。",
    "image": "thundersteppe_fill_20_24.png",
    "imagePrompt": "玻灰東界草地 thundersteppe_fill_20_24 in thundersteppe Thunder Steppe, room function border road, grassland boundary facing Ember March glass-ash field, north burnt watchpost road with smoky flag, east red reflections from glass ash plain, terrain charged grass roots, glass-ash shards, gray-red dust, wet mud, blue lightning sparks and warm ember glow，玻灰東界草地位於雷鳴草原東南界，北面燒哨雷路有焦旗煙，東側餘燼邊境玻灰原反射紅光。草坡裡要有雷草與玻灰碎片採集點，帶電草根和紅色灰風交錯，地面從濕亮草泥逐漸轉成玻灰碎片；構圖保留東向邊界採集路，清楚標示兩區地貌交界，不要畫成封閉死路。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text。北面焦旗煙作為遠景地標，東面紅灰光照亮玻片邊緣，雷草水珠與灰塵混在一起形成交界氣氛。",
    "exits": [
      {
        "direction": "east",
        "targetRoomId": "ember_march_glass_ash_field",
        "description": "東側穿過帶電草根與紅色灰風，接上餘燼邊境玻灰原"
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
    "image": "volcano_zone_fill_31_22.png",
    "imagePrompt": "火山邊道 volcano_zone_fill_31_22 in volcano_zone 火山地帶, room function connector, terrain ash road between black ash hills and yellow sulfur mist, north volcanic ash field, south sulfur springs heat haze, cracked basalt underfoot and small steam vents beside path, clear north south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "volcano_zone_fill_32_25.png",
    "imagePrompt": "火山石路 volcano_zone_fill_32_25 in volcano_zone 火山地帶, room function connector, terrain volcanic stone road around summit sealing chains, west basalt steps, east open rocky ridge toward volcano summit, cracked black stone glowing dark red from lava light, heat jets from side fissures, clear west east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "name": "火晶噴口西封岩",
    "zone": "volcano_zone",
    "description": "火晶噴口西封岩位在火晶噴氣口西側，西面熔岩橋熱光斷續閃爍，南側玄武岩階通往火山石路。腳下岩縫定時噴出高溫白汽，這裡是 blocker，封住通往噴口背面的不穩石路。",
    "image": "volcano_zone_fill_34_24.png",
    "imagePrompt": "火晶噴口西封岩 volcano_zone_fill_34_24 in volcano_zone 火山地帶, room function danger pocket, terrain sealed basalt rock west of fire-crystal vent, west lava bridge glow, south basalt steps toward volcanic stone road, cracked ground blasting hot white steam, unstable back path blocked, clear west south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 3,
    "worldX": 34,
    "worldY": 24
  },
  "whispering_valley_fill_n3_8": {
    "id": "whispering_valley_fill_n3_8",
    "name": "舊祠南霧池封徑",
    "zone": "whispering_valley",
    "description": "舊祠南霧池封徑位在舊祠南側，北面祠柱被苔痕覆住，西邊霧池白氣沿蘆葦根滑來。濕泥把石板吞成斷面，是 border blocker，用來封住舊祠與霧池之間的外側谷底。",
    "image": "whispering_valley_fill_n3_8.png",
    "imagePrompt": "舊祠南霧池封徑 whispering_valley_fill_n3_8 in whispering_valley 低語溪谷, room function border road, terrain sealed muddy path south of old shrine, north moss-covered shrine pillars, west mist pool vapor sliding along reed roots, swallowed stone slabs and wet valley floor edge, clear north west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 4,
    "mapY": 3,
    "worldX": -3,
    "worldY": 8
  },
  "whispering_valley_fill_n4_6": {
    "id": "whispering_valley_fill_n4_6",
    "name": "冷泉南石板封",
    "zone": "whispering_valley",
    "description": "冷泉南石板封位在冷泉南側，北面泉水沿石縫結成薄霜，東邊柳樹營地掛著低垂布條，西側釣彎水聲貼著谷壁迴盪。這裡是純 blocker，濕滑石板被倒柳根截斷。",
    "image": "whispering_valley_fill_n4_6.png",
    "imagePrompt": "冷泉南石板封 whispering_valley_fill_n4_6 in whispering_valley 低語溪谷, room function danger pocket, terrain wet stone slabs south of cold spring, north blue spring water freezing in cracks, east willow camp cloth strips, west fishing bend water echo, fallen willow roots block slick path, clear north east west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 1,
    "worldX": -4,
    "worldY": 6
  },
  "whispering_valley_fill_n4_7": {
    "id": "whispering_valley_fill_n4_7",
    "name": "霧池北蘆根封地",
    "zone": "whispering_valley",
    "description": "霧池北蘆根封地夾在冷泉南石板封與霧池之間，東側舊祠低牆露出青苔，西邊藥草坡有採集繩樁。蘆根糾結成濕泥牆，是 blocker 邊界，提醒玩家沿正式谷道繞行。",
    "image": "whispering_valley_fill_n4_7.png",
    "imagePrompt": "霧池北蘆根封地 whispering_valley_fill_n4_7 in whispering_valley 低語溪谷, room function danger pocket, terrain reed-root mud wall north of mist pool, east mossy old shrine low wall, west herb slope rope stakes, south white mist pool vapor, tangled wet roots block route, clear east west south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 2,
    "worldX": -4,
    "worldY": 7
  },
  "whispering_valley_fill_n4_9": {
    "id": "whispering_valley_fill_n4_9",
    "name": "霧池南冰蕨封石",
    "zone": "whispering_valley",
    "description": "霧池南冰蕨封石位在霧池南側，北面霧水不斷漫上石板，西側冰蕨叢發出冷白光。谷底石路在這裡被濕滑苔面截斷，是純 blocker，不作南向通行路線。",
    "image": "whispering_valley_fill_n4_9.png",
    "imagePrompt": "霧池南冰蕨封石 whispering_valley_fill_n4_9 in whispering_valley 低語溪谷, room function danger pocket, terrain icy fern stones south of mist pool, north white pool vapor washing over slabs, west cold glowing fern clump, south slick moss stone blocks valley floor route, clear north west south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 4,
    "worldX": -4,
    "worldY": 9
  },
  "whispering_valley_fill_n5_11": {
    "id": "whispering_valley_fill_n5_11",
    "name": "古樹屋北瀑蘆界",
    "zone": "whispering_valley",
    "description": "古樹屋北瀑蘆界位在低語溪谷南緣，北面隱瀑水聲落進霧裡，南方古樹屋的樹根探入谷底，西側低語裂隙傳來空洞回音。這裡是邊界採集 blocker，蘆根可採集，但不開往樹屋捷徑。",
    "image": "whispering_valley_fill_n5_11.png",
    "imagePrompt": "古樹屋北瀑蘆界 whispering_valley_fill_n5_11 in whispering_valley 低語溪谷, room function resource path, terrain reed boundary north of ancient tree house near waterfall, north hidden waterfall mist, south huge tree roots and wooden dwelling silhouette, west whispering rift echo, slick reed roots gathering edge, clear north south west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 2,
    "mapY": 6,
    "worldX": -5,
    "worldY": 11
  },
  "whispering_valley_fill_n6_10": {
    "id": "whispering_valley_fill_n6_10",
    "name": "裂隙北瀑霧封",
    "zone": "whispering_valley",
    "description": "裂隙北瀑霧封位在低語裂隙北側，北面瀑布底部水聲壓過風語，東側隱瀑白霧沿石壁滑下。這裡是採集 blocker，濕石邊可採霧苔與冷蕨，但裂縫阻止繼續穿越。",
    "image": "whispering_valley_fill_n6_10.png",
    "imagePrompt": "裂隙北瀑霧封 whispering_valley_fill_n6_10 in whispering_valley 低語溪谷, room function resource path, terrain waterfall mist seal north of whispering rift, south dark rift crack with cold air, north waterfall base spray, east hidden waterfall white fog on stone wall, wet moss and cold fern gathering edge, clear south north east cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": -6,
    "worldY": 10
  },
  "whispering_valley_fill_n7_11": {
    "id": "whispering_valley_fill_n7_11",
    "name": "螢火小徑北蘆草界",
    "zone": "whispering_valley",
    "description": "螢火小徑北蘆草界位在低語溪谷西南緣，東面低語裂隙仍有回聲，南方螢火小徑閃著細小綠光。蘆葦草根把谷底泥道收成單線，這裡是跨區邊界採集路線端點，專門銜接溪谷與螢火路。",
    "image": "whispering_valley_fill_n7_11.png",
    "imagePrompt": "螢火小徑北蘆草界 whispering_valley_fill_n7_11 in whispering_valley 低語溪谷, room function border road, terrain northern reed-grass boundary of firefly trail, south blue-green fireflies along narrow path, east whispering rift echo, north reeds thicken into wet grass wall, clear south east north cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "south",
        "targetRoomId": "firefly_trail",
        "description": "沿螢光與蘆葦草倒伏痕穿過南緣泥道，進入螢火小徑。"
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
    "image": "whispering_valley_fill_n7_6.png",
    "imagePrompt": "谷底通道 whispering_valley_fill_n7_6 in whispering_valley 低語溪谷, room function connector, terrain passable valley-floor corridor with damp stone path between reeds, north ranger post trail marker, south reed road and water sound toward stone weir, old charcoal arrows on wall, clear north south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "whispering_valley_ranger_post",
        "description": "北側濕石板路回到巡林哨站"
      },
      {
        "direction": "south",
        "targetRoomId": "whispering_valley_fill_n7_7",
        "description": "南側沿低谷濕石小徑接往蘆葦路。"
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
    "image": "whispering_valley_fill_n7_7.png",
    "imagePrompt": "蘆葦路 whispering_valley_fill_n7_7 in whispering_valley 低語溪谷, room function connector, terrain passable reed road between valley-bottom corridor and stone weir, north wet stone path, south stone weir waterline, tall reeds on both sides and plank-stones underfoot, clear north south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "north",
        "targetRoomId": "whispering_valley_fill_n7_6",
        "description": "北側低谷小徑回到谷底通道"
      },
      {
        "direction": "south",
        "targetRoomId": "whispering_valley_stone_weir",
        "description": "南側穿過倒伏蘆葦石路通往石堰。"
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
    "name": "西界隱泉草封坡",
    "zone": "wildgrass_hills",
    "description": "西界隱泉草封坡卡在防風柵門南側，乾草與碎石堆成低牆，北望能見風柵木影，南面接回隱泉濕草，東側則貼著彎橡坡。這裡只保留採集風乾草籽的窄面，沒有可繼續通行的正式道路。",
    "image": "wildgrass_hills_fill_1_n10.png",
    "imagePrompt": "西界隱泉草封坡 wildgrass_hills_fill_1_n10 in wildgrass_hills 荒草丘陵, room function resource path, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，西界隱泉草封坡卡在防風柵門南側，乾草與碎石堆成低牆，北望能見風柵木影，南面接回隱泉濕草，東側則貼著彎橡坡。這裡只保留採集風乾草籽的窄面，沒有可繼續通行的正式道路。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 2,
    "worldX": 1,
    "worldY": -10
  },
  "wildgrass_hills_fill_1_n8": {
    "id": "wildgrass_hills_fill_1_n8",
    "name": "斷圖騰西封徑",
    "zone": "wildgrass_hills",
    "description": "斷圖騰西封徑是一段被高草吞沒的短坡，北側回到隱泉邊緣，東面隔著風磨碎石可看見斷圖騰的陰影。坡脊被倒伏草根封住，適合標記野草丘陵邊界，不作為主要通道使用。",
    "image": "wildgrass_hills_fill_1_n8.png",
    "imagePrompt": "斷圖騰西封徑 wildgrass_hills_fill_1_n8 in wildgrass_hills 荒草丘陵, room function danger pocket, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，斷圖騰西封徑是一段被高草吞沒的短坡，北側回到隱泉邊緣，東面隔著風磨碎石可看見斷圖騰的陰影。坡脊被倒伏草根封住，適合標記野草丘陵邊界，不作為主要通道使用。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 0,
    "mapY": 4,
    "worldX": 1,
    "worldY": -8
  },
  "wildgrass_hills_fill_2_n12": {
    "id": "wildgrass_hills_fill_2_n12",
    "name": "舊路溪切風口",
    "zone": "wildgrass_hills",
    "description": "舊路溪切風口是野草丘陵北線的正式 route，西邊的舊路切口在草浪中露出硬土，東邊溪切溝傳來碎水聲，南側低坡可作方位參照。強風穿過凹口，把往返舊路與溪溝的腳印吹得斷續卻仍可辨認。",
    "image": "wildgrass_hills_fill_2_n12.png",
    "imagePrompt": "舊路溪切風口 wildgrass_hills_fill_2_n12 in wildgrass_hills 荒草丘陵, room function connector, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，舊路溪切風口是野草丘陵北線的正式 route，西邊的舊路切口在草浪中露出硬土，東邊溪切溝傳來碎水聲，南側低坡可作方位參照。強風穿過凹口，把往返舊路與溪溝的腳印吹得斷續卻仍可辨認。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_old_road_cut",
        "description": "沿硬土風痕西行，回到舊路切口。"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_stream_cut",
        "description": "順碎石水聲東走，接上溪切溝。"
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
    "name": "村溪北界草欄",
    "zone": "wildgrass_hills",
    "description": "村溪北界草欄立在野草丘陵與村溪之間，北側高坡通向斷圖騰附近，南面可聽見村溪水聲但被草欄與警示樁隔開。這裡是邊界 blocker，用來阻止丘陵路線誤接回新手村後側。",
    "image": "wildgrass_hills_fill_2_n7.png",
    "imagePrompt": "村溪北界草欄 wildgrass_hills_fill_2_n7 in wildgrass_hills 荒草丘陵, room function danger pocket, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，村溪北界草欄立在野草丘陵與村溪之間，北側高坡通向斷圖騰附近，南面可聽見村溪水聲但被草欄與警示樁隔開。這裡是邊界 blocker，用來阻止丘陵路線誤接回新手村後側。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 1,
    "mapY": 5,
    "worldX": 2,
    "worldY": -7
  },
  "wildgrass_hills_fill_3_n8": {
    "id": "wildgrass_hills_fill_3_n8",
    "name": "圖騰東採草坡",
    "zone": "wildgrass_hills",
    "description": "圖騰東採草坡承接斷圖騰東側的草路，北邊石環露出半圈灰白石尖，東面坡線續往斷旗中央，草叢中混著可採的硬莖風草。這段同時是往風暴草冠的 route，也提供低風險採集點。",
    "image": "wildgrass_hills_fill_3_n8.png",
    "imagePrompt": "圖騰東採草坡 wildgrass_hills_fill_3_n8 in wildgrass_hills 荒草丘陵, room function connector, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，圖騰東採草坡承接斷圖騰東側的草路，北邊石環露出半圈灰白石尖，東面坡線續往斷旗中央，草叢中混著可採的硬莖風草。這段同時是往風暴草冠的 route，也提供低風險採集點。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_broken_totem",
        "description": "循倒伏草痕穿過西坡，西返斷圖騰。"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_fill_4_n8",
        "description": "沿斷旗影子東行，前往中央坡道。"
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
    "name": "溪切東側豬泥坡",
    "zone": "wildgrass_hills",
    "description": "溪切東側豬泥坡夾在溪切溝與野豬泥潭之間，西側濕石帶著溪水青苔，南面泥地被野豬踏出深坑。坡上長著可採的苦葉草，但泥坑與亂石封住外緣，只能作採集 blocker 與地形邊界。",
    "image": "wildgrass_hills_fill_4_n12.png",
    "imagePrompt": "溪切東側豬泥坡 wildgrass_hills_fill_4_n12 in wildgrass_hills 荒草丘陵, room function resource path, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，溪切東側豬泥坡夾在溪切溝與野豬泥潭之間，西側濕石帶著溪水青苔，南面泥地被野豬踏出深坑。坡上長著可採的苦葉草，但泥坑與亂石封住外緣，只能作採集 blocker 與地形邊界。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 3,
    "mapY": 0,
    "worldX": 4,
    "worldY": -12
  },
  "wildgrass_hills_fill_4_n8": {
    "id": "wildgrass_hills_fill_4_n8",
    "name": "斷旗中央坡道",
    "zone": "wildgrass_hills",
    "description": "斷旗中央坡道是圖騰草坡與風暴草冠之間的純路線 route，北側雷丘高起，破旗桿在風裡發出空響。坡面被踩出穩定土階，西行能回到圖騰東採草坡，東行則接向風冠西坡小徑。",
    "image": "wildgrass_hills_fill_4_n8.png",
    "imagePrompt": "斷旗中央坡道 wildgrass_hills_fill_4_n8 in wildgrass_hills 荒草丘陵, room function connector, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，斷旗中央坡道是圖騰草坡與風暴草冠之間的純路線 route，北側雷丘高起，破旗桿在風裡發出空響。坡面被踩出穩定土階，西行能回到圖騰東採草坡，東行則接向風冠西坡小徑。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_fill_3_n8",
        "description": "沿破旗桿影子穿過土階，西返採草坡。"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_fill_5_n8",
        "description": "踏過穩定土階東往風冠西坡。"
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
    "name": "風冠西坡小徑",
    "zone": "wildgrass_hills",
    "description": "風冠西坡小徑沿著風暴草冠西側展開，北方首領脊線像黑齒般壓在天邊，東面草冠在風中翻起銀綠色浪脊。低草土階與倒旗石牌標出安全路面，這裡是純路線 route，負責把斷旗中央坡道穩定接入風暴草冠核心。",
    "image": "wildgrass_hills_fill_5_n8.png",
    "imagePrompt": "風冠西坡小徑 wildgrass_hills_fill_5_n8 in wildgrass_hills 荒草丘陵, room function connector, terrain wind-scoured wildgrass hills, dry grass slope, broken stones, muddy footmarks, bent seed heads, low hill ridges and gray-green storm light，風冠西坡小徑沿著風暴草冠西側展開，北方首領脊線像黑齒般壓在天邊，東面草冠在風中翻起銀綠色浪脊。低草土階與倒旗石牌標出安全路面，這裡是純路線 route，負責把斷旗中央坡道穩定接入風暴草冠核心。 畫面要忠實呈現相鄰地標與方向線索，材質包含乾草、碎石、土階、草根、濕泥與風切木影；光線使用陰天冷光與草浪反光，氣氛荒涼但可辨識路線或封閉邊界。若是通路要保留清楚前景行走空間，若是 blocker 要以倒伏草根、低牆或泥坑封住外緣。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [
      {
        "direction": "west",
        "targetRoomId": "wildgrass_hills_fill_4_n8",
        "description": "沿低草土階西返斷旗中央坡道。"
      },
      {
        "direction": "east",
        "targetRoomId": "wildgrass_hills_stormgrass_crown",
        "description": "穿過風翻草浪東抵風暴草冠。"
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
    "name": "風車南採草坡",
    "zone": "wildgrass_hills",
    "description": "風車南採草坡位在破風車殼下方，北面能看見殘葉輪，南側接近風暴草冠，西邊則有首領脊線作為明顯地標。坡上散著可採的風鳴草、乾籽穗與斷裂草繩，採集點集中在木樁旁；外側草根糾結封住坡線，只作採集 blocker。",
    "image": "wildgrass_hills_fill_6_n9.png",
    "imagePrompt": "風車南採草坡 wildgrass_hills_fill_6_n9 in wildgrass_hills 荒草丘陵, room function resource path, terrain gathering grass slope below broken windmill shell, north broken rotor blades, south stormgrass crown edge, west chief ridge landmark, wind-singing grass, dry seed heads and broken grass ropes around wooden stake, clear north south west cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "silverpine_storm_pass.png",
    "imagePrompt": "風嘯山口 silverpine_storm_pass in silverpine_range 銀松山脈, room function border road, steep mountain pass climbing through a natural notch, east silverpine conifer line below, west grey Storm Highlands horizon, terrain wind-polished scree road, sheer stone walls on both sides, airborne snow grit, dangerous high pass crossing, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, grounded dark fantasy mood, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "暗林邊徑幾乎被落葉掩埋，東側能聽見暗影森林深處的濕木低響，西側則貼近黑木林幽暗腹地。腐葉與苔蘚氣味壓在樹冠下，這裡是封閉 border blocker，只標示兩片黑林的邊界。",
    "image": "darkwood_border_trail.png",
    "imagePrompt": "暗林邊徑 darkwood_border_trail in dark_forest 暗影森林, room function closed border blocker, buried leaf trail between dark forest and blackwood, east deep dark forest wet wood resonance, west blackwood interior pressing close with colder trunks, terrain fallen leaves, moss smell, overlapping root ridges and sealed two-forest boundary，葉層低處幾乎埋掉小徑，只露出短短苔石邊線，中段東側傳來暗林濕木低響，西側黑木林冷樹幹貼近形成壓迫牆，兩邊都沒有安全路標或正式出口。落葉層要厚到遮住腳印，苔石邊線很快被交疊根脊切斷，樹冠下的冷灰光讓兩片黑林互相壓合，邊界空氣要有潮濕腐葉霧，構圖只標示兩片黑林邊界並呈現封閉 border blocker, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "霜裂分界位在霜咬隘口與冰封雪原之間，南面藍冰橋仍懸在裂縫上方，北側凍土荒野展開成白色平面。腳下藍冰裂出深不見底的紋路，這裡是跨區 border blocker，只標示雪原邊界，不提供直接穿越。",
    "image": "frostbite_frozen_divide.png",
    "imagePrompt": "霜裂分界 frostbite_frozen_divide in frostbite_pass Frostbite Pass, room function frozen wastes border blocker, divide between Frostbite Pass and Frozen Wastes, south blue ice bridge suspended above a crevasse, north tundra wasteland opens into a white plain, terrain deep blue ice cracks, snow crust, abyss shadow, windblown frost and pale arctic light，霜裂分界位在隘口與冰封雪原之間，南面藍冰橋懸在裂縫上方，北側凍土荒野展開成白色平面。腳下藍冰裂出深不見底的紋路，裂縫裡只有冷藍反光與黑暗深影，雪殼在邊緣碎裂；畫面要像邊界標示而非可直接穿越的道路，清楚呈現跨區 border blocker。遠方雪原在白光中平展，近景裂縫邊緣鋒利斷開，冰面材質厚重透明，寒風捲起霜粉營造空曠孤絕氣氛。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly alpine ice pass illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "storm_highlands_windrest_portal.png",
    "imagePrompt": "避風村傳送石庭 storm_highlands_windrest_portal in storm_highlands 風暴高原, room function portal, lee hollow stone court with rough pillars around blue-white teleport circle, ropes and lightning copper bells fixed in cracks, east grass path to supply shed, south gravel slope to highland wind road, clear east south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "storm_highlands_windrest_lane.png",
    "imagePrompt": "避風村補給棚 storm_highlands_windrest_lane in storm_highlands 風暴高原, room function town service, thick canvas and highland pine supply shed, dry food crates, lightning oilcloth, repair ropes and low stone wall, west portal blue glow, north lodge door, south gravel slope to dangerous highland route, clear west north south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "image": "storm_highlands_windrest_lodge.png",
    "imagePrompt": "避風屋 storm_highlands_windrest_lodge in storm_highlands 風暴高原, room function town service, terrain rock lodge room embedded in cliff alcove, thick wooden shutters against sideways thunder rain, brazier fire, wet cloaks and simple map board, south wooden doorway back to supply shed, storm peaks outside, clear south cue, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
