import axios from "axios";

const API_URL = "http://localhost:7777/api/products";

export const getProducts = (search) =>
  axios.get(API_URL, { params: { name: search || "" } });

export const addProduct = (product) => axios.post(API_URL, product);

export const editProduct = (id, updatedProduct) =>
  axios.put(`${API_URL}/${id}`, updatedProduct);

export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
