import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      {cart.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

export default Cart;
