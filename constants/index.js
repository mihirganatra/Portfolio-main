import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    // {
    //   name: "Styled-Components",
    //   icon: "/assets/tech/styled-components.png",
    //   link: "https://styled-components.com/",
    // },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    // {
    //   name: "Docker",
    //   icon: "/assets/tech/docker.svg",
    //   link: "https://www.docker.com/",
    // },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    // {
    //   name: "Firebase",
    //   icon: "/assets/tech/firebase.svg",
    //   link: "https://firebase.google.com/",
    // },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Frontend Developer Intern",
    company_name: "Intern at Curowell Healthcare Private Ltd",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developing a healthcare SaaS platform using Next.js, TypeScript, and Tailwind CSS, significantly enhancing user experience.",
      "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
      "Contributing to the DND form microfrontend, improving user interaction by 30%.",
      "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Intern at DRDO CABS",
    icon: "/assets/company/drdo-cabs.png",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Bus ticket reservation system",
    description:
      " Anyone can visit our site but in order to see available buses of your selected routes he/she have to login in our website by their registered Email address and correct password. If anyone is a new customer and still haven’t registered then, he/she can register in our site by filling the required details. Unregistered customers can register by navigating to the registration page. Only website owner has access to add a new admin panel user with their role. By default website developer is an owner and other role is Administrator who can manage admin side but can’t add new user for the admin panel.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image:
      "/assets/projects/image.png",
    source_code_link: "https://github.com/purvilmodi/online-busticket-reservation-system",
    // deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Pinterest Clone",
    description:
      "A Pinterest-inspired web application where users can create, share, and save image-based posts. This project includes core features of Pinterest, allowing users to explore various posts, follow other users, and curate their own collections. Built with a focus on a seamless, visually engaging user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/image2.png",
    source_code_link: "https://github.com/purvilmodi/Pinterest-clone",
    // deployed_link: "https://fig-pro-github.vercel.app",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "Event Management System",
    description:
      "The Event Management System is a full-stack web application built to streamline the organization, display, and media management of events. This system allows administrators to manage upcoming and past events, upload event-related media (images and videos), and maintain a seamless gallery and blog experience for users.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/image3.png",
    source_code_link:
      "https://github.com/purvilmodi/event_management",
    // deployed_link:
    //   "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/purvilmodi",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/purvil-modi-86839b248/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/PurvilModi9999",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/purvil__modi/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
