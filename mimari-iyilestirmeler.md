# Mimari İyileştirmeler (mimari-iyilestirmeler.md)

Bu doküman, uygulamanın hata toleransı ve izlenebilirliği için yapılan mimari geliştirmeleri açıklar.

---

## 1. Merkezi Hata Yakalama (Error Boundaries)

Çalışma zamanında oluşabilecek hataların tüm uygulamayı çökertmesini engellemek için Next.js Error Boundary yapısı entegre edildi.

- **Hata Sayfası:** `src/app/error.tsx` - Beklenmedik hatalarda kullanıcıya "Tekrar Dene" butonu sunan şık bir arayüz gösterilir.
- **404 Sayfası:** `src/app/not-found.tsx` - Mevcut olmayan rotalar için özel tasarlanmış bir "Sayfa Bulunamadı" ekranı eklendi.

## 2. İstek Günlüğü ve İzleme (Logging)

Sunucu tarafındaki trafiği ve hataları takip edebilmek için middleware seviyesinde bir logging mekanizması kuruldu.

- **Dosya:** `src/middleware.ts`
- **Özellikler:** 
  - Gelen her isteğin `Method`, `Path`, `IP` ve `Zaman Damgası` bilgileri sunucu terminaline yazdırılır.
  - IP algılama sistemi `x-forwarded-for` başlığı desteğiyle iyileştirildi.
- **Fayda:** Hata ayıklama süreçlerini hızlandırır ve sistem trafiğini izlemeyi kolaylaştırır.

---

## Nasıl Test Edilir?

1. Uygulamada mevcut olmayan bir URL'e giderek (örn: `/test-404`) 404 sayfasını görün.
2. `npm run dev` açıkken tarayıcıda gezin ve terminalde akan istek loglarını (örn: `[2026-01-21...] GET / - ::1`) izleyin.
