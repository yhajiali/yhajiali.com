import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import BarsButton from "./ui/BarsButton";

type Link = { label: string; href: string };

type Props = {
  links: Link[];
  pathname: string;
};

const PopoverMenu = ({ links, pathname }: Props) => {
  return (
    <div className="md:hidden flex">
      <Menu>
        <MenuButton className="hover:cursor-pointer outline-none ring-0">
          {({ active }) => <BarsButton menuOpen={active} />}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-40 mt-3 shadow-md origin-top-right rounded-xl border dark:border-white/5 bg-background dark:bg-background-secondary-dark p-1 text-sm/6 text-foreground transition duration-150 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50"
        >
          {links.map((link, idx) => (
            <MenuItem key={idx}>
              <Link
                href={link.href}
                className={clsx(
                  "group flex w-full items-center gap-2 rounded-lg py-2 px-3 dark:data-[focus]:text-[#ededed] transition",
                  pathname === link.href
                    ? "bg-background-secondary dark:bg-[#222] font-semibold"
                    : "dark:text-white/50"
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
