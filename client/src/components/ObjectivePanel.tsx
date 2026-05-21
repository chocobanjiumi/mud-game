import { useGameStore } from '../stores/gameStore';

function sendCommand(command: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: command }));
}

export default function ObjectivePanel() {
  const room = useGameStore((s) => s.room);
  const quests = useGameStore((s) => s.activeQuests);
  const inCombat = useGameStore((s) => s.inCombat);
  const combat = useGameStore((s) => s.combat);

  const suggestions: { label: string; command: string; tone?: string }[] = [];
  if (inCombat) {
    const telegraph = combat?.enemyTeam.find(enemy => enemy.pendingTelegraph);
    if (telegraph?.pendingTelegraph) {
      suggestions.push({ label: `${telegraph.name} 預兆：${telegraph.pendingTelegraph.skillId}`, command: 'defend', tone: 'danger' });
    } else {
      suggestions.push({ label: '選擇戰鬥行動', command: 'attack', tone: 'danger' });
    }
  } else if (room?.corpses?.some(corpse => !corpse.empty)) {
    suggestions.push({ label: '搜刮屍體', command: 'loot corpse' });
  } else if (room?.gatheringNodes?.length) {
    suggestions.push({ label: `採集 ${room.gatheringNodes[0].name}`, command: `gather ${room.gatheringNodes[0].id}` });
  } else if (room?.monsters?.length) {
    suggestions.push({ label: `攻擊 ${room.monsters[0].name}`, command: `attack ${room.monsters[0].name}`, tone: 'danger' });
  } else if (quests.length > 0) {
    const quest = quests.find(q => q.status === 'active') ?? quests[0];
    const step = quest.steps[quest.currentStep];
    suggestions.push({ label: step ? `${quest.name}: ${step.description}` : quest.name, command: 'quest active' });
  } else if (room?.exits?.length) {
    suggestions.push({ label: '探索下一個房間', command: `go ${room.exits[0].direction}` });
  } else {
    suggestions.push({ label: '查看四周', command: 'look' });
  }

  return (
    <div className="bg-bg-secondary border border-border-dim rounded p-2">
      <div className="text-xs text-text-dim mb-1">目標</div>
      <div className="space-y-1">
        {suggestions.slice(0, 2).map((suggestion) => (
          <button
            key={`${suggestion.command}-${suggestion.label}`}
            className={`objective-row ${suggestion.tone === 'danger' ? 'objective-row-danger' : ''}`}
            onClick={() => sendCommand(suggestion.command)}
          >
            <span className="truncate">{suggestion.label}</span>
            <span className="text-[10px] text-text-dim shrink-0">{suggestion.command}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
