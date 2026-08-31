# Kerem Teknik Servis — SEO yol haritası

**Sürüm:** 2026-08-24  
**Yığın:** her zaman `cursor-seo` (Cursor plugin + DataForSEO). `open-seo` kullanma.  
**Canlı site:** https://keremteknikservis.com  
**Bu dosya:** farklı PC’lerde SEO işine başlamadan **önce** oku. Uygulama bitince bu dosyadaki “Tamamlanan işler” ve “Sıradaki iş” bölümlerini güncelle.

Haftalık Search Console rutini: [search-console-checklist.md](./search-console-checklist.md)  
Eyüpsultan mahalle hub detayı: [eyupsultan-mahalle-hub.md](./eyupsultan-mahalle-hub.md)

---

## 0. Diğer PC’de nasıl devam edilir

1. `git pull`.
2. Prompt’a **`cursor-seo`** yaz. Yığın seçilmeden SEO işine başlama.
3. Bu dosyadaki **değişmez kurallar** ve **karar ağacı**na uy.
4. Kod değişince: `npm run seo:check` (hedef: Red 0, Yellow 0).
5. Blog yazısı ekliyorsan **hem** `src/lib/blog/mock-data.ts` **hem** `data/mock-blog-db.json` güncellenir (mock repo JSON’u okur).
6. İş bitince bu dosyaya 2–5 satır not düş, commit et.

### Prompt şablonu

```
cursor-seo
docs/seo-roadmap.md dosyasını oku ve [GÖREV] yap.
Değişmez kurallara uy. seo:check kırmızı/sarı 0 kalsın.
Para kelimesine (eyüpsultan klima servisi vb.) blog veya mahalle URL’si açma.
```

---

## 1. Değişmez kurallar (kapı / spam önleme)

Bunlar tartışılmaz. İhlal, doorway ve kannibalizasyon üretir.

| Yapma | Neden |
|---|---|
| 28 mahalle / semt URL’si açma (Rami, Yeşilpınar, Kemerburgaz ayrı sayfa dahil) | ~39 ilçe hub zaten var; 30+ konum uyarısı, 50 hard stop. Kemerburgaz **Eyüpsultan ilçe hub** içinde kalır. |
| **İstisna (2026-08-31):** Eyüpsultan mahalle **planlama hub** (27 URL, mahalle×hizmet matrisi yok) | Spam-safe: H1 planlama, para sorguları money canonical, dalga 1 = 5 index, `seo:check` benzerlik >%55 red. Detay: `eyupsultan-mahalle-seed.ts`, `/servis-bolgeleri/eyupsultan/[mahalle]`. |
| `X klima servisi` / `X kombi servisi` başlıklı blog açma | SERP ticari landing; blog kannibalize eder, reklam sayfalarını zayıflatır. |
| Aynı şablonu 10+ semte kopyalama | Thin / doorway. Unique override yoksa sayfa açma. |
| Göktürk’e kombi/beyaz eşya sayfası açma | Göktürk yalnız **klima spoke**. |
| Yeni ilçe hub’ı ekleme | 39 ilçe yeter; öncelik Eyüpsultan kümesi. |
| Doğrulanmamış hata kodu publish etme | Kaynak yoksa taslakta kalsın. |
| Sahte fiyat, sahte yorum, “yetkili servis” iddiası | Bağımsız özel servis; marka adı yalnızca kapsam. |
| Alibeyköy / Göktürk exact-match’ini Eyüpsultan klima secondary’sine koyma | Hub–spoke kannibalizasyonu. |

### Karar ağacı: yeni URL gerekir mi?

```
Arama niyeti ticari + konum+hizmet mü?
  EVET → mevcut /servis-bolgeleri/{ilce|semt}/{hizmet} sayfasını güçlendir.
        Yeni semt yalnız: unique saha notu + parent ilçe hub + tek hizmet.
  HAYIR, bilgi niyeti (neden / ne zaman / nasıl anlaşılır)?
        Mevcut /ariza-rehberi veya /hata-kodlari veya /blog var mı?
          EVET → onu derinleştir, iç link ekle.
          HAYIR → blog veya arıza rehberi (landing H1’ini kopyalama).
```

---

## 2. İşletme ve entity (NAP)

Kaynak: `src/lib/services/site.ts`. Tüm sayfalarda aynı kalmalı.

| Alan | Değer |
|---|---|
| Ad | Kerem Teknik Servis |
| Telefon | 0551 397 25 26 |
| WhatsApp | 905513972526 |
| Adres | Alibeyköy, Uygar Sk. No:8 A, Eyüpsultan / İstanbul, 34060 |
| Geo | 41.083948, 28.939218 (Maps ilanı doğrulandı) |
| Harita | https://maps.app.goo.gl/yyhn6iHWhFNRvcRf8 |
| Saat | Hafta içi 08:00–20:00, Cumartesi 09:00–18:00 |
| Tür | HVACBusiness + LocalBusiness; **yetkili servis değil** |

GBP: saat, kategori, WhatsApp, fotoğraf ve NAP site ile birebir. SAB olarak ilçe/semt listesi; “tüm Türkiye / tüm İstanbul ili” hizmet alanı olarak yazılmaz.

---

## 3. Site mimarisi

```
/                                      ticari + yerel entity
/hizmetlerimiz/{hizmet}                hizmet pillar (klima, kombi, beyaz eşya, …)
/servis-bolgeleri                      ilçe hub listesi (semtler ayrı grid)
/servis-bolgeleri/{ilce}               ilçe genel teknik servis
/servis-bolgeleri/{ilce|semt}/{hizmet} konum × hizmet (sınırlı kombinasyon)
/ariza-rehberi/{cihaz}/{sorun}         bilgi — arıza
/hata-kodlari/{cihaz}/…                bilgi — kod
/markalar/{marka}/{cihaz-servisi}      ticari — marka
/blog/{slug}                           bilgi — para kelimesi değil
/iletisim /hakkimizda /sss
```

Eski GSC yolunda `/servis-bolgelerimiz/` görünmüş olabilir. Canlıda canonical `/servis-bolgeleri/`. 301 var mı kontrol et (aşağıda iş kalemi).

### Konum sayfası envanteri

- **İlçe hub:** ~39 (`areaType: ilce`) — yeni ilçe ekleme.
- **Semt spoke:** Alibeyköy (`parentArea: eyupsultan`), Göktürk (`parentArea: eyupsultan`).
- **Öne çıkan:** Alibeyköy, Eyüpsultan, Gaziosmanpaşa, Göktürk, Kağıthane.
- **Konum × hizmet (öncelikli küme):**
  - Eyüpsultan: klima, kombi, beyaz eşya, çamaşır, buzdolabı, bulaşık
  - Alibeyköy / Gaziosmanpaşa / Kağıthane: klima, kombi, beyaz eşya
  - Göktürk: **yalnız klima**

Kod: `src/lib/seo-pages/constants.ts` → `getRegionServiceSlugs`. Unique metin: `region-service-content.ts`. Seed: `regions-seed.ts`.

### Keyword canonical

Tek sorgu → tek URL. Tablo: `src/lib/seo-pages/keyword-map.ts`.

| Niyet | Canonical |
|---|---|
| eyüpsultan klima servisi | `/servis-bolgeleri/eyupsultan/klima-servisi` |
| alibeyköy klima servisi | `/servis-bolgeleri/alibeykoy/klima-servisi` |
| göktürk klima servisi | `/servis-bolgeleri/gokturk/klima-servisi` |
| klima soğutmuyor | `/ariza-rehberi/klima/sogutmuyor` |
| klima gazı ne zaman doldurulur / gaz doldurma / gazı bitti | `/blog/klima-gazi-ne-zaman-doldurulur` |
| klima su damlatıyor / su akıtıyor / drenaj tıkanıklığı | `/blog/klima-su-damlatiyor-nedenleri` |
| klima bakımı ne zaman | `/blog/klima-bakimi-ne-zaman-yapilmali` |
| klima servisi (genel, konum yok) | `/hizmetlerimiz/klima-servisi` |

Yeni sorgu eklerken mevcut satırla çakışma `seo:check` kırmızısıdır.

---

## 4. Tamamlanan işler (geçmiş)

### Programatik temel (2026-03 ve öncesi)

- İlçe hub’ları, marka hub + marka×cihaz, arıza rehberi, hata kodları.
- `npm run seo:check` + keyword map + benzerlik / kırık iç link doğrulaması.
- LocalBusiness JSON-LD, Breadcrumb, Service / FAQ sayfa tiplerine göre.
- İç link motoru: `src/lib/seo/internal-links.ts` (sayfa başına en fazla 6 bağlamsal link).
- Sitemap: statik + hizmet + blog + indexlenebilir SEO sayfaları (`src/app/sitemap.ts`).
- Trust / index hazırlığı, PageSpeed (SVG ikon, cache), programatik QA.

Kaynak commit örnekleri: `23aa7d8`, `447868a`, `1a39b2a`, `d789d82`.

### Eyüpsultan local (2026-07 / commit `35763d0`)

- Orphan iç linkler, içerik derinliği, Eyüpsultan cihaz long-tail (çamaşır / buzdolabı / bulaşık).
- Ölçüm notu: `eyüpsultan klima` / `eyüpsultan beyaz eşya` o dönemde top’ta yoktu; rakipler istanbulkombiklimaservisi, klimaservis.com, anindaservis, bolgekombi, hdklima.

### 2026-08-24 — Eyüpsultan klima kümesi + blog (bu oturumlar)

**Strateji:** para kelimesine blog yok; ilçe hub + semt spoke.

1. **Alibeyköy klima** unique override; primary yalnız `alibeyköy klima servisi`.
2. **Eyüpsultan klima** ilçe hub: Alibeyköy / Göktürk exact-match secondary kaldırıldı; spoke’lara tıklanır bölüm + iç link.
3. **Göktürk** semt seed + yalnız `/servis-bolgeleri/gokturk/klima-servisi`. Kemerburgaz ayrı URL değil.
4. Mevcut bakım yazısı Eyüpsultan + Alibeyköy klima’ya bağlandı; para kelimesine yeni post yoktu (sonra gaz yazısı bilgi niyeti olarak eklendi).
5. **Hero foto:** Eyüpsultan / Alibeyköy / Göktürk klima — `/images/services/hero-klima-servisi.webp`, hizmet sayfası split hero (`SeoPageHero`).
6. **Blog:** `/blog/klima-gazi-ne-zaman-doldurulur`
   - H1/title para kelimesi değil; bilgi niyeti.
   - İç link: klima pillar + 3 bölge klima + soğutmama rehberi + bakım yazısı.
   - Ters link: hizmet klima, bölge klima sayfaları, `/ariza-rehberi/klima/sogutmuyor`.
   - FAQPage + BlogPosting şema.
   - Keyword map gaz sorgularını bloga aldı.

GSC Insights (son 28 gün, ~2026-08-24): **36 tıklama (+140%)**, **1,03B gösterim (+367%)**.  
Yükselen: ana sayfa, `/hizmetlerimiz`, `/ariza-rehberi/bulasik-makinesi/elektrik-gelmiyor`, `/hizmetlerimiz/beyaz-esya-servisi`, Arçelik/Beko E05.  
Düşen (düşük hacim, ~1 tıklama): kombi bakım blogu, kombi hizmet, yedek parça, iletişim, Gaziosmanpaşa (raporda eski path görülebilir).

**Çıkarım:** bilgi sayfaları (`arıza-rehberi`, `hata-kodlari`) tıklama getiriyor. Konum landing’i kopyalayan blog değil, bu kalıbı çoğalt.

### 2026-08-28 — Klima su damlatıyor blogu

**SERP (cursor-seo / WebSearch):** `klima su damlatıyor` ve `klima su akıtıyor` → bilgi niyeti (rehber/blog). Konum×hizmet landing yok. Yeni `/ariza-rehberi` açılmadı (kombi su akıtıyor zaten var; klima için blog yeterli).

1. **Blog:** `/blog/klima-su-damlatiyor-nedenleri`
   - Primary: `klima su damlatıyor`; secondary: su akıtıyor, drenaj tıkanıklığı, iç ünite su damlatıyor.
   - H1/title para kelimesi değil; kısa cevap + drenaj/filtre/eğim/buz ayrımı.
   - İç link: klima servisi / bakım / temizlik, soğutmama rehberi, gaz + bakım blogları, Eyüpsultan + Alibeyköy klima (1’er).
   - Ters link: gaz/bakım blogları, `/hizmetlerimiz/klima-servisi`, `/ariza-rehberi/klima/sogutmuyor`.
   - FAQPage (`post-faqs.ts`) + keyword-map + `mock-data` + `mock-blog-db.json`.
   - Cover: mevcut `/images/services/hero-klima-servisi.webp`.

**Deploy:** `git pull` → `docker compose --env-file docker/.env build --no-cache web` → `up -d --force-recreate web` → GSC URL Inspection.

### 2026-08-31 — Bakım yazısı revizyonu + teknik (cursor-seo)

**SERP (cursor-seo / WebSearch):** `klima bakımı ne zaman` → bilgi niyeti (mevsim takvimi, sıklık, DIY vs profesyonel). Konum×hizmet landing değil; mevcut URL derinleştirildi.

1. **Blog revize:** `/blog/klima-bakimi-ne-zaman-yapilmali` (yeni URL yok)
   - Kısa cevap + Nisan–Mayıs / Eylül–Ekim takvimi + yılda 1–2 kez sıklık
   - Profesyonel bakım adımları vs evde güvenli kontroller; gaz dolumu ayrımı
   - İç link: gaz/su blogları, soğutmama rehberi, klima bakımı/temizlik, Eyüpsultan + Alibeyköy klima (1’er)
   - FAQPage (`post-faqs.ts`) + cover `hero-klima-servisi.webp`; `metaTitle` çift marka düzeltildi
   - `readingTime` 7 dk; `updatedAt` 2026-08-31
2. **Teknik:** `/servis-bolgelerimiz/*` → `/servis-bolgeleri/*` 301 (`next.config.ts`)
3. **Title:** `kombi-bakimi-neden-onemlidir` `metaTitle` çift marka kaldırıldı
4. **`seo:check`:** Red 0, Yellow 0 (161 sorgu)

**Sıradaki (manuel):** su + bakım blogu deploy + GSC Inspection; GBP; DataForSEO MCP.

---

## 5. İç link kümesi (klima)

```
                    /hizmetlerimiz/klima-servisi
                              ↑↓
        /servis-bolgeleri/eyupsultan/klima-servisi   ← ilçe hub
                     ↙                    ↘
    alibeykoy/klima-servisi          gokturk/klima-servisi
                     ↘                    ↙
              /ariza-rehberi/klima/sogutmuyor
                              ↑↓
         /blog/klima-gazi-ne-zaman-doldurulur
                              ↑↓
         /blog/klima-su-damlatiyor-nedenleri
                              ↑↓
         /blog/klima-bakimi-ne-zaman-yapilmali
```

Yeni klima içeriği bu grafa bağlanmalı. Orphan URL bırakma.

---

## 6. İleri yol haritası

### Faz A — yayın ve ölçüm (bu hafta / 7 gün)

Önce kod çoğaltma; indekslenme ve GSC.

- [ ] Canlıya al: Göktürk klima, unique Alibeyköy/Eyüpsultan klima, hero görseller, gaz blogu, **su blogu**.
- [ ] GSC URL Inspection: yukarıdaki URL’ler + sitemap ping.
- [x] `/servis-bolgelerimiz/*` → `/servis-bolgeleri/*` 301 (`next.config.ts`, 2026-08-31).
- [x] Title şablonu: blog `metaTitle` çift marka düzeltildi (`klima-bakimi`, `kombi-bakimi`, 2026-08-31).
- [ ] GBP: Eyüpsultan/Alibeyköy foto, saat, WhatsApp, hizmet listesi.
- [ ] DataForSEO MCP’yi bağla (`user-dataforseo`); hacim/SERP tahminsiz ilerleme.

### Faz B — Eyüpsultan klima otoritesi (Eylül 2026, ~4 hafta)

Yeni ilçe yok. Küme derinleşir.

- [ ] Canlı GSC: `eyüpsultan klima servisi`, `alibeyköy klima servisi`, `göktürk klima servisi` — gösterim/ortalama konum.
- [ ] Gaz blogu 2–4 hafta impression almazsa H1’i değiştirme; iç link ve GSC “denetle” tekrar.
- [x] **Sıradaki bilgi içeriği (biri, hepsi değil):** Klima su damlatıyor → `/blog/klima-su-damlatiyor-nedenleri` (2026-08-28).
- [x] Mevcut `klima-bakimi-ne-zaman-yapilmali` yazısını gaz/su yazısı kalitesine çıkar (2026-08-31; yeni URL yok).
- [ ] Klima hata kodu hub’ına 1–2 doğrulanmış kod (kaynak şart).
- [ ] Su + bakım blogu canlıya al + GSC Inspection; 2–4 hafta impression yoksa H1 değiştirme, iç link/index.
- [ ] Eyüpsultan klima FAQ / PAA: GSC sorgu raporu geldikten sonra, exact-match spoke kannibalizasyonu olmadan.
- [ ] Hero: diğer öncelikli klima sayfalarına (Gaziosmanpaşa, Kağıthane) aynı görsel **isteğe bağlı**; zorunlu değil.

### Faz C — kış / kombi (Ekim–Aralık 2026)

Kombi GSC’de düşmüş; önce mevcut sayfayı onar, yeni URL yağmuru yok.

- [ ] `/hizmetlerimiz/kombi-servisi` ve `/blog/kombi-bakimi-neden-onemlidir` iç link + içerik kalitesi (klima gaz yazısı kalıbı).
- [ ] Eyüpsultan kombi hub unique mi, yoksa şablon mu? Şablonsa override yaz (Alibeyköy kombi spoke **yalnız** unique metin + ayrı niyet varsa).
- [ ] Para kelimesi `eyüpsultan kombi servisi` için blog açma.
- [ ] Bilgi adayı: kombi basınç düşüyor, kombi su akıtıyor (rehber zaten varsa derinleştir).

### Faz D — ölçek (2027 Q1, koşullu)

Yalnız Faz B’de Eyüpsultan klima gösterimi net yükseldikten sonra.

- [ ] Bir sonraki **tek** semt spoke: saha + arama niyeti + unique metin yoksa açma.
- [ ] İlçe sayısı 39’da kalsın. 50’ye yaklaşan konum URL’si = dur.
- [ ] Backlink: dizin spam değil; yerel “en iyi” listeleri, harita, gerçek iş fotoğrafı.
- [ ] GEO: alıntılanabilir kısa cevap + FAQ şema (klima gaz yazısı modeli). AI Overview yerel sorgularda zayıf; GBP + NAP öncelikli.

### Bilinçli olarak yapılmayacaklar (12 ay)

- İstanbul’un kalan ilçelerine klima×hizmet patlatmak.
- “Eyüpsultan klima servisi fiyatları” thin landing.
- 10 yazılık otomatik blog takvimi (kalite düşer; GSC bilgi kalıbını kopyala, adet kovalama).

---

## 7. Blog kuyruğu (bilgi niyeti)

Yayında:

| Slug | Rol |
|---|---|
| `klima-su-damlatiyor-nedenleri` | Klima kümesi — su/drenaj bilgi (2026-08-28) |
| `klima-gazi-ne-zaman-doldurulur` | Klima kümesi spoke — gaz bilgi |
| `klima-bakimi-ne-zaman-yapilmali` | Bakım zamanı; gaz/su kalitesine revize (2026-08-31) |
| `kombi-bakimi-neden-onemlidir` | GSC düşen; kış öncesi revize |
| `buzdolabi-sogutmuyorsa-ne-yapilmali` | Beyaz eşya |
| `camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir` | GSC E05 / arıza kalıbına yakın |
| `bulasik-makinesi-neden-koku-yapar` | Destek |

Sıradaki adaylar (SERP önce `cursor-seo` + DataForSEO; landing değilse yaz):

1. ~~Klima su damlatıyor / iç ünite su akıtıyor~~ → **yayında** (`klima-su-damlatiyor-nedenleri`)
2. ~~Klima bakımı yazısı genişletme~~ → **revize** (`klima-bakimi-ne-zaman-yapilmali`, 2026-08-31)
3. Kombi basıncı neden düşer (mevcut su akıtıyor rehberiyle çakışmayı kontrol et) — **sıradaki** (Faz C)
4. Bulaşık elektrik gelmiyor — GSC yükselen rehberi güçlendir, kopya blog açma

Yeni blog checklist (`klima-su-damlatiyor-nedenleri`):

- [x] Primary, hiçbir konum×hizmet landing focus’u değil  
- [x] Title 50–60 **render** (şablon markayı ekler)  
- [x] Meta description 130–150  
- [x] Primary title, H1, slug, ilk 100 kelime  
- [x] Yoğunluk ~0,5–2% (doğrulama: `seo:check` / kelime sayımı)  
- [x] 3–5+ gerçek iç link; para sayfalarına en fazla birer exact-match çapa  
- [x] `keyword-map.ts` + `BLOG_SEO_LINKS` + `BLOG_SERVICE_SLUG`  
- [x] FAQ şema: `src/lib/blog/post-faqs.ts`  
- [x] `seo:check` (Red: 0) — canlı deploy ayrı

---

## 8. Teknik notlar

| Konu | Durum / hedef |
|---|---|
| `npm run seo:check` | Red 0, Yellow 0 (242 sorgu, 2026-08-31; 27 mahalle keyword map) |
| Şema | Ana: LocalBusiness. Blog: BlogPosting + FAQ. Bölge×hizmet: Service + FAQ + image |
| CWV | Mevcut PageSpeed işi korunur; yeni hero `priority` + webp |
| Blog veri | `DATA_MODE=mock` → `data/mock-blog-db.json`. Postgres henüz aktif değil |
| `CONTENT_DATES` | qc/review: 2026-08-24 (`constants.ts`) |

Kod haritası:

| İş | Dosya |
|---|---|
| Unique bölge×hizmet metin | `src/lib/seo-pages/region-service-content.ts` |
| Hangi bölgede hangi hizmet URL | `src/lib/seo-pages/constants.ts` |
| Semt/ilçe seed | `src/lib/seo-pages/regions-seed.ts` |
| Eyüpsultan mahalle hub seed | `src/lib/seo-pages/eyupsultan-mahalle-seed.ts` |
| Mahalle sayfa builder | `src/lib/seo-pages/mahalle-pages.ts` |
| Mahalle rota | `src/app/(public)/servis-bolgeleri/eyupsultan/[mahalle]/page.tsx` |
| Keyword canonical | `src/lib/seo-pages/keyword-map.ts` |
| İç linkler | `src/lib/seo/internal-links.ts` |
| Blog gövde | `src/lib/blog/mock-data.ts` + `data/mock-blog-db.json` |
| Blog FAQ JSON-LD | `src/lib/blog/post-faqs.ts` |
| Bölge hero | `region-services.ts` (`KLIMA_HERO_REGION_SLUGS`) |
| NAP | `src/lib/services/site.ts` |

---

## 9. KPI (GSC)

Taban (Insights, son 28 gün, ~24 Ağu 2026): 36 tıklama, ~1,03K gösterim.

| Metrik | Taban | 90 gün hedef | Not |
|---|---|---|---|
| Site tıklama | 36 / 28g | 2× | Reklam tıklaması organik KPI değil |
| Gösterim | ~1,03K | 3× | Yeni URL’ler indekslenince sıçrama beklenir |
| `eyüpsultan klima servisi` | top’ta yok (2026-07) | ilk 20, sonra ilk 10 | Landing + GBP; blog değil |
| Gaz blogu | yeni | 4 haftada impression | Yoksa iç link/index, rewrite değil |
| Arıza rehberi tıklama | yükselişte | koru / artır | Kalıp kanıtı |

90 günde konum landing’e 0 tıklama + 0 gösterim → içeriği şişirme; GSC “neden dizine eklenmedi” bak.

---

## 10. Riskler

| Risk | Ne yap |
|---|---|
| Hub–spoke kannibalizasyonu | Exact-match secondary’yi spoke’da bırak; hub’da link ver |
| Thin ilçe sayfaları | Yeni ilçe yok; zayıf ilçeyi silmek yerine noindex tartış (şimdilik dokunma) |
| Reklam + organik aynı URL | İyi; blog’u ayrı URL’de tut |
| DataForSEO yok | SERP’i tarayıcı/GSC ile doğrula; uydurma hacim yazma |
| Çok blog | Ayda 0–1 kaliteli yazı; 4 ince yazıdan kötü |

---

## 11. Sıradaki iş (tek cümle)

**Deploy + GSC Inspection (Eyüpsultan mahalle dalga 1) → 4 hafta GSC mahalle KPI → dalga 2 (5 mahalle index).**

### Deploy + GSC Inspection (dalga 1)

Deploy sonrası Search Console → URL Inspection → “Dizine eklenmesini iste”:

| URL | Amaç |
|---|---|
| `/servis-bolgeleri/eyupsultan` | İlçe hub güncellemesi |
| `/servis-bolgeleri/eyupsultan/klima-servisi` | Money landing |
| `/servis-bolgeleri/eyupsultan/rami` | Mahalle hub dalga 1 |
| `/servis-bolgeleri/eyupsultan/yesilpinar` | Mahalle hub dalga 1 |
| `/servis-bolgeleri/eyupsultan/kemerburgaz` | Mahalle hub dalga 1 |
| `/servis-bolgeleri/eyupsultan/emniyettepe` | Mahalle hub dalga 1 |
| `/servis-bolgeleri/eyupsultan/merkez` | Mahalle hub dalga 1 |
| `/servis-bolgeleri/gokturk/klima-servisi` | Spoke doğrulama |

`noindex` mahalle hub’lar sitemap’te yok; dalga 2–3 onayından sonra `indexable: true` yap.

### Reklam final URL tablosu (geo → money landing)

| Kampanya geo / hedef | Final URL (reklam) | Not |
|---|---|---|
| Eyüpsultan genel | `/servis-bolgeleri/eyupsultan/klima-servisi` | Mahalle hub’a reklam yönlendirme |
| Alibeyköy | `/servis-bolgeleri/alibeykoy/klima-servisi` | Spoke money |
| Göktürk | `/servis-bolgeleri/gokturk/klima-servisi` | Spoke money |
| Mahalle adı (Rami vb.) | `/servis-bolgeleri/eyupsultan/klima-servisi` | Mahalle hub organik/GBP destek |

### 4 hafta GSC mahalle KPI (2026-09-28 civarı)

- Dalga 1 mahalle URL’lerinde impression var mı?
- `eyüpsultan klima servisi` money sayfası düştü mü? → kannibalizasyon; index durdur, dalga 2 ertele
- Mahalle hub CTR düşük + money yükseliyorsa → beklenen hub–spoke ayrımı

### Tamamlanan (2026-08-31)

- Eyüpsultan ilçe hub: mahalle grid tıklanabilir, gruplu UI, spoke yönlendirme
- 27 mahalle hub seed + rota + builder (`indexable` dalga 1: 5 mahalle)
- `seo:check`: mahalle benzerlik >%55 red, H1 para kelimesi yasak, keyword-map canonical
- Eyüpsultan klima money: dalga 1 mahalle hub iç linkleri

### Deploy notu (Docker)

- `docker-compose` volume `mock-blog-data` eski `data/mock-blog-db.json` tutabilir. Kod, seed’de olup volume’da olmayan slug’ları otomatik merge eder; yine de yeni blog 404 olursa container rebuild + gerekirse volume kontrolü.
- `gokturk` mutlaka `REGION_SERVICE_REGION_SLUGS` içinde olmalı; aksi halde `/servis-bolgeleri/gokturk/klima-servisi` build’de üretilmez (`dynamicParams=false` → kalıcı 404).
