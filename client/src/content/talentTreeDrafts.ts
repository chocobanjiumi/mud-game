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
  requiredLevel: number;
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

const familyNames: Record<TalentFamilyId, string> = {
  warrior: '戰士系列',
  mage: '法師系列',
  priest: '祭司系列',
  ranger: '遊俠系列',
};

function node(input: Omit<TalentNodeDraft, 'notSkillUpgradeNote'>): TalentNodeDraft {
  return {
    ...input,
    balanceNote: input.balanceNote.length < 10 ? `${input.balanceNote}需後續實測。` : input.balanceNote,
    notSkillUpgradeNote: '不直接增加既有技能的傷害、冷卻或治療量，只改變角色規則、資源節奏、目標條件或戰術窗口。',
  };
}

const warriorBranches: TalentBranchDraft[] = [
  { id: 'guard', name: '守衛 / 格擋 / 反擊', identity: '把承傷變成節奏，靠格擋後的行動窗口保護隊伍。', buildIntent: '坦克、反擊、盾線穩定。' },
  { id: 'fury', name: '狂怒 / 低血 / 連殺動能', identity: '以低血與擊殺推動怒氣循環，越危險越能延長攻勢。', buildIntent: '高風險近戰輸出、連殺、低血控場。' },
  { id: 'command', name: '指揮 / 嘲諷 / 隊伍站位', identity: '用嘲諷、出口與隊伍承傷規則控制怪物視線。', buildIntent: '隊伍保護、控場、前線指揮。' },
];

const mageBranches: TalentBranchDraft[] = [
  { id: 'arcane', name: '奧術資源 / MP 節奏 / 過載', identity: '管理 MP 高低與過載窗口，把資源壓力轉成施法選擇。', buildIntent: '穩定續戰施法、低魔救場、過載爆發準備。' },
  { id: 'elemental', name: '元素塑形 / 範圍規則 / 房間互動', identity: '靠元素輪轉與房間標記改寫 AoE 與隔房法術的空間價值。', buildIntent: '範圍房間壓制、元素輪轉、地形控制。' },
  { id: 'ward', name: '護盾 / 風險轉移 / 施法保護', identity: '把受擊、護盾與打斷風險變成可管理的施法保險。', buildIntent: '護盾法師、抗打斷、高風險爆發保護。' },
];

const priestBranches: TalentBranchDraft[] = [
  { id: 'mercy', name: '慈悲 / 治療轉換 / 過量治療', identity: '讓治療溢出、低血救援與隊伍穩定形成不同支援節奏。', buildIntent: '主治療、過量護盾、急救窗口。' },
  { id: 'judgement', name: '審判 / 信仰資源 / 光暗取捨', identity: '在慈悲與審判之間擺動信仰，把救援時機轉成制裁窗口。', buildIntent: '審判輸出、信仰管理、光暗轉換。' },
  { id: 'purity', name: '淨化 / 反不死 / 隊伍保護', identity: '用淨化、反不死與防護規則維持隊伍在詛咒區域的行動能力。', buildIntent: '淨化輔助、反不死、隊伍保護。' },
];

const rangerBranches: TalentBranchDraft[] = [
  { id: 'scout', name: '偵查 / 隔房 / 先手情報', identity: '用偵查資訊與隔房標記決定開戰前的優勢。', buildIntent: '隔房狙擊、情報、先手規劃。' },
  { id: 'trap', name: '陷阱 / 標記 / 伏擊', identity: '把標記、陷阱與怪物 approaching 節奏串成控場網。', buildIntent: '陷阱控場、標記傳播、伏擊。' },
  { id: 'focus', name: '專注 / 閃避 / 精準射擊', identity: '讓專注、閃避與精準命中形成單體輸出循環。', buildIntent: '高專注單體輸出、閃避反打、精準爆發。' },
];

const warriorNodes = [
  node({ id: 'warrior_guard_line_stance', name: '盾線姿態', family: 'warrior', branch: 'guard', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '進入戰鬥後首次使用防禦姿態時，獲得 1 層盾線。每層盾線使下一次格擋成功後回復少量怒氣。', buildIntent: '坦克起手與格擋回怒。', uiCopy: '首次防禦建立盾線，格擋後轉成怒氣。', balanceNote: '回怒必須低於主動輸出循環，避免防禦變成最佳輸出前置。' }),
  node({ id: 'warrior_guard_angle', name: '架盾角度', family: 'warrior', branch: 'guard', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['warrior_guard_line_stance'], mechanic: '若上回合未移動，下一次格擋可同時降低來自 ranged 或 cross_room 的傷害。', buildIntent: '站定承傷與遠程防禦。', uiCopy: '站定時格擋也能處理遠程威脅。', balanceNote: '只處理減傷範圍，不提高格擋率。' }),
  node({ id: 'warrior_guard_counter_window', name: '反擊窗口', family: 'warrior', branch: 'guard', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['warrior_guard_angle'], mechanic: '成功格擋後，下一次單體近戰命中會標記目標為破綻；隊友命中破綻時移除標記並回復持有者怒氣。', buildIntent: '反擊與隊伍配合。', uiCopy: '格擋後製造隊友可消耗的破綻。', balanceNote: '破綻一次性消耗，避免多人重複吃收益。' }),
  node({ id: 'warrior_guard_bodywall', name: '肉身牆', family: 'warrior', branch: 'guard', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['warrior_guard_line_stance'], mechanic: '同房隊友生命低於 35% 時，戰士第一次被該隊友附近敵人選為目標會獲得短暫減傷。', buildIntent: '保護低血隊友。', uiCopy: '隊友瀕危時，你被迫接仇恨會更穩。', balanceNote: '只在被選為目標時生效，不主動改寫怪物 AI。' }),
  node({ id: 'warrior_guard_bell_impact', name: '鐘面衝擊', family: 'warrior', branch: 'guard', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['warrior_guard_counter_window'], mechanic: '格擋 boss 攻擊後，下一次反擊會附加短暫行動延後，但不能連續套用在同一 boss。', buildIntent: 'Boss 坦克與節奏控制。', uiCopy: '格擋 boss 後可短暫拖慢它的節奏。', balanceNote: 'Boss 內建免疫窗口，防止永久控場。' }),
  node({ id: 'warrior_guard_oath_anchor', name: '誓錨', family: 'warrior', branch: 'guard', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['warrior_guard_bodywall'], mechanic: '自己帶有護盾時，首次被擊退、拉扯或強制位移會消耗護盾的一部分抵消位移。', buildIntent: '站位穩定。', uiCopy: '護盾可替你抵消一次位移。', balanceNote: '消耗護盾而非免費免疫。' }),
  node({ id: 'warrior_guard_last_plate', name: '最後甲片', family: 'warrior', branch: 'guard', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['warrior_guard_bell_impact', 'warrior_guard_oath_anchor'], mechanic: '每場戰鬥第一次生命將低於 20% 時，若上一回合選擇防禦，保留 1 HP 並清空盾線。', buildIntent: '防禦型瀕死保險。', uiCopy: '正確防禦可把一次致命傷壓到 1 HP。', balanceNote: '要求上一回合防禦，不能作為通用免死。' }),
  node({ id: 'warrior_guard_keystone_unbroken_line', name: '不破盾線', family: 'warrior', branch: 'guard', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['warrior_guard_last_plate'], mechanic: 'Keystone：格擋成功後可把下一次自我治療的一部分轉成同房隊友護盾；觸發後短時間不能閃避。', buildIntent: '坦克轉隊伍保護。', uiCopy: '格擋後把自我恢復變成隊伍護盾。', balanceNote: '犧牲閃避，避免坦克同時吃滿機動與保護。', keystone: true }),
  node({ id: 'warrior_fury_red_threshold', name: '赤線', family: 'warrior', branch: 'fury', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '生命低於 45% 時，怒氣自然衰減暫停；離開低血後延遲 1 回合恢復衰減。', buildIntent: '低血怒氣維持。', uiCopy: '低血時保留怒氣窗口。', balanceNote: '不直接增傷，只延長資源窗口。' }),
  node({ id: 'warrior_fury_blood_count', name: '血數', family: 'warrior', branch: 'fury', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['warrior_fury_red_threshold'], mechanic: '每次自己因敵人攻擊失去超過最大生命 15% 時，記錄 1 層血數。擊殺敵人會消耗血數回復怒氣。', buildIntent: '承傷轉連殺資源。', uiCopy: '大傷害會留下可在擊殺時兌現的血數。', balanceNote: '只在敵人傷害觸發，避免自傷刷層。' }),
  node({ id: 'warrior_fury_momentum_kill', name: '斬後前傾', family: 'warrior', branch: 'fury', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['warrior_fury_blood_count'], mechanic: '擊殺後若同房仍有怪物，下一次近戰行動可以忽略一次輕微緩速或行動延後。', buildIntent: '連殺動能。', uiCopy: '擊殺後可穿過一次節奏阻礙。', balanceNote: '不提高傷害，僅保持行動節奏。' }),
  node({ id: 'warrior_fury_open_wound', name: '開傷記憶', family: 'warrior', branch: 'fury', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['warrior_fury_red_threshold'], mechanic: '低血期間命中同一目標兩次後，目標被標為開傷；隊友治療你時會移除開傷並返還少量怒氣。', buildIntent: '輸出與治療互動。', uiCopy: '低血連續壓迫可讓治療變成怒氣回流。', balanceNote: '需要隊友或自療介入，避免單人無限循環。' }),
  node({ id: 'warrior_fury_no_retreat', name: '不退半步', family: 'warrior', branch: 'fury', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['warrior_fury_momentum_kill'], mechanic: '低血時若沒有移動，下一次受到 approaching 怪物攻擊後可立刻獲得一次免費目標重選。', buildIntent: '站樁高風險反打。', uiCopy: '低血站定可在被逼近後重新選擇獵物。', balanceNote: '只改目標選擇，不給額外行動。' }),
  node({ id: 'warrior_fury_ash_breath', name: '灰息', family: 'warrior', branch: 'fury', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['warrior_fury_open_wound'], mechanic: '每場戰鬥第一次進入低血時，清除自己一個非控制類 DoT，並把清除結果轉成短暫怒氣上限提升。', buildIntent: '低血生存與資源爆發準備。', uiCopy: '第一次低血可把持續傷害折成怒氣空間。', balanceNote: '不清硬控，避免取代淨化職能。' }),
  node({ id: 'warrior_fury_grave_count', name: '墓數', family: 'warrior', branch: 'fury', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['warrior_fury_no_retreat', 'warrior_fury_ash_breath'], mechanic: '同房每有一具怪物屍體，低血狀態下的資源消耗檢查可獲得一次小幅緩衝；離房後清空。', buildIntent: '清怪後滾雪球。', uiCopy: '屍體越多，低血資源越不容易斷。', balanceNote: '只在同房屍體存在時有效，避免跨區帶收益。' }),
  node({ id: 'warrior_fury_keystone_bell_ringer', name: '喪鐘先鋒', family: 'warrior', branch: 'fury', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['warrior_fury_grave_count'], mechanic: 'Keystone：低血擊殺會使同房其他怪物短暫恐懼並延後行動；每次觸發消耗自身當前生命的一部分，不能致死。', buildIntent: '高風險連殺控場。', uiCopy: '低血擊殺敲響喪鐘，拖慢同房敵人。', balanceNote: '每場限制觸發次數，避免清場控場過強。', keystone: true }),
  node({ id: 'warrior_command_eye_contact', name: '視線接管', family: 'warrior', branch: 'command', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '嘲諷或保護行動後，記錄一個敵人視線。隊友攻擊該敵人時不會移除視線，但你被擊中會清除。', buildIntent: '仇恨與隊伍輸出窗口。', uiCopy: '你能替隊友維持目標視線。', balanceNote: '視線不是硬嘲諷，仍受怪物規則影響。' }),
  node({ id: 'warrior_command_exit_call', name: '出口號令', family: 'warrior', branch: 'command', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['warrior_command_eye_contact'], mechanic: '指定出口後，下一個從該方向 approaching 的怪物抵達時會優先把你列為候選目標。', buildIntent: '入口守備。', uiCopy: '你能預先喊住某個方向的威脅。', balanceNote: '只影響候選權重，不保證鎖定。' }),
  node({ id: 'warrior_command_shared_cover', name: '共用掩護', family: 'warrior', branch: 'command', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['warrior_command_eye_contact'], mechanic: '同房隊友使用非傷害支援行動後，你下一次承受該隊友附近敵人的傷害時獲得小幅減傷。', buildIntent: '保護支援者。', uiCopy: '隊友支援後，你能更好地接住壓力。', balanceNote: '需要隊友行動觸發，避免單人常駐。' }),
  node({ id: 'warrior_command_rally_mark', name: '集火記號', family: 'warrior', branch: 'command', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['warrior_command_exit_call'], mechanic: '你標記一個被嘲諷或視線接管的敵人；第一個命中該目標的隊友獲得少量資源回復。', buildIntent: '隊伍集火。', uiCopy: '被你喊住的目標能提供隊友資源回流。', balanceNote: '每個標記只回復一次。' }),
  node({ id: 'warrior_command_hold_center', name: '守住中線', family: 'warrior', branch: 'command', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['warrior_command_shared_cover'], mechanic: '若同房存在至少兩名隊友，你的第一次嘲諷失敗會改為給隊伍短暫站位抗性。', buildIntent: '組隊控場保底。', uiCopy: '嘲諷失敗時改為穩住隊伍站位。', balanceNote: '只在組隊有效。' }),
  node({ id: 'warrior_command_banner_memory', name: '旗影記憶', family: 'warrior', branch: 'command', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['warrior_command_rally_mark'], mechanic: '隊友在你的視線目標上擊殺怪物時，下一次出口號令持續時間延長。', buildIntent: '指揮節奏滾動。', uiCopy: '集火擊殺會延長下一次號令。', balanceNote: '延長的是控制窗口，不提高輸出。' }),
  node({ id: 'warrior_command_war_table', name: '戰桌判讀', family: 'warrior', branch: 'command', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['warrior_command_hold_center', 'warrior_command_banner_memory'], mechanic: '每場戰鬥第一次有 boss 或 elite 換目標時，你獲得一次免費視線接管嘗試。', buildIntent: 'Boss/精英戰隊伍保護。', uiCopy: '強敵換目標時，你能嘗試接回視線。', balanceNote: '嘗試仍可能失敗，避免硬鎖 boss。' }),
  node({ id: 'warrior_command_keystone_frontline_captain', name: '前線隊長', family: 'warrior', branch: 'command', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['warrior_command_war_table'], mechanic: 'Keystone：你的視線接管、出口號令與集火記號共享一個戰令循環；完成三種不同戰令後，同房隊友下一次受到的控制持續時間縮短。', buildIntent: '隊伍保護與控場。', uiCopy: '輪流使用戰令可替隊伍壓低控制時間。', balanceNote: '要求三種不同戰令，避免單一按鍵循環。', keystone: true }),
];

const mageNodes = [
  node({ id: 'mage_arcane_low_tide', name: '低潮魔力', family: 'mage', branch: 'arcane', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: 'MP 低於 30% 時，下一次非傷害施法若成功，返還少量 MP。', buildIntent: '低魔續戰。', uiCopy: '低魔時用非傷害法術回一口資源。', balanceNote: '不支援傷害法術，避免爆發循環免費化。' }),
  node({ id: 'mage_arcane_overload_gate', name: '過載閘', family: 'mage', branch: 'arcane', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['mage_arcane_low_tide'], mechanic: '單回合消耗大量 MP 後，獲得過載閘。下一次施法可把過載閘轉成房間標記，而不是增傷。', buildIntent: '高消耗後的戰場準備。', uiCopy: '高消耗後留下可塑形的過載閘。', balanceNote: '過載不直接加傷害。' }),
  node({ id: 'mage_arcane_thread_count', name: '咒線計數', family: 'mage', branch: 'arcane', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['mage_arcane_overload_gate'], mechanic: '連續使用不同 usage context 的法術時累積咒線；咒線可降低下一次偵查或護盾類施法的資源壓力。', buildIntent: '法術節奏切換。', uiCopy: '混用戰鬥與場地法術會累積咒線。', balanceNote: '只支援工具/防禦類法術。' }),
  node({ id: 'mage_arcane_reserved_spark', name: '保留火花', family: 'mage', branch: 'arcane', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['mage_arcane_low_tide'], mechanic: '戰鬥結束時若 MP 低於 20%，保留一枚火花。下一場戰鬥第一次施法前可消耗火花獲得少量 MP。', buildIntent: '連續戰續航。', uiCopy: '低魔收尾可替下一戰保存火花。', balanceNote: '火花不可堆疊。' }),
  node({ id: 'mage_arcane_spell_debt', name: '法債', family: 'mage', branch: 'arcane', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['mage_arcane_thread_count'], mechanic: '資源不足時可讓一次非傷害施法進入法債，延後支付 MP；法債未清時不能再次使用。', buildIntent: '緊急工具施法。', uiCopy: '可以為非傷害法術欠一次 MP。', balanceNote: '只允許非傷害，且欠債期間鎖定。' }),
  node({ id: 'mage_arcane_echo_reservoir', name: '迴聲儲槽', family: 'mage', branch: 'arcane', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['mage_arcane_reserved_spark'], mechanic: '法術未命中時，將部分資源壓力記入儲槽。下一次命中後可消耗儲槽獲得偵查資訊。', buildIntent: '失手轉情報。', uiCopy: '失手不是空白，會變成下次命中的情報。', balanceNote: '儲槽不返還傷害或資源。' }),
  node({ id: 'mage_arcane_safe_channel', name: '安全導流', family: 'mage', branch: 'arcane', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['mage_arcane_spell_debt', 'mage_arcane_echo_reservoir'], mechanic: '若上一回合沒有受到傷害，下一次高消耗施法後不會立即觸發負面過載代價，而是延後 1 tick。', buildIntent: '規劃型爆發前置。', uiCopy: '安全施法可延後過載代價。', balanceNote: '只延後代價，不取消代價。' }),
  node({ id: 'mage_arcane_keystone_mana_ledger', name: '魔力帳本', family: 'mage', branch: 'arcane', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['mage_arcane_safe_channel'], mechanic: 'Keystone：每場戰鬥記錄一次最高 MP 消耗。當 MP 低於 25% 時，可把紀錄轉成一次防禦或偵查行動的免費資源額度。', buildIntent: '高消耗與低魔工具循環。', uiCopy: '把最高消耗記在帳上，低魔時兌換工具行動。', balanceNote: '不能兌換傷害法術。', keystone: true }),
  node({ id: 'mage_elemental_first_color', name: '第一色', family: 'mage', branch: 'elemental', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '首次施放元素法術時標記該元素；下一次不同元素命中會建立元素輪轉。', buildIntent: '元素輪轉起手。', uiCopy: '用不同元素開始輪轉。', balanceNote: '不增加元素傷害。' }),
  node({ id: 'mage_elemental_room_ink', name: '房間墨跡', family: 'mage', branch: 'elemental', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['mage_elemental_first_color'], mechanic: '元素輪轉成功後，在目標房間留下墨跡。隊友使用 AoE 命中該房間時移除墨跡並揭露怪物數量。', buildIntent: '元素與隊伍 AoE 情報。', uiCopy: '元素輪轉能替房間留下可消耗的墨跡。', balanceNote: '墨跡提供情報而非直接增傷。' }),
  node({ id: 'mage_elemental_crosswind', name: '穿堂風', family: 'mage', branch: 'elemental', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['mage_elemental_room_ink'], mechanic: '隔房元素法術命中後，若目標房間已有墨跡，下一次對同方向施法的 arrival 風險提示更清楚。', buildIntent: '隔房房間控制。', uiCopy: '墨跡能提升隔房風險判讀。', balanceNote: '只改善資訊，不提高命中。' }),
  node({ id: 'mage_elemental_opposite_charge', name: '對色蓄荷', family: 'mage', branch: 'elemental', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['mage_elemental_first_color'], mechanic: '連續施放互斥元素時獲得對色蓄荷；下一次護盾可帶有最後元素的抗性標記。', buildIntent: '元素輪轉轉防禦。', uiCopy: '互斥元素可把護盾染色。', balanceNote: '不提高護盾量，只改抗性標記。' }),
  node({ id: 'mage_elemental_spill_line', name: '溢流線', family: 'mage', branch: 'elemental', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['mage_elemental_crosswind'], mechanic: 'AoE 只命中 1 個目標時，留下溢流線。下一次隊友對同房使用非單體行動可消耗溢流線降低行動風險。', buildIntent: 'AoE 失配補償。', uiCopy: '小範圍失手可留下隊伍可用的溢流線。', balanceNote: '只補償節奏，不返還資源。' }),
  node({ id: 'mage_elemental_prism_exit', name: '稜鏡出口', family: 'mage', branch: 'elemental', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['mage_elemental_opposite_charge'], mechanic: '房間墨跡被消耗時，可短暫標記一個出口；從該出口 approaching 的怪物會顯示最後元素抗性提示。', buildIntent: '房間到出口的情報鏈。', uiCopy: '墨跡消耗後能標記出口抗性情報。', balanceNote: '提示不等於弱點增傷。' }),
  node({ id: 'mage_elemental_star_grid', name: '星格', family: 'mage', branch: 'elemental', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['mage_elemental_spill_line', 'mage_elemental_prism_exit'], mechanic: '同一場戰鬥完成三種不同元素輪轉後，建立星格。星格讓下一次房間標記可同時保存兩個元素資訊。', buildIntent: '高階元素規劃。', uiCopy: '三元素輪轉後，房間標記能保存雙元素資訊。', balanceNote: '只提高標記資訊容量。' }),
  node({ id: 'mage_elemental_keystone_fourfold_room', name: '四象房間', family: 'mage', branch: 'elemental', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['mage_elemental_star_grid'], mechanic: 'Keystone：完成四種不同元素施法後，下一個房間標記會影響整個房間的元素判讀；隊伍可看到最適合的元素入口，但不獲得直接增傷。', buildIntent: '房間級元素指揮。', uiCopy: '四元素完成後，整房元素資訊攤開。', balanceNote: '嚴禁直接提供傷害倍率。', keystone: true }),
  node({ id: 'mage_ward_breath_room', name: '喘息間', family: 'mage', branch: 'ward', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '施放護盾後，如果本回合沒有受到傷害，下一次非傷害施法的被打斷風險下降。', buildIntent: '護盾後安全施法。', uiCopy: '護盾守住一回合後，下一次工具施法更穩。', balanceNote: '不保護傷害爆發。' }),
  node({ id: 'mage_ward_mana_skin', name: '魔膚', family: 'mage', branch: 'ward', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['mage_ward_breath_room'], mechanic: '受到小額傷害時，可把部分傷害轉成 MP 壓力而非生命傷害；MP 不足時不觸發。', buildIntent: '魔力承傷。', uiCopy: '小傷害可以壓到 MP 上。', balanceNote: '只處理小額傷害，避免取代坦克。' }),
  node({ id: 'mage_ward_glass_edge', name: '玻璃邊界', family: 'mage', branch: 'ward', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['mage_ward_mana_skin'], mechanic: '護盾被打破時，記錄破盾來源。下一次對來源方向的偵查或防禦行動消耗降低。', buildIntent: '破盾轉情報。', uiCopy: '破盾會指出危險方向。', balanceNote: '不反傷。' }),
  node({ id: 'mage_ward_interrupt_hook', name: '斷咒鉤', family: 'mage', branch: 'ward', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['mage_ward_breath_room'], mechanic: '被 interrupt 後，下一次護盾或偵查行動可獲得短暫保護層，但不能立刻施放傷害法術。', buildIntent: '被打斷後恢復節奏。', uiCopy: '被打斷後先補防禦或情報更安全。', balanceNote: '鎖住傷害法術，避免反爆發。' }),
  node({ id: 'mage_ward_silver_pause', name: '銀停頓', family: 'mage', branch: 'ward', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['mage_ward_glass_edge'], mechanic: '若護盾存在時選擇等待或非傷害行動，護盾到期時可留下 1 tick 的施法穩定。', buildIntent: '防禦節奏規劃。', uiCopy: '不急著輸出可把護盾收尾變穩定。', balanceNote: '要求放棄攻擊節奏。' }),
  node({ id: 'mage_ward_risk_transfer', name: '風險轉移', family: 'mage', branch: 'ward', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['mage_ward_interrupt_hook'], mechanic: '高消耗施法前若有護盾，可把一部分被打斷風險轉成破盾風險。', buildIntent: '高風險爆發保護。', uiCopy: '用護盾承接被打斷風險。', balanceNote: '護盾可能因此消失，不能免費保護。' }),
  node({ id: 'mage_ward_sheltered_cast', name: '遮蔽詠唱', family: 'mage', branch: 'ward', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['mage_ward_silver_pause', 'mage_ward_risk_transfer'], mechanic: '若上一回合護盾吸收過傷害，下一次非瞬發施法可先結算防禦類狀態，再檢查打斷。', buildIntent: '施法順序調整。', uiCopy: '護盾吸傷後，詠唱檢查順序更有利。', balanceNote: '只調順序，不免疫打斷。' }),
  node({ id: 'mage_ward_keystone_crystal_sanctum', name: '晶室聖域', family: 'mage', branch: 'ward', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['mage_ward_sheltered_cast'], mechanic: 'Keystone：每場戰鬥第一次護盾完整存活到期時，生成晶室。晶室存在期間下一次高消耗法術若被打斷，改為消耗晶室並保留部分資源。', buildIntent: '高風險法術保險。', uiCopy: '完整守住護盾可換一次高消耗保險。', balanceNote: '需要護盾完整到期，不能被動常駐。', keystone: true }),
];

const priestNodes = [
  node({ id: 'priest_mercy_overflow_bowl', name: '溢流缽', family: 'priest', branch: 'mercy', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '過量治療會記錄為慈悲水位。下一次隊友受到小額傷害時，消耗水位抵消一部分。', buildIntent: '過量治療轉防禦。', uiCopy: '過量治療不浪費，會變成慈悲水位。', balanceNote: '水位上限很低，避免取代護盾。' }),
  node({ id: 'priest_mercy_last_breath', name: '末息握持', family: 'priest', branch: 'mercy', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['priest_mercy_overflow_bowl'], mechanic: '治療低血隊友時，記錄末息。若該隊友下一次仍低血，支援行動資源檢查更寬鬆。', buildIntent: '急救連段。', uiCopy: '低血治療能替下一次急救開窗口。', balanceNote: '只支援同一隊友。' }),
  node({ id: 'priest_mercy_quiet_hands', name: '靜手', family: 'priest', branch: 'mercy', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['priest_mercy_last_breath'], mechanic: '若上一回合沒有造成傷害，下一次治療附帶短暫抗打斷。', buildIntent: '純治療節奏。', uiCopy: '不攻擊時，下一次救援更穩。', balanceNote: '鼓勵取捨，不提高治療量。' }),
  node({ id: 'priest_mercy_shared_pulse', name: '共脈', family: 'priest', branch: 'mercy', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['priest_mercy_overflow_bowl'], mechanic: '同房兩名以上隊友生命低於 60% 時，下一次單體治療會標記共脈；共脈讓另一名隊友獲得少量延遲恢復。', buildIntent: '單補轉隊伍穩定。', uiCopy: '多人受傷時，單補會留下一道共脈。', balanceNote: '延遲恢復小於直接群補。' }),
  node({ id: 'priest_mercy_debt_of_light', name: '光債', family: 'priest', branch: 'mercy', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['priest_mercy_quiet_hands'], mechanic: '資源不足時可為一次治療留下光債；光債存在時不能使用審判型行動。', buildIntent: '緊急治療。', uiCopy: '可以欠一次治療資源，但暫停審判。', balanceNote: '限制輸出，避免免費雙線。' }),
  node({ id: 'priest_mercy_pilgrim_pause', name: '巡禮停步', family: 'priest', branch: 'mercy', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['priest_mercy_shared_pulse'], mechanic: '移動後若沒有攻擊，下一次治療可額外揭露目標身上一個負面狀態來源。', buildIntent: '走位支援與診斷。', uiCopy: '移動後安定施救能看見狀態來源。', balanceNote: '揭露資訊，不自動淨化。' }),
  node({ id: 'priest_mercy_sunlit_reserve', name: '曦光預備', family: 'priest', branch: 'mercy', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['priest_mercy_debt_of_light', 'priest_mercy_pilgrim_pause'], mechanic: '每場戰鬥第一次成功救回低血隊友後，保存曦光。曦光可讓下一次過量治療先轉護盾再轉水位。', buildIntent: '主治療高階保護。', uiCopy: '救回低血隊友後，下一次過量治療更有效。', balanceNote: '觸發條件嚴格。' }),
  node({ id: 'priest_mercy_keystone_final_dawn', name: '終曉留名', family: 'priest', branch: 'mercy', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['priest_mercy_sunlit_reserve'], mechanic: 'Keystone：同房隊友第一次受到致命傷時，若信仰高於門檻，可消耗大量信仰使其保留 1 HP；觸發後你的治療短暫變弱。', buildIntent: '主治療救命。', uiCopy: '以高信仰換一次隊友留名。', balanceNote: '每場一次且帶治療懲罰。', keystone: true }),
  node({ id: 'priest_judgement_scale_mark', name: '秤印', family: 'priest', branch: 'judgement', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '在治療與傷害行動之間切換時，留下秤印。秤印可讓下一次信仰變動更接近中線。', buildIntent: '光暗取捨與信仰穩定。', uiCopy: '救與罰之間切換會穩住信仰。', balanceNote: '不增傷也不增療。' }),
  node({ id: 'priest_judgement_named_sin', name: '命罪', family: 'priest', branch: 'judgement', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['priest_judgement_scale_mark'], mechanic: '對 undead 或 demon 施加負面狀態時記錄命罪；下一次淨化隊友可同時揭露命罪目標的一個抗性。', buildIntent: '審判與支援互動。', uiCopy: '制裁邪物後，淨化能讀出它的抗性。', balanceNote: '資訊收益，不加傷害。' }),
  node({ id: 'priest_judgement_choir_step', name: '唱班步', family: 'priest', branch: 'judgement', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['priest_judgement_scale_mark'], mechanic: '連續兩回合未使用同類型行動時，第三回合的信仰檢查更穩。', buildIntent: '混合型審判節奏。', uiCopy: '治療、支援、制裁輪替會穩住信仰。', balanceNote: '鼓勵輪替，避免單一路線常駐。' }),
  node({ id: 'priest_judgement_ash_verdict', name: '灰判', family: 'priest', branch: 'judgement', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['priest_judgement_named_sin'], mechanic: '目標身上有燃燒、詛咒或沉默時，審判行動會額外記錄判詞。判詞可被下一次隊友支援行動消耗，降低目標行動穩定。', buildIntent: '狀態轉隊伍控場。', uiCopy: '負面狀態能被寫成隊伍可消耗的判詞。', balanceNote: '判詞不直接造成傷害。' }),
  node({ id: 'priest_judgement_bright_shadow', name: '明影', family: 'priest', branch: 'judgement', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['priest_judgement_choir_step'], mechanic: '信仰高於 70 時支援行動更穩；低於 30 時審判行動更容易留下情報標記。', buildIntent: '高低信仰雙姿態。', uiCopy: '高信仰偏保護，低信仰偏追查罪痕。', balanceNote: '只改穩定與情報，不加數值。' }),
  node({ id: 'priest_judgement_oath_flame', name: '誓火', family: 'priest', branch: 'judgement', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['priest_judgement_ash_verdict'], mechanic: '消耗判詞後，下一次治療會清除自己一層光暗失衡。', buildIntent: '輸出後回支援。', uiCopy: '判詞被隊友消耗後，你更容易回到治療節奏。', balanceNote: '需要隊伍互動。' }),
  node({ id: 'priest_judgement_silent_trial', name: '默審', family: 'priest', branch: 'judgement', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['priest_judgement_bright_shadow', 'priest_judgement_oath_flame'], mechanic: '每場戰鬥第一次被沉默時，若場上有判詞，消耗判詞縮短沉默並揭露施加者。', buildIntent: '審判者抗控。', uiCopy: '判詞能替你縮短第一次沉默。', balanceNote: '必須有判詞，不是常駐抗沉默。' }),
  node({ id: 'priest_judgement_keystone_scales_of_mercy', name: '慈審天秤', family: 'priest', branch: 'judgement', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['priest_judgement_silent_trial'], mechanic: 'Keystone：治療低血隊友與制裁命罪敵人會在天秤兩端累積；兩端都滿時，下一次支援行動會同時清一個小負面並標記一個敵人。', buildIntent: '治療與審判雙修。', uiCopy: '救援與制裁都完成時，支援會帶一點淨化與標記。', balanceNote: '效果拆小，避免變成萬能行動。', keystone: true }),
  node({ id: 'priest_purity_white_thread', name: '白線', family: 'priest', branch: 'purity', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '淨化成功後，目標獲得白線。白線會記錄下一個施加相同負面狀態的來源。', buildIntent: '淨化後防再感染。', uiCopy: '淨化後能追蹤下一次污染來源。', balanceNote: '提供追蹤不提供免疫。' }),
  node({ id: 'priest_purity_grave_sense', name: '墓感', family: 'priest', branch: 'purity', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['priest_purity_white_thread'], mechanic: '同房 undead 數量高於 2 時，第一次支援行動會揭露最危險 undead 的等級與狀態。', buildIntent: '反不死情報。', uiCopy: '亡者成群時先看見最危險的一個。', balanceNote: '只揭露資訊。' }),
  node({ id: 'priest_purity_bell_cleanse', name: '鈴淨', family: 'priest', branch: 'purity', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['priest_purity_white_thread'], mechanic: '淨化控制類狀態後，下一次非傷害支援行動被打斷風險下降。', buildIntent: '淨化後續支援。', uiCopy: '清掉控制後，下一次支援更穩。', balanceNote: '不降低傷害技能風險。' }),
  node({ id: 'priest_purity_salt_circle', name: '鹽圈', family: 'priest', branch: 'purity', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['priest_purity_grave_sense'], mechanic: '在同房有 undead 或 demon 時，使用非傷害支援行動會建立鹽圈。鹽圈使下一次詛咒來源更容易被揭露。', buildIntent: '詛咒區域防護。', uiCopy: '面對邪物時，支援行動會留下鹽圈。', balanceNote: '鹽圈不直接減傷。' }),
  node({ id: 'priest_purity_group_litany', name: '群禱短句', family: 'priest', branch: 'purity', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['priest_purity_bell_cleanse'], mechanic: '同房兩名以上隊友帶有負面狀態時，第一次淨化會額外標記第二個狀態作為下一次淨化的優先目標。', buildIntent: '多人負面管理。', uiCopy: '多人受污染時，第一次淨化會替下一次排序。', balanceNote: '不一次清多個。' }),
  node({ id: 'priest_purity_relic_seal', name: '聖匣封條', family: 'priest', branch: 'purity', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['priest_purity_salt_circle'], mechanic: 'boss 或 elite 施加負面狀態後，下一次淨化會記錄封條。封條可用於降低同類狀態下一次持續時間。', buildIntent: 'Boss 異常應對。', uiCopy: '強敵污染可被封條記錄，降低下一次同類持續。', balanceNote: '只作用同類狀態。' }),
  node({ id: 'priest_purity_safe_procession', name: '安行隊列', family: 'priest', branch: 'purity', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['priest_purity_group_litany', 'priest_purity_relic_seal'], mechanic: '隊伍離開有鹽圈的房間時，下一房首次受到的詛咒類狀態持續時間縮短。', buildIntent: '探索防護。', uiCopy: '從鹽圈出發，下一房更抗詛咒。', balanceNote: '只一次，且只限詛咒類。' }),
  node({ id: 'priest_purity_keystone_ossuary_sun', name: '骨堂日輪', family: 'priest', branch: 'purity', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['priest_purity_safe_procession'], mechanic: 'Keystone：淨化 undead 或 curse 來源後，建立日輪。日輪存在時隊伍下一次受到同類負面狀態會先縮短，再讓日輪消失。', buildIntent: '反不死與反詛咒隊伍保護。', uiCopy: '清掉源頭後，日輪替隊伍擋下一次同類污染。', balanceNote: '需要先淨化來源，不能開場白給。', keystone: true }),
];

const rangerNodes = [
  node({ id: 'ranger_scout_first_track', name: '第一足跡', family: 'ranger', branch: 'scout', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '進入新房後第一次偵查會記錄足跡。下一次隔房攻擊若沿足跡方向，命中後揭露目標房怪物數量。', buildIntent: '偵查接隔房。', uiCopy: '偵查方向會成為隔房攻擊的足跡。', balanceNote: '揭露資訊不提高命中。' }),
  node({ id: 'ranger_scout_window_shot', name: '窗線射擊', family: 'ranger', branch: 'scout', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['ranger_scout_first_track'], mechanic: '隔房射擊未擊殺目標時，保留一條窗線。下次偵查同方向消耗降低。', buildIntent: '失手轉偵查效率。', uiCopy: '射擊留下窗線，方便再次偵查。', balanceNote: '不返還專注。' }),
  node({ id: 'ranger_scout_roomfall_mark', name: '落房標記', family: 'ranger', branch: 'scout', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['ranger_scout_window_shot'], mechanic: '隔房命中被偵查揭露的怪物時，標記目標房間。隊友對該房間使用 AoE 時可看見目標排序。', buildIntent: '隔房狙擊支援 AoE。', uiCopy: '被偵查的隔房命中會標記整個房間。', balanceNote: '排序資訊不等於傷害擴散。' }),
  node({ id: 'ranger_scout_quiet_exit', name: '靜出口', family: 'ranger', branch: 'scout', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['ranger_scout_first_track'], mechanic: '若本回合沒有攻擊，下一次移動到已偵查方向時保留一部分偵查資訊。', buildIntent: '探索機動。', uiCopy: '安靜移動能帶走部分偵查情報。', balanceNote: '攻擊會取消收益。' }),
  node({ id: 'ranger_scout_blind_angle', name: '盲角', family: 'ranger', branch: 'scout', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['ranger_scout_roomfall_mark'], mechanic: '若隔房攻擊沒有可見目標，失敗時改為揭露該方向是否有 approaching 威脅。', buildIntent: '盲射情報。', uiCopy: '盲射失敗可換來逼近情報。', balanceNote: '仍消耗行動與資源。' }),
  node({ id: 'ranger_scout_hawk_count', name: '鷹數', family: 'ranger', branch: 'scout', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['ranger_scout_quiet_exit'], mechanic: '連續兩次偵查不同方向後，下一次隔房攻擊命中會揭露目標是否為 elite 或 boss。', buildIntent: '先手判讀。', uiCopy: '多方向偵查後，命中能辨識強敵。', balanceNote: '只揭露階級。' }),
  node({ id: 'ranger_scout_path_memory', name: '路徑記憶', family: 'ranger', branch: 'scout', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['ranger_scout_blind_angle', 'ranger_scout_hawk_count'], mechanic: '從已偵查方向移動後，下一次回到原房間時保留最後一次足跡方向。', buildIntent: '探索回撤。', uiCopy: '偵查過的路線會在回房時保留記憶。', balanceNote: '只保留一個方向。' }),
  node({ id: 'ranger_scout_keystone_roomfall_doctrine', name: '落房戰法', family: 'ranger', branch: 'scout', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['ranger_scout_path_memory'], mechanic: 'Keystone：隔房單體攻擊命中被完整偵查的房間時，會把該房間列為落房。隊伍下次對落房採取非單體行動可取得完整目標排序。', buildIntent: '隔房狙擊與隊伍開戰規劃。', uiCopy: '完整偵查後的隔房命中會建立落房戰法。', balanceNote: '提供排序資訊，不複製傷害。', keystone: true }),
  node({ id: 'ranger_trap_tripwire_count', name: '絆線計數', family: 'ranger', branch: 'trap', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '設置或觸發陷阱時記錄絆線。命中被標記目標會消耗絆線延後另一個 approaching 目標 1 tick。', buildIntent: '陷阱與 approaching 控制。', uiCopy: '陷阱絆線能拖慢另一個逼近目標。', balanceNote: '一次只影響一個目標。' }),
  node({ id: 'ranger_trap_mark_bait', name: '標記誘餌', family: 'ranger', branch: 'trap', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['ranger_trap_tripwire_count'], mechanic: '標記敵人後若該敵人未攻擊你，下一次陷阱觸發會揭露它的目標傾向。', buildIntent: '標記與怪物 AI 情報。', uiCopy: '不理你的標記敵人會暴露目標傾向。', balanceNote: '只揭露傾向。' }),
  node({ id: 'ranger_trap_reed_snare', name: '蘆索絆扣', family: 'ranger', branch: 'trap', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['ranger_trap_tripwire_count'], mechanic: 'approaching 怪物踩中陷阱時，記錄來源方向。下一次往該方向射擊可先檢查陷阱狀態。', buildIntent: '方向陷阱控制。', uiCopy: '陷阱會記住逼近來源方向。', balanceNote: '只給狀態檢查，不保證命中。' }),
  node({ id: 'ranger_trap_echo_mark', name: '迴標', family: 'ranger', branch: 'trap', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['ranger_trap_mark_bait'], mechanic: '標記目標死亡時，若同房有陷阱，標記會移到一個未標記怪物身上但持續時間縮短。', buildIntent: '標記傳播。', uiCopy: '陷阱在場時，標記可縮短轉移。', balanceNote: '縮短持續避免永久標記。' }),
  node({ id: 'ranger_trap_smoke_pocket', name: '煙袋', family: 'ranger', branch: 'trap', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['ranger_trap_reed_snare'], mechanic: '陷阱觸發後，下一次閃避成功會留下煙袋。煙袋讓你重新選擇一個標記目標。', buildIntent: '陷阱後機動重選。', uiCopy: '陷阱觸發後的閃避可重選標記。', balanceNote: '重選不刷新標記時間。' }),
  node({ id: 'ranger_trap_bone_chime', name: '骨鈴線', family: 'ranger', branch: 'trap', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['ranger_trap_echo_mark'], mechanic: '陷阱影響 undead 或 beast 時，下一次偵查會額外顯示該族群是否仍在相鄰房。', buildIntent: '族群追蹤。', uiCopy: '骨鈴線能追蹤特定族群動向。', balanceNote: '只支援有限族群。' }),
  node({ id: 'ranger_trap_ambush_table', name: '伏擊桌', family: 'ranger', branch: 'trap', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['ranger_trap_smoke_pocket', 'ranger_trap_bone_chime'], mechanic: '同一戰鬥內觸發三種不同陷阱或標記互動後，建立伏擊桌。伏擊桌讓下一次隊友攻擊看見目標是否帶標記。', buildIntent: '隊伍伏擊協作。', uiCopy: '多種控場互動完成後，隊伍看見標記狀態。', balanceNote: '資訊收益，不加傷害。' }),
  node({ id: 'ranger_trap_keystone_hunter_net', name: '獵網成形', family: 'ranger', branch: 'trap', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['ranger_trap_ambush_table'], mechanic: 'Keystone：陷阱、標記、隔房命中各完成一次後，形成獵網。下一個 approaching 怪物抵達時會先觸發獵網，延後行動並揭露抗性。', buildIntent: '陷阱控場完整循環。', uiCopy: '陷阱、標記、隔房命中串起來會形成獵網。', balanceNote: '三條件缺一不可。', keystone: true }),
  node({ id: 'ranger_focus_breath_mark', name: '呼吸標記', family: 'ranger', branch: 'focus', tier: 1, requiredLevel: 2, maxRank: 3, prerequisites: [], mechanic: '未移動且未受傷的一回合後，下一次命中會留下呼吸標記。命中呼吸標記可回復少量專注。', buildIntent: '站定精準循環。', uiCopy: '安定一回合後，命中能留下回專注標記。', balanceNote: '需要安定回合。' }),
  node({ id: 'ranger_focus_sidestep_read', name: '側步讀秒', family: 'ranger', branch: 'focus', tier: 1, requiredLevel: 4, maxRank: 2, prerequisites: ['ranger_focus_breath_mark'], mechanic: '閃避成功後，下一次單體射擊若命中，會顯示目標下一個行動傾向。', buildIntent: '閃避反打情報。', uiCopy: '閃避後命中能讀出下一步。', balanceNote: '讀行動不改行動。' }),
  node({ id: 'ranger_focus_clean_release', name: '淨放', family: 'ranger', branch: 'focus', tier: 2, requiredLevel: 7, maxRank: 3, prerequisites: ['ranger_focus_breath_mark'], mechanic: '專注高於 80 時，下一次單體命中後可保存一部分未用專注為淨放。淨放降低下一次標記成本。', buildIntent: '高專注單體循環。', uiCopy: '高專注命中會留下標記成本緩衝。', balanceNote: '不增加命中或傷害。' }),
  node({ id: 'ranger_focus_needle_eye', name: '針眼', family: 'ranger', branch: 'focus', tier: 2, requiredLevel: 10, maxRank: 2, prerequisites: ['ranger_focus_sidestep_read'], mechanic: '攻擊體型小或高迴避目標未命中時，下一次偵查同目標會額外顯示一個弱點標籤。', buildIntent: '失手轉弱點判讀。', uiCopy: '打滑的目標會被你看出弱點。', balanceNote: '弱點標籤不自動增傷。' }),
  node({ id: 'ranger_focus_still_string', name: '靜弦', family: 'ranger', branch: 'focus', tier: 3, requiredLevel: 14, maxRank: 2, prerequisites: ['ranger_focus_clean_release'], mechanic: '連續兩回合攻擊同一目標且沒有移動時，下一次被迫換目標不會清除呼吸標記。', buildIntent: '專注單體穩定。', uiCopy: '穩定追擊可保存標記。', balanceNote: '被迫換目標才生效。' }),
  node({ id: 'ranger_focus_vanish_count', name: '消影數', family: 'ranger', branch: 'focus', tier: 3, requiredLevel: 18, maxRank: 2, prerequisites: ['ranger_focus_needle_eye'], mechanic: '成功閃避 elite 或 boss 攻擊後累積消影數。消影數可讓下一次移動保留呼吸標記。', buildIntent: '閃避後換位輸出。', uiCopy: '閃避強敵後，移動也能保留節奏。', balanceNote: '只對 elite/boss 攻擊觸發。' }),
  node({ id: 'ranger_focus_arrow_clock', name: '箭鐘', family: 'ranger', branch: 'focus', tier: 4, requiredLevel: 24, maxRank: 1, prerequisites: ['ranger_focus_still_string', 'ranger_focus_vanish_count'], mechanic: '每場戰鬥第一次連續三次命中同一目標後，建立箭鐘。箭鐘讓下一次失手保留一半專注回復條件。', buildIntent: '單體長戰穩定。', uiCopy: '連續命中後，下一次失手不會完全斷節奏。', balanceNote: '每場一次。' }),
  node({ id: 'ranger_focus_keystone_one_breath_kill', name: '一息定獵', family: 'ranger', branch: 'focus', tier: 5, requiredLevel: 32, maxRank: 1, prerequisites: ['ranger_focus_arrow_clock'], mechanic: 'Keystone：呼吸標記、淨放、箭鐘同時存在時，下一次單體命中會消耗三者，重新整理專注節奏並揭露目標是否可被處決。', buildIntent: '高專注單體輸出決策。', uiCopy: '三種專注狀態合一時，看見處決窗口。', balanceNote: '揭露處決窗口，不直接處決或增傷。', keystone: true }),
];

export const TALENT_FAMILY_DRAFTS: TalentFamilyDraft[] = [
  {
    id: 'warrior',
    name: familyNames.warrior,
    coreFantasy: '戰士把前線壓力轉成可讀的節奏：擋下、喊住、低血反推，但不靠天賦直接提高技能傷害。',
    pointModel: '每級 1 點；早期解鎖姿態，中期形成 branch loop，後期用 keystone 改變隊伍或低血玩法。',
    branches: warriorBranches,
    nodes: warriorNodes,
  },
  {
    id: 'mage',
    name: familyNames.mage,
    coreFantasy: '法師用 MP、元素與護盾管理風險，讓施法前後的房間資訊與資源壓力成為 build 取捨。',
    pointModel: '每級 1 點；三分支分別處理資源、元素房間塑形與施法保護。',
    branches: mageBranches,
    nodes: mageNodes,
  },
  {
    id: 'priest',
    name: familyNames.priest,
    coreFantasy: '祭司在救援、審判與淨化之間選擇站位，不用天賦放大治療數字，而是改變支援規則。',
    pointModel: '每級 1 點；支援型 node 分散在三線，keystone 決定主治療、雙修或反詛咒定位。',
    branches: priestBranches,
    nodes: priestNodes,
  },
  {
    id: 'ranger',
    name: familyNames.ranger,
    coreFantasy: '遊俠把開戰前情報、隔房攻擊、陷阱網與專注節奏串起來，靠準備和位置創造優勢。',
    pointModel: '每級 1 點；偵查、陷阱、專注三線都能單獨成 build，也能在中後期互相串聯。',
    branches: rangerBranches,
    nodes: rangerNodes,
  },
];

export function getTalentNodesByBranch(family: TalentFamilyDraft, branchId: string) {
  return family.nodes
    .filter((nodeDef) => nodeDef.branch === branchId)
    .sort((a, b) => a.tier - b.tier || a.requiredLevel - b.requiredLevel || a.name.localeCompare(b.name, 'zh-Hant'));
}

export function getTalentDraftSummary() {
  const families = TALENT_FAMILY_DRAFTS.length;
  const branches = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.branches.length, 0);
  const nodes = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.nodes.length, 0);
  const keystones = TALENT_FAMILY_DRAFTS.reduce((sum, family) => sum + family.nodes.filter((nodeDef) => nodeDef.keystone).length, 0);
  return { families, branches, nodes, keystones };
}
