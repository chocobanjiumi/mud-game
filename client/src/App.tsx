import { Suspense, lazy, useCallback, useEffect } from 'react';
import { Arinova } from '@arinova-ai/spaces-sdk';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import AudioManager from './audio/AudioManager';
import LoginScreen from './components/LoginScreen';
import CharacterSelectScreen from './components/CharacterSelectScreen';
import CreateCharacterScreen from './components/CreateCharacterScreen';
import GameScreen from './components/GameScreen';
import SkillTablePage from './components/SkillTablePage';
import type { CreateCharacterPayload } from '@game/shared';

const WikiPage = lazy(() => import('./components/WikiPage'));
const BattleMockup = lazy(() => import('./components/BattleMockup'));
const SuffixPage = lazy(() => import('./components/SuffixPage'));
const MonsterPage = lazy(() => import('./components/MonsterPage'));
const UniqueItemPage = lazy(() => import('./components/UniqueItemPage'));
const TalentTreePage = lazy(() => import('./components/TalentTreePage'));
const MapPlanningPage = lazy(() => import('./components/MapPlanningPage'));

// Initialize Arinova SDK on app load (v0.1.3 constructor pattern)
const ARINOVA_APP_ID = import.meta.env.VITE_ARINOVA_APP_ID || 'mud-game-671a1dd6';
const ARINOVA_ENDPOINT = import.meta.env.VITE_ARINOVA_BASE_URL || 'https://api.chat-staging.arinova.ai';
export const arinova = new Arinova({
  appId: ARINOVA_APP_ID,
  endpoint: ARINOVA_ENDPOINT,
  scope: 'profile agents economy',
  redirectUri: window.location.origin + '/mud/',
});

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/mud/battle') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading battle mockup...</div>}>
        <BattleMockup />
      </Suspense>
    );
  }
  if (path === '/mud/wiki') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading wiki...</div>}>
        <WikiPage />
      </Suspense>
    );
  }
  if (path === '/mud/suffix') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading suffix...</div>}>
        <SuffixPage />
      </Suspense>
    );
  }
  if (path === '/mud/monster') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading monsters...</div>}>
        <MonsterPage />
      </Suspense>
    );
  }
  if (path === '/mud/unique') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading unique drafts...</div>}>
        <UniqueItemPage />
      </Suspense>
    );
  }
  if (path === '/mud/talent') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading talent drafts...</div>}>
        <TalentTreePage />
      </Suspense>
    );
  }
  if (path === '/mud/map') {
    return (
      <Suspense fallback={<div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">Loading world map...</div>}>
        <MapPlanningPage />
      </Suspense>
    );
  }
  if (path === '/mud/skill') {
    return <SkillTablePage />;
  }

  const screen = useGameStore((s) => s.screen);
  const { sendCommand, login, selectCharacter, listCharacters, createCharacter, deleteCharacter, sendShopOpen, sendPurchase, sendGetTransactions, sendChat } = useWebSocket();

  useEffect(() => {
    AudioManager.getInstance().play(screen === 'game' ? 'bgm_town' : 'bgm_temple');
  }, [screen]);

  useEffect(() => {
    const unlockAudio = () => AudioManager.getInstance().unlock();
    window.addEventListener('pointerdown', unlockAudio, { capture: true });
    window.addEventListener('keydown', unlockAudio, { capture: true });
    window.addEventListener('touchend', unlockAudio, { capture: true });
    return () => {
      window.removeEventListener('pointerdown', unlockAudio, { capture: true });
      window.removeEventListener('keydown', unlockAudio, { capture: true });
      window.removeEventListener('touchend', unlockAudio, { capture: true });
    };
  }, []);

  const handleLogin = useCallback(
    (userId: string, accessToken?: string) => {
      if (accessToken) {
        useGameStore.getState().setAccessToken(accessToken);
      } else {
        useGameStore.getState().setAccessToken(null);
        useGameStore.getState().setArinovaUser({ id: userId, name: userId });
      }
      // Wait for WS to be connected before sending login
      const doLogin = () => {
        login(userId, undefined, accessToken);
      };

      const conn = useGameStore.getState().connection;
      if (conn === 'connected') {
        doLogin();
      } else {
        let resolved = false;
        const unsub = useGameStore.subscribe((state) => {
          if (!resolved && state.connection === 'connected') {
            resolved = true;
            unsub();
            doLogin();
          }
        });
        // Poll as fallback
        const pollInterval = setInterval(() => {
          if (!resolved && useGameStore.getState().connection === 'connected') {
            resolved = true;
            unsub();
            clearInterval(pollInterval);
            doLogin();
          }
        }, 500);
        setTimeout(() => {
          unsub();
          clearInterval(pollInterval);
        }, 30000);
      }
    },
    [login],
  );

  const handleCommand = useCallback(
    (command: string, friendlyEcho?: string) => {
      // Add the command to terminal as echo
      useGameStore.getState().addTerminalLine(`> ${friendlyEcho ?? command}`, 'command');
      // Intercept legacy create command and open the full creation flow.
      const createMatch = command.match(/^create(?:\s+.*)?$/i);
      if (createMatch) {
        useGameStore.getState().setScreen('create');
        return;
      }
      sendCommand(command);
    },
    [sendCommand],
  );

  const handleReturnToCharacters = useCallback(() => {
    useGameStore.getState().clearGameSessionForCharacterSelect();
    listCharacters();
  }, [listCharacters]);

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (screen === 'characters') {
    return (
      <CharacterSelectScreen
        onSelect={selectCharacter}
        onCreate={() => useGameStore.getState().setScreen('create')}
        onDelete={deleteCharacter}
      />
    );
  }

  if (screen === 'create') {
    return (
      <CreateCharacterScreen
        onCreate={(payload: CreateCharacterPayload) => createCharacter(payload)}
        onBackToCharacters={() => useGameStore.getState().setScreen('characters')}
      />
    );
  }

  return (
    <GameScreen
      onCommand={handleCommand}
      onOpenShop={sendShopOpen}
      onPurchase={sendPurchase}
      onGetTransactions={sendGetTransactions}
      onSendChat={sendChat}
      onReturnToCharacters={handleReturnToCharacters}
    />
  );
}
