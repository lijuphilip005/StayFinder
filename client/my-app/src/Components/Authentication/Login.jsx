import React from 'react'
import { Link } from 'react-router-dom'
import{useState,useEffect} from"react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectRole, selectToken, setCredentials as setUserCredential } from '@/utils/ReduxStore/Slices/authSlice'



const Login = () => {
  const dispatch=useDispatch()
   const navigate= useNavigate()
  const [error,setError]=useState("")
  const [credentials,setCredentials]=useState({
    email:"",
    password:""
  })
   
  const handleInputChange=(e)=>{
   
     const{name,value}=e.target;
     setCredentials((prevValue)=>({
      ...prevValue,
      [name]:value

     }))
  }

  const handleLogin=async(e)=>{
     e.preventDefault()
        const{email,password}=credentials
    try{
        const response= await axios.post("http://localhost:5000/auth/login",{email,password})
        console.log(response,"helooo")

        if(response.status==200){
           
          console.log(response.data)
          const jwtToken=response.data.accesToken
          const {accessToken,foundUser}=response.data
          dispatch(setUserCredential({accessToken,foundUser}))

          window.location.reload(true)
          // localStorage.setItem('token',accessToken)
           //navigate("/")
    
         
          
        }else{
           console.log("invalid credentials")
        }


    }catch(error){
      console.log(error)
      setError(error.message)
    } 
    
      
  }



  return (
    <div>
     
       <div className="  min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Login
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access to the account
        </div>
        <div className="mt-10">
          <form action="#">
           
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={credentials.email}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-4
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
           
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                 value= {credentials.password}
                 onChange={handleInputChange}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-4
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <p className='text-red-500 text-[0.9rem]'>{error}</p>
            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-black hover:bg-gray-800
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                onClick={handleLogin}
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                  
              </button>
            </div>
            <div className="flex justify-center mt-4">
          <Link
            to="/signup"
            className="
              text-black text-sm
              sm:text-base
              hover:underline
            "
          >
            Create New Account
          </Link>
        </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
