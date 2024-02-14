import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HostLogin from "../Components/Authentication/Login"
import HostSignup from "../Components/Authentication/SignUp"
import HostHome from "../pages/Host/hostHome"
import RequireHostAuth from '@/features/authentication/Components/RequireHostAuth';
import CheckAuth from '@/features/authentication/Components/CheckAuth';
import HotelRegistration from '@/features/authentication/Components/HotelRegistration';
import HotelListing from '@/features/authentication/Components/HotelListing';


const HostRoutes = () => {
  
  return (
     <Routes>
        <Route  element={<CheckAuth />}>
        <Route path="/login" element={<HostLogin/>}/>
        <Route path="/signup" element={<HostSignup/>}/>
        </Route>
        <Route element={<RequireHostAuth allowedRole={"host"}/>}>
         <Route path="/hotel-registration" element={< HotelRegistration/>}/>
        <Route path="/home" element={<HostHome/>}/>
        <Route path="/listings" element={<HotelListing/>}/>
        </Route>
     </Routes>
  )
}

export default HostRoutes
