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
    <header className="flex items-center justify-between py-5 px-6 md:px-4 max-w-3xl mx-auto sticky top-0 z-50 bg-background">
      <Logo />

      <nav className="flex justify-between items-center gap-3">
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm hover:text-foreground transition-all duration-150",
                  pathname === link.href
                    ? "bg-background-secondary"
                    : "dark:text-white/50"
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <PopoverMenu links={links} pathname={pathname} />
      </nav>
    </header>
  );
};

export default Navigation;
