'use client'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


export default function NavberBooked() {
    const [booked,setBooked]=useState(false)

    const handelBookMark=()=>{
    setBooked(!booked);
    }
  return (
    <button
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 
                       text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              {booked ? (
                <FaHeart onClick={handelBookMark} className="mr-3 w-4 h-4 text-red-600" />
              ) : (
                <FaRegHeart onClick={handelBookMark} className="mr-3 w-4 h-4 text-red-600" />
              )}

              <span>Save</span>
            </button>
  )
}
