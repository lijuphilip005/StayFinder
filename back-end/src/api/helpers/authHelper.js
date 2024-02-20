const{resolve}=require("path")
const userModel=require("../models/userModel")
require('dotenv').config()
const nodemailer = require("nodemailer");
const otpGenerator=require( "otp-generator")

 // sending otp
 const sendOtpHelper=async(data)=>{
           console.log(data,"hrlper")
   try {
     let otp= await sendMail(data?.values?.username||data?.data?.values?.username,data?.values?.email||data?.data?.values?.email)
      console.log(otp,"otp helper")
     return({otp})
  } catch (error) {
     console.log(error)
     throw new Error(error)
     
} 
     
 }

  // signup helper for creating new user

const signupHelper= async (data)=>{
  console.log("sign up helper")

     try {

          const newUser= new userModel({
                username: (data && data.values && data.values.username) || (data?.data?.values?.username),
               password: (data && data.values && data.values.password) || (data?.data?.values?.password),
               phone: (data && data.values && data.values.phone) || (data?.data?.values?.phone),
               email: (data && data.values && data.values.email) || (data?.data?.values?.email),
          })
          console.log(newUser)
          const userData= await newUser.save()
           if(userData){
               return({message:"your registarion sucessfull"})
           }else{
               return({message:"your registarion failed"})
           }
     } catch (error) {
         throw new Error(error)
     }
     
}

// For sending mail
const sendMail=async(name,email,user_id)=>{
      console.log("send mail")
     console.log(name,email)
     try{
          const transporter = nodemailer.createTransport({
               host: "smtp.gmail.com",
               port: 587,
               secure: false,
               requireTls: true,
               auth: {
                 user: "lijuphilip50@gmail.com",
                 pass: "anxvsasmeyugrwtv",
               },
             });
             let otp =generateOtp() ;
             const mailOptions = {
               from: "lijuphilip50@gmail.com",
               to: email,
               subject: "otp for verification",
               html: `<p> Hi ${name},your otp is ${otp}"verify</a> your mail</p>`,
             };
             transporter.sendMail(mailOptions, (error, info) => {
               if (error) {
                 console.log(error.message);
               } else {
                 console.log("email has been sent:", info.response);
               }
             });
         
             return otp;
          

     }catch(error){
          console.log(error)
          throw new Error(error)
     }
};


 
// otp generator

const generateOtp = () => {
     const min = 1000; 
     const max = 9999;
     return Math.floor(Math.random() * (max - min + 1)) + min;
   };























module.exports= {
     signupHelper,
     sendOtpHelper,
}
