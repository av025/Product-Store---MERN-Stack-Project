/* This file server.js was the root file of our backend in which we setup the basic server to run our backend application  */
import express from "express"; 
import dotenv from "dotenv"; 
import path from "path";
import { connectDB } from "./config/database.js";
import productRoutes from "./routes/product.route.js";

// .env config 
dotenv.config();  


const app = express();   
const Port = process.env.BACKEND_PORT || 5000; 

const __dirname = path.resolve();


// Middle wares  
app.use(express.json()); 
app.use("/api/products", productRoutes)

if(process.env.NODE_ENV === "production") { 
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*splat", (request,response) => {
        response.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })

}

// Server Listing 
app.listen(Port, () => {
    connectDB(); 
    console.log(`Your Server was Started at localhost:${Port}`); 
})