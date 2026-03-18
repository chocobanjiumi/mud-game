// Arinova OAuth 整合 — 登入、回呼、Token 管理
// v0.1.3: 使用直接 REST API 呼叫，不依賴 SDK

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

export interface ArinovaUser {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  avatarUrl?: string;
  description?: string;
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
//  REST helper
// ============================================================

function getBaseUrl(): string {
  return authConfig?.baseUrl || 'https://api.chat-staging.arinova.ai';
}

async function apiGet<T>(path: string, accessToken: string): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}

async function apiPost<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}

// ============================================================
//  初始化
// ============================================================

/** 初始化 Auth 配置（v0.1.3: 不再呼叫 Arinova.init） */
export function initArinovaAuth(config: ArinovaAuthConfig): void {
  authConfig = config;
  console.log('[Auth] Arinova Auth 已初始化（REST mode）');
}

/** 取得 auth 配置（供其他模組使用） */
export function getAuthConfig(): ArinovaAuthConfig | null {
  return authConfig;
}

// ============================================================
//  HTTP 路由處理器
// ============================================================

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

  const redirectUrl = `${getBaseUrl()}/oauth/authorize?${params.toString()}`;
  return { redirectUrl, state };
}

export async function handleOAuthCallback(code: string, state: string): Promise<{
  success: boolean;
  session?: AuthSession;
  error?: string;
}> {
  if (!authConfig) {
    return { success: false, error: 'Arinova Auth 尚未初始化' };
  }

  const stateTs = pendingStates.get(state);
  if (!stateTs) {
    return { success: false, error: '無效的 state 參數' };
  }
  pendingStates.delete(state);

  if (Date.now() - stateTs > 300_000) {
    return { success: false, error: 'OAuth state 已過期' };
  }

  try {
    // Exchange code for token via REST
    const tokenResult = await apiPost<{ access_token: string; user: ArinovaUser }>(
      '/oauth/token',
      {
        code,
        client_id: authConfig.clientId,
        client_secret: authConfig.clientSecret,
        redirect_uri: authConfig.redirectUri,
        grant_type: 'authorization_code',
      },
    );

    const { user, access_token: accessToken } = tokenResult;

    // Fetch user's agents
    let agents: AgentInfo[] = [];
    try {
      agents = await apiGet<AgentInfo[]>('/api/v1/user/agents', accessToken);
    } catch (err) {
      console.error('[Auth] 取得 Agent 列表失敗:', err);
    }

    const session: AuthSession = {
      userId: user.id,
      accessToken,
      user,
      agents,
      expiresAt: Date.now() + 3_600_000,
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

export function getAuthSession(userId: string): AuthSession | undefined {
  const session = sessions.get(userId);
  if (!session) return undefined;

  if (Date.now() > session.expiresAt) {
    sessions.delete(userId);
    return undefined;
  }

  return session;
}

export function getCachedToken(userId: string): string | null {
  const session = getAuthSession(userId);
  return session?.accessToken ?? null;
}

export function getCachedUser(userId: string): ArinovaUser | null {
  const session = getAuthSession(userId);
  return session?.user ?? null;
}

export function getCachedAgents(userId: string): AgentInfo[] {
  const session = getAuthSession(userId);
  return session?.agents ?? [];
}

export function updateAccessToken(userId: string, newToken: string): boolean {
  const session = sessions.get(userId);
  if (!session) return false;
  session.accessToken = newToken;
  session.expiresAt = Date.now() + 3_600_000;
  return true;
}

export function removeAuthSession(userId: string): void {
  sessions.delete(userId);
  console.log(`[Auth] Session 移除: ${userId}`);
}

export function clearTokenCache(userId: string): void {
  sessions.delete(userId);
}

// ============================================================
//  驗證
// ============================================================

export async function validateToken(accessToken: string): Promise<ArinovaUser | null> {
  try {
    console.log(`[Auth] validateToken called, token prefix: ${accessToken?.substring(0, 20)}...`);
    const user = await apiGet<ArinovaUser>('/api/v1/user/profile', accessToken);
    console.log(`[Auth] validateToken success:`, user);
    return user;
  } catch (err) {
    console.error(`[Auth] validateToken FAILED:`, err instanceof Error ? err.message : err);
    return null;
  }
}

export function isGuestUser(userId: string): boolean {
  return userId.startsWith('guest_');
}

export async function getUserAgents(userId: string): Promise<AgentInfo[]> {
  const session = sessions.get(userId);
  if (!session?.accessToken) return [];

  try {
    const agents = await apiGet<AgentInfo[]>('/api/v1/user/agents', session.accessToken);
    session.agents = agents;
    return agents;
  } catch {
    return session.agents;
  }
}

// ============================================================
//  Express 路由整合
// ============================================================

export function registerAuthRoutes(app: {
  get: (path: string, handler: (req: any, res: any) => void | Promise<void>) => void;
}): void {
  app.get('/auth/login', (_req: any, res: any) => {
    try {
      const { redirectUrl } = handleLoginRequest();
      res.redirect(redirectUrl);
    } catch {
      res.status(500).json({ error: '登入服務未就緒' });
    }
  });

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

setInterval(cleanupExpiredSessions, 300_000);
