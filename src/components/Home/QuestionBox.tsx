import React from 'react'

export default function QuestionBox() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md mx-auto my-20">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Have a question?</h2>
        <p className="text-sm text-gray-600">
          Get instant answers with AI powered search of property information and reviews.
        </p>
      </div>
      <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
        Beta
      </span>
    </div>

    {/* Search Bar */}
    <div className="mt-4 relative">
      <input
        type="text"
        placeholder="Ask a question"
        className="w-full my-6 p-3 pl-10 pr-12 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 3a7.5 7.5 0 1 0 4.886 13.43l4.112 4.113a.75.75 0 0 0 1.06-1.061l-4.112-4.113A7.5 7.5 0 0 0 10.5 3zm0 13.5A6 6 0 1 1 10.5 4.5 6 6 0 0 1 10.5 16.5z"
          />
        </svg>
      </div>
      <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 3a7.5 7.5 0 1 0 4.886 13.43l4.112 4.113a.75.75 0 0 0 1.06-1.061l-4.112-4.113A7.5 7.5 0 0 0 10.5 3zm0 13.5A6 6 0 1 1 10.5 4.5 6 6 0 0 1 10.5 16.5z"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}
