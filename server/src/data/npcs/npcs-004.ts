import type { NpcDef } from '@game/shared';

export const NPCS_PART_004: Record<string, NpcDef> = {
rift_forge_scavenger: {
    id: 'rift_forge_scavenger',
    name: '裂隙熔爐拾荒者',
    alias: 'riftforger',
    title: '在不可能火焰旁交易的人',
    description: '一個穿著多層隔熱斗篷的拾荒者，臉上覆著被虛空燒裂的銀面具。他用長鉗從裂隙熔爐邊撿出未成形金屬，攤位則綁在一塊漂浮砧台上。',
    roomId: 'rift_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion', 'large_mp_potion', 'return_scroll',
      'abyssal_stabilizer', 'void_shard', 'rift_metal_blank',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '別碰紫火，除非你想被燒成另一種可能性。要補給、穩定劑、虛空碎片，還是裂界金屬胚？快選，砧台下一次移位快到了。',
        options: [
          { text: '看看貨。', nextId: 'shop' },
          { text: '裂界金屬胚是什麼？', nextId: 'blank' },
          { text: '這座熔爐誰在用？', nextId: 'forge' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '裂隙穩定劑能讓你在引力井旁多活一會；裂界金屬胚還沒被深淵完成，拿走它就是少一把割開空間的武器。',
        action: { type: 'shop', data: { shopType: 'rift_forge' } },
        options: [
          { text: '交易完成。', nextId: 'farewell' },
        ],
      },
      {
        id: 'blank',
        text: '它不是普通金屬，是被熔爐逼著在多種物質形態間閃爍的碎片。若交給穩定者，也許能做封印釘；若落到深淵手裡，就會變成裂界刃。',
        options: [
          { text: '誰在供料？', nextId: 'forge' },
        ],
      },
      {
        id: 'forge',
        text: '深淵核心掉碎片，倒重巨口吞碎片，熔爐再把碎片吐成武器。你要阻止這條鏈，先處理引力井和信標。',
        options: [
          { text: '我會去看。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離開前確認影子還貼在腳下。若影子先走，你就別跟上。' },
    ],
    guardianHints: {
      creature: '拾荒者面具會在倒重巨口靠近時反射出井心黑光。',
      treasure: '他的漂浮砧台下方藏著半張裂隙熔爐供料清單。',
      spirit: '他做買賣不是因為勇敢，而是因為裂隙裡的材料離開一件，深淵就少一件武器。',
    },
  },

echo_court_witness: {
    id: 'echo_court_witness',
    name: '迴響庭證人',
    alias: 'witness',
    title: '被聲音留下的人',
    description: '一個半透明的人影坐在迴響庭審判台旁，身形會隨每一道回聲短暫分裂。她的胸口沒有傷口，只有一枚不停震動的聲晶。',
    roomId: 'echo_court',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '我不是活人，也還不是死者。我是被深淵漏掉的一句證詞。若你聽得懂迴響，就能找到上一支隊伍最後看見的信標。',
        options: [
          { text: '上一支隊伍發現了什麼？', nextId: 'last_route' },
          { text: '信標要怎麼處理？', nextId: 'beacon' },
          { text: '你需要什麼？', nextId: 'request' },
          { text: '我會聽回聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'last_route',
        text: '他們從記憶迷宮進來，帶著時間碎片，最後被信標眼獵者標記。回聲橋打開後，他們只留下三個字：別抬頭。',
        options: [
          { text: '信標眼獵者？', nextId: 'beacon' },
        ],
      },
      {
        id: 'beacon',
        text: '信標外層有眼狀符文。先打碎外圈，取下信標眼核，再處理核心。若直接碰光柱，混沌之子會沿座標裂縫反覆湧來。',
        options: [
          { text: '我會先破外圈。', nextId: 'farewell' },
        ],
      },
      {
        id: 'request',
        text: '若你找到鏡湖記憶片或信標眼核，帶回這裡。聲音需要證物，否則我說出的真相會被深淵改寫。',
        options: [
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '在迴響庭裡，沉默也是路標。太吵時，虛空行者會先找到你。' },
    ],
    guardianHints: {
      creature: '證人無法離開迴響庭，但她會在虛空行者追逐最大聲回音前先摀住耳朵。',
      treasure: '她胸口的聲晶封存著被抹去隊伍的最後路線。',
      spirit: '她代表深淵無法完全吞掉的證詞，讓失敗者仍能指引後來者。',
    },
  },

// ─── 天界遺跡 NPC ──────────────────────────────────────

  celestial_gate_pilgrim: {
    id: 'celestial_gate_pilgrim',
    name: '天門朝聖者',
    alias: 'pilgrim',
    title: '被光門留下的凡人',
    description: '一名跪坐在天界之門旁的老朝聖者，白髮間落滿星塵。他的袍角被深淵黑痕燒穿，手裡卻仍握著一枚溫熱的天界碎片。',
    roomId: 'celestial_gate',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '不要把這裡當成勝利後的獎賞。天界之門打開，是因為深淵把它撕傷了。你進來後看到的每一道光，都可能是在求救。',
        options: [
          { text: '我該先看哪裡？', nextId: 'routes' },
          { text: '天界守衛會攻擊我嗎？', nextId: 'guards' },
          { text: '需要收集什麼？', nextId: 'materials' },
          { text: '我會謹慎。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '西側墜星廣場能看出深淵攻城路線，北方星光走廊通向審判與花園。別急著碰王座；先理解天界為何失序。',
        options: [
          { text: '守衛呢？', nextId: 'guards' },
        ],
      },
      {
        id: 'guards',
        text: '守衛不是邪惡，牠們只是命令還活著。若你帶著深淵污染靠近，牠們會把你當成入侵的一部分。',
        options: [
          { text: '材料要怎麼分辨？', nextId: 'materials' },
        ],
      },
      {
        id: 'materials',
        text: '天界碎片、墜星廣場碎片、誓約緞帶與流明記憶晶都能幫你讀懂這裡。破碎光環和最終封印裂片則別亂賣，那是決定結局的東西。',
        options: [
          { text: '我會保存。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '光不會保證安全。真正安全的是知道哪一道光正在審判你。' },
    ],
    guardianHints: {
      creature: '朝聖者會在墮天使靠近時低聲背誦舊誓約。',
      treasure: '他的天界碎片能與光門文字共鳴，顯示墜星廣場的防線破口。',
      spirit: '他不是天界居民，只是第一個明白光門是傷口而非凱旋門的人。',
    },
  },

celestial_reliquary_curator: {
    id: 'celestial_reliquary_curator',
    name: '聖物庫管理靈',
    alias: 'curator',
    title: '仍在點名空龕的守靈',
    description: '一道由金白光塵組成的管理靈漂浮在聖物庫祭台前，手中名冊有許多頁被燒成黑邊。每當她念到空龕名字，玻璃龕內便會響起細小回音。',
    roomId: 'celestial_reliquary',
    type: 'merchant',
    shopItems: [
      'large_hp_potion', 'large_mp_potion', 'return_scroll',
      'sanctum_light_broth', 'celestial_fragment', 'starfall_plaza_shard',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '入庫者，請報明目的。若為淨化污染，祭台尚可運作；若為掠奪聖物，玻璃龕會記住你的名字。',
        options: [
          { text: '看看補給。', nextId: 'shop' },
          { text: '哪些聖物遺失了？', nextId: 'missing' },
          { text: '怎麼淨化污染？', nextId: 'purify' },
          { text: '先離開。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '聖所光湯能穩住深淵污染造成的眩暈，天界碎片與墜星碎片可用於修補小型結界。真正的聖物不出售，只能被歸還或被託付。',
        action: { type: 'shop', data: { shopType: 'celestial_reliquary' } },
        options: [
          { text: '交易完成。', nextId: 'farewell' },
        ],
      },
      {
        id: 'missing',
        text: '破碎光環、黎明武庫核心、誓約緞帶、流明記憶晶。它們分屬聖所、武庫、泉池與檔案庫，缺一處，最終封印就少一個條件。',
        options: [
          { text: '淨化條件呢？', nextId: 'purify' },
        ],
      },
      {
        id: 'purify',
        text: '把破碎光環聖物放到祭台上，再用誓約緞帶確認意圖。若你只是想拿力量，祭台只會給你冷光。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離庫前請確認你帶走的是補給，不是未被允許的遺物。' },
    ],
    guardianHints: {
      creature: '管理靈本身不攻擊，但她念出失竊聖物名時會喚醒附近神造兵器。',
      treasure: '名冊最後一頁記錄戰神之槍空架的封存條件。',
      spirit: '她代表天界仍試圖用秩序面對毀滅，即使庫房已經空了一半。',
    },
  },

celestial_judgment_advocate: {
    id: 'celestial_judgment_advocate',
    name: '審判辯護者',
    alias: 'advocate',
    title: '站在偏斜天秤旁的聲音',
    description: '一位披著半透明法袍的天界辯護者站在審判大廳側席，手中的光卷同時寫著赦免與裁決。她的右肩被深淵黑斑侵蝕，卻仍堅持記錄每一次選擇。',
    roomId: 'judgment_hall',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '天秤已經偏了。若你只用武力通過，它會把你的勝利也記成罪證。先查明污染，再談裁決。',
        options: [
          { text: '污染從哪裡來？', nextId: 'pollution' },
          { text: '我需要提交什麼？', nextId: 'evidence' },
          { text: '黑環審判者是什麼？', nextId: 'judge' },
          { text: '我會留意天秤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pollution',
        text: '深淵不是把黑暗倒進大廳，而是改寫法則註解。流明記憶晶能找回原文，破碎光環聖物能把黑斑逼出天秤。',
        options: [
          { text: '證物呢？', nextId: 'evidence' },
        ],
      },
      {
        id: 'evidence',
        text: '帶來流明記憶晶、誓約緞帶與破碎光環聖物。三者分別證明事實、意圖與淨化資格。',
        options: [
          { text: '黑環審判者呢？', nextId: 'judge' },
        ],
      },
      {
        id: 'judge',
        text: '那是錯誤法則凝成的裁決者。牠不是墮落天使，也不是守衛；牠是天界相信自己永遠正確時留下的傷口。',
        options: [
          { text: '我會處理。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '記住，審判不是要你無罪，而是要你承認選擇的重量。' },
    ],
    guardianHints: {
      creature: '辯護者能看見黑環審判者出現前的法則裂縫。',
      treasure: '她的光卷背面記錄通往懺悔階空白石板的正確誓句。',
      spirit: '她讓天界遺跡保留救贖，而不是只剩機械化懲罰。',
    },
  },

// ─── 湖畔城鎮擴充 NPC ──────────────────────────────────

  innkeeper: {
    id: 'innkeeper',
    name: '旅館老闆',
    alias: 'innkeeper',
    title: '醉龍亭東家',
    description: '一位胖胖圓圓的旅館老闆，笑容可掬的臉龐總是紅光滿面，彷彿自己也沒少喝幾杯。他穿著一件繡著小龍圖案的圍裙，肥碩的手指上戴著好幾枚金戒指。走起路來一搖一擺，但招呼客人的聲音卻洪亮而熱情，讓每位踏進門的旅人都感到賓至如歸。',
    roomId: 'tavern',
    type: 'merchant',
    shopItems: [
      'grilled_meat', 'stew', 'adventure_bento',
      'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'lakeview_room_voucher',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到醉龍亭！我是這裡的老闆。想吃點東西恢復體力？' +
          '還是想要住一晚好好休息？冒險者可不能拖著疲憊的身體上路。',
        options: [
          { text: '我想買些食物和藥水。', nextId: 'shop' },
          { text: '有什麼好吃的推薦嗎？', nextId: 'recommend' },
          { text: '最近有什麼消息嗎？', nextId: 'news' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '烤肉、燉湯、冒險者便當——要填飽肚子的話都是好選擇。' +
          '藥水也有備，紅的回血、藍的回魔。想住一晚的話，湖景房券也能在櫃檯直接買。',
        action: { type: 'shop', data: { shopType: 'inn' } },
        options: [
          { text: '謝謝老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '今天的招牌是「龍火燉肉」——用火山地帶運來的香料慢燉了一整天，' +
          '吃一口渾身暖洋洋的。冒險者便當也不錯，方便攜帶，在路上隨時可以吃。',
        options: [
          { text: '聽起來不錯，買一些。', nextId: 'shop' },
          { text: '下次再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'news',
        text: '最近來了不少從各地趕來的冒險者，說是各個區域都有異常——' +
          '火山活動加劇、暗影森林的暗影擴散、冰封雪原的雪狼南移。' +
          '有老冒險者說這些現象和千年前的暗影浩劫之前很像……但願只是巧合。',
        options: [
          { text: '聽起來不妙。先補給一下。', nextId: 'shop' },
          { text: '謝謝情報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '路上小心！累了就回來歇歇，醉龍亭的大門永遠為冒險者敞開。',
      },
    ],
    guardianHints: {
      creature: '旅館的地窖裡養著一隻巨大的酒桶精——據說是醉龍亭初代老闆用魔法釀酒時意外創造的。',
      treasure: '旅館最裡面的房間從不對外開放，據說裡面保存著初代老闆——一位退休冒險者——的全套傳奇裝備。',
      spirit: '「醉龍亭」的名字來自一個真實的故事——初代老闆真的用酒灌醉過一頭幼龍。',
    },
  },

town_banker: {
    id: 'town_banker',
    name: '銀行家',
    alias: 'banker',
    title: '王國財務官',
    description: '一位穿著考究黑色西裝的精明銀行家，金邊眼鏡後面是一雙精於算計的銳利眼眸。他的每一根頭髮都梳理得一絲不苟，指尖常年翻動金幣和帳簿，磨出了薄薄的繭。胸前口袋裡整齊地插著三支不同顏色的羽毛筆，腰間掛著一把精緻的黃銅算盤。',
    roomId: 'auction_house',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到湖畔城鎮分行。我是王國的財務官，負責管理冒險者的資產。' +
          '存款、取款、資產查詢——有什麼需要服務的嗎？',
        options: [
          { text: '你們提供什麼服務？', nextId: 'services' },
          { text: '最近的經濟狀況如何？', nextId: 'economy' },
          { text: '不需要，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'services',
        text: '我們提供金幣保管服務——冒險中被擊敗可能會損失隨身金幣，但存在銀行裡的絕對安全。' +
          '另外我們也提供貸款和匯款服務，方便在不同城鎮之間調度資金。' +
          '大額交易建議透過我們進行，尤其是持有湖畔委託券的拍賣交割，可以避免被騙。',
        options: [
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'economy',
        text: '最近物價有些波動。火山地帶的礦石漲價了——據說礦洞深處出了怪物，' +
          '產量減少了不少。冰封雪原的毛皮價格也在上升，因為雪狼群變得更兇猛了。' +
          '如果你有多餘的稀有材料，現在賣出去能賺不少。',
        options: [
          { text: '有用的消息。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '王國銀行，值得信賴。祝您冒險順利，財源廣進。',
      },
    ],
    guardianHints: {
      creature: '銀行的金庫門上鑲嵌著一隻魔法石像鬼——任何試圖非法進入的人都會被它攻擊。',
      treasure: '金庫最深處有一個從未被打開過的保險箱，據說是開國國王存放的神秘遺物。',
      spirit: '銀行家的算盤不是普通的計算工具——那是一件能預測金融走向的魔法道具。',
    },
  },

auctioneer: {
    id: 'auctioneer',
    name: '拍賣師',
    alias: 'auctioneer',
    title: '首席拍賣官',
    description: '一位穿著華麗紅色燕尾服的拍賣師，戴著一頂綴有金色羽毛的高禮帽，舉手投足間散發著舞台般的魅力。他的嗓音渾厚有力，彷彿天生就是為了拍賣而生。手中時刻握著一把象牙色的小木槌，眼神在會場中敏銳地捕捉每一個出價的手勢。',
    roomId: 'auction_house',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '各位各位！歡迎來到湖畔城鎮拍賣場！我是首席拍賣官，' +
          '每天下午開槌，價高者得！想委託拍賣還是來挖寶？',
        options: [
          { text: '最近有什麼好東西拍賣嗎？', nextId: 'hot_items' },
          { text: '怎麼委託拍賣？', nextId: 'how_to_sell' },
          { text: '只是來看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hot_items',
        text: '今天的壓軸拍品是一把從暗影森林帶回來的暗影精華武器——起拍價五千金幣！' +
          '還有從水晶洞窟出土的水晶核心飾品，以及火山地帶的限量版矮人鎧甲。' +
          '件件都是好東西，想搶的話手要快、錢包要夠厚！',
        options: [
          { text: '有意思！', nextId: 'farewell' },
          { text: '我也想賣東西。', nextId: 'how_to_sell' },
        ],
      },
      {
        id: 'how_to_sell',
        text: '很簡單！把要賣的物品交給我，設一個底價，我來幫你喊價。' +
          '成交後抽取百分之十的佣金——公道吧？好東西在這裡能賣出比商店高得多的價格。' +
          '不過品質太差的東西我不收，砸了拍賣場的招牌可不行。正式委託會開湖畔委託券，交割時記得找銀行確認。',
        options: [
          { text: '明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '記住——好東西不等人！看到喜歡的就出手，猶豫就沒了。歡迎再來！',
      },
    ],
    guardianHints: {
      creature: '拍賣台底下有一隻訓練有素的魔法鼠在記錄所有的成交數據。',
      treasure: '拍賣場的倉庫裡有一件被遺忘的委託品——一把從未被人認領的傳說武器。',
      spirit: '拍賣師的嗓音有一種魔力——聽他喊價的人總會不自覺地想出更高的價格。那可能是一種輕微的魅惑魔法。',
    },
  },

appraiser: {
    id: 'appraiser',
    name: '裝備鑑定師',
    alias: 'appraiser',
    title: '物品鑑定專家',
    description: '一位戴著多層可翻轉放大鏡的鑑定專家，鏡片在光線下折射出五彩斑斕的光芒。他的眼睛因長年凝視微小細節而微微瞇起，手指修長而靈巧，能感知裝備中最微弱的魔力波動。身穿一件口袋繁多的工作背心，裡面塞滿了各種鑑定工具和魔力探測器。',
    roomId: 'guild_hall',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '你好，我是公會的裝備鑑定師。看你身上那些裝備……嗯，有幾件不錯的東西。' +
          '想讓我幫你鑑定一下嗎？有些裝備上隱藏著你不知道的特殊屬性。',
        options: [
          { text: '裝備有隱藏屬性嗎？', nextId: 'hidden_stats' },
          { text: '怎麼判斷裝備的品質？', nextId: 'quality_guide' },
          { text: '有什麼值得推薦的裝備嗎？', nextId: 'recommend' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hidden_stats',
        text: '是的！有些裝備在鑑定之前，你只能看到基礎數值。但經過我的鑑定後，' +
          '可能會發現額外的屬性加成、特殊效果甚至是套裝屬性。' +
          '越稀有的裝備，隱藏屬性越強。Boss 掉落的裝備尤其值得鑑定；若是準備轉職，也可以先帶轉職調律符穩定法陣。',
        options: [
          { text: '有意思！', nextId: 'farewell' },
          { text: '裝備品質怎麼分？', nextId: 'quality_guide' },
        ],
      },
      {
        id: 'quality_guide',
        text: '裝備從低到高分為：普通（白色）、優良（綠色）、稀有（藍色）、' +
          '史詩（紫色）、傳說（橙色）。品質越高，基礎屬性和特殊效果越好。' +
          '另外，有些裝備屬於套裝——集齊全套會有額外的套裝加成效果。',
        options: [
          { text: '哪裡能找到好裝備？', nextId: 'recommend' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '打Boss！每個區域的Boss都有機率掉落稀有以上品質的裝備。' +
          '暗影狼王掉的「暗影之爪」、水晶龍掉的「水晶龍鱗甲」都是頂級裝備。' +
          '另外矮人鍛造師那邊能用稀有材料鍛造史詩級武器——有材料的話去找他。',
        options: [
          { text: '謝謝指點！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '有好裝備記得拿來讓我看看——說不定會有驚喜！',
      },
    ],
    guardianHints: {
      creature: '鑑定師的放大鏡裡住著一隻微型的知識精靈，幫助他看透物品的本質。',
      treasure: '鑑定師的工作台底下有一個上鎖的抽屜，裡面是他這些年來收集的被遺棄的稀有裝備。',
      spirit: '鑑定師的眼睛能直接看到物品中流動的魔力——這種能力被稱為「鑑定之眼」，是極其稀有的天賦。',
    },
  },

old_farmland_caretaker: {
    id: 'old_farmland_caretaker',
    name: '葛倫',
    alias: 'caretaker',
    title: '老農場看守人',
    description:
      '一名瘦削老人披著補丁斗篷，靴底沾滿乾裂泥土，腰間掛著一串已經分不清用途的舊鑰匙。' +
      '他每天沿著舊農路巡看田壟、穀倉和井口，像是在替早已離開的人守住最後一季收成。',
    roomId: 'old_farmland_crossroads',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '你要進老農場？先看草浪，再看水溝。草浪無風自動就是鼠群，水溝冒綠泡就是污泥怪。' +
          '若看見稻草人轉頭，別急著把背露給它。',
        options: [
          { text: '這裡為什麼荒廢？', nextId: 'history' },
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '你在找什麼？', nextId: 'key' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'history',
        text:
          '那年歉收，農夫們想用舊界碑上的儀式把土地喚醒。井水先變甜，果子先變大，' +
          '接著南瓜裂口會吐霧，麥稈在夜裡自己站起來。人就是從那時開始少的。',
        options: [
          { text: '收成圓陣在哪？', nextId: 'route' },
          { text: '聽起來像詛咒。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先清水溝，再看舊井。井水的根往果園和根窖跑，最後都指向北邊收成圓陣。' +
          '若你在稻草人身上找到草束或鑰匙，農舍裡的抽屜也許會開口。',
        options: [
          { text: '鑰匙？', nextId: 'key' },
          { text: '我知道路線了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'key',
        text:
          '農舍鑰匙不在我手上了。牠們把亮的東西都拖走，有些在鼠巢，有些掛到稻草人胸口。' +
          '真正那把，多半跟著收成圓陣裡的怨靈一起醒著。',
        options: [
          { text: '我會去找。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '別只看路，也要看作物往哪邊倒。老農場會用倒伏的草告訴你危險從哪裡來。',
      },
    ],
    guardianHints: {
      creature: '葛倫能分辨草浪裡是鼠群、黑鴉還是稻草人的拖繩。',
      treasure: '他記得農舍抽屜、糧倉地板與界碑苔蘚後方的舊藏物位置。',
      spirit: '他不是農場主人，只是最後一個仍把這片地當成責任的人。',
    },
  },

old_farmland_seed_peddler: {
    id: 'old_farmland_seed_peddler',
    name: '米拉',
    alias: 'seedpeddler',
    title: '舊種子小販',
    description:
      '一名背著防水種子箱的年輕小販，把貨攤架在破工具棚乾燥的一角。她用炭筆標記每包種子的來源，' +
      '也收購冒險者從農場怪物身上帶回的異常作物樣本。',
    roomId: 'old_farmland_toolshed',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'small_mp_potion',
      'antidote',
      'herb',
      'smoke_bomb',
      'throwing_knife',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '工具棚還算乾，種子不會馬上發霉。要補藥水、解毒劑，或換點能把鼠群嚇散的小東西嗎？',
        options: [
          { text: '你賣什麼？', nextId: 'shop' },
          { text: '你為什麼留在這？', nextId: 'reason' },
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '晚點再看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '我只帶得動輕貨：藥水、解毒劑、草藥，還有遇到鼠群或黑鴉時能爭取距離的小道具。',
        action: { type: 'shop', data: { shopType: 'field' } },
        options: [
          { text: '你為什麼留在這？', nextId: 'reason' },
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'reason',
        text:
          '老農場的土還沒死透。枯疫麥稈、霉斑蘋果、啃痕南瓜皮都能告訴我們污染怎麼走。' +
          '只要知道它怎麼走，就有機會把正常種子種回來。',
        options: [
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '我看看商品。', nextId: 'shop' },
        ],
      },
      {
        id: 'materials',
        text:
          '鼠群常帶枯疫麥稈，果園收成靈會掉霉斑蘋果，南瓜地要找啃痕南瓜皮。' +
          '若你拿到守田稻草束或月牧鈴，先別亂賣，那些多半和北邊圓陣有關。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '離開工具棚前先聽屋頂，黑鴉若停在上面，影子會比聲音更早落下來。',
      },
    ],
    guardianHints: {
      creature: '米拉會用種子箱的震動判斷附近是否有藤蔓型魔物甦醒。',
      treasure: '她的箱底藏著一小包未受污染的古老農場種子。',
      spirit: '她相信老農場不是廢墟，而是一塊仍在求救的土地。',
    },
  },

whispering_valley_ranger: {
    id: 'whispering_valley_ranger',
    name: '洛岑',
    alias: 'ranger',
    title: '溪谷巡林人',
    description:
      '一名披著防水斗篷的巡林人站在舊哨站路線圖前，肩帶上別著缺了一角的銅徽章。' +
      '他的聲音壓得很低，像怕自己的話被溪谷回音學走。',
    roomId: 'whispering_valley_ranger_post',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進溪谷後別只聽聲音。回音會說謊，水花比較誠實。若你看到藍白微光，先找退路再靠近。',
        options: [
          { text: '溪谷出了什麼事？', nextId: 'problem' },
          { text: '我該從哪裡開始？', nextId: 'route' },
          { text: '你在找徽章？', nextId: 'badge' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'problem',
        text:
          '石堰水位亂了，冷泉變得太冷，舊神龕也不再回應。低語裂縫像把所有水聲拉成一條線，' +
          '怪物被那聲音吸上游，連狼群都改了巡獵路線。',
        options: [
          { text: '我該從哪裡開始？', nextId: 'route' },
          { text: '低語裂縫在哪？', nextId: 'rift' },
        ],
      },
      {
        id: 'route',
        text:
          '先看蘆葦岸與清溪，熟悉水聲。再去冷泉、草藥坡和蛛網岩洞找失蹤巡林人的線索。' +
          '若能拿回巡林徽章，舊神龕會指出隱瀑石室。',
        options: [
          { text: '徽章在哪？', nextId: 'badge' },
          { text: '低語裂縫在哪？', nextId: 'rift' },
        ],
      },
      {
        id: 'badge',
        text:
          '徽章可能被冰蕨織網蛛拖進洞裡，也可能落在溪影狼巢。它背面刻著石堰水位，' +
          '沒有那個記號，很難讓神龕重新聽懂人的聲音。',
        options: [
          { text: '我會去找。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rift',
        text:
          '上游石堰與隱瀑石室之間。若裂縫裡的聲音開始重複你的話，代表低語者醒了。',
        options: [
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '看水面，不要只聽耳朵。溪谷若真的要警告你，會先讓水停一拍。',
      },
    ],
    guardianHints: {
      creature: '洛岑能從水花方向判斷溪影狼與清溪史萊姆的位置。',
      treasure: '他的路線圖標出石堰、神龕與隱瀑石室之間的安全節點。',
      spirit: '他相信溪谷不是被詛咒，而是失去了正確的水聲節奏。',
    },
  },

whispering_valley_herbalist: {
    id: 'whispering_valley_herbalist',
    name: '芙蕾',
    alias: 'herbalist',
    title: '冷泉藥師',
    description:
      '一位背著竹製藥箱的藥師蹲在冷泉旁，用細布收集藍白露水。她的袖口縫著防水符線，' +
      '藥箱裡分門別類放著草藥、解毒劑與冰蕨樣本。',
    roomId: 'whispering_valley_cold_spring',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'small_mp_potion',
      'medium_hp_potion',
      'antidote',
      'status_cure',
      'herb',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '冷泉露很有用，但別直接喝。這裡的水會記住聲音，調錯比例就會讓人一直聽見回音。',
        options: [
          { text: '我看看藥品。', nextId: 'shop' },
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '冷泉怎麼了？', nextId: 'spring' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '我有基本藥水、解毒劑和狀態藥。要進蛛網岩洞或冰蕨叢，至少帶一瓶解毒劑。',
        action: { type: 'shop', data: { shopType: 'herbalist' } },
        options: [
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '冷泉怎麼了？', nextId: 'spring' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '低語蘆葦、冷泉露、冰蕨葉都能入藥。回音石片和低語水晶別亂磨粉，' +
          '它們不是單純礦物，而是溪谷聲音凝下來的東西。',
        options: [
          { text: '我看看藥品。', nextId: 'shop' },
          { text: '冷泉怎麼了？', nextId: 'spring' },
        ],
      },
      {
        id: 'spring',
        text:
          '冷泉比去年冷太多，史萊姆也變得透明。水脈上游一定有東西把聲音和寒氣鎖住了，' +
          '也許在隱瀑石室，也許更深。',
        options: [
          { text: '我會往上游查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '採冰蕨時別折主莖。你只要葉片，溪谷還需要它繼續聽水聲。',
      },
    ],
    guardianHints: {
      creature: '芙蕾能用藥箱裡的露水震動判斷附近是否有回音微光。',
      treasure: '她保留一份尚未污染的冷泉露，可作為判斷水脈異常的基準。',
      spirit: '她把溪谷視為病人，而不是採集場。',
    },
  },

abandoned_mines_surveyor: {
    id: 'abandoned_mines_surveyor',
    name: '班恩',
    alias: 'surveyor',
    title: '礦坑測量師',
    description:
      '一名灰鬍測量師坐在礦權牌旁，膝上攤著被礦粉染黑的舊地圖。' +
      '他的測繩、羅盤與安全燈都保養得很好，像是隨時準備重新下井。',
    roomId: 'abandoned_mines_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '要進廢坑就記住三件事：聽到礦車聲先靠牆，看到水面多出倒影就退，安全燈熄了不要逞強。',
        options: [
          { text: '礦坑為什麼廢棄？', nextId: 'history' },
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '深部礦核是什麼？', nextId: 'core' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'history',
        text:
          '帳面上寫坍方，實際上是他們挖到一顆會回應敲擊的礦核。工頭下令加班，' +
          '升降台、沉軌段、深部核心同一晚全出事，之後沒人能把亡魂帶出去。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '深部礦核是什麼？', nextId: 'core' },
        ],
      },
      {
        id: 'route',
        text:
          '先走礦脈道和礦車場，確認支架還能撐多久。再查工頭室、火藥室和沉軌段。' +
          '若你找到工頭鑰匙牌，就能證明事故後有人回來動過現場。',
        options: [
          { text: '礦核在哪？', nextId: 'core' },
          { text: '我會照路線查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text:
          '在回音豎井底部。它像礦石，也像心臟。帶回礦核碎片前，別相信任何點名聲，' +
          '那多半是礦核縛工頭還在叫死去礦工上工。',
        options: [
          { text: '我會留意點名聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '繩標若斷了就回頭補上。礦坑最會吞掉的不是人，是人對退路的記憶。',
      },
    ],
    guardianHints: {
      creature: '班恩能從敲擊聲分辨鏽鎬礦工、沉軌怨影與礦背爬蟲。',
      treasure: '他的舊地圖標出工頭室暗櫃與逃生側洞的堵塞點。',
      spirit: '他不是來尋寶，而是想把礦難真正原因寫回地圖上。',
    },
  },

abandoned_mines_salvager: {
    id: 'abandoned_mines_salvager',
    name: '桃莉',
    alias: 'salvager',
    title: '礦坑回收商',
    description:
      '一名矮壯回收商把小貨攤架在舊升降台旁，背後堆著繩索、鏟頭、油布與修補過的安全燈。' +
      '她手套上滿是鐵鏽與硝鹽，說話時總先看一眼井口深處。',
    roomId: 'abandoned_mines_lift_station',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'smoke_bomb',
      'throwing_knife',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '買補給就快。這地方聽見金屬聲就會醒，尤其是礦車場和沉軌段。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些東西值得回收？', nextId: 'salvage' },
          { text: '你敢待在這裡？', nextId: 'reason' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、煙霧彈和短刀都有。要進蝙蝠棲洞或沉軌段，別空手下去。',
        action: { type: 'shop', data: { shopType: 'mine_salvage' } },
        options: [
          { text: '哪些東西值得回收？', nextId: 'salvage' },
          { text: '你敢待在這裡？', nextId: 'reason' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'salvage',
        text:
          '失光礦塊、支木片、蝠糞硝鹽、沉燈油、安全燈鏡片都有人收。' +
          '工頭鑰匙牌和礦核碎片別賣，那些是證據，不是貨。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'reason',
        text:
          '廢坑不是死坑。只要還有風、還有水、還有礦塵落下，就有東西能回收。' +
          '真正可怕的是深處有人還在點名，像班表從沒停過。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '聽起來不妙。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '安全燈照不亮的地方，先丟石子。沒有回音才是真的危險。',
      },
    ],
    guardianHints: {
      creature: '桃莉知道哪些金屬聲會引來蝙蝠，哪些會引來沉軌怨影。',
      treasure: '她的貨箱底部藏著一片完整安全燈鏡片，是她保命的工具。',
      spirit: '她把回收當成替礦工整理遺物，只是嘴上從不承認。',
    },
  },

abandoned_mines_ledger_ghost: {
    id: 'abandoned_mines_ledger_ghost',
    name: '伊諾',
    alias: 'ledgerghost',
    title: '記帳亡魂',
    description:
      '一名半透明礦工亡魂守在工頭室破桌旁，手指反覆翻動不存在的帳本頁。' +
      '他的胸前掛著已熄滅的安全燈，燈罩內偶爾映出塗黑的班表名字。',
    roomId: 'abandoned_mines_foreman_office',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text:
          '第七班少了三人，第八班多了四具影子。帳不平，工頭不准我們離開。',
        options: [
          { text: '誰塗黑了名冊？', nextId: 'ledger' },
          { text: '工頭在哪？', nextId: 'foreman' },
          { text: '要怎麼讓你們安息？', nextId: 'rest' },
          { text: '我先調查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ledger',
        text:
          '不是墨水，是礦核的血。名字被蓋住後，人就只剩職務：挖、推、撐、點燈。' +
          '找到工頭鑰匙牌，打開鎖櫃，真名還在夾層裡。',
        options: [
          { text: '工頭在哪？', nextId: 'foreman' },
          { text: '我會找鎖櫃。', nextId: 'farewell' },
        ],
      },
      {
        id: 'foreman',
        text:
          '他在深部礦核前點名。每點一個名字，就有一副骨頭重新拿起鎬。',
        options: [
          { text: '要怎麼讓你們安息？', nextId: 'rest' },
          { text: '我會去深部核心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rest',
        text:
          '把礦核碎片帶回來，把真名念完，安全燈點三次。不是為了照路，是為了讓我們知道班已經結束。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '如果你聽見自己的名字，不要回答。礦坑只會點死人的名。',
      },
    ],
    guardianHints: {
      creature: '伊諾能說出鏽鎬礦工為何聚集在哪些房間。',
      treasure: '他知道工頭室鎖櫃與帳本夾層的位置。',
      spirit: '他的執念不是財寶，而是把所有礦工的真名重新寫回帳本。',
    },
  },

wildgrass_hills_pathfinder: {
    id: 'wildgrass_hills_pathfinder',
    name: '希洛',
    alias: 'pathfinder',
    title: '丘陵領路人',
    description:
      '一名臉上有風砂刮痕的領路人靠在防風柵門旁，斗篷邊緣縫著切風羽。' +
      '他用短木棍在泥地上畫出草浪、煙火與安全水源的位置。',
    roomId: 'wildgrass_hills_windbreak_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進丘陵先看草，不要看路。路會被哥布林改，草浪卻會老實說誰剛走過。',
        options: [
          { text: '丘陵現在誰控制？', nextId: 'control' },
          { text: '我該先去哪？', nextId: 'route' },
          { text: '風暴草冠是什麼？', nextId: 'crown' },
          { text: '我會看草浪。', nextId: 'farewell' },
        ],
      },
      {
        id: 'control',
        text:
          '荒草戰酋用看火營、伏棚和鷹棲柱串成巡邏網。你若不先拆掉信號，酋長脊會一直有援兵。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '風暴草冠是什麼？', nextId: 'crown' },
        ],
      },
      {
        id: 'route',
        text:
          '從高草徑摸到斥候岩臺，奪旗；再破看火營，拿信號角；最後去雷丘和斷圖騰找守風誓詞。',
        options: [
          { text: '守風誓詞？', nextId: 'crown' },
          { text: '路線清楚了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crown',
        text:
          '風暴草冠不是王座，是舊丘民安撫強風的祭地。哥布林把那套誓詞刮壞後，雷和風都開始聽錯命令。',
        options: [
          { text: '我會找誓詞。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若聽見號角，先找風從哪邊來。援兵通常會順風到。',
      },
    ],
    guardianHints: {
      creature: '希洛能從草浪判斷風草蛇、巨豬與哥布林巡邏的動線。',
      treasure: '他的路線圖標著隱泉、斷圖騰與伏棚暗路。',
      spirit: '他相信丘陵不是荒地，只是被錯誤的旗號和誓詞弄亂了方向。',
    },
  },

wildgrass_hills_trapper: {
    id: 'wildgrass_hills_trapper',
    name: '瑪妲',
    alias: 'trapper',
    title: '荒草陷阱師',
    description:
      '一名老練陷阱師坐在隱泉邊修補捕獸夾，腰間掛著草籽袋、羽毛束與野豬牙片。' +
      '她把每個陷阱都綁上細鈴，避免旅人誤踩。',
    roomId: 'wildgrass_hills_hidden_spring',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'antidote',
      'smoke_bomb',
      'throwing_knife',
      'herb',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '你要走高草？補藥、煙霧彈和解毒劑先備好。這裡的蛇藏得比哥布林還安靜。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '怎麼避開陷阱？', nextId: 'traps' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '我賣能讓你從草裡活著出來的東西。別省煙霧彈，遇到風旗勇士時它能救命。',
        action: { type: 'shop', data: { shopType: 'trapper' } },
        options: [
          { text: '哪些材料值得帶回？', nextId: 'materials' },
          { text: '怎麼避開陷阱？', nextId: 'traps' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '風暴草籽、切風羽、雷痕石、硬獠牙板都有人收。信號角和守風誓詞布條別賣，那是拆掉巡邏網的證據。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'traps',
        text:
          '哥布林陷阱沒有耐心，通常藏在最直的路上。我自己的陷阱有細鈴，聽到三短一長就繞開。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會聽鈴。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '別在草浪停住的時候走，那不是無風，是有東西伏著。',
      },
    ],
    guardianHints: {
      creature: '瑪妲知道巨豬衝鋒線與風草蛇出沒的低溝。',
      treasure: '她藏著幾片完整硬獠牙板，準備修一面能擋衝鋒的盾。',
      spirit: '她把隱泉當成所有旅人的臨時避風港。',
    },
  },

mist_harbor_gatewarden: {
    id: 'mist_harbor_gatewarden',
    name: '歐德',
    alias: 'gatewarden',
    title: '霧港守門人',
    description:
      '一名披著油布披肩的老守門人站在霧港城門下，手裡拿著防潮名冊與銅哨。' +
      '他的靴子永遠濕著，卻能從腳印深淺判斷旅人是從陸路、碼頭還是走私巷來的。',
    roomId: 'mist_harbor_fog_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '新來的？先記住，霧港不怕迷路，怕的是有人替你改路。船票、封條、住客名牌都收好。',
        options: [
          { text: '霧港最近有什麼事？', nextId: 'trouble' },
          { text: '我該去哪裡報到？', nextId: 'route' },
          { text: '公告板上的急件？', nextId: 'notice' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'trouble',
        text:
          '九號倉封條不對，走私巷貨牌變多，霧望燈室又有人半夜轉燈。這三件事若串起來，就不是小偷小摸。',
        options: [
          { text: '我該去哪裡報到？', nextId: 'route' },
          { text: '公告板上的急件？', nextId: 'notice' },
        ],
      },
      {
        id: 'route',
        text:
          '先去潮汐廣場看潮鐘，再到海關廳登記。要接委託就去冒險者碼頭，想查航線去海圖檔案室。',
        options: [
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'notice',
        text:
          '公告被撕下不是風吹的。若你找到港務封印章或走私貨牌，拿回來給海關，不要在魚市裡亂問。',
        options: [
          { text: '我會查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '霧裡有人叫你名字也別急著回頭，先看腳下影子是不是多了一個。',
      },
    ],
    guardianHints: {
      creature: '歐德知道霧巷扒手通常從哪些濕石縫消失。',
      treasure: '他的名冊夾著近期失蹤船員與貨箱的交叉記錄。',
      spirit: '他守的不是城門，而是霧港仍願意承認的入口。',
    },
  },
};
