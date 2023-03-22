import express  from "express";
const welcomeRouter =  express.Router();
welcomeRouter.get("/",(req,res)=>{
    message: "Welcome to the Unsplash API!"
})