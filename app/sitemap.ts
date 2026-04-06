import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roshanlalsweets.vercel.app';
  const pages = ['', '/sweets', '/namkeen', '/bakery', '/bhaji-box', '/restaurant', '/gallery', '/about', '/contact'];

  return pages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path === '/sweets' ? 0.9 : 0.7,
  }));
}
