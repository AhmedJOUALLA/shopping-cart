import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
};

export default Cart;
