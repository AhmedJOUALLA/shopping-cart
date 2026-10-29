import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Your shopping cart is empty</h2>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <Link to="/shop" className="empty-btn">
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;