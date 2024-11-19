/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";


type HotelInfo={
  host:{
    name:string;
    contact:string;
    email:string;
  },
}
export default function HostInfo({host}:HotelInfo) {
  return (
    <div className="bg-white rounded-lg mt-4">
      <div className="p-6 grid md:grid-cols-3">
        <h2 className="text-2xl font-semibold mb-6">About the host</h2>
        <div className="col-span-2">
          <p className="mt-2 text-xl font-semibold">Hosted by {host.name}</p>
          <div className="mt-20">
            <h2 className="text-xl font-semibold mb-2">Languages:</h2>
            <p className="">
              English, French, German, Spanish
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 grid md:grid-cols-3">
        <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
        <div>
        <button className="px-10 py-2 border-[1px] border-black text-blue-600 rounded-full mt-3">Contact Host</button>
        </div>
      </div>
    </div>
  );
}
