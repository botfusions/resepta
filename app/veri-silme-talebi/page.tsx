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
        <p className="legal-lede">Resepta üzerinden işlenen kişisel verilerinizin silinmesini talep etmek için bize e-posta gönderebilirsiniz.</p>
        <div className="legal-request-card">
          <h2>Talebinizde şunları belirtin</h2>
          <ul><li>Adınız ve size ulaşabileceğimiz iletişim adresi</li><li>Mesaj gönderdiğiniz klinik veya WhatsApp numarası</li><li>Silinmesini istediğiniz veri veya iletişim kaydı</li></ul>
          <a className="button button-primary" href="mailto:info@botfusions.com?subject=Resepta%20veri%20silme%20talebi">E-posta gönder <span>↗</span></a>
        </div>
        <p className="legal-note">Talep, güvenlik amacıyla doğrulanabilir. Bazı kayıtlar yasal yükümlülükler veya devam eden güvenlik işlemleri nedeniyle hemen silinemeyebilir; bu durumda size gerekçesi açıklanır.</p>
      </article>
    </main>
  );
}
