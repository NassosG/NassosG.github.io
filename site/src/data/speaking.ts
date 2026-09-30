import type { Lang } from '../i18n';

export type Appearance = { title: string; venue: string; year?: string; link?: string };

export const speaking: Record<Lang, { bio: string; topics: string[]; appearances: Appearance[] }> = {
  en: {
    bio: 'Nassos Galiopoulos is Executive Director of Enterprise Architecture at The Texas A&M University System, where his work spans strategy, governance, and reference architecture across member institutions, agencies, and System Offices. He previously served as Chief Technology Officer and Deputy CIO at the University of Texas at San Antonio. A UNT alumnus, he earned his BBA in 2005 and MBA in Information Technology in 2015. His experience includes enterprise architecture, cybersecurity, research computing, and technology services. He is pursuing a doctorate in Cybersecurity and AI at UTSA.',
    topics: [
      'Enterprise architecture that evolves',
      'Governing AI agents: bounded autonomy and verification',
      'Cybersecurity and LLM-driven threats',
      'Research computing and cyberinfrastructure',
      'Systems thinking and defensible decisions',
    ],
    appearances: [
      { title: 'Enterprise service transformation and student-centric IT', venue: 'ServiceNow Knowledge' },
      { title: 'High-performance computing, cybersecurity, and data governance', venue: 'UT System Technology Summit' },
      { title: 'User-centric service portals and HPC-based transformation', venue: 'EDUCAUSE Review' },
    ],
  },
  el: {
    bio: 'Ο Νάσος Γαλιόπουλος είναι Εκτελεστικός Διευθυντής Αρχιτεκτονικής Επιχείρησης στο Texas A&M University System, όπου το έργο του καλύπτει τη στρατηγική, τη διακυβέρνηση και την αρχιτεκτονική αναφοράς για τα ιδρύματα-μέλη, τους φορείς και τα κεντρικά γραφεία του Συστήματος. Προηγουμένως υπηρέτησε ως Διευθυντής Τεχνολογίας (CTO) και Αναπληρωτής CIO στο University of Texas at San Antonio. Απόφοιτος του UNT, απέκτησε το πτυχίο BBA το 2005 και MBA στην Τεχνολογία Πληροφοριών το 2015. Η εμπειρία του καλύπτει την αρχιτεκτονική επιχείρησης, την κυβερνοασφάλεια, την ερευνητική υπολογιστική και τις υπηρεσίες τεχνολογίας. Εκπονεί διδακτορικό στην Κυβερνοασφάλεια και την Τεχνητή Νοημοσύνη στο UTSA.',
    topics: [
      'Αρχιτεκτονική επιχείρησης που εξελίσσεται',
      'Διακυβέρνηση πρακτόρων ΤΝ: οριοθετημένη αυτονομία και επαλήθευση',
      'Κυβερνοασφάλεια και απειλές από μεγάλα γλωσσικά μοντέλα',
      'Ερευνητική υπολογιστική και κυβερνοϋποδομές',
      'Συστημική σκέψη και αποφάσεις που τεκμηριώνονται',
    ],
    appearances: [
      { title: 'Μετασχηματισμός υπηρεσιών και πληροφορική με επίκεντρο τον φοιτητή', venue: 'ServiceNow Knowledge' },
      { title: 'Υπολογιστική υψηλών επιδόσεων, κυβερνοασφάλεια και διακυβέρνηση δεδομένων', venue: 'UT System Technology Summit' },
      { title: 'Πύλες υπηρεσιών με επίκεντρο τον χρήστη και μετασχηματισμός μέσω HPC', venue: 'EDUCAUSE Review' },
    ],
  },
  de: {
    bio: 'Nassos Galiopoulos ist Executive Director of Enterprise Architecture im Texas A&M University System, wo er Strategie, Governance und Referenzarchitektur für Mitgliedsinstitutionen, Behörden und die zentralen Systembüros verantwortet. Zuvor war er Chief Technology Officer und Deputy CIO an der University of Texas at San Antonio. Als Absolvent der UNT erwarb er 2005 seinen BBA und 2015 seinen MBA in Informationstechnologie. Seine Erfahrung umfasst Unternehmensarchitektur, Cybersicherheit, Forschungsrechnen und IT-Services. Er promoviert an der UTSA in Cybersicherheit und KI.',
    topics: [
      'Unternehmensarchitektur, die sich weiterentwickelt',
      'KI-Agenten steuern: begrenzte Autonomie und Verifikation',
      'Cybersicherheit und Bedrohungen durch große Sprachmodelle',
      'Forschungsrechnen und Cyberinfrastruktur',
      'Systemdenken und belastbare Entscheidungen',
    ],
    appearances: [
      { title: 'Service-Transformation und studierendenzentrierte IT', venue: 'ServiceNow Knowledge' },
      { title: 'Hochleistungsrechnen, Cybersicherheit und Data Governance', venue: 'UT System Technology Summit' },
      { title: 'Nutzerzentrierte Serviceportale und HPC-gestützte Transformation', venue: 'EDUCAUSE Review' },
    ],
  },
};
