import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { getBlogRepository } from "@/lib/blog";

export async function HomeLatestPosts() {
  const repo = getBlogRepository();
  const latestPosts = (await repo.findPublished()).slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <Section
      variant="muted"
      title="Blogdan Son Yazılar"
      subtitle="Bakım önerileri, arıza belirtileri ve enerji tasarrufu ipuçları"
    >
      <div className="flex justify-end mb-6 -mt-6">
        <Link
          href="/blog"
          className="text-secondary font-button text-button hover:underline"
        >
          Tüm Yazılar →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="bg-surface rounded-2xl card-elevation overflow-hidden flex flex-col group"
          >
            <div className="relative h-48 bg-surface-container overflow-hidden">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-label-md font-label-md text-secondary mb-2">
                {post.category}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-secondary font-button text-button hover:underline"
              >
                Devamını Oku →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
