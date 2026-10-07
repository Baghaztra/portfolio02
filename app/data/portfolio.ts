export interface FeaturedProject {
  index: string;
  name: string;
  file: string;
  purpose: string;
  tags: string[];
  year: string;
}

export interface ProjectRepo {
  label: string;
  url: string;
}

// ponytail: archive entries reuse portfolio02 description verbatim — no
// invented problem/role/decision claims. Full decision write-ups ship with
// the 4 featured projects once their sources land.
export interface ProjectDetail {
  slug: string;
  title: string;
  purpose: string;
  image: string;
  imageAlt: string;
  categories: string[];
  stack: string[];
  repos: ProjectRepo[];
  demoUrl: string | null;
}

export interface GotoLink {
  title: string;
  desc: string;
  to?: string;
  href?: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: 'e-bio-x',
    title: 'E Bio X',
    purpose:
      'An e-learning web application that implements K-Means clustering and Decision Tree algorithms to group students based on their quiz results.',
    image: '/images/projects/ebx.png',
    imageAlt: 'Screenshot of E Bio X e-learning web application',
    categories: ['Fullstack', 'Web', 'Machine Learning'],
    stack: ['Nuxt.js', 'Flask', 'Tailwind', 'MySQL', 'Scikit-learn'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Baghaztra/e-bio-x' },
      { label: 'Backend', url: 'https://github.com/Baghaztra/e-bio-x-backend' }
    ],
    demoUrl: 'https://ebiox.bgztra.my.id/'
  },
  {
    slug: 'inaglob-website',
    title: 'Inaglob Website',
    purpose:
      'Company profile website for PT. Inovasi Asiatech Global (Inaglob), a tech company that focuses on research, tech solutions, and digital training services.',
    image: '/images/projects/ig.png',
    imageAlt: 'Screenshot of Inaglob company profile website',
    categories: ['Fullstack', 'Web'],
    stack: ['Laravel', 'Hotwire/Turbo', 'Tailwind', 'MySQL'],
    repos: [],
    demoUrl: 'https://inaglob.com'
  },
  {
    slug: 'smkn2-batusangkar-tefa-app',
    title: 'SMKN2 Batusangkar TEFA App',
    purpose:
      'A TEFA (Teaching Factory) management application for SMKN2 Batusangkar, built as part of a university community service program. It provides a cashier system and reporting features for school administrators.',
    image: '/images/projects/smk.png',
    imageAlt: 'Screenshot of SMKN2 Batusangkar TEFA management application',
    categories: ['Frontend', 'Web'],
    stack: ['Nuxt', 'Tailwind', 'Express', 'PostgreSQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Zephhyyrr/pengabdian-smk-2-batusangkar' }],
    demoUrl: 'https://pengabdian-smk-2-batusangkar-fqns.vercel.app/'
  },
  {
    slug: 'pesona-simarasok',
    title: 'Pesona Simarasok',
    purpose:
      'Backend developer for a tourism destination website called Simarasok, built with Laravel as part of the Talent Scouting Academy.',
    image: '/images/projects/pm.png',
    imageAlt: 'Screenshot of Pesona Simarasok tourism website',
    categories: ['Backend', 'Web'],
    stack: ['Laravel', 'MySQL'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/TSA_Simarasok' }],
    demoUrl: 'https://simarasok.umkm-pnp.com/'
  },
  {
    slug: 'boss-business-one-stop-system',
    title: 'BOSS (Business One Stop System)',
    purpose:
      'A business management platform for MSMEs that allows business owners to open outlets, showcase their products and services, and manage both online and cashier-based queues. Currently under development.',
    image: '/images/projects/boss.png',
    imageAlt: 'Screenshot of BOSS business management platform',
    categories: ['Frontend', 'Web'],
    stack: ['Nuxt.js', 'Nuxt UI', 'Express.js', 'PostgreSQL', 'Midtrans', 'RabbitMQ'],
    repos: [],
    demoUrl: 'http://bossapp.id/'
  },
  {
    slug: 'ignite-step',
    title: 'Ignite Step',
    purpose:
      'An online shoe store catalog app that allows users to browse and purchase shoes. Served as project leader, frontend developer, and DevOps engineer.',
    image: '/images/projects/tk.png',
    imageAlt: 'Screenshot of Ignite Step shoe store catalog app',
    categories: ['Fullstack', 'Web'],
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
    demoUrl: null
  },
  {
    slug: 'cybertech-pnp',
    title: 'Cybertech PNP',
    purpose:
      'Initiated and led the development of an organizational website for Cybertech PNP. The platform allows users to view event listings and register for available events.',
    image: '/images/projects/ct.png',
    imageAlt: 'Screenshot of Cybertech PNP organizational website',
    categories: ['Backend', 'Web'],
    stack: ['Laravel', 'MySQL', 'Vite', 'JQuery'],
    repos: [],
    demoUrl: 'https://cybertechpnp.com'
  },
  {
    slug: 'cyber-hack-riddle',
    title: 'Cyber Hack Riddle',
    purpose:
      'A web-based riddle game with cyber-themed troll puzzles, created for the 2024 Student Creativity Week at Politeknik Negeri Padang.',
    image: '/images/projects/cr.png',
    imageAlt: 'Screenshot of Cyber Hack Riddle web game',
    categories: ['Frontend Logic', 'Web', 'Game'],
    stack: ['Vanilla JS', 'CSS'],
    repos: [{ label: 'Source', url: 'https://github.com/PitokDf/pkm2024' }],
    demoUrl: 'https://pitokdf.github.io/pkm2024/'
  },
  {
    slug: 'clinic-app',
    title: 'Clinic App',
    purpose:
      'Mobile application built with Flutter as a final project for the Mobile Programming course. This app helps manage basic clinic services such as patient registration and medical records.',
    image: '/images/projects/cl.png',
    imageAlt: 'Screenshot of Clinic App mobile application',
    categories: ['Fullstack', 'Mobile'],
    stack: ['Flutter', 'Laravel', 'Filament'],
    repos: [
      { label: 'Mobile App', url: 'https://github.com/Baghaztra/clinic_project' },
      { label: 'Backend', url: 'https://github.com/Baghaztra/backend-klinik' }
    ],
    demoUrl: null
  },
  {
    slug: 'spi-pnp',
    title: 'SPI - PNP',
    purpose:
      'Web application developed for Politeknik Negeri Padang to manage internal reports and document archives within the institution.',
    image: '/images/projects/spi.png',
    imageAlt: 'Screenshot of SPI PNP internal reporting web application',
    categories: ['Fullstack', 'Web'],
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/SPI-PNP' }],
    demoUrl: null
  },
  {
    slug: 'pt-rumpun-alam-indonesia-website',
    title: 'PT. Rumpun Alam Indonesia Website',
    purpose:
      'Static Corporate website for PT. Rumpun Alam Indonesia, a spice export company from West Sumatera.',
    image: '/images/projects/rai.png',
    imageAlt: 'Screenshot of PT. Rumpun Alam Indonesia corporate website',
    categories: ['Frontend', 'Web'],
    stack: ['Vue.js', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Zephhyyrr/PT.RAI-company-profile' }],
    demoUrl: 'https://rumpunalamindonesia.org/'
  },
  {
    slug: 'bro-rimbo',
    title: 'Bro Rimbo',
    purpose:
      'Backend programmer for an employee information system project for the Forestry Department of West Sumatra, focusing on leave management feature improvements.',
    image: '/images/projects/br.png',
    imageAlt: 'Screenshot of Bro Rimbo employee information system',
    categories: ['Backend', 'Web'],
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    repos: [],
    demoUrl: null
  },
  {
    slug: 'flight-passenger-predictor',
    title: 'Flight Passenger Predictor',
    purpose:
      'Machine learning project to predict airplane passengers at several airports using official data from BPS.',
    image: '/images/projects/ml.png',
    imageAlt: 'Screenshot of Flight Passenger Predictor machine learning project',
    categories: ['Machine Learning', 'Fullstack', 'Web'],
    stack: ['Scikit-learn', 'Flask', 'XGBoost'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/ProjectAkhirML' }],
    demoUrl: null
  },
  {
    slug: 'pusat-event-politeknik',
    title: 'Pusat Event Politeknik',
    purpose:
      "A website for Politeknik Negeri Padang's event center, developed as a final project for a semester 5 course.",
    image: '/images/projects/pep.png',
    imageAlt: 'Screenshot of Pusat Event Politeknik website',
    categories: ['Fullstack', 'Web'],
    stack: ['Vue.js', 'Flask', 'MySQL', 'Bootstrap', 'Google OAuth'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/PusatEventPnp' }],
    demoUrl: null
  },
  {
    slug: 'kamikaze-challenger',
    title: 'Kamikaze Challenger',
    purpose:
      'A simple 2D endless shooting game where players control a warship fending off attacks from kamikaze planes. Developed independently with Unity for PC.',
    image: '/images/projects/kc.png',
    imageAlt: 'Screenshot of Kamikaze Challenger 2D shooting game',
    categories: ['Game'],
    stack: ['Unity', 'C#'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/KamikazeChallenger' }],
    demoUrl: null
  },
  {
    slug: 'dice',
    title: 'DICE',
    purpose:
      'Team leader and JavaScript programmer for a website featuring various dice-based games made with JavaScript.',
    image: '/images/projects/dc.png',
    imageAlt: 'Screenshot of DICE dice-based games website',
    categories: ['Frontend Logic', 'Game', 'Web'],
    stack: ['Vanilla JS', 'bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/DICE' }],
    demoUrl: 'https://baghaztra.github.io/DICE/'
  },
  {
    slug: 'nongki',
    title: 'Nongki',
    purpose:
      'Web application to discover hangout spots like cafes, workspaces, and more. Developed for the FireTech2024 hackathon at Andalas University.',
    image: '/images/projects/nk.png',
    imageAlt: 'Screenshot of Nongki hangout spots web application',
    categories: ['Fullstack', 'Web'],
    stack: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    repos: [{ label: 'Source', url: 'https://github.com/Baghaztra/Nongki' }],
    demoUrl: null
  }
];

export const profile = {
  name: 'Baghaztra Van Ril',
  role: 'Software Engineer — web apps, backend & APIs, AI workflows, IoT',
  location: 'Padang, West Sumatra, Indonesia',
  intro:
    'I build practical systems: order-management web apps with ML-ranked work queues, local AI monitoring on edge devices, API services, and ESP32-based monitoring and control.',
  image: '/images/profile.jpg',
  imageAlt: 'Portrait of Baghaztra Van Ril',
  github: 'https://github.com/Baghaztra',
  linkedin: 'https://www.linkedin.com/in/baghaztra-van-ril-8011b0294'
};

export const featuredProjects: FeaturedProject[] = [
  {
    index: '001',
    name: 'Rumah Jahit Yan',
    file: 'RUMAH-JAHIT-YAN.EXE',
    purpose:
      'Order-management web app for a tailoring business, with XGBoost Learning to Rank for work-priority ranking.',
    tags: ['WEB', 'XGBOOST', 'RANKING'],
    year: '2025'
  },
  {
    index: '002',
    name: 'ROSA',
    file: 'ROSA.EXE',
    purpose:
      'AI-powered monitoring and control system, including ROSA Edge local inference on Jetson devices.',
    tags: ['AI', 'EDGE', 'JETSON'],
    year: '2025'
  },
  {
    index: '003',
    name: 'Instagram Comments Service',
    file: 'IG-COMMENTS.EXE',
    purpose:
      'FastAPI-based service for collecting Instagram comments at scale.',
    tags: ['FASTAPI', 'API'],
    year: '2025'
  }
];

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
