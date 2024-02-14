const express= require('express')
const router= express.Router()
const userModel=require('../models/userModel')
const handleError=require('../middlewares/errorHandler')
const{ registerNewUser, sendOtp,login,logout,refreshToken}=require('../controllers/authController')
const loginLimiter=require("../middlewares/loginLimiter")
const verifyJWT= require("../middlewares/verifyJWT")
verifyJWT;


router.post('/signup',registerNewUser)
router.post('/send-otp', sendOtp)
router.post("/login",login)

router.get("/refresh-token",verifyJWT,refreshToken)
router.post("/logout",logout)
//router.get("/check-auth",checkAuthentication)










module.exports=router;