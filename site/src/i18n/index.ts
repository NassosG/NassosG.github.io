// Languages, URL helpers, and interface strings.
// English lives at the root; Greek at /el/, German at /de/.
export const langs = ['en', 'el', 'de'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const langMeta: Record<Lang, { label: string; name: string; locale: string; og: string }> = {
  en: { label: 'EN', name: 'English', locale: 'en-US', og: 'en_US' },
  el: { label: 'ΕΛ', name: 'Ελληνικά', locale: 'el-GR', og: 'el_GR' },
  de: { label: 'DE', name: 'Deutsch', locale: 'de-DE', og: 'de_DE' },
};

// Pages that exist in every language. Papers and posts are English only.
export const localizedRoutes = ['/', '/research/', '/experience/', '/thoughts/', '/speaking/', '/contact/', '/ithaka/'];

export function getLang(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (langs as readonly string[]).includes(seg) && seg !== defaultLang ? (seg as Lang) : defaultLang;
}

/** Path without the language prefix, e.g. /el/research/ -> /research/ */
export function basePath(url: URL): string {
  const lang = getLang(url);
  const p = url.pathname;
  return lang === defaultLang ? p : p.slice(lang.length + 1) || '/';
}

/** Prefix a root-relative path for a language: ('/research/', 'el') -> '/el/research/' */
export function localize(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** Where the language switcher should send someone on this page. */
export function switchTo(url: URL, lang: Lang): string {
  const base = basePath(url);
  if (localizedRoutes.includes(base)) return localize(base, lang);
  // English-only pages (a paper, a post): go to that section's page in the other language.
  const section = localizedRoutes.find((r) => r !== '/' && base.startsWith(r));
  return localize(section ?? '/', lang);
}

const ui = {
  en: {
    nav: { research: 'Research', experience: 'Experience', thoughts: 'Thoughts', speaking: 'Speaking', contact: 'Contact' },
    langSwitch: 'Language',
    skip: 'Skip to content',
    email: 'Email',
    limurTitle: 'Less is more',
    homeTitle: 'Enterprise Architecture, AI & Cybersecurity',
    englishOnly: '',
  },
  el: {
    nav: { research: 'Έρευνα', experience: 'Εμπειρία', thoughts: 'Σκέψεις', speaking: 'Ομιλίες', contact: 'Επικοινωνία' },
    langSwitch: 'Γλώσσα',
    skip: 'Μετάβαση στο περιεχόμενο',
    email: 'Email',
    limurTitle: 'Το λιγότερο είναι περισσότερο',
    homeTitle: 'Αρχιτεκτονική Επιχείρησης, ΤΝ και Κυβερνοασφάλεια',
    englishOnly: '(στα αγγλικά)',
  },
  de: {
    nav: { research: 'Forschung', experience: 'Werdegang', thoughts: 'Gedanken', speaking: 'Vorträge', contact: 'Kontakt' },
    langSwitch: 'Sprache',
    skip: 'Zum Inhalt springen',
    email: 'E-Mail',
    limurTitle: 'Weniger ist mehr',
    homeTitle: 'Unternehmensarchitektur, KI & Cybersicherheit',
    englishOnly: '(auf Englisch)',
  },
} as const;

export const t = (lang: Lang) => ui[lang];

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(langMeta[lang].locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
