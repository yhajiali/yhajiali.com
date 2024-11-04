import React from "react";
import CTA from "../../components/ui/CTA";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <article>
      {children}
      <CTA />
    </article>
  );
};

export default layout;
