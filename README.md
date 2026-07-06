# Kerem Teknik Servis Web Platformu

Kerem Teknik Servis için Stitch tasarımına sadık Next.js web sitesi. Mock mode ile local geliştirme; production için PostgreSQL ve Redis adapter mimarisine hazır.

## Mock Mode Geliştirme Kurulumu

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Ortam değişkenlerini ayarlayın:

```bash
cp .env.example .env
```

3. `.env` dosyasında şu değerleri doldurun:

- `DATA_MODE=mock` (varsayılan)
- `ADMIN_EMAIL` — admin giriş e-postası
- `ADMIN_PASSWORD` — admin giriş şifresi
- `JWT_SECRET` — geliştirme için güçlü bir secret
- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

5. Admin panele giriş:

- URL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- `.env` içindeki `ADMIN_EMAIL` ve `ADMIN_PASSWORD` ile giriş yapın

Bu modda **PostgreSQL ve Redis gerekmez**. Blog verileri `data/mock-blog-db.json` dosyasında saklanır.

### Mock Auth Uyarısı

Mock auth sadece geliştirme içindir. Production deploy sırasında Redis destekli güvenli session/JWT yapısına geçilmelidir.

## Production Deploy Planı

Ubuntu sunucuda ileride kullanılacak yapı:

- PostgreSQL — blog verileri, admin kullanıcıları
- Redis — admin session, cache, rate limit
- Node.js — Next.js uygulaması
- Nginx — reverse proxy
- PM2 veya systemd — process yönetimi

Production `.env` örneği:

```env
DATA_MODE=postgres
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/keremteknik
REDIS_URL=redis://localhost:6379
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
NEXT_PUBLIC_SITE_URL=https://alanadi.com
```

Production mod (`DATA_MODE=postgres`) şu an tam aktif edilmemiş olabilir; kod mimarisi buna uygun hazırlanmıştır:

- `BlogRepository` interface + `MockBlogRepository` / `PostgresBlogRepository` (stub)
- `AuthService` interface + `MockSessionService` / `RedisSessionService` (stub)
- Prisma schema: `prisma/schema.prisma`

### Opsiyonel Prisma Komutları

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
npm run db:seed
```

Mock mode çalışması Prisma'ya bağlı değildir.

## Scripts

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run start` | Production sunucu |
| `npm run lint` | ESLint |

## Public Sayfalar

- `/` — Ana sayfa
- `/hizmetlerimiz` — Hizmetler listesi
- `/hizmetlerimiz/[slug]` — Hizmet detay
- `/blog` — Blog listesi
- `/blog/[slug]` — Blog detay
- `/hakkimizda` — Hakkımızda
- `/sss` — SSS
- `/iletisim` — İletişim

## Admin

- `/admin/login`
- `/admin/blog` — Blog listesi
- `/admin/blog/new` — Yeni yazı
- `/admin/blog/[id]/edit` — Düzenle