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
    "name": "銀行北側監獄牆巷",
    "zone": "lakeside_town",
    "description": "銀行北側監獄牆巷位在湖畔銀行北面，南側銅門反射湖光，西邊監獄高牆投下陰影。石欄與巡邏繩封住牆根，是 service blocker，用來標示金融區與監獄區邊界。",
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
    "name": "火晶噴口西封岩",
    "zone": "volcano_zone",
    "description": "火晶噴口西封岩位在火晶噴氣口西側，西面熔岩橋熱光斷續閃爍，南側玄武岩階通往火山石路。腳下岩縫定時噴出高溫白汽，這裡是 blocker，封住通往噴口背面的不穩石路。",
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
    "description": "暗林邊徑幾乎被落葉掩埋，東側能聽見暗影森林深處的濕木低響，西側則貼近黑木林幽暗腹地。腐葉與苔蘚氣味壓在樹冠下，這裡是封閉 border blocker，只標示兩片黑林的邊界。",
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
