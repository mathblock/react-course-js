import React, { useState } from 'react';
import './MenuCard.css';

const MenuCard = ({ item, onAddToCart }) => {
  const [showAdded, setShowAdded] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(item);
    setAddedCount(prev => prev + 1);
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
    }, 500);
  };

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.title} className="menu-card-image" />
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.title}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">{item.price.toFixed(2)} €</span>
          <button 
            className={`add-to-cart-btn ${showAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {showAdded ? `${addedCount} Ajouté` : 'Ajouter au panier'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

