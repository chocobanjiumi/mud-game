import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS_PART_001: Record<string, RoomDef> = {
"amber_forest_north_portal": {
    "id": "amber_forest_north_portal",
    "name": "琥珀傳送樹庭",
    "zone": "amber_forest",
    "description": "琥珀傳送樹庭開在森林北緣的高根平台上，透明樹脂包住古老符文石，金色光線沿樹根流向中央傳送陣。東側根道繞向樹脂補給棚，南側低木橋落回北緣樹脂橋，兩條路都被蜂蜜色薄霧勾出清楚邊線。符文石旁有磨平的行腳痕、乾燥苔蘚和幾枚被樹脂封住的舊銅釘，使這裡像深林中少見的回程地標。",
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
    "description": "樹脂補給棚用琥珀色帆布與彎曲樹枝搭成，棚下掛著防蜂面罩、採集刀、封蠟藥瓶和沾滿金粉的繩標。西側根道回到琥珀傳送樹庭，棚外陰影則朝更深的樹脂林線壓過來。木桌上留著補給清單、蜂刺刮痕與幾只空瓶，暖燈照得棚內安穩，但棚腳的黏液足跡提醒補給點並非完全遠離危險，夜裡仍會傳來蜂群振翅聲。",
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
    "description": "北緣樹脂橋跨過黏稠的金色樹液溝，透明橋板被古根牢牢夾住，腳下能看見慢慢流動的蜂蜜色液面。北側橋板抬升回琥珀傳送樹庭，南側則落向採集入口界樁與森林主路，濕苔在兩端標出上下坡差。橋欄上掛著舊繩結和乾掉的樹脂滴，遠處煙菌坡的霧光若隱若現，使這段橋像安全區與深林危險之間的門檻。",
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
    "description": "石花東側金葉草封貼著石化花圃北側，南面能看見結晶花瓣露出冷白光，西側遺物坑的碎碑半埋在落葉下。金葉草長得密而硬，草根被硬化樹脂黏成一整片斜坡，只剩近處少量琥珀草籽與樹脂片可取。坡外沒有穩固落腳點，樹脂殼下還封著斷裂花莖與蜂刺，顯示這裡只是花圃邊緣的採集封坡。",
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
    "description": "深核東側樹脂封位在深琥珀核心東面，北側石化花圃透出金光，西邊核心樹根被厚樹脂包住。地面凝成透明硬殼與蜂巢狀裂紋，裂縫裡積著金苔粉和新鮮樹脂滴。外側硬化根牆層層交疊，像一圈被封死的琥珀牢籠，牆內偶爾傳來核心脈動，卻沒有能讓人穿過的縫隙，只留下狹窄採集面與幾片被壓扁的古葉。",
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
    "description": "炭林東側琥珀苔坡靠在焦木林列東面，西側黑樹樁像暗牆一樣排開，南側遺物坑露出灰黑石圈。樹根間覆著黏稠金苔與焦木樹脂，倒木壓住坡面外緣，只在近處留下可踩的苔石。苔坡下方有被甲蟲鑽空的小孔，熱氣從孔裡冒出，焦香苔粉黏在靴邊，顯示這段邊坡只能短暫採集，不能越過倒木深入。",
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
    "description": "黑木北緣金葉草道位在琥珀林南側縱線，北面樹脂小徑仍有金葉光，南面黑木邊界開始傳來陰冷氣味。落葉下藏著可辨認的金葉草根，旁邊卻有一排硬化樹根像柵欄般封住直行方向。草道盡頭的光色從蜂蜜金轉為冷灰，地面也多了狼爪般的拖痕，這裡更像跨區前的警戒斷點，而不是能直接穿過的林路。",
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
    "description": "黑木狼巢北界林路位在琥珀森林南緣，北面金葉草道仍有溫暖樹脂光，南面黑木狼巢的陰影與爪痕壓進林地。窄路兩側結著硬化樹脂，可見舊採集刀留下的刮痕，但路面中央已混入黑木腐葉和狼毛。往南的爪痕逐漸變深，樹脂光也被冷霧吞掉，讓這條邊界林路清楚顯示琥珀森林與黑木地帶的銜接。",
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
    "description": "甲蟲丘南金葉草坡位在燼甲蟲丘南面，北側土丘散著焦熱樹脂，東面深琥珀核心反射黏稠金光，南側接向狹窄樹脂小徑。草坡上長著焦香琥珀草、金葉草根與碎樹脂片，外緣卻佈滿甲蟲洞、硬根與塌陷土孔。踩近洞口時能聽見甲殼摩擦聲，說明這片坡只適合在安全邊緣採集，不能當作通往核心的捷徑。",
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
    "description": "中央樹脂草徑夾在甲蟲丘南坡與黑木北緣金葉草道之間，北面可聞到焦熱樹脂味，南側落葉顏色逐漸轉暗。草徑旁有琥珀草、樹脂珠和被蜂蠟黏住的細枝，兩側根網卻密得像牆，只留下短短一段可停留的採集面。金色光線在這裡開始衰弱，黑木方向的冷霧壓低草葉，提醒人不要把草徑誤認成真正通路。",
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
    "description": "蜂巢南金葉樹封位在封蠟蜂巢南側，北面嗡鳴聲沿空心樹洞傳來，西邊玻璃根橋的透明根脈在光下發亮。金葉樹根形成半圓屏障，根縫裡黏著蜂蠟樹脂與金葉碎片，低處還散著被啃空的蜂殼。樹根屏障後方沒有可站立的坡面，只有蜂群影子在琥珀光裡來回晃動，形成一處明顯的蜂巢邊界採集點。",
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
    "description": "補給南側樹脂草坪位於樹脂補給棚南面，北側麻袋與採集刀架仍可辨認，南面樹脂脈道發出淡金光，東西兩側分別暗示煙菌地與北橋方向。草坪長著樹脂苔和幾簇耐潮金葉草，外圈被補給繩欄與彎枝樁收束，避免人直接切入深林。繩欄上沾著蜂蠟和灰白孢粉，顯示補給點外緣已經受到森林深處影響。",
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
    "description": "樹脂門南林封貼著凝脂樹門南側，北面門柱被琥珀包成厚殼，東側玻璃根橋映出斑駁金光。林地前方被硬化樹根與樹脂瀑布截斷，瀑布後只看得見模糊根影，沒有能穿過的空隙。近處金葉草沾著樹脂滴，地面還有被黏住的蜂刺和斷繩，形成一片可短暫停留的採集前景，也清楚宣告樹門南側到此為止。",
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
    "description": "西南器械欄貼著訓練沙地外側，北面木槍架與沙袋排列成低牆，東側裁判繩圈把沙地光線切成明暗兩段。南面和西面只剩封存器械、破盾與鐵環，沒有通往看台或後勤區的空隙。沙面上有反覆折返的腳印，最深的一列朝北回到訓練場方向；木欄下方散著斷槍頭、磨平的護膝扣和被汗水浸黑的布條，讓這處邊角像訓練區最後一個沉默的收納口。",
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
    "description": "北側檢查欄立在武器寄放線外，南面傳來票券柱廊與武器檢查處混在一起的喧鬧，東西兩側則堆滿封存木箱、鎖鏈與貼著舊封條的長槍盒。鐵欄杆被磨得發亮，欄外石地卻少有人踩踏，只積著細沙與火盆灰。幾枚掉落的檢查牌半埋在箱縫中，牌面箭頭全都指回南側正式入口；北面牆根沒有門，只剩裁判巡線留下的白粉標記。",
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
    "description": "南看台封階停在一排生鏽鐵柵前，北側能隔著座席縫隙望見下注牌與沙地邊線，南面階梯則被厚重維修木板完全釘死。階面上殘留許多往返腳印，卻都在鐵柵前折回，沒有任何痕跡越過木板。欄杆旁掛著褪色布條與斷裂座號牌，火盆光只照到半截階梯，下方黑暗像被看台重量壓住，讓此處只剩高度差、回聲和退回北側通道的方向感。",
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
    "description": "南牆旗影巷靠近競技場外牆，北側高旗桿把細長影子投在石地上，影子方向能指回看台背後的正式通道。南面維修門被鐵閂扣死，門前堆著護欄、斷旗桿和蒙塵沙桶，連牆縫都被石灰抹平。巷中風聲被外牆壓得很低，偶爾只帶來場內短促歡呼；地上碎布和舊釘子全都被掃到北側牆根，像這條窄巷只允許短暫停留後折返。",
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
    "description": "南練兵封欄貼著訓練場沙坑最外圈，北面木劍敲擊聲一陣陣越過沙袋，南側維修道路卻突然下沉，被粗繩、拒馬和破盾架牢牢隔斷。欄前沙面滿是被拖回北側的腳印，拒馬尖端還纏著幾段斷麻繩。低坡下方看不見通路，只能聽見遠處石牆滴水；幾面練習盾靠在欄邊，盾背標有回收記號，說明這裡屬於訓練場外緣而非正式通道。",
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
    "description": "北側沙欄角位在決鬥場外緣，南面裁判旗架清楚可見，西側武器檢查走廊的人流聲被粗繩與木柱隔成悶響。繩結上掛著小銅鈴，只要有人碰到欄線就會輕響，提醒附近裁判注意。北面牆腳堆著多餘沙袋，東側則是沒有開口的石壁轉角；地面白線在此突然折回南方，沙粒被掃成扇形，形成一處安靜但明確的緩衝角落。",
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
    "description": "西看台陰廊夾在下層座席與訓練沙地之間，北面看台呼喊被石拱切成短促回聲，東側沙地護欄透出昏黃火光。廊口掛著臨時布幕，布面沾滿沙塵和舊酒味，底部被釘在石縫裡，無法掀開通行。牆上仍保留舊座位編號與修繕粉線，幾盞油燈只照亮潮暗石板；腳印在布幕前混亂重疊，最後全都轉向北側階梯或東側護欄外的光亮。",
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
    "description": "南看台鎖門位於座席背面，北側仍能回望階梯、下注牌與幾排空座，南側厚門則掛著暫停通行的銅牌。門面鑲著粗大鐵鉸鏈，鎖孔周圍有反覆試開留下的刮痕，卻沒有新鮮腳印越過門檻。牆角堆著舊座墊、折斷扶手與一桶凝固黑漆，像維修工匆忙離開後再也沒有回來；火光照在銅牌上，清楚把方向壓回北側看台通道。",
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
    "description": "南環拒馬道沿著競技場外圈延伸，北面選手休息棚的燈火從布簾縫中透出，南側一整排木拒馬則封住通往維修坡的低路。拒馬尖端套著鐵帽，繩結間掛有退役盾牌，任何直行路線都被切成破碎陰影。地面由緊實土與石塊混成，車輪痕在拒馬前戛然而止；若循著較乾的腳印走，只會被帶回北側休息棚與競技場外圈的安全光線。",
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
    "description": "中層看台欄位於座席轉角，西側觀眾席走廊只剩昏暗輪廓，南面欄杆外能俯看決鬥沙地和裁判旗。欄杆後方是一段狹窄落差，維修架以交錯木桿撐住破裂石階，沒有完整踏面可供下行。欄頂被無數手掌磨得發亮，欄下則積著掉落票根、瓜子殼和幾枚小銅幣；風從看台縫隙吹上來，帶著沙味，卻也把所有可辨腳印推回西側走廊。",
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
    "description": "東看台轉角被冠軍畫像與繩欄包圍，西側傳來觀眾席的層層回聲，北面則有票券柱廊的人潮像潮水般忽遠忽近。後方維修梯已被收走，只留下牆上四個深色固定孔和一截斷裂鐵鉤。轉角石地比主通道冷，灰塵沒有被頻繁踩散；幾幅畫像邊框向西傾斜，像在替迷路者指出座席方向，而東側牆面只剩封死的石縫。",
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
    "description": "東門封鎖線位於競技城區外緣，西側能回望沙地、裁判席和遠處晃動的判定旗，東面大門卻被修繕木架、粗鏈與石粉袋完全擋住。木架上掛著尚未乾透的白漆標記，地面散落鑿下的碎石，表示工程近期仍有人維護。門縫外沒有街聲，只有風把帆布吹得拍打木柱；所有輪印和腳印都在木架前轉向西側，清楚把路線帶回場內。",
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
    "description": "東側石階封口貼著看台背牆，西面仍可看見座席階梯與欄杆影子，東側石階卻被崩落碎塊、斷扶手和半截石獅堵住。碎石之間長著乾硬雜草，顯示此處已久未清理，只有牆邊巡邏腳印偶爾經過。階面殘留向西撤回的拖痕，像修繕材料被搬走時留下；高處小窗透入一束冷光，照出背牆裂縫，也照出不能繼續往東的斷面。",
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
    "description": "北東旗欄插滿決鬥旗幟，西側接近武器檢查線的鐵欄與封條，南面能看見觀眾入口石階的一角。東側外牆是一整片沒有門縫的灰石，牆根只堆著備用旗桿、沙桶和破損繩圈。旗布在高處拍打，陰影落在地面形成反覆指向西南的斜線；幾個舊銅釘釘住退役旗號，旗號背面寫著比賽日期，卻沒有任何通往城外的標記。",
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
    "description": "東看台欄門面向上層座席，西側觀眾席通道只露出階梯輪廓，東面鐵欄門則被兩道鎖鏈固定在石柱上。鎖鏈表面磨損集中在同一段，像長年被巡邏者檢查，卻從未真正開啟。門後沒有燈火，只有一小片積灰平台和落滿枯葉的排水孔；欄杆上綁著紅布警示結，布尾被風向西側吹直，替這處看台外圈留下唯一明確的回程方向。",
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
    "description": "東外牆窄巷沿競技場石牆排列，西側牆內歡呼被厚石壓成低沉震動，東側牆根堆滿封存拒馬、破旗架和用油布包住的舊欄杆。巷道狹窄到只能看見一線火光，地面沙塵被風推成細長波紋。幾支斷旗斜靠在拒馬間，旗尖全都指回西側正式路線；再往東只有無門石牆與鐵刺陰影，沒有街聲，也沒有能穿出的縫隙。",
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
    "description": "空心木橋東枯枝封貼著黑木林深處邊界，西側倒木橋腹仍傳來空洞回音，北面長老樹環的黑根垂下階梯，東南側則被枯枝棚架與濕苔根牆交錯封住。地上散著可刮取的黑木炭皮、被蛛絲黏住的焦葉和幾枚乾裂骨片，灰光從樹縫斜切進來，把可立足的窄地與不可深入的枝牆分得很清楚。這裡像主路旁的採集凹袋，足以看見回到空心木橋或長老樹環的地貌線索，卻不會把人引入新的深林支路。",
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
    "description": "倒祠北苔根採封位在倒塌小祠北側，南面的斷柱被黑苔吞住，東邊枯枝棚縫透出灰白光，西側仍能聽見骨鈴林傳來的低響。石板下盤根錯結，黑苔與夜蕨沿裂縫生長，幾個舊供碗被根鬚頂得歪斜。北面根牆厚得像一排關上的門，只留下回望小祠與辨認骨鈴方向的視野；此處適合呈現破祠、苔根與採集痕跡的層次，而不是延伸成真正通道。",
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
    "description": "骨鈴東枯根採封夾在骨鈴林與倒祠北苔根之間，西面的骨片風鈴敲出空聲，南側黑樹脂池滲出暗亮黏液，北邊影狼窩留下幾道新鮮爪痕。枯根下長著夜蕨，葉尖凝著帶毒綠光，旁邊還有被樹脂黏住的箭羽與小骨牌。這片窄地被乾根與倒枝壓住外緣，只能作為辨認周邊地貌的採集角落；骨鈴聲、樹脂味和狼痕同時出現，讓黑木林南北兩側的危險在此交會。",
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
    "description": "女巫樹洞北炭根封在黑木林西側高根上，南面女巫樹洞掛著綠火，東側無月空地吞掉所有月光，北西兩面則被炭黑根牆壓成密不透風的暗面。裸露硬根像脊骨一樣突出地面，裂縫裡能刮到少量黑木炭皮，也能看見被藥草汁染綠的舊布條。此處像樹洞外的高位邊緣，能看清女巫工坊與無月空地的方向關係，卻被根牆明確收束，不會形成新的通行路線。",
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
    "description": "炭門北黑苔封徑守在炭樹入口北面，南側焦黑門柱仍有獵人刻痕，東邊黑苔床散出濕冷毒味，西側樹影反覆閉合成幾乎不透光的暗牆。地面積著夜蕨、黑苔和被踩碎的炭皮，幾道舊腳印在苔層前忽然中斷，只剩回到炭樹入口的刀痕還算清楚。這裡應呈現初入黑木林時最容易誤判的側徑：材料與氣味都很明顯，但樹影、根牆和門柱位置會自然說明主路應折回何處。",
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
    "description": "潮門南赤崖棧道貼著血鹽海岸北段海崖鋪開，北面潮門入口仍有霧港鹽霧，南側鹵蝕小徑切入紅色崖壁，東邊骨網淺灘掛著破魚骨網。鏽木板被鹽水泡得發黑，板縫裡塞滿紅鹽與斷繩，欄杆上的潮位刻痕標出南北通行線。這裡不是寬闊主路，而是一段危險但仍可辨的崖邊棧道；濕木、鹽晶和東側魚骨地標會自然說明回潮門或下行鹵蝕小徑的方向。",
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
    "description": "鹵蝕南側紅鹽封礁位在鹵蝕小徑南面，北側切痕仍積著血紅鹵水，東邊沉水望塔只露出斷梁輪廓。紅鹽晶把礁石黏成一排尖刺，潮水在縫隙裡冒出鏽色泡沫，濕滑斜面沒有穩定落腳處。幾支被折斷的魚叉卡在晶簇間，像曾有人試圖從小徑背面橫切到瞭望塔；地貌本身已把路線收束回北側安全岩面，留下可採鹽晶與辨認塔影的短暫視野。",
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
    "description": "淹塔南鏽棧封貼在沉水望塔南側，北面塔腳浸在紅潮裡，東側戰旗沙丘的破布在鹽風中抽動。近處棧道被腐蝕鐵釘、斷板和碎骨網纏成一團，潮沫拍上來時會把鐵鏽味推到臉前。木板斷面露出黑水浸爛的纖維，沒有形成能通往沙丘背面的連續橋面；這片斷棧適合呈現瞭望塔、戰旗與紅潮之間的邊界關係，也讓回到塔腳或主路的方向更明確。",
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
    "description": "破船標東赤鹽崖位在拾荒者標記東面，西側殘骸木牌被紅鹽包住，南方赤潮池在低處不斷冒泡。礁崖布滿刀刃狀鹽晶，濕滑岩面被血霧打亮，碎船板只卡在崖縫裡，無法連成可攀路線。幾枚銅釘和斷繩沿斜坡散落，像標記沉船碎片曾被潮水推到此處；這裡的重點是危險高度差與鋒利鹽晶，讓西側拾荒地和南方潮池都能被看見，卻不能被誤認成捷徑。",
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
    "description": "猩紅潮池東鏽崖壓在赤潮池東側，西面血色池水拍打礁壁，南方走私者小灣藏在低霧後，只露出幾點濕木陰影。崖邊棧板鏽斷成數截，裂縫裡凝著暗紅鹽晶與潮池血苔，踩痕在斷面前全部消失。鹽風把腐木味、潮池腥味和遠處私貨油布味混在一起，暗示小灣就在下方卻無法直接滑入；這片斷崖應呈現自然收束的邊界，而非新的可通行背路。",
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
    "description": "血稅碼頭北礁封位在血稅棧橋北面，南側木樁掛著暗紅繩結，西邊冰暗湧道的黑潮把冷水推上礁面。紅鹽晶與碎骨網纏住礁石，濕木片、貝殼碎刃和黑色潮沫堆成粗糙拒馬。碼頭木樁清楚標出南側主線，西方冷浪只提供冰暗湧道的方位，不形成可繞行水路；這裡像棧橋旁被潮水長期撕咬出的死角，用來強化血稅棧橋與東段儀式區的單一路線感。",
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
    "description": "深海神殿西沉門路牌亭位在血鹽海岸最東端，西面斷棧只剩鹽蝕木樁，東側半沉石門刻滿古文，門後透出藍色火光與深海冷霧。亭柱下有紅鹽殼、腐木牌和被潮水磨平的舊箭頭，地面從濕木棧板逐漸變成海神殿的黑石階。此地正是血鹽海岸與深海神殿的交界端，西側紅霧標出回岸路，東側藍火則把視線引向潮汐石門；冷暖光色與材質轉換足以說明跨區方向。",
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
    "description": "鐵木影門苔徑貼著暗影森林東緣，黑苔石縫被濕根夾成狹窄步線，西側暗林枝影壓住回望視野。東面冷藍光穿過根牆缺口，能看見鐵木要塞傳送院的石柱輪廓，苔蘚間散著被踩斷的藥草莖與靴底水痕。這裡不像開闊林地，更像兩個區域互相咬合的門縫；冷霧沿石面流動，東向出口清晰，其他方向都被黑根與濕葉自然收束。",
    "image": "dark_forest_fill_n1_13.png",
    "imagePrompt": "鐵木影門苔徑 dark_forest_fill_n1_13 in dark_forest 暗影森林, room function portal, mossy stone threshold on the eastern edge of the dark forest, west black roots covering wet stones, east cold blue portal-yard light from Ironwood Fort glimpsed through branch slits, terrain slick moss slabs, damp herb traces, ironwood bark and narrow stone cracks，入口端是可踏但狹窄的黑苔石縫，中段根牆形成影門，東側冷光像要塞傳送院入口從樹縫透出，西側暗林壓回濕黑樹根，讓玩家一眼讀出這是暗林到鐵木要塞的東向邊界路線而不是普通空地。石面要有被靴底磨亮的濕痕，苔縫散著藥草斷莖，根牆上垂著冷霧水珠，遠端冷光被枝條切成細線，石縫邊還有細小藍白菌光，整體材質需有濕苔、硬根、冷霧、石縫藥草與遠處冷光層次, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "軍需陰根道被粗樹根壓成低矮窄徑，西側黑葉像布幕垂下，遮住暗林深處的回聲。東面枝縫露出鐵木要塞軍需行列的木牆與冷燈，地上有巡邏靴印、短刀刻痕和被採過的草梗。根節之間掛著水珠，腐葉被長期踩踏成深色泥面，使這條路帶著軍用後巷的緊繃感；只有東側木牆方向保有明確步線，其餘邊緣都被根鬚與陰影擠窄。",
    "image": "dark_forest_fill_n1_14.png",
    "imagePrompt": "軍需陰根道 dark_forest_fill_n1_14 in dark_forest 暗影森林, room function border road, thick root corridor squeezed between dark leaves and the Ironwood Fort quartermaster row, west black foliage hides the return trail, east rough wooden military storehouse wall visible beyond branches, terrain tangled roots, patrol knife marks, wet leaves and gathered herb scraps，粗根把小路壓成一條陰暗通道，東側枝縫露出要塞軍需排屋木牆與冷燈，西側黑葉像幕布壓住暗林回頭路，地面刻痕與採集痕跡要清楚。近處落葉被巡邏靴踩成泥痕，根節上有短刀刮出的舊標記，軍需棚方向只露出木板縫與微弱燈點，林內則以墨綠陰影封住退路，構圖需讓東向跨區出口可辨但不畫成開闊村道, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "熔爐煙苔路藏在黑樹與濕苔之間，東側鐵木鍛坊的暖灰煙味穿過枝葉，和西側暗林冷霧在半空交疊。苔石上留著焦黑足印，草藥斷莖被熱灰燙成褐邊，低矮根欄把路面收成細長一線。遠處看不見完整工坊，只能看見煙光與鐵器火星透出樹縫；這條邊徑因此帶著熔爐逼近森林的壓力，東向可循煙味穿出，旁側則全被濕根攔住。",
    "image": "dark_forest_fill_n1_15.png",
    "imagePrompt": "熔爐煙苔路 dark_forest_fill_n1_15 in dark_forest 暗影森林, room function border road, narrow moss path between black trees and forge smoke, west cold forest mist, east orange-gray smoke from Ironwood Fort forge works filtering through leaves, terrain wet moss stones, hot ash stains, charred footprints and low root rails，近處苔石被灰燼壓暗並留下焦黑腳印，中段黑樹夾出狹路，東側暖灰熔爐煙穿過枝葉標示鍛造區方向，西側仍是冷霧暗林。石縫裡的草藥被熱灰燙成褐邊，低矮根欄把步線收得很窄，煙光與霧光在半空交疊，畫面要呈現冷暗森林與要塞熔爐氣味交會的邊界，不可像完整道路廣場, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "鐵木根牆徑沿暗林東側延伸，硬根交疊成高低起伏的黑牆，樹脂火光從東側缺口一閃一閃滲出。那道缺口接向鐵木林圃，能聞到樹脂燃燒與濕苔被烤乾的味道；西面根牆纏成厚實屏障，南端坍根與暗霧把地面收斷。根節上有焦點、濕苔反光與草藥割口，像有人曾在邊緣短暫停留。整條徑道的視線被迫朝東，其他方向只剩封死的根影。",
    "image": "dark_forest_fill_n1_16.png",
    "imagePrompt": "鐵木根牆徑 dark_forest_fill_n1_16 in dark_forest 暗影森林, room function border road, ironwood root wall path on the eastern forest edge, west black root wall braided shut, east resin firelight from Ironwood Fort grove, south path blocked by tangled roots, terrain hard roots, resin sparks, damp moss and shadowed bark，畫面下緣狹窄根牆徑沿東側伸展，東方樹脂火光穿過鐵木缺口，西側黑根牆完全封住，南端要以坍根與暗霧表明不可硬穿。硬根表面有樹脂焦點與濕苔反光，草藥割口停在根牆邊緣，南側黑霧吞掉任何踏點，樹脂火星貼著根節浮動，畫面重點是東向進入要塞林苑的邊界節點與採集邊界, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北苔根封口由古樹根盤成低牆，黑苔覆滿根脊，東側枝葉摩擦聲隱約傳來軍需陰根道的動靜。南面暗林霧氣更深，卻沒有穩定踏點，只有潮濕土面、被採過的草梗和碎菌傘停在根牆腳下。冷綠光貼著根縫流動，水珠在苔面聚成細線，讓這處封口像森林自行長出的木閂。它保留邊界與採集痕跡，卻把任何延伸道路都收進厚重根牆之後。",
    "image": "dark_forest_fill_n2_14.png",
    "imagePrompt": "北苔根封口 dark_forest_fill_n2_14 in dark_forest 暗影森林, room function border road, ancient low root wall covered in black moss west of the quartermaster border trail, east branches rub toward the military root road, south dark forest deepens behind fog, terrain moss roots, herb gathering scratches, damp soil and closed root lattice，低位視線裡黑苔古根盤成低牆並完全封住路線，東側只用枝葉摩擦與微光提示軍需陰根道方向，南面霧氣變深但沒有可行出口。根牆腳下有被採過的草梗、濕土指痕與碎菌傘，枝條交叉得像天然柵欄，冷綠光只停在牆面上，潮氣沿根縫凝成細珠，構圖需明確是封閉 blocker 而非隱藏小徑, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "中段腐根欄位於暗影森林腹地，倒伏腐根像欄杆般橫在濕葉泥上，東側仍可望見北苔根封口的低牆輪廓。西面枯枝把地面壓得鬆軟，黑苔、小菌株和斷根纖維集中在根縫邊。腐木表皮被水泡開，露出層層暗褐纖維，周圍樹幹彼此重疊得沒有開口。這裡只留下短距離活動的陰濕邊界，像森林腹地的一道腐爛肋骨，提醒路線已在此處停住。",
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
    "description": "北影苔石坪位在暗林北側稍高處，濕滑苔石露出灰白礦脈，水珠沿石縫慢慢滾落。南面遠處傳來盤根橋附近的濕木吱響，東側苔石被黑葉覆住，北面低暗坡在樹冠陰影下收成一道無路可走的灰牆。石坪邊緣散著少量藥草與刮痕，冷光從枝縫斜落，卻照不出新的出口。這裡像被抬高的觀察邊緣，只能看見主路聲息逐漸遠去。",
    "image": "dark_forest_fill_n4_12.png",
    "imagePrompt": "北影苔石坪 dark_forest_fill_n4_12 in dark_forest 暗影森林, room function border road, raised moss stone flat on the northern dark forest edge, south distant wet wood creak from root bridge area, east stones buried under black leaves, north no outlet beyond low shadow bank, terrain slick moss slabs, medicinal grass traces and cold overhead shade，下緣是高處濕滑苔石坪，南側遠處用盤根橋濕木聲和根影暗示正式路線，東側黑葉蓋住石面，北面低暗坡沒有出口。石坪邊緣要有水珠、刮痕與少量可採藥草，冷白光從樹冠縫隙斜落卻照不出新路，外圈陰影像牆面收束，苔面高低差要清楚，石縫間露出灰白礦脈，整體需表現北側封閉 blocker 不接新路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "內林苔階封口由幾塊濕滑石階歪斜堆成，階面滿是黑苔、水窪與碎石粉。北側腐根欄壓住舊徑，南面霧氣更重，中段坍落根牆貼著石階封住前方，不留能穿過的縫隙。苔縫間長出細小藥草，葉影在水面上晃動，使石階看似曾經通往某處，卻早已被森林收回。微弱綠光只描出斷階邊緣，讓此處成為內林裡一段被遺忘的終止符。",
    "image": "dark_forest_fill_n4_14.png",
    "imagePrompt": "內林苔階封口 dark_forest_fill_n4_14 in dark_forest 暗影森林, room function border road, slick mossy stone steps collapsed inside the forest, north rotted root fence pressing an old path, south heavier dark mist, terrain wet stone stair fragments, black moss harvest seams, fallen root wall and leaf-shadow pools，幾塊濕滑苔階在鏡頭下方歪斜堆疊，中段坍根牆堵死前路，北側腐根欄壓住舊徑，南面霧更重但不可畫出通道。階面要有黑苔採集縫、葉影水窪與碎石粉，坍根下方不能留出縫隙，微弱綠光只描出石階邊緣，碎石粉貼著水窪沉積，斷階旁殘留細小根鬚，畫面需明確是內林封口而不是樓梯入口, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南影根幕垂滿黑色細根，像潮濕簾幕從高枝落到地面，北面仍能看見內林苔階封口的微弱反光。東側鐵木根牆徑被樹影遮住，只露出一線樹脂火色；根幕下方散著被割斷的草梗、碎葉與濕泥指痕。細根隨風輕輕碰撞，發出像雨滴落在木板上的聲音，卻把前方視線遮得密不透風。這裡保留暗林內圈的壓迫邊緣，沒有真正能深入的路口。",
    "image": "dark_forest_fill_n4_16.png",
    "imagePrompt": "南影根幕 dark_forest_fill_n4_16 in dark_forest 暗影森林, room function border road, curtain of black hanging roots in the southern shadow, north faint reflection from mossy stone step seal, east ironwood root wall path obscured by branch shadows, terrain dangling root threads, wet moss, gathered herb cuts and opaque forest dark，黑色細根像厚簾垂滿畫面中段，地表可見草藥割痕與潮濕苔土，北側只留下苔階封口的微弱反光，東側鐵木根牆徑被枝影遮成方向暗示。根絲要密到看不見後方踏點，水珠沿根鬚排列成冷亮細線，地表藥草被壓在陰影邊，根幕底部泛著墨綠濕光，樹皮紋理要粗糙清楚，需呈現暗林內圈 blocker 邊界, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南腐葉封溝是一條積滿黑水與腐葉的林下溝道，水面漂著碎枝、菌傘和泛白葉脈。北側南影根幕擋住來路視線，東面遠處混著濕木味與要塞煙味，溝邊斷木橋只剩兩根濕滑木梁斜插泥裡。梁下有藥草根與被沖散的舊標記，卻沒有能承重的踏點。黑水偶爾冒出細泡，把腐葉推成緩慢旋渦，使整條溝像暗林南側一條自然裂縫。",
    "image": "dark_forest_fill_n4_17.png",
    "imagePrompt": "南腐葉封溝 dark_forest_fill_n4_17 in dark_forest 暗影森林, room function border road, forest ditch filled with black water and rotting leaves, north hanging root curtain blocks sight, east faint wet wood and fortress smoke scent, terrain broken two-beam footbridge, slick logs, herb traces below the beam and stagnant dark water，溝口黑水腐葉阻斷腳步，斷木橋只剩兩根濕滑木梁斜跨但不可踏，北側根幕像黑簾遮住來路，東方只用煙味與淡灰光提示要塞方向。水面漂著腐葉泡沫與藥草碎根，木梁端頭已腐爛下沉，溝岸泥痕顯示無法站穩，梁下草梗刮痕清楚但沒有穩固踏點，整張圖必須像封死的林下溝道, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南界苔石斷階位於暗影森林南緣，北側腐葉封溝在濕霧中逐漸收窄，南面石階被坍根與黑苔覆住。斷階下方沒有穩固落腳點，只能看見碎石、樹根和被霧吞掉的深暗坡面。苔面上仍留著草藥割痕與舊路標殘片，像過去曾有小徑通過，卻被森林多年擠壓後完全斷開。冷水沿階緣滴落，讓這處南界只剩邊緣感與退回北側的陰冷方向。",
    "image": "dark_forest_fill_n4_18.png",
    "imagePrompt": "南界苔石斷階 dark_forest_fill_n4_18 in dark_forest 暗影森林, room function border road, broken moss stone steps on the south edge of the forest, north rotting leaf ditch narrowing behind, south collapsed roots and black moss cover the stair drop, terrain fractured stone slabs, no foothold below, gathered moss marks and heavy border shadow，石階起點是斷裂苔石階的缺口，南側坍根與黑苔覆住下落處且沒有落腳點或路標，北側腐葉封溝收窄回暗林，苔面刮取印只能停在斷階上方。斷面要有濕石剝落、根鬚抓住石縫與深色落差陰影，南方不出現任何亮點或道路標記，坍根下方只見黑霧，構圖需清楚告訴玩家南界封死只能折回北側, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西側黑藤欄靠近暗林與黑木林的交界，黑藤層層纏住樹幹，濕亮葉片把西側視線壓成一面深色牆。東面可回望南腐葉封溝的霧氣，藤牆腳下長著細小草葉與暗色菌株，泥面散落被拖斷的藤絲。枝葉間沒有安全路標，只有冷灰光在藤刺上斷續反射。這裡像兩片黑林互相纏繞的邊緣，短暫露出可採痕跡，卻不交出能穿越的道路。",
    "image": "dark_forest_fill_n7_16.png",
    "imagePrompt": "西側黑藤欄 dark_forest_fill_n7_16 in dark_forest 暗影森林, room function town service, black vine fence near the dark forest and blackwood boundary, east fog from rotting leaf ditch visible between trunks, west vine wall with wet glossy grass below, terrain thorny black vines, damp leaves, herbal gathering patch and no safe trail marker，藤牆下方濕亮草葉和割取印貼在黑藤牆下，中段藤蔓交錯成不可穿越的欄，東側樹幹間回望腐葉封溝霧氣，西側完全沒有安全路標，只保留黑木林方向的壓迫陰影。藤刺上掛著水珠與碎葉，草葉被踩彎但很快被藤根截斷，冷綠側光勾出封閉邊線，畫面要是邊界採集 blocker 而非通往黑木林的路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北吊機礁封路貼著東海岸北端，亂礁與鏽蝕廢纜堵住往機械墳場的方向，北方只能望見吊機黑影壓在天際。南側海藻灘在潮聲中展開淡綠水光，東邊遠處露出斷裂木欄杆。礁縫裡積著海水泡沫、碎螺殼與濕石反光，浪花打在鏽纜上凝出白色鹽霜。整段礁路像被廢鐵和潮水共同縫死，只留下東海岸北界的冷硬輪廓。",
    "image": "eastern_coast_fill_31_0.png",
    "imagePrompt": "北吊機礁封路 eastern_coast_fill_31_0 in eastern_coast Eastern Coast, room function border road, rocky passage sealed below the machinery graveyard crane, north distant black crane silhouette and scrap cables, south pale kelp flats opening with tide noise, east broken boardwalk rail far away, terrain jagged reefs, rusted cable, wet stone and white surf，低位礁石通道被亂礁與廢纜完全封住，北方吊機黑影壓在天際，南側海藻灘用淡綠潮光拉開距離，東邊只露出遠處木欄杆作方向提示。礁縫裡要有海水泡沫、鏽鐵纜線、碎螺殼與濕石反光，構圖明確表示機械墳場方向不可通行，這只是東海岸北端邊界 blocker 而非入口近端浪花要打在鏽纜上形成白色鹽霜，礁石高度差和吊機剪影都需清楚，讓北界封鎖感更強。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "王道東側潮封位在王道市集東界外，濕滑礁面被破繩欄與潮門木牌截住，西面仍能回望市集石路旗桿。北側潮池洞窟滲出藍色鹹水，東邊海蝕洞口被整片浪花遮住。白色浪痕沿石面形成明顯封線，市集帶來的泥沙停在濕石邊緣，斷繩影子被回潮泡沫反覆吞沒。這片潮封像市集與海岸之間被潮水切開的邊界。",
    "image": "eastern_coast_fill_31_3.png",
    "imagePrompt": "王道東側潮封 eastern_coast_fill_31_3 in eastern_coast Eastern Coast, room function border road, wet reef outside the royal market east boundary, west stone road flagpoles seen behind spray, north tidepool grotto leaks saltwater, east sea-cave mouth hidden by breaking waves, terrain slick reef, broken rope rail, tide gate marker and white foam scars，礁面濕滑且被破繩欄截斷，西側市集旗桿只作回望地標，北方潮池岩穴滲出藍色鹹水，東邊海蝕洞口被浪花整片遮住。木牌只畫成無字潮門標記，白色浪痕沿石面形成封線，讓玩家理解這裡標示王道市集與東方海岸分界，但不能作跨區捷徑或隱藏通道濕石邊緣要有市集石路帶來的泥沙、斷繩陰影與回潮泡沫，整體像被潮水故意切斷的邊界。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "海盜營南沙封位在海盜營地南側，北面破帆與煙灰仍可辨認，西側退潮線貼著黑色暗礁，南面潮間帶積著碎貝與淺水反光。鬆沙下半埋木樁、斷索和低矮拒馬，沙面有陷落腳印卻無法連成穩定小徑。海風把煙灰拉成灰線，破帆影子落在濕沙上，碎貝與木樁排成清楚封路節奏，使營地後方不會被沙灘輕易繞開。",
    "image": "eastern_coast_fill_34_4.png",
    "imagePrompt": "海盜營南沙封 eastern_coast_fill_34_4 in eastern_coast Eastern Coast, room function border road, north torn sail and ash smoke remains, west dark reef along low tide line, south tide zone with broken shells, terrain loose sand, buried stakes, snapped ropes, damp shell grit and gray surf，鬆沙下露出半埋木樁與斷索，北面破帆和煙灰暗示海盜營地，西側退潮線貼著黑色暗礁，南方潮間帶堆著碎貝和淺水反光。沙面需要有陷落腳印但不可形成可走小徑，斷索與木樁像低矮拒馬攔住繞營路線，光線是陰雲下的冷灰海光破帆影子落在沙面上，煙灰被海風拉成灰線，碎貝與木樁排列成明顯封路節奏。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "藍泥北側潮溝夾在海盜營南沙封與鹽風灘藍泥棚之間，中央淺溝切開沙礁，水深忽明忽暗。北邊乾沙逐漸混入碎礁，南側藍黑濕泥泛著冷亮鹽霧，溝岸有塌陷砂層、碎貝和浮鹽結晶。藍泥邊緣拖著黏稠痕跡，暗流在淺溝底部緩慢移動，顯示地面會吞腳而非承托腳步。這裡只像兩種海岸地貌交接前的一道不穩裂縫。",
    "image": "eastern_coast_fill_34_5.png",
    "imagePrompt": "藍泥北側潮溝 eastern_coast_fill_34_5 in eastern_coast Eastern Coast, room function border road, unstable tidal trench between dry pirate-camp sand and blue-black Saltwind Flats mud shelf, north sand hardens into reef chips, south wet blue mud exhales salt fog, terrain shallow trench, dark water pockets, mud sheen, shell fragments and fog wisps，潮溝橫切畫面中央，北邊乾沙逐漸混入碎礁，南邊藍黑濕泥泛著冷亮鹽霧。水深不穩且泥面反光破碎，不能畫成可涉水通道；溝岸要有塌陷砂層、碎貝和浮鹽結晶，整體像東海岸沙礁過渡到鹽風灘前的封閉地形提示，不放任何戰鬥或採集焦點藍泥邊緣要有黏稠拖痕、浮鹽斑與淺溝暗流，顯示地面會吞腳而不是安全淺灘。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "鹽風藍泥北界位在東海岸南緣，灰沙、碎貝與潮濕礁屑逐步被藍黑濕泥吞沒，南側鹽風灘藍泥棚泛著冷光。北面潮溝只以浪聲和濕痕回望，無字木標與鹽霧桿立在泥路兩旁，像自然門檻。南向濕泥保留清楚入口寬度，兩側鹽霧收束成低低牆面，顏色從灰沙過渡到藍黑，使這處邊界讀起來像海岸轉入鹽風灘的正式端點。",
    "image": "eastern_coast_fill_34_6.png",
    "imagePrompt": "鹽風藍泥北界 eastern_coast_fill_34_6 in eastern_coast Eastern Coast, room function border road, coast sand reef turning into Saltwind Flats blue mud shelf, north tidal trench echo behind, south blue-black wet mud glowing under salt mist, terrain salt fog marker stakes, damp sand, mud sheen, broken shells and low coastal wind，畫面下方沙礁逐步被藍黑濕泥吞沒，南側鹽風灘藍泥棚泛著冷光，北側潮溝只以浪聲和濕痕回望。無字木標與鹽霧桿標示跨區端點，地面要從碎貝沙、潮濕礁屑過渡到黏滑藍泥，構圖需呈現可以沿南向濕泥進入鹽風灘，但不放怪物或採集道具南向泥路需要保留清楚入口寬度，兩側鹽霧收束成自然門檻，顏色從灰沙過渡到藍黑濕泥。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "斷碼頭東礁封位在破碼頭東側，礁石裂縫灌滿海水，西面歪斜木樁被浪打濕，影子落在黑亮水面上。南方走私者海灣藏在礁影後，只露出被潮霧遮住的暗色輪廓，沒有足以鑽過的暗口。近處裂縫深且反光，碎木、泡沫和藤壺塞住落腳點，冷灰港光照出礁面濕痕。這段封礁把碼頭線與背面海灣硬生生切開。",
    "image": "eastern_coast_fill_35_0.png",
    "imagePrompt": "斷碼頭東礁封 eastern_coast_fill_35_0 in eastern_coast Eastern Coast, room function border road, reef seal east of the broken pier, west crooked wet pier posts battered by waves, south smugglers cove hidden behind reef shadows, terrain flooded reef cracks, slick black stone, splintered timber and gray harbor light，斷碼頭東側的礁石裂縫灌滿海水，西邊歪斜木樁被浪打濕，南方走私者海灣只藏在礁影後不形成捷徑。近端裂縫要深且反光，碎木與泡沫塞住落腳點，遠處港光陰冷，構圖明確阻止碼頭線直接切入海灣背面，是封閉 border blocker 而不是可攀越礁道木樁影子要歪斜落在裂縫水面上，南側礁影只提供海灣存在感，不留下可鑽過的暗口。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "蛇巢東側浪封貼著海蛇巢東面，濕滑浪溝像刀口般切開礁面，西側礁洞裡有蛇鱗刮痕與暗綠水光。北方觀潮斷崖被浪霧遮住，東側低礁斷成一串無法相連的濕石點。浪溝裡急流泡沫翻滾，鋸齒礁壁把水聲放大，斷點之間全是深水。這裡危險而狹窄，像海蛇巢外側自然形成的水刃，不提供向東延伸的路。",
    "image": "eastern_coast_fill_36_2.png",
    "imagePrompt": "蛇巢東側浪封 eastern_coast_fill_36_2 in eastern_coast Eastern Coast, room function border road, wave-cut trench beside the sea serpent nest, west reef cave with serpent scale scratches, north stormwatch ledge veiled by spray mist, east low reefs broken into disconnected points, terrain slick wave gutter, greenish seawater, scale marks and jagged rock，濕滑浪溝貼著海蛇巢東側切開地面，西面礁洞內有蛇鱗刮痕與暗綠水光，北方風暴瞭望崖被浪霧遮住，東側低礁斷成一串無法連接的濕石點。浪溝要有急流泡沫與鋸齒礁壁，構圖清楚阻止蛇巢路線往東亂接，危險但不是戰鬥房蛇鱗刮痕需沿礁壁斜向延伸，浪溝水色偏暗綠，斷點礁石之間要有深水隔開。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "中段碎礁阻帶位在蛇巢東側浪封與霧港西潮帶之間，碎礁像一排斷齒橫過海岸。西側仍能聽見浪溝和蛇巢方向的回聲，東側礁脊逐漸被海霧吞沒。水窪、藤壺、泡沫和斷裂石脊提供連續地形感，但每個落腳點都被深水隔開。藤壺與鹽霜貼滿礁齒側面，海霧逐層吞掉東端輪廓，使阻帶像自然斷裂的海岸線。",
    "image": "eastern_coast_fill_37_2.png",
    "imagePrompt": "中段碎礁阻帶 eastern_coast_fill_37_2 in eastern_coast Eastern Coast, room function border road, broken reef belt between serpent wave seal and Mist Harbor western tidefront, west wave gutter echoes from serpent nest, east reef ridge disappears into sea fog, terrain shattered reef teeth, puddled saltwater, barnacles, pale foam and low gray mist，碎礁像一排斷齒橫過中段海岸，西側仍可用浪溝回聲暗示海蛇巢方向，東側礁脊逐漸被海霧吞沒。水窪、藤壺、泡沫和斷裂石脊要形成連續地形感，但每個落腳點都被水隔開，畫面不能讀成可通行路線，只是東海岸中段純 blocker藤壺與鹽霜要貼滿礁齒側面，海霧逐層吞掉東端輪廓，讓阻帶像自然斷裂的海岸線。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "霧港西潮前帶承接中段碎礁阻帶，潮水在腳下留下連續水窪，西面低矮礁脊逐漸收低。東面濃霧裡隱約浮出霧港銅鐘輪廓與冷光，鐘聲被海風拉得很遠。濕沙、扁海藻、霧珠和淺水反射鋪在地面上，水窪彼此相連卻沒有清楚步道。銅鐘影只在霧中微微顯形，像霧港邊界提前傳來的潮濕預告，也讓東側霧門方向更沉重。",
    "image": "eastern_coast_fill_38_2.png",
    "imagePrompt": "霧港西潮前帶 eastern_coast_fill_38_2 in eastern_coast Eastern Coast, room function border road, wet tidefront after the broken reef belt, west low reef ridge, east dense fog with faint bronze bell silhouette and sound, terrain continuous tide puddles, slick sand, mist beads and flattened seaweed，潮水在腳下留下連續水窪，西面低矮礁脊逐漸收低，東面濃霧裡只露出霧港銅鐘的模糊輪廓與冷光。地面要有濕沙、扁海藻、霧珠和淺水反射，水窪彼此相連但沒有清楚步道，構圖作為霧港邊界預告與純 blocker，不安排額外玩法或採集物銅鐘輪廓只在霧中微微顯形，水窪反射被風吹碎，扁海藻貼住沙面形成滑倒警示。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "霧港西門路牌潮徑位在東海岸最東端，半沉路牌亭立在濕石潮徑旁，西面仍有潮前帶礁水聲。東面濃霧中露出霧港城門拱影與銅鐘輪廓，亭腳浸在潮水裡，燈火被海霧暈成柔光。濕石間保留東向前進的清楚步線，兩側潮池和灰霧收住多餘分岔。這處潮徑像東海岸交給霧港的最後一枚路標，沒有文字，只有霧門和鐘影。",
    "image": "eastern_coast_fill_39_2.png",
    "imagePrompt": "霧港西門路牌潮徑 eastern_coast_fill_39_2 in eastern_coast Eastern Coast, room function town service, tide path at the far eastern coast edge, west reef-water sound from the harbor tidefront, east Mist Harbor fog gate arch and bronze bell silhouette in thick fog, terrain half-sunken sign shelter, wet stones, lantern glow, tide pools and gray mist，半沉路牌亭立在濕石潮徑旁，西側仍有礁水聲與潮前帶水窪，東面濃霧中露出霧港城門拱影與銅鐘輪廓。路牌亭不可有可讀文字，只用燈火和木架形狀標示跨區端點；地面要能讀出可沿東向霧中前進到霧港霧門，但沒有怪物、採集物或多餘分岔燈火要被海霧暈成柔光，亭腳半沉在潮水裡，東向霧門拱影清楚但不出現可讀文字。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "星坑東燼封道貼著餘燼邊境西北角，焦黑石道在星落坑東緣忽然被厚重熔渣截斷。西面坑底只剩被灰風吞沒的暗紅餘光，南側焦炭車轍斜入主路，東方火草平地冒出零星紅芽。熔渣牆表面布滿冷卻裂紋、玄武岩碎片與細火星，灰沙在牆根堆成弧形坡，沒有穩定落腳點；這裡更像火山爆裂後留下的傷口，提醒星坑方向仍被封在熱灰深處。",
    "image": "ember_march_fill_22_21.png",
    "imagePrompt": "星坑東燼封道 ember_march_fill_22_21 in ember_march Ember March, room function border road, charred basalt road sealed by slag beside a fallen star crater edge, west dim crater glow swallowed by ash wind, south wagon ruts on cinder road, east red firegrass sprouts on burnt flats, terrain black slag, ember cracks, ash drifts and heat haze，焦黑石道在畫面下端被熔渣厚牆截斷，西面星落坑邊只剩暗紅餘光被灰風吞沒，南側焦炭車轍斜斜消失，東面火草平地冒出紅芽作方向線索。熔渣表面要有冷卻裂紋、橘紅暗光、灰沙堆積與玄武岩碎片，整體明確表示這是餘燼邊境西北角 border blocker，不開星坑捷徑，只保留危險邊界提示, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南燼臺北封灰道位於南燼傳送石臺北緣，低矮灰封線橫過路面，把熱風阻在符文臺外側。北面焦黑里程碑半埋在玄武岩道旁，南面傳送符紋隔著熱浪穩定閃動，西側玻璃灰原吹來細碎燼砂。灰道上有火星、焦布纖維和被風推出的弧形砂線，玄武岩破片沿封線排開，形成清楚的外圍邊界；整段路帶著安全據點旁特有的安靜，卻不延伸成穿越內圈的通道。",
    "image": "ember_march_fill_22_24.png",
    "imagePrompt": "南燼臺北封灰道 ember_march_fill_22_24 in ember_march Ember March, room function portal, ash road north of the south ember portal platform, north charred milestone half buried beside basalt road, south portal runes flicker beyond heat shimmer, west glass ash field blows cinder sand, terrain gray ash seal, basalt shards, ember dust and rune glow，灰道貼著南側符文臺北緣被低矮灰封線阻斷，北面焦黑里程碑半埋在玄武岩路旁，南面傳送符紋隔著熱浪忽明忽暗，西側玻灰原吹來細碎燼沙。地面要有灰燼波紋、玄武岩破片、暗紅火縫與被風吹出的弧形砂線，灰封線上還覆著細小火星和焦黑碎旗纖維，構圖要像傳送點外圍安全邊界，不是能直接穿越的道路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南燼傳送石臺以黑色玄武岩砌成圓形高臺，符文槽內流著穩定暗紅光，照亮周圍被踩實的乾灰。北側封灰道擋住內圈熱風，東面焦土補給棚掛著耐火布簾，南面熔灰避風亭的低牆擋下飛灰。石階分出清楚的三個方向，臺邊放著盛灰陶碗、裂紋石柱與被火星烤黑的繩結；與外側焦土相比，這裡的光線平穩而有秩序，是南部據點最醒目的回程標記。",
    "image": "ember_march_south_portal.png",
    "imagePrompt": "南燼傳送石臺 ember_march_south_portal in ember_march Ember March, room function portal, black basalt portal platform on a scorched southern ash slope, north sealed ash road, east supply shed with fireproof cloth, south low shelter wall against molten ash wind, terrain carved basalt steps, ember runes, ash bowls, red backlight and safe travel landmark，黑色玄武岩石臺置於焦灰南坡中央，圓形傳送符文發出穩定暗紅光，北側封灰道隔開熱風，東面補給棚的耐火布在熱浪裡抖動，南面避風亭低牆擋住熔灰。石階要清楚分出北東南三個動線，近端保留可站立的乾灰平臺，符文不可有可讀文字，只用幾何火痕表現傳送服務地標與安全回程點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "焦土補給棚半埋在灰堆與焦木樁之間，耐火布簾把西側南燼傳送石臺的紅光切成柔和邊線。棚內水桶、陶瓶、冷卻藥劑與繃帶箱沿焦黑牆面排放，地上留著被反覆踩實的灰土和水痕。棚角有燒邊帆布、折斷木箱和用石塊壓住的空皮囊，外側熱風只讓布角輕輕抖動；整個空間狹窄卻穩定，像焦土深處少數還保留秩序的補給角落。",
    "image": "ember_march_south_supply.png",
    "imagePrompt": "焦土補給棚 ember_march_south_supply in ember_march Ember March, room function portal, half-buried ash supply shed east of the south ember portal, west basalt portal glow through a fireproof cloth curtain, inside water buckets, cooling vials and spare bandages lined against soot walls, terrain ash piles, charred timber, fireproof canvas and warm lantern light，補給棚半埋在灰堆裡，耐火布簾把西側符文臺紅光切成柔亮邊線，棚內水桶、冷卻藥劑與備用繃帶沿焦黑牆面排開。地面要有踩實灰土、木箱、陶瓶水痕與布料燒邊，外側熱風只吹動棚角不造成戰鬥感，整體呈現南部據點的補給提示與短暫安全感，不出現敵人或商店 UI, slightly elevated adventurer eye view, clear foreground service space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
};
