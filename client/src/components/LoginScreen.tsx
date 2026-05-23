import { useState } from 'react';
import type { FormEvent } from 'react';
import { useGameStore } from '../stores/gameStore';

interface LoginScreenProps {
  onLogin: (userId: string, accessToken?: string) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const connection = useGameStore((s) => s.connection);

  const isConnected = connection === 'connected';
  const isConnecting = connection === 'connecting';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = account.trim();
    if (trimmed.length < 2) {
      setError('帳號至少需要 2 個字元');
      return;
    }

    setError('');
    onLogin(trimmed);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-bg-primary scanline">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-terminal text-glow tracking-wider mb-2">
            MUD 冒險世界
          </h1>
          <p className="text-text-dim text-sm">本地測試登入</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 text-xs">
          <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-text-terminal' : isConnecting ? 'bg-text-amber animate-pulse' : 'bg-combat-damage'}`} />
          <span className={isConnected ? 'text-text-terminal' : 'text-text-dim'}>
            {isConnected ? '已連線' : isConnecting ? '連線中...' : '未連線'}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
            placeholder="輸入測試帳號"
            autoFocus
            disabled={!isConnected}
            className="w-full px-3 py-3 rounded-lg border border-border-dim bg-bg-secondary text-text-bright outline-none focus:border-border-glow disabled:opacity-50"
          />

          {error && (
            <div className="text-xs text-combat-damage">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!isConnected}
            className="w-full py-3 rounded-lg font-bold text-bg-primary bg-text-terminal hover:bg-text-bright disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            進入遊戲
          </button>
        </form>

        <div className="mt-6 text-center text-text-dim text-xs space-y-1">
          <p>目前暫停 Arinova 登入與 AI 夥伴，方便本地測試。</p>
          <p>尚未建立角色時，登入後會進入建立角色流程。</p>
        </div>
      </div>
    </div>
  );
}
