import type { Lang } from '../i18n';

// Identity and links: the same in every language.
export const site = {
  url: 'https://limur.ai',
  email: 'NassosG@limur.ai',
  links: {
    linkedin: 'https://www.linkedin.com/in/nassosg',
    scholar: 'https://scholar.google.com/citations?user=AH-9jOwAAAAJ',
    orcid: 'https://orcid.org/0000-0002-6747-5938',
    github: 'https://github.com/NassosG',
  },
};

// Everything that changes with the language.
export const profile: Record<
  Lang,
  { name: string; fullName: string; role: string; org: string; location: string; description: string }
> = {
  en: {
    name: 'Nassos Galiopoulos',
    fullName: 'Athanasios (Nassos) Galiopoulos',
    role: 'Executive Director of Enterprise Architecture',
    org: 'The Texas A&M University System',
    location: 'Texas',
    description:
      'Nassos Galiopoulos is Executive Director of Enterprise Architecture at The Texas A&M University System and a Ph.D. candidate in Cybersecurity and AI at UTSA.',
  },
  el: {
    name: 'Νάσος Γαλιόπουλος',
    fullName: 'Αθανάσιος (Νάσος) Γαλιόπουλος',
    role: 'Εκτελεστικός Διευθυντής Αρχιτεκτονικής Επιχείρησης',
    org: 'The Texas A&M University System',
    location: 'Τέξας',
    description:
      'Ο Νάσος Γαλιόπουλος είναι Εκτελεστικός Διευθυντής Αρχιτεκτονικής Επιχείρησης στο Texas A&M University System και υποψήφιος διδάκτορας Κυβερνοασφάλειας και Τεχνητής Νοημοσύνης στο UTSA.',
  },
  de: {
    name: 'Nassos Galiopoulos',
    fullName: 'Athanasios (Nassos) Galiopoulos',
    role: 'Executive Director of Enterprise Architecture',
    org: 'The Texas A&M University System',
    location: 'Texas',
    description:
      'Nassos Galiopoulos ist Executive Director of Enterprise Architecture im Texas A&M University System und Doktorand in Cybersicherheit und KI an der UTSA.',
  },
};

export const navKeys = ['research', 'experience', 'thoughts', 'speaking', 'contact'] as const;
