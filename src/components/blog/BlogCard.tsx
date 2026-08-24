import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { BlogPost } from "@/lib/blog/types";
import { formatDate, formatReadingTime } from "@/lib/blog/reading-time";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  if (featured) {
    return (
      <article className="col-span-1 md:col-span-8 md:row-span-2 bg-surface rounded-2xl card-elevation overflow-hidden group">
        <Link href={href} className="flex flex-col h-full">
          <div className="w-full h-64 md:h-96 relative overflow-hidden bg-surface-container shrink-0">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            ) : (
              <div className="w-full h-full bg-surface-container-high" />
            )}
            <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full border border-surface-variant shadow-sm">
              <span className="text-label-md font-label-md text-primary">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-outline text-label-md font-label-md">
              <Icon name="schedule" className="w-[18px] h-[18px]" />
              <span>{formatReadingTime(post.readingTime)}</span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <h2 className="text-headline-md font-headline-md text-on-background group-hover:text-secondary transition-colors">
              {post.title}
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant line-clamp-3">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-secondary font-button text-button group-hover:underline">
              Devamını Oku
              <Icon name="arrow_forward" className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="col-span-1 md:col-span-4 bg-surface rounded-2xl card-elevation overflow-hidden group">
      <Link href={href} className="flex flex-col h-full">
        <div className="w-full h-48 relative overflow-hidden bg-surface-container shrink-0">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
          <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-full text-xs text-primary">
            {post.category}
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2 flex-grow">
          <div className="flex items-center gap-2 text-outline text-label-md font-label-md">
            <span>{formatReadingTime(post.readingTime)}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-secondary transition-colors">
            {post.title}
          </h3>
          <p className="text-body-md text-on-surface-variant line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          <span className="text-secondary font-button text-button group-hover:underline inline-flex items-center gap-1 mt-2">
            Devamını Oku
            <Icon name="arrow_forward" className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
