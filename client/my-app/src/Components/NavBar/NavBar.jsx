import { Bold } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import{useState,useEffect} from "react"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectToken } from '@/utils/ReduxStore/Slices/authSlice'
            import {
              DropdownMenu,
              DropdownMenuContent,
              DropdownMenuItem,
              DropdownMenuLabel,
              DropdownMenuSeparator,
              DropdownMenuTrigger,
            } from "@/components/ui/dropdown-menu"
            


const NavBar = () => {
  const dispatch= useDispatch()
  const location=useLocation()
  console.log(location)
  const token=useSelector(selectToken)


const handleLogOut=()=>{
    dispatch(logOut())
}



  return (
    <>

<nav className={` max-w-7xl fixed top-0 left-0 right-0 z-10 bg-white  flex justify-between items-center mx-auto  h-20 ${location.pathname==='/signup' ?'hidden':location.pathname==='/login'?'hidden':location.pathname=="/admin/login"?'hidden':location.pathname=="/host/login"?'hidden':location.pathname=="/otp"?'hidden':location.pathname=="/user-profile"?'hidden': 'flex'}` }>
{/* logo */}
<div className="inline-flex ">
<a className="_o6689fn" href="/">
  <div className="hidden md:block">
    <div className='mt-7'>
    <h1 style={{fontWeight:"bold"}}>StayFinder</h1>
    </div>
    <svg
      width={102}
      height={32}
      fill="currentcolor"
      style={{ display: "block" }}
    >
      
    </svg>
  </div>
  <div className="block md:hidden">
    <svg
      width={30}
      height={32}
      fill="currentcolor"
      style={{ display: "block" }}
    >
    </svg>
  </div>
</a>
</div>
{/* end logo */}
{/* search bar */}
<div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
<div className="inline-block">
  <div className="inline-flex items-center max-w-full">
    <button
      className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
      type="button"
    >
      <div className="block flex-grow flex-shrink overflow-hidden">
        Start your search
      </div>
      <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: 12,
            width: 12,
            stroke: "currentcolor",
            strokeWidth: "5.33333",
            overflow: "visible"
          }}
        >
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
          </g>
        </svg>
      </div>
    </button>
  </div>
</div>
</div>
{/* end search bar */}
{/* login */}
<div className="flex-initial">
<div className="flex justify-end items-center relative">
  <div className="flex mr-4 items-center">
    <a
      className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
      href="#"
    >
      <div className={`flex items-center relative cursor-pointer whitespace-nowrap ${location.pathname==='/admin/home' ?'hidden':'flex'}`}>
        Become a host
      </div>
    </a>

  </div>
  <div className="block">
    <div className="inline relative">
   
    


   <DropdownMenu  modal={false} >
  <DropdownMenuTrigger>
  <button
        type="button"
        className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
      >
        <div className="pl-1">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: 16,
              width: 16,
              stroke: "currentcolor",
              strokeWidth: 3,
              overflow: "visible"
            }}
          >
            <g fill="none" fillRule="nonzero">
              <path d="m2 16h28" />
              <path d="m2 24h28" />
              <path d="m2 8h28" />
            </g>
          </svg>
        </div>
        <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              fill: "currentcolor"
            }}
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
          </svg>
        </div>
      </button>

  </DropdownMenuTrigger>
  <DropdownMenuContent >
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
       <Link to ="/user-profile" >
    <DropdownMenuItem>Profile</DropdownMenuItem>
       </Link>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>
   
    <Link to ="/login">
      <button
        onClick={()=>{handleLogOut()}}
      >  {token?"Logout":"Login"}
      </button>
      </Link>
          


    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      
    </div>
  </div>
</div>
</div>
{/* end login */}
</nav>

    </>
  )

}

export default NavBar
