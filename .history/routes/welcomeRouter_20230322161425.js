import express  from "express";
export const welcomeRouter =  express.Router();
welcomeRouter.get("/",(req,res)=>{
    res.status(3)
    message: "Welcome to the Unsplash API!"
})