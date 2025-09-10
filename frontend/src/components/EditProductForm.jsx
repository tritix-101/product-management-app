import React, { useEffect, useState } from "react";
import { updateProduct } from "../api/productApi";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:7777/api/products/${id}`);
        setFormData({
          name: res.data.name || "",
          price: res.data.price || "",
          description: res.data.description || "",
          category: res.data.category || "",
          imageUrl: res.data.imageUrl || "", // ✅ always fallback to empty string
        });
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, formData);
      alert("Product updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error updating product", err);
      alert("Failed to update product");
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center" }}>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
