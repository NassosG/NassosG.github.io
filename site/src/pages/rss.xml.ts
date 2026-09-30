import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '../data/site';
import { getThoughts } from '../lib/thoughts';

export async function GET(context: APIContext) {
  const posts = await getThoughts();
  return rss({
    title: `${profile.en.name} — Thoughts`,
    description: 'Short essays on architecture, AI, and judgment.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/thoughts/${p.id}/`,
    })),
  });
}
