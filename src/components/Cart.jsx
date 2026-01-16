import { useState } from 'react';

const Cart = ({ cart, onRemove, onUpdate, onClear }) => {
  const [editingInputs, setEditingInputs] = useState({});

  const total = cart.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    return sum + (price * quantity);
  }, 0);

  const handleInputChange = (itemId, value) => {
    // Sauvegarder la valeur en cours de saisie
    setEditingInputs(prev => ({ ...prev, [itemId]: value }));
    
    // Mettre à jour immédiatement si la valeur est valide
    if (value !== '' && value !== null && value !== undefined) {
      const newQuantity = parseInt(value, 10);
      if (!isNaN(newQuantity) && newQuantity >= 0) {
        onUpdate(itemId, newQuantity);
      }
    }
  };

  const handleInputBlur = (itemId) => {
    const editingValue = editingInputs[itemId];
    const item = cart.find(i => i.id === itemId);
    
    // Si la valeur en cours d'édition est vide ou invalide, restaurer la valeur du panier
    if (editingValue === '' || editingValue === null || editingValue === undefined || 
        isNaN(parseInt(editingValue, 10)) || parseInt(editingValue, 10) < 0) {
      if (item) {
        setEditingInputs(prev => {
          const newInputs = { ...prev };
          delete newInputs[itemId];
          return newInputs;
        });
        // Si la valeur est invalide et que l'item existe, restaurer la quantité actuelle
        if (item.quantity > 0) {
          onUpdate(itemId, item.quantity);
        }
      }
    } else {
      // Nettoyer la valeur d'édition une fois validée
      setEditingInputs(prev => {
        const newInputs = { ...prev };
        delete newInputs[itemId];
        return newInputs;
      });
    }
  };

  return (
    <section className="cart">
      <h2>Votre panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              const quantity = Number(item.quantity) || 1;
              const price = Number(item.price) || 0;
              const itemTotal = price * quantity;
              // Utiliser la valeur en cours d'édition si elle existe, sinon la valeur du panier
              const inputValue = editingInputs[item.id] !== undefined 
                ? editingInputs[item.id] 
                : quantity;
              
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{price.toFixed(2)}€ x {quantity}</span>
                  <span style={{ fontWeight: 'bold', color: '#e67e22' }}>
                    = {itemTotal.toFixed(2)}€
                  </span>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    onBlur={() => handleInputBlur(item.id)}
                    min="0"
                  />
                  <button onClick={() => onRemove(item.id)}>Retirer</button>
                </li>
              );
            })}
          </ul>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
            Total: {total.toFixed(2)}€
          </p>
          <button onClick={onClear}>Vider le panier</button>
        </>
      )}
    </section>
  );
};

export default Cart;