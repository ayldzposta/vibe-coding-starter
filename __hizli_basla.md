# Hızlı Başlangıç Rehberi (__hizli_basla.md)

Bu rehber, güçlendirilmiş **Vibe Coding Starter** altyapısını kullanarak projelerinizi nasıl hızla geliştirebileceğinizi adım adım açıklar.

---

## 🚀 1. Hazırlık ve Ortam Kurulumu
Yeni bir projeye başlarken veya mevcut projeyi ayağa kaldırırken:
1.  **Bağımlılıkları Yükle:** `npm install`
2.  **Yapılandırma:** `.env.example` dosyasını `.env` olarak kopyalayın ve veritabanı/servis bilgilerini girin.
3.  **Veritabanı Şeması:** `npm run db:push` (Şemayı veritabanına gönderir).
4.  **Örnek Veriler:** `npx prisma db seed` (Admin ve standart kullanıcı hesaplarını oluşturur).
5.  **Geliştirme Sunucusu:** `npm run dev`

## 📊 2. Veritabanı ve Model Geliştirme (Prisma)
- `prisma/schema.prisma` dosyasını projenin ihtiyaçlarına göre güncelleyin.
- Her değişiklikten sonra `npx prisma generate` komutunu çalıştırarak TypeScript tiplerini güncel tutun.

## 🎨 3. UI/UX ve Tasarım Süreci
- **Bileşenler:** `src/components/ui` altındaki shadcn/ui bileşenlerini kullanın. Yeni bileşenler için: `npx shadcn@latest add [bileşen-adı]`.
- **Tema:** Sağ üstteki `ThemeToggle` ile karanlık/açık mod geçişi otomatik sağlanır.
- **Yükleme Ekranları:** Yeni sayfalar için `loading.tsx` dosyaları oluşturarak `Skeleton` bileşenleri ile profesyonel bir yükleme deneyimi sunun.

## 🛡️ 4. Güvenlik ve Doğrulama
- **Zod Şemaları:** Form girişlerini doğrulamak için `src/lib/validations` klasörünü kullanın.
- **Rate Limit:** API rotalarındaki istek sınırlaması `middleware.ts` üzerinden otomatik çalışır.
- **Logging:** terminal üzerinden gelen istekleri ve IP detaylarını izleyin.

## ⚡ 5. Veri Yönetimi (TanStack Query)
- API istekleri için `useQuery` ve `useMutation` hook'larından faydalanın.
- Veriler global olarak 1 dakika boyunca cache'lenir (staleTime).

## 🧪 6. Test ve Kalite Kontrol
- **Birim Testleri:** `npm run test` (Vitest).
- **E2E Testleri:** `npm run test:e2e` (Playwright).
- **CI/CD:** Kodunuzu GitHub'a gönderdiğinizde testler ve derleme otomatik olarak kontrol edilir (`.github/workflows/ci.yml`).

## 📁 7. Mimari ve Hata Yönetimi
- **Hatalar:** `src/app/error.tsx` ve `src/app/not-found.tsx` sayfaları üzerinden hataları şık bir şekilde ele alın.
- **Middleware:** `src/middleware.ts` dosyasını isteğe göre özelleştirerek ek kısıtlamalar veya loglama ekleyebilirsiniz.

---

> [!TIP]
> Daha detaylı bilgi için projedeki diğer dokümantasyon dosyalarına (`aim.md`, `rapor.md`, `test-altyapisi.md`, `security-iyilestirmeleri.md` vb.) göz atabilirsiniz.
