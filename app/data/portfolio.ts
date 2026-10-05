export interface FeaturedProject {
  index: string;
  name: string;
  file: string;
  purpose: string;
  tags: string[];
  year: string;
}

export interface GotoLink {
  title: string;
  desc: string;
  to?: string;
  href?: string;
}

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
