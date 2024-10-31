"use client";

import React, { useEffect, useState } from "react";

import { CheckIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Menu>
      <MenuButton className="hover:cursor-pointer outline-none ring-0">
        {({ active }) => {
          const iconClassName = clsx(
            "size-5 dark:text-white/70 hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors",
            active ? "text-primary dark:text-primary-dark" : "text-secondary"
          );

          return resolvedTheme === "dark" ? (
            <MoonIcon className={iconClassName} />
          ) : (
            <SunIcon className={iconClassName} />
          );
        }}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-36 mt-3 shadow-md origin-top-right rounded-xl border dark:border-white/5 bg-background dark:bg-background-secondary-dark p-1 text-sm/6 text-foreground transition duration-150 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50"
      >
        {themes.map((themeOption) => (
          <MenuItem key={themeOption}>
            <button
              className={clsx(
                "capitalize group flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:text-foreground hover:cursor-pointer hover:bg-background-secondary hover:dark:bg-[#222] hover:font-semibold text-foreground",
                themeOption === theme
                  ? "font-semibold text-foreground"
                  : "dark:text-white/50"
              )}
              onClick={() => {
                setTheme(themeOption);
              }}
            >
              <CheckIcon
                className={clsx(
                  "size-5",
                  themeOption === theme ? "visible" : "invisible"
                )}
              />
              {themeOption}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ThemeSwitcher;
