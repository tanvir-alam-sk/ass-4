import React from 'react'
import { FaArrowLeft, FaRegHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-gray-200">
    <div className=" mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Left section with back link */}
        <div className="flex items-center">
          <a 
            href="/properties" 
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <FaArrowLeft className='mr-2'/>
            <span className="text-sm font-medium">See all properties</span>
          </a>
        </div>

        {/* Right section with action buttons */}
        <div className="flex items-center space-x-3">
          {/* Share button */}
          <button 
            className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 
                       text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            <FiShare className='mr-3'/>
            <span>Share</span>
          </button>

          {/* Save button */}
          <button 
            className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 
                       text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
           <FaRegHeart className='mr-3' />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}
