// Technology Stack Icons
import {
  SiAxios,
  SiClerk,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Project = {
  cover: string;
  title: string;
  desc: string;
  techstack: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }[];
};

export const projects: Project[] = [
  {
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    title: "Logoist",
    desc: "An AI powered app that creates minimalistic logos based on 3 trendy styles.",
    techstack: [
      {
        icon: SiTypescript,
        label: "TypeScript",
      },
      {
        icon: SiNextdotjs,
        label: "Next.js",
      },
      {
        icon: SiTailwindcss,
        label: "Tailwind CSS",
      },
      {
        icon: SiOpenai,
        label: "OpenAI",
      },
      {
        icon: SiClerk,
        label: "Clerk",
      },
      {
        icon: SiUpstash,
        label: "Upstash",
      },
    ],
  },
  {
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    title: "WhatsThat",
    desc: "A native messaging platform developed with React Native and Expo.",
    techstack: [
      {
        icon: SiJavascript,
        label: "JavaScript",
      },
      {
        icon: TbBrandReactNative,
        label: "React Native",
      },
      {
        icon: SiAxios,
        label: "Axios",
      },
    ],
  },
];
