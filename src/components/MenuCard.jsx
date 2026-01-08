// src/components/MenuCard.jsx
// Modified from Day 1 for add button and feedback
import { useState } from 'react';

const MenuCard = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.price} €</p>
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: isAdded ? 'green' : '#ff6b35', // Simple animation via style change
          transition: 'background-color 0.3s',
        }}
      >
        {isAdded ? '✓ Ajouté' : 'Ajouter au panier'}
      </button>
    </div>
  );
};

export default MenuCard;