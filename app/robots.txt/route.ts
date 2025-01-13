import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function GET() {
  const robotsTxt = `
User-agent: *
Disallow:
Sitemap: ${baseUrl}/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
