import express from "express";
import { getPhotoById, getPhotos } from "../controllers/photoController.js";
export const photoRouter = express.Router();

 photoRouter.get("/",getPhotos)
 photoRouter.get("/:id",getPhotoById)
 photoRouter.get("/photos")