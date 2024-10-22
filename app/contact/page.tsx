import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import Heading from "../components/ui/Heading";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Yusuf Haji Ali | Contact",
  description: "Explore my latest personal Contact.",
};

const Contact = () => {
  return (
    <section className="space-y-10">
      <Heading
        title="Contact"
        subtitle="Let's have a chat, I would love to hear from you."
      />

      <ContactForm />

      <p className="animate-fadein">
        Alternatively, reach out to me at any of my{" "}
        <Link
          href={"/links"}
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
        >
          links.
        </Link>
      </p>
    </section>
  );
};

export default Contact;