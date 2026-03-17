// 擴展任務系統 — 50+ 任務定義
// 此檔案定義所有主線、支線、每日、每週任務

import type { QuestDef, QuestObjective, QuestReward } from './quest.js';

// ============================================================
//  擴展任務定義
// ============================================================

export const EXPANDED_QUEST_DEFS: Record<string, QuestDef> = {

  // ═══════════════════════════════════════════════════════════
  //  主線任務 (10) — 連鎖式，需依序完成
  // ═══════════════════════════════════════════════════════════

  main_01_awakening: {
    id: 'main_01_awakening',
    name: '覺醒',
    description: '與村長交談了解世界，並探索新手村的各個角落。',
    type: 'main',
    levelReq: 1,
    objectives: [
      { type: 'talk', targetId: 'village_chief', targetName: '村長', required: 1 },
      { type: 'visit', targetId: 'adventurer_guild', targetName: '冒險者公會', required: 1 },
      { type: 'visit', targetId: 'weapon_shop', targetName: '武器店', required: 1 },
      { type: 'visit', targetId: 'potion_shop', targetName: '藥水店', required: 1 },
    ],
    rewards: { exp: 50, gold: 30 },
    dialogueStart: '歡迎來到這個世界，年輕的冒險者。先四處看看，認識一下村子吧。',
    dialogueComplete: '很好，你已經對村子有了基本的了解。現在是時候踏出第一步了！',
    repeatable: false,
  },

  main_02_first_battle: {
    id: 'main_02_first_battle',
    name: '初戰',
    description: '在訓練場擊敗 5 隻綠史萊姆，證明自己的戰鬥能力。',
    type: 'main',
    levelReq: 3,
    objectives: [
      { type: 'kill', targetId: 'green_slime', targetName: '綠色史萊姆', required: 5 },
    ],
    rewards: { exp: 200, gold: 100 },
    dialogueStart: '想要成為真正的冒險者？先去訓練場證明你能戰鬥吧！',
    dialogueComplete: '不錯的身手！你已經具備了基本的戰鬥能力。',
    repeatable: false,
  },

  main_03_forest_threat: {
    id: 'main_03_forest_threat',
    name: '森林之威脅',
    description: '調查暗影森林的異常，擊敗盤踞在森林中的野狼群。',
    type: 'main',
    levelReq: 8,
    objectives: [
      { type: 'visit', targetId: 'forest_entrance', targetName: '森林入口', required: 1 },
      { type: 'kill', targetId: 'shadow_wolf', targetName: '暗影狼', required: 5 },
      { type: 'talk', targetId: 'forest_ranger', targetName: '巡林者', required: 1 },
    ],
    rewards: { exp: 800, gold: 400 },
    dialogueStart: '暗影森林近來傳出不尋常的嚎叫聲……你願意前去調查嗎？',
    dialogueComplete: '你的報告證實了我們的擔憂。暗影的力量正在蔓延……',
    repeatable: false,
  },

  main_04_coastal_mystery: {
    id: 'main_04_coastal_mystery',
    name: '海岸之謎',
    description: '前往東方海岸調查近來出現的異常潮汐，與船長交談獲取線索。',
    type: 'main',
    levelReq: 12,
    objectives: [
      { type: 'visit', targetId: 'coastal_boardwalk', targetName: '海岸棧道', required: 1 },
      { type: 'visit', targetId: 'tidal_zone', targetName: '潮汐地帶', required: 1 },
      { type: 'talk', targetId: 'ship_captain', targetName: '船長', required: 1 },
    ],
    rewards: { exp: 1500, gold: 700 },
    dialogueStart: '東方海岸傳來了奇怪的消息——潮汐變得異常，漁民們不敢出海。',
    dialogueComplete: '船長的情報指向了海盜的營地……看來幕後有人在操控一切。',
    repeatable: false,
  },

  main_05_pirate_menace: {
    id: 'main_05_pirate_menace',
    name: '海盜禍患',
    description: '突襲海盜營地，擊敗海盜船長以解除海岸的威脅。',
    type: 'main',
    levelReq: 15,
    objectives: [
      { type: 'visit', targetId: 'pirate_camp', targetName: '海盜營地', required: 1 },
      { type: 'kill', targetId: 'pirate', targetName: '海盜', required: 8 },
      { type: 'kill', targetId: 'pirate_captain', targetName: '海盜船長', required: 1 },
    ],
    rewards: { exp: 3000, gold: 1500 },
    dialogueStart: '海盜們的營地就在暗礁附近，你準備好進攻了嗎？',
    dialogueComplete: '海盜船長已被擊敗！海岸的和平暫時恢復了。但在他的日誌中發現了更深的陰謀……',
    repeatable: false,
  },

  main_06_volcanic_awakening: {
    id: 'main_06_volcanic_awakening',
    name: '火山覺醒',
    description: '前往火山地帶，與火焰祭司交談了解火山異動的真相。',
    type: 'main',
    levelReq: 20,
    objectives: [
      { type: 'visit', targetId: 'volcano_base', targetName: '火山腳', required: 1 },
      { type: 'visit', targetId: 'volcano_crater', targetName: '火山口', required: 1 },
      { type: 'talk', targetId: 'flame_priest', targetName: '火焰祭司', required: 1 },
      { type: 'kill', targetId: 'fire_salamander', targetName: '火蜥蜴', required: 5 },
    ],
    rewards: { exp: 5000, gold: 2500 },
    dialogueStart: '火山開始不穩了……古老的封印似乎正在解除。快去找火焰祭司！',
    dialogueComplete: '火焰祭司的警告令人不安——有人正試圖喚醒沉睡在火山中的遠古之力。',
    repeatable: false,
  },

  main_07_frozen_path: {
    id: 'main_07_frozen_path',
    name: '冰封之路',
    description: '穿越冰封雪原的暴風雪，到達冰封城堡並調查守護者的真相。',
    type: 'main',
    levelReq: 25,
    objectives: [
      { type: 'visit', targetId: 'snowfield_entrance', targetName: '雪原入口', required: 1 },
      { type: 'visit', targetId: 'blizzard_path', targetName: '暴雪之路', required: 1 },
      { type: 'visit', targetId: 'ice_castle_gate', targetName: '冰封城門', required: 1 },
      { type: 'talk', targetId: 'ice_castle_guard', targetName: '冰封城守衛', required: 1 },
    ],
    rewards: { exp: 8000, gold: 4000 },
    dialogueStart: '冰封雪原那邊有一座被遺忘的城堡……據說裡面封印著某種力量。',
    dialogueComplete: '冰封城堡的守衛透露了一個驚人的真相——魔族的入侵已經開始了。',
    repeatable: false,
  },

  main_08_demon_invasion: {
    id: 'main_08_demon_invasion',
    name: '魔族入侵',
    description: '深入魔族領地蒐集情報，了解魔族軍團的實力與計劃。',
    type: 'main',
    levelReq: 35,
    objectives: [
      { type: 'visit', targetId: 'demon_border', targetName: '魔族邊境', required: 1 },
      { type: 'visit', targetId: 'demon_village', targetName: '魔族村落', required: 1 },
      { type: 'visit', targetId: 'dark_fortress_gate', targetName: '暗黑要塞大門', required: 1 },
      { type: 'kill', targetId: 'demon_soldier', targetName: '魔族士兵', required: 10 },
    ],
    rewards: { exp: 15000, gold: 8000 },
    dialogueStart: '魔族的軍隊正在集結。我們需要有人潛入敵境蒐集情報……',
    dialogueComplete: '你帶回的情報至關重要。魔族正在召喚更強大的力量——我們需要盟友。',
    repeatable: false,
  },

  main_09_dragon_alliance: {
    id: 'main_09_dragon_alliance',
    name: '龍之聯盟',
    description: '前往龍谷尋找上古龍，說服牠加入對抗魔族的聯盟。',
    type: 'main',
    levelReq: 45,
    objectives: [
      { type: 'visit', targetId: 'dragon_valley_entrance', targetName: '龍谷入口', required: 1 },
      { type: 'visit', targetId: 'elder_dragon_sanctum', targetName: '古龍聖殿', required: 1 },
      { type: 'kill', targetId: 'wyvern', targetName: '飛龍', required: 5 },
      { type: 'kill', targetId: 'dragon_knight', targetName: '龍騎士', required: 3 },
    ],
    rewards: { exp: 30000, gold: 15000 },
    dialogueStart: '唯有龍族的力量才能對抗魔族大軍。前往龍谷，證明你的價值！',
    dialogueComplete: '古龍認可了你的勇氣。龍之聯盟已成——最終的戰鬥即將來臨。',
    repeatable: false,
  },

  main_10_final_battle: {
    id: 'main_10_final_battle',
    name: '最終之戰',
    description: '進入天界廢墟中的神殿，擊敗正在甦醒的戰神以拯救世界。',
    type: 'main',
    levelReq: 55,
    objectives: [
      { type: 'visit', targetId: 'celestial_gate', targetName: '天界之門', required: 1 },
      { type: 'visit', targetId: 'god_chamber', targetName: '神之間', required: 1 },
      { type: 'kill', targetId: 'god_of_war', targetName: '戰神', required: 1 },
    ],
    rewards: { exp: 100000, gold: 50000 },
    dialogueStart: '這就是最後的戰場了。一切的陰謀都指向天界的那個存在——戰神。去終結這一切吧！',
    dialogueComplete: '你擊敗了戰神，拯救了整個世界！你的名字將永遠被銘記在歷史之中。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 新手村 (Lv 1-8)
  // ═══════════════════════════════════════════════════════════

  side_village_01: {
    id: 'side_village_01',
    name: '村莊的鼠患',
    description: '村莊周圍出現了大量田鼠，破壞農作物。消滅 10 隻田鼠來保護村莊。',
    type: 'side',
    levelReq: 2,
    objectives: [
      { type: 'kill', targetId: 'field_rat', targetName: '田鼠', required: 10 },
    ],
    rewards: { exp: 120, gold: 60 },
    dialogueStart: '那些田鼠把我的莊稼都啃光了！你能幫忙消滅 10 隻嗎？',
    dialogueComplete: '太感謝了！莊稼總算安全了。',
    repeatable: false,
  },

  side_village_02: {
    id: 'side_village_02',
    name: '墓地的不安',
    description: '村外墓地出現了骷髏兵，消滅 5 隻以恢復安寧。',
    type: 'side',
    levelReq: 5,
    objectives: [
      { type: 'kill', targetId: 'skeleton_soldier', targetName: '骷髏兵', required: 5 },
    ],
    rewards: { exp: 300, gold: 150 },
    dialogueStart: '墓地那邊……我看到骷髏在走動！你能去看看嗎？',
    dialogueComplete: '骷髏們已經安息了。感謝你的勇氣！',
    repeatable: false,
  },

  side_village_03: {
    id: 'side_village_03',
    name: '失蹤的貨物',
    description: '商隊的貨物在運輸途中失蹤了。探索村莊周邊區域找到線索。',
    type: 'side',
    levelReq: 3,
    objectives: [
      { type: 'visit', targetId: 'village_backhill', targetName: '村後山丘', required: 1 },
      { type: 'visit', targetId: 'abandoned_cottage', targetName: '廢棄小屋', required: 1 },
      { type: 'visit', targetId: 'village_outskirts', targetName: '村莊外圍', required: 1 },
    ],
    rewards: { exp: 180, gold: 100 },
    dialogueStart: '我的貨物在運往村子的路上不見了！能幫我找找嗎？也許在村子周圍有線索。',
    dialogueComplete: '原來貨物被風吹到了山丘那邊！太好了，多虧有你幫忙。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 翠綠平原 (Lv 5-12)
  // ═══════════════════════════════════════════════════════════

  side_plains_01: {
    id: 'side_plains_01',
    name: '狼群危機',
    description: '平原上的野狼越來越多，消滅 8 隻野狼保護旅人安全。',
    type: 'side',
    levelReq: 5,
    objectives: [
      { type: 'kill', targetId: 'wild_wolf', targetName: '野狼', required: 8 },
    ],
    rewards: { exp: 500, gold: 250 },
    dialogueStart: '平原上的野狼太多了，旅人們都不敢走了。你能清除一些嗎？',
    dialogueComplete: '平原上安全多了！旅人們終於可以安心趕路了。',
    repeatable: false,
  },

  side_plains_02: {
    id: 'side_plains_02',
    name: '農夫的請求',
    description: '農夫需要你的幫助——與他交談後，前往平原採集草藥。',
    type: 'side',
    levelReq: 6,
    objectives: [
      { type: 'talk', targetId: 'farmer', targetName: '農夫', required: 1 },
      { type: 'visit', targetId: 'windmill_farm', targetName: '風車農場', required: 1 },
      { type: 'visit', targetId: 'old_well', targetName: '古井', required: 1 },
    ],
    rewards: { exp: 400, gold: 200 },
    dialogueStart: '我家的牛生病了，需要在平原上找特別的草藥。你能幫忙嗎？',
    dialogueComplete: '這些草藥就是我需要的！我家的牛有救了，謝謝你！',
    repeatable: false,
  },

  side_plains_03: {
    id: 'side_plains_03',
    name: '吟遊詩人的故事',
    description: '在平原上找到吟遊詩人，聽他講述關於各地的傳說，並探索他提到的地點。',
    type: 'side',
    levelReq: 7,
    objectives: [
      { type: 'talk', targetId: 'wandering_bard', targetName: '吟遊詩人', required: 1 },
      { type: 'visit', targetId: 'crossroads', targetName: '十字路口', required: 1 },
      { type: 'visit', targetId: 'grass_path', targetName: '草原小徑', required: 1 },
      { type: 'visit', targetId: 'plains_entrance', targetName: '平原入口', required: 1 },
    ],
    rewards: { exp: 450, gold: 200 },
    dialogueStart: '嘿！旅人，想聽一個古老的傳說嗎？去我告訴你的那些地方看看吧！',
    dialogueComplete: '你真的去了所有地方！看來你也是個愛冒險的人啊。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 東方海岸 (Lv 8-15)
  // ═══════════════════════════════════════════════════════════

  side_coast_01: {
    id: 'side_coast_01',
    name: '漁夫的煩惱',
    description: '海蟹入侵了漁場，消滅 5 隻海蟹讓漁夫可以安心捕魚。',
    type: 'side',
    levelReq: 8,
    objectives: [
      { type: 'kill', targetId: 'sea_crab', targetName: '海蟹', required: 5 },
    ],
    rewards: { exp: 700, gold: 350 },
    dialogueStart: '那些巨大的海蟹佔據了我的漁場！幫我趕走牠們吧！',
    dialogueComplete: '漁場清淨了！今天一定能大豐收，謝謝你！',
    repeatable: false,
  },

  side_coast_02: {
    id: 'side_coast_02',
    name: '沉船寶藏',
    description: '探索海岸附近的沉船遺跡，搜尋失落的寶藏。',
    type: 'side',
    levelReq: 10,
    objectives: [
      { type: 'visit', targetId: 'shipwreck', targetName: '沉船', required: 1 },
      { type: 'visit', targetId: 'sea_cave', targetName: '海蝕洞窟', required: 1 },
      { type: 'visit', targetId: 'underwater_cave', targetName: '水下洞穴', required: 1 },
    ],
    rewards: { exp: 1000, gold: 600 },
    dialogueStart: '聽說海岸那邊有艘沉船，裡面可能藏著古代的寶藏。你有興趣去看看嗎？',
    dialogueComplete: '你探索了整個沉船遺跡！雖然寶藏已被歲月侵蝕，但你的勇氣值得嘉獎。',
    repeatable: false,
  },

  side_coast_03: {
    id: 'side_coast_03',
    name: '海蛇退治',
    description: '海域中出現了危險的海蛇，消滅 3 隻以確保航路安全。',
    type: 'side',
    levelReq: 12,
    objectives: [
      { type: 'kill', targetId: 'sea_serpent', targetName: '海蛇', required: 3 },
    ],
    rewards: { exp: 1200, gold: 600 },
    dialogueStart: '最近海蛇頻繁出沒，好幾艘船都被攻擊了。你能幫忙解決嗎？',
    dialogueComplete: '海蛇的威脅解除了，航線又安全了。',
    repeatable: false,
  },

  side_coast_04: {
    id: 'side_coast_04',
    name: '燈塔守護',
    description: '在燈塔附近消滅來犯的深海魚人，守護燈塔的安全。',
    type: 'side',
    levelReq: 13,
    objectives: [
      { type: 'visit', targetId: 'lighthouse', targetName: '燈塔', required: 1 },
      { type: 'kill', targetId: 'deep_fishman', targetName: '深海魚人', required: 5 },
    ],
    rewards: { exp: 1500, gold: 750 },
    dialogueStart: '燈塔守衛回報深海魚人不斷上岸襲擊。你能去燈塔那邊幫忙嗎？',
    dialogueComplete: '燈塔保住了！多虧你及時趕到。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 暗影森林 (Lv 12-20)
  // ═══════════════════════════════════════════════════════════

  side_forest_01: {
    id: 'side_forest_01',
    name: '巡林者的委託',
    description: '暗影狼的數量激增，幫助巡林者消滅 10 隻暗影狼。',
    type: 'side',
    levelReq: 12,
    objectives: [
      { type: 'kill', targetId: 'shadow_wolf', targetName: '暗影狼', required: 10 },
    ],
    rewards: { exp: 1500, gold: 700 },
    dialogueStart: '暗影狼越來越多了，森林的生態正在被破壞。幫我消滅一些吧。',
    dialogueComplete: '暗影狼的數量已經控制住了。辛苦你了，冒險者。',
    repeatable: false,
  },

  side_forest_02: {
    id: 'side_forest_02',
    name: '精靈的遺產',
    description: '與精靈學者交談，前往精靈祭壇探索古代精靈遺留的秘密。',
    type: 'side',
    levelReq: 14,
    objectives: [
      { type: 'talk', targetId: 'elf_scholar', targetName: '精靈學者', required: 1 },
      { type: 'visit', targetId: 'elf_ruins', targetName: '精靈遺跡', required: 1 },
      { type: 'visit', targetId: 'elf_altar', targetName: '精靈祭壇', required: 1 },
    ],
    rewards: { exp: 1800, gold: 900 },
    dialogueStart: '你對精靈的歷史有興趣嗎？森林深處有精靈遺留的祭壇，也許你能找到什麼。',
    dialogueComplete: '你在祭壇上發現的符文非常有價值！這些知識將幫助我們理解精靈的魔法。',
    repeatable: false,
  },

  side_forest_03: {
    id: 'side_forest_03',
    name: '毒霧調查',
    description: '深入森林的沼澤地帶調查異常的毒霧來源。',
    type: 'side',
    levelReq: 15,
    objectives: [
      { type: 'visit', targetId: 'mushroom_swamp', targetName: '蘑菇沼澤', required: 1 },
      { type: 'visit', targetId: 'deep_poison_swamp', targetName: '深層毒沼', required: 1 },
      { type: 'kill', targetId: 'poison_toad', targetName: '毒蟾蜍', required: 3 },
    ],
    rewards: { exp: 2000, gold: 1000 },
    dialogueStart: '沼澤裡的毒霧越來越濃了，一定有什麼東西在製造這些毒氣。去調查一下吧。',
    dialogueComplete: '原來是毒蟾蜍的巢穴造成的。現在毒霧應該會逐漸消散了。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 火山地帶 (Lv 15-22)
  // ═══════════════════════════════════════════════════════════

  side_volcano_01: {
    id: 'side_volcano_01',
    name: '礦工的求救',
    description: '岩石巨人佔據了礦坑，消滅 5 隻以讓礦工們恢復作業。',
    type: 'side',
    levelReq: 15,
    objectives: [
      { type: 'kill', targetId: 'rock_giant', targetName: '岩石巨人', required: 5 },
    ],
    rewards: { exp: 2500, gold: 1200 },
    dialogueStart: '岩石巨人衝進了礦坑！礦工們都跑出來了，你能幫忙清除嗎？',
    dialogueComplete: '礦坑清理乾淨了！礦工們可以回去工作了。',
    repeatable: false,
  },

  side_volcano_02: {
    id: 'side_volcano_02',
    name: '火焰結晶',
    description: '收集火山地帶的特殊火焰素材。擊敗火焰精靈獲取火焰結晶。',
    type: 'side',
    levelReq: 18,
    objectives: [
      { type: 'kill', targetId: 'flame_spirit', targetName: '火焰精靈', required: 5 },
      { type: 'visit', targetId: 'lava_trail', targetName: '熔岩小徑', required: 1 },
    ],
    rewards: { exp: 3000, gold: 1500 },
    dialogueStart: '我需要火焰結晶來鍛造特殊的武器。火焰精靈身上應該有——你能幫忙嗎？',
    dialogueComplete: '這些火焰結晶品質上乘！有了這些，我就能打造出絕世武器了。',
    repeatable: false,
  },

  side_volcano_03: {
    id: 'side_volcano_03',
    name: '鍛造師的挑戰',
    description: '與矮人鍛造師交談，收集他需要的礦石材料。',
    type: 'side',
    levelReq: 20,
    objectives: [
      { type: 'talk', targetId: 'dwarf_blacksmith', targetName: '矮人鍛造師', required: 1 },
      { type: 'visit', targetId: 'dwarf_mine', targetName: '矮人礦坑', required: 1 },
      { type: 'visit', targetId: 'forge_hall', targetName: '鍛造大廳', required: 1 },
      { type: 'kill', targetId: 'lava_worm', targetName: '熔岩蟲', required: 3 },
    ],
    rewards: { exp: 3500, gold: 1800 },
    dialogueStart: '想讓我幫你打造武器？先去礦坑收集我需要的材料，順便清除那些討厭的熔岩蟲！',
    dialogueComplete: '好材料！你通過了我的考驗。以後有什麼想打造的，儘管來找我。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 水晶洞窟 (Lv 18-28)
  // ═══════════════════════════════════════════════════════════

  side_crystal_01: {
    id: 'side_crystal_01',
    name: '水晶研究',
    description: '為水晶學者收集研究樣本——擊敗水晶蜥蜴和水晶守護者。',
    type: 'side',
    levelReq: 18,
    objectives: [
      { type: 'talk', targetId: 'crystal_scholar', targetName: '水晶學者', required: 1 },
      { type: 'kill', targetId: 'crystal_lizard', targetName: '水晶蜥蜴', required: 5 },
      { type: 'kill', targetId: 'crystal_golem', targetName: '水晶魔像', required: 2 },
    ],
    rewards: { exp: 3000, gold: 1500 },
    dialogueStart: '這些水晶蘊含著古老的魔力。我需要一些樣本——能幫我從怪物身上取得嗎？',
    dialogueComplete: '這些樣本太珍貴了！研究有了重大突破！',
    repeatable: false,
  },

  side_crystal_02: {
    id: 'side_crystal_02',
    name: '失落的冒險者',
    description: '在水晶洞窟深處找到亡靈冒險者的遺骸，了解他的故事。',
    type: 'side',
    levelReq: 20,
    objectives: [
      { type: 'talk', targetId: 'dead_adventurer', targetName: '亡靈冒險者', required: 1 },
      { type: 'visit', targetId: 'mine_depths', targetName: '礦坑深處', required: 1 },
      { type: 'visit', targetId: 'underground_river', targetName: '地下河', required: 1 },
    ],
    rewards: { exp: 3500, gold: 1800 },
    dialogueStart: '洞窟深處似乎有一個不安的靈魂……你敢去見他嗎？',
    dialogueComplete: '你聽取了亡靈的遺言，讓他終於得到了安息。',
    repeatable: false,
  },

  side_crystal_03: {
    id: 'side_crystal_03',
    name: '寶石之路',
    description: '探索水晶洞窟的所有區域，繪製完整的洞窟地圖。',
    type: 'side',
    levelReq: 22,
    objectives: [
      { type: 'visit', targetId: 'cave_entrance', targetName: '洞窟入口', required: 1 },
      { type: 'visit', targetId: 'luminous_tunnel', targetName: '發光隧道', required: 1 },
      { type: 'visit', targetId: 'crystal_hall', targetName: '水晶大廳', required: 1 },
      { type: 'visit', targetId: 'amethyst_corridor', targetName: '紫水晶走廊', required: 1 },
      { type: 'visit', targetId: 'diamond_chamber', targetName: '鑽石密室', required: 1 },
    ],
    rewards: { exp: 4000, gold: 2000 },
    dialogueStart: '沒有人完整探索過水晶洞窟的每個角落。你願意挑戰嗎？',
    dialogueComplete: '難以置信！你繪製的地圖是有史以來最完整的！',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 冰封雪原 (Lv 22-30)
  // ═══════════════════════════════════════════════════════════

  side_snow_01: {
    id: 'side_snow_01',
    name: '雪狼退治',
    description: '雪原上的雪狼群威脅到了營地的安全，消滅 10 隻雪狼。',
    type: 'side',
    levelReq: 22,
    objectives: [
      { type: 'kill', targetId: 'snow_wolf', targetName: '雪狼', required: 10 },
    ],
    rewards: { exp: 5000, gold: 2500 },
    dialogueStart: '雪狼群整晚都在營地外嚎叫，我們快撐不住了。能幫忙驅趕嗎？',
    dialogueComplete: '雪狼撤退了！我們終於可以安心休息了。',
    repeatable: false,
  },

  side_snow_02: {
    id: 'side_snow_02',
    name: '毛皮採集',
    description: '為毛皮商人採集高品質毛皮——獵殺雪狼和冰元素。',
    type: 'side',
    levelReq: 24,
    objectives: [
      { type: 'talk', targetId: 'fur_merchant', targetName: '毛皮商人', required: 1 },
      { type: 'kill', targetId: 'snow_wolf', targetName: '雪狼', required: 5 },
      { type: 'kill', targetId: 'ice_elemental', targetName: '冰元素', required: 3 },
    ],
    rewards: { exp: 5500, gold: 3000 },
    dialogueStart: '我需要上等的雪狼毛皮和冰元素結晶。價錢好商量！',
    dialogueComplete: '這些品質太好了！你可真是個厲害的獵人。',
    repeatable: false,
  },

  side_snow_03: {
    id: 'side_snow_03',
    name: '冰封城堡調查',
    description: '探索冰封城堡的各個區域，揭開這座古老城堡的秘密。',
    type: 'side',
    levelReq: 28,
    objectives: [
      { type: 'visit', targetId: 'ice_castle_gate', targetName: '冰封城門', required: 1 },
      { type: 'visit', targetId: 'ice_throne', targetName: '冰封王座', required: 1 },
      { type: 'visit', targetId: 'crystal_ice_cave', targetName: '水晶冰洞', required: 1 },
      { type: 'talk', targetId: 'ice_castle_guard', targetName: '冰封城守衛', required: 1 },
    ],
    rewards: { exp: 7000, gold: 3500 },
    dialogueStart: '冰封城堡裡隱藏著太多秘密了。你敢進去探索嗎？',
    dialogueComplete: '你發現了關於冰封王國的重要歷史。這些知識非常寶貴。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 魔族領地 (Lv 30-40)
  // ═══════════════════════════════════════════════════════════

  side_demon_01: {
    id: 'side_demon_01',
    name: '魔族偵察',
    description: '潛入魔族領地的各個據點，蒐集關於魔族軍隊的情報。',
    type: 'side',
    levelReq: 30,
    objectives: [
      { type: 'visit', targetId: 'demon_border', targetName: '魔族邊境', required: 1 },
      { type: 'visit', targetId: 'scorched_plains', targetName: '焦土平原', required: 1 },
      { type: 'visit', targetId: 'demon_village', targetName: '魔族村落', required: 1 },
      { type: 'visit', targetId: 'blood_river', targetName: '血河', required: 1 },
    ],
    rewards: { exp: 10000, gold: 5000 },
    dialogueStart: '我們需要了解魔族的部署。你願意冒險潛入偵察嗎？',
    dialogueComplete: '你帶回來的情報非常重要！我們終於能制定反擊計劃了。',
    repeatable: false,
  },

  side_demon_02: {
    id: 'side_demon_02',
    name: '惡魔獵殺',
    description: '消滅各類魔族怪物，削弱魔族的戰力。',
    type: 'side',
    levelReq: 33,
    objectives: [
      { type: 'kill', targetId: 'imp', targetName: '小惡魔', required: 10 },
      { type: 'kill', targetId: 'demon_soldier', targetName: '魔族士兵', required: 5 },
      { type: 'kill', targetId: 'hellhound', targetName: '地獄犬', required: 3 },
    ],
    rewards: { exp: 12000, gold: 6000 },
    dialogueStart: '每消滅一個魔族，我們的勝算就多一分。去吧，勇士！',
    dialogueComplete: '魔族的前鋒部隊已經被你大幅削弱了！',
    repeatable: false,
  },

  side_demon_03: {
    id: 'side_demon_03',
    name: '暗黑要塞突破',
    description: '突破暗黑要塞的防線，深入要塞內部進行破壞。',
    type: 'side',
    levelReq: 38,
    objectives: [
      { type: 'visit', targetId: 'dark_fortress_gate', targetName: '暗黑要塞大門', required: 1 },
      { type: 'visit', targetId: 'demon_barracks', targetName: '魔族兵營', required: 1 },
      { type: 'visit', targetId: 'summoning_circle', targetName: '召喚法陣', required: 1 },
      { type: 'kill', targetId: 'demon_general', targetName: '魔族將軍', required: 1 },
    ],
    rewards: { exp: 18000, gold: 9000 },
    dialogueStart: '暗黑要塞是魔族的核心據點。如果能破壞它，魔族的進攻就會瓦解！',
    dialogueComplete: '你竟然成功突破了暗黑要塞！這將極大地動搖魔族的士氣！',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 龍谷 (Lv 40-50)
  // ═══════════════════════════════════════════════════════════

  side_dragon_01: {
    id: 'side_dragon_01',
    name: '龍蛋守護',
    description: '龍蛋孵化室面臨威脅，前往守護珍貴的龍蛋。',
    type: 'side',
    levelReq: 40,
    objectives: [
      { type: 'visit', targetId: 'dragon_egg_chamber', targetName: '龍蛋孵化室', required: 1 },
      { type: 'kill', targetId: 'young_dragon', targetName: '幼龍', required: 3 },
      { type: 'visit', targetId: 'dragon_nest_path', targetName: '龍巢小徑', required: 1 },
    ],
    rewards: { exp: 20000, gold: 10000 },
    dialogueStart: '龍蛋孵化室遭到了入侵者的威脅。你願意前去守護嗎？',
    dialogueComplete: '龍蛋安全了！龍族會記住你的恩情。',
    repeatable: false,
  },

  side_dragon_02: {
    id: 'side_dragon_02',
    name: '飛龍退治',
    description: '兇猛的飛龍在龍谷上空肆虐，消滅 5 隻飛龍。',
    type: 'side',
    levelReq: 43,
    objectives: [
      { type: 'kill', targetId: 'wyvern', targetName: '飛龍', required: 5 },
    ],
    rewards: { exp: 25000, gold: 12000 },
    dialogueStart: '那些飛龍不屬於龍谷的族群——牠們是外來的侵入者。幫我們消滅牠們！',
    dialogueComplete: '飛龍的威脅解除了。龍谷恢復了平靜。',
    repeatable: false,
  },

  side_dragon_03: {
    id: 'side_dragon_03',
    name: '龍骨收集',
    description: '在龍骨原野收集散落的遠古龍骨，並擊敗守護它們的古代飛龍。',
    type: 'side',
    levelReq: 46,
    objectives: [
      { type: 'visit', targetId: 'dragon_bone_field', targetName: '龍骨原野', required: 1 },
      { type: 'visit', targetId: 'ancient_dragon_lair', targetName: '古龍巢穴', required: 1 },
      { type: 'kill', targetId: 'ancient_wyrm', targetName: '古代蛟龍', required: 2 },
    ],
    rewards: { exp: 28000, gold: 14000 },
    dialogueStart: '龍骨蘊含著強大的魔力。如果能收集到足夠的龍骨，就能製作傳說級的裝備。',
    dialogueComplete: '這些龍骨的品質超乎想像！這些材料足以鍛造傳說武器了。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  支線任務 — 深淵/天界 (Lv 50-60)
  // ═══════════════════════════════════════════════════════════

  side_abyss_01: {
    id: 'side_abyss_01',
    name: '虛空探索',
    description: '深入深淵裂隙探索虛空之中的未知領域。',
    type: 'side',
    levelReq: 50,
    objectives: [
      { type: 'visit', targetId: 'abyss_entrance', targetName: '深淵入口', required: 1 },
      { type: 'visit', targetId: 'void_corridor', targetName: '虛空走廊', required: 1 },
      { type: 'visit', targetId: 'shadow_realm', targetName: '暗影領域', required: 1 },
      { type: 'visit', targetId: 'chaos_bridge', targetName: '混沌之橋', required: 1 },
    ],
    rewards: { exp: 40000, gold: 20000 },
    dialogueStart: '深淵的裂隙已經打開。裡面的世界超越常理——你準備好面對未知了嗎？',
    dialogueComplete: '你竟然從虛空中活著回來了！你帶回的見聞令人震驚。',
    repeatable: false,
  },

  side_abyss_02: {
    id: 'side_abyss_02',
    name: '噩夢淨化',
    description: '深淵中的噩夢生物正在滲透現實世界，將牠們消滅。',
    type: 'side',
    levelReq: 52,
    objectives: [
      { type: 'kill', targetId: 'nightmare', targetName: '噩夢', required: 5 },
      { type: 'kill', targetId: 'void_walker', targetName: '虛空行者', required: 3 },
      { type: 'kill', targetId: 'shadow_demon', targetName: '暗影惡魔', required: 3 },
    ],
    rewards: { exp: 45000, gold: 22000 },
    dialogueStart: '噩夢的力量正在侵蝕現實。你必須在它們完全蘇醒之前將其淨化！',
    dialogueComplete: '深淵的污染已被你大幅清除。世界暫時安全了。',
    repeatable: false,
  },

  side_celestial_01: {
    id: 'side_celestial_01',
    name: '天使的試煉',
    description: '通過天界的三重試煉，證明你有資格踏入神域。',
    type: 'side',
    levelReq: 55,
    objectives: [
      { type: 'visit', targetId: 'celestial_gate', targetName: '天界之門', required: 1 },
      { type: 'visit', targetId: 'angel_garden', targetName: '天使花園', required: 1 },
      { type: 'visit', targetId: 'judgment_hall', targetName: '審判大廳', required: 1 },
      { type: 'kill', targetId: 'celestial_guardian', targetName: '天界守護者', required: 3 },
    ],
    rewards: { exp: 50000, gold: 25000 },
    dialogueStart: '天界並非凡人所能踏足之地。但你——也許是個例外。通過試煉證明你的資格吧。',
    dialogueComplete: '你通過了天界的試煉！天使們認可了你的力量與品格。',
    repeatable: false,
  },

  side_celestial_02: {
    id: 'side_celestial_02',
    name: '神之圖書館',
    description: '探索天界的神聖圖書館，收集關於創世的古老知識。',
    type: 'side',
    levelReq: 57,
    objectives: [
      { type: 'visit', targetId: 'divine_library', targetName: '神聖圖書館', required: 1 },
      { type: 'visit', targetId: 'starlight_path', targetName: '星光之路', required: 1 },
      { type: 'visit', targetId: 'eternal_sanctuary', targetName: '永恆聖殿', required: 1 },
      { type: 'kill', targetId: 'fallen_angel', targetName: '墮天使', required: 2 },
    ],
    rewards: { exp: 55000, gold: 28000 },
    dialogueStart: '神聖圖書館裡記載著創世的真相。但要小心——守護知識的力量並不友善。',
    dialogueComplete: '你獲得了創世的知識。這些真相將永遠改變你對世界的理解。',
    repeatable: false,
  },

  // ═══════════════════════════════════════════════════════════
  //  每日任務 (3)
  // ═══════════════════════════════════════════════════════════

  daily_hunt: {
    id: 'daily_hunt',
    name: '每日狩獵',
    description: '消滅 20 隻任意怪物，完成今日的狩獵委託。',
    type: 'daily',
    levelReq: 1,
    objectives: [
      { type: 'kill', targetId: '*', targetName: '任意怪物', required: 20 },
    ],
    rewards: { exp: 500, gold: 200 },
    dialogueStart: '冒險者公會的每日狩獵委託：今天消滅 20 隻怪物！',
    dialogueComplete: '每日狩獵委託完成！明天記得再來接取。',
    repeatable: true,
  },

  daily_gather: {
    id: 'daily_gather',
    name: '每日採集',
    description: '探索 5 個不同的地點，完成今日的探勘任務。',
    type: 'daily',
    levelReq: 1,
    objectives: [
      { type: 'visit', targetId: '*', targetName: '任意地點', required: 5 },
    ],
    rewards: { exp: 400, gold: 150 },
    dialogueStart: '今日的探勘任務：造訪 5 個不同的地點！',
    dialogueComplete: '每日探勘任務完成！你的足跡遍佈大地。',
    repeatable: true,
  },

  daily_dungeon: {
    id: 'daily_dungeon',
    name: '每日副本',
    description: '擊殺任意 BOSS 級怪物，完成今日的精英挑戰。',
    type: 'daily',
    levelReq: 10,
    objectives: [
      { type: 'kill', targetId: '*boss*', targetName: 'BOSS 怪物', required: 1 },
    ],
    rewards: { exp: 800, gold: 400 },
    dialogueStart: '精英挑戰：擊殺一隻 BOSS 級怪物！',
    dialogueComplete: '精英挑戰完成！你的實力不容小覷。',
    repeatable: true,
  },

  // ═══════════════════════════════════════════════════════════
  //  每週任務 (2)
  // ═══════════════════════════════════════════════════════════

  weekly_elite: {
    id: 'weekly_elite',
    name: '每週菁英',
    description: '本週內擊敗 3 隻精英怪物（BOSS 級），展現你的頂級戰力。',
    type: 'weekly',
    levelReq: 15,
    objectives: [
      { type: 'kill', targetId: 'boss', targetName: 'BOSS 怪物', required: 3 },
    ],
    rewards: { exp: 3000, gold: 1500 },
    dialogueStart: '每週菁英挑戰：本週擊敗 3 隻 BOSS 級怪物！',
    dialogueComplete: '每週菁英挑戰完成！你是真正的精英獵人。',
    repeatable: true,
  },

  weekly_pvp: {
    id: 'weekly_pvp',
    name: '每週對戰',
    description: '本週內贏得 5 場 PvP 對戰，證明你在冒險者中的實力。',
    type: 'weekly',
    levelReq: 10,
    objectives: [
      { type: 'kill', targetId: 'pvp_win', targetName: 'PvP 對戰勝利', required: 5 },
    ],
    rewards: { exp: 2000, gold: 1000 },
    dialogueStart: '每週對戰挑戰：贏得 5 場 PvP 對戰！',
    dialogueComplete: '每週對戰挑戰完成！你是鬥技場的王者。',
    repeatable: true,
  },
};

// ============================================================
//  主線任務順序表 — 用來檢查前置任務
// ============================================================

export const MAIN_QUEST_ORDER: string[] = [
  'main_01_awakening',
  'main_02_first_battle',
  'main_03_forest_threat',
  'main_04_coastal_mystery',
  'main_05_pirate_menace',
  'main_06_volcanic_awakening',
  'main_07_frozen_path',
  'main_08_demon_invasion',
  'main_09_dragon_alliance',
  'main_10_final_battle',
];

/**
 * 取得主線任務的前置任務 ID
 */
export function getMainQuestPrerequisite(questId: string): string | undefined {
  const idx = MAIN_QUEST_ORDER.indexOf(questId);
  if (idx <= 0) return undefined;
  return MAIN_QUEST_ORDER[idx - 1];
}
