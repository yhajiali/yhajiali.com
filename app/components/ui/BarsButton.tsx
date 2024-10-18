"use client";
import clsx from "clsx";
import React from "react";

type BarsButtonProps = {
  menuOpen: boolean; // Define the type for menuOpen
};

const BarsButton: React.FC<BarsButtonProps> = ({ menuOpen }) => {
  return (
    <div className="relative w-5 h-[13px] group transition outline-none">
      <div
        className={clsx(
          "w-full h-[1.5px] bg-black/70 group-hover:bg-foreground dark:bg-white/70 dark:group-hover:bg-white/90 rounded-sm absolute",
          menuOpen
            ? "top-1/2 -translate-y-1/2 rotate-45 transition-[top,transform] duration-300 delay-[0ms,300ms] ease-in-out"
            : "top-0 rotate-0 transition-[top,transform] duration-300 delay-[300ms,0ms] ease-in-out"
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-[1.5px] bg-black/70 group-hover:bg-foreground dark:bg-white/70 dark:group-hover:bg-white/90 rounded-sm absolute top-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out",
          menuOpen ? "opacity-0" : "opacity-100"
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-[1.5px] bg-black/70 group-hover:bg-foreground dark:bg-white/70 dark:group-hover:bg-white/90 rounded-sm absolute",
          menuOpen
            ? "bottom-[40%] -translate-y-1/2 -rotate-45 transition-[bottom,transform] duration-300 delay-[0ms,300ms] ease-in-out"
            : "bottom-0 rotate-0 transition-[bottom,transform] duration-300 delay-[300ms,0ms] ease-in-out"
        )}
      ></div>
    </div>
  );
};

export default BarsButton;
