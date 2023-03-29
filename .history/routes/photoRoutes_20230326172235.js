import express from "express";
import { getPhotos } from "../controllers/photoController.js";
export const photoRoute = express.Router();

photoRoute.get("/photos",getPhotos)