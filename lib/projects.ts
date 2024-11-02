// Technology Stack Icons

import { FaGithub } from "react-icons/fa";
import {
  SiAxios,
  SiClerk,
  SiExpo,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
} from "react-icons/si";
import { TbBrandReactNative, TbCloudCog, TbWorld } from "react-icons/tb";

type Project = {
  cover: string;
  title: string;
  desc: string;
  links: {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  href?: string;
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
    links: [
      {
        href: "https://logoist.vercel.app",
        label: "View project",
        icon: TbWorld,
      },
      {
        href: "https://github.com/yhajiali/logoist",
        label: "Github",
        icon: FaGithub,
      },
    ],
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
    links: [
      {
        href: "https://github.com/yhajiali/whatsthat",
        label: "Github",
        icon: FaGithub,
      },
    ],
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
        icon: SiExpo,
        label: "Expo",
      },
      {
        icon: SiAxios,
        label: "Axios",
      },
      {
        icon: TbCloudCog,
        label: "RESTful API",
      },
    ],
  },
  {
    status: "ongoing",
    cover: "sunnahjourneys.png",
    title: "Sunnah Journeys",
    href: "https://sunnahjourneys.vercel.app",
    desc: "Transform your Umrah experience with our intuitive web app, offering all the necessary information and tools to help you book with confidence.",
    links: [
      {
        href: "https://sunnahjourneys.vercel.app",
        label: "View project",
        icon: TbWorld,
      },
    ],
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
    href: "/projects/mylibrary",
    desc: "A comprehensive reading list app that allows you to effortlessly track books you've read, are currently reading, and plan to read.",
    links: [
      {
        href: "https://yh-mylibrary.vercel.app",
        label: "View project",
        icon: TbWorld,
      },
      {
        href: "https://github.com/yhajiali/mylibrary",
        label: "Github",
        icon: FaGithub,
      },
    ],
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
