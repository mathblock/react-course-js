
import  { useState } from 'react';    
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import CartSummary from '../components/Cartsummary';


function Homepage() {
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

   const updateQuantity = (itemId, amount) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  
          
  return (
    <div>
    
      <Hero />
      <main>
        <Menu onAddToCart={addToCart} />
       <CartSummary cart={cart}  onUpdate={updateQuantity }  onRemove={removeFromCart} onClear={clearCart} />
      </main>

      
    </div>
  );
}
export default Homepage;




































