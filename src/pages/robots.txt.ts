import type { APIRoute } from 'astro';
export const GET: APIRoute = () =>
  new Response(
    'User-agent: *
Allow: /

Sitemap: https://home-office-gear.pages.dev/sitemap.xml
',
    { headers: { 'Content-Type': 'text/plain' } }
  );
