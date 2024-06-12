import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpeg";
import project5 from "../assets/projects/project-5.jpeg";

export const HERO_CONTENT = `I am a dedicated Front-End developer with a passion for building robust and scalable web applications. Proficient in React and Next.js, I specialize in creating responsive and intuitive user interfaces. With a strong foundation in Core Java, I leverage my skills to develop innovative solutions that enhance business growth and deliver outstanding user experiences. Focused on software innovation, I am eager to contribute to impactful projects in the dynamic field of software development.`;

export const ABOUT_TEXT = `Hey there, I'm Shantam Verma, a passionate Front-End developer. I've completed courses in Core Java and Full Stack MERN Stack at Road Ahead Technologies. Before diving into coding, I specialized in SEO during my digital marketing days. This mix of skills gives me a well-rounded view of both development and digital strategy. My main aim is to use my skills to create cool stuff that helps businesses grow and makes users happy. I'm always learning new things to stay on top of the latest trends in Front-End development and excited to tackle challenging projects that make a real difference in the software world.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Front-End Developer",
    company: "Vigorous Healthtech Private Limited.",
    description: `Chikitsa is a healthcare solution designed to revolutionize the healthcare system. It aims to significantly reduce the time from appointment booking to doctor examination and prescription, streamlining the entire process for enhanced efficiency.`,
    description2: ` E-Charitra is a HRMS software that makes hiring easy by showing recruiters and HR Professionals a candidate's past work feedback.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "Material-UI",
      "Tailwind CSS",
      "Redux",
      "TanStack Query",
      "Formik",
      "SEO",
    ],
  },
  {
    year: "2023 - 2023",
    role: "Frontend Developer",
    company: "ANI International, Inc.",
    description: `Designed and developed user interfaces for web applications using React.js. Worked closely with seniors to integrate frontend components and organize code effectively within a project, fostering collaboration and efficiency. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Axios"],
  },
];

export const PROJECTS = [
  {
    title: "Food Recipe",
    link: "https://food-recipe-five-delta.vercel.app/",
    image: project1,
    description:
      "Implemented authentication with Google Firebase, integrated React Query for optimized data fetching and state management, and utilized Formik for efficient form handling, validation, and submission.",
    technologies: [
      "Next.Js",
      "Material UI",
      "Formik",
      "React-Query",
      "Firebase",
    ],
  },
  {
    title: "Quibbleai",
    link: "https://quibbleai.io/",
    image: project2,
    description:
      "This is a freelancing project that I created the user interface of using Tailwind CSS",
    technologies: ["Next.Js", "Tailwind CSS", "Tanstack React-Query"],
  },
  {
    title: "Movie Info",
    link: "https://shantam-movie-info.netlify.app/",
    image: project3,
    description:
      "Presents users with an authentication. Firebase is used for store the Email / Password data and authentication",
    technologies: ["React", "Firebase", "Axios", "Bootstrap"],
  },
  {
    title: "Weather App - WeatherWatch",
    link: "https://shantam-verma.github.io/weather-app-react/",
    image: project4,
    description:
      "Developed a weather app that fetches the latest weather conditions, allows data retrieval based on search, and displays the current time in the selected city.",
    technologies: ["React", "Axios", "Bootstrap"],
  },
  {
    title: "Library Management System",
    link: "https://github.com/shantam-verma/Library-Management-System-Java",
    image: project5,
    description:
      "Utilized object-oriented programming concepts (Java Swings, GUI, etc.) to create an efficient and reliable library management system, integrated with MySQL as the database, and implemented unique barcode generation for each registered book using the Java barcode scanning library ZXing (Zebra Crossing)",
    technologies: ["Java", "mySQL"],
  },
];

export const CONTACT = {
  address: "122001, Gurugram, HR",
  phoneNo: "9694319945",
  email: "shantamverma07@gmail.com",
};
