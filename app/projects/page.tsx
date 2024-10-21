import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import {
  SiClerk,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | Projects",
  description: "Explore my latest personal projects.",
};

const Projects = () => {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="animate-fadein text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="animate-fadein text-secondary">
          Explore my latest personal projects.
        </p>
      </div>

      <ul className="animated-list space-y-10 animate-fadein">
        <li className="transition-opacity">
          <Link
            className="underline-offset-4 space-y-4 sm:flex gap-5"
            href="/projects/"
          >
            <figure className="aspect-video overflow-hidden rounded-md">
              <Image
                alt="Project 1"
                className="size-full object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                width={400}
                height={300}
              />
            </figure>
            <div className="space-y-1">
              <h3 className="font-medium leading-tight">Logoist</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                velit, totam beatae blanditiis suscipit repudiandae.
              </p>
              <div className="flex gap-4 pt-4">
                {techstack.map((tech) => (
                  <tech.icon className="size-6" key={tech.label} />
                ))}
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

const techstack = [
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
];
