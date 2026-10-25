import useProducts from "../../useProducts";
const Shop = () => {
  const { products, loading, error } = useProducts();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  
  console.log(products)
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;