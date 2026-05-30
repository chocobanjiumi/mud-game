import type { NpcDef } from '@game/shared';

export const NPCS_PART_003: Record<string, NpcDef> = {
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
      'shadowmoss_clump', 'moonwell_draught',
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
      'heatproof_miner_salve', 'fire_soup', 'salamander_tail',
      'sulfur_crystal_cluster', 'obsidian_glass_plate', 'fire_vent_crystal',
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
          { text: '我先去整理鍛造材料。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧！從鋼劍到炎之劍，從鎖子甲到板甲——全是我親手鍛造的精品！' +
          '矮人出品，品質保證。也有耐熱礦工膏、火焰湯和幾種火山礦材，進深層前別空手。',
        action: { type: 'shop', data: { shopType: 'dwarf_forge' } },
        options: [
          { text: '好東西！', nextId: 'farewell' },
        ],
      },
      {
        id: 'crafting',
        text: '普通的鍛造對我來說小菜一碟。但如果你能帶來稀有材料——' +
          '比如火晶種、黑曜玻板、水晶核心、暗影精華、冰元素核心這些東西，我就能鍛造出傳說級的武器。' +
          '那種武器可是有靈魂的！嘿嘿。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials_detail' },
          { text: '看看普通商品吧。', nextId: 'shop' },
        ],
      },
      {
        id: 'materials_detail',
        text: '火山本地先找硫磺晶簇、黑曜玻板和火晶種。火蜥蜴尾能做耐熱材料，校爐火鉗則能證明火晶噴氣口真的失衡。' +
          '外地材料像水晶核心、暗影精華、冰元素核心也有用。集齊材料再來找我！',
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
        text: '岩石巨人、火蜥蜴、灰燼煤精和硫煙爬蟲最近都變多了。' +
          '可能是深處的岩漿活動把牠們從更下層驅趕上來的。' +
          '矮人戰士們已經在前線擋著了，但人手不夠。',
        options: [
          { text: '我去幫忙。', nextId: 'farewell' },
          { text: '有什麼報酬？', nextId: 'quest_detail' },
        ],
      },
      {
        id: 'ore_info',
        text: '這座礦洞出產精鐵礦、黑曜玻板和火晶種。硫磺熱泉的晶簇也重要，' +
          '那能讓我們判斷毒霧濃度。更深處據說有秘銀礦脈，但那些區域被怪物佔據了。',
        options: [
          { text: '秘銀！那我一定去。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quest_detail',
        text: '簡單說——到火晶噴氣口取回校爐火鉗，再幫我們清掉黑曜石採場的玄武岩鎮衛。完成之後，' +
          '我給你一批精鐵與黑曜石樣本，拿去找鍛造師能做出好東西。',
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
          { text: '我先避開火山熱風。', nextId: 'farewell' },
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
        text: '也許……如果能找到火神的信物——一枚穩定的火晶種，放置在祭壇上，' +
          '就能安撫火龍的躁動。但火晶種必須從噴氣口或火焰精靈核心取得，沾染硫煙的不能用。',
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
      'prism_shard', 'miner_focus_lens', 'crystal_resonance_tonic',
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
          { text: '我先去盤點寶石貨單。', nextId: 'farewell' },
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
          '第三，遠離狼群。霜松潛獵者會繞背，冰河裂縫裡還有骨魄，不要只盯著正前方。',
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
          '城堡的大門被冰封了千年，據說只有持有冰元素核心，並看懂符石環與冰哨徽章上的巡邏順序，才能安全靠近。' +
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
      'warming_fur_broth', 'snowwolf_fur', 'frostpine_resin',
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
          '藥水、暖身毛皮湯、雪狼毛和霜松樹脂也帶足了，在雪原裡受傷可不是開玩笑的。另外回城卷軸多帶幾張，' +
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
          '不過最近雪狼群越來越兇猛，霜松林還出現了專門繞背的潛獵者，獵取毛皮的風險也越來越高了。',
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
          { text: '我先確認進城準備。', nextId: 'farewell' },
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
          '就是傳說中的「冰之弓」。但進入城堡的條件是……你需要冰元素核心作為鑰匙，也最好帶回冰哨徽章確認外牆巡邏。',
        options: [
          { text: '冰元素核心在哪裡？', nextId: 'core_location' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core_location',
        text: '水晶冰洞深處和冰晶尖塔都有線索。那裡有冰元素、冰河骨魄與王朝霜衛守著舊封印——' +
          '牠們是冰龍力量的延伸，力量不可小覷。擊敗牠們並帶回符石片，才可能取得核心路線。',
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

// ─── 魔族領地 NPC ──────────────────────────────────────

  demon_border_defector: {
    id: 'demon_border_defector',
    name: '邊境叛逃兵',
    alias: 'defector',
    title: '失去軍牌的魔族士兵',
    description: '一名躲在裂谷橋墩陰影下的魔族士兵，黑甲被冰霜和焦灰刮得斑駁。牠刻意折斷了自己的軍牌，用灰布包住雙角，眼神總在哨塔與焦土平原之間游移。',
    roomId: 'demon_border',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別拔武器，我已經不替黑堡巡邏了。灰燼哨塔每次點火都會把你的路線傳回要塞；想活著穿過這裡，就先看懂火光。',
        options: [
          { text: '哨塔火光代表什麼？', nextId: 'signal_fire' },
          { text: '這裡真的會被其他玩家伏擊嗎？', nextId: 'pvp_warning' },
          { text: '你需要什麼？', nextId: 'request' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'signal_fire',
        text: '藍白火是邊境偵查，暗紅火是地獄犬放行，連閃三次代表將軍親自巡門。若你從灰燼斥候身上拿到哨火筒，後面很多路都能少走冤枉戰。',
        options: [
          { text: '我會找灰燼哨火筒。', nextId: 'farewell' },
          { text: '還有其他風險嗎？', nextId: 'pvp_warning' },
        ],
      },
      {
        id: 'pvp_warning',
        text: '這片地是開放戰場。魔族巡邏、地形煙塵、敵對玩家都會利用同一條撤退路；別在血河與拷問室久留，死了不只掉血，還可能掉金幣。',
        options: [
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'request',
        text: '帶回灰燼哨火筒和符印塔拓片。前者能證明哨塔換班，後者能證明城門結界如何改位。沒有這兩樣，黑堡只會一直補兵。',
        options: [
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '走橋時別看火，看影子。小惡魔喜歡從你以為安全的方向飛出來。' },
    ],
    guardianHints: {
      creature: '叛逃兵仍能聽懂魔族哨語，牠會在火盆變色前先縮進橋墩陰影。',
      treasure: '牠折斷的軍牌背面刻著灰燼哨塔與血河之間的短路。',
      spirit: '牠不是善良，只是知道魔王下一場遠征會把低階士兵當燃料。',
    },
  },

shadow_market_broker: {
    id: 'shadow_market_broker',
    name: '影市掮客',
    alias: 'broker',
    title: '黑布棚下的補給販子',
    description: '一名把臉藏在黑色面紗後的走私商，攤位上堆著軍糧、礦渣、符紙和拆下來的鎖環。她說話時總會先看牆上影子，像是在確認有沒有守軍靠近。',
    roomId: 'demon_shadow_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion', 'large_mp_potion', 'return_scroll',
      'black_fortress_ration', 'blood_river_slag', 'ash_watch_signal_flare',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買補給就快，軍隊剛從戰爭熔爐拖走一批長槍，影市很快會清場。黑堡軍糧、血河魔渣、哨火筒都有，但別問來源。',
        options: [
          { text: '看看貨。', nextId: 'shop' },
          { text: '影市和要塞軍隊什麼關係？', nextId: 'market_route' },
          { text: '有熔爐情報嗎？', nextId: 'forge_info' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '高風險地帶只認能救命的貨。黑堡軍糧能撐過一輪圍攻，血河魔渣能換到熔爐工匠的注意，哨火筒則能讓你懂得哪條路快要封死。',
        action: { type: 'shop', data: { shopType: 'shadow_market' } },
        options: [
          { text: '交易完成。', nextId: 'farewell' },
        ],
      },
      {
        id: 'market_route',
        text: '影市不屬於軍隊，但軍隊離不開影市。寶庫、熔爐、兵營都有東西從黑布棚下轉手；你要找失蹤物資，就看哪個攤位的影子不跟主人同步。',
        options: [
          { text: '熔爐那邊呢？', nextId: 'forge_info' },
        ],
      },
      {
        id: 'forge_info',
        text: '戰爐監工最怕未淬火的熔胚被拿走。少一批戰爭熔胚，前線長槍就少一批詛咒；想讓要塞慢下來，砸風箱不如搶冷卻架。',
        options: [
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離開影市前確認背包。這裡最常消失的不是金幣，是你以為沒人知道的情報。' },
    ],
    guardianHints: {
      creature: '掮客身旁沒有守衛，但棚頂的影子會在危險靠近時先動。',
      treasure: '她的貨箱夾層藏著一份黑堡補給路線圖。',
      spirit: '影市的存在證明魔族領地並非鐵板一塊，貪婪讓縫隙變得可利用。',
    },
  },

captive_field_surgeon: {
    id: 'captive_field_surgeon',
    name: '被囚軍醫',
    alias: 'surgeon',
    title: '鐵鏈旁的戰地醫師',
    description: '一位被鎖在拷問室角落的人類軍醫，外袍早被煙灰和血跡染黑。他用磨鈍的手術刀切開繩索纖維，身旁藏著幾瓶偷來的藥水與一張逃生記號圖。',
    roomId: 'torture_chamber',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '你還能走路，代表還沒被拷問室拖進黑井。聽著，鎖鏈庭院的守軍會把傷者推回這裡處理，你能從他們身上找到煉獄鎖環。',
        options: [
          { text: '煉獄鎖環有什麼用？', nextId: 'chain_link' },
          { text: '你知道逃生路線嗎？', nextId: 'escape_marks' },
          { text: '我該怎麼在這裡活下來？', nextId: 'survival' },
          { text: '保重。', nextId: 'farewell' },
        ],
      },
      {
        id: 'chain_link',
        text: '鎖環不是單純刑具，它導引符印塔的封魂線。拿到足夠鎖環，就能推測哪幾段牆不是承重牆，而是魔法管路。',
        options: [
          { text: '我會從守軍身上找。', nextId: 'farewell' },
        ],
      },
      {
        id: 'escape_marks',
        text: '地上箭頭有兩套。短箭頭通兵營，長箭頭通鎖鏈庭院；若你看見箭頭旁有三道刮痕，那是巡邏剛經過，別跟著走。',
        options: [
          { text: '很有用。', nextId: 'survival' },
        ],
      },
      {
        id: 'survival',
        text: '別把大型藥水留到最後一口氣才喝。魅魔會先打亂你的判斷，士兵才補刀；如果看見紅光從東牆脈動，表示召喚陣正在吸走周圍魔力。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你能出去，替我把逃生記號刻到影市後巷。下一個被抓的人也許還能用上。' },
    ],
    guardianHints: {
      creature: '軍醫能靠腳步聲分辨魅魔與士兵，因為兩者拖動鎖鏈的節奏不同。',
      treasure: '他的藥瓶裡混有能短暫壓制暗火灼傷的黑堡軍糧粉末。',
      spirit: '他留下逃生記號不是為了自己，而是為了下一批俘虜。',
    },
  },

war_forge_spy: {
    id: 'war_forge_spy',
    name: '熔爐內應',
    alias: 'forgespy',
    title: '偽裝成搬運工的情報員',
    description: '一名穿著魔族搬運工外衣的人類情報員，臉上塗滿煤灰，手臂被高溫燙出新舊交錯的傷痕。他推著空礦車在熔爐邊慢慢移動，實際上正記錄風箱與冷卻槽的節奏。',
    roomId: 'demon_war_forge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別盯著我看，監工會數人頭。你若想讓戰爭熔爐停下，就帶走戰爭熔胚，再把符印塔拓片交給懂結界的人。',
        options: [
          { text: '戰爭熔胚在哪裡？', nextId: 'blank_location' },
          { text: '符印塔拓片和熔爐有關？', nextId: 'sigil_link' },
          { text: '監工怎麼對付？', nextId: 'taskmaster' },
          { text: '我會低調。', nextId: 'farewell' },
        ],
      },
      {
        id: 'blank_location',
        text: '冷卻架第二層。戰爐監工每次巡完兵營都會檢查一次，拿走熔胚後別原路回影市，熱管線通往熔岩下水道更容易甩開追兵。',
        options: [
          { text: '我去找冷卻架。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sigil_link',
        text: '熔爐不是只靠火，符印塔會把城門結界的餘熱導到這裡。拓片能顯示哪個時段管路轉向，那時破壞風箱才不會被立刻修復。',
        options: [
          { text: '原來如此。', nextId: 'taskmaster' },
        ],
      },
      {
        id: 'taskmaster',
        text: '監工的長鉤會讓士兵重新列隊。別在熔池邊跟牠硬拚，把牠引到砧台後，牠的鎖鏈會卡住半拍。',
        options: [
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '礦車一響就代表新一隊士兵進場。到時候不管拿到什麼，都先離開。' },
    ],
    guardianHints: {
      creature: '內應會用推車輪聲遮住你的腳步，但無法遮住戰爐監工的長鉤拖地聲。',
      treasure: '他的空礦車底部夾著半張熔爐管線圖。',
      spirit: '他願意留在熔爐，是因為每少一批熔胚，前線就少一批被詛咒的武器。',
    },
  },

// ─── 龍谷 NPC ──────────────────────────────────────────

  dragon_gate_loremaster: {
    id: 'dragon_gate_loremaster',
    name: '龍門銘文師',
    alias: 'loremaster',
    title: '解讀龍語的守門學者',
    description: '一位披著防火灰斗篷的老學者，坐在龍谷入口的古老供台旁。她的手杖頂端綁著自然脫落的龍鱗，腰間掛滿拓印布、雲石粉與破損魔族軍牌。',
    roomId: 'dragon_valley_entrance',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '放低武器，先讀岩壁。龍谷不是寶庫入口，而是仍在運作的聖地；魔族曾經不懂這一點，所以只留下熔化的黑鐵。',
        options: [
          { text: '龍語警告寫了什麼？', nextId: 'warning' },
          { text: '我該先去哪些地方？', nextId: 'routes' },
          { text: '哪些材料可以拿？', nextId: 'law' },
          { text: '我會保持敬意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'warning',
        text: '大意是：取被允許之物，避開新生之巢，別把屠戮當成鍛造資格。你若想活著通過，就分清自然脫落的龍鱗和剛從血肉上剝下的戰利品。',
        options: [
          { text: '那材料怎麼取得？', nextId: 'law' },
          { text: '路線呢？', nextId: 'routes' },
        ],
      },
      {
        id: 'routes',
        text: '向西先看風棲岩棚，能學會風向；向東到龍骨原野，會明白死亡如何守護這裡。若直上天空之橋，請先備好抗雷與回復品。',
        options: [
          { text: '我會先觀察。', nextId: 'farewell' },
        ],
      },
      {
        id: 'law',
        text: '雲石碎片、自然脫落的龍牙、泉邊龍鱗、火玻璃鱗片，這些都能被鍛台接受。墜星隕鐵和龍諭透鏡則要交給知道封印的人，別拿去亂賣。',
        options: [
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '看見幼龍時別追。你追的是一隻幼龍，牠喊來的是整座山谷。' },
    ],
    guardianHints: {
      creature: '銘文師能從風聲辨認空中巡邏，因為龍翼會改變入口雲霧的回音。',
      treasure: '她的拓印布上有龍之寶庫門鎖的舊式龍語寫法。',
      spirit: '她不是龍族僕從，而是少數被允許記錄龍谷歷史的外人。',
    },
  },

dragon_scale_artisan: {
    id: 'dragon_scale_artisan',
    name: '龍鱗匠師',
    alias: 'scaleartisan',
    title: '藍火鍛台守匠',
    description: '一名身材矮壯的龍裔工匠，肩上披著耐火鱗片圍裙，手臂布滿藍火燙痕。他站在水晶砧旁，仔細檢查每一片材料是否帶著掠奪血氣。',
    roomId: 'dragon_scale_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion', 'large_mp_potion', 'return_scroll',
      'scaleforge_broth', 'cloudstone_shard', 'fireglass_scale',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '把材料放到藍火邊。火不認謊言，偷剝的鱗會變冷灰，自然脫落的鱗才會回應鍛台。',
        options: [
          { text: '看看補給與材料。', nextId: 'shop' },
          { text: '龍鱗鍛台能做什麼？', nextId: 'forge' },
          { text: '你收哪些材料？', nextId: 'materials' },
          { text: '先不打擾。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '鱗鍛熱湯能撐過高巢熱風，雲石碎片能修鞍具，火玻璃鱗片能補抗火符刃。別買了就往龍蛋室亂闖，那不是材料倉庫。',
        action: { type: 'shop', data: { shopType: 'dragon_forge' } },
        options: [
          { text: '交易完成。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '這裡能把龍鱗、龍牙、雲石與星鐵做成守護裝備，但前提是材料來源被龍谷承認。力量不是偷來的，是被允許承擔的。',
        options: [
          { text: '材料來源怎麼判斷？', nextId: 'materials' },
        ],
      },
      {
        id: 'materials',
        text: '龍鱗片、火玻璃鱗片、雲石碎片、雷巢晶簇都能鍛。龍諭透鏡和墜星隕鐵別先丟進火裡，那些牽涉預言和深淵封印。',
        options: [
          { text: '我會分開保存。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離開前喝點熱湯。高處風冷，火熱，兩者都會殺人。' },
    ],
    guardianHints: {
      creature: '匠師不直接戰鬥，但藍火會驅逐帶著掠奪血氣的人。',
      treasure: '水晶砧內封著一片古龍自然脫落的第一片鱗。',
      spirit: '龍族鍛造的核心不是鋒利，而是承諾不把聖地變成屠宰場。',
    },
  },

dragon_oracle_keeper: {
    id: 'dragon_oracle_keeper',
    name: '龍諭守望者',
    alias: 'oraclekeeper',
    title: '星圖棲台的記錄者',
    description: '一位戴著水晶目鏡的年輕龍裔，站在龍諭棲台的星圖透鏡間。她的披肩縫著雷巢晶簇與雲石粉，手中石板反覆描摹同一段關於深淵裂隙的預言。',
    roomId: 'dragon_oracle_perch',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '星圖又偏了。魔族要塞的黑火、墜星坑的裂紋、聖殿地板下的深淵，三者正在同一個夜裡重合。',
        options: [
          { text: '你需要什麼證物？', nextId: 'evidence' },
          { text: '預言指向哪裡？', nextId: 'prophecy' },
          { text: '天衛巡空圖有用嗎？', nextId: 'patrol_map' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'evidence',
        text: '帶回龍諭透鏡、墜星隕鐵與天衛巡空圖。透鏡證明星圖，隕鐵證明裂紋，巡空圖能證明異常擴大的日期不是巧合。',
        options: [
          { text: '我會找這些。', nextId: 'farewell' },
        ],
      },
      {
        id: 'prophecy',
        text: '預言不說誰會勝利，只說一扇門會從地下打開。古龍守著門不是因為貪婪，而是因為門後的東西連龍也不想再看見一次。',
        options: [
          { text: '這和深淵有關。', nextId: 'evidence' },
        ],
      },
      {
        id: 'patrol_map',
        text: '天衛營地的巡空圖會標出哪一夜裂隙第一次變寬。若日期和魔族遠征命令吻合，就代表黑堡不是單純攻打龍谷，而是在逼古龍離開封印。',
        options: [
          { text: '我去天衛營地。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '星圖不會等人。雷球轉北時，聖殿門會短暫顯形。' },
    ],
    guardianHints: {
      creature: '守望者能預判風暴巨龍回巢時間，因為星圖透鏡會先轉向雷巢。',
      treasure: '她的石板背面刻著通往墜星坑的安全星位。',
      spirit: '她記錄預言不是為了神秘，而是為了讓下一個區域的災難有跡可循。',
    },
  },

// ─── 深淵裂隙 NPC ──────────────────────────────────────

  rift_seal_researcher: {
    id: 'rift_seal_researcher',
    name: '裂隙封印研究員',
    alias: 'sealresearcher',
    title: '站在入口邊緣的穩定者',
    description: '一名用錨鏈把自己固定在深淵入口旁的研究員，護目鏡映著紫黑裂光。她的筆記本用龍鱗片作封面，頁角夾著來自封印錨階的斷鏈灰。',
    roomId: 'abyss_entrance',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別站在裂縫正中。這裡不是洞穴，是一個正在思考怎麼吞掉你的座標。先把錨鏈讀懂，再往下走。',
        options: [
          { text: '錨鏈代表什麼？', nextId: 'anchor' },
          { text: '我該收集什麼？', nextId: 'samples' },
          { text: '深淵最危險的是什麼？', nextId: 'danger' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'anchor',
        text: '龍族和術士曾合作把入口釘在現實上。現在錨鏈被深淵反過來做成守衛；從裂隙錨衛身上取回鏈環，我們才能知道封印哪裡先斷。',
        options: [
          { text: '我會找深淵錨鏈環。', nextId: 'farewell' },
        ],
      },
      {
        id: 'samples',
        text: '虛空碎片、深淵錨鏈環、時間碎片、信標眼核。前兩個能穩入口，後兩個能證明領主正在校準通往天界的路。',
        options: [
          { text: '了解。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '不是死亡，是偏移。你以為自己往北走，實際上可能走進別人的記憶、上一秒或信標傳出的座標。留下路標，別相信倒影。',
        options: [
          { text: '不相信倒影。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見自己的聲音從前方傳來，停下。真正的你應該還在原地。' },
    ],
    guardianHints: {
      creature: '研究員腰間的錨鏈會在虛空行者現身前繃緊。',
      treasure: '她的筆記中有封印錨階、鏡湖與信標三處座標的相對誤差。',
      spirit: '她知道自己可能出不去，所以把每一頁筆記都寫成下一個人能讀懂的格式。',
    },
  },
};
