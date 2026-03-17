// 房間擴充定義 - 區域 5-8 的額外房間
// 此檔案由獨立 agent 產生，稍後透過 merge-expansion.ts 合併至主資料

import type { RoomDef } from '@game/shared';

// ============================================================
//  擴充房間定義 (Areas 5-8)
// ============================================================

export const EXPANSION_ROOMS: Record<string, RoomDef> = {

  // ─── Area 5: 翠綠平原擴充 (Lv 5-12) ─────────────────────

  sunflower_field: {
    id: 'sunflower_field',
    name: '向日葵田',
    zone: 'plains',
    description:
      '一片金燦燦的向日葵田在陽光下綻放，花莖高過人頭，形成一座花的迷宮。' +
      '微風拂過時，萬千花盤齊齊轉向太陽，沙沙作響。' +
      '田間偶爾能瞥見灰色的身影一閃而過——田鼠和烏鴉是這裡的常客。',
    exits: [
      { direction: 'east', targetRoomId: 'plains_entrance', description: '穿過花田回到平原入口' },
      { direction: 'north', targetRoomId: 'hunter_lodge', description: '花田盡頭有一間小木屋' },
      { direction: 'south', targetRoomId: 'riverside_fishing', description: '花田南邊傳來潺潺水聲' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[S]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '向日葵的根部有被挖掘的痕跡，田鼠群可能在地下築了龐大的巢穴。',
      treasure: '最高的那株向日葵底下埋著什麼——泥土顏色與四周不同。',
      spirit: '傳說這片花田是一位花精靈在百年前播下的種子，花瓣中仍殘留她的祝福。',
    },
  },

  hunter_lodge: {
    id: 'hunter_lodge',
    name: '獵人小屋',
    zone: 'plains',
    description:
      '一間由原木搭建的堅固小屋，門口掛著風乾的獸皮和鹿角。' +
      '屋內壁爐的火光透過窗戶映出溫暖的橙色。一位老獵人坐在門廊上擦拭弓弦，' +
      '身旁的獵犬懶洋洋地趴在階梯上打盹。',
    exits: [
      { direction: 'south', targetRoomId: 'sunflower_field', description: '回到向日葵田' },
      { direction: 'west', targetRoomId: 'ancient_treehouse', description: '小屋後方有條隱蔽的小路通往古老樹屋' },
    ],
    monsters: [],
    npcs: ['old_hunter'],
    mapSymbol: '[L]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '獵犬偶爾對著樹林方向低吼，老獵人說那裡有隻特別狡猾的狐狸。',
      treasure: '壁爐上方的鹿角之間掛著一把古老的獵弓，木紋在火光下隱現符文。',
      spirit: '老獵人的眼神中藏著數十年的山林經驗，他或許知道森林深處的秘密通道。',
    },
  },

  abandoned_minecart: {
    id: 'abandoned_minecart',
    name: '廢棄礦車道',
    zone: 'plains',
    description:
      '生鏽的鐵軌從草地延伸入一個低矮的洞口，幾輛翻覆的礦車散落在軌道旁。' +
      '空氣中瀰漫著鐵鏽和潮濕泥土的氣味，洞口深處傳來間歇的滴水聲。' +
      '這條礦道似乎通往水晶洞窟的某個角落。',
    exits: [
      { direction: 'west', targetRoomId: 'windmill_farm', description: '沿著軌道走回風車農場' },
      { direction: 'south', targetRoomId: 'cave_entrance', description: '順著礦車道向南深入地底' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'small_bat', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[M]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '翻覆的礦車底下有細碎的爬行聲，田鼠們把這裡當成了新巢穴。',
      treasure: '其中一輛礦車裡還殘留著礦石——仔細翻找也許有值錢的礦物。',
      spirit: '礦道牆壁上刻著工人們的塗鴉和計數痕跡，最後的記錄戛然而止，令人不安。',
    },
  },

  riverside_fishing: {
    id: 'riverside_fishing',
    name: '河邊釣場',
    zone: 'plains',
    description:
      '一條清澈的小河蜿蜒流過草原，河畔的柳樹垂下綠色的簾幕。' +
      '幾塊平整的大石頭從岸邊延伸入水中，是天然的釣魚平台。' +
      '水面下銀色的魚群悠然游過，河風帶來清涼的水氣。',
    exits: [
      { direction: 'north', targetRoomId: 'sunflower_field', description: '沿河岸走回向日葵田' },
      { direction: 'east', targetRoomId: 'windmill_interior', description: '河邊有座古老的水車風車' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[~]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '水面偶爾翻起巨大的漣漪——河裡似乎有遠不止小魚的東西。',
      treasure: '柳樹根部的河床中卡著一個被水流沖來的皮革小包，裡面或許有旅人的遺物。',
      spirit: '河水的低吟聲中夾雜著古老的旋律，傳說河精靈會在月圓之夜現身。',
    },
  },

  windmill_interior: {
    id: 'windmill_interior',
    name: '風車內部',
    zone: 'plains',
    description:
      '推開厚重的木門，巨大的齒輪和石磨在頭頂緩緩轉動，發出有節奏的咔嗒聲。' +
      '空氣中飄散著麵粉的清香，陽光透過狹窄的窗縫射入，塵埃在光柱中飛舞。' +
      '樓梯盤旋而上，通往風車的頂層觀景台。',
    exits: [
      { direction: 'west', targetRoomId: 'riverside_fishing', description: '走出風車回到河邊' },
      { direction: 'north', targetRoomId: 'windmill_farm', description: '從側門走向風車農場' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 20 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[W]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '齒輪間的縫隙中有田鼠築巢的痕跡，牠們偷吃磨好的麵粉。',
      treasure: '石磨的底座有一塊可以取下的石板，下面藏著磨坊主人的私房錢。',
      spirit: '風車的齒輪運轉中蘊含著古代工匠的智慧，據說設計者是一位隱居的矮人技師。',
    },
  },

  // ─── Area 6: 暗影森林擴充 (Lv 12-20) ────────────────────

  firefly_trail: {
    id: 'firefly_trail',
    name: '螢火蟲小徑',
    zone: 'dark_forest',
    description:
      '密林中的一條幽靜小徑，數以千計的螢火蟲在兩旁的灌木叢中閃爍，' +
      '將黑暗的森林點綴成一條夢幻的光之走廊。' +
      '腳下的苔蘚柔軟如地毯，每一步都踩出微弱的磷光。',
    exits: [
      { direction: 'west', targetRoomId: 'dense_trail', description: '沿著光點回到密林小道' },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '螢火蟲越來越少，空氣越來越潮濕' },
      { direction: 'east', targetRoomId: 'elf_altar', description: '一道柔和的銀光從東方透出' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: ' * ',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '螢火蟲突然熄滅的區域通常意味著掠食者正潛伏在附近。',
      treasure: '苔蘚中包裹著一枚精靈族的胸針，螢光映照下若隱若現。',
      spirit: '這些螢火蟲並非普通昆蟲——牠們是精靈族魔法實驗的殘留，體內流淌著魔力。',
    },
  },

  deep_poison_swamp: {
    id: 'deep_poison_swamp',
    name: '毒霧沼澤深處',
    zone: 'dark_forest',
    description:
      '沼澤在此處變得更加深邃，濃厚的紫色毒霧從水面蒸騰而起，遮蔽了一切視線。' +
      '枯朽的樹幹如骸骨般從泥漿中伸出，上面覆蓋著發光的毒蘑菇。' +
      '四處傳來此起彼伏的咕嚕聲和蛙鳴——這裡的一切都帶著毒性。',
    exits: [
      { direction: 'north', targetRoomId: 'firefly_trail', description: '退回螢火蟲小徑' },
      { direction: 'east', targetRoomId: 'mushroom_swamp', description: '沼澤邊緣連接著蘑菇沼澤' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[!]',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '毒霧最濃的地方棲息著巨型毒蛙，牠們的舌頭射程比你想像的更遠。',
      treasure: '枯樹根部的泥漿中有一顆散發幽光的毒液結晶，是稀有的煉金材料。',
      spirit: '這片沼澤曾是一座花園，被某次魔法災難扭曲成了這副模樣。花園主人的悲嘆仍迴盪在毒霧中。',
    },
  },

  elf_altar: {
    id: 'elf_altar',
    name: '精靈祭壇',
    zone: 'dark_forest',
    description:
      '古老的白色石柱圍成一個半圓，中央的祭壇上刻著精靈族的月亮紋章。' +
      '儘管周圍的森林已被暗影侵蝕，這裡卻保持著一片寧靜的銀白色光輝。' +
      '祭壇上的水晶球緩緩旋轉，散發出溫柔的治癒氣息。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '回到螢火蟲小徑' },
      { direction: 'south', targetRoomId: 'withered_forest', description: '祭壇背後的森林一片枯萎' },
    ],
    monsters: [
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[E]',
    mapX: 2,
    mapY: 7,
    guardianHints: {
      creature: '祭壇的守護樹精對靠近的暗影生物充滿敵意，但對友善的訪客並不主動攻擊。',
      treasure: '水晶球中封存著精靈女王的一縷記憶，觸碰它也許能習得遠古的精靈魔法。',
      spirit: '祭壇的銀光是精靈族最後的祭司以生命為代價維持的結界，她的靈魂仍在守護此地。',
    },
  },

  withered_forest: {
    id: 'withered_forest',
    name: '枯萎之林',
    zone: 'dark_forest',
    description:
      '所有的樹木都失去了生機，灰白色的枝幹扭曲成詭異的形狀，如同無數伸出的手臂。' +
      '地面覆蓋著厚厚的灰燼，踩上去會揚起令人窒息的塵埃。' +
      '枯木之間偶爾傳來沉重的腳步聲——暗黑樹人在這裡遊蕩。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_altar', description: '北方透出一線銀光' },
      { direction: 'south', targetRoomId: 'dark_treehollow', description: '最大的枯木底部有個漆黑的洞穴' },
      { direction: 'east', targetRoomId: 'deep_forest', description: '枯林邊緣連接著森林深處' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[X]',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '看似靜止的枯木中有些是暗黑樹人——注意觀察樹幹上是否有脈動的紫色紋路。',
      treasure: '灰燼之下埋著被暗影力量結晶化的樹心，是鍛造暗屬性武器的關鍵材料。',
      spirit: '這片枯林曾是森林最茂盛的區域，一場暗影詛咒讓所有生命枯萎。解除詛咒的線索就在樹人身上。',
    },
  },

  dark_treehollow: {
    id: 'dark_treehollow',
    name: '黑暗樹洞',
    zone: 'dark_forest',
    description:
      '一棵直徑超過十公尺的千年巨木已經完全枯死，中空的樹幹形成了一座天然的暗室。' +
      '樹洞內壁上覆蓋著發出幽紫色光芒的菌類，空氣中充斥著腐朽與魔力交織的氣味。' +
      '樹洞深處似乎通往更深層的空間，黑暗中有什麼東西在低吟。',
    exits: [
      { direction: 'north', targetRoomId: 'withered_forest', description: '爬出樹洞回到枯萎之林' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[D]',
    mapX: 2,
    mapY: 9,
    guardianHints: {
      creature: '樹洞最深處的黑暗中藏著蝙蝠群的巢穴，驚動牠們會引發恐怖的蝙蝠潮。',
      treasure: '內壁的菌類下有精靈族的封印紋章，破解它可能開啟隱藏的地下通道。',
      spirit: '這棵巨木是森林最初的守護樹，它的死亡標誌著暗影力量的勝利。但在枯朽的核心中，最後一絲生命之力仍在頑強地跳動。',
    },
  },

  // ─── Area 7: 水晶洞窟擴充 (Lv 18-28) ────────────────────

  amethyst_corridor: {
    id: 'amethyst_corridor',
    name: '紫水晶走廊',
    zone: 'crystal_cave',
    description:
      '洞窟的這一段完全由紫水晶構成，六角形的晶柱從地面和天頂同時生長，' +
      '在中央匯聚成一道壯觀的水晶拱門。淡紫色的光芒瀰漫在空氣中，' +
      '令人感到一陣莫名的眩暈——紫水晶的魔力正在影響意識。',
    exits: [
      { direction: 'east', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
      { direction: 'south', targetRoomId: 'jade_pool', description: '走廊盡頭傳來清脆的水滴聲' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[A]',
    mapX: 0,
    mapY: 8,
    guardianHints: {
      creature: '水晶魔像平時偽裝成普通的晶柱——注意那些形狀過於規則的水晶。',
      treasure: '紫水晶拱門的頂端鑲嵌著一顆品質極高的魔力水晶，取下它需要特殊工具。',
      spirit: '紫水晶的眩暈效果並非天然——這是地底種族設置的防衛機制，阻止入侵者深入。',
    },
  },

  jade_pool: {
    id: 'jade_pool',
    name: '翡翠池',
    zone: 'crystal_cave',
    description:
      '一汪碧綠如翡翠的池水佔據了洞窟的中央，水面如鏡面般平靜，倒映著四周的水晶光芒。' +
      '池底鋪滿了翠綠色的水晶碎片，讓池水呈現出寶石般的色澤。' +
      '空氣中瀰漫著清新的薄荷般香氣，據說翡翠池的水有治癒的功效。',
    exits: [
      { direction: 'north', targetRoomId: 'amethyst_corridor', description: '回到紫水晶走廊' },
      { direction: 'east', targetRoomId: 'diamond_chamber', description: '池畔的裂縫透出刺眼的白光' },
      { direction: 'south', targetRoomId: 'underground_waterfall', description: '池水流向南方，傳來瀑布的轟鳴' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[J]',
    mapX: 0,
    mapY: 9,
    guardianHints: {
      creature: '池水中偶爾泛起漣漪——水晶蜥蜴會潛入翡翠池中伏擊靠近喝水的獵物。',
      treasure: '池底中央有一顆巨大的翡翠原石，據說是地底種族的皇族象徵。',
      spirit: '翡翠池的治癒之力來自地脈深處的生命能量，這裡是大地之心的脈搏之一。',
    },
  },

  diamond_chamber: {
    id: 'diamond_chamber',
    name: '鑽石密室',
    zone: 'crystal_cave',
    description:
      '穿過狹窄的裂縫後，眼前是一間不大但極為壯觀的密室。四壁、天頂和地面都嵌滿了' +
      '閃耀著七彩光芒的鑽石結晶，光線在無數切面之間反覆折射，如同置身於一顆巨大的寶石內部。' +
      '密室中央的石台上放著一本被水晶封印的古書。',
    exits: [
      { direction: 'west', targetRoomId: 'jade_pool', description: '從裂縫回到翡翠池' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[*]',
    mapX: 1,
    mapY: 9,
    guardianHints: {
      creature: '密室中的水晶魔像是古代工匠製造的永恆守衛——牠們不會疲倦，也不會憐憫。',
      treasure: '石台上被水晶封印的古書記載著地底種族的核心魔法，破解封印需要四種元素水晶。',
      spirit: '密室的鑽石結晶記錄著地底種族最後的歲月——每一面切面都是一段歷史的片段。',
    },
  },

  underground_waterfall: {
    id: 'underground_waterfall',
    name: '地底瀑布',
    zone: 'crystal_cave',
    description:
      '翡翠池的水流在此處傾瀉而下，形成一道高達三十公尺的地底瀑布。' +
      '瀑布的水幕在水晶光芒的映照下如同流動的寶石，轟隆的水聲在洞窟中迴盪。' +
      '瀑布底部的深潭中隱約可見巨大的影子在移動。',
    exits: [
      { direction: 'north', targetRoomId: 'jade_pool', description: '沿著水流逆行回到翡翠池' },
      { direction: 'south', targetRoomId: 'ancient_altar', description: '瀑布後方似乎有一條隱蔽的通道' },
      { direction: 'west', targetRoomId: 'underground_river', description: '深潭連接著地下河' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 85 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
    ],
    groundItems: [
      { itemId: 'crystal_core', description: '瀑布旁的水晶散發微光' },
    ],
    mapSymbol: '[V]',
    mapX: 0,
    mapY: 10,
    guardianHints: {
      creature: '深潭中的巨影並非魚類——那是一隻從未被記載過的水棲洞窟生物。',
      treasure: '瀑布的水幕後方有一個被水流沖刷出的凹洞，裡面堆積著被沖下來的水晶和礦石。',
      spirit: '瀑布的轟鳴聲中隱藏著一段旋律——那是地底種族用水流演奏的永恆安魂曲。',
    },
  },

  ancient_altar: {
    id: 'ancient_altar',
    name: '古代祭壇',
    zone: 'crystal_cave',
    description:
      '瀑布後方的密道通往一座被遺忘了千年的祭壇。巨大的石柱排列成星形，' +
      '中央的祭台上刻著複雜的符文陣，至今仍散發著幽藍色的能量脈動。' +
      '空氣中充滿了純粹的魔力，呼吸都能感受到力量在體內流轉。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_waterfall', description: '穿過密道回到地底瀑布' },
      { direction: 'west', targetRoomId: 'mine_depths', description: '祭壇側面有通往礦脈深處的階梯' },
    ],
    monsters: [
      { monsterId: 'spectral_knight', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 70 },
    ],
    groundItems: [
      { itemId: 'ancient_fragment', description: '祭壇上放著一塊古代碎片' },
    ],
    mapSymbol: '[#]',
    mapX: 0,
    mapY: 11,
    guardianHints: {
      creature: '祭壇的守護者是一位幽靈騎士——他曾是地底王國的騎士團長，死後仍忠誠地守護著這裡。',
      treasure: '符文陣的核心處封印著地底種族的王權之器，啟動它需要獻上四種元素的精華。',
      spirit: '祭壇記載著地底種族滅亡的真相——他們並非被外敵消滅，而是為了封印某個來自深淵的存在而犧牲了自己。',
    },
  },

  // ─── Area 8: 湖畔城鎮擴充 (Non-combat) ──────────────────

  tavern: {
    id: 'tavern',
    name: '酒館',
    zone: 'lakeside_town',
    description:
      '推開吱呀作響的木門，撲面而來的是啤酒花和烤肉的香氣。' +
      '酒館內燈火通明，冒險者們圍坐在長桌旁大聲談笑，觥籌交錯。' +
      '角落裡的吟遊詩人正撥動琴弦，唱著一首關於龍族寶藏的古老歌謠。',
    exits: [
      { direction: 'south', targetRoomId: 'market_street', description: '回到商業街' },
      { direction: 'north', targetRoomId: 'auction_house', description: '酒館後門通往拍賣場' },
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
    description:
      '一座氣派的石造建築，穹頂上繪著交易之神的壁畫。大廳中央是一個圓形的拍賣台，' +
      '周圍環繞著階梯式的觀眾席。牆壁上的展示櫃裡陳列著等待拍賣的珍稀物品。' +
      '拍賣官清亮的嗓音在大廳中迴盪，競價聲此起彼落。',
    exits: [
      { direction: 'west', targetRoomId: 'town_plaza', description: '正門通往城鎮廣場' },
      { direction: 'south', targetRoomId: 'tavern', description: '從後門回到酒館' },
    ],
    monsters: [],
    mapSymbol: '[$]',
    mapX: 5,
    mapY: 5,
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
    description:
      '一座宏偉的建築，大門上方懸掛著巨大的公會徽章——交叉的劍與月桂冠。' +
      '大廳內陳列著歷屆公會精英的畫像和戰績，牆壁上的魔法公告板即時更新著各公會的排名。' +
      '中央的圓桌旁坐著幾位公會長老，正在討論即將到來的公會戰。',
    exits: [
      { direction: 'east', targetRoomId: 'town_library', description: '走廊連接著城鎮圖書館' },
      { direction: 'west', targetRoomId: 'class_change_hall', description: '走廊通往轉職大廳' },
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
    description:
      '高聳的書架從地板延伸至天頂，數以萬計的書籍和卷軸整齊排列。' +
      '魔法燈火在每排書架上方懸浮，投下柔和的暖光。空氣中瀰漫著古老羊皮紙的氣息。' +
      '一位銀髮的老學者坐在閱讀區，正透過單片眼鏡研究一份泛黃的地圖。',
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
    description:
      '陰暗潮濕的地下通道連接著一排排鐵欄牢房，火把在牆壁上搖曳，將影子拉得又長又詭異。' +
      '多數牢房已經空置，但角落裡偶爾傳來鐵鏈的哐啷聲。' +
      '獄卒在通道中來回巡邏，手中的鑰匙串發出清脆的碰撞聲。',
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

  // ─── Area 9: 魔族領地 (Lv 30-40) ──────────────────────────

  demon_border: {
    id: 'demon_border',
    name: '魔族邊境',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '冰封雪原的盡頭，大地突然斷裂成一道巨大的裂谷。裂谷對面是一片焦黑的荒原，' +
      '空氣中瀰漫著硫磺的刺鼻氣味，遠方的天空被永恆的紅色火焰映照。' +
      '一座搖搖欲墜的石橋橫跨裂谷，這是通往魔族領地的唯一通路。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_throne', description: '退回冰封王座' },
      { direction: 'north', targetRoomId: 'scorched_plains', description: '踏上焦黑的荒原' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 60 },
    ],
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
    description:
      '一望無際的焦黑平原，大地龜裂如蛛網，裂縫中不時竄出赤紅色的火焰。' +
      '枯萎的樹木如同黑色的骨架矗立其間，天空永遠籠罩在灰紅色的煙塵之下。' +
      '遠處傳來低沉的戰鼓聲，那是魔族巡邏隊的信號。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_border', description: '退回邊境裂谷' },
      { direction: 'north', targetRoomId: 'demon_village', description: '隱約可見魔族的營帳' },
      { direction: 'east', targetRoomId: 'blood_river', description: '一條殷紅的河流在東方流淌' },
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
    description:
      '由黑色岩石和獸骨搭建的簡陋村落，低矮的帳篷和骨架棚屋散佈其間。' +
      '魔族士兵在村中巡邏，鍛造爐裡的火焰徹夜不熄，空氣中充斥著金屬和鮮血的氣味。' +
      '村落中央的圖騰柱上掛滿了冒險者的裝備殘骸，作為對入侵者的警告。',
    exits: [
      { direction: 'south', targetRoomId: 'scorched_plains', description: '回到焦土平原' },
      { direction: 'north', targetRoomId: 'dark_fortress_gate', description: '村落北方矗立著黑暗要塞' },
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
    description:
      '一條殷紅如血的河流在焦土中蜿蜒流淌，河面冒著騰騰的熱氣。' +
      '河水並非真正的血液，而是被地底深處的魔力礦脈污染的熔岩水。' +
      '河岸邊散落著被腐蝕的骨骸和扭曲的金屬殘片。',
    exits: [
      { direction: 'west', targetRoomId: 'scorched_plains', description: '沿河岸回到焦土平原' },
      { direction: 'south', targetRoomId: 'dark_fortress_gate', description: '河流上游通往要塞' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
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
    description:
      '高聳入雲的黑色城牆擋在前方，由巨大的暗黑岩石砌成，表面刻滿了魔族的詛咒符文。' +
      '城門由兩扇十公尺高的鑄鐵大門構成，門上釘著巨大的惡魔頭顱裝飾。' +
      '門前的廣場上，魔族將軍正在操練一隊魔族士兵。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_village', description: '退回魔族村落' },
      { direction: 'north', targetRoomId: 'blood_river', description: '沿著血河撤退' },
      { direction: 'east', targetRoomId: 'torture_chamber', description: '穿過城門進入要塞', locked: true, keyItemId: 'silver_key' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 90 },
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
    description:
      '要塞內部陰暗潮濕的石室，牆壁上掛滿了生鏽的鐵鏈和刑具。' +
      '空氣中瀰漫著令人作嘔的血腥氣味，角落裡堆放著破碎的籠子和骨骸。' +
      '偶爾能聽到從更深處傳來的淒厲慘叫聲。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '退回要塞大門' },
      { direction: 'north', targetRoomId: 'demon_barracks', description: '通道通往魔族兵營' },
      { direction: 'east', targetRoomId: 'summoning_circle', description: '暗紅的光芒從東方透出' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 50 },
    ],
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
    description:
      '寬闊的地下營房中排列著數百張由獸骨和獸皮製成的簡陋床鋪。' +
      '武器架上陳列著各式各樣的魔族武器，牆壁上掛著作戰地圖和戰旗。' +
      '空氣中充斥著魔族特有的刺鼻體味，偶爾能聽到士兵們的粗獷笑聲。',
    exits: [
      { direction: 'south', targetRoomId: 'torture_chamber', description: '回到拷問室' },
      { direction: 'west', targetRoomId: 'summoning_circle', description: '兵營深處有一道暗紅的門' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
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
    description:
      '一間圓形的巨大石室，地面刻著複雜的魔法陣，暗紅色的能量脈動從符文中湧出。' +
      '空氣中充滿了灼熱的魔力，呼吸都變得困難。四根黑色石柱上燃燒著不滅的鬼火，' +
      '將整個空間映照成地獄般的景象。這裡是魔王從深淵召喚惡魔的場所。',
    exits: [
      { direction: 'west', targetRoomId: 'torture_chamber', description: '退回拷問室' },
      { direction: 'east', targetRoomId: 'demon_barracks', description: '退回兵營' },
      { direction: 'north', targetRoomId: 'demon_throne', description: '召喚陣背後是魔王殿的入口' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 90 },
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
    description:
      '黑暗要塞的最深處，一座由無數骨骸堆砌而成的王座矗立在大殿中央。' +
      '魔王端坐其上，渾身散發著令人窒息的威壓。殿堂四壁鑲嵌著燃燒的魔力結晶，' +
      '映照出魔王那雙如烈焰般的瞳孔。這裡是魔族領地的心臟，也是最危險的戰場。',
    exits: [
      { direction: 'south', targetRoomId: 'summoning_circle', description: '退回召喚陣' },
      { direction: 'north', targetRoomId: 'dragon_valley_entrance', description: '魔王殿背後的秘密通道通向一片未知的山谷' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 2, respawnSeconds: 90 },
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
    description:
      '一間由魔法結界守護的石室，四壁鑲嵌著發光的紅色寶石。' +
      '室內堆放著從各地掠奪來的金幣、寶石和魔法物品，散發著誘人的光芒。' +
      '但寶庫中設有多重陷阱，貿然觸碰任何東西都可能觸發毀滅性的詛咒。',
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

  // ─── Area 10: 龍谷 (Lv 40-50) ─────────────────────────────

  dragon_valley_entrance: {
    id: 'dragon_valley_entrance',
    name: '龍谷入口',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '穿過魔王殿背後的秘密通道，眼前豁然開朗。兩座巍峨的山峰如同巨龍的翅膀展開，' +
      '中間的峽谷被雲霧繚繞，空氣中瀰漫著古老而神秘的氣息。' +
      '入口處的岩壁上刻著龍族的古老文字，警告著所有膽敢踏入的生命。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_throne', description: '退回魔王殿' },
      { direction: 'north', targetRoomId: 'dragon_nest_path', description: '踏入雲霧繚繞的峽谷' },
      { direction: 'east', targetRoomId: 'dragon_bone_field', description: '東方散落著巨大的白骨' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 75 },
    ],
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
    description:
      '一條蜿蜒在峭壁之間的狹窄小徑，兩側的岩壁上佈滿了龍爪留下的深深抓痕。' +
      '不時有巨大的影子掠過頭頂——那是在天空中盤旋的飛龍。' +
      '小徑上散落著巨大的鱗片，每一片都比人的手掌還大。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_valley_entrance', description: '退回龍谷入口' },
      { direction: 'north', targetRoomId: 'wyvern_cliff', description: '小徑通向一處懸崖' },
      { direction: 'west', targetRoomId: 'dragon_egg_chamber', description: '岩壁中有一個隱蔽的洞口' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
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
    description:
      '一處突出於山壁的巨大平台，三面臨崖，下方是萬丈深淵。' +
      '強勁的山風在崖頂呼嘯，雲層就在腳下翻湧。數隻飛龍在崖邊的巢穴中棲息，' +
      '牠們銳利的目光警惕地注視著每一個靠近的生物。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_nest_path', description: '退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'sky_bridge', description: '崖邊有一座雲中石橋' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 3, respawnSeconds: 60 },
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
    description:
      '一片被巨大龍骨散佈的荒野，有些骨骸的肋骨如同拱門般高聳，頭骨比房屋還要巨大。' +
      '這裡是遠古巨龍的安息之地，空氣中殘留著龍族亡魂的低語。' +
      '腐朽的骨骼中滲出暗綠色的毒液——古龍蛇在骨海中遊蕩。',
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
    description:
      '一個巨大的天然洞穴，穹頂高達數十公尺，足以容納一條成年巨龍。' +
      '洞壁上覆蓋著閃爍的龍鱗結晶，地面散佈著碎裂的蛋殼和龍牙。' +
      '洞穴深處傳來沉重的呼吸聲，一股令人顫慄的古老力量在此沉睡。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_bone_field', description: '退回龍骨原野' },
      { direction: 'east', targetRoomId: 'dragon_hoard', description: '洞穴側面有一條通道', locked: true, keyItemId: 'gold_key' },
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
    description:
      '令人窒息的財富堆積如山——金幣、寶石、魔法武器、王冠和聖物混雜在一起，' +
      '形成一座閃閃發光的小丘。這是龍族數千年來從各個王國掠奪並收藏的寶藏。' +
      '然而，每一枚金幣都被龍的魔力所標記，拿走任何東西都會被追蹤。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_dragon_lair', description: '回到古龍巢穴' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 120 },
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
    description:
      '一座由雲霧凝結而成的半透明石橋，橫跨在兩座山峰之間。' +
      '橋下是萬丈深淵，橋面上不時有強風呼嘯而過。' +
      '遠方的山巔上閃爍著風暴的雷光，那是龍谷最高峰——風暴之巔。',
    exits: [
      { direction: 'south', targetRoomId: 'wyvern_cliff', description: '退回飛龍崖' },
      { direction: 'north', targetRoomId: 'storm_peak', description: '穿越風暴前往山巔' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 120 },
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
    description:
      '龍谷最高的山峰，終年被雷暴雲層籠罩。閃電不斷在雲間穿梭，' +
      '雷鳴聲震耳欲聾。山頂的平台上矗立著一座古老的龍族祭壇，' +
      '祭壇上的雷球不停地旋轉閃爍，散發著令人敬畏的力量。',
    exits: [
      { direction: 'south', targetRoomId: 'sky_bridge', description: '退回天空之橋' },
      { direction: 'north', targetRoomId: 'elder_dragon_sanctum', description: '祭壇背後有一道通往聖殿的門' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 100 },
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

  elder_dragon_sanctum: {
    id: 'elder_dragon_sanctum',
    name: '古龍聖殿',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '隱藏在風暴之巔背後的神聖殿堂，由巨大的龍骨和水晶構成。' +
      '殿堂中央盤踞著一條體型驚人的古龍，牠的鱗片如同星空般閃耀。' +
      '空氣中充滿了遠古的威壓，連呼吸都變得沉重。這是龍谷最強大的存在。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_peak', description: '退回風暴之巔' },
      { direction: 'down', targetRoomId: 'abyss_entrance', description: '聖殿地板上有一道通往深淵的裂縫' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[聖]',
    mapX: 3,
    mapY: 29,
    guardianHints: {
      creature: '古龍擁有預知能力，普通的攻擊模式會被輕易看穿——只有隨機的戰術才能出其不意。',
      treasure: '古龍的牙齒蘊含著數千年的龍之力量，是鑄造神器級武器的終極素材。',
      spirit: '古龍是龍族的始祖之一——牠記得世界創生時的模樣，也預見了終焉的到來。',
    },
  },

  dragon_egg_chamber: {
    id: 'dragon_egg_chamber',
    name: '龍蛋室',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '隱蔽在岩壁深處的溫暖洞穴，地熱從地底湧出，維持著恆定的溫度。' +
      '數顆巨大的龍蛋安靜地排列在柔軟的火山灰床上，蛋殼上的紋路隱隱發光。' +
      '這是龍族孕育下一代的聖地，任何威脅都會招致所有龍族的瘋狂報復。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_nest_path', description: '小心地退回龍巢小徑' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[蛋]',
    mapX: 2,
    mapY: 25,
    guardianHints: {
      creature: '在龍蛋室中戰鬥要格外小心——傷害龍蛋會引來整個龍谷的龍族報復。',
      treasure: '已經不會孵化的化石龍蛋是極為珍貴的收藏品和煉金材料。',
      spirit: '每一顆龍蛋中都沉睡著一個嶄新的龍族靈魂——牠們的夢境構成了龍谷的魔力場。',
    },
  },

  // ─── Area 11: 深淵裂隙 (Lv 50-55) ────────────────────────

  abyss_entrance: {
    id: 'abyss_entrance',
    name: '深淵入口',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '古龍聖殿地板上的裂縫延伸成一道深不見底的階梯，向下通往一片紫黑色的虛空。' +
      '空間在此處開始扭曲，牆壁上的岩石呈現出不可能的幾何形狀。' +
      '耳邊傳來低沉的嗡鳴聲，那是維度壁壘被侵蝕的聲音。',
    exits: [
      { direction: 'up', targetRoomId: 'elder_dragon_sanctum', description: '回到古龍聖殿' },
      { direction: 'north', targetRoomId: 'void_corridor', description: '踏入扭曲的虛空' },
      { direction: 'east', targetRoomId: 'nightmare_garden', description: '一條小徑通往奇異的花園' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[淵]',
    mapX: 3,
    mapY: 30,
    guardianHints: {
      creature: '虛空行者會瞬間移動到你身後——保持背靠牆壁可以限制牠的移動。',
      treasure: '裂縫邊緣凝結著時空碎片，是製造維度魔法道具的核心材料。',
      spirit: '這道裂縫是遠古封印被侵蝕的結果——深淵的力量正在緩慢地滲透到現實世界。',
    },
  },

  void_corridor: {
    id: 'void_corridor',
    name: '虛空迴廊',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一條漂浮在虛空中的石質走廊，兩側是無盡的紫黑色虛無。' +
      '走廊的地板時而凝固時而透明，能透過腳下看到星辰般閃爍的深淵。' +
      '偶爾有扭曲的光芒從虛空中射出，照亮走廊上蠕動的暗影生物。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_entrance', description: '退回深淵入口' },
      { direction: 'north', targetRoomId: 'shadow_realm', description: '走廊延伸入更深的黑暗' },
      { direction: 'east', targetRoomId: 'time_distortion', description: '空間在此分裂出另一條路' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[廊]',
    mapX: 3,
    mapY: 31,
    guardianHints: {
      creature: '虛空中的暗影生物會從走廊邊緣湧出——不要站在邊緣附近。',
      treasure: '虛空中偶爾會飄過來自其他維度的物品——有些可能極為珍貴。',
      spirit: '走廊是古代術士建造的維度通道，原本是連接不同世界的橋樑。',
    },
  },

  shadow_realm: {
    id: 'shadow_realm',
    name: '暗影領域',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一片被純粹暗影能量籠罩的空間，所有光源在這裡都會被吞噬。' +
      '只有暗影生物的眼睛在黑暗中如同幽靈般閃爍。地面是一層流動的暗影，' +
      '每一步都會激起漣漪般的黑色波紋。在這裡，連自己的身體都開始變得模糊。',
    exits: [
      { direction: 'south', targetRoomId: 'void_corridor', description: '退回虛空迴廊' },
      { direction: 'north', targetRoomId: 'chaos_bridge', description: '黑暗中有一道混沌的光芒' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[影]',
    mapX: 3,
    mapY: 32,
    guardianHints: {
      creature: '暗影惡魔在完全黑暗中幾乎無敵——使用光明魔法或照明道具可以削弱牠們。',
      treasure: '暗影領域的核心處有一顆凝聚了純粹黑暗的暗影之心，是暗屬性魔法的終極素材。',
      spirit: '暗影領域是深淵滲透到現實的第一個據點——如果不阻止擴張，整個世界都會被吞噬。',
    },
  },

  chaos_bridge: {
    id: 'chaos_bridge',
    name: '混沌之橋',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一座由不斷變換形態的混沌物質構成的橋樑，橋面時而是石頭，時而是水晶，時而是虛無。' +
      '橋的兩側翻湧著不同顏色的能量——火、冰、雷、光、暗交替閃爍。' +
      '踏上橋面的瞬間，現實的法則就不再適用。',
    exits: [
      { direction: 'south', targetRoomId: 'shadow_realm', description: '退回暗影領域' },
      { direction: 'north', targetRoomId: 'abyss_core', description: '橋的盡頭是深淵的核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[混]',
    mapX: 3,
    mapY: 33,
    guardianHints: {
      creature: '混沌之子的屬性會隨機變化——觀察牠的顏色來判斷當前的弱點屬性。',
      treasure: '混沌物質會偶爾凝結成穩定的形態——如果能收集到就是無價之寶。',
      spirit: '混沌之橋是兩個維度碰撞的產物——它的存在本身就是一個不應該發生的奇蹟。',
    },
  },

  nightmare_garden: {
    id: 'nightmare_garden',
    name: '噩夢花園',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一座詭異的花園漂浮在虛空之中，花朵是由凝固的噩夢結晶而成。' +
      '每一朵花都在無聲地綻放與凋零，散發著令人昏沉的幽香。' +
      '花叢中偶爾能看到扭曲的人影——那是被噩夢吞噬的冒險者殘留的意識。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_entrance', description: '回到深淵入口' },
      { direction: 'north', targetRoomId: 'time_distortion', description: '花園邊緣的空間在扭曲' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[夢]',
    mapX: 4,
    mapY: 30,
    guardianHints: {
      creature: '噩夢體會入侵你的精神——堅定的意志和抗精神控制的道具是必需品。',
      treasure: '噩夢結晶花雖然危險，但是製作精神魔法道具的頂級材料。',
      spirit: '花園中的人影是真實的冒險者——找到方法喚醒他們也許能獲得盟友。',
    },
  },

  abyss_core: {
    id: 'abyss_core',
    name: '深淵核心',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '裂隙的最深處，一顆巨大的暗紫色球體懸浮在虛空中央，不斷脈動著。' +
      '這是深淵的核心——所有混沌和暗影力量的源頭。' +
      '核心周圍的空間已經完全崩壞，重力、時間、光線都失去了意義。',
    exits: [
      { direction: 'south', targetRoomId: 'chaos_bridge', description: '退回混沌之橋' },
      { direction: 'east', targetRoomId: 'abyss_lord_chamber', description: '核心背後是深淵領主的居所' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[核]',
    mapX: 3,
    mapY: 34,
    guardianHints: {
      creature: '核心的脈動會週期性地增強所有深淵生物——在脈動間隙攻擊效率最高。',
      treasure: '如果能從核心中取出一塊碎片，就能獲得操控維度的力量。',
      spirit: '深淵核心是另一個維度試圖入侵此世界的錨點——摧毀它可以暫時關閉裂隙。',
    },
  },

  time_distortion: {
    id: 'time_distortion',
    name: '時空扭曲區',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '空間在此處嚴重扭曲，過去、現在和未來的景象交疊在一起。' +
      '你能同時看到這個地方千年前的繁華和千年後的廢墟。' +
      '時間之流在此分岔又匯合，一步之差可能跨越百年。',
    exits: [
      { direction: 'west', targetRoomId: 'void_corridor', description: '回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'nightmare_garden', description: '回到噩夢花園' },
      { direction: 'north', targetRoomId: 'abyss_lord_chamber', description: '時空的盡頭指向領主之間' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[時]',
    mapX: 4,
    mapY: 31,
    guardianHints: {
      creature: '時空扭曲中的敵人可能會出現在不同的時間點——注意「已經消滅」的敵人再次出現。',
      treasure: '時空碎片中封存著其他時間線的珍貴物品，但取出它們需要極高的魔法造詣。',
      spirit: '時空扭曲是深淵力量對現實法則的最大破壞——修復這裡就能穩定整個裂隙。',
    },
  },

  abyss_lord_chamber: {
    id: 'abyss_lord_chamber',
    name: '深淵領主之間',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一個懸浮在虛空中心的巨大平台，由凝固的混沌能量構成。' +
      '平台中央矗立著一座由暗影和虛空編織而成的王座，深淵領主端坐其上，' +
      '多隻眼睛同時注視著來訪者。牠的存在本身就在扭曲周圍的現實，空間在牠身邊不停裂開又癒合。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_core', description: '退回深淵核心' },
      { direction: 'south', targetRoomId: 'time_distortion', description: '退回時空扭曲區' },
      { direction: 'up', targetRoomId: 'celestial_gate', description: '擊敗深淵領主後，一道通往天界的光柱出現' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[主]',
    mapX: 4,
    mapY: 34,
    guardianHints: {
      creature: '深淵領主能同時使用多種屬性攻擊——切換抗性裝備是生存的關鍵。',
      treasure: '深淵領主的權杖中封存著操控時空的力量——這是傳說中的深淵之眼。',
      spirit: '深淵領主並非天生的怪物——牠曾是一位試圖征服維度的大魔導士，被自己的力量吞噬後墮落為此。',
    },
  },

  // ─── Area 12: 天界遺跡 (Lv 55-60) ────────────────────────

  celestial_gate: {
    id: 'celestial_gate',
    name: '天界之門',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一道由純白光芒構成的巨大拱門矗立在虛空之上，門框上刻著失傳已久的神聖文字。' +
      '穿過光門的瞬間，世界從混沌的深淵轉變為金色的光輝。' +
      '腳下是由凝固的星光構成的地面，遠方的天際線上浮現著壯麗的天界廢墟。',
    exits: [
      { direction: 'down', targetRoomId: 'abyss_lord_chamber', description: '回到深淵領主之間' },
      { direction: 'north', targetRoomId: 'starlight_path', description: '沿著星光之路前進' },
      { direction: 'east', targetRoomId: 'divine_library', description: '光門旁有一座宏偉的建築' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 35,
    guardianHints: {
      creature: '墮天使會同時使用光明和黑暗魔法——純粹的單屬性防禦在這裡不夠用。',
      treasure: '神聖文字中隱藏著開啟天界寶藏的密碼——但需要極高的智力才能解讀。',
      spirit: '天界之門是諸神離開凡間時留下的最後通道——通過它就意味著踏入了神的領域。',
    },
  },

  starlight_path: {
    id: 'starlight_path',
    name: '星光走廊',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一條由凝固的星辰碎片鋪成的走廊，每一步都踩在閃爍的星光之上。' +
      '走廊兩側是破碎的天界建築殘骸，曾經宏偉的殿堂如今只剩下斷壁殘垣。' +
      '但即便是廢墟，這裡的每一塊石頭都散發著令人敬畏的神聖之力。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_gate', description: '退回天界之門' },
      { direction: 'north', targetRoomId: 'angel_garden', description: '前方出現一片翠綠的花園' },
      { direction: 'east', targetRoomId: 'judgment_hall', description: '走廊盡頭是一座莊嚴的大廳' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[星]',
    mapX: 3,
    mapY: 36,
    guardianHints: {
      creature: '天界守衛的護盾幾乎堅不可摧——但它們需要消耗魔力維持，持久戰可以耗盡它們。',
      treasure: '星辰碎片本身就是極為珍貴的魔法材料，但強行採集會觸怒守衛。',
      spirit: '天界的廢墟記載著諸神之戰的歷史——每一面斷牆都是一個章節。',
    },
  },

  angel_garden: {
    id: 'angel_garden',
    name: '天使花園',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一片在天界廢墟中奇蹟般存活的花園，金色和白色的花朵永不凋零地綻放。' +
      '花園中央的噴泉仍在流淌著發光的聖水，空氣中充滿了治癒和安寧的氣息。' +
      '幾位熾天使在花園中巡遊，牠們的翅膀散發出溫暖的金色光芒。',
    exits: [
      { direction: 'south', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'north', targetRoomId: 'celestial_throne_room', description: '花園盡頭是天界王座' },
      { direction: 'west', targetRoomId: 'eternal_sanctuary', description: '花園側面有一座寧靜的聖所' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[花]',
    mapX: 3,
    mapY: 37,
    guardianHints: {
      creature: '熾天使能治癒同伴——必須優先擊倒牠們，否則戰鬥會無限延長。',
      treasure: '聖水噴泉有恢復全部HP和MP的效果——但在花園中戰鬥會中斷治療。',
      spirit: '花園是諸神為凡人留下的最後禮物——只要它還存在，天界就不會完全消亡。',
    },
  },

  divine_library: {
    id: 'divine_library',
    name: '神之圖書館',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座超越凡人想像的巨大圖書館，書架延伸到視線無法觸及的高度。' +
      '書冊由光線構成，翻開後會直接將知識灌入閱讀者的意識中。' +
      '圖書館中漫步著由神造兵器守護的自動機械，確保知識不被褻瀆。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_gate', description: '回到天界之門' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[書]',
    mapX: 4,
    mapY: 35,
    guardianHints: {
      creature: '神造兵器有極高的物理防禦——使用魔法攻擊或尋找它們的核心弱點更有效。',
      treasure: '某些光之書冊中記載著失傳的神聖技能——閱讀它們可能習得強大的新能力。',
      spirit: '圖書館記載著從創世到末日的所有知識——包括戰勝戰神的方法。',
    },
  },

  judgment_hall: {
    id: 'judgment_hall',
    name: '審判大廳',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座莊嚴肅穆的大廳，穹頂上繪著諸神審判的壁畫。' +
      '大廳中央的天秤仍在緩慢擺動，衡量著每一個進入者的善惡。' +
      '兩排由光線構成的陪審席上坐著沉默的天使虛影，注視著到來的冒險者。',
    exits: [
      { direction: 'west', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '大廳盡頭通往天界王座' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[判]',
    mapX: 4,
    mapY: 36,
    guardianHints: {
      creature: '天秤會根據戰鬥方式影響你的狀態——正大光明的戰鬥會獲得增益，卑鄙手段會遭受懲罰。',
      treasure: '天秤的底座中封存著審判之劍的碎片——集齊所有碎片可以重鑄神器。',
      spirit: '審判大廳曾是諸神裁決凡人命運的場所——在這裡做出的選擇會影響最終戰鬥。',
    },
  },

  celestial_throne_room: {
    id: 'celestial_throne_room',
    name: '天界王座',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '天界最宏偉的殿堂，穹頂由純淨的光線構成，無數星辰在其中旋轉。' +
      '一座由永恆白金鑄造的王座矗立在殿堂最高處，王座上空無一人，' +
      '但王座本身散發的神聖威壓足以讓凡人跪地臣服。通往最終之間的道路就在王座背後。',
    exits: [
      { direction: 'south', targetRoomId: 'angel_garden', description: '退回天使花園' },
      { direction: 'west', targetRoomId: 'judgment_hall', description: '回到審判大廳' },
      { direction: 'north', targetRoomId: 'god_chamber', description: '王座背後的光門通往神之間' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 90 },
    ],
    groundItems: [
      { itemId: 'celestial_fragment', description: '王座旁散落著天界碎片' },
    ],
    mapSymbol: '[座]',
    mapX: 3,
    mapY: 38,
    guardianHints: {
      creature: '王座的威壓會隨著距離增加——在王座附近戰鬥會受到持續傷害。',
      treasure: '王座上曾放置著諸神之王的權杖——現在權杖不知所蹤，但印記仍在。',
      spirit: '坐上這座王座的人將承受諸神的記憶——只有心智最堅強的人才能承受。',
    },
  },

  eternal_sanctuary: {
    id: 'eternal_sanctuary',
    name: '永恆聖所',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座被時間遺忘的小型聖堂，穹頂上的壁畫描繪著世界創生的場景。' +
      '聖堂中央的永恆之火仍在燃燒，散發出溫暖而安詳的光芒。' +
      '這裡是天界最後的寧靜之地，據說在此祈禱可以恢復所有傷勢。',
    exits: [
      { direction: 'east', targetRoomId: 'angel_garden', description: '回到天使花園' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[聖]',
    mapX: 2,
    mapY: 37,
    guardianHints: {
      creature: '聖所中的墮天使比其他地方的更加強大——牠們曾是聖所的守護者。',
      treasure: '永恆之火可以淨化任何被詛咒的物品——將被污染的裝備帶來這裡試試。',
      spirit: '聖所是諸神最初祈禱的地方——在這裡虔誠祈禱可能觸發隱藏的祝福事件。',
    },
  },

  god_chamber: {
    id: 'god_chamber',
    name: '神之間',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '天界遺跡的最深處，一個完美的圓形空間。牆壁、地面和天頂都由純粹的光構成。' +
      '空間正中央懸浮著一位身著金色戰甲的神祇——戰神，沉睡中的他仍散發著毀天滅地的威壓。' +
      '當冒險者踏入這片領域的瞬間，戰神的雙眼猛然睜開，億萬年的寂靜在此刻被打破。' +
      '這是這個世界最強大的存在，也是最終的挑戰。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_throne_room', description: '退回天界王座' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 100 },
      { monsterId: 'god_of_war', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[神]',
    mapX: 3,
    mapY: 39,
    guardianHints: {
      creature: '戰神會隨著戰鬥進程切換三個階段——每個階段的攻擊模式和弱點完全不同。',
      treasure: '戰神的神槍是這個世界上最強大的武器——只有擊敗他才能獲得。',
      spirit: '戰神並非邪惡——他在此等待一位值得繼承神力的勇者。這場戰鬥是最終的考驗。',
    },
  },
};
