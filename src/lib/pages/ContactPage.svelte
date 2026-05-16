<script>
  import Icon from '$lib/components/Icon.svelte';

  import { t } from '$lib/i18n/index.js';

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kösek Enerji İletişim",
    "url": "https://www.kösekenerji.com/iletisim",
    "description": "Antalya Muratpaşa'daki Kösek Enerji ofisiyle iletişime geçin",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Kösek Enerji",
      "telephone": "+905425338047",
      "email": "info@kösekenerji.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45 İç Kapı No:B",
        "addressLocality": "Muratpaşa",
        "addressRegion": "Antalya",
        "postalCode": "07040",
        "addressCountry": "TR"
      }
    }
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(contactSchema)}<\/script>`}
</svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <h1 class="display-xl"><span style="color: var(--accent)">{@html $t('pages.contact.heroTitle')}</span></h1>
    <p class="lead">{$t('pages.contact.heroLead')}</p>
  </div>
</section>

<!-- İletişim bilgileri -->
<section class="contact-section">
  <div class="container">
    <div class="contact-cards">

      <a href="tel:+905425338047" class="cc">
        <div class="cc-icon"><Icon name="Phone" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">{$t('pages.contact.phoneLbl')}</span>
          <span class="cc-main">+90 542 533 80 47</span>

        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <a href="https://wa.me/905425338047" target="_blank" rel="noopener noreferrer" class="cc cc-wa">
        <div class="cc-icon cc-icon-wa"><Icon name="WhatsApp" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">{$t('pages.contact.whatsappLbl')}</span>
          <span class="cc-main">+90 542 533 80 47</span>
          <span class="cc-sub">{$t('pages.contact.waSub')}</span>
        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <a href="mailto:info@kösekenerji.com" class="cc">
        <div class="cc-icon"><Icon name="Mail" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">{$t('pages.contact.emailLbl')}</span>
          <span class="cc-main">info@kösekenerji.com</span>
          <span class="cc-sub">teklif@kösekenerji.com</span>
        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <div class="cc">
        <div class="cc-icon"><Icon name="Clock" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">{$t('pages.contact.hoursLbl')}</span>
          <span class="cc-main">{$t('pages.contact.hoursVal')}</span>

        </div>
      </div>

    </div>
  </div>
</section>

<!-- Hızlı iletişim + ofis detayı -->
<section class="reach-section">
  <div class="container">
    <div class="reach-grid">

      <div class="reach-left">
        <div class="eyebrow">{$t('pages.contact.quickContact')}</div>
        <h2 class="display-lg" style="margin: 20px 0 32px">{@html $t('pages.contact.reachTitle')}</h2>
        <div class="reach-btns">
          <a href="tel:+905425338047" class="reach-btn reach-btn-primary">
            <Icon name="Phone" size={18}/>
            {$t('pages.contact.callNow')}
          </a>
          <a href="mailto:teklif@kösekenerji.com" class="reach-btn reach-btn-ghost">
            <Icon name="Mail" size={18}/>
            {$t('pages.contact.getQuote')}
          </a>
          <a href="https://wa.me/905425338047" target="_blank" rel="noopener noreferrer" class="reach-btn reach-btn-wa">
            <Icon name="WhatsApp" size={18}/>
            {$t('pages.contact.whatsapp')}
          </a>
        </div>
        <p class="reach-note">{$t('pages.contact.engineerNote')}</p>
      </div>

      <div class="reach-right">
        <div class="office-detail">
          <div class="od-row">
            <span class="od-key">{$t('pages.contact.company')}</span>
            <span class="od-val">Kösek Enerji Mühendislik ve Elektrik Hizmetleri Sanayi Ticaret Limited Şirketi</span>
          </div>
          <div class="od-row">
            <span class="od-key">{$t('pages.contact.taxNo')}</span>
            <span class="od-val">5881221574 · Antalya Kurumlar VD</span>
          </div>
          <div class="od-row">
            <span class="od-key">{$t('pages.contact.address')}</span>
            <span class="od-val">Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45 İç Kapı No:B<br/>Muratpaşa / Antalya</span>
          </div>
          <div class="od-row">
            <span class="od-key">{$t('pages.contact.phone')}</span>
            <span class="od-val">+90 542 533 80 47</span>
          </div>
          <div class="od-row">
            <span class="od-key">{$t('pages.contact.email')}</span>
            <span class="od-val">info@kösekenerji.com</span>
          </div>
         
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Google Maps -->
<section class="map-section">
  <div class="container">
    <div class="map-head">
      <div class="eyebrow map-eyebrow">
        <span class="map-dot"></span>
        / KONUM · GPS
      </div>
      <div class="map-coords">
        <span class="coord"><span class="coord-k">LAT</span><span class="coord-v">36.8944° N</span></span>
        <span class="coord-sep">·</span>
        <span class="coord"><span class="coord-k">LNG</span><span class="coord-v">30.6997° E</span></span>
        <span class="coord-sep">·</span>
        <span class="coord"><span class="coord-k">ALT</span><span class="coord-v">39 m</span></span>
      </div>
    </div>

    <div class="map-card">
      <iframe
        title="Kösek Enerji Konum"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5!2d30.6997!3d36.8944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f3cc0e3c7c9%3A0x1!2sMuratpa%C5%9Fa%2C+Antalya!5e0!3m2!1str!2str!4v1714999999999!5m2!1str!2str"
        width="100%"
        height="100%"
        style="border:0;"
        class="map-iframe"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <!-- Kenar gradyanları -->
      <div class="map-fade map-fade-top"></div>
      <div class="map-fade map-fade-bottom"></div>
      <div class="map-fade map-fade-left"></div>
      <div class="map-fade map-fade-right"></div>

      <!-- Adres paneli -->
      <div class="map-address">
        <div class="map-address-icon"><Icon name="Pin" size={15}/></div>
        <div class="map-address-body">
          <div class="map-address-name">Kösek Enerji Mühendislik</div>
          <div class="map-address-line">Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45/B</div>
          <div class="map-address-city">07040 Muratpaşa / Antalya</div>
        </div>
        <a
          href="https://maps.google.com/?q=36.8944,30.6997"
          target="_blank"
          rel="noopener noreferrer"
          class="map-open-btn"
        >
          Google Maps <Icon name="ArrowUR" size={11}/>
        </a>
      </div>

      <!-- Sinyal halkası (merkezi vurgu) -->
      <div class="map-pulse" aria-hidden="true">
        <div class="map-pulse-ring"></div>
        <div class="map-pulse-dot"></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA band -->
<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner">
      <h2>{@html $t('pages.contact.ctaTitle')}</h2>
      <a href="tel:+905425338047" class="cta-band-cta"><Icon name="Phone" size={18}/> {$t('pages.contact.ctaBtn')}</a>
    </div>
  </div>
</section>

<style>
  /* ── Kart grid ── */
  .contact-section { padding-top: 0; padding-bottom: 0; }
  .contact-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .cc {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 32px 24px;
    border-right: 1px solid var(--line);
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: background 0.2s ease;
  }
  .cc:last-child { border-right: none; }
  a.cc:hover { background: rgba(255,212,0,0.04); }
  a.cc:hover .cc-main { color: var(--accent); }
  a.cc:hover .cc-arrow { opacity: 1; transform: translate(2px,-2px); }
  .cc-wa:hover { background: rgba(37,211,102,0.06) !important; }
  .cc-wa:hover .cc-main { color: #25D366 !important; }

  .cc-icon {
    width: 44px; height: 44px;
    display: grid;
    place-items: center;
    background: var(--bg-elevated);
    border: 1px solid var(--line);
    border-radius: var(--r-sm);
    color: var(--accent);
    flex-shrink: 0;
  }
  .cc-icon-wa { color: #25D366; border-color: rgba(37,211,102,0.25); background: rgba(37,211,102,0.08); }
  .cc-body { display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .cc-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .cc-main {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.3;
    transition: color 0.2s ease;
  }
  .cc-sub { font-size: 12.5px; color: var(--text-muted); line-height: 1.4; }
  .cc-arrow {
    color: var(--text-muted);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ── Hızlı iletişim ── */
  .reach-section { background: var(--bg-deep); border-top: 1px solid var(--line); }
  .reach-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  .reach-btns { display: flex; flex-direction: row; gap: 12px; margin-bottom: 24px; }
  .reach-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 18px 28px;
    border-radius: var(--r-sm);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.01em;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    text-decoration: none;
    flex: 1;
  }
  .reach-btn-primary {
    background: var(--accent);
    color: var(--bg-deep);
    box-shadow: 0 4px 0 var(--accent-hot), 0 8px 24px var(--accent-glow);
  }
  .reach-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 var(--accent-hot), 0 14px 40px var(--accent-glow);
  }
  .reach-btn-ghost {
    border: 1px solid var(--line);
    color: var(--text);
    background: rgba(255,255,255,0.02);
  }
  .reach-btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .reach-btn-wa {
    border: 1px solid rgba(37,211,102,0.3);
    color: #25D366;
    background: rgba(37,211,102,0.06);
  }
  .reach-btn-wa:hover {
    background: rgba(37,211,102,0.12);
    border-color: #25D366;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37,211,102,0.2);
  }
  .reach-note { font-size: 13px; color: var(--text-muted); line-height: 1.6; max-width: 340px; }

  .office-detail {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    overflow: hidden;
  }
  .od-row {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 20px;
    padding: 16px 24px;
    border-bottom: 1px solid var(--line-soft);
    align-items: start;
  }
  .od-row:last-child { border-bottom: none; }
  .od-key {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-muted);
    padding-top: 2px;
  }
  .od-val { font-size: 14px; color: var(--text-dim); line-height: 1.55; }

  /* ── Harita ── */
  .map-section {
    background: var(--bg-deep);
    border-top: 1px solid var(--line);
    padding: 60px 0 80px;
  }

  .map-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .map-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .map-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: mapBlink 1.8s ease-in-out infinite;
  }
  @keyframes mapBlink { 0%,100%{opacity:1} 50%{opacity:0.25} }

  .map-coords {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 11px;
  }
  .coord { display: flex; align-items: center; gap: 5px; }
  .coord-k {
    color: var(--text-muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 10px;
  }
  .coord-v { color: var(--accent); letter-spacing: 0.06em; }
  .coord-sep { color: var(--line); }

  .map-card {
    position: relative;
    height: 480px;
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    overflow: hidden;
    background: var(--bg-card);
  }

  .map-iframe {
    width: 100%; height: 100%;
    display: block;
    filter: grayscale(1) brightness(0.42) contrast(1.15) sepia(0.15);
    transition: filter 0.4s ease;
  }
  .map-card:hover .map-iframe {
    filter: grayscale(0.8) brightness(0.55) contrast(1.1);
  }

  /* Kenar gradyanları */
  .map-fade {
    position: absolute;
    pointer-events: none;
    z-index: 2;
  }
  .map-fade-top {
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, var(--bg-card), transparent);
  }
  .map-fade-bottom {
    bottom: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to top, var(--bg-card), transparent);
  }
  .map-fade-left {
    top: 0; left: 0; bottom: 0;
    width: 120px;
    background: linear-gradient(to right, var(--bg-card), transparent);
  }
  .map-fade-right {
    top: 0; right: 0; bottom: 0;
    width: 120px;
    background: linear-gradient(to left, var(--bg-card), transparent);
  }

  /* Adres paneli */
  .map-address {
    position: absolute;
    bottom: 28px;
    left: 28px;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: rgba(2,4,10,0.88);
    border: 1px solid var(--line);
    border-radius: var(--r-md);
    padding: 18px 20px;
    backdrop-filter: blur(12px);
    max-width: 400px;
  }
  .map-address-icon {
    width: 34px; height: 34px;
    display: grid;
    place-items: center;
    background: rgba(255,212,0,0.08);
    border: 1px solid rgba(255,212,0,0.2);
    border-radius: var(--r-sm);
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .map-address-body { display: flex; flex-direction: column; gap: 3px; flex: 1; }
  .map-address-name {
    font-family: var(--font-display-alt);
    font-size: 13px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: 0.01em;
  }
  .map-address-line { font-size: 12px; color: var(--text-dim); line-height: 1.45; }
  .map-address-city {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-top: 2px;
  }
  .map-open-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    background: var(--accent);
    color: var(--bg-deep);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    border-radius: var(--r-sm);
    white-space: nowrap;
    align-self: center;
    flex-shrink: 0;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }
  .map-open-btn:hover {
    box-shadow: 0 4px 16px rgba(255,212,0,0.35);
    transform: translateY(-1px);
  }

  /* Sinyal halkası */
  .map-pulse {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    pointer-events: none;
  }
  .map-pulse-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px rgba(255,212,0,0.3), 0 0 12px rgba(255,212,0,0.5);
    position: relative;
    z-index: 2;
  }
  .map-pulse-ring {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 10px; height: 10px;
    border-radius: 50%;
    animation: mapPulse 2s ease-out infinite;
  }
  @keyframes mapPulse {
    0%   { box-shadow: 0 0 0 0 rgba(255,212,0,0.5); }
    70%  { box-shadow: 0 0 0 40px rgba(255,212,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,212,0,0); }
  }

  @media (max-width: 960px) {
    .contact-cards { grid-template-columns: repeat(2, 1fr); }
    .cc:nth-child(2n) { border-right: none; }
    .cc:nth-child(3), .cc:nth-child(4) { border-top: 1px solid var(--line); }
    .reach-grid { grid-template-columns: 1fr; gap: 48px; }
    .reach-btns { flex-wrap: wrap; }
    .map-card { height: 400px; }
    .map-address { max-width: calc(100% - 56px); }
  }
  @media (max-width: 540px) {
    .contact-cards { grid-template-columns: 1fr; }
    .cc { border-right: none; border-bottom: 1px solid var(--line); }
    .cc:nth-child(3), .cc:nth-child(4) { border-top: none; }
    .cc:last-child { border-bottom: none; }
  }
</style>
