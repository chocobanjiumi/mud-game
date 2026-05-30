import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_012: Record<string, RoomDef> = {
lost_capital_judgment_hall: {
    id: 'lost_capital_judgment_hall',
    name: '審判廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_judgment_hall.png',
    imagePrompt: '審判廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '審判廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_civic_archive', description: '卷宗廊回到檔案館' },
      { direction: 'east', targetRoomId: 'lost_capital_senate_ruin', description: '法槌路通往議政廢廳' },
      { direction: 'south', targetRoomId: 'lost_capital_mirror_court', description: '判席階通往鏡庭' },
    ],
    monsters: [
      { monsterId: 'judgment_hall_inquisitor', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'frozen_market_duelist', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[審]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '審判廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '審判廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '審判廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_mirror_court: {
    id: 'lost_capital_mirror_court',
    name: '鏡庭',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_mirror_court.png',
    imagePrompt: '鏡庭 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '鏡庭位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_royal_canal', description: '水鏡路回到王家水道' },
      { direction: 'north', targetRoomId: 'lost_capital_judgment_hall', description: '判席階回到審判廳' },
      { direction: 'east', targetRoomId: 'lost_capital_coronation_stairs', description: '倒影階通往加冕階' },
    ],
    monsters: [
      { monsterId: 'frozen_market_duelist', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'archive_lich_scribe', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[鏡]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '鏡庭的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '鏡庭的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '鏡庭保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_ashen_barracks: {
    id: 'lost_capital_ashen_barracks',
    name: '灰兵營',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_ashen_barracks.png',
    imagePrompt: '灰兵營 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '灰兵營位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'north', targetRoomId: 'lost_capital_statue_garden', description: '軍靴印回到雕像庭園' },
      { direction: 'east', targetRoomId: 'lost_capital_armory_vault', description: '鐵門通往軍械庫' },
    ],
    monsters: [
      { monsterId: 'ashen_barracks_commander', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'silent_avenue_guard', maxCount: 3, respawnSeconds: 170 },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '灰兵營的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '灰兵營的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '灰兵營保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_senate_ruin: {
    id: 'lost_capital_senate_ruin',
    name: '議政廢廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_senate_ruin.png',
    imagePrompt: '議政廢廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '議政廢廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_judgment_hall', description: '法槌路回到審判廳' },
      { direction: 'east', targetRoomId: 'lost_capital_sun_chapel', description: '碎柱路通往日輪禮拜堂' },
      { direction: 'south', targetRoomId: 'lost_capital_coronation_stairs', description: '議席階通往加冕階' },
    ],
    monsters: [
      { monsterId: 'archive_lich_scribe', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'judgment_hall_inquisitor', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[議]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '議政廢廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '議政廢廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '議政廢廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_coronation_stairs: {
    id: 'lost_capital_coronation_stairs',
    name: '加冕階',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_coronation_stairs.png',
    imagePrompt: '加冕階 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '加冕階位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_mirror_court', description: '倒影階回到鏡庭' },
      { direction: 'north', targetRoomId: 'lost_capital_senate_ruin', description: '議席階回到議政廢廳' },
      { direction: 'east', targetRoomId: 'lost_capital_throne_anteroom', description: '紅毯通往王座前廳' },
    ],
    monsters: [
      { monsterId: 'ashen_barracks_commander', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'royal_canal_sentinel', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[冠]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '加冕階的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '加冕階的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '加冕階保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_armory_vault: {
    id: 'lost_capital_armory_vault',
    name: '軍械庫',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_armory_vault.png',
    imagePrompt: '軍械庫 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '軍械庫位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_ashen_barracks', description: '鐵門回到灰兵營' },
      { direction: 'east', targetRoomId: 'lost_capital_crown_crypt', description: '封劍路通往王冠墓室' },
    ],
    monsters: [
      { monsterId: 'ashen_barracks_commander', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'clockwork_gargoyle', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[械]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '軍械庫的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '軍械庫的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '軍械庫保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_sun_chapel: {
    id: 'lost_capital_sun_chapel',
    name: '日輪禮拜堂',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_sun_chapel.png',
    imagePrompt: '日輪禮拜堂 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '日輪禮拜堂位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_senate_ruin', description: '碎柱路回到議政廢廳' },
      { direction: 'south', targetRoomId: 'lost_capital_throne_anteroom', description: '光階通往王座前廳' },
      { direction: 'east', targetRoomId: 'lost_capital_timefracture_gallery', description: '裂光廊通往時裂長廊' },
    ],
    monsters: [
      { monsterId: 'sun_chapel_seraph', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'clockwork_gargoyle', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[堂]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '日輪禮拜堂的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '日輪禮拜堂的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '日輪禮拜堂保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_throne_anteroom: {
    id: 'lost_capital_throne_anteroom',
    name: '王座前廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_throne_anteroom.png',
    imagePrompt: '王座前廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '王座前廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_coronation_stairs', description: '紅毯回到加冕階' },
      { direction: 'north', targetRoomId: 'lost_capital_sun_chapel', description: '光階回到日輪禮拜堂' },
      { direction: 'east', targetRoomId: 'lost_capital_empty_throne', description: '黑金門通往空王座' },
    ],
    monsters: [
      { monsterId: 'ashen_barracks_commander', maxCount: 1, respawnSeconds: 250 },
      { monsterId: 'judgment_hall_inquisitor', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'silent_avenue_guard', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[前]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '王座前廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王座前廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王座前廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_crown_crypt: {
    id: 'lost_capital_crown_crypt',
    name: '王冠墓室',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_crown_crypt.png',
    imagePrompt: '王冠墓室 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '王冠墓室位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_armory_vault', description: '封劍路回到軍械庫' },
      { direction: 'east', targetRoomId: 'lost_capital_empty_throne', description: '墓道通往空王座' },
    ],
    monsters: [
      { monsterId: 'archive_lich_scribe', maxCount: 1, respawnSeconds: 220 },
      { monsterId: 'sun_chapel_seraph', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[墓]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '王冠墓室的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王冠墓室的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王冠墓室保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_timefracture_gallery: {
    id: 'lost_capital_timefracture_gallery',
    name: '時裂長廊',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_timefracture_gallery.png',
    imagePrompt: '時裂長廊 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '時裂長廊位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_sun_chapel', description: '裂光廊回到日輪禮拜堂' },
      { direction: 'south', targetRoomId: 'lost_capital_empty_throne', description: '斷時階通往空王座' },
    ],
    monsters: [
      { monsterId: 'timefracture_regent', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'frozen_market_duelist', maxCount: 3, respawnSeconds: 180 },
    ],
    mapSymbol: '[時]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '時裂長廊的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '時裂長廊的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '時裂長廊保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

lost_capital_empty_throne: {
    id: 'lost_capital_empty_throne',
    name: '空王座',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_empty_throne.png',
    imagePrompt: '空王座 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '空王座位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，旅人可以 觀察 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。南側墓道仍能聽見王冠墓室的回音，但王座前的時間裂縫會封住那條退路，只能從王冠墓室墓道進入此處。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_throne_anteroom', description: '黑金門回到王座前廳' },
      { direction: 'north', targetRoomId: 'lost_capital_timefracture_gallery', description: '斷時階回到時裂長廊' },
    ],
    monsters: [
      { monsterId: 'empty_throne_sovereign', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'timefracture_regent', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'ashen_barracks_commander', maxCount: 1, respawnSeconds: 250 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '空王座的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '空王座的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '空王座保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

sky_isles_lift_dock: {
    id: 'sky_isles_lift_dock',
    name: '升空碼頭',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_lift_dock.png',
    imagePrompt: '升空碼頭 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain sea, clear lantern light',
    description:
      '升空碼頭位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'east', targetRoomId: 'sky_isles_chain_bridge', description: '鐵鏈橋通往第一座浮島' },
      { direction: 'north', targetRoomId: 'sky_isles_cloudwatch_post', description: '雲哨索道通往哨站' },
    ],
    monsters: [
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '升空碼頭的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '升空碼頭的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '升空碼頭保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_chain_bridge: {
    id: 'sky_isles_chain_bridge',
    name: '鐵鏈雲橋',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_chain_bridge.png',
    imagePrompt: '鐵鏈雲橋 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '鐵鏈雲橋位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_lift_dock', description: '鐵鏈橋回到升空碼頭' },
      { direction: 'east', targetRoomId: 'sky_isles_rune_anchor', description: '符文錨臺固定著下一座島' },
      { direction: 'south', targetRoomId: 'sky_isles_fallen_span', description: '斷橋殘段向下垂落' },
    ],
    monsters: [
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鐵鏈雲橋的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '鐵鏈雲橋的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '鐵鏈雲橋保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_cloudwatch_post: {
    id: 'sky_isles_cloudwatch_post',
    name: '雲哨站',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_cloudwatch_post.png',
    imagePrompt: '雲哨站 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '雲哨站位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'south', targetRoomId: 'sky_isles_lift_dock', description: '索道回到升空碼頭' },
      { direction: 'east', targetRoomId: 'sky_isles_gale_meadow', description: '風草坡通往雲上草甸' },
    ],
    monsters: [
      { monsterId: 'cloudsilver_kite', maxCount: 3, respawnSeconds: 150 },
      { monsterId: 'rune_anchor_golem', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[哨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雲哨站的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲哨站的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲哨站保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_gale_meadow: {
    id: 'sky_isles_gale_meadow',
    name: '雲上草甸',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_gale_meadow.png',
    imagePrompt: '雲上草甸 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain sea, clear lantern light',
    description:
      '雲上草甸位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_cloudwatch_post', description: '風草坡回到雲哨站' },
      { direction: 'east', targetRoomId: 'sky_isles_sunlit_shrine', description: '白光路通往日照小祠' },
      { direction: 'south', targetRoomId: 'sky_isles_rune_anchor', description: '符文路落向錨臺' },
    ],
    monsters: [
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'thunder_nest_roc', maxCount: 1, respawnSeconds: 200 },
    ],
    mapSymbol: '[草]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雲上草甸的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲上草甸的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲上草甸保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_rune_anchor: {
    id: 'sky_isles_rune_anchor',
    name: '符文錨臺',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_rune_anchor.png',
    imagePrompt: '符文錨臺 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '符文錨臺位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_chain_bridge', description: '符文錨臺回到鐵鏈雲橋' },
      { direction: 'north', targetRoomId: 'sky_isles_gale_meadow', description: '符文路升回雲上草甸' },
      { direction: 'east', targetRoomId: 'sky_isles_prism_causeway', description: '折光堤道通往主島' },
    ],
    monsters: [
      { monsterId: 'rune_anchor_golem', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'cloudsilver_kite', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[錨]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '符文錨臺的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '符文錨臺的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '符文錨臺保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_fallen_span: {
    id: 'sky_isles_fallen_span',
    name: '墜落橋段',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_fallen_span.png',
    imagePrompt: '墜落橋段 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '墜落橋段位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'north', targetRoomId: 'sky_isles_chain_bridge', description: '斷橋殘段回到鐵鏈雲橋' },
      { direction: 'east', targetRoomId: 'sky_isles_thunder_nest', description: '羽痕通往雷鷹巢' },
    ],
    monsters: [
      { monsterId: 'thunder_nest_roc', maxCount: 1, respawnSeconds: 200 },
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[墜]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '墜落橋段的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '墜落橋段的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '墜落橋段保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_sunlit_shrine: {
    id: 'sky_isles_sunlit_shrine',
    name: '日照小祠',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_sunlit_shrine.png',
    imagePrompt: '日照小祠 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '日照小祠位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_gale_meadow', description: '白光路回到雲上草甸' },
      { direction: 'east', targetRoomId: 'sky_isles_oracle_steps', description: '祈禱階通往神諭階' },
    ],
    monsters: [
      { monsterId: 'prism_causeway_seraph', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'rune_anchor_golem', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[祠]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '日照小祠的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '日照小祠的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '日照小祠保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_prism_causeway: {
    id: 'sky_isles_prism_causeway',
    name: '折光堤道',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_prism_causeway.png',
    imagePrompt: '折光堤道 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '折光堤道位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_rune_anchor', description: '折光堤道回到符文錨臺' },
      { direction: 'east', targetRoomId: 'sky_isles_sky_market_ruin', description: '浮市殘街在前方' },
      { direction: 'north', targetRoomId: 'sky_isles_oracle_steps', description: '亮階通往神諭階' },
    ],
    monsters: [
      { monsterId: 'rune_anchor_golem', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'prism_causeway_seraph', maxCount: 1, respawnSeconds: 210 },
    ],
    mapSymbol: '[光]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '折光堤道的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '折光堤道的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '折光堤道保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_thunder_nest: {
    id: 'sky_isles_thunder_nest',
    name: '雷鷹巢島',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_thunder_nest.png',
    imagePrompt: '雷鷹巢島 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '雷鷹巢島位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_fallen_span', description: '羽痕回到墜落橋段' },
      { direction: 'east', targetRoomId: 'sky_isles_stormwell', description: '雷痕通往風暴井' },
    ],
    monsters: [
      { monsterId: 'thunder_nest_roc', maxCount: 3, respawnSeconds: 200 },
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[鷹]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '雷鷹巢島的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷鷹巢島的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雷鷹巢島保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_oracle_steps: {
    id: 'sky_isles_oracle_steps',
    name: '神諭階',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_oracle_steps.png',
    imagePrompt: '神諭階 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '神諭階位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_sunlit_shrine', description: '祈禱階回到日照小祠' },
      { direction: 'south', targetRoomId: 'sky_isles_prism_causeway', description: '亮階回到折光堤道' },
      { direction: 'east', targetRoomId: 'sky_isles_cloud_temple_gate', description: '白石階通往雲神殿門' },
    ],
    monsters: [
      { monsterId: 'prism_causeway_seraph', maxCount: 2, respawnSeconds: 210 },
      { monsterId: 'rune_anchor_golem', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[諭]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '神諭階的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '神諭階的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '神諭階保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_sky_market_ruin: {
    id: 'sky_isles_sky_market_ruin',
    name: '浮市殘街',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_sky_market_ruin.png',
    imagePrompt: '浮市殘街 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '浮市殘街位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_prism_causeway', description: '浮市街回到折光堤道' },
      { direction: 'east', targetRoomId: 'sky_isles_mirror_pool', description: '破攤路通往天鏡池' },
      { direction: 'south', targetRoomId: 'sky_isles_stormwell', description: '排雲梯通往風暴井' },
    ],
    monsters: [
      { monsterId: 'cloudsilver_kite', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'mirrorpool_luminant', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '浮市殘街的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '浮市殘街的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '浮市殘街保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_stormwell: {
    id: 'sky_isles_stormwell',
    name: '風暴井',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_stormwell.png',
    imagePrompt: '風暴井 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '風暴井位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_thunder_nest', description: '雷痕回到雷鷹巢島' },
      { direction: 'north', targetRoomId: 'sky_isles_sky_market_ruin', description: '排雲梯回到浮市殘街' },
      { direction: 'east', targetRoomId: 'sky_isles_broken_obelisk', description: '電弧路通往斷方尖碑' },
    ],
    monsters: [
      { monsterId: 'stormwell_tempest', maxCount: 2, respawnSeconds: 230 },
      { monsterId: 'thunder_nest_roc', maxCount: 1, respawnSeconds: 200 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '風暴井的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴井的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '風暴井保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_cloud_temple_gate: {
    id: 'sky_isles_cloud_temple_gate',
    name: '雲神殿門',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_cloud_temple_gate.png',
    imagePrompt: '雲神殿門 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '雲神殿門位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_oracle_steps', description: '白石階回到神諭階' },
      { direction: 'east', targetRoomId: 'sky_isles_halo_courtyard', description: '光環庭院在門後' },
      { direction: 'south', targetRoomId: 'sky_isles_mirror_pool', description: '水光階落向天鏡池' },
    ],
    monsters: [
      { monsterId: 'halo_court_arbiter', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'rune_anchor_golem', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[殿]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '雲神殿門的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲神殿門的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲神殿門保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_mirror_pool: {
    id: 'sky_isles_mirror_pool',
    name: '天鏡池',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_mirror_pool.png',
    imagePrompt: '天鏡池 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '天鏡池位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_sky_market_ruin', description: '破攤路回到浮市殘街' },
      { direction: 'north', targetRoomId: 'sky_isles_cloud_temple_gate', description: '水光階回到雲神殿門' },
      { direction: 'east', targetRoomId: 'sky_isles_halo_courtyard', description: '鏡面橋通往光環庭院' },
    ],
    monsters: [
      { monsterId: 'mirrorpool_luminant', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'stormwell_tempest', maxCount: 1, respawnSeconds: 230 },
    ],
    mapSymbol: '[鏡]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '天鏡池的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '天鏡池的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '天鏡池保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_broken_obelisk: {
    id: 'sky_isles_broken_obelisk',
    name: '斷方尖碑',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_broken_obelisk.png',
    imagePrompt: '斷方尖碑 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '斷方尖碑位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_stormwell', description: '電弧路回到風暴井' },
      { direction: 'east', targetRoomId: 'sky_isles_starfall_ledge', description: '碑影路通往星墜崖' },
    ],
    monsters: [
      { monsterId: 'obelisk_stormwarden', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'stormwell_tempest', maxCount: 2, respawnSeconds: 230 },
    ],
    mapSymbol: '[碑]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '斷方尖碑的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '斷方尖碑的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '斷方尖碑保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_halo_courtyard: {
    id: 'sky_isles_halo_courtyard',
    name: '光環庭院',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_halo_courtyard.png',
    imagePrompt: '光環庭院 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '光環庭院位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。北側雲神殿門仍在光環中映出倒影，但庭院的環形風牆只允許由神殿門進入。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_mirror_pool', description: '鏡面橋回到天鏡池' },
      { direction: 'east', targetRoomId: 'sky_isles_ascendant_bridge', description: '升天橋通往最高島' },
    ],
    monsters: [
      { monsterId: 'halo_court_arbiter', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'mirrorpool_luminant', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[環]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '光環庭院的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '光環庭院的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '光環庭院保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_starfall_ledge: {
    id: 'sky_isles_starfall_ledge',
    name: '星墜崖',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_starfall_ledge.png',
    imagePrompt: '星墜崖 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '星墜崖位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_broken_obelisk', description: '碑影路回到斷方尖碑' },
      { direction: 'east', targetRoomId: 'sky_isles_ascendant_bridge', description: '碎星路通往升天橋' },
    ],
    monsters: [
      { monsterId: 'obelisk_stormwarden', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'ascendant_drake', maxCount: 1, respawnSeconds: 1200 },
    ],
    mapSymbol: '[星]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '星墜崖的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '星墜崖的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '星墜崖保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_ascendant_bridge: {
    id: 'sky_isles_ascendant_bridge',
    name: '升天橋',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_ascendant_bridge.png',
    imagePrompt: '升天橋 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '升天橋位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。南側碎星路被上升氣流撕成單向斷橋，只能從星墜崖踏上升天橋。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_halo_courtyard', description: '升天橋回到光環庭院' },
      { direction: 'east', targetRoomId: 'sky_isles_worldboss_island', description: '風牆裂口通往世界王島' },
    ],
    monsters: [
      { monsterId: 'ascendant_drake', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'halo_court_arbiter', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[升]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '升天橋的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '升天橋的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '升天橋保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_worldboss_island: {
    id: 'sky_isles_worldboss_island',
    name: '世界王浮島',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_worldboss_island.png',
    imagePrompt: '世界王浮島 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '世界王浮島位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_ascendant_bridge', description: '風牆裂口回到升天橋' },
      { direction: 'south', targetRoomId: 'sky_isles_skycore_sanctum', description: '核心階梯通往天空核心' },
    ],
    monsters: [
      { monsterId: 'ascendant_drake', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'obelisk_stormwarden', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'thunder_nest_roc', maxCount: 2, respawnSeconds: 200 },
    ],
    mapSymbol: '[王]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '世界王浮島的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '世界王浮島的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '世界王浮島保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

sky_isles_skycore_sanctum: {
    id: 'sky_isles_skycore_sanctum',
    name: '天空核心聖所',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_skycore_sanctum.png',
    imagePrompt: '天空核心聖所 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain sea, clear lantern light',
    description:
      '天空核心聖所位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，旅人可以 觀察 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片',
    exits: [
      { direction: 'north', targetRoomId: 'sky_isles_worldboss_island', description: '核心階梯回到世界王浮島' },
    ],
    monsters: [
      { monsterId: 'skycore_archon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'halo_court_arbiter', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'rune_anchor_golem', maxCount: 2, respawnSeconds: 190 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: -1,
    guardianHints: {
      creature: '天空核心聖所的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '天空核心聖所的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '天空核心聖所保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

deepsea_temple_tide_gate: {
    id: 'deepsea_temple_tide_gate',
    name: '潮汐石門',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tide_gate.png',
    imagePrompt: '潮汐石門 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '潮汐石門位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'east', targetRoomId: 'deepsea_temple_bluefire_hall', description: '藍火長廊通往神殿內部' },
      { direction: 'north', targetRoomId: 'deepsea_temple_coral_watch', description: '珊瑚階通往外哨' },
    ],
    monsters: [
      { monsterId: 'bluefire_murloc_guard', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '潮汐石門的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮汐石門的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮汐石門保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_bluefire_hall: {
    id: 'deepsea_temple_bluefire_hall',
    name: '藍火長廊',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_bluefire_hall.png',
    imagePrompt: '藍火長廊 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '藍火長廊位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_tide_gate', description: '藍火長廊回到潮汐石門' },
      { direction: 'east', targetRoomId: 'deepsea_temple_shell_court', description: '貝殼庭院在前方' },
      { direction: 'south', targetRoomId: 'deepsea_temple_silt_stairs', description: '淤泥階梯下沉' },
    ],
    monsters: [
      { monsterId: 'bluefire_murloc_guard', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'choir_jelly_wraith', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[火]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '藍火長廊的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '藍火長廊的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '藍火長廊保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_coral_watch: {
    id: 'deepsea_temple_coral_watch',
    name: '珊瑚外哨',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_coral_watch.png',
    imagePrompt: '珊瑚外哨 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '珊瑚外哨位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'south', targetRoomId: 'deepsea_temple_tide_gate', description: '珊瑚階回到潮汐石門' },
      { direction: 'east', targetRoomId: 'deepsea_temple_choir_reef', description: '歌礁回音在東側' },
    ],
    monsters: [
      { monsterId: 'shellcourt_crab_guard', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'bluefire_murloc_guard', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[哨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '珊瑚外哨的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '珊瑚外哨的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '珊瑚外哨保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_choir_reef: {
    id: 'deepsea_temple_choir_reef',
    name: '回音歌礁',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_choir_reef.png',
    imagePrompt: '回音歌礁 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '回音歌礁位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_coral_watch', description: '歌礁回到珊瑚外哨' },
      { direction: 'east', targetRoomId: 'deepsea_temple_moonpool_nave', description: '月池中殿在前方' },
      { direction: 'south', targetRoomId: 'deepsea_temple_shell_court', description: '貝光路落向庭院' },
    ],
    monsters: [
      { monsterId: 'choir_jelly_wraith', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'silt_tide_serpent', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[歌]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '回音歌礁的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '回音歌礁的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '回音歌礁保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_shell_court: {
    id: 'deepsea_temple_shell_court',
    name: '貝殼庭院',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_shell_court.png',
    imagePrompt: '貝殼庭院 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '貝殼庭院位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_bluefire_hall', description: '貝殼庭院回到藍火長廊' },
      { direction: 'north', targetRoomId: 'deepsea_temple_choir_reef', description: '貝光路回到回音歌礁' },
      { direction: 'east', targetRoomId: 'deepsea_temple_drowned_library', description: '水封書庫在東側' },
    ],
    monsters: [
      { monsterId: 'shellcourt_crab_guard', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'bluefire_murloc_guard', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[庭]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '貝殼庭院的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '貝殼庭院的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '貝殼庭院保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_silt_stairs: {
    id: 'deepsea_temple_silt_stairs',
    name: '淤泥階梯',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_silt_stairs.png',
    imagePrompt: '淤泥階梯 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '淤泥階梯位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'north', targetRoomId: 'deepsea_temple_bluefire_hall', description: '淤泥階梯回到藍火長廊' },
      { direction: 'east', targetRoomId: 'deepsea_temple_darkcurrent_canal', description: '暗流水道向東延伸' },
    ],
    monsters: [
      { monsterId: 'silt_tide_serpent', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shellcourt_crab_guard', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[階]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '淤泥階梯的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '淤泥階梯的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '淤泥階梯保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_moonpool_nave: {
    id: 'deepsea_temple_moonpool_nave',
    name: '月池中殿',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_moonpool_nave.png',
    imagePrompt: '月池中殿 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '月池中殿位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_choir_reef', description: '月池回到回音歌礁' },
      { direction: 'south', targetRoomId: 'deepsea_temple_drowned_library', description: '石階落向水封書庫' },
      { direction: 'east', targetRoomId: 'deepsea_temple_pearl_oratory', description: '珍珠祈室在東側' },
    ],
    monsters: [
      { monsterId: 'choir_jelly_wraith', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'bluefire_murloc_guard', maxCount: 2, respawnSeconds: 150 },
    ],
    mapSymbol: '[月]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '月池中殿的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '月池中殿的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '月池中殿保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_drowned_library: {
    id: 'deepsea_temple_drowned_library',
    name: '水封書庫',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_drowned_library.png',
    imagePrompt: '水封書庫 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '水封書庫位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_shell_court', description: '水封書庫回到貝殼庭院' },
      { direction: 'north', targetRoomId: 'deepsea_temple_moonpool_nave', description: '石階回到月池中殿' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tideclock_room', description: '潮鐘室在東側' },
    ],
    monsters: [
      { monsterId: 'drowned_library_scribe', maxCount: 2, respawnSeconds: 190 },
      { monsterId: 'choir_jelly_wraith', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[書]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '水封書庫的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '水封書庫的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '水封書庫保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_darkcurrent_canal: {
    id: 'deepsea_temple_darkcurrent_canal',
    name: '暗流水道',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_darkcurrent_canal.png',
    imagePrompt: '暗流水道 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '暗流水道位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_silt_stairs', description: '暗流水道回到淤泥階梯' },
      { direction: 'east', targetRoomId: 'deepsea_temple_bone_anchor', description: '骨錨臺在暗流盡頭' },
      { direction: 'north', targetRoomId: 'deepsea_temple_drowned_library', description: '排水井上接書庫' },
    ],
    monsters: [
      { monsterId: 'silt_tide_serpent', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'bluefire_murloc_guard', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '暗流水道的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '暗流水道的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '暗流水道保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_pearl_oratory: {
    id: 'deepsea_temple_pearl_oratory',
    name: '珍珠祈室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_pearl_oratory.png',
    imagePrompt: '珍珠祈室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '珍珠祈室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_moonpool_nave', description: '珍珠祈室回到月池中殿' },
      { direction: 'east', targetRoomId: 'deepsea_temple_statue_trench', description: '神像裂溝在東側' },
    ],
    monsters: [
      { monsterId: 'pearl_oracle_shade', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'choir_jelly_wraith', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[珠]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '珍珠祈室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '珍珠祈室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '珍珠祈室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_tideclock_room: {
    id: 'deepsea_temple_tideclock_room',
    name: '潮鐘室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tideclock_room.png',
    imagePrompt: '潮鐘室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '潮鐘室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_drowned_library', description: '潮鐘室回到水封書庫' },
      { direction: 'east', targetRoomId: 'deepsea_temple_abyssal_garden', description: '深淵花園在東側' },
      { direction: 'south', targetRoomId: 'deepsea_temple_bone_anchor', description: '潮鏈垂向骨錨臺' },
    ],
    monsters: [
      { monsterId: 'tideclock_hydra_larva', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'drowned_library_scribe', maxCount: 1, respawnSeconds: 190 },
    ],
    mapSymbol: '[鐘]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '潮鐘室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮鐘室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮鐘室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_bone_anchor: {
    id: 'deepsea_temple_bone_anchor',
    name: '骨錨臺',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_bone_anchor.png',
    imagePrompt: '骨錨臺 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '骨錨臺位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_darkcurrent_canal', description: '骨錨臺回到暗流水道' },
      { direction: 'north', targetRoomId: 'deepsea_temple_tideclock_room', description: '潮鏈回到潮鐘室' },
      { direction: 'east', targetRoomId: 'deepsea_temple_whalebone_bridge', description: '鯨骨橋向東跨出' },
    ],
    monsters: [
      { monsterId: 'shellcourt_crab_guard', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'whalebone_anchor_colossus', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[錨]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '骨錨臺的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '骨錨臺的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '骨錨臺保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_statue_trench: {
    id: 'deepsea_temple_statue_trench',
    name: '神像裂溝',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_statue_trench.png',
    imagePrompt: '神像裂溝 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '神像裂溝位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_pearl_oratory', description: '神像裂溝回到珍珠祈室' },
      { direction: 'south', targetRoomId: 'deepsea_temple_abyssal_garden', description: '裂溝落向深淵花園' },
      { direction: 'east', targetRoomId: 'deepsea_temple_forbidden_altar', description: '黑石階通往禁忌祭壇' },
    ],
    monsters: [
      { monsterId: 'silt_tide_serpent', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'pearl_oracle_shade', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '神像裂溝的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '神像裂溝的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '神像裂溝保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

deepsea_temple_abyssal_garden: {
    id: 'deepsea_temple_abyssal_garden',
    name: '深淵花園',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_abyssal_garden.png',
    imagePrompt: '深淵花園 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain temple, clear lantern light',
    description:
      '深淵花園位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，旅人可以 觀察 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_tideclock_room', description: '深淵花園回到潮鐘室' },
      { direction: 'north', targetRoomId: 'deepsea_temple_statue_trench', description: '裂溝回到神像區' },
      { direction: 'east', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '沉睡神諭室在東側' },
    ],
    monsters: [
      { monsterId: 'choir_jelly_wraith', maxCount: 3, respawnSeconds: 170 },
      { monsterId: 'silt_tide_serpent', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[園]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '深淵花園的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '深淵花園的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '深淵花園保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },
};
