import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_024: Record<string, RoomDef> = {
machine_graveyard_core_wake_hall: {
    id: 'machine_graveyard_core_wake_hall',
    name: '核心甦醒廳',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_core_wake_hall.png',
    imagePrompt: '核心甦醒廳 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '核心甦醒廳位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_magnet_tower_base', description: '回到磁塔基座' },
      { direction: 'north', targetRoomId: 'machine_graveyard_piston_shrine', description: '活塞祠在北側' },
    ],
    monsters: [
      { monsterId: 'machine_magnet_tower_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'machine_battery_catacomb_mourner', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[核]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '核心甦醒廳的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '核心甦醒廳的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '核心甦醒廳殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_wireweed_garden: {
    id: 'machine_graveyard_wireweed_garden',
    name: '線草園',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_wireweed_garden.png',
    imagePrompt: '線草園 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '線草園位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'south', targetRoomId: 'machine_graveyard_oil_black_cistern', description: '回到黑油蓄池' },
      { direction: 'east', targetRoomId: 'machine_graveyard_battery_catacomb', description: '電池墓窖在東側' },
    ],
    monsters: [
      { monsterId: 'machine_wireweed_crawler', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'machine_sparking_rail_runner', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[草]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '線草園的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '線草園的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '線草園殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_battery_catacomb: {
    id: 'machine_graveyard_battery_catacomb',
    name: '電池墓窖',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_battery_catacomb.png',
    imagePrompt: '電池墓窖 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '電池墓窖位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_wireweed_garden', description: '回到線草園' },
      { direction: 'south', targetRoomId: 'machine_graveyard_clockwork_nest', description: '回到鐘械巢' },
      { direction: 'east', targetRoomId: 'machine_graveyard_servo_bone_yard', description: '伺服骨場在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_signal_dish', description: '訊號碟在北側' },
    ],
    monsters: [
      { monsterId: 'machine_battery_catacomb_mourner', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'machine_wireweed_crawler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '電池墓窖的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '電池墓窖的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '電池墓窖殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_servo_bone_yard: {
    id: 'machine_graveyard_servo_bone_yard',
    name: '伺服骨場',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_servo_bone_yard.png',
    imagePrompt: '伺服骨場 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '伺服骨場位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_battery_catacomb', description: '回到電池墓窖' },
      { direction: 'south', targetRoomId: 'machine_graveyard_magnet_tower_base', description: '回到磁塔基座' },
      { direction: 'east', targetRoomId: 'machine_graveyard_piston_shrine', description: '活塞祠在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_deep_bore_lift', description: '深鑽升降井在北側' },
    ],
    monsters: [
      { monsterId: 'machine_runaway_guard_unit', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'machine_scrap_claw_drone', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[伺]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '伺服骨場的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '伺服骨場的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '伺服骨場殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_piston_shrine: {
    id: 'machine_graveyard_piston_shrine',
    name: '活塞祠',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_piston_shrine.png',
    imagePrompt: '活塞祠 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '活塞祠位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_servo_bone_yard', description: '回到伺服骨場' },
      { direction: 'south', targetRoomId: 'machine_graveyard_core_wake_hall', description: '回到核心甦醒廳' },
      { direction: 'north', targetRoomId: 'machine_graveyard_ancient_cpu_vault', description: '古算核庫在北側' },
    ],
    monsters: [
      { monsterId: 'machine_foundry_automaton', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'machine_magnet_tower_sentinel', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[祠]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '活塞祠的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '活塞祠的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '活塞祠殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_signal_dish: {
    id: 'machine_graveyard_signal_dish',
    name: '訊號碟',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_signal_dish.png',
    imagePrompt: '訊號碟 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '訊號碟位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'south', targetRoomId: 'machine_graveyard_battery_catacomb', description: '回到電池墓窖' },
      { direction: 'east', targetRoomId: 'machine_graveyard_deep_bore_lift', description: '深鑽升降井在東側' },
    ],
    monsters: [
      { monsterId: 'machine_sparking_rail_runner', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'machine_ancient_cpu_judge', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[訊]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '訊號碟的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '訊號碟的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '訊號碟殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_deep_bore_lift: {
    id: 'machine_graveyard_deep_bore_lift',
    name: '深鑽升降井',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_deep_bore_lift.png',
    imagePrompt: '深鑽升降井 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '深鑽升降井位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_signal_dish', description: '回到訊號碟' },
      { direction: 'south', targetRoomId: 'machine_graveyard_servo_bone_yard', description: '回到伺服骨場' },
      { direction: 'east', targetRoomId: 'machine_graveyard_ancient_cpu_vault', description: '古算核庫在東側' },
    ],
    monsters: [
      { monsterId: 'machine_magnet_tower_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'machine_ancient_cpu_judge', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '深鑽升降井的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '深鑽升降井的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '深鑽升降井殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_ancient_cpu_vault: {
    id: 'machine_graveyard_ancient_cpu_vault',
    name: '古算核庫',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_ancient_cpu_vault.png',
    imagePrompt: '古算核庫 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '古算核庫位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_deep_bore_lift', description: '回到深鑽升降井' },
      { direction: 'south', targetRoomId: 'machine_graveyard_piston_shrine', description: '回到活塞祠' },
      { direction: 'east', targetRoomId: 'machine_graveyard_runaway_guard_line', description: '失控守衛列在東側' },
    ],
    monsters: [
      { monsterId: 'machine_ancient_cpu_judge', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'machine_battery_catacomb_mourner', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[庫]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '古算核庫的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '古算核庫的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '古算核庫殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_runaway_guard_line: {
    id: 'machine_graveyard_runaway_guard_line',
    name: '失控守衛列',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_runaway_guard_line.png',
    imagePrompt: '失控守衛列 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '失控守衛列位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_ancient_cpu_vault', description: '回到古算核庫' },
      { direction: 'east', targetRoomId: 'machine_graveyard_prime_reactor_shell', description: '主反應殼在東側' },
    ],
    monsters: [
      { monsterId: 'machine_runaway_guard_unit', maxCount: 2, respawnSeconds: 560 },
      { monsterId: 'machine_ancient_cpu_judge', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[衛]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '失控守衛列的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '失控守衛列的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '失控守衛列殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_prime_reactor_shell: {
    id: 'machine_graveyard_prime_reactor_shell',
    name: '主反應殼',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_prime_reactor_shell.png',
    imagePrompt: '主反應殼 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '主反應殼位於古代機械殘骸堆成山脈的機械墳場內，斷裂吊臂、鏽轉閘、火花軌、黑油蓄池與半醒核心把地下採集區變成危險迷宮。這裡是高階採礦與隊伍探索區，旅人可以 觀察 齒輪磨痕、電池銘牌、磁塔偏角和訊號碟雜訊來判斷機械甦醒程度，也能 search 銅脈棚、線草園、古算核庫與主反應殼尋找稀有零件、導電礦與失落藍圖。若隊伍貪採黑油、誤觸活塞祠或忽略失控守衛列的紅燈，惡魔傭兵、龍騎士、古龍與被喚醒的深層巡邏會封住升降井；若穩定沿標記纜線、深鑽升降井與核心甦醒廳推進，則能帶回完整機械樣本、採集路線、反應殼讀數與安全撤離座標',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_runaway_guard_line', description: '回到失控守衛列' },
    ],
    monsters: [
      { monsterId: 'machine_prime_reactor_warden', maxCount: 1, respawnSeconds: 1400 },
      { monsterId: 'machine_runaway_guard_unit', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'machine_ancient_cpu_judge', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[反]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '主反應殼的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '主反應殼的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '主反應殼殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

// ─── 血鹽海岸擴充 (Lv 32-44) ───────────────────────────

  bloodsalt_coast_entrance_tidegate: {
    id: 'bloodsalt_coast_entrance_tidegate',
    name: '潮門入口',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_entrance_tidegate.png',
    imagePrompt: '潮門入口 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain coast, clear lantern light',
    description:
      '潮門入口位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'east', targetRoomId: 'bloodsalt_coast_red_salt_flats', description: '紅鹽灘在東側' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_fill_40_7', description: '南側赤色海崖通往鹵蝕小徑' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '潮門入口的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '潮門入口的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '潮門入口殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_red_salt_flats: {
    id: 'bloodsalt_coast_red_salt_flats',
    name: '紅鹽灘',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_red_salt_flats.png',
    imagePrompt: '紅鹽灘 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '紅鹽灘位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_entrance_tidegate', description: '回到潮門入口' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_wreckers_marker', description: '拾荒者標記在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '骨網淺灘在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'bloodsalt_razor_clam_colony', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[鹽]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '紅鹽灘的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '紅鹽灘的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '紅鹽灘殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_wreckers_marker: {
    id: 'bloodsalt_coast_wreckers_marker',
    name: '拾荒者標記',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_wreckers_marker.png',
    imagePrompt: '拾荒者標記 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '拾荒者標記位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_red_salt_flats', description: '回到紅鹽灘' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '海盜烽燈在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 2, respawnSeconds: 300 },
    ],
    mapSymbol: '[標]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '拾荒者標記的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '拾荒者標記的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '拾荒者標記殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_bone_net_shoal: {
    id: 'bloodsalt_coast_bone_net_shoal',
    name: '骨網淺灘',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_bone_net_shoal.png',
    imagePrompt: '骨網淺灘 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '骨網淺灘位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_red_salt_flats', description: '回到紅鹽灘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '海盜烽燈在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '北側骨網淺灘沿魚骨浮網斜上，穿過鹽晶潮溝與碎玻潮洞抵達鹽玻洞', edgeKind: 'distant_route', edgeNote: '骨網淺灘到鹽玻洞需沿魚骨浮網與鹽晶潮溝斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'bloodsalt_razor_clam_colony', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[網]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '骨網淺灘的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '骨網淺灘的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '骨網淺灘殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_pirate_beacon: {
    id: 'bloodsalt_coast_pirate_beacon',
    name: '海盜烽燈',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_pirate_beacon.png',
    imagePrompt: '海盜烽燈 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '海盜烽燈位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表。烽燈南側崖壁有一條被鹽晶侵蝕的窄梯向下延伸，陰冷氣息與腐朽味從深處湧上，似乎通往海岸下方古老的墓穴地帶',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '回到骨網淺灘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_wreckers_marker', description: '回到拾荒者標記', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_crimson_tide_pool', description: '赤潮池在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '北側海盜烽燈沿濕滑礁階上行，繞過斷旗繩索與礁釣木樁抵達礁釣哨', edgeKind: 'distant_route', edgeNote: '海盜烽燈到礁釣哨需沿濕滑礁階與斷旗繩索上行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_warflag_privateer', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[烽]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '海盜烽燈的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '海盜烽燈的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '海盜烽燈殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_crimson_tide_pool: {
    id: 'bloodsalt_coast_crimson_tide_pool',
    name: '赤潮池',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_crimson_tide_pool.png',
    imagePrompt: '赤潮池 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '赤潮池位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '回到海盜烽燈' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '北側赤潮池沿紅潮石脊攀升，穿過祭血水槽與珊瑚裂階抵達血壇岩棚', edgeKind: 'distant_route', edgeNote: '赤潮池到血壇岩棚需沿紅潮石脊與祭血水槽攀升，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_crimson_tide_oracle', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[潮]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '赤潮池的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '赤潮池的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '赤潮池殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_brine_cut_path: {
    id: 'bloodsalt_coast_brine_cut_path',
    name: '鹵蝕小徑',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_brine_cut_path.png',
    imagePrompt: '鹵蝕小徑 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '鹵蝕小徑位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'north', targetRoomId: 'bloodsalt_coast_fill_40_7', description: '北側赤色海崖回到潮門入口' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '東側鹵蝕小徑沿鹽風切溝橫移，穿過白鹵水洼與碎玻潮洞抵達鹽玻洞', edgeKind: 'distant_route', edgeNote: '鹵蝕小徑到鹽玻洞需沿鹽風切溝與白鹵水洼橫移，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[鹵]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '鹵蝕小徑的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '鹵蝕小徑的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '鹵蝕小徑殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_saltglass_cave: {
    id: 'bloodsalt_coast_saltglass_cave',
    name: '鹽玻洞',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_saltglass_cave.png',
    imagePrompt: '鹽玻洞 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '鹽玻洞位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_brine_cut_path', description: '西側鹽玻洞沿碎玻潮洞折返，穿過白鹵水洼與鹽風切溝回到鹵蝕小徑', edgeKind: 'distant_route', edgeNote: '鹽玻洞回鹵蝕小徑需沿碎玻潮洞與鹽風切溝折返，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '南側鹽玻洞沿碎玻潮洞下切，穿過鹽晶潮溝與魚骨浮網回到骨網淺灘', edgeKind: 'distant_route', edgeNote: '鹽玻洞回骨網淺灘需沿碎玻潮洞與魚骨浮網下切，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '礁釣哨在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_drowned_watchtower', description: '沉水望塔在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_ghost_keel_wraith', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[洞]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '鹽玻洞的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '鹽玻洞的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '鹽玻洞殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_reef_fishing_post: {
    id: 'bloodsalt_coast_reef_fishing_post',
    name: '礁釣哨',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_reef_fishing_post.png',
    imagePrompt: '礁釣哨 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '礁釣哨位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '回到鹽玻洞', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '南側礁釣哨沿礁釣木樁下行，穿過斷旗繩索與濕滑礁階回到海盜烽燈', edgeKind: 'distant_route', edgeNote: '礁釣哨回海盜烽燈需沿礁釣木樁與濕滑礁階下行，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '血壇岩棚在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '刃貝床在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'bloodsalt_razor_clam_colony', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[釣]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '礁釣哨的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '礁釣哨的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '礁釣哨殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_blood_altar_ledge: {
    id: 'bloodsalt_coast_blood_altar_ledge',
    name: '血壇岩棚',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_blood_altar_ledge.png',
    imagePrompt: '血壇岩棚 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '血壇岩棚位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上；奧瑟冥河守門者的亡者安息刻文壓在祭壇血槽邊。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '回到礁釣哨' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_crimson_tide_pool', description: '南側血壇岩棚沿珊瑚裂階下切，穿過祭血水槽與紅潮石脊回到赤潮池', edgeKind: 'distant_route', edgeNote: '血壇岩棚回赤潮池需沿珊瑚裂階與紅潮石脊下切，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_smuggler_cove', description: '走私者小灣在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '鯊齒隘在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_crimson_tide_oracle', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'bloodsalt_warflag_privateer', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[壇]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '血壇岩棚的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '血壇岩棚的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '血壇岩棚殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_smuggler_cove: {
    id: 'bloodsalt_coast_smuggler_cove',
    name: '走私者小灣',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_smuggler_cove.png',
    imagePrompt: '走私者小灣 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '走私者小灣位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '回到血壇岩棚' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '冰暗湧道在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[灣]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '走私者小灣的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '走私者小灣的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '走私者小灣殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_drowned_watchtower: {
    id: 'bloodsalt_coast_drowned_watchtower',
    name: '沉水望塔',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_drowned_watchtower.png',
    imagePrompt: '沉水望塔 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '沉水望塔位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '回到鹽玻洞', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '刃貝床在東側' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_ghost_keel_wraith', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'bloodsalt_crimson_tide_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[塔]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '沉水望塔的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '沉水望塔的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '沉水望塔殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_razor_clam_beds: {
    id: 'bloodsalt_coast_razor_clam_beds',
    name: '刃貝床',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_razor_clam_beds.png',
    imagePrompt: '刃貝床 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '刃貝床位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_drowned_watchtower', description: '回到沉水望塔' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '回到礁釣哨', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '鯊齒隘在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_warflag_dune', description: '戰旗沙丘在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_razor_clam_colony', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'bloodsalt_bone_net_murloc', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[貝]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '刃貝床的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '刃貝床的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '刃貝床殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_sharktooth_pass: {
    id: 'bloodsalt_coast_sharktooth_pass',
    name: '鯊齒隘',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_sharktooth_pass.png',
    imagePrompt: '鯊齒隘 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '鯊齒隘位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '回到刃貝床' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '回到血壇岩棚', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '冰暗湧道在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_ghost_keel_grave', description: '幽艏船墓在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_warflag_privateer', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'bloodsalt_red_salt_reaver', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[齒]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '鯊齒隘的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '鯊齒隘的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '鯊齒隘殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_ice_dark_surge: {
    id: 'bloodsalt_coast_ice_dark_surge',
    name: '冰暗湧道',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_ice_dark_surge.png',
    imagePrompt: '冰暗湧道 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '冰暗湧道位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '回到鯊齒隘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_smuggler_cove', description: '回到走私者小灣', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_red_coral_labyrinth', description: '紅珊瑚迷宮在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_ghost_keel_wraith', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'bloodsalt_crimson_tide_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[湧]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '冰暗湧道的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '冰暗湧道的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '冰暗湧道殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_warflag_dune: {
    id: 'bloodsalt_coast_warflag_dune',
    name: '戰旗沙丘',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_warflag_dune.png',
    imagePrompt: '戰旗沙丘 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '戰旗沙丘位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '回到刃貝床', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_ghost_keel_grave', description: '幽艏船墓在東側' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_warflag_privateer', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[旗]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '戰旗沙丘的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '戰旗沙丘的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '戰旗沙丘殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_ghost_keel_grave: {
    id: 'bloodsalt_coast_ghost_keel_grave',
    name: '幽艏船墓',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_ghost_keel_grave.png',
    imagePrompt: '幽艏船墓 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '幽艏船墓位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_warflag_dune', description: '回到戰旗沙丘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '回到鯊齒隘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_red_coral_labyrinth', description: '紅珊瑚迷宮在東側' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_ghost_keel_wraith', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'bloodsalt_smuggler_cutthroat', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[船]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '幽艏船墓的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '幽艏船墓的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '幽艏船墓殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_red_coral_labyrinth: {
    id: 'bloodsalt_coast_red_coral_labyrinth',
    name: '紅珊瑚迷宮',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_red_coral_labyrinth.png',
    imagePrompt: '紅珊瑚迷宮 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '紅珊瑚迷宮位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_ghost_keel_grave', description: '回到幽艏船墓' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '回到冰暗湧道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_tithe_of_blood_pier', description: '血稅棧橋在東側' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_red_coral_hydra', maxCount: 1, respawnSeconds: 640 },
      { monsterId: 'bloodsalt_razor_clam_colony', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[珊]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '紅珊瑚迷宮的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '紅珊瑚迷宮的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '紅珊瑚迷宮殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_tithe_of_blood_pier: {
    id: 'bloodsalt_coast_tithe_of_blood_pier',
    name: '血稅棧橋',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_tithe_of_blood_pier.png',
    imagePrompt: '血稅棧橋 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '血稅棧橋位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_red_coral_labyrinth', description: '回到紅珊瑚迷宮' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_ritual_reef_core', description: '儀式礁心在東側' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_warflag_privateer', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'bloodsalt_crimson_tide_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[棧]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '血稅棧橋的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '血稅棧橋的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '血稅棧橋殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

bloodsalt_coast_ritual_reef_core: {
    id: 'bloodsalt_coast_ritual_reef_core',
    name: '儀式礁心',
    zone: 'bloodsalt_coast' as RoomDef['zone'],
    image: 'bloodsalt_coast_ritual_reef_core.png',
    imagePrompt: '儀式礁心 in bloodsalt_coast, red blood salt coast with crimson tide, salt crystal flats, pirate beacon, bone nets, reef altar, wrecked ships and icy dark surf, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain coast, clear lantern light',
    description:
      '儀式礁心位於被紅色海潮染透的血鹽海岸，鹽晶灘、骨網淺灘、海盜烽燈、血壇岩棚與紅珊瑚迷宮把漁獲、資源戰和開放衝突綁在同一條潮線上。這裡適合隊伍爭奪釣點、鹽晶與走私補給，旅人可以 觀察 潮痕、戰旗、骨網結扣和祭壇血槽來判斷敵對旅人與巡邏路線，也能 search 鹽玻洞、刃貝床、幽艏船墓與血稅棧橋尋找罕見魚骨、冷鹽晶和海盜密貨。若隊伍忽略赤潮升落、鯊齒隘伏擊與月黑時的血祭號角，惡魔盟友、龍騎士、飛龍與海岸掠奪者會切斷退路；若穩定沿潮門入口、戰旗沙丘與儀式礁心推進，則能帶回資源戰記錄、釣點標記、血鹽樣本與安全撤離潮汐表',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_tithe_of_blood_pier', description: '回到血稅棧橋' },
    ],
    monsters: [
      { monsterId: 'bloodsalt_ritual_reef_hierophant', maxCount: 1, respawnSeconds: 1400 },
      { monsterId: 'bloodsalt_red_coral_hydra', maxCount: 1, respawnSeconds: 640 },
      { monsterId: 'bloodsalt_ghost_keel_wraith', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[礁]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '儀式礁心的赤潮若突然倒灌，附近掠奪者、海祭巡邏或敵對隊伍可能正在靠近。',
      treasure: '儀式礁心的鹽晶縫、骨網節、沉船艙板或紅珊瑚根部可能藏著血鹽海岸資源。',
      spirit: '儀式礁心殘留海盜分贓、資源戰衝突與血祭儀式完成前的潮聲記憶。',
    },
  },

// ─── 翡翠樹冠擴充 (Lv 25-37) ───────────────────────────

  emerald_canopy_entrance_root_lift: {
    id: 'emerald_canopy_entrance_root_lift',
    name: '根升入口',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_entrance_root_lift.png',
    imagePrompt: '根升入口 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain forest, clear lantern light',
    description:
      '根升入口位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'east', targetRoomId: 'emerald_canopy_vine_bridge_low', description: '低藤橋在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_vine_scout', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[升]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '根升入口的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '根升入口的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '根升入口殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_vine_bridge_low: {
    id: 'emerald_canopy_vine_bridge_low',
    name: '低藤橋',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_vine_bridge_low.png',
    imagePrompt: '低藤橋 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '低藤橋位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'south', targetRoomId: 'emerald_canopy_raincatch_basin', description: '接雨盆地在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_entrance_root_lift', description: '根升入口在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_moss_rope_walk', description: '苔繩步道在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_vine_scout', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[藤]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '低藤橋的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '低藤橋的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '低藤橋殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_moss_rope_walk: {
    id: 'emerald_canopy_moss_rope_walk',
    name: '苔繩步道',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_moss_rope_walk.png',
    imagePrompt: '苔繩步道 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '苔繩步道位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'south', targetRoomId: 'emerald_canopy_birdfolk_roost', description: '鳥巢村臺在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_vine_bridge_low', description: '低藤橋在西側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_vine_scout', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[繩]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '苔繩步道的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '苔繩步道的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '苔繩步道殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_raincatch_basin: {
    id: 'emerald_canopy_raincatch_basin',
    name: '接雨盆地',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_raincatch_basin.png',
    imagePrompt: '接雨盆地 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '接雨盆地位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_vine_bridge_low', description: '低藤橋在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_orchid_cache', description: '蘭花藏層在南側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_birdfolk_roost', description: '鳥巢村臺在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[雨]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '接雨盆地的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '接雨盆地的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '接雨盆地殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_birdfolk_roost: {
    id: 'emerald_canopy_birdfolk_roost',
    name: '鳥巢村臺',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_birdfolk_roost.png',
    imagePrompt: '鳥巢村臺 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '鳥巢村臺位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_moss_rope_walk', description: '苔繩步道在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_sapfall_gully', description: '樹脂瀑溝在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_raincatch_basin', description: '接雨盆地在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_storm_bough', description: '雷枝臺在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[巢]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '鳥巢村臺的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '鳥巢村臺的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '鳥巢村臺殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_storm_bough: {
    id: 'emerald_canopy_storm_bough',
    name: '雷枝臺',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_storm_bough.png',
    imagePrompt: '雷枝臺 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '雷枝臺位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'south', targetRoomId: 'emerald_canopy_hawk_watch', description: '鷹望臺在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_birdfolk_roost', description: '鳥巢村臺在西側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[雷]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '雷枝臺的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '雷枝臺的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '雷枝臺殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_firefly_bower: {
    id: 'emerald_canopy_firefly_bower',
    name: '螢光涼亭',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_firefly_bower.png',
    imagePrompt: '螢光涼亭 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '螢光涼亭位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'east', targetRoomId: 'emerald_canopy_orchid_cache', description: '蘭花藏層在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_vine_scout', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'emerald_canopy_ancient_bee_swarm', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[螢]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '螢光涼亭的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '螢光涼亭的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '螢光涼亭殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_orchid_cache: {
    id: 'emerald_canopy_orchid_cache',
    name: '蘭花藏層',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_orchid_cache.png',
    imagePrompt: '蘭花藏層 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain forest, clear lantern light',
    description:
      '蘭花藏層位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_raincatch_basin', description: '接雨盆地在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_thorn_silk_nest', description: '棘絲巢在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_firefly_bower', description: '螢光涼亭在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_sapfall_gully', description: '樹脂瀑溝在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[蘭]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '蘭花藏層的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '蘭花藏層的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '蘭花藏層殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_sapfall_gully: {
    id: 'emerald_canopy_sapfall_gully',
    name: '樹脂瀑溝',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_sapfall_gully.png',
    imagePrompt: '樹脂瀑溝 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '樹脂瀑溝位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_birdfolk_roost', description: '鳥巢村臺在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_sunleaf_garden', description: '日葉園在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_orchid_cache', description: '蘭花藏層在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_hawk_watch', description: '鷹望臺在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'emerald_canopy_vine_scout', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[脂]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '樹脂瀑溝的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '樹脂瀑溝的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '樹脂瀑溝殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_hawk_watch: {
    id: 'emerald_canopy_hawk_watch',
    name: '鷹望臺',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_hawk_watch.png',
    imagePrompt: '鷹望臺 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '鷹望臺位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_storm_bough', description: '雷枝臺在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_elite_patrol_perch', description: '精英巡梢棲木在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_sapfall_gully', description: '樹脂瀑溝在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_greenheart_span', description: '綠心跨枝在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_thunder_hawk', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[鷹]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '鷹望臺的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '鷹望臺的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '鷹望臺殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_greenheart_span: {
    id: 'emerald_canopy_greenheart_span',
    name: '綠心跨枝',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_greenheart_span.png',
    imagePrompt: '綠心跨枝 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '綠心跨枝位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'south', targetRoomId: 'emerald_canopy_lightning_bark_shrine', description: '雷皮小祠在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_hawk_watch', description: '鷹望臺在西側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_glasswing_stag', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[心]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '綠心跨枝的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '綠心跨枝的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '綠心跨枝殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_thorn_silk_nest: {
    id: 'emerald_canopy_thorn_silk_nest',
    name: '棘絲巢',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_thorn_silk_nest.png',
    imagePrompt: '棘絲巢 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '棘絲巢位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_orchid_cache', description: '蘭花藏層在北側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_sunleaf_garden', description: '日葉園在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_ancient_bee_swarm', maxCount: 3, respawnSeconds: 260 },
    ],
    mapSymbol: '[絲]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '棘絲巢的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '棘絲巢的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '棘絲巢殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_sunleaf_garden: {
    id: 'emerald_canopy_sunleaf_garden',
    name: '日葉園',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_sunleaf_garden.png',
    imagePrompt: '日葉園 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '日葉園位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_sapfall_gully', description: '樹脂瀑溝在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_hollow_trunk_market', description: '空樹市集在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_thorn_silk_nest', description: '棘絲巢在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_elite_patrol_perch', description: '精英巡梢棲木在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_glasswing_stag', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'emerald_canopy_sapfall_treant', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[葉]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '日葉園的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '日葉園的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '日葉園殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },

emerald_canopy_elite_patrol_perch: {
    id: 'emerald_canopy_elite_patrol_perch',
    name: '精英巡梢棲木',
    zone: 'emerald_canopy' as RoomDef['zone'],
    image: 'emerald_canopy_elite_patrol_perch.png',
    imagePrompt: '精英巡梢棲木 in emerald_canopy, high ancient forest canopy with vine bridges, bird roost platforms, rain basins, storm branches, glowing orchids and suspended paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '精英巡梢棲木位於高聳古木交疊成海的翡翠樹冠上，根升藤梯、低藤橋、接雨盆地、鳥巢村臺與雷枝臺把半空森林分成多層路線。這裡是採集、隊伍探索與精英巡梢區，旅人可以 觀察 藤結磨損、雷皮焦痕、鳥巢羽標和樹脂流向來判斷安全落腳點，也能 search 蘭花藏層、日葉園、古蜂巢與空樹市集尋找藥材、蜜蠟、輕木與樹冠信物。若隊伍忽略暴雨重量、棘絲巢拉扯與巡梢棲木上的號角，樹人、雷鳥、暗影獵手與高階野獸會把藤橋切斷；若穩定沿根升入口、雲根橋與鹿冠空地推進，則能抵達高綠庭並帶回樹冠採集路線、精英巡邏記錄與安全下降標記',
    exits: [
      { direction: 'north', targetRoomId: 'emerald_canopy_hawk_watch', description: '鷹望臺在北側' },
      { direction: 'south', targetRoomId: 'emerald_canopy_ancient_bee_hive', description: '古蜂巢在南側' },
      { direction: 'west', targetRoomId: 'emerald_canopy_sunleaf_garden', description: '日葉園在西側' },
      { direction: 'east', targetRoomId: 'emerald_canopy_lightning_bark_shrine', description: '雷皮小祠在東側' },
    ],
    monsters: [
      { monsterId: 'emerald_canopy_birdfolk_guard', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'emerald_canopy_lightning_bark_shaman', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[巡]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '精英巡梢棲木的藤橋若突然繃緊，附近精英巡梢、雷鳥或樹冠獵手可能正在移動。',
      treasure: '精英巡梢棲木的蘭花根、蜂巢蠟層、樹脂瀑或鳥巢羽標旁可能藏著翡翠樹冠材料。',
      spirit: '精英巡梢棲木殘留鳥巢村遷徙、暴雨斷橋與採集隊在高處迷路的記憶。',
    },
  },
};
