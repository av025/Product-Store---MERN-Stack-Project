// const express = require('express');  
//* This was old way we can import with the help of common.js but now we can import with the help of ES6 Modules 

import express from "express"; 
import dotenv from "dotenv"; 
import { connectDB } from "./config/database.js";


dotenv.config(); 

const app = express(); 
//* We assign app variable the express() function because it have many methods to create our server 

// console.log(app); //! When we console app object it give so many method of our express with the help of we can create our server for backend application  

//* Lets create our first API and which was GET Method 
app.get("/", (request, response) => {
    response.send("Your Server is Ready !!!!"); 
}) 

// console.log(process.env.MONGODB_URI);

//? Starting our server 
//* With the help of listen method we can start our server in nodejs 
//? list(Port-no , handler function) 


app.listen(5000, () => {
    connectDB(); 
    console.log("Your Server was Started at localhost:5000"); 
})