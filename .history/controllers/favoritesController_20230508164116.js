import mongoose from "mongoose";
const favoritePhotoSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref
        }
    }
)