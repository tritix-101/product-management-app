function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="product-card">
      {/* Product Image */}
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      ) : (
        <div className="product-image placeholder">No Image</div>
      )}

      {/* Product Info */}
      <h3>{product.name}</h3>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p>{product.description}</p>
      <p>
        <em>Category:</em> {product.category}
      </p>

      {/* Buttons */}
      <div className="product-actions">
        <button className="edit-btn" onClick={() => onEdit(product._id)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
