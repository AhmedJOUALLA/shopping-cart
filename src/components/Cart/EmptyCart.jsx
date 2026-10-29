import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h3>Your shopping cart is empty</h3>
      <h4>Looks like you haven't added anything to your cart yet.</h4>
      <Link to="/shop">Start Shopping</Link>
    </div>
  );
};

export default EmptyCart;