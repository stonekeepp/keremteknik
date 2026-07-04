import { AdminSidebar } from "@/components/admin/AdminSidebar";

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
