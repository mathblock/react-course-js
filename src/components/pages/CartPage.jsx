import React from "react";

function CartPage({ cart, removeFromCart, updateQuantity, clearCart }) {
  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Votre panier</h1>
        <p>Votre panier est vide pour le moment.</p>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Votre panier</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Plat</th>
            <th>Prix (€)</th>
            <th>Quantité</th>
            <th>Total (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total : {total.toFixed(2)} €</h2>
      <button onClick={clearCart} style={{ marginTop: "10px" }}>Vider le panier</button>
    </div>
  );
}

export default CartPage;
