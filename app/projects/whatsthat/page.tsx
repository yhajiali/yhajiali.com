"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Heading from "@/app/components/ui/Heading";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { projects } from "@/lib/projects";
import clsx from "clsx";
import Carousel from "@/app/components/ui/Carousel";

const page = () => {
  const whatsthatMockups = [
    {
      src: "/projects/whatsthat/whatsthat-cover.png",
      alt: "Registration Screen",
    },
    { src: "/projects/whatsthat/whatsthat.png", alt: "Contacts Screen" },
    { src: "/projects/whatsthat/whatsthat2.png", alt: "Search Screen" },
    { src: "/projects/whatsthat/whatsthat3.png", alt: "Chat Screen" },
    { src: "/projects/whatsthat/whatsthat4.png", alt: "Chat Screen" },
    { src: "/projects/whatsthat/whatsthat5.png", alt: "Edit Profile Screen" },
    { src: "/projects/whatsthat/whatsthat6.png", alt: "Profile Screen" },
  ];

  return (
    <main className="relative space-y-14 animate-fadein">
      <Heading title="WhatsThat" />

      <section className="space-y-4">
        <h3>Overview</h3>

        <p>
          Whatsthat? is messaging platform which allows users to communicate
          with each other. Users sign up for an account with whatsthat? where
          they can then search for, add contacts and create chats with
          individuals or groups of contacts.
        </p>
      </section>

      <section className="space-y-3">
        <h3>Links</h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 animated-list transition">
          {projects
            .filter((project) => project.title == "WhatsThat")
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
      </section>

      <section className="space-y-4">
        <Carousel
          images={whatsthatMockups}
          caption="Exploring WhatsThat — Key screens showcasing a seamless experience
          from connecting with contacts to customizing personal profiles."
        />
      </section>

      <section className="space-y-6">
        <h3 className="text-center">Technology Stack</h3>

        <ul className="flex flex-wrap justify-evenly gap-5">
          {projects
            .filter((project) => project.title === "WhatsThat")
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
    </main>
  );
};

export default page;
