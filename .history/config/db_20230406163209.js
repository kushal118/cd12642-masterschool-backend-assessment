import mongoose from "mongoose";

export const DBconnect = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
    }
} 