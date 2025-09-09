import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import { getProducts, deleteProduct } from "../api/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await getProducts(searchTerm);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  const handleEdit = (product) => setEditingProduct(product);
  const handleCloseEdit = () => setEditingProduct(null);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSort = (order) => {
    const sortedProducts = [...products].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <div className="search-sort">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={fetchProducts}>Search</button>
        <button onClick={() => handleSort("asc")}>Sort by Price ↑</button>
        <button onClick={() => handleSort("desc")}>Sort by Price ↓</button>
      </div>

      <AddProductForm onProductAdded={fetchProducts} />
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onClose={handleCloseEdit}
          onProductUpdated={fetchProducts}
        />
      )}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
