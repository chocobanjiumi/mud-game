import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_015: Record<string, RoomDef> = {
final_battleground_siege_trench: {
    id: 'final_battleground_siege_trench',
    name: '攻城壕溝',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_siege_trench.png',
    imagePrompt: '攻城壕溝 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '攻城壕溝位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_broken_banner_field', description: '攻城壕溝回到破旗原' },
      { direction: 'north', targetRoomId: 'final_battleground_oath_circle', description: '碎石坡回到誓約石圈' },
      { direction: 'east', targetRoomId: 'final_battleground_blood_rain_basin', description: '血雨盆地在東側' },
    ],
    monsters: [
      { monsterId: 'siege_trench_revenant', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'war_gate_bannerman', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[壕]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '攻城壕溝的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '攻城壕溝的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '攻城壕溝保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_ember_mud: {
    id: 'final_battleground_ember_mud',
    name: '餘火泥地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_ember_mud.png',
    imagePrompt: '餘火泥地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '餘火泥地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'north', targetRoomId: 'final_battleground_broken_banner_field', description: '餘火泥地回到破旗原' },
      { direction: 'east', targetRoomId: 'final_battleground_war_machine_wreck', description: '攻城機殘骸在東側' },
    ],
    monsters: [
      { monsterId: 'ember_mud_colossus', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'siege_trench_revenant', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[泥]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '餘火泥地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '餘火泥地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '餘火泥地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_sunless_chapel: {
    id: 'final_battleground_sunless_chapel',
    name: '無日禮拜堂',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_sunless_chapel.png',
    imagePrompt: '無日禮拜堂 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '無日禮拜堂位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_oath_circle', description: '禮拜堂回到誓約石圈' },
      { direction: 'east', targetRoomId: 'final_battleground_angel_fall', description: '墜天坑在東側' },
    ],
    monsters: [
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'kingbone_oath_knight', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[堂]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '無日禮拜堂的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '無日禮拜堂的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '無日禮拜堂保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_blood_rain_basin: {
    id: 'final_battleground_blood_rain_basin',
    name: '血雨盆地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_blood_rain_basin.png',
    imagePrompt: '血雨盆地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '血雨盆地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_siege_trench', description: '血雨盆地回到攻城壕溝' },
      { direction: 'east', targetRoomId: 'final_battleground_throne_wreck', description: '王座殘骸在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_war_machine_wreck', description: '血水渠通往攻城機殘骸' },
    ],
    monsters: [
      { monsterId: 'blood_rain_warmage', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'demon_scar_vanguard', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[血]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '血雨盆地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '血雨盆地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '血雨盆地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_war_machine_wreck: {
    id: 'final_battleground_war_machine_wreck',
    name: '攻城機殘骸',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_war_machine_wreck.png',
    imagePrompt: '攻城機殘骸 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '攻城機殘骸位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_ember_mud', description: '攻城機殘骸回到餘火泥地' },
      { direction: 'north', targetRoomId: 'final_battleground_blood_rain_basin', description: '血水渠回到血雨盆地' },
      { direction: 'east', targetRoomId: 'final_battleground_demon_scar', description: '魔神爪痕在東側' },
    ],
    monsters: [
      { monsterId: 'ember_mud_colossus', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'demon_scar_vanguard', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[械]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '攻城機殘骸的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '攻城機殘骸的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '攻城機殘骸保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_angel_fall: {
    id: 'final_battleground_angel_fall',
    name: '墜天坑',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_angel_fall.png',
    imagePrompt: '墜天坑 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '墜天坑位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_sunless_chapel', description: '墜天坑回到禮拜堂' },
      { direction: 'east', targetRoomId: 'final_battleground_light_sundered_bridge', description: '斷光橋在東側' },
    ],
    monsters: [
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'blood_rain_warmage', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[墜]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '墜天坑的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '墜天坑的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '墜天坑保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_throne_wreck: {
    id: 'final_battleground_throne_wreck',
    name: '王座殘骸',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_throne_wreck.png',
    imagePrompt: '王座殘骸 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '王座殘骸位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_blood_rain_basin', description: '王座殘骸回到血雨盆地' },
      { direction: 'north', targetRoomId: 'final_battleground_light_sundered_bridge', description: '王旗階通往斷光橋' },
      { direction: 'east', targetRoomId: 'final_battleground_black_flame_front', description: '黑焰前線在東側' },
    ],
    monsters: [
      { monsterId: 'kingbone_oath_knight', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[座]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '王座殘骸的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '王座殘骸的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '王座殘骸保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_demon_scar: {
    id: 'final_battleground_demon_scar',
    name: '魔神爪痕',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_demon_scar.png',
    imagePrompt: '魔神爪痕 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '魔神爪痕位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_war_machine_wreck', description: '魔神爪痕回到殘骸' },
      { direction: 'east', targetRoomId: 'final_battleground_black_flame_front', description: '焦土路通往黑焰前線' },
    ],
    monsters: [
      { monsterId: 'demon_scar_vanguard', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'blood_rain_warmage', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[爪]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '魔神爪痕的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '魔神爪痕的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '魔神爪痕保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_light_sundered_bridge: {
    id: 'final_battleground_light_sundered_bridge',
    name: '斷光橋',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_light_sundered_bridge.png',
    imagePrompt: '斷光橋 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '斷光橋位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_angel_fall', description: '斷光橋回到墜天坑' },
      { direction: 'south', targetRoomId: 'final_battleground_throne_wreck', description: '王旗階回到王座殘骸' },
      { direction: 'east', targetRoomId: 'final_battleground_last_command_post', description: '末令高臺在東側' },
    ],
    monsters: [
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '斷光橋的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '斷光橋的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '斷光橋保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_black_flame_front: {
    id: 'final_battleground_black_flame_front',
    name: '黑焰前線',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_black_flame_front.png',
    imagePrompt: '黑焰前線 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '黑焰前線位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。南側焦土路已被黑焰壓成單向戰線，只能從魔神爪痕推進到黑焰前線。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_throne_wreck', description: '黑焰前線回到王座殘骸' },
      { direction: 'east', targetRoomId: 'final_battleground_worldsplit_crack', description: '裂世縫在東側' },
    ],
    monsters: [
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'demon_scar_vanguard', maxCount: 2, respawnSeconds: 320 },
    ],
    mapSymbol: '[焰]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '黑焰前線的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '黑焰前線的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '黑焰前線保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_last_command_post: {
    id: 'final_battleground_last_command_post',
    name: '末令高臺',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_last_command_post.png',
    imagePrompt: '末令高臺 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '末令高臺位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_light_sundered_bridge', description: '末令高臺回到斷光橋' },
      { direction: 'east', targetRoomId: 'final_battleground_crownless_field', description: '無冠戰場在東側' },
    ],
    monsters: [
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'war_gate_bannerman', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[令]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '末令高臺的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '末令高臺的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '末令高臺保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_worldsplit_crack: {
    id: 'final_battleground_worldsplit_crack',
    name: '裂世縫',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_worldsplit_crack.png',
    imagePrompt: '裂世縫 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '裂世縫位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_black_flame_front', description: '裂世縫回到黑焰前線' },
      { direction: 'north', targetRoomId: 'final_battleground_crownless_field', description: '裂縫坡通往無冠戰場' },
      { direction: 'east', targetRoomId: 'final_battleground_godscar_core', description: '神傷核心在東側' },
    ],
    monsters: [
      { monsterId: 'godscar_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'demon_scar_vanguard', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[裂]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '裂世縫的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '裂世縫的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '裂世縫保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_crownless_field: {
    id: 'final_battleground_crownless_field',
    name: '無冠戰場',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_crownless_field.png',
    imagePrompt: '無冠戰場 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '無冠戰場位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_last_command_post', description: '無冠戰場回到末令高臺' },
      { direction: 'south', targetRoomId: 'final_battleground_worldsplit_crack', description: '裂縫坡回到裂世縫' },
      { direction: 'east', targetRoomId: 'final_battleground_final_standard', description: '終末軍旗在東側' },
    ],
    monsters: [
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[冠]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '無冠戰場的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '無冠戰場的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '無冠戰場保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_godscar_core: {
    id: 'final_battleground_godscar_core',
    name: '神傷核心',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_godscar_core.png',
    imagePrompt: '神傷核心 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '神傷核心位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_worldsplit_crack', description: '神傷核心回到裂世縫' },
      { direction: 'north', targetRoomId: 'final_battleground_final_standard', description: '神血階通往終末軍旗' },
    ],
    monsters: [
      { monsterId: 'godscar_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '神傷核心的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '神傷核心的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '神傷核心保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_final_standard: {
    id: 'final_battleground_final_standard',
    name: '終末軍旗',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_final_standard.png',
    imagePrompt: '終末軍旗 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '終末軍旗位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_crownless_field', description: '終末軍旗回到無冠戰場' },
      { direction: 'south', targetRoomId: 'final_battleground_godscar_core', description: '神血階回到神傷核心' },
      { direction: 'east', targetRoomId: 'final_battleground_silence_after_war', description: '戰後寂地在東側' },
    ],
    monsters: [
      { monsterId: 'final_standard_warlord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'godscar_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'blackflame_general', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[旗]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '終末軍旗的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '終末軍旗的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '終末軍旗保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

final_battleground_silence_after_war: {
    id: 'final_battleground_silence_after_war',
    name: '戰後寂地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_silence_after_war.png',
    imagePrompt: '戰後寂地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain battlefield, clear lantern light',
    description:
      '戰後寂地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_final_standard', description: '戰後寂地回到終末軍旗' },
    ],
    monsters: [
      { monsterId: 'final_standard_warlord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'godscar_avatar', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'sunless_chapel_seraph', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[寂]',
    mapX: 9,
    mapY: 0,
    guardianHints: {
      creature: '戰後寂地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '戰後寂地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '戰後寂地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

moonlit_fen_reed_gate: {
    id: 'moonlit_fen_reed_gate',
    name: '蘆葦入口',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_reed_gate.png',
    imagePrompt: '蘆葦入口 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain water, clear lantern light',
    description:
      '蘆葦入口位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'east', targetRoomId: 'moonlit_fen_moonflower_bank', description: '月花岸在東側' },
      { direction: 'north', targetRoomId: 'moonlit_fen_firefly_pool', description: '螢火池在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'moonlit_reed_sprite', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '蘆葦入口的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蘆葦入口的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蘆葦入口保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_moonflower_bank: {
    id: 'moonlit_fen_moonflower_bank',
    name: '月花岸',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_moonflower_bank.png',
    imagePrompt: '月花岸 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '月花岸位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_reed_gate', description: '月花岸回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'moonlit_fen_silver_mire', description: '銀泥沼在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_fishing_cut', description: '釣水缺口向南延伸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'moonflower_mantis', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'moonlit_reed_sprite', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[花]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '月花岸的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月花岸的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月花岸保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_firefly_pool: {
    id: 'moonlit_fen_firefly_pool',
    name: '螢火池',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_firefly_pool.png',
    imagePrompt: '螢火池 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '螢火池位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'south', targetRoomId: 'moonlit_fen_reed_gate', description: '螢火池回到蘆葦入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_willow_hush', description: '靜柳叢在東側' },
    ],
    monsters: [
      { monsterId: 'firefly_lantern_swarm', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'moonlit_reed_sprite', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[螢]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '螢火池的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '螢火池的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '螢火池保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_willow_hush: {
    id: 'moonlit_fen_willow_hush',
    name: '靜柳叢',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_willow_hush.png',
    imagePrompt: '靜柳叢 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '靜柳叢位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_firefly_pool', description: '靜柳叢回到螢火池' },
      { direction: 'east', targetRoomId: 'moonlit_fen_glimmer_ford', description: '微光淺灘在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_silver_mire', description: '南側靜柳叢沿露出水面的柳根路斜落，穿過銀霧水洼與倒影草線抵達銀泥沼', edgeKind: 'distant_route', edgeNote: '靜柳叢到銀泥沼需沿柳根路與倒影草線斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'willow_whisper_root', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'moonlit_reed_sprite', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[柳]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '靜柳叢的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '靜柳叢的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '靜柳叢保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_silver_mire: {
    id: 'moonlit_fen_silver_mire',
    name: '銀泥沼',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_silver_mire.png',
    imagePrompt: '銀泥沼 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '銀泥沼位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_moonflower_bank', description: '銀泥沼回到月花岸' },
      { direction: 'north', targetRoomId: 'moonlit_fen_willow_hush', description: '北側銀泥沼沿倒影草線上行，穿過銀霧水洼與露根水道回到靜柳叢', edgeKind: 'distant_route', edgeNote: '銀泥沼回靜柳叢需沿倒影草線與露根水道上行，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_frog_choir', description: '蛙鳴洲在東側' },
    ],
    monsters: [
      { monsterId: 'silver_mire_sludge', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'willow_whisper_root', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[泥]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '銀泥沼的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '銀泥沼的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '銀泥沼保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_fishing_cut: {
    id: 'moonlit_fen_fishing_cut',
    name: '釣水缺口',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_fishing_cut.png',
    imagePrompt: '釣水缺口 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '釣水缺口位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'north', targetRoomId: 'moonlit_fen_moonflower_bank', description: '釣水缺口回到月花岸', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_mosquito_haze', description: '蚊霧溝在東側' },
    ],
    monsters: [
      { monsterId: 'silver_mire_sludge', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'blackwater_leech_bloom', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[釣]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '釣水缺口的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '釣水缺口的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '釣水缺口保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_glimmer_ford: {
    id: 'moonlit_fen_glimmer_ford',
    name: '微光淺灘',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_glimmer_ford.png',
    imagePrompt: '微光淺灘 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '微光淺灘位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_willow_hush', description: '微光淺灘回到靜柳叢' },
      { direction: 'east', targetRoomId: 'moonlit_fen_night_bloom_grove', description: '夜花小林在東側' },
    ],
    monsters: [
      { monsterId: 'firefly_lantern_swarm', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'silver_mire_sludge', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[灘]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '微光淺灘的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '微光淺灘的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '微光淺灘保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_frog_choir: {
    id: 'moonlit_fen_frog_choir',
    name: '蛙鳴洲',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_frog_choir.png',
    imagePrompt: '蛙鳴洲 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '蛙鳴洲位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_silver_mire', description: '蛙鳴洲回到銀泥沼' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lantern_moss', description: '燈苔坡在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_mosquito_haze', description: '南側蛙鳴洲沿濕草道斜落，穿過蛙卵淺灣、月影水痕與銀蚊霧帶抵達蚊霧溝', edgeKind: 'distant_route', edgeNote: '蛙鳴洲到蚊霧溝需沿濕草道與銀蚊霧帶斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'blackwater_leech_bloom', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'silver_mire_sludge', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[蛙]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '蛙鳴洲的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蛙鳴洲的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蛙鳴洲保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_mosquito_haze: {
    id: 'moonlit_fen_mosquito_haze',
    name: '蚊霧溝',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_mosquito_haze.png',
    imagePrompt: '蚊霧溝 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '蚊霧溝位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_fishing_cut', description: '蚊霧溝回到釣水缺口' },
      { direction: 'north', targetRoomId: 'moonlit_fen_frog_choir', description: '北側蚊霧溝沿銀蚊霧帶回穿，踏過月影水痕、蛙卵淺灣與濕草道回到蛙鳴洲', edgeKind: 'distant_route', edgeNote: '蚊霧溝回蛙鳴洲需沿銀蚊霧帶與濕草道回穿，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_blackwater_run', description: '黑水流在東側' },
    ],
    monsters: [
      { monsterId: 'firefly_lantern_swarm', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'blackwater_leech_bloom', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '蚊霧溝的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蚊霧溝的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蚊霧溝保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_night_bloom_grove: {
    id: 'moonlit_fen_night_bloom_grove',
    name: '夜花小林',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_night_bloom_grove.png',
    imagePrompt: '夜花小林 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '夜花小林位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_glimmer_ford', description: '夜花小林回到微光淺灘' },
      { direction: 'east', targetRoomId: 'moonlit_fen_fae_ring', description: '妖光環在東側' },
    ],
    monsters: [
      { monsterId: 'moonflower_mantis', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'willow_whisper_root', maxCount: 1, respawnSeconds: 100 },
    ],
    mapSymbol: '[夜]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '夜花小林的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '夜花小林的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '夜花小林保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_lantern_moss: {
    id: 'moonlit_fen_lantern_moss',
    name: '燈苔坡',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_lantern_moss.png',
    imagePrompt: '燈苔坡 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '燈苔坡位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_frog_choir', description: '燈苔坡回到蛙鳴洲' },
      { direction: 'north', targetRoomId: 'moonlit_fen_fae_ring', description: '苔光路通往妖光環', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_halfmoon_pond', description: '半月池在東側' },
    ],
    monsters: [
      { monsterId: 'willow_whisper_root', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'firefly_lantern_swarm', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[苔]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '燈苔坡的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '燈苔坡的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '燈苔坡保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_blackwater_run: {
    id: 'moonlit_fen_blackwater_run',
    name: '黑水流',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_blackwater_run.png',
    imagePrompt: '黑水流 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '黑水流位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_mosquito_haze', description: '黑水流回到蚊霧溝' },
      { direction: 'east', targetRoomId: 'moonlit_fen_sunken_log_bridge', description: '沉木橋在東側' },
    ],
    monsters: [
      { monsterId: 'blackwater_leech_bloom', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'silver_mire_sludge', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '黑水流的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '黑水流的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '黑水流保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_fae_ring: {
    id: 'moonlit_fen_fae_ring',
    name: '妖光環',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_fae_ring.png',
    imagePrompt: '妖光環 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '妖光環位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_night_bloom_grove', description: '妖光環回到夜花小林' },
      { direction: 'south', targetRoomId: 'moonlit_fen_lantern_moss', description: '苔光路回到燈苔坡', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_moonwell', description: '月井在東側' },
    ],
    monsters: [
      { monsterId: 'fae_ring_trickster', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'moonflower_mantis', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[妖]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '妖光環的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '妖光環的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '妖光環保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_halfmoon_pond: {
    id: 'moonlit_fen_halfmoon_pond',
    name: '半月池',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_halfmoon_pond.png',
    imagePrompt: '半月池 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '半月池位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_lantern_moss', description: '半月池回到燈苔坡' },
      { direction: 'east', targetRoomId: 'moonlit_fen_white_reed_maze', description: '白蘆迷道在東側' },
    ],
    monsters: [
      { monsterId: 'blackwater_leech_bloom', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'firefly_lantern_swarm', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[半]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '半月池的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '半月池的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '半月池保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_sunken_log_bridge: {
    id: 'moonlit_fen_sunken_log_bridge',
    name: '沉木橋',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_sunken_log_bridge.png',
    imagePrompt: '沉木橋 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '沉木橋位於月光濕地的銀色水道與夜花叢之間，北側半沉木支脈連向黑水汊道，東側舊舟營仍有微弱槳影。水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'north', targetRoomId: 'moonlit_fen_fill_18_13', description: '北側沉木支脈沿黑水汊道上行，回到月沼北汊', edgeKind: 'distant_route', edgeNote: '沉木橋北返月沼北汊需沿半沉木支脈繞過黑水汊道，實際路程長於相鄰一格。' },
      { direction: 'west', targetRoomId: 'moonlit_fen_blackwater_run', description: '沉木橋回到黑水流' },
      { direction: 'east', targetRoomId: 'moonlit_fen_old_canoe_camp', description: '舊舟營在東側' },
    ],
    monsters: [
      { monsterId: 'white_reed_stalker', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'blackwater_leech_bloom', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '沉木橋的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '沉木橋的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '沉木橋保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_moonwell: {
    id: 'moonlit_fen_moonwell',
    name: '月井',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_moonwell.png',
    imagePrompt: '月井 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '月井位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_fae_ring', description: '月井回到妖光環' },
      { direction: 'south', targetRoomId: 'moonlit_fen_white_reed_maze', description: '南側月井沿井邊濕石路斜落，穿過月影水紋與白蘆迴圈入口抵達白蘆迷道', edgeKind: 'distant_route', edgeNote: '月井到白蘆迷道需沿井邊濕石路與白蘆迴圈斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'fae_ring_trickster', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'dreamwater_lunar_guardian', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[井]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '月井的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月井的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月井保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_white_reed_maze: {
    id: 'moonlit_fen_white_reed_maze',
    name: '白蘆迷道',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_white_reed_maze.png',
    imagePrompt: '白蘆迷道 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '白蘆迷道位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_halfmoon_pond', description: '白蘆迷道回到半月池' },
      { direction: 'north', targetRoomId: 'moonlit_fen_moonwell', description: '北側白蘆迷道沿白蘆迴圈折返，穿過月影水紋與井邊濕石路回到月井', edgeKind: 'distant_route', edgeNote: '白蘆迷道回月井需沿白蘆迴圈與井邊濕石路折返，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lunar_altar', description: '月沼祭壇在東側' },
    ],
    monsters: [
      { monsterId: 'white_reed_stalker', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'moonlit_reed_sprite', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[蘆]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '白蘆迷道的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '白蘆迷道的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '白蘆迷道保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_old_canoe_camp: {
    id: 'moonlit_fen_old_canoe_camp',
    name: '舊舟營',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_old_canoe_camp.png',
    imagePrompt: '舊舟營 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '舊舟營位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_sunken_log_bridge', description: '舊舟營回到沉木橋' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lunar_altar', description: '東側舊舟營沿半沉舟痕橫渡，繞過黑水倒影與白蘆暗汊抵達月沼祭壇', edgeKind: 'distant_route', edgeNote: '舊舟營到月沼祭壇需沿半沉舟痕與白蘆暗汊橫渡，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'white_reed_stalker', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'blackwater_leech_bloom', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[舟]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '舊舟營的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '舊舟營的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '舊舟營保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_lunar_altar: {
    id: 'moonlit_fen_lunar_altar',
    name: '月沼祭壇',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_lunar_altar.png',
    imagePrompt: '月沼祭壇 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '月沼祭壇位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔；莎蘭月影女神的夜晚、秘密與夢境徽記刻在濕冷石面上。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。南側舟痕被月沼水面吞成倒影，真正路徑只能從舊舟營划入祭壇。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_white_reed_maze', description: '月沼祭壇回到白蘆迷道' },
      { direction: 'east', targetRoomId: 'moonlit_fen_dreamwater_core', description: '夢水核心在東側' },
    ],
    monsters: [
      { monsterId: 'fae_ring_trickster', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'white_reed_stalker', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[壇]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '月沼祭壇的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月沼祭壇的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月沼祭壇保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

moonlit_fen_dreamwater_core: {
    id: 'moonlit_fen_dreamwater_core',
    name: '夢水核心',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_dreamwater_core.png',
    imagePrompt: '夢水核心 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain water, clear lantern light',
    description:
      '夢水核心位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_lunar_altar', description: '夢水核心回到月沼祭壇' },
      {
        direction: 'east',
        targetRoomId: 'marsh_of_mirrors_fill_24_15',
        description: '東側夢水邊界穿過銀霧與鏡沼棧道，接入鏡沼外緣',
        edgeKind: 'distant_route',
        edgeNote: '夢水核心到鏡沼棧道跨越月光濕地與鏡沼邊界，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'dreamwater_lunar_guardian', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'fae_ring_trickster', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'white_reed_stalker', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '夢水核心的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '夢水核心的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '夢水核心保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

pilgrim_road_waygate: {
    id: 'pilgrim_road_waygate',
    name: '古道起點',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_waygate.png',
    imagePrompt: '古道起點 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '古道起點位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'east', targetRoomId: 'pilgrim_road_worn_flags', description: '舊旗石路通往東側' },
      { direction: 'north', targetRoomId: 'pilgrim_road_milestone_cairn', description: '里程石堆在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'road_dust_stray', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '古道起點的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '古道起點的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '古道起點保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_worn_flags: {
    id: 'pilgrim_road_worn_flags',
    name: '舊旗石路',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_worn_flags.png',
    imagePrompt: '舊旗石路 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '舊旗石路位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_waygate', description: '舊旗石路回到古道起點' },
      { direction: 'east', targetRoomId: 'pilgrim_road_caravan_rut', description: '車轍路在東側' },
      { direction: 'south', targetRoomId: 'pilgrim_road_dry_well', description: '乾井在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'road_dust_stray', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'milestone_crow_herald', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[旗]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '舊旗石路的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '舊旗石路的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '舊旗石路保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_milestone_cairn: {
    id: 'pilgrim_road_milestone_cairn',
    name: '里程石堆',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_milestone_cairn.png',
    imagePrompt: '里程石堆 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '里程石堆位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'south', targetRoomId: 'pilgrim_road_waygate', description: '里程石堆回到古道起點', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_bell_shrine', description: '鐘鈴小祠在東側' },
    ],
    monsters: [
      { monsterId: 'milestone_crow_herald', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'road_dust_stray', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[石]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '里程石堆的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '里程石堆的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '里程石堆保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_bell_shrine: {
    id: 'pilgrim_road_bell_shrine',
    name: '鐘鈴小祠',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_bell_shrine.png',
    imagePrompt: '鐘鈴小祠 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '鐘鈴小祠位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_milestone_cairn', description: '鐘鈴小祠回到里程石堆' },
      { direction: 'east', targetRoomId: 'pilgrim_road_prayer_steps', description: '祈願階在東側' },
      { direction: 'south', targetRoomId: 'pilgrim_road_caravan_rut', description: '南側鐘鈴小祠沿破碎祈願石階斜落，穿過白石路標與深車轍抵達商隊車轍', edgeKind: 'distant_route', edgeNote: '鐘鈴小祠到商隊車轍需沿祈願石階與深車轍斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'shrine_bell_wraith', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'milestone_crow_herald', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[祠]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鐘鈴小祠的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '鐘鈴小祠的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '鐘鈴小祠保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_caravan_rut: {
    id: 'pilgrim_road_caravan_rut',
    name: '商隊車轍',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_caravan_rut.png',
    imagePrompt: '商隊車轍 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '商隊車轍位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_worn_flags', description: '商隊車轍回到舊旗石路' },
      { direction: 'north', targetRoomId: 'pilgrim_road_bell_shrine', description: '北側商隊車轍沿深車轍上行，穿過白石路標與破碎祈願石階回到鐘鈴小祠', edgeKind: 'distant_route', edgeNote: '商隊車轍回鐘鈴小祠需沿深車轍與祈願石階上行，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_abandoned_inn', description: '廢棄旅舍在東側' },
    ],
    monsters: [
      { monsterId: 'caravan_rut_cutpurse', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'road_dust_stray', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[車]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '商隊車轍的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '商隊車轍的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '商隊車轍保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_dry_well: {
    id: 'pilgrim_road_dry_well',
    name: '乾井',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_dry_well.png',
    imagePrompt: '乾井 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '乾井位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'north', targetRoomId: 'pilgrim_road_worn_flags', description: '乾井回到舊旗石路', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_thorn_cut', description: '荊棘缺口在東側' },
    ],
    monsters: [
      { monsterId: 'drywell_ambusher', maxCount: 1, respawnSeconds: 110 },
      { monsterId: 'caravan_rut_cutpurse', maxCount: 1, respawnSeconds: 95 },
    ],
    mapSymbol: '[井]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '乾井的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '乾井的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '乾井保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_prayer_steps: {
    id: 'pilgrim_road_prayer_steps',
    name: '祈願階',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_prayer_steps.png',
    imagePrompt: '祈願階 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '祈願階位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_bell_shrine', description: '祈願階回到鐘鈴小祠' },
      { direction: 'east', targetRoomId: 'pilgrim_road_saint_bridge', description: '聖徒橋在東側' },
    ],
    monsters: [
      { monsterId: 'shrine_bell_wraith', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'milestone_crow_herald', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '祈願階的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '祈願階的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '祈願階保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_abandoned_inn: {
    id: 'pilgrim_road_abandoned_inn',
    name: '廢棄旅舍',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_abandoned_inn.png',
    imagePrompt: '廢棄旅舍 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '廢棄旅舍位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_caravan_rut', description: '廢棄旅舍回到商隊車轍' },
      { direction: 'east', targetRoomId: 'pilgrim_road_ambush_bend', description: '伏擊彎道在東側' },
      { direction: 'south', targetRoomId: 'pilgrim_road_thorn_cut', description: '南側廢棄旅舍從坍塌後門下切，穿過乾草貨棚與荊棘暗口抵達荊棘缺口', edgeKind: 'distant_route', edgeNote: '廢棄旅舍到荊棘缺口需穿過後門貨棚與荊棘暗口，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'caravan_rut_cutpurse', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'drywell_ambusher', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[旅]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '廢棄旅舍的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '廢棄旅舍的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '廢棄旅舍保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_thorn_cut: {
    id: 'pilgrim_road_thorn_cut',
    name: '荊棘缺口',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_thorn_cut.png',
    imagePrompt: '荊棘缺口 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '荊棘缺口位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_dry_well', description: '荊棘缺口回到乾井' },
      { direction: 'north', targetRoomId: 'pilgrim_road_abandoned_inn', description: '北側荊棘缺口沿荊棘暗口回穿，越過乾草貨棚與坍塌後門回到廢棄旅舍', edgeKind: 'distant_route', edgeNote: '荊棘缺口回廢棄旅舍需沿荊棘暗口與後門貨棚回穿，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_smuggler_cache', description: '走私藏點在東側' },
    ],
    monsters: [
      { monsterId: 'drywell_ambusher', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'caravan_rut_cutpurse', maxCount: 1, respawnSeconds: 95 },
    ],
    mapSymbol: '[棘]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '荊棘缺口的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '荊棘缺口的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '荊棘缺口保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },
};
