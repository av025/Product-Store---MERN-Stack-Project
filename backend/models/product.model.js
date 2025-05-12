/*  This File product.model.js in which we are creating the schema of our products Database and than create Model of our Products to store data in our MongoDB   */ 


import mongoose from "mongoose"; 

const productSchema =  new mongoose.Schema({
    name: {
        type:String, 
        require: true
    }, 
    price : {
        type: Number,
        require:true
    }, 
    img: {
        type: String,
        require: true
    }
}, {
    timestamps: true
}) 

const Product = mongoose.model('Product', productSchema); 

export default Product;