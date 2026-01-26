import React from 'react';
import './Cart.css';

const Cart = ({
  cart = [],
  removeFromCart,
  updateQuantity,
  clearCart,
  isOpen = true,
  onClose = () => {}
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Votre Panier</h2>
          <button className="cart-close" onClick={onClose} aria-label="Fermer le panier">
            ✕
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="cart-empty">Votre panier est vide.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{item.price.toFixed(2)} €</span>
                  </div>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => {
                        const nextValue = Number(e.target.value);
                        updateQuantity(item.id, Number.isNaN(nextValue) ? 1 : nextValue);
                      }}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <p>Total: {total.toFixed(2)} €</p>
              <button className="cart-clear" onClick={clearCart}>Vider le panier</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Cart;
