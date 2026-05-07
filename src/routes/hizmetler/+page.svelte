<script>
  import Icon from '$lib/components/Icon.svelte';
  import { SERVICES } from '$lib/data.js';

  let active = 0;
</script>

<svelte:head><title>Hizmetlerimiz — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <h1 class="display-xl">UÇTAN UCA<br/><span style="color: var(--accent)">ELEKTRİK</span> MÜHENDİSLİĞİ.</h1>
    <p class="lead">Tasarımdan uygulamaya, devreye almadan bakıma; tüm enerji yatırımınızı tek bir mühendislik ortağıyla yönetin.</p>
  </div>
</section>

<section class="services-section">
  <div class="container">
    <div class="services-layout">

      <!-- Sol: Servis seçici -->
      <nav class="services-nav">
        {#each SERVICES as s, i}
          <button
            class="snav-item"
            class:active={active === i}
            on:click={() => active = i}
          >
            <span class="snav-num">{String(i + 1).padStart(2, '0')}</span>
            <span class="snav-title">{s.title}</span>
            <span class="snav-arrow"><Icon name="Arrow" size={14}/></span>
          </button>
        {/each}
      </nav>

      <!-- Sağ: Aktif servis detayı -->
      <div class="services-detail">
        {#key active}
          <div class="detail-panel">
            <header class="detail-header">
              <div class="detail-icon-wrap">
                <Icon name={SERVICES[active].icon} size={28}/>
              </div>
              <div class="detail-tags">
                {#each SERVICES[active].tags as t}
                  <span class="detail-tag">{t}</span>
                {/each}
              </div>
              <span class="detail-index">{String(active + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}</span>
            </header>

            <h2 class="detail-title">{SERVICES[active].title}</h2>
            <p class="detail-lead">{SERVICES[active].long}</p>

            <div class="detail-bullets">
              <div class="bullets-label">Kapsam</div>
              <ul class="bullets-grid">
                {#each SERVICES[active].bullets as b}
                  <li>{b}</li>
                {/each}
              </ul>
            </div>

            <a href="/iletisim" class="detail-cta">
              Bu hizmet için teklif al <Icon name="ArrowUR" size={15}/>
            </a>
          </div>
        {/key}
      </div>

    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner">
      <h2>Hangi hizmete<br/>ihtiyacınız var?</h2>
      <a href="/iletisim" class="cta-band-cta"><Icon name="Phone" size={18}/> Mühendisle görüş</a>
    </div>
  </div>
</section>

<style>
  .services-section { padding-top: 0; }

  .services-layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 0;
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    overflow: hidden;
    min-height: 600px;
  }

  /* ── Sol nav ── */
  .services-nav {
    display: flex;
    flex-direction: column;
    background: var(--bg-deep);
    border-right: 1px solid var(--line);
  }

  .snav-item {
    display: grid;
    grid-template-columns: 36px 1fr 16px;
    align-items: center;
    gap: 14px;
    padding: 22px 24px;
    border: none;
    border-bottom: 1px solid var(--line-soft);
    background: transparent;
    text-align: left;
    cursor: pointer;
    position: relative;
    transition: background 0.2s ease;
  }
  .snav-item:last-child { border-bottom: none; }
  .snav-item::before {
    content: "";
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--accent);
    transform: scaleY(0);
    transition: transform 0.25s ease;
  }
  .snav-item:hover { background: rgba(255,255,255,0.03); }
  .snav-item.active { background: rgba(255,212,0,0.05); }
  .snav-item.active::before { transform: scaleY(1); }
  .snav-item.active .snav-num { color: var(--accent); }
  .snav-item.active .snav-title { color: var(--text); }
  .snav-item.active .snav-arrow { opacity: 1; color: var(--accent); }

  .snav-num {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    transition: color 0.2s ease;
  }
  .snav-title {
    font-family: var(--font-display-alt);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-dim);
    line-height: 1.25;
    transition: color 0.2s ease;
  }
  .snav-arrow {
    opacity: 0;
    color: var(--text-muted);
    transition: opacity 0.2s ease, color 0.2s ease;
    display: flex;
    align-items: center;
  }
  .snav-item:hover .snav-arrow { opacity: 0.5; }

  /* ── Sağ detay ── */
  .services-detail {
    background: var(--bg-card);
    position: relative;
    overflow: hidden;
  }

  .detail-panel {
    padding: 48px 52px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: 100%;
    animation: fadeSlideIn 0.28s ease both;
  }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .detail-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .detail-icon-wrap {
    width: 52px; height: 52px;
    display: grid;
    place-items: center;
    background: rgba(255,212,0,0.08);
    border: 1px solid rgba(255,212,0,0.2);
    border-radius: var(--r-md);
    color: var(--accent);
    flex-shrink: 0;
  }
  .detail-tags { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }
  .detail-tag {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid rgba(255,212,0,0.25);
    padding: 4px 10px;
    border-radius: 100px;
  }
  .detail-index {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    margin-left: auto;
  }

  .detail-title {
    font-family: var(--font-display);
    font-size: clamp(36px, 4vw, 56px);
    font-weight: 400;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 1;
    color: var(--text);
  }

  .detail-lead {
    font-size: 16px;
    color: var(--text-dim);
    line-height: 1.75;
    max-width: 640px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--line);
  }

  .detail-bullets { display: flex; flex-direction: column; gap: 14px; }
  .bullets-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .bullets-grid {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 32px;
  }
  .bullets-grid li {
    font-size: 14px;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid var(--line-soft);
  }
  .bullets-grid li::before {
    content: "";
    width: 5px; height: 5px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .detail-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    padding: 14px 24px;
    background: var(--accent);
    color: var(--bg-deep);
    font-weight: 700;
    font-size: 14px;
    border-radius: var(--r-sm);
    letter-spacing: 0.02em;
    align-self: flex-start;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .detail-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255,212,0,0.3);
  }

  @media (max-width: 900px) {
    .services-layout { grid-template-columns: 1fr; }
    .services-nav { flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid var(--line); }
    .snav-item { flex-shrink: 0; grid-template-columns: auto 1fr; border-bottom: none; border-right: 1px solid var(--line-soft); }
    .snav-item:last-child { border-right: none; }
    .snav-item::before { top: 0; left: 0; right: 0; bottom: auto; width: auto; height: 3px; transform: scaleX(0); }
    .snav-item.active::before { transform: scaleX(1); }
    .snav-arrow { display: none; }
    .detail-panel { padding: 32px 24px; }
    .bullets-grid { grid-template-columns: 1fr; }
  }
</style>
