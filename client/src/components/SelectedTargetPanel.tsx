import type { RoomEntityAction, RoomEntityType } from '@game/shared';
import { useGameStore } from '../stores/gameStore';
import { getEntityImagePath } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

const TYPE_LABEL: Record<RoomEntityType, string> = {
  exit: '出口',
  monster: '怪物',
  npc: 'NPC',
  corpse: '屍體',
  gathering: '採集點',
  travel: '傳送點',
  item: '物品',
  player: '玩家',
};

function actionClass(action: RoomEntityAction): string {
  if (action.disabled) return 'target-action opacity-45 cursor-not-allowed';
  if (action.tone === 'danger') return 'target-action target-action-danger';
  if (action.tone === 'primary') return 'target-action target-action-primary';
  return 'target-action';
}

export default function SelectedTargetPanel() {
  const entity = useGameStore((s) => s.selectedEntity);
  const setSelectedEntity = useGameStore((s) => s.setSelectedEntity);

  if (!entity) {
    return (
      <div className="selected-target-panel border-b border-border-dim px-3 py-2">
        <div className="text-xs font-bold text-text-terminal">目標</div>
        <div className="mt-1 text-xs text-text-dim">選擇附近物件以查看可用行動。</div>
      </div>
    );
  }

  const imagePath = getEntityImagePath(entity);

  return (
    <div className="selected-target-panel border-b border-border-dim px-3 py-2 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex items-center gap-2">
          {imagePath && <img src={imagePath} alt="" className="asset-preview" loading="lazy" />}
          <div className="min-w-0">
            <div className="text-xs text-text-dim">{TYPE_LABEL[entity.type]}</div>
            <div className="text-sm font-bold text-text-bright truncate">{entity.label}</div>
            {entity.subtitle && <div className="text-xs text-text-dim truncate">{entity.subtitle}</div>}
          </div>
        </div>
        <button className="text-[10px] text-text-dim hover:text-text-bright" onClick={() => setSelectedEntity(null)}>
          clear
        </button>
      </div>

      {typeof entity.hp === 'number' && typeof entity.maxHp === 'number' && (
        <div>
          <div className="flex justify-between text-[10px] text-text-dim">
            <span>HP</span>
            <span>{entity.hp}/{entity.maxHp}</span>
          </div>
          <div className="h-1.5 bg-bg-tertiary border border-border-dim">
            <div
              className="h-full bg-combat-damage"
              style={{ width: `${Math.max(0, Math.min(100, (entity.hp / Math.max(1, entity.maxHp)) * 100))}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-1">
        {entity.actions.map((action) => (
          <button
            key={`${action.label}-${action.command}`}
            className={actionClass(action)}
            disabled={action.disabled}
            title={action.reason}
            onClick={() => !action.disabled && sendCommand(action.command, `${action.label} ${entity.label}`)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
