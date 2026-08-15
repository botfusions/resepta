import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Resepta",
  description: "Resepta dijital resepsiyonist hizmetinin kullanım şartları.",
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function KullanimSartlariPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Resepta ana sayfa">Resepta<span>.</span></Link>
        <Link className="legal-back" href="/gizlilik-politikasi">Gizlilik politikası <span>↗</span></Link>
      </header>

      <article className="legal-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> BOTFUSIONS / RESEPTA</div>
        <h1>Kullanım<br /><em>Şartları.</em></h1>
        <p className="legal-lede">Bu şartlar, BotFusions tarafından sunulan Resepta dijital resepsiyonist hizmetinin kullanımına ilişkin koşulları düzenler.</p>
        <p className="legal-updated">Son güncelleme: 15 Ağustos 2026</p>

        <div className="legal-sections">
          <section><h2>1. Taraflar ve kapsam</h2><p>Bu Kullanım Şartları, <strong>Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti.</strong> tarafından BotFusions markasıyla sunulan Resepta hizmetini kullanan klinik, muayenehane veya sağlık kuruluşu için geçerlidir. Hizmeti kullanmaya başlayarak bu şartları kabul etmiş olursunuz.</p></section>
          <section><h2>2. Hizmetin tanımı</h2><p>Resepta; kliniğin WhatsApp Business, Instagram Direct veya Facebook Messenger kanallarına gelen hasta mesajlarını kliniğin sağladığı bilgilerle yanıtlayan, randevu akışını yöneten ve bu iletişimi panel üzerinden görünür kılan yazılımdır. Resepta bir tıbbi cihaz veya sağlık hizmeti değildir.</p><p>Asistan teşhis koymaz, tedavi veya ilaç önermez ve acil durum hizmeti sunmaz. Hekim görüşünün yerine geçmez. Acil durumlarda 112 aranmalı veya en yakın sağlık kuruluşuna başvurulmalıdır.</p></section>
          <section><h2>3. Yapay zekâ ve klinik kontrolü</h2><p>Yapay zekâ tabanlı sistemler hata yapabilir. Klinik, panele girdiği bilgilerin doğru ve güncel olmasını, asistanın ürettiği yanıtları gerektiğinde denetlemeyi ve hastanın kişiyle görüşme talebini makul sürede karşılamayı kabul eder.</p></section>
          <section><h2>4. Kanal bağlama ve hesap güvenliği</h2><p>Klinik, Resepta'ya bağladığı WhatsApp, Instagram veya Facebook hesaplarının sahibi ya da yetkili yöneticisi olduğunu beyan eder. Bağlama işlemi Meta'nın resmi yetkilendirme akışları üzerinden yürütülür. Panel kullanıcılarının gizliliğinden ve personel erişim yetkilerinden Klinik sorumludur.</p><p>Klinik, bağladığı yetkiyi dilediği zaman geri alabilir. Bu durumda ilgili kanaldaki Resepta işlevleri durur.</p></section>
          <section><h2>5. Kliniğin yükümlülükleri</h2><ul><li>Hastalarını mesajlaşmanın yapay zekâ destekli bir asistan tarafından yanıtlandığı ve kayıt altına alınabildiği konusunda bilgilendirmek</li><li>Hizmet, fiyat, çalışma saati, adres ve hekim bilgilerinin doğru ve güncel olmasını sağlamak</li><li>KVKK, sağlık mevzuatı, reklam ve tanıtım kuralları ile Meta ve bağlı platformların şartlarına uymak</li><li>İzinsiz toplu mesaj veya spam göndermemek</li><li>Hasta verilerini yalnızca hukuka uygun ve gerekli amaçlarla kullanmak</li></ul></section>
          <section><h2>6. BotFusions'ın yükümlülükleri</h2><p>BotFusions, hizmeti makul özen ve teknik yeterlilikle sunmayı, verileri <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>'nda açıklanan çerçevede işlemeyi ve uygun teknik güvenlik önlemlerini almayı taahhüt eder. Bakım, güncelleme veya üçüncü taraf platform kaynaklı nedenlerle geçici kesintiler yaşanabilir; kesintisiz erişim garantisi verilmez.</p></section>
          <section><h2>7. Üçüncü taraf platformlar</h2><p>Resepta; Meta'nın WhatsApp Business Platformu, Instagram, Facebook Messenger, takvim servisleri, bildirim servisleri ve teknik altyapı sağlayıcılarıyla birlikte çalışabilir. Bu platformların kendi kuralları, limitleri, ücretleri veya hesap askıya alma kararları BotFusions'ın kontrolü dışındadır.</p></section>
          <section><h2>8. Ücretlendirme</h2><p>Hizmet bedeli, ödeme dönemi ve kapsamı Klinik ile yapılan hizmet sözleşmesinde belirlenir. Meta veya diğer üçüncü taraf platformların ayrıca uyguladığı mesaj, kullanım veya işlem ücretleri varsa sözleşmede ayrıca belirtilir.</p></section>
          <section><h2>9. Fikri mülkiyet</h2><p>Resepta yazılımı, arayüzü, markası ve BotFusions tarafından hazırlanan içerikler BotFusions'a aittir. Kliniğe yalnızca hizmeti kullanma hakkı verilir. Kliniğin panele girdiği bilgi tabanı, hizmet ve fiyat bilgileri Klinik'e aittir.</p></section>
          <section><h2>10. Kişisel veriler</h2><p>Kişisel verilerin işlenmesi <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> kapsamında yürütülür. Hasta verileri bakımından Klinik veri sorumlusu, BotFusions veri işleyendir. Veri silme talepleri için <Link href="/veri-silme-talebi">Veri Silme Talebi</Link> sayfası kullanılabilir.</p></section>
          <section><h2>11. Askıya alma ve fesih</h2><p>Hizmetin şartlara, mevzuata veya platform kurallarına aykırı kullanılması hâlinde hizmet askıya alınabilir veya sonlandırılabilir. Klinik hizmeti sözleşmesindeki koşullara göre sonlandırabilir. Fesih sonrası veriler, Gizlilik Politikası'ndaki saklama ve silme kurallarına göre işlenir.</p></section>
          <section><h2>12. Sorumluluk ve değişiklikler</h2><p>BotFusions; üçüncü taraf platform kesintilerinden, kliniğin hatalı veya güncel olmayan içeriklerinden ve asistan yanıtlarının Klinik tarafından denetlenmemesinden doğan sonuçlardan sorumlu tutulamaz. Bu şartlar hizmet veya mevzuat değiştikçe güncellenebilir; güncel metin bu sayfada yayımlanır.</p></section>
          <section><h2>13. İletişim</h2><p><strong>Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti.</strong><br />Marka: BotFusions<br />Sarıdemir Mah. Limoncu Sok. No: 21/3, Eminönü, Fatih, İstanbul, Türkiye<br />Hocapaşa Vergi Dairesi · Vergi No: 611 002 7399<br /><a href="mailto:info@botfusions.com">info@botfusions.com</a> · <a href="tel:+908503027460">0850 302 74 60</a></p></section>
        </div>
      </article>
    </main>
  );
}
