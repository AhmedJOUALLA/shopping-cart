import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    setQuantity((q) => Math.max(1, q - 1));
  }

  const increment = () => {
    setQuantity(q => q + 1) 
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(Number.isNaN(value) ? 1 : Math.max(1, value))
  }
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={decrement}>-</button>
      <input type="number" onChange={handleChange} />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ProductCard;