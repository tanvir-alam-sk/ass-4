'use client'
import React, { useState } from 'react'
import { FaChild, FaUser } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

export default function TravelersCountModal() {
    const [travelerCountModalOpen, setTravelerCountModalOpen] = useState(false);
  const [travelers, setTravelers] = useState({ adults: 1, children: 0 });
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX
    });
    setTravelerCountModalOpen(!travelerCountModalOpen);
  };

  const handleSave = () => {
    setTravelerCountModalOpen(false);
  };

  const handleIncrement = (type: 'adults' | 'children') => {
    setTravelers((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleDecrement = (type: 'adults' | 'children') => {
    if (type === 'adults' && travelers.adults > 1) {
      setTravelers((prev) => ({
        ...prev,
        adults: prev.adults - 1
      }));
    } else if (type === 'children' && travelers.children > 0) {
      setTravelers((prev) => ({
        ...prev,
        children: prev.children - 1
      }));
    }
  };
  return (
    <div className="">
      {/* Toggle Button */}
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full"
      >
        <FaUser size={20} />
        <span>
          {travelers.adults} {travelers.adults === 1 ? 'Adult' : 'Adults'}
          {travelers.children > 0 && `, `}
          {travelers.children > 0 && <FaChild className='inline ml-2'></FaChild>}
          {travelers.children > 0 && ` ${travelers.children} ${travelers.children === 1 ? 'Child' : 'Children'}`}
        </span>
      </button>

      {/* Modal/Dropdown */}
      {travelerCountModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="bg-opacity-50" 
            onClick={() => setTravelerCountModalOpen(false)}
          />

          {/* Dropdown Content */}
          <div 
            className="absolute z-50 bg-white rounded-lg shadow-lg w-80"
            style={{ 
              top: `${dropdownPosition.top}px`, 
              left: `${dropdownPosition.left}px` 
            }}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Travelers</h2>
                <button 
                  onClick={() => setTravelerCountModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <RxCross1 size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Adults Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Adults</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement('adults')}
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 
                        ${travelers.adults <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      disabled={travelers.adults <= 1}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{travelers.adults}</span>
                    <button
                      onClick={() => handleIncrement('adults')}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-sm text-gray-500">Ages 0 to 17</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement('children')}
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 
                        ${travelers.children <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      disabled={travelers.children <= 0}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{travelers.children}</span>
                    <button
                      onClick={() => handleIncrement('children')}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSave}
                className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
