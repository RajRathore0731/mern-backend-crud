import mongoose from "mongoose";
import dotenv from 'dotenv'
if (process.env.NODE_ENV != "production") {
    dotenv.config();
  }
const connectDatabase = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("data base connected")
    }
    catch(err){
        console.log(err)
    }
}

export {connectDatabase};