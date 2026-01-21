# Performans ve Optimizasyon İyileştirmeleri (performans-iyilestirmeleri.md)

Bu doküman, projenin performansını artırmak için yapılan geliştirmeleri açıklar.

---

## TanStack Query Yapılandırması

Uygulama genelinde verimli veri çekme, önbelleğe alma (caching) ve senkronizasyon için TanStack Query entegre edilmiştir.

- **Dosya:** `src/components/providers.tsx`
- **Özellikler:** 
  - `staleTime`: Verilerin 1 dakika boyunca "taze" (fresh) kabul edilmesi sağlandı. Bu, gereksiz API isteklerini azaltır.
  - `ReactQueryDevtools`: Geliştirme aşamasında sorguları izlemek için devtools eklendi.
- **Entegrasyon:** `src/app/layout.tsx` içerisinde tüm uygulamayı sarmalayacak şekilde yapılandırıldı.

---

## Image (Görsel) Optimizasyonu

- Uygulama genelinde `next/image` bileşeni kullanımı teşvik edilerek, görsellerin otomatik olarak boyutlandırılması, WebP formatına dönüştürülmesi ve lazy loading (tembel yükleme) özellikleri aktif edilmiştir.

---

## Nasıl Test Edilir?

1. Tarayıcıda **Network** sekmesini açın.
2. Bir sayfadan diğerine geçiş yaparken, TanStack Query sayesinde daha önce çekilen veriler için tekrar API isteği atılmadığını (veya cache'ten geldiğini) gözlemleyin.
