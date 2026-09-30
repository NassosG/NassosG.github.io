// Single source of truth for identity and navigation.
export const site = {
  name: 'Nassos Galiopoulos',
  fullName: 'Athanasios (Nassos) Galiopoulos',
  role: 'Executive Director of Enterprise Architecture',
  org: 'The Texas A&M University System',
  tagline: 'Enterprise architect, technology executive and AI & cybersecurity researcher.',
  motto: 'Socratic questions, Spartan discipline, Olympic delivery.',
  description:
    'Nassos Galiopoulos is Executive Director of Enterprise Architecture at The Texas A&M University System and a Ph.D. candidate in Cybersecurity and AI at UTSA.',
  url: 'https://limur.ai',
  location: 'Texas',
  email: 'NassosG@outlook.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/nassosg',
    scholar: 'https://scholar.google.com/citations?user=AH-9jOwAAAAJ',
    orcid: 'https://orcid.org/0000-0002-6747-5938',
    github: 'https://github.com/NassosG',
  },
};

export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/experience/', label: 'Experience' },
  { href: '/thoughts/', label: 'Thoughts' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/contact/', label: 'Contact' },
];

// The questions that drive the work, shown on the home and research pages.
export const questions = [
  'How do we architect a secure enterprise across business, data, applications, AI, and infrastructure while allowing it to evolve?',
  'How do systems thinking, evidence, bounded autonomy, and human judgment fit together in decisions we can explain and defend?',
  'What should an AI agent be allowed to do, how do we verify its actions, and how do we prevent fragmented systems and uncontrolled agent growth?',
];
