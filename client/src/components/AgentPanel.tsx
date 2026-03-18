import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react';
import { arinova } from '../App';
import { useGameStore } from '../stores/gameStore';

export default function AgentPanel() {
  const agentPanelOpen = useGameStore((s) => s.agentPanelOpen);
  const toggleAgentPanel = useGameStore((s) => s.toggleAgentPanel);
  const selectedAgent = useGameStore((s) => s.selectedAgent);
  const agentMessages = useGameStore((s) => s.agentMessages);
  const addAgentMessage = useGameStore((s) => s.addAgentMessage);
  const setAgentUnreadCount = useGameStore((s) => s.setAgentUnreadCount);
  const accessToken = useGameStore((s) => s.accessToken);
  const addTerminalLine = useGameStore((s) => s.addTerminalLine);

  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [agentMessages]);

  // Reset unread count when panel opens
  useEffect(() => {
    if (agentPanelOpen) {
      setAgentUnreadCount(0);
    }
  }, [agentPanelOpen, setAgentUnreadCount]);

  // Focus input when panel opens
  useEffect(() => {
    if (agentPanelOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [agentPanelOpen]);

  const handleSend = useCallback(
    async (e?: FormEvent) => {
      if (e) e.preventDefault();
      const prompt = inputValue.trim();
      if (!prompt || isStreaming || !selectedAgent || !accessToken) return;

      setInputValue('');

      // Add user message
      addAgentMessage({ role: 'user', content: prompt });

      setIsStreaming(true);

      try {
        // Build game context for the AI
        const state = useGameStore.getState();
        const char = state.character;
        const room = state.room;
        const contextParts: string[] = [
          '【你是 MUD 冒險世界的 AI 夥伴，正在陪伴玩家一起冒險。請根據遊戲狀態回應。】',
        ];
        if (char) {
          contextParts.push(`玩家：${char.name}（Lv.${char.level} ${char.classId}）HP: ${char.hp}/${char.maxHp}`);
        }
        if (room) {
          contextParts.push(`位置：${room.name} — ${room.description}`);
          if (room.npcs?.length) contextParts.push(`NPC：${room.npcs.map((n: { name: string; title: string }) => `${n.name}(${n.title})`).join('、')}`);
          if (room.monsters?.length) contextParts.push(`怪物：${room.monsters.map((m: { name: string; level: number }) => `${m.name}(Lv.${m.level})`).join('、')}`);
          if (room.exits?.length) contextParts.push(`出口：${room.exits.map((e: { direction: string }) => e.direction).join(', ')}`);
        }
        const contextStr = contextParts.join('\n');
        const fullPrompt = `${contextStr}\n\n玩家說：${prompt}`;

        // v0.1.3: use apiFetch instead of Arinova.agent.chatStream
        const res = await arinova.apiFetch('/api/v1/agent/chat', {
          method: 'POST',
          body: JSON.stringify({ agentId: selectedAgent.id, prompt: fullPrompt }),
        });

        const data = res as { response?: string };
        const response = data.response ?? '';

        // Add agent message
        addAgentMessage({ role: 'agent', content: response });

        // Show suggestion in terminal if short
        if (response.length > 0 && response.length < 200) {
          addTerminalLine(`[${selectedAgent.name}] ${response}`, 'agent');
        }

        // Increment unread if panel is closed
        if (!useGameStore.getState().agentPanelOpen) {
          useGameStore.getState().incrementAgentUnread();
        }
      } catch (err) {
        console.error('[Agent] Chat error:', err);
        addAgentMessage({
          role: 'agent',
          content: '抱歉，我暫時無法回應，請稍後再試。',
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [inputValue, isStreaming, selectedAgent, accessToken, addAgentMessage, addTerminalLine],
  );

  if (!agentPanelOpen || !selectedAgent) return null;

  return (
    <div className="agent-panel panel-enter">
      {/* Header */}
      <div className="agent-panel-header">
        <div className="flex items-center gap-2 min-w-0">
          <div className="agent-panel-avatar-small">
            {selectedAgent.avatar ? (
              <img
                src={selectedAgent.avatar}
                alt={selectedAgent.name}
                className="w-full h-full rounded object-cover"
              />
            ) : (
              <span className="text-agent-cyan text-xs">AI</span>
            )}
          </div>
          <span className="text-xs font-bold text-agent-cyan truncate">
            {selectedAgent.name}
          </span>
        </div>
        <button
          onClick={toggleAgentPanel}
          className="text-text-dim hover:text-text-bright text-xs cursor-pointer shrink-0"
        >
          [關閉]
        </button>
      </div>

      {/* Messages */}
      <div className="agent-panel-messages">
        {agentMessages.length === 0 && !isStreaming && (
          <div className="text-center py-6">
            <div className="text-text-dim text-xs mb-2">
              {selectedAgent.name} 已就緒
            </div>
            <div className="text-text-dim text-[10px]">
              輸入訊息開始對話，詢問冒險建議或聊天
            </div>
          </div>
        )}

        {agentMessages.map((msg, i) => (
          <div
            key={i}
            className={`agent-message ${
              msg.role === 'user' ? 'agent-message-user' : 'agent-message-agent'
            }`}
          >
            {msg.role === 'agent' && (
              <div className="text-[10px] text-agent-cyan mb-0.5 font-bold">
                {selectedAgent.name}
              </div>
            )}
            <div className="text-xs whitespace-pre-wrap break-words">{msg.content}</div>
            <div className="text-[9px] text-text-dim mt-0.5">
              {new Date(msg.timestamp).toLocaleTimeString('zh-TW', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}

        {/* Streaming indicator */}
        {isStreaming && (
          <div className="agent-message agent-message-agent">
            <div className="text-[10px] text-agent-cyan mb-0.5 font-bold">
              {selectedAgent.name}
            </div>
            <div className="text-xs">
              <span className="agent-typing-indicator">
                <span className="agent-typing-dot" />
                <span className="agent-typing-dot" />
                <span className="agent-typing-dot" />
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="agent-panel-input">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isStreaming ? '等待回應中...' : '輸入訊息...'}
          disabled={isStreaming}
          className="flex-1 bg-bg-primary border border-border-dim rounded px-2 py-1.5 text-xs text-text-bright outline-none focus:border-agent-cyan/50 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isStreaming}
          className={`shrink-0 px-2 py-1.5 text-xs rounded border cursor-pointer transition-colors ${
            inputValue.trim() && !isStreaming
              ? 'border-agent-cyan/40 bg-agent-cyan/10 text-agent-cyan hover:bg-agent-cyan/20'
              : 'border-border-dim bg-bg-tertiary text-text-dim cursor-not-allowed'
          }`}
        >
          送出
        </button>
      </form>
    </div>
  );
}
