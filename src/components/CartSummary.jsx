// src/components/CartSummary.jsx
const CartSummary = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="empty-cart">Votre panier est vide 😢</div>;
  }

  return (
    <div className="cart-summary">
      <h2>Votre Panier</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">{item.price} €</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <span className="subtotal">{(item.price * item.quantity).toFixed(2)} €</span>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="total">Total: {total.toFixed(2)} €</div>
        <button className="clear-cart-btn" onClick={clearCart}>Vider le panier</button>
      </div>
    </div>
  );
};

export default CartSummary;