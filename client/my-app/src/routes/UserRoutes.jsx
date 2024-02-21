import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/User/HomePage";
import UserSignup from "../pages/User/UserSignup";
import UserLogin from "../pages/User/UserLogin";
import RequireUserAuth from "@/features/authentication/Components/RequireUserAuth";
import CheckAuth from "@/features/authentication/Components/CheckAuth";
import UserProfile from "@/pages/User/UserProfile";





const UserRouter = () => {
    return (

        <Routes>
                 <Route path="/*" element={<HomePage />} />
             <Route element={<RequireUserAuth allowedRole={"user"}/>}>
           
             </Route>
             <Route  element={<CheckAuth />}>
           
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/user-profile" element={<UserProfile/>}/>
            </Route>
        </Routes>
    )

}



export default UserRouter