import mongoose from "mongoose";

export const DBconnect = await mongoose.connect(process.env.MONGO_DB)