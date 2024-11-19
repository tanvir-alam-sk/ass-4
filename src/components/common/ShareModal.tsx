"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { FiShare } from "react-icons/fi";

export default function ShareModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const shareOptions = [
    { name: "Messages", color: "bg-green-500", icon: "📩" },
    { name: "WhatsApp", color: "bg-green-600", icon: "📱" },
    { name: "Messenger", color: "bg-blue-500", icon: "💬" },
    { name: "Facebook", color: "bg-blue-600", icon: "📘" },
    { name: "X", color: "bg-black", icon: "❌" },
    { name: "Copy link", color: "bg-gray-500", icon: "🔗" },
  ];
  return (
    <div className=" flex flex-col items-center justify-center w-[300px]">
      <button onClick={() => setModalOpen(!isModalOpen)}
        className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 
                       text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <FiShare className="mr-3" />
        <span>Share</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-32 w-full  bg-opacity-50 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Modal Header */}
            <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setModalOpen(false)}
          >
            &times;
          </button>
            {/* Vacation Details */}
            <div className="mt-4 flex items-center ">
              <img
                src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                alt="Vacation Home"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  Juneau Vacation Home: Stunning View + Beach Access
                </h3>
                <p className="text-xs text-gray-500">
                  United States of America
                </p>
                <p className="text-xs text-gray-500 font-bold">9.8/10</p>
              </div>
            </div>

            {/* Share Options */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  className={`flex flex-col items-center justify-center p-3 rounded-md ${option.color} text-white hover:opacity-80`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-xs mt-1">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
