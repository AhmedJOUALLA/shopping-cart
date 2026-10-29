import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <h1>Elevate Your Daily Lifestyle Essentials</h1>
      <p className="hero-text">
        Discover carefully selected apparel, precision electronics, and premium
        goods designed for modern life.
      </p>
      <div className="hero-buttons">
        <Link to="/shop" className="btn btn-primary">
          Explore Products
        </Link>
        <Link to="/cart" className="btn btn-secondary">
          View Cart
        </Link>
      </div>
      <div className="features">
             <div className="feature-card">
               <h3>Fast Delivery</h3>
               <p>Worldwide insured shipping directly to your doorstep.</p>
             </div>
             <div className="feature-card">
               <h3>Verified Quality</h3>
               <p>Hand-picked, high standard catalog from verified makers.</p>
             </div>
             <div className="feature-card">
               <h3>Hassle-Free Returns</h3>
               <p>30-day money-back guarantee with straightforward support.</p>
             </div>
           </div>
    </main>
  );
};

export default Home;