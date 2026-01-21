# Geliştirici Deneyimi (DX) ve CI/CD İyileştirmeleri (dx-ve-ci-cd-iyilestirmeleri.md)

Bu doküman, geliştirme süreçlerini hızlandırmak ve kaliteyi otomatize etmek için yapılan çalışmaları açıklar.

---

## 1. Veritabanı Seeding (Örnek Veri Aktarımı)

Yeni bir geliştiricinin veya test ortamının hızla hazır hale gelmesi için veritabanına hazır veriler ekleyen bir mekanizma kuruldu.

- **Dosya:** `prisma/seed.ts`
- **İçerik:** 
  - 1 adet **ADMIN** hesabı (`admin@vibe.com`)
  - 1 adet **USER** hesabı (`user@vibe.com`)
- **Kullanım:** `npx prisma db seed` komutu ile bu veriler veritabanına otomatik olarak yüklenir.

## 2. GitHub Actions CI (Sürekli Entegrasyon)

Kodun her zaman derlenebilir ve testlerden geçer olduğundan emin olmak için otomatik bir iş akışı oluşturuldu.

- **Dosya:** `.github/workflows/ci.yml`
- **Tetikleyiciler:** `main` veya `master` dallarına yapılan her `push` ve `pull request` işlemi.
- **İşlemler:** 
  - Bağımlılıkların yüklenmesi.
  - Prisma istemcisinin oluşturulması.
  - ESLint kontrolü.
  - Vitest birim testlerinin çalıştırılması.
  - Uygulamanın derlenmesi (build).

---

## Nasıl Test Edilir?

1. Terminalde `npx prisma db seed` komutunu çalıştırarak veritabanının örnek kullanıcılarla dolduğunu doğrulayın.
2. GitHub'da bir Pull Request açtığınızda "Actions" sekmesinden CI sürecinin otomatik olarak başladığını izleyin.
