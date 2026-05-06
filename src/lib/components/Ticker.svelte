<script>
  const items = [
    { v: '24+ Yıl Tecrübe', a: true },
    { v: '340+ Tamamlanan Proje' },
    { v: '185 MW Kurulu GES Gücü', a: true },
    { v: 'EMO Sertifikalı' },
    { v: 'TEDAŞ Onaylı', a: true },
    { v: 'ISO 9001:2015' },
    { v: '7/24 Acil Servis', a: true },
    { v: 'IEC 61439 Pano' }
  ];
  const doubled = [...items, ...items];
</script>

<div class="hero-ticker">
  <div class="ticker-track">
    {#each doubled as t}
      <div class="ticker-item">
        <span class={t.a ? 'acc' : ''}>⚡</span>
        <span>{t.v}</span>
        <span class="sep"></span>
      </div>
    {/each}
  </div>
</div>
