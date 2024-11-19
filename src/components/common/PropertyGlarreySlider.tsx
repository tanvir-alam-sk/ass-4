/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
// import Image from 'next/image';
import React, { useState } from 'react'
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PropertyGlarreySlider({isModalOpen,setModalOpen,images,title}:any) {

 const [currentIndex, setCurrentIndex] = useState(0);


 // Handlers for modal navigation
 
 const closeModal = () => setModalOpen(false);
 const handlePrevious = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
 const handleNext = () =>
   currentIndex < images.length - 1 && setCurrentIndex(currentIndex + 1);

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl bg-black">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-yellow-600 text-2xl font-extrabold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={`http://localhost:8000${images[currentIndex]}`}
              alt={images[currentIndex].alt}
              className="w-full rounded-md h-[500px] object-cover mt-8"
            />

            {/* Caption */}
            <div className="text-center text-white mt-4">
              <p>{images[currentIndex].alt}</p>
              <p className='text-center text-xl block'>{title}</p>
              <p>
                {currentIndex + 1} / {images.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                className={`text-white px-4 py-2 rounded-md font-extrabold ${
                  currentIndex === 0 && "opacity-50 cursor-not-allowed" 
                }`}
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <FaChevronLeft/>
              </button>
              <button
                className={`text-white px-4 py-2 font-extrabold rounded-md ${
                  currentIndex === images.length - 1
                    && "opacity-50 cursor-not-allowed"
                    
                }`}
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
