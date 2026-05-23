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
      'wooden_wand', 'apprentice_staff',
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
      'short_bow', 'long_bow', 'antidote',
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
    name: '托瑪',
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
        ],
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

  sunken_catacombs_lamp_keeper: {
    id: 'sunken_catacombs_lamp_keeper',
    name: '芮妲',
    alias: 'lampkeeper',
    title: '長明燈守油人',
    description:
      '一名守油人坐在長明燈龕旁，身邊擺著防水油瓶、乾燥火絨、繩索與幾枚從水裡撈出的青銅齒輪。' +
      '她每隔一會兒就用小銀勺替藍白燈火添油。',
    roomId: 'sunken_catacombs_lantern_niche',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'funeral_lamp_oil',
      'tidewheel_gear',
      'coffin_chain_link',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '買補給可以，吹燈不行。這盞火不是給死人看的，是給活人記得哪邊才是出口。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '長明燈油有什麼用？', nextId: 'oil' },
          { text: '哪些東西別賣？', nextId: 'evidence' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、長明燈油、水閘齒輪和棺鏈節都有。下去之前多帶一瓶油，黑水最會吃光。',
        action: { type: 'shop', data: { shopType: 'catacomb_lamps' } },
        options: [
          { text: '長明燈油有什麼用？', nextId: 'oil' },
          { text: '哪些東西別賣？', nextId: 'evidence' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'oil',
        text:
          '燈油能照出停屍間的真出口，也能讓溺誓亡騎短暫想起自己守的是誰。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會留著。', nextId: 'farewell' },
        ],
      },
      {
        id: 'evidence',
        text:
          '溺水騎士徽章和溺王冠碎片別賣。前者開路，後者說明深潮井下到底醒了什麼。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '火苗若變黑，就別往前了。那不是風，是水在看你。',
      },
    ],
    guardianHints: {
      creature: '芮妲知道哭者怨影與溺誓亡騎對長明燈油的反應。',
      treasure: '她的油箱旁整理著燈油、水閘齒輪與棺鏈節。',
      spirit: '她守的火是墓窟裡少數仍站在活人這邊的東西。',
    },
  },

  sunken_catacombs_crypt_reader: {
    id: 'sunken_catacombs_crypt_reader',
    name: '歐薇',
    alias: 'reader',
    title: '王冠墓文解讀者',
    description:
      '一名墓文解讀者站在哭者墓室的浮雕前，袖口綁著防水紙卷，指尖沾滿黑水與白粉。' +
      '她反覆比對哭者祈詞、騎士徽章與王冠鎖鏈圖案。',
    roomId: 'sunken_catacombs_mourner_crypt',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '王冠墓室裡躺的不是國王。他是第一個想命令深潮井的人，也是第一個被深潮井命令的人。',
        options: [
          { text: '需要哪些線索？', nextId: 'clues' },
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '王冠碎片呢？', nextId: 'crown' },
          { text: '我會記下墓文。', nextId: 'farewell' },
        ],
      },
      {
        id: 'clues',
        text:
          '長明燈油照路，溺水騎士徽章開墓階，黑水沉泥能判斷哪段碑文被井水改寫。',
        options: [
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '王冠碎片呢？', nextId: 'crown' },
        ],
      },
      {
        id: 'mourner',
        text:
          '不是所有哭聲都在哀悼。有些是在提醒你：不要把死者的名字交給井底。',
        options: [
          { text: '需要哪些線索？', nextId: 'clues' },
          { text: '我懂了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crown',
        text:
          '碎片能證明潮主還在，但拿太多會讓墓窟以為你想繼承那頂王冠。',
        options: [
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '讀墓文時不要只看名字。鎖鏈刻在哪裡，才是真正的句子。',
      },
    ],
    guardianHints: {
      creature: '歐薇能解釋哭者怨影、溺誓亡騎與溺冠潮主之間的墓文關係。',
      treasure: '她的拓本記錄王冠墓室與深淵蓄水池的封印句式。',
      spirit: '她讓沉沒墓窟不只是一座災難，也是一份仍能被讀懂的警告。',
    },
  },

  thundersteppe_nomad_guide: {
    id: 'thundersteppe_nomad_guide',
    name: '塔蘭',
    alias: 'guide',
    title: '雷原游牧嚮導',
    description:
      '一名披著濕皮披肩的游牧嚮導站在雷原入口銅鈴下，腰間掛著骨哨、風向石與避雷繩。' +
      '他說話很短，卻會在每次雷鳴後重新判斷天空。',
    roomId: 'thundersteppe_rolling_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進草原前先聽三次雷。第一聲看風，第二聲看獸，第三聲看你身上有多少金屬。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '風眼能進嗎？', nextId: 'eye' },
          { text: '我會聽雷。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先到游牧營地，再看天火台地和雷鼓石圈。若要進龍雷風眼，先拿到避雷符，否則雷牆會把你當成釘子。',
        options: [
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '風眼能進嗎？', nextId: 'eye' },
        ],
      },
      {
        id: 'beasts',
        text:
          '雷蹄巨豬走低地，風暴狼群走雨影，暴羽雷鷹走高柱。看到草浪反折時，不要站在路中間。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我會避開蹄線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'eye',
        text:
          '能進，但不是靠膽子。要懂鼓聲、渡口電流和玻岩反光，龍雷化身只放懂規矩的人靠近。',
        options: [
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若頭髮豎起，不要抬頭看天，先蹲下放低武器。',
      },
    ],
    guardianHints: {
      creature: '塔蘭能從草浪與雷聲判斷雷草疾行獸、雷蹄巨豬與風暴狼群的路線。',
      treasure: '他的風向石標出雷原入口、游牧營地與龍雷風眼的安全節奏。',
      spirit: '他把草原上的危險轉譯成旅人能遵守的規矩。',
    },
  },

  thundersteppe_storm_provisioner: {
    id: 'thundersteppe_storm_provisioner',
    name: '蘇拉',
    alias: 'provisioner',
    title: '風暴補給商',
    description:
      '一名補給商在游牧營地火塘旁整理防水皮袋，袋中分著蓄雷草、雷鷹電羽、抗電繩扣與藥瓶。' +
      '她把所有金屬器具都用皮革包住，避免交易時被雷火找上。',
    roomId: 'thundersteppe_nomad_camp',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'stormcharged_grass',
      'thunder_eagle_plume',
      'stormhoof_plate',
      'nomad_storm_charm',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '補給不只藥水。雷鳴草原需要避雷符、乾燥繩、能看風的草，還有知道什麼時候不該出發的人。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '避雷符怎麼用？', nextId: 'charm' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、蓄雷草、雷鷹電羽、雷蹄甲片和游牧避雷符都有。要去風眼，別空手。',
        action: { type: 'shop', data: { shopType: 'thundersteppe_supply' } },
        options: [
          { text: '避雷符怎麼用？', nextId: 'charm' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'charm',
        text:
          '避雷符不是護身符，是通行證。它表示你願意照部族規矩進風眼，不亂敲鼓、不亂拔羽、不亂追獸。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會守規矩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '蓄雷草看風，電羽看高空，雷熔玻片看落雷，雷蹄甲片看獸群。龍雷核火別賣，那是要交回來的證據。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '草原不怕你慢，只怕你在雷聲裡逞快。',
      },
    ],
    guardianHints: {
      creature: '蘇拉熟悉暴羽雷鷹、雷蹄獸母與引雷喚雷者需要避開的徵兆。',
      treasure: '她的補給袋中有蓄雷草、雷鷹電羽、雷蹄甲片與避雷符。',
      spirit: '她讓游牧營地成為風暴中的實用庇護點。',
    },
  },

  thundersteppe_drumspeaker: {
    id: 'thundersteppe_drumspeaker',
    name: '奧魯',
    alias: 'drumspeaker',
    title: '雷鼓祭語者',
    description:
      '一名祭語者坐在雷鼓石圈邊緣，手掌貼著中空巨石，像在聽裡面的雨水回答。' +
      '他的項鍊串著骨槌、玻片與一小段被雷火燒黑的皮鼓繩。',
    roomId: 'thundersteppe_drum_circle',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '鼓聲不是音樂，是和雷暴談條件。敲錯一拍，風眼會以為你在挑戰它。',
        options: [
          { text: '正確節奏是什麼？', nextId: 'rhythm' },
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '火坑要怎麼進？', nextId: 'crater' },
          { text: '我先聽。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rhythm',
        text:
          '先聽引雷柱林，再聽雷蹄渡口，最後才敲石圈。鼓點要留空，讓雷聲自己補上。',
        options: [
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '火坑要怎麼進？', nextId: 'crater' },
        ],
      },
      {
        id: 'avatar',
        text:
          '不是龍，是草原把風暴記憶捏成龍的樣子。你若只想屠龍，就會錯過真正的弱點。',
        options: [
          { text: '正確節奏是什麼？', nextId: 'rhythm' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crater',
        text:
          '帶避雷符、雷熔玻片與電羽。風眼裂開時不要奔跑，奔跑的人在雷眼裡像逃走的獵物。',
        options: [
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '先讓雷聲說完，再回答。草原討厭插話的人。',
      },
    ],
    guardianHints: {
      creature: '奧魯能判斷引雷喚雷者、風暴玻岩巨像與龍雷化身的節奏關係。',
      treasure: '他的鼓繩記錄雷鼓石圈、風暴玻岩與世界王火坑的進入順序。',
      spirit: '他把戰鬥前的準備轉化成和風暴協商的儀式。',
    },
  },

  glass_dunes_surveyor: {
    id: 'glass_dunes_surveyor',
    name: '瑟琳',
    alias: 'surveyor',
    title: '琉璃沙丘測光員',
    description:
      '一名披著遮光白布的測光員站在日照玻門邊，手裡拿著刻度鏡、黑鹽袋與被熱風磨白的地圖。' +
      '她每隔數息就把鏡面轉開，避免整張地圖被太陽燒穿。',
    roomId: 'glass_dunes_sun_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進沙丘前先學會看反光。亮的地方不一定是路，暗的地方也不一定安全。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '日火坑在哪？', nextId: 'crater' },
          { text: '我會看光。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先過鏡面沙坡，補水去暗水袋，想進宮門就找海市集影和黑曜井。別在正午穿過玻暴盆地。',
        options: [
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '日火坑在哪？', nextId: 'crater' },
        ],
      },
      {
        id: 'threats',
        text:
          '玻砂沙蜥看背光，鏡砂潛獵者看水袋，海市蜃怨看你的影子。找不到影子時，先停下。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crater',
        text:
          '日火坑在埋宮門和失朝祭壇之後。要帶日輪盤線索，否則你只會被玻砂帶回同一個入口。',
        options: [
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '我去找日輪盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '用布包住金屬，用鹽試幻影，用陰影記方向。',
      },
    ],
    guardianHints: {
      creature: '瑟琳能辨認玻砂沙蜥、鏡砂潛獵者與海市蜃怨留下的折光痕跡。',
      treasure: '她的測光圖標出日照玻門、暗水袋、海市集影和日火坑的相對位置。',
      spirit: '她把一片會說謊的沙海量成可走的路。',
    },
  },

  glass_dunes_mirage_trader: {
    id: 'glass_dunes_mirage_trader',
    name: '法希德',
    alias: 'trader',
    title: '海市補給商',
    description:
      '一名補給商在海市集影的破旗下擺攤，貨架半真半假，只有壓著黑曜井鹽的商品不會隨熱浪晃動。' +
      '他販售水袋、遮光布、玻砂材料與通往宮門的古印線索。',
    roomId: 'glass_dunes_mirage_bazaar',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'fused_glass_sand',
      'mirror_shard_plate',
      'obsidian_well_salt',
      'sunbleached_relic_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '看清楚再買。這裡有些攤位只收金幣，有些攤位收影子。我的攤位只收你願意付的東西。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些東西是真的？', nextId: 'real' },
          { text: '宮門要什麼？', nextId: 'door' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '水、藥、黑曜井鹽、玻砂、鏡砂甲片和日漂遺印。要去日火坑，別只帶武器。',
        action: { type: 'shop', data: { shopType: 'glass_dunes_supply' } },
        options: [
          { text: '哪些東西是真的？', nextId: 'real' },
          { text: '宮門要什麼？', nextId: 'door' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'real',
        text:
          '被鹽壓住的是真的，能投下影子的多半是真的，會跟你討價還價的就要小心。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'door',
        text:
          '埋宮門不認鑰匙，認對位線。日漂遺印能證明你不是幻影，失朝日輪盤能告訴門該往哪裡轉。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我去找日輪盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若你回到同一面破旗前，先別罵路，檢查自己的影子。',
      },
    ],
    guardianHints: {
      creature: '法希德知道鏡砂潛獵者會先割水袋，也知道海市蜃怨如何偽裝攤影。',
      treasure: '他的真貨壓著黑曜井鹽，包含熔融玻砂、鏡砂甲片與日漂遺印。',
      spirit: '他讓海市集影成為危險幻象中少數能交易的真實節點。',
    },
  },

  glass_dunes_sunwright: {
    id: 'glass_dunes_sunwright',
    name: '伊蘭',
    alias: 'sunwright',
    title: '日輪匠師',
    description:
      '一名匠師守在日輪熔臺陰影邊，皮圍裙被玻砂燒出細小孔洞。' +
      '他用稜鏡透核校準光線，試圖讓失控熔臺停止把沙海繼續熔成玻璃。',
    roomId: 'glass_dunes_solar_forge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '這座熔臺本來只是工坊，不是太陽的牢籠。古王朝把光線折得太準，才把災難也折了進來。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '日衛守什麼？', nextId: 'sentinel' },
          { text: '琉璃龍是什麼？', nextId: 'wyrm' },
          { text: '我先去找材料。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text:
          '需要稜鏡透核校光、黑曜井鹽降溫、日輪盤對位。少一樣，熔臺只會把你的影子燒到牆上。',
        options: [
          { text: '日衛守什麼？', nextId: 'sentinel' },
          { text: '琉璃龍是什麼？', nextId: 'wyrm' },
        ],
      },
      {
        id: 'sentinel',
        text:
          '失朝日衛不是單純的守門人。它們守的是日輪盤秩序，只要你站錯光線，就會被當成盜墓者。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '我會找陰影。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wyrm',
        text:
          '日火琉璃龍不是龍，是被鎖進玻璃裡的日火反噬。打牠前先讓祭壇投下陰影，否則吐息會被整座坑反射。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '別相信最亮的路。工匠活下來靠的是角度，不是膽量。',
      },
    ],
    guardianHints: {
      creature: '伊蘭能解釋稜鏡魔像守衛、日輪熔火元素與日火琉璃龍的光線弱點。',
      treasure: '他的校準盤需要稜鏡透核、黑曜井鹽與失朝日輪盤。',
      spirit: '他把古王朝工藝從神話拉回可修理的機械問題。',
    },
  },

  underground_city_lift_warden: {
    id: 'underground_city_lift_warden',
    name: '格倫姆',
    alias: 'warden',
    title: '升降門守衛',
    description:
      '一名穿著鉚釘護甲的守衛站在城邦升降門旁，手握升降鏈閘的銅柄。' +
      '他會先檢查通行牌，再提醒外來者別在階梯城邦裡亂闖工坊軌道。',
    roomId: 'underground_city_gate_lift',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '升降門只管兩件事：誰進城，誰帶著麻煩進城。你看起來至少不是第二種。',
        options: [
          { text: '入城規矩是什麼？', nextId: 'rules' },
          { text: '我該先去哪？', nextId: 'route' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rules',
        text: '市場交易要用交易牌，暗河搭船要通行券，熔爐排程要熱額券。黑市的事別在議事廳問。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我會照規矩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '抵達廣場能分流。想買東西去市場，想辦事去議事廳，想搭船就往暗河碼頭。',
        options: [
          { text: '入城規矩是什麼？', nextId: 'rules' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '走石階內側。外側給貨車和脾氣差的鐵匠。' },
    ],
    guardianHints: {
      creature: '地下城邦是安全城鎮，格倫姆會阻止戰鬥事件被帶進升降門。',
      treasure: '他掌握城邦交易牌、暗河通行券與熔爐熱額券的基本用途。',
      spirit: '他讓玩家理解地下城邦不是迷宮，而是一座有規矩的運作城市。',
    },
  },

  underground_city_portal_registrar: {
    id: 'underground_city_portal_registrar',
    name: '米芮',
    alias: 'registrar',
    title: '傳送廳登記員',
    description:
      '一名書記站在傳送廳藍光拱道前，桌上排著符文簿、目的地印章與防火墨水。' +
      '她的工作是確認每次傳送都能在帳本裡找到回程。',
    roomId: 'underground_city_portal_hall',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '傳送可以很快，也可以很麻煩。若你沒有登記，麻煩通常比你更快抵達。',
        options: [
          { text: '能傳去哪？', nextId: 'routes' },
          { text: '為什麼要登記？', nextId: 'record' },
          { text: '晚點再辦。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '目前只處理城內節點與已承認的外部入口。危險區域傳送要先去公會辦事處留任務紀錄。',
        options: [
          { text: '為什麼要登記？', nextId: 'record' },
          { text: '我去公會。', nextId: 'farewell' },
        ],
      },
      {
        id: 'record',
        text: '城邦在地底，走失的人不一定往下掉，有時會往錯誤年代掉。帳本至少能知道你本來該在哪。',
        options: [
          { text: '能傳去哪？', nextId: 'routes' },
          { text: '有道理。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別碰第三座拱門，它還沒承認今天是今天。' },
    ],
    guardianHints: {
      creature: '米芮不提供戰鬥內容，但會把危險區傳送需求導向公會任務流程。',
      treasure: '她能發放或驗證城邦正式服務紀錄。',
      spirit: '她把地下城邦的移動系統變成可追蹤的行政服務。',
    },
  },

  underground_city_market_factor: {
    id: 'underground_city_market_factor',
    name: '托瑪',
    alias: 'factor',
    title: '市場管事',
    description:
      '一名市場管事坐在市場露臺的秤臺旁，身後是藥水、菌燈油、繩索和一串串青銅交易牌。' +
      '他說話像報價，短促、準確、不留太多討價空間。',
    roomId: 'underground_city_market_terrace',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'lantern_fungus_oil',
      'undercity_trade_token',
      'antidote',
      'small_hp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '市場露臺收金幣，也收可信紀錄。沒有交易牌，就別抱怨價格像石頭一樣硬。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '交易牌有什麼用？', nextId: 'token' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、菌燈油、繩索、火把、交易牌。要去下層街或暗河，先補光。',
        action: { type: 'shop', data: { shopType: 'underground_city_market' } },
        options: [
          { text: '交易牌有什麼用？', nextId: 'token' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'token',
        text: '交易牌讓商鋪知道你不是剛從暗河撈上來的影子。公開交易、修補排程、貨物寄存都會看它。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離開市場前數一次錢，離開黑市前數兩次手指。' },
    ],
    guardianHints: {
      creature: '托瑪維持市場安全，不讓城鎮服務區變成戰鬥區。',
      treasure: '他的攤位提供菌燈油、城邦交易牌和基礎補給。',
      spirit: '他把地下城邦的生活感落在可用的交易節點上。',
    },
  },

  underground_city_black_broker: {
    id: 'underground_city_black_broker',
    name: '席芙',
    alias: 'broker',
    title: '黑市掮客',
    description:
      '一名掮客靠在黑市暗巷的熱管旁，指尖把半合法暗印翻來翻去。' +
      '她不提高聲量，因為在這條巷子裡，聽得太清楚也是一種風險。',
    roomId: 'underground_city_black_market',
    type: 'merchant',
    shopItems: [
      'black_market_seal',
      'darkriver_pass',
      'smoke_bomb',
      'lantern_fungus_oil',
      'antidote',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '你要買合法的東西，去市場。你要買不方便合法的東西，可以先把聲音放低。',
        options: [
          { text: '我看看暗貨。', nextId: 'shop' },
          { text: '黑市暗印是什麼？', nextId: 'seal' },
          { text: '我只是路過。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '暗印、暗河通行券、開鎖工具、煙霧彈、菌燈油。東西是真的，帳不一定是真的。',
        action: { type: 'shop', data: { shopType: 'underground_city_black_market' } },
        options: [
          { text: '黑市暗印是什麼？', nextId: 'seal' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seal',
        text: '暗印代表城邦默許某件事發生，但不希望它太公開。別拿去議事廳炫耀。',
        options: [
          { text: '我看看暗貨。', nextId: 'shop' },
          { text: '懂了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '從走私碼頭離開時，別回頭看第二盞綠燈。那不是給你的。' },
    ],
    guardianHints: {
      creature: '席芙處理地下城邦的風險交易，但仍是城鎮服務 NPC。',
      treasure: '她提供黑市暗印、暗河通行券與潛行補給。',
      spirit: '她讓黑市成為有規則的灰色服務，而不是無差別危險區。',
    },
  },

  underground_city_guild_clerk: {
    id: 'underground_city_guild_clerk',
    name: '奧登',
    alias: 'clerk',
    title: '公會辦事員',
    description:
      '一名辦事員坐在公會辦事處厚石櫃檯後，將任務委託、傳送紀錄與危險區報告分成不同顏色的石片。' +
      '他看起來不急，但每份文件都被推到正確的位置。',
    roomId: 'underground_city_guild_office',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '委託要寫清楚。地底最常見的死法不是怪物，是「我以為那條路能走」。',
        options: [
          { text: '有哪些委託？', nextId: 'quests' },
          { text: '危險區怎麼登記？', nextId: 'danger' },
          { text: '我整理一下。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quests',
        text: '目前缺暗河水位紀錄、熔爐排程簽收、舊地基踏勘報告。你能活著回來，就能拿下一份。',
        options: [
          { text: '危險區怎麼登記？', nextId: 'danger' },
          { text: '我會回報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '先在傳送廳留回程，再在我這裡留目的地。沒有回程紀錄的委託，酬金會先扣一半當找人費。',
        options: [
          { text: '有哪些委託？', nextId: 'quests' },
          { text: '合理。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '文件別折。折痕會讓石片讀錯名字。' },
    ],
    guardianHints: {
      creature: '奧登把地下城邦連到外部危險區任務，不在城內生成戰鬥。',
      treasure: '他能驗證通行、任務與傳送紀錄。',
      spirit: '他提供城市的任務樞紐感。',
    },
  },

  underground_city_forge_master: {
    id: 'underground_city_forge_master',
    name: '巴洛克',
    alias: 'forgemaster',
    title: '熔爐總匠',
    description:
      '一名總匠站在熔爐廣場熱浪前，鬍鬚被銅環束起，手上握著能測熱的黑鐵尺。' +
      '他能從火色判斷金屬心情，也能從冒險者護甲刮痕判斷他們是不是亂站。',
    roomId: 'underground_city_forge_square',
    type: 'merchant',
    shopItems: [
      'forge_heat_voucher',
      'iron_ore',
      'mithril_ore',
      'crystal_shard',
      'lantern_fungus_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '熔爐不缺火，缺的是排程。你有熱額券，就有工位；沒有，就等火自己冷。',
        options: [
          { text: '我看看工坊材料。', nextId: 'shop' },
          { text: '熱額券怎麼用？', nextId: 'voucher' },
          { text: '先不打擾。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '熱額券、礦石、水晶碎片、菌燈油。修補鋪能做小活，坩堝工坊做大活。',
        action: { type: 'shop', data: { shopType: 'underground_city_forge' } },
        options: [
          { text: '熱額券怎麼用？', nextId: 'voucher' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'voucher',
        text: '熱額券買的是熔爐時間，不是成功保證。材料太爛，神也只能鍛出漂亮垃圾。',
        options: [
          { text: '我看看工坊材料。', nextId: 'shop' },
          { text: '懂了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把濕靴踩上熔臺。上個人現在還黏在鐵軌邊。' },
    ],
    guardianHints: {
      creature: '巴洛克代表熔爐廣場的製作服務，不需要新增城內怪物。',
      treasure: '他供應熔爐熱額券、礦石與工坊材料。',
      spirit: '他讓地下城邦的火元素變成產業，而不是單純戰鬥。',
    },
  },

  underground_city_innkeeper: {
    id: 'underground_city_innkeeper',
    name: '蓮娜',
    alias: 'innkeeper',
    title: '旅店洞廳掌櫃',
    description:
      '一名掌櫃在旅店洞廳的石櫃檯後擦拭杯盞，牆上掛滿從各層街道收來的路牌。' +
      '洞廳裡有暖霧、菌燈和足夠厚的門，能讓旅人暫時忘記地底有多深。',
    roomId: 'underground_city_inn_cavern',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'large_hp_potion',
      'small_mp_potion',
      'medium_mp_potion',
      'lantern_fungus_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '床位、熱湯、乾靴。這三樣比英雄故事可靠，尤其是在地下。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪裡能休息？', nextId: 'rest' },
          { text: '晚點回來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水和菌燈油都有。要走暗河，先買燈；要進工坊，先喝水。',
        action: { type: 'shop', data: { shopType: 'underground_city_inn' } },
        options: [
          { text: '哪裡能休息？', nextId: 'rest' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rest',
        text: '洞廳、蒸汽浴場、菌燈庭園都能讓人緩過來。別在走私碼頭睡，醒來時名字可能會少一半。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '門閂是免費的，但記得自己扣上。' },
    ],
    guardianHints: {
      creature: '蓮娜強化地下城邦作為安全補給點的定位。',
      treasure: '她提供恢復補給與菌燈油。',
      spirit: '她讓城市有休息與長線探索前整備的功能。',
    },
  },

  underground_city_ferryman: {
    id: 'underground_city_ferryman',
    name: '莫瑞克',
    alias: 'ferryman',
    title: '暗河船頭',
    description:
      '一名船頭靠在暗河碼頭的石樁旁，黑水拍打船腹，船燈裡燃著淡綠菌油。' +
      '他一眼就能看出誰是乘客，誰是會把船弄沉的麻煩。',
    roomId: 'underground_city_darkriver_quay',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '暗河不問你從哪來，只問你有沒有通行券。沒券的人，也可以游。',
        options: [
          { text: '通行券去哪用？', nextId: 'pass' },
          { text: '暗河通往哪？', nextId: 'routes' },
          { text: '我還沒準備好。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pass',
        text: '碼頭、走私碼頭、幾條不在公開地圖上的支流。通行券買的是位置，不買保證。',
        options: [
          { text: '暗河通往哪？', nextId: 'routes' },
          { text: '我去買券。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '北接蒸汽浴場排水，南接走私碼頭，還有幾條老地基下的舊水路。別問第三條，先活過第二條。',
        options: [
          { text: '通行券去哪用？', nextId: 'pass' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '上船前把燈買好。暗河不喜歡替人照路。' },
    ],
    guardianHints: {
      creature: '莫瑞克提供交通與危險提醒，不把暗河碼頭改成戰鬥房。',
      treasure: '他認暗河通行券與菌燈油。',
      spirit: '他把城邦下層的交通感具體化。',
    },
  },

  cursed_graveyard_watch_keeper: {
    id: 'cursed_graveyard_watch_keeper',
    name: '艾妲',
    alias: 'keeper',
    title: '守夜燈亭看守',
    description:
      '一名披著防霧斗篷的看守站在守夜燈亭殘燈旁，手裡握著一截裂鐘舌和沾著黑蠟的火鉗。' +
      '她會先看旅人的影子是否完整，再決定要不要回答問題。',
    roomId: 'cursed_graveyard_watch_lantern',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進墓園前先數影子。你有一個，暫時還算活人。',
        options: [
          { text: '墓鐘為什麼響？', nextId: 'bell' },
          { text: '黑霧怎麼避？', nextId: 'mist' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'bell',
        text: '鐘樓沒人，但鐘聲會點名。被點到的骸兵會爬回葬列，被點到的生者最好別答應。',
        options: [
          { text: '黑霧怎麼避？', nextId: 'mist' },
          { text: '我不回應鐘聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'mist',
        text: '黑霧靠冷燭和封蠟繞路。看不見墓碑時別直走，先找守夜燈、破聖像或骨牆。',
        options: [
          { text: '墓鐘為什麼響？', nextId: 'bell' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見自己的名字從棺裡傳出來，別回答。名字可以重取，命不行。' },
    ],
    guardianHints: {
      creature: '艾妲能說明墓鐘骸兵、黑羽怨影與黑霧池的行動徵兆。',
      treasure: '她需要墓鐘舌片、黑霧殘渣與守墓封蠟來校正燈亭。',
      spirit: '她讓墓園入口成為仍能求生的最後秩序點。',
    },
  },

  cursed_graveyard_grave_seller: {
    id: 'cursed_graveyard_grave_seller',
    name: '羅文',
    alias: 'seller',
    title: '掘墓棚補給人',
    description:
      '一名沉默的補給人守在掘墓棚內，把冷燭、聖水、封蠟和撬棺工具分開擺放。' +
      '他的貨架上沒有裝飾，只有每件物品被使用後可能多活多久的粗略標記。',
    roomId: 'cursed_graveyard_gravedigger_shack',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'grave_bone_shard',
      'grave_bell_clapper',
      'black_mist_residue',
      'cracked_saint_lens',
      'gravekeeper_wax_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '你要買能活著出去的東西，不是好看的東西。墓園不欣賞品味。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、墓園骨片、墓鐘舌片、黑霧殘渣、破聖像透片、守墓封蠟。買之前先想好要走哪條路。',
        action: { type: 'shop', data: { shopType: 'cursed_graveyard_supply' } },
        options: [
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '骨片看葬列，舌片聽墓鐘，黑霧殘渣看詛咒，聖像透片看真影，封蠟看哪口棺不該開。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把空棺當路標。空棺通常在等人補上。' },
    ],
    guardianHints: {
      creature: '羅文熟悉瘟棺抬行者、墓誓亡騎與守墓地窖監守的掉落證物。',
      treasure: '他的棚內販售墓園材料與深入墓園前的恢復補給。',
      spirit: '他把死亡地景轉化成玩家能理解的補給與線索系統。',
    },
  },

  cursed_graveyard_litany_reader: {
    id: 'cursed_graveyard_litany_reader',
    name: '瑪席雅',
    alias: 'reader',
    title: '悼詞解讀者',
    description:
      '一名解讀者跪坐在禮拜堂廢墟的斷椅旁，膝上攤著被黑霧咬壞的悼詞拓本。' +
      '她用破聖像透片壓住書頁，避免字句自己爬回巫妖陵寢。',
    roomId: 'cursed_graveyard_chapel_ruin',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '這裡的悼詞不是給死者聽，是給墓園聽。念錯一句，整座墓園都會以為葬禮還沒結束。',
        options: [
          { text: '巫妖在守什麼？', nextId: 'lich' },
          { text: '悼詞頁有什麼用？', nextId: 'page' },
          { text: '我先不碰書。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lich',
        text:
          '月悼巫妖守祭壇，鐘墓巫妖主守結尾。只要鐘聲和悼詞互相接上，亡者就永遠不會被送走。',
        options: [
          { text: '悼詞頁有什麼用？', nextId: 'page' },
          { text: '我要切斷鐘聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'page',
        text:
          '悼詞頁不是戰利品，是證據。收齊後能知道哪一句把整座墓園鎖住，也能知道該在哪裡停下誦讀。',
        options: [
          { text: '巫妖在守什麼？', nextId: 'lich' },
          { text: '我會帶回來。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你必須讀悼詞，讀到自己的名字前就停。' },
    ],
    guardianHints: {
      creature: '瑪席雅能解釋月悼巫妖、鐘墓巫妖主與破聖像鬼的儀式關係。',
      treasure: '她需要巫妖悼詞頁與破聖像透片來重建詛咒祈文。',
      spirit: '她把墓園 Boss 線索包裝成可以追查與中斷的儀式。',
    },
  },

  storm_highlands_cliff_guide: {
    id: 'storm_highlands_cliff_guide',
    name: '卡瑞克',
    alias: 'guide',
    title: '高原攀風嚮導',
    description:
      '一名嚮導把攀繩纏在峭壁入口的鐵樁上，肩上披著被雨打硬的羽斗篷。' +
      '他會先看雲層流速，再決定今天要不要讓外來者上雲索橋。',
    roomId: 'storm_highlands_cliff_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '高原路不是往上走，是先學會什麼時候不要被風帶走。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '獅鷲在哪？', nextId: 'griffin' },
          { text: '我會壓低身子。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先過風切小徑，看雨棚岩臺和雲索橋。要進暴風眼，先拿風壇殘鈴，不然風牆會把你送回崖底。',
        options: [
          { text: '獅鷲在哪？', nextId: 'griffin' },
          { text: '我去找殘鈴。', nextId: 'farewell' },
        ],
      },
      {
        id: 'griffin',
        text: '哨臺是巡邏，巢臺是領地，王峰是禁區。看見風暴羽逆風飄時，代表牠們已經在你上方。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繩結打三次。第一個給手，第二個給命，第三個給風。' },
    ],
    guardianHints: {
      creature: '卡瑞克能辨識風切隼、暴角岩羊、雲橋掠風者與風哨獅鷲的活動路線。',
      treasure: '他的攀風圖標出風壇殘鈴、風暴玻礦與風王冠羽的用途。',
      spirit: '他把高原的垂直危險轉成玩家可遵守的攀行規則。',
    },
  },

  storm_highlands_aerie_keeper: {
    id: 'storm_highlands_aerie_keeper',
    name: '琳娜',
    alias: 'keeper',
    title: '獅鷲巢臺看守',
    description:
      '一名巢臺看守躲在天葬石堆後的背風處，整理折斷羽管、風壇殘鈴與礦脈碎片。' +
      '她的手套上滿是爪痕，但每一道都被仔細縫回原位。',
    roomId: 'storm_highlands_sky_cairns',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'highland_stormfeather',
      'stormgoat_horn',
      'stormglass_ore',
      'wind_altar_chime',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西時別背對巢臺。獅鷲不介意你交易，但牠們討厭你假裝天空不存在。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '風王要怎麼打？', nextId: 'king' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、風暴羽、山羊角、風暴玻礦、風壇殘鈴都有。要去王峰，至少把鈴帶上。',
        action: { type: 'shop', data: { shopType: 'storm_highlands_supply' } },
        options: [
          { text: '風王要怎麼打？', nextId: 'king' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'king',
        text: '風王不是只靠翅膀。牠會改風向、叫巢群、把你的位置變成錯誤。先聽殘鈴，再看雲影。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會看雲影。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你覺得風突然安靜，不是安全，是牠們正在俯衝。' },
    ],
    guardianHints: {
      creature: '琳娜能說明風哨獅鷲、暴風眼飛龍與風王獅鷲的高空節奏。',
      treasure: '她提供風暴羽、山羊角、風暴玻礦與風壇殘鈴。',
      spirit: '她把獅鷲巢線與王峰 Boss 線索接成可準備的補給節點。',
    },
  },

  blackwood_hunter_guide: {
    id: 'blackwood_hunter_guide',
    name: '瑟恩',
    alias: 'guide',
    title: '黑木獵徑嚮導',
    description:
      '一名獵人靠在炭樹入口旁，斗篷外層塗著黑木炭皮，腰間掛著刻痕符與不點燃的短燈。' +
      '他看路時不看前方，而是看樹影是否少了一截。',
    roomId: 'blackwood_charcoal_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '黑木林會換位置。你若只記路，就已經迷路了。',
        options: [
          { text: '怎麼辨認真路？', nextId: 'route' },
          { text: '林裡最危險的是什麼？', nextId: 'threats' },
          { text: '我會看刻痕。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '看獵人刻痕符、看樹影缺口、看渡鴉是否逆著風站。若三者不同，跟最安靜的那條路走。',
        options: [
          { text: '林裡最危險的是什麼？', nextId: 'threats' },
          { text: '我去找刻痕符。', nextId: 'farewell' },
        ],
      },
      {
        id: 'threats',
        text: '影狼找火，蛛網找影子，女巫找你的判斷。真正的危險在黑心木核，因為那裡會讓整座森林替它移動。',
        options: [
          { text: '怎麼辨認真路？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '火把能照路，也能把你賣給森林。少用，快走。' },
    ],
    guardianHints: {
      creature: '瑟恩能辨認炭皮影狼、黑木織影蛛、渡鴉咒獵者與幽根黑樹人的活動痕跡。',
      treasure: '他的刻痕符說明黑木炭皮、幽影蛛絲、夜蕨毒液與黑心木影核的用途。',
      spirit: '他把黑木林的換位規則轉成玩家可以追蹤的生存方法。',
    },
  },

  blackwood_witch_supplier: {
    id: 'blackwood_witch_supplier',
    name: '芙洛',
    alias: 'supplier',
    title: '夜蕨藥袋商',
    description:
      '一名藥袋商在女巫樹洞外整理黑苔、夜蕨毒液與幽影蛛絲，身後的短燈被三層黑布包住。' +
      '她不像女巫，卻熟悉女巫留下的每一種錯路。',
    roomId: 'blackwood_witch_hollow',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'blackbark_charcoal',
      'umbral_spider_silk',
      'nightfern_venom',
      'hunter_mark_charm',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給、解毒、遮光。黑木林裡這三樣比刀重要，刀只會讓你死得比較有信心。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '黑心木核怎麼進？', nextId: 'heart' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、黑木炭皮、幽影蛛絲、夜蕨毒液、獵人刻痕符。要進林心，別空手。',
        action: { type: 'shop', data: { shopType: 'blackwood_supply' } },
        options: [
          { text: '黑心木核怎麼進？', nextId: 'heart' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '先過長老樹環，再看倒塌小祠的根道。黑心木王會改路，刻痕符只能告訴你哪條路還是真的。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會帶刻痕符。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你的影子先走進樹洞，你就別跟著了。' },
    ],
    guardianHints: {
      creature: '芙洛能提示夜蕨女巫、灰盲暗精靈弓手、骨鈴潛行者與黑心木王的危險徵兆。',
      treasure: '她販售黑木炭皮、幽影蛛絲、夜蕨毒液與獵人刻痕符。',
      spirit: '她讓黑木林的材料和林心 Boss 線索形成可準備的補給節點。',
    },
  },

  lost_capital_gate_archivist: {
    id: 'lost_capital_gate_archivist',
    name: '伊薇特',
    alias: 'archivist',
    title: '王都外門檔案官',
    description:
      '一名檔案官站在王都外門殘柱下，懷裡抱著被時間裂痕燒焦的城門名冊。' +
      '她用白石像鬼眼當鎮紙，避免紙頁回到崩壞前一刻。',
    roomId: 'lost_capital_outer_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進王都前先記住：這裡不是廢墟，是一座還在執行最後命令的城市。',
        options: [
          { text: '最後命令是什麼？', nextId: 'order' },
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'order',
        text: '守衛守門，書吏抄名，裁決官判案，王座等待加冕。問題是，王已經不在。',
        options: [
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先過寂靜王道，找停鐘廣場和檔案館。要進空王座，沒有加冕封印就只是送進下一段重演。',
        options: [
          { text: '最後命令是什麼？', nextId: 'order' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若守衛問你效忠誰，不要回答「王」。這座城會當真。' },
    ],
    guardianHints: {
      creature: '伊薇特能解釋寂靜王道守衛、停鐘白石像鬼與檔案巫妖書吏的命令來源。',
      treasure: '她需要王都時砂玻、白石像鬼眼與議政蠟版來重建崩壞紀錄。',
      spirit: '她把失落王都的時間停滯轉成可調查的行政與儀式線索。',
    },
  },

  lost_capital_relic_broker: {
    id: 'lost_capital_relic_broker',
    name: '賽佛',
    alias: 'broker',
    title: '凝固市集遺物商',
    description:
      '一名遺物商在凝固市集的石攤後整理半透明時砂瓶、蠟版碎片與王家封印拓本。' +
      '他的攤位不喊價，因為王都裡連討價還價都可能被時間記住。',
    roomId: 'lost_capital_frozen_market',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'royal_timeglass',
      'marble_gargoyle_eye',
      'senate_wax_tablet',
      'coronation_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買遺物前先想清楚。王都的東西很少壞掉，但很常把買主拖回壞掉那一刻。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '空王座需要什麼？', nextId: 'throne' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、王都時砂玻、白石像鬼眼、議政蠟版、加冕封印。要去王座前廳，至少帶封印。',
        action: { type: 'shop', data: { shopType: 'lost_capital_relics' } },
        options: [
          { text: '空王座需要什麼？', nextId: 'throne' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'throne',
        text: '封印開門，蠟版證明判決，時砂玻校正長廊。至於冠影，只有空王座君影願意交出來。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在停鐘廣場數錢。你會一直數到同一枚。' },
    ],
    guardianHints: {
      creature: '賽佛能提示凝市影決鬥者、審判廳裁決官、時裂攝政影與空王座君影的通行需求。',
      treasure: '他的攤位供應時砂玻、像鬼眼、議政蠟版與加冕封印。',
      spirit: '他把王都考古物轉成可補給的通行與儀式材料。',
    },
  },

  lost_capital_sun_chaplain: {
    id: 'lost_capital_sun_chaplain',
    name: '奧蕾雅',
    alias: 'chaplain',
    title: '日輪禮拜堂殘牧',
    description:
      '一名殘牧坐在日輪禮拜堂斷光下，聖袍一半仍亮，一半已被時裂燒黑。' +
      '她記得加冕儀式的每一句禱詞，也記得哪一句開始出錯。',
    roomId: 'lost_capital_sun_chapel',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '王座不是空的。它坐著一個命令：繼續等待。',
        options: [
          { text: '加冕儀式錯在哪？', nextId: 'rite' },
          { text: '君影是什麼？', nextId: 'sovereign' },
          { text: '我先聽禱詞。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rite',
        text:
          '封印打開前，攝政影改了誓詞。於是王沒有登座，城市卻已經跪下。那一刻被時裂保存到現在。',
        options: [
          { text: '君影是什麼？', nextId: 'sovereign' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sovereign',
        text:
          '空王座君影不是國王，是整座城市對國王的需要。你若只攻擊它，王都會繼續造出下一個。',
        options: [
          { text: '加冕儀式錯在哪？', nextId: 'rite' },
          { text: '我會找冠影。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '踏上紅毯前，先確認你不是被王都選中的替代品。' },
    ],
    guardianHints: {
      creature: '奧蕾雅能解釋日輪殘翼使、時裂攝政影與空王座君影的儀式關係。',
      treasure: '她需要加冕封印、空王座冠影與時砂玻來重建錯誤加冕。',
      spirit: '她把終局 Boss 線索包裝成加冕儀式的調查鏈。',
    },
  },

  sky_isles_lift_cartographer: {
    id: 'sky_isles_lift_cartographer',
    name: '諾亞',
    alias: 'cartographer',
    title: '升空碼頭測高員',
    description:
      '一名測高員坐在升空碼頭的絞盤旁，面前攤著會自己浮起的島圖。' +
      '他用浮空符文片壓住地圖邊角，避免整張圖飄進雲海。',
    roomId: 'sky_isles_lift_dock',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '上島前先記高度。方向會騙你，高度比較誠實。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '天空核心在哪？', nextId: 'core' },
          { text: '我會看高度。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走鐵鏈雲橋和符文錨臺，再過折光堤道。要進世界王浮島，風暴井核能穩住風牆。',
        options: [
          { text: '天空核心在哪？', nextId: 'core' },
          { text: '我去找井核。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '最高島後面還有核心聖所。別只看橋，橋斷了還能退；核心若失衡，整片群島會一起往下走。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若腳下石板忽然變輕，別跳，那不是好消息。' },
    ],
    guardianHints: {
      creature: '諾亞能說明雲銀風鳶、符文錨魔像、風暴井渦靈與升天橋雷龍的路線關係。',
      treasure: '他的浮島圖標出浮空符文片、風暴井核與天空核心聖物的用途。',
      spirit: '他把浮空群島的垂直路線轉成玩家能追蹤的高度規則。',
    },
  },

  sky_isles_relic_keeper: {
    id: 'sky_isles_relic_keeper',
    name: '賽菈',
    alias: 'keeper',
    title: '雲上市遺物保管人',
    description:
      '一名保管人在浮市殘街的破攤前整理雲銀長羽、光環稜核和符文碎片。' +
      '她的貨箱用三條細鏈拴住，防止交易到一半飛走。',
    roomId: 'sky_isles_sky_market_ruin',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'sky_rune_shard',
      'cloudsilver_plume',
      'halo_prism_core',
      'stormwell_core',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買之前先抓穩欄杆。雲上市的老規矩：貨物掉下去歸雲海，買主掉下去也一樣。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '世界王浮島要什麼？', nextId: 'boss' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '高階藥水、符文片、雲銀長羽、光環稜核、風暴井核。越往上，越需要能把你留在島上的東西。',
        action: { type: 'shop', data: { shopType: 'sky_isles_relics' } },
        options: [
          { text: '世界王浮島要什麼？', nextId: 'boss' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'boss',
        text: '風暴井核開風牆，光環稜核穩神殿門，天空核心聖物只有核心執政體會放手。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別相信太平的雲。它只是還沒輪到你掉下去。' },
    ],
    guardianHints: {
      creature: '賽菈能提示天鏡光靈、斷碑雷衛、光環庭院裁定者與天空核心執政體的素材需求。',
      treasure: '她供應符文片、雲銀長羽、光環稜核與風暴井核。',
      spirit: '她把浮空群島的高階素材與終局入口連成可補給的節點。',
    },
  },

  deepsea_temple_tidekeeper: {
    id: 'deepsea_temple_tidekeeper',
    name: '瑟恩',
    alias: 'tidekeeper',
    title: '潮汐石門守潮人',
    description:
      '一名守潮人站在潮汐石門的藍火旁，披肩上縫著海鹽、珊瑚與褪色祭司符帶。' +
      '他用銅杖敲擊地面測量水流，記錄每一次暗流倒轉的時間。',
    roomId: 'deepsea_temple_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別急著進門。這座神殿不是迷路，它是在等你走進錯誤的潮汐。',
        options: [
          { text: '該怎麼判斷潮汐？', nextId: 'tide' },
          { text: '潮汐王座在哪？', nextId: 'throne' },
          { text: '我先調整裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tide',
        text: '藍火向內倒，魚人巡邏；貝殼無聲，神諭影靠近；潮鐘若響三次，就別在橋上停留。',
        options: [
          { text: '潮汐王座在哪？', nextId: 'throne' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'throne',
        text: '從月池入書庫，拿潮鐘齒輪；過骨錨與鯨骨橋，禁壇封印會告訴你王座還願不願開口。',
        options: [
          { text: '該怎麼判斷潮汐？', nextId: 'tide' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見有人在水裡叫你的名字，不要回頭。那通常不是活人。' },
    ],
    guardianHints: {
      creature: '瑟恩能提示藍火魚人衛、歌礁水母怨靈、珍珠神諭影與潮汐王座利維坦的路線關係。',
      treasure: '他會指出藍火珊瑚、潮鐘齒輪、禁壇封印與王座核心在儀式中的用途。',
      spirit: '他把深海神殿的暗流規則轉成玩家能理解的進攻順序。',
    },
  },

  deepsea_temple_relic_diver: {
    id: 'deepsea_temple_relic_diver',
    name: '米菈',
    alias: 'diver',
    title: '貝殼庭院遺物潛商',
    description:
      '一名遺物潛商坐在貝殼庭院的碎柱旁，身邊掛滿防水藥瓶、潮鐘零件和用繩索串起的珍珠。' +
      '她的潛水盔裂著一道縫，縫中卻穩定冒出藍火微光。',
    roomId: 'deepsea_temple_shell_court',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'bluefire_coral',
      'abyssal_pearl',
      'tideclock_gear',
      'whalebone_relic',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西前先數好氣泡。這裡最貴的不是遺物，是你回程時還剩幾口氣。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '禁壇需要什麼？', nextId: 'altar' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '高階藥水、藍火珊瑚、深淵珍珠、潮鐘齒輪、鯨骨聖片。想走到王座，最好別只帶勇氣。',
        action: { type: 'shop', data: { shopType: 'deepsea_temple_relics' } },
        options: [
          { text: '禁壇需要什麼？', nextId: 'altar' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '珍珠聽神諭，齒輪校潮鐘，鯨骨穩封印。禁壇封印本身，通常得從那些會說古神話的怪物身上拿。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '回來時別把影子留在神諭室。少了影子的人很難討價還價。' },
    ],
    guardianHints: {
      creature: '米菈能提示抄魂者、潮鐘幼九頭蛇、鯨骨錨巨像與古神低語畸體的掉落需求。',
      treasure: '她供應深海神殿材料與高階藥水，補足前往禁壇和王座前的補給節點。',
      spirit: '她把高階素材、商店補給與終局通行物整合成一個可回訪的服務點。',
    },
  },

  obsidian_depths_mine_foreman: {
    id: 'obsidian_depths_mine_foreman',
    name: '葛朗',
    alias: 'foreman',
    title: '深層礦梯工頭',
    description:
      '一名老礦工守在深層礦梯旁，鬍鬚被硫煙燻成灰黑，手上的測溫錘仍亮著暗紅刻度。' +
      '他把每條礦脈的熱壓變化記在鐵牌上，避免採集隊走進會自燃的黑曜路線。',
    roomId: 'obsidian_depths_mine_lift',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '下礦前先看錘溫。黑曜會照出你的臉，也會照出你死在哪條路。',
        options: [
          { text: '哪條路能採礦？', nextId: 'route' },
          { text: '世界熔爐在哪？', nextId: 'forge' },
          { text: '我先檢查裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '鏡黑礦脈採碎片，硫磺氣袋採硫心礦。若鎖鏈長廊開始自己響，代表熔爐鏈衛醒了。',
        options: [
          { text: '世界熔爐在哪？', nextId: 'forge' },
          { text: '我會標記路線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '過黑玻橋，拿熔鎖印記，再從心鏡廳進核心。別相信心鏡裡比較輕鬆的那條路，那通常是惡魔給你的。',
        options: [
          { text: '哪條路能採礦？', nextId: 'route' },
          { text: '我去找印記。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若靴底開始黏住地面，別省那瓶藥水，跑。' },
    ],
    guardianHints: {
      creature: '葛朗能提示碎曜爬行獸、硫煙小魔、熔爐鏈衛與熔鎖門監守的路線風險。',
      treasure: '他會說明鏡面黑曜碎片、硫心礦與熔鎖印記的用途。',
      spirit: '他把資源區的採集節奏轉成熱壓、反光與鎖鏈聲三種可辨識訊號。',
    },
  },

  obsidian_depths_relic_smelter: {
    id: 'obsidian_depths_relic_smelter',
    name: '蓓菈',
    alias: 'smelter',
    title: '棄市礦棚遺物熔匠',
    description:
      '一名熔匠在棄市礦棚搭起臨時坩堝，黑玻鏈環、核心鑽頭和半熔藥瓶分類排在耐火布上。' +
      '她的護目鏡被黑曜反光刮花，卻仍能精準看出材料的熔點。',
    roomId: 'obsidian_depths_obsidian_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'mirror_obsidian_shard',
      'sulfur_heart_ore',
      'blackglass_chain_link',
      'ancient_forge_cinder',
      'core_drill_bit',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買就快，坩堝下一次升溫時，這裡連價格牌都會融掉。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '熔鎖門要什麼？', nextId: 'lock' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、黑曜碎片、硫心礦、黑玻鏈環、古爐餘燼、核心鑽頭。越接近核心，越需要買能讓你回頭的東西。',
        action: { type: 'shop', data: { shopType: 'obsidian_depths_relics' } },
        options: [
          { text: '熔鎖門要什麼？', nextId: 'lock' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lock',
        text: '鏈環修門，餘燼校溫，鑽頭開殼。熔鎖印記得從監守身上取，不然黑曜心鏡只會讓你繞回原點。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '我去找監守。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把剛買的材料放在心鏡前。影子也會想偷。' },
    ],
    guardianHints: {
      creature: '蓓菈能提示黑玻魔像、熔爐鏈衛、心鏡暗魔與世界熔爐巨像的材料關係。',
      treasure: '她供應黑曜深層材料與高階藥水，讓資源區有可回訪補給點。',
      spirit: '她把採集、熔煉與核心通行物整合成棄市礦棚的交易節點。',
    },
  },

  obsidian_depths_fire_shrine_adept: {
    id: 'obsidian_depths_fire_shrine_adept',
    name: '伊洛',
    alias: 'adept',
    title: '深層火祠守焰學徒',
    description:
      '一名守焰學徒跪在深層火祠前，火光把他的影子投在黑曜牆上，影子卻比本人多出一對角。' +
      '他負責辨識古爐餘燼是否仍屬於人類匠師，而不是惡魔鑄兵爐。',
    roomId: 'obsidian_depths_depths_shrine',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '火不會說謊，但黑曜會替火加上你想聽的旁白。',
        options: [
          { text: '火祠在守什麼？', nextId: 'shrine' },
          { text: '大惡魔想做什麼？', nextId: 'fiend' },
          { text: '我先聽火聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shrine',
        text: '這裡原本替匠師校準火種。現在惡魔把火種改成軍爐，若世界熔爐燼核被奪，整條礦脈都會變成兵器。',
        options: [
          { text: '大惡魔想做什麼？', nextId: 'fiend' },
          { text: '我去核心確認。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fiend',
        text: '牠不缺火，牠缺穩定的爐心。心鏡暗魔負責篩選恐懼，世界熔爐巨像負責鍛打，最後由大惡魔接管產能。',
        options: [
          { text: '火祠在守什麼？', nextId: 'shrine' },
          { text: '我會破壞爐心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你的影子先走一步，停下來。那代表心鏡已經開始認得你。' },
    ],
    guardianHints: {
      creature: '伊洛能解釋餘燼盆地火靈、心鏡暗魔、世界熔爐巨像與黑曜深層大惡魔的主線關係。',
      treasure: '他指出古爐餘燼、核心鑽頭與世界熔爐燼核在熔爐線中的用途。',
      spirit: '他把黑曜深層從單純採礦區提升為惡魔奪取熔爐產能的劇情節點。',
    },
  },

  starfall_crater_surveyor: {
    id: 'starfall_crater_surveyor',
    name: '艾芙',
    alias: 'surveyor',
    title: '測量營地星坑測繪員',
    description:
      '一名測繪員守著被磁砂壓住的星坑地圖，量角器和羅盤都懸在半空微微顫動。' +
      '她用銀線標出重力安全坡道，並記錄每次世界傷痕發光的時間。',
    roomId: 'starfall_crater_survey_camp',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別相信羅盤。星隕坑裡，北方有時候只是磁砂想讓你去的方向。',
        options: [
          { text: '採集路線怎麼走？', nextId: 'route' },
          { text: '世界王星核在哪？', nextId: 'core' },
          { text: '我先校準工具。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走玻化斜坡和星鐵散地，避開磁化尖塔的雷暴。要進重力井前，準備磁化隕鐵和重力透鏡。',
        options: [
          { text: '世界王星核在哪？', nextId: 'core' },
          { text: '我會標記坡道。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '世界傷痕後面就是星核，但裂縫會挑人。沒有世界傷痕碎片，星核只會把你送回你最害怕的天空。',
        options: [
          { text: '採集路線怎麼走？', nextId: 'route' },
          { text: '我去找碎片。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若影子往上飄，不是你變輕了，是重力井在看你。' },
    ],
    guardianHints: {
      creature: '艾芙能提示星玻哨衛、磁雷鷹、重力井畸體與世界傷痕雷龍的路線風險。',
      treasure: '她會說明星鐵核粒、磁化隕鐵、重力透鏡與世界傷痕碎片的用途。',
      spirit: '她把星隕坑的危險轉成坡道、磁暴與裂縫週期三種可追蹤資訊。',
    },
  },

  starfall_crater_meteoric_smith: {
    id: 'starfall_crater_meteoric_smith',
    name: '洛罕',
    alias: 'meteorsmith',
    title: '隕鐵熔臺星鐵匠',
    description:
      '一名星鐵匠在隕鐵熔臺邊工作，火鉗被磁化隕鐵吸得不斷偏斜。' +
      '他把彗星碎片排成星座形狀，用來判斷哪一批星鐵能承受雷光淬火。',
    roomId: 'starfall_crater_meteoric_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'stariron_nodule',
      'radiant_glass_sand',
      'magnetized_meteorite',
      'comet_shard',
      'gravity_lens',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買之前先把鐵器綁好。這裡的材料會自己挑主人，也會自己飛走。',
        options: [
          { text: '我看看星材。', nextId: 'shop' },
          { text: '星核前需要什麼？', nextId: 'core' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、星鐵核粒、輻光玻砂、磁化隕鐵、彗星碎片、重力透鏡。越靠近星核，越別只信自己的腳。',
        action: { type: 'shop', data: { shopType: 'starfall_crater_starforge' } },
        options: [
          { text: '星核前需要什麼？', nextId: 'core' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '星鐵穩武器，玻砂穩光，磁鐵導雷，透鏡穩重力。世界傷痕碎片得自己拿，匠人買不到那種裂縫。',
        options: [
          { text: '我看看星材。', nextId: 'shop' },
          { text: '我去裂縫。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見熔臺裡有心跳聲，別問價格，先離遠一點。' },
    ],
    guardianHints: {
      creature: '洛罕能提示星鐵魔像、彗片掘行獸、星圖輝靈與外界吞星者的材料關係。',
      treasure: '他的商店供應星隕坑高階材料與藥水，提供世界王前補給節點。',
      spirit: '他把星鐵採集、隕鐵加工與星核通行需求連成一條可回訪服務線。',
    },
  },

  starfall_crater_star_map_keeper: {
    id: 'starfall_crater_star_map_keeper',
    name: '賽琳',
    alias: 'mapkeeper',
    title: '星圖廢墟守圖人',
    description:
      '一名守圖人坐在破裂星圖中央，斗篷上縫著銀草、彗片和已失效的觀測鏡片。' +
      '她每說一句話，腳下星線就會重新連成另一個可能的天空。',
    roomId: 'starfall_crater_star_map_ruin',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '隕星不是掉下來，它是被某個地方放開。星圖只記得放手的方向。',
        options: [
          { text: '外界空洞是什麼？', nextId: 'void' },
          { text: '星核心臟能做什麼？', nextId: 'heart' },
          { text: '我先看星圖。', nextId: 'farewell' },
        ],
      },
      {
        id: 'void',
        text: '外界空洞不是洞，是入口的另一面。吞星者正從那邊拉扯星核，牠若成功，這座坑會變成門。',
        options: [
          { text: '星核心臟能做什麼？', nextId: 'heart' },
          { text: '我會去星核。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '星核心臟可以證明裂縫仍能被關上。帶回它，至少我們知道這顆星還屬不屬於這個世界。',
        options: [
          { text: '外界空洞是什麼？', nextId: 'void' },
          { text: '我會帶回核心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在星圖上踩自己的名字。那通常會讓路變短，但代價很長。' },
    ],
    guardianHints: {
      creature: '賽琳能解釋星圖輝靈、世界傷痕雷龍與外界吞星者的世界王線。',
      treasure: '她指出世界傷痕碎片與世界王星核心臟在封閉裂縫中的用途。',
      spirit: '她把星隕坑從資源採集區推進到外界裂縫與世界王劇情節點。',
    },
  },

  time_ruins_epoch_keeper: {
    id: 'time_ruins_epoch_keeper',
    name: '赫倫',
    alias: 'epochkeeper',
    title: '紀元入口守時人',
    description:
      '一名守時人站在紀元入口的碎鐘門下，斗篷邊緣每隔一秒就重新磨損又復原。' +
      '他用一只裂開懷錶記錄隊伍進入廢墟的次數，哪怕隊伍自己完全不記得。',
    roomId: 'time_ruins_epoch_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '你們已經來過。也許是明天，也許是剛才。別糾正我，時間廢墟不喜歡被糾正。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '零分核心在哪？', nextId: 'zero' },
          { text: '我先確認時間。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '碎鐘路取齒輪，倒流河岸找記憶礁珠。過停擺鐘塔前，先準備悖論裂片，不然你會一直回到錯路。',
        options: [
          { text: '零分核心在哪？', nextId: 'zero' },
          { text: '我會記路。', nextId: 'farewell' },
        ],
      },
      {
        id: 'zero',
        text: '鐘心門後就是零分核心。因果井能縫路，但也會縫住人。拿到零分鑰印以前，不要相信任何捷徑。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我去找鑰印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你聽見自己回答過同一句話，停下來，把下一步換掉。' },
    ],
    guardianHints: {
      creature: '赫倫能提示紀元門衛、倒流河記憶體、停鐘時巫妖與零分古龍的路線風險。',
      treasure: '他說明碎鐘齒輪、倒流沙漏砂、悖論裂片與零分鑰印的用途。',
      spirit: '他把時間廢墟的重複死亡與回圈路線轉成玩家可追蹤的進度規則。',
    },
  },

  time_ruins_clockwork_peddler: {
    id: 'time_ruins_clockwork_peddler',
    name: '莫菈',
    alias: 'peddler',
    title: '舊日市集鐘件商',
    description:
      '一名鐘件商在舊日市集的殘影裡擺攤，貨架上的每件商品都標著三種不同年代的價格。' +
      '她收集碎鐘齒輪、倒流砂與因果絲線，也販售能撐過零分核心的補給。',
    roomId: 'time_ruins_past_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'reversed_hourglass_sand',
      'broken_clock_gear',
      'memory_reef_pearl',
      'paradox_splinter',
      'causality_thread',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '先說好，若你明天才付錢，我昨天就會開始追債。',
        options: [
          { text: '我看看鐘件。', nextId: 'shop' },
          { text: '因果井要什麼？', nextId: 'well' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、倒流砂、碎鐘齒輪、記憶礁珠、悖論裂片、因果絲線。別嫌貴，有些東西你已經買過一次了。',
        action: { type: 'shop', data: { shopType: 'time_ruins_clockworks' } },
        options: [
          { text: '因果井要什麼？', nextId: 'well' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'well',
        text: '因果絲線能縫路，零分鑰印能開鐘心門。餘影虛空核心不是商品，那東西只會從你沒選的路裡掉出來。',
        options: [
          { text: '我看看鐘件。', nextId: 'shop' },
          { text: '我去因果井。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你回來時少了一段記憶，我可以打折收購。' },
    ],
    guardianHints: {
      creature: '莫菈能提示沙漏機偶、雷刻紀錄龍、因果裁定者與餘影虛空蛇的材料需求。',
      treasure: '她供應時間廢墟材料與高階藥水，補足零分核心前的服務節點。',
      spirit: '她把高階材料、商店補給與終局通行物整合成可回訪的時間市集。',
    },
  },

  astral_wastes_anchor_cartographer: {
    id: 'astral_wastes_anchor_cartographer',
    name: '奧林',
    alias: 'cartographer',
    title: '現實邊門錨圖師',
    description:
      '一名錨圖師站在現實邊門旁，地圖不是畫在紙上，而是用錨石碎片釘在半空。' +
      '他每隔幾分鐘就重新量一次地平線，因為星界荒原不保證下一眼仍是同一個方向。',
    roomId: 'astral_wastes_reality_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '先找錨，再找路。沒有錨點的路，只是黑域替你畫的邀請函。',
        options: [
          { text: '怎麼穿過荒原？', nextId: 'route' },
          { text: '黑星門在哪？', nextId: 'gate' },
          { text: '我先固定裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '星砂路會動，錨石丘不會。先拿錨石碎片，再過鏡面虛空與蒼白小祠，別在無光沙丘數自己的影子。',
        options: [
          { text: '黑星門在哪？', nextId: 'gate' },
          { text: '我會先找錨。', nextId: 'farewell' },
        ],
      },
      {
        id: 'gate',
        text: '黑星門在虛空裂縫之後。黑星印記能辨識門，荒原核心錨能讓你回來；兩者都沒有，就別碰外層黑域。',
        options: [
          { text: '怎麼穿過荒原？', nextId: 'route' },
          { text: '我去找印記。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你走著走著聽見腳步聲從天空傳來，立刻回到最近的錨石。' },
    ],
    guardianHints: {
      creature: '奧林能提示現實邊獵影、錨石巨像、黑星門守與荒原核心星龍的路線關係。',
      treasure: '他說明星界星砂、錨石碎片、黑星印記與荒原核心錨的用途。',
      spirit: '他把星界荒原的漂移地形轉成錨點、地平線與黑星門三個可追蹤規則。',
    },
  },

  astral_wastes_void_relic_trader: {
    id: 'astral_wastes_void_relic_trader',
    name: '妮薇',
    alias: 'relictrader',
    title: '蒼白小祠虛玻商',
    description:
      '一名虛玻商坐在蒼白小祠的影子裡，貨箱中放著星砂瓶、虛玻鏡片和用黑布包住的黑星印記。' +
      '她說每件商品都有重量，哪怕拿起來像一段夢。',
    roomId: 'astral_wastes_pale_shrine',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'astral_starsand',
      'anchor_stone_chip',
      'voidglass_mirror',
      'pale_star_relic',
      'black_star_sigil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買就用現在的錢。荒原深處的未來金幣，我上週已經收過太多假貨。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '外層黑域需要什麼？', nextId: 'dark' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、星砂、錨石碎片、虛玻鏡片、蒼白星遺物、黑星印記。能買到的只是材料，能不能回來是另一回事。',
        action: { type: 'shop', data: { shopType: 'astral_wastes_relics' } },
        options: [
          { text: '外層黑域需要什麼？', nextId: 'dark' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dark',
        text: '黑星印記開門，荒原核心錨固定退路。外層黑域心核只能從黑域深處取，買來的不會是真的。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我去找核心錨。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把虛玻鏡片對著自己太久。倒影會以為它才是買主。' },
    ],
    guardianHints: {
      creature: '妮薇能提示鏡虛潛伏者、蒼白祠輝靈、重力星泥怖物與外層黑域吞噬者的材料線。',
      treasure: '她供應星界荒原材料與高階藥水，補足黑星門前的補給節點。',
      spirit: '她把荒原採集、黑星通行與外層黑域終局材料整合成可回訪服務。',
    },
  },

  moonlit_fen_reed_pathfinder: {
    id: 'moonlit_fen_reed_pathfinder',
    name: '芙菈',
    alias: 'pathfinder',
    title: '蘆葦入口引路人',
    description:
      '一名披著銀蘆斗篷的引路人蹲在蘆葦入口，用木炭在濕木板上畫出螢火、柳根與白蘆迷道的位置。' +
      '她說話很輕，像怕驚醒水面下的夢。',
    roomId: 'moonlit_fen_reed_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '月光濕地不會阻止你進去，但它會記住你踩壞了哪一株夜花。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '夢水核心是什麼？', nextId: 'dreamwater' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先沿月花岸和螢火池熟悉水深，再去妖光環。白蘆迷道和月沼祭壇不要獨自進，蘆葉會把人帶回錯誤夜晚。',
        options: [
          { text: '夢水核心是什麼？', nextId: 'dreamwater' },
          { text: '我先找月花。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dreamwater',
        text: '夢水核心是濕地的心口。若你看到水面映出不屬於今天的月亮，就代表月衛已經醒了。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別追最亮的螢火。真正的路通常只亮一半。' },
    ],
    guardianHints: {
      creature: '芙菈能提示月蘆小妖、螢燈群、白蘆迷道巡獵者與夢水月衛的路線。',
      treasure: '她說明月花瓣、銀蘆纖維、螢燈腺與夢水露的採集位置。',
      spirit: '她把月光濕地的生態規矩轉成可行走的安全路線。',
    },
  },

  moonlit_fen_moonflower_apothecary: {
    id: 'moonlit_fen_moonflower_apothecary',
    name: '露彌',
    alias: 'apothecary',
    title: '月花岸藥師',
    description:
      '一名年輕藥師在月花岸的小棚裡分類花瓣與銀蘆纖維，棚頂掛著幾只裝有螢燈腺的玻璃瓶。' +
      '她的袖口總帶著濕泥與淡淡花香。',
    roomId: 'moonlit_fen_moonflower_bank',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'medium_mp_potion',
      'antidote',
      'moonflower_petal',
      'silver_reed_fiber',
      'dreamwater_dew',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買藥水可以，但別把月花全摘光。濕地不是倉庫，是還活著的病人。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '哪些東西有毒？', nextId: 'poison' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、月花瓣、銀蘆纖維、夢水露。螢燈腺太容易失光，最好自己去螢火池採。',
        action: { type: 'shop', data: { shopType: 'moonlit_fen_apothecary' } },
        options: [
          { text: '哪些東西有毒？', nextId: 'poison' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison',
        text: '銀泥沼膠、黑水水蛭花都會放毒。若被白蘆巡獵者咬傷，先用解毒劑，不要等傷口開始發光。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '我會備著解毒劑。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '採月花時留一片給水面。這是規矩。' },
    ],
    guardianHints: {
      creature: '露彌能提示銀泥沼膠、月花螳螂與黑水水蛭花的毒性。',
      treasure: '她販售基礎藥水、解毒劑、月花瓣、銀蘆纖維與夢水露。',
      spirit: '她把濕地材料導入可回訪的補給節點，避免玩家只靠掉落補給。',
    },
  },

  moonlit_fen_canoe_keeper: {
    id: 'moonlit_fen_canoe_keeper',
    name: '澤恩',
    alias: 'canoekeeper',
    title: '舊舟營守舟人',
    description:
      '一名沉默的守舟人坐在舊舟營邊削著槳，身旁泊著幾艘長滿燈苔的窄舟。' +
      '他偶爾抬頭看月沼祭壇，像在確認水路還沒有被夢吞掉。',
    roomId: 'moonlit_fen_old_canoe_camp',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '想去月沼祭壇，就先聽水聲。若槳聲有兩次回音，第二次不是你划的。',
        options: [
          { text: '祭壇需要什麼？', nextId: 'altar' },
          { text: '水路安全嗎？', nextId: 'waterway' },
          { text: '我自己走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '帶著螢燈腺和夢水露，至少能看清一半符文。月沼祭壇符片只能從月衛那裡取，偷來的會碎。',
        options: [
          { text: '水路安全嗎？', nextId: 'waterway' },
          { text: '我去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'waterway',
        text: '黑水流有水蛭花，白蘆迷道有巡獵者。真正危險的是看見自己已經抵達祭壇，然後相信那是真的。',
        options: [
          { text: '祭壇需要什麼？', nextId: 'altar' },
          { text: '我會看腳下。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '槳放輕。夢水不喜歡被吵醒。' },
    ],
    guardianHints: {
      creature: '澤恩能提示黑水水蛭花、白蘆迷道巡獵者與夢水月衛的後段路線。',
      treasure: '他說明螢燈腺、夢水露與月沼祭壇符片的用途。',
      spirit: '他把舊舟營變成月沼祭壇與夢水核心前的敘事節點。',
    },
  },

  pilgrim_road_waywarden: {
    id: 'pilgrim_road_waywarden',
    name: '艾德溫',
    alias: 'waywarden',
    title: '古道起點守路人',
    description:
      '一名披著舊白斗篷的守路人站在古道起點，手杖頂端掛著磨亮的小鈴。' +
      '他不阻止旅人上路，只會在每個人踏上第一塊石板前數一次影子。',
    roomId: 'pilgrim_road_waygate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '朝聖古道不長，難的是每一段都會問你為什麼還要往前。',
        options: [
          { text: '古道現在有什麼危險？', nextId: 'danger' },
          { text: '聖地門在哪？', nextId: 'gate' },
          { text: '我會自己走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '前段是塵犬與鴉使，中段有割袋客和伏擊者，後段的光誓者比盜匪更麻煩，因為牠們真的相信自己在守秩序。',
        options: [
          { text: '聖地門在哪？', nextId: 'gate' },
          { text: '我先檢查補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'gate',
        text: '沿白石路標到聖地門，再到終點聖碑。若你的鈴符在那裡無聲，代表試煉守已經醒了。',
        options: [
          { text: '古道現在有什麼危險？', nextId: 'danger' },
          { text: '我出發。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '路上別踢倒里程石。迷路的人最先怪路，其實多半是自己動了標記。' },
    ],
    guardianHints: {
      creature: '艾德溫能提示古道塵犬、里程鴉使、終點聖碑光誓者與聖地門試煉守。',
      treasure: '他說明朝聖鈴符、白石灰粉與聖地門印的古道用途。',
      spirit: '他把朝聖古道拆成前段路標、中段伏擊與後段聖地試煉。',
    },
  },

  pilgrim_road_caravan_supplier: {
    id: 'pilgrim_road_caravan_supplier',
    name: '米菈',
    alias: 'supplier',
    title: '廢棄旅舍商隊補給商',
    description:
      '一名商隊補給商把貨攤搭在廢棄旅舍還沒塌的牆邊，木箱上蓋著防塵布。' +
      '她的帳本裡仍保留著許多已經不會抵達聖地的隊伍名字。',
    roomId: 'pilgrim_road_abandoned_inn',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'return_scroll',
      'pilgrim_bell_charm',
      'worn_caravan_seal',
      'sunroad_ration',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給先買好。這條路最會把人拖到還差一瓶藥水的地方。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '商隊為何停了？', nextId: 'caravan' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、回城卷軸、朝聖鈴符、商隊印、日路乾糧。白石灰粉要自己去白石路標找，我不跟光誓者搶生意。',
        action: { type: 'shop', data: { shopType: 'pilgrim_road_supplier' } },
        options: [
          { text: '商隊為何停了？', nextId: 'caravan' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'caravan',
        text: '不是沒人想走，是走私藏點和盜匪望臺把路拆成了稅卡。再往後，聖地門也不一定讓活人通過。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會留意伏擊。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '乾糧放外袋，鈴符放內袋。割袋客第一刀通常割外袋。' },
    ],
    guardianHints: {
      creature: '米菈能提示車轍割袋客、乾井伏擊者與走私藏點守衛的補給壓力。',
      treasure: '她販售朝聖鈴符、商隊印與日路乾糧，補足古道中段補給節點。',
      spirit: '她把古道的商隊歷史與玩家可用補給連接起來。',
    },
  },

  pilgrim_road_cemetery_keeper: {
    id: 'pilgrim_road_cemetery_keeper',
    name: '索蘭',
    alias: 'keeper',
    title: '舊墓岔路守墓人',
    description:
      '一名守墓人在舊墓岔路擦拭白石碑，鐵鏟靠在膝邊，斗篷上沾著乾草與石灰粉。' +
      '他說自己只負責讓迷路的人知道哪一條路不是終點。',
    roomId: 'pilgrim_road_old_cemetery_turn',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '走到這裡還活著，代表你至少躲過了半條路的貪心。',
        options: [
          { text: '白石路標怎麼看？', nextId: 'marker' },
          { text: '試煉守是什麼？', nextId: 'trial' },
          { text: '我繼續走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'marker',
        text: '真的白石路標會在日落時背光，假的會把影子指向伏擊彎道。帶白石灰粉能讓假影子短暫散開。',
        options: [
          { text: '試煉守是什麼？', nextId: 'trial' },
          { text: '我去找灰粉。', nextId: 'farewell' },
        ],
      },
      {
        id: 'trial',
        text: '聖地門試煉守只問一件事：你是不是完成了這條路。殺過去的人不一定能通過，活著抵達的人也不一定。',
        options: [
          { text: '白石路標怎麼看？', nextId: 'marker' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在墓碑上坐下。那是給走不動的人，不是給累的人。' },
    ],
    guardianHints: {
      creature: '索蘭能提示聖徒橋苦行殘影、終點聖碑光誓者與聖地門試煉守。',
      treasure: '他說明白石灰粉與聖地門印的後段用途。',
      spirit: '他把舊墓岔路變成前往聖地門前的警告節點。',
    },
  },

  ironwood_fort_gate_captain: {
    id: 'ironwood_fort_gate_captain',
    name: '羅德里克',
    alias: 'captain',
    title: '鐵木外門守備隊長',
    description:
      '一名鬍鬚花白的守備隊長站在鐵木外門內側，鎧甲上有多處火油燒痕。' +
      '他手中握著半截軍令槍，像隨時準備把失控哨兵重新編入隊列。',
    roomId: 'ironwood_fort_outer_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '要塞還站著，但軍令已經壞了。別把每個穿軍甲的人都當成友軍。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '高堡核心在哪？', nextId: 'keep' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'front',
        text: '外門是門哨，軍需行列有叛逃兵，信號塔有爆破兵。若烽火變成綠煙，代表內堡在對自己下令開火。',
        options: [
          { text: '高堡核心在哪？', nextId: 'keep' },
          { text: '我先清外門。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keep',
        text: '穿過指揮長廊和誓約禮拜堂就是內堡門。高堡戰帥不會離開核心，牠只會讓整座要塞替牠走路。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '聽見三短一長的號角就蹲下。那不是集合，是爆破。' },
    ],
    guardianHints: {
      creature: '羅德里克能提示鐵木門哨、烽火爆破兵、誓約堂鐵騎與高堡戰帥。',
      treasure: '他說明鐵木板材、斥候信管與內堡軍令印的軍事用途。',
      spirit: '他把鐵木要塞的外門、信號塔與高堡核心整理成主要推進線。',
    },
  },

  ironwood_fort_quartermaster: {
    id: 'ironwood_fort_quartermaster',
    name: '貝菈',
    alias: 'quartermaster',
    title: '軍需行列補給官',
    description:
      '一名補給官坐在軍需行列的木箱上，身旁整齊堆著藥水、箭束與封好的燼油瓶。' +
      '她每次交貨都會在補給牌上多刻一道記號，避免叛逃兵拿同一塊牌領兩次。',
    roomId: 'ironwood_fort_quartermaster_row',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'large_mp_potion',
      'ironwood_plank',
      'fort_supply_token',
      'forge_cinder_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給牌拿出來。沒有也能買，但別問我為什麼比軍價貴。',
        options: [
          { text: '我看看軍需。', nextId: 'shop' },
          { text: '叛逃兵在哪？', nextId: 'renegades' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、鐵木板材、補給牌、鍛坊燼油。斥候信管不賣，信號塔那邊一亂，半座堡都會燒起來。',
        action: { type: 'shop', data: { shopType: 'ironwood_fort_quartermaster' } },
        options: [
          { text: '叛逃兵在哪？', nextId: 'renegades' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'renegades',
        text: '補給隧道、廢箱後面、隱蔽突門，全是他們喜歡的地方。看到有人背兩個火油箱還說只是巡邏，先打。',
        options: [
          { text: '我看看軍需。', nextId: 'shop' },
          { text: '我會檢查火油箱。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '燼油別靠近明火開瓶。這句話我今天已經說得太晚三次了。' },
    ],
    guardianHints: {
      creature: '貝菈能提示叛逃軍需兵、走私藏點守衛與鍛坊燼衛的補給線。',
      treasure: '她販售鐵木板材、要塞補給牌與鍛坊燼油。',
      spirit: '她把軍需行列變成鐵木要塞的補給與經濟節點。',
    },
  },

  ironwood_fort_forgemaster: {
    id: 'ironwood_fort_forgemaster',
    name: '奧斯坦',
    alias: 'forgemaster',
    title: '鐵木鍛坊爐主',
    description:
      '一名矮壯爐主站在鐵木鍛坊的爐口前，皮圍裙上沾滿黑紅燼油。' +
      '他不斷調整風箱，確保爐火燒向城牆外，而不是燒進兵營。',
    roomId: 'ironwood_fort_forge_works',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '鍛坊還能用，問題是現在連爐灰都聽軍令。別讓燼衛靠近火油堆。',
        options: [
          { text: '鍛坊失控到什麼程度？', nextId: 'forge' },
          { text: '鐵木林圃安全嗎？', nextId: 'grove' },
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '燼衛只是外殼，真正麻煩的是信號塔把爆破命令送進鍛坊。拿到斥候信管後，先看顏色再點。',
        options: [
          { text: '鐵木林圃安全嗎？', nextId: 'grove' },
          { text: '我會管住火線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'grove',
        text: '林圃的根衛比士兵還守規矩。你要板材可以取外皮，別砍根，根一斷，西牆會先倒。',
        options: [
          { text: '鍛坊失控到什麼程度？', nextId: 'forge' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '看到火變成黑色就後退。那不是熱，是命令在燒。' },
    ],
    guardianHints: {
      creature: '奧斯坦能提示鍛坊燼衛、鐵木根衛與烽火爆破兵的火線關係。',
      treasure: '他說明鐵木板材、鍛坊燼油與斥候信管的用途。',
      spirit: '他把鍛坊與鐵木林圃整理成要塞防衛資源線。',
    },
  },

  ironwood_fort_scout_sergeant: {
    id: 'ironwood_fort_scout_sergeant',
    name: '凱莎',
    alias: 'sergeant',
    title: '斥候棲臺軍士',
    description:
      '一名斥候軍士蹲在斥候棲臺邊緣，手邊攤著幾支燒過一半的信管。' +
      '她說話時總先看信號塔，再看隱蔽突門，像在等下一次錯誤烽火。',
    roomId: 'ironwood_fort_scout_roost',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '信號塔已經不可信了。紅煙是敵襲，白煙是撤退，綠煙是有人想讓我們互相開火。',
        options: [
          { text: '我該先處理哪裡？', nextId: 'route' },
          { text: '內堡門怎麼進？', nextId: 'keep' },
          { text: '我會看煙色。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先清信號塔，再查囚牢石廊。若鎖衛開始敲三下鏈子，代表指揮長廊的構裝也醒了。',
        options: [
          { text: '內堡門怎麼進？', nextId: 'keep' },
          { text: '我去信號塔。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keep',
        text: '內堡門需要你壓住指揮長廊和誓約禮拜堂兩邊。只打一邊，高堡戰帥會用另一邊補線。',
        options: [
          { text: '我該先處理哪裡？', nextId: 'route' },
          { text: '了解。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別站在旗影下面。弩手最喜歡把旗影當刻度。' },
    ],
    guardianHints: {
      creature: '凱莎能提示堡牆弩手、囚牢鎖衛、軍令板構裝與高堡戰帥。',
      treasure: '她說明斥候信管與內堡軍令印的後段用途。',
      spirit: '她把斥候棲臺、信號塔與內堡門串成後半段推進線。',
    },
  },

  amber_forest_claim_surveyor: {
    id: 'amber_forest_claim_surveyor',
    name: '伊蓮',
    alias: 'surveyor',
    title: '採集入口界樁測量員',
    description:
      '一名採集測量員站在界樁旁，腰間掛著樹脂切刀與標記繩。' +
      '她不斷在木板上記下金脂流向，避免採集隊誤入仍在生長的根脈。',
    roomId: 'amber_forest_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '琥珀森林可以採，但不能亂砍。這裡每一道金脂脈都還活著。',
        options: [
          { text: '我該先採什麼？', nextId: 'route' },
          { text: '深琥珀核心在哪？', nextId: 'core' },
          { text: '我會照界樁走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先取金脂塊和琥珀脈晶，再到蜂巢找封蠟蟲甲。煙脂孢子別在上風處採，會睡倒整隊。',
        options: [
          { text: '深琥珀核心在哪？', nextId: 'core' },
          { text: '我去琥珀脈徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '古脂巨樹和石化花圃之後才是深琥珀核心。若聽見翅聲卻看不見蟲，代表蟲母已經醒了。',
        options: [
          { text: '我該先採什麼？', nextId: 'route' },
          { text: '我會避開核心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '用切刀，不要用斧頭。森林分得清採集和傷害。' },
    ],
    guardianHints: {
      creature: '伊蓮能提示琥珀幼樹伏行者、樹脂脈蜥、古脂樹人與深琥珀蟲母的路線。',
      treasure: '她說明金脂塊、琥珀脈晶、封蠟蟲甲與煙脂孢子的採集順序。',
      spirit: '她把琥珀森林的 resource 區規矩轉成採集動線。',
    },
  },

  amber_forest_resin_broker: {
    id: 'amber_forest_resin_broker',
    name: '卡洛',
    alias: 'broker',
    title: '琥珀脈徑樹脂經紀',
    description:
      '一名樹脂經紀坐在琥珀脈徑旁的防黏布上，貨箱中分格放著金脂塊、琥珀脈晶與備用切刀。' +
      '他說每一塊材料都已登記，不登記的通常會被森林自己收回。',
    roomId: 'amber_forest_vein_path',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'golden_resin_chunk',
      'amber_vein_shard',
      'resin_cutting_knife',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買材料、買切刀、買解毒劑都可以。買命不行，森林不賣第二次機會。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '哪些材料不能買？', nextId: 'rare' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '金脂塊、琥珀脈晶、樹脂切刀和基礎補給。封蠟蟲甲與煙脂孢子太不穩，最好自己取。',
        action: { type: 'shop', data: { shopType: 'amber_forest_resin' } },
        options: [
          { text: '哪些材料不能買？', nextId: 'rare' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rare',
        text: '封蠟蟲甲要新鮮，煙脂孢子要看風向，深琥珀心核更別想。能放在箱裡賣的，都只是外層材料。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '我自己去採。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '切刀用完擦乾淨。樹脂會記住上一個採集者的手。' },
    ],
    guardianHints: {
      creature: '卡洛能提示樹脂脈蜥、封蠟胡蜂與煙脂菌人的材料價值。',
      treasure: '他販售金脂塊、琥珀脈晶與樹脂切刀，補足資源區商店需求。',
      spirit: '他把琥珀森林採集材料導入可回訪的經濟節點。',
    },
  },

  amber_forest_waspkeeper: {
    id: 'amber_forest_waspkeeper',
    name: '蜜雅',
    alias: 'waspkeeper',
    title: '封蠟蜂巢看巢人',
    description:
      '一名戴著厚面紗的看巢人站在封蠟蜂巢下方，手臂包著防蠟布。' +
      '她用很小的煙罐控制蜂群方向，卻從不把煙吹向深琥珀核心。',
    roomId: 'amber_forest_wasp_nests',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別拍蜂巢。封蠟胡蜂聽不懂道歉，只認震動。',
        options: [
          { text: '我要採封蠟蟲甲。', nextId: 'chitin' },
          { text: '蟲母會來這裡嗎？', nextId: 'matriarch' },
          { text: '我會放輕腳步。', nextId: 'farewell' },
        ],
      },
      {
        id: 'chitin',
        text: '先用煙脂孢子壓住蜂群，再剝翅膜邊緣。剝太深會讓整窩醒來，連燼甲蟲都會跟著躁動。',
        options: [
          { text: '蟲母會來這裡嗎？', nextId: 'matriarch' },
          { text: '我去找孢子。', nextId: 'farewell' },
        ],
      },
      {
        id: 'matriarch',
        text: '蟲母不來蜂巢，蜂巢去聽牠。深琥珀核心一震，所有封蠟翅都會同時停一下。',
        options: [
          { text: '我要採封蠟蟲甲。', nextId: 'chitin' },
          { text: '我會觀察翅聲。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '如果蜂聲忽然變整齊，立刻離開。那不是安靜，是命令。' },
    ],
    guardianHints: {
      creature: '蜜雅能提示封蠟胡蜂、燼甲蟲與深琥珀蟲母的昆蟲生態線。',
      treasure: '她說明封蠟蟲甲與煙脂孢子的採集方式。',
      spirit: '她把蜂巢、蟲丘與核心串成琥珀森林的昆蟲控制鏈。',
    },
  },

  amber_forest_old_resin_druid: {
    id: 'amber_forest_old_resin_druid',
    name: '羅恩',
    alias: 'druid',
    title: '古脂巨樹老德魯伊',
    description:
      '一名老德魯伊坐在古脂巨樹根旁，鬍鬚裡凝著細小金脂珠。' +
      '他用木杖敲擊樹根聽回音，分辨深層琥珀是否仍在穩定生長。',
    roomId: 'amber_forest_elder_resin_tree',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '你走到這裡，森林已經知道你的重量。接下來每一步都會被記進年輪。',
        options: [
          { text: '古脂樹人為何醒來？', nextId: 'treant' },
          { text: '深琥珀心核能取嗎？', nextId: 'heart' },
          { text: '我會尊重森林。', nextId: 'farewell' },
        ],
      },
      {
        id: 'treant',
        text: '因為外層採得太快。古脂樹人不是敵人，是森林在問你還要拿多少。',
        options: [
          { text: '深琥珀心核能取嗎？', nextId: 'heart' },
          { text: '我會先停手。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '能取，但只能從蟲母甦醒後剝離。死琥珀是石頭，活琥珀才是心核。',
        options: [
          { text: '古脂樹人為何醒來？', nextId: 'treant' },
          { text: '我準備好了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把核心帶到火旁。那會讓裡面的年輪以為春天來了。' },
    ],
    guardianHints: {
      creature: '羅恩能提示古脂樹人、石化樹脂魔像與深琥珀蟲母的後段關係。',
      treasure: '他說明深琥珀心核與高階樹脂材料的取得條件。',
      spirit: '他把採集行為與森林年輪、核心生長連成主題收束。',
    },
  },

  silverpine_range_claim_surveyor: {
    id: 'silverpine_range_claim_surveyor',
    name: '妮拉',
    alias: 'surveyor',
    title: '山脈入口界樁測量員',
    description:
      '一名穿著厚毛披肩的測量員站在山脈入口界樁旁，手裡拿著刻度繩與除霜鎬。' +
      '她的筆記本夾滿銀白雲母片，每一片都標著採集高度。',
    roomId: 'silverpine_range_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '銀松山脈不缺礦，缺的是活著把礦背下山的人。',
        options: [
          { text: '先採哪裡？', nextId: 'route' },
          { text: '高山礦核在哪？', nextId: 'core' },
          { text: '我會照界樁走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '前段取銀松雲母和霜草，中段進冰玻洞，後段才去觀星脊。沒有高山鎬頭，別碰高山礦核。',
        options: [
          { text: '高山礦核在哪？', nextId: 'core' },
          { text: '我去銀脈山徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '觀星脊北側。若礦洞裡的星光開始呼吸，代表晶龍醒了，所有鎬聲都會傳到牠耳裡。',
        options: [
          { text: '先採哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繩子綁腰，不要綁手。手要留著抓回來。' },
    ],
    guardianHints: {
      creature: '妮拉能提示銀松雪徑獸、冰玻魔像、觀星霜巨人與高山礦核晶龍的路線。',
      treasure: '她說明銀松雲母、霜草束、冰玻礦與觀星銀礦的採集順序。',
      spirit: '她把銀松山脈的 resource 區轉成可追蹤採集高度。',
    },
  },

  silverpine_range_miner_factor: {
    id: 'silverpine_range_miner_factor',
    name: '葛蘭',
    alias: 'factor',
    title: '舊礦工營礦材商',
    description:
      '一名老礦材商守著舊礦工營的半塌棚屋，貨架上擺著雲母片、霜草束與幾個備用鎬頭。' +
      '他說每個鎬頭都有故事，多半不是好結局。',
    roomId: 'silverpine_range_old_miner_camp',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'silverpine_mica',
      'frost_herb_bundle',
      'mountain_pick_head',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買礦、買草、買鎬頭都行。買雪崩預報不行，山自己也不一定知道。',
        options: [
          { text: '我看看礦材。', nextId: 'shop' },
          { text: '冰玻礦怎麼取？', nextId: 'iceglass' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '銀松雲母、霜草束、高山鎬頭和一些藥水。冰玻礦要現採，觀星銀礦我不替死人保管。',
        action: { type: 'shop', data: { shopType: 'silverpine_miner' } },
        options: [
          { text: '冰玻礦怎麼取？', nextId: 'iceglass' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'iceglass',
        text: '先把鎬頭除霜，敲三下停一下。冰玻魔像如果跟著你的節奏敲，就代表你該跑了。',
        options: [
          { text: '我看看礦材。', nextId: 'shop' },
          { text: '我會聽回音。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '下山比上山難。背包留一格給繩索，不要全塞礦。' },
    ],
    guardianHints: {
      creature: '葛蘭能提示雲母崖蜥、冰玻魔像與雪崩雪人的採礦風險。',
      treasure: '他販售銀松雲母、霜草束與高山鎬頭，補足採集商店功能。',
      spirit: '他把舊礦工營變成山脈中段補給與材料節點。',
    },
  },

  silverpine_range_herbalist: {
    id: 'silverpine_range_herbalist',
    name: '芙蕾雅',
    alias: 'herbalist',
    title: '霜草岩棚藥師',
    description:
      '一名藥師在霜草岩棚旁用小刷子掃開葉面冰霜，背簍裡裝著霜草束與松針。' +
      '她每摘一束草都會把根旁的雪壓回原位。',
    roomId: 'silverpine_range_frost_herb_ledge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '霜草不是越多越好。摘光一層，明年整條山徑都會結黑冰。',
        options: [
          { text: '霜草巫女危險嗎？', nextId: 'witch' },
          { text: '雪崩凹地怎麼走？', nextId: 'avalanche' },
          { text: '我會留根。', nextId: 'farewell' },
        ],
      },
      {
        id: 'witch',
        text: '她守草，不守人。你若帶著切根的鎬痕，她會先讓你的腳學會長根。',
        options: [
          { text: '雪崩凹地怎麼走？', nextId: 'avalanche' },
          { text: '我只採葉。', nextId: 'farewell' },
        ],
      },
      {
        id: 'avalanche',
        text: '午後別走，星光亮時再走。雪崩雪人睡得淺，鐵靴踩空一次就會醒。',
        options: [
          { text: '霜草巫女危險嗎？', nextId: 'witch' },
          { text: '我等星光。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '霜草要用布包，別用手捏，手熱會壞葉脈。' },
    ],
    guardianHints: {
      creature: '芙蕾雅能提示霜草巫女、銀脂松樹人與雪崩雪人的生態。',
      treasure: '她說明霜草束與銀松雲母共生根的採集規矩。',
      spirit: '她把藥草線與山脈地形危險串起來。',
    },
  },

  silverpine_range_starwatcher: {
    id: 'silverpine_range_starwatcher',
    name: '歐里安',
    alias: 'starwatcher',
    title: '觀星脊守夜人',
    description:
      '一名守夜人坐在觀星脊的石台邊，身旁架著用觀星銀礦做的簡易星盤。' +
      '他盯著高山礦核方向的藍白光點，像在等某顆星從山裡升起。',
    roomId: 'silverpine_range_starwatch_ridge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '山頂的星不是都在天上。有些在礦裡，有些在龍的鱗片下面。',
        options: [
          { text: '霜巨人守什麼？', nextId: 'giant' },
          { text: '晶龍怎麼打？', nextId: 'wyrm' },
          { text: '我會看星盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'giant',
        text: '牠守觀測線。你帶著觀星銀礦經過，牠會覺得你偷走了牠的星。',
        options: [
          { text: '晶龍怎麼打？', nextId: 'wyrm' },
          { text: '我會繞開星盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wyrm',
        text: '等反射屏障暗下去再打。高山礦核晶龍每次呼吸都會照亮弱點，但也會照亮你。',
        options: [
          { text: '霜巨人守什麼？', nextId: 'giant' },
          { text: '我準備進礦核。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若星盤開始倒轉，別問我原因，先退下山脊。' },
    ],
    guardianHints: {
      creature: '歐里安能提示風切銀鷹、觀星霜巨人與高山礦核晶龍的後段威脅。',
      treasure: '他說明觀星銀礦與高山礦核的用途。',
      spirit: '他把觀星脊、高山礦核與星光礦脈收束成山脈終段。',
    },
  },

  saltwind_flats_tide_surveyor: {
    id: 'saltwind_flats_tide_surveyor',
    name: '瑟拉',
    alias: 'surveyor',
    title: '退潮入口樁潮汐測量員',
    description:
      '一名潮汐測量員站在退潮入口樁旁，靴底沾滿白鹽，手裡拿著刻潮尺。' +
      '她每隔幾分鐘就敲一下木樁，確認鹽面下方還是不是硬地。',
    roomId: 'saltwind_flats_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '鹽風灘只有退潮時像路。潮水回來後，路會先忘記你。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '深鹽眼在哪？', nextId: 'eye' },
          { text: '我會看潮線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走白波鹽面與鹽水潮池，再沿霧鐘找退潮石道。別相信海盜隱棚旁的假鐘聲。',
        options: [
          { text: '深鹽眼在哪？', nextId: 'eye' },
          { text: '我先找路標。', nextId: 'farewell' },
        ],
      },
      {
        id: 'eye',
        text: '潮望廢墟北面就是深鹽眼。若霧鐘自己響，守望者已經在數你的腳步。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我會準備好。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '腳下鹽殼變軟就退，別等水聲。聽見水聲通常已經晚了。' },
    ],
    guardianHints: {
      creature: '瑟拉能提示鹽晶步蟲、退潮海蛇與深鹽眼守望者的潮線。',
      treasure: '她說明白灘鹽晶、霧鐘舌與深鹽眼珠的路線用途。',
      spirit: '她把鹽風灘的退潮時間轉成可行走的安全節奏。',
    },
  },

  saltwind_flats_fisher_mender: {
    id: 'saltwind_flats_fisher_mender',
    name: '博恩',
    alias: 'mender',
    title: '漁夫藏點補網匠',
    description:
      '一名老補網匠躲在漁夫藏點後方，膝上攤著破網與鹽蟹硬殼。' +
      '他身旁的小箱子裡放著藍泥鹽包、乾繩和幾枚霧鐘零件。',
    roomId: 'saltwind_flats_fisher_cache',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'flatsalt_crystal',
      'fogbell_clapper',
      'blue_mud_saltpack',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '想買補給就快點。霧一厚，漁夫藏點就會變成別人的藏點。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '海盜在哪？', nextId: 'pirates' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、白灘鹽晶、霧鐘舌、藍泥鹽包。鹽蟹硬殼要自己去蟹行淺灘敲。',
        action: { type: 'shop', data: { shopType: 'saltwind_fisher' } },
        options: [
          { text: '海盜在哪？', nextId: 'pirates' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pirates',
        text: '漂木哨柱、海盜隱棚、破舟灘都有。他們不搶最重的，只搶你退潮前最需要的。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會防著哨兵。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '藍泥鹽包別吃，是敷的。上次有人吃了，罵得比海盜還大聲。' },
    ],
    guardianHints: {
      creature: '博恩能提示鹽池蟹衛、霧灘海盜哨兵與魚骨濁潮人的補給風險。',
      treasure: '他販售白灘鹽晶、霧鐘舌與藍泥鹽包。',
      spirit: '他把漁夫藏點變成鹽風灘中段的補給節點。',
    },
  },

  saltwind_flats_fogbell_keeper: {
    id: 'saltwind_flats_fogbell_keeper',
    name: '露塔',
    alias: 'bellkeeper',
    title: '霧鐘桿守鐘人',
    description:
      '一名守鐘人站在霧鐘桿下，手裡握著備用鐘舌，斗篷被鹽霧浸得發硬。' +
      '她會先聽風，再決定要不要敲鐘。',
    roomId: 'saltwind_flats_fog_bell',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '霧鐘不是給你聽的，是給路聽的。路聽見了，才肯露出來。',
        options: [
          { text: '怎麼分辨假鐘？', nextId: 'falsebell' },
          { text: '守望者怕鐘聲嗎？', nextId: 'keeper' },
          { text: '我會聽回音。', nextId: 'farewell' },
        ],
      },
      {
        id: 'falsebell',
        text: '真鐘三響後有鹽殼回音，假鐘只有霧。海盜哨兵學得像，但他們學不會鹽面回答。',
        options: [
          { text: '守望者怕鐘聲嗎？', nextId: 'keeper' },
          { text: '我會數回音。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keeper',
        text: '不怕。牠就是從太多鐘聲裡醒來的。你帶霧鐘舌去深鹽眼，只是讓自己知道退路在哪。',
        options: [
          { text: '怎麼分辨假鐘？', nextId: 'falsebell' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若第四響自己出現，離開鐘桿。那不是我敲的。' },
    ],
    guardianHints: {
      creature: '露塔能提示玻璃鹽元素、退潮海蛇與深鹽眼守望者的後段節奏。',
      treasure: '她說明霧鐘舌與深鹽眼珠的用途。',
      spirit: '她把霧鐘、退潮石道與深鹽眼串成終段導航規則。',
    },
  },

  thornmaze_gate_cartographer: {
    id: 'thornmaze_gate_cartographer',
    name: '薇恩',
    alias: 'cartographer',
    title: '荊棘入口拱測徑師',
    description:
      '一名測徑師站在荊棘入口拱外，把剛畫好的地圖撕成小片重新排列。' +
      '她說迷宮不是地形，而是一種很慢的思考。',
    roomId: 'thornmaze_gate_arch',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別相信你剛走過的路。荊棘迷宮會記得你的腳步，然後換一種方式回答。',
        options: [
          { text: '我該先走哪裡？', nextId: 'route' },
          { text: '祭壇在哪？', nextId: 'altar' },
          { text: '我會標記路線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先看紅刺牆，再找苔鑰孔。聽見低語不要回頭，看到月藤才代表你接近內圈。',
        options: [
          { text: '祭壇在哪？', nextId: 'altar' },
          { text: '我先找苔鑰孔。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '內祭環北面。若活牆開始同時呼吸，古荊德魯伊祭司已經知道你來了。',
        options: [
          { text: '我該先走哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '用紅刺做記號可以，但別把刺插進活牆。牆會記仇。' },
    ],
    guardianHints: {
      creature: '薇恩能提示紅刺棘靈、低語樹牆擬形、活牆巨像與古荊德魯伊祭司的路線。',
      treasure: '她說明紅刺棘針、黑根藤索與月藤環的用途。',
      spirit: '她把會變動的迷宮轉成可追蹤的外圈、中圈、內祭環節奏。',
    },
  },

  thornmaze_briarsalve_herbalist: {
    id: 'thornmaze_briarsalve_herbalist',
    name: '瑪芙',
    alias: 'herbalist',
    title: '苔鑰孔荊藥師',
    description:
      '一名荊藥師在苔鑰孔旁的小棚裡調和血脂與苔粉，手指被細刺扎得滿是小傷。' +
      '她的藥瓶都用藤環固定，免得迷宮轉向時滾進牆裡。',
    roomId: 'thornmaze_moss_keyhole',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'redthorn_spine',
      'bloodsap_phial',
      'moonvine_loop',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買藥就快。這棚子昨天還在南邊，明天可能在牆裡。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '毒花床怎麼過？', nextId: 'poison' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、紅刺棘針、血脂小瓶、月藤環。黑根藤索我不賣，那東西會自己找買主。',
        action: { type: 'shop', data: { shopType: 'thornmaze_herbalist' } },
        options: [
          { text: '毒花床怎麼過？', nextId: 'poison' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison',
        text: '別聞花香，別踩濕土。毒花床母株喜歡讓人以為自己還在原地，其實已經走進根裡。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '我會備解毒劑。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '血脂只塗一層。塗三層的人，現在還在那邊長葉子。' },
    ],
    guardianHints: {
      creature: '瑪芙能提示毒花床母株、蛛刺編網者與黑根絞藤的毒性。',
      treasure: '她販售紅刺棘針、血脂小瓶與月藤環。',
      spirit: '她把荊棘迷宮的植物傷害轉成可回訪補給節點。',
    },
  },

  thornmaze_old_druid_echo: {
    id: 'thornmaze_old_druid_echo',
    name: '歐塔',
    alias: 'echo',
    title: '德魯伊刻石殘響',
    description:
      '一道老德魯伊的半透明殘響停在德魯伊刻石前，聲音像從樹洞裡傳出。' +
      '他每說一句話，刻石上的苔紋就會重新排列。',
    roomId: 'thornmaze_druid_marker',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '迷宮本來是守護，不是牢籠。後來有人要求它永遠不要打開。',
        options: [
          { text: '誰關上了迷宮？', nextId: 'closed' },
          { text: '祭壇種是什麼？', nextId: 'seed' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'closed',
        text: '古荊祭司。他用自己的名字餵給活牆，從此牆只記得閉合，不記得放行。',
        options: [
          { text: '祭壇種是什麼？', nextId: 'seed' },
          { text: '我去內祭環。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seed',
        text: '祭壇種不是鑰匙，是承諾。拿走它，迷宮會短暫想起自己也能停止生長。',
        options: [
          { text: '誰關上了迷宮？', nextId: 'closed' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若牆上出現你的名字，別讀完。讀完就會留下。' },
    ],
    guardianHints: {
      creature: '歐塔能提示活牆巨像、歪斜圖騰咒師與古荊德魯伊祭司。',
      treasure: '他說明月藤環、黑根藤索與德魯伊祭壇種的核心關係。',
      spirit: '他把迷宮閉合原因與古代德魯伊祭壇連接起來。',
    },
  },

  ember_march_ashgate_scout: {
    id: 'ember_march_ashgate_scout',
    name: '莉珊',
    alias: 'scout',
    title: '灰燼入口門邊境斥候',
    description:
      '一名邊境斥候蹲在灰燼入口門旁，用燒黑的短刀撥開灰面足跡。' +
      '她的披風邊緣被火星咬出小洞，卻仍整齊別著撤退路線針。',
    roomId: 'ember_march_ash_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '灰面今天比昨天熱。別踩亮線，那不是路，是下面的火在找出口。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '心火缺口在哪？', nextId: 'breach' },
          { text: '我會看灰面。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '焦炭路看腳印，煙溝看煙向，倒旗坡看旗布。旗子倒向熱風時，表示邊爐或亞龍醒了。',
        options: [
          { text: '心火缺口在哪？', nextId: 'breach' },
          { text: '我先去焦炭路。', nextId: 'farewell' },
        ],
      },
      {
        id: 'breach',
        text: '邊堡外殼東面。若龍印脊開始吹乾熱風，心火缺口亞龍已經在巡火線。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '灰燼會蓋住屍體，但蓋不住新腳印。走慢一點，活久一點。' },
    ],
    guardianHints: {
      creature: '莉珊能提示灰路火星群、煙溝伏行者、焦旗掠兵與心火缺口亞龍的路線。',
      treasure: '她說明燼玻碎片、灰線旗布與心火邊境印的用途。',
      spirit: '她把餘燼邊境整理成入口、戰營、鍛台、邊堡與心火缺口的推進節奏。',
    },
  },

  ember_march_cinder_apothecary: {
    id: 'ember_march_cinder_apothecary',
    name: '寇恩',
    alias: 'apothecary',
    title: '餘燼鍛台燒傷藥販',
    description:
      '一名藥販在餘燼鍛台旁支起耐火布棚，桌上擺著封蠟藥罐與渣鐵量匙。' +
      '他每賣出一瓶藥，就把瓶口重新浸進冷灰裡測溫。',
    roomId: 'ember_march_ember_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'slag_iron_clinker',
      'cinderbite_salve',
      'emberglass_shard',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要藥、要熔塊、要能保住腳底的東西，我都有。要保證？那得問火山。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '鍛台為什麼還熱？', nextId: 'forge' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '大型藥水、解毒劑、渣鐵熔塊、燼咬藥膏、燼玻碎片。灰線旗布我不賣，那通常還連著麻煩。',
        action: { type: 'shop', data: { shopType: 'ember_march_apothecary' } },
        options: [
          { text: '鍛台為什麼還熱？', nextId: 'forge' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '邊爐熔衛還在執行戰時命令。牠把所有靠近鍛台的人都當成偷軍需的敵兵。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '我會避開爐口。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '藥膏薄薄一層就好。塗太厚，灰會黏住你。' },
    ],
    guardianHints: {
      creature: '寇恩能提示玻灰蜥、熔裂燼蟲、渣甲巨像與邊爐熔衛。',
      treasure: '他販售渣鐵熔塊、燼咬藥膏與燼玻碎片。',
      spirit: '他讓餘燼鍛台成為火線補給與風險說明節點。',
    },
  },

  ember_march_banner_marshal_echo: {
    id: 'ember_march_banner_marshal_echo',
    name: '奧瑞克',
    alias: 'marshal',
    title: '倒旗坡邊境元帥殘響',
    description:
      '一道邊境元帥的殘響站在倒旗坡斷旗前，盔甲內只有灰燼與微弱火光。' +
      '他仍用軍禮回應每一次熱風，像還在等待撤退命令被承認。',
    roomId: 'ember_march_fallen_banner',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '撤退不是潰敗。沒有把消息帶回去，才是潰敗。',
        options: [
          { text: '當年發生什麼？', nextId: 'history' },
          { text: '心火邊境印是什麼？', nextId: 'seal' },
          { text: '我會帶回紀錄。', nextId: 'farewell' },
        ],
      },
      {
        id: 'history',
        text: '火山先裂，敵軍後到。邊堡封門太晚，鍛台又把火線餵給了龍印脊。',
        options: [
          { text: '心火邊境印是什麼？', nextId: 'seal' },
          { text: '我去邊堡外殼。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seal',
        text: '那是火線的核心證物。拿到它，就能證明這裡不是單純失守，而是火山、軍令與龍印一起失控。',
        options: [
          { text: '當年發生什麼？', nextId: 'history' },
          { text: '我會處理心火缺口。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若旗布重新燃起，不要敬禮，先找掩體。' },
    ],
    guardianHints: {
      creature: '奧瑞克能提示焦旗掠兵、骨窯灰衛、邊爐熔衛與心火缺口亞龍。',
      treasure: '他說明灰線旗布、渣鐵熔塊與心火邊境印的戰線意義。',
      spirit: '他把餘燼邊境的災害從自然火山提升為軍事失控與撤退失敗的故事。',
    },
  },

  reef_of_bones_tide_chartist: {
    id: 'reef_of_bones_tide_chartist',
    name: '賽芮',
    alias: 'chartist',
    title: '白骨潮門退潮測繪師',
    description:
      '一名測繪師站在白骨潮門前，把潮線、船名與巨獸肋骨位置畫在防水皮紙上。' +
      '她的靴底綁著骨釘，避免冷潮突然回湧時被拖下淺灘。',
    roomId: 'reef_of_bones_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '白骨礁只有退潮時像路。潮聲一變，所有路都會重新變回海。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '寶庫怎麼找？', nextId: 'vault' },
          { text: '我會看潮線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先沿肋骨淺灘到沉船船首，再聽礁鐘柱。黑珊瑚切口不是捷徑，那裡會吃掉方向感。',
        options: [
          { text: '寶庫怎麼找？', nextId: 'vault' },
          { text: '我先去肋骨淺灘。', nextId: 'farewell' },
        ],
      },
      {
        id: 'vault',
        text: '溺亡寶庫在斷桅林東面，但你需要溺寶殘圖和礁鐘方向。若霜浪洞亮起，骨龍也醒了。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '我會留意霜浪洞。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別跟著亮水走。真正安全的潮路通常比較難看。' },
    ],
    guardianHints: {
      creature: '賽芮能提示肋灘骸兵、冷潮溺者、黑珊瑚潛伏者與溺亡寶庫船長的路線。',
      treasure: '她說明礁骨裂片、礁鐘舌片與溺寶殘圖的用途。',
      spirit: '她把白骨礁拆成退潮路線、船骸入口、黑珊瑚危險區與寶庫核心。',
    },
  },

  reef_of_bones_coral_scrimshander: {
    id: 'reef_of_bones_coral_scrimshander',
    name: '洛克',
    alias: 'scrimshander',
    title: '黑珊瑚切口骨雕商',
    description:
      '一名骨雕商在黑珊瑚切口外擺著小攤，刀具插在鯨骨盒裡，旁邊掛著退潮鈴。' +
      '他販賣能在冷潮裡保命的藥物，也收購不會低語的黑珊瑚。',
    roomId: 'reef_of_bones_black_coral_cut',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'reefbone_splinter',
      'black_coral_hook',
      'tidebell_clapper',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西快一點。這片礁的價格會跟潮水一起漲，命也一樣。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '黑珊瑚危險嗎？', nextId: 'coral' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、礁骨裂片、黑珊瑚鉤、礁鐘舌片。溺寶殘圖不賣，賣那個會讓死人找上門。',
        action: { type: 'shop', data: { shopType: 'reef_of_bones_scrimshander' } },
        options: [
          { text: '黑珊瑚危險嗎？', nextId: 'coral' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'coral',
        text: '黑珊瑚會記得被誰折下。若鉤子自己往船艙方向轉，代表那塊珊瑚還連著潛伏者。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '聽見礁鐘只響一下就快跑。響兩下通常已經太晚。' },
    ],
    guardianHints: {
      creature: '洛克能提示冰藻縛手、黑珊瑚潛伏者、幽錨拖行者與鯨骨守衛。',
      treasure: '他販售礁骨裂片、黑珊瑚鉤與礁鐘舌片。',
      spirit: '他讓黑珊瑚切口成為補給、鑑定與風險提示節點。',
    },
  },

  reef_of_bones_captain_widow: {
    id: 'reef_of_bones_captain_widow',
    name: '米蕾雅',
    alias: 'widow',
    title: '船長墓守墓寡婦',
    description:
      '一名披著鹽白黑紗的女人坐在船長墓旁，手中縫補一面永遠濕透的船旗。' +
      '她不像活人，也不像亡靈；每次潮水回頭，她的影子都會少一段。',
    roomId: 'reef_of_bones_captain_grave',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '他說只是下船取寶，很快回來。後來整片礁都開始替他守門。',
        options: [
          { text: '船長在哪？', nextId: 'captain' },
          { text: '骨龍又是什麼？', nextId: 'drake' },
          { text: '我會帶回船長印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'captain',
        text: '溺亡寶庫。若你見到他，別提歸航。他已經把回家的方向抵給寶藏了。',
        options: [
          { text: '骨龍又是什麼？', nextId: 'drake' },
          { text: '我去寶庫。', nextId: 'farewell' },
        ],
      },
      {
        id: 'drake',
        text: '那不是他的寵物，是礁本身。盜墓者越多，牠的骨翼越完整。',
        options: [
          { text: '船長在哪？', nextId: 'captain' },
          { text: '我會避開霜浪。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你拿到寶庫船長印，別戴在手上。它會把你也算進船員名冊。' },
    ],
    guardianHints: {
      creature: '米蕾雅能提示礁鐘潮祭司、巫光礁賢者、溺亡寶庫船長與霜浪骨龍。',
      treasure: '她說明溺寶殘圖與寶庫船長印背後的守財誓約。',
      spirit: '她把白骨礁從沉船財寶區連到不死海盜、歸航失敗與巨獸骨礁的核心故事。',
    },
  },

  sapphire_lake_claim_surveyor: {
    id: 'sapphire_lake_claim_surveyor',
    name: '艾芙',
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
    name: '妮拉',
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
    name: '羅文',
    alias: 'sergeant',
    title: '衛兵亭市集巡長',
    description:
      '一名巡長靠在衛兵亭前，盔甲擦得不亮，卻沒有一處妨礙拔劍。' +
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

  final_battleground_war_scribe: {
    id: 'final_battleground_war_scribe',
    name: '赫倫',
    alias: 'scribe',
    title: '終戰入口軍史官',
    description:
      '一名灰袍軍史官站在終戰入口的斷碑旁，手中的銅筆不停記錄破旗飄動、黑焰推進與神傷脈動。' +
      '他的影子比身體更像士兵，彷彿仍在替最後一場戰爭點名。',
    roomId: 'final_battleground_war_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別急著衝向終末軍旗。這片戰場最危險的不是敵人還活著，而是軍令仍然有效。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '神傷核心在哪？', nextId: 'godscar' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'front',
        text: '破旗殘布能指向殘兵，王骨誓片會引你去誓約石圈；黑焰餘燼若開始無熱燃燒，就代表終軍將正在整隊。',
        options: [
          { text: '神傷核心在哪？', nextId: 'godscar' },
          { text: '我去清理戰線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'godscar',
        text: '裂世縫之後才是神傷核心。別把墜天光環碎片用得太早，神傷化身的白光比黑焰更會懲罰貪攻。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若軍旗忽然沒有影子，立刻後撤。那代表統帥正在重新點名。' },
    ],
    guardianHints: {
      creature: '赫倫能提示終戰門旗衛、黑焰終軍將、神傷化身與終末軍旗統帥的推進順序。',
      treasure: '他說明破旗殘布、王骨誓片、黑焰餘燼與墜天光環碎片的戰線用途。',
      spirit: '他把終焉戰場拆成軍令、黑焰、神傷與終末軍旗四個危險節點。',
    },
  },

  final_battleground_relic_quartermaster: {
    id: 'final_battleground_relic_quartermaster',
    name: '瑪薩',
    alias: 'quartermaster',
    title: '末令高臺遺物軍需官',
    description:
      '一名戴著半邊鐵面具的軍需官守在末令高臺，貨箱裡整齊放著藥水、破旗殘布與封存黑焰的石匣。' +
      '她每次交貨前都會先確認買主的影子還連在腳下。',
    roomId: 'final_battleground_last_command_post',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'phoenix_feather',
      'broken_warbanner',
      'kingbone_oath_shard',
      'blackflame_ember',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '末令高臺只賣能讓你活著走到下一面旗的東西。想買補給，先把手伸出來，我要看有沒有黑焰燒痕。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '終軍將在哪？', nextId: 'general' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '大型藥水、鳳凰之羽、破旗殘布、王骨誓片、黑焰餘燼。神傷血晶和終末軍旗印我不賣，能買到的都不是真貨。',
        action: { type: 'shop', data: { shopType: 'final_battleground_relics' } },
        options: [
          { text: '終軍將在哪？', nextId: 'general' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'general',
        text: '黑焰前線、無冠戰場、終末軍旗都可能聽見牠的號令。若你身上的破旗殘布同時往三個方向拉，代表牠已經盯上你。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會準備好。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在這裡數戰利品。末令高臺會記住貪心的人。' },
    ],
    guardianHints: {
      creature: '瑪薩能提示魔神爪痕先鋒、黑焰終軍將與終末軍旗統帥的材料壓力。',
      treasure: '她販售高階藥水與前中段終焉戰場材料，神傷與終局聖物仍需戰鬥取得。',
      spirit: '她把末令高臺變成終焉戰場深處唯一可回訪的補給節點。',
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

function parseOrdinalTarget(name: string): { name: string; ordinal?: number } {
  const trimmed = name.trim();
  const hashMatch = trimmed.match(/^(.+?)#(\d+)$/);
  const match = hashMatch;
  if (!match) return { name: trimmed };

  const ordinal = parseInt(match[2], 10);
  if (!Number.isFinite(ordinal) || ordinal < 1) return { name: trimmed };
  return { name: match[1].trim(), ordinal };
}

/** 根據名稱或「名稱#序號」模糊搜尋 NPC */
export function findNpcByName(name: string, roomId?: string): NpcDef | undefined {
  const candidates = roomId
    ? Object.values(NPCS).filter(npc => npc.roomId === roomId)
    : Object.values(NPCS);
  const parsed = parseOrdinalTarget(name);
  const q = parsed.name.toLowerCase();
  const matches = candidates.filter(
    npc => npc.name === parsed.name || npc.name.includes(parsed.name) || npc.id.includes(parsed.name) || npc.alias.toLowerCase() === q || npc.alias.toLowerCase().includes(q),
  );
  return parsed.ordinal ? matches[parsed.ordinal - 1] : matches[0];
}
