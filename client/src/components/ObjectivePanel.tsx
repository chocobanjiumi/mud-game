import type { RoomEntity, RoomEntityAction } from '@game/shared';
import { useGameStore } from '../stores/gameStore';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

interface Suggestion {
  label: string;
  command: string;
  tone?: 'danger' | 'default';
}

function findAction(entity: RoomEntity, label: string): RoomEntityAction | undefined {
  return entity.actions.find((action) => action.label === label && !action.disabled);
}

function actionSuggestion(entity: RoomEntity, action: RoomEntityAction, label: string, tone?: Suggestion['tone']): Suggestion {
  return {
    label,
    command: action.command,
    tone: tone ?? (action.tone === 'danger' ? 'danger' : 'default'),
  };
}

export default function ObjectivePanel() {
  const room = useGameStore((s) => s.room);
  const quests = useGameStore((s) => s.activeQuests);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  const selectedCombatTargetId = useGameStore((s) => s.selectedCombatTargetId);

  const suggestions: Suggestion[] = [];
  if (inCombat) {
    const telegraph = combat?.enemyTeam.find(enemy => enemy.pendingTelegraph);
    const selectedEnemy = combat?.enemyTeam.find(enemy => enemy.id === selectedCombatTargetId && !enemy.isDead);
    const firstEnemy = selectedEnemy ?? combat?.enemyTeam.find(enemy => !enemy.isDead);
    if (telegraph?.pendingTelegraph) {
      suggestions.push({ label: `防禦 ${telegraph.name} 的預兆`, command: 'defend', tone: 'danger' });
    }
    if (firstEnemy) {
      suggestions.push({ label: `攻擊 ${firstEnemy.name}`, command: `attack ${firstEnemy.id}`, tone: 'danger' });
    }
  } else {
    const entities = room?.entities ?? [];
    const corpse = entities.find(entity => entity.type === 'corpse' && findAction(entity, '搜刮'));
    const gathering = entities.find(entity => entity.type === 'gathering' && findAction(entity, '採集'));
    const monster = entities.find(entity => entity.type === 'monster' && findAction(entity, '攻擊'));
    const exit = entities.find(entity => entity.type === 'exit' && findAction(entity, '前往'));

    if (corpse) {
      const action = findAction(corpse, '搜刮')!;
      suggestions.push(actionSuggestion(corpse, action, `搜刮 ${corpse.label}`));
    }

    const quest = quests.find(q => q.status === 'active') ?? quests[0];
    if (quest) {
      const step = quest.steps[quest.currentStep];
      suggestions.push({ label: step ? `${quest.name}: ${step.description}` : quest.name, command: 'quest active' });
    }

    if (monster) {
      const action = findAction(monster, '攻擊')!;
      suggestions.push(actionSuggestion(monster, action, `攻擊 ${monster.label}`, 'danger'));
    }
    if (gathering) {
      const action = findAction(gathering, '採集')!;
      suggestions.push(actionSuggestion(gathering, action, `採集 ${gathering.label}`));
    }
    if (exit) {
      const action = findAction(exit, '前往')!;
      suggestions.push(actionSuggestion(exit, action, `前往 ${exit.label}`));
    }
    if (suggestions.length === 0) {
      suggestions.push({ label: '查看四周', command: 'look' });
    }
  }

  return (
    <div className="bg-bg-secondary border border-border-dim rounded p-2">
      <div className="text-xs text-text-dim mb-1">推薦</div>
      <div className="space-y-1">
        {suggestions.slice(0, 3).map((suggestion) => (
          <button
            key={`${suggestion.command}-${suggestion.label}`}
            className={`objective-row ${suggestion.tone === 'danger' ? 'objective-row-danger' : ''}`}
            onClick={() => sendCommand(suggestion.command, suggestion.label)}
          >
            <span className="truncate">{suggestion.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
