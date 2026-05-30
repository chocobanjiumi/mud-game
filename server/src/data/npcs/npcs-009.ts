import type { NpcDef } from '@game/shared';

export const NPCS_PART_009: Record<string, NpcDef> = {
sapphire_lake_claim_surveyor: {
    id: 'sapphire_lake_claim_surveyor',
    name: '艾薇',
    alias: 'surveyor',
    title: '入口採區測脈師',
    description:
      '一名測脈師蹲在入口採區水邊，用細篩淘洗藍泥礦砂。' +
      '她的木牌上畫著礦脈小徑、鏡淺灘與藍心聖窟的水線。',
    roomId: 'sapphire_lake_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '湖水越清，越要小心。真正的礦脈通常藏在你看不清的水下。',
        options: [
          { text: '我該去哪採？', nextId: 'route' },
          { text: '藍心礦核是什麼？', nextId: 'core' },
          { text: '我會慢慢採。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '淺層採藍泥礦砂，玻魚灣取鱗，藍葦床採花。深脈窗口和藍心聖窟要有隊伍再下去。',
        options: [
          { text: '藍心礦核是什麼？', nextId: 'core' },
          { text: '我先採淺層。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '湖底礦脈還活著的證明。拿到它之前，先學會分辨礦光和水靈的眼睛。',
        options: [
          { text: '我該去哪採？', nextId: 'route' },
          { text: '我會注意水靈。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '不要一次挖太深。湖會記得每一下礦鎬。' },
    ],
    guardianHints: {
      creature: '艾芙能提示藍泥蟾、脈晶蜥、藍脈晶魔像與藍心礦靈的採集風險。',
      treasure: '她說明藍泥礦砂、玻魚鱗片與藍心礦核的用途。',
      spirit: '她把藍寶湖整理成淺層採集、湖岸草藥、深層礦脈三段節奏。',
    },
  },

sapphire_lake_lotus_vendor: {
    id: 'sapphire_lake_lotus_vendor',
    name: '荷珊',
    alias: 'vendor',
    title: '藍葦床採集藥販',
    description:
      '一名採集藥販坐在藍葦床旁的小木筏上，藥籃裡分層放著藍蓮花瓣與湖息小瓶。' +
      '她用玻魚鱗片貼在瓶身上，方便夜裡辨認藥色。',
    roomId: 'sapphire_lake_blue_reed_bed',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'sapphire_lotus_petal',
      'lakebreath_phial',
      'blue_silt_ore',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要藥還是要花？別把藍蓮連根拔，水靈會把你的靴子也留下。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '水靈怎麼避？', nextId: 'spirit' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、藍蓮花瓣、湖息小瓶、藍泥礦砂。玻魚鱗片我不穩定收，太容易碎。',
        action: { type: 'shop', data: { shopType: 'sapphire_lake_vendor' } },
        options: [
          { text: '水靈怎麼避？', nextId: 'spirit' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'spirit',
        text: '採一瓣留兩瓣，挖一袋補一杓泥。水靈討厭貪心的人，不討厭笨手笨腳的人。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '我會留花。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '湖息小瓶別一口灌完，慢慢喝，才聽得到水下的聲音。' },
    ],
    guardianHints: {
      creature: '荷珊能提示藍葦水靈、藍泥蟾、鏡淺湖蛇與靜泉守靈。',
      treasure: '她販售藍蓮花瓣、湖息小瓶與藍泥礦砂。',
      spirit: '她讓藍寶湖採集區有可回訪的補給與採集倫理節點。',
    },
  },

sapphire_lake_spirit_listener: {
    id: 'sapphire_lake_spirit_listener',
    name: '尤娜',
    alias: 'listener',
    title: '水靈鏡聽者',
    description:
      '一名聽者坐在水靈鏡前，雙手浸在湖水裡，像在替看不見的人梳理倒影。' +
      '她說湖底礦脈會說話，只是聲音慢得像石頭。',
    roomId: 'sapphire_lake_spirit_mirror',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '如果倒影比你晚眨眼，就代表湖底有東西正在看你。',
        options: [
          { text: '藍心聖窟危險嗎？', nextId: 'sanctum' },
          { text: '水精靈是真的嗎？', nextId: 'spirit' },
          { text: '我會看倒影。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sanctum',
        text: '危險，但不是惡意。藍心礦靈只阻止過度開採；若你只是證明礦脈還活著，牠會給你答案。',
        options: [
          { text: '水精靈是真的嗎？', nextId: 'spirit' },
          { text: '我會節制。', nextId: 'farewell' },
        ],
      },
      {
        id: 'spirit',
        text: '真的。牠們不在故事裡，在水草的方向、礦光的節奏和你少拿的那一瓣花裡。',
        options: [
          { text: '藍心聖窟危險嗎？', nextId: 'sanctum' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '把湖當倉庫的人會迷路，把湖當活物的人能回來。' },
    ],
    guardianHints: {
      creature: '尤娜能提示玻魚群、靜泉守靈與藍心礦靈的湖心徵兆。',
      treasure: '她說明湖息小瓶與藍心礦核代表的水脈狀態。',
      spirit: '她把藍寶湖從單純資源點連到水精靈傳說與採集節制。',
    },
  },

kingsroad_market_portal_guide: {
    id: 'kingsroad_market_portal_guide',
    name: '帕洛',
    alias: 'guide',
    title: '傳送陣廣場引路員',
    description:
      '一名引路員站在傳送陣廣場邊緣，手裡握著寫滿攤位方向的木牌。' +
      '他能在一片叫賣聲中精準聽出誰迷路、誰掉錢、誰正在找委託板。',
    roomId: 'kingsroad_market_portal_plaza',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '第一次來王道市集？先記住三個地方：委託板、錢幣所、商隊院。其他攤位會自己把你喊過去。',
        options: [
          { text: '我要找補給。', nextId: 'supplies' },
          { text: '我要找委託。', nextId: 'jobs' },
          { text: '我先看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'supplies',
        text: '藥材去草藥方場，吃食去穀物拱廊，旅貨去商隊院。要正式收據就先去錢幣兌換所換交易牌。',
        options: [
          { text: '我要找委託。', nextId: 'jobs' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'jobs',
        text: '冒險委託板在鍛匠列北面。別接沒有封蠟價目表的貨，那通常不是委託，是麻煩。',
        options: [
          { text: '我要找補給。', nextId: 'supplies' },
          { text: '我去看委託板。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '看好錢袋。市集很安全，但安全不代表沒人粗心。' },
    ],
    guardianHints: {
      creature: '王道市集是非戰鬥城鎮，帕洛提示玩家不要在此尋找野怪。',
      treasure: '他指向王道交易牌、封蠟價目表與商隊貨單的功能。',
      spirit: '他把市集的交易、委託與轉運功能串成新手可理解的入口。',
    },
  },

kingsroad_market_grain_monger: {
    id: 'kingsroad_market_grain_monger',
    name: '米羅',
    alias: 'grainmonger',
    title: '穀物拱廊糧商',
    description:
      '一名糧商坐在穀物拱廊的麻袋堆上，袖口沾著麥粉，腰間掛著小秤。' +
      '他把冒險者的胃口看得比金幣更準。',
    roomId: 'kingsroad_market_grain_arcade',
    type: 'merchant',
    shopItems: [
      'market_lunch_bundle',
      'small_hp_potion',
      'medium_hp_potion',
      'kingsroad_trade_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '遠路回來的人先吃飯，談價才不會把自己也賣便宜。',
        options: [
          { text: '我看看吃食。', nextId: 'shop' },
          { text: '糧價穩嗎？', nextId: 'prices' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '午食包、基礎藥水、交易牌。真正的大宗糧價要看封蠟價目表，不看嘴上喊價。',
        action: { type: 'shop', data: { shopType: 'kingsroad_grain' } },
        options: [
          { text: '糧價穩嗎？', nextId: 'prices' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'prices',
        text: '穩，但有人喜歡讓它看起來不穩。若你看到同一袋麥子換三次標價，就去文書角查。',
        options: [
          { text: '我看看吃食。', nextId: 'shop' },
          { text: '我會注意。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '帶一包路上吃，別等血量見底才想起午飯。' },
    ],
    guardianHints: {
      creature: '米羅強調此區為補給節點，不是戰鬥點。',
      treasure: '他販售王道午食包與王道交易牌。',
      spirit: '他讓市集的民生交易與價格調查有落點。',
    },
  },

kingsroad_market_spice_seller: {
    id: 'kingsroad_market_spice_seller',
    name: '莎芙',
    alias: 'spiceseller',
    title: '香料棚醒神香商',
    description:
      '一名香料商在彩布棚下整理小紙包，指尖沾著紅椒與乾橘皮香氣。' +
      '她說好香料不只調味，也能讓走夜路的人保持清醒。',
    roomId: 'kingsroad_market_spice_awning',
    type: 'merchant',
    shopItems: [
      'market_spice_pouch',
      'medium_mp_potion',
      'antidote',
      'kingsroad_trade_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '你看起來像剛從野外回來。買包醒神香，至少別在拍賣帳棚睡過叫價。',
        options: [
          { text: '我看看香料。', nextId: 'shop' },
          { text: '哪種貨最容易假？', nextId: 'fake' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '市集香料包、法力藥水、解毒劑、交易牌。香味太衝的別買，通常是在遮霉。',
        action: { type: 'shop', data: { shopType: 'kingsroad_spice' } },
        options: [
          { text: '哪種貨最容易假？', nextId: 'fake' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fake',
        text: '遠地香料、礦石粉、藥草乾貨。真貨不怕問來源，怕問來源的通常怕衛兵。',
        options: [
          { text: '我看看香料。', nextId: 'shop' },
          { text: '我懂了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '香料包別灑進水袋。上次有人這樣做，三天都睡不著。' },
    ],
    guardianHints: {
      creature: '莎芙讓市集維持非戰鬥交易氣氛。',
      treasure: '她販售市集香料包、解毒劑與交易牌。',
      spirit: '她補上市集假貨與來源追查的情報面。',
    },
  },

kingsroad_market_forge_broker: {
    id: 'kingsroad_market_forge_broker',
    name: '布朗特',
    alias: 'broker',
    title: '鍛匠列裝備仲介',
    description:
      '一名裝備仲介站在鍛匠列的鐵砧之間，手上拿著估價槌與一疊修補單。' +
      '他不親自打鐵，卻知道每把劍的主人是否付得起尾款。',
    roomId: 'kingsroad_market_blacksmith_row',
    type: 'merchant',
    shopItems: [
      'iron_sword',
      'iron_shield',
      'market_repair_chit',
      'kingsroad_trade_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買成品、修舊貨、問估價都可以。想靠一句傳說讓破劍翻十倍價，那去拍賣帳棚。',
        options: [
          { text: '我看看裝備。', nextId: 'shop' },
          { text: '估價要注意什麼？', nextId: 'value' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '基礎武器、盾、修補工具、交易牌。真正稀有品要有貨號券，不然別信。',
        action: { type: 'shop', data: { shopType: 'kingsroad_forge' } },
        options: [
          { text: '估價要注意什麼？', nextId: 'value' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'value',
        text: '看磨損、看銘文、看誰願意作保。沒有來源的好貨，通常會帶來比價格更高的問題。',
        options: [
          { text: '我看看裝備。', nextId: 'shop' },
          { text: '我會留證明。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '修補單收好，掉了就只能重新排隊。' },
    ],
    guardianHints: {
      creature: '布朗特提供城鎮裝備服務，不新增戰鬥。',
      treasure: '他讓王道交易牌與拍賣貨號券形成裝備交易證明鏈。',
      spirit: '他補上市集裝備買賣、估價與修補功能。',
    },
  },

kingsroad_market_board_clerk: {
    id: 'kingsroad_market_board_clerk',
    name: '妮莎',
    alias: 'clerk',
    title: '冒險委託板登記員',
    description:
      '一名登記員守在冒險委託板旁，用紅線把護送、採集、調查與討伐委託分開。' +
      '她寫字很快，拒絕無章委託的速度更快。',
    roomId: 'kingsroad_market_adventurer_board',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '接委託前先看章。沒有價目、沒有路線、沒有作保人，獎金再高都先當陷阱。',
        options: [
          { text: '今天有什麼委託？', nextId: 'jobs' },
          { text: '怎麼分辨假委託？', nextId: 'fake' },
          { text: '我先看板。', nextId: 'farewell' },
        ],
      },
      {
        id: 'jobs',
        text: '商隊缺護送，草藥方場缺採集，後巷帳本處缺查帳。你想賺快錢，先確認自己跑得比麻煩快。',
        options: [
          { text: '怎麼分辨假委託？', nextId: 'fake' },
          { text: '我去商隊院問。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fake',
        text: '假委託喜歡寫「事成重酬」。真委託會寫地點、期限、交付物與誰負責賠償。',
        options: [
          { text: '今天有什麼委託？', nextId: 'jobs' },
          { text: '我記下了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '不要把委託撕走。抄下編號就好，紙比你想的貴。' },
    ],
    guardianHints: {
      creature: '妮拉明確把市集任務導向非戰鬥與外部區域。',
      treasure: '她提示封蠟價目表、商隊貨單與拍賣貨號券的證明作用。',
      spirit: '她讓委託板成為市集任務與風險篩選中心。',
    },
  },

kingsroad_market_caravan_master: {
    id: 'kingsroad_market_caravan_master',
    name: '哈德溫',
    alias: 'caravan',
    title: '商隊院調度長',
    description:
      '一名調度長站在商隊院的車轍圖前，腰間掛著路線印章與馱獸鈴。' +
      '他說每條王道都能賺錢，只是有些路要先付醫藥費。',
    roomId: 'kingsroad_market_caravan_yard',
    type: 'merchant',
    shopItems: [
      'caravan_waybill',
      'return_scroll',
      'market_lunch_bundle',
      'kingsroad_trade_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要搭貨車、押貨、查路線，都先拿貨單。沒有貨單的貨，半路掉了也沒人承認。',
        options: [
          { text: '我看看路用貨。', nextId: 'shop' },
          { text: '哪條路最穩？', nextId: 'routes' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '商隊貨單、回城卷軸、午食包、交易牌。想押高價貨，先讓衛兵亭看過你的名字。',
        action: { type: 'shop', data: { shopType: 'kingsroad_caravan' } },
        options: [
          { text: '哪條路最穩？', nextId: 'routes' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '白天走湖畔，雨天避山口，夜裡別走沒有路神燈的岔道。最快的路通常只對盜匪最快。',
        options: [
          { text: '我看看路用貨。', nextId: 'shop' },
          { text: '我會看路神燈。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '貨單別折到印章。折壞了，文書角會讓你重新排隊。' },
    ],
    guardianHints: {
      creature: '哈德溫把戰鬥風險導向市集外的護送路線。',
      treasure: '他販售商隊貨單、回城卷軸與路用補給。',
      spirit: '他讓王道市集成為跨區轉運與護送任務中心。',
    },
  },

kingsroad_market_coin_factor: {
    id: 'kingsroad_market_coin_factor',
    name: '維克',
    alias: 'factor',
    title: '錢幣兌換所帳房',
    description:
      '一名帳房坐在厚玻璃後方，桌上分著王國幣、外地銀片與冒險者帶回的奇怪代幣。' +
      '他每數十枚就敲一下銅鐘，像在替市集量脈。',
    roomId: 'kingsroad_market_coin_exchange',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '換錢可以，作保也可以。想把沾血的寶石當乾淨貨賣，請先去衛兵亭。',
        options: [
          { text: '交易牌怎麼用？', nextId: 'token' },
          { text: '假幣多嗎？', nextId: 'fake' },
          { text: '我先排隊。', nextId: 'farewell' },
        ],
      },
      {
        id: 'token',
        text: '王道交易牌不是貨幣，是紀錄。它證明你在市集內買賣過，出了糾紛才有人能查。',
        options: [
          { text: '假幣多嗎？', nextId: 'fake' },
          { text: '我懂了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fake',
        text: '假幣不多，假故事比較多。每個人都說自己剛從古王墓回來，結果連泥都沒乾。',
        options: [
          { text: '交易牌怎麼用？', nextId: 'token' },
          { text: '我去文書角查。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '下一位。錢會等人，隊伍不會。' },
    ],
    guardianHints: {
      creature: '維克補足城鎮經濟功能，不涉及戰鬥。',
      treasure: '他說明王道交易牌與封蠟價目表的交易證明作用。',
      spirit: '他讓市集的貨幣、作保與糾紛查核更可信。',
    },
  },

kingsroad_market_herb_mistress: {
    id: 'kingsroad_market_herb_mistress',
    name: '苔莎',
    alias: 'herbalist',
    title: '草藥方場調藥師',
    description:
      '一名調藥師在草藥方場中央碾碎乾葉，旁邊排著標有產地的小瓶。' +
      '她能聞出一束草藥走過哪條路，也能聞出它是不是昨天才被改過標籤。',
    roomId: 'kingsroad_market_herbal_square',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'market_spice_pouch',
      'market_lunch_bundle',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '藥水要新鮮，乾草要看產地。標籤寫得越漂亮，越要聞一下底味。',
        options: [
          { text: '我看看藥。', nextId: 'shop' },
          { text: '假藥怎麼看？', nextId: 'fake' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '中型藥水、法力藥水、解毒劑、醒神香、午食包。真正稀有草藥要看封蠟來源。',
        action: { type: 'shop', data: { shopType: 'kingsroad_herbs' } },
        options: [
          { text: '假藥怎麼看？', nextId: 'fake' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fake',
        text: '假藥最怕水。滴一滴井水，顏色散得太快就是染的；味道甜得像糖，就是想遮腐。',
        options: [
          { text: '我看看藥。', nextId: 'shop' },
          { text: '我會試水。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '解毒劑買了就帶身上，不要放在倉庫裡當擺設。' },
    ],
    guardianHints: {
      creature: '苔莎維持草藥補給節點，不新增本區怪物。',
      treasure: '她販售藥水、解毒劑、市集香料包與午食包。',
      spirit: '她補上市集常態補給與假藥辨識功能。',
    },
  },

kingsroad_market_auctioneer: {
    id: 'kingsroad_market_auctioneer',
    name: '葛蕾塔',
    alias: 'auctioneer',
    title: '拍賣帳棚估價師',
    description:
      '一名估價師站在拍賣帳棚的木台上，手持小槌，聲音能壓過整條攤街。' +
      '她看一眼包裝，就知道賣家想隱瞞的是產地、裂痕還是詛咒。',
    roomId: 'kingsroad_market_auction_tent',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '拍賣不是喊得最大聲的人贏，是最清楚自己買了什麼的人活得久。',
        options: [
          { text: '貨號券怎麼用？', nextId: 'ticket' },
          { text: '哪些貨不能碰？', nextId: 'danger' },
          { text: '我先看拍賣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ticket',
        text: '拍賣貨號券能查寄售人、估價與交割窗口。沒有券的貨，離開帳棚就不歸我們管。',
        options: [
          { text: '哪些貨不能碰？', nextId: 'danger' },
          { text: '我會收好券。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '會自己發熱的盒子、沒有影子的寶石、賣家急著離城的任何東西。便宜不是理由，是警告。',
        options: [
          { text: '貨號券怎麼用？', nextId: 'ticket' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '聽到第三槌才算成交，第二槌就掏錢的人最容易被騙。' },
    ],
    guardianHints: {
      creature: '葛蕾塔把高價貨風險留在交易層，不轉為本區戰鬥。',
      treasure: '她說明拍賣貨號券與交易牌如何保護高價交易。',
      spirit: '她讓拍賣帳棚具備估價、交割與風險辨識功能。',
    },
  },

kingsroad_market_guard_sergeant: {
    id: 'kingsroad_market_guard_sergeant',
    name: '羅德',
    alias: 'sergeant',
    title: '衛兵亭市集巡長',
    description:
      '一名巡長靠在衛兵亭前，盔甲擦得不亮，卻沒有一處妨礙握緊武器。' +
      '他的目光總在錢袋、攤棚後門和忽然安靜的人群之間移動。',
    roomId: 'kingsroad_market_guard_post',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '市集不禁討價還價，禁偷、禁詐、禁把詛咒貨物賣給不識字的人。',
        options: [
          { text: '最近有麻煩嗎？', nextId: 'trouble' },
          { text: '我要報可疑貨。', nextId: 'report' },
          { text: '我只是路過。', nextId: 'farewell' },
        ],
      },
      {
        id: 'trouble',
        text: '後巷帳本處有幾筆貨單對不上，拍賣帳棚也收到過假貨號券。看見封蠟破了就別接手。',
        options: [
          { text: '我要報可疑貨。', nextId: 'report' },
          { text: '我去查帳本。', nextId: 'farewell' },
        ],
      },
      {
        id: 'report',
        text: '帶貨號券、價目表或商隊貨單來。沒有證物，我只能盯人；有證物，我能抓人。',
        options: [
          { text: '最近有麻煩嗎？', nextId: 'trouble' },
          { text: '我會帶證物。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '市集很大，但出口就那幾個。別替壞人省時間。' },
    ],
    guardianHints: {
      creature: '羅文處理治安與可疑交易，不讓城鎮本身變成戰鬥區。',
      treasure: '他要求拍賣貨號券、封蠟價目表與商隊貨單作為證物。',
      spirit: '他補上市集治安與交易糾紛的官方節點。',
    },
  },

kingsroad_market_scribe_notary: {
    id: 'kingsroad_market_scribe_notary',
    name: '伊芙琳',
    alias: 'notary',
    title: '文書角封蠟書記',
    description:
      '一名書記坐在文書角的長桌後，手邊堆著價目表、貨單副本與紅蠟章。' +
      '她說市集真正流通的不是金幣，是能被查回來的紀錄。',
    roomId: 'kingsroad_market_scribe_corner',
    type: 'merchant',
    shopItems: [
      'sealed_price_list',
      'auction_lot_ticket',
      'caravan_waybill',
      'kingsroad_trade_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要副本、封蠟、貨號查詢或價目表？請排成一列，別把墨水滴在證物上。',
        options: [
          { text: '我看看文書。', nextId: 'shop' },
          { text: '封蠟有什麼用？', nextId: 'seal' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '封蠟價目表、拍賣貨號券、商隊貨單、王道交易牌。買了就保管好，補副本很貴。',
        action: { type: 'shop', data: { shopType: 'kingsroad_scribe' } },
        options: [
          { text: '封蠟有什麼用？', nextId: 'seal' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seal',
        text: '封蠟不是裝飾，是責任。誰蓋章、誰收貨、誰估價，章都記得比人清楚。',
        options: [
          { text: '我看看文書。', nextId: 'shop' },
          { text: '我會收好。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '不要折證物。折痕有時比謊話更難處理。' },
    ],
    guardianHints: {
      creature: '伊芙琳將市集衝突落在文書證據，不新增怪物。',
      treasure: '她販售封蠟價目表、拍賣貨號券、商隊貨單與交易牌。',
      spirit: '她讓王道市集的所有交易道具形成可查核的閉環。',
    },
  },

arena_quarter_gate_steward: {
    id: 'arena_quarter_gate_steward',
    name: '卡登',
    alias: 'steward',
    title: '競技城門入場管事',
    description:
      '一名入場管事守在競技城門下，腰間掛著一串銅牌和紅繩。' +
      '他看人時先看手上的繭，再看眼神，最後才看錢袋。',
    roomId: 'arena_quarter_grand_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '入場看牌，參賽看封印，下注看憑條。競技城區歡迎熱血，不歡迎糊塗。',
        options: [
          { text: '我要參賽。', nextId: 'fight' },
          { text: '我要看比賽。', nextId: 'watch' },
          { text: '我先逛逛。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fight',
        text: '先去武器檢查，再去熱身沙地。沒有裁判封印的武器，贏了也不算。',
        options: [
          { text: '我要看比賽。', nextId: 'watch' },
          { text: '我去檢查武器。', nextId: 'farewell' },
        ],
      },
      {
        id: 'watch',
        text: '票券柱廊買座，下注所押注，別在私人包廂跟陌生人借錢。',
        options: [
          { text: '我要參賽。', nextId: 'fight' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '站上沙地前先想好退路。觀眾只記得勝者，醫師才記得其他人。' },
    ],
    guardianHints: {
      creature: '卡登提示競技區的安全參賽流程與中央冠軍試煉。',
      treasure: '他說明競技入場牌、裁判封印與下注憑條。',
      spirit: '他把競技城區從市集入口導入正式競技規則。',
    },
  },

arena_quarter_bookmaker: {
    id: 'arena_quarter_bookmaker',
    name: '斐洛',
    alias: 'bookmaker',
    title: '下注所盤口師',
    description:
      '一名盤口師坐在下注所高桌後，指尖轉著小銅片，眼睛不停掃過賠率板。' +
      '他能從觀眾倒吸氣的聲音判斷下一場誰被高估。',
    roomId: 'arena_quarter_betting_house',
    type: 'merchant',
    shopItems: [
      'betting_house_slip',
      'arena_entry_token',
      'market_spice_pouch',
      'practice_wrap',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '下注不是猜誰會贏，是猜大家錯在哪裡。要憑條嗎？沒有憑條就只是故事。',
        options: [
          { text: '我看看票券。', nextId: 'shop' },
          { text: '今天誰熱門？', nextId: 'odds' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '下注憑條、入場牌、醒神香、練習護帶。別把治療費也押下去，這是建議不是規則。',
        action: { type: 'shop', data: { shopType: 'arena_bookmaker' } },
        options: [
          { text: '今天誰熱門？', nextId: 'odds' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'odds',
        text: '老練角鬥士穩，面具挑戰者亂，中央冠軍從不便宜。越熱的盤，越要看誰在推。',
        options: [
          { text: '我看看票券。', nextId: 'shop' },
          { text: '我會看賠率。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '憑條別沾酒。字糊了，輸贏都算你倒楣。' },
    ],
    guardianHints: {
      creature: '斐洛提示老練角鬥士、面具挑戰者與中央競技冠軍的風險。',
      treasure: '他販售下注憑條、入場牌與練習護帶。',
      spirit: '他把下注所變成競技情報與風險管理節點。',
    },
  },

arena_quarter_arms_referee: {
    id: 'arena_quarter_arms_referee',
    name: '格蘭特',
    alias: 'referee',
    title: '武器檢查處裁判',
    description:
      '一名裁判站在武器檢查處，桌上放著紅蠟、量尺和一排被沒收的暗器。' +
      '他講話不大聲，但每個參賽者都聽得很清楚。',
    roomId: 'arena_quarter_weapon_check',
    type: 'merchant',
    shopItems: [
      'referee_seal',
      'practice_wrap',
      'arena_entry_token',
      'market_repair_chit',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '武器上桌，藥瓶開蓋，護符翻面。規則不是為了保護弱者，是為了讓勝負有意義。',
        options: [
          { text: '我看看用品。', nextId: 'shop' },
          { text: '哪些東西禁用？', nextId: 'rules' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '裁判封印、練習護帶、入場牌、修補單。封印破了就重驗，別跟我說只是擦傷。',
        action: { type: 'shop', data: { shopType: 'arena_referee' } },
        options: [
          { text: '哪些東西禁用？', nextId: 'rules' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rules',
        text: '毒刃、詛咒飾品、會替你喊投降的護符都禁。你可以危險，但不能作弊。',
        options: [
          { text: '我看看用品。', nextId: 'shop' },
          { text: '我會遵守。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '封印貼好再進場。輸給規則比輸給對手更難看。' },
    ],
    guardianHints: {
      creature: '葛倫連接鋼刃決鬥者、破盾重衛與正式試煉規則。',
      treasure: '他販售裁判封印、練習護帶與入場牌。',
      spirit: '他讓競技戰鬥從亂鬥變成受控比賽。',
    },
  },

arena_quarter_healer: {
    id: 'arena_quarter_healer',
    name: '瑪琳',
    alias: 'healer',
    title: '治療長椅醫師',
    description:
      '一名醫師在治療長椅旁整理繃帶，手臂上有許多被牙齒與刀背留下的舊疤。' +
      '她對勝負沒興趣，只記得誰不聽醫囑又倒回來。',
    roomId: 'arena_quarter_healer_bench',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'practice_wrap',
      'antidote',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '坐下，伸手。還能吵代表沒死，還想再打代表腦袋可能也要檢查。',
        options: [
          { text: '我看看醫療品。', nextId: 'shop' },
          { text: '下一場能打嗎？', nextId: 'advice' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '中型藥水、法力藥水、練習護帶、解毒劑。你可以不買，但別用觀眾掌聲止血。',
        action: { type: 'shop', data: { shopType: 'arena_healer' } },
        options: [
          { text: '下一場能打嗎？', nextId: 'advice' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advice',
        text: '能站不等於能打。若你看見兩個裁判，先休息；若你看見三個，已經太晚。',
        options: [
          { text: '我看看醫療品。', nextId: 'shop' },
          { text: '我會休息。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繃帶換下來別丟沙地上。鬥獸會吃。' },
    ],
    guardianHints: {
      creature: '瑪琳提示鬥獸與中階訓練場次的醫療壓力。',
      treasure: '她販售練習護帶與常規藥品。',
      spirit: '她讓競技城區有合理的回復與安全節點。',
    },
  },

arena_quarter_strategy_coach: {
    id: 'arena_quarter_strategy_coach',
    name: '歐司特',
    alias: 'coach',
    title: '戰術桌退役教練',
    description:
      '一名退役教練坐在戰術桌旁，用小木牌推演走位。' +
      '他的左腿不太靈活，但指出破綻時比多數劍客出劍還快。',
    roomId: 'arena_quarter_strategy_tables',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別問怎麼打贏，先問自己為什麼會挨第一下。答案通常在腳，不在武器。',
        options: [
          { text: '怎麼打精英場？', nextId: 'elite' },
          { text: '冠軍怎麼打？', nextId: 'champion' },
          { text: '我先練走位。', nextId: 'farewell' },
        ],
      },
      {
        id: 'elite',
        text: '老練角鬥士怕你不貪，面具挑戰者怕你不慌。精英場先穩節奏，再找破綻。',
        options: [
          { text: '冠軍怎麼打？', nextId: 'champion' },
          { text: '我會穩住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'champion',
        text: '中央冠軍的強處不是攻擊，是逼你在觀眾聲裡做錯決定。看到反擊架勢就收手。',
        options: [
          { text: '怎麼打精英場？', nextId: 'elite' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '會後退的人才有下一次進攻。' },
    ],
    guardianHints: {
      creature: '歐司特提供老練角鬥士、面具挑戰者與中央競技冠軍的戰術提示。',
      treasure: '他說明冠軍肩帶代表正式試煉通過。',
      spirit: '他把競技區戰鬥轉成可學習、可預期的試煉鏈。',
    },
  },

arena_quarter_prize_keeper: {
    id: 'arena_quarter_prize_keeper',
    name: '莉塔',
    alias: 'prizekeeper',
    title: '獎品櫃台保管員',
    description:
      '一名保管員站在獎品櫃台後，身後掛著肩帶、徽章和被退回的破損獎盃。' +
      '她對冒牌冠軍的耐心，比對遲到選手還少。',
    roomId: 'arena_quarter_prize_counter',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '要領獎先拿戰績和封印。只拿故事來的人，我可以給你掌聲，不給獎品。',
        options: [
          { text: '冠軍肩帶怎麼拿？', nextId: 'sash' },
          { text: '獎品能換嗎？', nextId: 'prize' },
          { text: '我先準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sash',
        text: '中央競技場冠軍試煉。打贏、封印完整、裁判承認，三個都要有。',
        options: [
          { text: '獎品能換嗎？', nextId: 'prize' },
          { text: '我去中央場。', nextId: 'farewell' },
        ],
      },
      {
        id: 'prize',
        text: '正式獎品不能折現。下注所讓你賺錢，獎品櫃台讓你留下名字。',
        options: [
          { text: '冠軍肩帶怎麼拿？', nextId: 'sash' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把別人的肩帶披上來。縫線會出賣你。' },
    ],
    guardianHints: {
      creature: '莉塔把中央競技冠軍與獎勵領取條件連接起來。',
      treasure: '她說明冠軍肩帶、裁判封印與入場牌的結算關係。',
      spirit: '她讓競技試煉有明確榮譽回收點。',
    },
  },

royal_hunting_grounds_permit_warden: {
    id: 'royal_hunting_grounds_permit_warden',
    name: '艾德里安',
    alias: 'warden',
    title: '許可獵屋王室獵監',
    description:
      '一名王室獵監站在許可獵屋門口，手套上沾著蠟封與獵犬毛。' +
      '他用同樣嚴厲的眼神看貴族、傭兵和聲稱只是路過的人。',
    roomId: 'royal_hunting_grounds_permit_lodge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進獵場先看許可章。沒有許可的人說自己是獵人，有許可的人才需要證明自己不是盜獵者。',
        options: [
          { text: '我要合法狩獵。', nextId: 'permit' },
          { text: '白鹿是什麼？', nextId: 'stag' },
          { text: '我會守規矩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'permit',
        text: '沿鹿徑、避幼獸、戰利品要登記。獵豬牙和銀角尖能交差，白鹿誓印不能拿來炫耀。',
        options: [
          { text: '白鹿是什麼？', nextId: 'stag' },
          { text: '我去鹿徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'stag',
        text: '白鹿不是獵物。若牠出現，代表獵場在審問你，而不是邀請你拉弓。',
        options: [
          { text: '我要合法狩獵。', nextId: 'permit' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把許可章借人。獵犬記的是味道，不是簽名。' },
    ],
    guardianHints: {
      creature: '艾德溫提示王獵犬群、銀徑角鹿、棘林失控獵監與白鹿守誓靈。',
      treasure: '他說明王獵許可章、銀角鹿尖與白鹿誓印。',
      spirit: '他把王家獵場的合法狩獵與誓約邊界建立起來。',
    },
  },

royal_hunting_grounds_gamekeeper_supplier: {
    id: 'royal_hunting_grounds_gamekeeper_supplier',
    name: '瑪塔',
    alias: 'supplier',
    title: '看守營獵場補給官',
    description:
      '一名補給官在看守營裡整理弓繩、傷藥和獵犬鈴。' +
      '她的木箱上刻著許多牙痕，顯然不是每次補給都順利送到。',
    roomId: 'royal_hunting_grounds_gamekeeper_camp',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'gamekeeper_salve',
      'boar_trophy_tusk',
      'falconry_jess',
      'royal_hunt_permit',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要藥、要足繩、要補許可？快說。獵犬院那邊的鈴聲一亂，我就得關箱。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '盜獵者在哪？', nextId: 'poachers' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '中型藥水、獵監傷藥、獵豬戰牙、獵隼足繩、許可章。銀角尖不賣，那得自己合法取得。',
        action: { type: 'shop', data: { shopType: 'royal_hunting_supply' } },
        options: [
          { text: '盜獵者在哪？', nextId: 'poachers' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poachers',
        text: '隱蔽盜獵小徑、貴族獵棚後方、獅鷲崖下都可能有痕跡。看見剪斷的足繩就通知獵監。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '傷藥塗薄一點。塗厚了，獵犬會以為你是點心。' },
    ],
    guardianHints: {
      creature: '瑪塔提示綠林盜獵者、王冠獵隼群、泥牙鬥豬與獅鷲崖母獸。',
      treasure: '她販售獵監傷藥、獵豬戰牙、獵隼足繩與許可章。',
      spirit: '她讓獵場補給與盜獵調查形成可回訪節點。',
    },
  },

royal_hunting_grounds_noble_patron: {
    id: 'royal_hunting_grounds_noble_patron',
    name: '羅莎琳',
    alias: 'patron',
    title: '貴族獵棚委託人',
    description:
      '一名貴族委託人坐在獵棚陰影裡，手邊放著未開封的獵弓和一疊委託書。' +
      '她比多數獵人更懂獵場規矩，也更懂哪些規矩會被人用金幣扭曲。',
    roomId: 'royal_hunting_grounds_noble_blind',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '我委託的是證物，不是屠戮。帶回銀角鹿尖可以，帶回一片沉默的森林不行。',
        options: [
          { text: '你要什麼證物？', nextId: 'proof' },
          { text: '誰在盜獵？', nextId: 'poachers' },
          { text: '我會節制。', nextId: 'farewell' },
        ],
      },
      {
        id: 'proof',
        text: '銀角尖、足繩、合法牙飾都能說明問題。白鹿誓印若出現，代表我們所有人都越界了。',
        options: [
          { text: '誰在盜獵？', nextId: 'poachers' },
          { text: '我去銀徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poachers',
        text: '有人用貴族名義買假許可，也有人讓獵監背黑鍋。你找證據，不要只找替罪羊。',
        options: [
          { text: '你要什麼證物？', nextId: 'proof' },
          { text: '我會查清楚。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '真正的獵人知道何時收弓。' },
    ],
    guardianHints: {
      creature: '羅莎琳提示銀徑角鹿、盜獵者、失控獵監與白鹿守誓靈的劇情關係。',
      treasure: '她說明銀角鹿尖、獵隼足繩與白鹿誓印作為證物的用途。',
      spirit: '她讓貴族委託從單純狩獵變成調查獵場濫權與盜獵。',
    },
  },

royal_hunting_grounds_stag_listener: {
    id: 'royal_hunting_grounds_stag_listener',
    name: '伊文',
    alias: 'listener',
    title: '白鹿林誓約聽者',
    description:
      '一名沉默的聽者跪坐在白鹿林邊，身旁插著沒有箭頭的木箭。' +
      '他說自己不是來狩獵，而是來聽獵場還願不願意原諒王室。',
    roomId: 'royal_hunting_grounds_white_stag_grove',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '白鹿不怕箭。牠怕人忘了自己為什麼拉弓。',
        options: [
          { text: '白鹿會攻擊嗎？', nextId: 'avatar' },
          { text: '誓印要怎麼處理？', nextId: 'mark' },
          { text: '我會放低武器。', nextId: 'farewell' },
        ],
      },
      {
        id: 'avatar',
        text: '牠會阻止貪婪，不會追殺敬畏。若牠張開反射光幕，就先停止攻擊。',
        options: [
          { text: '誓印要怎麼處理？', nextId: 'mark' },
          { text: '我會觀察。', nextId: 'farewell' },
        ],
      },
      {
        id: 'mark',
        text: '帶回許可獵屋。誓印不是戰利品，是獵場給王室的警告。',
        options: [
          { text: '白鹿會攻擊嗎？', nextId: 'avatar' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '如果林間突然安靜，別先找獵物，先找自己的影子。' },
    ],
    guardianHints: {
      creature: '伊文提示白鹿守誓靈、老橡守林衛與獅鷲崖母獸的高階風險。',
      treasure: '他說明白鹿誓印不是普通掉落，而是獵場警告。',
      spirit: '他把王家獵場收束到節制、誓約與王室責任。',
    },
  },
};
