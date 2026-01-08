import React from 'react';
import CartSummary from '../components/CartSummary';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div>
      <CartSummary
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default CartPage;

