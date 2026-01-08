import React from "react";

const CartSummary = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>Votre panier est vide 🛒</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "20px" }}>
      <h2>Panier</h2>
      {cart.map(item => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src={item.image} alt={item.title} width="50" />
          <div style={{ marginLeft: "10px", flex: 1 }}>
            <h4>{item.title}</h4>
            <p>{item.price}€</p>
          </div>
          <div>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <span style={{ margin: "0 5px" }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>Supprimer</button>
        </div>
      ))}
      <h3>Total : {total.toFixed(2)}€</h3>
      <button onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default CartSummary;
