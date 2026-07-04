export type DataMode = "mock" | "postgres";

export function getDataMode(): DataMode {
  const mode = process.env.DATA_MODE ?? "mock";
  if (mode === "postgres") return "postgres";
  return "mock";
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function getJwtSecret(): string {
  return process.env.JWT_SECRET ?? "dev-jwt-secret";
}

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? "",
    password: process.env.ADMIN_PASSWORD ?? "",
  };
}

export const AUTH_COOKIE_NAME = "kerem_admin_session";
