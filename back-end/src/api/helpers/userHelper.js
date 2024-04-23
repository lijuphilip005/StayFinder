 const mongoose=require('mongoose')
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
          _id: new mongoose.Types.ObjectId(user_id)},
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
       const response= await userModel.updateOne({_id:id},{$set:{active:status}})
        return response
    
   } catch (error) {
    throw new Error(error)
    
   }
}

const editUserHelper= async(data)=>{
            console.log("enterred into edit uderhelper")
       try {
          if(data.name){
             const user= userModel.find(data.id)
             if(user){
               const name=data.name
               console.log(name)
               const response= await userModel.updateOne({_id:data.id},{$set:{username:name}})
               return response
             }else{
                throw new Error("invalid user")
             }
            
          }else if(data.email){
                const user= userModel.find(data.id)
                if(user){
                  const email=data.email
                  const response= await userModel.updateOne({_id:data.id},{$set:{email:email}})
                  return response
                }else{
                  throw new Error("invalid user ")
                }
          } else if(data.password){
            const userId = data.id;
               const user= await userModel.findOne({ _id:new mongoose.Types.ObjectId(userId)})
                      if(user){
                        const password=data.password
                           user.password=password
                        await user.save()
                        return { message: 'Password updated successfully' };
                      }else{
                         throw new Error("user not found")
                      }
          }
          
       } catch (error) {
          throw new Error(error)
         
       }
}



const getSingleHotelHelper= async (data)=>{
   try{
      const id= data
      const response= await hotelmodel.findOne({_id:new mongoose.Types.ObjectId(id)})
       return response
   }catch (error){
       throw new Error(error)
   }
    
}

























module.exports={
    fetchAllUsersHelper,
    findUserHelper,
    getAllHotelsHelper,
    statusHelper,
    editUserHelper,
    getSingleHotelHelper

}