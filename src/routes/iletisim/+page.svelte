<script>
  import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head><title>İletişim — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <h1 class="display-xl"><span style="color: var(--accent)">KONUŞALIM.</span><br/>PROJENİZİ DEĞERLENDİRELİM.</h1>
    <p class="lead">Keşif, fizibilite ve fiyat teklifi tamamen ücretsiz. Direkt arayın veya yazın — 24 saat içinde dönüş yapıyoruz.</p>
  </div>
</section>

<!-- İletişim bilgileri -->
<section class="contact-section">
  <div class="container">
    <div class="contact-cards">

      <a href="tel:+903121234567" class="cc">
        <div class="cc-icon"><Icon name="Phone" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">Telefon</span>
          <span class="cc-main">+90 312 123 45 67</span>
          <span class="cc-sub">7/24 Acil · +90 532 555 12 12</span>
        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <a href="https://wa.me/905325551212" target="_blank" rel="noopener noreferrer" class="cc cc-wa">
        <div class="cc-icon cc-icon-wa"><Icon name="WhatsApp" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">WhatsApp</span>
          <span class="cc-main">+90 532 555 12 12</span>
          <span class="cc-sub">Hızlı mesaj · 7/24</span>
        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <a href="mailto:info@kosekenerji.com" class="cc">
        <div class="cc-icon"><Icon name="Mail" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">E-posta</span>
          <span class="cc-main">info@kosekenerji.com</span>
          <span class="cc-sub">teklif@kosekenerji.com</span>
        </div>
        <span class="cc-arrow"><Icon name="ArrowUR" size={14}/></span>
      </a>

      <div class="cc">
        <div class="cc-icon"><Icon name="Clock" size={22}/></div>
        <div class="cc-body">
          <span class="cc-label">Çalışma Saatleri</span>
          <span class="cc-main">Pzt – Cmt · 08:00 – 18:00</span>
          <span class="cc-sub">Acil servis · 7/24</span>
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
        <div class="eyebrow">/ HIZLI İLETİŞİM</div>
        <h2 class="display-lg" style="margin: 20px 0 32px">BİZE<br/>ULAŞIN.</h2>
        <div class="reach-btns">
          <a href="tel:+903121234567" class="reach-btn reach-btn-primary">
            <Icon name="Phone" size={18}/>
            Hemen Ara
          </a>
          <a href="mailto:teklif@kosekenerji.com" class="reach-btn reach-btn-ghost">
            <Icon name="Mail" size={18}/>
            Teklif İste
          </a>
          <a href="https://wa.me/905325551212" target="_blank" rel="noopener noreferrer" class="reach-btn reach-btn-wa">
            <Icon name="WhatsApp" size={18}/>
            WhatsApp
          </a>
        </div>
        <p class="reach-note">Mühendisiniz 24 saat içinde sizi arar. Keşif ve fizibilite ücretsizdir.</p>
      </div>

      <div class="reach-right">
        <div class="office-detail">
          <div class="od-row">
            <span class="od-key">Şirket</span>
            <span class="od-val">Kösek Enerji Mühendislik A.Ş.</span>
          </div>
          <div class="od-row">
            <span class="od-key">Vergi No</span>
            <span class="od-val">1234567890 · Ankara VD</span>
          </div>
          <div class="od-row">
            <span class="od-key">Adres</span>
            <span class="od-val">OSTİM OSB, 100. Yıl Bulv. No:42<br/>Yenimahalle / Ankara 06370</span>
          </div>
          <div class="od-row">
            <span class="od-key">Telefon</span>
            <span class="od-val">+90 312 123 45 67</span>
          </div>
          <div class="od-row">
            <span class="od-key">E-posta</span>
            <span class="od-val">info@kosekenerji.com</span>
          </div>
          <div class="od-row">
            <span class="od-key">Sertifika</span>
            <span class="od-val">EMO · TEDAŞ · ISO 9001:2015</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Google Maps -->
<div class="map-wrapper">
  <div class="map-label">
    <Icon name="Pin" size={14}/>
    OSTİM OSB · Ankara
  </div>
  <iframe
    title="Kösek Enerji Konum"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3!2d32.7547!3d39.9748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fde14555555%3A0x0!2zT1NUxLBNIE9TQiDhxLBha2E!5e0!3m2!1str!2str!4v1714999999999!5m2!1str!2str"
    width="100%"
    height="100%"
    style="border:0; filter: grayscale(0.2) contrast(1.05);"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

<!-- CTA band -->
<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner">
      <h2>Projeniz için<br/>ücretsiz keşif.</h2>
      <a href="tel:+903121234567" class="cta-band-cta"><Icon name="Phone" size={18}/> Hemen iletişime geç</a>
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
  .map-wrapper {
    height: 520px;
    position: relative;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .map-label {
    position: absolute;
    top: 20px; left: 20px;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-deep);
    border: 1px solid var(--line);
    border-radius: var(--r-sm);
    padding: 8px 14px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }

  @media (max-width: 960px) {
    .contact-cards { grid-template-columns: repeat(2, 1fr); }
    .cc:nth-child(2n) { border-right: none; }
    .cc:nth-child(3), .cc:nth-child(4) { border-top: 1px solid var(--line); }
    .reach-grid { grid-template-columns: 1fr; gap: 48px; }
    .reach-btns { flex-wrap: wrap; }
    .map-wrapper { height: 400px; }
  }
  @media (max-width: 540px) {
    .contact-cards { grid-template-columns: 1fr; }
    .cc { border-right: none; border-bottom: 1px solid var(--line); }
    .cc:nth-child(3), .cc:nth-child(4) { border-top: none; }
    .cc:last-child { border-bottom: none; }
  }
</style>
