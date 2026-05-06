<script>
  import Icon from '$lib/components/Icon.svelte';
  import { VALUES } from '$lib/data.js';

  const certs = ['ISO 9001:2015 Kalite','ISO 14001 Çevre','ISO 45001 İSG','TEDAŞ Onaylı Müteahhit','EMO SMM Yetki','CE / TSE Pano','OHSAS 18001 İSG','Yapı Müteahhidi'];
</script>

<svelte:head><title>Kurumsal — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <div class="breadcrumb">Anasayfa <span>›</span> Kurumsal</div>
    <h1 class="display-xl">MÜHENDİSLİĞİN<br/><span style="color: var(--accent)">GÜCÜNE</span> İNANIYORUZ.</h1>
    <p class="lead">2001'den bu yana endüstriyel elektrik tesisat ve enerji çözümlerinde Türkiye sanayisinin güvenilir ortağıyız. Anadolu'da kurduk, Anadolu'nun büyümesiyle büyüdük.</p>
  </div>
</section>

<section style="padding-top: 0">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">/ DEĞERLER</div>
        <h2 class="display-md">Bizi biz yapan ilkeler.</h2>
      </div>
    </div>
    <div class="kv-grid">
      {#each VALUES as v}
        <div class="kv-card">
          <div class="kv-num">{v.n}</div>
          <span class="kv-icon"><Icon name={v.i} size={48}/></span>
          <h3>{v.t}</h3>
          <p>{v.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section style="background: var(--bg-deep); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">/ SERTİFİKALAR</div>
        <h2 class="display-md">Sektörel onay ve standartlar.</h2>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px">
      {#each certs as c}
        <div style="padding: 22px 24px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg-card); display: flex; align-items: center; gap: 14px">
          <span style="color: var(--accent); flex-shrink: 0; display: flex"><Icon name="Check" size={18}/></span>
          <span style="font-size: 14px; font-weight: 500">{c}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
