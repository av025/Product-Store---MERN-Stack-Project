/* In this file product.route.js we create dynamic routes  for our CRUD Products API with the help of express Router  */
import express from 'express'
import { createProducts, deleteProduct, getAllProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router(); 


router.get("/", getAllProducts) 


router.post("/", createProducts); 


router.put("/:id", updateProduct)



router.delete("/:id", deleteProduct )

export default router; 