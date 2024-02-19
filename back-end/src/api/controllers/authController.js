const { signupHelper,loginHelper, sendOtpHelper}=require('../helpers/authHelper')
const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const session = require('express-session')

//sending otp
 const sendOtp=async(req,res)=>{
      try{
          const response= await sendOtpHelper(req.body)
           req.session.data=req.body
           req.session.otp=response.otp
           TimeOut(req,res)
            res.status(200).json({message:"Success"})
      }catch(error){
        res.status(400).json({error})
      }
 }

 //registering new user
const registerNewUser= async(req,res,next)=>{
    console.log("register nw user")
     try{  

        const receivedOtp = req.body.otp
        const joinedOtpString = receivedOtp.join('');
        const sanitizedOtpString = joinedOtpString.replace(/[^0-9]/g, '');
        const finalOtp = Number(sanitizedOtpString);
        console.log(finalOtp)
        console.log(req.session.otp);
             if(req.session.otp==finalOtp){
                 const response= await signupHelper( req.session.data)
                 console.log(response,"response after signup")
                 res.status(200).json({response})
             }else{
                res.status(400).json({message:"Invalid otp"})
             }




     }catch(error){
        console.log(error.message)
        res.status(400).json({error})

     }
}

//login

const login = async(req,res)=>{
    console.log(req.body,"ccc")
    try{

    console.log("entererd")
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json({message:"All fields are required"})
    }
    const foundUser=await userModel.findOne({email})
       console.log(foundUser,'jjjjj')
    if(!foundUser||!foundUser.active){
        return res.status(401).json({message:"Unauthorized"})
    }
    const match=await bcrypt.compare(password,foundUser.password)
    if(!match) return res.status(401).json({message:"Unauthorized"})

     //creating acess token

     const accessToken=jwt.sign(
        {
            "userInfo":{
                "email":foundUser.email,
                 "roles":foundUser.role

            }

        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"5m"}

     )

     const refreshToken=jwt.sign(
        {"email":foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"5d"}

     )

     //create secure cookie with refresh token
     res.cookie('jwt',refreshToken,{
          httpOnly:true,
          secure:false,
          sameSite:"None",
          maxAge:7*24*60*60*1000
     })
     //send accesToken containing username and roles
     await userModel.updateOne(
        {email:foundUser.email},
        {$set:{ refreshToken:refreshToken}}
     )
   res.status(200).json({accessToken,foundUser})


}catch(error){
    res.status(400).json({message:"unauthorised"})
}
}


//Refresh Token

const refreshToken=(req,res)=>{
    const cookies=req.cookies

    if(!cookies?.jwt)return res.status(401).json({message:" Unautharized"})
    const refreshToken=cookies.jwt
 
     jwt.verify(
    
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,

         async(err,decoded)=>{
             console.log(decoded,"hhhhh")
             try{
              if(err) return res.status(403).json({message:"Forbidden"})
              const foundUser=await userModel.findOne({email:decoded.email})

               if(!foundUser)return res.status(401).json({message:" hell Unauthorized"})
               const accesToken=jwt.sign(
            {
                "UserInfo":{
                    "email":foundUser.email,
                    "roles":foundUser.role

                }

            } ,
              process.env.ACCESS_TOKEN_SECRET,
              {expiresIn:"10m"}
            
            )
              res.json({accesToken})


             }catch(error){
                console.log(error)
                res.status(500).json({message:"Internal server error"})

             }
         }

     )

}


//logout
const logout=(req,res)=>{
    console.log("enter")
    console.log(req.cookies)
   try{
    const cookies=req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)
    res.clearCookie('jwt',{httpOnly:true,sameSite:'None',secure:false})
    res.json({message:"cookie cleared"})
   }catch(error){
    console.log(error)
   }

  
}

//

const TimeOut=(req,res)=>{
    try{
        console.log("entered in timeout")
        
              setTimeout(()=>{
                    req.session.otp=null
                    req.session.save()
                   console.log("otp is cleared")
              },1*60*1000)
    }catch(error){
        console.log(error)
    }
   
}



module.exports={
    registerNewUser,
    sendOtp,
    login,
    refreshToken,
    logout,
    TimeOut

}