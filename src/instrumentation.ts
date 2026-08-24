export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.DATA_MODE === "postgres") return;

  const { warmBlogDb } = await import("@/lib/blog/mock-repository");
  await warmBlogDb();
}
