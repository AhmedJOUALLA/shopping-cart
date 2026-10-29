import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id == product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
        item.id == id ? { ...item, quantity: newQuantity } : item,
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => 
      prevCart.filter(item => item.id != id)
    )
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
