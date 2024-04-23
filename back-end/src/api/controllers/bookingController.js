const{createBookingHelper}=require("../helpers/bookingHelper")


const createBooking= async(req,res)=>{
     console.log("entered into createBooking")
       try {
        const data= req.body
        const response= await createBookingHelper(data)
             console.log(response)
            res.status(200).json({message:response})
       } catch (error) {
        console.log(error)
        res.status(401).json({message:"invalid request"})
        
       }
}





module.exports={
    createBooking
}