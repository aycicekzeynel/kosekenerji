<script>
  import Icon from '$lib/components/Icon.svelte';
  import { TIMELINE } from '$lib/data.js';
</script>

<svelte:head><title>Hakkımızda — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <div class="breadcrumb">Anasayfa <span>›</span> Hakkımızda</div>
    <h1 class="display-xl">BİR <span style="color: var(--accent)">ELEKTRİKÇİNİN</span><br/>ÇEYREK ASRI.</h1>
    <p class="lead">2001 yılında Ankara'da küçük bir atölyede başlayan hikayemiz, bugün 48 mühendis ve teknisyenle Anadolu'nun dört bir yanına uzanıyor.</p>
  </div>
</section>

<section style="padding-top: 0">
  <div class="container about-split">
    <div>
      <div class="eyebrow" style="margin-bottom: 18px">/ TARİHÇE</div>
      <h2 class="display-md">Yıllar içinde<br/>biriken tecrübe.</h2>
    </div>
    <div class="timeline">
      {#each TIMELINE as e}
        <div class="timeline-item">
          <div class="timeline-year">{e.y}</div>
          <h4>{e.t}</h4>
          <p>{e.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section style="background: var(--bg-deep); border-top: 1px solid var(--line)">
  <div class="container">
    <div class="section-head">
      <div class="eyebrow">/ MİSYON & VİZYON</div>
    </div>
    <div class="mv-grid">
      <div class="mv-card">
        <span style="color: var(--accent); display: flex; margin-bottom: 24px"><Icon name="Bolt" size={40}/></span>
        <h3 class="display-md" style="margin-bottom: 16px">Misyonumuz</h3>
        <p>Türk sanayisinin enerjisini güvenle, kesintisiz ve sürdürülebilir şekilde taşımak. Her projede mühendislik kalitesini, müşteri memnuniyetini ve iş güvenliğini en üst seviyede tutmak.</p>
      </div>
      <div class="mv-card mv-accent">
        <span style="color: var(--accent); display: flex; margin-bottom: 24px"><Icon name="Sun" size={40}/></span>
        <h3 class="display-md" style="margin-bottom: 16px">Vizyonumuz</h3>
        <p>2030'a kadar Türkiye'nin yenilenebilir enerji ve endüstriyel otomasyon alanında ilk akla gelen mühendislik markası olmak. 1 GW kurulu GES gücüne ulaşmak.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .about-split { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; }
  .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .mv-card { padding: 48px 40px; border: 1px solid var(--line); border-radius: 14px; background: var(--bg-card); }
  .mv-card.mv-accent { border-color: var(--accent); background: linear-gradient(135deg, rgba(255,212,0,0.08), transparent); }
  .mv-card p { color: var(--text-dim); font-size: 16px; line-height: 1.6; }
  @media (max-width: 800px) { .about-split, .mv-grid { grid-template-columns: 1fr; gap: 40px; } }
</style>
