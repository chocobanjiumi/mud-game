# 工作計畫

## Phase 1：專案基礎建設

### 1.1 專案骨架
- [ ] Monorepo 設定（pnpm workspace）
- [ ] TypeScript 設定（tsconfig, 共用設定）
- [ ] ESLint + Prettier
- [ ] 開發腳本（dev / build / start）

### 1.2 共用型別與常數 (`packages/shared`)
- [ ] 角色型別（Player, Character, Stats）
- [ ] 技能型別與定義資料（所有冒險者技能）
- [ ] 物品型別（Item, Equipment, Consumable）
- [ ] 世界型別（Room, Exit, Zone）
- [ ] 戰鬥型別（CombatState, Action, DamageResult）
- [ ] WebSocket 訊息協議（ClientMessage, ServerMessage）
- [ ] 遊戲常數（經驗值表、屬性公式係數）

---

## Phase 2：遊戲伺服器核心

### 2.1 伺服器啟動
- [ ] Fastify HTTP server
- [ ] WebSocket server（ws）
- [ ] 連線管理（connect/disconnect/reconnect）
- [ ] 心跳機制（ping/pong）

### 2.2 資料庫
- [ ] SQLite 設定（better-sqlite3）
- [ ] Schema 建表（characters, inventory, learned_skills, parties, party_members）
- [ ] 基礎 CRUD（建角、讀檔、存檔）
- [ ] 自動存檔機制（定時 + 重要事件觸發）

### 2.3 指令解析器
- [ ] 指令路由（command string → handler）
- [ ] 移動指令（go, look, map）
- [ ] 狀態指令（status, inventory, skills）
- [ ] 互動指令（take, drop, use, equip, unequip）
- [ ] 社交指令（say, party invite/leave）
- [ ] 戰鬥指令（attack, skill, defend, flee）
- [ ] 指令別名與縮寫（n=go north, i=inventory, 等）
- [ ] 錯誤處理與提示（unknown command, invalid target）

---

## Phase 3：世界系統

### 3.1 世界地圖設計
- [ ] 區域規劃（新手村、平原、森林、山洞、城鎮）
- [ ] 房間定義（ID, 名稱, 描述, 出口, 怪物刷新點, NPC）
- [ ] 房間連接圖（哪些房間通哪些房間）
- [ ] ASCII 地圖資料

### 3.2 世界管理器
- [ ] 房間載入與管理
- [ ] 玩家進出房間（廣播進出訊息）
- [ ] 房間內容查看（look 指令）
- [ ] 怪物重生機制（定時刷新）
- [ ] NPC 放置與行為

### 3.3 NPC 系統
- [ ] NPC 定義（商人、職業導師、任務 NPC）
- [ ] 對話系統（talk 指令 → 對話樹）
- [ ] 商店系統（buy/sell 指令）
- [ ] 轉職 NPC（檢查條件 → 轉職流程）

---

## Phase 4：角色系統

### 4.1 角色建立
- [ ] 新角色流程（命名 → 初始屬性）
- [ ] 初始裝備與物品
- [ ] 出生點設定

### 4.2 屬性與成長
- [ ] 五圍系統（STR/INT/DEX/VIT/LUK）
- [ ] 衍生屬性計算（ATK/MATK/DEF/MDEF/命中/閃避/暴擊）
- [ ] 升級經驗值表
- [ ] 升級流程（+5 自由點 + HP/MP 增長）
- [ ] 屬性分配指令（allocate str 3）

### 4.3 職業系統
- [ ] 冒險者技能（Lv 1-9，5 個基礎技能）
- [ ] 一轉系統（Lv 10，4 個職業，各 6 技能）
- [ ] 一轉條件檢查（等級 + 任務 + 金幣）
- [ ] 一轉屬性加成
- [ ] 二轉系統（Lv 30，12 個專精，各 4 技能）— Phase 後期
- [ ] 技能學習（升級自動學 + 條件觸發）

### 4.4 裝備系統
- [ ] 裝備欄位（武器/頭/身/手/腳/飾品）
- [ ] 裝備屬性加成
- [ ] 裝備限制（等級、職業）
- [ ] equip / unequip 指令

### 4.5 背包系統
- [ ] 背包容量（基礎 20 格 + STR 加成）
- [ ] 物品堆疊
- [ ] 物品使用（藥水回血/回魔）
- [ ] 丟棄 / 撿取

---

## Phase 5：戰鬥系統

### 5.1 戰鬥引擎
- [ ] 戰鬥狀態機（遭遇→選擇→結算→結束）
- [ ] 回合計時器（5 秒限時，超時自動普攻）
- [ ] 行動收集（等所有參戰者選擇完畢 or 超時）
- [ ] 行動排序（依 DEX）
- [ ] 戰鬥結束判定（全敵死亡/全滅/逃跑）

### 5.2 傷害計算
- [ ] 物理傷害公式
- [ ] 魔法傷害公式
- [ ] 暴擊判定與傷害
- [ ] 閃避判定
- [ ] 命中率計算
- [ ] 屬性相剋（火冰雷三角 + 光暗互剋）

### 5.3 技能系統
- [ ] 技能效果引擎（傷害/治療/buff/debuff/DoT/HoT）
- [ ] 冷卻管理
- [ ] MP 消耗
- [ ] 被動技能觸發
- [ ] 目標選擇（單體/群體/自身/隊友）

### 5.4 狀態效果
- [ ] Buff 系統（攻擊力 UP、防禦 UP 等）
- [ ] Debuff 系統（中毒、減速、暈眩、恐懼）
- [ ] DoT / HoT tick 處理
- [ ] 狀態疊加與覆蓋規則
- [ ] 淨化 / 驅散

### 5.5 戰利品
- [ ] 掉落表定義（怪物 → 物品 + 機率）
- [ ] 掉落計算（LUK 影響）
- [ ] 經驗值分配（組隊均分）
- [ ] 金幣掉落

### 5.6 怪物資料
- [ ] 新手區怪物（Lv 1-5）
- [ ] 平原怪物（Lv 5-10）
- [ ] 森林怪物（Lv 10-20）
- [ ] 怪物 AI 行為模式（攻擊型/防禦型/治療型/Boss）

---

## Phase 6：前端 UI

### 6.1 專案設定
- [ ] React + Vite 初始化
- [ ] Tailwind CSS
- [ ] Zustand 狀態管理

### 6.2 核心元件
- [ ] Terminal 主畫面（文字輸出，支援 ANSI 顏色）
- [ ] CommandInput 指令輸入框（歷史紀錄、自動完成）
- [ ] StatusBar 狀態列（HP/MP/EXP bar）
- [ ] MiniMap ASCII 小地圖
- [ ] Inventory 背包面板
- [ ] PartyPanel 隊伍面板
- [ ] SkillBar 技能列

### 6.3 WebSocket 連線
- [ ] 連線管理 hook（useWebSocket）
- [ ] 自動重連
- [ ] 訊息分發到對應 store

### 6.4 遊戲流程頁面
- [ ] 登入 / 角色選擇頁
- [ ] 角色建立頁
- [ ] 遊戲主畫面（Terminal + 側邊面板）

---

## Phase 7：多人互動

### 7.1 多人同步
- [ ] 同房間玩家列表
- [ ] 進出房間廣播
- [ ] 房間內聊天（say）
- [ ] 全域聊天（shout）

### 7.2 組隊系統
- [ ] 邀請 / 接受 / 拒絕
- [ ] 隊長機制
- [ ] 組隊戰鬥（同隊共享遭遇）
- [ ] 經驗值 / 掉落分配

### 7.3 交易系統
- [ ] 玩家對玩家交易
- [ ] 交易確認流程

---

## Phase 8：Arinova 整合

### 8.1 認證
- [ ] Arinova OAuth 登入流程
- [ ] Callback 處理
- [ ] Token 管理（存取、刷新）
- [ ] 訪客模式（不登入也能玩，但功能受限）

### 8.2 AI Agent
- [ ] Agent 控制器（管理 AI 角色的遊戲循環）
- [ ] 探索模式 Prompt 模板
- [ ] 戰鬥模式 Prompt 模板
- [ ] AI 回應解析器（模糊匹配指令）
- [ ] Fallback 行為（解析失敗時的預設動作）
- [ ] AI 行動節奏控制（避免太快/太慢）
- [ ] 玩家綁定 AI agent（帶自己的 AI 隊友）

### 8.3 經濟系統
- [ ] Arinova 代幣對接（charge/award/balance）
- [ ] Premium 商店（外觀、復活道具）
- [ ] PvP 下注機制

---

## Phase 9：進階內容

### 9.1 副本系統
- [ ] 副本定義（入口、房間、Boss、獎勵）
- [ ] 副本實例管理（每隊獨立副本）
- [ ] 首通獎勵

### 9.2 PvP
- [ ] 決鬥系統（雙方同意）
- [ ] 競技場（匹配制）

### 9.3 任務系統
- [ ] 任務定義（對話觸發、完成條件、獎勵）
- [ ] 轉職任務
- [ ] 每日任務

### 9.4 排行榜
- [ ] 等級排行
- [ ] PvP 排行
- [ ] 副本通關速度

---

## Phase 10：測試

### 10.1 單元測試
- [ ] 傷害公式測試（各種屬性組合、相剋、暴擊邊界）
- [ ] 技能效果測試（buff/debuff 疊加、冷卻、MP 消耗）
- [ ] 經驗值 / 升級計算測試
- [ ] 屬性衍生值計算測試
- [ ] 指令解析器測試（正常指令、別名、錯誤輸入）
- [ ] 掉落機率測試（LUK 影響、掉落表正確性）

### 10.2 整合測試
- [ ] WebSocket 連線 / 斷線 / 重連流程
- [ ] 角色建立 → 存檔 → 讀檔完整流程
- [ ] 戰鬥完整流程（遭遇 → 多回合 → 勝利/全滅 → 獎勵）
- [ ] 轉職流程（條件檢查 → NPC 對話 → 轉職 → 技能學習）
- [ ] 組隊戰鬥（多人同步、經驗分配）
- [ ] 交易流程（發起 → 確認 → 物品轉移）
- [ ] Arinova OAuth 登入完整流程
- [ ] AI Agent 行為循環（prompt → 回應 → 解析 → 執行）

### 10.3 壓力 / 邊界測試
- [ ] 多人同房間壓力測試（50+ 玩家同房間）
- [ ] 大量 AI agent 同時行動
- [ ] 資料庫讀寫壓力（大量角色同時存檔）
- [ ] WebSocket 訊息洪水處理（rate limiting）
- [ ] 邊界情況（HP 歸零同時觸發不屈意志、同時擊殺等）

### 10.4 遊戲平衡測試
- [ ] 各職業 DPS 模擬（同等級裝備下的輸出比較）
- [ ] 坦克承傷能力測試
- [ ] 治療量 vs 傷害量平衡
- [ ] 升級曲線體驗（是否太快/太慢）
- [ ] 經濟平衡（金幣收入 vs 支出）
- [ ] AI agent vs 真人操作效率對比

### 10.5 前端測試
- [ ] 元件渲染測試（Terminal、StatusBar、MiniMap）
- [ ] WebSocket 狀態同步測試
- [ ] 指令歷史與自動完成
- [ ] RWD / 不同螢幕尺寸

---

## 執行順序

```
Phase 1 (基礎) ──→ Phase 2 (伺服器) ──→ Phase 3 (世界) ──┐
                                                          │
Phase 4 (角色) ←──────────────────────────────────────────┘
     │
     ├──→ Phase 5 (戰鬥)
     │
     └──→ Phase 6 (前端) ──→ Phase 7 (多人) ──→ Phase 8 (Arinova)
                                                     │
                                                     └──→ Phase 9 (進階)
                                                              │
                                                              └──→ Phase 10 (測試)

* 測試在每個 Phase 完成後持續進行，Phase 10 是最終全面測試
```

Phase 1-6 是可玩 MVP 的最低需求。
Phase 7-8 加入多人與 AI。
Phase 9 是長期內容擴充。
Phase 10 是全面測試與平衡調整。

---

## 預估工作量（檔案數）

| Phase | 預估檔案數 | 核心檔案 |
|-------|----------|---------|
| 1 骨架 | ~8 | tsconfig, package.json, workspace |
| 2 伺服器 | ~8 | index.ts, handler.ts, schema.ts, queries.ts |
| 3 世界 | ~6 | world.ts, rooms data, npc.ts |
| 4 角色 | ~8 | player.ts, classes.ts, skills.ts, items.ts |
| 5 戰鬥 | ~6 | combat.ts, damage.ts, effects.ts, loot.ts |
| 6 前端 | ~12 | App, Terminal, CommandInput, StatusBar, stores |
| 7 多人 | ~4 | party.ts, trade.ts, chat.ts |
| 8 Arinova | ~6 | auth.ts, agent.ts, prompt.ts, economy.ts |
| 9 進階 | ~8 | dungeon.ts, pvp.ts, quest.ts, leaderboard.ts |
| 10 測試 | ~10 | *.test.ts, balance simulation scripts |
| **合計** | **~76** | |
