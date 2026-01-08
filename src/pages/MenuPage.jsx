import React from 'react';
import Menu from '../components/Menu';
import { useOutletContext } from 'react-router-dom';

function MenuPage() {
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

  return (
    <Menu onAddToCart={addToCart} />
  );
}

export default MenuPage;