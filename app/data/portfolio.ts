export interface GotoLink {
  title: string;
  desc: string;
  to?: string;
  href?: string;
}

export const profile = {
  name: 'Baghaztra Van Ril',
  role: 'Software Engineer Probably',
  location: 'Padang, West Sumatra, Indonesia',
  intro: 'I build things, break things (hehe), and occasionally (hopefully) make them useful. Even if they probably didn’t need to exist. Web apps, backend systems, APIs, local AI, IoT, and whatever side quest comes next.',
  image: '/images/profile.jpeg',
  imageAlt: 'A self-drawn cartoon portrait of me',
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
