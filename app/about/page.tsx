import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Heading from "../components/ui/Heading";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import Gallery from "./ui/Gallery";

import { experiences, skills } from "../../lib/background";
import { socials } from "../../lib/links";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | About",
  description:
    "A glimpse into me, my skills and experience in software development.",
};

const About = () => {
  return (
    <div className="space-y-16 md:space-y-20">
      <Heading title="About" subtitle="A glimpse into me." />

      {/* Gallery */}
      <section>
        <div className="md:hidden">
          <figure className="animate-fadein">
            <Image
              src={"/gallery/media-city.jpeg"}
              alt="Night view at Media City"
              width={324}
              height={139}
              className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md w-64 sm:w-80 sm:h-72"
              priority
            />
          </figure>

          <figure className="animate-fadein">
            <Image
              src={"/gallery/coffeeshop.jpg"}
              alt={"Me at a Coffeeshop in Manchester"}
              width={220}
              height={260}
              className="pointer-events-none absolute inset-0 -top-48 left-[40%] w-48 h-60 rotate-6 rounded-xl bg-gray-400 shadow-md"
              priority
            />
          </figure>
        </div>

        <div className="hidden md:block px-10">
          <Gallery />
        </div>
      </section>

      {/* About me */}
      <section className="space-y-4 md:space-y-8">
        <h3>Who Am I?</h3>
        <div className="space-y-5">
          <p>
            My name is <b>Yusuf Haji-Ali.</b> I recently graduated from
            Manchester Metropolitan University completing a Bachelor of Science
            Honours in Software Engineering.
          </p>
          <p>
            After leaving university, I joined an AI bootcamp and within a few
            weeks of starting, I was able to develop and deploy my first
            full-stack AI{" "}
            <b>
              <Link
                href="http://logoist.vercel.app"
                className="inline-flex items-center gap-1 font-semibold text-primary dark:text-primary-dark hover:underline underline-offset-4"
                target="_blank"
              >
                project
                <FaExternalLinkAlt className="size-3" />
              </Link>{" "}
            </b>{" "}
            with no prior experience in AI Technologies.
          </p>
          <p>
            I specialise in full-stack web development using TypeScript, React,
            Tailwind, Next.js and more. But I am always learning new things.
          </p>
          <p>
            <b>When I'm not at my desk,</b> I'm probably reading a book,
            travelling or playing sports.
          </p>
        </div>
      </section>

      {/* My Background */}
      <section className="space-y-10">
        <h3>My Background</h3>

        <ul className="animated-list space-y-6">
          {experiences.map((experience, index) => (
            <div key={index}>
              <HoverCard>
                <HoverCardTrigger>
                  <li className="flex justify-between transition">
                    <div className="flex gap-3">
                      <Image
                        src={`/experience/${experience.imageSrc}`}
                        alt={`${experience.company} logo`}
                        className="rounded-full size-12"
                        width={48}
                        height={48}
                      />
                      <div>
                        <h3>{experience.position}</h3>
                        <p>{experience.company}</p>
                      </div>
                    </div>
                    <span className="text-secondary dark:text-secondary-dark text-right">
                      {experience.date}
                    </span>
                  </li>
                </HoverCardTrigger>

                <HoverCardContent className="space-y-2">
                  {experience.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-primary dark:text-primary-dark"
                    >
                      {desc}
                    </p>
                  ))}
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </ul>
      </section>

      <section className="space-y-4 md:space-y-8 overflow-x-clip">
        <h3>Skills</h3>

        <Tabs defaultValue="coding" className="space-y-4">
          <TabsList className="overflow-x-auto max-w-full whitespace-nowrap no-scrollbar">
            <TabsTrigger value="coding">Coding</TabsTrigger>
            <TabsTrigger value="Frameworks & Libraries">
              Frameworks & Libraries
            </TabsTrigger>
            <TabsTrigger value="Tools & Technologies">
              Tools & Technologies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="coding">
            <ul className="flex flex-wrap gap-10">
              {skills
                .filter((skill) => skill.type === "coding")
                .map((skill, idx) => (
                  <li
                    className="transition flex flex-col items-center gap-2 text-sm animate-fadein"
                    key={idx}
                  >
                    <skill.icon className="size-8" />
                    <p>{skill.label}</p>
                  </li>
                ))}
            </ul>
          </TabsContent>

          <TabsContent value="Frameworks & Libraries">
            <ul className="flex flex-wrap gap-x-10 gap-y-6">
              {skills
                .filter((skill) => skill.type === "f&l")
                .map((skill, idx) => (
                  <li
                    className="transition flex flex-col items-center gap-2 text-sm animate-fadein"
                    key={idx}
                  >
                    <skill.icon className="size-8" />
                    <p>{skill.label}</p>
                  </li>
                ))}
            </ul>
          </TabsContent>

          <TabsContent value="Tools & Technologies">
            <ul className="flex flex-wrap gap-10">
              {skills
                .filter((skill) => skill.type === "t&t")
                .map((skill, idx) => (
                  <li
                    className="transition flex flex-col items-center gap-2 text-sm animate-fadein"
                    key={idx}
                  >
                    <skill.icon className="size-8" />
                    <p>{skill.label}</p>
                  </li>
                ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      {/* Socials */}
      <section className="space-y-4 md:space-y-8">
        <h3>Connect</h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 animated-list transition animate-fadein">
          {socials.map((social) => (
            <li
              className="flex w-full h-14 border dark:border-background-secondary-dark px-4 rounded-lg duration shadow dark:hover:shadow-background-secondary-dark transition-opacity "
              key={social.href}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full dark:text-primary-dark"
              >
                <div className="flex items-center gap-3">
                  <social.icon className="text-base size-5" />
                  <span className="">{social.label}</span>
                </div>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
