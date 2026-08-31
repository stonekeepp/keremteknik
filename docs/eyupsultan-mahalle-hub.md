# Eyüpsultan Mahalle Hub — Uygulama Notu

**Sürüm:** 2026-08-31  
**Yığın:** cursor-seo  
**İlgili roadmap:** [seo-roadmap.md](./seo-roadmap.md) §1 istisna, §11 deploy/GSC

---

## Özet

Eyüpsultan için **27 mahalle planlama hub** URL’si açıldı. Mahalle × hizmet matrisi (ör. `/rami/klima-servisi`) **yok**. Para sorguları ilçe/semt **money** sayfalarına canonical; mahalle hub yalnızca planlama ve erişim notları içindir.

| Metrik | Değer |
|--------|-------|
| Yeni mahalle URL | 27 |
| Dalga 1 index | 5 (Rami, Yeşilpınar, Kemerburgaz, Emniyettepe, Merkez) |
| Spoke (yeni mahalle URL yok) | Alibeyköy, Göktürk |
| `seo:check` | Red 0, Yellow 0 |

---

## URL mimarisi

**Kalıp:** `/servis-bolgeleri/eyupsultan/{mahalle-slug}`

Örnekler:

- `/servis-bolgeleri/eyupsultan/rami`
- `/servis-bolgeleri/eyupsultan/kemerburgaz`
- `/servis-bolgeleri/eyupsultan/yesilpinar`

**Spoke yönlendirme (mahalle hub açılmaz):**

| Mahalle | Canonical |
|---------|-----------|
| Alibeyköy | `/servis-bolgeleri/alibeykoy` |
| Göktürk | `/servis-bolgeleri/gokturk` |

**Money landing (reklam + para sorguları):**

| Niyet | Canonical |
|-------|-----------|
| Eyüpsultan klima | `/servis-bolgeleri/eyupsultan/klima-servisi` |
| Alibeyköy klima | `/servis-bolgeleri/alibeykoy/klima-servisi` |
| Göktürk klima | `/servis-bolgeleri/gokturk/klima-servisi` |
| `{mahalle} klima servisi` | Eyüpsultan klima money (keyword-map) |
| `{mahalle} teknik servis` | Mahalle hub URL |

---

## H1 ve içerik kuralları

| Yap | Yapma |
|-----|--------|
| H1: `Rami Mahallesi — Eyüpsultan teknik servis planı` | H1: `Rami klima servisi` |
| Min ~400 kelime unique (profil, km, konut tipi, FAQ) | Aynı şablon, sadece mahalle adı değişmiş |
| Max 3 money CTA + parent ilçe + 1 komşu mahalle | Mahalle × 9 hizmet URL matrisi |
| Kuş uçuşu km + `DISTANCE_DISCLAIMER` | Sahte yol km / kesin varış süresi iddiası |

---

## Kademeli index (dalga)

| Dalga | Mahalleler | `indexable` |
|-------|------------|-------------|
| 1 | Rami, Yeşilpınar, Kemerburgaz, Emniyettepe, Merkez | `true` → sitemap + index |
| 2 | Silahtarağa, Defterdar, Akşemsettin, Mithatpaşa, Nişanca | `false` → noindex, dalga onayı sonrası |
| 3 | Kalan 17 | Haftada ~5, `seo:check` geçince |

Dalga 2–3: `eyupsultan-mahalle-seed.ts` içinde ilgili mahallede `indexable: true` yap, deploy, GSC inspect.

---

## Spam kapıları (`seo:check`)

- Mahalle hub arası benzerlik **≥ %55** → Red
- Mahalle H1’de `klima servisi` / `kombi servisi` → Red
- `keyword-map.ts`: para sorguları money URL; planlama sorguları mahalle hub
- Indexlenebilir mahalle sayısı izleme (üst limit 27)

---

## Kod haritası

| Dosya | Rol |
|-------|-----|
| `src/lib/seo-pages/eyupsultan-mahalle-seed.ts` | 27 mahalle veri + `indexable` bayrakları |
| `src/lib/seo-pages/mahalle-pages.ts` | `MahallePageData` builder |
| `src/lib/seo-pages/mahalle-nav.ts` | Href, static params, grup listesi |
| `src/app/(public)/servis-bolgeleri/eyupsultan/[mahalle]/page.tsx` | Sayfa rotası (`dynamicParams=false`) |
| `src/app/(public)/servis-bolgeleri/[bolge]/page.tsx` | Eyüpsultan hub — gruplu mahalle grid |
| `src/lib/seo-pages/validators.ts` | Benzerlik + H1 kuralları |
| `src/lib/seo-pages/keyword-map.ts` | `buildMahalleEntries()` |
| `src/lib/seo/internal-links.ts` | Mahalle hub bağlam linkleri |

---

## Deploy sonrası GSC Inspection

Deploy bitince Search Console → URL Inspection → “Dizine eklenmesini iste”:

1. `/servis-bolgeleri/eyupsultan`
2. `/servis-bolgeleri/eyupsultan/klima-servisi`
3. `/servis-bolgeleri/eyupsultan/rami`
4. `/servis-bolgeleri/eyupsultan/yesilpinar`
5. `/servis-bolgeleri/eyupsultan/kemerburgaz`
6. `/servis-bolgeleri/eyupsultan/emniyettepe`
7. `/servis-bolgeleri/eyupsultan/merkez`
8. `/servis-bolgeleri/gokturk/klima-servisi`

`noindex` mahalleler sitemap’te yok; dalga açılınca tekrar inspect.

---

## Reklam final URL

| Kampanya geo | Final URL |
|--------------|-----------|
| Eyüpsultan genel | `/servis-bolgeleri/eyupsultan/klima-servisi` |
| Alibeyköy | `/servis-bolgeleri/alibeykoy/klima-servisi` |
| Göktürk | `/servis-bolgeleri/gokturk/klima-servisi` |
| Mahalle adı (organik destek) | Mahalle hub **reklam hedefi değil** |

---

## 4 hafta KPI (≈ 2026-09-28)

- Dalga 1 mahalle URL’lerinde impression var mı?
- `eyüpsultan klima servisi` money sayfası düştü mü? → kannibalizasyon; dalga 2 durdur
- Mahalle hub düşük CTR + money yükseliyorsa → beklenen hub–spoke ayrımı

---

## Doğrulama komutları

```bash
npm run seo:check   # Red 0, Yellow 0 hedef
npm run build       # 273+ statik sayfa; eyupsultan/[mahalle] rotaları listede
```

---

## Mahalle grupları (hub UI)

| Grup | Örnek mahalleler |
|------|------------------|
| Merkez ve Rami bandı | Rami, Silahtarağa, Nişanca |
| Alibeyköy bandı | Yeşilpınar, Güzeltepe, Karadolap, Topçular |
| Tarihi merkez | Merkez, Akşemsettin, Mithatpaşa, İslambey |
| Kuzey | Kemerburgaz, Odayeri, Pirinççi, Ağaçlı, Çiftalan |
| Göktürk yakını | 5. Levent, Işıklar |
| Batı | Çırçır, Esentepe, Sakarya, Akpınar |
