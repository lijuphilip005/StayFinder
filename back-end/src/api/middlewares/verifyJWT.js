const jwt= require('jsonwebtoken')

 const verifyJWT=(req,res,next)=>{
    console.log(
        "here iam "
    )
     const authHeader=req.headers.authorization || req.headers.Authorization
      console.log(authHeader,"heloo world")
     if(!authHeader?.startsWith('Bearer')){
        return res.status(401).json({message:" unauthorized"})
    }
  const token=authHeader.split(" ")[1]
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded)=>{
        console.log(err)
        if(err)return res.status(403).json({message:"Forbidden"})
        req.email=decoded.userInfo.email
        req.roles=decoded.userInfo.roles
        next()
    }
  )



}

module.exports=verifyJWT
