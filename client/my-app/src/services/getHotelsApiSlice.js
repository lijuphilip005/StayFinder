import { apiSlice } from "./apiSlice"

const getHotelsApiSlice=apiSlice.injectEndpoints({
          endpoints:builder=>({
            getHotels:builder.query({
                query:(data)=>`/hotel/all-listings/${data.id}`
            })
          })
})

export const { useGetHotelsQuery}=getHotelsApiSlice