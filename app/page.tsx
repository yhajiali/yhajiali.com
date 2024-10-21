import Link from "next/link";
import Image from "next/image";

import Map from "./components/ui/Map";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import avatar from "@/public/avatar.jpeg";

export default function Home() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/yhajiali",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.x.com/yhajiali_",
      icon: FaXTwitter,
      label: "Twitter",
    },
    {
      href: "https://www.github.com/yhajiali",
      icon: FaGithub,
      label: "Github",
    },
  ];

  return (
    <>
      <section className="space-y-12">
        <div className="animate-fadein flex ">
          <div className="space-y-5">
            <figure className="animate-popout size-16 md:size-20 rounded-full overflow-hidden object-cover">
              <Image
                src={avatar}
                alt="Yusuf Haji Ali"
                width={200}
                height={200}
                className="size-full"
              ></Image>
            </figure>
            <div className="animate-fadein space-y-4 max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight">
                I'm Yusuf Haji Ali.
              </h1>
              <p>
                I'm a 26 year old Software Engineer based in the UK. Currently
                I’m exploring AI technologies like OpenAI's API models and
                applying my learning through cool personal projects. 👨🏽‍💻
              </p>
            </div>

            <ul className="flex items-center gap-3 flex-wrap animated-list transition animate-fadein">
              {socials.map((social) => (
                <li
                  className="flex w-full max-w-40 h-12 border dark:border-background-secondary-dark px-4 rounded-lg duration shadow dark:hover:shadow-background-secondary-dark transition-opacity"
                  key={social.href}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 w-full dark:text-primary-dark text-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <social.icon className="text-base" />
                      <span className="">{social.label}</span>
                    </div>
                    <ArrowUpRightIcon className="size-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-fadein grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <Map lng={-2.244644} lat={53.483959} />
            <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
              <p className="text-sm font-medium text-primary dark:text-primary-dark">
                Manchester, UK
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fadein space-y-6">
        <div className="space-y-3">
          <h2>Ongoing Projects</h2>
          <p className="max-w-xl">
            Some of my current passion projects. I'm always keen to listen to
            feedback (I've still got much to learn!)
          </p>
        </div>

        <ul className="animated-list flex flex-nowrap snap-x snap-mandatory gap-6 overflow-x-scroll md:grid grid-cols-2 md:overflow-auto no-scrollbar">
          <li className="col-span-1 min-w-72 snap-start transition-opacity">
            <Link className="underline-offset-4 space-y-4" href="/">
              <figure className="aspect-video overflow-hidden rounded-md bg-secondary">
                <Image
                  alt="Project 1"
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="space-y-1">
                <h3 className="font-medium leading-tight">Sunnah Journeys</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  velit, totam beatae blanditiis suscipit repudiandae.
                </p>
              </div>
            </Link>
          </li>
          <li className="col-span-1 min-w-72 snap-start transition-opacity">
            <Link className="underline-offset-4 space-y-4" href="/">
              <figure className="aspect-video overflow-hidden rounded-md bg-secondary">
                <Image
                  alt="Project 2"
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="space-y-1">
                <h3 className="font-medium leading-tight">My Library</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  velit, totam beatae blanditiis suscipit repudiandae.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Get in touch!</h2>
        <p className="max-w-xl">
          Need more details, or interested in working together? Reach out at any
          of my{" "}
          <Link
            href="/links"
            className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
          >
            links
          </Link>
          . I'd be happy to connect!
        </p>
      </section>
    </>
  );
}
