export type DataMode = "mock" | "postgres";

export function getDataMode(): DataMode {
  const mode = process.env.DATA_MODE ?? "mock";
  if (mode === "postgres") return "postgres";
  return "mock";
}

const PRODUCTION_SITE_URL = "https://keremteknikservis.com";

/**
 * Public site origin used by sitemap, canonical, robots and JSON-LD.
 * Rejects placeholder domains (e.g. example.com) so Search Console
 * never receives disallowed hostnames.
 */
export function getSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  const isPlaceholder =
    !raw ||
    /example\.com/i.test(raw) ||
    /localhost|127\.0\.0\.1/i.test(raw);

  if (process.env.NODE_ENV === "production") {
    if (isPlaceholder) {
      return PRODUCTION_SITE_URL;
    }
    return raw;
  }

  return raw || "http://localhost:3000";
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
