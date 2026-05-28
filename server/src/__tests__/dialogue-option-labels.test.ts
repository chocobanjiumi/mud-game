import { describe, expect, it } from 'vitest';
import type { DialogueNode, DialogueOption, NpcDef } from '@game/shared';
import { formatDialogueOptionLabel, isSpecificDialogueOptionLabel } from '../game/dialogue-option-labels.js';

function countCjk(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

const npc = {
  id: 'test_guide',
  name: '測試嚮導',
  alias: 'guide',
  title: '副本入口嚮導',
  description: '測試用 NPC',
  roomId: 'test_room',
  type: 'quest',
  dialogue: [],
} as NpcDef;

describe('dialogue option labels', () => {
  it('expands short instance entry labels with an action intent', () => {
    const node = {
      id: 'entry_intro',
      text: '這道入口後方有副本威脅，請確認隊伍與等級條件後再進入。',
    } as DialogueNode;
    const option = { text: '進入', nextId: 'entry_confirm' } as DialogueOption;
    const nextNode = {
      id: 'entry_confirm',
      text: '確認進入副本。',
      action: { type: 'instance_entry', data: { entryId: 'test_entry' } },
    } as DialogueNode;

    const label = formatDialogueOptionLabel(npc, node, option, 0, nextNode);

    expect(label).toBe('確認副本入口：進入');
    expect(countCjk(label)).toBeGreaterThanOrEqual(8);
    expect(isSpecificDialogueOptionLabel(label)).toBe(true);
  });

  it('expands generic farewell labels instead of showing only thanks', () => {
    const node = { id: 'main', text: '測試對話。' } as DialogueNode;
    const option = { text: '謝謝。', nextId: 'farewell' } as DialogueOption;

    const label = formatDialogueOptionLabel(npc, node, option, 1);

    expect(label).toBe('結束這段對話：謝謝。');
    expect(countCjk(label)).toBeGreaterThanOrEqual(8);
    expect(isSpecificDialogueOptionLabel(label)).toBe(true);
  });

  it('keeps already specific labels unchanged', () => {
    const node = { id: 'main', text: '測試對話。' } as DialogueNode;
    const option = { text: '詢問水晶洞窟入口條件', nextId: 'info' } as DialogueOption;

    expect(formatDialogueOptionLabel(npc, node, option, 0)).toBe(option.text);
  });
});
