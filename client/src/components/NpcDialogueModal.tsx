import { useState } from 'react';
import { useGameStore } from '../stores/gameStore';
import { ITEM_DEFS, type InventoryItem, type NpcDialoguePayload } from '@game/shared';
import { getItemImagePath, getNpcImagePath } from '../utils/assetImages';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

export default function NpcDialogueModal() {
  const dialogue = useGameStore((s) => s.npcDialogue);
  const setNpcDialogue = useGameStore((s) => s.setNpcDialogue);
  const inventory = useGameStore((s) => s.inventory);

  return (
    <NpcDialogueModalView
      dialogue={dialogue}
      inventory={inventory}
      setNpcDialogue={setNpcDialogue}
    />
  );
}

export function NpcDialogueModalView({
  dialogue,
  inventory,
  setNpcDialogue,
  initialTradeTab = 'buy',
}: {
  dialogue: NpcDialoguePayload | null;
  inventory: InventoryItem[];
  setNpcDialogue: (dialogue: NpcDialoguePayload | null) => void;
  initialTradeTab?: 'buy' | 'sell';
}) {
  const [tradeTab, setTradeTab] = useState<'buy' | 'sell'>(initialTradeTab);
  if (!dialogue) return null;

  const npcImagePath = getNpcImagePath(dialogue.npcId);
  const sellableItems = dialogue.shopItems
    ? inventory.filter((item) => !item.equipped && (ITEM_DEFS[item.itemId]?.sellPrice ?? 0) > 0)
    : [];

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
            <div className="npc-dialogue-trade-tabs" role="tablist" aria-label="商人交易模式">
              <button
                type="button"
                role="tab"
                aria-selected={tradeTab === 'buy'}
                className={`npc-dialogue-trade-tab ${tradeTab === 'buy' ? 'npc-dialogue-trade-tab-active' : ''}`}
                onClick={() => setTradeTab('buy')}
              >
                <span>購買</span>
                <b>{dialogue.shopItems.length}</b>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tradeTab === 'sell'}
                className={`npc-dialogue-trade-tab ${tradeTab === 'sell' ? 'npc-dialogue-trade-tab-active' : ''}`}
                onClick={() => setTradeTab('sell')}
              >
                <span>出售</span>
                <b>{sellableItems.length}</b>
              </button>
            </div>

            {tradeTab === 'buy' ? (
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
            ) : sellableItems.length > 0 ? (
              <div className="npc-dialogue-shop-list">
                {sellableItems.map((item, index) => {
                  const def = ITEM_DEFS[item.itemId];
                  const imagePath = getItemImagePath(item.itemId);
                  const commandItemId = item.itemInstanceId ?? item.itemId;
                  const itemKey = `${item.itemId}-${item.itemInstanceId ?? index}`;
                  return (
                    <div key={itemKey} className="npc-dialogue-shop-item npc-dialogue-sell-item">
                      {imagePath ? (
                        <img src={imagePath} alt="" className="npc-dialogue-shop-thumb" loading="lazy" />
                      ) : (
                        <div className="npc-dialogue-shop-thumb npc-dialogue-shop-thumb-fallback" />
                      )}
                      <div className="npc-dialogue-shop-info">
                        <div className="npc-dialogue-shop-row">
                          <span className="npc-dialogue-shop-name">{def?.name ?? item.itemId}</span>
                          <span className="npc-dialogue-shop-price">{def?.sellPrice ?? 0} 金</span>
                        </div>
                        <div className="npc-dialogue-shop-meta">
                          <span>{def?.rarity ?? 'common'}</span>
                          <span>{def?.type ?? 'unknown'}</span>
                          <span>x{item.quantity}</span>
                        </div>
                        <div className="npc-dialogue-shop-desc">
                          {item.itemInstanceId ? `實例 ${item.itemInstanceId}` : def?.description}
                        </div>
                      </div>
                      <button
                        className="npc-dialogue-buy npc-dialogue-sell"
                        onClick={() => sendCommand(`sell ${commandItemId}`, `出售 ${def?.name ?? item.itemId}`)}
                      >
                        出售
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="npc-dialogue-sell-empty">背包目前沒有可出售物品。</div>
            )}
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
