import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

type Link = { label: string; href: string };

type Props = {
  links: Link[];
  pathname: string;
};

const PopoverMenu = ({ links, pathname }: Props) => {
  return (
    <div className="md:hidden flex">
      <Menu>
        <MenuButton>
          <Bars3Icon className="size-5 dark:text-white/50 dark:hover:text-white transition-colors" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-40 mt-3 shadow-md origin-top-right rounded-xl border dark:border-white/5 dark:bg-white/5 p-1 text-sm/6 text-foreground transition duration-150 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {links.map((link, idx) => (
            // {idx === links.length - 1 && (
            //   <div className="my-1 h-px bg-white/5" />
            // )}

            <MenuItem key={idx}>
              <Link
                href={link.href}
                className={clsx(
                  "group flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:text-foreground transition-colors",
                  pathname === link.href
                    ? "bg-background-secondary dark:bg-[#222]"
                    : "text-foreground dark:text-white/50"
                )}
              >
                {link.label}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default PopoverMenu;
