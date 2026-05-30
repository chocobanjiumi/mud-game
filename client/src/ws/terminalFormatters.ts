import type { NarrativePayload, RoomPayload, CombatStartPayload, ChatPayload } from '@game/shared';
import type { GameState } from '../stores/gameStore';

function ordinalLabels<T extends { name: string }>(items: T[], keyOf: (item: T) => string = (item) => item.name): string[] {
  const totals = new Map<string, number>();
  for (const item of items) {
    const key = keyOf(item);
    totals.set(key, (totals.get(key) ?? 0) + 1);
  }

  const seen = new Map<string, number>();
  return items.map((item) => {
    const key = keyOf(item);
    const next = (seen.get(key) ?? 0) + 1;
    seen.set(key, next);
    return (totals.get(key) ?? 0) > 1 ? `${item.name}#${next}` : item.name;
  });
}

export function bgmForRoom(room: RoomPayload): string {
  const zone = room.zone.toLowerCase();
  const id = room.id.toLowerCase();
  if (zone.includes('town') || zone.includes('market') || id.includes('village') || id.includes('town') || id.includes('market')) {
    return 'bgm_town';
  }
  return 'bgm_wilderness';
}

export function hasCurrentPlayerBasicAttackHit(lines: string[], characterName?: string): boolean {
  if (!characterName) return false;
  return lines.some((line) =>
    line.startsWith(characterName)
    && !line.includes('使用了')
    && line.includes('造成 ')
    && line.includes('點傷害')
    && !line.includes('未能命中')
    && !line.includes('被閃避')
  );
}

export function addSystemLine(s: GameState, payload: Record<string, unknown>): void {
  const text = (payload.text as string) ?? JSON.stringify(payload);
  const entities = (payload.entities as NarrativePayload['entities'] | undefined)?.map(entity => ({
    ...entity,
    name: entity.name,
  }));
  s.addTerminalLine(`[系統] ${text}`, 'system', entities);
}

export function addErrorLine(s: GameState, payload: Record<string, unknown>): void {
  const text = (payload.message as string) ?? (payload.text as string) ?? JSON.stringify(payload);
  const entities = (payload.entities as NarrativePayload['entities'] | undefined)?.map(entity => ({
    ...entity,
    name: entity.name,
  }));
  s.addTerminalLine(`[錯誤] ${text}`, 'error', entities);
}

export function addRoomLines(s: GameState, room: RoomPayload): void {
  s.addTerminalLine('');
  s.addTerminalLine(`═══ ${room.name} ═══`, 'room-title');
  s.addTerminalLine(room.description, 'room-desc');
  if (room.exits.length > 0) {
    const dirs = room.exits.map((e) => e.direction).join(', ');
    s.addTerminalLine(`出口: ${dirs}`, 'exits');
  }
  if (room.npcs.length > 0) {
    const labels = ordinalLabels(room.npcs);
    const names = room.npcs.map((n, index) => `${labels[index]}/${n.alias}(${n.title})`).join(', ');
    const npcEntities = room.npcs.map((n, index) => ({
      name: `${labels[index]}/${n.alias}(${n.title})`,
      entityType: 'npc' as const,
      alias: n.alias,
      npcType: n.type,
      cmdName: labels[index],
      commandTarget: n.id,
    }));
    s.addTerminalLine(`NPC: ${names}`, 'npc', npcEntities);
  }
  if (room.monsters.length > 0) {
    const labels = room.monsters.map(m => m.label).every(Boolean)
      ? room.monsters.map(m => m.label!)
      : ordinalLabels(room.monsters);
    const names = room.monsters.map((m, index) => `${labels[index]}/${m.alias} Lv.${m.level}`).join(', ');
    const monsterEntities = room.monsters.map((m, index) => ({
      name: `${labels[index]}/${m.alias} Lv.${m.level}`,
      entityType: 'monster' as const,
      alias: m.alias,
      cmdName: labels[index],
      commandTarget: m.id,
    }));
    s.addTerminalLine(`怪物: ${names}`, 'monster', monsterEntities);
  }
  if (room.players.length > 0) {
    const names = room.players.map((pl) => pl.name).join(', ');
    const playerEntities = room.players.map((pl) => ({
      name: pl.name,
      entityType: 'player' as const,
      cmdName: pl.name,
    }));
    s.addTerminalLine(`玩家: ${names}`, 'player', playerEntities);
  }
  if (room.items.length > 0) {
    const names = room.items.map((i) => i.name).join(', ');
    s.addTerminalLine(`物品: ${names}`, 'item');
  }
}

export function addCombatStartLines(s: GameState, data: CombatStartPayload): void {
  s.addTerminalLine('');
  s.addTerminalLine('═══ 戰鬥開始！ ═══', 'combat');
  const enemies = data.enemyTeam.map((e) => `${e.name} Lv.${e.level}`).join(', ');
  s.addTerminalLine(`敵人: ${enemies}`, 'combat');
  for (const enemy of data.enemyTeam) {
    if (enemy.monsterPhases?.length) {
      s.addTerminalLine(`${enemy.name} Boss 階段：目前 P${enemy.currentMonsterPhase ?? 1}/${Math.max(...enemy.monsterPhases.map((p) => p.phase))}`, 'combat');
    }
    if (enemy.pendingTelegraph) {
      s.addTerminalLine(`${enemy.name} 預兆：${enemy.pendingTelegraph.skillId}`, 'combat');
    }
  }
}

export function chatTerminalLine(data: ChatPayload): { text: string; color: string } {
  const prefix =
    data.channel === 'global'
      ? '[全域]'
      : data.channel === 'party'
        ? '[隊伍]'
        : data.channel === 'kingdom'
          ? '[王國]'
          : '[區域]';
  return {
    text: `${prefix} ${data.senderName}: ${data.message}`,
    color: `chat-${data.channel}`,
  };
}
