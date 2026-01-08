import CartSummary from '../components/CartSummary';
import { useOutletContext } from 'react-router-dom';

function CartPage() {
  const { cart, setCart } = useOutletContext() || { cart: [], setCart: () => {} };

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
      <CartSummary
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
}

export default CartPage;
