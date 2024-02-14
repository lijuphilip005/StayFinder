const mongoose =require("mongoose")
const dbConnect= async()=>{
    try{
          await mongoose.connect(process.env.DATABASE_URI,{
             useNewUrlParser: true,
              useUnifiedTopology: true,
          })
           
    }catch(error){
        console.log(`connection failed ${error}`)

    }
}

module.exports= dbConnect