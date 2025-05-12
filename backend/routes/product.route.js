import express from 'express'
import Product from '../models/product.model.js';
import { createProducts, deleteProduct, getAllProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router(); 

//* Lets create our first API and which was GET Method 
router.get("/", getAllProducts) 

//* POST Method 
router.post("/", createProducts); 

//* PUT Method 
router.put("/:id", updateProduct)


//* DELETE Method 
router.delete("/:id", deleteProduct )

export default router; 