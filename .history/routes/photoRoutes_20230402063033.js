import express from "express";
import { getPhotoById, getPhotos, getUserPhotos } from "../controllers/photoController.js";
export const photoRouter = express.Router();

 photoRouter.get("/",getPhotos)
 photoRouter.get("/:id",getPhotoById)
 photoRouter.get("/phot/users/:username",getUserPhotos)