# Test Altyapısı Dokümantasyonu (test-altyapisi.md)

Bu doküman, projeye entegre edilen **Vitest** (Birim ve Entegrasyon Testleri) ve **Playwright** (Uçtan Uca - E2E Testleri) altyapısının detaylarını, yapılandırmasını ve kullanımını açıklar.

---

## 1. Vitest (Birim ve Entegrasyon Testleri)

Vitest, Next.js projeleri için hızlı ve modern bir test framework'üdür. Geliştirme sırasında hızlı geri bildirim almak için kullanılır.

### Yapılandırma
- **Dosya:** `vitest.config.ts`
- **Ortam:** `jsdom` (Tarayıcı benzeri bir ortam simüle eder).
- **Setup:** `src/test/setup.ts` dosyası ile `@testing-library/jest-dom` otomatik olarak yüklenir, böylece DOM elementleri üzerinde kontroller yapılabilir.

### Kullanım
Birim testlerini çalıştırmak için şu komutlar kullanılır:
- `npm run test`: Tüm testleri bir kez çalıştırır ve sonuçları raporlar.
- `npm run test:watch`: Dosya değişikliklerini izler ve etkilenen testleri otomatik olarak tekrar çalıştırır.

### Örnek Test
`src/lib/utils.test.ts` dosyasında Tailwind sınıflarını birleştiren `cn` yardımcı fonksiyonu test edilmiştir.

---

## 2. Playwright (Uçtan Uca - E2E Testleri)

Playwright, uygulamanın gerçek bir tarayıcıda kullanıcı gibi davranarak test edilmesini sağlar.

### Yapılandırma
- **Dosya:** `playwright.config.ts`
- **Tarayıcılar:** Chromium (Chrome/Edge), Firefox ve WebKit (Safari).
- **Web Sunucusu:** Testler başlamadan önce `npm run dev` komutu ile geliştirme sunucusunu otomatik olarak başlatır.

### Kullanım
E2E testlerini çalıştırmak için şu komutlar kullanılır:
- `npm run test:e2e`: Testleri arka planda (headless) tüm tarayıcılarda çalıştırır.
- `npm run test:e2e:ui`: Playwright'ın etkileşimli arayüzünü açar; test adımlarını görsel olarak izlemenizi ve hata ayıklamanızı sağlar.

### Örnek Test
`tests/example.spec.ts` dosyasında ana sayfanın başlığı ve "Başla" butonuna tıklandığında doğru sayfaya yönlendirme yapılıp yapılmadığı test edilmiştir.

---

## 3. Test Yazma Kuralları

- **Birim Testleri:** `.test.ts` veya `.test.tsx` uzantılı olmalı ve ilgili dosyanın yanına veya bir `__tests__` klasörüne konulmalıdır.
- **E2E Testleri:** Kök dizindeki `tests/` klasörü içinde `.spec.ts` uzantılı olmalıdır.

## 4. Neden Bu Araçları Seçtik?

- **Hız:** Vitest, Vite tabanlı olduğu için çok hızlıdır.
- **Güvenirlik:** Playwright, gerçek tarayıcı motorlarını kullandığı için hataları daha iyi yakalar.
- **Modern Standartlar:** Her iki araç da modern web ekosisteminin en güncel ve en çok tercih edilen araçlarıdır.

---

> [!TIP]
> Yeni bir özellik eklediğinizde, bu özelliğin hem mantığını (Vitest) hem de kullanıcı akışını (Playwright) test eden kodlar eklemeniz, uygulamanızın uzun vadede daha stabil kalmasını sağlar.
