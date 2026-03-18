import { useCallback } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { LeaderboardTab } from '../stores/gameStore';

const TAB_CONFIG: { key: LeaderboardTab; label: string }[] = [
  { key: 'level', label: '等級' },
  { key: 'pvp', label: 'PvP' },
  { key: 'dungeon_speed', label: '速通' },
];

const CLASS_ICONS: Record<string, string> = {
  adventurer: '⚔',
  swordsman: '🗡',
  mage: '🔮',
  ranger: '🏹',
  priest: '✝',
  knight: '🛡',
  berserker: '💢',
  sword_saint: '⚔',
  archmage: '🌟',
  warlock: '👁',
  chronomancer: '⏳',
  marksman: '🎯',
  assassin: '🗡',
  beast_master: '🐾',
  high_priest: '☀',
  druid: '🌿',
  inquisitor: '⚖',
};

export default function LeaderboardPanel() {
  const leaderboardOpen = useGameStore((s) => s.leaderboardOpen);
  const leaderboardData = useGameStore((s) => s.leaderboardData);
  const leaderboardTab = useGameStore((s) => s.leaderboardTab);
  const setLeaderboardOpen = useGameStore((s) => s.setLeaderboardOpen);
  const setLeaderboardTab = useGameStore((s) => s.setLeaderboardTab);
  const character = useGameStore((s) => s.character);

  const handleTabChange = useCallback(
    (tab: LeaderboardTab) => {
      setLeaderboardTab(tab);
      // Dispatch event for useWebSocket to handle
      window.dispatchEvent(new CustomEvent('leaderboard-request', { detail: { category: tab } }));
    },
    [setLeaderboardTab],
  );

  const handleRefresh = useCallback(() => {
    window.dispatchEvent(new CustomEvent('leaderboard-request', { detail: { category: leaderboardTab } }));
  }, [leaderboardTab]);

  if (!leaderboardOpen) return null;

  const entries = leaderboardData[leaderboardTab] ?? [];

  const valueLabel = leaderboardTab === 'level' ? 'Lv'
    : leaderboardTab === 'pvp' ? '積分'
    : '時間';

  return (
    <>
      <div className="leaderboard-overlay" onClick={() => setLeaderboardOpen(false)} />
      <div className="leaderboard-modal">
        {/* Header */}
        <div className="leaderboard-header">
          <span className="text-text-terminal font-bold text-sm">排行榜</span>
          <button
            className="text-text-dim hover:text-text-bright text-sm cursor-pointer"
            onClick={() => setLeaderboardOpen(false)}
          >
            [X]
          </button>
        </div>

        {/* Tabs */}
        <div className="leaderboard-tabs">
          {TAB_CONFIG.map((tab) => (
            <button
              key={tab.key}
              className={`leaderboard-tab cursor-pointer ${leaderboardTab === tab.key ? 'leaderboard-tab-active' : ''}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="leaderboard-body">
          {/* Table header */}
          <div className="leaderboard-table-header">
            <span className="leaderboard-col-rank">#</span>
            <span className="leaderboard-col-name">玩家</span>
            <span className="leaderboard-col-value">{valueLabel}</span>
            <span className="leaderboard-col-class">職業</span>
          </div>

          {entries.length === 0 ? (
            <div className="text-center text-text-dim text-xs py-8">
              暫無數據
            </div>
          ) : (
            entries.map((entry, i) => {
              const isCurrentPlayer = character && entry.characterId === character.id;
              const rank = i + 1;
              const rankClass = rank === 1 ? 'leaderboard-rank-gold'
                : rank === 2 ? 'leaderboard-rank-silver'
                : rank === 3 ? 'leaderboard-rank-bronze'
                : '';

              return (
                <div
                  key={entry.characterId}
                  className={`leaderboard-row ${isCurrentPlayer ? 'leaderboard-row-current' : ''}`}
                >
                  <span className={`leaderboard-col-rank ${rankClass}`}>
                    {rank}
                  </span>
                  <span className="leaderboard-col-name text-text-bright">
                    {entry.name}
                  </span>
                  <span className="leaderboard-col-value text-text-amber tabular-nums">
                    {leaderboardTab === 'dungeon_speed'
                      ? `${Math.floor(entry.score / 60)}m ${entry.score % 60}s`
                      : entry.score.toLocaleString()}
                  </span>
                  <span className="leaderboard-col-class">
                    {CLASS_ICONS[entry.classId] ?? '?'}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with refresh */}
        <div className="leaderboard-footer">
          <button
            className="text-text-dim hover:text-text-terminal text-xs cursor-pointer"
            onClick={handleRefresh}
          >
            [重新整理]
          </button>
          <span className="text-text-dim text-[10px]">按 L 關閉</span>
        </div>
      </div>
    </>
  );
}
