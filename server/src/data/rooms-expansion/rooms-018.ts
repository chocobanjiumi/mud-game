import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_018: Record<string, RoomDef> = {
saltwind_flats_sea_serpent_track: {
    id: 'saltwind_flats_sea_serpent_track',
    name: '海蛇痕',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_sea_serpent_track.png',
    imagePrompt: '海蛇痕 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '海蛇痕位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_shallow_cut', description: '回到淺水裂道' },
      { direction: 'north', targetRoomId: 'saltwind_flats_fog_bell', description: '北側霧鐘聲標出回程方向' },
      { direction: 'south', targetRoomId: 'saltwind_flats_lowtide_causeway', description: '南側海蛇拖痕接上退潮石道' },
    ],
    monsters: [
      { monsterId: 'lowtide_serpent', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'brinepool_crab_guard', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[蛇]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '海蛇痕的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '海蛇痕的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '海蛇痕殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_blue_mud_shelf: {
    id: 'saltwind_flats_blue_mud_shelf',
    name: '藍泥層',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_blue_mud_shelf.png',
    imagePrompt: '藍泥層 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '藍泥層位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_crab_march', description: '回到蟹行淺灘' },
      { direction: 'east', targetRoomId: 'saltwind_flats_wrecked_skiff', description: '破舟灘在東側' },
    ],
    monsters: [
      { monsterId: 'blue_mud_saltback', maxCount: 2, respawnSeconds: 130 },
      { monsterId: 'brinepool_crab_guard', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[泥]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '藍泥層的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '藍泥層的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '藍泥層殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_wrecked_skiff: {
    id: 'saltwind_flats_wrecked_skiff',
    name: '破舟灘',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_wrecked_skiff.png',
    imagePrompt: '破舟灘 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '破舟灘位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'west', targetRoomId: 'saltwind_flats_blue_mud_shelf', description: '回到藍泥層' },
      {
        direction: 'north',
        targetRoomId: 'saltwind_flats_shallow_cut',
        description: '北側回淺水裂道要穿過破舟木板與藍泥水線，再爬上被鹽殼覆住的碎坡',
        edgeKind: 'distant_route',
        edgeNote: '破舟灘回淺水裂道需要穿過破舟木板、藍泥水線與鹽殼碎坡上行，屬於鹽風灘長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'saltwind_flats_fog_bell',
        description: '東側要穿過破舟木板間的積鹽水坑與纜繩殘段，循著鐘聲才找到霧鐘桿',
        edgeKind: 'distant_route',
        edgeNote: '破舟灘到霧鐘桿需要穿過破舟木板、積鹽水坑與纜繩殘段，屬於鹽風灘長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'pirate_mist_scout', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'lowtide_serpent', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[舟]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '破舟灘的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '破舟灘的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '破舟灘殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_salt_crystal_nest: {
    id: 'saltwind_flats_salt_crystal_nest',
    name: '鹽晶巢',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_salt_crystal_nest.png',
    imagePrompt: '鹽晶巢 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '鹽晶巢位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_glass_salt_field', description: '回到玻璃鹽田', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'saltwind_flats_tidewatch_ruin', description: '潮望廢墟在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glasssalt_elemental', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'saltflat_crystal_scuttler', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[巢]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '鹽晶巢的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '鹽晶巢的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '鹽晶巢殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_lowtide_causeway: {
    id: 'saltwind_flats_lowtide_causeway',
    name: '退潮石道',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_lowtide_causeway.png',
    imagePrompt: '退潮石道 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '退潮石道位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'saltwind_flats_fisher_cache',
        description: '西側回漁夫藏點要離開退潮石道，穿過碎石鹽脊、乾網繩與藏箱陰影',
        edgeKind: 'distant_route',
        edgeNote: '退潮石道回漁夫藏點需要穿過碎石鹽脊、乾網繩與藏箱陰影，屬於鹽風灘長路徑。',
      },
      { direction: 'north', targetRoomId: 'saltwind_flats_sea_serpent_track', description: '北側海蛇拖痕回到霧鐘方向' },
      {
        direction: 'east',
        targetRoomId: 'saltwind_flats_tidewatch_ruin',
        description: '東側退潮石道要穿過一段會被潮霧吞沒的石梁，才抵達潮望廢墟外牆',
        edgeKind: 'distant_route',
        edgeNote: '退潮石道到潮望廢墟需要穿過潮霧石梁與廢墟外牆，屬於鹽風灘長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'lowtide_serpent', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'pirate_mist_scout', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[道]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '退潮石道的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '退潮石道的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '退潮石道殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_fog_bell: {
    id: 'saltwind_flats_fog_bell',
    name: '霧鐘桿',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_fog_bell.png',
    imagePrompt: '霧鐘桿 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '霧鐘桿位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'saltwind_flats_wrecked_skiff',
        description: '西側回破舟灘要循著霧鐘聲穿過纜繩殘段、積鹽水坑與破船木影邊緣',
        edgeKind: 'distant_route',
        edgeNote: '霧鐘桿回破舟灘需要穿過纜繩殘段、積鹽水坑與破船木影，屬於鹽風灘長路徑。',
      },
      { direction: 'south', targetRoomId: 'saltwind_flats_sea_serpent_track', description: '南側海蛇拖痕通往退潮石道' },
    ],
    monsters: [
      { monsterId: 'glasssalt_elemental', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'pirate_mist_scout', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[鐘]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '霧鐘桿的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '霧鐘桿的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '霧鐘桿殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_tidewatch_ruin: {
    id: 'saltwind_flats_tidewatch_ruin',
    name: '潮望廢墟',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_tidewatch_ruin.png',
    imagePrompt: '潮望廢墟 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '潮望廢墟位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'saltwind_flats_lowtide_causeway',
        description: '西側回退潮石道要沿潮望廢墟外牆撤出，穿過潮霧石梁才回到乾鹽高地',
        edgeKind: 'distant_route',
        edgeNote: '潮望廢墟回退潮石道需要沿廢墟外牆、潮霧石梁與乾鹽高地撤回，屬於鹽風灘長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'saltwind_flats_fog_bell',
        description: '南側要從潮望廢墟台階繞下鹽坡，循著斷續鐘聲穿過濃霧到霧鐘桿',
        edgeKind: 'distant_route',
        edgeNote: '潮望廢墟到霧鐘桿需要沿廢墟台階、鹽坡與濃霧鐘聲下行，屬於鹽風灘長路徑。',
      },
      { direction: 'north', targetRoomId: 'saltwind_flats_deep_brine_eye', description: '深鹽眼在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'lowtide_serpent', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'glasssalt_elemental', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[墟]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '潮望廢墟的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '潮望廢墟的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '潮望廢墟殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

saltwind_flats_deep_brine_eye: {
    id: 'saltwind_flats_deep_brine_eye',
    name: '深鹽眼',
    zone: 'saltwind_flats' as RoomDef['zone'],
    image: 'saltwind_flats_deep_brine_eye.png',
    imagePrompt: '深鹽眼 in saltwind_flats, salt flats coast after low tide with white salt crust, brine pools, driftwood posts, fishbone pier, sea mist, pirate watch shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain coast, clear lantern light',
    description:
      '深鹽眼位於鹽風灘退潮後露出的白色鹽灘上，薄霧、鹽晶裂紋、魚骨棧橋、漂木哨柱與潮水留下的藍泥共同標出危險但開闊的海岸路線。這裡是低中階野外遭遇與捕魚採集點，玩家可以 inspect 鹽面波紋、海盜暗記、蟹行痕與霧鐘方向來判斷潮汐，也能 search 破舟、漁夫藏點、玻璃鹽田和潮望廢墟尋找補給線索。若隊伍忽略退潮時間、海蛇拖痕與霧中哨兵，海盜、深海魚人、海蛇與冰霧元素會從潮池兩側包抄；若穩定沿路標、鐘聲與乾鹽高地推進，則能抵達深鹽眼並安全返回入口樁，同時帶回潮汐紀錄與乾鹽補給。',
    exits: [
      { direction: 'south', targetRoomId: 'saltwind_flats_tidewatch_ruin', description: '回到潮望廢墟', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'deep_brine_eye_keeper', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'lowtide_serpent', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'glasssalt_elemental', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[眼]',
    mapX: 6,
    mapY: 2,
    guardianHints: {
      creature: '深鹽眼的鹽面若浮出濕亮拖痕，附近海蛇或海盜巡哨多半正在靠近。',
      treasure: '深鹽眼的鹽晶裂縫、破舟木板或潮池邊可能藏著鹽風灘補給線索。',
      spirit: '深鹽眼殘留漁夫、海盜與迷路旅人被潮霧吞沒前留下的記憶。',
    },
  },

// ─── 荊棘迷宮擴充 (Lv 26-38) ───────────────────────────

  thornmaze_gate_arch: {
    id: 'thornmaze_gate_arch',
    name: '荊棘入口拱',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_gate_arch.png',
    imagePrompt: '荊棘入口拱 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fantasy terrain, clear lantern light',
    description:
      '荊棘入口拱位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'east', targetRoomId: 'thornmaze_outer_briar_lane', description: '外環刺徑在東側' },
      { direction: 'north', targetRoomId: 'thornmaze_whispering_hedge', description: '低語樹牆在北側' },
    ],
    monsters: [
      { monsterId: 'redthorn_briarling', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'whisper_hedge_mimic', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '荊棘入口拱的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '荊棘入口拱的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '荊棘入口拱殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_outer_briar_lane: {
    id: 'thornmaze_outer_briar_lane',
    name: '外環刺徑',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_outer_briar_lane.png',
    imagePrompt: '外環刺徑 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '外環刺徑位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_gate_arch', description: '回到荊棘入口拱' },
      { direction: 'east', targetRoomId: 'thornmaze_threefold_fork', description: '三岔刺口在東側' },
      { direction: 'north', targetRoomId: 'thornmaze_redthorn_wall', description: '紅刺牆在北側' },
    ],
    monsters: [
      { monsterId: 'redthorn_briarling', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'blackroot_strangler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[刺]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '外環刺徑的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '外環刺徑的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '外環刺徑殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_threefold_fork: {
    id: 'thornmaze_threefold_fork',
    name: '三岔刺口',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_threefold_fork.png',
    imagePrompt: '三岔刺口 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '三岔刺口位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_outer_briar_lane', description: '回到外環刺徑' },
      { direction: 'east', targetRoomId: 'thornmaze_moss_keyhole', description: '苔鑰孔在東側' },
      { direction: 'north', targetRoomId: 'thornmaze_poison_bloom_bed', description: '毒花床在北側' },
      { direction: 'south', targetRoomId: 'thornmaze_blackroot_tunnel', description: '黑根隧道在南側' },
    ],
    monsters: [
      { monsterId: 'whisper_hedge_mimic', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'redthorn_briarling', maxCount: 2, respawnSeconds: 210 },
    ],
    mapSymbol: '[岔]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '三岔刺口的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '三岔刺口的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '三岔刺口殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_redthorn_wall: {
    id: 'thornmaze_redthorn_wall',
    name: '紅刺牆',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_redthorn_wall.png',
    imagePrompt: '紅刺牆 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '紅刺牆位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_outer_briar_lane', description: '回到外環刺徑' },
      { direction: 'east', targetRoomId: 'thornmaze_poison_bloom_bed', description: '毒花床在東側' },
    ],
    monsters: [
      { monsterId: 'redthorn_briarling', maxCount: 3, respawnSeconds: 210 },
      { monsterId: 'poison_bloom_matron', maxCount: 1, respawnSeconds: 250 },
    ],
    mapSymbol: '[紅]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '紅刺牆的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '紅刺牆的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '紅刺牆殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_moss_keyhole: {
    id: 'thornmaze_moss_keyhole',
    name: '苔鑰孔',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_moss_keyhole.png',
    imagePrompt: '苔鑰孔 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '苔鑰孔位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_threefold_fork', description: '回到三岔刺口' },
      { direction: 'north', targetRoomId: 'thornmaze_wildrose_snare', description: '野薔薇陷阱在北側' },
      { direction: 'east', targetRoomId: 'thornmaze_druid_marker', description: '德魯伊刻石在東側' },
    ],
    monsters: [
      { monsterId: 'poison_bloom_matron', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'spiderthorn_weaver', maxCount: 1, respawnSeconds: 270 },
    ],
    mapSymbol: '[鑰]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '苔鑰孔的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '苔鑰孔的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '苔鑰孔殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_whispering_hedge: {
    id: 'thornmaze_whispering_hedge',
    name: '低語樹牆',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_whispering_hedge.png',
    imagePrompt: '低語樹牆 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '低語樹牆位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_gate_arch', description: '回到荊棘入口拱' },
      { direction: 'east', targetRoomId: 'thornmaze_redthorn_wall', description: '紅刺牆在東側' },
      { direction: 'north', targetRoomId: 'thornmaze_turning_courtyard', description: '旋轉庭在北側' },
    ],
    monsters: [
      { monsterId: 'whisper_hedge_mimic', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'moonvine_stag', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[語]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '低語樹牆的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '低語樹牆的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '低語樹牆殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_poison_bloom_bed: {
    id: 'thornmaze_poison_bloom_bed',
    name: '毒花床',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_poison_bloom_bed.png',
    imagePrompt: '毒花床 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '毒花床位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_redthorn_wall', description: '回到紅刺牆' },
      { direction: 'south', targetRoomId: 'thornmaze_threefold_fork', description: '回到三岔刺口' },
      { direction: 'east', targetRoomId: 'thornmaze_wildrose_snare', description: '野薔薇陷阱在東側' },
    ],
    monsters: [
      { monsterId: 'poison_bloom_matron', maxCount: 2, respawnSeconds: 250 },
      { monsterId: 'redthorn_briarling', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[毒]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '毒花床的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '毒花床的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '毒花床殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_blackroot_tunnel: {
    id: 'thornmaze_blackroot_tunnel',
    name: '黑根隧道',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_blackroot_tunnel.png',
    imagePrompt: '黑根隧道 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '黑根隧道位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'north', targetRoomId: 'thornmaze_threefold_fork', description: '回到三岔刺口' },
      { direction: 'east', targetRoomId: 'thornmaze_spiderthorn_den', description: '蛛刺窟在東側' },
    ],
    monsters: [
      { monsterId: 'blackroot_strangler', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'spiderthorn_weaver', maxCount: 1, respawnSeconds: 270 },
    ],
    mapSymbol: '[根]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '黑根隧道的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '黑根隧道的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '黑根隧道殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_wildrose_snare: {
    id: 'thornmaze_wildrose_snare',
    name: '野薔薇陷阱',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_wildrose_snare.png',
    imagePrompt: '野薔薇陷阱 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '野薔薇陷阱位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_poison_bloom_bed', description: '回到毒花床' },
      { direction: 'south', targetRoomId: 'thornmaze_moss_keyhole', description: '回到苔鑰孔' },
      { direction: 'east', targetRoomId: 'thornmaze_druid_marker', description: '德魯伊刻石在東側' },
    ],
    monsters: [
      { monsterId: 'spiderthorn_weaver', maxCount: 1, respawnSeconds: 270 },
      { monsterId: 'poison_bloom_matron', maxCount: 1, respawnSeconds: 250 },
    ],
    mapSymbol: '[薔]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '野薔薇陷阱的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '野薔薇陷阱的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '野薔薇陷阱殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_druid_marker: {
    id: 'thornmaze_druid_marker',
    name: '德魯伊刻石',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_druid_marker.png',
    imagePrompt: '德魯伊刻石 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '德魯伊刻石位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_moss_keyhole', description: '回到苔鑰孔' },
      { direction: 'north', targetRoomId: 'thornmaze_living_wall', description: '活牆在北側' },
      { direction: 'east', targetRoomId: 'thornmaze_moonvine_bridge', description: '月藤橋在東側' },
    ],
    monsters: [
      { monsterId: 'moonvine_stag', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'crooked_totem_hexer', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[石]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '德魯伊刻石的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '德魯伊刻石的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '德魯伊刻石殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_turning_courtyard: {
    id: 'thornmaze_turning_courtyard',
    name: '旋轉庭',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_turning_courtyard.png',
    imagePrompt: '旋轉庭 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '旋轉庭位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_whispering_hedge', description: '回到低語樹牆' },
      { direction: 'east', targetRoomId: 'thornmaze_lost_hunter_camp', description: '失蹤獵營在東側' },
    ],
    monsters: [
      { monsterId: 'whisper_hedge_mimic', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'redthorn_briarling', maxCount: 2, respawnSeconds: 210 },
    ],
    mapSymbol: '[旋]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '旋轉庭的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '旋轉庭的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '旋轉庭殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_spiderthorn_den: {
    id: 'thornmaze_spiderthorn_den',
    name: '蛛刺窟',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_spiderthorn_den.png',
    imagePrompt: '蛛刺窟 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '蛛刺窟位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_blackroot_tunnel', description: '回到黑根隧道' },
      { direction: 'north', targetRoomId: 'thornmaze_bloodsap_pool', description: '血脂池在北側' },
    ],
    monsters: [
      { monsterId: 'spiderthorn_weaver', maxCount: 2, respawnSeconds: 270 },
      { monsterId: 'blackroot_strangler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[蛛]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '蛛刺窟的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '蛛刺窟的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '蛛刺窟殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_moonvine_bridge: {
    id: 'thornmaze_moonvine_bridge',
    name: '月藤橋',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_moonvine_bridge.png',
    imagePrompt: '月藤橋 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '月藤橋位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_druid_marker', description: '回到德魯伊刻石' },
      { direction: 'north', targetRoomId: 'thornmaze_silent_stag_glade', description: '靜鹿空地在北側' },
      { direction: 'east', targetRoomId: 'thornmaze_crooked_totem', description: '歪斜圖騰在東側' },
    ],
    monsters: [
      { monsterId: 'moonvine_stag', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'whisper_hedge_mimic', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '月藤橋的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '月藤橋的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '月藤橋殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_bloodsap_pool: {
    id: 'thornmaze_bloodsap_pool',
    name: '血脂池',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_bloodsap_pool.png',
    imagePrompt: '血脂池 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '血脂池位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_spiderthorn_den', description: '回到蛛刺窟' },
      { direction: 'east', targetRoomId: 'thornmaze_druid_marker', description: '回到德魯伊刻石' },
      { direction: 'north', targetRoomId: 'thornmaze_inner_altar_ring', description: '內祭環在北側' },
    ],
    monsters: [
      { monsterId: 'blackroot_strangler', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'poison_bloom_matron', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[池]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '血脂池的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '血脂池的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '血脂池殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_lost_hunter_camp: {
    id: 'thornmaze_lost_hunter_camp',
    name: '失蹤獵營',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_lost_hunter_camp.png',
    imagePrompt: '失蹤獵營 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '失蹤獵營位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_turning_courtyard', description: '回到旋轉庭' },
      { direction: 'east', targetRoomId: 'thornmaze_living_wall', description: '活牆在東側' },
    ],
    monsters: [
      { monsterId: 'spiderthorn_weaver', maxCount: 1, respawnSeconds: 270 },
      { monsterId: 'whisper_hedge_mimic', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[營]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '失蹤獵營的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '失蹤獵營的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '失蹤獵營殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_living_wall: {
    id: 'thornmaze_living_wall',
    name: '活牆',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_living_wall.png',
    imagePrompt: '活牆 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '活牆位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_druid_marker', description: '回到德魯伊刻石' },
      { direction: 'west', targetRoomId: 'thornmaze_lost_hunter_camp', description: '失蹤獵營在西側' },
      { direction: 'east', targetRoomId: 'thornmaze_silent_stag_glade', description: '靜鹿空地在東側' },
    ],
    monsters: [
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'blackroot_strangler', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[牆]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '活牆的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '活牆的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '活牆殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_silent_stag_glade: {
    id: 'thornmaze_silent_stag_glade',
    name: '靜鹿空地',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_silent_stag_glade.png',
    imagePrompt: '靜鹿空地 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '靜鹿空地位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_living_wall', description: '回到活牆' },
      { direction: 'south', targetRoomId: 'thornmaze_moonvine_bridge', description: '回到月藤橋' },
      { direction: 'east', targetRoomId: 'thornmaze_crooked_totem', description: '歪斜圖騰在東側' },
    ],
    monsters: [
      { monsterId: 'moonvine_stag', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[鹿]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '靜鹿空地的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '靜鹿空地的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '靜鹿空地殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_crooked_totem: {
    id: 'thornmaze_crooked_totem',
    name: '歪斜圖騰',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_crooked_totem.png',
    imagePrompt: '歪斜圖騰 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '歪斜圖騰位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。南側月藤橋與北側內祭環的刺牆會在通過後閉合，只能從那兩處進入圖騰圈。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'west', targetRoomId: 'thornmaze_silent_stag_glade', description: '回到靜鹿空地' },
    ],
    monsters: [
      { monsterId: 'crooked_totem_hexer', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[圖]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '歪斜圖騰的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '歪斜圖騰的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '歪斜圖騰殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_inner_altar_ring: {
    id: 'thornmaze_inner_altar_ring',
    name: '內祭環',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_inner_altar_ring.png',
    imagePrompt: '內祭環 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '內祭環位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_bloodsap_pool', description: '回到血脂池' },
      { direction: 'east', targetRoomId: 'thornmaze_crooked_totem', description: '歪斜圖騰在東側' },
      { direction: 'north', targetRoomId: 'thornmaze_ancient_druid_altar', description: '古代德魯伊祭壇在北側' },
    ],
    monsters: [
      { monsterId: 'crooked_totem_hexer', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'moonvine_stag', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[環]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '內祭環的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '內祭環的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '內祭環殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

thornmaze_ancient_druid_altar: {
    id: 'thornmaze_ancient_druid_altar',
    name: '古代德魯伊祭壇',
    zone: 'thornmaze' as RoomDef['zone'],
    image: 'thornmaze_ancient_druid_altar.png',
    imagePrompt: '古代德魯伊祭壇 in thornmaze, living thorn maze with closing briar walls, red thorns, black roots, poisonous flowers, moonlit vines, ancient druid altar, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '古代德魯伊祭壇位於荊棘迷宮會緩慢生長與閉合的刺牆之間，紅刺、黑根、毒花粉、月藤橋與古代德魯伊刻痕共同構成不斷改變的深林路線。這裡是高階隊伍探索與採集區，玩家可以 inspect 刺牆開合痕、苔蘚鑰孔、薔薇陷阱和圖騰朝向來判斷迷宮節奏，也能 search 獵營、血脂池、活牆根部與祭壇石縫尋找德魯伊線索。若隊伍忽略牆面閉合聲、毒花風向與暗影伏擊，地獄犬、暗影刺客、詛咒祭司與遠古樹人會切斷回路；若穩定標記岔口、記錄開合時間並守住月藤橋，則能抵達古代德魯伊祭壇並帶回迷宮核心記錄、活藤樣本與安全回程標記。',
    exits: [
      { direction: 'south', targetRoomId: 'thornmaze_inner_altar_ring', description: '回到內祭環' },
    ],
    monsters: [
      { monsterId: 'ancient_briar_hierophant', maxCount: 1, respawnSeconds: 720 },
      { monsterId: 'crooked_totem_hexer', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'living_wall_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: 3,
    guardianHints: {
      creature: '古代德魯伊祭壇的刺牆若突然收緊，附近伏擊者或活化樹根通常已經封住退路。',
      treasure: '古代德魯伊祭壇的苔蘚鑰孔、根縫或圖騰底座旁可能藏著荊棘迷宮線索。',
      spirit: '古代德魯伊祭壇殘留古代德魯伊調整迷宮、獻祭與守護祭壇的記憶。',
    },
  },

// ─── 餘燼邊境擴充 (Lv 22-34) ───────────────────────────

  ember_march_ash_gate: {
    id: 'ember_march_ash_gate',
    name: '灰燼入口門',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_ash_gate.png',
    imagePrompt: '灰燼入口門 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain ash, clear lantern light',
    description:
      '灰燼入口門位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'east', targetRoomId: 'ember_march_cinder_road', description: '焦炭路在東側' },
      { direction: 'north', targetRoomId: 'ember_march_burnt_watchpost', description: '燒毀哨站在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'ashroad_sparkling', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'cinder_trench_stalker', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '灰燼入口門的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '灰燼入口門的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '灰燼入口門殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_cinder_road: {
    id: 'ember_march_cinder_road',
    name: '焦炭路',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_cinder_road.png',
    imagePrompt: '焦炭路 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '焦炭路位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_ash_gate', description: '回到灰燼入口門' },
      { direction: 'east', targetRoomId: 'ember_march_smoke_trench', description: '煙溝在東側' },
      { direction: 'north', targetRoomId: 'ember_march_charred_milestone', description: '焦黑里程碑在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'ashroad_sparkling', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'ember_crack_worm', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[路]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '焦炭路的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '焦炭路的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '焦炭路殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_smoke_trench: {
    id: 'ember_march_smoke_trench',
    name: '煙溝',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_smoke_trench.png',
    imagePrompt: '煙溝 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '煙溝位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_cinder_road', description: '回到焦炭路' },
      { direction: 'east', targetRoomId: 'ember_march_lava_crack', description: '熔裂縫在東側' },
      { direction: 'north', targetRoomId: 'ember_march_firegrass_flat', description: '北側火草坪接回焦黑補給道' },
      { direction: 'south', targetRoomId: 'ember_march_war_camp_ruin', description: '南側塌旗營牆通往戰營殘址' },
    ],
    monsters: [
      { monsterId: 'cinder_trench_stalker', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'ember_crack_worm', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[煙]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '煙溝的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '煙溝的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '煙溝殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_charred_milestone: {
    id: 'ember_march_charred_milestone',
    name: '焦黑里程碑',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_charred_milestone.png',
    imagePrompt: '焦黑里程碑 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '焦黑里程碑位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'ember_march_cinder_road', description: '回到焦炭路', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_war_camp_ruin', description: '東側焦黑里程碑沿熔亮灰脊斜行，繞過倒旗殘樁與戰壕外圈抵達戰營殘址', edgeKind: 'distant_route', edgeNote: '焦黑里程碑到戰營殘址需沿熔亮灰脊與戰壕外圈繞行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'burnt_banner_raider', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'ashroad_sparkling', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[碑]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '焦黑里程碑的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '焦黑里程碑的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '焦黑里程碑殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_burnt_watchpost: {
    id: 'ember_march_burnt_watchpost',
    name: '燒毀哨站',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_burnt_watchpost.png',
    imagePrompt: '燒毀哨站 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '燒毀哨站位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'ember_march_ash_gate', description: '回到灰燼入口門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_charred_milestone', description: '焦黑里程碑在東側' },
      { direction: 'north', targetRoomId: 'ember_march_glass_ash_field', description: '玻璃灰原在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_ash_lizard', maxCount: 1, respawnSeconds: 230 },
      { monsterId: 'ashroad_sparkling', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[哨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '燒毀哨站的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '燒毀哨站的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '燒毀哨站殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_lava_crack: {
    id: 'ember_march_lava_crack',
    name: '熔裂縫',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_lava_crack.png',
    imagePrompt: '熔裂縫 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '熔裂縫位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_smoke_trench', description: '回到煙溝' },
      { direction: 'north', targetRoomId: 'ember_march_slag_bridge', description: '渣鐵橋在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_black_sand_basin', description: '黑砂盆地在東側' },
    ],
    monsters: [
      { monsterId: 'ember_crack_worm', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'slagplate_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[裂]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '熔裂縫的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '熔裂縫的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '熔裂縫殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_glass_ash_field: {
    id: 'ember_march_glass_ash_field',
    name: '玻璃灰原',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_glass_ash_field.png',
    imagePrompt: '玻璃灰原 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '玻璃灰原位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'ember_march_burnt_watchpost', description: '回到燒毀哨站', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_war_camp_ruin', description: '戰營殘址在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_ash_lizard', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'ashroad_sparkling', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[玻]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '玻璃灰原的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '玻璃灰原的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '玻璃灰原殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_war_camp_ruin: {
    id: 'ember_march_war_camp_ruin',
    name: '戰營殘址',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_war_camp_ruin.png',
    imagePrompt: '戰營殘址 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '戰營殘址位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_charred_milestone', description: '西側戰營殘址沿焦黑營道折返，穿過倒塌帳架與灰燼里程標回到焦黑里程碑', edgeKind: 'distant_route', edgeNote: '戰營殘址回焦黑里程碑需沿焦黑營道與倒塌帳架折返，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'ember_march_slag_bridge', description: '東側戰營殘址穿過燒紅壕溝與熔渣橋墩，沿斷裂鐵板道抵達渣鐵橋', edgeKind: 'distant_route', edgeNote: '戰營殘址到渣鐵橋需穿過燒紅壕溝與熔渣橋墩，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'ember_march_smoke_trench', description: '北側塌旗營牆回到煙溝' },
    ],
    monsters: [
      { monsterId: 'burnt_banner_raider', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'bonekiln_ashguard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[營]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '戰營殘址的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '戰營殘址的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '戰營殘址殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_slag_bridge: {
    id: 'ember_march_slag_bridge',
    name: '渣鐵橋',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_slag_bridge.png',
    imagePrompt: '渣鐵橋 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '渣鐵橋位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_war_camp_ruin', description: '西側渣鐵橋沿斷裂鐵板道折返，穿過熔渣橋墩與燒紅壕溝回到戰營殘址', edgeKind: 'distant_route', edgeNote: '渣鐵橋回戰營殘址需沿斷裂鐵板道與熔渣橋墩折返，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'ember_march_lava_crack', description: '落回熔裂縫', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_ember_forge', description: '餘燼鍛台在東側' },
    ],
    monsters: [
      { monsterId: 'slagplate_colossus', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'ashroad_sparkling', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[橋]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '渣鐵橋的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '渣鐵橋的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '渣鐵橋殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_firegrass_flat: {
    id: 'ember_march_firegrass_flat',
    name: '火草坪',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_firegrass_flat.png',
    imagePrompt: '火草坪 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain ash, clear lantern light',
    description:
      '火草坪位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'ember_march_smoke_trench', description: '南側焦黑補給道下到煙溝' },
      { direction: 'east', targetRoomId: 'ember_march_worm_burrow', description: '熔岩蟲道在東側' },
    ],
    monsters: [
      { monsterId: 'glass_ash_lizard', maxCount: 1, respawnSeconds: 230 },
      { monsterId: 'ashroad_sparkling', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '火草坪的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '火草坪的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '火草坪殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_worm_burrow: {
    id: 'ember_march_worm_burrow',
    name: '熔岩蟲道',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_worm_burrow.png',
    imagePrompt: '熔岩蟲道 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '熔岩蟲道位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_firegrass_flat', description: '回到火草坪' },
      { direction: 'east', targetRoomId: 'ember_march_scorched_oasis', description: '焦泉在東側' },
    ],
    monsters: [
      { monsterId: 'ember_crack_worm', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'cinder_trench_stalker', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[蟲]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '熔岩蟲道的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '熔岩蟲道的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '熔岩蟲道殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_black_sand_basin: {
    id: 'ember_march_black_sand_basin',
    name: '黑砂盆地',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_black_sand_basin.png',
    imagePrompt: '黑砂盆地 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '黑砂盆地位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_lava_crack', description: '回到熔裂縫' },
      { direction: 'north', targetRoomId: 'ember_march_ember_forge', description: '餘燼鍛台在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_bonekiln_pass', description: '東側黑砂盆地沿蒸汽乾渠繞開骨窯熱流，穿過焦骨路標與熔灰坡抵達骨窯隘口', edgeKind: 'distant_route', edgeNote: '黑砂盆地到骨窯隘口需沿蒸汽乾渠繞過骨窯熱流，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'burnt_banner_raider', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'glass_ash_lizard', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[砂]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '黑砂盆地的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '黑砂盆地的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '黑砂盆地殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_ember_forge: {
    id: 'ember_march_ember_forge',
    name: '餘燼鍛台',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_ember_forge.png',
    imagePrompt: '餘燼鍛台 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '餘燼鍛台位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_slag_bridge', description: '回到渣鐵橋' },
      { direction: 'south', targetRoomId: 'ember_march_black_sand_basin', description: '回到黑砂盆地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ember_march_fallen_banner', description: '倒旗坡在東側' },
    ],
    monsters: [
      { monsterId: 'border_forge_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'slagplate_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[鍛]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '餘燼鍛台的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '餘燼鍛台的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '餘燼鍛台殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_fallen_banner: {
    id: 'ember_march_fallen_banner',
    name: '倒旗坡',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_fallen_banner.png',
    imagePrompt: '倒旗坡 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '倒旗坡位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_ember_forge', description: '回到餘燼鍛台' },
      { direction: 'south', targetRoomId: 'ember_march_bonekiln_pass', description: '南側倒旗坡沿燒斷軍旗列下切，穿過骨灰階坡與熱風窄口抵達骨窯隘口', edgeKind: 'distant_route', edgeNote: '倒旗坡到骨窯隘口需沿軍旗列與骨灰階坡下切，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'ember_march_molten_toll', description: '熔火關卡在東側' },
    ],
    monsters: [
      { monsterId: 'burnt_banner_raider', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'cinder_trench_stalker', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[旗]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '倒旗坡的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '倒旗坡的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '倒旗坡殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_scorched_oasis: {
    id: 'ember_march_scorched_oasis',
    name: '焦泉',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_scorched_oasis.png',
    imagePrompt: '焦泉 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '焦泉位於餘燼邊境火山灰覆蓋的過渡地帶，焦炭路、煙溝、熔裂縫、倒旗坡與被燒空的邊境堡壘共同標出危險的火線路線。這裡是高密度野外遭遇與開放衝突區，玩家可以 inspect 灰面足跡、軍旗殘布、熔岩溫度和哨站刻痕來判斷敵情，也能 search 戰營殘址、骨窯隘口、餘燼鍛台與邊堡外殼尋找補給線索。若隊伍忽略地縫火光、煙溝伏擊與龍印脊熱風，熔岩蟲、火元素、魔族士兵與炎龍騎士會封住通道；若穩定沿焦黑路標、灰堆高地與熔火關卡推進，則能抵達心火缺口並安全帶回邊境戰況記錄、熔渣樣本與撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_worm_burrow', description: '回到熔岩蟲道' },
      { direction: 'east', targetRoomId: 'ember_march_bonekiln_pass', description: '骨窯隘口在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'glass_ash_lizard', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'bonekiln_ashguard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[泉]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '焦泉的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '焦泉的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '焦泉殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },
};
