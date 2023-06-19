import express from "express";
import { welcomeRouter } from "./routes/welcomeRouter.js";
import { photoRouter } from "./routes/photoRoutes.js";
import { DBconnect } from "./config/db.js";
import  dotenv from "dotenv";



const app = express()
const PORT= process.env.PORT||3000;
DBconnect();

app.use(express.json())
app.use("/",welcomeRouter)

app.use("/api/photos",photoRouter)

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})