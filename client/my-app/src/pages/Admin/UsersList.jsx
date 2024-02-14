import React from 'react'
import { apiSlice } from '@/services/apiSlice'
import { useGetUsersQuery } from '@/services/adminApiSlice/userApiSlice'
import { Spinner } from '@material-tailwind/react'
import { useChangeStatusMutation } from '@/services/adminApiSlice/userApiSlice'

function UsersList() {
    const{data:users,isLoading}=useGetUsersQuery()
    const [changeStatus]=useChangeStatusMutation()

      function handleBlock(status,id){
        changeStatus({id,status:!status})
      }

     if(isLoading){
        return <Spinner/>
     }
      
  return (
    <div>
      

      <section className="pt-[10%] lg:flex lg:h-[50vh] font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="overflow-x-auto rounded shadow dark:bg-gray-900 bg-white">
      <table className="w-full table-auto">
        <thead className="bg-lightGray-50">
            
          <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
            <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
              
              <span> users Name</span>
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-800"></th>
            <th className="px-6 py-4 font-medium dark:text-gray-800">
               Role
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
               mail id
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">Status</th>
            <th className="px-6 py-4 font-medium dark:text-gray-400">
              Actions
            </th>
            <th className="px-6 py-4 font-medium dark:text-gray-400" />
          </tr>
          
        </thead>
        <tbody>

              {users?.response?.map((user)=>{
            {console.log(user,"hellll")}
                
      return   (  <tr className="border-b border-gray-200 dark:border-gray-800">
            <td className="flex items-center px-6 py-3 font-medium">
              <div className="flex">
                <div>
                  <p className="text-sm font-medium dark:text-gray-400">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
            {
}
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
            {user.role}
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
            {user.email}
        
            </td>
            <td className="px-6 text-sm font-medium dark:text-gray-400">
              <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-gray-400">
               
              {user.active?"active":"blocked"}
              </span>
            </td>
          <button onClick={()=>{
                handleBlock(user.active,user._id)
          }}>
            <td className="px-6">
              <div className="flex ">
                <a
                  href="#"
                  className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                >
                  block
                </a>
                
              </div>
            </td>
            </button>

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

export default UsersList
