import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Heading from "@/app/components/ui/Heading";
import CustomLink from "@/app/components/ui/CustomLink";
import Carousel from "@/app/components/ui/Carousel";

import { projects } from "@/lib/projects";
import { logoist } from "@/lib/carousel";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | Logoist",
  description:
    "An AI powered app that creates minimalistic logos based on 3 trendy styles.",
};

const page = () => {
  return (
    <article className="space-y-14 animate-fadein">
      <Heading title="Logoist" subtitle="May 2024" />

      <section className="space-y-8">
        <div className="space-y-4">
          <h3>Overview</h3>

          <p>
            In collaboration with{" "}
            <CustomLink
              href="https://www.linkedin.com/in/elberd-galaiev-8a81351b2/"
              label="Elberd Galaiev"
            />{" "}
            and{" "}
            <CustomLink
              href="https://www.linkedin.com/in/shakhzodbek-sabirov-3b0818221/"
              label="Shakhzodbek Sabirov"
            />
            , we developed an AI-powered app that generates minimalistic logos
            based on three trendy styles. The process is simple: users enter a
            logo name, describe the brand, and select a style, creating a logo
            tailored to their brand identity.
          </p>
        </div>

        <div className="space-y-3">
          <h3>Links</h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 animated-list transition">
            {projects
              .filter((project) => project.title == "Logoist")
              .map((project) =>
                project.links?.map((link, index) => (
                  <li
                    className="flex w-full h-14 border dark:border-background-secondary-dark px-4 rounded-lg duration shadow dark:hover:shadow-background-secondary-dark transition-opacity"
                    key={index}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between w-full dark:text-primary-dark"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="text-base size-5" />
                        <span className="">{link.label}</span>
                      </div>
                      <ArrowUpRightIcon className="size-4" />
                    </Link>
                  </li>
                ))
              )}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <figure className="aspect-video overflow-hidden rounded-md">
          <Image
            alt="Gif of Logoist demo"
            className="size-full object-cover"
            src="/projects/logoist/logoist.gif"
            width={400}
            height={300}
          />
        </figure>
        <figcaption className="text-center text-sm text-secondary dark:text-secondary-dark">
          A glimpse of the Logoist app in action, showcasing its sleek design
          and user-friendly interface.
        </figcaption>
      </section>

      <section className="space-y-6">
        <h3 className="text-center">Technology Stack</h3>

        <ul className="flex flex-wrap justify-evenly gap-5">
          {projects
            .filter((project) => project.title === "Logoist")
            .map((project) =>
              project.techstack.map((tech, index) => (
                <li
                  className="transition flex flex-col items-center gap-2 text-sm"
                  key={index}
                >
                  <tech.icon className="size-8" />
                  <p>{tech.label}</p>
                </li>
              ))
            )}
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Features</h3>

        <ul className="list-disc list-inside text-secondary dark:text-secondary-dark">
          <li>
            <b>User Authentication</b> allows secure login and access management
            for users.
          </li>
          <li>
            <b>Rate limiting</b> to control API usage and reduce costs.
          </li>
          <li>
            <b>Open Source:</b> Codebase available on{" "}
            <CustomLink href={projects[0].links[1].href} label="Github" /> for
            community use and contributions.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3>Purpose & Goal</h3>

        <p>
          This project was part of a weekly full-stack AI challenge, focusing on
          generating visually appealing, user-friendly image assets. The
          objective was to develop a logo generator that highlights our
          front-end, back-end, and AI integration skills using OpenAI’s API.
        </p>
        <p>
          Working toward these goals shaped our approach and guided the choices
          we made for the tools and technologies to develop the project.
        </p>
      </section>

      <section className="space-y-6">
        <h3>Web Stack & Explanation</h3>

        <div className="space-y-3">
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
        </div>
      </section>

      <section>
        <Carousel
          images={logoist}
          caption="Mockups of the Logoist logo generation process."
        />
      </section>

      <section className="space-y-6">
        <h3>Challenges & Thought Process</h3>
        <p>
          One of the primary challenges was managing API costs due to high image
          requests. To address this, we implemented a rate-limiting solution
          using Upstash to control the frequency of requests per user, ensuring
          sustainability while keeping the app open-source and accessible to
          everyone.
        </p>

        <p>
          Another challenge was making sure the generated logos matched the
          styles we aimed for. Early prompts often produced logos that missed
          the mark. We had to experiment by testing different descriptions, and
          finding the right balance between detail and simplicity to guide the
          AI effectively.
        </p>
        <p>
          We ran through multiple prompt variations to figure out what worked
          best. Adding clear details like specific shapes, color themes, and
          avoiding vague words made a big difference. This back & forth process
          helped us consistently get accurate and high-quality logos that
          matched the 3 style options, giving users a reliable and easy
          experience.
        </p>
      </section>

      <section className="space-y-6">
        <h3>Learnings</h3>

        <div className="space-y-3">
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
          <Skeleton className="w-full h-4 bg-background-secondary dark:bg-background-secondary-dark" />
        </div>
      </section>
    </article>
  );
};

export default page;