import { useState,useEffect } from 'react'
import axios from "axios"
function App() {
    const [message,setMessage]=useState('')
     const fetchData=async()=>{
      const response= await axios.get('http://localhost:5000/users')
       setMessage(response.data.users)
       
          
     }

     useEffect(()=>{fetchData()},[])

  return (
     <div className='App'> 
     <p>{message}</p>
     </div>
  )
}

export default App
