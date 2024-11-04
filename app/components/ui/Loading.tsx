import React from "react";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <div className="w-screen h-screen bg-background dark:bg-background-dark z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3">
      <div className="size-12 border-2 border-r-blue-500 rounded-full animate-spin" />
      <p className="text-primary dark:text-primary-dark uppercase">
        Coming Soon!
      </p>
    </div>
  );
};

export default Loading;
