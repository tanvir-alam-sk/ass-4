import React from "react";

export default function Cancellation() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg grid md:grid-cols-3 mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Cancellation
      </h2>

      <div className="col-span-2 ">
        {/* Timeline */}

        <div className="flex items-center justify-around relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-xs mt-1 text-blue-600 font-medium">
              Full refund
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs mt-1 text-gray-600">No refund</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg mb-6">
          <div className="relative mt-2">
            {/* Line */}
            <div className="absolute top-1/2 w-full border-t border-gray-300 transform -translate-y-1/2"></div>
            {/* Points */}
            <div className="flex items-center justify-between relative z-10 -mb-5">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-white border border-gray-400 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-white border border-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mt-10">
            <span>Today</span>
            <span>Nov 4</span>
            <span>Check-in</span>
          </div>
        </div>

        {/* Policy Details */}
        <div className="space-y-6">
          {/* Full refund section */}
          <div>
            <p className="text-sm text-gray-500 uppercase">Before</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nov 4</h3>
            <p className="text-sm text-gray-600">
              Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a
              full refund. Times are based on the property's local time.
            </p>
          </div>
          <hr className="border-gray-300" />
          {/* No refund section */}
          <div>
            <p className="text-sm text-gray-500 uppercase">After</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nov 4</h3>
            <p className="text-sm text-gray-600">
              After that, you won't get a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
