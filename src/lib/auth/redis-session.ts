import type { AuthService } from "./types";

/**
 * Production adapter stub for Redis-backed sessions.
 */
export class RedisSessionService implements AuthService {
  login(): Promise<null> {
    throw new Error("RedisSessionService henüz implement edilmedi.");
  }
  logout(): Promise<void> {
    throw new Error("RedisSessionService henüz implement edilmedi.");
  }
  getSession(): Promise<null> {
    throw new Error("RedisSessionService henüz implement edilmedi.");
  }
}
