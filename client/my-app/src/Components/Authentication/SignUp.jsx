import axios from 'axios';
import React from 'react'
import{useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';



function SignUp(role) {
  const navigate = useNavigate();
          
          const [error,setError]=useState("")
          const [values,setValues]=useState({
            username:"",
            email:"",
            phone:"",
            password:"",
           
             
          });

      const handleInputChange=(e)=>{
          const{name,value}=e.target;
          setValues((prevValues)=>({
             ...prevValues,[name]:value

          }))
      }
         

      const handleOtpSend= async()=>{
          try {
            let  email= values.email
            let name= values.username
            console.log(email)
            const response= axios.post("http://localhost:5000/auth/send-otp",{email,name})
            console.log(response)
             
          } catch (error) {
             console.log(error)
            
          }
      }

     const handleFormSubmit= async(e)=>{
       e.preventDefault();
       try{
        if (!values.username || !values.email || !values.phone || !values.password ) {
          console.log("Please fill in all required fields");
          setError("Please fill in all required fields")
          return;
        }
        const response= await axios.post("http://localhost:5000/auth/send-otp",{values} , {withCredentials:true})
        if(response.status == 200){
          navigate('/otp');
        }

       }catch(error){
         console.log(error)
       }
     }
  return (
    <div>
       <form onSubmit={handleFormSubmit}>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
             User Registration
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to  create a new account
        </div>
        <div className="mt-10">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="username"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Username:
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={values.username}
                  name="username"
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
                  placeholder="Enter your username"
                />
              </div>
            </div>
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
                  value={values.email}
                  name="email"
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
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="phone"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Phone Number:
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  name="phone"
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
                  placeholder="Enter your phone number"
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
                  value={values.password}
                  name="password"
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
            {<p className='text-red-500'>{error}</p>}
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
              >
                <span className="mr-2 uppercase">Continue</span>
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
         
          {/* Sign Up with Google Button */}

          {/* <button
            className="
              flex mt-4
              items-center
              justify-center
              focus:outline-none
              text-black text-sm
              sm:text-base
              bg-white hover:bg-gray-100
              border border-gray-500
              rounded-2xl
              py-2
              w-full
              transition
              duration-150
              ease-in
            "
            onClick={() => console.log('Sign Up with Google')}
          >
            <span className="mr-2 uppercase">Sign Up with Google</span>
          </button> */}

        </div>
      </div>
    </div>
  

    </form>
    </div>
  )
}

export default SignUp
