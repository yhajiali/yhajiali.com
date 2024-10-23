import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Heading from "../components/ui/Heading";
import { projects } from "../lib/projects";
import CTA from "../components/ui/CTA";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | Projects",
  description: "Explore some of my latest projects.",
};

const Projects = () => {
  return (
    <>
      <Heading title="Projects" subtitle="Explore some of my latest projects" />

      <section>
        <ul className="animated-list space-y-10 animate-fadein max-w-xl">
          {projects
            .filter((project) => project.status === "complete")
            .map((project, index) => (
              <li className="transition-opacity" key={index}>
                <Link
                  className="underline-offset-4 space-y-4 sm:fle gap-5"
                  href={`/projects/${project.title.toLowerCase()}`}
                >
                  <figure className="aspect-video overflow-hidden rounded-md">
                    <Image
                      alt={`Project cover of ${project.title}`}
                      className="size-full object-cover"
                      src={`/projects/${project.cover}`}
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="space-y-1">
                    <h3 className="font-medium leading-tight">
                      {project.title}
                    </h3>
                    <p>{project.desc}</p>

                    <div className="flex gap-4 pt-4">
                      {project.techstack.map((tech, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <tech.icon className="size-6" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-background dark:bg-background-secondary-dark dark:border-background-secondary-dark">
                              {tech.label}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <CTA />
    </>
  );
};

export default Projects;
