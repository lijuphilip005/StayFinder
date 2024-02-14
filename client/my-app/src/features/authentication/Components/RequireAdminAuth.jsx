import {useSelector} from "react-redux"
import { selectRole,selectToken } from "@/utils/ReduxStore/Slices/authSlice"
import {Navigate,Outlet,useLocation} from"react-router-dom"
 const RequireAdminAuth=({allowedRole})=>{
    const token=useSelector(selectToken)
    const role=useSelector(selectRole)
    const location=useLocation()
    console.log(token,role)
    return(
        token&&role=="admin"?<Outlet/>:<Navigate to={"/admin/login"} state={{from:location}}replace/>
    )
 }

 export default RequireAdminAuth