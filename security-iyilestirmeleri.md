# Güvenlik İyileştirmeleri (security-iyilestirmeleri.md)

Bu doküman, projeye eklenen güvenlik katmanlarını ve yapılan iyileştirmeleri açıklar.

---

## 1. İstek Sınırlaması (Rate Limiting)

Kötü niyetli botları ve brute-force saldırılarını engellemek için API rotalarına istek sınırlaması eklenmiştir.

- **Dosya:** `src/middleware.ts`
- **Kapsam:** `/api/` ile başlayan tüm rotalar (Özellikle `/api/auth`).
- **Limit:** Dakikada maksimum 20 istek.
- **Teknoloji:** Next.js Middleware kullanılarak bellek içi (In-memory) bir çözüm uygulanmıştır.
- **Üretim Önerisi:** Uygulama scale edildiğinde (Vercel vb.) bellek içi çözüm her instance için ayrı çalışacaktır. Üretim ortamında paylaşımlı bir state için **Upstash Redis** entegrasyonu önerilir.

## 2. Sıkı Giriş Doğrulaması (Enhanced Input Validation)

Kullanıcı girişleri artık hem istemci hem de sunucu tarafında daha sıkı kriterlere göre doğrulanmaktadır.

- **Dosya:** `src/lib/validations/auth.ts`
- **Teknoloji:** **Zod** kütüphanesi.
- **Kriterler:**
  - **E-posta:** Geçerli bir e-posta formatı zorunludur.
  - **Şifre (Login):** Minimum 8 karakter.
  - **Şifre (Kayıt):** En az bir büyük harf, bir küçük harf ve bir rakam içermesi zorunludur.
- **Entegrasyon:** `src/lib/auth.ts` içindeki `authorize` fonksiyonu bu şemayı kullanarak gelen verileri doğrular. Geçersiz verilerde veritabanı sorgusu yapılmadan işlem reddedilir.

## 3. Güvenli Şifre Karşılaştırma

- `bcryptjs` kullanılarak şifreler güvenli bir şekilde karşılaştırılmaktadır.

---

## Nasıl Test Edilir?

1. **Doğrulama Testleri:** `npm run test` komutu ile Zod şemalarının doğru çalışıp çalışmadığı kontrol edilebilir.
2. **Rate Limiter Testi:** Tarayıcıdan veya Postman üzerinden `/api/auth` rotasına 1 dakika içinde 20'den fazla istek atıldığında "429 Too Many Requests" hatası alınmalıdır.

---

> [!CAUTION]
> Güvenlik sürekli bir süreçtir. Gelecekte iki faktörlü kimlik doğrulama (2FA) ve detaylı audit logları eklenmesi önerilir.
