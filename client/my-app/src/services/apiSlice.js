import {  createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from '../utils/ReduxStore/Slices/authSlice';

import {BASE_URL}from"../Data/constants"


const baseQuery=fetchBaseQuery({
     baseUrl:BASE_URL,
     credentials:"include",
     prepareHeaders:(headers,{getState})=>{
         console.log( getState())
        const token= getState().authSlice.user.acessToken;
        
        if(token){
            headers.set("authorization",`bearer${token}`)
        }
        return headers;
     }
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.originalStatus === 403) {
      console.log("sending refresh token");
      // send refresh token to get new access token
      const refreshResult = await baseQuery("/refresh", api, extraOptions);
  
      if (refreshResult?.data) {
        const user = api.getState().auth.user;
        // store the new token
        api.dispatch(setCredentials({ ...refreshResult.data, user }));
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }else if(result?.error?.originalStatus === 402){
      console.log(result?.error)
      api.dispatch(logOut())
    }
  
    return result;
  };

  export const apiSlice= createApi({
     baseQuery:baseQueryWithReauth,
     tagTypes:['users'],
      endpoints:(builder)=>({})
  })