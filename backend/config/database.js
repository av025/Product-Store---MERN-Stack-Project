/** In this file database.js  we configure the connection of our Backend Application to MongoDB Database with the help of mongoose ORM  */

import mongoose from "mongoose"; 

export const connectDB = async () =>  {
    try { 
        const connectToDB = await mongoose.connect(process.env.MONGODB_URI); 
        console.log(`MongoDB Connected Successfully ${connectToDB.connection.host}`); 

    }catch(error) { 
      console.error("Message Error : ", error.message); 
      process.exit(1); 
    //  ! Here status code 1 of process means error or if we use 0 than that means success to connect with DB 

    }
}