import { CONTENT_GENERATION_POLICY, CONTENT_QUALITY_SPECS } from '../server/src/data/content-quality-specs.js';

interface SpecIssue {
  id: string;
  field: string;
  reason: string;
}

const issues: SpecIssue[] = [];
const requiredSpecIds = [
  'zone-summary',
  'room-description',
  'border-room-description',
  'exit-description',
  'instance-entry-description',
  'npc-dialogue',
  'quest-text',
  'monster-description',
  'item-equipment-text',
  'gathering-crafting-text',
  'reward-unlock-text',
  'skill-text',
  'talent-text',
  'class-race-faith-text',
  'status-effect-text',
  'merchant-text',
  'wiki-text',
  'system-combat-tooltip',
  'party-pvp-social-text',
  'tutorial-achievement-text',
  'image-prompt',
];
const specById = new Map(CONTENT_QUALITY_SPECS.map(spec => [spec.id, spec]));
const requiredPolicyFields = [
  'searchSpecBeforeGenerating',
  'unchangedTextRule',
  'noTextChangeRule',
  'futureHookRule',
  'batchSummaryRule',
  'checklistSpecRule',
  'vagueChecklistRule',
  'noSpecFallbackRule',
  'noCopyNeededRule',
  'prSummaryRule',
  'generatorInputRule',
  'generatorOutputRule',
  'sourceIdsRule',
  'noPaddingRule',
  'noTemplateReuseRule',
  'bannedPlaceholderRule',
  'concreteDetailRule',
  'gameplayPurposeRule',
  'adjacentRoomDistinctnessRule',
  'repeatedOpeningRule',
  'repeatedCoreNounRule',
  'noUnimplementedReferenceRule',
  'noModernUiToneRule',
  'auditBeforeMergeRule',
  'auditFailureRule',
  'completionSummaryRule',
  'bulkDeliveryFormatRule',
  'samplingRule',
  'samplingFailureRule',
] as const;

for (const id of requiredSpecIds) {
  if (!specById.has(id)) {
    issues.push({ id, field: 'id', reason: 'missing required content quality spec' });
  }
}

for (const spec of CONTENT_QUALITY_SPECS) {
  if (!spec.field.trim()) {
    issues.push({ id: spec.id, field: 'field', reason: 'field name is required' });
  }
  if (!Number.isFinite(spec.minChars) || spec.minChars <= 0) {
    issues.push({ id: spec.id, field: spec.field, reason: 'minChars must be a positive number' });
  }
  if (spec.requiredElements.length < 3) {
    issues.push({ id: spec.id, field: spec.field, reason: 'at least 3 requiredElements are required' });
  }
  if (spec.bannedPatterns.length < 3) {
    issues.push({ id: spec.id, field: spec.field, reason: 'at least 3 bannedPatterns are required' });
  }
  if (!spec.auditRule.trim()) {
    issues.push({ id: spec.id, field: spec.field, reason: 'auditRule is required' });
  }
  if (!spec.reviewRule.trim()) {
    issues.push({ id: spec.id, field: spec.field, reason: 'reviewRule is required' });
  }
  if (!spec.smallBatchReview.trim() || !spec.smallBatchReview.includes('全數')) {
    issues.push({ id: spec.id, field: spec.field, reason: 'smallBatchReview must require full review' });
  }
  if (
    !spec.largeBatchReview.trim() ||
    !spec.largeBatchReview.includes('10') ||
    !spec.largeBatchReview.includes('20%')
  ) {
    issues.push({
      id: spec.id,
      field: spec.field,
      reason: 'largeBatchReview must require at least 10 entries or 20%',
    });
  }
  if (!spec.highSalienceRule.trim() || !spec.highSalienceRule.includes('20%')) {
    issues.push({
      id: spec.id,
      field: spec.field,
      reason: 'highSalienceRule must raise minimum length by at least 20%',
    });
  }
  if (
    !spec.nonAutomatedFallback.trim() ||
    !spec.nonAutomatedFallback.includes('資料已補') ||
    !spec.nonAutomatedFallback.includes('標完成')
  ) {
    issues.push({
      id: spec.id,
      field: spec.field,
      reason: 'nonAutomatedFallback must block completion without manual evidence',
    });
  }
  if (!spec.appliesTo.trim()) {
    issues.push({ id: spec.id, field: spec.field, reason: 'appliesTo is required' });
  }
}

for (const field of requiredPolicyFields) {
  const value = CONTENT_GENERATION_POLICY[field];
  if (!value.trim()) {
    issues.push({ id: CONTENT_GENERATION_POLICY.id, field, reason: 'content generation policy field is required' });
  }
}

const policyChecks: Array<[typeof requiredPolicyFields[number], string, string]> = [
  ['searchSpecBeforeGenerating', 'CONTENT_QUALITY_SPECS', 'must require checking existing quality specs first'],
  ['unchangedTextRule', '沿用既有欄位', 'must require source field notes when text is unchanged'],
  ['noTextChangeRule', 'pure internal enum', 'must require explicit no-text-change reason'],
  ['futureHookRule', 'future hook', 'must require future hook marking for unimplemented references'],
  ['batchSummaryRule', 'commit message', 'must require batch commit/checklist summary'],
  ['checklistSpecRule', 'Phase 5.6', 'must require same-section or Phase 5.6 quality spec'],
  ['vagueChecklistRule', '欄位名稱', 'must block vague checklist wording'],
  ['vagueChecklistRule', '最低字數', 'must require minimum length in checklist items'],
  ['noSpecFallbackRule', '不得邊做邊猜', 'must block implementation without clear spec'],
  ['noCopyNeededRule', 'item.description', 'must require explicit shared-description reason'],
  ['prSummaryRule', '驗收指令', 'must require validation command in summary'],
  ['generatorInputRule', '輸出格式', 'must define generator input format requirements'],
  ['generatorOutputRule', 'JSON-like', 'must require structured generator output'],
  ['sourceIdsRule', 'sourceIds', 'must require sourceIds in generated output'],
  ['noPaddingRule', '湊字數', 'must block padding by repeated synonyms'],
  ['noTemplateReuseRule', '只改名稱', 'must block template reuse by name swap'],
  ['bannedPlaceholderRule', 'placeholder', 'must ban placeholder text'],
  ['concreteDetailRule', '具體地形', 'must require concrete sensory or object detail'],
  ['gameplayPurposeRule', '玩法目的', 'must require gameplay purpose'],
  ['adjacentRoomDistinctnessRule', '相鄰 room', 'must require adjacent room distinction'],
  ['repeatedOpeningRule', '連續 3 筆', 'must limit repeated openings'],
  ['repeatedCoreNounRule', '30%', 'must limit repeated core nouns'],
  ['noUnimplementedReferenceRule', 'future hook', 'must block or mark unimplemented references'],
  ['noModernUiToneRule', '點擊按鈕', 'must block modern UI tone in world text'],
  ['auditBeforeMergeRule', '先補 audit', 'must require audit coverage before merge'],
  ['auditFailureRule', '不可進入完成狀態', 'must block completion on audit failure'],
  ['completionSummaryRule', '抽查數量', 'must require sampling count in completion summary'],
  ['bulkDeliveryFormatRule', 'id', 'must require ids in bulk delivery'],
  ['samplingRule', '至少抽查 10 筆', 'must require sampling size'],
  ['samplingFailureRule', '20%', 'must require full batch rewrite when sampling fails badly'],
];

for (const [field, expected, reason] of policyChecks) {
  if (!CONTENT_GENERATION_POLICY[field].includes(expected)) {
    issues.push({ id: CONTENT_GENERATION_POLICY.id, field, reason });
  }
}

console.log('# Content Quality Spec Audit');
console.log(`Specs: ${CONTENT_QUALITY_SPECS.length}`);
console.log(`Policy: ${CONTENT_GENERATION_POLICY.id}`);
console.log(`Issues: ${issues.length}`);

for (const issue of issues) {
  console.log(`- ${issue.id} ${issue.field}: ${issue.reason}`);
}

if (issues.length > 0) {
  process.exit(1);
}
