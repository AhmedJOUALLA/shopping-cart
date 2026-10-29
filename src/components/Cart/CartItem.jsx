const CartItem = ({ item, updateQuantity, removeFromCart }) => {

  const handleDecrement = () => {
    updateQuantity(item.id, item.quantity -1)
  }

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }


  
  const handleRemove = () => {
    if (window.confirm(`Remove ${item.title} from your cart ? `)) {
      removeFromCart(item.id)
    }
  }
  

  const lineTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div>
      <img src={item.image} alt={item.title} width="100" />
      <p>{item.title}</p>
      <p>{item.price.toFixed(2)}</p>
      <p>{item.quantity}</p>
   
      <button onClick={handleIncrement}>
        +
      </button>
      <button
        onClick={handleDecrement}
      >
        -
      </button>
      <p>Total : ${lineTotal}</p>
      <button onClick={handleRemove} >Remove</button>
   
    </div>
  );
};

export default CartItem;
