import { selectToken,selectRole } from "@/utils/ReduxStore/Slices/authSlice";
import { useSelector } from "react-redux";
import{Navigate,Outlet,useLocation,useNavigate} from"react-router"
import React from 'react'

const RequireUserAuth=({allowedRole})=>{
    const location=useLocation()
    const token=useSelector(selectToken)
    const role=useSelector(selectRole)
    const navigate=useNavigate()


    console.log(token)
    console.log(role)
    return(
        token&&role=="user"?<Outlet/>:<Navigate to={"/login"} state={{from:location}} replace/>
    )
}

export default RequireUserAuth
