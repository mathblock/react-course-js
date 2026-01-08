import "./CartSummary.css";

function CartSummary({
  cart,
  removeFromCart,
  updateQuantity,
  clearCart,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="empty-cart">Votre panier est vide 🛒</p>;
  }

  return (
    <div className="cart-summary">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.price.toFixed(2)} €</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Supprimer</button>
          </div>
        </div>
      ))}

      <h3>Total : {total.toFixed(2)} €</h3>
      <button className="clear-btn" onClick={clearCart}>Vider le panier</button>
    </div>
  );
}

export default CartSummary;
