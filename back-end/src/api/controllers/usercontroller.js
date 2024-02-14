const{fetchAllUsersHelper,findUserHelper, getAllHotelsHelper,statusHelper} =require("../helpers/userHelper")


const getAllUsers= async(req,res,next)=>{
      try{
          const response= await fetchAllUsersHelper()
            res.status(200).json({response})

      }catch(error){
        res.status(400).json({error})
      }
}

const getUserDetailsForProfile=async(req,res,next)=>{
         try{
            const user_id=req.params.user_id
            const response=await findUserHelper(user_id)
        
          res.status(200).json({ response });
    
    
         }catch(error){
          console.log(error)

      res.status(500).json({message:error})
}
};

const getAllHotels= async(req,res)=>{
       try{
        let response= await getAllHotelsHelper()
           res.status(200).json({response})

       }catch(error){
          console.log(error)
          res.status(400).json({error})
       }
}


const statusChange= async(req,res)=>{
   const{id,status}=req.body
 try {
  const response= await statusHelper(id,status)
  res.status(200).json({response})

  
 } catch (error) {
  console.log(error)
  
 }
}



module.exports={
    getAllUsers,
    getUserDetailsForProfile,
    getAllHotels,
    statusChange


}