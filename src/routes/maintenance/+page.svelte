<svelte:head>
  <title>Bakım Çalışması | Kösek Enerji</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="page">
  <div class="grid-bg"></div>

  <div class="content">
    <div class="logo-wrap">
      <img src="/favicon.svg" alt="Kösek Enerji" class="logo" />
    </div>

    <div class="badge">
      <span class="dot"></span>
      Bakım Çalışması
    </div>

    <h1>Yakında Geri Döneceğiz</h1>

    <p class="desc">
      Sitemizi sizin için daha iyi hale getiriyoruz.<br />
      Kısa süre içinde tekrar hizmetinizdeyiz.
    </p>

    <div class="divider"></div>

    <div class="contact-row">
      <a href="tel:+905425338047" class="contact-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        +90 542 533 80 47
      </a>
      <a href="mailto:info@kösekenerji.com" class="contact-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        info@kösekenerji.com
      </a>
    </div>
  </div>

  <footer class="foot">
    © {new Date().getFullYear()} Kösek Enerji Mühendislik — Antalya
  </footer>
</div>

<style>
  .page {
    min-height: 100vh;
    background: #050810;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 212, 0, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 212, 0, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 560px;
    width: 100%;
  }

  .logo-wrap {
    margin-bottom: 2rem;
  }

  .logo {
    width: 64px;
    height: 64px;
    filter: drop-shadow(0 0 20px rgba(255, 212, 0, 0.4));
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 212, 0, 0.08);
    border: 1px solid rgba(255, 212, 0, 0.25);
    color: #FFD400;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 1.5rem;
  }

  .dot {
    width: 7px;
    height: 7px;
    background: #FFD400;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  h1 {
    font-family: 'Bebas Neue', 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 400;
    color: #FAFBFC;
    line-height: 1;
    margin: 0 0 1.25rem;
    letter-spacing: 0.02em;
  }

  .desc {
    color: #8A99B8;
    font-size: 1rem;
    line-height: 1.7;
    margin: 0 0 2rem;
  }

  .divider {
    width: 48px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FFD400, transparent);
    margin-bottom: 2rem;
  }

  .contact-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid #1A2540;
    border-radius: 8px;
    color: #FAFBFC;
    font-size: 0.875rem;
    text-decoration: none;
    background: #0B1220;
    transition: border-color 0.2s, color 0.2s;
  }

  .contact-btn:hover {
    border-color: #FFD400;
    color: #FFD400;
  }

  .foot {
    position: relative;
    z-index: 1;
    margin-top: 4rem;
    color: #4A5876;
    font-size: 0.8rem;
  }
</style>
