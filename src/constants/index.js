import portfolio from "../assets/projects/portfolio.jpg";
import netflix from "../assets/projects/netflix.jpg";
import jobby from "../assets/projects/jobby.jpg";
import chatapp from "../assets/projects/chatapp.jpg";

export const HERO_CONTENT = `I am a passionate and aspiring full-stack developer with a strong foundation in building user-friendly and scalable web applications. I am proficient in front-end technologies such as HTML, CSS, Tailwind CSS, and React.js, and skilled in back-end technologies such as Node.js, Express.js, and MongoDB.  Additionally, I have experience working with SQL databases and beginner-level knowledge of Python, C++, and data structures and algorithms (DSA). I am eager to apply my skills to solve real-world problems, contribute to impactful projects, and continuously grow as a developer.`;

export const ABOUT_TEXT = `I am a hardworking and creative individual with a passion for problem-solving, fast learning, and innovative development.  Along with my technical skills, I excel in teamwork, leadership, communication, and time management. Outside of coding, I enjoy gaming, football, fitness, music, cinema, photography, and video editing, which fuel my creativity. Driven by a strong motivation to become a proficient developer, I aim to craft impactful applications while exploring my fascination with automobiles and emerging technologies.`;

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion", "Node js"],
  },
  {
    title: "Netflix-Clone",
    image: netflix,
    description:
      "A Netflix clone website featuring seamless streaming, personalized recommendations, and an intuitive interface.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Jobby App",
    image: jobby,
    description:
      "A job application platform connecting job seekers with employers, offering advanced search filters, resume uploads, and real-time application tracking.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Real Time Chat Application",
    image: chatapp,
    description:
      "A secure and efficient real-time chat application enabling seamless communication with instant messaging, user authentication, and dynamic online status tracking. Designed for a smooth and interactive user experience.",
    technologies: [
      "React Js",
      "Tailwind CSS",
      "Node Js",
      "Socket.io",
      "Express Js",
      "MongoDB",
    ],
  },
];

export const CONTACT = {
  phoneNo: "+91 9398667610 ",
  email: "mohithkuruba83@gmail.com",
};

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
