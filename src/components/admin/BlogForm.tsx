"use client";

import { useEffect, useState } from "react";
import {
  BLOG_CATEGORIES,
  BLOG_STATUSES,
  type BlogPost,
  type BlogPostInput,
} from "@/lib/blog/types";
import { slugifyTitle } from "@/lib/blog/slug";

type BlogFormProps = {
  initial?: BlogPost;
  onSubmit: (data: BlogPostInput) => Promise<void>;
  loading?: boolean;
};

export function BlogForm({ initial, onSubmit, loading }: BlogFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugManual, setSlugManual] = useState(!!initial);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [category, setCategory] = useState(initial?.category ?? BLOG_CATEGORIES[0]);
  const [tags, setTags] = useState(initial?.tags?.join(", ") ?? "");
  const [status, setStatus] = useState<"draft" | "published">(
    initial?.status ?? "draft",
  );
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(
    initial?.metaDescription ?? "",
  );
  const [canonicalUrl, setCanonicalUrl] = useState(
    initial?.canonicalUrl ?? "",
  );

  useEffect(() => {
    if (!slugManual && title) {
      setSlug(slugifyTitle(title));
    }
  }, [title, slugManual]);

  const buildPayload = (nextStatus: "draft" | "published"): BlogPostInput => ({
    title,
    slug,
    excerpt,
    content,
    coverImage,
    category,
    tags,
    status: nextStatus,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || excerpt,
    canonicalUrl: canonicalUrl || null,
  });

  const handleSave = (nextStatus: "draft" | "published") => async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(buildPayload(nextStatus));
  };

  return (
    <form className="max-w-3xl flex flex-col gap-4">
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Başlık *
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Slug *
        </label>
        <input
          value={slug}
          onChange={(e) => {
            setSlugManual(true);
            setSlug(e.target.value);
          }}
          required
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Kısa Açıklama
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none resize-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          İçerik * (Markdown)
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={12}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none font-mono text-sm"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Kapak Görsel URL
        </label>
        <input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-label-md font-label-md text-primary mb-2">
            Kategori *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as typeof category)}
            className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-label-md font-label-md text-primary mb-2">
            Durum *
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as typeof status)}
            className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
          >
            {BLOG_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s === "published" ? "Yayında" : "Taslak"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Etiketler (virgülle ayırın)
        </label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Meta Title
        </label>
        <input
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          placeholder={title || "Başlık kullanılır"}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Meta Description
        </label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder={excerpt || "Kısa açıklama kullanılır"}
          rows={2}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none resize-none"
        />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Canonical URL
        </label>
        <input
          value={canonicalUrl}
          onChange={(e) => setCanonicalUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <button
          type="button"
          disabled={loading}
          onClick={handleSave(status)}
          className="bg-primary text-on-primary px-6 py-3 rounded-[12px] font-button text-button hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Kaydediliyor..." : "Kaydet"}
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={handleSave("published")}
          className="bg-cta text-white px-6 py-3 rounded-[12px] font-button text-button hover:bg-secondary-container disabled:opacity-50"
        >
          Yayınla
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={handleSave("draft")}
          className="border-2 border-primary text-primary px-6 py-3 rounded-[12px] font-button text-button hover:bg-surface-container-high disabled:opacity-50"
        >
          Taslak Kaydet
        </button>
      </div>
    </form>
  );
}
