import { useState, useEffect } from 'react';
import { arinova } from '../App';
import { useGameStore } from '../stores/gameStore';
import type { AgentInfo } from '@game/shared';

/** Map SDK agent shape to our game's AgentInfo */
function toGameAgent(sdk: { id: string; name: string; avatarUrl?: string; description?: string }): AgentInfo {
  return {
    id: sdk.id,
    name: sdk.name,
    avatar: sdk.avatarUrl ?? undefined,
    description: sdk.description ?? undefined,
  };
}

export default function AgentSelectModal() {
  const showAgentSelect = useGameStore((s) => s.showAgentSelect);
  const setShowAgentSelect = useGameStore((s) => s.setShowAgentSelect);
  const setSelectedAgent = useGameStore((s) => s.setSelectedAgent);
  const accessToken = useGameStore((s) => s.accessToken);
  const addTerminalLine = useGameStore((s) => s.addTerminalLine);

  const [agents, setAgents] = useState<AgentInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!showAgentSelect || !accessToken) return;

    setLoading(true);
    setError(null);

    // v0.1.3: use apiFetch instead of Arinova.user.agents()
    arinova.apiFetch('/api/v1/user/agents')
      .then((data) => {
        // API may return array directly or { agents: [...] }
        const arr = Array.isArray(data) ? data : (data as { agents?: unknown[] })?.agents;
        if (!Array.isArray(arr)) {
          throw new Error('invalid_agents_response');
        }
        const sdkAgents = arr as { id: string; name: string; avatarUrl?: string; description?: string }[];
        setAgents(sdkAgents.map(toGameAgent));
      })
      .catch((err: unknown) => {
        console.error('[Agent] Failed to fetch agents:', err);
        setError('無法載入 AI 夥伴列表');
      })
      .finally(() => setLoading(false));
  }, [showAgentSelect, accessToken]);

  if (!showAgentSelect) return null;

  const handleSelect = (agent: AgentInfo) => {
    setSelectedAgent(agent);
    setShowAgentSelect(false);
    addTerminalLine(`[系統] 已選擇 AI 夥伴：${agent.name}`, 'agent');
  };

  const handleSkip = () => {
    setSelectedAgent(null);
    setShowAgentSelect(false);
    addTerminalLine('[系統] 未選擇 AI 夥伴，可稍後按 A 鍵開啟。', 'system');
  };

  return (
    <>
      <div className="agent-select-overlay" onClick={handleSkip} />
      <div className="agent-select-modal">
        {/* Header */}
        <div className="agent-select-header">
          <span className="text-sm font-bold text-agent-cyan">選擇 AI 夥伴</span>
          <button
            onClick={handleSkip}
            className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
          >
            [跳過]
          </button>
        </div>

        {/* Body */}
        <div className="agent-select-body">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <span className="text-text-dim text-sm animate-pulse">載入中...</span>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <span className="text-combat-damage text-sm">{error}</span>
              <button
                onClick={handleSkip}
                className="text-xs text-text-dim hover:text-text-terminal cursor-pointer"
              >
                跳過，稍後再試
              </button>
            </div>
          )}

          {!loading && !error && agents.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <span className="text-text-dim text-sm">尚未綁定任何 AI 夥伴</span>
              <span className="text-text-dim text-xs">請到 Arinova 平台設定你的 Agent</span>
              <button
                onClick={handleSkip}
                className="mt-2 text-xs text-text-dim hover:text-text-terminal cursor-pointer border border-border-dim px-3 py-1 rounded"
              >
                跳過
              </button>
            </div>
          )}

          {!loading && !error && agents.length > 0 && (
            <div className="space-y-2 p-3">
              <p className="text-text-dim text-xs mb-3">
                選擇一個 AI 夥伴陪你冒險，它會在旅途中提供建議與對話。
              </p>
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="agent-select-card"
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="agent-select-avatar">
                      {agent.avatar ? (
                        <img
                          src={agent.avatar}
                          alt={agent.name}
                          className="w-full h-full rounded object-cover"
                        />
                      ) : (
                        <span className="text-agent-cyan text-lg">AI</span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-text-bright text-sm font-bold truncate">
                        {agent.name}
                      </div>
                      {agent.description && (
                        <div className="text-text-dim text-xs mt-0.5 line-clamp-2">
                          {agent.description}
                        </div>
                      )}
                    </div>

                    {/* Select button */}
                    <button
                      onClick={() => handleSelect(agent)}
                      className="shrink-0 px-3 py-1.5 text-xs font-bold rounded border border-agent-cyan/40 bg-agent-cyan/10 text-agent-cyan hover:bg-agent-cyan/20 cursor-pointer transition-colors"
                    >
                      選擇
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="agent-select-footer">
          <button
            onClick={handleSkip}
            className="text-xs text-text-dim hover:text-text-terminal cursor-pointer"
          >
            不需要 AI 夥伴，直接開始冒險
          </button>
        </div>
      </div>
    </>
  );
}
