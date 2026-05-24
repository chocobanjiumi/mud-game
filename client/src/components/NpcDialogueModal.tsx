import { useGameStore } from '../stores/gameStore';
import { getItemImagePath, getNpcImagePath } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export default function NpcDialogueModal() {
  const dialogue = useGameStore((s) => s.npcDialogue);
  const setNpcDialogue = useGameStore((s) => s.setNpcDialogue);

  if (!dialogue) return null;

  const npcImagePath = getNpcImagePath(dialogue.npcId);

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

        <div className="npc-dialogue-main">
          <div className="npc-dialogue-portrait-frame">
            {npcImagePath ? (
              <img
                src={npcImagePath}
                alt={dialogue.npcName}
                className="npc-dialogue-portrait"
                loading="lazy"
              />
            ) : (
              <div className="npc-dialogue-portrait npc-dialogue-portrait-fallback">
                {dialogue.npcName.slice(0, 1)}
              </div>
            )}
          </div>
          <div className="npc-dialogue-body">
            {dialogue.text}
          </div>
        </div>

        {dialogue.shopItems && dialogue.shopItems.length > 0 && (
          <div className="npc-dialogue-shop">
            <div className="npc-dialogue-shop-head">
              <span>商品</span>
              <span>{dialogue.shopItems.length}</span>
            </div>
            <div className="npc-dialogue-shop-list">
              {dialogue.shopItems.map((item) => {
                const imagePath = getItemImagePath(item.id);
                return (
                  <div key={item.id} className="npc-dialogue-shop-item">
                    {imagePath ? (
                      <img src={imagePath} alt="" className="npc-dialogue-shop-thumb" loading="lazy" />
                    ) : (
                      <div className="npc-dialogue-shop-thumb npc-dialogue-shop-thumb-fallback" />
                    )}
                    <div className="npc-dialogue-shop-info">
                      <div className="npc-dialogue-shop-row">
                        <span className="npc-dialogue-shop-name">{item.name}</span>
                        <span className="npc-dialogue-shop-price">{item.price} 金</span>
                      </div>
                      <div className="npc-dialogue-shop-meta">
                        <span>{item.rarity}</span>
                        <span>Lv.{item.levelReq}</span>
                        <span>{item.type}</span>
                      </div>
                      <div className="npc-dialogue-shop-desc">{item.description}</div>
                      {item.stats && Object.keys(item.stats).length > 0 && (
                        <div className="npc-dialogue-shop-stats">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <span key={key}>{key.toUpperCase()} +{value}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      className="npc-dialogue-buy"
                      onClick={() => sendCommand(item.command, `購買 ${item.name}`)}
                    >
                      購買
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
