import { useGameStore } from '../stores/gameStore';

export default function AgentMiniBadge() {
  const selectedAgent = useGameStore((s) => s.selectedAgent);
  const agentPanelOpen = useGameStore((s) => s.agentPanelOpen);
  const agentUnreadCount = useGameStore((s) => s.agentUnreadCount);
  const toggleAgentPanel = useGameStore((s) => s.toggleAgentPanel);

  // Only show when agent is selected but panel is closed
  if (!selectedAgent || agentPanelOpen) return null;

  return (
    <button
      onClick={toggleAgentPanel}
      className="agent-mini-badge"
      title={`${selectedAgent.name} - 按 A 鍵開啟對話`}
    >
      <div className="agent-mini-avatar">
        {selectedAgent.avatar ? (
          <img
            src={selectedAgent.avatar}
            alt={selectedAgent.name}
            className="w-full h-full rounded object-cover"
          />
        ) : (
          <span className="text-agent-cyan text-[10px]">AI</span>
        )}
      </div>
      <span className="text-[10px] text-agent-cyan truncate max-w-16">
        {selectedAgent.name}
      </span>
      {agentUnreadCount > 0 && (
        <span className="agent-unread-dot" />
      )}
    </button>
  );
}
