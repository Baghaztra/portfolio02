export interface JourneyItem {
  title: string;
  period: string;
  desc: string;
  tags: string[];
}

export const journeyItems: JourneyItem[] = [
  {
    title: 'Software Developer — Halcom Padang',
    period: 'Apr 2026 – Oct 2026',
    desc: 'Building backend services and AI-powered features. Learning inference, RAG, and LLMs on the job.',
    tags: ['FastAPI', 'Docker', 'LLM', 'RAG', 'Inference']
  },
  {
    title: 'Graduated D4 Software Engineering Technology — PNP',
    period: 'Aug 2026 · GPA 3.93 · Best Graduate',
    desc: 'Closed out four years of study with best-graduate recognition.',
    tags: []
  },
  {
    title: 'Started Freelance — Halcom Padang',
    period: 'Apr 2026 · Software Developer',
    desc: 'Building backend services. Started going deep on LLMs, inference, and RAG.',
    tags: ['FastAPI', 'Docker']
  },
  {
    title: 'Finished Internship — PT Teknologi Mulia Sejahtera Cemerlang',
    period: 'Dec 2025',
    desc: 'Built full-stack web features. Applied self-taught Vue and Nuxt.',
    tags: ['Laravel', 'Vue', 'Nuxt']
  },
  {
    title: 'Started Internship — PT Teknologi Mulia Sejahtera Cemerlang',
    period: 'Aug 2025',
    desc: 'Joined the web team on a Laravel and Vue stack.',
    tags: ['Laravel', 'Vue']
  },
  {
    title: 'Started TRPL — Politeknik Negeri Padang',
    period: 'Aug 2022',
    desc: 'Backend, mobile, and container fundamentals. Learned Vue and Nuxt self-taught.',
    tags: ['Java', 'Laravel', 'Kotlin', 'Flutter', 'Docker', 'Vue', 'Nuxt']
  }
];
