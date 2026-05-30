import { ITEM_DEFS, type RoomEntity, type RoomEntityAction, type RoomEntityType } from '@game/shared';
import { useState } from 'react';
import { useGameStore, type RoomInfo } from '../stores/gameStore';
import { getEntityImagePath } from '../utils/assetImages';
import { runCommand } from '../utils/gameActions';
import MonsterDetailModal from './MonsterDetailModal';
import PlayerDetailModal from './PlayerDetailModal';
import { CrossRoomCombatPanelView } from './CrossRoomCombatPanel';
import CombatPanel from './CombatPanel';
import ApproachingPanel from './ApproachingPanel';

function sendCommand(command: string, echo?: string) {
  runCommand(command, echo);
}

function ordinalLabels<T extends { monsterName: string }>(items: T[]): string[] {
  const totals = new Map<string, number>();
  for (const item of items) {
    totals.set(item.monsterName, (totals.get(item.monsterName) ?? 0) + 1);
  }

  const seen = new Map<string, number>();
  return items.map((item) => {
    const next = (seen.get(item.monsterName) ?? 0) + 1;
    seen.set(item.monsterName, next);
    return (totals.get(item.monsterName) ?? 0) > 1 ? `${item.monsterName}#${next}` : item.monsterName;
  });
}

const SECTION_ORDER: RoomEntityType[] = ['exit', 'monster', 'npc', 'corpse', 'gathering', 'travel', 'item', 'player'];

const SECTION_LABEL: Record<RoomEntityType, string> = {
  exit: '出口',
  monster: '怪物',
  npc: 'NPC',
  corpse: '屍體',
  gathering: '採集',
  travel: '傳送',
  item: '物品',
  player: '玩家',
};

const TYPE_CLASS: Record<RoomEntityType, string> = {
  exit: 'text-text-terminal',
  monster: 'text-combat-damage',
  npc: 'text-chat-system',
  corpse: 'text-combat-damage',
  gathering: 'text-text-amber',
  travel: 'text-chat-party',
  item: 'text-exp-bar',
  player: 'text-chat-party',
};

function actionClass(action: RoomEntityAction): string {
  if (action.disabled) return 'room-action opacity-45 cursor-not-allowed';
  if (action.tone === 'danger') return 'room-action room-action-danger';
  if (action.tone === 'primary') return 'room-action room-action-primary';
  return 'room-action';
}

function EntityRow({
  entity,
  selectedEntity,
  setSelectedEntity,
  onInspectMonster,
  onInspectPlayer,
}: {
  entity: RoomEntity;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  onInspectMonster: (entity: RoomEntity) => void;
  onInspectPlayer: (entity: RoomEntity) => void;
}) {
  const selected = selectedEntity?.id === entity.id && selectedEntity.type === entity.type;
  const imagePath = getEntityImagePath(entity);
  return (
    <div className={`room-row room-entity-row ${selected ? 'room-row-selected' : ''}`}>
      <button
        className="min-w-0 flex-1 text-left flex items-center gap-2"
        onClick={() => setSelectedEntity(entity)}
      >
        {imagePath && (
          <img src={imagePath} alt="" className="asset-thumb" loading="lazy" />
        )}
        <span className="min-w-0">
          <span className={`${TYPE_CLASS[entity.type]} block truncate`}>{entity.label}</span>
          {entity.subtitle && <span className="text-text-dim block truncate">{entity.subtitle}</span>}
          {typeof entity.hp === 'number' && typeof entity.maxHp === 'number' && (
            <span className="text-text-dim block">HP {entity.hp}/{entity.maxHp}</span>
          )}
        </span>
      </button>
      <div className="flex gap-1 shrink-0">
        {entity.actions.map((action) => (
          <button
            key={`${entity.id}-${action.label}-${action.command}`}
            className={actionClass(action)}
            disabled={action.disabled}
            title={action.reason}
            onClick={() => {
              if (action.disabled) return;
              if (entity.type === 'monster' && action.label === '查看') {
                onInspectMonster(entity);
                return;
              }
              if (entity.type === 'player' && action.label === '查看') {
                onInspectPlayer(entity);
                return;
              }
              sendCommand(action.command, `${action.label} ${entity.label}`);
            }}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PlayerTile({
  entity,
  selectedEntity,
  setSelectedEntity,
  onInspectPlayer,
}: {
  entity: RoomEntity;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  onInspectPlayer: (entity: RoomEntity) => void;
}) {
  const selected = selectedEntity?.id === entity.id && selectedEntity.type === entity.type;
  const imagePath = getEntityImagePath(entity);
  return (
    <div className={`room-player-tile ${selected ? 'room-player-tile-selected' : ''}`}>
      <button
        type="button"
        className="room-player-button"
        onClick={() => setSelectedEntity(selected ? null : entity)}
      >
        {imagePath ? (
          <img src={imagePath} alt="" className="room-player-avatar" loading="lazy" />
        ) : (
          <span className="room-player-avatar room-player-avatar-fallback">{entity.label.slice(0, 1)}</span>
        )}
        <span className="room-player-name">{entity.label}</span>
      </button>
      {selected && (
        <div className="room-player-actions">
          {entity.actions.map((action) => (
            <button
              key={`${entity.id}-${action.label}-${action.command}`}
              className={actionClass(action)}
              disabled={action.disabled}
              title={action.reason}
              onClick={() => {
                if (action.disabled) return;
                if (action.label === '查看') {
                  onInspectPlayer(entity);
                  return;
                }
                sendCommand(action.command, `${action.label} ${entity.label}`);
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function RoomPanelView({
  room,
  selectedEntity,
  setSelectedEntity,
  inCombat = false,
  combat = null,
  canScout = false,
  learnedSkills = [],
}: {
  room: RoomInfo;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  inCombat?: ReturnType<typeof useGameStore.getState>['inCombat'];
  combat?: ReturnType<typeof useGameStore.getState>['combat'];
  canScout?: boolean;
  learnedSkills?: ReturnType<typeof useGameStore.getState>['skills'];
}) {
  const [detailMonster, setDetailMonster] = useState<RoomEntity | null>(null);
  const [detailPlayer, setDetailPlayer] = useState<RoomEntity | null>(null);
  const hints = room.inspectHints ?? [];
  const entities = room.entities ?? [];
  const corpses = room.corpses ?? [];
  const corpseLabels = ordinalLabels(corpses);
  const travelNodes = room.travelNodes ?? [];
  const instanceEntries = room.instanceEntries ?? [];
  const hasEntityPayload = entities.length > 0;

  return (
    <div className="room-panel border-b border-border-dim bg-bg-secondary px-3 py-2 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-text-terminal">附近物件</span>
        <button className="text-[10px] text-text-dim hover:text-text-bright" onClick={() => sendCommand('search room', '搜尋房間')}>
          搜尋
        </button>
      </div>

      {hints.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {hints.map((hint) => (
            <button key={hint.command} className="room-chip" onClick={() => sendCommand(hint.command, hint.label)}>
              {hint.label}
            </button>
          ))}
        </div>
      )}

      {instanceEntries.length > 0 && (
        <section className="space-y-1 text-xs">
          <div className="text-[10px] text-text-dim">副本入口</div>
          <div className="grid grid-cols-1 gap-1">
            {instanceEntries.flatMap((entry) => getInstanceEntryDifficultyOptions(entry).map((difficulty) => (
              <button
                key={`${entry.id}-${difficulty}`}
                className={`room-row ${entry.disabled ? 'opacity-45 cursor-not-allowed' : ''}`}
                disabled={entry.disabled}
                title={formatInstanceEntryTooltip(entry, difficulty)}
                onClick={() => {
                  if (entry.disabled) return;
                  const difficultySuffix = difficulty === 'normal' ? '' : ` ${difficulty}`;
                  sendCommand(`${entry.actionCommand ?? `enter ${entry.objectId ?? entry.id}`}${difficultySuffix}`, `${formatInstanceEntryAction(entry)} ${entry.name} ${formatInstanceEntryDifficulty(difficulty)}`);
                }}
              >
                <span className="flex items-center gap-2 text-chat-party">
                  <span aria-hidden="true">{formatInstanceEntryIcon(entry)}</span>
                  <span>{entry.name}</span>
                </span>
                <span className="text-text-dim">{entry.disabled ? '鎖定' : `${formatInstanceEntryAction(entry)} ${formatInstanceEntryDifficulty(difficulty)}`}</span>
              </button>
            )))}
          </div>
        </section>
      )}

      {hasEntityPayload ? (
        <div className="space-y-2 text-xs">
          <CrossRoomCombatPanelView
            room={room}
            inCombat={inCombat}
            combat={combat}
            canScout={canScout}
            learnedSkills={learnedSkills}
            selectedEntity={selectedEntity}
            setSelectedEntity={setSelectedEntity}
          />
          <ApproachingPanel />
          <CombatPanel />
          {SECTION_ORDER.map((type) => {
            if (type === 'exit') return null;
            if (type === 'monster') return null;
            if (type === 'gathering') return null;
            const sectionEntities = entities.filter((entity) => entity.type === type);
            if (sectionEntities.length === 0) return null;
            return (
              <section key={type} className="space-y-1">
                <div className="text-[10px] text-text-dim">{SECTION_LABEL[type]}</div>
                {type === 'player' ? (
                  <div className="room-player-grid">
                    {sectionEntities.map((entity) => (
                      <PlayerTile
                        key={`${entity.type}-${entity.id}`}
                        entity={entity}
                        selectedEntity={selectedEntity}
                        setSelectedEntity={setSelectedEntity}
                        onInspectPlayer={setDetailPlayer}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-1">
                    {sectionEntities.map((entity) => (
                      <EntityRow
                        key={`${entity.type}-${entity.id}`}
                        entity={entity}
                        selectedEntity={selectedEntity}
                        setSelectedEntity={setSelectedEntity}
                        onInspectMonster={setDetailMonster}
                        onInspectPlayer={setDetailPlayer}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-1 text-xs">
          {corpses.map((corpse, index) => (
            <button key={corpse.id} className="room-row" onClick={() => sendCommand(`loot ${corpse.id}`, `搜刮 ${corpse.label ?? corpseLabels[index]}`)}>
              <span className="text-combat-damage">{corpse.label ?? corpseLabels[index]}</span>
              <span className="text-text-dim">{corpse.empty ? '已空' : corpse.protected ? '保護中' : '可搜刮'}</span>
            </button>
          ))}

          {travelNodes.map((node) => (
            <button key={node.id} className="room-row" onClick={() => sendCommand(node.unlocked ? `travel ${node.id}` : 'activate portal', node.unlocked ? `前往 ${node.name}` : `啟用 ${node.name}`)}>
              <span className="text-chat-party">{node.name}</span>
              <span className="text-text-dim">{node.unlocked ? '可旅行' : '可啟用'}</span>
            </button>
          ))}
        </div>
      )}

      {!hasEntityPayload && corpses.length === 0 && travelNodes.length === 0 && instanceEntries.length === 0 && hints.length === 0 && (
        <div className="text-xs text-text-dim">目前沒有明確互動物。</div>
      )}
      {detailMonster && <MonsterDetailModal monster={detailMonster} onClose={() => setDetailMonster(null)} />}
      {detailPlayer && <PlayerDetailModal player={detailPlayer} onClose={() => setDetailPlayer(null)} />}
    </div>
  );
}

function formatInstanceEntryRequirements(entry: NonNullable<RoomInfo['instanceEntries']>[number]): string {
  const requirements: string[] = [];
  if (entry.requiredItemId) {
    const itemName = ITEM_DEFS[entry.requiredItemId]?.name ?? entry.requiredItemId;
    requirements.push(`${itemName}${entry.consumeItem ? '（使用後消耗）' : '（不會消耗）'}`);
  }
  if (entry.requiredQuestId) requirements.push(`任務 ${entry.requiredQuestId}：${formatQuestState(entry.requiredQuestState ?? 'completed')}`);
  return requirements.length > 0 ? requirements.join('、') : '無';
}

function formatInstanceEntryTooltip(entry: NonNullable<RoomInfo['instanceEntries']>[number], selectedDifficulty = 'normal'): string {
  return [
    entry.description,
    `副本：${entry.name}`,
    `入口方式：${formatInstanceEntryAction(entry)}`,
    `選擇難度：${formatInstanceEntryDifficulty(selectedDifficulty)}`,
    `可選難度：${getInstanceEntryDifficultyOptions(entry).map(formatInstanceEntryDifficulty).join('、')}`,
    `建議等級：${entry.minLevel ?? '-'}`,
    `人數：1-${entry.maxPartySize ?? 1}`,
    `需求：${formatInstanceEntryRequirements(entry)}`,
    `冷卻：${entry.cooldownSeconds ?? 0} 秒`,
    entry.disabledReason ? `鎖定原因：${entry.disabledReason}` : '',
  ].filter(Boolean).join('\n');
}

function getInstanceEntryDifficultyOptions(entry: NonNullable<RoomInfo['instanceEntries']>[number]): string[] {
  return entry.difficultyOptions?.length ? entry.difficultyOptions : ['normal'];
}

function formatInstanceEntryDifficulty(difficulty: string): string {
  switch (difficulty) {
    case 'hard': return '困難';
    case 'nightmare': return '夢魘';
    case 'normal':
    default:
      return '普通';
  }
}

function formatInstanceEntryIcon(entry: NonNullable<RoomInfo['instanceEntries']>[number]): string {
  if (entry.type === 'npc_dialogue') return '☉';
  if (entry.type === 'item_use') return '◇';
  return '▣';
}

function formatInstanceEntryAction(entry: NonNullable<RoomInfo['instanceEntries']>[number]): string {
  if (entry.type === 'npc_dialogue') return '對話';
  if (entry.type === 'item_use') return '使用';
  return '進入';
}

function formatQuestState(state: NonNullable<RoomInfo['instanceEntries']>[number]['requiredQuestState']): string {
  switch (state) {
    case 'available': return '可接取';
    case 'active': return '進行中';
    case 'ready': return '可完成';
    case 'completed':
    default:
      return '已完成';
  }
}

export default function RoomPanel() {
  const room = useGameStore((s) => s.room);
  const selectedEntity = useGameStore((s) => s.selectedEntity);
  const setSelectedEntity = useGameStore((s) => s.setSelectedEntity);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  const learnedSkills = useGameStore((s) => s.skills);
  const canScout = learnedSkills.some((skill) => skill.skillId === 'ranger_scout');
  if (!room) return null;
  return <RoomPanelView room={room} selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} inCombat={inCombat} combat={combat} canScout={canScout} learnedSkills={learnedSkills} />;
}
