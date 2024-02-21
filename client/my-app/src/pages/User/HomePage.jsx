import React, {useState, useEffect } from 'react'
import{Link} from "react-router-dom"
import NavBar from '../../Components/NavBar/NavBar'
import Cards from '../../Components/Cards/cards'
import axios from 'axios'
import { Spinner } from '@material-tailwind/react'
import { useGetHotelsUserQuery } from '@/services/userApiSlice/hotelAplislice'





function HomePage() {
    
  const {data:hotels,isLoading}=useGetHotelsUserQuery()
    
  if(isLoading) return <Spinner/>
   console.log(hotels)
       

  return (
    <div className='mt-[100px] z-0'>
      <div>
    
      </div>
      <div className='grid grid-cols-3 gap-4 '>
        {hotels.response.map((hotel,index)=>{
           return  <Cards hotel={hotel}/>
        })}
            
            
      </div>
    </div>
  )
}

export default HomePage
