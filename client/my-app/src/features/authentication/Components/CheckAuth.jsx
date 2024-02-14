import { useSelector } from "react-redux";
import { selectRole,selectToken } from "@/utils/ReduxStore/Slices/authSlice";
import {Navigate,Outlet,useLocation} from "react-router"

const CheckAuth=({currentRole})=>{
    const token=useSelector(selectToken)
    const role=useSelector(selectRole)
    const location=useLocation()
   return (
    !token? <Outlet /> : <Navigate to={role === 'user' ? '/' : role === 'host' ? '/host/home' : role === 'admin' ? '/admin/home' : null} state={{ from: location }} replace />

   )


}

export default CheckAuth