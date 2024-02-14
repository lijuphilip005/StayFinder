import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios"
import UserRouter from './routes/UserRoutes'
import AdminRouter from "./routes/AdminRoutes"
import HostRouter from "./routes/HostRoutes"
import OtpPage from "../src/Components/Authentication/Otp"
import NavBar from './Components/NavBar/NavBar';

function App() {

 
  return (
    <div  > 
      
      <Router>
      <NavBar/>
      <Routes>
        
         <Route path="/*" element={<UserRouter/>}/>
         <Route path="admin/*" element={<AdminRouter/>}/>
         <Route path="host/*" element={<HostRouter/>}/>
         <Route path="/otp" element={<OtpPage/>}/>
      
      </Routes>
       </Router>
    </div>
  )
}

export default App
