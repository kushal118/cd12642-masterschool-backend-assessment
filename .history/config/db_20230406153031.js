import mongoose from "mongoose";

export const DBconnect = asynawait mongoose.connect(process.env.MONGO_DB_URI)