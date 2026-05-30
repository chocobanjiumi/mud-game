import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_014: Record<string, RoomDef> = {
starfall_crater_outer_void: {
    id: 'starfall_crater_outer_void',
    name: '外界空洞',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_outer_void.png',
    imagePrompt: '外界空洞 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '外界空洞位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_worldboss_core', description: '外界空洞回到世界王星核' },
    ],
    monsters: [
      { monsterId: 'outer_void_star_devourer', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'voidglass_brood', maxCount: 3, respawnSeconds: 240 },
    ],
    mapSymbol: '[外]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '外界空洞的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '外界空洞的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '外界空洞保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

time_ruins_epoch_gate: {
    id: 'time_ruins_epoch_gate',
    name: '紀元入口',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_epoch_gate.png',
    imagePrompt: '紀元入口 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fantasy terrain, clear lantern light',
    description:
      '紀元入口位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'east', targetRoomId: 'time_ruins_broken_clockway', description: '碎鐘路通往廢墟' },
      { direction: 'north', targetRoomId: 'time_ruins_reverse_riverbank', description: '倒流河岸在北側' },
    ],
    monsters: [
      { monsterId: 'epoch_gate_warden', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'reverse_river_memory', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '紀元入口的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '紀元入口的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '紀元入口保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_broken_clockway: {
    id: 'time_ruins_broken_clockway',
    name: '碎鐘路',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_broken_clockway.png',
    imagePrompt: '碎鐘路 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '碎鐘路位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_epoch_gate', description: '碎鐘路回到紀元入口' },
      { direction: 'east', targetRoomId: 'time_ruins_hourglass_square', description: '沙漏廣場在前方' },
      { direction: 'south', targetRoomId: 'time_ruins_future_ash', description: '未來灰燼坡向下延伸' },
    ],
    monsters: [
      { monsterId: 'epoch_gate_warden', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'hourglass_automaton', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '碎鐘路的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '碎鐘路的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '碎鐘路保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_reverse_riverbank: {
    id: 'time_ruins_reverse_riverbank',
    name: '倒流河岸',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_reverse_riverbank.png',
    imagePrompt: '倒流河岸 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '倒流河岸位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'south', targetRoomId: 'time_ruins_epoch_gate', description: '倒流河岸回到紀元入口' },
      { direction: 'east', targetRoomId: 'time_ruins_memory_reef', description: '記憶礁岸在東側' },
    ],
    monsters: [
      { monsterId: 'reverse_river_memory', maxCount: 3, respawnSeconds: 210 },
      { monsterId: 'future_ash_paradox', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[河]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '倒流河岸的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '倒流河岸的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '倒流河岸保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_memory_reef: {
    id: 'time_ruins_memory_reef',
    name: '記憶礁岸',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_memory_reef.png',
    imagePrompt: '記憶礁岸 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '記憶礁岸位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_reverse_riverbank', description: '記憶礁岸回到倒流河' },
      { direction: 'east', targetRoomId: 'time_ruins_past_market', description: '舊日市集殘影在東側' },
      { direction: 'south', targetRoomId: 'time_ruins_hourglass_square', description: '記憶坡落向沙漏廣場' },
    ],
    monsters: [
      { monsterId: 'reverse_river_memory', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[憶]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '記憶礁岸的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '記憶礁岸的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '記憶礁岸保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_hourglass_square: {
    id: 'time_ruins_hourglass_square',
    name: '沙漏廣場',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_hourglass_square.png',
    imagePrompt: '沙漏廣場 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '沙漏廣場位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_broken_clockway', description: '沙漏廣場回到碎鐘路' },
      { direction: 'north', targetRoomId: 'time_ruins_memory_reef', description: '記憶坡回到礁岸' },
      { direction: 'east', targetRoomId: 'time_ruins_stalled_bell_tower', description: '停擺鐘塔在東側' },
    ],
    monsters: [
      { monsterId: 'hourglass_automaton', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'epoch_gate_warden', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[沙]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '沙漏廣場的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '沙漏廣場的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '沙漏廣場保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_future_ash: {
    id: 'time_ruins_future_ash',
    name: '未來灰燼',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_future_ash.png',
    imagePrompt: '未來灰燼 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '未來灰燼位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'north', targetRoomId: 'time_ruins_broken_clockway', description: '未來灰燼回到碎鐘路' },
      { direction: 'east', targetRoomId: 'time_ruins_ruined_observatory', description: '毀壞觀測臺在東側' },
    ],
    monsters: [
      { monsterId: 'future_ash_paradox', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'reverse_river_memory', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[灰]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '未來灰燼的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '未來灰燼的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '未來灰燼保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_past_market: {
    id: 'time_ruins_past_market',
    name: '舊日市集',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_past_market.png',
    imagePrompt: '舊日市集 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '舊日市集位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_memory_reef', description: '市集殘影回到記憶礁岸' },
      { direction: 'east', targetRoomId: 'time_ruins_sundial_court', description: '日晷庭在東側' },
    ],
    monsters: [
      { monsterId: 'future_ash_paradox', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '舊日市集的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '舊日市集的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '舊日市集保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_stalled_bell_tower: {
    id: 'time_ruins_stalled_bell_tower',
    name: '停擺鐘塔',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_stalled_bell_tower.png',
    imagePrompt: '停擺鐘塔 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '停擺鐘塔位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_hourglass_square', description: '停擺鐘塔回到沙漏廣場' },
      { direction: 'east', targetRoomId: 'time_ruins_paradox_cloister', description: '悖論迴廊在東側' },
      { direction: 'south', targetRoomId: 'time_ruins_ruined_observatory', description: '鐘塔階落向觀測臺' },
    ],
    monsters: [
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'hourglass_automaton', maxCount: 2, respawnSeconds: 230 },
    ],
    mapSymbol: '[塔]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '停擺鐘塔的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '停擺鐘塔的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '停擺鐘塔保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_ruined_observatory: {
    id: 'time_ruins_ruined_observatory',
    name: '毀壞觀測臺',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_ruined_observatory.png',
    imagePrompt: '毀壞觀測臺 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '毀壞觀測臺位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_future_ash', description: '觀測臺回到未來灰燼' },
      { direction: 'north', targetRoomId: 'time_ruins_stalled_bell_tower', description: '鐘塔階回到停擺鐘塔' },
      { direction: 'east', targetRoomId: 'time_ruins_lightning_record', description: '雷刻紀錄室在東側' },
    ],
    monsters: [
      { monsterId: 'lightning_record_drake', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'future_ash_paradox', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[觀]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '毀壞觀測臺的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '毀壞觀測臺的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '毀壞觀測臺保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_sundial_court: {
    id: 'time_ruins_sundial_court',
    name: '日晷庭',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_sundial_court.png',
    imagePrompt: '日晷庭 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '日晷庭位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_past_market', description: '日晷庭回到舊日市集' },
      { direction: 'east', targetRoomId: 'time_ruins_split_statue', description: '分裂雕像在東側' },
    ],
    monsters: [
      { monsterId: 'hourglass_automaton', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'reverse_river_memory', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[晷]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '日晷庭的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '日晷庭的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '日晷庭保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_paradox_cloister: {
    id: 'time_ruins_paradox_cloister',
    name: '悖論迴廊',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_paradox_cloister.png',
    imagePrompt: '悖論迴廊 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '悖論迴廊位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_stalled_bell_tower', description: '悖論迴廊回到停擺鐘塔' },
      { direction: 'north', targetRoomId: 'time_ruins_split_statue', description: '錯位階通往分裂雕像' },
      { direction: 'east', targetRoomId: 'time_ruins_looping_bridge', description: '循環橋在東側' },
    ],
    monsters: [
      { monsterId: 'future_ash_paradox', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[悖]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '悖論迴廊的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '悖論迴廊的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '悖論迴廊保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_lightning_record: {
    id: 'time_ruins_lightning_record',
    name: '雷刻紀錄室',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_lightning_record.png',
    imagePrompt: '雷刻紀錄室 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '雷刻紀錄室位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_ruined_observatory', description: '雷刻室回到觀測臺' },
      { direction: 'east', targetRoomId: 'time_ruins_looping_bridge', description: '電弧路通往循環橋' },
    ],
    monsters: [
      { monsterId: 'lightning_record_drake', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'epoch_gate_warden', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[雷]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '雷刻紀錄室的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '雷刻紀錄室的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '雷刻紀錄室保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_split_statue: {
    id: 'time_ruins_split_statue',
    name: '分裂雕像',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_split_statue.png',
    imagePrompt: '分裂雕像 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '分裂雕像位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_sundial_court', description: '分裂雕像回到日晷庭' },
      { direction: 'south', targetRoomId: 'time_ruins_paradox_cloister', description: '錯位階回到悖論迴廊' },
      { direction: 'east', targetRoomId: 'time_ruins_agefall_steps', description: '歲落階在東側' },
    ],
    monsters: [
      { monsterId: 'hourglass_automaton', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'future_ash_paradox', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '分裂雕像的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '分裂雕像的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '分裂雕像保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_looping_bridge: {
    id: 'time_ruins_looping_bridge',
    name: '循環橋',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_looping_bridge.png',
    imagePrompt: '循環橋 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '循環橋位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。南側電弧路在循環橋上只會把影子送回雷刻室，本體必須由雷刻紀錄室進入循環橋。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_paradox_cloister', description: '循環橋回到悖論迴廊' },
      { direction: 'east', targetRoomId: 'time_ruins_timeline_archive', description: '時間線檔案館在東側' },
    ],
    monsters: [
      { monsterId: 'future_ash_paradox', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'lightning_record_drake', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '循環橋的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '循環橋的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '循環橋保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_agefall_steps: {
    id: 'time_ruins_agefall_steps',
    name: '歲落階',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_agefall_steps.png',
    imagePrompt: '歲落階 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '歲落階位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_split_statue', description: '歲落階回到分裂雕像' },
      { direction: 'east', targetRoomId: 'time_ruins_clockheart_gate', description: '鐘心門在東側' },
    ],
    monsters: [
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'causality_adjudicator', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[歲]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '歲落階的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '歲落階的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '歲落階保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_timeline_archive: {
    id: 'time_ruins_timeline_archive',
    name: '時間線檔案館',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_timeline_archive.png',
    imagePrompt: '時間線檔案館 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '時間線檔案館位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_looping_bridge', description: '檔案館回到循環橋' },
      { direction: 'north', targetRoomId: 'time_ruins_clockheart_gate', description: '索引階通往鐘心門' },
      { direction: 'east', targetRoomId: 'time_ruins_causality_well', description: '因果井在東側' },
    ],
    monsters: [
      { monsterId: 'causality_adjudicator', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'stopped_bell_chronolich', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[檔]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '時間線檔案館的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '時間線檔案館的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '時間線檔案館保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_clockheart_gate: {
    id: 'time_ruins_clockheart_gate',
    name: '鐘心門',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_clockheart_gate.png',
    imagePrompt: '鐘心門 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '鐘心門位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_agefall_steps', description: '鐘心門回到歲落階' },
      { direction: 'south', targetRoomId: 'time_ruins_timeline_archive', description: '索引階回到檔案館' },
      { direction: 'east', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '零分核心在東側' },
    ],
    monsters: [
      { monsterId: 'causality_adjudicator', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'lightning_record_drake', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[心]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '鐘心門的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '鐘心門的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '鐘心門保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_causality_well: {
    id: 'time_ruins_causality_well',
    name: '因果井',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_causality_well.png',
    imagePrompt: '因果井 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '因果井位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_timeline_archive', description: '因果井回到時間線檔案館' },
      { direction: 'east', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '因果裂縫通往零分核心' },
    ],
    monsters: [
      { monsterId: 'causality_adjudicator', maxCount: 2, respawnSeconds: 560 },
      { monsterId: 'future_ash_paradox', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[因]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '因果井的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '因果井的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '因果井保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_worldboss_minute_zero: {
    id: 'time_ruins_worldboss_minute_zero',
    name: '零分核心',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_worldboss_minute_zero.png',
    imagePrompt: '零分核心 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '零分核心位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。南側因果裂縫在零分核心旁閉合成單向時間疤，只能從因果井抵達核心。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_clockheart_gate', description: '零分核心回到鐘心門' },
      { direction: 'east', targetRoomId: 'time_ruins_afterimage_void', description: '餘影虛空在核心後方' },
    ],
    monsters: [
      { monsterId: 'minute_zero_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'causality_adjudicator', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'lightning_record_drake', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[王]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '零分核心的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '零分核心的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '零分核心保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

time_ruins_afterimage_void: {
    id: 'time_ruins_afterimage_void',
    name: '餘影虛空',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_afterimage_void.png',
    imagePrompt: '餘影虛空 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '餘影虛空位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '餘影虛空回到零分核心' },
    ],
    monsters: [
      { monsterId: 'afterimage_void_serpent', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'future_ash_paradox', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[虛]',
    mapX: 9,
    mapY: 0,
    guardianHints: {
      creature: '餘影虛空的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '餘影虛空的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '餘影虛空保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

astral_wastes_reality_gate: {
    id: 'astral_wastes_reality_gate',
    name: '現實邊門',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_reality_gate.png',
    imagePrompt: '現實邊門 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '現實邊門位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'east', targetRoomId: 'astral_wastes_starsand_track', description: '星砂路通往荒原' },
      { direction: 'north', targetRoomId: 'astral_wastes_anchor_stone', description: '錨石丘在北側' },
    ],
    monsters: [
      { monsterId: 'reality_edge_stalker', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'anchorstone_colossus', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '現實邊門的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '現實邊門的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '現實邊門保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_starsand_track: {
    id: 'astral_wastes_starsand_track',
    name: '星砂路',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_starsand_track.png',
    imagePrompt: '星砂路 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '星砂路位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_reality_gate', description: '星砂路回到現實邊門' },
      { direction: 'east', targetRoomId: 'astral_wastes_bent_horizon', description: '彎曲地平線在前方' },
      { direction: 'south', targetRoomId: 'astral_wastes_lightless_dune', description: '無光沙丘向下起伏' },
    ],
    monsters: [
      { monsterId: 'reality_edge_stalker', maxCount: 3, respawnSeconds: 210 },
      { monsterId: 'cometbone_scavenger', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[砂]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '星砂路的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星砂路的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星砂路保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_anchor_stone: {
    id: 'astral_wastes_anchor_stone',
    name: '錨石丘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_anchor_stone.png',
    imagePrompt: '錨石丘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '錨石丘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'south', targetRoomId: 'astral_wastes_reality_gate', description: '錨石丘回到現實邊門' },
      { direction: 'east', targetRoomId: 'astral_wastes_comet_bones', description: '彗骨灘在東側' },
    ],
    monsters: [
      { monsterId: 'anchorstone_colossus', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'reality_edge_stalker', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[錨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '錨石丘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '錨石丘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '錨石丘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_comet_bones: {
    id: 'astral_wastes_comet_bones',
    name: '彗骨灘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_comet_bones.png',
    imagePrompt: '彗骨灘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '彗骨灘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_anchor_stone', description: '彗骨灘回到錨石丘' },
      { direction: 'east', targetRoomId: 'astral_wastes_mirror_void', description: '鏡面虛空在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_bent_horizon', description: '骨砂坡落向地平線' },
    ],
    monsters: [
      { monsterId: 'cometbone_scavenger', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[骨]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '彗骨灘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '彗骨灘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '彗骨灘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_bent_horizon: {
    id: 'astral_wastes_bent_horizon',
    name: '彎曲地平線',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_bent_horizon.png',
    imagePrompt: '彎曲地平線 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '彎曲地平線位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_starsand_track', description: '地平線回到星砂路' },
      { direction: 'north', targetRoomId: 'astral_wastes_comet_bones', description: '骨砂坡回到彗骨灘' },
      { direction: 'east', targetRoomId: 'astral_wastes_floating_obelisk', description: '漂浮方尖碑在前方' },
    ],
    monsters: [
      { monsterId: 'reality_edge_stalker', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[線]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '彎曲地平線的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '彎曲地平線的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '彎曲地平線保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_lightless_dune: {
    id: 'astral_wastes_lightless_dune',
    name: '無光沙丘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_lightless_dune.png',
    imagePrompt: '無光沙丘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '無光沙丘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'north', targetRoomId: 'astral_wastes_starsand_track', description: '無光沙丘回到星砂路' },
      { direction: 'east', targetRoomId: 'astral_wastes_echo_crater', description: '回音坑在東側' },
    ],
    monsters: [
      { monsterId: 'reality_edge_stalker', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'gravity_silt_horror', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[丘]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '無光沙丘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '無光沙丘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '無光沙丘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_mirror_void: {
    id: 'astral_wastes_mirror_void',
    name: '鏡面虛空',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_mirror_void.png',
    imagePrompt: '鏡面虛空 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '鏡面虛空位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_comet_bones', description: '鏡面虛空回到彗骨灘' },
      { direction: 'east', targetRoomId: 'astral_wastes_pale_shrine', description: '蒼白小祠在東側' },
    ],
    monsters: [
      { monsterId: 'mirrorvoid_lurker', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'pale_shrine_luminant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '鏡面虛空的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '鏡面虛空的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '鏡面虛空保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_floating_obelisk: {
    id: 'astral_wastes_floating_obelisk',
    name: '漂浮方尖碑',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_floating_obelisk.png',
    imagePrompt: '漂浮方尖碑 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '漂浮方尖碑位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_bent_horizon', description: '方尖碑回到彎曲地平線' },
      { direction: 'east', targetRoomId: 'astral_wastes_gravity_sink', description: '重力沉井在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_echo_crater', description: '碑影坡落向回音坑' },
    ],
    monsters: [
      { monsterId: 'anchorstone_colossus', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'gravity_silt_horror', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[碑]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '漂浮方尖碑的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '漂浮方尖碑的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '漂浮方尖碑保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_echo_crater: {
    id: 'astral_wastes_echo_crater',
    name: '回音坑',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_echo_crater.png',
    imagePrompt: '回音坑 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '回音坑位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_lightless_dune', description: '回音坑回到無光沙丘' },
      { direction: 'north', targetRoomId: 'astral_wastes_floating_obelisk', description: '碑影坡回到方尖碑' },
      { direction: 'east', targetRoomId: 'astral_wastes_shattered_moonroad', description: '碎月路在東側' },
    ],
    monsters: [
      { monsterId: 'cometbone_scavenger', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[坑]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '回音坑的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '回音坑的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '回音坑保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_pale_shrine: {
    id: 'astral_wastes_pale_shrine',
    name: '蒼白小祠',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_pale_shrine.png',
    imagePrompt: '蒼白小祠 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '蒼白小祠位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_mirror_void', description: '蒼白小祠回到鏡面虛空' },
      { direction: 'east', targetRoomId: 'astral_wastes_astral_lake', description: '星界湖在東側' },
    ],
    monsters: [
      { monsterId: 'pale_shrine_luminant', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '蒼白小祠的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '蒼白小祠的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '蒼白小祠保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_gravity_sink: {
    id: 'astral_wastes_gravity_sink',
    name: '重力沉井',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_gravity_sink.png',
    imagePrompt: '重力沉井 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '重力沉井位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_floating_obelisk', description: '重力沉井回到方尖碑' },
      { direction: 'north', targetRoomId: 'astral_wastes_astral_lake', description: '反重力坡通往星界湖' },
      { direction: 'east', targetRoomId: 'astral_wastes_void_rift', description: '虛空裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'gravity_silt_horror', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'anchorstone_colossus', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[重]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '重力沉井的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '重力沉井的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '重力沉井保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_shattered_moonroad: {
    id: 'astral_wastes_shattered_moonroad',
    name: '碎月路',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_shattered_moonroad.png',
    imagePrompt: '碎月路 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '碎月路位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_echo_crater', description: '碎月路回到回音坑' },
      { direction: 'east', targetRoomId: 'astral_wastes_star_silt_basin', description: '星泥盆地在東側' },
    ],
    monsters: [
      { monsterId: 'cometbone_scavenger', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'gravity_silt_horror', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '碎月路的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '碎月路的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '碎月路保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_astral_lake: {
    id: 'astral_wastes_astral_lake',
    name: '星界湖',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_astral_lake.png',
    imagePrompt: '星界湖 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '星界湖位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_pale_shrine', description: '星界湖回到蒼白小祠' },
      { direction: 'south', targetRoomId: 'astral_wastes_gravity_sink', description: '反重力坡回到沉井' },
      { direction: 'east', targetRoomId: 'astral_wastes_lost_constellation', description: '失落星座在東側' },
    ],
    monsters: [
      { monsterId: 'pale_shrine_luminant', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'lost_constellation_seraph', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[湖]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '星界湖的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星界湖的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星界湖保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_void_rift: {
    id: 'astral_wastes_void_rift',
    name: '虛空裂縫',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_void_rift.png',
    imagePrompt: '虛空裂縫 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '虛空裂縫位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_gravity_sink', description: '虛空裂縫回到重力沉井' },
      { direction: 'east', targetRoomId: 'astral_wastes_black_star_gate', description: '黑星門在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_star_silt_basin', description: '裂光坡落向星泥盆地' },
    ],
    monsters: [
      { monsterId: 'gravity_silt_horror', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'blackstar_gatekeeper', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[裂]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '虛空裂縫的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '虛空裂縫的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '虛空裂縫保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_star_silt_basin: {
    id: 'astral_wastes_star_silt_basin',
    name: '星泥盆地',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_star_silt_basin.png',
    imagePrompt: '星泥盆地 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '星泥盆地位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_shattered_moonroad', description: '星泥盆地回到碎月路' },
      { direction: 'north', targetRoomId: 'astral_wastes_void_rift', description: '裂光坡回到虛空裂縫' },
      { direction: 'east', targetRoomId: 'astral_wastes_levitating_ruins', description: '懸浮遺跡在東側' },
    ],
    monsters: [
      { monsterId: 'gravity_silt_horror', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[泥]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '星泥盆地的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星泥盆地的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星泥盆地保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_lost_constellation: {
    id: 'astral_wastes_lost_constellation',
    name: '失落星座',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_lost_constellation.png',
    imagePrompt: '失落星座 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '失落星座位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_astral_lake', description: '失落星座回到星界湖' },
      { direction: 'south', targetRoomId: 'astral_wastes_black_star_gate', description: '星線落向黑星門' },
    ],
    monsters: [
      { monsterId: 'lost_constellation_seraph', maxCount: 2, respawnSeconds: 560 },
      { monsterId: 'blackstar_gatekeeper', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[座]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '失落星座的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '失落星座的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '失落星座保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_black_star_gate: {
    id: 'astral_wastes_black_star_gate',
    name: '黑星門',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_black_star_gate.png',
    imagePrompt: '黑星門 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '黑星門位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_void_rift', description: '黑星門回到虛空裂縫' },
      { direction: 'north', targetRoomId: 'astral_wastes_lost_constellation', description: '星線回到失落星座' },
      { direction: 'east', targetRoomId: 'astral_wastes_worldcore_waste', description: '荒原核心在東側' },
    ],
    monsters: [
      { monsterId: 'blackstar_gatekeeper', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'lost_constellation_seraph', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[星]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '黑星門的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '黑星門的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '黑星門保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_levitating_ruins: {
    id: 'astral_wastes_levitating_ruins',
    name: '懸浮遺跡',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_levitating_ruins.png',
    imagePrompt: '懸浮遺跡 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '懸浮遺跡位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_star_silt_basin', description: '懸浮遺跡回到星泥盆地' },
      { direction: 'east', targetRoomId: 'astral_wastes_worldcore_waste', description: '浮石橋通往荒原核心' },
    ],
    monsters: [
      { monsterId: 'gravity_silt_horror', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'worldcore_astral_wyrm', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[浮]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '懸浮遺跡的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '懸浮遺跡的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '懸浮遺跡保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_worldcore_waste: {
    id: 'astral_wastes_worldcore_waste',
    name: '星界荒原核心',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_worldcore_waste.png',
    imagePrompt: '星界荒原核心 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '星界荒原核心位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。南側浮石橋在核心重力下只剩漂浮殘影，只能由懸浮遺跡踏入荒原核心。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_black_star_gate', description: '荒原核心回到黑星門' },
      { direction: 'east', targetRoomId: 'astral_wastes_outer_dark', description: '外層黑域在核心外側' },
    ],
    monsters: [
      { monsterId: 'worldcore_astral_wyrm', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'blackstar_gatekeeper', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'lost_constellation_seraph', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '星界荒原核心的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星界荒原核心的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星界荒原核心保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

astral_wastes_outer_dark: {
    id: 'astral_wastes_outer_dark',
    name: '外層黑域',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_outer_dark.png',
    imagePrompt: '外層黑域 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain sand, clear lantern light',
    description:
      '外層黑域位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_worldcore_waste', description: '外層黑域回到星界荒原核心' },
    ],
    monsters: [
      { monsterId: 'outer_dark_devourer', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'worldcore_astral_wyrm', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'mirrorvoid_lurker', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[外]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '外層黑域的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '外層黑域的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '外層黑域保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

final_battleground_war_gate: {
    id: 'final_battleground_war_gate',
    name: '終戰入口',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_war_gate.png',
    imagePrompt: '終戰入口 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '終戰入口位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'east', targetRoomId: 'final_battleground_broken_banner_field', description: '破旗原在前方' },
      { direction: 'north', targetRoomId: 'final_battleground_king_cairn', description: '王骨石堆在北側' },
    ],
    monsters: [
      { monsterId: 'war_gate_bannerman', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'kingbone_oath_knight', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '終戰入口的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '終戰入口的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '終戰入口保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_broken_banner_field: {
    id: 'final_battleground_broken_banner_field',
    name: '破旗原',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_broken_banner_field.png',
    imagePrompt: '破旗原 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '破旗原位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_war_gate', description: '破旗原回到終戰入口' },
      { direction: 'east', targetRoomId: 'final_battleground_siege_trench', description: '攻城壕溝在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_ember_mud', description: '餘火泥地在南側' },
    ],
    monsters: [
      { monsterId: 'war_gate_bannerman', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'siege_trench_revenant', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[旗]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '破旗原的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '破旗原的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '破旗原保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_king_cairn: {
    id: 'final_battleground_king_cairn',
    name: '王骨石堆',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_king_cairn.png',
    imagePrompt: '王骨石堆 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '王骨石堆位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'south', targetRoomId: 'final_battleground_war_gate', description: '王骨石堆回到終戰入口' },
      { direction: 'east', targetRoomId: 'final_battleground_oath_circle', description: '誓約石圈在東側' },
    ],
    monsters: [
      { monsterId: 'kingbone_oath_knight', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'siege_trench_revenant', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[王]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '王骨石堆的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '王骨石堆的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '王骨石堆保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_oath_circle: {
    id: 'final_battleground_oath_circle',
    name: '誓約石圈',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_oath_circle.png',
    imagePrompt: '誓約石圈 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '誓約石圈位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_king_cairn', description: '誓約石圈回到王骨石堆' },
      { direction: 'east', targetRoomId: 'final_battleground_sunless_chapel', description: '無日禮拜堂在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_siege_trench', description: '碎石坡落向攻城壕溝' },
    ],
    monsters: [
      { monsterId: 'kingbone_oath_knight', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[誓]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '誓約石圈的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '誓約石圈的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '誓約石圈保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },
};
