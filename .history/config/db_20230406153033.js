import mongoose from "mongoose";

export const DBconnect = asyn await mongoose.connect(process.env.MONGO_DB_URI)