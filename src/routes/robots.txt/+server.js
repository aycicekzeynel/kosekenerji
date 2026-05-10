export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.kösekenerji.com/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
