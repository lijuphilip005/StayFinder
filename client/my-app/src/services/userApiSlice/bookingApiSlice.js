import { apiSlice } from "../apiSlice";

const BookingSlice= apiSlice.injectEndpoints({
         endpoints:builder=>({
            getHotels:builder.query({
                query:(data)=> `/getHotel/${data.id}`
                
            }),
             createBooking:builder.mutation({
                query:(data)=>({
                    url:"/booking/create-booking",
                    method:"post",
                    body:data
                })
             })

         })
})

export const{useGetHotelsQuery,useCreateBookingMutation}=BookingSlice