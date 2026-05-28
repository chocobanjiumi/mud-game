import type { DialogueNode, DialogueOption, NpcDef } from '@game/shared';

const GENERIC_OPTION_TEXTS = new Set([
  '好的',
  '好',
  '進入',
  '接受',
  '離開',
  '謝謝',
  '謝謝。',
  '告辭',
  '告辭了。',
  '先這樣',
  '先這樣。',
  '我明白了。',
]);

export function formatDialogueOptionLabel(
  npc: NpcDef,
  node: DialogueNode,
  option: DialogueOption,
  index: number,
  nextNode?: DialogueNode,
): string {
  const raw = (option.text ?? '').trim() || `選項${index + 1}`;
  if (isSpecificDialogueOptionLabel(raw)) return raw;

  const intent = inferDialogueOptionIntent(npc, node, option, nextNode, raw, index);
  return `${intent}：${raw}`;
}

export function isSpecificDialogueOptionLabel(text: string): boolean {
  const trimmed = text.trim();
  if (GENERIC_OPTION_TEXTS.has(trimmed)) return false;
  return countCjkChars(trimmed) >= 8;
}

function inferDialogueOptionIntent(
  npc: NpcDef,
  node: DialogueNode,
  option: DialogueOption,
  nextNode: DialogueNode | undefined,
  raw: string,
  index: number,
): string {
  const actionType = nextNode?.action?.type;
  const context = `${npc.name} ${npc.title} ${npc.type} ${node.id} ${node.text} ${option.nextId} ${nextNode?.id ?? ''} ${nextNode?.text ?? ''} ${raw}`;

  if (/離開|告辭|謝謝|明白|知道|不用|先這樣|再見/u.test(raw)) return '結束這段對話';
  if (actionType === 'instance_entry' || /副本|入口|洞窟|墓窟|戰場|神殿|礦坑|遺跡|裂隙|深淵|天界|龍谷/u.test(context)) {
    return '確認副本入口';
  }
  if (actionType === 'quest_start' || /接受|委託|任務開始|接下|幫忙/u.test(context)) return '接受任務委託';
  if (actionType === 'quest_complete' || /回報|完成|交付|證物/u.test(context)) return '回報任務進度';
  if (actionType === 'shop' || /商品|商店|補給|買|賣|藥水|材料|貨物/u.test(context)) return '查看商店補給';
  if (actionType === 'heal' || /治療|傷勢|恢復|休息/u.test(context)) return '接受治療服務';
  if (actionType === 'class_change' || /轉職|職業|訓練|技巧|技能/u.test(context)) return '確認職業訓練';
  if (actionType === 'teleport' || /傳送|傳送門|前往|移動/u.test(context)) return '確認傳送路線';
  if (/任務|委託|進度|目標|獎勵/u.test(context)) return '詢問任務情報';
  if (/線索|情報|說明|怎麼|哪裡|為什麼|如何|危險|威脅/u.test(context)) return '詢問當前情報';
  return `選擇對話行動${index + 1}`;
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}
