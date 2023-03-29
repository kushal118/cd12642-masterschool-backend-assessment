import express from "express";
import * as dotenv from "dotenv";
import { welcomeRouter } from "./routes/welcomeRouter.js";
const app = express()
const PORT= process.env.PORT||3000;

app.use(express.json())
app.use("/",welcomeRouter)
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})
app.use("/api/")