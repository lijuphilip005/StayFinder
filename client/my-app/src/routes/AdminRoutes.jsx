import React from 'react'
import {Route,Routes} from "react-router-dom"
//import AdminSignup from '../pages/Admin/AdminSignup';
import AdminLogin from '@/Components/Authentication/Login'
import AdminHome from '@/pages/Admin/AdminHome'
import RequireAdminAuth from '@/features/authentication/Components/RequireAdminAuth'
import CheckAuth from '@/features/authentication/Components/CheckAuth'
import UsersList from '@/pages/Admin/UsersList'


const AdminRoutes = () => {
    
  return (
      <Routes>
            <Route  element={<CheckAuth />}>
          <Route path="/login" element={<AdminLogin/>}/>
          </Route>
          <Route element={<RequireAdminAuth allowedRole={"admin"}/>}>
          <Route path="/home" element={<AdminHome/>}/>
          <Route path="/userslist" element={ <UsersList/>}/>
           </Route>
           
      </Routes>
  )
}

export default AdminRoutes
