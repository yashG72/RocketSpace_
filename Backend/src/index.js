import mongoose from "mongoose";
import {app} from "./app.js"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path : "./env"
})

connectDB()
.then(()=>{
    app.on("error",(e)=>{
        console.error("Error : " , e);
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((e)=>{
    console.log("MongoDB connection failed!!", e);
})



