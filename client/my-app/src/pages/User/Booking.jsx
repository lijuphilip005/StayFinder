import React, { useState } from 'react'
import DatePicker from '@/Components/DatePicker'
import { IMAGE_BASE_URL } from '@/Data/constants'
import { addDays } from "date-fns"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useParams } from 'react-router-dom'
import { useCreateBookingMutation, useGetHotelsQuery } from "../../services/userApiSlice/bookingApiSlice"
import { useSelector } from 'react-redux'
import { userDetails } from '@/utils/ReduxStore/Slices/authSlice'



function Booking() {
  const [date, setDate] = useState({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
})
   
   const{id}=useParams()
   const{data:hotel,isLoading}=useGetHotelsQuery({id})
   const[createBooking ]=useCreateBookingMutation()
     
    const user= useSelector(userDetails)
     console.log(user)



  return (
    <div className='min-h-[200vh] '>
              
  <div className="grid grid-cols-12 grid-rows-[200px,200px] gap-4 my-32   mx-[10%]">
    <div className='row-span-2 col-span-6 border-2  rounded bg-cover' style={{backgroundImage:`url(${IMAGE_BASE_URL+hotel?.images[1]})`}} >
        </div>
    <div className='row-span-1 col-span-3 border-2  rounded bg-cover' style={{backgroundImage:`url(${IMAGE_BASE_URL+hotel?.images[0]})`}}>
  
    </div>
    <div className='row-span-1 col-span-3 border-2  rounded bg-cover ' style={{backgroundImage:`url(${IMAGE_BASE_URL+hotel?.images[2]})`}}>  
    </div>
    <div className='row-span-1 col-span-3 border-2 rounded bg-cover' style={{backgroundImage:`url(${IMAGE_BASE_URL+hotel?.images[2]})`}}>
    </div>
    <div className='row-span-1 col-span-3 border-2  rounded bg-cover ' style={{backgroundImage:`url(${IMAGE_BASE_URL+hotel?.images[1]})`}}>
    </div>
  </div>


<div className=' w-fit h-fit  border-2 border-blue-900 absolute right-[20%] p-[10px] rounded  my-[px]'>
   <div className=' h-12'>
        {hotel?.rate}
   </div>

    <div className=' my-2 border-1 border-black rounded px-1'>

<DatePicker setDate={setDate} date={date}/>
    <div className='mt-2'>
    <Select >
  <SelectTrigger className="w-[300px]">
    <SelectValue placeholder="Number of guests" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

    </div>

    </div>

      <div className='px-5 my-10'>
         <button className='rounded bg-black text-center text-white w-[260px]  h-[40px]' onClick={ async()=>{
            const response= await createBooking({date,id,user})
             console.log(response)
         }}> payment</button>
      </div>

      <div className='flex justify-between'>
      <div>Price</div>
         <div>{hotel?.rate}</div>
      </div>
      <div className='flex justify-between'>
      <div>Discount</div>
         <div></div>
      </div>
      <hr></hr>
      <div className='flex justify-between my-4'>
      <div>Total Amount</div>
         <div>{hotel?.rate}</div>
      </div>

</div>
          </div>

    
    
  )
}

export default Booking
