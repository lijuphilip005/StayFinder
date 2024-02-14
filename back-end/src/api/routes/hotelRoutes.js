const express= require("express")
const router=express.Router()
const{createHotel,getAllListings}=require("../controllers/hotelController")
const uploader=require("../../config/multer")



router.post('/add-hotel',uploader.array("images",10),createHotel)  
router.get("/all-listings/:id",getAllListings)         

module.exports = router