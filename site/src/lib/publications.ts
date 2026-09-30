import { getCollection } from 'astro:content';

export async function getPublications() {
  const all = await getCollection('publications', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.year - a.data.year);
}
