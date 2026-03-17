// Arinova OAuth 整合 — 登入、回呼、Token 管理

import { Arinova } from '@arinova-ai/spaces-sdk';
import type { ArinovaUser, AgentInfo } from '@arinova-ai/spaces-sdk';
import { randomUUID } from 'crypto';

// ============================================================
//  型別
// ============================================================

export interface ArinovaAuthConfig {
  appId: string;
  clientId: string;
  clientSecret: string;
  baseUrl?: string;
  redirectUri: string;
}

export interface AuthSession {
  userId: string;
  accessToken: string | null;
  user: ArinovaUser | null;
  agents: AgentInfo[];
  expiresAt: number;
  createdAt: number;
}

// ============================================================
//  模組狀態
// ============================================================

let authConfig: ArinovaAuthConfig | null = null;

/** userId -> AuthSession */
const sessions = new Map<string, AuthSession>();

/** OAuth state -> 時間戳（防 CSRF） */
const pendingStates = new Map<string, number>();

// ============================================================
//  初始化
// ============================================================

/** 初始化 Arinova SDK 與 Auth 配置 */
export function initArinovaAuth(config: ArinovaAuthConfig): void {
  authConfig = config;

  Arinova.init({
    appId: config.appId,
    baseUrl: config.baseUrl,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
  });

  console.log('[Auth] Arinova SDK 已初始化');
}

/** 取得 auth 配置（供其他模組使用） */
export function getAuthConfig(): ArinovaAuthConfig | null {
  return authConfig;
}

// ============================================================
//  HTTP 路由處理器
// ============================================================

/**
 * GET /auth/login
 * 產生 Arinova OAuth 授權 URL，供客戶端跳轉
 */
export function handleLoginRequest(): { redirectUrl: string; state: string } {
  if (!authConfig) {
    throw new Error('Arinova Auth 尚未初始化');
  }

  const state = randomUUID();
  pendingStates.set(state, Date.now());

  const params = new URLSearchParams({
    client_id: authConfig.appId,
    redirect_uri: authConfig.redirectUri,
    scope: 'profile agents economy',
    state,
    response_type: 'code',
  });

  const baseUrl = authConfig.baseUrl || 'https://api.arinova.ai';
  const redirectUrl = `${baseUrl}/oauth/authorize?${params.toString()}`;

  return { redirectUrl, state };
}

/**
 * GET /auth/callback?code=xxx&state=xxx
 * 處理 OAuth 回呼，交換 access token 並快取
 */
export async function handleOAuthCallback(code: string, state: string): Promise<{
  success: boolean;
  session?: AuthSession;
  error?: string;
}> {
  if (!authConfig) {
    return { success: false, error: 'Arinova Auth 尚未初始化' };
  }

  // 驗證 state（防 CSRF）
  const stateTs = pendingStates.get(state);
  if (!stateTs) {
    return { success: false, error: '無效的 state 參數' };
  }
  pendingStates.delete(state);

  // state 5 分鐘內有效
  if (Date.now() - stateTs > 300_000) {
    return { success: false, error: 'OAuth state 已過期' };
  }

  try {
    // 交換 code 取得 token
    const { user, accessToken } = await Arinova.handleCallback({
      code,
      clientId: authConfig.clientId,
      clientSecret: authConfig.clientSecret,
      redirectUri: authConfig.redirectUri,
    });

    // 取得使用者的 Agent 列表
    let agents: AgentInfo[] = [];
    try {
      agents = await Arinova.user.agents(accessToken);
    } catch (err) {
      console.error('[Auth] 取得 Agent 列表失敗:', err);
    }

    const session: AuthSession = {
      userId: user.id,
      accessToken,
      user,
      agents,
      expiresAt: Date.now() + 3_600_000, // 1 小時
      createdAt: Date.now(),
    };

    sessions.set(user.id, session);
    console.log(`[Auth] OAuth 登入成功: ${user.name} (${user.id})`);

    return { success: true, session };
  } catch (err) {
    const message = err instanceof Error ? err.message : '未知錯誤';
    console.error('[Auth] OAuth 回呼失敗:', message);
    return { success: false, error: message };
  }
}

// ============================================================
//  Token 管理
// ============================================================

/** 取得使用者的 auth session */
export function getAuthSession(userId: string): AuthSession | undefined {
  const session = sessions.get(userId);
  if (!session) return undefined;

  // 檢查是否過期
  if (Date.now() > session.expiresAt) {
    sessions.delete(userId);
    return undefined;
  }

  return session;
}

/** 取得快取的 access token */
export function getCachedToken(userId: string): string | null {
  const session = getAuthSession(userId);
  return session?.accessToken ?? null;
}

/** 取得快取的使用者資訊 */
export function getCachedUser(userId: string): ArinovaUser | null {
  const session = getAuthSession(userId);
  return session?.user ?? null;
}

/** 取得快取的 Agent 列表 */
export function getCachedAgents(userId: string): AgentInfo[] {
  const session = getAuthSession(userId);
  return session?.agents ?? [];
}

/** 更新 access token */
export function updateAccessToken(userId: string, newToken: string): boolean {
  const session = sessions.get(userId);
  if (!session) return false;
  session.accessToken = newToken;
  session.expiresAt = Date.now() + 3_600_000; // 續期 1 小時
  return true;
}

/** 移除 session（登出） */
export function removeAuthSession(userId: string): void {
  sessions.delete(userId);
  console.log(`[Auth] Session 移除: ${userId}`);
}

/** 清除 token 快取 */
export function clearTokenCache(userId: string): void {
  sessions.delete(userId);
}

// ============================================================
//  驗證
// ============================================================

/** 驗證 access token 是否有效 */
export async function validateToken(accessToken: string): Promise<ArinovaUser | null> {
  try {
    const user = await Arinova.user.profile(accessToken);
    return user;
  } catch {
    return null;
  }
}

/** 檢查 userId 是否為訪客 */
export function isGuestUser(userId: string): boolean {
  return userId.startsWith('guest_');
}

/** 取得使用者的 AI Agent 列表（含 API 刷新） */
export async function getUserAgents(userId: string): Promise<AgentInfo[]> {
  const session = sessions.get(userId);
  if (!session?.accessToken) return [];

  try {
    const agents = await Arinova.user.agents(session.accessToken);
    session.agents = agents; // 更新快取
    return agents;
  } catch {
    return session.agents; // 回傳快取
  }
}

// ============================================================
//  Express 路由整合
// ============================================================

/**
 * 註冊 Auth 相關的 HTTP 路由
 * 路由：GET /auth/login, GET /auth/callback
 */
export function registerAuthRoutes(app: {
  get: (path: string, handler: (req: any, res: any) => void | Promise<void>) => void;
}): void {
  // GET /auth/login — 跳轉到 Arinova OAuth
  app.get('/auth/login', (_req: any, res: any) => {
    try {
      const { redirectUrl } = handleLoginRequest();
      res.redirect(redirectUrl);
    } catch {
      res.status(500).json({ error: '登入服務未就緒' });
    }
  });

  // GET /auth/callback — 處理 OAuth 回呼
  app.get('/auth/callback', async (req: any, res: any) => {
    const { code, state } = req.query;
    if (!code) {
      res.status(400).json({ error: '缺少授權碼' });
      return;
    }

    const result = await handleOAuthCallback(code as string, state as string);
    if (result.success && result.session) {
      res.json({
        userId: result.session.userId,
        userName: result.session.user?.name,
        agents: result.session.agents.map(a => ({ id: a.id, name: a.name })),
      });
    } else {
      res.status(401).json({ error: result.error ?? '登入失敗' });
    }
  });

}

// ============================================================
//  清理
// ============================================================

/** 清理過期的 session 和 state */
export function cleanupExpiredSessions(): void {
  const now = Date.now();

  for (const [userId, session] of sessions) {
    if (now > session.expiresAt) {
      sessions.delete(userId);
    }
  }

  for (const [state, ts] of pendingStates) {
    if (now - ts > 300_000) {
      pendingStates.delete(state);
    }
  }
}

// 每 5 分鐘清理一次
setInterval(cleanupExpiredSessions, 300_000);
