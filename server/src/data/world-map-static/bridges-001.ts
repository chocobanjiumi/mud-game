import type { RoomDef } from '@game/shared';

export const STATIC_WORLD_BRIDGE_ROOMS_PART_001: Record<string, RoomDef> = {
"silverpine_storm_pass": {
    "id": "silverpine_storm_pass",
    "name": "風嘯山口",
    "zone": "silverpine_range",
    "description": "山道在此急劇攀升，碎石路面被狂風磨得光滑。東側可見銀松山脈的針葉林線，西側則是風暴高原灰濛濛的天際。兩側山壁形成天然隘口，風聲在石壁間迴盪不止。風嘯山口周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。",
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
    "description": "暗林邊徑幾乎被厚落葉掩埋，短短苔石邊線在腐葉下若隱若現。東側傳來暗影森林深處的濕木低響，西側黑木林冷樹幹貼得很近，兩邊樹冠在頭頂交疊成灰暗拱面。地面沒有成形道路，只剩被根脊截斷的舊痕、潮濕苔味與腐葉霧。這裡更像兩片黑林互相壓合的縫隙，能辨認邊界，卻看不見可安心穿越的方向。",
    "image": "darkwood_border_trail.png",
    "imagePrompt": "暗林邊徑 darkwood_border_trail in dark_forest 暗影森林, room function border road, buried leaf trail between dark forest and blackwood, east deep dark forest wet wood resonance, west blackwood interior pressing close with colder trunks, terrain fallen leaves, moss smell, overlapping root ridges and sealed two-forest boundary，葉層低處幾乎埋掉小徑，只露出短短苔石邊線，中段東側傳來暗林濕木低響，西側黑木林冷樹幹貼近形成壓迫牆，兩邊都沒有安全路標或正式出口。落葉層要厚到遮住腳印，苔石邊線很快被交疊根脊切斷，樹冠下的冷灰光讓兩片黑林互相壓合，邊界空氣要有潮濕腐葉霧，構圖只標示兩片黑林邊界並呈現封閉 border blocker, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "霜裂分界位在霜咬隘口與冰封雪原之間，南面藍冰橋仍懸在裂縫上方，北側凍土荒野展開成白色平面。腳下藍冰裂出深不見底的紋路，這裡是跨區 邊界封閉點，只標示雪原邊界，不提供直接穿越。霜裂分界周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。",
    "image": "frostbite_frozen_divide.png",
    "imagePrompt": "霜裂分界 frostbite_frozen_divide in frostbite_pass Frostbite Pass, room function border road, divide between Frostbite Pass and Frozen Wastes, south blue ice bridge suspended above a crevasse, north tundra wasteland opens into a white plain, terrain deep blue ice cracks, snow crust, abyss shadow, windblown frost and pale arctic light，霜裂分界位在隘口與冰封雪原之間，南面藍冰橋懸在裂縫上方，北側凍土荒野展開成白色平面。腳下藍冰裂出深不見底的紋路，裂縫裡只有冷藍反光與黑暗深影，雪殼在邊緣碎裂；畫面要像邊界標示而非可直接穿越的道路，清楚呈現跨區 border blocker。遠方雪原在白光中平展，近景裂縫邊緣鋒利斷開，冰面材質厚重透明，寒風捲起霜粉營造空曠孤絕氣氛。, slightly elevated adventurer eye view, readable midground landmark, blocked-route composition, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text",
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
    "description": "避風村傳送石庭建在風暴高原北緣的背風凹地，粗石柱圍住藍白傳送陣，繩索與避雷銅鈴固定在石縫間。東側草徑通向村內補給棚，南面可沿碎石坡下到高原風道，玩家可在此啟用風暴高原傳送陣並確認回程路線。避風村傳送石庭周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。",
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
    "description": "補給棚用厚帆布與高原松木搭成，棚下堆著防雷油布、乾糧箱與修補繩索，村民把風向牌釘在低矮石牆上。西側回傳送石庭，北面木門接到避風屋，南側碎石路能下到高原危險路線。避風村補給棚周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。",
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
    "description": "避風屋嵌在岩壁凹槽裡，厚木窗板擋住橫向雷雨，火盆旁掛著濕披風與簡易高原地圖。南側門口回到補給棚，屋內木牌提醒旅人先啟用傳送石庭，再進入獅鷲、雷風元素與斷崖巡邏出沒的高原主路。避風屋周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。",
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
  },
};
