//Import asyncHandler so that we can use it in our routes to trigger error handling middleware

import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password}= req.body;

    if(!username|| !email || !password){
        res.status(400);
        throw new Error("please Add All Fields")
    }
    const emailExists = await User.findOne({email});
    if(emailExists){
        res.status(400);
        throw new Error("Email already exists.");
    }
    //hash the password
    //math => 3rd party encryption library
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password,salt);
    
    //create new user
    const newUser = await User.create({
        username,
        email,
        password: hash,

    })
    
    //send the user and a token back
    res.status(201).json({
        
    })

})