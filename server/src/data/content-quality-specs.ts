export interface ContentQualitySpec {
  id: string;
  field: string;
  minChars: number;
  requiredElements: string[];
  bannedPatterns: string[];
  auditRule: string;
  reviewRule: string;
  smallBatchReview: string;
  largeBatchReview: string;
  highSalienceRule: string;
  nonAutomatedFallback: string;
  appliesTo: string;
}

export interface ContentGenerationPolicy {
  id: string;
  searchSpecBeforeGenerating: string;
  unchangedTextRule: string;
  noTextChangeRule: string;
  futureHookRule: string;
  batchSummaryRule: string;
  checklistSpecRule: string;
  vagueChecklistRule: string;
  noSpecFallbackRule: string;
  noCopyNeededRule: string;
  prSummaryRule: string;
  generatorInputRule: string;
  generatorOutputRule: string;
  sourceIdsRule: string;
  noPaddingRule: string;
  noTemplateReuseRule: string;
  bannedPlaceholderRule: string;
  concreteDetailRule: string;
  gameplayPurposeRule: string;
  adjacentRoomDistinctnessRule: string;
  repeatedOpeningRule: string;
  repeatedCoreNounRule: string;
  noUnimplementedReferenceRule: string;
  noModernUiToneRule: string;
  auditBeforeMergeRule: string;
  auditFailureRule: string;
  completionSummaryRule: string;
  bulkDeliveryFormatRule: string;
  samplingRule: string;
  samplingFailureRule: string;
}

const STANDARD_REVIEW_POLICY = {
  reviewRule:
    '少於 10 筆新增玩家可見文字必須全數人工讀過；10 筆以上至少抽查 10 筆或 20% 取高者，並在 checklist 註記抽查數量。',
  smallBatchReview: '1 到 9 筆玩家可見文字全數人工讀過，checklist 或 commit 摘要需註記「全數抽查」。',
  largeBatchReview: '10 筆以上玩家可見文字至少抽查 10 筆或 20% 取高者，需記錄抽查數量、失敗項目與修正方式。',
  highSalienceRule:
    '主線、二轉、核心職業技能、boss、終局副本、角色創建、付費或稀有裝備內容最低字數提高至少 20%。',
  nonAutomatedFallback:
    '若欄位暫無自動 audit，該批只能標記為資料已補，必須附 manual transcript、UI 截圖或人工抽查結果後才可標完成。',
} satisfies Pick<
  ContentQualitySpec,
  'reviewRule' | 'smallBatchReview' | 'largeBatchReview' | 'highSalienceRule' | 'nonAutomatedFallback'
>;

export const CONTENT_GENERATION_POLICY: ContentGenerationPolicy = {
  id: 'content-generation-delivery-policy',
  searchSpecBeforeGenerating:
    '開始新增、補、重寫、生成、產生、導入或完善任何玩家可見文字前，必須先搜尋 CONTENT_QUALITY_SPECS 或同章 checklist 是否已有該資料型別規格；沒有規格先補規格，不得先寫資料。',
  unchangedTextRule:
    '只搬移資料但玩家可見文字不變時，checklist 必須註記「沿用既有欄位」與來源欄位，例如 reuse existing item.description。',
  noTextChangeRule:
    '暫時不新增文案時，checklist 必須註記原因，例如 pure internal enum、only coordinate data、UI 已引用既有 item.description。',
  futureHookRule:
    '生成器或實作者產出的文字若引用尚未實作的 NPC、任務、地名、道具或系統功能，必須在同一 checklist 標記 future hook 或移除引用。',
  batchSummaryRule:
    '每個批次完成時，commit message 或 checklist 註記必須列出新增文案欄位、套用最低字數、驗收指令與人工抽查結果。',
  checklistSpecRule:
    '任何 checklist 項目只要包含新增、補、重寫、生成、產生、導入、完善且會建立玩家可見文字，就必須在同一章節或 Phase 5.6 補品質規格。',
  vagueChecklistRule:
    'checklist 不可只寫補描述、補對話、完善文案、生成描述；必須直接附欄位名稱、最低字數、必填元素、禁止內容、驗收方式。',
  noSpecFallbackRule:
    '既有 checklist 項目沒有寫清楚品質要求時，實作前必須先補 checklist 格式規格，不得邊做邊猜。',
  noCopyNeededRule:
    '實作者覺得欄位不需要文案時，必須在 checklist 寫出純 enum 不顯示給玩家或由既有 item.description 共用等原因。',
  prSummaryRule:
    'PR 或 commit 摘要必須列出本批新增生成欄位、套用品質規格、驗收指令或人工抽查結果，否則 checklist 不可打勾。',
  generatorInputRule:
    '生成器輸入 prompt 必須列出資料類型、目標欄位、最低字數、必填元素、禁止句型、輸出格式、不得引用未實作內容。',
  generatorOutputRule:
    '生成器輸出必須是可直接進資料檔的表格或 JSON-like 結構化內容，逐筆包含 id、name、欄位、字數、必填元素是否滿足。',
  sourceIdsRule: '生成器每批輸出都要附 sourceIds 或對應資料 id，方便 audit 回報精準定位。',
  noPaddingRule:
    '生成器不得為湊字數重複同義句；字數不足必須補具體地貌、行為、用途、方向、玩法線索或風險。',
  noTemplateReuseRule:
    '生成器不得把同一段文字套到多個 room、NPC 或 item 只改名稱；同批內容相似度過高要整批重寫。',
  bannedPlaceholderRule: '任何 TODO、TBD、待補、placeholder、lorem ipsum、暫定描述 都視為 audit fail。',
  concreteDetailRule: '每段描述至少包含一個具體地形、物件、聲音、光線、氣味或動作線索。',
  gameplayPurposeRule:
    '每段描述至少服務一個玩法目的，例如提示出口、副本入口、怪物族群、採集、任務或危險。',
  adjacentRoomDistinctnessRule: '同一 zone 內相鄰 room 描述不可只是替換同義詞，必須能看出位置差異。',
  repeatedOpeningRule:
    '同一批生成內容不得連續 3 筆使用相同句型開頭，例如「這裡」「你看見」「前方」。',
  repeatedCoreNounRule:
    '同一批生成內容不得重複使用同一個核心名詞超過 30%，除非該 zone 主題明確需要並在 checklist 註記。',
  noUnimplementedReferenceRule:
    '文案不得引用尚未實作的系統、NPC、道具、任務或地名；若是伏筆必須在 checklist 標記 future hook。',
  noModernUiToneRule:
    '世界描述不得混入現代網路語、開發者語氣或 UI 操作語，例如點擊按鈕、這是副本系統。',
  auditBeforeMergeRule:
    '自動生成內容合併前必須跑字數與欄位完整性 audit；若該類型尚未被 audit 覆蓋，先補 audit 再合併。',
  auditFailureRule: 'audit 失敗的文案不可進入完成狀態，也不可只修報錯幾筆後忽略同批相似問題。',
  completionSummaryRule:
    'commit 或 checklist 打勾前，變更摘要必須列出本次新增文案類型、對應品質規格、audit 結果與人工抽查數量。',
  bulkDeliveryFormatRule:
    '大量生成 room、NPC、quest 或 item 時，輸出必須使用表格或 JSON-like checklist，逐筆列出 id、name、欄位、字數、必填元素是否滿足。',
  samplingRule:
    '每批生成內容至少抽查 10 筆；少於 10 筆則全數檢查，抽查時確認內容真的對應該 id 的 zone、room、怪物或道具。',
  samplingFailureRule: '抽查失敗超過 20% 時，整批退回重寫，不可只修 audit 報錯的幾筆。',
};

export const CONTENT_QUALITY_SPECS: ContentQualitySpec[] = [
  {
    id: 'zone-summary',
    field: 'zone.description',
    minChars: 90,
    requiredElements: ['地貌主題', '等級定位', '主要怪物或資源', '相鄰區域關係'],
    bannedPatterns: ['只寫傳說背景', '只有氣氛形容', '引用未實作地名'],
    auditRule: 'pnpm audit:map-text 檢查 zone.description 字數與關鍵內容，人工抽查地理合理性。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '所有 world / instance zone 概述。',
  },
  {
    id: 'room-description',
    field: 'room.description',
    minChars: 55,
    requiredElements: ['場景主體', '方位或路徑線索', '玩法線索', '危險或遭遇提示'],
    bannedPatterns: ['純氣氛句', '同 zone 批量模板句', '未實作 NPC 或任務引用'],
    auditRule: 'pnpm audit:map-text 檢查 room.description，少於 10 間新增房全數人工讀過。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '一般 world room；instance / border / boss room 依專屬規格提高門檻。',
  },
  {
    id: 'border-room-description',
    field: 'borderRoom.description',
    minChars: 65,
    requiredElements: ['來源 zone 地貌', '目標 zone 地貌', '過渡地形', '可走方向', '等級或危險提示'],
    bannedPatterns: ['只寫兩地交界', '純氣氛句', 'placeholder'],
    auditRule: 'pnpm audit:map-text 與 pnpm audit:world-map2 驗收；新增少於 10 間時全數人工讀過。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '為 global map 補上的 zone 邊界或 buffer room。',
  },
  {
    id: 'exit-description',
    field: 'exit.description / edgeNote',
    minChars: 12,
    requiredElements: ['方向', '來源或目標地貌', '通行感受或限制原因'],
    bannedPatterns: ['只寫往北或往南', '只寫通往下一區', '與座標方向矛盾'],
    auditRule: 'pnpm audit:map-text 檢查短句；pnpm audit:world-map2 檢查 special edge 與 cardinal mismatch。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '所有 room exits；跨 zone 至少 20 中文字，distant_route / special edge 至少 28 中文字。',
  },
  {
    id: 'instance-entry-description',
    field: 'instanceEntry.description',
    minChars: 45,
    requiredElements: ['入口外觀', '目前狀態', '進入方式', '需求或限制提示'],
    bannedPatterns: ['只寫可以進入副本', '沒有入口物件', '沒有需求或冷卻理由'],
    auditRule: 'pnpm audit:map-text 與 pnpm audit:world-map2 檢查 instance entry 欄位。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: 'object_interact / npc_dialogue / item_use instance entry。',
  },
  {
    id: 'npc-dialogue',
    field: 'npc.dialogue.node.text / quest.startDialogue / quest.completionDialogue',
    minChars: 45,
    requiredElements: ['說話者立場', '具體威脅或目標', '玩家下一步線索'],
    bannedPatterns: ['只有寒暄', '功能按鈕語', '泛用請幫忙'],
    auditRule: 'pnpm audit:map-text 檢查 dialogue 類 issue，主線鏈另做 manual transcript。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '一般 NPC 對話；主線重要 node 至少 70 中文字，首次見面至少 90 中文字。',
  },
  {
    id: 'quest-text',
    field: 'quest.description / quest.objective.label / reward.summary',
    minChars: 60,
    requiredElements: ['事件背景', '目標位置', '完成條件', '實際獎勵方向'],
    bannedPatterns: ['只寫殺怪數量', '泛用巡查', '暗示不存在獎勵'],
    auditRule: 'pnpm audit:map-text 檢查 quest / reward；必要時補 quest test 或 manual transcript。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '支線與主線任務；主線 description 至少 80 中文字，reward.summary 至少 30 中文字。',
  },
  {
    id: 'monster-description',
    field: 'monster.description / monsterFamily.summary',
    minChars: 35,
    requiredElements: ['外觀辨識', '行為或攻擊方式', '棲地', '分類或元素線索'],
    bannedPatterns: ['只寫強大怪物', '只寫兇猛野獸', '與實際 family 或技能不一致'],
    auditRule: 'pnpm audit:map-text 檢查 monster 類 issue，怪物資料 tab 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: 'normal / elite / boss monster；elite 至少 50 中文字，boss 至少 80 中文字。',
  },
  {
    id: 'item-equipment-text',
    field: 'item.description / equipment.description / affixBuildDirection.notes',
    minChars: 35,
    requiredElements: ['來源或用途', '外觀材質', '玩法效果或限制'],
    bannedPatterns: ['只有數值', '英文 id 直出', '與部位或詞綴不一致'],
    auditRule: 'pnpm audit:map-text 檢查 item / equipment / affix，wiki 裝備與詞綴頁抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '材料、道具、裝備、詞綴與 reward 顯示文字。',
  },
  {
    id: 'gathering-crafting-text',
    field: 'gatheringNode.description / gatheringMaterial.description / craftingRecipe.description / gatheringHint',
    minChars: 35,
    requiredElements: ['資源外觀', '生成環境或材料來源', '採集或製作動作', '用途方向'],
    bannedPatterns: ['只寫可採集', '只列材料 id 或數量', '與 room 地貌脫節'],
    auditRule: 'pnpm audit:map-text 檢查 gathering 類 issue；crafting / gathering UI 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '採集點、材料、製作配方、採集提示與製作提示。',
  },
  {
    id: 'reward-unlock-text',
    field: 'reward.summary / unlock.description',
    minChars: 30,
    requiredElements: ['實際 exp 或 gold', '實際 item 或 equipment', 'unlock 類型或沒有 unlock 的明確限制'],
    bannedPatterns: ['只寫獲得獎勵', '暗示不存在獎勵', '沒有列出實際獎勵內容'],
    auditRule: 'pnpm audit:map-text 檢查 reward.summary；quest / dungeon reward test 比對實際資料。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '任務、副本、成就或解鎖流程的獎勵摘要。',
  },
  {
    id: 'skill-text',
    field: 'skill.description / skill.levelUpDescription / skill.upgradePreview / skill.tooltip.costLine',
    minChars: 45,
    requiredElements: ['技能定位', '消耗資源', '可用時機', '主要效果或限制'],
    bannedPatterns: ['只寫造成傷害', '只寫效果提升', '統一寫耗費而不顯示正負資源'],
    auditRule: 'skill data audit、技能升級 modal 測試、combatPanel / approachingPanel tooltip 人工抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '技能列表、技能 tooltip、技能升級預覽與資源消耗顯示。',
  },
  {
    id: 'talent-text',
    field: 'talent.node.description / talent.node.tooltip',
    minChars: 35,
    requiredElements: ['build 方向', '觸發條件或常駐效果', '與職業資源或技能的關聯'],
    bannedPatterns: ['只寫增加傷害', '只寫更耐打', '沒有說明路線差異'],
    auditRule: 'talent page fixture audit 與 UI hover 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '一轉天賦節點、tier 5 核心節點與天賦頁 tooltip。',
  },
  {
    id: 'class-race-faith-text',
    field: 'class.summary / race.summary / faith.description / origin.description',
    minChars: 60,
    requiredElements: ['玩法定位', '核心特色', '限制或弱點', '前期或選角影響'],
    bannedPatterns: ['只有 fantasy flavor', '只列數值', '沒有說明玩家選擇影響'],
    auditRule: '角色創建頁與 wiki 職業 / 種族 / 信仰頁人工抽查；資料 fixture audit。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '角色創建、wiki、職業列表、種族列表、信仰列表與出身設定。',
  },
  {
    id: 'status-effect-text',
    field: 'statusEffect.description / buff.description / debuff.description / combatLog.status',
    minChars: 25,
    requiredElements: ['效果來源', '效果結果', '持續時間或解除方式'],
    bannedPatterns: ['只寫狀態名稱', '只顯示數值', '沒有說明限制或解除方式'],
    auditRule: 'buff/debuff icon atlas 對照、combat log / tooltip 測試與 manual combat transcript。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: 'buff、debuff、狀態效果 tooltip、戰鬥 log 狀態描述。',
  },
  {
    id: 'merchant-text',
    field: 'merchant.dialogue / merchant.buyTab.helpText / merchant.sellTab.helpText / merchant.transactionMessage',
    minChars: 30,
    requiredElements: ['商人身份或服務內容', '價格或回收規則', '背包或金幣限制', '玩家下一步'],
    bannedPatterns: ['只寫購買', '只寫出售', '只寫交易完成或金幣不足'],
    auditRule: '交易 command / UI transcript 與 merchant buy/sell tab manual 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '商人對話、購買 tab、出售 tab、交易成功與失敗訊息。',
  },
  {
    id: 'wiki-text',
    field: 'wiki.article.summary / wiki.table.rowNote / wiki.detailPanel.text',
    minChars: 35,
    requiredElements: ['資料來源', '中文名稱或分類', '玩法用途', '限制或注意事項'],
    bannedPatterns: ['raw id 清單', '空白說明', '與真實程式碼不一致'],
    auditRule: '/mud/wiki 各頁 tab 人工抽查與資料來源比對。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: 'wiki 技能、職業、種族、信仰、裝備、詞綴、區域、怪物等頁面。',
  },
  {
    id: 'system-combat-tooltip',
    field: 'system.errorMessage / combatLog / tooltip',
    minChars: 12,
    requiredElements: ['目前狀態', '失敗原因或效果結果', '可執行下一步或限制'],
    bannedPatterns: ['只寫失敗', '只寫沒有作用', '暴露內部 id'],
    auditRule: '相關單元測試、UI hover 抽查與主要戰鬥流程手測。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '技能、戰鬥、移動、交易、任務、採集、裝備等玩家可見提示。',
  },
  {
    id: 'party-pvp-social-text',
    field: 'partyInvite.message / partySystem.message / pvp.message / duel.message / friend.message',
    minChars: 25,
    requiredElements: ['發起者或目標', '模式或隊伍狀態', '限制或風險', '下一步'],
    bannedPatterns: ['只寫已邀請', '只寫開始 PVP', '只寫不可攻擊'],
    auditRule: 'party / PvP / friend command transcript 與 UI message 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '組隊邀請、隊伍狀態、PVP、決鬥、好友相關玩家訊息。',
  },
  {
    id: 'tutorial-achievement-text',
    field: 'tutorial.helpText / onboarding.stepText / achievement.description / title.description',
    minChars: 30,
    requiredElements: ['達成條件或當下目標', '操作入口或成功條件', '失敗時下一步或代表意義'],
    bannedPatterns: ['只寫請點擊', '只寫完成成就', '只寫獲得稱號'],
    auditRule: '新手流程 manual transcript、achievement / title UI 抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '教學、onboarding、成就、稱號與首次引導。',
  },
  {
    id: 'image-prompt',
    field: 'imagePrompt.room / imagePrompt.characterNpc / imagePrompt.itemIcon / imagePrompt.iconAtlas',
    minChars: 70,
    requiredElements: ['輸出用途', '比例', '主體', '構圖', '安全邊界', '禁止文字'],
    bannedPatterns: ['只寫風格詞', '單一名詞 prompt', '沒有人工抽查方式'],
    auditRule: 'pnpm audit:map-text 檢查 prompt 長度；產圖後按 prompt checklist 人工抽查。',
    ...STANDARD_REVIEW_POLICY,
    appliesTo: '房間圖、角色圖、NPC 圖、物品 icon、buff/debuff atlas。',
  },
];
