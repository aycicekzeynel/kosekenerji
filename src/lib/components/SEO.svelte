<script>
  /** @type {string} */  export let title;
  /** @type {string} */  export let description;
  /** @type {string} */  export let keywords = '';
  /** @type {string} */  export let canonical = ''; // path only, e.g. '/hizmetler'
  /** @type {object|null} */ export let schema = null;

  const SITE   = 'https://www.kosekenerji.com';
  const OG_IMG = `${SITE}/og-image.jpg`;

  $: canonicalUrl = canonical ? `${SITE}${canonical}` : SITE;
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

  <link rel="canonical" href={canonicalUrl}/>

  <!-- Open Graph -->
  <meta property="og:site_name"   content="Kösek Enerji"/>
  <meta property="og:title"       content={title}/>
  <meta property="og:description" content={description}/>
  <meta property="og:type"        content="website"/>
  <meta property="og:url"         content={canonicalUrl}/>
  <meta property="og:image"       content={OG_IMG}/>
  <meta property="og:locale"      content="tr_TR"/>

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image"/>
  <meta name="twitter:title"       content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image"       content={OG_IMG}/>

  <!-- JSON-LD -->
  {#if schema}
    {@html ldJson}
  {/if}
</svelte:head>
