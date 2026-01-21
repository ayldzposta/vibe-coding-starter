# PROJE AMACI (aim.md)

Bu proje, **Vibe Coding Starter** olarak adlandırılan, modern ve tam donanımlı bir full-stack başlangıç kitidir. Temel amacı, geliştiricilerin üretim seviyesinde uygulamaları sıfırdan kurmakla vakit kaybetmeden, hızla geliştirmeye başlamalarını sağlamaktır.

## Temel Özellikler ve Hedefler

1.  **Hızlı Geliştirme Kültürü:** Next.js 16'nın en son özelliklerini (App Router, Server Components, Turbopack) kullanarak yüksek performanslı bir temel sunar.
2.  **Modern Teknoloji Yığını:**
    *   **Frontend:** TypeScript, Tailwind CSS 4, shadcn/ui ve Framer Motion ile estetik ve işlevsel arayüzler.
    *   **Backend:** Prisma ORM ile PostgreSQL veritabanı yönetimi ve Supabase entegrasyonu.
    *   **Kimlik Doğrulama:** NextAuth.js ile güvenli ve esnek (Credentials, OAuth) kullanıcı yönetimi.
3.  **Üretim Odaklı Entegrasyonlar:**
    *   **Ödemeler:** Stripe entegrasyonu ile abonelik veya tek seferlik ödeme altyapısı hazır haldedir.
    *   **E-posta:** React Email ve Resend ile profesyonel e-posta gönderimi.
    *   **Güvenlik:** reCAPTCHA v3 desteği ve rol tabanlı erişim kontrolü (RBAC - USER/ADMIN).
4.  **Veri Yönetimi ve Görselleştirme:** TanStack Query ile optimize edilmiş veri çekme süreçleri ve Recharts ile veri görselleştirme imkanı.

## Dosya Yapısı ve Mimari

Proje, Next.js App Router mimarisini takip eder:
*   `src/app`: Sayfa rotaları, API uç noktaları ve layout yapıları.
*   `src/components`: Tekrar kullanılabilir UI bileşenleri (shadcn/ui tabanlı).
*   `prisma/`: Veritabanı şeması ve göç (migration) yönetimi.
*   `src/lib`: Dış servislerin (Supabase, Stripe, Auth) yapılandırma dosyaları.

Bu starter kiti, özellikle SaaS uygulamaları, dashboard projeleri ve hızlı prototipleme ihtiyaçları için optimize edilmiştir.
