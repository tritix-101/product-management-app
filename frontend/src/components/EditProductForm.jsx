import React, { useState, useEffect } from "react";
import { editProduct } from "../api/productApi";

const EditProductForm = ({ product, onClose, onProductUpdated }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
      });
    }
  }, [product]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(product._id, {
        ...formData,
        price: Number(formData.price),
      });
      alert("Product updated successfully!");
      onProductUpdated();
      onClose();
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product.");
    }
  };

  if (!product) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
