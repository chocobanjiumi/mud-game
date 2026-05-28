import { describe, expect, it } from 'vitest';
import { formatSystemErrorMessage } from '../game/system-messages.js';

describe('instance entry failure message quality', () => {
  it('keeps level and party entry failures actionable', () => {
    const level = formatSystemErrorMessage('你正在嘗試進入「水晶洞窟」，但等級不足；目前等級 3，需求等級 5。下一步：先完成同等級區域任務或提升等級後再返回入口。');
    expect(level).toContain('水晶洞窟');
    expect(level).toContain('目前等級 3');
    expect(level).toContain('需求等級 5');
    expect(level).toContain('下一步');

    const party = formatSystemErrorMessage('你正在嘗試進入「水晶洞窟」，但隊伍人數不符；目前人數 6，最多允許 5 人。下一步：調整隊伍人數後由隊長再次進入。');
    expect(party).toContain('水晶洞窟');
    expect(party).toContain('目前人數 6');
    expect(party).toContain('最多允許 5 人');
    expect(party).toContain('隊長');
  });

  it('keeps item and quest gate failures free of raw ids', () => {
    const item = formatSystemErrorMessage('你正在嘗試進入「終焉戰場軍旗裂隙」，但入口道具不足；缺少道具「終戰軍旗封印」，目前持有 0 個，需求 1 個。下一步：取得所需道具後回到此入口。');
    expect(item).toContain('終焉戰場軍旗裂隙');
    expect(item).toContain('終戰軍旗封印');
    expect(item).toContain('目前持有 0 個');
    expect(item).toContain('需求 1 個');

    const quest = formatSystemErrorMessage('你正在嘗試進入「王城封印門」，但任務條件不足；需要「王都封印調查」達到「已完成」，目前狀態是「進行中」。下一步：先推進對應任務階段再返回入口。');
    expect(quest).toContain('王城封印門');
    expect(quest).toContain('王都封印調查');
    expect(quest).toContain('目前狀態是「進行中」');
    expect(quest).not.toMatch(/[a-z][a-z0-9]+_[a-z0-9_]+/u);
  });
});
