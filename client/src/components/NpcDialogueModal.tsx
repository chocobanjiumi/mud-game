import { useGameStore } from '../stores/gameStore';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export default function NpcDialogueModal() {
  const dialogue = useGameStore((s) => s.npcDialogue);
  const setNpcDialogue = useGameStore((s) => s.setNpcDialogue);

  if (!dialogue) return null;

  return (
    <div className="npc-dialogue-overlay" onClick={() => setNpcDialogue(null)}>
      <div className="npc-dialogue-modal" onClick={(event) => event.stopPropagation()}>
        <div className="npc-dialogue-header">
          <div className="min-w-0">
            <div className="npc-dialogue-title">{dialogue.npcName}</div>
            <div className="npc-dialogue-subtitle">{dialogue.npcTitle}</div>
          </div>
          <button className="npc-dialogue-close" onClick={() => setNpcDialogue(null)}>
            close
          </button>
        </div>

        <div className="npc-dialogue-body">
          {dialogue.text}
        </div>

        {dialogue.options.length > 0 ? (
          <div className="npc-dialogue-options">
            {dialogue.options.map((option) => (
              <button
                key={`${dialogue.nodeId}-${option.index}`}
                className="npc-dialogue-option"
                onClick={() => sendCommand(option.command, option.text)}
              >
                <span>{option.index}</span>
                <b>{option.text}</b>
              </button>
            ))}
          </div>
        ) : (
          <div className="npc-dialogue-options">
            <button className="npc-dialogue-option npc-dialogue-option-primary" onClick={() => setNpcDialogue(null)}>
              <span>✓</span>
              <b>離開</b>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
