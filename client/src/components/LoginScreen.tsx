import { useState, useEffect } from 'react';
import { arinova } from '../App';
import { useGameStore } from '../stores/gameStore';

interface LoginScreenProps {
  onLogin: (userId: string, accessToken?: string) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const connection = useGameStore((s) => s.connection);

  // Auto-connect on mount using SDK connect()
  useEffect(() => {
    // Check for PKCE callback first
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      setIsLoggingIn(true);
      arinova.handleCallback()
        .then((result) => {
          window.history.replaceState({}, '', window.location.pathname);
          if (result && result.user) {
            useGameStore.getState().setArinovaUser(result.user);
            onLogin(result.user.id, result.access_token);
          }
        })
        .catch((err) => {
          console.error('[Arinova] OAuth callback 失敗:', err);
          window.history.replaceState({}, '', window.location.pathname);
        })
        .finally(() => setIsLoggingIn(false));
      return;
    }

    // Use SDK connect() — iframe postMessage or standalone PKCE popup
    setIsLoggingIn(true);
    arinova.connect({ timeout: 15000 })
      .then((result) => {
        console.log('[MUD] connect result:', JSON.stringify(result, null, 2), 'token length:', result?.accessToken?.length);
        if (result && result.user) {
          useGameStore.getState().setArinovaUser(result.user);
          onLogin(result.user.id, result.accessToken || undefined);
        } else {
          console.error('[MUD] connect resolved but no user:', result);
          setIsLoggingIn(false);
        }
      })
      .catch(() => {
        // Timeout or not in iframe — user will click Login manually
        setIsLoggingIn(false);
      });
  }, [onLogin]);

  const handleArinovaLogin = () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    arinova.connect({ timeout: 10000 })
      .then((result) => {
        if (result && result.user) {
          useGameStore.getState().setArinovaUser(result.user);
          onLogin(result.user.id, result.accessToken || undefined);
        }
      })
      .catch((err) => {
        console.error('[Arinova] Connect 失敗:', err);
        useGameStore.getState().addTerminalLine('[系統] Arinova 登入失敗，請稍後再試。', 'error');
      })
      .finally(() => setIsLoggingIn(false));
  };

  const isConnected = connection === 'connected';
  const isConnecting = connection === 'connecting';

  return (
    <div className="h-full flex flex-col items-center justify-center bg-bg-primary scanline">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-terminal text-glow tracking-wider mb-2">
            MUD 冒險世界
          </h1>
          <p className="text-text-dim text-sm">多人即時文字冒險遊戲</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 text-xs">
          <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-text-terminal' : isConnecting ? 'bg-text-amber animate-pulse' : 'bg-combat-damage'}`} />
          <span className={isConnected ? 'text-text-terminal' : 'text-text-dim'}>
            {isConnected ? '已連線' : isConnecting ? '連線中...' : '未連線'}
          </span>
        </div>

        <button
          type="button"
          onClick={handleArinovaLogin}
          disabled={!isConnected || isLoggingIn}
          className="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoggingIn ? '登入中...' : 'Login with Arinova'}
        </button>

        <div className="mt-6 text-center text-text-dim text-xs space-y-1">
          <p>&quot;提示: 輸入 help 查看可用指令&quot;</p>
          <p>使用方向鍵 (north/south/east/west) 移動</p>
        </div>
      </div>
    </div>
  );
}
