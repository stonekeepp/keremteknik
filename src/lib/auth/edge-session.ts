import { jwtVerify } from "jose/jwt/verify";
import { getDataMode, getJwtSecret } from "@/lib/config/env";
import type { SessionUser } from "./types";

function getSecretKey() {
  return new TextEncoder().encode(getJwtSecret());
}

export async function verifyAdminSessionToken(
  token?: string,
): Promise<SessionUser | null> {
  if (!token || getDataMode() !== "mock") return null;

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    const email = payload.email;
    if (typeof email !== "string") return null;
    return { email };
  } catch {
    return null;
  }
}
