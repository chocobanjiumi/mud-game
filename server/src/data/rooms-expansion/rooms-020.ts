import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_020: Record<string, RoomDef> = {
sapphire_lake_blueheart_sanctum: {
    id: 'sapphire_lake_blueheart_sanctum',
    name: '藍心聖潭',
    zone: 'sapphire_lake' as RoomDef['zone'],
    image: 'sapphire_lake_blueheart_sanctum.png',
    imagePrompt: '藍心聖潭 in sapphire_lake, sapphire lake safe resource zone with clear blue water, lakebed ore veins, crystal sandbars, reeds, spirit mirror, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain lake, clear lantern light',
    description:
      '藍心聖潭位於藍寶湖清澈湖水與湖底藍光礦脈之間，鏡面淺灘、湖草層、礦泉眼、晶砂洲與水靈傳說共同標出安全但仍需謹慎的採集路線。這裡是低中階採礦、採草與釣魚區，玩家可以 inspect 水面波紋、藍寶裂紋、睡蓮根系和繩標浮標來判斷採集點，也能 search 湖底遺坑、靜水石窟、深脈窗與藍心聖潭尋找礦脈線索。若隊伍忽略湖獸擦痕、冷泉逆流與晶砂鬆動，湖蛇、冰元素、晶蜥與水邊毒蛙會干擾採集；若穩定沿浮標、淺灘與礦光推進，則能抵達藍寶礦脈並安全帶回湖底樣本、礦砂紀錄、水草束與回程浮標確認。',
    exits: [
      { direction: 'south', targetRoomId: 'sapphire_lake_sapphire_lode', description: '回到藍寶礦脈', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'sapphire_lake_deep_vein_window', description: '西側藍心聖潭水道繞過聖潭渦流與藍光礦幕，沿深水繩標回到深脈窗', edgeKind: 'distant_route', edgeNote: '藍心聖潭西側回深脈窗需繞過聖潭渦流與礦幕，實際路程長於相鄰一格。' },
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
      '傳送陣廣場位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'east', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '十字攤街在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_guard_post', description: '衛兵亭在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '十字攤街位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_portal_plaza', description: '回到傳送陣廣場' },
      { direction: 'east', targetRoomId: 'kingsroad_market_grain_arcade', description: '穀物拱廊在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_spice_awning', description: '香料棚在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'kingsroad_market_well_court', description: '水井小庭在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '穀物拱廊位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '回到十字攤街' },
      { direction: 'east', targetRoomId: 'kingsroad_market_blacksmith_row', description: '鍛匠列在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_cloth_lane', description: '布商巷在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '香料棚位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '回到十字攤街', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'kingsroad_market_cloth_lane', description: '布商巷在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_herbal_square', description: '草藥方場在北側', edgeKind: 'distant_route', edgeNote: '香料棚北側要繞過兩排布棚與秤藥桌，實際路程長於相鄰一格。' },
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
      '鍛匠列位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_grain_arcade', description: '回到穀物拱廊' },
      { direction: 'north', targetRoomId: 'kingsroad_market_adventurer_board', description: '冒險委託板在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '布商巷位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_spice_awning', description: '回到香料棚' },
      { direction: 'south', targetRoomId: 'kingsroad_market_grain_arcade', description: '回到穀物拱廊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '冒險委託板位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_cloth_lane', description: '回到布商巷' },
      { direction: 'south', targetRoomId: 'kingsroad_market_blacksmith_row', description: '回到鍛匠列', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'kingsroad_market_coin_exchange', description: '錢幣兌換所在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_auction_tent', description: '拍賣帳棚在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '商隊院位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_blacksmith_row', description: '回到鍛匠列' },
      { direction: 'north', targetRoomId: 'kingsroad_market_coin_exchange', description: '錢幣兌換所在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'kingsroad_market_pack_animal_ring', description: '馱獸圈在東側', edgeKind: 'distant_route', edgeNote: '商隊院東側道路需穿過車轍與圍欄門，實際路程長於相鄰一格。' },
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
      '錢幣兌換所位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_adventurer_board', description: '回到冒險委託板' },
      { direction: 'south', targetRoomId: 'kingsroad_market_caravan_yard', description: '回到商隊院', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'kingsroad_market_scribe_corner', description: '文書角在北側', edgeKind: 'distant_route', edgeNote: '錢幣兌換所北側要沿帳棚外緣繞到文書桌，實際路程長於相鄰一格。' },
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
      '草藥方場位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_spice_awning', description: '回到香料棚', edgeKind: 'distant_route', edgeNote: '草藥方場南側需繞過藥籃、秤桌與棚柱，實際路程長於相鄰一格。' },
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
      '魚販石階位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_herbal_square', description: '回到草藥方場' },
      { direction: 'east', targetRoomId: 'kingsroad_market_auction_tent', description: '東側拍賣帳棚通往文書角' },
      { direction: 'south', targetRoomId: 'kingsroad_market_cloth_lane', description: '回到布商巷', edgeKind: 'distant_route', edgeNote: '魚販石階南側要沿濕石階折返布棚巷口，實際路程長於相鄰一格。' },
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
      '文書角位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_auction_tent', description: '西側拍賣帳棚回到魚販石階' },
      { direction: 'south', targetRoomId: 'kingsroad_market_coin_exchange', description: '回到錢幣兌換所', edgeKind: 'distant_route', edgeNote: '文書角南側需繞過抄寫桌與封蠟欄杆，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'kingsroad_market_back_alley_ledgers', description: '後巷帳本處在東側', edgeKind: 'distant_route', edgeNote: '文書角東側通往後巷帳本處需穿過窄門與帳棚背面，實際路程長於相鄰一格。' },
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
      '衛兵亭位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_portal_plaza', description: '回到傳送陣廣場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'kingsroad_market_herbal_square', description: '草藥方場在東側', edgeKind: 'distant_route', edgeNote: '衛兵亭東側巡邏線會繞過貨車與攤棚，實際路程長於相鄰一格。' },
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
      '水井小庭位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'north', targetRoomId: 'kingsroad_market_crossroad_stalls', description: '回到十字攤街', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '拍賣帳棚位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_adventurer_board', description: '回到冒險委託板', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'kingsroad_market_fishmonger_steps', description: '西側魚販石階回到市場水渠邊' },
      { direction: 'east', targetRoomId: 'kingsroad_market_scribe_corner', description: '文書角在東側' },
      { direction: 'north', targetRoomId: 'kingsroad_market_high_balcony', description: '高看台在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '酒館門前位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_well_court', description: '回到水井小庭' },
      { direction: 'east', targetRoomId: 'kingsroad_market_pack_animal_ring', description: '馱獸圈在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '馱獸圈位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。南側酒館門前的人潮被馱獸欄門隔開，只能從酒館門前東側進入馱獸圈。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_caravan_yard', description: '回到商隊院', edgeKind: 'distant_route', edgeNote: '馱獸圈西側要繞過欄門與車轍回到商隊院，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'kingsroad_market_shrine_of_routes', description: '路神小祠在北側', edgeKind: 'distant_route', edgeNote: '馱獸圈北側需沿繩欄與祈路標記繞行，實際路程長於相鄰一格。' },
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
      '路神小祠位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序；米拉克財富與旅途之神的契約銅牌掛在小祠檐下。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_pack_animal_ring', description: '回到馱獸圈', edgeKind: 'distant_route', edgeNote: '路神小祠南側要繞過祈願石與馱獸欄門，實際路程長於相鄰一格。' },
      { direction: 'west', targetRoomId: 'kingsroad_market_coin_exchange', description: '回到錢幣兌換所', edgeKind: 'distant_route', edgeNote: '路神小祠西側沿商隊祈路繞回兌換所，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'kingsroad_market_back_alley_ledgers', description: '後巷帳本處在北側', edgeKind: 'distant_route', edgeNote: '路神小祠北側要穿過貨箱陰影與後巷口，實際路程長於相鄰一格。' },
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
      '後巷帳本處位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'west', targetRoomId: 'kingsroad_market_scribe_corner', description: '回到文書角', edgeKind: 'distant_route', edgeNote: '後巷帳本處西側要繞過帳冊貨箱與抄寫桌，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'kingsroad_market_shrine_of_routes', description: '回到路神小祠', edgeKind: 'distant_route', edgeNote: '後巷帳本處南側需沿暗巷折回路神小祠，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'kingsroad_market_high_balcony', description: '高看台在北側', edgeKind: 'distant_route', edgeNote: '後巷帳本處北側窄梯通往高看台，屬於高低落差路徑而非相鄰平面。' },
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
      '市集高看台位於王國大道交會形成的大型露天市集之中，傳送陣光、商隊車轍、布棚旗幟、攤販叫賣與衛兵巡邏共同維持安全而繁忙的交易秩序。這裡是安全城鎮、交易樞紐與任務集散點，玩家可以 inspect 價牌、公告板、帳本封條和商隊路牌來判斷貨物流向，也能 search 攤棚角落、文書桌、拍賣箱與後巷帳本尋找市集委託線索。東側後巷帳本處的窄梯從高看台這端被貨箱堵住，只能由後巷帳本處上行進入。若旅人需要補給、兌換、委託、住宿或確認傳送路線，都能沿著廣場、拱廊、商隊院與高看台完成；市場衛兵會維持秩序，因此此處適合作為長線冒險的安全整備據點，並能快速確認價格、路線、庫存與隊伍集合位置。',
    exits: [
      { direction: 'south', targetRoomId: 'kingsroad_market_auction_tent', description: '回到拍賣帳棚', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '競技城門位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。西側城門拱廊外可遠眺藍寶湖的粼粼波光，湖風偶爾捲入場內，為悶熱的競技區帶來一絲清涼。',
    exits: [
      { direction: 'east', targetRoomId: 'arena_quarter_ticket_colonnade', description: '票券柱廊在東側' },
      { direction: 'north', targetRoomId: 'arena_quarter_champion_wall', description: '冠軍牆在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '票券柱廊位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_grand_gate', description: '回到競技城門' },
      { direction: 'east', targetRoomId: 'arena_quarter_betting_house', description: '下注所在東側' },
      { direction: 'north', targetRoomId: 'arena_quarter_weapon_check', description: '武器檢查處在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '下注所位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
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
      '武器檢查處位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'south', targetRoomId: 'arena_quarter_ticket_colonnade', description: '回到票券柱廊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_training_yard',
        description: '東側需繞過武器封條、驗刃桌與登記欄杆後，才會進入訓練場範圍，沿途裁判會反覆查驗',
        edgeKind: 'distant_route',
        edgeNote: '武器檢查處到訓練場需穿過檢查動線與欄杆，距離長於相鄰格。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '北側穿過寄放牌、鎖甲架與窄巷轉角後，才會抵達甲架巷，盔甲摩擦聲會逐漸變近',
        edgeKind: 'distant_route',
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
      '熱身沙地位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
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
      '東決鬥圈位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'north', targetRoomId: 'arena_quarter_warmup_sand', description: '北側回到熱身沙地' },
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_duel_ring_west',
        description: '西側需穿過兩圈決鬥邊線與裁判旗架，才會接到西決鬥圈入口，場內人潮會阻擋直行',
        edgeKind: 'distant_route',
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
      '西決鬥圈位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_duel_ring_east',
        description: '東返時需穿過裁判旗架、觀戰欄與沙地邊線，才會回到東決鬥圈，腳下沙痕能辨識路線',
        edgeKind: 'distant_route',
        edgeNote: '西決鬥圈到東決鬥圈需要繞過場內分隔線，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'arena_quarter_training_yard', description: '訓練場在西側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_referee_box',
        description: '北側需沿決鬥圈外緣繞過判定旗與封鎖繩後，才到裁判席，階梯旁有衛兵把守',
        edgeKind: 'distant_route',
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
      '訓練場位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_weapon_check',
        description: '西返時需穿過訓練木樁、沙坑邊線與登記欄杆，才回到武器檢查處，隊列會拖慢移動',
        edgeKind: 'distant_route',
        edgeNote: '訓練場西返武器檢查處需要沿訓練區外緣繞行，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'arena_quarter_duel_ring_west', description: '西決鬥圈在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_strategy_tables',
        description: '北側穿過訓練隊列與沙地分隔繩後，才會到達戰術桌區，木牌標示今日演練路線',
        edgeKind: 'distant_route',
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
      '醫護長椅位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'west', targetRoomId: 'arena_quarter_warmup_sand', description: '回到熱身沙地' },
      { direction: 'north', targetRoomId: 'arena_quarter_lower_stands', description: '下層看台在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '甲架巷位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_weapon_check',
        description: '南側沿甲架巷穿過鎖甲架與寄放牌，最後才回到武器檢查處，路旁有修甲火盆',
        edgeKind: 'distant_route',
        edgeNote: '甲架巷南返武器檢查處需穿過裝備寄放動線，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_strategy_tables',
        description: '東側需繞過整排護甲架與維修台，才會接到戰術桌旁的通道，裝備箱會擋住直線',
        edgeKind: 'distant_route',
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
      '冠軍牆位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'south', targetRoomId: 'arena_quarter_grand_gate', description: '回到競技城門', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '東側沿冠軍銘牌牆繞過紀念柱後，才會進入甲架巷，觀眾獻花會佔住牆邊通道',
        edgeKind: 'distant_route',
        edgeNote: '冠軍牆到甲架巷要沿紀念牆與柱廊繞行，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_victory_arch',
        description: '北側需穿過冠軍銘牌、獻花階與拱門前廊後，才抵達勝利拱，地面刻滿冠軍年份',
        edgeKind: 'distant_route',
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
      '下層看台位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'south', targetRoomId: 'arena_quarter_healer_bench', description: '回到醫護長椅', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_center_arena',
        description: '西側需沿下層看台欄杆與觀眾通道繞行，才會進入中央競技場，場門會分批開放',
        edgeKind: 'distant_route',
        edgeNote: '下層看台到中央競技場需穿過觀眾欄杆與場門，屬於長路徑。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_upper_stands',
        description: '北側階梯繞過觀眾席、旗桿與護欄後，才會爬到上層看台，階梯會隨人潮堵塞',
        edgeKind: 'distant_route',
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
      '上層看台位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '南側階梯沿觀眾席護欄下行，繞過旗桿後才回到下層看台，呼喊聲會越來越近',
        edgeKind: 'distant_route',
        edgeNote: '上層看台南返下層看台需要走階梯與護欄通道，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'arena_quarter_private_boxes', description: '貴賓包廂在西側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '怒吼酒館位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_healer_bench',
        description: '西側穿過酒館後門、休息棚與傷藥車後，才會到醫護長椅，藥草味會指引方向',
        edgeKind: 'distant_route',
        edgeNote: '怒吼酒館到醫護長椅需要繞過休息棚與後門通道，距離較長。',
      },
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '北側需穿過觀戰人潮與酒館外廊後，才會進入下層看台，酒杯聲會逐漸被歡呼取代',
        edgeKind: 'distant_route',
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
      '戰術桌位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_training_yard',
        description: '南側需收起戰術圖板、繞過沙地分隔繩後，才回到訓練場，路上能看見演練箭標',
        edgeKind: 'distant_route',
        edgeNote: '戰術桌南返訓練場需要穿過戰術區與訓練隊列，距離長於相鄰格。',
      },
      {
        direction: 'west',
        targetRoomId: 'arena_quarter_armor_rack_lane',
        description: '西側沿戰術桌邊緣繞過維修台與護甲架後，才會到甲架巷，圖板與箱架會擋住直行',
        edgeKind: 'distant_route',
        edgeNote: '戰術桌西返甲架巷被維修台與護甲架隔開，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'arena_quarter_referee_box', description: '裁判席在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '裁判席位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'arena_quarter_duel_ring_west',
        description: '北側沿裁判席階梯與判定旗繞下去，才會回到西決鬥圈，裁判哨聲會標示入口',
        edgeKind: 'distant_route',
        edgeNote: '裁判席北返西決鬥圈需沿階梯與裁判旗區繞行，屬於長路徑。',
      },
      { direction: 'west', targetRoomId: 'arena_quarter_strategy_tables', description: '戰術桌在西側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '獎品櫃位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'south', targetRoomId: 'arena_quarter_betting_house', description: '回到下注所' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_warmup_sand',
        description: '東側需繞過獎品櫃、兌換欄杆與賽程告示後，才會接到熱身沙地，獎牌櫃會吸引人潮',
        edgeKind: 'distant_route',
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
      '貴賓包廂位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'east', targetRoomId: 'arena_quarter_upper_stands', description: '回到上層看台', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
      '勝利拱位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'arena_quarter_champion_wall',
        description: '南側穿過勝利拱前廊、獻花階與銘牌牆後，才回到冠軍牆，石階上刻著勝場紀錄',
        edgeKind: 'distant_route',
        edgeNote: '勝利拱南返冠軍牆有紀念階與前廊，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_private_boxes',
        description: '東側沿勝利拱內廊與貴賓護欄繞行後，才會抵達包廂區，簾幕後有私人通道',
        edgeKind: 'distant_route',
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
      '中央競技場位於大型競技場周圍日夜喧鬧的城區內，票券柱廊、下注牌、武器檢查桌、訓練沙地與環形看台共同維持決鬥秩序，卡爾沃戰爭之主的榮耀戰旗懸在場心。這裡是安全的 duel-only PVP 與交易支援區，玩家可以 inspect 敵人對戰名單、裁判旗、下注封條和裝備架來判斷當日賽程，也能 search 戰術桌、冠軍牆、獎品櫃與貴賓包廂尋找競技委託線索。若冒險者需要熱身、觀戰、下注、治療或安排約戰，都能沿著城門、決鬥圈、看台與中央競技場完成；衛兵與裁判會維持秩序，並以危險分級牌標示高階對手，使此處適合準備正式對決、追蹤戰績、安排隊伍位置並安全離場，同時確認賽程、賭注、治療窗口與裝備寄放狀態。',
    exits: [
      { direction: 'north', targetRoomId: 'arena_quarter_private_boxes', description: '北側包廂階梯回到貴賓包廂' },
      {
        direction: 'east',
        targetRoomId: 'arena_quarter_lower_stands',
        description: '東側需穿過場門、觀戰欄杆與下層通道後，才會進入下層看台，觀眾席通道較擁擠',
        edgeKind: 'distant_route',
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
      '獵角門位於王室圈定的廣大獵場之中，獵角門、鹿徑、貴族隱棚、獵犬院、界碑與密林水鏡共同構成有許可限制的高階狩獵路線。這裡是野外遭遇、採集與精英巡邏區，玩家可以 inspect 獸蹄印、箭羽、王室封條和獵犬氣味來判斷獵物動向，也能 search 草藥矮林、偷獵者小徑、獵物陳列亭與白鹿林尋找委託線索。若隊伍忽略獵場規矩、狼群回聲與貴族暗哨，狼王、樹精、獵場守衛與偷獵者會從側徑包抄；若穩定沿界碑、獵徑與看守營推進，則能追蹤稀有獵物並安全帶回狩獵記錄、草藥樣本與貴族委託證據與回程許可章。',
    exits: [
      { direction: 'east', targetRoomId: 'royal_hunting_grounds_permit_lodge', description: '狩獵許可屋在東側' },
      { direction: 'north', targetRoomId: 'royal_hunting_grounds_deer_run', description: '鹿徑在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
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
