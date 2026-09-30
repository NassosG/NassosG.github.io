import { getCollection, type CollectionEntry } from 'astro:content';
import { langs, defaultLang, type Lang } from '../i18n';

// Posts live in src/content/thoughts/ (English) and optionally in el/ or de/ (translations,
// same file name). A post's slug is its file name without the language folder.
export type Thought = { entry: CollectionEntry<'thoughts'>; slug: string; lang: Lang };

function split(id: string): { lang: Lang; slug: string } {
  const [first, ...rest] = id.split('/');
  if (rest.length && (langs as readonly string[]).includes(first)) return { lang: first as Lang, slug: rest.join('/') };
  return { lang: defaultLang, slug: id };
}

async function all(): Promise<Thought[]> {
  const entries = await getCollection('thoughts', ({ data }) => !data.draft);
  return entries.map((entry) => ({ entry, ...split(entry.id) }));
}

const byDate = (a: Thought, b: Thought) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf();

/** English posts. */
export async function getThoughts() {
  return (await all()).filter((t) => t.lang === defaultLang).sort(byDate).map((t) => t.entry);
}

/** Every post for a language's listing: the translation where one exists, otherwise the English post. */
export async function getThoughtsFor(lang: Lang): Promise<Thought[]> {
  const posts = await all();
  return posts
    .filter((t) => t.lang === defaultLang)
    .map((en) => posts.find((t) => t.lang === lang && t.slug === en.slug) ?? en)
    .sort(byDate);
}

/** Translated posts (not English), for the /el/ and /de/ post pages. */
export async function getTranslations(): Promise<Thought[]> {
  return (await all()).filter((t) => t.lang !== defaultLang);
}

/** Languages a given post exists in. */
export async function languagesOf(slug: string): Promise<Lang[]> {
  return (await all()).filter((t) => t.slug === slug).map((t) => t.lang);
}

export const postPath = (t: Thought) => (t.lang === defaultLang ? `/thoughts/${t.slug}/` : `/${t.lang}/thoughts/${t.slug}/`);

export { formatDate } from '../i18n';
