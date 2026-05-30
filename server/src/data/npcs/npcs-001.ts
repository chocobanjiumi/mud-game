import type { NpcDef } from '@game/shared';

export const NPCS_PART_001: Record<string, NpcDef> = {
guild_commander: {
    id: 'guild_commander',
    name: '公會指揮官',
    alias: 'commander',
    title: '冒險者公會戰線指揮',
    description: '身披深色軍披的公會指揮官，桌上攤著魔族領地的斥候地圖。他說話簡短，目光總停在下一條補給線上。',
    roomId: 'guild_hall',
    type: 'quest',
    dialogue: [{
      id: 'greeting',
      text: '冰封城堡的情報已送到。魔族邊境需要可靠的人進去確認軍勢動向。',
      options: [{ text: '我會查看任務指示。', nextId: 'farewell' }],
    }, {
      id: 'farewell',
      text: '回來時帶上暗黑要塞大門的情報，別只帶勇氣回來。',
    }],
  },

dragon_oracle: {
    id: 'dragon_oracle',
    name: '龍族神諭者',
    alias: 'oracle',
    title: '龍谷試煉守望者',
    description: '披著鱗光長袍的龍族神諭者站在高台邊緣，金色瞳孔像在審視你的過去與未來。',
    roomId: 'dragon_oracle_perch',
    type: 'quest',
    dialogue: [{
      id: 'greeting',
      text: '凡人若想借龍族之力，必須先證明自己不是只會索求的火星。',
      options: [{ text: '我會查看龍族試煉。', nextId: 'farewell' }],
    }, {
      id: 'farewell',
      text: '去古龍聖殿，讓風與火判斷你是否值得被記住。',
    }],
  },

celestial_archon: {
    id: 'celestial_archon',
    name: '天界執政官',
    alias: 'archon',
    title: '審判大廳守門者',
    description: '天界執政官的盔甲像破曉前的星光，聲音冷靜得幾乎不帶情緒。他守著通往終焉戰場的最後命令。',
    roomId: 'judgment_hall',
    type: 'quest',
    dialogue: [{
      id: 'greeting',
      text: '封印意志已偏離守護本身。若你要進入終焉戰場，就必須承擔結果。',
      options: [{ text: '我會查看最終任務。', nextId: 'farewell' }],
    }, {
      id: 'farewell',
      text: '穿過天界之門，抵達神之間。戰神正在那裡等待最後的回答。',
    }],
  },

crystal_cave_entry_guide: {
    id: 'crystal_cave_entry_guide',
    name: '瑟琳',
    alias: 'crystal_guide',
    title: '水晶洞窟勘探嚮導',
    description: '一名戴著護目鏡的勘探嚮導站在洞口測量水晶折光，腰間掛著繩鉤、粉筆與公會封蠟地圖。她反覆檢查礦道風向，確保進洞者知道哪條亮線代表退路。',
    roomId: 'cave_entrance',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '先停在洞口，不要追著最亮的水晶走。這座洞窟會把腳步聲折到錯誤方向，我負責替公會確認隊伍、標記退路，也負責阻止沒準備好的人把自己埋進礦脈裡。',
        options: [
          { text: '請說明水晶洞窟勘探委託。', nextId: 'entry_intro' },
          { text: '確認建議等級與隊伍人數。', nextId: 'entry_conditions' },
          { text: '我先檢查補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'entry_intro',
        text: '洞窟深處的折光不是普通魔力，它會讓礦脈、地下河和水晶獸巢同時改變方向。你進去要確認三件事：標記可返回的礦道、清掉干擾勘探線的魔物、帶回能證明水晶異常來源的樣本。',
        options: [
          { text: '確認建議等級與隊伍人數。', nextId: 'entry_conditions' },
          { text: '請帶我進入水晶洞窟副本。', nextId: 'entry_confirm' },
        ],
      },
      {
        id: 'entry_conditions',
        text: '建議等級二十級以上，最好兩到四人同行。若你在隊伍中，必須由隊長開啟入口；進去後先看退路標記，不要把所有回復品留到水晶龍巢才想起來。',
        options: [
          { text: '請帶我進入水晶洞窟副本。', nextId: 'entry_confirm' },
          { text: '我先檢查補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'entry_confirm',
        text: '我會把公會封蠟按在洞口標記上，礦道只會為這支隊伍展開一次。進去後跟著粉筆記號走，若水晶開始倒映不是自己的影子，就代表你們已經接近副本深層。',
        action: { type: 'instance_entry', data: { entryId: 'crystal_cave_crystal_cave_entry_guide_npc_entry' } },
      },
      {
        id: 'farewell',
        text: '補給、繩索、退路標記，三樣少一樣都別進洞。水晶不會因為你勇敢就停止坍光。',
      },
    ],
  },

// ─── 新手村 NPC ──────────────────────────────────────────

  village_chief: {
    id: 'village_chief',
    name: '村長',
    alias: 'elder',
    title: '新手村村長',
    description: '一位白髮蒼蒼的老者，身穿深藍色長袍，面容慈祥而睿智。額頭上的皺紋記錄著數十年的風霜，但雙眼依然炯炯有神。腰間繫著一條刻有古老符文的腰帶，那是他年輕時冒險留下的紀念。',
    roomId: 'village_square',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到新手村，年輕的冒險者！我是這裡的村長。如果你是第一次來，我可以為你介紹一下這個世界。' +
          '就像一棵樹苗需要了解它紮根的土壤，冒險者也需要了解自己身處的世界。',
        options: [
          { text: '請告訴我關於這個世界的事。', nextId: 'world_intro' },
          { text: '我該怎麼變得更強？', nextId: 'get_stronger' },
          { text: '附近有什麼危險嗎？', nextId: 'dangers' },
          { text: '這座村子有什麼歷史嗎？', nextId: 'village_history' },
          { text: '我先回村口整理線索。', nextId: 'farewell' },
        ],
      },
      {
        id: 'world_intro',
        text: '這片大陸上有許多區域等待你去探索。從村外的翠綠平原開始，到暗影森林、水晶洞窟，' +
          '最終你會抵達湖畔城鎮——那裡有轉職大廳和競技場。不過要循序漸進，別急著去太危險的地方！' +
          '正所謂「千里之行，始於足下」，每一步都有它的意義。',
        options: [
          { text: '能詳細介紹各個區域嗎？', nextId: 'region_details' },
          { text: '這個世界有哪些重要勢力？', nextId: 'world_factions' },
          { text: '我該怎麼變得更強？', nextId: 'get_stronger' },
          { text: '謝謝你的介紹。', nextId: 'farewell' },
        ],
      },
      {
        id: 'region_details',
        text: '讓我一一為你說明吧。翠綠平原是離村子最近的區域，那裡有遼闊的草地和清澈的小溪，' +
          '適合初出茅廬的冒險者磨練。暗影森林則籠罩在永恆的薄霧之中，古老的樹木遮天蔽日，' +
          '據說森林深處棲息著被黑暗侵蝕的魔獸。水晶洞窟是一處地下迷宮，洞壁上的水晶會發出詭異的光芒，' +
          '裡面的怪物比地面上的要強得多。而湖畔城鎮則是冒險者們的中繼站，那裡有轉職大廳、競技場和各種商店。',
        options: [
          { text: '暗影森林聽起來很危險…', nextId: 'shadow_forest_lore' },
          { text: '水晶洞窟裡有什麼？', nextId: 'crystal_cave_lore' },
          { text: '謝謝你的介紹。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_forest_lore',
        text: '暗影森林啊……那裡曾經是精靈族的聖地，翠綠繁茂、鳥語花香。但在遠古戰爭之後，' +
          '一股黑暗力量滲透了森林的根脈，將它變成了現在的模樣。森林深處的暗影狼王，' +
          '據說是被黑暗侵蝕的古代守護獸。它的力量與日俱增，連老練的冒險者都不敢輕易深入。' +
          '不過……如果有人能淨化森林核心的暗影之源，或許一切還能恢復吧。這也是我心中的一個願望。',
        options: [
          { text: '遠古戰爭是怎麼回事？', nextId: 'ancient_war' },
          { text: '我想聽聽其他的事。', nextId: 'greeting' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crystal_cave_lore',
        text: '水晶洞窟是個神秘的地方。那些水晶並非普通礦石，而是凝聚了大地魔力的結晶。' +
          '有些學者認為，洞窟是遠古時代一場劇烈魔力爆發的產物。洞窟深處似乎有一個巨大的水晶核心，' +
          '散發著強大的能量。據探險家回報，越深入的地方，怪物越強，但也能找到越珍貴的礦石和寶物。' +
          '不過，也有人進去後就再也沒有出來……年輕人，實力不足時切勿逞強。',
        options: [
          { text: '遠古戰爭是怎麼回事？', nextId: 'ancient_war' },
          { text: '我想聽聽其他的事。', nextId: 'greeting' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ancient_war',
        text: '那是千年以前的事了……當時，光明與黑暗兩股勢力為了爭奪世界的主導權，爆發了一場席捲整片大陸的大戰。' +
          '光明陣營由人類、精靈和矮人組成，而黑暗陣營則是魔族和被腐化的生物。戰爭持續了數百年，' +
          '最終光明陣營的勇者們封印了黑暗之王，但代價極其慘重——精靈族的聖地被污染，矮人王國崩塌，' +
          '無數英雄犧牲。如今封印已過千年，有些人擔心它正在逐漸衰弱……' +
          '但這些只是老人的杞人憂天，你不必太放在心上。先把眼前的路走好吧。',
        options: [
          { text: '這個世界有哪些重要勢力？', nextId: 'world_factions' },
          { text: '這段歷史令人感慨。', nextId: 'farewell' },
        ],
      },
      {
        id: 'world_factions',
        text: '如今大陸上主要有幾股勢力。首先是「冒險者公會」，遍布各地，為冒險者提供訓練和任務，' +
          '是維持秩序的重要力量。其次是「湖畔城鎮議會」，管理著最大的中立城市。' +
          '再來是「矮人鍛造工坊」的殘部，他們在地下城市中保存著古代的鍛造技術。' +
          '還有神秘的「暗影教團」，據說他們試圖解除黑暗之王的封印……' +
          '最後是「精靈遊俠」，他們散居在各地的森林中，守護著自然的平衡。' +
          '這些勢力之間的關係錯綜複雜，你在冒險途中自然會逐漸了解的。',
        options: [
          { text: '暗影教團聽起來很危險。', nextId: 'shadow_cult_info' },
          { text: '謝謝你告訴我這些。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_cult_info',
        text: '暗影教團……確實是個令人憂心的存在。他們相信黑暗之王才是世界的真正主宰，' +
          '一直在暗中收集力量，試圖破壞封印。他們的信徒隱藏在各個角落，有時甚至混在普通人之中。' +
          '如果你在冒險途中發現了他們的蹤跡，一定要格外小心，最好通報冒險者公會。' +
          '不過……像你這樣剛起步的冒險者，暫時不會跟他們有交集的。先專注於成長吧。' +
          '等你的羽翼豐滿了，自然就有能力面對這些威脅了。',
        options: [
          { text: '我會留意的。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'village_history',
        text: '這座小村子看似平凡，卻有著悠久的歷史。它建立於遠古戰爭結束後不久，' +
          '最初是一群退役的冒險者選擇在這片安寧的土地上定居。他們種下了村中央那棵巨大的橡樹，' +
          '如今它已經有千年的歲月了。這裡之所以成為新手冒險者的起點，' +
          '是因為初代村民在村子周圍設下了古老的守護結界，讓強大的魔物無法靠近。' +
          '所以你可以放心地在這裡做好準備，再踏上旅途。',
        options: [
          { text: '初代村民是怎樣的人？', nextId: 'founders_story' },
          { text: '那棵大橡樹有什麼特別的嗎？', nextId: 'oak_tree_story' },
          { text: '謝謝你，我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'founders_story',
        text: '初代村民中有一位傳奇戰士、一位大法師和一位精靈治療師。他們在遠古戰爭中並肩作戰，' +
          '立下了赫赫戰功。戰爭結束後，他們厭倦了殺戮，決定建立一個和平的家園，' +
          '同時也為後來的年輕冒險者提供一個安全的起點。大法師設計了守護結界，' +
          '戰士的後代成為了歷代村長——沒錯，我也是那位戰士的後裔。' +
          '不過我年輕時的冒險天賦可遠不如先祖啊，哈哈。',
        options: [
          { text: '原來村長也有冒險經歷！', nextId: 'chief_past' },
          { text: '這真是一段動人的故事。', nextId: 'farewell' },
        ],
      },
      {
        id: 'chief_past',
        text: '年輕時，我也曾懷揣著冒險夢想四處闖蕩。到過暗影森林的邊緣，探索過水晶洞窟的入口，' +
          '也在湖畔城鎮的競技場上贏過幾場比賽。但我最終意識到，守護這座村子、' +
          '引導新一代的冒險者，才是我真正的使命。就像溪水終將匯入大河，每個人都有屬於自己的歸處。' +
          '你的歸處在哪裡，就由你自己去尋找吧。',
        options: [
          { text: '您的話讓我很受啟發。', nextId: 'farewell' },
          { text: '我還想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'oak_tree_story',
        text: '村中央的那棵大橡樹，其實是初代大法師用魔力培育的。它的根系深入地下，' +
          '與守護結界相連，是整個結界的核心。每到滿月之夜，如果你仔細聆聽，' +
          '還能聽到樹葉在低語——那是大法師留下的祝福之聲。有些冒險者說在橡樹下冥想能更快恢復精力，' +
          '這可能不只是傳說哦。不過，千萬別傷害那棵樹，它是守護我們所有人的根基。',
        options: [
          { text: '這棵樹真神奇。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'get_stronger',
        text: '先去訓練場練練手吧！擊敗怪物可以獲得經驗值和金幣。你一開始就已經選好初始職業，到了20級再去湖畔城鎮的轉職大廳選擇二轉方向。' +
          '記得去冒險者公會找導師學習技能，去武器店和藥水店做好準備再出發。' +
          '成長就像磨劍，需要耐心和堅持，急功近利反而容易受傷。',
        options: [
          { text: '有什麼練功的建議嗎？', nextId: 'training_tips' },
          { text: '我知道了，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_tips',
        text: '我給你幾點建議。首先，不要跳過史萊姆——它們雖然弱小，但能幫你熟悉戰鬥節奏。' +
          '其次，升到5級左右就可以去翠綠平原挑戰野狼了，它們會掉落不錯的材料。' +
          '第三，記得隨時保持藥水充足，寧可多花點金幣也不要冒險。' +
          '最後，觀察怪物的攻擊模式很重要——每種怪物都有破綻，善用「觀察」技能能讓你事半功倍。',
        options: [
          { text: '非常實用的建議！', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'dangers',
        text: '村口附近只有些史萊姆，不足為懼。但翠綠平原上有野狼和盜賊出沒，要小心。' +
          '至於暗影森林……那裡有暗影狼王，沒有足夠的實力千萬別深入！水晶洞窟更是危機四伏。' +
          '記住，勇敢不等於莽撞，知道何時撤退也是一種智慧。',
        options: [
          { text: '各區域的危險程度如何？', nextId: 'danger_levels' },
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger_levels',
        text: '讓我按危險程度排列：村子周圍（1-5級）只有史萊姆，安全得很。' +
          '翠綠平原（5-15級）有野狼、毒蛇和偶爾出現的盜賊，需要一定準備。' +
          '暗影森林（15-25級）有暗影狼、毒蜘蛛和各種被污染的生物，暗影狼王更是極為強大。' +
          '水晶洞窟（20-30級）的水晶魔像和洞穴蝙蝠群會讓經驗不足的冒險者有去無回。' +
          '年輕人，量力而行，不要為了逞英雄而白白送命。',
        options: [
          { text: '我會循序漸進的。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'farewell',
        text: '祝你冒險順利，勇敢的冒險者！如果遇到什麼困難，隨時回來找我。' +
          '記住，無論走多遠，這裡永遠是你的起點，也是你的港灣。',
      },
    ],
    guardianHints: {
      creature: '村長身邊似乎有一隻隱形的守護精靈在暗中保護他。',
      treasure: '村長的辦公桌抽屜裡鎖著一份古老的藏寶圖。',
      spirit: '村長年輕時曾是一名強大的冒險者，他隱藏了很多關於這片大陸的秘密。',
    },
  },

adventure_mentor: {
    id: 'adventure_mentor',
    name: '冒險者導師',
    alias: 'mentor',
    title: '資深冒險者',
    description: '一個身材魁梧的中年男子，古銅色的肌膚上佈滿了大大小小的戰鬥傷疤，每一道都是他引以為傲的勳章。身穿一套磨損但保養良好的皮甲，腰間別著一把短劍和一壺烈酒。說話時聲如洪鐘，爽朗的笑聲能傳遍整個公會大廳。',
    roomId: 'adventurer_guild',
    type: 'class_trainer',
    classToTeach: 'adventurer',
    dialogue: [
      {
        id: 'greeting',
        text: '喲！新來的小子嗎？我是這裡的導師，負責教導新人基礎的戰鬥技巧。' +
          '別看我現在教書，當年老子可是在暗影森林裡跟狼王單挑過的人！想學點什麼嗎？',
        options: [
          { text: '教我戰鬥技巧！', nextId: 'teach_skills' },
          { text: '轉職需要什麼條件？', nextId: 'class_info' },
          { text: '能詳細說說各職業嗎？', nextId: 'class_comparison' },
          { text: '有什麼練功路線建議？', nextId: 'leveling_route' },
          { text: '沒事，只是看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'teach_skills',
        text: '好！我就喜歡有幹勁的新人！作為冒險者，你可以學會這些基礎技能：' +
          '「揮砍」是最基本的攻擊、「防禦」能減半傷害、「急救」能回復少量HP、' +
          '「觀察」可以看穿怪物的弱點。每次升級都別忘了回來看看有沒有新技能可學！',
        action: { type: 'shop', data: { shopType: 'skills' } },
        options: [
          { text: '能教我一些戰鬥技巧嗎？', nextId: 'combat_basics' },
          { text: '謝謝指導！', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_basics',
        text: '聽好了小子，戰鬥不是蠻幹！第一，永遠注意你的HP，血量低於三成就該喝藥或撤退，' +
          '死了可就什麼都沒了。第二，善用「觀察」技能，知己知彼百戰不殆——' +
          '每種怪物都有弱點，打中弱點傷害能翻倍！第三，別小看「防禦」，關鍵時刻一個防禦能救你一命。',
        options: [
          { text: '還有更進階的技巧嗎？', nextId: 'combat_advanced' },
          { text: '受教了！', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_advanced',
        text: '進階技巧嘛……首先是「連擊節奏」——攻擊之間有個最佳間隔，掌握了能打出額外傷害。' +
          '再來是「走位」，跟怪物保持適當距離，遠程怪就貼臉打，近戰怪就風箏它。' +
          '最後是「技能連攜」，比如先「觀察」再「揮砍」，命中弱點的機率大增。' +
          '這些東西光聽沒用，去實戰中體會吧！被打幾次就懂了，哈哈！',
        options: [
          { text: '我會去實戰練習的！', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'class_info',
        text: '你創角時選的初始職業會決定前 20 級的打法。' +
          '戰士、法師、遊俠、祭司——每個職業都有不同的資源和節奏。' +
          '到了20級，再去湖畔城鎮的轉職大廳選擇二轉路線。',
        options: [
          { text: '各職業有什麼優缺點？', nextId: 'class_comparison' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_comparison',
        text: '好，讓老子給你分析分析！戰士——攻守平衡，能扛能打，適合喜歡正面硬剛的人，' +
          '缺點是缺少遠程手段。法師——魔法傷害爆炸，群體攻擊無人能敵，' +
          '但血薄皮脆，被近身就危險了。遊俠——靈活多變，遠近皆可，' +
          '擅長控制和偵查，但單體爆發力不如戰士和法師。祭司——回血保命的守護神，' +
          '隊伍中不可或缺，但單人練級會比較辛苦。',
        options: [
          { text: '你個人推薦哪個職業？', nextId: 'class_recommend' },
          { text: '我知道了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_recommend',
        text: '哈哈，你問我？我當年走的是戰士路線，一把大斧橫掃千軍，那叫一個痛快！' +
          '不過說實話，沒有最強的職業，只有最適合你的職業。' +
          '喜歡衝鋒陷陣就選戰士，喜歡運籌帷幄就選法師，' +
          '喜歡靈活作戰就選遊俠，喜歡守護同伴就選祭司。' +
          '先問問自己的心吧，小子！戰場上最可靠的，永遠是你的信念！',
        options: [
          { text: '說得好！我會好好想想。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'leveling_route',
        text: '練功路線嘛，聽好了新人！1到5級就在村子周圍刷史萊姆，熟悉操作。' +
          '5到10級去翠綠平原打野狼，經驗又多掉落又好。' +
          '10級左右會開始拿到中期工具，到了20級再去轉職大廳準備二轉，實力會有質的飛躍！',
        options: [
          { text: '轉職後呢？', nextId: 'leveling_after_class' },
          { text: '有什麼要特別注意的嗎？', nextId: 'leveling_tips' },
          { text: '明白了！', nextId: 'farewell' },
        ],
      },
      {
        id: 'leveling_after_class',
        text: '10到20級繼續在翠綠平原深處和暗影森林邊緣練。' +
          '20級以後可以二轉，也可以組隊挑戰暗影森林深處，那裡的怪物經驗值超高！' +
          '25級左右就可以嘗試水晶洞窟了，不過最好找幾個夥伴一起去。' +
          '記住，獨行俠走不遠，找到可靠的隊友才是變強的捷徑！' +
          '當年老子要不是有搭檔……算了，不說這些了。',
        options: [
          { text: '你的搭檔怎麼了？', nextId: 'partner_story' },
          { text: '我會找好隊友的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'partner_story',
        text: '……我那搭檔啊，是個天才法師，我們倆一劍一杖，打遍了整片大陸。' +
          '但有一次探索暗影森林深處時，我們遭遇了不明的黑暗力量，他為了掩護我撤退……' +
          '就再也沒有出來。我找了他很久，但什麼都沒找到。' +
          '這也是我留在這裡當導師的原因——我不想看到更多年輕人因為準備不足而遭遇不幸。' +
          '所以小子，好好訓練，別重蹈覆轍。',
        options: [
          { text: '我會記住您的教誨。', nextId: 'farewell' },
        ],
      },
      {
        id: 'leveling_tips',
        text: '幾個重點！第一，藥水永遠多帶，寧可背包裝滿也別空手出門。' +
          '第二，打不過就跑，沒什麼丟人的，活著才有機會報仇！' +
          '第三，每次升級都回來學新技能，別傻傻地只用基礎技能打到底。' +
          '第四，注意怪物的等級標示——比你高5級以上的怪，除非你有特殊裝備，否則別碰！' +
          '最後，多跟其他冒險者交流，前輩的經驗比什麼都值錢！',
        options: [
          { text: '太實用了，謝謝導師！', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'farewell',
        text: '加油練習，別偷懶啊！等你變強了，再來跟我切磋！' +
          '記住，戰場上沒有僥倖，只有實力！去吧，新人！',
      },
    ],
    guardianHints: {
      creature: '導師的實力遠超表面——他的殺氣偶爾會讓附近的小怪物不敢靠近。',
      treasure: '公會的地下室裡存放著歷代冒險者留下的傳奇裝備。',
      spirit: '導師背負著一個遺憾——他曾有一個搭檔，在暗影森林中失蹤了。',
    },
  },

blacksmith: {
    id: 'blacksmith',
    name: '鐵匠',
    alias: 'smith',
    title: '武器鍛造師',
    description: '一個肌肉發達的壯漢，赤裸的雙臂上佈滿了被爐火燙傷的舊疤。身穿厚重的皮圍裙，上面沾滿了鐵屑和煤灰。一雙粗糙的大手彷彿能徒手掰彎鐵條，臉上總是掛著豪邁的笑容。鬢角的頭髮被長年的爐火烤得微微捲曲，額頭上永遠掛著一層薄汗。',
    roomId: 'weapon_shop',
    type: 'merchant',
    shopItems: [
      'wooden_sword', 'bronze_sword', 'iron_sword',
      'wooden_scepter', 'apprentice_staff',
      'short_bow', 'long_bow',
      'wooden_shield', 'iron_shield',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎光臨！我是村裡最好的鐵匠——不，應該說方圓百里最好的！' +
          '想看看我打造的武器嗎？每一把都是我用汗水和心血鍛造出來的精心之作！',
        options: [
          { text: '讓我看看你的商品。', nextId: 'shop' },
          { text: '你能修理裝備嗎？', nextId: 'repair' },
          { text: '能給我推薦裝備嗎？', nextId: 'equipment_advice' },
          { text: '聊聊武器的事吧。', nextId: 'weapon_talk' },
          { text: '只是逛逛。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧，都是好東西！新手建議先買把趁手的武器。有了好武器，打怪才事半功倍！' +
          '這把劍可是我的得意之作——刃口鋒利得能削鐵如泥！',
        action: { type: 'shop', data: { shopType: 'weapon' } },
        options: [
          { text: '能介紹一下各種武器嗎？', nextId: 'weapon_types' },
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'repair',
        text: '修理？哈哈，這些武器可是我親手打的，哪那麼容易壞！不過如果真有需要，以後我會開放修理服務的。' +
          '好武器要愛惜，戰鬥結束後記得擦拭保養，別讓它生鏽了！',
        options: [
          { text: '好吧，讓我看看商品。', nextId: 'shop' },
          { text: '有什麼保養武器的技巧？', nextId: 'maintenance_tips' },
          { text: '再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'maintenance_tips',
        text: '保養武器嘛，說來簡單做來也不難！劍和刀每次用完都要用乾布擦掉血跡和水氣，' +
          '然後塗一層薄油防鏽。弓的話要注意弦的張力，不用的時候要卸弦。' +
          '法杖……老實說我不太懂那些魔法玩意兒，但聽說要定期用魔力潤養。' +
          '盾牌嘛，被砍凹了就拿來找我，我給你敲回去！哈哈！',
        options: [
          { text: '你對武器真了解。', nextId: 'weapon_talk' },
          { text: '謝謝你的建議。', nextId: 'farewell' },
        ],
      },
      {
        id: 'weapon_types',
        text: '好，讓我給你好好講講！劍是最萬能的武器，攻守平衡，上手也快，戰士的首選。' +
          '法杖是法師的命根子，能增幅魔力，但近戰就別想了。' +
          '弓嘛，遠程輸出利器，遊俠用起來如虎添翼，但你得練好準頭。' +
          '盾牌不算攻擊武器，但能救你一命——擋住致命一擊的時候，你就知道它有多重要了！',
        options: [
          { text: '哪種武器最適合新手？', nextId: 'newbie_weapon' },
          { text: '聽說你有鍛造秘訣？', nextId: 'forging_secrets' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'newbie_weapon',
        text: '新手嘛……如果你還沒決定職業，我推薦青銅劍，價格實惠、攻擊力也不差，' +
          '什麼場面都能應付。如果你偏向法師路線，學徒法杖是入門必備。' +
          '想玩遠程就拿把獵弓，配合「觀察」技能找弱點，傷害不輸近戰。' +
          '別忘了再配一面盾牌！不管什麼職業，多一層保護總沒錯！',
        options: [
          { text: '讓我看看商品吧。', nextId: 'shop' },
          { text: '說得好，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'equipment_advice',
        text: '裝備搭配可是門學問！首先，武器和你的職業要匹配——戰士拿法杖那不是搞笑嗎？' +
          '其次，別把所有金幣都花在武器上，防具和藥水同樣重要。' +
          '我的建議是：武器佔預算的四成，防具三成，剩下的買藥水和消耗品。' +
          '另外，別追求最貴的，適合當前等級的才是最好的！',
        options: [
          { text: '各職業推薦什麼裝備？', nextId: 'class_equipment' },
          { text: '讓我看看商品吧。', nextId: 'shop' },
          { text: '明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_equipment',
        text: '戰士——鐵劍配鐵盾，攻防一體，正面硬幹誰都不怕！' +
          '法師——學徒法杖為主，別想著拿劍，你揮不動的。' +
          '遊俠——獵弓加青銅劍，遠近都能打，靈活得很。' +
          '祭司——木杖就行，反正你的主業是奶人不是打人。再配面盾牌更穩。' +
          '不過這些只是基本搭配，等你探索到更多裝備後，組合的樂趣就來了！',
        options: [
          { text: '讓我看看商品吧。', nextId: 'shop' },
          { text: '你對裝備真有研究！', nextId: 'weapon_talk' },
          { text: '謝謝你的建議。', nextId: 'farewell' },
        ],
      },
      {
        id: 'weapon_talk',
        text: '哈哈，你想聽我聊武器？那你可找對人了！我從小就跟著爺爺打鐵，' +
          '十幾歲就能獨立鍛造一把合格的短劍。對我來說，每一塊金屬都有靈魂，' +
          '你得尊重它、理解它，它才會成為一把好武器。鍛造的時候，爐火的溫度、' +
          '錘擊的力道、淬火的時機——差一分都不行！',
        options: [
          { text: '聽說你有鍛造秘訣？', nextId: 'forging_secrets' },
          { text: '你的手藝是跟誰學的？', nextId: 'smithing_origin' },
          { text: '佩服！', nextId: 'farewell' },
        ],
      },
      {
        id: 'forging_secrets',
        text: '鍛造秘訣？嘿嘿，你還真敢問。好吧，看你順眼，告訴你一點。' +
          '第一，好鋼要經過至少七次折疊鍛打，這樣刃口才夠堅韌。' +
          '第二，淬火用的不是普通水，我用的是山泉水混合了特殊礦鹽。' +
          '第三，也是最重要的——鍛造的時候要全神貫注，心無雜念。' +
          '我爺爺說過：「你的心意會融入鐵中」。聽起來玄乎，但我親身體會過，這是真的。',
        options: [
          { text: '你的手藝是跟誰學的？', nextId: 'smithing_origin' },
          { text: '真是了不起的工藝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'smithing_origin',
        text: '我的手藝傳自我爺爺，而他的技術據說來自矮人王國的殘卷。' +
          '你知道矮人嗎？他們是天生的鍛造大師，能把星鐵和龍骨打造成傳說級的神器。' +
          '可惜矮人王國在遠古戰爭中崩塌了，大部分鍛造技術也隨之失傳。' +
          '我爺爺一輩子都在研究那些殘卷，臨終前把心得都傳給了我。' +
          '我的夢想就是有朝一日，能復原矮人的失傳鍛造法，打造出真正的神兵利器！',
        options: [
          { text: '希望你能實現夢想。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'farewell',
        text: '有空再來！記住，武器是冒險者的第二條命——好好對待你的傢伙！' +
          '下次我可能會有更好的貨色！',
      },
    ],
    guardianHints: {
      creature: '鐵匠養了一隻火蜥蜴幫忙維持爐火，牠藏在爐底很少現身。',
      treasure: '鐵匠有一把祖傳的寶劍，從不展示——據說是矮人王打造的。',
      spirit: '鐵匠的鍛造技術來自矮人王國的殘卷，他一直在嘗試復原失傳的鍛造法。',
    },
  },

herbalist: {
    id: 'herbalist',
    name: '藥師',
    alias: 'alchemist',
    title: '草藥專家',
    description: '一位戴著圓框眼鏡的年輕女性，一頭銀綠色的長髮用髮簪隨意地盤起，幾縷碎髮垂落在臉頰旁。身穿白色長袍，上面繡著各種植物的圖案，腰間掛滿了裝著不同顏色液體的小瓶子。指尖常年染著草藥的綠色汁液，空氣中總瀰漫著一股淡淡的藥草清香。',
    roomId: 'potion_shop',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'antidote', 'status_cure',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '啊，冒險者！歡迎來到我的小店。出門在外，藥水可是保命的東西——' +
          '用學術的話來說，它們是「維持生命體征穩定的必要生化補給品」。要不要帶一些？',
        options: [
          { text: '讓我看看藥水。', nextId: 'shop' },
          { text: '你有什麼推薦的嗎？', nextId: 'recommend' },
          { text: '能教我一些草藥知識嗎？', nextId: 'herb_knowledge' },
          { text: '聽說野外有毒物要注意？', nextId: 'poison_info' },
          { text: '不用了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '紅色的是生命藥水，主要成分是紅蓮花萃取液，能快速促進細胞再生。' +
          '藍色的是魔力藥水，以月光草為基底，可以補充魔力迴路中的能量。' +
          '綠色的解毒劑也很重要——它含有七種解毒草藥的複合配方，能中和大部分已知毒素。',
        action: { type: 'shop', data: { shopType: 'potion' } },
        options: [
          { text: '能詳細說說各藥品的效果嗎？', nextId: 'potion_details' },
          { text: '謝謝你的說明！', nextId: 'farewell' },
        ],
      },
      {
        id: 'potion_details',
        text: '當然可以！小型生命藥水能恢復約50點HP，適合日常戰鬥使用。' +
          '中型生命藥水恢復120點HP，建議在危急時刻使用，別浪費。' +
          '小型魔力藥水恢復30點MP，法師和祭司的必備品。' +
          '中型魔力藥水恢復80點MP，施放大型法術前記得補充。' +
          '解毒劑能清除中毒狀態，效果立竿見影。' +
          '萬能解藥則能解除大部分異常狀態，包括中毒、麻痺和沉默——這是我的得意配方。',
        options: [
          { text: '各區域該帶什麼藥品？', nextId: 'area_potions' },
          { text: '讓我買一些。', nextId: 'shop' },
          { text: '非常詳細，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '如果你打算去翠綠平原，記得帶上解毒劑。那邊的毒蛇——學名「翠鱗蝮蛇」——' +
          '會分泌一種神經毒素，不及時解毒的話會持續掉血。暗影森林的蜘蛛也會下毒。' +
          '另外，多帶幾瓶生命藥水準沒錯！以我的經驗，新手至少要帶5瓶小型生命藥水才安心。',
        options: [
          { text: '各區域該帶什麼藥品？', nextId: 'area_potions' },
          { text: '那我買一些吧。', nextId: 'shop' },
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'area_potions',
        text: '讓我按區域整理一下。村子周圍：2-3瓶小型生命藥水就夠了，史萊姆打不痛你。' +
          '翠綠平原：5瓶小型生命藥水加上3瓶解毒劑，毒蛇是最大威脅。' +
          '暗影森林：至少10瓶中型生命藥水、5瓶解毒劑、加上2瓶萬能解藥——那裡的蜘蛛會同時施加多種異常狀態。' +
          '水晶洞窟：把你能帶的全部帶上！那裡的水晶魔像攻擊力極高，而且洞窟裡有一種特殊的魔力干擾，' +
          '會讓你的MP自然流失。多帶魔力藥水是明智之舉。',
        options: [
          { text: '真是太詳細了！讓我買些藥品。', nextId: 'shop' },
          { text: '非常有用的資訊！', nextId: 'farewell' },
        ],
      },
      {
        id: 'herb_knowledge',
        text: '你對草藥有興趣？太好了，知識就是力量！這片大陸上有數百種藥用植物，' +
          '我這裡只能簡單介紹幾種最常見的。紅蓮花——生長在溫暖的水域旁，是生命藥水的核心成分。' +
          '月光草——只在夜間綻放的銀色小花，蘊含純淨的魔力能量。' +
          '七星解毒草——葉片上有七個白色斑點，是天然的解毒聖品。',
        options: [
          { text: '還有其他珍貴的草藥嗎？', nextId: 'rare_herbs' },
          { text: '你的知識從哪裡來的？', nextId: 'herb_origin' },
          { text: '很有趣，謝謝分享。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rare_herbs',
        text: '珍貴的草藥嘛……有幾種值得一提。「冰晶薄荷」生長在水晶洞窟的入口附近，' +
          '能製成抗魔藥劑，在魔力干擾環境中非常有用。' +
          '「暗影蘑菇」——別被名字嚇到——是暗影森林特產，雖然有微毒，但經過特殊處理後能製成夜視藥劑。' +
          '最珍貴的是「世界樹之淚」，據說是遠古世界樹的樹液結晶，一滴就能治癒任何傷病。' +
          '不過那已經是傳說中的東西了，我也只在古籍中讀到過。',
        options: [
          { text: '世界樹之淚真的存在嗎？', nextId: 'world_tree_tear' },
          { text: '長知識了！', nextId: 'farewell' },
        ],
      },
      {
        id: 'world_tree_tear',
        text: '根據精靈族的古籍記載，世界樹曾經矗立在大陸的中心，是所有生命力量的源頭。' +
          '遠古戰爭中它被嚴重損傷，逐漸枯萎，但從未完全死去。' +
          '有些學者認為世界樹的殘根仍然深埋在地下某處，偶爾會滲出微量的樹液。' +
          '如果真能找到「世界樹之淚」，以它為基底調配的藥劑……' +
          '理論上可以治癒任何疾病，甚至逆轉死亡。當然，這只是理論上的推測。' +
          '身為學者，我不會輕易斷言未經驗證的事物。',
        options: [
          { text: '太神奇了。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'herb_origin',
        text: '我的草藥知識嗎？說來話長。我年幼時被一位精靈族的藥師收為學徒，' +
          '在她的指導下學習了十年的草藥學和基礎煉金術。精靈族對植物的理解遠超人類——' +
          '他們能感知植物的生命脈動，知道每一片葉子、每一朵花的藥性和禁忌。' +
          '我的老師說：「每一株植物都是大地的孩子，你要用尊重的心去了解它們。」' +
          '雖然我沒有精靈的天賦，但十年的學習讓我積累了足夠的知識來經營這家小店。',
        options: [
          { text: '精靈族的藥學真厲害。', nextId: 'farewell' },
          { text: '我想問問其他的事。', nextId: 'greeting' },
        ],
      },
      {
        id: 'poison_info',
        text: '問得好！毒物防治是每位冒險者的必修課。這片大陸上常見的毒素有三類：' +
          '神經毒——翠綠平原的毒蛇分泌，會導致麻痺和持續傷害，用普通解毒劑即可解。' +
          '腐蝕毒——暗影森林的毒蜘蛛特產，會降低你的防禦力，需要萬能解藥才能完全清除。' +
          '魔力毒——水晶洞窟深處的某些魔物會施放，會擾亂你的魔力迴路，導致MP持續流失。',
        options: [
          { text: '怎麼預防中毒？', nextId: 'poison_prevention' },
          { text: '這些知識真重要。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison_prevention',
        text: '預防中毒有幾個要點。首先，戰鬥時注意觀察怪物的攻擊動作——' +
          '毒蛇咬擊前會張大嘴巴，蜘蛛噴毒前腹部會鼓起，看到這些前兆立刻閃避。' +
          '其次，可以提前服用「抗毒藥膏」塗在皮膚暴露處，能降低中毒機率。' +
          '不過我目前還沒有庫存，下次進貨時會補上。' +
          '最後，如果不慎中毒，在5秒內使用解毒劑效果最好。拖得越久，毒素擴散越深，' +
          '需要的藥量就越大。所以解毒劑一定要放在背包最容易拿到的位置！',
        options: [
          { text: '受益匪淺，讓我買些藥品吧。', nextId: 'shop' },
          { text: '謝謝你的指導！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '保重身體！記住，預防勝於治療。出門前檢查藥品是否充足，這是好的生存習慣。' +
          '受傷了記得回來補貨哦。',
      },
    ],
    guardianHints: {
      creature: '藥師店裡的某些瓶子裡裝著活的魔法蟲，用來提取毒素。',
      treasure: '藥典中記載了一種能永久提升屬性的秘藥配方，但材料極為稀有。',
      spirit: '藥師曾是精靈族的學徒，她的草藥知識遠超人類的理解範圍。',
    },
  },

starter_village_training_coach: {
    id: 'starter_village_training_coach',
    name: '赫伯',
    alias: 'coach',
    title: '訓練場教官',
    description: '一名肩膀寬厚的退役護衛站在訓練場木樁旁，腰間掛著一串用來記錄練習進度的木籌。',
    roomId: 'training_ground',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '木劍不會殺人，但壞習慣會。先把站姿、距離和撤退練好，再去跟村外的東西講道理。',
        options: [
          { text: '我想做基礎練習。', nextId: 'practice' },
          { text: '村外第一步該注意什麼？', nextId: 'outside' },
          { text: '稍後再練。', nextId: 'farewell' },
        ],
      },
      { id: 'practice', text: '拿一枚訓練場木籌，打三輪木樁，最後練一次後撤。記住，能活著退回村口的人才有下一次冒險。', options: [{ text: '村外第一步該注意什麼？', nextId: 'outside' }, { text: '我去練。', nextId: 'farewell' }] },
      { id: 'outside', text: '史萊姆弱，但會讓人放鬆。打完先看血量、再看背包，不要站在路中間數戰利品。', options: [{ text: '我想做基礎練習。', nextId: 'practice' }, { text: '記住了。', nextId: 'farewell' }] },
      { id: 'farewell', text: '把木劍放回架上。真正的武器店在西邊，不在地上。' },
    ],
    guardianHints: {
      creature: '赫伯提醒新手史萊姆與小蝙蝠只是訓練節奏，不該被改成高壓戰鬥。',
      treasure: '他會發放訓練場木籌作為基礎練習記錄。',
      spirit: '訓練場教官讓新手村的教學功能更完整。',
    },
  },

starter_village_innkeeper: {
    id: 'starter_village_innkeeper',
    name: '梅塔',
    alias: 'innkeeper',
    title: '旅人小屋掌櫃',
    description: '一名笑容溫和的掌櫃站在旅人小屋爐火旁，櫃檯上堆著便當包、乾毛巾與給新人的路線小紙條。',
    roomId: 'starter_village_inn',
    type: 'merchant',
    shopItems: ['village_lunch_bundle', 'small_hp_potion', 'small_mp_potion'],
    dialogue: [
      {
        id: 'greeting',
        text: '第一次出村前先吃點東西。空肚子打史萊姆，回來時看起來會比史萊姆還軟。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '旅人小屋能做什麼？', nextId: 'inn' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '便當包、小型生命藥水、小型資源藥水。出村不用買太多，買到背包塞滿反而走不遠。', action: { type: 'shop', data: { shopType: 'starter_village_inn' } }, options: [{ text: '旅人小屋能做什麼？', nextId: 'inn' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'inn', text: '這裡讓新人整理背包、聽路線、暖暖手。真正的危險通常不是怪物，是忘了自己還剩多少藥。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會整理。', nextId: 'farewell' }] },
      { id: 'farewell', text: '回來時記得把泥擦在門外。門內只收故事，不收泥巴。' },
    ],
    guardianHints: {
      creature: '梅塔提示新手不要在村外停留太久。',
      treasure: '她販售村製便當包與低階藥水。',
      spirit: '旅人小屋掌櫃提供新手村休整與補給感。',
    },
  },

starter_village_chapel_keeper: {
    id: 'starter_village_chapel_keeper',
    name: '艾琳',
    alias: 'keeper',
    title: '晨光禮拜堂看守',
    description: '一名年輕看守在禮拜堂窗下整理祝福線，陽光穿過彩窗落在她手中的白棉線上。',
    roomId: 'starter_village_chapel',
    type: 'merchant',
    shopItems: ['chapel_blessing_thread', 'herb', 'antidote'],
    dialogue: [
      {
        id: 'greeting',
        text: '禮拜堂不保證你不會受傷，只提醒你受傷前先準備好繃帶、草藥和回來的路。',
        options: [
          { text: '我看看祝福物。', nextId: 'shop' },
          { text: '村子的結界還在嗎？', nextId: 'ward' },
          { text: '願晨光照路。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '晨光祝福線、藥草、解毒劑。祝福線只是記號，真正救你的還是判斷。', action: { type: 'shop', data: { shopType: 'starter_village_chapel' } }, options: [{ text: '村子的結界還在嗎？', nextId: 'ward' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'ward', text: '結界還在，所以強大的魔物進不來。但結界不會替你走路，也不會替你檢查背包。', options: [{ text: '我看看祝福物。', nextId: 'shop' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若你迷路，先找鐘聲。鐘聲會比驕傲更早帶你回來。' },
    ],
    guardianHints: {
      creature: '艾琳補充新手村結界讓村內只保留低壓事件怪。',
      treasure: '她販售晨光祝福線、藥草與解毒劑。',
      spirit: '禮拜堂看守補足新手村的安全感與世界觀。',
    },
  },

starter_village_repair_tinker: {
    id: 'starter_village_repair_tinker',
    name: '波里',
    alias: 'tinker',
    title: '修補工棚匠人',
    description: '一名小個子匠人在修補工棚裡敲打鍋釘和鞋扣，工作臺旁掛滿舊靴帶與磨亮的小工具。',
    roomId: 'starter_village_crafting_shed',
    type: 'merchant',
    shopItems: ['repaired_boot_lace', 'practice_yard_chit', 'wooden_sword', 'cloth_armor'],
    dialogue: [
      {
        id: 'greeting',
        text: '新裝備不一定救命，修好的舊裝備常常可以。你要買靴帶，還是想聽我抱怨新人怎麼把鞋穿壞？',
        options: [
          { text: '我看看修補品。', nextId: 'shop' },
          { text: '修補有什麼用？', nextId: 'repair' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '修補靴帶、訓練場木籌、木劍、布甲。別笑木劍，第一把不會弄丟的武器才是好武器。', action: { type: 'shop', data: { shopType: 'starter_village_repair' } }, options: [{ text: '修補有什麼用？', nextId: 'repair' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'repair', text: '現在只是靴帶和木劍，以後就是盔甲扣、弩弦和保命的最後一顆鉚釘。從小東西開始學會檢查。', options: [{ text: '我看看修補品。', nextId: 'shop' }, { text: '我會檢查。', nextId: 'farewell' }] },
      { id: 'farewell', text: '走路別拖腳，靴底磨偏了我一眼就看得出來。' },
    ],
    guardianHints: {
      creature: '波里提示裝備準備比硬闖更重要。',
      treasure: '他販售修補靴帶、木劍與布甲等新手用品。',
      spirit: '修補匠讓新手村的工棚具備實際服務功能。',
    },
  },

// ─── 湖畔城鎮 NPC（轉職導師） ──────────────────────────

  sword_instructor: {
    id: 'sword_instructor',
    name: '武技教官',
    alias: 'swordmaster',
    title: '戰士導師',
    description: '一名身形魁梧的中年男子，身穿磨損的鐵灰色軍用鎧甲，胸口刻著王國禁衛軍的徽章。' +
      '他的臉上有一道從左眉延伸到下巴的刀疤，目光銳利如鷹，站姿挺拔得像一把出鞘的劍。' +
      '腰間佩著一柄寒光閃爍的長劍，劍柄上纏著暗紅色的舊布條。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'swordsman',
    dialogue: [
      {
        id: 'greeting',
        text: '站直了！我是武技教官。戰士之道，沒有僥倖，只有紀律與汗水。你是來混日子的，還是真心想走戰士的道路？',
        options: [
          { text: '我想了解戰士！', nextId: 'class_change_check' },
          { text: '告訴我戰士的特色。', nextId: 'class_info' },
          { text: '戰士之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '教官，能說說您的故事嗎？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '戰士的道路沒有捷徑！聽好了——戰士是近戰物理職業，攻守平衡，是戰場上的中流砥柱。' +
          '你將學會「重擊」提升單體爆發、「劍氣」進行範圍壓制、「挑釁」拉住敵人保護隊友。' +
          '轉職時會獲得力量+5、體質+5、敏捷+2的加成。屬性成長以力量和體質為主。',
        options: [
          { text: '技能樹具體是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '我決定了，走戰士之路！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '專心聽！戰士的技能分三個系統：「攻擊系」有重擊、劍氣斬、旋風斬，越後期爆發越強；' +
          '「防禦系」有格擋、鐵壁、反擊姿態，讓你成為隊伍的盾；' +
          '「戰技系」有突刺、連斬、破甲一擊，講究的是精準與連擊。' +
          '每升5級解鎖新技能，但記住——不要貪多，集中點滿一個系統再擴展！這是紀律！',
        options: [
          { text: '戰鬥風格是什麼樣的？', nextId: 'combat_style' },
          { text: '明白了，我要轉戰士！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '戰士的戰鬥風格取決於你的選擇！重劍配重甲，站在前排扛住一切——這是坦克打法。' +
          '輕劍配中甲，靠連擊和閃避打出持續傷害——這是輸出打法。' +
          '劍盾組合則是最平衡的選擇，進可攻退可守。不管哪種，記住一點——戰士不退後！',
        options: [
          { text: '我要選擇戰士！', nextId: 'class_change_check' },
          { text: '二轉路線呢？', nextId: 'advanced_info' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '到了20級，戰士可以選擇三條專精路線，這是你人生最重要的選擇之一！' +
          '「騎士」——重裝坦克，用聖盾保護隊伍；' +
          '「狂戰士」——暴力輸出，以血換傷害；' +
          '「劍聖」——技巧型戰士，高連擊高閃避。' +
          '每條路都是血汗鍛煉出來的，想好再選！',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '聽起來很棒，我要轉戰士！', nextId: 'class_change_check' },
          { text: '我再考慮看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '報告完畢，聽好了！「騎士」——防禦最強，適合喜歡保護隊友的人，缺點是輸出最低，單刷速度慢。' +
          '「狂戰士」——攻擊力頂尖，每次暴擊都像一記重炮，但防禦脆弱，操作失誤就是死。適合膽大心細的人。' +
          '「劍聖」——平衡型中的平衡型，連擊與閃避兼顧，上手難度最高但天花板也最高。' +
          '組隊首選騎士，單刷首選狂戰，競技場首選劍聖。明白了嗎！',
        options: [
          { text: '明白了，走戰士之路！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '收到，我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功不是兒戲！10級前在訓練場把基礎打好，別急著出去送死。' +
          '10到15級去翠綠平原打野狼，練習走位和格擋時機。15到20級挑戰哥布林營地，學會面對多個敵人。' +
          '20級以上進暗影森林，但絕對不要單獨行動！裝備方面，優先強化武器——攻擊就是最好的防禦。' +
          '護甲選板甲系列，鍛造店的老闆娘會給你好價錢。記住，每天都要練武一百次！',
        options: [
          { text: '教官的建議我記住了！', nextId: 'farewell' },
          { text: '我要選擇戰士！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '……哼，你也想聽老兵的故事？我曾是王國禁衛軍第一師團的統領。二十年前的那場魔物浪潮，' +
          '我帶著三百名戰士守住了王都北門。三天三夜，不曾後退一步。',
        options: [
          { text: '後來呢？', nextId: 'personal_story_2' },
          { text: '真是了不起……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '後來？三百人活下來的不到三十。我的副官、我最好的戰友……都留在了那面牆下。' +
          '戰後我辭去了統領的職位，來到這裡。與其讓下一代重蹈覆轍，不如親手教出更強的戰士。' +
          '所以我說——戰士的路沒有捷徑！每一次偷懶都可能讓你的同伴付出代價！……站直了，別給我看那種表情！',
        options: [
          { text: '我不會讓教官失望的！選擇戰士！', nextId: 'class_change_check' },
          { text: '教官……我會努力的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '讓我看看你的資質……握緊武器！站穩馬步！',
        action: { type: 'class_change', data: { classId: 'swordsman' } },
        options: [
          { text: '謝謝教官！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '劍在手中，路在腳下。記住——戰士不退後！給我每天練武一百次，少一次回來加倍！解散！',
      },
    ],
    guardianHints: {
      creature: '武技教官的劍氣偶爾會引來好鬥的元素精靈在大廳中飛舞。',
      treasure: '教官的佩劍並非凡物——那是從暗影狼王身上奪來的魔劍。',
      spirit: '武技教官曾是王國的禁衛軍統領，他因某個秘密退隱至此。',
    },
  },

magic_instructor: {
    id: 'magic_instructor',
    name: '魔法導師',
    alias: 'mage',
    title: '法師導師',
    description: '一位身披深紫色長袍的優雅女性，袍上繡滿了銀色的符文，隨著她的呼吸微微發光。' +
      '她戴著一副精緻的半月形眼鏡，手中永遠捧著一本厚重的魔法典籍，書頁會自動翻動。' +
      '她的髮色是不自然的銀白色，指尖偶爾會跳動著微小的電弧，空氣中瀰漫著古老墨水與魔力的氣息。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'mage',
    dialogue: [
      {
        id: 'greeting',
        text: '……嗯？有趣，你身上有微弱的魔力波動。根據魔法理論第三章所述，每個人天生都有魔力親和性，只是強弱不同。' +
          '你是來探索魔法的奧秘的嗎？',
        options: [
          { text: '我想成為法師！', nextId: 'class_change_check' },
          { text: '告訴我法師的特色。', nextId: 'class_info' },
          { text: '法師之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '導師，能說說您的故事嗎？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '有趣的問題，讓我為你闡述。法師是遠程魔法職業，擅長元素攻擊與範圍控制。' +
          '火球術、冰霜新星、雷擊——每一招都能改變戰局。根據我的研究，法師在團隊中的輸出貢獻通常佔40%以上。' +
          '不過法師的體質較弱，這是魔力親和性的代價。轉職會獲得智力+8、體質+2、敏捷+1、幸運+1的加成。',
        options: [
          { text: '技能樹具體是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '我決定了，轉職法師！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '啊，這正是我最喜歡講解的部分！法師的技能體系分為三大元素學派：' +
          '「火焰系」——火球、烈焰風暴、隕石術，追求極致的爆發傷害；' +
          '「冰霜系」——冰箭、冰霜新星、暴風雪，兼具傷害與減速控制；' +
          '「雷電系」——雷擊、連鎖閃電、雷霆風暴，擅長多目標連鎖傷害。' +
          '根據魔法理論第七章的記載，專精單一學派比分散學習效率高出67%。當然，這個數據我親自驗證過。',
        options: [
          { text: '戰鬥中法師應該怎麼打？', nextId: 'combat_style' },
          { text: '明白了，我要轉法師！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '法師的戰鬥哲學可以用一句話概括——在敵人碰到你之前，結束戰鬥。' +
          '保持距離是第一要務，善用冰霜系的減速技能控制敵人的接近速度。' +
          'MP管理是法師的生命線，戰鬥前務必攜帶足夠的魔力藥水。' +
          '組隊時站在坦克身後，優先清除小怪，再集火Boss。記住——死掉的法師輸出為零，活著才是最大的DPS。',
        options: [
          { text: '我要轉職法師！', nextId: 'class_change_check' },
          { text: '二轉路線呢？', nextId: 'advanced_info' },
          { text: '了解了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '法師的三條專精路線各有千秋，讓我詳細分析：' +
          '「大法師」——元素大師，範圍毀滅，是純粹的輸出機器；' +
          '「暗黑術士」——DoT與控制，持續壓制敵人，擅長消耗戰；' +
          '「時空術士」——操控時間，控場與輔助並重，是最稀有也最受歡迎的專精。',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '我要走魔法之路！', nextId: 'class_change_check' },
          { text: '我再考慮看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '讓我用數據說話。「大法師」——爆發最強，範圍清怪效率第一，但MP消耗極大，單體能力偏弱。適合喜歡看滿屏數字的人。' +
          '「暗黑術士」——持續傷害之王，一個人能同時壓制多個敵人，但需要耐心，爆發不如大法師。PvP中非常強勢。' +
          '「時空術士」——最全面的專精，能加速隊友、減速敵人、甚至短暫回溯時間。輸出不是最高，但團隊貢獻無可替代。' +
          '根據我的統計，高端副本組隊率：時空術士>大法師>暗黑術士。但競技場勝率：暗黑術士>時空術士>大法師。有趣吧？',
        options: [
          { text: '分析得太透徹了！轉職法師！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '我需要消化一下這些資訊。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '作為你的導師，我必須強調——法師練功的核心是效率，不是蠻幹。' +
          '10到15級在翠綠平原用火球術練習精準施法，一發一隻，不要浪費MP。' +
          '15到20級去平原深處打成群的怪物，練習範圍技能的時機。20級以上可以進暗影森林，但一定要帶足魔力藥水。' +
          '裝備方面，優先提升智力的法杖和增加MP上限的飾品。鍛造店有賣基礎法杖，但真正好的裝備要從副本中獲取。' +
          '對了，記得每天閱讀魔法典籍——知識就是力量，這不是比喻。',
        options: [
          { text: '導師的教導我銘記在心！', nextId: 'farewell' },
          { text: '我要轉職法師！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '我的故事嗎？嗯，也不是不能說。我曾是皇家魔法學院的首席研究員，專攻時空魔法理論。' +
          '十五年前，我在一次實驗中觸碰到了時間之流的邊界……看到了一些不該看到的東西。',
        options: [
          { text: '您看到了什麼？', nextId: 'personal_story_2' },
          { text: '聽起來很深奧……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '……我看到了這片大陸可能的未來。不，應該說是「其中一個」未來。那個未來裡，黑暗吞噬了一切。' +
          '我離開了學院，來到這裡培養新一代的法師。因為我相信——知識傳承下去，未來就還有被改寫的可能。' +
          '不過這些都是理論推測，你不必放在心上。呵呵，我又賣弄學問了，是吧？',
        options: [
          { text: '導師，我願意學習魔法改變未來！', nextId: 'class_change_check' },
          { text: '導師……謝謝您告訴我這些。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '魔力的波動……讓我感受一下你的潛力。嗯，根據魔法理論第十二章的評估標準……有趣。',
        action: { type: 'class_change', data: { classId: 'mage' } },
        options: [
          { text: '感謝導師！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '知識就是力量，而魔法是知識的極致表現。去吧，願魔法之光照亮你前行的道路。記得多讀書。',
      },
    ],
    guardianHints: {
      creature: '魔法導師周圍的空氣偶爾扭曲——那是她召喚物在另一個維度中巡邏。',
      treasure: '導師的魔法書中夾著一張世界地圖，標記著幾處未知的魔力節點。',
      spirit: '魔法導師能感應到時間之流的異常，她似乎知道一些關於未來的事。',
    },
  },
};
