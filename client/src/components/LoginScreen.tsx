import { useState, useEffect, type FormEvent } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from '../stores/gameStore';

interface LoginScreenProps {
  onLogin: (userId: string, accessToken?: string) => void;
  onCreateCharacter: (name: string, userId: string) => void;
}

export default function LoginScreen({ onLogin, onCreateCharacter }: LoginScreenProps) {
  const [characterName, setCharacterName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const connection = useGameStore((s) => s.connection);

  // Handle OAuth callback if redirected back with ?code=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return;

    // Clean URL so we don't re-process on re-render
    window.history.replaceState({}, '', window.location.pathname);

    setIsLoggingIn(true);
    Arinova.handleCallback({
      code,
      clientId: import.meta.env.VITE_ARINOVA_APP_ID || 'mud-game',
      clientSecret: import.meta.env.VITE_ARINOVA_CLIENT_SECRET || '',
      redirectUri: window.location.origin + window.location.pathname,
    })
      .then((result) => {
        if (result && result.user) {
          useGameStore.getState().setArinovaUser(result.user);
          onLogin(result.user.id, result.accessToken);
        }
      })
      .catch((err) => {
        console.error('[Arinova] OAuth callback 失敗:', err);
        useGameStore.getState().addTerminalLine('[系統] Arinova 登入失敗，請稍後再試或使用訪客模式。', 'error');
      })
      .finally(() => setIsLoggingIn(false));
  }, [onLogin]);

  const handleArinovaLogin = () => {
    if (isLoggingIn) return;
    // Redirect to Arinova OAuth login page
    Arinova.login({ scope: ['profile', 'agents', 'economy'] });
  };

  const handleGuestSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = characterName.trim();
    if (!name) return;

    if (isCreating) {
      const guestId = `guest_${name}_${Date.now()}`;
      onCreateCharacter(name, guestId);
    } else {
      onLogin(name);
    }
  };

  const isConnected = connection === 'connected';
  const isConnecting = connection === 'connecting';

  return (
    <div className="h-full flex flex-col items-center justify-center bg-bg-primary scanline">
      <div className="w-full max-w-md px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-terminal text-glow tracking-wider mb-2">
            MUD 冒險世界
          </h1>
          <p className="text-text-dim text-sm">
            多人即時文字冒險遊戲
          </p>
        </div>

        {/* Connection status */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs">
          <span
            className={`w-2 h-2 rounded-full ${
              isConnected ? 'bg-text-terminal' : isConnecting ? 'bg-text-amber animate-pulse' : 'bg-combat-damage'
            }`}
          />
          <span className={isConnected ? 'text-text-terminal' : 'text-text-dim'}>
            {isConnected ? '已連線' : isConnecting ? '連線中...' : '未連線'}
          </span>
        </div>

        {/* Primary CTA: Login with Arinova */}
        <div className="mb-4">
          <button
            type="button"
            onClick={handleArinovaLogin}
            disabled={!isConnected || isLoggingIn}
            className={`
              w-full py-3 rounded border text-sm font-bold tracking-wider cursor-pointer
              transition-all duration-200
              ${
                isConnected && !isLoggingIn
                  ? 'border-border-glow bg-border-glow/10 text-text-terminal hover:bg-border-glow/20 text-glow-subtle'
                  : 'border-border-dim bg-bg-secondary text-text-dim cursor-not-allowed'
              }
            `}
          >
            {isLoggingIn ? '登入中...' : 'Login with Arinova'}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 border-t border-border-dim" />
          <span className="text-text-dim text-xs">或以訪客身分遊玩</span>
          <div className="flex-1 border-t border-border-dim" />
        </div>

        {/* Guest login form */}
        <form onSubmit={handleGuestSubmit} className="space-y-4">
          <div className="bg-bg-secondary border border-border-dim rounded p-4 border-glow">
            <label className="block text-xs text-text-dim mb-2">
              {isCreating ? '建立角色名稱' : '角色名稱'}
            </label>
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="輸入你的角色名稱..."
              maxLength={20}
              autoFocus
              className="w-full bg-bg-primary border border-border-dim rounded px-3 py-2 text-text-terminal text-sm outline-none focus:border-border-glow transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!characterName.trim() || !isConnected}
            className={`
              w-full py-2.5 rounded border text-sm font-bold tracking-wider cursor-pointer
              transition-all duration-200
              ${
                characterName.trim() && isConnected
                  ? 'border-border-dim bg-bg-secondary text-text-dim hover:bg-bg-tertiary hover:text-text-bright hover:border-border-glow/40'
                  : 'border-border-dim bg-bg-secondary text-text-dim cursor-not-allowed opacity-50'
              }
            `}
          >
            {isCreating ? '以訪客身分建立角色' : '以訪客身分開始'}
          </button>
        </form>

        {/* Toggle create/login */}
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsCreating(!isCreating)}
            className="text-xs text-text-dim hover:text-text-terminal transition-colors cursor-pointer"
          >
            {isCreating ? '已有角色？直接登入' : '新玩家？建立角色'}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-10 text-center text-[10px] text-text-dim space-y-1">
          <p>提示: 輸入 help 查看可用指令</p>
          <p>使用方向鍵 (north/south/east/west) 移動</p>
        </div>
      </div>
    </div>
  );
}
