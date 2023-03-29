import express from "express";
import { getPhotos } from "../controllers/photoController.js";
const photoRoute = express.Router();

photoRoute.get("/",getPhotos)