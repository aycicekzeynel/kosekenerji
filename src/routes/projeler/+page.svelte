<script>
  import Icon from '$lib/components/Icon.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { PROJECTS, TESTIMONIALS } from '$lib/data.js';

  let filter = 'hepsi';

  const cats = [
    { id: 'hepsi',        label: 'Tüm Projeler' },
    { id: 'endustriyel',  label: 'Endüstriyel'  },
    { id: 'yenilenebilir',label: 'GES & Yenilenebilir' },
    { id: 'otomasyon',    label: 'Otomasyon'    },
    { id: 'aydinlatma',   label: 'Aydınlatma'   },
  ];

  const featured = PROJECTS.find(p => p.featured);
  const rest     = PROJECTS.filter(p => !p.featured);

  $: grid = filter === 'hepsi' ? rest : rest.filter(p => p.cat === filter);

  function count(id) {
    if (id === 'hepsi') return PROJECTS.length;
    return PROJECTS.filter(p => p.cat === id).length;
  }

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kösek Enerji Referans Projeleri",
    "description": "Antalya ve Türkiye genelinde tamamlanan elektrik mühendislik projeleri",
    "numberOfItems": PROJECTS.length,
    "itemListElement": PROJECTS.slice(0, 8).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.title,
      "description": p.desc
    }))
  };
</script>

<SEO
  title="Referans Projeler — Antalya Elektrik & Enerji Projeleri | Kösek Enerji"
  description="340+ tamamlanmış proje: Antalya GES, yüksek gerilim, SCADA otomasyon ve LED aydınlatma referansları. 185 MW kurulu güç, %97 zamanında teslimat."
  keywords="Antalya elektrik projeleri, Antalya GES referans, Antalya trafo projesi, endüstriyel elektrik proje referansları, Antalya otomasyon projesi, Kösek Enerji referanslar"
  canonical="/projeler"
  schema={projectsSchema}
/>

<!-- ── HERO ── -->
<section class="page-hero proj-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position:relative;z-index:2">
    <div class="ph-eyebrow">
      <span class="blink"></span>/ 340+ TAMAMLANMIŞ PROJE
    </div>
    <h1 class="display-xl">
      SAHADA BIRAKTIĞIMIZ<br/>
      <span style="color:var(--accent)">MÜHENDİSLİK</span> İZİ.
    </h1>
    <p class="lead">Antalya ve Türkiye genelinde yüksek gerilimden güneş santrallerine, SCADA otomasyonundan LED aydınlatmaya; tamamladığımız seçilmiş referans projeler.</p>
  </div>
  <!-- Stat strip inside hero -->
  <div class="hero-stats">
    <div class="hs-item">
      <span class="hs-n">340<span class="hs-plus">+</span></span>
      <span class="hs-l">Tamamlanan Proje</span>
    </div>
    <div class="hs-div"></div>
    <div class="hs-item">
      <span class="hs-n">185<span class="hs-unit">MW</span></span>
      <span class="hs-l">Kurulu GES Gücü</span>
    </div>
    <div class="hs-div"></div>
    <div class="hs-item">
      <span class="hs-n">24<span class="hs-unit">YIL</span></span>
      <span class="hs-l">Sektör Deneyimi</span>
    </div>
    <div class="hs-div"></div>
    <div class="hs-item">
      <span class="hs-n">97<span class="hs-unit">%</span></span>
      <span class="hs-l">Zamanında Teslimat</span>
    </div>
  </div>
</section>

<!-- ── FEATURED PROJECT ── -->
{#if featured}
<section class="featured-section">
  <div class="container">
    <div class="feat-card">
      <!-- Left: Visual -->
      <div class="feat-visual" style="--c1:{featured.color1};--c2:{featured.color2}">
        <div class="feat-bg-grad"></div>
        <svg class="feat-svg" viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice">
          <!-- Solar panel grid -->
          <defs>
            <linearGradient id="fgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color={featured.color1} stop-opacity="0.9"/>
              <stop offset="1" stop-color={featured.color2} stop-opacity="0.4"/>
            </linearGradient>
            <pattern id="pgrid" x="0" y="0" width="48" height="32" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="44" height="28" rx="2" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
              <line x1="24" y1="2" x2="24" y2="30" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
              <line x1="2" y1="16" x2="46" y2="16" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="600" height="480" fill="url(#pgrid)"/>
          <!-- Highlight rows -->
          {#each Array(6) as _, r}
            {#each Array(8) as _, c}
              <rect x={c*72+4} y={r*64+4} width="64" height="56" rx="3"
                fill={`url(#fgrad)`} opacity={0.03 + ((r*8+c) % 5) * 0.012}/>
            {/each}
          {/each}
          <!-- Energy flow lines -->
          <path d="M60 400 Q150 300 300 240 Q450 180 560 100" stroke={featured.color1} stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="8 4"/>
          <path d="M0 360 Q200 280 400 200 Q500 160 600 80" stroke={featured.color2} stroke-width="1.5" fill="none" opacity="0.3" stroke-dasharray="6 8"/>
          <!-- Glow node at peak -->
          <circle cx="560" cy="100" r="6" fill={featured.color1} opacity="0.9"/>
          <circle cx="560" cy="100" r="20" fill={featured.color1} opacity="0.15"/>
          <circle cx="560" cy="100" r="40" fill={featured.color1} opacity="0.06"/>
        </svg>
        <!-- Metric overlay -->
        <div class="feat-metric-wrap">
          <span class="feat-metric-num">{featured.metric.split(' ')[0]}</span>
          <span class="feat-metric-unit">{featured.metric.split(' ').slice(1).join(' ')}</span>
        </div>
        <span class="feat-badge-featured">/ ÖNE ÇIKAN PROJE</span>
      </div>

      <!-- Right: Content -->
      <div class="feat-body">
        <div class="feat-meta">
          <span class="feat-tag">{featured.tag}</span>
          <span class="feat-year">{featured.year}</span>
          <span class="feat-city"><Icon name="Pin" size={12}/>{featured.city}</span>
        </div>
        <h2 class="feat-title">{featured.title}</h2>
        <p class="feat-desc">{featured.desc}</p>
        <ul class="feat-bullets">
          {#each featured.bullets as b}
            <li><span class="fb-dot"></span>{b}</li>
          {/each}
        </ul>
        <a href="/iletisim" class="feat-cta">
          Benzer proje için teklif al <Icon name="ArrowUR" size={14}/>
        </a>
      </div>
    </div>
  </div>
</section>
{/if}

<!-- ── FILTER + GRID ── -->
<section class="grid-section">
  <div class="container">

    <div class="filter-bar">
      {#each cats as c}
        <button
          class="filter-btn"
          class:active={filter === c.id}
          on:click={() => filter = c.id}
        >
          {c.label}
          <span class="filter-count">{count(c.id)}</span>
        </button>
      {/each}
    </div>

    {#key filter}
      <div class="proj-grid">
        {#each grid as p, i}
          <article class="pc" style="--c1:{p.color1};--c2:{p.color2}">
            <!-- Visual -->
            <div class="pc-visual">
              <svg class="pc-svg" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="pcg{i}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color={p.color1} stop-opacity="0.8"/>
                    <stop offset="1" stop-color={p.color2} stop-opacity="0.3"/>
                  </linearGradient>
                </defs>

                {#if p.cat === 'yenilenebilir'}
                  <!-- Solar grid pattern -->
                  {#each Array(5) as _, r}
                    {#each Array(9) as _, c}
                      <rect x={c*40+2} y={r*38+2} width="36" height="32" rx="2"
                        fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
                    {/each}
                  {/each}
                  <path d="M0 160 L80 100 L160 130 L240 60 L320 90 L360 40"
                    stroke={`url(#pcg${i})`} stroke-width="2.5" fill="none" stroke-linecap="round"/>
                  <circle cx="240" cy="60" r="5" fill={p.color1} opacity="0.9"/>
                  <circle cx="240" cy="60" r="16" fill={p.color1} opacity="0.15"/>

                {:else if p.cat === 'endustriyel'}
                  <!-- Circuit / power lines -->
                  {#each Array(6) as _, k}
                    <line x1={k*60} y1="0" x2={k*60} y2="200" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  {/each}
                  {#each Array(5) as _, k}
                    <line x1="0" y1={k*50} x2="360" y2={k*50} stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  {/each}
                  <path d="M20 160 L80 160 L80 80 L160 80 L160 120 L260 120 L260 50 L340 50"
                    stroke={`url(#pcg${i})`} stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  {#each [80, 160, 260] as cx}
                    <circle cx={cx} cy={cx === 80 ? 80 : cx === 160 ? 120 : 50} r="4" fill={p.color1} opacity="0.8"/>
                  {/each}

                {:else if p.cat === 'otomasyon'}
                  <!-- Data flow nodes -->
                  {#each [[60,100],[160,60],[160,140],[280,80],[280,130],[340,100]] as [cx,cy], ni}
                    <circle cx={cx} cy={cy} r="6" fill={p.color1} opacity={0.15 + ni*0.06}/>
                    <circle cx={cx} cy={cy} r="3" fill={p.color1} opacity="0.7"/>
                  {/each}
                  <path d="M60 100 L160 60 M60 100 L160 140 M160 60 L280 80 M160 140 L280 130 M280 80 L340 100 M280 130 L340 100"
                    stroke={`url(#pcg${i})`} stroke-width="1.5" fill="none" opacity="0.6"/>
                  <!-- Pulse rings -->
                  <circle cx="340" cy="100" r="14" fill="none" stroke={p.color1} stroke-width="1" opacity="0.3"/>
                  <circle cx="340" cy="100" r="24" fill="none" stroke={p.color1} stroke-width="0.5" opacity="0.15"/>

                {:else}
                  <!-- Light beams -->
                  {#each Array(8) as _, k}
                    <line x1="180" y1="0"
                      x2={180 + Math.cos((k/8)*Math.PI*2)*240}
                      y2={0 + Math.sin((k/8)*Math.PI*2)*240}
                      stroke={p.color1} stroke-width="1" opacity={0.04 + k*0.02}/>
                  {/each}
                  {#each [40,80,130] as r}
                    <circle cx="180" cy="0" r={r} fill="none" stroke={p.color1} stroke-width="1" opacity={0.1 - r*0.0005}/>
                  {/each}
                  <circle cx="180" cy="0" r="8" fill={p.color1} opacity="0.7"/>
                  <circle cx="180" cy="0" r="20" fill={p.color1} opacity="0.15"/>
                {/if}
              </svg>

              <!-- Big metric number -->
              <div class="pc-metric">
                <span class="pc-mn">{p.metric.replace(/[^0-9.,]/g, '')}</span>
                <span class="pc-mu">{p.metric.replace(/[0-9.,]/g, '').trim()}</span>
              </div>

              <span class="pc-year-badge">{p.year}</span>
            </div>

            <!-- Body -->
            <div class="pc-body">
              <div class="pc-head-row">
                <span class="pc-tag">{p.tag}</span>
                <span class="pc-city"><Icon name="Pin" size={11}/>{p.city}</span>
              </div>
              <h3 class="pc-title">{p.title}</h3>
              <p class="pc-desc">{p.desc}</p>
              <ul class="pc-bullets">
                {#each p.bullets.slice(0,3) as b}
                  <li>{b}</li>
                {/each}
              </ul>
            </div>

            <!-- Hover border accent -->
            <div class="pc-accent-line"></div>
          </article>
        {/each}
      </div>
    {/key}

  </div>
</section>

<!-- ── TESTIMONIALS ── -->
<section class="testi-section">
  <div class="container">
    <div class="testi-eyebrow">/ MÜŞTERİLERİMİZ NE DİYOR?</div>
    <div class="testi-grid">
      {#each TESTIMONIALS as t}
        <div class="testi-card">
          <div class="testi-quote-mark">"</div>
          <p class="testi-q">{t.q}</p>
          <div class="testi-author">
            <span class="testi-name">{t.n}</span>
            <span class="testi-role">{t.r}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ── CTA BAND ── -->
<section class="cta-band">
  <div class="container">
    <div class="cta-band-inner">
      <h2>Projeniz bu listede<br/>yer alsın.</h2>
      <a href="/iletisim" class="cta-band-cta"><Icon name="Bolt" size={18}/> Ücretsiz keşif başlat</a>
    </div>
  </div>
</section>

<style>
  /* ── HERO ── */
  .proj-hero { padding-bottom: 0; }
  .ph-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
  }
  .blink {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: blink 1.4s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  .hero-stats {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--line);
    margin-top: 80px;
    background: var(--bg-deep);
  }
  .hs-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 36px 0;
    flex: 1;
    align-items: center;
  }
  .hs-div { width: 1px; height: 60px; background: var(--line); flex-shrink: 0; }
  .hs-n {
    font-family: var(--font-display);
    font-size: clamp(40px, 5vw, 64px);
    line-height: 1;
    color: var(--text);
    letter-spacing: 0.02em;
  }
  .hs-plus, .hs-unit {
    font-family: var(--font-display);
    font-size: 0.45em;
    color: var(--accent);
    letter-spacing: 0.05em;
  }
  .hs-l {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* ── FEATURED ── */
  .featured-section {
    background: var(--bg-deep);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .feat-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 520px;
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    overflow: hidden;
  }

  .feat-visual {
    position: relative;
    background: linear-gradient(135deg, color-mix(in srgb, var(--c1) 12%, var(--bg-deep)), var(--bg-deep));
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 40px;
  }
  .feat-bg-grad {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 70% 30%, color-mix(in srgb, var(--c1) 18%, transparent), transparent 65%),
                radial-gradient(ellipse at 20% 80%, color-mix(in srgb, var(--c2) 12%, transparent), transparent 55%);
  }
  .feat-svg {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .feat-metric-wrap {
    position: relative;
    z-index: 2;
    line-height: 1;
  }
  .feat-metric-num {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(72px, 10vw, 120px);
    color: var(--c1);
    letter-spacing: 0.01em;
    filter: drop-shadow(0 0 40px color-mix(in srgb, var(--c1) 50%, transparent));
    line-height: 0.9;
  }
  .feat-metric-unit {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(28px, 3.5vw, 44px);
    color: var(--c1);
    opacity: 0.7;
    letter-spacing: 0.06em;
    margin-top: 4px;
  }
  .feat-badge-featured {
    position: absolute;
    top: 28px; left: 28px;
    z-index: 2;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--c1);
    border: 1px solid color-mix(in srgb, var(--c1) 40%, transparent);
    background: color-mix(in srgb, var(--c1) 8%, transparent);
    padding: 6px 12px;
    border-radius: 100px;
  }

  .feat-body {
    padding: 52px 48px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: var(--bg-card);
    border-left: 1px solid var(--line);
  }
  .feat-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .feat-tag {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid rgba(255,212,0,0.3);
    padding: 4px 10px;
    border-radius: 100px;
  }
  .feat-year {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    color: var(--text-muted);
  }
  .feat-city {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    color: var(--text-muted);
  }
  .feat-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    line-height: 1.05;
    color: var(--text);
  }
  .feat-desc { font-size: 15px; color: var(--text-dim); line-height: 1.75; }
  .feat-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }
  .feat-bullets li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--text-dim);
    padding: 10px 0;
    border-bottom: 1px solid var(--line-soft);
  }
  .feat-bullets li:last-child { border-bottom: none; }
  .fb-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }
  .feat-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
    padding: 14px 24px;
    background: var(--accent);
    color: var(--bg-deep);
    font-weight: 700;
    font-size: 14px;
    border-radius: var(--r-sm);
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    margin-top: auto;
  }
  .feat-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,212,0,0.3); }

  /* ── FILTER BAR ── */
  .grid-section {
    background: var(--bg);
    border-top: 1px solid var(--line);
    padding-bottom: 100px;
  }
  .filter-bar {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--line);
    margin-bottom: 64px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .filter-bar::-webkit-scrollbar { display: none; }
  .filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 28px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: var(--font-display-alt);
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.02em;
    transition: color 0.2s ease, border-color 0.2s ease;
    white-space: nowrap;
    margin-bottom: -1px;
  }
  .filter-btn:hover { color: var(--text); }
  .filter-btn.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }
  .filter-count {
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 100px;
    background: var(--bg-elevated);
    color: var(--text-muted);
    border: 1px solid var(--line);
    transition: background 0.2s ease, color 0.2s ease;
  }
  .filter-btn.active .filter-count {
    background: rgba(255,212,0,0.1);
    color: var(--accent);
    border-color: rgba(255,212,0,0.25);
  }

  /* ── PROJECT GRID ── */
  .proj-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    animation: gridIn 0.3s ease both;
  }
  @keyframes gridIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pc {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    overflow: hidden;
    position: relative;
    transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
    display: flex;
    flex-direction: column;
  }
  .pc:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px color-mix(in srgb, var(--c1) 30%, transparent);
    border-color: color-mix(in srgb, var(--c1) 30%, transparent);
  }
  .pc-accent-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--c1), var(--c2));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .pc:hover .pc-accent-line { transform: scaleX(1); }

  /* Card visual area */
  .pc-visual {
    position: relative;
    height: 200px;
    background: linear-gradient(135deg, color-mix(in srgb, var(--c1) 10%, var(--bg-deep)), var(--bg-deep));
    overflow: hidden;
  }
  .pc-visual::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 20%, color-mix(in srgb, var(--c1) 20%, transparent), transparent 60%);
  }
  .pc-svg {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
  }
  .pc-metric {
    position: absolute;
    bottom: 20px; left: 24px;
    z-index: 2;
    line-height: 1;
  }
  .pc-mn {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(36px, 5vw, 52px);
    color: var(--c1);
    letter-spacing: 0.01em;
    filter: drop-shadow(0 0 16px color-mix(in srgb, var(--c1) 60%, transparent));
  }
  .pc-mu {
    display: block;
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--c1);
    opacity: 0.65;
    letter-spacing: 0.08em;
    margin-top: 2px;
  }
  .pc-year-badge {
    position: absolute;
    top: 16px; right: 16px;
    z-index: 2;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    color: var(--text-muted);
    background: rgba(0,0,0,0.5);
    border: 1px solid var(--line);
    padding: 4px 9px;
    border-radius: 100px;
    backdrop-filter: blur(4px);
  }

  /* Card body */
  .pc-body {
    padding: 28px 28px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  }
  .pc-head-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pc-tag {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--c1);
    border: 1px solid color-mix(in srgb, var(--c1) 30%, transparent);
    padding: 3px 9px;
    border-radius: 100px;
    background: color-mix(in srgb, var(--c1) 8%, transparent);
  }
  .pc-city {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }
  .pc-title {
    font-family: var(--font-display-alt);
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    line-height: 1.25;
  }
  .pc-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.65;
    flex: 1;
  }
  .pc-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid var(--line-soft);
    padding-top: 16px;
    margin-top: 4px;
  }
  .pc-bullets li {
    font-size: 12.5px;
    color: var(--text-muted);
    padding: 7px 0;
    border-bottom: 1px solid var(--line-soft);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pc-bullets li:last-child { border-bottom: none; }
  .pc-bullets li::before {
    content: "";
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--c1);
    flex-shrink: 0;
    opacity: 0.7;
  }

  /* ── TESTIMONIALS ── */
  .testi-section {
    background: var(--bg-deep);
    border-top: 1px solid var(--line);
  }
  .testi-eyebrow {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 48px;
  }
  .testi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .testi-card {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    padding: 48px 44px 40px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.25s ease;
  }
  .testi-card:hover { border-color: rgba(255,212,0,0.2); }
  .testi-quote-mark {
    position: absolute;
    top: 16px; right: 28px;
    font-family: var(--font-display);
    font-size: 120px;
    line-height: 1;
    color: var(--line);
    user-select: none;
    pointer-events: none;
    opacity: 0.6;
  }
  .testi-q {
    font-size: 16px;
    color: var(--text-dim);
    line-height: 1.75;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }
  .testi-author {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
  }
  .testi-name { font-size: 15px; font-weight: 700; color: var(--text); }
  .testi-role { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); letter-spacing: 0.06em; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .proj-grid { grid-template-columns: repeat(2, 1fr); }
    .feat-card { grid-template-columns: 1fr; }
    .feat-visual { min-height: 340px; }
    .feat-badge-featured { display: block; }
  }
  @media (max-width: 860px) {
    .hero-stats { flex-wrap: wrap; }
    .hs-div { display: none; }
    .hs-item { flex: 0 0 50%; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .hs-item:nth-child(4n) { border-right: none; }
    .testi-grid { grid-template-columns: 1fr; }
    .filter-btn { padding: 14px 18px; }
  }
  @media (max-width: 640px) {
    .proj-grid { grid-template-columns: 1fr; }
    .feat-body { padding: 32px 24px; }
    .hs-item { flex: 0 0 50%; }
  }
</style>
