import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartSummary from '../components/CartSummary';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { addOrder, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Rediriger vers login si non connecté
      navigate('/login', { state: { from: { pathname: '/cart' } } });
      return;
    }

    if (cart.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    setIsProcessing(true);

    // Calculer le total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    // Créer la commande
    const order = {
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: total
    };

    // Ajouter la commande à l'historique
    addOrder(order);

    // Vider le panier
    clearCart();

    // Afficher un message de confirmation
    alert(`Commande passée avec succès ! Total : ${total} €`);

    // Rediriger vers le profil pour voir la commande
    navigate('/profile');
    setIsProcessing(false);
  };

  return (
    <div>
      <CartSummary
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />
      {isProcessing && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Traitement de votre commande...
        </div>
      )}
    </div>
  );
}

export default CartPage;

