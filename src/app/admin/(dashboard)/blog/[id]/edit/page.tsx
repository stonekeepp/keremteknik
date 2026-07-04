"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogForm } from "@/components/admin/BlogForm";
import type { BlogPost, BlogPostInput } from "@/lib/blog/types";

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [initial, setInitial] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/blog/${id}`)
      .then((res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.post) setInitial(data.post);
        setLoading(false);
      });
  }, [id, router]);

  const handleSubmit = async (data: BlogPostInput) => {
    setSaving(true);
    setError("");
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Güncelleme hatası");
      return;
    }
    router.push("/admin/blog");
    router.refresh();
  };

  if (loading) {
    return <p className="text-on-surface-variant">Yükleniyor...</p>;
  }

  if (!initial) {
    return <p className="text-error">Yazı bulunamadı.</p>;
  }

  return (
    <div>
      <h1 className="text-headline-md font-headline-md text-primary mb-8">
        Blog Düzenle
      </h1>
      {error && (
        <p className="mb-4 text-error bg-error-container px-4 py-3 rounded-lg">
          {error}
        </p>
      )}
      <BlogForm initial={initial} onSubmit={handleSubmit} loading={saving} />
    </div>
  );
}
