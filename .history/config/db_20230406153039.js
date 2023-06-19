import mongoose from "mongoose";

export const DBconnect = async await mongoose.connect(process.env.MONGO_DB_URI)