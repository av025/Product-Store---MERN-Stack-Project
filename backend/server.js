// const express = require('express');  
//* This was old way we can import with the help of common.js but now we can import with the help of ES6 Modules 

import express, { request, response } from "express"; 
import dotenv from "dotenv"; 
import { connectDB } from "./config/database.js";
import productRoutes from "./routes/product.route.js";

// .env config 
dotenv.config(); 

const app = express();   
// Middle wares  
app.use(express.json()); 
app.use("/api/products",productRoutes)


// Server Listing 
app.listen(5000, () => {
    connectDB(); 
    console.log("Your Server was Started at localhost:5000"); 
})