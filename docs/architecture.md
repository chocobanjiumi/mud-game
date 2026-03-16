# 技術架構

## Tech Stack

| 層級 | 技術 | 說明 |
|------|------|------|
| **前端** | React + Vite | SPA，文字為主的 MUD 介面 |
| **後端** | Node.js + Fastify | 遊戲伺服器 |
| **即時通訊** | WebSocket (ws) | 雙向即時通訊 |
| **資料庫** | SQLite (better-sqlite3) | 輕量持久化，開發快 |
| **AI 整合** | @arinova-ai/spaces-sdk | 玩家認證、AI agent、經濟系統 |
| **語言** | TypeScript | 全端共用型別 |

> SQLite 先跑，之後需要可以換 PostgreSQL。

---

## 專案結構

```
game2/
├── packages/
│   └── shared/              # 前後端共用型別與常數
│       ├── types/
│       │   ├── player.ts    # 玩家、角色、屬性
│       │   ├── skill.ts     # 技能定義
│       │   ├── combat.ts    # 戰鬥相關
│       │   ├── world.ts     # 房間、地圖、NPC
│       │   ├── item.ts      # 物品、裝備
│       │   └── protocol.ts  # WebSocket 訊息格式
│       └── constants/
│           ├── classes.ts    # 職業定義與技能表
│           ├── monsters.ts   # 怪物資料
│           └── items.ts      # 物品資料
│
├── server/
│   ├── src/
│   │   ├── index.ts         # 進入點，Fastify + WS 啟動
│   │   ├── ws/
│   │   │   ├── handler.ts   # WebSocket 連線管理
│   │   │   └── protocol.ts  # 訊息路由
│   │   ├── game/
│   │   │   ├── world.ts     # 世界管理（房間、區域）
│   │   │   ├── combat.ts    # 戰鬥引擎
│   │   │   ├── player.ts    # 玩家狀態管理
│   │   │   ├── npc.ts       # NPC 行為
│   │   │   ├── loot.ts      # 掉落計算
│   │   │   └── commands.ts  # 指令解析器
│   │   ├── ai/
│   │   │   ├── agent.ts     # AI agent 控制器
│   │   │   └── prompt.ts    # Prompt 組裝（戰鬥/探索/對話）
│   │   ├── auth/
│   │   │   └── arinova.ts   # Arinova OAuth 整合
│   │   ├── economy/
│   │   │   └── currency.ts  # 代幣系統（對接 Arinova economy）
│   │   └── db/
│   │       ├── schema.ts    # SQLite schema
│   │       └── queries.ts   # 資料存取
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── Terminal.tsx  # 主要文字輸出區
│   │   │   ├── CommandInput.tsx  # 指令輸入框
│   │   │   ├── StatusBar.tsx    # HP/MP/EXP 狀態列
│   │   │   ├── MiniMap.tsx      # ASCII 小地圖
│   │   │   ├── Inventory.tsx    # 背包
│   │   │   └── PartyPanel.tsx   # 隊伍面板
│   │   ├── hooks/
│   │   │   ├── useWebSocket.ts  # WS 連線管理
│   │   │   └── useGame.ts      # 遊戲狀態
│   │   └── stores/
│   │       └── gameStore.ts    # Zustand 遊戲狀態
│   └── package.json
│
├── docs/
│   ├── class-system.md      # 職業技能設計（已完成）
│   └── architecture.md      # 本文件
└── package.json             # workspace root
```

---

## 系統架構圖

```
                        ┌──────────────────────────┐
                        │      Arinova Platform     │
                        │  ┌─────┐ ┌─────┐ ┌─────┐ │
                        │  │OAuth│ │Agent│ │Econ │ │
                        │  │ API │ │ API │ │ API │ │
                        │  └──┬──┘ └──┬──┘ └──┬──┘ │
                        └─────┼───────┼───────┼────┘
                              │       │       │
┌──────────┐  WebSocket  ┌────┴───────┴───────┴────┐
│  Browser  │◄──────────►│      Game Server         │
│  Client   │            │                          │
│           │  HTTP      │  ┌──────────────────┐    │
│  - 終端機  │◄──────────►│  │  Game Engine      │    │
│  - 狀態列  │  (auth)    │  │  ├─ World Manager  │    │
│  - 小地圖  │            │  │  ├─ Combat Engine  │    │
│  - 背包   │            │  │  ├─ Command Parser │    │
│  - 隊伍   │            │  │  └─ Loot System    │    │
└──────────┘            │  └──────────────────┘    │
                        │                          │
                        │  ┌──────────────────┐    │
                        │  │  AI Controller     │    │
                        │  │  (每個 AI agent     │    │
                        │  │   一個 game loop)   │    │
                        │  └──────────────────┘    │
                        │                          │
                        │  ┌──────────────────┐    │
                        │  │  SQLite Database   │    │
                        │  └──────────────────┘    │
                        └──────────────────────────┘
```

---

## WebSocket 訊息協議

所有訊息用 JSON，統一格式：

```typescript
// Client → Server
interface ClientMessage {
  type: "command";
  payload: string;  // 原始指令文字，如 "attack goblin"
}

// Server → Client
interface ServerMessage {
  type:
    | "narrative"    // 場景描述、故事文字
    | "combat"       // 戰鬥訊息
    | "system"       // 系統提示
    | "chat"         // 玩家/NPC 對話
    | "status"       // 狀態更新（HP/MP/EXP 等）
    | "room"         // 房間資訊（進入新房間時）
    | "inventory"    // 背包更新
    | "party";       // 隊伍更新
  payload: Record<string, any>;
  timestamp: number;
}
```

---

## 指令系統

MUD 的核心。玩家（真人或 AI）透過文字指令互動。

### 基礎指令
| 指令 | 說明 |
|------|------|
| `look` | 查看當前房間 |
| `go <方向>` | 移動（north/south/east/west/up/down） |
| `map` | 顯示周圍地圖 |
| `status` | 查看自身狀態 |
| `inventory` / `inv` | 查看背包 |

### 互動指令
| 指令 | 說明 |
|------|------|
| `talk <NPC>` | 與 NPC 對話 |
| `take <物品>` | 撿起物品 |
| `use <物品>` | 使用物品 |
| `equip <裝備>` | 裝備物品 |
| `drop <物品>` | 丟棄物品 |
| `give <玩家> <物品>` | 給予物品 |

### 戰鬥指令
| 指令 | 說明 |
|------|------|
| `attack <目標>` | 普通攻擊 |
| `skill <技能名> [目標]` | 使用技能 |
| `defend` | 防禦 |
| `flee` | 逃跑 |

### 社交指令
| 指令 | 說明 |
|------|------|
| `say <訊息>` | 房間內說話 |
| `party invite <玩家>` | 邀請組隊 |
| `party leave` | 離開隊伍 |
| `trade <玩家>` | 發起交易 |

---

## 戰鬥系統

回合制，但以「即時回合」方式運作（每回合有時間限制）。

### 流程

```
1. 遭遇觸發（進入房間 / 主動攻擊 / 被伏擊）
   │
2. 進入戰鬥模式
   │
3. 每回合（5 秒時限）：
   ├─ 所有參戰者選擇行動
   ├─ 真人玩家：輸入指令
   ├─ AI agent：收到 prompt → 回傳行動
   ├─ 怪物 AI：固定行為模式
   │
4. 行動結算（依 DEX 決定先後順序）
   ├─ 傷害計算
   ├─ 狀態效果結算
   ├─ 死亡判定
   │
5. 回合結束
   ├─ 持續效果 tick（毒、回血等）
   ├─ 冷卻遞減
   │
6. 戰鬥結束判定
   ├─ 勝利 → EXP + 掉落 + 金幣
   └─ 全滅 → 回到最近的重生點，損失部分金幣
```

### 傷害公式

```
物理傷害 = (ATK × 技能倍率 - DEF × 0.5) × (1 + 暴擊加成) × 屬性相剋
魔法傷害 = (MATK × 技能倍率 - MDEF × 0.3) × (1 + 暴擊加成) × 屬性相剋

ATK  = STR × 2 + 武器攻擊力
MATK = INT × 2 + 武器魔攻
DEF  = VIT × 1.5 + 護甲防禦
MDEF = INT × 0.5 + VIT × 0.5 + 護甲魔防

暴擊率 = DEX × 0.3% + LUK × 0.2% + 技能加成
暴擊傷害 = 150% (基礎) + 裝備/技能加成
閃避率 = DEX × 0.4% + LUK × 0.1% + 技能加成

命中率 = 95% + (攻方 DEX - 守方 DEX) × 0.5%
```

### 屬性相剋

```
火 → 冰 → 雷 → 火（三角相剋，+30% 傷害）
光 ←→ 暗（互剋，+25% 傷害）
自然：對所有屬性中性
```

---

## AI Agent 整合

### 行為循環

```
Server 遊戲循環
  │
  ├─ 真人玩家：等待 WebSocket 指令
  │
  └─ AI Agent：
      1. 組裝情境 prompt（見下方）
      2. 呼叫 Arinova.agent.chat()
      3. 解析回應為遊戲指令
      4. 執行指令
      5. 若解析失敗 → 執行預設行動（普通攻擊/待機）
```

### Prompt 模板

#### 探索模式
```
你是「{角色名}」，一名 Lv{等級} {職業}。
你的個性：{agent 設定的性格描述}

【當前位置】{房間名}
{房間描述}

【可見出口】{方向列表}
【可見物品】{物品列表}
【場景中的角色】{NPC/玩家列表}

【你的狀態】HP:{current}/{max} MP:{current}/{max}

請選擇下一步行動，回覆一個指令：
（可用指令：go/look/take/talk/attack/skill/use/say）
```

#### 戰鬥模式
```
你是「{角色名}」，一名 Lv{等級} {職業}。
你正在戰鬥中！第 {N} 回合。

【隊伍】
{隊友列表含 HP/MP/狀態}

【敵人】
{敵人列表含 HP 估計/狀態效果/正在做的事}

【你的狀態】HP:{current}/{max} MP:{current}/{max}
【增益效果】{buff 列表}
【減益效果】{debuff 列表}

【可用技能】（冷卻中的不顯示）
{編號. 技能名 - MP消耗 - 簡述}

請選擇行動，回覆格式：「技能名 目標」
```

### 指令解析

AI 回覆可能不完美，需要模糊匹配：

```typescript
// "重擊 哥布林" → { skill: "power_strike", target: "goblin_1" }
// "heal alice"  → { skill: "heal", target: "player_alice" }
// "attack"      → { skill: "basic_attack", target: auto_select }
// "我要往北走"   → { command: "go", direction: "north" }
// （無法解析）    → { command: "basic_attack", target: auto_select }
```

---

## 經濟系統

### 遊戲內貨幣
| 貨幣 | 說明 |
|------|------|
| **金幣 (Gold)** | 遊戲內基礎貨幣，打怪/任務獲得 |
| **Arinova 代幣** | 對接 Arinova economy API，真實代幣 |

### 金幣用途
- 商店買裝備、藥水
- 轉職費用
- 副本入場費
- 玩家交易

### Arinova 代幣用途
- 購買特殊外觀 / 稱號
- 復活不扣經驗（premium 復活）
- 開啟特殊副本
- PvP 賭注

### 對接方式
```typescript
// 玩家購買 premium 道具
await Arinova.economy.charge({
  userId, amount: 50,
  description: "購買「鳳凰之羽」復活道具",
  clientId, clientSecret
});

// 副本通關獎勵
await Arinova.economy.award({
  userId, amount: 10,
  description: "通關「暗影地城」首次獎勵",
  clientId, clientSecret
});
```

---

## 資料庫 Schema

```sql
-- 玩家角色
CREATE TABLE characters (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,           -- Arinova user ID
  name TEXT UNIQUE NOT NULL,
  level INTEGER DEFAULT 1,
  exp INTEGER DEFAULT 0,
  class TEXT DEFAULT 'adventurer', -- 職業 ID
  hp INTEGER DEFAULT 100,
  mp INTEGER DEFAULT 30,
  max_hp INTEGER DEFAULT 100,
  max_mp INTEGER DEFAULT 30,
  str INTEGER DEFAULT 5,
  int_ INTEGER DEFAULT 5,
  dex INTEGER DEFAULT 5,
  vit INTEGER DEFAULT 5,
  luk INTEGER DEFAULT 5,
  free_points INTEGER DEFAULT 0,
  gold INTEGER DEFAULT 100,
  room_id TEXT DEFAULT 'town_square',
  is_ai INTEGER DEFAULT 0,        -- 是否為 AI agent
  agent_id TEXT,                   -- Arinova agent ID（AI 用）
  created_at INTEGER DEFAULT (unixepoch()),
  last_login INTEGER DEFAULT (unixepoch())
);

-- 背包
CREATE TABLE inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  character_id TEXT NOT NULL REFERENCES characters(id),
  item_id TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  equipped INTEGER DEFAULT 0       -- 0=背包, 1=已裝備
);

-- 技能學習紀錄
CREATE TABLE learned_skills (
  character_id TEXT NOT NULL REFERENCES characters(id),
  skill_id TEXT NOT NULL,
  level INTEGER DEFAULT 1,
  PRIMARY KEY (character_id, skill_id)
);

-- 隊伍
CREATE TABLE parties (
  id TEXT PRIMARY KEY,
  leader_id TEXT NOT NULL REFERENCES characters(id),
  created_at INTEGER DEFAULT (unixepoch())
);

CREATE TABLE party_members (
  party_id TEXT NOT NULL REFERENCES parties(id),
  character_id TEXT NOT NULL REFERENCES characters(id),
  PRIMARY KEY (party_id, character_id)
);
```

---

## 開發階段

### Phase 1：核心可玩（MVP）
- [ ] 專案骨架搭建（monorepo, TypeScript）
- [ ] WebSocket 連線與基礎訊息協議
- [ ] 角色創建（名字 + 屬性分配）
- [ ] 3-5 個房間的小世界
- [ ] 基礎移動與查看指令
- [ ] 遭遇怪物與基礎戰鬥
- [ ] 冒險者階段技能
- [ ] 簡易 terminal UI（文字輸出 + 輸入框）
- [ ] SQLite 存檔

### Phase 2：職業與內容
- [ ] 一轉職業系統（4 職業）
- [ ] 完整技能系統
- [ ] 裝備系統
- [ ] NPC 商店
- [ ] 更多區域與怪物
- [ ] 掉落系統

### Phase 3：多人與 AI
- [ ] Arinova OAuth 登入
- [ ] 多人同房間互動
- [ ] 組隊系統
- [ ] AI agent 接入（Arinova agent API）
- [ ] AI 指令解析器

### Phase 4：進階系統
- [ ] 二轉職業
- [ ] 副本系統
- [ ] PvP
- [ ] Arinova 經濟系統
- [ ] 交易系統
- [ ] 排行榜
