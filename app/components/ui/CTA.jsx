import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="space-y-3">
      <h2>Get in touch!</h2>
      <p className="max-w-xl">
        Need more details, or interested in working together? Reach out to me at
        any of my{" "}
        <Link
          href="/links"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
        >
          links
        </Link>
        . I'd be happy to connect!
      </p>
    </section>
  );
};

export default CTA;
