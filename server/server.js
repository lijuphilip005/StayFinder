const express=require("express")
const cors=require("cors")
const app= express()
app.use(cors())
app.use(express.json())

app.get('/users',(req,res)=>{res.json({users:["liju","philip"]})})

app.listen(5000,()=>console.log("server is running on port 5000"))