import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Heading from "../components/ui/Heading";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { socials } from "../lib/links";
import Gallery from "./ui/Gallery";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | About",
  description:
    "A glimpse into me, my skills and experience in software development.",
};

const About = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <Heading title="About" subtitle="A glimpse into me." />

      <div className="md:hidden">
        <figure className="animate-fadein">
          <Image
            src={"/gallery/koprulu-canyon.jpg"}
            alt={"Me at the Köprülü Canyon"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover object-bottom shadow-md w-64 sm:w-80 sm:h-72"
            priority
          />
        </figure>

        <figure className="animate-fadein">
          <Image
            src={"/gallery/coffeeshop.jpg"}
            alt={"Me at a Coffeeshop in Manchester"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 h-60 rotate-6 rounded-xl bg-gray-400 shadow-md"
            priority
          />
        </figure>
      </div>

      <div className="hidden md:block px-10">
        <Gallery />
      </div>

      <div className="flex animate-fadein flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-6">
          <p>
            My name is{" "}
            <span className="font-semibold text-primary dark:text-primary-dark">
              Yusuf Haji-Ali.
            </span>{" "}
            I recently graduated from Manchester Metropolitan University
            completing a Bachelor of Science Honours in Software Engineering.
          </p>
          <p>
            After leaving university, I joined an AI bootcamp and within a few
            weeks of starting, I was able to develop and deploy my first
            full-stack AI{" "}
            <Link
              href="http://logoist.vercel.app"
              className="inline-flex items-center gap-1 font-semibold text-primary dark:text-primary-dark hover:underline underline-offset-4"
              target="_blank"
            >
              project
              <FaExternalLinkAlt className="size-3" />
            </Link>{" "}
            with no prior experience in AI Technologies.
          </p>
          <p>
            I specialise in full-stack web development using TypeScript, React,
            Tailwind, Next.js and more. But I am always learning new things.
          </p>
          <p>
            <span className="font-semibold text-primary dark:text-primary-dark">
              When I'm not at my desk,
            </span>{" "}
            I'm probably reading a book, travelling or playing sports.
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default About;

const experience = [
  {
    title: "",
    company: "",
    time: "",
    imageSrc: "",
    link: "",
  },
];
