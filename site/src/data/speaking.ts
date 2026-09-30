export const speakerBio =
  'Nassos Galiopoulos is Executive Director of Enterprise Architecture at The Texas A&M University System, where his work spans strategy, governance, and reference architecture across member institutions, agencies, and System Offices. He previously served as Chief Technology Officer and Deputy CIO at the University of Texas at San Antonio. A UNT alumnus, he earned his BBA in 2005 and MBA in Information Technology in 2015. His experience includes enterprise architecture, cybersecurity, research computing, and technology services. He is pursuing a doctorate in Cybersecurity and AI at UTSA.';

export const topics = [
  'Enterprise architecture that evolves',
  'Governing AI agents: bounded autonomy and verification',
  'Cybersecurity and LLM-driven threats',
  'Research computing and cyberinfrastructure',
  'Systems thinking and defensible decisions',
];

export type Appearance = { title: string; venue: string; year?: string; link?: string };

// TODO: add years and links.
export const appearances: Appearance[] = [
  { title: 'Enterprise service transformation and student-centric IT', venue: 'ServiceNow Knowledge' },
  { title: 'High-performance computing, cybersecurity, and data governance', venue: 'UT System Technology Summit' },
  { title: 'User-centric service portals and HPC-based transformation', venue: 'EDUCAUSE Review' },
];
