import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HotelType } from "../utilitis/dataDype";
import TravelersCountModal from "../common/TravelersCountModal";


type Hotel = {
  hotel: HotelType;
};

export default function HotelBooked({ hotel }: Hotel) {
  return (
    <div className="container mx-auto p-4">
      {/* Main Container */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Property Details */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <h2 className="text-4xl font-bold">
              {/* Juneau Vacation Home: Stunning View + Beach Access */}
              {hotel.title}
            </h2>
            <p className="text-green-700 font-semibold mt-2">
              <span className="text-xl">9.8</span> Exceptional
              <a href="#" className="text-blue-500 mt-2 block">
                See all 24 reviews{" "}
                <FaChevronRight className="font-normal inline" />
              </a>
            </p>
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            {hotel?.amenities.map((amenitie: string,index:number) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{amenitie}</span>
              </div>
            ))}
          </div>

          {/* Popular Amenities */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Popular amenities</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>Barbecue grill</li>
              <li>Outdoor Space</li>
              <li>Kitchen</li>
              <li>Washer</li>
              <li>Parking available</li>
              <li>Dryer</li>
            </ul>
            <a href="#" className="text-blue-500 underline mt-2 inline-block">
              See all property amenities
            </a>
          </div>

          {/* Explore the Area */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Explore the area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-56 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                ></iframe>
                <p>Auke Bay</p>
                <p className="mb-2">Auke Bay</p>
              </div>
              <div className="h-full">
                <ul className="space-y-2 flex flex-col justify-between h-full">
                  <li className="flex justify-between">
                    <span>Auke Bay</span> <span>6 min drive</span>
                  </li>
                  <li className="flex justify-between">
                    <span>University of Alaska-Southeast</span>{" "}
                    <span>10 min drive</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mendenhall Golf Course</span>{" "}
                    <span>14 min drive</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Juneau, AK (JNU-Juneau Intl.) </span>
                    <span>14 min drive</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 underline mt-2 inline-block"
                    >
                      See more about this area
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="md:px-5 md:col-span-1">
          <div className="bg-slate-900 text-white rounded-xl p-3 ps-5 py-5 md:p-8 mb-6 flex items-center gap-3 shadow-lg">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 border-t-transparent animate-spi duration-5000 relative w-[56px] h-[56px]">
                  <div className="w-3 h-3 bg-white rounded-sm absolute top-[2px] left-[2px]"></div>
                  <div className="w-3 h-3 bg-white rounded-sm rotate-45 absolute -top-[3px] left-[22px] "></div>
                  <div className="w-3 h-3 bg-white rounded-sm absolute top-[2px] right-[2px] "></div>
                  <div className="w-3 h-3 bg-white rounded-sm rotate-45 absolute top-[22px] -left-[3px] "></div>
                  <div className="w-3 h-3 bg-slate-900 rounded -m-3 absolute"></div>
                  <div className="w-3 h-3 bg-white rounded-sm rotate-45 absolute top-[22px] -right-[3px]"></div>
                  <div className="w-3 h-3 bg-white rounded-sm  absolute bottom-[2px] left-[2px]"></div>
                  <div className="w-3 h-3 bg-white rounded-sm rotate-45 absolute -bottom-[3px] left-[22px]"></div>
                  <div className="w-3 h-3 bg-white rounded-sm absolute bottom-[2px] right-[2px]"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-2 md:px-8">
              <p className="text-lg font-semibold leading-normal">
                Members get our best prices when signed in!
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors mt-3">
                Sign in
              </button>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <p className="text-2xl font-bold mb-4">
              $134 <span className="text-lg font-normal">per night</span>
            </p>
            <p className="text-green-700 font-semibold mb-4">
              Free cancellation before Mon, Nov 4
            </p>
            <div className="flex items-center mb-4 space-x-2 text-green-700">
              <MdOutlineCalendarMonth className="w-5 h-5" />
              <span>Your dates are available</span>
            </div>

            {/* Date Picker */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label htmlFor="startDate" className="text-sm font-semibold">
                  Start date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="border w-full p-2 mt-1 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="text-sm font-semibold">
                  End date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="border w-full p-2 mt-1 rounded-md"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="mb-4">
              {/* <label htmlFor="travelers" className="text-sm font-semibold">
                Travelers
              </label>
              <input
                type="number"
                id="travelers"
                defaultValue={2}
                className="border w-full p-2 mt-1 rounded-md"
              /> */}
              <TravelersCountModal></TravelersCountModal>
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total</span>
              <span>$543</span>
            </div>

            {/* Book Now Button */}
            <button className="bg-blue-600 text-white font-semibold w-full py-2 rounded-md hover:bg-blue-700">
              Book now
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              You will not be charged yet
            </p>
            {/* Contact Host and Property Info */}
            <div className="mt-6 text-center text-gray-500">
              <a href="#" className="text-blue-500 underline">
                Contact host
              </a>
              <p>Property # 9838104ha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
