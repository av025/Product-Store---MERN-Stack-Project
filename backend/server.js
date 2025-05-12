/* This file server.js was the root file of our backend in which we setup the basic server to run our backend application  */
import express from "express"; 
import dotenv from "dotenv"; 
import { connectDB } from "./config/database.js";
import productRoutes from "./routes/product.route.js";

// .env config 
dotenv.config();  

const Port = process.env.BACKEND_PORT || 5000; 

const app = express();   
// Middle wares  
app.use(express.json()); 
app.use("/api/products",productRoutes)


// Server Listing 
app.listen(Port, () => {
    connectDB(); 
    console.log(`Your Server was Started at localhost:${Port}`); 
})