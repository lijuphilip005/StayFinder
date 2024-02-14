const Mongoose= require("mongoose")


const hotelSchema= new Mongoose.Schema({
        hotelName:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },
        images:{
            type:[String],default:[]
        },
        owner_id:{
            type:Mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },
        reviews:{
            type:Mongoose.Schema.Types.ObjectId,ref:"Review"
        },
        averageRating:{
            type:Number,default:0
        },
        roomDetails:[{
            type:Mongoose.Schema.Types.ObjectId,ref:"Room",default:null
        }],
       coupon:{
        type:Mongoose.Schema.Types.ObjectId,ref:"coupon"
       },
       address:{
        type:Array,
        default:[]
       },
       features:{
        type:Array,
        default:[]
       },
       rate:{
        type:Number,
         default:0
       },
       numberOfRooms:{
         type:Number,
         default:0

       },
      
       status:{
         type:String,
         enum:["listed","delisted","waiting for approval"],
         default:"waiting for approval",
         required:true,
       },

       created_at:{
        type:Date,
        required:true,
        default:Date.now
       },

       created_at:{
        type:Date,
        required:true,
        default:Date.now
       }

       



})

module.exports=Mongoose.model("hotel",hotelSchema)