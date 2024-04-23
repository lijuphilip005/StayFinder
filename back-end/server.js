require('dotenv').config()
const express=require("express")
const cors=require("cors")
const app= express()
const session = require('express-session')
const path= require("path")
const cookieParser=require("cookie-parser")
app.use(cookieParser());
app.use(cors({
   origin:'http://localhost:5173',
   credentials:true,
}))
app.use(express.json())
const errorHandler= require('./src/api/middlewares/errorHandler')
const connectDb=require('./src/config/dbConfig')
const mongoose=require("mongoose")
const noCache=require("nocache")
const PORT=process.env.PORT||5000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(session({
   secret: 'keyboard cat',
   resave:false,
   saveUninitialized:true,
   cookie: { secure: false },
 }));
 app.use(noCache())
 
connectDb()
const user= require('./src/api/routes/userRoutes')
const authRouter=require('./src/api/routes/authenticationRoutes')
const hotelRouter=require("./src/api/routes/hotelRoutes")
const adminRouter=require("./src/api/routes/adminRoutes")
const bookingRouter=require("./src/api/routes/bookingRoutes")

//app.get('/users',(req,res)=>{res.json({users:["liju","philip"]})})

app.use('/',user)
app.use('/auth',authRouter)
app.use("/hotel",hotelRouter)
app.use("/admin",adminRouter)
app.use("/booking",bookingRouter)









 mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB')
    app.listen(5000,()=>console.log(`server is running on ${PORT}`))
 })

 mongoose.connection.on('error',err=>{
    console.log(err)
 })
