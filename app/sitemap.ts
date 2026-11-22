import type { MetadataRoute } from 'next';

const siteUrl = 'https://adityajadhav19-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/work',
    '/experience',
    '/about',
    '/technical-highlights',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/work' ? 0.9 : 0.7,
  }));
}
