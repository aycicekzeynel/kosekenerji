<script>
  import '$lib/styles/app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { locale } from '$lib/i18n/index.js';
  import { page } from '$app/stores';

  locale.set('tr'); // SSR default

  // URL değiştiğinde locale'i reaktif olarak güncelle
  $: {
    const lang = $page.url.pathname.match(/^\/(en|ru)/)?.[1];
    locale.set(lang ?? 'tr');
  }

  $: if (typeof document !== 'undefined') document.documentElement.lang = $locale;

  const SITE = 'https://www.kösekenerji.com';
  const SITE_ASCII = 'https://www.xn--ksekenerji-ecb.com';
  $: basePath = $page.url.pathname.replace(/^\/(en|ru)/, '') || '/';
  $: canonicalPath = $page.url.pathname;
  $: seo = $page.data?.seo;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "ElectricalContractor"],
    "name": "Kösek Enerji Mühendislik ve Elektrik Hizmetleri Sanayi Ticaret Limited Şirketi",
    "alternateName": "Kösek Enerji",
    "url": "https://www.kösekenerji.com",
    "logo": "https://www.kösekenerji.com/favicon.svg",
    "image": "https://www.kösekenerji.com/og-image.png",
    "description": "Antalya merkezli endüstriyel elektrik tesisat, yüksek gerilim tesisleri, pano imalatı, GES ve SCADA otomasyon firması. EMO ve TEDAŞ onaylı, 24 yıllık deneyim.",
    "telephone": "+905425338047",
    "email": "info@kösekenerji.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45 İç Kapı No:B",
      "addressLocality": "Muratpaşa",
      "addressRegion": "Antalya",
      "postalCode": "07040",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8969,
      "longitude": 30.7133
    },
    "areaServed": [
      { "@type": "City", "name": "Antalya" },
      { "@type": "City", "name": "Alanya" },
      { "@type": "City", "name": "Manavgat" },
      { "@type": "City", "name": "Serik" },
      { "@type": "City", "name": "Kemer" },
      { "@type": "City", "name": "Kaş" },
      { "@type": "State", "name": "Antalya ili" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Havale, EFT, Çek",
    "hasCredential": ["EMO Serbest Müşavirlik", "TEDAŞ Onaylı Müteahhit", "ISO 9001:2015"],
    "sameAs": [],
    "foundingDate": "2001",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 48 }
  };
</script>

<svelte:head>
  <meta name="google-site-verification" content="sagAdE_lnZ7olbndNM-QVHn_c5rQ3scUtA3TnlkXdL8" />
  <title>{seo?.title ?? 'Kösek Enerji | Antalya Endüstriyel Elektrik & Enerji Mühendisliği'}</title>
  <meta name="description" content={seo?.description ?? 'Antalya\'da 24 yıllık deneyimle yüksek gerilim, GES, pano imalatı ve SCADA otomasyon hizmetleri.'} />
  {#if seo?.keywords}<meta name="keywords" content={seo.keywords} />{/if}

  <!-- Canonical -->
  <link rel="canonical" href="{SITE}{canonicalPath === '/' ? '' : canonicalPath}" />

  <!-- hreflang -->
  <link rel="alternate" hreflang="tr" href="{SITE}{basePath === '/' ? '/' : basePath}" />
  <link rel="alternate" hreflang="en" href="{SITE}/en{basePath === '/' ? '' : basePath}" />
  <link rel="alternate" hreflang="ru" href="{SITE}/ru{basePath === '/' ? '' : basePath}" />
  <link rel="alternate" hreflang="x-default" href="{SITE}{basePath === '/' ? '/' : basePath}" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Kösek Enerji" />
  <meta property="og:title" content={seo?.title ?? 'Kösek Enerji'} />
  <meta property="og:description" content={seo?.description ?? ''} />
  <meta property="og:url" content="{SITE}{canonicalPath}" />
  <meta property="og:image" content="{SITE_ASCII}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo?.title ?? 'Kösek Enerji'} />
  <meta name="twitter:description" content={seo?.description ?? ''} />
  <meta name="twitter:image" content="{SITE_ASCII}/og-image.png" />

  {@html `<script type="application/ld+json">${JSON.stringify(localBusiness)}<\/script>`}
</svelte:head>

<Nav/>
<main>
  <slot/>
</main>
<Footer/>

<a
  href="https://wa.me/905425338047"
  target="_blank"
  rel="noopener noreferrer"
  class="wa-fab"
  aria-label="WhatsApp ile iletişime geç"
>
  <span class="wa-fab-ring"></span>
  <Icon name="WhatsApp" size={26}/>
</a>

<style>
  .wa-fab {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 999;
    display: flex;
    align-items: center;
    background: #25D366;
    color: #fff;
    border-radius: 100px;
    padding: 14px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(37,211,102,0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;
  }
  .wa-fab:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(37,211,102,0.55);
  }
  .wa-fab-ring {
    position: absolute;
    inset: 0;
    border-radius: 100px;
    animation: waRing 2.4s ease-out infinite;
    pointer-events: none;
  }
  @keyframes waRing {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  @media (max-width: 540px) {
    .wa-fab { bottom: 20px; right: 20px; border-radius: 50%; }
  }
</style>
