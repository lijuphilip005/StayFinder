import { apiSlice } from "../apiSlice"

const userApiSlice=apiSlice.injectEndpoints({
          endpoints:builder=>({
            getUsers:builder.query({
                query:()=>"/get-all-users",
                providesTags:['users']
            }),
            changeStatus:builder.mutation({
                 query:(data)=>({
                    url:"/change-status",
                    method:"put",
                    body:data
                 }),
                 invalidatesTags:['users']
            })
          }),
          
})

export const {useGetUsersQuery,useChangeStatusMutation}=userApiSlice