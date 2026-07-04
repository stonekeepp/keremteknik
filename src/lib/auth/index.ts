import { getDataMode } from "@/lib/config/env";
import { MockSessionService } from "./mock-session";
import { RedisSessionService } from "./redis-session";
import type { AuthService } from "./types";

export function getAuthService(): AuthService {
  if (getDataMode() === "postgres") {
    return new RedisSessionService();
  }
  return new MockSessionService();
}

export { AUTH_COOKIE_NAME, MockSessionService } from "./mock-session";
