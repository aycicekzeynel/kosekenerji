export function GET() {
  const SITE  = 'https://www.kösekenerji.com';
  const today = new Date().toISOString().split('T')[0];

  const paths = [
    { url: '/',           priority: '1.0', changefreq: 'weekly'  },
    { url: '/hizmetler',  priority: '0.9', changefreq: 'monthly' },
    { url: '/projeler',   priority: '0.8', changefreq: 'monthly' },
    { url: '/kurumsal',   priority: '0.7', changefreq: 'yearly'  },
    { url: '/hakkimizda', priority: '0.7', changefreq: 'yearly'  },
    { url: '/iletisim',   priority: '0.8', changefreq: 'yearly'  },
  ];

  const langs  = ['', '/en', '/ru'];
  const pages  = langs.flatMap(lang =>
    paths.map(p => ({
      loc:        `${SITE}${lang}${p.url === '/' ? (lang ? '' : '/') : p.url}`,
      priority:   lang ? String(Math.max(0.5, parseFloat(p.priority) - 0.1)) : p.priority,
      changefreq: p.changefreq,
    }))
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
