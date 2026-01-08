import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cart, onRemoveFromCart, onUpdateQuantity, onClearCart, onCheckout }) => {
  const calculateSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-summary">
        <h2>Votre Panier</h2>
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <p>Votre panier est vide</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <div className="cart-header">
        <h2>Votre Panier</h2>
        <button className="clear-cart-btn" onClick={onClearCart}>
          Vider le panier
        </button>
      </div>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-description">{item.description}</p>
              <div className="cart-item-footer">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-price">
                  <span className="subtotal">{calculateSubtotal(item)} €</span>
                  <span className="unit-price">{item.price.toFixed(2)} € / unité</span>
                </div>
              </div>
            </div>
            <button
              className="remove-item-btn"
              onClick={() => onRemoveFromCart(item.id)}
              aria-label="Supprimer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div className="total-info">
          <span className="total-label">Total ({totalItems} article{totalItems !== 1 ? 's' : ''})</span>
          <span className="total-amount">{calculateTotal()} €</span>
        </div>
        {onCheckout && (
          <button className="checkout-btn" onClick={onCheckout}>
            Commander
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSummary;

