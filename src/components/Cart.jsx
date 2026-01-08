import React from 'react';
import './Cart.css';

const Cart = ({ isOpen = false, onClose = () => {}, cart = [], removeFromCart, updateQuantity, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <aside id="cart" className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Votre Panier</h2>
          <button className="cart-close" onClick={onClose} aria-label="Fermer le panier">✕</button>
        </div>
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-left">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{item.price.toFixed(2)} €</span>
                  </div>
                  <div className="cart-item-right">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <p className="cart-total">Total: {total.toFixed(2)} €</p>
              <div className="cart-actions">
                <button onClick={clearCart} className="cart-clear">Vider le panier</button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Cart;
