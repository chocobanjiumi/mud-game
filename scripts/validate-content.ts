import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ZONES, ROOMS } from '../server/src/data/rooms.js';
import { getTravelNodes } from '../server/src/data/travel.js';
import { MONSTERS } from '../server/src/data/monsters.js';
import { EXPANSION_MONSTERS } from '../server/src/data/monsters-expansion.js';
import { NPCS } from '../server/src/data/npcs.js';
import { QUEST_DEFS } from '../server/src/game/quest.js';
import { ITEM_DEFS } from '../packages/shared/src/constants/items.js';
import type { RoomDef, ZoneDef } from '../packages/shared/src/types/world.js';

type Severity = 'error' | 'warning';

interface Finding {
  severity: Severity;
  scope: string;
  message: string;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOM_IMAGE_DIR = path.join(ROOT, 'client/public/images/rooms');
const REQUIRED_ZONE_FIELDS: (keyof ZoneDef)[] = [
  'type',
  'region',
  'tags',
  'pvpMode',
  'deathPenalty',
  'dangerLevel',
  'recommendedPartySize',
  'primaryElements',
];
const REQUIRED_ROOM_FIELDS: (keyof RoomDef)[] = [
  'id',
  'zone',
  'name',
  'description',
  'exits',
  'mapX',
  'mapY',
  'image',
];
const REQUIRED_EQUIP_SLOTS = [
  'weapon',
  'head',
  'body',
  'hands',
  'feet',
  'ring',
  'earring',
  'belt',
  'necklace',
] as const;
const IMAGE_STYLE_PHRASE = 'dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text';
const IMAGE_PROMPT_FUNCTION_PATTERN = /room function (entrance|main route|combat|resource|hidden|elite|boss|town service)/i;
const IMAGE_PROMPT_TERRAIN_PATTERN = /terrain [a-z ]+/i;
const IMAGE_PROMPT_LIGHT_PATTERN = /\b(light|lit|lantern|torch|candle|firelight|moon|sun|dawn|dusk|glow|glowing|shadow|dark|amber|blue|green|red|pale|beam|shaft|mist|fog)\b|光|燈|火|燭|月|日|晨|暮|暗|影|霧/i;
const ROOM_PLACE_SENSE_PATTERNS = [
  /地形|地面|泥|沙|草|岩|石|山|谷|林|田|沼|海|湖|河|溪|水|雪|冰|火|熔岩|礁|岸|洞|坡|崖|坑|灘|原|丘|泉|潭|潮|terrain|mud|sand|grass|rock|stone|mountain|valley|forest|field|marsh|sea|lake|river|snow|ice|lava|cave|slope|cliff/i,
  /建築|牆|門|橋|階|塔|城|村|營|屋|廳|殿|棚|井|欄|店|港|碼頭|祭壇|石柱|柱|雕像|廣場|道路|路|小徑|building|wall|gate|door|bridge|stair|tower|hall|temple|altar|plaza|road/i,
  /氣味|香|臭|腥|硫磺|腐味|煙味|礦味|味道|odor|smell|scent/i,
  /聲|鳴|響|低語|回音|吱嘎|呼嘯|水聲|腳步|敲|咆哮|sound|echo|whisper|roar/i,
  /光|燈|火把|燭|月|日|晨|暮|陰影|暗|亮|微光|發光|glow|light|torch|candle|moon|sun|shadow/i,
  /材質|石板|木|鐵|銅|銀|金|玻璃|水晶|骨|皮|布|繩|藤壺|海藻|metal|wood|glass|crystal|bone|cloth/i,
  /天氣|雨|雪|風|霧|雲|雷|暴風|潮濕|乾燥|濕滑|weather|rain|snow|wind|fog|cloud|storm/i,
] as const;
const ROOM_PLAY_CLUE_PATTERN = /怪|魔物|敵|守衛|首領|王|資源|礦|草藥|魚|NPC|商人|導師|可調查|調查|inspect|search|look|危險|風險|陷阱|捷徑|寶箱|任務|委託|戰鬥|採集|loot|corpse|monster|resource|npc|danger|shortcut|chest|quest|補給|服務|交通|回程|安全|遭遇|遭遇點|路線|機關|鑰|封印|巡邏|伏擊|迷路|解謎|收集|取得|開啟|啟用|傳送|標記|整理|撤退|背包|裝備|等級|玩家|可用|可以|能夠|適合|協助|提示|判斷|警告|練習|生物|飛龍|古龍|幼龍|水母|烏鴉|田鼠|史萊姆|盜匪|流放者|術士|兵器|雷獸|巨人|精靈|狼|龍|探索點|事件點|儀式|揭示|前哨|守護/i;
const ROOM_DIRECTION_PATTERN = /北|南|東|西|上|下|入口|出口|道路|小路|路|河|牆|坡|門|橋|階|地標|通往|回到|連到|前往|沿著|旁|側|盡頭|中央|方向|north|south|east|west|up|down|exit|road|river|wall|slope|gate|door|bridge|stair|landmark/i;
const MIN_NON_TOWN_COMBAT_ROOMS = 12;
const MIN_ZONE_THEME_EQUIPMENT = 6;
const MIN_BOSS_OR_DUNGEON_THEME_EQUIPMENT = 10;
const MIN_ZONE_INSPECTABLE_ROOMS = 3;
const TUTORIAL_MAIN_COMMANDS = ['look', 'go', 'attack', 'loot corpse', 'equip', 'quest', 'activate portal'] as const;
const MAX_ROOM_DESCRIPTION_CHARS = 300;
const ROOM_ID_PATTERN = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

const findings: Finding[] = [];
const allMonsters = { ...MONSTERS, ...EXPANSION_MONSTERS };

function add(severity: Severity, scope: string, message: string): void {
  findings.push({ severity, scope, message });
}

function chineseCharCount(value: string): number {
  return [...value].filter((char) => /\p{Script=Han}/u.test(char)).length;
}

function isSpecialRoom(room: RoomDef): boolean {
  const haystack = `${room.id} ${room.name} ${room.description}`;
  return /boss|lord|king|alpha|throne|sanctum|chamber|gate|portal|summon|core|lair|王|首領|狼王|領主|王座|聖所|核心|傳送|地標|祭壇|巢穴|城門|廣場|大廳/.test(haystack);
}

function isHiddenQuestEliteRoom(room: RoomDef): boolean {
  const haystack = `${room.id} ${room.name} ${room.description}`;
  return /hidden|secret|elite|quest|boss|lord|king|queen|core|sanctum|lair|throne|隱|秘|精英|任務|王|核心|聖所|巢穴|王座/.test(haystack);
}

function isCombatOrResourceRoom(room: RoomDef): boolean {
  const zone = ZONES[room.zone];
  return (room.monsters?.length ?? 0) > 0
    || zone?.type === 'resource'
    || (zone?.tags ?? []).some((tag) => ['gathering', 'fishing', 'mining', 'resource_war'].includes(tag));
}

function isHighRiskZone(zone: ZoneDef | undefined): boolean {
  if (!zone) return false;
  return zone.pvpMode === 'open' || zone.pvpMode === 'kingdom_war' || zone.type === 'pvp' || zone.type === 'kingdom';
}

function hasTrafficNode(zone: ZoneDef): boolean {
  if (zone.portal) return true;

  return Object.values(ROOMS).some((room) => {
    if (room.zone !== zone.id) return false;
    const haystack = `${room.id} ${room.name} ${room.description}`;
    return /portal|gate|entrance|harbor|dock|pass|shortcut|recall|傳送|入口|門|港|碼頭|捷徑|回程|隘口/.test(haystack);
  });
}

function roomSearchText(room: RoomDef): string {
  return `${room.id} ${room.name} ${room.description}`;
}

function roomPlaceSenseCount(description: string): number {
  return ROOM_PLACE_SENSE_PATTERNS.filter((pattern) => pattern.test(description)).length;
}

function validateTownStructure(zone: ZoneDef): void {
  const zoneRooms = zone.rooms.map((roomId) => ROOMS[roomId]).filter((room): room is RoomDef => !!room);
  const countMatches = (pattern: RegExp, predicate?: (room: RoomDef) => boolean): number =>
    zoneRooms.filter((room) => pattern.test(roomSearchText(room)) || predicate?.(room)).length;

  const serviceRooms = countMatches(/inn|guild|shop|market|bank|temple|portal|training|auction|warehouse|tavern|healer|counter|stable|harbor|dock|forge|craft|公會|商店|市場|銀行|神殿|傳送|訓練|拍賣|倉庫|酒館|醫|港|碼頭|鍛|櫃|旅店|客棧/);
  const npcQuestRooms = countMatches(/quest|guild|chief|mentor|board|council|scribe|referee|prize|contract|委託|任務|公會|長|導師|看板|議會|書記|裁判|獎|契約|NPC|祭司|商人/, (room) => (room.npcs?.length ?? 0) > 0);
  const socialRooms = countMatches(/tavern|guild|market|square|plaza|hall|balcony|auction|class|trade|公會|市場|廣場|大廳|酒館|看台|拍賣|交易|職業|社交/);
  const exploreRooms = countMatches(/hidden|secret|cellar|canal|alley|ruin|暗|隱|秘|地窖|水道|後巷|遺跡/);
  const trafficRooms = countMatches(/portal|gate|harbor|dock|road|entrance|shrine|station|傳送|門|港|碼頭|道路|入口|祠|站/);

  if (serviceRooms < 6) add('error', `zone:${zone.id}`, `town requires at least 6 service rooms, found ${serviceRooms}`);
  if (npcQuestRooms < 4) add('error', `zone:${zone.id}`, `town requires at least 4 NPC or quest rooms, found ${npcQuestRooms}`);
  if (socialRooms < 3) add('error', `zone:${zone.id}`, `town requires at least 3 social, guild, trade, or class rooms, found ${socialRooms}`);
  if (exploreRooms < 2) add('error', `zone:${zone.id}`, `town requires at least 2 exploration or hidden rooms, found ${exploreRooms}`);
  if (trafficRooms < 1) add('error', `zone:${zone.id}`, `town requires at least 1 traffic room, found ${trafficRooms}`);
}

function isInspectableRoom(room: RoomDef): boolean {
  const text = roomSearchText(room);
  return !!room.guardianHints
    || (room.groundItems?.length ?? 0) > 0
    || /inspect|search|look|可調查|調查|暗格|符文|線索|機關|寶箱|藏|痕跡/.test(text);
}

function isHiddenRoom(room: RoomDef): boolean {
  return /room function hidden|hidden|secret|隱|秘/i.test(`${room.id} ${room.name} ${room.description} ${room.imagePrompt ?? ''}`);
}

function hasOneTimeChest(room: RoomDef): boolean {
  return room.groundItems?.some((item) => item.oneTime && item.itemId.includes('chest')) ?? false;
}

function validateZoneExplorationContent(zone: ZoneDef): void {
  const zoneRooms = zone.rooms.map((roomId) => ROOMS[roomId]).filter((room): room is RoomDef => !!room);
  const inspectableRooms = zoneRooms.filter(isInspectableRoom).length;
  const hiddenRooms = zoneRooms.filter(isHiddenRoom).length;
  const oneTimeChests = zoneRooms.filter(hasOneTimeChest).length;

  if (inspectableRooms < MIN_ZONE_INSPECTABLE_ROOMS) {
    add('error', `zone:${zone.id}`, `requires at least ${MIN_ZONE_INSPECTABLE_ROOMS} inspectable rooms, found ${inspectableRooms}`);
  }
  if (hiddenRooms < 1) {
    add('error', `zone:${zone.id}`, 'requires at least 1 hidden room');
  }
  if (oneTimeChests < 1) {
    add('error', `zone:${zone.id}`, 'requires at least 1 one-time chest');
  }
}

function roomImagePath(room: RoomDef): string {
  return path.join(ROOM_IMAGE_DIR, room.image ?? `${room.id}.png`);
}

function readPngSize(filePath: string): { width: number; height: number } | undefined {
  const buffer = fs.readFileSync(filePath);
  const pngSignature = '89504e470d0a1a0a';
  if (buffer.subarray(0, 8).toString('hex') !== pngSignature) return undefined;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function validateZones(): void {
  const zones = Object.values(ZONES);
  if (zones.length !== 60) {
    add('error', 'zones', `expected exactly 60 zones, found ${zones.length}`);
  }

  for (const zone of zones) {
    for (const field of REQUIRED_ZONE_FIELDS) {
      const value = zone[field];
      if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
        add('error', `zone:${zone.id}`, `missing required ZoneDef field: ${String(field)}`);
      }
    }

    if (zone.rooms.length < 20) {
      add('error', `zone:${zone.id}`, `requires at least 20 rooms, found ${zone.rooms.length}`);
    }

    if (!hasTrafficNode(zone)) {
      add('error', `zone:${zone.id}`, 'requires at least one traffic node, portal, entrance, shortcut, or recall route');
    }

    if (zone.type === 'town') {
      validateTownStructure(zone);
    }
    validateZoneExplorationContent(zone);

    if (zone.type !== 'town') {
      const combatRooms = zone.rooms.filter((roomId) => (ROOMS[roomId]?.monsters?.length ?? 0) > 0);
      if (combatRooms.length < MIN_NON_TOWN_COMBAT_ROOMS) {
        add('error', `zone:${zone.id}`, `requires at least ${MIN_NON_TOWN_COMBAT_ROOMS} combat rooms, found ${combatRooms.length}`);
      }
    }

    for (const roomId of zone.rooms) {
      const room = ROOMS[roomId];
      if (!room) {
        add('error', `zone:${zone.id}`, `references missing room: ${roomId}`);
      } else if (room.zone !== zone.id) {
        add('error', `zone:${zone.id}`, `room ${roomId} has mismatched zone ${room.zone}`);
      }
    }
  }
}

function validateRooms(): void {
  const occupied = new Map<string, string>();

  for (const room of Object.values(ROOMS)) {
    if (!ROOM_ID_PATTERN.test(room.id)) {
      add('error', `room:${room.id}`, 'room id must use readable lowercase snake_case');
    }

    for (const field of REQUIRED_ROOM_FIELDS) {
      const value = room[field];
      if (value === undefined || value === null || value === '') {
        add('error', `room:${room.id}`, `missing required RoomDef field: ${String(field)}`);
      }
    }

    if (!ZONES[room.zone]) {
      add('error', `room:${room.id}`, `references missing zone: ${room.zone}`);
    }

    const minDescription = isSpecialRoom(room) ? 200 : isHiddenQuestEliteRoom(room) ? 150 : isCombatOrResourceRoom(room) ? 100 : 80;
    const count = chineseCharCount(room.description);
    if (count < minDescription) {
      add('error', `room:${room.id}`, `description has ${count} Chinese chars; requires at least ${minDescription}`);
    }
    if (count > MAX_ROOM_DESCRIPTION_CHARS) {
      add('error', `room:${room.id}`, `description has ${count} Chinese chars; should not exceed ${MAX_ROOM_DESCRIPTION_CHARS}`);
    }
    if (isHighRiskZone(ZONES[room.zone]) && !/PvP|PVP|pvp|王國戰|開放衝突|敵對玩家|玩家|死亡|金幣|耐久|撤退|伏擊|爭奪|衝突/.test(room.description)) {
      add('error', `room:${room.id}`, 'high-risk PvP room description must mention PvP, conflict, death penalty, retreat, or ambush risk');
    }
    const placeSenseCount = roomPlaceSenseCount(room.description);
    if (placeSenseCount < 2) {
      add('error', `room:${room.id}`, `description must include at least 2 place-sense details, found ${placeSenseCount}`);
    }
    if (!ROOM_PLAY_CLUE_PATTERN.test(room.description)) {
      add('error', `room:${room.id}`, 'description must include a gameplay clue');
    }
    if (!ROOM_DIRECTION_PATTERN.test(room.description)) {
      add('error', `room:${room.id}`, 'description must include directional context');
    }

    if (!room.exits || room.exits.length === 0) {
      add('error', `room:${room.id}`, 'requires at least one exit');
    }

    for (const exit of room.exits ?? []) {
      if (!ROOMS[exit.targetRoomId]) {
        add('error', `room:${room.id}`, `exit ${exit.direction} targets missing room ${exit.targetRoomId}`);
      }
    }

    const key = `${room.zone}:${room.mapX},${room.mapY}`;
    const previous = occupied.get(key);
    if (previous) {
      add('error', `room:${room.id}`, `map position overlaps ${previous} at ${key}`);
    } else {
      occupied.set(key, room.id);
    }

    const filePath = roomImagePath(room);
    if (!fs.existsSync(filePath)) {
      add('error', `room:${room.id}`, `room image missing: ${path.relative(ROOT, filePath)}`);
    } else {
      const size = readPngSize(filePath);
      if (!size) {
        add('error', `room:${room.id}`, 'room image must be a PNG file');
      } else {
        const ratio = size.width / size.height;
        const expected = 10 / 16;
        if (Math.abs(ratio - expected) > 0.02) {
          add('error', `room:${room.id}`, `room image ratio must be close to 10:16, found ${size.width}x${size.height}`);
        }
      }
    }

    if (!room.imagePrompt) {
      add('error', `room:${room.id}`, 'missing imagePrompt');
    } else {
      const zoneName = ZONES[room.zone]?.name ?? room.zone;
      if (!room.imagePrompt.includes(room.name)) add('error', `room:${room.id}`, 'imagePrompt must include room name');
      if (!room.imagePrompt.includes(room.zone) && !room.imagePrompt.includes(zoneName)) {
        add('error', `room:${room.id}`, 'imagePrompt must include zone id or zone name');
      }
      if (!room.imagePrompt.includes(IMAGE_STYLE_PHRASE)) {
        add('error', `room:${room.id}`, 'imagePrompt missing required style phrase');
      }
      if (!IMAGE_PROMPT_FUNCTION_PATTERN.test(room.imagePrompt)) {
        add('error', `room:${room.id}`, 'imagePrompt must include room function');
      }
      if (!IMAGE_PROMPT_TERRAIN_PATTERN.test(room.imagePrompt)) {
        add('error', `room:${room.id}`, 'imagePrompt must include main terrain');
      }
      if (!IMAGE_PROMPT_LIGHT_PATTERN.test(room.imagePrompt)) {
        add('error', `room:${room.id}`, 'imagePrompt must include light source or lighting');
      }
    }
  }
}

function validateMonstersAndItems(): void {
  for (const monster of Object.values(allMonsters)) {
    if (!Array.isArray(monster.drops)) {
      add('error', `monster:${monster.id}`, 'missing loot table');
      continue;
    }

    for (const drop of monster.drops) {
      if (!ITEM_DEFS[drop.itemId]) {
        add('error', `monster:${monster.id}`, `drop references missing item: ${drop.itemId}`);
      }
    }
  }

  for (const slot of REQUIRED_EQUIP_SLOTS) {
    const count = Object.values(ITEM_DEFS).filter((item) => item.equipSlot === slot).length;
    if (count === 0) {
      add('error', `items:${slot}`, 'requires at least one base item for this equipment slot');
    }
  }

  const equipmentByZone = new Map<string, number>();
  for (const item of Object.values(ITEM_DEFS)) {
    if (!['weapon', 'armor', 'accessory'].includes(item.type)) continue;
    for (const zoneId of item.zoneTags ?? []) {
      if (zoneId === 'global') continue;
      equipmentByZone.set(zoneId, (equipmentByZone.get(zoneId) ?? 0) + 1);
    }
  }

  for (const zone of Object.values(ZONES)) {
    const count = equipmentByZone.get(zone.id) ?? 0;
    if (count < MIN_ZONE_THEME_EQUIPMENT) {
      add('error', `zone:${zone.id}`, `requires at least ${MIN_ZONE_THEME_EQUIPMENT} zone-themed equipment items, found ${count}`);
    }
    if ((zone.type === 'endgame' || zone.type === 'dungeon_entrance') && count < MIN_BOSS_OR_DUNGEON_THEME_EQUIPMENT) {
      add('error', `zone:${zone.id}`, `boss or dungeon zone requires at least ${MIN_BOSS_OR_DUNGEON_THEME_EQUIPMENT} themed equipment or set pieces, found ${count}`);
    }
  }
}

function validateQuests(): void {
  const tutorialMainQuests = Object.values(QUEST_DEFS).filter((quest) => quest.type === 'main' && quest.levelReq <= 10);
  const tutorialText = tutorialMainQuests.map((quest) => [
    quest.name,
    quest.description,
    quest.dialogueStart ?? '',
    quest.dialogueComplete ?? '',
    ...quest.objectives.map((objective) => `${objective.type} ${objective.targetId} ${objective.targetName}`),
  ].join(' ')).join(' ').toLowerCase();
  for (const command of TUTORIAL_MAIN_COMMANDS) {
    if (!tutorialText.includes(command)) {
      add('error', 'quests:tutorial', `Lv.1-Lv.10 main quests must teach command: ${command}`);
    }
  }

  for (const quest of Object.values(QUEST_DEFS)) {
    for (const objective of quest.objectives) {
      const isWildcard = objective.targetId.includes('*');
      const isSyntheticObjective = ['boss', 'pvp_win'].includes(objective.targetId);

      if (objective.type === 'kill' && !isWildcard && !isSyntheticObjective && !allMonsters[objective.targetId]) {
        add('error', `quest:${quest.id}`, `kill objective references missing monster: ${objective.targetId}`);
      }
      if (objective.type === 'collect' && !ITEM_DEFS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `collect objective references missing item: ${objective.targetId}`);
      }
      if (objective.type === 'visit' && !isWildcard && !ROOMS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `visit objective references missing room: ${objective.targetId}`);
      }
      if (objective.type === 'talk' && !isWildcard && !NPCS[objective.targetId]) {
        add('error', `quest:${quest.id}`, `talk objective references missing NPC: ${objective.targetId}`);
      }
    }

    for (const reward of quest.rewards.items ?? []) {
      if (!ITEM_DEFS[reward.itemId]) {
        add('error', `quest:${quest.id}`, `reward references missing item: ${reward.itemId}`);
      }
    }
  }
}

function validateTravelNodes(): void {
  const nodes = getTravelNodes();
  const nodesByZone = new Map<string, ReturnType<typeof getTravelNodes>>();
  for (const node of nodes) {
    const zoneNodes = nodesByZone.get(node.zoneId) ?? [];
    zoneNodes.push(node);
    nodesByZone.set(node.zoneId, zoneNodes);
  }

  for (const zone of Object.values(ZONES)) {
    const zoneNodes = nodesByZone.get(zone.id) ?? [];
    if (zone.type === 'kingdom') {
      const kingdomRoutes = zoneNodes.filter((node) => node.kind === 'kingdom_route');
      if (kingdomRoutes.length === 0) {
        add('error', `zone:${zone.id}`, 'kingdom zone requires at least one kingdom_route travel node');
      }
      for (const node of kingdomRoutes) {
        if (node.network !== 'kingdom') {
          add('error', `travel:${node.id}`, 'kingdom_route must use kingdom network');
        }
        if (node.cost.type !== 'kingdom_treasury') {
          add('error', `travel:${node.id}`, 'kingdom_route must consume kingdom treasury resources');
        }
      }
    }

    if (zone.pvpMode === 'open' || zone.pvpMode === 'faction' || zone.pvpMode === 'kingdom_war') {
      const evacNodes = zoneNodes.filter((node) => node.kind === 'danger_evac');
      if (evacNodes.length === 0) {
        add('error', `zone:${zone.id}`, 'PvP danger zone requires at least one danger_evac travel node');
      }
      for (const node of evacNodes) {
        if (node.network !== 'pvp_evac') {
          add('error', `travel:${node.id}`, 'danger_evac must use pvp_evac network');
        }
        if (node.cost.type !== 'item' || node.cost.itemId !== 'battle_token') {
          add('error', `travel:${node.id}`, 'danger_evac must consume battle_token or equivalent PvP resource');
        }
      }
    }
  }
}

validateZones();
validateRooms();
validateMonstersAndItems();
validateQuests();
validateTravelNodes();

const errors = findings.filter((finding) => finding.severity === 'error');
const warnings = findings.filter((finding) => finding.severity === 'warning');

console.log(`Content validation: ${errors.length} error(s), ${warnings.length} warning(s)`);
for (const finding of findings) {
  console.log(`[${finding.severity.toUpperCase()}] ${finding.scope}: ${finding.message}`);
}

process.exitCode = errors.length > 0 ? 1 : 0;
