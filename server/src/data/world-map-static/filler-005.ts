import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS_PART_005: Record<string, RoomDef> = {
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
    "description": "滾雷門北封草在草原西北側隆起，南面滾雷門的木樁仍有焦黑痕，東面野豬奔道被長草遮住。雷雲壓低後草尖放電，這裡是封閉邊界，不提供通行或採集互動。",
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
    "description": "雨影西北焦痕貼著野豬奔道北側，南面草叢道路被踩成泥線，東側雨影溝的乾風切過草面。焦土裡有雷擊草灰採集點，但裂縫太密，這裡是採集邊界，不能繼續穿越。",
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
    "description": "風祠北崖焦草在風祭小祠西北方抬高，北側鷹巢棲木露出崖影，西面小祠旗繩仍能聽見。焦草根部有可採雷種與羽片，但崖面斷裂，這裡是採集邊界。",
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
    "description": "月沼南雷封界位於雷鳴草原北緣，北面月光濕地的深水霧氣被雷風推回，南側狼崖草線變得焦黑，西面雨影溝聲音低沉。這裡是邊界封鎖，雷溝斷開濕地與草原，不開新路。",
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
    "description": "雷針南封草場在避雷針田南側展開，北面鐵針尖端仍有藍火跳動，東面鷹巢峰的岩影壓到草坡。草場中央被雷擊成黑圈，這格是封閉邊界，不安排採集或戰鬥。",
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
    "description": "天火台西南焦坡位於天火台南側，北面石台仍冒著熱氣，西側避雷針田的鐵影排列成線，南面鷹巢峰草坡更陡。焦土邊有雷擊草灰採集點，這裡是採集邊界。",
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
    "name": "雷龍風眼西封痕",
    "zone": "thundersteppe",
    "description": "雷龍風眼西封痕貼近雷龍風眼北側，南面草面被旋風壓成圓環，西側雷蹄渡口的泥線斷在焦土前。黑草根能採到少量雷灰，但風壓阻斷道路，這裡是採集邊界。",
    "image": "thundersteppe_fill_17_22.png",
    "imagePrompt": "雷龍風眼西封痕 thundersteppe_fill_17_22 in thundersteppe Thunder Steppe, room function resource path, sealed scorch mark west of the thunder dragon storm eye, south grass pressed into a circular ring by violent wind, west Thunderhoof Ford mud line ends before charred soil, terrain black grass roots, thunder ash, circular wind pressure, storm haze and blue lightning dust，雷龍風眼西封痕貼近雷龍風眼北側，南面草面被旋風壓成圓環，西側雷蹄渡口泥線斷在焦土前。黑草根可採少量雷灰，但風壓把道路完全阻斷；畫面要有環形倒伏草、焦黑根鬚、旋風霧牆與藍白雷塵，讓採集點停在風壓外緣，不可畫成能穿過風眼的路。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "灰門西雷草坡位於雷鳴草原東北界，南側東界雷路通往燒焦哨站，東面餘燼邊境灰門冒出熱風。草坡上有雷草與灰燼種子採集點，這裡是邊界採集通路，銜接草原與焦土邊界。",
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
    "description": "東界燒哨雷路是雷鳴草原通往餘燼邊境的主邊界，北側灰門草坡仍有雷草，南面玻灰草地泛著紅光，東側燒焦哨站旗杆冒煙。這裡是邊界通路，西側雷溝封住回切草原內圈。",
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
    "description": "玻灰東界草地位於雷鳴草原東南界，北面燒哨雷路有焦旗煙，東側餘燼邊境的玻灰原反射紅光。草坡裡有雷草與玻灰碎片採集點，這裡是邊界採集通路，標示兩區地貌交界與採集邊界。",
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
  },
};
