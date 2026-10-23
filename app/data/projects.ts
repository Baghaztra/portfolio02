export interface Person {
  name: string;
  site: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Professional" | "Academic" | "Organization" | "Hackathon" | "Exploration";
  summary: string;
  role: string;
  year: string;
  featured?: { index: string; file: string; tags: string[] };
  image: string | null;
  imageAlt: string;
  stack: string[];
  repos: ProjectLink[];
  demoUrl: string | null;
  collaborators: string[];
  problem?: string;
  decision?: string;
  outcome?: string;
}

export const people: Record<string, Person> = {
  pitokdf: { name: 'Pitok', site: 'https://pitok.my.id' },
  redho: { name: 'Redho', site: 'https://www.redhosy.my.id' },
  topan: { name: 'Topan', site: 'https://www.topanisme.my.id' },
  firman: { name: 'Firman', site: 'https://github.com/Zephhyyrr' },
};

export const projects: Project[] = [
  {
    featured: { index: '001', file: 'ROSA Web', tags: ['AI', 'RAG', 'Web App'] },
    slug: 'rosa',
    title: 'ROSA',
    category: 'Academic',
    summary:
      'AI-powered industrial monitoring and control platform, developed as part of the ROSA AI project at Halcom. Contributed in ROSA Web as a core component of the ROSA ecosystem, working alongside the monitoring gateway and edge AI platform to enable natural-language interaction with industrial systems.',
    role: 'Backend & AI Engineer',
    year: '2026',
    image: '/images/projects/rosa.png',
    imageAlt: 'Screenshot of ROSA',
    stack: ['LLM', 'RAG', 'FastAPI', 'React.js'],
    repos: [],
    demoUrl: 'https://rosa.halcom.co.id/',
    collaborators: ['topan','redho'],
    problem: 'Industrial operators often rely on multiple dashboards and complex interfaces to monitor equipment and perform control tasks. Accessing operational data efficiently requires technical knowledge, making it difficult to interact with industrial systems in a more intuitive way.',
    decision: 'Developed ROSA Web as an AI-powered interface that integrates with industrial monitoring APIs and custom AI tools. By combining LLMs, retrieval, and function calling, users can monitor system status, retrieve operational insights, and execute control actions through natural-language conversations.',
    outcome: 'Successfully delivered ROSA Web as a key component of the ROSA ecosystem, enabling seamless interaction between users and industrial systems while collaborating with the teams responsible for the monitoring gateway and edge AI platform.'
  },
  {
    featured: { index: '002', file: 'BOSS (Business One Stop System)', tags: ['Ecommerce'] },
    slug: 'bossapp',
    title: 'BOSSAPP',
    category: 'Professional',
    summary:
      'An all-in-one business management platform designed to help MSMEs manage their entire operations from a single system. The platform combines multi-outlet management, POS, inventory, finance, customer ordering, reservations, and real-time operational dashboards into a unified web application. As a Full Stack Engineer, I contributed to the technical architecture, database design, and implementation of scalable application workflows to support diverse business types and long-term product growth.',
    role: 'Fullstack',
    year: '2026',
    image: '/images/projects/boss.png',
    imageAlt: 'Screenshot of BOSS business management platform',
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    repos: [],
    demoUrl: 'http://bossapp.id/',
    collaborators: ['pitokdf'],
    problem: 'Many businesses rely on separate tools for sales, inventory, finance, and customer management, making operations inefficient, costly, and difficult to scale.',
    decision: 'Designed and developed a modular, multi-tenant web platform with a unified data model and technical architecture that supports multiple business types while keeping operational data synchronized across owners, staff, and customers.',
    outcome: 'Successfully delivered a production-ready SaaS platform capable of supporting day-to-day operations across multiple business types.'
  },
  {
    featured: { index: '003', file: 'RUMAH JAHIT YAN', tags: ['Web App', 'Machine Learning'] },
    slug: 'rumah-jahit-yan',
    title: 'Rumah Jahit Yan',
    category: 'Academic',
    summary:
      "Developed as my final project at Politeknik Negeri Padang, this web-based order management system was built for my mother's tailoring business by digitizing its long-established workflow instead of replacing it. The application streamlines order tracking, customer management, and production progress while introducing an XGBoost Learning-to-Rank model to recommend work priorities based on historical decision patterns.",
    role: 'Fullstack',
    year: '2026',
    image: '/images/projects/rjy.png',
    imageAlt: 'Screenshot of Rumah Jahit Yan',
    stack: ['Learning to Rank', 'FastAPI', 'Nuxt.js'],
    repos: [{label: 'Source', url:'https://github.com/Baghaztra/tugas_akhir'}],
    demoUrl: 'http://yan.bgztra.my.id/',
    collaborators: [],
    problem:
      'Tailors depended on the business owner to know what orders they shoud proceed first. Whenever the owner was unavailable, production stalled because no one could confidently determine which order should be completed next.',
    decision:
      'Introduced an XGBoost Learning-to-Rank model to recommend production priorities based on historical decisions while preserving the existing business workflow.',
    outcome: 'Successfully demonstrated the feasibility of applying Learning-to-Rank to production prioritization, while revealing that user adoption—not technical implementation—was the biggest challenge in digitizing traditional small businesses.'
  },
  {
    slug: 'e-bio-x',
    title: 'E Bio X',
    category: 'Academic',
    summary:
      'Developed as my Capstone Project at Politeknik Negeri Padang. An e-learning web application that implements K-Means clustering and Decision Tree algorithms to analyze quiz performance, group students based on their learning progress, and support more personalized educational recommendations.',
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/ebx.png',
    imageAlt: 'Screenshot of E Bio X e-learning web application',
    stack: ['K-Means', 'Decision Tree', 'Nuxt.js', 'Flask'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Baghaztra/e-bio-x' },
      { label: 'Backend', url: 'https://github.com/Baghaztra/e-bio-x-backend' }
    ],
    demoUrl: 'https://ebiox.bgztra.my.id/',
    collaborators: [],
    problem: 'Traditional e-learning platforms treat every student the same, making it difficult for educators to identify different learning needs and provide targeted guidance.',
    decision: 'Integrated K-Means clustering and Decision Tree models to automatically group students and generate learning classifications from quiz results.',
    outcome: "Successfully demonstrated the application of machine learning techniques for personalized learning recommendations as part of my capstone project."
  },
  {
    slug: 'inaglob-website',
    title: 'Inaglob Website',
    category: 'Professional',
    summary:
      "Company profile website for PT. Inovasi Asiatech Global (Inaglob) to establish a stronger online presence and communicate the company's expertise in research, technology solutions, and digital training services. Built as a responsive, content-driven platform with an emphasis on maintainability, performance, and a professional user experience.",
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/ig.png',
    imageAlt: 'Screenshot of Inaglob company profile website',
    stack: ['Laravel', 'Hotwire/Turbo', 'Tailwind', 'MySQL'],
    repos: [],
    demoUrl: 'https://inaglob.com',
    collaborators: [],
    problem: "The company needed a professional digital presence that is just enough to showcase its services, expertise, and profile.",
    decision: "Build a company profile using Laravel and MySQL so it can deployed in shared hosting, no need VPS or any expensive services.",
    outcome: "Successfully delivered the website that show the company's online profile."
  },
  {
    slug: 'smkn2-batusangkar-tefa-app',
    title: 'SMKN2 Batusangkar TEFA App',
    category: 'Academic',
    summary:
      'A TEFA (Teaching Factory) management application for SMKN2 Batusangkar, built as part of a university community service program. It digitalized daily business operations by providing cashier, transaction, and report feature, helping school administrators manage their TEFA.',
    role: 'Backend',
    year: '2025',
    image: '/images/projects/smk.png',
    imageAlt: 'Screenshot of SMKN2 Batusangkar TEFA management application',
    stack: ['Next.js', 'Tailwind', 'Express.js', 'PostgreSQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Zephhyyrr/pengabdian-smk-2-batusangkar' }],
    demoUrl: 'https://pengabdian-smk-2-batusangkar-fqns.vercel.app/',
    collaborators: ['firman', 'redho'],
    problem: "The school's Teaching Factory activities relied on manual processes, making transaction management and reporting inefficient.",
    decision: "Built a web-based management system with cashier and reporting modules to streamline daily operations.",
    outcome: "Successfully deployed the application as part of the community service program, improving operational efficiency for the school's Teaching Factory."
  },
  {
    slug: 'pesona-simarasok',
    title: 'Pesona Simarasok',
    category: 'Academic',
    summary:
      'A multidisciplinary project as a proof of concept for cross-department collaboration at Politeknik Negeri Padang. The project brought together Tourism, English, Electrical Engineering, and Information Technology to create an integrated digital tourism ecosystem. Here I was responsible for developing the backend services that powered the website.',
    role: 'Backend',
    year: '2025',
    image: '/images/projects/pm.png',
    imageAlt: 'Screenshot of Pesona Simarasok tourism website',
    stack: ['Laravel', 'MySQL'],
    repos: [
      {label: 'Source', url: 'https://github.com/Baghaztra/TSA_Simarasok'},
      {label: 'HKI', url: 'https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'},
    ],
    demoUrl: 'https://simarasok.umkm-pnp.com/',
    collaborators: ['firman'],
    problem: "Almost all of department in Politeknik Negeri Padang that should complement one another never collaborate within the campus community.",
    decision: "Established a multidisciplinary development workflow where each department contributed its own domain expertise to a shared tourism platform.",
    outcome: "The collaboration is very much possible. As a student, I also gained new experiences and perspectives from other departments."
  },
  {
    slug: 'ignite-step',
    title: 'Ignite Step',
    category: 'Academic',
    summary:
      'The final project for a Microservices course at Politeknik Negeri Padang. This is an online shoe store built to demonstrate collaborative software development using a distributed system architecture. As the Project Lead, I was responsible for defining the overall system architecture, coordinating development, resolving technical challenges, and leading the team throughout implementation and final presentation. The project also explored modern backend technologies such as RabbitMQ, Redis, Docker, Elasticsearch, and API-based service communication.',
    role: 'Project Lead',
    year: '2025',
    image: '/images/projects/tk.png',
    imageAlt: 'Screenshot of Ignite Step shoe store catalog app',
    stack: ['Microservices', 'Docker', 'RabbitMQ', 'Redis', 'Elasticsearch'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra-Van-Ril/uas-toko-sepatu' }],
    demoUrl: null,
    collaborators: [],
    problem: "The project challenged students to collaboratively build a complete microservices application while managing independent services and team coordination.",
    decision: "Designed the system architecture, assigned service ownership across the team, and led both technical implementation and project execution.",
    outcome: "Successfully delivered a fully functional microservices application while demonstrating technical leadership and effective team collaboration."
  },
  {
    slug: 'clinic-app',
    title: 'Clinic App',
    category: 'Academic',
    summary:
      'Developed as the final project for a Mobile Programming course at Politeknik Negeri Padang, Clinic App is a Flutter-based mobile application for managing basic clinic operations, including patient registration and medical records. The project also served as an opportunity to explore Laravel Filament for rapidly building an administrative dashboard and backend management system, allowing faster development with a clean and maintainable architecture.',
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/cl.png',
    imageAlt: 'Screenshot of Clinic App mobile application',
    stack: ['Flutter', 'Laravel', 'Filament'],
    repos: [
      { label: 'Mobile App', url: 'https://github.com/Baghaztra/clinic_project' },
      { label: 'Backend', url: 'https://github.com/Baghaztra/backend-klinik' }
    ],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'pusat-event-politeknik',
    title: 'Pusat Event Politeknik',
    category: 'Academic',
    summary:
      "A website for Politeknik Negeri Padang's event center, developed as a final project for a semester 5 course. The platform allows verified student organizations and university administrators to publish events through a single portal, making academic, organizational, and community activities more accessible to the entire campus.",
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/pep.png',
    imageAlt: 'Screenshot of Pusat Event Politeknik website',
    stack: ['Vue.js', 'Flask', 'MySQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/PusatEventPnp' }],
    demoUrl: null,
    collaborators: [],
    problem: "Campus events were scattered across individual student organization social media accounts, making them difficult for students to discover and easy to miss.",
    decision: "Built a centralized platform where verified organizations and university staff could publish and manage campus events in one place.",
    outcome: "Successfully completed and presented the project as part of the course requirements, demonstrating the feasibility of a centralized campus event platform."
  },
  {
    slug: 'cybertech-pnp',
    title: 'Web Cybertech PNP',
    category: 'Organization',
    summary:
      "Initiated and led the development of Cybertech PNP's first official website while serving as Vice Chairman of the organization's IT division. The platform was proposed to establish a digital presence for the student organization and later evolved into the primary website for publishing activities and handling registrations for the Cybertech 2024 Hackathon. As Project Lead, I was responsible for defining the concept, designing the application architecture, coordinating development, and delivering the final product with the team's available technology stack at the time.",
    role: 'Project Lead',
    year: '2024',
    image: '/images/projects/ct.png',
    imageAlt: 'Screenshot of Cybertech PNP organizational website',
    stack: ['Laravel', 'MySQL', 'jQuery'],
    repos: [{ label: "Source", url:"https://github.com/Baghaztra/Cybertech"}],
    demoUrl: null,
    collaborators: ['pitokdf'],
    problem: "The organization lacked an official online platform to showcase its activities and manage event registrations.",
    decision: "Proposed and led the development of a centralized website that served both as the organization's profile and event registration portal.",
    outcome: "Successfully delivered the platform, which became Cybertech PNP's official website and supported registrations for the Cybertech 2024 Hackathon during my term."
  },
  {
    slug: 'cyber-troll',
    title: 'Cyber Troll',
    category: 'Organization',
    summary:
      "Developed for the 2024 Student Creativity Week at Politeknik Negeri Padang, Cyber Troll is a browser-based puzzle game featuring cyber-themed riddles, interactive challenges, and intentionally misleading mechanics inspired by classic internet troll games. I designed the overall gameplay concept and implemented the core game logic using Vanilla JavaScript. The project was created to provide an engaging interactive experience for visitors at the organization's exhibition booth.",
    role: 'Game Designer & JavaScript Developer',
    year: '2024',
    image: '/images/projects/cr.png',
    imageAlt: 'Screenshot of Cyber Riddle web game',
    stack: ['JavaScript', 'CSS'],
    repos: [{ label: 'Source', url: 'https://github.com/PitokDf/pkm2024' }],
    demoUrl: 'https://pitokdf.github.io/pkm2024/',
    collaborators: ['pitokdf']
  },
  {
    slug: 'nongki',
    title: 'Nongki',
    category: 'Hackathon',
    summary:
      "Developed during the 24-hour FireTech 2024 Hackathon at Andalas University, Nongki is a community-driven platform for discovering hangout spots around campus that are often overlooked by traditional map services. Instead of focusing only on commercial venues such as cafés, the platform encourages users to share and review hidden places—including study corners, public spaces, scenic viewpoints, or other informal gathering spots—making it easier for students to find places that fit different activities and preferences. As a Backend Developer, I contributed to the implementation of the platform's core services and APIs.",
    role: 'Backend',
    year: '2024',
    image: '/images/projects/nk.png',
    imageAlt: 'Screenshot of Nongki hangout spots web application',
    stack: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/Nongki' }],
    demoUrl: null,
    collaborators: ['pitokdf','topan'],
    problem: "Students often relied on word of mouth to discover good places to study or hang out, especially locations that were not well represented on conventional map services.",
    decision: "Built a community-driven platform where users could discover, review, and share both commercial and non-commercial hangout spots.",
    outcome: "Successfully delivered a working hackathon prototype within 24 hours, demonstrating rapid product development under tight time constraints."
  },
  {
    slug: 'bro-rimbo',
    title: 'Bro Rimbo',
    category: 'Professional',
    summary:
      'Contributed as a backend developer for an internal employee information system project for the Forestry Department of West Sumatera. The application digitized administrative processes such as leave requests and periodic salary increment management, replacing manual workflows with a centralized web-based system. This was my first professional software development project, where I collaborated with a small development team to implement backend features and business logic.',
    role: 'Backend',
    year: '2024',
    image: '/images/projects/br.png',
    imageAlt: 'Screenshot of Bro Rimbo employee information system',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    repos: [],
    demoUrl: null,
    collaborators: [],
    problem: "Administrative processes for leave requests and periodic salary increments relied on manual workflows, making them time-consuming and difficult to manage.",
    decision: "Implemented backend services to digitize employee administration and streamline internal business processes.",
    outcome: "Successfully contributed to the delivery of an internal government application while gaining experience working on a real-world client project."
  },
  {
    slug: 'kamikaze-challenger',
    title: 'Kamikaze Challenger',
    category: 'Exploration',
    summary:
      'Built purely out of curiosity to explore Unity and game development, Kamikaze Challenger is a simple 2D endless shooter where players defend a warship against waves of incoming kamikaze aircraft. Nearly every asset was created from scratch, including hand-drawn sprites and improvised sound effects recorded with the help of equally bored friends.',
    role: 'Solo Developer',
    year: '2024',
    image: '/images/projects/kc.png',
    imageAlt: 'Screenshot of Kamikaze Challenger 2D shooting game',
    stack: ['Unity', 'C#'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/KamikazeChallenger' }],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'dice',
    title: 'DICE',
    category: 'Exploration',
    summary:
      'Developed as a collaborative project, DICE is a browser-based collection of dice-themed mini games built entirely with Vanilla JavaScript. The project explored fundamental web development concepts such as DOM manipulation, event-driven programming, animations, and game logic through a series of lightweight interactive experiences. As the team leader, I coordinated development while contributing to the JavaScript implementation and overall project direction.',
    role: 'Project Lead',
    year: '2024',
    image: '/images/projects/dc.png',
    imageAlt: 'Screenshot of DICE dice-based games website',
    stack: ['JavaScript', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/DICE' }],
    demoUrl: 'https://baghaztra.github.io/DICE/',
    collaborators: ['topan','pitokdf'],
    problem: "The project aimed to strengthen practical JavaScript skills through interactive browser-based games instead of conventional web applications.",
    decision: "Designed multiple dice-based mini games using Vanilla JavaScript with a focus on client-side logic and user interaction.",
    outcome: "Successfully delivered a collection of playable web games while strengthening teamwork and core JavaScript development skill."
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured!.index.localeCompare(b.featured!.index));

export const archiveProjects = projects

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getCollaborators = (p: Project): Person[] =>
  p.collaborators.map((k) => people[k]).filter((person): person is Person => Boolean(person));
