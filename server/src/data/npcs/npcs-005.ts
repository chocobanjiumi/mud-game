import type { NpcDef } from '@game/shared';

export const NPCS_PART_005: Record<string, NpcDef> = {
mist_harbor_tide_clerk: {
    id: 'mist_harbor_tide_clerk',
    name: '菲娜',
    alias: 'tideclerk',
    title: '潮鐘書記',
    description:
      '一名年輕書記坐在潮汐廣場的潮鐘旁，膝上放著潮位簿與一支防水炭筆。' +
      '她每次聽見銅錘響起，都會在簿上記下船期與霧色。',
    roomId: 'mist_harbor_tide_plaza',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text:
          '潮鐘不只報時，也報誰該進港、誰該離港。最近有幾艘船的鐘點對不上。',
        options: [
          { text: '怎麼查船期？', nextId: 'schedule' },
          { text: '鐘點對不上？', nextId: 'missing' },
          { text: '霧港路線怎麼走？', nextId: 'directions' },
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'schedule',
        text:
          '海關管貨，船長辦公室管船，潮鐘管時間。三份記錄不一致時，通常就是有人在霧裡進出了。',
        options: [
          { text: '鐘點對不上？', nextId: 'missing' },
          { text: '霧港路線怎麼走？', nextId: 'directions' },
        ],
      },
      {
        id: 'missing',
        text:
          '有艘灰帆船沒敲進港鐘，貨卻進了九號倉。若你找到走私貨牌，時間一定能對上。',
        options: [
          { text: '我會留意九號倉。', nextId: 'farewell' },
        ],
      },
      {
        id: 'directions',
        text:
          '北邊是傳送燈塔，東邊魚市，南邊海關，西邊城門。迷路時回到潮鐘，霧港所有路都會被它敲回來。',
        options: [
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '聽見鐘響就停一步。霧港很多意外，都發生在急著趕潮的人身上。',
      },
    ],
    guardianHints: {
      creature: '菲娜能從鐘聲間隔判斷霧巷是否有人借潮聲掩護行動。',
      treasure: '潮位簿能比對灰帆船與九號倉貨物的時間差。',
      spirit: '她把霧港混亂的日常整理成潮汐節拍。',
    },
  },

mist_harbor_customs_master: {
    id: 'mist_harbor_customs_master',
    name: '葛維克',
    alias: 'customsmaster',
    title: '海關總管',
    description:
      '一名鬍鬚整齊的海關總管坐在銅秤後，手邊排著港務封印章、潮濕貨簿與一杯冷茶。' +
      '他的眼神比秤砣還穩，任何被改過的封條都逃不過他的手指。',
    roomId: 'mist_harbor_customs_house',
    type: 'merchant',
    shopItems: [
      'return_scroll',
      'small_hp_potion',
      'medium_hp_potion',
      'antidote',
      'fog_lantern_wick',
      'salt_cured_fish',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '登記貨物、查船名、買港口補給，都在這裡。若是來問九號倉，先拿出證據。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '九號倉怎麼了？', nextId: 'warehouse' },
          { text: '港務封印章？', nextId: 'stamp' },
          { text: '先不打擾。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '合法補給只有這些：回程卷軸、藥水、解毒劑、霧燈燈芯和鹽漬霧魚。其餘貨品請出示封條。',
        action: { type: 'shop', data: { shopType: 'customs' } },
        options: [
          { text: '九號倉怎麼了？', nextId: 'warehouse' },
          { text: '港務封印章？', nextId: 'stamp' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'warehouse',
        text:
          '封條完整，重量不對；簿冊完整，墨跡太新。有人用真正的章蓋了假的貨。',
        options: [
          { text: '港務封印章？', nextId: 'stamp' },
          { text: '我去查貨牌。', nextId: 'farewell' },
        ],
      },
      {
        id: 'stamp',
        text:
          '若你在走私巷看到同樣印紋，別交給巷裡的人。章能開門，也能關掉一整條航線。',
        options: [
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '霧港允許灰色地帶，但不允許有人把整座港變成自己的倉庫。',
      },
    ],
    guardianHints: {
      creature: '葛維克知道霧巷扒手常販賣哪種偽造貨牌。',
      treasure: '他的鎖櫃裡有一枚備用港務封印章與近月貨簿副本。',
      spirit: '他用表格守住霧港，因為海霧會抹平太多真相。',
    },
  },

mist_harbor_fishmonger: {
    id: 'mist_harbor_fishmonger',
    name: '露莎',
    alias: 'fishmonger',
    title: '晨霧魚販',
    description:
      '一名嗓門響亮的魚販站在濕木攤後，手起刀落把銀魚切得整齊。' +
      '她的圍裙沾滿鹽霧與魚鱗，卻能記住每艘小船今天捕到了什麼。',
    roomId: 'mist_harbor_fish_market',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'herb',
      'salt_cured_fish',
      'fog_lantern_wick',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '新鮮霧魚、鹽漬霧魚、暖胃湯料都有。別嫌魚市吵，安靜下來才是真的出事。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '今天有怪事嗎？', nextId: 'rumor' },
          { text: '走私巷在哪？', nextId: 'alley' },
          { text: '晚點再買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '要吃的、要點燈的、要止血的都有。魚市不是藥店，但水手知道什麼東西能撐過一晚。',
        action: { type: 'shop', data: { shopType: 'fish_market' } },
        options: [
          { text: '今天有怪事嗎？', nextId: 'rumor' },
          { text: '走私巷在哪？', nextId: 'alley' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rumor',
        text:
          '灰帆船沒進魚市，卻有人賣牠船上的冰鹽魚。要我說，貨從九號倉或走私巷進來的。',
        options: [
          { text: '走私巷在哪？', nextId: 'alley' },
          { text: '我會查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'alley',
        text:
          '攤後那條濕巷就是。你若看見木箱上沒有魚味，八成不是魚貨。',
        options: [
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '買魚記得看眼睛，查案記得看箱底。兩個都不能只聽賣家說。',
      },
    ],
    guardianHints: {
      creature: '露莎能看出霧巷扒手是否混在魚市人潮裡。',
      treasure: '她知道哪幾個魚箱常被拿來藏走私貨牌。',
      spirit: '魚市是霧港最吵的地方，也是消息最難完全藏住的地方。',
    },
  },

mist_harbor_innkeeper: {
    id: 'mist_harbor_innkeeper',
    name: '瑪洛',
    alias: 'innkeeper',
    title: '沉錨旅店老闆',
    description:
      '一名寬肩旅店老闆站在沉錨旅店櫃台後，手邊放著住客簿、房牌和一壺熱酒。' +
      '他說話慢，卻能在吵雜水手中聽見誰提到失蹤船名。',
    roomId: 'mist_harbor_anchor_inn',
    type: 'innkeeper',
    dialogue: [
      {
        id: 'greeting',
        text:
          '要房間、熱湯、還是打聽船員？霧港夜裡濕冷，別在碼頭硬撐。',
        options: [
          { text: '我需要休息。', nextId: 'rest' },
          { text: '住客簿被撕了？', nextId: 'ledger' },
          { text: '有外海傳聞嗎？', nextId: 'rumor' },
          { text: '先不用。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rest',
        text: '空房還有。把濕斗篷掛在爐邊，別把來路告訴第一個請你喝酒的人。',
        action: { type: 'heal', data: { service: 'inn' } },
        options: [
          { text: '住客簿被撕了？', nextId: 'ledger' },
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ledger',
        text:
          '撕掉的不是客人，是船員。那幾頁都有海關封蠟味，還有九號倉常用的濕繩印。',
        options: [
          { text: '有外海傳聞嗎？', nextId: 'rumor' },
          { text: '我會去海關看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rumor',
        text:
          '水手說霧望燈室最近照過一條不存在的航線。若那是真的，某艘船不是迷路，是被叫回來了。',
        options: [
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '霧港的床很軟，夢很重。睡前把重要東西壓在枕頭下。',
      },
    ],
    guardianHints: {
      creature: '瑪洛能從旅店人聲中分辨真正的恐慌與水手吹牛。',
      treasure: '住客簿殘頁可追到失蹤灰帆船員。',
      spirit: '他讓水手相信霧港還有能回來的門。',
    },
  },

mist_harbor_guild_factor: {
    id: 'mist_harbor_guild_factor',
    name: '凱汀',
    alias: 'factor',
    title: '冒險者碼頭書記',
    description:
      '一名公會書記坐在防潮棚下，把任務牌按潮位、船型與危險程度排好。' +
      '他的桌面有乾燥墨盒、繩結樣本與一個訓練假人的修理清單。',
    roomId: 'mist_harbor_guild_quay',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text:
          '想接海上委託、護航、搜救，或只是測測新武器？先在這裡登記隊伍。',
        options: [
          { text: '有什麼委託？', nextId: 'contracts' },
          { text: '訓練假人？', nextId: 'training' },
          { text: '走私調查能接嗎？', nextId: 'smuggling' },
          { text: '稍後再說。', nextId: 'farewell' },
        ],
      },
      {
        id: 'contracts',
        text:
          '今天有渡船護送、失物打撈、九號倉核對、外海霧燈巡查。危險最高的是最後兩個。',
        options: [
          { text: '訓練假人？', nextId: 'training' },
          { text: '走私調查能接嗎？', nextId: 'smuggling' },
        ],
      },
      {
        id: 'training',
        text:
          '碼頭假人只供測招，不給經驗也不掉東西。別在真船上才發現自己站不穩。',
        options: [
          { text: '走私調查能接嗎？', nextId: 'smuggling' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'smuggling',
        text:
          '能接，但先拿到海關或魚市的線索。沒有貨牌、封印章或潮鐘時間，公會不能替你擔保。',
        options: [
          { text: '我去找線索。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '霧港委託看起來都像找東西，最後通常都是找人。',
      },
    ],
    guardianHints: {
      creature: '凱汀管理碼頭訓練假人與夜間走私事件登記。',
      treasure: '他的委託牌背面記著未公開的渡船失蹤名單。',
      spirit: '他把霧港的不安變成冒險者能承接的工作。',
    },
  },

mist_harbor_lamplighter: {
    id: 'mist_harbor_lamplighter',
    name: '艾菈',
    alias: 'lamplighter',
    title: '霧望守燈人',
    description:
      '一名守燈人站在霧望燈室的巨大透鏡旁，手套上沾著藍色燈油。' +
      '她的腰帶掛滿小鏡片與霧燈燈芯，每隔幾句話就會確認燈光方位。',
    roomId: 'mist_harbor_fogwatch_lantern',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '別碰透鏡。這盞燈照錯一格，就可能把船帶進沒有海圖的霧裡。',
        options: [
          { text: '最近有人轉燈？', nextId: 'tamper' },
          { text: '需要什麼材料？', nextId: 'materials' },
          { text: '外海有什麼？', nextId: 'sea' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tamper',
        text:
          '有。燈室地板某個刻度被磨得太亮，指向官方航線外的黑水區。那不是手滑，是習慣。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials' },
          { text: '外海有什麼？', nextId: 'sea' },
        ],
      },
      {
        id: 'materials',
        text:
          '霧燈燈芯、潮玻璃碎片和乾淨燈油。若你從潮池小祠帶回潮玻璃，我能校準燈色。',
        options: [
          { text: '外海有什麼？', nextId: 'sea' },
          { text: '我去找材料。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sea',
        text:
          '有時是冰潮，有時是幽霧船。有時只是人不願承認的私航。燈只照路，不替人選真相。',
        options: [
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若你在霧裡看見兩盞一樣的燈，跟著較暗的那盞。假的總想亮一點。',
      },
    ],
    guardianHints: {
      creature: '艾菈能判斷霧中船影是真船、幽霧船還是傳送燈折影。',
      treasure: '她的備品盒裡有霧燈燈芯與潮玻璃校準片。',
      spirit: '她守的不只是燈，而是霧港選擇照亮的航線。',
    },
  },

mist_harbor_alley_broker: {
    id: 'mist_harbor_alley_broker',
    name: '薩維',
    alias: 'broker',
    title: '霧巷掮客',
    description:
      '一名笑容很淺的掮客靠在走私巷暗門旁，手裡拋著一枚無名貨牌。' +
      '他的外套沒有任何徽記，但每個經過的搬運工都會避開他的影子。',
    roomId: 'mist_harbor_smugglers_alley',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text:
          '迷路的人不會走到這裡。你是找貨、找人，還是找一個能說服海關的故事？',
        options: [
          { text: '我在找走私貨牌。', nextId: 'tag' },
          { text: '九號倉的貨？', nextId: 'warehouse' },
          { text: '霧巷扒手呢？', nextId: 'cutpurse' },
          { text: '只是路過。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tag',
        text:
          '貨牌只是木頭，值錢的是上面的潮汐暗號。看得懂的人知道哪個箱子不該存在。',
        options: [
          { text: '九號倉的貨？', nextId: 'warehouse' },
          { text: '霧巷扒手呢？', nextId: 'cutpurse' },
        ],
      },
      {
        id: 'warehouse',
        text:
          '九號倉有兩道門：海關知道的一道，潮水知道的一道。你想進哪一道，得看你願意欠誰。',
        options: [
          { text: '霧巷扒手呢？', nextId: 'cutpurse' },
          { text: '我不欠人情。', nextId: 'farewell' },
        ],
      },
      {
        id: 'cutpurse',
        text:
          '扒手不是我的人，但他們知道誰口袋裡有封印章。夜裡起霧時，小心腰包比小心刀更重要。',
        options: [
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '霧港每條暗路都有出口，只是出口不一定還在霧港。',
      },
    ],
    guardianHints: {
      creature: '薩維知道霧巷扒手何時會在事件中現身。',
      treasure: '他手裡的貨牌能指出九號倉暗門與私航貨箱。',
      spirit: '他代表霧港不寫進海關簿的那半座城市。',
    },
  },

ancient_ruins_lead_archaeologist: {
    id: 'ancient_ruins_lead_archaeologist',
    name: '莉瑟',
    alias: 'archaeologist',
    title: '測繪隊首席考古學者',
    description:
      '一名滿身沙塵的考古學者守在測繪桌旁，桌面壓著遺跡平面圖、拓印紙與數枚紅色路釘。' +
      '她說話時總會先確認日晷、月門與封印階梯的位置，像怕任何一條線索被遺跡重新打亂。',
    roomId: 'ancient_ruins_survey_camp',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '先別急著往深處走。這座遺跡不是墓，是一套還在運轉的觀測封印。你每碰一個房間，它都在記錄你。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '日月線索在哪？', nextId: 'sunmoon' },
          { text: '神諭室代表什麼？', nextId: 'oracle' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '外層先看銘文庭、馬賽克大廳和資料庫。要進中層，就把方尖碑、日晷露台與倒影水池的結果對上。',
        options: [
          { text: '日月線索在哪？', nextId: 'sunmoon' },
          { text: '神諭室代表什麼？', nextId: 'oracle' },
        ],
      },
      {
        id: 'sunmoon',
        text:
          '日晷給方向，水池給月相，月門只承認兩者交疊的答案。若你只拿其中一半，封印階梯會把你送回危險處。',
        options: [
          { text: '神諭室代表什麼？', nextId: 'oracle' },
          { text: '我會記下來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'oracle',
        text:
          '神諭室不是預言房，是審問房。它會把古代人的錯誤重播給你看，然後看你是否仍想打開內聖所。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '把拓印帶回來給我。證據越完整，我們越不需要用命去猜。',
      },
    ],
    guardianHints: {
      creature: '莉瑟能分辨哪些守衛屬於外層巡邏，哪些是封印核心喚醒的防線。',
      treasure: '她的測繪圖標出方尖碑、日晷露台與倒影水池的校準關係。',
      spirit: '她把冒險者的路線變成遺跡重新被理解的證據。',
    },
  },

ancient_ruins_relic_curator: {
    id: 'ancient_ruins_relic_curator',
    name: '塔維恩',
    alias: 'curator',
    title: '遺物整理員',
    description:
      '一名遺物整理員坐在塵封資料庫的石架旁，正把陶板碎片、青銅釘與封印光塵分格裝箱。' +
      '他的貨攤不像商店，更像一張被迫開放的研究桌。',
    roomId: 'ancient_ruins_dust_archive',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'sun_dial_pin',
      'moon_gate_tablet',
      'lightseal_dust',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '要補給就挑快點。這裡每次有人翻陶板，書架後面的骨頭都像想糾正分類。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '哪些遺物能用？', nextId: 'relics' },
          { text: '資料庫安全嗎？', nextId: 'danger' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、日晷校準釘、月門殘片和封印光塵都有。別把任務證物當普通材料賣掉。',
        action: { type: 'shop', data: { shopType: 'ruins_relics' } },
        options: [
          { text: '哪些遺物能用？', nextId: 'relics' },
          { text: '資料庫安全嗎？', nextId: 'danger' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'relics',
        text:
          '日晷校準釘用在露台，月門殘片對應拱門，封印光塵能判斷石鎖是否還活著。神諭碎片和核心殘片別亂碰。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text:
          '相對安全，意思是還來得及逃。銘文縛骨會從書架縫裡走出來，誓石哨兵則只在你拿錯匣子時醒。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '聽起來夠危險。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '陶板看年份，封印看裂紋，人看他敢不敢承認自己讀錯了。',
      },
    ],
    guardianHints: {
      creature: '托瑪知道銘文縛骨與誓石哨兵通常守在哪類陶板旁。',
      treasure: '他的分格箱裡整理著日晷、月門與封印階梯可用的遺物。',
      spirit: '他讓資料庫從死文字變成可被再次使用的工具。',
    },
  },

ancient_ruins_seal_adept: {
    id: 'ancient_ruins_seal_adept',
    name: '艾文',
    alias: 'sealadept',
    title: '封印學徒',
    description:
      '一名年輕封印學徒蹲在封印階梯前，用細刷清理石鎖裂縫中的白色光塵。' +
      '他腰間掛著空試管與失敗拓印，神情緊張卻不肯離開階梯半步。',
    roomId: 'ancient_ruins_sealed_stair',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '別直接碰石鎖。它們不是門閂，是三段問題。答錯時醒來的不是鎖，是下面那套防線。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials' },
          { text: '石鎖怎麼判讀？', nextId: 'locks' },
          { text: '內聖所有什麼？', nextId: 'sanctum' },
          { text: '我會避開石鎖。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '封印光塵可以測裂縫，神諭碎片能確認答案是否被改寫，核心殘片則代表你已經越過該停下來的線。',
        options: [
          { text: '石鎖怎麼判讀？', nextId: 'locks' },
          { text: '內聖所有什麼？', nextId: 'sanctum' },
        ],
      },
      {
        id: 'locks',
        text:
          '第一道看日影，第二道看月相，第三道看神諭室回放。三者若缺一個，青銅構裝會把你當成闖入者。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials' },
          { text: '我會照順序。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sanctum',
        text:
          '我只看過白光從門縫裡漏出來。老師說那不是寶物的光，是某個錯誤還沒有完全死掉。',
        options: [
          { text: '石鎖怎麼判讀？', nextId: 'locks' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若你聽見階梯下面有齒輪聲，先退三步。能退回來也是答案的一部分。',
      },
    ],
    guardianHints: {
      creature: '艾文能判斷石鎖錯誤時會先喚醒構裝體還是神諭回聲。',
      treasure: '他的試管能收集封印光塵，判斷階梯是否可安全開啟。',
      spirit: '他代表仍想理解封印的人，而不是只想打破它的人。',
    },
  },

marsh_mirrors_pathfinder: {
    id: 'marsh_mirrors_pathfinder',
    name: '洛苓',
    alias: 'pathfinder',
    title: '鏡沼探路人',
    description:
      '一名披著防水斗篷的探路人站在泥炭小洲舊營火旁，手腕纏著黑蘆路繩。' +
      '她每說一句話都會看一次水面倒影，確認對方還站在同一個方向。',
    roomId: 'marsh_of_mirrors_peat_islet',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '在鏡沼裡，地圖只能信一半。另一半要靠路繩、苔痕，還有你願不願意承認自己已經迷路。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '倒影怎麼判斷？', nextId: 'reflection' },
          { text: '失蹤旅人呢？', nextId: 'missing' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先從蘆葦入口到泥炭小洲校準方向，再走歪木棧道或黑水小徑。看到月光堤道前，不要追任何會叫你名字的聲音。',
        options: [
          { text: '倒影怎麼判斷？', nextId: 'reflection' },
          { text: '失蹤旅人呢？', nextId: 'missing' },
        ],
      },
      {
        id: 'reflection',
        text:
          '真路的倒影會慢半拍，假路太完美。鏡苔能貼在真實地標上，黑蘆纖維能綁住回程路。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我記下來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'missing',
        text:
          '失路石堆上的名牌不是紀念品，是路線紀錄。找到名牌就帶回來，我能看出他們最後信了哪一個倒影。',
        options: [
          { text: '倒影怎麼判斷？', nextId: 'reflection' },
          { text: '我會找。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '回頭看見兩個自己時，跟著鞋底有泥的那個走。',
      },
    ],
    guardianHints: {
      creature: '洛苓知道蘆影潛伏者和巫燈回聲最常模仿哪些聲音。',
      treasure: '她的黑蘆路繩能標出泥炭小洲、月光堤道與玻璃水核心的真路關係。',
      spirit: '她把迷路者留下的錯誤變成後來者能活用的路標。',
    },
  },

marsh_mirrors_bog_apothecary: {
    id: 'marsh_mirrors_bog_apothecary',
    name: '薇妲',
    alias: 'apothecary',
    title: '沼澤藥師',
    description:
      '一名沼澤藥師在毒花床邊架起防潮藥箱，箱內分著銀面藻、鏡苔、解毒劑與綠色藥瓶。' +
      '她的布面罩浸過草藥，說話時仍能聞到淡淡苦味。',
    roomId: 'marsh_of_mirrors_poison_bloom_bed',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'silver_algae',
      'mirror_moss',
      'black_reed_fiber',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '想活著穿過鏡沼，解毒劑不嫌多，路標材料也不嫌多。毒霧會傷人，假路會殺人。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '哪些材料有用？', nextId: 'materials' },
          { text: '毒花怎麼採？', nextId: 'blooms' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、銀面藻、鏡苔和黑蘆纖維都有。別把鏡核碎片拿來換藥，那東西要交給懂核心的人。',
        action: { type: 'shop', data: { shopType: 'mirror_marsh' } },
        options: [
          { text: '哪些材料有用？', nextId: 'materials' },
          { text: '毒花怎麼採？', nextId: 'blooms' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '銀面藻穩定解毒藥，鏡苔標記真路，黑蘆纖維綁路繩。玻璃水膜和失路名牌別亂賣，那些是追查核心的證據。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'blooms',
        text:
          '看倒影。倒影裡還沒開的花，現實裡才剛好成熟。若倒影已經枯了，採下來只會放出黑霧。',
        options: [
          { text: '我看看商品。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '藥能解毒，不能解貪路。看見捷徑時先停一步。',
      },
    ],
    guardianHints: {
      creature: '薇妲熟悉鏡泥毒蛙、黑蘆泥膠與毒花霧氣的反應。',
      treasure: '她的藥箱分格收著銀面藻、鏡苔與黑蘆纖維。',
      spirit: '她讓鏡沼的毒性短暫變成可被理解的藥理。',
    },
  },

marsh_mirrors_shrine_keeper: {
    id: 'marsh_mirrors_shrine_keeper',
    name: '莫芮',
    alias: 'keeper',
    title: '沉祠守名人',
    description:
      '一名沉默的守名人坐在沉沒小祠乾燥供桌旁，膝上放著一串被水泡白的名牌。' +
      '她不替失蹤者立碑，只把每個名字重新念到正確方向。',
    roomId: 'marsh_of_mirrors_sinking_shrine',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '名字若只留在水裡，就會被鏡沼學去。把失路名牌交回來，至少能讓一個聲音不再被巫燈借走。',
        options: [
          { text: '小祠供品是什麼？', nextId: 'offering' },
          { text: '巫燈從哪來？', nextId: 'lantern' },
          { text: '玻璃水核心呢？', nextId: 'core' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'offering',
        text:
          '解毒草、鏡苔、失路名牌。供品不是討好水下的東西，是提醒自己哪些名字不能拿去換捷徑。',
        options: [
          { text: '巫燈從哪來？', nextId: 'lantern' },
          { text: '玻璃水核心呢？', nextId: 'core' },
        ],
      },
      {
        id: 'lantern',
        text:
          '巫燈不是人在點，是那些被鏡沼記住的求救聲。你若回應，它就知道你害怕誰沒有回來。',
        options: [
          { text: '小祠供品是什麼？', nextId: 'offering' },
          { text: '我不會回應。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text:
          '核心讓水學會複製。打碎它也許能救路，也可能讓所有倒影一起醒來。先帶回鏡核碎片，再談選擇。',
        options: [
          { text: '巫燈從哪來？', nextId: 'lantern' },
          { text: '我會帶回證據。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '走之前念一次自己的名字。若水裡的你沒有跟著念，就不要出發。',
      },
    ],
    guardianHints: {
      creature: '莫芮能分辨巫燈回聲、沉柳樹衛與玻璃水倒核心的喚醒順序。',
      treasure: '她手中的名牌串能指出失路石堆、小祠與巫燈處的錯路來源。',
      spirit: '她守護的不是祠堂，而是被鏡沼借走前的名字。',
    },
  },

redrock_caravan_quartermaster: {
    id: 'redrock_caravan_quartermaster',
    name: '哈坎',
    alias: 'quartermaster',
    title: '商隊軍需官',
    description:
      '一名滿臉風沙的軍需官守在沙塵隘口木樁旁，腳邊堆著水袋、繃帶、備用弩弦與被沙刮花的路牌。' +
      '他說話時總會先看岩脊高處，像任何交易都可能被一支箭打斷。',
    roomId: 'redrock_badlands_dust_gate',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'smoke_bomb',
      'throwing_knife',
      'red_ore_chunk',
      'cinder_crust',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '進赤岩荒地前先補水、補藥、補退路。這裡最貴的不是貨，是你還能不能把貨帶回來。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '黑旗盜匪在哪？', nextId: 'blackflag' },
          { text: '商隊怎麼遇襲？', nextId: 'caravan' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、煙霧彈、短刀、赤鐵礦塊和焦泉礦殼都有。別省煙霧彈，撤退時它比多一把刀有用。',
        action: { type: 'shop', data: { shopType: 'redrock_supply' } },
        options: [
          { text: '黑旗盜匪在哪？', nextId: 'blackflag' },
          { text: '商隊怎麼遇襲？', nextId: 'caravan' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'blackflag',
        text:
          '哨塔看路，營地分贓，黑旗瞭望點看全局。若你先打營地不拆哨塔，等於替他們敲集合鐘。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '商隊怎麼遇襲？', nextId: 'caravan' },
        ],
      },
      {
        id: 'caravan',
        text:
          '焚車殘骸還有護衛徽章沒找回來。若你看到黑旗令牌和火成核心放在一起，就不是單純劫貨。',
        options: [
          { text: '我會去查。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '進去前看高處，出來前數人數。赤岩荒地最喜歡少還一個人。',
      },
    ],
    guardianHints: {
      creature: '哈坎知道沙路劫掠者和黑旗射手通常從哪些高處開戰。',
      treasure: '他的軍需箱裡分著赤鐵礦塊、焦泉礦殼和商隊失物紀錄。',
      spirit: '他讓荒地入口仍像一條路，而不是單向的陷阱。',
    },
  },

redrock_wreck_scout: {
    id: 'redrock_wreck_scout',
    name: '雅菈',
    alias: 'scout',
    title: '焚車調查斥候',
    description:
      '一名斥候蹲在焚車殘骸旁，用炭筆記錄車輪、箭孔與狼爪痕。' +
      '她背後掛著短筒望遠鏡與破披風，披風邊緣還留著燒焦味。',
    roomId: 'redrock_badlands_burnt_wagon',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '車不是先燒的，是先被截停、拆貨、再用火靈掩痕。黑旗想讓我們以為這只是一次普通劫案。',
        options: [
          { text: '該找什麼證據？', nextId: 'evidence' },
          { text: '火靈怎麼牽進來？', nextId: 'fire' },
          { text: '附近安全嗎？', nextId: 'danger' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'evidence',
        text:
          '商隊護衛徽章、黑旗令牌、刮花望遠鏡。三樣湊齊，就能證明他們不是亂搶，是在找赤礦路線。',
        options: [
          { text: '火靈怎麼牽進來？', nextId: 'fire' },
          { text: '附近安全嗎？', nextId: 'danger' },
        ],
      },
      {
        id: 'fire',
        text:
          '火靈盆地最近太躁，像有人把焦泉礦殼和赤鐵礦塊丟進火口試東西。那不是取暖，是試爆。',
        options: [
          { text: '該找什麼證據？', nextId: 'evidence' },
          { text: '我去火口看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text:
          '白天看高處，夜裡看車底。焦鬃荒狼等屍體，黑旗射手等救屍體的人。',
        options: [
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '別把第一眼看到的箭孔當真。黑旗最會把方向做給你看。',
      },
    ],
    guardianHints: {
      creature: '雅菈能從箭孔與狼爪分辨黑旗射手、焦鬃荒狼與沙路劫掠者的行動順序。',
      treasure: '她追查商隊護衛徽章與荒地斥候望遠鏡。',
      spirit: '她把燒毀的車輪重新讀成一條仍能追下去的線索。',
    },
  },

redrock_exile_informant: {
    id: 'redrock_exile_informant',
    name: '賽洛',
    alias: 'informant',
    title: '流放者情報販',
    description:
      '一名流放者靠在洞穴鍛爐旁，披著磨掉徽記的護甲，手裡轉著一枚黑旗令牌。' +
      '他不像盜匪，卻也不像願意回到王國道路上的人。',
    roomId: 'redrock_badlands_exile_den',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text:
          '你帶黑旗來，我當你敵人；你帶護衛徽章來，我當你有問題；你兩個都沒有，我當你還能談。',
        options: [
          { text: '黑旗在找什麼？', nextId: 'blackflag' },
          { text: '決鬥石圈呢？', nextId: 'duel' },
          { text: '火口能走嗎？', nextId: 'crater' },
          { text: '只是路過。', nextId: 'farewell' },
        ],
      },
      {
        id: 'blackflag',
        text:
          '他們想用赤礦和焦泉礦殼餵火口，逼出猩紅火成核心。成功的話，這片荒地就不只是搶路了。',
        options: [
          { text: '決鬥石圈呢？', nextId: 'duel' },
          { text: '火口能走嗎？', nextId: 'crater' },
        ],
      },
      {
        id: 'duel',
        text:
          '石圈有規矩，但規矩只管站在圈裡的人。真正的威脅通常趴在圈外岩塊後面，拿著毒箭。',
        options: [
          { text: '黑旗在找什麼？', nextId: 'blackflag' },
          { text: '我懂了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crater',
        text:
          '能走，不建議。黑旗戰頭在那裡等結果，赤礦巨像和火靈也會被熱流喚醒。',
        options: [
          { text: '我會準備好。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '荒地裡別急著問誰是好人。先問誰有退路。',
      },
    ],
    guardianHints: {
      creature: '賽洛知道流放決鬥者與黑旗戰頭如何利用決鬥規則。',
      treasure: '他手上的黑旗令牌能對上營地、哨塔與火口路線。',
      spirit: '他代表赤岩荒地裡仍想活下去、但不再相信秩序的人。',
    },
  },

redrock_crater_prospector: {
    id: 'redrock_crater_prospector',
    name: '伊卓',
    alias: 'prospector',
    title: '火口勘探師',
    description:
      '一名鬍鬚燒短的勘探師站在猩紅火口邊緣，背包裡插滿礦釘、耐火瓶和裂紋測尺。' +
      '他看起來害怕火口，卻更害怕有人在他之前取走核心。',
    roomId: 'redrock_badlands_scarlet_crater',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '別敲中央裂縫。黑旗已經敲太多次，熱流快連成一條會咬人的路了。',
        options: [
          { text: '火成核心在哪？', nextId: 'core' },
          { text: '熱流會怎樣？', nextId: 'heat' },
          { text: '黑旗戰頭呢？', nextId: 'warlord' },
          { text: '我會退後。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text:
          '核心不在最大裂縫，在黑旗戰頭站過的側縫。那裡有赤礦、焦泉礦殼和巨人指印，三種痕跡疊在一起。',
        options: [
          { text: '熱流會怎樣？', nextId: 'heat' },
          { text: '黑旗戰頭呢？', nextId: 'warlord' },
        ],
      },
      {
        id: 'heat',
        text:
          '若火口再暴動，焦泉、火靈盆地和熔岩蟲陷坑會一起醒。你以為是在打一場戰鬥，其實是在踩一整張熱網。',
        options: [
          { text: '火成核心在哪？', nextId: 'core' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'warlord',
        text:
          '他不是礦工，卻知道怎麼逼礦脈吐東西。先打掉他的黑旗令牌，再看核心會不會安靜。',
        options: [
          { text: '熱流會怎樣？', nextId: 'heat' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '腳底若熱到隔著靴子都疼，別逞強。荒地不缺英雄的灰。',
      },
    ],
    guardianHints: {
      creature: '伊卓能判斷黑旗戰頭、赤礦岩巨像與熔岩蟲的熱流喚醒順序。',
      treasure: '他的裂紋測尺能指出猩紅火成核心最可能凝結的位置。',
      spirit: '他把貪婪包裝成勘探，但至少知道火口真的會反咬。',
    },
  },

sunken_catacombs_tide_surveyor: {
    id: 'sunken_catacombs_tide_surveyor',
    name: '納溫',
    alias: 'surveyor',
    title: '墓窟水位測繪員',
    description:
      '一名測繪員站在潮汐階梯上方，手裡拿著浸油繩尺與防水筆記板。' +
      '他的靴子滿是黑泥，卻仍仔細記下每一層潮痕高度。',
    roomId: 'sunken_catacombs_tide_stair',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '這座墓窟不是被外面的水淹了，是裡面的水一直往上吐。你若不記水位，回頭路會變成牆。',
        options: [
          { text: '請說明沉沒墓窟水位委託。', nextId: 'entry_intro' },
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '水閘怎麼判斷？', nextId: 'sluice' },
          { text: '深潮井是什麼？', nextId: 'well' },
          { text: '我會標記退路。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先過前廳、黑水渠和水閘控制室。不要急著進王冠墓室，先找到長明燈油和水閘齒輪。',
        options: [
          { text: '水閘怎麼判斷？', nextId: 'sluice' },
          { text: '深潮井是什麼？', nextId: 'well' },
          { text: '請帶我進入沉沒墓窟副本。', nextId: 'entry_confirm' },
        ],
      },
      {
        id: 'entry_intro',
        text:
          '我知道這座副本入口，因為水位每天都把新墓室吐到階梯旁。你進去不是單純清怪，而是要確認黑水源頭、重開水閘退路，並阻止王冠墓室把更多不死者推回入口。',
        options: [
          { text: '確認建議等級與隊伍人數。', nextId: 'entry_conditions' },
          { text: '請帶我進入沉沒墓窟副本。', nextId: 'entry_confirm' },
        ],
      },
      {
        id: 'entry_conditions',
        text:
          '建議等級二十四級以上，兩到四人比較穩。若你在隊伍裡，隊長必須站在潮汐階梯與我確認；人數過多會讓鏈橋承重失準，低等級則很容易被黑水拖住。',
        options: [
          { text: '請帶我進入沉沒墓窟副本。', nextId: 'entry_confirm' },
          { text: '我先檢查補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'entry_confirm',
        text:
          '我會把測繪繩尺固定在潮汐階梯的鐵環上，讓這次副本有一條能回到入口的水位線。進去後先聽水聲，不要等黑水淹過胸口才問出口在哪。',
        action: { type: 'instance_entry', data: { entryId: 'sunken_catacombs_sunken_catacombs_tide_surveyor_npc_entry' } },
      },
      {
        id: 'sluice',
        text:
          '三個輪盤分別管外層、漂棺和深潮。錯一個，鏈橋就會變得比怪物還危險。',
        options: [
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '我會記下潮痕。', nextId: 'farewell' },
        ],
      },
      {
        id: 'well',
        text:
          '深潮井像墓窟的喉嚨。它吐出的不是水，是一段還沒沉下去的王冠誓言。',
        options: [
          { text: '水閘怎麼判斷？', nextId: 'sluice' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '每過三間房就看一次牆上潮痕。若潮痕比你高，先想退路。',
      },
    ],
    guardianHints: {
      creature: '納溫能從水聲判斷潮浸骸兵、黑渠水蛇與黑水泥魘是否接近。',
      treasure: '他的測繪板標出水閘控制室、深潮井與王冠墓室的水位關係。',
      spirit: '他把黑水的升降變成仍可讀懂的路線。',
    },
  },
};
