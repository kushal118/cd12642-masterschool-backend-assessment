import express from "express";
import { welcomeRouter } from "./routes/welcomeRouter.js";
import { photoRouter } from "./routes/photoRoutes.js";
import { DBconnect } from "./config/db.js";
import  dotenv from "dotenv";
dotenv.config();


const app = express()
const PORT= process.env.PORT||3000;
DBconnect();

app.use(express.json())
app.use(express.urlencoded({}))
app.use("/",welcomeRouter)

app.use("/api/photos",photoRouter)
app.use("api/")

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})