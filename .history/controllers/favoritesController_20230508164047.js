import mongoose from "mongoose";
const favoritePhotoSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.Object
        }
    }
)