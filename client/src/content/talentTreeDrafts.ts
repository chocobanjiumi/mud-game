export type TalentFamilyId = 'warrior' | 'mage' | 'priest' | 'ranger';

export interface TalentBranchDraft {
  id: string;
  name: string;
  identity: string;
  buildIntent: string;
}

export interface TalentNodeDraft {
  id: string;
  name: string;
  family: TalentFamilyId;
  branch: string;
  tier: number;
  maxRank: number;
  prerequisites: string[];
  mechanic: string;
  notSkillUpgradeNote: string;
  buildIntent: string;
  uiCopy: string;
  balanceNote: string;
  keystone?: boolean;
}

export interface TalentFamilyDraft {
  id: TalentFamilyId;
  name: string;
  coreFantasy: string;
  pointModel: string;
  branches: TalentBranchDraft[];
  nodes: TalentNodeDraft[];
}

interface TalentLinePlan {
  family: TalentFamilyId;
  branch: string;
  names: readonly string[];
  mechanics: readonly string[];
  intents: readonly string[];
  copies: readonly string[];
  notes: readonly string[];
}

const TALENT_POINT_CAP = 19;
const TIER_MAX_RANKS = [5, 1, 3, 3, 1] as const;

const familyNames: Record<TalentFamilyId, string> = {
  warrior: '戰士一轉',
  mage: '法師一轉',
  priest: '祭司一轉',
  ranger: '遊俠一轉',
};

const sharedBranches: TalentBranchDraft[] = [
  { id: 'resource', name: '資源熟練', identity: '讓職業核心資源更穩，不提前指定二轉流派。', buildIntent: '主線點滿 13 點可完成一轉核心，副線 6 點可拿到 Tier 2 小 build。' },
  { id: 'survival', name: '生存習慣', identity: '降低一轉練級期的挫折感，但不取代裝備與技能。', buildIntent: '用低血、受擊、逃跑與抗打斷建立安全感。' },
  { id: 'tempo', name: '戰鬥節奏', identity: '改善目標、移動、起手與失手後的節奏。', buildIntent: '讓玩家在二轉前先理解職業循環。' },
];

function makeLine(plan: TalentLinePlan): TalentNodeDraft[] {
  return plan.names.map((name, index) => {
    const tier = index + 1;
    const id = `${plan.family}_${plan.branch}_tier_${tier}`;
    const previousId = index > 0 ? `${plan.family}_${plan.branch}_tier_${tier - 1}` : undefined;
    const balanceNote = plan.notes[index].length < 10 ? `${plan.notes[index]}需實測。` : plan.notes[index];
    return {
      id,
      name,
      family: plan.family,
      branch: plan.branch,
      tier,
      maxRank: TIER_MAX_RANKS[index],
      prerequisites: previousId ? [previousId] : [],
      mechanic: plan.mechanics[index],
      notSkillUpgradeNote: '一轉天賦只調整職業底盤、資源穩定、生存手感與戰鬥節奏；不直接增加既有技能傷害、冷卻或治療量。',
      buildIntent: plan.intents[index],
      uiCopy: plan.copies[index],
      balanceNote,
      keystone: tier === 5,
    };
  });
}

const warriorNodes = [
  ...makeLine({
    family: 'warrior',
    branch: 'resource',
    names: ['怒氣紀律', '痛感轉化', '血性記憶', '老兵本能', '不熄怒火'],
    mechanics: [
      '怒氣脫戰衰減量逐級降低，但最低仍保留基本衰減，避免長時間囤滿怒氣。',
      '受到敵人直接攻擊且損失生命達門檻時，額外獲得一段怒氣。',
      '低血時怒氣消耗行動失敗會返還一部分怒氣，每場戰鬥有觸發次數限制。',
      '每場戰鬥第一次生命低於 30% 時，立即獲得一小段怒氣緩衝。',
      '完成怒氣路線後，進入戰鬥的第一個怒氣消耗行動會保留少量未用怒氣作為下次行動緩衝。',
    ],
    intents: ['保留連戰起手資源。', '把承傷轉成可理解的怒氣收益。', '降低低血失手造成的斷循環。', '給危急時的自救窗口。', '讓戰士二轉前形成穩定怒氣底盤。'],
    copies: ['怒氣離戰流失變慢。', '吃到明顯傷害時多一點怒氣。', '低血失手不會完全浪費怒氣。', '第一次瀕危會擠出一口怒氣。', '怒氣消耗後能留下小緩衝。'],
    notes: ['只影響脫戰衰減。', '只吃敵人直接傷害。', '返還低於消耗且限制觸發。', '只給資源，不提供免死。', '不提高傷害，只改善資源尾端。'],
  }),
  ...makeLine({
    family: 'warrior',
    branch: 'survival',
    names: ['戰鬥呼吸', '穩固步伐', '防禦習慣', '最後握柄', '老兵韌性'],
    mechanics: [
      '脫戰後第一次自我回復效果逐級提高，滿血時不觸發。',
      '逃跑失敗並吃到敵人追擊時，該次傷害小幅降低。',
      '使用防禦類行動後，下一次承受同房普通怪物攻擊時獲得固定減傷。',
      '每場戰鬥第一次生命低於 20% 時，若上一個玩家行動不是移動，獲得短暫受擊怒氣加成。',
      '完成生存路線後，逃跑失敗或低血受擊時會顯示下一次最適合的生存選項提示。',
    ],
    intents: ['提高連續探索整理能力。', '讓錯估危險時仍有退路。', '讓防禦行動更有體感。', '鼓勵危急時站穩反推。', '讓一轉戰士學會生存判斷。'],
    copies: ['脫戰後第一次自療更穩。', '逃跑失敗時比較扛得住。', '防禦後下一下普通攻擊更不痛。', '瀕危站住時受擊怒氣更明顯。', '危急時更容易讀出生存選擇。'],
    notes: ['不提高戰鬥爆發治療。', '成功逃跑不給額外收益。', '不作用於所有傷害來源。', '只給怒氣，不直接減傷或免死。', '資訊提示不代替玩家操作。'],
  }),
  ...makeLine({
    family: 'warrior',
    branch: 'tempo',
    names: ['近戰鎖定', '起手踏步', '房間壓力', '戰感讀秒', '前線節奏'],
    mechanics: [
      '連續攻擊同一目標時，因目標閃避造成的命中壓力逐級降低。',
      '進入戰鬥後第一次近戰行動若命中，顯示目標目前仇恨傾向。',
      '同房怪物數量高於 2 時，第一次切換目標不會額外增加行動壓力。',
      '怪物即將行動時，若上一動是近戰或防禦，訊息提示該怪物是否偏向攻擊你。',
      '完成節奏路線後，連續近戰與防禦交替時會更清楚顯示 tick 壓力與目標壓力。',
    ],
    intents: ['強化穩定盯目標定位。', '讓玩家理解怪物是否正在看自己。', '改善多怪房目標管理。', '學會 tick 與仇恨判讀。', '形成戰士前線操作手感。'],
    copies: ['連打同一目標比較穩。', '起手命中能讀出仇恨方向。', '多怪時第一次換目標更順。', '能讀到下一輪壓力是否朝你來。', '前線壓力與 tick 更容易判讀。'],
    notes: ['不降低高等級差距懲罰。', '只給資訊，不強制改目標。', '每場只處理第一次換目標。', '資訊型節點，不改行動順序。', '不提供額外行動或控場。'],
  }),
];

const mageNodes = [
  ...makeLine({
    family: 'mage',
    branch: 'resource',
    names: ['魔力導流', '低魔專注', '盲放修正', '魔力緩衝', '穩定法脈'],
    mechanics: [
      '每 tick 自然回復 MP 時，有機率額外回復 1 點，機率逐級提高。',
      'MP 低於 30% 時，下一次非傷害法術消耗小幅降低。',
      '盲放隔房傷害法術沒有找到目標時，返還少量 MP。',
      '每場戰鬥第一次 MP 不足以支付非傷害法術時，可延後支付少量 MP。',
      '完成魔力路線後，戰鬥結束時若 MP 偏低，下一場第一次工具法術獲得成本緩衝。',
    ],
    intents: ['改善低等法師續戰。', '低魔時保留工具行動。', '讓盲放有風險但不完全空轉。', '提供危急工具施法空間。', '讓法師練級期更能連續探索。'],
    copies: ['自然回魔偶爾多跳 1 點。', '低魔時工具法術更省。', '盲放沒目標會退一點魔力。', '工具法術差一點魔時可先欠。', '低魔收尾會替下一場留緩衝。'],
    notes: ['不降低技能成本。', '不支援傷害法術。', '命中或造成傷害時不返還。', '不允許欠傷害法術成本。', '不可堆疊，避免無限續航。'],
  }),
  ...makeLine({
    family: 'mage',
    branch: 'survival',
    names: ['施法穩定', '護盾反射', '安全導引', '退路火花', '不斷咒線'],
    mechanics: [
      '受到攻擊後，下一次施法受到的命中或穩定懲罰逐級降低。',
      '護盾存在時被普通攻擊命中，戰鬥訊息會揭露該攻擊是否偏物理或魔法。',
      '上一 tick 沒有受傷時，下一次非瞬發施法被打斷風險小幅降低。',
      '逃跑成功後，若 MP 低於 25%，保留火花讓下一場第一次非傷害法術消耗降低。',
      '完成生存路線後，第一次被打斷施法時保留一部分工具法術資源壓力。',
    ],
    intents: ['降低被貼臉後完全斷節奏。', '學會傷害類型判讀。', '鼓勵掌握安全施法窗口。', '讓撤退後有整理能力。', '讓法師生存失敗不完全空轉。'],
    copies: ['被打後下一次施法比較穩。', '護盾被打時讀出傷害傾向。', '沒被打的下一次引導更穩。', '低魔逃跑後保留工具施法火花。', '第一次被斷法會保留一點工具資源。'],
    notes: ['不提供減傷或保證命中。', '資訊型節點，不改減傷公式。', '只降低風險，不免疫打斷。', '火花不可堆疊且不支援傷害法術。', '不保護傷害爆發循環。'],
  }),
  ...makeLine({
    family: 'mage',
    branch: 'tempo',
    names: ['元素記憶', '遠距感知', '同系步調', '失手迴聲', '咒序成形'],
    mechanics: [
      '使用元素法術後短時間記錄該元素，下一次不同元素命中時顯示目標元素反應資訊。',
      '隔房施法前，若方向存在已知房間，有機率提示該方向是否可能有目標。',
      '連續使用同一魔法類型時，第二次施法的資源壓力小幅降低，但不影響傷害。',
      '每場戰鬥第一次傷害法術未命中時，記錄迴聲；下一次偵查或非傷害法術可消耗迴聲取得目標資訊。',
      '完成節奏路線後，混用元素、工具與防禦法術時會更清楚顯示目前咒序狀態。',
    ],
    intents: ['用資訊形式導入元素系統。', '改善隔房玩法可讀性。', '形成可預期的施法節奏。', '把失手轉成情報。', '讓法師在二轉前先學會法術節奏。'],
    copies: ['換元素命中時看見反應。', '隔房施法前更容易感到有沒有東西。', '同系連放比較順手。', '第一次法術失手會留下可讀情報。', '咒序狀態更容易讀懂。'],
    notes: ['不提供元素增傷。', '只給可能性，不揭露完整資料。', '降低資源壓力，不提高輸出。', '不返還傷害或完整資源。', '資訊提示不等於額外效果。'],
  }),
];

const priestNodes = [
  ...makeLine({
    family: 'priest',
    branch: 'resource',
    names: ['信仰回正', '平衡恩典', '懺悔熟練', '信念保留', '零點聖律'],
    mechanics: [
      '信仰往 0 回歸時，逐級提高回正效率，讓偏移後更容易回到基準線。',
      '信仰接近 0 時，下一次非傷害支援行動消耗小幅降低。',
      '使用懺悔後，下一次信仰回正不會立刻過度擺盪。',
      '非戰鬥狀態使用支援行動時，信仰偏移量小幅降低。',
      '完成信仰路線後，信仰接近 0 時支援行動會更清楚提示偏光或偏暗後果。',
    ],
    intents: ['更容易維持基準線。', '獎勵維持平衡。', '讓懺悔更像校正工具。', '探索期支援不過度偏移。', '讓祭司二轉前理解信仰取捨。'],
    copies: ['信仰更快回到 0。', '接近 0 信仰時支援更省。', '懺悔後信仰比較不會甩過頭。', '脫戰支援比較不擾動信仰。', '零點附近更容易判讀光暗後果。'],
    notes: ['不提高極端信仰收益。', '不支援爆發傷害或治療加成。', '不降低懺悔冷卻。', '不影響戰鬥中的信仰取捨。', '只顯示提示，不自動修正選擇。'],
  }),
  ...makeLine({
    family: 'priest',
    branch: 'survival',
    names: ['治療穩定', '急救禱詞', '淨化感知', '抗斷短禱', '守禱成環'],
    mechanics: [
      '治療生命低於 35% 的目標時，最低治療量逐級提高。',
      '每場戰鬥第一次治療自己時，額外降低下一次被打斷風險。',
      '淨化失敗時，揭露目標身上一個負面狀態的類型或來源線索。',
      '每場戰鬥第一次被打斷支援行動時，保留一部分該行動的資源成本。',
      '完成生存路線後，同房隊友低血時，第一次支援行動會提示最危險壓力來源。',
    ],
    intents: ['救急更可靠。', '單人被壓時有救場空間。', '淨化失敗仍提供決策。', '降低支援被斷挫折。', '讓祭司學會隊伍壓力排序。'],
    copies: ['補低血目標時下限更穩。', '第一次自補後下一次支援更穩。', '淨化失敗也能看出一點污染。', '第一次支援被斷不會全額浪費。', '隊友低血時看得出壓力來源。'],
    notes: ['提高下限，不提高最大治療量。', '不直接增加自補量。', '不保證下一次淨化成功。', '不免疫打斷，只返還部分成本。', '資訊型效果，不改怪物目標。'],
  }),
  ...makeLine({
    family: 'priest',
    branch: 'tempo',
    names: ['亡者辨識', '慈審步調', '安定祝詞', '行列記憶', '禱文節拍'],
    mechanics: [
      '同房存在 undead 時，第一次非傷害支援行動會揭露 undead 數量區間。',
      '連續兩回合使用不同類型行動後，第三回合信仰檢查更穩。',
      '上一 tick 沒有受傷時，下一次非傷害支援行動會顯示目標是否仍處於危險仇恨中。',
      '隊伍移動後，第一次支援行動會提示上一房是否仍有追擊或詛咒壓力。',
      '完成節奏路線後，治療、支援、審判輪替時會顯示目前信仰節拍是否穩定。',
    ],
    intents: ['自然承擔反亡者情報。', '鼓勵行動輪替。', '看懂隊友是否還會被打。', '探索移動中提供安全判讀。', '讓祭司在二轉前學會輪替節奏。'],
    copies: ['支援時能感到亡者數量。', '輪替行動能穩住信仰檢查。', '安全施放時能讀出隊友壓力。', '移動後能感知後方壓力。', '輪替節奏更容易判讀。'],
    notes: ['只揭露數量區間。', '不提高任何單一行動效果。', '資訊型效果，不改怪物目標。', '只提示壓力，不阻止追擊。', '不提供額外行動或資源。'],
  }),
];

const rangerNodes = [
  ...makeLine({
    family: 'ranger',
    branch: 'resource',
    names: ['專注保存', '強襲熟練', '呼吸節奏', '脫離本能', '獵心不散'],
    mechanics: [
      '脫戰後專注下降速度逐級降低，讓連續探索時保留更多起手節奏。',
      '強襲未命中時返還少量專注，每場戰鬥有觸發次數限制。',
      '未受傷 1 tick 後，下一次單體攻擊的專注消耗小幅降低。',
      '逃跑成功後保留少量專注，若逃跑前生命低於 35% 則保留量提高。',
      '完成專注路線後，專注接近滿值時會提示下一次單體行動的資源風險。',
    ],
    intents: ['保持連續探索起手節奏。', '降低單體爆發失手挫折。', '用站位創造輸出窗口。', '撤退後仍能重整節奏。', '讓遊俠理解高專注爆發時機。'],
    copies: ['脫戰專注流失變慢。', '強襲打空會退一點專注。', '沒被打後下一箭更省專注。', '成功脫離會帶走一點專注。', '高專注時更容易判讀出手風險。'],
    notes: ['不提高專注上限。', '不提高強襲傷害或暈眩率。', '只降低成本，不增加傷害。', '逃跑失敗不觸發。', '資訊型效果，不保證命中。'],
  }),
  ...makeLine({
    family: 'ranger',
    branch: 'survival',
    names: ['靈巧步伐', '傷步調整', '靜息恢復', '消影記憶', '風中退路'],
    mechanics: [
      '移動後下一次受到普通近戰攻擊時，閃避壓力逐級降低。',
      '生命低於 40% 時，第一次閃避失敗會揭露攻擊來源的命中傾向。',
      '脫戰後若上一場戰鬥成功閃避過，第一次自然恢復會額外回復少量生命。',
      '每場戰鬥第一次成功閃避 elite 或 boss 攻擊後，下一次移動保留一部分目標記憶。',
      '完成生存路線後，成功逃跑或閃避強敵後會更清楚提示可撤退方向。',
    ],
    intents: ['把移動與生存綁在一起。', '低血失敗也取得判讀。', '閃避成功提供探索續航感。', '面對強敵時靠移動重整。', '讓遊俠二轉前先學會移動保命。'],
    copies: ['移動後比較容易閃過近戰。', '低血閃避失敗也能讀出攻擊。', '有閃過攻擊，脫戰恢復更好。', '閃過強敵後移動不會完全斷記憶。', '撤退方向更容易判讀。'],
    notes: ['不影響遠程或魔法攻擊。', '只給資訊，不補償傷害。', '不在戰鬥中回復。', '不保留完整偵查。', '不提高逃跑成功率。'],
  }),
  ...makeLine({
    family: 'ranger',
    branch: 'tempo',
    names: ['獵物記憶', '偵查習慣', '弱點觀察', '淨標', '一息追獵'],
    mechanics: [
      '連續攻擊同一目標時，因目標高迴避造成的命中壓力逐級降低。',
      '移動後保留上一個方向的簡略記憶，但不保留完整怪物資料。',
      '攻擊高等怪未命中時，戰鬥訊息揭露主要失手原因是等級、閃避或狀態。',
      '每場戰鬥第一次連續兩次命中同一目標後，下一次切換回該目標不會遺失獵物記憶。',
      '完成節奏路線後，長時間追擊同一目標時會提示是否適合繼續追獵或換位。',
    ],
    intents: ['強化單體追獵定位。', '保留偵查價值但不永久情報。', '理解打不動高等目標的原因。', '長戰中維持單體節奏。', '形成遊俠單體殺怪核心手感。'],
    copies: ['盯同一個獵物會越打越穩。', '移動後留下方向印象。', '打空高等怪時看出原因。', '連續命中後可短暫保存獵物記憶。', '追獵時機更容易判斷。'],
    notes: ['不降低高等級差距懲罰。', '不保留完整怪物內容。', '資訊型效果，不降低懲罰。', '不提供額外攻擊或傷害。', '不自動選擇目標。'],
  }),
];

export const TALENT_FAMILY_DRAFTS: TalentFamilyDraft[] = [
  {
    id: 'warrior',
    name: familyNames.warrior,
    coreFantasy: '一轉戰士先學會怒氣、承傷、近戰鎖定與撤退節奏；二轉前不提前分成坦克、狂戰或指揮。',
    pointModel: `Lv2-Lv20 每級 1 點，共 ${TALENT_POINT_CAP} 點。每條路線 13 點：五點、一點、三點、三點、一點。`,
    branches: sharedBranches,
    nodes: warriorNodes,
  },
  {
    id: 'mage',
    name: familyNames.mage,
    coreFantasy: '一轉法師先處理 MP、施法穩定、盲放與元素資訊；二轉前不把玩家鎖進火、冰、奧術等專精。',
    pointModel: `Lv2-Lv20 每級 1 點，共 ${TALENT_POINT_CAP} 點。主線 13 點可拿 Tier 5，剩餘 6 點可副修另一線到 Tier 2。`,
    branches: sharedBranches,
    nodes: mageNodes,
  },
  {
    id: 'priest',
    name: familyNames.priest,
    coreFantasy: '一轉祭司先掌握信仰回正、治療下限、淨化資訊與隊伍壓力判讀；二轉前不定義主補或審判路線。',
    pointModel: `Lv2-Lv20 每級 1 點，共 ${TALENT_POINT_CAP} 點。解鎖只看同路線上一個 Tier 是否點滿，不再使用等級門檻。`,
    branches: sharedBranches,
    nodes: priestNodes,
  },
  {
    id: 'ranger',
    name: familyNames.ranger,
    coreFantasy: '一轉遊俠先穩住專注、閃避、偵查記憶與單體追獵；二轉前不展開陷阱網或高階狙擊專精。',
    pointModel: `Lv2-Lv20 每級 1 點，共 ${TALENT_POINT_CAP} 點。每條路線點滿 13 點，二轉前可以主修一線並副修另一線。`,
    branches: sharedBranches,
    nodes: rangerNodes,
  },
];

export function getTalentNodesByBranch(family: TalentFamilyDraft, branchId: string) {
  return family.nodes
    .filter((nodeDef) => nodeDef.branch === branchId)
    .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, 'zh-Hant'));
}

export function getTalentDraftSummary() {
  const families = TALENT_FAMILY_DRAFTS.length;
  const branches = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.branches.length, 0);
  const nodes = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.nodes.length, 0);
  const keystones = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.nodes.filter((nodeDef) => nodeDef.keystone).length, 0);
  const pointsBeforeSecondJob = TALENT_POINT_CAP;
  const pointsPerLine = TIER_MAX_RANKS.reduce((sum, rank) => sum + rank, 0);
  return { families, branches, nodes, keystones, pointsBeforeSecondJob, pointsPerLine };
}
