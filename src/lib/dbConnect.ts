import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();




type ConnectionObject = {
    isConnected?:number
}
const connection:ConnectionObject={}

async function dbConnect():Promise<void>{
   
   
    if(connection.isConnected){
        console.log("already connected to database");
        return
    }
    
    try{
        
       const db= await mongoose.connect(process.env.MONGODB_URI|| '',{})

       

        
   
       console.log("db connect successfully");
       
    }catch(error){
        console.log("database connection failed",error);
        
        process.exit(1)
        
    }
}

export default dbConnect;