import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: Props) => {
  return (
    <header>
      <h1 className="animate-fadein text-3xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="animate-fadein text-secondary">{subtitle}</p>
    </header>
  );
};

export default Heading;
