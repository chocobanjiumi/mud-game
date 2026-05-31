import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_024: Record<string, RoomDef> = {
machine_graveyard_core_wake_hall: {
    id: 'machine_graveyard_core_wake_hall',
    name: '核心甦醒廳',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_core_wake_hall.png',
    imagePrompt: '核心甦醒廳 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '核心甦醒廳深藏在磁塔基座東面，拱形大廳被藍色脈衝照得忽明忽暗，地板下有巨物緩慢翻身般的震動。西側能回到磁塔基座，北面活塞祠的機械禱聲順著管道傳來。廳中央懸著半透明反應球，外殼裂縫中閃過成排古老指令符號；周圍控制台多已熔毀，只有幾枚紅燈仍按固定節奏亮起，像地下核心正在從漫長報廢狀態中重新記起自己的名字。',
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
      '線草園長在黑油蓄池北側，成束細纜從地面冒出，頂端結著銀色小燈，遠看像一片會發光的枯草。南面油池的黑光在纜絲間反射，東側電池墓窖的冷白電壓沿根部跳動。園中散落舊維修牌、陶瓷絕緣環與被線束纏死的機械鳥，風一吹，所有纜草便同時偏向同一方向，彷彿正在接收來自訊號碟或更深核心的無聲命令。',
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
      '電池墓窖像一座倒置陵園，牆面鑲滿圓筒電池與方形能量棺，許多棺蓋鼓起並滲出藍白霜光。西面線草園的纜根鑽入石縫，南側鐘械巢有發條聲回盪，東方伺服骨場堆著殘肢，北面訊號碟投下細碎雜訊。窖道地面刻著充放電標線，幾座舊供電柱還在微微發熱；每當遠處核心震動，牆上電池便像沉睡士兵般依次亮起。',
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
      '伺服骨場堆滿機械臂、膝軸、脊索與被拆開的動力骨架，白陶裝甲片在冷光裡像乾骨。西側電池墓窖供應殘餘電壓，南面磁塔基座牽動鐵屑，東方活塞祠傳來沉重節拍，北側深鑽升降井垂下粗纜。骨場中央有幾具半組裝守衛跪在地上，胸腔空洞朝向同一方向，彷彿在等待古算核庫重新分配意志，周圍還散著細小校準片。',
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
      '活塞祠由四根巨大活塞柱撐起，柱身刻著磨損祈詞與維修刻度，每次上下推動都帶起像鐘聲般的低鳴。西面伺服骨場散著機械骨骸，南側核心甦醒廳透出藍色脈衝，北方古算核庫的晶片光從管線深處浮現。祭台上不是香火，而是油杯、銅線與排列整齊的螺栓；地面震動穩定得近乎虔誠，讓工業殘骸在這裡呈現出某種冷硬的宗教感。',
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
      '訊號碟立在電池墓窖北側的開闊平台上，巨大碟面破了三道裂口，仍固執地朝向沒有星光的上空。南面階梯降回電池墓窖，東側深鑽升降井的鐵架從霧裡升起。平台四周插著折斷天線，空氣裡飄滿斷續雜訊與細小藍火，偶爾會在碟面拼出不完整的座標。那些訊號不像求救，更像機械墳場仍向某個失落工廠回報自己的存活狀態。',
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
      '深鑽升降井是一口貫穿多層廢土的垂直鐵井，井壁掛滿鑽頭痕、警示燈與被磨斷的升降纜。西側訊號碟的雜訊沿著鐵架傳來，南面伺服骨場堆著機械肢骨，東方古算核庫露出封閉金門。井底深處有冷風往上湧，帶著濕礦味與遠方齒輪聲；升降台停在半空，控制杆被一隻斷裂機械手緊握，像最後一次下探從未完成。',
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
      '古算核庫被厚重金門封在深鑽升降井東側，牆面排列著黑曜晶片與銅質散熱翼，微光沿著線路一格格醒來。西面可回深鑽升降井，南側管道連向活塞祠，東方失控守衛列的紅燈透過防爆窗閃爍。庫中央懸著一枚龜裂演算核心，周圍散落寫滿未知算式的金屬薄片；每次脈衝亮起，附近報廢零件都會微微抬頭，像在等待某道舊命令再次發布。',
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
      '失控守衛列是一條狹長檢修廊，兩側停著成排守衛機殼，胸口紅燈以不一致的節奏閃爍，像多個壞掉心跳互相干擾。西面古算核庫仍有演算光流動，東側主反應殼的厚門在熱霧中若隱若現。地面布滿拖行刮痕與被打碎的控制面板，頂部軌道懸著空彈匣和斷裂夾臂；每具守衛都面向通道中央，使這裡像一場永不解除的最後檢閱。',
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
      '主反應殼位於機械墳場最深東端，外層裝甲像巨獸肋骨般張開，內部反應爐只剩一團緩慢旋轉的藍白核心。西側唯一通路退回失控守衛列，厚重門框上全是高溫熔痕與警戒符號。殼體周圍散落冷卻管、破裂壓力錶與被燒成玻璃的工具，地面則浮著薄薄磁霧。每一次核心閃光都會照亮整座腔室，讓人明白前方不是寶庫，而是仍可能重新啟動整片墳場的心臟。',
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
      '潮門入口立在血鹽海岸西端，兩座被紅鹽殼包住的石柱夾著霧港來路，門下潮溝不斷湧入帶血色的鹹水。東面鹽灘泛著乾裂紅光，可通往紅鹽灘；南側赤色海崖有鏽木棧道下切，接向潮門南赤崖棧道。門柱繩標上掛著魚骨、破旗與潮汐刻痕，地面混著鹽晶碎片和濕腳印，說明這裡既是進入海岸的門檻，也是判斷赤潮漲落與回程方向的第一個地標。',
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
      '紅鹽灘是一大片乾裂鹽殼，血色潮水退去後留下深紅晶格，踩上去會發出像玻璃碎裂的細響。西側可回潮門入口，東面拾荒者標記插在破船木堆旁，北方骨網淺灘隔著一段潮溝與魚骨浮網若隱若現。鹽面上散著刃貝殼、舊拖網和海盜靴印，幾處晶縫仍滲出冷鹹水；紅色平灘看似空曠，實際每一道潮痕都在標出巡邏、採鹽與伏擊曾經經過的位置。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_entrance_tidegate', description: '回到潮門入口' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_wreckers_marker', description: '拾荒者標記在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '骨網淺灘在北側' },
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
      '拾荒者標記由半截船桅、破燈籠和紅鹽繩結綁成，歪斜插在紅鹽灘東側的殘骸堆前。西邊鹽殼路退回紅鹽灘，北側長路沿濕滑礁階與斷旗影子通向海盜烽燈。標記周圍散落拆下的銅釘、刮乾的魚骨網和被潮水泡爛的貨箱牌，木桅上刻著分贓符號與警戒缺口；這裡不像營地，更像海岸拾荒者用來辨認潮線、沉船位置和安全撤離時機的粗糙記號。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_red_salt_flats', description: '回到紅鹽灘' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '海盜烽燈在北側' },
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
      '骨網淺灘的水位只到膝下，卻鋪滿以魚骨、繩索和鹽晶結成的白色網架，紅潮從網孔間慢慢滲過。南側魚骨浮網可繞回紅鹽灘，東面破網與旗影接向海盜烽燈，北側鹽晶潮溝斜上鹽玻洞。淺水裡有魚人火堆殘灰、刃貝殼痕和被割斷的走私繩，網結上還黏著暗紅祭血；越靠北，鹽晶越透明，顯示潮水正把這片淺灘拖向洞穴深處。',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_red_salt_flats', description: '回到紅鹽灘' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '海盜烽燈在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '北側骨網淺灘沿魚骨浮網斜上，穿過鹽晶潮溝與碎玻潮洞抵達鹽玻洞' },
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
      '海盜烽燈架在一座紅鹽礁台上，鐵籠裡燃著帶綠邊的暗火，斷旗繩索被鹽風拉得不停敲擊木桿。西面回骨網淺灘，南側長路折向拾荒者標記，東邊赤潮池發出濃重腥甜味，北側礁階可上礁釣哨。烽燈下壓著分贓刻板、鏽刀和被潮水泡黑的航圖；南側崖壁另有一條被鹽晶侵蝕的窄梯，陰冷腐味從深處湧上，暗示海岸下方仍連著更古老的墓穴。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '回到骨網淺灘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_wreckers_marker', description: '回到拾荒者標記' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_crimson_tide_pool', description: '赤潮池在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '北側海盜烽燈沿濕滑礁階上行，繞過斷旗繩索與礁釣木樁抵達礁釣哨' },
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
      '赤潮池是一口被珊瑚裂階圍住的潮潭，水色紅得近乎凝固，泡沫在池面形成一圈圈像祭文的白痕。西側可回海盜烽燈，北面紅潮石脊攀上血壇岩棚。池邊掛著破魚骨網、鹽晶祭杯和被血潮染黑的貝殼，水下偶爾閃過魚人祭司留下的骨杖影子；潮池每次鼓泡，都會把血壇方向的低鳴送回礁台，讓人分辨這裡不是普通水窪，而是整段祭路的下層回聲。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '回到海盜烽燈' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '北側赤潮池沿紅潮石脊攀升，穿過祭血水槽與珊瑚裂階抵達血壇岩棚' },
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
      '鹵蝕小徑沿紅色海崖被鹽風切出，岩面像遭刀刮過，白鹵水在裂縫裡流成細亮線。北側鏽木棧道接回潮門南赤崖棧道，東面鹽風切溝橫移至鹽玻洞。小徑邊堆著被腐蝕的魚叉、破鹽罐和深紅潮砂，腳下石面濕滑又帶刺，稍遠處能看見南側尖礁把錯路封死。這裡的方向感來自崖壁刮痕與鹽霧濃淡，而不是任何明顯路牌。',
    exits: [
      { direction: 'north', targetRoomId: 'bloodsalt_coast_fill_40_7', description: '北側赤色海崖回到潮門入口' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '東側鹵蝕小徑沿鹽風切溝橫移，穿過白鹵水洼與碎玻潮洞抵達鹽玻洞' },
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
      '鹽玻洞的洞壁結滿半透明鹽晶，紅潮光穿過晶面後變成碎裂的暗粉色，地面則覆著會割靴底的玻璃鹽片。西側碎玻潮洞折回鹵蝕小徑，南面魚骨浮網落回骨網淺灘，東邊礁釣哨的木樁影子透進洞口，北方沉水望塔在鹽霧裡像一截斷骨。洞內藏著冷鹽晶、腐繩與黑水裂縫，深處東側還滲出帶陳年腐味的水線，暗示海岸下方另有古老地下空間。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_brine_cut_path', description: '西側鹽玻洞沿碎玻潮洞折返，穿過白鹵水洼與鹽風切溝回到鹵蝕小徑' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_bone_net_shoal', description: '南側鹽玻洞沿碎玻潮洞下切，穿過鹽晶潮溝與魚骨浮網回到骨網淺灘' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '礁釣哨在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_drowned_watchtower', description: '沉水望塔在北側' },
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
      '礁釣哨建在幾根被鹽霧咬白的木樁上，吊鉤、破網和魚骨浮標隨風撞出乾硬聲響。西側長路沿鹽玻洞折返，南面濕滑礁階落向海盜烽燈，東側血壇岩棚壓著祭血水槽，北方刃貝床露出一排排刀口般的殼脊。木樁旁有切餌石、記潮刻線和冷鹽晶籃，海面偶爾冒出帶黑斑的背鰭；這裡看似釣點，實際也是俯看整條中段海岸潮線的高位哨。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '回到鹽玻洞' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_pirate_beacon', description: '南側礁釣哨沿礁釣木樁下行，穿過斷旗繩索與濕滑礁階回到海盜烽燈' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '血壇岩棚在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '刃貝床在北側' },
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
      '血壇岩棚突出在紅潮上方，珊瑚裂階、祭血水槽和黑色石壇疊成一座濕滑平台，壇邊刻著奧瑟冥河守門者的亡者安息文字。西面礁釣哨仍有木樁聲，南側石脊下切赤潮池，東邊走私者小灣藏在低霧後，北方鯊齒隘露出鋸齒礁影。岩棚上有鹽晶祭杯、乾血繩和被潮水洗亮的骨片，每一道水槽都把紅潮導向不同方向，像在替海岸分配祭品與退路。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '回到礁釣哨' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_crimson_tide_pool', description: '南側血壇岩棚沿珊瑚裂階下切，穿過祭血水槽與紅潮石脊回到赤潮池' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_smuggler_cove', description: '走私者小灣在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '鯊齒隘在北側' },
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
      '走私者小灣被兩道暗紅礁臂夾住，低霧貼著水面，幾艘小船只剩半截船腹露在鹽沫裡。西側可回血壇岩棚，北面冰暗湧道的黑潮從礁縫間推來冷氣。灣內散著油布包、破酒瓶、私印木箱和被紅鹽包住的繩梯，岩壁上還有新舊不一的暗號刻痕；這裡的危險不像祭壇那樣高聲宣告，而是藏在霧後的船影、貨箱空隙和忽然變冷的回潮聲裡。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '回到血壇岩棚' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '冰暗湧道在北側' },
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
      '沉水望塔只剩下半截石塔露出紅潮，塔腳長滿鹽晶與黑藻，斷梁像濕透的肋骨伸向海面。南側長路沿鹽霧回到鹽玻洞，東邊刃貝床的殼脊在水線上閃著冷光。塔內舊瞭望梯被潮水淹沒，牆上仍留有海盜火號、祭船方位和魚人刻痕，幾處箭孔被紅鹽堵住；站在這裡能同時感到洞穴冷光與北面戰旗沙丘的鹽風，是海岸中段最明顯的垂直地標。',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_saltglass_cave', description: '回到鹽玻洞' },
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
      '刃貝床鋪滿立起的巨大貝殼，殼緣薄得像刀，紅潮退去時會露出一排排銀白鋸齒。西側回沉水望塔，南面潮路落回礁釣哨，東邊鯊齒隘由黑礁尖牙夾出窄口，北方戰旗沙丘隔著一段潮砂高起。貝床間有被割斷的網繩、珍珠碎屑和魚人祭針，血水在殼溝裡流得很慢；這裡既是材料堆，也是天然拒馬，任何行動都會被貝殼聲放大。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_drowned_watchtower', description: '回到沉水望塔' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_reef_fishing_post', description: '回到礁釣哨' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '鯊齒隘在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_warflag_dune', description: '戰旗沙丘在北側' },
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
      '鯊齒隘由兩排尖黑礁夾成，礁尖綴著紅鹽晶，遠看像一張半開的鯊口。西面刃貝床反射冷光，南側長路下接血壇岩棚，東邊冰暗湧道送來黑色冷浪，北方幽艏船墓的斷船影在霧裡浮沉。隘口地面散著鯊齒護符、斷矛和被咬碎的木盾，潮水穿過礁縫時會發出低吼；此地形成海岸高壓路線的咽喉，四個方向的氣味與聲音都在此交錯。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '回到刃貝床' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_blood_altar_ledge', description: '回到血壇岩棚' },
      { direction: 'east', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '冰暗湧道在東側' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_ghost_keel_grave', description: '幽艏船墓在北側' },
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
      '冰暗湧道的潮水呈近黑色，邊緣卻結著薄薄冷鹽霜，浪花拍上礁壁時會冒出藍白寒氣。西側回鯊齒隘，南面長路繞回走私者小灣，北側冷潮裂縫升向紅珊瑚迷宮。湧道旁卡著幽艏船板、祭司骨飾和被冰鹽凍硬的走私布袋，水聲裡混著低沉祈禱與船殼摩擦聲；這裡像血鹽海岸的一條冷脈，把祭壇、迷宮和沉船亡魂連在一起。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '回到鯊齒隘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_smuggler_cove', description: '回到走私者小灣' },
      { direction: 'north', targetRoomId: 'bloodsalt_coast_red_coral_labyrinth', description: '紅珊瑚迷宮在北側' },
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
      '戰旗沙丘由紅鹽砂與破帆布堆成，數根斷槳插在丘頂，黑紅戰旗被鹽風扯得獵獵作響。南側潮砂長路落回刃貝床，東面幽艏船墓的船骨從霧中伸出。沙丘腳下散著私掠者彈丸、銹槍機件和被潮水洗白的號角骨，旗杆上刻著勝負記號與潮位日期；這裡不像安營地，更像海盜勢力曾經集結、宣戰和清點掠物的高處。',
    exits: [
      { direction: 'south', targetRoomId: 'bloodsalt_coast_razor_clam_beds', description: '回到刃貝床' },
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
      '幽艏船墓是一片半埋在紅鹽砂中的沉船龍骨，船艏雕像只剩空洞眼窩，潮霧穿過肋骨時會發出像哭聲的回響。西面戰旗沙丘仍有破旗聲，南側長路折回鯊齒隘，東邊紅珊瑚迷宮堵著密集珊瑚牆。船腹裡可見水手骨扣、濕航海圖和被祭血染紅的壓艙石，幾段木板帶著幽藍光；這裡既是失事船墳，也是通往東段珊瑚與儀式區前最後的亡魂標記。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_warflag_dune', description: '回到戰旗沙丘' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_sharktooth_pass', description: '回到鯊齒隘' },
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
      '紅珊瑚迷宮由血色珊瑚牆和鹽晶枝交錯長成，通道窄而鋒利，潮水在腳邊分成許多細小支流。西側回幽艏船墓，南面長路落回冰暗湧道，東側血稅棧橋的木樁穿過珊瑚縫隙可見。珊瑚表面有魚人祭紋、割裂網繩和被紅潮磨亮的貝片，深處偶爾傳來大型水獸擦過礁壁的聲音；這裡的迷路感來自相似的紅牆，也來自每一次潮水改道後留下的新血痕。',
    exits: [
      { direction: 'west', targetRoomId: 'bloodsalt_coast_ghost_keel_grave', description: '回到幽艏船墓' },
      { direction: 'south', targetRoomId: 'bloodsalt_coast_ice_dark_surge', description: '回到冰暗湧道' },
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
      '血稅棧橋伸在東段紅潮上，木樁被暗紅繩結和骨牌綁滿，橋板縫裡凝著一層厚厚鹽血。西側可回紅珊瑚迷宮，東面儀式礁心在潮霧裡露出圓形祭礁。棧橋旁停著空稅箱、斷槳和刻有船名的銅牌，每根木樁都像曾收過一次通行代價；北側礁面被紅鹽晶與碎骨網封死，讓這條橋成為通往儀式核心前唯一清楚的海上線。',
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
      '儀式礁心位於血鹽海岸最東端的圓形礁台上，紅珊瑚、黑石祭環和鹽晶骨柱圍成一座潮汐法陣，中央水孔不斷吞吐暗紅泡沫。西側血稅棧橋是唯一可辨的回路，其他方向全被深潮、礁牙與祭柱壓住。礁台上散落血鹽樣本、祭司面具和被海風磨平的船名牌，紅潮每次上湧都會讓法陣短暫發亮；整片海岸的烽燈、骨網、血壇與船墓線索，最後都在這裡收束成一個等待完成的祭儀。',
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
      '根升入口嵌在一株巨木外壁，粗根和濕藤交纏成向上的升降道，樹皮縫裡流著淡綠樹汁。東側低藤橋在霧中晃動，橋下能看見層層葉海和遠處琥珀林的暖光。入口周圍掛著鳥羽繩結、磨亮藤環與被雨水打濕的木踏板，樹根間留有舊攀爬痕和破碎藤籃；潮氣從下層森林升起，使這裡像進入高空樹冠前的第一道濕亮門檻。',
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
      '低藤橋由多股活藤編成，橋面覆著厚苔和雨珠，踩痕沿著藤脊向東西兩端延伸。西側根升入口的巨根仍貼在樹幹上，東方苔繩步道更窄更高，南面接雨盆地傳來水滴敲葉的空響。橋下雲霧緩慢流動，藤索上纏著小羽標、裂開的果殼與新生卷鬚；每陣風都讓整座橋微微下沉，露出高空道路特有的不穩與韌性。',
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
      '苔繩步道繞著兩株古樹之間的斜枝延伸，濕苔厚到覆住原本的繩股，只留下被腳步磨亮的中央線。西側低藤橋在葉影後搖晃，南面鳥巢村臺傳出羽翼和木碗碰撞聲。步道邊垂著細藤、露珠草和碎羽，樹皮上有鳥爪停棲的白痕，幾枚青果被苔根半掩；霧氣從板隙間湧上來，讓每一段看似柔軟的繩路都藏著高空深度。',
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
      '接雨盆地是一片由巨大葉盤托住的水窪，雨水沿葉脈匯入中央，水面映出上方枝網和飛鳥暗影。北側低藤橋滴下細水，南面蘭花藏層飄來花香，東方鳥巢村臺的竹木欄在葉間露出。盆地邊緣生著銀綠苔、蓄水蕨與透明小菇，葉盤下方以粗根支撐，水滴落入深處時拉出長長回音，讓整個平台既清涼又懸空。',
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
      '鳥巢村臺築在多根粗枝交會處，木板、編藤和巨大鳥巢層層搭成半圓平台。北側苔繩步道貼著樹幹升高，南面樹脂瀑溝泛著金亮流痕，西側接雨盆地帶來濕潤水氣，東面雷枝臺偶爾閃出藍白光。平台欄杆掛滿羽串、空果殼和被風磨亮的骨哨，巢下堆著細枝與乾葉，整片聚落在高空風裡發出輕微搖響。',
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
      '雷枝臺是一段伸出樹冠外緣的粗大橫枝，樹皮被雷電劈出銀白裂痕，裂縫內仍殘著微弱藍光。西側鳥巢村臺被羽欄遮住，南面鷹望臺立在較低的枝叉上。枝臺上散落燒焦葉片、裂羽和被電光烤硬的樹脂滴，空氣帶著暴雨前的金屬味；每當雲層壓低，細小電弧會沿樹皮紋路爬行，將整段高枝照得忽明忽暗。',
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
      '螢光涼亭藏在一圈垂葉與透明藤簾後，無數綠金色螢光棲在葉背，照亮濕木小亭和苔石坐臺。東側蘭花藏層散出更濃的花粉香，西面則被交疊枝葉收束成安靜陰影。亭柱上纏著夜開小花、細根和發光菌絲，地面落滿透明翅片、水珠與細小花粉，苔石邊還有淡綠孢塵；光點隨風聚散，像樹冠深處暫時凝成的一池星光。',
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
      '蘭花藏層位於交錯枝架之間，巨大蘭花從樹皮裂縫垂落，花瓣內側積著淡紫露水。北面接雨盆地的水聲順枝傳來，南側棘絲巢露出尖刺藤影，西面螢光涼亭泛著綠金微光，東方樹脂瀑溝流出甜膩香氣。花叢下有被葉片覆住的木匣、乾花束和藥草割痕，濕香混著蜂蠟味，使整層枝架顯得豐盛卻易驚動。',
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
      '樹脂瀑溝沿著裂開樹幹向下傾斜，金色樹脂從高處一串串滴落，在枝面凝成半透明階痕。北側鳥巢村臺傳來羽聲，南面日葉園被暖光照亮，西側蘭花藏層花香濃重，東方鷹望臺立在開闊枝尖。溝底堆著黏住的葉片、琥珀色蟲殼、折斷小刀和被封住的羽毛，樹脂流在陽光下忽明忽暗，甜味之下藏著黏滯的危險。',
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
      '鷹望臺立在高枝外緣，以彎曲硬木和羽骨欄杆搭成，視野越過大片翡翠葉海。北側雷枝臺有藍白電光閃動，南面精英巡梢棲木藏在較密枝葉間，西方樹脂瀑溝發出金色反光，東側綠心跨枝橫過樹冠主幹。望臺地面刻著爪印和風向槽，欄上掛著換羽留下的長翎，冷風穿過時整座平台會發出像鷹鳴般的尖聲。',
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
      '綠心跨枝是一條橫越主幹裂谷的巨大活枝，枝心透出深綠脈光，像整片樹冠的血管裸露在空中。西側鷹望臺立在風口，南面雷皮小祠的焦痕樹皮若隱若現。跨枝兩側垂著長藤與青苔，枝面有鹿蹄狀凹痕、雨水流線、新生嫩葉和細小樹脂珠，裂谷下方則是層層葉雲；站在此處能感到古木緩慢而沉重的脈動。',
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
      '棘絲巢盤踞在陰濕枝叉上，帶刺藤蔓和銀白蛛絲纏成半封閉巢團，表面黏著花粉、羽毛和枯葉。北側蘭花藏層垂下紫色花影，東面日葉園透出溫暖金光。巢邊樹皮被細絲勒出深痕，枝面散著碎殼、毒刺、乾藤葉和半透明卵殼，枝根還有黏住的青果；偶爾有絲線在霧中微微繃緊，整個枝叉像被植物和昆蟲共同占據的陷阱。',
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
      '日葉園展開在一片朝東的寬枝平台，大片金綠葉片向上翻開，將陽光反射成溫暖斑紋。北側樹脂瀑溝滴著琥珀光，南面空樹市集藏在中空樹幹裡，西側棘絲巢顯得陰冷，東方精英巡梢棲木掛著巡哨羽標。園中有高階木芽、亮葉藥草和石盆裡的薄土，葉面露珠像細小鏡片，讓整片平台明亮卻無法放鬆警戒。',
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
      '精英巡梢棲木架在四方路線交會的高枝上，硬木平臺被反覆踩磨，邊緣插著羽標和短矛。北側鷹望臺迎著風口，南面古蜂巢嗡鳴低沉，西側日葉園透來金光，東方雷皮小祠閃著焦黑電痕。棲木下方綁著警鈴果殼與繩網，枝面留有整齊巡行刻痕，周圍葉片被修剪出視線孔，使這裡成為樹冠高處最敏銳的警戒節點。',
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
