//Import asyncHandler so that we can use it in our routes to trigger error handling middleware

import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

//POST//api/users/register
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
    if(!newer)
    //send the user and a token back
    res.status(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        token: createToken(newUser.id),
    })

})
export const loginUser= asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    // check for user email 
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id:user.id,
            username:user.username,
            email:user.email,
            token: createToken(user.id),
        })
    }
})

//get /api/users/me
export const  getMe = asyncHandler(async(req,res)=>{
    const { id, username, email} = await User.findById(req.user.id);
    res.status(200).json({ id, username, email })
})
const createToken =(id) =>{
    //create new token with id
    return jwt.sign({ id },process.env.JWT,{
        expiresIn:"30d",}
        );


};
