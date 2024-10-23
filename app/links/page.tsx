import React from "react";
import { socials } from "../lib/links";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Avatar from "../components/ui/Avatar";

const Links = () => {
  return (
    <div className="space-y-10 max-w-lg mx-auto text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Avatar />
        <div className="animate-fadein">
          <h3 className="text-2xl font-bold tracking-tight">Yusuf Haji-Ali</h3>
          <p>Software Engineer.</p>
        </div>
      </div>
      <p className="animate-fadein max-w-sm mx-auto">
        Here are my socials and ways to connect with me. Feel free to reach out!
      </p>
      <ul className="grid grid-cols-1 gap-3 animated-list transition animate-fadein">
        {socials.map((social, index) => (
          <li
            className="flex w-full h-14 border dark:border-background-secondary-dark px-4 rounded-lg duration shadow dark:hover:shadow-background-secondary-dark transition-opacity "
            key={index}
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
  );
};

export default Links;
