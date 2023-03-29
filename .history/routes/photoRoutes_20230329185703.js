import express from "express";
import { getPhotos } from "../controllers/photoController.js";
export const photoRouter = express.Router();

 photoRouter.get("/",getPhotos)
 