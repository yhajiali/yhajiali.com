"use client";
import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";

const BarsButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside the button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      ref={buttonRef}
      className="relative w-4 h-[11px] cursor-pointer z-[2000] group transition"
      onClick={toggleMenu}
    >
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
            ? "bottom-1/3 -translate-y-1/2 -rotate-45 transition-[bottom,transform] duration-300 delay-[0ms,300ms] ease-in-out"
            : "bottom-0 rotate-0 transition-[bottom,transform] duration-300 delay-[300ms,0ms] ease-in-out"
        )}
      ></div>
    </div>
  );
};

export default BarsButton;
