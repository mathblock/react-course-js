import React, { useState } from "react";
import Header from "../Header";
import Menu from "../Menu";
import CartPage from "./CartPage";
import menuData from "../../data/menuData.js";

function HomePage() {
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  const addToCart = (item) => {
    setCart(prevCart => {
      const exists = prevCart.find(i => i.id === item.id);
      if (exists) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => setCart(prevCart => prevCart.filter(i => i.id !== itemId));

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) removeFromCart(itemId);
    else setCart(prevCart => prevCart.map(i => i.id === itemId ? { ...i, quantity } : i));
  };

  const clearCart = () => setCart([]);

  const toggleCartPage = () => setShowCartPage(!showCartPage);

  return (
    <div>
      <Header cart={cart} onCartClick={toggleCartPage} />

      {showCartPage ? (
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      ) : (
        <Menu menu={menuData} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default HomePage;
