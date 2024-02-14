import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slices/authSlice";
import { apiSlice } from "../../../services/apiSlice";
import { thunk } from "redux-thunk";



const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        authSlice,
       
    },
    middleware:[thunk],
    middleware:getDefaultMiddleWare=>
    getDefaultMiddleWare().concat(apiSlice.middleware),
    devTools:true
})

export default store