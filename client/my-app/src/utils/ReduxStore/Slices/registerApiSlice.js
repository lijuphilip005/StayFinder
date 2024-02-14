import { apiSlice } from "../../../services/apiSlice";
export const registerApiSlice=apiSlice.injectEndpoints({
     endpoints:builder=>({
        registerHotel:builder.mutation({
            query:credentials=>({
              url:"/hotel/add-hotel",
               method:"post",
              body:credentials,
              formData:true
            })
          })
     
     })
})

export const {useRegisterHotelMutation}=registerApiSlice