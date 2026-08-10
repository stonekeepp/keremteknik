import Script from "next/script";

const DEFAULT_GOOGLE_ADS_ID = "AW-18381685750";

/**
 * Google Ads global site tag (gtag.js).
 * Override with NEXT_PUBLIC_GOOGLE_ADS_ID. Disable with "false" or "0".
 * Loaded only on public routes via (public)/layout — not on admin.
 */
export function GoogleAdsTag() {
  const raw = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  if (raw === "0" || raw === "false") return null;

  const adsId = raw || DEFAULT_GOOGLE_ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}
