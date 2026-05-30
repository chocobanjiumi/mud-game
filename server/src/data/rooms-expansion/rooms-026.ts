import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_026: Record<string, RoomDef> = {
serpent_delta_manymouth_confluence: {
    id: 'serpent_delta_manymouth_confluence',
    name: '百口合流',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_manymouth_confluence.png',
    imagePrompt: '百口合流 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '百口合流位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，玩家可以 inspect 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 search 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標。',
    exits: [
      { direction: 'west', targetRoomId: 'serpent_delta_blue_lotus_marsh', description: '藍蓮沼在西側' },
      { direction: 'east', targetRoomId: 'serpent_delta_serpent_god_backwater', description: '蛇神背水在東側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_manymouth_hydra', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'serpent_delta_blue_lotus_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[合]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '百口合流的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '百口合流的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '百口合流殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

serpent_delta_serpent_god_backwater: {
    id: 'serpent_delta_serpent_god_backwater',
    name: '蛇神背水',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_serpent_god_backwater.png',
    imagePrompt: '蛇神背水 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '蛇神背水位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，玩家可以 inspect 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 search 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標。',
    exits: [
      { direction: 'west', targetRoomId: 'serpent_delta_manymouth_confluence', description: '百口合流在西側' },
    ],
    monsters: [
      { monsterId: 'serpent_delta_manymouth_hydra', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'serpent_delta_egg_mound_broodmother', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'serpent_delta_blue_lotus_oracle', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[神]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '蛇神背水的水面若冒出連續小泡，附近湖蛇、祭司巡邏或沼地獵手可能正在靠近。',
      treasure: '蛇神背水的蘆根、魚網鉛墜、藍蓮葉底或蛇紋石縫可能藏著三角洲材料。',
      spirit: '蛇神背水殘留吊腳村遷徙、蛇神祭典與小船迷失支流的潮聲記憶。',
    },
  },

// ─── 王國邊境擴充 (Lv 25-60) ───────────────────────────

  kingdom_frontier_portal_muster: {
    id: 'kingdom_frontier_portal_muster',
    name: '傳送點兵場',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_portal_muster.png',
    imagePrompt: '傳送點兵場 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '傳送點兵場位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'east', targetRoomId: 'kingdom_frontier_border_road', description: '邊境軍路在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_border_levy', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_watchtower_arbalest', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[傳]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '傳送點兵場的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '傳送點兵場的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '傳送點兵場殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_border_road: {
    id: 'kingdom_frontier_border_road',
    name: '邊境軍路',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_border_road.png',
    imagePrompt: '邊境軍路 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '邊境軍路位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'south', targetRoomId: 'kingdom_frontier_supply_camp', description: '補給營在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_portal_muster', description: '傳送點兵場在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_watchtower_west', description: '西哨塔在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_border_levy', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[路]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '邊境軍路的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '邊境軍路的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '邊境軍路殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_watchtower_west: {
    id: 'kingdom_frontier_watchtower_west',
    name: '西哨塔',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_watchtower_west.png',
    imagePrompt: '西哨塔 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '西哨塔位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'south', targetRoomId: 'kingdom_frontier_battlefield_crossing', description: '戰場岔口在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_border_road', description: '邊境軍路在西側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_watchtower_arbalest', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_border_levy', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[西]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '西哨塔的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '西哨塔的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '西哨塔殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_supply_camp: {
    id: 'kingdom_frontier_supply_camp',
    name: '補給營',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_supply_camp.png',
    imagePrompt: '補給營 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '補給營位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_border_road', description: '邊境軍路在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_iron_claim', description: '鐵礦據點在南側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_battlefield_crossing', description: '戰場岔口在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_border_levy', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[補]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '補給營的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '補給營的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '補給營殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_battlefield_crossing: {
    id: 'kingdom_frontier_battlefield_crossing',
    name: '戰場岔口',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_battlefield_crossing.png',
    imagePrompt: '戰場岔口 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '戰場岔口位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_watchtower_west', description: '西哨塔在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_siege_yard', description: '攻城器械場在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_supply_camp', description: '補給營在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_watchtower_east', description: '東哨塔在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_border_levy', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_watchtower_arbalest', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[岔]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '戰場岔口的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '戰場岔口的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '戰場岔口殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_watchtower_east: {
    id: 'kingdom_frontier_watchtower_east',
    name: '東哨塔',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_watchtower_east.png',
    imagePrompt: '東哨塔 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '東哨塔位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'south', targetRoomId: 'kingdom_frontier_banner_hill', description: '戰旗丘在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_battlefield_crossing', description: '戰場岔口在西側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_watchtower_arbalest', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[東]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '東哨塔的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '東哨塔的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '東哨塔殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_lumber_claim: {
    id: 'kingdom_frontier_lumber_claim',
    name: '木材據點',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_lumber_claim.png',
    imagePrompt: '木材據點 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '木材據點位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'east', targetRoomId: 'kingdom_frontier_iron_claim', description: '鐵礦據點在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 2, respawnSeconds: 360 },
    ],
    mapSymbol: '[木]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '木材據點的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '木材據點的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '木材據點殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_iron_claim: {
    id: 'kingdom_frontier_iron_claim',
    name: '鐵礦據點',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_iron_claim.png',
    imagePrompt: '鐵礦據點 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '鐵礦據點位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_supply_camp', description: '補給營在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_burnt_farmstead', description: '焚農莊在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_lumber_claim', description: '木材據點在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_siege_yard', description: '攻城器械場在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_siege_sapper', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 2, respawnSeconds: 360 },
    ],
    mapSymbol: '[鐵]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '鐵礦據點的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '鐵礦據點的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '鐵礦據點殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_siege_yard: {
    id: 'kingdom_frontier_siege_yard',
    name: '攻城器械場',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_siege_yard.png',
    imagePrompt: '攻城器械場 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '攻城器械場位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_battlefield_crossing', description: '戰場岔口在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_darkwood_cut', description: '暗林缺口在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_iron_claim', description: '鐵礦據點在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_banner_hill', description: '戰旗丘在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_siege_sapper', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_banner_knight', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[械]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '攻城器械場的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '攻城器械場的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '攻城器械場殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_banner_hill: {
    id: 'kingdom_frontier_banner_hill',
    name: '戰旗丘',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_banner_hill.png',
    imagePrompt: '戰旗丘 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '戰旗丘位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_watchtower_east', description: '東哨塔在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_firebreak_ridge', description: '防火嶺在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_siege_yard', description: '攻城器械場在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_truce_tent', description: '停戰帳在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_banner_knight', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_firebreak_mage', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[旗]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '戰旗丘的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '戰旗丘的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '戰旗丘殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_truce_tent: {
    id: 'kingdom_frontier_truce_tent',
    name: '停戰帳',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_truce_tent.png',
    imagePrompt: '停戰帳 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '停戰帳位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'south', targetRoomId: 'kingdom_frontier_spyglass_ruin', description: '望遠鏡遺跡在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_banner_hill', description: '戰旗丘在西側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[帳]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '停戰帳的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '停戰帳的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '停戰帳殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_burnt_farmstead: {
    id: 'kingdom_frontier_burnt_farmstead',
    name: '焚農莊',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_burnt_farmstead.png',
    imagePrompt: '焚農莊 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '焚農莊位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_iron_claim', description: '鐵礦據點在北側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_darkwood_cut', description: '暗林缺口在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_siege_sapper', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[莊]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '焚農莊的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '焚農莊的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '焚農莊殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_darkwood_cut: {
    id: 'kingdom_frontier_darkwood_cut',
    name: '暗林缺口',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_darkwood_cut.png',
    imagePrompt: '暗林缺口 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '暗林缺口位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_siege_yard', description: '攻城器械場在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_treasury_wagon', description: '國庫車隊在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_burnt_farmstead', description: '焚農莊在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_firebreak_ridge', description: '防火嶺在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 3, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_firebreak_mage', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[林]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '暗林缺口的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '暗林缺口的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '暗林缺口殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_firebreak_ridge: {
    id: 'kingdom_frontier_firebreak_ridge',
    name: '防火嶺',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_firebreak_ridge.png',
    imagePrompt: '防火嶺 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '防火嶺位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_banner_hill', description: '戰旗丘在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_prisoner_stockade', description: '俘虜柵欄在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_darkwood_cut', description: '暗林缺口在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_spyglass_ruin', description: '望遠鏡遺跡在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_firebreak_mage', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_siege_sapper', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[火]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '防火嶺的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '防火嶺的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '防火嶺殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_spyglass_ruin: {
    id: 'kingdom_frontier_spyglass_ruin',
    name: '望遠鏡遺跡',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_spyglass_ruin.png',
    imagePrompt: '望遠鏡遺跡 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '望遠鏡遺跡位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_truce_tent', description: '停戰帳在北側' },
      { direction: 'south', targetRoomId: 'kingdom_frontier_redoubt_gate', description: '前壘門在南側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_firebreak_ridge', description: '防火嶺在西側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_war_table_marshal', maxCount: 1, respawnSeconds: 540 },
    ],
    mapSymbol: '[鏡]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '望遠鏡遺跡的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '望遠鏡遺跡的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '望遠鏡遺跡殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_treasury_wagon: {
    id: 'kingdom_frontier_treasury_wagon',
    name: '國庫車隊',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_treasury_wagon.png',
    imagePrompt: '國庫車隊 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '國庫車隊位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_darkwood_cut', description: '暗林缺口在北側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_prisoner_stockade', description: '俘虜柵欄在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_supply_raider', maxCount: 2, respawnSeconds: 420 },
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[庫]',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '國庫車隊的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '國庫車隊的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '國庫車隊殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_prisoner_stockade: {
    id: 'kingdom_frontier_prisoner_stockade',
    name: '俘虜柵欄',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_prisoner_stockade.png',
    imagePrompt: '俘虜柵欄 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '俘虜柵欄位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_firebreak_ridge', description: '防火嶺在北側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_treasury_wagon', description: '國庫車隊在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_redoubt_gate', description: '前壘門在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 2, respawnSeconds: 540 },
      { monsterId: 'kingdom_frontier_darkwood_scout', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[囚]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '俘虜柵欄的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '俘虜柵欄的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '俘虜柵欄殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_redoubt_gate: {
    id: 'kingdom_frontier_redoubt_gate',
    name: '前壘門',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_redoubt_gate.png',
    imagePrompt: '前壘門 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '前壘門位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'north', targetRoomId: 'kingdom_frontier_spyglass_ruin', description: '望遠鏡遺跡在北側' },
      { direction: 'west', targetRoomId: 'kingdom_frontier_prisoner_stockade', description: '俘虜柵欄在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_war_table_bunker', description: '戰圖地堡在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 2, respawnSeconds: 540 },
      { monsterId: 'kingdom_frontier_war_table_marshal', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[壘]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '前壘門的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '前壘門的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '前壘門殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_war_table_bunker: {
    id: 'kingdom_frontier_war_table_bunker',
    name: '戰圖地堡',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_war_table_bunker.png',
    imagePrompt: '戰圖地堡 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '戰圖地堡位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'west', targetRoomId: 'kingdom_frontier_redoubt_gate', description: '前壘門在西側' },
      { direction: 'east', targetRoomId: 'kingdom_frontier_command_front', description: '前線指揮所在東側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_war_table_marshal', maxCount: 2, respawnSeconds: 540 },
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 1, respawnSeconds: 480 },
    ],
    mapSymbol: '[圖]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '戰圖地堡的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '戰圖地堡的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '戰圖地堡殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },

kingdom_frontier_command_front: {
    id: 'kingdom_frontier_command_front',
    name: '前線指揮所',
    zone: 'kingdom_frontier' as RoomDef['zone'],
    image: 'kingdom_frontier_command_front.png',
    imagePrompt: '前線指揮所 in kingdom_frontier, contested kingdom war frontier with portal muster yard, watchtowers, banners, supply camps, siege engines, resource claims, redoubt gate and command bunker, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain frontier, clear lantern light',
    description:
      '前線指揮所位於各王國勢力交錯的王國邊境，傳送點兵場、哨塔、補給營、資源據點、戰旗丘與前線地堡隨戰線推移反覆易手。這裡是王國戰、資源戰與開放衝突區，玩家可以 inspect 旗幟顏色、車轍方向、哨塔火盆和戰圖標記來判斷敵我控制，也能 search 木材據點、鐵礦據點、國庫車隊與戰圖地堡尋找軍需、稅銀、攻城零件與密令。若隊伍忽略偵騎號角、防火嶺煙線與暗林缺口的伏兵，龍騎士、深淵軍、天界守衛與戰神化身會把補給線切斷；若穩定沿傳送點兵場、前壘門與前線指揮所推進，則能帶回王國戰報、資源控制記錄、撤退路線與可交付的前線軍令。',
    exits: [
      { direction: 'west', targetRoomId: 'kingdom_frontier_war_table_bunker', description: '戰圖地堡在西側' },
    ],
    monsters: [
      { monsterId: 'kingdom_frontier_command_general', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'kingdom_frontier_war_table_marshal', maxCount: 1, respawnSeconds: 540 },
      { monsterId: 'kingdom_frontier_redoubt_captain', maxCount: 1, respawnSeconds: 540 },
    ],
    mapSymbol: '[令]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '前線指揮所的戰旗若突然換色，附近敵國斥候、精英巡邏或王國戰隊伍可能正在接近。',
      treasure: '前線指揮所的補給箱、車轍泥、哨塔火盆或戰圖暗格可能藏著王國邊境軍需。',
      spirit: '前線指揮所殘留王國軍令、資源點易手與前線撤退前的混亂記憶。',
    },
  },
};
