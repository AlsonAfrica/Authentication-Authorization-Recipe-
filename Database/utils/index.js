import jwt from "jsonwebtoken"

// generate a token for the specific signed in user
function generateToken(id){
   return jwt.sign({id:id}, process.env.JWT_SECRET,{
    expiresIn:"1h",
   })
}

export default generateToken