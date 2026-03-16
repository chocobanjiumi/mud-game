import { useState, type FormEvent } from 'react';
import { useGameStore } from '../stores/gameStore';

interface LoginScreenProps {
  onLogin: (userId: string) => void;
  onCreateCharacter: (name: string, userId: string) => void;
}

export default function LoginScreen({ onLogin, onCreateCharacter }: LoginScreenProps) {
  const [characterName, setCharacterName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const connection = useGameStore((s) => s.connection);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = characterName.trim();
    if (!name) return;

    if (isCreating) {
      // Guest mode: use character name as userId
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

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
                  ? 'border-border-glow bg-border-glow/10 text-text-terminal hover:bg-border-glow/20 text-glow-subtle'
                  : 'border-border-dim bg-bg-secondary text-text-dim cursor-not-allowed'
              }
            `}
          >
            {isCreating ? '建立角色並開始冒險' : '開始冒險'}
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
