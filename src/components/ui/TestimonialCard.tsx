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
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined text-lg ${
              i < rating ? "text-gold" : "text-outline-variant"
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
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
