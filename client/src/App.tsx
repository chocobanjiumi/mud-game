import { useCallback } from 'react';
import { useGameStore } from './stores/gameStore';
import { useWebSocket } from './hooks/useWebSocket';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';

export default function App() {
  const screen = useGameStore((s) => s.screen);
  const { sendCommand, login, createCharacter } = useWebSocket();

  const handleLogin = useCallback(
    (userId: string) => {
      login(userId);
    },
    [login],
  );

  const handleCreateCharacter = useCallback(
    (name: string, userId: string) => {
      createCharacter(name, userId);
    },
    [createCharacter],
  );

  const handleCommand = useCallback(
    (command: string) => {
      // Add the command to terminal as echo
      useGameStore.getState().addTerminalLine(`> ${command}`, 'command');
      sendCommand(command);
    },
    [sendCommand],
  );

  if (screen === 'login') {
    return <LoginScreen onLogin={handleLogin} onCreateCharacter={handleCreateCharacter} />;
  }

  return <GameScreen onCommand={handleCommand} />;
}
