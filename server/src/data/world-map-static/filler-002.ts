import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS_PART_002: Record<string, RoomDef> = {
"ember_march_south_shelter": {
    "id": "ember_march_south_shelter",
    "name": "熔灰避風亭",
    "zone": "ember_march",
    "description": "熔灰避風亭用低矮玄武岩牆圍出半圓陰影，北側臺階直接回到南燼傳送石臺，牆外火山前緣泛著深紅光。亭內放著水缸、灰斗、陶杯和臨時長凳，地面乾灰被掃成整齊弧線。牆頂落滿細小火星與黑灰，外側熱風推著熔灰翻卷，內側卻只有微弱暖燈和石壁反光；長凳上的燒痕、缸邊水跡與灰斗金屬邊共同留下短暫休整的痕跡。",
    "image": "ember_march_south_shelter.png",
    "imagePrompt": "熔灰避風亭 ember_march_south_shelter in ember_march Ember March, room function portal, low stone wind shelter south of the portal platform, north basalt steps returning to the portal, outside volcanic front red glow, inside water jar, ash scoop and temporary bench, terrain low basalt wall, ash drift, ember wind and dim protected lantern，低矮玄武岩石牆圍住避風亭，北面臺階回到南燼符文臺，亭外火山前緣泛出深紅亮光，亭內水缸、灰斗與臨時坐凳排在受保護的陰影裡。畫面要讓熱風和熔灰在牆外翻卷，牆內保持較穩定的暖燈與乾灰地面，材質包括焦石、陶缸、水痕、灰斗金屬邊和被火星打黑的長凳，這是安全歇腳點而非戰鬥房, slightly elevated adventurer eye view, clear foreground shelter space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "骨窯北封火痕位於骨窯隘口北側高處，玄武岩道上的火痕斷成數截，熔灰覆住原本可能踏行的石面。南面窯口只露出暗紅裂光和骨粉煙，西側焦泉的黑水氣味被熱風推來，北方則被翻起的灰脊和火線截斷。地面有白灰骨粉、爆裂石片與焦黑骨刺狀岩塊，熱浪把遠處輪廓拉得破碎；這段斷火路保留了骨窯壓迫感，卻沒有形成能繼續北上的穩定通路。",
    "image": "ember_march_fill_26_21.png",
    "imagePrompt": "骨窯北封火痕 ember_march_fill_26_21 in ember_march Ember March, room function border road, basalt road north of bonekiln pass where fire scars break into segments, south kiln mouth with dry bone cracking sound, west scorched oasis black-water smell carried by hot wind, terrain broken flame marks, molten ash, bone dust, black basalt and wavering heat，玄武岩道路上的火痕斷成數截，熔灰覆住所有踏點，南面骨窯口只露出暗紅裂光和骨粉煙，西側焦灼綠洲以黑水氣味與低霧提示方向。地面要有白灰骨粉、黑石裂縫、斷裂火線與熱浪扭曲，不能畫成通往窯口的路；這是骨窯北側 border blocker，危險壓迫但不提供穿越, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "龍印東封灰脊從龍印脊東側抬起，灰色脊線在前方突然被熱風削成斷坡，坡下只剩紅霧與落灰。西面巨大爪痕仍壓在焦土裡，南側邊堡外殼露出黑石牆角，遠處火山前緣把天空染成暗紅。斷坡邊鬆砂不斷滑落，裸露玄武岩、焦黑骨刺石片與細火星沿邊緣排列，腳下沒有連續石階；灰脊像龍爪力量的餘波，在此被火山風硬生生切斷。",
    "image": "ember_march_fill_28_22.png",
    "imagePrompt": "龍印東封灰脊 ember_march_fill_28_22 in ember_march Ember March, room function border road, ash ridge east of dragonprint ridge, west huge claw marks pressed into scorched ground, south border keep shell with black stone wall corner, ridge end cut into a broken slope by hot wind, terrain gray cinder spine, dragon claw grooves, basalt corner and red volcanic haze，灰脊從畫面下方抬升後突然被熱風削成斷坡，西側巨大龍爪痕壓在焦土裡，南面邊境要塞殼只露出黑石牆角，遠處火山前緣被紅霧染亮。斷坡邊要有鬆動灰砂、裸露玄武岩、焦黑骨刺狀石片與細火星，構圖只標示火山前緣方向，不讓玩家讀成可爬下去的路, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "火山灰田西界位於餘燼邊境東北角，東面黑色火山灰田被熱風捲成低旋，灰沙深處閃著橘紅裂縫。西側舊燼地石道已被熔渣鎖住，玄武岩碎片與燒裂石柱堆在路口邊緣。可前進的方向只剩東方黑砂口，靠近內側的灰坡則被熔殼和落燼壓死，沒有回切餘地；黑砂斜紋、飛灰和熱浪把這裡塑成明確的火山交界。",
    "image": "ember_march_fill_30_21.png",
    "imagePrompt": "火山灰田西界 ember_march_fill_30_21 in ember_march Ember March, room function border road, edge where Ember March meets volcano ash field, east black volcanic ash lifted by hot wind, west old cinder stone road sealed by slag, terrain ash slope, black sand, molten slag lock, orange fissures and violent heat haze，東側黑色火山灰田被熱風捲成低旋，西側舊燼地石道被熔渣鎖死，灰坡只允許向東跨入火山地帶。畫面需要清楚分出可前進的東向黑砂口與不可回切的西側熔渣封線，灰田裡有橘紅裂縫、飛灰、玄武岩碎片和熱浪扭曲，東面黑砂被風吹成斜紋，路口邊緣插著燒裂石柱與焦灰堆，構圖是跨區 border route 而不是普通灰原房, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "硫泉西界燼路貼著心火裂口東側，西面的紅光被熱浪和裂縫擋住，南側灰燼邊道沉入冒泡熱泥。東方火山硫磺泉噴出刺鼻白霧，白霧裡透著黃晶與濕亮石面。路邊硫磺晶簇、灰燼礦脈和焦石裂紋形成窄窄地帶，熱泥反光不斷變形，使旁側看似開闊卻無法落腳；整條燼路被白霧、黃晶和紅裂石牽引，最後只指向火山硫泉前緣。",
    "image": "ember_march_fill_30_23.png",
    "imagePrompt": "硫泉西界燼路 ember_march_fill_30_23 in ember_march Ember March, room function border road, cinder road east of heartfire breach, west red ember glow blocked by heat fissure, south ash path sinking into hot mud, east volcano sulfur springs venting white steam, terrain sulfur crystal clusters, ash ore seams, hot mud, yellow-white vapor and red stone cracks，燼路貼著心火裂口東側，西面紅光被熱浪與裂縫擋住，南側灰燼邊道沉入熱泥，東方硫磺泉噴出刺鼻白霧。路邊硫磺晶簇與灰燼礦露在熱泥旁，石縫採集點要清楚但不能變成旁支道路；白霧、黃晶、紅裂石與熱泥反光共同指向東側火山硫泉前緣，構圖呈現單一路線端點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "熔橋西界灰道位於餘燼邊境東南口，北側硫泉西界的白霧仍貼地漂移，東面火山熔岩橋投來穩定紅光。灰道路基被熱浪切成數段，西側舊路塌陷，南側灰坡也被落燼和裂石削去落腳面。近處能看見玄武岩肋、焦黑灰道、細碎火星和被風推動的灰浪，所有線條都收束到東方灼熱岩脊；這裡像邊境最後一段乾硬灰道，越過後便進入火山核心前緣。",
    "image": "ember_march_fill_30_24.png",
    "imagePrompt": "熔橋西界灰道 ember_march_fill_30_24 in ember_march Ember March, room function border road, gray ash road at the southeast exit, north lingering sulfur white fog, east volcano lava bridge glowing red, west old road collapsed and locked by heat, south ash slope cut off, terrain cracked ash roadbed, basalt ribs, lava glow, hot wind and falling cinders，灰道路基被熱浪切開，只留下向東接上火山熔岩橋的灼熱岩脊，北側硫泉西界白霧仍在漂，西側舊路塌陷封死，南側灰坡沒有落腳點。畫面要讓東面熔岩橋紅光成為唯一明確出口，近端灰路有裂縫、玄武岩肋、落燼和熱風扭曲，構圖是東南跨區 border route，不開南側灰坡或回切路線, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "琥珀接枝平台架在翡翠樹冠東緣，活枝木板被金色樹脂黏合，東方凝脂樹門透出溫暖琥珀光。西側高枝走道只在綠霧中留下輪廓，平台邊緣滴落半透明樹脂，與背光綠葉分成兩種色溫。枝面有嫩葉割痕、露珠、樹脂線和被踩亮的木紋，外側高空被霧吞沒；這段接枝像兩座森林在空中縫合的邊緣，只留下通往琥珀林的明確光線。",
    "image": "emerald_canopy_fill_n18_7.png",
    "imagePrompt": "琥珀接枝平台 emerald_canopy_fill_n18_7 in emerald_canopy Emerald Canopy, room function border road, high grafted branch platform on the eastern canopy edge, west green high-branch walkway, east amber resin light leading to Amber Forest resin gate, terrain living branch planks, fresh emerald leaves, resin seams, dew and high mist，接枝平台架在高空粗枝上，西側是翡翠樹冠綠蔭高枝道，東側樹脂金光沿枝橋流向琥珀森林樹門。畫面要清楚保留東向可走的樹脂枝橋，枝面有嫩葉採集痕、透明樹脂線、露水與遠處葉海雲霧，讓玩家看出已離開單純樹冠區並進入琥珀交界，不要出現人物、文字或 UI平臺邊緣要有金色樹脂滴落成半透明垂線，綠葉背光與琥珀亮點分成兩個色溫，遠方樹門只用輪廓和光霧表示。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北冠斷枝欄位於高空枝道邊緣，幾根斷枝被濕藤緊緊綁成天然欄杆，枝端露出新鮮木芯與苔痕。東側琥珀接枝平台的金綠交界光穿過葉片，南面厚葉遮住下層樹影。枝縫間有露珠草葉、花粉和碎羽，欄外則是霧白葉海與空隙，沒有連續枝橋；藤索交叉處掛著水珠，讓整排斷枝看起來像被雨水封住的高空邊線。",
    "image": "emerald_canopy_fill_n19_7.png",
    "imagePrompt": "北冠斷枝欄 emerald_canopy_fill_n19_7 in emerald_canopy Emerald Canopy, room function border road, high-air branch road edge with broken boughs tied by vine ropes, east amber graft platform visible, south thick leaves hide lower tree shadows, terrain snapped branches, wet vine lashings, dew herbs and pale green canopy light，幾根斷枝被濕藤索綁成天然欄杆，東側能看見琥珀接枝平台的金綠交界光，南面厚葉遮住下層樹影。枝縫間只留露珠草葉與花粉採集點，外側是高空空隙與霧白葉海，構圖要明確是封閉 blocker，不能像能翻過去的樹橋或跳台斷枝端面需要露出新鮮木芯與苔蘚水痕，藤索交叉處有露珠串連，遠處金色接枝光被葉片切碎。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "霧葉封索道被濕藤與寬葉壓塌，舊繩面只在葉縫間露出幾段深色纖維。東側北冠斷枝欄留下模糊輪廓，西面樹冠逐層抬高，卻被寬葉和霧氣隔成斷續影子。藤索上掛著無字採集結、花粉痕與露水，繩下只有濃霧和看不見底的葉海，沒有木板或腳印；雨珠沿葉脈滑落，使整段索道顯得潮濕、柔軟且無法承重。",
    "image": "emerald_canopy_fill_n20_7.png",
    "imagePrompt": "霧葉封索道 emerald_canopy_fill_n20_7 in emerald_canopy Emerald Canopy, room function border road, sealed rope path buried under wet vines and broad leaves, east broken-branch rail, west canopy rises into higher green layers, terrain dripping vine cords, wide leaves, pollen smears, damp bark and fog，濕藤與寬葉把索道整段蓋住，東側北冠斷枝欄只留輪廓，西面樹冠逐層抬高卻沒有可攀路線。藤索上有無字採集結、花粉痕和露水，但繩面被濕葉壓塌，畫面需讓玩家知道這是資源邊界與封閉 blocker，要折回主枝道而不是嘗試穿越霧葉寬葉表面要有雨珠滑痕和深淺不同的綠色反光，塌陷藤索下方只見濃霧，沒有任何木板或腳印。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南露藤欄懸在樹冠南側邊緣，北面雨水順著粗枝形成連續亮線，西側更高的綠心枝影被霧切成模糊剪影。欄外只有潮濕空氣、垂藤末端和下層葉海，垂藤一入霧中便失去支點。欄內枝面留著露葉、細根和被雨水洗亮的樹皮紋，藤欄節點粗糙濕亮，像一排被綠霧浸透的邊緣護欄，將南面的高空落差壓在視線之外。",
    "image": "emerald_canopy_fill_n21_10.png",
    "imagePrompt": "南露藤欄 emerald_canopy_fill_n21_10 in emerald_canopy Emerald Canopy, room function border road, suspended south canopy edge, north rainwater dripping along a thick branch, west higher greenheart bough silhouette, outside only wet air gaps and hanging vines, terrain dew leaves, slick bark, vine rail, high fog and vertical drop，南側藤欄懸在高空邊緣，北面雨水順著粗枝滴落，西側可望見更高的綠心枝影。欄外只有潮濕空隙、垂藤和霧中的下層葉海，少量露葉採集線索停在欄內，不能畫成可攀爬垂藤；濕亮樹皮、雨滴、葉脈和高度落差要清楚呈現不可通行邊界藤欄節點要濕亮粗糙，垂藤末端消失在霧裡，北側雨滴沿粗枝形成連續亮線，空氣帶有冷綠潮氣。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北風枝籬沿樹冠北緣交錯編起，粗枝像肋骨般緊密扣合，葉縫裡吹出冷白霧。東側霧葉封索道被濕霧遮住，南面鳥巢村臺只剩遠遠的羽聲與枝影。枝籬內側長著藥草、花粉葉和被風刮破的嫩葉，外側則沒有下層踏點，只見空落霧光。花粉在藍綠光裡漂成細點，讓整片枝籬既像自然屏障，也像樹冠北緣的風口。",
    "image": "emerald_canopy_fill_n21_7.png",
    "imagePrompt": "北風枝籬 emerald_canopy_fill_n21_7 in emerald_canopy Emerald Canopy, room function border road, interlaced bough fence along canopy north edge, east mist leaf rope seal, south birdfolk roost echoes through leaves, terrain crossed branches, herb tufts, pollen dust, wind-torn leaves and high blue-green light，交錯樹枝在北緣編成枝籬，東側霧葉封索道被濕霧遮住，南面只以鳥民棲枝回聲和遠處枝影提示主路。枝葉間有藥草、花粉和風刮葉片，但下層完全沒有踏點，枝籬外側是空落霧光；構圖要封住北側邊界，不讓畫面讀成可鑽過的樹洞枝籬要像交錯肋骨般緊密，風從葉縫吹出白霧，花粉在藍綠光裡成細點，南側主路只留模糊聲源。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "翡翠苔枝口鋪滿厚重濕苔和亮葉，苔層厚到吞住樹皮裂縫，踩痕在安全枝面內側便戛然而止。東側可回望北風枝籬，西面枝幹被鳥巢、護藤和細枝完全塞滿。鳥巢邊緣有細羽、碎枝、花粉與濕藤陰影，亮葉上殘留採集割痕；外側高空被綠霧遮住，整個枝口更像一處柔軟的資源邊緣，而非新的通行枝橋。",
    "image": "emerald_canopy_fill_n22_7.png",
    "imagePrompt": "翡翠苔枝口 emerald_canopy_fill_n22_7 in emerald_canopy Emerald Canopy, room function border road, thick emerald moss and bright leaves covering a branch mouth, east return toward north wind branch fence, west trunks blocked by bird nests and vines, terrain soft moss, leaf shine, nest twigs, pollen dust and damp bark，枝口鋪滿厚翡翠苔與亮葉，東側可回北風枝籬，西面枝幹被鳥巢、護藤和細枝完全封住。採集焦點是苔面、嫩葉和花粉痕，不能出現正式出口或下層踏點；鳥巢只作地形封口，畫面需要呈現柔軟濕苔、亮葉反光、樹皮紋理與高空綠霧，提醒玩家回主路尋找安全通行點鳥巢邊緣要有細羽、碎枝和濕藤陰影，苔面厚到吞住樹皮裂縫，採集葉痕停在安全枝面內側。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "中層葉棚封口停在北冠下方，濕亮葉片層層疊成狹窄平台，北側枝影透出翠綠光線。東面細藤垂入霧白深谷，藤末很快消失，沒有繩梯或枝橋承接。葉棚表面有採集割痕、露珠和滑莖，邊線薄而濕亮，稍外一步便是空洞落差；翠綠光從上方枝影灑下，使這片葉棚看似平穩，實際上只是一段被高度切斷的中層邊緣。",
    "image": "emerald_canopy_fill_n22_8.png",
    "imagePrompt": "中層葉棚封口 emerald_canopy_fill_n22_8 in emerald_canopy Emerald Canopy, room function border road, mid-level leaf canopy seal below the northern crown, north branch shadows glow emerald, east thin vines hang into an unclimbable deep gap, terrain layered leaf shelf, slick stems, harvest marks, misty drop and filtered green light，中層葉棚像一片濕亮平臺停在北冠下方，北側枝影透出翠綠光線，東面細藤垂入不可攀的深谷。葉棚表面有採集割痕、濕葉脈和滑莖，但邊緣立刻斷成霧白落差，沒有通往下層的繩梯或枝橋；構圖要強調高低差 blocker 和危險空隙葉棚邊線要薄而濕亮，霧白深谷吞掉垂藤下端，翠綠光從北側枝影灑下，強調高度差和禁止下行。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西冠鳥巢欄靠近樹冠西緣，鳥巢與護藤沿外側疊成厚牆，巢材裡夾著羽絨、花粉葉和濕樹枝。東側翡翠苔枝口仍可回望，南面高枝鳥鳴在葉影間忽遠忽近。護藤包住鳥巢外圈，西側開闊空氣只以淡霧與遠葉剪影呈現，沒有洞口或木橋。枝面低處堆著羽毛、空果殼和花粉，像鳥群長年築巢留下的柔軟邊界。",
    "image": "emerald_canopy_fill_n23_7.png",
    "imagePrompt": "西冠鳥巢欄 emerald_canopy_fill_n23_7 in emerald_canopy Emerald Canopy, room function border road, bird nests and guarding vines near canopy west edge, east emerald moss branch mouth, south high-branch birdsong, terrain woven nests, protective vines, feather down, pollen leaves and high open air，西冠邊緣被鳥巢與護藤完全封住，東側翡翠苔枝口仍可回望，南面高枝鳥鳴只以葉影和羽毛提示。巢材、羽絨、花粉葉和濕藤形成採集與邊界提示，外側是開闊高空和深綠雲霧，不能畫出可穿出翡翠樹冠的洞口或木橋；整體要像自然保護欄護藤要包住鳥巢外圈，羽毛和花粉堆在枝面低處，西側開闊空氣用淡霧與遠葉剪影表現。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西南空枝臺向樹冠外側探出，裸露濕枝末端懸在霧中，北側高枝逐漸稀疏，東面雨線落向下層葉海。外側沒有棧板，藤索被收走後只剩幾個空綁點和磨白樹皮。枝面有葉片採集痕、雨水亮痕與被風折斷的小枝，霧氣在末端下方翻成深色空洞；整座枝臺像一截被撤去連橋的舊平台，保留高度壓迫與潮濕風聲。",
    "image": "emerald_canopy_fill_n25_11.png",
    "imagePrompt": "西南空枝臺 emerald_canopy_fill_n25_11 in emerald_canopy Emerald Canopy, room function border road, empty branch platform extending toward canopy boundary, north sparse high branches, east rain falling into lower leaf sea, outside no planks and vine ropes withdrawn, terrain bare wet branch, leaf harvest marks, warning height gap and drifting mist，西南空枝臺伸向樹冠邊界，北側高枝逐漸稀疏，東面雨水落入下層葉海。外側沒有棧板，藤索被收起只剩幾個空綁點，枝面濕滑且帶有採集葉痕與高度警示。畫面要留出明顯的高空落差、霧氣和遠層葉浪，不安排路線出口，也不能像可跳到下一段平臺空綁點要清楚顯示藤索已被拆走，濕枝末端懸在霧中，雨線落向下層葉海形成明顯深度。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西界風孔枝貼著翡翠樹冠最外圈，南側風洞把葉片吹得翻白，霧旋在枝下緩慢轉動。東面安全主枝道只在遠端露出短短綠光，枝面本身濕滑狹窄，散著無字採集結和被風拉長的葉痕。外側風孔沒有下層踏點，翻白葉背像一圈自然警示帶，風壓從空洞裡一陣陣湧上，使整根枝條不斷發出低沉顫聲。",
    "image": "emerald_canopy_fill_n26_10.png",
    "imagePrompt": "西界風孔枝 emerald_canopy_fill_n26_10 in emerald_canopy Emerald Canopy, room function town service, outer canopy branch beside a roaring wind gap, south wind tunnel flips leaves pale, east safe main branch route visible, terrain slick branch skin, wind-torn leaves, gathering knots, mist spiral and no lower foothold，西界風孔枝貼著翡翠樹冠最外圈，南側風洞把葉片吹得翻白，東面能看見安全主枝道。枝面濕滑，只留下無字採集結和被風拉長的葉痕，外側風孔是旋轉霧洞與空落深谷，完全沒有下層踏點。構圖要讓風壓、翻白葉片和缺失踏點清楚說明這不是通行路線風孔中的霧旋要有方向感，翻白葉背像一圈警示帶，東側安全枝路只在遠端露出短短綠光。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西北葉幕欄由大片亮葉層層疊成綠色牆面，露珠沿葉脈排列，後方枝縫只露出空白霧洞和零散鳥羽痕。南側能望見西界風孔枝的翻白葉影，東面高處傳來鳥民哨音。枝條欄上有藤結、羽毛印和濕苔，葉幕背後沒有穩定平台或可攀枝面；綠光被厚葉切成碎片，使這道葉牆像樹冠西北角自然長出的封欄。",
    "image": "emerald_canopy_fill_n26_8.png",
    "imagePrompt": "西北葉幕欄 emerald_canopy_fill_n26_8 in emerald_canopy Emerald Canopy, room function border road, broad bright leaves forming a green wall, south far-west wind-hole branch visible, east birdfolk whistle from higher perch, behind curtain only empty branch gaps, terrain glossy leaves, woven twig rail, dew beads, feather marks and high mist，大片亮葉遮成綠色牆面，南側可望見西界風孔枝的翻白葉影，東面高處傳來鳥民哨音。葉幕後方只有空落枝縫和霧光，枝條欄上有露珠、羽毛痕與藤結，提醒玩家回到內側路線。畫面要把葉幕畫成封閉 border blocker，而不是可穿過的密林入口或可攀牆面葉幕要由大葉層層疊成牆，露珠沿葉脈排列，後方枝縫只露出空白霧洞和鳥羽痕跡。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "雨棚西南冰封坡位在風暴高原雨棚西南側，薄冰坡面從下緣斜切上去，北側凍石小路滴著冰水，西側冰封橫道被硬雪堵住。冰皮半透明，底下露出濕石暗紋和細小黑砂，坡面沒有穩固踏點。硬雪牆被風削出層次，冷雨在石面凝成細亮線，遠處雨棚只留模糊岩影；整片坡像被凍雨封死的外緣。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n19_n12.png",
    "imagePrompt": "雨棚西南冰封坡 frostbite_pass_fill_n19_n12 in frostbite_pass Frostbite Pass, room function border road, frozen slope southwest of Storm Highlands rain shelf, north frozen stone path dripping icewater, west crossroad blocked by hard snow, terrain thin ice skin, packed snow wall, wet stone, blue shadow and freezing rain，薄冰坡面從畫面下緣斜切上去，北側凍石小路滴著冰水，西側冰封橫道被硬雪堵住，坡面沒有穩固踏點。冰皮要半透明且露出濕石暗紋，硬雪牆有風削層次，冷雨在石面形成細亮線；構圖要清楚表示這是純 blocker，避免高原邊界向南外擴，不可畫成可滑下的路。冷藍天光貼著坡面反射，濕石邊緣有霜粉堆積，遠處雨棚只留模糊岩影作地標，整體氣氛潮冷壓迫。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "雨棚西界凍石路牌立在霜咬隘口東側，牌面被冰痕覆住，只有木石輪廓能辨出邊界地標。北面崖門西界繼續抬升，南側薄冰坡被冷雨封住，東邊風暴高原雨棚透出較濕暖的灰綠氣流。地面保留東向濕石路線，冰水、雪泥和風削碎石分層清楚，冷暖氣流在路牌旁交會成濕白霧。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n19_n13.png",
    "imagePrompt": "雨棚西界凍石路牌 frostbite_pass_fill_n19_n13 in frostbite_pass Frostbite Pass, room function border road, frozen stone signpost at the pass edge, north cliff gate boundary rising, south thin ice slope sealed by cold rain, east warm wet air from Storm Highlands rain shelf, terrain ice-streaked stone, blank marker post, wet snow, gray cliff and blue-white drizzle，凍石路牌立在霜咬隘口東側，牌面不可有可讀文字，只用冰痕與木石形狀作邊界地標。北面崖門西界繼續抬升，南側薄冰坡被冷雨封住，東邊風暴高原雨棚透出較濕暖的灰綠氣流；地面要保留東向可走的濕石路線，冰水、雪泥和風削碎石分層清楚，呈現跨區端點, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "高原崖門西凍路牌站在霜咬隘口東北界，冰霜覆住木石牌身，牌面沒有字，只剩被風磨亮的邊角。北面惡魔邊境的冷影壓在山脊上，南側雨棚西界凍石路往下滑，東邊崖門吹來濕暖風。碎冰砂石路向東收束，西北冷影與東側濕霧形成明顯對比，路牌像釘在兩種氣候交界上的冷硬標記。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n19_n14.png",
    "imagePrompt": "高原崖門西凍路牌 frostbite_pass_fill_n19_n14 in frostbite_pass Frostbite Pass, room function border road, frozen marker west of Storm Highlands cliff gate, north demon frontier cold shadow over ridge, south rain shelf boundary road descending, east moist warm wind from cliff gate, terrain shattered ice gravel, blank signpost, wind-cut stone and sleet haze，凍路牌站在霜咬隘口東北界，牌面無字，只以冰霜覆蓋的木石結構標示端點。北面惡魔邊境冷影壓在山脊上，南側雨棚西界凍石路下滑，東邊崖門吹來濕暖風；畫面要保留向東進入高原崖門的碎冰砂石路，西北冷影與東側濕霧形成對比，不能畫成多方向叉路, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "東段冰封橫道夾在雨棚冰坡與極封門南側之間，冰面被密集裂縫切碎，東面薄冰坡反光刺眼，西面霜咬窄道被硬雪壓低。每片冰都被藍黑裂紋隔開，白霜邊和風壓雪層交疊成破碎網格。地面看似平坦卻沒有連續踏點，冷光在裂縫裡忽明忽暗，使整段橫道像一張凍住的碎玻璃。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n20_n12.png",
    "imagePrompt": "東段冰封橫道 frostbite_pass_fill_n20_n12 in frostbite_pass Frostbite Pass, room function border road, frozen transverse path between rain-shelf ice slope and polar seal gate south side, east glare from thin ice slope, west narrow pass pressed low by hard snow, terrain dense ice cracks, blue-black fissures, wind-packed snow and cold reflected light，冰封橫道被密集裂縫切碎，東面薄冰坡反光刺眼，西面霜咬窄道被硬雪壓低。冰面要有藍黑裂縫、白霜邊、被風壓實的雪層與刺眼冷光，每個看似踏點的冰片都被裂痕隔開；構圖要明確是純 blocker，不是正式通行路線或可越過的冰橋, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "極封門南霜脊橫在極北封門南面，北側門柱覆滿藍霜，西邊北行山脊露出風削石階，東側冰封橫道反著白光。倒冰柱和霜脊像天然拒馬，封住門背後外側空地。地面有藍霜殼、冰柱碎片、冷石刻痕和貼地霜霧，門柱後方散出幽藍冷光，讓霜脊既像地形障礙，也像封門的外層影子。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n21_n12.png",
    "imagePrompt": "極封門南霜脊 frostbite_pass_fill_n21_n12 in frostbite_pass Frostbite Pass, room function border road, frost ridge south of the polar seal gate, north blue-frosted gate pillars, west wind-cut stone steps on northbound ridge, east white glare from frozen crossroad, terrain hoarfrost spine, fallen ice pillars, blue frost crust and carved cold stone，霜脊橫在極封門南面，北側門柱覆滿藍霜，西邊北行山脊露出風削石階，東側冰封橫道反著白光。倒冰柱和霜脊要像天然拒馬封住外側空地，地面有藍霜殼、冰柱碎片、冷石刻痕和雪塵；畫面不能暗示可繞到極封門背面，只是明確 blocker。門柱背後散出幽藍冷光，冰柱斷面要粗糙透明，霜霧貼地流動，極封門輪廓成為可辨識地標。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "龍息台東冰裂牆立在龍息冰棚北側偏東，南面岩棚保留焦黑霜痕，西邊雨雪哨旗索在風裡繃緊。牆縫灌出刺骨冷風，藍冰裂紋深且發暗，牆腳雪坡破碎不穩。黑霜痕、旗索剪影、冰粉和冷霧一起封住岩棚外側斜面，牆面暗藍內光與焦黑霜色互相咬合，像吐息與寒冰撞出的硬殼。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n22_n14.png",
    "imagePrompt": "龍息台東冰裂牆 frostbite_pass_fill_n22_n14 in frostbite_pass Frostbite Pass, room function border road, cracked ice wall east of dragon breath shelf, south scorched frost marks on rock shelf, west sleet watch flag ropes pulled tight by wind, terrain blue ice wall, blackened frost stains, knife-cold fissure wind and unstable snow slope，冰裂牆立在龍息岩棚北側偏東，南面岩棚保留焦黑霜痕，西邊雨雪哨旗索在風裡繃緊。牆縫灌出刺骨冷風，藍冰裂紋要深且發暗，牆腳雪坡破碎不穩，不能留下可鑽的縫；畫面用黑霜痕、旗索剪影、冰粉和冷霧封住岩棚外側斜面，呈現純 blocker。牆面有暗藍內光與黑焦霜形成對比，碎冰材質銳利厚重，風聲感強，旗索作為西側地標。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "空山風門東霜牆立在霜咬隘口西北界，西面空山入口風門只傳出低鳴，北側雪門路牌被冰霜覆住，東邊凍結折路消失在白霧裡。霜牆有風削冰紋、灰山陰影、硬霜層和細雪塵，牆腳沒有裂縫或攀點。它像空山與隘口之間被寒風砌出的界線，將低鳴風門留在西側霧影中。近旁霜粉不斷堆積在石縫與繩結上，讓最近的方向線索仍能從白茫茫風雪中分辨出來。",
    "image": "frostbite_pass_fill_n27_n14.png",
    "imagePrompt": "空山風門東霜牆 frostbite_pass_fill_n27_n14 in frostbite_pass Frostbite Pass, room function border road, frost wall east of hollow mountain wind gate, west low humming wind gate entrance, north snow gate marker buried in frost, east frozen switchback fading into white fog, terrain rime wall, wind-carved ice, buried blank marker, snow dust and gray mountain shadow，霜牆立在霜咬隘口西北界，西面空山入口風門只傳出低鳴，北側雪門路牌被冰霜覆住且不可有可讀文字，東邊凍折返道消失在白霧裡。霜牆要有風削冰紋、灰山陰影、雪塵和硬霜層，清楚標示空山與隘口分界，不開跨區路也沒有可攀裂縫, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北境王座南雪封位在冰封雪原最北側，南面廢棄雪橇的車轍被風雪掩住，西側冰封王座的藍光隔著白霧閃動。凍土小路在冰面裂聲中斷開，雪面插著碎冰旗與裂縫警樁，是 邊界封閉點，不讓玩家硬穿城堡外冰原。北境王座南雪封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "龍息裂谷西冰封位在龍息裂谷西側，東面藍色霜光從裂縫裡吐出，北邊冰晶尖塔折射出淡光。凍結通道被橫向冰牆切斷，寒風會凍裂鎧甲，是阻止玩家繞進裂谷背面的 封閉點。龍息裂谷西冰封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "龍息裂谷東雪脊封被冰風削成狹長雪脊，西側龍息裂谷外緣泛著藍色霜光，北面更深白霧遮住冰封城堡方向，南側裂谷雪徑貼著斷冰下降。這裡是 邊界封閉點，標示東側雪原不可通行。龍息裂谷東雪脊封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "裂谷旁的雪徑被凍霧覆住，西側能回望龍息裂谷，北側接上更高的雪脊。這裡暫時補成可通行路段，讓冰封雪原東側區域不會被座標空格切斷。裂谷雪徑周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "西北凝砂封坡貼著琉璃沙丘邊界，北側熱風把碎玻砂吹成白線，東面才有較穩的沙脊。坡面像凝固海浪但會割傷靴底，這格是封閉 封閉點，不安排通行出口。西北凝砂封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_1_19.png",
    "imagePrompt": "西北凝砂封坡 glass_dunes_fill_1_19 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，西北凝砂封坡貼著琉璃沙丘邊界，北側熱風把碎玻砂吹成白線，東面才有較穩的沙脊。坡面像凝固海浪但會割傷靴底，這格是封閉 blocker，不安排通行出口。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西南玻浪牆被大片透明砂殼堆成高牆，北側仍能望見日照西門的白光，東面沙丘裂口才是安全方向。這裡是 邊界封閉點，標示沙海邊界但不提供穿越路線，牆下全是流砂與碎玻。西南玻浪牆周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_1_22.png",
    "imagePrompt": "西南玻浪牆 glass_dunes_fill_1_22 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，西南玻浪牆被大片透明砂殼堆成高牆，北側仍能望見日照西門的白光，東面沙丘裂口才是安全方向。這裡是 border blocker，標示沙海邊界但不提供穿越路線，牆下全是流砂與碎玻。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "雷草西緣位於琉璃沙丘與雷鳴草原交界，西側玻璃砂逐漸被濕草根壓住，東面滾雷門的銅鈴在風裡晃動。草葉間有雷露草採集痕，這裡是西側採集通路，讓玩家從沙地踏入草原。雷草西緣周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "雷雨草徑被短暴雨打得濕亮，北面雷草西緣還殘留玻璃砂，南面風祭草坡有祭旗聲，東側雷池水洼冒著藍白火花。草根旁可採雷露草與帶電泥粒，這裡是正式採集邊界。雷雨草徑周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "風祭草坡位於雷鳴草原西南側，北面雷雨草徑積著淺水，東面風祭小祠的旗繩拍打木柱。坡腳仍有晶化砂殼與雷草種子採集點，這裡是邊界採集通路，標示沙丘與草原的南端交界。風祭草坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "西南砂殼封口在玻璃砂路外側凝成硬殼，西面熱風捲起碎砂，東側遠處可見沙丘主路的繩標。這格是封閉 封閉點，避免玩家把不穩定砂殼當成可行小路。西南砂殼封口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_2_23.png",
    "imagePrompt": "西南砂殼封口 glass_dunes_fill_2_23 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，西南砂殼封口在玻璃砂路外側凝成硬殼，西面熱風捲起碎砂，東側遠處可見沙丘主路的繩標。這格是封閉 blocker，避免玩家把不穩定砂殼當成可行小路。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "碎玻窄脊位在鹽風切谷與玻暴盆地之間，白色鹽霧從西側刮來，東側盆地外緣則翻起細小玻砂。玩家可沿繩標辨認安全落腳點，也要留意風暴把舊腳印刮散。碎玻窄脊周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_3_19.png",
    "imagePrompt": "碎玻窄脊 glass_dunes_fill_3_19 in glass_dunes 琉璃沙丘, room function border road, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，碎玻窄脊位在鹽風切谷與玻暴盆地之間，白色鹽霧從西側刮來，東側盆地外緣則翻起細小玻砂。玩家可沿繩標辨認安全落腳點，也要留意風暴把舊腳印刮散。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。clear route endpoint with one visible safe direction and the locked unsafe side blocked by drift sand；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南風沙脊欄被風切成細長玻砂脊，北側沙丘主路仍有腳印，東面熱浪遮住更深的沙海。砂脊會在日照下滑動，這裡只作為封閉邊界與路線警示。南風沙脊欄周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_3_23.png",
    "imagePrompt": "南風沙脊欄 glass_dunes_fill_3_23 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，南風沙脊欄被風切成細長玻砂脊，北側沙丘主路仍有腳印，東面熱浪遮住更深的沙海。砂脊會在日照下滑動，這裡只作為封閉邊界與路線警示。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南晶砂採痕散在低矮沙丘之間，北側能回望碎玻窄脊，東面晶砂閃得像水面。地上只有採集留下的小坑與繩標殘段，這格是封閉 封閉點，不是正式通道。南晶砂採痕周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_4_23.png",
    "imagePrompt": "南晶砂採痕 glass_dunes_fill_4_23 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，南晶砂採痕散在低矮沙丘之間，北側能回望碎玻窄脊，東面晶砂閃得像水面。地上只有採集留下的小坑與繩標殘段，這格是封閉 blocker，不是正式通道。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南側七彩砂壁在陽光下折出大片虹光，北面可見晶砂小徑的採集坑，南側砂壁過陡無法落腳。這裡是封閉 封閉點，標示沙丘高度差，不接玩家主路。南側七彩砂壁周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_4_24.png",
    "imagePrompt": "南側七彩砂壁 glass_dunes_fill_4_24 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，南側七彩砂壁在陽光下折出大片虹光，北面可見晶砂小徑的採集坑，南側砂壁過陡無法落腳。這裡是封閉 blocker，標示沙丘高度差，不接玩家主路。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北中玻砂封坡覆著大片透明砂粒，西側折光砂道仍有白線反光，南面則落入鬆散沙谷。這格是封閉 封閉點，遠處沙丘像凝固海浪，但沒有安全踏點。北中玻砂封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_5_19.png",
    "imagePrompt": "北中玻砂封坡 glass_dunes_fill_5_19 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，北中玻砂封坡覆著大片透明砂粒，西側折光砂道仍有白線反光，南面則落入鬆散沙谷。這格是封閉 blocker，遠處沙丘像凝固海浪，但沒有安全踏點。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南緣碎浪坡貼著沙海邊界，北側主路繩標被風埋住一半，東面砂面持續崩落。這裡是封閉 封閉點，提醒玩家回到穩定沙脊，不要沿邊坡前進或下切。南緣碎浪坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_5_23.png",
    "imagePrompt": "南緣碎浪坡 glass_dunes_fill_5_23 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，南緣碎浪坡貼著沙海邊界，北側主路繩標被風埋住一半，東面砂面持續崩落。這裡是封閉 blocker，提醒玩家回到穩定沙脊，不要沿邊坡前進或下切。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "東南玻砂欄在沙丘外圈形成低矮弧線，西側能看見南緣碎浪坡，東面熱浪後方沒有固定路標。這格是封閉 邊界封閉點，只保留晶砂採集痕跡與風蝕警示。東南玻砂欄周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_6_23.png",
    "imagePrompt": "東南玻砂欄 glass_dunes_fill_6_23 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，東南玻砂欄在沙丘外圈形成低矮弧線，西側能看見南緣碎浪坡，東面熱浪後方沒有固定路標。這格是封閉 border blocker，只保留晶砂採集痕跡與風蝕警示。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "東側日焰封線靠近琉璃沙丘外緣，西南面主路仍有淡淡腳印，東側熱光把砂面照成白焰。這裡是封閉 邊界封閉點，不提供通往更東側的出口，也沒有繩標。東側日焰封線周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_7_20.png",
    "imagePrompt": "東側日焰封線 glass_dunes_fill_7_20 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，東側日焰封線靠近琉璃沙丘外緣，西南面主路仍有淡淡腳印，東側熱光把砂面照成白焰。這裡是封閉 border blocker，不提供通往更東側的出口，也沒有繩標。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "東南晶裂採坑散著細碎透明晶砂，北側日焰封線反光刺眼，西面則能看見較低的砂谷。坑邊只有採集痕跡與斷裂繩標，這格是封閉 封閉點，不是可走小徑。東南晶裂採坑周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_7_22.png",
    "imagePrompt": "東南晶裂採坑 glass_dunes_fill_7_22 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，東南晶裂採坑散著細碎透明晶砂，北側日焰封線反光刺眼，西面則能看見較低的砂谷。坑邊只有採集痕跡與斷裂繩標，這格是封閉 blocker，不是可走小徑。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "傳送庭北牆根封位在鐵木要塞西北牆腳，南側可望見傳送陣庭的藍光，東邊舊蓄水池傳來濕冷水聲。牆根堆著可回收的鐵木碎板與補給牌，但北面垛口封死，是城牆 封閉點。傳送庭北牆根封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "ironwood_fort_fill_0_12.png",
    "imagePrompt": "傳送庭北牆根封 ironwood_fort_fill_0_12 in ironwood_fort 鐵木要塞, room function danger pocket, terrain fortress wall foot with ironwood palisade, dark stone blocks, sealed crenellation, supply scraps and cold military blue portal glow nearby，傳送庭北牆根封位在鐵木要塞西北牆腳，南側可望見傳送陣庭的藍光，東邊舊蓄水池傳來濕冷水聲。牆根堆著可回收的鐵木碎板與補給牌，但北面垛口封死，是城牆 blocker。 畫面要反映西北牆角、南側傳送庭藍光、東側蓄水池潮氣與北側封死城牆；sealed fortress blocker with no route beyond the wall, ironwood debris and supply markers in foreground, cold stone, iron-bound timber, torch smoke and damp military atmosphere, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "鐵木林南補給封道貼著要塞西牆延伸，北側鐵木林根系鑽入石縫，南面兵營通路被拒馬截斷，東邊監牢外牆只露出鐵窗。這裡可搜集零散補給牌，但主要作為 封閉點。鐵木林南補給封道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "ironwood_fort_fill_0_17.png",
    "imagePrompt": "鐵木林南補給封道 ironwood_fort_fill_0_17 in ironwood_fort 鐵木要塞, room function resource path, terrain west fortress wall service lane with ironwood roots, prison wall windows, broken barricades, scattered supply tags，鐵木林南補給封道貼著要塞西牆延伸，北側鐵木林根系鑽入石縫，南面兵營通路被拒馬截斷，東邊監牢外牆只露出鐵窗。這裡可搜集零散補給牌，但主要作為 blocker。 畫面要反映西牆封道、北側鐵木根系、南側拒馬與東側監牢外牆鐵窗；resource blocker, salvageable supply scraps but no passage through the barricade, ironwood timber, wet stone seams, military shadow, torchlit dust, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南牆兵營玻砂界位在鐵木要塞最南牆腳，北面補給封道仍有軍靴刮痕，東側琉璃沙丘北緣的晶砂已堆到牆根。這裡是 邊界封閉點，可撿到破損軍牌，但南方牆外被坍塌拒馬鎖住。南牆兵營玻砂界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "ironwood_fort_fill_0_18.png",
    "imagePrompt": "南牆兵營玻砂界 ironwood_fort_fill_0_18 in ironwood_fort 鐵木要塞, room function danger pocket, terrain south barracks wall boundary where fortress stone meets glass dunes crystal sand, collapsed chevaux-de-frise and broken military tags，南牆兵營玻砂界位在鐵木要塞最南牆腳，北面補給封道仍有軍靴刮痕，東側琉璃沙丘北緣的晶砂已堆到牆根。這裡是 border blocker，可撿到破損軍牌，但南方牆外被坍塌拒馬鎖住。 畫面要反映北面軍靴刮痕、東側晶砂堆到牆根、南側坍塌拒馬封死牆外通路；fortress-to-glass-dunes border blocker, main subject is a massive black stone barracks wall with ironwood barricade foreground, harsh low sun from the glass sand side, cold wall shadow, metallic military tags, cracked stone, transparent crystal sand, dry wind and tense border atmosphere, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "琉璃沙丘北緣的晶砂貼著要塞南方展開，碎玻砂在風裡發亮，南面可接入更深沙丘，北側仍能看見鐵木要塞的牆影。這裡是 邊界 採集邊界，不直接開往要塞，也沒有北門路標。北緣晶砂周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_1_18.png",
    "imagePrompt": "北緣晶砂 glass_dunes_fill_1_18 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，琉璃沙丘北緣的晶砂貼著要塞南方展開，碎玻砂在風裡發亮，南面可接入更深沙丘，北側仍能看見鐵木要塞的牆影。這裡是 border 採集邊界，不直接開往要塞，也沒有北門路標。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "玻砂北徑沿著乾熱風線延伸，腳下砂粒像碎鏡一樣磨響，南側沙丘開始升高，北面要塞石牆只剩低沉輪廓。這裡是封閉 封閉點，避免玩家誤往北側硬穿。玻砂北徑周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_2_18.png",
    "imagePrompt": "玻砂北徑 glass_dunes_fill_2_18 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，玻砂北徑沿著乾熱風線延伸，腳下砂粒像碎鏡一樣磨響，南側沙丘開始升高，北面要塞石牆只剩低沉輪廓。這裡是封閉 blocker，避免玩家誤往北側硬穿。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "熱風砂脊把北方硬土切成透明砂線，東西兩側都有晶砂起伏，往南能看見琉璃沙丘內部的白亮反光。這格是封閉 封閉點，只標示北緣地貌和熱風斷線。熱風砂脊周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_3_18.png",
    "imagePrompt": "熱風砂脊 glass_dunes_fill_3_18 in glass_dunes 琉璃沙丘, room function resource path, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，熱風砂脊把北方硬土切成透明砂線，東西兩側都有晶砂起伏，往南能看見琉璃沙丘內部的白亮反光。這格是封閉 blocker，只標示北緣地貌和熱風斷線。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "高堡西軍械封道位在高堡西側牆道，西面指揮步道仍有紅旗號令，南側高堡門影壓在石階上，北邊信號塔火盆忽明忽暗。鐵木拒馬堆成臨時軍械欄，可搜補給碎片，但封住東側岔路。高堡西軍械封道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "ironwood_fort_fill_4_15.png",
    "imagePrompt": "高堡西軍械封道 ironwood_fort_fill_4_15 in ironwood_fort 鐵木要塞, room function resource path, terrain high keep western wall walk with armory barricade, red command flags, stone stair shadow, signal tower brazier， 高堡西軍械封道位在高堡西側牆道，西面指揮步道仍有紅旗號令，南側高堡門影壓在石階上，北邊信號塔火盆忽明忽暗。鐵木拒馬堆成臨時軍械欄，可搜補給碎片，但封住東側岔路。 畫面要反映高堡西側、紅旗指揮步道、南側高堡門影、北邊信號塔火盆與東側軍械欄封路；resource blocker with stacked ironwood barricades and salvage fragments, austere military stonework, smoke, red banner accents, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "折光砂道在北緣形成一排低矮玻丘，陽光被砂面切成細碎白線，南側沙海更亮，北方要塞聲音被熱浪吞沒。此處封住北側邊界，不提供出口。折光砂道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_4_18.png",
    "imagePrompt": "折光砂道 glass_dunes_fill_4_18 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，折光砂道在北緣形成一排低矮玻丘，陽光被砂面切成細碎白線，南側沙海更亮，北方要塞聲音被熱浪吞沒。此處封住北側邊界，不提供出口。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "鏡砂邊坡貼著沙丘北側展開，玻化砂殼在靴下碎裂，往南能接入高熱沙脊，東西兩側都有稀薄的折射光。這裡是封閉 邊界封閉點，不直接開路，坡下沒有木樁。鏡砂邊坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_5_18.png",
    "imagePrompt": "鏡砂邊坡 glass_dunes_fill_5_18 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，鏡砂邊坡貼著沙丘北側展開，玻化砂殼在靴下碎裂，往南能接入高熱沙脊，東西兩側都有稀薄的折射光。這裡是封閉 border blocker，不直接開路，坡下沒有木樁。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北砂亮線在琉璃沙丘邊界拉出一道白色反光，南面沙丘像凝固浪脊，西側仍有要塞邊地的灰塵殘留。這格是封閉邊界，提醒玩家回內側主路。北砂亮線周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_6_18.png",
    "imagePrompt": "北砂亮線 glass_dunes_fill_6_18 in glass_dunes 琉璃沙丘, room function danger pocket, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，北砂亮線在琉璃沙丘邊界拉出一道白色反光，南面沙丘像凝固浪脊，西側仍有要塞邊地的灰塵殘留。這格是封閉邊界，提醒玩家回內側主路。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。sealed blocker boundary with no safe route beyond the marked edge；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南哨界碑封口位於王國邊境西南角，北側巡邏路被草叢遮住，東面遠處可見獵場木柵與舊橡樹影。磨損界碑旁堆著拒馬、斷旗桿與警戒繩，這格是封閉 邊界封閉點，不開放穿越，只能折回內側巡邏線。泥地上的馬蹄印也被故意抹平。南哨界碑封口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n10_n3.png",
    "imagePrompt": "南哨界碑封口 kingdom_frontier_fill_n10_n3 in kingdom_frontier 王國邊境, room function danger pocket, terrain sealed border road with worn boundary stele, wooden cheval de frise, broken banner pole, warning rope and muddy patrol ground, visible path cues: north patrol road hidden by grass, east distant royal hunting fence and old oak shadow, no open passage beyond the marker，南哨界碑封口位於王國邊境西南角，北側巡邏路被草叢遮住，東面遠處可見獵場木柵與舊橡樹影；磨損界碑旁堆著拒馬、斷旗桿與警戒繩，泥地馬蹄印被抹平，構圖要清楚呈現封閉 border blocker 與只能折回內側巡邏線的危險邊界, slightly elevated adventurer eye view, clear foreground blocked edge, readable midground landmark, tactile mud, grass, old stone and military wood materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "舊橡獵牆門貼著王國邊境的東側矮牆，西面軍方界碑排成直線，東面能看見王家獵場老橡樹的樹冠。這裡是跨區 邊界 路線，只沿東側獵牆缺口通往獵場；牆下有巡邏告示、王室獵印與軍方放行木牌。牆洞旁還掛著破舊通行繩。舊橡獵牆門周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n10_n4.png",
    "imagePrompt": "舊橡獵牆門 kingdom_frontier_fill_n10_n4 in kingdom_frontier 王國邊境, room function border road, terrain old hunting wall gate, low frontier wall, boundary stones, patrol notice board, royal hunting seal, military pass plank and frayed passage rope, visible path cues: west military boundary stones in a straight line, east wall gap leading toward royal hunting grounds old oak canopy，舊橡獵牆門貼著王國邊境東側矮牆，西面軍方界碑排成直線，東面王家獵場老橡樹樹冠越過牆洞；畫面要讓東側獵牆缺口是唯一可讀出口，西側軍方拒馬封住回切邊牆走道, slightly elevated adventurer eye view, clear foreground walking space, readable midground gate landmark, weathered stone, rope, oak leaves and military timber materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "銀徑軍界口夾在邊境哨旗與王家獵場銀色小徑之間，西側關卡木牌寫著軍管警示，東側獵場銀葉在風裡閃動。這是跨區 邊界 路線，不是普通前線支路；兩側都有界樁、巡邏繩、放行刻痕與折返告示。腳下碎石被軍靴壓出凹痕。銀徑軍界口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n10_n5.png",
    "imagePrompt": "銀徑軍界口 kingdom_frontier_fill_n10_n5 in kingdom_frontier 王國邊境, room function border road, terrain military border checkpoint opening, sentry flags, wooden warning board, boundary posts, patrol rope, pass marks, return notice and boot-crushed gravel road, visible path cues: west barred military gate, east silver-leaf royal hunting trail shimmering in wind，銀徑軍界口夾在邊境哨旗與王家獵場銀色小徑之間，西側關卡木牌是軍管警示，東側銀葉路標清楚指向獵場；構圖要呈現跨區 border route 而不是普通前線支路, slightly elevated adventurer eye view, clear foreground gravel path, readable midground checkpoint landmark, cold metal, rough timber, silver leaves and trampled stone materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "邊境巡邏路在獵場鹿徑西側延伸，西面是軍方哨旗與低牆，東側草叢裡可見王室與軍方的雙重界標。這是通往王家獵場鹿徑的 邊界 路線，路面仍受巡邏管制；界碑旁有警告牌、蹄印與巡邏繩標。玩家可辨認唯一放行缺口。邊境巡邏路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n10_n6.png",
    "imagePrompt": "邊境巡邏路 kingdom_frontier_fill_n10_n6 in kingdom_frontier 王國邊境, room function border road, terrain controlled patrol road beside a low military wall, sentry flags, double royal and military boundary markers, warning board, hoofprints, patrol rope and trampled grass, visible path cues: west low wall blocks frontier interior, east grass gap leads toward royal hunting grounds deer run，邊境巡邏路在獵場鹿徑西側延伸，西面軍方哨旗與低牆封住巡邏路，東側草叢中雙重界標標出唯一放行缺口；畫面需清楚呈現受管制的跨區路線, slightly elevated adventurer eye view, clear foreground walking space, readable midground marker gap, damp earth, grass, rope, stone and military cloth materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "號角獵門口穿過王室獵場西側界碑，西面邊境巡邏路仍有軍靴印，東側獵場號角門掛著舊銅環。磨損石墩標出獵場與軍管區分界，是明確跨區通路；兩側都有巡邏繩標、放行牌與獵角警示。門下石板刻著王室獵令。號角獵門口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n10_n7.png",
    "imagePrompt": "號角獵門口 kingdom_frontier_fill_n10_n7 in kingdom_frontier 王國邊境, room function border road, terrain royal horn gate border passage with worn stone posts, old copper ring, patrol rope markers, pass sign, hunting horn warning and engraved stone slab, visible path cues: west frontier patrol road with boot marks, east royal hunting gate and horn posts，號角獵門口穿過王室獵場西側界碑，西面邊境巡邏路留有軍靴印，東側號角門掛著舊銅環；構圖要讓東側王室界碑與銅環門柱是明確跨區出口，西側拒馬封住回穿路線, slightly elevated adventurer eye view, clear foreground stone threshold, readable midground horn gate landmark, bronze, weathered stone, rope and military dirt materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "南側殘哨臺立在低矮土坡上，西側有崩落崗哨木樁，東面能望見舊橡獵牆門與獵場矮牆。磨損界碑把巡邏線截斷，這格是封閉 封閉點，只作邊境輪廓提示、風向標記與軍旗殘影，不接玩家主路。哨臺石階已被雜草吞沒。南側殘哨臺周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n11_n3.png",
    "imagePrompt": "南側殘哨臺 kingdom_frontier_fill_n11_n3 in kingdom_frontier 王國邊境, room function danger pocket, terrain ruined lookout platform on a low dirt rise, collapsed sentry posts, worn boundary stele, swallowed stone steps, weeds, wind vane and torn military flag shadow, visible path cues: west broken guard stakes, east old oak hunting wall gate and low hunting wall visible in the distance，南側殘哨臺立在低矮土坡上，磨損界碑截斷巡邏線，石階被雜草吞沒；畫面要呈現封閉 blocker，只作邊境輪廓與風向提示，不接玩家主路, slightly elevated adventurer eye view, clear foreground blocked slope, readable midground ruined watchpost landmark, soil, weeds, splintered timber and old stone materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "中段旗繩封路在邊牆下方拉起斑駁軍旗，北側舊橡獵牆門的樹影仍可見，東面前線草地被巡邏繩封住。這是封閉 邊界封閉點，不接玩家主路或獵場小徑；旗繩旁的泥印與斷槍只提示戰線曾經後撤。低牆缺口被木樁補死。中段旗繩封路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n13_n4.png",
    "imagePrompt": "中段旗繩封路 kingdom_frontier_fill_n13_n4 in kingdom_frontier 王國邊境, room function danger pocket, terrain sealed border wall gap with stained military flag rope, patrol rope, dead timber stakes, muddy prints, broken spear and low wall stones, visible path cues: north old oak hunting wall gate shadow, east frontline grass sealed by patrol cord, no path to main route or hunting trail，中段旗繩封路在邊牆下方拉起斑駁軍旗，低牆缺口被木樁補死；畫面要清楚顯示這是封閉 border blocker，泥印與斷槍只提示戰線後撤，不能讀成可穿越道路, slightly elevated adventurer eye view, clear foreground sealed rope line, readable midground wall gap landmark, wet mud, old cloth, splintered wood and stone materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "鹿徑西拒馬靠近王家獵場西側，北面可望見銀徑軍界口，東側鹿徑被木拒馬隔在外。界碑旁只有巡邏腳印、折斷箭桿與草叢警戒繩，這格是封閉 封閉點，提示玩家不要硬穿草叢或繞入獵場。拒馬尖端塗著紅色警漆。鹿徑西拒馬周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n14_n6.png",
    "imagePrompt": "鹿徑西拒馬 kingdom_frontier_fill_n14_n6 in kingdom_frontier 王國邊境, room function danger pocket, terrain wooden cheval de frise beside deer-run grass, boundary stele, patrol footprints, broken arrow shafts, grass warning rope and red warning paint on sharpened stakes, visible path cues: north silver trail military border mouth, east deer path blocked outside the barrier，鹿徑西拒馬靠近王家獵場西側，東側鹿徑被木拒馬隔在外，界碑旁只有巡邏腳印與折斷箭桿；構圖要警告玩家不要硬穿草叢或繞入獵場, slightly elevated adventurer eye view, clear foreground sharp barrier, readable midground deer-run edge, tall grass, red paint, rough timber and trampled earth materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "北角軍旗欄位於邊境高處，南側鹿徑西拒馬的木刺仍可看見，東面獵場樹影被旗欄隔開。此處是封閉 邊界封閉點，沒有安全出口或服務點，只作警戒邊界；風裡的旗聲提醒玩家回到正式巡邏路。旗欄下埋著舊營釘。北角軍旗欄周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n15_n7.png",
    "imagePrompt": "北角軍旗欄 kingdom_frontier_fill_n15_n7 in kingdom_frontier 王國邊境, room function danger pocket, terrain high frontier flag rail with old camp pegs, wind-torn military banners, wooden stakes, bare ridge grass and warning boundary ropes, visible path cues: south wooden spikes of deer-run barricade, east hunting ground tree shadows separated by the flag rail，北角軍旗欄位於邊境高處，沒有安全出口或服務點，只作警戒邊界；畫面要以風中軍旗聲與高處欄杆提示玩家回到正式巡邏路, slightly elevated adventurer eye view, clear foreground warning rail, readable midground high border landmark, dry grass, rope, torn cloth, pegs and weathered wood materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西段舊牆哨貼著殘破邊牆，東側遠處可見南側殘哨臺，北面風把軍旗聲吹得斷續。牆基塌陷封住巡邏線，這格是封閉 封閉點，只保留邊境地貌、哨臺殘影與碎石拒馬，不提供安全通路。牆縫裡插著褪色巡邏牌。西段舊牆哨周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n17_n3.png",
    "imagePrompt": "西段舊牆哨 kingdom_frontier_fill_n17_n3 in kingdom_frontier 王國邊境, room function danger pocket, terrain ruined western wall sentry post, collapsed wall base, broken stone cheval de frise, faded patrol sign in a wall crack and torn flags in cold wind, visible path cues: east distant southern ruined lookout platform, north intermittent military flag line, no safe patrol route through the collapse，西段舊牆哨貼著殘破邊牆，牆基塌陷封住巡邏線；畫面要保留邊境地貌、哨臺殘影與碎石拒馬，清楚呈現不提供安全通路的封閉 blocker, slightly elevated adventurer eye view, clear foreground collapsed wall, readable midground sentry post landmark, cracked stone, faded wood, gravel and torn cloth materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西北敵影牆在邊境最外側形成死角，東側舊牆哨的石影被荒草遮住，北面遠處可見敵國輪廓。這裡是封閉 邊界封閉點，牆下沒有可通行門洞或巡邏缺口；碎旗與警戒木牌只留下威脅提示。牆外霧線完全不可踏入。西北敵影牆周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n18_n4.png",
    "imagePrompt": "西北敵影牆 kingdom_frontier_fill_n18_n4 in kingdom_frontier 王國邊境, room function danger pocket, terrain outer frontier dead-end wall, overgrown ruined stones, broken banner scraps, warning wooden placard, sealed wall base and unreachable enemy fog line, visible path cues: east old wall sentry stone shadow hidden by wild grass, north distant enemy kingdom silhouette beyond the wall，西北敵影牆在邊境最外側形成死角，牆下沒有可通行門洞或巡邏缺口；碎旗與警戒木牌只留下威脅提示，牆外霧線完全不可踏入, slightly elevated adventurer eye view, clear foreground sealed wall foot, readable midground enemy-shadow wall landmark, wet grass, old stone, broken cloth and cold mist materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "西北荒草哨被高草包圍，南側西北敵影牆仍露出石角，東面巡邏路標被泥土埋住。磨損界碑旁只有舊哨火灰、斷箭與塌旗座，這格是封閉 封閉點，不接出新道路，只提示邊境外側危險。草中藏著失效警鈴與半截警戒木牌。西北荒草哨周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingdom_frontier_fill_n18_n6.png",
    "imagePrompt": "西北荒草哨 kingdom_frontier_fill_n18_n6 in kingdom_frontier 王國邊境, room function danger pocket, terrain abandoned grass-choked sentry post with worn boundary stele, old watchfire ash, broken arrows, collapsed flag base, failed warning bell and half-buried warning placard, visible path cues: south northwest enemy wall stone corner, east patrol road marker buried in mud, no new road leaving the tall grass，西北荒草哨被高草包圍，磨損界碑旁只有舊哨火灰、斷箭與塌旗座；畫面要提示邊境外側危險，不接出新道路, slightly elevated adventurer eye view, clear foreground tall grass edge, readable midground abandoned sentry landmark, ash, mud, dead grass, old iron and cracked stone materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "草藥棚北封街夾在北側守衛哨與東側草藥廣場之間，石板路面被臨時木架、藥草箱和帆布雨棚堵住。這裡是市集內部 封閉點，標示攤棚後勤區不開放通行；玩家只能看見藥草分類牌與搬貨路線，不能在此交易、接任務或穿越攤棚。草藥棚北封街周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "西北貨棚封巷位在傳送廣場北面，南側可聽見旅人經過石階，東側井庭旁堆著水桶、布包和卸貨木架。貨棚帳繩橫過路口，這格是服務區邊緣 封閉點，只作市集邊界與動線提示；玩家可辨認補給棚位置，但不能進入貨棚後場。西北貨棚封巷周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "南市競技門廊位於王道市集南緣，北面攤棚聲逐漸被石牆擋住，南側階梯直接接向競技城區的獎品櫃台。這裡是跨區 邊界 路線，守衛只放行往南的觀賽人流；門廊旁票亭可確認入場方向，但側門、貨車門和回切小巷全部封閉。南市競技門廊周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "拍賣棚下封道位於拍賣帳篷南側，北面帆布遮住木槌聲，東側高陽台的石階被繩欄隔開。地上有車轍、搬運板痕與貨單木牌，但這裡是市集後勤 封閉點；玩家可看出拍賣貨物流向，不能穿越、競標或使用商店服務。拍賣棚下封道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "鐵匠北貨欄貼著鐵匠鋪列北面，南側爐火熱氣從石縫竄出，西面酒館前的招牌在棚影裡晃動。整排鐵料箱、冷卻水桶和未領貨牌鎖住通道，這格是封閉 封閉點，只提示鍛造服務區邊界，不是可互動店面，也不接市集後街。鐵匠北貨欄周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "高陽台西封街在市集東半部收窄，西側高陽台的石欄與拱柱投下陰影，北面帳冊後巷傳來紙頁聲，東側攤棚通道被布幕遮住。這格是市集 封閉點，只保留石街、陽台建築邊界與服務動線提示；玩家不能從後巷繞入櫃台。高陽台西封街周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "kingsroad_market_fill_28_3.png",
    "imagePrompt": "高陽台西封街 kingsroad_market_fill_28_3 in kingsroad_market 王道市集, room function danger pocket, terrain stone market road, canvas awnings, guard rails, wagon ruts, lanterns and blue portal glow, visible path cues: north south east west nearby landmarks implied by sealed boundary and adjacent map roads, source room details: 高陽台西封街在市集東半部收窄，西側高陽台的石欄與拱柱投下陰影，北面帳冊後巷傳來紙頁聲，東側攤棚通道被布幕遮住。這格是市集 blocker，只保留石街、陽台建築邊界與服務動線提示；玩家不能從後巷繞入櫃台。, busy but grounded market boundary, practical town service mood, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
    "exits": [],
    "mapSymbol": "[·]",
    "mapX": 5,
    "mapY": 4,
    "worldX": 28,
    "worldY": 3
  },
};
