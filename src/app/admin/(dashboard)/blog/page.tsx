"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/blog/types";
import { formatDate } from "@/lib/blog/reading-time";

export default function AdminBlogListPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/blog");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setPosts(data.posts ?? []);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" yazısını silmek istediğinize emin misiniz?`)) return;
    const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      setMessage("Yazı silindi.");
      loadPosts();
    } else {
      const data = await res.json();
      setMessage(data.error ?? "Silme hatası");
    }
  };

  const handleStatus = async (id: string, status: "draft" | "published") => {
    const res = await fetch(`/api/admin/blog/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setMessage(status === "published" ? "Yazı yayınlandı." : "Yazı taslağa alındı.");
      loadPosts();
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-headline-md font-headline-md text-primary">
            Blog Yönetimi
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Tüm blog yazılarını yönetin
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-cta text-white px-6 py-3 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors"
        >
          Yeni Yazı
        </Link>
      </div>

      {message && (
        <div className="mb-4 bg-primary-fixed text-on-primary-fixed px-4 py-3 rounded-lg">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-on-surface-variant">Yükleniyor...</p>
      ) : posts.length === 0 ? (
        <div className="bg-surface rounded-xl p-12 text-center shadow-level-1">
          <p className="text-on-surface-variant mb-4">Henüz blog yazısı yok.</p>
          <Link
            href="/admin/blog/new"
            className="text-secondary font-button text-button hover:underline"
          >
            İlk yazıyı oluştur
          </Link>
        </div>
      ) : (
        <div className="bg-surface rounded-xl shadow-level-1 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="p-4 text-label-md font-label-md text-primary">Başlık</th>
                <th className="p-4 text-label-md font-label-md text-primary">Kategori</th>
                <th className="p-4 text-label-md font-label-md text-primary">Durum</th>
                <th className="p-4 text-label-md font-label-md text-primary">Yayın</th>
                <th className="p-4 text-label-md font-label-md text-primary">Güncelleme</th>
                <th className="p-4 text-label-md font-label-md text-primary">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-outline-variant/50">
                  <td className="p-4 text-body-md text-on-surface">{post.title}</td>
                  <td className="p-4 text-body-md text-on-surface-variant">{post.category}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-label-md ${
                        post.status === "published"
                          ? "bg-primary-container text-on-primary-container"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {post.status === "published" ? "Yayında" : "Taslak"}
                    </span>
                  </td>
                  <td className="p-4 text-body-md text-on-surface-variant">
                    {formatDate(post.publishedAt)}
                  </td>
                  <td className="p-4 text-body-md text-on-surface-variant">
                    {formatDate(post.updatedAt)}
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="text-primary hover:text-secondary text-sm font-label-md"
                      >
                        Düzenle
                      </Link>
                      {post.status === "draft" ? (
                        <button
                          type="button"
                          onClick={() => handleStatus(post.id, "published")}
                          className="text-secondary text-sm font-label-md"
                        >
                          Yayınla
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleStatus(post.id, "draft")}
                          className="text-on-surface-variant text-sm font-label-md"
                        >
                          Taslağa Al
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(post.id, post.title)}
                        className="text-error text-sm font-label-md"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
