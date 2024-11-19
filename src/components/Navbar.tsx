import React from "react";
import { FaArrowLeft } from "react-icons/fa";
// import { FiShare } from "react-icons/fi";
import NavberBooked from "./NavberBooked";
import ShareModal from "./common/ShareModal";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section with back link */}
          <div className="flex items-center">
            <a
              href="/properties"
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <FaArrowLeft className="mr-2" />
              <span className="text-sm font-medium">See all properties</span>
            </a>
          </div>

          {/* Right section with action buttons */}
          <div className="flex items-center space-x-3">
            <ShareModal></ShareModal>

            {/* Save button */}
            <NavberBooked></NavberBooked>
          </div>
        </div>
      </div>
    </nav>
  );
}
