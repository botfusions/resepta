import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Veri Silme Talebi | Resepta",
  description: "Resepta hizmetindeki kişisel verilerinizin silinmesini talep edin.",
  alternates: { canonical: "/veri-silme-talebi" },
};

export default function VeriSilmeTalebiPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Resepta ana sayfa">Resepta<span>.</span></Link>
        <Link className="legal-back" href="/gizlilik-politikasi">Gizlilik politikası <span>↗</span></Link>
      </header>
      <article className="legal-content legal-short-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> RESEPTA VERİ TALEBİ</div>
        <h1>Veri silme<br /><em>talebi.</em></h1>
        <p className="legal-lede">Resepta üzerinden işlenen kişisel verilerinizin silinmesini talep edebilirsiniz. Talebinizi info@botfusions.com adresine e-posta ile iletmeniz yeterlidir.</p>
        <div className="legal-request-card">
          <h2>Talebinizde şunları belirtin</h2>
          <ul><li>Adınız ve size ulaşabileceğimiz iletişim adresi</li><li>Hangi klinikle yazıştığınız</li><li>Hangi kanaldan yazıştığınız ve o kanaldaki kimliğiniz: WhatsApp telefon numarası, Instagram kullanıcı adı veya Facebook profil adı</li><li>Silinmesini istediğiniz veri: tüm görüşme geçmişi, belirli bir randevu veya başka bir iletişim kaydı</li></ul>
          <a className="button button-primary" href="mailto:info@botfusions.com?subject=Resepta%20veri%20silme%20talebi">E-posta gönder <span>↗</span></a>
        </div>
        <p className="legal-note">Talebinizi aldığımızda kimliğinizi doğrular ve en geç 30 gün içinde sonuçlandırıp size yazılı olarak bilgi veririz. Ücret talep edilmez. Bazı kayıtlar yasal yükümlülükler veya devam eden güvenlik süreçleri nedeniyle hemen silinemeyebilir; bu durumda hangi kaydın neden saklandığını ve ne zaman silineceğini açıklarız. WhatsApp, Instagram veya Facebook Messenger altyapısındaki kayıtlar için ilgili platforma ayrıca başvurmanız gerekebilir.</p>
        <p className="legal-note"><strong>Hizmet sağlayıcı:</strong> Gelişim Temizlik Maddeleri Ambalaj Gıda İnşaat San. ve Tic. Ltd. Şti. · Hocapaşa V.D. / 611 002 7399<br />Sarıdemir Mah. Limoncu Sok. No: 21/3, Eminönü, Fatih, İstanbul, Türkiye</p>
      </article>
    </main>
  );
}
