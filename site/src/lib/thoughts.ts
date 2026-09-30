import { getCollection } from 'astro:content';

export async function getThoughts() {
  const all = await getCollection('thoughts', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export { formatDate } from '../i18n';
