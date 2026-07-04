import { SignJWT, jwtVerify } from "jose";
import {
  AUTH_COOKIE_NAME,
  getAdminCredentials,
  getJwtSecret,
} from "@/lib/config/env";
import type { AuthService, SessionUser } from "./types";

function getSecretKey() {
  return new TextEncoder().encode(getJwtSecret());
}

export class MockSessionService implements AuthService {
  async login(email: string, password: string): Promise<SessionUser | null> {
    const creds = getAdminCredentials();
    if (!creds.email || !creds.password) return null;
    if (email !== creds.email || password !== creds.password) return null;
    return { email };
  }

  async createToken(user: SessionUser): Promise<string> {
    return new SignJWT({ email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(getSecretKey());
  }

  async getSession(token?: string): Promise<SessionUser | null> {
    if (!token) return null;
    try {
      const { payload } = await jwtVerify(token, getSecretKey());
      const email = payload.email;
      if (typeof email !== "string") return null;
      return { email };
    } catch {
      return null;
    }
  }

  async logout(): Promise<void> {
    // Cookie cleared by API route
  }
}

export function getAuthService(): AuthService {
  return new MockSessionService();
}

export { AUTH_COOKIE_NAME };
