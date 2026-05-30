import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_026: Record<string, RoomDef> = {
serpent_delta_manymouth_confluence: {
    id: 'serpent_delta_manymouth_confluence',
    name: '百口合流',
    zone: 'serpent_delta' as RoomDef['zone'],
    image: 'serpent_delta_manymouth_confluence.png',
    imagePrompt: '百口合流 in serpent_delta, winding river delta with reed banks, stilt hamlet, serpent shrine, mangrove channels, fishing posts, blue lotus marsh and cold mist water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain river, clear lantern light',
    description:
      '百口合流位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
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
      '蛇神背水位於蜿蜒河道分裂成無數支流的蛇河三角洲，渡口、蘆岸、吊腳村、冷水彎與蛇祠階沿著水位變化互相連接。這裡是釣魚、採集與高密度遭遇區，旅人可以 觀察 水痕、鱗網結、鷺鳥標記和祭壇蛇紋來判斷潮位與怪群路線，也能 搜索 青藥小洲、藍蓮沼、泥魚潭與淹穀倉尋找藥草、魚骨、冰霧水和村落供品。若隊伍忽略分流倒灌、紅樹迷道與蛇卵丘的震動，湖蛇、暗法師、詛咒祭司與沼地獵手會把小船逼入死水；若穩定沿渡口入口、舊堤道與百口合流推進，則能抵達蛇神背水並帶回釣點記錄、採集路線與安全返航水標',
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
      '傳送點兵場鋪在邊境西側的石臺上，傳送陣殘光與徵兵旗影交錯，東面邊境軍路從車轍和拒馬之間延伸出去。圓臺周圍立著不同王國換下的短旗，旗腳壓著磨損名冊、空箭筒與捆好的行軍繩。遠處哨塔火盆時亮時暗，風把補給營的煙味吹到石臺邊。地面刻痕被多次改寫，舊徽記和新軍令重疊在一起，像每次集結都只是下一場邊境推進的開端。',
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
      '邊境軍路是一條被車輪壓硬的土石幹道，西側傳送點兵場的陣光仍可回望，東面西哨塔的木影立在坡上，南方補給營飄出帆布與炊煙味。道路兩旁插著矮旗、木樁與被泥濺黑的路牌，旗色常被風沙磨得難以分辨。路中央有許多交錯蹄印，部分朝哨塔急轉，部分拖向營地。草叢裡散著破盾和折斷旗杆，讓這條路不像後方大道，更像勢力邊線反覆推拉後留下的疤。',
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
      '西哨塔立在邊境軍路東端，木塔腳被石籠加固，塔頂火盆向南照著戰場岔口，西面仍能望見軍路與傳送點兵場的旗影。塔梯上掛著潮濕弩弦、巡哨鈴與被雨洗白的號角牌。塔下草坡被踩出環形警戒線，幾支斷箭插在木樁外側。當風從補給營方向吹來，塔身會發出低沉吱響，像整座哨塔仍在分辨不同旗號與車隊聲。',
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
      '補給營搭在邊境軍路南側，帆布棚、車箱、鹽袋與弩矢捆沿泥地排成混亂長列。北方軍路車轍進出不斷，南面鐵礦據點傳來敲石聲，東側戰場岔口能聽見哨塔號角交錯。營地中央有半熄火盆與臨時清點桌，桌上壓著濕掉的補給牌和斷封蠟。帳篷繩索被拉得很緊，像隨時準備收營撤走；泥水裡混著麥粒、馬蹄印和被急令撕碎的紙角。',
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
      '戰場岔口由四條泥石路交會而成，北面西哨塔投下斜影，南側攻城器械場傳來木輪軋聲，西面補給營的車隊痕跡混入東側東哨塔的巡路。岔口中央插著一根被砍斷的界旗，旗布換過多次，顏色層層縫在一起。地上有燒焦箭羽、碎盾邊和被馬蹄踩爛的信封，雨水沿車轍聚成暗色小溝。每條路都像剛被不同軍勢佔過，卻又沒有一方真正守住。',
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
      '東哨塔守在戰場岔口東側高地，塔身較西塔更破，外牆釘滿臨時補強木板。南面戰旗丘的旗海在坡後翻動，西側岔口塵土不斷，塔頂火盆則對著更遠的前線烽煙。木梯旁吊著裂開望筒、濕皮水袋與數枚不同紋章的箭鏃。塔下草地被反覆清空，只留下短短焦草和弩架腳印。火光一亮，塔影會覆過整段坡路，讓東線動向顯得格外緊張。',
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
      '木材據點靠在邊境林帶外緣，成排砍倒的松木與橡木被削成攻城梁，東側鐵礦據點的煙塵在樹梢後浮動。木樁上掛著臨時軍令、量尺與裂開的斧柄，地上鋪滿新鮮木屑與被血泥染暗的樹葉。幾段粗繩纏住拖木滑道，滑道盡頭有被火燒過的車輪印。森林深處偶爾傳出枝條斷裂聲，使這片據點像在戰線邊緣強行剝下一段活林，支撐前方所有器械與柵欄。',
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
      '鐵礦據點圍著一片露天礦脈搭起，黑灰岩面被鑿成階梯，木棚下堆滿礦籃、楔子與臨時熔爐。北面補給營送來空車，南側焚農莊飄著焦草味，西面木材據點供應支架，東側攻城器械場等待鐵料。礦坑邊插著多面被改換過的佔領旗，旗杆下還壓著碎稅牌。鐵屑沾在泥水裡泛出暗紅光，敲擊聲一停，遠處戰旗丘的號角便顯得更清楚。',
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
      '攻城器械場橫在戰旗丘與鐵礦據點之間，半組裝投石機、包鐵撞木與輪式盾棚佔滿泥地。北面戰場岔口的車轍延入器械堆，南側暗林缺口吹來冷暗樹影，西面鐵礦據點送來鉚釘，東面戰旗丘旗聲不停。木架上標著不同王國的修補記號，許多被新漆蓋住仍露出舊色。麻繩、油布和石彈堆成一圈圈陰影，像每具器械都在等待下一次推向山丘。',
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
      '戰旗丘是一座被無數旗杆刺滿的低丘，舊旗、新旗與被砍斷的旗骨混在一起，風一吹便發出乾裂拍響。北面東哨塔俯看丘頂，南側防火嶺留下黑色煙線，西面攻城器械場堆著沉重木架，東側停戰帳的白布在旗海外顯得異常刺眼。丘頂石環被戰靴磨平，中心立著一根換旗用的鐵桿。不同紋章在泥裡重疊，讓整座山丘像邊境控制權的傷口。',
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
      '停戰帳立在戰旗丘東側，白布帳面被泥點和箭孔弄得斑駁，帳繩拉向四個插旗木樁。西面戰旗丘的旗聲不斷，南側望遠鏡遺跡露出殘破石臺。帳內外擺著低桌、空杯、斷蠟封與未簽完的羊皮紙，兩種以上的徽章被反扣在桌角。帳外草地刻意清空，卻仍有拖靴痕與暗紅泥印穿過。風掀起帳門時，能看見停戰線被畫得很直，也被擦改過很多次。',
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
      '焚農莊只剩半塌穀倉、焦黑井架與被燒彎的犁具，北面鐵礦據點的敲擊聲穿過灰煙，東側暗林缺口吞下最後幾段籬笆。田埂上散著破陶碗、燒焦麥束與被急忙踩亂的腳印，屋樑仍偶爾落下細灰。舊門牌被煙熏到只剩模糊姓氏，旁邊釘著徵糧封條的一角。這片農地曾是邊境生活的縫隙，如今被戰線碾過，只留下補給與避難都失敗的痕跡。',
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
      '暗林缺口像被戰火撕開的森林傷口，北面攻城器械場的輪痕壓進樹影，南側國庫車隊的破車篷隱約可見，西面焚農莊焦煙低伏，東面防火嶺留著一道明亮灰燼線。缺口兩旁樹幹被砍出尖樁，枝上掛著殘旗與獵索。地面覆著黑葉、斷箭與被踩熄的營火灰，光線在林中忽暗忽亮。這裡的安靜不像休息，更像伏兵離開後仍未散去的壓迫。',
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
      '防火嶺是一道被刻意燒出的黑色稜線，北面戰旗丘旗影翻湧，南側俘虜柵欄低矮壓抑，西面暗林缺口仍帶樹脂煙味，東側望遠鏡遺跡在灰坡後露出殘石。嶺上焦草被踩成寬路，兩側挖有淺溝，溝裡殘留水袋、灰燼和熔黑箭頭。風越過嶺線時會捲起細灰，把遠處旗色染得發暗。這條火線不是自然山脊，而是為阻斷林火、伏兵與追擊而反覆燒出的戰地邊界。',
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
      '望遠鏡遺跡是一座倒塌觀測臺，殘留的銅製鏡筒斜靠在石基上，鏡片早已裂成數瓣。北面停戰帳的白布在視野裡晃動，南側前壘門的木牆被殘石遮住，西面防火嶺灰線清楚可見。臺階上刻著舊測距符號，旁邊散落碎玻璃、旗語片與摺斷三腳架。從破鏡中反出的不是完整天空，而是被戰火、煙線與旗色切碎的邊境。',
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
      '國庫車隊停在暗林缺口南側，幾輛包鐵車廂陷在泥中，鎖鏈、破封蠟與散落銀箱壓出深痕。北面林缺口的陰影貼近車尾，東側俘虜柵欄傳來木樁摩擦聲。車篷上仍掛著王庫徽記，卻被刀痕劃開，露出裡面空掉的格架與破布。車輪旁混著稅銀碎片、護衛羽飾和血泥，顯示這支車隊曾試圖穿過戰線，最後成為各方都不願放棄的重物。',
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
      '俘虜柵欄立在防火嶺南側，粗木樁圍成狹長圈，樁尖被煙熏黑，繩索在雨水中發脹。北方灰嶺擋住旗海，西面國庫車隊陷在泥裡，東側前壘門的守備木牆沉默壓近。柵欄外有空水桶、斷鎖與被踩扁的號碼木牌，內側泥地則佈滿來回踱步的短痕。風從防火嶺吹下時帶著灰味，把木樁縫裡的低語聲切得零碎而模糊。',
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
      '前壘門由泥牆、尖樁和兩扇包鐵木門組成，門前壕溝半乾，底部插滿折斷拒馬。北面望遠鏡遺跡可看見殘石輪廓，西側俘虜柵欄低伏在灰地上，東面戰圖地堡的門燈藏在土牆後。門柱上掛著多層換防牌，舊名字被刮去又重新刻上。踏板被軍靴磨出亮痕，壕溝邊散著雨水泡軟的命令紙，讓這道門顯得臨時卻固執。',
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
      '戰圖地堡半埋在前壘門東側的土坡裡，低矮入口用沙袋和圓木加固，門內透出油燈黃光。西面前壘門的換防聲隔著土牆傳來，東側前線指揮所壓在更深的壕道盡頭。地堡內的長桌覆滿邊境草圖、石鎮與染泥旗針，牆上吊著數張被火燎過的戰報。頂板偶爾落下細土，落在地圖上的河線與補給線之間，使每道計畫都帶著戰地臨時性。',
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
      '前線指揮所位於戰圖地堡東側最深處，矮牆圍出一片被踩硬的泥地，中央立著多面傳令旗與一張厚木指揮桌。西面地堡入口半埋在壕道後，桌旁堆著號角、封蠟匣、傷兵名冊與急送戰報。遠處戰旗丘與哨塔的火光都只能在煙霧中偶爾浮現，聲音卻會沿壕溝傳到這裡。旗桿底部綁著數條不同顏色的繩，像整條前線的拉扯都集中在這個泥濘小院。',
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
