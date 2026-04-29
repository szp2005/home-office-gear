export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://home-office-gear.pages.dev/sitemap.xml
`);
}
