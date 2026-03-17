// 怪物擴充定義 - 區域 5-8 的新增怪物
// 此檔案由獨立 agent 產生，稍後透過 merge-expansion.ts 合併至主資料

import type { MonsterDef } from '@game/shared';

export const EXPANSION_MONSTERS: Record<string, MonsterDef> = {

  // ─── 暗影森林擴充 (Lv 14-18) ──────────────────────────────

  poison_toad: {
    id: 'poison_toad',
    name: '毒蛙',
    level: 14,
    hp: 160,
    mp: 35,
    str: 16,
    int: 14,
    dex: 12,
    vit: 18,
    luk: 6,
    element: 'nature',
    skills: ['basic_attack', 'poison_spit', 'tongue_lash', 'toxic_cloud'],
    expReward: 70,
    goldReward: [18, 35],
    drops: [
      { itemId: 'toad_skin', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'poison_gland', chance: 0.25, minQty: 1, maxQty: 1 },
      { itemId: 'antidote', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '體型如小牛般碩大的毒蛙，背上佈滿了分泌毒液的疣瘤。' +
      '牠能從口中噴出腐蝕性的毒霧，舌頭的射程超過五公尺。' +
      '在沼澤的毒霧中，牠是完美的伏擊獵手。',
    isBoss: false,
    guardianHints: {
      creature: '毒蛙在攻擊前腮幫子會鼓起——那是閃避毒霧的最佳時機。',
      treasure: '毒蛙的毒腺是製作高級毒藥和解毒劑的珍貴原料。',
      spirit: '這種毒蛙是沼澤毒化後的變異物種，牠們曾是普通的森林蛙。',
    },
  },

  dark_treant: {
    id: 'dark_treant',
    name: '暗黑樹人',
    level: 18,
    hp: 320,
    mp: 50,
    str: 28,
    int: 18,
    dex: 8,
    vit: 30,
    luk: 5,
    element: 'dark',
    skills: ['basic_attack', 'shadow_root', 'dark_bark_shield', 'life_drain', 'shadow_spore'],
    expReward: 110,
    goldReward: [30, 55],
    drops: [
      { itemId: 'dark_bark', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'cursed_sap', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'nature_crystal', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '被暗影之力徹底侵蝕的古老樹精，灰白色的樹皮上遍佈紫色的脈紋，如同流淌著暗影之血。' +
      '牠的根部會釋放暗影孢子，讓靠近的生物陷入昏沉。' +
      '比起普通樹精，牠更加強大，也更加瘋狂。',
    isBoss: false,
    guardianHints: {
      creature: '暗黑樹人的紫色脈紋會隨著牠蓄力而變亮——脈紋最亮時就是牠最脆弱的瞬間。',
      treasure: '暗黑樹人的體內有一顆被暗影污染的自然水晶，淨化後價值不菲。',
      spirit: '暗黑樹人原本是森林的守護者，被暗影侵蝕後失去了自我。在牠們的攻擊中，偶爾能感受到一絲悲哀。',
    },
  },

  // ─── 水晶洞窟擴充 (Lv 16-25) ─────────────────────────────

  cave_bat_swarm: {
    id: 'cave_bat_swarm',
    name: '洞窟蝙蝠群',
    level: 16,
    hp: 200,
    mp: 30,
    str: 18,
    int: 10,
    dex: 22,
    vit: 12,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'swarm_assault', 'sonic_barrage', 'blind', 'life_drain'],
    expReward: 85,
    goldReward: [20, 40],
    drops: [
      { itemId: 'bat_wing', chance: 0.5, minQty: 2, maxQty: 4 },
      { itemId: 'echo_crystal', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'medium_hp_potion', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '數十隻洞窟蝙蝠聚集成群行動，牠們的超聲波疊加後能產生令人暈眩的衝擊波。' +
      '蝙蝠群如同一團活動的黑雲，在洞窟中快速穿梭，讓人防不勝防。' +
      '單獨一隻並不可怕，成群結隊時卻是噩夢。',
    isBoss: false,
    guardianHints: {
      creature: '蝙蝠群有一隻領頭的個體——擊倒牠就能讓整群陷入混亂。',
      treasure: '蝙蝠群的巢穴中堆積著大量牠們收集的閃亮碎片，其中混雜著真正的寶石。',
      spirit: '蝙蝠群的集體意識形成了一種原始的群體智慧，牠們的行為模式比想像中更有策略性。',
    },
  },

  crystal_golem: {
    id: 'crystal_golem',
    name: '水晶魔像',
    level: 20,
    hp: 350,
    mp: 60,
    str: 30,
    int: 22,
    dex: 10,
    vit: 35,
    luk: 5,
    element: 'ice',
    skills: ['basic_attack', 'crystal_slam', 'crystal_shard', 'ice_armor', 'reflect_barrier'],
    expReward: 130,
    goldReward: [35, 70],
    drops: [
      { itemId: 'crystal_core', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'crystal_shard', chance: 0.45, minQty: 1, maxQty: 3 },
      { itemId: 'golem_fragment', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'ice_crystal', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '由無數水晶碎片凝聚而成的人形巨像，高約三公尺，每一步都讓地面微微震動。' +
      '牠的身體能反射魔法攻擊，物理攻擊則會在水晶表面留下碎裂的痕跡。' +
      '這是地底種族鍛造的魔法守衛，即使主人消亡千年仍在忠實地執行命令。',
    isBoss: false,
    guardianHints: {
      creature: '水晶魔像的核心位於胸腔中央——但要破壞厚重的水晶外殼才能觸及。用火屬性魔法可以加速裂解。',
      treasure: '魔像的核心是一顆完美的魔法水晶，是製作頂級裝備的稀有素材。',
      spirit: '每一尊水晶魔像都刻有地底種族工匠的名字——他們將自己的一部分靈魂注入了作品中。',
    },
  },

  spectral_knight: {
    id: 'spectral_knight',
    name: '幽靈騎士',
    level: 25,
    hp: 500,
    mp: 80,
    str: 38,
    int: 25,
    dex: 20,
    vit: 32,
    luk: 10,
    element: 'dark',
    skills: [
      'basic_attack', 'spectral_slash', 'soul_drain', 'phantom_charge',
      'death_mark', 'ethereal_shield',
    ],
    expReward: 200,
    goldReward: [50, 100],
    drops: [
      { itemId: 'spectral_essence', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'knight_sigil', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'phantom_blade', chance: 0.08, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '身著幽藍色半透明鎧甲的騎士亡靈，手持散發冥火的長劍。' +
      '他生前是地底王國騎士團的團長，死後化為不滅的守護者，' +
      '誓言守護古代祭壇直到永恆。任何膽敢踏入祭壇的入侵者都將面對他無情的劍鋒。',
    isBoss: false,
    guardianHints: {
      creature: '幽靈騎士在發動衝鋒前會舉劍致敬——那是他生前騎士精神的殘留，也是你唯一的防禦準備時間。',
      treasure: '騎士的幽靈盾牌上刻著地底王國的紋章，擊敗他後紋章會凝結成實體徽章。',
      spirit: '幽靈騎士並非邪惡的存在——如果能找到他生前的遺物並歸還，也許能讓他安息並獲得他的祝福。',
    },
  },

  // ─── 魔族領地 (Lv 30-40) ──────────────────────────────────

  imp: {
    id: 'imp',
    name: '小惡魔',
    level: 30,
    hp: 450,
    mp: 80,
    str: 35,
    int: 25,
    dex: 40,
    vit: 22,
    luk: 12,
    element: 'fire',
    skills: ['basic_attack', 'fire_bolt', 'quick_dash', 'screech'],
    expReward: 280,
    goldReward: [60, 120],
    drops: [
      { itemId: 'demon_horn', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.25, minQty: 1, maxQty: 2 },
      { itemId: 'large_hp_potion', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '體型矮小但極為敏捷的低階惡魔，全身赤紅色的皮膚上燃燒著微弱的火焰。' +
      '牠們成群結隊地出沒，用尖銳的爪子和火焰魔法騷擾入侵者。' +
      '雖然單獨一隻並不強大，但牠們的速度和數量足以讓人措手不及。',
    isBoss: false,
    guardianHints: {
      creature: '小惡魔的火焰在潮濕環境中會大幅減弱——利用血河的水氣可以壓制牠們。',
      treasure: '小惡魔偶爾會偷走魔族士兵的裝備——擊殺牠們有機會獲得意外的好東西。',
      spirit: '小惡魔是魔界最底層的存在，牠們渴望變強，有些甚至願意為強者效命。',
    },
  },

  demon_soldier: {
    id: 'demon_soldier',
    name: '魔族士兵',
    level: 33,
    hp: 650,
    mp: 50,
    str: 45,
    int: 18,
    dex: 28,
    vit: 38,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'backstab', 'howl', 'shadow_dash'],
    expReward: 360,
    goldReward: [80, 160],
    drops: [
      { itemId: 'demon_horn', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '身披黑色鎧甲的魔族步兵，手持鋸齒狀的彎刀和骨盾。' +
      '牠們紀律嚴明，服從上級的命令毫不猶豫。雖然個體戰力不及精銳，' +
      '但協同作戰的能力讓牠們成為魔族軍團的中堅力量。',
    isBoss: false,
    guardianHints: {
      creature: '魔族士兵的骨盾在承受三次重擊後會碎裂——集中攻擊同一點。',
      treasure: '魔族鎧甲雖然粗糙，但其中使用的黑鐵是極為堅硬的礦物。',
      spirit: '這些士兵中有些是被強制徵召的其他種族——或許有和平解決的可能。',
    },
  },

  succubus: {
    id: 'succubus',
    name: '魅魔',
    level: 35,
    hp: 580,
    mp: 200,
    str: 25,
    int: 52,
    dex: 38,
    vit: 28,
    luk: 18,
    element: 'dark',
    skills: ['basic_attack', 'charm', 'life_drain', 'shadow_storm', 'blind'],
    expReward: 420,
    goldReward: [100, 200],
    drops: [
      { itemId: 'demon_horn', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 2, maxQty: 3 },
      { itemId: 'large_mp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '容貌絕美卻危險至極的高階惡魔，漆黑的翅膀和纏繞暗影的雙角是唯一暴露其本質的特徵。' +
      '牠們擅長精神控制和暗黑魔法，能讓最堅定的戰士放下武器。' +
      '在魔族領地中，魅魔既是誘惑者也是情報收集者。',
    isBoss: false,
    guardianHints: {
      creature: '魅魔的魅惑術需要目光接觸——閉眼或轉身可以抵抗，但會失去視野。',
      treasure: '魅魔佩戴的暗影寶石蘊含著精神魔法的力量，是製作心控道具的材料。',
      spirit: '魅魔中有極少數保留了感情——找到那個弱點也許能瓦解牠的戰意。',
    },
  },

  hellhound: {
    id: 'hellhound',
    name: '地獄犬',
    level: 37,
    hp: 720,
    mp: 60,
    str: 55,
    int: 15,
    dex: 48,
    vit: 35,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'bite', 'quick_dash', 'howl'],
    expReward: 480,
    goldReward: [110, 220],
    drops: [
      { itemId: 'demon_horn', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'hellhound_fang', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '渾身燃燒著地獄之火的巨大魔犬，三雙猩紅的眼睛在黑暗中如同六顆火星。' +
      '牠們的速度快得驚人，火焰吐息能在瞬間將一切化為灰燼。' +
      '地獄犬是魔族將軍的忠誠座騎和戰爭武器。',
    isBoss: false,
    guardianHints: {
      creature: '地獄犬噴火前會深吸一口氣——那是側步閃避的唯一窗口。',
      treasure: '地獄犬的獠牙在熄滅後仍保持著極高的硬度，是鍛造火屬性武器的好材料。',
      spirit: '地獄犬原本是普通的獵犬，被魔族用禁忌術式改造成了這副模樣。',
    },
  },

  demon_general: {
    id: 'demon_general',
    name: '魔族將軍',
    level: 40,
    hp: 1200,
    mp: 120,
    str: 65,
    int: 30,
    dex: 35,
    vit: 50,
    luk: 12,
    element: 'dark',
    skills: ['basic_attack', 'shadow_storm', 'howl', 'backstab', 'stone_slam', 'death_mark'],
    expReward: 650,
    goldReward: [150, 300],
    drops: [
      { itemId: 'demon_horn', chance: 0.5, minQty: 2, maxQty: 3 },
      { itemId: 'shadow_essence', chance: 0.5, minQty: 2, maxQty: 4 },
      { itemId: 'large_hp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '身著精鑄黑鐵甲胄的魔族高階指揮官，身高超過兩公尺半，渾身散發著壓迫性的暗黑氣息。' +
      '牠的巨劍上刻著無數被斬殺者的名字，每一個名字都為劍增添一分力量。' +
      '魔族將軍是僅次於魔王的存在，統率著整個要塞的軍隊。',
    isBoss: true,
    guardianHints: {
      creature: '將軍的暗黑氣息會削弱附近的敵人——保持距離用遠程攻擊更有效。',
      treasure: '將軍的黑鐵甲胄是頂級的防具，但需要特殊的方法才能穿戴。',
      spirit: '魔族將軍曾是人類王國的騎士團長——被魔王以詛咒轉化為惡魔。',
    },
  },

  // ─── 魔族領地 精英 ────────────────────────────────────────

  demon_lord: {
    id: 'demon_lord',
    name: '魔王',
    level: 40,
    hp: 4800,     // 40*40*3
    mp: 400,
    str: 98,      // ~65 base * 1.5x
    int: 45,
    dex: 52,
    vit: 75,
    luk: 15,
    element: 'dark',
    skills: ['basic_attack', 'shadow_storm', 'fire_breath', 'death_mark', 'shadow_devour', 'howl', 'stone_slam'],
    expReward: 2500,
    goldReward: [500, 1000],
    drops: [
      { itemId: 'demon_lord_sword', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'demon_horn', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'shadow_essence', chance: 1.0, minQty: 5, maxQty: 8 },
      { itemId: 'hellhound_fang', chance: 0.8, minQty: 2, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '端坐於骨座之上的魔族至高統治者，身披由暗影凝聚而成的皇袍，頭戴燃燒著鬼火的王冠。' +
      '牠的雙眼如同兩團烈焰，注視著一切膽敢挑戰其威權的生命。' +
      '魔王的每一次揮手都能掀起暗影風暴，每一聲怒吼都讓整座要塞顫抖。' +
      '這是魔族領地最強大的存在，無數冒險者在此折戟沉沙。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '魔王在HP低於一半時會進入暴走狀態，攻擊力翻倍但防禦會下降——那是全力輸出的時機。',
      treasure: '魔王的劍中封存著歷代魔王的力量——它會選擇認可的主人。',
      spirit: '現任魔王並非不可救贖——傳說中如果能找到牠被詛咒前的記憶，就能解開束縛。',
    },
  },

  // ─── 龍谷 (Lv 40-50) ─────────────────────────────────────

  young_dragon: {
    id: 'young_dragon',
    name: '幼龍',
    level: 40,
    hp: 900,
    mp: 120,
    str: 55,
    int: 35,
    dex: 30,
    vit: 45,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'howl', 'quick_dash', 'bark_shield'],
    expReward: 550,
    goldReward: [120, 240],
    drops: [
      { itemId: 'dragon_scale', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'dragon_fang', chance: 0.25, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '剛離巢不久的年輕龍族，體型約有一間房屋大小。金紅色的鱗片尚未完全硬化，' +
      '但牠的火焰吐息已足以將鐵甲熔化。年輕氣盛的性格讓牠對一切入侵者充滿敵意。',
    isBoss: false,
    guardianHints: {
      creature: '幼龍的鱗片在腹部最為薄弱——翻滾到牠身下攻擊是最有效的策略。',
      treasure: '幼龍脫落的鱗片品質極高，是鍛造龍鱗甲的基礎材料。',
      spirit: '幼龍其實很好奇——如果你展現出足夠的實力而非敵意，牠可能會試著溝通。',
    },
  },

  wyvern: {
    id: 'wyvern',
    name: '飛龍',
    level: 43,
    hp: 950,
    mp: 100,
    str: 52,
    int: 28,
    dex: 55,
    vit: 40,
    luk: 12,
    element: 'none',
    skills: ['basic_attack', 'sonic_wave', 'quick_dash', 'screech', 'howl'],
    expReward: 620,
    goldReward: [130, 260],
    drops: [
      { itemId: 'dragon_scale', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'bat_wing', chance: 0.5, minQty: 2, maxQty: 4 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '一種長著蝙蝠般翅膀的亞龍種，雖不如真龍強大但速度遠超地面生物。' +
      '飛龍善於利用強風進行俯衝攻擊，鉤爪和長尾都是致命的武器。' +
      '牠們是龍谷中最常見的飛行威脅。',
    isBoss: false,
    guardianHints: {
      creature: '飛龍俯衝時無法變向——側步閃避後可以攻擊牠的翅膀使其墜地。',
      treasure: '飛龍的翼膜是製作飛行道具的稀有材料。',
      spirit: '飛龍是龍族遠古時期的分支——牠們選擇了自由的天空而非力量的進化。',
    },
  },

  dragon_knight: {
    id: 'dragon_knight',
    name: '龍騎士',
    level: 45,
    hp: 1100,
    mp: 80,
    str: 62,
    int: 22,
    dex: 42,
    vit: 48,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'phantom_charge', 'fire_breath', 'howl', 'backstab', 'bark_shield'],
    expReward: 700,
    goldReward: [150, 300],
    drops: [
      { itemId: 'dragon_scale', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'dragon_fang', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.25, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '駕馭飛龍的精銳龍族戰士，身穿由龍鱗鍛造的輕甲，手持龍骨長槍。' +
      '龍騎士是龍谷的巡邏部隊，負責驅逐所有未經允許闖入的外來者。' +
      '人與龍的完美配合讓牠們成為極其難纏的對手。',
    isBoss: false,
    guardianHints: {
      creature: '先擊落龍騎士的坐騎可以大幅削弱戰力——用遠程攻擊瞄準飛龍的翅膀。',
      treasure: '龍騎士的長槍是以龍骨鍛造的精品武器，有時能從戰場上撿到。',
      spirit: '龍騎士與飛龍的羈絆超越了主僕關係——牠們是真正的夥伴。',
    },
  },

  ancient_wyrm: {
    id: 'ancient_wyrm',
    name: '古龍蛇',
    level: 47,
    hp: 1200,
    mp: 150,
    str: 50,
    int: 45,
    dex: 35,
    vit: 52,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'poison_spit', 'venomous_bite', 'life_drain', 'shadow_storm', 'coil'],
    expReward: 780,
    goldReward: [160, 320],
    drops: [
      { itemId: 'dragon_scale', chance: 0.35, minQty: 2, maxQty: 3 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'dragon_fang', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '棲息在龍骨原野的古老蛇形巨龍，身長超過三十公尺，鱗片呈現死亡般的暗綠色。' +
      '牠的毒液能腐蝕一切，暗黑氣息能讓獵物喪失戰意。' +
      '古龍蛇是已逝巨龍化為不死後的產物，牠們守護著龍族的墓地。',
    isBoss: false,
    guardianHints: {
      creature: '古龍蛇的弱點在頸部的第七片鱗片下——那裡的鱗片有一道古老的裂痕。',
      treasure: '古龍蛇的毒囊中蘊含著極為濃縮的暗影毒素，是煉金術的頂級材料。',
      spirit: '古龍蛇曾是一條偉大的風暴龍——死後的執念讓牠以不死之軀守護同族的遺骸。',
    },
  },

  storm_dragon: {
    id: 'storm_dragon',
    name: '風暴巨龍',
    level: 50,
    hp: 1800,
    mp: 250,
    str: 68,
    int: 55,
    dex: 45,
    vit: 58,
    luk: 15,
    element: 'lightning',
    skills: ['basic_attack', 'sonic_wave', 'ice_storm', 'crystal_shard', 'howl', 'shadow_storm', 'shatter'],
    expReward: 1000,
    goldReward: [200, 400],
    drops: [
      { itemId: 'dragon_scale', chance: 0.45, minQty: 2, maxQty: 4 },
      { itemId: 'dragon_fang', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'crystal_core', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '成年的巨大龍族，翼展超過五十公尺，渾身覆蓋著閃電般的藍白色鱗片。' +
      '牠的每一次振翅都能掀起風暴，咆哮聲伴隨著震耳的雷鳴。' +
      '風暴巨龍是龍谷中僅次於古龍的最強存在，只有最精銳的隊伍才敢與之交戰。',
    isBoss: true,
    guardianHints: {
      creature: '風暴巨龍在暴風雨中戰力倍增——如果能封鎖牠召喚風暴的能力就能大幅削弱牠。',
      treasure: '風暴巨龍的鱗片中蘊含著雷電之力，是附魔雷屬性裝備的頂級材料。',
      spirit: '風暴巨龍是天空的守護者——牠們用風暴驅逐膽敢飛入龍谷的一切外來者。',
    },
  },

  // ─── 龍谷 精英 ────────────────────────────────────────────

  elder_dragon: {
    id: 'elder_dragon',
    name: '古龍',
    level: 50,
    hp: 7500,     // 50*50*3
    mp: 500,
    str: 102,     // ~68 base * 1.5x
    int: 82,
    dex: 68,
    vit: 87,
    luk: 20,
    element: 'fire',
    skills: [
      'basic_attack', 'fire_breath', 'ice_storm', 'sonic_wave',
      'shadow_devour', 'diamond_skin', 'howl', 'shatter', 'crystal_resurrection',
    ],
    expReward: 5000,
    goldReward: [800, 1600],
    drops: [
      { itemId: 'elder_dragon_fang', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'dragon_scale', chance: 1.0, minQty: 5, maxQty: 8 },
      { itemId: 'dragon_fang', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'crystal_core', chance: 0.8, minQty: 2, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '龍谷的至高存在，一條活了數千年的遠古巨龍。牠的鱗片如同星空般閃耀著七彩光芒，' +
      '身軀龐大到幾乎佔據了整座聖殿。古龍的每一次呼吸都會改變周圍的天氣，' +
      '每一次咆哮都會引發地震。牠掌握著所有元素的力量，是龍族智慧和力量的極致。' +
      '面對古龍，連最自負的勇者都會感到渺小。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '古龍會隨機切換元素——觀察牠鱗片的顏色變化來預判下一次攻擊的屬性。',
      treasure: '古龍的牙齒蘊含著數千年的龍之力量，用它鍛造的武器將是傳世神器。',
      spirit: '古龍是世界的記錄者——如果能獲得牠的認可而非擊殺牠，或許能得到更珍貴的東西。',
    },
  },

  // ─── 深淵裂隙 (Lv 50-55) ─────────────────────────────────

  void_walker: {
    id: 'void_walker',
    name: '虛空行者',
    level: 50,
    hp: 1500,
    mp: 200,
    str: 55,
    int: 48,
    dex: 60,
    vit: 45,
    luk: 15,
    element: 'dark',
    skills: ['basic_attack', 'shadow_dash', 'shadow_bite', 'quick_dash', 'blind', 'death_mark'],
    expReward: 900,
    goldReward: [180, 360],
    drops: [
      { itemId: 'void_shard', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '從虛空中誕生的人形生物，身體由扭曲的暗影構成，沒有固定的形態。' +
      '牠能在眨眼間穿越空間出現在你背後，攻擊後又瞬間消失在虛空中。' +
      '虛空行者是深淵裂隙中最常見也最令人頭疼的敵人。',
    isBoss: false,
    guardianHints: {
      creature: '虛空行者現身前地面會出現暗影漣漪——盯住地面比盯住空中更有效。',
      treasure: '虛空行者消散後留下的虛空碎片能折射其他維度的光線——極為珍貴的素材。',
      spirit: '虛空行者沒有自我意識——牠們只是深淵意志的延伸，如同觸手般探索現實世界。',
    },
  },

  shadow_demon: {
    id: 'shadow_demon',
    name: '暗影惡魔',
    level: 52,
    hp: 1650,
    mp: 250,
    str: 48,
    int: 62,
    dex: 42,
    vit: 50,
    luk: 12,
    element: 'dark',
    skills: ['basic_attack', 'shadow_storm', 'life_drain', 'shadow_devour', 'blind', 'death_mark'],
    expReward: 1000,
    goldReward: [200, 400],
    drops: [
      { itemId: 'void_shard', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.5, minQty: 3, maxQty: 5 },
      { itemId: 'large_mp_potion', chance: 0.2, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '深淵孕育出的高階惡魔，全身由濃縮的暗影能量構成。' +
      '牠的存在本身就在侵蝕周圍的光線，站在牠附近就能感受到生命力被緩慢吸取。' +
      '暗影惡魔擅長範圍暗黑魔法和生命汲取，是深淵中最危險的魔法使用者。',
    isBoss: false,
    guardianHints: {
      creature: '暗影惡魔在完全黑暗中幾乎無敵——攜帶光明魔法或聖光道具是必要的。',
      treasure: '暗影惡魔的核心是一顆純粹的暗影之心——暗屬性魔法的終極催化劑。',
      spirit: '暗影惡魔是深淵領主的直屬部下——擊敗牠們會引起領主的注意。',
    },
  },

  chaos_spawn: {
    id: 'chaos_spawn',
    name: '混沌之子',
    level: 53,
    hp: 1550,
    mp: 180,
    str: 55,
    int: 55,
    dex: 45,
    vit: 48,
    luk: 20,
    element: 'none',
    skills: ['basic_attack', 'fire_bolt', 'crystal_shard', 'sonic_wave', 'shadow_storm', 'quick_dash'],
    expReward: 1050,
    goldReward: [210, 420],
    drops: [
      { itemId: 'void_shard', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'crystal_core', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '由混沌能量凝聚而成的不定形生物，外表在各種元素之間不斷切換。' +
      '上一秒還是燃燒的火焰，下一秒就變成冰霜結晶，完全無法預測。' +
      '混沌之子的攻擊屬性隨機變化，是深淵裂隙中最不可預測的敵人。',
    isBoss: false,
    guardianHints: {
      creature: '混沌之子的顏色代表當前屬性：紅色=火、藍色=冰、紫色=暗——據此調整抗性。',
      treasure: '混沌之子消散後偶爾會留下穩定的混沌結晶——極為稀有的煉金材料。',
      spirit: '混沌之子是維度碰撞的副產品——牠們的存在本身就是物理法則崩壞的證據。',
    },
  },

  nightmare: {
    id: 'nightmare',
    name: '噩夢體',
    level: 55,
    hp: 1800,
    mp: 300,
    str: 42,
    int: 72,
    dex: 50,
    vit: 48,
    luk: 18,
    element: 'dark',
    skills: ['basic_attack', 'charm', 'blind', 'life_drain', 'shadow_devour', 'death_mark', 'petrifying_gaze'],
    expReward: 1200,
    goldReward: [240, 480],
    drops: [
      { itemId: 'void_shard', chance: 0.4, minQty: 2, maxQty: 3 },
      { itemId: 'shadow_essence', chance: 0.5, minQty: 3, maxQty: 5 },
      { itemId: 'large_mp_potion', chance: 0.25, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '由無數生物的恐懼凝聚而成的精神體，外表會變化成觀看者最害怕的形象。' +
      '噩夢體的攻擊直接作用於精神層面，能讓最堅強的戰士崩潰。' +
      '在深淵裂隙中，噩夢體是最令人毛骨悚然的存在。',
    isBoss: true,
    guardianHints: {
      creature: '噩夢體的精神攻擊需要恐懼作為媒介——克服內心的恐懼就能大幅削弱牠。',
      treasure: '噩夢體的核心是凝結的恐懼結晶——可以用來製造精神系魔法道具。',
      spirit: '噩夢體並非有意為惡——牠只是恐懼本身的具象化，消除恐懼就能消除牠。',
    },
  },

  // ─── 深淵裂隙 精英 ────────────────────────────────────────

  abyss_lord: {
    id: 'abyss_lord',
    name: '深淵領主',
    level: 55,
    hp: 9075,     // 55*55*3
    mp: 600,
    str: 78,      // ~52 base * 1.5x (balanced high stats)
    int: 108,     // ~72 base * 1.5x (magic focused)
    dex: 75,
    vit: 72,
    luk: 25,
    element: 'dark',
    skills: [
      'basic_attack', 'shadow_devour', 'shadow_storm', 'death_mark',
      'crystal_prison', 'life_drain', 'charm', 'blind', 'shatter',
    ],
    expReward: 7000,
    goldReward: [1200, 2400],
    drops: [
      { itemId: 'abyss_eye_staff', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'void_shard', chance: 1.0, minQty: 5, maxQty: 8 },
      { itemId: 'shadow_essence', chance: 1.0, minQty: 8, maxQty: 12 },
      { itemId: 'crystal_core', chance: 0.8, minQty: 2, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '深淵裂隙的絕對統治者，一個擁有無數隻眼睛的異形存在。' +
      '牠的身體由凝固的虛空和混沌能量編織而成，每一隻眼睛都能釋放不同屬性的毀滅光束。' +
      '深淵領主曾是一位試圖征服維度的人類大魔導士，被自己打開的深淵吞噬後，' +
      '與虛空融合成了這個超越凡人理解的存在。牠掌控著時間和空間的力量，是深淵的化身。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '深淵領主的眼睛是牠的弱點——逐一摧毀眼睛可以封鎖牠的技能。',
      treasure: '深淵領主的權杖是凝聚了維度之力的神器——深淵之眼可以操控時空。',
      spirit: '深淵領主的人類記憶仍殘留在某隻眼睛中——找到那隻眼睛也許能喚醒他的人性。',
    },
  },

  // ─── 天界遺跡 (Lv 55-60) ─────────────────────────────────

  fallen_angel: {
    id: 'fallen_angel',
    name: '墮天使',
    level: 55,
    hp: 1700,
    mp: 280,
    str: 50,
    int: 65,
    dex: 55,
    vit: 48,
    luk: 18,
    element: 'dark',
    skills: ['basic_attack', 'shadow_storm', 'life_drain', 'crystal_shard', 'blind', 'quick_dash'],
    expReward: 1100,
    goldReward: [220, 440],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'large_mp_potion', chance: 0.2, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '曾經光輝燦爛的天界守護者，在諸神之戰後墮入黑暗。' +
      '殘破的白色翅膀上交織著黑色的紋路，曾經聖潔的面容如今扭曲成痛苦的表情。' +
      '墮天使能同時使用光明和黑暗魔法，是天界遺跡中最悲劇也最危險的存在。',
    isBoss: false,
    guardianHints: {
      creature: '墮天使在使用暗魔法時會暴露光屬性弱點——在牠切換屬性時猛攻。',
      treasure: '墮天使的羽毛仍保留著神聖的殘餘力量——是製造二元屬性裝備的關鍵素材。',
      spirit: '墮天使並非自願墮落——諸神之戰的傷痛讓牠們失去了信仰。治癒牠們或許能獲得盟友。',
    },
  },

  celestial_guardian: {
    id: 'celestial_guardian',
    name: '天界守衛',
    level: 57,
    hp: 2000,
    mp: 180,
    str: 65,
    int: 45,
    dex: 40,
    vit: 68,
    luk: 12,
    element: 'light',
    skills: ['basic_attack', 'crystal_shard', 'diamond_skin', 'stone_slam', 'reflect_barrier', 'howl'],
    expReward: 1250,
    goldReward: [250, 500],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'crystal_core', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'large_hp_potion', chance: 0.25, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '由白金和神聖之光構成的巨大人形守衛，身高超過四公尺。' +
      '牠們是諸神離開時留下的自動防衛機制，忠誠地守護著天界遺跡。' +
      '天界守衛的防禦力極高，正面突破極為困難。',
    isBoss: false,
    guardianHints: {
      creature: '天界守衛的護盾有充能間隔——在護盾消失的短暫瞬間全力輸出。',
      treasure: '守衛的核心是一塊天界白金——比任何凡間金屬都要堅硬和珍貴。',
      spirit: '天界守衛沒有意識，只有程式化的命令——繞過牠們可能比戰鬥更明智。',
    },
  },

  seraph: {
    id: 'seraph',
    name: '熾天使',
    level: 58,
    hp: 1600,
    mp: 350,
    str: 40,
    int: 75,
    dex: 52,
    vit: 45,
    luk: 20,
    element: 'light',
    skills: ['basic_attack', 'crystal_shard', 'crystal_resurrection', 'nature_drain', 'diamond_skin', 'howl'],
    expReward: 1350,
    goldReward: [270, 540],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'crystal_core', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'large_mp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'healer',
    description:
      '六翼天使，天界階層中僅次於諸神的存在。渾身散發著金色的聖光，' +
      '六片翅膀不停地煽動，灑下治癒的光粉。' +
      '熾天使擅長治癒同伴和施放強力光明魔法，是隊伍戰中最優先需要擊倒的目標。',
    isBoss: false,
    guardianHints: {
      creature: '熾天使的治癒能力極強——必須優先擊倒，否則整場戰鬥會變成消耗戰。',
      treasure: '熾天使的羽毛沐浴在純粹的聖光中——是治癒系道具的頂級素材。',
      spirit: '熾天使忠於諸神的遺命——牠們守護天界直到諸神歸來或世界終結。',
    },
  },

  divine_construct: {
    id: 'divine_construct',
    name: '神造兵器',
    level: 60,
    hp: 2500,
    mp: 100,
    str: 80,
    int: 30,
    dex: 35,
    vit: 85,
    luk: 8,
    element: 'light',
    skills: ['basic_attack', 'stone_slam', 'diamond_skin', 'reflect_barrier', 'shatter', 'crystal_prison'],
    expReward: 1500,
    goldReward: [300, 600],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.45, minQty: 2, maxQty: 3 },
      { itemId: 'crystal_core', chance: 0.25, minQty: 1, maxQty: 2 },
      { itemId: 'large_hp_potion', chance: 0.3, minQty: 2, maxQty: 3 },
    ],
    aiType: 'defensive',
    description:
      '諸神以天界白金和神聖之力鑄造的終極戰爭機器，身高超過六公尺。' +
      '全身由無數精密的齒輪和光之迴路構成，外層覆蓋著不可摧毀的神聖護甲。' +
      '神造兵器是天界遺跡中防禦力最高的存在，要突破它需要強大的魔法攻擊或找到核心弱點。',
    isBoss: false,
    guardianHints: {
      creature: '神造兵器的背部有維護用的面板——繞到身後攻擊面板可以直接破壞核心。',
      treasure: '神造兵器的零件每一個都是失傳的神聖鍛造技術的結晶。',
      spirit: '神造兵器是諸神為最後之戰準備的武器——牠們一直在等待一場永遠不會到來的戰爭。',
    },
  },

  // ─── 天界遺跡 精英 / 最終BOSS ────────────────────────────

  god_of_war: {
    id: 'god_of_war',
    name: '戰神',
    level: 60,
    hp: 10800,    // 60*60*3
    mp: 800,
    str: 120,     // ~80 base * 1.5x — highest in game
    int: 90,
    dex: 82,
    vit: 128,     // ~85 base * 1.5x
    luk: 30,
    element: 'light',
    skills: [
      'basic_attack', 'stone_slam', 'fire_breath', 'ice_storm', 'sonic_wave',
      'shadow_devour', 'diamond_skin', 'shatter', 'howl', 'death_mark',
      'crystal_resurrection', 'phantom_charge',
    ],
    expReward: 10000,
    goldReward: [2000, 4000],
    drops: [
      { itemId: 'god_of_war_spear', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'celestial_fragment', chance: 1.0, minQty: 8, maxQty: 12 },
      { itemId: 'crystal_core', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'void_shard', chance: 0.8, minQty: 3, maxQty: 5 },
    ],
    aiType: 'boss',
    description:
      '天界最強大的神祇，掌管戰爭與武道的至高存在。身著金色神聖戰甲，' +
      '手持散發無盡光芒的神槍，六翼金色羽翼展開時如同第二輪太陽升起。' +
      '戰神的力量超越了凡人的想像——他能操控所有元素，掌握所有武技，' +
      '洞悉所有戰術。他在此沉睡萬年，等待一位真正的勇者前來挑戰。' +
      '這場戰鬥將決定凡人是否配得上繼承神之力量。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '戰神分三階段：第一階段純物理、第二階段物理+魔法、第三階段全屬性——每階段需要不同的策略。',
      treasure: '戰神的神槍是這個世界最強的武器——它會回應真正勇者的意志。',
      spirit: '戰神並非敵人——他是最終的導師。這場戰鬥的意義不在於勝負，而在於成長。通過他的考驗，你將超越凡人的極限。',
    },
  },
};
