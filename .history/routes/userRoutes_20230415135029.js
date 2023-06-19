import express from "express";
import { registerUser } from "../controllers/userController";
export const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",callback)
userRouter.post("/userinfo",callback)