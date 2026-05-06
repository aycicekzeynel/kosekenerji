<script>
  import Icon from '$lib/components/Icon.svelte';
  import { SERVICES } from '$lib/data.js';
</script>

<svelte:head><title>Hizmetlerimiz — Kösek Enerji</title></svelte:head>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <div class="breadcrumb">Anasayfa <span>›</span> Hizmetler</div>
    <h1 class="display-xl">UÇTAN UCA<br/><span style="color: var(--accent)">ELEKTRİK</span> MÜHENDİSLİĞİ.</h1>
    <p class="lead">Tasarımdan uygulamaya, devreye almadan bakıma; tüm enerji yatırımınızı tek bir mühendislik ortağıyla yönetin.</p>
  </div>
</section>

<section style="padding-top: 20px">
  <div class="container">
    {#each SERVICES as s, i}
      <div class="service-detail">
        <div class="service-detail-left">
          <div class="service-detail-icon"><Icon name={s.icon} size={36}/></div>
          <div>
            <div class="num">/ {String(i + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}</div>
            <h3>{s.title}</h3>
          </div>
        </div>
        <div class="service-detail-right">
          <p>{s.long}</p>
          <ul>
            {#each s.bullets as b}<li>{b}</li>{/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="cta-band" style="margin-top: 40px">
  <div class="container">
    <div class="cta-band-inner">
      <h2>Hangi hizmete<br/>ihtiyacınız var?</h2>
      <a href="/iletisim" class="cta-band-cta"><Icon name="Phone" size={18}/> Mühendisle görüş</a>
    </div>
  </div>
</section>
