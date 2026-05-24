import { useState } from 'react';
import type { Direction, RoomEntity, RoomExit } from '@game/shared';
import { useGameStore, type CombatInfo, type RoomInfo } from '../stores/gameStore';
import { getEntityImagePath } from '../utils/assetImages';

type LaneId = 'self' | Direction;

const CARDINAL_DIRECTIONS: Direction[] = ['north', 'west', 'east', 'south'];

const DIRECTION_LABEL: Record<Direction, string> = {
  north: '北',
  south: '南',
  east: '東',
  west: '西',
  up: '上',
  down: '下',
};

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

function getRoomMonsters(room: RoomInfo): RoomEntity[] {
  const entities = room.entities?.filter((entity) => entity.type === 'monster') ?? [];
  if (entities.length > 0) return entities;

  return room.monsters.map((monster) => ({
    id: monster.id,
    type: 'monster',
    label: monster.label ?? monster.name,
    subtitle: `Lv.${monster.level}`,
    hp: monster.hp,
    maxHp: monster.maxHp,
    monsterDetails: monster.monsterDetails,
    actions: [
      { label: '查看', command: `look ${monster.id}` },
      { label: '攻擊', command: `attack ${monster.id}`, tone: 'danger' },
    ],
  }));
}

function directionTitle(exit: RoomExit | undefined, direction: Direction): string {
  if (!exit) return `${DIRECTION_LABEL[direction]}側牆面`;
  return exit.description || `${DIRECTION_LABEL[direction]}側房間`;
}

function laneClass(active: boolean, reachable: boolean): string {
  return [
    'cross-room-lane',
    active ? 'cross-room-lane-active' : '',
    reachable ? 'cross-room-lane-reachable' : 'cross-room-lane-blocked',
  ].filter(Boolean).join(' ');
}

export function CrossRoomCombatPanelView({
  room,
  inCombat,
  combat,
}: {
  room: RoomInfo;
  inCombat: boolean;
  combat: CombatInfo | null;
}) {
  const [selectedLane, setSelectedLane] = useState<LaneId>('self');
  const roomMonsters = getRoomMonsters(room);
  const exitByDirection = new Map(room.exits.map((exit) => [exit.direction, exit]));
  const combatEnemies = combat?.enemyTeam.filter((enemy) => !enemy.isDead) ?? [];
  const selectedLabel = selectedLane === 'self' ? '本房' : `${DIRECTION_LABEL[selectedLane]}側`;

  return (
    <section className="cross-room-panel">
      <div className="cross-room-head">
        <div>
          <div className="cross-room-title">周邊戰鬥</div>
          <div className="cross-room-subtitle">跨房技能目標：{selectedLabel}</div>
        </div>
        <span className={inCombat ? 'cross-room-state cross-room-state-danger' : 'cross-room-state'}>
          {inCombat ? '戰鬥中' : '未交戰'}
        </span>
      </div>

      <div className="cross-room-grid" aria-label="跨房戰鬥目標">
        <div />
        <DirectionLane
          direction="north"
          exit={exitByDirection.get('north')}
          active={selectedLane === 'north'}
          onSelect={setSelectedLane}
        />
        <div />

        <DirectionLane
          direction="west"
          exit={exitByDirection.get('west')}
          active={selectedLane === 'west'}
          onSelect={setSelectedLane}
        />
        <button
          type="button"
          className={laneClass(selectedLane === 'self', true)}
          onClick={() => setSelectedLane('self')}
        >
          <span className="cross-room-lane-main">本房</span>
          <span>{roomMonsters.length > 0 ? `${roomMonsters.length} 隻可見` : '無可見怪物'}</span>
          {combatEnemies.length > 0 && <b>{combatEnemies.length} 戰鬥中</b>}
        </button>
        <DirectionLane
          direction="east"
          exit={exitByDirection.get('east')}
          active={selectedLane === 'east'}
          onSelect={setSelectedLane}
        />

        <div />
        <DirectionLane
          direction="south"
          exit={exitByDirection.get('south')}
          active={selectedLane === 'south'}
          onSelect={setSelectedLane}
        />
        <div />
      </div>

      <div className="cross-room-detail">
        {selectedLane === 'self' ? (
          <CurrentRoomTargets monsters={roomMonsters} />
        ) : (
          <AdjacentRoomPreview direction={selectedLane} exit={exitByDirection.get(selectedLane)} />
        )}
      </div>
    </section>
  );
}

function DirectionLane({
  direction,
  exit,
  active,
  onSelect,
}: {
  direction: Direction;
  exit: RoomExit | undefined;
  active: boolean;
  onSelect: (lane: LaneId) => void;
}) {
  const reachable = Boolean(exit);
  return (
    <button
      type="button"
      className={laneClass(active, reachable)}
      disabled={!reachable}
      title={directionTitle(exit, direction)}
      onClick={() => onSelect(direction)}
    >
      <span className="cross-room-lane-main">{DIRECTION_LABEL[direction]}側</span>
      <span>{reachable ? '可指定' : '牆'}</span>
      {reachable && <b>抵達 --</b>}
    </button>
  );
}

function CurrentRoomTargets({ monsters }: { monsters: RoomEntity[] }) {
  if (monsters.length === 0) {
    return <div className="cross-room-empty">本房目前沒有可見怪物。</div>;
  }

  return (
    <div className="cross-room-targets">
      {monsters.slice(0, 6).map((monster) => {
        const image = getEntityImagePath(monster);
        const attack = monster.actions.find((action) => action.label === '攻擊');
        return (
          <button
            type="button"
            key={monster.id}
            className="cross-room-target"
            disabled={!attack || attack.disabled}
            onClick={() => attack && sendCommand(attack.command, `攻擊 ${monster.label}`)}
          >
            {image ? <img src={image} alt="" loading="lazy" /> : <span>{monster.label.slice(0, 1)}</span>}
            <small>{monster.label}</small>
          </button>
        );
      })}
    </div>
  );
}

function AdjacentRoomPreview({ direction, exit }: { direction: Direction; exit: RoomExit | undefined }) {
  if (!exit) {
    return <div className="cross-room-empty">{DIRECTION_LABEL[direction]}側沒有可通行房間。</div>;
  }

  return (
    <div className="cross-room-adjacent">
      <div className="min-w-0">
        <div className="cross-room-adjacent-title">{directionTitle(exit, direction)}</div>
        <div className="cross-room-adjacent-note">目前後端尚未提供鄰房怪物清單；這裡會顯示怪物頭像、數量與 arrivalTicks。</div>
      </div>
      <div className="cross-room-actions">
        <button
          type="button"
          className="cross-room-action"
          onClick={() => sendCommand(`go ${direction}`, `前往${DIRECTION_LABEL[direction]}方`)}
        >
          前往
        </button>
        <button
          type="button"
          className="cross-room-action cross-room-action-primary"
          title="跨房技能後端接上後，這個方向會成為下一次技能目標。"
        >
          指定
        </button>
      </div>
    </div>
  );
}

export default function CrossRoomCombatPanel() {
  const room = useGameStore((s) => s.room);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  if (!room) return null;
  return <CrossRoomCombatPanelView room={room} inCombat={inCombat} combat={combat} />;
}
