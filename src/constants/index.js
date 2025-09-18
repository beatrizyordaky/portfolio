import {
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  typescript,
  loginpage,
  randomcoffee,
  hubble,
  logo,
} from "../assets";

export const navSections = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: logo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing export constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing export constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing export constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing export constructive feedback to other developers.",
    ],
  },
];

export const workDescription = "In this section, you’ll find a selection of projects that showcase my journey as a software engineer. Each project reflects my passion for solving complex problems through code, my curiosity for exploring new technologies, and my commitment to building user-focused solutions.";

export const projects = [
  {
    name: "Login Page",
    description:
      "A responsive user registration page with real-time password validation. Uses HTML, CSS and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: loginpage,
    source_code_link: "https://github.com/beatrizyordaky/login-page",
  },
  {
    name: "Generate Random Coffee",
    description:
      "A Google Apps Script project designed to foster informal, randomized coffee meetups within teams or communities.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "google apps script",
        color: "green-text-gradient",
      },
      {
        name: "google sheets",
        color: "pink-text-gradient",
      },
    ],
    image: randomcoffee,
    source_code_link: "https://github.com/beatrizyordaky/generate-random-coffee",
  },
  {
    name: "Hubble Image Processing",
    description:
      "Image processing of a nebula's photos taken by the Hubble Space Telescope. Segmentation and labeling techniques were implemented in the hubble deep field image.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter notebook",
        color: "green-text-gradient",
      },
      {
        name: "cv2",
        color: "pink-text-gradient",
      },
    ],
    image: hubble,
    source_code_link: "https://github.com/beatrizyordaky/hubble-image-processing/",
  },
];

export const devName = "Beatriz Yordaky";
