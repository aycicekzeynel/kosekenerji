<script>
  import { locale } from '$lib/i18n/index.js';

  export let title;
  export let description;
  export let keywords = '';
  export let canonical = '';
  export let schema = null;

  const SITE   = 'https://www.kösekenerji.com';
  const OG_IMG = `${SITE}/og-image.svg`;

  const OG_LOCALE = { tr: 'tr_TR', en: 'en_US', ru: 'ru_RU' };

  $: langPrefix   = $locale === 'tr' ? '' : `/${$locale}`;
  $: canonicalUrl = canonical === '/'
    ? `${SITE}${langPrefix}`
    : `${SITE}${langPrefix}${canonical}`;

  $: trUrl = canonical === '/' ? SITE : `${SITE}${canonical}`;
  $: enUrl = canonical === '/' ? `${SITE}/en` : `${SITE}/en${canonical}`;
  $: ruUrl = canonical === '/' ? `${SITE}/ru` : `${SITE}/ru${canonical}`;

  $: ldJson = schema
    ? `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`
    : '';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description"        content={description}/>
  {#if keywords}
  <meta name="keywords"           content={keywords}/>
  {/if}
  <meta name="robots"             content="index, follow"/>
  <meta name="author"             content="Kösek Enerji Mühendislik"/>
  <meta name="geo.region"         content="TR-07"/>
  <meta name="geo.placename"      content="Antalya"/>
  <meta name="geo.position"       content="36.8969;30.7133"/>
  <meta name="ICBM"               content="36.8969, 30.7133"/>

  <link rel="canonical"           href={canonicalUrl}/>
  <link rel="alternate" hreflang="tr"        href={trUrl}/>
  <link rel="alternate" hreflang="en"        href={enUrl}/>
  <link rel="alternate" hreflang="ru"        href={ruUrl}/>
  <link rel="alternate" hreflang="x-default" href={trUrl}/>

  <!-- Open Graph -->
  <meta property="og:site_name"   content="Kösek Enerji"/>
  <meta property="og:title"       content={title}/>
  <meta property="og:description" content={description}/>
  <meta property="og:type"        content="website"/>
  <meta property="og:url"         content={canonicalUrl}/>
  <meta property="og:image"       content={OG_IMG}/>
  <meta property="og:locale"      content={OG_LOCALE[$locale] ?? 'tr_TR'}/>

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image"/>
  <meta name="twitter:title"       content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image"       content={OG_IMG}/>

  {#if schema}
    {@html ldJson}
  {/if}
</svelte:head>
