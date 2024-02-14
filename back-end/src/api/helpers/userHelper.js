 const Mongoose=require('mongoose')
const userModel=require("../models/userModel");
const hotelmodel=require("../models/hotelModel")

const fetchAllUsersHelper= async()=>{
         try{
            const allUsers=await userModel
            .find({role:{$ne:"admin"} })
            .select("username email phone active role timestamps").lean();

              return allUsers
         }catch(error){
            throw new Error(error)
         }

}

const findUserHelper=async(user_id)=>{
      try{
        let user= await  userModel.findOne({
          _id: new Mongoose.Types.ObjectId(user_id)},
        // {
        //     _id:1,
        //     username:1,
        //     email:1,
        //     phone:1,
        //     active:1
            
        // }       
        
        ) 
       return user

      }catch(error){
         throw new Error(error)
      }
};

const getAllHotelsHelper= async()=>{
        try{
         const hotels= await hotelmodel.find()
         return hotels

        }catch(error){
            throw new Error(error)
        }
}

const statusHelper= async(id,status)=>{
    
   try {
       const response= userModel.updateOne({_id:id},{$set:{active:status}})
        return response
    
   } catch (error) {
    throw new Error(error)
    
   }
}



























module.exports={
    fetchAllUsersHelper,
    findUserHelper,
    getAllHotelsHelper,
    statusHelper

}