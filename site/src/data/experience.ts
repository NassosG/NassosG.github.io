export type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights?: string[];
};

export const roles: Role[] = [
  {
    title: 'Chief Technology Officer / Deputy CIO',
    org: 'University of Texas at San Antonio',
    period: '2019 — Present',
    summary:
      'Lead 150+ professionals and a $30M budget across research computing, cybersecurity, academic technology and enterprise infrastructure.',
    highlights: [
      'Secured a $15M in-kind Dell Technologies contribution to launch the Advanced Cyber Infrastructure Research Platform, supporting R1 status.',
      'Achieved NIST 800-53 and 800-171 compliance and strengthened proactive risk mitigation.',
      'Modernized core student systems and cloud infrastructure: zero-downtime registration for 34,000+ students.',
      'Established shared governance and an enterprise PMO; project dashboards unlocked $5M in savings.',
      'Increased representation of women and minorities in IT by 30%; created the "Tech Café" support model (93% satisfaction).',
    ],
  },
  {
    title: 'Interim Chief Technology Officer / Senior Executive Director',
    org: 'University of North Texas System',
    period: '2015 — 2019',
    summary:
      'Led enterprise IT for three campuses serving 44,000 students and 10,000 faculty and staff.',
    highlights: [
      'Launched IT governance, an enterprise PMO and analytics for real-time KPIs.',
      'Reduced P1/P2 incidents by 36% and raised uptime to 99.95%.',
    ],
  },
  {
    title: 'Exclusive Program Director, Carticel (MACI)',
    org: 'AmerisourceBergen (US Bio Services)',
    period: '2013 — 2015',
    summary:
      'Led a $40M national specialty pharmacy program, improving patient access by 350%.',
  },
  {
    title: 'Director, Enterprise Collaboration & Computing Services',
    org: 'University of North Texas / UNT Dallas',
    period: '2002 — 2013',
    summary:
      'Shaped technology strategy for three campuses and unified collaboration services.',
  },
];

export const education = [
  { degree: 'Ph.D. Candidate, Cybersecurity & AI', school: 'University of Texas at San Antonio', year: 'In progress' },
  { degree: 'MBA, Information Technology', school: 'University of North Texas', year: '2015' },
  { degree: 'BBA', school: 'University of North Texas', year: '2005' },
];

export const recognition = [
  'CIO 100 Award (2023)',
  'FutureEdge 50 Award (2021)',
  'Dell Higher Education CIO Board',
  'Juniper Higher Education CIO Advisory Board',
  'ServiceNow Higher Education Advisory Board',
];
