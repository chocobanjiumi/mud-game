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
      '冰封雪原的盡頭，大地突然斷裂成一道巨大的裂谷。裂谷對面是一片焦黑的荒原，。魔族邊境周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '空氣中瀰漫著硫磺的刺鼻氣味，遠方的天空被永恆的紅色火焰映照。' +
      '一座搖搖欲墜的石橋橫跨裂谷，這是通往魔族領地的唯一通路。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '一望無際的焦黑平原，大地龜裂如蛛網，裂縫中不時竄出赤紅色的火焰。焦土平原周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '枯萎的樹木如同黑色的骨架矗立其間，天空永遠籠罩在灰紅色的煙塵之下。' +
      '遠處傳來低沉的戰鼓聲，那是魔族巡邏隊的信號。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '由黑色岩石和獸骨搭建的簡陋村落，低矮的帳篷和骨架棚屋散佈其間。魔族村落周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '魔族士兵在村中巡邏，鍛造爐裡的火焰徹夜不熄，空氣中充斥著金屬和鮮血的氣味。' +
      '村落中央的圖騰柱上掛滿了冒險者的裝備殘骸，作為對入侵者的警告。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '高聳入雲的黑色城牆擋在前方，由巨大的暗黑岩石砌成，表面刻滿了魔族的詛咒符文。黑暗要塞大門周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '城門由兩扇十公尺高的鑄鐵大門構成，門上釘著巨大的惡魔頭顱裝飾。' +
      '門前的廣場上，魔族將軍正在操練一隊魔族士兵。廣場四角各立著一根燃燒的黑曜石柱，柱頂火焰會隨守軍口令忽明忽暗。城牆縫隙中傳來機關齒輪的沉重轉聲，說明這裡不只是入口，也是整座要塞的防禦樞紐。玩家若停留觀察，能看出巡邏隊每隔數分鐘才會短暫分散。門縫下方還有新鮮車轍，表示軍械正由西側熔爐送入城內，守軍補給仍然頻繁。',
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
      '要塞內部陰暗潮濕的石室，牆壁上掛滿了生鏽的鐵鏈和刑具。拷問室周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '空氣中瀰漫著令人作嘔的血腥氣味，角落裡堆放著破碎的籠子和骨骸。' +
      '偶爾能聽到從更深處傳來的淒厲慘叫聲。地面排水溝裡流著被稀釋的紅黑色污水，牆角卻放著幾只尚未熄滅的治療藥瓶，暗示曾有俘虜在此反抗。石門內側刻著潦草的逃生記號，有些箭頭指向兵營，有些則指向南方的鎖鏈庭院，讓這裡成為要塞內部路線的危險節點。若仔細聆聽，東側牆後還會傳來召喚陣低沉脈動，南側鐵門則不斷滲出冷風與鐵鏽味，顯示另有押送路線尚未封閉。' +
      '此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對玩家與伏擊路線。',
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
      '寬闊的地下營房中排列著數百張由獸骨和獸皮製成的簡陋床鋪。魔族兵營周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '武器架上陳列著各式各樣的魔族武器，牆壁上掛著作戰地圖和戰旗。' +
      '空氣中充斥著魔族特有的刺鼻體味，偶爾能聽到士兵們的粗獷笑聲。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '一間圓形的巨大石室，地面刻著複雜的魔法陣，暗紅色的能量脈動從符文中湧出。召喚陣周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '空氣中充滿了灼熱的魔力，呼吸都變得困難。四根黑色石柱上燃燒著不滅的鬼火，' +
      '將整個空間映照成地獄般的景象。這裡是魔王從深淵召喚惡魔的場所。石室穹頂吊著數十枚倒置的金屬鈴，當符文脈動時會發出低沉共鳴，使玩家的方向感逐漸混亂。地面外圈有新近刻下的副陣，能把兵營與詛咒神龕的力量匯入主陣，若不破壞這些節點，守軍會源源不絕地回防。北側石門上的符號與魔王殿王座完全相同，暗示兩者共享同一個深淵核心。',
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
      '黑暗要塞的最深處，一座由無數骨骸堆砌而成的王座矗立在大殿中央。魔王殿周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '魔王端坐其上，渾身散發著令人窒息的威壓。殿堂四壁鑲嵌著燃燒的魔力結晶，' +
      '映照出魔王那雙如烈焰般的瞳孔。這裡是魔族領地的心臟，也是最危險的戰場。大殿地面鋪著破碎王國的旗幟，四周高台上站著沉默的親衛與祭司，等待魔王一個手勢便會啟動防禦結界。王座後方並非單純牆面，而是一面被黑鐵封住的巨大門扉，門縫裡吹出龍谷的乾燥熱風，提示魔族正在監視更古老的力量。側廳的親衛也隨時準備支援，王座陰影中還藏著多道未啟動的黑色鎖鏈。' +
      '此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對玩家與伏擊路線。',
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
      '一間由魔法結界守護的石室，四壁鑲嵌著發光的紅色寶石。魔族寶庫周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '室內堆放著從各地掠奪來的金幣、寶石和魔法物品，散發著誘人的光芒。' +
      '但寶庫中設有多重陷阱，貿然觸碰任何東西都可能觸發毀滅性的詛咒。' +
      '南側貨梯可聽見影市叫賣聲，但結界已鎖死，只能從村落或白骨坑地重新繞路接近。此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '裂谷西側的高地上立著一座被灰燼覆蓋的哨塔，塔身由黑木、鐵箍與巨獸肋骨拼接而成。風從冰原方向吹來時，塔頂的火盆會短暫變成藍白色，暴露出巡邏小惡魔的剪影。這裡能俯瞰石橋與焦土平原，是魔族監視北境來客的前哨，也藏著一條繞過正面巡邏的窄階梯。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '焦土平原西側陷落成一片灰白色坑地，碎骨、破盾與凝固熔渣層層堆疊，踩下去會發出乾脆的碎裂聲。坑壁有許多粗糙的拖痕，通往更深處的黑暗洞穴，偶爾還能聽見地獄犬在遠方嗅聞。這裡是魔族處理戰場殘骸的地方，也是拾荒者冒死尋找遺物的危險區域。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '村落東側的黑布棚一層接一層，遮住了天空也遮住了交易者的臉。攤位上擺著破碎法器、帶詛咒的寶石、無主的武器與寫滿契約文字的羊皮紙，紅燈籠下的影子比真人更忙碌。南側後巷貨梯掛著寶庫封印，已不能直接通行；若要進寶庫需回村落或從白骨坑地外牆繞入。這裡不完全受軍隊管轄，低階魔族、走私商與背叛者都會用壓低的聲音交換消息，旅人也能從混亂貨流中窺見要塞內部的補給路線',
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
      '血河東岸的破裂排水口通向要塞下方的熔岩下水道。半圓形石渠裡流動著暗紅熱流，鐵柵被高溫烤得發亮，牆面則結著黑色鹽晶與魔力殘渣。每隔一段距離就有維修平台與沉重閘門，證明魔族把河流、鍛爐與召喚陣的廢熱全部導入此處。蒸汽會遮蔽視線，也會把腳步聲傳得很遠。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '黑暗要塞西側的高塔細長而扭曲，外牆布滿發亮的惡魔符印，像一條條燒紅的鎖鏈纏住塔身。塔內沒有普通樓梯，只有沿牆旋轉上升的符文平台，每一步都會抽走些許體溫。中央懸著一顆被黑鐵鎖住的水晶，將城門、召喚陣與魔王殿的結界連成一體。若能讀懂符印排列，便能看出要塞防線的弱點。塔窗外可見血河與熔爐煙柱同時閃爍，說明所有防線都由同一套魔力管路供能。牆角散落著被燒焦的羊皮卷，上面記錄著結界換班時間與幾個尚未封死的維修孔。塔頂每次鐘響都會讓城牆符文重新排列，表示旅人若想削弱大門防線，必須在短暫間隔內完成行動',
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
      '拷問室南方是一座沒有屋頂的內庭，數百條粗重鐵鏈從四周高牆垂下，在熱風中互相撞擊，發出沉悶回聲。庭院地面刻有排水槽與符文鎖孔，雨水、灰燼和魔力殘液都被導向中央的黑井。這裡曾用來押送俘虜，如今則成為守軍測試新武器與新咒術的場地。牆邊有一扇通往符印塔的窄門，經常被巡邏隊忽略。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '影市北方的鐵軌一路伸進戰爭熔爐，巨大的黑鐵砧台圍著熔池排列，火光把穹頂照成滾動的深紅色。魔族工匠把血河礦渣、戰場廢鐵與詛咒符文一起投入爐中，鍛造成供前線使用的長矛、鎖甲與攻城鉤。熔爐西側能聽見要塞大門的號令聲，東側管線則連向熔岩下水道。只要破壞風箱，整座工坊的節奏就會停頓。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '兵營東側的鐵柵走廊悶熱而刺鼻，一排排犬欄用粗鏈鎖住，欄內地獄犬的眼睛像餘燼一樣在黑暗中閃爍。地面布滿爪痕與燒焦的腳印，餵食槽旁堆著半熔化的護甲碎片。馴犬兵會用骨笛下令，讓地獄犬在狹窄通道中輪番衝撞。走廊盡頭的排氣孔連著戰爭熔爐，使這裡永遠充滿灼熱風聲。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '召喚陣南方的副通道通往一座被改造的古老神龕。原本潔白的神像被黑蠟覆蓋，臉部遭符文鐵片封住，神龕前的石盆裡燃著不會照亮周圍的紅火。牆上仍能看到舊日聖徽，但每一道刻痕都被魔族咒文覆寫，使此處同時散發神聖殘響與深淵低語。東側被黑蠟封住的側廊可感到親衛前廳氣息，但無法直接通行；需回召喚陣與魔王殿側門繞入。副陣的能量從地板裂縫流向北方，支撐著主召喚陣的持續運作。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '魔王殿東側的親衛前廳比主殿更安靜，黑色大理石地面被擦得像鏡子，能映出牆上燃燒旗幟的倒影。兩排重甲親衛站在門柱旁，身後是通往龍谷密門的控制機關與數枚暗紅水晶。這裡不是接見臣民的地方，而是魔王在決戰前調度親衛、封鎖後路與觀察召喚陣狀態的戰術室。南側暗紅側廊可看見詛咒神龕火光，但黑蠟門只從神龕側留下痕跡，無法作為通路。空氣中混著深淵寒意和龍谷熱風，表示兩股力量在門後互相拉扯。桌上攤開的軍令還標著各處哨塔與熔爐編號，若能帶走，足以揭露魔族下一階段的遠征計畫。前廳天花板垂下多面黑鐵鏡，能把主殿與召喚陣的動靜投到牆上，因此親衛幾乎不會被偷襲。此處屬於開放 PvP 高風險地帶，死亡可能損失金幣，撤退前必須留意敵對旅人與伏擊路線',
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
      '穿過魔王殿背後的秘密通道，眼前豁然開朗。兩座巍峨的山峰如同巨龍的翅膀展開，。龍谷入口周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '中間的峽谷被雲霧繚繞，空氣中瀰漫著古老而神秘的氣息。' +
      '入口處的岩壁上刻著龍族的古老文字，警告著所有膽敢踏入的生命。石縫中吹出的熱風帶著硫磺與雨水氣味，和魔王殿的陰冷截然不同。遠處山脊有巨大的影子滑過雲層，地面則散落著新鮮龍鱗與被火焰熔化的黑鐵碎片，說明魔族也曾試圖闖入卻被擊退。這裡是龍谷的安全錨點，也是判斷天候、龍群活動與前進路線的第一處觀察點。岩刻旁還有古老供台，提醒來者必須以敬意通行。',
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
      '一條蜿蜒在峭壁之間的狹窄小徑，兩側的岩壁上佈滿了龍爪留下的深深抓痕。龍巢小徑周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '不時有巨大的影子掠過頭頂——那是在天空中盤旋的飛龍。' +
      '小徑上散落著巨大的鱗片，每一片都比人的手掌還大。岩壁縫隙裡有幼龍磨爪留下的粉末，風吹過時會像金色霧氣一樣飄起。道路時寬時窄，有些地方只能貼著岩面前進，若沒有留意頭頂的影子，很容易被巡弋的龍騎士堵在轉角。',
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
      '一處突出於山壁的巨大平台，三面臨崖，下方是萬丈深淵。飛龍崖周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '強勁的山風在崖頂呼嘯，雲層就在腳下翻湧。數隻飛龍在崖邊的巢穴中棲息，' +
      '牠們銳利的目光警惕地注視著每一個靠近的生物。崖面上有被爪子固定的舊旗幟與破碎鞍具，顯示龍騎士會在此訓練坐騎起降。風勢會突然改變方向，把細石與蛋殼碎片捲向空中；玩家若想通往天空之橋，必須抓準飛龍換巢與風向短暫平穩的時機。平台邊緣刻有龍族風向符，符文閃白時代表即將出現下沉氣流，任何站位錯誤都可能被迫退回小徑。崖底回聲也會暴露行蹤。',
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
      '一片被巨大龍骨散佈的荒野，有些骨骸的肋骨如同拱門般高聳，頭骨比房屋還要巨大。龍骨原野周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '這裡是遠古巨龍的安息之地，空氣中殘留著龍族亡魂的低語。' +
      '腐朽的骨骼中滲出暗綠色的毒液——古龍蛇在骨海中遊蕩。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
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
      '一個巨大的天然洞穴，穹頂高達數十公尺，足以容納一條成年巨龍。古龍巢穴周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '洞壁上覆蓋著閃爍的龍鱗結晶，地面散佈著碎裂的蛋殼和龍牙。' +
      '洞穴深處傳來沉重的呼吸聲，一股令人顫慄的古老力量在此沉睡。洞穴中央的石台被無數爪痕磨得光滑，四周堆著來自不同年代的獻禮：風化的王冠、破裂的魔法盾與刻著龍語誓約的石板。每次呼吸聲響起，牆上的鱗晶便會依序亮起，像是在回應巢穴主人的夢境。巢穴後壁有新近破開的裂痕，露出通往鍛台的龍牙階梯，也暗示古龍並未完全封閉自己的聖域。洞頂還滴落溫熱霧珠。',
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
      '令人窒息的財富堆積如山——金幣、寶石、魔法武器、王冠和聖物混雜在一起，。龍之寶庫周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '形成一座閃閃發光的小丘。這是龍族數千年來從各個王國掠奪並收藏的寶藏。' +
      '然而，每一枚金幣都被龍的魔力所標記，拿走任何東西都會被追蹤。寶庫頂端並非單純堆放財物，而是依照年代與王國紋章分層排列，像一座由戰利品寫成的歷史塔。牆面有風暴巨龍留下的焦黑爪痕，地板則埋著感應重量的龍語符文，只要光線折射角度改變，守衛就會立刻察覺。寶山後方的石門散發鍛火藍光，但龍語封印已經閉合，需回古龍巢穴走龍牙石階前往鍛台。',
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
      '一座由雲霧凝結而成的半透明石橋，橫跨在兩座山峰之間。天空之橋周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '橋下是萬丈深淵，橋面上不時有強風呼嘯而過。' +
      '遠方的山巔上閃爍著風暴的雷光，那是龍谷最高峰——風暴之巔。橋身內部流動著白銀色氣旋，腳步落下時會浮現短暫的龍語符號，彷彿橋本身正在判斷來者是否有資格通行。左右兩側各有殘破護欄與龍騎士的舊哨位，任何戰鬥都可能被強風推向危險邊緣。',
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
      '龍谷最高的山峰，終年被雷暴雲層籠罩。閃電不斷在雲間穿梭，。風暴之巔周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。周圍還有舊標記、腳印與地形變化補強方向判讀。周圍還有舊標記、腳印與地形變化補強方向判讀。' +
      '雷鳴聲震耳欲聾。山頂的平台上矗立著一座古老的龍族祭壇，' +
      '祭壇上的雷球不停地旋轉閃爍，散發著令人敬畏的力量。山頂岩面被雷擊燒成黑色玻璃，雨水還未落地就被上升熱流蒸乾。龍族祭司曾在此觀測天空，平台邊緣仍保留著星盤刻度與風向柱。每當雷球轉到北方，通往古龍聖殿的門便會短暫顯形。東西兩側分別能看見觀星棲台與熔火高巢，火光、雷光與星光在峰頂交會，使此處成為龍谷元素力量的核心。錯過時機便只能等待下一輪雷暴。',
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
