import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import "./Cart.css";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      <h1>Shopping Bag</h1>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className="summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;