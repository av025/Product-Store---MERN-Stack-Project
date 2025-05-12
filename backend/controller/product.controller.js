import Product from "../models/product.model.js";

export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(`Error Message : ${error.message}`);
    response.status(500).json({ success: false, message: "Server Error !!!" });
  }
};

export const createProducts = async (request, response) => {
  const product = request.body;
  //* if user did not fill this field on the client side
  if (!product.name || !product.price || !product.img) {
    return response
      .status(400)
      .json({ success: false, message: "Please Provide all information" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    response.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`Error Message : ${error.message}`);
    response.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (request, response) => {
  const { id } = request.params;
  const productInfo = request.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response
      .status(404)
      .json({ success: false, message: "Product not found !!!" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productInfo, {
      new: true,
    });
    response.status(201).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log(`Error Message : ${error.message}`);
    response.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (request, response) => {
  const { id } = request.params;

  try {
    await Product.findByIdAndDelete(id);
    response
      .status(200)
      .json({ success: true, message: "Product deleted Successfully" });
  } catch (error) {
    console.log(`Error Message : ${error.message}`);
    response
      .status(400)
      .json({ success: false, message: "Product was not found !!!" });
  }
};
