import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

const CustomLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
      target="_blank"
    >
      {label}
    </Link>
  );
};

export default CustomLink;
