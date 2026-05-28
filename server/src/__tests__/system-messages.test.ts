import { describe, expect, it } from 'vitest';
import { formatSystemErrorMessage } from '../game/system-messages.js';

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

describe('system error message quality', () => {
  it('normalizes short errors into actionable messages', () => {
    const message = formatSystemErrorMessage('找不到戰鬥目標「暗影狼」。');

    expect(countCjkChars(message)).toBeGreaterThanOrEqual(18);
    expect(message).toContain('你剛執行的操作沒有完成');
    expect(message).toContain('失敗原因');
    expect(message).toContain('目前角色、背包、房間或戰鬥狀態不會因此改變');
    expect(message).toContain('下一步');
  });

  it('keeps detailed errors unchanged', () => {
    const detailed = '你正在購買商品，但目前房間沒有可交易商人；下一步請移動到有商人的房間再嘗試。';

    expect(formatSystemErrorMessage(detailed)).toBe(detailed);
  });

  it('preserves numeric condition details from the original reason', () => {
    const message = formatSystemErrorMessage('等級不足，無法進入「水晶洞窟」。目前等級 3，需求等級 5。下一步：先提升等級後再返回入口。');

    expect(message).toContain('目前等級 3');
    expect(message).toContain('需求等級 5');
    expect(message).toContain('下一步');
  });
});
