export function formatSystemErrorMessage(text: string): string {
  const trimmed = text.trim();
  const reason = trimmed.length > 0 ? trimmed : '系統沒有收到可辨識的錯誤內容。';
  if (isDetailedErrorMessage(reason)) return reason;
  return `你剛執行的操作沒有完成；失敗原因：${reason}；目前角色、背包、房間或戰鬥狀態不會因此改變，下一步請依提示補上目標、確認條件，或輸入 help 查看可用指令。`;
}

function isDetailedErrorMessage(text: string): boolean {
  const hasAction = /你正在|你想|你剛|嘗試|使用了|執行|輸入|選擇|啟動|開啟|購買|出售|進入|移動|施放|裝備|接受|拒絕/u.test(text);
  const hasReason = /但|因為|失敗原因|無法|不足|不存在|找不到|不符|冷卻|上鎖|缺少|沒有|不能|尚未|需要/u.test(text);
  const hasState = /目前|狀態|等級|需求|剩餘|人數|金幣|背包|房間|隊伍|冷卻|目標|未|已/u.test(text);
  const hasNextStep = /下一步|請|改用|等待|前往|返回|重新|查看|輸入|使用|先/u.test(text);
  return hasAction && hasReason && hasState && hasNextStep;
}
