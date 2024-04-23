import { IMAGE_BASE_URL } from '@/Data/constants'
import React from 'react'
import { Link } from 'react-router-dom'



function Cards({hotel}) {

     
  
  return (
   <>
   
<div className="flex items-start justify-start mt-8 ">
  <div className="w-full  bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="h-[150px] relative">
      {/* Add your image source in the 'src' attribute */}
          <Link to ={`/booking/${hotel._id}`}>
      <img 
        src={`${IMAGE_BASE_URL+hotel.images[1]}`}
        alt="Spaghetti with Shrimp Sauce"
        className="w-full h-full object-cover rounded-t-xl"
      />
         </Link>

    </div>
    <div className="p-4 sm:p-6">
      <p className="font-bold text-gray-700 text-[14px] leading-6 mb-1">
        {hotel.hotelName}
      </p>
      <div className="flex flex-row">
        <p className="text-[#3C3C4399] text-[12px] mr-2 line-through">
          {hotel.rate}
        </p>
        <p className="text-[12px] font-bold text-[#0FB478]"> ₹{hotel.rate}</p>
      </div>
      <p className="text-[#7C7C80] font-[10px] mt-4 h-10 ">
        {hotel.description.slice(0-50)}
      </p>
      
    </div>
  </div>
</div>

      
   </>
  )
}

export default Cards
