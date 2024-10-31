import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  notExternal?: boolean;
};

const CustomLink = ({ href, label, notExternal }: Props) => {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
      target={notExternal ? "" : "_blank"}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
