import express from "express";
import * as dotenv from "dotenv";
const app = express()
const PORT= process.env.PORT||3000;

app.use(express)
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})