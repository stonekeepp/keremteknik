import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, getAuthService } from "@/lib/auth";

export async function getServerSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const auth = getAuthService();
  return auth.getSession(token);
}

export async function requireAdminSession() {
  const session = await getServerSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}
