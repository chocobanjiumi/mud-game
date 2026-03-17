import { useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { QuestCategory, Quest } from '../stores/gameStore';

const TABS: { key: QuestCategory; label: string }[] = [
  { key: 'main', label: '主線' },
  { key: 'side', label: '支線' },
  { key: 'daily', label: '每日' },
  { key: 'weekly', label: '每週' },
];

function QuestProgressBar({ current, target }: { current: number; target: number }) {
  const pct = target > 0 ? Math.min(100, (current / target) * 100) : 0;
  return (
    <div className="quest-progress-bar-bg">
      <div className="quest-progress-bar-fill" style={{ width: `${pct}%` }} />
      <span className="quest-progress-bar-text">
        {current}/{target}
      </span>
    </div>
  );
}

function QuestItem({ quest }: { quest: Quest }) {
  const [expanded, setExpanded] = useState(false);
  const isCompleted = quest.status === 'completed';
  const currentStepObj = quest.steps[quest.currentStep];

  return (
    <div
      className={`quest-item ${isCompleted ? 'quest-item-completed' : ''} ${quest.status === 'active' ? 'quest-item-active' : ''}`}
    >
      <button
        className="quest-item-header"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="quest-item-expand">{expanded ? '[-]' : '[+]'}</span>
        <span className={`quest-item-name ${isCompleted ? 'line-through text-text-dim' : 'text-text-bright'}`}>
          {quest.name}
        </span>
        <span className={`quest-item-status ${isCompleted ? 'text-combat-heal' : 'text-text-amber'}`}>
          {isCompleted ? '已完成' : '進行中'}
        </span>
      </button>

      {/* Progress for current step */}
      {!isCompleted && currentStepObj && (
        <div className="quest-item-progress">
          <div className="text-[10px] text-text-dim mb-0.5 truncate">{currentStepObj.description}</div>
          <QuestProgressBar current={currentStepObj.current} target={currentStepObj.target} />
        </div>
      )}

      {/* Collapsible details */}
      {expanded && (
        <div className="quest-item-details">
          <div className="text-xs text-text-dim mb-1">{quest.description}</div>
          <div className="space-y-1">
            {quest.steps.map((step, i) => {
              const done = i < quest.currentStep || isCompleted;
              const isCurrent = i === quest.currentStep && !isCompleted;
              return (
                <div
                  key={i}
                  className={`quest-step ${done ? 'quest-step-done' : ''} ${isCurrent ? 'quest-step-current' : ''}`}
                >
                  <span className="quest-step-marker">{done ? '[v]' : isCurrent ? '[>]' : '[ ]'}</span>
                  <span className="flex-1 truncate">{step.description}</span>
                  <span className="text-[10px] tabular-nums shrink-0">
                    {step.current}/{step.target}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuestLog() {
  const questLogOpen = useGameStore((s) => s.questLogOpen);
  const setQuestLogOpen = useGameStore((s) => s.setQuestLogOpen);
  const activeQuests = useGameStore((s) => s.activeQuests);
  const [selectedTab, setSelectedTab] = useState<QuestCategory>('main');

  if (!questLogOpen) return null;

  const filteredQuests = activeQuests.filter((q) => q.category === selectedTab);
  const activeCount = filteredQuests.filter((q) => q.status === 'active').length;

  return (
    <div className="quest-log-overlay" onClick={() => setQuestLogOpen(false)}>
      <div className="quest-log-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="quest-log-header">
          <span className="text-sm font-bold text-text-terminal">任務日誌</span>
          <button
            onClick={() => setQuestLogOpen(false)}
            className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
          >
            [關閉] Q
          </button>
        </div>

        {/* Tabs */}
        <div className="quest-log-tabs">
          {TABS.map((tab) => {
            const count = activeQuests.filter((q) => q.category === tab.key && q.status === 'active').length;
            return (
              <button
                key={tab.key}
                className={`quest-log-tab ${selectedTab === tab.key ? 'quest-log-tab-active' : ''}`}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
                {count > 0 && <span className="quest-tab-count">{count}</span>}
              </button>
            );
          })}
        </div>

        {/* Quest list */}
        <div className="quest-log-body">
          {filteredQuests.length === 0 ? (
            <div className="text-xs text-text-dim italic text-center py-8">
              目前沒有{TABS.find((t) => t.key === selectedTab)?.label}任務
            </div>
          ) : (
            <div className="space-y-1 p-2">
              <div className="text-[10px] text-text-dim px-1 mb-1">
                進行中: {activeCount} / 全部: {filteredQuests.length}
              </div>
              {filteredQuests.map((quest) => (
                <QuestItem key={quest.id} quest={quest} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
