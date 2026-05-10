<script>
  import Icon from '$lib/components/Icon.svelte';

  import { t } from '$lib/i18n/index.js';

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Kösek Enerji Hakkında",
    "url": "https://www.kösekenerji.com/hakkimizda",
    "description": "Antalya merkezli elektrik mühendislik firması Kösek Enerji'nin hikayesi, değerleri ve mühendislik kadrosu",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kösek Enerji",
      "foundingDate": "2001",
      "foundingLocation": { "@type": "Place", "name": "Antalya, Türkiye" },
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 48 }
    }
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(aboutSchema)}<\/script>`}
</svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <h1 class="display-xl">{@html $t('pages.about.heroTitle')}</h1>
    <p class="lead">{$t('pages.about.heroLead')}</p>
  </div>
</section>

<section class="mv-section">
  <div class="container">
    <div class="section-head">
      <div class="eyebrow">{$t('pages.about.mvEyebrow')}</div>
    </div>
    <div class="mv-grid">
      <div class="mv-card">
        <span class="mv-icon"><Icon name="Bolt" size={36}/></span>
        <h3 class="display-md">{$t('pages.about.missionTitle')}</h3>
        <p>{$t('pages.about.missionText')}</p>
      </div>
      <div class="mv-card mv-accent">
        <span class="mv-icon"><Icon name="Sun" size={36}/></span>
        <h3 class="display-md">{$t('pages.about.visionTitle')}</h3>
        <p>{$t('pages.about.visionText')}</p>
      </div>
    </div>
  </div>
</section>

<section class="values-section">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">{$t('pages.about.valuesEyebrow')}</div>
        <h2 class="display-lg">{@html $t('pages.about.valuesTitle')}</h2>
      </div>
    </div>
    <div class="values-grid">
      {#each $t('data.values') as v}
        <div class="value-card">
          <div class="value-top">
            <span class="value-n">{v.n}</span>
            <div class="value-icon"><Icon name={v.i} size={18}/></div>
          </div>
          <h4 class="value-title">{v.t}</h4>
          <p class="value-desc">{v.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="principles-section">
  <div class="container">
    <div class="principles-head">
      <div>
        <div class="eyebrow">{$t('pages.about.principlesEyebrow')}</div>
        <h2 class="display-lg">{@html $t('pages.about.principlesTitle')}</h2>
      </div>
      <p class="principles-sub">{$t('pages.about.principlesSub')}</p>
    </div>
    <div class="principles-cards">
      {#each $t('pages.about.principles') as p, i}
        <div class="pc">
          <span class="pc-num">{String(i + 1).padStart(2, '0')}</span>
          <h4 class="pc-title">{p.t}</h4>
          <p class="pc-desc">{p.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* ── MİSYON & VİZYON ── */
  .mv-section { background: var(--bg-deep); border-top: 1px solid var(--line); }
  .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .mv-card {
    padding: 48px 40px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--bg-card);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .mv-card.mv-accent {
    border-color: rgba(255,212,0,0.3);
    background: linear-gradient(135deg, rgba(255,212,0,0.06) 0%, transparent 60%), var(--bg-card);
  }
  .mv-icon { color: var(--text-dim); display: flex; }
  .mv-card.mv-accent .mv-icon { color: var(--accent); }
  .mv-card p { color: var(--text-dim); font-size: 16px; line-height: 1.7; }

  /* ── DEĞERLER ── */
  .values-section { background: var(--bg); border-top: 1px solid var(--line); }
  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }
  .value-card {
    padding: 36px 32px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    position: relative;
    overflow: hidden;
    transition: background 0.25s ease;
  }
  .value-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .value-card:hover { background: rgba(255,212,0,0.025); }
  .value-card:hover::before { transform: scaleX(1); }
  .value-card:hover .value-n { color: var(--accent); }
  .value-card:hover .value-icon { background: rgba(255,212,0,0.1); color: var(--accent); }
  .value-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .value-n {
    font-family: var(--font-display);
    font-size: 52px;
    line-height: 1;
    color: var(--line);
    letter-spacing: 0;
    transition: color 0.3s ease;
    user-select: none;
  }
  .value-icon {
    width: 38px; height: 38px;
    display: grid;
    place-items: center;
    background: var(--bg-elevated);
    border: 1px solid var(--line);
    border-radius: var(--r-sm);
    color: var(--text-dim);
    transition: background 0.25s ease, color 0.25s ease;
  }
  .value-title {
    font-family: var(--font-display-alt);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 10px;
    color: var(--text);
  }
  .value-desc { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; }

  /* ── PRENSİPLER ── */
  .principles-section { background: var(--bg-deep); border-top: 1px solid var(--line); }
  .principles-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: end;
    margin-bottom: 60px;
  }
  .principles-sub { font-size: 16px; color: var(--text-muted); line-height: 1.6; max-width: 400px; align-self: end; }

  .principles-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .pc {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    padding: 36px 36px 32px;
    position: relative;
    overflow: hidden;
    transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  }
  .pc::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-electric));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .pc:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    border-color: rgba(255,212,0,0.18);
  }
  .pc:hover::before { transform: scaleX(1); }
  .pc:hover .pc-num { -webkit-text-stroke-color: rgba(255,212,0,0.22); }
  .pc:hover .pc-title { color: var(--text); }

  .pc-num {
    font-family: var(--font-display);
    font-size: 96px;
    line-height: 1;
    letter-spacing: 0;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--line);
    position: absolute;
    top: 10px; right: 20px;
    transition: -webkit-text-stroke-color 0.3s ease;
    user-select: none;
    pointer-events: none;
  }
  .pc-title {
    font-family: var(--font-display-alt);
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.25;
    color: var(--text-dim);
    margin-bottom: 14px;
    max-width: 75%;
    transition: color 0.25s ease;
  }
  .pc-desc {
    font-size: 14.5px;
    color: var(--text-muted);
    line-height: 1.72;
  }

  @media (max-width: 860px) {
    .mv-grid { grid-template-columns: 1fr; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .principles-head { grid-template-columns: 1fr; gap: 16px; }
    .principles-cards { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .values-grid { grid-template-columns: 1fr; }
    .mv-card { padding: 32px 24px; }
  }
</style>
