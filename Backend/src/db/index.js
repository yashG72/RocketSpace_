import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
console.log(process.env.PORT);
const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongo DB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(e){
        console.log("MongoDB connection error : " , e);
        process.exit(1);
    }
}

export default connectDB