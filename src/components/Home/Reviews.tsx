'use client'
import Link from "next/link";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

interface Review {
  rating: string;
  text: string;
  author: string;
  date: string;
}

const reviews: Review[] = [
  {
    rating: "10/10 Excellent",
    text: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
    author: "Kyle G.",
    date: "Sep 25, 2024",
  },
  {
    rating: "10/10 Excellent",
    text: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
    author: "Cindy B.",
    date: "Sep 23, 2024",
  },
  // Add more reviews as needed
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  return (
    <div className="grid md:grid-cols-3 mx-auto p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-6xl font-thin text-green-800">9.8/10</h1>
          <p className="text-xl font-semibold">Exceptional</p>
          <p className="text-gray-900 my-3">24 reviews <CiCircleInfo className="inline"/></p>
          <p className="text-sm text-gray-600">Reviews are verified unless labeled otherwise.</p>
        </div>
      </div>
      <div className="col-span-2">
      <h2 className="text-lg font-semibold mb-2">Recent reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-2 rounded-lg p-3 py-4 bg-gray-50 hover:bg-gray-100 transition">
            <div className="font-bold mb-4">{review.rating}</div>
            <p className="text-gray-700 mt-1">{review.text}...</p>
            <Link href="#" className="my-2 text-blue-500">Read More</Link>
            <div className="mt-2 text-sm text-gray-500">
              <span>{review.author}</span> | <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-500 hover:underline">See all 24 reviews →</button>
      </div>
    </div>
  );
}
