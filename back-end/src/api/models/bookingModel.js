const userModel= require("./userModel")
const mongoose= require("mongoose")
const objectId=require("mongodb").ObjectId;
const schema= mongoose.Schema
const uuid= require("uuid")


const bookingSchema= new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
      },
      userId: {
        type: objectId,
        required: true,
        ref: "userModel", // Provide the name of the referenced model as a string
      },
      userName: {
        type: String,
        required: true,
      },
  
      userPhone: {
        type: String,
        required: true,
      },
  
      booking_id: {
        type: String,
        default: uuid.v4, // Generate a unique identifier using uuid.v4
        unique: true,
      },
  
      totalNoOfRooms: {
        type: Number,
        
      },
  
      hotelName: {
        type: String,
        required: true,
      },
      hotel_id: {
        type: objectId,
        ref: "Hotel",
        required: true,
      },
      roomDetails: 
  [ {     noOfPeopleAllowed:Number,
        _id:{
          type:objectId,
          ref:'Room',
        },
        roomType:String,
        rate:Number,
        noOfRooms:Number
  }]
        // type: Array,
        // required: true,
      ,
      // noOfRooms:{
      //   type:Number,
      //   required:true
      // },
      checkIn: {
        type: Date,
      },
      checkOut: {
        type: Date,
      },
      totalDays: {
        type: Number,
        // required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      discountAmount: {
        type: Number,
        // required: true,
        default: 0,
      },
      status: {
        type: String,
        enum: ["pending", "paid", "checkIn", "checkOut", "cancelled"],
        default: "paid",
      },
      guestDetails: {
        type: Array,
        default: [],
      },
      paymentType: {
        type: String,
        // required: true,
        default: "null",
        enum:["wallet","card"]
      }, // Remove the extra comma here
    },
    {
      timestamps: true,
    
     
})

module.exports= mongoose.model("Booking",bookingSchema);