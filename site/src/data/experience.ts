export type Role = {
  title: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export const roles: Role[] = [
  {
    title: 'Executive Director of Enterprise Architecture',
    org: 'The Texas A&M University System',
    period: '2026 — Present',
    location: 'College Station, TX',
    summary:
      'Strategy, governance, and reference architecture across member institutions, agencies, and System Offices. Roadmaps that hold up across campuses, and AI and emerging-technology direction with the compliance posture higher education actually requires.',
  },
  {
    title: 'Chief Technology Officer & Deputy CIO',
    org: 'The University of Texas at San Antonio',
    period: '2019 — 2026',
    location: 'San Antonio, TX',
    summary:
      'Led 150+ people across infrastructure, applications, architecture, research computing, cybersecurity, and academic technology — a $30M+ portfolio for a Carnegie R1 university serving 38,000 students. The work was to make a research university feel like one institution to the people inside it.',
    highlights: [
      'A $15M Dell Technologies in-kind partnership stood up the Advanced Research Computing platform, lifting HPC utilization 130% year over year and supporting UTSA’s elevation to Carnegie R1.',
      'Modernized core student systems onto a hyperconverged hybrid cloud, delivering the university’s first zero-downtime registration cycles.',
      'Achieved NIST 800-53 and 800-171 compliance in partnership with the National Security Collaboration Center on advanced threat detection.',
      'Compressed software delivery cycles from eighteen months to twelve hours through three years of disciplined automation and design thinking.',
      'Governance and portfolio rationalization unlocked roughly $5M in operational savings.',
      'A student-centric service portal, featured by EDUCAUSE, raised self-service adoption from 25% to 70%.',
    ],
  },
  {
    title: 'Interim Chief Technology Officer · Service Management & Analytics',
    org: 'University of North Texas System',
    period: '2015 — 2019',
    location: 'Denton, TX',
    summary:
      'Took IT service management from reactive to service-oriented across a three-campus system of 44,000 students. Led the enterprise IT portfolio — 120 people and a ~$40M budget — through a leadership transition.',
    highlights: [
      'ITIL adoption reduced P1 and P2 incidents by 36% and lifted uptime to 99.95%.',
      'Application portfolio rationalization redirected more than $500K into new capabilities.',
      'Built a performance analytics practice that gave executive leadership real-time KPIs.',
    ],
  },
  {
    title: 'Exclusive Program Director',
    org: 'AmerisourceBergen',
    period: '2013 — 2015',
    location: 'Frisco, TX',
    summary:
      'A $40M national specialty pharmacy program for a complex biologic therapy. Re-engineered the path from surgery scheduling to payer approval, lifting insurance approval rates 25% across 100+ providers. A reminder that good architecture isn’t only software.',
  },
  {
    title: 'Enterprise Collaboration & Computing Services',
    org: 'University of North Texas System & UNT Dallas',
    period: '2002 — 2013',
    location: 'Denton & Dallas, TX',
    summary:
      'From lab computing and network administration to leading enterprise collaboration. Built secure network infrastructure for UNT Dallas and the Caruth Police Institute, and took the SharePoint program to enterprise-ready in three months.',
  },
  {
    title: 'Software Developer',
    org: 'INFOSUPPORT SA',
    period: '2000 — 2001',
    location: 'Athens, Greece',
    summary: 'ERP, financial, retail and HR systems development.',
  },
  {
    title: 'Radio Communications',
    org: 'Hellenic Army, Technical Corps',
    period: '1995 — 1997',
    location: 'Greece',
    summary: 'Secure radio communications and field systems.',
  },
];

export const education = [
  { degree: 'Ph.D. Candidate, Cybersecurity and AI', school: 'The University of Texas at San Antonio', year: 'In progress' },
  { degree: 'MBA, Information Technology', school: 'University of North Texas', year: '2015' },
  { degree: 'BBA', school: 'University of North Texas', year: '2005' },
];

export const recognition = [
  'CIO 100 Award (2023)',
  'FutureEdge 50 Award (2021)',
  'Excellence Award, University of North Texas System',
];

export const boards = [
  'Dell Technologies Higher Education CIO Advisory Board',
  'Juniper Networks Higher Education CIO Advisory Board',
  'ServiceNow Higher Education Advisory Board',
  'Lonestar Education and Research Network (LEARN), advisory role',
];

export const certifications = [
  'MIT Sloan: Mastering Design Thinking (2020)',
  'FBI Citizens Academy, San Antonio Field Office (2022)',
  'Leading with Analytics',
  'ITIL Foundations',
  'Microsoft Certified Technology Specialist',
];

export const languages = ['Greek (native)', 'English (fluent)', 'German (conversational)'];
