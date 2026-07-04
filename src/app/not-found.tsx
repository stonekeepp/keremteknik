import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-margin-mobile text-center py-20">
        <span className="text-8xl font-display font-bold text-primary/10 mb-4">
          404
        </span>
        <h1 className="text-headline-md font-headline-md text-primary mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-md">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/">Ana Sayfaya Dön</Button>
          <Button href="/iletisim" variant="outline">
            İletişime Geç
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
}
