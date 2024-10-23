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
  status?: "ongoing" | "complete";
  techstack: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }[];
};

export const projects: Project[] = [
  {
    status: "complete",
    cover: "logoist.png",
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
    status: "complete",
    cover: "whatsthat.png",
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
  {
    status: "ongoing",
    cover: "sunnahjourneys.png",
    title: "Sunnah Journeys",
    desc: "Transform your Umrah experience with our intuitive web app, offering all the necessary information and tools to help you book with confidence.",
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
  {
    status: "ongoing",
    cover: "mylibrary.png",
    title: "My Library",
    desc: "A comprehensive reading list app that allows you to effortlessly track books you've read, are currently reading, and plan to read.",
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
