//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");

import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

export const registerUser = 