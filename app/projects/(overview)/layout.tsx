import React from "react";
import CTA from "../../components/ui/CTA";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <CTA />
    </>
  );
};

export default layout;
