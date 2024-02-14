const mongoose=require('mongoose')
const objectId=require('mongodb').ObjectId
const bcrypt=require('bcrypt')
const saltRounds=10;

var userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
        validate: {
            validator: (value) => /^[a-zA-Z ]+$/.test(value),
            msg: "Name must be at least 3 characters long and contain only letters and spaces",
          },

        lowercase:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
        message:"Invalid email address"
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:5,
        maxlength:60,
        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,128}$/,
        message:"Password must be at least 5  characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
   active:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        default:"user"

    },
    favorites:[{
        type:mongoose.ObjectId,
        ref:"Hotels"
    }],

    accessToken:{
        type:String,
        default:null
    },
    refreshToken:{
        type:String,
        default:null
    },
    

},{timestamps:true})

userSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,saltRounds)
})

userSchema.methods.isPassWordMatched=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model('user',userSchema)

