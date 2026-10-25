import { Link } from "react-router-dom";


const Navbar = ({cart}) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity , 0)
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart({totalItems})</Link>
      </nav>
  );
};

export default Navbar;
