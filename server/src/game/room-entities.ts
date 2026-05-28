import { ITEM_DEFS } from '@game/shared';
import type { Character, GroundItem, RoomDef, RoomEntity } from '@game/shared';

type RoomEntityMonsterDetails = {
  monsterId: string;
  name: string;
  alias: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  element: string;
  aiType: string;
  behaviorType?: string;
  isBoss: boolean;
  isElite?: boolean;
  expReward: number;
  goldReward: [number, number];
  stats: { str: number; int: number; dex: number; vit: number; luk: number };
  skills: string[];
  drops: { itemId: string; chance: number; minQty: number; maxQty: number }[];
  description: string;
};

export interface RoomEntityNpc {
  id: string;
  name: string;
  alias: string;
  title: string;
  type: string;
}

export interface RoomEntityPlayer {
  id: string;
  name: string;
  classId: string;
  level: number;
}

export interface RoomEntityMonster {
  id: string;
  name: string;
  alias: string;
  label?: string;
  level: number;
  hp: number;
  maxHp: number;
  monsterDetails?: RoomEntityMonsterDetails;
}

export interface RoomEntityCorpse {
  id: string;
  monsterName: string;
  label?: string;
  empty: boolean;
  protected: boolean;
  protectedUntil?: number;
}

export interface RoomEntityGatheringNode {
  id: string;
  name: string;
  skill: string;
  levelMin: number;
}

export interface RoomEntityTravelNode {
  id: string;
  name: string;
  kind: string;
  unlocked: boolean;
}

export function buildOrdinalLabels<T>(items: T[], keyOf: (item: T) => string): string[] {
  const totals = new Map<string, number>();
  for (const item of items) {
    const key = keyOf(item);
    totals.set(key, (totals.get(key) ?? 0) + 1);
  }

  const seen = new Map<string, number>();
  return items.map(item => {
    const key = keyOf(item);
    const next = (seen.get(key) ?? 0) + 1;
    seen.set(key, next);
    return (totals.get(key) ?? 0) > 1 ? `${key}#${next}` : key;
  });
}

export function buildRoomEntities(input: {
  char: Character;
  room: RoomDef;
  getRoom?: (roomId: string) => RoomDef | undefined;
  mapLayerNameByRoom?: Map<string, string>;
  npcs: RoomEntityNpc[];
  players: RoomEntityPlayer[];
  monsters: RoomEntityMonster[];
  corpses: RoomEntityCorpse[];
  gatheringNodes: RoomEntityGatheringNode[];
  travelNodes: RoomEntityTravelNode[];
  groundItems: GroundItem[];
}): RoomEntity[] {
  const npcLabels = buildOrdinalLabels(input.npcs, npc => npc.name);
  const itemLabels = buildOrdinalLabels(input.groundItems, item => ITEM_DEFS[item.itemId]?.name ?? item.itemId);

  return [
    ...input.room.exits.map(exit => ({
      id: `exit:${exit.direction}`,
      type: 'exit' as const,
      label: directionChinese(exit.direction),
      subtitle: buildExitSubtitle(exit, input.getRoom?.(exit.targetRoomId), input.mapLayerNameByRoom),
      actions: [{
        label: '前往',
        command: `go ${exit.direction}`,
        tone: 'primary' as const,
        disabled: Boolean(exit.locked),
        reason: exit.locked ? '出口上鎖' : undefined,
      }],
    })),
    ...input.npcs.map((npc, index) => ({
      id: npc.id,
      type: 'npc' as const,
      label: npcLabels[index],
      subtitle: `${npc.alias} · ${npc.title}`,
      actions: [
        { label: '查看', command: `look ${npc.id}` },
        { label: '對話', command: `talk ${npc.id}`, tone: 'primary' as const },
        ...(npc.type === 'merchant' ? [{ label: '交易', command: `shop ${npc.id}` }] : []),
      ],
    })),
    ...input.monsters.map(monster => ({
      id: monster.id,
      type: 'monster' as const,
      label: monster.label ?? monster.name,
      subtitle: `${monster.alias} · Lv.${monster.level}`,
      hp: monster.hp,
      maxHp: monster.maxHp,
      monsterDetails: monster.monsterDetails,
      actions: [
        { label: '查看', command: `look ${monster.id}` },
        { label: '攻擊', command: `attack ${monster.id}`, tone: 'danger' as const },
      ],
    })),
    ...input.corpses.map(corpse => ({
      id: corpse.id,
      type: 'corpse' as const,
      label: `${corpse.label ?? corpse.monsterName} 屍體`,
      subtitle: corpse.empty ? '已空' : corpse.protected ? `保護中${formatRemaining(corpse.protectedUntil)}` : '可搜刮',
      actions: [{
        label: '搜刮',
        command: `loot ${corpse.id}`,
        tone: 'primary' as const,
        disabled: corpse.empty || corpse.protected,
        reason: corpse.empty ? '已被搜刮一空' : corpse.protected ? '仍受擊殺隊伍保護' : undefined,
      }],
    })),
    ...input.gatheringNodes.map(node => ({
      id: node.id,
      type: 'gathering' as const,
      label: node.name,
      subtitle: `${node.skill} Lv.${node.levelMin}`,
      actions: [{ label: '採集', command: `gather ${node.id}`, tone: 'primary' as const }],
    })),
    ...input.travelNodes.map(node => ({
      id: node.id,
      type: 'travel' as const,
      label: node.name,
      subtitle: node.unlocked ? '可旅行' : '可啟用',
      actions: [{
        label: node.unlocked ? '旅行' : '啟用',
        command: node.unlocked ? `travel ${node.id}` : 'activate portal',
        tone: 'primary' as const,
      }],
    })),
    ...input.groundItems.map((item, index) => ({
      id: item.itemId,
      type: 'item' as const,
      label: itemLabels[index],
      subtitle: item.description,
      actions: [
        { label: '查看', command: `inspect ${item.itemId}` },
        { label: '拾取', command: `take ${item.itemId}`, tone: 'primary' as const },
      ],
    })),
    ...input.players.map(player => ({
      id: player.id,
      type: 'player' as const,
      label: player.name,
      subtitle: `Lv.${player.level} ${player.classId}`,
      actions: [
        { label: '查看', command: `look ${player.name}` },
        { label: '組隊', command: `party invite ${player.name}` },
        { label: '決鬥', command: `duel ${player.name}`, tone: 'danger' as const },
        { label: '交易', command: `trade ${player.name}` },
      ],
    })),
  ];
}

function buildExitSubtitle(
  exit: RoomDef['exits'][number],
  targetRoom?: RoomDef,
  mapLayerNameByRoom?: Map<string, string>,
): string {
  if (exit.locked) return '上鎖';
  const targetName = targetRoom?.name ?? exit.targetRoomId;
  return exit.description ?? targetName;
}

function formatRemaining(timestamp?: number): string {
  if (!timestamp) return '';
  const seconds = Math.max(0, Math.ceil((timestamp - Date.now()) / 1000));
  return seconds > 0 ? ` ${seconds}s` : '';
}

function directionChinese(dir: string): string {
  const map: Record<string, string> = {
    north: '北', south: '南', east: '東', west: '西',
  };
  return map[dir] ?? dir;
}
