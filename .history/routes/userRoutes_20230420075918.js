import express from "express";
import { getMe, loginUser, registerUser } from "../controllers/userController.js";
export const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/me",getMe)