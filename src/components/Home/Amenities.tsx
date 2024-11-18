import Image from "next/image";
import React from "react";
import { BiSolidDryer, BiSolidWasher } from "react-icons/bi";
import { FaCarAlt, FaHome } from "react-icons/fa";
import { LuUtensilsCrossed } from "react-icons/lu";

import managerPropertyLogo from "@/assets/manager-property.png";

interface LanguageProps {
  languages: string[];
}

interface AmenityProps {
  icon: React.ReactNode;
  name: string;
}

export default function Amenities() {
  const languages: string[] = ["English", "French", "German", "Spanish"];
  const amenities: AmenityProps[] = [
    { icon: <LuUtensilsCrossed className="w-6 h-6" />, name: "Kitchen" },
    { icon: <BiSolidDryer className="w-6 h-6" />, name: "Dryer" },
    { icon: <BiSolidWasher />, name: "Washer" },
    { icon: <FaHome className="w-6 h-6" />, name: "Outdoor Space" },
    { icon: <FaCarAlt className="w-6 h-6" />, name: "Parking available" },
    { icon: <BiSolidWasher />, name: "Ocean view" },
  ];
  return (
    <div className="md:w-2/3 p-6 space-y-8">
      {/* Property Manager Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Property manager</h2>

        <div className="flex items-center space-x-4">
          <div className="w-28 h-28 relative">
            <Image src={managerPropertyLogo} alt="" />
          </div>
        </div>
        <p className="text-md font-extralight">Evolve</p>

        {/* Languages Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Languages</h3>
          <p className="text-gray-600">{languages.join(", ")}</p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="space-y-4 grid md:grid-cols-3">
        <h2 className="col-span-1 text-xl font-semibold ">Amenities</h2>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-gray-600">{amenity.icon}</div>
              <span className="text-gray-700">{amenity.name}</span>
            </div>
          ))}
          <button className="text-blue-600 text-left hover:underline text-sm mt-4">
            See all 34 amenities
          </button>
        </div>
      </section>
    </div>
  );
}
