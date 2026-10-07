export interface Person {
  name: string;
  site: string;
}

export interface ProjectLink {
  label: string; // "Frontend", "Backend", "Mobile", "Source"
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  featured?: { index: string; file: string; tags: string[] };
  image: string | null; // null = aset belum ada, modal skip gambar
  imageAlt: string;
  stack: string[];
  repos: ProjectLink[]; // 1 proyek = 1 entri, banyak repo
  demoUrl: string | null;
  collaborators: string[]; // key dari `people`
}

export interface GotoLink {
  title: string;
  desc: string;
  to?: string;
  href?: string;
}

// Registry rekan: ubah sekali, berlaku di semua proyek
export const people: Record<string, Person> = {
  zephhyyrr: { name: 'Zephhyyrr', site: 'https://github.com/Zephhyyrr' },
  pitokdf: { name: 'PitokDf', site: 'https://github.com/PitokDf' }
};

export const projects: Project[] = [
  {
    slug: 'rumah-jahit-yan',
    title: 'Rumah Jahit Yan',
    summary:
      'My final project in Politeknik Negeri Padang. An order-management web app for a tailoring business, using XGBoost Rank for work-priority ranking.',
    role: 'Fullstack',
    year: '2026',
    featured: { index: '001', file: 'RUMAH JAHIT YAN', tags: ['Web App', 'Machine Learning'] },
    image: '/images/projects/rjy.png',
    imageAlt: 'Screenshot of Rumah Jahit Yan',
    stack: ['XGBoost', 'FastAPI', 'NUXT', 'Fabric.js'],
    repos: [{label: 'Source', url:'https://github.com/Baghaztra/tugas_akhir'}],
    demoUrl: 'http://yan.bgztra.my.id/',
    collaborators: []
  },
  {
    slug: 'rosa',
    title: 'ROSA',
    summary:
      'AI-powered monitoring and control system. A web based chatbot, part of ROSA AI project of Halcom.',
    role: 'Web and AI Engineer',
    year: '2026',
    featured: { index: '002', file: 'ROSA WEB', tags: ['AI', 'RAG', 'Web'] },
    image: '/images/projects/rosa.png',
    imageAlt: 'Screenshot of ROSA',
    stack: ['FastAPI', 'Grafana'],
    repos: [],
    demoUrl: 'https://rosa.halcom.co.id/',
    collaborators: []
  },
  {
    slug: 'e-bio-x',
    title: 'E Bio X',
    summary:
      'My Capstone Project at Politeknik Negeri Padang. An e-learning web application that implements K-Means clustering and Decision Tree algorithms to group students based on their quiz results.',
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/ebx.png',
    imageAlt: 'Screenshot of E Bio X e-learning web application',
    stack: ['Nuxt.js', 'Flask', 'Tailwind', 'MySQL', 'Scikit-learn'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Baghaztra/e-bio-x' },
      { label: 'Backend', url: 'https://github.com/Baghaztra/e-bio-x-backend' }
    ],
    demoUrl: 'https://ebiox.bgztra.my.id/',
    collaborators: []
  },
  {
    slug: 'inaglob-website',
    title: 'Inaglob Website',
    summary:
      'Company profile website for PT. Inovasi Asiatech Global (Inaglob), a tech company that focuses on research, tech solutions, and digital training services.',
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/ig.png',
    imageAlt: 'Screenshot of Inaglob company profile website',
    stack: ['Laravel', 'Hotwire/Turbo', 'Tailwind', 'MySQL'],
    repos: [],
    demoUrl: 'https://inaglob.com',
    collaborators: []
  },
  {
    slug: 'smkn2-batusangkar-tefa-app',
    title: 'SMKN2 Batusangkar TEFA App',
    summary:
      'A TEFA (Teaching Factory) management application for SMKN2 Batusangkar, built as part of a university community service program. It provides a cashier system and reporting features for school administrators.',
    role: 'Backend',
    year: '2025',
    image: '/images/projects/smk.png',
    imageAlt: 'Screenshot of SMKN2 Batusangkar TEFA management application',
    stack: ['NEXT', 'Tailwind', 'Express', 'PostgreSQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Zephhyyrr/pengabdian-smk-2-batusangkar' }],
    demoUrl: 'https://pengabdian-smk-2-batusangkar-fqns.vercel.app/',
    collaborators: ['zephhyyrr']
  },
  {
    slug: 'pesona-simarasok',
    title: 'Pesona Simarasok',
    summary:
      'Backend developer for a tourism destination website called Simarasok, built with Laravel as part of the Talent Scouting Academy.',
    role: 'Backend',
    year: '2025',
    image: '/images/projects/pm.png',
    imageAlt: 'Screenshot of Pesona Simarasok tourism website',
    stack: ['Laravel', 'MySQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/TSA_Simarasok' }],
    demoUrl: 'https://simarasok.umkm-pnp.com/',
    collaborators: []
  },
  {
    slug: 'boss-business-one-stop-system',
    title: 'BOSS (Business One Stop System)',
    summary:
      'A business management platform for MSMEs that allows business owners to open outlets, showcase their products and services, and manage both online and cashier-based queues. Currently under development.',
    role: 'Fullstack',
    featured: { index: '003', file: 'BOSSAPP', tags: ['Ecommerce'] },
    year: '2026',
    image: '/images/projects/boss.png',
    imageAlt: 'Screenshot of BOSS business management platform',
    stack: ['NEXT', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    repos: [],
    demoUrl: 'http://bossapp.id/',
    collaborators: ['pitokdf']
  },
  {
    slug: 'ignite-step',
    title: 'Ignite Step',
    summary:
      'One of the project I build as a student in Politeknik Negeri Padang. An online shoe store catalog app that allows users to browse and purchase shoes. Served as project leader, frontend developer, and DevOps engineer. This project meant to be a test of skill in microservices couse.',
    role: 'Project Lead',
    year: '2025',
    image: '/images/projects/tk.png',
    imageAlt: 'Screenshot of Ignite Step shoe store catalog app',
    stack: [
      'Nuxt.js',
      'Tailwind',
      'Express.js',
      'Midtrans',
      'Google OAuth',
      'Redis',
      'RabbitMQ',
      'Elasticsearch',
      'PostgreSQL',
      'Nginx',
      'Docker'
    ],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra-Van-Ril/uas-toko-sepatu' }],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'cybertech-pnp',
    title: 'Cybertech PNP',
    summary:
      'Initiated and led the development of an organizational website for Cybertech PNP. The platform allows users to view event listings and register for available events.',
    role: 'Project Lead',
    year: '2025',
    image: '/images/projects/ct.png',
    imageAlt: 'Screenshot of Cybertech PNP organizational website',
    stack: ['Laravel', 'MySQL', 'Vite', 'JQuery'],
    repos: [],
    demoUrl: 'https://cybertechpnp.com',
    collaborators: []
  },
  {
    slug: 'cyber-hack-troll',
    title: 'Cyber Hack Troll',
    summary:
      'A web-based riddle/troll game with cyber-themed puzzles, created for the 2024 Student Creativity Week at Politeknik Negeri Padang.',
    role: 'Fullstack',
    year: '2024',
    image: '/images/projects/cr.png',
    imageAlt: 'Screenshot of Cyber Hack Riddle web game',
    stack: ['Vanilla JS', 'CSS'],
    repos: [{ label: 'Source', url: 'https://github.com/PitokDf/pkm2024' }],
    demoUrl: 'https://pitokdf.github.io/pkm2024/',
    collaborators: ['pitokdf']
  },
  {
    slug: 'clinic-app',
    title: 'Clinic App',
    summary:
      'Mobile application built with Flutter as a final project for the Mobile Programming course. This app helps manage basic clinic services such as patient registration and medical records.',
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
    slug: 'spi-pnp',
    title: 'SPI - PNP',
    summary:
      'Web application developed for Politeknik Negeri Padang to manage internal reports and document archives within the institution.',
    role: 'Backend',
    year: '2025',
    image: '/images/projects/spi.png',
    imageAlt: 'Screenshot of SPI PNP internal reporting web application',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/SPI-PNP' }],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'pt-rumpun-alam-indonesia-website',
    title: 'PT. Rumpun Alam Indonesia Website',
    summary:
      'Static Corporate website for PT. Rumpun Alam Indonesia, a spice export company from West Sumatera.',
    role: 'Helper',
    year: '2024',
    image: '/images/projects/rai.png',
    imageAlt: 'Screenshot of PT. Rumpun Alam Indonesia corporate website',
    stack: ['Vue.js', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Zephhyyrr/PT.RAI-company-profile' }],
    demoUrl: 'https://rumpunalamindonesia.org/',
    collaborators: ['zephhyyrr']
  },
  {
    slug: 'bro-rimbo',
    title: 'Bro Rimbo',
    summary:
      'Backend programmer for an employee information system project for the Forestry Department of West Sumatra, focusing on leave management feature improvements.',
    role: 'Backend',
    year: '2024',
    image: '/images/projects/br.png',
    imageAlt: 'Screenshot of Bro Rimbo employee information system',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    repos: [],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'flight-passenger-predictor',
    title: 'Flight Passenger Predictor',
    summary:
      'My first machine learning project, to predict airplane passengers at several airports using official data from BPS.',
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/ml.png',
    imageAlt: 'Screenshot of Flight Passenger Predictor machine learning project',
    stack: ['Scikit-learn', 'Flask', 'XGBoost'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/ProjectAkhirML' }],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'pusat-event-politeknik',
    title: 'Pusat Event Politeknik',
    summary:
      "A website for Politeknik Negeri Padang's event center, developed as a final project for a semester 5 course.",
    role: 'Fullstack',
    year: '2025',
    image: '/images/projects/pep.png',
    imageAlt: 'Screenshot of Pusat Event Politeknik website',
    stack: ['Vue.js', 'Flask', 'MySQL', 'Bootstrap', 'Google OAuth'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/PusatEventPnp' }],
    demoUrl: null,
    collaborators: []
  },
  {
    slug: 'kamikaze-challenger',
    title: 'Kamikaze Challenger',
    summary:
      'A simple 2D endless shooting game where players control a warship fending off attacks from kamikaze planes. Developed independently with Unity for PC.',
    role: 'Fullstack',
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
    summary:
      'Team leader and JavaScript programmer for a website featuring various dice-based games made with JavaScript.',
    role: 'Fullstack',
    year: '2024',
    image: '/images/projects/dc.png',
    imageAlt: 'Screenshot of DICE dice-based games website',
    stack: ['Vanilla JS', 'bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/DICE' }],
    demoUrl: 'https://baghaztra.github.io/DICE/',
    collaborators: []
  },
  {
    slug: 'nongki',
    title: 'Nongki',
    summary:
      'Web application to discover hangout spots like cafes, workspaces, and more. Developed for the FireTech2024 hackathon at Andalas University.',
    role: 'Backend',
    year: '2024',
    image: '/images/projects/nk.png',
    imageAlt: 'Screenshot of Nongki hangout spots web application',
    stack: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/Nongki' }],
    demoUrl: null,
    collaborators: []
  }
];

// Turunan: tidak perlu data terpisah
export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured!.index.localeCompare(b.featured!.index));

export const archiveProjects = projects;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getCollaborators = (p: Project): Person[] =>
  p.collaborators.map((k) => people[k]).filter((person): person is Person => Boolean(person));

export const profile = {
  name: 'Baghaztra Van Ril',
  role: 'Software Engineer — web apps, backend & APIs, AI workflows, IoT',
  location: 'Padang, West Sumatra, Indonesia',
  intro:
    'I build practical systems: order-management web apps with ML-ranked work queues, local AI monitoring on edge devices, API services, and ESP32-based monitoring and control.',
  image: '/images/profile.jpeg',
  imageAlt: 'Portrait of Baghaztra Van Ril',
  github: 'https://github.com/Baghaztra',
  linkedin: 'https://www.linkedin.com/in/baghaztra-van-ril-8011b0294'
};

export const homeGotoLinks: GotoLink[] = [
  {
    title: '> open /projects',
    desc: 'Full project directory — problem, role, technical decisions, and outcomes.',
    to: '/projects'
  },
  {
    title: '> open /journey',
    desc: 'Background, milestones, education, and selected certificates.',
    to: '/journey'
  },
  {
    title: '> GitHub — @Baghaztra',
    desc: 'Source code for featured and archived projects.',
    href: 'https://github.com/Baghaztra'
  },
  {
    title: '> LinkedIn — Baghaztra Van Ril',
    desc: 'Direct contact path for recruiters, collaborators, and clients.',
    href: 'https://www.linkedin.com/in/baghaztra-van-ril-8011b0294'
  }
];
