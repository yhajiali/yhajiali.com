"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import localFont from "next/font/local";

const ticketingFont = localFont({
  src: "../../fonts/ticketing.woff2",
  display: "swap",
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-xl overflow-hidden";
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative w-full h-full shadow-md rounded-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="absolute inset-0 object-cover w-full h-full bg-neutral-400 pointer-events-none rounded-xl object-bottom hidden md:flex"
            priority
          />
          {children}
        </div>
        <div
          className={clsx(
            shared,
            "bg-[#FFFAF2] flex items-center rounded-xl overflow-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center">
            <span className="absolute w-[500px] h-[500px] rotate-[-20deg] bg-repeat bg-[length:280px] bg-[url('/gallery/photopaper.png')]" />
            <div className="z-[1] px-6">
              <div
                className={clsx(
                  ticketingFont.className,
                  "flex flex-col gap-1 uppercase"
                )}
              >
                <p className="text-secondary">{fileName}</p>
                {meta && <p className="text-sm text-secondary">{meta}</p>}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="flex gap-4 h-[268px] relative">
      <Photo
        src={"/gallery/koprulu-canyon.jpg"}
        filename="The Köprülü Canyon"
        meta="07-07-2022"
        alt="Me at the Koprulu Canyon"
        width={300}
        height={239}
        rotate={-6}
        left={-70}
        index={1}
      />
      <Photo
        src={"/gallery/me-ramli.jpg"}
        meta="27-10-2022"
        filename="Gym w/ Ramli 💪🏽"
        alt="At the Gym with Ramli"
        width={230}
        height={250}
        rotate={6.3}
        left={130}
        index={2}
        flipDirection="left"
      />
      <Photo
        src={"/gallery/media-city.jpeg"}
        meta="28-07-2023"
        filename="Media City"
        alt="Night view at Media City"
        width={280}
        height={235}
        rotate={-5.4}
        left={300}
        index={3}
      />
      <Photo
        src={"/gallery/coffeeshop.jpg"}
        meta="07-12-2023"
        filename="Cha Cha Chai, Mcr"
        alt={"Me at a Coffeeshop in Manchester"}
        width={220}
        height={260}
        rotate={7.6}
        left={500}
        index={4}
        flipDirection="left"
      />
    </section>
  );
}
