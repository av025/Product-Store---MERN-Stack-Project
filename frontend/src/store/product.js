import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: set((products) => { products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.img) {
      return { success: false, message: "Please fill in all fields !!!" };
    } 

    const response = await fetch("/api/products",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newProduct) 

    }) 

    const data = response.json(); 
    set((state) => ({products:[...state.products, data.data]})) 

    return {success: true, message:"Product Created Successfully"}
  },
  fetchProducts: async() => {
    const response = await fetch("/api/products" );
    const data = await response.json(); 
    set({products: data.data})
  },
  fetchProducts: async() => {
    const response = await fetch("/api/products"); 
    const data = await response.json(); 
    set({products:data.data});
  }
}));
