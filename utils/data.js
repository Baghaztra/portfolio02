export const about = {
  name: "Baghaztra",
  fullname: "Baghaztra Van Ril",
  role: "Aspiring Software Developer",
  location: "Padang, West Sumatra",
  bio: "An Information Technology student, applied Bachelor Study Program (Diploma 4), Software Engineering Technology, with a particular interest in programming logic. Proficient in OOP concepts, web development, and managing databases. Also passionate about game development.",
  socialLinks: [
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "https://github.com/Baghaztra",
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/baghaztra-van-ril-8011b0294",
    },
    {
      name: "Instagram",
      icon: "mdi:instagram",
      url: "https://www.instagram.com/baghaztra",
    },
  ],
};

export const education = [
  {
    program: "Software Engineering",
    major: "Information Technology",
    institution: "Politeknik Negeri Padang",
    year: "August, 2022 - Present",
  },
];

export const experience = [
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
];

export const projects = [
  {
    title: "Pesona Simarasok",
    description:
      "Backend developer for a tourism destination website called Simarasok, built with Laravel as part of the Talent Scouting Academy.",
    image: "images/pm.png",
    categories: ["Backend", "Web"],
    technologies: ["Laravel", "MySQL"],
    repository: "https://github.com/Baghaztra/TSA_Simarasok",
    demoUrl: "https://simarasok.umkm-pnp.com/",
  },
  {
    title: "E Bio X",
    description: "An e-learning web application that implements K-Means clustering and Decision Tree algorithms to group students based on their quiz results. Currently still in development.",
    image: "images/ebx.png",
    categories: ["Fullstack", "Web", "Machine Learning"],
    technologies: ["Nuxt.js", "Flask", "Tailwind", "MySQL", "Scikit-learn"],
    repository: [
      { name: "Frontend", url: "https://github.com/Baghaztra/e-bio-x" },
      { name: "Backend", url: "https://github.com/Baghaztra/e-bio-x-backend" },
    ],
    demoUrl: null
  },
  {
    title: "Inaglob Website",
    description:
    "Company profile website for PT. Inovasi Asiatech Global (Inaglob), a tech company that focuses on research, tech solutions, and digital training services. Currently in development.",
    image: "images/ig.png",
    categories: ["Fullstack", "Web"],
    technologies: ["Laravel", "Hotwire/Turbo", "Tailwind", "MySQL"],
    repository: null,
    demoUrl: "https://inaglob.com",
  },
  {
    title: "Cybertech PNP",
    description:
      "Initiated and led the development of an organizational website for Cybertech PNP. The platform allows users to view event listings and register for available events.",
    image: "images/ct.png",
    categories: ["Backend", "Web"],
    technologies: ["Laravel", "MySQL", "Vite", "JQuery"],
    repository: null,
    demoUrl: "https://cybertechpnp.com",
  },
  {
    title: "Cyber Hack Riddle",
    description:
      "A web-based riddle game with cyber-themed troll puzzles, created for the 2024 Student Creativity Week at Politeknik Negeri Padang.",
    image: "images/cr.png",
    categories: ["Frontend Logic", "Web", "Game"],
    technologies: ["Vanilla JS", "CSS"],
    repository: "https://github.com/PitokDf/pkm2024",
    demoUrl: "https://pitokdf.github.io/pkm2024/",
  },
  {
    title: "Clinic App",
    description:
      "Mobile application built with Flutter as a final project for the Mobile Programming course. This app helps manage basic clinic services such as patient registration and medical records.",
    image: "images/cl.png",
    categories: ["Fullstack", "Mobile"],
    technologies: ["Flutter", "Laravel", "Filament"],
    repository: [
      { name: "Mobile App", url: "https://github.com/Baghaztra/clinic_project" },
      { name: "Backend", url: "https://github.com/Baghaztra/backend-klinik" },
    ],
    demoUrl: null,
  },
  {
    title: "SPI - PNP",
    description:
      "Web application developed for Politeknik Negeri Padang to manage internal reports and document archives within the institution.",
    image: "images/spi.png",
    categories: ["Fullstack", "Web"],
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    repository: "https://github.com/Baghaztra/SPI-PNP",
    demoUrl: null,
  },
  {
    title: "PT. Rumpun Alam Indonesia Website",
    description:
      "Static Corporate website for PT. Rumpun Alam Indonesia, a spice export company from West Sumatera.",
    image: "images/rai.png",
    categories: ["Frontend", "Web"],
    technologies: ["Vue.js", "Bootstrap"],
    repository: "https://github.com/Zephhyyrr/PT.RAI-company-profile",
    demoUrl: "https://rumpunalamindonesia.org/",
  },
  {
    title: "Bro Rimbo",
    description:
      "Backend programmer for an employee information system project for the Forestry Department of West Sumatra, focusing on leave management feature improvements.",
    image: "images/br.png",
    categories: ["Backend", "Web"],
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    repository: null,
    demoUrl: null,
  },
  {
    title: "Flight Passenger Predictor",
    description:
      "Machine learning project to predict airplane passengers at several airports using official data from BPS.",
    image: "images/ml.png",
    categories: ["Machine Learning", "Fullstack", "Web"],
    technologies: ["Scikit-learn", "Flask", "XGBoost"],
    repository: "https://github.com/Baghaztra/ProjectAkhirML",
    demoUrl: null,
  },
  {
    title: "Pusat Event Politeknik",
    description:
      "A website for Politeknik Negeri Padang's event center, developed as a final project for a semester 5 course.",
    image: "images/pep.png",
    categories: ["Fullstack", "Web"],
    technologies: ["Vue.js", "Flask", "MySQL", "Bootstrap", "Google OAuth"],
    repository: "https://github.com/Baghaztra/PusatEventPnp",
    demoUrl: null,
  },
  {
    title: "Kamikaze Challenger",
    description:
      "A simple 2D endless shooting game where players control a warship fending off attacks from kamikaze planes. Developed independently with Unity for PC.",
    image: "images/kc.png",
    categories: ["Game"],
    technologies: ["Unity", "C#"],
    repository: "https://github.com/Baghaztra/KamikazeChallenger",
    demoUrl: null,
  },
  {
    title: "DICE",
    description:
      "Team leader and JavaScript programmer for a website featuring various dice-based games made with JavaScript.",
    image: "images/dc.png",
    categories: ["Frontend Logic", "Game", "Web"],
    technologies: ["Vanilla JS", "bootstrap"],
    repository: "https://github.com/Baghaztra/DICE",
    demoUrl: "https://baghaztra.github.io/DICE/",
  },
  {
    title: "Nongki",
    description:
      "Web application to discover hangout spots like cafes, workspaces, and more. Developed for the FireTech2024 hackathon at Andalas University.",
    image: "images/nk.png",
    categories: ["Fullstack", "Web"],
    technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    repository: "https://github.com/Baghaztra/Nongki",
    demoUrl: null,
  },
];

export const skills = [
  {
    name: "Programming Languages",
    icon: "mdi:code-json",
    skills: ["Java", "PHP", "Python", "JavaScript"],
  },
  {
    name: "Frameworks",
    icon: "mdi:application-braces",
    skills: [
      "Laravel (PHP)",
      "Flask (Python)",
      "Nuxt.js (Vue/JavaScript)",
      "Next.js (React/JavaScript)",
    ],
  },
  {
    name: "Tools",
    icon: "mdi:toolbox",
    skills: ["Git", "Figma", "Google Developer Console"],
  },
  {
    name: "CSS Frameworks",
    icon: "mdi:palette-swatch",
    skills: ["Bootstrap", "Tailwind CSS"],
  },
  {
    name: "Database / Backend Service",
    icon: "mdi:database",
    skills: ["MySQL", "Firebase"],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Winner of KSN-K Informatics Competition at Senior High School Level",
    issuer: null,
    date: null,
    description:
      "Awarded as the winner in the KSN-K Informatics Competition at the senior high school level.",
    image: "/images/certificates/ksn.jpg",
  },
  {
    id: 2,
    title: "AWS Academy Graduate - AWS Academy Cloud Developing",
    issuer: "AWS Academy",
    date: null,
    description: "Official certificate of completion for the AWS Academy Cloud Developing program.",
    image: "/images/certificates/aws-cloud-developing.jpg",
  },
  {
    id: 3,
    title: "Copyright Certificate: Computer Program",
    issuer: null,
    date: "2024-06-01",
    description: `Title: Pesona Simarasok Website (Visitor Section).
First publication: June 1, 2024, in Padang.
Protection period: Valid for 50 (fifty) years from the first publication date.
Registration number: 000791344.`,
    image: "/images/certificates/hki-patent.jpg",
  },
  {
    id: 4,
    title: "IT Team Work Certificate - CV Sri Indra Bupala Organizer",
    issuer: "CV Sri Indra Bupala Organizer",
    date: null,
    description: "Certificate of employment as a member of the IT team.",
    image: "/images/certificates/sri-indra-bupala.jpg",
  },
  {
    id: 5,
    title: "Certification of Course Completion - Cisco",
    issuer: "Cisco",
    date: null,
    description:
      "Certificates for completing the Data Science and Introduction to Cybersecurity courses.",
    image: "/images/certificates/cisco-certificates.jpg",
  },
];
