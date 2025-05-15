import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: set((products) => {
    products;
  }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.img) {
      return { success: false, message: "Please fill in all fields !!!" };
    }

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = response.json();
    set((state) => ({ products: [...state.products, data.data] }));

    return { success: true, message: "Product Created Successfully" };
  },
  fetchProducts: async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    set({ products: data.data });
  },
  deleteProduct: async (pId) => {
    const response = await fetch(`api/products/${pId}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      products: state.products.filter((product) => product._id !== pId),
    }));

    return { success: true, message: data.message };
  },
  updateProduct: async (pId, updatedProduct) => {
    const response = await fetch(`/api/products/${pId}`, {
      method:"PUT",
      headers: {
        "Content-Type":"application/json", 

      },
      body:JSON.stringify(updatedProduct)
    }); 

    const data = await response.json();
    if(!data.success) {
      return {success: false , message: data.message}
    } 

    set(state => ({products:state.products.map(product => product._id === pId ? data.data : product)})); 

    return { success: true, message: data.message };
  }
}));
