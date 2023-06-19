import asyncHandler from "express-async-handler";
import favoritePhotoModel from "../models/favoritePhotoModel.js";


export const addFavourite = asyncHandler(async())