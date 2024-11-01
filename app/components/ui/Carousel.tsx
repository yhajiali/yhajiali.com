"use client";

import clsx from "clsx";
import React, { useState } from "react";

import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  caption?: string;
};

const Carousel = ({ images, caption }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
      <figure className="max-w-md overflow-hidden rounded-md mx-auto relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image.alt}
              className="object-cover size-full"
              src={image.src}
              width={400}
              height={300}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 size-10 bg-background-secondary-dark text-white rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 size-10 bg-background-secondary-dark text-white rounded-full"
        >
          &#10095;
        </button>
      </figure>
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              "w-10 h-1 transition-all duration-300",
              index === currentIndex
                ? "bg-blue-500 w-14"
                : "bg-primary dark:bg-primary-dark"
            )}
          />
        ))}
      </div>
      <figcaption className="text-center text-sm text-secondary dark:text-secondary-dark max-w-lg mx-auto">
        {caption}
      </figcaption>
    </>
  );
};

export default Carousel;
