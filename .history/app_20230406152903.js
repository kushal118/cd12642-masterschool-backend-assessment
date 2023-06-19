import express from "express";
import * as dotenv from "dotenv";
import { welcomeRouter } from "./routes/welcomeRouter.js";
import { photoRouter } from "./routes/photoRoutes.js";

const app = express()
const PORT= process.env.PORT||3000;


app.use(express.json())
app.use("/",welcomeRouter)

app.use("/api/photos",photoRouter)

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})