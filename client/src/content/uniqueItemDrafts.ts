import type { EquipSlot, ItemRarity, WeaponType } from '@game/shared';

export type UniqueItemCategory = 'weapon' | 'armor' | 'accessory' | 'offhand';
export type UniqueItemStatus = 'pending' | 'shortlisted' | 'rejected' | 'selected';
export type UniqueItemFamily = 'warrior' | 'mage' | 'priest' | 'ranger' | 'hybrid';

export interface UniqueItemDraft {
  id: string;
  name: string;
  category: UniqueItemCategory;
  typeOrSlot: WeaponType | EquipSlot;
  intendedBuild: UniqueItemFamily;
  rarity: ItemRarity;
  loreSource: string;
  uniqueEffect: string;
  trigger: string;
  targetScope: string;
  cooldownOrLimit: string;
  drawback: string;
  combatRole: string;
  description: string;
  visualPrompt: string;
  mechanicTags: string[];
  selectionStatus: UniqueItemStatus;
}

export const UNIQUE_ITEM_FAMILY_LABELS: Record<UniqueItemFamily, string> = {
  warrior: '戰士系列',
  mage: '法師系列',
  priest: '祭司系列',
  ranger: '遊俠系列',
  hybrid: '跨職業',
};

export const UNIQUE_ITEM_CATEGORY_LABELS: Record<UniqueItemCategory, string> = {
  weapon: '武器',
  armor: '防具',
  accessory: '飾品',
  offhand: '副手',
};

export const UNIQUE_ITEM_STATUS_LABELS: Record<UniqueItemStatus, string> = {
  pending: '待挑選',
  shortlisted: '候選',
  rejected: '淘汰',
  selected: '選定',
};

const BENCHMARK_UNIQUE_ITEM_DRAFTS: UniqueItemDraft[] = [
  {
    id: 'moonwell_roomfall_bow',
    name: '月井落房弓',
    category: 'weapon',
    typeOrSlot: 'bow',
    intendedBuild: 'ranger',
    rarity: 'legendary',
    loreSource: '月井、月影誓鏡雙生、主線月井淨化',
    uniqueEffect: '單體射擊隔房怪物時，該房間所有怪物受到相同傷害。',
    trigger: '使用 cross_room 單體射擊命中隔房怪物',
    targetScope: '目標所在房間全體怪物',
    cooldownOrLimit: '每 4 回合最多 1 次',
    drawback: '觸發後下一次射擊命中率 -18%，且不能再次觸發房間擴散。',
    combatRole: '隔房壓制 / 遠程清場',
    description: '月井守衛曾用這把銀弓從井岸射向霧中的倒影怪物。箭矢命中第一個影子時，月井水面會把傷口複寫到整個房間的敵意上。',
    visualPrompt: '銀白長弓，弓臂像月井水波拉長，弓弦是淡藍水光，兩端有半月銀片與透明月滴晶，深色背景上有細小水紋亮點。',
    mechanicTags: ['cross_room', 'aoe', 'ranged', 'moonwell'],
    selectionStatus: 'pending',
  },
  {
    id: 'bloodsalt_hook_blade_unique',
    name: '血鹽鉤刃',
    category: 'weapon',
    typeOrSlot: 'blade',
    intendedBuild: 'ranger',
    rarity: 'epic',
    loreSource: '血鹽海岸、血鹽走私斬手、沉船稅印主線',
    uniqueEffect: '命中正在 approaching 的敵人時，將其 arrivalTicks 固定為 1 並施加流血；若該敵人本回合抵達，流血立即結算一次。',
    trigger: '近戰或短刃命中 approaching 目標',
    targetScope: '單體 approaching 怪物',
    cooldownOrLimit: '每個目標只能觸發 1 次',
    drawback: '觸發後自己獲得 1 層鹽傷，下一次受到治療 -12%。',
    combatRole: '攔截 / 流血爆發',
    description: '血鹽私掠者把徵稅用的鐵鉤磨成短刃，專門勾住剛踏進船艙的獵物。刃背仍掛著乾硬鹽血，像一張被海風凍住的欠條。',
    visualPrompt: '彎鉤形單手短刃，暗紅血鹽結晶卡在刃背，黑鐵握柄纏濕皮革，刀尖向內倒鉤，邊緣有白色鹽霜與紅色裂紋。',
    mechanicTags: ['approach', 'bleed', 'control', 'coast'],
    selectionStatus: 'pending',
  },
  {
    id: 'ironwood_gate_sword',
    name: '鐵木門誓劍',
    category: 'weapon',
    typeOrSlot: 'sword',
    intendedBuild: 'warrior',
    rarity: 'epic',
    loreSource: '鐵木堡、鐵木門哨兵、邊境軍令',
    uniqueEffect: '成功格擋後，下次單體攻擊改為先嘲諷目標再造成傷害；若目標已被嘲諷，改為把 20% 傷害轉成自身護盾。',
    trigger: '格擋成功後的下一次單體攻擊',
    targetScope: '單體敵人與自身',
    cooldownOrLimit: '每 3 回合最多 1 次',
    drawback: '護盾存在時移動與逃跑成功率 -10%。',
    combatRole: '坦克 / 嘲諷循環',
    description: '鐵木堡守門士兵把自己的退路刻在劍脊上，誓言門未破之前一步不退。這把劍不是為決鬥打造，而是為了把怪物的視線鎖在盾線前。',
    visualPrompt: '寬厚單手劍，黑鐵劍脊嵌入深褐鐵木，護手像城門橫閂，劍面刻有邊境誓約與舊箭痕，沉重守衛風格。',
    mechanicTags: ['block', 'taunt', 'shield', 'tank'],
    selectionStatus: 'pending',
  },
  {
    id: 'ember_bell_greataxe',
    name: '燼鐘裂顱斧',
    category: 'weapon',
    typeOrSlot: 'greataxe',
    intendedBuild: 'warrior',
    rarity: 'legendary',
    loreSource: '灰燼修道院、墮落鐘守、終焰斷岳支線',
    uniqueEffect: '低血時擊殺敵人會敲響燼鐘，使同房其他怪物獲得恐懼並延後 1 tick 行動。',
    trigger: '生命低於 35% 時擊殺怪物',
    targetScope: '同房其他怪物',
    cooldownOrLimit: '每場戰鬥最多 2 次',
    drawback: '每次觸發會消耗目前 12% 最大生命，不能因此死亡。',
    combatRole: '低血連殺 / 控場',
    description: '墮落鐘守把修道院的破鐘熔進斧刃，只有持斧者瀕死時才會發出聲音。那不是鐘聲，而是下一顆頭顱被點名的回音。',
    visualPrompt: '巨大黑紅雙手斧，斧背有破鐘形空洞，刃口流動暗橙熔光，長柄纏灰白祈禱布，整體厚重且有焦黑鐘紋。',
    mechanicTags: ['low_hp', 'kill', 'control', 'fear'],
    selectionStatus: 'pending',
  },
  {
    id: 'stormglass_spellwand',
    name: '風暴玻璃短杖',
    category: 'weapon',
    typeOrSlot: 'wand',
    intendedBuild: 'mage',
    rarity: 'epic',
    loreSource: '風暴高地、風暴玻璃礦獸、雷雨主線',
    uniqueEffect: '若本回合消耗 MP 超過目前 MP 的 30%，下一次法術命中會在目標房間留下一枚風暴玻璃碎片；碎片被 AoE 擊中時爆裂造成雷傷。',
    trigger: '高 MP 消耗法術命中後建立碎片',
    targetScope: '目標所在房間',
    cooldownOrLimit: '同時最多存在 1 枚碎片',
    drawback: '碎片存在時自身受到雷屬性傷害 +15%。',
    combatRole: '元素塑形 / 延遲爆發',
    description: '風暴玻璃礦獸死後留下的晶髓被磨成短杖，能把過量魔力折射成不穩定的雷片。高地礦工說它像握著一小段暴雨。',
    visualPrompt: '短直魔杖，透明藍紫玻璃核心，內部有白色閃電裂紋，黑皮握把纏銅線，杖尖懸著細小雷光碎片。',
    mechanicTags: ['mp', 'aoe', 'lightning', 'delayed'],
    selectionStatus: 'pending',
  },
  {
    id: 'voidwell_grimoire_unique',
    name: '虛井索引黑典',
    category: 'offhand',
    typeOrSlot: 'grimoire',
    intendedBuild: 'mage',
    rarity: 'legendary',
    loreSource: '深淵裂口、虛井守盾、黑曜圖書館',
    uniqueEffect: '擊殺被控制或緩速的敵人時，把溢出傷害記錄成虛井頁碼；下一次法術可消耗頁碼附加等量暗影傷害，上限為施法者等級 x 6。',
    trigger: '擊殺 control/slow 目標',
    targetScope: '自身下一次法術',
    cooldownOrLimit: '最多儲存 1 筆頁碼',
    drawback: '持有頁碼時受到治療會先清空頁碼，不會回復生命。',
    combatRole: '控制收割 / 暗影爆發',
    description: '黑曜圖書館的索引從不記錄書名，只記錄墜入虛井前最後一口氣。術士翻頁時，井底會把尚未用完的死亡吐回戰場。',
    visualPrompt: '黑曜石書殼，中央是無底黑井形凹槽，書角有灰金火痕，頁緣浮著銀色索引籤與向內墜落的星砂。',
    mechanicTags: ['control', 'overkill', 'dark', 'resource'],
    selectionStatus: 'pending',
  },
  {
    id: 'sunpetal_scepter_unique',
    name: '日瓣赦令權杖',
    category: 'weapon',
    typeOrSlot: 'scepter',
    intendedBuild: 'priest',
    rarity: 'legendary',
    loreSource: '日尖塔、白晝冠冕化身、赦令儀式',
    uniqueEffect: '對隊友施加護盾時，若目標沒有負面狀態，改為把護盾的 25% 變成同房全體隊友的小護盾。',
    trigger: '施加 shield 類效果',
    targetScope: '同房隊友',
    cooldownOrLimit: '每 3 回合最多 1 次',
    drawback: '觸發後下一次淨化效果只能移除 1 個負面狀態。',
    combatRole: '隊伍保護 / 護盾擴散',
    description: '日尖塔祭司用這支權杖宣讀赦令，只有未被污染的靈魂能讓光擴散。它要求祭司先守住純淨，再把純淨分給其他人。',
    visualPrompt: '白金權杖，杖首展開八片日瓣光刃，中央透明日晶，細金框與紅金火線，白皮握柄刻有赦令短文。',
    mechanicTags: ['shield', 'party', 'support', 'sunspire'],
    selectionStatus: 'pending',
  },
  {
    id: 'bonechime_holy_tome',
    name: '骨鈴安魂聖典',
    category: 'offhand',
    typeOrSlot: 'holy_tome',
    intendedBuild: 'priest',
    rarity: 'epic',
    loreSource: '白骨鈴墓、骨鳴潛獵者、墓園安魂任務',
    uniqueEffect: '治療生命低於 40% 的隊友時，對同房 undead 敵人附加安魂標記；下一次光屬性傷害會消耗標記並沉默目標。',
    trigger: '低血治療',
    targetScope: '被治療者所在房間的 undead 敵人',
    cooldownOrLimit: '同一目標每 5 回合最多 1 次',
    drawback: '若房內沒有 undead，觸發只產生一半治療量。',
    combatRole: '治療轉控場 / 反不死',
    description: '白骨鈴墓的守墓祭司把未完成的安魂詞縫進聖典。每次救回瀕死者，書脊的小骨鈴都會替另一個亡魂點名。',
    visualPrompt: '灰白布面聖典，書脊掛三枚小骨鈴，封面有淡金安魂符與磨損白蠟，頁緣泛冷白光，神聖但帶墓園氣息。',
    mechanicTags: ['heal', 'undead', 'silence', 'light'],
    selectionStatus: 'pending',
  },
  {
    id: 'reedbound_buckler_unique',
    name: '蘆索迴潮小盾',
    category: 'offhand',
    typeOrSlot: 'shield',
    intendedBuild: 'hybrid',
    rarity: 'rare',
    loreSource: '蘆葦河岸、蛇洲神龕、潮汐巡守',
    uniqueEffect: '成功格擋遠程或隔房傷害時，記錄傷害來源方向；下一次移動到該方向時獲得短暫護盾。',
    trigger: '格擋 ranged/cross_room 傷害',
    targetScope: '自身與出口方向',
    cooldownOrLimit: '同時只能記錄 1 個方向',
    drawback: '記錄方向期間不能觸發閃避增益。',
    combatRole: '探索防禦 / 方向記憶',
    description: '蛇洲巡守把蘆索織成小盾，讓水流記住箭矢來的方向。它不是最硬的盾，但能告訴你下一步該往哪裡頂回去。',
    visualPrompt: '小型圓盾，黑綠蘆葦纖維與皮革交織，邊緣有潮濕骨片，盾心是一枚藍綠水滴銅釘，輕巧偵查風格。',
    mechanicTags: ['block', 'cross_room', 'movement', 'shield'],
    selectionStatus: 'pending',
  },
  {
    id: 'blackflag_oath_ring',
    name: '黑旗餘誓戒',
    category: 'accessory',
    typeOrSlot: 'ring',
    intendedBuild: 'warrior',
    rarity: 'epic',
    loreSource: '黑旗軍團、失落首都、最後軍旗任務',
    uniqueEffect: '使用範圍技能命中 3 個以上敵人時，有 10% 機率重複觸發一次；第二次只觸發附加效果，不再次造成主傷害。',
    trigger: 'AoE 技能命中 3 個以上敵人',
    targetScope: '原 AoE 範圍',
    cooldownOrLimit: '每場戰鬥最多 2 次',
    drawback: '重複觸發後 2 回合內受到嘲諷類效果延長 1 tick。',
    combatRole: '範圍附加 / 機率爆發',
    description: '黑旗軍團的殘戒仍記得那次沒有退路的衝鋒。它不會讓刀刃再砍一次，但會讓戰吼、破甲與恐懼像旗影一樣折返。',
    visualPrompt: '暗鐵戒指，外圈纏焦黑旗布，戒面有半枚金色誓印與小缺口，縫隙透出暗紅戰場火光。',
    mechanicTags: ['aoe', 'trigger', 'warrior', 'blackflag'],
    selectionStatus: 'pending',
  },
  {
    id: 'pearl_oracle_earring',
    name: '珍珠神諭耳墜',
    category: 'accessory',
    typeOrSlot: 'earring',
    intendedBuild: 'mage',
    rarity: 'epic',
    loreSource: '珍珠神諭影、深海神殿、潮聲預言',
    uniqueEffect: '盲放隔房法術若沒有命中目標，會揭露該方向第一個房間的怪物數量與最高等級。',
    trigger: 'cross_room 法術未命中或無目標',
    targetScope: '指定方向相鄰房間',
    cooldownOrLimit: '每 5 回合最多 1 次',
    drawback: '揭露後下一次成功隔房傷害 -20%。',
    combatRole: '情報 / 隔房施法',
    description: '深海神殿的神諭不保證你擊中獵物，只保證潮聲會把失手帶回來。耳墜中的珍珠會短暫映出門後最危險的影子。',
    visualPrompt: '單枚長耳墜，銀線包住藍白珍珠，珍珠內有小型海霧旋渦，末端垂透明水滴晶，清冷神諭風格。',
    mechanicTags: ['cross_room', 'scout', 'mage', 'water'],
    selectionStatus: 'pending',
  },
  {
    id: 'pilgrim_bell_belt',
    name: '巡禮鈴腰帶',
    category: 'armor',
    typeOrSlot: 'belt',
    intendedBuild: 'priest',
    rarity: 'rare',
    loreSource: '巡禮路、鐘靈怨影、旅人醫館',
    uniqueEffect: '資源低於 30% 時，下一次支援行動不消耗信仰或 MP，但會在行動後讓自己沉默 1 tick。',
    trigger: '低資源使用支援行動',
    targetScope: '自身下一次支援行動',
    cooldownOrLimit: '每場戰鬥最多 1 次',
    drawback: '行動後沉默 1 tick。',
    combatRole: '緊急支援 / 資源底線',
    description: '巡禮路上的醫者把破鈴掛在腰帶內側，只有資源耗盡時才敢搖響。鈴聲會替你借來一次祈禱，也會讓你短暫說不出下一句。',
    visualPrompt: '厚布旅行腰帶，掛一枚裂紋銅鈴與白色繃帶卷，皮革上有路標刻痕、藥粉污漬和微弱晨光。',
    mechanicTags: ['resource', 'support', 'silence', 'emergency'],
    selectionStatus: 'pending',
  },
  {
    id: 'wolfden_scout_boots',
    name: '狼窩偵路靴',
    category: 'armor',
    typeOrSlot: 'feet',
    intendedBuild: 'ranger',
    rarity: 'rare',
    loreSource: '低地狼窩、影狼首領、獵人追蹤線',
    uniqueEffect: '從隔房攻擊後標記使用方向；下一次往該方向移動不消耗回合。',
    trigger: 'cross_room 攻擊後',
    targetScope: '自身與指定出口',
    cooldownOrLimit: '標記持續 2 回合',
    drawback: '被近戰命中時標記消失。',
    combatRole: '機動 / 狙擊後轉位',
    description: '老獵人追影狼時穿過這雙靴，鞋底夾著狼窩濕土。它記得你剛才朝哪裡射擊，也催你在獵物回頭前換位。',
    visualPrompt: '深灰皮靴，鞋底嵌狼爪形鐵釘，側面綁乾草與黑毛繩，靴尖有泥痕和淡綠追蹤符號。',
    mechanicTags: ['cross_room', 'movement', 'ranger', 'mark'],
    selectionStatus: 'pending',
  },
  {
    id: 'glasswater_headband',
    name: '鏡水額環',
    category: 'armor',
    typeOrSlot: 'head',
    intendedBuild: 'hybrid',
    rarity: 'epic',
    loreSource: '鏡沼、鏡水反射核心、失名倒影支線',
    uniqueEffect: '每場戰鬥首次被施加標記、嘲諷或沉默時，將該負面狀態複製到施加者身上，持續時間減半。',
    trigger: '首次受到 mark/taunt/silence',
    targetScope: '施加者',
    cooldownOrLimit: '每場戰鬥 1 次',
    drawback: '複製成功後自身下一次 buff 持續時間 -1 tick。',
    combatRole: '抗控 / 反制',
    description: '鏡水反射核心破裂後，沼民把最薄的一片磨成額環。它無法阻止詛咒落下，但會讓施咒者在水面看見同一個名字。',
    visualPrompt: '細薄銀額環，中央嵌一片水鏡玻璃，玻璃內有黑綠沼光與倒影裂紋，兩側垂細銀鏈。',
    mechanicTags: ['control_resist', 'reflect', 'mark', 'silence'],
    selectionStatus: 'pending',
  },
  {
    id: 'ashroad_body_wrap',
    name: '灰路巡火外衣',
    category: 'armor',
    typeOrSlot: 'body',
    intendedBuild: 'mage',
    rarity: 'rare',
    loreSource: '灰路火花、紅岩荒地、邊境巡火隊',
    uniqueEffect: '受到燃燒傷害時，將下一次火屬性法術的資源消耗降低；若下次法術不是火屬性，效果消失。',
    trigger: '受到 burning/fire DoT',
    targetScope: '自身下一次火法術',
    cooldownOrLimit: '每 3 回合最多 1 次',
    drawback: '觸發後冰屬性抗性 -10%，持續 2 回合。',
    combatRole: '受傷轉資源 / 火系循環',
    description: '灰路巡火隊把被燒穿的外衣一層層縫回去，讓火焰知道哪裡曾經有路。穿上它的人能把灼痛折成下一句咒語。',
    visualPrompt: '焦灰長外衣，邊緣有橙紅縫線與燒穿補丁，胸口掛黑鐵巡火牌，布面飄少量火星。',
    mechanicTags: ['fire', 'resource', 'dot', 'mage'],
    selectionStatus: 'pending',
  },
  {
    id: 'worldforge_gauntlets',
    name: '世爐裂鉚護手',
    category: 'armor',
    typeOrSlot: 'hands',
    intendedBuild: 'warrior',
    rarity: 'legendary',
    loreSource: '世界熔爐巨像、深礦主線、斷岳斧傳說',
    uniqueEffect: '使用重型武器命中 boss 時累積裂鉚；3 層後下一次格擋會對 boss 造成基於自身防禦的反震傷害。',
    trigger: 'heavy weapon 命中 boss 並於 3 層後格擋',
    targetScope: 'boss 目標',
    cooldownOrLimit: '裂鉚最多 3 層，反震後清空',
    drawback: '持有裂鉚時普攻速度下降，命中率 -5%。',
    combatRole: 'Boss 坦克 / 反震',
    description: '世界熔爐巨像倒下後，礦匠只撬下一副仍在震動的護手。每一枚鉚釘都像小型地震，等待盾牌把它們敲回巨物身上。',
    visualPrompt: '厚重黑鐵護手，指節有巨大鉚釘，縫隙透出白金爐光，表面有礦坑裂紋與巨像符印。',
    mechanicTags: ['boss', 'block', 'heavy_weapon', 'counter'],
    selectionStatus: 'pending',
  },
  {
    id: 'starwatch_necklace',
    name: '星望寒鏈',
    category: 'accessory',
    typeOrSlot: 'necklace',
    intendedBuild: 'mage',
    rarity: 'legendary',
    loreSource: '星望霜巨人、天空核心、星圖修復主線',
    uniqueEffect: '連續兩次施放不同元素後，第三次非同元素法術會獲得星望；星望讓法術額外標記目標房間出口。',
    trigger: '三次不同元素施法循環',
    targetScope: '目標與目標房間出口',
    cooldownOrLimit: '星望標記同時最多 1 個',
    drawback: '連續施放相同元素會清空循環。',
    combatRole: '元素輪轉 / 房間控制',
    description: '星望霜巨人把天空核心掛在胸前，用不同顏色的光丈量暴風路徑。法師若能跟上那種節奏，就能讓出口也成為咒文的一部分。',
    visualPrompt: '銀藍項鍊，中央是六角星核晶體，周圍環繞三枚不同色小元素珠，鏈身有霜白刻度與星圖線。',
    mechanicTags: ['elemental', 'rotation', 'room', 'mark'],
    selectionStatus: 'pending',
  },
  {
    id: 'thunder_mound_focus',
    name: '雷丘薩滿法器',
    category: 'offhand',
    typeOrSlot: 'focus',
    intendedBuild: 'ranger',
    rarity: 'epic',
    loreSource: '雷丘薩滿、荒草丘陵、破圖騰事件',
    uniqueEffect: '放置陷阱或標記後，下一次命中標記目標會把 1 層雷印傳給同房另一個未標記怪物。',
    trigger: '命中已標記目標',
    targetScope: '同房另一個未標記怪物',
    cooldownOrLimit: '每 2 回合最多 1 次',
    drawback: '若沒有可傳播目標，自身專注 -8。',
    combatRole: '標記傳播 / 陷阱控場',
    description: '雷丘薩滿的破圖騰被削成掌心法器，仍會把第一個獵物身上的雷印推向下一個。遊俠用它不是為了祈禱，而是為了讓伏擊自己找路。',
    visualPrompt: '掌心大小黑木圖騰法器，外圈纏藍白雷草纖維，中央有裂開的雷印石，邊緣掛小骨片。',
    mechanicTags: ['mark', 'trap', 'lightning', 'ranger'],
    selectionStatus: 'pending',
  },
  {
    id: 'last_dawn_mantle',
    name: '終曉披肩',
    category: 'armor',
    typeOrSlot: 'body',
    intendedBuild: 'priest',
    rarity: 'mythic',
    loreSource: '終曉聖典、最後戰場、終戰破曉主線',
    uniqueEffect: '隊友受到致命傷時，若自身信仰高於 70，消耗 40 信仰使其保留 1 HP 並獲得日裂印；日裂印存在時該隊友不能再次被此效果保護。',
    trigger: '同房隊友受到致命傷',
    targetScope: '同房隊友',
    cooldownOrLimit: '每場戰鬥 1 次',
    drawback: '觸發後自身所有治療效果 -20%，持續 3 回合。',
    combatRole: '救命 / 高信仰守護',
    description: '終曉聖典記載的最後一段光被縫進披肩內裡。它不承諾勝利，只在世界快要熄滅時，替某個名字多留一口氣。',
    visualPrompt: '白金披肩，內側有破曉裂紋與細金粉，肩扣像裂開日冠，布面帶戰場灰痕與柔白光暈。',
    mechanicTags: ['faith', 'save_death', 'party', 'dawn'],
    selectionStatus: 'pending',
  },
  {
    id: 'cometvine_whip_unique',
    name: '彗藤星鞭',
    category: 'weapon',
    typeOrSlot: 'whip',
    intendedBuild: 'ranger',
    rarity: 'legendary',
    loreSource: '彗星藤、星頁魔導書、失落星圖支線',
    uniqueEffect: '攻擊被標記且位於不同房間的目標時，若命中，會把標記延長並在自己所在房間生成一層星藤護幕。',
    trigger: 'cross_room 命中 marked 目標',
    targetScope: '目標與自身房間',
    cooldownOrLimit: '星藤護幕最多 1 層',
    drawback: '護幕存在時不能獲得 stealth 類效果。',
    combatRole: '隔房標記 / 防禦準備',
    description: '彗星藤只在星圖錯位的夜晚開花。這條鞭子抽中遠處獵物時，尾端會把星光拉回持有者腳邊，像替撤退先鋪了一道藤幕。',
    visualPrompt: '黑色活藤長鞭，藤節纏銀色星線，尾端分裂成彗尾火光，手柄有深藍星鐵環與細小白光點。',
    mechanicTags: ['cross_room', 'mark', 'shield', 'whip'],
    selectionStatus: 'pending',
  },
];

const WEAPON_TYPES: WeaponType[] = [
  'sword', 'blade', 'dagger', 'katana', 'giant_sword',
  'spear', 'bow', 'crossbow', 'axe', 'greataxe',
  'hammer', 'warhammer', 'wand', 'scepter', 'staff',
  'whip', 'focus', 'grimoire', 'holy_tome', 'shield',
];

const EQUIPMENT_SLOTS: EquipSlot[] = ['head', 'body', 'hands', 'feet', 'ring', 'earring', 'belt', 'necklace', 'offhand'];

const TYPE_LABELS: Record<WeaponType | EquipSlot, { zh: string; shape: string; material: string; family: UniqueItemFamily; role: string }> = {
  weapon: { zh: '武器', shape: '清楚武器剪影', material: '黑鐵與舊銀', family: 'hybrid', role: '泛用規則' },
  accessory: { zh: '飾品', shape: '小型護符輪廓', material: '黃銅與封蠟', family: 'hybrid', role: '特殊規則' },
  saddle: { zh: '馬鞍', shape: '戰用馬鞍剪影', material: '厚皮、鐵扣與鞍墊', family: 'warrior', role: '騎乘戰鬥' },
  sword: { zh: '劍', shape: '單手直劍', material: '鋼、鐵木與誓約刻線', family: 'warrior', role: '格擋反擊' },
  blade: { zh: '刃', shape: '單手彎刃', material: '黑鐵、鹽晶與暗紅刃紋', family: 'ranger', role: '攔截流血' },
  dagger: { zh: '匕', shape: '短匕首', material: '夜玻、骨柄與薄銀刃口', family: 'ranger', role: '伏擊標記' },
  katana: { zh: '太刀', shape: '修長太刀', material: '銀鋼、漆黑刀鞘與月紋', family: 'warrior', role: '精準連段' },
  giant_sword: { zh: '巨劍', shape: '寬大雙手巨劍', material: '厚鋼、王城碎石與金裂縫', family: 'warrior', role: '慢速壓制' },
  spear: { zh: '槍', shape: '長柄穿刺槍', material: '鐵木、藍鋼與雷草纖維', family: 'warrior', role: '出口攔截' },
  bow: { zh: '弓', shape: '長弓', material: '銀木、月井水光與魚骨片', family: 'ranger', role: '隔房狙擊' },
  crossbow: { zh: '弩', shape: '機括十字弩', material: '鋼軌、黃銅齒輪與冷白瞄晶', family: 'ranger', role: '伏擊定點' },
  axe: { zh: '斧', shape: '單手斧', material: '黑鐵、獸骨與赤銅鉚釘', family: 'warrior', role: '破甲連殺' },
  greataxe: { zh: '巨斧', shape: '雙手巨斧', material: '焦黑巨刃、熔光裂縫與灰布', family: 'warrior', role: '低血清場' },
  hammer: { zh: '手錘', shape: '單手短錘', material: '白石、銅鐘與鐵箍', family: 'priest', role: '支援打斷' },
  warhammer: { zh: '戰錘', shape: '雙手戰錘', material: '秘銀、黑鐵與星爐孔洞', family: 'warrior', role: 'Boss 反震' },
  wand: { zh: '魔杖', shape: '短魔杖', material: '玻璃晶芯、銅線與燭蠟', family: 'mage', role: 'MP 節奏' },
  scepter: { zh: '權杖', shape: '單手權杖', material: '白金、日晶與彩窗金線', family: 'priest', role: '護盾赦令' },
  staff: { zh: '法杖', shape: '長法杖', material: '古木、沙漏、元素晶核', family: 'mage', role: '房間塑形' },
  whip: { zh: '鞭', shape: '長鞭', material: '黑藤、鋼節與星線', family: 'ranger', role: '標記傳播' },
  focus: { zh: '法器', shape: '掌心法器', material: '河玻、銅葉與漂浮煙線', family: 'mage', role: '副手規則' },
  grimoire: { zh: '魔典', shape: '厚重魔導書', material: '黑皮、秘銀頁與骨扣', family: 'mage', role: '暗影記錄' },
  holy_tome: { zh: '聖典', shape: '布面聖典', material: '白蠟、金頁與骨鈴', family: 'priest', role: '治療淨化' },
  shield: { zh: '盾', shape: '實體盾牌', material: '黑鐵、白金盾心與舊旗布', family: 'warrior', role: '隊伍防護' },
  head: { zh: '頭部', shape: '額環或頭盔', material: '鏡玻、銀鏈與骨片', family: 'hybrid', role: '視野與抗控' },
  body: { zh: '身體', shape: '外衣或胸甲', material: '焦灰布、白金甲片與封印線', family: 'hybrid', role: '承傷與保命' },
  hands: { zh: '手部', shape: '護手或手套', material: '黃銅齒輪、黑鐵鉚釘與皮革', family: 'hybrid', role: '操作與觸發' },
  feet: { zh: '腳部', shape: '長靴或腿甲', material: '深灰皮革、狼爪鐵釘與泥痕', family: 'ranger', role: '移動與偵查' },
  ring: { zh: '戒指', shape: '厚戒或細戒', material: '暗鐵、焦旗布與小晶核', family: 'hybrid', role: '機率規則' },
  earring: { zh: '耳環', shape: '長耳墜', material: '銀線、珍珠與水滴晶', family: 'mage', role: '感知與資源' },
  belt: { zh: '腰帶', shape: '寬腰帶', material: '厚布、銅鈴與藥袋', family: 'priest', role: '資源底線' },
  necklace: { zh: '項鍊', shape: '墜飾項鍊', material: '星核晶體、霜銀與彩色珠', family: 'mage', role: '職業核心' },
  offhand: { zh: '副手', shape: '副手徽記或小盾座', material: '黑銀框架、白蠟與封線', family: 'hybrid', role: '副手協同' },
};

const LORE_POOL = [
  { id: 'moonwell', name: '月井', source: '月井守衛、月影誓鏡雙生、月井淨化主線', color: '銀白與淡藍水光' },
  { id: 'bloodsalt', name: '血鹽', source: '血鹽海岸、血鹽私掠者、沉船稅印主線', color: '暗紅鹽晶與濕黑鐵' },
  { id: 'ironwood', name: '鐵木', source: '鐵木堡、鐵木門哨兵、邊境軍令', color: '深褐鐵木與黑鋼' },
  { id: 'ashbell', name: '灰鐘', source: '灰燼修道院、墮落鐘守、終焰斷岳支線', color: '焦黑灰燼與暗橙熔光' },
  { id: 'stormglass', name: '風暴玻璃', source: '風暴高地、風暴玻璃礦獸、雷雨主線', color: '藍紫玻璃與白色雷紋' },
  { id: 'voidwell', name: '虛井', source: '深淵裂口、黑曜圖書館、虛井守衛', color: '黑銀與向內墜落的星砂' },
  { id: 'sunpetal', name: '日瓣', source: '日尖塔、白晝冠冕化身、赦令儀式', color: '白金日晶與紅金火線' },
  { id: 'bonechime', name: '骨鈴', source: '白骨鈴墓、骨鳴潛獵者、安魂任務', color: '灰白骨鈴與冷金符文' },
  { id: 'reedtide', name: '蘆潮', source: '蘆葦河岸、蛇洲神龕、潮汐巡守', color: '黑綠蘆纖維與藍綠水滴' },
  { id: 'blackflag', name: '黑旗', source: '黑旗軍團、失落首都、最後軍旗任務', color: '焦黑旗布與半枚金誓印' },
  { id: 'pearloracle', name: '珍珠神諭', source: '深海神殿、珍珠神諭影、潮聲預言', color: '藍白珍珠與銀色水霧' },
  { id: 'pilgrimbell', name: '巡禮鈴', source: '巡禮路、鐘靈怨影、旅人醫館', color: '裂紋銅鈴與白繃帶' },
  { id: 'wolfden', name: '狼窩', source: '低地狼窩、影狼首領、獵人追蹤線', color: '深灰皮革與濕土狼毛' },
  { id: 'glasswater', name: '鏡水', source: '鏡沼、鏡水反射核心、失名倒影支線', color: '銀鏡玻璃與黑綠沼光' },
  { id: 'ashroad', name: '灰路', source: '灰路火花、紅岩荒地、邊境巡火隊', color: '焦灰布面與橙紅縫線' },
  { id: 'worldforge', name: '世爐', source: '世界熔爐巨像、深礦主線、斷岳斧傳說', color: '黑鐵鉚釘與白金爐光' },
  { id: 'starwatch', name: '星望', source: '星望霜巨人、天空核心、星圖修復主線', color: '銀藍星核與霜白刻度' },
  { id: 'thundermound', name: '雷丘', source: '雷丘薩滿、荒草丘陵、破圖騰事件', color: '黑木圖騰與藍白雷草' },
  { id: 'lastdawn', name: '終曉', source: '終曉聖典、最後戰場、終戰破曉主線', color: '白金破曉裂紋與柔白光暈' },
  { id: 'cometvine', name: '彗藤', source: '彗星藤、星頁魔導書、失落星圖支線', color: '黑藤星線與彗尾火光' },
] as const;

const MECHANIC_PATTERNS = [
  { id: 'cross_room_echo', name: '落房迴響', tag: ['cross_room', 'aoe'], effect: '命中隔房單體目標時，在目標房間留下迴響；下一次非單體行動可消耗迴響，讓該房怪物顯示目標排序。', trigger: 'cross_room 單體命中', target: '目標所在房間', limit: '每 4 回合最多 1 次', drawback: '觸發後下一次同方向命中率下降，避免連續鎖房。' },
  { id: 'approach_hook', name: '逼近鉤記', tag: ['approach', 'control'], effect: '命中 approaching 目標時記錄來源方向；下一次該方向敵人抵達時，先延後 1 tick 再結算行動。', trigger: '命中 approaching 目標', target: '來源方向與單體敵人', limit: '同時只記錄 1 個方向', drawback: '記錄期間自身不能獲得閃避類增益。' },
  { id: 'low_hp_oath', name: '低血誓約', tag: ['low_hp', 'resource'], effect: '生命低於 35% 時，下一次成功行動會把承受過的傷口轉成職業資源窗口，而不是直接增傷。', trigger: '低血狀態下成功命中或支援', target: '自身', limit: '每場戰鬥最多 2 次', drawback: '觸發後短時間受到治療效果降低。' },
  { id: 'shield_transfer', name: '護盾轉寫', tag: ['shield', 'party'], effect: '成功建立護盾或格擋後，把下一次過量防護的一部分轉成同房隊友的小護盾。', trigger: 'shield 或 block 成功', target: '同房隊友', limit: '每 3 回合最多 1 次', drawback: '觸發後自身下一次閃避或移動判定變差。' },
  { id: 'overkill_ledger', name: '溢傷帳頁', tag: ['overkill', 'resource'], effect: '擊殺被控制或標記的敵人時，記錄溢出價值；下一次工具行動可消耗記錄獲得情報或資源緩衝。', trigger: '擊殺 control/mark 目標', target: '自身下一次工具行動', limit: '最多儲存 1 筆記錄', drawback: '持有記錄時受到治療會先清空記錄。' },
  { id: 'aoe_second_pulse', name: '範圍二脈', tag: ['aoe', 'trigger'], effect: '範圍行動命中 3 個以上目標時，有機率重複觸發附加效果；第二脈不複製主傷害。', trigger: 'AoE 命中 3 個以上目標', target: '原範圍', limit: '每場戰鬥最多 2 次', drawback: '觸發後自身下一個控制狀態持續時間可能延長。' },
  { id: 'interrupt_refund', name: '斷招整備', tag: ['interrupt', 'resource'], effect: '成功打斷敵人後，下一次非傷害行動若成功，返還部分資源並縮短一個輕微負面狀態。', trigger: 'interrupt 成功後使用非傷害行動', target: '自身', limit: '每 4 回合最多 1 次', drawback: '觸發後下一次傷害行動冷卻增加 1 tick。' },
  { id: 'element_rotation', name: '元素輪印', tag: ['elemental', 'room'], effect: '連續使用不同元素或不同戰術標籤後，建立輪印；輪印讓下一次房間標記保存額外資訊。', trigger: '兩次不同元素或標籤行動成功', target: '目標房間', limit: '輪印同時最多 1 枚', drawback: '連續使用同類行動會清空輪印。' },
  { id: 'undead_sentence', name: '亡者判詞', tag: ['undead', 'silence'], effect: '對 undead 或 demon 造成狀態後，下一次支援行動可消耗判詞，揭露並短暫壓低目標行動穩定。', trigger: '影響 undead/demon', target: '單體邪物', limit: '同一目標每 5 回合 1 次', drawback: '若場上沒有邪物，觸發改為降低自身資源。' },
  { id: 'scout_carry', name: '偵路保留', tag: ['scout', 'movement'], effect: '偵查後沿指定方向移動，會保留一部分房間情報；下一次隔房行動可消耗情報顯示威脅數量。', trigger: '偵查後移動或隔房行動', target: '相鄰房間', limit: '情報保留 2 回合', drawback: '被近戰命中時情報消失。' },
  { id: 'boss_phase_read', name: '階段讀相', tag: ['boss', 'resist'], effect: 'Boss 或 elite 進入新階段時，記錄最高威脅屬性；下一次對應防禦行動可把提示分享給隊伍。', trigger: 'boss/elite phase change', target: '同房隊友', limit: '每個階段最多 1 次', drawback: '若 3 回合內未使用對應防禦，自己受到該屬性壓力增加。' },
  { id: 'mark_spread', name: '標記傳播', tag: ['mark', 'trap'], effect: '命中已標記目標後，將一層弱化標記傳給同房未標記敵人，或記錄成下一個陷阱觸發條件。', trigger: '命中 marked 目標', target: '同房另一名敵人', limit: '每 2 回合最多 1 次', drawback: '沒有可傳播目標時消耗自身資源。' },
  { id: 'cleanse_trace', name: '淨化追跡', tag: ['cleanse', 'control_resist'], effect: '成功移除負面狀態後，記錄來源；下一次同類負面狀態會先縮短，再清除記錄。', trigger: 'cleanse 成功', target: '被淨化者', limit: '同時只記錄 1 種來源', drawback: '記錄期間自身支援行動消耗略增。' },
  { id: 'death_save', name: '留名保險', tag: ['save_death', 'faith'], effect: '同房隊友第一次受到致命傷時，若資源高於門檻，可消耗大量資源讓其保留 1 HP。', trigger: '隊友受到致命傷', target: '同房隊友', limit: '每場戰鬥 1 次', drawback: '觸發後自身治療或防護行動短暫變弱。' },
  { id: 'exit_anchor', name: '出口錨定', tag: ['movement', 'control'], effect: '指定一個出口後，下一次從該方向抵達的威脅會被錨定；隊伍可看見其目標傾向。', trigger: '指定出口後有敵人 approaching', target: '出口方向', limit: '同時只能錨定 1 個出口', drawback: '錨定期間自身逃跑成功率下降。' },
  { id: 'critless_precision', name: '無暴精準', tag: ['precision', 'single_target'], effect: '連續命中同一目標但沒有暴擊時，累積精準；精準可用於揭露處決窗口或弱點標籤。', trigger: '連續單體命中', target: '單體目標', limit: '最多 3 層', drawback: '切換目標會清空精準，並失去已揭露的處決窗口。' },
  { id: 'dot_convert', name: '灼痛轉流', tag: ['dot', 'resource'], effect: '受到 DoT 後，下一次同屬性或對應防禦行動可把痛覺轉為資源緩衝。', trigger: '受到 burning/poison/curse 類持續傷害', target: '自身', limit: '每 3 回合最多 1 次', drawback: '觸發後相反屬性抗性短暫下降。' },
  { id: 'party_call', name: '隊伍號令', tag: ['party', 'taunt'], effect: '完成保護、標記、支援三類行動之一後建立號令；隊友消耗號令時獲得目標資訊或控制縮短。', trigger: '保護/標記/支援行動成功', target: '同房隊友', limit: '號令同時最多 1 個', drawback: '號令未被消耗前自身不能再次建立號令。' },
  { id: 'silent_charge', name: '靜默蓄能', tag: ['resource', 'stealth'], effect: '一回合未造成傷害後，下一次工具或精準行動可獲得蓄能，用於降低成本或保存標記。', trigger: '未造成傷害的一回合後', target: '自身下一次行動', limit: '蓄能持續 2 回合', drawback: '受到攻擊會清空蓄能，且本回合不能再次建立蓄能。' },
  { id: 'mirror_backlash', name: '鏡返微痕', tag: ['reflect', 'control_resist'], effect: '首次受到標記、嘲諷或沉默時，把弱化版本複寫到來源身上，持續時間減半。', trigger: '首次受到 mark/taunt/silence', target: '施加者', limit: '每場戰鬥 1 次', drawback: '複寫後自身下一個 buff 持續時間縮短。' },
] as const;

function buildFullUniqueItemDrafts(): UniqueItemDraft[] {
  const drafts: UniqueItemDraft[] = [...BENCHMARK_UNIQUE_ITEM_DRAFTS];
  for (const type of WEAPON_TYPES) {
    while (drafts.filter((item) => item.typeOrSlot === type && (item.category === 'weapon' || item.category === 'offhand')).length < 20) {
      const index = drafts.filter((item) => item.typeOrSlot === type && (item.category === 'weapon' || item.category === 'offhand')).length;
      drafts.push(createWeaponDraft(type, index));
    }
  }
  for (const slot of EQUIPMENT_SLOTS) {
    while (drafts.filter((item) => item.typeOrSlot === slot && item.category !== 'weapon').length < 10) {
      const index = drafts.filter((item) => item.typeOrSlot === slot && item.category !== 'weapon').length;
      drafts.push(createEquipmentDraft(slot, index));
    }
  }
  return drafts;
}

function createWeaponDraft(type: WeaponType, index: number): UniqueItemDraft {
  const lore = LORE_POOL[index % LORE_POOL.length];
  const pattern = MECHANIC_PATTERNS[(index + WEAPON_TYPES.indexOf(type)) % MECHANIC_PATTERNS.length];
  const typeDef = TYPE_LABELS[type];
  const category: UniqueItemCategory = ['focus', 'grimoire', 'holy_tome', 'shield'].includes(type) ? 'offhand' : 'weapon';
  const rarity = rarityFor(index);
  const id = `${lore.id}_${pattern.id}_${type}`;
  return {
    id,
    name: `${lore.name}${pattern.name}${typeDef.zh}`,
    category,
    typeOrSlot: type,
    intendedBuild: typeDef.family,
    rarity,
    loreSource: lore.source,
    uniqueEffect: `${typeDef.zh}專屬：${pattern.effect}`,
    trigger: pattern.trigger,
    targetScope: pattern.target,
    cooldownOrLimit: pattern.limit,
    drawback: pattern.drawback,
    combatRole: `${typeDef.role} / ${pattern.name}`,
    description: `${lore.source}留下的${typeDef.zh}候選。它把「${pattern.name}」刻進${typeDef.role}的打法：使用者不是單純追求數值，而是在正確的房間、目標或資源窗口把規則翻面。`,
    visualPrompt: `${typeDef.shape}，${typeDef.material}，主色為${lore.color}；輪廓要一眼看出是${typeDef.zh}，表面帶有${lore.name}系符號、磨損痕與微弱能量，不要文字、手或角色。`,
    mechanicTags: [...pattern.tag, type, typeDef.family],
    selectionStatus: 'pending',
  };
}

function createEquipmentDraft(slot: EquipSlot, index: number): UniqueItemDraft {
  const lore = LORE_POOL[(index * 2 + EQUIPMENT_SLOTS.indexOf(slot)) % LORE_POOL.length];
  const pattern = MECHANIC_PATTERNS[(index * 3 + EQUIPMENT_SLOTS.indexOf(slot)) % MECHANIC_PATTERNS.length];
  const typeDef = TYPE_LABELS[slot];
  const category = categoryForSlot(slot);
  return {
    id: `${lore.id}_${pattern.id}_${slot}`,
    name: `${lore.name}${pattern.name}${typeDef.zh}`,
    category,
    typeOrSlot: slot,
    intendedBuild: typeDef.family,
    rarity: rarityFor(index + 2),
    loreSource: lore.source,
    uniqueEffect: `${typeDef.zh}裝備：${pattern.effect}`,
    trigger: pattern.trigger,
    targetScope: pattern.target,
    cooldownOrLimit: pattern.limit,
    drawback: pattern.drawback,
    combatRole: `${typeDef.role} / ${pattern.name}`,
    description: `${lore.source}相關的${typeDef.zh}候選。它把${typeDef.role}從被動數值改成可操作規則，讓玩家在${pattern.trigger}時做出取捨，而不是只堆疊屬性。`,
    visualPrompt: `${typeDef.shape}，材質包含${typeDef.material}，主色為${lore.color}；需要明確裝備部位剪影、細節符號、舊戰痕與可產圖的材質層次，不要文字、手或角色。`,
    mechanicTags: [...pattern.tag, slot, typeDef.family],
    selectionStatus: 'pending',
  };
}

function categoryForSlot(slot: EquipSlot): UniqueItemCategory {
  if (slot === 'ring' || slot === 'earring' || slot === 'belt' || slot === 'necklace' || slot === 'accessory') return 'accessory';
  if (slot === 'offhand') return 'offhand';
  return 'armor';
}

function rarityFor(index: number): ItemRarity {
  return (['rare', 'epic', 'legendary', 'mythic'] as const)[index % 4];
}

export const UNIQUE_WEAPON_TYPES = WEAPON_TYPES;
export const UNIQUE_EQUIPMENT_SLOTS = EQUIPMENT_SLOTS;
export const UNIQUE_ITEM_DRAFTS: UniqueItemDraft[] = buildFullUniqueItemDrafts();

export function getUniqueCoverageSummary() {
  return {
    weaponTypes: WEAPON_TYPES.map((type) => ({
      id: type,
      count: UNIQUE_ITEM_DRAFTS.filter((item) => item.typeOrSlot === type && (item.category === 'weapon' || item.category === 'offhand')).length,
    })),
    equipmentSlots: EQUIPMENT_SLOTS.map((slot) => ({
      id: slot,
      count: UNIQUE_ITEM_DRAFTS.filter((item) => item.typeOrSlot === slot && item.category !== 'weapon').length,
    })),
  };
}
