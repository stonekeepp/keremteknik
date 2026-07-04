import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Admin Panel",
  description: "Kerem Teknik Servis yönetim paneli",
  path: "/admin",
  noIndex: true,
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <AdminSidebar />
      <div className="flex-grow p-6 md:p-8">{children}</div>
    </div>
  );
}
