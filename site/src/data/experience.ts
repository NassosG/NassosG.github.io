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
    period: 'May 2026 — Present',
    location: 'College Station, TX',
    summary:
      'Strategy, governance, and reference architecture across member institutions, agencies, and System Offices.',
    highlights: [
      'Set enterprise architecture strategy, governance, and reference architecture across member institutions, state agencies, and System Offices.',
      'Develop multi-campus roadmaps that connect institutional strategy to technology investment and hold up across campuses.',
      'Lead AI and emerging-technology architecture direction with the security and compliance posture higher education requires.',
    ],
  },
  {
    title: 'Chief Technology Officer & Deputy CIO',
    org: 'The University of Texas at San Antonio',
    period: 'Aug 2019 — Apr 2026',
    location: 'San Antonio, TX',
    summary:
      'Led 150+ people across infrastructure, applications, architecture, research computing, cybersecurity, and academic technology: a $30M+ portfolio for a Carnegie R1 university serving 38,000 students. The work was to make a research university feel like one institution to the people inside it.',
    highlights: [
      'Secured a $15M Dell Technologies in-kind partnership to launch the Advanced Research Computing platform; HPC utilization rose 130% year over year, supporting UTSA’s elevation to Carnegie R1.',
      'Moved core student systems to a hyperconverged hybrid cloud and renegotiated key vendor contracts, delivering the university’s first zero-downtime registration cycles.',
      'Achieved NIST 800-53 and 800-171 compliance with Risk & Compliance, Legal, and the National Security Collaboration Center.',
      'Set enterprise architecture principles, standards, and target-state roadmaps and chaired architecture governance; compressed software delivery from 18 months to 12 hours through automation and design thinking.',
      'Established shared governance and an enterprise PMO; real-time dashboards unlocked about $5M in savings and supported about 4.5% annual enrollment growth.',
      'Launched a student-centric service portal featured by EDUCAUSE (self-service adoption from 25% to 70%) and the “Tech Café” support model (93% satisfaction); increased representation of women and minorities in IT by 30%.',
    ],
  },
  {
    title: 'Interim Chief Technology Officer & Senior Executive Director',
    org: 'University of North Texas System',
    period: '2015 — 2019',
    location: 'Denton, TX',
    summary:
      'Led the enterprise IT portfolio for a three-campus system of 44,000 students and 10,000 faculty and staff: 120 people and a ~$40M budget, including as Interim CTO through a leadership transition.',
    highlights: [
      'Adopted ITIL practices that cut P1/P2 incidents 36% and raised uptime to 99.95%, taking service management from reactive to service-oriented.',
      'Launched IT governance, an enterprise PMO, and performance analytics with real-time KPIs for executive leadership.',
      'Rationalized the application portfolio, redirecting more than $500K to new capabilities.',
    ],
  },
  {
    title: 'Exclusive Program Director, Carticel (MACI)',
    org: 'AmerisourceBergen (US Bioservices)',
    period: '2013 — 2015',
    location: 'Frisco, TX',
    summary:
      'A $40M national specialty pharmacy program for a complex biologic therapy, with sole oversight and signature authority. A reminder that good architecture isn’t only software.',
    highlights: [
      'Re-engineered the path from surgery scheduling to payer approval: insurance approvals up 25% across 100+ providers; reimbursement aging cut by nine months.',
    ],
  },
  {
    title: 'Director & Manager, Enterprise Collaboration & Computing Services',
    org: 'University of North Texas System & UNT Dallas',
    period: '2002 — 2013',
    location: 'Denton & Dallas, TX',
    summary:
      'From IT specialist and network administrator to program manager and director across collaboration, identity, and endpoint platforms for 50,000+ users.',
    highlights: [
      'Built secure network infrastructure for UNT Dallas and the Caruth Police Institute with zero security incidents.',
      'Took SharePoint to enterprise-ready in three months and negotiated a new Office 365 licensing agreement.',
    ],
  },
  {
    title: 'Software Developer',
    org: 'INFOSUPPORT SA',
    period: '2000 — 2001',
    location: 'Athens, Greece',
    summary: 'ERP, financial, retail, and HR systems development.',
  },
  {
    title: 'Radio Communications Specialist',
    org: 'Hellenic Army, Technical Corps',
    period: '1995 — 1997',
    location: 'Greece',
    summary: 'Secure radio communications and field systems.',
  },
];

export const education = [
  { degree: 'Ph.D. Candidate, Cybersecurity and AI', school: 'The University of Texas at San Antonio', year: 'Expected 2027' },
  { degree: 'MBA, Information Technology', school: 'University of North Texas', year: '2015' },
  { degree: 'BBA', school: 'University of North Texas', year: '2005' },
  { degree: 'BCIS, Information Technology', school: 'American College of Greece', year: '2001' },
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
  'MIT Sloan: Mastering Design Thinking, Executive Program (2020)',
  'FBI Citizens Academy, San Antonio Field Office (2022)',
  'Leading with Analytics',
  'ITIL Foundations',
  'Microsoft Certified Technology Specialist',
];

export const languages = ['Greek (native)', 'English (fluent)', 'German (conversational)'];
