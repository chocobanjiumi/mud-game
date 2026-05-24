import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import type { ItemDef } from '../packages/shared/src/types/item.js';
import { ALL_MONSTERS, ALL_ROOMS } from '../server/src/data/merge-expansion.js';
import { NPCS } from '../server/src/data/npcs.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_MUD3 = path.join(os.homedir(), 'mud3.md');
const DEFAULT_OUT_DIR = path.join(ROOT, 'docs/atlas');

type Category = 'npc' | 'monster' | 'item' | 'material';

interface AtlasTarget {
  id: string;
  targetId: string;
  category: Category;
  name: string;
  zoneIds: string[];
  type?: string;
  source: string;
  description: string;
  prompt: string;
  outputPath: string;
}

interface AtlasBatch {
  id: string;
  category: Category;
  group: string;
  rows: number;
  columns: number;
  sourceAtlasPath: string;
  targets: Array<AtlasTarget & { row: number; column: number }>;
}

interface AtlasPlan {
  generatedAt: string;
  mud3Path: string;
  zones: string[];
  counts: Record<Category, number>;
  batchCounts: Record<Category, number>;
  targets: Record<Category, AtlasTarget[]>;
  batches: AtlasBatch[];
  backlog: AtlasBatch[];
}

function parseArgs(argv: string[]): { mud3: string; outDir: string } {
  const options = { mud3: DEFAULT_MUD3, outDir: DEFAULT_OUT_DIR };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === '--mud3' && next) {
      options.mud3 = path.resolve(next.replace(/^~/, os.homedir()));
      index += 1;
    } else if (arg === '--out-dir' && next) {
      options.outDir = path.resolve(ROOT, next);
      index += 1;
    } else if (arg === '--help') {
      printHelp();
      process.exit(0);
    } else if (arg === '--') {
      continue;
    } else {
      throw new Error(`Unknown or incomplete option: ${arg}`);
    }
  }
  return options;
}

function printHelp(): void {
  console.log(`Prepare Phase 4 atlas plan.

Usage:
  pnpm --filter server exec tsx ../scripts/prepare-atlas-plan.ts
  pnpm --filter server exec tsx ../scripts/prepare-atlas-plan.ts -- --out-dir docs/atlas

Outputs:
  docs/atlas/phase4-atlas-plan.json
  docs/atlas/phase4-atlas-batches.md
`);
}

function parseMud3Zones(mud3Path: string): string[] {
  const text = fs.readFileSync(mud3Path, 'utf8').split('## Phase 4')[0] ?? '';
  const zones = [...text.matchAll(/^### .+ `([^`]+)`/gm)].map(match => match[1]);
  return [...new Set(zones)];
}

function stripText(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").trim();
}

function truncate(value: string, maxLength: number): string {
  const text = stripText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function slug(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9_]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase();
}

function getRoomZone(roomId: string): string | undefined {
  return ALL_ROOMS[roomId]?.zone as string | undefined;
}

function zonesForMonster(monsterId: string, zoneSet: Set<string>): string[] {
  const zones = new Set<string>();
  for (const room of Object.values(ALL_ROOMS)) {
    const zone = room.zone as string;
    if (!zoneSet.has(zone)) continue;
    if (room.monsters?.some(entry => entry.monsterId === monsterId)) zones.add(zone);
  }
  return [...zones].sort();
}

function zonesForItem(itemId: string, zoneSet: Set<string>): string[] {
  const def = ITEM_DEFS[itemId];
  const zones = new Set((def?.zoneTags ?? []).filter(zone => zoneSet.has(zone)));
  for (const [monsterId, monster] of Object.entries(ALL_MONSTERS)) {
    if (!monster.drops.some(drop => drop.itemId === itemId)) continue;
    for (const zone of zonesForMonster(monsterId, zoneSet)) zones.add(zone);
  }
  for (const npc of Object.values(NPCS)) {
    if (!npc.shopItems?.includes(itemId)) continue;
    const zone = getRoomZone(npc.roomId);
    if (zone && zoneSet.has(zone)) zones.add(zone);
  }
  return [...zones].sort();
}

function groupForZones(zoneIds: string[]): string {
  if (zoneIds.length === 0) return 'global';
  const groups = [...new Set(zoneIds.map(styleGroupForZone))];
  if (groups.length === 1) return groups[0];
  const endgameGroups = ['demon_abyss', 'dragon_celestial', 'astral_time'];
  if (groups.every(group => endgameGroups.includes(group))) return 'endgame';
  return groups.slice(0, 2).join('_');
}

function styleGroupForZone(zoneId: string): string {
  const groups: Record<string, string[]> = {
    low_wilds: ['starter_village', 'starter_village_ext', 'plains', 'old_farmland', 'wildgrass_hills', 'pilgrim_road'],
    forest_fen: ['dark_forest', 'whispering_valley', 'marsh_of_mirrors', 'blackwood', 'moonlit_fen', 'amber_forest', 'emerald_canopy'],
    cave_mine: ['crystal_cave', 'abandoned_mines', 'underground_city', 'obsidian_depths', 'hollow_mountain'],
    coast_water: ['eastern_coast', 'mist_harbor', 'deepsea_temple', 'saltwind_flats', 'reef_of_bones', 'sapphire_lake', 'bloodsalt_coast', 'serpent_delta'],
    town_market: ['lakeside_town', 'kingsroad_market', 'arena_quarter'],
    fire_ash: ['volcano_zone', 'redrock_badlands', 'glass_dunes', 'ember_march', 'ashfall_monastery'],
    ice_mountain: ['frozen_wastes', 'storm_highlands', 'silverpine_range', 'frostbite_pass', 'sky_isles'],
    demon_abyss: ['demon_territory', 'abyss_rift', 'necropolis_gate', 'cursed_graveyard', 'sunken_catacombs'],
    dragon_celestial: ['dragon_valley', 'celestial_ruins', 'sunspire', 'moonshadow_court'],
    astral_time: ['starfall_crater', 'time_ruins', 'astral_wastes', 'ancient_ruins'],
    kingdom_war: ['ironwood_fort', 'royal_hunting_grounds', 'kingdom_frontier', 'machine_graveyard', 'thornmaze'],
    final_war: ['final_battleground'],
  };
  for (const [group, zones] of Object.entries(groups)) {
    if (zones.includes(zoneId)) return group;
  }
  return zoneId;
}

function outputDirFor(category: Category): string {
  if (category === 'npc') return 'client/public/images/npcs';
  if (category === 'monster') return 'client/public/images/monsters';
  if (category === 'material') return 'client/public/images/materials';
  return 'client/public/images/items';
}

function makePrompt(target: AtlasTarget): string {
  const zoneLine = target.zoneIds.length > 0 ? `Zones: ${target.zoneIds.join(', ')}.` : 'Zones: global.';
  const base =
    target.category === 'npc'
      ? 'Square fantasy NPC portrait, bust view, expressive face, readable silhouette, dark fantasy painterly game asset, no text, no UI.'
      : target.category === 'monster'
        ? 'Square fantasy monster portrait, creature centered, readable silhouette, dark fantasy painterly game asset, no text, no UI.'
        : 'Square fantasy item icon, object centered on simple dark neutral backdrop, readable silhouette, painterly game asset, no text, no UI.';
  return `${base} ${zoneLine} Subject: ${target.name} (${target.targetId}). Details: ${truncate(target.description, 220)}`;
}

function collectTargets(zoneIds: string[]): Record<Category, AtlasTarget[]> {
  const zoneSet = new Set(zoneIds);
  const targets: Record<Category, AtlasTarget[]> = { npc: [], monster: [], item: [], material: [] };

  for (const npc of Object.values(NPCS)) {
    const zone = getRoomZone(npc.roomId);
    if (!zone || !zoneSet.has(zone)) continue;
    const target: AtlasTarget = {
      id: `npc_${zone}_${npc.id}`,
      targetId: npc.id,
      category: 'npc',
      name: npc.name,
      zoneIds: [zone],
      type: npc.type,
      source: `NPCS.${npc.id}`,
      description: `${npc.title}。${npc.description}`,
      prompt: '',
      outputPath: `${outputDirFor('npc')}/npc_${zone}_${npc.id}.png`,
    };
    target.prompt = makePrompt(target);
    targets.npc.push(target);
  }

  for (const [monsterId, monster] of Object.entries(ALL_MONSTERS)) {
    const zones = zonesForMonster(monsterId, zoneSet);
    if (zones.length === 0) continue;
    const target: AtlasTarget = {
      id: `monster_${groupForZones(zones)}_${monster.id}`,
      targetId: monster.id,
      category: 'monster',
      name: monster.name,
      zoneIds: zones,
      type: monster.isBoss ? 'boss' : monster.isElite ? 'elite' : 'normal',
      source: `ALL_MONSTERS.${monster.id}`,
      description: monster.description,
      prompt: '',
      outputPath: `${outputDirFor('monster')}/monster_${groupForZones(zones)}_${monster.id}.png`,
    };
    target.prompt = makePrompt(target);
    targets.monster.push(target);
  }

  const itemIds = new Set<string>();
  for (const [itemId, item] of Object.entries(ITEM_DEFS)) {
    if (item.zoneTags?.some(zone => zoneSet.has(zone))) itemIds.add(itemId);
  }
  for (const monster of Object.values(ALL_MONSTERS)) {
    for (const drop of monster.drops) {
      const zones = zonesForItem(drop.itemId, zoneSet);
      if (zones.length > 0) itemIds.add(drop.itemId);
    }
  }
  for (const npc of Object.values(NPCS)) {
    for (const itemId of npc.shopItems ?? []) {
      const zones = zonesForItem(itemId, zoneSet);
      if (zones.length > 0) itemIds.add(itemId);
    }
  }

  for (const itemId of [...itemIds].sort()) {
    const item = ITEM_DEFS[itemId] as ItemDef | undefined;
    if (!item) continue;
    const zones = zonesForItem(itemId, zoneSet);
    if (zones.length === 0) continue;
    const category: Category = item.type === 'material' ? 'material' : 'item';
    const group = groupForZones(zones);
    const target: AtlasTarget = {
      id: `${category}_${group}_${item.id}`,
      targetId: item.id,
      category,
      name: item.name,
      zoneIds: zones,
      type: item.type,
      source: `ITEM_DEFS.${item.id}`,
      description: item.description,
      prompt: '',
      outputPath: `${outputDirFor(category)}/${category}_${group}_${item.id}.png`,
    };
    target.prompt = makePrompt(target);
    targets[category].push(target);
  }

  for (const category of Object.keys(targets) as Category[]) {
    targets[category].sort((a, b) => groupForZones(a.zoneIds).localeCompare(groupForZones(b.zoneIds)) || a.id.localeCompare(b.id));
  }
  return targets;
}

function gridFor(category: Category): { rows: number; columns: number; capacity: number } {
  if (category === 'npc') return { rows: 2, columns: 4, capacity: 8 };
  if (category === 'monster') return { rows: 3, columns: 4, capacity: 12 };
  if (category === 'material') return { rows: 5, columns: 8, capacity: 40 };
  return { rows: 3, columns: 5, capacity: 15 };
}

function makeBatches(targets: Record<Category, AtlasTarget[]>): { batches: AtlasBatch[]; backlog: AtlasBatch[] } {
  const batches: AtlasBatch[] = [];
  const backlog: AtlasBatch[] = [];
  for (const category of Object.keys(targets) as Category[]) {
    const byGroup = new Map<string, AtlasTarget[]>();
    for (const target of targets[category]) {
      const group = groupForZones(target.zoneIds);
      byGroup.set(group, [...(byGroup.get(group) ?? []), target]);
    }

    const grid = gridFor(category);
    for (const [group, groupTargets] of [...byGroup.entries()].sort(([a], [b]) => a.localeCompare(b))) {
      for (let offset = 0; offset < groupTargets.length; offset += grid.capacity) {
        const page = Math.floor(offset / grid.capacity) + 1;
        const chunk = groupTargets.slice(offset, offset + grid.capacity);
        const batchId = `${category}_${slug(group)}_${String(page).padStart(2, '0')}`;
        const batch: AtlasBatch = {
          id: batchId,
          category,
          group,
          rows: grid.rows,
          columns: grid.columns,
          sourceAtlasPath: `client/public/images/atlas/source/${batchId}.png`,
          targets: chunk.map((target, index) => ({
            ...target,
            row: Math.floor(index / grid.columns),
            column: index % grid.columns,
          })),
        };
        batches.push(batch);
        if (chunk.length < grid.capacity) backlog.push(batch);
      }
    }
  }
  return { batches, backlog };
}

function writeMarkdown(plan: AtlasPlan, outPath: string): void {
  const lines: string[] = [];
  lines.push('# Phase 4 Atlas Batches');
  lines.push('');
  lines.push(`Generated: ${plan.generatedAt}`);
  lines.push(`Zones: ${plan.zones.length}`);
  lines.push('');
  lines.push('## Counts');
  lines.push('');
  lines.push('| Category | Targets | Batches |');
  lines.push('| --- | ---: | ---: |');
  for (const category of ['npc', 'monster', 'item', 'material'] as Category[]) {
    lines.push(`| ${category} | ${plan.counts[category]} | ${plan.batchCounts[category]} |`);
  }
  lines.push('');
  lines.push('## Backlog / Partial Batches');
  lines.push('');
  if (plan.backlog.length === 0) {
    lines.push('- None.');
  } else {
    for (const batch of plan.backlog) {
      lines.push(`- ${batch.id}: ${batch.targets.length}/${batch.rows * batch.columns} (${batch.group})`);
    }
  }
  lines.push('');
  lines.push('## Batch Detail');
  for (const batch of plan.batches) {
    lines.push('');
    lines.push(`### ${batch.id}`);
    lines.push(`- Category: ${batch.category}`);
    lines.push(`- Group: ${batch.group}`);
    lines.push(`- Grid: ${batch.columns}x${batch.rows}`);
    lines.push(`- Source atlas: \`${batch.sourceAtlasPath}\``);
    lines.push('');
    lines.push('| Cell | Asset ID | Name | Output |');
    lines.push('| --- | --- | --- | --- |');
    for (const target of batch.targets) {
      lines.push(`| r${target.row} c${target.column} | ${target.targetId} | ${target.name} | \`${target.outputPath}\` |`);
    }
  }
  fs.writeFileSync(outPath, `${lines.join('\n')}\n`);
}

function writeImageGenPromptJsonl(plan: AtlasPlan, outPath: string): void {
  const records = (['npc', 'monster', 'item', 'material'] as Category[])
    .flatMap(category => plan.targets[category])
    .map(target => ({
      assetId: target.id,
      targetId: target.targetId,
      category: target.category,
      name: target.name,
      type: target.type,
      zoneIds: target.zoneIds,
      source: target.source,
      outputPath: target.outputPath,
      tool: 'Codex imagegen skill built-in image_gen',
      generationMode: 'single image per asset',
      prompt: [
        target.prompt,
        'Generate exactly one finished bitmap asset for this single target.',
        'Do not create an atlas sheet, grid, contact sheet, collage, text label, initial, UI badge, watermark, frame, or category icon.',
        'The final image must be suitable for direct use as the target game asset at inventory, shop, NPC, or monster portrait size.',
      ].join(' '),
    }));

  fs.writeFileSync(outPath, `${records.map(record => JSON.stringify(record)).join('\n')}\n`);
}

function main(): void {
  const options = parseArgs(process.argv.slice(2));
  const zones = parseMud3Zones(options.mud3);
  const targets = collectTargets(zones);
  const { batches, backlog } = makeBatches(targets);
  const counts = Object.fromEntries((Object.keys(targets) as Category[]).map(category => [category, targets[category].length])) as Record<Category, number>;
  const batchCounts = Object.fromEntries(
    (['npc', 'monster', 'item', 'material'] as Category[]).map(category => [category, batches.filter(batch => batch.category === category).length]),
  ) as Record<Category, number>;
  const plan: AtlasPlan = {
    generatedAt: new Date().toISOString(),
    mud3Path: options.mud3,
    zones,
    counts,
    batchCounts,
    targets,
    batches,
    backlog,
  };

  fs.mkdirSync(options.outDir, { recursive: true });
  fs.writeFileSync(path.join(options.outDir, 'phase4-atlas-plan.json'), `${JSON.stringify(plan, null, 2)}\n`);
  writeMarkdown(plan, path.join(options.outDir, 'phase4-atlas-batches.md'));
  writeImageGenPromptJsonl(plan, path.join(options.outDir, 'ai-prompts.jsonl'));

  console.log(`Wrote ${path.relative(ROOT, path.join(options.outDir, 'phase4-atlas-plan.json'))}`);
  console.log(`Wrote ${path.relative(ROOT, path.join(options.outDir, 'phase4-atlas-batches.md'))}`);
  console.log(`Wrote ${path.relative(ROOT, path.join(options.outDir, 'ai-prompts.jsonl'))}`);
  console.log(`Targets: NPC=${counts.npc}, monster=${counts.monster}, item=${counts.item}, material=${counts.material}`);
  console.log(`Batches: NPC=${batchCounts.npc}, monster=${batchCounts.monster}, item=${batchCounts.item}, material=${batchCounts.material}`);
  console.log(`Partial batches: ${backlog.length}`);
}

main();
