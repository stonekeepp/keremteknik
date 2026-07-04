"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="w-full md:w-64 bg-primary text-on-primary min-h-screen p-6 flex flex-col">
      <Link href="/admin/blog" className="mb-8 block">
        <img
          src="/brand/icon.svg"
          alt="Kerem Teknik Servis"
          width={48}
          height={42}
          className="h-10 w-auto brightness-0 invert"
        />
      </Link>
      <nav className="flex flex-col gap-2 flex-grow">
        <Link
          href="/admin/blog"
          className={`px-4 py-3 rounded-lg text-label-md font-label-md transition-colors ${
            pathname.startsWith("/admin/blog")
              ? "bg-primary-container text-on-primary-container"
              : "hover:bg-primary-container/50"
          }`}
        >
          Blog Yönetimi
        </Link>
        <Link
          href="/"
          className="px-4 py-3 rounded-lg text-label-md font-label-md hover:bg-primary-container/50 transition-colors"
        >
          Siteyi Görüntüle
        </Link>
      </nav>
      <button
        type="button"
        onClick={handleLogout}
        className="mt-auto px-4 py-3 rounded-lg border border-on-primary/30 text-label-md font-label-md hover:bg-primary-container/50 transition-colors text-left"
      >
        Çıkış Yap
      </button>
    </aside>
  );
}
