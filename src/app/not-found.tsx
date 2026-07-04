import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-headline-md font-headline-md text-primary mb-4">
        Sayfa Bulunamadı
      </h1>
      <p className="text-body-md text-on-surface-variant mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="bg-cta text-white px-6 py-3 rounded-[12px] font-button text-button"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
