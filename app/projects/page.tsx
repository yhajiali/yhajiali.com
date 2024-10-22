import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Heading from "../components/ui/Heading";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | Projects",
  description: "Explore my latest personal projects.",
};

const Projects = () => {
  return (
    <section className="space-y-10">
      <Heading
        title="Projects"
        subtitle="Explore my latest personal projects"
      />

      <ul className="animated-list space-y-14 animate-fadein max-w-xl">
        {projects.map((project, index) => (
          <li className="transition-opacity" key={index}>
            <Link
              className="underline-offset-4 space-y-4 sm:fle gap-5"
              href={`/projects/${project.title.toLowerCase()}`}
            >
              <figure className="aspect-video overflow-hidden rounded-md">
                <Image
                  alt={`Project cover of ${project.title}`}
                  className="size-full object-cover"
                  src={project.cover}
                  width={400}
                  height={300}
                />
              </figure>
              <div className="space-y-1">
                <h3 className="font-medium leading-tight">{project.title}</h3>
                <p>{project.desc}</p>

                <div className="flex gap-4 pt-4">
                  {project.techstack.map((tech) => (
                    <tech.icon className="size-6" key={tech.label} />
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
