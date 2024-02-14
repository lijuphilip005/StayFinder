import { useSelector } from "react-redux";
import { selectRole,selectToken } from "@/utils/ReduxStore/Slices/authSlice";
import{Navigate,Outlet,useLocation,useNavigate}from "react-router"

const RequireHostAuth=({allowedRole})=>{
    const token=useSelector(selectToken)
    const role=useSelector(selectRole)
    const location=useLocation()
    console.log(token)
    return(
        token && role==='host'?<Outlet/>:<Navigate to={'/host/login'} state={{from:location}} replace/>
        )
    
}
export default  RequireHostAuth