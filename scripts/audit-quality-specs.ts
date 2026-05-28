import { CONTENT_QUALITY_SPECS } from '../server/src/data/content-quality-specs.js';

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
  'system-combat-tooltip',
  'image-prompt',
];
const specById = new Map(CONTENT_QUALITY_SPECS.map(spec => [spec.id, spec]));

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
  if (!spec.appliesTo.trim()) {
    issues.push({ id: spec.id, field: spec.field, reason: 'appliesTo is required' });
  }
}

console.log('# Content Quality Spec Audit');
console.log(`Specs: ${CONTENT_QUALITY_SPECS.length}`);
console.log(`Issues: ${issues.length}`);

for (const issue of issues) {
  console.log(`- ${issue.id} ${issue.field}: ${issue.reason}`);
}

if (issues.length > 0) {
  process.exit(1);
}
