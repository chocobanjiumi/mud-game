import type { RoomEntity, RoomEntityAction, RoomEntityType } from '@game/shared';
import { useState } from 'react';
import { useGameStore, type RoomInfo } from '../stores/gameStore';
import { getEntityImagePath } from '../utils/assetImages';
import MonsterDetailModal from './MonsterDetailModal';
import { CrossRoomCombatPanelView } from './CrossRoomCombatPanel';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
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
}: {
  entity: RoomEntity;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  onInspectMonster: (entity: RoomEntity) => void;
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

export function RoomPanelView({
  room,
  selectedEntity,
  setSelectedEntity,
  inCombat = false,
  combat = null,
  canScout = false,
}: {
  room: RoomInfo;
  selectedEntity: RoomEntity | null;
  setSelectedEntity: (entity: RoomEntity | null) => void;
  inCombat?: ReturnType<typeof useGameStore.getState>['inCombat'];
  combat?: ReturnType<typeof useGameStore.getState>['combat'];
  canScout?: boolean;
}) {
  const [detailMonster, setDetailMonster] = useState<RoomEntity | null>(null);
  const hints = room.inspectHints ?? [];
  const entities = room.entities ?? [];
  const corpses = room.corpses ?? [];
  const corpseLabels = ordinalLabels(corpses);
  const nodes = room.gatheringNodes ?? [];
  const travelNodes = room.travelNodes ?? [];
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

      {hasEntityPayload ? (
        <div className="space-y-2 text-xs">
          <CrossRoomCombatPanelView room={room} inCombat={inCombat} combat={combat} canScout={canScout} />
          {SECTION_ORDER.map((type) => {
            if (type === 'exit') return null;
            if (type === 'monster') return null;
            const sectionEntities = entities.filter((entity) => entity.type === type);
            if (sectionEntities.length === 0) return null;
            return (
              <section key={type} className="space-y-1">
                <div className="text-[10px] text-text-dim">{SECTION_LABEL[type]}</div>
                <div className="grid grid-cols-1 gap-1">
                  {sectionEntities.map((entity) => (
                    <EntityRow
                      key={`${entity.type}-${entity.id}`}
                      entity={entity}
                      selectedEntity={selectedEntity}
                      setSelectedEntity={setSelectedEntity}
                      onInspectMonster={setDetailMonster}
                    />
                  ))}
                </div>
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

          {nodes.map((node) => (
            <button key={node.id} className="room-row" onClick={() => sendCommand(`gather ${node.id}`, `採集 ${node.name}`)}>
              <span className="text-text-amber">{node.name}</span>
              <span className="text-text-dim">{node.skill} Lv.{node.levelMin}</span>
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

      {!hasEntityPayload && corpses.length === 0 && nodes.length === 0 && travelNodes.length === 0 && hints.length === 0 && (
        <div className="text-xs text-text-dim">目前沒有明確互動物。</div>
      )}
      {detailMonster && <MonsterDetailModal monster={detailMonster} onClose={() => setDetailMonster(null)} />}
    </div>
  );
}

export default function RoomPanel() {
  const room = useGameStore((s) => s.room);
  const selectedEntity = useGameStore((s) => s.selectedEntity);
  const setSelectedEntity = useGameStore((s) => s.setSelectedEntity);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  const canScout = useGameStore((s) => s.skills.some((skill) => skill.skillId === 'ranger_scout'));
  if (!room) return null;
  return <RoomPanelView room={room} selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} inCombat={inCombat} combat={combat} canScout={canScout} />;
}
