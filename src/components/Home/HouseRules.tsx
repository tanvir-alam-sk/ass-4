import React from "react";
import { FaDog } from "react-icons/fa";
import { LuBaby, LuPartyPopper } from "react-icons/lu";
import { PiCigaretteSlash } from "react-icons/pi";

interface Rule {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HouseRules() {
  const checkInRules = [
    "Check in after 3:00 PM",
    "Minimum age to rent: 25",
    "Check out before 11:00 AM",
  ];

  const propertyRules: Rule[] = [
    {
      icon: <LuBaby className="w-5 h-5" />,
      title: "Children",
      description: "Children allowed: ages 0-17",
    },
    {
      icon: <LuPartyPopper className="w-5 h-5" />,
      title: "Events",
      description: "No events allowed",
    },
    {
      icon: <FaDog className="w-5 h-5" />,
      title: "Pets",
      description: "No pets allowed",
    },
    {
      icon: <PiCigaretteSlash className="w-5 h-5" />,
      title: "Smoking",
      description: "Smoking is not permitted",
    },
  ];

  return (
    <div className="p-6 grid md:grid-cols-3">
      <h2 className="text-2xl font-semibold mb-6">House Rules</h2>

      <div className="col-span-2 ">
        {/* Check-in/out Rules */}
        <div className="space-y-2 mb-6 grid md:grid-cols-2">
          {checkInRules.map((rule, index) => (
            <div key={index} className="flex items-center">
              <span className="text-gray-700 text-base">{rule}</span>
            </div>
          ))}
        </div>

        {/* Property Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {propertyRules.map((rule, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-gray-600">{rule.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{rule.title}</h3>
                <p className="text-gray-600">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
