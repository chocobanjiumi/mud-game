import type { MonsterDef } from '@game/shared';

export const EXPANSION_MONSTERS_PART_008: Record<string, MonsterDef> = {
high_mine_crystal_wyrm: {
    id: 'high_mine_crystal_wyrm', name: '高山礦核晶龍', alias: 'minewyrm',
    level: 36, hp: 2600, mp: 520, str: 118, int: 90, dex: 36, vit: 168, luk: 20,
    element: 'ice',
    family: 'dragon',
    skills: ['basic_attack', 'ice_storm', 'crystal_slam', 'reflect_barrier', 'death_mark', 'lightning'],
    expReward: 2800, goldReward: [760, 1450],
    drops: [
      { itemId: 'high_mine_core', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'starwatch_silver_ore', chance: 0.72, minQty: 2, maxQty: 4 },
      { itemId: 'iceglass_ore', chance: 0.64, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '盤踞在高山礦核深處的冰晶幼龍，鱗片由冰玻礦與星點銀礦長成。牠每次呼吸都會讓礦洞亮起藍白星光，像整座山正在睜眼。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '高山礦核晶龍會反射、冰風暴與雷擊，屏障期間保留爆發。',
      treasure: '牠必定掉落高山礦核，是銀松山脈核心材料。',
      spirit: '晶龍是礦脈、冰玻與星光在山頂凝成的守護意志。',
    },
  },

saltflat_crystal_scuttler: {
    id: 'saltflat_crystal_scuttler', name: '鹽晶步蟲', alias: 'saltscuttler',
    level: 14, hp: 320, mp: 60, str: 30, int: 14, dex: 38, vit: 26, luk: 14,
    element: 'ice',
    family: 'insect',
    skills: ['basic_attack', 'quick_dash', 'crystal_shard'],
    expReward: 240, goldReward: [65, 125],
    drops: [
      { itemId: 'flatsalt_crystal', chance: 0.62, minQty: 1, maxQty: 3 },
      { itemId: 'blue_mud_saltpack', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '在白波鹽面與玻璃鹽田上快速爬行的小型鹽晶蟲，背甲像一簇透明鹽花。牠會借鹽面反光突然轉向，用碎晶割傷腳踝。',
    isBoss: false,
    guardianHints: {
      creature: '鹽晶步蟲速度快，鹽面閃動時先穩住站位。',
      treasure: '牠背甲能剝下白灘鹽晶。',
      spirit: '步蟲是鹽風灘退潮後最先出現的晶化生物。',
    },
  },

saltgrass_reedstalker: {
    id: 'saltgrass_reedstalker', name: '鹽草伏行者', alias: 'saltstalker',
    level: 15, hp: 360, mp: 82, str: 34, int: 18, dex: 42, vit: 28, luk: 18,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'blind', 'poison_bite'],
    expReward: 270, goldReward: [72, 140],
    drops: [
      { itemId: 'flatsalt_crystal', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'fogbell_clapper', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '藏在鹽草帶和霧中路標旁的細長伏行者，皮膚覆著灰白鹽粉。牠會用鹽霧迷眼，再沿漂木陰影繞到隊伍側面。',
    isBoss: false,
    guardianHints: {
      creature: '鹽草伏行者會致盲與毒咬，霧厚時不要追太遠。',
      treasure: '牠常把霧鐘零件藏在鹽草窩裡。',
      spirit: '伏行者是鹽草與薄霧共同養出的伏擊生物。',
    },
  },

brinepool_crab_guard: {
    id: 'brinepool_crab_guard', name: '鹽池蟹衛', alias: 'brinecrab',
    level: 16, hp: 520, mp: 70, str: 46, int: 12, dex: 24, vit: 62, luk: 10,
    element: 'none',
    family: 'aquatic',
    skills: ['basic_attack', 'stone_slam', 'shell_guard'],
    expReward: 330, goldReward: [88, 170],
    drops: [
      { itemId: 'brine_crab_shell', chance: 0.64, minQty: 1, maxQty: 2 },
      { itemId: 'blue_mud_saltpack', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '守在鹽水潮池與蟹行淺灘的大型鹽蟹，兩螯包著厚厚鹽殼。牠會橫向堵住退潮水道，逼迫旅人踩進更深的藍泥。',
    isBoss: false,
    guardianHints: {
      creature: '鹽池蟹衛防禦高，舉螯時先等牠護殼結束。',
      treasure: '鹽蟹硬殼是牠最穩定的掉落。',
      spirit: '蟹衛維持潮池邊界，阻止外來者攪亂鹽水。',
    },
  },

pirate_mist_scout: {
    id: 'pirate_mist_scout', name: '霧灘海盜哨兵', alias: 'mistscout',
    level: 17, hp: 440, mp: 90, str: 42, int: 18, dex: 50, vit: 32, luk: 22,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'backstab', 'steal', 'quick_dash'],
    expReward: 380, goldReward: [105, 200],
    drops: [
      { itemId: 'fogbell_clapper', chance: 0.28, minQty: 1, maxQty: 1 },
      { itemId: 'blue_mud_saltpack', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '藏在漂木哨柱、海盜隱棚與破舟灘附近的海盜哨兵，斗篷被鹽霧泡得發白。牠們會偷走補給，並用霧鐘假聲引人走錯潮道。',
    isBoss: false,
    guardianHints: {
      creature: '霧灘海盜哨兵會偷竊與背刺，先清哨兵再搜藏點。',
      treasure: '牠們身上常有霧鐘舌與藍泥鹽包。',
      spirit: '海盜哨兵把退潮路線變成掠奪陷阱。',
    },
  },

fishbone_murkling: {
    id: 'fishbone_murkling', name: '魚骨濁潮人', alias: 'murkling',
    level: 18, hp: 500, mp: 150, str: 38, int: 42, dex: 34, vit: 42, luk: 14,
    element: 'ice',
    family: 'undead',
    skills: ['basic_attack', 'water_spear', 'life_drain', 'blind'],
    expReward: 440, goldReward: [120, 230],
    drops: [
      { itemId: 'flatsalt_crystal', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'fogbell_clapper', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '在魚骨棧橋與漁夫藏點附近浮出的濁潮人，身上掛著魚骨與鹽草繩。牠們會用冷鹽水凝成尖矛，拖走靠近潮池邊緣的人。',
    isBoss: false,
    guardianHints: {
      creature: '魚骨濁潮人會水矛與致盲，棧橋上要保持距離。',
      treasure: '牠們收集白灘鹽晶與霧鐘零件當作飾物。',
      spirit: '濁潮人是漁夫失蹤傳聞背後的主要威脅。',
    },
  },

blue_mud_saltback: {
    id: 'blue_mud_saltback', name: '藍泥鹽背獸', alias: 'saltback',
    level: 19, hp: 720, mp: 100, str: 58, int: 18, dex: 22, vit: 78, luk: 12,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'stone_slam', 'toxic_cloud', 'stone_skin'],
    expReward: 520, goldReward: [140, 270],
    drops: [
      { itemId: 'blue_mud_saltpack', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'brine_crab_shell', chance: 0.26, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '藍泥層與破舟灘間爬行的厚背泥獸，背上乾鹽結成一片灰白甲殼。牠會翻動藍泥釋放刺鼻鹽霧，再用沉重身體撞碎木船殘骸。',
    isBoss: false,
    guardianHints: {
      creature: '藍泥鹽背獸會毒霧與石膚，霧起時先退出藍泥層。',
      treasure: '藍泥鹽包多從牠背甲下方挖出。',
      spirit: '鹽背獸讓看似平坦的泥層變成活動陷阱。',
    },
  },

glasssalt_elemental: {
    id: 'glasssalt_elemental', name: '玻璃鹽元素', alias: 'glasselemental',
    level: 21, hp: 820, mp: 260, str: 46, int: 70, dex: 28, vit: 76, luk: 14,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'crystal_shard', 'ice_storm', 'reflect_barrier'],
    expReward: 700, goldReward: [190, 360],
    drops: [
      { itemId: 'flatsalt_crystal', chance: 0.78, minQty: 1, maxQty: 4 },
      { itemId: 'deep_brine_pearl', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '玻璃鹽田與鹽晶巢中凝出的透明元素，身體由鹽晶與薄冰折射成多重輪廓。牠會升起反射鹽幕，讓攻擊者被自己的光影刺傷。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '玻璃鹽元素會反射屏障，屏障期間不要強攻。',
      treasure: '白灘鹽晶是牠最主要的掉落。',
      spirit: '鹽元素是整片白灘晶化後的守衛。',
    },
  },

lowtide_serpent: {
    id: 'lowtide_serpent', name: '退潮海蛇', alias: 'lowtideserpent',
    level: 22, hp: 920, mp: 220, str: 70, int: 42, dex: 38, vit: 70, luk: 16,
    element: 'ice',
    family: 'aquatic',
    skills: ['basic_attack', 'water_spear', 'coil', 'poison_bite'],
    expReward: 780, goldReward: [210, 405],
    drops: [
      { itemId: 'deep_brine_pearl', chance: 0.16, minQty: 1, maxQty: 1 },
      { itemId: 'brine_crab_shell', chance: 0.32, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '沿海蛇痕與退潮石道滑行的灰白海蛇，鱗片被鹽霜磨得發亮。牠會在薄水下盤成圈，等旅人踏上石道時纏住腳踝拖向潮池。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '退潮海蛇會纏繞與毒咬，看到濕亮拖痕就先停步。',
      treasure: '深鹽眼珠偶爾會卡在牠喉囊中。',
      spirit: '海蛇標記著退潮路線最危險的深水回流。',
    },
  },

deep_brine_eye_keeper: {
    id: 'deep_brine_eye_keeper', name: '深鹽眼守望者', alias: 'brinekeeper',
    level: 24, hp: 1500, mp: 360, str: 82, int: 68, dex: 34, vit: 104, luk: 20,
    element: 'ice',
    family: 'undead',
    skills: ['basic_attack', 'water_spear', 'ice_storm', 'reflect_barrier', 'death_mark'],
    expReward: 1250, goldReward: [340, 650],
    drops: [
      { itemId: 'deep_brine_pearl', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'flatsalt_crystal', chance: 0.7, minQty: 2, maxQty: 4 },
      { itemId: 'fogbell_clapper', chance: 0.42, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '潮望廢墟後方深鹽眼中浮起的白灰守望者，身軀像由鹽霧、海蛇骨與潮池冷光組成。牠每次敲響霧鐘，都會讓退潮石道短暫消失在白霧中。',
    isBoss: true,
    isElite: true,
    respawnTime: 1200,
    guardianHints: {
      creature: '深鹽眼守望者會水矛、冰風暴與反射屏障，屏障期間先穩血線。',
      treasure: '牠必定掉落深鹽眼珠，是鹽風灘核心證明物。',
      spirit: '守望者是潮霧、鹽晶與失蹤漁船記憶凝成的核心。',
    },
  },

redthorn_briarling: {
    id: 'redthorn_briarling', name: '紅刺棘靈', alias: 'briarling',
    level: 26, hp: 980, mp: 220, str: 66, int: 44, dex: 32, vit: 82, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'poison_spit', 'bark_shield'],
    expReward: 1180, goldReward: [320, 610],
    drops: [
      { itemId: 'redthorn_spine', chance: 0.64, minQty: 1, maxQty: 3 },
      { itemId: 'blackroot_vine', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '外環刺徑與紅刺牆間爬行的小型荊棘靈，身體由紅刺與苔皮纏成。牠會用根鬚封路，逼迫旅人走向迷宮自行選定的岔口。',
    isBoss: false,
    guardianHints: {
      creature: '紅刺棘靈會根縛與毒刺，靠近紅刺牆時先清路邊藤影。',
      treasure: '紅刺棘針多從牠背部硬刺剝落。',
      spirit: '棘靈是迷宮活牆的前段感知器。',
    },
  },

whisper_hedge_mimic: {
    id: 'whisper_hedge_mimic', name: '低語樹牆擬形', alias: 'hedgemimic',
    level: 27, hp: 900, mp: 300, str: 42, int: 78, dex: 36, vit: 70, luk: 18,
    element: 'dark',
    family: 'plant',
    skills: ['basic_attack', 'blind', 'charm', 'life_drain'],
    expReward: 1280, goldReward: [345, 660],
    drops: [
      { itemId: 'redthorn_spine', chance: 0.38, minQty: 1, maxQty: 2 },
      { itemId: 'moonvine_loop', chance: 0.14, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '低語樹牆與旋轉庭中模仿同伴聲音的樹影，枝葉會排成人臉。牠會用低語魅惑旅人走向錯路，再吸走迷路者的生命熱度。',
    isBoss: false,
    guardianHints: {
      creature: '低語樹牆擬形會魅惑與致盲，聽見熟人聲音不要立刻追。',
      treasure: '牠枝條間偶爾纏著月藤環。',
      spirit: '擬形是迷宮用記憶引路的惡意版本。',
    },
  },

poison_bloom_matron: {
    id: 'poison_bloom_matron', name: '毒花床母株', alias: 'bloommatron',
    level: 28, hp: 1050, mp: 360, str: 48, int: 86, dex: 22, vit: 84, luk: 16,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'toxic_cloud', 'poison_spit', 'nature_drain'],
    expReward: 1400, goldReward: [380, 720],
    drops: [
      { itemId: 'bloodsap_phial', chance: 0.24, minQty: 1, maxQty: 1 },
      { itemId: 'redthorn_spine', chance: 0.42, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '毒花床深處張開的巨大花株，花瓣像濕亮紫舌，根部吸著暗紅樹脂。牠會吐出甜香毒霧，讓採花者在幻覺裡慢慢走進荊棘。',
    isBoss: false,
    guardianHints: {
      creature: '毒花床母株會毒霧與吸血，花香變甜時先後撤。',
      treasure: '血脂小瓶可從牠根部滲出的暗紅汁液封存。',
      spirit: '母株是迷宮用美麗遮掩危險的典型節點。',
    },
  },

blackroot_strangler: {
    id: 'blackroot_strangler', name: '黑根絞藤', alias: 'strangler',
    level: 30, hp: 1240, mp: 240, str: 78, int: 50, dex: 24, vit: 108, luk: 12,
    element: 'dark',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'life_drain', 'shadow_bite'],
    expReward: 1580, goldReward: [425, 810],
    drops: [
      { itemId: 'blackroot_vine', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'bloodsap_phial', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '黑根隧道與活牆下方伸出的粗大絞藤，表皮像濕黑皮革。牠會纏住腳踝與手腕，吸取血液餵養迷宮內層。',
    isBoss: false,
    guardianHints: {
      creature: '黑根絞藤會根縛與吸血，黑根隧道中不要分散。',
      treasure: '黑根藤索主要從牠身上切取。',
      spirit: '絞藤是迷宮閉合力量的肌腱。',
    },
  },

spiderthorn_weaver: {
    id: 'spiderthorn_weaver', name: '蛛刺編網者', alias: 'spiderthorn',
    level: 31, hp: 980, mp: 260, str: 58, int: 58, dex: 70, vit: 58, luk: 18,
    element: 'nature',
    family: 'insect',
    skills: ['basic_attack', 'poison_web', 'web_trap', 'venomous_bite'],
    expReward: 1680, goldReward: [455, 865],
    drops: [
      { itemId: 'blackroot_vine', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'redthorn_spine', chance: 0.38, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '蛛刺窟裡以黑根和紅刺編網的多足怪，腹部掛著細小毒花。牠會把通道織成假牆，等獵物自行撞進網裡。',
    isBoss: false,
    guardianHints: {
      creature: '蛛刺編網者會網陷與毒咬，蛛刺窟入口先檢查牆面。',
      treasure: '牠的網線常混著黑根藤索與紅刺棘針。',
      spirit: '編網者讓迷宮不只會閉合，還會偽裝出口。',
    },
  },

moonvine_stag: {
    id: 'moonvine_stag', name: '月藤靜鹿', alias: 'moonstag',
    level: 32, hp: 1180, mp: 340, str: 66, int: 76, dex: 64, vit: 74, luk: 22,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'quick_dash', 'holy_light', 'root_bind'],
    expReward: 1820, goldReward: [490, 930],
    drops: [
      { itemId: 'moonvine_loop', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'bloodsap_phial', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '靜鹿空地與月藤橋上出現的銀角鹿，鹿角纏著微光月藤。牠會用柔光修補迷宮受損處，也會把闖入者困在一圈活藤之中。',
    isBoss: false,
    guardianHints: {
      creature: '月藤靜鹿會治療與根縛，若牠開始發光先打斷支援。',
      treasure: '月藤環常自然長在牠鹿角附近。',
      spirit: '靜鹿是迷宮少數不主動殺戮但仍會守路的生靈。',
    },
  },

living_wall_colossus: {
    id: 'living_wall_colossus', name: '活牆巨像', alias: 'wallcolossus',
    level: 34, hp: 1900, mp: 360, str: 96, int: 64, dex: 14, vit: 158, luk: 10,
    element: 'nature',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'root_bind', 'reflect_barrier', 'bark_shield'],
    expReward: 2200, goldReward: [590, 1120],
    drops: [
      { itemId: 'blackroot_vine', chance: 0.7, minQty: 2, maxQty: 4 },
      { itemId: 'moonvine_loop', chance: 0.28, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '活牆深處整面荊棘牆站起後形成的巨大守衛，胸口嵌著德魯伊刻石碎片。牠會用反射藤幕封住通道，迫使隊伍在狹窄路線中承受重擊。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '活牆巨像會反射與根縛，屏障期間先防守。',
      treasure: '牠體內能取得大量黑根藤索。',
      spirit: '巨像是迷宮閉合意志的主體。',
    },
  },

crooked_totem_hexer: {
    id: 'crooked_totem_hexer', name: '歪斜圖騰咒師', alias: 'totemhexer',
    level: 35, hp: 1320, mp: 520, str: 42, int: 108, dex: 34, vit: 82, luk: 24,
    element: 'dark',
    family: 'plant',
    skills: ['basic_attack', 'shadow_storm', 'death_mark', 'charm', 'life_drain'],
    expReward: 2380, goldReward: [640, 1220],
    drops: [
      { itemId: 'bloodsap_phial', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'druid_altar_seed', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '歪斜圖騰旁徘徊的古老咒師殘影，身體由黑根、血脂與碎木面具拼成。牠會用詛咒讓道路轉向，把隊伍引往內祭環。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '歪斜圖騰咒師會魅惑、死亡印記與吸血，先處理控制。',
      treasure: '牠少量持有德魯伊祭壇種的碎片。',
      spirit: '咒師是古代德魯伊儀式失衡後留下的暗面。',
    },
  },

ancient_briar_hierophant: {
    id: 'ancient_briar_hierophant', name: '古荊德魯伊祭司', alias: 'briarhierophant',
    level: 38, hp: 2600, mp: 720, str: 86, int: 126, dex: 36, vit: 146, luk: 28,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'root_bind', 'shadow_storm', 'nature_drain', 'reflect_barrier', 'death_mark'],
    expReward: 3300, goldReward: [900, 1700],
    drops: [
      { itemId: 'druid_altar_seed', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'moonvine_loop', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'bloodsap_phial', chance: 0.6, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '古代德魯伊祭壇中甦醒的荊棘祭司，半身仍是人形，半身已長成黑根與月藤。牠維持著迷宮閉合的古老誓約，會把所有出口重新編進祭壇根系。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '古荊德魯伊祭司會根縛、反射、吸血與死亡印記，屏障期間不要貪攻。',
      treasure: '牠必定掉落德魯伊祭壇種，是荊棘迷宮核心證明物。',
      spirit: '祭司是迷宮中央祭壇與活牆誓約的共同核心。',
    },
  },

ashroad_sparkling: {
    id: 'ashroad_sparkling', name: '灰路火星群', alias: 'sparkswarm',
    level: 22, hp: 760, mp: 260, str: 34, int: 72, dex: 58, vit: 48, luk: 16,
    element: 'fire',
    family: 'beast',
    skills: ['basic_attack', 'fire_bolt', 'quick_dash', 'blind'],
    expReward: 980, goldReward: [260, 500],
    drops: [
      { itemId: 'emberglass_shard', chance: 0.58, minQty: 1, maxQty: 3 },
      { itemId: 'cinderbite_salve', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '焦炭路與灰燼入口門上成群游動的小火星，遠看像被風吹起的灰塵。牠們會突然聚成灼亮火線，燒穿靴底並刺瞎沒有遮眼的旅人。',
    isBoss: false,
    guardianHints: {
      creature: '灰路火星群聚亮時會致盲，先離開灰面火線。',
      treasure: '牠們熄滅後常留下燼玻碎片。',
      spirit: '火星群是餘燼邊境仍未冷卻的表層呼吸。',
    },
  },

cinder_trench_stalker: {
    id: 'cinder_trench_stalker', name: '煙溝伏行者', alias: 'trenchstalker',
    level: 23, hp: 860, mp: 180, str: 62, int: 34, dex: 70, vit: 54, luk: 18,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'smoke_bomb', 'slash', 'quick_dash'],
    expReward: 1080, goldReward: [285, 540],
    drops: [
      { itemId: 'ashline_banner_scrap', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'emberglass_shard', chance: 0.24, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '躲在煙溝與焦黑里程碑陰影下的邊境伏兵，披著被火山灰染白的破斗篷。牠們不是正規軍，而是被災後火線養成的掠食者。',
    isBoss: false,
    guardianHints: {
      creature: '煙溝伏行者會用煙幕遮斷視線，煙溝內不要追單影。',
      treasure: '牠們身上常纏著灰線旗布。',
      spirit: '伏行者代表戰場殘民被火山灰吞沒後留下的惡意。',
    },
  },

glass_ash_lizard: {
    id: 'glass_ash_lizard', name: '玻灰蜥', alias: 'ashlizard',
    level: 24, hp: 920, mp: 220, str: 58, int: 48, dex: 52, vit: 68, luk: 12,
    element: 'fire',
    family: 'beast',
    skills: ['basic_attack', 'fire_bolt', 'poison_bite', 'stone_skin'],
    expReward: 1180, goldReward: [310, 590],
    drops: [
      { itemId: 'emberglass_shard', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'slag_iron_clinker', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '玻璃灰原上低伏爬行的火成蜥蜴，背鱗像冷卻後重新裂開的黑玻璃。牠會把身體埋進灰裡，只露出一排反光脊刺等待獵物靠近。',
    isBoss: false,
    guardianHints: {
      creature: '玻灰蜥會硬化鱗片，背脊反光時先等牠翻身。',
      treasure: '牠的鱗片可剝成燼玻碎片。',
      spirit: '玻灰蜥是火山灰與荒地生物融合出的穩定族群。',
    },
  },

ember_crack_worm: {
    id: 'ember_crack_worm', name: '熔裂燼蟲', alias: 'emberworm',
    level: 25, hp: 1080, mp: 120, str: 76, int: 24, dex: 28, vit: 92, luk: 10,
    element: 'fire',
    family: 'insect',
    skills: ['basic_attack', 'fire_breath', 'stone_slam', 'charge'],
    expReward: 1300, goldReward: [345, 650],
    drops: [
      { itemId: 'lava_fragment', chance: 0.48, minQty: 1, maxQty: 3 },
      { itemId: 'slag_iron_clinker', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '熔裂縫和蟲道裡鑽出的粗大燼蟲，口器像燒紅的鐵鉗。牠們沿地下熱脈穿行，會在灰面隆起前一瞬間撞出地表。',
    isBoss: false,
    guardianHints: {
      creature: '熔裂燼蟲衝撞前地面會鼓起，看到灰線隆起就散開。',
      treasure: '牠們腹節裡常卡著渣鐵熔塊。',
      spirit: '燼蟲是火山餘熱仍在地下移動的證據。',
    },
  },

burnt_banner_raider: {
    id: 'burnt_banner_raider', name: '焦旗掠兵', alias: 'ashraider',
    level: 26, hp: 980, mp: 160, str: 78, int: 30, dex: 56, vit: 72, luk: 16,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'slash', 'charge', 'smoke_bomb'],
    expReward: 1420, goldReward: [380, 720],
    drops: [
      { itemId: 'ashline_banner_scrap', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'cinderbite_salve', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '戰營殘址與倒旗坡間出沒的灰甲掠兵，肩上插著燒斷的軍旗。牠們熟悉舊補給線，會用假撤退路標把隊伍帶進火線。',
    isBoss: false,
    guardianHints: {
      creature: '焦旗掠兵會煙幕後衝鋒，旗影倒向異常時多半是伏擊。',
      treasure: '灰線旗布大多從牠們背旗上拆下。',
      spirit: '掠兵是邊境戰線崩壞後殘存的人禍。',
    },
  },

bonekiln_ashguard: {
    id: 'bonekiln_ashguard', name: '骨窯灰衛', alias: 'ashguard',
    level: 28, hp: 1220, mp: 240, str: 82, int: 46, dex: 26, vit: 104, luk: 10,
    element: 'fire',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'fire_bolt', 'stone_skin'],
    expReward: 1680, goldReward: [450, 850],
    drops: [
      { itemId: 'slag_iron_clinker', chance: 0.46, minQty: 1, maxQty: 3 },
      { itemId: 'ashline_banner_scrap', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '骨窯隘口裡由焦骨、渣鐵和灰泥堆成的守衛，胸腔仍有火星緩慢起落。牠們守著災後焚化坑，不讓任何人翻找戰死者遺物。',
    isBoss: false,
    guardianHints: {
      creature: '骨窯灰衛硬化時很難擊穿，等火星降暗再集中攻擊。',
      treasure: '牠胸甲常嵌著渣鐵熔塊。',
      spirit: '灰衛把戰場殘骸誤認成仍需守護的軍庫。',
    },
  },

slagplate_colossus: {
    id: 'slagplate_colossus', name: '渣甲巨像', alias: 'slagcolossus',
    level: 30, hp: 1850, mp: 280, str: 104, int: 42, dex: 14, vit: 154, luk: 8,
    element: 'fire',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'stone_skin', 'reflect_barrier', 'fire_breath'],
    expReward: 2180, goldReward: [590, 1120],
    drops: [
      { itemId: 'slag_iron_clinker', chance: 0.74, minQty: 2, maxQty: 4 },
      { itemId: 'emberglass_shard', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '渣鐵橋與邊堡外殼附近站起的熔渣巨像，外殼像多層燒壞甲板。牠每一步都會把灰面壓成赤亮裂紋，是邊境火線最明顯的重型威脅。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '渣甲巨像會反射與重砸，屏障亮起時先停手。',
      treasure: '大量渣鐵熔塊可從牠破裂甲片取得。',
      spirit: '巨像是邊堡與熔渣橋被火山重新塑形後的殘骸。',
    },
  },

border_forge_sentinel: {
    id: 'border_forge_sentinel', name: '邊爐熔衛', alias: 'forgesentinel',
    level: 31, hp: 1580, mp: 440, str: 86, int: 88, dex: 22, vit: 118, luk: 12,
    element: 'fire',
    family: 'construct',
    skills: ['basic_attack', 'fire_bolt', 'fire_breath', 'reflect_barrier', 'stone_slam'],
    expReward: 2360, goldReward: [640, 1210],
    drops: [
      { itemId: 'slag_iron_clinker', chance: 0.6, minQty: 1, maxQty: 3 },
      { itemId: 'cinderbite_salve', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '餘燼鍛台裡尚未停工的熔爐守衛，身體由鐵框、灰炭與半熔工具拼成。牠會把闖入者判定為偷取軍需的敵軍，並重新點燃整座鍛台。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '邊爐熔衛會連續噴火與反射，鍛台升溫時先拉開距離。',
      treasure: '牠保管渣鐵熔塊與燼咬藥膏。',
      spirit: '熔衛保留著邊境軍需系統失控後的最後指令。',
    },
  },

heartfire_breach_drake: {
    id: 'heartfire_breach_drake', name: '心火缺口亞龍', alias: 'heartdrake',
    level: 34, hp: 2550, mp: 620, str: 112, int: 104, dex: 42, vit: 144, luk: 24,
    element: 'fire',
    family: 'dragon',
    skills: ['basic_attack', 'fire_breath', 'meteor', 'reflect_barrier', 'charge', 'death_mark'],
    expReward: 3200, goldReward: [880, 1660],
    drops: [
      { itemId: 'heartfire_border_seal', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'emberglass_shard', chance: 0.76, minQty: 2, maxQty: 5 },
      { itemId: 'cinderbite_salve', chance: 0.54, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '盤踞心火缺口的赤黑亞龍，雙翼像被火山灰磨破的軍旗，胸口嵌著仍在跳動的邊境火印。牠不是純血龍，而是龍印脊熱流、邊堡戰火與火山餘燼共同養出的災厄。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '心火缺口亞龍會隕火、衝鋒與死亡印記，反射屏障期間不要硬打。',
      treasure: '牠必定掉落心火邊境印，是餘燼邊境火線核心證物。',
      spirit: '亞龍是火山與戰爭在邊境交會後誕生的活火線。',
    },
  },

rib_shoal_skeleton: {
    id: 'rib_shoal_skeleton', name: '肋灘骸兵', alias: 'ribskeleton',
    level: 28, hp: 980, mp: 160, str: 70, int: 34, dex: 36, vit: 82, luk: 10,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'spectral_slash', 'ice_armor'],
    expReward: 1580, goldReward: [420, 790],
    drops: [
      { itemId: 'reefbone_splinter', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'tidebell_clapper', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '肋骨淺灘與白骨潮門附近列隊巡行的骸兵，骨甲被冷潮磨得像礁石。牠們會在退潮露出的骨脊上守路，把誤入者推向下一波冰潮。',
    isBoss: false,
    guardianHints: {
      creature: '肋灘骸兵會用冰甲擋下第一輪攻勢，等護甲裂開再集中攻擊。',
      treasure: '牠們身上常剝落礁骨裂片。',
      spirit: '骸兵是船員與礁獸殘骸被同一場退潮綁在一起的結果。',
    },
  },

wreckdeck_cutthroat: {
    id: 'wreckdeck_cutthroat', name: '裂板斷喉海盜', alias: 'cutthroat',
    level: 29, hp: 900, mp: 220, str: 72, int: 42, dex: 76, vit: 58, luk: 22,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'slash', 'shadow_dash', 'smoke_bomb'],
    expReward: 1680, goldReward: [450, 860],
    drops: [
      { itemId: 'black_coral_hook', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'drowned_treasure_map', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '裂木甲板與沉船船首間伏擊旅人的不死海盜，喉骨上仍插著生前的短刀。牠們熟悉每塊會翻落的甲板，常把尋寶者逼向破洞。',
    isBoss: false,
    guardianHints: {
      creature: '裂板斷喉海盜會突進與煙幕，甲板吱響時不要追影。',
      treasure: '牠們腰帶上常掛著黑珊瑚鉤。',
      spirit: '斷喉海盜是守寶詛咒最底層的巡邏者。',
    },
  },

coldtide_drowned: {
    id: 'coldtide_drowned', name: '冷潮溺者', alias: 'coldtidedrowned',
    level: 30, hp: 1040, mp: 260, str: 58, int: 64, dex: 32, vit: 90, luk: 12,
    element: 'ice',
    family: 'aquatic',
    skills: ['basic_attack', 'water_spear', 'frost_nova', 'soul_drain'],
    expReward: 1800, goldReward: [480, 910],
    drops: [
      { itemId: 'reefbone_splinter', chance: 0.46, minQty: 1, maxQty: 2 },
      { itemId: 'tideglass_shard', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '冷潮池與沉沒船艙裡爬出的溺亡者，肺腔灌滿冰水，說話時只冒出破碎泡沫。牠們會抓住活人的腳踝，把體溫拖進退潮後留下的深坑。',
    isBoss: false,
    guardianHints: {
      creature: '冷潮溺者會冰霜爆發與吸魂，池邊戰鬥要保持距離。',
      treasure: '牠們骨縫裡常卡著礁骨與潮玻璃碎片。',
      spirit: '溺者是白骨礁每次漲潮後留下的失蹤名單。',
    },
  },

icekelp_strangler: {
    id: 'icekelp_strangler', name: '冰藻縛手', alias: 'icekelp',
    level: 31, hp: 1120, mp: 300, str: 54, int: 74, dex: 28, vit: 96, luk: 14,
    element: 'ice',
    family: 'undead',
    skills: ['basic_attack', 'root_bind', 'frost_nova', 'nature_drain'],
    expReward: 1920, goldReward: [515, 980],
    drops: [
      { itemId: 'black_coral_hook', chance: 0.34, minQty: 1, maxQty: 2 },
      { itemId: 'tidebell_clapper', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '冰藻纏灘與黑珊瑚切口裡伸出的深綠藻手，外層覆著薄冰，根部纏滿小骨。牠們會假裝成退潮後的海草，等腳步靠近再收緊。',
    isBoss: false,
    guardianHints: {
      creature: '冰藻縛手會束縛與冰爆，先清除腳邊藻影。',
      treasure: '黑珊瑚鉤常被冰藻包在根部。',
      spirit: '冰藻把沉船、黑珊瑚與溺者遺骨編成同一片陷阱。',
    },
  },

black_coral_lurker: {
    id: 'black_coral_lurker', name: '黑珊瑚潛伏者', alias: 'corallurker',
    level: 32, hp: 980, mp: 360, str: 48, int: 90, dex: 64, vit: 62, luk: 20,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'poison_spit', 'blind', 'life_drain'],
    expReward: 2060, goldReward: [550, 1040],
    drops: [
      { itemId: 'black_coral_hook', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'drowned_treasure_map', chance: 0.14, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '黑珊瑚切口深處緩慢爬行的暗色怪物，身體像珊瑚與人骨拼成的海盜影子。牠會用毒霧遮住礁鐘方向，讓隊伍錯過安全退潮。',
    isBoss: false,
    guardianHints: {
      creature: '黑珊瑚潛伏者會致盲與吸血，黑霧變甜時先解毒。',
      treasure: '完整的黑珊瑚鉤多從牠背脊切下。',
      spirit: '潛伏者是守寶詛咒在黑珊瑚上的生長形態。',
    },
  },

reefbell_cultist: {
    id: 'reefbell_cultist', name: '礁鐘潮祭司', alias: 'bellcultist',
    level: 33, hp: 1080, mp: 520, str: 40, int: 104, dex: 30, vit: 76, luk: 22,
    element: 'dark',
    family: 'aquatic',
    skills: ['basic_attack', 'frost_nova', 'death_mark', 'soul_drain', 'blind'],
    expReward: 2220, goldReward: [595, 1130],
    drops: [
      { itemId: 'tidebell_clapper', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'drowned_treasure_map', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '礁鐘柱與船長墓旁低聲祈潮的亡靈祭司，手中搖著沒有鐘身的金屬舌片。牠們用鐘聲延後退潮，讓活人困在逐漸回升的冷水裡。',
    isBoss: false,
    guardianHints: {
      creature: '礁鐘潮祭司會死亡印記與吸魂，先打斷鐘聲。',
      treasure: '礁鐘舌片是牠們施法的核心。',
      spirit: '潮祭司把海盜守財誓約偽裝成潮汐儀式。',
    },
  },

whalebone_warden: {
    id: 'whalebone_warden', name: '鯨骨守衛', alias: 'whalewarden',
    level: 34, hp: 1680, mp: 320, str: 96, int: 50, dex: 22, vit: 138, luk: 10,
    element: 'ice',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'ice_armor', 'stone_slam', 'water_spear'],
    expReward: 2500, goldReward: [670, 1270],
    drops: [
      { itemId: 'reefbone_splinter', chance: 0.76, minQty: 2, maxQty: 4 },
      { itemId: 'tidebell_clapper', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '鯨骨拱與白骨橋上站起的巨大骨衛，身軀由巨獸肋骨、船釘與冰潮鹽殼組成。牠會把骨橋當成身體的一部分，震碎站位錯誤的隊伍。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '鯨骨守衛會冰甲與重砸，骨橋震動時立刻換位。',
      treasure: '牠身上能取得大量礁骨裂片。',
      spirit: '守衛是巨獸骨架被海盜誓約喚醒後的門閂。',
    },
  },

ghost_anchor_dragger: {
    id: 'ghost_anchor_dragger', name: '幽錨拖行者', alias: 'anchordragger',
    level: 35, hp: 1520, mp: 420, str: 88, int: 78, dex: 34, vit: 112, luk: 16,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'phantom_charge', 'soul_drain', 'ethereal_shield', 'death_mark'],
    expReward: 2700, goldReward: [720, 1370],
    drops: [
      { itemId: 'black_coral_hook', chance: 0.48, minQty: 1, maxQty: 3 },
      { itemId: 'drowned_treasure_map', chance: 0.28, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '幽靈錨旁拖著巨大錨鏈前進的亡靈水手，錨尖每次落地都會讓船骸發出呻吟。牠會用錨鏈把隊伍拉回錯誤潮位。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '幽錨拖行者會衝鋒與護盾，錨鏈拉直時避開直線。',
      treasure: '牠常持有溺寶殘圖的一角。',
      spirit: '拖行者代表船永遠無法離礁的詛咒。',
    },
  },

lichlight_reef_sage: {
    id: 'lichlight_reef_sage', name: '巫光礁賢者', alias: 'reefsage',
    level: 36, hp: 1320, mp: 720, str: 34, int: 126, dex: 32, vit: 82, luk: 24,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'ice_storm', 'soul_drain', 'death_mark', 'reflect_barrier'],
    expReward: 2920, goldReward: [780, 1480],
    drops: [
      { itemId: 'tidebell_clapper', chance: 0.46, minQty: 1, maxQty: 2 },
      { itemId: 'drowned_treasure_map', chance: 0.34, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '巫光礁上浮現的沉船術士殘魂，身後漂著青白磷火與破碎航海圖。牠研究如何讓寶庫永遠停在退潮前一刻，並把闖入者寫進失蹤船名錄。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '巫光礁賢者會冰風暴、反射與死亡印記，屏障期間先清小怪。',
      treasure: '牠保存較完整的溺寶殘圖。',
      spirit: '賢者是守寶詛咒的記錄者與潮汐計算者。',
    },
  },

drowned_vault_captain: {
    id: 'drowned_vault_captain', name: '溺亡寶庫船長', alias: 'vaultcaptain',
    level: 38, hp: 2850, mp: 680, str: 118, int: 108, dex: 48, vit: 150, luk: 28,
    element: 'dark',
    family: 'aquatic',
    skills: ['basic_attack', 'spectral_slash', 'ice_storm', 'death_mark', 'ethereal_shield', 'soul_drain'],
    expReward: 3800, goldReward: [1050, 1980],
    drops: [
      { itemId: 'vault_captain_seal', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'drowned_treasure_map', chance: 0.78, minQty: 1, maxQty: 2 },
      { itemId: 'black_coral_hook', chance: 0.62, minQty: 1, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '溺亡寶庫深處守著財寶的海盜船長，帽沿掛滿貝殼、骨幣與黑銀印章。牠每次拔刀都會讓寶庫水位上升，彷彿整艘沉船仍聽從牠的命令。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '溺亡寶庫船長會冰風暴、吸魂與幽盾，水位升高時先保命。',
      treasure: '牠必定掉落寶庫船長印，是白骨礁沉船寶庫的核心憑證。',
      spirit: '船長是守財誓約與退潮詛咒共同形成的主體。',
    },
  },

frostwake_bone_drake: {
    id: 'frostwake_bone_drake', name: '霜浪骨龍', alias: 'frostbonedrake',
    level: 40, hp: 3300, mp: 780, str: 128, int: 118, dex: 40, vit: 168, luk: 24,
    element: 'ice',
    family: 'undead',
    skills: ['basic_attack', 'ice_storm', 'frost_nova', 'bone_strike', 'reflect_barrier', 'death_mark'],
    expReward: 4300, goldReward: [1180, 2250],
    drops: [
      { itemId: 'vault_captain_seal', chance: 0.54, minQty: 1, maxQty: 1 },
      { itemId: 'reefbone_splinter', chance: 0.86, minQty: 3, maxQty: 6 },
      { itemId: 'tidebell_clapper', chance: 0.48, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '霜浪洞與溺亡寶庫之間甦醒的巨獸骨龍，肋骨內部灌滿青白潮光。牠不是活龍，而是白骨礁本身對盜墓者的回應，振翼時會把退潮重新推回洞內。',
    isBoss: true,
    isElite: true,
    respawnTime: 2400,
    guardianHints: {
      creature: '霜浪骨龍會冰風暴、反射與死亡印記，潮光灌滿肋骨時不要站在正面。',
      treasure: '牠掉落大量礁骨裂片，也可能帶有寶庫船長印。',
      spirit: '骨龍是巨獸骨礁與沉船詛咒融合出的最終守門者。',
    },
  },

blue_silt_toad: {
    id: 'blue_silt_toad', name: '藍泥蟾', alias: 'bluetoad',
    level: 15, hp: 520, mp: 120, str: 36, int: 28, dex: 22, vit: 44, luk: 10,
    element: 'nature',
    family: 'ooze',
    skills: ['basic_attack', 'poison_spit', 'tongue_lash'],
    expReward: 620, goldReward: [150, 290],
    drops: [
      { itemId: 'blue_silt_ore', chance: 0.56, minQty: 1, maxQty: 3 },
      { itemId: 'sapphire_lotus_petal', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '入口採區與藍葦床常見的小型湖蟾，背上沾滿藍灰礦泥。牠受驚時會吐出帶麻痺感的黏液，讓採集者一腳踩進軟泥。',
    isBoss: false,
    guardianHints: {
      creature: '藍泥蟾會噴毒與舌擊，採泥時先清理水邊響動。',
      treasure: '牠背上的泥殼常混有藍泥礦砂。',
      spirit: '藍泥蟾是藍寶湖淺層礦脈最常見的生態指標。',
    },
  },

glassfish_swarm: {
    id: 'glassfish_swarm', name: '玻魚群', alias: 'glassfish',
    level: 16, hp: 460, mp: 180, str: 24, int: 52, dex: 78, vit: 28, luk: 18,
    element: 'ice',
    family: 'aquatic',
    skills: ['basic_attack', 'water_spear', 'blind', 'quick_dash'],
    expReward: 700, goldReward: [170, 330],
    drops: [
      { itemId: 'glassfish_scale', chance: 0.72, minQty: 1, maxQty: 4 },
      { itemId: 'blue_silt_ore', chance: 0.18, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '鏡淺灘與玻魚灣中閃爍游動的透明魚群，鱗片能折射湖底藍光。牠們會突然集體轉向，讓水面亮成刺眼鏡片。',
    isBoss: false,
    guardianHints: {
      creature: '玻魚群會致盲，水面忽然發亮時先背光。',
      treasure: '玻魚鱗片是湖區照明與折射材料。',
      spirit: '魚群把湖底礦光帶到水面，是安全採集的早期訊號。',
    },
  },

sapphire_reed_sprite: {
    id: 'sapphire_reed_sprite', name: '藍葦水靈', alias: 'reedsprite',
    level: 18, hp: 620, mp: 260, str: 26, int: 68, dex: 50, vit: 42, luk: 20,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'water_spear', 'nature_drain', 'root_bind'],
    expReward: 820, goldReward: [200, 390],
    drops: [
      { itemId: 'sapphire_lotus_petal', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'lakebreath_phial', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '藍葦床與睡蓮藏點間浮動的小水靈，髮絲像細長藍葦。牠們會保護湖畔草藥，將貪採者纏在水草根裡。',
    isBoss: false,
    guardianHints: {
      creature: '藍葦水靈會根縛與吸取生命，採花前先看水草方向。',
      treasure: '藍蓮花瓣多由牠們照料的花叢取得。',
      spirit: '水靈維持湖岸植物與礦光之間的平衡。',
    },
  },

vein_crystal_lizard: {
    id: 'vein_crystal_lizard', name: '脈晶蜥', alias: 'veinlizard',
    level: 20, hp: 760, mp: 160, str: 56, int: 42, dex: 52, vit: 64, luk: 12,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'poison_bite', 'ice_armor', 'quick_dash'],
    expReward: 980, goldReward: [240, 460],
    drops: [
      { itemId: 'blue_silt_ore', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'glassfish_scale', chance: 0.24, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '湖底礦脈小徑與藍寶礦脈口附近出沒的晶鱗蜥蜴，背部結著藍色細晶。牠們會沿礦線奔跑，咬斷採集者的礦袋繩。',
    isBoss: false,
    guardianHints: {
      creature: '脈晶蜥速度快，冰甲亮起時先等牠衝過頭。',
      treasure: '牠背鱗縫中常有藍泥礦砂。',
      spirit: '脈晶蜥是湖底礦脈開始外露的生物反應。',
    },
  },

mirror_shallows_serpent: {
    id: 'mirror_shallows_serpent', name: '鏡淺湖蛇', alias: 'mirrorserpent',
    level: 21, hp: 880, mp: 220, str: 64, int: 54, dex: 58, vit: 66, luk: 14,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'water_spear', 'poison_bite', 'frost_nova'],
    expReward: 1100, goldReward: [275, 520],
    drops: [
      { itemId: 'glassfish_scale', chance: 0.42, minQty: 1, maxQty: 3 },
      { itemId: 'lakebreath_phial', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '水袋凹潭與鏡淺灘中的長身湖蛇，鱗片會映出錯位倒影。牠們常在採集者低頭看水色時從倒影另一側咬出。',
    isBoss: false,
    guardianHints: {
      creature: '鏡淺湖蛇會冰爆與毒咬，不要只盯著水面倒影。',
      treasure: '牠的鱗片可與玻魚鱗片混製折射粉。',
      spirit: '湖蛇讓藍寶湖的清澈水面保有掠食壓力。',
    },
  },

blue_lode_golem: {
    id: 'blue_lode_golem', name: '藍脈晶魔像', alias: 'bluegolem',
    level: 23, hp: 1320, mp: 260, str: 84, int: 58, dex: 18, vit: 124, luk: 8,
    element: 'ice',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'ice_armor', 'reflect_barrier'],
    expReward: 1500, goldReward: [380, 720],
    drops: [
      { itemId: 'blue_silt_ore', chance: 0.74, minQty: 2, maxQty: 5 },
      { itemId: 'blueheart_lode_core', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '遺物淺坑、藍寶礦脈與深脈窗口中站起的晶石魔像，胸口有一道如湖水般流動的藍脈。牠們會封住過度開採的礦點。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '藍脈晶魔像會反射與冰甲，採礦隊要等屏障消退再打。',
      treasure: '牠身上能取得大量藍泥礦砂。',
      spirit: '魔像是湖底礦脈對採集壓力的防衛反應。',
    },
  },

calmwater_spring_guardian: {
    id: 'calmwater_spring_guardian', name: '靜泉守靈', alias: 'springguardian',
    level: 24, hp: 1180, mp: 440, str: 52, int: 92, dex: 42, vit: 88, luk: 18,
    element: 'nature',
    family: 'humanoid',
    skills: ['basic_attack', 'water_spear', 'holy_light', 'nature_drain', 'root_bind'],
    expReward: 1680, goldReward: [425, 810],
    drops: [
      { itemId: 'sapphire_lotus_petal', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'lakebreath_phial', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '礦泉與靜水洞中出現的湖心守靈，身形像披著水紗的採集者。牠會治癒受損水草，也會把貪婪礦鎬拖進泉眼。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '靜泉守靈會治療與根縛，先處理支援能力。',
      treasure: '湖息小瓶常由牠守護的泉眼封存。',
      spirit: '守靈代表藍寶湖不是死礦，而是活的水脈。',
    },
  },

blueheart_lode_spirit: {
    id: 'blueheart_lode_spirit', name: '藍心礦靈', alias: 'blueheart',
    level: 25, hp: 1900, mp: 620, str: 70, int: 112, dex: 38, vit: 128, luk: 24,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'ice_storm', 'water_spear', 'reflect_barrier', 'holy_light'],
    expReward: 2300, goldReward: [620, 1180],
    drops: [
      { itemId: 'blueheart_lode_core', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'blue_silt_ore', chance: 0.8, minQty: 3, maxQty: 6 },
      { itemId: 'lakebreath_phial', chance: 0.42, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '藍心聖窟深處由湖底礦脈與水精靈傳說凝成的礦靈，核心像一顆在水中跳動的藍寶石。牠會用冰光封住過度採掘的隊伍。',
    isBoss: true,
    isElite: true,
    respawnTime: 1500,
    guardianHints: {
      creature: '藍心礦靈會冰風暴、反射與治療，屏障期間先穩住血量。',
      treasure: '牠必定掉落藍心礦核，是湖底礦脈仍有生命反應的證物。',
      spirit: '礦靈是藍寶湖採集線的核心守護者。',
    },
  },

arena_training_dummy: {
    id: 'arena_training_dummy', name: '強化訓練木人', alias: 'arenadummy',
    level: 10, hp: 720, mp: 0, str: 38, int: 1, dex: 10, vit: 70, luk: 1,
    element: 'none',
    family: 'construct',
    skills: ['basic_attack', 'stone_skin'],
    expReward: 420, goldReward: [80, 150],
    drops: [
      { itemId: 'practice_wrap', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'arena_entry_token', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '熱身沙地使用的配重木人，外層包著舊皮甲與沙袋，胸口掛著裂痕木牌。受擊後會以機簧反彈，逼近者必須守住正面破綻。',
    isBoss: false,
    guardianHints: {
      creature: '強化訓練木人防禦高，適合測試輸出節奏。',
      treasure: '訓練場旁常能撿到練習護帶。',
      spirit: '木人代表競技城區最低風險的戰鬥入口。',
    },
  },

arena_sand_brawler: {
    id: 'arena_sand_brawler', name: '沙地拳鬥士', alias: 'brawler',
    level: 14, hp: 880, mp: 80, str: 68, int: 18, dex: 42, vit: 76, luk: 12,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'charge', 'power_strike'],
    expReward: 720, goldReward: [160, 310],
    drops: [
      { itemId: 'practice_wrap', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'betting_house_slip', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '熱身沙地與西側決鬥圈常見的拳鬥士，手臂纏滿厚布，腳步故意踩得很重。牠們擅長短距離衝撞，把觀眾的歡呼變成壓力。',
    isBoss: false,
    guardianHints: {
      creature: '沙地拳鬥士衝撞前會壓低肩膀，側移可避開暈擊。',
      treasure: '牠們常攜帶練習護帶與下注憑條。',
      spirit: '拳鬥士讓競技城區有低階可控的近戰試煉。',
    },
  },

arena_blade_duelist: {
    id: 'arena_blade_duelist', name: '鋼刃決鬥者', alias: 'duelist',
    level: 18, hp: 980, mp: 160, str: 76, int: 28, dex: 70, vit: 62, luk: 18,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'slash', 'quick_dash', 'counter_stance'],
    expReward: 980, goldReward: [240, 460],
    drops: [
      { itemId: 'referee_seal', chance: 0.22, minQty: 1, maxQty: 1 },
      { itemId: 'practice_wrap', chance: 0.28, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '東側決鬥圈與武器檢查處登錄的正式決鬥者，刀背貼著裁判封印。牠們出手乾淨，專門懲罰亂用技能的對手。',
    isBoss: false,
    guardianHints: {
      creature: '鋼刃決鬥者會反擊架勢，看到刀尖下沉時先停手。',
      treasure: '合規武器上可取得裁判封印。',
      spirit: '決鬥者代表正式規則下的單挑壓力。',
    },
  },

arena_shield_breaker: {
    id: 'arena_shield_breaker', name: '破盾重衛', alias: 'shieldbreaker',
    level: 22, hp: 1320, mp: 120, str: 92, int: 22, dex: 24, vit: 118, luk: 10,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'stone_slam', 'shield_breaker', 'stone_skin'],
    expReward: 1280, goldReward: [320, 610],
    drops: [
      { itemId: 'referee_seal', chance: 0.28, minQty: 1, maxQty: 2 },
      { itemId: 'arena_entry_token', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '護甲架巷常見的重裝對手，塔盾邊緣刻著裂盾記號，盔甲內傳出低沉呼吸。牠們一步步壓縮空間，以重盾逼開敵人的防線。',
    isBoss: false,
    guardianHints: {
      creature: '破盾重衛會破防與重砸，先繞背再輸出。',
      treasure: '盾面常貼著裁判封印。',
      spirit: '重衛讓競技區補上防禦型訓練對手。',
    },
  },

arena_rookie_mage: {
    id: 'arena_rookie_mage', name: '見習場術士', alias: 'rookiemage',
    level: 24, hp: 840, mp: 420, str: 26, int: 92, dex: 40, vit: 54, luk: 18,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'fire_bolt', 'ice_storm', 'blind'],
    expReward: 1420, goldReward: [360, 680],
    drops: [
      { itemId: 'betting_house_slip', chance: 0.22, minQty: 1, maxQty: 1 },
      { itemId: 'practice_wrap', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '戰術桌與看台試煉中登場的見習術士，法杖頂端套著防爆銅環。牠們用有限威力的元素法術逼迫隊伍練習走位。',
    isBoss: false,
    guardianHints: {
      creature: '見習場術士會致盲與範圍法術，先打斷施法。',
      treasure: '術士常握有下注憑條。',
      spirit: '見習術士讓競技區的法術訓練有合理來源。',
    },
  },

arena_chain_beast: {
    id: 'arena_chain_beast', name: '鎖鏈鬥獸', alias: 'chainbeast',
    level: 26, hp: 1500, mp: 120, str: 106, int: 20, dex: 44, vit: 120, luk: 12,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'charge', 'poison_bite', 'power_strike'],
    expReward: 1620, goldReward: [410, 780],
    drops: [
      { itemId: 'practice_wrap', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'referee_seal', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '冠軍牆與下層看台之間放出的受訓鬥獸，脖頸仍拖著短鎖。牠的任務不是殺死參賽者，而是在安全規則內製造真正恐懼。',
    isBoss: false,
    guardianHints: {
      creature: '鎖鏈鬥獸衝鋒後會短暫停頓，把握反擊窗口。',
      treasure: '鬥獸籠邊常有練習護帶與裁判封印。',
      spirit: '鬥獸提供競技場中階壓力與觀眾戲劇性。',
    },
  },
};
