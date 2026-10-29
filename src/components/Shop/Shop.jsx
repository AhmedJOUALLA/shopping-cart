import useProducts from "../../useProducts";
import ProductCard from "./ProductCard";
import "./Shop.css";

const Shop = ({ addToCart }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="message">Loading...</p>;
  if (error) return <p className="message">Something went wrong: {error.message}</p>;

  return (
    <main className="shop">
      <h1>Catalogue</h1>
      <p className="shop-subtitle">
        Select your quantity and add items directly to your cart.
      </p>

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
};

export default Shop;