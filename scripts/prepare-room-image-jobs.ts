import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOMS, ZONES } from '../server/src/data/rooms.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOM_IMAGE_DIR = path.join(ROOT, 'client/public/images/rooms');
const DEFAULT_OUTPUT = path.join(ROOT, 'tmp/room-image-jobs.jsonl');
const DEFAULT_ARCHIVE_DIR = path.join(ROOT, 'tmp/bad-room-images');
const PROTECTED_ROOM_IDS = new Set(['village_square', 'village_gate']);
const STYLE_LINE = 'dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text';
const BASELINE_STYLE =
  'Match the existing village_square.png and village_gate.png direction: dark fantasy, hand-painted painterly concept art, thick paint texture, low saturation, clear readable light source, environment-focused composition.';

interface Options {
  out: string;
  archiveDir: string;
  zone?: string;
  room?: string;
  limit?: number;
  missingOnly: boolean;
  archiveBad: boolean;
  includeProtected: boolean;
}

interface RoomImageJob {
  roomId: string;
  roomName: string;
  zoneId: string;
  zoneName: string;
  image: string;
  outputPath: string;
  out: string;
  prompt: string;
  use_case: 'stylized-concept';
  size: '1024x1536';
  quality: 'high';
}

function parseArgs(argv: string[]): Options {
  const options: Options = {
    out: DEFAULT_OUTPUT,
    archiveDir: DEFAULT_ARCHIVE_DIR,
    missingOnly: false,
    archiveBad: false,
    includeProtected: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === '--') {
      continue;
    } else if (arg === '--out' && next) {
      options.out = path.resolve(ROOT, next);
      index += 1;
    } else if (arg === '--archive-dir' && next) {
      options.archiveDir = path.resolve(ROOT, next);
      index += 1;
    } else if (arg === '--zone' && next) {
      options.zone = next;
      index += 1;
    } else if (arg === '--room' && next) {
      options.room = next;
      index += 1;
    } else if (arg === '--limit' && next) {
      options.limit = Number.parseInt(next, 10);
      index += 1;
    } else if (arg === '--missing-only') {
      options.missingOnly = true;
    } else if (arg === '--archive-bad') {
      options.archiveBad = true;
    } else if (arg === '--include-protected') {
      options.includeProtected = true;
    } else if (arg === '--help') {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown or incomplete option: ${arg}`);
    }
  }

  if (options.limit !== undefined && (!Number.isFinite(options.limit) || options.limit <= 0)) {
    throw new Error('--limit must be a positive number');
  }

  return options;
}

function printHelp(): void {
  console.log(`Prepare room image generation jobs.

Usage:
  pnpm prepare:room-images
  pnpm prepare:room-images -- --zone starter_village --limit 5
  pnpm prepare:room-images -- --archive-bad

Options:
  --out <path>          JSONL output path. Default: tmp/room-image-jobs.jsonl
  --zone <zone_id>      Only prepare rooms in a zone.
  --room <room_id>      Only prepare one room.
  --limit <n>           Limit job count.
  --missing-only        Only include rooms whose target PNG does not exist.
  --archive-bad         Move non-protected existing PNGs for prepared jobs to tmp/bad-room-images.
  --archive-dir <path>  Archive target for --archive-bad.
  --include-protected   Include village_square and village_gate. Off by default.
`);
}

function stripText(value: string): string {
  return value
    .replace(/\s+/g, ' ')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .trim();
}

function truncate(value: string, maxLength: number): string {
  const text = stripText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}...`;
}

function roomImageFile(roomId: string, image?: string): string {
  return path.join(ROOM_IMAGE_DIR, image ?? `${roomId}.png`);
}

function relativeFromRoot(filePath: string): string {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function buildPrompt(roomId: string): string {
  const room = ROOMS[roomId];
  const zone = ZONES[room.zone];
  const exits = room.exits
    .map(exit => `${exit.direction} -> ${ROOMS[exit.targetRoomId]?.name ?? exit.targetRoomId}`)
    .join(', ');
  const monsters = room.monsters?.map(monster => monster.monsterId).join(', ') || 'none visible';
  const promptHint = room.imagePrompt ? `Existing art hint: ${room.imagePrompt}` : '';

  return [
    `Asset type: 10:16 vertical room scene illustration for a browser MUD game.`,
    `Room: ${room.name} (${room.id}).`,
    `Zone: ${zone?.name ?? room.zone} (${room.zone}).`,
    `Scene source of truth: ${truncate(room.description, 900)}`,
    `Exits and layout cues: ${exits || 'single contained scene'}.`,
    `Encounter cues: ${monsters}.`,
    promptHint,
    BASELINE_STYLE,
    `Composition: the place is the main subject; no oversized character portrait; small figures or creature silhouettes are allowed only for scale and danger cues.`,
    `Readability: the location type must be clear at sidebar size, with recognizable terrain, architecture, path direction, and main light source.`,
    `Avoid: modern objects, sci-fi UI, cartoon chibi style, bright fairy-tale palette, abstract fog-only background, color blocks, interface elements, readable text, watermark.`,
    STYLE_LINE,
  ].filter(Boolean).join('\n');
}

function buildJobs(options: Options): RoomImageJob[] {
  const roomIds = Object.keys(ROOMS)
    .filter(roomId => options.includeProtected || !PROTECTED_ROOM_IDS.has(roomId))
    .filter(roomId => !options.room || roomId === options.room)
    .filter(roomId => !options.zone || ROOMS[roomId].zone === options.zone)
    .filter(roomId => {
      if (!options.missingOnly) return true;
      return !fs.existsSync(roomImageFile(roomId, ROOMS[roomId].image));
    })
    .sort((a, b) => {
      const zoneCompare = ROOMS[a].zone.localeCompare(ROOMS[b].zone);
      return zoneCompare || a.localeCompare(b);
    });

  return roomIds.slice(0, options.limit).map(roomId => {
    const room = ROOMS[roomId];
    const zone = ZONES[room.zone];
    const outputPath = roomImageFile(roomId, room.image);
    return {
      roomId,
      roomName: room.name,
      zoneId: room.zone,
      zoneName: zone?.name ?? room.zone,
      image: room.image ?? `${roomId}.png`,
      outputPath: relativeFromRoot(outputPath),
      out: relativeFromRoot(outputPath),
      prompt: buildPrompt(roomId),
      use_case: 'stylized-concept',
      size: '1024x1536',
      quality: 'high',
    };
  });
}

function archiveExistingImages(jobs: RoomImageJob[], archiveDir: string): number {
  let moved = 0;
  for (const job of jobs) {
    if (PROTECTED_ROOM_IDS.has(job.roomId)) continue;
    const source = path.join(ROOT, job.outputPath);
    if (!fs.existsSync(source)) continue;
    const target = path.join(archiveDir, job.outputPath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.renameSync(source, target);
    moved += 1;
  }
  return moved;
}

function writeJobs(jobs: RoomImageJob[], output: string): void {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  const payload = jobs.map(job => JSON.stringify(job)).join('\n');
  fs.writeFileSync(output, `${payload}${payload ? '\n' : ''}`, 'utf8');
}

function main(): void {
  const options = parseArgs(process.argv.slice(2));
  const jobs = buildJobs(options);
  writeJobs(jobs, options.out);

  let archived = 0;
  if (options.archiveBad) {
    archived = archiveExistingImages(jobs, options.archiveDir);
  }

  console.log(`Prepared ${jobs.length} room image jobs: ${relativeFromRoot(options.out)}`);
  console.log(`Protected images preserved: ${Array.from(PROTECTED_ROOM_IDS).join(', ')}`);
  if (options.archiveBad) {
    console.log(`Archived existing non-protected images: ${archived} -> ${relativeFromRoot(options.archiveDir)}`);
  }
}

main();
