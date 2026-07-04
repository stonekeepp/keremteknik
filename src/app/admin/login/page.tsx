import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Admin Giriş",
  description: "Kerem Teknik Servis yönetim paneli girişi",
  path: "/admin/login",
  noIndex: true,
});

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
