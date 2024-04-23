const express=require('express')
const router= express.Router()
const { getAllUsers,getUserDetailsForProfile, getAllHotels,statusChange,editUser, getSingleHotel}= require('../controllers/usercontroller')


router.get('/get-all-users',getAllUsers)
router.get('/get-user-details-for-user/:user_id',getUserDetailsForProfile)
router.get("/all-hotels",getAllHotels)
router.get("/getHotel/:id",getSingleHotel)
router.put("/change-status",statusChange)
router.post("/edit-user-details",editUser)





module.exports= router