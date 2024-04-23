import { apiSlice } from "../apiSlice"

const userProfile=apiSlice.injectEndpoints({
          endpoints:builder=>({
            getUserProfile:builder.query({
                query:(data)=>`/get-user-details-for-user/${data.id}`,
                providesTags:['user-profile']
            }),
            editUserDetails:builder.mutation({
            query:(data)=>({
              url:"/edit-user-details",
              method:"post",
              body:data
            }),
            invalidatesTags:['user-profile']
      })
          })
      


})

export const {useGetUserProfileQuery,useEditUserDetailsMutation}= userProfile