export interface ContentQualitySpec {
  id: string;
  field: string;
  minChars: number;
  requiredElements: string[];
  bannedPatterns: string[];
  auditRule: string;
  appliesTo: string;
}

export const CONTENT_QUALITY_SPECS: ContentQualitySpec[] = [
  {
    id: 'zone-summary',
    field: 'zone.description',
    minChars: 90,
    requiredElements: ['地貌主題', '等級定位', '主要怪物或資源', '相鄰區域關係'],
    bannedPatterns: ['只寫傳說背景', '只有氣氛形容', '引用未實作地名'],
    auditRule: 'pnpm audit:map-text 檢查 zone.description 字數與關鍵內容，人工抽查地理合理性。',
    appliesTo: '所有 world / instance zone 概述。',
  },
  {
    id: 'room-description',
    field: 'room.description',
    minChars: 55,
    requiredElements: ['場景主體', '方位或路徑線索', '玩法線索', '危險或遭遇提示'],
    bannedPatterns: ['純氣氛句', '同 zone 批量模板句', '未實作 NPC 或任務引用'],
    auditRule: 'pnpm audit:map-text 檢查 room.description，少於 10 間新增房全數人工讀過。',
    appliesTo: '一般 world room；instance / border / boss room 依專屬規格提高門檻。',
  },
  {
    id: 'border-room-description',
    field: 'borderRoom.description',
    minChars: 65,
    requiredElements: ['來源 zone 地貌', '目標 zone 地貌', '過渡地形', '可走方向', '等級或危險提示'],
    bannedPatterns: ['只寫兩地交界', '純氣氛句', 'placeholder'],
    auditRule: 'pnpm audit:map-text 與 pnpm audit:world-map2 驗收；新增少於 10 間時全數人工讀過。',
    appliesTo: '為 global map 補上的 zone 邊界或 buffer room。',
  },
  {
    id: 'exit-description',
    field: 'exit.description / edgeNote',
    minChars: 12,
    requiredElements: ['方向', '來源或目標地貌', '通行感受或限制原因'],
    bannedPatterns: ['只寫往北或往南', '只寫通往下一區', '與座標方向矛盾'],
    auditRule: 'pnpm audit:map-text 檢查短句；pnpm audit:world-map2 檢查 special edge 與 cardinal mismatch。',
    appliesTo: '所有 room exits；跨 zone 至少 20 中文字，long_path / special edge 至少 28 中文字。',
  },
  {
    id: 'instance-entry-description',
    field: 'instanceEntry.description',
    minChars: 45,
    requiredElements: ['入口外觀', '目前狀態', '進入方式', '需求或限制提示'],
    bannedPatterns: ['只寫可以進入副本', '沒有入口物件', '沒有需求或冷卻理由'],
    auditRule: 'pnpm audit:map-text 與 pnpm audit:world-map2 檢查 instance entry 欄位。',
    appliesTo: 'object_interact / npc_dialogue / item_use instance entry。',
  },
  {
    id: 'npc-dialogue',
    field: 'npc.dialogue.node.text / quest.startDialogue / quest.completionDialogue',
    minChars: 45,
    requiredElements: ['說話者立場', '具體威脅或目標', '玩家下一步線索'],
    bannedPatterns: ['只有寒暄', '功能按鈕語', '泛用請幫忙'],
    auditRule: 'pnpm audit:map-text 檢查 dialogue 類 issue，主線鏈另做 manual transcript。',
    appliesTo: '一般 NPC 對話；主線重要 node 至少 70 中文字，首次見面至少 90 中文字。',
  },
  {
    id: 'quest-text',
    field: 'quest.description / quest.objective.label / reward.summary',
    minChars: 60,
    requiredElements: ['事件背景', '目標位置', '完成條件', '實際獎勵方向'],
    bannedPatterns: ['只寫殺怪數量', '泛用巡查', '暗示不存在獎勵'],
    auditRule: 'pnpm audit:map-text 檢查 quest / reward；必要時補 quest test 或 manual transcript。',
    appliesTo: '支線與主線任務；主線 description 至少 80 中文字，reward.summary 至少 30 中文字。',
  },
  {
    id: 'monster-description',
    field: 'monster.description / monsterFamily.summary',
    minChars: 35,
    requiredElements: ['外觀辨識', '行為或攻擊方式', '棲地', '分類或元素線索'],
    bannedPatterns: ['只寫強大怪物', '只寫兇猛野獸', '與實際 family 或技能不一致'],
    auditRule: 'pnpm audit:map-text 檢查 monster 類 issue，怪物資料 tab 抽查。',
    appliesTo: 'normal / elite / boss monster；elite 至少 50 中文字，boss 至少 80 中文字。',
  },
  {
    id: 'item-equipment-text',
    field: 'item.description / equipment.description / affixBuildDirection.notes',
    minChars: 35,
    requiredElements: ['來源或用途', '外觀材質', '玩法效果或限制'],
    bannedPatterns: ['只有數值', '英文 id 直出', '與部位或詞綴不一致'],
    auditRule: 'pnpm audit:map-text 檢查 item / equipment / affix，wiki 裝備與詞綴頁抽查。',
    appliesTo: '材料、道具、裝備、詞綴與 reward 顯示文字。',
  },
  {
    id: 'system-combat-tooltip',
    field: 'system.errorMessage / combatLog / tooltip',
    minChars: 12,
    requiredElements: ['目前狀態', '失敗原因或效果結果', '可執行下一步或限制'],
    bannedPatterns: ['只寫失敗', '只寫沒有作用', '暴露內部 id'],
    auditRule: '相關單元測試、UI hover 抽查與主要戰鬥流程手測。',
    appliesTo: '技能、戰鬥、移動、交易、任務、採集、裝備等玩家可見提示。',
  },
  {
    id: 'image-prompt',
    field: 'imagePrompt.room / imagePrompt.characterNpc / imagePrompt.itemIcon / imagePrompt.iconAtlas',
    minChars: 70,
    requiredElements: ['輸出用途', '比例', '主體', '構圖', '安全邊界', '禁止文字'],
    bannedPatterns: ['只寫風格詞', '單一名詞 prompt', '沒有人工抽查方式'],
    auditRule: 'pnpm audit:map-text 檢查 prompt 長度；產圖後按 prompt checklist 人工抽查。',
    appliesTo: '房間圖、角色圖、NPC 圖、物品 icon、buff/debuff atlas。',
  },
];
