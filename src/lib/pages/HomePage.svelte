<script>
  import Icon from '$lib/components/Icon.svelte';
  import HeroElectric from '$lib/components/HeroElectric.svelte';
  import Ticker from '$lib/components/Ticker.svelte';

  import { SERVICES, PROJECTS, CLIENTS } from '$lib/data.js';
  import { t, link } from '$lib/i18n/index.js';

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kösek Enerji",
    "url": "https://www.kösekenerji.com",
    "description": "Antalya merkezli endüstriyel elektrik mühendislik firması",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.kösekenerji.com/hizmetler",
      "query-input": "required name=search_term_string"
    }
  };

  let filter = 'hepsi';
  $: filtered = filter === 'hepsi' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  $: filters = [
    { id: 'hepsi',         label: $t('pages.projects.filters.all') },
    { id: 'endustriyel',   label: $t('pages.projects.filters.industrial') },
    { id: 'yenilenebilir', label: $t('pages.projects.filters.renewable') },
    { id: 'otomasyon',     label: $t('pages.projects.filters.automation') },
    { id: 'aydinlatma',    label: $t('pages.projects.filters.lighting') },
  ];
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(homeSchema)}<\/script>`}
</svelte:head>

<section class="hero">
  <div class="hero-bg">
    <div class="hero-bg-grid"></div>
    <div class="hero-bg-glow"></div>
    <div class="hero-bg-noise"></div>
  </div>
  <HeroElectric/>

  <div class="container hero-main">
    <div class="hero-top fade-in">
      <div class="hero-top-left">
        <div class="eyebrow"><span class="blink"></span>{$t('pages.home.eyebrow')}</div>
        <div class="hero-id">REF · KSK-2026 / 0428 · LIVE</div>
      </div>
      <div class="hero-voltage">
        <div class="voltage-readout"><div class="label">Voltaj</div><div class="value">400 kV</div></div>
        <div class="voltage-readout"><div class="label">Frekans</div><div class="value">50.0 Hz</div></div>
        <div class="voltage-readout"><div class="label">PF</div><div class="value">0.98</div></div>
      </div>
    </div>

    <div class="hero-headline fade-in fade-in-2">
      <h1 class="display-xl">{@html $t('pages.home.headline')}</h1>
    </div>

    <div class="hero-bottom fade-in fade-in-3">
      <p class="hero-lead">{$t('pages.home.lead')}</p>
      <div class="hero-lead-cta">
        <div class="hero-cta-buttons">
          <a href={$link('/iletisim')} class="btn btn-primary">{$t('pages.home.cta1')} <Icon name="Arrow" size={16}/></a>
          <a href={$link('/hizmetler')} class="btn btn-ghost">{$t('pages.home.cta2')}</a>
        </div>
      </div>
    </div>
  </div>

  <Ticker/>
</section>

<div class="hero-mega-band">
  <div class="mega-marquee">
    <span>YÜKSEK GERİLİM <span class="dot"></span> PANO İMALATI <span class="dot"></span> GES <span class="dot"></span> OTOMASYON <span class="dot"></span> AYDINLATMA <span class="dot"></span> BAKIM <span class="dot"></span></span>
    <span>YÜKSEK GERİLİM <span class="dot"></span> PANO İMALATI <span class="dot"></span> GES <span class="dot"></span> OTOMASYON <span class="dot"></span> AYDINLATMA <span class="dot"></span> BAKIM <span class="dot"></span></span>
  </div>
</div>

<section class="services">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">{$t('pages.home.servicesEyebrow')}</div>
        <h2 class="display-lg">{@html $t('pages.home.servicesTitle')}</h2>
      </div>
      <a href={$link('/hizmetler')} class="head-cta">{$t('footer.servicesTitle')} <Icon name="ArrowUR" size={14}/></a>
    </div>
    <div class="services-bento">
      {#each SERVICES as s, i}
        <a href={$link('/hizmetler')} class="service-tile">
          <div class="tile-top">
            <div class="tile-icon"><Icon name={s.icon} size={22}/></div>
            <span class="tile-num">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{$t(`data.svc.${s.slug}`)?.title ?? s.title}</h3>
          <p>{$t(`data.svc.${s.slug}`)?.short ?? s.short}</p>
          <ul class="tile-list">
            {#each ($t(`data.svc.${s.slug}`)?.bullets ?? s.bullets).slice(0, 3) as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="tile-bottom">
            <div class="tile-tags">
              {#each s.tags as tag}<span class="tile-tag">{tag}</span>{/each}
            </div>
            <span class="tile-cta">→ <Icon name="Arrow" size={13}/></span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">{$t('pages.home.processEyebrow')}</div>
        <h2 class="display-lg">{@html $t('pages.home.processTitle')}</h2>
      </div>
    </div>
    <div class="process-grid">
      {#each $t('data.process') as p, i}
        <div class="process-card">
          <div class="process-card-top">
            <span class="process-step-num">{String(i + 1).padStart(2, '0')}</span>
            {#if i % 3 !== 2}
              <span class="process-connector" aria-hidden="true"></span>
            {/if}
          </div>
          <div class="process-card-line"></div>
          <h4 class="process-card-title">{p.t}</h4>
          <p class="process-card-desc">{p.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section style="background: var(--bg-deep); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">{$t('pages.home.projectsEyebrow')}</div>
        <h2 class="display-lg">{@html $t('pages.home.projectsTitle')}</h2>
      </div>
      <a href={$link('/projeler')} class="head-cta">{$t('nav.projects')} <Icon name="ArrowUR" size={14}/></a>
      <div class="projects-filter">
        {#each filters as f}
          <button class="filter-btn" class:active={filter === f.id} on:click={() => filter = f.id}>{f.label}</button>
        {/each}
      </div>
    </div>
    <div class="projects-grid">
      {#each filtered as p, i (p.slug)}
        <div class="project-card">
          <div class="project-img" style="background: linear-gradient(135deg, {p.color1}25, {p.color2}10), var(--bg-deep)">
            <svg class="project-img-pattern" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id={`pg${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color={p.color1} stop-opacity="0.9"/>
                  <stop offset="1" stop-color={p.color2} stop-opacity="0.5"/>
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.08)" fill="none">
                {#each Array(10) as _, k}<line x1={k*22} y1="0" x2={k*22} y2="150"/>{/each}
                {#each Array(8) as _, k}<line x1="0" y1={k*22} x2="200" y2={k*22}/>{/each}
              </g>
              <path d="M10 130 L40 80 L60 100 L90 50 L120 90 L150 30 L190 70" stroke={`url(#pg${i})`} stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="150" cy="30" r="4" fill={p.color1}/>
              <circle cx="150" cy="30" r="12" fill={p.color1} opacity="0.25"/>
            </svg>
          </div>
          <div class="project-meta">
            <span class="project-tag">{p.tag}</span>
            <h4>{p.title}</h4>
            <div class="project-loc">{p.loc}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="clients">
  <div class="container">
    <div class="clients-label">{$t('pages.home.clientsLabel')}</div>
    <div class="clients-grid">
      {#each CLIENTS as c}<div class="client-logo">{c}</div>{/each}
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner">
      <h2>{@html $t('pages.home.ctaTitle')}</h2>
      <a href={$link('/iletisim')} class="cta-band-cta"><Icon name="Bolt" size={18}/> {$t('pages.contact.ctaBtn')}</a>
    </div>
  </div>
  <svg class="cta-band-pattern" viewBox="0 0 1200 200" preserveAspectRatio="none">
    <path d="M0 100 L200 100 L220 60 L260 140 L300 100 L1200 100" stroke="#000" stroke-width="2" fill="none"/>
    <path d="M0 50 L400 50 L420 20 L460 80 L500 50 L1200 50" stroke="#000" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M0 150 L600 150 L620 110 L660 180 L700 150 L1200 150" stroke="#000" stroke-width="1.5" fill="none" opacity="0.4"/>
  </svg>
</section>
