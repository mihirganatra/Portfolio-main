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
    id: "certifications",
    title: "Certification",
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
   {
     title: "Backend Developer",
     icon: <BackendIcon />,
   },
  {
    title: "Problem Solving", 
    icon: <ProblemSolvingIcon />,
  },
  //{
    //title: "Freelancer",
   // icon: <FreelancerIcon />,
  //},
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
    //{
      //name: "TypeScript",
      //icon: "/assets/tech/typescript.svg",
      //link: "https://www.typescriptlang.org/",
    //},
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
    {
      name: "C#",
      icon: "/assets/tech/c-sharp.png",
      link: "https://www.w3schools.com/cs/index.php",
    },
  ],
  frameworks: [
    //{
     // name: "Next.js",
      //icon: "/assets/tech/nextjs.svg",
      //link: "https://nextjs.org/",
   // },
    //{
     // name: "TailwindCSS",
      //icon: "/assets/tech/tailwindcss.svg",
      //link: "https://tailwindcss.com/",
    //},
    {
      name: "ASP.NET",
      icon: "/assets/tech/asp_net_128_px.png",
      link: "https://www.w3schools.com/asp/webpages_intro.asp",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
    {
      name: "django",
      icon: "/assets/tech/django-python-logo.png",
      link: "https://www.w3schools.com/django/django_intro.php",
    },

  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/download (2).png",
      link: "https://matplotlib.org/",
    },
    // {
    //   name: "Styled-Components",
    //   icon: "/assets/tech/styled-components.png",
    //   link: "https://styled-components.com/",
    // },
    {
      name: "jQuery",
      icon: "/assets/tech/jQuery.png",
      link: "https://jquery.com/",
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
    //{
      //name: "NextAuth.js",
 //     icon: "/assets/tech/nextauthjs.png",
   //   link: "https://next-auth.js.org/",
    //},
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
   // {
    //  name: "Figma",
      //icon: "/assets/tech/figma.svg",
      //link: "https://www.figma.com/",
    //},
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
      name: "SQL Server",
      icon: "/assets/tech/images-removebg-preview.png",
      link: "https://www.sqlservercentral.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
     {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MS Access",
      icon: "/assets/tech/Microsoft_Access-Logo.wine.png",
      link: "https://www.microsoft.com/en-in/microsoft-365/access",
    },
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
    name: "Quiz Application",
    description:
      "Quiz Application designed to make learning fun and interactive. The app includes gamified quizzes, real-time score tracking, leaderboards, user feedback, and a reward based spin wheel to boost engagement. An integrated admin panel allows easy management of quiz content, users, and app activity.",
    tags: [
      {
        name: "Adroid",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "orange-text-gradient",
      },

    ],
    image:"/assets/projects/quizz.jpg",
    source_code_link: "https://github.com/mihirganatra/QuizGame-Adnroid",
    // deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Student Management System",
    description:
      "Designed and developed a role-based School Management System with secure login, password recovery, and access control for Admin, Teacher, and Student roles. Key features include managing students and teachers, tracking attendance, handling fees, processing leave requests, and providing personalized dashboards for each user role. ",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "MS SQL Server",
        color: "orange-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "yellow-text-gradient",
      },


    ],
    image: "/assets/projects/schoolma.jpg",
    source_code_link: "https://github.com/mihirganatra/Student-Management-System",
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
    name: "Gemini Clone",
    description:
      "Developed a Gemini AI Clone using React.js, featuring a responsive user interface and smooth, interactive experience. Implemented dynamic query-response functionality and optimized performance, reducing load time by 30%. Integrated RESTful APIs and worked collaboratively with a team to ensure smooth deployment and functionality.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gemini.jpg",
    source_code_link:
      "https://github.com/mihirganatra/gemini-clone",
    // deployed_link:
    //   "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  {
    name: "Hotel Management System",
    description:
      "Designed an online booking platform with reservation management and live status updates to optimize guest and staff workflows. Built responsive interfaces using HTML, CSS, JavaScript, and implemented a C# backend for real-time database operations.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "orange-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/hotel.jpg",
    source_code_link: "https://github.com/mihirganatra/hotelManagement-Asp.net",
    // deployed_link: "https://netflix-clone12345.vercel.app",
  },
  {
    name: "ATMInterface",
    description:
      "ATM Interface – A console-based Java project that simulates basic ATM operations. It allows users to perform functions like account login, balance inquiry, cash withdrawal, deposit, and PIN change. The project emphasizes object-oriented programming concepts, user authentication, and secure transaction handling through a simple and interactive interface.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "Servlet",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "JDBC",
        color: "yellow-text-gradient",
      },
      
    ],
    image: "/assets/projects/end_result.png",
    source_code_link: "https://github.com/mihirganatra/ATMInterface",
    // deployed_link: "https://netflix-clone12345.vercel.app",
  },
  {
    name: "Hospital Management System",
    description:
      "Hospital Management System – A Java-based application designed to manage hospital operations such as patient registration, appointment scheduling, doctor management, and billing. It provides a user-friendly interface and ensures efficient record-keeping using core Java concepts, OOP, and file handling for smooth hospital administration. ",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "Servlet",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "JDBC",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/hms_new_final.png",
    source_code_link: "https://github.com/mihirganatra/HospitalManagementSystemGUI",
    // deployed_link: "https://netflix-clone12345.vercel.app",
  },
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

const certifications = [
  {
    name: "Java Programming Internship",
    issuer: "Brainwave Matrix Solution",
    date: "April 2025",
    image: "/assets/document/java1.pdf", // Example, replace with actual image if available
    link: "/document/java1.pdf"
  },
  {
    name: "Python Programming Internship",
    issuer: "Brainwave Matrix Solution",
    date: "April 2025",
    image: "/assets/document/python2.pdf", // Add image if available
    link: "/document/python2.pdf"
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM",
    date: "Feb 2025",
    image: "/assets/document/introduction to Software Engineering.pdf", // Example, replace with actual image if available
    link: "/document/introduction to Software Engineering.pdf"
  },
  {
    name: "Introduction to R Programming for Data Science",
    issuer: "IBM",
    date: "Oct 2024",
    image: "/assets/document/introduction to R Programming for Data Science.pdf", // Add image if available
    link: "/document/introduction to R Programming for Data Science.pdf"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Feb 2025",
    image: "/assets/document/cn.pdf", // Add image if available
    link: "/document/cn.pdf"
  },
  {
    name: "Introduction to Software Testing",
    issuer: "University Of Minniesota",
    date: "Jun 2025",
    image: "/assets/document/testing.pdf", // Add image if available
    link: "/document/testing.pdf"
  },
  {
    name: "Java Bootcamp",
    issuer: "Lets Upgrade",
    date: "Jun 2025",
    image: "/assets/document/java.pdf", // Add image if available
    link: "/document/java.pdf"
  },
  {
    name: "JavaScript Bootcamp",
    issuer: "Lets Upgrade",
    date: "Jan 2025",
    image: "/assets/document/JavaScriptBootcamp.pdf", // Add image if available
    link: "/document/JavaScriptBootcamp.pdf"
  },
  {
    name: "Python Bootcamp",
    issuer: "Lets Upgrade",
    date: "Jan 2025",
    image: "/assets/document/PythonBootcamp.pdf.pdf", // Add image if available
    link: "/document/PythonBootcamp.pdf"
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/mihirganatra",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/mihir-ganatra-489186305/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/MihirGanat85389",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/mihirrr__1811/n",
  },
];

const heroTexts = [
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
  certifications,
};
