import express from "express";
import { registerUser } from "../controllers/userController.js";
export const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",log)