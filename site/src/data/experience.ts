import type { Lang } from '../i18n';

export type Role = {
  title: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

type Experience = {
  roles: Role[];
  education: { degree: string; school: string; year: string }[];
  recognition: string[];
  boards: string[];
  certifications: string[];
  languages: string[];
};

const boardNames = [
  'Dell Technologies Higher Education CIO Advisory Board',
  'Juniper Networks Higher Education CIO Advisory Board',
  'ServiceNow Higher Education Advisory Board',
];

export const experience: Record<Lang, Experience> = {
  en: {
    roles: [
      {
        title: 'Executive Director of Enterprise Architecture',
        org: 'The Texas A&M University System',
        period: 'May 2026 — Present',
        location: 'College Station, TX',
        summary: 'Strategy, governance, and reference architecture across member institutions, agencies, and System Offices.',
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
    ],
    education: [
      { degree: 'Ph.D. Candidate, Cybersecurity and AI', school: 'The University of Texas at San Antonio', year: 'Expected 2027' },
      { degree: 'MBA, Information Technology', school: 'University of North Texas', year: '2015' },
      { degree: 'BBA', school: 'University of North Texas', year: '2005' },
      { degree: 'BCIS, Information Technology', school: 'American College of Greece', year: '2001' },
    ],
    recognition: ['CIO 100 Award (2023)', 'FutureEdge 50 Award (2021)', 'Excellence Award, University of North Texas System'],
    boards: [...boardNames, 'Lonestar Education and Research Network (LEARN), advisory role'],
    certifications: [
      'MIT Sloan: Mastering Design Thinking, Executive Program (2020)',
      'FBI Citizens Academy, San Antonio Field Office (2022)',
      'Leading with Analytics',
      'ITIL Foundations',
      'Microsoft Certified Technology Specialist',
    ],
    languages: ['Greek (native)', 'English (fluent)', 'German (conversational)'],
  },

  el: {
    roles: [
      {
        title: 'Εκτελεστικός Διευθυντής Αρχιτεκτονικής Επιχείρησης',
        org: 'The Texas A&M University System',
        period: 'Μάιος 2026 — Σήμερα',
        location: 'College Station, Τέξας',
        summary: 'Στρατηγική, διακυβέρνηση και αρχιτεκτονική αναφοράς για τα ιδρύματα-μέλη, τους φορείς και τα κεντρικά γραφεία του Συστήματος.',
        highlights: [
          'Χαράσσω τη στρατηγική, τη διακυβέρνηση και την αρχιτεκτονική αναφοράς για τα ιδρύματα-μέλη, τους πολιτειακούς φορείς και τα κεντρικά γραφεία του Συστήματος.',
          'Σχεδιάζω οδικούς χάρτες για πολλαπλές πανεπιστημιουπόλεις, που συνδέουν τη στρατηγική των ιδρυμάτων με τις τεχνολογικές επενδύσεις και αντέχουν στην πράξη.',
          'Καθοδηγώ την αρχιτεκτονική κατεύθυνση για την τεχνητή νοημοσύνη και τις αναδυόμενες τεχνολογίες, με το επίπεδο ασφάλειας και συμμόρφωσης που απαιτεί η ανώτατη εκπαίδευση.',
        ],
      },
      {
        title: 'Διευθυντής Τεχνολογίας (CTO) και Αναπληρωτής CIO',
        org: 'The University of Texas at San Antonio',
        period: 'Αύγ. 2019 — Απρ. 2026',
        location: 'San Antonio, Τέξας',
        summary:
          'Ηγήθηκα 150+ ανθρώπων σε υποδομές, εφαρμογές, αρχιτεκτονική, ερευνητική υπολογιστική, κυβερνοασφάλεια και ακαδημαϊκή τεχνολογία: ένα χαρτοφυλάκιο άνω των 30 εκατ. δολαρίων για ένα ερευνητικό πανεπιστήμιο Carnegie R1 με 38.000 φοιτητές. Ο στόχος ήταν ένα ερευνητικό πανεπιστήμιο να λειτουργεί ως ενιαίος οργανισμός για όσους ζουν μέσα σε αυτό.',
        highlights: [
          'Εξασφάλισα συνεργασία σε είδος 15 εκατ. δολαρίων με την Dell Technologies για την πλατφόρμα Advanced Research Computing· η χρήση των υποδομών HPC αυξήθηκε κατά 130% σε ετήσια βάση, στηρίζοντας την ένταξη του UTSA στα πανεπιστήμια Carnegie R1.',
          'Μετέφερα τα βασικά φοιτητικά συστήματα σε υπερσυγκλίνον υβριδικό νέφος και επαναδιαπραγματεύτηκα βασικές συμβάσεις, πετυχαίνοντας τις πρώτες εγγραφές του πανεπιστημίου χωρίς καμία διακοπή λειτουργίας.',
          'Πέτυχα συμμόρφωση με τα NIST 800-53 και 800-171 σε συνεργασία με τις υπηρεσίες Κινδύνων και Συμμόρφωσης, τη Νομική Υπηρεσία και το National Security Collaboration Center.',
          'Όρισα αρχές, πρότυπα και οδικούς χάρτες αρχιτεκτονικής και προήδρευσα στη διακυβέρνηση αρχιτεκτονικής· μείωσα τον κύκλο παράδοσης λογισμικού από 18 μήνες σε 12 ώρες μέσω αυτοματοποίησης και design thinking.',
          'Θέσπισα συμμετοχική διακυβέρνηση και γραφείο διαχείρισης έργων· πίνακες παρακολούθησης σε πραγματικό χρόνο απέδωσαν εξοικονόμηση περίπου 5 εκατ. δολαρίων και στήριξαν ετήσια αύξηση εγγραφών περίπου 4,5%.',
          'Δημιούργησα πύλη υπηρεσιών με επίκεντρο τον φοιτητή, που παρουσιάστηκε από το EDUCAUSE (η αυτοεξυπηρέτηση ανέβηκε από 25% σε 70%), και το μοντέλο υποστήριξης «Tech Café» (93% ικανοποίηση)· αύξησα κατά 30% την εκπροσώπηση γυναικών και μειονοτήτων στην πληροφορική.',
        ],
      },
      {
        title: 'Προσωρινός Διευθυντής Τεχνολογίας και Ανώτερος Εκτελεστικός Διευθυντής',
        org: 'University of North Texas System',
        period: '2015 — 2019',
        location: 'Denton, Τέξας',
        summary:
          'Ηγήθηκα του χαρτοφυλακίου πληροφορικής ενός συστήματος τριών πανεπιστημιουπόλεων με 44.000 φοιτητές και 10.000 μέλη προσωπικού: 120 άνθρωποι και προϋπολογισμός περίπου 40 εκατ. δολαρίων, μεταξύ άλλων ως προσωρινός CTO σε περίοδο αλλαγής ηγεσίας.',
        highlights: [
          'Εφάρμοσα πρακτικές ITIL που μείωσαν τα κρίσιμα περιστατικά (P1/P2) κατά 36% και ανέβασαν τη διαθεσιμότητα στο 99,95%.',
          'Θέσπισα διακυβέρνηση πληροφορικής, γραφείο διαχείρισης έργων και αναλυτική απόδοσης με δείκτες σε πραγματικό χρόνο για τη διοίκηση.',
          'Εξορθολόγισα το χαρτοφυλάκιο εφαρμογών, διοχετεύοντας πάνω από 500.000 δολάρια σε νέες δυνατότητες.',
        ],
      },
      {
        title: 'Διευθυντής Αποκλειστικού Προγράμματος, Carticel (MACI)',
        org: 'AmerisourceBergen (US Bioservices)',
        period: '2013 — 2015',
        location: 'Frisco, Τέξας',
        summary:
          'Εθνικό πρόγραμμα εξειδικευμένου φαρμακείου 40 εκατ. δολαρίων για μια σύνθετη βιολογική θεραπεία, με αποκλειστική εποπτεία και δικαίωμα υπογραφής. Μια υπενθύμιση ότι η καλή αρχιτεκτονική δεν αφορά μόνο το λογισμικό.',
        highlights: [
          'Επανασχεδίασα τη διαδρομή από τον προγραμματισμό χειρουργείου έως την έγκριση του ασφαλιστή: 25% περισσότερες εγκρίσεις σε 100+ παρόχους, εννέα μήνες λιγότερη καθυστέρηση αποζημιώσεων.',
        ],
      },
      {
        title: 'Διευθυντής και Υπεύθυνος, Υπηρεσίες Συνεργασίας και Υπολογιστικών Συστημάτων',
        org: 'University of North Texas System & UNT Dallas',
        period: '2002 — 2013',
        location: 'Denton & Dallas, Τέξας',
        summary:
          'Από τεχνικός πληροφορικής και διαχειριστής δικτύων σε υπεύθυνο προγράμματος και διευθυντή πλατφορμών συνεργασίας, ταυτότητας και τερματικών για 50.000+ χρήστες.',
        highlights: [
          'Έστησα ασφαλή δικτυακή υποδομή για το UNT Dallas και το Caruth Police Institute, χωρίς κανένα περιστατικό ασφαλείας.',
          'Έφερα το SharePoint σε επίπεδο επιχειρησιακής λειτουργίας σε τρεις μήνες και διαπραγματεύτηκα νέα σύμβαση αδειών Office 365.',
        ],
      },
      {
        title: 'Προγραμματιστής Λογισμικού',
        org: 'INFOSUPPORT SA',
        period: '2000 — 2001',
        location: 'Αθήνα',
        summary: 'Ανάπτυξη συστημάτων ERP, χρηματοοικονομικών, λιανικής και ανθρώπινου δυναμικού.',
      },
      {
        title: 'Ειδικός Ραδιοεπικοινωνιών',
        org: 'Ελληνικός Στρατός, Τεχνικό Σώμα',
        period: '1995 — 1997',
        location: 'Ελλάδα',
        summary: 'Ασφαλείς ραδιοεπικοινωνίες και συστήματα πεδίου.',
      },
    ],
    education: [
      { degree: 'Υποψήφιος Διδάκτορας, Κυβερνοασφάλεια και Τεχνητή Νοημοσύνη', school: 'The University of Texas at San Antonio', year: 'Αναμένεται 2027' },
      { degree: 'MBA, Τεχνολογία Πληροφοριών', school: 'University of North Texas', year: '2015' },
      { degree: 'Πτυχίο Διοίκησης Επιχειρήσεων (BBA)', school: 'University of North Texas', year: '2005' },
      { degree: 'BCIS, Τεχνολογία Πληροφοριών', school: 'Αμερικανικό Κολλέγιο Ελλάδος', year: '2001' },
    ],
    recognition: ['Βραβείο CIO 100 (2023)', 'Βραβείο FutureEdge 50 (2021)', 'Βραβείο Αριστείας, University of North Texas System'],
    boards: [...boardNames, 'Lonestar Education and Research Network (LEARN), συμβουλευτικός ρόλος'],
    certifications: [
      'MIT Sloan: Mastering Design Thinking, πρόγραμμα για στελέχη (2020)',
      'FBI Citizens Academy, γραφείο San Antonio (2022)',
      'Leading with Analytics',
      'ITIL Foundations',
      'Microsoft Certified Technology Specialist',
    ],
    languages: ['Ελληνικά (μητρική)', 'Αγγλικά (άπταιστα)', 'Γερμανικά (επίπεδο συνομιλίας)'],
  },

  de: {
    roles: [
      {
        title: 'Executive Director of Enterprise Architecture',
        org: 'The Texas A&M University System',
        period: 'Mai 2026 — heute',
        location: 'College Station, Texas',
        summary: 'Strategie, Governance und Referenzarchitektur für Mitgliedsinstitutionen, Behörden und die zentralen Systembüros.',
        highlights: [
          'Verantwortung für Strategie, Governance und Referenzarchitektur der Unternehmensarchitektur über Mitgliedsinstitutionen, staatliche Behörden und zentrale Systembüros hinweg.',
          'Entwicklung campusübergreifender Roadmaps, die institutionelle Strategie mit Technologieinvestitionen verbinden und sich in der Praxis bewähren.',
          'Architektonische Leitlinien für KI und neue Technologien, mit dem Sicherheits- und Compliance-Niveau, das Hochschulen brauchen.',
        ],
      },
      {
        title: 'Chief Technology Officer & Deputy CIO',
        org: 'The University of Texas at San Antonio',
        period: 'Aug. 2019 — Apr. 2026',
        location: 'San Antonio, Texas',
        summary:
          'Leitung von über 150 Mitarbeitenden in Infrastruktur, Anwendungen, Architektur, Forschungsrechnen, Cybersicherheit und akademischer Technologie: ein Portfolio von über 30 Mio. US-Dollar für eine Carnegie-R1-Universität mit 38.000 Studierenden. Das Ziel: dass sich eine Forschungsuniversität für die Menschen darin wie eine einzige Institution anfühlt.',
        highlights: [
          'Sachleistungspartnerschaft mit Dell Technologies über 15 Mio. US-Dollar für die Plattform Advanced Research Computing; die HPC-Auslastung stieg um 130 % gegenüber dem Vorjahr und unterstützte den Aufstieg der UTSA zur Carnegie-R1-Universität.',
          'Migration der zentralen Studierendensysteme in eine hyperkonvergente Hybrid-Cloud und Neuverhandlung wichtiger Verträge – die ersten Einschreibungszyklen der Universität ohne jede Ausfallzeit.',
          'Compliance mit NIST 800-53 und 800-171 gemeinsam mit Risk & Compliance, der Rechtsabteilung und dem National Security Collaboration Center.',
          'Architekturprinzipien, Standards und Zielbild-Roadmaps festgelegt und das Architekturgremium geleitet; Softwarelieferzyklen durch Automatisierung und Design Thinking von 18 Monaten auf 12 Stunden verkürzt.',
          'Gemeinsame Governance und ein PMO aufgebaut; Echtzeit-Dashboards brachten rund 5 Mio. US-Dollar Einsparungen und unterstützten ein jährliches Einschreibungswachstum von rund 4,5 %.',
          'Studierendenzentriertes Serviceportal, vorgestellt von EDUCAUSE (Self-Service-Nutzung von 25 % auf 70 %), und das Supportmodell „Tech Café“ (93 % Zufriedenheit); Anteil von Frauen und Minderheiten in der IT um 30 % erhöht.',
        ],
      },
      {
        title: 'Interim Chief Technology Officer & Senior Executive Director',
        org: 'University of North Texas System',
        period: '2015 — 2019',
        location: 'Denton, Texas',
        summary:
          'Leitung des IT-Portfolios eines Systems mit drei Standorten, 44.000 Studierenden und 10.000 Beschäftigten: 120 Mitarbeitende und ein Budget von rund 40 Mio. US-Dollar, unter anderem als Interim-CTO während eines Führungswechsels.',
        highlights: [
          'Einführung von ITIL-Praktiken: 36 % weniger P1/P2-Vorfälle und 99,95 % Verfügbarkeit.',
          'Aufbau von IT-Governance, PMO und Performance-Analytics mit Echtzeit-KPIs für die Leitung.',
          'Bereinigung des Anwendungsportfolios; über 500.000 US-Dollar flossen in neue Fähigkeiten.',
        ],
      },
      {
        title: 'Exclusive Program Director, Carticel (MACI)',
        org: 'AmerisourceBergen (US Bioservices)',
        period: '2013 — 2015',
        location: 'Frisco, Texas',
        summary:
          'Ein nationales Spezialapotheken-Programm über 40 Mio. US-Dollar für eine komplexe biologische Therapie, mit alleiniger Verantwortung und Zeichnungsbefugnis. Eine Erinnerung daran, dass gute Architektur nicht nur Software ist.',
        highlights: [
          'Den Weg von der OP-Planung bis zur Kostenübernahme neu gestaltet: 25 % mehr Genehmigungen bei über 100 Leistungserbringern, Erstattungen neun Monate schneller.',
        ],
      },
      {
        title: 'Director & Manager, Enterprise Collaboration & Computing Services',
        org: 'University of North Texas System & UNT Dallas',
        period: '2002 — 2013',
        location: 'Denton & Dallas, Texas',
        summary:
          'Vom IT-Spezialisten und Netzwerkadministrator zum Programmmanager und Director für Kollaborations-, Identitäts- und Endgeräteplattformen mit über 50.000 Nutzern.',
        highlights: [
          'Sichere Netzwerkinfrastruktur für UNT Dallas und das Caruth Police Institute aufgebaut – ohne einen einzigen Sicherheitsvorfall.',
          'SharePoint in drei Monaten unternehmensreif gemacht und einen neuen Office-365-Lizenzvertrag verhandelt.',
        ],
      },
      {
        title: 'Softwareentwickler',
        org: 'INFOSUPPORT SA',
        period: '2000 — 2001',
        location: 'Athen, Griechenland',
        summary: 'Entwicklung von ERP-, Finanz-, Handels- und Personalsystemen.',
      },
      {
        title: 'Funkspezialist',
        org: 'Griechisches Heer, Technisches Korps',
        period: '1995 — 1997',
        location: 'Griechenland',
        summary: 'Gesicherte Funkkommunikation und Feldsysteme.',
      },
    ],
    education: [
      { degree: 'Doktorand, Cybersicherheit und KI', school: 'The University of Texas at San Antonio', year: 'voraussichtlich 2027' },
      { degree: 'MBA, Informationstechnologie', school: 'University of North Texas', year: '2015' },
      { degree: 'BBA (Betriebswirtschaft)', school: 'University of North Texas', year: '2005' },
      { degree: 'BCIS, Informationstechnologie', school: 'American College of Greece', year: '2001' },
    ],
    recognition: ['CIO 100 Award (2023)', 'FutureEdge 50 Award (2021)', 'Excellence Award, University of North Texas System'],
    boards: [...boardNames, 'Lonestar Education and Research Network (LEARN), beratende Rolle'],
    certifications: [
      'MIT Sloan: Mastering Design Thinking, Executive-Programm (2020)',
      'FBI Citizens Academy, Außenstelle San Antonio (2022)',
      'Leading with Analytics',
      'ITIL Foundations',
      'Microsoft Certified Technology Specialist',
    ],
    languages: ['Griechisch (Muttersprache)', 'Englisch (fließend)', 'Deutsch (konversationssicher)'],
  },
};
