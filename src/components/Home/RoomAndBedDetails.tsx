import React from 'react'
import { FaBath, FaBed, FaHome } from 'react-icons/fa';
import { LuTreePine, LuUtensilsCrossed } from 'react-icons/lu';

interface Space {
    icon: React.ReactNode;
    name: string;
  }
  
  interface Room {
    name: string;
    bedType: string;
  }
  
  interface Props {
    bedrooms: Room[];
    totalSleeps: number;
    bathrooms: number;
    spaces: Space[];
  }

export default function RoomAndBedDetails() {
    const roomData = {
        bedrooms: [
          { name: 'Bedroom 1', bedType: 'Queen Bed' },
          { name: 'Bedroom 2', bedType: 'Twin Bed' },
        ],
        totalSleeps: 4,
        bathrooms: 1,
        spaces: [
          { icon: <FaHome className="w-5 h-5" />, name: 'Deck or patio' },
          { icon: <LuUtensilsCrossed className="w-5 h-5" />, name: 'Kitchen' },
          { icon: <FaHome className="w-5 h-5" />, name: 'Balcony' },
          { icon: <LuTreePine className="w-5 h-5" />, name: 'Garden' },
        ],
      };

      const {bedrooms,totalSleeps,bathrooms,spaces}=roomData
    
  return (
    <div className="md:w-2/3 p-6 space-y-8">
    {/* Rooms & beds section */}
    <section>
      <h2 className="text-xl font-semibold mb-4">Rooms & beds</h2>
      
      <div className="mb-6">
        <div className="text-lg mb-2">
          {bedrooms.length} bedrooms (sleeps {totalSleeps})
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {bedrooms.map((room, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <FaBed className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900">{room.name}</span>
              </div>
              <div className="text-gray-600 text-sm">1 {room.bedType}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 border-t border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FaBath className="w-5 h-5 text-gray-600" />
          <span className="text-lg">{bathrooms} bathroom</span>
        </div>
        <div className="mt-2 text-gray-600 text-sm">Full Bathroom</div>
      </div>
    </section>

    {/* Spaces section */}
    <section>
      <h2 className="text-xl font-semibold mb-4">Spaces</h2>
      <div className="space-y-4">
        {spaces.map((space, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-600">
            {space.icon}
            <span>{space.name}</span>
          </div>
        ))}
      </div>
    </section>

    <button className="text-blue-600 hover:underline text-sm">
      See all rooms and beds details
    </button>
  </div>
  )
}
