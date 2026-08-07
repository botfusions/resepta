import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Resepta",
  description: "Resepta ve BotFusions hizmetlerinde kişisel verilerin işlenmesine ilişkin gizlilik politikası.",
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
        <p className="legal-lede">Bu politika, Resepta dijital resepsiyonist hizmeti ve bu hizmetle bağlantılı iletişim kanallarında kişisel verilerin nasıl işlendiğini açıklar.</p>
        <p className="legal-updated">Son güncelleme: 8 Ağustos 2026</p>

        <div className="legal-sections">
          <section><h2>1. Kapsam</h2><p>Resepta, BotFusions tarafından kliniklerin WhatsApp üzerinden gelen hasta iletişimini, bilgi taleplerini ve randevu akışını yönetmesine yardımcı olmak amacıyla sunulan dijital bir hizmettir. Bu politika, Resepta web sitesi, WhatsApp iletişim akışları ve doktor takvimi bağlantıları için geçerlidir.</p></section>
          <section><h2>2. İşlenebilecek veriler</h2><p>Hizmetin kullanımına göre aşağıdaki bilgiler işlenebilir:</p><ul><li>WhatsApp profil adı, telefon numarası ve mesaj içerikleri</li><li>Randevu için gerekli ad, iletişim bilgisi, tarih ve saat bilgileri</li><li>Kliniğin hizmet, çalışma saati, adres ve hekim bilgileri</li><li>Destek talepleri, işlem kayıtları ve güvenlik amacıyla tutulan teknik kayıtlar</li></ul><p>Resepta tıbbi teşhis veya tedavi hizmeti sunmaz. Hastaların sağlık bilgileri, yalnızca kliniğin açıkça gerekli kıldığı ve hukuka uygun şekilde işlediği ölçüde ele alınmalıdır.</p></section>
          <section><h2>3. Kullanım amaçları</h2><p>Veriler; WhatsApp mesajlarına yanıt vermek, kliniğin onayladığı bilgileri aktarmak, randevu oluşturmak veya güncellemek, doktora ve personele bildirim göndermek, hizmet güvenliğini sağlamak ve destek taleplerini yanıtlamak için kullanılır. Veriler pazarlanmak veya satılmak amacıyla kullanılmaz.</p></section>
          <section><h2>4. Paylaşım ve hizmet sağlayıcılar</h2><p>Hizmetin çalışması için gerekli olduğu ölçüde veriler; ilgili klinik ve yetkilendirdiği personel, WhatsApp/Meta altyapısı, takvim veya bildirim hizmetleri ve teknik hizmet sağlayıcılarla işlenebilir. Yasal yükümlülük, resmi talep veya güvenlik gerekliliği bulunmadıkça veriler üçüncü kişilere açıklanmaz.</p><p>WhatsApp ve Meta’nın kendi veri işleme uygulamaları ayrıca kendi politikalarına tabidir. Ayrıntılar için <a href="https://www.facebook.com/policy" target="_blank" rel="noreferrer">Meta Gizlilik Politikası</a> incelenebilir.</p></section>
          <section><h2>5. Saklama ve güvenlik</h2><p>Veriler, hizmetin sunulması için gerekli olan süre boyunca ve ilgili yasal yükümlülükler devam ettiği müddetçe saklanır. Artık gerekli olmayan veriler silinir, anonimleştirilir veya güvenli şekilde erişim dışı bırakılır. Erişimler yetki sınırları içinde tutulur ve teknik güvenlik önlemleri uygulanır.</p><p>Gerçek saklama süreleri; kullanılan WhatsApp, takvim, bildirim ve barındırma servislerinin ayarlarına ve ilgili klinikle yapılan hizmet sözleşmesine göre netleştirilir.</p></section>
          <section><h2>6. Kliniklerin ve kullanıcıların hakları</h2><p>Klinikler ve ilgili kişiler, yürürlükteki mevzuat kapsamında verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, yanlış veya eksik bilgilerin düzeltilmesini isteme ve şartları oluştuğunda silinmesini talep etme haklarına sahip olabilir. Talepler, talebin kapsamı ve kimlik doğrulama bilgileriyle birlikte aşağıdaki iletişim adresine iletilebilir.</p></section>
          <section><h2>7. Veri silme talebi</h2><p>Verilerinizin silinmesini istemek için <Link href="/veri-silme-talebi">Veri Silme Talebi</Link> sayfasındaki adımları izleyebilir veya doğrudan <a href="mailto:info@botfusions.com">info@botfusions.com</a> adresine yazabilirsiniz.</p></section>
          <section><h2>8. İletişim ve güncellemeler</h2><p>Gizlilik politikasıyla ilgili sorularınız için <a href="mailto:info@botfusions.com">info@botfusions.com</a> adresinden BotFusions’a ulaşabilirsiniz. Hizmetlerimiz veya veri işleme uygulamalarımız değiştiğinde bu sayfa güncellenir.</p></section>
        </div>
      </article>
    </main>
  );
}
