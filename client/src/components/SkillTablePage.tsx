type InitialClassId = 'swordsman' | 'mage' | 'ranger' | 'priest';

interface SkillPlan {
  level: number;
  name: string;
  role: string;
  cost: string;
  scope: string;
  tickRule: string;
  upgrades: string[];
}

interface ClassPlan {
  id: InitialClassId;
  name: string;
  fantasy: string;
  tickCore: string;
  resource: string;
  opening: string;
  skills: SkillPlan[];
}

interface AdvancedClassPlan {
  id: string;
  baseClass: string;
  name: string;
  weapon: string;
  role: string;
  soloLoop: string;
  partyValue: string;
  crossRoomPlay: string;
  resourceLoop: string;
  signatureSkills: string[];
}

const classPlans: ClassPlan[] = [
  {
    id: 'swordsman',
    name: '戰士',
    fantasy: '近戰穩定、拉怪、承傷、反擊。能決定怪物何時進房，是隊伍面對多房壓力時的前線。',
    tickCore: '怒氣起手 0/100；使用招式、命中、格擋或被打都會累積怒氣，怒氣足夠後才能開大範圍拉怪。',
    resource: '怒氣：初始 0，上限 100。小招與被打產怒，大招消耗怒氣。',
    opening: '開局就能砍、擋、拉怪，操作直覺且容錯高。',
    skills: [
      {
        level: 1,
        name: '斬擊',
        role: '基礎攻擊',
        cost: '消耗 0 怒氣；命中 +8 怒氣',
        scope: '本房間 / 目前戰鬥目標',
        tickRule: '當 tick 結算時攻擊目前目標；命中後累積怒氣。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 命中額外 +2 怒氣', 'Lv4 對被挑釁目標 +10% 傷害', 'Lv5 命中時 1 tick 破甲'],
      },
      {
        level: 1,
        name: '防禦架勢',
        role: '承傷',
        cost: '消耗 0 怒氣；下 tick 被打 +12 怒氣',
        scope: '自己',
        tickRule: '立即進入防禦狀態；下一個 tick 受到傷害 -35%，被命中時獲得怒氣。',
        upgrades: ['Lv2 減傷提高到 -40%', 'Lv3 被打額外 +4 怒氣', 'Lv4 防禦期間抗打斷', 'Lv5 防禦後下一次斬擊 +15% 傷害'],
      },
      {
        level: 1,
        name: '挑釁',
        role: '單體拉怪',
        cost: '消耗 10 怒氣；成功拉怪 +5 怒氣',
        scope: '本房間 / 指定相鄰方向單體',
        tickRule: '本房怪立刻進戰鬥；隔房目標 arrivalTicks = 1，抵達後優先攻擊你。',
        upgrades: ['Lv2 仇恨提高', 'Lv3 消耗降為 8 怒氣', 'Lv4 本房可同時挑釁 2 隻', 'Lv5 被挑釁目標抵達首 tick 傷害 -15%'],
      },
      {
        level: 5,
        name: '橫掃',
        role: '近戰範圍',
        cost: '消耗 25 怒氣；每命中 1 隻 +2 怒氣',
        scope: '戰鬥中怪物',
        tickRule: '攻擊目前戰鬥中最多 3 隻怪，不影響隔壁房。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 目標數 +1', 'Lv4 命中目標攻擊 -10%，1 tick', 'Lv5 消耗降為 20 怒氣'],
      },
      {
        level: 8,
        name: '極限怒吼',
        role: '四方瞬間拉怪',
        cost: '消耗 70 怒氣；每成功拉進 1 隻 +3 怒氣',
        scope: '東西南北相鄰房間',
        tickRule: 'arrivalTicks = 0，四方可移動怪物立刻進入本房並加入戰鬥；自身 2 tick 受到傷害 -25%。',
        upgrades: ['Lv2 減傷提高到 -30%', 'Lv3 消耗降為 60 怒氣', 'Lv4 拉怪後獲得 MaxHP 10% 護盾', 'Lv5 被拉怪物首 tick 命中 -10%'],
      },
    ],
  },
  {
    id: 'mage',
    name: '法師',
    fantasy: '爆發、詠唱、跨房 AoE。能先轟多房，但必須承擔怪群延遲抵達的風險。',
    tickCore: '準備與詠唱創造爆發窗口；大範圍技能會讓 approaching 倒數成為戰術壓力。',
    resource: 'MP：傳統 RPG 資源，初始為滿值。法術消耗 MP，護盾會把部分傷害轉成 MP 消耗。',
    opening: '開局就能遠距打擊與開盾，傷害高但失誤成本明顯。',
    skills: [
      {
        level: 1,
        name: '魔法飛彈',
        role: '穩定單體',
        cost: '消耗 8 MP',
        scope: '本房間 / 目前戰鬥目標',
        tickRule: '低消耗、穩定命中，適合填補 tick。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 命中 +10%', 'Lv4 20% 機率返還 4 MP', 'Lv5 對施法中目標傷害 +15%'],
      },
      {
        level: 1,
        name: '魔力護盾',
        role: '施法保護',
        cost: '消耗 12 MP',
        scope: '自己',
        tickRule: '2 tick 內受到傷害的 40% 轉為 MP 消耗，降低詠唱被打斷風險。',
        upgrades: ['Lv2 吸收提高到 45%', 'Lv3 持續 +1 tick', 'Lv4 MP 傷害轉換效率提高', 'Lv5 護盾存在時詠唱不會被小傷害打斷'],
      },
      {
        level: 1,
        name: '火球術',
        role: '爆發 / 隔房單體',
        cost: '消耗 15 MP',
        scope: '本房間 / 指定相鄰方向單體',
        tickRule: '隔房命中後目標 arrivalTicks = 2；可能驚動目標房間。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 解鎖隔房施放', 'Lv4 附加燃燒', 'Lv5 濺射 1 個同房目標'],
      },
      {
        level: 5,
        name: '寒冰新星',
        role: '本房控場',
        cost: '消耗 22 MP',
        scope: '本房所有戰鬥怪物',
        tickRule: '造成冰傷並 slow 1 tick；受 slow 的 approaching 怪物 arrivalTicks +1。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 slow 持續 +1 tick', 'Lv4 低機率凍結', 'Lv5 對 approaching 怪物延遲效果提高'],
      },
      {
        level: 8,
        name: '暴風雪',
        role: '四方大範圍法術',
        cost: '消耗 40 MP',
        scope: '東西南北相鄰房間',
        tickRule: '四方房間怪物受冰傷；被命中怪物 arrivalTicks = 3，3 tick 後大量壓力抵達。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 怪物命中 -10%，2 tick', 'Lv4 arrivalTicks +1', 'Lv5 附加 slow 2 tick'],
      },
    ],
  },
  {
    id: 'ranger',
    name: '遊俠',
    fantasy: '偵查、遠距單點、標記、陷阱。最擅長把相鄰房間資訊轉成優勢。',
    tickCore: '專注起手 100/100；攻擊與陷阱消耗專注，偵查、時間流逝、成功閃避與部分命中行為恢復專注。',
    resource: '專注：初始 100，上限 100。每個戰鬥 tick 自然 +5。',
    opening: '開局就能看到隔壁、射隔壁、控制怪物走向。',
    skills: [
      {
        level: 1,
        name: '射擊',
        role: '遠距單體',
        cost: '消耗 10 專注；命中 +3 專注',
        scope: '本房間 / 指定相鄰方向單體',
        tickRule: '隔房命中後目標 arrivalTicks = 1；遠距命中有懲罰，偵查後懲罰降低。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 隔房命中懲罰降低', 'Lv4 對標記目標暴擊提高', 'Lv5 命中後延遲目標 1 tick'],
      },
      {
        level: 1,
        name: '翻滾',
        role: '機動防禦',
        cost: '消耗 15 專注；成功閃避 +20 專注',
        scope: '自己',
        tickRule: '下個 tick 閃避 +25%；若成功閃避，下一次射擊 +15% 傷害。',
        upgrades: ['Lv2 閃避提高到 +30%', 'Lv3 成功閃避回復提高到 +25 專注', 'Lv4 下一射命中 +10%', 'Lv5 成功閃避後重置射擊 CD'],
      },
      {
        level: 1,
        name: '偵查',
        role: '相鄰房情報',
        cost: '消耗 0 專注；使用 +15 專注',
        scope: '指定方向',
        tickRule: '非攻擊行動；顯示指定相鄰房怪物資訊，UI 記錄短時間偵查結果。',
        upgrades: ['Lv2 偵查時間延長', 'Lv3 顯示 HP', 'Lv4 顯示弱點/遠程威脅', 'Lv5 可同時偵查左右相鄰方向'],
      },
      {
        level: 5,
        name: '獵人標記',
        role: '高價值目標鎖定',
        cost: '消耗 25 專注；攻擊標記目標命中時額外 +3 專注',
        scope: '本房間 / 已偵查相鄰房單體',
        tickRule: '標記目標 4 tick；你對該目標傷害 +15%，命中 +10%。',
        upgrades: ['Lv2 傷害加成提高到 +20%', 'Lv3 隊友獲得半額加成', 'Lv4 射擊標記目標額外回 +5 專注', 'Lv5 標記目標抵達時觸發陷阱傷害 +20%'],
      },
      {
        level: 8,
        name: '伏擊陷阱',
        role: '出口控制',
        cost: '消耗 35 專注；陷阱觸發 +10 專注',
        scope: '指定出口',
        tickRule: '持續 5 tick 或觸發 1 次；approaching 怪物抵達該出口時受傷，並 arrivalTicks +1。',
        upgrades: ['Lv2 傷害提高', 'Lv3 可觸發 2 次', 'Lv4 附加 slow', 'Lv5 對標記怪物追加定身'],
      },
    ],
  },
  {
    id: 'priest',
    name: '祭司',
    fantasy: '治療、護盾、聖光、反邪惡。不是打最快，但能撐過高壓 tick。',
    tickCore: '信仰是 0-100 的平衡條，初始 50。攻擊往 0 移動，治療與守護往 100 移動，太靠近端點時同傾向技能會被鎖住。',
    resource: '信仰：初始 50，上限 100。攻擊/審判消耗信仰值，治療/守護增加信仰值。',
    opening: '開局就能補自己、套盾、用聖光攻擊，單人容錯高。',
    skills: [
      {
        level: 1,
        name: '聖光',
        role: '光屬性攻擊',
        cost: '信仰 -12；條件：目前信仰 >= 12',
        scope: '本房間單體',
        tickRule: '造成光屬性傷害，對暗/undead 額外有效。',
        upgrades: ['Lv2 傷害 +8%', 'Lv3 對暗/undead 加成提高', 'Lv4 命中後小回復', 'Lv5 對審判目標追加傷害'],
      },
      {
        level: 1,
        name: '治癒',
        role: '回復',
        cost: '信仰 +15；條件：目前信仰 <= 85',
        scope: '自己 / 隊友',
        tickRule: '戰鬥和平時皆可用；低血量目標獲得額外治療。',
        upgrades: ['Lv2 治療 +8%', 'Lv3 低血量加成', 'Lv4 CD -1', 'Lv5 治療後獲得小護盾'],
      },
      {
        level: 1,
        name: '守護禱言',
        role: '護盾',
        cost: '信仰 +10；條件：目前信仰 <= 90',
        scope: '自己 / 隊友',
        tickRule: '給目標護盾，持續 2 tick；護盾被打破時回復少量 HP。',
        upgrades: ['Lv2 護盾量 +10%', 'Lv3 可指定隊友', 'Lv4 護盾持續 +1 tick', 'Lv5 護盾破裂時額外回復'],
      },
      {
        level: 5,
        name: '淨化',
        role: '解除負面',
        cost: '友方：信仰 +8，條件 <= 92；undead：信仰 -8，條件 >= 8',
        scope: '自己 / 隊友 / undead 目標',
        tickRule: '移除毒、燃燒、減速；對 undead 可造成少量光傷。',
        upgrades: ['Lv2 可移除更多狀態', 'Lv3 淨化後短暫抗性', 'Lv4 可群體淨化', 'Lv5 對 undead 淨化傷害提高'],
      },
      {
        level: 8,
        name: '聖鐘震盪',
        role: '四方反邪惡',
        cost: '信仰 -25；條件：目前信仰 >= 25',
        scope: '東西南北相鄰房間',
        tickRule: '四方暗/undead 受光傷；普通怪被驚動，undead approaching 延遲，arrivalTicks = 2。',
        upgrades: ['Lv2 對 undead 傷害 +15%', 'Lv3 恐懼延遲 +1 tick', 'Lv4 隊友獲得 MaxHP 5% 小盾', 'Lv5 四方邪惡目標命中 -10%，2 tick'],
      },
    ],
  },
];

const advancedClassPlans: AdvancedClassPlan[] = [
  {
    id: 'shield_guard',
    baseClass: '戰士',
    name: '盾衛',
    weapon: '盾牌必備，可搭配單手劍、單手斧、單手錘、短槍',
    role: '格擋坦克、反擊輸出、群嘲守護',
    soloLoop: '擋住 -> 反擊 -> 回怒 -> 再擋住。盾衛不是純肉盾，核心輸出來自被打後的穩定反擊。',
    partyValue: '拉怪、保護隊友、打斷預兆、替隊友承傷。',
    crossRoomPlay: '極限怒吼或鐵壁嘲諷把四方怪拉進來，靠格擋準備與反擊上限撐住第一波壓力。',
    resourceLoop: '怒氣主要來自被打、格擋、防禦與替隊友承傷；怒氣花在盾牆、群嘲與反擊架勢。',
    signatureSkills: [
      '盾擊：20 怒氣，造成盾牌傷害並打斷預兆；若上一 tick 成功格擋，傷害 +30%。',
      '反擊架勢：15 怒氣，3 tick 內受到近戰攻擊時反擊；基礎每 tick 最多 1 次，升級後 2 次。',
      '盾牆：35 怒氣，2 tick 受到傷害 -50%，期間反擊傷害略降但被打回怒更高。',
      '守護誓言：30 怒氣，替隊友承受部分傷害；承傷也可觸發反擊判定。',
      '鐵壁嘲諷：60 怒氣，本房 + 四方相鄰房拉怪，獲得 2 tick 格擋準備並提高反擊上限。',
    ],
  },
  {
    id: 'rage_axe',
    baseClass: '戰士',
    name: '狂斧',
    weapon: '斧 / 巨斧',
    role: '高傷害、低血爆發、吸血、範圍劈砍',
    soloLoop: '用高傷害快速清怪，靠吸血與低血增傷維持危險邊緣。',
    partyValue: '清怪、爆發、破甲，負責把被坦克拉進來的怪群快速削掉。',
    crossRoomPlay: '不擅長安全隔房控場，但怪越多越能透過旋風與吸血把壓力轉成輸出。',
    resourceLoop: '怒氣主要來自攻擊、受傷與低血狀態；怒氣花在血怒、旋風斧與嗜血劈砍。',
    signatureSkills: [
      '血怒：消耗怒氣或 HP，數 tick 內提高傷害，低血時效果更強。',
      '裂骨斬：高單體傷害並破甲，適合打菁英或 Boss。',
      '旋風斧：本房戰鬥範圍攻擊，命中越多怒氣回收越高。',
      '嗜血劈砍：造成傷害並依傷害回復 HP，讓狂斧能 solo 續戰。',
      '瀕死狂暴：低血時怒氣獲取與傷害提高，但承受風險也更高。',
    ],
  },
  {
    id: 'lance_rider',
    baseClass: '戰士',
    name: '槍騎',
    weapon: '槍 / 長柄武器',
    role: '突刺、先制、距離控制、隔房衝鋒',
    soloLoop: '用先制突刺壓低傷害交換，攔截 approaching 怪物，讓戰鬥發生在自己選的節奏。',
    partyValue: '控制怪物抵達節奏、攔截危險目標、對預兆怪或遠程怪做先手壓制。',
    crossRoomPlay: '最擅長處理 approaching：怪還沒到就先刺、延遲、slow，或對指定方向直線衝鋒。',
    resourceLoop: '怒氣來自先手命中、突刺與成功攔截；怒氣花在貫穿衝鋒、槍陣與高威力突刺。',
    signatureSkills: [
      '突刺：高命中單體，對 approaching 或剛抵達目標有額外效果。',
      '攔截：消耗怒氣，提前攻擊 approaching 怪物並使 arrivalTicks +1。',
      '貫穿衝鋒：指定方向直線攻擊，可打到相鄰房目標。',
      '槍陣：指定出口布陣，從該出口抵達的怪物受傷並 slow。',
      '破陣一擊：對正在施放預兆或衝鋒的怪造成高傷並打斷。',
    ],
  },
  {
    id: 'marksman',
    baseClass: '遊俠',
    name: '神射手',
    weapon: '弓 / 弩',
    role: '遠距單體、隔房狙擊、標記爆發',
    soloLoop: '偵查隔壁房，先標記高價值目標，再用狙擊把怪打殘，讓怪抵達前已經失去威脅。',
    partyValue: '處理遠程怪、法師怪、菁英目標；提供弱點標記與單體爆發。',
    crossRoomPlay: '最擅長隔房攻擊，可降低遠距命中懲罰，並讓被命中的怪 arrivalTicks +1。',
    resourceLoop: '專注花在狙擊、穿透與弱點標記；靠偵查、定點射擊準備與命中回收專注。',
    signatureSkills: [
      '狙擊：高專注消耗，指定相鄰房單體高傷害。',
      '穿透箭：指定方向直線穿刺，可打同方向多個目標。',
      '弱點標記：標記目標後隊友對目標暴擊提高。',
      '定點射擊：原地不動準備，下一次射擊大幅增傷。',
      '壓制射擊：命中後使目標 arrivalTicks +1 或降低下一 tick 命中。',
    ],
  },
  {
    id: 'shadow_blade',
    baseClass: '遊俠',
    name: '影刃',
    weapon: '匕首 / 短劍',
    role: '潛行、背刺、毒、單體爆發',
    soloLoop: '偵查目標後潛行接近，靠背刺和毒在短時間內解決單體危險目標。',
    partyValue: '爆發擊殺高威脅目標，施毒削弱怪物，煙幕降低隊伍被追擊壓力。',
    crossRoomPlay: '不走遠距射擊，而是偵查後潛入相鄰房伏擊，或對 approaching 怪物做先制背刺。',
    resourceLoop: '專注花在潛行、背刺、毒刃與煙幕；成功背刺或毒跳可部分回收專注。',
    signatureSkills: [
      '潛行：消耗專注，降低被發現機率，準備背刺。',
      '背刺：對未警戒、被標記或剛抵達目標造成高傷害。',
      '毒刃：讓目標數 tick 掉血，抵達前也會持續受傷。',
      '煙幕脫離：提高閃避，降低追擊壓力，可切斷部分 approaching 仇恨。',
      '暗巷伏擊：對指定出口 approaching 怪物先制攻擊。',
    ],
  },
  {
    id: 'trap_hunter',
    baseClass: '遊俠',
    name: '獵陷師',
    weapon: '弓 / 弩 / 陷阱工具',
    role: '陷阱、控場、拉怪路線、區域準備',
    soloLoop: '先偵查路線，布置出口陷阱，再誘敵讓怪物自己撞進控制區。',
    partyValue: '控制 approaching、保護後排、設置戰鬥場地，讓隊伍不用硬吃怪潮。',
    crossRoomPlay: '最懂地形，能在出口設陷阱、放誘餌、延遲抵達、暈眩或改變怪物路線。',
    resourceLoop: '專注花在陷阱與誘餌；陷阱觸發時回專注，形成準備型循環。',
    signatureSkills: [
      '捕獸夾：指定出口設陷阱，抵達怪物受傷並 arrivalTicks +1。',
      '誘餌：指定方向吸引怪物接近，但不一定立刻進戰鬥。',
      '爆裂陷阱：怪物抵達時造成小範圍傷害。',
      '絆索：approaching 怪物抵達時暈眩 1 tick。',
      '陷阱連鎖：短時間內下一個陷阱觸發後提高另一個陷阱效果。',
    ],
  },
];

const skillPointRules = [
  'Lv2-Lv9 每級獲得 1 點技能點。',
  '技能最高 Lv5，前 10 級大約只能深化 2-3 個核心技能。',
  '升級不只加倍率，也會改變 CD、範圍、arrivalTicks、護盾、命中或控場。',
  'Lv10 後進入一轉分支，技能再開始分路線深化。',
];

export default function SkillTablePage() {
  const totalSkills = classPlans.reduce((sum, plan) => sum + plan.skills.length, 0);
  const groupedAdvanced = advancedClassPlans.reduce<Record<string, AdvancedClassPlan[]>>((groups, plan) => {
    groups[plan.baseClass] = [...(groups[plan.baseClass] ?? []), plan];
    return groups;
  }, {});

  return (
    <div className="h-screen overflow-y-auto bg-bg-primary px-4 py-5 pb-12 text-text-bright scanline lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <header className="border-b border-border-dim pb-4">
          <div className="text-xs uppercase tracking-wide text-text-dim">MUD Combat Draft</div>
          <h1 className="mt-1 text-2xl font-bold text-text-terminal text-glow">初始職業技能草案</h1>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-text-dim">
            這版先定義 Lv1-Lv10 的初始職業體感：每個職業 Lv1 直接有 3 個代表性技能，
            Lv5/Lv8 解鎖新工具，並把 tick、跨房攻擊、arrivalTicks 與技能點深化放進設計。
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <StatPill label="初始職業" value={classPlans.length.toString()} />
            <StatPill label="規劃技能" value={totalSkills.toString()} />
            <StatPill label="二轉草案" value={advancedClassPlans.length.toString()} />
            <StatPill label="技能點" value="Lv2-Lv9 +1/級" />
            <StatPill label="一轉" value="Lv10" />
          </div>
        </header>

        <nav className="sticky top-0 z-20 flex flex-wrap gap-2 border-b border-border-dim bg-bg-primary/95 py-3 backdrop-blur">
          <a className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-bright hover:border-border-glow hover:text-text-terminal" href="#rules">
            共通規則
          </a>
          {classPlans.map((plan) => (
            <a
              key={plan.id}
              className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-bright hover:border-border-glow hover:text-text-terminal"
              href={`#${plan.id}`}
            >
              {plan.name}
            </a>
          ))}
          <a className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-bright hover:border-border-glow hover:text-text-terminal" href="#advanced-classes">
            Lv10 二轉
          </a>
        </nav>

        <section id="rules" className="scroll-mt-28 rounded-md border border-border-dim bg-bg-secondary p-4">
          <h2 className="text-xl font-bold text-text-terminal">共通規則</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <RuleBlock title="跨房交戰">
              技能可以影響本房、指定相鄰房、或東西南北四方房。被打到的怪物依技能進入 approaching，
              倒數歸零後抵達本房並加入戰鬥。
            </RuleBlock>
            <RuleBlock title="arrivalTicks">
              代表怪物還要幾個戰鬥 tick 才抵達。暴風雪這類大範圍法術可設為 3，
              極限怒吼可設為 0，等同瞬間拉進房。
            </RuleBlock>
            <RuleBlock title="技能點">
              {skillPointRules.join(' ')}
            </RuleBlock>
            <RuleBlock title="職業資源">
              戰士怒氣 0/100 起手；遊俠專注 100/100 起手且每戰鬥 tick +5；法師使用傳統 MP；
              祭司信仰 50/100 起手，在審判與慈悲之間擺盪。
            </RuleBlock>
            <RuleBlock title="開局目標">
              玩家一創角就要感覺到職業差異：戰士控壓力、法師打大範圍、遊俠掌握情報、祭司撐住危局。
            </RuleBlock>
          </div>
        </section>

        <main className="flex flex-col gap-6">
          {classPlans.map((plan) => (
            <section key={plan.id} id={plan.id} className="scroll-mt-28">
              <div className="mb-3 grid gap-3 rounded-md border border-border-dim bg-bg-secondary p-4 lg:grid-cols-[1.2fr_1fr_1fr]">
                <div>
                  <h2 className="text-xl font-bold text-text-terminal">{plan.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-text-dim">{plan.fantasy}</p>
                </div>
                <InfoPanel label="Tick 核心" value={plan.tickCore} />
                <InfoPanel label="資源與開局" value={`${plan.resource} ${plan.opening}`} />
              </div>
              <SkillPlanTable skills={plan.skills} />
            </section>
          ))}

          <section id="advanced-classes" className="scroll-mt-28">
            <div className="mb-3 rounded-md border border-border-dim bg-bg-secondary p-4">
              <h2 className="text-xl font-bold text-text-terminal">Lv10 二轉職業草案</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-text-dim">
                二轉開始允許武器專精與玩法鎖定。初始職業保持泛用，Lv10 後用武器、資源循環與跨房工具切出身份。
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {Object.entries(groupedAdvanced).map(([baseClass, plans]) => (
                <div key={baseClass} className="rounded-md border border-border-dim bg-bg-secondary p-4">
                  <div className="mb-3 flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-text-terminal">{baseClass}二轉</h3>
                      <div className="mt-1 text-xs text-text-dim">{plans.length} 條專精路線</div>
                    </div>
                  </div>
                  <div className="grid gap-3 xl:grid-cols-3">
                    {plans.map((plan) => <AdvancedClassCard key={plan.id} plan={plan} />)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SkillPlanTable({ skills }: { skills: SkillPlan[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border-dim bg-bg-secondary">
      <table className="min-w-[1120px] w-full border-collapse text-left text-sm">
        <thead className="bg-bg-primary text-xs text-text-dim">
          <tr>
            <Th>解鎖</Th>
            <Th>技能</Th>
            <Th>定位</Th>
            <Th>消耗 / 產生</Th>
            <Th>範圍</Th>
            <Th>Tick / 跨房規則</Th>
            <Th>Lv1-Lv5 深化</Th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.name} className="border-t border-border-dim align-top">
              <Td><span className="font-bold text-text-terminal">Lv.{skill.level}</span></Td>
              <Td><div className="font-bold text-text-bright">{skill.name}</div></Td>
              <Td>{skill.role}</Td>
              <Td><div className="max-w-[220px] text-xs leading-5 text-text-terminal">{skill.cost}</div></Td>
              <Td><span className="text-text-amber">{skill.scope}</span></Td>
              <Td><div className="max-w-sm text-xs leading-5 text-text-dim">{skill.tickRule}</div></Td>
              <Td>
                <div className="flex max-w-xl flex-wrap gap-1">
                  {skill.upgrades.map((upgrade) => (
                    <span key={upgrade} className="rounded border border-border-dim bg-bg-primary px-2 py-1 text-xs text-text-dim">
                      {upgrade}
                    </span>
                  ))}
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdvancedClassCard({ plan }: { plan: AdvancedClassPlan }) {
  return (
    <article className="flex flex-col rounded border border-border-dim bg-bg-primary p-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-lg font-bold text-text-bright">{plan.name}</h4>
          <div className="mt-1 text-xs text-text-amber">{plan.weapon}</div>
        </div>
        <span className="rounded border border-border-dim bg-bg-secondary px-2 py-1 text-xs text-text-terminal">
          {plan.role}
        </span>
      </div>

      <div className="mt-3 grid gap-2 text-xs leading-5 text-text-dim">
        <InfoLine label="單人循環" value={plan.soloLoop} />
        <InfoLine label="組隊價值" value={plan.partyValue} />
        <InfoLine label="跨房玩法" value={plan.crossRoomPlay} />
        <InfoLine label="資源循環" value={plan.resourceLoop} />
      </div>

      <div className="mt-3 border-t border-border-dim pt-3">
        <div className="text-xs font-bold text-text-terminal">代表技能</div>
        <div className="mt-2 flex flex-col gap-1">
          {plan.signatureSkills.map((skill) => (
            <div key={skill} className="rounded border border-border-dim bg-bg-secondary px-2 py-1 text-xs leading-5 text-text-dim">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-text-terminal">{label}：</span>
      <span>{value}</span>
    </div>
  );
}

function RuleBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary p-3">
      <div className="font-bold text-text-terminal">{title}</div>
      <div className="mt-2 text-sm leading-6 text-text-dim">{children}</div>
    </div>
  );
}

function InfoPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary p-3">
      <div className="text-xs text-text-dim">{label}</div>
      <div className="mt-2 text-sm leading-6 text-text-bright">{value}</div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="whitespace-nowrap px-3 py-2 font-bold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-secondary px-3 py-2">
      <span className="text-text-dim">{label}</span>
      <span className="ml-2 font-bold text-text-bright">{value}</span>
    </div>
  );
}
