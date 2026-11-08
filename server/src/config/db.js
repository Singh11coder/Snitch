import mongoose from "mongoose";
import config from "./config.js";


export const ConnectToDB = async() => {
    try{
      await mongoose.connect(config.MONGO_URI);
      console.log("DB conneted Successfully");
    }catch(error){
      console.log("Error in Connecting DB",error.message);
    }
}