import express from "express";
import cors from 'cors'
import { connectDatabase } from "./config/connectToDb.js";
import dotenv from 'dotenv'
import { noteRoute } from "./routes/noteRoute.js";

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}
//creating express object
const app = express();

//connecting database
connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/note",noteRoute);


app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("working-" + process.env.PORT)
    }
})

