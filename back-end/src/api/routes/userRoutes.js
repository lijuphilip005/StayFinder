const express=require('express')
const router= express.Router()
const { getAllUsers,getUserDetailsForProfile, getAllHotels,statusChange}= require('../controllers/usercontroller')


router.get('/get-all-users',getAllUsers)
router.get('/get-user-details-for-user/:user_id',getUserDetailsForProfile)
router.get("/all-hotels",getAllHotels)
router.put("/change-status",statusChange)



module.exports= router