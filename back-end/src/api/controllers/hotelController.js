require ('dotenv').config()
const{uploadImages, createHotelHelper, getAllListingsHelper}=require('../helpers/hotelHelper')




const createHotel= async(req,res,next)=>{
    console.log(req.body)
    console.log(req.files)
    const {owner_id}=req.body
    console.log(owner_id)
    const{hotelName,description,address,numberOfRooms,rate,features}=req.body
    try{
        const hotelImgArray=await uploadImages(req.files)
        let imgStringArr=[]
        for(var i=0;i<hotelImgArray.length;i++){
            imgStringArr.push(hotelImgArray[i].public_id+'.png')
        }
     let data={
        hotelName,
        description,
        owner_id,
        images: imgStringArr,
        address,
        rate,
        numberOfRooms,
        features,
       
        
        
     }
     const response=await createHotelHelper(data)
     console.log(response)
     res.status(200).json({response})
        

    }catch(error){
        console.log(error)
         res.status(400).json({error})
    }
};


const getAllListings=async(req,res)=>{
       const id= req.params.id

       console.log("entered")
       console.log(id)
    try{
      const response= await getAllListingsHelper(id)
      res.status(200).json({response})

    }catch(error){
        console.log(error)
        res.status(401).json({messsage:"unauthorized"})

    }

}








module.exports={
    createHotel,
 getAllListings,

}