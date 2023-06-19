import mongoose from "mongoose";
const favoritePhotoSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },
        url:{
            type:String,
            required:[true,"please provide a photo url"],
        },
        description:{
            type:String,
            required:[true,"please provide a description"],

        },
        username: {
            type:String,
            required:[true,"please provide a username"],


        },
        explanation:{
            type:String,
            required:false,
        },
    },{
        timestamps:true,
    }
)

