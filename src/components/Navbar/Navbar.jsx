import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-blue">JOUALLA </span>Store
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
