import { createSlice } from "@reduxjs/toolkit"



const accessToken=localStorage.getItem('token')
const user=JSON.parse(localStorage.getItem('user')) 
const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:{
            accessToken:accessToken,
            user:user
        },
        admin:{
        },
        host:{}
    },
    reducers:{
        setCredentials:(state,action)=>{
            
            const{accesToken,foundUser}=action.payload
            state.user={accesToken,foundUser}
            console.log(action.payload);
            state.user=action.payload

            localStorage.setItem('token',JSON.stringify(action.payload.accessToken))
            localStorage.setItem('user',JSON.stringify(action.payload.foundUser))
            //localStorage.setItem("admin",JSON.stringify(admin));


        },
        logOut:(state,payload)=>{
             localStorage.removeItem("user")
             localStorage.removeItem("token")
             state.user={}
        }


    }

})

export const {setCredentials,logOut}=authSlice.actions

export const selectToken=(state)=>state?.authSlice?.user?.accessToken;
export const selectRole=(state)=>state?.authSlice?.user?.user?.role;

export default authSlice.reducer