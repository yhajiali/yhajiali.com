"use client";

import clsx from "clsx";
import React, { useState } from "react";

import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  caption?: string;
  portrait?: boolean;
};

const Carousel = ({ images, caption, portrait = false }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const chevronClass =
    "absolute top-1/2 transform -translate-y-1/2 size-10 bg-background-secondary-dark hover:bg-blue-500 text-white rounded-md transition-colors";

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="space-y-4 py-6">
      <figure
        className={clsx(
          "overflow-hidden rounded-md mx-auto relative",
          portrait ? "max-w-md" : "w-full"
        )}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image.alt}
              className={clsx(
                "size-full flex-shrink-0",
                portrait ? "aspect-auto" : "aspect-video"
              )}
              src={image.src}
              width={400}
              height={300}
            />
          ))}
        </div>

        {/* Chevron buttons */}
        <button onClick={handlePrev} className={clsx(chevronClass, "left-2")}>
          &#10094;
        </button>
        <button onClick={handleNext} className={clsx(chevronClass, "right-2")}>
          &#10095;
        </button>
      </figure>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              "h-1 transition-all duration-300 shadow-md",
              index === currentIndex
                ? "bg-blue-500 w-14"
                : "bg-secondary dark:bg-secondary-dark w-9"
            )}
          />
        ))}
      </div>

      <figcaption className="text-center text-sm text-secondary dark:text-secondary-dark max-w-lg mx-auto">
        {caption}
      </figcaption>
    </div>
  );
};

export default Carousel;
