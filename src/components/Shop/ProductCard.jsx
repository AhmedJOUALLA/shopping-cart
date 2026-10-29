import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const increment = () => {
    setQuantity((q) => q + 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(Number.isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <p className="category">{product.category}</p>
      <h3>{product.title}</h3>

      <div className="price-row">
        <span className="price-label">Price</span>
        <span className="price">${product.price.toFixed(2)}</span>
      </div>

      <div className="actions">
        <div className="quantity">
          <button onClick={decrement}>-</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
          />
          <button onClick={increment}>+</button>
        </div>
        <button className="add-btn" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;