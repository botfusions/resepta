/* eslint-disable @next/next/no-img-element */

const checks = [
  "WhatsApp'tan gelen soruları karşılar",
  "Uygun saatleri kontrol ederek randevu açar",
  "Doktorun kendi takvimini anında günceller",
];

const features = [
  {
    number: "01",
    title: "Her soruya aynı netlikte yanıt",
    text: "Çalışma saatleri, adres, hizmetler ve fiyatlar kliniğinizin bilgileriyle cevaplanır.",
    tag: "WhatsApp",
  },
  {
    number: "02",
    title: "Randevu karmaşası sona erer",
    text: "Hasta uygun saat ister, Resepta doluluğu kontrol eder ve randevuyu kaydeder.",
    tag: "Randevu",
  },
  {
    number: "03",
    title: "Doktor her değişikliği görür",
    text: "Yeni randevu, saat değişikliği ve iptal olduğunda doktorun telefonuna bildirim gider.",
    tag: "Doktor",
  },
];

const faqItems = [
  {
    question: "Resepta tam olarak ne yapar?",
    answer: "Resepta, kliniğinizin WhatsApp mesajlarını karşılar; çalışma saatleri, hizmetler ve randevu süreçleri hakkında bilgi verir.",
  },
  {
    question: "Yanlış veya emin olmadığı bir cevap verirse ne olur?",
    answer: "Resepta, kliniğinizin onayladığı bilgilerle çalışır. Emin olmadığı konularda hastayı doğrudan kliniğe yönlendirir.",
  },
  {
    question: "Kurulum sürecinde bizden ne istenir?",
    answer: "Kliniğinizin hizmetleri, çalışma saatleri, hekim bilgileri ve randevu kurallarını birlikte belirleriz. Kurulumu sizin için biz yaparız.",
  },
  {
    question: "Doktor randevuları nasıl takip eder?",
    answer: "Doktor, kendisine ait randevuları telefonundaki takvimden görür. Yeni kayıt veya değişiklik olduğunda bildirim alır.",
  },
  {
    question: "Ücretlendirme nasıl belirlenir?",
    answer: "Kapsam ve ücret, kliniğinizin ihtiyaçları ve kullanılacak bağlantılar değerlendirilerek ilk görüşmede netleştirilir.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Ana menü">
        <a className="brand" href="#top" aria-label="Resepta ana sayfa">
          <span className="brand-mascot"><img src="/resepta-maskot.png" alt="Resepta maskotu" /></span>
          <span className="brand-word">Resepta<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#nasil-calisir">Nasıl çalışır?</a>
          <a href="#doktor">Doktor uygulaması</a>
          <a href="#sss">Sık sorulanlar</a>
          <a href="#demo">İletişim</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> BOTFUSIONS ÜRÜNÜ</div>
          <h1>Kliniğinizin<br /><em>dijital resepsiyonisti.</em></h1>
          <p className="hero-lede">
            Resepta, hastalarınızın WhatsApp mesajlarını karşılar, doğru bilgiyi verir ve randevu akışını düzenler. Siz kliniğe odaklanın.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#demo">Fiyat için randevu alın <span>↗</span></a>
            <a className="text-link" href="#nasil-calisir">Nasıl çalışır? <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div><b>7/24</b><span>yanıt akışı</span></div>
            <div><b>TR</b><span>Türkçe iletişim</span></div>
            <div><b>1</b><span>kontrol paneli</span></div>
          </div>
        </div>

        <div className="hero-stage" aria-label="Resepta dijital resepsiyonist önizlemesi">
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
          <div className="stage-grid" />
          <div className="mascot-glow" />
          {/* Static asset: avoids the worker image optimizer, which needs a configured asset binding. */}
          <img className="mascot" src="/resepta-maskot-flying.png" alt="Resepta uçan maskotu" />
          <div className="float-card status-card">
            <span className="live-dot" />
            <div><strong>Resepta hazır</strong><small>Yeni hasta mesajlarını karşılıyor</small></div>
          </div>
          <div className="float-card message-card">
            <div className="message-top"><span className="mini-avatar">R</span><strong>Resepta</strong><span className="message-time">şimdi</span></div>
            <p>Merhaba, nasıl yardımcı olabilirim?</p>
          </div>
          <div className="float-card appointment-card">
            <span className="calendar-icon">▦</span>
            <div><small>Yeni randevu</small><strong>Bugün · 15:00</strong></div>
            <span className="check-icon">✓</span>
          </div>
          <div className="stage-label">KLİNİĞİNİZ İÇİN ÇALIŞIR</div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Ürün yetenekleri">
        <div className="marquee-inner"><span>WHATSAPP</span><i>✦</i><span>RANDEVU</span><i>✦</i><span>HASTA İLETİŞİMİ</span><i>✦</i><span>DOKTOR TAKVİMİ</span><i>✦</i><span>WHATSAPP</span></div>
      </section>

      <section className="story-section" id="nasil-calisir">
        <div className="section-intro">
          <div className="eyebrow"><span className="eyebrow-dot" /> NASIL ÇALIŞIR?</div>
          <h2>Hasta yazar.<br /><em>Resepta halleder.</em></h2>
          <p>Kliniğinizin bilgileriyle çalışan, sade ve kontrol edilebilir bir iletişim katmanı.</p>
        </div>
        <div className="flow-list">
          <div className="flow-item"><span className="flow-no">01</span><div><h3>Hasta WhatsApp’tan yazar</h3><p>Fiyat, çalışma saati, adres veya randevu sorar.</p></div><span className="flow-arrow">↗</span></div>
          <div className="flow-item"><span className="flow-no">02</span><div><h3>Resepta doğru yanıtı verir</h3><p>Kliniğinizin bilgi tabanından kısa ve net cevaplar üretir.</p></div><span className="flow-arrow">↗</span></div>
          <div className="flow-item"><span className="flow-no">03</span><div><h3>Randevu takvime işlenir</h3><p>Uygunluk kontrol edilir; kayıt personele ve doktora görünür.</p></div><span className="flow-arrow">↗</span></div>
        </div>
      </section>

      <section className="feature-section" id="ozellikler">
        <div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-dot" /> KLİNİĞİNİZİN YENİ AKIŞI</div><h2>Daha az tekrar.<br /><em>Daha çok odak.</em></h2></div><p>Resepta, personelin yerine geçmez. Personelin en çok zamanını alan tekrarları üstlenir.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span>{feature.number}</span><span className="feature-tag">{feature.tag}</span></div><h3>{feature.title}</h3><p>{feature.text}</p><span className="card-arrow">↗</span></article>)}</div>
      </section>

      <section className="doctor-section" id="doktor">
        <div className="doctor-copy"><div className="eyebrow light"><span className="eyebrow-dot" /> DOKTOR UYGULAMASI</div><h2>Takviminiz<br /><em>cebinizde.</em></h2><p>Doktor yalnızca kendine ait randevuları görür. Yeni kayıt, değişiklik veya iptal olduğunda telefonuna bildirim gelir.</p><ul>{checks.map((check) => <li key={check}><span>✓</span>{check}</li>)}</ul></div>
        <div className="phone-wrap"><div className="phone-glow" /><div className="phone"><div className="phone-notch" /><div className="phone-head"><span>‹</span><div><small>Bugün</small><strong>Dr. Deniz Kaya</strong></div><span className="bell">◌</span></div><div className="phone-date"><b>6</b><span>Per</span><span>7<br /><small>Cum</small></span><span>8<br /><small>Cmt</small></span><span>9<br /><small>Paz</small></span></div><div className="phone-calendar"><div className="phone-line"><span>09:00</span><div className="appt mint"><b>Kontrol muayenesi</b><small>Ayşe Y. · 30 dk</small></div></div><div className="phone-line"><span>11:30</span><div className="appt purple"><b>İmplant görüşmesi</b><small>Mehmet K. · 45 dk</small></div></div><div className="phone-line"><span>15:00</span><div className="appt coral"><b>Yeni hasta</b><small>Elif T. · 30 dk</small></div></div></div><div className="phone-notification"><span className="notif-icon">✦</span><div><small>Resepta · şimdi</small><b>Yeni randevu eklendi</b></div></div></div></div>
      </section>

      <section className="faq-section" id="sss">
        <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-dot" /> SIK SORULANLAR</div><h2>Aklınızdaki<br /><em>sorular.</em></h2><p>Resepta’nın kliniğiniz için nasıl çalışacağını ilk görüşmede birlikte netleştirelim.</p></div>
        <div className="faq-list">
          {faqItems.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="demo-card"><div><div className="eyebrow"><span className="eyebrow-dot" /> KLİNİK ÖZEL GÖRÜŞME</div><h2>Resepta’yı<br /><em>kliniğiniz için değerlendirin.</em></h2><p>Kliniğinizin ihtiyaçlarını konuşalım. Size uygun WhatsApp akışını ve randevu sürecini birlikte planlayalım.</p></div><div className="demo-contact"><strong>Fiyat için<br />lütfen randevu alın.</strong><a href="mailto:info@botfusions.com">info@botfusions.com <span>↗</span></a><a href="https://wa.me/905550341749" target="_blank" rel="noreferrer">WhatsApp’tan yazın <small>0555 034 17 49</small></a></div></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", name: "BotFusions", email: "info@botfusions.com", areaServed: ["İstanbul", "Üsküdar", "Kadıköy"] },
          { "@type": "SoftwareApplication", name: "Resepta", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Klinikler için WhatsApp hasta iletişimi, randevu akışı ve doktor takvimi yardımcısı.", areaServed: ["İstanbul", "Üsküdar", "Kadıköy"], provider: { "@type": "Organization", name: "BotFusions" } },
          { "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
        ],
      }) }} />

      <footer className="footer"><div className="brand"><span className="brand-mascot"><img src="/resepta-maskot.png" alt="Resepta maskotu" /></span><span className="brand-word">Resepta<span className="brand-dot">.</span></span></div><div className="footer-contact"><a href="mailto:info@botfusions.com">info@botfusions.com</a><a href="https://wa.me/905550341749" target="_blank" rel="noreferrer">WhatsApp’tan yazın</a><a href="https://www.facebook.com/profile.php?id=61592775012003" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/resepta.botfusions/" target="_blank" rel="noreferrer">Instagram</a><a href="/gizlilik-politikasi">Gizlilik politikası</a></div><p>BotFusions tarafından geliştirildi.</p><span className="footer-note">Klinikler için daha iyi bir ilk cevap.</span></footer>
    </main>
  );
}
