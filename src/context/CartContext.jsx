import React, { createContext, useContext, useState, useMemo } from 'react';
import Cart from '../components/Cart';

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((curr) => {
      const existing = curr.find((c) => c.id === item.id);
      if (existing) {
        return curr.map((c) => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...curr, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => setCart((c) => c.filter((i) => i.id !== itemId));

  const updateQuantity = (itemId, quantity) => {
    setCart((c) => {
      if (quantity <= 0) return c.filter((i) => i.id !== itemId);
      return c.map((i) => (i.id === itemId ? { ...i, quantity } : i));
    });
  };

  const clearCart = () => setCart([]);

  const toggleCart = () => setIsCartOpen((s) => !s);

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, toggleCart }),
    [cart, isCartOpen]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Render cart here so it's available on every page */}
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </CartContext.Provider>
  );
};

export default CartContext;
