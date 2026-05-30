import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_FILLER_ROOMS_PART_004: Record<string, RoomDef> = {
"glass_dunes_fill_0_21": {
    "id": "glass_dunes_fill_0_21",
    "name": "日照西門",
    "zone": "glass_dunes",
    "description": "日照西門是一段被玻砂覆住的邊界路，西側仍有紅岩荒地的乾熱氣味，東側日照玻門反射出刺眼白光。這裡是 邊界 路線端點，需沿東側門影進入沙丘，西側舊路已被流砂吞沒。日照西門周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "glass_dunes_fill_0_21.png",
    "imagePrompt": "日照西門 glass_dunes_fill_0_21 in glass_dunes 琉璃沙丘, room function border road, terrain glass dunes with transparent sand, mirror-like glass shards, heat shimmer, rope markers, wind-carved crystal sand ridges and white sun glare，日照西門是一段被玻砂覆住的邊界路，西側仍有紅岩荒地的乾熱氣味，東側日照玻門反射出刺眼白光。這裡是 border 路線端點，需沿東側門影進入沙丘，西側舊路已被流砂吞沒。 畫面要反映實際座標邊界與相鄰地貌：玻砂、透明砂殼、碎晶、流砂、熱風白線與遠處沙丘主路或邊界地標。clear route endpoint with one visible safe direction and the locked unsafe side blocked by drift sand；材質需有割裂玻砂、乾熱風、虹光折射與危險坡面，氣氛乾燥刺眼但路徑或封閉意圖清楚。, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "火口流亡熱裂道位於猩紅火口南側，北面赤紅 crater 邊緣冒著熱霧，南面流亡者洞穴的陰影貼著乾谷。這裡是正式 邊界 路線，用來串接火口與流亡洞，不放怪物或採集互動。火口流亡熱裂道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "猩紅裂光西路位於紅岩荒地北緣，北面暗林邊界的陰影被熱浪推開，南側伏擊峽谷有砂塵盤旋，東面猩紅火口照亮裂石。這裡是 邊界 路線，串接熔岩蟲陷坑與火口外緣，不提供北側跨林捷徑。猩紅裂光西路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "決鬥東刻痕路貼著決鬥石圈西側，北面盜匪營地旗布在熱風裡拍打，西面刻痕路繼續通往回聲拱岩。這裡是正式 邊界 路線，用紅岩刻線引導玩家在兩處地標間移動。決鬥東刻痕路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "熔蟲東熱裂道位於熔岩蟲陷坑東側，西面坑壁有焦黑鑽痕，南側火靈盆地吹來硫味，東面裂光路接向猩紅火口。這裡是 邊界 路線，路面穩定但不安排額外採集或敵人。熔蟲東熱裂道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "乾谷中央封裂位於紅岩荒地腹地，北側毒蛇平地的草皮被熱風吹焦，南面碎脊岩線斷成尖刺，東側紅礦切口泛著鐵鏽光。裂縫深處沒有踏點，這裡是 邊界封閉點，不提供通行。乾谷中央封裂周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "決鬥刻痕路位於盜匪瞭望點南側，東面紅岩刻線指回決鬥石圈，西面乾谷石路逐漸靠近回聲拱岩。這是正式 路線，路面只有風沙和刻痕，不放採集或額外遭遇。決鬥刻痕路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
    "image": "redrock_badlands_fill_n5_23.png",
    "imagePrompt": "決鬥刻痕路 redrock_badlands_fill_n5_23 in redrock_badlands 赤岩荒地, room function connector, terrain red rock badlands trail, dry gullies, cracked stone, dust, thorn scrub and harsh red side light, visible path cues: west toward a dry canyon arch silhouette, east toward 決鬥石圈, source room details: 決鬥刻痕路位於盜匪瞭望點南側，東面紅岩刻線指回決鬥石圈，西面乾谷石路逐漸靠近遠方拱形岩影。這是正式 route，路面只有風沙和刻痕，不放採集或額外遭遇。, dry hostile connector, red stone heat and broken path danger, slightly elevated adventurer eye view, clear foreground walking space, readable midground landmark, deep background silhouette, tactile terrain and architecture materials, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "回聲拱東乾谷位於回聲拱岩東側，北面碎脊坡有落石聲，南面黑旗瞭望台的旗影在熱風裡扭曲。這裡是正式 路線，把回聲拱岩與決鬥刻痕路連成逐格通道。回聲拱東乾谷周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "墓門東側斷谷位於紅岩荒地西北邊界，西面詛咒墓園鐵門透出腐土冷氣，東側熔岩蟲陷坑的熱風把碎石吹紅，南面餘燼泉泛著暗光。斷谷落差過深，是 邊界封閉點，只標示墓園方向。墓門東側斷谷周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "回聲南封紅壁位於回聲拱岩南側，北面仍能聽見拱洞回音，東側黑旗瞭望台的木架露出尖角。紅壁下方全是鬆散砂石與斷層，這裡是 邊界封閉點，不提供南側繞路。回聲南封紅壁周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "沙門北封溝貼著紅岩荒地西側，南面塵沙門的木框半埋在紅砂裡，東側乾谷風帶著鐵鏽味吹來。溝底被落石堵死，這裡是封閉 封閉點，提醒玩家改走正式乾谷路線。沙門北封溝周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "白鹿林南灌木採封位在王室獵場南側林線，北面白鹿林傳來枝葉摩擦聲，西側月光空地的銀色草線若隱若現。灌木叢下露出獵場藥草、白羽與鹿蹄刮痕，玩家只能沿繩標旁採集，不能穿過封住的灌木牆，是 採集 封閉點。白鹿林南灌木採封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "月光白鹿草線穿過王家林地的低草坡，西側月光空地照出銀白足跡，東面白鹿林的樹幹掛著王室繩標。草坡中央有被鹿蹄踩出的窄小鹿徑與觀察木牌，玩家沿鹿徑在兩個正式獵場地標間移動，不會誤入南側灌木封線。月光白鹿草線周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "競技長廊東鹽封灘位在鹽風灘西緣，西面競技長廊的石影被鹽霧遮住，北側霧標木桿掛著破布，東邊玻鹽田反著白光。這裡是 邊界封閉點，厚鹽殼封住跨區繞路，不提供通行。競技長廊東鹽封灘周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "北河鹽霧渡口位在蛇河三角洲北緣，北面鹽風仍貼著河面吹來，南側渡船索樁通往入口渡口，東邊可見分流蘆岸的低草。這裡是邊界採集點，泥灘上散著可採集的鹽蘆芽與濕泥貝殼。北河鹽霧渡口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "北分流草蘆岸貼著三角洲北側分流水道，西面接北河鹽霧渡口，東面望見泥魚淺灘，南側泥濘小徑深入分流蘆岸。這裡是路線端點兼採集點，低蘆根旁有可採集的淡水蘆芯。北分流草蘆岸周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "白紋灘北蟹痕封位在白紋潮痕北面，南側鹽水留下淡白波紋，東邊蟹群行軍的腳痕切過濕沙。硬鹽殼下有空洞水泡，這裡是 封閉點 邊界，只標示灘地外緣。白紋灘北蟹痕封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "海盜盲點西玻鹽封位在海盜盲點南西側，北面遮棚破帆在熱霧裡晃動，西面玻鹽田刺眼反光。鹽晶鋒利到無法踏穩，是 邊界封閉點，用來封住盲點外側。海盜盲點西玻鹽封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "北泥魚淺灘承接北分流蘆岸東端，西側蘆影貼著水面，南面泥魚池不時冒出氣泡，北方鹽霧在這裡被河口水氣沖淡。這裡是採集淺灘，可採集濕滑泥藻與泥魚翻出的細貝。北泥魚淺灘周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "鹵眼西鹽晶採封位在低潮堤道南面，北側鹽堤石橋露出白鹽，東邊深鹵眼像廢井般冒著藍黑氣泡。鹽晶路旁可採集硬鹽片與鹵砂，但晶殼斷裂成坑，是 採集 封閉點。鹵眼西鹽晶採封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "潮望遺跡北熱沙封位在潮望遺跡北側，南面斷牆被鹽霧磨白，西邊海蛇軌跡壓出長長凹線。熱沙裡露出鹽晶碎片、潮玻璃與破陶片，但濕沙下持續蒸騰熱氣，這裡是純 封閉點，阻止玩家從遺跡背面繞行。潮望遺跡北熱沙封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "沉遺入口東湖草封位在藍寶石湖北西側，西面古遺跡沉入口的黑石在水下發亮，北側燈籠碼頭映著暖光，東邊礦泉水聲清亮。這裡是 邊界 採集 封閉點，湖草可採，但水下石階封住遺跡側路。沉遺入口東湖草封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "藍蘆玻魚湖岸路是藍蘆葦帶與玻魚灣之間的採集 路線，北面水囊窪地有氣泡上浮，南側靈鏡水面倒映遠山。湖岸碎石穩定，路旁可採藍蘆芯與細水晶砂。藍蘆玻魚湖岸路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "月沼北汊貼著月光濕地北緣，北側湖岸被黑水切斷，南面沉木橋露出一排濕滑木脊。草叢間有霧氣、水草和被露水壓彎的蘆穗，舊腳印只到木脊前就消失。北岸水面看似平靜，實際沒有能站穩的踏點，黑泥會把倒影拉成假路。這裡作為北側短線端點，必須沿南側沉木脊回到主路，不能沿湖邊硬走，銀霧很冷。",
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
    "description": "深脈東側水草封貼著深脈窗口東面，西側藍光從水下礦脈透出，北面沉沒石階沒入淺水。湖草與礦砂堆成濕滑斜坡，是採集 封閉點，可採藍砂苔與碎晶，不作通路。深脈東側水草封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "沉木北橋用三根半沉木橫過淺水，北側黑水汊道被霧氣封住，南面舊舟營傳來蟲鳴與槳影。木縫間長著濕地草藥，銀白菌絲貼著潮濕樹皮延伸，只有中央那根沉木還能承重。橋側沒有欄繩，水下蘆根會勾住靴底，因此這裡只是狹窄通行與採集邊界，不是寬闊安全橋面，通過後應往南接回舊舟營，別久停。",
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
    "description": "舊舟北營把破獨木舟拖在泥岸旁，北側黑水和蘆葦圍住退路，南面月光水道仍有可辨認的草墩。獨木舟船腹裂開，裡面積著月露、斷槳和被水泡軟的行囊扣，像是有人曾試著從北岸下水卻失敗。黑水後方沒有浮標，也沒有能重新登岸的泥台。這裡是北界端點，應沿南側水道返回，不把北岸當成新通路。",
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
    "description": "隱渠東側礦草界位在湖濱鎮隱渠東面，西側暗渠水聲被石蓋壓低，南方藍寶礦脈閃出冷光，東邊睡蓮藏點浮著大片葉影。這裡是邊界採集 封閉點，礦草可採，但不開回鎮內暗渠路線。隱渠東側礦草界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "礦脈睡蓮湖岸路位在湖東側內灣，西面藍寶礦脈露出濕石，北方睡蓮藏點浮著白花，東邊可望見競技城牆水影。這裡是採集 路線，連接礦脈與睡蓮藏點，湖岸邊可採晶砂與蓮莖。礦脈睡蓮湖岸路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "競技大門西湖草界位在藍寶石湖東北緣，西面睡蓮藏點仍有白花香，南側湖岸轉向競技城牆，東邊可見競技區大門石階。這裡是跨區邊界採集路線，湖草可採，主要銜接湖岸與競技場入口。競技大門西湖草界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "冠軍牆西湖棧橋架在藍寶石湖東岸，北面競技大門水草界可作地標，南面勝利拱湖草灘延伸，東側冠軍牆倒映在水面。這裡是跨區邊界採集路線，棧橋邊有晶化水藻可採，專門銜接湖岸與牆下步道。冠軍牆西湖棧橋周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "勝利拱西湖草灘位在競技區西側水岸，北面冠軍牆湖棧橋仍有水光，東邊勝利拱門的石影壓在草灘上。這裡是跨區邊界採集路線，湖草與晶砂可採，專門銜接湖岸與競技拱門。勝利拱西湖草灘周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "渡口南側封汊位在入口渡口與白鷺標記之間，北面可聽見渡船木板聲，南側泥線轉向白鷺標記，東邊是高腳聚落外圍。分岔水流把道路切碎，這裡只作 邊界 採集 封閉點，濕泥上可採少量蛇紋蘆根。渡口南側封汊周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "白鷺南封棧靠在白鷺標記南側，北面仍能看見羽形木牌，東側紅樹迷宮的根鬚壓進泥灘。棧板向外斷成半截，下方混水太深，這裡是純 封閉點 與邊界標記，不提供可通行路線。白鷺南封棧周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "北灰坡路線端位在火山地帶北緣，北面蛇河三角洲的濕泥被熱灰烤成硬殼，南側火山灰原冒出白色蒸氣。這裡是 路線 端點，提醒玩家從濕地邊界正式踏入高熱火山路線。火山北灰坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "紅樹南緣泥封貼著紅樹迷宮南側，北面根牆密集，東邊舊堤道的石基從水草間露出。泥灘被潮水沖成軟陷坑，標示三角洲內路的 封閉點 邊界，沒有安全棧道可繼續穿越。紅樹南緣泥封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "舊堤南窄泥道位在舊堤道南面，北側石基仍可作定位，南方蛇河邊道逐漸靠近火山岩壁。這裡是邊界 封閉點，河汊把泥道擠得只剩巡視用腳點，不安排怪物或採集玩法。舊堤南窄泥道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "矮礦北口泥岸位在蛇河三角洲南緣，北面接舊堤南窄泥道，南面火山岩壁開著矮人礦坑入口，鐵鏽味與濕泥味混在一起。這裡是跨區 邊界 採集 點，泥岸上可採含鐵水苔，但主要功能是標示前往矮人礦坑的邊界。矮礦北口泥岸周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "鱗網北側汊口位在泥魚池與鱗網場之間，南面能看見曬網木架，西邊淺水灘有泥魚翻動痕。潮水在此分成幾條短汊，這裡只作採集 封閉點，水邊可採破網纏住的河藻與魚鱗碎片。鱗網北側汊口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "穀倉北濕泥界壓在淹水穀倉北側，南面腐木牆與穀袋殘片半沉在水裡，西側鱗網場仍有細繩晃動。這裡是 邊界 採集 封閉點，濕泥裡能採到發芽穀粒與水苔，但道路被倒塌木梁截斷。穀倉北濕泥界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "月釣東側斷棧橋位在月光釣棚東邊，西面魚燈仍映在水面，南側多口匯流處傳來水流碰撞聲。木棧橋在這裡被洪水扯斷，只作純 封閉點 與地形邊界，提醒玩家不要把釣棚路線誤認為可向東延伸。月釣東側斷棧周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "舊路銀松折口位於銀松山脈東緣，東側野草丘陵的舊路在這裡抬升成碎石階，南面洞口風聲從岩縫傳來。坡邊有可採的銀松針與冷露苔，這裡是 邊界 採集 路線，連接丘陵與山徑。舊路銀松折口周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "東坡冷露封道夾在東側舊路折口與西側碎石山道之間，銀松針覆住斷裂階面，冷露苔沿石縫發亮。這裡有採集痕跡但沒有安全踏點，是封閉 封閉點，提醒玩家回到正式山徑。東坡冷露封道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "晶礫東封坡位於水晶碎坡東面，西側可見尖亮晶礫嵌在雪土裡，東側冷露封道已被松針蓋住。坡面可採少量銀礦碎屑，但碎石會滑落，這格是採集邊界與 封閉點。晶礫東封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "觀星脊西雪道位於雪線上方的山腰，北側雪崩盆地有碎冰堆，西面銀脂雪道繼續穿過松根，東側觀星脊露出高處石台。這裡是 採集 路線，雪縫旁能看見少量冷苔採集痕。觀星脊西雪道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "霜草崖東封坡靠近霜草岩架，西側草葉結成白霜，南面獸痕刮過淺雪。坡頂有可採的霜草與銀松枝，但東側碎石崖鬆動，這裡是採集 封閉點，不接出新路。霜草崖東封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "銀脂中段雪道夾在西側銀脂林與東側觀星脊西雪道之間，北面冰玻洞冷光透過松枝照到雪面。樹根旁滲出銀脂與冰苔，這裡是正式採集 路線，讓玩家沿雪道逐格前進。銀脂中段雪道周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "銀脂西段松根位於風切木橋南側，西面銀脂松圃樹皮泛白，北側短坡可望見通往冰玻洞的石階，東面雪道延向觀星脊。這裡是 邊界 採集 路線，樹根間有銀脂與雪松針採集點。銀脂西段松根周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "風削冰洞石階橫在風切木橋與冰玻洞之間，北側雲母折坡灑下碎光，南面銀脂雪道有松根露出。石階邊能採到冰苔與銀屑，這裡是 採集 路線，承接橋面到洞口的正式通道。風削冰洞石階周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "草架西封雪坡在草藥岩架西側形成斷面，南面可見藥草棚的木釘，東面霜草岩架覆著白霜。坡上有可採的霜葉與松針，但雪層下方空洞，這裡是採集 封閉點。草架西封雪坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "松圃南補給封坡位於銀脂松圃南面，北側能聞到樹脂香，西面松林小路旁有舊補給繩樁。坡下散落可採松脂與冷露苔，但碎石不穩，這格是 service 採集 封閉點。松圃南補給封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "雪線門東封坡貼著銀松山脈西側，北面雪線門的木牌被冰霜覆住，東側風切木橋在霧中搖晃。坡上有少量冰苔可採，但石面被霜裂切斷，是封閉 採集 封閉點。雪線門東封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "入山礦權封坡位於銀松西北角，南側入山礦權木樁半埋在雪裡，西面風嘯山口傳來高原風。坡面有銀礦碎屑可採，但礦道被落石封死，這裡是採集 封閉點。入山礦權封坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "獵場北界雪柵位於銀松山脈西南緣，北側松林小路被雪霧包住，南面可望見王家獵場許可木屋的屋頂。雪柵後的石縫長著冷露苔與銀松針，木牌掛著禁止越界的紅繩，這裡是 邊界 採集 封閉點，只標示獵場邊界，不提供跨區通行。獵場北界雪柵周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "西南松徑補給欄位於獵場北界雪柵上方，南側雪柵標示邊界，東面松圃南封坡旁有舊補給繩樁。欄內放著採集用麻袋、銀松針束與冷露苔小瓶，但道路被雪樁擋住，是 service 採集 封閉點。西南松徑補給欄周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "斷橋南溪草封位在村外斷橋南側，北面破橋木樁倒在溪水裡，東邊炭窯煙灰落在草叢上。泥土小路被溪草與碎木堵住，是 service 採集 封閉點，只保留採集乾草與檢查橋況的空地。斷橋南溪草封周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "旅店北田埂路牌位在新手村旅店北面，北側村外草徑延向炭窯與墓園邊界，東邊鄉間草路接向冒險者公會後方。路牌標示這裡是回村 邊界 service 路線，只連接旅店後門與村外田埂。旅店北田埂路牌周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "墓園西側炭草界位在炭窯南面與墓園深處西側，北面炭窯煙灰落在泥土上，南側旅店北田埂路牌仍可看見木牌。這裡是 邊界 採集 封閉點，可採焦草與乾柴，但不開往墓園捷徑。墓園西側炭草界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "公會北鄉間路標位在冒險者公會北面，北側墓園深處陰氣壓著草坡，西面旅店北田埂路牌可作回村指引，東側通往舊圖書館後方。這裡是 邊界 採集 路線，草徑可採野草籽，主要銜接公會後門。公會北鄉間路標周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "舊圖書館北後勤路位在舊圖書館北側，北面空心樹樁旁有落葉堆，西側公會北路標連著村外草徑，東邊柳祠北路逐漸變濕。這裡是 邊界 service 路線，標示圖書館後門補給線與村外邊界。舊圖書館北後勤路周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "果園北溪草補給坡位在村溪東側與果園北邊，南面果樹枝葉越過籬笆，西側溪水帶來濕泥氣味。坡上堆著採果籃與草繩，是 service 採集 封閉點，可採野草與補給繩，不作道路。果園北溪草補給坡周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
    "description": "禮拜堂北柳祠路界位在新手村禮拜堂北面，北側柳樹小祠垂著濕枝，西面舊圖書館後勤路仍有木牌。這裡是 邊界 採集 路線，溪邊草與柳葉可採，主要銜接禮拜堂後門與村外濕草邊界。禮拜堂北柳祠路界周邊的路面、植被、舊標記與相鄰地貌都需要被看清，北南東西的可行方向、封閉邊線與回程線索會在場景中自然呈現，讓隊伍能判斷是否採集、折返或接回主路。",
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
};
