import type { MonsterDef } from '@game/shared';

export const EXPANSION_MONSTERS_PART_007: Record<string, MonsterDef> = {
moonflower_mantis: {
    id: 'moonflower_mantis', name: '月花螳螂', alias: 'moonmantis',
    level: 12, hp: 260, mp: 54, str: 34, int: 18, dex: 38, vit: 22, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'quick_dash', 'slash', 'backstab'],
    expReward: 155, goldReward: [42, 82],
    drops: [
      { itemId: 'moonflower_petal', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'firefly_lantern_gland', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '伏在夜花小林與月花岸花叢間的淡銀螳螂，前肢邊緣像被月光磨亮的短刃。牠會利用花瓣反光隱藏身形，等獵物伸手採花時突然切入。',
    isBoss: false,
    guardianHints: {
      creature: '月花螳螂擅長突襲，花叢突然落瓣時代表牠已經靠近。',
      treasure: '牠守著品質最好的月花瓣，也會吞食螢燈群留下的光腺。',
      spirit: '螳螂是月花小林用來阻止過度採集的自然刀刃。',
    },
  },

blackwater_leech_bloom: {
    id: 'blackwater_leech_bloom', name: '黑水水蛭花', alias: 'leechbloom',
    level: 13, hp: 300, mp: 86, str: 24, int: 34, dex: 16, vit: 34, luk: 12,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'life_drain', 'poison_bite', 'toxic_cloud'],
    expReward: 185, goldReward: [50, 98],
    drops: [
      { itemId: 'dreamwater_dew', chance: 0.32, minQty: 1, maxQty: 1 },
      { itemId: 'moonflower_petal', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '黑水流與半月池邊開出的暗紫色水花，花蕊其實是一圈吸血水蛭。牠會用甜香吸引旅人靠近，再從水下伸出細長吸盤拖住腳踝。',
    isBoss: false,
    guardianHints: {
      creature: '黑水水蛭花會吸血並放毒，血線低時不要貪採水邊花。',
      treasure: '成熟花杯內常凝著夢水露。',
      spirit: '牠是月光濕地美麗與危險並存的典型生態。',
    },
  },

fae_ring_trickster: {
    id: 'fae_ring_trickster', name: '妖光環戲法師', alias: 'faetrickster',
    level: 14, hp: 340, mp: 150, str: 18, int: 46, dex: 36, vit: 24, luk: 24,
    element: 'light',
    family: 'humanoid',
    skills: ['basic_attack', 'blind', 'holy_light', 'quick_dash', 'steal'],
    expReward: 230, goldReward: [62, 120],
    drops: [
      { itemId: 'firefly_lantern_gland', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'dreamwater_dew', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '妖光環中跳舞的濕地妖精術士，披著螢光苔衣，笑聲會從三個方向同時傳來。牠喜歡把敵人誘進光圈，再偷走補給或用白光遮住退路。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '妖光環戲法師會偷竊與致盲，進入妖光環前先整理背包與補給。',
      treasure: '牠收集螢燈腺與夢水露當作戲法材料。',
      spirit: '戲法師不是純粹惡意，而是在測試旅人是否尊重濕地規矩。',
    },
  },

white_reed_stalker: {
    id: 'white_reed_stalker', name: '白蘆迷道巡獵者', alias: 'reedstalker',
    level: 15, hp: 430, mp: 92, str: 44, int: 24, dex: 42, vit: 32, luk: 16,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'quick_dash', 'venomous_bite', 'root_bind', 'blind'],
    expReward: 280, goldReward: [75, 145],
    drops: [
      { itemId: 'silver_reed_fiber', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'lunar_altar_token', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '白蘆迷道中低伏前進的長身巡獵者，皮膚覆著銀白蘆粉，幾乎能融進整片蘆海。牠會先用根鬚封路，再從側面咬住落單者。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '白蘆迷道巡獵者會封路與致盲，跟著蘆葉晃動方向能判斷位置。',
      treasure: '牠身上的蘆粉可整理成高品質銀蘆纖維。',
      spirit: '巡獵者是祭壇外圈的守路生物，會阻止旅人直闖夢水核心。',
    },
  },

dreamwater_lunar_guardian: {
    id: 'dreamwater_lunar_guardian', name: '夢水月衛', alias: 'lunarguardian',
    level: 16, hp: 760, mp: 220, str: 48, int: 54, dex: 30, vit: 58, luk: 18,
    element: 'light',
    family: 'humanoid',
    skills: ['basic_attack', 'holy_light', 'water_spear', 'reflect_barrier', 'root_bind'],
    expReward: 420, goldReward: [115, 220],
    drops: [
      { itemId: 'lunar_altar_token', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'dreamwater_dew', chance: 0.72, minQty: 1, maxQty: 2 },
      { itemId: 'firefly_lantern_gland', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '夢水核心前浮起的半透明守衛，盔甲像由月井水面與白蘆倒影折成。牠會以水矛切斷退路，用反射光幕保護祭壇，直到入侵者證明自己不是來污染濕地。',
    isBoss: true,
    isElite: true,
    respawnTime: 900,
    guardianHints: {
      creature: '夢水月衛會根縛、水矛與反射屏障，屏障期間先回復或清小怪。',
      treasure: '牠必定留下月沼祭壇符片，是夢水核心線的主要證明物。',
      spirit: '月衛是月光濕地對核心水脈的自我保護意志。',
    },
  },

road_dust_stray: {
    id: 'road_dust_stray', name: '古道塵犬', alias: 'duststray',
    level: 12, hp: 260, mp: 34, str: 32, int: 10, dex: 28, vit: 24, luk: 12,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'bite', 'howl', 'quick_dash'],
    expReward: 170, goldReward: [45, 88],
    drops: [
      { itemId: 'worn_caravan_seal', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'broken_bridge_rope', chance: 0.18, minQty: 1, maxQty: 1 },
      { itemId: 'sunroad_ration', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '跟著古道商隊殘香徘徊的瘦長野犬，皮毛被白石灰與路塵染成灰黃。牠們會在里程石堆與舊旗石路附近成群追逐腳步聲，咬住落單旅人的行囊。',
    isBoss: false,
    guardianHints: {
      creature: '古道塵犬會用嚎叫召集同伴，遇到兩隻以上時先清數量。',
      treasure: '牠們偶爾拖著商隊印或乾糧袋。',
      spirit: '塵犬是商隊斷絕後仍沿路等待投餵的野化生態。',
    },
  },

milestone_crow_herald: {
    id: 'milestone_crow_herald', name: '里程鴉使', alias: 'crowherald',
    level: 13, hp: 220, mp: 88, str: 18, int: 30, dex: 42, vit: 18, luk: 18,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'screech', 'blind'],
    expReward: 190, goldReward: [50, 96],
    drops: [
      { itemId: 'pilgrim_bell_charm', chance: 0.32, minQty: 1, maxQty: 2 },
      { itemId: 'white_marker_lime', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '棲在里程石堆與白石路標上的黑鴉，爪上纏著斷裂祈願繩。牠們會模仿小鈴聲引人抬頭，再用尖叫與石灰粉遮蔽視線。',
    isBoss: false,
    guardianHints: {
      creature: '里程鴉使尖叫後常接致盲，靠近路標時先看天空。',
      treasure: '牠們會偷走朝聖鈴符，也會啄下白石灰粉。',
      spirit: '鴉使像古道的壞掉告示牌，仍在宣告錯誤方向。',
    },
  },

shrine_bell_wraith: {
    id: 'shrine_bell_wraith', name: '小祠鈴影', alias: 'bellwraith',
    level: 14, hp: 300, mp: 120, str: 20, int: 38, dex: 24, vit: 26, luk: 16,
    element: 'light',
    family: 'undead',
    skills: ['basic_attack', 'holy_light', 'blind', 'life_drain'],
    expReward: 230, goldReward: [62, 118],
    drops: [
      { itemId: 'pilgrim_bell_charm', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'white_marker_lime', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '鐘鈴小祠與祈願階殘留的半透明鈴影，身體由舊祈禱、燭煙與白色鈴聲組成。牠不主動離開小祠太遠，卻會吸走打斷祈願者的生命熱度。',
    isBoss: false,
    guardianHints: {
      creature: '小祠鈴影會用白光致盲並吸血，先打斷牠的祈禱節奏。',
      treasure: '朝聖鈴符多半掛在牠半透明的手腕上。',
      spirit: '鈴影是巡禮者未送達聖地的祈願殘響。',
    },
  },

caravan_rut_cutpurse: {
    id: 'caravan_rut_cutpurse', name: '車轍割袋客', alias: 'cutpurse',
    level: 15, hp: 330, mp: 60, str: 34, int: 18, dex: 44, vit: 26, luk: 24,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'backstab', 'steal', 'quick_dash'],
    expReward: 260, goldReward: [70, 135],
    drops: [
      { itemId: 'worn_caravan_seal', chance: 0.52, minQty: 1, maxQty: 2 },
      { itemId: 'sunroad_ration', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '在商隊車轍與廢棄旅舍間活動的割袋客，刀刃短而薄，專割補給繩與錢袋。牠們熟悉古道每個彎角，會把旅人引向伏擊彎道。',
    isBoss: false,
    guardianHints: {
      creature: '車轍割袋客會偷竊與背刺，補給多時最好優先擊倒。',
      treasure: '牠們身上常有磨損商隊印與日路乾糧。',
      spirit: '割袋客代表古道商隊線崩壞後生出的掠奪秩序。',
    },
  },

drywell_ambusher: {
    id: 'drywell_ambusher', name: '乾井伏擊者', alias: 'wellambusher',
    level: 16, hp: 390, mp: 70, str: 40, int: 18, dex: 36, vit: 34, luk: 18,
    element: 'none',
    family: 'plant',
    skills: ['basic_attack', 'slash', 'backstab', 'poison_bite'],
    expReward: 310, goldReward: [82, 158],
    drops: [
      { itemId: 'worn_caravan_seal', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'pilgrim_bell_charm', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '藏在乾井、荊棘缺口與斷石道陰影中的伏擊者，披著破朝聖斗篷，武器塗著廉價蛇毒。牠們會等旅人查看水井或路標時從背後切入。',
    isBoss: false,
    guardianHints: {
      creature: '乾井伏擊者有毒刃與背刺，接近井口前先檢查兩側草叢。',
      treasure: '牠們常搶走商隊印，也會把朝聖鈴符當護身物。',
      spirit: '伏擊者利用的是朝聖者習慣停下祈禱與取水的善意。',
    },
  },

saint_bridge_penitent: {
    id: 'saint_bridge_penitent', name: '聖徒橋苦行殘影', alias: 'penitent',
    level: 17, hp: 470, mp: 150, str: 34, int: 46, dex: 20, vit: 46, luk: 14,
    element: 'light',
    family: 'undead',
    skills: ['basic_attack', 'holy_light', 'reflect_barrier', 'bone_strike'],
    expReward: 370, goldReward: [98, 188],
    drops: [
      { itemId: 'white_marker_lime', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'pilgrim_bell_charm', chance: 0.34, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '聖徒橋與白石路標間反覆跪行的苦行殘影，膝下拖出一條淡白痕跡。牠會用反射光幕保護橋面，並以骨杖敲擊試圖越過祈願線的人。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '聖徒橋苦行殘影會反射，看到橋面變白時先停手。',
      treasure: '牠留下的白石灰粉能標示真正古道路徑。',
      spirit: '殘影仍在完成未結束的苦行，不理解古道已經荒廢。',
    },
  },

smuggler_cache_guard: {
    id: 'smuggler_cache_guard', name: '走私藏點守衛', alias: 'cacheguard',
    level: 18, hp: 560, mp: 90, str: 54, int: 22, dex: 34, vit: 50, luk: 16,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'charge', 'slash', 'howl'],
    expReward: 430, goldReward: [115, 220],
    drops: [
      { itemId: 'worn_caravan_seal', chance: 0.66, minQty: 1, maxQty: 3 },
      { itemId: 'sunroad_ration', chance: 0.38, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '守在走私藏點與盜匪望臺之間的重甲打手，盾牌上釘著被搶來的商隊木牌。牠會用身體堵住狹窄路口，讓同夥從高處射擊或繞後。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '走私藏點守衛會衝鋒與咆哮，先處理旁邊割袋客再拆盾。',
      treasure: '牠保管大量磨損商隊印與乾糧補給。',
      spirit: '守衛把朝聖古道視為稅道，只認通行費不認聖地。',
    },
  },

final_marker_lightsworn: {
    id: 'final_marker_lightsworn', name: '終點聖碑光誓者', alias: 'lightsworn',
    level: 20, hp: 680, mp: 210, str: 50, int: 62, dex: 28, vit: 58, luk: 20,
    element: 'light',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'death_mark', 'reflect_barrier', 'charge'],
    expReward: 560, goldReward: [150, 290],
    drops: [
      { itemId: 'white_marker_lime', chance: 0.62, minQty: 1, maxQty: 3 },
      { itemId: 'sanctuary_gate_sigil', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '在聖地門與終點聖碑間守望的光誓殘影，盔甲上刻著早已失效的巡禮誓詞。牠會審視所有靠近聖碑的人，並用白光標記違背誓詞者。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '終點聖碑光誓者會標記並反射，後段戰鬥需要保留回復。',
      treasure: '牠是白石灰粉與聖地門印的主要來源之一。',
      spirit: '光誓者是聖地門前最後仍維持秩序的古代誓約。',
    },
  },

sanctuary_gate_trialkeeper: {
    id: 'sanctuary_gate_trialkeeper', name: '聖地門試煉守', alias: 'trialkeeper',
    level: 22, hp: 980, mp: 280, str: 66, int: 74, dex: 34, vit: 76, luk: 24,
    element: 'light',
    family: 'humanoid',
    skills: ['basic_attack', 'holy_light', 'reflect_barrier', 'death_mark', 'charge'],
    expReward: 820, goldReward: [220, 420],
    drops: [
      { itemId: 'sanctuary_gate_sigil', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'white_marker_lime', chance: 0.75, minQty: 2, maxQty: 4 },
      { itemId: 'pilgrim_bell_charm', chance: 0.55, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '聖地門後方甦醒的試煉守衛，身披白石板與鈴符編成的鎧甲，手中長槍像一截發光路標。牠不追殺逃離者，只阻止沒有完成古道誓約的人跨過終點聖碑。',
    isBoss: true,
    isElite: true,
    respawnTime: 1200,
    guardianHints: {
      creature: '聖地門試煉守會反射、標記與衝鋒，先等屏障空窗再集中輸出。',
      treasure: '牠必定掉落聖地門印，是朝聖古道終點證明。',
      spirit: '試煉守是古道最後的檢查，不屬於盜匪也不屬於亡靈。',
    },
  },

ironwood_gate_sentinel: {
    id: 'ironwood_gate_sentinel', name: '鐵木門哨', alias: 'gatesentinel',
    level: 18, hp: 620, mp: 80, str: 58, int: 20, dex: 32, vit: 58, luk: 14,
    element: 'none',
    family: 'construct',
    skills: ['basic_attack', 'charge', 'howl', 'stone_skin'],
    expReward: 520, goldReward: [140, 260],
    drops: [
      { itemId: 'ironwood_plank', chance: 0.52, minQty: 1, maxQty: 2 },
      { itemId: 'fort_supply_token', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '守在鐵木外門與傳送陣庭的重甲哨兵，盾牌由鐵木與黑鐵鉚成。牠們原本是邊境守軍，如今被錯誤軍令困在巡邏路線上，會攔下任何沒有通行記號的人。',
    isBoss: false,
    guardianHints: {
      creature: '鐵木門哨防禦高，會用衝鋒與咆哮拖住隊伍。',
      treasure: '牠的盾牌與腰牌能拆出鐵木板材與要塞補給牌。',
      spirit: '門哨代表要塞仍在執行封鎖命令。',
    },
  },

quartermaster_renegade: {
    id: 'quartermaster_renegade', name: '叛逃軍需兵', alias: 'renegade',
    level: 19, hp: 560, mp: 92, str: 44, int: 24, dex: 44, vit: 38, luk: 24,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'backstab', 'steal', 'quick_dash'],
    expReward: 560, goldReward: [150, 285],
    drops: [
      { itemId: 'fort_supply_token', chance: 0.62, minQty: 1, maxQty: 2 },
      { itemId: 'sunroad_ration', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '佔據軍需行列與補給隧道的叛逃士兵，背袋裡塞滿偷來的火油、箭束與乾糧。牠們熟悉要塞暗門，會在戰鬥中割走補給後迅速後撤。',
    isBoss: false,
    guardianHints: {
      creature: '叛逃軍需兵會偷竊，補給多時優先處理。',
      treasure: '牠們身上最常見的是要塞補給牌。',
      spirit: '軍需兵讓要塞的補給系統變成內亂來源。',
    },
  },

bastion_crossbowman: {
    id: 'bastion_crossbowman', name: '堡牆弩手', alias: 'crossbowman',
    level: 20, hp: 540, mp: 100, str: 42, int: 22, dex: 58, vit: 34, luk: 18,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'quick_dash', 'blind', 'death_mark'],
    expReward: 610, goldReward: [165, 315],
    drops: [
      { itemId: 'scout_signal_fuse', chance: 0.34, minQty: 1, maxQty: 1 },
      { itemId: 'fort_supply_token', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '伏在東西堡牆與斥候棲臺上的弩手，弩臂覆著黑色鐵木片，箭頭綁著短信管。牠們會先以煙火標記目標，再從牆道死角連射。',
    isBoss: false,
    guardianHints: {
      creature: '堡牆弩手會標記與致盲，進入牆道前先找掩體。',
      treasure: '斥候信管常掛在牠的弩機側袋。',
      spirit: '弩手是要塞偵查火線的一部分，仍在回報不存在的敵軍。',
    },
  },

forge_cinder_guard: {
    id: 'forge_cinder_guard', name: '鍛坊燼衛', alias: 'cinderguard',
    level: 22, hp: 760, mp: 140, str: 66, int: 34, dex: 26, vit: 70, luk: 12,
    element: 'fire',
    family: 'humanoid',
    skills: ['basic_attack', 'fire_breath', 'stone_slam', 'stone_skin'],
    expReward: 760, goldReward: [205, 390],
    drops: [
      { itemId: 'forge_cinder_oil', chance: 0.42, minQty: 1, maxQty: 1 },
      { itemId: 'ironwood_plank', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '鐵木鍛坊中由火油、鐵灰與木炭包覆的重衛，胸甲縫隙透出暗紅爐光。牠們用燼油維持要塞火線，也會把入侵者推進未冷的鍛槽。',
    isBoss: false,
    guardianHints: {
      creature: '鍛坊燼衛會石膚與火焰噴吐，火線區域不宜久站。',
      treasure: '鍛坊燼油常封在牠腰間的耐火瓶。',
      spirit: '燼衛是鍛坊自動防衛與士兵紀律混成的產物。',
    },
  },

ironwood_rootwarden: {
    id: 'ironwood_rootwarden', name: '鐵木根衛', alias: 'rootwarden',
    level: 23, hp: 820, mp: 180, str: 58, int: 46, dex: 18, vit: 82, luk: 14,
    element: 'none',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'nature_drain'],
    expReward: 840, goldReward: [225, 430],
    drops: [
      { itemId: 'ironwood_plank', chance: 0.72, minQty: 1, maxQty: 3 },
      { itemId: 'forge_cinder_oil', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '鐵木林圃深處被軍法符釘喚醒的根系守衛，樹皮硬得像黑鐵。牠會用根鬚封住林圃與囚牢間的小路，吸取靠近者的體力修補城牆。',
    isBoss: false,
    guardianHints: {
      creature: '鐵木根衛會根縛與吸取生命，林圃戰鬥要避免被分割。',
      treasure: '高品質鐵木板材主要來自根衛外皮。',
      spirit: '根衛說明要塞本身與鐵木林圃其實共享防衛意志。',
    },
  },

prison_chain_jailer: {
    id: 'prison_chain_jailer', name: '囚牢鎖衛', alias: 'jailer',
    level: 24, hp: 780, mp: 150, str: 70, int: 28, dex: 30, vit: 72, luk: 12,
    element: 'none',
    family: 'plant',
    skills: ['basic_attack', 'bone_strike', 'charge', 'death_mark'],
    expReward: 910, goldReward: [245, 465],
    drops: [
      { itemId: 'fort_supply_token', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'ironwood_plank', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '囚牢石廊中拖著黑鐵鎖鏈的看守，頭盔面罩被鐵木根鬚封死。牠會用軍令印記標定逃犯與闖入者，鎖鏈敲擊聲能傳到整條石廊。',
    isBoss: false,
    guardianHints: {
      creature: '囚牢鎖衛會標記與衝鋒，狹窄石廊中要先退到開闊處。',
      treasure: '牠保管囚牢補給牌與加固鐵木片。',
      spirit: '鎖衛是要塞紀律失控後仍在追捕所有人的殘留權力。',
    },
  },

signal_fire_sapper: {
    id: 'signal_fire_sapper', name: '烽火爆破兵', alias: 'sapper',
    level: 25, hp: 720, mp: 220, str: 46, int: 62, dex: 44, vit: 42, luk: 18,
    element: 'fire',
    family: 'elemental',
    skills: ['basic_attack', 'fire_bolt', 'fire_breath', 'blind', 'quick_dash'],
    expReward: 980, goldReward: [265, 505],
    drops: [
      { itemId: 'scout_signal_fuse', chance: 0.66, minQty: 1, maxQty: 2 },
      { itemId: 'forge_cinder_oil', chance: 0.32, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '信號塔與隱蔽突門間活動的爆破兵，背負裝滿信管與火油的小型木箱。牠會用彩煙遮蔽視線，再把火信管丟進補給箱與橋架下方。',
    isBoss: false,
    guardianHints: {
      creature: '烽火爆破兵會致盲與火焰攻擊，看到彩煙時立刻散開。',
      treasure: '牠是斥候信管與鍛坊燼油的重要來源。',
      spirit: '爆破兵把要塞通訊系統變成了內部破壞手段。',
    },
  },

oath_chapel_knight: {
    id: 'oath_chapel_knight', name: '誓約堂鐵騎', alias: 'oathknight',
    level: 27, hp: 1100, mp: 260, str: 82, int: 48, dex: 34, vit: 92, luk: 16,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'charge', 'reflect_barrier', 'holy_light', 'death_mark'],
    expReward: 1180, goldReward: [320, 610],
    drops: [
      { itemId: 'fort_supply_token', chance: 0.6, minQty: 1, maxQty: 3 },
      { itemId: 'keep_command_seal', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '誓約禮拜堂內仍跪守軍旗的鐵騎，鎧甲縫隙塞滿黑色鐵木籤。牠會用反射屏障保護禮拜堂門線，並將違令者標成叛軍。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '誓約堂鐵騎會反射與標記，屏障期間先防守。',
      treasure: '牠身上可能帶著內堡軍令印的殘片。',
      spirit: '鐵騎是要塞誓約還沒崩潰的一面，也是最固執的一面。',
    },
  },

command_tablet_construct: {
    id: 'command_tablet_construct', name: '軍令板構裝', alias: 'tabletconstruct',
    level: 28, hp: 1250, mp: 240, str: 76, int: 54, dex: 20, vit: 104, luk: 10,
    element: 'none',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'reflect_barrier', 'crystal_slam', 'death_mark'],
    expReward: 1320, goldReward: [355, 680],
    drops: [
      { itemId: 'ironwood_plank', chance: 0.52, minQty: 2, maxQty: 4 },
      { itemId: 'keep_command_seal', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '戰圖室與指揮長廊中啟動的厚重構裝，胸口嵌著刻滿軍令的鐵木板。牠會根據殘缺戰圖重新排列敵我位置，並用軍令印壓制不服從者。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '軍令板構裝防禦極高，會反射與標記，適合在屏障空窗爆發。',
      treasure: '內堡軍令印常從牠胸口軍令板上剝落。',
      spirit: '構裝是要塞指揮系統無人校正後的錯誤延伸。',
    },
  },

high_keep_warmarshal: {
    id: 'high_keep_warmarshal', name: '高堡戰帥', alias: 'warmarshal',
    level: 30, hp: 1700, mp: 360, str: 96, int: 72, dex: 42, vit: 118, luk: 20,
    element: 'fire',
    family: 'humanoid',
    skills: ['basic_attack', 'charge', 'fire_breath', 'reflect_barrier', 'death_mark', 'howl'],
    expReward: 1700, goldReward: [460, 880],
    drops: [
      { itemId: 'keep_command_seal', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'scout_signal_fuse', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'forge_cinder_oil', chance: 0.55, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '高堡核心中仍握著黑鐵軍令槍的戰 Marshal，披風被鍛坊火星燒出破洞，眼中只有未結束的邊境戰報。牠會同時調動火線、構裝與誓約騎士，直到內堡軍令印被奪下。',
    isBoss: true,
    isElite: true,
    respawnTime: 1500,
    guardianHints: {
      creature: '高堡戰 Marshal 會反射、標記、火焰與咆哮，先清旁邊精英再打本體。',
      treasure: '牠必定掉落內堡軍令印，是鐵木要塞高堡核心證明。',
      spirit: '戰 Marshal 是要塞失控軍令的最高節點。',
    },
  },

war_gate_bannerman: {
    id: 'war_gate_bannerman', name: '終戰門旗衛', alias: 'bannerman',
    level: 55, hp: 3400, mp: 420, str: 84, int: 48, dex: 54, vit: 88, luk: 18,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'charge', 'howl', 'death_mark'],
    expReward: 3600, goldReward: [720, 1440],
    drops: [
      { itemId: 'broken_warbanner', chance: 0.62, minQty: 1, maxQty: 2 },
      { itemId: 'kingbone_oath_shard', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '披著破旗的門衛軍魂仍守在終戰入口，甲片被黑焰燒成暗紅，卻始終維持衝鋒陣形。牠會先以旗號標記入侵者，再帶著周圍殘兵一起壓上戰線。',
    isBoss: false,
    guardianHints: {
      creature: '終戰門旗衛會以死亡印記開戰，先處理旗號標記再推進。',
      treasure: '牠常掉落破旗殘布，偶爾帶著王骨誓片。',
      spirit: '門旗衛代表終焉戰場仍未解除的第一道軍令。',
    },
  },

kingbone_oath_knight: {
    id: 'kingbone_oath_knight', name: '王骨誓騎', alias: 'oathknight',
    level: 56, hp: 3700, mp: 500, str: 88, int: 58, dex: 50, vit: 96, luk: 20,
    element: 'light',
    family: 'undead',
    skills: ['basic_attack', 'charge', 'holy_light', 'reflect_barrier'],
    expReward: 3850, goldReward: [770, 1540],
    drops: [
      { itemId: 'kingbone_oath_shard', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'broken_warbanner', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '由王骨石堆與誓約石圈重新站起的騎士殘影，胸甲內沒有血肉，只剩白光與未完成的王令。牠會用反射屏障護住同袍，直到誓言被徹底擊碎。',
    isBoss: false,
    guardianHints: {
      creature: '王骨誓騎會保護附近敵人，反射屏障期間避免浪費爆發。',
      treasure: '王骨誓片多半從牠裂開的胸甲中剝落。',
      spirit: '誓騎是諸王軍令殘存的形體，不完全屬於亡靈。',
    },
  },

siege_trench_revenant: {
    id: 'siege_trench_revenant', name: '攻城壕怨軍', alias: 'trenchrevenant',
    level: 56, hp: 3500, mp: 460, str: 82, int: 66, dex: 58, vit: 84, luk: 22,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'shadow_storm', 'life_drain', 'death_mark'],
    expReward: 3800, goldReward: [760, 1520],
    drops: [
      { itemId: 'broken_warbanner', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'blackflame_ember', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '攻城壕溝中堆疊太久的怨軍殘影，身體由濕泥、碎甲與未冷的血雨黏合而成。牠會從壕溝側壁鑽出，用暗影風暴把隊伍拖回攻城最慘烈的位置。',
    isBoss: false,
    guardianHints: {
      creature: '攻城壕怨軍會吸取生命並施加印記，壕溝戰不宜拖長。',
      treasure: '牠身上的泥甲常纏著破旗殘布與黑焰餘燼。',
      spirit: '怨軍是攻城失敗瞬間被固定下來的集體怨念。',
    },
  },

ember_mud_colossus: {
    id: 'ember_mud_colossus', name: '餘火泥巨像', alias: 'embercolossus',
    level: 57, hp: 4300, mp: 360, str: 96, int: 44, dex: 30, vit: 112, luk: 14,
    element: 'fire',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'fire_breath', 'stone_skin'],
    expReward: 4200, goldReward: [840, 1680],
    drops: [
      { itemId: 'blackflame_ember', chance: 0.54, minQty: 1, maxQty: 2 },
      { itemId: 'broken_warbanner', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '由餘火泥地與攻城機殘骸中聚成的巨大泥像，體內仍埋著燒黑的輪軸與兵器。牠走動時會把黑焰泥漿甩向四周，讓戰場重新陷入燃燒。',
    isBoss: false,
    guardianHints: {
      creature: '餘火泥巨像防禦高，會用石膚與重擊拖慢隊伍。',
      treasure: '黑焰餘燼常卡在牠胸口未熄的泥火裡。',
      spirit: '巨像像戰場本身把廢鐵與餘火揉成的守衛。',
    },
  },

sunless_chapel_seraph: {
    id: 'sunless_chapel_seraph', name: '無日禮拜堂熾影', alias: 'sunlessseraph',
    level: 57, hp: 4000, mp: 840, str: 58, int: 116, dex: 66, vit: 78, luk: 28,
    element: 'light',
    family: 'celestial',
    skills: ['basic_attack', 'holy_light', 'sacred_flame', 'reflect_barrier'],
    expReward: 4450, goldReward: [890, 1780],
    drops: [
      { itemId: 'fallen_halo_fragment', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'kingbone_oath_shard', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'healer',
    description:
      '無日禮拜堂內殘存的白金熾影，羽翼像被斷光橋切開的日輪。牠會替王骨軍魂縫合傷口，也會用聖焰燒掉接近墜天坑的黑影。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '無日禮拜堂熾影會治療與反射，先打斷支援節奏。',
      treasure: '墜天光環碎片多半從牠破裂的羽環上落下。',
      spirit: '熾影不是救贖者，而是最後祈禱被戰場扭曲後的形體。',
    },
  },

blood_rain_warmage: {
    id: 'blood_rain_warmage', name: '血雨戰法師', alias: 'rainmage',
    level: 58, hp: 3900, mp: 920, str: 52, int: 122, dex: 70, vit: 72, luk: 30,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'shadow_storm', 'fire_breath', 'life_drain', 'death_mark'],
    expReward: 4700, goldReward: [940, 1880],
    drops: [
      { itemId: 'blackflame_ember', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'godscar_blood_crystal', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '血雨盆地中仍在施法的戰場法師，法袍被雨水黏成暗紅色，指尖燃著黑焰符文。牠會把血雨改寫成詛咒，讓被標記者在戰線中迅速失血。',
    isBoss: false,
    guardianHints: {
      creature: '血雨戰法師會用印記與吸血製造壓力，優先擊殺較穩。',
      treasure: '牠的法袍中可找到黑焰餘燼與少量神傷血晶。',
      spirit: '戰法師保存的是終戰中最髒的軍用法術。',
    },
  },

demon_scar_vanguard: {
    id: 'demon_scar_vanguard', name: '魔神爪痕先鋒', alias: 'scarvanguard',
    level: 58, hp: 4700, mp: 620, str: 104, int: 72, dex: 62, vit: 98, luk: 22,
    element: 'fire',
    family: 'demon',
    skills: ['basic_attack', 'charge', 'fire_breath', 'shadow_devour'],
    expReward: 5000, goldReward: [1000, 2000],
    drops: [
      { itemId: 'blackflame_ember', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'godscar_blood_crystal', chance: 0.28, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '從魔神爪痕中爬出的黑甲先鋒，武器像一截仍在燃燒的指骨。牠會沿著裂痕衝鋒，把隊伍逼向黑焰前線與裂世縫之間最狹窄的死角。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '魔神爪痕先鋒爆發高，遭衝鋒標記後要立刻穩住血線。',
      treasure: '牠是黑焰餘燼與神傷血晶的重要來源。',
      spirit: '先鋒像魔神最後一爪留下的戰意延伸。',
    },
  },

blackflame_general: {
    id: 'blackflame_general', name: '黑焰終軍將', alias: 'blackflamegeneral',
    level: 59, hp: 5600, mp: 760, str: 112, int: 84, dex: 54, vit: 110, luk: 26,
    element: 'fire',
    family: 'humanoid',
    skills: ['basic_attack', 'fire_breath', 'shadow_storm', 'howl', 'reflect_barrier'],
    expReward: 5600, goldReward: [1120, 2240],
    drops: [
      { itemId: 'blackflame_ember', chance: 0.72, minQty: 1, maxQty: 3 },
      { itemId: 'final_standard_seal', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '黑焰前線與末令高臺之間巡行的終軍將領，披風由熄不掉的黑火構成。牠會重新整編附近殘兵，讓破旗、王骨與墜天光都被迫聽從同一道軍令。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '黑焰終軍將會用咆哮與屏障重整敵方節奏，先清小怪再打將領。',
      treasure: '牠穩定掉落黑焰餘燼，極少留下終末軍旗印。',
      spirit: '終軍將是戰場尚未承認戰爭結束的指揮核心。',
    },
  },

godscar_avatar: {
    id: 'godscar_avatar', name: '神傷化身', alias: 'godscar',
    level: 60, hp: 7600, mp: 980, str: 98, int: 124, dex: 58, vit: 116, luk: 30,
    element: 'light',
    family: 'celestial',
    skills: ['basic_attack', 'holy_light', 'sacred_flame', 'meteor', 'reflect_barrier', 'death_mark'],
    expReward: 6800, goldReward: [1360, 2720],
    drops: [
      { itemId: 'godscar_blood_crystal', chance: 1.0, minQty: 1, maxQty: 2 },
      { itemId: 'fallen_halo_fragment', chance: 0.62, minQty: 1, maxQty: 2 },
      { itemId: 'silence_after_war_core', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '神傷核心中站起的白金與暗紅混合化身，像一位神祇被終戰撕開後留下的傷口。牠每次舉手都會讓天光與黑焰同時墜落，逼迫挑戰者承受兩方殘留的審判。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '神傷化身會交替使用聖焰、隕落與反射屏障，屏障期間務必收手。',
      treasure: '牠必定掉落神傷血晶，偶爾凝出戰後寂地核心。',
      spirit: '神傷化身不是完整神明，而是神祇在終戰中留下的傷口意志。',
    },
  },

final_standard_warlord: {
    id: 'final_standard_warlord', name: '終末軍旗統帥', alias: 'finalwarlord',
    level: 60, hp: 8200, mp: 900, str: 126, int: 104, dex: 62, vit: 118, luk: 34,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'charge', 'shadow_devour', 'fire_breath', 'howl', 'death_mark'],
    expReward: 7200, goldReward: [1440, 2880],
    drops: [
      { itemId: 'final_standard_seal', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'silence_after_war_core', chance: 0.42, minQty: 1, maxQty: 1 },
      { itemId: 'broken_warbanner', chance: 0.78, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '立於終末軍旗下的最後統帥，盔甲上同時掛著諸王徽記與魔神裂紋。牠沒有勝利者的姿態，只是不斷重複最後一道進軍命令，直到整片戰場再次醒來。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '終末軍旗統帥會用咆哮、衝鋒與死亡印記滾雪球，先處理同行精英。',
      treasure: '牠必定掉落終末軍旗印，並有機會留下戰後寂地核心。',
      spirit: '統帥是終焉戰場的收束點，牠倒下前戰爭不會真正結束。',
    },
  },

amber_sapling_lurker: {
    id: 'amber_sapling_lurker', name: '琥珀幼樹伏行者', alias: 'saplinglurker',
    level: 20, hp: 760, mp: 170, str: 52, int: 42, dex: 24, vit: 72, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'nature_drain'],
    expReward: 720, goldReward: [195, 370],
    drops: [
      { itemId: 'golden_resin_chunk', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'amber_vein_shard', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '採集入口與凝脂樹門附近緩慢移動的幼樹怪，樹皮下積著半透明金脂。牠會把根鬚藏進落葉與樹脂脈裡，等採集者靠近後封住退路。',
    isBoss: false,
    guardianHints: {
      creature: '琥珀幼樹伏行者會根縛與吸取生命，採集前先清周圍根影。',
      treasure: '牠外皮能切出金脂塊，根部偶爾凝著琥珀脈晶。',
      spirit: '幼樹伏行者是森林對粗暴採集的第一層反應。',
    },
  },

resin_vein_lizard: {
    id: 'resin_vein_lizard', name: '樹脂脈蜥', alias: 'resinlizard',
    level: 21, hp: 700, mp: 120, str: 58, int: 24, dex: 52, vit: 42, luk: 18,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'quick_dash', 'poison_bite', 'coil'],
    expReward: 760, goldReward: [205, 390],
    drops: [
      { itemId: 'amber_vein_shard', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'golden_resin_chunk', chance: 0.28, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '沿琥珀脈徑與玻璃根橋爬行的細長蜥蜴，鱗片像一片片透明樹脂。牠會在金色根脈間高速穿梭，用帶麻痺性的樹脂毒液咬住獵物。',
    isBoss: false,
    guardianHints: {
      creature: '樹脂脈蜥速度快且帶毒，看到脈晶震動時準備閃避。',
      treasure: '琥珀脈晶常卡在牠背脊鱗片下。',
      spirit: '脈蜥像森林流動樹脂的捕食形態。',
    },
  },

sealed_wax_wasp: {
    id: 'sealed_wax_wasp', name: '封蠟胡蜂', alias: 'waxwasp',
    level: 22, hp: 620, mp: 160, str: 46, int: 34, dex: 68, vit: 30, luk: 20,
    element: 'fire',
    family: 'insect',
    skills: ['basic_attack', 'quick_dash', 'venomous_bite', 'blind'],
    expReward: 820, goldReward: [220, 420],
    drops: [
      { itemId: 'waxwing_chitin', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'golden_resin_chunk', chance: 0.26, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '封蠟蜂巢中鑽出的金黑胡蜂，翅膜覆著薄薄樹脂，振動時會灑下灼熱蠟粉。牠們會先用蠟粉迷住眼睛，再以毒針標記入侵巢區的人。',
    isBoss: false,
    guardianHints: {
      creature: '封蠟胡蜂會致盲與毒擊，蜂巢區不要拉太多。',
      treasure: '封蠟蟲甲需要在胡蜂翅膜硬化前剝取。',
      spirit: '胡蜂是琥珀森林最活躍的資源守衛。',
    },
  },

amber_water_serpent: {
    id: 'amber_water_serpent', name: '琥珀水囊蛇', alias: 'amberserpent',
    level: 23, hp: 840, mp: 190, str: 62, int: 38, dex: 40, vit: 62, luk: 16,
    element: 'nature',
    family: 'beast',
    skills: ['basic_attack', 'water_spear', 'poison_bite', 'coil'],
    expReward: 920, goldReward: [245, 470],
    drops: [
      { itemId: 'golden_resin_chunk', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'amber_vein_shard', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '盤在琥珀水囊與樹脂落溝中的水蛇，鱗片間滲著金色樹液。牠會把水囊表面偽裝成平靜琥珀，再突然以水矛和毒牙攻擊。',
    isBoss: false,
    guardianHints: {
      creature: '琥珀水囊蛇會纏繞與水矛，水面過於平整時不要靠近。',
      treasure: '牠的鱗片縫隙常積著金脂塊與脈晶。',
      spirit: '水囊蛇讓森林少數水源也帶著採集風險。',
    },
  },

suntrap_bloom_mantis: {
    id: 'suntrap_bloom_mantis', name: '日陷花螳', alias: 'sunmantis',
    level: 24, hp: 820, mp: 150, str: 72, int: 28, dex: 70, vit: 42, luk: 18,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'slash', 'backstab', 'quick_dash'],
    expReward: 1010, goldReward: [270, 515],
    drops: [
      { itemId: 'golden_resin_chunk', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'waxwing_chitin', chance: 0.26, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '日陷空地與石化花圃間伏在發光花葉上的大型螳螂，前肢像兩把琥珀短刀。牠會利用強烈樹脂反光消失在視線裡，從採集者背後切入。',
    isBoss: false,
    guardianHints: {
      creature: '日陷花螳爆發高，花影突然折斷時代表牠準備背刺。',
      treasure: '牠的刀肢常封著金脂與蟲甲碎片。',
      spirit: '花螳是日陷空地阻止過度採花的狩獵者。',
    },
  },

smoke_resin_myconid: {
    id: 'smoke_resin_myconid', name: '煙脂菌人', alias: 'resinmyconid',
    level: 25, hp: 900, mp: 260, str: 38, int: 72, dex: 22, vit: 66, luk: 18,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'poison_spit', 'toxic_cloud', 'life_drain'],
    expReward: 1120, goldReward: [300, 570],
    drops: [
      { itemId: 'smoke_resin_spore', chance: 0.64, minQty: 1, maxQty: 2 },
      { itemId: 'golden_resin_chunk', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '煙菌坡上由樹脂、灰燼與菌絲長成的人形菌體，傘蓋下方飄著灰金孢霧。牠會吸收靠近者的生命熱度，讓孢子在焦木間繼續發芽。',
    isBoss: false,
    guardianHints: {
      creature: '煙脂菌人會毒霧與吸血，孢霧濃時先後撤。',
      treasure: '煙脂孢子需要從牠傘蓋下方採集。',
      spirit: '菌人是火燒後森林試圖重新分解樹脂的形態。',
    },
  },

ember_carapace_beetle: {
    id: 'ember_carapace_beetle', name: '燼甲蟲', alias: 'emberbeetle',
    level: 26, hp: 1040, mp: 130, str: 78, int: 24, dex: 30, vit: 92, luk: 14,
    element: 'fire',
    family: 'insect',
    skills: ['basic_attack', 'fire_breath', 'stone_slam', 'stone_skin'],
    expReward: 1220, goldReward: [330, 630],
    drops: [
      { itemId: 'waxwing_chitin', chance: 0.62, minQty: 1, maxQty: 3 },
      { itemId: 'smoke_resin_spore', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '焦木林列與燼甲蟲丘中翻動炭土的巨大甲蟲，甲殼像燒黑後又被樹脂封住的盾牌。牠會噴出滾燙樹脂火，並用厚殼撞碎採集架。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '燼甲蟲防禦厚且有火焰，先避開噴火再集中攻擊腹部。',
      treasure: '封蠟蟲甲以燼甲蟲外殼品質最好。',
      spirit: '牠是火與樹脂共生後誕生的硬殼清道夫。',
    },
  },

petrified_resin_golem: {
    id: 'petrified_resin_golem', name: '石化樹脂魔像', alias: 'resingolem',
    level: 28, hp: 1350, mp: 240, str: 82, int: 48, dex: 16, vit: 118, luk: 10,
    element: 'nature',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'crystal_slam', 'reflect_barrier'],
    expReward: 1450, goldReward: [390, 740],
    drops: [
      { itemId: 'amber_vein_shard', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'golden_resin_chunk', chance: 0.55, minQty: 1, maxQty: 3 },
    ],
    aiType: 'defensive',
    description:
      '封存遺物坑與石化花圃中站起的樹脂魔像，身體由硬化花莖、琥珀脈晶與古老工具碎片組成。牠會用反光樹脂屏障保護深層採集點。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '石化樹脂魔像會反射屏障，屏障期間不要貪攻。',
      treasure: '牠體內蘊藏大量琥珀脈晶與金脂塊。',
      spirit: '魔像像森林把舊採集工具重新組成的防盜機制。',
    },
  },

elder_resin_treant: {
    id: 'elder_resin_treant', name: '古脂樹人', alias: 'resintreant',
    level: 30, hp: 1500, mp: 320, str: 78, int: 66, dex: 18, vit: 128, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'nature_drain', 'reflect_barrier'],
    expReward: 1650, goldReward: [445, 850],
    drops: [
      { itemId: 'golden_resin_chunk', chance: 0.75, minQty: 2, maxQty: 4 },
      { itemId: 'smoke_resin_spore', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '古脂巨樹旁甦醒的高大樹人，樹幹中封著數十層金色年輪。牠每次移動都會拉起大片根脈，像要把整座森林重新包進琥珀裡。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '古脂樹人會根縛、吸血與反射，適合慢慢拆解。',
      treasure: '牠是金脂塊與煙脂孢子的高品質來源。',
      spirit: '古脂樹人代表森林古木對深層採集的最後警告。',
    },
  },

deep_amber_matriarch: {
    id: 'deep_amber_matriarch', name: '深琥珀蟲母', alias: 'ambermatriarch',
    level: 32, hp: 2100, mp: 420, str: 92, int: 78, dex: 42, vit: 136, luk: 22,
    element: 'fire',
    family: 'insect',
    skills: ['basic_attack', 'fire_breath', 'venomous_bite', 'toxic_cloud', 'reflect_barrier', 'death_mark'],
    expReward: 2200, goldReward: [600, 1150],
    drops: [
      { itemId: 'deep_amber_heart', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'waxwing_chitin', chance: 0.72, minQty: 2, maxQty: 4 },
      { itemId: 'amber_vein_shard', chance: 0.55, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '沉睡在深琥珀核心中的巨大蟲母，半身被金色樹脂封住，仍能透過脈晶與蜂巢操控整片森林的昆蟲。牠醒來時，封存千年的翅影會在核心內同時拍動。',
    isBoss: true,
    isElite: true,
    respawnTime: 1500,
    guardianHints: {
      creature: '深琥珀蟲母會毒霧、火焰與反射屏障，先處理同場精英再攻本體。',
      treasure: '牠必定掉落深琥珀心核，是琥珀森林核心材料。',
      spirit: '蟲母是封存昆蟲生態與古木樹脂意志的共同核心。',
    },
  },

silverpine_snowstalker: {
    id: 'silverpine_snowstalker', name: '銀松雪徑獸', alias: 'snowstalker',
    level: 24, hp: 980, mp: 130, str: 72, int: 24, dex: 58, vit: 58, luk: 18,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'bite', 'quick_dash', 'howl'],
    expReward: 1050, goldReward: [285, 540],
    drops: [
      { itemId: 'silverpine_mica', chance: 0.34, minQty: 1, maxQty: 2 },
      { itemId: 'frost_herb_bundle', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '在銀松山道與獸痕雪坡間追蹤氣味的雪白山獸，背毛中夾著雲母碎屑。牠會利用雪線與松影掩護衝刺，專咬採礦隊伍的後排。',
    isBoss: false,
    guardianHints: {
      creature: '銀松雪徑獸會嚎叫與快速突進，雪坡上不要讓後排落單。',
      treasure: '牠毛皮常沾著銀松雲母與霜草碎葉。',
      spirit: '雪徑獸是山脈前段最常見的捕食者。',
    },
  },

mica_cliff_lizard: {
    id: 'mica_cliff_lizard', name: '雲母崖蜥', alias: 'micalizard',
    level: 25, hp: 920, mp: 150, str: 64, int: 30, dex: 68, vit: 50, luk: 16,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'crystal_shard', 'poison_bite'],
    expReward: 1120, goldReward: [300, 570],
    drops: [
      { itemId: 'silverpine_mica', chance: 0.58, minQty: 1, maxQty: 3 },
      { itemId: 'iceglass_ore', chance: 0.14, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '貼著銀脈山徑與雲母折道岩面活動的細長蜥蜴，鱗片像一層層薄雲母。牠會從反光岩壁中突然竄出，用冰晶碎片割傷獵物。',
    isBoss: false,
    guardianHints: {
      creature: '雲母崖蜥會利用反光隱身，岩面閃爍時先防禦。',
      treasure: '銀松雲母多半卡在牠的鱗片邊緣。',
      spirit: '崖蜥像礦脈本身長出的守路生物。',
    },
  },

frost_herb_witch: {
    id: 'frost_herb_witch', name: '霜草巫女', alias: 'frostwitch',
    level: 26, hp: 880, mp: 360, str: 34, int: 82, dex: 34, vit: 54, luk: 22,
    element: 'nature',
    family: 'elemental',
    skills: ['basic_attack', 'ice_storm', 'root_bind', 'nature_drain'],
    expReward: 1240, goldReward: [335, 640],
    drops: [
      { itemId: 'frost_herb_bundle', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'silverpine_mica', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '寒草岩層與霜草岩棚間採藥的山巫，斗篷由銀松針與霜草編成。她會用凍風保護藥草，並把冒失採集者的腳纏在冰根裡。',
    isBoss: false,
    guardianHints: {
      creature: '霜草巫女會冰風暴與根縛，採藥點戰鬥要避免被控場。',
      treasure: '她身上保存著完整霜草束。',
      spirit: '霜草巫女是山脈藥草生態的守護者。',
    },
  },

iceglass_golem: {
    id: 'iceglass_golem', name: '冰玻魔像', alias: 'iceglassgolem',
    level: 28, hp: 1450, mp: 260, str: 82, int: 50, dex: 16, vit: 124, luk: 10,
    element: 'ice',
    family: 'construct',
    skills: ['basic_attack', 'crystal_slam', 'ice_armor', 'reflect_barrier'],
    expReward: 1500, goldReward: [405, 770],
    drops: [
      { itemId: 'iceglass_ore', chance: 0.72, minQty: 1, maxQty: 3 },
      { itemId: 'silverpine_mica', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '冰玻洞與晶石碎坡中凝出的透明魔像，身體內部折射著藍白礦光。牠會升起冰甲與反射屏障，讓採礦鎬在自己手中震裂。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '冰玻魔像會冰甲與反射，等屏障空窗再集中攻擊。',
      treasure: '冰玻礦主要從牠胸口與肩部剝落。',
      spirit: '牠是山脈冰玻礦脈的自動防衛。',
    },
  },

silver_sap_treant: {
    id: 'silver_sap_treant', name: '銀脂松樹人', alias: 'saptreant',
    level: 29, hp: 1320, mp: 330, str: 74, int: 66, dex: 18, vit: 118, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'nature_drain', 'ice_storm'],
    expReward: 1580, goldReward: [425, 810],
    drops: [
      { itemId: 'frost_herb_bundle', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'silverpine_mica', chance: 0.5, minQty: 1, maxQty: 3 },
    ],
    aiType: 'defensive',
    description:
      '銀脂松圃中甦醒的高大松樹人，樹脂像銀色霜線沿著樹皮流動。牠會用冰根封住山道，吸取闖入者的體溫餵養松針。',
    isBoss: false,
    guardianHints: {
      creature: '銀脂松樹人會根縛、吸血與冰風，山道窄處要避免被困。',
      treasure: '牠的松皮可刮出銀松雲母與霜草共生根。',
      spirit: '松樹人是銀松山脈植物線的核心守衛。',
    },
  },

windcut_eagle: {
    id: 'windcut_eagle', name: '風切銀鷹', alias: 'windcut',
    level: 30, hp: 1050, mp: 240, str: 66, int: 42, dex: 92, vit: 42, luk: 22,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'sonic_wave', 'lightning'],
    expReward: 1660, goldReward: [445, 850],
    drops: [
      { itemId: 'starwatch_silver_ore', chance: 0.22, minQty: 1, maxQty: 1 },
      { itemId: 'silverpine_mica', chance: 0.42, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '盤旋在風切木橋、山羊窄徑與鷹巢尖峰上的銀羽巨鷹，羽尖能切開冰霧。牠會借山風俯衝，將獵物逼向碎石坡邊緣。',
    isBoss: false,
    guardianHints: {
      creature: '風切銀鷹速度極高，聽到風聲變尖時立刻防禦。',
      treasure: '觀星銀礦偶爾會被牠帶回巢中磨爪。',
      spirit: '銀鷹控制著山脈中段的空中路線。',
    },
  },

avalanche_yeti: {
    id: 'avalanche_yeti', name: '雪崩雪人', alias: 'avalancheyeti',
    level: 31, hp: 1560, mp: 220, str: 98, int: 32, dex: 26, vit: 132, luk: 12,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'stone_slam', 'ice_storm', 'howl'],
    expReward: 1780, goldReward: [480, 910],
    drops: [
      { itemId: 'iceglass_ore', chance: 0.46, minQty: 1, maxQty: 2 },
      { itemId: 'frost_herb_bundle', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '雪崩凹地與山羊窄徑附近出沒的厚毛雪人，肩上堆著冰塊與折斷松枝。牠的咆哮能震落積雪，把隊伍埋進半凍泥石中。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '雪崩雪人會重擊與冰風暴，聽到低吼時離開雪壁。',
      treasure: '牠常把冰玻礦與霜草一起帶進雪窩。',
      spirit: '雪人是山脈地形危險本身的活動形態。',
    },
  },

starwatch_frost_giant: {
    id: 'starwatch_frost_giant', name: '觀星霜巨人', alias: 'stargiant',
    level: 34, hp: 1900, mp: 360, str: 110, int: 58, dex: 28, vit: 150, luk: 16,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'stone_slam', 'ice_storm', 'lightning', 'death_mark'],
    expReward: 2100, goldReward: [565, 1080],
    drops: [
      { itemId: 'starwatch_silver_ore', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'iceglass_ore', chance: 0.42, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '守在觀星脊上的霜巨人，背上綁著用銀礦與松木做成的粗糙星盤。牠會用星盤標定闖入者，再引下雷光與冰雪重擊。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '觀星霜巨人會標記、雷擊與冰風暴，先處理標記壓力。',
      treasure: '牠的星盤鑲著大量觀星銀礦。',
      spirit: '霜巨人把山脈最高處視為觀測與狩獵的祭台。',
    },
  },
};
