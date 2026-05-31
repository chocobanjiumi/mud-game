import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_020: Record<string, RoomDef> = {
sapphire_lake_blueheart_sanctum: {
    id: 'sapphire_lake_blueheart_sanctum',
    name: '藍心聖潭',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_blueheart_sanctum.png',
    imagePrompt: '藍心聖潭 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '藍心聖潭位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，旅人可以 觀察 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 搜索 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認',
    exits: [
    ],
    monsters: [
      { monsterId: 'blueheart_lode_spirit', maxCount: 1, respawnSeconds: 720 },
      { monsterId: 'blue_lode_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'calmwater_spring_guardian', maxCount: 1, respawnSeconds: 380 },
    ],
    mapSymbol: '[心]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '藍心聖潭的湖面若出現反向水紋，附近湖蛇、晶蜥或水元素可能正在靠近。',
      treasure: '藍心聖潭的藍寶裂紋、水草根部或沉階縫隙旁可能藏著採集線索。',
      spirit: '藍心聖潭殘留採集者、水精靈與湖底礦脈長年共鳴的記憶。',
    },
  },

// ─── 王道市集擴充 (Lv 1-60) ────────────────────────────

  kingsroad_market_portal_plaza: {
    id: 'kingsroad_market_portal_plaza',
    name: '傳送陣廣場',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_portal_plaza.png',
    imagePrompt: '傳送陣廣場 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '傳送陣廣場鋪著淺灰王道石板，藍白陣光在中央圓槽裡緩慢旋轉，西側王道西市石路接入貨車動線，東面十字攤街展開布棚與攤旗，北側衛兵亭的銅鈴在巡線中輕響。廣場邊緣立著里程牌、旅商告示與成排行李架，石縫裡積著馬蹄泥和香料粉。陣光照到攤棚底部時，整座市集像從這裡向外分流，安全、交易與遠行的氣息同時聚在廣場中央。',
    exits: [
      { direction: 'east', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '十字攤街在東側' },
    ],
    monsters: [],
    mapSymbol: '[傳]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '傳送陣廣場的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '傳送陣廣場的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '傳送陣廣場保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_crossroad_stalls: {
    id: 'kingsroad_market_crossroad_stalls',
    name: '十字攤街',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_crossroad_stalls.png',
    imagePrompt: '十字攤街 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '十字攤街是王道市集最吵雜的交會處，西側傳送陣廣場的藍光被攤旗切碎，東面穀物拱廊飄來麥香，北方香料棚灑出辛辣氣味，南側水井小庭傳來打水聲。四角攤位擠滿水果籃、陶罐、修鞋架與油燈，攤主把價牌壓在石塊下防風。車轍在路中央互相交疊，衛兵腳步沿外圈巡過，使人潮雖密，仍保持一條清楚的市集主線。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_portal_plaza', description: '回到傳送陣廣場' },
      { direction: 'east', targetRoomId: 'kingsroad_market_grain_arcade', description: '穀物拱廊在東側' },
    ],
    monsters: [],
    mapSymbol: '[攤]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '十字攤街的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '十字攤街的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '十字攤街保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_grain_arcade: {
    id: 'kingsroad_market_grain_arcade',
    name: '穀物拱廊',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_grain_arcade.png',
    imagePrompt: '穀物拱廊 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '穀物拱廊用低矮石拱撐起，麻袋、篩籃與木秤沿牆堆放，空氣裡滿是乾麥與粉塵味。西面十字攤街的車轍進入拱下後變得平整，東側鍛匠列傳來鐵槌聲，北方布商巷垂下彩布影子。幾個穀袋被封蠟蓋住，袋口插著產地木牌。拱廊石柱底部磨得光亮，顯示貨車、挑夫和巡市衛兵日復一日從這裡穿過，也把市集糧秣氣味壓得格外踏實。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '回到十字攤街' },
      { direction: 'east', targetRoomId: 'kingsroad_market_blacksmith_row', description: '鍛匠列在東側' },
    ],
    monsters: [],
    mapSymbol: '[穀]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '穀物拱廊的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '穀物拱廊的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '穀物拱廊保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_spice_awning: {
    id: 'kingsroad_market_spice_awning',
    name: '香料棚',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_spice_awning.png',
    imagePrompt: '香料棚 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '香料棚掛著一排褪色紅黃帆布，曬乾椒串、鹽包與磨香料的小石臼堆在木桌上。南面十字攤街人聲翻湧，東側布商巷的染布在風中拍響，北方草藥方場送來苦草與乾花味。棚柱被香粉染成深色，地上散著月桂葉、胡椒粒和破陶勺。每當商隊車輪從遠處壓過，細粉便從布篷縫裡落下，像一層暖色薄霧，讓這角落比主街更濃、更慢。',
    exits: [
      { direction: 'east', targetRoomId: 'kingsroad_market_cloth_lane', description: '布商巷在東側' },
    ],
    monsters: [],
    mapSymbol: '[香]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '香料棚的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '香料棚的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '香料棚保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_blacksmith_row: {
    id: 'kingsroad_market_blacksmith_row',
    name: '鍛匠列',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_blacksmith_row.png',
    imagePrompt: '鍛匠列 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '鍛匠列沿市集南側排開，爐火與水槽交替發出紅光和白汽，西面穀物拱廊的粉塵一到此處便被鐵味壓住。北方長路折回冒險委託板，東面商隊院堆著待修車軸與蹄鐵。鐵砧旁掛滿農具、短刃、鍋架與門鉸，並非戰場兵庫，而是市集日常的硬骨。地上水痕混著煤屑，火星落在黑石板上立刻暗去，只留下密密麻麻的燒點。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_grain_arcade', description: '回到穀物拱廊' },
      { direction: 'east', targetRoomId: 'kingsroad_market_caravan_yard', description: '商隊院在東側' },
    ],
    monsters: [],
    mapSymbol: '[鍛]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '鍛匠列的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '鍛匠列的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '鍛匠列保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_cloth_lane: {
    id: 'kingsroad_market_cloth_lane',
    name: '布商巷',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_cloth_lane.png',
    imagePrompt: '布商巷 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '布商巷被一整排染布遮成彩色窄道，西側香料棚的辛香貼著布邊飄入，南面穀物拱廊的麻袋堆壓住巷口，東側冒險委託板旁的人聲透過布幕傳來。木架上掛著羊毛披肩、雨布、旗料與修補好的馬毯，水槽裡漂著淡藍染液。石板長年被濕布拖過，顏色比主街更暗。巷頂布帶互相摩擦時，會露出一線天光，照在價牌和量尺上。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_spice_awning', description: '回到香料棚' },
      { direction: 'east', targetRoomId: 'kingsroad_market_adventurer_board', description: '冒險委託板在東側' },
    ],
    monsters: [],
    mapSymbol: '[布]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '布商巷的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '布商巷的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '布商巷保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_adventurer_board: {
    id: 'kingsroad_market_adventurer_board',
    name: '冒險委託板',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_adventurer_board.png',
    imagePrompt: '冒險委託板 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '冒險委託板立在市集中段的遮雨木棚下，木板上疊著懸賞紙、商隊護送單、尋物告示與破舊路線圖。西側布商巷的彩布掠過棚角，南方鍛匠列傳來鐵槌聲，東面錢幣兌換所響著清脆算籌，北側拍賣帳棚的人群聲斷續傳來。板腳被無數靴印磨亮，旁邊有墨瓶、斷羽筆與被撕下的封條。這裡像市集的消息肺葉，把遠路、貨價和危險傳聞一起呼吸。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_cloth_lane', description: '回到布商巷' },
      { direction: 'east', targetRoomId: 'kingsroad_market_coin_exchange', description: '錢幣兌換所在東側' },
    ],
    monsters: [],
    mapSymbol: '[任]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '冒險委託板的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '冒險委託板的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '冒險委託板保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_caravan_yard: {
    id: 'kingsroad_market_caravan_yard',
    name: '商隊院',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_caravan_yard.png',
    imagePrompt: '商隊院 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '商隊院是一片被車輪壓實的方形院落，西側鍛匠列送來修好的輪箍，北面錢幣兌換所的銅鈴聲穿過帳棚，東方馱獸圈的繩欄與草料味沿風傳來。院內停著高蓬車、貨籠和旅行箱，木牌上寫著不同城鎮名。地面有新舊車轍交錯，雨水積在深槽裡反出旗影。貨物雖多，卻按路線分堆，像整座市集的外來脈絡都先在這裡落腳。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_blacksmith_row', description: '回到鍛匠列' },
    ],
    monsters: [],
    mapSymbol: '[車]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '商隊院的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '商隊院的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '商隊院保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_coin_exchange: {
    id: 'kingsroad_market_coin_exchange',
    name: '錢幣兌換所',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_coin_exchange.png',
    imagePrompt: '錢幣兌換所 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '錢幣兌換所是一座半開石櫃臺，銅秤、砝碼和小鎖箱在油燈下泛著溫光。西側冒險委託板的人聲不斷，南面商隊院送來沉重錢袋，北方文書角則飄著墨水與封蠟味。櫃臺後方掛著各地幣樣，旁邊的厚帳本以皮帶綁住。地面石板被排隊人潮磨出弧線，散落的微小金屬屑卡在縫裡，使這一角比市集其他地方更安靜，也更精確。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_adventurer_board', description: '回到冒險委託板' },
    ],
    monsters: [],
    mapSymbol: '[幣]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '錢幣兌換所的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '錢幣兌換所的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '錢幣兌換所保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_herbal_square: {
    id: 'kingsroad_market_herbal_square',
    name: '草藥方場',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_herbal_square.png',
    imagePrompt: '草藥方場 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '草藥方場由一圈低棚與曬架圍成，乾花、藥根、鹽漬葉與小陶瓶按氣味分區擺放。南側香料棚的熱辣氣息和這裡的苦草味混在一起，東面魚販石階送來潮濕水聲。石桌上鋪著切草刀、草繩和小銅秤，幾隻玻璃瓶在陽光下投出綠影。方場邊緣有衛兵路線留下的空隙，讓搬運藥籃的人能從攤棚間穿過而不撞上主街人潮。',
    exits: [
      { direction: 'east', targetRoomId: 'kingsroad_market_fishmonger_steps', description: '魚販石階在東側' },
    ],
    monsters: [],
    mapSymbol: '[藥]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '草藥方場的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '草藥方場的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '草藥方場保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_fishmonger_steps: {
    id: 'kingsroad_market_fishmonger_steps',
    name: '魚販石階',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_fishmonger_steps.png',
    imagePrompt: '魚販石階 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '魚販石階沿著市場水渠下降，濕石被鹽水磨得發亮，西面草藥方場的乾草香在此被魚腥與河泥味壓住。東側拍賣帳棚的喧鬧透過帆布傳來，南方長路折回布商巷。階邊擺著木桶、剖魚板、網繩和碎冰，水渠裡浮著細小銀鱗。每次有人抬桶經過，石階便留下一串濕痕，像把市集的水路與攤街連在一起。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_herbal_square', description: '回到草藥方場' },
      { direction: 'east', targetRoomId: 'kingsroad_market_auction_tent', description: '東側拍賣帳棚通往文書角' },
    ],
    monsters: [],
    mapSymbol: '[魚]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '魚販石階的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '魚販石階的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '魚販石階保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_scribe_corner: {
    id: 'kingsroad_market_scribe_corner',
    name: '文書角',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_scribe_corner.png',
    imagePrompt: '文書角 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '文書角夾在拍賣帳棚與錢幣兌換所之間，長桌上鋪著契紙、印泥、封蠟和一排削尖羽筆。西側帳棚的木槌聲不時震動紙角，南面兌換所傳來錢幣清響，東側窄門通往後巷帳本處。棚柱上掛著抄寫價目與送件木牌，墨水瓶旁有砂盒用來吸乾新字。這一角不如主街熱鬧，卻把交易、委託和貨權用細密字跡固定下來。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_auction_tent', description: '西側拍賣帳棚回到魚販石階' },
    ],
    monsters: [],
    mapSymbol: '[書]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '文書角的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '文書角的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '文書角保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_guard_post: {
    id: 'kingsroad_market_guard_post',
    name: '衛兵亭',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_guard_post.png',
    imagePrompt: '衛兵亭 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '衛兵亭靠在傳送陣廣場北側，木亭下有檢查桌、銅鈴、通行牌和一排掛整齊的短矛。南面廣場陣光映在桌腳，東側巡線繞向草藥方場，西面窄石巷通往王道西哨巷。亭旁石牆貼滿失物公告與市集規章，角落放著封存的違禁貨箱。衛兵靴痕繞亭形成深色半圈，使這裡不像關卡那樣壓迫，卻讓整個市集的秩序有了清楚邊界。',
    exits: [
    ],
    monsters: [],
    mapSymbol: '[衛]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '衛兵亭的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '衛兵亭的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '衛兵亭保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_well_court: {
    id: 'kingsroad_market_well_court',
    name: '水井小庭',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_well_court.png',
    imagePrompt: '水井小庭 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '水井小庭藏在十字攤街南側，圓井周圍鋪著深色濕石，井架掛滿水桶、麻繩和修補過的木滑輪。北面主街人聲從攤棚縫裡流入，東側酒館門前飄來麥酒和燉肉味。井邊有洗菜盆、碎陶杯和孩子刻下的小記號，水面映著布棚和油燈。這裡的聲音比主街低，打水、閒談與短暫歇腳的動作讓市集露出日常而穩定的一面。',
    exits: [
      { direction: 'east', targetRoomId: 'kingsroad_market_tavern_front', description: '酒館門前在東側' },
    ],
    monsters: [],
    mapSymbol: '[井]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '水井小庭的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '水井小庭的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '水井小庭保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_auction_tent: {
    id: 'kingsroad_market_auction_tent',
    name: '拍賣帳棚',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_auction_tent.png',
    imagePrompt: '拍賣帳棚 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '拍賣帳棚撐在市集北段，厚帆布遮住木槌臺、貨箱和半圈臨時座席。南面長路回到冒險委託板，西側魚販石階帶來潮氣，東面文書角準備契紙，北方高看台投下石欄陰影。帳內吊著號牌、封繩和小油燈，貨箱上有來自不同商隊的蠟印。每次木槌落下，帆布頂會微微震動，帳外人群也隨之安靜一瞬，連遠處攤販叫賣都像被短暫收進帳縫裡。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_fishmonger_steps', description: '西側魚販石階回到市場水渠邊' },
      { direction: 'east', targetRoomId: 'kingsroad_market_scribe_corner', description: '文書角在東側' },
    ],
    monsters: [],
    mapSymbol: '[拍]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '拍賣帳棚的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '拍賣帳棚的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '拍賣帳棚保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_tavern_front: {
    id: 'kingsroad_market_tavern_front',
    name: '酒館門前',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_tavern_front.png',
    imagePrompt: '酒館門前 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '酒館門前位於水井小庭東側，厚木門常年半開，門內暖光照出酒桶、長凳和掛滿杯子的橫梁。西面井庭的濕石反著燈色，東側長路繞往馱獸圈，空氣裡混著麥酒、燉肉、濕馬毯和煙草味。門旁公告架貼著演奏時辰、失物紙條與幾張被雨水捲邊的路線圖。石階被來往腳步磨得圓滑，像整個市集在喧鬧之外保留的一處歇息口。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_well_court', description: '回到水井小庭' },
    ],
    monsters: [],
    mapSymbol: '[酒]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '酒館門前的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '酒館門前的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '酒館門前保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_pack_animal_ring: {
    id: 'kingsroad_market_pack_animal_ring',
    name: '馱獸圈',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_pack_animal_ring.png',
    imagePrompt: '馱獸圈 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '馱獸圈用粗木欄圍在市集東南角，草料、鞍袋和水槽沿欄內排開，幾條繩索固定在磨亮的木樁上。西側長路繞回商隊院，北面路神小祠的祈路布條在風中晃動。圈外泥地佈滿蹄印與車轍，空氣裡有乾草、皮革和熱獸息。欄門旁掛著商隊號牌與餵料記錄，顯示每支遠行商旅在離開市場前，都會在此整理最後的重量與節奏。',
    exits: [
    ],
    monsters: [],
    mapSymbol: '[獸]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '馱獸圈的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '馱獸圈的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '馱獸圈保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_shrine_of_routes: {
    id: 'kingsroad_market_shrine_of_routes',
    name: '路神小祠',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_shrine_of_routes.png',
    imagePrompt: '路神小祠 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '路神小祠是一座小小石龕，立在馱獸圈北側與後巷之間，龕內放著磨平的路石、銅鈴和被香煙熏黑的木牌。南面馱獸圈傳來蹄聲，西側錢幣兌換所的清響隔著棚布，北方後巷帳本處藏在貨箱陰影裡。祠前繫著各色行路布條，旁邊有倒空的水囊與小硬幣。這裡不高大，卻把商隊出發、歸來和迷路者的願望都收在低矮石龕前。',
    exits: [
    ],
    monsters: [],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '路神小祠的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '路神小祠的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '路神小祠保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_back_alley_ledgers: {
    id: 'kingsroad_market_back_alley_ledgers',
    name: '後巷帳本處',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_back_alley_ledgers.png',
    imagePrompt: '後巷帳本處 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '後巷帳本處位於市集背面的窄巷中，貨箱、舊帳冊和封存木櫃把牆邊擠得只剩一條暗路。西側繞回文書角，南面路神小祠的香煙從巷口飄入，北側窄梯通向市集高看台。帳本封皮被潮氣翹起，紙頁間夾著乾花、票根和褪色押印。巷內光線被棚布切得細碎，遠處主街喧鬧像隔著厚布，只有翻頁聲與木箱摩擦聲格外清楚。',
    exits: [
    ],
    monsters: [],
    mapSymbol: '[帳]',
    mapX: 5,
    mapY: 2,
    guardianHints: {
      creature: '後巷帳本處的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '後巷帳本處的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '後巷帳本處保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

kingsroad_market_high_balcony: {
    id: 'kingsroad_market_high_balcony',
    name: '市集高看台',
    zone: 'kingsroad_market' as RoomDef['zone'],
    image: 'kingsroad_market_high_balcony.png',
    imagePrompt: '市集高看台 in kingsroad_market, busy kingsroad market town hub with portal plaza, canvas stalls, caravan yard, merchant signs, guild board, guards and warm lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain market, clear lantern light',
    description:
      '市集高看台架在拍賣帳棚北側，高出攤棚與人潮，石欄外能看見傳送陣廣場的藍光、十字攤街的彩棚和東側商隊院的車頂。南面階道回到拍賣帳棚，後方窄梯則靠近帳本後巷。看台地面鋪著磨亮石板，欄杆上掛著節慶旗繩和幾盞防風燈。從這裡聽見的市場聲音會被拉成一片連續波紋，讓整座市集的路線與人流一目了然。',
    exits: [
    ],
    monsters: [],
    mapSymbol: '[台]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '市集高看台的衛兵巡線與商隊哨聲讓此處維持安全，適合整備而非戰鬥。',
      treasure: '市集高看台的價牌、帳本或攤棚角落可能藏著王道市集委託線索。',
      spirit: '市集高看台保存著旅商、冒險者與傭兵在大道交會處交換情報的記憶。',
    },
  },

// ─── 競技城區擴充 (Lv 10-60) ───────────────────────────

  arena_quarter_grand_gate: {
    id: 'arena_quarter_grand_gate',
    name: '競技城門',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_grand_gate.png',
    imagePrompt: '競技城門 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '競技城門以厚重石拱撐起整片城區入口，拱頂掛著被煙火燻黑的勝場旗，門洞下方鋪滿被靴跟磨亮的石階。東側人潮流入票券柱廊，北面高牆浮雕指向冠軍牆，西側拱廊外則能遠眺藍寶湖的粼粼波光。城門兩旁立著裁判銅鐘、賽程木牌與封蠟通行箱，湖風吹進門內時會把沙塵、酒味和觀眾歡呼一起捲起，像把整座競技場的秩序先壓在入口前。',
    exits: [
      { direction: 'east', targetRoomId: 'arena_quarter_ticket_colonnade', description: '票券柱廊在東側' },
    ],
    monsters: [],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '競技城門的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '競技城門的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '競技城門保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_ticket_colonnade: {
    id: 'arena_quarter_ticket_colonnade',
    name: '票券柱廊',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_ticket_colonnade.png',
    imagePrompt: '票券柱廊 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '票券柱廊由兩排方柱撐起，柱面貼滿不同顏色的入場券、約戰牌與延期告示，火盆煙灰把拱頂染成暗金色。西側石路回到競技城門，東側櫃台旁的人流通往下注所，北面檢查欄杆後能看見武器檢查處的驗刃桌。地面刻著觀眾與鬥士分流線，磨損最深的線條通向今日主賽場；幾張被撕半截的票根夾在柱縫裡，暗示有人臨場換過對戰名單。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_grand_gate', description: '回到競技城門' },
      { direction: 'east', targetRoomId: 'arena_quarter_betting_house', description: '下注所在東側' },
    ],
    monsters: [],
    mapSymbol: '[票]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '票券柱廊的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '票券柱廊的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '票券柱廊保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_betting_house: {
    id: 'arena_quarter_betting_house',
    name: '下注所',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_betting_house.png',
    imagePrompt: '下注所 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '下注所低矮而擁擠，牆上黑板用粉筆列著賠率、傷退名單與臨時改期，櫃台後的鐵籠裡堆著封蠟籌碼。西側柱影回到票券柱廊，東面沙粒從熱身沙地一路被帶進門檻，北側窄梯通向獎品櫃。櫃台下方的舊血痕被反覆擦洗，仍在燈下泛暗；若某行賠率被紅線劃掉，通常代表裁判席已經收到不尋常的挑戰申請。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_ticket_colonnade', description: '回到票券柱廊' },
      { direction: 'east', targetRoomId: 'arena_quarter_warmup_sand', description: '熱身沙地在東側' },
      { direction: 'north', targetRoomId: 'arena_quarter_prize_counter', description: '獎品櫃在北側' },
    ],
    monsters: [],
    mapSymbol: '[注]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '下注所的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '下注所的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '下注所保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_weapon_check: {
    id: 'arena_quarter_weapon_check',
    name: '武器檢查處',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_weapon_check.png',
    imagePrompt: '武器檢查處 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '武器檢查處擺滿長桌、驗刃石和掛著號牌的寄放架，桌面留下無數刀尖刮出的細白痕。南側欄杆回到票券柱廊，東側繞過封條與登記牌後進入訓練場，北面鎖甲聲沿窄巷傳向甲架巷。裁判把不同武器的允許長度刻在銅尺上，旁邊還有被沒收的倒鉤、毒針與破裂護腕；若銅鐘連響三次，代表某件兵器需要送往裁判席重新判定。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_training_yard',
        description: '東側需繞過武器封條、驗刃桌與登記欄杆後，才會進入訓練場範圍，沿途裁判會反覆查驗',
        edgeNote: '武器檢查處到訓練場需穿過檢查動線與欄杆，距離長於相鄰格。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '北側穿過寄放牌、鎖甲架與窄巷轉角後，才會抵達甲架巷，盔甲摩擦聲會逐漸變近',
        edgeNote: '武器檢查處到甲架巷需繞過寄放裝備區與窄巷，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[檢]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '武器檢查處的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '武器檢查處的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '武器檢查處保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_warmup_sand: {
    id: 'arena_quarter_warmup_sand',
    name: '熱身沙地',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_warmup_sand.png',
    imagePrompt: '熱身沙地 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '熱身沙地被木欄分成數個小圈，沙面滿是拖步、翻滾與盾牌落地留下的凹痕。西側櫃台喧聲來自下注所，南面裁判線通向東決鬥圈，東側藥草味則引向醫護長椅。幾具訓練木人被打得傾斜，胸口還釘著昨日的戰術箭標；沙坑邊掛著水袋、備用護膝與破裂練習劍，任何太接近正式邊線的動作都會引來裁判哨聲。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_betting_house', description: '回到下注所' },
      { direction: 'south', targetRoomId: 'arena_quarter_duel_ring_east', description: '南側決鬥邊線通往東決鬥圈' },
      { direction: 'east', targetRoomId: 'arena_quarter_healer_bench', description: '醫護長椅在東側' },
    ],
    monsters: [
      { monsterId: 'arena_training_dummy', maxCount: 2, respawnSeconds: 240 },
      { monsterId: 'arena_sand_brawler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[沙]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '熱身沙地的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '熱身沙地的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '熱身沙地保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_duel_ring_east: {
    id: 'arena_quarter_duel_ring_east',
    name: '東決鬥圈',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_duel_ring_east.png',
    imagePrompt: '東決鬥圈 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '東決鬥圈以白灰畫出圓形邊線，邊線外插著紅色裁判旗，旗尖在熱風裡不停顫動。北側沙痕回到熱身沙地，西面需穿過兩圈判定線才會接到西決鬥圈，南側短階通往裁判席。沙地中央比外圈更暗，混著汗水、鐵鏽和舊血；看台聲音在此變得格外集中，每一次拔劍都會被周圍石牆放大成正式開場的前奏。',
    exits: [
      { direction: 'north', targetRoomId: 'arena_quarter_warmup_sand', description: '北側回到熱身沙地' },
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_duel_ring_west',
        description: '西側需穿過兩圈決鬥邊線與裁判旗架，才會接到西決鬥圈入口，場內人潮會阻擋直行',
        edgeNote: '東西決鬥圈之間隔著裁判線與觀戰欄，不是相鄰平面一格。',
      },
      { direction: 'south', targetRoomId: 'arena_quarter_referee_box', description: '南側裁判線通往裁判席' },
    ],
    monsters: [
      { monsterId: 'arena_blade_duelist', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'arena_sand_brawler', maxCount: 1, respawnSeconds: 260 },
    ],
    mapSymbol: '[東]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '東決鬥圈的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '東決鬥圈的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '東決鬥圈保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_duel_ring_west: {
    id: 'arena_quarter_duel_ring_west',
    name: '西決鬥圈',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_duel_ring_west.png',
    imagePrompt: '西決鬥圈 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '西決鬥圈靠近訓練場一側，圓線外的木樁綁著厚麻繩，防止熱身者誤闖正式判定區。東側繞過裁判旗架能抵達東決鬥圈，西面沙坑通往訓練場，北側沿外圈階梯上到裁判席。此處沙面較粗，常留著盾牌邊緣刮出的半月痕；牆上懸著幾面破盾，盾背寫有失敗者的姓氏，提醒每場練習都可能變成公開試煉。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_duel_ring_east',
        description: '東返時需穿過裁判旗架、觀戰欄與沙地邊線，才會回到東決鬥圈，腳下沙痕能辨識路線',
        edgeNote: '西決鬥圈到東決鬥圈需要繞過場內分隔線，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_referee_box',
        description: '北側需沿決鬥圈外緣繞過判定旗與封鎖繩後，才到裁判席，階梯旁有衛兵把守',
        edgeNote: '西決鬥圈到裁判席要沿外圈繞行，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_sand_brawler', maxCount: 2, respawnSeconds: 260 },
      { monsterId: 'arena_blade_duelist', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[西]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '西決鬥圈的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '西決鬥圈的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '西決鬥圈保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_training_yard: {
    id: 'arena_quarter_training_yard',
    name: '訓練場',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_training_yard.png',
    imagePrompt: '訓練場 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '訓練場比熱身沙地更寬，木樁、沙袋、盾靶和移動橫木排成多條演練路線，地面被反覆踩成硬實黃沙。西側登記欄杆通回武器檢查處，東面正式邊線連著西決鬥圈，北側戰術箭標指向戰術桌。牆邊掛著不同顏色的隊列牌，紅牌代表重武器演練，藍牌代表術法躲避；若某組木靶忽然同時轉向，表示裁判正在測試新的進場規則。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_weapon_check',
        description: '西返時需穿過訓練木樁、沙坑邊線與登記欄杆，才回到武器檢查處，隊列會拖慢移動',
        edgeNote: '訓練場西返武器檢查處需要沿訓練區外緣繞行，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_strategy_tables',
        description: '北側穿過訓練隊列與沙地分隔繩後，才會到達戰術桌區，木牌標示今日演練路線',
        edgeNote: '訓練場到戰術桌要穿過隊列與分隔繩，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_training_dummy', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'arena_shield_breaker', maxCount: 1, respawnSeconds: 340 },
    ],
    mapSymbol: '[訓]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '訓練場的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '訓練場的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '訓練場保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_healer_bench: {
    id: 'arena_quarter_healer_bench',
    name: '醫護長椅',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_healer_bench.png',
    imagePrompt: '醫護長椅 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '醫護長椅排在熱身沙地東側，白布棚下擺著鹽水盆、縫針、冰袋與沾滿藥草汁的繃帶。西側沙地仍有練習木劍敲擊聲，北面階梯繞向下層看台，旁邊的傷者名牌按嚴重程度倒掛在木板上。長椅腿部被磨出深痕，顯示無數鬥士曾在此等待判定；棚柱後還藏著一排染血盾牌，只有確認無法再戰時才會被送往武器檢查處封存。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_warmup_sand', description: '回到熱身沙地' },
    ],
    monsters: [],
    mapSymbol: '[醫]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '醫護長椅的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '醫護長椅的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '醫護長椅保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_armor_rack_lane: {
    id: 'arena_quarter_armor_rack_lane',
    name: '甲架巷',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_armor_rack_lane.png',
    imagePrompt: '甲架巷 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '甲架巷狹長而沉重，兩側木架掛滿鎖甲、護肩、破盾和正在冷卻的鉚釘，空氣裡有油脂與熱金屬味。南側沿寄放牌可回到武器檢查處，東側繞過維修台後接向戰術桌。巷底的修甲火盆映出一排排空盔，像有人正低頭等待登場；幾件護甲內側刻著舊賽號，刮痕方向能看出它們曾在冠軍牆附近接受過公開展示。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_weapon_check',
        description: '南側沿甲架巷穿過鎖甲架與寄放牌，最後才回到武器檢查處，路旁有修甲火盆',
        edgeNote: '甲架巷南返武器檢查處需穿過裝備寄放動線，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_strategy_tables',
        description: '東側需繞過整排護甲架與維修台，才會接到戰術桌旁的通道，裝備箱會擋住直線',
        edgeNote: '甲架巷到戰術桌被裝備架與維修台隔開，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_shield_breaker', maxCount: 2, respawnSeconds: 340 },
      { monsterId: 'arena_blade_duelist', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[甲]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '甲架巷的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '甲架巷的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '甲架巷保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_champion_wall: {
    id: 'arena_quarter_champion_wall',
    name: '冠軍牆',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_champion_wall.png',
    imagePrompt: '冠軍牆 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '冠軍牆是一面長而微彎的黑石浮雕牆，牆上刻著勝者姓名、武器輪廓與最後一擊的姿態，許多字槽被獻花灰燼染成銀白。南側紀念階回到競技城門，東面銘牌牆繞向甲架巷，北側獻花階通往勝利拱，西側湖風從藍寶湖方向灌入。牆根散著乾花、斷劍穗與未寄出的挑戰書，某些新刻名字仍帶著石粉，像剛從裁判席送來。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '東側沿冠軍銘牌牆繞過紀念柱後，才會進入甲架巷，觀眾獻花會佔住牆邊通道',
        edgeNote: '冠軍牆到甲架巷要沿紀念牆與柱廊繞行，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_victory_arch',
        description: '北側需穿過冠軍銘牌、獻花階與拱門前廊後，才抵達勝利拱，地面刻滿冠軍年份',
        edgeNote: '冠軍牆到勝利拱有紀念階與拱門前廊，距離長於相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_chain_beast', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'arena_veteran_gladiator', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[冠]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '冠軍牆的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '冠軍牆的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '冠軍牆保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_lower_stands: {
    id: 'arena_quarter_lower_stands',
    name: '下層看台',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_lower_stands.png',
    imagePrompt: '下層看台 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '下層看台貼近場邊，石座被觀眾磨得發亮，欄杆上纏著用來分隔押注席與普通席的紅繩。南側階梯下到醫護長椅，西側場門通入中央競技場，北側座席階梯爬向上層看台。此處能清楚聞到沙地血鐵味，也能聽見裁判席的哨聲；座位底下塞著舊票根、碎陶杯與短鉛筆，顯示每一排看台都在記錄自己的勝負偏見。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_center_arena',
        description: '西側需沿下層看台欄杆與觀眾通道繞行，才會進入中央競技場，場門會分批開放',
        edgeNote: '下層看台到中央競技場需穿過觀眾欄杆與場門，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_upper_stands',
        description: '北側階梯繞過觀眾席、旗桿與護欄後，才會爬到上層看台，階梯會隨人潮堵塞',
        edgeNote: '下層看台到上層看台有階梯高低差，不是平面相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_chain_beast', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'arena_sand_brawler', maxCount: 2, respawnSeconds: 260 },
    ],
    mapSymbol: '[看]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '下層看台的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '下層看台的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '下層看台保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_upper_stands: {
    id: 'arena_quarter_upper_stands',
    name: '上層看台',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_upper_stands.png',
    imagePrompt: '上層看台 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '上層看台沿著競技場內壁抬升，風從高處穿過旗桿，使每一面隊色旗都像在替下方決鬥計時。南側階梯回到下層看台，西面有護欄與簾幕通往貴賓包廂。從這裡能看見中央競技場完整圓形，也能辨認熱身沙地、裁判席與酒館燈火的位置；座椅背後刻著密密麻麻的私下注記，有些已被衛兵用黑漆塗掉。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '南側階梯沿觀眾席護欄下行，繞過旗桿後才回到下層看台，呼喊聲會越來越近',
        edgeNote: '上層看台南返下層看台需要走階梯與護欄通道，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'arena_veteran_gladiator', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'arena_rookie_mage', maxCount: 1, respawnSeconds: 330 },
    ],
    mapSymbol: '[座]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '上層看台的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '上層看台的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '上層看台保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_roar_tavern: {
    id: 'arena_quarter_roar_tavern',
    name: '怒吼酒館',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_roar_tavern.png',
    imagePrompt: '怒吼酒館 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '怒吼酒館嵌在看台外側，門牌是一面被劈開的圓盾，屋內長桌因拍桌叫好而佈滿裂痕。西側後門繞過休息棚可到醫護長椅，北側外廊穿過觀戰人潮後接往下層看台。牆上掛著失敗者請客留下的酒杯，吧台旁的小黑板寫滿非正式外號與場邊傳聞；每當中央競技場爆出歡呼，屋頂灰塵就會跟著震落在麥酒泡沫上。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_healer_bench',
        description: '西側穿過酒館後門、休息棚與傷藥車後，才會到醫護長椅，藥草味會指引方向',
        edgeNote: '怒吼酒館到醫護長椅需要繞過休息棚與後門通道，距離較長。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '北側需穿過觀戰人潮與酒館外廊後，才會進入下層看台，酒杯聲會逐漸被歡呼取代',
        edgeNote: '怒吼酒館到下層看台被人潮與外廊隔開，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[酒]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '怒吼酒館的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '怒吼酒館的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '怒吼酒館保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_strategy_tables: {
    id: 'arena_quarter_strategy_tables',
    name: '戰術桌',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_strategy_tables.png',
    imagePrompt: '戰術桌 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '戰術桌區擺著數張沉重木桌，桌面用炭筆畫出決鬥圈、看台門、醫護路線與裁判旗的位置，旁邊壓著沙漏和染色石子。南側分隔繩回到訓練場，西面護甲架延向甲架巷，東側通道接到裁判席。幾張圖板上還留著未擦乾淨的失敗路線，紅石子集中在東決鬥圈與中央競技場之間，說明今日的主要風險不是力量，而是入場角度與退場時機。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_training_yard',
        description: '南側需收起戰術圖板、繞過沙地分隔繩後，才回到訓練場，路上能看見演練箭標',
        edgeNote: '戰術桌南返訓練場需要穿過戰術區與訓練隊列，距離長於相鄰格。',
      },
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '西側沿戰術桌邊緣繞過維修台與護甲架後，才會到甲架巷，圖板與箱架會擋住直行',
        edgeNote: '戰術桌西返甲架巷被維修台與護甲架隔開，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'arena_rookie_mage', maxCount: 1, respawnSeconds: 330 },
      { monsterId: 'arena_masked_challenger', maxCount: 1, respawnSeconds: 450 },
    ],
    mapSymbol: '[策]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '戰術桌的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '戰術桌的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '戰術桌保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_referee_box: {
    id: 'arena_quarter_referee_box',
    name: '裁判席',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_referee_box.png',
    imagePrompt: '裁判席 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '裁判席築在決鬥圈與包廂之間的高台上，桌前排列黑白判定旗、銅哨、沙漏與封存裁決的木匣。北側階梯繞回西決鬥圈，西面戰術圖板連著戰術桌，南側內階下到貴賓包廂。高台地板被靴跟踩出一排固定站位，視線能同時看見兩個決鬥圈和中央競技場入口；若木匣上的紅封條被揭開，全場鐘聲會立刻壓過觀眾喧鬧。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_duel_ring_west',
        description: '北側沿裁判席階梯與判定旗繞下去，才會回到西決鬥圈，裁判哨聲會標示入口',
        edgeNote: '裁判席北返西決鬥圈需沿階梯與裁判旗區繞行，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_private_boxes',
        description: '南側內側階梯通往貴賓包廂',
      },
    ],
    monsters: [
      { monsterId: 'arena_veteran_gladiator', maxCount: 1, respawnSeconds: 420 },
      { monsterId: 'arena_shield_breaker', maxCount: 1, respawnSeconds: 340 },
    ],
    mapSymbol: '[裁]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '裁判席的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '裁判席的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '裁判席保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_prize_counter: {
    id: 'arena_quarter_prize_counter',
    name: '獎品櫃',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_prize_counter.png',
    imagePrompt: '獎品櫃 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '獎品櫃用厚玻璃和鐵欄圍住，櫃中陳列獎牌、刻名護符、磨亮的訓練徽章與幾件只在冠軍戰後開放的武器。南側窄梯回到下注所，東側兌換欄杆繞向熱身沙地，北面貨門可接到王道市集南緣。櫃台後方有一本皮面名冊，頁角被翻得發黑；某些獎品底座留著空位，旁邊只有一張寫著待裁判確認的銅牌。',
    exits: [
      { direction: 'south', targetRoomId: 'arena_quarter_betting_house', description: '回到下注所' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_warmup_sand',
        description: '東側需繞過獎品櫃、兌換欄杆與賽程告示後，才會接到熱身沙地，獎牌櫃會吸引人潮',
        edgeNote: '獎品櫃到熱身沙地需要穿過兌換動線與告示區，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[獎]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '獎品櫃的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '獎品櫃的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '獎品櫃保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_private_boxes: {
    id: 'arena_quarter_private_boxes',
    name: '貴賓包廂',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_private_boxes.png',
    imagePrompt: '貴賓包廂 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '貴賓包廂被深紅簾幕與銅欄隔開，桌上擺著銀杯、私下注冊、印有家徽的座牌和能直接看見場心的單筒鏡。東側護欄接回上層看台，北側內階上到裁判席，南側包廂階梯通入中央競技場。簾幕後方有數條狹窄服務道，牆上掛著靜音鈴繩；當鈴繩被拉動，附近侍從會先看向裁判席，再決定是否放下包廂前的遮簾。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_referee_box',
        description: '北側內側階梯回到裁判席',
      },
      { direction: 'south', targetRoomId: 'arena_quarter_center_arena', description: '南側包廂階梯進入中央競技場' },
    ],
    monsters: [
      { monsterId: 'arena_masked_challenger', maxCount: 1, respawnSeconds: 450 },
      { monsterId: 'arena_rookie_mage', maxCount: 1, respawnSeconds: 330 },
    ],
    mapSymbol: '[包]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '貴賓包廂的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '貴賓包廂的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '貴賓包廂保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_victory_arch: {
    id: 'arena_quarter_victory_arch',
    name: '勝利拱',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_victory_arch.png',
    imagePrompt: '勝利拱 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '勝利拱高過周圍看台，拱面嵌著舊獎牌、斷刃和褪色花環，日光從上方裂縫落下時會照亮拱心的勝者銘文。南側獻花階回到冠軍牆，東側內廊沿貴賓護欄通往貴賓包廂，西側可望見藍寶湖邊的草灘。拱腳堆著未燃盡的慶典火盆和被踩碎的月桂葉，冷卻後仍散出苦味；每次中央競技場鐘響，銘文縫裡都會落下細石粉。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_champion_wall',
        description: '南側穿過勝利拱前廊、獻花階與銘牌牆後，才回到冠軍牆，石階上刻著勝場紀錄',
        edgeNote: '勝利拱南返冠軍牆有紀念階與前廊，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_private_boxes',
        description: '東側沿勝利拱內廊與貴賓護欄繞行後，才會抵達包廂區，簾幕後有私人通道',
        edgeNote: '勝利拱到貴賓包廂需要沿內廊與護欄繞行，距離長於相鄰格。',
      },
    ],
    monsters: [],
    mapSymbol: '[勝]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '勝利拱的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '勝利拱的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '勝利拱保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

arena_quarter_center_arena: {
    id: 'arena_quarter_center_arena',
    name: '中央競技場',
    zone: 'arena_quarter' as RoomDef['zone'],
    image: 'arena_quarter_center_arena.png',
    imagePrompt: '中央競技場 in arena_quarter, arena quarter pvp city district with colonnades, betting house, training sand, duel rings, grand stands, banners and torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain city, clear lantern light',
    description:
      '中央競技場是一片被高牆包住的圓形沙地，場心懸著卡爾沃戰爭之主的榮耀戰旗，旗影正好落在最深的劍痕上。北側包廂階梯回到貴賓包廂，東側場門穿過觀戰欄杆後通向下層看台。四周看台聲浪像石牆一樣壓下來，沙面卻異常平整，只在中央留著一圈被反覆清掃仍無法抹去的暗色痕跡；當旗影轉到場門位置，裁判席會準備敲響主賽銅鐘。',
    exits: [
      { direction: 'north', targetRoomId: 'arena_quarter_private_boxes', description: '北側包廂階梯回到貴賓包廂' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '東側需穿過場門、觀戰欄杆與下層通道後，才會進入下層看台，觀眾席通道較擁擠',
        edgeNote: '中央競技場到下層看台被場門與觀眾欄杆隔開，不是相鄰格。',
      },
    ],
    monsters: [
      { monsterId: 'arena_grand_champion', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'arena_veteran_gladiator', maxCount: 1, respawnSeconds: 420 },
    ],
    mapSymbol: '[場]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '中央競技場的裁判旗與衛兵巡線提醒旅人，此處危險來自正式決鬥而非野外魔物。',
      treasure: '中央競技場的對戰名單、下注封條或裝備架旁可能藏著競技城區委託線索。',
      spirit: '中央競技場保存著鬥士登場、觀眾吶喊與冠軍留名時的記憶。',
    },
  },

// ─── 王家獵場擴充 (Lv 18-32) ───────────────────────────

  royal_hunting_grounds_horn_gate: {
    id: 'royal_hunting_grounds_horn_gate',
    name: '獵角門',
    zone: 'royal_hunting_grounds' as RoomDef['zone'],
    image: 'royal_hunting_grounds_horn_gate.png',
    imagePrompt: '獵角門 in royal_hunting_grounds, royal hunting grounds with horn gate, noble blinds, deer trails, hound yard, old oaks, trophy pavilion and moonlit stag grove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '獵角門位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，旅人可以 觀察 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 搜索 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章',
    exits: [
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_permit_lodge', description: '狩獵許可屋在東側' },
    ],
    monsters: [
      { monsterId: 'royal_hunt_hound_pack', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'mudtusk_boar', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '獵角門的草葉若被整齊壓伏，附近獵物、狼群或王室巡哨可能正在移動。',
      treasure: '獵角門的箭羽、界碑或獵棚角落可能藏著王家獵場委託線索。',
      spirit: '獵角門保存著貴族狩獵、偷獵爭端與白鹿傳說留下的記憶。',
    },
  },
};
