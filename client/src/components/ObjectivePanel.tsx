import { SKILL_DEFS, type RoomEntity, type RoomEntityAction } from '@game/shared';
import { useGameStore, type CombatInfo, type Quest, type RoomInfo } from '../stores/gameStore';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export interface ObjectiveSuggestion {
  label: string;
  command?: string;
  tone?: 'danger' | 'default';
}

function findAction(entity: RoomEntity, label: string): RoomEntityAction | undefined {
  return entity.actions.find((action) => action.label === label && !action.disabled);
}

function actionSuggestion(entity: RoomEntity, action: RoomEntityAction, label: string, tone?: ObjectiveSuggestion['tone']): ObjectiveSuggestion {
  return {
    label,
    command: action.command,
    tone: tone ?? (action.tone === 'danger' ? 'danger' : 'default'),
  };
}

function textMatchesEntity(text: string, entity: RoomEntity): boolean {
  return text.includes(entity.label.replace(/#\d+/, ''))
    || (entity.subtitle ? text.includes(entity.subtitle.split('·')[0].trim()) : false);
}

function questActionSuggestion(text: string, entities: RoomEntity[]): ObjectiveSuggestion | null {
  const wantsKill = /擊殺|消滅|打倒|kill|defeat/i.test(text);
  const wantsLoot = /搜刮|loot|屍體/i.test(text);
  const wantsTalk = /交談|對話|談|talk|回報/i.test(text);
  const wantsGather = /採集|收集|collect|gather/i.test(text);
  const wantsInspect = /檢查|調查|inspect|搜尋|search/i.test(text);
  const wantsVisit = /前往|抵達|到達|visit|travel/i.test(text);

  const byType = (type: RoomEntity['type'], actionLabel: string) => (
    entities.find(entity => entity.type === type && textMatchesEntity(text, entity) && findAction(entity, actionLabel))
    ?? entities.find(entity => entity.type === type && findAction(entity, actionLabel))
  );

  if (wantsLoot) {
    const corpse = byType('corpse', '搜刮');
    const action = corpse ? findAction(corpse, '搜刮') : undefined;
    if (corpse && action) return actionSuggestion(corpse, action, `搜刮 ${corpse.label}`);
  }
  if (wantsTalk) {
    const npc = byType('npc', '對話');
    const action = npc ? findAction(npc, '對話') : undefined;
    if (npc && action) return actionSuggestion(npc, action, `對話 ${npc.label}`);
  }
  if (wantsKill) {
    const monster = byType('monster', '攻擊');
    const action = monster ? findAction(monster, '攻擊') : undefined;
    if (monster && action) return actionSuggestion(monster, action, `攻擊 ${monster.label}`, 'danger');
  }
  if (wantsGather) {
    const gathering = byType('gathering', '採集');
    const action = gathering ? findAction(gathering, '採集') : undefined;
    if (gathering && action) return actionSuggestion(gathering, action, `採集 ${gathering.label}`);

    const item = byType('item', '拾取');
    const itemAction = item ? findAction(item, '拾取') : undefined;
    if (item && itemAction) return actionSuggestion(item, itemAction, `拾取 ${item.label}`);
  }
  if (wantsInspect) {
    const inspectable = entities.find(entity => textMatchesEntity(text, entity) && findAction(entity, '查看'));
    const action = inspectable ? findAction(inspectable, '查看') : undefined;
    if (inspectable && action) return actionSuggestion(inspectable, action, `查看 ${inspectable.label}`);
  }
  if (wantsVisit) {
    const travel = entities.find(entity => entity.type === 'travel' && textMatchesEntity(text, entity) && findAction(entity, '旅行'));
    const travelAction = travel ? findAction(travel, '旅行') : undefined;
    if (travel && travelAction) return actionSuggestion(travel, travelAction, `前往 ${travel.label}`);

    const exit = entities.find(entity => entity.type === 'exit' && textMatchesEntity(text, entity) && findAction(entity, '前往'));
    const exitAction = exit ? findAction(exit, '前往') : undefined;
    if (exit && exitAction) return actionSuggestion(exit, exitAction, `前往 ${exit.label}`);
  }

  return null;
}

export function buildObjectiveSuggestions(input: {
  room: RoomInfo | null;
  quests: Quest[];
  inCombat: boolean;
  combat: CombatInfo | null;
  selectedCombatTargetId: string | null;
  skills: ReturnType<typeof useGameStore.getState>['skills'];
}): ObjectiveSuggestion[] {
  const { room, quests, inCombat, combat, selectedCombatTargetId, skills } = input;
  const suggestions: ObjectiveSuggestion[] = [];
  if (inCombat) {
    const telegraph = combat?.enemyTeam.find(enemy => enemy.pendingTelegraph);
    const selectedEnemy = combat?.enemyTeam.find(enemy => enemy.id === selectedCombatTargetId && !enemy.isDead);
    const firstEnemy = selectedEnemy ?? combat?.enemyTeam.find(enemy => !enemy.isDead);
    if (telegraph?.pendingTelegraph) {
      suggestions.push({ label: `防禦 ${telegraph.name} 的預兆`, command: 'defend', tone: 'danger' });
      const interrupt = skills.find(skill => skill.currentCooldown <= 0 && SKILL_DEFS[skill.skillId]?.tags.includes('interrupt'));
      if (interrupt) {
        const def = SKILL_DEFS[interrupt.skillId];
        suggestions.push({
          label: `打斷 ${telegraph.name}`,
          command: `skill ${interrupt.skillId} ${telegraph.id}`,
          tone: 'danger',
        });
        if (def) suggestions[suggestions.length - 1].label = `打斷 ${telegraph.name}: ${def.name}`;
      }
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
      const questText = step ? `${quest.name}: ${step.description}` : quest.name;
      const questAction = step ? questActionSuggestion(step.description, entities) : null;
      suggestions.push(questAction ?? { label: questText, command: undefined });
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
  return suggestions;
}

export function ObjectivePanelView({ suggestions }: { suggestions: ObjectiveSuggestion[] }) {
  return (
    <div className="bg-bg-secondary border border-border-dim rounded p-2">
      <div className="text-xs text-text-dim mb-1">推薦</div>
      <div className="space-y-1">
        {suggestions.slice(0, 3).map((suggestion) => (
          <button
            key={`${suggestion.command}-${suggestion.label}`}
            className={`objective-row ${suggestion.tone === 'danger' ? 'objective-row-danger' : ''}`}
            disabled={!suggestion.command}
            onClick={() => suggestion.command && sendCommand(suggestion.command, suggestion.label)}
          >
            <span className="truncate">{suggestion.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ObjectivePanel() {
  const room = useGameStore((s) => s.room);
  const quests = useGameStore((s) => s.activeQuests);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);
  const selectedCombatTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const skills = useGameStore((s) => s.skills);
  return (
    <ObjectivePanelView
      suggestions={buildObjectiveSuggestions({ room, quests, inCombat, combat, selectedCombatTargetId, skills })}
    />
  );
}
