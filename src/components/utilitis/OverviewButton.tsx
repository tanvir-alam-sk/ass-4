'use client';
import React, { useState } from "react";

interface TabProps {
  labels: string[];
}

export default function OverviewButton({ labels }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex space-x-8 border-b border-gray-300 ">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`pb-2 text-gray-500 ${
            activeTab === index
              ? "border-b-2 border-blue-600 font-semibold text-sky-600"
              : "hover:text-blue-600"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
