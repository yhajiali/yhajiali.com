import React from "react";
import CustomLink from "./CustomLink";

const CTA = () => {
  return (
    <section className="pt-14 space-y-3 animate-fadein">
      <h3>Get in touch!</h3>
      <p className="max-w-xl">
        Need more details, or interested in working together? Reach out to me at
        any of my <CustomLink href="/links" label="links" notExternal />. I'd be
        happy to connect!
      </p>
    </section>
  );
};

export default CTA;
