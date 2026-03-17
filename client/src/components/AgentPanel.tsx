import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from '../stores/gameStore';

export default function AgentPanel() {
  const agentPanelOpen = useGameStore((s) => s.agentPanelOpen);
  const toggleAgentPanel = useGameStore((s) => s.toggleAgentPanel);
  const selectedAgent = useGameStore((s) => s.selectedAgent);
  const agentMessages = useGameStore((s) => s.agentMessages);
  const addAgentMessage = useGameStore((s) => s.addAgentMessage);
  const removeLastAgentMessage = useGameStore((s) => s.removeLastAgentMessage);
  const setAgentUnreadCount = useGameStore((s) => s.setAgentUnreadCount);
  const accessToken = useGameStore((s) => s.accessToken);
  const addTerminalLine = useGameStore((s) => s.addTerminalLine);

  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [agentMessages, streamingContent]);

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

      // Start streaming
      setIsStreaming(true);
      setStreamingContent('');

      let fullResponse = '';

      try {
        await Arinova.agent.chatStream({
          agentId: selectedAgent.id,
          prompt,
          accessToken,
          onChunk: (chunk: string) => {
            fullResponse += chunk;
            setStreamingContent(fullResponse);
          },
        });

        // Add completed agent message
        addAgentMessage({ role: 'agent', content: fullResponse });

        // Show suggestion in terminal if it looks like game advice
        if (fullResponse.length > 0 && fullResponse.length < 200) {
          addTerminalLine(`[${selectedAgent.name}] ${fullResponse}`, 'agent');
        }

        // Increment unread if panel is closed
        if (!useGameStore.getState().agentPanelOpen) {
          useGameStore.getState().incrementAgentUnread();
        }
      } catch (err) {
        console.error('[Agent] Chat stream error:', err);

        // Clear partial streaming content so fallback starts clean.
        // The streaming content is only in local state, but if a partial agent
        // message was somehow committed to the store, remove it.
        const msgs = useGameStore.getState().agentMessages;
        const lastMsg = msgs[msgs.length - 1];
        if (lastMsg && lastMsg.role === 'agent' && fullResponse.length > 0 && lastMsg.content === fullResponse) {
          removeLastAgentMessage();
        }

        // Fallback to sync chat
        try {
          const result = await Arinova.agent.chat({
            agentId: selectedAgent.id,
            prompt,
            accessToken,
          });
          addAgentMessage({ role: 'agent', content: result.response });

          if (!useGameStore.getState().agentPanelOpen) {
            useGameStore.getState().incrementAgentUnread();
          }
        } catch (syncErr) {
          console.error('[Agent] Sync chat fallback error:', syncErr);
          addAgentMessage({
            role: 'agent',
            content: '抱歉，我暫時無法回應，請稍後再試。',
          });
        }
      } finally {
        setIsStreaming(false);
        setStreamingContent('');
      }
    },
    [inputValue, isStreaming, selectedAgent, accessToken, addAgentMessage, removeLastAgentMessage, addTerminalLine],
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
            <div className="text-xs whitespace-pre-wrap break-words">
              {streamingContent || (
                <span className="agent-typing-indicator">
                  <span className="agent-typing-dot" />
                  <span className="agent-typing-dot" />
                  <span className="agent-typing-dot" />
                </span>
              )}
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
