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
