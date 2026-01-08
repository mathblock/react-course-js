import Hero from '../components/Hero';
import Menu from '../components/Menu';
import CartSummary from '../components/CartSummary';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
  const { cart, setCart } = useOutletContext() || { cart: [], setCart: () => {} };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((i) => i.id !== itemId);
      }
      return prevCart.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Hero />
      <Menu onAddToCart={addToCart} />
      <CartSummary
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
}

export default HomePage;
    