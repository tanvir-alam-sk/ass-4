/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropertyGlarreySlider from "../common/PropertyGlarreySlider";

export default function PropertyGallery({hotels}:any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const localImages = [
    "/assets/Gallery/gallery1.jpeg",
    "/assets/Gallery/gallery2.jpeg",
    "/assets/Gallery/gallery3.webp",
    "/assets/Gallery/gallery4.jpeg",
    "/assets/Gallery/gallery5.webp",
  ];

  // Check for screen width on the client side only
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? localImages.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === localImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // dataFetching
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="relative mx-auto">
      {/* Carousel for Mobile */}
      {isMobile ? (
        <div className="relative w-full">
          {/* Images */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {/* http://localhost:8000${image} */}
              {hotels?.images.map((image:string, index:number) => (
                <img
                  key={index}
                  src={`http://localhost:8000${image}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover mx-1"
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2  text-white  rounded-full"
          >
            ❯
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {localImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        /* Grid Layout for Large Screens */
        <div className="grid grid-cols-4 gap-x-2 h-[480px]">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 relative">
            {hotels ? (
              <Image
                src={`http://localhost:8000${hotels?.images[0]}`}
                alt="Lake view deck"
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
              />
            ) : (
              <Image
                src={localImages[0]}
                alt="Lake view deck"
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
              />
            )}
          </div>

          {/* Right side grid */}
          <div className="col-span-2 grid grid-cols-2 gap-2 h-[480px]">
            {hotels
              ? hotels.images.slice(1, 4).map((src:string, index:number) => (
                  <div key={index} className="relative">
                    <Image
                      src={`http://localhost:8000${src}`}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className={
                        index === 1
                          ? "rounded-tr-lg"
                          : index === 3
                          ? "rounded-br-lg"
                          : ""
                      }
                    />
                  </div>
                ))
              : localImages.slice(1, 4).map((src, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className={
                        index === 1
                          ? "rounded-tr-lg"
                          : index === 3
                          ? "rounded-br-lg"
                          : ""
                      }
                    />
                  </div>
                ))}
            <div className="relative group">
              {hotels ? (
                <Image
                  src={`http://localhost:8000${hotels?.images[4]}`}
                  alt="Living area"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-br-lg"
                />
              ) : (
                <Image
                  src={localImages[4]}
                  alt="Living area"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-br-lg"
                />
              )}
              <button onClick={openModal} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all rounded-br-lg">
                <div className="text-white flex items-center">
                  <span className="text-3xl font-bold">{hotels?.images.length-4}+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <PropertyGlarreySlider title={hotels.title} images={hotels?.images} isModalOpen={isModalOpen} setModalOpen={setModalOpen}></PropertyGlarreySlider>
    </div>
  );
}
