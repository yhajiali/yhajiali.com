"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./ui/Logo";
import clsx from "clsx";

import ThemeSwitcher from "./ThemeSwitcher";
import PopoverMenu from "./PopoverMenu";

import { navLinks } from "../../lib/links";

const Navigation = () => {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="flex items-center justify-between py-5 px-6 md:px-4 max-w-3xl mx-auto">
      <Logo />

      <nav className="flex justify-between items-center gap-5">
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm dark:hover:text-primary-dark transition",
                  pathname === link.href
                    ? "bg-background-secondary dark:bg-background-secondary-dark"
                    : "dark:text-white/50"
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <PopoverMenu links={navLinks} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
