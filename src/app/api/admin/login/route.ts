import { NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAME,
  getAuthService,
  MockSessionService,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email as string;
  const password = body.password as string;

  const auth = getAuthService();
  const user = await auth.login(email, password);

  if (!user) {
    return NextResponse.json(
      { error: "Geçersiz e-posta veya şifre" },
      { status: 401 },
    );
  }

  const token = await (auth as MockSessionService).createToken(user);
  const response = NextResponse.json({ user });
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
