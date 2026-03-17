import { useState, useRef, useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { ChatChannel, ChatMessage } from '../stores/gameStore';

const CHANNEL_TABS: { key: ChatChannel; label: string; color: string }[] = [
  { key: 'room', label: '區域', color: 'var(--color-chat-room)' },
  { key: 'party', label: '隊伍', color: 'var(--color-chat-party)' },
  { key: 'global', label: '全域', color: 'var(--color-chat-global)' },
  { key: 'kingdom', label: '王國', color: 'var(--color-text-amber)' },
];

interface ChatPanelProps {
  onSendChat: (channel: ChatChannel, message: string) => void;
}

function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  const channelInfo = CHANNEL_TABS.find((c) => c.key === msg.channel);
  const color = channelInfo?.color ?? 'var(--color-text-terminal)';
  const time = new Date(msg.timestamp);
  const timeStr = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="chat-message-item">
      <span className="chat-message-time">{timeStr}</span>
      <span className="chat-message-sender" style={{ color }}>
        {msg.senderName}
      </span>
      <span className="chat-message-text">{msg.message}</span>
    </div>
  );
}

export default function ChatPanel({ onSendChat }: ChatPanelProps) {
  const chatPanelOpen = useGameStore((s) => s.chatPanelOpen);
  const toggleChatPanel = useGameStore((s) => s.toggleChatPanel);
  const chatChannel = useGameStore((s) => s.chatChannel);
  const setChatChannel = useGameStore((s) => s.setChatChannel);
  const chatMessagesByChannel = useGameStore((s) => s.chatMessagesByChannel);
  const chatUnreadCounts = useGameStore((s) => s.chatUnreadCounts);
  const resetChatUnread = useGameStore((s) => s.resetChatUnread);

  const [inputValue, setInputValue] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentMessages = chatMessagesByChannel[chatChannel] ?? [];

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [currentMessages]);

  // Reset unread when switching channels
  const handleTabClick = (channel: ChatChannel) => {
    setChatChannel(channel);
    resetChatUnread(channel);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = inputValue.trim();
    if (!msg) return;
    onSendChat(chatChannel, msg);
    setInputValue('');
    inputRef.current?.focus();
  };

  if (!chatPanelOpen) return null;

  return (
    <div className="chat-panel panel-enter">
      {/* Header */}
      <div className="chat-panel-header">
        <span className="text-xs font-bold text-text-terminal">聊天頻道</span>
        <button
          onClick={toggleChatPanel}
          className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
        >
          [關閉]
        </button>
      </div>

      {/* Channel tabs */}
      <div className="chat-channel-tabs">
        {CHANNEL_TABS.map((tab) => {
          const unread = chatUnreadCounts[tab.key] ?? 0;
          const isActive = chatChannel === tab.key;
          return (
            <button
              key={tab.key}
              className={`chat-channel-tab ${isActive ? 'chat-channel-tab-active' : ''}`}
              style={isActive ? { borderBottomColor: tab.color, color: tab.color } : undefined}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
              {unread > 0 && (
                <span className="chat-unread-badge">{unread > 99 ? '99+' : unread}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Messages */}
      <div className="chat-messages" ref={messagesRef}>
        {currentMessages.length === 0 ? (
          <div className="text-xs text-text-dim italic text-center py-4">
            尚無訊息
          </div>
        ) : (
          currentMessages.map((msg) => <ChatMessageItem key={msg.id} msg={msg} />)
        )}
      </div>

      {/* Input */}
      <form className="chat-input-area" onSubmit={handleSubmit}>
        <span
          className="chat-input-channel-label"
          style={{ color: CHANNEL_TABS.find((t) => t.key === chatChannel)?.color }}
        >
          [{CHANNEL_TABS.find((t) => t.key === chatChannel)?.label}]
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="輸入訊息..."
          className="chat-input-field"
        />
      </form>
    </div>
  );
}
