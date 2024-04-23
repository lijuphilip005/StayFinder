const bookingModel= require("../models/bookingModel")
const userModel=require("../models/userModel")
const hotelModel=require("../models/hotelModel")
const mongoose= require("mongoose")



const createBookingHelper= async(data)=>{
   console.log(data)
      
   try {
    const{ userId,userName,userEmail,userPhone,hotel_id,hotelName, totalAmount, checkIn,checkOut, discountAmount,paymentType}=data
     console.log(userId)
    const user= await userModel.findOne( {_id:new mongoose.Types.ObjectId(userId) })
    if(!user){ 
     return ({message:"invalid user"})
    }
    const hotel= await hotelModel.findById({_id:new mongoose.Types.ObjectId(hotel_id)})
    if(!hotel){
      return ({message:"invalid hotel id"})
    }else{
        var host_id= hotel.owner_id
    }
   const host = userModel.findById({_id:  new mongoose.Types.ObjectId(host_id)})
    if(!host){
         return ({message:"invalid host id"})
    }

              
    const response= await bookingModel.create({
        userId:userId,
        userName:userName,
        userEmail:userEmail,
        userPhone:userPhone ,
        hotel_id:hotel_id,
        hotelName:hotelName,
        totalAmount:totalAmount,
        checkIn:checkIn,
        checkOut:checkOut,
        discountAmount:discountAmount,
        paymentType:paymentType

    })

    return response


  





















    
   } catch (error) {
     throw new Error(error)
    
   }




      
}



module.exports={
    createBookingHelper
}