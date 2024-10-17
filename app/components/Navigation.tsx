"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./ui/Logo";
import clsx from "clsx";

import PopoverMenu from "./PopoverMenu";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="flex justify-between py-3 px-4">
      <Logo />

      <nav className="flex justify-between items-center gap-3">
        <ul className="hidden md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className={clsx(
                "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
                pathname === link.href
                  ? "bg-background-secondary"
                  : "dark:text-white/50"
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <PopoverMenu links={links} pathname={pathname} />
      </nav>
    </header>
  );
};

export default Navigation;
