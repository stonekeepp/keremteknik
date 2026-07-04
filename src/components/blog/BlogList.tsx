"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "./BlogCard";
import { BLOG_CATEGORIES, type BlogPost } from "@/lib/blog/types";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  const [category, setCategory] = useState("Tümü");

  const filtered = useMemo(() => {
    if (category === "Tümü") return posts;
    return posts.filter((p) => p.category === category);
  }, [posts, category]);

  const [featured, ...rest] = filtered;

  return (
    <>
      <section className="w-full py-stack-md border-b border-surface-variant bg-surface sticky top-[72px] md:top-[80px] z-40">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 min-w-max pb-2">
            {["Tümü", ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-label-md font-label-md border transition-all ${
                  category === cat
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "bg-surface-container-high text-on-surface-variant border-outline-variant hover:bg-surface-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg mt-8">
        {filtered.length === 0 ? (
          <p className="text-center text-on-surface-variant py-12">
            Bu kategoride henüz yayınlanmış yazı bulunmuyor.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {featured && <BlogCard post={featured} featured />}
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
