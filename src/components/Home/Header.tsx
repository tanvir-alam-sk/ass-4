import React from 'react'
import CountryModal from '../common/CountryModal';

export default function Header() {
    // const openCountryModal=()=>{}
  return (
    <nav className="border-b border-gray-200 bg-white ">
      <div className="max-w-screen mx-auto px-4">
        <div className="hidden md:flex items-center justify-end h-16">
          {/* Center section with main navigation */}
          <div className=" md:flex items-center space-x-6">
            {/* Language/Region Selector */}
           <CountryModal></CountryModal>

            {/* Main Navigation Items */}
            <a href="/trip-boards" className="text-gray-700 hover:text-gray-900">
              Trip Boards
            </a>
            <a href="/list-property" className="text-gray-700 hover:text-gray-900">
              List your property
            </a>
            <a href="/help" className="text-gray-700 hover:text-gray-900">
              Help
            </a>
            <a href="/my-trips" className="text-gray-700 hover:text-gray-900">
              My trips
            </a>
            <a 
              href="/sign-in"
              className="text-gray-700 hover:text-gray-900"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
