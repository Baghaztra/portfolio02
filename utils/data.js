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

export const projects = [
  {
    id: 2,
    title: "Kamikaze Challenger",
    description:
      "A simple 2D endless shooting game where players control a warship fending off attacks from kamikaze planes. Developed independently with Unity for PC.",
    image: "images/kc.png", 
    categories: ["Fullstack", "Game"],
    technologies: ["Unity", "C#"],
    repository: "https://github.com/Baghaztra/KamikazeChallenger",
    demoUrl: null,
  },
  {
    id: 3,
    title: "DICE",
    description:
      "Team leader and JavaScript programmer for a website featuring various dice-based games made with JavaScript.",
    image: "images/dc.png",
    categories: ["Backend", "Game"],
    technologies: ["Vanilla JS", "bootstrap"],
    repository: "https://github.com/Baghaztra/DICE",
    demoUrl: "https://baghaztra.github.io/DICE/",
  },
  {
    id: 4,
    title: "Pesona Simarasok",
    description:
      "Backend developer for a tourism destination website called Simarasok, built with Laravel as part of the Talent Scouting Academy program on campus.",
    image: "images/pm.png",
    categories: ["Backend"],
    technologies: ["Laravel", "MySQL"],
    repository: "https://github.com/Baghaztra/TSA_Simarasok",
    demoUrl: "https://simarasok.umkm-pnp.com/",
  },
  {
    id: 5,
    title: "Nongki",
    description:
      "Backend/fullstack developer for a web application to discover hangout spots like cafes, workspaces, and more. Developed for the FireTech2024 hackathon at Andalas University.",
    image: "images/nk.png",
    categories: ["Backend", "Fullstack"],
    technologies: ["Laravel", "MySQL", "JQUery", "Bootstrap"],
    repository: "https://github.com/Baghaztra/Nongki",
    demoUrl: null,
  },
  {
    id: 6,
    title: "Bro Rimbo",
    description:
      "Backend programmer for an employee information system project for the Forestry Department of West Sumatra, focusing on leave management feature improvements.",
    image: "images/br.png",
    categories: ["Backend"],
    technologies: ["Laravel", "MySQL"],
    repository: null,
    demoUrl: null,
  },
  {
    id: 7,
    title: "Flight Passenger Predictor",
    description:
      "Machine learning project to predict airplane passengers at several airports using official data from Indonesia's BPS (Central Bureau of Statistics). Built with Flask for the web app and scikit-learn, XGBoost for model training.",
    image: "images/ml.png",
    categories: ["Machine Learning", "Fullstack"],
    technologies: ["Scikit-learn", "Flask", "XGBoost"],
    repository: "https://github.com/Baghaztra/ProjectAkhirML",
    demoUrl: null,
  },
  {
    id: 8,
    title: "Pusat Event Politeknik",
    description:
      "A website for Politeknik Negeri Padang's event center, developed as a final project for a semester 5 course. Features include event listings, participant registration, and user management.",
    image: "images/pep.png",
    categories: ["Fullstack"],
    technologies: ["Vue.js", "Flask", "MySQL", "Bootstrap", "Google OAuth"],
    repository: "https://github.com/Baghaztra/ProjectAkhirML",
    demoUrl: null,
  },
];

export const skills = [
  {
    name: 'Programming Languages',
    icon: 'mdi:code-json',
    skills: ['Java', 'PHP', 'Python', 'JavaScript']
  },
  {
    name: 'Frameworks',
    icon: 'mdi:application-braces',
    skills: ['Laravel (PHP)', 'Flask (Python)', 'Nuxt.js (Vue/JavaScript)', 'Next.js (React/JavaScript)']
  },
  {
    name: 'Tools',
    icon: 'mdi:toolbox',
    skills: ['Git', 'Figma', 'Google Developer Console']
  },
  {
    name: 'CSS Frameworks',
    icon: 'mdi:palette-swatch',
    skills: ['Bootstrap', 'Tailwind CSS']
  },
  {
    name: 'Database / Backend Service',
    icon: 'mdi:database',
    skills: ['MySQL', 'Firebase']
  },
]

