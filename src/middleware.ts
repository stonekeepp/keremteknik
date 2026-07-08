import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/config/env";
import { verifyAdminSessionToken } from "@/lib/auth/edge-session";

const PUBLIC_ADMIN_PATHS = ["/admin/login"];
const NOINDEX_HEADER = "noindex, nofollow";

function withNoIndex(response: NextResponse) {
  response.headers.set("X-Robots-Tag", NOINDEX_HEADER);
  return response;
}

function redirectToLogin(request: NextRequest, from: string) {
  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("from", from);
  return withNoIndex(NextResponse.redirect(loginUrl));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    return withNoIndex(NextResponse.next());
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!token) {
    return redirectToLogin(request, pathname);
  }

  const session = await verifyAdminSessionToken(token);
  if (!session) {
    return redirectToLogin(request, pathname);
  }

  return withNoIndex(NextResponse.next());
}

export const config = {
  matcher: ["/admin/:path*"],
};
