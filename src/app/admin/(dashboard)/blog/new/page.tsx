"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BlogForm } from "@/components/admin/BlogForm";
import type { BlogPostInput } from "@/lib/blog/types";

export default function NewBlogPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: BlogPostInput) => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Kayıt hatası");
      return;
    }
    router.push("/admin/blog");
    router.refresh();
  };

  return (
    <div>
      <h1 className="text-headline-md font-headline-md text-primary mb-8">
        Yeni Blog Yazısı
      </h1>
      {error && (
        <p className="mb-4 text-error bg-error-container px-4 py-3 rounded-lg">
          {error}
        </p>
      )}
      <BlogForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
