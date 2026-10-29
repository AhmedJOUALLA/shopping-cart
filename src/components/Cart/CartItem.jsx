const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div>
      <img src={item.image} alt={item.title} width="100" />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
        +
      </button>
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
      >
        -
      </button>
   
    </div>
  );
};

export default CartItem;
