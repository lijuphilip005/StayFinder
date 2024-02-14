import { apiSlice } from "../apiSlice"

const hotelApiSlice=apiSlice.injectEndpoints({
          endpoints:builder=>({
            getHotelsUser:builder.query({
                query:()=>"/all-hotels"
            })
          })
})

export const {useGetHotelsUserQuery}=hotelApiSlice