import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_019: Record<string, RoomDef> = {
ember_march_bonekiln_pass: {
    id: 'ember_march_bonekiln_pass',
    name: '骨窯隘口',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_bonekiln_pass.png',
    imagePrompt: '骨窯隘口 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '骨窯隘口夾在黑砂盆地與龍印脊之間，兩側石壁黏著白灰骨粉，窄路中央有一條被熱流烤亮的黑線。西面乾渠繞回黑砂盆地，北側骨灰階坡接向倒旗坡，東方龍印脊的爪痕在紅霧裡若隱若現。隘口深處傳出乾骨爆裂聲，地面散著燒白肋骨、破釘靴和熔灰結塊；風穿過窄口時會把骨粉推成旋流，短暫遮住前後道路。',
    exits: [
      { direction: 'east', targetRoomId: 'ember_march_dragonprint_ridge', description: '龍印脊在東側' },
    ],
    monsters: [
      { monsterId: 'bonekiln_ashguard', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'ember_crack_worm', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[窯]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '骨窯隘口的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '骨窯隘口的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '骨窯隘口殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_molten_toll: {
    id: 'ember_march_molten_toll',
    name: '熔火關卡',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_molten_toll.png',
    imagePrompt: '熔火關卡 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '熔火關卡橫在倒旗坡與邊堡外殼之間，兩座坍塌門墩仍流著暗紅熔痕，像一條被火封存的稅道。西側坡面插著殘旗，東面坍塌門洞後可見邊堡黑牆，關卡下方堆著燒紅鐵拒馬。地面有被熔渣包住的銅牌、破碎鎖鏈和重靴踩出的凹坑，熱風穿過門洞時會發出尖嘯，門墩陰影裡的火光忽明忽暗，像仍在審視往來者。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_fallen_banner', description: '回到倒旗坡' },
    ],
    monsters: [
      { monsterId: 'border_forge_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'burnt_banner_raider', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[關]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '熔火關卡的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '熔火關卡的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '熔火關卡殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_dragonprint_ridge: {
    id: 'ember_march_dragonprint_ridge',
    name: '龍印脊',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_dragonprint_ridge.png',
    imagePrompt: '龍印脊 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '龍印脊是一道被巨大爪痕壓出的焦黑山脊，三條深槽沿西東方向穿過岩面，槽底仍有暗紅熱光。西側骨窯隘口吹來骨粉煙，北面外牆缺口通向邊堡外殼，東側灰脊斷坡被紅霧吞沒。脊背上散著剝落鱗片般的玄武岩、燒裂長骨和被爪痕切斷的舊石階，風沿凹槽上衝時帶出低沉共鳴，讓整道山脊像某種龐然足跡的殘響。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_bonekiln_pass', description: '回到骨窯隘口' },
    ],
    monsters: [
      { monsterId: 'bonekiln_ashguard', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'border_forge_sentinel', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[龍]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '龍印脊的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '龍印脊的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '龍印脊殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_border_keep_shell: {
    id: 'ember_march_border_keep_shell',
    name: '邊堡外殼',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_border_keep_shell.png',
    imagePrompt: '邊堡外殼 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '邊堡外殼只剩一圈被燒空的黑石牆，牆內地面下陷，外側掛滿熔渣垂痕。西面坍塌門洞折回熔火關卡，南側缺口落向龍印脊，東方心火缺口透出最刺眼的紅光。城牆根部堆著碎盾、燒彎鉸鏈和倒塌箭窗石，牆內還有焦黑箭架與碎陶油罐；熱風在空殼裡繞行形成回音，破牆投下的影子像一座仍試圖守住邊境的空堡。',
    exits: [
      { direction: 'east', targetRoomId: 'ember_march_heartfire_breach', description: '心火缺口在東側' },
    ],
    monsters: [
      { monsterId: 'burnt_banner_raider', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'slagplate_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[堡]',
    mapX: 7,
    mapY: 1,
    guardianHints: {
      creature: '邊堡外殼的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '邊堡外殼的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '邊堡外殼殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

ember_march_heartfire_breach: {
    id: 'ember_march_heartfire_breach',
    name: '心火缺口',
    zone: 'ember_march' as RoomDef['zone'],
    image: 'ember_march_heartfire_breach.png',
    imagePrompt: '心火缺口 in ember_march, volcanic ash borderland with ember cracks, cinder roads, burned watchposts, slag bridge, war camp ruins, molten breach, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain ash, clear lantern light',
    description:
      '心火缺口位於邊堡外殼東側盡頭，地面被一道深紅裂光劈開，裂口內像有心臟般緩慢搏動。西面黑石堡牆的殘影被火光拉長，其他方向皆被熔化岩脊與噴火裂縫切斷。缺口周圍散落焦黑龍鱗、碎裂鐵盾和凝成淚滴狀的熔石，空氣厚重得難以流動；每次紅光脈動，灰塵便從牆縫和地面同時升起，讓整片邊境的熱源集中於此。',
    exits: [
      { direction: 'west', targetRoomId: 'ember_march_border_keep_shell', description: '回到邊堡外殼' },
    ],
    monsters: [
      { monsterId: 'heartfire_breach_drake', maxCount: 1, respawnSeconds: 720 },
      { monsterId: 'border_forge_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'slagplate_colossus', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[心]',
    mapX: 8,
    mapY: 1,
    guardianHints: {
      creature: '心火缺口的灰面若泛出新鮮火線，附近熔岩蟲或魔族巡隊多半正在逼近。',
      treasure: '心火缺口的灰堆、軍旗殘布或熔岩冷殼旁可能藏著餘燼邊境線索。',
      spirit: '心火缺口殘留邊境軍撤退、火山爆裂與戰營焚毀時的記憶。',
    },
  },

// ─── 白骨礁擴充 (Lv 28-40) ─────────────────────────────

  reef_of_bones_tide_gate: {
    id: 'reef_of_bones_tide_gate',
    name: '白骨潮門',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_tide_gate.png',
    imagePrompt: '白骨潮門 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '白骨潮門位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'east', targetRoomId: 'reef_of_bones_rib_shoal', description: '肋骨淺灘在東側' },
      { direction: 'north', targetRoomId: 'reef_of_bones_skull_marker', description: '骷髏航標在北側' },
    ],
    monsters: [
      { monsterId: 'rib_shoal_skeleton', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'coldtide_drowned', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '白骨潮門的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '白骨潮門的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '白骨潮門殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_rib_shoal: {
    id: 'reef_of_bones_rib_shoal',
    name: '肋骨淺灘',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_rib_shoal.png',
    imagePrompt: '肋骨淺灘 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '肋骨淺灘位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_tide_gate', description: '回到白骨潮門' },
      { direction: 'east', targetRoomId: 'reef_of_bones_wreck_bow', description: '沉船船首在東側' },
      { direction: 'north', targetRoomId: 'reef_of_bones_cold_tide_pool', description: '冷潮池在北側' },
    ],
    monsters: [
      { monsterId: 'rib_shoal_skeleton', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'coldtide_drowned', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[肋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '肋骨淺灘的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '肋骨淺灘的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '肋骨淺灘殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_wreck_bow: {
    id: 'reef_of_bones_wreck_bow',
    name: '沉船船首',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_wreck_bow.png',
    imagePrompt: '沉船船首 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '沉船船首位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_rib_shoal', description: '回到肋骨淺灘' },
      { direction: 'east', targetRoomId: 'reef_of_bones_splinter_deck', description: '裂木甲板在東側' },
      { direction: 'south', targetRoomId: 'reef_of_bones_bone_bridge', description: '白骨橋在南側' },
    ],
    monsters: [
      { monsterId: 'wreckdeck_cutthroat', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'rib_shoal_skeleton', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[船]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '沉船船首的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '沉船船首的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '沉船船首殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_skull_marker: {
    id: 'reef_of_bones_skull_marker',
    name: '骷髏航標',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_skull_marker.png',
    imagePrompt: '骷髏航標 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '骷髏航標位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'south', targetRoomId: 'reef_of_bones_tide_gate', description: '回到白骨潮門' },
      { direction: 'east', targetRoomId: 'reef_of_bones_cold_tide_pool', description: '冷潮池在東側' },
      { direction: 'north', targetRoomId: 'reef_of_bones_ghost_anchor', description: '幽靈錨在北側' },
    ],
    monsters: [
      { monsterId: 'rib_shoal_skeleton', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'reefbell_cultist', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[標]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '骷髏航標的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '骷髏航標的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '骷髏航標殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_splinter_deck: {
    id: 'reef_of_bones_splinter_deck',
    name: '裂木甲板',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_splinter_deck.png',
    imagePrompt: '裂木甲板 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '裂木甲板位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_wreck_bow', description: '回到沉船船首' },
      { direction: 'north', targetRoomId: 'reef_of_bones_sunken_cabin', description: '沉沒船艙在北側' },
      { direction: 'east', targetRoomId: 'reef_of_bones_drowned_hold', description: '溺亡貨艙在東側' },
    ],
    monsters: [
      { monsterId: 'wreckdeck_cutthroat', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'black_coral_lurker', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[板]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '裂木甲板的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '裂木甲板的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '裂木甲板殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_cold_tide_pool: {
    id: 'reef_of_bones_cold_tide_pool',
    name: '冷潮池',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_cold_tide_pool.png',
    imagePrompt: '冷潮池 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '冷潮池位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_skull_marker', description: '回到骷髏航標' },
      { direction: 'south', targetRoomId: 'reef_of_bones_rib_shoal', description: '回到肋骨淺灘' },
      { direction: 'east', targetRoomId: 'reef_of_bones_icekelp_tangle', description: '冰藻纏灘在東側' },
    ],
    monsters: [
      { monsterId: 'coldtide_drowned', maxCount: 2, respawnSeconds: 280 },
      { monsterId: 'icekelp_strangler', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[池]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '冷潮池的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '冷潮池的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '冷潮池殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_bone_bridge: {
    id: 'reef_of_bones_bone_bridge',
    name: '白骨橋',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_bone_bridge.png',
    imagePrompt: '白骨橋 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '白骨橋位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'north', targetRoomId: 'reef_of_bones_wreck_bow', description: '回到沉船船首' },
      { direction: 'east', targetRoomId: 'reef_of_bones_black_coral_cut', description: '黑珊瑚切口在東側' },
    ],
    monsters: [
      { monsterId: 'whalebone_warden', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'rib_shoal_skeleton', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[橋]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '白骨橋的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '白骨橋的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '白骨橋殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_ghost_anchor: {
    id: 'reef_of_bones_ghost_anchor',
    name: '幽靈錨',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_ghost_anchor.png',
    imagePrompt: '幽靈錨 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '幽靈錨位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'south', targetRoomId: 'reef_of_bones_skull_marker', description: '回到骷髏航標' },
      { direction: 'east', targetRoomId: 'reef_of_bones_whalebone_arch', description: '鯨骨拱在東側' },
    ],
    monsters: [
      { monsterId: 'ghost_anchor_dragger', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'reefbell_cultist', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[錨]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '幽靈錨的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '幽靈錨的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '幽靈錨殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_sunken_cabin: {
    id: 'reef_of_bones_sunken_cabin',
    name: '沉沒船艙',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_sunken_cabin.png',
    imagePrompt: '沉沒船艙 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '沉沒船艙位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'south', targetRoomId: 'reef_of_bones_splinter_deck', description: '回到裂木甲板' },
      { direction: 'east', targetRoomId: 'reef_of_bones_reefbell_post', description: '礁鐘柱在東側' },
    ],
    monsters: [
      { monsterId: 'coldtide_drowned', maxCount: 1, respawnSeconds: 280 },
      { monsterId: 'wreckdeck_cutthroat', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[艙]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '沉沒船艙的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '沉沒船艙的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '沉沒船艙殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_icekelp_tangle: {
    id: 'reef_of_bones_icekelp_tangle',
    name: '冰藻纏灘',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_icekelp_tangle.png',
    imagePrompt: '冰藻纏灘 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '冰藻纏灘位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_cold_tide_pool', description: '回到冷潮池' },
      { direction: 'east', targetRoomId: 'reef_of_bones_sunken_cabin', description: '沉沒船艙在東側' },
      { direction: 'north', targetRoomId: 'reef_of_bones_whalebone_arch', description: '鯨骨拱在北側' },
    ],
    monsters: [
      { monsterId: 'icekelp_strangler', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'black_coral_lurker', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[藻]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '冰藻纏灘的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '冰藻纏灘的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '冰藻纏灘殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_drowned_hold: {
    id: 'reef_of_bones_drowned_hold',
    name: '溺亡貨艙',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_drowned_hold.png',
    imagePrompt: '溺亡貨艙 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '溺亡貨艙位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_splinter_deck', description: '回到裂木甲板' },
      { direction: 'north', targetRoomId: 'reef_of_bones_captain_grave', description: '船長墓在北側' },
      { direction: 'east', targetRoomId: 'reef_of_bones_shattered_mast', description: '斷桅林在東側' },
    ],
    monsters: [
      { monsterId: 'wreckdeck_cutthroat', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'coldtide_drowned', maxCount: 2, respawnSeconds: 280 },
    ],
    mapSymbol: '[貨]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '溺亡貨艙的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '溺亡貨艙的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '溺亡貨艙殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_whalebone_arch: {
    id: 'reef_of_bones_whalebone_arch',
    name: '鯨骨拱',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_whalebone_arch.png',
    imagePrompt: '鯨骨拱 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '鯨骨拱位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_ghost_anchor', description: '回到幽靈錨' },
      { direction: 'south', targetRoomId: 'reef_of_bones_icekelp_tangle', description: '回到冰藻纏灘' },
      { direction: 'east', targetRoomId: 'reef_of_bones_frostwake_cave', description: '霜浪洞在東側' },
    ],
    monsters: [
      { monsterId: 'whalebone_warden', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'ghost_anchor_dragger', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[鯨]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '鯨骨拱的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '鯨骨拱的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '鯨骨拱殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_black_coral_cut: {
    id: 'reef_of_bones_black_coral_cut',
    name: '黑珊瑚切口',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_black_coral_cut.png',
    imagePrompt: '黑珊瑚切口 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '黑珊瑚切口位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_bone_bridge', description: '回到白骨橋' },
      { direction: 'north', targetRoomId: 'reef_of_bones_drowned_hold', description: '回到溺亡貨艙' },
      { direction: 'east', targetRoomId: 'reef_of_bones_treasure_keel', description: '寶藏龍骨在東側' },
    ],
    monsters: [
      { monsterId: 'black_coral_lurker', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'icekelp_strangler', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[珊]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '黑珊瑚切口的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '黑珊瑚切口的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '黑珊瑚切口殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_reefbell_post: {
    id: 'reef_of_bones_reefbell_post',
    name: '礁鐘柱',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_reefbell_post.png',
    imagePrompt: '礁鐘柱 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '礁鐘柱位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_sunken_cabin', description: '回到沉沒船艙' },
      { direction: 'east', targetRoomId: 'reef_of_bones_captain_grave', description: '船長墓在東側' },
    ],
    monsters: [
      { monsterId: 'reefbell_cultist', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'coldtide_drowned', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[鐘]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '礁鐘柱的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '礁鐘柱的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '礁鐘柱殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_captain_grave: {
    id: 'reef_of_bones_captain_grave',
    name: '船長墓',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_captain_grave.png',
    imagePrompt: '船長墓 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '船長墓位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_reefbell_post', description: '回到礁鐘柱' },
      { direction: 'south', targetRoomId: 'reef_of_bones_drowned_hold', description: '回到溺亡貨艙' },
      { direction: 'east', targetRoomId: 'reef_of_bones_lichlight_reef', description: '巫光礁在東側' },
    ],
    monsters: [
      { monsterId: 'reefbell_cultist', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'ghost_anchor_dragger', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'wreckdeck_cutthroat', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[墓]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '船長墓的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '船長墓的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '船長墓殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_frostwake_cave: {
    id: 'reef_of_bones_frostwake_cave',
    name: '霜浪洞',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_frostwake_cave.png',
    imagePrompt: '霜浪洞 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '霜浪洞位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_whalebone_arch', description: '回到鯨骨拱' },
      { direction: 'east', targetRoomId: 'reef_of_bones_lichlight_reef', description: '巫光礁在東側' },
    ],
    monsters: [
      { monsterId: 'frostwake_bone_drake', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'whalebone_warden', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[洞]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '霜浪洞的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '霜浪洞的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '霜浪洞殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_shattered_mast: {
    id: 'reef_of_bones_shattered_mast',
    name: '斷桅林',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_shattered_mast.png',
    imagePrompt: '斷桅林 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '斷桅林位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_drowned_hold', description: '回到溺亡貨艙' },
      { direction: 'north', targetRoomId: 'reef_of_bones_captain_grave', description: '船長墓在北側' },
      { direction: 'east', targetRoomId: 'reef_of_bones_drowned_vault', description: '溺亡寶庫在東側' },
    ],
    monsters: [
      { monsterId: 'wreckdeck_cutthroat', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'black_coral_lurker', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[桅]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '斷桅林的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '斷桅林的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '斷桅林殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_treasure_keel: {
    id: 'reef_of_bones_treasure_keel',
    name: '寶藏龍骨',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_treasure_keel.png',
    imagePrompt: '寶藏龍骨 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain bone, clear lantern light',
    description:
      '寶藏龍骨位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_black_coral_cut', description: '回到黑珊瑚切口' },
      { direction: 'east', targetRoomId: 'reef_of_bones_drowned_vault', description: '溺亡寶庫在東側' },
    ],
    monsters: [
      { monsterId: 'whalebone_warden', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'reefbell_cultist', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[骨]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '寶藏龍骨的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '寶藏龍骨的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '寶藏龍骨殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_lichlight_reef: {
    id: 'reef_of_bones_lichlight_reef',
    name: '巫光礁',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_lichlight_reef.png',
    imagePrompt: '巫光礁 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '巫光礁位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_captain_grave', description: '回到船長墓' },
      { direction: 'south', targetRoomId: 'reef_of_bones_shattered_mast', description: '回到斷桅林' },
      { direction: 'east', targetRoomId: 'reef_of_bones_drowned_vault', description: '溺亡寶庫在東側' },
    ],
    monsters: [
      { monsterId: 'lichlight_reef_sage', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'reefbell_cultist', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[光]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '巫光礁的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '巫光礁的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '巫光礁殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

reef_of_bones_drowned_vault: {
    id: 'reef_of_bones_drowned_vault',
    name: '溺亡寶庫',
    zone: 'reef_of_bones' as RoomDef['zone'],
    image: 'reef_of_bones_drowned_vault.png',
    imagePrompt: '溺亡寶庫 in reef_of_bones, bone reef dungeon entrance with shipwreck ribs, giant skeletons, icy tide pools, black coral, ghost anchor, drowned pirate treasure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain bone, clear lantern light',
    description:
      '溺亡寶庫位於白骨礁退潮時露出海面的船骸與巨獸骨架之間，肋骨淺灘、沉船甲板、冰藻潮池、黑珊瑚與幽靈航標共同標出通往沉船寶庫的危險路線。這裡是高階隊伍入口與開放衝突區，旅人可以 觀察 骨橋裂縫、船名銅牌、礁鐘方向和冷潮痕跡來判斷潮水，也能 搜索 船艙、船長墓、寶藏龍骨與巫光礁尋找沉船財寶線索。南北兩側的寶藏龍骨與巫光礁在寶庫開啟後會被冷潮封住，只能從兩側礁路進入寶庫。若隊伍忽略退潮時限、亡靈巡邏與冰潮倒灌，不死騎士、幽靈騎士、詛咒祭司與巫妖會封鎖船骸通道；若穩定沿白骨航標、礁鐘聲與乾露骨脊推進，則能抵達溺亡寶庫並安全帶回寶藏清單',
    exits: [
      { direction: 'west', targetRoomId: 'reef_of_bones_shattered_mast', description: '回到斷桅林' },
    ],
    monsters: [
      { monsterId: 'drowned_vault_captain', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'frostwake_bone_drake', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'lichlight_reef_sage', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[庫]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '溺亡寶庫的冷潮若逆著風湧動，附近亡靈巡邏或冰潮怪物通常正在靠近。',
      treasure: '溺亡寶庫的骨縫、沉船木板或黑珊瑚旁可能藏著白骨礁寶藏線索。',
      spirit: '溺亡寶庫殘留船員溺亡、海盜守寶與巨獸骸骨沉降時的記憶。',
    },
  },

// ─── 藍寶湖擴充 (Lv 15-25) ─────────────────────────────

  sapphire_lake_entry_claim: {
    id: 'sapphire_lake_entry_claim',
    name: '湖岸採集界樁',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_entry_claim.png',
    imagePrompt: '湖岸採集界樁 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '湖岸採集界樁位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'east', targetRoomId: 'sapphire_lake_vein_path', description: '藍脈湖徑在東側' },
    ],
    monsters: [
      { monsterId: 'blue_silt_toad', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'glassfish_swarm', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '湖岸採集界樁的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '湖岸採集界樁的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '湖岸採集界樁殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_vein_path: {
    id: 'sapphire_lake_vein_path',
    name: '藍脈湖徑',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_vein_path.png',
    imagePrompt: '藍脈湖徑 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '藍脈湖徑位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_entry_claim', description: '回到湖岸採集界樁' },
      { direction: 'east', targetRoomId: 'sapphire_lake_herb_shelf', description: '湖草淺棚在東側' },
    ],
    monsters: [
      { monsterId: 'vein_crystal_lizard', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'blue_silt_toad', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[脈]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '藍脈湖徑的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '藍脈湖徑的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '藍脈湖徑殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_herb_shelf: {
    id: 'sapphire_lake_herb_shelf',
    name: '湖草淺棚',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_herb_shelf.png',
    imagePrompt: '湖草淺棚 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '湖草淺棚位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_vein_path', description: '回到藍脈湖徑' },
      { direction: 'east', targetRoomId: 'sapphire_lake_water_pocket', description: '清泉水囊在東側' },
    ],
    monsters: [
      { monsterId: 'sapphire_reed_sprite', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'blue_silt_toad', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '湖草淺棚的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '湖草淺棚的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '湖草淺棚殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_water_pocket: {
    id: 'sapphire_lake_water_pocket',
    name: '清泉水囊',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_water_pocket.png',
    imagePrompt: '清泉水囊 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '清泉水囊位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_herb_shelf', description: '回到湖草淺棚' },
      { direction: 'east', targetRoomId: 'sapphire_lake_beast_scrape', description: '湖獸擦痕在東側' },
    ],
    monsters: [
      { monsterId: 'mirror_shallows_serpent', maxCount: 1, respawnSeconds: 230 },
      { monsterId: 'glassfish_swarm', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '清泉水囊的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '清泉水囊的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '清泉水囊殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_beast_scrape: {
    id: 'sapphire_lake_beast_scrape',
    name: '湖獸擦痕',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_beast_scrape.png',
    imagePrompt: '湖獸擦痕 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '湖獸擦痕位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_water_pocket', description: '回到清泉水囊' },
      { direction: 'east', targetRoomId: 'sapphire_lake_relic_pit', description: '湖底遺坑在東側' },
    ],
    monsters: [
      { monsterId: 'mirror_shallows_serpent', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'vein_crystal_lizard', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[獸]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '湖獸擦痕的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '湖獸擦痕的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '湖獸擦痕殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_relic_pit: {
    id: 'sapphire_lake_relic_pit',
    name: '湖底遺坑',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_relic_pit.png',
    imagePrompt: '湖底遺坑 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '湖底遺坑位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_beast_scrape', description: '回到湖獸擦痕' },
      { direction: 'east', targetRoomId: 'sapphire_lake_sapphire_lode', description: '東側礦砂坡通往藍寶礦脈' },
    ],
    monsters: [
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'vein_crystal_lizard', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[遺]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '湖底遺坑的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '湖底遺坑的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '湖底遺坑殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_lantern_dock: {
    id: 'sapphire_lake_lantern_dock',
    name: '燈籠碼頭',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_lantern_dock.png',
    imagePrompt: '燈籠碼頭 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain lake, clear lantern light',
    description:
      '燈籠碼頭位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'east', targetRoomId: 'sapphire_lake_mirror_shallows', description: '鏡面淺灘在東側' },
    ],
    monsters: [
      { monsterId: 'blue_silt_toad', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'glassfish_swarm', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[碼]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '燈籠碼頭的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '燈籠碼頭的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '燈籠碼頭殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_mirror_shallows: {
    id: 'sapphire_lake_mirror_shallows',
    name: '鏡面淺灘',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_mirror_shallows.png',
    imagePrompt: '鏡面淺灘 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '鏡面淺灘位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_lantern_dock', description: '回到燈籠碼頭' },
      { direction: 'east', targetRoomId: 'sapphire_lake_blue_reed_bed', description: '藍蘆葦帶在東側' },
    ],
    monsters: [
      { monsterId: 'glassfish_swarm', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'mirror_shallows_serpent', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[鏡]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鏡面淺灘的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '鏡面淺灘的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '鏡面淺灘殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_blue_reed_bed: {
    id: 'sapphire_lake_blue_reed_bed',
    name: '藍蘆葦帶',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_blue_reed_bed.png',
    imagePrompt: '藍蘆葦帶 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '藍蘆葦帶位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_mirror_shallows', description: '回到鏡面淺灘' },
      { direction: 'east', targetRoomId: 'sapphire_lake_fill_17_9', description: '東側湖畔小路通往玻魚灣' },
    ],
    monsters: [
      { monsterId: 'sapphire_reed_sprite', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'blue_silt_toad', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[蘆]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '藍蘆葦帶的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '藍蘆葦帶的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '藍蘆葦帶殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_pebble_weir: {
    id: 'sapphire_lake_pebble_weir',
    name: '卵石水堰',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_pebble_weir.png',
    imagePrompt: '卵石水堰 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '卵石水堰位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'east', targetRoomId: 'sapphire_lake_crystal_sandbar', description: '晶砂洲在東側' },
    ],
    monsters: [
      { monsterId: 'vein_crystal_lizard', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'glassfish_swarm', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[堰]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '卵石水堰的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '卵石水堰的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '卵石水堰殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_glassfish_cove: {
    id: 'sapphire_lake_glassfish_cove',
    name: '玻魚灣',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_glassfish_cove.png',
    imagePrompt: '玻魚灣 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '玻魚灣位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_fill_17_9', description: '西側湖畔小路回到藍蘆葦帶' },
    ],
    monsters: [
      { monsterId: 'glassfish_swarm', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'mirror_shallows_serpent', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[灣]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '玻魚灣的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '玻魚灣的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '玻魚灣殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_sunken_step: {
    id: 'sapphire_lake_sunken_step',
    name: '沉階',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_sunken_step.png',
    imagePrompt: '沉階 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '沉階位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
    ],
    monsters: [
      { monsterId: 'calmwater_spring_guardian', maxCount: 1, respawnSeconds: 380 },
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[階]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '沉階的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '沉階的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '沉階殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_mineral_spring: {
    id: 'sapphire_lake_mineral_spring',
    name: '礦泉眼',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_mineral_spring.png',
    imagePrompt: '礦泉眼 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '礦泉眼位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'east', targetRoomId: 'sapphire_lake_calmwater_grotto', description: '靜水石窟在東側' },
    ],
    monsters: [
      { monsterId: 'calmwater_spring_guardian', maxCount: 1, respawnSeconds: 380 },
      { monsterId: 'sapphire_reed_sprite', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '礦泉眼的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '礦泉眼的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '礦泉眼殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_crystal_sandbar: {
    id: 'sapphire_lake_crystal_sandbar',
    name: '晶砂洲',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_crystal_sandbar.png',
    imagePrompt: '晶砂洲 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '晶砂洲位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認。東側湖岸岩壁間有一道被水草遮掩的裂口，潮濕暗風從中吹出，似乎通往城鎮下方的隱藏水道',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_pebble_weir', description: '回到卵石水堰' },
      { direction: 'south', targetRoomId: 'sapphire_lake_beast_scrape', description: '南側晶砂淺灘接往湖獸擦痕' },
    ],
    monsters: [
      { monsterId: 'vein_crystal_lizard', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[砂]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '晶砂洲的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '晶砂洲的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '晶砂洲殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_lily_cache: {
    id: 'sapphire_lake_lily_cache',
    name: '睡蓮藏點',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_lily_cache.png',
    imagePrompt: '睡蓮藏點 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain lake, clear lantern light',
    description:
      '睡蓮藏點位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。西側晶砂洲與北側玻魚灣的浮標會在採集後沉入水面，只能從那兩處進入睡蓮藏點。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
    ],
    monsters: [
      { monsterId: 'sapphire_reed_sprite', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'mirror_shallows_serpent', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[蓮]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '睡蓮藏點的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '睡蓮藏點的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '睡蓮藏點殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_calmwater_grotto: {
    id: 'sapphire_lake_calmwater_grotto',
    name: '靜水石窟',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_calmwater_grotto.png',
    imagePrompt: '靜水石窟 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '靜水石窟位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_mineral_spring', description: '回到礦泉眼' },
      { direction: 'east', targetRoomId: 'sapphire_lake_spirit_mirror', description: '水靈鏡在東側' },
    ],
    monsters: [
      { monsterId: 'calmwater_spring_guardian', maxCount: 1, respawnSeconds: 380 },
      { monsterId: 'glassfish_swarm', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[窟]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '靜水石窟的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '靜水石窟的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '靜水石窟殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_spirit_mirror: {
    id: 'sapphire_lake_spirit_mirror',
    name: '水靈鏡',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_spirit_mirror.png',
    imagePrompt: '水靈鏡 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '水靈鏡位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'west', targetRoomId: 'sapphire_lake_calmwater_grotto', description: '回到靜水石窟' },
    ],
    monsters: [
      { monsterId: 'sapphire_reed_sprite', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'calmwater_spring_guardian', maxCount: 1, respawnSeconds: 380 },
    ],
    mapSymbol: '[靈]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '水靈鏡的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '水靈鏡的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '水靈鏡殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_deep_vein_window: {
    id: 'sapphire_lake_deep_vein_window',
    name: '深脈窗',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_deep_vein_window.png',
    imagePrompt: '深脈窗 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '深脈窗位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
    ],
    monsters: [
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'mirror_shallows_serpent', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[窗]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '深脈窗的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '深脈窗的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '深脈窗殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

sapphire_lake_sapphire_lode: {
    id: 'sapphire_lake_sapphire_lode',
    name: '藍寶礦脈',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_sapphire_lode.png',
    imagePrompt: '藍寶礦脈 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '藍寶礦脈位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
      { direction: 'east', targetRoomId: 'sapphire_lake_fill_21_8', description: '東側湖邊草地通往睡蓮浮標' },
    ],
    monsters: [
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'vein_crystal_lizard', maxCount: 2, respawnSeconds: 210 },
    ],
    mapSymbol: '[礦]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '藍寶礦脈的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '藍寶礦脈的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '藍寶礦脈殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },
};
