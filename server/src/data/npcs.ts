// NPC 定義 - 所有 NPC 與對話樹

import type { NpcDef } from '@game/shared';

export const NPCS: Record<string, NpcDef> = {

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
          { text: '告辭了。', nextId: 'farewell' },
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
        text: '初代村民中有一位傳奇劍士、一位大法師和一位精靈治療師。他們在遠古戰爭中並肩作戰，' +
          '立下了赫赫戰功。戰爭結束後，他們厭倦了殺戮，決定建立一個和平的家園，' +
          '同時也為後來的年輕冒險者提供一個安全的起點。大法師設計了守護結界，' +
          '劍士的後代成為了歷代村長——沒錯，我也是那位劍士的後裔。' +
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
        text: '先去訓練場練練手吧！擊敗怪物可以獲得經驗值和金幣。等你到了10級，就可以去湖畔城鎮的轉職大廳選擇職業了。' +
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
        text: '等你到了10級，就可以去湖畔城鎮的轉職大廳選擇你的道路。' +
          '劍士、法師、遊俠、祭司——每個職業都有不同的玩法。' +
          '好好考慮自己想走的路線吧！不過別想太多，選了不合適以後還能調整。',
        options: [
          { text: '各職業有什麼優缺點？', nextId: 'class_comparison' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_comparison',
        text: '好，讓老子給你分析分析！劍士——攻守平衡，能扛能打，適合喜歡正面硬剛的人，' +
          '缺點是缺少遠程手段。法師——魔法傷害爆炸，群體攻擊無人能敵，' +
          '但血薄皮脆，被近身就危險了。遊俠——靈活多變，遠近皆可，' +
          '擅長控制和偵查，但單體爆發力不如劍士和法師。祭司——回血保命的守護神，' +
          '隊伍中不可或缺，但單人練級會比較辛苦。',
        options: [
          { text: '你個人推薦哪個職業？', nextId: 'class_recommend' },
          { text: '我知道了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_recommend',
        text: '哈哈，你問我？我當年走的是劍士路線，一把大劍橫掃千軍，那叫一個痛快！' +
          '不過說實話，沒有最強的職業，只有最適合你的職業。' +
          '喜歡衝鋒陷陣就選劍士，喜歡運籌帷幄就選法師，' +
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
          '到了10級趕緊去轉職，轉職後實力會有質的飛躍！',
        options: [
          { text: '轉職後呢？', nextId: 'leveling_after_class' },
          { text: '有什麼要特別注意的嗎？', nextId: 'leveling_tips' },
          { text: '明白了！', nextId: 'farewell' },
        ],
      },
      {
        id: 'leveling_after_class',
        text: '轉職後10到20級繼續在翠綠平原深處和暗影森林邊緣練。' +
          '20級以後可以組隊挑戰暗影森林深處，那裡的怪物經驗值超高！' +
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
      'wooden_staff', 'apprentice_staff',
      'short_bow', 'hunting_bow',
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
        text: '好，讓我給你好好講講！劍是最萬能的武器，攻守平衡，上手也快，劍士的首選。' +
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
        text: '裝備搭配可是門學問！首先，武器和你的職業要匹配——劍士拿法杖那不是搞笑嗎？' +
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
        text: '劍士——鐵劍配鐵盾，攻防一體，正面硬幹誰都不怕！' +
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

  // ─── 湖畔城鎮 NPC（轉職導師） ──────────────────────────

  sword_instructor: {
    id: 'sword_instructor',
    name: '劍術教官',
    alias: 'swordmaster',
    title: '劍士導師',
    description: '一名身形魁梧的中年男子，身穿磨損的鐵灰色軍用鎧甲，胸口刻著王國禁衛軍的徽章。' +
      '他的臉上有一道從左眉延伸到下巴的刀疤，目光銳利如鷹，站姿挺拔得像一把出鞘的劍。' +
      '腰間佩著一柄寒光閃爍的長劍，劍柄上纏著暗紅色的舊布條。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'swordsman',
    dialogue: [
      {
        id: 'greeting',
        text: '站直了！我是劍術教官。劍士之道，沒有僥倖，只有紀律與汗水。你是來混日子的，還是真心想走劍士的道路？',
        options: [
          { text: '我想成為劍士！', nextId: 'class_change_check' },
          { text: '告訴我劍士的特色。', nextId: 'class_info' },
          { text: '劍士之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '教官，能說說您的故事嗎？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '劍士的道路沒有捷徑！聽好了——劍士是近戰物理職業，攻守平衡，是戰場上的中流砥柱。' +
          '你將學會「重擊」提升單體爆發、「劍氣」進行範圍壓制、「挑釁」拉住敵人保護隊友。' +
          '轉職時會獲得力量+5、體質+5、敏捷+2的加成。屬性成長以力量和體質為主。',
        options: [
          { text: '技能樹具體是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '我決定了，轉職劍士！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '專心聽！劍士的技能分三個系統：「攻擊系」有重擊、劍氣斬、旋風斬，越後期爆發越強；' +
          '「防禦系」有格擋、鐵壁、反擊姿態，讓你成為隊伍的盾；' +
          '「戰技系」有突刺、連斬、破甲一擊，講究的是精準與連擊。' +
          '每升5級解鎖新技能，但記住——不要貪多，集中點滿一個系統再擴展！這是紀律！',
        options: [
          { text: '戰鬥風格是什麼樣的？', nextId: 'combat_style' },
          { text: '明白了，我要轉劍士！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '劍士的戰鬥風格取決於你的選擇！重劍配重甲，站在前排扛住一切——這是坦克打法。' +
          '輕劍配中甲，靠連擊和閃避打出持續傷害——這是輸出打法。' +
          '劍盾組合則是最平衡的選擇，進可攻退可守。不管哪種，記住一點——劍士不退後！',
        options: [
          { text: '我要轉職劍士！', nextId: 'class_change_check' },
          { text: '二轉路線呢？', nextId: 'advanced_info' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '到了30級，劍士可以選擇三條專精路線，這是你人生最重要的選擇之一！' +
          '「騎士」——重裝坦克，用聖盾保護隊伍；' +
          '「狂戰士」——暴力輸出，以血換傷害；' +
          '「劍聖」——技巧型劍士，高連擊高閃避。' +
          '每條路都是血汗鍛煉出來的，想好再選！',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '聽起來很棒，我要轉劍士！', nextId: 'class_change_check' },
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
          { text: '明白了，轉職劍士！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '收到，我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功不是兒戲！10級前在訓練場把基礎打好，別急著出去送死。' +
          '10到15級去翠綠平原打野狼，練習走位和格擋時機。15到20級挑戰哥布林營地，學會面對多個敵人。' +
          '20級以上進暗影森林，但絕對不要單獨行動！裝備方面，優先強化武器——攻擊就是最好的防禦。' +
          '護甲選板甲系列，鍛造店的老闆娘會給你好價錢。記住，每天都要練劍一百次！',
        options: [
          { text: '教官的建議我記住了！', nextId: 'farewell' },
          { text: '我要轉職劍士！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '……哼，你也想聽老兵的故事？我曾是王國禁衛軍第一師團的統領。二十年前的那場魔物浪潮，' +
          '我帶著三百名劍士守住了王都北門。三天三夜，不曾後退一步。',
        options: [
          { text: '後來呢？', nextId: 'personal_story_2' },
          { text: '真是了不起……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '後來？三百人活下來的不到三十。我的副官、我最好的戰友……都留在了那面牆下。' +
          '戰後我辭去了統領的職位，來到這裡。與其讓下一代重蹈覆轍，不如親手教出更強的劍士。' +
          '所以我說——劍士的路沒有捷徑！每一次偷懶都可能讓你的同伴付出代價！……站直了，別給我看那種表情！',
        options: [
          { text: '我不會讓教官失望的！轉職劍士！', nextId: 'class_change_check' },
          { text: '教官……我會努力的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '讓我看看你的資質……拔劍！站穩馬步！',
        action: { type: 'class_change', data: { classId: 'swordsman' } },
        options: [
          { text: '謝謝教官！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '劍在手中，路在腳下。記住——劍士不退後！給我每天練劍一百次，少一次回來加倍！解散！',
      },
    ],
    guardianHints: {
      creature: '劍術教官的劍氣偶爾會引來好鬥的元素精靈在大廳中飛舞。',
      treasure: '教官的佩劍並非凡物——那是從暗影狼王身上奪來的魔劍。',
      spirit: '劍術教官曾是王國的禁衛軍統領，他因某個秘密退隱至此。',
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

  ranger_instructor: {
    id: 'ranger_instructor',
    name: '遊俠教練',
    alias: 'ranger',
    title: '遊俠導師',
    description: '一個膚色黝黑、身材精瘦的青年男子，穿著一身墨綠色的皮甲，上面沾著草葉和泥土的痕跡。' +
      '他靠在牆邊，嘴裡叼著一根草莖，眼神慵懶卻透著機敏。背上斜掛一把樸素的長弓，箭筒裡的箭羽是鷹隼的翎毛。' +
      '他的左手腕上纏著一條編織的藤蔓手環，仔細看會發現那藤蔓還是活的，偶爾會微微蠕動。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'ranger',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿，你的步伐不錯嘛——像林間的小鹿，有點靈氣但還不夠沉穩。想成為遊俠？' +
          '就像風中的箭一樣自由……速度與精準，就是我們的信條。',
        options: [
          { text: '我想成為遊俠！', nextId: 'class_change_check' },
          { text: '告訴我遊俠的特色。', nextId: 'class_info' },
          { text: '遊俠之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '教練，你是怎麼成為遊俠的？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '遊俠啊，怎麼說呢——就像一陣穿過樹梢的風，抓不住但無處不在。' +
          '遊俠是敏捷型職業，高閃避高暴擊。精準射擊百發百中，快速移動讓敵人追不上。' +
          '還能用毒箭和陷阱來消耗敵人。轉職會獲得敏捷+8、力量+2、體質+1、幸運+1的加成。' +
          '屬性成長嘛，敏捷為王，幸運次之。',
        options: [
          { text: '技能樹是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '就是它了，轉職遊俠！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '嘿嘿，這個我喜歡聊。遊俠的技能就像森林裡的三條小徑，條條通幽：' +
          '「射擊系」——精準射擊、多重箭、穿透箭，遠程輸出的核心；' +
          '「陷阱系」——捕獸夾、毒霧陷阱、爆炸陷阱，打獵和打架都好用；' +
          '「野性系」——鷹眼、疾風步、自然治癒，提升你的生存和偵察能力。' +
          '聽聽森林在說什麼——它會告訴你該走哪條路。',
        options: [
          { text: '遊俠的戰鬥方式呢？', nextId: 'combat_style' },
          { text: '好，我要轉遊俠！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '遊俠的戰鬥方式？簡單——不被打到就行了。哈哈，開玩笑的，但也不全是。' +
          '保持距離，用射擊消耗敵人的血量。如果敵人靠近，用陷阱和疾風步拉開距離。' +
          '遊俠最大的優勢是先手——在敵人發現你之前，你的箭已經射出去了。' +
          '單打獨鬥我們是最強的，因為沒人追得上我們。就像河裡的魚，你看得到但抓不住。',
        options: [
          { text: '我要轉職遊俠！', nextId: 'class_change_check' },
          { text: '二轉有哪些路線？', nextId: 'advanced_info' },
          { text: '明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '遊俠有三條專精道路，就像森林裡的三條分岔路，各通向不同的風景：' +
          '「神射手」——遠程爆發，精準狙殺，一箭定江山；' +
          '「刺客」——潛行暗殺，單體爆發，無聲無息；' +
          '「馴獸師」——召喚夥伴，人寵協同作戰，永遠不孤單。',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '我要成為遊俠！', nextId: 'class_change_check' },
          { text: '容我考慮一下。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '好嘞，讓我像導遊一樣帶你逛逛這三條路。「神射手」——站得遠遠的，一箭一個，爽快！' +
          '缺點是近身就廢了，而且對移動目標的命中率要靠操作。喜歡狙擊的人首選。' +
          '「刺客」——從暗影中出擊，一擊必殺，超級帥！但如果一擊沒殺死……就有點尷尬了。適合有耐心蹲伏的人。' +
          '「馴獸師」——你會有一隻忠誠的夥伴，可以是狼、鷹甚至熊！練級最輕鬆，適合喜歡動物的人。' +
          '我個人嘛？我三條路都走過一點，哈哈——遊俠就是要自由嘛。',
        options: [
          { text: '太棒了，轉職遊俠！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功建議啊？最重要的一條——走出去。遊俠不是在訓練場練出來的，是在荒野中磨出來的。' +
          '10到15級去翠綠平原打野狼，練習移動中射擊。記住，站著不動的遊俠不是好遊俠。' +
          '15到20級去向日葵田和林間空地，學習布置陷阱和利用地形。哥布林是很好的練習對象——牠們夠笨但數量多。' +
          '20級以上去暗影森林，那裡才是遊俠的真正課堂。裝備的話，弓是命根子，到老獵人那邊買把好弓。' +
          '皮甲就好，重甲會影響你的速度——對遊俠來說，速度就是生命。',
        options: [
          { text: '教練的話我記住了！', nextId: 'farewell' },
          { text: '我要轉職遊俠！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '我啊？嘿嘿，你還是第一個問我這個的。我從小在暗影森林裡長大，是森林裡的精靈把我養大的。' +
          '沒有父母，不知道自己從哪來，但森林就是我的家。十歲那年我射下了第一隻鷹——然後哭了一整天。',
        options: [
          { text: '後來呢？', nextId: 'personal_story_2' },
          { text: '和精靈一起長大？好酷……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '後來精靈們告訴我，要真正理解森林，就要走出去看看森林以外的世界。所以我離開了。' +
          '在外面闖蕩了十年，走遍了大陸的每一個角落。然後我回來了，來到這裡教人成為遊俠。' +
          '因為我發現——最自由的人，是有能力保護自己所珍惜的東西的人。' +
          '嘿，別看我這麼隨便的樣子，我可是認真的哦。就像風看起來無形，但它能吹動整片森林。',
        options: [
          { text: '教練，我要成為像你一樣的遊俠！', nextId: 'class_change_check' },
          { text: '謝謝你告訴我這些。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '來，射一箭讓我看看你的準頭——對準那邊牆上的蘋果。放輕鬆，像呼吸一樣自然。',
        action: { type: 'class_change', data: { classId: 'ranger' } },
        options: [
          { text: '多謝教練！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '風是自由的，遊俠也是。去吧，像風一樣奔跑，像鷹一樣觀察。記住——森林永遠歡迎你回來。',
      },
    ],
    guardianHints: {
      creature: '遊俠教練的鷹眼比你想像的更敏銳——他已經注意到遠處潛伏的危險。',
      treasure: '教練的箭筒裡有一支箭頭發光的特殊箭矢，那不是普通的箭。',
      spirit: '遊俠教練曾在暗影森林中獨自生活了十年，他與森林的精靈有著不為人知的約定。',
    },
  },

  temple_priest: {
    id: 'temple_priest',
    name: '神殿祭司',
    alias: 'priest',
    title: '祭司導師',
    description: '一位身著潔白聖袍的溫柔女性，聖袍上以金線繡著太陽與星辰的圖案，在光線下熠熠生輝。' +
      '她的面容平和而慈祥，淺褐色的長髮上戴著一頂簡樸的銀質頭冠，嵌著一顆溫潤的月光石。' +
      '她的雙手交疊在胸前，指尖總是散發著淡淡的金色光暈，彷彿隨時準備治癒每一個靠近的傷者。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'priest',
    dialogue: [
      {
        id: 'greeting',
        text: '願神光庇佑你，旅人。我是神殿的祭司。我感受到你心中有一份溫柔的力量……' +
          '你是否聽到了聖光的召喚？每一個來到這裡的人，都是被指引而來的。',
        options: [
          { text: '我想成為祭司！', nextId: 'class_change_check' },
          { text: '告訴我祭司的特色。', nextId: 'class_info' },
          { text: '祭司之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '祭司大人，能聽聽您的故事嗎？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '祭司是治療與輔助的職業，是隊伍中不可或缺的守護者。每一個生命都值得被守護——這是祭司的信念。' +
          '你將學會「治癒」恢復同伴的生命、「淨化」解除負面狀態、「祝福」提升隊友的能力。' +
          '轉職會獲得智力+5、體質+3、幸運+3、敏捷+1的加成。屬性成長以智力和體質為主。',
        options: [
          { text: '技能樹是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '我願意走這條路，轉職祭司！', nextId: 'class_change_check' },
          { text: '讓我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '願我能為你點亮前路。祭司的技能分為三個聖典：' +
          '「治癒聖典」——治癒術、群體治療、復活術，是守護生命的根本；' +
          '「祝福聖典」——祝福、神聖護盾、生命連結，強化隊友的能力與防禦；' +
          '「審判聖典」——聖光彈、神聖懲戒、聖光爆發，即使是祭司也有制裁邪惡的力量。' +
          '每一個技能都承載著慈悲與力量，選擇哪條路，就看你想如何守護你珍視的人。',
        options: [
          { text: '祭司在戰鬥中怎麼定位？', nextId: 'combat_style' },
          { text: '我要成為祭司！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '祭司的戰鬥定位是隊伍的生命線。你不需要站在最前面，但你要看到每一個人。' +
          '優先保證坦克的血量，然後注意全隊的狀態——中毒、詛咒、虛弱，都需要你及時淨化。' +
          '在緊急時刻，神聖護盾能救下瀕死的隊友。記住，祭司的存活比任何人都重要——' +
          '因為如果你倒下了，整個隊伍都會隨之崩潰。這不是自私，這是責任。願聖光給你勇氣。',
        options: [
          { text: '我要轉職祭司！', nextId: 'class_change_check' },
          { text: '二轉有哪些路線？', nextId: 'advanced_info' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '祭司可以選擇三條專精之路，每一條都是神聖的使命：' +
          '「神官」——純治療，團隊的守護者，是最受歡迎的夥伴；' +
          '「德魯伊」——融合自然與聖光，能治療也能輸出，是平衡之道；' +
          '「審判者」——攻擊型祭司，以聖光為劍制裁邪惡，是正義的化身。',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '我要追隨光明！', nextId: 'class_change_check' },
          { text: '我需要再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '每一條路都有聖光的指引，讓我為你說明。「神官」——治療能力最強，團隊副本中永遠被需要。' +
          '但單獨練級會比較辛苦，因為攻擊力較低。適合有耐心、喜歡支援他人的孩子。' +
          '「德魯伊」——能治療能輸出，自然魔法與聖光融合，練級和組隊都不錯。' +
          '但兩邊都不是最強的，是「萬金油」型的存在。適合喜歡自由切換角色的人。' +
          '「審判者」——攻擊力不輸法師，同時保有基礎治療能力。單刷最快，但在高端副本中會被要求切回治療。' +
          '無論選擇哪條路，都不要忘記祭司的本心——守護與慈悲。',
        options: [
          { text: '我決定了，轉職祭司！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '感謝祭司大人的指引。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功的建議嗎？願聖光照亮你的修行之路。10到15級在翠綠平原練習，祭司初期可以用聖光彈打怪，雖然慢一些但很安全。' +
          '15到20級，我建議你找一位劍士或遊俠組隊——你負責治療，對方負責輸出，雙方都能快速成長。' +
          '20級以上進暗影森林，祭司在那裡非常受歡迎，因為暗影系怪物害怕聖光。' +
          '裝備方面，選擇增加智力和MP上限的法杖與布甲。祝福之戒是祭司的必備飾品，能大幅提升治療效果。' +
          '記住，不要因為練級慢就氣餒——祭司的價值在隊伍中才能真正體現。每一個被你治癒的同伴，都是你的勳章。',
        options: [
          { text: '祭司大人的教導我銘記在心！', nextId: 'farewell' },
          { text: '我要轉職祭司！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '我的故事嗎？……很久以前，我只是一個普通的村莊女孩。那年瘟疫席捲了我的家鄉，' +
          '我的父母、鄰居、朋友……一個接一個地離開了。我什麼都做不了，只能看著他們受苦。',
        options: [
          { text: '後來您是怎麼成為祭司的？', nextId: 'personal_story_2' },
          { text: '那一定很痛苦……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '在最絕望的時候，一位路過的老祭司救了我和剩下的幾個孩子。他用聖光治癒了我們的身體，也治癒了我的心。' +
          '從那天起，我發誓要學會這份力量，讓更多的人不必經歷我曾經的無助。' +
          '成為祭司不是因為我有多強大，而是因為我太了解失去的痛苦。' +
          '每一個生命都值得被守護，孩子——這不是口號，這是我用一生去實踐的信念。願聖光也庇佑你所珍愛的人。',
        options: [
          { text: '祭司大人，我要追隨您的腳步！轉職祭司！', nextId: 'class_change_check' },
          { text: '謝謝您分享這些……我會記住的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '閉上眼睛，將雙手放在心口……感受聖光的流動。讓它充滿你的全身……很好，很好。',
        action: { type: 'class_change', data: { classId: 'priest' } },
        options: [
          { text: '感謝祭司大人！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願聖光永遠照耀你的前路。無論選擇什麼道路，都要心存善念，守護你身邊的每一個人。去吧，孩子，聖光與你同在。',
      },
    ],
    guardianHints: {
      creature: '祭司的聖光結界能驅逐黑暗生物——在她身旁，暗屬性怪物會變得虛弱。',
      treasure: '神殿的祭壇下藏著一件聖物，只有真正的信徒才能觸碰。',
      spirit: '祭司能看見死者的靈魂，這座大廳裡徘徊著許多迷失的英靈。',
    },
  },
  // ─── 翠綠平原 NPC ───────────────────────────────────────

  old_hunter: {
    id: 'old_hunter',
    name: '老獵人',
    alias: 'hunter',
    title: '資深獵手',
    description: '一位飽經風霜的老獵人，身穿磨損發白的皮甲，上面佈滿了爪痕和補丁。他的臉龐被常年的風吹日曬刻出了深深的皺紋，一雙銳利的鷹眼彷彿能看穿叢林中最隱蔽的獵物。腰間掛著一串風乾的狼牙，那是他四十年狩獵生涯的勳章。',
    roomId: 'hunter_lodge',
    type: 'merchant',
    shopItems: [
      'short_bow', 'hunting_bow', 'antidote',
      'small_hp_potion', 'medium_hp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '嗯？有客人啊。我是這片平原的老獵人，在這山林裡打獵四十多年了。' +
          '你要是需要獵具或者想知道附近的獸群情報，問我就對了。',
        options: [
          { text: '我想看看你的獵具。', nextId: 'shop' },
          { text: '能教我追蹤獵物嗎？', nextId: 'tracking' },
          { text: '附近有什麼危險的獵物？', nextId: 'dangerous_prey' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '來看看吧，都是我精心挑選的好東西。弓弦是用雪狼筋製的，結實耐用。' +
          '出門打獵前記得帶足藥水和解毒劑——平原上的毒蛇可不講道理。',
        action: { type: 'shop', data: { shopType: 'hunting' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tracking',
        text: '追蹤獵物的訣竅在於觀察。看地上的腳印、折斷的樹枝、還有空氣中的氣味。' +
          '野狼會在樹上留下爪痕標記領地，看到那種痕跡就要提高警覺。' +
          '記住——在森林裡，你不是唯一的獵人。',
        options: [
          { text: '受教了。', nextId: 'farewell' },
          { text: '附近有什麼危險的獵物？', nextId: 'dangerous_prey' },
        ],
      },
      {
        id: 'dangerous_prey',
        text: '向日葵田那邊有田鼠和烏鴉，不算危險。但再往北的森林裡，我曾見過一頭銀白色的狼王……' +
          '那傢伙不是普通獵人能對付的。還有那些哥布林，最近越來越囂張了，你要小心。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧，記得風向——順風接近獵物，逆風觀察敵情。老獵人的忠告。',
      },
    ],
    guardianHints: {
      creature: '老獵人的獵犬看似懶散，實則警覺性極高——牠能嗅到方圓百公尺內的危險。',
      treasure: '壁爐上方那把看似老舊的獵弓，實際上是傳說中的「風語者」——能聽見風中的獵物氣息。',
      spirit: '老獵人眼中偶爾閃過深沉的哀傷，據說他的搭檔在多年前的一次狩獵中失蹤在暗影森林深處。',
    },
  },

  // ─── 湖畔城鎮擴充 NPC ─────────────────────────────────

  bartender: {
    id: 'bartender',
    name: '酒保',
    alias: 'bartender',
    title: '酒館老闆',
    description: '一個魁梧壯碩的中年男人，臂膀粗壯如同小樹幹，袖子永遠捲到肘關節以上。他的光頭油亮，臉上留著修剪整齊的絡腮鬍，一條橫貫左眼的舊傷疤暗示著他並非一輩子都在擦杯子。圍裙上沾滿了酒漬和油污，但那雙手擦拭酒杯時卻靈巧得令人驚訝。',
    roomId: 'tavern',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎光臨「醉龍亭」！我是這兒的酒保。來一杯解解乏？' +
          '或者你想聽聽最近的消息？在這酒館裡，什麼情報都能打聽到。',
        options: [
          { text: '來點吃的喝的。', nextId: 'shop' },
          { text: '有什麼有趣的消息嗎？', nextId: 'rumors' },
          { text: '不用了，就坐坐。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '這是今天的菜單。我們的麥酒可是用湖畔最好的麥子釀的，冒險者們的最愛。' +
          '另外也有一些藥水，出門冒險前補給一下總沒壞處。',
        action: { type: 'shop', data: { shopType: 'tavern' } },
        options: [
          { text: '謝了老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rumors',
        text: '最近的消息嘛……聽說水晶洞窟深處出現了一條水晶龍，好幾支冒險隊進去就沒回來。' +
          '還有，北邊的冰封雪原似乎有異動，雪狼群開始南移了——可能有什麼東西把牠們趕了出來。' +
          '對了，角落那桌的傢伙說他在湖底看到了古代遺跡的入口……不過他喝了不少，真假難辨。',
        options: [
          { text: '有意思，來杯酒聽更多。', nextId: 'shop' },
          { text: '謝謝情報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '慢走啊！下次路過記得來坐坐，好故事配好酒，人生一大樂事。',
      },
    ],
    guardianHints: {
      creature: '角落裡那位沉默的飲客散發著不尋常的氣息——他可能是一位隱退的傳奇冒險者。',
      treasure: '吧台下方有一排落了灰的酒桶，據說其中一桶裡藏著某位海盜船長的寶藏線索。',
      spirit: '酒保看似普通，但他的眼神偶爾會變得銳利如刀——這個人有不為人知的過去。',
    },
  },

  librarian: {
    id: 'librarian',
    name: '圖書館員',
    alias: 'librarian',
    title: '知識守護者',
    description: '一位戴著厚重圓框眼鏡的中年女性學者，銀白色的長髮用一支羽毛筆隨意盤起。她身穿深藍色的學者長袍，周圍總是堆滿了翻開的書籍和捲軸。纖細的手指因長年翻閱書頁而微微泛黃，眼神中透著深邃的智慧光芒。',
    roomId: 'town_library',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '噓……這裡是圖書館，請保持安靜。我是這裡的管理員。' +
          '如果你對這片大陸的歷史或怪物的弱點有興趣，我可以幫你找到相關的書籍。' +
          '知識就是力量——這句話在冒險中尤為適用。',
        options: [
          { text: '我想了解這片大陸的歷史。', nextId: 'lore' },
          { text: '有關於怪物弱點的書嗎？', nextId: 'monster_lore' },
          { text: '你有什麼推薦的書？', nextId: 'recommend' },
          { text: '打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lore',
        text: '這片大陸曾經被一個強大的地底種族統治，他們在水晶洞窟中建造了輝煌的文明。' +
          '後來一場被稱為「暗影浩劫」的災難席捲了大陸，地底種族為了封印深淵中的邪惡而犧牲了自己。' +
          '如今，暗影森林中殘留的暗影之力就是那場浩劫的遺痕。' +
          '閱讀這些記載的冒險者將獲得寶貴的經驗。',
        options: [
          { text: '還有更多的記載嗎？', nextId: 'recommend' },
          { text: '感謝你的講解。', nextId: 'farewell' },
        ],
      },
      {
        id: 'monster_lore',
        text: '怪物圖鑑在第三排書架。讓我給你總結一些要點——' +
          '暗影系的怪物怕光屬性攻擊，冰系怪物用火系魔法最有效。' +
          '而Boss級別的怪物通常有特殊的行為模式，仔細觀察牠們的動作是勝利的關鍵。' +
          '多學多看，戰鬥起來會輕鬆許多。',
        options: [
          { text: '非常有用，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '我推薦這幾本：《地底種族年鑑》記載了水晶洞窟的秘密，' +
          '《暗影之力研究》解釋了暗影森林的異變原因，' +
          '《元素親和手冊》能幫助你理解元素相剋的原理。' +
          '好好閱讀，你會發現冒險中許多問題的答案其實就藏在書中。',
        options: [
          { text: '我會好好研讀的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '知識之門永遠為求知者敞開。有任何疑問都可以再來找我。',
      },
    ],
    guardianHints: {
      creature: '禁區書架上的某些書籍被魔法鎖鏈束縛——裡面封印著以知識為食的危險生物。',
      treasure: '圖書館員正在研究的那份泛黃地圖上，標記著一處從未被探索過的上古遺跡。',
      spirit: '圖書館員的銀髮暗示著她並非普通人類——她可能是長壽種族的後裔，親歷了書中記載的許多事件。',
    },
  },

  prison_guard: {
    id: 'prison_guard',
    name: '獄卒',
    alias: 'guard',
    title: '監獄看守',
    description: '一名穿戴沉重鐵甲的高大警衛，鎧甲上鏽跡斑斑卻依然結實。他的面容粗獷嚴肅，下巴上有一道深深的刀疤，一雙警覺的眼睛不斷掃視著四周。腰間掛著一大串叮噹作響的鐵鑰匙和一柄沉甸甸的鐵鎚。',
    roomId: 'prison',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '站住！這裡是監獄，閒人勿入。……嗯？你是冒險者？' +
          '那就不同了。最近王國的治安不太好，要是你在外面抓到了通緝犯，可以帶到這裡來。' +
          '會有相應的賞金。',
        options: [
          { text: '有什麼通緝犯的情報嗎？', nextId: 'wanted' },
          { text: '監獄裡關了什麼人？', nextId: 'prisoners' },
          { text: '沒事，我走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wanted',
        text: '目前的通緝名單上有幾個重要的傢伙：海盜船長——在東方海岸橫行霸道；' +
          '暗影森林的盜賊團頭目——專門劫掠旅人；還有一個自稱「暗黑法師」的傢伙在湖畔附近出沒。' +
          '擊敗他們或者找到他們的據點情報都有賞金。',
        options: [
          { text: '我會留意的。', nextId: 'farewell' },
          { text: '監獄裡關了什麼人？', nextId: 'prisoners' },
        ],
      },
      {
        id: 'prisoners',
        text: '大多數是小偷和酒鬼，不值一提。但最深處的牢房裡……那個我不能說。' +
          '你只需要知道那扇門上的封印紋章不是擺著好看的就行了。' +
          '王國的某些秘密，知道得越少越安全。',
        options: [
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '記住——在這座城鎮裡，王國的法律高於一切。別惹麻煩。',
      },
    ],
    guardianHints: {
      creature: '最深處牢房的封印紋章偶爾會閃爍——裡面關押的絕非普通犯人，可能是某種被捕獲的強大生物。',
      treasure: '獄卒輪班交接時，走廊盡頭的儲物間門會短暫開啟，裡面存放著從犯人身上沒收的違禁品和贓物。',
      spirit: '獄卒看似粗獷，但他對每個囚犯都記得清清楚楚。他的記憶力和觀察力遠超常人——曾經是王國情報部門的成員。',
    },
  },

  // ─── 翠綠平原擴充 NPC ──────────────────────────────────

  traveling_merchant: {
    id: 'traveling_merchant',
    name: '旅行商人',
    alias: 'trader',
    title: '各地行商',
    description: '一位來自遠方的異國商人，皮膚被沙漠的烈日曬成了古銅色，頭戴色彩斑斕的絲綢頭巾。他身後的巨大背包幾乎比他的人還高，上面掛滿了來自各地的小飾品和鈴鐺，走起路來叮叮噹噹。嘴角永遠帶著精明的微笑，一雙閃亮的眼睛快速估量著每位路過的冒險者。',
    roomId: 'sunflower_field',
    type: 'merchant',
    shopItems: [
      'iron_sword', 'leather_armor', 'leather_boots',
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'antidote', 'return_scroll',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '喲！旅途中遇到客人可真難得。我是走遍大陸的旅行商人，背包裡什麼都有。' +
          '想看看我從各地蒐集來的好東西嗎？',
        options: [
          { text: '讓我看看你的商品。', nextId: 'shop' },
          { text: '你去過哪些地方？', nextId: 'travel_stories' },
          { text: '有什麼推薦的嗎？', nextId: 'recommend' },
          { text: '不了，再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '來看看吧！這些可都是我從各地精心挑選的貨色。品質保證，童叟無欺！',
        action: { type: 'shop', data: { shopType: 'traveling' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'travel_stories',
        text: '我走過東方海岸的碼頭，見過火山地帶矮人的鍛造場，也穿越過冰封雪原的暴風雪。' +
          '東方海岸的海鮮很便宜，火山那邊的武器品質無與倫比，至於雪原嘛……' +
          '沒有毛皮大衣的話，我勸你別去。',
        options: [
          { text: '聽起來很精彩，讓我看看商品。', nextId: 'shop' },
          { text: '謝謝你的分享。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '看你的裝備，應該是剛起步的冒險者吧？先把防具補齊，再帶足藥水。' +
          '回城卷軸也多帶幾張，關鍵時刻能救命。',
        options: [
          { text: '那我買一些。', nextId: 'shop' },
          { text: '好的，記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '一路順風！下次在哪遇到我就看緣分了，哈哈。',
      },
    ],
    guardianHints: {
      creature: '旅行商人的駱駝看起來溫馴，但據說牠曾一腳踢飛過一匹野狼。',
      treasure: '商人的背包有夾層——他最好的貨色從不擺出來，只賣給信任的客人。',
      spirit: '旅行商人走遍大陸卻從未受過傷，有人懷疑他身上帶著某種古老的護身符。',
    },
  },

  farmer: {
    id: 'farmer',
    name: '農夫',
    alias: 'farmer',
    title: '平原農家',
    description: '一位樸實憨厚的老農夫，皮膚被多年的烈日曬得黝黑粗糙，臉上的皺紋像是田地裡的溝壑。他穿著打了無數補丁的麻布衣裳，斗笠歪歪地掛在脖子後面，粗壯的雙手佈滿了老繭和泥土。褲腿總是捲得高高的，一雙草鞋沾滿了新鮮的泥巴。',
    roomId: 'village_farmland',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '啊，冒險者啊？這陣子田裡的老鼠和烏鴉越來越多，莊稼都快被糟蹋光了。' +
          '要是你能幫忙趕趕牠們，老漢我感激不盡。',
        options: [
          { text: '附近有什麼值得注意的嗎？', nextId: 'local_info' },
          { text: '這片田地怎麼樣？', nextId: 'farm_info' },
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'local_info',
        text: '前幾天我翻地的時候，在田埂底下挖到一個奇怪的陶罐，上面刻著看不懂的花紋。' +
          '不敢亂動，又埋回去了。還有啊，最近天黑以後常聽到遠處傳來狼嚎，你出門小心點。',
        options: [
          { text: '陶罐在哪裡？', nextId: 'hidden_item' },
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farm_info',
        text: '這片地跟了我大半輩子。土質好，水源足，就是野獸太多。' +
          '以前還好，這兩年不知怎地，連平常不會出現的毒蛇都跑來了。' +
          '老一輩說，是森林那邊的暗影之力在擴散……',
        options: [
          { text: '暗影之力？', nextId: 'shadow_rumor' },
          { text: '辛苦了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hidden_item',
        text: '就在農田西邊角落那棵老榆樹底下。不過陶罐上的紋路看著怪嚇人的，你要去看的話可得當心。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_rumor',
        text: '聽說暗影森林深處有一股邪惡的力量在甦醒，連帶影響了周邊的動物都變得躁動不安。' +
          '村長知道得更多，你可以去問問他。',
        options: [
          { text: '我知道了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧去吧，年輕人。老漢我還得繼續幹活呢。',
      },
    ],
    guardianHints: {
      creature: '農田地底下似乎有一個巨大的田鼠巢穴，規模遠超想像。',
      treasure: '農夫提到的陶罐可能是古代精靈族留下的封印容器，裡面裝著什麼不得而知。',
      spirit: '農夫世代耕作這片土地，他的家族似乎與這片平原的守護精靈有著古老的契約。',
    },
  },

  wandering_bard: {
    id: 'wandering_bard',
    name: '流浪吟遊詩人',
    alias: 'bard',
    title: '吟遊詩人',
    description: '一位衣著華麗卻略顯破舊的流浪藝人，披著一件褪色的紫色絲絨斗篷，手中抱著一把雕刻精美的七弦琴。他的金色長髮隨風飄揚，眼角帶著歲月的細紋，但雙眸中閃爍著年輕人般的熱情光芒。帽子上插著一根翠綠的羽毛，嘴角永遠掛著若有似無的微笑。',
    roomId: 'windmill_interior',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '♪～風吹過平原，帶來遠方的歌謠～♪ 噢，有聽眾了！我是流浪的吟遊詩人，' +
          '用琴弦記錄這片大陸上的傳說。想聽一首歌嗎？',
        options: [
          { text: '給我講個傳說吧。', nextId: 'legend' },
          { text: '你知道傳說中的武器嗎？', nextId: 'legendary_weapon' },
          { text: '你走過很多地方嗎？', nextId: 'travels' },
          { text: '下次吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'legend',
        text: '很久以前，大陸上有四把神器——炎之劍、冰之弓、雷之杖、聖之盾。' +
          '它們分別由四位英雄持有，在「暗影浩劫」中封印了深淵的邪神。' +
          '浩劫結束後，四把神器散落在大陸各處，至今無人找到。' +
          '有人說炎之劍沉睡在火山深處，冰之弓則被冰封在雪原盡頭的城堡裡……',
        options: [
          { text: '其他兩件呢？', nextId: 'more_legend' },
          { text: '精彩的故事！', nextId: 'farewell' },
        ],
      },
      {
        id: 'more_legend',
        text: '雷之杖據說在水晶洞窟最深處的古代祭壇裡，而聖之盾……傳說守護著湖畔城鎮的結界。' +
          '不過這些都是老故事了，真假難辨。也許有一天，你會是找到它們的人呢！',
        options: [
          { text: '我會去尋找的！', nextId: 'farewell' },
        ],
      },
      {
        id: 'legendary_weapon',
        text: '傳說中的武器啊……我聽說火山地帶的矮人鍛造師能打造出世間最強的武器，' +
          '但需要稀有的材料。水晶洞窟的水晶核心、暗影森林的暗影精華、冰封雪原的冰元素核心——' +
          '集齊這些，再加上矮人的技藝，也許就能重鑄傳說。',
        options: [
          { text: '我記下了！', nextId: 'farewell' },
          { text: '還有其他傳說嗎？', nextId: 'legend' },
        ],
      },
      {
        id: 'travels',
        text: '從新手村到湖畔城鎮，從東方海岸到冰封雪原，我的腳步遍佈整片大陸。' +
          '每個地方都有獨特的故事。最令我難忘的是暗影森林裡的精靈祭壇——' +
          '月光下那裡美得令人窒息，但也危險至極。',
        options: [
          { text: '謝謝你的分享。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願歌聲伴你同行，願故事為你照亮前路。我們會再相遇的！♪',
      },
    ],
    guardianHints: {
      creature: '吟遊詩人的琴弦在彈奏時偶爾會自己震動——彷彿琴裡住著某種音樂精靈。',
      treasure: '詩人的歌謠裡隱藏著真實的寶藏線索，但只有仔細聆聽的人才能發現。',
      spirit: '這位吟遊詩人的年齡似乎比外表看起來大得多——他知道的歷史不像是聽來的，更像是親眼見過。',
    },
  },

  // ─── 東方海岸 NPC ──────────────────────────────────────

  fisherman: {
    id: 'fisherman',
    name: '漁夫',
    alias: 'fisherman',
    title: '老漁民',
    description: '一位滿臉風霜的老漁夫，身上帶著揮之不去的海水鹹味和魚腥氣。他穿著一件沾滿鹽漬的厚帆布外套，頭戴一頂被海風吹得變形的草帽。古銅色的皮膚上佈滿了海水侵蝕的痕跡，粗糙的大手緊握著一根用了幾十年的老魚竿，眼神始終注視著海面的波動。',
    roomId: 'fishing_dock',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿！你也來釣魚的嗎？我在這片海域捕了三十多年的魚了。' +
          '今天的漁獲不太行，大魚都被什麼東西嚇跑了。',
        options: [
          { text: '有什麼釣魚的訣竅嗎？', nextId: 'fishing_tips' },
          { text: '什麼東西嚇跑了魚？', nextId: 'sea_monster' },
          { text: '這片海域安全嗎？', nextId: 'sea_safety' },
          { text: '再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fishing_tips',
        text: '釣魚嘛，講究的是耐心。清晨和黃昏魚最活躍。用蚯蚓能釣到普通魚，' +
          '用發光的蟲餌能引來深海魚。對了，珊瑚淺灘那邊聽說有稀有的七彩魚，' +
          '不過水流太急，一般人過不去。',
        options: [
          { text: '七彩魚？', nextId: 'rare_fish' },
          { text: '謝謝指點。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rare_fish',
        text: '七彩魚可值錢了！聽說抓到一條能賣好幾百金幣。但牠只在退潮時出現，' +
          '而且游得比海豚還快。老漢我試了幾十次，只遠遠看到過一次。',
        options: [
          { text: '有機會我去試試。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sea_monster',
        text: '最近海面上常出現巨大的陰影……有人說是海蛇，有人說是海龍。' +
          '反正自從那東西出現以後，近海的魚群都往遠處跑了。' +
          '船長說他親眼在暗礁附近看到了觸手，嚇得連夜開船回港。',
        options: [
          { text: '聽起來很危險。', nextId: 'farewell' },
          { text: '這片海域安全嗎？', nextId: 'sea_safety' },
        ],
      },
      {
        id: 'sea_safety',
        text: '碼頭附近還算安全，但別往暗礁那邊去。海盜營地更是碰都不要碰，' +
          '那群亡命之徒可不跟你講道理。沉船遺跡裡倒是有不少寶貝，' +
          '不過守在那裡的螃蟹精可不好對付。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '行了，魚線動了！走吧走吧，別嚇跑我的魚！',
      },
    ],
    guardianHints: {
      creature: '漁夫說的海中陰影可能是傳說中的海蛇王——牠已經在這片海域潛伏了百年。',
      treasure: '漁夫的魚簍底下壓著一張褪色的海圖，上面標記著沉船中寶藏的位置。',
      spirit: '漁夫能準確預測天氣和潮汐，老一輩說他的祖先曾與海神立下契約。',
    },
  },

  ship_captain: {
    id: 'ship_captain',
    name: '船長',
    alias: 'captain',
    title: '遠航船長',
    description: '一位威風凜凜的海上男兒，寬闊的肩膀撐起一件深藍色的船長大衣，胸前別著一枚閃亮的黃銅羅盤徽章。他的鬍子修剪得一絲不苟，被海風吹得古銅色的臉上帶著自信的笑容。頭頂那頂三角船長帽微微傾斜，腰間佩著一把裝飾華麗的彎刀。',
    roomId: 'coastal_boardwalk',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '哈！冒險者嗎？我是「海風號」的船長。我的船跑遍了這片海域的每一個角落。' +
          '你是想搭船去什麼地方，還是想聽聽海上的故事？',
        options: [
          { text: '海上有什麼冒險嗎？', nextId: 'sea_adventure' },
          { text: '你遇過海盜嗎？', nextId: 'pirate_info' },
          { text: '聽說海裡有怪物？', nextId: 'sea_creature' },
          { text: '先告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sea_adventure',
        text: '冒險？多的是！東南方有一座無人島，據說藏著古代海盜的寶藏。' +
          '不過暗礁和漩渦讓普通船隻根本靠近不了。' +
          '如果你能幫我弄到特殊的導航水晶，我就帶你去！',
        options: [
          { text: '導航水晶在哪裡？', nextId: 'nav_crystal' },
          { text: '聽起來太危險了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'nav_crystal',
        text: '我聽說水晶洞窟深處有一種迴音水晶，能感應海流的方向。' +
          '有了它，再危險的水域也能安全通過。你要是能弄到一塊，回來找我！',
        options: [
          { text: '我去找找看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pirate_info',
        text: '海盜？哼，崖壁那邊的海盜營地裡有一幫亡命之徒，為首的叫「黑鬍子」。' +
          '他們劫掠過往的商船，王國已經懸賞他的人頭了。' +
          '不過那傢伙手下有不少狠角色，沒點實力最好別去招惹。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
          { text: '海上還有什麼危險？', nextId: 'sea_creature' },
        ],
      },
      {
        id: 'sea_creature',
        text: '暗礁附近我親眼看到過巨大的觸手從水裡伸出來——比我的船桅還粗！' +
          '那絕對不是普通的章魚。老水手們說那是「深海守護者」，守護著海底的某個古老遺跡。' +
          '碰到了就趕緊跑，別逞英雄。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '海風號隨時歡迎你！記住——在海上，風向永遠比力量重要。',
      },
    ],
    guardianHints: {
      creature: '船長口中的深海守護者可能是上古時代被封印在海底的巨型魔獸。',
      treasure: '「海風號」的船艙裡有一個上了三道鎖的箱子，船長從不讓人靠近。',
      spirit: '船長的航海日誌裡記錄著一條通往未知大陸的航路，但他從未對任何人提起。',
    },
  },

  seafood_merchant: {
    id: 'seafood_merchant',
    name: '海鮮商人',
    alias: 'fishmonger',
    title: '碼頭魚販',
    description: '一位精明幹練的海邊商人，圓滾滾的身材裹在一件沾滿魚鱗的油布圍裙裡。他的嗓門極大，叫賣聲能穿透整個碼頭，一雙精明的小眼睛不放過任何一個潛在的顧客。攤位上擺滿了鮮活蹦跳的海鮮，他手持一把利落的魚刀，動作俐落地處理著漁獲。',
    roomId: 'fishing_dock',
    type: 'merchant',
    shopItems: [
      'grilled_meat', 'stew', 'adventure_bento',
      'small_hp_potion', 'medium_hp_potion', 'antidote',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '新鮮的海鮮喲！今天早上剛從海裡撈上來的，鮮得能蹦！' +
          '冒險者出門在外，總得吃飽肚子吧？來看看我的東西！',
        options: [
          { text: '讓我看看你賣什麼。', nextId: 'shop' },
          { text: '生意怎麼樣？', nextId: 'business' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '烤肉、燉湯、冒險者便當應有盡有！我家的燉湯可是用深海鮮魚熬的，' +
          '喝一碗能暖到骨子裡。出門冒險前吃飽喝足，打起怪來才有勁！',
        action: { type: 'shop', data: { shopType: 'seafood' } },
        options: [
          { text: '謝謝老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'business',
        text: '唉，最近生意不太好做。海裡那個大傢伙嚇跑了不少魚，漁獲少了價格就上去了。' +
          '不過我的手藝可不會偷工減料！便宜又好吃，這是老字號的招牌。',
        options: [
          { text: '那來點吃的吧。', nextId: 'shop' },
          { text: '希望生意興隆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '慢走啊！下次來記得帶朋友，多買多便宜！',
      },
    ],
    guardianHints: {
      creature: '魚攤底下有一隻異常巨大的螃蟹偶爾伸出鉗子偷魚吃，商人假裝沒看見。',
      treasure: '商人用來醃漬海鮮的陶甕裡，有一個是用來藏私房錢的。',
      spirit: '海鮮商人的祖傳醬料配方裡有一味只有精靈才知道的香料——他卻說不出那是什麼。',
    },
  },

  shipwright: {
    id: 'shipwright',
    name: '造船匠',
    alias: 'shipwright',
    title: '資深造船師',
    description: '一位沉默寡言的造船老手，雙手滿是厚厚的繭和木刺留下的疤痕。他穿著一件沾滿木屑和松脂的工作服，腰間繫著各式各樣的木工工具。寬厚的背影因多年彎腰勞作而微微駝背，但那雙粗糙的手拿起刨子時卻穩如磐石。',
    roomId: 'coastal_boardwalk',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '喂，小心腳下的木屑！我正在修一條船。你是冒險者？' +
          '不造船的話就別在這裡礙手礙腳……嗯，除非你有好木材要賣。',
        options: [
          { text: '你造過什麼船？', nextId: 'ships' },
          { text: '修船需要什麼材料？', nextId: 'materials' },
          { text: '抱歉打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ships',
        text: '「海風號」就是我造的！那可是跑遍整片海域最快的船。' +
          '用的是暗影森林的古木——又輕又硬，還能抵抗魔力侵蝕。' +
          '不過現在古木越來越難弄到了，暗影森林的樹人可不好對付。',
        options: [
          { text: '古木？我也許能弄到。', nextId: 'ancient_wood' },
          { text: '厲害！', nextId: 'farewell' },
        ],
      },
      {
        id: 'ancient_wood',
        text: '真的嗎？如果你能帶來古樹皮，我可以幫你打造一些特殊的裝備。' +
          '造船匠的手藝不只是造船——木盾、弓、法杖的握柄，我都做得來。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text: '好木材是關鍵。普通的木頭禁不住海水的腐蝕，需要特殊的木料。' +
          '暗影森林的古木最好，水晶洞窟裡的石化木也不錯。' +
          '再加上矮人鍛造的鐵釘……嗯，造一條好船可不便宜。',
        options: [
          { text: '原來如此。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '行了，我要繼續幹活了。別踩到我的工具！',
      },
    ],
    guardianHints: {
      creature: '造船匠的工坊裡有一隻海鷗每天準時來蹲，牠可能是被馴化的信使鳥。',
      treasure: '工坊角落堆放的舊船板中，有一塊上面刻著精靈文字的珍貴古木。',
      spirit: '造船匠的手藝據說是從一本沉船上打撈出的矮人工藝手冊中自學的。',
    },
  },

  // ─── 暗影森林 NPC ──────────────────────────────────────

  forest_ranger: {
    id: 'forest_ranger',
    name: '巡林者',
    alias: 'forester',
    title: '森林巡守',
    description: '一位穿著墨綠色斗篷的森林守護者，斗篷上沾滿了苔蘚和樹葉的碎屑，與森林融為一體。他的身形修長而矯健，腳步輕得幾乎不發出聲響。面容被兜帽遮去大半，只露出一雙警覺的綠色眼眸，背上斜背著一把精靈式的長弓。',
    roomId: 'firefly_trail',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '站住——你是冒險者？還好，我還以為又有盜賊闖進來了。' +
          '我是暗影森林的巡林者，負責監視這片森林的異常動靜。',
        options: [
          { text: '森林裡有什麼異常嗎？', nextId: 'abnormal' },
          { text: '你在追蹤什麼？', nextId: 'tracking' },
          { text: '有什麼需要我幫忙的嗎？', nextId: 'quest_offer' },
          { text: '我繼續探索了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'abnormal',
        text: '暗影之力在增強。看到那些螢火蟲了嗎？牠們本來是精靈族的魔法造物，' +
          '但最近牠們的光芒變得不穩定，忽明忽暗。這說明森林深處的暗影源頭正在活躍。' +
          '枯萎之林那邊的暗黑樹人數量也在增加，不是好兆頭。',
        options: [
          { text: '暗影源頭在哪裡？', nextId: 'shadow_source' },
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_source',
        text: '還不確定。可能在黑暗樹洞深處，也可能更深的地方。' +
          '精靈祭壇的結界暫時擋住了暗影的擴散，但不知道能撐多久。' +
          '如果你夠強，可以去枯萎之林調查一下。',
        options: [
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tracking',
        text: '一頭暗影狼王。牠不是普通的狼——身上覆蓋著暗影之力，比一般怪物強上數倍。' +
          '我追蹤牠的足跡已經好幾天了，但每次都在深林裡失去蹤影。' +
          '如果你遇到牠，千萬別單獨硬拼。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quest_offer',
        text: '如果你願意的話，幫我清理一下毒霧沼澤深處的毒蛙群。' +
          '牠們的數量太多了，毒霧正在向螢火蟲小徑蔓延。另外，' +
          '如果你在森林裡發現了暗黑樹皮或暗影精華，帶回來給我，我有報酬。',
        options: [
          { text: '交給我吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '在森林裡注意聽風的方向——暗影生物靠近時，風會突然靜止。保重。',
      },
    ],
    guardianHints: {
      creature: '巡林者身邊有一頭半透明的精靈鹿跟隨——只有在月光下才能隱約看見。',
      treasure: '巡林者的腰帶上掛著一塊精靈族的碎玉，那是他獲得進入森林資格的信物。',
      spirit: '巡林者並非人類——他的耳朵在帽子下微微尖削，可能有精靈血統。',
    },
  },

  elf_scholar: {
    id: 'elf_scholar',
    name: '精靈學者',
    alias: 'scholar',
    title: '遠古知識守護者',
    description: '一位尖耳的精靈學者，容貌優雅而古老，看似年輕的面龐上卻沉澱著千年的智慧。她穿著一件以月光絲線織成的銀白長袍，長及腳踝的淡金色髮絲隨著微風輕輕飄動。周身縈繞著淡淡的精靈魔力光暈，彷彿與祭壇上的水晶光芒相呼應。',
    roomId: 'elf_altar',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……你能找到這裡，說明你不是普通的冒險者。我是精靈族最後的學者之一。' +
          '這座祭壇是我們一族在這片森林留下的最後遺產。',
        options: [
          { text: '精靈族發生了什麼事？', nextId: 'elf_history' },
          { text: '祭壇有什麼特殊的力量嗎？', nextId: 'altar_power' },
          { text: '暗影之力是怎麼回事？', nextId: 'shadow_lore' },
          { text: '打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'elf_history',
        text: '精靈族曾是這片森林的守護者，與大自然和諧共存了數千年。' +
          '但「暗影浩劫」改變了一切——為了封印從深淵湧出的黑暗，' +
          '精靈長老們獻出了生命之力，在祭壇上編織了最後的結界。' +
          '如今精靈族四散各處，只有我還留在這裡守護祭壇。',
        options: [
          { text: '結界還能維持多久？', nextId: 'barrier_status' },
          { text: '令人敬佩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'barrier_status',
        text: '不長了……結界正在被暗影之力一點一點侵蝕。如果有人能找到四種元素水晶，' +
          '也許能修復結界。火元素在火山、冰元素在雪原、光元素在地底祭壇、暗元素則需要從暗影狼王身上取得。',
        options: [
          { text: '我會去尋找的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar_power',
        text: '祭壇能淨化暗影之力的侵蝕。你站在這裡，應該能感受到身體的疲憊在消退。' +
          '此外，祭壇上的水晶球記錄著精靈族的魔法知識——觸碰它，也許你能領悟到一些東西。',
        options: [
          { text: '精靈魔法……', nextId: 'elf_magic' },
          { text: '非常感謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'elf_magic',
        text: '精靈魔法講究與自然的共鳴。不同於人類法師的元素操控，精靈魔法是請求自然之力的幫助。' +
          '治癒、守護、感知——這些都是精靈魔法的核心。祭司職業的一些技能其實源自精靈魔法。',
        options: [
          { text: '受益良多。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_lore',
        text: '暗影之力來自深淵——那是位於大陸最底層的次元裂縫。' +
          '千年前精靈長老們封印了裂縫，但封印正在衰弱。枯萎之林就是暗影外洩的證據。' +
          '如果不加以遏制，整片森林……不，整片大陸都會被暗影吞噬。',
        options: [
          { text: '有辦法阻止嗎？', nextId: 'barrier_status' },
          { text: '這太嚴重了……', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願月光指引你的道路。這片森林還有希望……只要有人願意守護它。',
      },
    ],
    guardianHints: {
      creature: '精靈學者身邊浮游著幾顆微光球體——那是精靈族的魔法精華凝聚而成的意志體。',
      treasure: '水晶球中不只有知識，還封存著精靈女王的一縷意識，能與之交流也許可以獲得獨特的恩賜。',
      spirit: '精靈學者看似年輕，但她的眼眸中倒映著千年的歲月——她可能就是當年參與封印的長老之一。',
    },
  },

  herb_gatherer: {
    id: 'herb_gatherer',
    name: '藥草採集者',
    alias: 'herbalist',
    title: '森林藥師',
    description: '一位背著巨大竹簍的採藥人，竹簍裡塞滿了各色奇異的草藥和蘑菇，散發出混合的草木清香。她穿著一身耐磨的麻布衣裳，下擺被沼澤的泥水染成了深褐色。臉上戴著一副用草藥浸泡過的布面罩，只露出一雙明亮而專注的眼睛。',
    roomId: 'deep_poison_swamp',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'antidote', 'strength_potion', 'agility_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '噓——別驚動那些毒蛙！我是在這片沼澤裡採集稀有藥草的藥師。' +
          '這裡的毒蘑菇雖然危險，但提煉後可是上好的藥材呢。要買藥水嗎？',
        options: [
          { text: '讓我看看藥水。', nextId: 'shop' },
          { text: '你不怕中毒嗎？', nextId: 'poison_resist' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '我自己調配的藥水，品質可不輸城鎮裡的藥店！還有特殊的增幅藥水，' +
          '喝了能暫時提升你的能力。在這種危險的地方，多帶點藥水準沒錯。',
        action: { type: 'shop', data: { shopType: 'herb' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison_resist',
        text: '在這裡待久了，身體自然就有了抗毒性。而且我有祖傳的解毒配方，' +
          '什麼毒都不怕。倒是你，在沼澤裡行動要小心，毒霧吸多了會頭暈。' +
          '帶幾瓶解毒劑防身吧。',
        options: [
          { text: '買些解毒劑。', nextId: 'shop' },
          { text: '好的，謝謝提醒。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '小心腳下，別踩到毒蘑菇。要是中毒了趕緊回來找我！',
      },
    ],
    guardianHints: {
      creature: '藥草採集者養了一隻免疫所有毒素的變異青蛙，幫她探測沼澤中的危險。',
      treasure: '她的藥草袋裡有一株傳說中的千年靈芝——足以調配出提升永久屬性的秘藥。',
      spirit: '藥草採集者能與植物交流，這不是普通的技能，而是一種失傳已久的精靈秘術。',
    },
  },

  // ─── 火山地帶 NPC ──────────────────────────────────────

  dwarf_blacksmith: {
    id: 'dwarf_blacksmith',
    name: '矮人鍛造師',
    alias: 'dwarfsmith',
    title: '傳奇鍛造大師',
    description: '一位矮小但肌肉極為發達的矮人，身高不到人類的胸口，但臂膀比常人的大腿還粗。他蓬亂的紅棕色大鬍子幾乎垂到腰間，上面沾著鐵屑和火星燒出的焦痕。赤裸的上身佈滿了燙傷的疤痕，雙手握著一把比他半個身子還大的鍛造錘，彷彿那不過是一根輕巧的木棍。',
    roomId: 'forge_hall',
    type: 'merchant',
    shopItems: [
      'steel_sword', 'flame_sword', 'long_bow', 'composite_bow',
      'oak_staff', 'crystal_staff', 'holy_scepter', 'divine_scepter',
      'chain_mail', 'plate_armor', 'iron_helm', 'iron_gauntlets', 'iron_boots',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '哈！又有人被爐火的熱度嚇到了嗎？我是矮人一族的鍛造大師，' +
          '這座鍛造大廳是我們祖先用火山岩建造的傑作。想要好武器？你算來對地方了！',
        options: [
          { text: '讓我看看你的武器！', nextId: 'shop' },
          { text: '你能鍛造什麼等級的武器？', nextId: 'crafting' },
          { text: '矮人族的鍛造技術是怎麼來的？', nextId: 'dwarf_lore' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧！從鋼劍到炎之劍，從鎖子甲到板甲——全是我親手鍛造的精品！' +
          '矮人出品，品質保證。你在別的地方可買不到這麼好的東西。',
        action: { type: 'shop', data: { shopType: 'dwarf_forge' } },
        options: [
          { text: '好東西！', nextId: 'farewell' },
        ],
      },
      {
        id: 'crafting',
        text: '普通的鍛造對我來說小菜一碟。但如果你能帶來稀有材料——' +
          '比如水晶核心、暗影精華、冰元素核心這些東西，我就能鍛造出傳說級的武器。' +
          '那種武器可是有靈魂的！嘿嘿。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials_detail' },
          { text: '看看普通商品吧。', nextId: 'shop' },
        ],
      },
      {
        id: 'materials_detail',
        text: '水晶核心在水晶洞窟的守護者身上，暗影精華要從暗影森林的強力怪物身上取得，' +
          '冰元素核心則在冰封雪原的深處。集齊材料再來找我，我讓你見識見識矮人鍛造的真正實力！',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dwarf_lore',
        text: '矮人族自古以來就是大陸上最強的工匠。我們的祖先在這座火山的爐火中' +
          '鍛造了無數傳世名作。雖然如今矮人一族人丁稀少，但鍛造技術從未失傳。' +
          '這座鍛造大廳裡的爐火已經燃燒了上千年，從未熄滅！',
        options: [
          { text: '令人敬佩！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '哈哈！等你有好材料了再來。矮人鍛造師的大門永遠為勇者敞開！',
      },
    ],
    guardianHints: {
      creature: '鍛造大廳深處有一頭火蜥蜴幫忙維持爐火——牠的體內流淌著火元素的血液。',
      treasure: '大師的私人收藏室裡保存著一把尚未完工的傳說武器——據說只差最後一種材料。',
      spirit: '矮人鍛造師的錘擊聲中蘊含著古老的矮人符文之力，每一次錘打都是一次附魔。',
    },
  },

  mine_foreman: {
    id: 'mine_foreman',
    name: '礦工頭目',
    alias: 'foreman',
    title: '礦場監工',
    description: '一位滿臉煤灰的矮人礦工頭目，只有那雙白眼珠和偶爾露出的牙齒能看出本來的膚色。他戴著一頂裝有魔法燈的安全帽，粗壯的身體裹在一件厚重的皮革工作服裡。不停地咳嗽著，但依然用沙啞的嗓音大聲指揮著礦工們的工作。',
    roomId: 'dwarf_mine',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '咳咳……你是來打礦的嗎？這礦洞裡粉塵太多了……' +
          '我是這裡的工頭。最近礦洞深處出了些怪物，礦工們都不敢往深處走了。' +
          '要是你能幫忙清一清，我有好東西給你。',
        options: [
          { text: '什麼怪物？', nextId: 'monster_info' },
          { text: '礦洞裡有什麼好礦石？', nextId: 'ore_info' },
          { text: '有什麼任務嗎？', nextId: 'quest_detail' },
          { text: '我先走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'monster_info',
        text: '岩石魔像和火蜥蜴，最近不知道為什麼越來越多。' +
          '可能是深處的岩漿活動把牠們從更下層驅趕上來的。' +
          '矮人戰士們已經在前線擋著了，但人手不夠。',
        options: [
          { text: '我去幫忙。', nextId: 'farewell' },
          { text: '有什麼報酬？', nextId: 'quest_detail' },
        ],
      },
      {
        id: 'ore_info',
        text: '這座礦洞出產精鐵礦和黑曜石。更深處據說有秘銀礦脈，' +
          '但那些區域被怪物佔據了。如果你能清理出通道，' +
          '我們可以分你一些珍貴的礦石。',
        options: [
          { text: '秘銀！那我一定去。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quest_detail',
        text: '簡單說——幫我們清掉礦洞深處第三層的岩石魔像群。完成之後，' +
          '我給你一批精鐵礦石，拿去找鍛造師能做出好東西。' +
          '另外，如果你在深處看到發光的石頭記得帶回來，那可能是稀有礦石。',
        options: [
          { text: '交給我。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '進礦洞記得帶火把。黑暗裡要是迷了路，就順著鐵軌走——鐵軌永遠通向出口。',
      },
    ],
    guardianHints: {
      creature: '礦洞最深處有一隻體型如牛的火蜥蜴王——牠守護著一處天然的秘銀礦脈。',
      treasure: '礦工們在岩壁中發現了一塊包裹著古代符文的黑曜石，可能是矮人祖先留下的鑰匙。',
      spirit: '工頭偶爾會對著礦洞深處低聲自語——他似乎能聽到岩石的聲音，感知礦脈的走向。',
    },
  },

  flame_priest: {
    id: 'flame_priest',
    name: '火焰祭司',
    alias: 'flamepriest',
    title: '火神侍者',
    description: '一位穿著深紅色祭袍的火之信徒，祭袍邊緣繡著金色的火焰紋章，在爐火的映照下閃閃發光。他的雙眼在黑暗中偶爾閃爍著火紅色的微光，光頭上紋著古老的火神符文。雙手合十站在神殿入口，周身散發著灼人的熱浪，彷彿他本身就是一團凝固的烈焰。',
    roomId: 'fire_temple_entrance',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '火焰不滅，火神長存。歡迎來到火之神殿，旅人。' +
          '我是侍奉火神的祭司，守護這座神殿已有五十年。',
        options: [
          { text: '火神是什麼？', nextId: 'fire_god' },
          { text: '這座神殿有什麼歷史？', nextId: 'temple_history' },
          { text: '火山有危險嗎？', nextId: 'volcano_danger' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fire_god',
        text: '火神是大陸四元素之主之一——司掌火焰、鍛造與毀滅。' +
          '矮人族世代信奉火神，感謝祂賜予爐火的力量。' +
          '火神並非邪惡——火焰既能毀滅也能創造，就像鍛造需要熾熱的爐火一樣。',
        options: [
          { text: '其他三位元素之主呢？', nextId: 'other_elements' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'other_elements',
        text: '水之主沉睡在大陸某處的深海，風之主遊蕩在高空之上，地之主則隱居在水晶洞窟的最深處。' +
          '四位元素之主維持著大陸的平衡——如果其中一位力量暴走，後果不堪設想。' +
          '近年來火山活動頻繁，可能與火神的躁動有關……',
        options: [
          { text: '火神在躁動？', nextId: 'volcano_danger' },
          { text: '感謝你的教導。', nextId: 'farewell' },
        ],
      },
      {
        id: 'temple_history',
        text: '這座神殿建於矮人王國鼎盛時期，用火山岩和黑曜石築造，能承受岩漿的溫度。' +
          '神殿深處有一個火焰祭壇，是矮人族與火神溝通的聖地。' +
          '不過最近祭壇的火焰變得異常猛烈……',
        options: [
          { text: '為什麼會這樣？', nextId: 'volcano_danger' },
          { text: '謝謝你的介紹。', nextId: 'farewell' },
        ],
      },
      {
        id: 'volcano_danger',
        text: '火山最近的活動越來越頻繁——地震、岩漿上湧、溫度升高。' +
          '我擔心火山口深處可能有什麼東西在甦醒。傳說中火山最深處沉睡著一頭火龍，' +
          '牠的翻身就足以引發大規模的火山爆發。如果火龍醒來……',
        options: [
          { text: '有辦法阻止嗎？', nextId: 'prevent' },
          { text: '我會當心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'prevent',
        text: '也許……如果能找到火神的信物——一枚火元素結晶，放置在祭壇上，' +
          '就能安撫火龍的躁動。但火元素結晶極其稀有，通常只在岩漿河的源頭才能找到。',
        options: [
          { text: '我去找找看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願火焰之力照亮你的前路，而非灼傷你的身軀。保重。',
      },
    ],
    guardianHints: {
      creature: '神殿的永恆之火中棲息著一隻火焰精靈——牠是火神意志的碎片。',
      treasure: '祭壇後方的密室裡供奉著一件火神信物，只有被火焰認可的人才能觸碰。',
      spirit: '火焰祭司的雙眼在黑暗中會閃爍火紅色的光芒——他體內流淌著火元素的血液。',
    },
  },

  // ─── 水晶洞窟 NPC ──────────────────────────────────────

  crystal_scholar: {
    id: 'crystal_scholar',
    name: '水晶學者',
    alias: 'crystalist',
    title: '地底研究員',
    description: '一位被水晶光芒環繞的年輕研究者，臉上架著一副用水晶鏡片磨成的特製眼鏡，鏡片不時折射出七彩光芒。他穿著一件口袋鼓鼓囊囊的研究袍，裡面塞滿了水晶碎片和筆記本。指尖因長期接觸魔力水晶而微微泛著淡紫色的光暈。',
    roomId: 'amethyst_corridor',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '噢！你也對水晶感興趣嗎？我是研究地底水晶構造的學者。' +
          '這些紫水晶的生長方式完全不符合自然規律——它們是被魔力催生出來的！',
        options: [
          { text: '這裡的水晶有什麼特別的？', nextId: 'crystal_info' },
          { text: '地底種族是什麼？', nextId: 'ancient_race' },
          { text: '這裡安全嗎？', nextId: 'safety' },
          { text: '有趣，但我得走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crystal_info',
        text: '不同顏色的水晶蘊含不同的元素之力。紫水晶影響精神，翡翠水晶有治癒效果，' +
          '鑽石水晶則蘊含純粹的魔力。如果把這些水晶按照特定的排列方式組合……' +
          '理論上可以製造出強大的魔法道具。',
        options: [
          { text: '怎麼組合？', nextId: 'combination' },
          { text: '有意思。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combination',
        text: '地底種族留下的古書裡記載了水晶組合的方法。可惜那本書被水晶封印在鑽石密室裡，' +
          '我還沒找到打開封印的方法。需要四種元素水晶作為鑰匙……你如果找到了，一定要告訴我！',
        options: [
          { text: '我會留意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ancient_race',
        text: '地底種族——也被稱為「晶民」——是一個以水晶為核心建造文明的種族。' +
          '他們能操控水晶的生長，用水晶建造城市、製造武器、甚至儲存記憶。' +
          '可惜他們在暗影浩劫中為了封印深淵而犧牲了整個種族。這些水晶洞窟就是他們文明的遺跡。',
        options: [
          { text: '他們的知識還保留著嗎？', nextId: 'combination' },
          { text: '令人感傷的歷史。', nextId: 'farewell' },
        ],
      },
      {
        id: 'safety',
        text: '不太安全。水晶蜥蜴把這裡當成了巢穴，水晶魔像會攻擊任何靠近的生物。' +
          '更深處的幽靈騎士——那是地底種族的守護者殘魂——非常強大。' +
          '沒有充分準備不要深入。',
        options: [
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '小心紫水晶的眩暈效果——在走廊裡停留太久會產生幻覺。祝你研究順利……呃，冒險順利！',
      },
    ],
    guardianHints: {
      creature: '學者身邊漂浮著一顆微型水晶球——那是他用地底種族的技術製造的記錄裝置。',
      treasure: '學者的筆記本裡詳細記載了每一種水晶的特性和位置，對尋寶者來說價值連城。',
      spirit: '學者對地底種族的了解太過深入——他的夢境中經常出現晶民的記憶片段。',
    },
  },

  gem_merchant: {
    id: 'gem_merchant',
    name: '寶石商人',
    alias: 'jeweler',
    title: '地底珠寶商',
    description: '一位精明的寶石鑑定師，戴著一副可翻轉的多層放大鏡，鏡片在洞窟的水晶光中閃閃發亮。他身材瘦小但動作敏捷，穿著一件佈滿暗袋的黑色長袍，每個口袋裡都藏著不同的寶石。眼睛在光線下會反射出水晶般的異樣光澤，露出一口鑲著金牙的精明笑容。',
    roomId: 'diamond_chamber',
    type: 'merchant',
    shopItems: [
      'crystal_shard', 'lucky_charm', 'power_amulet', 'wisdom_amulet',
      'medium_hp_potion', 'large_hp_potion',
      'medium_mp_potion', 'large_mp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '嘿嘿嘿……歡迎來到我的秘密店鋪！在地表你可買不到這些好東西。' +
          '水晶碎片、魔法護符，應有盡有。價格嘛……一分錢一分貨！',
        options: [
          { text: '讓我看看商品。', nextId: 'shop' },
          { text: '你怎麼在這種地方做生意？', nextId: 'how_here' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧！這些水晶碎片可以用來強化裝備，護符能提供持續的屬性加成。' +
          '在洞窟深處冒險前，最好先備齊補給和護身飾品。',
        action: { type: 'shop', data: { shopType: 'gem' } },
        options: [
          { text: '好東西！', nextId: 'farewell' },
        ],
      },
      {
        id: 'how_here',
        text: '哈哈，我可是從矮人那邊學來的——哪裡有礦石，哪裡就有商機。' +
          '冒險者們在洞窟裡打完怪，渾身是傷，急需藥水和補給。' +
          '而我正好在這裡等著他們。雙贏！',
        options: [
          { text: '果然是生意人。', nextId: 'shop' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '嘿嘿，下次帶更多金幣來！記住——在洞窟裡，命比錢重要。',
      },
    ],
    guardianHints: {
      creature: '寶石商人的口袋裡似乎有什麼東西在蠕動——他養了一隻能嗅出寶石的地底蟲。',
      treasure: '商人展示的只是普通貨色——他最好的寶石藏在一個空間魔法袋裡，只賣給出得起價的客人。',
      spirit: '寶石商人的瞳孔在光線下會反射出水晶般的光澤——他可能有地底種族的血統。',
    },
  },

  dead_adventurer: {
    id: 'dead_adventurer',
    name: '冒險者殘骸',
    alias: 'remains',
    title: '迷失的靈魂',
    description: '一個半透明的幽靈冒險者，身形忽隱忽現地漂浮在瀑布旁的岩石上方。他身上殘留著生前穿戴的皮甲輪廓，但一切都已化為虛幻的藍白色光影。面容模糊而哀傷，空洞的眼眶中偶爾閃過一絲微弱的光芒，身旁散落著一些已經銹蝕腐朽的裝備殘骸。',
    roomId: 'underground_waterfall',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……嗯？你能看見我嗎？已經很久沒有活人注意到我了。' +
          '我是……曾經是一名冒險者。在這裡探險時被水晶魔像擊敗，就再也沒有離開過……',
        options: [
          { text: '你知道這裡的秘密嗎？', nextId: 'secrets' },
          { text: '你是怎麼死的？', nextId: 'death_story' },
          { text: '有辦法幫你超度嗎？', nextId: 'salvation' },
          { text: '安息吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'secrets',
        text: '瀑布……後面有一條密道……通往古代祭壇。但祭壇的守護者……' +
          '幽靈騎士……比任何怪物都強。他曾是地底王國的騎士團長，' +
          '死後的力量比活著時更加恐怖……如果你要去，至少需要一隊人……',
        options: [
          { text: '祭壇上有什麼？', nextId: 'altar_secret' },
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar_secret',
        text: '祭壇上有……地底種族的王權之器……據說能操控整個洞窟的水晶。' +
          '但啟動它需要四種元素精華……我當初就是為了尋找它才來到這裡的……' +
          '可惜……再也沒有機會了……',
        options: [
          { text: '我會替你完成這個願望。', nextId: 'farewell' },
        ],
      },
      {
        id: 'death_story',
        text: '我太大意了……以為自己的實力足夠獨自深入。' +
          '在鑽石密室裡被兩隻水晶魔像圍攻，退到瀑布邊時腳下一滑……' +
          '冒險者啊，千萬別獨自行動，尤其在未知的區域。這是我用命換來的教訓。',
        options: [
          { text: '我會記住的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'salvation',
        text: '超度嗎……也許吧。如果有人能在古代祭壇上為我祈禱，我的靈魂也許能獲得安息。' +
          '但那需要祭司的力量，還需要聖光的祝福……你如果認識祭司，拜託你了……',
        options: [
          { text: '我會找祭司來幫你的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧……活著的人不應該在死者身邊逗留太久……願你比我走得更遠。',
      },
    ],
    guardianHints: {
      creature: '靈魂旁邊偶爾出現半透明的蝙蝠——那是受到死者怨氣吸引的靈體。',
      treasure: '冒險者殘骸的背包裡還有一些他生前收集的物品——也許對活著的人有用。',
      spirit: '這個靈魂困在洞窟中是因為他的遺願未了——找到王權之器的夢想將他束縛在此。',
    },
  },

  // ─── 冰封雪原 NPC ──────────────────────────────────────

  snow_guide: {
    id: 'snow_guide',
    name: '雪地嚮導',
    alias: 'guide',
    title: '極地生存專家',
    description: '一位全身裹著厚重毛皮的雪地嚮導，只露出一雙被寒風吹得通紅卻炯炯有神的眼睛。他穿著多層雪狼皮縫製的禦寒大衣，腳踩一雙特製的寬底雪靴。呼出的每一口白氣都在鬍鬚上結成冰霜，但他的身姿依然挺拔而堅定。',
    roomId: 'snowfield_entrance',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿，等等！你就這麼要往雪原裡走？這裡可不是鬧著玩的——' +
          '暴風雪能在幾分鐘內讓你失去方向，凍死在雪地裡。讓我給你一些建議。',
        options: [
          { text: '雪原有什麼需要注意的？', nextId: 'survival_tips' },
          { text: '你能帶我穿過暴風雪嗎？', nextId: 'guide_offer' },
          { text: '冰封城堡在哪裡？', nextId: 'ice_castle_info' },
          { text: '我沒問題的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'survival_tips',
        text: '第一，保暖。沒有毛皮裝備的話，在暴風雪中每分鐘都在掉體力。' +
          '第二，跟著石碑走。雪原中有古人立的指路石碑，跟著它們就不會迷路。' +
          '第三，遠離狼群。雪狼成群結隊出沒，單獨行動很容易被圍攻。',
        options: [
          { text: '謝謝提醒。', nextId: 'farewell' },
          { text: '冰封城堡怎麼走？', nextId: 'ice_castle_info' },
        ],
      },
      {
        id: 'guide_offer',
        text: '帶路可以，但暴風雪小徑那邊太危險了——連我都不敢在風暴最強的時候穿越。' +
          '你需要等風勢減弱的時候才能通過。或者……如果你能從山營地的毛皮商那裡' +
          '弄到特製的防風斗篷，也許能硬闖過去。',
        options: [
          { text: '防風斗篷？', nextId: 'cloak_info' },
          { text: '好的，我先去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'cloak_info',
        text: '山營地的毛皮商賣一種用雪狼皮製成的斗篷，能大幅抵禦暴風雪的影響。' +
          '價格不便宜，但在雪原裡那就是保命的東西。',
        options: [
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ice_castle_info',
        text: '冰封城堡在雪原的最北端，需要穿過暴風雪小徑、越過冰川才能到達。' +
          '城堡的大門被冰封了千年，據說只有持有冰元素核心的人才能打開。' +
          '裡面沉睡著傳說中的冰龍……你真的要去？',
        options: [
          { text: '我會做好準備的。', nextId: 'farewell' },
          { text: '冰龍有多強？', nextId: 'ice_dragon' },
        ],
      },
      {
        id: 'ice_dragon',
        text: '沒人見過冰龍還能活著回來說的。傳說牠的吐息能瞬間凍結一切，' +
          '翅膀展開能遮蔽整片天空。如果你真要挑戰牠，' +
          '至少要集結一支精銳隊伍，帶上大量的火屬性武器和藥水。',
        options: [
          { text: '我會準備好的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '在雪原裡，活下來比逞英雄更重要。保重。',
      },
    ],
    guardianHints: {
      creature: '嚮導身後的雪地裡有一對冰藍色的眼睛在暗中觀察——那是他馴服的雪狼在守護。',
      treasure: '嚮導的營地裡有一張手繪的雪原地圖，標記著所有安全的避風點和危險區域。',
      spirit: '嚮導曾在暴風雪中瀕臨死亡時被一位神秘的冰之精靈救起，從此他能感知暴風雪的來臨。',
    },
  },

  fur_merchant: {
    id: 'fur_merchant',
    name: '毛皮商人',
    alias: 'furrier',
    title: '極地皮貨商',
    description: '一位穿著厚重毛皮大衣的壯碩商人，整個人看起來像一頭直立行走的熊。他的大鬍子被凍成了冰碴子，紅通通的大鼻子是常年在雪地中生活的標誌。帳篷裡掛滿了各式各樣的皮毛製品，空氣中瀰漫著鞣制皮革的氣味。',
    roomId: 'mountain_camp',
    type: 'merchant',
    shopItems: [
      'leather_armor', 'leather_boots', 'leather_gloves', 'leather_cap',
      'large_hp_potion', 'large_mp_potion',
      'antidote', 'return_scroll',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '進來暖暖！在雪原裡做生意可不容易，但總得有人為冒險者們提供補給。' +
          '毛皮裝備、藥水、回城卷軸——在這冰天雪地裡，這些可都是救命的東西。',
        options: [
          { text: '看看你的商品。', nextId: 'shop' },
          { text: '你在這裡住了多久？', nextId: 'living_here' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '皮甲、皮靴、皮手套——全是上好的雪狼皮製的，保暖又耐用。' +
          '藥水也帶足了，在雪原裡受傷可不是開玩笑的。另外回城卷軸多帶幾張，' +
          '萬一遇到暴風雪，一張卷軸就是你和死亡之間的距離。',
        action: { type: 'shop', data: { shopType: 'fur' } },
        options: [
          { text: '謝了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'living_here',
        text: '十五年了。最開始是跟著一支探險隊來的，後來隊伍解散了，我就留下來做生意。' +
          '雪原看似荒涼，但這裡的動物皮毛可是最好的材料——城鎮裡的貴族們願意出高價購買。' +
          '不過最近雪狼群越來越兇猛，獵取毛皮的風險也越來越高了。',
        options: [
          { text: '辛苦了。看看商品吧。', nextId: 'shop' },
          { text: '保重。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '出去記得裹緊衣服！凍掉手指可就沒法揮劍了。',
      },
    ],
    guardianHints: {
      creature: '營地外圍有幾隻被馴服的雪狼幫忙看守——牠們對陌生人保持警惕。',
      treasure: '商人的帳篷深處有一件冰藍色的斗篷——據說是用冰龍的鱗片縫製的，從不出售。',
      spirit: '毛皮商人能在零下四十度的暴風雪中安然入睡——他的體質已經超越了普通人類的極限。',
    },
  },

  ice_castle_guard: {
    id: 'ice_castle_guard',
    name: '冰封城堡看守',
    alias: 'iceguard',
    title: '永恆守衛',
    description: '一位被冰晶覆蓋的古老守衛，全身的鎧甲早已與冰融為一體，呈現出半透明的冰藍色。他的動作緩慢而僵硬，每一步都伴隨著冰裂的聲響，盔甲的縫隙中不斷滲出冷冽的白色冰霧。面罩下的眼眶中閃爍著幽幽的藍色靈光，是這具冰封軀殼中唯一的生命跡象。',
    roomId: 'ice_castle_gate',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……站住。你是活人嗎？已經……很久沒有活人走到這裡了。' +
          '我是冰封城堡的看守，在這裡守衛了……不記得多少年了。',
        options: [
          { text: '你是人類嗎？', nextId: 'identity' },
          { text: '城堡裡有什麼？', nextId: 'castle_info' },
          { text: '冰龍是真的嗎？', nextId: 'ice_dragon_info' },
          { text: '我要進去。', nextId: 'enter_warning' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'identity',
        text: '……曾經是。我是古代冰之王國的禁衛軍士兵。王國被冰龍的力量凍結後，' +
          '我們也成了冰的一部分。但意識還在……冰冷的意識，永遠清醒，永遠孤獨。' +
          '國王下達的最後命令是——守護城門，不讓任何人驚醒冰龍。',
        options: [
          { text: '冰之王國？', nextId: 'ice_kingdom' },
          { text: '你不會攻擊我吧？', nextId: 'peaceful' },
        ],
      },
      {
        id: 'ice_kingdom',
        text: '冰之王國曾是雪原上最強盛的國度。國王為了獲得永恆的力量，' +
          '試圖駕馭冰龍——結果引發了滅頂之災。冰龍的吐息將整座城堡連同所有居民凍成了冰。' +
          '只有冰龍自己也陷入了沉睡……如果牠醒來，災難將重演。',
        options: [
          { text: '有辦法徹底消滅冰龍嗎？', nextId: 'ice_dragon_info' },
          { text: '悲慘的歷史。', nextId: 'farewell' },
        ],
      },
      {
        id: 'peaceful',
        text: '……只要你不試圖強行進入城堡，我不會攻擊你。但如果你驚醒了冰龍……' +
          '我會不惜一切代價阻止災難的發生。這是我身為守衛的最後使命。',
        options: [
          { text: '我理解。', nextId: 'farewell' },
        ],
      },
      {
        id: 'castle_info',
        text: '城堡內部被冰完全封凍。王座大廳裡沉睡著冰龍和國王的遺體。' +
          '寶物庫中保存著冰之王國的國寶——據說有一把能操控冰雪的神弓，' +
          '就是傳說中的「冰之弓」。但進入城堡的條件是……你需要冰元素核心作為鑰匙。',
        options: [
          { text: '冰元素核心在哪裡？', nextId: 'core_location' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core_location',
        text: '水晶冰洞深處。那裡有一頭冰元素巨獸守護著核心——' +
          '牠是冰龍力量的延伸，力量不可小覷。擊敗牠才能取得核心。',
        options: [
          { text: '我去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ice_dragon_info',
        text: '冰龍是上古時代的四大龍族之一——冰、火、雷、暗。' +
          '每一頭都擁有毀滅國家的力量。冰龍的弱點是火屬性攻擊，' +
          '但牠的冰息能瞬間凍結一切。如果要挑戰牠……做好死的準備。',
        options: [
          { text: '我不會退縮的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'enter_warning',
        text: '……你確定嗎？城堡裡除了冰龍之外，還有被凍結的禁衛軍殘骸。' +
          '他們雖然肉體已死，但被冰龍之力驅動，會攻擊一切入侵者。' +
          '沒有充分準備的話，你進去就是送死。',
        options: [
          { text: '我會準備好的。', nextId: 'farewell' },
          { text: '冰龍的弱點是什麼？', nextId: 'ice_dragon_info' },
        ],
      },
      {
        id: 'farewell',
        text: '……願冰雪之下的亡靈得到安息。你走吧，活著的人不應該在這裡逗留。',
      },
    ],
    guardianHints: {
      creature: '看守的盔甲縫隙中不斷滲出冰霧——他的身體已經半冰晶化，介於生死之間。',
      treasure: '城堡大門的冰封之下隱約可見一枚鑰匙狀的冰元素結晶——那是開啟內殿的備用鑰匙。',
      spirit: '看守的靈魂被對王國的忠誠所束縛，千年來從未動搖。也許找到國王的遺詔能讓他獲得解脫。',
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
          '藥水也有備，紅的回血、藍的回魔。冒險者出門前一定要補給充足！',
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
          '大額交易建議透過我們進行，可以避免被騙。',
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
          '不過品質太差的東西我不收，砸了拍賣場的招牌可不行。',
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
          '越稀有的裝備，隱藏屬性越強。Boss 掉落的裝備尤其值得鑑定。',
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
};

/** 取得 NPC 定義 */
export function getNpc(npcId: string): NpcDef | undefined {
  return NPCS[npcId];
}

/** 取得房間內所有 NPC */
export function getNpcsByRoom(roomId: string): NpcDef[] {
  return Object.values(NPCS).filter(npc => npc.roomId === roomId);
}

/** 根據名稱模糊搜尋 NPC */
export function findNpcByName(name: string, roomId?: string): NpcDef | undefined {
  const candidates = roomId
    ? Object.values(NPCS).filter(npc => npc.roomId === roomId)
    : Object.values(NPCS);
  const q = name.toLowerCase();
  return candidates.find(
    npc => npc.name === name || npc.name.includes(name) || npc.id.includes(name) || npc.alias.toLowerCase() === q || npc.alias.toLowerCase().includes(q),
  );
}
