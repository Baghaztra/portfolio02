export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Frontend", "Backend"],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    repository: "https://github.com/username/ecommerce-website",
    demoUrl: "https://ecommerce-demo.example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Frontend", "Mobile"],
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    repository: "https://github.com/username/task-management-app",
    demoUrl: "https://task-app-demo.example.com",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A mobile-responsive weather application that provides real-time forecasts based on location.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Frontend", "API Integration"],
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherAPI"],
    repository: "https://github.com/username/weather-app",
    demoUrl: "https://weather-forecast-demo.example.com",
  },
  {
    id: 4,
    title: "Blogging Platform",
    description:
      "A content management system for bloggers with markdown support and image optimization.",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Backend", "CMS"],
    technologies: ["Django", "PostgreSQL", "AWS S3", "Bootstrap"],
    repository: "https://github.com/username/blog-platform",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and progress.",
    image:
      "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Mobile", "UI/UX"],
    technologies: ["React Native", "GraphQL", "MongoDB", "Expo"],
    repository: "https://github.com/username/fitness-tracker",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills (this website).",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Frontend", "UI/UX"],
    technologies: ["Nuxt.js", "Tailwind CSS", "Netlify"],
    repository: "https://github.com/username/portfolio-website",
    demoUrl: "https://portfolio-demo.example.com",
  },
];

export const skills = [
  {
    name: 'Programming Languages',
    icon: 'mdi:language-cpp',
    skills: ['Java', 'C++', 'PHP', 'Python', 'JavaScript', 'Golang']
  },
  {
    name: 'Frameworks',
    icon: 'mdi:application-braces',
    skills: ['Laravel', 'Flask', 'Vue.js', 'Nuxt.js', 'Next.js', 'Flutter']
  },
  {
    name: 'CSS Frameworks',
    icon: 'mdi:palette-swatch',
    skills: ['Bootstrap', 'Tailwind CSS']
  },
  {
    name: 'Database / Backend Service',
    icon: 'mdi:database',
    skills: ['MySQL', 'MongoDB', 'Firebase']
  },
  {
    name: 'Tools',
    icon: 'mdi:toolbox',
    skills: ['Git', 'Figma', 'Postman', 'Google Developer Console']
  }
]

export const about = {
  name: "Baghaztra",
  fullname: "Baghaztra Van Ril",
  role: "Aspiring Software Developer",
  location: "Padang, West Sumatra",
  email: "baghaztra21@gmail.com",
  bio: "An Information Technology student majoring in Software Engineering Technology, with a particular interest in programming logic. Proficient in OOP concepts, web development, and managing databases. Also passionate about game development.",
  education: [
    {
      program: "Software Engineering",
      major: "Information Technology",
      institution: "Politeknik Negeri Padang",
      year: "August, 2022 - Present",
    },
  ],
  experience: [
    {
      position: "Vice Head of IT Division",
      company: "UKM Cybertech PNP",
      period: "March 2024 - January 2025",
      description:
        "Acted as a substitute for the general chairperson when unavailable. Coordinated division heads in conducting various IT-related activities. Developed and led the implementation of the organization's first website: https://cybertechpnp.com",
    },
    {
      position: "Backend Developer",
      company: "CV. Sri Indera Bupala Organizer (SIBOZ)",
      period: "January 2024 - May 2024",
      description:
        "Participated in IT projects offered to CV. Sri Indera Bupala Organizer as a backend developer. Contributed to the development of the Leave and Salary Increment Information System for the West Sumatra Forestry Service as a Laravel backend developer.",
    },
    {
      position: "Open Recruitment Chairperson",
      company: "UKM Cybertech PNP",
      period: "May 2023 - March 2024",
      description:
        "Organized and managed the recruitment process for new members. Successfully increased membership by 58 individuals as new members of UKM Cybertech.",
    },
  ],
};
