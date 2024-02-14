import React from 'react'
import {useState,useEffect} from "react";
import{useNavigate} from "react-router-dom"
import axios from 'axios';



function Otp() {
  const [error,setError]=useState("")
   const navigate=useNavigate();
   const [otp,setOtp]=useState(Array(4).fill(''))
   
   
   const handleInputChange = (e, index) => {
    const { value } = e.target;
    setOtp((prevOTP) => {
      const updatedOTP = [...prevOTP];
      updatedOTP[index] = value;
      return updatedOTP;
    });
  };
  

   const handleOtp=async(e)=>{
     e.preventDefault();
         
      try{
        const response= await axios.post("http://localhost:5000/auth/signup",{otp},{withCredentials:true})
         console.log(response)
        if(response.status==200){
            navigate("/login")
        }else{
            console.log("invalid otp")
            setError("invalid otp")
            console.log(error)
        }

      }catch(error){
         console.log(error)

      }
   }




  return (
    <div>
  <form onSubmit={ handleOtp} >
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          OTP Verification
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter the OTP sent to your email
        </div>

        <div className="mt-10">
          <div className="flex mb-5">
            {[1, 2, 3, 4].map((index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                name={`otp-${index}`}
                className="
                  text-sm
                  placeholder-gray-500
                  pl-4
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-1/4
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder=""
                maxLength="1"
                value={otp[`otp-${index}`]}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
           
          </div>
          {<p className='text-red-800'>{error}</p>}
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
            <span className="mr-2 uppercase">Verify OTP</span>
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
      </div>
    </div>
  </form>

    </div>
  )
}

export default Otp
