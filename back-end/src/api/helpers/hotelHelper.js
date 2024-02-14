 const {resolve}= require('path')
 const cloudinary=require("../../config/cloudinary")
 const hotelModel= require("../models/hotelModel")
 const mongoose=require("mongoose")
 require('dotenv').config()

 const uploadImages=async(files)=>{
     console.log(files)
     try{
          let cloudImgArray=[]
          for(var i=0;i<files.length;i++){
             let cloudImage= await cloudinary.uploader.upload(files[i].path,{
                 timeout:60000,
             });
             cloudImgArray.push(cloudImage)
          }
          console.log(cloudImgArray);
          return cloudImgArray

     }catch(error){
         console.log(error)
            throw new Error(error)
        }
       
 };
  

  const createHotelHelper= async(data)=>{
      try{
          const response = await hotelModel.create(data);
           return response

      }catch(error){
        throw new Error(error)
      }
         
  }

  const getAllListingsHelper= async(data)=>{
          console.log("entered into helper")
         console.log(data)
    try{
        const hotels= await hotelModel.find({owner_id:data})
         console.log(hotels)
        return hotels
    }catch(error){
        throw new Error(error)
    }
  }



















 module.exports={
    uploadImages,
    createHotelHelper,
  getAllListingsHelper,
    
 }
