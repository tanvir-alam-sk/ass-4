'use client'
import React,{useState} from 'react'

interface TabProps {
    labels: string[];
  }

export default function OverviewPage({ labels }:TabProps) {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full mt-10">
      <div className="flex space-x-8 border-b border-gray-300">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-gray-500 ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 0 && <div>Overview Content</div>}
        {activeTab === 1 && <div>Amenities Content</div>}
        {activeTab === 2 && <div>Policies Content</div>}
      </div>
    </div>
  )
}
