import axios from "axios";

const API_URL = "http://localhost:7777/api/products";

// get products (with optional search + sort)
export const getProducts = (name = "", sort = "asc") =>
  axios.get(API_URL, { params: { name, sort } });

export const addProduct = async (product) => {
  return axios.post(API_URL, product); // ✅ return promise
};

export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export const updateProduct = (id, product) =>
  axios.put(`${API_URL}/${id}`, product); // ✅ add this
