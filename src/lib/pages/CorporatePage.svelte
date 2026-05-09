<script>
  import Icon from '$lib/components/Icon.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { t } from '$lib/i18n/index.js';

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kösek Enerji Mühendislik ve Elektrik Hizmetleri Sanayi Ticaret Limited Şirketi",
    "alternateName": "Kösek Enerji",
    "url": "https://www.kosekenerji.com",
    "foundingDate": "2001",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 48 },
    "taxID": "5881221574",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45 İç Kapı No:B",
      "addressLocality": "Muratpaşa",
      "addressRegion": "Antalya",
      "postalCode": "07040",
      "addressCountry": "TR"
    },
    "hasCredential": ["EMO Serbest Müşavirlik", "TEDAŞ Onaylı Müteahhit", "ISO 9001:2015", "ISO 14001", "ISO 45001"]
  };
</script>

<SEO
  title={$t('pages.corporate.seo.title')}
  description={$t('pages.corporate.seo.description')}
  keywords={$t('pages.corporate.seo.keywords')}
  canonical="/kurumsal"
  schema={orgSchema}
/>

<section class="page-hero">
  <div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div>
  <div class="container" style="position: relative; z-index: 2">
    <h1 class="display-xl">{@html $t('pages.corporate.heroTitle')}</h1>
    <p class="lead">{$t('pages.corporate.heroLead')}</p>
  </div>
</section>

<section style="padding-top: 0">
  <div class="container">
    <div class="section-head">
      <div>
        <div class="eyebrow">{$t('pages.corporate.valuesEyebrow')}</div>
        <h2 class="display-md">{$t('pages.corporate.valuesTitle')}</h2>
      </div>
    </div>
    <div class="kv-grid">
      {#each $t('data.values') as v}
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
        <div class="eyebrow">{$t('pages.corporate.certsEyebrow')}</div>
        <h2 class="display-md">{$t('pages.corporate.certsTitle')}</h2>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px">
      {#each $t('pages.corporate.certs') as c}
        <div style="padding: 22px 24px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg-card); display: flex; align-items: center; gap: 14px">
          <span style="color: var(--accent); flex-shrink: 0; display: flex"><Icon name="Check" size={18}/></span>
          <span style="font-size: 14px; font-weight: 500">{c}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
