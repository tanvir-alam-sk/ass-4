"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PropertyGallery() {
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

  const images = [
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto">
      {/* Carousel for Mobile */}
      {isMobile ? (
        <div className="relative w-full mx-auto">
        {/* Images */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
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
          {images.map((_, index) => (
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
            <Image
              src={images[0]}
              alt="Lake view deck"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          {/* Right side grid */}
          <div className="col-span-2 grid grid-cols-2 gap-2 h-[480px]">
            {images.slice(1, 4).map((src, index) => (
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
              <Image
                src={images[4]}
                alt="Living area"
                layout="fill"
                objectFit="cover"
                className="rounded-br-lg"
              />
              <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all rounded-br-lg">
                <div className="text-white flex items-center">
                  <span className="text-3xl font-bold">30+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    // <div className="relative  mx-auto">
    //   <div className="grid grid-cols-4 gap-x-2 h-[480px]">
    //     {/* Main large image */}
    //     <div className="col-span-2 row-span-2 relative">
    //       <img
    //         src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         alt="Lake view deck"
    //         className="w-full h-full object-cover rounded-l-lg"
    //       />
    //     </div>

    //     {/* Right side grid */}
    //     <div className="col-span-2 grid grid-cols-2 gap-2">
    //       {/* Top row */}
    //       <div className="relative">
    //         <img
    //           src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
    //           alt="Cottage exterior"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <div className="relative">
    //         <img
    //           src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           alt="Living room"
    //           className="w-full h-full object-cover rounded-tr-lg"
    //         />
    //       </div>

    //       {/* Bottom row */}
    //       <div className="relative">
    //         <img
    //           src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           alt="Reading nook"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <div className="relative group">
    //         <img
    //           src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           alt="Living area"
    //           className="w-full h-full object-cover rounded-br-lg"
    //         />
    //         {/* Show more photos overlay */}
    //         <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all rounded-br-lg">
    //           <div className="text-white flex items-center">
    //             {/* <Copy className="w-5 h-5 mr-2" /> */}
    //             <span className="font-medium text-3xl font-bold">30+</span>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
