import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_023: Record<string, RoomDef> = {
sunspire_hymn_gallery: {
    id: 'sunspire_hymn_gallery',
    name: '聖歌廊',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_hymn_gallery.png',
    imagePrompt: '聖歌廊 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '聖歌廊位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'south', targetRoomId: 'sunspire_solar_armory', description: '回到太陽武庫' },
      { direction: 'east', targetRoomId: 'sunspire_celestial_guard_hall', description: '天界守衛廳在東側' },
      { direction: 'north', targetRoomId: 'sunspire_trial_of_embers', description: '餘燼試煉室在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[歌]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '聖歌廊的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '聖歌廊的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '聖歌廊殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_burning_archive: {
    id: 'sunspire_burning_archive',
    name: '燃書庫',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_burning_archive.png',
    imagePrompt: '燃書庫 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '燃書庫位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'south', targetRoomId: 'sunspire_flameglass_walk', description: '回到焰玻步道' },
      { direction: 'east', targetRoomId: 'sunspire_trial_of_embers', description: '餘燼試煉室在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[書]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '燃書庫的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '燃書庫的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '燃書庫殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_celestial_guard_hall: {
    id: 'sunspire_celestial_guard_hall',
    name: '天界守衛廳',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_celestial_guard_hall.png',
    imagePrompt: '天界守衛廳 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '天界守衛廳位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。南側日耀升降井的光門從守衛廳這端關閉，只能由升降井進入守衛廳。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_hymn_gallery', description: '回到聖歌廊' },
      { direction: 'east', targetRoomId: 'sunspire_lens_chamber', description: '聚光鏡室在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_solar_armory_construct', maxCount: 1, respawnSeconds: 480 },
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 2, respawnSeconds: 300 },
    ],
    mapSymbol: '[守]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '天界守衛廳的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '天界守衛廳的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '天界守衛廳殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_trial_of_embers: {
    id: 'sunspire_trial_of_embers',
    name: '餘燼試煉室',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_trial_of_embers.png',
    imagePrompt: '餘燼試煉室 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '餘燼試煉室位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_burning_archive', description: '回到燃書庫' },
      { direction: 'south', targetRoomId: 'sunspire_hymn_gallery', description: '回到聖歌廊' },
      { direction: 'east', targetRoomId: 'sunspire_trial_of_dawn', description: '黎明試煉室在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_flameglass_knight', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[燼]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '餘燼試煉室的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '餘燼試煉室的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '餘燼試煉室殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_trial_of_dawn: {
    id: 'sunspire_trial_of_dawn',
    name: '黎明試煉室',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_trial_of_dawn.png',
    imagePrompt: '黎明試煉室 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '黎明試煉室位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_trial_of_embers', description: '回到餘燼試煉室' },
      { direction: 'east', targetRoomId: 'sunspire_gold_flare_bridge', description: '金焰橋在東側' },
      { direction: 'north', targetRoomId: 'sunspire_sunfire_choir', description: '日火唱詩席在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'sunspire_white_stone_acolyte', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[曦]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '黎明試煉室的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '黎明試煉室的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '黎明試煉室殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_winged_balcony: {
    id: 'sunspire_winged_balcony',
    name: '翼影露臺',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_winged_balcony.png',
    imagePrompt: '翼影露臺 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '翼影露臺位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'east', targetRoomId: 'sunspire_ashen_shadow_edge', description: '灰影邊緣在東側' },
      { direction: 'north', targetRoomId: 'sunspire_sunfire_choir', description: '日火唱詩席在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_seraph_watch_commander', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[翼]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '翼影露臺的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '翼影露臺的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '翼影露臺殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_lens_chamber: {
    id: 'sunspire_lens_chamber',
    name: '聚光鏡室',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_lens_chamber.png',
    imagePrompt: '聚光鏡室 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '聚光鏡室位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_celestial_guard_hall', description: '回到天界守衛廳' },
      { direction: 'east', targetRoomId: 'sunspire_gold_flare_bridge', description: '金焰橋在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'sunspire_solar_armory_construct', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[鏡]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '聚光鏡室的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '聚光鏡室的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '聚光鏡室殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_sunfire_choir: {
    id: 'sunspire_sunfire_choir',
    name: '日火唱詩席',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_sunfire_choir.png',
    imagePrompt: '日火唱詩席 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '日火唱詩席位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。西側翼影露臺被日火唱詩的光幕封住，只能從翼影露臺北側登上唱詩席。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'south', targetRoomId: 'sunspire_trial_of_dawn', description: '回到黎明試煉室' },
      { direction: 'east', targetRoomId: 'sunspire_seraph_watch', description: '熾天使哨臺在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_sunfire_cantor', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'sunspire_seraph_watch_commander', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[詩]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '日火唱詩席的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '日火唱詩席的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '日火唱詩席殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_ashen_shadow_edge: {
    id: 'sunspire_ashen_shadow_edge',
    name: '灰影邊緣',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_ashen_shadow_edge.png',
    imagePrompt: '灰影邊緣 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '灰影邊緣位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_winged_balcony', description: '回到翼影露臺' },
      { direction: 'east', targetRoomId: 'sunspire_gold_flare_bridge', description: '金焰橋在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_ashen_shadow_penitent', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'sunspire_flameglass_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[影]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '灰影邊緣的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '灰影邊緣的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '灰影邊緣殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_gold_flare_bridge: {
    id: 'sunspire_gold_flare_bridge',
    name: '金焰橋',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_gold_flare_bridge.png',
    imagePrompt: '金焰橋 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '金焰橋位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。南側黎明試煉室的橋面在踏上金焰後熔斷，只能從黎明試煉室東側進入金焰橋。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_lens_chamber', description: '回到聚光鏡室' },
      { direction: 'east', targetRoomId: 'sunspire_seraph_watch', description: '熾天使哨臺在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_flameglass_knight', maxCount: 1, respawnSeconds: 320 },
      { monsterId: 'sunspire_seraph_watch_commander', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '金焰橋的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '金焰橋的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '金焰橋殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_seraph_watch: {
    id: 'sunspire_seraph_watch',
    name: '熾天使哨臺',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_seraph_watch.png',
    imagePrompt: '熾天使哨臺 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '熾天使哨臺位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_gold_flare_bridge', description: '回到金焰橋' },
      { direction: 'north', targetRoomId: 'sunspire_apex_antechamber', description: '塔頂前室在北側' },
    ],
    monsters: [
      { monsterId: 'sunspire_seraph_watch_commander', maxCount: 2, respawnSeconds: 560 },
      { monsterId: 'sunspire_mirror_lens_keeper', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[熾]',
    mapX: 6,
    mapY: 2,
    guardianHints: {
      creature: '熾天使哨臺的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '熾天使哨臺的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '熾天使哨臺殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_apex_antechamber: {
    id: 'sunspire_apex_antechamber',
    name: '塔頂前室',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_apex_antechamber.png',
    imagePrompt: '塔頂前室 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '塔頂前室位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'south', targetRoomId: 'sunspire_seraph_watch', description: '回到熾天使哨臺' },
      { direction: 'east', targetRoomId: 'sunspire_war_god_sigil', description: '戰神印記在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_wargod_sigil_keeper', maxCount: 1, respawnSeconds: 680 },
      { monsterId: 'sunspire_seraph_watch_commander', maxCount: 1, respawnSeconds: 560 },
    ],
    mapSymbol: '[前]',
    mapX: 6,
    mapY: 3,
    guardianHints: {
      creature: '塔頂前室的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '塔頂前室的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '塔頂前室殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_war_god_sigil: {
    id: 'sunspire_war_god_sigil',
    name: '戰神印記',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_war_god_sigil.png',
    imagePrompt: '戰神印記 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '戰神印記位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_apex_antechamber', description: '回到塔頂前室' },
      { direction: 'east', targetRoomId: 'sunspire_crown_of_day', description: '日冠核心在東側' },
    ],
    monsters: [
      { monsterId: 'sunspire_wargod_sigil_keeper', maxCount: 1, respawnSeconds: 680 },
      { monsterId: 'sunspire_ashen_shadow_penitent', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[戰]',
    mapX: 7,
    mapY: 3,
    guardianHints: {
      creature: '戰神印記的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '戰神印記的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '戰神印記殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

sunspire_crown_of_day: {
    id: 'sunspire_crown_of_day',
    name: '日冠核心',
    zone: 'sunspire' as RoomDef['zone'],
    image: 'sunspire_crown_of_day.png',
    imagePrompt: '日冠核心 in sunspire, sunspire endgame white stone tower above clouds with blazing sunlight, holy mirrors, golden flame bridge, celestial guardians, seraph watch, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '日冠核心位於直入雲層並吸收日光的日耀尖塔內，白石階、焰玻步道、聚光鏡室、聖歌廊與塔頂聖火共同構成神聖力量的終局試煉。這裡是高階隊伍、陣營衝突與世界王前哨區，旅人可以 觀察 日輪刻痕、鏡面角度、聖歌殘響和戰神印記來判斷塔內光流，也能 搜索 太陽武庫、燃書庫、天界守衛廳與塔頂前室尋找神聖線索。若隊伍忽略日火脈衝、翼影巡邏與光焰反噬，龍騎士、天界守衛、熾天使與神造兵器會封住上行路；若穩定沿日光階、金焰橋與熾天使哨臺推進，則能抵達日冠核心並帶回神聖試煉記錄、光流測量、聖火封印與安全下行路線',
    exits: [
      { direction: 'west', targetRoomId: 'sunspire_war_god_sigil', description: '回到戰神印記' },
    ],
    monsters: [
      { monsterId: 'sunspire_day_crown_avatar', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'sunspire_wargod_sigil_keeper', maxCount: 1, respawnSeconds: 680 },
    ],
    mapSymbol: '[冠]',
    mapX: 8,
    mapY: 3,
    guardianHints: {
      creature: '日冠核心的日輪光線若突然聚焦，附近天界守衛或熾天使通常正在換位。',
      treasure: '日冠核心的鏡面、聖歌座或白石縫旁可能藏著日耀尖塔線索。',
      spirit: '日冠核心殘留追求神聖力量者接受試煉與被日火吞沒的記憶。',
    },
  },

// ─── 月影庭擴充 (Lv 38-50) ───────────────────────────

  moonshadow_court_moonlit_gate: {
    id: 'moonshadow_court_moonlit_gate',
    name: '月影門',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_moonlit_gate.png',
    imagePrompt: '月影門 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '月影門位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'east', targetRoomId: 'moonshadow_court_dreamglass_foyer', description: '夢玻前廳在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_whispering_hedge', description: '低語樹籬在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_moonlit_page', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'moonshadow_dreamglass_duelist', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '月影門的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '月影門的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '月影門殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_dreamglass_foyer: {
    id: 'moonshadow_court_dreamglass_foyer',
    name: '夢玻前廳',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_dreamglass_foyer.png',
    imagePrompt: '夢玻前廳 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '夢玻前廳位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_moonlit_gate', description: '回到月影門' },
      { direction: 'east', targetRoomId: 'moonshadow_court_silver_bramble_path', description: '銀棘小徑在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_twilight_fountain', description: '暮光噴泉在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_dreamglass_duelist', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'moonshadow_moonlit_page', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[廳]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '夢玻前廳的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '夢玻前廳的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '夢玻前廳殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_silver_bramble_path: {
    id: 'moonshadow_court_silver_bramble_path',
    name: '銀棘小徑',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_silver_bramble_path.png',
    imagePrompt: '銀棘小徑 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '銀棘小徑位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_dreamglass_foyer', description: '回到夢玻前廳' },
      { direction: 'north', targetRoomId: 'moonshadow_court_masked_ball_hall', description: '假面舞廳在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_silver_bramble_knight', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'moonshadow_moonlit_page', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[棘]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '銀棘小徑的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '銀棘小徑的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '銀棘小徑殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_twilight_fountain: {
    id: 'moonshadow_court_twilight_fountain',
    name: '暮光噴泉',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_twilight_fountain.png',
    imagePrompt: '暮光噴泉 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '暮光噴泉位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'south', targetRoomId: 'moonshadow_court_dreamglass_foyer', description: '回到夢玻前廳' },
      { direction: 'east', targetRoomId: 'moonshadow_court_masked_ball_hall', description: '假面舞廳在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_lunar_arboretum', description: '月相樹園在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_moonlit_page', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'moonshadow_oath_mirror_double', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '暮光噴泉的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '暮光噴泉的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '暮光噴泉殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_masked_ball_hall: {
    id: 'moonshadow_court_masked_ball_hall',
    name: '假面舞廳',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_masked_ball_hall.png',
    imagePrompt: '假面舞廳 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '假面舞廳位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_twilight_fountain', description: '回到暮光噴泉' },
      { direction: 'south', targetRoomId: 'moonshadow_court_silver_bramble_path', description: '回到銀棘小徑' },
      { direction: 'east', targetRoomId: 'moonshadow_court_moth_lantern_gallery', description: '蛾燈長廊在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_oath_mirror_room', description: '誓鏡室在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_dreamglass_duelist', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'moonshadow_moth_lantern_swarm', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[舞]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '假面舞廳的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '假面舞廳的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '假面舞廳殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_moth_lantern_gallery: {
    id: 'moonshadow_court_moth_lantern_gallery',
    name: '蛾燈長廊',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_moth_lantern_gallery.png',
    imagePrompt: '蛾燈長廊 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '蛾燈長廊位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_masked_ball_hall', description: '回到假面舞廳' },
      { direction: 'north', targetRoomId: 'moonshadow_court_velvet_duel_court', description: '絨幕決鬥庭在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_moth_lantern_swarm', maxCount: 3, respawnSeconds: 280 },
    ],
    mapSymbol: '[燈]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '蛾燈長廊的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '蛾燈長廊的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '蛾燈長廊殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_whispering_hedge: {
    id: 'moonshadow_court_whispering_hedge',
    name: '低語樹籬',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_whispering_hedge.png',
    imagePrompt: '低語樹籬 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '低語樹籬位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'south', targetRoomId: 'moonshadow_court_moonlit_gate', description: '回到月影門' },
      { direction: 'east', targetRoomId: 'moonshadow_court_lunar_arboretum', description: '月相樹園在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_silver_bramble_knight', maxCount: 1, respawnSeconds: 320 },
      { monsterId: 'moonshadow_moth_lantern_swarm', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[籬]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '低語樹籬的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '低語樹籬的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '低語樹籬殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_lunar_arboretum: {
    id: 'moonshadow_court_lunar_arboretum',
    name: '月相樹園',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_lunar_arboretum.png',
    imagePrompt: '月相樹園 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '月相樹園位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_whispering_hedge', description: '回到低語樹籬' },
      { direction: 'south', targetRoomId: 'moonshadow_court_twilight_fountain', description: '回到暮光噴泉' },
      { direction: 'east', targetRoomId: 'moonshadow_court_oath_mirror_room', description: '誓鏡室在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_nightbloom_garden', description: '夜花庭在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_nightbloom_matron', maxCount: 1, respawnSeconds: 460 },
      { monsterId: 'moonshadow_silver_bramble_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[樹]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '月相樹園的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '月相樹園的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '月相樹園殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_oath_mirror_room: {
    id: 'moonshadow_court_oath_mirror_room',
    name: '誓鏡室',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_oath_mirror_room.png',
    imagePrompt: '誓鏡室 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '誓鏡室位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_lunar_arboretum', description: '回到月相樹園' },
      { direction: 'south', targetRoomId: 'moonshadow_court_masked_ball_hall', description: '回到假面舞廳' },
      { direction: 'east', targetRoomId: 'moonshadow_court_velvet_duel_court', description: '絨幕決鬥庭在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_crescent_bridge', description: '弦月橋在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_oath_mirror_double', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'moonshadow_dreamglass_duelist', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[誓]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '誓鏡室的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '誓鏡室的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '誓鏡室殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_velvet_duel_court: {
    id: 'moonshadow_court_velvet_duel_court',
    name: '絨幕決鬥庭',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_velvet_duel_court.png',
    imagePrompt: '絨幕決鬥庭 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '絨幕決鬥庭位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_oath_mirror_room', description: '回到誓鏡室' },
      { direction: 'south', targetRoomId: 'moonshadow_court_moth_lantern_gallery', description: '回到蛾燈長廊' },
      { direction: 'east', targetRoomId: 'moonshadow_court_fae_archive', description: '妖精檔案館在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_shadow_throne_steps', description: '影王座階在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_dreamglass_duelist', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'moonshadow_silver_bramble_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[鬥]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '絨幕決鬥庭的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '絨幕決鬥庭的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '絨幕決鬥庭殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_fae_archive: {
    id: 'moonshadow_court_fae_archive',
    name: '妖精檔案館',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_fae_archive.png',
    imagePrompt: '妖精檔案館 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '妖精檔案館位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_velvet_duel_court', description: '回到絨幕決鬥庭' },
      { direction: 'north', targetRoomId: 'moonshadow_court_queen_silence_chapel', description: '靜后小禮拜堂在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_oath_mirror_double', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'moonshadow_moonlit_page', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[檔]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '妖精檔案館的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '妖精檔案館的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '妖精檔案館殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_nightbloom_garden: {
    id: 'moonshadow_court_nightbloom_garden',
    name: '夜花庭',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_nightbloom_garden.png',
    imagePrompt: '夜花庭 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '夜花庭位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'south', targetRoomId: 'moonshadow_court_lunar_arboretum', description: '回到月相樹園' },
      { direction: 'east', targetRoomId: 'moonshadow_court_crescent_bridge', description: '弦月橋在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_nightbloom_matron', maxCount: 2, respawnSeconds: 460 },
      { monsterId: 'moonshadow_moth_lantern_swarm', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[花]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '夜花庭的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '夜花庭的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '夜花庭殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_crescent_bridge: {
    id: 'moonshadow_court_crescent_bridge',
    name: '弦月橋',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_crescent_bridge.png',
    imagePrompt: '弦月橋 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '弦月橋位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_nightbloom_garden', description: '回到夜花庭' },
      { direction: 'south', targetRoomId: 'moonshadow_court_oath_mirror_room', description: '回到誓鏡室' },
      { direction: 'east', targetRoomId: 'moonshadow_court_shadow_throne_steps', description: '影王座階在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_moonwell_balcony', description: '月井露臺在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 1, respawnSeconds: 520 },
      { monsterId: 'moonshadow_silver_bramble_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[橋]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '弦月橋的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '弦月橋的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '弦月橋殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_shadow_throne_steps: {
    id: 'moonshadow_court_shadow_throne_steps',
    name: '影王座階',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_shadow_throne_steps.png',
    imagePrompt: '影王座階 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '影王座階位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_crescent_bridge', description: '回到弦月橋' },
      { direction: 'south', targetRoomId: 'moonshadow_court_velvet_duel_court', description: '回到絨幕決鬥庭' },
      { direction: 'east', targetRoomId: 'moonshadow_court_queen_silence_chapel', description: '靜后小禮拜堂在東側' },
      { direction: 'north', targetRoomId: 'moonshadow_court_dream_harvest_grove', description: '夢收穫林在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_eclipse_curtain_assassin', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'moonshadow_oath_mirror_double', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[座]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '影王座階的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '影王座階的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '影王座階殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_queen_silence_chapel: {
    id: 'moonshadow_court_queen_silence_chapel',
    name: '靜后小禮拜堂',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_queen_silence_chapel.png',
    imagePrompt: '靜后小禮拜堂 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '靜后小禮拜堂位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_shadow_throne_steps', description: '回到影王座階' },
      { direction: 'south', targetRoomId: 'moonshadow_court_fae_archive', description: '回到妖精檔案館' },
      { direction: 'north', targetRoomId: 'moonshadow_court_glass_deer_paddock', description: '玻鹿欄在北側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_moonlit_page', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[禮]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '靜后小禮拜堂的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '靜后小禮拜堂的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '靜后小禮拜堂殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_moonwell_balcony: {
    id: 'moonshadow_court_moonwell_balcony',
    name: '月井露臺',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_moonwell_balcony.png',
    imagePrompt: '月井露臺 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '月井露臺位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'south', targetRoomId: 'moonshadow_court_crescent_bridge', description: '回到弦月橋' },
      { direction: 'east', targetRoomId: 'moonshadow_court_dream_harvest_grove', description: '夢收穫林在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'moonshadow_moth_lantern_swarm', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[井]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '月井露臺的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '月井露臺的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '月井露臺殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_dream_harvest_grove: {
    id: 'moonshadow_court_dream_harvest_grove',
    name: '夢收穫林',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_dream_harvest_grove.png',
    imagePrompt: '夢收穫林 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '夢收穫林位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_moonwell_balcony', description: '回到月井露臺' },
      { direction: 'south', targetRoomId: 'moonshadow_court_shadow_throne_steps', description: '回到影王座階' },
      { direction: 'east', targetRoomId: 'moonshadow_court_glass_deer_paddock', description: '玻鹿欄在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_nightbloom_matron', maxCount: 1, respawnSeconds: 460 },
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[收]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '夢收穫林的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '夢收穫林的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '夢收穫林殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_glass_deer_paddock: {
    id: 'moonshadow_court_glass_deer_paddock',
    name: '玻鹿欄',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_glass_deer_paddock.png',
    imagePrompt: '玻鹿欄 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '玻鹿欄位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_dream_harvest_grove', description: '回到夢收穫林' },
      { direction: 'south', targetRoomId: 'moonshadow_court_queen_silence_chapel', description: '回到靜后小禮拜堂' },
      { direction: 'east', targetRoomId: 'moonshadow_court_eclipse_curtain', description: '月蝕帷幕在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 2, respawnSeconds: 520 },
      { monsterId: 'moonshadow_nightbloom_matron', maxCount: 1, respawnSeconds: 460 },
    ],
    mapSymbol: '[鹿]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '玻鹿欄的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '玻鹿欄的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '玻鹿欄殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_eclipse_curtain: {
    id: 'moonshadow_court_eclipse_curtain',
    name: '月蝕帷幕',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_eclipse_curtain.png',
    imagePrompt: '月蝕帷幕 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '月蝕帷幕位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_glass_deer_paddock', description: '回到玻鹿欄' },
      { direction: 'east', targetRoomId: 'moonshadow_court_hidden_court_core', description: '隱庭核心在東側' },
    ],
    monsters: [
      { monsterId: 'moonshadow_eclipse_curtain_assassin', maxCount: 2, respawnSeconds: 560 },
      { monsterId: 'moonshadow_oath_mirror_double', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[蝕]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '月蝕帷幕的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '月蝕帷幕的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '月蝕帷幕殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

moonshadow_court_hidden_court_core: {
    id: 'moonshadow_court_hidden_court_core',
    name: '隱庭核心',
    zone: 'moonshadow_court' as RoomDef['zone'],
    image: 'moonshadow_court_hidden_court_core.png',
    imagePrompt: '隱庭核心 in moonshadow_court, moonlit fae court half real half dream with silver brambles, dreamglass floor, twilight fountain, masked ballroom, crescent bridge, moonwell balcony, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain bridge, clear lantern light',
    description:
      '隱庭核心位於半現實半夢境的月影庭內，銀棘樹籬、夢玻地磚、暮光噴泉、假面舞廳與弦月橋交錯成妖精宮廷的終局試煉。這裡適合高階隊伍採集稀有夜花、追蹤精英巡邏並進行受規範的決鬥，旅人可以 觀察 月相刻痕、假面座次、誓鏡裂紋和月井潮線來判斷宮廷規則，也能 搜索 妖精檔案館、夜花庭、夢收穫林與靜后小禮拜堂尋找密約線索。若隊伍忽略低語樹籬的換路、玻鹿群的驚動與月蝕帷幕的沉默禁令，惡魔貴族、龍騎士、古龍與虛空行者會把訪客困在夢境回廊；若穩定沿弦月橋、影王座階與月井露臺推進，則能抵達隱庭核心並帶回妖精密約、夜花樣本、月相路徑與安全回程標記',
    exits: [
      { direction: 'west', targetRoomId: 'moonshadow_court_eclipse_curtain', description: '回到月蝕帷幕' },
    ],
    monsters: [
      { monsterId: 'moonshadow_hidden_court_queen', maxCount: 1, respawnSeconds: 1400 },
      { monsterId: 'moonshadow_eclipse_curtain_assassin', maxCount: 1, respawnSeconds: 560 },
      { monsterId: 'moonshadow_glass_deer_herald', maxCount: 1, respawnSeconds: 520 },
    ],
    mapSymbol: '[核]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '隱庭核心的月光若突然像水面一樣倒流，附近妖精廷衛或夢境獵手通常正在換位。',
      treasure: '隱庭核心的銀棘縫、假面座次、月井邊或夜花根下可能藏著月影庭密約。',
      spirit: '隱庭核心殘留妖精宮廷宴會、決鬥誓約與訪客被困入夢的記憶。',
    },
  },

// ─── 機械墳場擴充 (Lv 35-48) ───────────────────────────

  machine_graveyard_entrance_crane: {
    id: 'machine_graveyard_entrance_crane',
    name: '入口吊臂',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_entrance_crane.png',
    imagePrompt: '入口吊臂 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '入口吊臂矗立在機械墳場西緣，巨大的鏽鉤垂在碎鐵坡上，鏈條被風推動時會發出乾裂的金屬回音。東側鏽轉閘半埋在輪軌末端，北面銅脈棚的綠藍礦光沿著岩壁滲出。地面堆著報廢履帶、折斷吊索與刻有舊廠徽的控制箱，幾盞黃燈忽明忽暗，像這座廢墟仍在分辨進入者是工人、零件，還是下一批被回收的殘骸。',
    exits: [
      { direction: 'east', targetRoomId: 'machine_graveyard_rusted_turnstile', description: '鏽轉閘在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_copper_vein_shelf', description: '銅脈棚在北側' },
    ],
    monsters: [
      { monsterId: 'machine_scrap_claw_drone', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'machine_sparking_rail_runner', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[吊]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '入口吊臂的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '入口吊臂的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '入口吊臂殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_rusted_turnstile: {
    id: 'machine_graveyard_rusted_turnstile',
    name: '鏽轉閘',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_rusted_turnstile.png',
    imagePrompt: '鏽轉閘 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '鏽轉閘由三層齒輪門組成，門軸卡著黑砂與骨白螺栓，每一次轉動都像在磨碎過去的通行紀錄。西面退回入口吊臂，東側廢鐵峽張開狹長缺口，北方火花軌不斷濺出藍白電弧。閘口旁的票牌機還亮著幾個殘缺數字，地上散落銅片與斷指形機械夾，提示此處曾是整片墳場的分流口，如今只剩失控機構守著無人理解的秩序。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_entrance_crane', description: '回到入口吊臂' },
      { direction: 'east', targetRoomId: 'machine_graveyard_scrap_canyon', description: '廢鐵峽在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_sparking_rail', description: '火花軌在北側' },
    ],
    monsters: [
      { monsterId: 'machine_scrap_claw_drone', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'machine_wireweed_crawler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[閘]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鏽轉閘的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '鏽轉閘的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '鏽轉閘殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_scrap_canyon: {
    id: 'machine_graveyard_scrap_canyon',
    name: '廢鐵峽',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_scrap_canyon.png',
    imagePrompt: '廢鐵峽 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '廢鐵峽夾在兩道高聳殘骸山之間，船殼、礦車、巨型護甲與冷卻管互相擠壓，形成鋸齒般的窄路。西面是鏽轉閘，北側斷爐場的紅熱暗光從破鐵縫裡滲下。峽底鋪著被磨亮的鋼屑，偶爾有齒輪從高處鬆脫滾落，撞出長長火星；牆面塗著褪色箭頭和舊警語，卻被新的爪痕覆蓋，使這條通道更像一座會緩慢閉合的金屬裂谷。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_rusted_turnstile', description: '回到鏽轉閘' },
      { direction: 'north', targetRoomId: 'machine_graveyard_broken_foundry', description: '斷爐場在北側' },
    ],
    monsters: [
      { monsterId: 'machine_scrap_claw_drone', maxCount: 3, respawnSeconds: 220 },
    ],
    mapSymbol: '[峽]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '廢鐵峽的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '廢鐵峽的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '廢鐵峽殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_sparking_rail: {
    id: 'machine_graveyard_sparking_rail',
    name: '火花軌',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_sparking_rail.png',
    imagePrompt: '火花軌 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '火花軌是一段仍帶電的運輸線，焦黑枕木與磁浮軌交錯伸展，軌面每隔幾息便竄起蛇形電光。南面回到鏽轉閘，東側斷爐場傳來空洞敲擊，北方黑油蓄池散出刺鼻油氣。軌旁停著半截礦車，車斗裡裝滿熔毀線圈與玻璃化礦渣；牆上絕緣瓷片多數爆裂，裸露纜線像發亮藤蔓爬滿支架，讓整段路保持危險而不穩的脈搏。',
    exits: [
      { direction: 'south', targetRoomId: 'machine_graveyard_rusted_turnstile', description: '回到鏽轉閘' },
      { direction: 'east', targetRoomId: 'machine_graveyard_broken_foundry', description: '斷爐場在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_oil_black_cistern', description: '黑油蓄池在北側' },
    ],
    monsters: [
      { monsterId: 'machine_sparking_rail_runner', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'machine_scrap_claw_drone', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[軌]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '火花軌的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '火花軌的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '火花軌殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_broken_foundry: {
    id: 'machine_graveyard_broken_foundry',
    name: '斷爐場',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_broken_foundry.png',
    imagePrompt: '斷爐場 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '斷爐場保留著巨型熔爐的半邊外殼，爐口裂開後凝出一條黑紅礦渣瀑布，像火焰被迫停在流動中。西側火花軌仍送來殘電，南面廢鐵峽回聲深沉，東方齒骨坑露出一圈圈白化齒輪，北側鐘械巢傳來細密咬合聲。鑄模槽裡沉著未完成的構裝肢體，鐵鉗還夾著發亮金屬胚，整座工場像在最後一爐失敗後被連同怒火一起冷卻。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_sparking_rail', description: '回到火花軌' },
      { direction: 'south', targetRoomId: 'machine_graveyard_scrap_canyon', description: '回到廢鐵峽' },
      { direction: 'east', targetRoomId: 'machine_graveyard_gearbone_pit', description: '齒骨坑在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_clockwork_nest', description: '鐘械巢在北側' },
    ],
    monsters: [
      { monsterId: 'machine_foundry_automaton', maxCount: 2, respawnSeconds: 300 },
      { monsterId: 'machine_scrap_claw_drone', maxCount: 1, respawnSeconds: 220 },
    ],
    mapSymbol: '[爐]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '斷爐場的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '斷爐場的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '斷爐場殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_gearbone_pit: {
    id: 'machine_graveyard_gearbone_pit',
    name: '齒骨坑',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_gearbone_pit.png',
    imagePrompt: '齒骨坑 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '齒骨坑是一座下陷圓井，無數齒輪、軸承與白色支架堆成骨骼形狀，深處偶爾轉出沉重低鳴。西面斷爐場的熔渣光映在坑壁上，北側磁塔基座把散落鐵屑拉成細長弧線。坑緣立著幾根折斷吊柱，繩索末端掛滿報廢關節與銅牌編號；若沿著邊緣行走，能看見不同年代的機械零件互相咬住，彷彿整座墳場把自己的骨頭一層層翻了出來。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_broken_foundry', description: '回到斷爐場' },
      { direction: 'north', targetRoomId: 'machine_graveyard_magnet_tower_base', description: '磁塔基座在北側' },
    ],
    monsters: [
      { monsterId: 'machine_scrap_claw_drone', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'machine_foundry_automaton', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[齒]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '齒骨坑的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '齒骨坑的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '齒骨坑殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_copper_vein_shelf: {
    id: 'machine_graveyard_copper_vein_shelf',
    name: '銅脈棚',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_copper_vein_shelf.png',
    imagePrompt: '銅脈棚 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '銅脈棚貼著入口吊臂北面的岩棚延展，礦脈像綠藍色血管爬滿黑石，老舊支架勉強撐住上方壓下的廢機殼。南面能回到入口吊臂，東側黑油蓄池的油光在坡底閃動。棚內堆著破鑿、斷燈與被銅鏽封住的採樣盒，水滴落在礦面時會迸出細小火花。這裡不像單純礦點，更像機械墳場仍在地底緩慢長出的神經末梢。',
    exits: [
      { direction: 'south', targetRoomId: 'machine_graveyard_entrance_crane', description: '回到入口吊臂' },
      { direction: 'east', targetRoomId: 'machine_graveyard_oil_black_cistern', description: '黑油蓄池在東側' },
    ],
    monsters: [
      { monsterId: 'machine_wireweed_crawler', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'machine_sparking_rail_runner', maxCount: 2, respawnSeconds: 240 },
    ],
    mapSymbol: '[銅]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '銅脈棚的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '銅脈棚的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '銅脈棚殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_oil_black_cistern: {
    id: 'machine_graveyard_oil_black_cistern',
    name: '黑油蓄池',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_oil_black_cistern.png',
    imagePrompt: '黑油蓄池 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '黑油蓄池是一座低矮圓庫，油面漆黑平滑，倒映著上方倒吊的輸送管與搖晃紅燈。西側銅脈棚送來冷綠礦光，南面火花軌的電弧不時照亮池壁，東方鐘械巢發出規律脈動，北側線草園垂下纖細纜絲。池邊有多具抽油機跪伏般停住，噴嘴滴下的油珠遲遲不落；空氣厚重而帶甜味，讓人覺得這些黑油並非燃料，而是某個沉睡核心的血液。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_copper_vein_shelf', description: '回到銅脈棚' },
      { direction: 'south', targetRoomId: 'machine_graveyard_sparking_rail', description: '回到火花軌' },
      { direction: 'east', targetRoomId: 'machine_graveyard_clockwork_nest', description: '鐘械巢在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_wireweed_garden', description: '線草園在北側' },
    ],
    monsters: [
      { monsterId: 'machine_foundry_automaton', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'machine_battery_catacomb_mourner', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[油]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '黑油蓄池的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '黑油蓄池的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '黑油蓄池殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_clockwork_nest: {
    id: 'machine_graveyard_clockwork_nest',
    name: '鐘械巢',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_clockwork_nest.png',
    imagePrompt: '鐘械巢 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '鐘械巢位於斷爐場北側，由無數大小鐘輪、發條盒與銅殼幼機纏成球狀巢穴，內部不停傳出規律啄擊。西面黑油蓄池提供黏稠油氣，南方斷爐場殘熱未滅，東側磁塔基座拉扯著金屬碎片，北面電池墓窖散著冷光。巢壁插滿報廢鐘針與薄翼齒片，偶爾有小型機械從縫裡探頭又縮回，使整個空間像一顆正在孵化的巨大懷錶。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_oil_black_cistern', description: '回到黑油蓄池' },
      { direction: 'south', targetRoomId: 'machine_graveyard_broken_foundry', description: '回到斷爐場' },
      { direction: 'east', targetRoomId: 'machine_graveyard_magnet_tower_base', description: '磁塔基座在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_battery_catacomb', description: '電池墓窖在北側' },
    ],
    monsters: [
      { monsterId: 'machine_scrap_claw_drone', maxCount: 2, respawnSeconds: 220 },
      { monsterId: 'machine_wireweed_crawler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[巢]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '鐘械巢的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '鐘械巢的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '鐘械巢殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },

machine_graveyard_magnet_tower_base: {
    id: 'machine_graveyard_magnet_tower_base',
    name: '磁塔基座',
    zone: 'machine_graveyard' as RoomDef['zone'],
    image: 'machine_graveyard_magnet_tower_base.png',
    imagePrompt: '磁塔基座 in machine_graveyard, underground ancient machine graveyard with rusted cranes, broken gears, sparking rails, oil cisterns, magnet tower, dormant reactor core, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain tower, clear lantern light',
    description:
      '磁塔基座是一圈破碎環形平台，中央磁柱只剩下半截，卻仍把鐵屑、斷刃與小齒輪懸在半空緩慢旋轉。西面鐘械巢的噪音被拉成尖鳴，南側齒骨坑的白化零件貼著地面顫動，東方核心甦醒廳透出低頻藍光，北面伺服骨場堆著成片機械肢骨。平台石縫裡嵌著古老校準尺和燒焦符號，顯示此處曾控制整片墳場的方向與重力。',
    exits: [
      { direction: 'west', targetRoomId: 'machine_graveyard_clockwork_nest', description: '回到鐘械巢' },
      { direction: 'south', targetRoomId: 'machine_graveyard_gearbone_pit', description: '回到齒骨坑' },
      { direction: 'east', targetRoomId: 'machine_graveyard_core_wake_hall', description: '核心甦醒廳在東側' },
      { direction: 'north', targetRoomId: 'machine_graveyard_servo_bone_yard', description: '伺服骨場在北側' },
    ],
    monsters: [
      { monsterId: 'machine_magnet_tower_sentinel', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'machine_sparking_rail_runner', maxCount: 1, respawnSeconds: 240 },
    ],
    mapSymbol: '[磁]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '磁塔基座的齒輪若突然空轉，附近失控守衛或被磁場吸引的魔物可能正在接近。',
      treasure: '磁塔基座的銅線束、電池裂縫、油泥底部或反應殼旁可能藏著稀有機械材料。',
      spirit: '磁塔基座殘留古代工匠撤離、核心失控與採集隊失聯前的斷續訊號。',
    },
  },
};
