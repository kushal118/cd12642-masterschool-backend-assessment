import express  from "express";
export const welcomeRouter =  express.Router();
welcomeRouter.get("/",(req,res)=>{
    message: "Welcome to the Unsplash API!"
})