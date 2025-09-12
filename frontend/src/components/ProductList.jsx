import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productApi";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [sort]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts(search, sort);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        console.error("Error deleting product", err);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      {/*Search & Sort Section */}
      <div className="search-sort-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={fetchProducts}>Search</button>
        </div>

        <div className="sort-box">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/*Product Grid */}
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
}

export default ProductList;
