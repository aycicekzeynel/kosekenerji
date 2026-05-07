function GET() {
  const SITE = "https://www.kosekenerji.com";
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/hizmetler", priority: "0.9", changefreq: "monthly" },
    { url: "/projeler", priority: "0.8", changefreq: "monthly" },
    { url: "/kurumsal", priority: "0.7", changefreq: "yearly" },
    { url: "/hakkimizda", priority: "0.7", changefreq: "yearly" },
    { url: "/iletisim", priority: "0.8", changefreq: "yearly" }
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map((p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
export {
  GET
};
