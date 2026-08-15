import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Resepta",
  description: "Resepta ve BotFusions hizmetlerinde kişisel verilerin nasıl işlendiğini açıklayan gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Resepta ana sayfa">Resepta<span>.</span></Link>
        <Link className="legal-back" href="/">Ana sayfaya dön <span>↗</span></Link>
      </header>

      <article className="legal-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> BOTFUSIONS / RESEPTA</div>
        <h1>Gizlilik<br /><em>Politikası.</em></h1>
        <p className="legal-lede">Bu politika, İstanbul merkezli BotFusions tarafından sunulan Resepta dijital resepsiyonist hizmetinde ve hizmete bağlı iletişim kanallarında kişisel verilerin nasıl işlendiğini açıklar.</p>
        <p className="legal-updated">Son güncelleme: 15 Ağustos 2026</p>

        <div className="legal-sections">
          <section><h2>1. Kapsam ve sorumluluk</h2><p>Resepta, <strong>Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti.</strong> tarafından BotFusions markasıyla sunulan ve kliniklerin hastalarıyla WhatsApp, Instagram Direct ve Facebook Messenger üzerinden yürüttüğü iletişimi yönetmeye yardımcı olan dijital bir hizmettir. Bu politika, hangi kanaldan gelirse gelsin Resepta web sitesi, mesajlaşma akışları, randevu paneli ve doktor takvimi bağlantıları sırasında işlenen kişisel verileri kapsar.</p><p>Hasta verileri bakımından Klinik veri sorumlusu, Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti. / BotFusions ise Kliniğin talimatları doğrultusunda hizmet sunan veri işleyendir. Veriler kendi pazarlama amaçları için kullanılmaz ve satılmaz.</p></section>
          <section><h2>2. İşlenebilecek veriler</h2><p>Hizmetin kullanımına ve iletişim kanalına göre aşağıdaki bilgiler işlenebilir:</p><ul><li><strong>WhatsApp:</strong> hastanın adı veya profil adı, telefon numarası ve mesaj içeriği</li><li><strong>Instagram:</strong> Instagram kullanıcı adı, hesap kimliği ve Direct mesaj içeriği</li><li><strong>Facebook Messenger:</strong> Facebook profil adı, sayfaya özel kullanıcı kimliği ve mesaj içeriği</li><li><strong>Ortak:</strong> randevu bilgileri, klinik tarafından sağlanan hizmet ve hekim bilgileri, destek kayıtları ve güvenlik amacıyla tutulan teknik kayıtlar</li></ul><p>Instagram ve Messenger üzerinden hastanın telefon numarasına erişmeyiz; iletişim ilgili platformun mesaj kimliği üzerinden yürür. Resepta tıbbi teşhis veya tedavi hizmeti sunmaz. Sağlık bilgileri, yalnızca kliniğin açıkça gerekli gördüğü ve hukuka uygun şekilde işlediği ölçüde ele alınmalıdır.</p></section>
          <section><h2>3. Kullanım amaçları</h2><p>Veriler; WhatsApp, Instagram Direct ve Facebook Messenger mesajlarına yanıt vermek, kliniğin onayladığı bilgileri aktarmak, randevu oluşturmak veya güncellemek, personele ve doktora bildirim göndermek, hizmet güvenliğini sağlamak ve destek taleplerini yanıtlamak için kullanılır.</p><p>Mesaj içerikleri, yalnızca hastanın sorusuna yanıt üretmek amacıyla yapay zekâ modeline iletilebilir. Bu içerikler model eğitimi için kullanılmaz. Veriler pazarlama veya satış amacıyla kullanılmaz ve satılmaz.</p></section>
          <section><h2>4. Paylaşım ve hizmet sağlayıcılar</h2><p>Hizmetin çalışması için gerekli olduğu ölçüde veriler; ilgili klinik ve yetkilendirdiği personel, Meta Platforms (WhatsApp Business Platform, Instagram ve Facebook Messenger), takvim veya bildirim servisleri, barındırma ve teknik hizmet sağlayıcılarla işlenebilir. Yasal yükümlülük, resmi talep veya güvenlik gerekliliği bulunmadıkça veriler üçüncü kişilere açıklanmaz.</p><p>Meta üzerinden gerçekleşen veri işleme, ilgili platformların kendi gizlilik politikalarına da tabidir. Ayrıntılar için <a href="https://www.facebook.com/policy" target="_blank" rel="noreferrer">Meta Gizlilik Politikası</a> incelenebilir.</p></section>
          <section><h2>5. Saklama ve güvenlik</h2><p>Görüşme kayıtları, randevu verileri ve teknik kayıtlar; hizmetin sunulması, güvenliğin sağlanması ve ilgili mevzuattan doğan yükümlülüklerin yerine getirilmesi için gerekli olan süre boyunca saklanır. Hizmet ilişkisi sona erdiğinde, veriler ilgili klinikle yapılan hizmet sözleşmesinde belirlenen kurallar ve yasal saklama yükümlülükleri çerçevesinde silinir veya anonim hâle getirilir.</p><p>Erişimler yetki sınırları içinde tutulur; barındırma, erişim kontrolü ve güvenlik izleme gibi teknik ve idari önlemler uygulanır. Meta, takvim, bildirim ve diğer üçüncü taraf servislerin kendi saklama ayarları ayrıca geçerlidir.</p></section>
          <section><h2>6. Haklar ve başvuru</h2><p>İlgili kişiler ve klinikler, yürürlükteki mevzuat kapsamında verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, yanlış veya eksik bilgilerin düzeltilmesini isteme ve şartları oluştuğunda silinmesini talep etme haklarına sahip olabilir. Talepler, kapsamı ve kimlik doğrulama bilgileriyle birlikte <a href="mailto:info@botfusions.com">info@botfusions.com</a> adresine iletilebilir.</p></section>
          <section><h2>7. Veri silme talebi</h2><p>Resepta sistemlerinde işlenen verilerinizin silinmesini istemek için <Link href="/veri-silme-talebi">Veri Silme Talebi</Link> sayfasındaki adımları izleyebilir veya doğrudan <a href="mailto:info@botfusions.com">info@botfusions.com</a> adresine yazabilirsiniz. Meta platformlarındaki kayıtlar için ilgili platforma ayrıca başvurmanız gerekebilir.</p></section>
          <section><h2>8. İletişim ve güncellemeler</h2><p>Hizmet sağlayıcı: <strong>Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti.</strong><br />Marka: BotFusions<br />Adres: Sarıdemir Mah. Limoncu Sok. No: 21/3, Eminönü, Fatih, İstanbul, Türkiye<br />Vergi Dairesi / Vergi No: Hocapaşa V.D. / 611 002 7399<br />E-posta: <a href="mailto:info@botfusions.com">info@botfusions.com</a><br />Telefon: <a href="tel:+908503027460">0850 302 74 60</a></p><p>Hizmetlerimiz veya veri işleme uygulamalarımız değiştiğinde bu sayfa güncellenir.</p></section>
        </div>
      </article>
    </main>
  );
}
