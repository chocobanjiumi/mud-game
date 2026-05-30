import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_013: Record<string, RoomDef> = {
deepsea_temple_whalebone_bridge: {
    id: 'deepsea_temple_whalebone_bridge',
    name: '鯨骨橋',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_whalebone_bridge.png',
    imagePrompt: '鯨骨橋 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '鯨骨橋位於沉入海底的深海神殿中，西側回骨錨臺，東側觸手門通向禁忌祭壇前路，藍色聖火在水下燃燒。破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_bone_anchor', description: '鯨骨橋回到骨錨臺' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tentacle_gate', description: '觸手門在前方' },
    ],
    monsters: [
      { monsterId: 'whalebone_anchor_colossus', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'tideclock_hydra_larva', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '鯨骨橋的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '鯨骨橋的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '鯨骨橋保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_forbidden_altar: {
    id: 'deepsea_temple_forbidden_altar',
    name: '禁忌祭壇',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_forbidden_altar.png',
    imagePrompt: '禁忌祭壇 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '禁忌祭壇位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_statue_trench', description: '禁忌祭壇回到神像裂溝' },
      { direction: 'south', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '祭壇水階通往神諭室' },
      { direction: 'east', targetRoomId: 'deepsea_temple_godwhisper_chamber', description: '低語室在東側' },
    ],
    monsters: [
      { monsterId: 'godwhisper_aberration', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'pearl_oracle_shade', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '禁忌祭壇的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '禁忌祭壇的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '禁忌祭壇保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_sleeping_oracle: {
    id: 'deepsea_temple_sleeping_oracle',
    name: '沉睡神諭室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_sleeping_oracle.png',
    imagePrompt: '沉睡神諭室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '沉睡神諭室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_abyssal_garden', description: '神諭室回到深淵花園' },
      { direction: 'north', targetRoomId: 'deepsea_temple_forbidden_altar', description: '祭壇水階回到禁忌祭壇' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tidal_throne', description: '潮汐王座在前方' },
    ],
    monsters: [
      { monsterId: 'pearl_oracle_shade', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'drowned_library_scribe', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[諭]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '沉睡神諭室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '沉睡神諭室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '沉睡神諭室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_tentacle_gate: {
    id: 'deepsea_temple_tentacle_gate',
    name: '觸手門',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tentacle_gate.png',
    imagePrompt: '觸手門 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '觸手門位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_whalebone_bridge', description: '觸手門回到鯨骨橋' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tidal_throne', description: '黑水廊通往潮汐王座' },
    ],
    monsters: [
      { monsterId: 'whalebone_anchor_colossus', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'silt_tide_serpent', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[觸]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '觸手門的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '觸手門的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '觸手門保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_godwhisper_chamber: {
    id: 'deepsea_temple_godwhisper_chamber',
    name: '古神低語室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_godwhisper_chamber.png',
    imagePrompt: '古神低語室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '古神低語室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_forbidden_altar', description: '低語室回到禁忌祭壇' },
      { direction: 'south', targetRoomId: 'deepsea_temple_tidal_throne', description: '低語階通往潮汐王座' },
    ],
    monsters: [
      { monsterId: 'godwhisper_aberration', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'drowned_library_scribe', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[語]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '古神低語室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '古神低語室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '古神低語室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_tidal_throne: {
    id: 'deepsea_temple_tidal_throne',
    name: '潮汐王座',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tidal_throne.png',
    imagePrompt: '潮汐王座 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '潮汐王座位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 搜索 書庫、骨錨、月池和花園尋找古神線索。南側黑水廊被潮汐王座的壓力壓成單向暗流，只能從觸手門進入王座。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '潮汐王座回到沉睡神諭室' },
      { direction: 'north', targetRoomId: 'deepsea_temple_godwhisper_chamber', description: '低語階回到古神低語室' },
    ],
    monsters: [
      { monsterId: 'tidal_throne_leviathan', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'godwhisper_aberration', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'tideclock_hydra_larva', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '潮汐王座的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮汐王座的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮汐王座保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

obsidian_depths_mine_lift: {
    id: 'obsidian_depths_mine_lift',
    name: '深層礦梯',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_mine_lift.png',
    imagePrompt: '深層礦梯 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '深層礦梯位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'east', targetRoomId: 'obsidian_depths_glass_vein', description: '黑曜礦脈通往東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_cooling_shelf', description: '冷卻岩棚向下延伸' },
    ],
    monsters: [
      { monsterId: 'obsidian_shard_crawler', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '深層礦梯的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '深層礦梯的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '深層礦梯保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_glass_vein: {
    id: 'obsidian_depths_glass_vein',
    name: '鏡黑礦脈',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_glass_vein.png',
    imagePrompt: '鏡黑礦脈 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '鏡黑礦脈位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_mine_lift', description: '礦脈回到深層礦梯' },
      { direction: 'east', targetRoomId: 'obsidian_depths_lava_drip', description: '熔滴廊在前方' },
      { direction: 'north', targetRoomId: 'obsidian_depths_shard_claim', description: '碎晶採區在上方' },
    ],
    monsters: [
      { monsterId: 'obsidian_shard_crawler', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'blackglass_golem', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[礦]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鏡黑礦脈的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '鏡黑礦脈的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '鏡黑礦脈保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_shard_claim: {
    id: 'obsidian_depths_shard_claim',
    name: '碎曜採區',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_shard_claim.png',
    imagePrompt: '碎曜採區 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '碎曜採區位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'south', targetRoomId: 'obsidian_depths_glass_vein', description: '碎曜採區回到鏡黑礦脈' },
      { direction: 'east', targetRoomId: 'obsidian_depths_mirror_chamber', description: '反光洞室在東側' },
    ],
    monsters: [
      { monsterId: 'obsidian_shard_crawler', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'blackglass_golem', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[採]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '碎曜採區的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '碎曜採區的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '碎曜採區保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_cooling_shelf: {
    id: 'obsidian_depths_cooling_shelf',
    name: '冷卻岩棚',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_cooling_shelf.png',
    imagePrompt: '冷卻岩棚 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '冷卻岩棚位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'north', targetRoomId: 'obsidian_depths_mine_lift', description: '冷卻岩棚回到礦梯' },
      { direction: 'east', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '硫磺袋在東側' },
    ],
    monsters: [
      { monsterId: 'sulfur_fume_imp', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'magma_glass_worm', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[棚]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '冷卻岩棚的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '冷卻岩棚的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '冷卻岩棚保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_lava_drip: {
    id: 'obsidian_depths_lava_drip',
    name: '熔滴廊',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_lava_drip.png',
    imagePrompt: '熔滴廊 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '熔滴廊位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_glass_vein', description: '熔滴廊回到礦脈' },
      { direction: 'east', targetRoomId: 'obsidian_depths_old_furnace', description: '舊熔爐在前方' },
      { direction: 'south', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '熱氣井落向硫磺袋' },
    ],
    monsters: [
      { monsterId: 'magma_glass_worm', maxCount: 3, respawnSeconds: 190 },
      { monsterId: 'ember_basin_elemental', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[滴]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '熔滴廊的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔滴廊的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔滴廊保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_mirror_chamber: {
    id: 'obsidian_depths_mirror_chamber',
    name: '黑鏡洞室',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_mirror_chamber.png',
    imagePrompt: '黑鏡洞室 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '黑鏡洞室位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_shard_claim', description: '黑鏡洞室回到採區' },
      { direction: 'east', targetRoomId: 'obsidian_depths_chain_gallery', description: '鐵鏈廊在東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_old_furnace', description: '反光坡落向舊熔爐' },
    ],
    monsters: [
      { monsterId: 'blackglass_golem', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'heart_mirror_demon', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '黑鏡洞室的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑鏡洞室的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑鏡洞室保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_sulfur_pocket: {
    id: 'obsidian_depths_sulfur_pocket',
    name: '硫磺氣袋',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_sulfur_pocket.png',
    imagePrompt: '硫磺氣袋 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '硫磺氣袋位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_cooling_shelf', description: '硫磺氣袋回到岩棚' },
      { direction: 'north', targetRoomId: 'obsidian_depths_lava_drip', description: '熱氣井回到熔滴廊' },
      { direction: 'east', targetRoomId: 'obsidian_depths_magma_rill', description: '岩漿細渠在前方' },
    ],
    monsters: [
      { monsterId: 'sulfur_fume_imp', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'magma_glass_worm', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[硫]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '硫磺氣袋的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '硫磺氣袋的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '硫磺氣袋保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_old_furnace: {
    id: 'obsidian_depths_old_furnace',
    name: '古代熔爐',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_old_furnace.png',
    imagePrompt: '古代熔爐 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '古代熔爐位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_lava_drip', description: '舊熔爐回到熔滴廊' },
      { direction: 'north', targetRoomId: 'obsidian_depths_mirror_chamber', description: '反光坡回到黑鏡洞室' },
      { direction: 'east', targetRoomId: 'obsidian_depths_forge_guard_post', description: '守衛臺在東側' },
    ],
    monsters: [
      { monsterId: 'ember_basin_elemental', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'forge_chain_guard', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[爐]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '古代熔爐的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '古代熔爐的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '古代熔爐保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_chain_gallery: {
    id: 'obsidian_depths_chain_gallery',
    name: '鎖鏈長廊',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_chain_gallery.png',
    imagePrompt: '鎖鏈長廊 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '鎖鏈長廊位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_mirror_chamber', description: '鎖鏈長廊回到黑鏡洞室' },
      { direction: 'east', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '黑玻橋在東側' },
    ],
    monsters: [
      { monsterId: 'forge_chain_guard', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'blackglass_golem', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[鏈]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '鎖鏈長廊的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '鎖鏈長廊的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '鎖鏈長廊保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_magma_rill: {
    id: 'obsidian_depths_magma_rill',
    name: '岩漿細渠',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_magma_rill.png',
    imagePrompt: '岩漿細渠 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '岩漿細渠位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '岩漿細渠回到硫磺袋' },
      { direction: 'east', targetRoomId: 'obsidian_depths_forge_guard_post', description: '熔流路通往守衛臺' },
      { direction: 'south', targetRoomId: 'obsidian_depths_ember_basin', description: '餘燼盆地在下方' },
    ],
    monsters: [
      { monsterId: 'magma_glass_worm', maxCount: 3, respawnSeconds: 190 },
      { monsterId: 'ember_basin_elemental', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '岩漿細渠的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '岩漿細渠的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '岩漿細渠保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_forge_guard_post: {
    id: 'obsidian_depths_forge_guard_post',
    name: '熔爐守衛臺',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_forge_guard_post.png',
    imagePrompt: '熔爐守衛臺 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '熔爐守衛臺位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。南側熔流路因守衛臺熱壓上湧而變成單向斜坡，只能由岩漿細渠進入守衛臺。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_old_furnace', description: '守衛臺回到古代熔爐' },
      { direction: 'east', targetRoomId: 'obsidian_depths_obsidian_market', description: '棄市礦棚在東側' },
    ],
    monsters: [
      { monsterId: 'forge_chain_guard', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'blackglass_golem', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[守]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '熔爐守衛臺的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔爐守衛臺的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔爐守衛臺保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_black_glass_bridge: {
    id: 'obsidian_depths_black_glass_bridge',
    name: '黑玻橋',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_black_glass_bridge.png',
    imagePrompt: '黑玻橋 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '黑玻橋位於火山下方的黑曜深層，西側回鎖鏈長廊，東側接深層小祠，南面橋下坡落向棄市礦棚。鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_chain_gallery', description: '黑玻橋回到鎖鏈長廊' },
      { direction: 'east', targetRoomId: 'obsidian_depths_depths_shrine', description: '深層小祠在東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_obsidian_market', description: '橋下坡落向棄市礦棚' },
    ],
    monsters: [
      { monsterId: 'blackglass_golem', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'forge_chain_guard', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '黑玻橋的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑玻橋的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑玻橋保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_ember_basin: {
    id: 'obsidian_depths_ember_basin',
    name: '餘燼盆地',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_ember_basin.png',
    imagePrompt: '餘燼盆地 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '餘燼盆地位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'north', targetRoomId: 'obsidian_depths_magma_rill', description: '餘燼盆地回到岩漿細渠' },
      { direction: 'east', targetRoomId: 'obsidian_depths_lavafall_overlook', description: '熔瀑臺在東側' },
    ],
    monsters: [
      { monsterId: 'ember_basin_elemental', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'magma_glass_worm', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[燼]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '餘燼盆地的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '餘燼盆地的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '餘燼盆地保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_obsidian_market: {
    id: 'obsidian_depths_obsidian_market',
    name: '棄市礦棚',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_obsidian_market.png',
    imagePrompt: '棄市礦棚 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '棄市礦棚位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_forge_guard_post', description: '礦棚回到守衛臺' },
      { direction: 'north', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '橋下坡回到黑玻橋' },
      { direction: 'east', targetRoomId: 'obsidian_depths_core_drill', description: '核心鑽井在東側' },
    ],
    monsters: [
      { monsterId: 'forge_chain_guard', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'sulfur_fume_imp', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[市]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '棄市礦棚的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '棄市礦棚的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '棄市礦棚保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_depths_shrine: {
    id: 'obsidian_depths_depths_shrine',
    name: '深層火祠',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_depths_shrine.png',
    imagePrompt: '深層火祠 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '深層火祠位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '火祠回到黑玻橋' },
      { direction: 'south', targetRoomId: 'obsidian_depths_core_drill', description: '祭火路通往核心鑽井' },
    ],
    monsters: [
      { monsterId: 'ember_basin_elemental', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'heart_mirror_demon', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '深層火祠的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '深層火祠的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '深層火祠保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_lavafall_overlook: {
    id: 'obsidian_depths_lavafall_overlook',
    name: '熔瀑臺',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_lavafall_overlook.png',
    imagePrompt: '熔瀑臺 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '熔瀑臺位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_ember_basin', description: '熔瀑臺回到餘燼盆地' },
      { direction: 'east', targetRoomId: 'obsidian_depths_molten_lock', description: '熔鎖門在東側' },
    ],
    monsters: [
      { monsterId: 'magma_glass_worm', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'molten_lock_warden', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[瀑]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '熔瀑臺的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔瀑臺的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔瀑臺保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_core_drill: {
    id: 'obsidian_depths_core_drill',
    name: '核心鑽井',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_core_drill.png',
    imagePrompt: '核心鑽井 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '核心鑽井位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_obsidian_market', description: '核心鑽井回到棄市礦棚' },
      { direction: 'north', targetRoomId: 'obsidian_depths_depths_shrine', description: '祭火路回到深層火祠' },
      { direction: 'east', targetRoomId: 'obsidian_depths_heart_mirror', description: '心鏡廳在東側' },
    ],
    monsters: [
      { monsterId: 'molten_lock_warden', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'forge_chain_guard', maxCount: 2, respawnSeconds: 420 },
    ],
    mapSymbol: '[鑽]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '核心鑽井的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '核心鑽井的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '核心鑽井保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_molten_lock: {
    id: 'obsidian_depths_molten_lock',
    name: '熔鎖門',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_molten_lock.png',
    imagePrompt: '熔鎖門 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '熔鎖門位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_lavafall_overlook', description: '熔鎖門回到熔瀑臺' },
      { direction: 'east', targetRoomId: 'obsidian_depths_heart_mirror', description: '熔鎖通道通往心鏡廳' },
    ],
    monsters: [
      { monsterId: 'molten_lock_warden', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'heart_mirror_demon', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[鎖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '熔鎖門的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔鎖門的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔鎖門保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_heart_mirror: {
    id: 'obsidian_depths_heart_mirror',
    name: '黑曜心鏡',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_heart_mirror.png',
    imagePrompt: '黑曜心鏡 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '黑曜心鏡位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。南側熔鎖通道在心鏡反光中只留下假出口，真正通道必須由熔鎖門進入。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_core_drill', description: '心鏡廳回到核心鑽井' },
      { direction: 'east', targetRoomId: 'obsidian_depths_worldforge_core', description: '核心裂口通往世界熔爐' },
    ],
    monsters: [
      { monsterId: 'heart_mirror_demon', maxCount: 2, respawnSeconds: 480 },
      { monsterId: 'worldforge_colossus', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[心]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '黑曜心鏡的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑曜心鏡的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑曜心鏡保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

obsidian_depths_worldforge_core: {
    id: 'obsidian_depths_worldforge_core',
    name: '世界熔爐核心',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_worldforge_core.png',
    imagePrompt: '世界熔爐核心 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain mine, clear lantern light',
    description:
      '世界熔爐核心位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，旅人可以 採集 黑曜、火晶、硫磺與熔爐殘片，也能 觀察 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_heart_mirror', description: '核心裂口回到黑曜心鏡' },
    ],
    monsters: [
      { monsterId: 'worldforge_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'obsidian_depths_archfiend', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'ember_basin_elemental', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '世界熔爐核心的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '世界熔爐核心的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '世界熔爐核心保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

starfall_crater_rim_gate: {
    id: 'starfall_crater_rim_gate',
    name: '隕坑邊門',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_rim_gate.png',
    imagePrompt: '隕坑邊門 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '隕坑邊門位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'east', targetRoomId: 'starfall_crater_glass_slope', description: '玻化斜坡通往坑內' },
      { direction: 'north', targetRoomId: 'starfall_crater_survey_camp', description: '測量營地在北側' },
    ],
    monsters: [
      { monsterId: 'starglass_sentinel', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '隕坑邊門的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '隕坑邊門的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '隕坑邊門保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_glass_slope: {
    id: 'starfall_crater_glass_slope',
    name: '玻化斜坡',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_glass_slope.png',
    imagePrompt: '玻化斜坡 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '玻化斜坡位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_rim_gate', description: '玻化斜坡回到邊門' },
      { direction: 'east', targetRoomId: 'starfall_crater_stariron_field', description: '星鐵散地在前方' },
      { direction: 'south', targetRoomId: 'starfall_crater_burning_scree', description: '燃石坡向下滑落' },
    ],
    monsters: [
      { monsterId: 'starglass_sentinel', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'magnetized_thunderhawk', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '玻化斜坡的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '玻化斜坡的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '玻化斜坡保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_survey_camp: {
    id: 'starfall_crater_survey_camp',
    name: '測量營地',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_survey_camp.png',
    imagePrompt: '測量營地 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '測量營地位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'south', targetRoomId: 'starfall_crater_rim_gate', description: '營地路回到隕坑邊門' },
      { direction: 'east', targetRoomId: 'starfall_crater_magnetized_spire', description: '磁化尖塔在東側' },
    ],
    monsters: [
      { monsterId: 'magnetized_thunderhawk', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'starglass_sentinel', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[營]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '測量營地的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '測量營地的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '測量營地保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_magnetized_spire: {
    id: 'starfall_crater_magnetized_spire',
    name: '磁化尖塔',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_magnetized_spire.png',
    imagePrompt: '磁化尖塔 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '磁化尖塔位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_survey_camp', description: '尖塔路回到測量營地' },
      { direction: 'east', targetRoomId: 'starfall_crater_radiant_pool', description: '輻光水池在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_stariron_field', description: '磁砂坡落向星鐵散地' },
    ],
    monsters: [
      { monsterId: 'magnetized_thunderhawk', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'stariron_golem', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[磁]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '磁化尖塔的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '磁化尖塔的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '磁化尖塔保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_stariron_field: {
    id: 'starfall_crater_stariron_field',
    name: '星鐵散地',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_stariron_field.png',
    imagePrompt: '星鐵散地 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '星鐵散地位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_glass_slope', description: '星鐵散地回到玻化斜坡' },
      { direction: 'north', targetRoomId: 'starfall_crater_magnetized_spire', description: '磁砂坡回到磁化尖塔' },
      { direction: 'east', targetRoomId: 'starfall_crater_impact_trench', description: '撞擊裂溝在前方' },
    ],
    monsters: [
      { monsterId: 'stariron_golem', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'starglass_sentinel', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[鐵]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '星鐵散地的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '星鐵散地的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '星鐵散地保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_burning_scree: {
    id: 'starfall_crater_burning_scree',
    name: '燃石坡',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_burning_scree.png',
    imagePrompt: '燃石坡 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '燃石坡位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'north', targetRoomId: 'starfall_crater_glass_slope', description: '燃石坡回到玻化斜坡' },
      { direction: 'east', targetRoomId: 'starfall_crater_fallen_observatory', description: '墜落觀測臺在東側' },
    ],
    monsters: [
      { monsterId: 'starglass_sentinel', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'comet_shard_burrower', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[燃]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '燃石坡的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '燃石坡的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '燃石坡保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_radiant_pool: {
    id: 'starfall_crater_radiant_pool',
    name: '輻光水池',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_radiant_pool.png',
    imagePrompt: '輻光水池 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '輻光水池位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_magnetized_spire', description: '輻光水池回到磁化尖塔' },
      { direction: 'east', targetRoomId: 'starfall_crater_silvergrass_ring', description: '銀草環在東側' },
    ],
    monsters: [
      { monsterId: 'radiant_pool_wisp', maxCount: 3, respawnSeconds: 210 },
      { monsterId: 'starglass_sentinel', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '輻光水池的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '輻光水池的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '輻光水池保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_impact_trench: {
    id: 'starfall_crater_impact_trench',
    name: '撞擊裂溝',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_impact_trench.png',
    imagePrompt: '撞擊裂溝 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '撞擊裂溝位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_stariron_field', description: '裂溝回到星鐵散地' },
      { direction: 'east', targetRoomId: 'starfall_crater_alien_eggs', description: '異卵灘在前方' },
      { direction: 'south', targetRoomId: 'starfall_crater_fallen_observatory', description: '斷臺階通往觀測臺' },
    ],
    monsters: [
      { monsterId: 'comet_shard_burrower', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'stariron_golem', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[裂]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '撞擊裂溝的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '撞擊裂溝的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '撞擊裂溝保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_fallen_observatory: {
    id: 'starfall_crater_fallen_observatory',
    name: '墜落觀測臺',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_fallen_observatory.png',
    imagePrompt: '墜落觀測臺 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '墜落觀測臺位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_burning_scree', description: '觀測臺回到燃石坡' },
      { direction: 'north', targetRoomId: 'starfall_crater_impact_trench', description: '斷臺階回到撞擊裂溝' },
      { direction: 'east', targetRoomId: 'starfall_crater_comet_shard_mine', description: '彗片礦井在東側' },
    ],
    monsters: [
      { monsterId: 'comet_shard_burrower', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'radiant_pool_wisp', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[觀]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '墜落觀測臺的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '墜落觀測臺的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '墜落觀測臺保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_silvergrass_ring: {
    id: 'starfall_crater_silvergrass_ring',
    name: '銀草環',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_silvergrass_ring.png',
    imagePrompt: '銀草環 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '銀草環位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_radiant_pool', description: '銀草環回到輻光水池' },
      { direction: 'east', targetRoomId: 'starfall_crater_gravity_well', description: '重力井在東側' },
    ],
    monsters: [
      { monsterId: 'radiant_pool_wisp', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'magnetized_thunderhawk', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[草]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '銀草環的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '銀草環的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '銀草環保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_alien_eggs: {
    id: 'starfall_crater_alien_eggs',
    name: '異界卵灘',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_alien_eggs.png',
    imagePrompt: '異界卵灘 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '異界卵灘位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_impact_trench', description: '異卵灘回到撞擊裂溝' },
      { direction: 'east', targetRoomId: 'starfall_crater_voidglass_arch', description: '虛玻拱在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_comet_shard_mine', description: '碎星坡落向礦井' },
    ],
    monsters: [
      { monsterId: 'voidglass_brood', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'comet_shard_burrower', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[卵]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '異界卵灘的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '異界卵灘的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '異界卵灘保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_comet_shard_mine: {
    id: 'starfall_crater_comet_shard_mine',
    name: '彗片礦井',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_comet_shard_mine.png',
    imagePrompt: '彗片礦井 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '彗片礦井位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_fallen_observatory', description: '彗片礦井回到觀測臺' },
      { direction: 'north', targetRoomId: 'starfall_crater_alien_eggs', description: '碎星坡回到異卵灘' },
      { direction: 'east', targetRoomId: 'starfall_crater_meteoric_forge', description: '隕鐵熔臺在東側' },
    ],
    monsters: [
      { monsterId: 'stariron_golem', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'comet_shard_burrower', maxCount: 2, respawnSeconds: 220 },
    ],
    mapSymbol: '[彗]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '彗片礦井的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '彗片礦井的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '彗片礦井保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_gravity_well: {
    id: 'starfall_crater_gravity_well',
    name: '重力井',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_gravity_well.png',
    imagePrompt: '重力井 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '重力井位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_silvergrass_ring', description: '重力井回到銀草環' },
      { direction: 'east', targetRoomId: 'starfall_crater_star_map_ruin', description: '星圖廢墟在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_voidglass_arch', description: '引力坡落向虛玻拱' },
    ],
    monsters: [
      { monsterId: 'gravity_well_aberration', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'radiant_pool_wisp', maxCount: 2, respawnSeconds: 210 },
    ],
    mapSymbol: '[重]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '重力井的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '重力井的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '重力井保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_voidglass_arch: {
    id: 'starfall_crater_voidglass_arch',
    name: '虛玻拱',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_voidglass_arch.png',
    imagePrompt: '虛玻拱 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '虛玻拱位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_alien_eggs', description: '虛玻拱回到異卵灘' },
      { direction: 'north', targetRoomId: 'starfall_crater_gravity_well', description: '引力坡回到重力井' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldscar_rift', description: '世界傷痕裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'voidglass_brood', maxCount: 3, respawnSeconds: 240 },
      { monsterId: 'gravity_well_aberration', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[虛]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '虛玻拱的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '虛玻拱的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '虛玻拱保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_meteoric_forge: {
    id: 'starfall_crater_meteoric_forge',
    name: '隕鐵熔臺',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_meteoric_forge.png',
    imagePrompt: '隕鐵熔臺 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '隕鐵熔臺位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_comet_shard_mine', description: '隕鐵熔臺回到彗片礦井' },
      { direction: 'east', targetRoomId: 'starfall_crater_impact_core', description: '撞擊核心在東側' },
    ],
    monsters: [
      { monsterId: 'stariron_golem', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'star_map_luminant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[熔]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '隕鐵熔臺的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '隕鐵熔臺的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '隕鐵熔臺保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_star_map_ruin: {
    id: 'starfall_crater_star_map_ruin',
    name: '星圖廢墟',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_star_map_ruin.png',
    imagePrompt: '星圖廢墟 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '星圖廢墟位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_gravity_well', description: '星圖廢墟回到重力井' },
      { direction: 'south', targetRoomId: 'starfall_crater_worldscar_rift', description: '星線落向世界傷痕' },
    ],
    monsters: [
      { monsterId: 'star_map_luminant', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'gravity_well_aberration', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[圖]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '星圖廢墟的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '星圖廢墟的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '星圖廢墟保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_worldscar_rift: {
    id: 'starfall_crater_worldscar_rift',
    name: '世界傷痕',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_worldscar_rift.png',
    imagePrompt: '世界傷痕 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '世界傷痕位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_voidglass_arch', description: '世界傷痕回到虛玻拱' },
      { direction: 'north', targetRoomId: 'starfall_crater_star_map_ruin', description: '星線回到星圖廢墟' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldboss_core', description: '裂隙通往世界王核心' },
    ],
    monsters: [
      { monsterId: 'worldscar_storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'voidglass_brood', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[痕]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '世界傷痕的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '世界傷痕的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '世界傷痕保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_impact_core: {
    id: 'starfall_crater_impact_core',
    name: '撞擊核心',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_impact_core.png',
    imagePrompt: '撞擊核心 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '撞擊核心位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_meteoric_forge', description: '撞擊核心回到隕鐵熔臺' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldboss_core', description: '熔星路通往世界王核心' },
    ],
    monsters: [
      { monsterId: 'star_map_luminant', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'worldscar_storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[核]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '撞擊核心的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '撞擊核心的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '撞擊核心保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

starfall_crater_worldboss_core: {
    id: 'starfall_crater_worldboss_core',
    name: '世界王星核',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_worldboss_core.png',
    imagePrompt: '世界王星核 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '世界王星核位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，旅人可以 採集 星鐵、彗片、輻光砂與異界殘片，也能 觀察 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。南側熔星路被星核重力折斷成單向坡道，只能從撞擊核心進入世界王星核。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_worldscar_rift', description: '裂隙回到世界傷痕' },
      { direction: 'east', targetRoomId: 'starfall_crater_outer_void', description: '外界空洞在星核後方' },
    ],
    monsters: [
      { monsterId: 'worldscar_storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'outer_void_star_devourer', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'star_map_luminant', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '世界王星核的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '世界王星核的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '世界王星核保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },
};
