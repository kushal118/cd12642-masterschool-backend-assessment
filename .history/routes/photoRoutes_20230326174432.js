import express from "express";
import { getPhotos } from "../controllers/photoController.js";
const photoRoute = express.Router();

export photoRoute.get("/",getPhotos)