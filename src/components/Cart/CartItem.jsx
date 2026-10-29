import "./CartItem.css";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleDecrement = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    if (window.confirm(`Remove ${item.title} from your cart?`)) {
      removeFromCart(item.id);
    }
  };

  const lineTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-item-info">
        <p className="category">{item.category}</p>
        <h3>{item.title}</h3>
        <p className="unit-price">${item.price.toFixed(2)} each</p>

        <div className="quantity">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>

      <div className="cart-item-right">
        <button className="remove-btn" onClick={handleRemove}>
          ✕
        </button>
        <p className="line-total">${lineTotal}</p>
      </div>
    </div>
  );
};

export default CartItem;