import axios from "axios";
import API from "../api/axios";
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

export const getProducts = async () => {
  const response = await API.get(
    "/products"
  );

  return response.data;
};

// get All products
export const getAllProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

// Existing products API functions
export const getProductById = async (id) => {
  const response = await API.get(`/products/${id}`);
  return response.data;
};

// Create a new product
export const createProduct = async (productData) => {
  const response = await API.post("/products", productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Update a product
export const updateProduct = async (id, productData) => {
  const response = await API.put(`/products/${id}`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
  const response = await API.delete(`/products/${id}`);
  return response.data;
};  