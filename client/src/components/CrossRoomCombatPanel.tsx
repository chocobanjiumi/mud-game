import { useState } from 'react';
import { SKILL_DEFS, type CardinalDirection, type Direction, type LearnedSkill, type NearbyCombatMonsterPayload, type NearbyCombatNeighborPayload, type RoomEntity, type RoomExit, type SkillDef } from '@game/shared';
import { useGameStore, type CombatInfo, type RoomInfo } from '../stores/gameStore';
import { getEntityImagePath, getMonsterImagePath } from '../utils/assetImages';

type LaneId = 'self' | CardinalDirection;

const CARDINAL_DIRECTIONS: CardinalDirection[] = ['north', 'west', 'east', 'south'];

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
  canScout = false,
  learnedSkills = [],
  initialLane = 'self',
  initialAdjacentTargetId = null,
}: {
  room: RoomInfo;
  inCombat: boolean;
  combat: CombatInfo | null;
  canScout?: boolean;
  learnedSkills?: LearnedSkill[];
  initialLane?: LaneId;
  initialAdjacentTargetId?: string | null;
}) {
  const [selectedLane, setSelectedLaneState] = useState<LaneId>(initialLane);
  const [selectedAdjacentTargetId, setSelectedAdjacentTargetId] = useState<string | null>(initialAdjacentTargetId);
  const setSelectedCrossRoomDirection = useGameStore((s) => s.setSelectedCrossRoomDirection);
  const roomMonsters = getRoomMonsters(room);
  const exitByDirection = new Map(room.exits.map((exit) => [exit.direction, exit]));
  const nearby = room.nearbyCombat;
  const neighborByDirection = new Map((nearby?.neighbors ?? []).map((neighbor) => [neighbor.direction, neighbor]));
  const combatEnemies = combat?.enemyTeam.filter((enemy) => !enemy.isDead) ?? [];
  const selectedLabel = selectedLane === 'self' ? '本房' : `${DIRECTION_LABEL[selectedLane]}側`;
  const currentMonsters = nearby?.current.monsters ?? [];

  const setSelectedLane = (lane: LaneId) => {
    setSelectedLaneState(lane);
    if (lane !== selectedLane) setSelectedAdjacentTargetId(null);
    setSelectedCrossRoomDirection(lane === 'self' ? null : lane);
  };

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
          neighbor={neighborByDirection.get('north')}
          active={selectedLane === 'north'}
          onSelect={setSelectedLane}
        />
        <div />

        <DirectionLane
          direction="west"
          exit={exitByDirection.get('west')}
          neighbor={neighborByDirection.get('west')}
          active={selectedLane === 'west'}
          onSelect={setSelectedLane}
        />
        <button
          type="button"
          className={laneClass(selectedLane === 'self', true)}
          onClick={() => setSelectedLane('self')}
        >
          <span className="cross-room-lane-main">本房</span>
          <span>{currentMonsters.length || roomMonsters.length ? `${currentMonsters.length || roomMonsters.length} 隻可見` : '無可見怪物'}</span>
          {combatEnemies.length > 0 && <b>{combatEnemies.length} 戰鬥中</b>}
        </button>
        <DirectionLane
          direction="east"
          exit={exitByDirection.get('east')}
          neighbor={neighborByDirection.get('east')}
          active={selectedLane === 'east'}
          onSelect={setSelectedLane}
        />

        <div />
        <DirectionLane
          direction="south"
          exit={exitByDirection.get('south')}
          neighbor={neighborByDirection.get('south')}
          active={selectedLane === 'south'}
          onSelect={setSelectedLane}
        />
        <div />
      </div>

      <div className="cross-room-detail">
        {selectedLane === 'self' ? (
          <CurrentRoomTargets monsters={roomMonsters} payloadMonsters={currentMonsters} />
        ) : (
          <AdjacentRoomPreview
            direction={selectedLane}
            exit={exitByDirection.get(selectedLane)}
            neighbor={neighborByDirection.get(selectedLane)}
            approaching={nearby?.approaching.filter((monster) => monster.sourceDirection === selectedLane) ?? []}
            canScout={canScout}
            learnedSkills={learnedSkills}
            inCombat={inCombat}
            selectedTargetId={selectedAdjacentTargetId}
            onSelectTarget={setSelectedAdjacentTargetId}
            onSelectDirection={() => setSelectedLane(selectedLane)}
          />
        )}
      </div>
    </section>
  );
}

function DirectionLane({
  direction,
  exit,
  neighbor,
  active,
  onSelect,
}: {
  direction: CardinalDirection;
  exit: RoomExit | undefined;
  neighbor?: NearbyCombatNeighborPayload;
  active: boolean;
  onSelect: (lane: LaneId) => void;
}) {
  const reachable = Boolean(neighbor?.passable ?? exit);
  const monsterText = neighbor
    ? neighbor.scouted
      ? `${neighbor.monsterCount} 隻`
      : neighbor.passable
        ? neighbor.monsterCount > 0 ? `${neighbor.monsterCount} 未知` : '未偵查'
        : '牆'
    : reachable ? '可指定' : '牆';
  return (
    <div
      className={laneClass(active, reachable)}
      title={directionTitle(exit, direction)}
    >
      <button
        type="button"
        className="cross-room-lane-select"
        disabled={!reachable}
        onClick={() => onSelect(direction)}
      >
        <span className="cross-room-lane-main">{DIRECTION_LABEL[direction]}側</span>
        <span>{monsterText}</span>
      </button>
      {reachable && <b>{neighbor?.roomName ?? '可前往'}</b>}
      {reachable && (
        <button
          type="button"
          className="cross-room-lane-go"
          onClick={() => sendCommand(`go ${direction}`, `前往${DIRECTION_LABEL[direction]}方`)}
        >
          前往
        </button>
      )}
    </div>
  );
}

function CurrentRoomTargets({
  monsters,
  payloadMonsters,
}: {
  monsters: RoomEntity[];
  payloadMonsters: NearbyCombatMonsterPayload[];
}) {
  if (monsters.length === 0 && payloadMonsters.length === 0) {
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
      {monsters.length === 0 && payloadMonsters.slice(0, 6).map((monster) => (
        <MonsterChip
          key={monster.id}
          monster={monster}
          onClick={() => sendCommand(`attack ${monster.id}`, `攻擊 ${monster.label ?? monster.name}`)}
        />
      ))}
    </div>
  );
}

function AdjacentRoomPreview({
  direction,
  exit,
  neighbor,
  approaching,
  canScout,
  learnedSkills,
  inCombat,
  selectedTargetId,
  onSelectTarget,
  onSelectDirection,
}: {
  direction: CardinalDirection;
  exit: RoomExit | undefined;
  neighbor?: NearbyCombatNeighborPayload;
  approaching: NonNullable<RoomInfo['nearbyCombat']>['approaching'];
  canScout: boolean;
  learnedSkills: LearnedSkill[];
  inCombat: boolean;
  selectedTargetId: string | null;
  onSelectTarget: (targetId: string | null) => void;
  onSelectDirection: () => void;
}) {
  const passable = neighbor?.passable ?? Boolean(exit);
  if (!passable) {
    return <div className="cross-room-empty">{DIRECTION_LABEL[direction]}側沒有可通行房間。</div>;
  }
  const roomTitle = neighbor?.roomName ?? directionTitle(exit, direction);
  const monsters = neighbor?.monsters ?? [];
  const selectedTarget = monsters.find((monster) => monster.id === selectedTargetId) ?? null;
  const skillActions = buildAdjacentSkillActions(learnedSkills, direction, Boolean(neighbor?.scouted), inCombat, canScout, selectedTarget);

  return (
    <div className="cross-room-adjacent">
      <div className="min-w-0">
        <div className="cross-room-adjacent-title">{roomTitle}</div>
        <div className="cross-room-adjacent-note">
          {neighbor?.scouted
            ? monsters.length > 0 ? `${monsters.length} 隻可見目標` : '已偵查，沒有可見怪物'
            : `${neighbor?.monsterCount ?? 0} 個未知目標，需要偵查後才能看見詳情`}
        </div>
        {approaching.length > 0 && (
          <div className="cross-room-approaching">
            {approaching.map((monster) => (
              <span key={monster.instanceId}>{monster.name} 抵達 {monster.arrivalTicks}</span>
            ))}
          </div>
        )}
        {monsters.length > 0 && (
          <div className="cross-room-targets">
            {monsters.slice(0, 6).map((monster) => (
              <MonsterChip
                key={monster.id}
                monster={monster}
                active={selectedTargetId === monster.id}
                onClick={() => {
                  onSelectDirection();
                  onSelectTarget(monster.id);
                }}
              />
            ))}
          </div>
        )}
        {monsters.length > 0 && (
          <div className="cross-room-adjacent-note">
            {selectedTarget ? `單體目標：${selectedTarget.label ?? selectedTarget.name}` : '點擊怪物頭像後可使用隔房單體技能。'}
          </div>
        )}
      </div>
      <div className="cross-room-actions">
        {skillActions.map((action) => (
          <button
            key={action.skillId}
            type="button"
            className={`cross-room-action ${action.tone === 'scout' ? 'cross-room-action-scout' : ''}`}
            title={action.title}
            onClick={() => sendCommand(action.command, action.echo)}
          >
            {action.label}
          </button>
        ))}
        <button
          type="button"
          className="cross-room-action cross-room-action-primary"
          title="技能列會使用這個方向作為跨房技能目標。"
          onClick={onSelectDirection}
        >
          指定
        </button>
      </div>
    </div>
  );
}

interface AdjacentSkillAction {
  skillId: string;
  label: string;
  command: string;
  echo: string;
  title: string;
  tone?: 'scout';
}

function buildAdjacentSkillActions(
  learnedSkills: LearnedSkill[],
  direction: CardinalDirection,
  scouted: boolean,
  inCombat: boolean,
  canScoutFallback: boolean,
  selectedTarget: NearbyCombatMonsterPayload | null,
): AdjacentSkillAction[] {
  const actions: AdjacentSkillAction[] = [];
  const hasScout = canScoutFallback || learnedSkills.some((skill) => skill.skillId === 'ranger_scout');

  if (hasScout && !scouted) {
    actions.push(createAdjacentSkillAction(SKILL_DEFS.ranger_scout, direction, 'scout'));
  }

  for (const learned of learnedSkills) {
    if (learned.skillId === 'ranger_scout') continue;
    const def = SKILL_DEFS[learned.skillId];
    if (!def || def.type !== 'active') continue;
    if (!canUseInCurrentContext(def, inCombat)) continue;
    if (!isAdjacentDetailSkill(def, scouted, selectedTarget)) continue;
    actions.push(createAdjacentSkillAction(def, direction, undefined, selectedTarget));
  }

  return actions;
}

function canUseInCurrentContext(def: SkillDef, inCombat: boolean): boolean {
  if (inCombat) return def.usageContext === 'combat' || def.usageContext === 'both';
  return def.usageContext === 'field' || def.usageContext === 'both';
}

function isAdjacentDetailSkill(def: SkillDef, scouted: boolean, selectedTarget: NearbyCombatMonsterPayload | null): boolean {
  if (def.special?.areaScope === 'adjacent_cardinal') return false;
  if (def.special?.scoutDirection) return !scouted;
  if (def.special?.trapExit) return true;
  if (def.special?.crossRoomRequiresScout && !scouted) return false;
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) {
    return def.targetType === 'single_enemy' ? Boolean(selectedTarget) : true;
  }
  return false;
}

function createAdjacentSkillAction(
  def: SkillDef,
  direction: CardinalDirection,
  tone?: 'scout',
  selectedTarget?: NearbyCombatMonsterPayload | null,
): AdjacentSkillAction {
  const directionArg = def.special?.crossRoom || def.special?.crossRoomRequiresScout
    ? `direction:${direction}`
    : direction;
  const targetArg = selectedTarget && def.targetType === 'single_enemy' ? ` ${selectedTarget.id}` : '';
  return {
    skillId: def.id,
    label: def.name,
    command: `skill ${def.id} ${directionArg}${targetArg}`,
    echo: `${def.name} ${selectedTarget?.label ?? `${DIRECTION_LABEL[direction]}側`}`,
    title: def.shortDescription,
    tone,
  };
}

function MonsterChip({
  monster,
  active = false,
  onClick,
}: {
  monster: NearbyCombatMonsterPayload;
  active?: boolean;
  onClick: () => void;
}) {
  const image = getMonsterImagePath(monster.monsterId) ?? monster.image;
  return (
    <button type="button" className={`cross-room-target ${active ? 'cross-room-target-active' : ''}`} onClick={onClick}>
      {image ? <img src={image} alt="" loading="lazy" /> : <span>{monster.name.slice(0, 1)}</span>}
      <small>{monster.label ?? monster.name}</small>
      <small className="cross-room-hp">HP {monster.hp}/{monster.maxHp}</small>
    </button>
  );
}

export default function CrossRoomCombatPanel() {
  const room = useGameStore((s) => s.room);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  const learnedSkills = useGameStore((s) => s.skills);
  const canScout = learnedSkills.some((skill) => skill.skillId === 'ranger_scout');
  if (!room) return null;
  return <CrossRoomCombatPanelView room={room} inCombat={inCombat} combat={combat} canScout={canScout} learnedSkills={learnedSkills} />;
}
