import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_002: Record<string, RoomDef> = {
// ─── Area 8: 湖畔城鎮擴充 (Non-combat) ──────────────────

  tavern: {
    id: 'tavern',
    name: '酒館',
    zone: 'lakeside_town',
    image: 'tavern.png',
    imagePrompt: '酒館 in lakeside_town, town service tavern with long tables, hearth light, beer barrels, adventurer notice board and smoky warm air, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '推開吱呀作響的木門，啤酒花、烤肉與濕木柴的香氣迎面湧來。酒館內燈火通明，冒險者圍坐長桌交換地下城情報，牆上任務板貼著湖岸委託。南面回商業街，北側後門通向拍賣場；旅人可與酒保交談、接取傳聞任務，或 觀察 角落吟遊詩人的歌詞尋找龍族寶藏線索。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_inn', description: '北側短廊回到湖景旅店' },
      { direction: 'south', targetRoomId: 'market_street', description: '回到商業街' },
      {
        direction: 'east',
        targetRoomId: 'auction_house',
        description: '東側後門要穿過酒桶儲藏間與狹窄服務廊，繞過帳房後才到拍賣場側門',
        edgeKind: 'distant_route',
        edgeNote: '酒館到拍賣場需走後勤服務廊與帳房側門，屬於長路徑。',
      },
    ],
    monsters: [],
    npcs: ['bartender'],
    mapSymbol: '[B]',
    mapX: 4,
    mapY: 5,
    guardianHints: {
      creature: '角落裡那位沉默的飲客身上散發著不尋常的氣息——他可能並非人類。',
      treasure: '吧台下方有一排落了灰的酒桶，據說其中一桶裝的不是酒，而是某位海盜的藏寶。',
      spirit: '吟遊詩人的歌聲中隱藏著真實的線索——仔細聆聽，你也許能發現寶藏的位置。',
    },
  },

auction_house: {
    id: 'auction_house',
    name: '拍賣場',
    zone: 'lakeside_town',
    image: 'auction_house.png',
    imagePrompt: '拍賣場 in lakeside_town, town service auction hall with circular podium, display cases, painted dome and golden lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '氣派石造拍賣場有繪著交易之神的穹頂，金色吊燈照著中央圓形拍賣台與階梯觀眾席。展示櫃陳列珍稀材料、舊王國徽章和待鑑定裝備，拍賣官清亮嗓音在大廳迴盪。西側正門連廣場，南邊後門通酒館，東側貨廊通向倉庫；旅人可查看交易、追蹤特殊拍品，或 搜索 拍賣台底座取得非公開目錄。場內分流牌標示普通拍品、稀有裝備與公會委託櫃台，提醒旅人先確認綁定狀態、稅費與倉庫空間再競價。高台旁的估價水晶會閃出品質顏色，方便追蹤稀有以上裝備來源與成交稅紀錄，也能確認賣家聲望',
    exits: [
      { direction: 'west', targetRoomId: 'town_plaza', description: '正門通往城鎮廣場' },
      {
        direction: 'south',
        targetRoomId: 'tavern',
        description: '南側後門要沿拍賣場服務廊穿過帳房與酒桶儲藏間，才會回到酒館',
        edgeKind: 'distant_route',
        edgeNote: '拍賣場回酒館需走服務廊與酒桶儲藏間，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[$]',
    mapX: 6,
    mapY: 6,
    guardianHints: {
      creature: '展示櫃裡有一件物品似乎在微微顫動——那可能不是普通的收藏品。',
      treasure: '拍賣台底座的暗格中藏著一份特殊的拍賣品目錄，記載著非公開的稀世珍寶。',
      spirit: '穹頂壁畫上的交易之神的眼睛會隨著訪客移動——這座建築本身就是一件魔法造物。',
    },
  },

guild_hall: {
    id: 'guild_hall',
    name: '公會大廳',
    zone: 'lakeside_town',
    image: 'guild_hall.png',
    imagePrompt: '公會大廳 in lakeside_town, town service guild hall with crossed sword emblem, round table, magic ranking board and cool skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '宏偉建築的大門懸著交叉長劍與月桂冠徽章，冷色天窗照在中央圓桌與歷代精英畫像上。魔法公告板即時更新公會排名、建設需求與王國戰備，長老席旁堆放著待審的公會申請。西側通往轉職大廳，東面連城鎮圖書館，北側小門接法院走廊；旅人可查公會目標、接社交任務，並 觀察 畫像背後的獎杯牆。圓桌旁的地圖用旗針標出可支援的王國戰線與公會建設點，讓隊伍能在出城前分配採集、戰鬥與運輸任務。牆上的鐘會提醒每日與每週目標刷新時間，任務牌也標出推薦隊伍規模與獎勵分類及聲望需求',
    exits: [
      { direction: 'east', targetRoomId: 'town_library', description: '走廊連接著城鎮圖書館' },
      { direction: 'north', targetRoomId: 'lakeside_temple', description: '北側證物走廊通往湖光神殿' },
      { direction: 'west', targetRoomId: 'class_change_hall', description: '走廊通往轉職大廳', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [],
    mapSymbol: '[G]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '公會地下訓練場中有被封印的魔獸——公會用牠們來測試新成員的實力。',
      treasure: '歷代精英畫像的背後有一面隱藏的獎杯牆，上面掛著傳說級的裝備碎片。',
      spirit: '圓桌蘊含著歷代公會長的誓言之力，坐在這裡的人會感受到使命感湧上心頭。',
    },
  },

town_library: {
    id: 'town_library',
    name: '圖書館',
    zone: 'lakeside_town',
    image: 'town_library.png',
    imagePrompt: '圖書館 in lakeside_town, town quest library with high shelves, floating magic lamps, parchment smell and scholar reading alcove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '高聳書架從地板延伸到拱頂，數以萬計的書籍與卷軸散發羊皮紙、墨水和防潮草藥味。懸浮魔法燈在每排書架上方投下暖光，銀髮學者正在閱讀區研究泛黃湖區地圖。西側回公會大廳，南面地下階梯通往監獄；旅人可查閱怪物圖鑑、接探索任務，或 觀察 禁區書架尋找被鎖鏈束縛的知識生物。閱讀桌上的索引卡提示各區域怪物弱點、採集材料與傳送解鎖條件，是規劃低等到高等路線的重要情報點。書梯旁另有舊地圖櫃，標出隱藏水道與城外道路，並留下可追蹤的頁碼標籤與任務批注及調查順序',
    exits: [
      { direction: 'west', targetRoomId: 'guild_hall', description: '走廊通回公會大廳' },
      { direction: 'south', targetRoomId: 'prison', description: '圖書館地下層有通道通往監獄' },
    ],
    monsters: [],
    npcs: ['librarian'],
    mapSymbol: '[K]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '禁區書架上的某些書籍被魔法鎖鏈束縛——裡面封印著危險的知識生物。',
      treasure: '老學者研究的地圖標示著一處從未被探索過的遺跡位置。',
      spirit: '圖書館的書頁中沉睡著無數智者的靈魂碎片，翻開特定的書籍可以與他們對話。',
    },
  },

prison: {
    id: 'prison',
    name: '監獄',
    zone: 'lakeside_town',
    image: 'prison.png',
    imagePrompt: '監獄 in lakeside_town, town quest prison with damp stone cells, iron bars, torch shadows and guarded evidence room, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '陰暗潮濕的地下通道連接一排排鐵欄牢房，火把在鹽漬石牆上搖曳，把影子拉得又長又尖。多數牢房空置，深處卻偶爾傳來鐵鏈哐啷與低聲供詞。北面階梯回圖書館，西側暗渠可通往隱藏水道；旅人可與獄卒確認通緝任務、搜索 儲物間沒收品，也能 觀察 囚犯塗鴉找到越獄隧道線索。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'north', targetRoomId: 'town_library', description: '從地下通道回到圖書館' },
    ],
    monsters: [],
    npcs: ['prison_guard'],
    mapSymbol: '[P]',
    mapX: 6,
    mapY: 5,
    guardianHints: {
      creature: '最深處的牢房門上刻著封印紋章——裡面關押的並非普通犯人。',
      treasure: '獄卒輪班交接時，走廊盡頭的儲物間門會短暫開啟，裡面存放著沒收的違禁品。',
      spirit: '牢房牆壁上刻滿了囚犯的塗鴉，其中一段文字記載著越獄隧道的入口位置。',
    },
  },

lakeside_inn: {
    id: 'lakeside_inn',
    name: '湖景旅店',
    zone: 'lakeside_town',
    image: 'lakeside_inn.png',
    imagePrompt: '湖景旅店 in lakeside_town, town service inn with lake-facing windows, clean beds, blue curtains and candlelit reception desk, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '湖景旅店坐在商業街北端，開闊窗戶面向靜藍湖面，白色床單帶著薰衣草與乾木香。接待櫃檯掛著房牌、失物袋與冒險者留言，樓梯旁有通往酒館的短廊。南面回商業街，東側小門接神殿巷；旅人可在此休息、整理重生點與查看失物，也能 觀察 旅客留言找到湖岸支線線索。湖景旅店周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'south', targetRoomId: 'tavern', description: '南側短廊通往酒館暖光門口' },
      { direction: 'east', targetRoomId: 'lakeside_temple', description: '安靜小巷通往神殿', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [],
    mapSymbol: '[I]',
    mapX: 4,
    mapY: 4,
  },

lakeside_bank: {
    id: 'lakeside_bank',
    name: '銀鱗銀行',
    zone: 'lakeside_town',
    image: 'lakeside_bank.png',
    imagePrompt: '銀鱗銀行 in lakeside_town, town service bank with iron vault door, silver scale counters, ledgers and cold blue security light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain town, clear lantern light',
    description:
      '銀鱗銀行以厚重湖石與鐵門建成，櫃檯上鋪著銀鱗紋銅板，冷藍防盜符文沿金庫門緩慢流動。帳本、印章與秤盤整齊排列，地面回音讓每一步都格外清楚。西側連拍賣場貨廊，南面通倉庫；旅人可存放財物、查交易紀錄，或 搜索 櫃檯裂縫發現可疑押品標記。銀鱗銀行周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'auction_house',
        description: '西側貨廊要經過兩道銀鱗符文鐵門與估價櫃台後，才回到拍賣場側廳',
        edgeKind: 'distant_route',
        edgeNote: '銀鱗銀行到拍賣場需穿過符文貨廊與估價櫃台，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'lakeside_warehouse', description: '鐵門後是倉庫區' },
    ],
    monsters: [],
    mapSymbol: '[$]',
    mapX: 7,
    mapY: 6,
  },

lakeside_temple: {
    id: 'lakeside_temple',
    name: '湖光神殿',
    zone: 'lakeside_town',
    image: 'lakeside_temple.png',
    imagePrompt: '湖光神殿 in lakeside_town, town service temple with shallow reflecting pool, pale stone altar, blue stained glass and holy dawn light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '湖光神殿以白石拱柱圍著淺水池，藍色彩窗把晨光折成柔和波紋，空氣裡有清水與香草味。祭壇旁擺著祈願牌、治療記錄與迷途者名冊。西側小巷回旅店，南面階梯下到傳送廣場；旅人可祈福、確認復活服務，或 觀察 水池倒影取得失蹤旅人任務提示。神官會說明死亡懲罰、復活位置與安全撤離規則，池邊蠟燭數量也暗示最近湖岸危險事件是否增加。牆面聖徽會記錄已啟用的安全點，讓旅人出城前確認死亡回程位置與治療補給是否足夠，並查看最近安全入口與復活費用，避免長途失誤和任務中斷',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_inn', description: '小巷回到湖景旅店', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'lakeside_courthouse', description: '北側證物走廊通往湖畔裁判所' },
      { direction: 'south', targetRoomId: 'guild_hall', description: '南側白石外廊通往公會大廳' },
      { direction: 'east', targetRoomId: 'lakeside_portal_square', description: '東側石階通往傳送廣場' },
    ],
    monsters: [],
    mapSymbol: '[T]',
    mapX: 5,
    mapY: 3,
  },

lakeside_portal_square: {
    id: 'lakeside_portal_square',
    name: '湖畔傳送廣場',
    zone: 'lakeside_town',
    image: 'lakeside_portal_square.png',
    imagePrompt: '湖畔傳送廣場 in lakeside_town, town traffic portal room with circular runes, blue lake mist, brass pylons and stable magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '湖畔傳送廣場鋪著環形符文石，黃銅導柱圍住穩定的藍色傳送光，湖霧從欄杆外飄入法陣邊緣。交通告示牌標明已解鎖節點、費用與冷卻規則，守衛會檢查戰鬥狀態與危險物資。北面通神殿，西側拱門回城鎮廣場，若要前往魚市需先回市場街區再沿湖岸小巷前進；旅人可 activate portal、travel 或 recall，並 觀察 導柱查看深處捷徑線索。地面刻有不同網路的顏色環，提醒旅人公共傳送、區域入口與危險撤離點的限制並不相同。法陣邊緣的灰色插槽會顯示尚未解鎖的區域，作為後續任務目標與費用提示，也標明冷卻剩餘時間與可用出口及回程路線與安全標記',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_temple', description: '西側石階回到湖光神殿' },
      {
        direction: 'south',
        targetRoomId: 'town_plaza',
        description: '南側拱門要沿傳送符文外圈與湖霧石階繞行，穿過守衛檢查點才到廣場',
        edgeKind: 'distant_route',
        edgeNote: '湖畔傳送廣場回城鎮廣場需要繞過符文外圈與守衛檢查點，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[O]',
    mapX: 6,
    mapY: 3,
  },

lakeside_blacksmith: {
    id: 'lakeside_blacksmith',
    name: '湖鐵鍛坊',
    zone: 'lakeside_town',
    image: 'lakeside_blacksmith.png',
    imagePrompt: '湖鐵鍛坊 in lakeside_town, town service blacksmith with lake-iron anvils, orange forge light, weapon racks and steam vents, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '湖鐵鍛坊靠近市場南側，橘紅爐光照著沉重鐵砧、武器架與一排淬火水槽，蒸汽帶著金屬與炭灰味。牆上掛著修理價目、強化委託和缺料清單。北面回商業街，東側棚道接裁縫坊；旅人可修理、強化或接取材料委託，搜索 爐邊廢料能找到仍可回收的礦石碎片。南面出口通往朝聖古道的靜望臺，石板路從鍛坊後院延伸出去，爐火餘溫在古道起點漸漸散去',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'market_street',
        description: '北側回商業街要穿過冒蒸汽的鍛坊前棚與材料攤，才接回主要石板街',
        edgeKind: 'distant_route',
        edgeNote: '湖鐵鍛坊回商業街需要穿過鍛坊前棚與材料攤，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'lakeside_tailor',
        description: '東側棚道要繞過淬火水槽與布料晾架，沿防雨木棚才能抵達裁縫坊',
        edgeKind: 'distant_route',
        edgeNote: '湖鐵鍛坊到月紋裁縫坊需要沿防雨木棚繞過水槽與晾架，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[F]',
    mapX: 4,
    mapY: 7,
  },

lakeside_tailor: {
    id: 'lakeside_tailor',
    name: '月紋裁縫坊',
    zone: 'lakeside_town',
    image: 'lakeside_tailor.png',
    imagePrompt: '月紋裁縫坊 in lakeside_town, town service tailor workshop with cloth bolts, mannequins, silver thread and soft window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '月紋裁縫坊掛滿布卷、皮革樣片與半成品披風，銀線在窗光下像湖面月痕般閃爍。木製人台旁放著量尺、染料瓶與訂單卡，後牆標示各職業護甲需求。西側棚道回鍛坊，東面短街通魚市；旅人可製作或改造布甲皮甲，觀察 訂單卡可找到指定外觀與材料來源。月紋裁縫坊周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'lakeside_blacksmith',
        description: '西側棚道要穿過布料晾架與淬火水槽旁的防雨木棚，才回到湖鐵鍛坊',
        edgeKind: 'distant_route',
        edgeNote: '月紋裁縫坊回湖鐵鍛坊需要沿防雨木棚繞行，屬於長路徑。',
      },
      { direction: 'east', targetRoomId: 'lakeside_town_fill_18_6', description: '東側青石短街通往湖畔街道' },
    ],
    monsters: [],
    mapSymbol: '[S]',
    mapX: 5,
    mapY: 8,
  },

lakeside_warehouse: {
    id: 'lakeside_warehouse',
    name: '湖港倉庫',
    zone: 'lakeside_town',
    image: 'lakeside_warehouse.png',
    imagePrompt: '湖港倉庫 in lakeside_town, town service warehouse with stacked crates, rope nets, ledger desk and dim lantern aisles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain town, clear lantern light',
    description:
      '湖港倉庫由粗木梁和厚石牆支撐，成排貨箱、繩網與封蠟袋堆到屋頂，昏黃提燈讓巷道像迷宮。帳桌上放著入庫單與遺失貨物清單，角落有通往暗渠的排水門。北面連銀鱗銀行，西側貨門回拍賣場；旅人可管理倉庫、接找貨任務，或 搜索 箱底發現被調包的商品。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_bank', description: '鐵門通回銀行' },
      {
        direction: 'west',
        targetRoomId: 'auction_house',
        description: '西側貨門要穿過堆滿封蠟箱的倉庫巷道，經拍品交接口才回到拍賣場',
        edgeKind: 'distant_route',
        edgeNote: '湖港倉庫到拍賣場需要穿過倉庫貨巷與拍品交接口，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'lakeside_fish_market', description: '南側貨箱巷通往湖鮮魚市' },
    ],
    monsters: [],
    mapSymbol: '[W]',
    mapX: 7,
    mapY: 7,
  },

lakeside_fish_market: {
    id: 'lakeside_fish_market',
    name: '湖鮮魚市',
    zone: 'lakeside_town',
    image: 'lakeside_fish_market.png',
    imagePrompt: '湖鮮魚市 in lakeside_town, town social fish market with wet stone stalls, hanging nets, blue lake light and silver fish scales, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain town, clear lantern light',
    description:
      '湖鮮魚市鋪著潮濕青石，銀鱗魚、蟹籠和藍色水草堆在攤位上，鹽味與湖泥味混著吆喝聲。碼頭方向有漁船鈴聲，攤販桌下藏著今日捕獲記錄。西面短街回裁縫坊，若要前往傳送廣場需先回市場街區，南側木棧橋連到隱藏水道入口；旅人可買材料、接釣魚委託，或 觀察 魚鰓找出受污染湖域線索。魚販會把異常魚鱗、湖底碎片與每日行情放在不同木盤上，讓採集與烹飪路線有清楚材料來源。潮汐牌也會提示前往東方海岸與釣魚點的最佳時間，旁邊水桶可檢查稀有魚影與採集等級需求，並指向碼頭與水道入口標記處',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_town_fill_18_6', description: '西側青石短街回到湖畔街道' },
      { direction: 'north', targetRoomId: 'lakeside_warehouse', description: '北側貨箱巷回到湖港倉庫' },
      { direction: 'south', targetRoomId: 'lakeside_hidden_canal', description: '南側木梯下到隱藏水道' },
    ],
    monsters: [],
    mapSymbol: '[f]',
    mapX: 7,
    mapY: 8,
  },

lakeside_courthouse: {
    id: 'lakeside_courthouse',
    name: '湖畔裁判所',
    zone: 'lakeside_town',
    image: 'lakeside_courthouse.png',
    imagePrompt: '湖畔裁判所 in lakeside_town, town quest courthouse with marble benches, sealed evidence shelves, high windows and stern white light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain town, clear lantern light',
    description:
      '湖畔裁判所以白色大理石長椅、封蠟證物架與高窗冷光構成嚴肅空間，法槌聲似乎仍在牆面回響。公告板列出通緝犯、走私案與公會糾紛，側門通向公會大廳，地下卷宗梯通監獄。南面連公會大廳，東側下行到監獄；旅人可接通緝與證物任務，搜索 旁聽席能找到被落下的證詞碎片。證物架上的編號對應監獄牢房與水道暗號，讓旅人能把城市探索、審判紀錄和追捕任務串成同一條線。書記桌上還標明哪些案件需要屍體物品或現場調查，並提示交回證物的位置與期限，方便核對任務紀錄與證物袋',
    exits: [
      { direction: 'south', targetRoomId: 'lakeside_temple', description: '南側證物走廊通往湖光神殿' },
      {
        direction: 'east',
        targetRoomId: 'prison',
        description: '東側卷宗梯沿封蠟證物架下行，穿過守衛鐵門後才抵達地下監獄入口',
        edgeKind: 'distant_route',
        edgeNote: '湖畔裁判所到監獄需要沿卷宗梯與守衛鐵門下行，屬於長路徑。',
      },
    ],
    monsters: [],
    mapSymbol: '[J]',
    mapX: 5,
    mapY: 2,
  },

lakeside_hidden_canal: {
    id: 'lakeside_hidden_canal',
    name: '隱藏水道',
    zone: 'lakeside_town',
    image: 'lakeside_hidden_canal.png',
    imagePrompt: '隱藏水道 in lakeside_town, hidden exploration canal with mossy arches, black water, smuggler marks and narrow lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain water, clear lantern light',
    description:
      '隱藏水道位於倉庫與魚市下方，苔痕覆滿拱形磚牆，黑水反射狹窄提燈光，牆角刻著走私者留下的潮汐記號。北面木梯通往魚市棧橋，倉庫排水門可從上方落入此處，西側狹洞連監獄牢房後方。這是城鎮少見的探索房，旅人可 搜索 破箱取得一次性藏物，觀察 潮汐記號找出海岸走私路線，但也要注意濕滑地面和暗處的警鈴線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。東側水道盡頭有一道被水草與碎石半堵的裂口，透過浸水的岩縫可以看見湖岸的天光，似乎能通往藍寶湖的晶砂洲',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_fish_market', description: '北側木梯回到湖鮮魚市' },
      {
        direction: 'west',
        targetRoomId: 'prison',
        description: '西側狹洞貼著黑水暗渠前進，繞過潮濕警鈴線後才接到監獄後牆暗門',
        edgeKind: 'distant_route',
        edgeNote: '隱藏水道到監獄後牆需要穿過黑水暗渠與警鈴線，屬於長路徑。',
      },
    ],
    monsters: [],
    groundItems: [
      { itemId: 'rare_fossil', description: '破箱裡壓著一枚被湖泥包住的奇特化石' },
    ],
    mapSymbol: '[?]',
    mapX: 7,
    mapY: 9,
  },

// ─── Area 9: 魔族領地 (Lv 30-40) ──────────────────────────

  demon_border: {
    id: 'demon_border',
    name: '魔族邊境',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_border.png',
    imagePrompt: '魔族邊境 in demon_territory, cracked chasm bridge from frozen wasteland into burning black plains, sulfur haze, red firelit sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '魔族邊境位在冰封雪原盡頭，大地突然裂成巨谷，對岸焦黑荒原在紅色天光下冒著硫磺煙。南側冰封王座方向仍殘留寒氣，北面搖晃石橋通向焦土平原，西側灰燼哨塔貼著裂谷邊緣監視通路。橋面由粗繩與黑石板勉強固定，裂縫下方翻出熱風，吹得殘旗和雪霜同時碎裂。冰寒與魔火在邊界上互相撕扯，每一步都能感到兩種地貌在腳下相撞。',
    exits: [
      {
        direction: 'south',
        targetRoomId: 'ice_throne',
        description: '南側魔族邊境沿石橋退入黑煙深谷，穿過冷熱交界與冰晶斷階回到冰封王座',
        edgeKind: 'distant_route',
        edgeNote: '魔族邊境到冰封王座需跨越石橋、黑煙深谷與冰晶斷階，實際路程長於相鄰一格。',
      },
      { direction: 'north', targetRoomId: 'scorched_plains', description: '踏上焦黑的荒原' },
      { direction: 'west', targetRoomId: 'demon_ash_watch', description: '裂谷西側有一座灰燼哨塔' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'ash_watch_scout', maxCount: 1, respawnSeconds: 55 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 60 },
    ],
    npcs: ['demon_border_defector'],
    mapSymbol: '[邊]',
    mapX: 3,
    mapY: 17,
    guardianHints: {
      creature: '裂谷中偶爾飛出的小惡魔會從背後偷襲——注意腳下的陰影。',
      treasure: '石橋的橋墩裡嵌著一塊暗紅色的寶石，似乎是魔族用來維持橋樑的動力源。',
      spirit: '這座裂谷是遠古大戰中諸神之力撕裂大地所形成的，至今仍殘留著神魔交戰的餘波。',
    },
  },

scorched_plains: {
    id: 'scorched_plains',
    name: '焦土平原',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'scorched_plains.png',
    imagePrompt: '焦土平原 in demon_territory, endless cracked black plain with red flames in fissures, dead trees like bone frames, war drum smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain bone, clear lantern light',
    description:
      '焦土平原一望無際，龜裂大地像黑色蛛網延伸到灰紅天幕下，裂縫中不時竄出短促火舌。南方裂谷橋通往魔族邊境，北面戰鼓聲引向魔族村落，東側熱浪沿河岸推向血河，西邊白骨坑地在煙塵裡泛白。枯樹如黑色骨架立在風中，地上散著熔渣、舊矛尖和巡邏隊踩出的深印。遠處低沉鼓點規律響起，讓這片平原像魔族領地向外展開的燒焦前庭。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_border', description: '退回邊境裂谷' },
      { direction: 'north', targetRoomId: 'demon_village', description: '隱約可見魔族的營帳' },
      { direction: 'east', targetRoomId: 'blood_river', description: '一條殷紅的河流在東方流淌' },
      { direction: 'west', targetRoomId: 'demon_bone_pits', description: '西方低地堆滿白骨與灰燼' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[焦]',
    mapX: 3,
    mapY: 18,
    guardianHints: {
      creature: '地獄犬會成對出現，一隻正面牽制，另一隻從側面撲咬——優先擊倒側面的那隻。',
      treasure: '大地裂縫深處有一層凝固的熔岩，其中混雜著高純度的魔力結晶。',
      spirit: '這片平原曾是繁花盛開的草原，千年前的魔族入侵將一切化為焦土。大地仍記得綠色的夢。',
    },
  },

demon_village: {
    id: 'demon_village',
    name: '魔族村落',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_village.png',
    imagePrompt: '魔族村落 in demon_territory, black stone and bone tents, forge glow, patrol shadows, trophy pole with broken adventurer gear, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '魔族村落由黑色岩石、獸骨和破皮帳篷搭成，低矮棚屋沿熔爐火光錯落分布，地面滿是煤灰、蹄印和拖行軍械的痕跡。南側焦土路回到焦土平原，北方黑暗要塞大門壓在煙幕後，東邊影市黑布棚下傳來低聲交易，西側上鎖石屋通往魔族寶庫。村中央圖騰柱掛滿破碎裝備和骨牌，鍛造爐徹夜不熄，巡邏士兵在火光間穿行，使這裡帶著臨戰前的粗暴秩序。',
    exits: [
      { direction: 'south', targetRoomId: 'scorched_plains', description: '回到焦土平原' },
      { direction: 'north', targetRoomId: 'dark_fortress_gate', description: '村落北方矗立著黑暗要塞' },
      { direction: 'east', targetRoomId: 'demon_shadow_market', description: '黑布棚下傳來低聲交易' },
      { direction: 'west', targetRoomId: 'demon_treasury', description: '村落深處有一間上鎖的石屋', locked: true, keyItemId: 'silver_key' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[村]',
    mapX: 3,
    mapY: 19,
    guardianHints: {
      creature: '魔族士兵換崗時防備最為鬆懈——觀察巡邏路線找出空檔。',
      treasure: '圖騰柱上掛著的裝備殘骸中有幾件看起來品質不錯，或許還能修復。',
      spirit: '這些低階魔族並非天生邪惡——他們只是在魔王的暴政下求生的可憐生物。',
    },
  },

blood_river: {
    id: 'blood_river',
    name: '血河',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'blood_river.png',
    imagePrompt: '血河 in demon_territory, crimson lava river steaming through scorched earth, corroded bones and twisted metal on banks, infernal red mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain lava, clear lantern light',
    description:
      '血河在焦土中蜿蜒流淌，河面殷紅如熔化鐵鏽，熱氣裹著硫磺味一層層翻上岸邊。西側焦黑河岸可回到焦土平原，南方上游被黑暗要塞大門的城牆陰影壓住，東面破裂排水渠吐出暗紅泡沫，通向熔岩下水道。河水並非真正血液，而是被地底魔力礦脈污染的熔岩水；岸邊散落被腐蝕的骨骸、扭曲金屬與燒裂軍械。每當熱浪翻湧，河底符文會短暫浮現，彷彿整條河仍在替要塞輸送魔力。',
    exits: [
      { direction: 'west', targetRoomId: 'scorched_plains', description: '沿河岸回到焦土平原' },
      { direction: 'south', targetRoomId: 'dark_fortress_gate', description: '河流上游通往要塞' },
      { direction: 'east', targetRoomId: 'demon_lava_sewer', description: '破裂排水渠通往熔岩下水道' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'bloodslag_hound', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[血]',
    mapX: 4,
    mapY: 18,
    guardianHints: {
      creature: '魅魔會偽裝成迷路的旅人來誘惑冒險者——不要被外表所騙。',
      treasure: '河床中沉積著被魔力結晶化的礦石，是鍛造魔族武器的稀有材料。',
      spirit: '血河的源頭據說是遠古魔神的傷口，至今仍在流淌著神之血液。',
    },
  },

dark_fortress_gate: {
    id: 'dark_fortress_gate',
    name: '黑暗要塞大門',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'dark_fortress_gate.png',
    imagePrompt: '黑暗要塞大門 in demon_territory, towering black fortress wall, iron gates, cursed runes, demon general drilling soldiers in red smoky plaza, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '黑暗要塞大門由巨大的暗黑岩石砌成，高牆直插灰紅煙幕，牆面刻滿詛咒符文與燒黑的軍團印記。南側道路退回魔族村落，北面沿血河岸邊可撤到殷紅上游，東側鑄鐵門後連著拷問室，西邊符印塔在煙中閃爍暗光。門前廣場四角立著燃燒的黑曜石柱，魔族將軍操練士兵的口令與城牆齒輪聲交疊，地上新鮮車轍顯示軍械仍不斷被送入要塞。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_village', description: '退回魔族村落' },
      { direction: 'north', targetRoomId: 'blood_river', description: '沿著血河撤退' },
      { direction: 'east', targetRoomId: 'torture_chamber', description: '穿過城門進入要塞', locked: true, keyItemId: 'silver_key' },
      { direction: 'west', targetRoomId: 'demon_sigil_tower', description: '西側高塔閃著符印光芒' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 20,
    guardianHints: {
      creature: '魔族將軍的指揮能讓士兵獲得增益——優先擊倒將軍可以瓦解敵陣。',
      treasure: '城門上的詛咒符文實際上是一道魔法鎖——破解它可以繞過守衛直接進入要塞。',
      spirit: '這座要塞建在一座遠古神殿的遺址上，黑暗力量是從地底深處滲透出來的。',
    },
  },

torture_chamber: {
    id: 'torture_chamber',
    name: '拷問室',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'torture_chamber.png',
    imagePrompt: '拷問室 in demon_territory, damp fortress stone chamber with rusted chains, broken cages, red furnace light, restrained dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fortress, clear lantern light',
    description:
      '拷問室是要塞內部潮濕石室，牆上掛滿生鏽鐵鏈、刑具和斷裂鎖環，地面排水溝流著稀薄紅黑污水。西側門後是黑暗要塞大門，北面石廊通往魔族兵營，東側牆後傳來召喚陣低沉脈動，南方鐵門滲出鎖鏈庭院的冷風與鏽味。角落堆著破碎籠子、骨骸和幾只未熄的治療藥瓶，牆上潦草箭痕指向不同逃路，讓這裡成為要塞內部路線交會的殘酷節點。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '退回要塞大門' },
      { direction: 'north', targetRoomId: 'demon_barracks', description: '通道通往魔族兵營' },
      { direction: 'east', targetRoomId: 'summoning_circle', description: '暗紅的光芒從東方透出' },
      { direction: 'south', targetRoomId: 'demon_chain_yard', description: '潮濕階梯通往鎖鏈庭院' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 50 },
    ],
    npcs: ['captive_field_surgeon'],
    mapSymbol: '[刑]',
    mapX: 3,
    mapY: 21,
    guardianHints: {
      creature: '魅魔在此處會使用精神攻擊——保持意志堅定是生存的關鍵。',
      treasure: '刑具架後方的暗格中藏著一把鑰匙，可以打開通往寶庫的密道。',
      spirit: '被囚禁在此的靈魂仍在徘徊，幫助他們解脫或許能獲得意想不到的祝福。',
    },
  },

demon_barracks: {
    id: 'demon_barracks',
    name: '魔族兵營',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_barracks.png',
    imagePrompt: '魔族兵營 in demon_territory, underground barracks with bone bunks, weapon racks, war maps, red lantern smoke and armored demon patrols, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain bone, clear lantern light',
    description:
      '魔族兵營是一座寬闊地下營房，數百張獸骨與獸皮床鋪排成粗糙方陣，空氣裡混著汗臭、鐵鏽和熔爐灰。南側石廊回到拷問室，西面通往召喚陣的符文門泛著暗紅光，東側地獄犬欄傳來鐵鍊碰撞與低吼。武器架上掛滿缺口彎刀、黑鐵槍和染血戰旗，牆上的作戰地圖被匕首釘住。營房深處偶爾爆出粗獷笑聲，使每排空床都像隨時會被巡邏士兵重新填滿。',
    exits: [
      { direction: 'south', targetRoomId: 'torture_chamber', description: '回到拷問室' },
      { direction: 'west', targetRoomId: 'summoning_circle', description: '兵營深處有一道暗紅的門' },
      { direction: 'east', targetRoomId: 'demon_hellhound_kennel', description: '鐵柵後傳來地獄犬低吼' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'war_forge_taskmaster', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 21,
    guardianHints: {
      creature: '兵營中的魔族士兵會互相支援——試著把他們引到狹窄的通道中各個擊破。',
      treasure: '武器架上有一把品質異常精良的魔族劍，或許是將軍的備用武器。',
      spirit: '牆上的作戰地圖標示著魔族的進攻計劃——帶回去交給冒險者公會可能會有重賞。',
    },
  },

summoning_circle: {
    id: 'summoning_circle',
    name: '召喚陣',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'summoning_circle.png',
    imagePrompt: '召喚陣 in demon_territory, vast circular stone chamber with pulsing red magic circle, four black pillars with ghostfire, abyss portal glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain stone, clear lantern light',
    description:
      '召喚陣是一間圓形巨石室，地面複雜魔法陣以暗紅能量脈動，四根黑石柱上的鬼火把水汽和煙塵照成地獄般的色澤。西側石門回到拷問室，東面營房通道傳來士兵喧聲，北側符號與魔王殿王座相同，南面詛咒神龕散出冷暗氣息。穹頂倒吊數十枚金屬鈴，符文每次亮起便發出低沉共鳴。外圈副陣刻痕仍很新，像兵營與神龕的力量正在被抽入主陣。',
    exits: [
      { direction: 'west', targetRoomId: 'torture_chamber', description: '退回拷問室' },
      { direction: 'east', targetRoomId: 'demon_barracks', description: '退回兵營' },
      { direction: 'north', targetRoomId: 'demon_throne', description: '召喚陣背後是魔王殿的入口' },
      { direction: 'south', targetRoomId: 'demon_cursed_shrine', description: '副陣延伸到南方詛咒神龕' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[陣]',
    mapX: 3,
    mapY: 22,
    guardianHints: {
      creature: '召喚陣啟動時會持續召喚小惡魔——破壞四根石柱上的鬼火可以中斷召喚。',
      treasure: '魔法陣的核心處嵌著一顆魔力水晶，蘊含著強大的暗黑能量。',
      spirit: '這個召喚陣連接著深淵——如果不阻止魔王，更強大的惡魔將會降臨。',
    },
  },

demon_throne: {
    id: 'demon_throne',
    name: '魔王殿',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_throne.png',
    imagePrompt: '魔王殿 in demon_territory, deepest fortress throne hall with bone throne, burning red crystals, demon lord silhouette, oppressive infernal light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fortress, clear lantern light',
    description:
      '魔王殿位於黑暗要塞最深處，無數骨骸堆砌成高聳王座，燃燒魔力結晶嵌在四壁，映出王座上烈焰般的瞳孔。南側階道回到召喚陣，北面黑鐵巨門吹入龍谷乾熱風，東側魔王親衛前廳傳來甲片摩擦聲。殿堂地面鋪著破碎王國旗幟，四周高台站滿沉默親衛與祭司，黑色鎖鏈半埋在王座陰影裡。這裡像整片魔族領地的心臟，威壓隨每一次火光跳動向外擴散。',
    exits: [
      { direction: 'south', targetRoomId: 'summoning_circle', description: '退回召喚陣' },
      { direction: 'north', targetRoomId: 'dragon_valley_entrance', description: '魔王殿背後的秘密通道通向一片未知的山谷' },
      { direction: 'east', targetRoomId: 'demon_lord_antechamber', description: '側門通往魔王親衛前廳' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[魔]',
    mapX: 3,
    mapY: 23,
    guardianHints: {
      creature: '魔王會在HP低於一半時暴走，攻擊力和速度大幅提升——準備好防禦和恢復道具。',
      treasure: '魔王的骨座下方藏著一把傳說中的魔劍，是歷代魔王力量的結晶。',
      spirit: '現任魔王並非最初的統治者——他是通過弒殺前任魔王奪得王位的。或許可以利用這段歷史。',
    },
  },

demon_treasury: {
    id: 'demon_treasury',
    name: '魔族寶庫',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_treasury.png',
    imagePrompt: '魔族寶庫 in demon_territory, warded black stone treasury with red gems, piles of coins and cursed relics, trap runes glowing, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain stone, clear lantern light',
    description:
      '魔族寶庫是一間被紅色結界籠罩的黑石室，四壁鑲滿發光寶石，光芒在金幣、武器和掠奪來的聖器上反覆折射。東側石門接回魔族村落，門框上的銀鎖痕與焦黑手印顯示此處長年被嚴密封存。室內寶堆之間埋著細小壓板、詛咒針孔與斷裂骸骨，南側貨梯的鐵鏈雖仍微微晃動，卻被結界鎖死在牆內。誘惑的光與陷阱的寒意同時佔據房間，使每件財物都像帶著牙齒。',
    exits: [
      { direction: 'east', targetRoomId: 'demon_village', description: '回到魔族村落' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 75 },
    ],
    groundItems: [
      { itemId: 'rare_fossil', description: '寶庫角落有一塊奇特的化石' },
    ],
    mapSymbol: '[寶]',
    mapX: 2,
    mapY: 19,
    guardianHints: {
      creature: '寶庫的守衛比外面的巡邏兵更加精銳——他們是魔王親衛隊的成員。',
      treasure: '寶庫最深處的箱子裡藏著魔族的遠古聖物，據說能大幅提升暗屬性魔法的威力。',
      spirit: '這些寶物中有許多來自被魔族毀滅的王國，歸還它們或許能解開某些古老的詛咒。',
    },
  },

demon_ash_watch: {
    id: 'demon_ash_watch',
    name: '灰燼哨塔',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_ash_watch.png',
    imagePrompt: '灰燼哨塔 in demon_territory, leaning ash-covered watchtower beside a fiery chasm, black banners, sulfur wind and demon scouts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain ash, clear lantern light',
    description:
      '灰燼哨塔立在裂谷西側高地上，塔身由黑木、鐵箍與巨獸肋骨拼接，長年覆著灰白火山灰。東側可俯瞰魔族邊境的搖晃石橋，北面白骨坑地在煙霧裡泛出慘白骨光。冰原冷風掠過時，塔頂火盆會短暫變成藍白色，照出小惡魔與哨兵在欄杆後的剪影。塔基旁有一條被灰燼遮住的窄階，繞過正面巡邏線，通向堆滿碎骨的坡道。',
    exits: [
      { direction: 'east', targetRoomId: 'demon_border', description: '沿高地回到魔族邊境' },
      { direction: 'north', targetRoomId: 'demon_bone_pits', description: '灰燼斜坡滑向骨坑低地' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'ash_watch_scout', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[哨]',
    mapX: 2,
    mapY: 17,
    guardianHints: {
      creature: '塔頂哨兵會用火盆傳信，先破壞火盆可延遲附近巡邏隊支援。',
      treasure: '哨塔下層的補給箱中夾著北境地圖，標記了幾條魔族偵察路線。',
      spirit: '灰燼中有冰原符文的碎片，說明這裡曾被北境守軍短暫奪回。',
    },
  },

demon_bone_pits: {
    id: 'demon_bone_pits',
    name: '白骨坑地',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_bone_pits.png',
    imagePrompt: '白骨坑地 in demon_territory, scorched lowland with bone piles, ash dunes, cracked shields, red fissure light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bone, clear lantern light',
    description:
      '白骨坑地陷在焦土平原西側，灰白碎骨、破盾、熔渣與燒裂頭盔層層堆疊，踩下去會發出乾脆碎響。東面焦土平原的裂火仍在遠處閃動，南側灰燼哨塔矗立在煙霧裡，北方黑石坡接向魔族寶庫。坑壁滿是粗糙拖痕與爪印，地獄犬嗅聞聲偶爾從深處傳來。這裡像魔族戰場殘骸的傾倒處，腐蝕骨堆裡仍露出少量未被熔渣吞沒的金屬光。',
    exits: [
      { direction: 'east', targetRoomId: 'scorched_plains', description: '爬上斜坡回到焦土平原' },
      { direction: 'south', targetRoomId: 'demon_ash_watch', description: '灰燼小徑回到哨塔' },
      { direction: 'north', targetRoomId: 'demon_treasury', description: '一條運骨車道通向寶庫外牆' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: 18,
    guardianHints: {
      creature: '地獄犬會循著聲音撲向坑底，慢步移動可降低被圍攻的機率。',
      treasure: '白骨堆中偶爾可見未被熔渣吞沒的戒指與徽章。',
      spirit: '坑地裡混雜著多個王國的遺骨，戰爭痕跡遠比魔族村落宣稱的更久遠。',
    },
  },

demon_shadow_market: {
    id: 'demon_shadow_market',
    name: '影市',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_shadow_market.png',
    imagePrompt: '影市 in demon_territory, hidden demon black market under dark cloth awnings, red lanterns, cages, cursed wares, smoky alleys, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain market, clear lantern light',
    description:
      '影市藏在魔族村落東側的黑布棚下，低矮攤位以骨釘和紅繩固定，貨架上擺著咒符、斷角、毒瓶與來歷不明的銀器。西側棚口回到魔族村落，南面暗巷通向戰爭熔爐，北側小門接近符印塔陰影。攤販聲音壓得很低，交易用的銅盤刻滿封口符。煙霧、香料和血腥味在棚頂盤旋，使這處市場像要塞供血系統裡一段隱密支流。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_village', description: '掀開黑布回到魔族村落' },
      { direction: 'north', targetRoomId: 'demon_war_forge', description: '鐵軌推車通往戰爭熔爐' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 50 },
    ],
    npcs: ['shadow_market_broker'],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: 19,
    guardianHints: {
      creature: '影市守衛會混在人群中，先辨認甲片反光可避免被突襲。',
      treasure: '某個攤位底下藏著來自人類王國的密封文書。',
      spirit: '契約羊皮紙上有許多名字被劃掉，代表魔族社會內部也存在殘酷債務。',
    },
  },

demon_lava_sewer: {
    id: 'demon_lava_sewer',
    name: '熔岩下水道',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_lava_sewer.png',
    imagePrompt: '熔岩下水道 in demon_territory, cracked stone sewer channels carrying red lava runoff, iron grates, steam vents, demon maintenance tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain stone, clear lantern light',
    description:
      '熔岩下水道是一條破裂排水渠，暗紅熔流沿石槽緩慢滑動，渠壁被長年高溫燒成玻璃般的黑亮色。西側排水口回到血河岸邊，北面狹窄維修梯接往地獄犬欄，南方熱氣則引向戰爭熔爐。渠底漂著熔渣、骨片和被燒彎的鐵管，偶爾有氣泡炸開，噴出刺鼻硫磺霧。這條下水道不像逃生路，更像要塞把廢熱與污血排回魔土的黑色動脈。',
    exits: [
      { direction: 'west', targetRoomId: 'blood_river', description: '排水口回到血河岸邊' },
      { direction: 'south', targetRoomId: 'demon_war_forge', description: '灼熱管線通往戰爭熔爐' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'bloodslag_hound', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[渠]',
    mapX: 5,
    mapY: 18,
    guardianHints: {
      creature: '蒸汽噴口會遮住地獄犬衝鋒路線，聽低吼比看影子可靠。',
      treasure: '沉積池底有被魔力染紅的礦渣，可作為鍛造材料。',
      spirit: '下水道的設計極為古老，可能早於現任魔王與黑暗要塞。',
    },
  },

demon_sigil_tower: {
    id: 'demon_sigil_tower',
    name: '符印塔',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_sigil_tower.png',
    imagePrompt: '符印塔 in demon_territory, narrow black tower covered in glowing red sigils, fortress wall side, chained crystal focus, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain tower, clear lantern light',
    description:
      '符印塔矗立在黑暗要塞大門西側，塔身刻滿層層發光符號，暗紅光沿石縫向上攀升。東側可回要塞大門，南邊窄門通往鎖鏈庭院，西側灰燼步道接近灰燼哨塔。塔內螺旋階梯被魔力燒出玻璃狀痕跡，每層牆面都嵌著監視水晶和裂開符牌。當遠處召喚陣脈動時，整座塔會發出低沉共鳴，像要塞所有防禦咒文都在此被重新編排。',
    exits: [
      { direction: 'east', targetRoomId: 'dark_fortress_gate', description: '塔門通回黑暗要塞大門' },
      { direction: 'north', targetRoomId: 'demon_chain_yard', description: '符文橋通向鎖鏈庭院' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[符]',
    mapX: 2,
    mapY: 20,
    guardianHints: {
      creature: '守塔將領會借用符印護盾，等水晶光芒轉暗時攻擊較有效。',
      treasure: '水晶底座下有一枚可拆卸的符印碎片，能干擾城門結界。',
      spirit: '符印排列記錄了要塞多次改建的痕跡，最底層文字不是魔族語。',
    },
  },

demon_chain_yard: {
    id: 'demon_chain_yard',
    name: '鎖鏈庭院',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_chain_yard.png',
    imagePrompt: '鎖鏈庭院 in demon_territory, open fortress courtyard of hanging iron chains, wet black stones, red storm sky, guarded prison route, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fortress, clear lantern light',
    description:
      '鎖鏈庭院位在拷問室南方，沒有屋頂，四周高牆垂下數百條粗重鐵鏈，在熱風中互相撞擊出沉悶回聲。北側鐵門回到拷問室，西邊窄門通向符印塔，東側可聞到戰爭熔爐傳來的焦鐵味。地面排水槽與符文鎖孔交錯，雨水、灰燼和魔力殘液都被導向中央黑井。牆邊散著斷鉤、破枷與被燒黑的試驗武器，使庭院像守軍測試新咒術的殘酷操場。',
    exits: [
      { direction: 'north', targetRoomId: 'torture_chamber', description: '鐵門回到拷問室' },
      { direction: 'south', targetRoomId: 'demon_sigil_tower', description: '狹門連到符印塔下層' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[鏈]',
    mapX: 2,
    mapY: 21,
    guardianHints: {
      creature: '庭院守軍會利用垂鏈阻擋路線，貼著牆走能減少被包夾。',
      treasure: '中央黑井旁有未完成的符文鎖，可能對應寶庫或符印塔。',
      spirit: '一些鎖鏈上刻著名字，顯示俘虜曾在此留下最後的求救訊息。',
    },
  },

demon_war_forge: {
    id: 'demon_war_forge',
    name: '戰爭熔爐',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_war_forge.png',
    imagePrompt: '戰爭熔爐 in demon_territory, huge infernal forge with molten channels, black anvils, weapon racks, demon smith shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '戰爭熔爐位在要塞內部南東側，巨大的黑鐵爐口噴出橘紅火舌，熔岩槽把熱流導向下方排水系統。北側武備廊連到魔王親衛前廳，西面暗巷可回影市，東側熱管落向熔岩下水道。鐵砧上堆著未冷卻的斧刃、護甲片與惡魔頭盔，牆邊風箱由骨架和鐵皮拼成。每次鐵錘落下，地面都會微震，像整座要塞正在把戰爭一件件鑄造成形。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_shadow_market', description: '推車軌道回到影市' },
      { direction: 'north', targetRoomId: 'demon_lava_sewer', description: '熱管線通往熔岩下水道' },
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '軍械門回到要塞大門廣場' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'war_forge_taskmaster', maxCount: 1, respawnSeconds: 600 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    npcs: ['war_forge_spy'],
    mapSymbol: '[爐]',
    mapX: 5,
    mapY: 20,
    guardianHints: {
      creature: '熔爐守將會把士兵推向火線，站在砧台後可阻斷衝鋒。',
      treasure: '冷卻槽裡有一把剛成形的魔族長刃，尚未完成詛咒儀式。',
      spirit: '爐壁內層鑄著古代神殿石材，魔族把舊聖所改造成了兵工廠。',
    },
  },

demon_hellhound_kennel: {
    id: 'demon_hellhound_kennel',
    name: '地獄犬欄',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_hellhound_kennel.png',
    imagePrompt: '地獄犬欄 in demon_territory, iron kennel corridor with ember-eyed hellhounds, scorched chains, feeding troughs and red torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '地獄犬欄由黑鐵柵、骨柱和熔岩槽圍成，焦紅火光從犬欄底部映出，照亮牆面一道道爪痕。西側兵營通道傳來士兵吆喝，南面石階連到詛咒神龕，東邊排水溝散出熔岩下水道的硫磺味。欄內鋪著燒焦獸皮、碎鏈和半熔鐵環，低吼聲在每個隔間間傳遞。空氣裡混著野獸熱息與魔法飼料的苦味，像整排犬欄都在等待同一個放閘信號。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_barracks', description: '推開鐵柵回到魔族兵營' },
      { direction: 'south', targetRoomId: 'demon_war_forge', description: '排氣孔外是戰爭熔爐側廊' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[犬]',
    mapX: 5,
    mapY: 21,
    guardianHints: {
      creature: '地獄犬聽到骨笛會集體衝鋒，先擊倒馴犬兵可打亂牠們。',
      treasure: '犬欄牆上掛著幾副耐火護腕，是馴犬兵進入熔爐時使用的裝備。',
      spirit: '部分地獄犬項圈刻有舊王國徽記，說明牠們可能由戰獸改造而來。',
    },
  },

demon_cursed_shrine: {
    id: 'demon_cursed_shrine',
    name: '詛咒神龕',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_cursed_shrine.png',
    imagePrompt: '詛咒神龕 in demon_territory, ruined underground shrine feeding a demon summoning circle, black candles, red sigils, cracked sacred statues, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain shrine, clear lantern light',
    description:
      '詛咒神龕藏在召喚陣南側的低矮石室中，黑曜石龕座嵌著裂開的惡魔角，暗紫火焰在祭碗內無聲燃燒。北側符文階回到召喚陣，東邊牆縫可聽見地獄犬欄的鐵鍊與低吼。龕前地面刻滿重疊咒文，許多名字被刮掉，只留下血色凹痕和凝固蠟滴。石室空氣冰冷得異常，像所有詛咒都被暫時封在這裡，等待再度被召喚陣抽走。',
    exits: [
      { direction: 'north', targetRoomId: 'summoning_circle', description: '副陣回到召喚陣大廳' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[龕]',
    mapX: 4,
    mapY: 22,
    guardianHints: {
      creature: '神龕祭司會借用舊聖徽治療守軍，熄滅黑蠟可削弱法術。',
      treasure: '破碎神像背後藏著一片未被污染的聖徽碎片。',
      spirit: '這裡證明黑暗要塞建在舊神殿遺址上，仍有殘存意志抗拒魔族。',
    },
  },

demon_lord_antechamber: {
    id: 'demon_lord_antechamber',
    name: '魔王親衛前廳',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_lord_antechamber.png',
    imagePrompt: '魔王親衛前廳 in demon_territory, elite guard antechamber beside demon throne, black marble floor, red banners, sealed dragon door heat, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '魔王親衛前廳位於魔王殿東側，黑石地面被親衛長靴磨得發亮，兩排高背骨椅沿牆排列，椅後插著燃燒戰旗。西面巨門回到魔王殿，南側武備廊可通往戰爭熔爐。前廳中央鋪著破碎王徽與敵國盾牌，牆上黑鐵面甲整齊懸掛，像無數沉默眼睛。甲片摩擦聲偶爾從陰影後傳出，火光照見親衛留下的寬大腳印，使這裡充滿最後防線的壓迫感。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_throne', description: '黑石側門回到魔王殿' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[衛]',
    mapX: 4,
    mapY: 23,
    guardianHints: {
      creature: '親衛會保護魔王撤退路線，分散站位可避免被同時壓制。',
      treasure: '戰術桌上有龍谷密門的控制水晶，表面溫度異常灼熱。',
      spirit: '前廳記錄著魔王對龍谷的恐懼，說明下一片區域並非魔族完全掌控。',
    },
  },

// ─── Area 10: 龍谷 (Lv 40-50) ─────────────────────────────

  dragon_valley_entrance: {
    id: 'dragon_valley_entrance',
    name: '龍谷入口',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_valley_entrance.png',
    imagePrompt: '龍谷入口 in dragon_valley, secret passage opening into misty dragon valley between winglike mountains, ancient draconic runes, warm wind and distant wings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain valley, clear lantern light',
    description:
      '龍谷入口從魔王殿背後的秘密通道豁然展開，兩座山峰像巨龍雙翼夾住雲霧峽谷，暖風混著硫磺、雨水與鱗片氣味迎面湧來。南側暗道回到魔王殿，北面雲霧小徑進入龍巢小徑，東邊白骨荒原鋪向龍骨原野，西側岩棚傳來拍翼聲。入口岩壁刻著古老龍文，供台上有燒熔黑鐵與新鮮龍鱗，像在宣告魔族曾試圖闖入，卻被山谷自身逐回。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_throne', description: '退回魔王殿' },
      { direction: 'north', targetRoomId: 'dragon_nest_path', description: '踏入雲霧繚繞的峽谷' },
      { direction: 'east', targetRoomId: 'dragon_bone_field', description: '東方散落著巨大的白骨' },
      { direction: 'west', targetRoomId: 'dragon_wind_roost', description: '西側岩棚傳來拍翼聲' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'cloudstone_drake', maxCount: 1, respawnSeconds: 65 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 75 },
    ],
    npcs: ['dragon_gate_loremaster'],
    mapSymbol: '[龍]',
    mapX: 3,
    mapY: 24,
    guardianHints: {
      creature: '幼龍的火焰吐息有固定的冷卻時間——在牠噴完火後的五秒內是最佳攻擊時機。',
      treasure: '岩壁上的龍族文字實際上是一張藏寶圖，記載著龍之寶庫的位置。',
      spirit: '龍谷是龍族最後的聖地——在遠古戰爭中倖存的龍族後裔在此繁衍生息。',
    },
  },

dragon_nest_path: {
    id: 'dragon_nest_path',
    name: '龍巢小徑',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_nest_path.png',
    imagePrompt: '龍巢小徑 in dragon_valley, narrow cliff trail with deep dragon claw marks, huge scales, misty walls and flying shadows overhead, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain trail, clear lantern light',
    description:
      '龍巢小徑蜿蜒在峭壁之間，岩壁上滿是深深龍爪痕，爪溝裡沉著金色石粉，風吹過便像霧一樣飄起。南側小徑退回龍谷入口，北面高崖通向飛龍崖，西側隱蔽洞口連到龍蛋室，東邊石階落向鱗光泉。狹路時寬時窄，有些轉角只能貼著岩面通過，頭頂巨大影子掠過時，散落鱗片與碎石會一同震動，使整條路帶著護巢領地的警戒感。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_valley_entrance', description: '退回龍谷入口' },
      { direction: 'north', targetRoomId: 'wyvern_cliff', description: '小徑通向一處懸崖' },
      { direction: 'west', targetRoomId: 'dragon_egg_chamber', description: '岩壁中有一個隱蔽的洞口' },
      { direction: 'east', targetRoomId: 'dragon_scale_spring', description: '石階通往鱗光泉' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'cloudstone_drake', maxCount: 1, respawnSeconds: 65 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[徑]',
    mapX: 3,
    mapY: 25,
    guardianHints: {
      creature: '龍騎士是駕馭飛龍的精銳戰士——先擊落他的坐騎可以大幅削弱戰力。',
      treasure: '散落的龍鱗中有幾片品質極高的古龍鱗，是鍛造龍鱗甲的頂級材料。',
      spirit: '這條小徑是幼龍學習飛翔的訓練場——岩壁上的抓痕記錄著牠們成長的軌跡。',
    },
  },

wyvern_cliff: {
    id: 'wyvern_cliff',
    name: '飛龍崖',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'wyvern_cliff.png',
    imagePrompt: '飛龍崖 in dragon_valley, high cliff platform with wyvern nests, rolling clouds below, fierce wind, eggshells and watchful winged beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain fantasy terrain, clear lantern light',
    description:
      '飛龍崖是一處突出山壁的巨大平台，三面臨空，雲層在腳下翻湧，強風把蛋殼碎片和舊旗布捲向高處。南面窄徑回到龍巢小徑，北側風線牽向天空之橋，西邊崖壁裂縫通往龍爪隘口。崖邊巢穴裡停著銳眼飛龍，平台上散落破碎鞍具、龍騎長槍與風向符刻。每陣風向改變都會使崖底回聲翻上來，像整座山崖正在提醒外來腳步已被天空注意。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_nest_path', description: '退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'sky_bridge', description: '崖邊有一座雲中石橋' },
      { direction: 'west', targetRoomId: 'dragon_claw_pass', description: '崖壁裂縫通向龍爪隘口' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'cloudstone_drake', maxCount: 1, respawnSeconds: 65 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[崖]',
    mapX: 3,
    mapY: 26,
    guardianHints: {
      creature: '飛龍會利用強風進行俯衝攻擊——背靠岩壁可以限制牠們的攻擊角度。',
      treasure: '飛龍巢穴中混雜著從各地叼回的寶物，其中不乏稀有的魔法道具。',
      spirit: '飛龍是龍族中最自由的一支——牠們拒絕了古龍的統治，選擇在風中翱翔。',
    },
  },

dragon_bone_field: {
    id: 'dragon_bone_field',
    name: '龍骨原野',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_bone_field.png',
    imagePrompt: '龍骨原野 in dragon_valley, vast field of colossal dragon skeletons, rib arches, green venom seepage, mist and ancient spirits, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain field, clear lantern light',
    description:
      '龍骨原野鋪滿巨大骨骸，肋骨如拱門高聳，頭骨半埋在霧與碎石中，比屋舍還要龐大。西側骨路回到龍谷入口，北方最大的龍骨指向古龍巢穴。骨縫裡滲出暗綠毒液，風穿過空洞胸腔時發出低語般回音，枯草上還留著幼龍爪印和鱗片碎光。這片原野像遠古巨龍的安息地，也像進入山谷核心前必須穿過的白骨記憶。',
    exits: [
      { direction: 'west', targetRoomId: 'dragon_valley_entrance', description: '回到龍谷入口' },
      { direction: 'north', targetRoomId: 'ancient_dragon_lair', description: '最大的龍骨指向一個洞穴' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
    ],
    groundItems: [
      { itemId: 'dragon_scale', description: '龍骨旁散落著閃亮的鱗片' },
    ],
    mapSymbol: '[骨]',
    mapX: 4,
    mapY: 24,
    guardianHints: {
      creature: '古龍蛇會從龍骨的縫隙中突然竄出——在龍骨密集的區域要格外小心。',
      treasure: '古龍的骨髓中仍殘留著強大的魔力，是煉製頂級藥水的極品材料。',
      spirit: '每一具龍骨都曾是一位偉大的龍族戰士——在這裡能感受到牠們最後的驕傲與不甘。',
    },
  },

ancient_dragon_lair: {
    id: 'ancient_dragon_lair',
    name: '古龍巢穴',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'ancient_dragon_lair.png',
    imagePrompt: '古龍巢穴 in dragon_valley, enormous cavern for an ancient dragon, scale crystals on walls, cracked eggshells, dragon teeth and sleeping power, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '古龍巢穴是一座穹頂高達數十公尺的天然巨洞，洞壁覆滿閃爍龍鱗結晶，溫熱霧珠從高處滴落。南面洞口退回龍骨原野，東側封印通道通往龍之寶庫，北方新裂開的龍牙石階升向龍鱗鍛台。地面散著碎蛋殼、古龍牙與刻有龍語誓約的石板，中央石台被無數爪痕磨得光滑。深處沉重呼吸每響一次，牆上鱗晶便依序亮起，像巢穴仍在回應古龍夢境。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_bone_field', description: '退回龍骨原野' },
      { direction: 'east', targetRoomId: 'dragon_hoard', description: '洞穴側面有一條通道', locked: true, keyItemId: 'gold_key' },
      { direction: 'north', targetRoomId: 'dragon_scale_forge', description: '龍牙石階通往鱗鍛台' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 25,
    guardianHints: {
      creature: '洞穴中的回音會暴露你的位置——輕手輕腳移動可以避免驚動沉睡的巨獸。',
      treasure: '龍鱗結晶是天然形成的魔法礦物，其價值遠超普通寶石。',
      spirit: '這個巢穴的主人是一條活了數千年的古龍——牠見證了這個世界的興衰更迭。',
    },
  },

dragon_hoard: {
    id: 'dragon_hoard',
    name: '龍之寶庫',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_hoard.png',
    imagePrompt: '龍之寶庫 in dragon_valley, mountain of gold coins, gems, crowns and magic weapons under dragon marked wards, dazzling guarded cavern, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain mountain, clear lantern light',
    description:
      '龍之寶庫的財富堆成刺眼山丘，金幣、寶石、王冠、聖物與魔法武器依年代和王國紋章分層堆疊。西側封印門回到古龍巢穴，除此之外只有金光、龍語符文與風暴巨龍留下的焦黑爪痕。寶山表面看似鬆散，地板卻埋著感應重量的細密刻紋，光線一旦偏移便會沿牆面折出警戒藍光。這裡不像普通藏寶室，而像用戰利品寫成的龍族史書。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_dragon_lair', description: '回到古龍巢穴' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[寶]',
    mapX: 5,
    mapY: 25,
    guardianHints: {
      creature: '守護寶庫的風暴巨龍會用雷電攻擊——裝備抗雷裝備能大幅降低傷害。',
      treasure: '寶山頂部有一件散發著金色光芒的武器——那是某位古代英雄的遺物。',
      spirit: '龍族收藏寶物並非出於貪婪——每一件寶物都承載著一段被牠們守護的歷史。',
    },
  },

sky_bridge: {
    id: 'sky_bridge',
    name: '天空之橋',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'sky_bridge.png',
    imagePrompt: '天空之橋 in dragon_valley, translucent cloudstone bridge between peaks over abyss, violent winds, storm light in distance, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain bridge, clear lantern light',
    description:
      '天空之橋由雲霧凝成半透明雲石，橫跨兩座山峰之間，橋下是無底深淵與翻湧白雲。南側橋根回到飛龍崖，北方雷光引向風暴之巔，東邊火玻璃台泛著紅亮反光，西側雷巢傳來低沉轟鳴。橋身內部流動白銀氣旋，腳步落下時會浮現短暫龍語符號。殘破護欄與舊哨位被強風磨亮，使這座橋像龍谷用來審視通行者的高空脊骨。',
    exits: [
      { direction: 'south', targetRoomId: 'wyvern_cliff', description: '退回飛龍崖' },
      { direction: 'north', targetRoomId: 'storm_peak', description: '穿越風暴前往山巔' },
      { direction: 'east', targetRoomId: 'dragon_fireglass_terrace', description: '橋東側有一片火玻璃平台' },
      { direction: 'west', targetRoomId: 'dragon_thunder_nest', description: '雷鳴從西側巢穴傳來' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'cloudstone_drake', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[橋]',
    mapX: 3,
    mapY: 27,
    guardianHints: {
      creature: '在橋上戰鬥要小心被風暴巨龍的氣流推落——靠近橋的中心線較為安全。',
      treasure: '橋體本身就是一種稀有的雲石結晶，如果能取下一塊帶回去會價值連城。',
      spirit: '這座橋是遠古龍族的建築傑作——牠們用風之魔法凝固了雲層。',
    },
  },

storm_peak: {
    id: 'storm_peak',
    name: '風暴之巔',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'storm_peak.png',
    imagePrompt: '風暴之巔 in dragon_valley, highest mountain summit under thunderclouds, ancient dragon altar, spinning lightning orb and storm dragons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function town service, terrain mountain, clear lantern light',
    description:
      '風暴之巔終年籠罩雷暴雲，黑色玻璃岩面被反覆雷擊燒得光滑，雨水未落地便被上升熱流蒸乾。南側天空之橋懸在雲下，北面祭壇後方通往古龍聖殿，東側星光階連向龍諭棲台，西邊熱風口指向熔火高巢。峰頂古老龍族祭壇上，雷球不停旋轉，星盤刻度與風向柱在電光中忽明忽暗。雷光、火光與星光在此交會，使山巔成為龍谷元素力量的核心。',
    exits: [
      { direction: 'south', targetRoomId: 'sky_bridge', description: '退回天空之橋' },
      { direction: 'north', targetRoomId: 'elder_dragon_sanctum', description: '祭壇背後有一道通往聖殿的門' },
      { direction: 'east', targetRoomId: 'dragon_oracle_perch', description: '東側觀星台仍有微光' },
      { direction: 'west', targetRoomId: 'dragon_molten_aerie', description: '西側熱風通往熔火高巢' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[巔]',
    mapX: 3,
    mapY: 28,
    guardianHints: {
      creature: '風暴巨龍在暴風雨中戰力倍增——如果能驅散雲層就能削弱牠。',
      treasure: '祭壇上的雷球蘊含著純粹的雷電之力，是附魔雷屬性武器的最佳材料。',
      spirit: '龍族祭壇是龍族祭祀天空之神的場所——在此祈禱可能獲得風暴的祝福。',
    },
  },
};
