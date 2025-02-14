import jwt from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "express-async-handler";
export default asyncHandler(async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split("")[1];

            const decoded = jwt.verify(token,process.env.JWT);
            
            req.user = await User.findById(decoded.id).select("-password");
            next()
        } catch (error) {
            res.status(401);
            throw new Error("Not Authorized,No Token")
            
        }
    }
    if(!token){
        res.status(401);
        throw new Error("Not Authorized,No Token")
    }

})
