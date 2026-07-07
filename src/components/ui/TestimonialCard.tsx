import { Icon } from "./Icon";

type TestimonialCardProps = {
  name: string;
  service: string;
  rating: number;
  text: string;
};

export function TestimonialCard({
  name,
  service,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <blockquote className="bg-surface rounded-2xl p-6 shadow-level-1 flex flex-col h-full">
      <div className="flex gap-0.5 mb-4" aria-label={`${rating} yıldız`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < rating;
          return (
            <Icon
              key={i}
              name="star"
              filled={filled}
              className={`w-5 h-5 ${
                filled ? "text-gold" : "text-outline-variant/35"
              }`}
            />
          );
        })}
      </div>
      <p className="text-body-md text-on-surface-variant flex-grow mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <footer>
        <cite className="not-italic">
          <span className="text-headline-sm font-headline-sm text-primary block">
            {name}
          </span>
          <span className="text-label-md font-label-md text-on-surface-variant">
            {service}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
}
