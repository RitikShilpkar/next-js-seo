import { NextResponse } from 'next/server';
import siteMetadata from '@/config/site-metadata-config.json';

interface HeadingMeta {
  title: string;
  description: string;
  canonical: string;
}

interface SiteMeta {
  pages: Record<string, HeadingMeta>;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Priority map for specific URLs
const priorityMap: Record<string, number> = {
  [`${baseUrl}`]: 1.0,
  [`${baseUrl}/about`]: 0.9,
  [`${baseUrl}/solutions`]: 0.9,
  [`${baseUrl}/services`]: 0.8,
};

const siteConfig = siteMetadata as SiteMeta;

const generateSitemap = (): string => {
  const sitemapEntries = Object.keys(siteConfig.pages)
    .map((key) => {
      const page = siteConfig.pages[key];
      const url = page.canonical.replace('{baseurl}', baseUrl);
      const priority = priorityMap[url] ?? 0.5;

      return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;
};

export async function GET() {
  const sitemapXml = generateSitemap();
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
