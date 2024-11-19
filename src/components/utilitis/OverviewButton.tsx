"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toSlug } from "./slug";
import { HotelsType, HotelType } from "./dataDype";

interface TabProps {
  labels: string[];
}

const options: string[] = ["option 1", "option 2", "option 3"];

export default function OverviewButton({ labels }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [hotels, setHotels] = useState<HotelsType | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/hotel")
      .then((response) => response.json())
      .then((data) => setHotels(data.hotel));
  }, []);

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

      <div className="relative group inline-block">
        <button className="pb-2 text-gray-500 font-semibold ">Hotels</button>
        {/* Dropdown Menu */}
        <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity">
          {hotels?.map((hotel, index) => (
            <Link href={`/hotel-details/${toSlug(hotel.title)}/${hotel.hotel_id}`} key={index}>
            <li
              
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {hotel.title}
            </li></Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
