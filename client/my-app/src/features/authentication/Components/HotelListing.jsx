import React ,{useEffect,useState}from 'react'
import axios from'axios'
import { setCredentials } from '@/utils/ReduxStore/Slices/authSlice'
import { useSelector } from 'react-redux';
import { useGetHotelsQuery } from '@/services/getHotelsApiSlice';
import { IMAGE_BASE_URL } from '@/Data/constants';
import { format } from 'date-fns'



function HotelListing() {
    const accessToken = useSelector(state => state.authSlice.user);
    const id=accessToken.user._id
    console.log(id)

//  const [hotels,setHotels]=useState([]);

//     console.log(hotels)

const {data:hotels,isError,isFetching,isLoading,isSuccess,isUninitialized}=useGetHotelsQuery({id})

// useEffect(()=>{
//     const fetchHotels=async()=>{
//         try{
//           const response= await axios.get(`http://localhost:5000/hotel/all-listings/${id}`)
//               if(response.status==200){
//                  setHotels(response)
//               }else{
//                 console.log(" invalid request")
//               }
//         }catch(error){
//             console.log(error)

//         }
//     }
//     fetchHotels()
// },[])

if(isLoading) return <h1>pending....</h1>


console.log(hotels)

  return (
    <div>

<section className="pt-[10vh] lg:flex lg:h-screen font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="overflow-x-auto rounded shadow dark:bg-gray-900 bg-white">
      <table className="w-full table-auto">
        <thead className="bg-lightGray-50">
            
          <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
            <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
              
              <span>properties Name</span>
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">date</th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
               description
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
               price
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">Status</th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
              Actions
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400" />
          </tr>
          
        </thead>
        <tbody>

              {hotels?.response?.map((hotel)=>{
                
      return   (  <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="flex items-center px-6 py-3 font-medium">
            
              <div className="flex">
                <img
                  className="object-cover w-10 h-10 mr-4 rounded-full"
                  src={`${IMAGE_BASE_URL+hotel.images[0]}`}
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium dark:text-gray-400">
                    {hotel.hotelName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
              {format(hotel.created_at, 'yyyy-MMM-dd HH:mm:ss', { timeZone: 'Asia/Kolkata' })}
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
            {hotel.description}
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
            ₹{hotel.rate}
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
              <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-gray-400">
              {hotel.status}
              </span>
            </td>
            <td className="px-6">
              <div className="flex ">
                <a
                  href="#"
                  className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                >
                  Edit
                </a>
                
              </div>
            </td>
            <td className="px-6 text-sm font-medium">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </a>
            </td>
          </tr>)
         
              })}


        </tbody>
      </table>
      <div className="px-6 py-5 text-right">
        <a
          className="inline-flex items-center text-xs font-medium text-blue-500 dark:hover:text-blue-400 dark:text-blue-300 hover:text-blue-700"
          href="#"
        >
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
             
            </svg>
          </span>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</section>

















































      
    </div>
  )
}

export default HotelListing
