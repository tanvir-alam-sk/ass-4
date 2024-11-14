import React from 'react'

export default function PropertyGallery() {
  return (
    <div className="relative  mx-auto">
      <div className="grid grid-cols-4 gap-x-2 h-[480px]">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 relative">
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Lake view deck"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side grid */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {/* Top row */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Cottage exterior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Living room"
              className="w-full h-full object-cover rounded-tr-lg"
            />
          </div>

          {/* Bottom row */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Reading nook"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Living area"
              className="w-full h-full object-cover rounded-br-lg"
            />
            {/* Show more photos overlay */}
            <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all rounded-br-lg">
              <div className="text-white flex items-center">
                {/* <Copy className="w-5 h-5 mr-2" /> */}
                <span className="font-medium text-3xl font-bold">30+</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
