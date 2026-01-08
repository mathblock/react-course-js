import React from 'react';

const CartSummary = ({ cart, onUpdate, onRemove, onClear }) => {
  // Calcul du total général
  const totalGeneral = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Si le panier est vide : 'Votre panier est vide 🛒'
  if (cart.length === 0) {
    return (
      <div className="cart-empty menu-card" style={{ textAlign: 'center', padding: '40px' }}>
        <h3>Votre panier est vide 🛒</h3>
        <p>Parcourez le menu pour ajouter des délices !</p>
      </div>
    );
  }

  return (
    <section id="cart" className="cart-summary menu-card" style={{ marginTop: '30px' }}>
      <h2 style={{ borderBottom: '2px solid #ff6b00', paddingBottom: '10px' }}>Mon Panier</h2>
      
      <div className="cart-items-list">
        {cart.map(item => (
          <div key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #eee' }}>
            {/* Image miniature et infos */}
            <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
            
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <p style={{ margin: 0, color: '#ff6b00', fontWeight: 'bold' }}>{item.price.toFixed(2)}€</p>
            </div>

            {/* Contrôles de quantité : - | nombre | + */}
            <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => onUpdate(item.id, -1)} className="btn-qty">-</button>
              <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
              <button onClick={() => onUpdate(item.id, 1)} className="btn-qty">+</button>
            </div>

            {/* Sous-total (prix × quantité) */}
            <div style={{ minWidth: '80px', textAlign: 'right', fontWeight: 'bold' }}>
              {(item.price * item.quantity).toFixed(2)}€
            </div>

            {/* Bouton supprimer 🗑️ */}
            <button onClick={() => onRemove(item.id)} className="btn-remove" title="Supprimer">🗑️</button>
          </div>
        ))}
      </div>

      {/* Total général et Bouton Vider */}
      <div className="cart-footer" style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3 style={{ fontSize: '1.5rem' }}>Total Général : {totalGeneral.toFixed(2)}€</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '10px' }}>
          <button onClick={onClear} className="btn-clear-all">Vider le panier</button>
          <button className="btn-primary" style={{ padding: '10px 25px' }}>Commander</button>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;