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
      { itemId: 'hp_potion_m', chance: 0.15, minQty: 1, maxQty: 1 },
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
      { itemId: 'hp_potion_l', chance: 0.15, minQty: 1, maxQty: 1 },
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
};
