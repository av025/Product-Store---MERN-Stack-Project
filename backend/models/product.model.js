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
    timestamps: true //* When we give timestamps: true so it give info about createdAt and updatedAt 
}) 

const Product = mongoose.model('Product', productSchema); 
//* Here we create The DB which name was Product 

export default Product;