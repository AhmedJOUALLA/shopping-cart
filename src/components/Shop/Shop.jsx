import useProducts from "../../useProducts";
import ProductCard from "./ProductCard";

const Shop = ({addToCart}) => {
  const { products, loading, error } = useProducts();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  
  return (
    <div>
      <h1>Shop</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;