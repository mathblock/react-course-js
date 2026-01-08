import "./CartSummary.css";

function CartSummary({ cart, removeFromCart, updateQuantity, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className="empty-cart">Votre panier est vide 🛒</p>;
  }

  return (
    <div className="cart-summary">
      <h2>🛒 Votre Panier</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>
              {item.price.toFixed(2)} € x {item.quantity} ={" "}
              <strong>{(item.price * item.quantity).toFixed(2)} €</strong>
            </p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Supprimer
            </button>
          </div>
        </div>
      ))}

      <h3 className="total">Total général : {total.toFixed(2)} €</h3>

      <div className="cart-actions">
        <button className="clear-btn" onClick={clearCart}>Vider le panier</button>
        <button className="pay-btn" onClick={() => alert("Paiement en cours... 💳")}>
          Payer
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
