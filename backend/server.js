 import express from "express"; 
 import dotenv from "dotenv"; 
 import { connectDB } from "./config/database.js";

dotenv.config()

const app = express(); 

app.get("/products", (request, response) => {
    response.send("Products Routes"); 
}) 

app.get("/", (request, response) => {
    response.send("Home Route"); 
})

console.log(process.env.MONOGODB_URI); 

app.listen(5000, () => {
    connectDB(); 
    console.log("Server Started at local-host:5000 ");
});

