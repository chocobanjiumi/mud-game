import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import { NPCS } from '../server/src/data/npcs.js';
import { ALL_MONSTERS } from '../server/src/data/merge-expansion.js';

type Severity = 'error' | 'warning';

interface Finding {
  severity: Severity;
  scope: string;
  message: string;
}

interface PromptRecord {
  assetId?: string;
  targetId?: string;
  category?: string;
  name?: string;
  outputPath?: string;
  prompt?: string;
  tool?: string;
}

interface ManifestEntry {
  assetId?: string;
  category?: string;
  targetId?: string;
  outputPath?: string;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PROMPTS_PATH = path.join(ROOT, 'docs/atlas/ai-prompts.jsonl');
const MANIFEST_PATH = path.join(ROOT, 'client/public/images/atlas/manifest.json');
const SOURCE_AI_DIR = path.join(ROOT, 'client/public/images/atlas/source-ai');
const MAX_WARNINGS_TO_PRINT = 25;

const EQUIPMENT_TYPES = new Set(['weapon', 'armor', 'accessory']);
const NON_EQUIPMENT_TYPES = new Set(['material', 'consumable', 'quest']);
const EQUIPMENT_NAME_FORBIDDEN = /戰備|標準|制式|補充|武器\d+|頭盔\d+|護甲\d+|護手\d+|戰靴\d+|戒指\d+|耳環\d+|腰帶\d+|項鍊\d+|Lv\.?\d+|50$|60$/;
const EQUIPMENT_DESCRIPTION_FORBIDDEN = /標準化|補給裝備|補齊|填補|欄位|不同等級帶|自然替換|進階裝備路線|第一階段|template|placeholder|progression/i;
const MONSTER_META_FORBIDDEN = /最佳練習對象|不會主動攻擊|不會真正殺人|教學事件目標|測試傷害|測試闖入者|練習用/i;
const VISUAL_NOUN = /瓶|封|蠟|金|銀|銅|鐵|鋼|木|皮|布|繩|骨|殼|鱗|羽|毛|牙|爪|角|葉|花|草|藤|樹|苔|晶|水晶|玻璃|寶石|符文|刻|紋|灰|霜|雪|火|焰|煙|血|鹽|油|沙|泥|石|鐘|鏈|環|卷軸|羊皮|墨|徽|牌|箱|鑰|粉|液|膠|肉|鰭|珍珠|碎片|核心|殘片|光|微光|星|月|暗|影/;
const FUNCTIONAL_DESCRIPTION = /回復|提升|開啟|完成|記錄|傳送|設置|使敵人|可能包含|證明|可高價賣出|可用於|煉金|材料|素材|製作|使用後|成功率|HP|MP|資源/;

const findings: Finding[] = [];

function add(severity: Severity, scope: string, message: string): void {
  findings.push({ severity, scope, message });
}

function relative(filePath: string): string {
  return path.relative(ROOT, filePath);
}

function chineseCharCount(value: string | undefined): number {
  return [...String(value ?? '')].filter((char) => /\p{Script=Han}/u.test(char)).length;
}

function groupBy<T>(items: T[], keyOf: (item: T) => string | undefined): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const key = keyOf(item)?.trim();
    if (!key) continue;
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return groups;
}

function readJsonl(filePath: string): PromptRecord[] {
  if (!fs.existsSync(filePath)) {
    add('error', 'atlas:prompts', `missing prompt file: ${relative(filePath)}`);
    return [];
  }

  const records: PromptRecord[] = [];
  const lines = fs.readFileSync(filePath, 'utf8').split(/\n/);
  lines.forEach((line, index) => {
    if (!line.trim()) return;
    try {
      records.push(JSON.parse(line) as PromptRecord);
    } catch (error) {
      add('error', 'atlas:prompts', `invalid JSONL at line ${index + 1}: ${(error as Error).message}`);
    }
  });
  return records;
}

function readManifestEntries(filePath: string): ManifestEntry[] {
  if (!fs.existsSync(filePath)) {
    add('error', 'atlas:manifest', `missing manifest file: ${relative(filePath)}`);
    return [];
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(filePath, 'utf8')) as { entries?: Record<string, ManifestEntry> };
    return Object.values(manifest.entries ?? {});
  } catch (error) {
    add('error', 'atlas:manifest', `invalid JSON: ${(error as Error).message}`);
    return [];
  }
}

function isPng(filePath: string): boolean {
  if (!fs.existsSync(filePath)) return false;
  const buffer = fs.readFileSync(filePath);
  return buffer.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
}

function promptForbidsTextUiWatermark(prompt: string): boolean {
  return /no text/i.test(prompt)
    && /no UI/i.test(prompt)
    && (/no watermark/i.test(prompt) || /do not\b.*\bwatermark/i.test(prompt) || /without\b.*\bwatermark/i.test(prompt));
}

function validateEquipmentText(): void {
  const equipment = Object.values(ITEM_DEFS).filter((item) => EQUIPMENT_TYPES.has(item.type));
  const bad = equipment.filter((item) =>
    EQUIPMENT_NAME_FORBIDDEN.test(`${item.id} ${item.name}`)
    || EQUIPMENT_DESCRIPTION_FORBIDDEN.test(`${item.id} ${item.name} ${item.description}`),
  );

  for (const item of bad) {
    add('error', `item:${item.id}`, 'equipment still contains generic, numbered, or implementation/meta wording');
  }

  for (const item of equipment) {
    if (chineseCharCount(item.description) < 35) {
      add('warning', `item:${item.id}`, 'equipment description is shorter than 35 Chinese characters');
    }
    if (!VISUAL_NOUN.test(item.description)) {
      add('warning', `item:${item.id}`, 'equipment description lacks obvious visual nouns for image prompts');
    }
  }

  for (const [name, items] of groupBy(equipment, (item) => item.name)) {
    if (items.length > 1) {
      add('warning', `items:${name}`, `duplicate equipment name appears ${items.length} times`);
    }
  }
}

function validateNonEquipmentText(): void {
  const items = Object.values(ITEM_DEFS).filter((item) => NON_EQUIPMENT_TYPES.has(item.type));

  for (const [name, duplicates] of groupBy(items, (item) => item.name)) {
    if (duplicates.length > 1) {
      add('error', `items:${name}`, `duplicate non-equipment name appears ${duplicates.length} times`);
    }
  }

  for (const item of items) {
    if (chineseCharCount(item.description) < 18) {
      add('error', `item:${item.id}`, 'non-equipment description is shorter than 18 Chinese characters');
    }
    if (item.type === 'consumable' && FUNCTIONAL_DESCRIPTION.test(item.description) && !VISUAL_NOUN.test(item.description)) {
      add('error', `item:${item.id}`, 'consumable description is purely functional and lacks visual cues');
    }
  }
}

function validateNpcText(): void {
  const npcs = Object.values(NPCS);

  for (const [name, duplicates] of groupBy(npcs, (npc) => npc.name)) {
    if (duplicates.length > 1) {
      add('error', `npcs:${name}`, `duplicate NPC name appears ${duplicates.length} times`);
    }
  }

  for (const [description, duplicates] of groupBy(npcs, (npc) => npc.description)) {
    if (duplicates.length > 1) {
      add('error', 'npcs:descriptions', `duplicate NPC description appears ${duplicates.length} times: ${description.slice(0, 24)}`);
    }
  }

  for (const npc of npcs) {
    if (!npc.description?.trim()) {
      add('error', `npc:${npc.id}`, 'missing NPC description');
    }
  }
}

function validateMonsterText(): void {
  const monsters = Object.values(ALL_MONSTERS);

  for (const [name, duplicates] of groupBy(monsters, (monster) => monster.name)) {
    if (duplicates.length > 1) {
      add('error', `monsters:${name}`, `duplicate monster name appears ${duplicates.length} times`);
    }
  }

  for (const [description, duplicates] of groupBy(monsters, (monster) => monster.description)) {
    if (duplicates.length > 1) {
      add('error', 'monsters:descriptions', `duplicate monster description appears ${duplicates.length} times: ${description.slice(0, 24)}`);
    }
  }

  for (const monster of monsters) {
    if (!monster.description?.trim()) {
      add('error', `monster:${monster.id}`, 'missing monster description');
    }
    if (MONSTER_META_FORBIDDEN.test(`${monster.name} ${monster.description}`)) {
      add('error', `monster:${monster.id}`, 'monster text contains non-diegetic training/test/tutorial wording');
    }
  }
}

function validateAtlas(): void {
  const prompts = readJsonl(PROMPTS_PATH);
  const manifestEntries = readManifestEntries(MANIFEST_PATH);
  const generatedCategories = new Set(['npc', 'monster', 'item', 'material']);
  const recordsByAssetId = new Map<string, PromptRecord>();

  for (const record of prompts) {
    if (!record.assetId) add('error', 'atlas:prompts', 'prompt record missing assetId');
    if (!record.targetId) add('error', `atlas:${record.assetId ?? 'unknown'}`, 'prompt record missing targetId');
    if (!record.outputPath) add('error', `atlas:${record.assetId ?? 'unknown'}`, 'prompt record missing outputPath');
    if (!record.prompt) add('error', `atlas:${record.assetId ?? 'unknown'}`, 'prompt record missing prompt');
    if (!record.category || !generatedCategories.has(record.category)) {
      add('error', `atlas:${record.assetId ?? 'unknown'}`, `unexpected prompt category: ${record.category ?? 'missing'}`);
    }
    if (record.assetId) {
      if (recordsByAssetId.has(record.assetId)) {
        add('error', `atlas:${record.assetId}`, 'duplicate prompt assetId');
      }
      recordsByAssetId.set(record.assetId, record);
    }
    if (record.name && record.prompt && !record.prompt.includes(record.name)) {
      add('error', `atlas:${record.assetId ?? record.targetId ?? 'unknown'}`, 'prompt does not include asset name');
    }
    if (record.prompt && !promptForbidsTextUiWatermark(record.prompt)) {
      add('error', `atlas:${record.assetId ?? record.targetId ?? 'unknown'}`, 'prompt must forbid text, UI, and watermark');
    }
    if (record.outputPath) {
      const outputPath = path.join(ROOT, record.outputPath);
      if (!fs.existsSync(outputPath)) {
        add('error', `atlas:${record.assetId ?? record.targetId ?? 'unknown'}`, `missing output image: ${record.outputPath}`);
      } else if (!isPng(outputPath)) {
        add('error', `atlas:${record.assetId ?? record.targetId ?? 'unknown'}`, `output image is not a PNG: ${record.outputPath}`);
      }
    }
  }

  const manifestAssetIds = new Set<string>();
  for (const entry of manifestEntries) {
    if (!entry.assetId) {
      add('error', 'atlas:manifest', 'manifest entry missing assetId');
      continue;
    }
    manifestAssetIds.add(entry.assetId);
    if (!recordsByAssetId.has(entry.assetId)) {
      add('error', `atlas:${entry.assetId}`, 'manifest entry has no matching prompt record');
    }
    if (entry.outputPath) {
      const outputPath = path.join(ROOT, entry.outputPath);
      if (!fs.existsSync(outputPath)) {
        add('error', `atlas:${entry.assetId}`, `manifest output image missing: ${entry.outputPath}`);
      }
    }
  }

  for (const assetId of recordsByAssetId.keys()) {
    if (!manifestAssetIds.has(assetId)) {
      add('error', `atlas:${assetId}`, 'prompt record has no matching manifest entry');
    }
  }

  const sourceAiCount = fs.existsSync(SOURCE_AI_DIR)
    ? fs.readdirSync(SOURCE_AI_DIR).filter((name) => /\.(png|jpe?g|webp)$/i.test(name)).length
    : 0;
  if (sourceAiCount === 0) {
    add('warning', 'atlas:source-ai', 'source-ai directory has no raw image outputs; verify image_gen provenance manually');
  }
}

validateEquipmentText();
validateNonEquipmentText();
validateNpcText();
validateMonsterText();
validateAtlas();

const errors = findings.filter((finding) => finding.severity === 'error');
const warnings = findings.filter((finding) => finding.severity === 'warning');
console.log(`MUD5 validation: ${errors.length} error(s), ${warnings.length} warning(s)`);
for (const finding of errors) {
  console.log(`[${finding.severity.toUpperCase()}] ${finding.scope}: ${finding.message}`);
}
for (const finding of warnings.slice(0, MAX_WARNINGS_TO_PRINT)) {
  console.log(`[${finding.severity.toUpperCase()}] ${finding.scope}: ${finding.message}`);
}
if (warnings.length > MAX_WARNINGS_TO_PRINT) {
  console.log(`... ${warnings.length - MAX_WARNINGS_TO_PRINT} more warning(s) omitted.`);
}

process.exitCode = errors.length > 0 ? 1 : 0;
