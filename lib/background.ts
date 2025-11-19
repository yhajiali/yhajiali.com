import { FaJava } from "react-icons/fa6";
import {
  SiClerk,
  SiTailwindcss,
  SiUpstash,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiPython,
  SiFirebase,
  SiVisualstudiocode,
  SiAxios,
} from "react-icons/si";
import { TbBrandReactNative, TbDatabase } from "react-icons/tb";

type skills = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: "languages" | "f&l" | "t&t";
};

export const experiences = [
  {
    imageSrc: "codebender-ai.jpeg",
    position: "Software Engineer Intern",
    company: "Codebender AI",
    description: [
      "• Delivered a full AI powered application in the first week using OpenAI APIs, completing design, development, testing and deployment.",
      "• Improved development speed by supporting CI CD workflows and maintaining clean version control with Git and GitHub.",
      "• Reviewed code for peers and enhanced maintainability across projects through clearer structures and reusable components.",
      "• Took ownership of testing and refining AI prompts, increasing reliability and reducing unnecessary API calls.",
    ],
    date: "Jul - Oct 2025",
    link: "",
  },
  {
    imageSrc: "aqa.jpeg",
    position: "Moderation Administrator",
    company: "AQA",
    description: [
      "• Conducted quality assurance processes with a strong attention to detail, ensuring accuracy and consistency in examination marks.",
      "• Managed data validation tasks by cross‑referencing mark forms with system entries, highlighting proficiency in data handling.",
      "• Coordinated effectively with moderators to resolve discrepancies, improving my problem‑solving abilities and communication skills.",
    ],
    date: "Jun - Aug 2024",
    link: "",
  },
  {
    imageSrc: "mmu.jpeg",
    position: "BSc (Hons) in Software Engineering",
    company: "Manchester Metropolitan University",
    description: [
      "• Graduated with a Upper Second‑Class Honours (2:1)",
      "• Modules included Web Design & Development, Programming, Database Systems, Mobile App Development",
    ],
    date: "2019 - 2023",
    link: "",
  },
  // {
  //   imageSrc: "asda.jpeg",
  //   position: "Retail Assistant",
  //   company: "ASDA",
  //   description: [
  //     "• Demonstrated a strong work ethic, by thriving in working independently and collaboratively to suit the company & team needs.",
  //     "• Enhanced customer satisfaction rate by proactively assisting customers with inquiries and needs.",
  //     "• Provided versatile support across various branches of the store, evolving into a valuable team player.",
  //     "• Built time management and adaptability skills from handling the high‑pressure and fast‑paced environment during peak periods.",
  //   ],
  //   date: "2019 - 2022",
  //   link: "",
  // },
];

export const skills: skills[] = [
  {
    icon: SiTypescript,
    label: "TypeScript",
    type: "languages",
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    type: "languages",
  },
  {
    icon: SiPython,
    label: "Python",
    type: "languages",
  },
  {
    icon: FaJava,
    label: "Java",
    type: "languages",
  },
  {
    icon: TbDatabase,
    label: "SQL",
    type: "languages",
  },
  {
    icon: SiHtml5,
    label: "HTML",
    type: "languages",
  },
  {
    icon: SiCss3,
    label: "CSS",
    type: "languages",
  },
  {
    icon: SiReact,
    label: "REACT",
    type: "f&l",
  },
  {
    icon: SiNextdotjs,
    label: "Next.js",
    type: "f&l",
  },
  {
    icon: TbBrandReactNative,
    label: "REACT Native",
    type: "f&l",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    type: "f&l",
  },
  {
    icon: SiGit,
    label: "Git",
    type: "t&t",
  },
  {
    icon: SiFirebase,
    label: "Firebase",
    type: "t&t",
  },
  {
    icon: SiClerk,
    label: "Clerk",
    type: "t&t",
  },
  {
    icon: SiAxios,
    label: "Axios",
    type: "t&t",
  },
  {
    icon: SiOpenai,
    label: "OpenAI",
    type: "t&t",
  },
  {
    icon: SiUpstash,
    label: "Upstash",
    type: "t&t",
  },
  {
    icon: SiVisualstudiocode,
    label: "VS Code",
    type: "t&t",
  },
];
