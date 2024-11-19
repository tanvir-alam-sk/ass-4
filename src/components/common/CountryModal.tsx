"use client";
import React, { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

export default function CountryModal() {
  const [isCountruyModalOpen, setCountruyModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("Portugal");
  const [currency, setCurrency] = useState<string>("EUR");

  // Map of regions to currencies
  const regionCurrencyMap: Record<string, string> = {
    Portugal: "EUR",
    USA: "USD",
    Japan: "JPY",
    Bangladesh: "BDT",
    Canada: "CAD",
  };

  // Handle region change
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrency(regionCurrencyMap[region]);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setCountruyModalOpen(true)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <AiOutlineGlobal />
        <span>United States</span>
      </button>

      {/* Modal */}
      {isCountruyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-bold">Display Settings</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setCountruyModalOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Warning Text */}
            <div className="mt-4 text-sm text-yellow-600 flex items-center">
              <span className="mr-2">&#9888;</span>
              Changing your region could change your rewards program
            </div>
            <p className="text-sm text-gray-600 mt-2">
              To stay with your current rewards program, keep your region the
              same. One Key is currently only available in select regions.
            </p>

            {/* Form */}
            <div className="mt-6 space-y-4">
              {/* Region Dropdown */}
              <div>
                <label
                  htmlFor="region"
                  className="block font-medium text-gray-700"
                >
                  Region
                </label>
                <select
                  id="region"
                  className="mt-1 p-3 outline-none block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={selectedRegion}
                  onChange={(e) => handleRegionChange(e.target.value)}
                >
                  {Object.keys(regionCurrencyMap).map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Currency Input */}
              <div>
                <label
                  htmlFor="currency"
                  className="block font-medium text-gray-700"
                >
                  Currency
                </label>
                <input
                  id="currency"
                  type="text"
                  className="mt-1 p-3 outline-none block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm cursor-not-allowed"
                  value={currency}
                  readOnly
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                onClick={() => setCountruyModalOpen(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
