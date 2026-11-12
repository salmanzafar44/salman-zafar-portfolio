export interface CompetencyCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  highlight: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  engagementType: string;
  liveUrl?: string;
  portalLinks?: { label: string; url: string }[];
  summary: string;
  bulletPoints: string[];
  techStack: string[];
}

export type ProjectCategory = 
  | 'All' 
  | 'UK Clients' 
  | 'Dubai / UAE' 
  | 'LMS & EdTech' 
  | 'SaaS & APIs' 
  | 'E-Commerce & Business Systems';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  region: string;
  status: 'In Production' | 'Active Engineering' | 'Deployed Network';
  liveUrl?: string;
  additionalUrls?: { label: string; url: string }[];
  summary: string;
  architecturalHighlights: string[];
  databaseArchitecture: string;
  keyIntegrations: string[];
  techStack: string[];
}

export const PROFILE = {
  name: "Salman Zafar",
  title: "Full-Stack Web Developer",
  techHeadline: "PHP • Laravel • CodeIgniter • React.js • Next.js • PostgreSQL & MySQL",
  location: "Peshawar, Pakistan",
  availability: "Available for International Remote Roles & Consulting (UK, Dubai/UAE, USA, Middle East, India)",
  email: "salmanzafar462@gmail.com",
  phone: "+92 342 9846595",
  whatsappUrl: "https://wa.me/923429846595?text=Hello%20Salman%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  linkedin: "https://www.linkedin.com/in/salman-zafar-804a89226",
  github: "https://github.com/salmanzafar44/",
  currentFocus: "Currently Engineering: LitBench (UK LMS) & Dubai Online Salon Booking System (\"Book Your Dream Bridal Look In Minutes\")",
  valueProposition: "Architecting, developing, integrating, and deploying scalable enterprise web applications, Learning Management Systems (LMS), SaaS integrations, government REST APIs, and multi-portal publishing platforms for clients across the United Kingdom, Dubai/UAE, India, and Pakistan."
};

export const GLOBAL_REGIONS = [
  {
    country: "United Kingdom",
    role: "LMS, EdTech & Fashion E-Commerce",
    deliverables: "LitBench LMS, CCMS Education, Gullveera Retail, GTE Consultancy",
    flag: "GB"
  },
  {
    country: "Dubai, UAE",
    role: "Online Salon & Bridal Booking System",
    deliverables: "AD Web Test online booking platform (\"Book Your Dream Bridal Look In Minutes\"), stylist scheduling & hosting",
    flag: "AE"
  },
  {
    country: "India",
    role: "Multi-Campus Educational Ecosystem",
    deliverables: "Abhyasana Educational Network (5 unified live domains & custom CMS)",
    flag: "IN"
  },
  {
    country: "Pakistan",
    role: "High-Traffic News, Civic Tech & ERP",
    deliverables: "Daily Aaj (4 news portals), KP Government APIs (Code for Pakistan), PSIP LMS",
    flag: "PK"
  }
];

export const TECHNICAL_COMPETENCIES: CompetencyCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Component-driven architectures, responsive interfaces, and type-safe single-page/SSR applications.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "State Management",
      "Component Architecture"
    ],
    highlight: "Modular state management and performance-optimized DOM rendering."
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Enterprise application logic, secure authentication schemas, and high-throughput REST APIs.",
    skills: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "REST API Development",
      "Third-Party API Integration",
      "Authentication & Authorization",
      "Backend Architecture",
      "Microservices & MVC",
      "Role-Based Access Control (RBAC)"
    ],
    highlight: "Robust MVC architectural patterns with strict separation of concerns."
  },
  {
    id: "databases",
    title: "Databases & Data Management",
    description: "Relational modeling, indexing strategies, query profiling, and data integrity guarantees.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Database Design & Modeling",
      "Database Optimization",
      "Indexing & Query Profiling",
      "Transactions & Concurrency",
      "Migration Strategies"
    ],
    highlight: "Optimized schemas handling high write loads and multi-tenant isolation."
  },
  {
    id: "cms",
    title: "CMS & Platforms",
    description: "Custom headless and decoupled content delivery engines, educational platforms, and commercial script customization.",
    skills: [
      "WordPress",
      "Custom CMS Development",
      "Payload CMS",
      "Learning Management Systems (LMS)",
      "CodeCanyon Product Customization",
      "Bilingual Publishing Engines",
      "Editorial Workflow Systems"
    ],
    highlight: "Engineered bespoke bilingual Urdu/English CMS and multi-portal publishing pipelines."
  },
  {
    id: "cloud-devops",
    title: "Cloud, Deployment & Services",
    description: "Production Linux administration, automated deployment, SSL certification, and DNS routing.",
    skills: [
      "Vercel",
      "Supabase",
      "VPS Deployment",
      "cPanel Hosting",
      "Linux Server Management",
      "Application Deployment",
      "Domain & SSL Configuration",
      "Nginx / Apache Web Servers",
      "Production Backup Automation"
    ],
    highlight: "Zero-downtime server migrations, SSL hardening, and automated domain provisioning."
  },
  {
    id: "tools-ai",
    title: "Development Tools & AI Workflows",
    description: "Disciplined version control, automated linting, and agent-augmented rapid prototyping under human oversight.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "AI-Assisted Development",
      "Gemini",
      "AI Coding Agents",
      "Agent-Based Workflows",
      "Automated Test Generation",
      "Code Profiling & Refactoring"
    ],
    highlight: "Leveraging AI agents for test generation, rapid refactoring, and AST verification."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "litbench",
    role: "Lead Full-Stack Developer",
    organization: "LitBench — UK Learning Management System",
    location: "United Kingdom (Remote)",
    engagementType: "Active Engineering Engagement",
    summary: "Leading full-stack architecture and engineering for LitBench, a specialized Learning Management System built for an educational client in the United Kingdom.",
    bulletPoints: [
      "Architecting structured course delivery pipelines, learner progression trackers, and multi-tier administrative dashboards.",
      "Developing content management workflows supporting multimedia learning modules, interactive assessments, and granular student grading.",
      "Designing role-based access control (RBAC) separating platform super-admins, course tutors, corporate clients, and individual learners.",
      "Implementing resilient session security, audit trails, and automated email notifications for assessment milestones."
    ],
    techStack: ["PHP", "Laravel", "React.js", "PostgreSQL", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "adwebtest",
    role: "Full-Stack Web Engineer & System Architect",
    organization: "Online Booking Salon Services System (Dubai, UAE)",
    location: "Dubai, UAE (Remote)",
    engagementType: "Production Salon & Bridal Booking Platform",
    liveUrl: "https://adwebtest.online/",
    summary: "Architected, deployed, and maintain the online booking salon services system (\"Book Your Dream Bridal Look In Minutes\") for a premier Dubai salon client, featuring real-time bridal appointment scheduling, stylist slot availability, custom beauty packages, and cloud hosting.",
    bulletPoints: [
      "Engineered the core 'Book Your Dream Bridal Look In Minutes' booking engine with step-by-step service selection, stylist availability slots, and calendar reservations.",
      "Built dynamic service catalog modules for luxury bridal glam, couture hair styling, henna art, and bespoke wedding beauty packages.",
      "Configured automated appointment confirmation triggers, instant booking status updates, and WhatsApp/SMS alert routing.",
      "Optimized server-level HTTP/2, Let's Encrypt SSL renewal, and domain infrastructure for sub-second page transitions across the UAE."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Online Booking Engine", "Stylist Calendar Scheduling", "Linux Hosting", "SSL / DNS"]
  },
  {
    id: "buraq-technologies",
    role: "Full-Stack Software Engineer",
    organization: "Buraq Technologies",
    location: "Pakistan",
    engagementType: "Core Employment Engagement",
    summary: "Engineered full-stack web applications and multi-tenant SaaS solutions tailored for hospitality, vacation rental, and property management workflows.",
    bulletPoints: [
      "Architected bidirectional third-party API integrations with Airbnb and BookingPal to automate calendar sync, listing availability, and reservations.",
      "Resolved complex race conditions in booking webhooks to ensure zero double-booking incidents across multiple external distribution channels.",
      "Implemented automated financial calculation modules for property host payouts, cleaning fees, seasonal surge pricing, and commission breakdowns.",
      "Standardized API error logging and payload retry mechanisms to handle transient external service downtime gracefully."
    ],
    techStack: ["PHP", "Laravel", "REST APIs", "MySQL", "Airbnb API", "BookingPal API", "Webhook Architecture"]
  },
  {
    id: "daily-aaj",
    role: "Principal Web Engineer & Architect",
    organization: "Daily Aaj Newspaper",
    location: "Pakistan",
    engagementType: "Long-Term Production Engagement",
    liveUrl: "https://dailyaaj.com.pk/",
    portalLinks: [
      { label: "Main News Portal", url: "https://dailyaaj.com.pk/" },
      { label: "English Edition", url: "https://en.dailyaaj.com.pk/" },
      { label: "Digital E-Paper", url: "https://epaper.dailyaaj.com.pk/" },
      { label: "Urdu Columns", url: "https://urducolumns.pk/" }
    ],
    summary: "Spearhead ongoing full-stack development, database query optimization, bilingual content publishing pipelines, digital E-Paper platform, and Urdu Columns ecosystem.",
    bulletPoints: [
      "Engineered high-performance bilingual CMS publishing system managing thousands of daily articles across Urdu and English editions.",
      "Built custom digital E-Paper platform allowing readers to browse regional print editions with interactive article clipping and high-resolution PDF rendering.",
      "Optimized MySQL relational schema, queries, and server caching strategies to sustain massive breaking-news traffic surges without degradation.",
      "Designed and deployed UrduColumns.pk, a dedicated platform aggregating syndicated national columnists with categorized author archives."
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Custom CMS", "Digital E-Paper", "Bilingual Typography", "Cache Optimization"]
  },
  {
    id: "ccms-edu",
    role: "Full-Stack Web Developer",
    organization: "CCMS Education",
    location: "United Kingdom (Remote)",
    engagementType: "Client Platform Engagement",
    liveUrl: "https://ccmsedu.co.uk/",
    summary: "Built and maintain the complete Laravel-based web platform, administrative modules, recruitment workflows, and dynamic candidate inquiry channels for a UK educational agency.",
    bulletPoints: [
      "Engineered dynamic career management and applicant tracking modules to ingest, categorize, and review prospective staff CVs.",
      "Integrated secure web inquiry forms with automated multi-tier transactional email routing and administrative confirmation responses.",
      "Created structured administrative back-office panels allowing non-technical administrative staff to update programs, notices, and intake dates.",
      "Ensured full compliance with UK educational information architecture, mobile responsiveness, and accessibility guidelines."
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Transactional Email", "Recruitment Modules"]
  },
  {
    id: "abhyasana",
    role: "Multi-Domain Web Architect",
    organization: "Abhyasana Educational Network",
    location: "India (Remote)",
    engagementType: "Distributed Campus Platform",
    liveUrl: "https://abhyasana.org/",
    portalLinks: [
      { label: "Abhyasana Central", url: "https://abhyasana.org/" },
      { label: "Abhyudaya Campus", url: "https://abhyudaya.abhyasana.org/" },
      { label: "Sreekara School", url: "https://sreekaraschool.com/" },
      { label: "RKDC Campus", url: "https://rkdc.abhyasana.org/" },
      { label: "RKJC Junior College", url: "https://rkjc.abhyasana.org/" }
    ],
    summary: "Architected and maintain a 5-domain CodeIgniter educational web ecosystem serving multiple schools and colleges under the Abhyasana network in India.",
    bulletPoints: [
      "Designed a unified administrative backend powering content, admissions information, and faculty updates across 5 independent domains.",
      "Standardized MVC architecture in CodeIgniter to ensure high maintainability, shared core libraries, and rapid domain deployment.",
      "Implemented custom notice board and examination result notification systems accessed by thousands of students and parents.",
      "Optimized database query response times for low-bandwidth mobile connections across regional users."
    ],
    techStack: ["PHP", "CodeIgniter", "MySQL", "Multi-Domain Routing", "Centralized CMS", "Modular MVC"]
  },
  {
    id: "code-for-pakistan",
    role: "Backend & REST API Engineer",
    organization: "Code for Pakistan",
    location: "Pakistan",
    engagementType: "Public Sector & Civic Tech Engagement",
    summary: "Engineered critical civic tech backends, government RESTful APIs, and administrative registries for multiple provincial departments in Khyber Pakhtunkhwa (KP).",
    bulletPoints: [
      "Built the comprehensive Membership Management System for the KP Sports Directorate, digitizing athlete records, registrations, and club verifications.",
      "Engineered secure RESTful APIs for the KP Food Safety & Halal Food Authority enabling field inspectors to verify business licenses on mobile devices.",
      "Delivered resilient backend systems for the Livestock & Dairy Development Research department to catalogue animal vaccination and breeding records.",
      "Developed departmental management systems and public portal modules for the KP Zoo Department and KP Fisheries Department."
    ],
    techStack: ["PHP", "Laravel", "REST APIs", "MySQL", "JSON Web Tokens (JWT)", "GovTech Architecture"]
  },
  {
    id: "galaxmo",
    role: "Full-Stack Developer",
    organization: "Galaxmo IT Solutions",
    location: "Pakistan",
    engagementType: "Software House Engagement",
    summary: "Engineered enterprise client applications including a Property Management System, multiple-choice questions (MCQs) CMS for an academic testing agency, and School Management Systems.",
    bulletPoints: [
      "Engineered commercial Property Management System tracking tenant leases, unit inventories, utility bills, and payment reconciliation.",
      "Built specialized high-capacity MCQs CMS for a regional testing agency with question bank classification, answer key encryption, and test paper generation.",
      "Contributed to modular School Management Systems handling student enrollment, fee vouchers, teacher attendance, and term report cards."
    ],
    techStack: ["PHP", "Laravel", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "litbench-lms",
    title: "LitBench — UK Learning Management System",
    subtitle: "Enterprise course delivery & learner workflow architecture",
    category: ["UK Clients", "LMS & EdTech"],
    region: "United Kingdom",
    status: "Active Engineering",
    summary: "Comprehensive Learning Management System built for an educational client in the United Kingdom, featuring structured multi-tier course delivery, assessment workflows, and administrative analytics.",
    architecturalHighlights: [
      "Modular course syllabus builder with granular lesson prerequisites and multimedia attachment support",
      "Tiered role-based permissions (Super Admin, Course Lead, Tutor, Corporate Sponsor, Student)",
      "Automated assignment submission tracking with timed assessment checkpoints and grading rubrics",
      "Auditable activity logs and event-driven email notifications for student milestones"
    ],
    databaseArchitecture: "PostgreSQL relational schema utilizing foreign key constraints, composite indexes for learner progress queries, and transactional integrity for assessment submissions.",
    keyIntegrations: ["Transactional Email Service", "Cloud Asset Storage", "Custom Assessment Engine"],
    techStack: ["PHP", "Laravel", "React.js", "PostgreSQL", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "adwebtest-platform",
    title: "Online Booking Salon Services System",
    subtitle: "Dubai Bridal & Beauty Booking Platform — \"Book Your Dream Bridal Look In Minutes\"",
    category: ["Dubai / UAE", "E-Commerce & Business Systems"],
    region: "Dubai, UAE",
    status: "In Production",
    liveUrl: "https://adwebtest.online/",
    summary: "Full-stack online booking salon services web application engineered for a premier salon client in Dubai, UAE. Centered on the core proposition 'Book Your Dream Bridal Look In Minutes', the system automates client inquiries, bridal service reservations, stylist schedule allocation, and instant appointment confirmations.",
    architecturalHighlights: [
      "Streamlined multi-step bridal booking flow allowing clients to 'Book Your Dream Bridal Look In Minutes' with real-time slot selection",
      "Granular service catalog management supporting bridal packages, hair styling, couture makeup, and treatment durations",
      "Stylist calendar allocation algorithm preventing overlapping appointments and double-booking conflicts",
      "High-performance responsive interface tailored for luxury beauty clients on mobile Safari and Chrome across the GCC"
    ],
    databaseArchitecture: "Relational schema maintaining service tiers, stylist working hours, bridal booking slots, client contact records, and appointment statuses.",
    keyIntegrations: ["Automated Appointment Reminders", "Stylist Slot Availability Engine", "DNS & SSL Infrastructure"],
    techStack: ["PHP", "MySQL", "JavaScript", "Booking Engine Architecture", "Linux Hosting", "SSL/TLS"]
  },
  {
    id: "psip-lms",
    title: "PSIP Learning Management System",
    subtitle: "Institutional educational portal with administrative controls",
    category: ["LMS & EdTech"],
    region: "Pakistan",
    status: "In Production",
    liveUrl: "https://psip.org.pk/",
    summary: "Institutional Learning Management System designed to handle institutional curriculum dissemination, student enrollments, exam result publications, and departmental administration.",
    architecturalHighlights: [
      "Centralized course management engine enabling faculty to upload lectures, syllabi, and reading materials",
      "Student self-service portal for course registrations, fee challan generation, and grade viewports",
      "Administrative oversight dashboard with enrollment analytics and faculty workload distribution",
      "Mobile-friendly interface engineered for reliable accessibility on low-bandwidth rural connections"
    ],
    databaseArchitecture: "Relational schema designed with optimized tables for semesters, enrolled courses, student records, and grading histories.",
    keyIntegrations: ["SMS Notification Gateway", "PDF Generation for Student Transcripts", "Role-Based Auth"],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "REST APIs", "PDF Generation"]
  },
  {
    id: "olli-insurance",
    title: "Olli Insurance & Partner Ecosystem",
    subtitle: "InsurTech web platform & dedicated B2B partner portal",
    category: ["SaaS & APIs"],
    region: "International",
    status: "In Production",
    liveUrl: "https://olli.insure/",
    additionalUrls: [
      { label: "Main Insurance Portal", url: "https://olli.insure/" },
      { label: "B2B Partner Portal", url: "https://olli.insure/partners" }
    ],
    summary: "Modern InsurTech web platform and dedicated partner ecosystem facilitating policy inquiries, broker partner registrations, automated quotation flows, and partner onboarding workflows.",
    architecturalHighlights: [
      "Dual-portal architecture separating direct consumer policy discovery from dedicated B2B broker workflows",
      "Dynamic quote calculation engine evaluating risk inputs, coverage limits, and policy terms",
      "Secure partner portal with document upload verification, commission tracking, and lead dispatch",
      "Strict data sanitization and encryption adhering to modern financial privacy principles"
    ],
    databaseArchitecture: "Multi-table relational schema maintaining policy versions, applicant submissions, partner verification statuses, and rate tables.",
    keyIntegrations: ["Partner Webhook APIs", "Document Verification Service", "Email Automation Engine"],
    techStack: ["PHP", "Laravel", "REST APIs", "MySQL", "Tailwind CSS", "Partner API Architecture"]
  },
  {
    id: "gullveera-ecommerce",
    title: "Gullveera — UK Retail & Fashion E-Commerce",
    subtitle: "Modern responsive UK fashion storefront & order management",
    category: ["UK Clients", "E-Commerce & Business Systems"],
    region: "United Kingdom",
    status: "In Production",
    liveUrl: "https://gulveera.co.uk/",
    summary: "Responsive UK fashion and retail e-commerce platform featuring dynamic product catalogs, category filtering, inventory management, and streamlined checkout.",
    architecturalHighlights: [
      "Clean visual product showcase featuring high-res imagery, color/size variant selector, and stock alerts",
      "Optimized client-side basket management with instant tax and UK shipping rate calculation",
      "Custom administrative order fulfillment pipeline with invoice generation and stock decrement",
      "Speed-optimized asset delivery and metadata configured for UK search engine visibility"
    ],
    databaseArchitecture: "Normalized e-commerce database with products, SKUs, inventory logs, customer accounts, and order transaction records.",
    keyIntegrations: ["Payment Gateway API", "Shipping Calculation Module", "Transactional Order Confirmations"],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "E-Commerce Engine"]
  },
  {
    id: "tailor-management-system",
    title: "Tailor Management System (ERP)",
    subtitle: "End-to-end bespoke tailoring production & payroll tracking",
    category: ["E-Commerce & Business Systems"],
    region: "Enterprise App",
    status: "In Production",
    summary: "Specialized enterprise desktop/web ERP engineered for bespoke tailoring houses. Tracks customer measurement profiles, order lifecycle, Karigar/tailor task allocation, stitching stages, and piece-rate salary calculations.",
    architecturalHighlights: [
      "Granular customer measurement sheet recording over 20 anatomical dimensions per garment type with alteration history",
      "Production stage tracker monitoring cloth cutting, embroidery, primary stitching, buttoning, and quality inspection",
      "Piece-rate wage engine calculating Karigar earnings automatically upon item stage sign-off",
      "Comprehensive daily delivery schedules, pending alteration queues, and financial summary reports"
    ],
    databaseArchitecture: "High-precision relational database tracking order items, measurement versions, employee piece-work logs, and payment disbursements.",
    keyIntegrations: ["Barcode/Ticket Label Printing", "SMS Order Completion Alerts", "Financial Ledger Export"],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "DataTables", "Thermal Receipt Printing"]
  },
  {
    id: "gte-consultancy",
    title: "GTE Consultancy — UK Corporate Platform",
    subtitle: "Official corporate platform and high-converting inquiry system",
    category: ["UK Clients"],
    region: "United Kingdom",
    status: "In Production",
    liveUrl: "https://gteconsultancy.co.uk/",
    summary: "Corporate web platform engineered for a United Kingdom consultancy firm, featuring structured practice area showcases, compliance documentation, and high-converting consultation booking forms.",
    architecturalHighlights: [
      "Executive corporate branding with clear typographic structure and fast page transitions",
      "Structured client intake questionnaires filtering prospective inquiries by sector and engagement scope",
      "Administrative dashboard for reviewing inbound consultation requests with status tagging",
      "Cross-browser testing ensuring complete fidelity across desktop, iPad, and mobile viewports"
    ],
    databaseArchitecture: "Structured content and inquiry database maintaining client submissions, audit stamps, and communication statuses.",
    keyIntegrations: ["Secure Form Processing", "Transactional Notification Service", "Analytics Tracking"],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "REST Endpoints"]
  },
  {
    id: "daily-aaj-ecosystem",
    title: "Daily Aaj Multi-Portal Publishing Ecosystem",
    subtitle: "Bilingual national news network, E-Paper & Urdu Columns",
    category: ["SaaS & APIs"],
    region: "Pakistan",
    status: "Deployed Network",
    liveUrl: "https://dailyaaj.com.pk/",
    additionalUrls: [
      { label: "Main Urdu News", url: "https://dailyaaj.com.pk/" },
      { label: "English Edition", url: "https://en.dailyaaj.com.pk/" },
      { label: "Digital E-Paper", url: "https://epaper.dailyaaj.com.pk/" },
      { label: "Urdu Columns Portal", url: "https://urducolumns.pk/" }
    ],
    summary: "Comprehensive multi-domain media ecosystem serving millions of monthly page views across four live synchronized digital publishing platforms.",
    architecturalHighlights: [
      "Bilingual publishing engine with RTL typography support for Nastaliq and standard LTR English newsroom workflows",
      "High-resolution digital E-Paper platform featuring interactive crop-and-share article tools for social media",
      "Multi-level editorial approvals, breaking news ticker overrides, and syndicated article feeds",
      "Heavy query caching, database indexing, and static fragment caching to absorb high concurrency breaking news spikes"
    ],
    databaseArchitecture: "MySQL cluster schema with partitioned news archives, full-text search indexing, and optimized read-heavy query pipelines.",
    keyIntegrations: ["Social Media Auto-Publishing API", "E-Paper PDF Slicer", "Ad Server Integration"],
    techStack: ["PHP", "Laravel", "MySQL", "RTL/LTR Typography", "Cache Invalidation", "REST APIs"]
  },
  {
    id: "abhyasana-network",
    title: "Abhyasana 5-Campus Educational Network",
    subtitle: "Unified multi-campus CodeIgniter ecosystem across India",
    category: ["LMS & EdTech"],
    region: "India",
    status: "Deployed Network",
    liveUrl: "https://abhyasana.org/",
    additionalUrls: [
      { label: "Abhyasana Central", url: "https://abhyasana.org/" },
      { label: "Abhyudaya Campus", url: "https://abhyudaya.abhyasana.org/" },
      { label: "Sreekara School", url: "https://sreekaraschool.com/" },
      { label: "RKDC Campus", url: "https://rkdc.abhyasana.org/" },
      { label: "RKJC Junior College", url: "https://rkjc.abhyasana.org/" }
    ],
    summary: "Synchronized multi-domain institutional platform connecting 5 schools and degree colleges across India under a single maintainable CodeIgniter codebase.",
    architecturalHighlights: [
      "Single shared codebase orchestrating distinct domain configurations, themes, and content buckets",
      "Centralized administrative portal allowing network executives to publish network-wide announcements or campus-specific notices",
      "Admissions inquiry pipeline capturing prospective student applications with document attachment capability",
      "High performance on low-spec client devices through zero-overhead server rendering"
    ],
    databaseArchitecture: "Centralized relational database with domain isolation keys and efficient campus-scoped data views.",
    keyIntegrations: ["SMS Alerts API", "Dynamic Admissions Form Engine", "Central Media Repository"],
    techStack: ["PHP", "CodeIgniter", "MySQL", "Multi-Tenant Architecture", "Responsive CSS"]
  },
  {
    id: "code-for-pakistan-gov",
    title: "Civic Tech & Government REST APIs (Code for Pakistan)",
    subtitle: "Provincial public sector registries, safety audits & departmental backends",
    category: ["SaaS & APIs"],
    region: "Pakistan",
    status: "In Production",
    summary: "Engineered robust RESTful backend architectures and administrative registries for provincial government departments across Khyber Pakhtunkhwa (KP).",
    architecturalHighlights: [
      "Membership Management System for KP Sports Directorate with athlete verification and club registration",
      "Secure REST APIs for KP Food Safety & Halal Food Authority enabling field inspectors to query business permits offline and sync online",
      "Digital tracking registry for Livestock & Dairy Development Research cataloging research yields and disease monitoring",
      "Administrative modules for KP Zoo and KP Fisheries departments with strict role-based audit logs"
    ],
    databaseArchitecture: "Normalized enterprise relational schemas with strict audit logging, transaction rollbacks, and tamper-resistant user tracking.",
    keyIntegrations: ["Mobile Field App REST APIs", "Provincial Citizen Databases", "JWT Token Auth"],
    techStack: ["PHP", "Laravel", "REST APIs", "MySQL", "JWT Auth", "Public Sector Architecture"]
  }
];

export const AI_WORKFLOWS_DETAILS = {
  title: "AI-Augmented Engineering Methodology",
  subtitle: "Disciplined acceleration under strict human architectural oversight",
  overview: "Rather than relying on unvetted code generation, I apply modern AI coding agents (including Google Gemini and agent-driven workflows) as precision cognitive multipliers for rapid prototyping, deep static analysis, automated test authoring, and complex schema refactoring.",
  pillars: [
    {
      title: "Spec-Driven Prototyping",
      description: "Drafting detailed domain interfaces and API contracts first, then employing AI agents to scaffold boilerplate structures adhering to strict type signatures and enterprise patterns."
    },
    {
      title: "Deep Static Analysis & AST Audits",
      description: "Utilizing AI models to analyze legacy PHP/Laravel codebases for deprecated methods, potential SQL injection vectors, circular dependencies, and query N+1 bottlenecks."
    },
    {
      title: "Automated Regression Test Authoring",
      description: "Generating comprehensive unit and integration test matrices (covering edge cases, race conditions, and boundary inputs) to safeguard mission-critical business logic."
    },
    {
      title: "Human-in-the-Loop Architectural Governance",
      description: "Every line of generated code is subject to human architectural review, lint verification, static type checking, and real sandbox testing before promotion to production."
    }
  ],
  tooling: [
    "Google Gemini 2.5 / 2.0 Models",
    "Multi-Agent Coding Frameworks",
    "AST & Static Analysis Tools",
    "Automated Test Scaffolding",
    "SQL Migration & Index Planning",
    "Continuous Git Verification"
  ]
};

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "Sarhad University of Science & Information Technology",
    location: "Peshawar, Pakistan",
    focus: "Core focus on Software Architecture, Distributed Systems, Relational Database Theory, Object-Oriented Analysis & Design, and Web Engineering."
  },
  {
    degree: "Higher Secondary School Certificate (Pre-Engineering)",
    institution: "Government College Peshawar",
    location: "Peshawar, Pakistan",
    focus: "Foundational mathematics, analytical problem solving, physics, and computer science fundamentals."
  }
];
