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
      { direction: 'east', targetRoomId: 'auction_house', description: '酒館後門通往拍賣場' },
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
      { direction: 'west', targetRoomId: 'tavern', description: '從後門回到酒館' },
      { direction: 'south', targetRoomId: 'town_plaza', description: '正門通往城鎮廣場' },
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
};
