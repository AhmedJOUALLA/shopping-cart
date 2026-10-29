import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  const total =  cart.reduce((total, item) => total + (item.price * item.quantity), 0) 

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
      <p>Total : ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
