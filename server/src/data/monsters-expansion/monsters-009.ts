import type { MonsterDef } from '@game/shared';

export const EXPANSION_MONSTERS_PART_009: Record<string, MonsterDef> = {
arena_veteran_gladiator: {
    id: 'arena_veteran_gladiator', name: '老練角鬥士', alias: 'gladiator',
    level: 30, hp: 1780, mp: 240, str: 112, int: 42, dex: 74, vit: 126, luk: 24,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'slash', 'charge', 'counter_stance', 'taunt'],
    expReward: 2200, goldReward: [560, 1060],
    drops: [
      { itemId: 'referee_seal', chance: 0.46, minQty: 1, maxQty: 2 },
      { itemId: 'betting_house_slip', chance: 0.32, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '上層看台與裁判席安排的老練角鬥士，盔甲上刻滿勝場短線。牠懂得利用觀眾聲浪與場地邊界，把普通交手拖成心理戰。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '老練角鬥士會戰吼與反擊，別在他架勢完整時硬打。',
      treasure: '高階場次的裁判封印較完整。',
      spirit: '角鬥士是正式競技規則下的精英對手。',
    },
  },

arena_masked_challenger: {
    id: 'arena_masked_challenger', name: '面具挑戰者', alias: 'masked',
    level: 34, hp: 1500, mp: 420, str: 86, int: 86, dex: 96, vit: 88, luk: 30,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'shadow_dash', 'slash', 'blind', 'life_drain'],
    expReward: 2500, goldReward: [640, 1220],
    drops: [
      { itemId: 'betting_house_slip', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'referee_seal', chance: 0.34, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '私人包廂與戰術桌常提名的神秘挑戰者，面具遮住身份與流派。牠出場時觀眾會突然安靜，因為沒人知道自己押的是誰。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '面具挑戰者會致盲、突進與吸血，保持解控。',
      treasure: '牠常帶有高賠率下注憑條。',
      spirit: '面具挑戰者把下注、包廂與黑馬挑戰連成一線。',
    },
  },

arena_grand_champion: {
    id: 'arena_grand_champion', name: '中央競技冠軍', alias: 'champion',
    level: 38, hp: 3000, mp: 520, str: 132, int: 76, dex: 82, vit: 168, luk: 34,
    element: 'none',
    family: 'humanoid',
    skills: ['basic_attack', 'slash', 'charge', 'counter_stance', 'taunt', 'death_mark'],
    expReward: 3600, goldReward: [960, 1820],
    drops: [
      { itemId: 'champion_sash', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'referee_seal', chance: 0.7, minQty: 1, maxQty: 3 },
      { itemId: 'betting_house_slip', chance: 0.52, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '中央競技場現任冠軍的試煉投影，披著紅金肩帶，武器依挑戰者距離切換。牠代表城區承認的正式頂點，勝過牠才算真正通過競技試煉。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '中央競技冠軍會戰吼、反擊與死亡印記，架勢完整時先防守。',
      treasure: '牠必定掉落冠軍肩帶，是競技試煉核心證明。',
      spirit: '冠軍把訓練、下注、裁判與榮耀全部收束到中央競技場。',
    },
  },

royal_hunt_hound_pack: {
    id: 'royal_hunt_hound_pack', name: '王獵犬群', alias: 'houndpack',
    level: 18, hp: 860, mp: 80, str: 64, int: 18, dex: 72, vit: 58, luk: 12,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'poison_bite'],
    expReward: 960, goldReward: [230, 440],
    drops: [
      { itemId: 'gamekeeper_salve', chance: 0.22, minQty: 1, maxQty: 1 },
      { itemId: 'royal_hunt_permit', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '獵犬院和王冠獵門附近巡跑的王室犬群，頸圈掛著小銅鈴，鼻端沾著濕草味。牠們不分貴族或盜獵者，只追逐沒有許可章的氣味。',
    isBoss: false,
    guardianHints: {
      creature: '王獵犬群速度快，聽見鈴聲接近時先靠邊站位。',
      treasure: '獵犬院常備獵監傷藥。',
      spirit: '獵犬群代表王室獵場的秩序與警戒。',
    },
  },

mudtusk_boar: {
    id: 'mudtusk_boar', name: '泥牙鬥豬', alias: 'mudboar',
    level: 19, hp: 1040, mp: 60, str: 82, int: 12, dex: 30, vit: 92, luk: 8,
    element: 'nature',
    family: 'beast',
    skills: ['basic_attack', 'charge', 'stone_slam'],
    expReward: 1080, goldReward: [260, 500],
    drops: [
      { itemId: 'boar_trophy_tusk', chance: 0.68, minQty: 1, maxQty: 3 },
      { itemId: 'gamekeeper_salve', chance: 0.14, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '野豬泥沼裡翻拱地面的厚皮鬥豬，獠牙沾著黑泥與碎根。牠衝鋒前會用前蹄刨地，把貴族獵隊的陣形撞散。',
    isBoss: false,
    guardianHints: {
      creature: '泥牙鬥豬衝鋒前會刨地，側移可避開撞擊。',
      treasure: '獵豬戰牙多從牠的厚獠牙取得。',
      spirit: '鬥豬讓獵場保留粗野而可預期的低中階威脅。',
    },
  },

silvertrail_stag: {
    id: 'silvertrail_stag', name: '銀徑角鹿', alias: 'silverstag',
    level: 21, hp: 920, mp: 220, str: 58, int: 54, dex: 78, vit: 62, luk: 20,
    element: 'nature',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'holy_light', 'root_bind'],
    expReward: 1220, goldReward: [300, 570],
    drops: [
      { itemId: 'silver_antler_tip', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'royal_hunt_permit', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '鹿徑與銀徑間出沒的修長角鹿，鹿角邊緣像被月光磨亮。牠會用藤根阻止追獵者靠近幼鹿，只在被逼入死角時反擊。',
    isBoss: false,
    guardianHints: {
      creature: '銀徑角鹿會治癒與根縛，追擊時避免踩進銀色苔痕。',
      treasure: '銀角鹿尖是合法狩獵委託常見證物。',
      spirit: '角鹿是獵場珍稀野獸與狩獵倫理的交界。',
    },
  },

crown_falcon_swarm: {
    id: 'crown_falcon_swarm', name: '王冠獵隼群', alias: 'falcons',
    level: 22, hp: 780, mp: 160, str: 52, int: 36, dex: 96, vit: 40, luk: 18,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'blind', 'poison_arrow'],
    expReward: 1320, goldReward: [330, 630],
    drops: [
      { itemId: 'falconry_jess', chance: 0.62, minQty: 1, maxQty: 2 },
      { itemId: 'silver_antler_tip', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '獵隼棲架和箭靶林上空盤旋的王室猛禽，足繩上的銅扣在陽光下閃爍。牠們會俯衝啄眼，逼獵人低頭失去獵物位置。',
    isBoss: false,
    guardianHints: {
      creature: '王冠獵隼群會致盲，俯衝前會先拉高盤旋。',
      treasure: '獵隼足繩可從掉落的皮帶與銅扣回收。',
      spirit: '獵隼群代表貴族獵術與獵場控制權。',
    },
  },

greenwood_poacher: {
    id: 'greenwood_poacher', name: '綠林盜獵者', alias: 'poacher',
    level: 23, hp: 900, mp: 180, str: 58, int: 38, dex: 86, vit: 54, luk: 20,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'poison_arrow', 'shadow_dash', 'root_bind'],
    expReward: 1420, goldReward: [360, 680],
    drops: [
      { itemId: 'royal_hunt_permit', chance: 0.18, minQty: 1, maxQty: 1 },
      { itemId: 'falconry_jess', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '隱蔽盜獵小徑和貴族獵棚附近活動的偷獵者，箭袋裡混著麻醉針與偽造許可。牠們熟悉巡邏死角，專挑珍稀獵物下手。',
    isBoss: false,
    guardianHints: {
      creature: '綠林盜獵者會毒箭與束縛，先清除高處弓手。',
      treasure: '盜獵者身上可能帶偽造或偷來的王獵許可章。',
      spirit: '盜獵者讓王室獵場的爭端不只來自野獸。',
    },
  },

thornwood_gamekeeper: {
    id: 'thornwood_gamekeeper', name: '棘林失控獵監', alias: 'gamekeeper',
    level: 25, hp: 1180, mp: 240, str: 78, int: 52, dex: 58, vit: 90, luk: 14,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'poison_arrow', 'root_bind', 'bark_shield'],
    expReward: 1600, goldReward: [410, 780],
    drops: [
      { itemId: 'gamekeeper_salve', chance: 0.48, minQty: 1, maxQty: 2 },
      { itemId: 'royal_hunt_permit', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '看守營與箭靶林裡過度執行規章的獵監，披風上縫滿舊許可章。牠會把所有越線者都視為盜獵者，連貴族委託也不例外。',
    isBoss: false,
    guardianHints: {
      creature: '棘林失控獵監會根縛與毒箭，先避開警戒線。',
      treasure: '牠保存獵監傷藥與許可章。',
      spirit: '失控獵監代表王室秩序過度僵化後的危險。',
    },
  },

old_oak_warden: {
    id: 'old_oak_warden', name: '老橡守林衛', alias: 'oakwarden',
    level: 28, hp: 1760, mp: 360, str: 96, int: 72, dex: 20, vit: 150, luk: 10,
    element: 'nature',
    family: 'plant',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'stone_slam', 'nature_drain'],
    expReward: 2200, goldReward: [570, 1080],
    drops: [
      { itemId: 'silver_antler_tip', chance: 0.34, minQty: 1, maxQty: 2 },
      { itemId: 'gamekeeper_salve', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '老橡林立地裡站起的古老守林衛，樹皮上嵌著王室邊界釘與鹿角碎片。牠不追逐獵人，只會封住被破壞的林徑。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '老橡守林衛會護盾、吸取與束縛，屏障期間先防守。',
      treasure: '牠身上常嵌著銀角鹿尖。',
      spirit: '守林衛是獵場本身對過度狩獵的回應。',
    },
  },

griffon_ledge_matriarch: {
    id: 'griffon_ledge_matriarch', name: '獅鷲崖母獸', alias: 'griffonmatriarch',
    level: 30, hp: 1580, mp: 320, str: 104, int: 54, dex: 92, vit: 104, luk: 22,
    element: 'none',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'charge', 'blind', 'poison_arrow'],
    expReward: 2450, goldReward: [640, 1220],
    drops: [
      { itemId: 'falconry_jess', chance: 0.58, minQty: 1, maxQty: 3 },
      { itemId: 'silver_antler_tip', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '獅鷲崖上守巢的猛禽母獸，翼尖帶著王室獵隼足繩纏出的舊傷。牠會把任何靠近巢穴的人當成偷蛋者。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '獅鷲崖母獸會高速俯衝與致盲，看到翼影變大就散開。',
      treasure: '獵隼足繩常纏在牠巢邊。',
      spirit: '母獸讓獵場高處生態與貴族馴禽衝突連起來。',
    },
  },

white_stag_avatar: {
    id: 'white_stag_avatar', name: '白鹿守誓靈', alias: 'whitestag',
    level: 32, hp: 2600, mp: 620, str: 86, int: 118, dex: 80, vit: 142, luk: 32,
    element: 'nature',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'root_bind', 'nature_drain', 'reflect_barrier', 'quick_dash'],
    expReward: 3300, goldReward: [880, 1680],
    drops: [
      { itemId: 'white_stag_oath_mark', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'silver_antler_tip', chance: 0.72, minQty: 1, maxQty: 3 },
      { itemId: 'gamekeeper_salve', chance: 0.5, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '白鹿林深處現身的銀白守護靈，鹿角像由月光與王冠誓約共同長成。牠不是獵物，而是檢驗獵人是否仍懂節制的古老見證。',
    isBoss: true,
    isElite: true,
    respawnTime: 1800,
    guardianHints: {
      creature: '白鹿守誓靈會治療、反射與根縛，屏障期間不要貪攻。',
      treasure: '牠必定掉落白鹿誓印，是王家獵場核心證物。',
      spirit: '白鹿守誓靈把王室狩獵、珍稀野獸與獵場誓約收束在一起。',
    },
  },

ashfall_ash_novice: {
    id: 'ashfall_ash_novice', name: '灰衣失聲修士', alias: 'ashnovice',
    level: 34, hp: 1420, mp: 360, str: 62, int: 96, dex: 46, vit: 90, luk: 14,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'shadow_blast', 'fear', 'life_drain'],
    expReward: 2700, goldReward: [720, 1360],
    drops: [
      { itemId: 'ash_gray_key', chance: 0.34, minQty: 1, maxQty: 1 },
      { itemId: 'soot_scripture_leaf', chance: 0.26, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description:
      '灰門與懺悔小室間遊蕩的初階修士，喉嚨被灰燼封住，只能用鐘聲節拍祈禱。牠們仍守著舊戒律，卻已分不清訪客與罪人。',
    isBoss: false,
    guardianHints: {
      creature: '灰衣失聲修士會恐懼與吸血，鐘聲變低時先解控。',
      treasure: '灰門鑰片常藏在牠的灰袍內襯。',
      spirit: '失聲修士代表灰落修道院最外層的戒律殘響。',
    },
  },

ashfall_cinder_bell_imp: {
    id: 'ashfall_cinder_bell_imp', name: '餘燼鐘魔', alias: 'bellimp',
    level: 34, hp: 1180, mp: 280, str: 58, int: 84, dex: 88, vit: 58, luk: 22,
    element: 'fire',
    family: 'demon',
    skills: ['basic_attack', 'fireball', 'blind', 'quick_dash'],
    expReward: 2660, goldReward: [700, 1320],
    drops: [
      { itemId: 'ash_gray_key', chance: 0.18, minQty: 1, maxQty: 1 },
      { itemId: 'ember_reliquary_oil', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '鐘庭橫梁上跳動的小惡魔，尾巴拖著未熄的鐘繩火星。牠會敲響破鐘引來巡邏，也會把熱灰灑進入侵者眼裡。',
    isBoss: false,
    guardianHints: {
      creature: '餘燼鐘魔會火球與致盲，聽到亂鐘要先處理高處。',
      treasure: '牠常偷走灰門鑰片與聖物餘火油。',
      spirit: '鐘魔把原本召集祈禱的鐘聲扭成警報。',
    },
  },

ashfall_scorched_cloister_monk: {
    id: 'ashfall_scorched_cloister_monk', name: '焦廊焚掌僧', alias: 'burnmonk',
    level: 35, hp: 1680, mp: 220, str: 102, int: 48, dex: 76, vit: 106, luk: 12,
    element: 'fire',
    family: 'humanoid',
    skills: ['basic_attack', 'slash', 'charge', 'fire_breath'],
    expReward: 2900, goldReward: [760, 1440],
    drops: [
      { itemId: 'ember_reliquary_oil', chance: 0.28, minQty: 1, maxQty: 1 },
      { itemId: 'censer_chain_link', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '焦黑迴廊裡仍按武僧步法巡行的墮落僧侶，掌心燒成黑紅裂紋。牠每次出拳都帶起火灰，像在重演修道院被焚的那晚。',
    isBoss: false,
    guardianHints: {
      creature: '焦廊焚掌僧會衝鋒與火息，別站在窄廊正線。',
      treasure: '牠身上可能帶聖物餘火油。',
      spirit: '焚掌僧保存修道院武僧戒律被火焰扭曲後的形態。',
    },
  },

ashfall_broken_font_penitent: {
    id: 'ashfall_broken_font_penitent', name: '破盤悔罪者', alias: 'penitent',
    level: 35, hp: 1540, mp: 420, str: 58, int: 92, dex: 42, vit: 112, luk: 10,
    element: 'light',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'heal', 'death_mark'],
    expReward: 2960, goldReward: [780, 1480],
    drops: [
      { itemId: 'ash_gray_key', chance: 0.26, minQty: 1, maxQty: 1 },
      { itemId: 'soot_scripture_leaf', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'healer',
    description:
      '破聖水盤旁跪伏的悔罪亡者，額頭貼著已焦的赦罪紙。牠會用殘存聖光治癒同伴，卻同時把死亡印記按在活人身上。',
    isBoss: false,
    guardianHints: {
      creature: '破盤悔罪者會治療與死亡印記，優先打斷牠。',
      treasure: '焦黑經頁常黏在聖水盤裂縫。',
      spirit: '悔罪者展現聖光殘響與墮落詛咒並存的矛盾。',
    },
  },

ashfall_blackened_librarian: {
    id: 'ashfall_blackened_librarian', name: '燻黑禁書司書', alias: 'librarian',
    level: 36, hp: 1360, mp: 620, str: 42, int: 126, dex: 54, vit: 82, luk: 18,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'shadow_blast', 'fear', 'death_mark', 'life_drain'],
    expReward: 3200, goldReward: [840, 1580],
    drops: [
      { itemId: 'soot_scripture_leaf', chance: 0.66, minQty: 1, maxQty: 3 },
      { itemId: 'cracked_sanctum_seal', chance: 0.04, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description:
      '燻黑書庫深處翻頁的禁書司書，十指像炭筆一樣留下黑痕。牠不守護書籍內容，只守護那些不該被重新讀出的名字。',
    isBoss: false,
    guardianHints: {
      creature: '燻黑禁書司書會暗影爆破與死亡印記，標記後要轉守。',
      treasure: '焦黑經頁主要從書庫與司書身上取得。',
      spirit: '司書讓修道院的禁儀來源落在書庫線索上。',
    },
  },

ashfall_ember_chapel_cantor: {
    id: 'ashfall_ember_chapel_cantor', name: '餘火禮唱者', alias: 'cantor',
    level: 37, hp: 1500, mp: 560, str: 48, int: 118, dex: 58, vit: 94, luk: 20,
    element: 'fire',
    family: 'beast',
    skills: ['basic_attack', 'fireball', 'holy_light', 'heal', 'meteor'],
    expReward: 3400, goldReward: [900, 1700],
    drops: [
      { itemId: 'ember_reliquary_oil', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'soot_scripture_leaf', chance: 0.26, minQty: 1, maxQty: 1 },
    ],
    aiType: 'healer',
    description:
      '餘火小禮拜堂裡持續唱誦的墮落唱者，聲音帶著火焰噼啪聲。牠會把禱歌變成燃燒的祝福，讓同伴在灰裡重新站起。',
    isBoss: false,
    guardianHints: {
      creature: '餘火禮唱者會治療與隕石，詠唱時集中火力。',
      treasure: '聖物餘火油常保存在禮唱者燈盞內。',
      spirit: '禮唱者連接小禮拜堂與餘火儀式。',
    },
  },

ashfall_censer_wraith: {
    id: 'ashfall_censer_wraith', name: '煙香怨靈', alias: 'censerwraith',
    level: 38, hp: 1460, mp: 500, str: 54, int: 108, dex: 86, vit: 78, luk: 16,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'blind', 'fear', 'soul_drain', 'ethereal_shield'],
    expReward: 3600, goldReward: [940, 1780],
    drops: [
      { itemId: 'censer_chain_link', chance: 0.58, minQty: 1, maxQty: 2 },
      { itemId: 'ember_reliquary_oil', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '煙霧步廊與香爐廳之間聚散的怨靈，身體像被香煙勾出的空洞人形。斷裂鏈節在霧中拖行，聲音比腳步更早抵達。',
    isBoss: false,
    guardianHints: {
      creature: '煙香怨靈會致盲、恐懼與護盾，煙變厚時先停手觀察。',
      treasure: '斷香爐鏈節多從牠拖行的黑鏈取得。',
      spirit: '怨靈把香爐廳從淨化場所轉成迷失魂魄的迴廊。',
    },
  },

ashfall_ossuary_bonekeeper: {
    id: 'ashfall_ossuary_bonekeeper', name: '骨灰藏室守骨者', alias: 'bonekeeper',
    level: 39, hp: 2300, mp: 420, str: 112, int: 72, dex: 40, vit: 168, luk: 12,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'spectral_slash', 'ethereal_shield', 'life_drain'],
    expReward: 4300, goldReward: [1120, 2120],
    drops: [
      { itemId: 'censer_chain_link', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'cracked_sanctum_seal', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '骨灰藏室裡由聖骨、灰罈與黑線縫合成的高大守衛，胸腔內沒有心臟，只有持續飄散的骨灰。牠不離開墓階，只阻止任何人帶走聖骨。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '骨灰藏室守骨者防禦高且會吸血，先破護盾。',
      treasure: '裂聖所封印偶爾夾在聖骨灰罈中。',
      spirit: '守骨者讓地下墓階與聖物庫形成正式門檻。',
    },
  },

ashfall_reliquary_sentinel: {
    id: 'ashfall_reliquary_sentinel', name: '聖物餘燼哨衛', alias: 'sentinel',
    level: 40, hp: 2400, mp: 460, str: 124, int: 78, dex: 54, vit: 176, luk: 14,
    element: 'fire',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'fire_breath', 'reflect_barrier', 'charge'],
    expReward: 4600, goldReward: [1200, 2280],
    drops: [
      { itemId: 'ember_reliquary_oil', chance: 0.62, minQty: 1, maxQty: 2 },
      { itemId: 'cracked_sanctum_seal', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description:
      '聖物庫門前披掛黑銅甲的餘燼哨衛，甲縫裡透出乾淨但危險的火光。牠曾保護聖物免於外敵，如今也保護墮落儀式免於中斷。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '聖物餘燼哨衛會反射與衝鋒，開盾時停用高傷法術。',
      treasure: '聖物餘火油主要保存在牠守護的燈槽中。',
      spirit: '哨衛顯示聖物庫的防線仍完整，只是效忠方向已變。',
    },
  },

ashfall_shadow_belfry_tollkeeper: {
    id: 'ashfall_shadow_belfry_tollkeeper', name: '暗鐘收魂者', alias: 'tollkeeper',
    level: 41, hp: 2200, mp: 620, str: 82, int: 124, dex: 82, vit: 132, luk: 18,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'sonic_wave', 'fear', 'death_mark', 'soul_drain'],
    expReward: 4900, goldReward: [1280, 2420],
    drops: [
      { itemId: 'censer_chain_link', chance: 0.32, minQty: 1, maxQty: 2 },
      { itemId: 'soot_scripture_leaf', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description:
      '暗影鐘樓上倒吊的收魂者，雙手握著裂鐘鐘舌。牠每敲一下鐘，附近亡者就像被點名般抬頭。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '暗鐘收魂者有音波與死亡印記，鐘響後立刻分散。',
      treasure: '牠的鐘舌上常纏著斷香爐鏈節。',
      spirit: '收魂者把鐘樓變成召魂與指揮節點。',
    },
  },

ashfall_dual_altar_absolver: {
    id: 'ashfall_dual_altar_absolver', name: '雙相赦罪司', alias: 'absolver',
    level: 43, hp: 2600, mp: 780, str: 78, int: 146, dex: 64, vit: 150, luk: 24,
    element: 'light',
    family: 'humanoid',
    skills: ['basic_attack', 'holy_light', 'shadow_blast', 'heal', 'reflect_barrier', 'death_mark'],
    expReward: 5600, goldReward: [1460, 2760],
    drops: [
      { itemId: 'cracked_sanctum_seal', chance: 0.34, minQty: 1, maxQty: 1 },
      { itemId: 'soot_scripture_leaf', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'healer',
    description:
      '雙相祭壇前主持錯誤赦罪的高階祭司，半邊法衣潔白，半邊燒成黑灰。牠會同時使用聖光與暗影，把傷口稱為告解，把死亡稱為寬恕。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '雙相赦罪司會治療、反射與死亡印記，先看清法衣亮暗再出手。',
      treasure: '裂聖所封印常由牠保管。',
      spirit: '赦罪司是修道院光暗交錯主題的核心精英。',
    },
  },

ashfall_fallen_abbot: {
    id: 'ashfall_fallen_abbot', name: '灰燼墮院長', alias: 'fallenabbot',
    level: 46, hp: 5200, mp: 1100, str: 118, int: 172, dex: 72, vit: 220, luk: 32,
    element: 'fire',
    family: 'beast',
    skills: ['basic_attack', 'meteor', 'shadow_blast', 'holy_light', 'life_drain', 'reflect_barrier'],
    expReward: 8200, goldReward: [2200, 4200],
    drops: [
      { itemId: 'abbot_ash_crozier_head', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'cracked_sanctum_seal', chance: 0.82, minQty: 1, maxQty: 2 },
      { itemId: 'ember_reliquary_oil', chance: 0.66, minQty: 1, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '灰燼聖所深處仍站在祭壇前的墮落院長，權杖頂端熔成黑玻璃聖徽。牠相信焚毀肉身能保存信仰，因此要把整座修道院化為永不冷卻的灰燼。',
    isBoss: true,
    isElite: true,
    respawnTime: 2400,
    guardianHints: {
      creature: '灰燼墮院長會隕石、吸血、聖光與反射屏障，屏障階段停手整隊。',
      treasure: '牠必定掉落灰院長杖首，是修道院首腦被擊敗的證明。',
      spirit: '墮院長把鐘聲、聖物、外典與灰燼儀式全部收束到灰燼聖所。',
    },
  },

frostbite_whiteout_wolf_pack: {
    id: 'frostbite_whiteout_wolf_pack', name: '白霧雪狼群', alias: 'whitewolves',
    level: 28, hp: 1280, mp: 120, str: 92, int: 24, dex: 104, vit: 78, luk: 18,
    element: 'ice',
    family: 'beast',
    skills: ['basic_attack', 'quick_dash', 'ice_storm'],
    expReward: 2300, goldReward: [600, 1140],
    drops: [
      { itemId: 'frostbite_salve', chance: 0.18, minQty: 1, maxQty: 1 },
      { itemId: 'stormglass_shard', chance: 0.22, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description: '白霧盆地與雪門附近成群狩獵的雪狼，毛色會在暴風裡消失。牠們不急著撕咬獵物，而是把旅人逼離標記路線。',
    isBoss: false,
    guardianHints: {
      creature: '白霧雪狼群會從霧中突進，看到雪面多點腳印就收縮隊形。',
      treasure: '暴雪玻璃片常黏在牠們毛皮間。',
      spirit: '雪狼群建立霜咬隘口入口的迷路與圍獵壓力。',
    },
  },

frostbite_sleet_harrier: {
    id: 'frostbite_sleet_harrier', name: '雨雪裂翼鷂', alias: 'sleetharrier',
    level: 29, hp: 1160, mp: 220, str: 68, int: 62, dex: 128, vit: 58, luk: 24,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'quick_dash', 'blind', 'water_spear'],
    expReward: 2460, goldReward: [640, 1220],
    drops: [
      { itemId: 'stormglass_shard', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'frostbite_salve', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '雨雪哨與冰風切道上空盤旋的高山猛禽，翼羽被凍雨切出裂痕。牠會俯衝啄眼，把旅人趕向風口。',
    isBoss: false,
    guardianHints: {
      creature: '雨雪裂翼鷂會致盲與水矛，俯衝前會逆風停拍一瞬。',
      treasure: '牠巢邊可拾得暴雪玻璃片。',
      spirit: '裂翼鷂讓高處哨點與暴風視線風險連動。',
    },
  },

frostbite_buried_caravan_wight: {
    id: 'frostbite_buried_caravan_wight', name: '埋雪商隊怨影', alias: 'caravanwight',
    level: 30, hp: 1480, mp: 360, str: 68, int: 88, dex: 54, vit: 104, luk: 12,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'life_drain', 'fear', 'death_mark'],
    expReward: 2700, goldReward: [700, 1320],
    drops: [
      { itemId: 'lost_caravan_seal', chance: 0.64, minQty: 1, maxQty: 2 },
      { itemId: 'frostbite_salve', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '埋雪貨車下方仍抓著貨箱的商隊怨影，身上的皮革被冰封成硬殼。牠們會質問每個路過者是否看見自己的貨印。',
    isBoss: false,
    guardianHints: {
      creature: '埋雪商隊怨影會恐懼與死亡印記，先清理貨車周圍。',
      treasure: '失商貨印大多在牠們身上。',
      spirit: '商隊怨影把失蹤商隊從背景事件變成可追查線索。',
    },
  },

frostbite_blue_ice_lizard: {
    id: 'frostbite_blue_ice_lizard', name: '藍冰裂蜥', alias: 'icelizard',
    level: 30, hp: 1540, mp: 260, str: 86, int: 58, dex: 84, vit: 110, luk: 16,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'tail_whip', 'crystal_prison', 'ice_armor'],
    expReward: 2820, goldReward: [740, 1400],
    drops: [
      { itemId: 'blue_ice_core', chance: 0.38, minQty: 1, maxQty: 1 },
      { itemId: 'stormglass_shard', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description: '藍冰橋裂縫裡伏行的冰蜥，鱗片像凍住的玻璃。牠會把獵物推向薄冰，再用水晶牢籠封住退路。',
    isBoss: false,
    guardianHints: {
      creature: '藍冰裂蜥會冰甲與水晶牢籠，別站在橋面裂縫上。',
      treasure: '藍冰核心常從牠胸腹鱗下取出。',
      spirit: '冰蜥讓藍冰橋成為地形危險而不只是通道。',
    },
  },

frostbite_scarred_yeti: {
    id: 'frostbite_scarred_yeti', name: '霜疤雪怪', alias: 'scarredyeti',
    level: 32, hp: 2100, mp: 180, str: 126, int: 28, dex: 46, vit: 152, luk: 10,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'stone_slam', 'charge', 'ice_storm'],
    expReward: 3300, goldReward: [860, 1620],
    drops: [
      { itemId: 'frostbite_salve', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'lost_caravan_seal', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '雪怪抓痕附近巡行的巨獸，肩背全是舊弩傷與凍疤。牠記得商隊火把的味道，會先摧毀任何發光補給。',
    isBoss: false,
    guardianHints: {
      creature: '霜疤雪怪會衝鋒與震擊，看到牠捶胸就散開。',
      treasure: '牠巢穴常有商隊遺失貨印。',
      spirit: '霜疤雪怪連接失商事件與高山獸患。',
    },
  },

frostbite_crystal_fir_lurker: {
    id: 'frostbite_crystal_fir_lurker', name: '晶松伏行者', alias: 'firlurker',
    level: 33, hp: 1760, mp: 420, str: 78, int: 92, dex: 62, vit: 118, luk: 16,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'root_bind', 'ice_storm', 'diamond_skin'],
    expReward: 3560, goldReward: [920, 1740],
    drops: [
      { itemId: 'blue_ice_core', chance: 0.42, minQty: 1, maxQty: 1 },
      { itemId: 'stormglass_shard', chance: 0.24, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description: '晶松林裡從樹影下滑出的冰木伏行者，枝條被凍成透明尖刺。牠會用冰根扣住腳踝，讓暴風完成剩下的事。',
    isBoss: false,
    guardianHints: {
      creature: '晶松伏行者會根縛與鑽石之膚，護甲期間先清小怪。',
      treasure: '藍冰核心會卡在晶松根瘤中。',
      spirit: '伏行者讓霜咬隘口的森林區也保有冰屬威脅。',
    },
  },

frostbite_glacier_golem: {
    id: 'frostbite_glacier_golem', name: '冰河裂心魔像', alias: 'glaciergolem',
    level: 34, hp: 2700, mp: 380, str: 138, int: 60, dex: 24, vit: 196, luk: 8,
    element: 'ice',
    family: 'construct',
    skills: ['basic_attack', 'crystal_slam', 'crystal_prison', 'diamond_skin', 'shatter'],
    expReward: 4400, goldReward: [1140, 2160],
    drops: [
      { itemId: 'blue_ice_core', chance: 0.68, minQty: 1, maxQty: 2 },
      { itemId: 'stormglass_shard', chance: 0.36, minQty: 1, maxQty: 3 },
    ],
    aiType: 'defensive',
    description: '冰河口緩慢移動的藍白魔像，胸口裂縫裡能看見冰核跳光。牠每一步都會讓橋面重新結冰，也讓舊裂縫變得更深。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '冰河裂心魔像會牢籠、硬化與碎裂衝擊，等硬化退去再爆發。',
      treasure: '藍冰核心是牠最主要的掉落。',
      spirit: '冰河魔像是通往高段隘口的耐久門檻。',
    },
  },

frostbite_giant_pathbreaker: {
    id: 'frostbite_giant_pathbreaker', name: '霜巨開路者', alias: 'pathbreaker',
    level: 36, hp: 3100, mp: 300, str: 164, int: 44, dex: 38, vit: 214, luk: 12,
    element: 'ice',
    family: 'elemental',
    skills: ['basic_attack', 'stone_slam', 'charge', 'ice_storm', 'tail_whip'],
    expReward: 5200, goldReward: [1360, 2580],
    drops: [
      { itemId: 'lost_caravan_seal', chance: 0.28, minQty: 1, maxQty: 2 },
      { itemId: 'blue_ice_core', chance: 0.32, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '霜巨人足跡與北行山脊間行走的巨人斥候，拖著像路標一樣高的冰斧。牠不是迷路，而是在替更大的東西開路。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '霜巨開路者會衝鋒與範圍震擊，別站在足跡直線上。',
      treasure: '牠常把商隊貨印串在斧柄上。',
      spirit: '開路者把普通獸患提升為霜巨人軍勢逼近。',
    },
  },

frostbite_dragonbreath_whelp: {
    id: 'frostbite_dragonbreath_whelp', name: '龍息冰棚幼龍', alias: 'icewhelp',
    level: 37, hp: 2550, mp: 620, str: 116, int: 108, dex: 82, vit: 148, luk: 24,
    element: 'ice',
    family: 'dragon',
    skills: ['basic_attack', 'water_spear', 'ice_storm', 'crystal_prison', 'blizzard'],
    expReward: 5600, goldReward: [1460, 2760],
    drops: [
      { itemId: 'blue_ice_core', chance: 0.46, minQty: 1, maxQty: 2 },
      { itemId: 'stormglass_shard', chance: 0.42, minQty: 1, maxQty: 3 },
    ],
    aiType: 'aggressive',
    description: '龍息冰棚上練習吐息的幼龍，冰霧在鼻孔旁凝成小小風暴。牠的吐息還不穩定，卻足以把整段山脊封成白牆。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '龍息冰棚幼龍會暴風雪與水晶牢籠，看到吸氣就離開正面。',
      treasure: '藍冰核心會在幼龍吐息凍結處形成。',
      spirit: '幼龍把霜咬隘口終段推向極北與龍息威脅。',
    },
  },

frostbite_polar_gate_colossus: {
    id: 'frostbite_polar_gate_colossus', name: '極北封門巨像', alias: 'polarcolossus',
    level: 38, hp: 4400, mp: 760, str: 168, int: 118, dex: 34, vit: 260, luk: 18,
    element: 'ice',
    family: 'construct',
    skills: ['basic_attack', 'crystal_slam', 'blizzard', 'reflect_barrier', 'shatter', 'ice_armor'],
    expReward: 7000, goldReward: [1880, 3560],
    drops: [
      { itemId: 'polar_gate_sigil', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'blue_ice_core', chance: 0.76, minQty: 1, maxQty: 3 },
      { itemId: 'stormglass_shard', chance: 0.6, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description: '極北封門前沉睡的巨大冰像，面甲下沒有眼睛，只有暴風雪旋轉。牠會測量每個通行者的體溫，太溫暖者不得越過封門。',
    isBoss: true,
    isElite: true,
    respawnTime: 2100,
    guardianHints: {
      creature: '極北封門巨像會暴風雪、反射與碎裂衝擊，反射期間停手整隊。',
      treasure: '牠必定掉落極北封門印。',
      spirit: '封門巨像把霜咬隘口的商隊失蹤、霜巨人足跡與極北邊界收束起來。',
    },
  },

necropolis_black_gate_wight: {
    id: 'necropolis_black_gate_wight', name: '黑門怨衛', alias: 'gatewight',
    level: 40, hp: 2500, mp: 420, str: 116, int: 78, dex: 56, vit: 168, luk: 12,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'fear', 'death_mark'],
    expReward: 5200, goldReward: [1360, 2580],
    drops: [
      { itemId: 'black_gate_splinter', chance: 0.46, minQty: 1, maxQty: 1 },
      { itemId: 'charnel_ward_phial', chance: 0.16, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '黑門引道上仍保持站哨姿勢的亡者衛兵，鎧甲內只有乾灰和命令。牠會檢查每個活人的影子是否列入死亡名冊。',
    isBoss: false,
    guardianHints: {
      creature: '黑門怨衛會恐懼與死亡印記，進門前先清掉門衛。',
      treasure: '黑門碎楔常掛在怨衛腰甲上。',
      spirit: '怨衛建立死都外門的軍事檢查氣氛。',
    },
  },

necropolis_bone_causeway_lancer: {
    id: 'necropolis_bone_causeway_lancer', name: '白骨堤槍兵', alias: 'bonelancer',
    level: 41, hp: 2320, mp: 260, str: 132, int: 42, dex: 88, vit: 138, luk: 14,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'spectral_slash', 'charge', 'death_mark'],
    expReward: 5480, goldReward: [1440, 2720],
    drops: [
      { itemId: 'grave_banner_cloth', chance: 0.28, minQty: 1, maxQty: 2 },
      { itemId: 'black_gate_splinter', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '白骨堤道兩側列隊衝鋒的長槍兵，槍尖由不知名脊骨磨成。牠們會等戰鼓聲落下才同時踏步。',
    isBoss: false,
    guardianHints: {
      creature: '白骨堤槍兵會衝鋒與死亡印記，聽到踏步整齊時立刻散開。',
      treasure: '墓旗殘布常纏在槍柄上。',
      spirit: '槍兵讓白骨堤道成為軍陣而非單純墓地。',
    },
  },

necropolis_grave_banner_captain: {
    id: 'necropolis_grave_banner_captain', name: '墓旗百夫長', alias: 'bannercaptain',
    level: 43, hp: 3000, mp: 520, str: 138, int: 82, dex: 70, vit: 190, luk: 18,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'spectral_slash', 'fear', 'ethereal_shield', 'death_mark'],
    expReward: 6400, goldReward: [1680, 3180],
    drops: [
      { itemId: 'grave_banner_cloth', chance: 0.64, minQty: 1, maxQty: 3 },
      { itemId: 'crypt_market_token', chance: 0.18, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description: '墓旗線與靜默列陣之間巡視的亡軍百夫長，背後旗架掛滿死名布條。牠舉旗時，附近亡者會重新對齊隊形。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '墓旗百夫長會護盾與標記，旗幟立起時先轉防守。',
      treasure: '墓旗殘布是牠的主要掉落。',
      spirit: '百夫長讓死都外門的亡者軍隊具備指揮核心。',
    },
  },

necropolis_ossuary_collector: {
    id: 'necropolis_ossuary_collector', name: '鐵骨收殮者', alias: 'collector',
    level: 44, hp: 2860, mp: 480, str: 116, int: 96, dex: 50, vit: 206, luk: 10,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'bone_strike', 'soul_drain', 'ethereal_shield'],
    expReward: 6700, goldReward: [1760, 3320],
    drops: [
      { itemId: 'soul_well_residue', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'charnel_ward_phial', chance: 0.24, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '鐵骨藏室裡整理骨骸的高大亡者，手推車上每根骨頭都有軍籍編號。牠會把倒下的人重新歸檔。',
    isBoss: false,
    guardianHints: {
      creature: '鐵骨收殮者防禦高且會靈魂汲取，先破護盾。',
      treasure: '魂井沉渣偶爾卡在牠的骨匣底部。',
      spirit: '收殮者把死亡名冊與骨藏室的行政感連起來。',
    },
  },

necropolis_soul_well_oracle: {
    id: 'necropolis_soul_well_oracle', name: '魂井諭亡者', alias: 'oracle',
    level: 45, hp: 2380, mp: 880, str: 54, int: 164, dex: 62, vit: 126, luk: 22,
    element: 'dark',
    family: 'humanoid',
    skills: ['basic_attack', 'shadow_blast', 'life_drain', 'fear', 'death_mark'],
    expReward: 7200, goldReward: [1880, 3560],
    drops: [
      { itemId: 'soul_well_residue', chance: 0.68, minQty: 1, maxQty: 2 },
      { itemId: 'crypt_market_token', chance: 0.22, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description: '魂井旁低聲宣讀軍令的亡者祭司，井水映不出牠的臉，只映出即將被徵召的名字。',
    isBoss: false,
    guardianHints: {
      creature: '魂井諭亡者會吸血、恐懼與死亡印記，先處理施法者。',
      treasure: '魂井沉渣主要由牠守護。',
      spirit: '諭亡者讓魂井成為死都外門徵兵儀式的核心。',
    },
  },

necropolis_crypt_market_broker: {
    id: 'necropolis_crypt_market_broker', name: '墓市骨券商', alias: 'bonebroker',
    level: 46, hp: 2480, mp: 620, str: 76, int: 130, dex: 94, vit: 130, luk: 28,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'blind', 'shadow_blast', 'quick_dash', 'soul_drain'],
    expReward: 7400, goldReward: [1940, 3680],
    drops: [
      { itemId: 'crypt_market_token', chance: 0.72, minQty: 1, maxQty: 3 },
      { itemId: 'grave_banner_cloth', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '墓市廊裡用骨籌交易姓名的掮客，長袍內襯滿滿都是未使用的死亡契約。牠會把活人的退路賣給亡軍。',
    isBoss: false,
    guardianHints: {
      creature: '墓市骨券商速度快且會致盲，先別讓牠逃到後排。',
      treasure: '墓市骨籌是牠最常見的交易物。',
      spirit: '骨券商讓死都外門有非軍陣的黑市面向。',
    },
  },

necropolis_plague_censer_bearer: {
    id: 'necropolis_plague_censer_bearer', name: '疫香爐抬手', alias: 'censerbearer',
    level: 47, hp: 2760, mp: 720, str: 92, int: 138, dex: 46, vit: 174, luk: 14,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'toxic_cloud', 'fear', 'life_drain', 'ethereal_shield'],
    expReward: 7900, goldReward: [2060, 3900],
    drops: [
      { itemId: 'charnel_ward_phial', chance: 0.52, minQty: 1, maxQty: 2 },
      { itemId: 'soul_well_residue', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '疫香爐旁拖行巨大香爐的亡者，爐煙裡能看見病死者的手影。牠不追人，只讓每個呼吸都變成負擔。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '疫香爐抬手會毒霧與護盾，煙起時先退開。',
      treasure: '屍橋護符瓶能抵禦附近腐敗氣味。',
      spirit: '抬手讓疫香爐成為死都外門的環境威脅。',
    },
  },

necropolis_void_crack_revenant: {
    id: 'necropolis_void_crack_revenant', name: '虛裂歸亡者', alias: 'voidrevenant',
    level: 49, hp: 3200, mp: 820, str: 118, int: 144, dex: 92, vit: 178, luk: 20,
    element: 'dark',
    family: 'undead',
    skills: ['basic_attack', 'shadow_dash', 'shadow_blast', 'soul_drain', 'reflect_barrier'],
    expReward: 9000, goldReward: [2360, 4460],
    drops: [
      { itemId: 'soul_well_residue', chance: 0.44, minQty: 1, maxQty: 2 },
      { itemId: 'black_gate_splinter', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '虛空裂縫裡反覆走出的歸亡者，身體邊緣像被黑門擠壓過。牠記得自己已死，卻不記得是哪一次。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '虛裂歸亡者會突進、吸魂與反射，反射期間停手。',
      treasure: '虛裂附近常凝出魂井沉渣。',
      spirit: '歸亡者把死都外門和更深層虛空裂縫連接起來。',
    },
  },

necropolis_inner_portcullis_marshal: {
    id: 'necropolis_inner_portcullis_marshal', name: '內閘亡軍元帥', alias: 'marshal',
    level: 50, hp: 4200, mp: 760, str: 172, int: 112, dex: 74, vit: 240, luk: 24,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'spectral_slash', 'charge', 'death_mark', 'ethereal_shield'],
    expReward: 10400, goldReward: [2720, 5140],
    drops: [
      { itemId: 'grave_banner_cloth', chance: 0.72, minQty: 2, maxQty: 4 },
      { itemId: 'crypt_market_token', chance: 0.36, minQty: 1, maxQty: 3 },
    ],
    aiType: 'defensive',
    description: '內城閘前統整亡軍列隊的元帥，頭盔面罩沒有縫隙，只傳出整齊軍靴聲。牠一抬手，整座外門都像要關上。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '內閘亡軍元帥會衝鋒、護盾與死亡印記，先拉開隊形。',
      treasure: '牠背後旗架保留大量墓旗殘布。',
      spirit: '元帥是進入死都門檻前的軍陣壓力高點。',
    },
  },

necropolis_dead_city_gatekeeper: {
    id: 'necropolis_dead_city_gatekeeper', name: '死都門檻守將', alias: 'gatekeeper',
    level: 52, hp: 6400, mp: 1250, str: 190, int: 176, dex: 76, vit: 300, luk: 30,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'shadow_blast', 'spectral_slash', 'life_drain', 'death_mark', 'reflect_barrier'],
    expReward: 13200, goldReward: [3500, 6600],
    drops: [
      { itemId: 'dead_city_writ', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'soul_well_residue', chance: 0.78, minQty: 1, maxQty: 3 },
      { itemId: 'grave_banner_cloth', chance: 0.62, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description: '死都門檻前唯一會抬頭看活人的守將，披風像黑門縫裡流出的夜。牠不守一扇門，而是守住生者與死者仍能分辨彼此的最後界線。',
    isBoss: true,
    isElite: true,
    respawnTime: 2700,
    guardianHints: {
      creature: '死都門檻守將會反射、吸血與死亡印記，屏障期間停手整隊。',
      treasure: '牠必定掉落死都入城令。',
      spirit: '守將把外門軍陣、魂井徵召與死都入城資格收束成終點。',
    },
  },

sunspire_white_stone_acolyte: {
    id: 'sunspire_white_stone_acolyte', name: '白石日侍', alias: 'acolyte',
    level: 45, hp: 2600, mp: 720, str: 76, int: 146, dex: 68, vit: 142, luk: 22,
    element: 'light',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'heal', 'sacred_shield'],
    expReward: 7600, goldReward: [1980, 3740],
    drops: [
      { itemId: 'hymn_gold_leaf', chance: 0.36, minQty: 1, maxQty: 2 },
      { itemId: 'sunfire_vial', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'healer',
    description: '白石塔門與日光階間維持禮儀的侍者，額前日紋會在施法時發亮。牠把每個登塔者都視為尚未通過審判的朝聖者。',
    isBoss: false,
    guardianHints: {
      creature: '白石日侍會治療與聖盾，先打斷支援。',
      treasure: '聖歌金箔常藏在牠的禮袍邊緣。',
      spirit: '日侍建立日耀尖塔入口的神聖試煉感。',
    },
  },

sunspire_flameglass_knight: {
    id: 'sunspire_flameglass_knight', name: '焰玻階騎士', alias: 'glassknight',
    level: 46, hp: 3100, mp: 420, str: 152, int: 72, dex: 78, vit: 194, luk: 18,
    element: 'fire',
    family: 'humanoid',
    skills: ['basic_attack', 'slash', 'charge', 'fire_breath'],
    expReward: 8200, goldReward: [2140, 4040],
    drops: [
      { itemId: 'solar_trial_wax', chance: 0.32, minQty: 1, maxQty: 1 },
      { itemId: 'sunfire_vial', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '焰玻步道上守衛窄橋的騎士，鎧甲像半透明紅玻璃。牠每次衝鋒都會在地面留下燃燒的足印。',
    isBoss: false,
    guardianHints: {
      creature: '焰玻階騎士會衝鋒與火息，別站在步道直線上。',
      treasure: '日試蠟印常封在牠的肩甲內側。',
      spirit: '焰玻騎士讓尖塔火線試煉有近戰壓迫。',
    },
  },

sunspire_mirror_lens_keeper: {
    id: 'sunspire_mirror_lens_keeper', name: '聚光鏡守', alias: 'lenskeeper',
    level: 48, hp: 2840, mp: 860, str: 68, int: 168, dex: 84, vit: 146, luk: 24,
    element: 'light',
    family: 'humanoid',
    skills: ['basic_attack', 'holy_light', 'blind', 'reflect_barrier'],
    expReward: 9000, goldReward: [2360, 4460],
    drops: [
      { itemId: 'sunspire_lens_shard', chance: 0.62, minQty: 1, maxQty: 3 },
      { itemId: 'solar_trial_wax', chance: 0.18, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '鏡石臺與聚光鏡室之間校準日光的守衛，面罩由多層鏡片組成。牠會把攻擊折回施術者眼前。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '聚光鏡守會致盲與反射屏障，亮成鏡面時停手。',
      treasure: '日鏡碎片主要從鏡守身上取得。',
      spirit: '鏡守讓尖塔的光線機關成為戰鬥機制。',
    },
  },

sunspire_sunfire_cantor: {
    id: 'sunspire_sunfire_cantor', name: '日火唱詩者', alias: 'cantor',
    level: 49, hp: 2700, mp: 980, str: 58, int: 176, dex: 72, vit: 138, luk: 26,
    element: 'fire',
    family: 'elemental',
    skills: ['basic_attack', 'fireball', 'holy_light', 'heal', 'meteor'],
    expReward: 9600, goldReward: [2520, 4760],
    drops: [
      { itemId: 'sunfire_vial', chance: 0.56, minQty: 1, maxQty: 2 },
      { itemId: 'hymn_gold_leaf', chance: 0.4, minQty: 1, maxQty: 3 },
    ],
    aiType: 'healer',
    description: '聖歌廊與日火唱詩席間領唱的火焰祭者，歌聲會讓燈焰沿牆面奔跑。牠唱到高音時，塔內陰影會被瞬間燒空。',
    isBoss: false,
    guardianHints: {
      creature: '日火唱詩者會治療與隕石，詠唱時集中火力。',
      treasure: '日火小瓶常由唱詩者保管。',
      spirit: '唱詩者把尖塔的神聖與火焰主題結合。',
    },
  },

sunspire_solar_armory_construct: {
    id: 'sunspire_solar_armory_construct', name: '太陽武庫造兵', alias: 'armoryconstruct',
    level: 51, hp: 3900, mp: 620, str: 176, int: 98, dex: 46, vit: 244, luk: 14,
    element: 'light',
    family: 'construct',
    skills: ['basic_attack', 'stone_slam', 'sacred_shield', 'reflect_barrier'],
    expReward: 10800, goldReward: [2820, 5320],
    drops: [
      { itemId: 'sunspire_lens_shard', chance: 0.42, minQty: 1, maxQty: 2 },
      { itemId: 'solar_trial_wax', chance: 0.36, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description: '太陽武庫裡由白石與金屬聖徽組成的造兵，胸口嵌著小型日輪。牠不追逐，只會把闖入者推回試煉線。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '太陽武庫造兵會聖盾與反射，防禦期先整隊。',
      treasure: '日鏡碎片常嵌在牠的胸口日輪。',
      spirit: '造兵讓武庫區成為耐久與反射測試。',
    },
  },

sunspire_ashen_shadow_penitent: {
    id: 'sunspire_ashen_shadow_penitent', name: '灰影悔光者', alias: 'penitent',
    level: 52, hp: 3000, mp: 760, str: 96, int: 142, dex: 90, vit: 162, luk: 20,
    element: 'dark',
    family: 'beast',
    skills: ['basic_attack', 'shadow_blast', 'blind', 'life_drain', 'holy_light'],
    expReward: 11200, goldReward: [2920, 5520],
    drops: [
      { itemId: 'hymn_gold_leaf', chance: 0.32, minQty: 1, maxQty: 2 },
      { itemId: 'sunfire_vial', chance: 0.22, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '灰影邊緣徘徊的失敗朝聖者，半身被日火燒白，半身仍拖著影子。牠會用聖光救自己，再用暗影懲罰別人。',
    isBoss: false,
    guardianHints: {
      creature: '灰影悔光者會致盲、吸血與聖光，先壓低續戰。',
      treasure: '牠身上常有被燒皺的聖歌金箔。',
      spirit: '悔光者補足日耀尖塔被暗影反噬的一面。',
    },
  },

sunspire_seraph_watch_commander: {
    id: 'sunspire_seraph_watch_commander', name: '熾哨翼長', alias: 'wingcommander',
    level: 54, hp: 3600, mp: 980, str: 132, int: 162, dex: 126, vit: 188, luk: 28,
    element: 'light',
    family: 'celestial',
    skills: ['basic_attack', 'holy_light', 'fireball', 'quick_dash', 'divine_shield'],
    expReward: 12400, goldReward: [3240, 6120],
    drops: [
      { itemId: 'solar_trial_wax', chance: 0.52, minQty: 1, maxQty: 2 },
      { itemId: 'sunfire_vial', chance: 0.34, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description: '熾天使哨臺上指揮翼影巡邏的翼長，羽翼像燃燒的白刃。牠會從露臺高處突進，把挑戰者逼回塔內。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '熾哨翼長速度快且會神聖護盾，護盾期先防守。',
      treasure: '日試蠟印常掛在牠的翼甲上。',
      spirit: '翼長讓塔頂前的空中巡邏具有明確指揮者。',
    },
  },

sunspire_wargod_sigil_keeper: {
    id: 'sunspire_wargod_sigil_keeper', name: '戰神印守', alias: 'sigilkeeper',
    level: 56, hp: 4700, mp: 760, str: 210, int: 112, dex: 72, vit: 276, luk: 24,
    element: 'fire',
    family: 'celestial',
    skills: ['basic_attack', 'slash', 'charge', 'fire_breath', 'sacred_shield'],
    expReward: 14000, goldReward: [3660, 6920],
    drops: [
      { itemId: 'solar_trial_wax', chance: 0.66, minQty: 2, maxQty: 3 },
      { itemId: 'sunspire_lens_shard', chance: 0.28, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive',
    description: '戰神印記前駐守的重甲守衛，盾面刻著正午決鬥的圖樣。牠不宣判勝負，只宣判誰還能站著登上日冠核心。',
    isBoss: false,
    isElite: true,
    guardianHints: {
      creature: '戰神印守會衝鋒、火息與聖盾，看到盾面發光就散開。',
      treasure: '大量日試蠟印被壓在牠的盾帶下。',
      spirit: '印守將尖塔試煉推向最後的武力門檻。',
    },
  },

sunspire_day_crown_avatar: {
    id: 'sunspire_day_crown_avatar', name: '日冠顯聖者', alias: 'daycrown',
    level: 58, hp: 7200, mp: 1500, str: 170, int: 230, dex: 92, vit: 320, luk: 36,
    element: 'light',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'meteor', 'reflect_barrier', 'divine_shield', 'fireball'],
    expReward: 16800, goldReward: [4400, 8320],
    drops: [
      { itemId: 'day_crown_sigil', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'sunspire_lens_shard', chance: 0.72, minQty: 2, maxQty: 4 },
      { itemId: 'sunfire_vial', chance: 0.58, minQty: 1, maxQty: 3 },
    ],
    aiType: 'boss',
    description: '日冠核心中由正午光芒凝成的顯聖者，身後日輪像睜開的審判之眼。牠不是神明本身，而是尖塔用來衡量追求神聖力量者的最後答案。',
    isBoss: true,
    isElite: true,
    respawnTime: 3000,
    guardianHints: {
      creature: '日冠顯聖者會隕石、神聖護盾與反射屏障，屏障期間停手整隊。',
      treasure: '牠必定掉落日冠聖印。',
      spirit: '顯聖者把白石塔門、試煉、戰神印記與日冠核心收束為尖塔終點。',
    },
  },

moonshadow_moonlit_page: {
    id: 'moonshadow_moonlit_page', name: '月影侍頁', alias: 'moonpage',
    level: 38, hp: 2100, mp: 520, str: 70, int: 118, dex: 96, vit: 118, luk: 26,
    element: 'light',
    family: 'beast',
    skills: ['basic_attack', 'holy_light', 'quick_dash', 'blind'],
    expReward: 5200, goldReward: [1360, 2580],
    drops: [
      { itemId: 'moonmask_shard', chance: 0.32, minQty: 1, maxQty: 1 },
      { itemId: 'dreamglass_dew', chance: 0.14, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '月影門旁迎接賓客的妖精侍頁，手中銀盤盛著不存在的邀請函。牠會禮貌地要求活人戴上面具，直到對方忘記自己的名字。',
    isBoss: false,
    guardianHints: {
      creature: '月影侍頁會致盲與高速移位，先辨認真正位置。',
      treasure: '月面具碎片常藏在牠的銀盤下。',
      spirit: '侍頁讓月影庭入口具有宮廷禮儀與夢境迷失感。',
    },
  },
};
