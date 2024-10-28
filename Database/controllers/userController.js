import bcrypt from "bcrypt"
import generateToken from "../utils/index.js";
import User from "../models/user.js";

const registerUser = async (req,res)=>{
    // recieve email and password from the user
    try {
        const  {email,password} = req.body;
        // checks if the user exists in the db by mail/users cannot have the same email
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({
                error: "User already exists"
            })
        }
    //    hash password
        const hashedPassword = await bcrypt.hash(password,10)
      
        // we creating a new user with the email and password field
        const user = await User.create({
            email,
            password:hashedPassword
        })
        const token = await generateToken(User._id)
        res.status(201).json({
            _id:user._id,
            email:user.email,
            token
        })
        
    } catch (error) {
        if (error.name === "validationError"){
            res.status(400).json({error:error.message})
        } 
        
        else{
            res.status(500).json({error:error.message})
            console.log(error.message)
        }
    }
}

// login the user
const loginUser = async (req,res)=>{
    // get the user
    try {
        const {email,password} = req.body;
        console.log(email)
        const foundUser = await User.findOne({email});
        console.log(foundUser)

        // check the users password with the provided password
        if (!foundUser || !(await foundUser.matchPasswords(password))){
            return res.status(401).json({
                error:"invalid login credentials"
            })
        }
        // generate a token for registered users
        const token = await generateToken(foundUser._id)
        res.status(200).json({
            _id:foundUser._id,
            email: foundUser.email,
            token,
        })
        

    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging
        res.status(500).json({error:"internal server error"})
    }
}

export {
    loginUser,
    registerUser
}