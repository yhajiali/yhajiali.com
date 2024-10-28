import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | 404 :( ",
  description: "Uh oh! This page does not exist",
};

const PageNotFound = (): JSX.Element => {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-lg dark:text-white text-foreground">404</h3>
      <h2 className="text-4xl font-semibold text-foreground">Page not found</h2>
      <p className="text-secondary">
        Sorry, the page you are looking for could not be found or has been
        removed :(
      </p>
      <Link
        href="/"
        className="text-sm font-semibold inline-flex items-center gap-x-1 group transition-all duration-150 text-foreground"
      >
        Return home
        <ArrowLongRightIcon className="size-5 group-hover:translate-x-1 duration-75" />
      </Link>
    </div>
  );
};

export default PageNotFound;
